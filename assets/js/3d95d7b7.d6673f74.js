"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74381,75525],{5251:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(85893),t=a(11151);const s={displayed_sidebar:"English"},d=void 0,i={id:"assets/commonMarkdown/insertPrivNote",title:"insertPrivNote",description:"NOTICE",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/insertPrivNote.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/insertPrivNote",permalink:"/doc/docs/assets/commonMarkdown/insertPrivNote",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/insertPrivNote.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},r={},l=[];function c(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a"},(0,t.ah)(),e.components);return(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,o.jsxs)(n.p,{children:["You can load data into StarRocks tables only as a user who has the INSERT privilege on those StarRocks tables. If you do not have the INSERT privilege, follow the instructions provided in ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to grant the INSERT privilege to the user that you use to connect to your StarRocks cluster."]}),"\n"]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},74022:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(85893),t=a(11151);a(5251);const s={displayed_sidebar:"English"},d="Load data from a local file system or a streaming data source using HTTP PUT",i={id:"loading/StreamLoad",title:"Load data from a local file system or a streaming data source using HTTP PUT",description:"StarRocks provides the loading method HTTP-based Stream Load to help you load data from a local file system or a streaming data source.",source:"@site/versioned_docs/version-3.1/loading/StreamLoad.md",sourceDirName:"loading",slug:"/loading/StreamLoad",permalink:"/doc/docs/loading/StreamLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/StreamLoad.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Strict mode",permalink:"/doc/docs/loading/load_concept/strict_mode"},next:{title:"Load data from HDFS",permalink:"/doc/docs/loading/hdfs_load"}},r={},l=[{value:"Supported data file formats",id:"supported-data-file-formats",level:2},{value:"Limits",id:"limits",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Load a local data file",id:"load-a-local-data-file",level:2},{value:"Create a load job",id:"create-a-load-job",level:3},{value:"Load CSV data",id:"load-csv-data",level:4},{value:"Data examples",id:"data-examples",level:5},{value:"Load data",id:"load-data",level:5},{value:"Query data",id:"query-data",level:5},{value:"Load JSON data",id:"load-json-data",level:4},{value:"Data examples",id:"data-examples-1",level:5},{value:"Load data",id:"load-data-1",level:5},{value:"Query data",id:"query-data-1",level:5},{value:"View a load job",id:"view-a-load-job",level:3},{value:"Cancel a load job",id:"cancel-a-load-job",level:3},{value:"Parameter configurations",id:"parameter-configurations",level:2},{value:"Usage notes",id:"usage-notes",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",code:"code",img:"img",h3:"h3",h4:"h4",h5:"h5",ol:"ol",pre:"pre"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"load-data-from-a-local-file-system-or-a-streaming-data-source-using-http-put",children:"Load data from a local file system or a streaming data source using HTTP PUT"}),"\n","\n","\n",(0,o.jsx)(n.p,{children:"StarRocks provides the loading method HTTP-based Stream Load to help you load data from a local file system or a streaming data source."}),"\n",(0,o.jsx)(n.p,{children:"Stream Load runs in synchronous loading mode. After you submit a load job, StarRocks synchronously runs the job, and returns the result of the job after the job finishes. You can determine whether the job is successful based on the job result."}),"\n",(0,o.jsx)(n.p,{children:"Stream Load is suitable for the following business scenarios:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Load a local data file."}),"\n",(0,o.jsx)(n.p,{children:"In most cases, we recommend that you use curl to submit a load job, which is run to load the data of a local data file into StarRocks."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Load streaming data."}),"\n",(0,o.jsx)(n.p,{children:"In most cases, we recommend that you use programs such as Apache Flink\xae to submit a load job, within which a series of tasks can be generated to continuously load streaming data in real time into StarRocks."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Stream Load supports data transformation at data loading and supports data changes made by UPSERT and DELETE operations during data loading. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/loading/Etl_in_loading",children:"Transform data at loading"})," and ",(0,o.jsx)(n.a,{href:"/doc/docs/loading/Load_to_Primary_Key_tables",children:"Change data through loading"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"After you load data into a StarRocks table by using Stream Load, the data of the materialized views that are created on that table is also updated."}),"\n",(0,o.jsxs)(n.li,{children:["You can load data into StarRocks tables only as a user who has the INSERT privilege on those StarRocks tables. If you do not have the INSERT privilege, follow the instructions provided in ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to grant the INSERT privilege to the user that you use to connect to your StarRocks cluster."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"supported-data-file-formats",children:"Supported data file formats"}),"\n",(0,o.jsx)(n.p,{children:"Stream Load supports the following data file formats:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"CSV"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"JSON"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"streaming_load_max_mb"}),' parameter to specify the maximum size of each data file you want to load. The default maximum size is 10 GB. We recommend that you retain the default value of this parameter. For more information, see the "',(0,o.jsx)(n.a,{href:"/doc/docs/loading/StreamLoad#parameter-configurations",children:"Parameter configurations"}),'" section of this topic.']}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsx)(n.p,{children:"For CSV data, take note of the following points:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can use a UTF-8 string, such as a comma (,), tab, or pipe (|), whose length does not exceed 50 bytes as a text delimiter."}),"\n",(0,o.jsxs)(n.li,{children:["Null values are denoted by using ",(0,o.jsx)(n.code,{children:"\\N"}),". For example, a data file consists of three columns, and a record from that data file holds data in the first and third columns but no data in the second column. In this situation, you need to use ",(0,o.jsx)(n.code,{children:"\\N"})," in the second column to denote a null value. This means the record must be compiled as ",(0,o.jsx)(n.code,{children:"a,\\N,b"})," instead of ",(0,o.jsx)(n.code,{children:"a,,b"}),". ",(0,o.jsx)(n.code,{children:"a,,b"})," denotes that the second column of the record holds an empty string."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,o.jsx)(n.p,{children:"Stream Load does not support loading the data of a CSV file that contains a JSON-formatted column."}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(n.p,{children:"You can submit a load request on your client to an FE according to HTTP, and the FE then uses an HTTP redirect to forward the load request to a specific BE. You can also directly submit a load request on your client to a BE of your choice."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsx)(n.p,{children:"If you submit load requests to an FE, the FE uses a polling mechanism to decide which BE will serve as a coordinator to receive and process the load requests. The polling mechanism helps achieve load balancing within your StarRocks cluster. Therefore, we recommend that you send load requests to an FE."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The BE that receives the load request runs as the Coordinator BE to split data based on the used schema into portions and assign each portion of the data to the other involved BEs. After the load finishes, the Coordinator BE returns the result of the load job to your client. Note that if you stop the Coordinator BE during the load, the load job fails."}),"\n",(0,o.jsx)(n.p,{children:"The following figure shows the workflow of a Stream Load job."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Workflow of Stream Load",src:a(59902).Z+"",width:"1776",height:"1068"})}),"\n",(0,o.jsx)(n.h2,{id:"load-a-local-data-file",children:"Load a local data file"}),"\n",(0,o.jsx)(n.h3,{id:"create-a-load-job",children:"Create a load job"}),"\n",(0,o.jsxs)(n.p,{children:["This section uses curl as an example to describe how to load the data of a CSV or JSON file from your local file system into StarRocks. For detailed syntax and parameter descriptions, see ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that in StarRocks some literals are used as reserved keywords by the SQL language. Do not directly use these keywords in SQL statements. If you want to use such a keyword in an SQL statement, enclose it in a pair of backticks (`). See ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/keywords",children:"Keywords"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"load-csv-data",children:"Load CSV data"}),"\n",(0,o.jsx)(n.h5,{id:"data-examples",children:"Data examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In your local file system, create a CSV file named ",(0,o.jsx)(n.code,{children:"example1.csv"}),". The file consists of three columns, which represent the user ID, user name, and user score in sequence."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",children:"1,Lily,23\n2,Rose,23\n3,Alice,24\n4,Julia,25\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In your StarRocks database ",(0,o.jsx)(n.code,{children:"test_db"}),", create a Primary Key table named ",(0,o.jsx)(n.code,{children:"table1"}),". The table consists of three columns: ",(0,o.jsx)(n.code,{children:"id"}),", ",(0,o.jsx)(n.code,{children:"name"}),", and ",(0,o.jsx)(n.code,{children:"score"}),", of which ",(0,o.jsx)(n.code,{children:"id"})," is the primary key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'MySQL [test_db]> CREATE TABLE `table1`\n(\n   `id` int(11) NOT NULL COMMENT "user ID",\n    `name` varchar(65533) NULL COMMENT "user name",\n    `score` int(11) NOT NULL COMMENT "user score"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"load-data",children:"Load data"}),"\n",(0,o.jsxs)(n.p,{children:["Run the following command to load the data of ",(0,o.jsx)(n.code,{children:"example1.csv"})," into ",(0,o.jsx)(n.code,{children:"table1"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:123" \\\n    -H "Expect:100-continue" \\\n    -H "column_separator:," \\\n    -H "Expect:100-continue" \\\n    -H "columns: id, name, score" \\\n    -T example1.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table1/_stream_load\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FRONTENDS",children:"SHOW FRONTENDS"})," to view the IP address and HTTP port of the FE node."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"example1.csv"})," consists of three columns, which are separated by commas (,) and can be mapped in sequence onto the ",(0,o.jsx)(n.code,{children:"id"}),", ",(0,o.jsx)(n.code,{children:"name"}),", and ",(0,o.jsx)(n.code,{children:"score"})," columns of ",(0,o.jsx)(n.code,{children:"table1"}),". Therefore, you need to use the ",(0,o.jsx)(n.code,{children:"column_separator"})," parameter to specify the comma (,) as the column separator. You also need to use the ",(0,o.jsx)(n.code,{children:"columns"})," parameter to temporarily name the three columns of ",(0,o.jsx)(n.code,{children:"example1.csv"})," as ",(0,o.jsx)(n.code,{children:"id"}),", ",(0,o.jsx)(n.code,{children:"name"}),", and ",(0,o.jsx)(n.code,{children:"score"}),", which are mapped in sequence onto the three columns of ",(0,o.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"query-data",children:"Query data"}),"\n",(0,o.jsxs)(n.p,{children:["After the load is complete, query the data of ",(0,o.jsx)(n.code,{children:"table1"})," to verify that the load is successful:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table1;\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Lily  |    23 |\n|    2 | Rose  |    23 |\n|    3 | Alice |    24 |\n|    4 | Julia |    25 |\n+------+-------+-------+\n4 rows in set (0.00 sec)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"load-json-data",children:"Load JSON data"}),"\n",(0,o.jsx)(n.h5,{id:"data-examples-1",children:"Data examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In your local file system, create a JSON file named ",(0,o.jsx)(n.code,{children:"example2.json"}),". The file consists of two columns, which represent city ID and city name in sequence."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{"name": "Beijing", "code": 2}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In your StarRocks database ",(0,o.jsx)(n.code,{children:"test_db"}),", create a Primary Key table named ",(0,o.jsx)(n.code,{children:"table2"}),". The table consists of two columns: ",(0,o.jsx)(n.code,{children:"id"})," and ",(0,o.jsx)(n.code,{children:"city"}),", of which ",(0,o.jsx)(n.code,{children:"id"})," is the primary key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'MySQL [test_db]> CREATE TABLE `table2`\n(\n    `id` int(11) NOT NULL COMMENT "city ID",\n    `city` varchar(65533) NULL COMMENT "city name"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["Since v2.5.7, StarRocks can set the number of(BUCKETS) automatically when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"load-data-1",children:"Load data"}),"\n",(0,o.jsxs)(n.p,{children:["Run the following command to load the data of ",(0,o.jsx)(n.code,{children:"example2.json"})," into ",(0,o.jsx)(n.code,{children:"table2"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl -v --location-trusted -u <username>:<password> -H "strict_mode: true" \\\n    -H "Expect:100-continue" \\\n    -H "format: json" -H "jsonpaths: [\\"$.name\\", \\"$.code\\"]" \\\n    -H "columns: city,tmp_id, id = tmp_id * 100" \\\n    -T example2.json -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table2/_stream_load\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FRONTENDS",children:"SHOW FRONTENDS"})," to view the IP address and HTTP port of the FE node."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"example2.json"})," consists of two keys, ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"code"}),", which are mapped onto the ",(0,o.jsx)(n.code,{children:"id"})," and ",(0,o.jsx)(n.code,{children:"city"})," columns of ",(0,o.jsx)(n.code,{children:"table2"}),", as shown in the following figure."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"JSON - Column Mapping",src:a(99295).Z+"",width:"1540",height:"1030"})}),"\n",(0,o.jsx)(n.p,{children:"The mappings shown in the preceding figure are described as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["StarRocks extracts the ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"code"})," keys of ",(0,o.jsx)(n.code,{children:"example2.json"})," and maps them onto the ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"code"})," fields declared in the ",(0,o.jsx)(n.code,{children:"jsonpaths"})," parameter."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["StarRocks extracts the ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"code"})," fields declared in the ",(0,o.jsx)(n.code,{children:"jsonpaths"})," parameter and ",(0,o.jsx)(n.strong,{children:"maps them in sequence"})," onto the ",(0,o.jsx)(n.code,{children:"city"})," and ",(0,o.jsx)(n.code,{children:"tmp_id"})," fields declared in the ",(0,o.jsx)(n.code,{children:"columns"})," parameter."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["StarRocks extracts the ",(0,o.jsx)(n.code,{children:"city"})," and ",(0,o.jsx)(n.code,{children:"tmp_id"})," fields declared in the ",(0,o.jsx)(n.code,{children:"columns"})," parameter and ",(0,o.jsx)(n.strong,{children:"maps them by name"})," onto the ",(0,o.jsx)(n.code,{children:"city"})," and ",(0,o.jsx)(n.code,{children:"id"})," columns of ",(0,o.jsx)(n.code,{children:"table2"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["In the preceding example, the value of ",(0,o.jsx)(n.code,{children:"code"})," in ",(0,o.jsx)(n.code,{children:"example2.json"})," is multiplied by 100 before it is loaded into the ",(0,o.jsx)(n.code,{children:"id"})," column of ",(0,o.jsx)(n.code,{children:"table2"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For detailed mappings between ",(0,o.jsx)(n.code,{children:"jsonpaths"}),", ",(0,o.jsx)(n.code,{children:"columns"}),', and the columns of the StarRocks table, see the "Column mappings" section in ',(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"query-data-1",children:"Query data"}),"\n",(0,o.jsxs)(n.p,{children:["After the load is complete, query the data of ",(0,o.jsx)(n.code,{children:"table2"})," to verify that the load is successful:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"MySQL [test_db]> SELECT * FROM table2;\n+------+--------+\n| id   | city   |\n+------+--------+\n| 200  | Beijing|\n+------+--------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"view-a-load-job",children:"View a load job"}),"\n",(0,o.jsxs)(n.p,{children:['After a load job is complete, StarRocks returns the result of the job in JSON format. For more information, see the "Return value" section in ',(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Stream Load does not allow you to query the result of a load job by using the SHOW LOAD statement."}),"\n",(0,o.jsx)(n.h3,{id:"cancel-a-load-job",children:"Cancel a load job"}),"\n",(0,o.jsx)(n.p,{children:"Stream Load does not allow you to cancel a load job. If a load job times out or encounters errors, StarRocks automatically cancels the job."}),"\n",(0,o.jsx)(n.h2,{id:"parameter-configurations",children:"Parameter configurations"}),"\n",(0,o.jsx)(n.p,{children:"This section describes some system parameters that you need to configure if you choose the loading method Stream Load. These parameter configurations take effect on all Stream Load jobs."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"streaming_load_max_mb"}),": the maximum size of each data file you want to load. The default maximum size is 10 GB. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/administration/Configuration#be-configuration-items",children:"BE configuration items"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We recommend that you do not load more than 10 GB of data at a time. If the size of a data file exceeds 10 GB, we recommend that you split the data file into small files that each are less than 10 GB in size and then load these files one by one. If you cannot split a data file greater than 10 GB, you can increase the value of this parameter based on the file size."}),"\n",(0,o.jsx)(n.p,{children:"After you increase the value of this parameter, the new value can take effect only after you restart the BEs of your StarRocks cluster. Additionally, system performance may deteriorate, and the costs of retries in the event of load failures also increase."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsx)(n.p,{children:"When you load the data of a JSON file, take note of the following points:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'The size of each JSON object in the file cannot exceed 4 GB. If any JSON object in the file exceeds 4 GB, StarRocks throws an error "This parser can\'t support a document that big."'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['By default, the JSON body in an HTTP request cannot exceed 100 MB. If the JSON body exceeds 100 MB, StarRocks throws an error "The size of this batch exceed the max size [104857600] of json type data data [8617627793]. Set ignore_json_size to skip check, although it may lead huge memory consuming." To prevent this error, you can add ',(0,o.jsx)(n.code,{children:'"ignore_json_size:true"'})," in the HTTP request header to ignore the check on the JSON body size."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"stream_load_default_timeout_second"}),": the timeout period of each load job. The default timeout period is 600 seconds. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/administration/Configuration#fe-configuration-items",children:"FE configuration items"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If many of the load jobs that you create time out, you can increase the value of this parameter based on the calculation result that you obtain from the following formula:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Timeout period of each load job > Amount of data to be loaded/Average loading speed"})}),"\n",(0,o.jsx)(n.p,{children:"For example, if the size of the data file that you want to load is 10 GB and the average loading speed of your StarRocks cluster is 100 MB/s, set the timeout period to more than 100 seconds."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Average loading speed"})," in the preceding formula is the average loading speed of your StarRocks cluster. It varies depending on the disk I/O and the number of BEs in your StarRocks cluster."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Stream Load also provides the ",(0,o.jsx)(n.code,{children:"timeout"})," parameter, which allows you to specify the timeout period of an individual load job. For more information, see ",(0,o.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,o.jsxs)(n.p,{children:["If a field is missing for a record in the data file you want to load and the column onto which the field is mapped in your StarRocks table is defined as ",(0,o.jsx)(n.code,{children:"NOT NULL"}),", StarRocks automatically fills a ",(0,o.jsx)(n.code,{children:"NULL"})," value in the mapping column of your StarRocks table during the load of the record. You can also use the ",(0,o.jsx)(n.code,{children:"ifnull()"})," function to specify the default value that you want to fill."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if the field that represents city ID in the preceding ",(0,o.jsx)(n.code,{children:"example2.json"})," file is missing and you want to fill an ",(0,o.jsx)(n.code,{children:"x"})," value in the mapping column of ",(0,o.jsx)(n.code,{children:"table2"}),", you can specify ",(0,o.jsx)(n.code,{children:"\"columns: city, tmp_id, id = ifnull(tmp_id, 'x')\""}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},59902:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/4.2-1-b3200ec0a9dd3899f0782aa47b4e66a8.png"},99295:(e,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/4.2-2-c70995e90322f0db208fcf24e930a69e.png"},11151:(e,n,a)=>{a.d(n,{Zo:()=>i,ah:()=>s});var o=a(67294);const t=o.createContext({});function s(e){const n=o.useContext(t);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||d:s(e),o.createElement(t.Provider,{value:i},n)}}}]);