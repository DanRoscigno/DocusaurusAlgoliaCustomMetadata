"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[2322],{86054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(85893),a=t(11151);const r={},i="BACKUP",l={id:"sql-reference/sql-statements/data-definition/BACKUP",title:"BACKUP",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/BACKUP.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/BACKUP",permalink:"/doc/en/2.5/sql-reference/sql-statements/data-definition/BACKUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/BACKUP.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"ANALYZE TABLE",permalink:"/doc/en/2.5/sql-reference/sql-statements/data-definition/ANALYZE_TABLE"},next:{title:"CANCEL ALTER TABLE",permalink:"/doc/en/2.5/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"backup",children:"BACKUP"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Backs up data in a specified database, table, or partition. Currently, StarRocks only supports backing up data in OLAP tables. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/en/2.5/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["BACKUP is an asynchronous operation. You can check the status of a BACKUP job status using ",(0,s.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",children:"SHOW BACKUP"}),", or cancel a BACKUP job using ",(0,s.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/CANCEL_BACKUP",children:"CANCEL BACKUP"}),". You can view the snapshot information using ",(0,s.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only users with the ADMIN privilege can back up data."}),"\n",(0,s.jsx)(n.li,{children:"In each database, only one running BACKUP or RESTORE job is allowed each time. Otherwise, StarRocks returns an error."}),"\n",(0,s.jsx)(n.li,{children:"StarRocks does not support specifying data compression algorithm for data backup."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'BACKUP SNAPSHOT <db_name>.<snapshot_name>\nTO <repository_name>\n[ ON ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n       [, ...] ) ]\n[ PROPERTIES ("key"="value" [, ...] ) ]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"Name of the database that stores the data to be backed up."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"snapshot_name"}),(0,s.jsx)(n.td,{children:"Specify a name for the data snapshot. Globally unique."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"repository_name"}),(0,s.jsxs)(n.td,{children:["Repository name. You can create a repository using ",(0,s.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",children:"CREATE REPOSITORY"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ON"}),(0,s.jsx)(n.td,{children:"Name of the tables to be backed up. The whole database is backed up if this parameter is not specified."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PARTITION"}),(0,s.jsx)(n.td,{children:"Name of the partitions to be backed up. The whole table is backed up if this parameter is not specified."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PROPERTIES"}),(0,s.jsxs)(n.td,{children:["Properties of the data snapshot. Valid keys:",(0,s.jsx)(n.code,{children:"type"}),": Backup type. Currently, only full backup ",(0,s.jsx)(n.code,{children:"FULL"})," is supported. Default: ",(0,s.jsx)(n.code,{children:"FULL"}),".",(0,s.jsx)(n.code,{children:"timeout"}),": Task timeout. Unit: second. Default: ",(0,s.jsx)(n.code,{children:"86400"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Backs up the database ",(0,s.jsx)(n.code,{children:"example_db"})," to the repository ",(0,s.jsx)(n.code,{children:"example_repo"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nPROPERTIES ("type" = "full");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Backs up the table ",(0,s.jsx)(n.code,{children:"example_tbl"})," in ",(0,s.jsx)(n.code,{children:"example_db"})," to ",(0,s.jsx)(n.code,{children:"example_repo"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON (example_tbl);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Backs up the partitions ",(0,s.jsx)(n.code,{children:"p1"})," and ",(0,s.jsx)(n.code,{children:"p2"})," of ",(0,s.jsx)(n.code,{children:"example_tbl"})," and the table ",(0,s.jsx)(n.code,{children:"example_tbl2"})," in ",(0,s.jsx)(n.code,{children:"example_db"})," to ",(0,s.jsx)(n.code,{children:"example_repo"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nON(\n    example_tbl PARTITION (p1, p2),\n    example_tbl2\n);\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:l},n)}}}]);