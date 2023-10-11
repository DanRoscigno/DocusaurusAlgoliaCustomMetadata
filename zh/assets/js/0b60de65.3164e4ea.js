"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31268],{98600:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(85893),n=t(11151);const r={},o="Deploy and use shared-data StarRocks",d={id:"deployment/deploy_shared_data",title:"Deploy and use shared-data StarRocks",description:"This topic describes how to deploy and use a shared-data StarRocks cluster.",source:"@site/versioned_docs/version-2.5/deployment/deploy_shared_data.md",sourceDirName:"deployment",slug:"/deployment/deploy_shared_data",permalink:"/doc/zh/docs/2.5/deployment/deploy_shared_data",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/deployment/deploy_shared_data.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u624b\u52a8\u90e8\u7f72 StarRocks",permalink:"/doc/zh/docs/2.5/deployment/deploy_manually"},next:{title:"\u90e8\u7f72\u603b\u89c8",permalink:"/doc/zh/docs/2.5/deployment/deployment_overview"}},i={},c=[{value:"Deploy a shared-data StarRocks cluster",id:"deploy-a-shared-data-starrocks-cluster",level:2},{value:"Configure FE nodes for shared-data StarRocks",id:"configure-fe-nodes-for-shared-data-starrocks",level:3},{value:"Configure BE nodes for shared-data StarRocks",id:"configure-be-nodes-for-shared-data-starrocks",level:3},{value:"Use your shared-data StarRocks cluster",id:"use-your-shared-data-starrocks-cluster",level:2},{value:"Create a table",id:"create-a-table",level:3},{value:"View table information",id:"view-table-information",level:3},{value:"Load data into a shared-data StarRocks cluster",id:"load-data-into-a-shared-data-starrocks-cluster",level:3},{value:"Query in a shared-data StarRocks cluster",id:"query-in-a-shared-data-starrocks-cluster",level:3}];function l(e){const s=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",img:"img",h2:"h2",strong:"strong",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",blockquote:"blockquote"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"deploy-and-use-shared-data-starrocks",children:"Deploy and use shared-data StarRocks"}),"\n",(0,a.jsx)(s.p,{children:"This topic describes how to deploy and use a shared-data StarRocks cluster."}),"\n",(0,a.jsx)(s.p,{children:"The shared-data StarRocks cluster is specifically engineered for the cloud on the premise of separation of storage and compute. It allows data to be stored in object storage that is compatible with the S3 protocol (for example, AWS S3 and MinIO). You can achieve not only cheaper storage and better resource isolation, but elastic scalability for your cluster. The query performance of the shared-data StarRocks cluster aligns with that of a classic cluster in case of local cache hits."}),"\n",(0,a.jsx)(s.p,{children:"Compared to the classic StarRocks architecture, separation of storage and compute offers a wide range of benefits. By decoupling these components, StarRocks provides:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Inexpensive and seamlessly scalable storage."}),"\n",(0,a.jsx)(s.li,{children:"Elastic scalable compute. Because data is no longer stored in BE nodes, scaling can be done without data migration or shuffling across nodes."}),"\n",(0,a.jsx)(s.li,{children:"Local disk cache for hot data to boost query performance."}),"\n",(0,a.jsx)(s.li,{children:"Adjustable time-to-live (TTL) for cached hot data. StarRocks automatically removes the expired cached data to save the local disk space."}),"\n",(0,a.jsx)(s.li,{children:"Asynchronous data ingestion into object storage, allowing a significant improvement in loading performance."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"The architecture of the shared-data StarRocks cluster is as follows:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Shared-data Architecture",src:t(10720).Z+"",width:"3608",height:"2672"})}),"\n",(0,a.jsx)(s.p,{children:"This feature is supported from v3.0."}),"\n",(0,a.jsx)(s.h2,{id:"deploy-a-shared-data-starrocks-cluster",children:"Deploy a shared-data StarRocks cluster"}),"\n",(0,a.jsxs)(s.p,{children:["The deployment of a shared-data StarRocks cluster is similar to that of a classic StarRocks cluster. The only difference is the parameters in the configuration files of FE and BE ",(0,a.jsx)(s.strong,{children:"fe.conf"})," and ",(0,a.jsx)(s.strong,{children:"be.conf"}),". This section only lists the FE and BE configuration items you need to add to the configuration files when you deploy a shared-data StarRocks cluster. For detailed instructions on deploying a StarRocks cluster, see ",(0,a.jsx)(s.a,{href:"../deployment/deploy_manually.md",children:"Deploy StarRocks"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"configure-fe-nodes-for-shared-data-starrocks",children:"Configure FE nodes for shared-data StarRocks"}),"\n",(0,a.jsxs)(s.p,{children:["Before starting FEs, add the following configuration items in the FE configuration file ",(0,a.jsx)(s.strong,{children:"fe.conf"}),":"]}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Configuration item"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"run_mode"}),(0,a.jsxs)(s.td,{children:["The running mode of the StarRocks cluster. Valid values: ",(0,a.jsx)(s.code,{children:"shared_data"})," and ",(0,a.jsx)(s.code,{children:"shared_nothing"})," (Default). ",(0,a.jsx)("br",{}),(0,a.jsx)(s.code,{children:"shared_data"})," indicates running StarRocks in shared-data mode. ",(0,a.jsx)(s.code,{children:"shared_nothing"})," indicates running StarRocks in classic mode.",(0,a.jsx)("br",{}),(0,a.jsx)(s.strong,{children:"CAUTION"}),(0,a.jsx)("br",{}),"You cannot adopt the ",(0,a.jsx)(s.code,{children:"shared_data"})," and ",(0,a.jsx)(s.code,{children:"shared_nothing"})," modes simultaneously for a StarRocks cluster. Mixed deployment is not supported.",(0,a.jsx)("br",{}),"DO NOT change ",(0,a.jsx)(s.code,{children:"run_mode"})," after the cluster is deployed. Otherwise, the cluster fails to restart. The transformation from a classic cluster to a shared-data cluster or vice versa is not supported."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"cloud_native_meta_port"}),(0,a.jsxs)(s.td,{children:["The cloud-native meta service RPC port. Default: ",(0,a.jsx)(s.code,{children:"6090"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"cloud_native_storage_type"}),(0,a.jsxs)(s.td,{children:["The type of object storage you use. Valid value: ",(0,a.jsx)(s.code,{children:"S3"})," (Default)."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_path"}),(0,a.jsx)(s.td,{children:"The S3 path used to store data. It consists of the name of your S3 bucket and the sub-path (if any) under it."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_endpoint"}),(0,a.jsxs)(s.td,{children:["The endpoint used to access your S3 bucket, for example, ",(0,a.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_region"}),(0,a.jsxs)(s.td,{children:["The region in which your S3 bucket resides, for example, ",(0,a.jsx)(s.code,{children:"us-west-2"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_use_aws_sdk_default_behavior"}),(0,a.jsxs)(s.td,{children:["Whether to use the default authentication credential of AWS SDK. Valid values: ",(0,a.jsx)(s.code,{children:"true"})," and ",(0,a.jsx)(s.code,{children:"false"})," (Default)."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_use_instance_profile"}),(0,a.jsxs)(s.td,{children:["Whether to use Instance Profile and Assumed Role as credential methods for accessing S3. Valid values: ",(0,a.jsx)(s.code,{children:"true"})," and ",(0,a.jsx)(s.code,{children:"false"})," (Default). ",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["If you use IAM user-based credential (Access Key and Secret Key) to access S3, you must specify this item as ",(0,a.jsx)(s.code,{children:"false"}),", and specify ",(0,a.jsx)(s.code,{children:"aws_s3_access_key"})," and ",(0,a.jsx)(s.code,{children:"aws_s3_secret_key"}),". "]}),(0,a.jsxs)("li",{children:["If you use Instance Profile to access S3, you must specify this item as ",(0,a.jsx)(s.code,{children:"true"}),". "]}),(0,a.jsxs)("li",{children:["If you use Assumed Role to access S3, you must specify this item as ",(0,a.jsx)(s.code,{children:"true"}),", and specify ",(0,a.jsx)(s.code,{children:"aws_s3_iam_role_arn"}),". "]}),(0,a.jsxs)("li",{children:["And if you use an external AWS account,  you must also specify ",(0,a.jsx)(s.code,{children:"aws_s3_external_id"}),"."]})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_access_key"}),(0,a.jsx)(s.td,{children:"The Access Key ID used to access your S3 bucket."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_secret_key"}),(0,a.jsx)(s.td,{children:"The Secret Access Key used to access your S3 bucket."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_iam_role_arn"}),(0,a.jsx)(s.td,{children:"The ARN of the IAM role that has privileges on your S3 bucket in which your data files are stored."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws_s3_external_id"}),(0,a.jsx)(s.td,{children:"The external ID of the AWS account that is used for cross-account access to your S3 bucket."})]})]})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use AWS S3"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use the default authentication credential of AWS SDK to access S3, add the following configuration items:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\naws_s3_region = <region>\naws_s3_endpoint = <endpoint_url>\naws_s3_use_aws_sdk_default_behavior = true\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use IAM user-based credential (Access Key and Secret Key) to access S3, add the following configuration items:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\naws_s3_region = <region>\naws_s3_endpoint = <endpoint_url>\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use Instance Profile to access S3, add the following configuration items:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\naws_s3_region = <region>\naws_s3_endpoint = <endpoint_url>\naws_s3_use_instance_profile = true\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use Assumed Role to access S3, add the following configuration items:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\naws_s3_region = <region>\naws_s3_endpoint = <endpoint_url>\naws_s3_use_instance_profile = true\naws_s3_iam_role_arn = <role_arn>\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use Assumed Role to access S3 from an external AWS account, add the following configuration items:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\naws_s3_region = <region>\naws_s3_endpoint = <endpoint_url>\naws_s3_use_instance_profile = true\naws_s3_iam_role_arn = <role_arn>\naws_s3_external_id = <external_id>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use GCP Cloud Storage:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\n\n# For example: us-east-1\naws_s3_region = <region>\n\n# For example: https://storage.googleapis.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you use MinIO:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\n\n# For example: us-east-1\naws_s3_region = <region>\n\n# For example: http://172.26.xx.xxx:39000\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"configure-be-nodes-for-shared-data-starrocks",children:"Configure BE nodes for shared-data StarRocks"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Before starting BEs"}),", add the following configuration items in the BE configuration file ",(0,a.jsx)(s.strong,{children:"be.conf"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:"starlet_port = <starlet_port>\nstorage_root_path = <storage_root_path>\n"})}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Configuration item"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"starlet_port"}),(0,a.jsxs)(s.td,{children:["The BE heartbeat service port. Default value: ",(0,a.jsx)(s.code,{children:"9070"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"storage_root_path"}),(0,a.jsxs)(s.td,{children:["The storage volume directory that the local cached data depends on and the medium type of the storage. Multiple volumes are separated by semicolon (;). If the storage medium is SSD, add ",(0,a.jsx)(s.code,{children:",medium:ssd"})," at the end of the directory. If the storage medium is HDD, add ",(0,a.jsx)(s.code,{children:",medium:hdd"})," at the end of the directory. Example: ",(0,a.jsx)(s.code,{children:"/data1,medium:hdd;/data2,medium:ssd"}),". Default value: ",(0,a.jsx)(s.code,{children:"${STARROCKS_HOME}/storage"}),"."]})]})]})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(s.p,{children:["The data is cached under the directory ",(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"<storage_root_path>/starlet_cache"})}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"use-your-shared-data-starrocks-cluster",children:"Use your shared-data StarRocks cluster"}),"\n",(0,a.jsx)(s.p,{children:"The usage of shared-data StarRocks clusters is also similar to that of a classic StarRocks cluster. The only difference is that you must create a special table to use object storage for your data."}),"\n",(0,a.jsx)(s.h3,{id:"create-a-table",children:"Create a table"}),"\n",(0,a.jsx)(s.p,{children:"After connecting to your shared-data StarRocks cluster, create a database and then table in the database. Currently, shared-data StarRocks clusters support the following table types:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Duplicate Key table"}),"\n",(0,a.jsx)(s.li,{children:"Aggregate table"}),"\n",(0,a.jsx)(s.li,{children:"Unique Key table"}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(s.p,{children:"Currently, Primary Key table is not supported on StarRocks shared-data clusters."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The following example creates a database ",(0,a.jsx)(s.code,{children:"cloud_db"})," and a table ",(0,a.jsx)(s.code,{children:"detail_demo"})," based on Duplicate Key table type, enables the local disk cache, sets the cache expiration time to 30 days, and disables asynchronous data ingestion into object storage:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CREATE DATABASE cloud_db;\nUSE cloud_db;\nCREATE TABLE IF NOT EXISTS detail_demo (\n    recruit_date  DATE           NOT NULL COMMENT "YYYY-MM-DD",\n    region_num    TINYINT        COMMENT "range [-128, 127]",\n    num_plate     SMALLINT       COMMENT "range [-32768, 32767] ",\n    tel           INT            COMMENT "range [-2147483648, 2147483647]",\n    id            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    password      LARGEINT       COMMENT "range [-2^127 + 1 ~ 2^127 - 1]",\n    name          CHAR(20)       NOT NULL COMMENT "range char(m),m in (1-255) ",\n    profile       VARCHAR(500)   NOT NULL COMMENT "upper limit value 65533 bytes",\n    ispass        BOOLEAN        COMMENT "true/false"\n)\nDUPLICATE KEY(recruit_date, region_num)\nDISTRIBUTED BY HASH(recruit_date, region_num) BUCKETS 96\nPROPERTIES (\n    "enable_storage_cache" = "true",\n    "storage_cache_ttl" = "2592000",\n    "enable_async_write_back" = "false"\n);\n'})}),"\n",(0,a.jsx)(s.p,{children:"In addition to the regular table PROPERTIES, you need to specify the following PROPERTIES when creating a table for shared-data StarRocks cluster:"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Property"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"enable_storage_cache"}),(0,a.jsxs)(s.td,{children:["Whether to enable the local disk cache. Default: ",(0,a.jsx)(s.code,{children:"true"}),".",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["When this property is set to ",(0,a.jsx)(s.code,{children:"true"}),", the data to be loaded is simultaneously written into the object storage and the local disk (as the cache for query acceleration)."]}),(0,a.jsxs)("li",{children:["When this property is set to ",(0,a.jsx)(s.code,{children:"false"}),", the data is loaded only into the object storage."]})]}),(0,a.jsx)(s.strong,{children:"NOTE"}),(0,a.jsx)("br",{}),"To enable the local disk cache, you must specify the directory of the disk in the BE configuration item ",(0,a.jsx)(s.code,{children:"starlet_cache_dir"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"storage_cache_ttl"}),(0,a.jsxs)(s.td,{children:["The duration for which StarRocks caches the loaded data in the local disk if the local disk cache is enabled. The expired data is deleted from the local disk. If the value is set to ",(0,a.jsx)(s.code,{children:"-1"}),", the cached data does not expire. Default: ",(0,a.jsx)(s.code,{children:"2592000"})," (30 days).",(0,a.jsx)("br",{}),(0,a.jsx)(s.strong,{children:"CAUTION"}),(0,a.jsx)("br",{}),"If you disabled the local disk cache, you do not need to set this configuration item. Setting this item to a value other than ",(0,a.jsx)(s.code,{children:"0"})," when the local disk cache is disabled will cause unexpected behaviors of StarRocks."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"enable_async_write_back"}),(0,a.jsxs)(s.td,{children:["Whether to allow data to be written into object storage asynchronously. Default: ",(0,a.jsx)(s.code,{children:"false"}),".",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["When this property is set to ",(0,a.jsx)(s.code,{children:"true"}),", the load task returns success as soon as the data is written into the local disk cache, and the data is written into the object storage asynchronously. This allows better loading performance, but it also risks data reliability under potential system failures."]}),(0,a.jsxs)("li",{children:["When this property is set to ",(0,a.jsx)(s.code,{children:"false"}),", the load task returns success only after the data is written into both object storage and the local disk cache. This guarantees higher availability but leads to lower loading performance."]})]})]})]})]})]}),"\n",(0,a.jsx)(s.h3,{id:"view-table-information",children:"View table information"}),"\n",(0,a.jsxs)(s.p,{children:["You can view the information of tables in a specific database using ",(0,a.jsx)(s.code,{children:'SHOW PROC "/dbs/<db_id>"'}),". See ",(0,a.jsx)(s.a,{href:"../sql-reference/sql-statements/Administration/SHOW%20PROC.md",children:"SHOW PROC"})," for more information."]}),"\n",(0,a.jsx)(s.p,{children:"Example:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plain",children:'mysql> SHOW PROC "/dbs/xxxxx";\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| TableId | TableName   | IndexNum | PartitionColumnName | PartitionNum | State  | Type         | LastConsistencyCheckTime | ReplicaCount | PartitionType | StoragePath                  |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| 12003   | detail_demo | 1        | NULL                | 1            | NORMAL | CLOUD_NATIVE | NULL                     | 8            | UNPARTITIONED | s3://xxxxxxxxxxxxxx/1/12003/ |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n'})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"Type"})," of a table in shared-data StarRocks cluster is ",(0,a.jsx)(s.code,{children:"CLOUD_NATIVE"}),". In the field ",(0,a.jsx)(s.code,{children:"StoragePath"}),", StarRocks returns the object storage directory where the table is stored."]}),"\n",(0,a.jsx)(s.h3,{id:"load-data-into-a-shared-data-starrocks-cluster",children:"Load data into a shared-data StarRocks cluster"}),"\n",(0,a.jsxs)(s.p,{children:["Shared-data StarRocks clusters support all loading methods provided by StarRocks. See ",(0,a.jsx)(s.a,{href:"../loading/Loading_intro.md",children:"Overview of data loading"})," for more information."]}),"\n",(0,a.jsx)(s.h3,{id:"query-in-a-shared-data-starrocks-cluster",children:"Query in a shared-data StarRocks cluster"}),"\n",(0,a.jsxs)(s.p,{children:["Tables in a shared-data StarRocks cluster support all types of queries provided by StarRocks. See StarRocks ",(0,a.jsx)(s.a,{href:"../sql-reference/sql-statements/data-manipulation/SELECT.md",children:"SELECT"})," for more information."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},10720:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/share_data_arch-945ee6fc71ffd738afe635fd3bd45030.png"},11151:(e,s,t)=>{t.d(s,{Zo:()=>d,ah:()=>r});var a=t(67294);const n=a.createContext({});function r(e){const s=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function d({components:e,children:s,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(n.Provider,{value:d},s)}}}]);