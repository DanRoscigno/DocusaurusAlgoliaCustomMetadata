"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23018,71450,13409,47331,68882],{83598:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(85893),o=t(11151);const r={displayed_sidebar:"English"},n=void 0,d={id:"assets/commonMarkdown/sharedDataCNconf",title:"sharedDataCNconf",description:"Before starting CNs, add the following configuration items in the CN configuration file cn.conf:",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataCNconf.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataCNconf",permalink:"/doc/docs/assets/commonMarkdown/sharedDataCNconf",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/sharedDataCNconf.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},i={},l=[{value:"starlet_port",id:"starlet_port",level:4},{value:"storage_root_path",id:"storage_root_path",level:4}];function c(e){const a=Object.assign({p:"p",strong:"strong",pre:"pre",code:"code",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Before starting CNs"}),", add the following configuration items in the CN configuration file ",(0,s.jsx)(a.strong,{children:"cn.conf"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Properties",children:"starlet_port = <starlet_port>\nstorage_root_path = <storage_root_path>\n"})}),"\n",(0,s.jsx)(a.h4,{id:"starlet_port",children:"starlet_port"}),"\n",(0,s.jsxs)(a.p,{children:["The CN heartbeat service port for the StarRocks shared-data cluster. Default value: ",(0,s.jsx)(a.code,{children:"9070"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"storage_root_path",children:"storage_root_path"}),"\n",(0,s.jsxs)(a.p,{children:["The storage volume directory that the local cached data depends on and the medium type of the storage. Multiple volumes are separated by semicolon (;). If the storage medium is SSD, add ",(0,s.jsx)(a.code,{children:",medium:ssd"})," at the end of the directory. If the storage medium is HDD, add ",(0,s.jsx)(a.code,{children:",medium:hdd"})," at the end of the directory. Example: ",(0,s.jsx)(a.code,{children:"/data1,medium:hdd;/data2,medium:ssd"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["The default value for ",(0,s.jsx)(a.code,{children:"storage_root_path"})," is ",(0,s.jsx)(a.code,{children:"${STARROCKS_HOME}/storage"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Local cache is effective when queries are frequent and the data being queried is recent, but there are cases that you may wish to turn off the local cache completely."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"In a Kubernetes environment with CN pods that scale up and down in number on demand, the pods may not have storage volumes attached."}),"\n",(0,s.jsx)(a.li,{children:"When the data being queried is in a data lake in remote storage and most of it is archive (old) data. If the queries are infrequent the data cache will have a low hit ratio and the benefit may not be worth having the cache."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"To turn off the data cache set:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Properties",children:"storage_root_path =\n"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(a.p,{children:["The data is cached under the directory ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.code,{children:"<storage_root_path>/starlet_cache"})}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},9423:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(85893),o=t(11151);const r={displayed_sidebar:"English"},n=void 0,d={id:"assets/commonMarkdown/sharedDataIntro",title:"sharedDataIntro",description:"This topic describes how to deploy and use a shared-data StarRocks cluster. This feature is supported from v3.0 for S3 compatible storage and v3.1 for Azure Blob Storage.",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataIntro.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataIntro",permalink:"/doc/docs/assets/commonMarkdown/sharedDataIntro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/sharedDataIntro.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},i={},l=[];function c(e){const a=Object.assign({p:"p",blockquote:"blockquote",strong:"strong",a:"a",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"This topic describes how to deploy and use a shared-data StarRocks cluster. This feature is supported from v3.0 for S3 compatible storage and v3.1 for Azure Blob Storage."}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(a.p,{children:"StarRocks version 3.1 brings some changes to the shared-data deployment and configuration. Please use this document if you are running version 3.1 or higher."}),"\n",(0,s.jsxs)(a.p,{children:["If you are running version 3.0 please use the\n",(0,s.jsx)(a.a,{href:"https://docs.starrocks.io/en-us/3.0/deployment/deploy_shared_data",children:"3.0 documentation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"The shared-data StarRocks cluster is specifically engineered for the cloud on the premise of separation of storage and compute. It allows data to be stored in object storage (for example, AWS S3, Google GCS, Azure Blob Storage, and MinIO). You can achieve not only cheaper storage and better resource isolation, but elastic scalability for your cluster. The query performance of the shared-data StarRocks cluster aligns with that of a shared-nothing StarRocks cluster when the local disk cache is hit."}),"\n",(0,s.jsx)(a.p,{children:"In version 3.1 and higher the StarRocks shared-data cluster is made up of Frontend Engines (FEs) and Compute Nodes (CNs). The CNs replace the classic Backend Engines (BEs) in shared-data clusters."}),"\n",(0,s.jsx)(a.p,{children:"Compared to the classic shared-nothing StarRocks architecture, separation of storage and compute offers a wide range of benefits. By decoupling these components, StarRocks provides:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Inexpensive and seamlessly scalable storage."}),"\n",(0,s.jsx)(a.li,{children:"Elastic scalable compute. Because data is not stored in Compute Nodes (CNs), scaling can be done without data migration or shuffling across nodes."}),"\n",(0,s.jsx)(a.li,{children:"Local disk cache for hot data to boost query performance."}),"\n",(0,s.jsx)(a.li,{children:"Asynchronous data ingestion into object storage, allowing a significant improvement in loading performance."}),"\n"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},94760:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(85893),o=t(11151);const r={displayed_sidebar:"English"},n=void 0,d={id:"assets/commonMarkdown/sharedDataUse",title:"sharedDataUse",description:"For more information on how to create a storage volume for other object storages and set the default storage volume, see CREATE STORAGE VOLUME and SET DEFAULT STORAGE VOLUME.",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataUse.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataUse",permalink:"/doc/docs/assets/commonMarkdown/sharedDataUse",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/sharedDataUse.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},i={},l=[{value:"Create a database and a cloud-native table",id:"create-a-database-and-a-cloud-native-table",level:3},{value:"datacache.enable",id:"datacacheenable",level:4},{value:"datacache.partition_duration",id:"datacachepartition_duration",level:4},{value:"enable_async_write_back",id:"enable_async_write_back",level:4},{value:"View table information",id:"view-table-information",level:3},{value:"Load data into a shared-data StarRocks cluster",id:"load-data-into-a-shared-data-starrocks-cluster",level:3},{value:"Query in a shared-data StarRocks cluster",id:"query-in-a-shared-data-starrocks-cluster",level:3}];function c(e){const a=Object.assign({p:"p",a:"a",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",h4:"h4"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["For more information on how to create a storage volume for other object storages and set the default storage volume, see ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})," and ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",children:"SET DEFAULT STORAGE VOLUME"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"create-a-database-and-a-cloud-native-table",children:"Create a database and a cloud-native table"}),"\n",(0,s.jsx)(a.p,{children:"After you create a default storage volume, you can then create a database and a cloud-native table using this storage volume."}),"\n",(0,s.jsx)(a.p,{children:"Currently, shared-data StarRocks clusters support the following table types:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Duplicate Key table"}),"\n",(0,s.jsx)(a.li,{children:"Aggregate table"}),"\n",(0,s.jsx)(a.li,{children:"Unique Key table"}),"\n",(0,s.jsx)(a.li,{children:"Primary Key table (Currently, the primary key persistent index is not supported.)"}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["The following example creates a database ",(0,s.jsx)(a.code,{children:"cloud_db"})," and a table ",(0,s.jsx)(a.code,{children:"detail_demo"})," based on Duplicate Key table type, enables the local disk cache, sets the hot data validity duration to one month, and disables asynchronous data ingestion into object storage:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE DATABASE cloud_db;\nUSE cloud_db;\nCREATE TABLE IF NOT EXISTS detail_demo (\n    recruit_date  DATE           NOT NULL COMMENT "YYYY-MM-DD",\n    region_num    TINYINT        COMMENT "range [-128, 127]",\n    num_plate     SMALLINT       COMMENT "range [-32768, 32767] ",\n    tel           INT            COMMENT "range [-2147483648, 2147483647]",\n    id            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    password      LARGEINT       COMMENT "range [-2^127 + 1 ~ 2^127 - 1]",\n    name          CHAR(20)       NOT NULL COMMENT "range char(m),m in (1-255) ",\n    profile       VARCHAR(500)   NOT NULL COMMENT "upper limit value 65533 bytes",\n    ispass        BOOLEAN        COMMENT "true/false")\nDUPLICATE KEY(recruit_date, region_num)\nDISTRIBUTED BY HASH(recruit_date, region_num)\nPROPERTIES (\n    "storage_volume" = "def_volume",\n    "datacache.enable" = "true",\n    "datacache.partition_duration" = "1 MONTH",\n    "enable_async_write_back" = "false"\n);\n'})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(a.p,{children:"The default storage volume is used when you create a database or a cloud-native table in a shared-data StarRocks cluster if no storage volume is specified."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["In addition to the regular table ",(0,s.jsx)(a.code,{children:"PROPERTIES"}),", you need to specify the following ",(0,s.jsx)(a.code,{children:"PROPERTIES"})," when creating a table for shared-data StarRocks cluster:"]}),"\n",(0,s.jsx)(a.h4,{id:"datacacheenable",children:"datacache.enable"}),"\n",(0,s.jsx)(a.p,{children:"Whether to enable the local disk cache."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"true"})," (Default) When this property is set to ",(0,s.jsx)(a.code,{children:"true"}),", the data to be loaded is simultaneously written into the object storage and the local disk (as the cache for query acceleration)."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"false"})," When this property is set to ",(0,s.jsx)(a.code,{children:"false"}),", the data is loaded only into the object storage."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(a.p,{children:["In version 3.0 this property was named ",(0,s.jsx)(a.code,{children:"enable_storage_cache"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["To enable the local disk cache, you must specify the directory of the disk in the CN configuration item ",(0,s.jsx)(a.code,{children:"storage_root_path"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"datacachepartition_duration",children:"datacache.partition_duration"}),"\n",(0,s.jsxs)(a.p,{children:["The validity duration of the hot data. When the local disk cache is enabled, all data is loaded into the cache. When the cache is full, StarRocks deletes the less recently used data from the cache. When a query needs to scan the deleted data, StarRocks checks if the data is within the duration of validity. If the data is within the duration, StarRocks loads the data into the cache again. If the data is not within the duration, StarRocks does not load it into the cache. This property is a string value that can be specified with the following units: ",(0,s.jsx)(a.code,{children:"YEAR"}),", ",(0,s.jsx)(a.code,{children:"MONTH"}),", ",(0,s.jsx)(a.code,{children:"DAY"}),", and ",(0,s.jsx)(a.code,{children:"HOUR"}),", for example, ",(0,s.jsx)(a.code,{children:"7 DAY"})," and ",(0,s.jsx)(a.code,{children:"12 HOUR"}),". If it is not specified, all data is cached as the hot data."]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(a.p,{children:["In version 3.0 this property was named ",(0,s.jsx)(a.code,{children:"storage_cache_ttl"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This property is available only when ",(0,s.jsx)(a.code,{children:"datacache.enable"})," is set to ",(0,s.jsx)(a.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"enable_async_write_back",children:"enable_async_write_back"}),"\n",(0,s.jsxs)(a.p,{children:["Whether to allow data to be written into object storage asynchronously. Default: ",(0,s.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"true"})," When this property is set to ",(0,s.jsx)(a.code,{children:"true"}),", the load task returns success as soon as the data is written into the local disk cache, and the data is written into the object storage asynchronously. This allows better loading performance, but it also risks data reliability under potential system failures."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"false"})," (Default) When this property is set to ",(0,s.jsx)(a.code,{children:"false"}),", the load task returns success only after the data is written into both object storage and the local disk cache. This guarantees higher availability but leads to lower loading performance."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"view-table-information",children:"View table information"}),"\n",(0,s.jsxs)(a.p,{children:["You can view the information of tables in a specific database using ",(0,s.jsx)(a.code,{children:'SHOW PROC "/dbs/<db_id>"'}),". See ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_PROC",children:"SHOW PROC"})," for more information."]}),"\n",(0,s.jsx)(a.p,{children:"Example:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Plain",children:'mysql> SHOW PROC "/dbs/xxxxx";\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| TableId | TableName   | IndexNum | PartitionColumnName | PartitionNum | State  | Type         | LastConsistencyCheckTime | ReplicaCount | PartitionType | StoragePath                  |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| 12003   | detail_demo | 1        | NULL                | 1            | NORMAL | CLOUD_NATIVE | NULL                     | 8            | UNPARTITIONED | s3://xxxxxxxxxxxxxx/1/12003/ |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n'})}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"Type"})," of a table in shared-data StarRocks cluster is ",(0,s.jsx)(a.code,{children:"CLOUD_NATIVE"}),". In the field ",(0,s.jsx)(a.code,{children:"StoragePath"}),", StarRocks returns the object storage directory where the table is stored."]}),"\n",(0,s.jsx)(a.h3,{id:"load-data-into-a-shared-data-starrocks-cluster",children:"Load data into a shared-data StarRocks cluster"}),"\n",(0,s.jsxs)(a.p,{children:["Shared-data StarRocks clusters support all loading methods provided by StarRocks. See ",(0,s.jsx)(a.a,{href:"/doc/docs/loading/Loading_intro",children:"Overview of data loading"})," for more information."]}),"\n",(0,s.jsx)(a.h3,{id:"query-in-a-shared-data-starrocks-cluster",children:"Query in a shared-data StarRocks cluster"}),"\n",(0,s.jsxs)(a.p,{children:["Tables in a shared-data StarRocks cluster support all types of queries provided by StarRocks. See StarRocks ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})," for more information."]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},41562:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(85893),o=t(11151);const r={displayed_sidebar:"English"},n=void 0,d={id:"assets/commonMarkdown/sharedDataUseIntro",title:"sharedDataUseIntro",description:"The usage of shared-data StarRocks clusters is also similar to that of a classic shared-nothing StarRocks cluster, except that the shared-data cluster uses storage volumes and cloud-native tables to store data in object storage.",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataUseIntro.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataUseIntro",permalink:"/doc/docs/assets/commonMarkdown/sharedDataUseIntro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/sharedDataUseIntro.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},i={},l=[{value:"Create default storage volume",id:"create-default-storage-volume",level:3}];function c(e){const a=Object.assign({p:"p",h3:"h3",blockquote:"blockquote",strong:"strong",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"The usage of shared-data StarRocks clusters is also similar to that of a classic shared-nothing StarRocks cluster, except that the shared-data cluster uses storage volumes and cloud-native tables to store data in object storage."}),"\n",(0,s.jsx)(a.h3,{id:"create-default-storage-volume",children:"Create default storage volume"}),"\n",(0,s.jsx)(a.p,{children:"You can use the built-in storage volumes that StarRocks automatically creates, or you can manually create and set the default storage volume. This section describes how to manually create and set the default storage volume."}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(a.p,{children:["If your shared-data StarRocks cluster is upgraded from v3.0, you do not need to define a default storage volume because StarRocks created one with the object storage-related properties you specified in the FE configuration file ",(0,s.jsx)(a.strong,{children:"fe.conf"}),". You can still create new storage volumes with other object storage resources and set the default storage volume differently."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["To give your shared-data StarRocks cluster permission to store data in your object storage, you must reference a storage volume when you create databases or cloud-native tables. A storage volume consists of the properties and credential information of the remote data storage. If you have deployed a new shared-data StarRocks cluster and disallow StarRocks to create a built-in storage volume (by specifying ",(0,s.jsx)(a.code,{children:"enable_load_volume_from_conf"})," as ",(0,s.jsx)(a.code,{children:"false"}),"), you must define a default storage volume before you can create databases and tables in the cluster."]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},86345:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var s=t(85893),o=t(11151),r=t(9423),n=t(83598),d=t(41562),i=t(94760);const l={displayed_sidebar:"English"},c="Use Azure Blob Storage for shared-data",h={id:"deployment/shared_data/azure",title:"Use Azure Blob Storage for shared-data",description:"Architecture",source:"@site/versioned_docs/version-3.1/deployment/shared_data/azure.md",sourceDirName:"deployment/shared_data",slug:"/deployment/shared_data/azure",permalink:"/doc/docs/deployment/shared_data/azure",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/deployment/shared_data/azure.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Deploy StarRocks using GCS",permalink:"/doc/docs/deployment/shared_data/gcs"},next:{title:"Use MinIO for shared-data",permalink:"/doc/docs/deployment/shared_data/minio"}},u={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Deploy a shared-data StarRocks cluster",id:"deploy-a-shared-data-starrocks-cluster",level:2},{value:"Configure FE nodes for shared-data StarRocks",id:"configure-fe-nodes-for-shared-data-starrocks",level:2},{value:"Example FE configuration for Azure Blob Storage",id:"example-fe-configuration-for-azure-blob-storage",level:3},{value:"All FE parameters related to shared-storage with Azure Blob Storage",id:"all-fe-parameters-related-to-shared-storage-with-azure-blob-storage",level:3},{value:"run_mode",id:"run_mode",level:4},{value:"cloud_native_meta_port",id:"cloud_native_meta_port",level:4},{value:"enable_load_volume_from_conf",id:"enable_load_volume_from_conf",level:4},{value:"cloud_native_storage_type",id:"cloud_native_storage_type",level:4},{value:"azure_blob_path",id:"azure_blob_path",level:4},{value:"azure_blob_endpoint",id:"azure_blob_endpoint",level:4},{value:"azure_blob_shared_key",id:"azure_blob_shared_key",level:4},{value:"azure_blob_sas_token",id:"azure_blob_sas_token",level:4},{value:"Configure CN nodes for shared-data StarRocks",id:"configure-cn-nodes-for-shared-data-starrocks",level:2},{value:"Use your shared-data StarRocks cluster",id:"use-your-shared-data-starrocks-cluster",level:2}];function m(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",img:"img",strong:"strong",a:"a",blockquote:"blockquote",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",h4:"h4"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"use-azure-blob-storage-for-shared-data",children:"Use Azure Blob Storage for shared-data"}),"\n","\n","\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsx)(a.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Shared-data Architecture",src:t(42482).Z+"",width:"902",height:"668"})}),"\n",(0,s.jsx)(a.h2,{id:"deploy-a-shared-data-starrocks-cluster",children:"Deploy a shared-data StarRocks cluster"}),"\n",(0,s.jsxs)(a.p,{children:["The deployment of a shared-data StarRocks cluster is similar to that of a shared-nothing StarRocks cluster. The only difference is that you need to deploy CNs instead of BEs in a shared-data cluster. This section only lists the extra FE and CN configuration items you need to add in the configuration files of FE and CN ",(0,s.jsx)(a.strong,{children:"fe.conf"})," and ",(0,s.jsx)(a.strong,{children:"cn.conf"})," when you deploy a shared-data StarRocks cluster. For detailed instructions on deploying a StarRocks cluster, see ",(0,s.jsx)(a.a,{href:"/doc/docs/deployment/deploy_manually",children:"Deploy StarRocks"}),"."]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Note"})}),"\n",(0,s.jsx)(a.p,{children:"Do not start the cluster until after it is configured for shared-storage in the next section of this document."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"configure-fe-nodes-for-shared-data-starrocks",children:"Configure FE nodes for shared-data StarRocks"}),"\n",(0,s.jsx)(a.p,{children:"Before starting the cluster configure the FEs and CNs. An example configuration is provided below, and then the details for each parameter are provided."}),"\n",(0,s.jsx)(a.h3,{id:"example-fe-configuration-for-azure-blob-storage",children:"Example FE configuration for Azure Blob Storage"}),"\n",(0,s.jsxs)(a.p,{children:["The example shared-data additions for your ",(0,s.jsx)(a.code,{children:"fe.conf"})," can be added to the ",(0,s.jsx)(a.code,{children:"fe.conf"})," file on each\nof your FE nodes."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Properties",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = AZBLOB\n\n# For example, testcontainer/subpath\nazure_blob_path = <blob_path>\n\n# For example, https://test.blob.core.windows.net\nazure_blob_endpoint = <endpoint_url>\n\nazure_blob_shared_key = <shared_key>\n"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"If you use shared access signatures (SAS) to access Azure Blob Storage, add the following configuration items:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Properties",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = AZBLOB\n\n# For example, testcontainer/subpath\nazure_blob_path = <blob_path>\n\n# For example, https://test.blob.core.windows.net\nazure_blob_endpoint = <endpoint_url>\n\nazure_blob_sas_token = <sas_token>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"CAUTION"})}),"\n",(0,s.jsx)(a.p,{children:"The hierarchical namespace must be disabled when you create the Azure Blob Storage Account."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"all-fe-parameters-related-to-shared-storage-with-azure-blob-storage",children:"All FE parameters related to shared-storage with Azure Blob Storage"}),"\n",(0,s.jsx)(a.h4,{id:"run_mode",children:"run_mode"}),"\n",(0,s.jsx)(a.p,{children:"The running mode of the StarRocks cluster. Valid values:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"shared_data"})}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"shared_nothing"})," (Default)."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Note"})}),"\n",(0,s.jsxs)(a.p,{children:["You cannot adopt the ",(0,s.jsx)(a.code,{children:"shared_data"})," and ",(0,s.jsx)(a.code,{children:"shared_nothing"})," modes simultaneously for a StarRocks cluster. Mixed deployment is not supported."]}),"\n",(0,s.jsxs)(a.p,{children:["Do not change ",(0,s.jsx)(a.code,{children:"run_mode"})," after the cluster is deployed. Otherwise, the cluster fails to restart. The transformation from a shared-nothing cluster to a shared-data cluster or vice versa is not supported."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"cloud_native_meta_port",children:"cloud_native_meta_port"}),"\n",(0,s.jsx)(a.p,{children:"The cloud-native meta service RPC port."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Default: ",(0,s.jsx)(a.code,{children:"6090"})]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"enable_load_volume_from_conf",children:"enable_load_volume_from_conf"}),"\n",(0,s.jsx)(a.p,{children:"Whether to allow StarRocks to create the default storage volume by using the object storage-related properties specified in the FE configuration file. Valid values:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"true"})," (Default) If you specify this item as ",(0,s.jsx)(a.code,{children:"true"})," when creating a new shared-data cluster, StarRocks creates the built-in storage volume ",(0,s.jsx)(a.code,{children:"builtin_storage_volume"})," using the object storage-related properties in the FE configuration file, and sets it as the default storage volume. However, if you have not specified the object storage-related properties, StarRocks fails to start."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"false"})," If you specify this item as ",(0,s.jsx)(a.code,{children:"false"})," when creating a new shared-data cluster, StarRocks starts directly without creating the built-in storage volume. You must manually create a storage volume and set it as the default storage volume before creating any object in StarRocks. For more information, see ",(0,s.jsx)(a.a,{href:"#create-default-storage-volume",children:"Create the default storage volume"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Supported from v3.1.0."}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(a.p,{children:["We strongly recommend you leave this item as ",(0,s.jsx)(a.code,{children:"true"})," while you are upgrading an existing shared-data cluster from v3.0. If you specify this item as ",(0,s.jsx)(a.code,{children:"false"}),", the databases and tables you created before the upgrade become read-only, and you cannot load data into them."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"cloud_native_storage_type",children:"cloud_native_storage_type"}),"\n",(0,s.jsx)(a.p,{children:"The type of object storage you use. In shared-data mode, StarRocks supports storing data in Azure Blob (supported from v3.1.1 onwards), and object storages that are compatible with the S3 protocol (such as AWS S3, Google GCP, and MinIO). Valid value:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"S3"})," (Default)"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"AZBLOB"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Note"}),"\n",(0,s.jsxs)(a.p,{children:["If you specify this parameter as ",(0,s.jsx)(a.code,{children:"S3"}),", you must add the parameters prefixed by ",(0,s.jsx)(a.code,{children:"aws_s3"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["If you specify this parameter as ",(0,s.jsx)(a.code,{children:"AZBLOB"}),", you must add the parameters prefixed by ",(0,s.jsx)(a.code,{children:"azure_blob"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"azure_blob_path",children:"azure_blob_path"}),"\n",(0,s.jsxs)(a.p,{children:["The Azure Blob Storage path used to store data. It consists of the name of the container within your storage account and the sub-path (if any) under the container, for example, ",(0,s.jsx)(a.code,{children:"testcontainer/subpath"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"azure_blob_endpoint",children:"azure_blob_endpoint"}),"\n",(0,s.jsxs)(a.p,{children:["The endpoint of your Azure Blob Storage Account, for example, ",(0,s.jsx)(a.code,{children:"https://test.blob.core.windows.net"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"azure_blob_shared_key",children:"azure_blob_shared_key"}),"\n",(0,s.jsx)(a.p,{children:"The Shared Key used to authorize requests for your Azure Blob Storage."}),"\n",(0,s.jsx)(a.h4,{id:"azure_blob_sas_token",children:"azure_blob_sas_token"}),"\n",(0,s.jsx)(a.p,{children:"The shared access signatures (SAS) used to authorize requests for your Azure Blob Storage."}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Note"})}),"\n",(0,s.jsx)(a.p,{children:"Only credential-related configuration items can be modified after your shared-data StarRocks cluster is created. If you changed the original storage path-related configuration items, the databases and tables you created before the change become read-only, and you cannot load data into them."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"If you want to create the default storage volume manually after the cluster is created, you only need to add the following configuration items:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Properties",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\nenable_load_volume_from_conf = false\n"})}),"\n",(0,s.jsx)(a.h2,{id:"configure-cn-nodes-for-shared-data-starrocks",children:"Configure CN nodes for shared-data StarRocks"}),"\n",(0,s.jsx)(n.default,{}),"\n",(0,s.jsx)(a.h2,{id:"use-your-shared-data-starrocks-cluster",children:"Use your shared-data StarRocks cluster"}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(a.p,{children:["The following example creates a storage volume ",(0,s.jsx)(a.code,{children:"def_volume"})," for an Azure Blob Storage bucket ",(0,s.jsx)(a.code,{children:"defaultbucket"})," with shared key access, enables the storage volume, and sets it as the default storage volume:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE STORAGE VOLUME def_volume\nTYPE = AZBLOB\nLOCATIONS = ("azblob://defaultbucket/test/")\nPROPERTIES\n(\n    "enabled" = "true",\n    "azure.blob.endpoint" = "<endpoint_url>",\n    "azure.blob.shared_key" = "<shared_key>"\n);\n\nSET def_volume AS DEFAULT STORAGE VOLUME;\n'})}),"\n",(0,s.jsx)(i.default,{})]})}const f=function(e={}){const{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}},42482:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/share_data_arch-1ea64217887964b4053c012cc808cb81.png"},11151:(e,a,t)=>{t.d(a,{Zo:()=>d,ah:()=>r});var s=t(67294);const o=s.createContext({});function r(e){const a=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const n={};function d({components:e,children:a,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||n:r(e),s.createElement(o.Provider,{value:d},a)}}}]);