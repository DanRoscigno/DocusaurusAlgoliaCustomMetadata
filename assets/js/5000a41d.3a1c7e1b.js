"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89131],{38771:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),s=t(11151);const i={},r="base64_to_bitmap",o={id:"sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",title:"base64_to_bitmap",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",permalink:"/doc/en/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitxor",permalink:"/doc/en/sql-reference/sql-functions/bit-functions/bitxor"},next:{title:"bitmap_agg",permalink:"/doc/en/sql-reference/sql-functions/bitmap-functions/bitmap_agg"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ol:"ol",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"base64_to_bitmap",children:"base64_to_bitmap"}),"\n",(0,n.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(a.p,{children:"Before you import bitmap data into StarRocks, you need to serialize the data and encode the data as a Base64 string. When you import the Base64 string into StarRocks, you need to convert the string into bitmap data.\nThis function is used to convert Base64 strings into bitmap data."}),"\n",(0,n.jsx)(a.p,{children:"This function is supported from v2.3."}),"\n",(0,n.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-Haskell",children:"BITMAP base64_to_bitmap(VARCHAR bitmap)\n"})}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"bitmap"}),": The supported data type is VARCHAR. Before you load Bitmap data into StarRocks, you can use Java or C++ to ",(0,n.jsx)(a.a,{href:"https://github.com/StarRocks/starrocks/blob/main/fe/spark-dpp/src/test/java/com/starrocks/load/loadv2/dpp/BitmapValueTest.java",children:"create a BitmapValue object"}),", add an element, serialize the data, and encode the data as a Base64 string. Then, pass the Base64 string as an input parameter into this function."]}),"\n",(0,n.jsx)(a.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsx)(a.p,{children:"Returns a value of the BITMAP type."}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(a.p,{children:["Create a database named ",(0,n.jsx)(a.code,{children:"bitmapdb"})," and a table named ",(0,n.jsx)(a.code,{children:"bitmap"}),". Use Stream Load to import JSON data into ",(0,n.jsx)(a.code,{children:"bitmap_table"}),". During this process, use base64_to_bitmap to convert the Base64 string in the JSON file into bitmap data."]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Create a database and a table in StarRocks. In this example, a Primary Key table is created."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:'CREATE database bitmapdb;\nUSE bitmapdb;\nCREATE TABLE `bitmap_table` (\n`tagname` varchar(65533) NOT NULL COMMENT "Tag name",\n`tagvalue` varchar(65533) NOT NULL COMMENT "Tag value",\n`userid` bitmap NOT NULL COMMENT "User ID"\n) ENGINE=OLAP\nPRIMARY KEY(`tagname`, `tagvalue`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`tagname`)\nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT"\n);\n'})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"})," to import JSON data into ",(0,n.jsx)(a.code,{children:"bitmap_table"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Suppose there is a JSON file named ",(0,n.jsx)(a.strong,{children:"simpledata"}),". This file has the following content and ",(0,n.jsx)(a.code,{children:"userid"})," is a Base64-encoded string."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JSON",children:'{\n    "tagname": "Product", "tagvalue": "Insurance", "userid":"AjowAAABAAAAAAACABAAAAABAAIAAwA="\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Use base64_to_bitmap to convert  ",(0,n.jsx)(a.code,{children:"userid"})," into a bitmap value."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-Plain",children:'curl --location-trusted -u <username>:<password>\\\n    -H "columns: c1,c2,c3,tagname=c1,tagvalue=c2,userid=base64_to_bitmap(c3)"\\\n    -H "label:bitmap123"\\\n    -H "format: json"\\\n    -H "jsonpaths: [\\"$.tagname\\",\\"$.tagvalue\\",\\"$.userid\\"]"\\\n    -T simpleData http://host:port/api/bitmapdb/bitmap_table/_stream_load\n'})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Query data from ",(0,n.jsx)(a.code,{children:"bitmap_table"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-Plaintext",children:"mysql> select tagname,tagvalue,bitmap_to_string(userid) from bitmap_table;\n+--------------+----------+----------------------------+\n| tagname      | tagvalue | bitmap_to_string(`userid`) |\n+--------------+----------+----------------------------+\n| Product      | Insurance      | 1,2,3                |\n+--------------+----------+----------------------------+\n1 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>o,ah:()=>i});var n=t(67294);const s=n.createContext({});function i(e){const a=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const r={};function o({components:e,children:a,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:i(e),n.createElement(s.Provider,{value:o},a)}}}]);