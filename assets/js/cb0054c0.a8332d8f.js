"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74156],{66141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(85893),s=n(11151);const i={},l="SHOW DATA",o={id:"sql-reference/sql-statements/data-manipulation/SHOW DATA",title:"SHOW DATA",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW DATA.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW DATA",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW DATA",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW DATA.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW CREATE VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW"},next:{title:"SHOW DATABASES",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW DATABASES"}},r={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"show-data",children:"SHOW DATA"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to display the amount of data, the number of copies, and the number of statistical rows."}),"\n",(0,a.jsx)(t.p,{children:"Syntax:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW DATA [FROM <db_name>[.<table_name>]]\n"})}),"\n",(0,a.jsx)(t.p,{children:"Note:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"If the FROM clause is not specified, the amount of data and copies subdivided into each table in the current db will be displayed. Where the data volume is the total data volume of all replicas. The number of copies is the number of copies of all partitions of the table and all materialized views."}),"\n",(0,a.jsx)(t.li,{children:"If the FROM clause is specified, the amount of data, the number of copies and the number of statistical rows subdivided into each materialized view under the table are displayed. Where the data volume is the total data volume of all replicas. The number of copies is the number of copies of all partitions corresponding to the materialized view. The number of statistical rows is the number of statistical rows of all partitions corresponding to the materialized view."}),"\n",(0,a.jsx)(t.li,{children:"When counting the number of rows, the copy with the largest number of rows among multiple copies shall prevail."}),"\n",(0,a.jsx)(t.li,{children:"The Total row in the result set represents the summary row. The Quota row represents the quota set by the current database. The Left line represents the remaining quota."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Displays the data volume, copy quantity, summary data volume and summary copy quantity of each table in the default db."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW DATA;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",metastring:"text",children:"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Displays the amount of breakdown data, the number of copies, and the number of statistical rows in the specified db table"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",metastring:"text",children:"SHOW DATA FROM example_db.test;\n\n+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var a=n(67294);const s=a.createContext({});function i(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||l:i(e),a.createElement(s.Provider,{value:o},t)}}}]);