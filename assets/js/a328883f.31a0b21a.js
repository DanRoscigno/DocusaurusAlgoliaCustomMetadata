"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76406],{63183:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=i(85893),t=i(11151);const s={},r="Performance Optimization",o={id:"administration/Profiling",title:"Performance Optimization",description:"Table Type Selection",source:"@site/versioned_docs/version-2.5/administration/Profiling.md",sourceDirName:"administration",slug:"/administration/Profiling",permalink:"/doc/en/2.5/administration/Profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Profiling.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Monitor and Alerting",permalink:"/doc/en/2.5/administration/Monitor_and_Alert"},next:{title:"Query Management",permalink:"/doc/en/2.5/administration/Query_management"}},l={},d=[{value:"Table Type Selection",id:"table-type-selection",level:2},{value:"Colocate Table",id:"colocate-table",level:2},{value:"Flat table and star schema",id:"flat-table-and-star-schema",level:2},{value:"Partition and bucket",id:"partition-and-bucket",level:2},{value:"Sparse index and bloomfilter index",id:"sparse-index-and-bloomfilter-index",level:2},{value:"Inverted Index",id:"inverted-index",level:2},{value:"Materialized view (rollup)",id:"materialized-view-rollup",level:2},{value:"Schema change",id:"schema-change",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",a:"a"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,a.jsx)(n.h2,{id:"table-type-selection",children:"Table Type Selection"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks supports four table types: Duplicate Key table, Aggregate table, Unique Key table, and Primary Key table. All of them are sorted by KEY."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"AGGREGATE KEY"}),": When records with the same AGGREGATE KEY is loaded into StarRocks, the old and new records are aggregated. Currently, aggregate tables supports the following aggregate functions: SUM, MIN, MAX, and REPLACE. Aggregate tables support aggregating data in advance, facilitating business statements and multi-dimensional analyses."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DUPLICATE KEY"}),": You only need to specify the sort key for a DUPLICATE KEY table. Records with the same DUPLICATE KEY exist at the same time. It is suitable for analyses that do not involve aggregating data in advance."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"UNIQUE KEY"}),": When records with the same UNIQUE KEY is loaded into StarRocks, the new record overwrites the old one. A UNIQUE KEY tables is similar to an aggregate table with REPLACE function. Both are suitable for analyses involving constant updates."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"PRIMARY KEY"}),": Primary Key tables guarantee the uniqueness of records, and allow you to perform realtime updating."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE site_visit\n(\n    siteid      INT,\n    city        SMALLINT,\n    username    VARCHAR(32),\n    pv BIGINT   SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, city, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10;\n\n\nCREATE TABLE session_data\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10;\n\nCREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nUNIQUE KEY(orderid)\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n\nCREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nPRIMARY KEY(orderid)\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"colocate-table",children:"Colocate Table"}),"\n",(0,a.jsxs)(n.p,{children:["To speed up queries, tables with the same distribution can use a common bucketing column. In that case, data can be joined locally without being transferred across the cluster during the ",(0,a.jsx)(n.code,{children:"join"})," operation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE colocate_table\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about colocate join and replica management, see ",(0,a.jsx)(n.a,{href:"/doc/en/2.5/using_starrocks/Colocate_join",children:"Colocate join"})]}),"\n",(0,a.jsx)(n.h2,{id:"flat-table-and-star-schema",children:"Flat table and star schema"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks supports star schema, which is more flexible in modelling than flat tables. You can create a view to replace flat tables during modelling and then query data from multiple tables to accelerate queries."}),"\n",(0,a.jsx)(n.p,{children:"Flat tables have the following drawbacks:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Costly dimension updates because a flat table usually contains a massive number of dimensions. Each time a dimension is updated, the entire table must be updated. The situation exacerbates as the update frequency increases."}),"\n",(0,a.jsx)(n.li,{children:"High maintenance cost because flat tables require additional development workloads, storage space, and data backfilling operations."}),"\n",(0,a.jsx)(n.li,{children:"High data ingestion cost because a flat table has many fields and an aggregate table may contain even more key fields. During data loading, more fields need to be sorted, which prolongs data loading."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If you have high requirements on query concurrency or low latency, you can still use flat tables."}),"\n",(0,a.jsx)(n.h2,{id:"partition-and-bucket",children:"Partition and bucket"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks supports two levels of partitioning: the first level is RANGE partition and the second level is HASH bucket."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"RANGE partition: RANGE partition is used to divide data into different intervals (can be understood as dividing the original table into multiple sub-tables). Most users choose to set partitions by time, which has the following advantages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Easier to distinguish between hot and cold data"}),"\n",(0,a.jsx)(n.li,{children:"Be able to leverage StarRocks tiered storage (SSD + SATA)"}),"\n",(0,a.jsx)(n.li,{children:"Faster to delete data by partition"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"HASH bucket: Divides data into different buckets according to the hash value."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"It is recommended to use a column with a high degree of discrimination for bucketing to avoid data skew."}),"\n",(0,a.jsx)(n.li,{children:"To facilitate data recovery, it is recommended to keep the size of compressed data in each bucket between 100 MB to 1 GB. We recommend you configure an appropriate number of buckets when you create a table or add a partition."}),"\n",(0,a.jsx)(n.li,{children:"Random bucketing is not recommended. You must explicitly specify the HASH bucketing column when you create a table."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sparse-index-and-bloomfilter-index",children:"Sparse index and bloomfilter index"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks stores data in an ordered manner and builds sparse indexes at a granularity of 1024 rows."}),"\n",(0,a.jsx)(n.p,{children:"StarRocks selects a fixed-length prefix (currently 36 bytes) in the schema as the sparse index."}),"\n",(0,a.jsx)(n.p,{children:"When creating a table, it is recommended to place common filter fields at the beginning of the schema declaration. Fields with the highest differentiation and query frequency must be placed first."}),"\n",(0,a.jsx)(n.p,{children:"A VARCHAR field must placed at the end of a sparse index because the index gets truncated from the VARCHAR field. If the VARCHAR field appears first, the index may be less than 36 bytes."}),"\n",(0,a.jsxs)(n.p,{children:["Use the above ",(0,a.jsx)(n.code,{children:"site_visit"})," table as an example. The table has four columns: ",(0,a.jsx)(n.code,{children:"siteid, city, username, pv"}),". The sort key contains three columns ",(0,a.jsx)(n.code,{children:"siteid\uff0ccity\uff0cusername"}),", which occupy 4, 2, and 32 bytes respectively. So the prefix index (sparse index) can be the first 30 bytes of ",(0,a.jsx)(n.code,{children:"siteid + city + username"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In addition to sparse indexes, StarRocks also provides bloomfilter indexes, which are effective for filtering columns with high discrimination. If you want to place VARCHAR fields before other fields, you can create bloomfilter indexes."}),"\n",(0,a.jsx)(n.h2,{id:"inverted-index",children:"Inverted Index"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks adopts Bitmap Indexing technology to support inverted indexes that can be applied to all columns of the Duplicate Key table and the key column of the Aggregate table and Unique Key table. Bitmap Index is suitable for columns with a small value range, such as gender, city, and province. As the range expands, the bitmap index expands in parallel."}),"\n",(0,a.jsx)(n.h2,{id:"materialized-view-rollup",children:"Materialized view (rollup)"}),"\n",(0,a.jsx)(n.p,{children:"A rollup is essentially a materialized index of the original table (base table). When creating a rollup, only some columns of the base table can be selected as the schema, and the order of the fields in the schema can be different from that of the base table. Below are some use cases of using a rollup:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Data aggregation in the base table is not high, because the base table has fields with high differentiation. In this case, you may consider selecting some columns to create rollups. Use the above ",(0,a.jsx)(n.code,{children:"site_visit"})," table as an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"site_visit(siteid, city, username, pv)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"siteid"})," may lead to poor data aggregation. If you need to frequently calculate PVs by city, you can create a rollup with only ",(0,a.jsx)(n.code,{children:"city"})," and ",(0,a.jsx)(n.code,{children:"pv"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE site_visit ADD ROLLUP rollup_city(city, pv);\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The prefix index in the base table cannot be hit, because the way the base table is built cannot cover all the query patterns. In this case, you may consider creating a rollup to adjust the column order. Use the above ",(0,a.jsx)(n.code,{children:"session_data"})," table as an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"session_data(visitorid, sessionid, visittime, city, province, ip, brower, url)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If there are cases where you need to analyze visits by ",(0,a.jsx)(n.code,{children:"browser"})," and ",(0,a.jsx)(n.code,{children:"province"})," in addition to ",(0,a.jsx)(n.code,{children:"visitorid"}),", you can create a separate rollup:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE session_data\nADD ROLLUP rollup_brower(brower,province,ip,url)\nDUPLICATE KEY(brower,province);\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"schema-change",children:"Schema change"}),"\n",(0,a.jsx)(n.p,{children:"There are three ways to change schemas in StarRocks: sorted schema change, direct schema change, and linked schema change."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Sorted schema change: Change the sorting of a column and reorder the data. For example, deleting a column in a sorted schema leads to data reorder."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"ALTER TABLE site_visit DROP COLUMN city;"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Direct schema change: Transform the data instead of reordering it, for example, changing the column type or adding a column to a sparse index."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"ALTER TABLE site_visit MODIFY COLUMN username varchar(64);"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Linked schema change: Complete changes without transforming data, for example, adding columns."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"ALTER TABLE site_visit ADD COLUMN click bigint SUM default '0';"})}),"\n",(0,a.jsx)(n.p,{children:"It is recommended to choose an appropriate schema when you create tables to accelerate schema changes."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>o,ah:()=>s});var a=i(67294);const t=a.createContext({});function s(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||r:s(e),a.createElement(t.Provider,{value:o},n)}}}]);