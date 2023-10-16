"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93725],{13834:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var c=s(85893),i=s(11151);const d={displayed_sidebar:"Chinese"},l="\u4e34\u65f6\u5206\u533a",r={id:"table_design/Temporary_partition",title:"\u4e34\u65f6\u5206\u533a",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/table_design/Temporary_partition.md",sourceDirName:"table_design",slug:"/table_design/Temporary_partition",permalink:"/doc/zh/docs/3.0/table_design/Temporary_partition",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/Temporary_partition.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u7406\u89e3 StarRocks \u8868\u8bbe\u8ba1",permalink:"/doc/zh/docs/3.0/table_design/StarRocks_table_design"},next:{title:"\u81ea\u52a8\u521b\u5efa\u5206\u533a",permalink:"/doc/zh/docs/3.0/table_design/automatic_partitioning"}},a={},t=[{value:"\u521b\u5efa\u4e34\u65f6\u5206\u533a",id:"\u521b\u5efa\u4e34\u65f6\u5206\u533a",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"<strong>\u53c2\u6570\u8bf4\u660e</strong>",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u67e5\u770b\u4e34\u65f6\u5206\u533a",id:"\u67e5\u770b\u4e34\u65f6\u5206\u533a",level:2},{value:"\u5bfc\u5165\u6570\u636e\u81f3\u4e34\u65f6\u5206\u533a",id:"\u5bfc\u5165\u6570\u636e\u81f3\u4e34\u65f6\u5206\u533a",level:2},{value:"\u901a\u8fc7 <code>INSERT INTO</code> \u547d\u4ee4\u5bfc\u5165",id:"\u901a\u8fc7-insert-into-\u547d\u4ee4\u5bfc\u5165",level:3},{value:"\u901a\u8fc7 STREAM LOAD \u65b9\u5f0f\u5bfc\u5165",id:"\u901a\u8fc7-stream-load-\u65b9\u5f0f\u5bfc\u5165",level:3},{value:"\u901a\u8fc7 BROKER LOAD \u65b9\u5f0f\u5bfc\u5165",id:"\u901a\u8fc7-broker-load-\u65b9\u5f0f\u5bfc\u5165",level:3},{value:"\u901a\u8fc7 ROUTINE LOAD \u65b9\u5f0f\u5bfc\u5165",id:"\u901a\u8fc7-routine-load-\u65b9\u5f0f\u5bfc\u5165",level:3},{value:"\u67e5\u8be2\u4e34\u65f6\u5206\u533a\u7684\u6570\u636e",id:"\u67e5\u8be2\u4e34\u65f6\u5206\u533a\u7684\u6570\u636e",level:2},{value:"\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u8fdb\u884c\u66ff\u6362",id:"\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u8fdb\u884c\u66ff\u6362",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"\u5220\u9664\u4e34\u65f6\u5206\u533a",id:"\u5220\u9664\u4e34\u65f6\u5206\u533a",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",h3:"h3",strong:"strong",pre:"pre"},(0,i.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u4e34\u65f6\u5206\u533a",children:"\u4e34\u65f6\u5206\u533a"}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u529f\u80fd\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u4e00\u5f20\u5df2\u7ecf\u5b9a\u4e49\u5206\u533a\u89c4\u5219\u7684\u5206\u533a\u8868\u4e0a\uff0c\u521b\u5efa\u4e34\u65f6\u5206\u533a\uff0c\u5e76\u4e3a\u8fd9\u4e9b\u4e34\u65f6\u5206\u533a\u8bbe\u5b9a\u5355\u72ec\u7684\u6570\u636e\u5206\u5e03\u7b56\u7565\u3002\u5728\u539f\u5b50\u8986\u76d6\u5199\u64cd\u4f5c\u6216\u8c03\u6574\u5206\u533a\u5206\u6876\u7b56\u7565\u65f6\u5019\uff0c\u60a8\u53ef\u4ee5\u5c06\u4e34\u65f6\u5206\u533a\u4f5c\u4e3a\u4e34\u65f6\u53ef\u7528\u7684\u6570\u636e\u8f7d\u4f53\u3002\u60a8\u53ef\u4ee5\u4e3a\u4e34\u65f6\u5206\u533a\u8bbe\u5b9a\u7684\u6570\u636e\u5206\u5e03\u7b56\u7565\u5305\u62ec\u5206\u533a\u8303\u56f4\u3001\u5206\u6876\u6570\u3001\u4ee5\u53ca\u90e8\u5206\u5c5e\u6027\uff0c\u4f8b\u5982\u526f\u672c\u6570\u3001\u5b58\u50a8\u4ecb\u8d28\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4ee5\u4e0b\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u529f\u80fd\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u539f\u5b50\u8986\u76d6\u5199\u64cd\u4f5c"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u91cd\u5199\u67d0\u4e00\u6b63\u5f0f\u5206\u533a\u7684\u6570\u636e\uff0c\u540c\u65f6\u4fdd\u8bc1\u91cd\u5199\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u67e5\u770b\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u5148\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u7684\u4e34\u65f6\u5206\u533a\uff0c\u5c06\u65b0\u7684\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u540e\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u5730\u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a\uff0c\u751f\u6210\u65b0\u6b63\u5f0f\u5206\u533a\u3002\u5bf9\u4e8e\u975e\u5206\u533a\u8868\u7684\u539f\u5b50\u8986\u76d6\u5199\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE#swap",children:"ALTER TABLE - SWAP"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8c03\u6574\u5206\u533a\u6570\u636e\u7684\u67e5\u8be2\u5e76\u53d1"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u4fee\u6539\u67d0\u4e00\u6b63\u5f0f\u5206\u533a\u7684\u5206\u6876\u6570\uff0c\u60a8\u53ef\u4ee5\u5148\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u5206\u533a\u8303\u56f4\u7684\u4e34\u65f6\u5206\u533a\uff0c\u5e76\u6307\u5b9a\u65b0\u7684\u5206\u6876\u6570\uff0c\u7136\u540e\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"INSERT INTO"})," \u547d\u4ee4\u5c06\u539f\u6709\u6b63\u5f0f\u5206\u533a\u7684\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u4e2d\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u5730\u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a\uff0c\u751f\u6210\u65b0\u6b63\u5f0f\u5206\u533a\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u5206\u533a\u7b56\u7565"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5e0c\u671b\u4fee\u6539\u6b63\u5f0f\u5206\u533a\u7684\u5206\u533a\u8303\u56f4\uff0c\u4f8b\u5982\u5408\u5e76\u591a\u4e2a\u5c0f\u5206\u533a\u4e3a\u4e00\u4e2a\u5927\u5206\u533a\uff0c\u6216\u5c06\u4e00\u4e2a\u5927\u5206\u533a\u5206\u5272\u6210\u591a\u4e2a\u5c0f\u5206\u533a\uff0c\u60a8\u53ef\u4ee5\u5148\u5efa\u7acb\u5bf9\u5e94\u5408\u5e76\u6216\u5206\u5272\u540e\u8303\u56f4\u7684\u4e34\u65f6\u5206\u533a\uff0c\u7136\u540e\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"INSERT INTO"})," \u547d\u4ee4\u5c06\u539f\u6709\u6b63\u5f0f\u5206\u533a\u7684\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u4e2d\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u5730\u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a\uff0c\u751f\u6210\u65b0\u6b63\u5f0f\u5206\u533a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u521b\u5efa\u4e34\u65f6\u5206\u533a",children:"\u521b\u5efa\u4e34\u65f6\u5206\u533a"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 ALTER TABLE \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u5206\u533a\uff0c\u4e5f\u53ef\u4ee5\u6279\u91cf\u521b\u5efa\u4e34\u65f6\u5206\u533a\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u5206\u533a"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE <table_name> \nADD TEMPORARY PARTITION <temporary_partition_name> VALUES [("value1"), {MAXVALUE|("value2")})]\n[(partition_desc)]\n[DISTRIBUTED BY HASH(<bucket_key>)];\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE <table_name> \nADD TEMPORARY PARTITION <temporary_partition_name> VALUES LESS THAN {MAXVALUE|(<"value">)}\n[(partition_desc)]\n[DISTRIBUTED BY HASH(<bucket_key>)];\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6279\u91cf\u521b\u5efa\u4e34\u65f6\u5206\u533a"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE <table_name>\nADD TEMPORARY PARTITIONS START ("value1") END ("value2") EVERY {(INTERVAL <num> <time_unit>)|<num>}\n[(partition_desc)]\n[DISTRIBUTED BY HASH(<bucket_key>)];\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:(0,c.jsx)(n.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"partition_desc"}),"\uff1a\u4e3a\u4e34\u65f6\u5206\u533a\u6307\u5b9a\u5206\u6876\u6570\u548c\u90e8\u5206\u5c5e\u6027\uff0c\u5305\u62ec\u526f\u672c\u6570\u3001\u5b58\u50a8\u4ecb\u8d28\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"site_access"})," \u8868\u4e2d\u521b\u5efa\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp1"}),"\uff0c \u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"VALUES [(...),(...))"})," \u8bed\u6cd5\u6307\u5b9a\u5176\u4e34\u65f6\u5206\u533a\u8303\u56f4\u4e3a [2020-01-01, 2020-02-01)\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"site_access"})," \u8868\u4e2d\u521b\u5efa\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp2"}),"\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"VALUES LESS THAN (...)"})," \u8bed\u6cd5\u6307\u5b9a\u5176\u4e34\u65f6\u5206\u533a\u7684\u4e0a\u754c\u4e3a ",(0,c.jsx)(n.code,{children:"2020-03-01"}),"\u3002StarRocks \u4f1a\u5c06\u524d\u4e00\u4e2a\u4e34\u65f6\u5206\u533a\u7684\u4e0a\u754c\u4f5c\u4e3a\u8be5\u4e34\u65f6\u5206\u533a\u7684\u4e0b\u754c\uff0c\u751f\u6210\u4e00\u4e2a\u5de6\u95ed\u53f3\u5f00\u7684\u4e34\u65f6\u5206\u533a\uff0c\u5176\u8303\u56f4\u4e3a [2020-02-01, 2020-03-01)\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD TEMPORARY PARTITION tp2 VALUES LESS THAN ("2020-03-01");\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"site_access"})," \u8868\u4e2d\u521b\u5efa\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp3"}),"\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"VALUES LESS THAN (...)"})," \u8bed\u6cd5\u6307\u5b9a\u5176\u4e34\u65f6\u5206\u533a\u7684\u4e0a\u754c\u4e3a ",(0,c.jsx)(n.code,{children:"2020-04-01"})," \u5e76\u4e14\u6307\u5b9a\u4e34\u65f6\u5206\u533a\u7684\u526f\u672c\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"1"}),"\uff0c\u5206\u6876\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"5"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD TEMPORARY PARTITION tp3 VALUES LESS THAN ("2020-04-01")\n ("replication_num" = "1")\nDISTRIBUTED BY HASH (site_id);\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"site_access"})," \u8868\u4e2d\u6279\u91cf\u521b\u5efa\u4e34\u65f6\u5206\u533a\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"START (...) END (...) EVERY (...)"})," \u8bed\u6cd5\u6307\u5b9a\u6279\u91cf\u521b\u5efa\u7684\u4e34\u65f6\u5206\u533a\u8303\u56f4\u4e3a [2020-04-01, 2021-01-01)\uff0c\u5206\u533a\u7c92\u5ea6\u662f\u4e00\u4e2a\u6708\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access \nADD TEMPORARY PARTITIONS START ("2020-04-01") END ("2021-01-01") EVERY (INTERVAL 1 MONTH);\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4e34\u65f6\u5206\u533a\u7684\u5206\u533a\u5217\u548c\u539f\u6709\u6b63\u5f0f\u5206\u533a\u76f8\u540c\uff0c\u4e14\u4e0d\u53ef\u4fee\u6539\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u4e34\u65f6\u5206\u533a\u7684\u5206\u533a\u540d\u79f0\u4e0d\u80fd\u548c\u6b63\u5f0f\u5206\u533a\u4ee5\u53ca\u5176\u4ed6\u4e34\u65f6\u5206\u533a\u91cd\u590d\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u4e00\u5f20\u8868\u6240\u6709\u4e34\u65f6\u5206\u533a\u4e4b\u95f4\u7684\u5206\u533a\u8303\u56f4\u4e0d\u53ef\u91cd\u53e0\uff0c\u4f46\u4e34\u65f6\u5206\u533a\u7684\u8303\u56f4\u548c\u6b63\u5f0f\u5206\u533a\u8303\u56f4\u53ef\u4ee5\u91cd\u53e0\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u770b\u4e34\u65f6\u5206\u533a",children:"\u67e5\u770b\u4e34\u65f6\u5206\u533a"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b ",(0,c.jsx)(n.a,{href:"../sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW TEMPORARY PARTITIONS"})," \u547d\u4ee4\uff0c\u67e5\u770b\u8868\u7684\u4e34\u65f6\u5206\u533a\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW TEMPORARY PARTITIONS FROM site_access;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5bfc\u5165\u6570\u636e\u81f3\u4e34\u65f6\u5206\u533a",children:"\u5bfc\u5165\u6570\u636e\u81f3\u4e34\u65f6\u5206\u533a"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"INSERT INTO"})," \u547d\u4ee4\u3001STREAM LOAD\u3001BROKER LOAD \u6216\u8005 ROUTINE LOAD \u65b9\u5f0f\u5c06\u6570\u636e\u5bfc\u5165\u4e34\u65f6\u5206\u533a\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u901a\u8fc7-insert-into-\u547d\u4ee4\u5bfc\u5165",children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"INSERT INTO"})," \u547d\u4ee4\u5bfc\u5165"]}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"})," \u547d\u4ee4\u5c06\u6570\u636e\u5bfc\u5165\u4e34\u65f6\u5206\u533a\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO site_access TEMPORARY PARTITION (tp1) VALUES ("2020-01-01",1,"ca","lily",4);\nINSERT INTO site_access TEMPORARY PARTITION (tp2) SELECT * FROM site_access_copy PARTITION p2;\nINSERT INTO site_access TEMPORARY PARTITION (tp3, tp4,...) SELECT * FROM site_access_copy PARTITION (p3, p4,...);\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7-stream-load-\u65b9\u5f0f\u5bfc\u5165",children:"\u901a\u8fc7 STREAM LOAD \u65b9\u5f0f\u5bfc\u5165"}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:label1" -H "temporary_partitions: tp1, tp2, ..." -T testData \\\n    http://host:port/api/example_db/site_access/_stream_load    \n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u5173\u8bed\u6cd5\u548c\u53c2\u6570\u7b49\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7-broker-load-\u65b9\u5f0f\u5bfc\u5165",children:"\u901a\u8fc7 BROKER LOAD \u65b9\u5f0f\u5bfc\u5165"}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/starrocks/data/input/file")\n    INTO TABLE site_access\n    TEMPORARY PARTITION (tp1, tp2, ...)\n    ...\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u5173\u8bed\u6cd5\u548c\u53c2\u6570\u7b49\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7-routine-load-\u65b9\u5f0f\u5bfc\u5165",children:"\u901a\u8fc7 ROUTINE LOAD \u65b9\u5f0f\u5bfc\u5165"}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD routine_load_job ON site_access\nCOLUMNS (event_day,site_id,city_code,user_name,pv),\nTEMPORARY PARTITION (tp1, tp2, ...)\nFROM KAFKA\n(\n    "kafka_broker_list" ="<kafka_broker1_ip>:<kafka_broker1_port>,<kafka_broker2_ip>:<kafka_broker2_port>",\n    "kafka_topic" = "ordertest"\n);\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u5173\u8bed\u6cd5\u548c\u53c2\u6570\u7b49\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u8be2\u4e34\u65f6\u5206\u533a\u7684\u6570\u636e",children:"\u67e5\u8be2\u4e34\u65f6\u5206\u533a\u7684\u6570\u636e"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u67e5\u8be2\u6307\u5b9a\u4e34\u65f6\u5206\u533a\u7684\u6570\u636e\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM\nsite_access TEMPORARY PARTITION (tp1);\n\nSELECT * FROM\nsite_access TEMPORARY PARTITION (tp1, tp2, ...);\n\nSELECT event_day,site_id,pv FROM\nsite_access TEMPORARY PARTITION (tp1, tp2, ...);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5bf9\u4e24\u5f20\u8868\u4e2d\u6307\u5b9a\u4e34\u65f6\u5206\u533a\u7684\u6570\u636e\u8fdb\u884c\u8fde\u63a5\u67e5\u8be2\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM\nsite_access TEMPORARY PARTITION (tp1, tp2, ...)\nJOIN\nsite_access_copy TEMPORARY PARTITION (tp1, tp2, ...)\nON site_access.site_id=site_access1.site_id and site_access.event_day=site_access1.event_day\n;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u8fdb\u884c\u66ff\u6362",children:"\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u8fdb\u884c\u66ff\u6362"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a\uff0c\u5f62\u6210\u65b0\u6b63\u5f0f\u5206\u533a\u3002\u5206\u533a\u66ff\u6362\u6210\u529f\u540e\uff0c\u539f\u6709\u6b63\u5f0f\u5206\u533a\u548c\u4e34\u65f6\u5206\u533a\u88ab\u5220\u9664\u4e14\u4e0d\u53ef\u6062\u590d\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE <table_name> \nREPLACE PARTITION (<partition_name1>[, ...]) WITH TEMPORARY PARTITION (<temporary_partition_name1>[, ...])\n[PROPERTIES ("key" = "value")];\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e-1",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"strict_range"}),"\n\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u8be5\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"true"})," \u65f6\uff0c\u8868\u793a\u539f\u6709\u6b63\u5f0f\u5206\u533a\u7684\u8303\u56f4\u5e76\u96c6\u548c\u4e34\u65f6\u5206\u533a\u7684\u8303\u56f4\u5e76\u96c6\u5fc5\u987b\u5b8c\u5168\u76f8\u540c\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"false"})," \u65f6\uff0c\u53ea\u9700\u8981\u4fdd\u8bc1\u66ff\u6362\u540e\uff0c\u65b0\u6b63\u5f0f\u5206\u533a\u548c\u5176\u4ed6\u6b63\u5f0f\u5206\u533a\u7684\u8303\u56f4\u4e0d\u91cd\u53e0\u5373\u53ef\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b 1\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u8303\u56f4\u5e76\u96c6\u76f8\u540c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"tp1"})," \u548c ",(0,c.jsx)(n.code,{children:"tp2"})," \u66ff\u6362 ",(0,c.jsx)(n.code,{children:"p1"}),"\u3001",(0,c.jsx)(n.code,{children:"p2"})," \u548c ",(0,c.jsx)(n.code,{children:"p3"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plaintext",children:"# \u539f\u6709\u6b63\u5f0f\u5206\u533a p1, p2, p3 \u7684\u8303\u56f4 (=> \u5e76\u96c6)\n[10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n\n# \u4e34\u65f6\u5206\u533a tp1, tp2 \u7684\u8303\u56f4 (=> \u5e76\u96c6)\n[10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b 2\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u8303\u56f4\u5e76\u96c6\u4e0d\u76f8\u540c\uff0c\u5982\u679c ",(0,c.jsx)(n.code,{children:"strict_range"})," \u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u4e0d\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"tp1"})," \u548c ",(0,c.jsx)(n.code,{children:"tp2"})," \u66ff\u6362 ",(0,c.jsx)(n.code,{children:"p1"}),"\u3002\u5982\u679c\u4e3a ",(0,c.jsx)(n.code,{children:"false"}),"\uff0c\u4e14\u4e34\u65f6\u5206\u533a\u8303\u56f4 [10, 30), [40, 50) \u548c\u5176\u4ed6\u6b63\u5f0f\u5206\u533a\u4e0d\u91cd\u53e0\uff0c\u5219\u53ef\u4ee5\u66ff\u6362\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plaintext",children:"# \u539f\u6709\u6b63\u5f0f\u5206\u533a p1 \u7684\u8303\u56f4 (=> \u5e76\u96c6)\n[10, 50) => [10, 50)\n\n# \u4e34\u65f6\u5206\u533a tp1, tp2 \u7684\u8303\u56f4 (=> \u5e76\u96c6)\n[10, 30), [40, 50) => [10, 30), [40, 50)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"use_temp_partition_name"}),"\n\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u539f\u6709\u6b63\u5f0f\u5206\u533a\u548c\u4e34\u65f6\u5206\u533a\u7684\u4e2a\u6570\u76f8\u540c\uff0c\u5f53\u8be5\u53c2\u6570\u4e3a\u9ed8\u8ba4\u503c ",(0,c.jsx)(n.code,{children:"false"}),"\uff0c\u5219\u65b0\u6b63\u5f0f\u5206\u533a\u7684\u540d\u79f0\u7ef4\u6301\u4e0d\u53d8\u3002\u5982\u679c\u4e3a ",(0,c.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u65b0\u6b63\u5f0f\u5206\u533a\u7684\u540d\u79f0\u53d8\u66f4\u4e3a\u4e34\u65f6\u5206\u533a\u7684\u540d\u79f0\u3002\n\u5728\u5982\u4e0b\u793a\u4f8b\u4e2d\uff0c\u5f53\u8be5\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"false"})," \u65f6\uff0c\u5219\u65b0\u6b63\u5f0f\u5206\u533a\u7684\u540d\u79f0\u4f9d\u7136\u4e3a ",(0,c.jsx)(n.code,{children:"p1"}),"\uff0c\u4f46\u662f\u76f8\u5173\u7684\u6570\u636e\u548c\u5c5e\u6027\u90fd\u66ff\u6362\u4e3a\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp1"})," \u7684\u6570\u636e\u548c\u5c5e\u6027\u3002\u5982\u679c\u8be5\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"true"})," \u65f6\uff0c\u5219\u65b0\u6b63\u5f0f\u5206\u533a\u7684\u540d\u79f0\u4e3a ",(0,c.jsx)(n.code,{children:"tp1"}),"\uff0c\u4e0d\u518d\u5b58\u5728\u6b63\u5f0f\u5206\u533a ",(0,c.jsx)(n.code,{children:"p1"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u539f\u6709\u6b63\u5f0f\u5206\u533a\u548c\u4e34\u65f6\u5206\u533a\u7684\u4e2a\u6570\u4e0d\u540c\uff0c\u5e76\u4e14\u8be5\u53c2\u6570\u4e3a\u9ed8\u8ba4\u503c ",(0,c.jsx)(n.code,{children:"false"}),"\uff0c\u4f46\u662f\u56e0\u4e3a\u539f\u6709\u6b63\u5f0f\u5206\u533a\u4e2a\u6570\u548c\u4e34\u65f6\u5206\u533a\u7684\u4e2a\u6570\u4e0d\u540c\uff0c\u56e0\u6b64\u8be5\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"false"})," \u65e0\u6548\u3002\u5728\u5982\u4e0b\u793a\u4f8b\u4e2d\uff0c\u65b0\u6b63\u5f0f\u5206\u533a\u7684\u540d\u79f0\u4e3a ",(0,c.jsx)(n.code,{children:"tp1"}),"\uff0c\u4e0d\u518d\u5b58\u5728\u6b63\u5f0f\u5206\u533a ",(0,c.jsx)(n.code,{children:"p1"})," \u548c ",(0,c.jsx)(n.code,{children:"p2"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp1"})," \u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a ",(0,c.jsx)(n.code,{children:"p1"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp2"})," \u548c ",(0,c.jsx)(n.code,{children:"tp3"})," \u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a ",(0,c.jsx)(n.code,{children:"p2"})," \u548c ",(0,c.jsx)(n.code,{children:"p3"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p2, p3) WITH TEMPORARY PARTITION (tp2, tp3);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp4"})," \u548c ",(0,c.jsx)(n.code,{children:"tp5"})," \u66ff\u6362\u539f\u6709\u6b63\u5f0f\u5206\u533a ",(0,c.jsx)(n.code,{children:"p4"})," \u548c ",(0,c.jsx)(n.code,{children:"p5"}),"\u3002\u5e76\u4e14\u6307\u5b9a\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"strict_range"})," \u4e3a ",(0,c.jsx)(n.code,{children:"false"}),"\uff0c",(0,c.jsx)(n.code,{children:"use_temp_partition_name"})," \u4e3a ",(0,c.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access REPLACE PARTITION (p4, p5) WITH TEMPORARY PARTITION (tp4, tp5)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5f53\u8868\u5b58\u5728\u4e34\u65f6\u5206\u533a\u65f6\uff0c\u65e0\u6cd5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"ALTER"})," \u547d\u4ee4\u5bf9\u8868\u8fdb\u884c Schema Change \u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5f53\u5bf9\u8868\u8fdb\u884c Schema Change \u64cd\u4f5c\u65f6\uff0c\u65e0\u6cd5\u5bf9\u8868\u6dfb\u52a0\u4e34\u65f6\u5206\u533a\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5220\u9664\u4e34\u65f6\u5206\u533a",children:"\u5220\u9664\u4e34\u65f6\u5206\u533a"}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u4e34\u65f6\u5206\u533a ",(0,c.jsx)(n.code,{children:"tp1"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE site_access DROP TEMPORARY PARTITION tp1;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"DROP"})," \u547d\u4ee4\u76f4\u63a5\u5220\u9664\u6570\u636e\u5e93\u6216\u8868\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u9650\u5b9a\u65f6\u95f4\u5185\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," \u547d\u4ee4\u6062\u590d\u8be5\u6570\u636e\u5e93\u6216\u8868\uff0c\u4f46\u4e34\u65f6\u5206\u533a\u65e0\u6cd5\u88ab\u6062\u590d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"ALTER"})," \u547d\u4ee4\u5220\u9664\u6b63\u5f0f\u5206\u533a\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u9650\u5b9a\u65f6\u95f4\u5185\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," \u547d\u4ee4\u6062\u590d\u3002\u6b63\u5f0f\u5206\u533a\u4e0e\u4e34\u65f6\u5206\u533a\u4e0d\u76f8\u5173\u8054\uff0c\u64cd\u4f5c\u6b63\u5f0f\u5206\u533a\u4e0d\u4f1a\u5bf9\u4e34\u65f6\u5206\u533a\u4ea7\u751f\u5f71\u54cd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"ALTER"})," \u547d\u4ee4\u5220\u9664\u4e34\u65f6\u5206\u533a\u540e\uff0c\u60a8\u65e0\u6cd5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," \u547d\u4ee4\u6062\u590d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"TRUNCATE"})," \u547d\u4ee4\u6e05\u7a7a\u8868\u540e\uff0c\u8868\u7684\u4e34\u65f6\u5206\u533a\u4f1a\u88ab\u5220\u9664\uff0c\u4e14\u4e0d\u53ef\u6062\u590d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"TRUNCATE"})," \u547d\u4ee4\u6e05\u7a7a\u6b63\u5f0f\u5206\u533a\u65f6\uff0c\u4e34\u65f6\u5206\u533a\u4e0d\u53d7\u5f71\u54cd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4e0d\u53ef\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"TRUNCATE"})," \u547d\u4ee4\u6e05\u7a7a\u4e34\u65f6\u5206\u533a\u3002"]}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>d});var c=s(67294);const i=c.createContext({});function d(e){const n=c.useContext(i);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:d(e),c.createElement(i.Provider,{value:r},n)}}}]);