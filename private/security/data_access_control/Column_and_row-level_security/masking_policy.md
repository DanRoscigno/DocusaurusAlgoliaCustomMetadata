# Masking policies

This topic describes what a masking policy is, how to create and apply a masking policy, a use case about phone number masking, how to manage masking policies, and the limits when you work with a masking policy.

For the overview of column and row-level security, see [Understand column and row-level security](./overview_of_column_row_security.md).

For the privileges required for each SQL operation, see [Manage privileges for policies](./manage_priv.md).

## Definition

Column-level security allows you to apply a masking policy to a column within a table or view, thereby masking sensitive data from specific roles.

CelerData can apply a column masking policy to a column to mask data at query runtime based on the conditions you specified in the policy. Column masking does not alter or encrypt the stored data. It only applies masking rules at query runtime. Additionally, it does not modify basic table information, such as data types or column names.

A column masking policy can be added to a table or view either when the table is created or after the table is created.

## Create a masking policy

A policy consists of column name, column type, masking conditions, and masking functions.

**Syntax**:

```sql
CREATE MASKING POLICY [ IF NOT EXISTS ] <name> AS
( <arg_name_to_mask> <arg_type_to_mask> [ , <arg_1> <arg_type_1> ... ] )
RETURNS <arg_type_to_mask> -> 
<expression_on_arg_name>
[ COMMENT = '<string_literal>' ]
```

| **Parameter**           | **Required** | **Description**                                              |
| ---------------------- | ------------ | ------------------------------------------------------------ |
| name                   | Yes          | The name of the policy, which must be unique across the database. Policies can be referenced across databases and catalogs in the format `catalog.db.policy`. If no catalog is specified, the current catalog is used. |
| arg_name_to_mask       | Yes          | The name of the column to mask.The first pair of `arg_name_to_mask arg_type_to_mask` must be the column to mask. The columns following that column are conditional columns. |
| arg_type_to_mask       | Yes          | The data type of the column to mask, which must be the same as the data type in the `RETURNS` clause. |
| arg_1 arg_type_1       | No           | The name and data type of the conditional columns. You can specify multiple conditional columns when you create a policy, but you can choose to reference only a few of them when you apply a policy. Conditional columns must reside in the same table as the column to mask. |
| expression_on_arg_name | Yes          | The expression that is used as the masking condition, which can use any conditional function, such as if()，case when()，and ifnull(). |
| COMMENT                | No           | The description of the policy.                               |

**Examples**:

- Example 1: Create a masking policy which only allows the `sales` role to see plaintext phone numbers. Other roles can only see masked phone numbers.

    ```sql
    CREATE MASKING POLICY phone_mask AS
    (phone string) RETURNS string ->
      CASE 
      WHEN current_role() = 'sales' THEN phone
      ELSE '***MASKED***'
      END
    COMMENT "for test";
    ```

- Example 2: Create a masking policy with a conditional column `visibility`. This policy allows only the `ACCOUNTADMIN` role to see email addresses or allows all roles to see only email addresses whose `visibility` is `public`.

    ```sql
    CREATE MASKING POLICY email_visibility AS
    (email varchar, visibility varchar) RETURNS varchar ->
      CASE
      WHEN current_role() = 'ACCOUNTADMIN' THEN email
      WHEN visibility = 'public' THEN email
      ELSE '***MASKED***'
      END;
    ```

- Example 3: Use a subquery in a masking policy. Only the current role can see email addresses whose `visibility` is `public`.

    ```sql
     CREATE MASKING POLICY email_visibility1 AS
    (email varchar) RETURNS varchar ->
      CASE
      WHEN EXISTS
        (SELECT * FROM user3 WHERE visibility = 'public' AND role = current_role()) THEN email
      ELSE '***MASKED***'
      END;
    ```

## Apply a masking policy

After a policy is created, you can apply it to the column you want to mask.

**Syntax**:

```sql
ALTER TABLE <tbl_name> MODIFY COLUMN <col_name>
  SET MASKING POLICY <name> [ USING (<col_name>, <cond_col1> , ...)]
```

**Examples**:

```sql
-- Suppose you have a table sales_info.
CREATE TABLE `sales_info` (
    name varchar(50),
    phone string,
    region varchar(50),
    sales int);

-- Apply the masking policy phone_mask to the phone column of the table.
ALTER TABLE `sales_info` MODIFY COLUMN phone SET MASKING POLICY phone_mask;
```

You can also apply an existing masking policy to a table column using the WITH clause when you create the table.  

```sql
CREATE TABLE `sales_info` (
    name varchar(50),
    phone string WITH MASKING POLICY phone_mask USING (phone),
    region varchar(50),
    sales int);
```

## Use case - Mask phone numbers for different roles

This use case is to create a masking policy which allows the `sales` role to view plaintext phone numbers and allows the `analyst` role to view only masked phone numbers.

After connecting to your cluster as user `admin`, you have the privileges associated with the default roles `user_admin` and `db_admin`. For data security concerns, you can create another user and assign only the required privileges to this user to test masking policies. This use case creates the following items:

- Database `db_test`
- Table `sales_info`
- Two roles that have different access to phone numbers
- User `masking_admin` and role `masking_admin_role` with masking policy-related privileges.
- Masking policy `phone_mask` for the `phone` column of the table

1. Create a database `db_test` and switch to this database.

   ```sql
   CREATE DATABASE db_test;
   USE db_test;
   ```

2. Create a sales information table `sales_info` and insert data into this table.

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

3. Create two roles `sales` and `analyst`. Grant the roles the privilege to query data from the table.

   ```sql
   CREATE ROLE `sales`,`analyst`;

   GRANT SELECT ON TABLE `sales_info` TO ROLE `sales`;
   GRANT SELECT ON TABLE `sales_info` TO ROLE `analyst`;
   ```

4. Create a user `masking_admin`, create a role `masking_admin_role`, grant the required privileges to this role, and assign roles to `masking_admin`.

   ```sql
   CREATE USER `masking_admin`;
   CREATE ROLE `masking_admin_role`; 

   -- Grant the privileges to create masking policies in the database.
   GRANT CREATE MASKING POLICY ON DATABASE db_test TO ROLE masking_admin_role;

   -- Grant the privileges to apply all masking policies in the database.
   GRANT ALTER ON TABLE sales_info TO ROLE masking_admin_role;
   GRANT APPLY ON ALL MASKING POLICIES to ROLE masking_admin_role;

   -- Assign the previous roles to the user.
   GRANT `masking_admin_role`,`sales`,`analyst` TO USER `masking_admin`;

   -- Switch to user masking_admin.
   EXECUTE AS `masking_admin` WITH NO REVERT;

   -- Activate role masking_admin_role to perform masking policy-related operations.
   SET ROLE `masking_admin_role`;
   ```

5. Create a masking policy which uses CASE WHEN to specify conditions. This policy allows only the `sales`  role to see plaintext user phone numbers. Other roles can only see masked phone numbers.

   ```sql
   CREATE MASKING POLICY phone_mask AS (phone string)
   RETURNS string ->
       CASE WHEN current_role() = 'sales' THEN phone
       ELSE '***MASKED***'
       END;
   ```

6. Apply the policy to column `phone` you want to mask.

   ```sql
   ALTER TABLE `sales_info` MODIFY COLUMN phone SET MASKING POLICY phone_mask;
   ```

7. Use the two roles `sales` and `analyst` to query data. The results show that only the `sales` role can see plaintext user phone number. The `analyst` role can only see masked phone numbers.

   ```Plain
   SET ROLE `sales`;
   SELECT * FROM `sales_info`;
   +---------+--------+--------+-------+
   | name    | phone  | region | sales |
   +---------+--------+--------+-------+
   | amber   | 789165 | africa |    17 |
   | richard | 654321 | uk     |    16 |
   | lily    | 886410 | asia   |    11 |
   +---------+--------+--------+-------+

   SET ROLE `analyst`;
   SELECT * FROM `sales_info`;
   +---------+--------------+--------+-------+
   | name    | phone        | region | sales |
   +---------+--------------+--------+-------+
   | lily    | ***MASKED*** | asia   |    11 |
   | richard | ***MASKED*** | uk     |    16 |
   | amber   | ***MASKED*** | africa |    17 |
   +---------+--------------+--------+-------+
   ```

## Manage masking policies

### Unset a masking policy

Unsets a masking policy from a table column.

**Syntax**:

```sql
ALTER TABLE <tbl_name> MODIFY COLUMN <col_name> UNSET MASKING POLICY
```

**Examples**:

```sql
ALTER TABLE `sales_info` MODIFY COLUMN phone UNSET MASKING POLICY;
```

### Modify a masking Policy

You can only modify the policy body, rename the policy, or update the comment of the policy. The new policy takes effect immediately after being created without requiring you to re-apply it to each table.

> **Note**
>
> - You cannot modify the data type of the masked column or the number and data types of the conditional columns because the policy may have been applied. In this case, modifying this policy may invalidate the masking policy.
> - When you modify the policy body, make sure that the names and return type of conditional columns in the new body are the same as those originally specified when you create the Policy.

**Syntax**:

```sql
ALTER MASKING POLICY [ IF EXISTS ] <name> SET BODY -> <expression_on_arg_name>
ALTER MASKING POLICY [ IF EXISTS ] <name> RENAME TO <new_name>
ALTER MASKING POLICY [ IF EXISTS ] <name> SET COMMENT = '<string_literal>'
```

**Examples**:

```sql
ALTER MASKING POLICY phone_mask RENAME TO mask_phone;

ALTER MASKING POLICY phone_mask SET COMMENT = 'test';
```

### Query all masking policies

Queries all masking policies in the current database.

```Plain
SHOW MASKING POLICIES;
+------------------+---------+-----------------+----------+
| Name             | Type    | Catalog         | Database |
+------------------+---------+-----------------+----------+
| email_visibility | MASKING | default_catalog | zj_test  |
| phone_mask       | MASKING | default_catalog | zj_test  |
+------------------+---------+-----------------+----------+
```

### Query the CREATE statement of a masking policy

**Syntax**:

```sql
SHOW CREATE MASKING POLICY <name>;
```

**Examples**:

```plaintext
SHOW CREATE MASKING POLICY phone_mask\G
*************************** 1. row ***************************
       Policy: phone_mask
Create Policy: CREATE MASKING POLICY phone_mask AS (phone varchar(65533)) RETURNS varchar(65533) -> CASE WHEN ((CURRENT_ROLE()) = 'sales') THEN `phone` ELSE '***MASKED***' END COMMENT "for test"
```

### Drop a masking policy

You are not allowed to drop a policy that has been applied to a table. If you want to drop such a policy, revoke it from all tables to which this policy has been applied and then drop this policy.

```sql
DROP MASKING POLICY <name>
```

## Limits

- You can apply only one masking policy to one column.
- Conditional columns must reside in the same table as the column to mask.
- If a column has a masking policy applied to it, it cannot be used as a conditional column in another masking policy, nor can it be referenced in a subquery within another masking policy, and vice versa.
- If a table is a base table of a materialized view, no masking policies can be applied to that table.
- If a column in a table has a masking policy applied to it, a materialized view cannot be created based on that column.

## See also

Policy creation and application are controlled by privileges such as CREATE, APPLY, ALTER, and DROP. For more information about how to grant these privileges, the privileges required by each command, and privilege management mode, see [Manage privileges for policies](./manage_priv.md).
