# Understand your billing

Your CelerData billing is based on the total CCU usage, which is the sum of CelerData Cloud Units (CCUs) consumed by all clusters within your CelerData cloud account, and CelerData charges USD 0.5 per CCU for your CCU usage.

## How costs are calculated

CelerData bills you monthly. At each billing cycle which is based on the time in the UTC zone, that is, on the last day of each month, the total cost within the month is calculated as follows:

```Plain
Total cost = Total CCU usage * Unit price per CCU
```

## View the billing information of your account

Follow these steps to view the billing information of your account:

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login).
2. In the left-side navigation pane, choose **Usage and billing**.

   <img src="../assets/usage_and_billing.png" width="200"/>

3. On the **Overview** tab of the **Billing Dashboard** page, view the following billing information for your account:

   - **Payment details**

      This section displays your payment type and CCU balance. For more information about payment types and CCU balances, see [Manage your payments](#manage-your-payments).

   - **Basic information**

      - **Next Billing Time**: displays the deduction time for all expenses of the current billing cycle.
      - **Current Month Usage**: displays the CCU usage of your account within the current month.
      - **Current Month's Total Cost**: displays the total cost (in USD) of your account within the current month.

   - **Billing history**

     - **Billing period**: displays all billing periods. The billing information for the previous calendar month is collected at 00:00 on the first day of the following calendar month.
     - **CCU usage (Before discount)**: displays your CCU usage within the billing period before discounts are applied. The value is rounded up to 2 decimal places.
     - **CCU usage (After discount)**: displays your CCU usage within the billing period after discounts are applied. The value is rounded up to 2 decimal places.
     - **CCU balance cost**: displays the deduction from your CCU balance (exclusive to contract users) within the billing period. The value is rounded up to 2 decimal places.
     - **USD cost**: displays your payment (in USD) within the billing period.
     - **Payment status**: displays the status of the payment, including **Paid** and **Failed**.
     - **Operation**: You can click the More icon (**...**) and then choose **Download receipt** or **Download invoice** to download the receipt or invoice of the billing period if the payment is successful.
     - **Download All**: You can download all billing information including **Billing period**, **CCU usage (Before discount)**, **CCU usage (After discount)**, **CCU balance cost**, **USD cost**, and **Payment status** in your billing history.

     > **NOTE**
     >
     > You may see a difference of 0.01 between the CCU usage shown in **Billing history** and that shown in the invoices or receipts, because the previous one can be rounded up or down, but the latter one can only be rounded down. This difference is deducted from your actual CCU usage. To obtain your exact CCU usage without rounding, use the [CelerData Cloud Private API](../API/access_API.md).

## Manage your payments

Managing your payments efficiently is crucial when utilizing CelerData's services. By understanding payment options, deductions, and CCU balances in CelerData, you can optimize your usage and make informed decisions regarding your payments.

CelerData offers two payment types:

- **Direct billing**

  With direct billing, you can conveniently pay using your credit card, and your usage fee for each month is charged to your credit card at the next billing time.

  Direct billing users cannot make advance payments to obtain a CCU balance.

- **Contract**

  By contacting CelerData's sales team to enter into a contractual agreement with CelerData, you can become a contract user.

  Contract users are categorized as prepaid contract users and postpaid contract users.

  Prepaid contract users can receive additional discounts from CelerData as they choose to make advance payments for a CCU balance. They can also monitor their CCU balance on the CelerData Cloud Private console.

  If you start as a postpaid contract user, you can still contact CelerData's sales team during your journey with CelerData to make advance payments at a discounted price for a CCU balance.

Deductions are not processed in real time. You can plan your consumption based on your **Current Month Usage** and **Current Month's Total Cost**. If you have a non-zero CCU balance, your monthly consumption will be deducted from the balance first. Any excess portion beyond your CCU balance will be charged to your credit card.
