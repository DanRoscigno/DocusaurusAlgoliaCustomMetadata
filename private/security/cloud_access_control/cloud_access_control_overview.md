# CelerData access control

CelerData employs role-based access control (RBAC) to manage privileges within a CelerData cloud account. RBAC gives account administrators the ability to restrict privileges within the account on granular level with ease.

Within an account, a role is a collection of privileges that can be applied to members within the account as needed. An account member can be granted one or more roles, which determine their permissions on clusters, members, cloud settings, and usage and billing.

> **NOTE**
>
> The access control system of an account is distinct and isolated from a CelerData cluster's data access control system, which is used to manage the privileges to operate the data in CelerData clusters. See [Data access control](../data_access_control/data_access_control_overview.md) for more information.

## Privileges

Privileges within an account are defined as follows:

| **Privilege**             | **Type**          | **Description**                                              |
| ------------------------- | ----------------- | ------------------------------------------------------------ |
| View cluster              | Cluster privilege | The privilege to view the details of a cluster               |
| Edit cluster              | Cluster privilege | The privilege to edit the deployment of a cluster            |
| Release cluster           | Cluster privilege | The privilege to release a cluster                           |
| Create cluster            | Account privilege | The privilege to create clusters within an account |
| Member management         | Account privilege | The privilege to:<ul><li>Invite members</li><li>Remove members</li><li>Initiate password reset for members</li><li>Assign roles to members</li><li>Unassign roles from members</li></ul> |
| Role management           | Account privilege | The privilege to:<ul><li>Create roles</li><li>Delete roles</li><li>Remove members</li><li>Enable account or cluster privileges for roles</li><li>Disable account or cluster privileges for roles</li></ul> |
| Cloud settings management | Account privilege | The privilege to:<ul><li>Create IAM credentials</li><li>Delete IAM credentials</li><li>Create network configurations</li><li>Delete network configurations</li></ul> |
| View billing              | Account privilege | The privilege to view the usage and billing information of an account |
| Configure alarm           | Account privilege | The privilege to create a new alarm policy, edit the alarm policy, and drop the alarm policy within an account |

## Default roles

The following two roles are created by default within each account:

| **Role**      | **Description**                                              |
| ------------- | ------------------------------------------------------------ |
| Account Admin | The role entitled to all privileges within an account. Note that privileges of the **Account Admin** role cannot be modified. |
| Public        | The role with no privileges within an account. The Public role is entitled to all basic operations other than the privileges listed above. Note that the Public role is assigned to all account members and cannot be unassigned. |
