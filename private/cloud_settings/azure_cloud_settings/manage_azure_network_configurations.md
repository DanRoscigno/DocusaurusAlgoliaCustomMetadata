# Manage network configurations for Azure

A network configuration for Azure in CelerData defines the network infrastructure such as the virtual network and subnet that hosts your CelerData cluster deployment, as well as the security rules that control the incoming and outgoing traffic of the CelerData cluster.

CelerData automatically generates a network configuration upon each successful cluster deployment on Azure. You can manage these network configurations for Azure, including viewing and deleting a network configuration.

> **NOTE**
>
> CelerData does not support creating network configurations by hand before deployment.

## View a network configuration

Before you start a deployment, you can view all of the network configurations created within your CelerData cloud account and find the one that best suits your deployment requirements. Then, you can select that network configuration during the deployment process.

To view a network configuration, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).
2. In the left-side navigation pane, choose **Cloud settings** > **Azure**.
3. On the **Network configurations** tab of the Azure Cloud page, click the network configuration whose details you want to view.
4. On the page that appears, view the details about the network configuration.

## Delete a network configuration

Network configurations cannot be edited after they are created. If a network configuration has incorrect data or if you no longer need a network configuration, follow these steps to delete it:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).
2. In the left-side navigation pane, choose **Cloud settings** > **Azure**.
3. On the **Network configurations** tab of the Azure Cloud page, click the network configuration that you want to delete.
4. In the right-side pane that appears, click **Delete**.
5. In the dialog box that appears, enter **Delete** and click **Delete**.

> **NOTE**
>
> - The deletion of a network configuration is accompanied by the deletion of the Azure resources referenced in the network configuration within CelerData, and the deleted network configuration can no longer be referenced by CelerData. However, the other Azure resources that you create within your storage account will not be deleted, and you need to delete them on your own if you no longer need them.
> - A network configuration cannot be deleted if there are still CelerData clusters created based on it. Therefore, before you delete a network configuration, make sure all CelerData clusters that are created by using the network configuration are released.

## Usage notes

When you are creating a deployment, you cannot edit an existing network configuration that you select. If no existing network configurations can meet your deployment requirements, we recommend that you create a new network configuration.
