"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38537],{27089:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=s(85893),t=s(11151);const o={},a="ALTER ROUTINE LOAD",i={id:"sql-reference/sql-statements/data-manipulation/alter-routine-load",title:"ALTER ROUTINE LOAD",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/alter-routine-load.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/alter-routine-load",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/alter-routine-load",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/alter-routine-load.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"UPDATE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/UPDATE"},next:{title:"INSERT",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/insert"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"<strong>Parameters</strong>",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",code:"code",blockquote:"blockquote",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-routine-load",children:"ALTER ROUTINE LOAD"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["This command is used to modify a Routine Load job that has been created. The job to be modified must be in the ",(0,r.jsx)(n.strong,{children:"PAUSED"})," state. You can run the ",(0,r.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/PAUSE%20ROUTINE%20LOAD",children:"PASUME"}),"(PAUSE ROUTINE LOAD) command to pause a loading job and then perform the ",(0,r.jsx)(n.code,{children:"ALTER ROUTINE LOAD"})," operation on the job."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note: You do not need to specify the content enclosed in square brackets []."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER ROUTINE LOAD FOR [db.]<job_name>\n\n[load_properties]\n\n[job_properties]\n\nFROM data_source\n\n[data_source_properties]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[db.]<job_name>"})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The name of the job you want to modify."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"load_properties"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The properties of the data to be imported."}),"\n",(0,r.jsx)(n.p,{children:"Syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"[COLUMNS TERMINATED BY '<terminator>'],\n\n[COLUMNS ([<column_name> [, ...] ] [, column_assignment [, ...] ] )],\n\n[WHERE <expr>],\n\n[PARTITION ([ <partition_name> [, ...] ])]\n\n\n\ncolumn_assignment:\n\n<column_name> = column_expression\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify column separators."}),"\n",(0,r.jsx)(n.p,{children:"You can specify column separators for the CSV data you want to import. For example, you can use commas (,) as column separators."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'COLUMNS TERMINATED BY ","\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The default separator is ",(0,r.jsx)(n.code,{children:"\\t"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify column mapping."}),"\n",(0,r.jsx)(n.p,{children:"Specify the mapping of columns in the source and destination tables, and define how derived columns are generated."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mapped columns"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specify which columns in the source table correspond to which columns in the destination table in sequence. If you want to skip a column, you can specify a column name that does not exist. For example, the destination table has three columns k1, k2, and v1. The source table has four columns, of which the first, second, and fourth columns correspond to k2, k1, and v1. You can write the code as follows."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"COLUMNS (k2, k1, xxx, v1)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"xxx"})," is the column that does not exist. It is used to skip the third column in the source table."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Derived columns"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Columns expressed in ",(0,r.jsx)(n.code,{children:"col_name = expr"})," are derived columns. These columns are generated by using ",(0,r.jsx)(n.code,{children:"expr"}),". Derived columns are usually placed after mapped columns. Although this is not a mandatory rule, StarRocks always parses mapped columns prior to derived columns. Assume that the destination table has a fourth column v2, which is generated by adding up k1 and k2. You can write the code as follows."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"COLUMNS (k2, k1, xxx, v1, v2 = k1 + k2);\n"})}),"\n",(0,r.jsx)(n.p,{children:"For CSV data, the number of mapped columns in COLUMNS must match the number of columns in the CSV file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify filter conditions."}),"\n",(0,r.jsx)(n.p,{children:"You can specify filter conditions to filter out unwanted columns. The filter columns can be mapped columns or derived columns. For example, if you need to import data from columns whose k1 value is greater than 100 and k2 value equals 1000, you can write the code as follows."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"WHERE k1 > 100 and k2 = 1000\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the partitions into which you want to import data."}),"\n",(0,r.jsx)(n.p,{children:"If no partitions are specified, data will be automatically imported into StarRocks partitions based on the partition key values in the CSV data. Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"PARTITION(p1, p2, p3)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"job_properties"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The job parameters you want to modify. Currently, you can modify the following parameters:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"desired_concurrent_number"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"max_error_number"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"max_batch_interval"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"max_batch_rows"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"max_batch_size"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"jsonpaths"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"json_root"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"strip_outer_array"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"strict_mode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"timezone"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"data_source"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The type of the data source. Currently, only Kafka data source is supported."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"data_source_properties"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The properties of the data source. The following properties are supported:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"kafka_partitions"})}),"\n",(0,r.jsx)(n.p,{children:"You can only modify Kafka partitions that have been consumed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"kafka_offsets"})}),"\n",(0,r.jsx)(n.p,{children:"You can only modify partition offsets that have not been consumed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Custom properties such as ",(0,r.jsx)(n.code,{children:"property.group.id"})," and ",(0,r.jsx)(n.code,{children:"property.group.id"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["You can only specify Kafka partitions that have been consumed in ",(0,r.jsx)(n.code,{children:"kafka_partitions"}),". You can only specify partition offsets that have not been consumed in ",(0,r.jsx)(n.code,{children:"kafka_offsets"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Example 1: Change the value of ",(0,r.jsx)(n.code,{children:"desired_concurrent_number"})," to 1. This parameter specifies the parallelism of jobs used to consume Kafka data."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER ROUTINE LOAD FOR db1.label1\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number" = "1"\n\n);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 2: Change the value of ",(0,r.jsx)(n.code,{children:"desired_concurrent_number"})," to 10 and modify the partition offset and group ID."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER ROUTINE LOAD FOR db1.label1\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number" = "10"\n\n)\n\nFROM kafka\n\n(\n\n    "kafka_partitions" = "0, 1, 2",\n\n    "kafka_offsets" = "100, 200, 100",\n\n    "property.group.id" = "new_group"\n\n);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 2: Change the filter condition to ",(0,r.jsx)(n.code,{children:"a > 0"})," and set the destination partition to ",(0,r.jsx)(n.code,{children:"p1"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER ROUTINE LOAD FOR db1.label1\n\nWHERE a > 0\n\nPARTITION (p1)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>o});var r=s(67294);const t=r.createContext({});function o(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:o(e),r.createElement(t.Provider,{value:i},n)}}}]);