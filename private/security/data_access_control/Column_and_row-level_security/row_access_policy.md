# Row access policies

This topic describes what a row access policy is, how to create and apply a row access policy, two use cases in typical scenarios, how to manage row access policies, and the limits when you work with a row access policy.

For the overview of column and row-level security, see [Understand column and row-level security](./overview_of_column_row_security.md).

For the privileges required for each SQL operation, see [Manage privileges for policies](./manage_priv.md).

## Definition

Row-level security allows you to apply a row access policy to a table or view to determine which rows are visible in the query result.

You can include conditions and functions in the policy expression of a row access policy to transform the data at query runtime when the conditions are met.

A row access policy can be added to a table or view either when the table is created or after the table is created.

## Create a row access policy

A policy consists of column name, column type, filter conditions, and functions.

**Syntax**:

```sql
CREATE ROW ACCESS POLICY [ IF NOT EXISTS ] <name> 
AS ( <arg_name> <arg_type> [ , ... ] ) 
RETURNS boolean ->
<expression_on_arg_name>
[ COMMENT = '<string_literal>' ]
```

| **Parameter**            | **Required** | **Description**                                              |
| ------------------------ | ------------ | ------------------------------------------------------------ |
| `name`                   | Yes          | The name of the policy, which must be unique across the database. Policies can be referenced across databases and catalogs in the format `catalog.db.policy`. If no catalog is specified, the current catalog is used. |
| `arg_name`               | Yes          | The name of the column to mask.                              |
| `arg_type`               | Yes          | The data type of the column to mask.                         |
| RETURNS                  | Yes          | The return data type must be BOOLEAN.                        |
| `expression_on_arg_name` | Yes          | The expression that is used as the filter condition, which can be any conditional function, such as if()，case when()，and ifnull(). |
| `COMMENT`                | No           | The description of the policy.                               |

**Examples**:

Example 1: Create a row access policy, which only allows `sales_asia` to see data in the `asia` region, `sales_uk` to see data in the `uk` region, and `ACCOUNTADMIN` to see all the data.

```sql
CREATE ROW ACCESS POLICY region_data AS
(region varchar) RETURNS boolean
->
   CASE WHEN current_role()='sales_asia' and region='asia' THEN true
   WHEN current_role()='sales_uk' and region='uk' THEN true
   WHEN current_role()='ACCOUNTADMIN' THEN true
   ELSE false
   END
 COMMENT "for test";
```

Example 2: Nest a subquery in a row access policy, which allows the current role to see only data in its own region.

```sql
CREATE ROW ACCESS POLICY rap_sales_manager_regions_2 AS
(sales_region varchar) RETURNS boolean
 ->
 CASE WHEN EXISTS (
            select * from map
              where 'role' = current_role()
                and 'sales_region' = region
          ) THEN true 
  ELSE false
  END;
```

## Apply a row access policy

After a policy is created, you can apply it to an existing table.

**Syntax**:

```sql
ALTER TABLE <tbl_name> ADD ROW ACCESS POLICY <name> ON (<cond_col1>[, <cond_col2>, ...])
```

**Examples**:

```sql
ALTER TABLE `sales_info` ADD ROW ACCESS POLICY region_data ON (region);
```

You can also apply an existing row access policy to a table using the WITH clause when you create a table.  

**Syntax**:

```sql
CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name
(column_definition1[, column_definition2, ...]
[, index_definition1[, index_definition2, ...]])
[ENGINE = [olap|mysql|elasticsearch|hive|iceberg|hudi|jdbc]]
[key_desc]
[COMMENT "table comment"]
[partition_desc]
distribution_desc
WITH ROW ACCESS POLICY <name> ON (<cond_col1 [, <cond_col2> , ...])  
[WITH ROW ACCESS POLICY <name> ON (<cond_col12> [, <cond_col1> , ...]) ...] 
[rollup_index]
[PROPERTIES ("key"="value", ...)]
[BROKER PROPERTIES ("key"="value", ...)]
```

**Examples**:

```sql
CREATE TABLE `sales_info` (
    name varchar(50),
    phone string,
    region varchar(50),
    sales INT)
 WITH ROW ACCESS POLICY region_data ON (region);
```

## Use case - Filter data by region

Users have sales data in three regions and want sales staff to view only data in their own region.

After connecting to your cluster as user `admin`, you have the privileges associated with the default roles `user_admin` and `db_admin`. For data security concerns, you can create another user and assign only the required privileges to this user to test row access policies. This use case creates the following items:

- Database `db_test`
- Table `sales_info`
- Two roles that will have access to data in different regions
- User `row_admin` and role `row_admin_role` with row access policy-related privileges.
- Row access policy `region_data` for the table

1. Create a database `db_test` and switch to this database.

   ```sql
   CREATE DATABASE db_test;
   USE db_test;
   ```

2. Create a user information table `sales_info` and insert data into this table.

   ```sql
   CREATE TABLE `sales_info` (
       name varchar(50),
       phone string,
       region varchar(50),
       sales INT);

   INSERT INTO `sales_info` VALUES
   ('lily','886410','asia',11),
   ('richard','654321','uk',16),
   ('amber','789165','africa',17);
   ```

3. Create two different roles and grant the roles the privilege to query data from the table.

   ```sql
   CREATE ROLE `sales_asia`,`sales_uk`;

   GRANT SELECT ON TABLE `sales_info` TO ROLE `sales_asia`;
   GRANT SELECT ON TABLE `sales_info` TO ROLE `sales_uk`;
   ```

4. Create a user `row_admin`, create a role `row_admin_role`, grant the required privileges to this role, and assign roles to `row_admin`. 

   ```sql
   CREATE USER `row_admin`;
   CREATE ROLE `row_admin_role`; 

   -- Grant the privileges to create row access policies in the database.
   GRANT CREATE ROW ACCESS POLICY ON DATABASE db_test TO ROLE row_admin_role;

   -- Grant the privileges to apply all row access policies in the database.
   GRANT ALTER ON TABLE sales_info TO ROLE row_admin_role;
   GRANT APPLY ON ALL ROW ACCESS POLICIES to ROLE row_admin_role;

   -- Assign the previous roles to the user.
   GRANT `row_admin_role`,`sales_asia`,`sales_uk` TO USER `row_admin`;

   -- Switch to user row_admin.
   EXECUTE AS `row_admin` WITH NO REVERT;

   -- Activate role masking_admin_role to perform masking policy-related operations.
   SET ROLE `row_admin_role`;
   ```

5. Create a row access policy which uses CASE WHEN as the filter condition. This policy allows different roles to view only data of their own region.

   ```sql
   CREATE ROW ACCESS POLICY region_data AS
   (region varchar(50)) RETURNS boolean ->
   CASE WHEN current_role() ='sales_asia' and region = 'asia' THEN true
        WHEN current_role() ='sales_uk' and region = 'uk' THEN true
    ELSE false
    END;
    ```

6. Apply the policy to the table.

   ```sql
   ALTER TABLE `sales_info` ADD ROW ACCESS POLICY region_data ON (region);
   ```

7. Use roles `sales_asia` and `sales_uk` to query data. The results show that the `sales_asia` role can only see data in the `asia` region and the `sales_uk` role can only see data in the `uk` region.

   ```sql
   SET ROLE `sales_asia`;
   SELECT * FROM `sales_info`;
   +------+--------+--------+-------+
   | name | phone  | region | sales |
   +------+--------+--------+-------+
   | lily | 886410 | asia   |    11 |
   +------+--------+--------+-------+

   SET ROLE `sales_uk`;
   SELECT * FROM `sales_info`;
   +---------+--------+--------+-------+
   | name    | phone  | region | sales |
   +---------+--------+--------+-------+
   | richard | 654321 | uk     |    16 |
   +---------+--------+--------+-------+
   ```

## Use case - Use a mapping table for data lookup

You can customize a mapping table based on a business table to map dimensions from the business table. Mapping table is not a special concept but a common table in CelerData. You can create a row access policy based on the mapping table and specify filter conditions to filter data from the business table. When data in the mapping table changes, the policy is automatically updated without requiring you to modify the policy.

For data security concerns, you can create another user `mapping_admin` and assign only the required privileges to this user to test mapping table lookup. This use case creates the following items:

- Database `db_test`
- Table `revenue` and its mapping table `sales_manager_region`
- Two roles that will have access to data in different regions
- User `mapping_admin` and role `mapping_admin_role` with row access policy-related privileges.
- Row access policy `phone_mask` for the `phone` column of the table

1. Create a database `db_test` and switch to this database.

   ```sql
   CREATE DATABASE db_test;
   USE db_test;
   ```

2. Create a business table `revenue` and insert data.

   ```sql
   CREATE TABLE `revenue` (
       customer_id varchar(50),
       region varchar(50),
       discount float,
       revenue INT);

   INSERT INTO `revenue` VALUES
   ('supermarket1','LA', 0.9,100),
   ('grocery_store3','NYC',0.8,150),
   ('whole_food2','NYC',0.9,120);
   ```

3. Create a mapping table `sales_manager_region` which stores the owner of each region. In the following steps, roles assigned to user `'Chelsea'@'%'` can only see data in the `LA` region.

   ```sql
   CREATE TABLE sales_manager_region (
       name varchar(50),
       region varchar(80)
    );

   INSERT INTO sales_manager_region VALUES
   ("'Chelsea'@'%'",'LA'),
   ("'Amber'@'%'",'NYC');
   ```

4. Create roles `sales_manager` and `sales`. Grant the SELECT privilege on tables `revenue` and `sales_manager_region` to the two roles.

   ```sql
   CREATE ROLE `sales_manager`,`sales`;

   GRANT SELECT ON TABLE `revenue`,`sales_manager_region` TO ROLE `sales_manager`;
   GRANT SELECT ON TABLE `revenue`,`sales_manager_region` TO ROLE `sales`;
   ```

5. Create user `mapping_admin`, create role `mapping_admin_role`, grant the required privileges to this role, and assign roles to `mapping_admin`.

   ```sql
   CREATE USER `mapping_admin`;
   CREATE ROLE `mapping_admin_role`; 

   -- Grant the privileges to create row access policies in the database.
   GRANT CREATE ROW ACCESS POLICY ON DATABASE db_test TO ROLE mapping_admin_role;

   -- Grant the privileges to apply all row access policies in the database.
   GRANT ALTER ON TABLE revenue TO ROLE mapping_admin_role;
   GRANT APPLY ON ALL ROW ACCESS POLICIES to ROLE mapping_admin_role;

   -- Assign the role to the user.
   GRANT `mapping_admin_role` TO USER `mapping_admin`;
   ```

6. Assign `sales_manager` to user `mapping_admin` and assign `sales` to user `Chelsea`.

   ```sql
   GRANT `sales_manager` TO USER `mapping_admin`;

   CREATE USER `Chelsea`;
   GRANT `sales` TO USER `Chelsea`;

   -- Allow mapping_admin to perform operations as Chelsea.
   GRANT IMPERSONATE ON USER `Chelsea` TO USER `mapping_admin`;

   -- Switch to user mapping_admin.
   EXECUTE AS `mapping_admin` WITH NO REVERT;

   -- Activate role mapping_admin_role to perform row access policy-related operations.
   SET ROLE `mapping_admin_role`;
   ```

   The required filtering effect

   - `sales_manager` can view all the data in the `revenue`  table.
   - Other roles can only view the data in its own region.
   - When the region owner changes, no policy update is required.

7. Create a policy which contains a subquery against the mapping table `sales_manager_region`. This policy allows the `sales_manager` role to view all data, `sales` to view data only in its own region, and when the region owner changes, privileges can be updated without the need to modify the policy.

   ```sql
   CREATE ROW ACCESS POLICY sales_policy AS (region_data varchar)
   RETURNS boolean ->
        current_role() = 'sales_manager'
        OR current_role() = 'sales' and EXISTS (SELECT 1 FROM sales_manager_region WHERE 
                name = current_user() and region = region_data);
   ```

8. Apply the policy to table `revenue`.

   ```sql
   ALTER TABLE `revenue` ADD ROW ACCESS POLICY sales_policy ON (region);
   ```

9. Switch to role `sales_manager` and query data from `revenue`. `sales_manager` can view all the data in the table.

   ```sql
   SET ROLE sales_manager;
   SELECT * FROM `revenue`;
   +----------------+--------+----------+---------+
   | customer       | region | discount | revenue |
   +----------------+--------+----------+---------+
   | supermarket1   | LA     |      0.9 |     100 |
   | grocery_store3 | NYC    |      0.8 |     150 |
   | whole_food2    | NYC    |      0.9 |     120 |
   +----------------+--------+----------+---------+
   ```

10. Perform operations as user `Chelsea` and switch to the `sales` role. This role can only access the data row whose `region` is `LA`.

    ```sql
    EXECUTE AS `Chelsea` WITH NO REVERT;
    SET ROLE sales;

    SELECT * FROM `revenue`;
    +----------------+--------+----------+---------+
    | customer       | region | discount | revenue |
    +----------------+--------+----------+---------+
    | supermarket1   | LA     |      0.9 |     100 |
    +----------------+--------+----------+---------+
    ```

## Manage row access policies

### Unset row access policies

Unsets one or all row access policies from a table.

**Syntax**:

```sql
ALTER TABLE <tbl_name> DROP ROW ACCESS POLICY <name>
ALTER TABLE <tbl_name> DROP ALL ROW ACCESS POLICIES
```

**Examples**:

```sql
ALTER TABLE sales_info DROP ROW ACCESS POLICY region_data;
ALTER TABLE sales_info DROP ALL ROW ACCESS POLICIES;
```

### Modify a row access policy

You can only modify the policy body, rename the policy, or update the comment of the policy. The new policy takes effect immediately after being created without requiring you to re-apply it to each table.

**Syntax**:

```sql
ALTER ROW ACCESS POLICY [ IF EXISTS ] <name> SET BODY -> <expression_on_arg_name>
ALTER ROW ACCESS POLICY [ IF EXISTS ] <name> RENAME TO <new_name>
ALTER ROW ACCESS POLICY [ IF EXISTS ] <name> SET COMMENT = '<string_literal>'
```

**Examples**:

```sql
ALTER ROW ACCESS POLICY region_data RENAME TO data_region;

ALTER ROW ACCESS POLICY region_data SET COMMENT = 'test';
```

### Query all row access policies

Queries all row access policies in a database.

```plaintext
SHOW ROW ACCESS POLICIES;
+-----------------------------+------------+-----------------+----------+
| Name                        | Type       | Catalog         | Database |
+-----------------------------+------------+-----------------+----------+
| region_data                 | ROW ACCESS | default_catalog | zj_test  |
| rap_sales_manager_regions_2 | ROW ACCESS | default_catalog | zj_test  |
```

### Query the CREATE statement of a row access policy

**Syntax**:

```sql
SHOW CREATE ROW ACCESS POLICY <name>
```

**Examples**:

```plaintext
+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Policy      | Create Policy                                                                                                                                                                                                                                                                                                 |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| region_data | CREATE ROW ACCESS POLICY region_data AS (region varchar) RETURNS boolean -> CASE WHEN (((CURRENT_ROLE()) = 'ROLE1') AND (`region` = 'uk')) THEN TRUE WHEN (((CURRENT_ROLE()) = 'ROLE2') AND (`region` = 'us')) THEN TRUE WHEN ((CURRENT_ROLE()) = 'ACCOUNTADMIN') THEN TRUE ELSE FALSE END COMMENT "for test" |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Drop a row access policy

You are not allowed to drop a policy that has been applied to tables. If you want to drop such a policy, revoke it from all tables to which this policy has been applied and then drop this policy.

```sql
DROP ROW ACCESS POLICY <name>
```

## Limits

- When you create a row access policy, the return type for the policy must be BOOLEAN.
- If a row access policy is applied to a base table, you cannot create a materialized view based on that table.
- Similarly, if a table is used as the base table of a materialized view, you cannot apply a row access policy to this table.
- A column with a row access policy applied can still be used as a conditional column in another masking policy or be referenced in the subquery of another policy.

## See also

Policy creation and application are controlled by privileges such as CREATE, APPLY, ALTER, and DROP. For more information about how to grant these privileges, the privileges required by each command, and privilege management mode, see [Manage privileges for policies](./manage_priv.md).
