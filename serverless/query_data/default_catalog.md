# Default catalog

This topic describes what the default catalog is, and how to query the internal data of CelerData by using the default catalog.

CelerData provides an internal catalog to manage the internal data of CelerData. Each CelerData Cloud account has only one internal catalog named `default_catalog`. Currently, you cannot modify the name of the internal catalog or create a new internal catalog.

## Query internal data

1. Log in to your CelerData Cloud account.

2. (Optional) Use [SHOW DATABASES](../sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md) to view databases:

   ```SQL
   SHOW DATABASES;
   ```

   Or

   ```SQL
   SHOW DATABASES FROM <catalog_name>;
   ```

3. (Optional) Use [SET CATALOG](../sql-reference/sql-statements/data-definition/SET_CATALOG.md) to switch to the destination catalog in the current session:

   ```SQL
   SET CATALOG <catalog_name>;
   ```

   Then, use [USE](../sql-reference/sql-statements/data-definition/USE.md) to specify the active database in the current session:

   ```SQL
   USE <db_name>;
   ```

   Or, you can use [USE](../sql-reference/sql-statements/data-definition/USE.md) to directly go to the active database in the destination catalog:

   ```SQL
   USE <catalog_name>.<db_name>;
   ```

4. Use [SELECT](../sql-reference/sql-statements/data-manipulation/SELECT.md) to query internal data:

   ```SQL
   SELECT * FROM <table_name>;
   ```

   If you do not specify the active database in the preceding steps, you can directly specify it in a select query:

   ```SQL
   SELECT * FROM <db_name>.<table_name>;
   ```

   Or

   ```SQL
   SELECT * FROM default_catalog.<db_name>.<table_name>;
   ```

## Examples

To query data in `olap_db.olap_table`, perform the following steps:

1. Use `olap_db` as the current database.

      ```SQL
      USE olap_db;
      ```

2. Query data from `olap_table`.

      ```SQL
      SELECT * FROM olap_table limit 1;
      ```
