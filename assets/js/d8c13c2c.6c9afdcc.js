"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12108],{72111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},o="retention",a={id:"sql-reference/sql-functions/aggregate-functions/retention",title:"retention",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/retention.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/retention",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/retention",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/retention.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"percentile_disc",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/percentile_disc"},next:{title:"STD",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/std"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"retention",children:"retention"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calculates the user retention rate within a specified period of time. This function accepts 1 to 31 conditions and evaluates whether each condition is true. If the condition evaluates to true, 1 is returned. Otherwise, 0 is returned. It eventually returns an array of 0 and 1. You can calculate the user retention rate based on this data."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ARRAY retention(ARRAY input)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"input"}),": an array of conditions. A maximum of 31 conditions can be passed in. Separate multiple conditions with commas."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns an array of 0 and 1. The number of 0 and 1 is the same as the number of input conditions."}),"\n",(0,s.jsx)(n.p,{children:"The evaluation starts from the first condition."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the condition evaluates to true, 1 is returned. Otherwise, 0 is returned."}),"\n",(0,s.jsx)(n.li,{children:"If the first condition is not true, the current position and its following positions are all set to 0."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a table named ",(0,s.jsx)(n.code,{children:"test"})," and insert data."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE test(\n    id TINYINT,\n    action STRING,\n    time DATETIME\n)\nENGINE=olap\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 8;\n\nINSERT INTO test VALUES \n(1,'pv','2022-01-01 08:00:05'),\n(2,'pv','2022-01-01 10:20:08'),\n(1,'buy','2022-01-02 15:30:10'),\n(2,'pv','2022-01-02 17:30:05'),\n(3,'buy','2022-01-01 05:30:09'),\n(3,'buy','22022-01-02 08:10:15'),\n(4,'pv','2022-01-02 21:09:15'),\n(5,'pv','2022-01-01 22:10:53'),\n(5,'pv','2022-01-02 19:10:52'),\n(5,'buy','2022-01-02 20:00:50');\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Query data from ",(0,s.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select * from test order by id;\n+------+--------+---------------------+\n| id   | action | time                |\n+------+--------+---------------------+\n|    1 | pv     | 2022-01-01 08:00:05 |\n|    1 | buy    | 2022-01-02 15:30:10 |\n|    2 | pv     | 2022-01-01 10:20:08 |\n|    2 | pv     | 2022-01-02 17:30:05 |\n|    3 | buy    | 2022-01-01 05:30:09 |\n|    3 | buy    | 2022-01-02 08:10:15 |\n|    4 | pv     | 2022-01-02 21:09:15 |\n|    5 | pv     | 2022-01-01 22:10:53 |\n|    5 | pv     | 2022-01-02 19:10:52 |\n|    5 | buy    | 2022-01-02 20:00:50 |\n+------+--------+---------------------+\n10 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"retention"})," to calculate user retention rate."]}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Evaluate user behavior against the following conditions: view commodity page on 2022-01-01 (action='pv') and place an order on 2022-01-02 (action='buy')."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select id, retention([action='pv' and to_date(time)='2022-01-01',\n                              action='buy' and to_date(time)='2022-01-02']) as retention \nfrom test \ngroup by id\norder by id;\n\n+------+-----------+\n| id   | retention |\n+------+-----------+\n|    1 | [1,1]     |\n|    2 | [1,0]     |\n|    3 | [0,0]     |\n|    4 | [0,0]     |\n|    5 | [1,1]     |\n+------+-----------+\n5 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the result:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Users 1 and 5 meets two conditions and [1,1] is returned."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User 2 does not meet the second condition and [1,0] is returned."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User 3 meets the second condition but does not meet the first condition. [0,0] is returned."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User 4 meets no condition and [0,0] is returned."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Calculate the percentage of users who have viewed commodity page on 2022-01-01 (action='pv') and placed an order on 2022-01-02 (action='buy')."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select sum(r[1]),sum(r[2])/sum(r[1])\nfrom (select id, retention([action='pv' and to_date(time)='2022-01-01',\n                            action='buy' and to_date(time)='2022-01-02']) as r \nfrom test \ngroup by id \norder by id) t;\n\n+-----------+---------------------------+\n| sum(r[1]) | (sum(r[2])) / (sum(r[1])) |\n+-----------+---------------------------+\n|         3 |        0.6666666666666666 |\n+-----------+---------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The return value is the user retention rate on 2022-01-02."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"retention, retention rate, RETENTION"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},n)}}}]);