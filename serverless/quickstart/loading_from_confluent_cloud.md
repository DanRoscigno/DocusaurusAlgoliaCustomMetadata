# Loading from Apache Kafka/Confluent Cloud

CelerData Cloud can continuously load data from Kafka service, such as [self-managed Apache Kafka](https://kafka.apache.org/), [Confluent Cloud](https://www.confluent.io/confluent-cloud/), and [Amazon MSK](https://aws.amazon.com/msk/?nc1=h_ls). This tutorial uses Confluent Cloud as an example to demonstrate how to load data from Kafka service into CelerData Cloud.

> **NOTICE**
>
> Loading data from other Kafka service, such as a self-managed Kafka cluster or Amazon MSK to CelerData Cloud may involve complex concepts and operations, such as VPC. For users who are not familiar with these concepts and operations, it is recommended to go through this tutorial first which already prepares a Confluent cluster public to users.

After reading this tutorial, you will be able to load data by using Routine Load.

This tutorial loads JSON formatted data. For loading data of other formats, see [CREATE ROUTINE LOAD](../sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD.md).

**Interface:** SQL

**Estimated time:** 20 minutes

## Prerequisites

The tutorial assumes the following:

You have a CelerData Cloud account and a user with the necessary privileges to create databases and tables. If you do not fulfill these prerequisites, follow the instructions in [Sign up for CelerData Cloud](../get_started/signup.md).

To navigate you though this tutorial, CelerData Cloud already prepares a Confluent cluster with sample data. You just need to create a database and a table, before beginning the journey of data loading.

### Sample data

The sample data from Confluent Cloud is generated based on the Confluent Cloud tutorial. Each message is a JSON object representing a row of data to be loaded. One sample message is as follows:

```JSON
{
    "registertime": 1493987388929,
    "userid": "User_3",
    "regionid": "Region_8",
    "gender": "OTHER"
}
```

### Create a database and a table

Create a database `mydatabase` and a table `myusers` in CelerData Cloud.

```SQL
CREATE DATABASE IF NOT EXISTS mydatabase;

USE mydatabase;
CREATE TABLE myusers (
    userid VARCHAR(50),
    regionid VARCHAR(50),
    gender VARCHAR(50),
    registertime BIGINT
)
PROPERTIES (
"replication_num" = "3"
);
```

## Load data

### Load data using Routine Load

Execute the [CREATE ROUTINE LOAD](../sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD.md) command to create a Routine Load job `tutorials_users_test1`. This job runs continuously, consuming messages from the topic `users` of the Confluent cluster and loading data into the table `myusers`. To ensure a smooth experience, CelerData Cloud has prepared the Confluent cluster. You can access the Confluent cluster by using the connection and authentication parameters as follows.

```SQL
CREATE ROUTINE LOAD mydatabase.tutorials_users_test1 ON myusers
COLUMNS(userid, regionid, gender, registertime)
PROPERTIES (
    'format' = 'json',
    'jsonpaths' = '["$.userid","$.regionid","$.gender", "$.registertime"]'
 )
FROM KAFKA (
    'kafka_broker_list' = 'pkc-n98pk.us-west-2.aws.confluent.cloud:9092',
    'kafka_topic' = 'users',
    'property.kafka_default_offsets' = 'OFFSET_BEGINNING',
    'property.security.protocol' = 'SASL_SSL',
    'property.sasl.mechanism' = 'PLAIN',
    'property.sasl.username' = 'HALNAFT2X4IKVWYY',
    'property.sasl.password' = 'PF1L6aZ5kEXG5/q8heq5onDmLs6BeekC9X3pFWyuc+AZxw5DYUqBihJjXhKjFJw/'
);
```

**Configurations:**

- `'format' = 'json'`: the format of messages as JSON.
- `jsonpaths`: the names of the fields that you want to load from JSON-formatted messages into the table `myusers`.  The names of fields need to be matched one-to-one with the values in `COLUMNS`.
- `kafka_broker_list`: the Bootstrap server address of the Confluent cluster.
- `kafka_topic`: the topic that contains JSON-formatted messages.
- `'property.kafka_default_offsets' = 'OFFSET_BEGINNING'`: specifies that data is consumed from the beginning of each partition.
- `property.security.protocol` and `property.sasl.*`: the security and authentication information used by CelerData Cloud to connect the Confluent cluster.

### Check the load status

Execute the  [SHOW ROUTINE LOAD](../sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md) command to check the status of that Routine Load job.

```SQL
SHOW ROUTINE LOAD for tutorials_users_test1;
```

The returned result displays the job execution information:

```Plain
+-------+-----------------------+---------------------+-----------+---------+------------+-----------+---------+----------------+----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------+----------------------+--------------+----------+
| Id    | Name                  | CreateTime          | PauseTime | EndTime | DbName     | TableName | State   | DataSourceType | CurrentTaskNum | JobProperties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | DataSourceProperties                                                                                       | CustomProperties                                                                                                                                                                                                                         | Statistic                                                                                                                                                                                                     | Progress     | ReasonOfStateChanged | ErrorLogUrls | OtherMsg |
+-------+-----------------------+---------------------+-----------+---------+------------+-----------+---------+----------------+----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------+----------------------+--------------+----------+
| 32070 | tutorials_users_test1 | 2023-10-18 01:34:51 | NULL      | NULL    | mydatabase | myusers   | RUNNING | KAFKA          | 1              | {"partitions":"*","partial_update":"false","columnToColumnExpr":"userid,regionid,gender,registertime","maxBatchIntervalS":"10","partial_update_mode":"null","whereExpr":"*","dataFormat":"json","timezone":"America/Los_Angeles","format":"json","log_rejected_record_num":"0","taskTimeoutSecond":"60","json_root":"","maxFilterRatio":"1.0","strict_mode":"false","jsonpaths":"[\"$.userid\",\"$.regionid\",\"$.gender\", \"$.registertime\"]","taskConsumeSecond":"15","desireTaskConcurrentNum":"5","maxErrorNum":"0","strip_outer_array":"false","currentTaskConcurrentNum":"1","maxBatchRows":"200000"} | {"topic":"users","currentKafkaPartitions":"0","brokerList":"pkc-n98pk.us-west-2.aws.confluent.cloud:9092"} | {"security.protocol":"SASL_SSL","sasl.username":"HALNAFT2X4IKVWYY","sasl.mechanism":"PLAIN","kafka_default_offsets":"OFFSET_BEGINNING","group.id":"tutorials_users_test1_e6d9543c-fdca-47ac-a9af-30c779c84fb6","sasl.password":"******"} | {"receivedBytes":756781,"errorRows":0,"committedTaskNum":1,"loadedRows":8699,"loadRowsRate":14000,"abortedTaskNum":0,"totalRows":8699,"unselectedRows":0,"receivedBytesRate":1246000,"taskExecuteTimeMs":607} | {"0":"8698"} |                      |              |          |
+-------+-----------------------+---------------------+-----------+---------+------------+-----------+---------+----------------+----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------+----------------------+--------------+----------+
```

- The `Statistic` field shows the current loading information of that Routine Load job. For example, the `loadedRows` key shows the number of loaded data rows.
- The `Progress` field shows the current offset being consumed of each Kafka partition.

When the job is running successfully, you can query the data loaded into the table.

```SQL
SELECT * FROM myusers LIMIT 3;
```

## Clean up the environment

Congratulations! You have finished your journey with a data load on CelerData Cloud!

Use the following statement to drop `mydatabase` you created for a test run.

```SQL
DROP DATABASE IF EXISTS mydatabase;
```
