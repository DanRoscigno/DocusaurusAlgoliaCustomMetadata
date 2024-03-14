# Duplicate Key table

The Duplicate Key table is the default table type in CelerData. If you did not specify a type when you create a table, a Duplicate Key table is created by default.

When you create a Duplicate Key table, you can define a sort key for that table. If the filter conditions contain the sort key columns, CelerData can quickly filter data from the table to accelerate queries. A Duplicate Key table allows you to append new data to it, but it does not allow you to modify the existing data in it.

## Scenarios

The Duplicate Key table is suitable for the following scenarios:

- Analyze raw data, such as raw logs and raw operation records.
- Query data by using a variety of methods without being limited by the pre-aggregation method.
- Load log data or time-series data. New data is written in append-only mode, and existing data is not updated.

## Create a table

Suppose that you want to analyze the event data over a specific time range. In this example, create a table named `detail` and define `event_time` and `event_type` as sort key columns.

```SQL
CREATE TABLE IF NOT EXISTS detail (
    event_time DATETIME NOT NULL COMMENT "datetime of event",
    event_type INT NOT NULL COMMENT "type of event",
    user_id INT COMMENT "id of user",
    device_code INT COMMENT "device code",
    channel INT COMMENT ""
)
DUPLICATE KEY(event_time, event_type)
DISTRIBUTED BY HASH(user_id);
```

> **NOTICE**
>
> - When you create a table, you can specify the bucketing column by using the `DISTRIBUTED BY HASH` clause.<!--For detailed information, see [bucketing](../Data_distribution.md#design-partitioning-and-bucketing-rules).-->
> - CelerData can automatically set the number of buckets (BUCKETS) when you create a table or add a partition.  You no longer need to manually set the number of buckets. <!--For detailed information, see [determine the number of buckets](../Data_distribution.md#determine-the-number-of-buckets).-->

## Usage notes

- Take note of the following points about the sort key of a table:
  - You can use the `DUPLICATE KEY` keyword to explicitly define the columns that comprise the sort key.

    > **NOTE**
    >
    > By default, if you do not explicitly specify sort key columns, CelerData uses the **first three** columns as sort key columns.

  - In the Duplicate Key table, the sort key can consist of some or all of the dimension columns.

- You can create indexes such as BITMAP indexes and Bloomfilter indexes at table creation.

- If two identical records are loaded, the Duplicate Key table retains them as two records, rather than one.

## What to do next

You can load data into a Duplicate Key table. For more information, see [Data loading](../loading/StreamLoad.md).
> **NOTICE**
>
> When you load data into a Duplicate Key table, you can only append data to the table. You cannot modify the existing data in the table.
