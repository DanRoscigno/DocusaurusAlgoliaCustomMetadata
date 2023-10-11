"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65998],{68980:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=i(85893),a=i(11151);const s={},r="Dynamic partitioning",d={id:"table_design/dynamic_partitioning",title:"Dynamic partitioning",description:"StarRocks supports dynamic partitioning, which can automatically manage the time to life (TTL) of partitions, such as partitioning new input data in tables and deleting expired partitions. This feature significantly reduces maintenance costs.",source:"@site/versioned_docs/version-2.5/table_design/dynamic_partitioning.md",sourceDirName:"table_design",slug:"/table_design/dynamic_partitioning",permalink:"/doc/docs/2.5/table_design/dynamic_partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/table_design/dynamic_partitioning.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Data compression",permalink:"/doc/docs/2.5/table_design/data_compression"},next:{title:"Table Types",permalink:"/doc/docs/2.5/table_design/table_types/"}},c={},o=[{value:"Enable dynamic partitioning",id:"enable-dynamic-partitioning",level:2},{value:"View partitions",id:"view-partitions",level:2},{value:"Modify properties of dynamic partitioning",id:"modify-properties-of-dynamic-partitioning",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dynamic-partitioning",children:"Dynamic partitioning"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks supports dynamic partitioning, which can automatically manage the time to life (TTL) of partitions, such as partitioning new input data in tables and deleting expired partitions. This feature significantly reduces maintenance costs."}),"\n",(0,n.jsx)(t.h2,{id:"enable-dynamic-partitioning",children:"Enable dynamic partitioning"}),"\n",(0,n.jsxs)(t.p,{children:["Take table ",(0,n.jsx)(t.code,{children:"site_access"})," as an example. To enable dynamic partitioning, you need to configure the PROPERTIES parameter. For information about the configuration items, see ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE site_access(\n    event_day DATE,\n    site_id INT DEFAULT \'10\',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT \'\',\n    pv BIGINT DEFAULT \'0\'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY RANGE(event_day)(\n    PARTITION p20200321 VALUES LESS THAN ("2020-03-22"),\n    PARTITION p20200322 VALUES LESS THAN ("2020-03-23"),\n    PARTITION p20200323 VALUES LESS THAN ("2020-03-24"),\n    PARTITION p20200324 VALUES LESS THAN ("2020-03-25")\n)\nDISTRIBUTED BY HASH(event_day, site_id) BUCKETS 32\nPROPERTIES(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32",\n    "dynamic_partition.history_partition_num" = "0"\n);\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"PROPERTIES"})}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"parameter"}),(0,n.jsx)(t.th,{children:"required"}),(0,n.jsx)(t.th,{children:"description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.enable"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["Enables dynamic partitioning. Valid values are ",(0,n.jsx)(t.code,{children:"TRUE"})," and ",(0,n.jsx)(t.code,{children:"FALSE"}),". The default value is ",(0,n.jsx)(t.code,{children:"TRUE"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.time_unit"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsxs)(t.td,{children:["The time granularity for dynamically created partitions. It is a required parameter. Valid values are ",(0,n.jsx)(t.code,{children:"HOUR"}),", ",(0,n.jsx)(t.code,{children:"DAY"}),", ",(0,n.jsx)(t.code,{children:"WEEK"}),", ",(0,n.jsx)(t.code,{children:"MONTH"}),", and ",(0,n.jsx)(t.code,{children:"YEAR"}),". The time granularity determines the suffix format for dynamically created partitions.",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(t.code,{children:"DAY"}),", the suffix format for dynamically created partitions is yyyyMMdd. An example partition name suffix is ",(0,n.jsx)(t.code,{children:"20200321"}),"."]}),(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(t.code,{children:"WEEK"}),", the suffix format for dynamically created partitions is yyyy_ww, for example ",(0,n.jsx)(t.code,{children:"2020_13"})," for the 13th week of 2020."]}),(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(t.code,{children:"MONTH"}),", the suffix format for dynamically created partitions is yyyyMM, for example ",(0,n.jsx)(t.code,{children:"202003"}),"."]}),(0,n.jsxs)("li",{children:["If the value is ",(0,n.jsx)(t.code,{children:"YEAR"}),", the suffix format for dynamically created partitions is yyyy, for example ",(0,n.jsx)(t.code,{children:"2020"}),"."]})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.time_zone"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The time zone for dynamic partitions, which is by default the same as the system time zone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.start"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["The starting offset of dynamic partitioning. The value of this parameter must be a negative integer. The partitions before this offset will be deleted based on the current day, week, or month which is determined by the value of the parameter ",(0,n.jsx)(t.code,{children:"dynamic_partition.time_unit"}),". The default value is ",(0,n.jsx)(t.code,{children:"Integer.MIN_VALUE"}),", namely, -2147483648, which means that the history partitions will not be deleted."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.end"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The end offset of dynamic partitioning. The value of this parameter must be a positive integer. The partitions from the current day, week, or month to the end offset will be created in advance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.prefix"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["The prefix added to the names of dynamic partitions. The default value is ",(0,n.jsx)(t.code,{children:"p"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.buckets"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The number of buckets per dynamic partition. The default value is the same as the number of buckets determined by the reserved word BUCKETS or automatically set by StarRocks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.history_partition_num"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["The number of historical partitions created by the dynamic partitioning mechanism, with a default value of ",(0,n.jsx)(t.code,{children:"0"}),". When the value is greater than 0, historical partitions are created in advance. From v2.5.2, StarRocks supports this parameter."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.start_day_of_week"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["When ",(0,n.jsx)(t.code,{children:"dynamic_partition.time_unit"})," is ",(0,n.jsx)(t.code,{children:"WEEK"}),", this parameter is used to specify the first day of each week. Valid values: ",(0,n.jsx)(t.code,{children:"1"})," to ",(0,n.jsx)(t.code,{children:"7"}),". ",(0,n.jsx)(t.code,{children:"1"})," means Monday and ",(0,n.jsx)(t.code,{children:"7"})," means Sunday. The default value is ",(0,n.jsx)(t.code,{children:"1"}),", which means that every week starts on Monday."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.start_day_of_month"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["When ",(0,n.jsx)(t.code,{children:"dynamic_partition.time_unit"})," is ",(0,n.jsx)(t.code,{children:"MONTH"}),", this parameter is used to specify the first day of each month. Valid values: ",(0,n.jsx)(t.code,{children:"1"})," to ",(0,n.jsx)(t.code,{children:"28"}),". ",(0,n.jsx)(t.code,{children:"1"})," means the 1st of every month and ",(0,n.jsx)(t.code,{children:"28"})," means the 28th of every month. The default value is ",(0,n.jsx)(t.code,{children:"1"}),", which means that every month starts on the 1st. The first day can not be the 29th, 30th, or 31st."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dynamic_partition.replication_num"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The number of replicas for tablets in dynamically created partitions. The default value is the same as the number of replicas configured at table creation."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"FE configuration:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"dynamic_partition_check_interval_seconds"}),": the interval for scheduling dynamic partitioning. The default value is 600s, which means that the partition situation is checked every 10 minutes to see whether the partitions meet the dynamic partitioning conditions specified in ",(0,n.jsx)(t.code,{children:"PROPERTIES"}),". If not, the partitions will be created and deleted automatically."]}),"\n",(0,n.jsx)(t.h2,{id:"view-partitions",children:"View partitions"}),"\n",(0,n.jsx)(t.p,{children:"After you enable dynamic partitions for a table, the input data is continuously and automatically partitioned. You can view the current partitions by using the following statement. For example, if the current date is 2020-03-25, you can only see partitions in the time range from 2020-03-22 to 2020-03-28."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM site_access;\n\n[types: [DATE]; keys: [2020-03-22]; \u2025types: [DATE]; keys: [2020-03-23]; )\n[types: [DATE]; keys: [2020-03-23]; \u2025types: [DATE]; keys: [2020-03-24]; )\n[types: [DATE]; keys: [2020-03-24]; \u2025types: [DATE]; keys: [2020-03-25]; )\n[types: [DATE]; keys: [2020-03-25]; \u2025types: [DATE]; keys: [2020-03-26]; )\n[types: [DATE]; keys: [2020-03-26]; \u2025types: [DATE]; keys: [2020-03-27]; )\n[types: [DATE]; keys: [2020-03-27]; \u2025types: [DATE]; keys: [2020-03-28]; )\n[types: [DATE]; keys: [2020-03-28]; \u2025types: [DATE]; keys: [2020-03-29]; )\n"})}),"\n",(0,n.jsx)(t.h2,{id:"modify-properties-of-dynamic-partitioning",children:"Modify properties of dynamic partitioning"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/ALTER%20TABLE",children:"ALTER TABLE"})," statement to modify properties of dynamic partitioning, such as disabling dynamic partitioning. Take the following statement as an example."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE site_access \nSET("dynamic_partition.enable"="false");\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To check the properties of dynamic partitioning of a table, execute the ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20TABLE",children:"SHOW CREATE TABLE"})," statement."]}),"\n",(0,n.jsx)(t.li,{children:"You can also use the ALTER TABLE statement to modify other properties of a table."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,i)=>{i.d(t,{Zo:()=>d,ah:()=>s});var n=i(67294);const a=n.createContext({});function s(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function d({components:e,children:t,disableParentContext:i}){let d;return d=i?"function"==typeof e?e({}):e||r:s(e),n.createElement(a.Provider,{value:d},t)}}}]);