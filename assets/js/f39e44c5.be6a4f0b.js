"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35349],{57047:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(85893),r=s(11151);const a={displayed_sidebar:"English"},i="ALTER LOAD",o={id:"sql-reference/sql-statements/data-manipulation/ALTER_LOAD",title:"ALTER LOAD",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/ALTER_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/ALTER_LOAD.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW FUNCTIONS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/show-functions"},next:{title:"BROKER LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",blockquote:"blockquote",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"alter-load",children:"ALTER LOAD"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Changes the priority of a Broker Load job that is in the ",(0,n.jsx)(t.strong,{children:"QUEUEING"})," or ",(0,n.jsx)(t.strong,{children:"LOADING"})," state. This statement is supported since v2.5."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(t.p,{children:["Changing the priority of a Broker Load job that is in the ",(0,n.jsx)(t.strong,{children:"LOADING"})," state does not affect the execution of the job."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER LOAD FOR <label_name>\nproperties\n(\n    'priority'='{LOWEST | LOW | NORMAL | HIGH | HIGHEST}'\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label_name"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsxs)(t.td,{children:["The label of the load job. Format: ",(0,n.jsx)(t.code,{children:"[<database_name>.]<label_name>"}),". See ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#label",children:"BROKER LOAD"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"priority"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsxs)(t.td,{children:["The new priority that you want to specify for the load job. Valid values: ",(0,n.jsx)(t.code,{children:"LOWEST"}),", ",(0,n.jsx)(t.code,{children:"LOW"}),", ",(0,n.jsx)(t.code,{children:"NORMAL"}),", ",(0,n.jsx)(t.code,{children:"HIGH"}),", and ",(0,n.jsx)(t.code,{children:"HIGHEST"}),". See ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Suppose that you have a Broker Load job whose label is ",(0,n.jsx)(t.code,{children:"test_db.label1"})," and the job is in the ",(0,n.jsx)(t.strong,{children:"QUEUEING"})," state. If you want to run the job at the soonest, you can run the following command to change the priority of the job to ",(0,n.jsx)(t.code,{children:"HIGHEST"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER LOAD FOR test_db.label1\nproperties\n(\n    'priority'='HIGHEST'\n);\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>a});var n=s(67294);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:o},t)}}}]);