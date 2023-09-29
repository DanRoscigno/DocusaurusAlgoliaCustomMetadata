# HDFSへのインポート

StarRocksでは、HDFSから大量のデータをインポートするために2つの方法がサポートされています：[Broker Load](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md)と[INSERT](../sql-reference/sql-statements/data-manipulation/insert.md)。

バージョン3.0およびそれ以前では、StarRocksはBroker Loadのみをサポートしていました。Broker Loadは非同期のインポート方法であり、インポートジョブを提出すると、StarRocksは非同期でジョブを実行します。インポートジョブの結果を確認するには、[SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md)ステートメントまたは`curl`コマンドを使用する必要があります。

Broker Loadは、単一のインポートトランザクションの原子性を保証します。つまり、単一のインポートで複数のデータファイルがすべて成功するか、すべて失敗するかのいずれかであり、一部のインポートが成功し、一部のインポートが失敗することはありません。

さらに、Broker Loadは、インポートプロセス中にデータ変換を行ったり、UPSERTおよびDELETE操作を使用してデータ変更を行ったりすることもサポートしています。[インポートプロセスでのデータ変換の実現](/loading/Etl_in_loading.md)および[インポートを使用したデータ変更の実現](../loading/Load_to_Primary_Key_tables.md)を参照してください。

> **注意**
>
> Broker Load操作には、対象テーブルのINSERT権限が必要です。ユーザーアカウントにINSERT権限がない場合は、[GRANT](../sql-reference/sql-statements/account-management/GRANT.md)を使用してユーザーに権限を付与してください。

バージョン3.1以降、StarRocksはINSERTステートメントと`FILES`キーワードを使用して、HDFSからParquetまたはORC形式のデータファイルを直接インポートする機能が追加されました。これにより、事前に外部テーブルを作成する手間を省くことができます。[INSERT >  FILESキーワードを使用して外部データファイルを直接インポートする](../loading/InsertInto.md#通过-files-函数直接导入外部数据文件)を参照してください。

この記事では、HDFSからデータをインポートするための[Broker Load](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md)の使用方法について説明します。

## 背景情報

バージョン2.4およびそれ以前では、StarRocksはBrokerを使用して外部ストレージシステムにアクセスする必要がありました。これを「Brokerを使用したインポート」と呼びます。インポートステートメントでは、`WITH BROKER "<broker_name>"`を使用してどのBrokerを使用するかを指定する必要があります。Brokerは、ファイルシステムインターフェースをカプセル化した独立したステートレスサービスです。Brokerを介して、StarRocksは外部ストレージシステム上のデータファイルにアクセスして読み取り、データファイル内のデータを前処理およびインポートするための計算リソースを利用することができます。

バージョン2.5以降、StarRocksはBrokerを使用せずにBroker Loadを実行することができます。これを「Brokerを使用しないインポート」と呼びます。インポートステートメントでは、`broker_name`を指定する必要はありませんが、引き続き`WITH BROKER`キーワードを使用します。

ただし、HDFSをデータソースとする場合、Brokerを使用しないインポートは制限される場合があります。たとえば、複数のHDFSクラスタや複数のKerberosユーザーの場合などです。これらの場合、少なくとも1つの独立したBrokerをデプロイする必要があります。各シナリオでの認証方法とHA構成の指定方法については、[HDFS](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md##hdfs)を参照してください。

> **注意**
>
> [SHOW BROKER](/sql-reference/sql-statements/Administration/SHOW%20BROKER.md)ステートメントを使用して、StarRocksクラスタにデプロイされているBrokerを表示できます。クラスタにBrokerがデプロイされていない場合は、[Brokerノードのデプロイ](/deployment/deploy_broker.md)を参照してBrokerのデプロイを完了してください。

## サポートされているデータファイル形式

Broker Loadは、次のデータファイル形式をサポートしています：

- CSV

- Parquet

- ORC

> **注意**
>
> CSV形式のデータの場合、次の2つの点に注意する必要があります：
>
> - StarRocksは、最大50バイトのUTF-8エンコード文字列を列区切り文字として設定できます。一般的なカンマ(,)、タブ、パイプ(|)が含まれます。
> - NULL値は`\N`で表されます。たとえば、データファイルには3つの列があり、ある行の1列目と3列目のデータがそれぞれ`a`と`b`であり、2列目にデータがない場合、2列目はNULL値を表すために`\N`を使用する必要があります。つまり、`a,\N,b`と書きます。`a,,b`は2列目が空の文字列を表します。

## 基本原理

After submitting an import job, the FE generates a corresponding query plan and assigns the query plan to multiple BEs based on the number of available BEs and the size of the source data files. Each BE is responsible for executing a portion of the import task. During the execution, the BE pulls data from the external storage system and imports the data into StarRocks after preprocessing. After all BEs have completed the import, the FE determines whether the import job was successful.

The following diagram illustrates the main process of Broker Load:

![Broker Load Process Diagram](/assets/broker_load_how-to-work_zh.png)

## 准备数据样例

1. Log in to the HDFS cluster and create two CSV format data files, `file1.csv` and `file2.csv`, in the specified path (assume `/user/starrocks/`). Both data files contain three columns representing user ID, user name, and user score, as shown below:

   - `file1.csv`

          ```Plain
     1,Lily,21
     2,Rose,22
     3,Alice,23
     4,Julia,24
     ```

   - `file2.csv`

          ```Plain
     5,Tony,25
     6,Adam,26
     7,Allen,27
     8,Jacky,28
     ```

2. Log in to the StarRocks database (assume `test_db`) and create two primary key model tables, `table1` and `table2`. Both tables contain three columns, `id`, `name`, and `score`, representing user ID, user name, and user score. The primary key is the `id` column, as shown below:

      ```SQL
   CREATE TABLE `table1`
      (
          `id` int(11) NOT NULL COMMENT "用户 ID",
          `name` varchar(65533) NULL DEFAULT "" COMMENT "用户姓名",
          `score` int(11) NOT NULL DEFAULT "0" COMMENT "用户得分"
      )
          ENGINE=OLAP
          PRIMARY KEY(`id`)
          DISTRIBUTED BY HASH(`id`);
             
   CREATE TABLE `table2`
      (
          `id` int(11) NOT NULL COMMENT "用户 ID",
          `name` varchar(65533) NULL DEFAULT "" COMMENT "用户姓名",
          `score` int(11) NOT NULL DEFAULT "0" COMMENT "用户得分"
      )
          ENGINE=OLAP
          PRIMARY KEY(`id`)
          DISTRIBUTED BY HASH(`id`);
   ```

## 创建导入作业

Note that the following commands are examples using CSV format and simple authentication. For information on importing data in other formats, configuring parameters for Kerberos authentication, and HA configuration, refer to [BROKER LOAD](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md).

### 导入单个数据文件到单表

#### 操作示例

Use the following statement to import the data from the data file `file1.csv` into the target table `table1`:

```SQL
LOAD LABEL test_db.label_brokerload_singlefile_singletable
(
    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/file1.csv")
    INTO TABLE table1
    COLUMNS TERMINATED BY ","
    (id, name, score)
)
WITH BROKER
(
    "username" = "<hdfs_username>",
    "password" = "<hdfs_password>"
)
PROPERTIES
(
    "timeout" = "3600"
);
```

#### 查询数据

After submitting the import job, you need to use the [SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md) statement or the `curl` command to view the result of the import job. See the section "[查看导入作业](#查看导入作业)" in this document.

After confirming the success of the import job, you can use the [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) statement to query the data in `table1`, as shown below:

```SQL
SELECT * FROM table1;
+------+-------+-------+
| id   | name  | score |
+------+-------+-------+
|    1 | Lily  |    21 |
|    2 | Rose  |    22 |
|    3 | Alice |    23 |
|    4 | Julia |    24 |
+------+-------+-------+
4 rows in set (0.01 sec)
```

### 导入多个数据文件到单表

#### 操作示例

Use the following statement to import the data from all data files (`file1.csv` and `file2.csv`) in the HDFS cluster path `/user/starrocks/` into the target table `table1`:

```SQL
LOAD LABEL test_db.label_brokerload_allfile_singletable
(
    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/*")
    INTO TABLE table1
    COLUMNS TERMINATED BY ","
    (id, name, score)
)
WITH BROKER
(
    "username" = "<hdfs_username>",
    "password" = "<hdfs_password>"
)
PROPERTIES
(
    "timeout" = "3600"
);
```

#### 查询数据

After submitting the import job, you need to use the [SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md) statement or the `curl` command to view the result of the import job. See the section "[查看导入作业](#查看导入作业)" in this document.

After confirming the success of the import job, you can use the [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) statement to query the data in `table1`, as shown below:

```SQL
SELECT * FROM table1;
+------+-------+-------+
| id   | name  | score |
+------+-------+-------+
|    1 | Lily  |    21 |
|    2 | Rose  |    22 |
|    3 | Alice |    23 |
|    4 | Julia |    24 |
|    5 | Tony  |    25 |
|    6 | Adam  |    26 |
|    7 | Allen |    27 |
|    8 | Jacky |    28 |
+------+-------+-------+
4 rows in set (0.01 sec)
```

### 导入多个数据文件到多表

#### 操作示例

Use the following statement to import the data from the data files `file1.csv` and `file2.csv` into the target tables `table1` and `table2` respectively:

```SQL
LOAD LABEL test_db.label_brokerload_multiplefile_multipletable
(
    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/file1.csv")
    INTO TABLE table1
    COLUMNS TERMINATED BY ","
    (id, name, score)
    ,
    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/file2.csv")
    INTO TABLE table2
    COLUMNS TERMINATED BY ","
    (id, name, score)
)
WITH BROKER
(
    "username" = "<hdfs_username>",
    "password" = "<hdfs_password>"
)
PROPERTIES
(
    "timeout" = "3600"
);
```

#### 查询数据

After submitting the import job, you need to use the [SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md) statement or the `curl` command to view the result of the import job. See the section "[查看导入作业](#查看导入作业)" in this document.

After confirming the success of the import job, you can use the [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) statement to query the data in `table1` and `table2`:

1. Query the data in `table1`, as shown below:

      ```SQL
   SELECT * FROM table1;
   +------+-------+-------+
   | id   | name  | score |
   +------+-------+-------+
   |    1 | Lily  |    21 |
   |    2 | Rose  |    22 |
   |    3 | Alice |    23 |
   |    4 | Julia |    24 |
   +------+-------+-------+
   4 rows in set (0.01 sec)
   ```

2. `table2` のデータをクエリします。以下のようになります：

      ```SQL
   SELECT * FROM table2;
   +------+-------+-------+
   | id   | name  | score |
   +------+-------+-------+
   |    5 | Tony  |    25 |
   |    6 | Adam  |    26 |
   |    7 | Allen |    27 |
   |    8 | Jacky |    28 |
   +------+-------+-------+
   4 rows in set (0.01 sec)
   ```

## インポートジョブの表示

Broker Loadでは、インポートジョブの実行状況を表示するために、SHOW LOADステートメントと`curl`コマンドの2つの方法がサポートされています。

### SHOW LOADステートメントの使用

[SHOW LOAD](/sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md)を参照してください。

### `curl`コマンドの使用

コマンドの構文は以下の通りです：

```Bash
curl --location-trusted -u <username>:<password> \
    'http://<fe_host>:<fe_http_port>/api/<database_name>/_load_info?label=<label_name>'
```

> **注意**
>
> - パスワードが設定されていない場合、`<username>:`のみを渡す必要があります。
> - [SHOW FRONTENDS](../sql-reference/sql-statements/Administration/SHOW%20FRONTENDS.md)コマンドを使用して、FEノードのIPアドレスとHTTPポート番号を確認できます。

たとえば、以下のコマンドを使用して、`test_db`データベースで実行されたインポートジョブのうちの1つである`label_brokerload_multiplefile_multipletable`の実行状況を表示できます：

```Bash
curl --location-trusted -u <username>:<password> \
    'http://<fe_host>:<fe_http_port>/api/test_db/_load_info?label=label_brokerload_multiplefile_multipletable'
```

コマンドを実行すると、JSON形式でインポートジョブの結果情報である`jobInfo`が返されます。以下のようになります：

```JSON
{"jobInfo":{"dbName":"test_db","tblNames":["table1","table2"],"label":"label_brokerload_multiplefile_multipletable","state":"FINISHED","failMsg":"","trackingUrl":""},"status":"OK","msg":"Success"}
```

`jobInfo`には次のパラメータが含まれます：

| **パラメータ** | **説明**                                                     |
| -------------- | ------------------------------------------------------------ |
| dbName         | 対象のStarRocksテーブルが存在するデータベースの名前。                 |
| tblNames       | 対象のStarRocksテーブルの名前。                        |
| label          | インポートジョブのラベル。                                             |
| state          | インポートジョブの状態。次の値が含まれます：<ul><li>`PENDING`：インポートジョブが実行待ちです。</li><li>`QUEUEING`：インポートジョブが実行待ちです。</li><li>`LOADING`：インポートジョブが実行中です。</li><li>`PREPARED`：トランザクションがコミットされました。</li><li>`FINISHED`：インポートジョブが成功しました。</li><li>`CANCELLED`：インポートジョブが失敗しました。</li></ul>[非同期インポート](/loading/Loading_intro.md#非同期インポート)を参照してください。 |
| failMsg        | インポートジョブの失敗理由。インポートジョブの状態が`PENDING`、`LOADING`、または`FINISHED`の場合、このパラメータの値は`NULL`です。インポートジョブの状態が`CANCELLED`の場合、このパラメータの値には`type`と`msg`の2つの部分が含まれます：<ul><li>`type`には次の値が含まれます：</li><ul><li>`USER_CANCEL`：インポートジョブが手動でキャンセルされました。</li><li>`ETL_SUBMIT_FAIL`：インポートタスクの送信に失敗しました。</li><li>`ETL-QUALITY-UNSATISFIED`：データの品質が不適切であり、つまりインポートジョブのエラーデータ率が`max-filter-ratio`を超えています。</li><li>`LOAD-RUN-FAIL`：インポートジョブが`LOADING`状態で失敗しました。</li><li>`TIMEOUT`：インポートジョブが許可されたタイムアウト時間内に完了しませんでした。</li><li>`UNKNOWN`：未知のインポートエラーです。</li></ul><li>`msg`には失敗理由の詳細情報が表示されます。</li></ul> |
| trackingUrl    | 品質が不適切なデータへのアクセスURL。`curl`コマンドまたは`wget`コマンドを使用してこのURLにアクセスできます。インポートジョブに品質が不適切なデータが存在しない場合、空の値が返されます。 |
| status         | インポートリクエストのステータス。`OK`と`Fail`が含まれます。                        |
| msg            | HTTPリクエストのエラーメッセージ。                                        |

### インポートジョブのキャンセル

インポートジョブの状態が **CANCELLED** または **FINISHED** でない場合、[CANCEL LOAD](/sql-reference/sql-statements/data-manipulation/CANCEL%20LOAD.md)ステートメントを使用してインポートジョブをキャンセルできます。

たとえば、以下のステートメントを使用して、`test_db`データベースで`label1`というラベルのインポートジョブをキャンセルできます：

```SQL
CANCEL LOAD
FROM test_db
WHERE LABEL = "label1";
```

## ジョブの分割と並列実行

Broker Loadジョブは、1つまたは複数のサブタスクに分割されて並列処理されます。ジョブのすべてのサブタスクは、トランザクション全体として成功または失敗します。ジョブの分割は、`LOAD LABEL`ステートメントの`data_desc`パラメータで指定されます：

- 複数の`data_desc`パラメータが異なるテーブルのインポートに対応している場合、各テーブルのデータのインポートはサブタスクとして分割されます。

- 複数の`data_desc`パラメータが同じテーブルの異なるパーティションのインポートに対応している場合、各パーティションのデータのインポートはサブタスクとして分割されます。

各サブタスクはさらに1つまたは複数のインスタンスに分割され、これらのインスタンスはBEに均等に割り当てられて並列実行されます。インスタンスの分割は、次の[FE設定](/administration/Configuration.md#設定-fe-ダイナミックパラメータ)によって決まります：

- `min_bytes_per_broker_scanner`：1つのインスタンスが処理する最小データ量。デフォルトは64MBです。

- `load_parallel_instance_num`：1つのBEで許可される並行インスタンス数。デフォルトは1つです。

   各サブタスクのインスタンスの総数は次の式で計算できます：

   サブタスクのインスタンスの総数 = min（サブタスクのインポートデータの総サイズ/`min_bytes_per_broker_scanner`、`load_parallel_instance_num` x BEの総数）

通常、1つのインポートジョブには1つの`data_desc`しかなく、1つのサブタスクに分割され、サブタスクはBEの総数と同じ数のインスタンスに分割されます。

## 関連する設定項目

StarRocksクラスタで並行して実行できるBroker Loadタスクの最大数を指定する[FE設定項目](../administration/Configuration.md#fe-設定項目)`max_broker_load_job_concurrency`があります。

StarRocks v2.4およびそれ以前のバージョンでは、最大数を超える数のBroker Loadジョブが同時に送信された場合、超過したジョブはそれぞれの送信時間に基づいてキューに入れられ、スケジュール待ちになります。

StarRocks v2.5では、最大数を超える数のBroker Loadジョブが同時に送信された場合、超過したジョブはジョブ作成時に指定された優先度に基づいてキューに入れられ、スケジュール待ちになります。[BROKER LOAD](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md#opt_properties)ドキュメントのオプションパラメータ`priority`を参照してください。**QUEUEING**状態または**LOADING**状態のBroker Loadジョブの優先度を変更するには、[ALTER LOAD](../sql-reference/sql-statements/data-manipulation/ALTER%20LOAD.md)ステートメントを使用できます。

## よくある質問

[Broker Loadよくある質問](/faq/loading/Broker_load_faq.md)を参照してください。
