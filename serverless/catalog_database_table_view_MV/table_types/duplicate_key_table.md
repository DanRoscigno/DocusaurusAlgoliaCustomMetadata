# Duplicate Key table

The Duplicate Key table is the default table type at the creation of tables in CelerData.

When you create a table that uses the Duplicate Key table, you can define a sort key for that table. If the filter conditions for queries contain the sort key columns, CelerData can quickly filter the data of the table to accelerate the queries. The Duplicate Key table allows you to append new data to the table. However, it does not allow you to modify the existing data in the table.

## Scenarios

The Duplicate Key table is suitable for the following scenarios:

- Analyze raw data, such as raw logs and raw operation records.
- Query data by using various methods without the need to be limited to preaggregate methods.
- Load log data or time series data. New data is written in append-only mode, and existing data never changes.

## Create a table

Suppose that you want to analyze the event data over a specific time range. In this example, create a table named `detail` and define `event_time` and `event_type` as sort key columns.

The statement for creating the table is as follows:

```SQL
CREATE TABLE IF NOT EXISTS detail (
    event_time DATETIME NOT NULL COMMENT "datetime of event",
    event_type INT NOT NULL COMMENT "type of event",
    user_id INT COMMENT "id of user",
    device_code INT COMMENT "device code",
    channel INT COMMENT ""
)
DUPLICATE KEY(event_time, event_type)
DISTRIBUTED BY HASH(user_id) BUCKETS 8;
```

## Usage notes

- Take note of the following points about the sort key of a table:
  - You can use the `DUPLICATE KEY` keyword to explicitly define the columns that participate in the sort key.

    > Note: By default, if you do not define sort key columns, CelerData selects the first three columns as sort key columns.

  - In the Duplicate Key table, the sort key can be composed of some or all columns.  

- You can create indexes such as BITMAP indexes and Bloom Filter indexes at table creation.

- If two identical records are loaded, the Duplicate Key table considers the two records as one record instead of two.

## What to do next

After a table is created, you can use the loading method [Load from S3](../../loading/loading_from_s3.md) to load data into CelerData.

> Note: When you load data into a table that uses the Duplicate Key table, you can only append data to the table. You cannot modify the existing data in the table.
