---
sidebar_position: 1
---

# Overview of warehouses

A warehouse in an elastic CelerData cluster is a group of compute nodes that can provide with you the required compute resources such as CPU, memory, and temporary storage to perform query, ingestion, and data processing tasks. Each warehouse serves as an individual compute resource pool, which allows you to isolate compute resources physically.

In an elastic CelerData cluster, data is shared among multiple warehouses, yet distinct warehouses maintain the physical isolation of compute and memory resources. Therefore, you can create multiple warehouses tailored to different business needs, such as ad hoc query, ETL, and compaction, and effortlessly route specific tasks to the respective warehouse.

## Benefits

Multi-warehouse can bring the following benefits:

- **Resource isolation**

  Multi-warehouse allows for finer-grained scheduling of compute resources. You can allocate different tasks to distinct warehouses, ensuring the physical isolation of compute resources.

- **Data sharing**

  Multiple warehouses can share a common data storage, empowering authorized users to access data through any warehouse seamlessly.

- **Horizontal scalability**

  You can easily add compute nodes to a warehouse to cater to the increasing demand for compute resources. Tasks running on the existing warehouses will not be disrupted during the scaling.

## Use cases

Multi-warehouse finds applications in the following scenarios:

- **Diverse business workloads**

  You can assign different types of workloads to distinct warehouses to isolate the compute resources physically. For example, you can allocate one warehouse to perform query analytics and another for ETL processing, optimizing resource utilization for each.

- **Background task separation**

  You can isolate and execute background tasks, such as compaction, within dedicated warehouses to prevent disruption to regular operations. Furthermore, you can adjust warehouse resources as needed to strike a balance between cost and performance.

## Usage notes

Each elastic CelerData cluster is provided with a built-in warehouse named `default_warehouse`, which is automatically created when you create the cluster. If no warehouse is explicitly specified, all DML workloads will be routed to the default warehouse. It has no access control and can be used by all users within the cluster. The default warehouse cannot be deleted or suspended separately from the coordinator node. It will be suspended only when the cluster is suspended.

Some of the system background tasks are performed only within the default warehouse. These background tasks are as follows:

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
