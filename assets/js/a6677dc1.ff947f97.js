"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14146],{72123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(85893),r=a(11151);const i={},s="Data Recovery",o={id:"administration/Data_recovery",title:"Data Recovery",description:"StarRocks supports data recovery for mistakenly deleted databases/tables/partitions. After drop table or drop database, StarRocks will not physically delete the data immediately, but keep it in Trash for a period of time (1 day by default). Administrators can recover the mistakenly deleted data with the RECOVER command.",source:"@site/versioned_docs/version-2.5/administration/Data_recovery.md",sourceDirName:"administration",slug:"/administration/Data_recovery",permalink:"/doc/en/2.5/administration/Data_recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Data_recovery.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Parameter configuration",permalink:"/doc/en/2.5/administration/Configuration"},next:{title:"Deploy FE Cluster with High Availability",permalink:"/doc/en/2.5/administration/Deployment"}},d={},l=[{value:"Related commands",id:"related-commands",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-recovery",children:"Data Recovery"}),"\n",(0,n.jsxs)(t.p,{children:["StarRocks supports data recovery for mistakenly deleted databases/tables/partitions. After ",(0,n.jsx)(t.code,{children:"drop table"})," or ",(0,n.jsx)(t.code,{children:"drop database"}),", StarRocks will not physically delete the data immediately, but keep it in Trash for a period of time (1 day by default). Administrators can recover the mistakenly deleted data with the ",(0,n.jsx)(t.code,{children:"RECOVER"})," command."]}),"\n",(0,n.jsx)(t.h2,{id:"related-commands",children:"Related commands"}),"\n",(0,n.jsx)(t.p,{children:"Syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"-- 1) Recover database\nRECOVER DATABASE db_name;\n-- 2) Restore table\nRECOVER TABLE [db_name.]table_name;\n-- 3) Recover partition\nRECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["This operation can only restore the deleted meta information. The default time is 1 day, which can be configured by the ",(0,n.jsx)(t.code,{children:"catalog_trash_expire_second"})," parameter in ",(0,n.jsx)(t.code,{children:"fe.conf"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"If new meta information of the same name and type is created after the meta information is deleted, the previously deleted meta information cannot be restored."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Recover the database named ",(0,n.jsx)(t.code,{children:"example_db"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n~~~ 2.\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Recover the table named ",(0,n.jsx)(t.code,{children:"example_tbl"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n~~~ 3.\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Recover the partition named ",(0,n.jsx)(t.code,{children:"p1"})," in the table ",(0,n.jsx)(t.code,{children:"example_tbl"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>i});var n=a(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||s:i(e),n.createElement(r.Provider,{value:o},t)}}}]);