"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40958],{86248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var s=t(85893),i=t(11151);const c={displayed_sidebar:"English"},r="multi_distinct_count",l={id:"sql-reference/sql-functions/aggregate-functions/multi_distinct_count",title:"multi_distinct_count",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/multi_distinct_count.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/multi_distinct_count",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_count.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"min_by",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/min_by"},next:{title:"multi_distinct_sum",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"multi_distinct_count",children:"multi_distinct_count"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the total number of rows of the ",(0,s.jsx)(n.code,{children:"expr"}),", equivalent to count(distinct expr)."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"multi_distinct_count(expr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": the column or expression based on which ",(0,s.jsx)(n.code,{children:"multi_distinct_count()"})," is performed. If ",(0,s.jsx)(n.code,{children:"expr"})," is a column name, the column can be of any data type."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a numeric value. If no rows can be found, 0 is returned. This function ignores NULL values."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Suppose there is a table named ",(0,s.jsx)(n.code,{children:"test"}),". Query the category and supplier of each order by ",(0,s.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select * from test order by id;\n+------+----------+----------+------------+\n| id   | country  | category | supplier   |\n+------+----------+----------+------------+\n| 1001 | US       | A        | supplier_1 |\n| 1002 | Thailand | A        | supplier_2 |\n| 1003 | Turkey   | B        | supplier_3 |\n| 1004 | US       | A        | supplier_2 |\n| 1005 | China    | C        | supplier_4 |\n| 1006 | Japan    | D        | supplier_3 |\n| 1007 | Japan    | NULL     | supplier_5 |\n+------+----------+----------+------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Count the number of distinct values in the ",(0,s.jsx)(n.code,{children:"category"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select multi_distinct_count(category) from test;\n+--------------------------------+\n| multi_distinct_count(category) |\n+--------------------------------+\n|                              4 |\n+--------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Count the number of distinct values in the ",(0,s.jsx)(n.code,{children:"supplier"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select multi_distinct_count(supplier) from test;\n+--------------------------------+\n| multi_distinct_count(supplier) |\n+--------------------------------+\n|                              5 |\n+--------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:c(e),s.createElement(i.Provider,{value:l},n)}}}]);