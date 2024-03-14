---
sidebar_position: 40
---

# Map LDAP groups to CelerData cluster

This topic describes how to map the user and group membership information in your LDAP service to your CelerData cluster. By allowing access of your LDAP information to your CelerData cluster, you enable the cluster to automatically manage the users and privileges according to your LDAP information, **not only greatly simplifying the authentication and authorization experiences with LDAP on your CelerData cluster, but also significantly increasing the** **consistency** **of user information between the two services.**

> **CAUTION**
>
> Only users with the SECURITY privilege on the SYSTEM level can perform the following operations.

## Overview

CelerData offers a new feature - Security Integration, which automates the user and privilege management at the stage of user login. By creating a security integration within your CelerData cluster, you can allow access of your LDAP service to CelerData. CelerData caches the group membership information of your LDAP service according to the mapping policies you created, and refreshes the cache whenever needed.

Users can log in to a CelerData cluster with the authentication method that your LDAP service supports. Each time a user logs in to a CelerData cluster, the cluster does as follows:

1. The cluster first checks whether the user exists in your LDAP service and whether the authentication is valid.

   - If the user exists and the authentication is valid, the cluster creates a dummy user account with the LDAP username the user logs in with.
   - If the user does not exist in the LDAP service or the authentication is invalid, the cluster returns login failure.

2. Then, it checks to which group the user belongs by querying the cached group membership information.

   - If the user belongs to a specific group, the cluster grants the corresponding roles (with specific privileges) to the dummy user account, and returns login success.
   - If the user does not belong to any group, the cluster returns login failure.

## Create a security integration

To map your LDAP service to your CelerData cluster, you need to configure the connection between them via a security integration.

Syntax:

```SQL
CREATE SECURITY INTEGRATION <security_integration_name> 
PROPERTIES (
    "type" = "LDAP",
    "ldap_server_host"="",
    "ldap_server_port"="",
    "ldap_bind_base_dn"="",
    "ldap_user_search_attr"="",
    "ldap_user_group_match_attr" = "",
    "ldap_bind_root_dn"="",
    "ldap_bind_root_pwd"="",
    "ldap_cache_refresh_interval"="",
    "comment"=""
)
```

Parameters:

| **Parameter**               | **Required** | **Description**                                              |
| --------------------------- | ------------ | ------------------------------------------------------------ |
| security_integration_name   | Yes          | The name of the security integration.<br />**NOTE**<br />The security integration name is globally unique.You cannot specify this parameter as `native`. |
| type                        | Yes          | The type of the security integration. Specify it as `LDAP`.  |
| ldap_server_host            | No           | The IP address of your LDAP service. Default: `127.0.0.1`.   |
| ldap_server_port            | No           | The port of your LDAP service. Default: `389`.               |
| ldap_bind_base_dn           | Yes          | The base Distinguished Name (DN) of the LDAP user for which the cluster searches. |
| ldap_user_search_attr       | Yes          | The user's attribute used to log in to the LDAP service, for example, `uid`. |
| ldap_user_group_match_attr  | No           | If the user's attribute as the member of a group is different from the user's DN, you must specify this parameter. For example, if a user's DN is `uid=bob,ou=people,o=celerdata,dc=com`, but its attribute as a group member is `memberUid=bob,ou=people,o=celerdata,dc=com`, you need to specify `ldap_user_search_attr` as `uid` and `ldap_user_group_match_attr` as `memberUid`. If this parameter is not specified, the value you specified in `ldap_user_search_attr` is used. |
| ldap_bind_root_dn           | Yes          | The admin DN of your LDAP service.                           |
| ldap_bind_root_pwd          | Yes          | The admin password of your LDAP service.                     |
| ldap_cache_refresh_interval | No           | The interval at which the cluster automatically refreshes the cached LDAP group information. Unit: Seconds. Default: `900`. |
| comment                     | No           | The description of the security integration.                 |

> **CAUTION**
>
> your CelerData cluster does not offer connectivity checks when you create a security integration.

## Configure authentication chain

After the security integration is created, it is added to your CelerData cluster as a new authentication method. You must enable the security integration by setting the order of the authentication methods via the FE dynamic configuration item `authentication_chain`. In this case, you need to set the security integration as the preferred authentication method and then the native authentication of the CelerData cluster.

```SQL
ADMIN SET FRONTEND CONFIG (
    -- Do not omit the brackets [] in the statement.
    "authentication_chain" = "[<security_integration_name>, native]"
);
```

> **NOTE**
>
> - If `authentication_chain` is not specified, only the native authentication is enabled.
> - Once `authentication_chain` is set, your CelerData cluster first verifies the user login with the top preferred authentication method. If a login fails with the preferred authentication method, the cluster follows the specified order to try the next authentication method.

You can check the value of `authentication_chain` using the following statement:

```SQL
ADMIN SHOW FRONTEND CONFIG LIKE 'AUTHENTICATION_CHAIN';
```

## Create mapping policy

After the order of the authentication methods is set, you need to create policies to map your LDAP groups to roles in your CelerData cluster using the following statement. Each time you can map multiple LDAP groups to one role in your CelerData cluster. The relationship across the groups in the list is `|`.

Syntax:

```SQL
CREATE ROLE MAPPING <map_name> 
PROPERTIES (
    "integration_name"="",
    "role"="",
    "ldap_group_list"="[]"
)
```

Parameters:

| **Parameter**    | **Required** | **Description**                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| map_name         | Yes          | The name of the mapping policy.                              |
| integration_name | Yes          | The security integration for which the mapping policy is enabled. |
| role             | Yes          | The name of the role to which the LDAP groups are mapped.    |
| ldap_group_list  | Yes          | The DN list of the LDAP group(s) to which the role is mapped, for example, `['cn=group1,ou=groups,o=celerdata,dc=com','cn=group2,ou=groups,o=celerdata,dc=com']`. The relationship across the groups in the list is `|`. |

> **NOTE**
>
> - Once the mapping policy is created and the security integration is enabled, your CelerData cluster grabs and caches all the members of the groups specified in the `ldap_group_list`. If the mapping policy is created but the security integration is not enabled, the information will not be cached.
> - By default, your CelerData cluster searches the members in the group using `member`, `uniqueMember`, and `memberUid`.
> - By default, each group is expanded recursively. Your CelerData cluster expands all the members with `objectClass` of `groupOfNames`, `groupOfUniqueNames`, and `posixGroup`, and searches for the members with the corresponding attributes.

## Refresh the cache

Once the mapping policy is created and the security integration is enabled, your CelerData cluster grabs and caches the corresponding group membership information. Generally, the cluster refreshes the cache with the following mechanisms:

- Automatic refresh:

  Your CelerData cluster automatically refreshes the cache at the interval specified in the security integration property `ldap_cache_refresh_interval`.

- Triggered refresh:

  Each time the cluster fails to find the corresponding group membership information in the existing cache when a user logs in, it refreshes the cache to search for the user in the updated cache.

- Manual refresh:

  You can trigger a manual refresh whenever needed.

  ```SQL
  REFRESH ALL ROLE MAPPINGS;
  ```

## Manage your security integrations and mapping policies

### Manage security integrations

You can alter the configuration of an existing security integration using the following statement:

```SQL
ALTER SECURITY INTEGRATION <security_integration_name> SET
PROPERTIES (
    "key"="value"[, ...]
)
```

> **CAUTION**
>
> You cannot alter the `type` of a security integration.

You can drop an existing security integration using the following statement:

```SQL
DROP SECURITY INTEGRATION <security_integration_name>
```

You can view all security integrations in your CelerData cluster using the following statement:

```SQL
SHOW SECURITY INTEGRATIONS;
```

Example:

```Plain
SHOW SECURITY INTEGRATIONS;
+--------+--------+---------+
| Name   | Type   | Comment |
+--------+--------+---------+
| LDAP1  | LDAP   | NULL    |
+--------+--------+---------+
```

| **Parameter** | **Description**                                              |
| ------------- | ------------------------------------------------------------ |
| Name          | The name of the security integration.                        |
| Type          | The type of the security integration.                        |
| Comment       | The description of the security integration. `NULL` is returned when no description is specified for the security integration. |

You can check the details of a security integration using the following statement:

```SQL
SHOW CREATE SECURITY INTEGRATION <integration_name>
```

Example:

```Plain
SHOW CREATE SECURITY INTEGRATION LDAP1；

+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Security Integration  | Create Security Integration                                                                                                                                                                                                                                                                                                                                                                              |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| LDAP1                | CREATE SECURITY INTEGRATION LDAP1
    PROPERTIES (
    "type" = "ldap",
    "ldap_server_host"="",
    "ldap_server_port"="",
    "ldap_bind_base_dn"="",
    "ldap_user_search_attr"="",
    "ldap_bind_root_dn"="",
    "ldap_bind_root_pwd"="*****",
    "ldap_cache_refresh_interval"="",
    "comment"=""
)|
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

> **NOTE**
>
> `ldap_bind_root_pwd` is masked when SHOW CREATE SECURITY INTEGRATION is executed.

### Manage mapping policies

You can alter the configuration of an existing mapping policy using the following statement:

```SQL
ALTER ROLE MAPPING <map_name> 
PROPERTIES (
    "key"="value"[, ...]
)
```

You can drop an existing mapping policy using the following statement:

```SQL
DROP ROLE MAPPING <map_name>
```

> **CAUTION**
>
> If the `ldap_group_list` of an existing mapping policy is altered, your CelerData cluster automatically refreshes the cache. If the mapping policy is dropped, the cluster deletes the corresponding cache.

You can view all mapping policies using the following statement:

```SQL
SHOW ROLE MAPPINGS;
```

Example:

```Plain
SHOW ROLE MAPPINGS;
+------------------+-----------------+-----------+----------------------------------------+-------------------------+
| Name             | IntegrationName | Role      | LdapGroupList                          | LastRefreshCompleteTime |
+------------------+-----------------+-----------+----------------------------------------+-------------------------+
| LDAP1_readonly   | ldap1           | readonly  | "cn=user,ou=group,o=celerdata,dc=com"  ｜ 2023-03-08 10:00:00    ｜
+------------------+-----------------+-----------+----------------------------------------+-------------------------+
```

`LastRefreshCompleteTime` indicates the time when the last cache refresh completes. You can see whether the cache is up-to-date.
