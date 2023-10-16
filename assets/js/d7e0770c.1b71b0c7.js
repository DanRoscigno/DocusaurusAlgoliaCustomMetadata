"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77388],{75948:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(85893),n=t(11151);const r={displayed_sidebar:"English"},c="CREATE EXTERNAL CATALOG",l={id:"sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",title:"CREATE EXTERNAL CATALOG",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE DATABASE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_DATABASE"},next:{title:"CREATE INDEX",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_INDEX"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"create-external-catalog",children:"CREATE EXTERNAL CATALOG"}),"\n",(0,s.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(a.p,{children:"Creates an external catalog. You can use external catalogs to query data in external data sources without loading data into StarRocks or creating external tables. Currently, you can create the following types of external catalogs:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),": used for querying data from Apache Hive\u2122."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),": used for querying data from Apache Iceberg."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/hudi_catalog",children:"Hudi catalog"}),": used for querying data from Apache Hudi."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"}),": used to query data from Delta Lake."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/jdbc_catalog",children:"JDBC catalog"}),": used to query data from JDBC-compatible data sources."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"In v3.0 and later, this statement requires SYSTEM-level CREATE EXTERNAL CATALOG privilege."}),"\n",(0,s.jsxs)(a.li,{children:['Before you create external catalogs, configure your StarRocks cluster to meet the requirements of the data storage system (such as Amazon S3), metadata service (such as Hive metastore), and authenticating service (such as Kerberos) of external data sources. For more information, see the "Before you begin" section in each ',(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/catalog_overview",children:"external catalog topic"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG <catalog_name>\n[COMMENT <comment>]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,s.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Parameter"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Required"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Description"})})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"catalog_name"}),(0,s.jsx)(a.td,{children:"Yes"}),(0,s.jsxs)(a.td,{children:["The name of the external catalog. The naming conventions are as follows:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"The name can contain letters, digits (0-9), and underscores (_). It must start with a letter."}),(0,s.jsx)("li",{children:"The name is case-sensitive and cannot exceed 1023 characters in length."})]})]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"comment"}),(0,s.jsx)(a.td,{children:"No"}),(0,s.jsx)(a.td,{children:"The description of the external catalog."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"PROPERTIES"}),(0,s.jsx)(a.td,{children:"Yes"}),(0,s.jsxs)(a.td,{children:["The properties of an external catalog. Configure properties based on the types of external catalogs. For more information, see ",(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),", ",(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),", ",(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/hudi_catalog",children:"Hudi catalog"}),", ",(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"}),", and ",(0,s.jsx)(a.a,{href:"/doc/docs/data_source/catalog/jdbc_catalog",children:"JDBC Catalog"}),"."]})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(a.p,{children:["Example 1: Create a Hive catalog named ",(0,s.jsx)(a.code,{children:"hive_metastore_catalog"}),". The corresponding Hive cluster uses Hive metastore as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_metastore_catalog\nPROPERTIES(\n   "type"="hive", \n   "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 2: Create a Hive catalog named ",(0,s.jsx)(a.code,{children:"hive_glue_catalog"}),". The corresponding Hive cluster uses AWS Glue as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_glue_catalog\nPROPERTIES(\n    "type"="hive", \n    "hive.metastore.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 3: Create an Iceberg catalog named ",(0,s.jsx)(a.code,{children:"iceberg_metastore_catalog"}),". The corresponding Iceberg cluster uses Hive metastore as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_metastore_catalog\nPROPERTIES(\n    "type"="iceberg",\n    "iceberg.catalog.type"="hive",\n    "iceberg.catalog.hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 4: Create an Iceberg catalog named ",(0,s.jsx)(a.code,{children:"iceberg_glue_catalog"}),". The corresponding Iceberg cluster uses AWS Glue as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_glue_catalog\nPROPERTIES(\n    "type"="iceberg", \n    "iceberg.catalog.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 5: Create a Hudi catalog named ",(0,s.jsx)(a.code,{children:"hudi_metastore_catalog"}),". The corresponding Hudi cluster uses Hive metastore as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hudi_metastore_catalog\nPROPERTIES(\n    "type"="hudi",\n    "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 6: Create a Hudi catalog named ",(0,s.jsx)(a.code,{children:"hudi_glue_catalog"}),". The corresponding Hudi cluster uses AWS Glue as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hudi_glue_catalog\nPROPERTIES(\n    "type"="hudi", \n    "hive.metastore.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 7: Create a Delta Lake catalog named ",(0,s.jsx)(a.code,{children:"delta_metastore_catalog"}),". The corresponding Delta Lake service uses Hive metastore as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG delta_metastore_catalog\nPROPERTIES(\n    "type"="deltalake",\n    "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Example 8: Create a Delta Lake catalog named ",(0,s.jsx)(a.code,{children:"delta_glue_catalog"}),". The corresponding Delta Lake service uses AWS Glue as its metadata service."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG delta_glue_catalog\nPROPERTIES(\n    "type"="deltalake", \n    "hive.metastore.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["To view all catalogs in your StarRocks cluster, see ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["To view the creation statement of an external catalog, see ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",children:"SHOW CREATE CATALOG"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["To delete an external catalog from your StarRocks cluster, see ",(0,s.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_CATALOG",children:"DROP CATALOG"}),"."]}),"\n"]})]})}const x=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>l,ah:()=>r});var s=t(67294);const n=s.createContext({});function r(e){const a=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function l({components:e,children:a,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(n.Provider,{value:l},a)}}}]);