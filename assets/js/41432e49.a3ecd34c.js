"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15672],{70832:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(85893),n=a(11151);const s={},r="Data modeling with materialized views",o={id:"using_starrocks/data_modeling_with_materialized_views",title:"Data modeling with materialized views",description:"This topic describes how to perform data modeling with the help of StarRocks' asynchronous materialized views. By doing so, you can greatly simplify the ETL pipeline of your data warehouses, and significantly improve data quality and query performance.",source:"@site/versioned_docs/version-2.5/using_starrocks/data_modeling_with_materialized_views.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/data_modeling_with_materialized_views",permalink:"/doc/en/2.5/using_starrocks/data_modeling_with_materialized_views",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/data_modeling_with_materialized_views.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Data lake query acceleration with materialized views",permalink:"/doc/en/2.5/using_starrocks/data_lake_query_acceleration_with_materialized_views"},next:{title:"Query Cache",permalink:"/doc/en/2.5/using_starrocks/query_cache"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Capabilities of asynchronous materialized view",id:"capabilities-of-asynchronous-materialized-view",level:2},{value:"Automatic refresh",id:"automatic-refresh",level:3},{value:"Partitioned refresh",id:"partitioned-refresh",level:3},{value:"Synergy with views",id:"synergy-with-views",level:3},{value:"Schema change",id:"schema-change",level:3},{value:"Layered modeling",id:"layered-modeling",level:2},{value:"Partitioned modeling",id:"partitioned-modeling",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const i=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",ol:"ol",h3:"h3",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"data-modeling-with-materialized-views",children:"Data modeling with materialized views"}),"\n",(0,t.jsx)(i.p,{children:"This topic describes how to perform data modeling with the help of StarRocks' asynchronous materialized views. By doing so, you can greatly simplify the ETL pipeline of your data warehouses, and significantly improve data quality and query performance."}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"Data modeling is the process of cleaning, layering, aggregating, and associating data with rational methodologies. It can create a comprehensible representation of the raw data that is too rough, too complicated, or too costly to analyze directly, and provide actionable insights into the data."}),"\n",(0,t.jsx)(i.p,{children:"However, the common challenge in real-world data modeling is that the modeling process struggles to keep up with the pace of business development, and it is difficult to measure the return on investment for data modeling efforts. Despite the fact that the modeling methodologies are simple, business experts are required to have a solid background in data organization and governance, which is a complex process. In the early stages of business, decision-makers rarely spare sufficient resources for data modeling, and it is challenging to see the value that data modeling can bring. Moreover, business models can change rapidly, and the modeling methodologies themselves need iteration and evolution. Therefore, many data analysts tend to avoid modeling and use raw data directly, thus inevitably leading to issues of data quality and query performance. When the need for modeling arises, it becomes difficult to restructure data analytics patterns that have already been established to match those of the data models."}),"\n",(0,t.jsx)(i.p,{children:"Using materialized views for data modeling can effectively address these problems. StarRocks' asynchronous materialized views can:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Simplify the  data warehouse  architecture"}),": Because StarRocks can provide a one-stop data governance experience, you do not need to maintain other data processing systems, saving the human and system resources spent on them."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Ease the data modeling experience"}),": Any data analyst with only basic SQL knowledge is capable of data modeling with StarRocks. Data modeling is no longer the exclusive province of experienced data engineers."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Reduce maintenance complexity"}),": StarRocks' asynchronous materialized views can automatically manage the lineage relationships and dependencies across data layers, eliminating the need for an entire data platform to handle this task."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Modeling-1",src:a(18879).Z+"",width:"1280",height:"630"})}),"\n",(0,t.jsx)(i.p,{children:"In real-world situations, you can perform data modeling by combining the usage of StarRocks' views (logical views) and asynchronous materialized views as follows:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Use views to associate real-time data with dimension data, and use materialized views to associate historical data from the data lake with dimension data. Perform necessary data cleaning and semantic mapping to obtain the detail data for the Intermediate Layer, which reflects the semantics required in your business scenarios."}),"\n",(0,t.jsx)(i.li,{children:"In the Application Layer, perform data Join, Aggregation, Union, and Window calculations tailored to different business scenarios. This will yield views for real-time pipelines and materialized views for near-real-time pipelines."}),"\n",(0,t.jsx)(i.li,{children:"On the Application side, choose an appropriate Analytical Data Store (ADS) for query analysis based on your timeliness and performance requirements. These ADS can serve real-time dashboards, near-real-time BI, ad-hoc queries, and scheduled reports."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"During this process, you will leverage several built-in capabilities of StarRocks, which will be elaborated in the following section."}),"\n",(0,t.jsx)(i.h2,{id:"capabilities-of-asynchronous-materialized-view",children:"Capabilities of asynchronous materialized view"}),"\n",(0,t.jsx)(i.p,{children:"StarRocks' asynchronous materialized view possesses the following atomic functions that can aid in data modeling:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Automatic refresh"}),": After data is loaded into base tables, materialized views can be automatically refreshed. You do not need to maintain a scheduling task externally."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Partitioned refresh"}),": Near-real-time calculations can be achieved through the partitioned refresh of the materialized views built on tables featuring time series."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Synergy with views"}),": You can achieve multi-layer modeling by using materialized views and logical views, thus enabling the reuse of the Intermediate Layer and simplification of data models."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Schema change"}),": You can alter the calculation results through simple SQL statements, without the need to modify the complex data pipelines."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"With these features, you can design comprehensive and adaptable data models to meet various business needs and scenarios."}),"\n",(0,t.jsx)(i.h3,{id:"automatic-refresh",children:"Automatic refresh"}),"\n",(0,t.jsx)(i.p,{children:"When creating an asynchronous materialized view, you can specify the refresh strategy using the REFRESH clause. Currently, StarRocks supports the following refresh strategies of asynchronous materialized views:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Automatic Refresh"})," (",(0,t.jsx)(i.code,{children:"REFRESH ASYNC"}),"): Refresh tasks are triggered each time data in the base tables changes. Data dependencies are automatically managed by the materialized view."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Scheduled Refresh"})," (",(0,t.jsx)(i.code,{children:"REFRESH ASYNC EVERY (INTERVAL <refresh_interval>)"}),"): Refresh tasks are triggered at regular intervals, for example, every minute, day, or month. If there are no data changes in the base tables, the refresh task will not be triggered."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Manual Refresh"})," (",(0,t.jsx)(i.code,{children:"REFRESH MANUAL"}),"): Refresh tasks are triggered only by executing REFRESH MATERIALIZED VIEW manually. This refresh strategy can be used when you maintain an external scheduling framework to trigger refresh tasks."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Syntax:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW <name>\nREFRESH \n    [ ASYNC | \n      ASYNC [START <time>] EVERY(<interval>) | \n      MANUAL\n    ]\nAS <query>\n"})}),"\n",(0,t.jsx)(i.h3,{id:"partitioned-refresh",children:"Partitioned refresh"}),"\n",(0,t.jsx)(i.p,{children:"When creating an asynchronous materialized view, you can specify the PARTITION BY clause to associate the partitions of the base table with those of the materialized view, thus achieving partition-level refresh."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PARTITION BY <column>"}),": You can reference the same partitioning column for the base table and the materialized view. As a result, the base table and the materialized view are partitioned on the same granularity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PARTITION BY date_trunc(<column>)"}),": You can use the date_trunc function to assign a different partition strategy (on the level of granularity) for the materialized view by truncating the time unit."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PARTITION BY { time_slice | date_slice }(<column>)"}),": In comparison to date_trunc, time_slice and date_slice offer more flexible time granularity adjustments, allowing for finer control over partitioning based on time."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Syntax:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW <name>\nREFRESH ASYNC\nPARTITION BY \n    [\n        <base_table_column> | \n        date_trunc(<granularity>, <base_table_column>) |\n        time_slice(<base_table_column>, <granularity>) | \n        date_slice(<base_table_column>, <granularity>)\n    ]\nAS <query>\n"})}),"\n",(0,t.jsx)(i.h3,{id:"synergy-with-views",children:"Synergy with views"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Materialized views can be created based on views. In this case, when the base tables referenced by the view undergo data changes, the materialized view can be automatically refreshed."}),"\n",(0,t.jsx)(i.li,{children:"You can also create materialized views based on other materialized views, enabling multi-level cascading refresh mechanisms."}),"\n",(0,t.jsx)(i.li,{children:"Views can be created based on materialized views, which are equivalent to regular tables."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"schema-change",children:"Schema change"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You can perform an atomic exchange between two asynchronous materialized views using the ALTER MATERIALIZED VIEW SWAP statement. This allows you to create a new materialized view with added columns or changed column types and then replace the old one with it."}),"\n",(0,t.jsx)(i.li,{children:"The definition of views can be directly modified using the ALTER VIEW statement."}),"\n",(0,t.jsx)(i.li,{children:"Regular tables in StarRocks can be modified using either SWAP or ALTER operations."}),"\n",(0,t.jsx)(i.li,{children:"Furthermore, when there are changes in the base tables (which can be materialized views, views, or regular tables), it triggers cascading changes in the corresponding materialized views."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"layered-modeling",children:"Layered modeling"}),"\n",(0,t.jsx)(i.p,{children:"In many real-world business scenarios, there are various forms of data sources, including real-time detail data, dimension data, and historical data from data lakes. On the other hand, business requirements call for diverse analytical methods, such as real-time dashboards, near-real-time BI queries, ad-hoc queries, and scheduled reports. Different scenarios have different demands - some require flexibility, some prioritize performance, while others emphasize cost-effectiveness."}),"\n",(0,t.jsx)(i.p,{children:"Clearly, a single solution cannot adequately address such versatile demands. StarRocks can efficiently address these needs by combining the usage of views and materialized views. Because views maintain no physical data, each time a view is queried, the query is parsed and executed according to the definition of the view. In comparison, materialized views, which hold the pre-computed results, can prevent the overhead of repetitive execution. Views are suitable for expressing business semantics and simplifying SQL complexity, but they cannot reduce the costs of query execution. Materialized Views, on the other hand, optimize the query performance through pre-computation and are suitable for streamlining ETL pipelines."}),"\n",(0,t.jsx)(i.p,{children:"Below is a summary of the differences between views and materialized views:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"View"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Materialized view"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Use cases"})}),(0,t.jsx)(i.td,{children:"Business modeling, data governance"}),(0,t.jsx)(i.td,{children:"Data modeling, transparent acceleration, data lake integration"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Storage cost"})}),(0,t.jsx)(i.td,{children:"No storage cost"}),(0,t.jsx)(i.td,{children:"Storage cost incurred by storing pre-computed results"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Update cost"})}),(0,t.jsx)(i.td,{children:"No update cost"}),(0,t.jsx)(i.td,{children:"Refresh cost incurred when base table data updates"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Performance benefits"})}),(0,t.jsx)(i.td,{children:"No performance benefit"}),(0,t.jsx)(i.td,{children:"Query acceleration introduced by reusing pre-computes results"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Data  real-time  attribute"})}),(0,t.jsx)(i.td,{children:"The latest data is returned because queries against views are computed in real-time."}),(0,t.jsx)(i.td,{children:"Data may not be up-to-date because results are pre-computed."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Dependency"})}),(0,t.jsx)(i.td,{children:"Views become invalid if base table names are changed because they reference base tables by name."}),(0,t.jsx)(i.td,{children:"Changes of base table names do not affect the availability of the materialized views, which reference base tables by ID."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Creation  Syntax"})}),(0,t.jsx)(i.td,{children:"CREATE VIEW"}),(0,t.jsx)(i.td,{children:"CREATE MATERIALIZED VIEW"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Modification  Syntax"})}),(0,t.jsx)(i.td,{children:"ALTER VIEW"}),(0,t.jsx)(i.td,{children:"ALTER MATERIALIZED VIEW"})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"You can use the following statements to modify your views, materialized views, and base tables:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:"-- Modify a table.\nALTER TABLE <table_name> ADD COLUMN <column_desc>;\n\n-- Swap two tables.\nALTER TABLE <table1> SWAP WITH <table2>;\n\n-- Modify the definition of a view.\nALTER VIEW <view_name> AS <query>;\n\n-- Swap two materialized views \n-- (by swapping the name of the two materialized views without affecting the data within).\nALTER MATERIALIZED VIWE <mv1> SWAP WITH <mv2>;\n\n-- Re-activate a materialized view.\nALTER MATERIALIZED VIEW <mv_name> ACTIVE;\n"})}),"\n",(0,t.jsx)(i.p,{children:"Schema changes follow these principles:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Rename and Swap operations on a table will set the dependent materialized views inactive. For Schema Change operations, the dependent materialized views are set inactive only when Schema Change operations are performed on the base table columns referenced by the materialized views."}),"\n",(0,t.jsx)(i.li,{children:"If you change the definition of a view, the dependent materialized views are set to inactive."}),"\n",(0,t.jsx)(i.li,{children:"If a materialized view is swapped, any nested materialized views built on it are set to inactive."}),"\n",(0,t.jsx)(i.li,{children:"The inactive status cascades upwards until there are no materialized view dependencies."}),"\n",(0,t.jsx)(i.li,{children:"Inactive materialized views cannot be refreshed or used for automatic query rewrite."}),"\n",(0,t.jsx)(i.li,{children:"Inactive materialized views can still be queried directly, but data consistency is not guaranteed until they are active again."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Whereas the data consistency of inactive materialized views cannot be guaranteed, you can restore the functionality of them using the following methods:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Manual repair"}),": You can manually repair an inactive materialized view by executing ALTER MATERIALIZED VIEW ",(0,t.jsx)(i.code,{children:"<mv_name>"})," ACTIVE. This statement will recreate the materialized view based on its original SQL definition. Please note that the SQL definition must still be valid after the underlying schema changes, otherwise, the operation will fail."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Automatic repair"}),": StarRocks will attempt to automatically activate inactive materialized views. However, the timeliness of this process cannot be guaranteed."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"partitioned-modeling",children:"Partitioned modeling"}),"\n",(0,t.jsx)(i.p,{children:"In addition to layered modeling, partitioned modeling is also an essential aspect of data modeling. Data modeling often involves associating data based on business semantics and setting data's Time-To-Live (TTL) as per timeliness requirements. Partitioned modeling plays a significant role in this process."}),"\n",(0,t.jsx)(i.p,{children:"Partitioned modeling is an essential aspect of data modeling, complementing layered modeling. It involves associating data based on business semantics and setting Time-To-Live (TTL) for data as per timeliness requirements. Data partitioning plays a significant role in this process."}),"\n",(0,t.jsx)(i.p,{children:"Different ways of associating data give rise to various modeling approaches, such as star schemas and snowflake schemas. These models have something in common - they all use fact tables and dimension tables. Some business scenarios require multiple large fact tables, while others deal with complex dimension tables and the relationships among them. StarRocks' materialized views support partition association for fact tables, meaning that the fact table is partitioned, and the materialized view's join results are partitioned in the same way."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Modeling-2",src:a(73158).Z+"",width:"1400",height:"738"})}),"\n",(0,t.jsx)(i.p,{children:"As the above figure shows, a materialized view associates a fact table with multiple dimension tables:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["You need to reference the partition key of a specific base table (usually the fact table) as the materialized view's partitioning key (",(0,t.jsx)(i.code,{children:"PARTITION BY fact_tbl.col"}),") to associate their partitioning strategies. Each materialized view can only be associated with one base table."]}),"\n",(0,t.jsx)(i.li,{children:"When the data in a partition of the referenced table changes, the corresponding partition in the materialized view is refreshed without affecting other partitions."}),"\n",(0,t.jsx)(i.li,{children:"When the data in the non-referenced tables changes, the entire materialized view is refreshed by default. However, you can choose to ignore the data changes in certain non-referenced base tables so that the materialized view will not be refreshed when data in these tables changes."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Such partition association supports various business scenarios:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Fact table updates"}),": You can partition the fact table at a fine-grained level, such as daily or hourly. After the fact table is updated, the corresponding partitions in the materialized view are automatically refreshed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Dimension  table updates"}),": Usually, data updates in dimension tables will lead to the refresh of all associated results, which can be costly. You can choose to ignore the data updates in some dimension tables to avoid refreshing the entire materialized view, or you can specify a time range so that only the partitions within the time range can be refreshed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"External table automatic refresh"}),": In external data sources like Apache Hive or Apache Iceberg, data changes at the partition level. StarRocks' materialized views can subscribe to changes in external catalogs at the partition level, and only refresh the corresponding partition of the materialized view."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"TTL"}),": When setting the partitioning strategy for a materialized view, you can set the number of recent partitions to retain, thus keeping only the most recent data. This is useful in business scenarios when analysts only query up-to-date data from a certain window of time, and they do not need to retain all the historical data."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Several parameters can be used to control refresh behavior:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"partition_refresh_number"}),": the number of partitions to refresh in each refresh operation."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"partition_ttl_number"}),": the number of recent partitions to retain."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"excluded_trigger_tables"}),": the table whose data changes can be ignored to avoid triggering the automatic refresh."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"auto_refresh_partitions_limit"}),": the number of partitions to refresh in each automatic refresh operation."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For more information, see ",(0,t.jsx)(i.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",children:"CREATE MATERIALIZED VIEW"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Currently, partitioned materialized views have the following limitations:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You can only build a partitioned materialized view based on a partitioned table."}),"\n",(0,t.jsx)(i.li,{children:"You can only use the DATE or DATETIME type columns as the partitioning key. The STRING data type is not supported."}),"\n",(0,t.jsx)(i.li,{children:"You can only perform partition roll-up using the date_trunc, time_slice, and date_slice functions."}),"\n",(0,t.jsx)(i.li,{children:"You can only specify a single column as the partitioning key. Multiple partitioning columns are not supported."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(i.p,{children:"Utilizing StarRocks' asynchronous materialized views for data modeling offers the advantage of simplifying pipeline management and enhancing the efficiency and flexibility of data modeling through a declarative modeling language."}),"\n",(0,t.jsx)(i.p,{children:"Apart from the data modeling, StarRocks' asynchronous materialized views find application in various scenarios involving transparent acceleration and data lake integration. This facilitates further exploration of data value and improves data efficiency."})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,n.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},18879:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/Modeling-1-3089fe70e1f2202cc1c5d36e1595c6e7.png"},73158:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/Modeling-2-637c9a9f740b8a1f2dca17da446b52bb.png"},11151:(e,i,a)=>{a.d(i,{Zo:()=>o,ah:()=>s});var t=a(67294);const n=t.createContext({});function s(e){const i=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const r={};function o({components:e,children:i,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||r:s(e),t.createElement(n.Provider,{value:o},i)}}}]);