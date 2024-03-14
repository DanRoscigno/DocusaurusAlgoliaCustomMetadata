# Understand usage and billing

Each CelerData Cloud account has its own usage, which primarily comes in two parts:

- Warehouse usage
- Storage usage

Usage is billed once at the end of each month for each CelerData Cloud account. Then it will be converted into a price and reflected in the bill.

## Warehouse usage

Warehouse usage varies for each CelerData Cloud account depending on the following factors:

- The number of warehouses
- The runtime of each warehouse

<!--  CelerData Cloud currently provides two editions: CelerData Cloud Serverless and CelerData Cloud Serverless Advanced.

  - For the CelerData Cloud Serverless edition, the warehouse runtime is billed at USD 0.68/CCU.
  - For the CelerData Cloud Serverless Advanced edition, the warehouse runtime is billed at USD 1.58/CCU.
-->
- The size of each warehouse

  Warehouses of different sizes provide different computing capabilities and are billed at different prices.

The usage of a warehouse is equal to the total runtime of the warehouse multiplied by the price at which the warehouse is offered. For a specific CelerData Cloud account, its warehouse usage encompasses the usage of all warehouses within it.

## Storage usage

After you create self-managed tables in the internal catalog which is named `default_catalog` in your CelerData Cloud, these tables consume the storage provisioned to your CelerData Cloud account<!--, at a price of USD 0.025/GB per month -->.

## Account usage and organization billing

The users within a CelerData Cloud account can view the usage of resources within that account. If you have logged in by using the root account of your organization, you can also view the usage of each account within the organization.

At the end of each month, the usage of all accounts within the organization will be collected and billed to the organization, and then you can log in by using the root account to view and manage the final bill.
