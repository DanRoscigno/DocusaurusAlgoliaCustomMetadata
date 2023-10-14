"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3181],{62234:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var n=s(85893),l=s(11151);const i={},c="CREATE ANALYZE",a={id:"sql-reference/sql-statements/data-definition/CREATE_ANALYZE",title:"CREATE ANALYZE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_ANALYZE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_ANALYZE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CANCEL RESTORE",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CANCEL_RESTORE"},next:{title:"CREATE DATABASE",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_DATABASE"}},o={},r=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter description",id:"parameter-description",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-analyze",children:"CREATE ANALYZE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Customizes an automatic collection task for collecting CBO statistics."}),"\n",(0,n.jsxs)(t.p,{children:["By default, StarRocks automatically collects full statistics of a table. It checks for any data updates every 5 minutes. If data change is detected, data collection will be automatically triggered. If you do not want to use automatic full collection, you can set the FE configuration item ",(0,n.jsx)(t.code,{children:"enable_collect_full_statistic"})," to ",(0,n.jsx)(t.code,{children:"false"})," and customize a collection task."]}),"\n",(0,n.jsxs)(t.p,{children:["Before creating a custom automatic collection task, you must disable automatic full collection (",(0,n.jsx)(t.code,{children:"enable_collect_full_statistic = false"}),"). Otherwise, custom tasks cannot take effect."]}),"\n",(0,n.jsx)(t.p,{children:"This statement is supported from v2.4."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"-- Automatically collect stats of all databases.\nCREATE ANALYZE [FULL|SAMPLE] ALL PROPERTIES (property [,property])\n\n-- Automatically collect stats of all tables in a database.\nCREATE ANALYZE [FULL|SAMPLE] DATABASE db_name\nPROPERTIES (property [,property])\n\n-- Automatically collect stats of specified columns in a table.\nCREATE ANALYZE [FULL|SAMPLE] TABLE tbl_name (col_name [,col_name])\nPROPERTIES (property [,property])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameter-description",children:"Parameter description"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Collection type"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"FULL: indicates full collection."}),"\n",(0,n.jsx)(t.li,{children:"SAMPLE: indicates sampled collection."}),"\n",(0,n.jsx)(t.li,{children:"If no collection type is specified, full collection is used by default."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"col_name"}),": columns from which to collect statistics. Separate multiple columns with commas (",(0,n.jsx)(t.code,{children:","}),"). If this parameter is not specified, the entire table is collected."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"PROPERTIES"}),": custom parameters. If ",(0,n.jsx)(t.code,{children:"PROPERTIES"})," is not specified, the default settings in ",(0,n.jsx)(t.code,{children:"fe.conf"})," are used. The properties that are actually used can be viewed via the ",(0,n.jsx)(t.code,{children:"Properties"})," column in the output of SHOW ANALYZE JOB."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"PROPERTIES"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Type"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Default value"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistic_auto_collect_ratio"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{children:"0.8"}),(0,n.jsx)(t.td,{children:"The threshold for determining  whether the statistics for automatic collection are healthy. If the statistics health is below this threshold, automatic collection is triggered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistics_max_full_collect_data_size"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"The size of the largest partition for automatic collection to collect data. Unit: GB.If a partition exceeds this value, full collection is discarded and sampled collection is performed instead."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistic_sample_collect_rows"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{children:"200000"}),(0,n.jsx)(t.td,{children:"The minimum number of rows to collect.If the parameter value exceeds the actual number of rows in your table, full collection is performed."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Example 1: Automatic full collection"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"-- Automatically collect full stats of all databases.\nCREATE ANALYZE ALL;\n\n-- Automatically collect full stats of a database.\nCREATE ANALYZE DATABASE db_name;\n\n-- Automatically collect full stats of all tables in a database.\nCREATE ANALYZE FULL DATABASE db_name;\n\n-- Automatically collect full stats of specified columns in a table.\nCREATE ANALYZE TABLE tbl_name(c1, c2, c3); \n"})}),"\n",(0,n.jsx)(t.p,{children:"Example 2: Automatic sampled collection"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'-- Automatically collect stats of all tables in a database using default settings.\nCREATE ANALYZE SAMPLE DATABASE db_name;\n\n-- Automatically collect stats of specified columns in a table, with statistics health and the number of rows to collect specified.\nCREATE ANALYZE SAMPLE TABLE tbl_name(c1, c2, c3) PROPERTIES(\n   "statistic_auto_collect_ratio" = "0.5",\n   "statistic_sample_collect_rows" = "1000000"\n);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB",children:"SHOW ANALYZE JOB"}),": view the status of a custom collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/DROP_ANALYZE",children:"DROP ANALYZE"}),": delete a custom collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"}),": cancel a custom collection task that is running."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information about collecting statistics for CBO, see ",(0,n.jsx)(t.a,{href:"/doc/en/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>i});var n=s(67294);const l=n.createContext({});function i(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),n.createElement(l.Provider,{value:a},t)}}}]);