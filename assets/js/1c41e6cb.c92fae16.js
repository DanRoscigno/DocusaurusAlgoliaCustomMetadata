"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9708],{61810:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(85893),i=s(11151);const a={displayed_sidebar:"English"},c="DROP ANALYZE",o={id:"sql-reference/sql-statements/data-definition/DROP_ANALYZE",title:"DROP ANALYZE",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/DROP_ANALYZE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_ANALYZE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/DROP_ANALYZE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/DROP_ANALYZE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_VIEW"},next:{title:"DROP CATALOG",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/DROP_CATALOG"}},r={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-analyze",children:"DROP ANALYZE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Deletes a custom collection task."}),"\n",(0,n.jsxs)(t.p,{children:["By default, StarRocks automatically collects full statistics of a table. It checks for any data updates every 5 minutes. If data change is detected, data collection will be automatically triggered. If you do not want to use automatic full collection, you can set the FE configuration item ",(0,n.jsx)(t.code,{children:"enable_collect_full_statistic"})," to ",(0,n.jsx)(t.code,{children:"false"})," and customize a collection task."]}),"\n",(0,n.jsx)(t.p,{children:"This statement is supported from v2.4."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"DROP ANALYZE <ID>\n"})}),"\n",(0,n.jsx)(t.p,{children:"The task ID can be obtained by using the SHOW ANALYZE JOB statement."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"DROP ANALYZE 266030;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",children:"CREATE ANALYZE"}),": customize an automatic collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB",children:"SHOW ANALYZE JOB"}),": view the status of an automatic collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"}),": cancel a custom collection task that is running."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information about collecting statistics for CBO, see ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>a});var n=s(67294);const i=n.createContext({});function a(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:a(e),n.createElement(i.Provider,{value:o},t)}}}]);