# System limits

This topic describes the rules and limits that apply when you use CelerData.

- CelerData uses the MySQL protocol for communication. You can connect to the CelerData cluster via a MySQL client or JDBC. We recommend that you use a MySQL client whose version is 5.1 or later. Versions earlier than 5.1 do not support usernames that are longer than 16 characters.

- Naming conventions for clusters, databases, tables, views, columns, partitions, usernames, and roles:

  - The names can only consist of digits (0-9), letters (a-z or A-Z), and underscores (\_). **Usernames can be all digits.**
  - The name cannot exceed 64 characters in length. **The column name, table name, and database name cannot exceed 1023 characters in length.**
  - Except for column names, other names must start with a lowercase or uppercase letter.
  - Column names can start with an underscore (\_).
  - Database, table, and view names are case-sensitive. Column names are **not** case-sensitive.

- Password requirements for members:

  - The password can contain uppercase letters (A-Z), lowercase letters (a-z), and digits (0-9).
  - The password must contain at least eight characters, including at least one letter and at least one digit.
  - The password cannot contain four identical or consecutive letters or digits like `11111`, `12345`, `abcde`, or `qwert`.

- Naming conventions for labels:
  You can specify the label of a job when you import data. The label name can consist of underscores (\_), letters (a-z or A-Z), and digits (0-9), and cannot exceed 128 characters in length. The label name has no requirement for the starting character.

- When you create a table, the key column cannot be of the FLOAT or DOUBLE type. You can use the DECIMAL type to represent decimals.

- The maximum length of a VARCHAR value ranges from 1 to 1048576 bytes. Maximum length of a VARCHAR value = Maximum row size (1048578 bytes) - Length prefix (2 bytes). The length prefix indicates the number of bytes in the value.

The default length is 1 byte.

- CelerData supports only UTF-8 encoding, not GBK.

- CelerData does not support modifying column names in tables.

- By default, a query can be nested with a maximum of 10,000 subqueries.
