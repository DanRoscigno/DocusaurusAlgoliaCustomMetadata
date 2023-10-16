"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80089],{63943:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var t=s(85893),i=s(11151);const n={displayed_sidebar:"English"},c="SHOW RESOURCE GROUP",d={id:"sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",title:"SHOW RESOURCE GROUP",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW PROCESSLIST",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST"},next:{title:"SHOW SQLBLACKLIST",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2}];function h(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"show-resource-group",children:"SHOW RESOURCE GROUP"}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Shows the information of resource groups."}),"\n",(0,t.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-SQL",children:"SHOW { RESOURCE GROUPS [ALL] | RESOURCE GROUP <resource_group_name> }\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Parameter"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RESOURCE GROUPS"}),(0,t.jsx)(r.td,{children:"Show the resource groups that match the current user."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Specify this parameter to show all resource groups in the cluster."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RESOURCE GROUP"}),(0,t.jsx)(r.td,{children:"Show the specified resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resource_group_name"}),(0,t.jsx)(r.td,{children:"Name of the resource group to be shown."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"return",children:"Return"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Return"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"name"}),(0,t.jsx)(r.td,{children:"Name of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"id"}),(0,t.jsx)(r.td,{children:"ID of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cpu_core_limit"}),(0,t.jsx)(r.td,{children:"CPU core limit of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mem_limit"}),(0,t.jsx)(r.td,{children:"Memory limit of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"big_query_cpu_second_limit"}),(0,t.jsx)(r.td,{children:"Big query upper time limit of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"big_query_scan_rows_limit"}),(0,t.jsx)(r.td,{children:"Big query scan row limit of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"big_query_mem_limit"}),(0,t.jsx)(r.td,{children:"Big query memory limit of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"concurrency_limit"}),(0,t.jsx)(r.td,{children:"Concurrency limit of the resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:"Type of resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"classifiers"}),(0,t.jsxs)(r.td,{children:["Classifiers that are associated with the resource group. ",(0,t.jsx)(r.code,{children:"id"})," is the ID of the classifier, and ",(0,t.jsx)(r.code,{children:"weight"})," is the degree of matching."]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:"Example 1: Shows all resource groups in the cluster."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Plain",children:"mysql> SHOW RESOURCE GROUPS ALL;\n+-------+--------+----------------+-----------+----------------------------+---------------------------+---------------------+-------------------+--------+------------------------------------------------------------------------------------------------------------------+\n| name  | id     | cpu_core_limit | mem_limit | big_query_cpu_second_limit | big_query_scan_rows_limit | big_query_mem_limit | concurrency_limit | type   | classifiers                                                                                                      |\n+-------+--------+----------------+-----------+----------------------------+---------------------------+---------------------+-------------------+--------+------------------------------------------------------------------------------------------------------------------+\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625127, weight=4.459375, user=rg1_user1, role=rg1_role1, query_type in (SELECT), source_ip=172.26.xxx.xx/24) |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625128, weight=3.459375, user=rg1_user2, query_type in (SELECT), source_ip=172.26.xxx.xx/24)                 |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625129, weight=2.359375, user=rg1_user3, source_ip=172.26.xxx.xx/24)                                         |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625130, weight=1.0, user=rg1_user4)                                                                          |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625131, weight=10.0, db='db1')                                                                                |\n+-------+--------+----------------+-----------+----------------------------+---------------------------+---------------------+-------------------+--------+------------------------------------------------------------------------------------------------------------------+\n"})})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>d,ah:()=>n});var t=s(67294);const i=t.createContext({});function n(e){const r=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function d({components:e,children:r,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:n(e),t.createElement(i.Provider,{value:d},r)}}}]);