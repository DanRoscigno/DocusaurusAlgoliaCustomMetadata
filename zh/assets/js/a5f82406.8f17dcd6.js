"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41730],{27872:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=s(85893),r=s(11151);const c={displayed_sidebar:"English"},i="count_if",o={id:"sql-reference/sql-functions/aggregate-functions/count_if",title:"count_if",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/count_if.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/count_if",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/count_if",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/count_if.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"COUNT",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/count"},next:{title:"COVAR_POP",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/covar_pop"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",br:"br",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"count_if",children:"count_if"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the total number of rows that meet the condition specified."}),"\n",(0,t.jsxs)(n.p,{children:["This function does not support ",(0,t.jsx)(n.code,{children:"DISTINCT"}),", e.g., ",(0,t.jsx)(n.code,{children:"count_if(DISTINCT x)"})," is not valid."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is internally transformed to ",(0,t.jsx)(n.code,{children:"COUNT"})," + ",(0,t.jsx)(n.code,{children:"IF"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["Before: ",(0,t.jsx)(n.code,{children:"COUNT_IF(x)"}),(0,t.jsx)(n.br,{}),"\n","After: ",(0,t.jsx)(n.code,{children:"COUNT(IF(x, 1, NULL))"})]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"COUNT_IF(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the column or expression based on which ",(0,t.jsx)(n.code,{children:"count_if()"})," is performed. If ",(0,t.jsx)(n.code,{children:"expr"})," is a column name, the column can be of any data type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a numeric value. If no rows can be found, 0 is returned. This function ignores NULL values."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Suppose there is a table named ",(0,t.jsx)(n.code,{children:"test_count_if"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select * from test_count_if;\n+------+------+---------------------+------+\n| v1   | v2   | v3                  | v4   |\n+------+------+---------------------+------+\n| a    | NULL | 2022-04-18 02:05:00 |    1 |\n| a    | a    | 2022-04-18 01:01:00 |    1 |\n| a    | b    | 2022-04-18 02:01:00 | NULL |\n| a    | b    | 2022-04-18 02:15:00 |    3 |\n| a    | b    | 2022-04-18 03:15:00 |    7 |\n| c    | NULL | 2022-04-18 03:25:00 |    2 |\n| c    | NULL | 2022-04-18 03:45:00 | NULL |\n| c    | a    | 2022-04-18 03:27:00 |    3 |\n+------+------+---------------------+------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Count the number of rows in table ",(0,t.jsx)(n.code,{children:"test_count_if"})," where ",(0,t.jsx)(n.code,{children:"v2"})," is null."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select count_if(v2 is null) from test_count_if;\n+----------------------+\n| count_if(v2 IS NULL) |\n+----------------------+\n|                    3 |\n+----------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Count the number of rows where ",(0,t.jsx)(n.code,{children:"v1 >= v2 or v4 = 1"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select count_if(v1 >= v2 or v4 = 1)from test_count_if;\n+----------------------------------+\n| count_if((v1 >= v2) OR (v4 = 1)) |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},n)}}}]);