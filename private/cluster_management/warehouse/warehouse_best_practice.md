# Best practices of warehouses

With Multi-warehouse, you can flexibly manage the compute resources in your elastic CelerData cluster. By allocating different tasks to distinct warehouses, you can achieve physical isolation of computing resources.

Multi-warehouse's capabilities shine in scenarios like:

- **Isolation of query and write operation**

  Typically, there are two types of tasks running in a CelerData cluster: query and write operations. Both types of tasks consume resources such as disk I/O, bandwidth, CPU, and memory. These two task types contend for resources. For example, during query spikes, resource constraints in disk I/O can result in decreased write throughput. In cases of insufficient memory, it may even lead to ingestion failures. To ensure that these two task types do not interfere with each other, you need hard isolation of compute resources between them.

- **Online-offline hybrid analysis**

  Multi-warehouse offers superior resource isolation and data sharing capabilities for businesses combining online and offline operations. With unified data storage, this approach streamlines storage costs and simplifies data management.

- **Ad hoc query**

  You can flexibly scale in or out the warehouse for ad hoc query requests.

- **Offline tasks**

  In cases where an offline task is time-sensitive, Multi-warehouse enables rapid resource allocation adjustments, ensuring urgent tasks are accomplished within time constraints.
