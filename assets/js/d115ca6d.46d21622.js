"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93323],{90570:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(85893),l=s(11151);const r={displayed_sidebar:"English"},a="SHOW ROUTINE LOAD",i={id:"sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",title:"SHOW ROUTINE LOAD",description:"Examples",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW RESTORE",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE"},next:{title:"SHOW ROUTINE LOAD TASK",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD_TASK"}},o={},c=[{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",ol:"ol",li:"li",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-routine-load",children:"SHOW ROUTINE LOAD"}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show all routine import jobs (including stopped or cancelled jobs) with the name test1. The result is one or more rows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALL ROUTINE LOAD FOR test1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show the currently running routine import job with the name test1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ROUTINE LOAD FOR test1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show all routine import jobs (including stopped or cancelled jobs) in example_ db. The result is one or more rows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"use example_db;\nSHOW ALL ROUTINE LOAD;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show all running routine import jobs in example_ db"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"use example_db;\nSHOW ROUTINE LOAD;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show the currently running routine import job named test1 in example_ db"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ROUTINE LOAD FOR example_db.test1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show all routine import jobs (including stopped or cancelled jobs) with the name test1. The result is one or more rows in example_ db"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALL ROUTINE LOAD FOR example_db.test1;\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(l.Provider,{value:i},n)}}}]);