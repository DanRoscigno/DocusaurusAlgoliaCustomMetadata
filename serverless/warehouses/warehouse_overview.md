# Overview of warehouse

A warehouse in CelerData Cloud is a group of compute nodes that can provide with you the required compute resources (CPU/Memory/Temporary storage) to perform query, ingestion, and data processing tasks. Each warehouse serves as an individual compute resource pool, which allows you to isolate compute resources physically.

In CelerData Cloud, data is shared among multiple warehouses, yet distinct warehouses maintain the physical isolation of compute and memory resources. Therefore, you can create multiple warehouses tailored to different business needs, such as ad hoc query warehouse, ETL warehouse, and compaction warehouse, and effortlessly route specific tasks to the respective warehouse.

## Benefits

Multi-Warehouse can bring the following benefits:

- **Resource isolation**

  Multi-Warehouse allows for finer-grained scheduling of compute resources. You can allocate different tasks to distinct warehouses, ensuring the physical isolation of compute resources.
  
- **Data sharing**

  Multiple warehouses can share a common data storage, empowering authorized users to access data through any warehouse seamlessly.
  
- **Vertical scalability**

  Multi-Warehouse allows you to group compute resources as needed, bringing higher flexibility to cope with fluctuations in load. You can dynamically start or stop a warehouse, or scale it up or down.
  
- **Horizontal scalability**

  You can easily create a new warehouse to cater to the demand of new business scenarios, without impacting the existing warehouses. Tasks on the existing warehouses will not be disrupted because no data redistribution is needed.

## Use cases

Multi-Warehouse finds applications in various scenarios:

- **Diverse business workloads**

  You can assign different types of workloads to distinct warehouses to isolate the compute resources physically. For example, you can allocate one warehouse to perform query analytics and another for ETL processing, optimizing resource utilization for each.
  
- **Centralized maintenance**

  Database administrators can maintain a common large account and create separate warehouses for each business unit.
  
- **Background task separation**

  You can isolate and execute background tasks, such as compaction, within dedicated warehouses to prevent disruption to regular operations. Furthermore, you can adjust warehouse resources as needed to strike a balance between cost and performance.

## Usage notes

Some of the system background tasks are performed only within the default warehouse, which is the built-in warehouse when you first create a CelerData Cloud account. Therefore, suspending the default warehouse or removing all compute nodes from it will cause these tasks to fail. These background tasks are as follows:

- Compaction
- SUBMIT TASK
- Pipe
- Statistics collection
- Dynamic partition creation
- Schema Change
- AutoVacuum (Garbage Collection after Compaction)
- Garbage Collection
- Statistics report for SHOW DATA
- Asynchronous materialized view refresh
- ANALYZE TABLE
