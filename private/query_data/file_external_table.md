# File external table

This topic describes how to use file external tables to directly query Parquet and ORC data files in AWS S3.

## Usage notes

- File external tables must be created in databases within `default_catalog`.
- Only Parquet and ORC data files are supported.
- You can only use file external tables to **query data**. INSERT, DELETE, and DROP operations on the target data file are not supported.

## Create a file external table

### Syntax

```SQL
CREATE EXTERNAL TABLE <table_name>
(
    <col_name> <col_type> [NULL | NOT NULL] [COMMENT "<comment>"]
) 
ENGINE=file
COMMENT [comment]
PROPERTIES
(
    FileLayoutParams,
    StorageCredentialParams,
)
```

| **Parameter**    | **Required** | **Description**                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| table_name       | Yes          | The name of the file external table. The naming conventions are as follows:The name can contain letters, digits (0-9), and underscores (_). It must start with a letter.The name cannot exceed 64 characters in length. |
| col_name         | Yes          | The column name in the file external table. The column names in the file external table must be the same as those in the target data file but are not case-sensitive. The order of columns in the file external table can be different from that in the target data file. |
| col_type         | Yes          | The column type in the file external table. You need to specify this parameter based on the column type in the target data file. For more information, see [Mapping of column types](#mapping-of-column-types). |
| NULL \| NOT NULL | No           | Whether the column in the file external table is allowed to be `NULL`.<ul><li>`NULL`: NULL is allowed.</li><li>`NOT NULL`: NULL is not allowed.</li></ul> You must specify the `NULL \| NOT NULL` modifier based on the following rules:<ul><li>If `NULL \| NOT NULL` is not specified for the columns in the target data file, you can choose not to specify `NULL \| NOT NULL` for the columns in the file external table or specify `NULL` for the columns in the file external table.</li><li>If `NULL` is specified for the columns in the target data file, you can choose not to specify `NULL \| NOT NULL` for the columns in the file external table or specify `NULL` for the columns in the file external table.</li><li>If `NOT NULL` is specified for the columns in the target data file, you must also specify `NOT NULL` for the columns in the file external table.</li></ul> |
| comment          | No           | The comment of column in the file external table.            |
| ENGINE           | Yes          | The type of engine. Set the value to `file`.                 |
| comment          | No           | The description of the file external table.                 |

You also need to configure `FileLayoutParams` and `StorageCredentialParams` in `PROPERTIES` to describe how to read files and integrate with AWS authentication service (AWS IAM).

### FileLayoutParams

```SQL
FileLayoutParams :: = 
"path" = "<file_path>",
"format" = "<file_format>"
```

| **Parameter**             | **Required** | **Description**                                              |
| ------------------------- | ------------ | ------------------------------------------------------------ |
| path                      | Yes          | The path of the data file stored in Amazon S3. The path format is `s3://<bucket name>/<folder>/`. Pay attention to the following rules when you enter the path: <ul><li>If the value of the `path` parameter ends with a slash `/`, such as `s3://<bucket name>/<folder>/`, Celerdata treats it as a path. When you execute a query, Celerdata traverses all data files under the path. It does not traverse data files by using recursion by default.</li><li>If the value of the `path` parameter does not end with `/`, such as `s3://<bucket name>/<folder>`, Celerdata treats it as a single data file. When you execute a query, Celerdata only scans this data file.</li></ul> |
| format                    | Yes          | The format of the data file. Only Parquet and ORC are supported. |
| enable_recursive_listing  | No           | Specifies whether to recursively transverse all files under the current path. Default value: `false`. |

### StorageCredentialParams

#### AWS S3

If you choose AWS S3 as file storage, configure the following parameters:

```SQL
-- You choose instance profile as the credential method when accessing S3.
StorageCredentialParams (for AWS S3) :: = 
"aws.s3.use_instance_profile" = "true",
"aws.s3.region" = "<aws_s3_region>"

-- You choose assumed role as the credential method when accessing S3.
StorageCredentialParams (for AWS S3) :: = 
"aws.s3.use_instance_profile" = "true",
"aws.s3.iam_role_arn" = "<ARN of your assumed role>",
"aws.s3.region" = "<aws_s3_region>"
```

| **Parameter name**          | **Required** | **Description**                                              |
| --------------------------- | ------------ | ------------------------------------------------------------ |
| aws.s3.use_instance_profile | Yes          | Specifies whether to enable the instance profile and assumed role as credential methods for authentication when you access AWS S3. Valid values: `true` and `false`. `true` allows Celerdata to use both the two credential methods. Default value: `true`. |
| aws.s3.iam_role_arn         | Yes          | The ARN of the IAM role that has privileges on the S3 bucket in which the target data file is stored. If you want to use assumed role as the credential method for accessing AWS S3, you must specify this parameter. Celerdata will assume this role when you analyze Hive data by using a catalog. |
| aws.s3.region               | Yes          | The region in which the S3 bucket resides, for example, `us-west-1`. |

For information about how to choose a credential method for accessing AWS S3 and how to configure an access control policy in the AWS IAM Console, see [Authentication parameters for accessing AWS S3](../integration/authenticate_to_aws.md#authentication-parameters-for-accessing-aws-s3).

<!--#### S3-compatible storage

If you choose an S3-compatible storage system, such as MinIO, as storage for your Hive cluster, configure `StorageCredentialParams` as follows to ensure a successful integration:

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
-->
### Mapping of column types

The following table provides the mapping of column types between the target data file and the file external table.

| Data file   | File external table                                          |
| ----------- | ------------------------------------------------------------ |
| INT/INTEGER | INT                                                          |
| BIGINT      | BIGINT                                                       |
| TIMESTAMP   | DATETIME. Note that TIMESTAMP is converted to DATETIME without a time zone based on the time zone setting of the current session and loses some of its precision. |
| STRING      | STRING                                                      |
| VARCHAR     | VARCHAR                                                      |
| CHAR        | CHAR                                                         |
| DOUBLE      | DOUBLE                                                       |
| FLOAT       | FLOAT                                                        |
| DECIMAL     | DECIMAL                                                      |
| BOOLEAN     | BOOLEAN                                                      |
| ARRAY       | ARRAY                                                        |
| MAP         | MAP                                                          |
| STRUCT      | STRUCT                                                       |

## Analyze data by using a file external table

```SQL
SELECT COUNT(*) FROM <file_external_table>
```

## Examples

Example 1: Create a file external table and use the instance profile-based credential method to access a single Parquet file in AWS S3.

```SQL
CREATE EXTERNAL TABLE table_1
(
    name string, 
    id int
) 
ENGINE=file
PROPERTIES 
(
    "path" = "s3://bucket-test/folder1/raw_0.parquet", 
    "format" = "parquet",
    "aws.s3.use_instance_profile" = "true",
    "aws.s3.region" = "us-west-2" 
);
```

Example 2: Create a file external table and use the assumed role-based credential method to access all the ORC files under the target file path in AWS S3.

```SQL
CREATE EXTERNAL TABLE table_1
(
    name string, 
    id int
) 
ENGINE=file
PROPERTIES 
(
    "path" = "s3://bucket-test/folder1/", 
    "format" = "orc",
    "aws.s3.use_instance_profile" = "true",
    "aws.s3.iam_role_arn" = "arn:aws:iam::51234343412:role/role_name_in_aws_iam",
    "aws.s3.region" = "us-west-2" 
);
```
