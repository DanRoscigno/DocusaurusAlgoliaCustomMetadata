# Best practices of warehouses

With Multi-Warehouse, you can flexibly manage the compute resources in your CelerData Cloud account. By allocating different tasks to distinct warehouses, you can achieve physical isolation of computing resources. 

Multi-Warehouse's capabilities shine in scenarios like:

- **Isolation of query and write operation**

  Typically, there are two types of tasks running in CelerData Cloud: query and write operations. Both types of tasks consume resources such as disk I/O, bandwidth, CPU, memory, and more. These two task types contend for resources. For example, during periods of high query load, resource constraints in disk I/O can result in decreased write throughput. In cases of insufficient memory, it may even lead to import failures. To ensure that these two task types do not interfere with each other, you need hard isolation of compute resources between them.

- **Online-offline hybrid analysis**

  Multi-Warehouse offers superior resource isolation and data sharing capabilities for businesses combining online and offline operations. With unified data storage, this approach streamlines storage costs and simplifies data management.

- **Ad hoc query**

  You can flexibly scale up or down the warehouse for ad hoc query requests.

- **Offline tasks**

  In cases where an offline task is time-sensitive, Multi-Warehouse enables rapid resource allocation adjustments, ensuring urgent tasks are accomplished within time constraints.
