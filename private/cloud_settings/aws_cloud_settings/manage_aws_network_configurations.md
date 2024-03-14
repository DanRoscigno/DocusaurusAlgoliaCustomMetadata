# Manage network configurations for AWS

A network configuration for AWS in CelerData enables connectivity between cluster nodes within your own VPC and between CelerData's VPC and your own VPC.

CelerData automatically generates a network configuration upon each successful cluster deployment on AWS. You can manage these network configurations for AWS, including creating, viewing, and deleting a network configuration.

To ensure a successful cluster deployment in your own VPC, you must have a network configuration to select, or create one, during the deployment process.

## Create a network configuration

The instructions below show you how to create a network configuration from the **Cloud settings** page in the CelerData Cloud Private console before you create a deployment. You can also create a network configuration in a similar way as part of the workflow of creating a deployment. See [Deployment on AWS](../../get_started/create_cluster/create_cluster_aws.md).

> **NOTE**
>
> If you create a deployment without selecting an existing network configuration, CelerData automatically creates a network configuration based on your input during deployment and saves it for future use.

To create a network configuration before deployment, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Network configurations** tab of the **AWS Cloud** page, click **Create network configuration**.

4. In the **Create network configuration** dialog box, configure the following parameters and click **Submit**.

   | **Parameter**              | **Required** | **Description**                                              |
   | -------------------------- | ------------ | ------------------------------------------------------------ |
   | Network configuration name | Yes          | Enter the name of the network configuration.<br/>**NOTE**<br/>The name must be unique within your CelerData cloud account. |
   | AWS region                 | Yes          | Select the AWS region in which you want to create deployments. |
   | Subnet ID                  | Yes          | Enter the ID of the subnet that you use to deploy cluster nodes for data analysis. |
   | Security group ID          | Yes          | Enter the ID of the security group that you use to enable connectivity between cluster nodes within your own VPC and between CelerData's VPC and your own VPC over TLS. |
   | VPC endpoint ID            | No           | Enter the ID of the VPC endpoint that you create by using [PrivateLink](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-privatelink.html) to allow direct, secure connectivity between CelerData's VPC and your own VPC. The connectivity is for AWS VPCs in the same AWS region.<br/>**NOTE**<br/>If you do not specify a VPC endpoint ID, CelerData's VPC communicates with your own VPC over the Internet. |

   > **NOTE**
   >
   > The VPC, subnet, and security group must belong to the same AWS region that you select.

   **To obtain the subnet ID and the security group ID:**

   a. Sign in to the [AWS VPC console](https://ap-southeast-1.console.aws.amazon.com/vpc/).

   b. See the region picker in the upper-right corner of the page, and switch to your selected AWS region if needed.

   c. In the left-side navigation pane, choose **Virtual private cloud** > **Your VPCs**. On the **Your VPCs** page, find a VPC that meets [CelerData deployment requirements](../../aws/create_vpc.md).

    > **NOTE**
    >
    > If you do not have a qualified VPC in the AWS region that you have selected, create one in that AWS region by following the instructions provided in [Create a VPC and related resources](../../aws/create_vpc.md).

   d. In the left-side navigation pane, choose **Virtual private cloud** > **Subnets**. On the **Subnets** page, select the private subnet of the VPC that you have selected, copy the ID of the subnet, and save the ID to a location that you can access later.

   > **NOTICE**
   >
   > CelerData clusters must be deployed in private subnets. Do not select a public subnet in this step.

   e. Follow the instructions provided in [Create a security group](../../aws/create_security_group.md) to create a security group, copy the ID of the security group, and save the ID to a location that you can access later.

   Then, paste the subnet ID to the **Subnet ID** field and the security group ID to the **Security group ID** field.

On the **Network configurations** tab of the **AWS Cloud** page, the network configuration that you just created is shown.

When you create a cluster, you can select and reuse a network configuration that you have already created. CelerData allows you to reuse the same network configuration among multiple clusters, meaning that multiple clusters can share the same VPC, subnet, and security group.

## View a network configuration

Before you start a deployment, you can view all of the network configurations created within your CelerData cloud account and find the one that best suits your deployment requirements. Then, you can select that network configuration during the deployment process.

To view a network configuration, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Network configurations** tab of the **AWS Cloud** page, click the network configuration whose details you want to view.

4. On the page that appears, view the details about the network configuration.

## Delete a network configuration

Network configurations cannot be edited after they are created. If a network configuration has incorrect data or if you no longer need a network configuration, follow these steps to delete it:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **AWS**.

3. On the **Network configurations** tab of the **AWS Cloud** page, click the network configuration that you want to delete.

4. In the right-side pane that appears, click **Delete**.

5. In the dialog box that appears, enter **Delete** and click **Delete**.

   > **NOTE**
   >
   > A network configuration cannot be deleted if there are still CelerData clusters created based on it. Therefore, before you delete a network configuration, make sure all CelerData clusters that are created by using the network configuration are released.

## Usage notes

When you are creating a deployment, you cannot edit an existing network configuration that you select. If no existing network configurations can meet your deployment requirements, we recommend that you create a new network configuration.
