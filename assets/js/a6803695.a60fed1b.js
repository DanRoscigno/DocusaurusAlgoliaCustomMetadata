"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67246],{36193:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=s(85893),t=s(11151);const a={},o="json_array",c={id:"sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",title:"json_array",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-constructor-functions",slug:"/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",permalink:"/doc/en/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"murmur_hash3_32",permalink:"/doc/en/3.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32"},next:{title:"json_object",permalink:"/doc/en/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"json_array",children:"json_array"}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Converts each element of an SQL array to a JSON value and returns a JSON array that consists of the JSON values."}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"json_array(value, ...)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"value"}),": an element in the SQL array. Only ",(0,r.jsx)(e.code,{children:"NULL"})," values and the following data types are supported: STRING, VARCHAR, CHAR, JSON, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DOUBLE, FLOAT, and BOOLEAN."]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(e.p,{children:"Returns a JSON array."}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.p,{children:"Example 1: Construct a JSON array that consists of values of different data types."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plaintext",children:"mysql> SELECT json_array(1, true, 'starrocks', 1.1);\n\n       -> [1, true, \"starrocks\", 1.1]\n"})}),"\n",(0,r.jsx)(e.p,{children:"Example 2: Construct an empty JSON array."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plaintext",children:"mysql> SELECT json_array();\n\n       -> []\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>a});var r=s(67294);const t=r.createContext({});function a(n){const e=r.useContext(t);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||o:a(n),r.createElement(t.Provider,{value:c},e)}}}]);