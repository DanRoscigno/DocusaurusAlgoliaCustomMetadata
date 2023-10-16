"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61104],{91571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(85893),s=r(11151);const i={displayed_sidebar:"English"},a="Unique Key table",o={id:"table_design/table_types/unique_key_table",title:"Unique Key table",description:"When you create a table, you can define primary key columns and metric columns. This way, queries return the most recent record among a group of records that have the same primary key. Compared with the Duplicate Key table, the Unique Key table simplifies the data loading process to better support real-time and frequent data updates.",source:"@site/versioned_docs/version-3.1/table_design/table_types/unique_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/unique_key_table",permalink:"/doc/docs/table_design/table_types/unique_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/table_design/table_types/unique_key_table.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Aggregate table",permalink:"/doc/docs/table_design/table_types/aggregate_table"},next:{title:"Primary Key table",permalink:"/doc/docs/table_design/table_types/primary_key_table"}},d={},l=[{value:"Scenarios",id:"scenarios",level:2},{value:"Principle",id:"principle",level:2},{value:"Create a table",id:"create-a-table",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"unique-key-table",children:"Unique Key table"}),"\n",(0,n.jsx)(t.p,{children:"When you create a table, you can define primary key columns and metric columns. This way, queries return the most recent record among a group of records that have the same primary key. Compared with the Duplicate Key table, the Unique Key table simplifies the data loading process to better support real-time and frequent data updates."}),"\n",(0,n.jsx)(t.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,n.jsx)(t.p,{children:"The Unique Key table is suitable for business scenarios in which data needs to be frequently updated in real time. For example, in e-commerce scenarios, hundreds of millions of orders can be placed per day, and the statuses of the orders frequently change."}),"\n",(0,n.jsx)(t.h2,{id:"principle",children:"Principle"}),"\n",(0,n.jsx)(t.p,{children:"The Unique Key table can be considered a special Aggregate Key table in which the REPLACE aggregate function is specified for metric columns to return the most recent record among a group of records that have the same primary key."}),"\n",(0,n.jsx)(t.p,{children:"When you load data into a table that uses the Unique Key table, the data is split into multiple batches. Each batch is assigned a version number. Therefore, records with the same primary key may come in multiple versions, of which the most recent version (namely, the record with the largest version number) is retrieved for queries."}),"\n",(0,n.jsxs)(t.p,{children:["As shown in the following table, ",(0,n.jsx)(t.code,{children:"ID"})," is the primary key column, ",(0,n.jsx)(t.code,{children:"value"})," is a metric column, and ",(0,n.jsx)(t.code,{children:"_version"})," holds the data version numbers generated within StarRocks. In this example, the record with an ",(0,n.jsx)(t.code,{children:"ID"})," of 1 is loaded by two batches whose version numbers are ",(0,n.jsx)(t.code,{children:"1"})," and ",(0,n.jsx)(t.code,{children:"2"}),", and the record with an ",(0,n.jsx)(t.code,{children:"ID"})," of ",(0,n.jsx)(t.code,{children:"2"})," is loaded by three batches whose version numbers are ",(0,n.jsx)(t.code,{children:"3"}),", ",(0,n.jsx)(t.code,{children:"4"}),", and ",(0,n.jsx)(t.code,{children:"5"}),"."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"ID"}),(0,n.jsx)(t.th,{children:"value"}),(0,n.jsx)(t.th,{children:"_version"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"101"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"101"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"102"}),(0,n.jsx)(t.td,{children:"5"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["When you query the record with an ",(0,n.jsx)(t.code,{children:"ID"})," of ",(0,n.jsx)(t.code,{children:"1"}),", the most recent record with the largest version number, which is ",(0,n.jsx)(t.code,{children:"2"})," in this case, is returned. When you query the record with an ",(0,n.jsx)(t.code,{children:"ID"})," of ",(0,n.jsx)(t.code,{children:"2"}),", the most recent record with the largest version number, which is ",(0,n.jsx)(t.code,{children:"5"})," in this case, is returned. The following table shows the records returned by the two queries:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"ID"}),(0,n.jsx)(t.th,{children:"value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"102"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-table",children:"Create a table"}),"\n",(0,n.jsxs)(t.p,{children:["In e-commerce scenarios, you often need to collect and analyze the statuses of orders by date. In this example, create a table named ",(0,n.jsx)(t.code,{children:"orders"})," to hold the orders, define ",(0,n.jsx)(t.code,{children:"create_time"})," and ",(0,n.jsx)(t.code,{children:"order_id"}),", which are frequently used as conditions to filter the orders, as primary key columns, and define the other two columns, ",(0,n.jsx)(t.code,{children:"order_state"})," and ",(0,n.jsx)(t.code,{children:"total_price"}),", as metric columns. This way, the orders can be updated in real time as their statuses change, and can be quickly filtered to accelerate queries."]}),"\n",(0,n.jsx)(t.p,{children:"The statement for creating the table is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS orders (\n    create_time DATE NOT NULL COMMENT "create time of an order",\n    order_id BIGINT NOT NULL COMMENT "id of an order",\n    order_state INT COMMENT "state of an order",\n    total_price BIGINT COMMENT "price of an order"\n)\nUNIQUE KEY(create_time, order_id)\nDISTRIBUTED BY HASH(order_id);\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When you create a table, you must specify the bucketing column by using the ",(0,n.jsx)(t.code,{children:"DISTRIBUTED BY HASH"})," clause. For detailed information, see ",(0,n.jsx)(t.a,{href:"/doc/docs/table_design/Data_distribution#design-partitioning-and-bucketing-rules",children:"bucketing"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,n.jsx)(t.a,{href:"/doc/docs/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Take note of the following points about the primary key of a table:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The primary key is defined by using the ",(0,n.jsx)(t.code,{children:"UNIQUE KEY"})," keyword."]}),"\n",(0,n.jsx)(t.li,{children:"The primary key must be created on columns on which unique constraints are enforced and whose names cannot be changed."}),"\n",(0,n.jsxs)(t.li,{children:["The primary key must be properly designed:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"When queries are run, primary key columns are filtered before the aggregation of multiple data versions, whereas metric columns are filtered after the aggregation of multiple data versions. Therefore, we recommend that you identify the columns that are frequently used as filter conditions and define these columns as primary key columns. This way, data filtering can start before the aggregation of multiple data versions to improve query performance."}),"\n",(0,n.jsx)(t.li,{children:"During the aggregation process, StarRocks compares all primary key columns. This is time-consuming and may decrease query performance. Therefore, do not define a large number of primary key columns. If a column is rarely used as a filter condition for queries, we recommend that you do not define the column as a primary key column."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"When you create a table, you cannot create BITMAP indexes or Bloom Filter indexes on the metric columns of the table."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The Unique Key table does not support materialized views."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,n.jsxs)(t.p,{children:["After a table is created, you can use various data ingestion methods to load data into StarRocks. For information about the data ingestion methods that are supported by StarRocks, see ",(0,n.jsx)(t.a,{href:"/doc/docs/loading/Loading_intro",children:"Data import"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When you load data into a table that uses the Unique Key table, you can only update all columns of the table. For example, when you update the preceding ",(0,n.jsx)(t.code,{children:"orders"})," table, you must update all its columns, which are ",(0,n.jsx)(t.code,{children:"create_time"}),", ",(0,n.jsx)(t.code,{children:"order_id"}),", ",(0,n.jsx)(t.code,{children:"order_state"}),", and ",(0,n.jsx)(t.code,{children:"total_price"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"When you query data from a table that uses the Unique Key table, StarRocks needs to aggregate records of multiple data versions. In this situation, a large number of data versions decreases query performance. Therefore, we recommend that you specify a proper frequency at which data is loaded into the table to meet meet your requirements for real-time data analytics while preventing a large number of data versions. If you require minute-level data, you can specify a loading frequency of 1 minute instead of a loading frequency of 1 second."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,r)=>{r.d(t,{Zo:()=>o,ah:()=>i});var n=r(67294);const s=n.createContext({});function i(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(s.Provider,{value:o},t)}}}]);