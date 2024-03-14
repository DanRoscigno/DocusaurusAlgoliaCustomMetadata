# Manage deployment credentials for AWS

A deployment credential for AWS in CelerData provides information about an IAM role created within your AWS account. The IAM role is used to grant CelerData permission to create and manage resources in your own VPC.

CelerData automatically generates a deployment credential upon each successful cluster deployment on AWS. You can manage these deployment credentials for AWS, including creating, viewing, and deleting a deployment credential.

To ensure a successful cluster deployment in your own VPC, you must have a deployment credential to select, or create one, during the deployment process.

## Create a deployment credential

The instructions below show you how to create a deployment credential from the **Cloud settings** page in the CelerData Cloud Private console before you create a deployment. You can also create a deployment credential in a similar way as part of the workflow of creating a deployment. See [Deployment on AWS](../../get_started/create_cluster/create_cluster_aws.md).

> **NOTE**
>
> If you create a deployment without selecting an existing deployment credential, CelerData automatically creates a deployment credential based on your input during deployment and saves it for future use.

To create a deployment credential before deployment, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Deployment credentials** tab of the **AWS Cloud** page, click **Create deployment credential**.

4. In the **Create deployment credential** dialog box, configure the following parameters and click **Submit**.

   | **Parameter**          | **Required** | **Description**                                              |
   | ---------------------- | ------------ | ------------------------------------------------------------ |
   | Deployment credential name        | Yes          | Enter the name of the deployment credential.<br/> **NOTE** <br/> The name must be unique within your CelerData cloud account. |
   | Credential method      | Yes          | Select the type of deployment credential that you use to control the permissions of CelerData to launch and manage resources in your AWS cloud.<br/>**NOTE**<br/>CelerData supports only RAM roles as deployment credentials. Therefore, you can select only **Cross-account IAM Role**. |
   | IAM policy information        | N/A          | The JSON policy document that you use to create a policy. The policy defines the permissions on specific resources in your own VPC. |
   | Trust account ID       | N/A          | The account ID that you use to create a cross-account IAM role.<br/>**NOTE**<br/>The trust account ID and the external ID are used together to identify the account that can use the IAM role. |
   | External ID            | N/A          | The external ID that you use to create a cross-account IAM role.<br/>**NOTE**<br/>The trust account ID and the external ID are used together to identify the account that can use the IAM role. |
    IAM role ARN | Yes          | Enter the ARN of the cross-account IAM role that you have created to grant CelerData permission to launch and manage resources in your AWS cloud. |

   For **IAM role ARN**, you need to follow the instructions provided in [Create a cross-account IAM role](../../aws/create_iam_role.md) to create a cross-account IAM role in the [AWS IAM console](https://console.aws.amazon.com/iam/) and copy the ARN of the cross-account IAM role.

On the **Deployment credential** tab of the **AWS Cloud** page, the deployment credential that you just created is shown.

When you create a cluster, you can select and reuse a deployment credential that you have already created. Make sure that a policy that contains the **IAM role ARN** of the deployment credential of your choice is attached to the deployment credential that you want to reuse.

## View a deployment credential

Before you start a deployment, you can view all of the deployment credentials created within your CelerData cloud account and find the one that best suits your deployment requirements. Then, you can select that deployment credential during the deployment process.

To view a deployment credential, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Deployment credentials** tab of the **AWS Cloud** page, click the deployment credential whose details you want to view.

4. On the right-side pane that appears, view the details about the deployment credential.

## Delete a deployment credential

Deployment credentials cannot be edited after they are created. If a deployment credential has incorrect data or if you no longer need a deployment credential, follow these steps to delete it:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Deployment credentials** tab of the **AWS Cloud** page, click the deployment credential that you want to delete.

4. In the right-side pane that appears, click **Delete**.

5. In the dialog box that appears, enter **Delete** and click **Delete**.

   > **NOTE**
   >
   > A deployment credential cannot be deleted if there are still CelerData clusters created based on it. Therefore, before you delete a deployment credential, make sure all CelerData clusters that are created by using the deployment credential are released.

## Usage notes

When you are creating a deployment, you cannot edit an existing deployment credential that you select. If no existing deployment credentials can meet your deployment requirements, we recommend that you create a new deployment credential.
