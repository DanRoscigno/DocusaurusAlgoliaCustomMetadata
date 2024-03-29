# Table types

You must specify a table type and define one or more columns as a sort key at table creation. This way, when data is initially loaded into the table that you created, CelerData can sort, process, and store the data based on the sort key. This topic describes the table types that CelerData provides to meet your varying business requirements.

## Basic concepts

### Table types

CelerData provides four table types: Duplicate Key table, Aggregate table, Unique Key table, and Primary Key table. These four table types are well suited to a wide range of data analytics scenarios such as log analysis, data aggregation and analysis, and real-time data analysis.

### Sort keys

When you create a table, you can specify one or more columns based on which CelerData sorts, processes, and stores the data loaded in to that table. The one or more columns that you specified comprise the sort key. These columns are referred to as sort key columns. The sort key is usually created on dimension columns that are frequently used as filter conditions for queries, because this can accelerate queries. In the Duplicate Key table, the sort key is created on columns that are used to sort data, and is defined by using the `DUPLICATE KEY` keyword. In the Aggregate table, the sort key is created on columns that are used to aggregate data, and is defined by using the `AGGREGATE KEY` keyword. In the Unique Key table or Primary Key table, the sort key is created on columns on which unique constraints are enforced, and is defined by using the `PRIMARY KEY` or `UNIQUE KEY` keyword.

Compared with traditional primary keys, sort keys in CelerData have the following characteristics:

- Sort keys are usually created on dimension columns that are frequently used as filter conditions for queries.

- In the Duplicate Key table, sort keys do not need to be created on columns on which unique constraints are enforced. In the Aggregate table, Unique Key table, and Primary Key table, however, sort keys must be created on columns on which unique constraints are enforced.

- CelerData tables use clustered storage. This means that the values in each column of a table are stored in sorted order based on the sort key that you specified for the table.

- Prefix indexes can be generated based on sort keys.

## Precautions

- Sort key columns must be defined prior to the other columns in the statement for table creation.

- The order of sort key columns in the statement for table creation specifies the order of the conditions based on which the rows in the table are sorted.

- The length of the prefix index for a table is limited to 36 bytes. If the total length of the sort key columns exceeds 36 bytes, CelerData stores only the first few sort key columns within the length limit for the prefix index.

- If the records to be loaded into a table have the same primary key, CelerData processes and stores the records based on the table type of the table:
  - Duplicate Key table

    CelerData loads each of the records as a separate row into the table. After the data load is complete, the table contains rows that have the same primary key, and the rows map the source records in a one-to-one relationship. You can recall all historical data that you loaded.

  - Aggregate table

    CelerData aggregates the records into one record and loads the aggregated record as a row into the table. After the loading is complete, the table does not contain rows that have the same primary key. You can recall the aggregation results of all historical data that you loaded. However, you cannot recall all historical data.

  - Unique Key table and Primary Key table

    CelerData replaces each newly loaded record with the previously loaded record and retains only the most recently loaded record as a row in the table. After the loading is complete, the table does not contain rows that have the same primary key. The Unique Key table and the Primary Key table can be considered a special Aggregate table in which the REPLACE aggregate function is specified for metric columns to return the most recent record among a group of records that have the same primary key.
