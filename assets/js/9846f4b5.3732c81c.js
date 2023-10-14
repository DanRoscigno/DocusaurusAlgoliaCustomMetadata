"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18495],{91016:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=a(85893),s=a(11151);const t={},l="array_agg",c={id:"sql-reference/sql-functions/array-functions/array_agg",title:"array_agg",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_agg.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_agg",permalink:"/doc/en/2.5/sql-reference/sql-functions/array-functions/array_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_agg.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"window_funnel",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/window_funnel"},next:{title:"array_append",permalink:"/doc/en/2.5/sql-reference/sql-functions/array-functions/array_append"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array_agg",children:"array_agg"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Aggregates the values including ",(0,r.jsx)(n.code,{children:"NULL"})," in a column into an array."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"ARRAY_AGG(col)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"col"}),": the column whose values you want to aggregate. Supported data types are BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, VARCHAR, CHAR, DATETIME, and DATE."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of the ARRAY data type."}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The order of the elements in an array is random, which means it may be different from the order of the values in the column."}),"\n",(0,r.jsx)(n.li,{children:"The data type of the elements in the returned array is the same as the data type of the values in the column."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Take the following data table as an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> select * from test;\n\n+------+------+\n\n| c1   | c2   |\n\n+------+------+\n\n|    1 | a    |\n\n|    1 | b    |\n\n|    2 | c    |\n\n|    2 | NULL |\n\n|    3 | NULL |\n\n+------+------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Group the values in column c1 and aggregate the values in column c2 into an array based on the grouping of column c1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'mysql> select c1, array_agg(c2) from test group by c1;\n\n+------+-----------------+\n\n| c1   | array_agg(`c2`) |\n\n+------+-----------------+\n\n|    1 | ["a","b"]       |\n\n|    2 | [null,"c"]      |\n\n|    3 | [null]          |\n\n+------+-----------------+\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 2: Use the WHERE clause when the values in column c2 are aggregated into an array. If no data in column c2 meets the condition that is specified in the WHERE clause, a ",(0,r.jsx)(n.code,{children:"NULL"})," value is returned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> select array_agg(c2) from test where c1>4;\n\n+-----------------+\n\n| array_agg(`c2`) |\n\n+-----------------+\n\n| NULL            |\n\n+-----------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"ARRAY_AGG, ARRAY"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>t});var r=a(67294);const s=r.createContext({});function t(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||l:t(e),r.createElement(s.Provider,{value:c},n)}}}]);