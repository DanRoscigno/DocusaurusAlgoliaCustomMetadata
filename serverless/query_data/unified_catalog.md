# Unified catalog

A unified catalog is a type of external catalog that is provided by CelerData to handle tables from various data sources, including Apache Hive™, Apache Iceberg, Apache Hudi, and Delta Lake, as a unified data source without ingestion. With unified catalogs, you can:

- Directly query data stored in Hive, Iceberg, Hudi, and Delta Lake without the need to manually create tables.
- Use [INSERT INTO](../sql-reference/sql-statements/data-manipulation/INSERT.md) or asynchronous materialized views to process data stored in Hive, Iceberg, Hudi, and Delta Lake and load the data into CelerData.
- Perform operations on CelerData to create or drop Hive and Iceberg databases and tables.

To ensure successful SQL workloads on your unified data source, CelerData must be able to access the storage system and metastore of your unified data source CelerData supports the following storage systems and metastores:

- Object storage like AWS S3

- Metastore like Hive metastore or AWS Glue

  > **NOTE**
  >
  > If you choose AWS S3 as storage, you can use HMS or AWS Glue as metastore. If you choose any other storage system, you can only use HMS as metastore.

## Limits

One unified catalog supports integrations with only a single storage system and a single metastore service. Therefore, make sure all the data sources you want to integrate as a unified data source with CelerData use the same storage system and metastore service.

## Usage notes

- See the "Usage notes" section in [Hive catalog](../query_data/hive_catalog.md), [Iceberg catalog](../query_data/iceberg_catalog.md), [Hudi catalog](../query_data/hudi_catalog.md), and [Delta Lake catalog](../query_data/deltalake_catalog.md) to understand the file formats and data types supported.

- Format-specific operations are supported only for specific table formats. For example, [CREATE TABLE](../sql-reference/sql-statements/data-definition/CREATE_TABLE.md) and [DROP TABLE](../sql-reference/sql-statements/data-definition/DROP_TABLE.md) are supported only for Hive and Iceberg, and [REFRESH EXTERNAL TABLE](../sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE.md) is supported only for Hive and Hudi.

  When you create a table within a unified catalog by using the [CREATE TABLE](../sql-reference/sql-statements/data-definition/CREATE_TABLE.md) statement, use the `ENGINE` parameter to specify the table format (Hive or Iceberg).

## Integration preparations

Before you create a unified catalog, make sure CelerData can access the storage system and metastore of your unified data source.

### Hive metastore

If your Hive cluster uses Hive metastore as metastore, check that CelerData can access the host of your Hive metastore.

> **NOTE**
>
> In normal cases, you can take one of the following actions to enable integration between CelerData and your Hive metastore:
>
> - Deploy CelerData and your Hive metastore on the same VPC.
> - Configure a VPC peering connection between the VPC hosting CelerData and the VPC hosting your Hive metastore.

Then, check the configurations of the security group of your Hive metastore to ensure that its inbound rules allow inbound traffic from CelerData's security group and that its port range covers the default port 9083.

### AWS

If your Hive cluster uses AWS S3 as storage or AWS Glue as metastore, choose your suitable authentication method and make the required preparations such as creating IAM roles or users and adding IAM policies to the specified IAM roles or users to ensure that CelerData can access these AWS resources. For more information, see [Authenticate to AWS resources > Preparations](../integration/authenticate_to_aws.md#preparations).

## Create a unified catalog

### Syntax

```SQL
CREATE EXTERNAL CATALOG <catalog_name>
[COMMENT <comment>]
PROPERTIES
(
    "type" = "unified",
    MetastoreParams,
    StorageCredentialParams,
    MetadataUpdateParams
)
```

### Parameters

#### catalog_name

The name of the unified catalog. The naming conventions are as follows:

- The name can contain letters, digits (0-9), and underscores (_). It must start with a letter.
- The name is case-sensitive and cannot exceed 1023 characters in length.

#### comment

The description of the unified catalog. This parameter is optional.

#### type

The type of your data source. Set the value to `unified`.

#### MetastoreParams

A set of parameters about how CelerData integrates with your metastore.

##### Hive metastore

If you choose Hive metastore as the metastore of your unified data source, configure `MetastoreParams` as follows:

```SQL
"unified.metastore.type" = "hive",
"hive.metastore.uris" = "<hive_metastore_uri>"
```

> **NOTE**
>
> Before querying data, you must add the mapping between the host names and IP addresses of your Hive metastore nodes to the **/etc/hosts** path. Otherwise, CelerData may fail to access your Hive metastore when you start a query.

The following table describes the parameters you need to configure in `MetastoreParams`.

| Parameter              | Required | Description                                                  |
| ---------------------- | -------- | ------------------------------------------------------------ |
| unified.metastore.type | Yes      | The type of metastore that you use for your unified data source. Set the value to `hive`. |
| hive.metastore.uris    | Yes      | The URI of your Hive metastore. Format: `thrift://<metastore_IP_address>:<metastore_port>`. If high availability (HA) is enabled for your Hive metastore, you can specify multiple metastore URIs and separate them with commas (`,`), for example, `"thrift://<metastore_IP_address_1>:<metastore_port_1>,thrift://<metastore_IP_address_2>:<metastore_port_2>,thrift://<metastore_IP_address_3>:<metastore_port_3>"`. |

##### AWS Glue

If you choose AWS Glue as the metastore of your data source, which is supported only when you choose AWS S3 as storage, take one of the following actions:

- To choose the instance profile-based authentication method, configure `MetastoreParams` as follows:

  ```SQL
  "unified.metastore.type" = "glue",
  "aws.glue.use_instance_profile" = "true",
  "aws.glue.region" = "<aws_glue_region>"
  ```

- To choose the assumed role-based authentication method, configure `MetastoreParams` as follows:

  ```SQL
  "unified.metastore.type" = "glue",
  "aws.glue.use_instance_profile" = "true",
  "aws.glue.iam_role_arn" = "<iam_role_arn>",
  "aws.glue.region" = "<aws_glue_region>"
  ```

- To choose the IAM user-based authentication method, configure `MetastoreParams` as follows:

  ```SQL
  "unified.metastore.type" = "glue",
  "aws.glue.use_instance_profile" = "false",
  "aws.glue.access_key" = "<iam_user_access_key>",
  "aws.glue.secret_key" = "<iam_user_secret_key>",
  "aws.glue.region" = "<aws_s3_region>"
  ```

The following table describes the parameters you need to configure in `MetastoreParams`.

| Parameter                     | Required | Description                                                  |
| ----------------------------- | -------- | ------------------------------------------------------------ |
| unified.metastore.type        | Yes      | The type of metastore that you use for your unified data source. Set the value to `glue`. |
| aws.glue.use_instance_profile | Yes      | Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication. Valid values: `true` and `false`. Default value: `false`. |
| aws.glue.iam_role_arn         | No       | The ARN of the IAM role that has privileges on your AWS Glue Data Catalog. If you use the assumed role-based authentication method to access AWS Glue, you must specify this parameter. |
| aws.glue.region               | Yes      | The region in which your AWS Glue Data Catalog resides. Example: `us-west-1`. |
| aws.glue.access_key           | No       | The access key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter. |
| aws.glue.secret_key           | No       | The secret key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter. |

For information about how to choose an authentication method for accessing AWS Glue and how to configure an access control policy in the AWS IAM Console, see [Authentication parameters for accessing AWS Glue](../integration/authenticate_to_aws.md#authentication-parameters-for-accessing-aws-glue).

#### StorageCredentialParams

A set of parameters about how CelerData integrates with your storage system. This parameter set is optional.

##### AWS S3

If you choose AWS S3 as storage, take one of the following actions:

- To choose the instance profile-based authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "aws.s3.use_instance_profile" = "true",
  "aws.s3.region" = "<aws_s3_region>"
  ```

- To choose the assumed role-based authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "aws.s3.use_instance_profile" = "true",
  "aws.s3.iam_role_arn" = "<iam_role_arn>",
  "aws.s3.region" = "<aws_s3_region>"
  ```

- To choose the IAM user-based authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "aws.s3.use_instance_profile" = "false",
  "aws.s3.access_key" = "<iam_user_access_key>",
  "aws.s3.secret_key" = "<iam_user_secret_key>",
  "aws.s3.region" = "<aws_s3_region>"
  ```

The following table describes the parameters you need to configure in `StorageCredentialParams`.

| Parameter                   | Required | Description                                                  |
| --------------------------- | -------- | ------------------------------------------------------------ |
| aws.s3.use_instance_profile | Yes      | Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication method. Valid values: `true` and `false`. Default value: `false`. |
| aws.s3.iam_role_arn         | No       | The ARN of the IAM role that has privileges on your AWS S3 bucket. If you use the assumed role-based authentication method to access AWS S3, you must specify this parameter.  |
| aws.s3.region               | Yes      | The region in which your AWS S3 bucket resides. Example: `us-west-1`. |
| aws.s3.access_key           | No       | The access key of your IAM user. If you use the IAM user-based authentication method to access AWS S3, you must specify this parameter. |
| aws.s3.secret_key           | No       | The secret key of your IAM user. If you use the IAM user-based authentication method to access AWS S3, you must specify this parameter. |

For information about how to choose an authentication method for accessing AWS S3 and how to configure an access control policy in AWS IAM Console, see [Authentication parameters for accessing AWS S3](../integration/authenticate_to_aws.md#authentication-parameters-for-accessing-aws-s3).

#### MetadataUpdateParams

A set of parameters about how CelerData updates the cached metadata of Hive, Hudi, and Delta Lake. This parameter set is optional. For more information about the policies for updating cached metadata from Hive, Hudi, and Delta Lake, see [Hive catalog](../query_data/hive_catalog.md), [Hudi catalog](../query_data/hudi_catalog.md), and [Delta Lake catalog](../query_data/deltalake_catalog.md).

In most cases, you can ignore `MetadataUpdateParams` and do not need to tune the policy parameters in it, because the default values of these parameters already provide you with an out-of-the-box performance.

However, if the frequency of data updates in Hive, Hudi, or Delta Lake is high, you can tune these parameters to further optimize the performance of automatic asynchronous updates.

| Parameter                              | Required | Description                                                  |
| -------------------------------------- | -------- | ------------------------------------------------------------ |
| enable_metastore_cache                 | No       | Specifies whether CelerData caches the metadata of Hive, Hudi, or Delta Lake tables. Valid values: `true` and `false`. Default value: `true`. The value `true` enables the cache, and the value `false` disables the cache. |
| enable_remote_file_cache               | No       | Specifies whether CelerData caches the metadata of the underlying data files of Hive, Hudi, or Delta Lake tables or partitions. Valid values: `true` and `false`. Default value: `true`. The value true enables the cache, and the value `false` disables the cache. |
| metastore_cache_refresh_interval_sec   | No       | The time interval at which SCelerData asynchronously updates the metadata of Hive, Hudi, or Delta Lake tables or partitions cached in itself. Unit: seconds. Default value: `7200`, which is 2 hours. |
| remote_file_cache_refresh_interval_sec | No       | The time interval at which CelerData asynchronously updates the metadata of the underlying data files of Hive, Hudi, or Delta Lake tables or partitions cached in itself. Unit: seconds. Default value: `60`. |
| metastore_cache_ttl_sec                | No       | The time interval at which CelerData automatically discards the metadata of Hive, Hudi, or Delta Lake tables or partitions cached in itself. Unit: seconds. Default value: `86400`, which is 24 hours. |
| remote_file_cache_ttl_sec              | No       | The time interval at which CelerData automatically discards the metadata of the underlying data files of Hive, Hudi, or Delta Lake tables or partitions cached in itself. Unit: seconds. Default value: `129600`, which is 36 hours. |

### Examples

The following examples create a unified catalog named `unified_catalog_hms` or `unified_catalog_glue`, depending on the type of metastore you use, to query data from your unified data source.

#### AWS S3

##### Instance profile-based authentication

- If you use Hive metastore, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG unified_catalog_hms
  PROPERTIES
  (
      "type" = "unified",
      "unified.metastore.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.region" = "us-west-2"
  );
  ```

- If you use AWS Glue with Amazon EMR, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG unified_catalog_glue
  PROPERTIES
  (
      "type" = "unified",
      "unified.metastore.type" = "glue",
      "aws.glue.use_instance_profile" = "true",
      "aws.glue.region" = "us-west-2",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.region" = "us-west-2"
  );
  ```

##### Assumed role-based authentication

- If you use Hive metastore, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG unified_catalog_hms
  PROPERTIES
  (
      "type" = "unified",
      "unified.metastore.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/test_s3_role",
      "aws.s3.region" = "us-west-2"
  );
  ```

- If you use AWS Glue with Amazon EMR, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG unified_catalog_glue
  PROPERTIES
  (
      "type" = "unified",
      "unified.metastore.type" = "glue",
      "aws.glue.use_instance_profile" = "true",
      "aws.glue.iam_role_arn" = "arn:aws:iam::081976408565:role/test_glue_role",
      "aws.glue.region" = "us-west-2",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/test_s3_role",
      "aws.s3.region" = "us-west-2"
  );
  ```

##### IAM user-based authentication

- If you use Hive metastore, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG unified_catalog_hms
  PROPERTIES
  (
      "type" = "unified",
      "unified.metastore.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "aws.s3.use_instance_profile" = "false",
      "aws.s3.access_key" = "<iam_user_access_key>",
      "aws.s3.secret_key" = "<iam_user_access_key>",
      "aws.s3.region" = "us-west-2"
  );
  ```

- If you use AWS Glue with Amazon EMR, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG unified_catalog_glue
  PROPERTIES
  (
      "type" = "unified",
      "unified.metastore.type" = "glue",
      "aws.glue.use_instance_profile" = "false",
      "aws.glue.access_key" = "<iam_user_access_key>",
      "aws.glue.secret_key" = "<iam_user_secret_key>",
      "aws.glue.region" = "us-west-2",
      "aws.s3.use_instance_profile" = "false",
      "aws.s3.access_key" = "<iam_user_access_key>",
      "aws.s3.secret_key" = "<iam_user_secret_key>",
      "aws.s3.region" = "us-west-2"
  );
  ```

## View unified catalogs

You can use [SHOW CATALOGS](../sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md) to query all catalogs in your CelerData cloud account:

```SQL
SHOW CATALOGS;
```

You can also use [SHOW CREATE CATALOG](../sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG.md) to query the creation statement of an external catalog. The following example queries the creation statement of a unified catalog named `unified_catalog_glue`:

```SQL
SHOW CREATE CATALOG unified_catalog_glue;
```

## Switch to a Unified Catalog and a database in it

You can use one of the following methods to switch to a unified catalog and a database in it:

- Use [SET CATALOG](../sql-reference/sql-statements/data-definition/SET_CATALOG.md) to specify a unified catalog in the current session, and then use [USE](../sql-reference/sql-statements/data-definition/USE.md) to specify an active database:

  ```SQL
  -- Switch to a specified catalog in the current session:
  SET CATALOG <catalog_name>
  -- Specify the active database in the current session:
  USE <db_name>
  ```

- Directly use [USE](../sql-reference/sql-statements/data-definition/USE.md) to switch to a unified catalog and a database in it:

  ```SQL
  USE <catalog_name>.<db_name>
  ```

## Drop a unified catalog

You can use [DROP CATALOG](../sql-reference/sql-statements/data-definition/DROP_CATALOG.md) to drop an external catalog.

The following example drops a unified catalog named `unified_catalog_glue`:

```SQL
DROP CATALOG unified_catalog_glue;
```

## View the schema of a table from a unified catalog

You can use one of the following syntaxes to view the schema of a table from a unified catalog:

- View schema

  ```SQL
  DESC[RIBE] <catalog_name>.<database_name>.<table_name>
  ```

- View schema and location from the CREATE statement

  ```SQL
  SHOW CREATE TABLE <catalog_name>.<database_name>.<table_name>
  ```

## Query data from a unified catalog

To query data from a unified catalog, follow these steps:

1. Use [SHOW DATABASES](../sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md) to view the databases in your unified data source with which the unified catalog is associated:

   ```SQL
   SHOW DATABASES FROM <catalog_name>
   ```

2. [Switch to a Hive Catalog and a database in it](#switch-to-a-unified-catalog-and-a-database-in-it).

3. Use [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) to query the destination table in the specified database:

   ```SQL
   SELECT count(*) FROM <table_name> LIMIT 10
   ```

## Load data from Hive, Iceberg, Hudi, or Delta Lake

You can use [INSERT INTO](../sql-reference/sql-statements/data-manipulation/INSERT.md) to load the data of a Hive, Iceberg, Hudi, or Delta Lake table into a CelerData table created within a unified catalog.

The following example loads the data of the Hive table `hive_table` into the CelerData table `test_tbl` created in the database `test_database` that belongs to the unified catalog `unified_catalog`:

```SQL
INSERT INTO unified_catalog.test_database.test_table SELECT * FROM hive_table
```

## Create a database in a unified catalog

Similar to the internal catalog of CelerData, if you have the CREATE DATABASE privilege on a unified catalog, you can use the [CREATE DATABASE](../sql-reference/sql-statements/data-definition/CREATE_DATABASE.md) statement to create a database in that catalog.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

CelerData supports creating only Hive and Iceberg databases in unified catalogs.

[Switch to a unified catalog](#switch-to-a-unified-catalog-and-a-database-in-it), and then use the following statement to create a database in that catalog:

```SQL
CREATE DATABASE <database_name>
[properties ("location" = "<prefix>://<path_to_database>/<database_name.db>")]
```

The `location` parameter specifies the file path in which you want to create the database.

- When you use Hive metastore as the metastore of your data source, the `location` parameter defaults to `<warehouse_location>/<database_name.db>`, which is supported by Hive metastore if you do not specify that parameter at database creation.
- When you use AWS Glue as the metastore of your data source, the `location` parameter does not have a default value, and therefore you must specify that parameter at database creation.

The `prefix` varies based on the storage system you use:

| **Storage system**                                         | **`Prefix`** **value**                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| AWS S3                                                     | `s3`                                                         |

## Drop a database from a unified catalog

Similar to the internal databases of CelerData, if you have the DROP privilege on a database created within a unified catalog, you can use the [DROP DATABASE](../sql-reference/sql-statements/data-definition/DROP_DATABASE.md) statement to drop that database. You can only drop empty databases.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

CelerData supports dropping only Hive and Iceberg databases from unified catalogs.

When you drop a database from a unified catalog, the database's file path on your cloud storage will not be dropped along with the database.

[Switch to a unified catalog](#switch-to-a-unified-catalog-and-a-database-in-it), and then use the following statement to drop a database in that catalog:

```SQL
DROP DATABASE <database_name>
```

## Create a table in a unified catalog

Similar to the internal databases of CelerData, if you have the CREATE TABLE privilege on a database created within a unified catalog, you can use the [CREATE TABLE](../sql-reference/sql-statements/data-definition/CREATE_TABLE.md) or [CREATE TABLE AS SELECT (CTAS)](../sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT.md) statement to create a table in that database.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

CelerData supports creating only Hive and Iceberg tables in unified catalogs.

[Switch to a Hive Catalog and a database in it](#switch-to-a-unified-catalog-and-a-database-in-it). Then, use [CREATE TABLE](../sql-reference/sql-statements/data-definition/CREATE_TABLE.md) to create a Hive or Iceberg table in that database:

```SQL
CREATE TABLE <table_name>
(column_definition1[, column_definition2, ...]
ENGINE = {|hive|iceberg}
[partition_desc]
```

For more information, see [Create a Hive table](../query_data/hive_catalog.md#create-a-hive-table) and [Create an Iceberg table](../query_data/iceberg_catalog.md#create-an-iceberg-table).

The following example creates a Hive table named `hive_table`. The table consists of three columns `action`, `id`, and `dt`, of which `id` and `dt`are partition columns.

```SQL
CREATE TABLE hive_table
(
    action varchar(65533),
    id int,
    dt date
)
ENGINE = hive
PARTITION BY (id,dt);
```

## Sink data to a table in a unified catalog

Similar to the internal tables of CelerData, if you have the INSERT privilege on a table created within a unified catalog, you can use the [INSERT](../sql-reference/sql-statements/data-manipulation/INSERT.md) statement to sink the data of a CelerData table to that Unified Catalog table (currently only Parquet-formatted Unified Catalog tables are supported).

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

CelerData supports sinking data only to Hive and Iceberg tables in unified catalogs.

[Switch to a Hive Catalog and a database in it](#switch-to-a-unified-catalog-and-a-database-in-it). Then, use [INSERT INTO](../sql-reference/sql-statements/data-manipulation/INSERT.md) to insert data into a Hive or Iceberg table in that database:

```SQL
INSERT {INTO | OVERWRITE} <table_name>
[ (column_name [, ...]) ]
{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }

-- If you want to sink data to specified partitions, use the following syntax:
INSERT {INTO | OVERWRITE} <table_name>
PARTITION (par_col1=<value> [, par_col2=<value>...])
{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }
```

For more information, see [Sink data to a Hive table](../query_data/hive_catalog.md#sink-data-to-a-hive-table) and [Sink data to an Iceberg table](../query_data/iceberg_catalog.md#sink-data-to-an-iceberg-table).

The following example inserts three data rows to a Hive table named `hive_table`:

```SQL
INSERT INTO hive_table
VALUES
    ("buy", 1, "2023-09-01"),
    ("sell", 2, "2023-09-02"),
    ("buy", 3, "2023-09-03");
```

## Drop a table from a unified catalog

Similar to the internal tables of CelerData, if you have the DROP privilege on a table created within a unified catalog, you can use the [DROP TABLE](../sql-reference/sql-statements/data-definition/DROP_TABLE.md) statement to drop that table.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

CelerData supports dropping only Hive and Iceberg tables from unified catalogs.

[Switch to a Hive Catalog and a database in it](#switch-to-a-unified-catalog-and-a-database-in-it). Then, use [DROP TABLE](../sql-reference/sql-statements/data-definition/DROP_TABLE.md) to drop a Hive or Iceberg table in that database:

```SQL
DROP TABLE <table_name>
```

For more information, see [Drop a Hive table](../query_data/hive_catalog.md#drop-a-hive-table) and [Drop an Iceberg table](../query_data/iceberg_catalog.md#drop-an-iceberg-table).

The following example drops a Hive table named `hive_table`:

```SQL
DROP TABLE hive_table FORCE
```
