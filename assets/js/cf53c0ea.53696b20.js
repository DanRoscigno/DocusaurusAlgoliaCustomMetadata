"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95519],{21185:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(85893),i=s(11151);const a={displayed_sidebar:"English"},r="SHOW TRANSACTION",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",title:"SHOW TRANSACTION",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW TABLET",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TABLET"},next:{title:"SPARK LOAD",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SPARK_LOAD"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-transaction",children:"SHOW TRANSACTION"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This syntax is used to view the transaction details of the specified transaction id."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION\n[FROM <db_name>]\nWHERE id = transaction_id\n"})}),"\n",(0,t.jsx)(n.p,{children:"Examples of returned results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"TransactionId: 4005\nLabel: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\nCoordinator: FE: 10.74.167.16\nTransactionStatus: VISIBLE\nLoadJobSourceType: INSERT_STREAMING\nPrepareTime: 2020-01-09 14:59:07\nCommitTime: 2020-01-09 14:59:09\nFinishTime: 2020-01-09 14:59:09\nReason:\nErrorReplicasCount: 0\nListenerId: -1\nTimeoutMs: 300000\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TransactionId: transaction id"}),"\n",(0,t.jsx)(n.li,{children:"Label: import the label corresponding to the task"}),"\n",(0,t.jsx)(n.li,{children:"Coordinator: the node responsible for transaction coordination"}),"\n",(0,t.jsx)(n.li,{children:"TransactionStatus: transaction status"}),"\n",(0,t.jsx)(n.li,{children:"PREPARE: preparation stage"}),"\n",(0,t.jsx)(n.li,{children:"COMMITTED: the transaction succeeded, but the data is not visible"}),"\n",(0,t.jsx)(n.li,{children:"VISIBLE: the transaction is successful and the data is visible"}),"\n",(0,t.jsx)(n.li,{children:"ABORTED: transaction failed"}),"\n",(0,t.jsx)(n.li,{children:"LoadJobSourceType: type of import task."}),"\n",(0,t.jsx)(n.li,{children:"PrepareTime: transaction start time"}),"\n",(0,t.jsx)(n.li,{children:"CommitTime: the time when the transaction is successfully committed"}),"\n",(0,t.jsx)(n.li,{children:"FinishTime: the time when the data is visible"}),"\n",(0,t.jsx)(n.li,{children:"Reason: error message"}),"\n",(0,t.jsx)(n.li,{children:"ErrorReplicasCount: number of replicas with errors"}),"\n",(0,t.jsx)(n.li,{children:"ListenerId: id of the related import job"}),"\n",(0,t.jsx)(n.li,{children:"TimeoutMs: transaction timeout, in milliseconds"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To view a transaction with id 4005:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the specified dB, view the transaction with id 4005:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION FROM db WHERE ID=4005;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:l},n)}}}]);