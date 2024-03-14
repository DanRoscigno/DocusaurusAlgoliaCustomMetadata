# Query status of a cluster

Queries the status of a CelerData cluster.

## Request

| Basic information |                                                              |
| ----------------- | ------------------------------------------------------------ |
| HTTP URL          | `https://cloud-api.celerdata.com/api/1.0/clusters/:cluster_id/state` |
| HTTP method       | GET                                                          |
| Frequency         | 600/minute                                                   |

### Path variables

| Parameter  | Example value                        | Required | Type   | Description                                                  |
| ---------- | ------------------------------------ | -------- | ------ | ------------------------------------------------------------ |
| cluster_id | 4ae48a3f-f840-46fa-b0e7-0709a220fa40 | Yes      | String | The ID of the cluster. You can log in to the CelerData Cloud Private console and then navigate to the **Cluster properties** section of the cluster's **Overview** page to obtain the cluster ID. |

`:<variable_name>` indicates a URL path variable in web development tools such as Postman. `:cluster_id` in the above URL path, as such, indicates the ID of the cluster you want to query. However, if you use other tools such as curl, you need to replace `:cluster_id` with the actual cluster ID by hand in the `curl` command.

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
        "abnormal_reason": "",
        "cluster_state": "Suspended"
    }
}
```

### Response elements

| Parameter | Sub-attribute   | Example value | Type    | Description                                                  |
| --------- | --------------- | ------------- | ------- | ------------------------------------------------------------ |
| code      |                 | 20000         | Integer | The error code. If the error code returned is `20000`, the request succeeded. If any other error code is returned, the request failed. |
| data      | -               | -             | Object  | The result of the API call. The data object may not be returned for some API actions. It consists of the following elements: `account_idusagedetails`. |
|           | abnormal_reason | null          | String  | The reason why the cluster is abnormal. A value is returned for this element if the cluster is abnormal. |
|           | cluster_state   | Suspended     | String  | The status of the cluster. Valid values: <ul><li>`Abnormal`: The cluster is abnormal.</li><li> `Deploying`: The cluster is being deployed. </li><li>`Resuming`: The cluster is being resumed. </li><li>`Running`: The cluster is running. </li><li>`Scaling`: The cluster is being scaled. </li><li>`Suspending`: The cluster is being suspended. </li><li>`Suspended`: The cluster is suspended. </li><li>`Releasing`: The cluster is being released. </li><li>`Released`: The cluster is released.</li></ul> |
