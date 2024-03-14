# Query CCU usage of the logged-in account

Queries the CCU usage of the logged-in account.

## Request

| Basic information |                                                    |
| ----------------- | -------------------------------------------------- |
| HTTP URL          | `https://cloud-api.celerdata.com/api/1.0/usages`   |
| HTTP method       | GET                                                |
| Frequency         | 600/minute                                         |

### Header parameters

| **Parameter** | **Example value**                                       | **Required** | **Type** | **Description**                |
| ------------- | ------------------------------------------------------- | ------------ | -------- | ------------------------------ |
| Authorization | Bearer OGQ5MDA4MZGTNJMWNS0ZY2Y2LWFJNZYTOTBINMZIYTGZZDUY | Yes          | String   | The access token used to access the CelerData Cloud Private API. Format: `Bearer <access_token>`. |

See [Create an access token](../obtain_access_credentials.md#create-an-access-token).

### Query parameters

| **Parameter** | **Example value** | **Required** | **Type** | **Description**                                              |
| ------------- | ----------------- | ------------ | -------- | ------------------------------------------------------------ |
| start_date    | 20230701          | Yes          | String   | The start date of the time range to query. Format: `yyyyMMdd`. |
| end_date      | 20230731          | Yes          | String   | The end date of the time range to query. Format: `yyyyMMdd`.<br/>The `start_date` must be less than or equal to the `end_date`, and the result of subtracting `start_date` from `start_date` must range from 0 to 31. |
| show_detail   | true              | No           | Boolean  | Whether to return CCU usage details on a daily basis.        |

## Response

### Sample response

```JSON
{
    "code":20000,
    "data":{
        "account_id":"lbyx0bt7a",
        "total_usage":"1534.833393",
        "details":[
            {
                "usage":"48.000000",
                "date":20230701
            }
        ]
    }
}
```

### Response elements

| **Parameter**        | **Example value**                           | **Type** | **Description**                                              |
| -------------------- | ------------------------------------------- | -------- | ------------------------------------------------------------ |
| code                 | 20000                                       | Integer  | The error code. If the error code returned is `20000`, the request succeeded. If any other error code is returned, the request failed. |
| data                 | -                                           | Object   | The result of the API call. The `data` object may not be returned for some API actions. It consists of the following elements:<ul><li>account_id</li><li>usage</li><li>details</li></ul> |
| data.account_id      | lbyx0bt7a                                   | String   | The ID of the account queried.                               |
| data.total_usage     | 1534.833393                                 | String   | The total CCU usage of the account over the selected time range. |
| data.details         | -                                           | Array    | The CCU usage details of the account over the selected time range. `details` is an array that consists of one or more objects, each of which consists of the CCU usage details on a specific date, depending on the number of days within the selected time range.<br/>The `details` array is returned only when the `show_detail` parameter in the request is set to `true`. |
| data.details.0       | -                                           | Object   | The CCU usage details of the account on each specific date, which are presented as an object. Each object consists of the following elements:<ul><li>usage</li><li>date</li></ul> |
| data.details.0.usage | 48.000000                                   | String   | The usage on a specific date.                                |
| data.details.0.date  | 20230701                                    | Integer  | The specific date.                                           |
| message              | The time range is out of limits.max:31 days | String   | The error message. This element is returned only when the `code` returned is not `20000`.<br/>**NOTICE**<br/>Do not conclude whether a request succeeded or failed based on the return value of `message`. |
