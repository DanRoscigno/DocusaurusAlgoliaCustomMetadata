"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30755],{68618:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=s(85893),a=s(11151);const r={},i="RESTORE",d={id:"sql-reference/sql-statements/data-definition/RESTORE",title:"RESTORE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/RESTORE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/RESTORE",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-definition/RESTORE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/RESTORE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"REFRESH EXTERNAL TABLE",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE"},next:{title:"SET CATALOG",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-definition/SET_CATALOG"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"restore",children:"RESTORE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Restores data to a specified database, table, or partition. Currently, StarRocks only supports restoring data to OLAP tables. For more information, see ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["RESTORE is an asynchronous operation. You can check the status of a RESTORE job using ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",children:"SHOW RESTORE"}),", or cancel a RESTORE job using ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/CANCEL_RESTORE",children:"CANCEL RESTORE"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only users with the ADMIN privilege can restore data."}),"\n",(0,n.jsx)(t.li,{children:"In each database, only one running BACKUP or RESTORE job is allowed each time. Otherwise, StarRocks returns an error."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'RESTORE SNAPSHOT <db_name>.<snapshot_name>\nFROM <repository_name>\n[ ON ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n    [ AS <table_alias>] [, ...] ) ]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db_name"}),(0,n.jsx)(t.td,{children:"Name of the database that the data is restored to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"snapshot_name"}),(0,n.jsx)(t.td,{children:"Name for the data snapshot."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"repository_name"}),(0,n.jsx)(t.td,{children:"Repository name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ON"}),(0,n.jsx)(t.td,{children:"Name of the tables to restored. The whole database is restored if this parameter is not specified."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PARTITION"}),(0,n.jsxs)(t.td,{children:["Name of the partitions to be restored. The whole table is restored if this parameter is not specified. You can view the partition name using ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW PARTITIONS"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PROPERTIES"}),(0,n.jsxs)(t.td,{children:["Properties of the RESTORE operation. Valid keys:",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"backup_timestamp"}),": Backup timestamp. ",(0,n.jsx)(t.strong,{children:"Required"}),". You can view backup timestamps using ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"}),"."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"replication_num"}),": Specify the number of replicas to be restored. Default: ",(0,n.jsx)(t.code,{children:"3"}),"."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"meta_version"}),": This parameter is only used as a temporary solution to restore the data backed up by the earlier version of StarRocks. The latest version of the backed up data already contains ",(0,n.jsx)(t.code,{children:"meta version"}),", and you do not need to specify it."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"timeout"}),": Task timeout. Unit: second. Default: ",(0,n.jsx)(t.code,{children:"86400"}),"."]})]})]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Example 1: Restores the table ",(0,n.jsx)(t.code,{children:"backup_tbl"})," in the snapshot ",(0,n.jsx)(t.code,{children:"snapshot_label1"})," from ",(0,n.jsx)(t.code,{children:"example_repo"})," repository to the database ",(0,n.jsx)(t.code,{children:"example_db"}),", and the backup timestamp is ",(0,n.jsx)(t.code,{children:"2018-05-04-16-45-08"}),". Restores one replica."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'RESTORE SNAPSHOT example_db.snapshot_label1\nFROM example_repo\nON ( backup_tbl )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-16-45-08",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Example 2: Restores partitions ",(0,n.jsx)(t.code,{children:"p1"})," and ",(0,n.jsx)(t.code,{children:"p2"})," of table ",(0,n.jsx)(t.code,{children:"backup_tbl"})," in ",(0,n.jsx)(t.code,{children:"snapshot_label2"})," and table ",(0,n.jsx)(t.code,{children:"backup_tbl2"})," from ",(0,n.jsx)(t.code,{children:"example_repo"})," to database ",(0,n.jsx)(t.code,{children:"example_db"}),", and rename ",(0,n.jsx)(t.code,{children:"backup_tbl2"})," to ",(0,n.jsx)(t.code,{children:"new_tbl"}),". The backup timestamp is ",(0,n.jsx)(t.code,{children:"2018-05-04-17-11-01"}),". Restores three replicas by default."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'RESTORE SNAPSHOT example_db.snapshot_label2\nFROM example_repo\nON(\n    backup_tbl PARTITION (p1, p2),\n    backup_tbl2 AS new_tbl\n)\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-17-11-01"\n);\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>d,ah:()=>r});var n=s(67294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function d({components:e,children:t,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:r(e),n.createElement(a.Provider,{value:d},t)}}}]);