# Logical views

A view, or a logical view, is a saved query on one or more tables. Accessing a view yields the result set of the query. However, unlike a materialized view, a logical view only stores the definition of the query, not the results, as data remains stored in its base tables. Each time you access a view, the corresponding query is executed.

## Use cases

Views can serve a variety of purposes.

- **Masking base table schema and simplifying** **SQL** **statements**

  Views can conceal the schema of the base tables. Users only need to access the structure and content of the view, rather than that of the base tables, and thus the SQL statements they used are simplified.

- **Providing a secure access layer**

  Users can be granted access to views while being restricted from directly manipulating the base tables, and thus data security is enhanced.

- **Segregating relationships among tables**

  Views can join multiple tables. When business scenarios require adjustments to the base table structure, users can modify the definition of the view instead of changing the query statement.

- **Reusing** **SQL** **statements**

  Commonly used query statements can be encapsulated within views, simplifying subsequent queries and avoiding the repetition of SQL statements.

- **Simplifying** **query** **operations**

  Views can conceal complex joins or conditions across base tables. Users need only consider the definition and hierarchy of the view, making complex queries easier to understand.

- **Normalizing data modeling**

  Views can normalize relationships between tables, establishing standardized data access within an enterprise.

- **Integrating data sources**

  Data originating from various systems can be integrated into a single logical view and provided to the application layer.

## Create a view

### Before you begin

The following examples involve two base tables:

- The table `goods` records the item ID `item_id1`, the item name `item_name`, and the item price `price`.
- The table `order_list` records the order ID `order_id`, client ID `client_id`, item ID `item_id2`, and order date `order_date`.

The column `goods.item_id1` is equivalent to the column `order_list.item_id2`.

Execute the following statements to create the tables and insert data into them:

```SQL
CREATE TABLE goods(
    item_id1          INT,
    item_name         STRING,
    price             FLOAT
) 
DISTRIBUTED BY HASH(item_id1);

INSERT INTO goods
VALUES
    (1001,"apple",6.5),
    (1002,"pear",8.0),
    (1003,"potato",2.2);

CREATE TABLE order_list(
    order_id          INT,
    client_id         INT,
    item_id2          INT,
    order_date        DATE
) 
DISTRIBUTED BY HASH(order_id);
INSERT INTO order_list
VALUES
    (10001,101,1001,"2022-03-13"),
    (10001,101,1002,"2022-03-13"),
    (10002,103,1002,"2022-03-13"),
    (10002,103,1003,"2022-03-14"),
    (10003,102,1003,"2022-03-14"),
    (10003,102,1001,"2022-03-14");
```

The scenario in the following example demands frequent calculations of the total of each order. It requires frequent joins of the two base tables and intensive usage of the aggregate function `sum()`.

The query statement is as follows:

```SQL
SELECT
    order_id,
    sum(goods.price) AS total,
    order_date
FROM order_list INNER JOIN goods ON goods.item_id1 = order_list.item_id2
GROUP BY 
    order_id, 
    order_date;
```

### Create the view based on the query

You can create a view based on a specific query statement using [CREATE VIEW](../sql-reference/sql-statements/data-definition/CREATE_VIEW.md).

Based on the table `goods`, `order_list`, and the query statement mentioned above, the following example creates the view `order_view` to analyze the total of each order.

```SQL
CREATE VIEW order_view
AS SELECT
    order_id,
    sum(goods.price) AS total,
    order_date
FROM order_list INNER JOIN goods ON goods.item_id1 = order_list.item_id2
GROUP BY 
    order_id, 
    order_date;
```

## Query a view

You can query a view as if it were a regular table. Each time you query a view, the definition of the view is executed.

- Perform a simple query against the view:
  - ```SQL
    SELECT * FROM order_view;
    ```
- Perform a complex query against the view:
  - ```SQL
    SELECT * FROM order_view
    WHERE order_date = "2022-03-14";
    ```

## Manage a view

### Show the definition of a view

You can view the definition of a view using [SHOW CREATE VIEW](../sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW.md).

```SQL
SHOW CREATE VIEW order_view;
```

### Alter view definition

You can alter the definition of a view using [ALTER VIEW](../sql-reference/sql-statements/data-definition/ALTER_VIEW.md).

```SQL
ALTER VIEW order_view
AS SELECT
    order_id,
    sum(goods.price) AS total
FROM order_list INNER JOIN goods ON goods.item_id1 = order_list.item_id2
GROUP BY order_id;
```

### Drop a view

You can drop a view using [DROP VIEW](../sql-reference/sql-statements/data-definition/DROP_VIEW.md).

```SQL
DROP VIEW order_view;
```
