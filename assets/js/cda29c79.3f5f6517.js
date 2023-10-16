"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74172],{83223:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var n=o(85893),a=o(11151);const t={displayed_sidebar:"English"},i="Overview of data loading",r={id:"loading/Loading_intro",title:"Overview of data loading",description:"Data loading is the process of cleansing and transforming raw data from various data sources based on your business requirements and loading the resulting data into StarRocks to facilitate blazing-fast data analytics.",source:"@site/versioned_docs/version-3.0/loading/Loading_intro.md",sourceDirName:"loading",slug:"/loading/Loading_intro",permalink:"/doc/docs/3.0/loading/Loading_intro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/loading/Loading_intro.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Change data through loading",permalink:"/doc/docs/3.0/loading/Load_to_Primary_Key_tables"},next:{title:"Continuously load data from Apache Kafka\xae",permalink:"/doc/docs/3.0/loading/RoutineLoad"}},d={},l=[{value:"Supported data types",id:"supported-data-types",level:2},{value:"Loading modes",id:"loading-modes",level:2},{value:"Synchronous loading",id:"synchronous-loading",level:3},{value:"Asynchronous loading",id:"asynchronous-loading",level:3},{value:"Loading methods",id:"loading-methods",level:2},{value:"Memory limits",id:"memory-limits",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Automatically fill in the destination column while loading",id:"automatically-fill-in-the-destination-column-while-loading",level:3},{value:"Set write quorum for data loading",id:"set-write-quorum-for-data-loading",level:3},{value:"System configurations",id:"system-configurations",level:2},{value:"FE configurations",id:"fe-configurations",level:3},{value:"BE configurations",id:"be-configurations",level:3},{value:"System variable configurations",id:"system-variable-configurations",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const s=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",h3:"h3",ol:"ol",li:"li",ul:"ul",img:"img",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"overview-of-data-loading",children:"Overview of data loading"}),"\n",(0,n.jsx)(s.p,{children:"Data loading is the process of cleansing and transforming raw data from various data sources based on your business requirements and loading the resulting data into StarRocks to facilitate blazing-fast data analytics."}),"\n",(0,n.jsx)(s.p,{children:"You can load data into StarRocks by running load jobs. Each load job has a unique label that is specified by the user or automatically generated by StarRocks to identify the job. Each label can be used only for one load job. After a load job is complete, its label cannot be reused for any other load jobs. Only the labels of failed load jobs can be reused. This mechanism helps ensure that the data associated with a specific label can be loaded only once, thus implementing At-Most-Once semantics."}),"\n",(0,n.jsx)(s.p,{children:"All the loading methods provided by StarRocks can guarantee atomicity. Atomicity means that the qualified data within a load job must be all successfully loaded or none of the qualified data is successfully loaded. It never happens that some of the qualified data is loaded while the other data is not. Note that the qualified data does not include the data that is filtered out due to quality issues such as data type conversion errors."}),"\n",(0,n.jsxs)(s.p,{children:['StarRocks supports two communication protocols that can be used to submit load jobs: MySQL and HTTP. For more information about the protocol supported by each loading method, see the "',(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/Loading_intro#loading-methods",children:"Loading methods"}),'" section of this topic.']}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTICE"})}),"\n",(0,n.jsxs)(s.p,{children:["You can load data into StarRocks tables only as a user who has the INSERT privilege on those StarRocks tables. If you do not have the INSERT privilege, follow the instructions provided in ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to grant the INSERT privilege to the user that you use to connect to your StarRocks cluster."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"supported-data-types",children:"Supported data types"}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks supports loading data of all data types. You only need to take note of the limits on the loading of a few specific data types. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-types/BIGINT",children:"Data types"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"loading-modes",children:"Loading modes"}),"\n",(0,n.jsx)(s.p,{children:"StarRocks supports two loading modes: synchronous loading mode and asynchronous loading mode."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(s.p,{children:"If you load data by using external programs, you must choose a loading mode that best suits your business requirements before you decide the loading method of your choice."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"synchronous-loading",children:"Synchronous loading"}),"\n",(0,n.jsx)(s.p,{children:"In synchronous loading mode, after you submit a load job, StarRocks synchronously runs the job to load data, and returns the result of the job after the job finishes. You can check whether the job is successful based on the job result."}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks provides two loading methods that support synchronous loading: ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/StreamLoad",children:"Stream Load"})," and ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"The process of synchronous loading is as follows:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a load job."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"View the job result returned by StarRocks."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Check whether the job is successful based on the job result. If the job result indicates a load failure, you can retry the job."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"asynchronous-loading",children:"Asynchronous loading"}),"\n",(0,n.jsx)(s.p,{children:"In asynchronous loading mode, after you submit a load job, StarRocks immediately returns the job creation result."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If the result indicates a job creation success, StarRocks asynchronously runs the job. However, that does not mean that the data has been successfully loaded. You must use statements or commands to check the status of the job. Then, you can determine whether the data is successfully loaded based on the job status."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If the result indicates a job creation failure, you can determine whether you need to retry the job based on the failure information."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks provides three loading methods that support asynchronous loading: ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),", and ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/SparkLoad",children:"Spark Load"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"The process of asynchronous loading is as follows:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a load job."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"View the job creation result returned by StarRocks and determine whether the job is successfully created.\na. If the job creation succeeds, go to Step 3.\nb. If the job creation fails, return to Step 1."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Use statements or commands to check the status of the job until the job status shows ",(0,n.jsx)(s.strong,{children:"FINISHED"})," or ",(0,n.jsx)(s.strong,{children:"CANCELLED"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The workflow of a Broker Load or Spark Load job consists of five stages, as shown in the following figure."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Broker Load or Spark Load overflow",src:o(33726).Z+"",width:"1003",height:"287"})}),"\n",(0,n.jsx)(s.p,{children:"The workflow is described as follows:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"PENDING"})}),"\n",(0,n.jsx)(s.p,{children:"The job is in queue waiting to be scheduled by an FE."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"ETL"})}),"\n",(0,n.jsx)(s.p,{children:"The FE pre-processes the data, including cleansing, partitioning, sorting, and aggregation."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(s.p,{children:"If the job is a Broker Load job, this stage is directly finished."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"LOADING"})}),"\n",(0,n.jsxs)(s.p,{children:["The FE cleanses and transforms the data, and then sends the data to the BEs. After all data is loaded, the data is in queue waiting to take effect. At this time, the status of the job remains ",(0,n.jsx)(s.strong,{children:"LOADING"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"FINISHED"})}),"\n",(0,n.jsxs)(s.p,{children:["When all data takes effect, the status of the job becomes ",(0,n.jsx)(s.strong,{children:"FINISHED"}),". At this time, the data can be queried. ",(0,n.jsx)(s.strong,{children:"FINISHED"})," is a final job state."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"CANCELLED"})}),"\n",(0,n.jsxs)(s.p,{children:["Before the status of the job becomes ",(0,n.jsx)(s.strong,{children:"FINISHED"}),", you can cancel the job at any time. Additionally, StarRocks can automatically cancel the job in case of load errors. After the job is canceled, the status of the job becomes ",(0,n.jsx)(s.strong,{children:"CANCELLED"}),". ",(0,n.jsx)(s.strong,{children:"CANCELLED"})," is also a final job state."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The workflow of a Routine job is described as follows:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The job is submitted to an FE from a MySQL client."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The FE splits the job into multiple tasks. Each task is engineered to load data from multiple partitions."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The FE distributes the tasks to specified BEs."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The BEs execute the tasks, and report to the FE after they finish the tasks."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The FE generates subsequent tasks, retries failed tasks if there are any, or suspends task scheduling based on the reports from the BEs."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"loading-methods",children:"Loading methods"}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks provides five loading methods to help you load data in various business scenarios: ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/StreamLoad",children:"Stream Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/SparkLoad",children:"Spark Load"}),", and ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Loading method"}),(0,n.jsx)(s.th,{children:"Data source"}),(0,n.jsx)(s.th,{children:"Business scenario"}),(0,n.jsx)(s.th,{children:"Data volume per load job"}),(0,n.jsx)(s.th,{children:"Data file format"}),(0,n.jsx)(s.th,{children:"Loading mode"}),(0,n.jsx)(s.th,{children:"Protocol"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Stream Load"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Local files"}),(0,n.jsx)("li",{children:"Data streams"})]})}),(0,n.jsx)(s.td,{children:"Load data files from local file systems or load data streams by using programs."}),(0,n.jsx)(s.td,{children:"10 GB or less"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"CSV"}),(0,n.jsx)("li",{children:"JSON"})]})}),(0,n.jsx)(s.td,{children:"Synchronous"}),(0,n.jsx)(s.td,{children:"HTTP"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Broker Load"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"HDFS"}),(0,n.jsx)("li",{children:"Amazon S3"}),(0,n.jsx)("li",{children:"Google GCS"}),(0,n.jsx)("li",{children:"Microsoft Azure Storage"}),(0,n.jsx)("li",{children:"Alibaba Cloud OSS"}),(0,n.jsx)("li",{children:"Tencent Cloud COS"}),(0,n.jsx)("li",{children:"Huawei Cloud OBS"}),(0,n.jsx)("li",{children:"Other S3-compatible storage system (such as MinIO)"})]})}),(0,n.jsx)(s.td,{children:"Load data from HDFS or cloud storage."}),(0,n.jsx)(s.td,{children:"Dozens of GB to hundreds of GB"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"CSV"}),(0,n.jsx)("li",{children:"Parquet"}),(0,n.jsx)("li",{children:"ORC"})]})}),(0,n.jsx)(s.td,{children:"Asynchronous"}),(0,n.jsx)(s.td,{children:"MySQL"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Routine Load"}),(0,n.jsx)(s.td,{children:"Apache Kafka\xae"}),(0,n.jsx)(s.td,{children:"Load data in real time from Kafka."}),(0,n.jsx)(s.td,{children:"MBs to GBs of data as mini-batches"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"CSV"}),(0,n.jsx)("li",{children:"JSON"}),(0,n.jsx)("li",{children:"Avro (supported since v3.0.1)"})]})}),(0,n.jsx)(s.td,{children:"Asynchronous"}),(0,n.jsx)(s.td,{children:"MySQL"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Spark Load"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"HDFS"}),(0,n.jsx)("li",{children:"Hive"})]})}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Migrate large amounts of data from HDFS or Hive by using Apache Spark\u2122 clusters."}),(0,n.jsx)("li",{children:"Load data while using a global data dictionary for deduplication."})]})}),(0,n.jsx)(s.td,{children:"Dozens of GB to TBs"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"CSV"}),(0,n.jsx)("li",{children:"ORC (supported since v2.0)"}),(0,n.jsx)("li",{children:"Parquet (supported since v2.0)"})]})}),(0,n.jsx)(s.td,{children:"Asynchronous"}),(0,n.jsx)(s.td,{children:"MySQL"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"INSERT INTO SELECT"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"StarRocks tables"}),(0,n.jsx)("li",{children:"External tables"})]})}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Load data from external tables."}),(0,n.jsx)("li",{children:"Load data between StarRocks tables."})]})}),(0,n.jsx)(s.td,{children:"Not fixed (The data volume varies based on the memory size.)"}),(0,n.jsx)(s.td,{children:"StarRocks tables"}),(0,n.jsx)(s.td,{children:"Synchronous"}),(0,n.jsx)(s.td,{children:"MySQL"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"INSERT INTO VALUES"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Programs"}),(0,n.jsx)("li",{children:"ETL tools"})]})}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Insert small amounts of data as individual records."}),(0,n.jsx)("li",{children:"Load data by using APIs such as JDBC."})]})}),(0,n.jsx)(s.td,{children:"In small quantities"}),(0,n.jsx)(s.td,{children:"SQL"}),(0,n.jsx)(s.td,{children:"Synchronous"}),(0,n.jsx)(s.td,{children:"MySQL"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"You can determine the loading method of your choice based on your business scenario, data volume, data source, data file format, and loading frequency. Additionally, take note of the following points when you select a loading method:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When you load data from Kafka, we recommend that you use ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),". However, if the data requires multi-table joins and extract, transform and load (ETL) operations, you can use Apache Flink\xae to read and pre-process the data from Kafka and then use ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/Flink-connector-starrocks",children:"flink-connector-starrocks"})," to load the data into StarRocks."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When you load data from Hive, Iceberg, Hudi, or Delta Lake, we recommend that you create a ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/hive_catalog",children:"Hive catalog"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/hudi_catalog",children:"Hudi Catalog"}),", or ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/deltalake_catalog",children:"Delta Lake Catalog"})," and then use ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"})," to load the data."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When you load data from another StarRocks cluster or from an Elasticsearch cluster, we recommend that you create a ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/External_table#starrocks-external-table",children:"StarRocks external table"})," or an ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/External_table#elasticsearch-external-table",children:"Elasticsearch external table"})," and then use ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"})," to load the data."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTICE"})}),"\n",(0,n.jsx)(s.p,{children:"StarRocks external tables only support data writes. They do not support data reads."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When you load data from MySQL databases, we recommend that you create a ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/External_table#mysql-external-table",children:"MySQL external table"})," and then use ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"})," to load the data. If you want to load data in real time, we recommend that you load the data by following the instructions provided in ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/Flink_cdc_load",children:"Realtime synchronization from MySQL"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When you load data from other data sources such as Oracle, PostgreSQL, and SQL Server, we recommend that you create a ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/data_source/External_table#deprecated-external-table-for-a-jdbc-compatible-database",children:"JDBC external table"})," and then use ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"})," to load the data."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following figure provides an overview of various data sources supported by StarRocks and the loading methods that you can use to load data from these data sources."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Data loading sources",src:o(26488).Z+"",width:"2540",height:"1296"})}),"\n",(0,n.jsx)(s.h2,{id:"memory-limits",children:"Memory limits"}),"\n",(0,n.jsx)(s.p,{children:"StarRocks provides parameters for you to limit the memory usage for each load job, thereby reducing memory consumption, especially in high concurrency scenarios. However, do not specify an excessively low memory usage limit. If the memory usage limit is excessively low, data may be frequently flushed from memory to disk because the memory usage for load jobs reaches the specified limit. We recommend that you specify a proper memory usage limit based on your business scenario."}),"\n",(0,n.jsxs)(s.p,{children:["The parameters that are used to limit memory usage vary for each loading method. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/StreamLoad",children:"Stream Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/SparkLoad",children:"Spark Load"}),", and ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"}),". Note that a load job usually runs on multiple BEs. Therefore, the parameters limit the memory usage of each load job on each involved BE rather than the total memory usage of the load job on all involved BEs."]}),"\n",(0,n.jsxs)(s.p,{children:['StarRocks also provides parameters for you to limit the total memory usage of all load jobs that run on each individual BE. For more information, see the "',(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/Loading_intro#system-configurations",children:"System configurations"}),'" section of this topic.']}),"\n",(0,n.jsx)(s.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsx)(s.h3,{id:"automatically-fill-in-the-destination-column-while-loading",children:"Automatically fill in the destination column while loading"}),"\n",(0,n.jsx)(s.p,{children:"When you load data, you can choose not to load the data from a specific field of your data file:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If you have specified the ",(0,n.jsx)(s.code,{children:"DEFAULT"})," keyword for the destination StarRocks table column mapping the source field when you create the StarRocks table, StarRocks automatically fills the specified default value into the destination column."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/StreamLoad",children:"Stream Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),", and ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/InsertInto",children:"INSERT"})," supports ",(0,n.jsx)(s.code,{children:"DEFAULT current_timestamp"}),", ",(0,n.jsx)(s.code,{children:"DEFAULT <default_value>"}),", and ",(0,n.jsx)(s.code,{children:"DEFAULT (<expression>)"}),". ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/SparkLoad",children:"Spark Load"})," supports only ",(0,n.jsx)(s.code,{children:"DEFAULT current_timestamp"})," and ",(0,n.jsx)(s.code,{children:"DEFAULT <default_value>"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DEFAULT (<expression>)"})," supports only the functions ",(0,n.jsx)(s.code,{children:"uuid()"})," and",(0,n.jsx)(s.code,{children:"uuid_numeric()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If you did not specify the ",(0,n.jsx)(s.code,{children:"DEFAULT"})," keyword for the destination StarRocks table column mapping the source field when you create the StarRocks table, StarRocks automatically fills ",(0,n.jsx)(s.code,{children:"NULL"})," into the destination column."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(s.p,{children:["If the destination column is defined as ",(0,n.jsx)(s.code,{children:"NOT NULL"}),", the load fails."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/StreamLoad",children:"Stream Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),", ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),", and ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/loading/SparkLoad",children:"Spark Load"}),", you can also specify the value you want to fill in the destination column by using the parameter that is used to specify column mapping."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For information about the usage of ",(0,n.jsx)(s.code,{children:"NOT NULL"})," and ",(0,n.jsx)(s.code,{children:"DEFAULT"}),", see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"set-write-quorum-for-data-loading",children:"Set write quorum for data loading"}),"\n",(0,n.jsxs)(s.p,{children:["If your StarRocks cluster has multiple data replicas, you can set different write quorum for tables, that is, how many replicas are required to return loading success before StarRocks can determine the loading task is successful. You can specify write quorum by adding the property ",(0,n.jsx)(s.code,{children:"write_quorum"})," when you ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),", or add this property to an existing table using ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"}),". This property is supported from v2.5."]}),"\n",(0,n.jsx)(s.h2,{id:"system-configurations",children:"System configurations"}),"\n",(0,n.jsx)(s.p,{children:"This section describes some parameter configurations that are applicable to all of the loading methods provided by StarRocks."}),"\n",(0,n.jsx)(s.h3,{id:"fe-configurations",children:"FE configurations"}),"\n",(0,n.jsxs)(s.p,{children:["You can configure the following parameters in the configuration file ",(0,n.jsx)(s.strong,{children:"fe.conf"})," of each FE:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"max_load_timeout_second"})," and ",(0,n.jsx)(s.code,{children:"min_load_timeout_second"})]}),"\n",(0,n.jsx)(s.p,{children:"These parameters specify the maximum timeout period and minimum timeout period of each load job. The timeout periods are measured in seconds. The default maximum timeout period spans 3 days, and the default minimum timeout period spans 1 second. The maximum timeout period and minimum timeout period that you specify must fall within the range of 1 second to 3 days. These parameters are valid for both synchronous load jobs and asynchronous load jobs."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"desired_max_waiting_jobs"})}),"\n",(0,n.jsxs)(s.p,{children:["This parameter specifies the maximum number of load jobs that can be held waiting in queue. The default value is ",(0,n.jsx)(s.strong,{children:"1024"})," (100 in v2.4 and earlier, and 1024 in v2.5 and later). When the number of load jobs in the ",(0,n.jsx)(s.strong,{children:"PENDING"})," state on an FE reaches the maximum number that you specify, the FE rejects new load requests. This parameter is valid only for asynchronous load jobs."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"max_running_txn_num_per_db"})}),"\n",(0,n.jsxs)(s.p,{children:["This parameter specifies the maximum number of ongoing load transactions that are allowed in each database of your StarRocks cluster. A load job can contain one or more transactions. The default value is ",(0,n.jsx)(s.strong,{children:"100"}),". When the number of load transactions running in a database reaches the maximum number that you specify, the subsequent load jobs that you submit are not scheduled. In this situation, if you submit a synchronous load job, the job is rejected. If you submit an asynchronous load job, the job is held waiting in queue."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(s.p,{children:"StarRocks counts all load jobs together and does not distinguish between synchronous load jobs and asynchronous load jobs."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"label_keep_max_second"})}),"\n",(0,n.jsxs)(s.p,{children:["This parameter specifies the retention period of the history records for load jobs that have finished and are in the ",(0,n.jsx)(s.strong,{children:"FINISHED"})," or ",(0,n.jsx)(s.strong,{children:"CANCELLED"})," state. The default retention period spans 3 days. This parameter is valid for both synchronous load jobs and asynchronous load jobs."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"be-configurations",children:"BE configurations"}),"\n",(0,n.jsxs)(s.p,{children:["You can configure the following parameters in the configuration file ",(0,n.jsx)(s.strong,{children:"be.conf"})," of each BE:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"write_buffer_size"})}),"\n",(0,n.jsx)(s.p,{children:"This parameter specifies the maximum memory block size. The default size is 100 MB. The loaded data is first written to a memory block on the BE. When the amount of data that is loaded reaches the maximum memory block size that you specify, the data is flushed to disk. You must specify a proper maximum memory block size based on your business scenario."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If the maximum memory block size is exceedingly small, a large number of small files may be generated on the BE. In this case, query performance degrades. You can increase the maximum memory block size to reduce the number of files generated."}),"\n",(0,n.jsx)(s.li,{children:"If the maximum memory block size is exceedingly large, remote procedure calls (RPCs) may time out. In this case, you can adjust the value of this parameter based on your business needs."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"streaming_load_rpc_max_alive_time_sec"})}),"\n",(0,n.jsx)(s.p,{children:'The waiting timeout period for each Writer process. The default value is 600 seconds. During the data loading process, StarRocks starts a Writer process to receive data from and write data to each tablet. If a Writer process does not receive any data within the waiting timeout period that you specify, StarRocks stops the Writer process. When your StarRocks cluster processes data at low speeds, a Writer process may not receive the next batch of data within a long period of time and therefore reports a "TabletWriter add batch with unknown id" error. In this case, you can increase the value of this parameter.'}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"load_process_max_memory_limit_bytes"})," and ",(0,n.jsx)(s.code,{children:"load_process_max_memory_limit_percent"})]}),"\n",(0,n.jsx)(s.p,{children:"These parameters specify the maximum amount of memory that can be consumed for all load jobs on each individual BE. StarRocks identifies the smaller memory consumption among the values of the two parameters as the final memory consumption that is allowed."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"load_process_max_memory_limit_bytes"}),": specifies the maximum memory size. The default maximum memory size is 100 GB."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"load_process_max_memory_limit_percent"}),": specifies the maximum memory usage. The default value is 30%. This parameter differs from the ",(0,n.jsx)(s.code,{children:"mem_limit"})," parameter. The ",(0,n.jsx)(s.code,{children:"mem_limit"})," parameter specifies the total maximum memory usage of your StarRocks cluster, and the default value is 90% x 90%."]}),"\n",(0,n.jsxs)(s.p,{children:["If the memory capacity of the machine on which the BE resides is M, the maximum amount of memory that can be consumed for load jobs is calculated as follows: ",(0,n.jsx)(s.code,{children:"M x 90% x 90% x 30%"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"system-variable-configurations",children:"System variable configurations"}),"\n",(0,n.jsxs)(s.p,{children:["You can configure the following ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/reference/System_variable",children:"system variable"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"query_timeout"})}),"\n",(0,n.jsxs)(s.p,{children:["The query timeout duration. Unit: seconds. Value range: ",(0,n.jsx)(s.code,{children:"1"})," to ",(0,n.jsx)(s.code,{children:"259200"}),". Default value: ",(0,n.jsx)(s.code,{children:"300"}),". This variable will act on all query statements in the current connection, as well as INSERT statements."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(s.p,{children:["For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/faq/loading/Loading_faq",children:"FAQ about data loading"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},33726:(e,s,o)=>{o.d(s,{Z:()=>n});const n=o.p+"assets/images/4.1-1-a86ce8a3dcc8f792bd7f8b6971269403.png"},26488:(e,s,o)=>{o.d(s,{Z:()=>n});const n=o.p+"assets/images/4.1-3-bde83f60cd055a1f3e95943492ae1484.png"},11151:(e,s,o)=>{o.d(s,{Zo:()=>r,ah:()=>t});var n=o(67294);const a=n.createContext({});function t(e){const s=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function r({components:e,children:s,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||i:t(e),n.createElement(a.Provider,{value:r},s)}}}]);