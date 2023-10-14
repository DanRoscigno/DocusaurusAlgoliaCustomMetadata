"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96161],{72261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>I,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151);const r={},l="ADMIN SHOW REPLICA DISTRIBUTION",a={id:"sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",title:"ADMIN SHOW REPLICA DISTRIBUTION",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",permalink:"/doc/en/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"ADMIN SHOW CONFIG",permalink:"/doc/en/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG"},next:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/doc/en/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"admin-show-replica-distribution",children:"ADMIN SHOW REPLICA DISTRIBUTION"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to show the distribution status of a table or a partition replica."}),"\n",(0,s.jsx)(t.p,{children:"Syntax:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note:"}),"\n",(0,s.jsx)(t.p,{children:"The Graph column in the result shows the distribution ratio of replicas graphically."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"View the replica distribution of tables"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM tbl1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"View the replica distribution of partitions in the table"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}const I=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:a},t)}}}]);