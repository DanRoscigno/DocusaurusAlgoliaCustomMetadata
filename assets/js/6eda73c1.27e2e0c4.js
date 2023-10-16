"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27335],{65910:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(85893),i=s(11151);const r={displayed_sidebar:"English"},d="SHOW ANALYZE STATUS",c={id:"sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",title:"SHOW ANALYZE STATUS",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW ANALYZE JOB",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB"},next:{title:"SHOW META",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_META"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"References",id:"references",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"show-analyze-status",children:"SHOW ANALYZE STATUS"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Views the status of collection tasks."}),"\n",(0,n.jsx)(t.p,{children:"This statement cannot be used to view the status of custom collection tasks. To view the status of custom collection tasks, use SHOW ANALYZE JOB."}),"\n",(0,n.jsx)(t.p,{children:"This statement is supported from v2.4."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW ANALYZE STATUS [WHERE]\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"LILE or WHERE"})," to filter the information to return."]}),"\n",(0,n.jsx)(t.p,{children:"This statement returns the following columns."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"List name"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Id"}),(0,n.jsx)(t.td,{children:"The ID of the collection task."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Database"}),(0,n.jsx)(t.td,{children:"The database name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsx)(t.td,{children:"The table name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Columns"}),(0,n.jsx)(t.td,{children:"The column names."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:"The type of statistics, including FULL, SAMPLE, and HISTOGRAM."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Schedule"}),(0,n.jsxs)(t.td,{children:["The type of scheduling. ",(0,n.jsx)(t.code,{children:"ONCE"})," means manual and ",(0,n.jsx)(t.code,{children:"SCHEDULE"})," means automatic."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Status"}),(0,n.jsx)(t.td,{children:"The status of the task."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"StartTime"}),(0,n.jsx)(t.td,{children:"The time when the task starts executing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EndTime"}),(0,n.jsx)(t.td,{children:"The time when the task execution ends."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Properties"}),(0,n.jsx)(t.td,{children:"Custom parameters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Reason"}),(0,n.jsx)(t.td,{children:"The reason why the task failed. NULL is returned if the execution was successful."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ANALYZE_TABLE",children:"ANALYZE TABLE"}),": create a manual collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"}),": cancel a custom collection task that is running."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information about collecting statistics for CBO, see ",(0,n.jsx)(t.a,{href:"/doc/docs/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:r(e),n.createElement(i.Provider,{value:c},t)}}}]);