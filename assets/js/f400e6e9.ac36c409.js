"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13710],{61663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=s(85893),i=s(11151);const r={displayed_sidebar:"English"},c="All commands",d={id:"sql-reference/sql-statements/all-commands",title:"All commands",description:"This topic lists all the SQL commands supported by StarRocks and categorizes these commands by their functions.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/all-commands.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/all-commands",permalink:"/doc/docs/sql-reference/sql-statements/all-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/all-commands.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},t={},a=[{value:"User account management",id:"user-account-management",level:2},{value:"Cluster management",id:"cluster-management",level:2},{value:"FE, BE, CN, Broker, process",id:"fe-be-cn-broker-process",level:3},{value:"Resource group",id:"resource-group",level:3},{value:"Storage volume",id:"storage-volume",level:3},{value:"Table, tablet, replica",id:"table-tablet-replica",level:3},{value:"File, index, variable",id:"file-index-variable",level:3},{value:"SQL Blacklist",id:"sql-blacklist",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Loading, unloading",id:"loading-unloading",level:2},{value:"Routine load",id:"routine-load",level:3},{value:"Other load",id:"other-load",level:3},{value:"Unloading",id:"unloading",level:3},{value:"ETL task",id:"etl-task",level:3},{value:"Catalog, database, resource",id:"catalog-database-resource",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Database",id:"database",level:3},{value:"Resource",id:"resource",level:3},{value:"Create table, partition",id:"create-table-partition",level:2},{value:"View, materialized view",id:"view-materialized-view",level:2},{value:"View",id:"view",level:3},{value:"Materialized view",id:"materialized-view",level:3},{value:"Function, SELECT",id:"function-select",level:2},{value:"CBO statistics",id:"cbo-statistics",level:2},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Utility commands",id:"utility-commands",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"all-commands",children:"All commands"}),"\n",(0,l.jsx)(n.p,{children:"This topic lists all the SQL commands supported by StarRocks and categorizes these commands by their functions."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#all-commands",children:"All commands"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#user-account-management",children:"User account management"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#cluster-management",children:"Cluster management"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#fe-be-cn-broker-process",children:"FE, BE, CN, Broker, process"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#resource-group",children:"Resource group"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#storage-volume",children:"Storage volume"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#table-tablet-replica",children:"Table, tablet, replica"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#file-index-variable",children:"File, index, variable"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#sql-blacklist",children:"SQL Blacklist"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#plugin",children:"Plugin"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#loading-unloading",children:"Loading, unloading"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#routine-load",children:"Routine load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#other-load",children:"Other load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#unloading",children:"Unloading"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#etl-task",children:"ETL task"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#catalog-database-resource",children:"Catalog, database, resource"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#catalog",children:"Catalog"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#database",children:"Database"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#resource",children:"Resource"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#create-table-partition",children:"Create table, partition"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#view-materialized-view",children:"View, materialized view"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#view",children:"View"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#materialized-view",children:"Materialized view"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#function-select",children:"Function, SELECT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#cbo-statistics",children:"CBO statistics"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#backup-and-restore",children:"Backup and restore"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#utility-commands",children:"Utility commands"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"user-account-management",children:"User account management"}),"\n",(0,l.jsx)(n.p,{children:"Manages users, roles, and privileges."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/DROP_ROLE",children:"DROP ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/DROP_USER",children:"DROP USER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/EXECUTE_AS",children:"EXECUTE AS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET_PASSWORD",children:"SET PASSWORD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET_PROPERTY",children:"SET PROPERTY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION",children:"SHOW AUTHENTICATION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_PROPERTY",children:"SHOW PROPERTY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_ROLES",children:"SHOW ROLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_USERS",children:"SHOW USERS"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"cluster-management",children:"Cluster management"}),"\n",(0,l.jsx)(n.p,{children:"Manages clusters, including FEs, BEs, compute nodes, brokers, resource groups, storage volumes, tables, tablets, replicas, files, indexes, variables, and plugins."}),"\n",(0,l.jsx)(n.h3,{id:"fe-be-cn-broker-process",children:"FE, BE, CN, Broker, process"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SET CONFIG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",children:"ADMIN SHOW CONFIG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ALTER_SYSTEM",children:"ALTER SYSTEM"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/CANCEL_DECOMMISSION",children:"CANCEL DECOMMISSION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/KILL",children:"KILL"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_BACKENDS",children:"SHOW BACKENDS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_BROKER",children:"SHOW BROKER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES",children:"SHOW COMPUTE NODES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FRONTENDS",children:"SHOW FRONTENDS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_PROC",children:"SHOW PROC"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",children:"SHOW PROCESSLIST"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"resource-group",children:"Resource group"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP",children:"CREATE RESOURCE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",children:"ALTER RESOURCE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP",children:"DROP RESOURCE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",children:"SHOW RESOURCE GROUP"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"storage-volume",children:"Storage volume"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",children:"DROP STORAGE VOLUME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"table-tablet-replica",children:"Table, tablet, replica"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR",children:"ADMIN CANCEL REPAIR TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET",children:"ADMIN CHECK TABLET"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_REPAIR",children:"ADMIN REPAIR TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",children:"ADMIN SET REPLICA STATUS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",children:"ADMIN SHOW REPLICA DISTRIBUTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS",children:"ADMIN SHOW REPLICA STATUS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_TABLE_STATUS",children:"SHOW TABLE STATUS"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"file-index-variable",children:"File, index, variable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/CREATE_FILE",children:"CREATE FILE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_INDEX",children:"CREATE INDEX"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DROP_FILE",children:"DROP FILE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_INDEX",children:"DROP INDEX"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SET",children:"SET (variable)"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FILE",children:"SHOW FILE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FULL_COLUMNS",children:"SHOW FULL COLUMNS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_INDEX",children:"SHOW INDEX"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_VARIABLES",children:"SHOW VARIABLES"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sql-blacklist",children:"SQL Blacklist"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST",children:"ADD SQLBLACKLIST"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",children:"SHOW SQLBLACKLIST"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",children:"DELETE SQLBLACKLIST"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"plugin",children:"Plugin"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",children:"INSTALL PLUGIN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_PLUGINS",children:"SHOW PLUGINS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/UNINSTALL_PLUGIN",children:"UNINSTALL PLUGIN"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"loading-unloading",children:"Loading, unloading"}),"\n",(0,l.jsx)(n.h3,{id:"routine-load",children:"Routine load"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD",children:"PAUSE ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",children:"SHOW ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD_TASK",children:"SHOW ROUTINE LOAD TASK"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STOP_ROUTINE_LOAD",children:"STOP ROUTINE LOAD"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"other-load",children:"Other load"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",children:"ALTER LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD",children:"CANCEL LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",children:"SHOW TRANSACTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"SPARK LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"unloading",children:"Unloading"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/EXPORT",children:"EXPORT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/CANCEL_EXPORT",children:"CANCEL EXPORT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"etl-task",children:"ETL task"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/DROP_TASK",children:"DROP TASK"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",children:"SUBMIT TASK"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"catalog-database-resource",children:"Catalog, database, resource"}),"\n",(0,l.jsx)(n.h3,{id:"catalog",children:"Catalog"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_CATALOG",children:"DROP CATALOG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/SET_CATALOG",children:"SET CATALOG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",children:"SHOW CREATE CATALOG"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"database",children:"Database"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_DATABASE",children:"ALTER DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_DATABASE",children:"DROP DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATA",children:"SHOW DATA"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"resource",children:"Resource"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",children:"ALTER RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_RESOURCE",children:"CREATE RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_RESOURCE",children:"DROP RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_RESOURCES",children:"SHOW RESOURCES"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"create-table-partition",children:"Create table, partition"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",children:"CANCEL ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",children:"CREATE TABLE LIKE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_TABLE",children:"DROP TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE",children:"REFRESH EXTERNAL TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",children:"TRUNCATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/DELETE",children:"DELETE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DELETE",children:"SHOW DELETE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES",children:"SHOW DYNAMIC PARTITION TABLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW PARTITIONS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",children:"SHOW TABLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",children:"SHOW TABLET"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/UPDATE",children:"UPDATE"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"view-materialized-view",children:"View, materialized view"}),"\n",(0,l.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_VIEW",children:"ALTER VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_VIEW",children:"CREATE VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",children:"SHOW CREATE VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_VIEW",children:"DROP VIEW"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"materialized-view",children:"Materialized view"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW",children:"ALTER MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",children:"CREATE MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",children:"DROP MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/CANCEL_REFRESH_MATERIALIZED_VIEW",children:"CANCEL REFRESH MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",children:"REFRESH MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",children:"SHOW ALTER MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_MATERIALIZED_VIEW",children:"SHOW CREATE MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",children:"SHOW MATERIALIZED VIEWS"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"function-select",children:"Function, SELECT"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/create-function",children:"CREATE FUNCTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/drop-function",children:"DROP FUNCTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/show-functions",children:"SHOW FUNCTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"cbo-statistics",children:"CBO statistics"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/ANALYZE_TABLE",children:"ANALYZE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",children:"CREATE ANALYZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_ANALYZE",children:"DROP ANALYZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_STATS",children:"DROP STATS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB",children:"SHOW ANALYZE JOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",children:"SHOW ANALYZE STATUS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/SHOW_META",children:"SHOW META"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"backup-and-restore",children:"Backup and restore"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/BACKUP",children:"BACKUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_BACKUP",children:"CANCEL BACKUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_RESTORE",children:"CANCEL RESTORE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",children:"CREATE REPOSITORY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",children:"DROP REPOSITORY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/RESTORE",children:"RESTORE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",children:"SHOW BACKUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES",children:"SHOW REPOSITORIES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",children:"SHOW RESTORE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"utility-commands",children:"Utility commands"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/EXPLAIN",children:"EXPLAIN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var l=s(67294);const i=l.createContext({});function r(e){const n=l.useContext(i);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:r(e),l.createElement(i.Provider,{value:d},n)}}}]);