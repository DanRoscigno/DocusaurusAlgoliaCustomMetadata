# Iceberg catalog

An Iceberg catalog is an external catalog that enables you to query data from Apache Iceberg without ingestion. To ensure successful SQL workloads on your Iceberg cluster, CelerData must be able to access the storage system and metastore of your Iceberg cluster. CelerData supports the following storage systems and metastores:

- Object storage like AWS S3

- Metastore like Hive metastore or AWS Glue

<!--  > **NOTE**
  >
  > If you choose AWS S3 as storage, you can use HMS or AWS Glue as metastore. If you choose any other storage system, you can only use HMS as metastore.
-->
## Usage notes

- The file formats of Iceberg that CelerData supports are Parquet and ORC:

  - Parquet files support the following compression formats: SNAPPY, LZ4, ZSTD, GZIP, and NO_COMPRESSION.
  - ORC files support the following compression formats: ZLIB, SNAPPY, LZO, LZ4, ZSTD, and NO_COMPRESSION.

- In addition to v1 tables, Iceberg catalogs support ORC-formatted v2 tables and Parquet-formatted v2 tables.

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

If you choose **Hive metastore** as the metastore of your data source, check that CelerData can access the host of your Hive metastore.

> **NOTE**
>
> In normal cases, you can take one of the following actions to enable integration between CelerData and your Hive metastore:
>
> - Deploy CelerData and your Hive metastore on the same VPC.
> - Configure a VPC peering connection between the VPC hosting CelerData and the VPC hosting your Hive metastore.

Then, check the configurations of the security group of your Hive metastore to ensure that its inbound rules allow inbound traffic from CelerData's security group and that its port range covers the default port 9083.

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
| iceberg.catalog.type          | Yes      | The type of metastore that you use for your Hive cluster. Set the value to `glue`. |
| aws.glue.use_instance_profile | Yes      | Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication. Valid values: `true` and `false`. Default value: `false`. |
| aws.glue.iam_role_arn         | No       | The ARN of the IAM role that has privileges on your AWS Glue Data Catalog. If you use the assumed role-based authentication method to access AWS Glue, you must specify this parameter. |
| aws.glue.region               | Yes      | The region in which your AWS Glue Data Catalog resides. Example: `us-west-1`. |
| aws.glue.access_key           | No       | The access key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter. |
| aws.glue.secret_key           | No       | The secret key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter. |

For information about how to choose an authentication method for accessing AWS Glue and how to configure an access control policy in the AWS IAM Console, see [Authentication parameters for accessing AWS Glue](../integration/authenticate_to_aws#authentication-parameters-for-accessing-aws-glue).

#### StorageCredentialParams

A set of parameters about how CelerData integrates with your object storage.

##### AWS S3

If you choose AWS S3 as storage for your Hive cluster, take one of the following actions:

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

<!--##### S3-compatible storage system

If you choose an S3-compatible storage system, such as MinIO, as storage for your Iceberg cluster, configure `StorageCredentialParams` as follows to ensure a successful integration:

```SQL
"aws.s3.enable_ssl" = "false",
"aws.s3.enable_path_style_access" = "true",
"aws.s3.endpoint" = "<s3_endpoint>",
"aws.s3.access_key" = "<iam_user_access_key>",
"aws.s3.secret_key" = "<iam_user_secret_key>"
```

The following table describes the parameters you need to configure in `StorageCredentialParams`.

| Parameter                        | Required | Description                                                  |
| -------------------------------- | -------- | ------------------------------------------------------------ |
| aws.s3.enable_ssl                | Yes      | Specifies whether to enable SSL connection. Valid values: `true` and `false`. Default value: `true`. |
| aws.s3.enable_path_style_access  | Yes      | Specifies whether to enable path-style access.<br />Valid values: `true` and `false`. Default value: `false`. For MinIO, you must set the value to `true`.<br />Path-style URLs use the following format: `https://s3.<region_code>.amazonaws.com/<bucket_name>/<key_name>`. For example, if you create a bucket named `DOC-EXAMPLE-BUCKET1` in the US West (Oregon) Region, and you want to access the `alice.jpg` object in that bucket, you can use the following path-style URL: `https://s3.us-west-2.amazonaws.com/DOC-EXAMPLE-BUCKET1/alice.jpg`. |
| aws.s3.endpoint                  | Yes      | The endpoint that is used to connect to your S3-compatible storage system instead of AWS S3. |
| aws.s3.access_key                | Yes      | The access key of your IAM user. |
| aws.s3.secret_key                | Yes      | The secret key of your IAM user. |

##### Microsoft Azure Storage

###### Azure Blob Storage

If you choose Blob Storage as storage for your Delta Lake cluster, take one of the following actions:

- To choose the Shared Key authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.blob.storage_account" = "<blob_storage_account_name>",
  "azure.blob.shared_key" = "<blob_storage_account_shared_key>"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**              | **Required** | **Description**                              |
  | -------------------------- | ------------ | -------------------------------------------- |
  | azure.blob.storage_account | Yes          | The username of your Blob Storage account.   |
  | azure.blob.shared_key      | Yes          | The shared key of your Blob Storage account. |

- To choose the SAS Token authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.blob.account_name" = "<blob_storage_account_name>",
  "azure.blob.container_name" = "<blob_container_name>",
  "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**             | **Required** | **Description**                                              |
  | ------------------------- | ------------ | ------------------------------------------------------------ |
  | azure.blob.account_name   | Yes          | The username of your Blob Storage account.                   |
  | azure.blob.container_name | Yes          | The name of the blob container that stores your data.        |
  | azure.blob.sas_token      | Yes          | The SAS token that is used to access your Blob Storage account. |

###### Azure Data Lake Storage Gen1

If you choose Data Lake Storage Gen1 as storage for your Delta Lake cluster, take one of the following actions:

- To choose the Managed Service Identity authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls1.use_managed_service_identity" = "true"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**                            | **Required** | **Description**                                              |
  | ---------------------------------------- | ------------ | ------------------------------------------------------------ |
  | azure.adls1.use_managed_service_identity | Yes          | Specifies whether to enable the Managed Service Identity authentication method. Set the value to `true`. |

- To choose the Service Principal authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls1.oauth2_client_id" = "<application_client_id>"
  "azure.adls1.oauth2_credential" = "<application_client_credential>"
  "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**                 | **Required** | **Description**                                              |
  | ----------------------------- | ------------ | ------------------------------------------------------------ |
  | azure.adls1.oauth2_client_id  | Yes          | The client (application) ID of the service principal.        |
  | azure.adls1.oauth2_credential | Yes          | The value of the new client (application) secret created.    |
  | azure.adls1.oauth2_endpoint   | Yes          | The OAuth 2.0 token endpoint (v1) of the service principal or application. |

###### Azure Data Lake Storage Gen2

If you choose Data Lake Storage Gen2 as storage for your Delta Lake cluster, take one of the following actions:

- To choose the Managed Identity authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls2.oauth2_use_managed_identity" = "true"
  "azure.adls2.oauth2_tenant_id" = "<service_principle_tenant_id>"
  "azure.adls2.oauth2_client_id" = "<service_client_id>"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**                           | **Required** | **Description**                                              |
  | --------------------------------------- | ------------ | ------------------------------------------------------------ |
  | azure.adls2.oauth2_use_managed_identity | Yes          | Specifies whether to enable the Managed Identity authentication method. Set the value to `true`. |
  | azure.adls2.oauth2_tenant_id            | Yes          | The ID of the tenant whose data you want to access.          |
  | azure.adls2.oauth2_client_id            | Yes          | The client (application) ID of the managed identity.         |

- To choose the Shared Key authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls2.storage_account" = "<storage_account_name>"
  "azure.adls2.shared_key" = "<shared_key>"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**               | **Required** | **Description**                                              |
  | --------------------------- | ------------ | ------------------------------------------------------------ |
  | azure.adls2.storage_account | Yes          | The username of your Data Lake Storage Gen2 storage account. |
  | azure.adls2.shared_key      | Yes          | The shared key of your Data Lake Storage Gen2 storage account. |

- To choose the Service Principal authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "azure.adls2.oauth2_client_id" = "<service_client_id>"
  "azure.adls2.oauth2_client_secret" = "<service_principle_client_secret>"
  "azure.adls2.oauth2_client_endpoint" = "<service_principle_client_endpoint>"
  ```

  The following table describes the parameters you need to configure `in StorageCredentialParams`.

  | **Parameter**                      | **Required** | **Description**                                              |
  | ---------------------------------- | ------------ | ------------------------------------------------------------ |
  | azure.adls2.oauth2_client_id       | Yes          | The client (application) ID of the service principal.        |
  | azure.adls2.oauth2_client_secret   | Yes          | The value of the new client (application) secret created.    |
  | azure.adls2.oauth2_client_endpoint | Yes          | The OAuth 2.0 token endpoint (v1) of the service principal or application. |

##### Google GCS

If you choose Google GCS as storage for your Delta Lake cluster, take one of the following actions:

- To choose the VM-based authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "gcp.gcs.use_compute_engine_service_account" = "true"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**                              | **Default value** | **Value** **example** | **Description**                                              |
  | ------------------------------------------ | ----------------- | --------------------- | ------------------------------------------------------------ |
  | gcp.gcs.use_compute_engine_service_account | false             | true                  | Specifies whether to directly use the service account that is bound to your Compute Engine. |

- To choose the service account-based authentication method, configure `StorageCredentialParams` as follows:

  ```SQL
  "gcp.gcs.service_account_email" = "<google_service_account_email>"
  "gcp.gcs.service_account_private_key_id" = "<google_service_private_key_id>"
  "gcp.gcs.service_account_private_key" = "<google_service_private_key>"
  ```

  The following table describes the parameters you need to configure in `StorageCredentialParams`.

  | **Parameter**                          | **Default value** | **Value** **example**                                        | **Description**                                              |
  | -------------------------------------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | gcp.gcs.service_account_email          | ""                | "[user@hello.iam.gserviceaccount.com](mailto:user@hello.iam.gserviceaccount.com)" | The email address in the JSON file generated at the creation of the service account. |
  | gcp.gcs.service_account_private_key_id | ""                | "61d257bd8479547cb3e04f0b9b6b9ca07af3b7ea"                   | The private key ID in the JSON file generated at the creation of the service account. |
  | gcp.gcs.service_account_private_key    | ""                | "-----BEGIN PRIVATE KEY----xxxx-----END PRIVATE KEY-----\n"  | The private key in the JSON file generated at the creation of the service account. |

- To choose the impersonation-based authentication method, configure `StorageCredentialParams` as follows:

  - Make the VM instance impersonate the service account:
  
    ```SQL
    "gcp.gcs.use_compute_engine_service_account" = "true"
    "gcp.gcs.impersonation_service_account" = "<assumed_google_service_account_email>"
    ```

    The following table describes the parameters you need to configure in `StorageCredentialParams`.

    | **Parameter**                              | **Default value** | **Value** **example** | **Description**                                              |
    | ------------------------------------------ | ----------------- | --------------------- | ------------------------------------------------------------ |
    | gcp.gcs.use_compute_engine_service_account | false             | true                  | Specifies whether to directly use the service account that is bound to your Compute Engine. |
    | gcp.gcs.impersonation_service_account      | ""                | "hello"               | The service account that you want to impersonate.            |

  - Make a service account (named as meta service account) impersonate another service account (named as data service account):

    ```SQL
    "gcp.gcs.service_account_email" = "<google_service_account_email>"
    "gcp.gcs.service_account_private_key_id" = "<meta_google_service_account_email>"
    "gcp.gcs.service_account_private_key" = "<meta_google_service_account_email>"
    "gcp.gcs.impersonation_service_account" = "<data_google_service_account_email>"
    ```

    The following table describes the parameters you need to configure in `StorageCredentialParams`.

    | **Parameter**                          | **Default value** | **Value** **example**                                        | **Description**                                              |
    | -------------------------------------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | gcp.gcs.service_account_email          | ""                | "[user@hello.iam.gserviceaccount.com](mailto:user@hello.iam.gserviceaccount.com)" | The email address in the JSON file generated at the creation of the meta service account. |
    | gcp.gcs.service_account_private_key_id | ""                | "61d257bd8479547cb3e04f0b9b6b9ca07af3b7ea"                   | The private key ID in the JSON file generated at the creation of the meta service account. |
    | gcp.gcs.service_account_private_key    | ""                | "-----BEGIN PRIVATE KEY----xxxx-----END PRIVATE KEY-----\n"  | The private key in the JSON file generated at the creation of the meta service account. |
    | gcp.gcs.impersonation_service_account  | ""                | "hello"                                                      | The data service account that you want to impersonate.       |
-->
### Examples

The following examples create an Iceberg catalog named `iceberg_catalog_hms` or `iceberg_catalog_glue`, depending on the type of metastore you use, to query data from your Iceberg cluster.

#### AWS S3

##### If you choose instance profile-based credential

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

##### If you choose assumed role-based credential

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

##### If you choose IAM user-based credential

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

<!--#### S3-compatible storage system

Use MinIO as an example. Run a command like below:

```SQL
CREATE EXTERNAL CATALOG iceberg_catalog_hms
PROPERTIES
(
    "type" = "iceberg",
    "iceberg.catalog.type" = "hive",
    "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
    "aws.s3.enable_ssl" = "true",
    "aws.s3.enable_path_style_access" = "true",
    "aws.s3.endpoint" = "<s3_endpoint>",
    "aws.s3.access_key" = "<iam_user_access_key>",
    "aws.s3.secret_key" = "<iam_user_secret_key>"
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
      "azure.blob.account_name" = "<blob_storage_account_name>",
      "azure.blob.container_name" = "<blob_container_name>",
      "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"
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

#### Google GCS

- If you choose the VM-based authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "gcp.gcs.use_compute_engine_service_account" = "true"    
  );
  ```

- If you choose the service account-based authentication method, run a command like below:

  ```SQL
  CREATE EXTERNAL CATALOG iceberg_catalog_hms
  PROPERTIES
  (
      "type" = "iceberg",
      "iceberg.catalog.type" = "hive",
      "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
      "gcp.gcs.service_account_email" = "<google_service_account_email>",
      "gcp.gcs.service_account_private_key_id" = "<google_service_private_key_id>",
      "gcp.gcs.service_account_private_key" = "<google_service_private_key>"    
  );
  ```

- If you choose the impersonation-based authentication method:

  - If you make a VM instance impersonate a service account, run a command like below:

    ```SQL
    CREATE EXTERNAL CATALOG iceberg_catalog_hms
    PROPERTIES
    (
        "type" = "iceberg",
        "iceberg.catalog.type" = "hive",
        "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
        "gcp.gcs.use_compute_engine_service_account" = "true",
        "gcp.gcs.impersonation_service_account" = "<assumed_google_service_account_email>"    
    );
    ```

  - If you make a service account impersonate another service account, run a command like below:

    ```SQL
    CREATE EXTERNAL CATALOG iceberg_catalog_hms
    PROPERTIES
    (
        "type" = "iceberg",
        "iceberg.catalog.type" = "hive",
        "hive.metastore.uris" = "thrift://xx.xx.xx.xx:9083",
        "gcp.gcs.service_account_email" = "<google_service_account_email>",
        "gcp.gcs.service_account_private_key_id" = "<meta_google_service_account_email>",
        "gcp.gcs.service_account_private_key" = "<meta_google_service_account_email>",
        "gcp.gcs.impersonation_service_account" = "<data_google_service_account_email>"
    );
    ```
-->
## View Iceberg catalogs

You can use [SHOW CATALOGS](../sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md) to query all catalogs in your CelerData cloud account:

```SQL
SHOW CATALOGS;
```

You can also use [SHOW CREATE CATALOG](../sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG.md) to query the creation statement of an external catalog. The following example queries the creation statement of an Iceberg catalog named `iceberg_catalog_glue`:

```SQL
SHOW CREATE CATALOG iceberg_catalog_glue;
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
   SHOW DATABASES <catalog_name>;
   ```

2. Use [SET CATALOG](../sql-reference/sql-statements/data-definition/SET_CATALOG.md) to switch to the destination catalog in the current session:

   ```SQL
   SET CATALOG <catalog_name>;
   ```

   Then, use [USE](../sql-reference/sql-statements/data-definition/USE.md) to specify the active database in the current session:

   ```SQL
   USE <db_name>;
   ```

   Or, you can use [USE](../sql-reference/sql-statements/data-definition/USE.md) to directly specify the active database in the destination catalog:

   ```SQL
   USE <catalog_name>.<db_name>;
    ```

3. Use [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) to query the destination table in the specified database:

   ```SQL
   SELECT count(*) FROM <table_name> LIMIT 10
   ```

## Create an Iceberg database

Similar to the internal catalog of CelerData Cloud, if you have the [CREATE DATABASE](../security/data_access_control/privilege_item.md#catalog) privilege on an Iceberg catalog, you can use the [CREATE DATABASE](../sql-reference/sql-statements/data-definition/CREATE_DATABASE.md) statement to create databases in that catalog.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

```SQL
CREATE DATABASE <database_name>
[properties ("location" = "s3://path_to_db/<database_name.db>/")]
```

You can use the `location` parameter to specify the file path in which you want to create the database. <!--Both HDFS and cloud storage are supported. -->If you do not specify the `location` parameter, CelerData Cloud creates the database in the default file path of the Iceberg catalog.

## Drop an Iceberg database

Similar to the internal databases of CelerData Cloud, if you have the [DROP](../security/data_access_control/privilege_item.md#database) privilege on an Iceberg database, you can use the [DROP DATABASE](../sql-reference/sql-statements/data-definition/DROP_DATABASE.md) statement to drop that database.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

When you drop an Iceberg database, the database's file path on your <!--HDFS cluster or -->cloud storage will not be dropped along with the database.

```SQL
DROP DATABASE <database_name>;
```

## Create an Iceberg table

Similar to the internal databases of CelerData Cloud, if you have the [CREATE TABLE](../security/data_access_control/privilege_item.md#database) privilege on an Iceberg database, you can use the [CREATE TABLE](../sql-reference/sql-statements/data-definition/CREATE_TABLE.md) or [CREATE TABLE AS SELECT (CTAS)](../sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT.md) statement to create tables in that database.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

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

Currently CelerData Cloud only supports [identity transforms](https://iceberg.apache.org/spec/#partitioning), which means that CelerData Cloud creates a partition for each unique partition value.

> **NOTICE**
>
> Partition columns must be defined following non-partition columns. Partition columns support all data types excluding FLOAT, DOUBLE, DECIMAL, and DATETIME and cannot use `NULL` as the default value.

#### properties

You can specify the table attributes in the `"key" = "value"` format in `properties`. See [Iceberg table attributes](https://iceberg.apache.org/docs/latest/configuration/).

### Examples

1. Create a non-partitioned table named `unpartition_tbl`. The table consists of two columns, `id` and `score`, as shown below:

   ```SQL
   CREATE TABLE unpartition_tbl
   (
       id int,
       score double
   );
   ```

2. Create a partitioned table named `partition_tbl`. The table consists of three columns, `action`, `id`, and `dt`, of which `id` and `dt` are defined as partition columns, as shown below:

   ```SQL
   CREATE TABLE partition_tbl
   (
       action varchar(20),
       id int,
       dt date
   )
   PARTITION BY (id,dt);
   ```

3. Create a partitioned table named `partition_tbl`. The table consists of four columns, `v1`, `v2`, `k1`, and `k2`, of which `k1` and `k2` are defined as partition columns. At the same time, specify that CelerData Cloud synchronously queries an existing table named `employee` and inserts the query result into the new table `partition_tbl`, as shown below:

   ```SQL
   CREATE TABLE partition_tbl 
   (
       v1 int,
       v2 int,
       k1 int,
       k2 int
   )
   PARTITION BY (k1, k2)
   AS SELECT * from employee;
   ```

## Sink data to an Iceberg table

Similar to the internal tables of CelerData Cloud, if you have the [INSERT](../security/data_access_control/privilege_item.md#table) privilege on an Iceberg table, you can use the [INSERT](../sql-reference/sql-statements/data-manipulation/INSERT.md) statement to sink the data of a CelerData table to a Parquet-formatted Iceberg table.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

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
| column_name | The name of the destination column to which you want to load data. You can specify one or more columns. If you specify multiple columns, separate them with commas (`,`). You can only specify columns that actually exist in the Iceberg table, and the destination columns that you specify must include the partition columns of the Iceberg table. The destination columns you specify are mapped one on one in sequence to the columns of the CelerData table, regardless of what the destination column names are. If no destination columns are specified, the data is loaded into all columns of the Iceberg table. If a non-partition column of the CelerData table cannot be mapped to any column of the Iceberg table, CelerData Cloud writes the default value `NULL` to the Iceberg table column. If the INSERT statement contains a query statement whose returned column types differ from the data types of the destination columns, CelerData Cloud performs an implicit conversion on the mismatched columns. If the conversion fails, a syntax parsing error will be returned. |
| expression  | Expression that assigns values to the destination column.                                   |
| DEFAULT     | Assigns a default value to the destination column.                                         |
| query       | Query statement whose result will be loaded into the Iceberg table. It can be any SQL statement supported by CelerData Cloud. |
| PARTITION   | The partitions into which you want to load data. You must specify all partition columns of the Iceberg table in this property. The partition columns that you specify in this property can be in a different sequence than the partition columns that you have defined in the table creation statement. If you specify this property, you cannot specify the `column_name` property. |

### Examples

1. Insert a data row into the `partition_tbl` table:

   ```SQL
   INSERT INTO partition_tbl SELECT 'pv', 1, '2023-07-21';
   ```

2. Insert the result of a SELECT query, which contains simple computations, into the `partition_tbl` table:

   ```SQL
   INSERT INTO partition_tbl (id, action, dt) SELECT 1+1, 'buy', '2023-07-21';
   ```

3. Insert the result of a SELECT query, which reads data from the `partition_tbl` table, into the same table:

   ```SQL
   INSERT INTO partition_tbl SELECT 'buy', 1, date_add(dt, INTERVAL 2 DAY) FROM partition_tbl WHERE id=1;
   ```

4. Insert the result of a SELECT query into the partitions that meet two conditions, `dt=‘2023-07-21’` and `id=1`, of the `partition_table` table:

   ```SQL
   INSERT INTO partition_table SELECT 'order', 1, '2023-07-21';
   INSERT INTO partition_table (dt='2023-07-21',id=1) SELECT 'order';
   ```

5. Overwrite all `action` column values in the partitions that meet two conditions, `dt=‘2023-07-21’` and `id=1`, of the `partition_table` table with `close`:

   ```SQL
   INSERT OVERWRITE partition_table SELECT 'close', 1, '2023-07-21';
   INSERT OVERWRITE partition_table (dt='2023-07-21',id=1) SELECT 'close';
   ```

## Drop an Iceberg table

Similar to the internal tables of CelerData Cloud, if you have the [DROP](../security/data_access_control/privilege_item.md#table) privilege on an Iceberg table, you can use the [DROP TABLE](../sql-reference/sql-statements/data-definition/DROP_TABLE.md) statement to drop that Iceberg table.

> **NOTE**
>
> You can grant and revoke privileges by using [GRANT](../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../sql-reference/sql-statements/account-management/REVOKE.md).

When you drop an Iceberg table, the table's file path and data on your <!--HDFS cluster or -->cloud storage will not be dropped along with the table.

When you forcibly drop an Iceberg table (namely, with the `FORCE` keyword specified in the DROP TABLE statement), the table's data on your <!--HDFS cluster or -->cloud storage will be dropped along with the table, but the table's file path is retained.

```SQL
DROP TABLE <table_name> [FORCE];
```
