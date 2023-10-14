"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53955],{46265:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(85893),i=s(11151);const r={},d="SHOW RESTORE",a={id:"sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",title:"SHOW RESTORE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",permalink:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW REPOSITORIES",permalink:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES"},next:{title:"SHOW ROUTINE LOAD",permalink:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"show-restore",children:"SHOW RESTORE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Views the last RESTORE task in a specified database. For more information, see ",(0,n.jsx)(t.a,{href:"/doc/en/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(t.p,{children:"Only the information of the last RESTORE task is saved in StarRocks."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW RESTORE [FROM <db_name>]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db_name"}),(0,n.jsx)(t.td,{children:"Name of the database that the RESTORE task belongs to."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"return",children:"Return"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Return"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"JobId"}),(0,n.jsx)(t.td,{children:"Unique job ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Label"}),(0,n.jsx)(t.td,{children:"Name of the data snapshot."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Timestamp"}),(0,n.jsx)(t.td,{children:"Backup timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DbName"}),(0,n.jsx)(t.td,{children:"Name of the database that the RESTORE task belongs to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"State"}),(0,n.jsxs)(t.td,{children:["Current state of the RESTORE task:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"PENDING: Initial state after submitting a job."}),(0,n.jsx)("li",{children:"SNAPSHOTING: Executing the local snapshot."}),(0,n.jsx)("li",{children:"DOWNLOAD: Submitting snapshot download task."}),(0,n.jsx)("li",{children:"DOWNLOADING: Downloading the snapshot."}),(0,n.jsx)("li",{children:"COMMIT: To commit the downloaded snapshot."}),(0,n.jsx)("li",{children:"COMMITTING: Committing the downloaded snapshot."}),(0,n.jsx)("li",{children:"FINISHED: RESTORE task finished."}),(0,n.jsx)("li",{children:"CANCELLED: RESTORE task failed or cancelled."})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AllowLoad"}),(0,n.jsx)(t.td,{children:"If loading data is allowed during the RESTORE task."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ReplicationNum"}),(0,n.jsx)(t.td,{children:"Number of replicas to be restored."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RestoreObjs"}),(0,n.jsx)(t.td,{children:"The restored objects (tables and partitions)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CreateTime"}),(0,n.jsx)(t.td,{children:"Task submission time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MetaPreparedTime"}),(0,n.jsx)(t.td,{children:"Local metadata completion time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SnapshotFinishedTime"}),(0,n.jsx)(t.td,{children:"Snapshot completion time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DownloadFinishedTime"}),(0,n.jsx)(t.td,{children:"Snapshot download completion time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"FinishedTime"}),(0,n.jsx)(t.td,{children:"Task completion Time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"UnfinishedTasks"}),(0,n.jsx)(t.td,{children:"Unfinished subtask IDs in the SNAPSHOTTING, DOWNLOADING, and COMMITTING phases."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Progress"}),(0,n.jsx)(t.td,{children:"The progress of snapshot downloading tasks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TaskErrMsg"}),(0,n.jsx)(t.td,{children:"Error messages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Status"}),(0,n.jsx)(t.td,{children:"Status information."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Timeout"}),(0,n.jsx)(t.td,{children:"Task timeout. Unit: second."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Example 1: Views the last RESTORE task in the database ",(0,n.jsx)(t.code,{children:"example_db"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW RESTORE FROM example_db;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||d:r(e),n.createElement(i.Provider,{value:a},t)}}}]);