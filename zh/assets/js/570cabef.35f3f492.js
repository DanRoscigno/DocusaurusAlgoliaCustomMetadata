"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67085],{36587:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var r=n(85893),c=n(11151);const l={displayed_sidebar:"Chinese"},a="Iceberg catalog",i={id:"data_source/catalog/iceberg_catalog",title:"Iceberg catalog",description:"Iceberg Catalog \u662f\u4e00\u79cd External Catalog\u3002\u901a\u8fc7 Iceberg Catalog\uff0c\u60a8\u4e0d\u9700\u8981\u6267\u884c\u6570\u636e\u5bfc\u5165\u5c31\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2 Apache Iceberg \u91cc\u7684\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/data_source/catalog/iceberg_catalog.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/iceberg_catalog",permalink:"/doc/zh/docs/2.5/data_source/catalog/iceberg_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/data_source/catalog/iceberg_catalog.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Hudi catalog",permalink:"/doc/zh/docs/2.5/data_source/catalog/hudi_catalog"},next:{title:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",permalink:"/doc/zh/docs/2.5/data_source/catalog/query_external_data"}},d={},t=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"AWS IAM",id:"aws-iam",level:3},{value:"HDFS",id:"hdfs",level:3},{value:"Kerberos \u8ba4\u8bc1",id:"kerberos-\u8ba4\u8bc1",level:3},{value:"\u521b\u5efa Iceberg Catalog",id:"\u521b\u5efa-iceberg-catalog",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"catalog_name",id:"catalog_name",level:4},{value:"comment",id:"comment",level:4},{value:"type",id:"type",level:4},{value:"MetastoreParams",id:"metastoreparams",level:4},{value:"HMS",id:"hms",level:5},{value:"AWS Glue",id:"aws-glue",level:5},{value:"StorageCredentialParams",id:"storagecredentialparams",level:4},{value:"AWS S3",id:"aws-s3",level:5},{value:"\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",id:"\u517c\u5bb9-s3-\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"HDFS",id:"hdfs-1",level:4},{value:"AWS S3",id:"aws-s3-1",level:4},{value:"\u5982\u679c\u57fa\u4e8e Instance Profile \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",id:"\u5982\u679c\u57fa\u4e8e-instance-profile-\u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",level:5},{value:"\u5982\u679c\u57fa\u4e8e Assumed Role \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",id:"\u5982\u679c\u57fa\u4e8e-assumed-role-\u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",level:5},{value:"\u5982\u679c\u57fa\u4e8e IAM User \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",id:"\u5982\u679c\u57fa\u4e8e-iam-user-\u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",level:5},{value:"\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",id:"\u517c\u5bb9-s3-\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8-1",level:4},{value:"\u67e5\u770b Iceberg \u8868\u7ed3\u6784",id:"\u67e5\u770b-iceberg-\u8868\u7ed3\u6784",level:2},{value:"\u67e5\u8be2 Iceberg \u8868\u6570\u636e",id:"\u67e5\u8be2-iceberg-\u8868\u6570\u636e",level:2},{value:"\u5bfc\u5165 Iceberg \u6570\u636e",id:"\u5bfc\u5165-iceberg-\u6570\u636e",level:2}];function h(e){const s=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",h2:"h2",h3:"h3",strong:"strong",code:"code",blockquote:"blockquote",pre:"pre",h4:"h4",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"iceberg-catalog",children:"Iceberg catalog"}),"\n",(0,r.jsx)(s.p,{children:"Iceberg Catalog \u662f\u4e00\u79cd External Catalog\u3002\u901a\u8fc7 Iceberg Catalog\uff0c\u60a8\u4e0d\u9700\u8981\u6267\u884c\u6570\u636e\u5bfc\u5165\u5c31\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2 Apache Iceberg \u91cc\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u57fa\u4e8e Iceberg Catalog \uff0c\u7ed3\u5408 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"})," \u80fd\u529b\u6765\u5b9e\u73b0\u6570\u636e\u8f6c\u6362\u548c\u5bfc\u5165\u3002StarRocks \u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301 Iceberg Catalog\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u4fdd\u8bc1\u6b63\u5e38\u8bbf\u95ee Iceberg \u5185\u7684\u6570\u636e\uff0cStarRocks \u96c6\u7fa4\u5fc5\u987b\u96c6\u6210\u4ee5\u4e0b\u4e24\u4e2a\u5173\u952e\u7ec4\u4ef6\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5bf9\u8c61\u5b58\u50a8\u6216\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff0c\u5982 AWS S3 \u6216 HDFS"}),"\n",(0,r.jsx)(s.li,{children:"\u5143\u6570\u636e\u670d\u52a1\uff0c\u5982 Hive Metastore\uff08\u4ee5\u4e0b\u7b80\u79f0 HMS\uff09\u6216 AWS Glue"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"StarRocks \u67e5\u8be2 Iceberg \u6570\u636e\u65f6\uff0c\u652f\u6301 Parquet \u548c ORC \u6587\u4ef6\u683c\u5f0f\uff0c\u5176\u4e2d\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Parquet \u6587\u4ef6\u652f\u6301 SNAPPY\u3001LZ4\u3001ZSTD\u3001GZIP \u548c NO_COMPRESSION \u538b\u7f29\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(s.li,{children:"ORC \u6587\u4ef6\u652f\u6301 ZLIB\u3001SNAPPY\u3001LZO\u3001LZ4\u3001ZSTD \u548c NO_COMPRESSION \u538b\u7f29\u683c\u5f0f\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Iceberg Catalog \u652f\u6301\u67e5\u8be2 v1 \u8868\u6570\u636e\uff0c\u4e0d\u652f\u6301\u67e5\u8be2 v2 \u8868\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u521b\u5efa Iceberg Catalog \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd StarRocks \u96c6\u7fa4\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee Iceberg \u7684\u6587\u4ef6\u5b58\u50a8\u53ca\u5143\u6570\u636e\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"aws-iam",children:"AWS IAM"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Iceberg \u4f7f\u7528 AWS S3 \u4f5c\u4e3a\u6587\u4ef6\u5b58\u50a8\u6216\u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u60a8\u9700\u8981\u9009\u62e9\u4e00\u79cd\u5408\u9002\u7684\u8ba4\u8bc1\u9274\u6743\u65b9\u6848\uff0c\u786e\u4fdd StarRocks \u96c6\u7fa4\u53ef\u4ee5\u8bbf\u95ee\u76f8\u5173\u7684 AWS \u4e91\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u9009\u62e9\u5982\u4e0b\u8ba4\u8bc1\u9274\u6743\u65b9\u6848\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Instance Profile\uff08\u63a8\u8350\uff09"}),"\n",(0,r.jsx)(s.li,{children:"Assumed Role"}),"\n",(0,r.jsx)(s.li,{children:"IAM User"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u5173 StarRocks \u8bbf\u95ee AWS \u8ba4\u8bc1\u9274\u6743\u7684\u8be6\u7ec6\u5185\u5bb9\uff0c\u53c2\u89c1",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/integrations/authenticate_to_aws_resources#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",children:"\u914d\u7f6e AWS \u8ba4\u8bc1\u65b9\u5f0f - \u51c6\u5907\u5de5\u4f5c"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"hdfs",children:"HDFS"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f7f\u7528 HDFS \u4f5c\u4e3a\u6587\u4ef6\u5b58\u50a8\uff0c\u5219\u9700\u8981\u5728 StarRocks \u96c6\u7fa4\u4e2d\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\uff08\u53ef\u9009\uff09\u8bbe\u7f6e\u7528\u4e8e\u8bbf\u95ee HDFS \u96c6\u7fa4\u548c HMS \u7684\u7528\u6237\u540d\u3002 \u60a8\u53ef\u4ee5\u5728\u6bcf\u4e2a FE \u7684 ",(0,r.jsx)(s.strong,{children:"fe/conf/hadoop_env.sh"})," \u6587\u4ef6\u3001\u4ee5\u53ca\u6bcf\u4e2a BE \u7684 ",(0,r.jsx)(s.strong,{children:"be/conf/hadoop_env.sh"})," \u6587\u4ef6\u6700\u5f00\u5934\u589e\u52a0 ",(0,r.jsx)(s.code,{children:'export HADOOP_USER_NAME="<user_name>"'})," \u6765\u8bbe\u7f6e\u8be5\u7528\u6237\u540d\u3002\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u9700\u91cd\u542f\u5404\u4e2a FE \u548c BE \u4f7f\u914d\u7f6e\u751f\u6548\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u8be5\u7528\u6237\u540d\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 FE \u548c BE \u8fdb\u7a0b\u7684\u7528\u6237\u540d\u8fdb\u884c\u8bbf\u95ee\u3002\u6bcf\u4e2a StarRocks \u96c6\u7fa4\u4ec5\u652f\u6301\u914d\u7f6e\u4e00\u4e2a\u7528\u6237\u540d\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u67e5\u8be2 Iceberg \u6570\u636e\u65f6\uff0cStarRocks \u96c6\u7fa4\u7684 FE \u548c BE \u4f1a\u901a\u8fc7 HDFS \u5ba2\u6237\u7aef\u8bbf\u95ee HDFS \u96c6\u7fa4\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cStarRocks \u4f1a\u6309\u7167\u9ed8\u8ba4\u914d\u7f6e\u6765\u542f\u52a8 HDFS \u5ba2\u6237\u7aef\uff0c\u65e0\u9700\u624b\u52a8\u914d\u7f6e\u3002\u4f46\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\uff0c\u9700\u8981\u8fdb\u884c\u624b\u52a8\u914d\u7f6e\uff1a","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5982\u679c HDFS \u96c6\u7fa4\u5f00\u542f\u4e86\u9ad8\u53ef\u7528\uff08High Availability\uff0c\u7b80\u79f0\u4e3a\u201cHA\u201d\uff09\u6a21\u5f0f\uff0c\u5219\u9700\u8981\u5c06 HDFS \u96c6\u7fa4\u4e2d\u7684 ",(0,r.jsx)(s.strong,{children:"hdfs-site.xml"})," \u6587\u4ef6\u653e\u5230\u6bcf\u4e2a FE \u7684 ",(0,r.jsx)(s.strong,{children:"$FE_HOME/conf"})," \u8def\u5f84\u4e0b\u3001\u4ee5\u53ca\u6bcf\u4e2a BE \u7684 ",(0,r.jsx)(s.strong,{children:"$BE_HOME/conf"})," \u8def\u5f84\u4e0b\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5982\u679c HDFS \u96c6\u7fa4\u914d\u7f6e\u4e86 ViewFs\uff0c\u5219\u9700\u8981\u5c06 HDFS \u96c6\u7fa4\u4e2d\u7684 ",(0,r.jsx)(s.strong,{children:"core-site.xml"})," \u6587\u4ef6\u653e\u5230\u6bcf\u4e2a FE \u7684 ",(0,r.jsx)(s.strong,{children:"$FE_HOME/conf"})," \u8def\u5f84\u4e0b\u3001\u4ee5\u53ca\u6bcf\u4e2a BE \u7684 ",(0,r.jsx)(s.strong,{children:"$BE_HOME/conf"})," \u8def\u5f84\u4e0b\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u67e5\u8be2\u65f6\u56e0\u4e3a\u57df\u540d\u65e0\u6cd5\u8bc6\u522b (Unknown Host) \u800c\u53d1\u751f\u8bbf\u95ee\u5931\u8d25\uff0c\u60a8\u9700\u8981\u5c06 HDFS \u96c6\u7fa4\u4e2d\u5404\u8282\u70b9\u7684\u4e3b\u673a\u540d\u53ca IP \u5730\u5740\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u914d\u7f6e\u5230 ",(0,r.jsx)(s.strong,{children:"/etc/hosts"})," \u8def\u5f84\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"kerberos-\u8ba4\u8bc1",children:"Kerberos \u8ba4\u8bc1"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c HDFS \u96c6\u7fa4\u6216 HMS \u5f00\u542f\u4e86 Kerberos \u8ba4\u8bc1\uff0c\u5219\u9700\u8981\u5728 StarRocks \u96c6\u7fa4\u4e2d\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5728\u6bcf\u4e2a FE \u548c \u6bcf\u4e2a BE \u4e0a\u6267\u884c ",(0,r.jsx)(s.code,{children:"kinit -kt keytab_path principal"})," \u547d\u4ee4\uff0c\u4ece Key Distribution Center (KDC) \u83b7\u53d6\u5230 Ticket Granting Ticket (TGT)\u3002\u6267\u884c\u547d\u4ee4\u7684\u7528\u6237\u5fc5\u987b\u62e5\u6709\u8bbf\u95ee HMS \u548c HDFS \u7684\u6743\u9650\u3002\u6ce8\u610f\uff0c\u4f7f\u7528\u8be5\u547d\u4ee4\u8bbf\u95ee KDC \u5177\u6709\u65f6\u6548\u6027\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528 cron \u5b9a\u671f\u6267\u884c\u8be5\u547d\u4ee4\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5728\u6bcf\u4e2a FE \u7684 ",(0,r.jsx)(s.strong,{children:"$FE_HOME/conf/fe.conf"})," \u6587\u4ef6\u548c\u6bcf\u4e2a BE \u7684 ",(0,r.jsx)(s.strong,{children:"$BE_HOME/conf/be.conf"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:'JAVA_OPTS="-Djava.security.krb5.conf=/etc/krb5.conf"'}),"\u3002\u5176\u4e2d\uff0c",(0,r.jsx)(s.code,{children:"/etc/krb5.conf"})," \u662f ",(0,r.jsx)(s.strong,{children:"krb5.conf"})," \u6587\u4ef6\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u6839\u636e\u6587\u4ef6\u7684\u5b9e\u9645\u8def\u5f84\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u521b\u5efa-iceberg-catalog",children:"\u521b\u5efa Iceberg Catalog"}),"\n",(0,r.jsx)(s.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG <catalog_name>\n[COMMENT <comment>]\nPROPERTIES\n(\n    "type" = "iceberg",\n    MetastoreParams,\n    StorageCredentialParams\n)\n'})}),"\n",(0,r.jsx)(s.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsx)(s.h4,{id:"catalog_name",children:"catalog_name"}),"\n",(0,r.jsx)(s.p,{children:"Iceberg Catalog \u7684\u540d\u79f0\u3002\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5fc5\u987b\u7531\u5b57\u6bcd (a-z \u6216 A-Z)\u3001\u6570\u5b57 (0-9) \u6216\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 1023 \u4e2a\u5b57\u7b26\u3002"}),"\n",(0,r.jsx)(s.li,{children:"Catalog \u540d\u79f0\u5927\u5c0f\u5199\u654f\u611f\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"comment",children:"comment"}),"\n",(0,r.jsx)(s.p,{children:"Iceberg Catalog \u7684\u63cf\u8ff0\u3002\u6b64\u53c2\u6570\u4e3a\u53ef\u9009\u3002"}),"\n",(0,r.jsx)(s.h4,{id:"type",children:"type"}),"\n",(0,r.jsxs)(s.p,{children:["\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"iceberg"}),"\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"metastoreparams",children:"MetastoreParams"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u8bbf\u95ee Iceberg \u96c6\u7fa4\u5143\u6570\u636e\u670d\u52a1\u7684\u76f8\u5173\u53c2\u6570\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(s.h5,{id:"hms",children:"HMS"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u9009\u62e9 HMS \u4f5c\u4e3a Iceberg \u96c6\u7fa4\u7684\u5143\u6570\u636e\u670d\u52a1\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"MetastoreParams"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"iceberg.catalog.type" = "hive",\n"iceberg.catalog.hive.metastore.uris" = "<hive_metastore_uri>"\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u67e5\u8be2 Iceberg \u6570\u636e\u4e4b\u524d\uff0c\u5fc5\u987b\u5c06\u6240\u6709 HMS \u8282\u70b9\u7684\u4e3b\u673a\u540d\u53ca IP \u5730\u5740\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u6dfb\u52a0\u5230 ",(0,r.jsx)(s.strong,{children:"/etc/hosts"})," \u8def\u5f84\u3002\u5426\u5219\uff0c\u53d1\u8d77\u67e5\u8be2\u65f6\uff0cStarRocks \u53ef\u80fd\u65e0\u6cd5\u8bbf\u95ee HMS\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"MetastoreParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iceberg.catalog.type"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["Iceberg \u96c6\u7fa4\u6240\u4f7f\u7528\u7684\u5143\u6570\u636e\u670d\u52a1\u7684\u7c7b\u578b\u3002\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"hive"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iceberg.catalog.hive.metastore.uris"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["HMS \u7684 URI\u3002\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"thrift://<HMS IP \u5730\u5740>:<HMS \u7aef\u53e3\u53f7>"}),"\u3002",(0,r.jsx)("br",{}),"\u5982\u679c\u60a8\u7684 HMS \u5f00\u542f\u4e86\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u6b64\u5904\u53ef\u4ee5\u586b\u5199\u591a\u4e2a HMS \u5730\u5740\u5e76\u7528\u9017\u53f7\u5206\u9694\uff0c\u4f8b\u5982\uff1a",(0,r.jsx)(s.code,{children:'"thrift://<HMS IP \u5730\u5740 1>:<HMS \u7aef\u53e3\u53f7 1>,thrift://<HMS IP \u5730\u5740 2>:<HMS \u7aef\u53e3\u53f7 2>,thrift://<HMS IP \u5730\u5740 3>:<HMS \u7aef\u53e3\u53f7 3>"'}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h5,{id:"aws-glue",children:"AWS Glue"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u9009\u62e9 AWS Glue \u4f5c\u4e3a Iceberg \u96c6\u7fa4\u7684\u5143\u6570\u636e\u670d\u52a1\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"MetastoreParams"}),"\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u57fa\u4e8e Instance Profile \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"iceberg.catalog.type" = "glue",\n"aws.glue.use_instance_profile" = "true",\n"aws.glue.region" = "<aws_glue_region>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u57fa\u4e8e Assumed Role \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"iceberg.catalog.type" = "glue",\n"aws.glue.use_instance_profile" = "true",\n"aws.glue.iam_role_arn" = "<iam_role_arn>",\n"aws.glue.region" = "<aws_glue_region>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u57fa\u4e8e IAM User \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"iceberg.catalog.type" = "glue",\n"aws.glue.use_instance_profile" = "false",\n"aws.glue.access_key" = "<iam_user_access_key>",\n"aws.glue.secret_key" = "<iam_user_secret_key>",\n"aws.glue.region" = "<aws_s3_region>"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"MetastoreParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iceberg.catalog.type"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["Iceberg \u96c6\u7fa4\u6240\u4f7f\u7528\u7684\u5143\u6570\u636e\u670d\u52a1\u7684\u7c7b\u578b\u3002\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"glue"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.glue.use_instance_profile"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u6307\u5b9a\u662f\u5426\u5f00\u542f Instance Profile \u548c Assumed Role \u4e24\u79cd\u9274\u6743\u65b9\u5f0f\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.glue.iam_role_arn"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"\u6709\u6743\u9650\u8bbf\u95ee AWS Glue Data Catalog \u7684 IAM Role \u7684 ARN\u3002\u91c7\u7528 Assumed Role \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS Glue \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.glue.region"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["AWS Glue Data Catalog \u6240\u5728\u7684\u5730\u57df\u3002\u793a\u4f8b\uff1a",(0,r.jsx)(s.code,{children:"us-west-1"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.glue.access_key"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Access Key\u3002\u91c7\u7528 IAM User \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS Glue \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.glue.secret_key"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Secret Key\u3002\u91c7\u7528 IAM User \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS Glue \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u5173\u5982\u4f55\u9009\u62e9\u7528\u4e8e\u8bbf\u95ee AWS Glue \u7684\u9274\u6743\u65b9\u5f0f\u3001\u4ee5\u53ca\u5982\u4f55\u5728 AWS IAM \u63a7\u5236\u53f0\u914d\u7f6e\u8bbf\u95ee\u63a7\u5236\u7b56\u7565\uff0c\u53c2\u89c1",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/integrations/authenticate_to_aws_resources#%E8%AE%BF%E9%97%AE-aws-glue-%E7%9A%84%E8%AE%A4%E8%AF%81%E5%8F%82%E6%95%B0",children:"\u8bbf\u95ee AWS Glue \u7684\u8ba4\u8bc1\u53c2\u6570"}),"\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"storagecredentialparams",children:"StorageCredentialParams"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u8bbf\u95ee Iceberg \u96c6\u7fa4\u6587\u4ef6\u5b58\u50a8\u7684\u76f8\u5173\u53c2\u6570\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u53ea\u6709\u5f53 Iceberg \u96c6\u7fa4\u4f7f\u7528 AWS S3 \u4f5c\u4e3a\u6587\u4ef6\u5b58\u50a8\u65f6\uff0c\u624d\u9700\u8981\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c Iceberg \u96c6\u7fa4\u4f7f\u7528 AWS S3 \u4ee5\u5916\u7684\u5176\u4ed6\u6587\u4ef6\u5b58\u50a8\uff0c\u5219\u53ef\u4ee5\u5ffd\u7565 ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),"\u3002"]}),"\n",(0,r.jsx)(s.h5,{id:"aws-s3",children:"AWS S3"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u9009\u62e9 AWS S3 \u4f5c\u4e3a Iceberg \u96c6\u7fa4\u7684\u6587\u4ef6\u5b58\u50a8\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),"\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u57fa\u4e8e Instance Profile \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.use_instance_profile" = "true",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u57fa\u4e8e Assumed Role \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<iam_role_arn>",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u57fa\u4e8e IAM User \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.use_instance_profile" = "false",\n"aws.s3.access_key" = "<iam_user_access_key>",\n"aws.s3.secret_key" = "<iam_user_secret_key>",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"StorageCredentialParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.use_instance_profile"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u6307\u5b9a\u662f\u5426\u5f00\u542f Instance Profile \u548c Assumed Role \u4e24\u79cd\u9274\u6743\u65b9\u5f0f\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.iam_role_arn"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"\u6709\u6743\u9650\u8bbf\u95ee AWS S3 Bucket \u7684 IAM Role \u7684 ARN\u3002\u91c7\u7528 Assumed Role \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS S3 \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.region"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["AWS S3 Bucket \u6240\u5728\u7684\u5730\u57df\u3002\u793a\u4f8b\uff1a",(0,r.jsx)(s.code,{children:"us-west-1"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Access Key\u3002\u91c7\u7528 IAM User \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS S3 \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Secret Key\u3002\u91c7\u7528 IAM User \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS S3 \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u5173\u5982\u4f55\u9009\u62e9\u7528\u4e8e\u8bbf\u95ee AWS S3 \u7684\u9274\u6743\u65b9\u5f0f\u3001\u4ee5\u53ca\u5982\u4f55\u5728 AWS IAM \u63a7\u5236\u53f0\u914d\u7f6e\u8bbf\u95ee\u63a7\u5236\u7b56\u7565\uff0c\u53c2\u89c1",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/integrations/authenticate_to_aws_resources#%E8%AE%BF%E9%97%AE-aws-s3-%E7%9A%84%E8%AE%A4%E8%AF%81%E5%8F%82%E6%95%B0",children:"\u8bbf\u95ee AWS S3 \u7684\u8ba4\u8bc1\u53c2\u6570"}),"\u3002"]}),"\n",(0,r.jsx)(s.h5,{id:"\u517c\u5bb9-s3-\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",children:"\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8"}),"\n",(0,r.jsx)(s.p,{children:"Iceberg Catalog \u4ece 2.5 \u7248\u672c\u8d77\u652f\u6301\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u9009\u62e9\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff08\u5982 MinIO\uff09\u4f5c\u4e3a Iceberg \u96c6\u7fa4\u7684\u6587\u4ef6\u5b58\u50a8\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.enable_ssl" = "{true | false}",\n"aws.s3.enable_path_style_access" = "{true | false}",\n"aws.s3.endpoint" = "<s3_endpoint>",\n"aws.s3.access_key" = "<iam_user_access_key>",\n"aws.s3.secret_key" = "<iam_user_secret_key>"\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"StorageCredentialParams"})," \u5305\u542b\u5982\u4e0b\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.enable_ssl"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5f00\u542f SSL \u8fde\u63a5\u3002",(0,r.jsx)("br",{}),"\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.enable_path_style_access"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5f00\u542f\u8def\u5f84\u7c7b\u578b\u8bbf\u95ee (Path-Style Access)\u3002",(0,r.jsx)("br",{}),"\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u5bf9\u4e8e MinIO\uff0c\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\u3002",(0,r.jsx)("br",{}),"\u8def\u5f84\u7c7b\u578b URL \u4f7f\u7528\u5982\u4e0b\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"https://s3.<region_code>.amazonaws.com/<bucket_name>/<key_name>"}),"\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u5728\u7f8e\u56fd\u897f\u90e8\uff08\u4fc4\u52d2\u5188\uff09\u533a\u57df\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"DOC-EXAMPLE-BUCKET1"})," \u7684\u5b58\u50a8\u6876\uff0c\u5e76\u5e0c\u671b\u8bbf\u95ee\u8be5\u5b58\u50a8\u6876\u4e2d\u7684 ",(0,r.jsx)(s.code,{children:"alice.jpg"})," \u5bf9\u8c61\uff0c\u5219\u53ef\u4f7f\u7528\u4ee5\u4e0b\u8def\u5f84\u7c7b\u578b URL\uff1a",(0,r.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com/DOC-EXAMPLE-BUCKET1/alice.jpg"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.endpoint"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u8bbf\u95ee\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u7684 Endpoint\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Access Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Secret Key\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"iceberg_catalog_hms"})," \u6216 ",(0,r.jsx)(s.code,{children:"iceberg_catalog_glue"})," \u7684 Iceberg Catalog\uff0c\u7528\u4e8e\u67e5\u8be2 Iceberg \u96c6\u7fa4\u91cc\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"hdfs-1",children:"HDFS"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528 HDFS \u4f5c\u4e3a\u5b58\u50a8\u65f6\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_hms\nPROPERTIES\n(\n    "type" = "iceberg",\n    "hive.metastore.type" = "hive",\n    "hive.metastore.uris" = "thrift://xx.xx.xx:9083"\n);\n'})}),"\n",(0,r.jsx)(s.h4,{id:"aws-s3-1",children:"AWS S3"}),"\n",(0,r.jsx)(s.h5,{id:"\u5982\u679c\u57fa\u4e8e-instance-profile-\u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",children:"\u5982\u679c\u57fa\u4e8e Instance Profile \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Iceberg \u96c6\u7fa4\u4f7f\u7528 HMS \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_hms\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "hive",\n    "iceberg.catalog.hive.metastore.uris" = "thrift://xx.xx.xx:9083",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Amazon EMR Iceberg \u96c6\u7fa4\u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_glue\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "glue",\n    "aws.glue.use_instance_profile" = "true",\n    "aws.glue.region" = "us-west-2",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h5,{id:"\u5982\u679c\u57fa\u4e8e-assumed-role-\u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",children:"\u5982\u679c\u57fa\u4e8e Assumed Role \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Iceberg \u96c6\u7fa4\u4f7f\u7528 HMS \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_hms\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "hive",\n    "iceberg.catalog.hive.metastore.uris" = "thrift://xx.xx.xx:9083",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/test_s3_role",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Amazon EMR Iceberg \u96c6\u7fa4\u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_glue\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "glue",\n    "aws.glue.use_instance_profile" = "true",\n    "aws.glue.iam_role_arn" = "arn:aws:iam::081976408565:role/test_glue_role",\n    "aws.glue.region" = "us-west-2",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/test_s3_role",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h5,{id:"\u5982\u679c\u57fa\u4e8e-iam-user-\u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1",children:"\u5982\u679c\u57fa\u4e8e IAM User \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Iceberg \u96c6\u7fa4\u4f7f\u7528 HMS \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_hms\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "hive",\n    "iceberg.catalog.hive.metastore.uris" = "thrift://xx.xx.xx:9083",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_access_key>",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c Amazon EMR Iceberg \u96c6\u7fa4\u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_glue\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "glue",\n    "aws.glue.use_instance_profile" = "false",\n    "aws.glue.access_key" = "<iam_user_access_key>",\n    "aws.glue.secret_key" = "<iam_user_secret_key>",\n    "aws.glue.region" = "us-west-2",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_secret_key>",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"\u517c\u5bb9-s3-\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8-1",children:"\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8"}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5 MinIO \u4e3a\u4f8b\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u521b\u5efa Iceberg Catalog\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_catalog_hms\nPROPERTIES\n(\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "hive",\n    "iceberg.catalog.hive.metastore.uris" = "thrift://34.132.15.127:9083",\n    "aws.s3.enable_ssl" = "true",\n    "aws.s3.enable_path_style_access" = "true",\n    "aws.s3.endpoint" = "<s3_endpoint>",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_secret_key>"\n);\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u67e5\u770b-iceberg-\u8868\u7ed3\u6784",children:"\u67e5\u770b Iceberg \u8868\u7ed3\u6784"}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u6cd5\u67e5\u770b Iceberg \u8868\u7684\u8868\u7ed3\u6784\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u67e5\u770b\u8868\u7ed3\u6784"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"DESC[RIBE] <catalog_name>.<database_name>.<table_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u4ece CREATE \u547d\u4ee4\u67e5\u770b\u8868\u7ed3\u6784\u548c\u8868\u6587\u4ef6\u5b58\u653e\u4f4d\u7f6e"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SHOW CREATE TABLE <catalog_name>.<database_name>.<table_name>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u67e5\u8be2-iceberg-\u8868\u6570\u636e",children:"\u67e5\u8be2 Iceberg \u8868\u6570\u636e"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u5982\u4e0b\u8bed\u6cd5\u67e5\u770b\u6307\u5b9a Catalog \u6240\u5c5e\u7684 Iceberg \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5e93\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SHOW DATABASES FROM <catalog_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u5982\u4e0b\u8bed\u6cd5\u8fde\u63a5\u5230\u76ee\u6807 Iceberg \u6570\u636e\u5e93\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"USE <catalog_name>.<database_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u5982\u4e0b\u8bed\u6cd5\u67e5\u8be2 Iceberg \u8868\u7684\u6570\u636e\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SELECT count(*) FROM <table_name> LIMIT 10\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5bfc\u5165-iceberg-\u6570\u636e",children:"\u5bfc\u5165 Iceberg \u6570\u636e"}),"\n",(0,r.jsxs)(s.p,{children:["\u5047\u8bbe\u6709\u4e00\u4e2a OLAP \u8868\uff0c\u8868\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"olap_tbl"}),"\u3002\u60a8\u53ef\u4ee5\u8fd9\u6837\u6765\u8f6c\u6362\u8be5\u8868\u4e2d\u7684\u6570\u636e\uff0c\u5e76\u628a\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u4e2d\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"INSERT INTO default_catalog.olap_db.olap_tbl SELECT * FROM iceberg_table\n"})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>l});var r=n(67294);const c=r.createContext({});function l(e){const s=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:l(e),r.createElement(c.Provider,{value:i},s)}}}]);