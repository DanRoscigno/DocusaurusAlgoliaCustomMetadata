"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50445],{39188:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(85893),t=i(11151);const s={},a="Troubleshooting asynchronous materialized views",o={id:"using_starrocks/troubleshooting_asynchronous_materialized_views",title:"Troubleshooting asynchronous materialized views",description:"This topic describes how to examine your asynchronous materialized views and solve the problems you have encountered while working with them.",source:"@site/versioned_docs/version-2.5/using_starrocks/troubleshooting_asynchronous_materialized_views.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/troubleshooting_asynchronous_materialized_views",permalink:"/doc/en/2.5/using_starrocks/troubleshooting_asynchronous_materialized_views",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/troubleshooting_asynchronous_materialized_views.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Sorted streaming aggregate",permalink:"/doc/en/2.5/using_starrocks/sorted_aggregate"}},l={},c=[{value:"Examine an asynchronous materialized view",id:"examine-an-asynchronous-materialized-view",level:2},{value:"Check the working state of an asynchronous materialized view",id:"check-the-working-state-of-an-asynchronous-materialized-view",level:3},{value:"View the refresh history of an asynchronous materialized view",id:"view-the-refresh-history-of-an-asynchronous-materialized-view",level:3},{value:"Monitor the resource consumption of an asynchronous materialized view",id:"monitor-the-resource-consumption-of-an-asynchronous-materialized-view",level:3},{value:"Monitor resource consumption during refresh",id:"monitor-resource-consumption-during-refresh",level:4},{value:"Analyze resource consumption after refresh",id:"analyze-resource-consumption-after-refresh",level:4},{value:"Verify whether queries are rewritten by an asynchronous materialized view",id:"verify-whether-queries-are-rewritten-by-an-asynchronous-materialized-view",level:3},{value:"Diagnose and solve problems",id:"diagnose-and-solve-problems",level:2},{value:"Failed to create an asynchronous materialized view",id:"failed-to-create-an-asynchronous-materialized-view",level:3},{value:"Materialized view fails to refresh",id:"materialized-view-fails-to-refresh",level:3},{value:"Materialized view state is not active",id:"materialized-view-state-is-not-active",level:3},{value:"Materialized view refresh task uses excessive resources",id:"materialized-view-refresh-task-uses-excessive-resources",level:3},{value:"Materialized view fails to rewrite queries",id:"materialized-view-fails-to-rewrite-queries",level:3}];function h(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",h3:"h3",a:"a",ul:"ul",li:"li",code:"code",pre:"pre",h4:"h4"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"troubleshooting-asynchronous-materialized-views",children:"Troubleshooting asynchronous materialized views"}),"\n",(0,r.jsx)(n.p,{children:"This topic describes how to examine your asynchronous materialized views and solve the problems you have encountered while working with them."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,r.jsx)(n.p,{children:"Some of the features shown below are only supported from StarRocks v3.1 onwards."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examine-an-asynchronous-materialized-view",children:"Examine an asynchronous materialized view"}),"\n",(0,r.jsx)(n.p,{children:"To get a whole picture of asynchronous materialized views that you are working with, you can first check their working state, refresh history, and resource consumption."}),"\n",(0,r.jsx)(n.h3,{id:"check-the-working-state-of-an-asynchronous-materialized-view",children:"Check the working state of an asynchronous materialized view"}),"\n",(0,r.jsxs)(n.p,{children:["You can check the working state of an asynchronous materialized view using ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",children:"SHOW MATERIALIZED VIEW"}),". Among all the information returned, you can focus on the following fields:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"is_active"}),": Whether the state of the materialized view is active. Only an active materialized view can be used for query acceleration and rewrite."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"last_refresh_state"}),": The state of the last refresh, including PENDING, RUNNING, FAILED, and SUCCESS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"last_refresh_error_message"}),": The reason why the last refresh failed (if the materialized view state is not active)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rows"}),": The number of data rows in the materialized view. Please note that this value can be different from the actual row count of the materialized view because the updates can be deferred."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed information on other fields returned, see ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW#returns",children:"SHOW MATERIALIZED VIEW - Returns"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'MySQL > SHOW MATERIALIZED VIEW LIKE \'mv_pred_2\'\\G\n***************************[ 1. row ]***************************\nid                                   | 112517\ndatabase_name                        | ssb_1g\nname                                 | mv_pred_2\nrefresh_type                         | ASYNC\nis_active                            | true\ninactive_reason                      | <null>\npartition_type                       | UNPARTITIONED\ntask_id                              | 457930\ntask_name                            | mv-112517\nlast_refresh_start_time              | 2023-08-04 16:46:50\nlast_refresh_finished_time           | 2023-08-04 16:46:54\nlast_refresh_duration                | 3.996\nlast_refresh_state                   | SUCCESS\nlast_refresh_force_refresh           | false\nlast_refresh_start_partition         |\nlast_refresh_end_partition           |\nlast_refresh_base_refresh_partitions | {}\nlast_refresh_mv_refresh_partitions   |\nlast_refresh_error_code              | 0\nlast_refresh_error_message           |\nrows                                 | 0\ntext                                 | CREATE MATERIALIZED VIEW `mv_pred_2` (`lo_quantity`, `lo_revenue`, `sum`)\nDISTRIBUTED BY HASH(`lo_quantity`, `lo_revenue`) BUCKETS 2\nREFRESH ASYNC\nPROPERTIES (\n"replication_num" = "1",\n"storage_medium" = "HDD"\n)\nAS SELECT `lineorder`.`lo_quantity`, `lineorder`.`lo_revenue`, sum(`lineorder`.`lo_tax`) AS `sum`\nFROM `ssb_1g`.`lineorder`\nWHERE `lineorder`.`lo_linenumber` = 1\nGROUP BY 1, 2;\n\n1 row in set\nTime: 0.003s\n'})}),"\n",(0,r.jsx)(n.h3,{id:"view-the-refresh-history-of-an-asynchronous-materialized-view",children:"View the refresh history of an asynchronous materialized view"}),"\n",(0,r.jsxs)(n.p,{children:["You can view the refresh history of an asynchronous materialized view by querying the table ",(0,r.jsx)(n.code,{children:"task_runs"})," in the database ",(0,r.jsx)(n.code,{children:"information_schema"}),". Among all the information returned, you can focus on the following fields:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CREATE_TIME"})," and ",(0,r.jsx)(n.code,{children:"FINISH_TIME"}),": The start and end time of the refresh task."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"STATE"}),": The state of the refresh task, including PENDING, RUNNING, FAILED, and SUCCESS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ERROR_MESSAGE"}),": The reason why the refresh task failed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'MySQL > SELECT * FROM information_schema.task_runs WHERE task_name =\'mv-112517\' \\G\n***************************[ 1. row ]***************************\nQUERY_ID      | 7434cee5-32a3-11ee-b73a-8e20563011de\nTASK_NAME     | mv-112517\nCREATE_TIME   | 2023-08-04 16:46:50\nFINISH_TIME   | 2023-08-04 16:46:54\nSTATE         | SUCCESS\nDATABASE      | ssb_1g\nEXPIRE_TIME   | 2023-08-05 16:46:50\nERROR_CODE    | 0\nERROR_MESSAGE | <null>\nPROGRESS      | 100%\nEXTRA_MESSAGE | {"forceRefresh":false,"mvPartitionsToRefresh":[],"refBasePartitionsToRefreshMap":{},"basePartitionsToRefreshMap":{}}\nPROPERTIES    | {"FORCE":"false"}\n***************************[ 2. row ]***************************\nQUERY_ID      | 72dd2f16-32a3-11ee-b73a-8e20563011de\nTASK_NAME     | mv-112517\nCREATE_TIME   | 2023-08-04 16:46:48\nFINISH_TIME   | 2023-08-04 16:46:53\nSTATE         | SUCCESS\nDATABASE      | ssb_1g\nEXPIRE_TIME   | 2023-08-05 16:46:48\nERROR_CODE    | 0\nERROR_MESSAGE | <null>\nPROGRESS      | 100%\nEXTRA_MESSAGE | {"forceRefresh":true,"mvPartitionsToRefresh":["mv_pred_2"],"refBasePartitionsToRefreshMap":{},"basePartitionsToRefreshMap":{"lineorder":["lineorder"]}}\nPROPERTIES    | {"FORCE":"true"}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"monitor-the-resource-consumption-of-an-asynchronous-materialized-view",children:"Monitor the resource consumption of an asynchronous materialized view"}),"\n",(0,r.jsx)(n.p,{children:"You can monitor and analyze the resource consumed by an asynchronous materialized view during and after the refresh."}),"\n",(0,r.jsx)(n.h4,{id:"monitor-resource-consumption-during-refresh",children:"Monitor resource consumption during refresh"}),"\n",(0,r.jsxs)(n.p,{children:["During a refresh task, you can monitor its real-time resource consumption using ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/Administration/SHOW_PROC",children:"SHOW PROC '/current_queries'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Among all the information returned, you can focus on the following fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ScanBytes"}),": The size of data that is scanned."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ScanRows"}),": The number of data rows that are scanned."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MemoryUsage"}),": The size of memory that is used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CPUTime"}),": CPU time cost."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ExecTime"}),": The execution time of the query."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SHOW PROC '/current_queries'\\G\n***************************[ 1. row ]***************************\nStartTime     | 2023-08-04 17:01:30\nQueryId       | 806eed7d-32a5-11ee-b73a-8e20563011de\nConnectionId  | 0\nDatabase      | ssb_1g\nUser          | root\nScanBytes     | 70.981 MB\nScanRows      | 6001215 rows\nMemoryUsage   | 73.748 MB\nDiskSpillSize | 0.000\nCPUTime       | 2.515 s\nExecTime      | 2.583 s\n"})}),"\n",(0,r.jsx)(n.h4,{id:"analyze-resource-consumption-after-refresh",children:"Analyze resource consumption after refresh"}),"\n",(0,r.jsx)(n.p,{children:"After a refresh task, you can analyze its resource consumption via query profiles."}),"\n",(0,r.jsx)(n.p,{children:"While an asynchronous materialized view refreshes itself, an INSERT OVERWRITE statement is executed. You can check the corresponding query profile to analyze the time and resources consumed by the refresh task."}),"\n",(0,r.jsx)(n.p,{children:"Among all the information returned, you can focus on the following metrics:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Total"}),": Total time consumed by the query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QueryCpuCost"}),": Total CPU time cost of the query. CPU time costs are aggregated for concurrent processes. As a result, the value of this metric may be greater than the actual execution time of the query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QueryMemCost"}),": Total memory cost of the query."]}),"\n",(0,r.jsx)(n.li,{children:"Other metrics for individual operators, such as join operators and aggregate operators."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed information on how to check the query profile and understand other metrics, see ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/administration/query_profile",children:"Analyze query profile"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"verify-whether-queries-are-rewritten-by-an-asynchronous-materialized-view",children:"Verify whether queries are rewritten by an asynchronous materialized view"}),"\n",(0,r.jsxs)(n.p,{children:["You can check whether a query can be rewritten with an asynchronous materialized view from its query plan using ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/Administration/EXPLAIN",children:"EXPLAIN"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the metric ",(0,r.jsx)(n.code,{children:"SCAN"})," in the query plan shows the name of the corresponding materialized view, the query has been rewritten by the materialized view."]}),"\n",(0,r.jsx)(n.p,{children:"Example 1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'MySQL > SHOW CREATE TABLE mv_agg\\G\n***************************[ 1. row ]***************************\nMaterialized View        | mv_agg\nCreate Materialized View | CREATE MATERIALIZED VIEW `mv_agg` (`c_custkey`)\nDISTRIBUTED BY RANDOM\nREFRESH ASYNC\nPROPERTIES (\n"replication_num" = "1",\n"replicated_storage" = "true",\n"storage_medium" = "HDD"\n)\nAS SELECT `customer`.`c_custkey`\nFROM `ssb_1g`.`customer`\nGROUP BY `customer`.`c_custkey`;\n\nMySQL > EXPLAIN LOGICAL SELECT `customer`.`c_custkey`\n                      -> FROM `ssb_1g`.`customer`\n                      -> GROUP BY `customer`.`c_custkey`;\n+-----------------------------------------------------------------------------------+\n| Explain String                                                                    |\n+-----------------------------------------------------------------------------------+\n| - Output => [1:c_custkey]                                                         |\n|     - SCAN [mv_agg] => [1:c_custkey]                                              |\n|             Estimates: {row: 30000, cpu: ?, memory: ?, network: ?, cost: 15000.0} |\n|             partitionRatio: 1/1, tabletRatio: 12/12                               |\n|             1:c_custkey := 10:c_custkey                                           |\n+-----------------------------------------------------------------------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you disable the query rewrite feature, StarRocks adopts the regular query plan."}),"\n",(0,r.jsx)(n.p,{children:"Example 2:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SET enable_materialized_view_rewrite = false;\nMySQL > EXPLAIN LOGICAL SELECT `customer`.`c_custkey`\n                      -> FROM `ssb_1g`.`customer`\n                      -> GROUP BY `customer`.`c_custkey`;\n+---------------------------------------------------------------------------------------+\n| Explain String                                                                        |\n+---------------------------------------------------------------------------------------+\n| - Output => [1:c_custkey]                                                             |\n|     - AGGREGATE(GLOBAL) [1:c_custkey]                                                 |\n|             Estimates: {row: 15000, cpu: ?, memory: ?, network: ?, cost: 120000.0}    |\n|         - SCAN [mv_bitmap] => [1:c_custkey]                                           |\n|                 Estimates: {row: 60000, cpu: ?, memory: ?, network: ?, cost: 30000.0} |\n|                 partitionRatio: 1/1, tabletRatio: 12/12                               |\n+---------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"diagnose-and-solve-problems",children:"Diagnose and solve problems"}),"\n",(0,r.jsx)(n.p,{children:"Here we list some common problems you might encounter while working with an asynchronous materialized view, and the corresponding solutions."}),"\n",(0,r.jsx)(n.h3,{id:"failed-to-create-an-asynchronous-materialized-view",children:"Failed to create an asynchronous materialized view"}),"\n",(0,r.jsx)(n.p,{children:"If you failed to create an asynchronous materialized view, that is, the CREATE MATERIALIZED VIEW statement cannot be executed, you can look into the following aspects:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether you have mistakenly used the  SQL  statement for synchronous materialized views."})}),"\n",(0,r.jsx)(n.p,{children:"StarRocks provides two different materialized views: the synchronous materialized view and the asynchronous materialized view."}),"\n",(0,r.jsx)(n.p,{children:"The basic SQL statement used to create a synchronous materialized view is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW <mv_name> \nAS <query>\n"})}),"\n",(0,r.jsx)(n.p,{children:"However, the SQL statement used to create an asynchronous materialized view contains more parameters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW <mv_name> \nREFRESH ASYNC -- The refresh strategy of the asynchronous materialized view.\nDISTRIBUTED BY HASH(<column>) -- The data distribution strategy of the asynchronous materialized view.\nAS <query>\n"})}),"\n",(0,r.jsx)(n.p,{children:"In addition to the SQL statement, the main difference between the two materialized views is that asynchronous materialized views support all query syntax that StarRocks provides, but synchronous materialized views only support limited choices of aggregate functions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Check whether you have specified a correct  ",(0,r.jsx)(n.code,{children:"Partition By"}),"  column."]})}),"\n",(0,r.jsx)(n.p,{children:"When creating an asynchronous materialized view, you can specify a partitioning strategy, which allows you to refresh the materialized view on a finer granularity level."}),"\n",(0,r.jsx)(n.p,{children:"Currently, StarRocks only supports range partitioning, and only support referencing a single column from the SELECT expression in the query statement that is used to build the materialized view. You can use the date_trunc() function to truncate the column to change the granularity level of the partitioning strategy. Please note that any other expressions are not supported."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Check whether you have the necessary privileges to create the  materialized view"}),"**.**"]}),"\n",(0,r.jsx)(n.p,{children:"When creating an asynchronous materialized view, you need the SELECT privileges of all objects (tables, views, materialized views) that are queried. When UDFs are used in the query, you also need the USAGE privileges of the functions."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"materialized-view-fails-to-refresh",children:"Materialized view fails to refresh"}),"\n",(0,r.jsx)(n.p,{children:"If the materialized view fails to refresh, that is, the state of the refresh task is not SUCCESS, you can look into the following aspects:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether you have adopted an inappropriate refresh strategy."})}),"\n",(0,r.jsx)(n.p,{children:"By default, the materialized view refreshes immediately after it is created. However, in v2.5 and early versions, materialized view that adopts the MANUAL refresh strategy does not refresh after being created. You must refresh it manually using REFRESH MATERIALIZED VIEW."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the refresh task exceeds the memory limit."})}),"\n",(0,r.jsx)(n.p,{children:"Usually, when an asynchronous materialized view involves large-scale aggregation or join calculations that exhaust the memory resources. To solve this problem, you can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify a partitioning strategy for the materialized view to refresh one partition each time."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable the Spill to Disk feature for the refresh task. From v3.1 onwards, StarRocks supports spilling the intermediate results to disks when refreshing a materialized view. Execute the following statement to enable Spill to Disk:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET enable_spill = true;\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the refresh task exceeds the timeout duration."})}),"\n",(0,r.jsx)(n.p,{children:"A large-scale materialized view can fail to refresh because the refresh task exceeds the timeout duration. To solve this problem, you can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify a partitioning strategy for the materialized view to refresh one partition each time."}),"\n",(0,r.jsx)(n.li,{children:"Set a longer timeout duration."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"From v3.0 onwards, you can define the following properties (session variables) while creating the materialized view or adding them using ALTER MATERIALIZED VIEW."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- Define the properties when creating the materialized view\nCREATE MATERIALIZED VIEW mv1 \nREFRESH ASYNC\nPROPERTIES ( 'session.enable_spill'='true' )\nAS <query>;\n\n-- Add the properties.\nALTER MATERIALIZED VIEW mv2 \n    SET ('session.enable_spill' = 'true');\n"})}),"\n",(0,r.jsx)(n.h3,{id:"materialized-view-state-is-not-active",children:"Materialized view state is not active"}),"\n",(0,r.jsxs)(n.p,{children:["If the materialized view cannot rewrite queries or refresh, and the state of the materialized view ",(0,r.jsx)(n.code,{children:"is_active"})," is ",(0,r.jsx)(n.code,{children:"false"}),", it could be a result of the schema change on the base tables. To solve this problem, you can manually set the materialized view state to active by executing the following statement:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW mv1 ACTIVE;\n"})}),"\n",(0,r.jsx)(n.p,{children:"If setting the materialized view state to active does not take effect, you need to drop the materialized view and create it again."}),"\n",(0,r.jsx)(n.h3,{id:"materialized-view-refresh-task-uses-excessive-resources",children:"Materialized view refresh task uses excessive resources"}),"\n",(0,r.jsx)(n.p,{children:"If you find that the refresh tasks are using excessive system resources, you can look into the following aspects:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Check whether you have created an oversized  materialized view"}),"**.**"]}),"\n",(0,r.jsx)(n.p,{children:"If you have joined too many tables that cause a significant amount of calculation, the refresh task will occupy many resources. To solve this problem, you need to assess the size of the materialized view and re-plan it."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether you have set an unnecessarily frequent refresh interval."})}),"\n",(0,r.jsx)(n.p,{children:"If you adopt the fixed-interval refresh strategy, you can set a lower refresh frequency to solve the problem. If the refresh tasks are triggered by data changes in the base tables, loading data too frequently can also cause this problem. To solve this problem, you need to define a proper refresh strategy for your materialized view."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the  materialized view  is partitioned."})}),"\n",(0,r.jsx)(n.p,{children:"An unpartitioned materialized view can be costly to refresh because StarRocks refreshes the whole materialized view each time. To solve this problem, you need to specify a partitioning strategy for the materialized view to refresh one partition each time."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To stop a refresh task that occupies too many resources, you can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set the materialized view state to inactive so that all of its refresh tasks are stopped:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW mv1 INACTIVE;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Terminate the running refresh task by using SHOW PROCESSLIST and KILL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- Get the ConnectionId of the running refresh task.\nSHOW PROCESSLIST;\n-- Terminate the running refresh task.\nKILL QUERY <ConnectionId>;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"materialized-view-fails-to-rewrite-queries",children:"Materialized view fails to rewrite queries"}),"\n",(0,r.jsx)(n.p,{children:"If your materialized view fails to rewrite relevant queries, you can look into the following aspects:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the  materialized view  and the  query  match."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"StarRocks matches the materialized view and the query with a structure-based matching technique rather than text-based matching. Therefore, it's not guaranteed that a query can be rewritten just because it appears similar to that of a materialized view."}),"\n",(0,r.jsx)(n.li,{children:"Materialized views can only rewrite SPJG (Select/Projection/Join/Aggregation) type of queries. Queries involving window functions, nested aggregation, or join plus aggregation are not supported."}),"\n",(0,r.jsxs)(n.li,{children:["Materialized views cannot rewrite queries that involve complex Join predicates in Outer Joins. For example, in cases like ",(0,r.jsx)(n.code,{children:"A LEFT JOIN B ON A.dt > '2023-01-01' AND A.id = B.id"}),", we recommend you specify the predicate from the ",(0,r.jsx)(n.code,{children:"JOIN ON"})," clause in a ",(0,r.jsx)(n.code,{children:"WHERE"})," clause."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the limitations of the materialized view query rewrite, see ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/using_starrocks/query_rewrite_with_materialized_views#limitations",children:"Query rewrite with materialized views - Limitations"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the  materialized view  state is active."})}),"\n",(0,r.jsx)(n.p,{children:"StarRocks checks the status of the materialized view before rewriting queries. Queries can be rewritten only when the materialized view state is active. To solve this problem, you can manually set the materialized view state to active by executing the following statement:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW mv1 ACTIVE;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the  materialized view  meets the data  consistency  requirements."})}),"\n",(0,r.jsx)(n.p,{children:"StarRocks checks the consistency of data in the materialized view and in the base table data. By default, queries can be rewritten only when the data in the materialized view is up-to-date. To solve this problem, you can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"PROPERTIES('query_rewrite_consistency'='LOOSE')"})," to the materialized view to disable consistency checks."]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"PROPERTIES('mv_rewrite_staleness_second'='5')"})," to tolerate a certain degree of data inconsistency. Queries can be rewritten if the last refresh is before this time interval, regardless of whether the data in the base tables changes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check whether the  query  statement of the  materialized view  lacks output columns."})}),"\n",(0,r.jsx)(n.p,{children:"To rewrite range and point queries, you must specify the columns used as the filtering predicates in the SELECT expression of the materialized view's query statement. You need to check the SELECT statement of the materialized view to ensure it includes columns referenced in the WHERE and ORDER BY clauses of the query."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example 1: The materialized view ",(0,r.jsx)(n.code,{children:"mv1"})," uses nested aggregation. Thus, it cannot be used to rewrite queries."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv1 REFRESH ASYNC AS\nselect count(distinct cnt) \nfrom (\n    select c_city, count(*) cnt \n    from customer \n    group by c_city\n) t;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 2: The materialized view ",(0,r.jsx)(n.code,{children:"mv2"})," uses join plus aggregation. Thus, it cannot be used to rewrite queries. To solve this problem, you can create a materialized view with aggregation, and then a nested materialized view with join based on the previous one."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv2 REFRESH ASYNC AS\nselect *\nfrom (\n    select lo_orderkey, lo_custkey, p_partkey, p_name\n    from lineorder\n    join part on lo_partkey = p_partkey\n) lo\njoin (\n    select c_custkey\n    from customer\n    group by c_custkey\n) cust\non lo.lo_custkey = cust.c_custkey;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 3: The materialized view ",(0,r.jsx)(n.code,{children:"mv3"})," cannot rewrite queries in the pattern of ",(0,r.jsx)(n.code,{children:"SELECT c_city, sum(tax) FROM tbl WHERE dt='2023-01-01' AND c_city = 'xxx'"})," because the column that the predicate referenced is not in the SELECT expression."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv3 REFRESH ASYNC AS\nSELECT c_city, sum(tax) FROM tbl GROUP BY c_city;\n"})}),"\n",(0,r.jsx)(n.p,{children:"To solve this problem, you can create the materialized view as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv3 REFRESH ASYNC AS\nSELECT dt, c_city, sum(tax) FROM tbl GROUP BY dt, c_city;\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>o,ah:()=>s});var r=i(67294);const t=r.createContext({});function s(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||a:s(e),r.createElement(t.Provider,{value:o},n)}}}]);