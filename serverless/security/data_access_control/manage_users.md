# Manage user privileges

This topic describes how to manage users, roles, and privileges in CelerData Cloud.

CelerData Cloud employs both role-based access control (RBAC) and identity-based access control (IBAC) to manage privileges within a  CelerData Cloud account, allowing account administrators to easily restrict privileges within the account on different granular levels.

Within a  CelerData Cloud account, privileges can be granted to users or roles. A role is a collection of privileges that can be assigned to users or other roles in the account as needed. A user can be granted one or more roles, which determine their permissions on different objects.

## Manage users

Users with the system-defined role `user_admin` can create users, alter users, and drop users within the CelerData Cloud account.

### Create a user

You can create a user by specifying the username, authentication method, and default role. For more information and advanced instructions on creating a user, see [CREATE USER](../../sql-reference/sql-statements/account-management/CREATE_USER.md).

The following example creates the user `jack`, sets the password to `12345` for it, and assigns the role `example_role` to it as its default role:

```SQL
CREATE USER jack IDENTIFIED BY '12345' DEFAULT ROLE 'example_role';
```

### Alter a user

You can alter the password, or property for a user.

The default role of a user is automatically activated when the user connects to CelerData Cloud.

#### Alter the property of a user

You can set the property of a user using [SET PROPERTY](../../sql-reference/sql-statements/account-management/SET_PROPERTY.md).

The following example sets the maximum number of connections for the user `jack` to `1000`.

```SQL
SET PROPERTY FOR jack 'max_user_connections' = '1000';
```

#### Reset password for a user

You can reset the password for a user using [SET PASSWORD](../../sql-reference/sql-statements/account-management/SET_PASSWORD.md) or [ALTER USER](../../sql-reference/sql-statements/account-management/ALTER_USER.md).

> **NOTE**
>
> Any user can reset their own passwords without needing any privileges.

Both the following examples reset the password of `jack` to `54321`:

- Reset the password using SET PASSWORD:

  ```SQL
  SET PASSWORD FOR jack = PASSWORD('54321');
  ```

- Reset the password using ALTER USER:

  ```SQL
  ALTER USER jack IDENTIFIED BY '54321';
  ```

### Drop a user

You can drop a user using [DROP USER](../../sql-reference/sql-statements/account-management/DROP_USER.md).

The following example drops the user `jack`:

```SQL
DROP USER jack;
```

## Manage roles

Users with the system-defined role `user_admin` can create, grant, revoke, or drop roles in the CelerData Cloud account.

### Create a role

You can create a role using [CREATE ROLE](../../sql-reference/sql-statements/account-management/CREATE_ROLE.md).

The following example creates the role `example_role`:

```SQL
CREATE ROLE example_role;
```

### Grant a role

You can grant roles to a user or another role using [GRANT](../../sql-reference/sql-statements/account-management/GRANT.md).

- Grant a role to a user.

  The following example grants the role `example_role` to the user `jack`:

  ```SQL
  GRANT example_role TO USER jack;
  ```

- Grant a role to another role.

  The following example grants the role `example_role` to the role `test_role`:

  ```SQL
  GRANT example_role TO ROLE test_role;
  ```

### Revoke a role

You can revoke roles from a user or another role using [REVOKE](../../sql-reference/sql-statements/account-management/REVOKE.md).

> **NOTE**
>
> You cannot revoke the system-defined default role `PUBLIC` from a user.

- Revoke a role from a user.

  The following example revokes the role `example_role` from the user `jack`:

  ```SQL
  REVOKE example_role FROM USER jack;
  ```

- Revoke a role from another role.

  The following example revokes the role `example_role` from the role `test_role`:

  ```SQL
  REVOKE example_role FROM ROLE test_role;
  ```

### Drop a role

You can drop a role using [DROP ROLE](../../sql-reference/sql-statements/account-management/DROP_ROLE.md).

The following example drops the role `example_role`:

```SQL
DROP ROLE example_role;
```

> **CAUTION**
>
> System-defined roles can not be dropped.

## Manage privileges

Users with the system-defined role `user_admin` can grant or revoke privileges in the CelerData Cloud account.

### Grant privileges

You can grant privileges to a user or a role using [GRANT](../../sql-reference/sql-statements/account-management/GRANT.md).

- Grant a privilege to a user.

  The following example grants the SELECT privilege on the table `sr_member` to the user `jack`, and allows `jack` to grant this privilege to other users or roles (by specifying WITH GRANT OPTION in the SQL):

  ```SQL
  GRANT SELECT ON TABLE sr_member TO USER jack WITH GRANT OPTION;
  ```

- Grant a privilege to a role.

  The following example grants the SELECT privilege on the table `sr_member` to the role `example_role`:

  ```SQL
  GRANT SELECT ON TABLE sr_member TO ROLE example_role;
  ```

### Revoke privileges

You can revoke privileges from a user or a role using [REVOKE](../../sql-reference/sql-statements/account-management/REVOKE.md).

- Revoke a privilege from a user.

  The following example revokes the SELECT privilege on the table `sr_member` from the user `jack`, and disallows `jack` to grant this privilege to other users or roles):

  ```SQL
  REVOKE SELECT ON TABLE sr_member FROM USER jack;
  ```

- Revoke a privilege from a role.

  The following example revokes the SELECT privilege on the table `sr_member` from the role `example_role`:

  ```SQL
  REVOKE SELECT ON TABLE sr_member FROM ROLE example_role;
  ```

## View user and role information

Users with the system-defined role `user_admin` can view all the user and role information within the CelerData Cloud account.

### View privilege information

You can view the privileges granted to a user or a role using [SHOW GRANTS](../../sql-reference/sql-statements/account-management/SHOW_GRANTS.md).

- View the privileges of the current user.

  ```SQL
  SHOW GRANTS;
  ```

  > **NOTE**
  >
  > Any user can view their own privileges without needing any privileges.

- View the privileges of a specific user.


  The following example shows the privileges of the user `jack`:

  ```SQL
  SHOW GRANTS FOR jack;
  ```

- View the privileges of a specific role.


  The following example shows the privileges of the role `example_role`:

  ```SQL
  SHOW GRANTS FOR ROLE example_role;
  ```

### View user property

You can view the property of a user using SHOW PROPERTY.

The following example shows the property of the user `jack`:

```SQL
SHOW PROPERTY FOR jack;
```

### View roles

You can view all the roles within the CelerData Cloud account using [SHOW ROLES](../../sql-reference/sql-statements/account-management/SHOW_ROLES.md).

```SQL
SHOW ROLES;
```

### View users

You can view all the users within the CelerData Cloud account using SHOW USERS.

```SQL
SHOW USERS;
```
