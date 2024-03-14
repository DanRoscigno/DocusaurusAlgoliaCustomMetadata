# DataGrip

DataGrip supports querying both internal data and external data in CelerData.

## Prerequisites

Make sure that your CelerData cluster's inbound rules allow query requests from your DataGrip server.

## Integration

Create a data source in DataGrip. Note that you must select MySQL as the data source.

![DataGrip - 1](../../assets/BI_integrations/BI_datagrip_1.png)

![DataGrip - 2](../../assets/BI_integrations/BI_datagrip_2.png)

The parameters that you need to configure are described as follows:

- **Host**: the endpoint of your CelerData cluster.
- **Port**: the query port of your CelerData cluster, for example, `9030`.
- **Authentication**: the authentication method that you want to use. Select **Username & Password**.
- **User**: the username that is used to log in to your CelerData cluster, for example, `admin`.
- **Password**: the password that is used to log in to your CelerData cluster.
- **Database**: the data source that you want to access in your CelerData cluster. The value of this parameter is in the `<catalog_name>.<database_name>` format.
  - `catalog_name`: the name of the target catalog in your CelerData cluster. Both internal and external catalogs are supported.
  - `database_name`: the name of the target database in your CelerData cluster. Both internal and external databases are supported.
