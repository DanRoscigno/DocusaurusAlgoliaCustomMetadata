"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97309],{82462:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=t(85893),r=t(11151);const n={displayed_sidebar:"documentation"},a="StarRocks version 2.1",o={id:"release_notes/release-2.1",title:"StarRocks version 2.1",description:"2.1.13",source:"@site/versioned_docs/version-2.5/release_notes/release-2.1.md",sourceDirName:"release_notes",slug:"/release_notes/release-2.1",permalink:"/doc/docs/2.5/release_notes/release-2.1",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/release_notes/release-2.1.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation"},l={},c=[{value:"2.1.13",id:"2113",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"2.1.12",id:"2112",level:2},{value:"Improvements",id:"improvements-1",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"2.1.11",id:"2111",level:2},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"2.1.10",id:"2110",level:2},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"2.1.8",id:"218",level:2},{value:"Improvements",id:"improvements-2",level:3},{value:"Bug Fixes",id:"bug-fixes-4",level:3},{value:"2.1.7",id:"217",level:2},{value:"Improvements",id:"improvements-3",level:3},{value:"Bug Fixes",id:"bug-fixes-5",level:3},{value:"2.1.6",id:"216",level:2},{value:"Bug Fixes",id:"bug-fixes-6",level:3},{value:"2.1.5",id:"215",level:2},{value:"Bug Fixes",id:"bug-fixes-7",level:3},{value:"2.1.4",id:"214",level:2},{value:"New Features",id:"new-features",level:3},{value:"Bug Fixes",id:"bug-fixes-8",level:3},{value:"2.1.3",id:"213",level:2},{value:"Bug Fixes",id:"bug-fixes-9",level:3},{value:"2.1.2",id:"212",level:2},{value:"Bug Fixes",id:"bug-fixes-10",level:3},{value:"2.1.0",id:"210",level:2},{value:"New Features",id:"new-features-1",level:3},{value:"Improvements",id:"improvements-4",level:3},{value:"Bug Fixes",id:"bug-fixes-11",level:3},{value:"Behavior Change",id:"behavior-change",level:3},{value:"Others",id:"others",level:3}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",a:"a"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"starrocks-version-21",children:"StarRocks version 2.1"}),"\n",(0,i.jsx)(s.h2,{id:"2113",children:"2.1.13"}),"\n",(0,i.jsx)(s.p,{children:"Release date: September 6, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Added a BE configuration item ",(0,i.jsx)(s.code,{children:"enable_check_string_lengths"})," to check the length of loaded data. This mechanism helps prevent compaction failures caused by VARCHAR data size out of range. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10380",children:"#10380"})]}),"\n",(0,i.jsxs)(s.li,{children:["Optimized the query performance when a query contains more than 1000 OR operators. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9332",children:"#9332"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["An error may occur and BEs may crash when you query ARRAY columns (calculated by using the REPLACE_IF_NOT_NULL function) from a table using the Aggregate table. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10144",children:"#10144"})]}),"\n",(0,i.jsxs)(s.li,{children:["The query result is incorrect if more than one IFNULL() function is nested in the query. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5028",children:"#5028"})," ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10486",children:"#10486"})]}),"\n",(0,i.jsxs)(s.li,{children:["After a dynamic partition is truncated, the number of tablets in the partition changes from the value configured by dynamic partitioning to the default value. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10435",children:"#10435"})]}),"\n",(0,i.jsxs)(s.li,{children:["If the Kafka cluster is stopped when you use Routine Load to load data into StarRocks, deadlocks may occur, affecting query performance. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/8947",children:"#8947"})]}),"\n",(0,i.jsxs)(s.li,{children:["An error occurs when a query contains both subqueries and ORDER BY clauses. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10066",children:"#10066"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"2112",children:"2.1.12"}),"\n",(0,i.jsx)(s.p,{children:"Release date: August 9, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"improvements-1",children:"Improvements"}),"\n",(0,i.jsxs)(s.p,{children:["Added two parameters, ",(0,i.jsx)(s.code,{children:"bdbje_cleaner_threads"})," and ",(0,i.jsx)(s.code,{children:"bdbje_replay_cost_percent"}),", to speed up metadata cleanup in BDB JE. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/8371",children:"#8371"})]}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-1",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Some queries are forwarded to the Leader FE, causing the ",(0,i.jsx)(s.code,{children:"/api/query_detail"})," action to return incorrect execution information about SQL statements such as SHOW FRONTENDS. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/9185",children:"#9185"})]}),"\n",(0,i.jsxs)(s.li,{children:["After a BE is terminated, the current process is not completely terminated, resulting in a failed restart of the BE. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9267",children:"#9175"})]}),"\n",(0,i.jsxs)(s.li,{children:["When multiple Broker Load jobs are created to load the same HDFS data file, if one job encounters exceptions, the other jobs may not be able to properly read data and consequently fail. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/9506",children:"#9506"})]}),"\n",(0,i.jsxs)(s.li,{children:["The related variables are not reset when the schema of a table changes, resulting in an error (",(0,i.jsx)(s.code,{children:"no delete vector found tablet"}),") when querying the table. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/9192",children:"#9192"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"2111",children:"2.1.11"}),"\n",(0,i.jsx)(s.p,{children:"Release date: July 9, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-2",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Data loading into a table of the Primary Key model is suspended in the event of frequent data loads into that table.",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/7763",children:"#7763"})]}),"\n",(0,i.jsxs)(s.li,{children:["Aggregate expressions are processed in an incorrect sequence during low-cardinality optimization, causing the ",(0,i.jsx)(s.code,{children:"count distinct"})," function to return unexpected results. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/7659",children:"#7659"})]}),"\n",(0,i.jsxs)(s.li,{children:["No results are returned for the LIMIT clause, because the pruning rule in the clause cannot be properly processed. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7894",children:"#7894"})]}),"\n",(0,i.jsxs)(s.li,{children:["If the global dictionary for low-cardinality optimization is applied on columns that are defined as join conditions for a query, the query returns unexpected results. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/8302",children:"#8302"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"2110",children:"2.1.10"}),"\n",(0,i.jsx)(s.p,{children:"Release date: June 24, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-3",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Switching Leader FE node repetitively may cause all load jobs hang and fail. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/7350",children:"#7350"})]}),"\n",(0,i.jsxs)(s.li,{children:["Field of DECIMAL(18,2) type is shown as DECIMAL64(18,2) when checking the table schema with ",(0,i.jsx)(s.code,{children:"DESC"})," SQL. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7309",children:"#7309"})]}),"\n",(0,i.jsxs)(s.li,{children:["BE crashes when the memory usage estimation of MemTable exceeds 4GB, because, during a data skew in load, some fields may occupy a large amount of memory resources. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/7161",children:"#7161"})]}),"\n",(0,i.jsxs)(s.li,{children:["A large number of small segment files are created due to the overflow in the calculation of the max_rows_per_segment when there are many input rows in a compaction. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5610",children:"#5610"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"218",children:"2.1.8"}),"\n",(0,i.jsx)(s.p,{children:"Release date: June 9, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"improvements-2",children:"Improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The concurrency control mechanism used for internal processing workloads such as schema changes is optimized to reduce the pressure on frontend (FE) metadata. As such, load jobs are less likely to pile up and slow down if these load jobs are concurrently run to load a large amount of data. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6560",children:"#6560"})," ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6804",children:"#6804"})]}),"\n",(0,i.jsxs)(s.li,{children:["The performance of StarRocks in loading data at a high frequency is improved. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6532",children:"#6532"})," ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6533",children:"#6533"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-4",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["ALTER operation logs do not record all information about LOAD statements. Therefore, after you perform an ALTER operation on a routine load job, the metadata of the job is lost after checkpoints are created. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6936",children:"#6936"})]}),"\n",(0,i.jsxs)(s.li,{children:["A deadlock may occur if you stop a routine load job. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6450",children:"#6450"})]}),"\n",(0,i.jsxs)(s.li,{children:["By default, a backend (BE) uses the default UTC+8 time zone for a load job. If your server uses the UTC time zone, 8 hours are added to the timestamps in the DateTime column of the table that is loaded by using a Spark load job. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6592",children:"#6592"})]}),"\n",(0,i.jsxs)(s.li,{children:["The GET_JSON_STRING function cannot process non-JSON strings. If you extract a JSON value from a JSON object or array, the function returns NULL. The function has been optimized to return an equivalent JSON-formatted STRING value for a JSON object or array. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6426",children:"#6426"})]}),"\n",(0,i.jsxs)(s.li,{children:["If the data volume is large, a schema change may fail due to excessive memory consumption. Optimizations have been made to allow you to specify memory consumption limits at all stages of a schema change. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6705",children:"#6705"})]}),"\n",(0,i.jsxs)(s.li,{children:["If the number of duplicate values in a column of a table that is being compacted exceeds 0x40000000, the compaction is suspended. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6513",children:"#6513"})]}),"\n",(0,i.jsxs)(s.li,{children:["After an FE restarts, it encounters high I/O and abnormally increasing disk usage due to a few issues in BDB JE v7.3.8 and shows no sign of restoring to normal. The FE is restored to normal after it rolls back to BDB JE v7.3.7. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6634",children:"#6634"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"217",children:"2.1.7"}),"\n",(0,i.jsx)(s.p,{children:"Release date: May 26, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"improvements-3",children:"Improvements"}),"\n",(0,i.jsxs)(s.p,{children:["For window functions in which the frame is set to ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW, if the partition involved in a calculation is large, StarRocks caches all data of the partition before it performs the calculation. In this situation, a large number of memory resources are consumed. StarRocks has been optimized not to cache all data of the partition in this situation. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5829",children:"5829"})]}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-5",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["When data is loaded into a table that uses the Primary Key model, data processing errors may occur if the creation time of each data version stored in the system does not monotonically increase due to reasons such as backward-moved system time and related unknown bugs. Such data processing errors cause backends (BEs) to stop. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6046",children:"#6046"})]}),"\n",(0,i.jsxs)(s.li,{children:["Some graphical user interface (GUI) tools automatically configure the set_sql_limit variable. As a result, the SQL statement ORDER BY LIMIT is ignored, and consequently an incorrect number of rows are returned for queries. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5966",children:"#5966"})]}),"\n",(0,i.jsxs)(s.li,{children:["If the DROP SCHEMA statement is executed on a database, the database is forcibly deleted and cannot be restored. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6201",children:"#6201"})]}),"\n",(0,i.jsxs)(s.li,{children:["When JSON-formatted data is loaded, BEs stop if the data contains JSON format errors. For example, key-value pairs are not separated by commas (,). ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6098",children:"#6098"})]}),"\n",(0,i.jsxs)(s.li,{children:["When a large amount of data is being loaded in a highly concurrent manner, tasks that are run to write data to disks are piled up on BEs. In this situation, the BEs may stop. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3877",children:"#3877"})]}),"\n",(0,i.jsxs)(s.li,{children:["StarRocks estimates the amount of memory that is required before it performs a schema change on a table. If the table contains a large number of STRING fields, the memory estimation result may be inaccurate. In this situation, if the estimated amount of memory that is required exceeds the maximum memory that is allowed for a single schema change operation, schema change operations that are supposed to be properly run encounter errors. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6322",children:"#6322"})]}),"\n",(0,i.jsxs)(s.li,{children:['After a schema change is performed on a table that uses the Primary Key model, a "duplicate key xxx" error may occur when data is loaded into that table. ',(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5878",children:"#5878"})]}),"\n",(0,i.jsxs)(s.li,{children:["If low-cardinality optimization is performed during Shuffle Join operations, partitioning errors may occur. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4890",children:"#4890"})]}),"\n",(0,i.jsx)(s.li,{children:"If a colocation group (CG) contains a large number of tables and data is frequently loaded into the tables, the CG may not be able to stay in the stable state. In this case, the JOIN statement does not support Colocate Join operations. StarRocks has been optimized to wait for a little longer during data loading. This way, the integrity of the tablet replicas to which data is loaded can be maximized."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"216",children:"2.1.6"}),"\n",(0,i.jsx)(s.p,{children:"Release date: May 10, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-6",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["When you run queries after you perform multiple DELETE operations, you may obtain incorrect query results if optimization on low-cardinality columns is performed for the queries. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5712",children:"#5712"})]}),"\n",(0,i.jsxs)(s.li,{children:["If tablets are migrated in specific data ingestion phases, data continues to be written to the original disk on which the tablets are stored. As a result, data is lost, and queries cannot be run properly. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5160",children:"#5160"})]}),"\n",(0,i.jsxs)(s.li,{children:["If you covert values between the DECIMAL and STRING data types, the return values may be in an unexpected precision. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5608",children:"#5608"})]}),"\n",(0,i.jsxs)(s.li,{children:["If you multiply a DECIMAL value by a BIGINT value, an arithmetic overflow may occur. A few adjustments and optimizations are made to fix this bug. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4211",children:"#4211"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"215",children:"2.1.5"}),"\n",(0,i.jsx)(s.p,{children:"Release date: April 27, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-7",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The calculation result is not correct when decimal multiplication overflows. After the bug is fixed, NULL is returned when decimal multiplication overflows."}),"\n",(0,i.jsxs)(s.li,{children:["When statistics have a considerable deviation from the actual statistics, the priority of Collocate Join may be lower than Broadcast Join. As a result, the query planner may not choose Colocate Join as the more appropriate Join strategy. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4817",children:"#4817"})]}),"\n",(0,i.jsx)(s.li,{children:"Query fails because the plan for complex expressions is wrong when there are more than 4 tables to join."}),"\n",(0,i.jsxs)(s.li,{children:["BEs may stop working under Shuffle Join when the shuffle column is a low-cardinality column. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4890",children:"#4890"})]}),"\n",(0,i.jsxs)(s.li,{children:["BEs may stop working when the SPLIT function uses a NULL parameter. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4092",children:"#4092"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"214",children:"2.1.4"}),"\n",(0,i.jsx)(s.p,{children:"Release date: April 8, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"new-features",children:"New Features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"UUID_NUMERIC"})," function is supported, which returns a LARGEINT value. Compared with ",(0,i.jsx)(s.code,{children:"UUID"})," function, the performance of ",(0,i.jsx)(s.code,{children:"UUID_NUMERIC"})," function can be improved by nearly 2 orders of magnitude."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-8",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["After deleting columns, adding new partitions, and cloning tablets,  the columns' unique ids in old and new tablets may not be the same, which may cause BE to stop working because the system uses a shared tablet schema. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4514",children:"#4514"})]}),"\n",(0,i.jsxs)(s.li,{children:["When data is loading to a StarRocks external table, if the configured FE of the target StarRocks cluster is not a Leader, it will cause the FE to stop working. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4573",children:"#4573"})]}),"\n",(0,i.jsxs)(s.li,{children:["The results of ",(0,i.jsx)(s.code,{children:"CAST"})," function are different in StarRocks version 1.19 and 2.1. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4701",children:"#4701"})]}),"\n",(0,i.jsxs)(s.li,{children:["Query results may be incorrect, when a Duplicate Key table performs schema change and creates materialized view at the same time. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4839",children:"#4839"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"213",children:"2.1.3"}),"\n",(0,i.jsx)(s.p,{children:"Release date: March 19, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-9",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The problem of possible data loss due to BE failure (solved by using Batch publish version). ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3140",children:"#3140"})]}),"\n",(0,i.jsx)(s.li,{children:"Some queries may cause memory limit exceeded errors due to inappropriate execution plans."}),"\n",(0,i.jsxs)(s.li,{children:["The checksum between replicas may be inconsistent in different compaction processes. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3438",children:"#3438"})]}),"\n",(0,i.jsxs)(s.li,{children:["Query may fail in some situation when JSON reorder projection is not processed correctly. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4056",children:"#4056"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"212",children:"2.1.2"}),"\n",(0,i.jsx)(s.p,{children:"Release date: March 14, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-10",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["In a rolling upgrade from version 1.19 to 2.1, BE nodes stop working because of unmatched chunk sizes beween two versions. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3834",children:"#3834"})]}),"\n",(0,i.jsxs)(s.li,{children:["Loading tasks may fail while StarRocks is updating from version 2.0 to 2.1. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3828",children:"#3828"})]}),"\n",(0,i.jsxs)(s.li,{children:["Query fails when there is no appropriate execution plan for single-tablet table joins. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3854",children:"#3854"})]}),"\n",(0,i.jsxs)(s.li,{children:["A deadlock problem may occur when an FE node collects information to build a global dictionary for low-cardinality optimization. ",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3839",children:"#3839"})]}),"\n",(0,i.jsx)(s.li,{children:"Query fails when BE nodes are in suspended animation due to deadlock."}),"\n",(0,i.jsxs)(s.li,{children:["BI tools cannot connect to StarRocks when the SHOW VARIABLES command fails.",(0,i.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/3708",children:"#3708"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"210",children:"2.1.0"}),"\n",(0,i.jsx)(s.p,{children:"Release date: February 24, 2022"}),"\n",(0,i.jsx)(s.h3,{id:"new-features-1",children:"New Features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"[Preview] StarRocks now supports Iceberg external tables."}),"\n",(0,i.jsx)(s.li,{children:"[Preview] The pipeline engine is now available. It is a new execution engine designed for multicore scheduling. The query parallelism can be adaptively adjusted without the need to set the parallel_fragment_exec_instance_num parameter. This also improves performance in high concurrency scenarios."}),"\n",(0,i.jsx)(s.li,{children:"The CTAS (CREATE TABLE AS SELECT) statement is supported, making ETL and table creation easier."}),"\n",(0,i.jsx)(s.li,{children:"SQL fingerprint is supported. SQL fingerprint is generated in audit.log, which facilitates the location of slow queries."}),"\n",(0,i.jsx)(s.li,{children:"The ANY_VALUE, ARRAY_REMOVE and SHA2 functions are supported."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"improvements-4",children:"Improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Compaction is optimized. A flat table can contain up to 10,000 columns."}),"\n",(0,i.jsx)(s.li,{children:"The performance of first-time scan and page cache is optimized. Random I/O is reduced to improve first-time scan performance. The improvement is more noticeable if first-time scan occurs on SATA disks. StarRocks' page cache can store original data, which eliminates the need for bitshuffle encoding and unnecessary decoding. This improves the cache hit rate and query efficiency."}),"\n",(0,i.jsxs)(s.li,{children:["Schema change is supported in the primary key model. You can add, delete, and modify bitmap indexes by using ",(0,i.jsx)(s.code,{children:"Alter table"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"[Preview] The size of a string can be up to 1 MB."}),"\n",(0,i.jsx)(s.li,{children:"JSON load performance is optimized. You can load more than 100 MB JSON data in a single file."}),"\n",(0,i.jsx)(s.li,{children:"Bitmap index performance is optimized."}),"\n",(0,i.jsx)(s.li,{children:"The performance of StarRocks Hive external tables is optimized. Data in the CSV format can be read."}),"\n",(0,i.jsxs)(s.li,{children:["DEFAULT CURRENT_TIMESTAMP is supported in the ",(0,i.jsx)(s.code,{children:"create table"})," statement."]}),"\n",(0,i.jsx)(s.li,{children:"StarRocks supports the loading of CSV files with multiple delimiters."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"bug-fixes-11",children:"Bug Fixes"}),"\n",(0,i.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Auto __op mapping does not take effect if jsonpaths is specified in the command used for loading JSON data."}),"\n",(0,i.jsx)(s.li,{children:"BE nodes fail because the source data changes during data loading using Broker Load."}),"\n",(0,i.jsx)(s.li,{children:"Some SQL statements report errors after materialized views are created."}),"\n",(0,i.jsx)(s.li,{children:"The routine load does not work due to quoted jsonpaths."}),"\n",(0,i.jsx)(s.li,{children:"Query concurrency decreases sharply when the number of columns to query exceeds 200."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"behavior-change",children:"Behavior Change"}),"\n",(0,i.jsxs)(s.p,{children:["The API for disabling a Colocation Group is changed from ",(0,i.jsx)(s.code,{children:"DELETE /api/colocate/group_stable"})," to ",(0,i.jsx)(s.code,{children:"POST /api/colocate/group_unstable"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"others",children:"Others"}),"\n",(0,i.jsx)(s.p,{children:"flink-connector-starrocks is now available for Flink to read StarRocks data in batches. This improves data read efficiency compared to the JDBC connector."})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>n});var i=t(67294);const r=i.createContext({});function n(e){const s=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:n(e),i.createElement(r.Provider,{value:o},s)}}}]);