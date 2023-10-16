"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53143],{54774:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(85893),a=s(11151);const r={displayed_sidebar:"English"},l="hll_raw_agg",i={id:"sql-reference/sql-functions/aggregate-functions/hll_raw_agg",title:"hll_raw_agg",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/hll_raw_agg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/hll_raw_agg.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"hll_hash",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_hash"},next:{title:"HLL_UNION",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_union"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hll_raw_agg",children:"hll_raw_agg"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This function is an aggregate function that is used to aggregate HLL fields. It returns an HLL value."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"hll_raw_agg(hll)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hll"}),": the HLL column that is generated by other columns or based on the loaded data."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the HLL type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select k1, hll_cardinality(hll_raw_agg(v1)) from tbl group by k1;\n+------+----------------------------------+\n| k1   | hll_cardinality(hll_raw_agg(`v1`)) |\n+------+----------------------------------+\n|    2 |                                4 |\n|    1 |                                3 |\n+------+----------------------------------+\n"})})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(a.Provider,{value:i},n)}}}]);