# What is Software edition in CelerData Cloud?

CelerData Cloud Serverless offers multiple editions to choose from, ensuring that your usage fits your organization’s specific requirements. Each successive edition builds on the previous edition through the addition of edition-specific features and/or higher levels of service. As your organization’s needs change and grow, changing editions is easy.

When you create an account in CelerData Cloud Serverless, you need to define the software edition of the account.

## CelerData Cloud Serverless

Benefit for customer:

- Deploy data lake at minimum cost
- Store strictly in open standard formats.
- Easy to query directly to S3/Glue
- One-click migration from Trino/Presto/Athena

In CelerData Cloud Serverless edition, CelerData Cloud will not provide any self-managed storage volume for customers, which means data can not be stored persistently like a database in CelerData Cloud. So in this edition CelerData Cloud Serverless can be used as a query engine to conduct low-latency interactive analysis of your data lake; it can also help build a unified query layer and build some reports based on the data lake.

## CelerData Cloud Serverless Advanced

Benefit for customer:

- Everything included in Serverless edition
- Higher performance queries and customer-facing workloads
- Pipeline-free query acceleration using materialized views for simplified architecture/maintenance.
- Real-time low-latency workloads

In CelerData Cloud Serverless Advanced edition, CelerData Cloud will provide any self-managed storage volume for customers, which means data can be stored persistently like a database in CelerData Cloud. So, in this edition CelerData Cloud Serverless can not only be used as a query engine, but also as an analytical database. Import from your data lake into your CelerData Cloud to further accelerate analysis and support business scenarios with more stringent latency and concurrency requirements.

## Feature difference between two serverless editions

|                                                              | **CelerData Cloud Serverless** | **CelerData Cloud Serverless Advanced** |
| ------------------------------------------------------------ | ------------------------------ | --------------------------------------- |
| Integrate with external metastore (AWS Glue&Hive metastore ) and query data in external  data system(Apache Hudi/Apache Iceberg/Apache Hive/Deltalake) | ✓                              | ✓                                       |
| Table creation and data processing in external data system(Apache Hudi/Apache Iceberg/Apache Hive / Deltalake) | ✓                              | ✓                                       |
| Query load isolation based on multi-warehouse                | ✓                              | ✓                                       |
| Warehouse compute node scale in/out                          | ✓                              | ✓                                       |
| Warehouse auto-suspend                                       | ✓                              | ✓                                       |
| Use local-disk cache to speed up queries                     | ✓                              | ✓                                       |
| Table creation in CelerData Cloud self-managed storage volume |                                | ✓                                       |
| Batch data ingestion from cloud storage (customer managed AWS S3) into CelerData Cloud self-managed table |                                | ✓                                       |
| Integration with Confluent cloud and routinely import data into CelerData Cloud self-managed table |                                | ✓                                       |
| Use HTTP Streaming API to push data from local to into CelerData Cloud self-managed table |                                | ✓                                       |
| Incrementally import Parquet/ORC files from customer-managed AWS S3 bucket into CelerData Cloud self-managed table |                                | ✓                                       |
| Accelerate queries and build model by creating materialized views |                                | ✓                                       |
| Integration with BI Tools                                    | ✓                              | ✓                                       |
| Role-based access control                                    | ✓                              | ✓                                       |
| Audit log                                                    | ✓                              | ✓                                       |
| Private link                                                 | ✓                              | ✓                                       |
| IP Whitelist                                                 | ✓                              | ✓                                       |

<!-- ## Price&cost of two serverless edition

- **CelerData Cloud Serverless**
  - **Warehouse running CCU price:** 0.68$/CCU
- **CelerData Cloud Serverless Advanced**
  - **Warehouse running CCU price:** 1.58$/CCU
  - **Managed data price:** 0.025$/GB per month
-->