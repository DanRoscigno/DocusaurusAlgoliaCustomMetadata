"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56417],{25167:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var t=n(85893),o=n(11151);const s={},d="Transform data at loading",r={id:"loading/Etl_in_loading",title:"Transform data at loading",description:"StarRocks supports data transformation at loading.",source:"@site/versioned_docs/version-3.0/loading/Etl_in_loading.md",sourceDirName:"loading",slug:"/loading/Etl_in_loading",permalink:"/doc/en/3.0/loading/Etl_in_loading",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/Etl_in_loading.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"DataX writer",permalink:"/doc/en/3.0/loading/DataX-starrocks-writer"},next:{title:"Continuously load data from Apache Flink\xae",permalink:"/doc/en/3.0/loading/Flink-connector-starrocks"}},l={},i=[{value:"Scenarios",id:"scenarios",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine load",id:"routine-load",level:3},{value:"Data examples",id:"data-examples",level:2},{value:"Skip columns that do not need to be loaded",id:"skip-columns-that-do-not-need-to-be-loaded",level:2},{value:"Load data",id:"load-data",level:3},{value:"Load data from a local file system",id:"load-data-from-a-local-file-system",level:4},{value:"Load data from an HDFS cluster",id:"load-data-from-an-hdfs-cluster",level:4},{value:"Load data from a Kafka cluster",id:"load-data-from-a-kafka-cluster",level:4},{value:"Query data",id:"query-data",level:3},{value:"Filter out rows that you do not want to load",id:"filter-out-rows-that-you-do-not-want-to-load",level:2},{value:"Load data",id:"load-data-1",level:3},{value:"Load data from a local file system",id:"load-data-from-a-local-file-system-1",level:4},{value:"Load data from an HDFS cluster",id:"load-data-from-an-hdfs-cluster-1",level:4},{value:"Load data from a Kafka cluster",id:"load-data-from-a-kafka-cluster-1",level:4},{value:"Query data",id:"query-data-1",level:3},{value:"Generate new columns from original columns",id:"generate-new-columns-from-original-columns",level:2},{value:"Load data",id:"load-data-2",level:3},{value:"Load data from a local file system",id:"load-data-from-a-local-file-system-2",level:4},{value:"Load data from an HDFS cluster",id:"load-data-from-an-hdfs-cluster-2",level:4},{value:"Load data from a Kafka cluster",id:"load-data-from-a-kafka-cluster-2",level:4},{value:"Query data",id:"query-data-2",level:3},{value:"Extract partition field values from a file path",id:"extract-partition-field-values-from-a-file-path",level:2},{value:"Load data from an HDFS cluster",id:"load-data-from-an-hdfs-cluster-3",level:3},{value:"Query data",id:"query-data-3",level:3}];function c(e){const a=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",ol:"ol",pre:"pre",h4:"h4"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"transform-data-at-loading",children:"Transform data at loading"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks supports data transformation at loading."}),"\n",(0,t.jsxs)(a.p,{children:["This feature supports ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/StreamLoad",children:"Stream Load"}),", ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/BrokerLoad",children:"Broker Load"}),", and ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/RoutineLoad",children:"Routine Load"})," but does not support ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/SparkLoad",children:"Spark Load"}),"."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTICE"})}),"\n",(0,t.jsxs)(a.p,{children:["You can load data into StarRocks tables only as a user who has the INSERT privilege on those StarRocks tables. If you do not have the INSERT privilege, follow the instructions provided in ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to grant the INSERT privilege to the user that you use to connect to your StarRocks cluster."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"This topic uses CSV data as an example to describe how to extract and transform data at loading. The data file formats that are supported vary depending on the loading method of your choice."}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"For CSV data, you can use a UTF-8 string, such as a comma (,), tab, or pipe (|), whose length does not exceed 50 bytes as a text delimiter."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,t.jsx)(a.p,{children:"When you load a data file into a StarRocks table, the data of the data file may not be completely mapped onto the data of the StarRocks table. In this situation, you do not need to extract or transform the data before you load it into the StarRocks table. StarRocks can help you extract and transform the data during loading:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Skip columns that do not need to be loaded."}),"\n",(0,t.jsx)(a.p,{children:"You can skip the columns that do not need to be loaded. Additionally, if the columns of the data file are in a different order than the columns of the StarRocks table, you can create a column mapping between the data file and the StarRocks table."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Filter out rows you do not want to load."}),"\n",(0,t.jsx)(a.p,{children:"You can specify filter conditions based on which StarRocks filters out the rows that you do not want to load."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Generate new columns from original columns."}),"\n",(0,t.jsx)(a.p,{children:"Generated columns are special columns that are computed from the original columns of the data file. You can map the generated columns onto the columns of the StarRocks table."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Extract partition field values from a file path."}),"\n",(0,t.jsx)(a.p,{children:"If the data file is generated from Apache Hive\u2122, you can extract partition field values from the file path."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(a.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:['See the "Background information" section in ',(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/BrokerLoad",children:"Load data from HDFS or cloud storage"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"routine-load",children:"Routine load"}),"\n",(0,t.jsxs)(a.p,{children:["If you choose ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/RoutineLoad",children:"Routine Load"}),", make sure that topics are created in your Apache Kafka\xae cluster. Assume that you have created two topics: ",(0,t.jsx)(a.code,{children:"topic1"})," and ",(0,t.jsx)(a.code,{children:"topic2"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"data-examples",children:"Data examples"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Create data files in your local file system."}),"\n",(0,t.jsxs)(a.p,{children:["a. Create a data file named ",(0,t.jsx)(a.code,{children:"file1.csv"}),". The file consists of four columns, which represent user ID, user gender, event date, and event type in sequence."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:"354,female,2020-05-20,1\n465,male,2020-05-21,2\n576,female,2020-05-22,1\n687,male,2020-05-23,2\n"})}),"\n",(0,t.jsxs)(a.p,{children:["b. Create a data file named ",(0,t.jsx)(a.code,{children:"file2.csv"}),". The file consists of only one column, which represents date."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:"2020-05-20\n2020-05-21\n2020-05-22\n2020-05-23\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Create tables in your StarRocks database ",(0,t.jsx)(a.code,{children:"test_db"}),"."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["a. Create a table named ",(0,t.jsx)(a.code,{children:"table1"}),", which consists of three columns: ",(0,t.jsx)(a.code,{children:"event_date"}),", ",(0,t.jsx)(a.code,{children:"event_type"}),", and ",(0,t.jsx)(a.code,{children:"user_id"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'MySQL [test_db]> CREATE TABLE table1\n(\n    `event_date` DATE COMMENT "event date",\n    `event_type` TINYINT COMMENT "event type",\n    `user_id` BIGINT COMMENT "user ID"\n)\nDISTRIBUTED BY HASH(user_id);\n'})}),"\n",(0,t.jsxs)(a.p,{children:["b. Create a table named ",(0,t.jsx)(a.code,{children:"table2"}),", which consists of four columns: ",(0,t.jsx)(a.code,{children:"date"}),", ",(0,t.jsx)(a.code,{children:"year"}),", ",(0,t.jsx)(a.code,{children:"month"}),", and ",(0,t.jsx)(a.code,{children:"day"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'MySQL [test_db]> CREATE TABLE table2\n(\n    `date` DATE COMMENT "date",\n    `year` INT COMMENT "year",\n    `month` TINYINT COMMENT "month",\n    `day` TINYINT COMMENT "day"\n)\nDISTRIBUTED BY HASH(date);\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Upload ",(0,t.jsx)(a.code,{children:"file1.csv"})," and ",(0,t.jsx)(a.code,{children:"file2.csv"})," to the ",(0,t.jsx)(a.code,{children:"/user/starrocks/data/input/"})," path of your HDFS cluster, publish the data of ",(0,t.jsx)(a.code,{children:"file1.csv"})," to ",(0,t.jsx)(a.code,{children:"topic1"})," of your Kafka cluster, and publish the data of ",(0,t.jsx)(a.code,{children:"file2.csv"})," to ",(0,t.jsx)(a.code,{children:"topic2"})," of your Kafka cluster."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"skip-columns-that-do-not-need-to-be-loaded",children:"Skip columns that do not need to be loaded"}),"\n",(0,t.jsx)(a.p,{children:"The data file that you want to load into a StarRocks table may contain some columns that cannot be mapped to any columns of the StarRocks table. In this situation, StarRocks supports loading only the columns that can be mapped from the data file onto the columns of the StarRocks table."}),"\n",(0,t.jsx)(a.p,{children:"This feature supports loading data from the following data sources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Local file system"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"HDFS and cloud storage"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"This section uses HDFS as an example."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Kafka"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["In most cases, the columns of a CSV file are not named. For some CSV files, the first row is composed of column names, but StarRocks processes the content of the first row as common data rather than column names. Therefore, when you load a CSV file, you must temporarily name the columns of the CSV file ",(0,t.jsx)(a.strong,{children:"in sequence"})," in the job creation statement or command. These temporarily named columns are mapped ",(0,t.jsx)(a.strong,{children:"by name"})," onto the columns of the StarRocks table. Take note of the following points about the columns of the data file:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"The data of the columns that can be mapped onto and are temporarily named by using the names of the columns in the StarRocks table is directly loaded."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"The columns that cannot be mapped onto the columns of the StarRocks table are ignored, the data of these columns are not loaded."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"If some columns can be mapped onto the columns of the StarRocks table but are not temporarily named in the job creation statement or command, the load job reports errors."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["This section uses ",(0,t.jsx)(a.code,{children:"file1.csv"})," and ",(0,t.jsx)(a.code,{children:"table1"})," as an example. The four columns of ",(0,t.jsx)(a.code,{children:"file1.csv"})," are temporarily named as ",(0,t.jsx)(a.code,{children:"user_id"}),", ",(0,t.jsx)(a.code,{children:"user_gender"}),", ",(0,t.jsx)(a.code,{children:"event_date"}),", and ",(0,t.jsx)(a.code,{children:"event_type"})," in sequence. Among the temporarily named columns of ",(0,t.jsx)(a.code,{children:"file1.csv"}),", ",(0,t.jsx)(a.code,{children:"user_id"}),", ",(0,t.jsx)(a.code,{children:"event_date"}),", and ",(0,t.jsx)(a.code,{children:"event_type"})," can be mapped onto specific columns of ",(0,t.jsx)(a.code,{children:"table1"}),", whereas ",(0,t.jsx)(a.code,{children:"user_gender"})," cannot be mapped onto any column of ",(0,t.jsx)(a.code,{children:"table1"}),". Therefore, ",(0,t.jsx)(a.code,{children:"user_id"}),", ",(0,t.jsx)(a.code,{children:"event_date"}),", and ",(0,t.jsx)(a.code,{children:"event_type"})," are loaded into ",(0,t.jsx)(a.code,{children:"table1"}),", but ",(0,t.jsx)(a.code,{children:"user_gender"})," is not."]}),"\n",(0,t.jsx)(a.h3,{id:"load-data",children:"Load data"}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-a-local-file-system",children:"Load data from a local file system"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"file1.csv"})," is stored in your local file system, run the following command to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/StreamLoad",children:"Stream Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> \\\n    -H "Expect:100-continue" \\\n    -H "column_separator:," \\\n    -H "columns: user_id, user_gender, event_date, event_type" \\\n    -T file1.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table1/_stream_load\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["If you choose Stream Load, you must use the ",(0,t.jsx)(a.code,{children:"columns"})," parameter to temporarily name the columns of the data file to create a column mapping between the data file and the StarRocks table."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-an-hdfs-cluster",children:"Load data from an HDFS cluster"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"file1.csv"})," is stored in your HDFS cluster, execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/BrokerLoad",children:"Broker Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label1\n(\n    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/data/input/file1.csv")\n    INTO TABLE `table1`\n    FORMAT AS "csv"\n    COLUMNS TERMINATED BY ","\n    (user_id, user_gender, event_date, event_type)\n)\nWITH BROKER "broker1";\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["If you choose Broker Load, you must use the ",(0,t.jsx)(a.code,{children:"column_list"})," parameter to temporarily name the columns of the data file to create a column mapping between the data file and the StarRocks table."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-a-kafka-cluster",children:"Load data from a Kafka cluster"}),"\n",(0,t.jsxs)(a.p,{children:["If the data of ",(0,t.jsx)(a.code,{children:"file1.csv"})," is published to ",(0,t.jsx)(a.code,{children:"topic1"})," of your Kafka cluster, execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/RoutineLoad",children:"Routine Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD test_db.table101 ON table1\n    COLUMNS TERMINATED BY ",",\n    COLUMNS(user_id, user_gender, event_date, event_type)\nFROM KAFKA\n(\n    "kafka_broker_list" = "<kafka_broker_host>:<kafka_broker_port>",\n    "kafka_topic" = "topic1",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["If you choose Routine Load, you must use the ",(0,t.jsx)(a.code,{children:"COLUMNS"})," parameter to temporarily name the columns of the data file to create a column mapping between the data file and the StarRocks table."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"query-data",children:"Query data"}),"\n",(0,t.jsxs)(a.p,{children:["After the load of data from your local file system, HDFS cluster, or Kafka cluster is complete, query the data of ",(0,t.jsx)(a.code,{children:"table1"})," to verify that the load is successful:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table1;\n+------------+------------+---------+\n| event_date | event_type | user_id |\n+------------+------------+---------+\n| 2020-05-22 |          1 |     576 |\n| 2020-05-20 |          1 |     354 |\n| 2020-05-21 |          2 |     465 |\n| 2020-05-23 |          2 |     687 |\n+------------+------------+---------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"filter-out-rows-that-you-do-not-want-to-load",children:"Filter out rows that you do not want to load"}),"\n",(0,t.jsx)(a.p,{children:"When you load a data file into a StarRocks table, you may not want to load specific rows of the data file. In this situation, you can use the WHERE clause to specify the rows that you want to load. StarRocks filters out all rows that do not meet the filter conditions specified in the WHERE clause."}),"\n",(0,t.jsx)(a.p,{children:"This feature supports loading data from the following data sources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Local file system"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"HDFS and cloud storage"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"This section uses HDFS as an example."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Kafka"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["This section uses ",(0,t.jsx)(a.code,{children:"file1.csv"})," and ",(0,t.jsx)(a.code,{children:"table1"})," as an example. If you want to load only the rows whose event type is ",(0,t.jsx)(a.code,{children:"1"})," from ",(0,t.jsx)(a.code,{children:"file1.csv"})," into ",(0,t.jsx)(a.code,{children:"table1"}),", you can use the WHERE clause to specify a filter condition ",(0,t.jsx)(a.code,{children:"event_type = 1"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"load-data-1",children:"Load data"}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-a-local-file-system-1",children:"Load data from a local file system"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"file1.csv"})," is stored in your local file system, run the following command to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/StreamLoad",children:"Stream Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> \\\n    -H "Expect:100-continue" \\\n    -H "column_separator:," \\\n    -H "columns: user_id, user_gender, event_date, event_type" \\\n    -H "where: event_type=1" \\\n    -T file1.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table1/_stream_load\n'})}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-an-hdfs-cluster-1",children:"Load data from an HDFS cluster"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"file1.csv"})," is stored in your HDFS cluster, execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/BrokerLoad",children:"Broker Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label2\n(\n    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/data/input/file1.csv")\n    INTO TABLE `table1`\n    FORMAT AS "csv"\n    COLUMNS TERMINATED BY ","\n    (user_id, user_gender, event_date, event_type)\n    WHERE event_type = 1\n)\nWITH BROKER "broker1";\n'})}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-a-kafka-cluster-1",children:"Load data from a Kafka cluster"}),"\n",(0,t.jsxs)(a.p,{children:["If the data of ",(0,t.jsx)(a.code,{children:"file1.csv"})," is published to ",(0,t.jsx)(a.code,{children:"topic1"})," of your Kafka cluster, execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/RoutineLoad",children:"Routine Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD test_db.table102 ON table1\nCOLUMNS TERMINATED BY ",",\nCOLUMNS (user_id, user_gender, event_date, event_type)\nWHERE event_type = 1\nFROM KAFKA\n(\n    "kafka_broker_list" = "<kafka_broker_host>:<kafka_broker_port>",\n    "kafka_topic" = "topic1",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"query-data-1",children:"Query data"}),"\n",(0,t.jsxs)(a.p,{children:["After the load of data from your local file system, HDFS cluster, or Kafka cluster is complete, query the data of ",(0,t.jsx)(a.code,{children:"table1"})," to verify that the load is successful:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table1;\n+------------+------------+---------+\n| event_date | event_type | user_id |\n+------------+------------+---------+\n| 2020-05-20 |          1 |     354 |\n| 2020-05-22 |          1 |     576 |\n+------------+------------+---------+\n2 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"generate-new-columns-from-original-columns",children:"Generate new columns from original columns"}),"\n",(0,t.jsx)(a.p,{children:"When you load a data file into a StarRocks table, some data of the data file may require conversions before the data can be loaded into the StarRocks table. In this situation, you can use functions or expressions in the job creation command or statement to implement data conversions."}),"\n",(0,t.jsx)(a.p,{children:"This feature supports loading data from the following data sources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Local file system"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"HDFS and cloud storage"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"This section uses HDFS as an example."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Kafka"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["This section uses ",(0,t.jsx)(a.code,{children:"file2.csv"})," and ",(0,t.jsx)(a.code,{children:"table2"})," as an example. ",(0,t.jsx)(a.code,{children:"file2.csv"})," consists of only one column that represents date. You can use the ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/year",children:"year"}),", ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/month",children:"month"}),", and ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/day",children:"day"})," functions to extract the year, month, and day in each date from ",(0,t.jsx)(a.code,{children:"file2.csv"})," and load the extracted data into the ",(0,t.jsx)(a.code,{children:"year"}),", ",(0,t.jsx)(a.code,{children:"month"}),", and ",(0,t.jsx)(a.code,{children:"day"})," columns of ",(0,t.jsx)(a.code,{children:"table2"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"load-data-2",children:"Load data"}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-a-local-file-system-2",children:"Load data from a local file system"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"file2.csv"})," is stored in your local file system, run the following command to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/StreamLoad",children:"Stream Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> \\\n    -H "Expect:100-continue" \\\n    -H "column_separator:," \\\n    -H "columns:date,year=year(date),month=month(date),day=day(date)" \\\n    -T file2.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table2/_stream_load\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["In the ",(0,t.jsx)(a.code,{children:"columns"})," parameter, you must first temporarily name ",(0,t.jsx)(a.strong,{children:"all columns"})," of the data file, and then temporarily name the new columns that you want to generate from the original columns of the data file. As shown in the preceding example, the only column of ",(0,t.jsx)(a.code,{children:"file2.csv"})," is temporarily named as ",(0,t.jsx)(a.code,{children:"date"}),", and then the ",(0,t.jsx)(a.code,{children:"year=year(date)"}),", ",(0,t.jsx)(a.code,{children:"month=month(date)"}),", and ",(0,t.jsx)(a.code,{children:"day=day(date)"})," functions are invoked to generate three new columns, which are temporarily named as ",(0,t.jsx)(a.code,{children:"year"}),", ",(0,t.jsx)(a.code,{children:"month"}),", and ",(0,t.jsx)(a.code,{children:"day"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Stream Load does not support ",(0,t.jsx)(a.code,{children:"column_name = function(column_name)"})," but supports ",(0,t.jsx)(a.code,{children:"column_name = function(column_name)"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-an-hdfs-cluster-2",children:"Load data from an HDFS cluster"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"file2.csv"})," is stored in your HDFS cluster, execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/BrokerLoad",children:"Broker Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label3\n(\n    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/data/input/file2.csv")\n    INTO TABLE `table2`\n    FORMAT AS "csv"\n    COLUMNS TERMINATED BY ","\n    (date)\n    SET(year=year(date), month=month(date), day=day(date))\n)\nWITH BROKER "broker1";\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["You must first use the ",(0,t.jsx)(a.code,{children:"column_list"})," parameter to temporarily name ",(0,t.jsx)(a.strong,{children:"all columns"})," of the data file, and then use the SET clause to temporarily name the new columns that you want to generate from the original columns of the data file. As shown in the preceding example, the only column of ",(0,t.jsx)(a.code,{children:"file2.csv"})," is temporarily named as ",(0,t.jsx)(a.code,{children:"date"})," in the ",(0,t.jsx)(a.code,{children:"column_list"})," parameter, and then the ",(0,t.jsx)(a.code,{children:"year=year(date)"}),", ",(0,t.jsx)(a.code,{children:"month=month(date)"}),", and ",(0,t.jsx)(a.code,{children:"day=day(date)"})," functions are invoked in the SET clause to generate three new columns, which are temporarily named as ",(0,t.jsx)(a.code,{children:"year"}),", ",(0,t.jsx)(a.code,{children:"month"}),", and ",(0,t.jsx)(a.code,{children:"day"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"load-data-from-a-kafka-cluster-2",children:"Load data from a Kafka cluster"}),"\n",(0,t.jsxs)(a.p,{children:["If the data of ",(0,t.jsx)(a.code,{children:"file2.csv"})," is published to ",(0,t.jsx)(a.code,{children:"topic2"})," of your Kafka cluster, execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/RoutineLoad",children:"Routine Load"})," job:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD test_db.table201 ON table2\n    COLUMNS TERMINATED BY ",",\n    COLUMNS(date,year=year(date),month=month(date),day=day(date))\nFROM KAFKA\n(\n    "kafka_broker_list" = "<kafka_broker_host>:<kafka_broker_port>",\n    "kafka_topic" = "topic2",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["In the ",(0,t.jsx)(a.code,{children:"COLUMNS"})," parameter, you must first temporarily name ",(0,t.jsx)(a.strong,{children:"all columns"})," of the data file, and then temporarily name the new columns that you want to generate from the original columns of the data file. As shown in the preceding example, the only column of ",(0,t.jsx)(a.code,{children:"file2.csv"})," is temporarily named as ",(0,t.jsx)(a.code,{children:"date"}),", and then the ",(0,t.jsx)(a.code,{children:"year=year(date)"}),", ",(0,t.jsx)(a.code,{children:"month=month(date)"}),", and ",(0,t.jsx)(a.code,{children:"day=day(date)"})," functions are invoked to generate three new columns, which are temporarily named as ",(0,t.jsx)(a.code,{children:"year"}),", ",(0,t.jsx)(a.code,{children:"month"}),", and ",(0,t.jsx)(a.code,{children:"day"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"query-data-2",children:"Query data"}),"\n",(0,t.jsxs)(a.p,{children:["After the load of data from your local file system, HDFS cluster, or Kafka cluster is complete, query the data of ",(0,t.jsx)(a.code,{children:"table2"})," to verify that the load is successful:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table2;\n+------------+------+-------+------+\n| date       | year | month | day  |\n+------------+------+-------+------+\n| 2020-05-20 | 2020 |  5    | 20   |\n| 2020-05-21 | 2020 |  5    | 21   |\n| 2020-05-22 | 2020 |  5    | 22   |\n| 2020-05-23 | 2020 |  5    | 23   |\n+------------+------+-------+------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"extract-partition-field-values-from-a-file-path",children:"Extract partition field values from a file path"}),"\n",(0,t.jsxs)(a.p,{children:["If the file path that you specify contains partition fields, you can use the ",(0,t.jsx)(a.code,{children:"COLUMNS FROM PATH AS"})," parameter to specify the partition fields you want to extract from the file paths. The partition fields in file paths are equivalent to the columns in data files. The ",(0,t.jsx)(a.code,{children:"COLUMNS FROM PATH AS"})," parameter is supported only when you load data from an HDFS cluster."]}),"\n",(0,t.jsx)(a.p,{children:"For example, you want to load the following four data files generated from Hive:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:"/user/starrocks/data/input/date=2020-05-20/data\n1,354\n/user/starrocks/data/input/date=2020-05-21/data\n2,465\n/user/starrocks/data/input/date=2020-05-22/data\n1,576\n/user/starrocks/data/input/date=2020-05-23/data\n2,687\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The four data files are stored in the ",(0,t.jsx)(a.code,{children:"/user/starrocks/data/input/"})," path of your HDFS cluster. Each of these data files is partitioned by partition field ",(0,t.jsx)(a.code,{children:"date"})," and consists of two columns, which represent event type and user ID in sequence."]}),"\n",(0,t.jsx)(a.h3,{id:"load-data-from-an-hdfs-cluster-3",children:"Load data from an HDFS cluster"}),"\n",(0,t.jsxs)(a.p,{children:["Execute the following statement to create a ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/loading/BrokerLoad",children:"Broker Load"})," job, which enables you to extract the ",(0,t.jsx)(a.code,{children:"date"})," partition field values from the ",(0,t.jsx)(a.code,{children:"/user/starrocks/data/input/"})," file path and use a wildcard (*) to specify that you want to load all data files in the file path to ",(0,t.jsx)(a.code,{children:"table1"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label4\n(\n    DATA INFILE("hdfs://<fe_host>:<fe_http_port>/user/starrocks/data/input/date=*/*")\n    INTO TABLE `table1`\n    FORMAT AS "csv"\n    COLUMNS TERMINATED BY ","\n    (event_type, user_id)\n    COLUMNS FROM PATH AS (date)\n    SET(event_date = date)\n)\nWITH BROKER "broker1";\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["In the preceding example, the ",(0,t.jsx)(a.code,{children:"date"})," partition field in the specified file path is equivalent to the ",(0,t.jsx)(a.code,{children:"event_date"})," column of ",(0,t.jsx)(a.code,{children:"table1"}),". Therefore, you need to use the SET clause to map the ",(0,t.jsx)(a.code,{children:"date"})," partition field onto the ",(0,t.jsx)(a.code,{children:"event_date"})," column. If the partition field in the specified file path has the same name as a column of the StarRocks table, you do not need to use the SET clause to create a mapping."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For detailed syntax and parameter descriptions, see ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"query-data-3",children:"Query data"}),"\n",(0,t.jsxs)(a.p,{children:["After the load of data from your HDFS cluster is complete, query the data of ",(0,t.jsx)(a.code,{children:"table1"})," to verify that the load is successful:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table1;\n+------------+------------+---------+\n| event_date | event_type | user_id |\n+------------+------------+---------+\n| 2020-05-22 |          1 |     576 |\n| 2020-05-20 |          1 |     354 |\n| 2020-05-21 |          2 |     465 |\n| 2020-05-23 |          2 |     687 |\n+------------+------------+---------+\n4 rows in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>r,ah:()=>s});var t=n(67294);const o=t.createContext({});function s(e){const a=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const d={};function r({components:e,children:a,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||d:s(e),t.createElement(o.Provider,{value:r},a)}}}]);