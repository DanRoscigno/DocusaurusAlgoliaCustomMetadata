"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87250],{18413:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(85893),i=s(11151);const r={displayed_sidebar:"English"},l="min_by",c={id:"sql-reference/sql-functions/aggregate-functions/min_by",title:"min_by",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/min_by.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/min_by",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/min_by",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/min_by.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"MIN",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/min"},next:{title:"multi_distinct_count",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_count"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"min_by",children:"min_by"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the value of ",(0,t.jsx)(n.code,{children:"x"})," associated with the minimum value of ",(0,t.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"SELECT min_by(subject, exam_result) FROM exam;"})," is to return the subject that has the lowest exam score."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v2.5."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"min_by(x,y)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x"}),": an expression of any type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"}),": an expression of a type that can be ordered."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["Returns a value that has the same type as ",(0,t.jsx)(n.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"})," must be a sortable type. If you use an unsortable type of ",(0,t.jsx)(n.code,{children:"y"}),", such as ",(0,t.jsx)(n.code,{children:"bitmap"})," or ",(0,t.jsx)(n.code,{children:"hll"}),", an error is returned."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"y"})," contains a null value, the row that corresponds to the null value is ignored."]}),"\n",(0,t.jsxs)(n.li,{children:["If more than one value of ",(0,t.jsx)(n.code,{children:"x"})," has the same minimum value of ",(0,t.jsx)(n.code,{children:"y"}),", this function returns the first value of ",(0,t.jsx)(n.code,{children:"x"})," encountered."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a table ",(0,t.jsx)(n.code,{children:"exam"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE exam (\n    subject_id INT,\n    subject STRING,\n    exam_result INT\n) DISTRIBUTED BY HASH(`subject_id`);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Insert values into this table and query data from this table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"insert into exam values\n(1,'math',90),\n(2,'english',70),\n(3,'physics',95),\n(4,'chemistry',85),\n(5,'music',95),\n(6,'biology',null);\n\nselect * from exam order by subject_id;\n+------------+-----------+-------------+\n| subject_id | subject   | exam_result |\n+------------+-----------+-------------+\n|          1 | math      |          90 |\n|          2 | english   |          70 |\n|          3 | physics   |          95 |\n|          4 | chemistry |          85 |\n|          5 | music     |          95 |\n|          6 | biology   |        null |\n+------------+-----------+-------------+\n6 rows in set (0.03 sec)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Obtain the subject that has the lowest score.\nThe subject ",(0,t.jsx)(n.code,{children:"english"})," that has the lowest score ",(0,t.jsx)(n.code,{children:"70"})," is returned."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"SELECT min_by(subject, exam_result) FROM exam;\n+------------------------------+\n| min_by(subject, exam_result) |\n+------------------------------+\n| english                      |\n+------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:c},n)}}}]);