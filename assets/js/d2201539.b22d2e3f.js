"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64914],{83766:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(85893),t=r(11151);const i={displayed_sidebar:"English"},c="ALTER RESOURCE GROUP",o={id:"sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",title:"ALTER RESOURCE GROUP",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS"},next:{title:"ALTER SYSTEM",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/ALTER_SYSTEM"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"alter-resource-group",children:"ALTER RESOURCE GROUP"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Alters the configuration of a resource group."}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP resource_group_name\n{  ADD CLASSIFIER1, CLASSIFIER2, ...\n | DROP (CLASSIFIER_ID_1, CLASSIFIER_ID_2, ...)\n | DROP ALL\n | WITH resource_limit \n};\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"resource_group_name"}),(0,n.jsx)(s.td,{children:"Name of the resource group to be altered."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ADD"}),(0,n.jsxs)(s.td,{children:["Add classifiers to the resource group. See ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP",children:"CREATE RESOURCE GROUP - Parameters"})," for more information on how to define a classifier."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DROP"}),(0,n.jsxs)(s.td,{children:["Drop classifiers from the resource group via classifier IDs. You can check the ID of a classifier via ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",children:"SHOW RESOURCE GROUP"})," statement."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DROP ALL"}),(0,n.jsx)(s.td,{children:"Drop all classifiers from the resource group."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"WITH"}),(0,n.jsxs)(s.td,{children:["Modify the resource limits of the resource group. See ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP",children:"CREATE RESOURCE GROUP - Parameters"})," for more information on how to set resource limits."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Adds a new classifier to the resource group ",(0,n.jsx)(s.code,{children:"rg1"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 ADD (user='root', query_type in ('select'));\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Example 2: Drops classifiers with ID ",(0,n.jsx)(s.code,{children:"300040"}),", ",(0,n.jsx)(s.code,{children:"300041"}),", and ",(0,n.jsx)(s.code,{children:"300041"})," from the resource group ",(0,n.jsx)(s.code,{children:"rg1"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 DROP (300040, 300041, 300041);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Example 3: Drops all classifiers from the resource group ",(0,n.jsx)(s.code,{children:"rg1"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 DROP ALL;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Example 4: modifies the resource limits of the resource group ",(0,n.jsx)(s.code,{children:"rg1"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 WITH (\n    'cpu_core_limit' = '20'\n);\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>o,ah:()=>i});var n=r(67294);const t=n.createContext({});function i(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function o({components:e,children:s,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||c:i(e),n.createElement(t.Provider,{value:o},s)}}}]);