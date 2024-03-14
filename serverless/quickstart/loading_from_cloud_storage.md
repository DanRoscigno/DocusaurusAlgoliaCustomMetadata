# Load data from cloud storage

This tutorial uses Amazon S3 as an example to demonstrate how to load data from cloud storage into CelerData Cloud.

After reading this tutorial, you will be able to load data from an S3 bucket into a destination CelerData table by using INSERT+`FILES()`.

This tutorial uses the Parquet file format as an example. For information about how to load data of other file formats, see [`FILES`](../sql-reference/sql-functions/table-functions/files.md) and [Batch load data from Amazon S3](../loading/loading_from_s3.md).

**Interface:** SQL

**Estimated time:** 20 to 30 minutes

## Prerequisites

- You have a CelerData Cloud account and is a user with the necessary privileges to create databases and tables. If you do not fulfill these prerequisites, follow the instructions in [Sign up for CelerData Cloud](../get_started/signup.md).
- You have obtained the S3 URI of the data file.

  In this tutorial, CelerData Cloud provides sample datasets stored in the `s3://lilyliukinesis/tutorials/` path on Amazon S3, helping you run a quick data load into cloud storage.

- You have created a database and a table in your CelerData Cloud. Make sure that the table has the same schema as the data file you store in Amazon S3.

  In this tutorial, the database `mydatabase` and the table `user_behavior` are used as examples:

  ```SQL
  CREATE DATABASE IF NOT EXISTS mydatabase;
    
  USE mydatabase;
    
  DROP TABLE IF EXISTS user_behavior;
    
  CREATE TABLE `user_behavior` (
      `UserID` int(11),
      `ItemID` int(11),
      `CategoryID` int(11),
      `BehaviorType` varchar(65533),
      `Timestamp` datetime
  )
  ;
  ```

## Load your data

### Query the sample dataset

You can use `SELECT * FROM FILES(...)` to query the sample dataset `customer01.parquet`:

```SQL
SELECT * FROM FILES
(
    'path' = 's3://lilyliukinesis/tutorials/parquet/customer01.parquet',
    'format' = 'parquet',
    'aws.s3.use_instance_profile' = 'false',
    'aws.s3.access_key' = 'AAAAAAAAAAAAAAAAAAAA',
    'aws.s3.secret_key' = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
)
LIMIT 3;
```

- [FILES()](../sql-reference/sql-functions/table-functions/files.md) is a table function, which can read the file stored in cloud storage based on the path-related properties you specify, infer the table schema of the data in the file, and then return the data from the file as data rows.
- The above example queries the CelerData-provided Parquet-formatted sample dataset `customer01.parquet`. Hence the `path` parameter is set to `s3://lilyliukinesis/tutorials/parquet/customer01.parquet` and the `format` parameter is set to `parquet`.
- The above example uses the IAM user-based authentication method and therefore includes the parameters `aws.s3.access_key` and `aws.s3.secret_key`. For information about the other authentication methods available, see [Authenticate to AWS resources](../integration/authenticate_to_aws.md).

> **NOTICE**
>
> If you want to load your own data stored in Amazon S3, you need to set `path` to the S3 URI of your data file. Also, you need to configure authentication parameters to allow access to that S3 URI.

### **Load data from a single file using INSERT+FILES()**

Use the `INSERT INTO` statement and the above-mentioned `SELECT * FROM FILES(...)` statement to load the data of the `customer01.parquet` file into the `user_behavior` table:

```SQL
INSERT INTO user_behavior
SELECT * FROM FILES
(
    'path' = 's3://lilyliukinesis/tutorials/parquet/customer01.parquet',
    'format' = 'parquet',
    'aws.s3.use_instance_profile' = 'false',
    'aws.s3.access_key' = 'AAAAAAAAAAAAAAAAAAAA',
    'aws.s3.secret_key' = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
);
```

### View the load job information

Use the following statement to view the information about the load job you just submitted:

```SQL
SELECT * FROM information_schema.loads ORDER BY JOB_ID DESC;
```

Information similar to the following is returned:

```Plain
+--------+---------------------------------------------+---------------+----------+---------------------+--------+----------+-----------+---------------+-----------------+-----------+----------+-----------------------------------------------------+---------------------+---------------------+---------------------+---------------------+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+--------------+--------------+----------------------+
| JOB_ID | LABEL                                       | DATABASE_NAME | STATE    | PROGRESS            | TYPE   | PRIORITY | SCAN_ROWS | FILTERED_ROWS | UNSELECTED_ROWS | SINK_ROWS | ETL_INFO | TASK_INFO                                           | CREATE_TIME         | ETL_START_TIME      | ETL_FINISH_TIME     | LOAD_START_TIME     | LOAD_FINISH_TIME    | JOB_DETAILS                                                                                                                                                                                                                                                        | ERROR_MSG | TRACKING_URL | TRACKING_SQL | REJECTED_RECORD_PATH |
+--------+---------------------------------------------+---------------+----------+---------------------+--------+----------+-----------+---------------+-----------------+-----------+----------+-----------------------------------------------------+---------------------+---------------------+---------------------+---------------------+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+--------------+--------------+----------------------+
|  30045 | insert_aa4519c3-6cc0-11ee-b1ae-065bac47e6e9 | mydatabase    | FINISHED | ETL:100%; LOAD:100% | INSERT | NORMAL   |         5 |             0 |               0 |         5 |          | resource:N/A; timeout(s):300; max_filter_ratio:0.0  | 2023-10-17 00:42:04 | 2023-10-17 00:42:04 | 2023-10-17 00:42:04 | 2023-10-17 00:42:04 | 2023-10-17 00:42:04 | {"All backends":{"aa4519c3-6cc0-11ee-b1ae-065bac47e6e9":[10004]},"FileNumber":0,"FileSize":0,"InternalTableLoadBytes":723,"InternalTableLoadRows":5,"ScanBytes":655,"ScanRows":5,"TaskNumber":1,"Unfinished backends":{"aa4519c3-6cc0-11ee-b1ae-065bac47e6e9":[]}} | NULL      | NULL         | NULL         | NULL                 |
+--------+---------------------------------------------+---------------+----------+---------------------+--------+----------+-----------+---------------+-----------------+-----------+----------+-----------------------------------------------------+---------------------+---------------------+---------------------+---------------------+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+--------------+--------------+----------------------+
```

- The `SCAN_ROWS` field tells you that the `customer01.parquet` file consists of 5 data rows.
- The `SINK_ROWS` field tells you that a total of 5 data rows are successfully loaded into the `user_behavior` table.
- For more information, you can see the `JOB_DETAILS` field.

For information about the fields provided in the `loads` view, see [Information Schema](../reference/information_schema/loads.md).

> **NOTE**
>
> INSERT INTO is a synchronous statement. Therefore, if the load job is still running, you need to open another session to query its execution status.

Then, use the following statement to query the `user_behavior` table:

```SQL
SELECT * FROM user_behavior LIMIT 3;
```

### Load data from multiple data files using INSERT+FILES()

You can use wildcards in the `path` parameter to specify multiple data files you want to load.

The following example loads the data of multiple files, `customer02.parquet`, `customer03.parquet`, and `customer04.parquet`, into the `user_behavior` table:

```SQL
INSERT INTO user_behavior
SELECT * FROM FILES
(
    'path' = 's3://lilyliukinesis/tutorials/parquet/customer0[2-4].parquet',
    'format' = 'parquet',
    'aws.s3.use_instance_profile' = 'false',
    'aws.s3.access_key' = 'AAAAAAAAAAAAAAAAAAAA',
    'aws.s3.secret_key' = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
);
```

### **Load data using CTAS**

In the above examples, you need to create a table before you can load data by using INSERT+FILES().

You can also load data by using the [CREATE TABLE AS SELECT](../sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT.md) (CTAS) statement without creating a table up front. The following example creates a table named `user_behavior_ctas` and loads the data of all files named like `customer0*.parquet` in the `s3://lilyliukinesis/tutorials/parquet` path to that table:

```SQL
CREATE TABLE user_behavior_ctas AS
SELECT * FROM FILES
(
    'path' = 's3://lilyliukinesis/tutorials/parquet/customer0*.parquet'
    , 'format' = 'parquet'
    , 'aws.s3.use_instance_profile' = 'false'
    , 'aws.s3.access_key' = 'AAAAAAAAAAAAAAAAAAAA'
    , 'aws.s3.secret_key' = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
);
```

Use the following statement to query the `user_behavior_ctas` table, and you will find the table has been created and data has successfully loaded into it:

```SQL
SELECT * FROM user_behavior_ctas LIMIT 3;
```

## Clean up the environment

Congratulations! You have finished your journey with a data load on CelerData Cloud!

Use the following statement to drop `mydatabase` you created for a test run.

```SQL
DROP DATABASE IF EXISTS mydatabase;
```
