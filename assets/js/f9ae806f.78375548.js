"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34986],{77442:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(85893),a=t(11151);const r={displayed_sidebar:"English"},i="REFRESH MATERIALIZED VIEW",l={id:"sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",title:"REFRESH MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"PAUSE ROUTINE LOAD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD"},next:{title:"RESUME ROUTINE LOAD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"refresh-materialized-view",children:"REFRESH MATERIALIZED VIEW"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Manually refresh a specific asynchronous materialized view or partitions within."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,n.jsxs)(s.p,{children:["You can only manually refresh materialized views that adopt ASYNC or MANUAL refresh strategy. You can check the refresh strategy of an asynchronous materialized view using ",(0,n.jsx)(s.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",children:"SHOW MATERIALIZED VIEW"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'REFRESH MATERIALIZED VIEW [database.]mv_name\n[PARTITION START ("<partition_start_date>") END ("<partition_end_date>")]\n[FORCE]\n[WITH { SYNC | ASYNC } MODE]\n'})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mv_name"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"The name of the materialized view to refresh manually."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PARTITION START () END ()"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"Manually refresh partitions within a certain time interval."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"partition_start_date"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"The start date of the partitions to refresh manually."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"partition_end_date"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"The end date of the partitions to refresh manually."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"FORCE"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"If you specify this parameter, StarRocks forcibly refreshes the corresponding materialized view or partitions. If you do not specify this parameter, StarRocks automatically judges if the data is updated and refreshes the partition only when needed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"WITH ... MODE"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsxs)(s.td,{children:["Make a synchronous or asynchronous call of the refresh task. ",(0,n.jsx)(s.code,{children:"SYNC"})," indicates making a synchronous call of the refresh task, and StarRocks returns the task result only when the task succeeds or fails. ",(0,n.jsx)(s.code,{children:"ASYNC"})," indicates making an asynchronous call of the refresh task, and StarRocks returns success right after the task is submitted, leaving the task to be executed asynchronously in the background. You can check the refresh task status of an asynchronous materialized view by querying the ",(0,n.jsx)(s.code,{children:"tasks"})," and ",(0,n.jsx)(s.code,{children:"task_runs"})," metadata tables in StarRocks' Information Schema. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/2.5/using_starrocks/Materialized_view#check-the-execution-status-of-asynchronous-materialized-view",children:"Check the execution status of asynchronous materialized view"}),". Default: ",(0,n.jsx)(s.code,{children:"ASYNC"}),". Supported from v2.5.8 onwards."]})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,n.jsx)(s.p,{children:"When refreshing materialized views created based on the external catalogs, StarRocks refreshes all partitions in the materialized views."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Example 1: Manually refresh a specific materialized view via an asynchronous call."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"REFRESH MATERIALIZED VIEW lo_mv1;\n\nREFRESH MATERIALIZED VIEW lo_mv1 WITH ASYNC MODE;\n"})}),"\n",(0,n.jsx)(s.p,{children:"Example 2: Manually refresh certain partitions of a specific materialized view."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'REFRESH MATERIALIZED VIEW lo_mv1 \nPARTITION START ("2020-02-01") END ("2020-03-01");\n'})}),"\n",(0,n.jsx)(s.p,{children:"Example 3: Forcibly refresh certain partitions of a specific materialized view."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'REFRESH MATERIALIZED VIEW lo_mv1\nPARTITION START ("2020-02-01") END ("2020-03-01") FORCE;\n'})}),"\n",(0,n.jsx)(s.p,{children:"Example 4: Manually refresh a materialized view via a synchronous call."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"REFRESH MATERIALIZED VIEW lo_mv1 WITH SYNC MODE;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>r});var n=t(67294);const a=n.createContext({});function r(e){const s=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:r(e),n.createElement(a.Provider,{value:l},s)}}}]);