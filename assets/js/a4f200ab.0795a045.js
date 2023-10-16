"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1878],{25227:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(85893),a=n(11151);const r={displayed_sidebar:"English"},i="DROP TASK",c={id:"sql-reference/sql-statements/data-manipulation/DROP_TASK",title:"DROP TASK",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/DROP_TASK",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DELETE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/DELETE"},next:{title:"EXPORT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/EXPORT"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"drop-task",children:"DROP TASK"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["Drops an asynchronous ETL task submitted using ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",children:"SUBMIT TASK"}),". This feature has been supported since StarRocks v2.5.7."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(s.p,{children:"Dropping a task with DROP TASK simultaneously cancels the corresponding TaskRun."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"DROP TASK '<task_name>'\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Parameter"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_name"}),(0,t.jsx)(s.td,{children:"The name of the task to drop."})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(s.p,{children:["You can check the information of asynchronous tasks by querying the metadata tables ",(0,t.jsx)(s.code,{children:"tasks"})," and ",(0,t.jsx)(s.code,{children:"task_runs"})," in Information Schema."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.tasks;\nSELECT * FROM information_schema.tasks WHERE task_name = '<task_name>';\nSELECT * FROM information_schema.task_runs;\nSELECT * FROM information_schema.task_runs WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:"MySQL > SUBMIT /*+set_var(query_timeout=100000)*/ TASK ctas AS\n    -> CREATE TABLE insert_wiki_edit_new\n    -> AS SELECT * FROM source_wiki_edit;\n+----------+-----------+\n| TaskName | Status    |\n+----------+-----------+\n| ctas     | SUBMITTED |\n+----------+-----------+\n1 row in set (1.19 sec)\n\nMySQL > DROP TASK 'ctas';\nQuery OK, 0 rows affected (0.35 sec)\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>r});var t=n(67294);const a=t.createContext({});function r(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:c},s)}}}]);