"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96430],{38136:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var d=s(85893),r=s(11151);const i={},n="Information Schema",l={id:"administration/information_schema",title:"Information Schema",description:"The StarRocks informationschema is a database within each StarRocks instance. informationschema contains several read-only, system-defined tables which store extensive metadata information of all objects that the StarRocks instance maintains.",source:"@site/versioned_docs/version-3.1/administration/information_schema.md",sourceDirName:"administration",slug:"/administration/information_schema",permalink:"/doc/en/administration/information_schema",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/information_schema.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"File manager",permalink:"/doc/en/administration/filemanager"},next:{title:"Monitor and manage big queries",permalink:"/doc/en/administration/monitor_manage_big_queries"}},a={},h=[{value:"View metadata via Information Schema",id:"view-metadata-via-information-schema",level:2},{value:"Information Schema tables",id:"information-schema-tables",level:2},{value:"loads",id:"loads",level:3},{value:"tables",id:"tables",level:3},{value:"tables_config",id:"tables_config",level:3},{value:"load_tracking_logs",id:"load_tracking_logs",level:2},{value:"materialized_views",id:"materialized_views",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",h3:"h3"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"information-schema",children:"Information Schema"}),"\n",(0,d.jsxs)(t.p,{children:["The StarRocks ",(0,d.jsx)(t.code,{children:"information_schema"})," is a database within each StarRocks instance. ",(0,d.jsx)(t.code,{children:"information_schema"})," contains several read-only, system-defined tables which store extensive metadata information of all objects that the StarRocks instance maintains."]}),"\n",(0,d.jsx)(t.h2,{id:"view-metadata-via-information-schema",children:"View metadata via Information Schema"}),"\n",(0,d.jsxs)(t.p,{children:["You can view the metadata information within a StarRocks instance by querying the content of tables in ",(0,d.jsx)(t.code,{children:"information_schema"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["The following example views metadata information about a table named ",(0,d.jsx)(t.code,{children:"sr_member"})," in StarRocks by querying the table ",(0,d.jsx)(t.code,{children:"tables"}),"."]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-Plain",children:"mysql> SELECT * FROM information_schema.tables WHERE TABLE_NAME like 'sr_member'\\G\n*************************** 1. row ***************************\n  TABLE_CATALOG: def\n   TABLE_SCHEMA: sr_hub\n     TABLE_NAME: sr_member\n     TABLE_TYPE: BASE TABLE\n         ENGINE: StarRocks\n        VERSION: NULL\n     ROW_FORMAT: NULL\n     TABLE_ROWS: 6\n AVG_ROW_LENGTH: 542\n    DATA_LENGTH: 3255\nMAX_DATA_LENGTH: NULL\n   INDEX_LENGTH: NULL\n      DATA_FREE: NULL\n AUTO_INCREMENT: NULL\n    CREATE_TIME: 2022-11-17 14:32:30\n    UPDATE_TIME: 2022-11-17 14:32:55\n     CHECK_TIME: NULL\nTABLE_COLLATION: utf8_general_ci\n       CHECKSUM: NULL\n CREATE_OPTIONS: NULL\n  TABLE_COMMENT: OLAP\n1 row in set (1.04 sec)\n"})}),"\n",(0,d.jsx)(t.h2,{id:"information-schema-tables",children:"Information Schema tables"}),"\n",(0,d.jsxs)(t.p,{children:["StarRocks has optimized the metadata information provided by the tables ",(0,d.jsx)(t.code,{children:"tables"}),", ",(0,d.jsx)(t.code,{children:"tables_config"}),", and ",(0,d.jsx)(t.code,{children:"load_tracking_logs"})," and has provided the ",(0,d.jsx)(t.code,{children:"loads"})," table from v3.1 onwards in ",(0,d.jsx)(t.code,{children:"information_schema"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Information Schema table name"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Description"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"#tables",children:"tables"})}),(0,d.jsx)(t.td,{children:"Provides general metadata information of tables."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"#tables_config",children:"tables_config"})}),(0,d.jsx)(t.td,{children:"Provides additional table metadata information that is unique to StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"#load_tracking_logs",children:"load_tracking_logs"})}),(0,d.jsx)(t.td,{children:"Provides error information (if any) of load jobs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"#loads",children:"loads"})}),(0,d.jsxs)(t.td,{children:["Provides the results of load jobs. This table is supported from v3.1 onwards. Currently, you can only view the results of ",(0,d.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"})," and ",(0,d.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/insert",children:"Insert"})," jobs from this table."]})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"loads",children:"loads"}),"\n",(0,d.jsxs)(t.p,{children:["The following fields are provided in ",(0,d.jsx)(t.code,{children:"loads"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Field"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Description"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"JOB_ID"}),(0,d.jsx)(t.td,{children:"The unique ID assigned by StarRocks to identify the load job."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LABEL"}),(0,d.jsx)(t.td,{children:"The label of the load job."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DATABASE_NAME"}),(0,d.jsx)(t.td,{children:"The name of the database to which the destination StarRocks tables belong."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"STATE"}),(0,d.jsxs)(t.td,{children:["The state of the load job. Valid values:",(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[(0,d.jsx)(t.code,{children:"PENDING"}),": The load job is created."]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(t.code,{children:"QUEUEING"}),": The load job is in the queue waiting to be scheduled."]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(t.code,{children:"LOADING"}),": The load job is running."]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(t.code,{children:"PREPARED"}),": The transaction has been committed."]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(t.code,{children:"FINISHED"}),": The load job succeeded."]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(t.code,{children:"CANCELLED"}),": The load job failed."]})]}),"For more information, see ",(0,d.jsx)(t.a,{href:"/doc/en/loading/Loading_intro#asynchronous-loading",children:"Asynchronous loading"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PROGRESS"}),(0,d.jsx)(t.td,{children:"The progress of the ETL stage and LOADING stage of the load job."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TYPE"}),(0,d.jsxs)(t.td,{children:["The type of the load job. For Broker Load, the return value is ",(0,d.jsx)(t.code,{children:"BROKER"}),". For INSERT, the return value is ",(0,d.jsx)(t.code,{children:"INSERT"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PRIORITY"}),(0,d.jsxs)(t.td,{children:["The priority of the load job. Valid values: ",(0,d.jsx)(t.code,{children:"HIGHEST"}),", ",(0,d.jsx)(t.code,{children:"HIGH"}),", ",(0,d.jsx)(t.code,{children:"NORMAL"}),", ",(0,d.jsx)(t.code,{children:"LOW"}),", and ",(0,d.jsx)(t.code,{children:"LOWEST"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SCAN_ROWS"}),(0,d.jsx)(t.td,{children:"The number of data rows that are scanned."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"FILTERED_ROWS"}),(0,d.jsx)(t.td,{children:"The number of data rows that are filtered out due to inadequate data quality."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"UNSELECTED_ROWS"}),(0,d.jsx)(t.td,{children:"The number of data rows that are filtered out due to the conditions specified in the WHERE clause."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SINK_ROWS"}),(0,d.jsx)(t.td,{children:"The number of data rows that are loaded."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ETL_INFO"}),(0,d.jsx)(t.td,{children:"The ETL details of the load job. A non-empty value is returned only for Spark Load. For any other types of load jobs, an empty value is returned."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TASK_INFO"}),(0,d.jsxs)(t.td,{children:["The task execution details of the load job, such as the ",(0,d.jsx)(t.code,{children:"timeout"})," and ",(0,d.jsx)(t.code,{children:"max_filter_ratio"})," settings."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CREATE_TIME"}),(0,d.jsxs)(t.td,{children:["The time at which the load job was created. Format: ",(0,d.jsx)(t.code,{children:"yyyy-MM-dd HH:mm:ss"}),". Example: ",(0,d.jsx)(t.code,{children:"2023-07-24 14:58:58"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ETL_START_TIME"}),(0,d.jsxs)(t.td,{children:["The start time of the ETL stage of the load job. Format: ",(0,d.jsx)(t.code,{children:"yyyy-MM-dd HH:mm:ss"}),". Example: ",(0,d.jsx)(t.code,{children:"2023-07-24 14:58:58"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ETL_FINISH_TIME"}),(0,d.jsxs)(t.td,{children:["The end time of the ETL stage of the load job. Format: ",(0,d.jsx)(t.code,{children:"yyyy-MM-dd HH:mm:ss"}),". Example: ",(0,d.jsx)(t.code,{children:"2023-07-24 14:58:58"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOAD_START_TIME"}),(0,d.jsxs)(t.td,{children:["The start time of the LOADING stage of the load job. Format: ",(0,d.jsx)(t.code,{children:"yyyy-MM-dd HH:mm:ss"}),". Example: ",(0,d.jsx)(t.code,{children:"2023-07-24 14:58:58"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOAD_FINISH_TIME"}),(0,d.jsxs)(t.td,{children:["The end time of the LOADING stage of the load job. Format: ",(0,d.jsx)(t.code,{children:"yyyy-MM-dd HH:mm:ss"}),". Example: ",(0,d.jsx)(t.code,{children:"2023-07-24 14:58:58"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"JOB_DETAILS"}),(0,d.jsx)(t.td,{children:"The details about the data loaded, such as the number of bytes and the number of files."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ERROR_MSG"}),(0,d.jsxs)(t.td,{children:["The error message of the load job. If the load job did not encounter any error, ",(0,d.jsx)(t.code,{children:"NULL"})," is returned."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TRACKING_URL"}),(0,d.jsxs)(t.td,{children:["The URL from which you can access the unqualified data row samples detected in the load job. You can use the ",(0,d.jsx)(t.code,{children:"curl"})," or ",(0,d.jsx)(t.code,{children:"wget"})," command to access the URL and obtain the unqualified data row samples. If no unqualified data is detected, ",(0,d.jsx)(t.code,{children:"NULL"})," is returned."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TRACKING_SQL"}),(0,d.jsxs)(t.td,{children:["The SQL statement that can be used to query the tracking log of the load job. A SQL statement is returned only when the load job involves unqualified data rows. If the load job does not involve any unqualified data rows, ",(0,d.jsx)(t.code,{children:"NULL"})," is returned."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REJECTED_RECORD_PATH"}),(0,d.jsxs)(t.td,{children:["The path from which you can access all the unqualified data rows that are filtered out in the load job. The number of unqualified data rows logged is determined by the ",(0,d.jsx)(t.code,{children:"log_rejected_record_num"})," parameter configured in the load job. You can use the ",(0,d.jsx)(t.code,{children:"wget"})," command to access the path. If the load job does not involve any unqualified data rows, ",(0,d.jsx)(t.code,{children:"NULL"})," is returned."]})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"tables",children:"tables"}),"\n",(0,d.jsxs)(t.p,{children:["The following fields are provided in ",(0,d.jsx)(t.code,{children:"tables"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Field"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Description"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_CATALOG"}),(0,d.jsx)(t.td,{children:"Name of the catalog that stores the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,d.jsx)(t.td,{children:"Name of the database that stores the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_NAME"}),(0,d.jsx)(t.td,{children:"Name of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_TYPE"}),(0,d.jsx)(t.td,{children:'Type of the table. Valid values: "BASE TABLE" or "VIEW".'})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ENGINE"}),(0,d.jsx)(t.td,{children:'Engine type of the table. Valid values: "StarRocks", "MySQL", "MEMORY" or an empty string.'})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"VERSION"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ROW_FORMAT"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_ROWS"}),(0,d.jsx)(t.td,{children:"Row count of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"AVG_ROW_LENGTH"}),(0,d.jsxs)(t.td,{children:["Average row length (size) of the table. It is equivalent to ",(0,d.jsx)(t.code,{children:"DATA_LENGTH"})," / ",(0,d.jsx)(t.code,{children:"TABLE_ROWS"}),". Unit: Byte."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DATA_LENGTH"}),(0,d.jsx)(t.td,{children:"Data length (size) of the table. Unit: Byte."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MAX_DATA_LENGTH"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"INDEX_LENGTH"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DATA_FREE"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"AUTO_INCREMENT"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CREATE_TIME"}),(0,d.jsx)(t.td,{children:"The time when the table is created."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"UPDATE_TIME"}),(0,d.jsx)(t.td,{children:"The last time when the table is updated."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CHECK_TIME"}),(0,d.jsx)(t.td,{children:"The last time when a consistency check is performed on the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_COLLATION"}),(0,d.jsx)(t.td,{children:"The default collation of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CHECKSUM"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CREATE_OPTIONS"}),(0,d.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_COMMENT"}),(0,d.jsx)(t.td,{children:"Comment on the table."})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"tables_config",children:"tables_config"}),"\n",(0,d.jsxs)(t.p,{children:["The following fields are provided in ",(0,d.jsx)(t.code,{children:"tables_config"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Field"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Description"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,d.jsx)(t.td,{children:"Name of the database that stores the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_NAME"}),(0,d.jsx)(t.td,{children:"Name of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_ENGINE"}),(0,d.jsx)(t.td,{children:"Engine type of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_MODEL"}),(0,d.jsx)(t.td,{children:'Table type. Valid values: "DUP_KEYS", "AGG_KEYS", "UNQ_KEYS" or "PRI_KEYS".'})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PRIMARY_KEY"}),(0,d.jsx)(t.td,{children:"The primary key of a Primary Key table or a Unique Key table. An empty string is returned if the table is not a Primary Key table or a Unique Key table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PARTITION_KEY"}),(0,d.jsx)(t.td,{children:"The partitioning columns of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DISTRIBUTE_KEY"}),(0,d.jsx)(t.td,{children:"The bucketing columns of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DISTRIBUTE_TYPE"}),(0,d.jsx)(t.td,{children:"The data distribution method of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DISTRIBUTE_BUCKET"}),(0,d.jsx)(t.td,{children:"Number of buckets in the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SORT_KEY"}),(0,d.jsx)(t.td,{children:"Sort keys of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PROPERTIES"}),(0,d.jsx)(t.td,{children:"Properties of the table."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_ID"}),(0,d.jsx)(t.td,{children:"ID of the table."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"load_tracking_logs",children:"load_tracking_logs"}),"\n",(0,d.jsx)(t.p,{children:"This feature is supported since StarRocks v3.0."}),"\n",(0,d.jsxs)(t.p,{children:["The following fields are provided in ",(0,d.jsx)(t.code,{children:"load_tracking_logs"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Field"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Description"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"JOB_ID"}),(0,d.jsx)(t.td,{children:"The ID of the load job."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LABEL"}),(0,d.jsx)(t.td,{children:"The label of the load job."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DATABASE_NAME"}),(0,d.jsx)(t.td,{children:"The database that the load job belongs to."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TRACKING_LOG"}),(0,d.jsx)(t.td,{children:"Error logs (if any) of the load job."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Type"}),(0,d.jsx)(t.td,{children:"The type of the load job. Valid values: BROKER, INSERT, ROUTINE_LOAD and STREAM_LOAD."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"materialized_views",children:"materialized_views"}),"\n",(0,d.jsxs)(t.p,{children:["The following fields are provided in ",(0,d.jsx)(t.code,{children:"materialized_views"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Field"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Description"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MATERIALIZED_VIEW_ID"}),(0,d.jsx)(t.td,{children:"ID of the materialized view"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,d.jsx)(t.td,{children:"Database in which the materialized view resides"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_NAME"}),(0,d.jsx)(t.td,{children:"Name of the materialized view"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REFRESH_TYPE"}),(0,d.jsxs)(t.td,{children:["Refresh type of the materialized view, including ",(0,d.jsx)(t.code,{children:"ROLLUP"}),", ",(0,d.jsx)(t.code,{children:"ASYNC"}),", and ",(0,d.jsx)(t.code,{children:"MANUAL"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"IS_ACTIVE"}),(0,d.jsx)(t.td,{children:"Indicates whether the materialized view is active. Inactive materialized views can not be refreshed or queried."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"INACTIVE_REASON"}),(0,d.jsx)(t.td,{children:"The reason that the materialized view is inactive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PARTITION_TYPE"}),(0,d.jsx)(t.td,{children:"Type of partitioning strategy for the materialized view"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TASK_ID"}),(0,d.jsx)(t.td,{children:"ID of the task responsible for refreshing the materialized view"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TASK_NAME"}),(0,d.jsx)(t.td,{children:"Name of the task responsible for refreshing the materialized view"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_START_TIME"}),(0,d.jsx)(t.td,{children:"Start time of the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_FINISHED_TIME"}),(0,d.jsx)(t.td,{children:"End time of the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_DURATION"}),(0,d.jsx)(t.td,{children:"Duration of the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_STATE"}),(0,d.jsx)(t.td,{children:"State of the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_FORCE_REFRESH"}),(0,d.jsx)(t.td,{children:"Indicates whether the most recent refresh task was a force refresh"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_START_PARTITION"}),(0,d.jsx)(t.td,{children:"Starting partition for the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_END_PARTITION"}),(0,d.jsx)(t.td,{children:"Ending partition for the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_BASE_REFRESH_PARTITIONS"}),(0,d.jsx)(t.td,{children:"Base table partitions involved in the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_MV_REFRESH_PARTITIONS"}),(0,d.jsx)(t.td,{children:"Materialized view partitions refreshed in the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_ERROR_CODE"}),(0,d.jsx)(t.td,{children:"Error code of the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LAST_REFRESH_ERROR_MESSAGE"}),(0,d.jsx)(t.td,{children:"Error message of the most recent refresh task"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TABLE_ROWS"}),(0,d.jsx)(t.td,{children:"Number of data rows in the materialized view, based on approximate background statistics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MATERIALIZED_VIEW_DEFINITION"}),(0,d.jsx)(t.td,{children:"SQL definition of the materialized view"})]})]})]})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>i});var d=s(67294);const r=d.createContext({});function i(e){const t=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||n:i(e),d.createElement(r.Provider,{value:l},t)}}}]);