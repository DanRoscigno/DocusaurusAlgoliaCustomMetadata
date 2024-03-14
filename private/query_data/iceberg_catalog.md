# Iceberg catalog

An Iceberg catalog is an external catalog that enables you to query data from Apache Iceberg without ingestion. To ensure successful SQL workloads on your Iceberg cluster, your CelerData cluster must be able to access the storage system and metastore of your Iceberg cluster. CelerData supports the following storage systems and metastores:

- Object storage like AWS S3

- Metastore like Hive metastore (HMS) or AWS Glue

  > **NOTE**
  >
  > If you choose AWS S3 as storage, you can use HMS or AWS Glue as metastore. If you choose any other storage system, you can only use HMS as metastore.

## Usage notes

- The file formats of Iceberg that CelerData supports are Parquet and ORC:

  - Parquet files support the following compression formats: SNAPPY, LZ4, ZSTD, GZIP, and NO_COMPRESSION.
  - ORC files support the following compression formats: ZLIB, SNAPPY, LZO, LZ4, ZSTD, and NO_COMPRESSION.

- In addition to v1 tables, Iceberg catalogs support ORC-formatted v2 tables and Parquet-formatted v2 tables.

## Preparations

Before you create an Iceberg catalog, make sure your CelerData cluster can integrate with the storage system and metastore of your Iceberg cluster.

### Hive metastore

If your Iceberg cluster uses Hive metastore as metastore, check that CelerData can access the host of your Hive metastore.

> **NOTE**
>
> In normal cases, you can take one of the following actions to enable integration between your CelerData cluster and your Hive metastore:
>
> - Deploy your CelerData cluster and your Hive metastore on the same VPC.
> - Configure a VPC peering connection between the VPC of your CelerData cluster and the VPC of your Hive metastore.

Then, check the configurations of the security group of your Hive metastore to ensure that its inbound rules allow inbound traffic from your CelerData cluster's security group and that its port range covers the default port 9083.

### AWS

If your Iceberg cluster uses AWS S3 as storage or AWS Glue as metastore, choose your suitable authentication method and make the required preparations such as creating IAM roles or users and adding IAM policies to the specified IAM roles or users to ensure that your CelerData cluster can access these AWS resources. For more information, see [Authenticate to AWS resources > Preparations](../integration/authenticate_to_aws.md#preparations).

### Microsoft Azure Storage

If your Iceberg cluster uses Azure as storage, choose your suitable authentication method and make the required preparations such as adding role assignments. For more information, see [Authenticate to Azure cloud storage](../integration/authenticate_to_azure_storage.md).

## Create an Iceberg catalog

### Syntax

```SQL
CREATE EXTERNAL CATALOG <catalog_name>
[COMMENT <comment>]
PROPERTIES
(
    "type" = "iceberg",
    MetastoreParams,
    StorageCredentialParams
)
```

### Parameters

#### catalog_name

The name of the Iceberg catalog. The naming conventions are as follows:

- The name can contain letters, digits (0-9), and underscores (_). It must start with a letter.
- The name is case-sensitive and cannot exceed 1023 characters in length.

#### comment

The description of the Iceberg catalog. This parameter is optional.

#### type

The type of your data source. Set the value to `iceberg`.

#### MetastoreParams

A set of parameters about how CelerData integrates with the metastore of your data source.

##### Hive metastore

If you choose Hive metastore as the metastore of your data source, configure `MetastoreParams` as follows:

```SQL
"iceberg.catalog.type" = "hive",
"hive.metastore.uris" = "<hive_metastore_uri>"
```

The following table describes the parameter you need to configure in `MetastoreParams`.

| **Parameter**                       | **Required** | **Description**                                              |
| ----------------------------------- | ------------ | ------------------------------------------------------------ |
| iceberg.catalog.type                | Yes          | The type of metastore that you use for your Iceberg cluster. Set the value to `hive`. |
| hive.metastore.uris                 | Yes          | The URI of your Hive metastore. Format: `thrift://<metastore_IP_address>:<metastore_port>`.<br />If high availability (HA) is enabled for your Hive metastore, you can specify multiple metastore URIs and separate them with commas (,), for example, `"thrift://<metastore_IP_address_1>:<metastore_port_1>","thrift://<metastore_IP_address_2>:<metastore_port_2>","thrift://<metastore_IP_address_3>:<metastore_port_3>"`. |

##### AWS Glue

If you choose AWS Glue as the metastore of your data source, which is supported only when you choose AWS S3 as storage, take one of the following actions:

- To choose the instance profile-based authentication method, configure `MetastoreParams` as follows:

  ```SQL
  "iceberg.catalog.type" = "glue",
  "aws.glue.use_instance_profile" = "true",
  "aws.glue.region" = "<aws_glue_region>"
  ```

- To choose the assumed role-based authentication method, configure `MetastoreParams` as follows:

  ```SQL
  "iceberg.catalog.type" = "glue",
  "aws.glue.use_instance_profile" = "true",
  "aws.glue.iam_role_arn" = "<iam_role_arn>",
  "aws.glue.region" = "<aws_glue_region>"
  ```

- To choose the IAM user-based authentication method, configure `MetastoreParams` as follows:

  ```SQL
  "iceberg.catalog.type" = "glue",
  "aws.glue.use_instance_profile" = "false",
  "aws.glue.access_key" = "<iam_user_access_key>",
  "aws.glue.secret_key" = "<iam_user_secret_key>",
  "aws.glue.region" = "<aws_s3_region>"
  ```

The following table describes the parameters you need to configure in `MetastoreParams`.

| Parameter                     | Required | Description                                                  |
| ----------------------------- | -------- | ------------------------------------------------------------ |
| iceberg.catalog.type          | Yes      | The type of metastore that you use for your Iceberg cluster. Set the value to `glue`. |
| aws.glue.use_instance_profile | Yes      | Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication. Valid values: `true` and `false`. Default value: `false`. |
| aws.glue.iam_role_arn         | No       | The ARN of the IAM role that has privileges on your AWS Glue Data Catalog. If you use the assumed role-based authentication method to access AWS Glue, you must specify this parameter. |
| aws.glue.region               | Yes      | The region in which your AWS Glue Data Catalog resides. Example: `us-west-1`. |
| aws.glue.access_key           | No       | The access key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter. |
| aws.glue.secret_key           | No       | The secret key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter. |

For information about how to choose an authentication method for accessing AWS Glue and how to configure an access control policy in the AWS IAM Console, see [Authentication parameters for accessing AWS Glue](../integration/authenticate_to_aws#authentication-parameters-for-accessing-aws-glue).

#### StorageCredentialParams

A set of parameters about how your CelerData cluster integrates with your object storage.

##### AWS S3

If you choose AWS S3 as storage for your Iceberg cluster, take one of the following actions:

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

For information about how to choose an authentication method for accessing AWS S3 and how to configure an access control policy in AWS IAM Console, see [Authentication parameters for accessing AWS S3](../integration/authenticate_to_aws#authentication-parameters-for-accessing-aws-s3).

##### Microsoft Azure Storage

This section describes the parameters that you need to configure in `StorageCredentialParams` for integrating with various Azure cloud storage services by using various authentication methods. For more information about how to obtain the values of these parameters, see [Authenticate to Azure cloud storage](../integration/authenticate_to_azure_storage.md).

###### Azure Blob Storage

If you choose Blob Storage as storage for your Iceberg cluster, take one of the following actions:

- To use the Shared Key authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.blob.storage_account" = "<blob_storage_account_name>",
  "azure.blob.shared_key" = "<blob_storage_account_shared_key>"
  ```

  The following table describes the parameters.

  | **Parameter**              | **Description**                                           |
  | -------------------------- | --------------------------------------------------------- |
  | azure.blob.storage_account | The name of your Blob storage account.                    |
  | azure.blob.shared_key      | The shared key (access key) of your Blob storage account. |

  > **NOTICE**
  >
  > Note that the storage account you use for authentication must be the one used to store the data of your Iceberg cluster.

- To use the SAS Token authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.blob.storage_account" = "<storage_account_name>",
  "azure.blob.container" = "<container_name>",
  "azure.blob.sas_token" = "<storage_account_SAS_token>"
  ```

  The following table describes the parameters.

  | **Parameter**              | **Description**                                              |
  | -------------------------- | ------------------------------------------------------------ |
  | azure.blob.storage_account | The name of your Blob storage account.                       |
  | azure.blob.container       | The name of the Blob container that stores your data within your Blob storage account. |
  | azure.blob.sas_token       | The SAS token that is used to access your Blob storage account. |

  > **NOTICE**
  >
  > Note that the storage account you use for authentication must be the one used to store the data of your Iceberg cluster.

###### Azure Data Lake Storage Gen2

If you choose Data Lake Storage Gen2 as storage for your Iceberg cluster, take one of the following actions:

- To use the Managed Identity authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls2.oauth2_use_managed_identity" = "true",
  "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",
  "azure.adls2.oauth2_client_id" = "<service_client_id>"
  ```

  The following table describes the parameters.

  | **Parameter**                           | **Description**                                              |
  | --------------------------------------- | ------------------------------------------------------------ |
  | azure.adls2.oauth2_use_managed_identity | Specifies whether to enable the Managed Identity authentication method. Set the value to `true`. |
  | azure.adls2.oauth2_tenant_id            | The ID of the tenant of your ADLS Gen2 storage account.      |
  | azure.adls2.oauth2_client_id            | The client ID of the managed identity that is referenced in the data credential of the destination CelerData cluster. |

  > **NOTICE**
  >
  > Note that the storage account you use for authentication must be the one used to store the data of your Iceberg cluster, and the managed identity must be the one used to deploy your CelerData cluster and be assigned the required read and write permissions (for example, Storage Blob Data Owner) to the storage account.

- To use the Shared Key authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls2.storage_account" = "<storage_account_name>",
  "azure.adls2.shared_key" = "<storage_account_shared_key>"
  ```

  The following table describes the parameters.

  | **Parameter**               | **Description**                                              |
  | --------------------------- | ------------------------------------------------------------ |
  | azure.adls2.storage_account | The name of your ADLS Gen2 storage account.                  |
  | azure.adls2.shared_key      | The shared key (access key) of your ADLS Gen2 storage account. |

  > **NOTICE**
  >
  > Note that the storage account you use for authentication must be the one used to store the data of your Iceberg cluster.

- To use the Service Principal authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls2.oauth2_client_id" = "<service_client_id>",
  "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",
  "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"
  ```

  The following table describes the parameters.

  | **Parameter**                      | **Description**                                             |
  | ---------------------------------- | ----------------------------------------------------------- |
  | azure.adls2.oauth2_client_id       | The application (client) ID of the service principal.       |
  | azure.adls2.oauth2_client_secret   | The value of the client secret of the service principal.    |
  | azure.adls2.oauth2_client_endpoint | The OAuth 2.0 token endpoint (v1) of the service principal. |

  > **NOTICE**
  >
  > Note that the storage account you use for authentication must be the one used to store the data of your Iceberg cluster, and the service principal must be the one used to deploy your CelerData cluster and be assigned the required read and write permissions (for example, Storage Blob Data Owner) to the storage account.

###### Azure Data Lake Storage Gen1

If you choose Data Lake Storage Gen1 as storage for your Iceberg cluster, take one of the following actions:

- To use the Managed Service Identity authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls1.use_managed_service_identity" = "true"
  ```

  The following table describes the parameters.

  | **Parameter**                            | **Description**                                              |
  | ---------------------------------------- | ------------------------------------------------------------ |
  | azure.adls1.use_managed_service_identity | Specifies whether to enable the Managed Service Identity authentication method. Set the value to `true`. |

- To use the Service Principal authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls1.oauth2_client_id" = "<application_client_id>",
  "azure.adls1.oauth2_credential" = "<application_client_credential>",
  "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"
  ```

  The following table describes the parameters.

  | **Parameter**                 | **Description**                                              |
  | ----------------------------- | ------------------------------------------------------------ |
  | azure.adls1.oauth2_client_id  | The application (client) ID of the service principal.        |
  | azure.adls1.oauth2_credential | The value of the client secret of the service principal.     |
  | azure.adls1.oauth2_endpoint   | The OAuth 2.0 token endpoint (v1) of the service principal or application. |

  > **NOTICE**
  >
  > Note that the storage account you use for authentication must be the one used to store the data of your Iceberg cluster, and the service principal must be the one used to deploy your CelerData cluster and be assigned the required read and write permissions (for example, Storage Blob Data Owner) to the storage account.

### Examples

The following examples create an Iceberg catalog named `iceberg_catalog_hms` or `iceberg_catalog_glue`, depending on the type of metastore you use, to query data from your Iceberg cluster.

#### AWS S3

##### Instance profile-based authentication

- If you use Hive metastore in your Iceberg cluster, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.region" = "us-west-2"
  );
  ```

- If you use AWS Glue in your Amazon EMR Iceberg cluster, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_glue
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "glue",
      "aws.glue.use_instance_profile" = "true",
      "aws.glue.region" = "us-west-2",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.region" = "us-west-2"
  );
  ```

##### Assumed role-based authentication

- If you use Hive metastore in your HIceberg cluster, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/test_s3_role",
      "aws.s3.region" = "us-west-2"
  );
  ```

- If you use AWS Glue in your Amazon EMR Iceberg cluster, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_glue
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "glue",
      "aws.glue.use_instance_profile" = "true",
      "aws.glue.iam_role_arn" = "arn:aws:iam::081976408565:role/test_glue_role",
      "aws.glue.region" = "us-west-2",
      "aws.s3.use_instance_profile" = "true",
      "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/test_s3_role",
      "aws.s3.region" = "us-west-2"
  );
  ```

##### IAM user-based authentication

- If you use Hive metastore in your Iceberg cluster, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "aws.s3.use_instance_profile" = "false",
      "aws.s3.access_key" = "<iam_user_access_key>",
      "aws.s3.secret_key" = "<iam_user_access_key>",
      "aws.s3.region" = "us-west-2"
  );
  ```

- If you use AWS Glue in your Amazon EMR Iceberg cluster, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_glue
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "glue",
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

#### Microsoft Azure Storage

##### Azure Blob Storage

- If you choose the Shared Key authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.blob.storage_account" = "<blob_storage_account_name>",
      "azure.blob.shared_key" = "<blob_storage_account_shared_key>"
  );
  ```

- If you choose the SAS Token authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.blob.storage_account" = "<blob_storage_account_name>",
      "azure.blob.container" = "<blob_container_name>",
      "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"
  );
  ```

##### Azure Data Lake Storage Gen2

- If you choose the Managed Identity authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.adls2.oauth2_use_managed_identity" = "true",
      "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",
      "azure.adls2.oauth2_client_id" = "<service_client_id>"
  );
  ```

- If you choose the Shared Key authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.adls2.storage_account" = "<storage_account_name>",
      "azure.adls2.shared_key" = "<shared_key>"
  );
  ```

- If you choose the Service Principal authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.adls2.oauth2_client_id" = "<service_client_id>",
      "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",
      "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"
  );
  ```

##### Azure Data Lake Storage Gen1

- If you choose the Managed Service Identity authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.adls1.use_managed_service_identity" = "true"
  );
  ```

- If you choose the Service Principal authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "azure.adls1.oauth2_client_id" = "<application_client_id>",
      "azure.adls1.oauth2_credential" = "<application_client_credential>",
      "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"
  );
  ```

## View Iceberg catalogs

You can use [SHOW CATALOGS](../sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md) to query all catalogs in the current CelerData cluster:

```SQL
SHOW CATALOGS;
```

You can also use [SHOW CREATE CATALOG](../sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG.md) to query the creation statement of an external catalog. The following example queries the creation statement of an Iceberg catalog named `iceberg_catalog_glue`:

```SQL
SHOW CREATE CATALOG iceberg_catalog_glue;
```

## Switch to an Iceberg Catalog and a database in it

You can use one of the following methods to switch to an Iceberg catalog and a database in it:

- Use [SET CATALOG](../sql-reference/sql-statements/data-definition/SET_CATALOG.md) to specify an Iceberg catalog in the current session, and then use [USE](../sql-reference/sql-statements/data-definition/USE.md) to specify an active database:

  ```SQL
  -- Switch to a specified catalog in the current session:
  SET CATALOG <catalog_name>
  -- Specify the active database in the current session:
  USE <db_name>
  ```

- Directly use [USE](../sql-reference/sql-statements/data-definition/USE.md) to switch to an Iceberg catalog and a database in it:

  ```SQL
  USE <catalog_name>.<db_name>
  ```

## Drop an Iceberg catalog

You can use [DROP CATALOG](../sql-reference/sql-statements/data-definition/DROP_CATALOG.md) to drop an external catalog.

The following example drops an Iceberg catalog named `iceberg_catalog_glue`:

```SQL
DROP Catalog iceberg_catalog_glue;
```

## View the schema of an Iceberg table

You can use one of the following syntaxes to view the schema of an Iceberg table:

- View schema

  ```SQL
  DESC[RIBE] <catalog_name>.<database_name>.<table_name>
  ```

- View schema and location from the CREATE statement

  ```SQL
  SHOW CREATE TABLE <catalog_name>.<database_name>.<table_name>
  ```

## Query an Iceberg table

1. Use [SHOW DATABASES](../sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md) to view the databases in your Iceberg cluster.

   ```SQL
   SHOW DATABASES <catalog_name>
   ```

2. [Switch to an Iceberg catalog and a database in it](#switch-to-an-iceberg-catalog-and-a-database-in-it).

3. Use [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) to query the destination table in the specified database:

   ```SQL
   SELECT count(*) FROM <table_name> LIMIT 10
   ```

## Create an Iceberg database

Similar to the internal catalog of CelerData, if you have the [CREATE DATABASE](../security/data_access_control/privilege_item.md#catalog) privilege on an Iceberg catalog, you can use the [CREATE DATABASE](../sql-reference/sql-statements/data-definition/CREATE_DATABASE.md) statement to create databases in that Iceberg catalog.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

```SQL
CREATE DATABASE <database_name>
[properties ("location" = "<prefix>://<path_to_database>/<database_name.db>/")]
```

You can use the `location` parameter to specify the file path in which you want to create the database. <!--Both HDFS and cloud storage are supported. -->If you do not specify the `location` parameter, CelerData creates the database in the default file path of the Iceberg catalog.

The `prefix` varies based on the storage system you use:

| **Storage system**                                         | **`Prefix` value**                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| HDFS                                                       | `hdfs`                                                       |
| Google GCS                                                 | `gs`                                                         |
| Azure Blob Storage                                         | <ul><li>If your storage account allows access over HTTP, the `prefix` is `wasb`.</li><li>If your storage account allows access over HTTPS, the `prefix` is `wasbs`.</li></ul> |
| Azure Data Lake Storage Gen1                               | `adl`                                                        |
| Azure Data Lake Storage Gen2                               | <ul><li>If your storage account allows access over HTTP, the`prefix` is `abfs`.</li><li>If your storage account allows access over HTTPS, the `prefix` is `abfss`.</li></ul> |
| AWS S3 or other S3-compatible storage (for example, MinIO) | `s3`                                                         |

## Drop an Iceberg database

Similar to the internal databases of CelerData, if you have the [DROP](../security/data_access_control/privilege_item.md#database) privilege on an Iceberg database, you can use the [DROP DATABASE](../sql-reference/sql-statements/data-definition/DROP_DATABASE.md) statement to drop that Iceberg database. You can only drop empty databases.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

When you drop an Iceberg database, the database's file path on your <!--HDFS cluster or -->cloud storage will not be dropped along with the database.

[Switch to an Iceberg catalog](#switch-to-an-iceberg-catalog-and-a-database-in-it), and then use the following statement to drop an Iceberg database in that catalog:

```SQL
DROP DATABASE <database_name>
```

## Create an Iceberg table

Similar to the internal databases of CelerData, if you have the [CREATE TABLE](../security/data_access_control/privilege_item.md#database) privilege on an Iceberg database, you can use the [CREATE TABLE](../sql-reference/sql-statements/data-definition/CREATE_TABLE.md) or [CREATE TABLE AS SELECT (CTAS)](../sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT.md) statement to create a table in that Iceberg database.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

[Switch to an Iceberg catalog and a database in it](#switch-to-an-iceberg-catalog-and-a-database-in-it), and then use the following syntax to create an Iceberg table in that database.

### Syntax

```SQL
CREATE TABLE [IF NOT EXISTS] [database.]table_name
(column_definition1[, column_definition2, ...
partition_column_definition1,partition_column_definition2...])
[partition_desc]
[PROPERTIES ("key" = "value", ...)]
[AS SELECT query]
```

### Parameters

#### column_definition

The syntax of `column_definition` is as follows:

```SQL
col_name col_type [COMMENT 'comment']
```

The following table describes the parameters.

| **Parameter**     | **Description**                                              |
| ----------------- |------------------------------------------------------ |
| col_name          | The name of the column.                                                |
| col_type          | The data type of the column. The following data types are supported: TINYINT, SMALLINT, INT, BIGINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME, CHAR, VARCHAR[(length)], ARRAY, MAP, and STRUCT. The LARGEINT, HLL, and BITMAP data types are not supported. |

> **NOTICE**
>
> All non-partition columns must use `NULL` as the default value. This means that you must specify `DEFAULT "NULL"` for each of the non-partition columns in the table creation statement. Additionally, partition columns must be defined following non-partition columns and cannot use `NULL` as the default value.

#### partition_desc

The syntax of `partition_desc` is as follows:

```SQL
PARTITION BY (par_col1[, par_col2...])
```

Currently CelerData only supports [identity transforms](https://iceberg.apache.org/spec/#partitioning), which means that CelerData creates a partition for each unique partition value.

> **NOTICE**
>
> Partition columns must be defined following non-partition columns. Partition columns support all data types excluding FLOAT, DOUBLE, DECIMAL, and DATETIME and cannot use `NULL` as the default value.

#### properties

You can specify the table attributes in the `"key" = "value"` format in `properties`. See [Iceberg table attributes](https://iceberg.apache.org/docs/latest/configuration/).

The following table describes a few key properties.

| **Property**      | **Description**                                              |
| ----------------- | ------------------------------------------------------------ |
| location          | The file path in which you want to create the Iceberg table. When you use HMS as metastore, you do not need to specify the `location` parameter, because StarRocks will create the table in the default file path of the current Iceberg catalog. When you use AWS Glue as metastore:<ul><li>If you have specified the `location` parameter for the database in which you want to create the table, you do not need to specify the `location` parameter for the table. As such, the table defaults to the file path of the database to which it belongs. </li><li>If you have not specified the `location` for the database in which you want to create the table, you must specify the `location` parameter for the table.</li></ul> |
| file_format       | The file format of the Iceberg table. Only the Parquet format is supported. Default value: `parquet`. |
| compression_codec | The compression algorithm used for the Iceberg table. The supported compression algorithms are SNAPPY, GZIP, ZSTD, and LZ4. Default value: `gzip`. |

### Examples

1. Create a non-partitioned table named `unpartition_tbl`. The table consists of two columns, `id` and `score`, as shown below:

   ```SQL
   CREATE TABLE unpartition_tbl
   (
       id int,
       score double
   );
   ```

2. Create a partitioned table named `partition_tbl_1`. The table consists of three columns, `action`, `id`, and `dt`, of which `id` and `dt` are defined as partition columns, as shown below:

   ```SQL
   CREATE TABLE partition_tbl_1
   (
       action varchar(20),
       id int,
       dt date
   )
   PARTITION BY (id,dt);
   ```

3. Query an existing table named `partition_tbl_1`, and create a partitioned table named `partition_tbl_2` based on the query result of `partition_tbl_1`. For `partition_tbl_2`, `id` and `dt` are defined as partition columns, as shown below:

   ```SQL
   CREATE TABLE partition_tbl_2
   PARTITION BY (k1, k2)
   AS SELECT * from partition_tbl_1;
   ```

## Sink data to an Iceberg table

Similar to the internal tables of CelerData, if you have the [INSERT](../security/data_access_control/privilege_item.md#table) privilege on an Iceberg table, you can use the [INSERT](../sql-reference/sql-statements/data-manipulation/INSERT.md) statement to sink the data of a CelerData table to that Iceberg table (currently only Parquet-formatted Iceberg tables are supported).

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

[Switch to an Iceberg catalog and a database in it](#switch-to-an-iceberg-catalog-and-a-database-in-it), and then use the following syntax to sink the data of StarRocks table to a Parquet-formatted Iceberg table in that database.

### Syntax

```SQL
INSERT {INTO | OVERWRITE} <table_name>
[ (column_name [, ...]) ]
{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }

-- If you want to sink data to specified partitions, use the following syntax:
INSERT {INTO | OVERWRITE} <table_name>
PARTITION (par_col1=<value> [, par_col2=<value>...])
{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }
```

> **NOTICE**
>
> Partition columns do not allow `NULL` values. Therefore, you must make sure that no empty values are loaded into the partition columns of the Iceberg table.

### Parameters

| Parameter   | Description                                                         |
| ----------- | ------------------------------------------------------------ |
| INTO        | To append the data of the CelerData table to the Iceberg table.                                       |
| OVERWRITE   | To overwrite the existing data of the Iceberg table with the data of the CelerData table.                                       |
| column_name | The name of the destination column to which you want to load data. You can specify one or more columns. If you specify multiple columns, separate them with commas (`,`). You can only specify columns that actually exist in the Iceberg table, and the destination columns that you specify must include the partition columns of the Iceberg table. The destination columns you specify are mapped one on one in sequence to the columns of the CelerData table, regardless of what the destination column names are. If no destination columns are specified, the data is loaded into all columns of the Iceberg table. If a non-partition column of the CelerData table cannot be mapped to any column of the Iceberg table, CelerData writes the default value `NULL` to the Iceberg table column. If the INSERT statement contains a query statement whose returned column types differ from the data types of the destination columns, CelerData performs an implicit conversion on the mismatched columns. If the conversion fails, a syntax parsing error will be returned. |
| expression  | Expression that assigns values to the destination column.                                   |
| DEFAULT     | Assigns a default value to the destination column.                                         |
| query       | Query statement whose result will be loaded into the Iceberg table. It can be any SQL statement supported by CelerData. |
| PARTITION   | The partitions into which you want to load data. You must specify all partition columns of the Iceberg table in this property. The partition columns that you specify in this property can be in a different sequence than the partition columns that you have defined in the table creation statement. If you specify this property, you cannot specify the `column_name` property. |

### Examples

1. Insert three data rows into the `partition_tbl_1` table:

   ```SQL
   INSERT INTO partition_tbl_1
   VALUES
       ("buy", 1, "2023-09-01"),
       ("sell", 2, "2023-09-02"),
       ("buy", 3, "2023-09-03");
   ```

2. Insert the result of a SELECT query, which contains simple computations, into the `partition_tbl_1` table:

   ```SQL
   INSERT INTO partition_tbl_1 (id, action, dt) SELECT 1+1, 'buy', '2023-09-03';
   ```

3. Insert the result of a SELECT query, which reads data from the `partition_tbl_1` table, into the same table:

   ```SQL
   INSERT INTO partition_tbl_1 SELECT 'buy', 1, date_add(dt, INTERVAL 2 DAY)
   FROM partition_tbl_1
   WHERE id=1;
   ```

4. Insert the result of a SELECT query into the partitions that meet two conditions, `dt='2023-09-01'` and `id=1`, of the `partition_tbl_2` table:

   ```SQL
   INSERT INTO partition_tbl_2 SELECT 'order', 1, '2023-09-01';
   ```

   Or

   ```SQL
   INSERT INTO partition_tbl_2 partition(dt='2023-09-01',id=1) SELECT 'order';
   ```

5. Overwrite all `action` column values in the partitions that meet two conditions, `dt='2023-09-01'` and `id=1`, of the `partition_tbl_1` table with `close`:

   ```SQL
   INSERT OVERWRITE partition_tbl_1 SELECT 'close', 1, '2023-09-01';
   ```

   Or

   ```SQL
   INSERT OVERWRITE partition_tbl_1 partition(dt='2023-09-01',id=1) SELECT 'close';
   ```

## Drop an Iceberg table

Similar to the internal tables of CelerData, if you have the [DROP](../security/data_access_control/privilege_item.md#table) privilege on an Iceberg table, you can use the [DROP TABLE](../sql-reference/sql-statements/data-definition/DROP_TABLE.md) statement to drop that Iceberg table.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

When you drop an Iceberg table, the table's file path and data on your <!--HDFS cluster or -->cloud storage will not be dropped along with the table.

When you forcibly drop an Iceberg table (namely, with the `FORCE` keyword specified in the DROP TABLE statement), the table's data on your <!--HDFS cluster or -->cloud storage will be dropped along with the table, but the table's file path is retained.

[Switch to an Iceberg catalog and a database in it](#switch-to-an-iceberg-catalog-and-a-database-in-it), and then use the following statement to drop an Iceberg table in that database.

```SQL
DROP TABLE <table_name> [FORCE];
```
