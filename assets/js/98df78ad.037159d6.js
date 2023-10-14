"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98e3],{73599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(85893),s=a(11151);const r={},i="BITMAP",o={id:"sql-reference/sql-statements/data-types/BITMAP",title:"BITMAP",description:"BITMAP is often used to accelerate count distinct. It is similar but more accurate in count distinct than HyperLogLog (HLL). BITMAP consumes more memory and disk resources. It supports only aggregation of INT data. If you want to apply bitmap to string data, you must map the data using the low-cardinality dictionary.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/BITMAP.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/BITMAP",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/BITMAP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/BITMAP.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"BINARY/VARBINARY",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/BINARY"},next:{title:"BOOLEAN",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/BOOLEAN"}},c={},d=[{value:"Create a table",id:"create-a-table",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bitmap",children:"BITMAP"}),"\n",(0,n.jsx)(t.p,{children:"BITMAP is often used to accelerate count distinct. It is similar but more accurate in count distinct than HyperLogLog (HLL). BITMAP consumes more memory and disk resources. It supports only aggregation of INT data. If you want to apply bitmap to string data, you must map the data using the low-cardinality dictionary."}),"\n",(0,n.jsx)(t.p,{children:'This topic provides a simple example on how to create a BITMAP column and use bitmap functions to aggregate data for that column. For detailed function definitions or more Bitmap functions, see "Bitmap functions".'}),"\n",(0,n.jsx)(t.h2,{id:"create-a-table",children:"Create a table"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create an Aggregate table, in which the data type of the ",(0,n.jsx)(t.code,{children:"user_id"})," column is BITMAP and the bitmap_union() function is used to aggregate data."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE `pv_bitmap` (\n`dt` int(11) NULL COMMENT "",\n`page` varchar(10) NULL COMMENT "",\n`user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`dt`, `page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`dt`);\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a Primary Key table, in which the data type of the ",(0,n.jsx)(t.code,{children:"userid"})," column is BITMAP."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE primary_bitmap (\n`tagname` varchar(65533) NOT NULL COMMENT "Tag name",\n`tagvalue` varchar(65533) NOT NULL COMMENT "Tag value",\n`userid` bitmap NOT NULL COMMENT "User ID")\nENGINE=OLAP\nPRIMARY KEY(`tagname`, `tagvalue`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`tagname`);\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Before you insert data into BITMAP columns, you must first use the to_bitmap() function to convert data."}),"\n",(0,n.jsxs)(t.p,{children:["For details about how to use BITMAP, for example, load BITMAP data into a table, see ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-functions/aggregate-functions/bitmap",children:"bitmap"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>r});var n=a(67294);const s=n.createContext({});function r(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||i:r(e),n.createElement(s.Provider,{value:o},t)}}}]);