"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55135],{26217:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=a(85893),s=a(11151);const r={displayed_sidebar:"English"},l="DELETE",i={id:"sql-reference/sql-statements/data-manipulation/DELETE",title:"DELETE",description:"Deletes data rows from a table based on the specified conditions. The table can be a partitioned or non-partitioned table.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/DELETE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/DELETE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/DELETE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE ROUTINE LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD"},next:{title:"DROP TASK",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK"}},d={},o=[{value:"Usage notes",id:"usage-notes",level:2},{value:"Duplicate Key tables, Aggregate tables, and Unique Key tables",id:"duplicate-key-tables-aggregate-tables-and-unique-key-tables",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Limits",id:"limits",level:3},{value:"Impacts",id:"impacts",level:3},{value:"Examples",id:"examples",level:3},{value:"Create a table and insert data",id:"create-a-table-and-insert-data",level:4},{value:"Query data",id:"query-data",level:4},{value:"Delete data",id:"delete-data",level:4},{value:"Primary Key tables",id:"primary-key-tables",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Limits",id:"limits-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Create a table and insert data",id:"create-a-table-and-insert-data-1",level:4},{value:"Query data",id:"query-data-1",level:4},{value:"Delete data",id:"delete-data-1",level:4}];function c(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",h4:"h4"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"delete",children:"DELETE"}),"\n",(0,t.jsx)(n.p,{children:"Deletes data rows from a table based on the specified conditions. The table can be a partitioned or non-partitioned table."}),"\n",(0,t.jsxs)(n.p,{children:["For Duplicate Key tables, Aggregate tables, and Unique Key tables, you can delete data from specified partitions. However, Primary Key tables do not allow you to do so. From v2.3, Primary Key tables support complete ",(0,t.jsx)(n.code,{children:"DELETE...WHERE"})," semantics, which allows you to delete data rows based on the primary key, any column, or the results of a subquery. From v3.0, StarRocks enriches the ",(0,t.jsx)(n.code,{children:"DELETE...WHERE"})," semantics with multi-table joins and common table expressions (CTEs). If you need to join Primary Key tables with other tables in the database, you can reference these other tables in the USING clause or CTE."]}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You must have privileges on the table and database you want to perform DELETE."}),"\n",(0,t.jsx)(n.li,{children:"Frequent DELETE operations are not recommended. If needed, perform such operations during off-peak hours."}),"\n",(0,t.jsxs)(n.li,{children:["The DELETE operation only deletes data in the table. The table remains. To drop the table, run ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP_TABLE",children:"DROP TABLE"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"To prevent misoperations from deleting data in the entire table, you must specify the WHERE clause in the DELETE statement."}),"\n",(0,t.jsx)(n.li,{children:'The deleted rows are not immediately cleaned. They are marked as "deleted" and will be temporarily saved in Segment. Physically, the rows are removed only after data version merge (compaction) is completed.'}),"\n",(0,t.jsx)(n.li,{children:"This operation also deletes data of the materialized views that reference this table."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"duplicate-key-tables-aggregate-tables-and-unique-key-tables",children:"Duplicate Key tables, Aggregate tables, and Unique Key tables"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM  [<db_name>.]<table_name> [PARTITION <partition_name>]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"left",children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{align:"left",children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{align:"left",children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:(0,t.jsx)(n.code,{children:"db_name"})}),(0,t.jsx)(n.td,{align:"left",children:"No"}),(0,t.jsx)(n.td,{align:"left",children:"The database to which the destination table belongs. If this parameter is not specified, the current database is used by default."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:(0,t.jsx)(n.code,{children:"table_name"})}),(0,t.jsx)(n.td,{align:"left",children:"Yes"}),(0,t.jsx)(n.td,{align:"left",children:"The table from which you want to delete data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:(0,t.jsx)(n.code,{children:"partition_name"})}),(0,t.jsx)(n.td,{align:"left",children:"No"}),(0,t.jsx)(n.td,{align:"left",children:"The partition from which you want to delete data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:(0,t.jsx)(n.code,{children:"column_name"})}),(0,t.jsx)(n.td,{align:"left",children:"Yes"}),(0,t.jsx)(n.td,{align:"left",children:"The column you want to use as the DELETE condition. You can specify one or more columns."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:(0,t.jsx)(n.code,{children:"op"})}),(0,t.jsx)(n.td,{align:"left",children:"Yes"}),(0,t.jsxs)(n.td,{align:"left",children:["The operator used in the DELETE condition. The supported operators are ",(0,t.jsx)(n.code,{children:"="}),", ",(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:"<"}),", ",(0,t.jsx)(n.code,{children:">="}),", ",(0,t.jsx)(n.code,{children:"<="}),", ",(0,t.jsx)(n.code,{children:"!="}),", ",(0,t.jsx)(n.code,{children:"IN"}),", and ",(0,t.jsx)(n.code,{children:"NOT IN"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Duplicate Key tables, you can use ",(0,t.jsx)(n.strong,{children:"any column"})," as the DELETE condition. For Aggregate tables and Unique Key tables, only ",(0,t.jsx)(n.strong,{children:"key columns"})," can be used as the DELETE condition."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The conditions that you specify must be in the AND relation. If you want to specify conditions in OR relation, you must specify the conditions in separate DELETE statements."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For Duplicate Key tables, Aggregate tables, and Unique Key tables, the DELETE statement does not support using subquery results as conditions."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"impacts",children:"Impacts"}),"\n",(0,t.jsx)(n.p,{children:"After you execute the DELETE statement, the query performance of your cluster may deteriorate for a period of time (before compaction is completed). The degree of deterioration varies based on the number of conditions that you specify. A larger number of conditions indicates a higher degree of deterioration."}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h4,{id:"create-a-table-and-insert-data",children:"Create a table and insert data"}),"\n",(0,t.jsx)(n.p,{children:"The following example creates a partitioned Duplicate Key table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE `my_table` (\n    `date` date NOT NULL,\n    `k1` int(11) NOT NULL COMMENT \"\",\n    `k2` varchar(65533) NULL DEFAULT \"\" COMMENT \"\")\nDUPLICATE KEY(`date`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION p1 VALUES [('2022-03-11'), ('2022-03-12')),\n    PARTITION p2 VALUES [('2022-03-12'), ('2022-03-13'))\n)\nDISTRIBUTED BY HASH(`date`)\nPROPERTIES\n(\"replication_num\" = \"3\");\n\nINSERT INTO `my_table` VALUES\n('2022-03-11', 3, 'abc'),\n('2022-03-11', 2, 'acb'),\n('2022-03-11', 4, 'abc'),\n('2022-03-12', 2, 'bca'),\n('2022-03-12', 4, 'cba'),\n('2022-03-12', 5, 'cba');\n"})}),"\n",(0,t.jsx)(n.h4,{id:"query-data",children:"Query data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"select * from my_table order by date;\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    3 | abc  |\n| 2022-03-11 |    2 | acb  |\n| 2022-03-11 |    4 | abc  |\n| 2022-03-12 |    2 | bca  |\n| 2022-03-12 |    4 | cba  |\n| 2022-03-12 |    5 | cba  |\n+------------+------+------+\n"})}),"\n",(0,t.jsx)(n.h4,{id:"delete-data",children:"Delete data"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data from a specified partition"})}),"\n",(0,t.jsxs)(n.p,{children:["Delete rows whose ",(0,t.jsx)(n.code,{children:"k1"})," values are ",(0,t.jsx)(n.code,{children:"3"})," from the ",(0,t.jsx)(n.code,{children:"p1"})," partition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"DELETE FROM my_table PARTITION p1\nWHERE k1 = 3;\n\n-- The query result shows rows whose `k1` values are `3` are deleted.\n\nselect * from my_table partition (p1);\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    2 | acb  |\n| 2022-03-11 |    4 | abc  |\n+------------+------+------+\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data from a specified partition using AND"})}),"\n",(0,t.jsxs)(n.p,{children:["Delete rows whose ",(0,t.jsx)(n.code,{children:"k1"})," values are greater than or equal to ",(0,t.jsx)(n.code,{children:"3"})," and whose ",(0,t.jsx)(n.code,{children:"k2"})," values are ",(0,t.jsx)(n.code,{children:'"abc"'})," from the ",(0,t.jsx)(n.code,{children:"p1"})," partition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n\nselect * from my_table partition (p1);\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    2 | acb  |\n+------------+------+------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data from all partitions"})}),"\n",(0,t.jsxs)(n.p,{children:["Delete rows whose ",(0,t.jsx)(n.code,{children:"k2"})," values are ",(0,t.jsx)(n.code,{children:'"abc"'})," or ",(0,t.jsx)(n.code,{children:'"cba"'})," from all partitions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'DELETE FROM my_table\nWHERE  k2 in ("abc", "cba");\n\nselect * from my_table order by date;\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    2 | acb  |\n| 2022-03-12 |    2 | bca  |\n+------------+------+------+\n'})}),"\n",(0,t.jsx)(n.h2,{id:"primary-key-tables",children:"Primary Key tables"}),"\n",(0,t.jsxs)(n.p,{children:["From v2.3, Primary Key tables support complete ",(0,t.jsx)(n.code,{children:"DELETE...WHERE"})," semantics, which allows you to delete data rows based on the primary key, any column, or a subquery."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"[ WITH <with_query> [, ...] ]\nDELETE FROM <table_name>\n[ USING <from_item> [, ...] ]\n[ WHERE <where_condition> ]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center",children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{align:"left",children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{align:"left",children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.code,{children:"with_query"})}),(0,t.jsx)(n.td,{align:"left",children:"No"}),(0,t.jsx)(n.td,{align:"left",children:"One or more CTEs that can be referenced by name in a DELETE statement. CTEs are temporary result sets that can improve the readability of complex statements."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.code,{children:"table_name"})}),(0,t.jsx)(n.td,{align:"left",children:"Yes"}),(0,t.jsx)(n.td,{align:"left",children:"The table from which you want to delete data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.code,{children:"from_item"})}),(0,t.jsx)(n.td,{align:"left",children:"No"}),(0,t.jsxs)(n.td,{align:"left",children:["One or more other tables in the database. These tables can be joined with the table being operated based on the condition specified in the WHERE clause. Based on the result set of the join query, StarRocks deletes the matched rows from the table being operated. For example, if the USING clause is ",(0,t.jsx)(n.code,{children:"USING t1 WHERE t0.pk = t1.pk;"}),", StarRocks converts the table expression in the USING clause to ",(0,t.jsx)(n.code,{children:"t0 JOIN t1 ON t0.pk=t1.pk;"})," when executing the DELETE statement."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.code,{children:"where_condition"})}),(0,t.jsx)(n.td,{align:"left",children:"Yes"}),(0,t.jsx)(n.td,{align:"left",children:"The condition based on which you want to delete rows. Only rows that meet the WHERE condition can be deleted. This parameter is required, because it helps prevent you from accidentally deleting the entire table. If you want to delete the entire table, you can use 'WHERE true'."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"limits-1",children:"Limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The following comparison operators are supported: ",(0,t.jsx)(n.code,{children:"="}),", ",(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:"<"}),", ",(0,t.jsx)(n.code,{children:">="}),", ",(0,t.jsx)(n.code,{children:"<="}),", ",(0,t.jsx)(n.code,{children:"!="}),", ",(0,t.jsx)(n.code,{children:"IN"}),", ",(0,t.jsx)(n.code,{children:"NOT IN"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The following logical operators are supported: ",(0,t.jsx)(n.code,{children:"AND"})," and ",(0,t.jsx)(n.code,{children:"OR"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You cannot use the DELETE statement to run concurrent DELETE operations or to delete data at data loading. If you perform such operations, the atomicity, consistency, isolation, and durability (ACID) of transactions may not be ensured."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(n.h4,{id:"create-a-table-and-insert-data-1",children:"Create a table and insert data"}),"\n",(0,t.jsxs)(n.p,{children:["Create a Primary Key table named ",(0,t.jsx)(n.code,{children:"score_board"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `score_board` (\n  `id` int(11) NOT NULL COMMENT "",\n  `name` varchar(65533) NULL DEFAULT "" COMMENT "",\n  `score` int(11) NOT NULL DEFAULT "0" COMMENT ""\n) ENGINE=OLAP\nPRIMARY KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT",\n"enable_persistent_index" = "false"\n);\n\nINSERT INTO score_board VALUES\n(0, \'Jack\', 21),\n(1, \'Bob\', 21),\n(2, \'Stan\', 21),\n(3, \'Sam\', 22);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"query-data-1",children:"Query data"}),"\n",(0,t.jsxs)(n.p,{children:["Execute the following statement to insert data into the ",(0,t.jsx)(n.code,{children:"score_board"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    0 | Jack |   21 |\n|    1 | Bob  |   21 |\n|    2 | Stan |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n4 rows in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"delete-data-1",children:"Delete data"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data by primary key"})}),"\n",(0,t.jsx)(n.p,{children:"You can specify the primary key in the DELETE statement, so StarRocks does not need to scan the entire table."}),"\n",(0,t.jsxs)(n.p,{children:["Delete rows whose ",(0,t.jsx)(n.code,{children:"id"})," values are ",(0,t.jsx)(n.code,{children:"0"})," from the ",(0,t.jsx)(n.code,{children:"score_board"})," table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"DELETE FROM score_board WHERE id = 0;\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    1 | Bob  |   21 |\n|    2 | Stan |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data by condition"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Delete rows whose ",(0,t.jsx)(n.code,{children:"score"})," values are ",(0,t.jsx)(n.code,{children:"22"})," from the ",(0,t.jsx)(n.code,{children:"score_board"})," table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"DELETE FROM score_board WHERE score = 22;\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    0 | Jack |   21 |\n|    1 | Bob  |   21 |\n|    2 | Stan |   21 |\n+------+------+------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Delete rows whose ",(0,t.jsx)(n.code,{children:"score"})," values are less than ",(0,t.jsx)(n.code,{children:"22"})," from the ",(0,t.jsx)(n.code,{children:"score_board"})," table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"DELETE FROM score_board WHERE score < 22;\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    3 | Sam  |   22 |\n+------+------+------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: Delete rows whose ",(0,t.jsx)(n.code,{children:"score"})," values are less than ",(0,t.jsx)(n.code,{children:"22"})," and whose ",(0,t.jsx)(n.code,{children:"name"})," values are not ",(0,t.jsx)(n.code,{children:"Bob"})," from the ",(0,t.jsx)(n.code,{children:"score_board"})," table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'DELETE FROM score_board WHERE score < 22 and name != "Bob";\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    1 | Bob  |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data by subquery result"})}),"\n",(0,t.jsxs)(n.p,{children:["You can nest one or more subqueries in the ",(0,t.jsx)(n.code,{children:"DELETE"})," statement and use the subquery results as conditions."]}),"\n",(0,t.jsxs)(n.p,{children:["Before you delete data, execute the following statement to create another table named ",(0,t.jsx)(n.code,{children:"users"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `users` (\n  `uid` int(11) NOT NULL COMMENT "",\n  `name` varchar(65533) NOT NULL COMMENT "",\n  `country` varchar(65533) NULL COMMENT ""\n) ENGINE=OLAP\nPRIMARY KEY(`uid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`uid`)\nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT",\n"enable_persistent_index" = "false"\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Insert data into the ",(0,t.jsx)(n.code,{children:"users"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO users VALUES\n(0, "Jack", "China"),\n(2, "Stan", "USA"),\n(1, "Bob", "China"),\n(3, "Sam", "USA");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"select * from users;\n+------+------+---------+\n| uid  | name | country |\n+------+------+---------+\n|    0 | Jack | China   |\n|    1 | Bob  | China   |\n|    2 | Stan | USA     |\n|    3 | Sam  | USA     |\n+------+------+---------+\n4 rows in set (0.00 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Nest a subquery to find the rows whose ",(0,t.jsx)(n.code,{children:"country"})," values are ",(0,t.jsx)(n.code,{children:"China"})," from the ",(0,t.jsx)(n.code,{children:"users"})," table, and delete the rows, which have the same ",(0,t.jsx)(n.code,{children:"name"})," values as the rows returned from the subquery, from the ",(0,t.jsx)(n.code,{children:"score_board"})," table. You can use one of the following methods to fulfill the purpose:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Method 1"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'DELETE FROM score_board\nWHERE name IN (select name from users where country = "China");\n    \nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    2 | Stan |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Method 2"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'DELETE FROM score_board\nWHERE EXISTS (select name from users\n              where score_board.name = users.name and country = "China");\n    \nselect * from score_board;\n+------+------+-------+\n| id   | name | score |\n+------+------+-------+\n|    2 | Stan |    21 |\n|    3 | Sam  |    22 |\n+------+------+-------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete data by using multi-table join or CTE"})}),"\n",(0,t.jsx)(n.p,{children:'To delete all movies produced by the producer "foo", you can execute the following statement:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM films USING producers\nWHERE producer_id = producers.id\n    AND producers.name = 'foo';\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also use a CTE to rewrite the above statement to improve readability."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"WITH foo_producers as (\n    SELECT * from producers\n    where producers.name = 'foo'\n)\nDELETE FROM films USING foo_producers\nWHERE producer_id = foo_producers.id;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>i,ah:()=>r});var t=a(67294);const s=t.createContext({});function r(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||l:r(e),t.createElement(s.Provider,{value:i},n)}}}]);