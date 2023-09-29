# HDFSへのインポート

StarRocksでは、HDFSから大量のデータをインポートするために2つの方法がサポートされています：[Broker Load](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md)と[INSERT](../sql-reference/sql-statements/data-manipulation/insert.md)。

3.0およびそれ以前のバージョンでは、StarRocksはBroker Loadのみをサポートしていました。Broker Loadは非同期のインポート方法であり、インポートジョブを提出すると、StarRocksは非同期でジョブを実行します。インポートジョブの結果を確認するには、[SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md)ステートメントまたは`curl`コマンドを使用します。

Broker Loadは、単一のインポートトランザクションの原子性を保証します。つまり、単一のインポートで複数のデータファイルがすべて成功するか、すべて失敗するかのいずれかであり、一部のインポートが成功し、一部のインポートが失敗することはありません。

また、Broker Loadは、インポートプロセス中にデータ変換を行ったり、UPSERTおよびDELETE操作を使用してデータ変更を行ったりすることもサポートしています。[インポートプロセス中のデータ変換の実装](/loading/Etl_in_loading.md)および[インポートを使用したデータ変更の実現](../loading/Load_to_Primary_Key_tables.md)を参照してください。

> **注意**
>
> Broker Load操作には、対象テーブルのINSERT権限が必要です。ユーザーアカウントにINSERT権限がない場合は、[GRANT](../sql-reference/sql-statements/account-management/GRANT.md)を使用してユーザーに権限を付与してください。

3.1以降のバージョンでは、StarRocksはINSERTステートメントと`FILES`キーワードを使用して、HDFSからParquetまたはORC形式のデータファイルを直接インポートする機能が追加されました。これにより、事前に外部テーブルを作成する手間を省くことができます。[INSERT >  FILESキーワードを使用した外部データファイルの直接インポート](../loading/InsertInto.md#通过-files-函数直接导入外部数据文件)を参照してください。

この記事では、HDFSからデータをインポートするための[Broker Load](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md)の使用方法について説明します。

## 背景情報

v2.4およびそれ以前のバージョンでは、StarRocksはBrokerを使用して外部ストレージシステムにアクセスする必要がありました。これを「Brokerを使用したインポート」と呼びます。インポートステートメントでは、`WITH BROKER "<broker_name>"`を使用してどのBrokerを使用するかを指定する必要があります。Brokerは、ファイルシステムインターフェースをカプセル化した独立したステートレスサービスです。Brokerを介して、StarRocksは外部ストレージシステム上のデータファイルにアクセスして読み取り、データファイル内のデータを前処理およびインポートするための計算リソースを利用することができます。

v2.5以降、StarRocksはBrokerを使用せずにBroker Loadを実行することができるようになりました。これを「Brokerを使用しないインポート」と呼びます。インポートステートメントでは、`broker_name`を指定する必要はなくなりましたが、引き続き`WITH BROKER`キーワードは残ります。

ただし、HDFSをデータソースとする場合、Brokerを使用しないインポートは制限される場合があります。たとえば、複数のHDFSクラスタや複数のKerberosユーザーの場合などです。これらの場合、引き続きBrokerを使用したインポートを使用する必要がありますが、少なくとも1つの独立したBrokerグループがデプロイされていることを確認する必要があります。各シナリオでの認証方法とHA構成の指定方法については、[HDFS](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md##hdfs)を参照してください。

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

2. 登录 StarRocks 数据库（假设为 `test_db`），创建两张主键模型表，`table1` 和 `table2`。两张表都包含 `id`、`name` 和 `score` 三列，分别代表用户 ID、用户姓名和用户得分，主键为 `id` 列，如下所示：

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

注意，下述命令以 CSV 格式和简单认证方式为例。有关如何导入其他格式的数据、使用 Kerberos 认证方式时需要配置的参数、以及 HA 配置相关内容，参见 [BROKER LOAD](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md)。

### 导入单个数据文件到单表

#### 操作示例

通过如下语句，把数据文件 `file1.csv` 的数据导入到目标表 `table1`：

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

提交导入作业以后，您需要通过 [SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md) 语句或者 `curl` 命令来查看导入作业的结果。参见本文“[查看导入作业](#查看导入作业)”小节。

确认导入作业成功以后，您可以使用 [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) 语句来查询 `table1` 的数据，如下所示：

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

通过如下语句，把 HDFS 集群 `/user/starrocks/` 路径下所有数据文件（`file1.csv` 和 `file2.csv`）的数据导入到目标表 `table1`：

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

提交导入作业以后，您需要通过 [SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md) 语句或者 `curl` 命令来查看导入作业的结果。参见本文“[查看导入作业](#查看导入作业)”小节。

确认导入作业成功以后，您可以使用 [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) 语句来查询 `table1` 的数据，如下所示：

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

通过如下语句，把数据文件 `file1.csv` 和 `file2.csv` 的数据分别导入到目标表 `table1` 和 `table2`：

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

提交导入作业以后，您需要通过 [SHOW LOAD](../sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md) 语句或者 `curl` 命令来查看导入作业的结果。参见本文“[查看导入作业](#查看导入作业)”小节。

确认导入作业成功以后，您可以使用 [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) 语句来查询 `table1` 和 `table2` 中的数据：

1. 查询 `table1` 的数据，如下所示：

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

2. 查询 `table2` 的数据，如下所示：

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

## 查看导入作业

Broker Load 支持通过 SHOW LOAD 语句和 `curl` 命令两种方式来查看导入作业的执行情况。

### 使用 SHOW LOAD 语句

请参见 [SHOW LOAD](/sql-reference/sql-statements/data-manipulation/SHOW%20LOAD.md)。

### 使用 curl 命令

命令语法如下：

```Bash
curl --location-trusted -u <username>:<password> \
    'http://<fe_host>:<fe_http_port>/api/<database_name>/_load_info?label=<label_name>'
```

> **说明**
>
> - 如果账号没有设置密码，这里只需要传入 `<username>:`。
> - 您可以通过 [SHOW FRONTENDS](../sql-reference/sql-statements/Administration/SHOW%20FRONTENDS.md) 命令查看 FE 节点的 IP 地址和 HTTP 端口号。

例如，可以通过如下命令查看上面 `test_db` 数据库中执行的导入作业之一 `label_brokerload_multiplefile_multipletable` 的执行情况：

```Bash
curl --location-trusted -u <username>:<password> \
    'http://<fe_host>:<fe_http_port>/api/test_db/_load_info?label=label_brokerload_multiplefile_multipletable'
```

命令执行后，以 JSON 格式返回导入作业的结果信息 `jobInfo`，如下所示：

```JSON
{"jobInfo":{"dbName":"test_db","tblNames":["table1","table2"],"label":"label_brokerload_multiplefile_multipletable","state":"FINISHED","failMsg":"","trackingUrl":""},"status":"OK","msg":"Success"}
```

`jobInfo` 中包含如下参数：

| **参数**    | **说明**                                                     |
| ----------- | ------------------------------------------------------------ |
| dbName      | 目标 StarRocks 表所在的数据库的名称。                               |
| tblNames    | 目标 StarRocks 表的名称。                        |
| label       | 导入作业的标签。                                             |
| state       | 导入作业的状态，包括：<ul><li>`PENDING`：导入作业正在等待执行中。</li><li>`QUEUEING`：导入作业正在等待执行中。</li><li>`LOADING`：导入作业正在执行中。</li><li>`PREPARED`：事务已提交。</li><li>`FINISHED`：导入作业成功。</li><li>`CANCELLED`：导入作业失败。</li></ul>请参见[异步导入](/loading/Loading_intro.md#异步导入)。 |
| failMsg     | 导入作业的失败原因。当导入作业的状态为`PENDING`，`LOADING`或`FINISHED`时，该参数值为`NULL`。当导入作业的状态为`CANCELLED`时，该参数值包括 `type` 和 `msg` 两部分：<ul><li>`type` 包括如下取值：</li><ul><li>`USER_CANCEL`：导入作业被手动取消。</li><li>`ETL_SUBMIT_FAIL`：导入任务提交失败。</li><li>`ETL-QUALITY-UNSATISFIED`：数据质量不合格，即导入作业的错误数据率超过了 `max-filter-ratio`。</li><li>`LOAD-RUN-FAIL`：导入作业在 `LOADING` 状态失败。</li><li>`TIMEOUT`：导入作业未在允许的超时时间内完成。</li><li>`UNKNOWN`：未知的导入错误。</li></ul><li>`msg` 显示有关失败原因的详细信息。</li></ul> |
| trackingUrl | 导入作业中质量不合格数据的访问地址。可以使用 `curl` 命令或 `wget` 命令访问该地址。如果导入作业中不存在质量不合格的数据，则返回空值。 |
| status      | 导入请求的状态，包括 `OK` 和 `Fail`。                        |
| msg         | HTTP 请求的错误信息。                                        |

### 取消导入作业

当导入作业状态不为 **CANCELLED** 或 **FINISHED** 时，可以通过 [CANCEL LOAD](/sql-reference/sql-statements/data-manipulation/CANCEL%20LOAD.md) 语句来取消该导入作业。

例如，可以通过以下语句，撤销 `test_db` 数据库中标签为 `label1` 的导入作业：

```SQL
CANCEL LOAD
FROM test_db
WHERE LABEL = "label1";
```

## 作業の分割と並列実行

ブローカーロードジョブは、1つまたは複数のサブタスクに分割されて並列処理されます。ジョブのすべてのサブタスクは、トランザクション全体として成功または失敗します。ジョブの分割は、`LOAD LABEL` ステートメントの `data_desc` パラメータで指定されます：

- 複数の `data_desc` パラメータが異なるテーブルのインポートに対応している場合、各テーブルのデータのインポートはサブタスクに分割されます。

- 複数の `data_desc` パラメータが同じテーブルの異なるパーティションのインポートに対応している場合、各パーティションのデータのインポートはサブタスクに分割されます。

各サブタスクは、1つまたは複数のインスタンスに分割され、これらのインスタンスは均等にBEに割り当てられて並列実行されます。インスタンスの分割は、次の[FE設定](/administration/Configuration.md#fe-configuration)によって決定されます：

- `min_bytes_per_broker_scanner`：1つのインスタンスが処理する最小データ量で、デフォルトは64MBです。

- `load_parallel_instance_num`：1つのBE上で許可される並行インスタンスの数で、デフォルトは1つです。

以下の式を使用して、1つのサブタスクのインスタンスの総数を計算できます：

サブタスクのインスタンスの総数 = min（サブタスクのインポートデータの総サイズ/`min_bytes_per_broker_scanner`、`load_parallel_instance_num` x BEの総数）

通常、インポートジョブには1つの `data_desc` のみがあり、1つのサブタスクに分割され、サブタスクはBEの総数と同じ数のインスタンスに分割されます。

## 関連する設定項目

[FE設定項目](../administration/Configuration.md#fe-configuration) `max_broker_load_job_concurrency` は、StarRocksクラスタで並列に実行できるブローカーロードジョブの最大数を指定します。

StarRocks v2.4およびそれ以前のバージョンでは、特定の時間枠内に提出されたブローカーロードジョブの総数が最大数を超える場合、超過したジョブはそれぞれの提出時間に基づいてキューに入れられ、スケジュール待ちになります。

StarRocks v2.5では、特定の時間枠内に提出されたブローカーロードジョブの総数が最大数を超える場合、超過したジョブはジョブ作成時に指定された優先度に基づいてキューに入れられ、スケジュール待ちになります。詳細は、[BROKER LOAD](../sql-reference/sql-statements/data-manipulation/BROKER%20LOAD.md#opt_properties)ドキュメントのオプションパラメータ `priority` を参照してください。また、 **QUEUEING** 状態または **LOADING** 状態にあるブローカーロードジョブの優先度を変更するには、[ALTER LOAD](../sql-reference/sql-statements/data-manipulation/ALTER%20LOAD.md)ステートメントを使用できます。

## よくある質問

[ブローカーロードのよくある質問](/faq/loading/Broker_load_faq.md)を参照してください。
