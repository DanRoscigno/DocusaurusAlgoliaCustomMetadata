"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93703],{71224:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=s(85893),a=s(11151);const t={displayed_sidebar:"English"},r="Load data from HDFS or cloud storage",d={id:"loading/BrokerLoad",title:"Load data from HDFS or cloud storage",description:"StarRocks provides the loading method MySQL-based Broker Load to help you load a large amount of data from HDFS or cloud storage into StarRocks.",source:"@site/versioned_docs/version-2.5/loading/BrokerLoad.md",sourceDirName:"loading",slug:"/loading/BrokerLoad",permalink:"/doc/docs/2.5/loading/BrokerLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/BrokerLoad.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"What is StarRocks?",permalink:"/doc/docs/2.5/introduction/what_is_starrocks"},next:{title:"DataX writer",permalink:"/doc/docs/2.5/loading/DataX-starrocks-writer"}},i={},l=[{value:"Background information",id:"background-information",level:2},{value:"Supported data file formats",id:"supported-data-file-formats",level:2},{value:"Supported storage systems",id:"supported-storage-systems",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Basic operations",id:"basic-operations",level:2},{value:"Create a multi-table load job",id:"create-a-multi-table-load-job",level:3},{value:"Data examples",id:"data-examples",level:4},{value:"Load data from HDFS",id:"load-data-from-hdfs",level:4},{value:"Load data from AWS S3",id:"load-data-from-aws-s3",level:4},{value:"Load data from Google GCS",id:"load-data-from-google-gcs",level:4},{value:"Load data from other S3-compatible storage system",id:"load-data-from-other-s3-compatible-storage-system",level:4},{value:"Query data",id:"query-data",level:4},{value:"Create a single-table load job",id:"create-a-single-table-load-job",level:3},{value:"View a load job",id:"view-a-load-job",level:3},{value:"Use SHOW LOAD",id:"use-show-load",level:4},{value:"Use curl",id:"use-curl",level:4},{value:"Cancel a load job",id:"cancel-a-load-job",level:3},{value:"Job splitting and concurrent running",id:"job-splitting-and-concurrent-running",level:2},{value:"Usage notes",id:"usage-notes",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",img:"img",h3:"h3",h4:"h4",ol:"ol",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"load-data-from-hdfs-or-cloud-storage",children:"Load data from HDFS or cloud storage"}),"\n",(0,o.jsx)(n.p,{children:"StarRocks provides the loading method MySQL-based Broker Load to help you load a large amount of data from HDFS or cloud storage into StarRocks."}),"\n",(0,o.jsxs)(n.p,{children:["Broker Load runs in asynchronous loading mode. After you submit a load job, StarRocks asynchronously runs the job. You need to use the ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})," statement or the ",(0,o.jsx)(n.code,{children:"curl"})," command to check the result of the job."]}),"\n",(0,o.jsx)(n.p,{children:"Broker Load supports single-table loads and multi-table loads. You can load one or multiple data files into one or multiple destination tables by running one Broker Load job. Broker Load ensures the transactional atomicity of each load job that is run to load multiple data files. Atomicity means that the loading of multiple data files in one load job must all succeed or fail. It never happens that the loading of some data files succeeds while the loading of the other files fails."}),"\n",(0,o.jsxs)(n.p,{children:["Broker Load supports data transformation at data loading and supports data changes made by UPSERT and DELETE operations during data loading. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/loading/Etl_in_loading",children:"Transform data at loading"})," and ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/loading/Load_to_Primary_Key_tables",children:"Change data through loading"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"background-information",children:"Background information"}),"\n",(0,o.jsxs)(n.p,{children:["In v2.4 and earlier, StarRocks depends on brokers to set up connections between your StarRocks cluster and your external storage system when it runs a Broker Load job. Therefore, you need to input ",(0,o.jsx)(n.code,{children:'WITH BROKER "<broker_name>"'}),' to specify the broker you want to use in the load statement. This is called "broker-based loading." A broker is an independent, stateless service that is integrated with a file-system interface. With brokers, StarRocks can access and read data files that are stored in your external storage system, and can use its own computing resources to pre-process and load the data of these data files.']}),"\n",(0,o.jsxs)(n.p,{children:["From v2.5 onwards, StarRocks no longer depends on brokers to set up connections between your StarRocks cluster and your external storage system when it runs a Broker Load job. Therefore, you no longer need to specify a broker in the load statement, but you still need to retain the ",(0,o.jsx)(n.code,{children:"WITH BROKER"}),' keyword. This is called "broker-free loading."']}),"\n",(0,o.jsxs)(n.p,{children:["When your data is stored in HDFS, you may encounter situations where broker-free loading does not work. This can happen when your data is stored across multiple HDFS clusters or when you have configured multiple Kerberos users. In these situations, you can resort to using broker-based loading instead. To do this successfully, make sure that at least one independent broker group is deployed. For information about how to specify authentication configuration and HA configuration in these situations, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#hdfs",children:"HDFS"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/Administration/SHOW_BROKER",children:"SHOW BROKER"})," statement to check for brokers that are deployed in your StarRocks cluster. If no brokers are deployed, you can deploy brokers by following the instructions provided in ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/deployment/deploy_broker",children:"Deploy a broker"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"supported-data-file-formats",children:"Supported data file formats"}),"\n",(0,o.jsx)(n.p,{children:"Broker Load supports the following data file formats:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"CSV"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Parquet"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"ORC"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsx)(n.p,{children:"For CSV data, take note of the following points:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can use a UTF-8 string, such as a comma (,), tab, or pipe (|), whose length does not exceed 50 bytes as a text delimiter."}),"\n",(0,o.jsxs)(n.li,{children:["Null values are denoted by using ",(0,o.jsx)(n.code,{children:"\\N"}),". For example, a data file consists of three columns, and a record from that data file holds data in the first and third columns but no data in the second column. In this situation, you need to use ",(0,o.jsx)(n.code,{children:"\\N"})," in the second column to denote a null value. This means the record must be compiled as ",(0,o.jsx)(n.code,{children:"a,\\N,b"})," instead of ",(0,o.jsx)(n.code,{children:"a,,b"}),". ",(0,o.jsx)(n.code,{children:"a,,b"})," denotes that the second column of the record holds an empty string."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"supported-storage-systems",children:"Supported storage systems"}),"\n",(0,o.jsx)(n.p,{children:"Broker Load supports the following storage systems:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"HDFS"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"AWS S3"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Google GCS"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Other S3-compatible storage system such as MinIO"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(n.p,{children:"After you submit a load job to an FE, the FE generates a query plan, splits the query plan into portions based on the number of available BEs and the size of the data file you want to load, and then assigns each portion of the query plan to an available BE. During the load, each involved BE pulls the data of the data file from your HDFS or cloud storage system, pre-processes the data, and then loads the data into your StarRocks cluster. After all BEs finish their portions of the query plan, the FE determines whether the load job is successful."}),"\n",(0,o.jsx)(n.p,{children:"The following figure shows the workflow of a Broker Load job."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Workflow of Broker Load",src:s(23627).Z+"",width:"1478",height:"1064"})}),"\n",(0,o.jsx)(n.h2,{id:"basic-operations",children:"Basic operations"}),"\n",(0,o.jsx)(n.h3,{id:"create-a-multi-table-load-job",children:"Create a multi-table load job"}),"\n",(0,o.jsxs)(n.p,{children:["This topic uses CSV as an example to describe how to load multiple data files into multiple tables. For information about how to load data in other file formats and about the syntax and parameter descriptions for Broker Load, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that in StarRocks some literals are used as reserved keywords by the SQL language. Do not directly use these keywords in SQL statements. If you want to use such a keyword in an SQL statement, enclose it in a pair of backticks (`). See ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/keywords",children:"Keywords"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"data-examples",children:"Data examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create CSV files in your local file system."}),"\n",(0,o.jsxs)(n.p,{children:["a. Create a CSV file named ",(0,o.jsx)(n.code,{children:"file1.csv"}),". The file consists of three columns, which represent user ID, user name, and user score in sequence."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",children:"1,Lily,23\n2,Rose,23\n3,Alice,24\n4,Julia,25\n"})}),"\n",(0,o.jsxs)(n.p,{children:["b. Create a CSV file named ",(0,o.jsx)(n.code,{children:"file2.csv"}),". The file consists of two columns, which represent city ID and city name in sequence."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",children:"200,'Beijing'\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Upload ",(0,o.jsx)(n.code,{children:"file1.csv"})," and ",(0,o.jsx)(n.code,{children:"file2.csv"})," to the ",(0,o.jsx)(n.code,{children:"/user/starrocks/"})," path of your HDFS cluster, to the ",(0,o.jsx)(n.code,{children:"input"})," folder of your AWS S3 bucket ",(0,o.jsx)(n.code,{children:"bucket_s3"}),", to the ",(0,o.jsx)(n.code,{children:"input"})," folder of your Google GCS bucket ",(0,o.jsx)(n.code,{children:"bucket_gcs"}),", and to the ",(0,o.jsx)(n.code,{children:"input"})," folder of your MinIO bucket ",(0,o.jsx)(n.code,{children:"bucket_minio"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create StarRocks tables in your StarRocks database ",(0,o.jsx)(n.code,{children:"test_db"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["a. Create a Primary Key table named ",(0,o.jsx)(n.code,{children:"table1"}),". The table consists of three columns: ",(0,o.jsx)(n.code,{children:"id"}),", ",(0,o.jsx)(n.code,{children:"name"}),", and ",(0,o.jsx)(n.code,{children:"score"}),", of which ",(0,o.jsx)(n.code,{children:"id"})," is the primary key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `table1`\n(\n    `id` int(11) NOT NULL COMMENT "user ID",\n    `name` varchar(65533) NULL DEFAULT "" COMMENT "user name",\n    `score` int(11) NOT NULL DEFAULT "0" COMMENT "user score"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["b. Create a Primary Key table named ",(0,o.jsx)(n.code,{children:"table2"}),". The table consists of two columns: ",(0,o.jsx)(n.code,{children:"id"})," and ",(0,o.jsx)(n.code,{children:"city"}),", of which ",(0,o.jsx)(n.code,{children:"id"})," is the primary key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `table2`\n(\n    `id` int(11) NOT NULL COMMENT "city ID",\n    `city` varchar(65533) NULL DEFAULT "" COMMENT "city name"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"load-data-from-hdfs",children:"Load data from HDFS"}),"\n",(0,o.jsxs)(n.p,{children:["Execute the following statement to load ",(0,o.jsx)(n.code,{children:"file1.csv"})," and ",(0,o.jsx)(n.code,{children:"file2.csv"})," from the ",(0,o.jsx)(n.code,{children:"/user/starrocks"})," path of your HDFS cluster into ",(0,o.jsx)(n.code,{children:"table1"})," and ",(0,o.jsx)(n.code,{children:"table2"}),", respectively:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL test_db.label1\n(\n    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/file1.csv")\n    INTO TABLE table1\n    COLUMNS TERMINATED BY ","\n    (id, name, score)\n    ,\n    DATA INFILE("hdfs://<hdfs_host>:<hdfs_port>/user/starrocks/file2.csv")\n    INTO TABLE table2\n    COLUMNS TERMINATED BY ","\n    (id, city)\n)\nWITH BROKER\n(\n    StorageCredentialParams\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the preceding example, ",(0,o.jsx)(n.code,{children:"StorageCredentialParams"})," represents a group of authentication parameters which vary depending on the authentication method you choose. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#hdfs",children:"BROKER LOAD"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"load-data-from-aws-s3",children:"Load data from AWS S3"}),"\n",(0,o.jsxs)(n.p,{children:["Execute the following statement to load ",(0,o.jsx)(n.code,{children:"file1.csv"})," and ",(0,o.jsx)(n.code,{children:"file2.csv"})," from the ",(0,o.jsx)(n.code,{children:"input"})," folder of your AWS S3 bucket ",(0,o.jsx)(n.code,{children:"bucket_s3"})," into ",(0,o.jsx)(n.code,{children:"table1"})," and ",(0,o.jsx)(n.code,{children:"table2"}),", respectively:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL test_db.label2\n(\n    DATA INFILE("s3a://bucket_s3/input/file1.csv")\n    INTO TABLE table1\n    (id, name, score)\n    ,\n    DATA INFILE("s3a://bucket_s3/input/file2.csv")\n    INTO TABLE table2\n    (id, city)\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["Broker Load supports accessing AWS S3 only according to the S3A protocol. Therefore, when you load data from AWS S3, you must replace ",(0,o.jsx)(n.code,{children:"s3://"})," in the S3 URI you pass as a file path into ",(0,o.jsx)(n.code,{children:"DATA INFILE"})," with ",(0,o.jsx)(n.code,{children:"s3a://"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the preceding example, ",(0,o.jsx)(n.code,{children:"StorageCredentialParams"})," represents a group of authentication parameters which vary depending on the authentication method you choose. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#aws-s3",children:"BROKER LOAD"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"load-data-from-google-gcs",children:"Load data from Google GCS"}),"\n",(0,o.jsxs)(n.p,{children:["Execute the following statement to load ",(0,o.jsx)(n.code,{children:"file1.csv"})," and ",(0,o.jsx)(n.code,{children:"file2.csv"})," from the ",(0,o.jsx)(n.code,{children:"/input/"})," folder of your Google GCS bucket ",(0,o.jsx)(n.code,{children:"bucket_gcs"})," into ",(0,o.jsx)(n.code,{children:"table1"})," and ",(0,o.jsx)(n.code,{children:"table2"}),", respectively:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL test_db.label3\n(\n    DATA INFILE("s3a://bucket_gcs/input/file1.csv")\n    INTO TABLE table1\n    (id, name, score)\n    ,\n    DATA INFILE("s3a://bucket_gcs/input/file2.csv")\n    INTO TABLE table2\n    (id, city)\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["Broker Load supports accessing Google GCS only according to the S3A protocol. Therefore, when you load data from Google GCS, you must replace the prefix in the GCS URI you pass as a file path into ",(0,o.jsx)(n.code,{children:"DATA INFILE"})," with ",(0,o.jsx)(n.code,{children:"s3a://"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the preceding example, ",(0,o.jsx)(n.code,{children:"StorageCredentialParams"})," represents a group of authentication parameters which vary depending on the authentication method you choose. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#google-gcs",children:"BROKER LOAD"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"load-data-from-other-s3-compatible-storage-system",children:"Load data from other S3-compatible storage system"}),"\n",(0,o.jsxs)(n.p,{children:["Use MinIO as an example. You can execute the following statement to load ",(0,o.jsx)(n.code,{children:"file1.csv"})," and ",(0,o.jsx)(n.code,{children:"file2.csv"})," from the ",(0,o.jsx)(n.code,{children:"input"})," folder of your MinIO bucket ",(0,o.jsx)(n.code,{children:"bucket_gcs"})," into ",(0,o.jsx)(n.code,{children:"table1"})," and ",(0,o.jsx)(n.code,{children:"table2"}),", respectively:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL test_db.label7\n(\n    DATA INFILE("obs://bucket_minio/input/file1.csv")\n    INTO TABLE table1\n    COLUMNS TERMINATED BY ","\n    (id, name, score)\n    ,\n    DATA INFILE("obs://bucket_minio/input/file2.csv")\n    INTO TABLE table2\n    COLUMNS TERMINATED BY ","\n    (id, city)\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the preceding example, ",(0,o.jsx)(n.code,{children:"StorageCredentialParams"})," represents a group of authentication parameters which vary depending on the authentication method you choose. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#other-s3-compatible-storage-system",children:"BROKER LOAD"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"query-data",children:"Query data"}),"\n",(0,o.jsx)(n.p,{children:"After the load of data from your HDFS cluster, AWS S3 bucket, or Google GCS bucket is complete, you can use the SELECT statement to query the data of the StarRocks tables to verify that the load is successful."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Execute the following statement to query the data of ",(0,o.jsx)(n.code,{children:"table1"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table1;\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Lily  |    23 |\n|    2 | Rose  |    23 |\n|    3 | Alice |    24 |\n|    4 | Julia |    25 |\n+------+-------+-------+\n4 rows in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Execute the following statement to query the data of ",(0,o.jsx)(n.code,{children:"table2"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table2;\n+------+--------+\n| id   | city   |\n+------+--------+\n| 200  | Beijing|\n+------+--------+\n4 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"create-a-single-table-load-job",children:"Create a single-table load job"}),"\n",(0,o.jsxs)(n.p,{children:["You can also load a single data file or all data files from a specified path into a single destination table. Suppose your AWS S3 bucket ",(0,o.jsx)(n.code,{children:"bucket_s3"})," contains a folder named ",(0,o.jsx)(n.code,{children:"input"}),". The ",(0,o.jsx)(n.code,{children:"input"})," folder contains multiple data files, one of which is named ",(0,o.jsx)(n.code,{children:"file1.csv"}),". These data files consist of the same number of columns as ",(0,o.jsx)(n.code,{children:"table1"})," and the columns from each of these data files can be mapped one on one in sequence to the columns from ",(0,o.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To load ",(0,o.jsx)(n.code,{children:"file1.csv"})," into ",(0,o.jsx)(n.code,{children:"table1"}),", execute the following statement:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL test_db.label_7\n(\n    DATA INFILE("s3a://bucket_s3/input/file1.csv")\n    INTO TABLE table1\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n)\nWITH BROKER \n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To load all data files from the ",(0,o.jsx)(n.code,{children:"input"})," folder into ",(0,o.jsx)(n.code,{children:"table1"}),", execute the following statement:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL test_db.label_8\n(\n    DATA INFILE("s3a://bucket_s3/input/*")\n    INTO TABLE table1\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n)\nWITH BROKER \n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the preceding examples, ",(0,o.jsx)(n.code,{children:"StorageCredentialParams"})," represents a group of authentication parameters which vary depending on the authentication method you choose. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#aws-s3",children:"BROKER LOAD"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"view-a-load-job",children:"View a load job"}),"\n",(0,o.jsxs)(n.p,{children:["Broker Load allows you to view a lob job by using the SHOW LOAD statement or the ",(0,o.jsx)(n.code,{children:"curl"})," command."]}),"\n",(0,o.jsx)(n.h4,{id:"use-show-load",children:"Use SHOW LOAD"}),"\n",(0,o.jsxs)(n.p,{children:["For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"use-curl",children:"Use curl"}),"\n",(0,o.jsx)(n.p,{children:"The syntax is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"curl --location-trusted -u <username>:<password> \\\n    'http://<fe_host>:<fe_http_port>/api/<database_name>/_load_info?label=<label_name>'\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["If you use an account for which no password is set, you need to input only ",(0,o.jsx)(n.code,{children:"<username>:"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, you can run the following command to view the information about a load job, whose label is ",(0,o.jsx)(n.code,{children:"label1"}),", in the ",(0,o.jsx)(n.code,{children:"test_db"})," database:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"curl --location-trusted -u <username>:<password> \\\n    'http://<fe_host>:<fe_http_port>/api/test_db/_load_info?label=label1'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"curl"})," command returns the information about the load job as a JSON object ",(0,o.jsx)(n.code,{children:"jobInfo"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{"jobInfo":{"dbName":"default_cluster:test_db","tblNames":["table1_simple"],"label":"label1","state":"FINISHED","failMsg":"","trackingUrl":""},"status":"OK","msg":"Success"}%\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The following table describes the parameters in ",(0,o.jsx)(n.code,{children:"jobInfo"}),"."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Parameter"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Description"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"dbName"}),(0,o.jsx)(n.td,{children:"The name of the database into which data is loaded"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tblNames"}),(0,o.jsx)(n.td,{children:"The name of the table into which data is loaded."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"label"}),(0,o.jsx)(n.td,{children:"The label of the load job."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"state"}),(0,o.jsxs)(n.td,{children:["The status of the load job. Valid values:",(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"PENDING"}),": The load job is in queue waiting to be scheduled."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"QUEUEING"}),": The load job is in the queue waiting to be scheduled."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"LOADING"}),": The load job is running."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"PREPARED"}),": The transaction has been committed."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"FINISHED"}),": The load job succeeded."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"CANCELLED"}),": The load job failed."]})]}),'For more information, see the "Asynchronous loading" section in ',(0,o.jsx)(n.a,{href:"/doc/docs/2.5/loading/Loading_intro",children:"Overview of data loading"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"failMsg"}),(0,o.jsxs)(n.td,{children:["The reason why the load job failed. If the ",(0,o.jsx)(n.code,{children:"state"})," value for the load job is ",(0,o.jsx)(n.code,{children:"PENDING"}),", ",(0,o.jsx)(n.code,{children:"LOADING"}),", or ",(0,o.jsx)(n.code,{children:"FINISHED"}),", ",(0,o.jsx)(n.code,{children:"NULL"})," is returned for the ",(0,o.jsx)(n.code,{children:"failMsg"})," parameter. If the ",(0,o.jsx)(n.code,{children:"state"})," value for the load job is ",(0,o.jsx)(n.code,{children:"CANCELLED"}),", the value returned for the ",(0,o.jsx)(n.code,{children:"failMsg"})," parameter consists of two parts: ",(0,o.jsx)(n.code,{children:"type"})," and ",(0,o.jsx)(n.code,{children:"msg"}),".",(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["The ",(0,o.jsx)(n.code,{children:"type"})," part can be any of the following values:"]}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"USER_CANCEL"}),": The load job was manually canceled."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"ETL_SUBMIT_FAIL"}),": The load job failed to be submitted."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"ETL-QUALITY-UNSATISFIED"}),": The load job failed because the percentage of unqualified data exceeds the value of the ",(0,o.jsx)(n.code,{children:"max-filter-ratio"})," parameter."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"LOAD-RUN-FAIL"}),": The load job failed in the ",(0,o.jsx)(n.code,{children:"LOADING"})," stage."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"TIMEOUT"}),": The load job failed to finish within the specified timeout period."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"UNKNOWN"}),": The load job failed due to an unknown error."]})]}),(0,o.jsxs)("li",{children:["The ",(0,o.jsx)(n.code,{children:"msg"})," part provides the detailed cause of the load failure."]})]})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"trackingUrl"}),(0,o.jsxs)(n.td,{children:["The URL that is used to access the unqualified data detected in the load job. You can use the ",(0,o.jsx)(n.code,{children:"curl"})," or ",(0,o.jsx)(n.code,{children:"wget"})," command to access the URL and obtain the unqualified data. If no unqualified data is detected, ",(0,o.jsx)(n.code,{children:"NULL"})," is returned for the ",(0,o.jsx)(n.code,{children:"trackingUrl"})," parameter."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"status"}),(0,o.jsxs)(n.td,{children:["The status of the HTTP request for the load job. Valid values: ",(0,o.jsx)(n.code,{children:"OK"})," and ",(0,o.jsx)(n.code,{children:"Fail"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"msg"}),(0,o.jsx)(n.td,{children:"The error information of the HTTP request for the load job."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"cancel-a-load-job",children:"Cancel a load job"}),"\n",(0,o.jsxs)(n.p,{children:["When a load job is not in the ",(0,o.jsx)(n.strong,{children:"CANCELLED"})," or ",(0,o.jsx)(n.strong,{children:"FINISHED"})," stage, you can use the ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD",children:"CANCEL LOAD"})," statement to cancel the job."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, you can execute the following statement to cancel a load job, whose label is ",(0,o.jsx)(n.code,{children:"label1"}),", in the database ",(0,o.jsx)(n.code,{children:"test_db"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CANCEL LOAD\nFROM test_db\nWHERE LABEL = "label";\n'})}),"\n",(0,o.jsx)(n.h2,{id:"job-splitting-and-concurrent-running",children:"Job splitting and concurrent running"}),"\n",(0,o.jsxs)(n.p,{children:["A Broker Load job can be split into one or more tasks that concurrently run. The tasks within a load job are run within a single transaction. They must all succeed or fail. StarRocks splits each load job based on how you declare ",(0,o.jsx)(n.code,{children:"data_desc"})," in the ",(0,o.jsx)(n.code,{children:"LOAD"})," statement:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you declare multiple ",(0,o.jsx)(n.code,{children:"data_desc"})," parameters, each of which specifies a distinct table, a task is generated to load the data of each table."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you declare multiple ",(0,o.jsx)(n.code,{children:"data_desc"})," parameters, each of which specifies a distinct partition for the same table, a task is generated to load the data of each partition."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, each task can be further split into one or more instances, which are evenly distributed to and concurrently run on the BEs of your StarRocks cluster. StarRocks splits each task based on the following ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/administration/Configuration#fe-configuration-items",children:"FE configurations"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"min_bytes_per_broker_scanner"}),": the minimum amount of data processed by each instance. The default amount is 64 MB."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"max_broker_concurrency"}),": the maximum number of concurrent instances allowed in each task. The default maximum number is 100."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"load_parallel_instance_num"}),": the number of concurrent instances allowed in each load job on an individual BE. The default number is 1."]}),"\n",(0,o.jsx)(n.p,{children:"You can use the following formula to calculate the number of instances in an individual task:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Number of instances in an individual task = min(Amount of data to be loaded by an individual task/",(0,o.jsx)(n.code,{children:"min_bytes_per_broker_scanner"}),",",(0,o.jsx)(n.code,{children:"max_broker_concurrency"}),",",(0,o.jsx)(n.code,{children:"load_parallel_instance_num"})," x Number of BEs)"]})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In most cases, only one ",(0,o.jsx)(n.code,{children:"data_desc"})," is declared for each load job, each load job is split into only one task, and the task is split into the same number of instances as the number of BEs."]}),"\n",(0,o.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/administration/Configuration#fe-configuration-items",children:"FE configuration item"})," ",(0,o.jsx)(n.code,{children:"max_broker_load_job_concurrency"})," specifies the maximum number of Broker Load jobs that can be concurrently run within your StarRocks cluster."]}),"\n",(0,o.jsx)(n.p,{children:"In StarRocks v2.4 and earlier, if the total number of Broker Load jobs that are submitted within a specific period of time exceeds the maximum number, excessive jobs are queued and scheduled based on their submission time."}),"\n",(0,o.jsxs)(n.p,{children:["Since StarRocks v2.5, if the total number of Broker Load jobs that are submitted within a specific period of time exceeds the maximum number, excessive jobs are queued and scheduled based on their priorities. You can specify a priority for a job by using the ",(0,o.jsx)(n.code,{children:"priority"})," parameter at job creation. See ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#opt_properties",children:"BROKER LOAD"}),". You can also use ",(0,o.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",children:"ALTER LOAD"})," to modify the priority of an existing job that is in the ",(0,o.jsx)(n.strong,{children:"QUEUEING"})," or ",(0,o.jsx)(n.strong,{children:"LOADING"})," state."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},23627:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/broker_load_how-to-work_en-6132d562d6e87eac4b5c0e494ffdb34d.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var o=s(67294);const a=o.createContext({});function t(e){const n=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:t(e),o.createElement(a.Provider,{value:d},n)}}}]);