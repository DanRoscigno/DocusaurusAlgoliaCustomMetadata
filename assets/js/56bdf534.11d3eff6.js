"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32353],{89080:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var t=s(85893),i=s(11151);const n={},c="CREATE RESOURCE GROUP",o={id:"sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP",title:"CREATE RESOURCE GROUP",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE FILE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/CREATE FILE"},next:{title:"DELETE SQLBLACKLIST",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/DELETE SQLBLACKLIST"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function h(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"create-resource-group",children:"CREATE RESOURCE GROUP"}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Creates a resource group."}),"\n",(0,t.jsxs)(r.p,{children:["For more information, see ",(0,t.jsx)(r.a,{href:"/doc/docs/2.5/administration/resource_group",children:"Resource group"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP resource_group_name \nTO CLASSIFIER1, CLASSIFIER2, ...\nWITH resource_limit\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"resource_group_name"}),": The name of the resource group to be created."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"CLASSIFIER"}),": Classifiers used to filter the queries on which resource limits are imposed. You must specify a classifier using ",(0,t.jsx)(r.code,{children:'"key"="value"'})," pairs. You can set multiple classifiers for a resource group."]}),"\n",(0,t.jsx)(r.p,{children:"Parameters for classifiers are listed below:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Parameter"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Required"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"user"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The name of user."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"role"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The role of user."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"query_type"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsxs)(r.td,{children:["The type of query. ",(0,t.jsx)(r.code,{children:"SELECT"})," and ",(0,t.jsx)(r.code,{children:"INSERT"})," (from v2.5) are supported. When INSERT tasks hit a resource group with ",(0,t.jsx)(r.code,{children:"query_type"})," as ",(0,t.jsx)(r.code,{children:"insert"}),", the BE node reserves the specified CPU resources for the tasks."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"source_ip"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The CIDR block from which the query is initiated."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"db"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The database which the query accesses. It can be specified by strings separated by commas (,)."})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"resource_limit"}),": Resource limits to be imposed on the resource group. You must specify resource limits using ",(0,t.jsx)(r.code,{children:'"key"="value"'})," pairs. You can set multiple resource limits for a resource group."]}),"\n",(0,t.jsx)(r.p,{children:"Parameters for resource limits are listed below:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Parameter"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Required"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cpu_core_limit"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The soft limit for the number of CPU cores that can be allocated to the resource group on the BE. In actual business scenarios, CPU cores that are allocated to the resource group proportionally scale based on the availability of CPU cores on the BE. Valid values: any non-zero positive integer."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mem_limit"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The percentage of memory that can be used for queries in the total memory that is provided by the BE. Unit: %. Valid values: (0, 1)."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"concurrency_limit"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The upper limit of concurrent queries in a resource group. It is used to avoid system overload caused by too many concurrent queries."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"big_query_cpu_second_limit"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The upper time limit of CPU occupation for a big query. Concurrent queries add up the time. The unit is second."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"big_query_scan_rows_limit"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The upper limit of row counts that can be scanned by a big query."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"big_query_mem_limit"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The upper limit of memory usage of a big query. The unit is byte."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsxs)(r.td,{children:["The type of resource group. Valid values: ",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"short_query"}),": When queries from the ",(0,t.jsx)(r.code,{children:"short_query"})," resource group are running, the BE node reserves the CPU cores defined in ",(0,t.jsx)(r.code,{children:"short_query.cpu_core_limit"}),". CPU cores for all ",(0,t.jsx)(r.code,{children:"normal"}),' resource groups are limited to "the total CPU cores - ',(0,t.jsx)(r.code,{children:"short_query.cpu_core_limit"}),'". ',(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"normal"}),": When no query from the ",(0,t.jsx)(r.code,{children:"short_query"})," resource group is running, the CPU core limit above is not imposed on the ",(0,t.jsx)(r.code,{children:"normal"})," resource groups. ",(0,t.jsx)("br",{}),"Note that you can create only ONE ",(0,t.jsx)(r.code,{children:"short_query"})," resource group in a cluster."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["Example 1: Creates the resource group ",(0,t.jsx)(r.code,{children:"rg1"})," based on multiple classifiers."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP rg1\nTO \n    (user='rg1_user1', role='rg1_role1', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user2', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user3', source_ip='192.168.x.x/24'),\n    (user='rg1_user4'),\n    (db='db1')\nWITH ('cpu_core_limit' = '10',\n      'mem_limit' = '20%',\n      'type' = 'normal',\n      'big_query_cpu_second_limit' = '100',\n      'big_query_scan_rows_limit' = '100000',\n      'big_query_mem_limit' = '1073741824'\n);\n"})})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>o,ah:()=>n});var t=s(67294);const i=t.createContext({});function n(e){const r=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function o({components:e,children:r,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:n(e),t.createElement(i.Provider,{value:o},r)}}}]);