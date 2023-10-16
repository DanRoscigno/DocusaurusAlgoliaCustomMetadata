"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25176],{30971:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var s=i(85893),r=i(11151);const n={displayed_sidebar:"English"},d="Information Schema",a={id:"administration/information_schema",title:"Information Schema",description:"The StarRocks informationschema is a database within each StarRocks instance. informationschema contains several read-only, system-defined tables which store extensive metadata information of all objects that the StarRocks instance maintains.",source:"@site/versioned_docs/version-3.0/administration/information_schema.md",sourceDirName:"administration",slug:"/administration/information_schema",permalink:"/doc/docs/3.0/administration/information_schema",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/information_schema.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"File manager",permalink:"/doc/docs/3.0/administration/filemanager"},next:{title:"Monitor and manage big queries",permalink:"/doc/docs/3.0/administration/monitor_manage_big_queries"}},l={},h=[{value:"View metadata via Information Schema",id:"view-metadata-via-information-schema",level:2},{value:"Information Schema tables",id:"information-schema-tables",level:2},{value:"tables",id:"tables",level:3},{value:"tables_config",id:"tables_config",level:3},{value:"load_tracking_logs",id:"load_tracking_logs",level:2},{value:"materialized_views",id:"materialized_views",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",h3:"h3"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"information-schema",children:"Information Schema"}),"\n",(0,s.jsxs)(t.p,{children:["The StarRocks ",(0,s.jsx)(t.code,{children:"information_schema"})," is a database within each StarRocks instance. ",(0,s.jsx)(t.code,{children:"information_schema"})," contains several read-only, system-defined tables which store extensive metadata information of all objects that the StarRocks instance maintains."]}),"\n",(0,s.jsx)(t.h2,{id:"view-metadata-via-information-schema",children:"View metadata via Information Schema"}),"\n",(0,s.jsxs)(t.p,{children:["You can view the metadata information within a StarRocks instance by querying the content of tables in ",(0,s.jsx)(t.code,{children:"information_schema"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The following example views metadata information about a table named ",(0,s.jsx)(t.code,{children:"sr_member"})," in StarRocks by querying the table ",(0,s.jsx)(t.code,{children:"tables"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> SELECT * FROM information_schema.tables WHERE TABLE_NAME like 'sr_member'\\G\n*************************** 1. row ***************************\n  TABLE_CATALOG: def\n   TABLE_SCHEMA: sr_hub\n     TABLE_NAME: sr_member\n     TABLE_TYPE: BASE TABLE\n         ENGINE: StarRocks\n        VERSION: NULL\n     ROW_FORMAT: NULL\n     TABLE_ROWS: 6\n AVG_ROW_LENGTH: 542\n    DATA_LENGTH: 3255\nMAX_DATA_LENGTH: NULL\n   INDEX_LENGTH: NULL\n      DATA_FREE: NULL\n AUTO_INCREMENT: NULL\n    CREATE_TIME: 2022-11-17 14:32:30\n    UPDATE_TIME: 2022-11-17 14:32:55\n     CHECK_TIME: NULL\nTABLE_COLLATION: utf8_general_ci\n       CHECKSUM: NULL\n CREATE_OPTIONS: NULL\n  TABLE_COMMENT: OLAP\n1 row in set (1.04 sec)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"information-schema-tables",children:"Information Schema tables"}),"\n",(0,s.jsxs)(t.p,{children:["StarRocks have optimized the metadata information provided by the following tables in ",(0,s.jsx)(t.code,{children:"information_schema"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Information Schema table name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#tables",children:"tables"})}),(0,s.jsx)(t.td,{children:"Provides general metadata information of tables."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#tables_config",children:"tables_config"})}),(0,s.jsx)(t.td,{children:"Provides additional table metadata information that is unique to StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#load_tracking_logs",children:"load_tracking_logs"})}),(0,s.jsx)(t.td,{children:"Provides error information (if any) of load jobs."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"tables",children:"tables"}),"\n",(0,s.jsxs)(t.p,{children:["The following fields are provided in ",(0,s.jsx)(t.code,{children:"tables"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Field"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_CATALOG"}),(0,s.jsx)(t.td,{children:"Name of the catalog that stores the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,s.jsx)(t.td,{children:"Name of the database that stores the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_NAME"}),(0,s.jsx)(t.td,{children:"Name of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_TYPE"}),(0,s.jsx)(t.td,{children:'Type of the table. Valid values: "BASE TABLE" or "VIEW".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ENGINE"}),(0,s.jsx)(t.td,{children:'Engine type of the table. Valid values: "StarRocks", "MySQL", "MEMORY" or an empty string.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VERSION"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ROW_FORMAT"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_ROWS"}),(0,s.jsx)(t.td,{children:"Row count of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AVG_ROW_LENGTH"}),(0,s.jsxs)(t.td,{children:["Average row length (size) of the table. It is equivalent to ",(0,s.jsx)(t.code,{children:"DATA_LENGTH"})," / ",(0,s.jsx)(t.code,{children:"TABLE_ROWS"}),". Unit: Byte."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DATA_LENGTH"}),(0,s.jsx)(t.td,{children:"Data length (size) of the table. Unit: Byte."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MAX_DATA_LENGTH"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"INDEX_LENGTH"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DATA_FREE"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_INCREMENT"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CREATE_TIME"}),(0,s.jsx)(t.td,{children:"The time when the table is created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UPDATE_TIME"}),(0,s.jsx)(t.td,{children:"The last time when the table is updated."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CHECK_TIME"}),(0,s.jsx)(t.td,{children:"The last time when a consistency check is performed on the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_COLLATION"}),(0,s.jsx)(t.td,{children:"The default collation of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CHECKSUM"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CREATE_OPTIONS"}),(0,s.jsx)(t.td,{children:"Applies to a feature not available in StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_COMMENT"}),(0,s.jsx)(t.td,{children:"Comment on the table."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"tables_config",children:"tables_config"}),"\n",(0,s.jsxs)(t.p,{children:["The following fields are provided in ",(0,s.jsx)(t.code,{children:"tables_config"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Field"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,s.jsx)(t.td,{children:"Name of the database that stores the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_NAME"}),(0,s.jsx)(t.td,{children:"Name of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_ENGINE"}),(0,s.jsx)(t.td,{children:"Engine type of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_MODEL"}),(0,s.jsx)(t.td,{children:'Table type. Valid values: "DUP_KEYS", "AGG_KEYS", "UNQ_KEYS" or "PRI_KEYS".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PRIMARY_KEY"}),(0,s.jsx)(t.td,{children:"The primary key of a Primary Key table or a Unique Key table. An empty string is returned if the table is not a Primary Key table or a Unique Key table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PARTITION_KEY"}),(0,s.jsx)(t.td,{children:"The partitioning columns of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISTRIBUTE_KEY"}),(0,s.jsx)(t.td,{children:"The bucketing columns of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISTRIBUTE_TYPE"}),(0,s.jsx)(t.td,{children:"The data distribution method of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISTRIBUTE_BUCKET"}),(0,s.jsx)(t.td,{children:"Number of buckets in the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SORT_KEY"}),(0,s.jsx)(t.td,{children:"Sort keys of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PROPERTIES"}),(0,s.jsx)(t.td,{children:"Properties of the table."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_ID"}),(0,s.jsx)(t.td,{children:"ID of the table."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"load_tracking_logs",children:"load_tracking_logs"}),"\n",(0,s.jsx)(t.p,{children:"This feature is supported since StarRocks v3.0."}),"\n",(0,s.jsxs)(t.p,{children:["The following fields are provided in ",(0,s.jsx)(t.code,{children:"load_tracking_logs"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Field"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JOB_ID"}),(0,s.jsx)(t.td,{children:"The ID of the load job."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LABEL"}),(0,s.jsx)(t.td,{children:"The label of the load job."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DATABASE_NAME"}),(0,s.jsx)(t.td,{children:"The database that the load job belongs to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TRACKING_LOG"}),(0,s.jsx)(t.td,{children:"Error logs (if any) of the load job."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:"The type of the load job. Valid values: BROKER, INSERT, ROUTINE_LOAD and STREAM_LOAD."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"materialized_views",children:"materialized_views"}),"\n",(0,s.jsxs)(t.p,{children:["The following fields are provided in ",(0,s.jsx)(t.code,{children:"materialized_views"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Field"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MATERIALIZED_VIEW_ID"}),(0,s.jsx)(t.td,{children:"ID of the materialized view"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,s.jsx)(t.td,{children:"Database in which the materialized view resides"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_NAME"}),(0,s.jsx)(t.td,{children:"Name of the materialized view"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"REFRESH_TYPE"}),(0,s.jsxs)(t.td,{children:["Refresh type of the materialized view, including ",(0,s.jsx)(t.code,{children:"ROLLUP"}),", ",(0,s.jsx)(t.code,{children:"ASYNC"}),", and ",(0,s.jsx)(t.code,{children:"MANUAL"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"IS_ACTIVE"}),(0,s.jsx)(t.td,{children:"Indicates whether the materialized view is active. Inactive materialized views can not be refreshed or queried."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"INACTIVE_REASON"}),(0,s.jsx)(t.td,{children:"The reason that the materialized view is inactive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PARTITION_TYPE"}),(0,s.jsx)(t.td,{children:"Type of partitioning strategy for the materialized view"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TASK_ID"}),(0,s.jsx)(t.td,{children:"ID of the task responsible for refreshing the materialized view"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TASK_NAME"}),(0,s.jsx)(t.td,{children:"Name of the task responsible for refreshing the materialized view"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_START_TIME"}),(0,s.jsx)(t.td,{children:"Start time of the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_FINISHED_TIME"}),(0,s.jsx)(t.td,{children:"End time of the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_DURATION"}),(0,s.jsx)(t.td,{children:"Duration of the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_STATE"}),(0,s.jsx)(t.td,{children:"State of the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_FORCE_REFRESH"}),(0,s.jsx)(t.td,{children:"Indicates whether the most recent refresh task was a force refresh"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_START_PARTITION"}),(0,s.jsx)(t.td,{children:"Starting partition for the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_END_PARTITION"}),(0,s.jsx)(t.td,{children:"Ending partition for the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_BASE_REFRESH_PARTITIONS"}),(0,s.jsx)(t.td,{children:"Base table partitions involved in the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_MV_REFRESH_PARTITIONS"}),(0,s.jsx)(t.td,{children:"Materialized view partitions refreshed in the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_ERROR_CODE"}),(0,s.jsx)(t.td,{children:"Error code of the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LAST_REFRESH_ERROR_MESSAGE"}),(0,s.jsx)(t.td,{children:"Error message of the most recent refresh task"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE_ROWS"}),(0,s.jsx)(t.td,{children:"Number of data rows in the materialized view, based on approximate background statistics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MATERIALIZED_VIEW_DEFINITION"}),(0,s.jsx)(t.td,{children:"SQL definition of the materialized view"})]})]})]})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,t,i)=>{i.d(t,{Zo:()=>a,ah:()=>n});var s=i(67294);const r=s.createContext({});function n(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function a({components:e,children:t,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||d:n(e),s.createElement(r.Provider,{value:a},t)}}}]);