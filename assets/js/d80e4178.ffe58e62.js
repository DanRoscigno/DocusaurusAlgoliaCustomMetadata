"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12225],{59644:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=s(85893),t=s(11151);const c={},i="from_base64",o={id:"sql-reference/sql-functions/crytographic-functions/from_base64",title:"from_base64",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/crytographic-functions/from_base64.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/from_base64",permalink:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/from_base64",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/from_base64.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"aes_encrypt",permalink:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/aes_encrypt"},next:{title:"md5",permalink:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/md5"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"from_base64",children:"from_base64"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Decodes a Base64-encoded string. This function is an inverse of ",(0,r.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/to_base64",children:"to_base64"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"from_base64(str);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": the string to decode. It must be of the VARCHAR type."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of the VARCHAR type. If the input is NULL or an invalid Base64 string, NULL is returned. If the input is empty, an error is returned."}),"\n",(0,r.jsx)(n.p,{children:"This function accepts only one string. More than one input string causes an error."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select from_base64(\"starrocks\");\n+--------------------------+\n| from_base64('starrocks') |\n+--------------------------+\n| \xb2\u05ab\xae$                       |\n+--------------------------+\n1 row in set (0.00 sec)\n\nmysql> select from_base64('c3RhcnJvY2tz');\n+-----------------------------+\n| from_base64('c3RhcnJvY2tz') |\n+-----------------------------+\n| starrocks                   |\n+-----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(t.Provider,{value:o},n)}}}]);