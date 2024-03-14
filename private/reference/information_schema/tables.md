# tables

`tables` provides information about tables.

The following fields are provided in `tables`:

| **Field**       | **Description**                                              |
| --------------- | ------------------------------------------------------------ |
| TABLE_CATALOG   | Name of the catalog that stores the table.                   |
| TABLE_SCHEMA    | Name of the database that stores the table.                  |
| TABLE_NAME      | Name of the table.                                           |
| TABLE_TYPE      | Type of the table. Valid values: `BASE TABLE` or `VIEW`.     |
| ENGINE          | Engine type of the table. Valid values: `StarRocks`, "MySQL`, `MEMORY` or an empty string. |
| VERSION         | Applies to a feature not available in CelerData.             |
| ROW_FORMAT      | Applies to a feature not available in CelerData.             |
| TABLE_ROWS      | Row count of the table.                                      |
| AVG_ROW_LENGTH  | Average row length (size) of the table. It is equivalent to `DATA_LENGTH`/`TABLE_ROWS`. Unit: Byte. |
| DATA_LENGTH     | Data length (size) of the table. Unit: Byte.                 |
| MAX_DATA_LENGTH | Applies to a feature not available in CelerData.             |
| INDEX_LENGTH    | Applies to a feature not available in CelerData.             |
| DATA_FREE       | Applies to a feature not available in CelerData.             |
| AUTO_INCREMENT  | Applies to a feature not available in CelerData.             |
| CREATE_TIME     | The time when the table was created.                          |
| UPDATE_TIME     | The last time when the table was updated.                     |
| CHECK_TIME      | The last time when a consistency check was performed on the table. |
| TABLE_COLLATION | The default collation of the table.                          |
| CHECKSUM        | Applies to a feature not available in CelerData.             |
| CREATE_OPTIONS  | Applies to a feature not available in CelerData.             |
| TABLE_COMMENT   | Comment on the table.                                        |
