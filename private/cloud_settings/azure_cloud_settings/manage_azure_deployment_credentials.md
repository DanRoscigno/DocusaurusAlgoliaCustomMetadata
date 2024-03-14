# Manage deployment credentials for Azure

A deployment credential for Azure in CelerData includes a service principal and an SSH key pair. The service principal allows CelerData to launch the necessary resources required for your deployment and follow-up scaling, while the SSH key pair provides CelerData the necessary access to deploy services on your Azure virtual network.

CelerData automatically generates a deployment credential upon each successful cluster deployment on Azure. You can manage these deployment credentials for Azure, including viewing and deleting a deployment credential.

> **NOTE**
>
> CelerData does not support creating deployment credentials by hand before deployment.

## View a deployment credential

Before you start a deployment, you can view all of the deployment credentials created within your CelerData cloud account and find the one that best suits your deployment requirements. Then, you can select that deployment credential during the deployment process.

To view a deployment credential, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).
2. In the left-side navigation pane, choose **Cloud settings** > **Azure**.
3. On the **Deployment credentials** tab of the Azure Cloud page, click the deployment credential whose details you want to view.
4. On the right-side pane that appears, view the details about the deployment credential.

## Delete a deployment credential

Deployment credentials cannot be edited after they are created. If a deployment credential has incorrect data or if you no longer need a deployment credential, follow these steps to delete it:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).
2. In the left-side navigation pane, choose **Cloud settings** > **Azure**.
3. On the **Deployment credentials** tab of the Azure Cloud page, click the deployment credential that you want to delete.
4. In the right-side pane that appears, click **Delete**.
5. In the dialog box that appears, enter **Delete** and click **Delete**.

> **NOTE**
>
> - The deletion of a deployment credential is accompanied by the deletion of the Azure resources referenced in the deployment credential within CelerData, and the deleted deployment credential can no longer be referenced by CelerData. However, the other Azure resources that you create within your storage account will not be deleted, and you need to delete them on your own if you no longer need them.
> - A deployment credential cannot be deleted if there are still CelerData clusters created based on it. Therefore, before you delete a deployment credential, make sure all CelerData clusters that are created by using the deployment credential are released.

## Rotate secret value

Each deployment credential is associated with a specific App registration, and the Client secret value of each registered application has a fixed lifecycle in Azure.

Before you use an existing deployment credential for a new cluster deployment, you must check that the Client secret value of the application referenced in the deployment credential remains valid.

For an existing deployment credential that you want to use for new cluster deployments, we recommend that you update the Client secret value of the application referenced in the deployment credential on a regular basis. Detailed steps are as follows:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. In the left-side navigation pane, choose **Cloud settings** > **Azure**.

3. On the **Deployment credentials** tab of the Azure Cloud page, click the deployment credential in which you want to update the Client secret value of the referenced application.

4. In the right-side pane that appears, check **Rotate secret value** in the **Client secret value** section.

5. In the dialog box that appears, enter a new client secret value and click **Update**.

> **NOTICE**
>
> The rotation works only in this deployment credential and will affect all CelerData clusters that are created by using this deployment credential. You can view these related CelerData clusters in the **Related cluster** section below.

## Usage notes

When you are creating a deployment, you cannot edit an existing deployment credential that you select. If no existing deployment credentials can meet your deployment requirements, we recommend that you create a new deployment credential.
