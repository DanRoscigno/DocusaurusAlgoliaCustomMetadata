# Query billing information of the logged-in account

Queries the billing information of the logged-in account.

## Request

| Basic information |                                                   |
| ----------------- | ------------------------------------------------- |
| HTTP URL          | `https://cloud-api.celerdata.com/api/1.0/bills`   |
| HTTP method       | GET                                               |
| Frequency         | 600/minute                                        |

### Header parameters

| **Parameter** | **Example value**                                       | **Required** | **Type** | **Description**                |
| ------------- | ------------------------------------------------------- | ------------ | -------- | ------------------------------ |
| Authorization | Bearer OGQ5MDA4MZGTNJMWNS0ZY2Y2LWFJNZYTOTBINMZIYTGZZDUY | Yes          | String   | The access token used to access the CelerData Cloud Private API. Format: `Bearer <access_token>`. |

See [Create an access token](../obtain_access_credentials.md#create-an-access-token).

### Query parameters

| **Parameter** | **Example value** | **Required** | **Type** | **Description**                                              |
| ------------- | ----------------- | ------------ | -------- | ------------------------------------------------------------ |
| start_month   | 202304            | Yes          | String   | The start month of the time range to query. Format: `yyyyMM`. |
| end_month     | 202307            | Yes          | String   | The end month of the time range to query. Format: `yyyyMM`.<br/>The `start_month` must be less than or equal to the `end_month`, and the result of subtracting `start_month` from `start_month` must range from 0 to 36. |

## Response

### Sample response

```JSON
{
    "code":20000,
    "data":{
        "account_id":"lbyx0bt7a",
        "begin_month":202304,
        "end_month":202307,
        "bill_list":[
            {
                "period":"202304",
                "account_id":"lbyx0bt7a",
                "charge_usage":"701.536682",
                "charge_price":"350.76",
                "bill_state":"PAID",
                "pay_state":"SUCCESS",
                "pay_method":"AccountBalance",
                "pay_info_details":[
                    {
                        "pay_method":"AccountBalance",
                        "amount":"701.536682",
                        "currency":"CCU",
                        "state":"SUCCESS"
                    }
                ]
            }
        ]
    }
}
```

### Response elements

| **Parameter**                                  | **Example value**                               | **Type** | **Description**                                              |
| ---------------------------------------------- | ----------------------------------------------- | -------- | ------------------------------------------------------------ |
| code                                           | 20000                                           | Integer  | The error code. If the error code returned is `20000`, the request succeeded. If any other error code is returned, the request failed. |
| data                                           | -                                               | Object   | The result of the API call. The `data` object may not be returned for some API actions. It consists of the following elements:<ul><li>account_id</li><li>begin_month</li><li>end_month</li><li>bill_list</li></ul> |
| data.account_id                                | lbyx0bt7a                                       | String   | The ID of the account queried.                               |
| data.begin_month                               | 202304                                          | Integer  | The start month of the time range queried.                   |
| data.end_month                                 | 202307                                          | Integer  | The end month of the time range queried.                     |
| data.bill_list                                 | -                                               | Array    | The billing details of the account over the selected time range. `bill_list` is an array that consists of one or more objects, each of which consists of the billing details on a specific month, depending on the number of months within the selected time range. |
| data.bill_list.0                               | -                                               | Object   | The billing details of the account on each specific month, which are presented as an object. Each object consists of the following elements:<ul><li>period</li><li>account_id</li><li>bill_state</li><li>charge_usage</li><li>charge_price</li><li>pay_state</li><li>pay_method</li><li>pay_info_details</li></ul> |
| data.bill_list.0.period                        | 202304                                          | String   | The billing month. Format: `yyyyMM`.                         |
| data.bill_list.0.account_id                    | lbyx0bt7a                                       | String   | The ID of the account queried.                               |
| data.bill_list.0.bill_state                    | PAID                                            | String   | The status of the bill. Valid values:<ul><li>`NOT_BILLED`: The bill has not been generated.</li><li>`BILLED`: The bill has been generated.</li><li>`WAIT_PAY`: The bill is waiting to be paid.</li><li>`PAYMENT_SUBMITTED`: The payment has been submitted.</li><li>`PAID`: The bill has been paid.</li><li>`ERROR`: The bill encounters errors.</li></ul> |
| data.bill_list.0.charge_usage                  | 701.536682                                      | String   | The usage charged to your account. Unit: CCU. This element is returned only when the return value of `bill_state` is `PAYMENT_SUBMITTED` or `PAID`. |
| data.bill_list.0.charge_price                  | 350.76                                          | String   | The amount charged to your account. Unit: USD. This element is returned only when the return value of `bill_state` is `PAYMENT_SUBMITTED` or `PAID`. |
| data.bill_list.0.pay_state                     | SUCCESS                                         | String   | The status of the payment. Valid values:<ul><li>`PROCESSING`: The payment is being processed.</li><li>`SUCCESS`: The payment has been completed.</li><li>`FAILED`: The payment failed.</li><li>`VOID`: The payment has been cancelled.</li></ul>This element is returned only when the return value of `bill_state` is `PAYMENT_SUBMITTED` or `PAID`. |
| data.bill_list.0.pay_method                    | AccountBalance                                  | String   | The payment method used. Valid values:<ul><li>`AccountBalance`: The bill is paid by using CCUs available within your account balance.</li><li>`CreditCard`: The bill is paid by using a credit card.</li><li>`CombinePay`: The bill is paid by using both CCUs and a credit card.</li></ul>This element is returned only when the return value of `bill_state` is `PAYMENT_SUBMITTED` or `PAID`. |
| data.bill_list.0.pay_info_details              | -                                               | Array    | The payment details. The `pay_info_details` element is an array that consists of one or more objects, each of which consists of the payment details of a specific payment method, depending on how many payment methods you have used as bundling payment to pay the bill.<ul><li>If the return value of `pay_method` is `AccountBalance` or `CreditCard`, the `pay_info_details` element consists of only one object.</li><li>If the return value of `pay_method` is `CombinePay`, the `pay_info_details` element consists of two objects: one object consists of the CCU-based payment details, and the other consists of the credit card-based payment details.</li></ul>This element is returned only when the return value of `bill_state` is `PAYMENT_SUBMITTED` or `PAID`. |
| data.bill_list.0.pay_info_details.0            | -                                               | Object   | The payment details, which are presented as an object. Each object consists of the following elements:<ul><li>pay_method</li><li>amount</li><li>currency</li><li>state</li></ul> |
| data.bill_list.0.pay_info_details.0.pay_method | AccountBalance                                  | String   | The payment method. Valid values:<ul><li>`AccountBalance`: The bill is paid by using CCUs available within your account balance.</li><li>`CreditCard`: The bill is paid by using a credit card.</li></ul> |
| data.bill_list.0.pay_info_details.0.amount     | 701.536682                                      | String   | The amount paid.                                             |
| data.bill_list.0.pay_info_details.0.currency   | CCU                                             | String   | The currency in which the payment is made. Valid values: `CCU` and `USD`. |
| data.bill_list.0.pay_info_details.0.state      | SUCCESS                                         | String   | The statement of the payment. Valid values:<ul><li>`PROCESSING`: The payment is being processed.</li><li>`SUCCESS`: The payment has been completed.</li><li>`FAILED`: The payment failed.</li><li>`VOID`: The payment has been cancelled.</li></ul> |
| message                                        | param end_month should less than current month. | String   | The error message. This element is returned only when the `code` returned is not `20000`.<br/>**NOTICE**<br/>Do not conclude whether a request succeeded or failed based on the return value of `message`. |
