---
sidebar_position: 20
---

# Obtain access credentials

To increase API security, CelerData implements an access token mechanism. Before you make an API call, you must create an access token, which you can use as a header in your HTTP request. CelerData will authenticate your identity based on the access token when you make an API call.

## Create an access token

### Step 1: Generate an application key

1. Sign in to the [CelerData Cloud Private console](https://cloud.celerdata.com/login), and in the left-side navigation tree choose **Application keys**.

2. On the **Application keys** page, click **New a secret**.

3. In the dialog box that appears, optionally enter a description, and then click **Generate now** to generate an application key.

   > **NOTE**
   >
   > To facilitate the management of your application key, we recommend that you enter a description when creating a new application key.

4. Copy the **Secret** and **Client ID** for the application key and save them to a location that you can access later.

5. Click **OK, I have copied it** to close the dialog box.

### Step 2: Generate a base64 encoded string

Generate a base64 encoded string using the secret key and client ID you have obtained in the above step:

```SQL
echo -n <client_id>:<secret> | base64 | tr -d "\n"
```

Note that in the preceding command you must replace `<client_id>` and `<secret>` with the client ID and secret key you have obtained. Example:

```SQL
echo -n 50292c3c-2b95-417f-880d-0c7e8c26eac1:YOklxY24RKgveikknUI48RuHnkPsFit1u0i2TGyp | base64 | tr -d "\n"
```

A base64 encoded string like below is returned:

```SQL
NTAyOTJjM2MtMmI5NS00MTdmLTg4MGQtMGM3ZThjMjZlYWMxOllPa2x4WTI0UktndmVpa2tuVUk0OFJ1SG5rUHNGaXQxdTBpMlRHeXA=
```

### Step 3: Make an API call to create an access token

When you call the action for creating an access token, use the generated base64 encoded `<client_id>:<secret>` string as an `Authorization: Basic base64(<client_id>:<secret>)` header in the HTTP request. See [Create access token](../API/actions/create_access_token.md).

## Use an access token

When you make an API call to query specific resources, add the access token as an `Authorization: Bearer <access_token>` header to the HTTP request.
