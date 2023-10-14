"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80960],{63893:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(85893),t=s(11151);const r={},l="case",c={id:"sql-reference/sql-functions/condition-functions/case_when",title:"case",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/condition-functions/case_when.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/case_when",permalink:"/doc/en/3.0/sql-reference/sql-functions/condition-functions/case_when",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/condition-functions/case_when.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CAST",permalink:"/doc/en/3.0/sql-reference/sql-functions/cast"},next:{title:"coalesce",permalink:"/doc/en/3.0/sql-reference/sql-functions/condition-functions/coalesce"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Use simple CASE",id:"use-simple-case",level:3},{value:"Use searched CASE with no ELSE specified",id:"use-searched-case-with-no-else-specified",level:3},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"case",children:"case"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"CASE is a conditional expression. It returns the result in the THEN clause if a condition in the WHEN clause evaluates to true. If none of the conditions evaluate to true, it returns the result in the optional ELSE clause. If ELSE is not present, NULL is returned."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:"The CASE expression comes in two forms:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Simple CASE"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CASE expression\n    WHEN expression1 THEN result1\n    [WHEN expression2 THEN result2]\n    ...\n    [WHEN expressionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For this syntax, ",(0,i.jsx)(n.code,{children:"expression"})," is compared to each expression in the WHEN clause. If an equal expression is found, the result in the THEN clause is returned. If no equal expression is found, the result in the ELSE clause is returned if ELSE is present."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Searched CASE"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CASE WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,i.jsx)(n.p,{children:"For this syntax, each condition in the WHEN clause is evaluated until one is true and the corresponding result in the THEN clause is returned. If no condition evaluates to true, the result in the ELSE clause is returned, if ELSE is present."}),"\n",(0,i.jsx)(n.p,{children:"The first CASE equals the second one as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CASE WHEN expression = expression1 THEN result1\n    [WHEN expression = expression2 THEN result2]\n    ...\n    [WHEN expression = expressionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expressionN"}),": the expression to compare. Multiple expressions must be compatible in data types. This expression must evaluate to any of the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DATETIME, DATE, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128, VARCHAR, BITMAP, PERCENTILE, HLL, TIME, and JSON."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"conditionN"}),": the condition that can evaluate to a BOOLEAN value."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"resultN"})," must be compatible in data types."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"The return value is of the common type of all types in the THEN clause."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Suppose table ",(0,i.jsx)(n.code,{children:"test_case"})," has the following data:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_case(\n    name          STRING,\n    gender         INT,\n    ) DISTRIBUTED BY HASH(name);\n\nINSERT INTO test_case VALUES\n    ("Andy",1),\n    ("Jules",0),\n    ("Angel",-1),\n    ("Sam",null);\n\nSELECT * FROM test_case;\n+-------+--------+\n| name  | gender |\n+-------+--------+\n| Angel |     -1 |\n| Andy  |      1 |\n| Sam   |   NULL |\n| Jules |      0 |\n+-------+--------+-------+\n'})}),"\n",(0,i.jsx)(n.h3,{id:"use-simple-case",children:"Use simple CASE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ELSE is specified and the result in ELSE is returned if no equal expression is found."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"mysql> select gender, case gender \n                    when 1 then 'male'\n                    when 0 then 'female'\n                    else 'error'\n               end gender_str\nfrom test_case;\n+--------+------------+\n| gender | gender_str |\n+--------+------------+\n|   NULL | error      |\n|      0 | female     |\n|      1 | male       |\n|     -1 | error      |\n+--------+------------+\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ELSE is not specified and NULL is returned if no condition evaluates to true."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"select gender, case gender \n                    when 1 then 'male'\n                    when 0 then 'female'\n               end gender_str\nfrom test_case;\n+--------+------------+\n| gender | gender_str |\n+--------+------------+\n|      1 | male       |\n|     -1 | NULL       |\n|   NULL | NULL       |\n|      0 | female     |\n+--------+------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"use-searched-case-with-no-else-specified",children:"Use searched CASE with no ELSE specified"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"mysql> select gender, case when gender = 1 then 'male'\n                           when gender = 0 then 'female'\n                      end gender_str\nfrom test_case;\n+--------+------------+\n| gender | gender_str |\n+--------+------------+\n|   NULL | NULL       |\n|     -1 | NULL       |\n|      1 | male       |\n|      0 | female     |\n+--------+------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.p,{children:"case when, case, case_when, case...when"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),i.createElement(t.Provider,{value:c},n)}}}]);