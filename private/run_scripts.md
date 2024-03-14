---
sidebar_position: 170
---

# Run scripts

Currently, CelerData only supports script execution via Terraform.

## Request parameters

| **Parameter**        | **Type** | **Description**                                              |
| -------------------- | -------- | ------------------------------------------------------------ |
| cluster_id           | STRING   | The ID of the CelerData cluster.                             |
| run_scripts_parallel | BOOLEAN  | Whether to run scripts in parallel. Valid values: `true` and `false`. Default value: `false`. |
| scripts              | ARRAY    | The list of scripts to be run. A maximum of 20 scripts can be specified. |
| scripts.script_path  | STRING   | The S3 URI of the script to be run. The S3 URI is in one of the following formats:<ul><li>`s3://<bucket_name>/<folder_name>/xxx.sh`: You must go to the instance profiles associated with the EC2 instances to which the CelerData cluster will be deployed and configure read permissions on the specified bucket.</li><li>`s3a://<bucket_name>/<folder_name>/xxx.sh`: You must go to the instance profiles associated with the EC2 instances to which the CelerData cluster will be deployed and configure read permissions on the specified bucket.</li><li>`/<folder_name>/xxx.sh`: You can use this format if the script is stored in the bucket you use for the cluster deployment.</li></ul> |
| scripts.logs_dir     | STRING   | The path to which the script execution results are saved. The path is in one of the following formats:<ul><li>`s3://<bucket_name>/<folder_name>/`: You must go to the instance profiles associated with the EC2 instances to which the CelerData cluster will be deployed and configure read and write permissions on the specified bucket.</li><li>`s3a://<bucket_name>/<folder_name>/`: You must go to the instance profiles associated with the EC2 instances to which the CelerData cluster will be deployed and configure read and write permissions on the specified bucket.</li><li>`/<folder_name>/`: You can use this format if you want to save the script execution results to the bucket you use for the cluster deployment.</li></ul> |

Take note of the following points:

- All scripts are run by the default user. If you want to apply the privileges of the **root** user, use Sudo.
- The maximum amount of time allowed for execution of all specified scripts each time is 5 minutes.
- Up to 20 scripts can be run at a time.
- Scripts running abnormally will cause cluster deployment failures. Therefore, make sure the specified scripts can be successfully run.
- Make sure that the instance profiles associated with all EC2 instances to which the CelerData cluster will be deployed have the required read or write permissions on the bucket and key specified in the scripts and log files.
- The list of scripts specified in the request parameter `scripts` can be located in different paths, and the log files generated upon script execution will be saved to paths similar to the paths of the scripts.
- Running each script generates two log files, **xxx-stderr.log** and **xxx-stdout.log**.

## Running scripts

All scripts can use the following environment variables during their execution process:

| **Environment** **variable** | **Description**                                              |
| ---------------------------- | ------------------------------------------------------------ |
| CELERDATA_CLUSTER_ID         | The ID of the CelerData cluster.                             |
| CELERDATA_CLUSTER_NAME       | The name of the CelerData cluster.                           |
| CELERDATA_ACCOUNT_ID         | The ID of the CelerData cloud account.                       |
| STARROCKS_INSTANCE_TYPE      | The StarRocks process running on EC2 instances. Valid values: `FE` and `BE`. |
| STARROCKS_INSTANCE_CONF_PATH | The save path of the configuration file for the StarRocks process running on EC2 instances: **/xxx/xxx/fe/conf/fe.conf** or **/xxx/xxx/be/conf/be.conf**. |

### Initialization scripts for cluster deployment

The list of scripts specified in the request parameter `scripts` will be run at the beginning and end of the cluster deployment respectively after the EC2 instances are launched.

1. At the beginning of the cluster deployment:

   1. All scripts are run once by the `source` command.
   2. The `on_deployment_started` method is called in every script. If this method does not exist in a script, the script is considered to be run successfully by default.
   3. Log files for each script are generated and saved to the following paths:

      - `<s3_logs_dir>/<cluster_name>-<cluster_id>/<host_ip>/on-deployment-started/<script_path>-<run_timestamp_ms>-stdout.log`
      - `<s3_logs_dir>/<cluster_name>-<cluster_id>/<host_ip>/on-deployment-started/<script_path>-<run_timestamp_ms>-stderr.log`

2. At the end of the cluster deployment:

   1. All scripts are run once by the `source` command.
   2. The `on_deployment_completed` method is called in every script. If this method does not exist in a script, the execution result of the script depends on the result returned by the `source` command in the previous step.
   3. Log files for each script are generated and saved to the following paths:

      - `<s3_logs_dir>/<cluster_name>-<cluster_id>/<host_ip>/on-deployment-completed/<script_path>-<run_timestamp_ms>-stdout.log`
      - `<s3_logs_dir>/<cluster_name>-<cluster_id>/<host_ip>/on-deployment-completed/<script_path>-<run_timestamp_ms>-stderr.log`

### Ad-hoc scripts for one-time execution

The list of scripts specified in the request parameter `scripts` will be run by an API call.

1. Every script is run via **/bin/bash**.
2. Log files for each script are generated and saved to the following paths:

   - `<s3_logs_dir>/<cluster_name>-<cluster_id>/<host_ip>/<script_path>-<run_timestamp_ms>-stdout.log`
   - `<s3_logs_dir>/<cluster_name>-<cluster_id>/<host_ip>/<script_path>-<run_timestamp_ms>-stderr.log`
