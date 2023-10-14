"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65774],{33147:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var s=r(85893),l=r(11151);const a={},i="REVOKE",t={id:"sql-reference/sql-statements/account-management/REVOKE",title:"REVOKE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/REVOKE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/REVOKE",permalink:"/doc/en/sql-reference/sql-statements/account-management/REVOKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/REVOKE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"GRANT",permalink:"/doc/en/sql-reference/sql-statements/account-management/GRANT"},next:{title:"SET DEFAULT ROLE",permalink:"/doc/en/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Revoke privileges",id:"revoke-privileges",level:3},{value:"System",id:"system",level:4},{value:"Resource group",id:"resource-group",level:4},{value:"Resource",id:"resource",level:4},{value:"User",id:"user",level:4},{value:"Global UDF",id:"global-udf",level:4},{value:"Internal catalog",id:"internal-catalog",level:4},{value:"External catalog",id:"external-catalog",level:4},{value:"Database",id:"database",level:4},{value:"Table",id:"table",level:4},{value:"View",id:"view",level:4},{value:"Materialized view",id:"materialized-view",level:4},{value:"Function",id:"function",level:4},{value:"Storage volume",id:"storage-volume",level:4},{value:"Revoke roles",id:"revoke-roles",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Revoke privileges",id:"revoke-privileges-1",level:3},{value:"Revoke roles",id:"revoke-roles-1",level:3},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"revoke",children:"REVOKE"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Revokes specific privileges or roles from a user or a role. For the privileges supported by StarRocks, see ",(0,s.jsx)(n.a,{href:"/doc/en/administration/privilege_item",children:"Privileges supported by StarRocks"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NOTE: Only the ",(0,s.jsx)(n.code,{children:"user_admin"})," role can perform this operation."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.h3,{id:"revoke-privileges",children:"Revoke privileges"}),"\n",(0,s.jsx)(n.p,{children:"The privileges that can be revoked are object-specific. The following part describes syntax based on objects."}),"\n",(0,s.jsx)(n.h4,{id:"system",children:"System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { CREATE RESOURCE GROUP | CREATE RESOURCE | CREATE EXTERNAL CATALOG | REPOSITORY | BLACKLIST | FILE | OPERATE } \n    ON SYSTEM\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"resource-group",children:"Resource group"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE GROUP <resourcegroup_name> [, <resourcegroup_name>,...] \uff5c ALL RESOURCE GROUPS} \n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"resource",children:"Resource"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE <resource_name> [, <resource_name>,...] \uff5c ALL RESOURCES} \n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"user",children:"User"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE IMPERSONATE ON USER <user_identity> FROM USER <user_identity>;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"global-udf",children:"Global UDF"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { GLOBAL FUNCTION <function_name> [, <function_name>,...]    \n       | ALL GLOBAL FUNCTIONS }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"internal-catalog",children:"Internal catalog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE \n    { USAGE | CREATE DATABASE | ALL [PRIVILEGES]} \n    ON CATALOG default_catalog\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"external-catalog",children:"External catalog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE  \n   { USAGE | DROP | ALL [PRIVILEGES] } \n   ON { CATALOG <catalog_name> [, <catalog_name>,...] | ALL CATALOGS}\n   FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"database",children:"Database"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE \n    { ALTER | DROP | CREATE TABLE | CREATE VIEW | CREATE FUNCTION | CREATE MATERIALIZED VIEW | ALL [PRIVILEGES] } \n    ON { DATABASE <database_name> [, <database_name>,...] | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"table",children:"Table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE  \n    { ALTER | DROP | SELECT | INSERT | EXPORT | UPDATE | DELETE | ALL [PRIVILEGES]} \n    ON { TABLE <table_name> [, < table_name >,...]\n       | ALL TABLES} IN \n           {  DATABASE <database_name>  | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can also use db.tbl to represent a table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON TABLE db.tbl FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"view",children:"View"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE  \n    { ALTER | DROP | SELECT | ALL [PRIVILEGES]} \n    ON { VIEW <view_name> [, < view_name >,...]\n       \uff5c ALL VIEWS} IN \n           {  DATABASE <database_name> | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can also use db.view to represent a view."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON VIEW db.view FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"materialized-view",children:"Materialized view"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { SELECT | ALTER | REFRESH | DROP | ALL [PRIVILEGES]} \n    ON { MATERIALIZED VIEW <mv_name> [, < mv_name >,...]\n       \uff5c ALL MATERIALIZED VIEWS} IN \n           {  DATABASE <database_name> | ALL [DATABASES] }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can also use db.mv to represent an mv."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON MATERIALIZED VIEW db.mv FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"function",children:"Function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { FUNCTION <function_name> [, < function_name >,...]\n       \uff5c ALL FUNCTIONS} IN \n           {  DATABASE <database_name> | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can also use db.function to represent a function."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON FUNCTION db.function FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"storage-volume",children:"Storage volume"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    CREATE STORAGE VOLUME \n    ON SYSTEM\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n\nREVOKE\n    { USAGE | ALTER | DROP | ALL [PRIVILEGES] } \n    ON { STORAGE VOLUME < name > [, < name >,...] \uff5c ALL STORAGE VOLUME} \n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"revoke-roles",children:"Revoke roles"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE <role_name> [,<role_name>, ...] FROM ROLE <role_name>\nREVOKE <role_name> [,<role_name>, ...] FROM USER <user_identity>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"role_name"}),(0,s.jsx)(n.td,{children:"The role name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"user_identity"}),(0,s.jsx)(n.td,{children:"The user identity, for example, 'jack'@'192.%'."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resourcegroup_name"}),(0,s.jsx)(n.td,{children:"The resource group name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resource_name"}),(0,s.jsx)(n.td,{children:"The resource name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function_name"}),(0,s.jsx)(n.td,{children:"The function name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catalog_name"}),(0,s.jsx)(n.td,{children:"The name of the external catalog."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"database_name"}),(0,s.jsx)(n.td,{children:"The database name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table_name"}),(0,s.jsx)(n.td,{children:"The table name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"view_name"}),(0,s.jsx)(n.td,{children:"The view name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mv_name"}),(0,s.jsx)(n.td,{children:"The name of the materialized view."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"revoke-privileges-1",children:"Revoke privileges"}),"\n",(0,s.jsxs)(n.p,{children:["Revoke the SELECT privilege on table ",(0,s.jsx)(n.code,{children:"sr_member"})," from user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE SELECT ON TABLE sr_member FROM USER 'jack'@'192.%'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Revoke the USAGE privilege on resource ",(0,s.jsx)(n.code,{children:"spark_resource"})," from role ",(0,s.jsx)(n.code,{children:"test_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE USAGE ON RESOURCE 'spark_resource' FROM ROLE 'test_role';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"revoke-roles-1",children:"Revoke roles"}),"\n",(0,s.jsxs)(n.p,{children:["Revoke the role ",(0,s.jsx)(n.code,{children:"example_role"})," from user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE example_role FROM 'jack'@'%';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Revoke the role ",(0,s.jsx)(n.code,{children:"example_role"})," from role ",(0,s.jsx)(n.code,{children:"test_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE example_role FROM ROLE 'test_role';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>t,ah:()=>a});var s=r(67294);const l=s.createContext({});function a(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function t({components:e,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof e?e({}):e||i:a(e),s.createElement(l.Provider,{value:t},n)}}}]);