"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49670],{59967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const i={},d="SHOW ALTER MATERIALIZED VIEW",a={id:"sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",title:"SHOW ALTER MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",permalink:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW ALTER TABLE",permalink:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_ALTER"},next:{title:"SHOW BACKUP",permalink:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-alter-materialized-view",children:"SHOW ALTER MATERIALIZED VIEW"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Shows the building status of synchronous materialized views."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW ALTER MATERIALIZED VIEW [ { FROM | IN } db_name]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Parameters in brackets [] is optional."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Required"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"The name of the database to which the materialized view resides. If this parameter is not specified, the current database is used by default."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Return"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JobId"}),(0,s.jsx)(n.td,{children:"The ID of refresh job."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TableName"}),(0,s.jsx)(n.td,{children:"The name of the table."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CreateTime"}),(0,s.jsx)(n.td,{children:"The time when refresh job is created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FinishedTime"}),(0,s.jsx)(n.td,{children:"The time when refresh job is finished."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BaseIndexName"}),(0,s.jsx)(n.td,{children:"The name of the base table."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RollupIndexName"}),(0,s.jsx)(n.td,{children:"The name of the materialized view."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RollupId"}),(0,s.jsx)(n.td,{children:"The ID of the materialized view rollup."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TransactionId"}),(0,s.jsx)(n.td,{children:"The ID of transaction that waits to be executed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"State"}),(0,s.jsx)(n.td,{children:"The state of the job."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Msg"}),(0,s.jsx)(n.td,{children:"Error message."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Progress"}),(0,s.jsx)(n.td,{children:"Progress of the refresh job."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Timeout"}),(0,s.jsx)(n.td,{children:"Timeout for the refresh job."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: building status of synchronous materialized views"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"MySQL > SHOW ALTER MATERIALIZED VIEW\\G\n*************************** 1. row ***************************\n          JobId: 475991\n      TableName: lineorder\n     CreateTime: 2022-08-24 19:46:53\n   FinishedTime: 2022-08-24 19:47:15\n  BaseIndexName: lineorder\nRollupIndexName: lo_mv_sync_1\n       RollupId: 475992\n  TransactionId: 33067\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n*************************** 2. row ***************************\n          JobId: 477337\n      TableName: lineorder\n     CreateTime: 2022-08-24 19:47:25\n   FinishedTime: 2022-08-24 19:47:45\n  BaseIndexName: lineorder\nRollupIndexName: lo_mv_sync_2\n       RollupId: 477338\n  TransactionId: 33068\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n2 rows in set (0.00 sec)\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||d:i(e),s.createElement(r.Provider,{value:a},n)}}}]);