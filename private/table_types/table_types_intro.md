---
sidebar_position: 1
---

# Table Types

You must specify a table type and define one or more columns as a sort key at table creation. This way, when data is initially loaded into the table that you created, CelerData can sort, process, and store the data based on the sort key. This topic describes the table types that CelerData provides to meet your varying business requirements.

## Basic concepts

### Table types

CelerData provides four table types: Duplicate Key table, Aggregate table, Unique Key table, and Primary Key table. These four table types are well suited to a wide range of data analytics scenarios such as log analysis, data aggregation and analysis, and real-time data analysis.

### Sort keys

When data is loaded into a table of a certain type, data is sorted and stored according to one or more columns defined as the sort key when the table is created. The sort key usually consists of one or more columns that are frequently used as filter conditions in queries, thereby accelerating queries.

In a Duplicate Key table, the sort key specified by `DUPLICATE KEY` is used to sort data and is not assigned a UNIQUE constraint.
In an Aggregate table, the sort key specified by `AGGREGATE KEY` is used to sort data and is assigned a UNIQUE constraint.
In a Unique Key table, the sort key specified by `UNIQUE KEY` is used to sort data and is assigned a UNIQUE constraint.
In a Primary Key table, the primary key and sort key are decoupled. The primary key specified by `PRIMARY KEY` is assigned UNIQUE and NOT NULL constraints. The sort key specified by `ORDER BY` is used for sorting data.


## Precautions

- Sort key columns must be defined prior to the other columns in the statement for table creation.

- The order of sort key columns in the statement for table creation specifies the order of the conditions based on which the rows in the table are sorted.

- The length of the prefix index for a table is limited to 36 bytes. If the total length of the sort key columns exceeds 36 bytes, CelerData stores only the first few sort key columns within the length limit for the prefix index.

- If the data rows are loaded into a table that already contains rows with the same values in columns specified by `DUPLICATE KEY`, `AGGREGATE KEY`, `UNIQUE KEY` or `PRIMARY KEY`, CelerData processes and stores the records based on the table type:
  - Duplicate Key table

    CelerData loads each of the data rows as a separate row into the table. After the data load is complete, the table contains rows that have the same values in columns specified by `DUPLICATE KEY`, and the rows map the source records in a one-to-one relationship. You can recall all historical data that you loaded.

  - Aggregate table

    CelerData aggregates the data rows into one row and loads the aggregated one row into the table. After the loading is complete, the table does not contain rows that have the same values in columns specified by `AGGREGATE KEY`. You can recall the aggregation results of all historical data that you loaded. However, you cannot recall all historical data.

  - Unique Key table and Primary Key table

    CelerData replaces the previously loaded data row with the newly loaded row and retains only the most recently loaded row as a row in the table. After the loading is complete, the table does not contain rows that have the same values in columns specified by `UNIQUE KEY` or `PRIMARY KEY`. The Unique Key table and the Primary Key table can be considered a special Aggregate table in which the REPLACE aggregate function is specified for metric columns to return the most recent data row among a group of rows that have the same values in columns specified by `UNIQUE KEY` or `PRIMARY KEY`.
