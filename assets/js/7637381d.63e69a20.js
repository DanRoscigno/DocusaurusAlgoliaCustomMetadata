"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69435],{31016:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(85893),n=t(11151);const r={},l="File external table",i={id:"data_source/file_external_table",title:"File external table",description:"File external table is a special type of external table. It allows you to directly query Parquet and ORC data files in external storage systems without loading data into StarRocks. In addition, file external tables do not rely on a metastore. In the current version, StarRocks supports the following external storage systems: HDFS, Amazon S3, and S3-compatible storage systems.",source:"@site/versioned_docs/version-2.5/data_source/file_external_table.md",sourceDirName:"data_source",slug:"/data_source/file_external_table",permalink:"/doc/en/2.5/data_source/file_external_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/data_source/file_external_table.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Data Cache",permalink:"/doc/en/2.5/data_source/data_cache"},next:{title:"Deploy and manage Broker node",permalink:"/doc/en/2.5/deployment/deploy_broker"}},d={},c=[{value:"Limits",id:"limits",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a database (Optional)",id:"create-a-database-optional",level:2},{value:"Create a file external table",id:"create-a-file-external-table",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"FileLayoutParams",id:"filelayoutparams",level:4},{value:"StorageCredentialParams (Optional)",id:"storagecredentialparams-optional",level:4},{value:"AWS S3",id:"aws-s3",level:5},{value:"AWS S3-compatible storage",id:"aws-s3-compatible-storage",level:5},{value:"Mapping of column types",id:"mapping-of-column-types",level:4},{value:"Examples",id:"examples",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"AWS S3",id:"aws-s3-1",level:4},{value:"Query a file external table",id:"query-a-file-external-table",level:2},{value:"Manage file external tables",id:"manage-file-external-tables",level:2}];function o(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",strong:"strong",h5:"h5"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"file-external-table",children:"File external table"}),"\n",(0,a.jsx)(s.p,{children:"File external table is a special type of external table. It allows you to directly query Parquet and ORC data files in external storage systems without loading data into StarRocks. In addition, file external tables do not rely on a metastore. In the current version, StarRocks supports the following external storage systems: HDFS, Amazon S3, and S3-compatible storage systems."}),"\n",(0,a.jsx)(s.p,{children:"This feature is supported from StarRocks v2.5."}),"\n",(0,a.jsx)(s.h2,{id:"limits",children:"Limits"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["File external tables must be created in databases within the ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/data_source/catalog/default_catalog",children:"default_catalog"}),". You can run ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," to query catalogs created in the cluster."]}),"\n",(0,a.jsx)(s.li,{children:"Only Parquet and ORC data files are supported."}),"\n",(0,a.jsx)(s.li,{children:"You can only use file external tables to query data in the target data file. Data write operations such as INSERT, DELETE, and DROP are not supported."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(s.p,{children:["Before you create a file external table, you must configure your StarRocks cluster so that StarRocks can access the external storage system where the target data file is stored. The configurations required for a file external table are the same as those required for a Hive catalog, except that you do not need to configure a metastore. See ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/data_source/catalog/hive_catalog#integration-preparations",children:"Hive catalog - Integration preparations"})," for more information about configurations."]}),"\n",(0,a.jsx)(s.h2,{id:"create-a-database-optional",children:"Create a database (Optional)"}),"\n",(0,a.jsxs)(s.p,{children:["After connecting to your StarRocks cluster, you can create a file external table in an existing database or create a new database to manage file external tables. To query existing databases in the cluster, run ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"}),". Then you can run ",(0,a.jsx)(s.code,{children:"USE <db_name>"})," to switch to the target database."]}),"\n",(0,a.jsx)(s.p,{children:"The syntax for creating a database is as follows."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"CREATE DATABASE [IF NOT EXISTS] <db_name>\n"})}),"\n",(0,a.jsx)(s.h2,{id:"create-a-file-external-table",children:"Create a file external table"}),"\n",(0,a.jsx)(s.p,{children:"After accessing the target database, you can create a file external table in this database."}),"\n",(0,a.jsx)(s.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE <table_name>\n(\n    <col_name> <col_type> [NULL | NOT NULL] [COMMENT "<comment>"]\n) \nENGINE=file\nCOMMENT ["comment"]\nPROPERTIES\n(\n    FileLayoutParams,\n    StorageCredentialParams\n)\n'})}),"\n",(0,a.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Required"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"table_name"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["The name of the file external table. The naming conventions are as follows:",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:" The name can contain letters, digits (0-9), and underscores (_). It must start with a letter."}),(0,a.jsx)("li",{children:" The name cannot exceed 64 characters in length."})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"col_name"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The column name in the file external table. The column names in the file external table must be the same as those in the target data file but are not case-sensitive. The order of columns in the file external table can be different from that in the target data file."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"col_type"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["The column type in the file external table. You need to specify this parameter based on the column type in the target data file. For more information, see ",(0,a.jsx)(s.a,{href:"#mapping-of-column-types",children:"Mapping of column types"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"NULL | NOT NULL"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsxs)(s.td,{children:["Whether the column in the file external table is allowed to be NULL. ",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"NULL: NULL is allowed. "}),(0,a.jsx)("li",{children:"NOT NULL: NULL is not allowed."})]}),"You must specify this modifier based on the following rules: ",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"If this parameter is not specified for the columns in the target data file, you can choose not to specify it for the columns in the file external table or specify NULL for the columns in the file external table."}),(0,a.jsx)("li",{children:"If NULL is specified for the columns in the target data file, you can choose not to specify this parameter for the columns in the file external table or specify NULL for the columns in the file external table."}),(0,a.jsx)("li",{children:"If NOT NULL is specified for the columns in the target data file, you must also specify NOT NULL for the columns in the file external table."})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"comment"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsx)(s.td,{children:"The comment of column in the file external table."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"ENGINE"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The type of engine. Set the value to file."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"comment"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsx)(s.td,{children:"The description of the file external table."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"PROPERTIES"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(s.code,{children:"FileLayoutParams"}),": specifies the path and format of the target file. This property is required."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(s.code,{children:"StorageCredentialParams"}),": specifies the authentication information required for accessing object storage systems. This property is required only for AWS S3 and S3-compatible storage."]})]})})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"filelayoutparams",children:"FileLayoutParams"}),"\n",(0,a.jsx)(s.p,{children:"A set of parameters for accessing the target data file."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'"path" = "<file_path>",\n"format" = "<file_format>"\n"enable_recursive_listing" = "{ true | false }"\n'})}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Required"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"path"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["The path of the data file. ",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["If the data file is stored in HDFS, the path format is ",(0,a.jsx)(s.code,{children:"hdfs://<IP address of HDFS>:<port>/<path>"}),". The default port number is 8020. If you use the default port, you do not need to specify it."]}),(0,a.jsxs)("li",{children:["If the data file is stored in AWS S3, the path format is ",(0,a.jsx)(s.code,{children:"s3://<bucket name>/<folder>/"}),"."]})]})," Note the following rules when you enter the path: ",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["If you want to access all files in a path, end this parameter with a slash (",(0,a.jsx)(s.code,{children:"/"}),"), such as ",(0,a.jsx)(s.code,{children:"hdfs://x.x.x.x/user/hive/warehouse/array2d_parq/data/"}),". When you run a query, StarRocks traverses all data files under the path. It does not traverse data files by using recursion."]}),(0,a.jsxs)("li",{children:["If you want to access a single file, enter a path that directly points to this file, such as ",(0,a.jsx)(s.code,{children:"hdfs://x.x.x.x/user/hive/warehouse/array2d_parq/data"}),". When you run a query, StarRocks only scans this data file."]})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"format"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The format of the data file. Only Parquet and ORC are supported."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"enable_recursive_listing"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsx)(s.td,{children:"Specifies whether to recursively transverse all files under the current path. Default value: false."})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"storagecredentialparams-optional",children:"StorageCredentialParams (Optional)"}),"\n",(0,a.jsxs)(s.p,{children:["A set of parameters about how StarRocks integrates with the target storage system. This parameter set is ",(0,a.jsx)(s.strong,{children:"optional"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["You need to configure ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"})," only when the target storage system is AWS S3 or S3-compatible storage."]}),"\n",(0,a.jsxs)(s.p,{children:["For other storage systems, you can ignore ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsx)(s.h5,{id:"aws-s3",children:"AWS S3"}),"\n",(0,a.jsxs)(s.p,{children:["If you need to access a data file stored in AWS S3, configure the following authentication parameters in ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["If you choose the instance profile-based authentication method, configure ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-JavaScript",children:'"aws.s3.use_instance_profile" = "true",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["If you choose the assumed role-based authentication method, configure ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-JavaScript",children:'"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<ARN of your assumed role>",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["If you choose the IAM user-based authentication method, configure ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-JavaScript",children:'"aws.s3.use_instance_profile" = "false",\n"aws.s3.access_key" = "<iam_user_access_key>",\n"aws.s3.secret_key" = "<iam_user_secret_key>",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter name"}),(0,a.jsx)(s.th,{children:"Required"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.use_instance_profile"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication method when you access AWS S3. Valid values: ",(0,a.jsx)(s.code,{children:"true"})," and ",(0,a.jsx)(s.code,{children:"false"}),". Default value: ",(0,a.jsx)(s.code,{children:"false"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.iam_role_arn"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["The ARN of the IAM role that has privileges on your AWS S3 bucket. ",(0,a.jsx)("br",{}),"If you use the assumed role-based authentication method to access AWS S3, you must specify this parameter. Then, StarRocks will assume this role when it accesses the target data file."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.region"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The region in which your AWS S3 bucket resides. Example: us-west-1."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.access_key"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsx)(s.td,{children:"The access key of your IAM user. If you use the IAM user-based authentication method to access AWS S3, you must specify this parameter."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsx)(s.td,{children:"The secret key of your IAM user. If you use the IAM user-based authentication method to access AWS S3, you must specify this parameter."})]})]})]}),"\n",(0,a.jsxs)(s.p,{children:["For information about how to choose an authentication method for accessing AWS S3 and how to configure an access control policy in the AWS IAM Console, see ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/integrations/authenticate_to_aws_resources#authentication-parameters-for-accessing-aws-s3",children:"Authentication parameters for accessing AWS S3"}),"."]}),"\n",(0,a.jsx)(s.h5,{id:"aws-s3-compatible-storage",children:"AWS S3-compatible storage"}),"\n",(0,a.jsxs)(s.p,{children:["If you need to access an AWS S3-compatible storage system, such as MinIO, configure ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"})," as follows to ensure a successful integration:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.enable_ssl" = "{ true | false }",\n"aws.s3.enable_path_style_access" = "{ true | false }",\n"aws.s3.endpoint" = "<s3_endpoint>",\n"aws.s3.access_key" = "<iam_user_access_key>",\n"aws.s3.secret_key" = "<iam_user_secret_key>"\n'})}),"\n",(0,a.jsxs)(s.p,{children:["The following table describes the parameters you need to configure in ",(0,a.jsx)(s.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Required"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.enable_ssl"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["Specifies whether to enable SSL connection. ",(0,a.jsx)("br",{}),"Valid values: ",(0,a.jsx)(s.code,{children:"true"})," and ",(0,a.jsx)(s.code,{children:"false"}),". Default value: ",(0,a.jsx)(s.code,{children:"true"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.enable_path_style_access"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["Specifies whether to enable path-style access.",(0,a.jsx)("br",{}),"Valid values: ",(0,a.jsx)(s.code,{children:"true"})," and ",(0,a.jsx)(s.code,{children:"false"}),". Default value: ",(0,a.jsx)(s.code,{children:"false"}),". For MinIO, you must set the value to ",(0,a.jsx)(s.code,{children:"true"}),".",(0,a.jsx)("br",{}),"Path-style URLs use the following format: ",(0,a.jsx)(s.code,{children:"https://s3.<region_code>.amazonaws.com/<bucket_name>/<key_name>"}),". For example, if you create a bucket named ",(0,a.jsx)(s.code,{children:"DOC-EXAMPLE-BUCKET1"})," in the US West (Oregon) Region, and you want to access the ",(0,a.jsx)(s.code,{children:"alice.jpg"})," object in that bucket, you can use the following path-style URL: ",(0,a.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com/DOC-EXAMPLE-BUCKET1/alice.jpg"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.endpoint"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The endpoint used to connect to an S3-compatible storage system instead of AWS S3."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.access_key"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The access key of your IAM user."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The secret key of your IAM user."})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"mapping-of-column-types",children:"Mapping of column types"}),"\n",(0,a.jsx)(s.p,{children:"The following table provides the mapping of column types between the target data file and the file external table."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Data file"}),(0,a.jsx)(s.th,{children:"File external table"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"INT/INTEGER"}),(0,a.jsx)(s.td,{children:"INT"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"BIGINT"}),(0,a.jsx)(s.td,{children:"BIGINT"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"TIMESTAMP"}),(0,a.jsxs)(s.td,{children:["DATETIME. ",(0,a.jsx)("br",{}),"Note that TIMESTAMP is converted to DATETIME without a time zone based on the time zone setting of the current session and loses some of its precision."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"STRING"}),(0,a.jsx)(s.td,{children:"STRING"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"VARCHAR"}),(0,a.jsx)(s.td,{children:"VARCHAR"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"CHAR"}),(0,a.jsx)(s.td,{children:"CHAR"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"DOUBLE"}),(0,a.jsx)(s.td,{children:"DOUBLE"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"FLOAT"}),(0,a.jsx)(s.td,{children:"FLOAT"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"DECIMAL"}),(0,a.jsx)(s.td,{children:"DECIMAL"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"BOOLEAN"}),(0,a.jsx)(s.td,{children:"BOOLEAN"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"ARRAY"}),(0,a.jsx)(s.td,{children:"ARRAY"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"MAP"}),(0,a.jsx)(s.td,{children:"MAP"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"STRUCT"}),(0,a.jsx)(s.td,{children:"STRUCT"})]})]})]}),"\n",(0,a.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.h4,{id:"hdfs",children:"HDFS"}),"\n",(0,a.jsxs)(s.p,{children:["Create a file external table named ",(0,a.jsx)(s.code,{children:"t0"})," to query Parquet data files stored in an HDFS path."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\n\nCREATE EXTERNAL TABLE t0\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path"="hdfs://x.x.x.x:8020/user/hive/warehouse/person_parq/", \n    "format"="parquet"\n);\n'})}),"\n",(0,a.jsx)(s.h4,{id:"aws-s3-1",children:"AWS S3"}),"\n",(0,a.jsxs)(s.p,{children:["Example 1: Create a file external table and use ",(0,a.jsx)(s.strong,{children:"instance profile"})," to access ",(0,a.jsx)(s.strong,{children:"a single Parquet file"})," in AWS S3."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\n\nCREATE EXTERNAL TABLE table_1\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path" = "s3://bucket-test/folder1/raw_0.parquet", \n    "format" = "parquet",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2" \n);\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Example 2: Create a file external table and use ",(0,a.jsx)(s.strong,{children:"assumed role"})," to access ",(0,a.jsx)(s.strong,{children:"all the ORC files"})," under the target file path in AWS S3."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\n\nCREATE EXTERNAL TABLE table_1\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path" = "s3://bucket-test/folder1/", \n    "format" = "orc",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::51234343412:role/role_name_in_aws_iam",\n    "aws.s3.region" = "us-west-2" \n);\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Example 3: Create a file external table and use ",(0,a.jsx)(s.strong,{children:"IAM user"})," to access ",(0,a.jsx)(s.strong,{children:"all the ORC files"})," under the file path in AWS S3."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\n\nCREATE EXTERNAL TABLE table_1\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path" = "s3://bucket-test/folder1/", \n    "format" = "orc",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_access_key>",\n    "aws.s3.region" = "us-west-2" \n);\n'})}),"\n",(0,a.jsx)(s.h2,{id:"query-a-file-external-table",children:"Query a file external table"}),"\n",(0,a.jsx)(s.p,{children:"Syntax:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"SELECT <clause> FROM <file_external_table>\n"})}),"\n",(0,a.jsxs)(s.p,{children:["For example, to query data from the file external table ",(0,a.jsx)(s.code,{children:"t0"})," created in ",(0,a.jsx)(s.a,{href:"#examples",children:"Examples - HDFS"}),", run the following command:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-plain",children:"SELECT * FROM t0;\n\n+--------+------+\n| name   | id   |\n+--------+------+\n| jack   |    2 |\n| lily   |    1 |\n+--------+------+\n2 rows in set (0.08 sec)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"manage-file-external-tables",children:"Manage file external tables"}),"\n",(0,a.jsxs)(s.p,{children:["You can view the schema of the table using ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})," or drop the table using ",(0,a.jsx)(s.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/DROP_TABLE",children:"DROP TABLE"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>r});var a=t(67294);const n=a.createContext({});function r(e){const s=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:r(e),a.createElement(n.Provider,{value:i},s)}}}]);