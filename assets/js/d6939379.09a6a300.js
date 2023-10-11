"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70859],{10359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),a=t(11151);const s={},r="Load data using INSERT",o={id:"loading/InsertInto",title:"Load data using INSERT",description:"This topic describes how to load data into StarRocks by using a SQL statement - INSERT.",source:"@site/versioned_docs/version-2.5/loading/InsertInto.md",sourceDirName:"loading",slug:"/loading/InsertInto",permalink:"/doc/docs/2.5/loading/InsertInto",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/loading/InsertInto.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Synchronize data from MySQL in real time",permalink:"/doc/docs/2.5/loading/Flink_cdc_load"},next:{title:"Introduction",permalink:"/doc/docs/2.5/loading/Json_loading"}},l={},d=[{value:"Precautions",id:"precautions",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Insert data via INSERT INTO VALUES",id:"insert-data-via-insert-into-values",level:2},{value:"Insert data via INSERT INTO SELECT",id:"insert-data-via-insert-into-select",level:2},{value:"Overwrite data via INSERT OVERWRITE VALUES",id:"overwrite-data-via-insert-overwrite-values",level:2},{value:"Overwrite data via INSERT OVERWRITE SELECT",id:"overwrite-data-via-insert-overwrite-select",level:2},{value:"Check the INSERT transaction status",id:"check-the-insert-transaction-status",level:2},{value:"Check via the result",id:"check-via-the-result",level:3},{value:"Check via SHOW LOAD",id:"check-via-show-load",level:3},{value:"Check via curl command",id:"check-via-curl-command",level:3},{value:"Configuration",id:"configuration",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",a:"a",ol:"ol",li:"li",blockquote:"blockquote",strong:"strong",h2:"h2",ul:"ul",code:"code",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"load-data-using-insert",children:"Load data using INSERT"}),"\n",(0,i.jsx)(n.p,{children:"This topic describes how to load data into StarRocks by using a SQL statement - INSERT."}),"\n",(0,i.jsxs)(n.p,{children:["Similar to MySQL and many other database management systems, StarRocks supports loading data to an internal table with INSERT. You can insert one or more rows directly with the VALUES clause to test a function or a DEMO. You can also insert data defined by the results of a query into an internal table from an ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/data_source/External_table",children:"external table"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"StarRocks v2.4 further supports overwriting data into a table by using INSERT OVERWRITE. The INSERT OVERWRITE statement integrates the following operations to implement the overwriting function:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creates temporary partitions according to the partitions that store the original data."}),"\n",(0,i.jsx)(n.li,{children:"Inserts data into the temporary partitions."}),"\n",(0,i.jsx)(n.li,{children:"Swaps the original partitions with the temporary partitions."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsx)(n.p,{children:"If you need to verify the data before overwriting it, instead of using INSERT OVERWRITE, you can follow the above procedures to overwrite your data and verify it before swapping the partitions."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Because INSERT transaction is synchronous, you can cancel it only by pressing the ",(0,i.jsx)(n.strong,{children:"Ctrl"})," and ",(0,i.jsx)(n.strong,{children:"C"})," keys from your MySQL client."]}),"\n",(0,i.jsxs)(n.li,{children:["As for the current version of StarRocks, the INSERT transaction fails by default if the data of any rows does not comply with the schema of the table. For example, the INSERT transaction fails if the length of a field in any row exceeds the length limit for the mapping field in the table. You can set the session variable ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," to ",(0,i.jsx)(n.code,{children:"false"})," to allow the transaction to continue by filtering out the rows that mismatch the table."]}),"\n",(0,i.jsxs)(n.li,{children:["If you execute the INSERT statement frequently to load small batches of data into StarRocks, excessive data versions are generated. It severely affects query performance. We recommend that, in production, you should not load data with the INSERT command too often or use it as a routine for data loading on a daily basis. If your application or analytic scenario demand solutions to loading streaming data or small data batches separately, we recommend you use Apache Kafka\xae as your data source and load the data via ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/loading/RoutineLoad",children:"Routine Load"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you execute the INSERT OVERWRITE statement, StarRocks creates temporary partitions for the partitions which store the original data, inserts new data into the temporary partitions, and ",(0,i.jsx)(n.a,{href:"../sql-statements/data-definition/ALTER%20TABLE.md#use-a-temporary-partition-to-replace-current-partition",children:"swaps the original partitions with the temporary partitions"}),". All these operations are executed in the FE Leader node. Hence, if the FE Leader node crashes while executing INSERT OVERWRITE command, the whole load transaction will fail, and the temporary partitions will be truncated."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsxs)(n.p,{children:["Create a database named ",(0,i.jsx)(n.code,{children:"load_test"}),", and create a table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," as the destination table and a table ",(0,i.jsx)(n.code,{children:"source_wiki_edit"})," as the source table."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:["Examples demonstrated in this topic are based on the table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," and the table ",(0,i.jsx)(n.code,{children:"source_wiki_edit"}),". If you prefer working with your own tables and data, you can skip the preparation and move on to the next step."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE DATABASE IF NOT EXISTS load_test;\nUSE load_test;\nCREATE TABLE insert_wiki_edit\n(\n    event_time DATETIME,\n    channel VARCHAR(32) DEFAULT '',\n    user VARCHAR(128) DEFAULT '',\n    is_anonymous TINYINT DEFAULT '0',\n    is_minor TINYINT DEFAULT '0',\n    is_new TINYINT DEFAULT '0',\n    is_robot TINYINT DEFAULT '0',\n    is_unpatrolled TINYINT DEFAULT '0',\n    delta INT DEFAULT '0',\n    added INT DEFAULT '0',\n    deleted INT DEFAULT '0'\n)\nDUPLICATE KEY\n(\n    event_time,\n    channel,\n    user,\n    is_anonymous,\n    is_minor,\n    is_new,\n    is_robot,\n    is_unpatrolled\n)\nPARTITION BY RANGE(event_time)\n(\n    PARTITION p06 VALUES LESS THAN ('2015-09-12 06:00:00'),\n    PARTITION p12 VALUES LESS THAN ('2015-09-12 12:00:00'),\n    PARTITION p18 VALUES LESS THAN ('2015-09-12 18:00:00'),\n    PARTITION p24 VALUES LESS THAN ('2015-09-13 00:00:00')\n)\nDISTRIBUTED BY HASH(user) BUCKETS 3;\n\nCREATE TABLE source_wiki_edit\n(\n    event_time DATETIME,\n    channel VARCHAR(32) DEFAULT '',\n    user VARCHAR(128) DEFAULT '',\n    is_anonymous TINYINT DEFAULT '0',\n    is_minor TINYINT DEFAULT '0',\n    is_new TINYINT DEFAULT '0',\n    is_robot TINYINT DEFAULT '0',\n    is_unpatrolled TINYINT DEFAULT '0',\n    delta INT DEFAULT '0',\n    added INT DEFAULT '0',\n    deleted INT DEFAULT '0'\n)\nDUPLICATE KEY\n(\n    event_time,\n    channel,\n    user,\n    is_anonymous,\n    is_minor,\n    is_new,\n    is_robot,\n    is_unpatrolled\n)\nPARTITION BY RANGE(event_time)\n(\n    PARTITION p06 VALUES LESS THAN ('2015-09-12 06:00:00'),\n    PARTITION p12 VALUES LESS THAN ('2015-09-12 12:00:00'),\n    PARTITION p18 VALUES LESS THAN ('2015-09-12 18:00:00'),\n    PARTITION p24 VALUES LESS THAN ('2015-09-13 00:00:00')\n)\nDISTRIBUTED BY HASH(user) BUCKETS 3;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"insert-data-via-insert-into-values",children:"Insert data via INSERT INTO VALUES"}),"\n",(0,i.jsxs)(n.p,{children:["You can append one or more rows to a specific table by using INSERT INTO VALUES command. Multiple rows are separated by comma (,). For detailed instructions and parameter references, see ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"SQL Reference - INSERT"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,i.jsxs)(n.p,{children:["Inserting data via INSERT INTO VALUES merely applies to the situation when you need to verify a DEMO with a small dataset. It is not recommended for a massive testing or production environment. To load mass data into StarRocks, see ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/loading/Loading_intro",children:"Ingestion Overview"})," for other options that suit your scenarios."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The following example inserts two rows into the data source table ",(0,i.jsx)(n.code,{children:"source_wiki_edit"})," with the label ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia"}),". Label is the unique identification label for each data load transaction within the database."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO source_wiki_edit\nWITH LABEL insert_load_wikipedia\nVALUES\n    ("2015-09-12 00:00:00","#en.wikipedia","AustinFF",0,0,0,0,0,21,5,0),\n    ("2015-09-12 00:00:00","#ca.wikipedia","helloSR",0,1,0,1,0,3,23,0);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"insert-data-via-insert-into-select",children:"Insert data via INSERT INTO SELECT"}),"\n",(0,i.jsxs)(n.p,{children:["You can load the result of a query on a data source table into the target table via INSERT INTO SELECT command. INSERT INTO SELECT command performs ETL operations on the data from the data source table, and loads the data into an internal table in StarRocks. The data source can be one or more internal or external tables. The target table MUST be an internal table in StarRocks. For detailed instructions and parameter references, see ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"SQL Reference - INSERT"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsx)(n.p,{children:"Inserting data from an external table is identical to inserting data from an internal table. For simplicity, we only demonstrate how to insert data from an internal table in the following examples."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following example inserts the data from the source table to the target table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO insert_wiki_edit\nWITH LABEL insert_load_wikipedia_1\nSELECT * FROM source_wiki_edit;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following example inserts the data from the source table to the ",(0,i.jsx)(n.code,{children:"p06"})," and ",(0,i.jsx)(n.code,{children:"p12"})," partitions of the target table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"}),". If no partition is specified, the data will be inserted into all partitions. Otherwise, the data will be inserted only into the specified partition(s)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO insert_wiki_edit PARTITION(p06, p12)\nWITH LABEL insert_load_wikipedia_2\nSELECT * FROM source_wiki_edit;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Query the target table to make sure there is data in them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"text",children:"MySQL > select * from insert_wiki_edit;\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user     | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #en.wikipedia | AustinFF |            0 |        0 |      0 |        0 |              0 |    21 |     5 |       0 |\n| 2015-09-12 00:00:00 | #ca.wikipedia | helloSR  |            0 |        1 |      0 |        1 |              0 |     3 |    23 |       0 |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you truncate the ",(0,i.jsx)(n.code,{children:"p06"})," and ",(0,i.jsx)(n.code,{children:"p12"})," partitions, the data will not be returned in a query."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > TRUNCATE TABLE insert_wiki_edit PARTITION(p06, p12);\nQuery OK, 0 rows affected (0.01 sec)\n\nMySQL > select * from insert_wiki_edit;\nEmpty set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following example inserts the ",(0,i.jsx)(n.code,{children:"event_time"})," and ",(0,i.jsx)(n.code,{children:"channel"})," columns from the source table to the target table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"}),". Default values are used in the columns that are not specified here."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO insert_wiki_edit\nWITH LABEL insert_load_wikipedia_3 \n(\n    event_time, \n    channel\n)\nSELECT event_time, channel FROM source_wiki_edit;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"overwrite-data-via-insert-overwrite-values",children:"Overwrite data via INSERT OVERWRITE VALUES"}),"\n",(0,i.jsxs)(n.p,{children:["You can overwrite a specific table with one or more rows by using INSERT OVERWRITE VALUES command. Multiple rows are separated by comma (,). For detailed instructions and parameter references, see ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"SQL Reference - INSERT"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,i.jsxs)(n.p,{children:["Overwriting data via INSERT OVERWRITE VALUES merely applies to the situation when you need to verify a DEMO with a small dataset. It is not recommended for a massive testing or production environment. To load mass data into StarRocks, see ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/loading/Loading_intro",children:"Ingestion Overview"})," for other options that suit your scenarios."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Query the source table and the target table to make sure there is data in them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT * FROM source_wiki_edit;\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user     | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #ca.wikipedia | helloSR  |            0 |        1 |      0 |        1 |              0 |     3 |    23 |       0 |\n| 2015-09-12 00:00:00 | #en.wikipedia | AustinFF |            0 |        0 |      0 |        0 |              0 |    21 |     5 |       0 |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.02 sec)\n \nMySQL > SELECT * FROM insert_wiki_edit;\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user     | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #ca.wikipedia | helloSR  |            0 |        1 |      0 |        1 |              0 |     3 |    23 |       0 |\n| 2015-09-12 00:00:00 | #en.wikipedia | AustinFF |            0 |        0 |      0 |        0 |              0 |    21 |     5 |       0 |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following example overwrites the source table ",(0,i.jsx)(n.code,{children:"source_wiki_edit"})," with two new rows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'INSERT OVERWRITE source_wiki_edit\nWITH LABEL insert_load_wikipedia_ow\nVALUES\n    ("2015-09-12 00:00:00","#cn.wikipedia","GELongstreet",0,0,0,0,0,36,36,0),\n    ("2015-09-12 00:00:00","#fr.wikipedia","PereBot",0,1,0,1,0,17,17,0);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"overwrite-data-via-insert-overwrite-select",children:"Overwrite data via INSERT OVERWRITE SELECT"}),"\n",(0,i.jsxs)(n.p,{children:["You can overwrite a table with the result of a query on a data source table via INSERT OVERWRITE SELECT command. INSERT OVERWRITE SELECT statement performs ETL operations on the data from one or more internal or external tables, and overwrites an internal table with the data For detailed instructions and parameter references, see ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"SQL Reference - INSERT"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsx)(n.p,{children:"Loading data from an external table is identical to loading data from an internal table. For simplicity, we only demonstrate how to overwrite the target table with the data from an internal table in the following examples."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Query the source table and the target table to make sure that they hold different rows of data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT * FROM source_wiki_edit;\n+---------------------+---------------+--------------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user         | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+--------------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #cn.wikipedia | GELongstreet |            0 |        0 |      0 |        0 |              0 |    36 |    36 |       0 |\n| 2015-09-12 00:00:00 | #fr.wikipedia | PereBot      |            0 |        1 |      0 |        1 |              0 |    17 |    17 |       0 |\n+---------------------+---------------+--------------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.02 sec)\n \nMySQL > SELECT * FROM insert_wiki_edit;\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user     | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #en.wikipedia | AustinFF |            0 |        0 |      0 |        0 |              0 |    21 |     5 |       0 |\n| 2015-09-12 00:00:00 | #ca.wikipedia | helloSR  |            0 |        1 |      0 |        1 |              0 |     3 |    23 |       0 |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following example overwrites the table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," with the data from the source table."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT OVERWRITE insert_wiki_edit\nWITH LABEL insert_load_wikipedia_ow_1\nSELECT * FROM source_wiki_edit;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following example overwrites the ",(0,i.jsx)(n.code,{children:"p06"})," and ",(0,i.jsx)(n.code,{children:"p12"})," partitions of the table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," with the data from the source table."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT OVERWRITE insert_wiki_edit PARTITION(p06, p12)\nWITH LABEL insert_load_wikipedia_ow_2\nSELECT * FROM source_wiki_edit;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Query the target table to make sure there is data in them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select * from insert_wiki_edit;\n+---------------------+---------------+--------------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user         | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+--------------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #fr.wikipedia | PereBot      |            0 |        1 |      0 |        1 |              0 |    17 |    17 |       0 |\n| 2015-09-12 00:00:00 | #cn.wikipedia | GELongstreet |            0 |        0 |      0 |        0 |              0 |    36 |    36 |       0 |\n+---------------------+---------------+--------------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you truncate the ",(0,i.jsx)(n.code,{children:"p06"})," and ",(0,i.jsx)(n.code,{children:"p12"})," partitions, the data will not be returned in a query."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > TRUNCATE TABLE insert_wiki_edit PARTITION(p06, p12);\nQuery OK, 0 rows affected (0.01 sec)\n\nMySQL > select * from insert_wiki_edit;\nEmpty set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following example overwrites the target table ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," with the ",(0,i.jsx)(n.code,{children:"event_time"})," and ",(0,i.jsx)(n.code,{children:"channel"})," columns from the source table. The default value is assigned to the columns into which no data is overwritten."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT OVERWRITE insert_wiki_edit\nWITH LABEL insert_load_wikipedia_ow_3 \n(\n    event_time, \n    channel\n)\nSELECT event_time, channel FROM source_wiki_edit;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"check-the-insert-transaction-status",children:"Check the INSERT transaction status"}),"\n",(0,i.jsx)(n.h3,{id:"check-via-the-result",children:"Check via the result"}),"\n",(0,i.jsx)(n.p,{children:"The INSERT transaction returns different status in accordance with the result of the transaction."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Transaction succeeds"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"StarRocks returns the following if the transaction succeeds:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"Query OK, 2 rows affected (0.05 sec)\n{'label':'insert_load_wikipedia', 'status':'VISIBLE', 'txnId':'1006'}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Transaction fails"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If all rows of data fail to be loaded into the target table, the INSERT transaction fails. StarRocks returns the following if the transaction fails:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"ERROR 1064 (HY000): Insert has filtered data in strict mode, tracking_url=http://x.x.x.x:yyyy/api/_load_error_log?file=error_log_9f0a4fd0b64e11ec_906bbede076e9d08\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can locate the problem by checking the log with ",(0,i.jsx)(n.code,{children:"tracking_url"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"check-via-show-load",children:"Check via SHOW LOAD"}),"\n",(0,i.jsxs)(n.p,{children:["You can check the INSERT transaction status by using ",(0,i.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW%20LOAD",children:"SHOW LOAD"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["The following example checks the status of the transaction with label ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'SHOW LOAD WHERE label="insert_load_wikipedia"\\G\n'})}),"\n",(0,i.jsx)(n.p,{children:"The return is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'*************************** 1. row ***************************\n         JobId: 10278\n         Label: insert_load_wikipedia\n         State: FINISHED\n      Progress: ETL:100%; LOAD:100%\n          Type: INSERT\n      Priority: NORMAL\n      ScanRows: 0\n  FilteredRows: 0\nUnselectedRows: 0\n      SinkRows: 2\n       EtlInfo: NULL\n      TaskInfo: resource:N/A; timeout(s):300; max_filter_ratio:0.0\n      ErrorMsg: NULL\n    CreateTime: 2023-06-12 18:31:07\n  EtlStartTime: 2023-06-12 18:31:07\n EtlFinishTime: 2023-06-12 18:31:07\n LoadStartTime: 2023-06-12 18:31:07\nLoadFinishTime: 2023-06-12 18:31:08\n   TrackingSQL: \n    JobDetails: {"All backends":{"3d96e21a-090c-11ee-9083-00163e0e2cf9":[10142]},"FileNumber":0,"FileSize":0,"InternalTableLoadBytes":175,"InternalTableLoadRows":2,"ScanBytes":0,"ScanRows":0,"TaskNumber":1,"Unfinished backends":{"3d96e21a-090c-11ee-9083-00163e0e2cf9":[]}}\n1 row in set (0.00 sec)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"check-via-curl-command",children:"Check via curl command"}),"\n",(0,i.jsx)(n.p,{children:"You can check the INSERT transaction status by using curl command."}),"\n",(0,i.jsx)(n.p,{children:"Launch a terminal, and execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"curl --location-trusted -u <username>:<password> \\\n  http://<fe_address>:<fe_http_port>/api/<db_name>/_load_info?label=<label_name>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following example checks the status of the transaction with label ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"curl --location-trusted -u <username>:<password> \\\n  http://x.x.x.x:8030/api/load_test/_load_info?label=insert_load_wikipedia\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:["If you use an account for which no password is set, you need to input only ",(0,i.jsx)(n.code,{children:"<username>:"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The return is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'{\n   "jobInfo":{\n      "dbName":"load_test",\n      "tblNames":[\n         "source_wiki_edit"\n      ],\n      "label":"insert_load_wikipedia",\n      "state":"FINISHED",\n      "failMsg":"",\n      "trackingUrl":""\n   },\n   "status":"OK",\n   "msg":"Success"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can set the following configuration items for INSERT transaction:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"FE configuration"})}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"FE configuration"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"insert_load_default_timeout_second"}),(0,i.jsx)(n.td,{children:"Default timeout for INSERT transaction. Unit: second. If the current INSERT transaction is not completed within the time set by this parameter, it will be canceled by the system and the status will be CANCELLED. As for current version of StarRocks, you can only specify a uniform timeout for all INSERT transactions using this parameter, and you cannot set a different timeout for a specific INSERT transaction. The default is 3600 seconds (1 hour). If the INSERT transaction cannot be completed within the specified time, you can extend the timeout by adjusting this parameter."})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Session variables"})}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Session variable"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enable_insert_strict"}),(0,i.jsxs)(n.td,{children:["Switch value to control if the INSERT transaction is tolerant of invalid data rows. When it is set to ",(0,i.jsx)(n.code,{children:"true"}),", the transaction fails if any of the data rows is invalid. When it is set to ",(0,i.jsx)(n.code,{children:"false"}),", the transaction succeeds when at least one row of data has been loaded correctly, and the label will be returned. The default is ",(0,i.jsx)(n.code,{children:"true"}),". You can set this variable with ",(0,i.jsx)(n.code,{children:"SET enable_insert_strict = {true or false};"})," command."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"query_timeout"}),(0,i.jsxs)(n.td,{children:["Timeout for SQL commands. Unit: second. INSERT, as a SQL command, is also restricted by this session variable. You can set this variable with the ",(0,i.jsx)(n.code,{children:"SET query_timeout = xxx;"})," command."]})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var i=t(67294);const a=i.createContext({});function s(e){const n=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:s(e),i.createElement(a.Provider,{value:o},n)}}}]);