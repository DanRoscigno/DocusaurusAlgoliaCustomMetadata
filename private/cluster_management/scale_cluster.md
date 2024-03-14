# Scale a CelerData cluster

CelerData supports scaling clusters with no downtime. As your workloads grow or drop, you can [view the details about a cluster](../cluster_management/view_cluster.md) and then decide whether to scale your cluster to maintain the necessary performance levels at minimum costs.

The scaling operations supported vary depending whether your cluster is a classic or elastic cluster:

- For a classic cluster, CelerData supports vertical scaling, horizontal scaling, and storage scaling.

- For an elastic cluster, CelerData supports only horizontal scaling.

> **NOTE**
>
> CelerData supports deploying classic clusters on both AWS Cloud and Azure Cloud, but it supports deploying elastic clusters only on AWS Cloud.

## Introduction to scaling operations

### Vertical scaling

You can vertically scale your cluster up or down by upgrading or downgrading the instance type of cluster nodes to increase or decrease computing power and storage capacity. Consider a scale-up in the following scenarios:

- Your workloads are hitting CPU or I/O limits, which increase query latency and decrease concurrency, but storage capacity is sufficient.

- You need to quickly react to fix performance issues that cannot be resolved by using classic optimization techniques.

### Horizontal scaling

You can horizontally scale your cluster out or in by adding or removing cluster nodes to increase or decrease computing power and storage capacity. Consider a scale-out in the following scenarios:

- Your workloads are hitting CPU, I/O, and storage limits, which increase query latency and decrease concurrency, but storage capacity is sufficient.

- You have maxed out your performance requirements, even in the highest performance tier of your service.

- Your data cannot fit into the current number of nodes.

### Storage scaling

You can scale the storage of your cluster up or down to suit the needs of spikes and dips in cluster activity as your data volume changes.

## Scale a classic cluster

For a classic cluster, CelerData supports vertical scaling, horizontal scaling, and storage scaling.

### Vertical scaling

Take note of the following points:

- If your cluster uses EBS volumes as storage, the cluster nodes will restart on a rolling basis during a scale-up and you may experience query or data loading failures. Therefore, we recommend that you perform a scale-up during off-peak hours.
- If your cluster uses instance store volumes as storage, the amount of time taken by a scale-up varies depending on the volume of data in your cluster.

Follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. On the **Clusters** page, click the cluster that you want to scale.

3. On the cluster details page, click **Manage** and choose **Edit cluster**.

   > **NOTE**
   >
   > - You can only scale clusters that are in the **Running** state. If a cluster is in not in the **Running** state, the **Edit cluster** menu item is disabled.
   >
   > - If you are scaling a cluster created in your Free Developer Tier, a dialog box is displayed, prompting you to unlock the cluster before you can continue. For more information, see [Use Free Developer Tier](../get_started/free_developer_tier.md).

4. On the page that appears, select the type of node that you want to scale from the **Node type** drop-down list, select **Scale up/down** from the **Operation type** drop-down list, select the instance type that you want to scale to, and then click **Subscribe**.

5. In the message that appears, confirm your scaling settings and click **Subscribe**.

   The cluster enters the **Updating** state.

   CelerData requires some time to launch instances of the new instance type and migrates your data and workloads from the original instances to the new instances, during which charges to you are still calculated based on the original instance type.

   When the scaling operation is complete, the cluster returns to the **Running** state.

### Horizontal scaling

For a scale-out or scale-in, you can set the number of FE nodes only to **1**, **3**, or **5**, but we recommend that the number of BE nodes be greater than or equal to **3** for production environments.

Follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. On the **Clusters** page, click the cluster that you want to scale.

3. On the cluster details page, click **Manage** and choose **Edit cluster**.

   > **NOTE**
   >
   > - You can only scale clusters that are in the **Running** state. If a cluster is in not in the **Running** state, the **Edit cluster** menu item is disabled.
   >
   > - If you are scaling a cluster created in your Free Developer Tier, a dialog box is displayed, prompting you to unlock the cluster before you can continue. For more information, see [Use Free Developer Tier](../get_started/free_developer_tier.md).

4. On the page that appears, select the type of node that you want to scale from the **Node type** drop-down list, select **Scale in/out** from the **Operation type** drop-down list, specify the number of nodes that you want to have, and then click **Subscribe**.

5. In the message that appears, confirm your scaling settings and click **Subscribe**.

   The cluster enters the **Updating** state.

   CelerData requires some time to release or launch instances of the current instance type, during which charges to you are still calculated based on the original number of nodes.

   When the scaling operation is complete, the cluster returns to the **Running** state.

### Storage scaling

Follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. On the **Clusters** page, click the cluster that you want to scale.

3. On the cluster details page, click **Manage** and choose **Edit cluster**.

   > **NOTE**
   >
   > - You can only scale clusters that are in the **Running** state. If a cluster is in not in the **Running** state, the **Edit cluster** menu item is disabled.
   >
   > - If you are scaling a cluster created in your Free Developer Tier, a dialog box is displayed, prompting you to unlock the cluster before you can continue. For more information, see [Use Free Developer Tier](../get_started/free_developer_tier.md).

4. On the page that appears, select the type of node for which you want to change the storage size from the **Node type** drop-down list, select **Edit storage size** from the **Operation type** drop-down list, specify a new storage size, and then click **Subscribe**.

   > **NOTE**
   >
   > - CelerData supports changing the storage size only for BE nodes.
   >
   > - The minimum storage size per BE node is 50 GB.

5. In the message that appears, confirm your scaling settings and click **Subscribe**.

   The cluster enters the **Updating** state.

   CelerData requires some time to release or launch storage resources, during which charges to you are still calculated based on the original storage size.

   When the scaling operation is complete, the cluster returns to the **Running** state.

## Scale an elastic cluster

For an elastic cluster, CelerData supports the horizontal scaling of coordinator nodes in the cluster and the horizontal scaling of compute nodes for a specific warehouse.

### Scale coordinator nodes

To horizontally scale the coordinator nodes of your cluster in or out, follow these steps:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).

2. On the **Clusters** page, click the cluster that you want to scale.

3. On the cluster details page, click **Manage** and choose **Scale coordinator node**.

   > **NOTE**
   >
   > - You can only scale clusters that are in the **Running** state. If a cluster is in not in the **Running** state, the **Scale coordinator node** menu item is disabled.
   >
   > - If you are scaling a cluster created in your Free Developer Tier, a dialog box is displayed, prompting you to unlock the cluster before you can continue. For more information, see [Use Free Developer Tier](../get_started/free_developer_tier.md).

4. In the **Edit your cluster size** dialog box, select a new coordinator node count and click **Subscribe**.

   CelerData immediately starts scaling the cluster. This may take a few minutes, during which the cluster stays in the **Scaling** state. During that period of time, you cannot perform operations such as scaling the cluster, adding warehouses to the cluster, or suspending the cluster. When scaling the cluster is complete, the cluster returns to the **Running** state.

### Scale compute nodes

For information about how to horizontally scale the compute nodes of a specific warehouse in your cluster in or out, see [Resize a warehouse](../warehouse/manage_warehouses.md#resize-a-warehouse).
