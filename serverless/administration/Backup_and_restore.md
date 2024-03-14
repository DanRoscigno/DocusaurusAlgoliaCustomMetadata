# Back up and restore data with AWS S3

CelerData supports backing up and restoring data with AWS S3. You can also migrate your data by restoring the data to a new CelerData cluster.

## Before you begin

### Configure IAM policy

Make sure your AWS IAM role (or IAM user) is attached with a policy like below to enable successful integration with AWS S3. Remember to replace `<bucket_name>` with the name of the S3 bucket in which to store data snapshots. You can attach this role to the assumed role or to the role referenced in your data credential. For more information, see [Authenticate to AWS resources](../integration/authenticate_to_aws.md).

```SQL
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "s3",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<bucket_name>/*"
            ]
        },
        {
            "Sid": "s3list",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::<bucket_name>"
            ]
        }
    ]
}
```

### Choose your suitable credential method

According to [Authenticate to AWS resources](../integration/authenticate_to_aws.md), choose your suitable credential method. Then, prepare the parameter set `StorageCredentialParams` as follows:

- If you choose instance profile as the credential method for accessing AWS S3, configure your `aws_s3_region` as the region where your S3 bucket resides. Your `aws_s3_region` will be used in `StorageCredentialParams` like below when you create a repository:

  ```SQL
  "aws.s3.use_instance_profile" = "true",
  "aws.s3.region" = "us-west-2"
  ```

- If you choose assumed role as the credential method for accessing AWS S3, configure your `iam_role_arn` as the assumed role's ARN and `aws_s3_region` as the region where your S3 bucket resides. Your `iam_role_arn` and `aws_s3_region` will be used in `StorageCredentialParams` like below when you create a repository:

  ```SQL
  "aws.s3.use_instance_profile" = "true",
  "aws.s3.iam_role_arn" = "arn:aws:iam::xxxxxxxxxx:role/yyyyyyyy",
  "aws.s3.region" = "us-west-2"
  ```

The following table describes the parameters you need to configure in `StorageCredentialParams`.

| **Parameters name**           | **Required** | **Description**                                              |
| ----------------------------- | ------------ | ------------------------------------------------------------ |
| aws.s3.use_instance_profile | Yes          | Allow instance profile and assumed role as credential methods for accessing AWS S3. Set this parameter to `true`. |
| aws.s3.iam_role_arn         | No           | The ARN of the IAM role that has privileges on the AWS S3 bucket in which your data files are stored. If you want to use assumed role as the credential method for accessing AWS S3, you must specify this parameter. Then, CelerData will assume this role when it analyzes your Hive data by using a Hive catalog. |
| aws.s3.region               | Yes          | The region in which your AWS S3 bucket resides. Example: `us-west-1`. |

For more information, see [Authentication parameters for accessing AWS S3](../integration/authenticate_to_aws.md).

## Back up data

CelerData supports FULL backup on the granularity level of database, table, or partition.

If you have stored a large amount of data in a table, we recommend that you back up and restore data by partition. This way, you can reduce the cost of retries in case of job failures. If you need to back up incremental data on a regular basis, you can strategize a dynamic partitioning plan (by a certain time interval, for example) for your table, and back up only new partitions each time.

### Create a repository

Before backing up data, you need to create a repository, which is used to store data snapshots in AWS S3. You can create multiple repositories in a CelerData cluster. For detailed instructions, see [CREATE REPOSITORY](../sql-reference/sql-statements/data-definition/CREATE_REPOSITORY.md).

The following example creates a repository named `test_repo` in the Amazon S3 bucket `bucket_s3`. Remember to replace `StorageCredentialParams` with the parameter set you have prepared.

```SQL
CREATE REPOSITORY test_repo
WITH BROKER
ON LOCATION "s3a://bucket_s3/backup"
PROPERTIES(
    StorageCredentialParams
);
```

> **NOTE**
>
> CelerData supports creating repositories in AWS S3 only according to the S3A protocol. Therefore, when you create repositories in AWS S3, you must replace `s3://` in the S3 URI you pass as a repository location in `ON LOCATION` with `s3a://`.

You can check the repository you have created using [SHOW REPOSITORIES](../sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES.md). After restoring data, you can delete the repository in your CelerData cluster using [DROP REPOSITORY](../sql-reference/sql-statements/data-definition/DROP_REPOSITORY.md). However, data snapshots backed up in AWS S3 cannot be deleted through CelerData. You need to delete them manually in AWS S3.

### Back up a data snapshot

After the repository is created, you need to create a data snapshot and back up it in the remote repository. For detailed instructions, see [BACKUP](../sql-reference/sql-statements/data-definition/BACKUP.md).

The following example creates a data snapshot `sr_member_backup` for the table `sr_member` in the database `sr_hub` and backs up it in the repository `test_repo`.

```SQL
BACKUP SNAPSHOT sr_hub.sr_member_backup
TO test_repo
ON (sr_member);
```

BACKUP is an asynchronous operation. You can check the status of a BACKUP job using [SHOW BACKUP](../sql-reference/sql-statements/data-manipulation/SHOW_BACKUP.md), or cancel a BACKUP job using [CANCEL BACKUP](../sql-reference/sql-statements/data-definition/CANCEL_BACKUP.md).

## Restore or migrate data

You can restore the data snapshot backed up in AWS S3 to the current or other CelerData clusters to restore or migrate data.

### (Optional) Create a repository in the new cluster

To migrate data to another CelerData cluster, you need to create a repository with the same **repository name** and **location** in the new cluster, otherwise you will not be able to view the previously backed up data snapshots. See [Create a repository](#create-a-repository) for details.

### Check the snapshot

Before restoring data, you can check the snapshots in a specified repository using [SHOW SNAPSHOT](../sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT.md).

The following example checks the snapshot information in `test_repo`.

```Plain
mysql> SHOW SNAPSHOT ON test_repo;
+------------------+-------------------------+--------+
| Snapshot         | Timestamp               | Status |
+------------------+-------------------------+--------+
| sr_member_backup | 2023-02-07-03-09-43-561 | OK     |
+------------------+-------------------------+--------+
1 row in set (0.11 sec)
```

### Restore data via the snapshot

You can use the [RESTORE](../sql-reference/sql-statements/data-definition/RESTORE.md) statement to restore data snapshots in the remote storage system to the current or other CelerData clusters.

The following example restores the data snapshot `sr_member_backup` in `test_repo` on the table `sr_member`. It only restores ONE data replica.

```SQL
RESTORE SNAPSHOT sr_hub.sr_member_backup
FROM test_repo
ON (sr_member)
PROPERTIES (
    "backup_timestamp"="2023-02-07-14-45-53-143",
    "replication_num" = "1"
);
```

RESTORE is an asynchronous operation. You can check the status of a RESTORE job using [SHOW RESTORE](../sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md), or cancel a RESTORE job using [CANCEL RESTORE](../sql-reference/sql-statements/data-definition/CANCEL_RESTORE.md).

## Usage notes

- CelerData backs up data in a special file format that cannot be recognized by other applications.
- Only users with the ADMIN privilege can back up or restore data.
- In each database, only one running BACKUP or RESTORE job is allowed each time. Otherwise, Cel er Data returns an error.
- Because BACKUP and RESTORE jobs occupy many resources of your CelerData cluster, you can back up and restore your data while your CelerData cluster is not heavily loaded.
- CelerData does not support specifying data compression algorithm for data backup.
- Because data is backed up as snapshots, the data loaded upon snapshot generation is not included in the snapshot. Therefore, if you load data into the old cluster after the snapshot is generated and before the RESTORE job is completed, you also need to load the data into the cluster that data is restored into. It is recommended that you load data into both clusters in parallel for a period of time after the data migration is complete, and then migrate your application to the new cluster after verifying the correctness of the data and services.
- Before the RESTORE job is completed, you cannot operate the table to be restored.
- You do not need to create the table to be restored in the new cluster before restoring it. The RESTORE job automatically creates it.
- If there is an existing table that has a duplicated name with the table to be restored, CelerData first checks whether or not the schema of the existing table matches that of the table to be restored. If the schemas match, CelerData overwrites the existing table with the data in the snapshot. If the schema does not match, the RESTORE job fails. You can either rename the table to be restored using the keyword `AS`, or delete the existing table before restoring data.
- If the RESTORE job overwrites an existing database, table, or partition, the overwritten data cannot be restored after the job enters the COMMIT phase. If the RESTORE job fails or is canceled at this point, the data may be corrupted and inaccessible. In this case, you can only perform the RESTORE operation again and wait for the job to complete. Therefore, we recommend that you do not restore data by overwriting unless you are sure that the current data is no longer used. The overwrite operation first checks metadata consistency between the snapshot and the existing database, table, or partition. If an inconsistency is detected, the RESTORE operation cannot be performed.
- During a BACKUP or a RESTORE job, CelerData automatically backs up or restores the Single-table Materialized view of the corresponding table. Currently, CelerData does not support backing up the [Asynchronous Refresh Materialized view](../query_accelerate/Materialized_view.md). You can only back up the physical table of the materialized view, which cannot be used for query acceleration or query rewriting.
- Currently, CelerData does not support backing up the configuration data related to user accounts, privileges, and resource groups.
- Currently, CelerData does not support backing up and restoring the Colocate Join relationship among tables.
