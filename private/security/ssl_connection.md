# Use SSL connection

CelerData clusters support secure connections encrypted by SSL. Unlike the traditional cleartext connections to DBMS, SSL connections provide endpoint verification and data encryption to ensure that the data transmitted between clients and CelerData clusters cannot be read by unauthorized users.

CelerData clusters uses SSL certificates provided by the Certificate Authority Let's Encrypt, and supports authentication of up to the `VERIFY_IDENTITY` level.

Connections to CelerData clusters via API are encrypted by HTTPS, which secures the data loaded via Stream Load and exported using Spark connector and Flink connector. In addition, loading data via HTTPS avoids extra processing and the security issues of BE connection.

## Enable SSL connection for a CelerData cluster

Currently, you can enable SSL connection for a CelerData cluster only when creating it. See [Create a CelerData cluster](../get_started/create_cluster/create_cluster_aws.md) for more information.

## (Optional) Download CA certificate

If you want to connect to your CelerData cluster using a CA certificate for verification, you must [download the CA certificate](https://letsencrypt.org/certs/isrgrootx1.pem) first.

## Connect to an SSL-enabled cluster

You can connect to an SSL-enabled CelerData cluster using a MySQL client:

```Shell
mysql -h <cluster_endpoint> -P9030 --ssl-mode=<ssl_mode> \
    [--ssl-ca=<ca_certificate_file>] \
    -u <cluster_username> -p <cluster_password>
```

| **Parameter**       | **Description**                                              |
| ------------------- | ------------------------------------------------------------ |
| cluster_endpoint    | The endpoint of the CelerData cluster you want to connect to. You can view the endpoint of the cluster at the **Connection  properties** section on the **Overview** tab of the cluster details page. See [View CelerData clusters](../cluster_management/view_cluster.md) for more information. |
| ssl_mode            | The SSL mode with which you want to connect to the CelerData cluster. CelerData clusters supports the following SSL modes:<ul><li>`REQUIRED`: SSL connection is required.</li><li>`VERIFY_CA`: SSL connection is required. The cluster verifies the CA certificate.</li><li>`VERIFY_IDENTITY`:  SSL connection is required. The CelerData cluster verifies the CA certificate and the hostname in the certificate.</li></ul> |
| ca_certificate_file | The CA certificate file that you want to use for verification. You need to specify the CA certificate file if you have specified the `ssl_mode` parameter as `VERIFY_CA` or `VERIFY_IDENTITY`. |
| cluster_username    | The username used to connect to the cluster.                 |
| cluster_password    | The password used to connect to the cluster.                 |

## Load data into an SSL-enabled cluster using Stream Load

You can load data into an SSL-enabled cluster using Stream Load with the API encrypted by HTTPS.

```Shell
curl -i -H "label:<label_name>" -H "column_separator:<column_separator>" \
    -u <cluster_username>:<cluster_password> -T <data_file_name> \
    -X PUT https://<cluster_endpoint>/api/<db_name>/<table_name>/_stream_load
```

| **Parameter**    | **Description**                                              |
| ---------------- | ------------------------------------------------------------ |
| label_name       | The label of the load job. This parameter is optional. The CelerData cluster automatically generates a label for the load job if you do not specify it. The cluster does not allow you to use one label to load a data batch multiple times. As such, the cluster prevents the same data from being repeatedly loaded. By default, the cluster retains the labels of load jobs that were successfully completed over the most recent three days. |
| column_separator | The characters that are used in the data file to separate fields. If you do not specify this parameter, this parameter defaults to `\t`, which indicates tab. Make sure that the column separator you specify by using this parameter is the same as the column separator used in the data file. <br/>**NOTE** <br/>For CSV data, you can use a UTF-8 string, such as a comma (,), tab, or pipe (|), whose length does not exceed 50 bytes as a text delimiter. |
| cluster_username | The username used to connect to the cluster.                 |
| cluster_password | The password used to connect to the cluster.                 |
| data_file_name   | The name of the data file. You can optionally include the extension of the file name. |
| cluster_endpoint | The endpoint of the cluster.                                 |
| db_name          | The name of the destination database.                        |
| table_name       | The name of the destination table.                           |
