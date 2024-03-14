# Query CCU usage of a cluster

Queries the CCU usage of a CelerData cluster.

## Request

| Basic information |                                                              |
| ----------------- | ------------------------------------------------------------ |
| HTTP URL          | `https://cloud-api.celerdata.com/api/1.0/usages/:cluster_id` |
| HTTP method       | GET                                                          |
| Frequency         | 600/minute                                                   |

### Path variables

| Parameter  | Example value                        | Required | Type   | Description                                                  |
| ---------- | ------------------------------------ | -------- | ------ | ------------------------------------------------------------ |
| cluster_id | 4ae48a3f-f840-46fa-b0e7-0709a220fa40 | Yes      | String | The ID of the cluster. You can log in to the CelerData Cloud Private console and then navigate to the **Cluster properties** section of the cluster's **Overview** page to obtain the cluster ID. |

`:<variable_name>` indicates a URL path variable in web development tools such as Postman. `:cluster_id` in the above URL path, as such, indicates the ID of the cluster you want to query. However, if you use other tools such as curl, you need to replace `:cluster_id` with the actual cluster ID by hand in the `curl` command.

### Header parameters

| **Parameter** | **Example value**                                       | **Required** | **Type** | **Description**                |
| ------------- | ------------------------------------------------------- | ------------ | -------- | ------------------------------ |
| Authorization | Bearer OGQ5MDA4MZGTNJMWNS0ZY2Y2LWFJNZYTOTBINMZIYTGZZDUY | Yes          | String   | The access token used to access the CelerData Cloud Private API. Format: `Bearer <access_token>`. |

See [Create an access token](../obtain_access_credentials.md#create-an-access-token).

### Query parameters

| **Parameter** | **Example value** | **Required** | **Type** | **Description**                                              |
| ------------- | ----------------- | ------------ | -------- | ------------------------------------------------------------ |
| start_date    | 20230701          | String       | Yes      | The start date of the time range to query. Format: `yyyyMMdd`. |
| end_date      | 20230731          | String       | Yes      | The end date of the time range to query. Format: `yyyyMMdd`.<br/>The `start_date` must be less than or equal to the `end_date`, and the result of subtracting `start_date` from `start_date` must range from 0 to 31. |
| show_detail   | true              | Boolean      | Yes      | Whether to return CCU usage details on a daily basis.    |

## Response

### Sample response

```JSON
{
    "code":20000,
    "data":{
        "cluster_id":"82964bc5-a8ce-4236-9fe6-1ad1e0f80e15",
        "cluster_name":"test_privilege_30-wybing",
        "total_usage":"87.025277",
        "details":[
            {
                "usage":"18.130654",
                "date":20230703
            }
        ]
    }
}
```

### Response elements

| **Parameter**        | **Example value**                    | **Type** | **Description**                                              |
| -------------------- | ------------------------------------ | -------- | ------------------------------------------------------------ |
| code                 | 20000                                | Integer  | The error code. If the error code returned is `20000`, the request succeeded. If any other error code is returned, the request failed. |
| data                 | -                                    | Object   | The result of the API call. The `data` object may not be returned for some API actions. It consists of the following elements:<ul><li>cluster_id</li><li>cluster_name</li><li>total_usage</li><li>details</li></ul> |
| data.cluster_id      | 82964bc5-a8ce-4236-9fe6-1ad1e0f80e15 | String   | The ID of the cluster queried.                               |
| data.cluster_name    | test_privilege_30-tom                | String   | The name of the cluster queried.                             |
| data.total_usage     | 87.025277                            | String   | The total CCU usage of the cluster over the selected time range. |
| data.details         | -                                    | Array    | The CCU usage details of the cluster over the selected time range. `details` is an array that consists of one or more objects, each of which consists of the CCU usage details on a specific date, depending on the number of days within the selected time range.<br/>The `details` array is returned only when the `show_detail` parameter in the request is set to `true`. |
| data.details.0       | -                                    | Object   | The CCU usage details of the cluster on each specific date, which are presented as an object. Each object consists of the following elements:<ul><li>usage</li><li>date</li></ul> |
| data.details.0.usage | 18.130654                            | String   | The usage on a specific date.                                |
| data.details.0.date  | 20230703                             | Integer  | The specific date.                                           |
| message              | param start_date is invalid          | String   | The error message. This element is returned only when the `code` returned is not `20000`.<br/>**NOTICE**<br/>Do not conclude whether a request succeeded or failed based on the return value of `message`. |
