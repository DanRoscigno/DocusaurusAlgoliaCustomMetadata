"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46185],{22480:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=s(85893),n=s(11151);const r={},o="Back up and restore data",i={id:"administration/Backup_and_restore",title:"Back up and restore data",description:"This topic describes how to back up and restore data in StarRocks, or migrate data to a new StarRocks cluster.",source:"@site/versioned_docs/version-3.0/administration/Backup_and_restore.md",sourceDirName:"administration",slug:"/administration/Backup_and_restore",permalink:"/doc/en/3.0/administration/Backup_and_restore",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Backup_and_restore.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Authentication methods",permalink:"/doc/en/3.0/administration/Authentication"},next:{title:"Blacklist Management",permalink:"/doc/en/3.0/administration/Blacklist"}},c={},d=[{value:"Back up data",id:"back-up-data",level:2},{value:"Create a repository",id:"create-a-repository",level:3},{value:"Back up a data snapshot",id:"back-up-a-data-snapshot",level:3},{value:"Restore or migrate data",id:"restore-or-migrate-data",level:2},{value:"(Optional) Create a repository in the new cluster",id:"optional-create-a-repository-in-the-new-cluster",level:3},{value:"Check the snapshot",id:"check-the-snapshot",level:3},{value:"Restore data via the snapshot",id:"restore-data-via-the-snapshot",level:3},{value:"Configure BACKUP or RESTORE jobs",id:"configure-backup-or-restore-jobs",level:2},{value:"Usage notes",id:"usage-notes",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a",h3:"h3",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"back-up-and-restore-data",children:"Back up and restore data"}),"\n",(0,a.jsx)(t.p,{children:"This topic describes how to back up and restore data in StarRocks, or migrate data to a new StarRocks cluster."}),"\n",(0,a.jsx)(t.p,{children:"StarRocks supports backing up data as snapshots into a remote storage system, and restoring the data to any StarRocks clusters."}),"\n",(0,a.jsx)(t.p,{children:"StarRocks supports the following remote storage systems:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Apache\u2122 Hadoop\xae (HDFS) cluster"}),"\n",(0,a.jsx)(t.li,{children:"AWS S3"}),"\n",(0,a.jsx)(t.li,{children:"Google GCS"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"back-up-data",children:"Back up data"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks supports FULL backup on the granularity level of database, table, or partition."}),"\n",(0,a.jsxs)(t.p,{children:["If you have stored a large amount of data in a table, we recommend that you back up and restore data by partition. This way, you can reduce the cost of retries in case of job failures. If you need to back up incremental data on a regular basis, you can strategize a ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/table_design/dynamic_partitioning",children:"dynamic partitioning"})," plan (by a certain time interval, for example) for your table, and back up only new partitions each time."]}),"\n",(0,a.jsx)(t.h3,{id:"create-a-repository",children:"Create a repository"}),"\n",(0,a.jsxs)(t.p,{children:["Before backing up data, you need to create a repository, which is used to store data snapshots in a remote storage system. You can create multiple repositories in a StarRocks cluster. For detailed instructions, see ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",children:"CREATE REPOSITORY"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create a repository in HDFS"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The following example creates a repository named ",(0,a.jsx)(t.code,{children:"test_repo"})," in an HDFS cluster."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "hdfs://<hdfs_host>:<hdfs_port>/repo_dir/backup"\nPROPERTIES(\n    "username" = "<hdfs_username>",\n    "password" = "<hdfs_password>"\n);\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a repository in AWS S3"}),"\n",(0,a.jsx)(t.p,{children:"You can choose IAM user-based credential (Access Key and Secret Key), Instance Profile, or Assumed Role as the credential method for accessing AWS S3."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The following example creates a repository named ",(0,a.jsx)(t.code,{children:"test_repo"})," in the AWS S3 bucket ",(0,a.jsx)(t.code,{children:"bucket_s3"})," using IAM user-based credential as the credential method."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.access_key" = "XXXXXXXXXXXXXXXXX",\n    "aws.s3.secret_key" = "yyyyyyyyyyyyyyyyyyyyyyyy",\n    "aws.s3.endpoint" = "s3.us-east-1.amazonaws.com"\n);\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The following example creates a repository named ",(0,a.jsx)(t.code,{children:"test_repo"})," in the AWS S3 bucket ",(0,a.jsx)(t.code,{children:"bucket_s3"})," using Instance Profile as the credential method."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-east-1"\n);\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The following example creates a repository named ",(0,a.jsx)(t.code,{children:"test_repo"})," in the AWS S3 bucket ",(0,a.jsx)(t.code,{children:"bucket_s3"})," using Assumed Role as the credential method."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::xxxxxxxxxx:role/yyyyyyyy",\n    "aws.s3.region" = "us-east-1"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.p,{children:["StarRocks supports creating repositories in AWS S3 only according to the S3A protocol. Therefore, when you create repositories in AWS S3, you must replace ",(0,a.jsx)(t.code,{children:"s3://"})," in the S3 URI you pass as a repository location in ",(0,a.jsx)(t.code,{children:"ON LOCATION"})," with ",(0,a.jsx)(t.code,{children:"s3a://"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create a repository in Google GCS"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The following example creates a repository named ",(0,a.jsx)(t.code,{children:"test_repo"})," in the Google GCS bucket ",(0,a.jsx)(t.code,{children:"bucket_gcs"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_gcs/backup"\nPROPERTIES(\n    "fs.s3a.access.key" = "xxxxxxxxxxxxxxxxxxxx",\n    "fs.s3a.secret.key" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.s3a.endpoint" = "storage.googleapis.com"\n);\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.p,{children:["StarRocks supports creating repositories in Google GCS only according to the S3A protocol. Therefore, when you create repositories in Google GCS, you must replace the prefix in the GCS URI you pass as a repository location in ",(0,a.jsx)(t.code,{children:"ON LOCATION"})," with ",(0,a.jsx)(t.code,{children:"s3a://"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["After the repository is created, you can check the repository via ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES",children:"SHOW REPOSITORIES"}),". After restoring data, you can delete the repository in StarRocks using ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",children:"DROP REPOSITORY"}),". However, data snapshots backed up in the remote storage system cannot be deleted through StarRocks. You need to delete them manually in the remote storage system."]}),"\n",(0,a.jsx)(t.h3,{id:"back-up-a-data-snapshot",children:"Back up a data snapshot"}),"\n",(0,a.jsxs)(t.p,{children:["After the repository is created, you need to create a data snapshot and back up it in the remote repository. For detailed instructions, see ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/BACKUP",children:"BACKUP"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The following example creates a data snapshot ",(0,a.jsx)(t.code,{children:"sr_member_backup"})," for the table ",(0,a.jsx)(t.code,{children:"sr_member"})," in the database ",(0,a.jsx)(t.code,{children:"sr_hub"})," and backs up it in the repository ",(0,a.jsx)(t.code,{children:"test_repo"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"BACKUP SNAPSHOT sr_hub.sr_member_backup\nTO test_repo\nON (sr_member);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["BACKUP is an asynchronous operation. You can check the status of a BACKUP job using ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",children:"SHOW BACKUP"}),", or cancel a BACKUP job using ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/CANCEL_BACKUP",children:"CANCEL BACKUP"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"restore-or-migrate-data",children:"Restore or migrate data"}),"\n",(0,a.jsx)(t.p,{children:"You can restore the data snapshot backed up in the remote storage system to the current or other StarRocks clusters to restore or migrate data."}),"\n",(0,a.jsx)(t.h3,{id:"optional-create-a-repository-in-the-new-cluster",children:"(Optional) Create a repository in the new cluster"}),"\n",(0,a.jsxs)(t.p,{children:["To migrate data to another StarRocks cluster, you need to create a repository with the same ",(0,a.jsx)(t.strong,{children:"repository name"})," and ",(0,a.jsx)(t.strong,{children:"location"})," in the new cluster, otherwise you will not be able to view the previously backed up data snapshots. See ",(0,a.jsx)(t.a,{href:"#create-a-repository",children:"Create a repository"})," for details."]}),"\n",(0,a.jsx)(t.h3,{id:"check-the-snapshot",children:"Check the snapshot"}),"\n",(0,a.jsxs)(t.p,{children:["Before restoring data, you can check the snapshots in a specified repository using ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The following example checks the snapshot information in ",(0,a.jsx)(t.code,{children:"test_repo"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW SNAPSHOT ON test_repo;\n+------------------+-------------------------+--------+\n| Snapshot         | Timestamp               | Status |\n+------------------+-------------------------+--------+\n| sr_member_backup | 2023-02-07-14-45-53-143 | OK     |\n+------------------+-------------------------+--------+\n1 row in set (1.16 sec)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"restore-data-via-the-snapshot",children:"Restore data via the snapshot"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/RESTORE",children:"RESTORE"})," statement to restore data snapshots in the remote storage system to the current or other StarRocks clusters."]}),"\n",(0,a.jsxs)(t.p,{children:["The following example restores the data snapshot ",(0,a.jsx)(t.code,{children:"sr_member_backup"})," in ",(0,a.jsx)(t.code,{children:"test_repo"})," on the table ",(0,a.jsx)(t.code,{children:"sr_member"}),". It only restores ONE data replica."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'RESTORE SNAPSHOT sr_hub.sr_member_backup\nFROM test_repo\nON (sr_member)\nPROPERTIES (\n    "backup_timestamp"="2023-02-07-14-45-53-143",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["RESTORE is an asynchronous operation. You can check the status of a RESTORE job using ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",children:"SHOW RESTORE"}),", or cancel a RESTORE job using ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/CANCEL_RESTORE",children:"CANCEL RESTORE"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"configure-backup-or-restore-jobs",children:"Configure BACKUP or RESTORE jobs"}),"\n",(0,a.jsxs)(t.p,{children:["You can optimize the performance of BACKUP or RESTORE jobs by modifying the following configuration items in the BE configuration file ",(0,a.jsx)(t.strong,{children:"be.conf"}),":"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Configuration item"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"upload_worker_count"}),(0,a.jsxs)(t.td,{children:["The maximum number of threads for the upload tasks of BACKUP jobs on a BE node. Default: ",(0,a.jsx)(t.code,{children:"1"}),". Increase the value of this configuration item to increase the concurrency of the upload task."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"download_worker_count"}),(0,a.jsxs)(t.td,{children:["The maximum number of threads for the download tasks of RESTORE jobs on a BE node. Default: ",(0,a.jsx)(t.code,{children:"1"}),". Increase the value of this configuration item to increase the concurrency of the download task."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"max_download_speed_kbps"}),(0,a.jsxs)(t.td,{children:["The upper limit of the download speed on a BE node. Default: ",(0,a.jsx)(t.code,{children:"50000"}),". Unit: KB/s. Usually, the speed of the download tasks in RESTORE jobs will not exceed the default value. If this configuration is limiting the performance of RESTORE jobs, you can increase it according to your bandwidth."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Only users with the ADMIN privilege can back up or restore data."}),"\n",(0,a.jsx)(t.li,{children:"In each database, only one running BACKUP or RESTORE job is allowed each time. Otherwise, StarRocks returns an error."}),"\n",(0,a.jsx)(t.li,{children:"Because BACKUP and RESTORE jobs occupy many resources of your StarRocks cluster, you can back up and restore your data while your StarRocks cluster is not heavily loaded."}),"\n",(0,a.jsx)(t.li,{children:"StarRocks does not support specifying data compression algorithm for data backup."}),"\n",(0,a.jsx)(t.li,{children:"Because data is backed up as snapshots, the data loaded upon snapshot generation is not included in the snapshot. Therefore, if you load data into the old cluster after the snapshot is generated and before the RESTORE job is completed, you also need to load the data into the cluster that data is restored into. It is recommended that you load data into both clusters in parallel for a period of time after the data migration is complete, and then migrate your application to the new cluster after verifying the correctness of the data and services."}),"\n",(0,a.jsx)(t.li,{children:"Before the RESTORE job is completed, you cannot operate the table to be restored."}),"\n",(0,a.jsx)(t.li,{children:"Primary Key tables cannot be restored to a StarRocks cluster earlier than v2.5."}),"\n",(0,a.jsx)(t.li,{children:"You do not need to create the table to be restored in the new cluster before restoring it. The RESTORE job automatically creates it."}),"\n",(0,a.jsxs)(t.li,{children:["If there is an existing table that has a duplicated name with the table to be restored, StarRocks first checks whether or not the schema of the existing table matches that of the table to be restored. If the schemas match, StarRocks overwrites the existing table with the data in the snapshot. If the schema does not match, the RESTORE job fails. You can either rename the table to be restored using the keyword ",(0,a.jsx)(t.code,{children:"AS"}),", or delete the existing table before restoring data."]}),"\n",(0,a.jsx)(t.li,{children:"If the RESTORE job overwrites an existing database, table, or partition, the overwritten data cannot be restored after the job enters the COMMIT phase. If the RESTORE job fails or is canceled at this point, the data may be corrupted and inaccessible. In this case, you can only perform the RESTORE operation again and wait for the job to complete. Therefore, we recommend that you do not restore data by overwriting unless you are sure that the current data is no longer used. The overwrite operation first checks metadata consistency between the snapshot and the existing database, table, or partition. If an inconsistency is detected, the RESTORE operation cannot be performed."}),"\n",(0,a.jsxs)(t.li,{children:["During a BACKUP or a RESTORE job, StarRocks automatically backs up or restores the ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/using_starrocks/Materialized_view-single_table",children:"Synchronous materialized view"}),", which can still accelerate or rewrite your queries after data restoration. Currently, StarRocks does not support backing up views and ",(0,a.jsx)(t.a,{href:"/doc/en/3.0/using_starrocks/Materialized_view",children:"Asynchronous materialized views"}),". You can only back up the physical table of the materialized view, which cannot be used for query acceleration or query rewriting."]}),"\n",(0,a.jsx)(t.li,{children:"Currently, StarRocks does not support backing up the configuration data related to user accounts, privileges, and resource groups."}),"\n",(0,a.jsx)(t.li,{children:"Currently, StarRocks does not support backing up and restoring the Colocate Join relationship among tables."}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>r});var a=s(67294);const n=a.createContext({});function r(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:r(e),a.createElement(n.Provider,{value:i},t)}}}]);