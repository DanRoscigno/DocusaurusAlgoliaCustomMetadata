---
sidebar_position: 20
---

# Privileges

Privileges granted to a user or role determine which operations the user or role can perform on certain objects. Privileges can be used to implement fine-grained access control to safeguard data security.

This topic describes privileges provided by CelerData on different objects and their meanings. Privileges are granted and revoked by using [GRANT](../../sql-reference/sql-statements/account-management/GRANT.md) and [REVOKE](../../sql-reference/sql-statements/account-management/REVOKE.md). The privileges that can be granted on an object are specific to the object type. For example, table privileges are different from database privileges.

## Privilege list

This section describes privileges that are available on different objects.

### ACCOUNT

| Privilege               | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| GRANT                   | Creates a user or role, alters a user or role, or grants privileges to a user or role. This privilege cannot be directly granted to users or roles. The `user_admin` role has this privilege. |
| CREATE EXTERNAL CATALOG | Creates an external catalog.                                 |
| REPOSITORY              | Creates, deletes, or views repositories.                     |
| OPERATE                 | Manages replicas, configuration items, variables, and transactions. |
| CREATE GLOBAL FUNCTION  | Creates a global UDF.                                        |

### USER

| Privilege   | Description                                    |
| ----------- | ---------------------------------------------- |
| IMPERSONATE | Allows user A to perform operations as user B. |

### GLOBAL FUNCTION (Global UDFs)

| Privilege | Description                                 |
| --------- | ------------------------------------------- |
| USAGE     | Uses a function in a query.                 |
| DROP      | Deletes a function.                         |
| ALL       | Has all the above privileges on a function. |

### CATALOG

| Object                     | Privilege       | Description                                           |
| -------------------------- | --------------- | ----------------------------------------------------- |
| CATALOG (internal catalog) | USAGE           | Uses the internal catalog (`default_catalog`).          |
| CATALOG (internal catalog) | CREATE DATABASE | Creates databases in the internal catalog.            |
| CATALOG (internal catalog) | ALL             | Has all the above privileges on the internal catalog. |
| CATALOG (external catalog) | USAGE           | Uses an external catalog to view tables in it.        |
| CATALOG (external catalog) | DROP            | Deletes an external catalog.                          |
| CATALOG (external catalog) | ALL             | Has all the above privileges on the external catalog. |

> **NOTE**
>
> The internal catalog in your CelerData cluster can not be deleted.

### DATABASE

| Privilege                | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| ALTER                    | Sets properties for a database, rename a database, or sets quotas for a database. |
| DROP                     | Deletes a database.                                          |
| CREATE TABLE             | Creates tables in a database.                                |
| CREATE VIEW              | Creates a view.                                              |
| CREATE FUNCTION          | Creates a function.                                          |
| CREATE MATERIALIZED VIEW | Creates a materialized view.                                 |
| ALL                      | Has all the above privileges on a database.                  |

### TABLE

| Privilege | Description                                                  |
| --------- | ------------------------------------------------------------ |
| ALTER     | Modifies a table or refreshes metadata in an external table. |
| DROP      | Drops a table.                                               |
| SELECT    | Queries data in a table.                                     |
| INSERT    | Inserts data into a table.                                   |
| UPDATE    | Updates data in a table.                                     |
| EXPORT    | Exports data from a table.                                   |
| DELETE    | Deletes data from a table based on the specified condition or deletes all the data from a table. |
| ALL       | Has all the above privileges on a table.                     |

### VIEW

| Privilege | Description                             |
| --------- | --------------------------------------- |
| SELECT    | Queries data in a view.                 |
| ALTER     | Modifies the definition of a view.      |
| DROP      | Deletes a logical view.                 |
| ALL       | Has all the above privileges on a view. |

### MATERIALIZED VIEW

| Privilege | Description                                          |
| --------- | ---------------------------------------------------- |
| SELECT    | Queries a materialized view to accelerate queries.   |
| ALTER     | Changes a materialized view.                         |
| REFRESH   | Refreshes a materialized view.                       |
| DROP      | Deletes a materialized view.                         |
| ALL       | Has all the above privileges on a materialized view. |

### FUNCTION (Database-level UDFs)

| USAGE | Uses a function.                            |
| ----- | ------------------------------------------- |
| DROP  | Deletes a function.                         |
| ALL   | Has all the above privileges on a function. |
