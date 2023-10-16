"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65998],{68980:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=t(85893),a=t(11151);const s={displayed_sidebar:"English"},r="Dynamic partitioning",d={id:"table_design/dynamic_partitioning",title:"Dynamic partitioning",description:"StarRocks supports dynamic partitioning, which can automatically manage the time to life (TTL) of partitions, such as partitioning new input data in tables and deleting expired partitions. This feature significantly reduces maintenance costs.",source:"@site/versioned_docs/version-2.5/table_design/dynamic_partitioning.md",sourceDirName:"table_design",slug:"/table_design/dynamic_partitioning",permalink:"/doc/docs/2.5/table_design/dynamic_partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/dynamic_partitioning.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Data compression",permalink:"/doc/docs/2.5/table_design/data_compression"},next:{title:"Table Types",permalink:"/doc/docs/2.5/table_design/table_types/"}},c={},o=[{value:"Enable dynamic partitioning",id:"enable-dynamic-partitioning",level:2},{value:"View partitions",id:"view-partitions",level:2},{value:"Modify properties of dynamic partitioning",id:"modify-properties-of-dynamic-partitioning",level:2}];function l(e){const i=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"dynamic-partitioning",children:"Dynamic partitioning"}),"\n",(0,n.jsx)(i.p,{children:"StarRocks supports dynamic partitioning, which can automatically manage the time to life (TTL) of partitions, such as partitioning new input data in tables and deleting expired partitions. This feature significantly reduces maintenance costs."}),"\n",(0,n.jsx)(i.h2,{id:"enable-dynamic-partitioning",children:"Enable dynamic partitioning"}),"\n",(0,n.jsxs)(i.p,{children:["Take table ",(0,n.jsx)(i.code,{children:"site_access"})," as an example. To enable dynamic partitioning, you need to configure the PROPERTIES parameter. For information about the configuration items, see ",(0,n.jsx)(i.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-SQL",children:'CREATE TABLE site_access(\n    event_day DATE,\n    site_id INT DEFAULT \'10\',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT \'\',\n    pv BIGINT DEFAULT \'0\'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY RANGE(event_day)(\n    PARTITION p20200321 VALUES LESS THAN ("2020-03-22"),\n    PARTITION p20200322 VALUES LESS THAN ("2020-03-23"),\n    PARTITION p20200323 VALUES LESS THAN ("2020-03-24"),\n    PARTITION p20200324 VALUES LESS THAN ("2020-03-25")\n)\nDISTRIBUTED BY HASH(event_day, site_id) BUCKETS 32\nPROPERTIES(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32",\n    "dynamic_partition.history_partition_num" = "0"\n);\n'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"PROPERTIES"})}),":"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"parameter"}),(0,n.jsx)(i.th,{children:"required"}),(0,n.jsx)(i.th,{children:"description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.enable"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Enables dynamic partitioning. Valid values are ",(0,n.jsx)(i.code,{children:"TRUE"})," and ",(0,n.jsx)(i.code,{children:"FALSE"}),". The default value is ",(0,n.jsx)(i.code,{children:"TRUE"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.time_unit"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsxs)(i.td,{children:["The time granularity for dynamically created partitions. It is a required parameter. Valid values are ",(0,n.jsx)(i.code,{children:"HOUR"}),", ",(0,n.jsx)(i.code,{children:"DAY"}),", ",(0,n.jsx)(i.code,{children:"WEEK"}),", ",(0,n.jsx)(i.code,{children:"MONTH"}),", and ",(0,n.jsx)(i.code,{children:"YEAR"}),". The time granularity determines the suffix format for dynamically created partitions.",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(i.code,{children:"DAY"}),", the suffix format for dynamically created partitions is yyyyMMdd. An example partition name suffix is ",(0,n.jsx)(i.code,{children:"20200321"}),"."]}),(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(i.code,{children:"WEEK"}),", the suffix format for dynamically created partitions is yyyy_ww, for example ",(0,n.jsx)(i.code,{children:"2020_13"})," for the 13th week of 2020."]}),(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(i.code,{children:"MONTH"}),", the suffix format for dynamically created partitions is yyyyMM, for example ",(0,n.jsx)(i.code,{children:"202003"}),"."]}),(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(i.code,{children:"YEAR"}),", the suffix format for dynamically created partitions is yyyy, for example ",(0,n.jsx)(i.code,{children:"2020"}),"."]})]})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.time_zone"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The time zone for dynamic partitions, which is by default the same as the system time zone."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.start"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The starting offset of dynamic partitioning. The value of this parameter must be a negative integer. The partitions before this offset will be deleted based on the current day, week, or month which is determined by the value of the parameter ",(0,n.jsx)(i.code,{children:"dynamic_partition.time_unit"}),". The default value is ",(0,n.jsx)(i.code,{children:"Integer.MIN_VALUE"}),", namely, -2147483648, which means that the history partitions will not be deleted."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.end"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The end offset of dynamic partitioning. The value of this parameter must be a positive integer. The partitions from the current day, week, or month to the end offset will be created in advance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.prefix"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The prefix added to the names of dynamic partitions. The default value is ",(0,n.jsx)(i.code,{children:"p"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.buckets"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The number of buckets per dynamic partition. The default value is the same as the number of buckets determined by the reserved word BUCKETS or automatically set by StarRocks."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.history_partition_num"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The number of historical partitions created by the dynamic partitioning mechanism, with a default value of ",(0,n.jsx)(i.code,{children:"0"}),". When the value is greater than 0, historical partitions are created in advance. From v2.5.2, StarRocks supports this parameter."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.start_day_of_week"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["When ",(0,n.jsx)(i.code,{children:"dynamic_partition.time_unit"})," is ",(0,n.jsx)(i.code,{children:"WEEK"}),", this parameter is used to specify the first day of each week. Valid values: ",(0,n.jsx)(i.code,{children:"1"})," to ",(0,n.jsx)(i.code,{children:"7"}),". ",(0,n.jsx)(i.code,{children:"1"})," means Monday and ",(0,n.jsx)(i.code,{children:"7"})," means Sunday. The default value is ",(0,n.jsx)(i.code,{children:"1"}),", which means that every week starts on Monday."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.start_day_of_month"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["When ",(0,n.jsx)(i.code,{children:"dynamic_partition.time_unit"})," is ",(0,n.jsx)(i.code,{children:"MONTH"}),", this parameter is used to specify the first day of each month. Valid values: ",(0,n.jsx)(i.code,{children:"1"})," to ",(0,n.jsx)(i.code,{children:"28"}),". ",(0,n.jsx)(i.code,{children:"1"})," means the 1st of every month and ",(0,n.jsx)(i.code,{children:"28"})," means the 28th of every month. The default value is ",(0,n.jsx)(i.code,{children:"1"}),", which means that every month starts on the 1st. The first day can not be the 29th, 30th, or 31st."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dynamic_partition.replication_num"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The number of replicas for tablets in dynamically created partitions. The default value is the same as the number of replicas configured at table creation."})]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"FE configuration:"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"dynamic_partition_check_interval_seconds"}),": the interval for scheduling dynamic partitioning. The default value is 600s, which means that the partition situation is checked every 10 minutes to see whether the partitions meet the dynamic partitioning conditions specified in ",(0,n.jsx)(i.code,{children:"PROPERTIES"}),". If not, the partitions will be created and deleted automatically."]}),"\n",(0,n.jsx)(i.h2,{id:"view-partitions",children:"View partitions"}),"\n",(0,n.jsx)(i.p,{children:"After you enable dynamic partitions for a table, the input data is continuously and automatically partitioned. You can view the current partitions by using the following statement. For example, if the current date is 2020-03-25, you can only see partitions in the time range from 2020-03-22 to 2020-03-28."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM site_access;\n\n[types: [DATE]; keys: [2020-03-22]; \u2025types: [DATE]; keys: [2020-03-23]; )\n[types: [DATE]; keys: [2020-03-23]; \u2025types: [DATE]; keys: [2020-03-24]; )\n[types: [DATE]; keys: [2020-03-24]; \u2025types: [DATE]; keys: [2020-03-25]; )\n[types: [DATE]; keys: [2020-03-25]; \u2025types: [DATE]; keys: [2020-03-26]; )\n[types: [DATE]; keys: [2020-03-26]; \u2025types: [DATE]; keys: [2020-03-27]; )\n[types: [DATE]; keys: [2020-03-27]; \u2025types: [DATE]; keys: [2020-03-28]; )\n[types: [DATE]; keys: [2020-03-28]; \u2025types: [DATE]; keys: [2020-03-29]; )\n"})}),"\n",(0,n.jsx)(i.h2,{id:"modify-properties-of-dynamic-partitioning",children:"Modify properties of dynamic partitioning"}),"\n",(0,n.jsxs)(i.p,{children:["You can use the ",(0,n.jsx)(i.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," statement to modify properties of dynamic partitioning, such as disabling dynamic partitioning. Take the following statement as an example."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-SQL",children:'ALTER TABLE site_access \nSET("dynamic_partition.enable"="false");\n'})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Note:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["To check the properties of dynamic partitioning of a table, execute the ",(0,n.jsx)(i.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"})," statement."]}),"\n",(0,n.jsx)(i.li,{children:"You can also use the ALTER TABLE statement to modify other properties of a table."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,a.ah)(),e.components);return i?(0,n.jsx)(i,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,i,t)=>{t.d(i,{Zo:()=>d,ah:()=>s});var n=t(67294);const a=n.createContext({});function s(e){const i=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const r={};function d({components:e,children:i,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||r:s(e),n.createElement(a.Provider,{value:d},i)}}}]);