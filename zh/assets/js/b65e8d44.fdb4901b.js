"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45446],{1665:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=n(85893),s=n(11151);const t={displayed_sidebar:"Chinese"},i="\u914d\u7f6e GCS \u8ba4\u8bc1\u4fe1\u606f",a={id:"integrations/authenticate_to_gcs",title:"\u914d\u7f6e GCS \u8ba4\u8bc1\u4fe1\u606f",description:"\u8ba4\u8bc1\u65b9\u5f0f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/integrations/authenticate_to_gcs.md",sourceDirName:"integrations",slug:"/integrations/authenticate_to_gcs",permalink:"/doc/zh/docs/integrations/authenticate_to_gcs",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/integrations/authenticate_to_gcs.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u914d\u7f6e Microsoft Azure Storage \u8ba4\u8bc1\u4fe1\u606f",permalink:"/doc/zh/docs/integrations/authenticate_to_azure_storage"},next:{title:"BI \u96c6\u6210",permalink:"/doc/zh/docs/category/bi-\u96c6\u6210"}},d={},l=[{value:"\u8ba4\u8bc1\u65b9\u5f0f\u4ecb\u7ecd",id:"\u8ba4\u8bc1\u65b9\u5f0f\u4ecb\u7ecd",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"External Catalog",id:"external-catalog",level:3},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868",level:3},{value:"Broker load",id:"broker-load",level:3},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:2},{value:"\u57fa\u4e8e VM \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-vm-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"\u57fa\u4e8e Service Account \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-service-account-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"\u57fa\u4e8e Impersonation \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-impersonation-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"\u4f7f\u7528\u4e00\u4e2a VM \u5b9e\u4f8b\u6a21\u62df\u4e00\u4e2a Service Account",id:"\u4f7f\u7528\u4e00\u4e2a-vm-\u5b9e\u4f8b\u6a21\u62df\u4e00\u4e2a-service-account",level:4},{value:"\u4f7f\u7528\u4e00\u4e2a Service Account \u6a21\u62df\u53e6\u5916\u4e00\u4e2a Service Account",id:"\u4f7f\u7528\u4e00\u4e2a-service-account-\u6a21\u62df\u53e6\u5916\u4e00\u4e2a-service-account",level:4}];function o(e){const c=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.h1,{id:"\u914d\u7f6e-gcs-\u8ba4\u8bc1\u4fe1\u606f",children:"\u914d\u7f6e GCS \u8ba4\u8bc1\u4fe1\u606f"}),"\n",(0,r.jsx)(c.h2,{id:"\u8ba4\u8bc1\u65b9\u5f0f\u4ecb\u7ecd",children:"\u8ba4\u8bc1\u65b9\u5f0f\u4ecb\u7ecd"}),"\n",(0,r.jsx)(c.p,{children:"StarRocks \u4ece 3.0 \u7248\u672c\u8d77\u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u8ba4\u8bc1\u65b9\u5f0f\u8bbf\u95ee Google Cloud Storage\uff08\u7b80\u79f0 GCS\uff09\uff1a"}),"\n",(0,r.jsxs)(c.ul,{children:["\n",(0,r.jsxs)(c.li,{children:["\n",(0,r.jsx)(c.p,{children:"\u57fa\u4e8e VM \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(c.p,{children:"\u4f7f\u7528 Google Cloud Compute Engine \u4e0a\u7ed1\u5b9a\u7684\u51ed\u8bc1\u5bf9 GCS \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743\u3002"}),"\n"]}),"\n",(0,r.jsxs)(c.li,{children:["\n",(0,r.jsx)(c.p,{children:"\u57fa\u4e8e Service Account \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(c.p,{children:"\u4f7f\u7528 Service Account \u5bf9 GCS \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743\u3002"}),"\n"]}),"\n",(0,r.jsxs)(c.li,{children:["\n",(0,r.jsx)(c.p,{children:"\u57fa\u4e8e Impersonation \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(c.p,{children:"\u4f7f\u7528\u4e00\u4e2a Service Account \u6216 VM \u5b9e\u4f8b\u6a21\u62df\u53e6\u4e00\u4e2a Service Account\uff0c\u4ece\u5b9e\u73b0\u5bf9 GCS \u7684\u8ba4\u8bc1\u548c\u9274\u6743\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(c.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsx)(c.p,{children:"StarRocks \u652f\u6301\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u96c6\u6210 GCS\uff1a"}),"\n",(0,r.jsxs)(c.ul,{children:["\n",(0,r.jsx)(c.li,{children:"\u4ece GCS \u6279\u91cf\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,r.jsx)(c.li,{children:"\u4ece GCS \u5907\u4efd\u6570\u636e\u3001\u6216\u628a\u6570\u636e\u6062\u590d\u5230 GCS\u3002"}),"\n",(0,r.jsx)(c.li,{children:"\u67e5\u8be2 GCS \u4e2d\u7684 Parquet \u6216 ORC \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\u3002"}),"\n",(0,r.jsxs)(c.li,{children:["\u67e5\u8be2 GCS \u4e2d\u7684 ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog",children:"Hive"}),"\u3001",(0,r.jsx)(c.a,{href:"/doc/zh/docs/data_source/catalog/iceberg_catalog",children:"Iceberg"}),"\u3001",(0,r.jsx)(c.a,{href:"/doc/zh/docs/data_source/catalog/hudi_catalog",children:"Hudi"}),"\u3001\u6216 ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake"})," \u8868\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(c.p,{children:["\u672c\u6587\u6863\u4ee5 ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),"\u3001",(0,r.jsx)(c.a,{href:"/doc/zh/docs/data_source/file_external_table",children:"\u6587\u4ef6\u5916\u90e8\u8868"})," \u548c ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"})," \u4e3a\u4f8b\uff0c\u4ecb\u7ecd StarRocks \u5728\u5404\u5e94\u7528\u573a\u666f\u4e0b\u5982\u4f55\u96c6\u6210 GCS\u3002\u6709\u5173\u4e0b\u9762\u793a\u4f8b\u4e2d\u51fa\u73b0\u7684 ",(0,r.jsx)(c.code,{children:"StorageCredentialParams"})," \u8be6\u89e3\uff0c\u53c2\u89c1\u672c\u6587\u6863\u201c",(0,r.jsx)(c.a,{href:"/doc/zh/docs/integrations/authenticate_to_gcs#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",children:"\u53c2\u6570\u914d\u7f6e"}),"\u201d\u5c0f\u8282\u3002"]}),"\n",(0,r.jsxs)(c.blockquote,{children:["\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(c.p,{children:["\u7531\u4e8e Broker Load \u53ea\u652f\u6301\u901a\u8fc7 gs \u534f\u8bae\u8bbf\u95ee Google GCS\uff0c\u56e0\u6b64\u5f53\u4ece Google GCS \u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5fc5\u987b\u786e\u4fdd\u6587\u4ef6\u8def\u5f84\u4e2d\u4f20\u5165\u7684\u76ee\u6807\u6587\u4ef6\u7684 GCS URI \u4f7f\u7528 ",(0,r.jsx)(c.code,{children:"gs://"})," \u4f5c\u4e3a\u524d\u7f00\u3002"]}),"\n"]}),"\n",(0,r.jsx)(c.h3,{id:"external-catalog",children:"External Catalog"}),"\n",(0,r.jsxs)(c.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a Hive Catalog ",(0,r.jsx)(c.code,{children:"hive_catalog_gcs"}),"\uff0c\u7528\u4ee5\u67e5\u8be2 GCS \u4e2d\u7684\u6570\u636e\u6587\u4ef6\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_gcs\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://34.132.15.127:9083",\n    StorageCredentialParams\n);\n'})}),"\n",(0,r.jsx)(c.h3,{id:"\u6587\u4ef6\u5916\u90e8\u8868",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(c.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5916\u90e8\u8868 ",(0,r.jsx)(c.code,{children:"external_table_gcs"}),"\uff0c\u7528\u4ee5\u67e5\u8be2 GCS \u4e2d\u7684\u6570\u636e\u6587\u4ef6 ",(0,r.jsx)(c.code,{children:"test_file_external_tbl"}),"\uff08GCS \u672a\u914d\u7f6e\u5143\u6570\u636e\u670d\u52a1\uff09\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_gcs\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "gs:////test-gcs/test_file_external_tbl",\n    "format" = "ORC",\n    StorageCredentialParams\n);\n'})}),"\n",(0,r.jsx)(c.h3,{id:"broker-load",children:"Broker load"}),"\n",(0,r.jsxs)(c.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(c.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a Broker Load \u4f5c\u4e1a\uff0c\u4f5c\u4e1a\u6807\u7b7e\u4e3a ",(0,r.jsx)(c.code,{children:"test_db.label000"}),"\uff0c\u7528\u4ee5\u628a GCS \u4e2d\u7684\u6570\u636e\u6279\u91cf\u5bfc\u5165 StarRocks \u8868 ",(0,r.jsx)(c.code,{children:"target_table"}),"\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("gs://bucket_gcs/test_brokerload_ingestion/*")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,r.jsx)(c.h2,{id:"\u53c2\u6570\u914d\u7f6e",children:"\u53c2\u6570\u914d\u7f6e"}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.code,{children:"StorageCredentialParams"})," \u7528\u4e8e\u6307\u5b9a StarRocks \u8bbf\u95ee GCS \u7684\u76f8\u5173\u53c2\u6570\u914d\u7f6e\u3002\u5177\u4f53\u5305\u542b\u54ea\u4e9b\u53c2\u6570\uff0c\u9700\u8981\u6839\u636e\u6240\u4f7f\u7528\u7684\u8ba4\u8bc1\u65b9\u5f0f\u6765\u786e\u5b9a\u3002"]}),"\n",(0,r.jsx)(c.h3,{id:"\u57fa\u4e8e-vm-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e VM \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u5c06 StarRocks \u90e8\u7f72\u5728 Google Cloud Platform\uff08\u7b80\u79f0 GCP\uff09\u4e0a\u7684 VM \u5b9e\u4f8b\u7684\u540c\u65f6\uff0c\u57fa\u4e8e VM \u5bf9 GCS \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(c.code,{children:"StorageCredentialParams"}),"\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-Plain",children:'"gcp.gcs.use_compute_engine_service_account" = "true"\n'})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.code,{children:"StorageCredentialParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(c.table,{children:[(0,r.jsx)(c.thead,{children:(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53d6\u503c\u6837\u4f8b"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsx)(c.tbody,{children:(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.use_compute_engine_service_account"}),(0,r.jsx)(c.td,{children:"false"}),(0,r.jsx)(c.td,{children:"true"}),(0,r.jsx)(c.td,{children:"\u662f\u5426\u76f4\u63a5\u4f7f\u7528 Compute Engine \u4e0a\u9762\u7ed1\u5b9a\u7684 Service Account\u3002"})]})})]}),"\n",(0,r.jsx)(c.h3,{id:"\u57fa\u4e8e-service-account-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e Service Account \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u67d0\u4e2a Service Account \u5bf9 GCS \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(c.code,{children:"StorageCredentialParams"}),"\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-Plain",children:'"gcp.gcs.service_account_email" = "<google_service_account_email>",\n"gcp.gcs.service_account_private_key_id" = "<google_service_private_key_id>",\n"gcp.gcs.service_account_private_key" = "<google_service_private_key>"\n'})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.code,{children:"StorageCredentialParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(c.table,{children:[(0,r.jsx)(c.thead,{children:(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53d6\u503c\u6837\u4f8b"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(c.tbody,{children:[(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.service_account_email"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsxs)(c.td,{children:['"',(0,r.jsx)(c.code,{children:"user@hello.iam.gserviceaccount.com"}),'"']}),(0,r.jsx)(c.td,{children:"\u521b\u5efa Service Account \u65f6\u751f\u6210\u7684 JSON \u6587\u4ef6\u4e2d\u7684 Email\u3002"})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.service_account_private_key_id"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsx)(c.td,{children:'"61d257bd8479547cb3e04f0b9b6b9ca07af3b7ea"'}),(0,r.jsx)(c.td,{children:"\u521b\u5efa Service Account \u65f6\u751f\u6210\u7684 JSON \u6587\u4ef6\u4e2d\u7684 Private Key ID\u3002"})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.service_account_private_key"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsx)(c.td,{children:'"-----BEGIN PRIVATE KEY----xxxx-----END PRIVATE KEY-----\\n"'}),(0,r.jsx)(c.td,{children:"\u521b\u5efa Service Account \u65f6\u751f\u6210\u7684 JSON \u6587\u4ef6\u4e2d\u7684 Private Key\u3002"})]})]})]}),"\n",(0,r.jsx)(c.h3,{id:"\u57fa\u4e8e-impersonation-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e Impersonation \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(c.h4,{id:"\u4f7f\u7528\u4e00\u4e2a-vm-\u5b9e\u4f8b\u6a21\u62df\u4e00\u4e2a-service-account",children:"\u4f7f\u7528\u4e00\u4e2a VM \u5b9e\u4f8b\u6a21\u62df\u4e00\u4e2a Service Account"}),"\n",(0,r.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u5c06 StarRocks \u90e8\u7f72\u5728 GCP \u4e0a\u7684 VM \u5b9e\u4f8b\u7684\u540c\u65f6\uff0c\u4f7f\u7528\u8be5 VM \u5b9e\u4f8b\u6a21\u62df\u4e00\u4e2a Service Account\uff0c\u4ece\u800c\u4f7f StarRocks \u7ee7\u627f\u8be5 Service Account \u8bbf\u95ee GCS \u7684\u6743\u9650\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(c.code,{children:"StorageCredentialParams"}),"\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-Plain",children:'"gcp.gcs.use_compute_engine_service_account" = "true",\n"gcp.gcs.impersonation_service_account" = "<assumed_google_service_account_email>"\n'})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.code,{children:"StorageCredentialParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(c.table,{children:[(0,r.jsx)(c.thead,{children:(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53d6\u503c\u6837\u4f8b"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(c.tbody,{children:[(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.use_compute_engine_service_account"}),(0,r.jsx)(c.td,{children:"false"}),(0,r.jsx)(c.td,{children:"true"}),(0,r.jsx)(c.td,{children:"\u662f\u5426\u76f4\u63a5\u4f7f\u7528 Compute Engine \u4e0a\u9762\u7ed1\u5b9a\u7684 Service Account\u3002"})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.impersonation_service_account"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsx)(c.td,{children:'"hello"'}),(0,r.jsx)(c.td,{children:"\u9700\u8981\u6a21\u62df\u7684\u76ee\u6807 Service Account\u3002"})]})]})]}),"\n",(0,r.jsx)(c.h4,{id:"\u4f7f\u7528\u4e00\u4e2a-service-account-\u6a21\u62df\u53e6\u5916\u4e00\u4e2a-service-account",children:"\u4f7f\u7528\u4e00\u4e2a Service Account \u6a21\u62df\u53e6\u5916\u4e00\u4e2a Service Account"}),"\n",(0,r.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u4e00\u4e2a Service Account\uff08\u6682\u65f6\u547d\u540d\u4e3a\u201cMeta Service Account\u201d\uff09\u6a21\u62df\u53e6\u5916\u4e00\u4e2a Service Account\uff08\u6682\u65f6\u547d\u540d\u4e3a\u201cData Service Account\u201d\uff09\uff0c\u4ece\u800c\u4f7f StarRocks \u7ee7\u627f\u8be5 Data Service Account \u8bbf\u95ee GCS \u7684\u6743\u9650\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(c.code,{children:"StorageCredentialParams"}),"\uff1a"]}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-Plain",children:'"gcp.gcs.service_account_email" = "<google_service_account_email>",\n"gcp.gcs.service_account_private_key_id" = "<meta_google_service_account_email>",\n"gcp.gcs.service_account_private_key" = "<meta_google_service_account_email>",\n"gcp.gcs.impersonation_service_account" = "<data_google_service_account_email>"\n'})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.code,{children:"StorageCredentialParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(c.table,{children:[(0,r.jsx)(c.thead,{children:(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u53d6\u503c\u6837\u4f8b"})}),(0,r.jsx)(c.th,{children:(0,r.jsx)(c.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(c.tbody,{children:[(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.service_account_email"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsxs)(c.td,{children:['"',(0,r.jsx)(c.code,{children:"user@hello.iam.gserviceaccount.com"}),'"']}),(0,r.jsx)(c.td,{children:"\u521b\u5efa Meta Service Account \u65f6\u751f\u6210\u7684 JSON \u6587\u4ef6\u4e2d\u7684 Email\u3002"})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.service_account_private_key_id"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsx)(c.td,{children:'"61d257bd8479547cb3e04f0b9b6b9ca07af3b7ea"'}),(0,r.jsx)(c.td,{children:"\u521b\u5efa Meta Service Account \u65f6\u751f\u6210\u7684 JSON \u6587\u4ef6\u4e2d\u7684 Private Key ID\u3002"})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.service_account_private_key"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsx)(c.td,{children:'"-----BEGIN PRIVATE KEY----xxxx-----END PRIVATE KEY-----\\n"'}),(0,r.jsx)(c.td,{children:"\u521b\u5efa Meta Service Account \u65f6\u751f\u6210\u7684 JSON \u6587\u4ef6\u4e2d\u7684 Private Key\u3002"})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:"gcp.gcs.impersonation_service_account"}),(0,r.jsx)(c.td,{children:'""'}),(0,r.jsx)(c.td,{children:'"hello"'}),(0,r.jsx)(c.td,{children:"\u9700\u8981\u6a21\u62df\u7684\u76ee\u6807 Data Service Account\u3002"})]})]})]})]})}const h=function(e={}){const{wrapper:c}=Object.assign({},(0,s.ah)(),e.components);return c?(0,r.jsx)(c,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,c,n)=>{n.d(c,{Zo:()=>a,ah:()=>t});var r=n(67294);const s=r.createContext({});function t(e){const c=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(c):{...c,...e}),[c,e])}const i={};function a({components:e,children:c,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:t(e),r.createElement(s.Provider,{value:a},c)}}}]);