"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64190],{52021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=t(85893),l=t(11151);const a={},r="hll_hash",c={id:"sql-reference/sql-functions/aggregate-functions/hll_hash",title:"hll_hash",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/hll_hash.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_hash",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/hll_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/hll_hash.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"hll_empty",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/hll_empty"},next:{title:"hll_raw_agg",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/hll_raw_agg"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hll_hash",children:"hll_hash"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Converts a value to an hll type. Typically used in imports to map a value in the source data to an HLL column type in the StarRocks table."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"HLL_HASH(column_name)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"column_name"}),": The name of the generated HLL column."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the HLL type."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select hll_cardinality(hll_hash(\"a\"));\n+--------------------------------+\n| hll_cardinality(hll_hash('a')) |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var s=t(67294);const l=s.createContext({});function a(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(l.Provider,{value:c},n)}}}]);