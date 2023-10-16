"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92651],{83802:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=s(85893),l=s(11151);const a={displayed_sidebar:"English"},r="hll_hash",i={id:"sql-reference/sql-functions/aggregate-functions/hll_hash",title:"hll_hash",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/hll_hash.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_hash",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/hll_hash.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"hll_empty",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_empty"},next:{title:"hll_raw_agg",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_raw_agg"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hll_hash",children:"hll_hash"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Converts a value to an hll type. Typically used in imports to map a value in the source data to an HLL column type in the StarRocks table."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"HLL_HASH(column_name)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"column_name"}),": The name of the generated HLL column."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the HLL type."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select hll_cardinality(hll_hash(\"a\"));\n+--------------------------------+\n| hll_cardinality(hll_hash('a')) |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var t=s(67294);const l=t.createContext({});function a(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(l.Provider,{value:i},n)}}}]);