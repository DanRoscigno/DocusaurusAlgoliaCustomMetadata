# Release a CelerData cluster

If you no longer need a CelerData cluster, you can release it to save costs.

Releasing a cluster means terminating all workloads and removing all data in the cluster. Billing from CelerData also stops.

To release a cluster, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. On the **Clusters** page that appears, click the cluster that you want to release.

3. In the upper-right corner of the cluster details page, click **Manage** and choose **Release cluster**.

4. In the message that appears, enter the name of the cluster as prompted and click **Release**.

   Take note of the following points:

   - For AWS, only the EC2 instances, placement groups, and Network Load Balancers that are created during the cluster deployment are released along with the cluster. The other resources that you created by hand, including the VPC, subnet, and S3 bucket, are not released, and you need to log in to the AWS Management Console and release these resources by hand if you no longer need them.
   - For Azure, only the VMs, disks, load balancers, and public IP addresses that are created during the cluster deployment are released along with the cluster. The other resources that you created by hand, including the resource group, storage account, container, managed identity, virtual network, subnet, security group, App registration, and SSH key pair, are not released, and you need to log in to the Microsoft Azure portal and release these resources by hand if you no longer need them.
