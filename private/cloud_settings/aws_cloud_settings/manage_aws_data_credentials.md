# Manage data credentials for AWS

A data credential for AWS in CelerData declares read and write permissions on an S3 bucket, which is used to store query profiles. A query profile is used to visualize the details of a query execution. The query profile helps you troubleshoot performance bottlenecks during the query's execution. Note that the bucket that you decide to use must reside in the AWS region in which you want to deploy CelerData clusters. If you do not have such a bucket, create one before you start your journey with CelerData.

CelerData automatically generates a data credential upon each successful cluster deployment on AWS. You can manage these data credentials for AWS, including creating, viewing, and deleting a data credential.

To ensure a successful cluster deployment in your own VPC, you must have a data credential to select, or create one, during the deployment process.

## Create a data credential

The instructions below show you how to create a data credential from the **Cloud settings** page in the CelerData Cloud Private console before you create a deployment. You can also create a data credential in a similar way as part of the workflow of creating a deployment. See [Deployment on AWS](../../get_started/create_cluster/create_cluster_aws.md).

> **NOTE**
>
> If you create a deployment without selecting an existing data credential, CelerData automatically creates a data credential based on your input during deployment and saves it for future use.

To create a data credential before deployment, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Data credentials** tab of the **AWS Cloud** page, click **Create data credential**.

4. In the **Create data credential** dialog box, configure the following parameters and click **Submit**.

   | **Parameter**        | **Required** | **Description**                                              |
   | -------------------- | ------------ | ------------------------------------------------------------ |
   | Data credential name   | Yes          | Enter the name of the data credential.<br/>**NOTE**<br/>The name must be unique within your CelerData cloud account. |
   | Bucket name          | Yes          | Enter the name of your bucket.<br/>**NOTE**<br/>When you create a cluster, you can only use a data credential that references a bucket located in the same region as the cluster. |
   | IAM policy information      | N/A          | The JSON policy document that you use to create a policy. The policy defines the permissions on your bucket. |
   | Instance profile ARN | Yes          | Enter the instance profile ARN of the IAM role that you have created to grant CelerData permission to access your bucket. |

   For **Instance profile ARN**, you need to follow the instructions provided in [Create a service IAM role for EC2](../../aws/create_service_iam_role.md) to create a service IAM role in the [AWS IAM console](https://console.aws.amazon.com/iam/) and copy the instance profile ARN of the service IAM role.

On the **Data credentials** tab of the **AWS Cloud** page, the data credential that you just created is shown.

When you create a cluster, you can select and reuse a data credential that you have already created. After you decide which data credential to use, you need to obtain the ARN of the data credential role and the name of the data credential bucket (for easy understanding, the IAM role and bucket referenced in the data credential are referred to as the data credential role and the data credential bucket) and create a deployment credential to which a policy that contains the data credential's ARN and the data credential bucket's name is attached. See [Create a deployment credential](../aws_cloud_settings/manage_aws_deployment_credentials.md#create-a-deployment-credential) and [Create a cross-account IAM role](../../aws/create_iam_role.md).

## View a data credential

Before you start a deployment, you can view all of the data credentials created within your CelerData cloud account and find the one that best suits your deployment requirements. Then, you can select that data credential during the deployment process.

To view a data credential, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Data credentials** tab of the **AWS Cloud** page, click the data credential whose details you want to view.

4. On the right-side pane that appears, view the details about the data credential.

## Delete a data credential

Data credentials cannot be edited after they are created. If a data credential has incorrect data or if you no longer need a data credential, you can follow these steps to delete it:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud Settings** > **AWS**.

3. On the **Data credentials** tab of the **AWS Cloud** page, click the data credential that you want to delete.

4. On the right-side pane that appears, click **Delete**.

5. In the dialog box that appears, enter **Delete** and click **Delete**.

> **NOTE**
>
> A data credential cannot be deleted if there are still CelerData clusters created based on it. Therefore, before you delete a data credential, make sure all CelerData clusters that are created by using the data credential are released.

## Usage notes

When you are creating a deployment, you cannot edit an existing data credential that you select. If no existing data credentials can meet your deployment requirements, we recommend that you create a new data credential.
