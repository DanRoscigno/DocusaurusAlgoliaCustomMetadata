"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35902],{62745:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(85893),n=t(11151);const i={},s="Data lake query acceleration with materialized views",o={id:"using_starrocks/data_lake_query_acceleration_with_materialized_views",title:"Data lake query acceleration with materialized views",description:"This topic describes how to optimize query performance in your data lake using StarRocks' asynchronous materialized views.",source:"@site/versioned_docs/version-3.1/using_starrocks/data_lake_query_acceleration_with_materialized_views.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/data_lake_query_acceleration_with_materialized_views",permalink:"/doc/en/using_starrocks/data_lake_query_acceleration_with_materialized_views",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/data_lake_query_acceleration_with_materialized_views.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Use Bitmap for exact Count Distinct",permalink:"/doc/en/using_starrocks/Using_bitmap"},next:{title:"Data modeling with materialized views",permalink:"/doc/en/using_starrocks/data_modeling_with_materialized_views"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Create external catalog-based materialized views",id:"create-external-catalog-based-materialized-views",level:2},{value:"Choose a suitable refresh strategy",id:"choose-a-suitable-refresh-strategy",level:3},{value:"Enable query rewrite for external catalog-based materialized views",id:"enable-query-rewrite-for-external-catalog-based-materialized-views",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Case One: Accelerate join calculation in data lake",id:"case-one-accelerate-join-calculation-in-data-lake",level:3},{value:"Case Two: Accelerate aggregations and aggregations on joins in data lake",id:"case-two-accelerate-aggregations-and-aggregations-on-joins-in-data-lake",level:3},{value:"Case Three: Accelerate joins on aggregations in data lake",id:"case-three-accelerate-joins-on-aggregations-in-data-lake",level:3},{value:"Case Four: Separate hot and cold data for real-time data and historical data in data lake",id:"case-four-separate-hot-and-cold-data-for-real-time-data-and-historical-data-in-data-lake",level:3}];function d(e){const a=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",blockquote:"blockquote",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"data-lake-query-acceleration-with-materialized-views",children:"Data lake query acceleration with materialized views"}),"\n",(0,r.jsx)(a.p,{children:"This topic describes how to optimize query performance in your data lake using StarRocks' asynchronous materialized views."}),"\n",(0,r.jsxs)(a.p,{children:["StarRocks offers out-of-the-box data lake query capabilities, which are highly effective for exploratory queries and analysis of data in the lake. In most scenarios, ",(0,r.jsx)(a.a,{href:"/doc/en/data_source/data_cache",children:"Data Cache"})," can provide block-level file caching, avoiding performance degradation caused by remote storage jitter and a large number of I/O operations."]}),"\n",(0,r.jsx)(a.p,{children:"However, when it comes to building complex and efficient reports using data from the lake or further accelerating these queries, you may still encounter performance challenges. With asynchronous materialized views, you can achieve higher concurrency and better query performance for reports and data applications on the lake."}),"\n",(0,r.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(a.p,{children:"StarRocks supports building asynchronous materialized views based on external catalogs such as Hive catalog, Iceberg catalog, and Hudi catalog. External catalog-based materialized views are particularly useful in the following scenarios:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Transparent Acceleration of data lake reports"})}),"\n",(0,r.jsx)(a.p,{children:"To ensure the query performance of data lake reports, data engineers typically need to work closely with data analysts to probe into the construction logic of the acceleration layer for reports. If the acceleration layer requires further updates, they must update the construction logic, processing schedules, and query statements accordingly."}),"\n",(0,r.jsx)(a.p,{children:"Through the query rewrite capability of materialized views, report acceleration can be made transparent and imperceptible to users. When slow queries are identified, data engineers can analyze the pattern of slow queries and create materialized views on demand. Application-side queries are then intelligently rewritten and transparently accelerated by the materialized view, allowing for rapid improvement in query performance without modifying the logic of the business application or the query statement."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Incremental calculation of real-time  data associated with historical data"})}),"\n",(0,r.jsx)(a.p,{children:"Suppose your business application requires the association of real-time data in StarRocks native tables and historical data in the data lake for incremental calculations. In this situation, materialized views can provide a straightforward solution. For example, if the real-time fact table is a native table in StarRocks and the dimension table is stored in the data lake, you can easily perform incremental calculations by constructing materialized views that associate the native table with the table in the external data sources."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Rapid construction of metric layers"})}),"\n",(0,r.jsx)(a.p,{children:"Calculating and processing metrics may encounter challenges when dealing with a high dimensionality of data. You can use materialized views, which allows you to perform data pre-aggregation and rollup, to create a relatively lightweight metric layer. Moreover, materialized views can be refreshed automatically, further reducing the complexity of metric calculations."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Materialized views, Data Cache, and native tables in StarRocks are all effective methods to achieve significant boosts in query performance. The following table compares their major differences:"}),"\n",(0,r.jsxs)("table",{class:"comparison",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"\xa0"}),(0,r.jsx)("th",{children:"Data Cache"}),(0,r.jsx)("th",{children:"Materialized view"}),(0,r.jsx)("th",{children:"Native table"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Data loading and updates"})}),(0,r.jsx)("td",{children:"Queries automatically trigger data caching."}),(0,r.jsx)("td",{children:"Refresh tasks are triggered automatically."}),(0,r.jsx)("td",{children:"Supports various import methods but requires manual maintenance of import tasks"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Data caching granularity"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Supports block-level data caching"}),(0,r.jsx)("li",{children:"Follows LRU cache eviction mechanism"}),(0,r.jsx)("li",{children:"No computation results are cached"})]})}),(0,r.jsx)("td",{children:"Stores the precomputed query results"}),(0,r.jsx)("td",{children:"Stores data based on table schema"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Query performance"})}),(0,r.jsx)("td",{colspan:"3",style:{textAlign:"center"},children:"Data Cache \u2264 Materialized view = Native table"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Query statement"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"No need to modify query statements against the data lake"}),(0,r.jsx)("li",{children:"Once queries hit the cache, computation occurs."})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"No need to modify query statements against the data lake"}),(0,r.jsx)("li",{children:"Leverages query rewrite to reuse precomputed results"})]})}),(0,r.jsx)("td",{children:"Requires modification of query statements to query the native table"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(a.p,{children:"Compared to directly querying lake data or loading data into native tables, materialized views offer several unique advantages:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Local storage  acceleration"}),": Materialized views can leverage StarRocks' acceleration advantages with local storage, such as indexes, partitioning, bucketing, and collocate groups, resulting in better query performance compared to querying data from the data lake directly."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Zero maintenance for loading tasks"}),": Materialized views update data transparently via automatic refresh tasks. There's no need to maintain loading tasks to perform scheduled data updates. Additionally, Hive catalog-based materialized views can detect data changes and perform incremental refreshes at the partition level."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Intelligent  query  rewrite"}),": Queries can be transparently rewritten to use materialized views. You can benefit from acceleration instantly without the need to modify the query statements your application uses."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(a.p,{children:"Therefore, we recommend using materialized views in the following scenarios:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Even when Data Cache is enabled, query performance does not meet your requirements for query latency and concurrency."}),"\n",(0,r.jsx)(a.li,{children:"Queries involve reusable components, such as fixed aggregation functions or join patterns."}),"\n",(0,r.jsx)(a.li,{children:"Data is organized in partitions, while queries involve aggregation on a relatively high level (e.g., aggregating by day)."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(a.p,{children:"In the following scenarios, we recommend prioritizing acceleration through Data Cache:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Queries do not have many reusable components and may scan any data from the data lake."}),"\n",(0,r.jsx)(a.li,{children:"Remote storage has significant fluctuations or instability, which could potentially impact access."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"create-external-catalog-based-materialized-views",children:"Create external catalog-based materialized views"}),"\n",(0,r.jsx)(a.p,{children:"Creating a materialized view on tables in external catalogs is similar to creating a materialized view on StarRiocks' native tables. You only need to set a suitable refresh strategy in accordance with the data source you are using, and manually enable query rewrite for external catalog-based materialized views."}),"\n",(0,r.jsx)(a.h3,{id:"choose-a-suitable-refresh-strategy",children:"Choose a suitable refresh strategy"}),"\n",(0,r.jsx)(a.p,{children:"Currently, StarRocks cannot detect partition-level data changes in Hudi catalogs, Iceberg catalogs, and JDBC catalogs. Therefore, a full-size refresh is performed once the task is triggered."}),"\n",(0,r.jsx)(a.p,{children:"For Hive catalogs, you can enable the Hive metadata cache refresh feature to allow StarRocks to detect data changes at the partition level. Please note that the partitioning keys of the materialized view must be included in that of the base table. When this feature is enabled, StarRocks periodically accesses the Hive Metastore Service (HMS) or AWS Glue to check the metadata information of recently queried hot data. As a result, StarRocks can:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Refresh only the partitions with data changes to avoid full-size refresh, reducing resource consumption caused by refresh."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Ensure data consistency to some extent during query rewrite. If there are data changes in the base table in the data lake, the query will not be rewritten to use the materialized view."}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(a.p,{children:["You can still choose to tolerate a certain level of data inconsistency by setting the property ",(0,r.jsx)(a.code,{children:"mv_rewrite_staleness_second"})," when creating the materialized view. For more information, see ",(0,r.jsx)(a.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",children:"CREATE MATERIALIZED VIEW"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["To enable the Hive metadata cache refresh feature, you can set the following FE dynamic configuration item using ",(0,r.jsx)(a.a,{href:"/doc/en/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SET FRONTEND CONFIG"}),":"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Configuration item"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Default"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Description"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"enable_background_refresh_connector_metadata"}),(0,r.jsx)(a.td,{children:"true in v3.0 false in v2.5"}),(0,r.jsx)(a.td,{children:"Whether to enable the periodic Hive metadata cache refresh. After it is enabled, StarRocks polls the metastore (Hive Metastore or AWS Glue) of your Hive cluster, and refreshes the cached metadata of the frequently accessed Hive catalogs to perceive data changes. true indicates to enable the Hive metadata cache refresh, and false indicates to disable it."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"background_refresh_metadata_interval_millis"}),(0,r.jsx)(a.td,{children:"600000 (10 minutes)"}),(0,r.jsx)(a.td,{children:"The interval between two consecutive Hive metadata cache refreshes. Unit: millisecond."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"background_refresh_metadata_time_secs_since_last_access_secs"}),(0,r.jsx)(a.td,{children:"86400 (24 hours)"}),(0,r.jsx)(a.td,{children:"The expiration time of a Hive metadata cache refresh task. For the Hive catalog that has been accessed, if it has not been accessed for more than the specified time, StarRocks stops refreshing its cached metadata. For the Hive catalog that has not been accessed, StarRocks will not refresh its cached metadata. Unit: second."})]})]})]}),"\n",(0,r.jsx)(a.h3,{id:"enable-query-rewrite-for-external-catalog-based-materialized-views",children:"Enable query rewrite for external catalog-based materialized views"}),"\n",(0,r.jsxs)(a.p,{children:["By default, StarRocks does not support query rewrite for materialized views built on Hudi, Iceberg, and JDBC catalogs because query rewrite in this scenario cannot ensure a strong consistency of results. You can enable this feature by setting the property ",(0,r.jsx)(a.code,{children:"force_external_table_query_rewrite"})," to ",(0,r.jsx)(a.code,{children:"true"})," when creating the materialized view. For materialized views built on tables in Hive catalogs, the query rewrite is enabled by default."]}),"\n",(0,r.jsx)(a.p,{children:"Example:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE MATERIALIZED VIEW ex_mv_par_tbl\nPARTITION BY emp_date\nDISTRIBUTED BY hash(empid)\nPROPERTIES (\n"force_external_table_query_rewrite" = "true"\n) \nAS\nselect empid, deptno, emp_date\nfrom `hive_catalog`.`emp_db`.`emps_par_tbl`\nwhere empid < 5;\n'})}),"\n",(0,r.jsx)(a.p,{children:"In scenarios involving query rewriting, if you use a very complex query statement to build a materialized view, we recommend that you split the query statement and construct multiple simple materialized views in a nested manner. Nested materialized views are more versatile and can accommodate a broader range of query patterns."}),"\n",(0,r.jsx)(a.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,r.jsxs)(a.p,{children:["In real-world business scenarios, you can identify queries with high execution latency and resource consumption by analyzing audit logs or ",(0,r.jsx)(a.a,{href:"/doc/en/administration/monitor_manage_big_queries#analyze-big-query-logs",children:"big query logs"}),". You can further use ",(0,r.jsx)(a.a,{href:"/doc/en/administration/query_profile",children:"query profiles"})," to pinpoint the specific stages where the query is slow. The following sections provide instructions and examples on how to boost data lake query performance with materialized views."]}),"\n",(0,r.jsx)(a.h3,{id:"case-one-accelerate-join-calculation-in-data-lake",children:"Case One: Accelerate join calculation in data lake"}),"\n",(0,r.jsx)(a.p,{children:"You can use materialized views to accelerate join queries in the data lake."}),"\n",(0,r.jsx)(a.p,{children:"Suppose the following queries on your Hive catalog are particularly slow:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"--Q1\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM hive.ssb_1g_csv.lineorder, hive.ssb_1g_csv.dates\nWHERE\n    lo_orderdate = d_datekey\n    AND d_year = 1993\n    AND lo_discount BETWEEN 1 AND 3\n    AND lo_quantity < 25;\n\n--Q2\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM hive.ssb_1g_csv.lineorder, hive.ssb_1g_csv.dates\nWHERE\n    lo_orderdate = d_datekey\n    AND d_yearmonth = 'Jan1994'\n    AND lo_discount BETWEEN 4 AND 6\n    AND lo_quantity BETWEEN 26 AND 35;\n\n--Q3 \nSELECT SUM(lo_revenue), d_year, p_brand\nFROM hive.ssb_1g_csv.lineorder, hive.ssb_1g_csv.dates, hive.ssb_1g_csv.part, hive.ssb_1g_csv.supplier\nWHERE\n    lo_orderdate = d_datekey\n    AND lo_partkey = p_partkey\n    AND lo_suppkey = s_suppkey\n    AND p_brand BETWEEN 'MFGR#2221' AND 'MFGR#2228'\n    AND s_region = 'ASIA'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n"})}),"\n",(0,r.jsxs)(a.p,{children:["By analyzing their query profiles, you may notice that the query execution time is mostly spent on the hash join between the table ",(0,r.jsx)(a.code,{children:"lineorder"})," and the other dimension tables on the column ",(0,r.jsx)(a.code,{children:"lo_orderdate"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Here, Q1 and Q2 perform aggregation after joining ",(0,r.jsx)(a.code,{children:"lineorder"})," and ",(0,r.jsx)(a.code,{children:"dates"}),", while Q3 performs aggregation after joining ",(0,r.jsx)(a.code,{children:"lineorder"}),", ",(0,r.jsx)(a.code,{children:"dates"}),", ",(0,r.jsx)(a.code,{children:"part"}),", and ",(0,r.jsx)(a.code,{children:"supplier"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Therefore, you can utilize the ",(0,r.jsx)(a.a,{href:"/doc/en/using_starrocks/query_rewrite_with_materialized_views#view-delta-join-rewrite",children:"View Delta Join rewrite"})," capability of StarRocks to build a materialized view that joins ",(0,r.jsx)(a.code,{children:"lineorder"}),", ",(0,r.jsx)(a.code,{children:"dates"}),", ",(0,r.jsx)(a.code,{children:"part"}),", and ",(0,r.jsx)(a.code,{children:"supplier"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE MATERIALIZED VIEW lineorder_flat_mv\nDISTRIBUTED BY HASH(LO_ORDERDATE, LO_ORDERKEY) BUCKETS 48\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nPROPERTIES ( \n    -- Specify the unique constraints.\n    "unique_constraints" = "\n    hive.ssb_1g_csv.supplier.s_suppkey;\n    hive.ssb_1g_csv.part.p_partkey;\n    hive.ssb_1g_csv.dates.d_datekey",\n    -- Specify the Foreign Keys.\n    "foreign_key_constraints" = "\n    hive.ssb_1g_csv.lineorder(lo_partkey) REFERENCES hive.ssb_1g_csv.part(p_partkey);\n    hive.ssb_1g_csv.lineorder(lo_suppkey) REFERENCES hive.ssb_1g_csv.supplier(s_suppkey);\n    hive.ssb_1g_csv.lineorder(lo_orderdate) REFERENCES hive.ssb_1g_csv.dates(d_datekey)",\n    -- Enable query rewrite for the external catalog-based materialized view.\n    "force_external_table_query_rewrite" = "TRUE"\n)\nAS SELECT\n       l.LO_ORDERDATE AS LO_ORDERDATE,\n       l.LO_ORDERKEY AS LO_ORDERKEY,\n       l.LO_PARTKEY AS LO_PARTKEY,\n       l.LO_SUPPKEY AS LO_SUPPKEY,\n       l.LO_QUANTITY AS LO_QUANTITY,\n       l.LO_EXTENDEDPRICE AS LO_EXTENDEDPRICE,\n       l.LO_DISCOUNT AS LO_DISCOUNT,\n       l.LO_REVENUE AS LO_REVENUE,\n       s.S_REGION AS S_REGION,\n       p.P_BRAND AS P_BRAND,\n       d.D_YEAR AS D_YEAR,\n       d.D_YEARMONTH AS D_YEARMONTH\n   FROM hive.ssb_1g_csv.lineorder AS l\n            INNER JOIN hive.ssb_1g_csv.supplier AS s ON s.S_SUPPKEY = l.LO_SUPPKEY\n            INNER JOIN hive.ssb_1g_csv.part AS p ON p.P_PARTKEY = l.LO_PARTKEY\n            INNER JOIN hive.ssb_1g_csv.dates AS d ON l.LO_ORDERDATE = d.D_DATEKEY;\n'})}),"\n",(0,r.jsx)(a.h3,{id:"case-two-accelerate-aggregations-and-aggregations-on-joins-in-data-lake",children:"Case Two: Accelerate aggregations and aggregations on joins in data lake"}),"\n",(0,r.jsx)(a.p,{children:"Materialized views can be used to accelerate aggregation queries, whether they are on a single table or involve multiple tables."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Single-table aggregation query"}),"\n",(0,r.jsx)(a.p,{children:"For typical queries on a single table, their query profile will reveal that the AGGREGATE node consumes a significant amount of time. You can use common aggregation operators to construct materialized views."}),"\n",(0,r.jsx)(a.p,{children:"Suppose the following is a slow query:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"--Q4\nSELECT\nlo_orderdate, count(distinct lo_orderkey)\nFROM hive.ssb_1g_csv.lineorder\nGROUP BY lo_orderdate\nORDER BY lo_orderdate limit 100;\n"})}),"\n",(0,r.jsx)(a.p,{children:"Q4 calculates the daily count of unique orders. Because the count distinct calculation can be computationally expensive, you can create the following two types of materialized views to accelerate:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv_2_1 \nDISTRIBUTED BY HASH(lo_orderdate)\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nAS \nSELECT\nlo_orderdate, count(distinct lo_orderkey)\nFROM hive.ssb_1g_csv.lineorder\nGROUP BY lo_orderdate;\n\nCREATE MATERIALIZED VIEW mv_2_2 \nDISTRIBUTED BY HASH(lo_orderdate)\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nAS \nSELECT\n-- lo_orderkey must be the BIGINT type so that it can be used for query rewrite.\nlo_orderdate, bitmap_union(to_bitmap(lo_orderkey))\nFROM hive.ssb_1g_csv.lineorder\nGROUP BY lo_orderdate;\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Please note that, in this context, do not create materialized views with LIMIT and ORDER BY clauses to avoid rewrite failures. For more information on the query rewrite limitations, see ",(0,r.jsx)(a.a,{href:"/doc/en/using_starrocks/query_rewrite_with_materialized_views#limitations",children:"Query rewrite with materialized views - Limitations"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Multi-table aggregation query"}),"\n",(0,r.jsx)(a.p,{children:"In scenarios involving aggregations of join results, you can create nested materialized views on existing materialized views that join the tables to further aggregate the join results. For example, based on the example in Case One, you can create the following materialized view to accelerate Q1 and Q2 because their aggregation patterns are similar:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv_2_3\nDISTRIBUTED BY HASH(lo_orderdate)\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nAS \nSELECT\nlo_orderdate, lo_discount, lo_quantity, d_year, d_yearmonth, SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder_flat_mv\nGROUP BY lo_orderdate, lo_discount, lo_quantity, d_year, d_yearmonth;\n"})}),"\n",(0,r.jsx)(a.p,{children:"Of course, it is possible to perform both join and aggregation calculations within a single materialized view. While these types of materialized views may have fewer opportunities for query rewrite (due to their specific calculations), they typically occupy less storage space after aggregation. Your choice can be based on your specific use case."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE MATERIALIZED VIEW mv_2_4\nDISTRIBUTED BY HASH(lo_orderdate)\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nPROPERTIES (\n    "force_external_table_query_rewrite" = "TRUE"\n)\nAS\nSELECT lo_orderdate, lo_discount, lo_quantity, d_year, d_yearmonth, SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM hive.ssb_1g_csv.lineorder, hive.ssb_1g_csv.dates\nWHERE lo_orderdate = d_datekey\nGROUP BY lo_orderdate, lo_discount, lo_quantity, d_year, d_yearmonth;\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"case-three-accelerate-joins-on-aggregations-in-data-lake",children:"Case Three: Accelerate joins on aggregations in data lake"}),"\n",(0,r.jsx)(a.p,{children:"In some scenarios, it may be necessary to perform aggregation calculations on one table first and then perform join queries with other tables. To fully use StarRocks' query rewrite capabilities, we recommend constructing nested materialized views. For example:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"--Q5\nSELECT * FROM  (\n    SELECT \n      l.lo_orderkey, l.lo_orderdate, c.c_custkey, c_region, sum(l.lo_revenue)\n    FROM \n      hive.ssb_1g_csv.lineorder l \n      INNER JOIN (\n        SELECT distinct c_custkey, c_region \n        from \n          hive.ssb_1g_csv.customer \n        WHERE \n          c_region IN ('ASIA', 'AMERICA') \n      ) c ON l.lo_custkey = c.c_custkey\n      GROUP BY  l.lo_orderkey, l.lo_orderdate, c.c_custkey, c_region\n  ) c1 \nWHERE \n  lo_orderdate = '19970503';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Q5 first performs an aggregation query on the ",(0,r.jsx)(a.code,{children:"customer"})," table and then performs a join and aggregation with the ",(0,r.jsx)(a.code,{children:"lineorder"})," table. Similar queries might involve different filters on ",(0,r.jsx)(a.code,{children:"c_region"})," and ",(0,r.jsx)(a.code,{children:"lo_orderdate"}),". To leverage query rewrite capabilities, you can create two materialized views, one for aggregation and another for the join."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'--mv_3_1\nCREATE MATERIALIZED VIEW mv_3_1\nDISTRIBUTED BY HASH(c_custkey)\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nPROPERTIES (\n    "force_external_table_query_rewrite" = "TRUE"\n)\nAS\nSELECT distinct c_custkey, c_region from hive.ssb_1g_csv.customer; \n\n--mv_3_2\nCREATE MATERIALIZED VIEW mv_3_2\nDISTRIBUTED BY HASH(lo_orderdate)\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nPROPERTIES (\n    "force_external_table_query_rewrite" = "TRUE"\n)\nAS\nSELECT l.lo_orderdate, l.lo_orderkey, mv.c_custkey, mv.c_region, sum(l.lo_revenue)\nFROM hive.ssb_1g_csv.lineorder l \nINNER JOIN mv_3_1 mv\nON l.lo_custkey = mv.c_custkey\nGROUP BY l.lo_orderkey, l.lo_orderdate, mv.c_custkey, mv.c_region;\n'})}),"\n",(0,r.jsx)(a.h3,{id:"case-four-separate-hot-and-cold-data-for-real-time-data-and-historical-data-in-data-lake",children:"Case Four: Separate hot and cold data for real-time data and historical data in data lake"}),"\n",(0,r.jsx)(a.p,{children:"Consider the following scenario: data updated within the past three days is directly written into StarRocks, while less recent data is checked and batch-written into Hive. However, there are still queries that may involve data from the past seven days. In this case, you can create a simple model with materialized views to expire the data automatically."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv_4_1 \nDISTRIBUTED BY HASH(lo_orderdate)\nPARTITION BY LO_ORDERDATE\nREFRESH ASYNC EVERY(INTERVAL 1 DAY) \nAS \nSELECT lo_orderkey, lo_orderdate, lo_revenue\nFROM hive.ssb_1g_csv.lineorder\nWHERE lo_orderdate<=current_date()\nAND lo_orderdate>=date_add(current_date(), INTERVAL -4 DAY);\n"})}),"\n",(0,r.jsx)(a.p,{children:"You can further build views or materialized views upon it based on the logic of the upper-layer applications."})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>o,ah:()=>i});var r=t(67294);const n=r.createContext({});function i(e){const a=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const s={};function o({components:e,children:a,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(n.Provider,{value:o},a)}}}]);