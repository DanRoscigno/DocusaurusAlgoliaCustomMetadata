"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86418],{30393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(85893),s=a(11151);const r={displayed_sidebar:"English"},i="Data Recovery",d={id:"administration/Data_recovery",title:"Data Recovery",description:"StarRocks supports data recovery for mistakenly deleted databases/tables/partitions. After drop table or drop database, StarRocks will not physically delete the data immediately, but keep it in Trash for a period of time (1 day by default). Administrators can recover the mistakenly deleted data with the RECOVER command.",source:"@site/versioned_docs/version-3.1/administration/Data_recovery.md",sourceDirName:"administration",slug:"/administration/Data_recovery",permalink:"/doc/docs/administration/Data_recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Data_recovery.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Blacklist Management",permalink:"/doc/docs/administration/Blacklist"},next:{title:"Overview of privileges",permalink:"/doc/docs/administration/privilege_overview"}},o={},l=[{value:"Related commands",id:"related-commands",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-recovery",children:"Data Recovery"}),"\n",(0,n.jsxs)(t.p,{children:["StarRocks supports data recovery for mistakenly deleted databases/tables/partitions. After ",(0,n.jsx)(t.code,{children:"drop table"})," or ",(0,n.jsx)(t.code,{children:"drop database"}),", StarRocks will not physically delete the data immediately, but keep it in Trash for a period of time (1 day by default). Administrators can recover the mistakenly deleted data with the ",(0,n.jsx)(t.code,{children:"RECOVER"})," command."]}),"\n",(0,n.jsx)(t.h2,{id:"related-commands",children:"Related commands"}),"\n",(0,n.jsx)(t.p,{children:"Syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"-- 1) Recover database\nRECOVER DATABASE db_name;\n-- 2) Restore table\nRECOVER TABLE [db_name.]table_name;\n-- 3) Recover partition\nRECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["This operation can only restore the deleted meta information. The default time is 1 day, which can be configured by the ",(0,n.jsx)(t.code,{children:"catalog_trash_expire_second"})," parameter in ",(0,n.jsx)(t.code,{children:"fe.conf"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"If new meta information of the same name and type is created after the meta information is deleted, the previously deleted meta information cannot be restored."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Recover the database named ",(0,n.jsx)(t.code,{children:"example_db"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n~~~ 2.\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Recover the table named ",(0,n.jsx)(t.code,{children:"example_tbl"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n~~~ 3.\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Recover the partition named ",(0,n.jsx)(t.code,{children:"p1"})," in the table ",(0,n.jsx)(t.code,{children:"example_tbl"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>d,ah:()=>r});var n=a(67294);const s=n.createContext({});function r(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function d({components:e,children:t,disableParentContext:a}){let d;return d=a?"function"==typeof e?e({}):e||i:r(e),n.createElement(s.Provider,{value:d},t)}}}]);