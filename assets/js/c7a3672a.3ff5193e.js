"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66924],{55983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(85893),l=t(11151);const r={},a="hll_empty",i={id:"sql-reference/sql-functions/aggregate-functions/hll_empty",title:"hll_empty",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/hll_empty.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_empty",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/hll_empty",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/hll_empty.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"GROUPING_ID",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/grouping_id"},next:{title:"hll_hash",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/hll_hash"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hll_empty",children:"hll_empty"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Generates an empty HLL column to supplement the default values when inserting or loading data."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"HLL_EMPTY()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns an empty HLL."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Supplement the default values when inserting data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"insert into hllDemo(k1,v1) values(10,hll_empty());\n"})}),"\n",(0,s.jsx)(n.p,{children:"Supplement the default values when loading data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:'curl --location-trusted -u <username>:<password> \\\n    -H "columns: temp1, temp2, col1=hll_hash(temp1), col2=hll_empty()" \\\n    -T example7.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table7/_stream_load\n'})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var s=t(67294);const l=s.createContext({});function r(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(l.Provider,{value:i},n)}}}]);