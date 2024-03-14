# Manage privileges for policies

## Privilege items

Policy creation and application are controlled by privileges such as CREATE, APPLY, ALTER, and DROP. Administrators can determine whether to delegate these privileges to some departments or roles based on business scenarios.

| **Privilege item**       | **Description**                             |
| ------------------------ | ------------------------------------------- |
| CREATE MASKING POLICY    | Creates a masking policy in a database.     |
| CREATE ROW ACCESS POLICY | Creates a row access  policy in a data base |
| APPLY                    | Applies a policy to a table.                |
| ALTER                    | Modifies a policy.                          |
| DROP                     | Drops a policy.                             |

### CREATE MASKING POLICY，CREATE ROW ACCESS POLICY

Controls whether users or roles have the permission to create a policy in a database.

```sql
GRANT CREATE MASKING POLICY ON DATABASE <db_name> TO ROLE <role_name>
GRANT CREATE ROW ACCESS POLICY ON DATABASE <db_name> TO ROLE <role_name>
    
REVOKE CREATE MASKING POLICY ON DATABASE <db_name> FROM ROLE <role_name>
REVOKE CREATE ROW ACCESS POLICY ON DATABASE <db_name> FROM ROLE <role_name>
```

### APPLY

Controls whether users or roles have the permission to apply a policy or apply all policies.

```sql
GRANT APPLY ON MASKING POLICY <policy_name> TO ROLE <role_name>
GRANT APPLY ON ROW ACCESS POLICY <policy_name> TO ROLE <role_name>

REVOKE APPLY ON MASKING POLICY <policy_name> FROM ROLE <role_name>
REVOKE APPLY ON ROW ACCESS POLICY <policy_name> FROM ROLE <role_name>
```

```sql
GRANT APPLY ON ALL MASKING POLICIES TO ROLE <role_name>
GRANT APPLY ON ALL MASKING POLICIES IN ALL DATABASES TO ROLE <role_name>
```

### ALTER

Controls whether users or roles have the permission to modify a policy.

```sql
GRANT ALTER ON MASKING POLICY <policy_name> TO ROLE <role_name>
GRANT ALTER ON ROW ACCESS POLICY <policy_name> TO ROLE <role_name>
```

### DROP

Controls whether users or roles have the permission to drop a policy.

```sql
GRANT DROP ON MASKING POLICY <policy_name> TO ROLE <role_name>
GRANT DROP ON ROW ACCESS POLICY <policy_name> TO ROLE <role_name>
```

## Privileges required for SQL commands

The SQL commands used to create and manage policies require privileges. You can refer to [Masking policies](./masking_policy.md)  and [Row access policies](./row_access_policy.md) for the syntax and examples of these commands.

### Masking policy

| **SQL**                            | **Required privileges**      | **GRANT** **syntax**                                         |
| ---------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| CREATE MASKING POLICY              | CREATE MASKING POLICY        | `GRANT CREATE MASKING POLICY ON DATABASE <db_name> TO ROLE <role_name>` |
| ALTER TABLE...SET MASKING POLICY   | ALTER and APPLY                   | <ul><li>`GRANT ALTER ON TABLE <table_name> TO ROLE <role_name>` </li><li>`GRANT APPLY ON MASKING POLICY <policy_name> to ROLE <role_name>`</li></ul> |
| ALTER TABLE...UNSET MASKING POLICY | ALTER                        | `GRANT ALTER ON TABLE <table_name> TO ROLE <role_name>`        |
| ALTER MASKING POLICY               | ALTER                        | `GRANT ALTER ON MASKING POLICY <policy_name> to ROLE <role_name>` |
| SHOW MASKING POLICIES              | None                         | None                                                         |
| SHOW CREATE MASKING POLICY         | Any of APPLY, ALTER, or DROP |                                                              |
| DROP MASKING POLICY                | DROP                         | `GRANT DROP ON MASKING POLICY <policy_name> to ROLE <role_name>` |

### Row access policy

| **SQL**                              | **Required privileges**      | **GRANT** **syntax**                                         |
| ------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| CREATE ROW ACCESS POLICY POLICY      | CREATE ROW ACCESS POLICY     | `GRANT CREATE ROW ACCESS POLICY ON DATABASE <db_name> TO ROLE <role_name>` |
| ALTER TABLE...ADD ROW ACCESS POLICY  | ALTER and APPLY                   | <ul><li>`GRANT ALTER ON TABLE <table_name> TO ROLE <role_name>`</li><li>`GRANT APPLY ON ROW ACCESS POLICY <policy_name> to ROLE <role_name>`</li></ul> |
| ALTER TABLE...DROP ROW ACCESS POLICY | ALTER                        | `GRANT ALTER ON TABLE <table_name> TO ROLE <role_name>`        |
| ALTER ROW ACCESS POLICY              | ALTER                        | `GRANT ALTER ON ROW ACCESS POLICY <policy_name> to ROLE <role_name>` |
| SHOW ROW ACCESS POLICIES             | None                         | None                                                         |
| SHOW CREATE ROW ACCESS POLICY        | Any of APPLY, ALTER, or DROP |                                                              |
| DROP ROW ACCESS POLICY               | DROP                         | `GRANT DROP ON ROW ACCESS POLICY <policy_name> to ROLE <role_name>` |

## Manage privileges

Three data administration models are supported to realize segregation of duties: centralized, decentralized, and hybrid administration. You can decide how to delegate policy-related privileges to suit your business requirements.

|        | **Centralized**  | **Hybrid**       | **Decentralized** |
| ------ | ---------------- | ---------------- | ----------------- |
| CREATE | Security manager | Security manager | Individual teams  |
| APPLY  | Security manager | Individual teams | Individual teams  |

- Centralized: Only the administrator is allowed to manage policies.

   ```sql
    CREATE ROLE security_manager;
    
    GRANT CREATE MASKING POLICY ON DATABASE d1 TO ROLE security_manager;
    
    GRANT APPLY ON ALL MASKING POLICIES ON DATABASE d1 TO ROLE security_manager;
    ```

- Hybrid: Both the administrator and other roles can manage policies.

   ```sql
   CREATE ROLE security_manager;

   GRANT CREATE MASKING POLICY ON DATABASE d1 TO ROLE security_manager;

   GRANT APPLY ON ALL MASKING POLICIES ON DATABASE d1 TO ROLE db_owner;
   ```

- Decentralized: Policies are managed by other roles.

   ```sql
   CREATE ROLE db_owner;

   GRANT CREATE MASKING POLICY ON DATABASE d1 TO ROLE db_owner;

   GRANT APPLY ON ALL MASKING POLICIES ON DATABASE d1 TO ROLE db_owner;
   ```
