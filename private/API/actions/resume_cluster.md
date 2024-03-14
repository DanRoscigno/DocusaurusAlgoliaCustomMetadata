# Resume a cluster

Resumes a CelerData cluster.

## Request

| Basic information |                                                              |
| ----------------- | ------------------------------------------------------------ |
| HTTP URL          | `https://cloud-api.celerdata.com/api/1.0/clusters/:cluster_id/resume` |
| HTTP method       | PATCH                                                        |
| Frequency         | 600/minute                                                   |

### Path variables

| Parameter  | Example value                        | Required | Type   | Description                                                  |
| ---------- | ------------------------------------ | -------- | ------ | ------------------------------------------------------------ |
| cluster_id | 4ae48a3f-f840-46fa-b0e7-0709a220fa40 | Yes      | String | The ID of the cluster. You can log in to the CelerData Cloud Private console and then navigate to the `Cluster properties` section of the cluster's `Overview` page to obtain the cluster ID. |

`:<variable_name>` indicates a URL path variable in web development tools such as Postman. `:cluster_id` in the above URL path, as such, indicates the ID of the cluster you want to resume. However, if you use other tools such as curl, you need to replace `:cluster_id` with the actual cluster ID by hand in the `curl` command.

### Header parameters

| Parameter     | Example value                                           | Required | Type   | Description                                                  |
| ------------- | ------------------------------------------------------- | -------- | ------ | ------------------------------------------------------------ |
| Authorization | Bearer OGQ5MDA4MZGTNJMWNS0ZY2Y2LWFJNZYTOTBINMZIYTGZZDUY | Yes      | String | The access token used to access the CelerData Cloud Private API. Format: `Bearer <access_token>`. |

See [Create an access token](../obtain_access_credentials.md#create-an-access-token).

## Response

### Sample response

```JSON
{
    "code": 20000,
    "data": {
        "action_id": "c4455747-6c88-4b89-a95d-addde7252e66"
    }
}
```

### Response elements

| Parameter | Sub-attribute | Example value                        | Type    | Description                                                  |
| --------- | ------------- | ------------------------------------ | ------- | ------------------------------------------------------------ |
| code      |               | 20000                                | Integer | The error code. If the error code returned is `20000`, the request succeeded. If any other error code is returned, the request failed. |
| data      | -             | -                                    | Object  | The result of the API call. The data object may not be returned for some API actions. It consists of the following elements: `account_idusagedetails`. |
|           | action_id     | c4455747-6c88-4b89-a95d-addde7252e66 | String  | The ID of the action.                                        |

## See also

Resuming a cluster may take a few minutes. After you make the preceding API call, you can query the status of the cluster by following the instructions provided in [Query status of a cluster](../actions/query_cluster_state.md).
