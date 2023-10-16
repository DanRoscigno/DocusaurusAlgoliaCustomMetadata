"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15481],{35361:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),s=t(11151);const r={displayed_sidebar:"English"},o="Data Export",c={id:"faq/Exporting_faq",title:"Data Export",description:"Alibaba cloud OSS backup and restore",source:"@site/versioned_docs/version-3.1/faq/Exporting_faq.md",sourceDirName:"faq",slug:"/faq/Exporting_faq",permalink:"/doc/docs/faq/Exporting_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/faq/Exporting_faq.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Synchronize data from MySQL in real time",permalink:"/doc/docs/faq/loading/synchronize_mysql_into_sr"},next:{title:"Privilege FAQ",permalink:"/doc/docs/administration/privilege_faq"}},i={},l=[{value:"Alibaba cloud OSS backup and restore",id:"alibaba-cloud-oss-backup-and-restore",level:2},{value:"Create a cloud repository",id:"create-a-cloud-repository",level:3},{value:"Backup data table",id:"backup-data-table",level:3},{value:"Data restore",id:"data-restore",level:3}];function d(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"data-export",children:"Data Export"}),"\n",(0,n.jsx)(a.h2,{id:"alibaba-cloud-oss-backup-and-restore",children:"Alibaba cloud OSS backup and restore"}),"\n",(0,n.jsx)(a.p,{children:"StarRocks supports backing up data to alicloud OSS / AWS S3 (or object storage compatible with S3 protocol). Suppose there are two StarRocks clusters, namely DB1 cluster and DB2 cluster. We need to back up the data in DB1 to alicloud OSS and then restore it to DB2 when necessary. The general process of backup and recovery is as follows:"}),"\n",(0,n.jsx)(a.h3,{id:"create-a-cloud-repository",children:"Create a cloud repository"}),"\n",(0,n.jsx)(a.p,{children:"Execute SQL in DB1 and DB2 respectively:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'CREATE REPOSITORY `repository name`\nWITH BROKER `broker_name`\nON LOCATION "oss://bucket name/path"\nPROPERTIES\n(\n"fs.oss.accessKeyId" = "xxx",\n"fs.oss.accessKeySecret" = "yyy",\n"fs.oss.endpoint" = "oss-cn-beijing.aliyuncs.com"\n);\n'})}),"\n",(0,n.jsx)(a.p,{children:"a. Both DB1 and DB2 need to be created, and the created REPOSITORY name should be the same. View the repository:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SHOW REPOSITORIES;\n"})}),"\n",(0,n.jsx)(a.p,{children:"b. broker_ name needs to fill in the broker name in a cluster. View BrokerName:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SHOW BROKER;\n"})}),"\n",(0,n.jsx)(a.p,{children:"c. The path after fs.oss.endpoint does not need to have a bucket name."}),"\n",(0,n.jsx)(a.h3,{id:"backup-data-table",children:"Backup data table"}),"\n",(0,n.jsx)(a.p,{children:"BACKUP the tables to be backed up to the cloud repository in DB1. Execute SQL in DB1:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'BACKUP SNAPSHOT [db_name].{snapshot_name}\nTO `repository_name`\nON (\n`table_name` [PARTITION (`p1`, ...)],\n...\n)\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-plain",metastring:"text",children:'PROPERTIES currently supports the following properties:\n"type" = "full": indicates that this is a full update (default).\n"timeout" = "3600": task timeout. The default is one day. The unit is seconds.\n'})}),"\n",(0,n.jsx)(a.p,{children:"StarRocks does not support full database backup at present. We need to specify the tables or partitions to be backed up ON (...), and these tables or partitions will be backed up in parallel."}),"\n",(0,n.jsx)(a.p,{children:"View the backup tasks in progress (note that only one backup task can be performed at the same time):"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SHOW BACKUP FROM db_name;\n"})}),"\n",(0,n.jsx)(a.p,{children:"After the backup is completed, you can check whether the backup data in the OSS already exists (unnecessary backups need to be deleted in the OSS):"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SHOW SNAPSHOT ON OSS repository name; \n"})}),"\n",(0,n.jsx)(a.h3,{id:"data-restore",children:"Data restore"}),"\n",(0,n.jsx)(a.p,{children:"For data restore in DB2, there is no need to create a table structure to be restored in DB2. It will be created automatically during the Restore operation. Perform restore SQL:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"RESTORE SNAPSHOT [db_name].{snapshot_name}\nFROMrepository_name``\nON (\n    'table_name' [PARTITION ('p1', ...)] [AS 'tbl_alias'],\n    ...\n)\nPROPERTIES (\"key\"=\"value\", ...);\n"})}),"\n",(0,n.jsx)(a.p,{children:"View the restore progress:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SHOW RESTORE;\n"})})]})}const p=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>c,ah:()=>r});var n=t(67294);const s=n.createContext({});function r(e){const a=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function c({components:e,children:a,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),n.createElement(s.Provider,{value:c},a)}}}]);