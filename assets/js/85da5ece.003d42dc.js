"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67248],{78237:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>t,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=s(85893),c=s(11151);const l={},i="\u5347\u7ea7 Apache Doris \u81f3 StarRocks",d={id:"administration/update_from_doris",title:"\u5347\u7ea7 Apache Doris \u81f3 StarRocks",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 Apache Doris \u5347\u7ea7\u4e3a StarRocks\u3002",source:"@site/chinese_versioned_docs/version-2.5/administration/update_from_doris.md",sourceDirName:"administration",slug:"/administration/update_from_doris",permalink:"/doc/zh/2.5/administration/update_from_doris",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/update_from_doris.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u8bbe\u7f6e\u65f6\u533a",permalink:"/doc/zh/2.5/administration/timezone"},next:{title:"SSB Flat Table \u6027\u80fd\u6d4b\u8bd5",permalink:"/doc/zh/2.5/benchmarking/SSB_Benchmarking"}},a={},o=[{value:"\u68c0\u67e5\u5347\u7ea7\u73af\u5883",id:"\u68c0\u67e5\u5347\u7ea7\u73af\u5883",level:2},{value:"\u8f6c\u5316\u6570\u636e\u683c\u5f0f",id:"\u8f6c\u5316\u6570\u636e\u683c\u5f0f",level:2},{value:"\u5347\u7ea7 BE \u8282\u70b9",id:"\u5347\u7ea7-be-\u8282\u70b9",level:2},{value:"\u5347\u7ea7 FE \u8282\u70b9",id:"\u5347\u7ea7-fe-\u8282\u70b9",level:2},{value:"\u56de\u6eda\u65b9\u6848",id:"\u56de\u6eda\u65b9\u6848",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",a:"a",h2:"h2",ol:"ol",pre:"pre",code:"code",img:"img"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5347\u7ea7-apache-doris-\u81f3-starrocks",children:"\u5347\u7ea7 Apache Doris \u81f3 StarRocks"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 Apache Doris \u5347\u7ea7\u4e3a StarRocks\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u524d\u4ec5\u652f\u6301\u4ece Apache Doris 0.13.15\uff08\u4e0d\u5305\u542b\uff09\u4ee5\u524d\u7248\u672c\u5347\u7ea7\u81f3 StarRocks\u3002\u5982\u679c\u60a8\u9700\u8981\u5347\u7ea7 Apache Doris 0.13.15 \u81f3 StarRocks\uff0c\u8bf7\u8054\u7cfb\u5b98\u65b9\u4eba\u5458\u534f\u52a9\u4fee\u6539\u6e90\u7801\u3002\u5f53\u524d\u6682\u4e0d\u652f\u6301 Apache Doris 0.14 \u53ca\u4ee5\u540e\u7248\u672c\u5347\u7ea7\u81f3 StarRocks\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u56e0\u4e3a StarRocks \u652f\u6301 BE \u540e\u5411\u517c\u5bb9 FE\uff0c\u6240\u4ee5\u8bf7\u52a1\u5fc5",(0,r.jsx)(n.strong,{children:"\u5148\u5347\u7ea7 BE \u8282\u70b9\uff0c\u518d\u5347\u7ea7 FE \u8282\u70b9"}),"\u3002\u9519\u8bef\u7684\u5347\u7ea7\u987a\u5e8f\u53ef\u80fd\u5bfc\u81f4\u65b0\u65e7 FE\u3001BE \u8282\u70b9\u4e0d\u517c\u5bb9\uff0c\u8fdb\u800c\u5bfc\u81f4 BE \u8282\u70b9\u505c\u6b62\u670d\u52a1\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8bf7\u8c28\u614e\u8de8\u7248\u672c\u5347\u7ea7\u3002\u5982\u9700\u8de8\u7248\u672c\u5347\u7ea7\uff0c\u5efa\u8bae\u60a8\u5728\u6d4b\u8bd5\u73af\u5883\u9a8c\u8bc1\u65e0\u8bef\u540e\u518d\u5347\u7ea7\u751f\u4ea7\u73af\u5883\u3002Apache Doris \u5347\u7ea7\u81f3 Starrocks-2.x \u7248\u672c\u65f6\u9700\u8981\u524d\u7f6e\u5f00\u542f CBO\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u5148\u5c06 Apache Doris \u5347\u7ea7\u81f3 StarRocks 1.19.x \u7248\u672c\u3002\u60a8\u53ef\u4ee5\u5728",(0,r.jsx)(n.a,{href:"https://www.mirrorship.cn/zh-CN/download",children:"\u5b98\u7f51"}),"\u83b7\u53d6 1.19.x \u7248\u672c\u7684\u5b89\u88c5\u5305\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u68c0\u67e5\u5347\u7ea7\u73af\u5883",children:"\u68c0\u67e5\u5347\u7ea7\u73af\u5883"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u67e5\u770b\u539f\u6709\u96c6\u7fa4\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SHOW FRONTENDS;\nSHOW BACKENDS;\nSHOW BROKER;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8bb0\u5f55 FE\u3001BE \u7684 \u6570\u91cf\u3001IP \u5730\u5740\u3001\u7248\u672c\u7b49\u4fe1\u606f\uff0c\u4ee5\u53ca FE \u7684 Leader\u3001Follower\u3001Observer \u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u786e\u8ba4\u5b89\u88c5\u76f8\u5173\u8def\u5f84\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5047\u8bbe\u539f Apache Doris \u76ee\u5f55\u4e3a ",(0,r.jsx)(n.code,{children:"/home/doris/doris/"}),"\uff0cStarrocks \u65b0\u76ee\u5f55\u4e3a ",(0,r.jsx)(n.code,{children:"/home/starrocks/starrocks/"}),"\u3002\u4e3a\u51cf\u5c11\u8bef\u64cd\u4f5c\uff0c\u540e\u7eed\u6b65\u9aa4\u5c06\u91c7\u7528\u5168\u8def\u5f84\u65b9\u5f0f\u3002\u8bf7\u6839\u636e\u60a8\u7684\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u793a\u4f8b\u4e2d\u7684\u8def\u5f84\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cApache Doris \u76ee\u5f55\u53ef\u80fd\u4e3a ",(0,r.jsx)(n.code,{children:"/disk1/doris"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b BE \u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u68c0\u67e5 ",(0,r.jsx)(n.strong,{children:"be.conf"})," \u6587\u4ef6\u4e2d ",(0,r.jsx)(n.code,{children:"default_rowset_type"})," \u914d\u7f6e\u9879\u7684\u503c\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8be5\u914d\u7f6e\u9879\u7684\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"ALPHA"}),"\uff0c\u5219\u8bf4\u660e\u5168\u90e8\u6570\u636e\u90fd\u4f7f\u7528 segmentV1 \u683c\u5f0f\uff0c\u9700\u8981\u4fee\u6539\u914d\u7f6e\u9879\u4e3a BETA\uff0c\u5e76\u505a\u540e\u7eed\u68c0\u67e5\u548c\u8f6c\u6362\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8be5\u914d\u7f6e\u9879\u7684\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"BETA"}),"\uff0c\u5219\u8bf4\u660e\u6570\u636e\u5df2\u4f7f\u7528 segmentV2 \u683c\u5f0f\uff0c\u4f46\u53ef\u80fd\u4ecd\u6709\u90e8\u5206 Tablet \u6216 Rowset \u4f7f\u7528 segmentV1 \u683c\u5f0f\uff0c\u9700\u8981\u505a\u540e\u7eed\u68c0\u67e5\u548c\u8f6c\u6362\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6d4b\u8bd5 SQL \u60c5\u51b5\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"show databases;\nuse {one_db};\nshow tables;\nshow data;\nselect count(*) from {one_table};\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8f6c\u5316\u6570\u636e\u683c\u5f0f",children:"\u8f6c\u5316\u6570\u636e\u683c\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u8f6c\u6362\u8fc7\u7a0b\u5c06\u82b1\u8d39\u8f83\u957f\u65f6\u95f4\u3002\u5982\u679c\u6570\u636e\u4e2d\u5b58\u5728\u5927\u91cf segmentV1 \u683c\u5f0f\u6570\u636e\uff0c\u5efa\u8bae\u60a8\u63d0\u524d\u8fdb\u884c\u8f6c\u5316\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68c0\u67e5\u6587\u4ef6\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"a. \u4e0b\u8f7d\u5e76\u5b89\u88c5\u6587\u4ef6\u683c\u5f0f\u68c0\u6d4b\u5de5\u5177\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 git clone \u6216\u76f4\u63a5\u4ece\u5f53\u524d\u5730\u5740\u76f4\u63a5\u4e0b\u8f7d\u3002\nwget http://Starrocks-public.oss-cn-zhangjiakou.aliyuncs.com/show_segment_status.tar.gz\ntar -zxvf show_segment_status.tar.gz\n"})}),"\n",(0,r.jsxs)(n.p,{children:["b. \u4fee\u6539\u5b89\u88c5\u8def\u5f84\u4e0b\u7684 ",(0,r.jsx)(n.strong,{children:"conf"})," \u6587\u4ef6\uff0c\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u914d\u7f6e\u4ee5\u4e0b\u914d\u7f6e\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"[cluster]\nfe_host =10.0.2.170\nquery_port =9030\nuser = root\nquery_pwd = ****\n\n# Following confs are optional\n# select one database\ndb_names =              // \u586b\u5199\u6570\u636e\u5e93\u540d\n# select one table\ntable_names =           // \u586b\u5199\u8868\u540d\n# select one be. when value is 0 means all bes\nbe_id = 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"c. \u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u8fd0\u884c\u68c0\u6d4b\u811a\u672c\uff0c\u68c0\u6d4b\u6570\u636e\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python show_segment_status.py\n"})}),"\n",(0,r.jsxs)(n.p,{children:["d. \u68c0\u67e5\u4ee5\u4e0a\u5de5\u5177\u8f93\u51fa\u4fe1\u606f ",(0,r.jsx)(n.code,{children:"rowset_count"})," \u7684\u4e24\u4e2a\u503c\u662f\u5426\u76f8\u7b49\u3002\u5982\u679c\u6570\u76ee\u4e0d\u76f8\u7b49\uff0c\u8bf4\u660e\u6570\u636e\u4e2d\u5b58\u5728 segmentv1 \u683c\u5f0f\u7684\u8868\uff0c\u9700\u8981\u8fdb\u884c\u5bf9\u8be5\u90e8\u5206\u6570\u636e\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8f6c\u6362\u6570\u636e\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"a. \u8f6c\u6362\u6570\u636e\u683c\u5f0f\u4e3a segmentV1 \u7684\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE table_name SET ("storage_format" = "v2");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["b. \u67e5\u770b\u8f6c\u5316\u72b6\u6001\u3002\u5f53 ",(0,r.jsx)(n.code,{children:"status"})," \u5b57\u6bb5\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"FINISHED"})," \u65f6\uff0c\u8868\u660e\u683c\u5f0f\u8f6c\u6362\u5b8c\u6210\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE column;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["c. \u91cd\u590d\u8fd0\u884c\u6570\u636e\u683c\u5f0f\u68c0\u67e5\u5de5\u5177\u67e5\u770b\u6570\u636e\u683c\u5f0f\u72b6\u6001\u3002\u5982\u679c\u5df2\u7ecf\u663e\u793a\u6210\u529f\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"storage_format"})," \u4e3a ",(0,r.jsx)(n.code,{children:"V2"})," \u4e86\uff0c\u4f46\u4ecd\u6709\u6570\u636e\u4e3a segmentV1 \u683c\u5f0f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u4e00\u6b65\u68c0\u67e5\u5e76\u8f6c\u6362\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:"i.   \u9010\u4e2a\u67e5\u8be2\u6240\u6709\u8868\uff0c\u83b7\u53d6\u8868\u7684\u5143\u6570\u636e\u94fe\u63a5\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET FROM table_name;\n"})}),"\n",(0,r.jsx)(n.p,{children:"ii.  \u901a\u8fc7\u5143\u6570\u636e\u94fe\u63a5\u83b7\u53d6 Tablet \u5143\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget http://172.26.92.139:8640/api/meta/header/11010/691984191\n"})}),"\n",(0,r.jsxs)(n.p,{children:["iii. \u67e5\u770b\u672c\u5730\u7684\u5143\u6570\u636e JSON \u6587\u4ef6\uff0c\u786e\u8ba4\u5176\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"rowset_type"})," \u7684\u503c\u3002\u5982\u679c\u4e3a ",(0,r.jsx)(n.code,{children:"ALPHA_ROWSET"}),"\uff0c\u5219\u8868\u660e\u8be5\u6570\u636e\u4e3a segmentV1 \u683c\u5f0f\uff0c\u9700\u8981\u8fdb\u884c\u8f6c\u6362\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"iv.  \u5982\u679c\u4ecd\u6709\u6570\u636e\u4e3a segmentV1 \u683c\u5f0f\uff0c\u60a8\u9700\u8981\u901a\u8fc7\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u7684\u65b9\u6cd5\u8f6c\u6362\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE dwd_user_tradetype_d\nADD TEMPORARY PARTITION p09\nVALUES [('2020-09-01'), ('2020-10-01')]\n(\"replication_num\" = \"3\")\nDISTRIBUTED BY HASH(`dt`, `c`, `city`, `trade_hour`) BUCKETS 16;\n\nINSERT INTO dwd_user_tradetype_d TEMPORARY partition(p09)\nselect * from dwd_user_tradetype_d partition(p202009);\n\nALTER TABLE dwd_user_tradetype_d\nREPLACE PARTITION (p202009) WITH TEMPORARY PARTITION (p09);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5347\u7ea7-be-\u8282\u70b9",children:"\u5347\u7ea7 BE \u8282\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5347\u7ea7\u9075\u5faa",(0,r.jsx)(n.strong,{children:"\u5148\u5347\u7ea7 BE\uff0c\u540e\u5347\u7ea7 FE"}),"\u7684\u987a\u5e8f\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1aBE \u5347\u7ea7\u91c7\u7528\u9010\u53f0\u5347\u7ea7\u7684\u65b9\u5f0f\u3002\u5b8c\u6210\u5f53\u524d\u673a\u5668\u5347\u7ea7\u540e\uff0c\u987b\u95f4\u9694\u4e00\u5b9a\u65f6\u95f4\uff08\u63a8\u8350\u65f6\u95f4\u95f4\u9694\u4e3a\u4e00\u5929\uff09\u786e\u4fdd\u5f53\u524d\u673a\u5668\u5347\u7ea7\u65e0\u8bef\u540e\uff0c\u518d\u5347\u7ea7\u5176\u4ed6\u673a\u5668\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5e76\u89e3\u538b\u7f29 StarRocks \u5b89\u88c5\u5305\uff0c\u5e76\u91cd\u547d\u540d\u5b89\u88c5\u8def\u5f84\u4e3a ",(0,r.jsx)(n.strong,{children:"Starrocks"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~\ntar xzf Starrocks-EE-1.19.6/file/Starrocks-1.19.6.tar.gz\nmv Starrocks-1.19.6/ Starrocks\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u8f83\u5e76\u62f7\u8d1d\u539f\u6709 ",(0,r.jsx)(n.strong,{children:"conf/be.conf"})," \u7684\u5185\u5bb9\u5230\u65b0\u7684 BE ",(0,r.jsx)(n.strong,{children:"conf/be.conf"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u6bd4\u8f83\u5e76\u4fee\u6539\u548c\u62f7\u8d1d\nvimdiff /home/doris/Starrocks/be/conf/be.conf /home/doris/doris/be/conf/be.conf\n\n# \u62f7\u8d1d\u4ee5\u4e0b\u914d\u7f6e\u5230\u65b0 BE \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528\u539f\u6709\u6570\u636e\u76ee\u5f55\u3002\nstorage_root_path =     // \u539f\u6709\u6570\u636e\u76ee\u5f55\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68c0\u67e5\u7cfb\u7edf\u662f\u5426\u4f7f\u7528 Supervisor \u542f\u52a8 BE\uff0c\u5e76\u5173\u95ed BE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u68c0\u67e5\u539f\u6709\u8fdb\u7a0b\uff08palo_be)\u3002\nps aux | grep palo_be\n# \u68c0\u67e5 doris \u8d26\u6237\u4e0b\u662f\u5426\u6709 Supervisor \u8fdb\u7a0b\u3002\nps aux | grep supervisor\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u5df2\u90e8\u7f72\u5e76\u4f7f\u7528 Supervisor \u542f\u52a8 BE\uff0c\u60a8\u9700\u8981\u901a\u8fc7 Supervisor \u53d1\u9001\u547d\u4ee4\u5173\u95ed BE\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /home/doris/doris/be && ./control.sh stop && cd -\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u90e8\u7f72 Supervisor\uff0c\u60a8\u9700\u8981\u624b\u52a8\u5173\u95ed BE\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sh /home/doris/doris/be/bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b BE \u8fdb\u7a0b\u72b6\u6001\uff0c\u786e\u8ba4\u8282\u70b9 ",(0,r.jsx)(n.code,{children:"Alive"})," \u4e3a ",(0,r.jsx)(n.code,{children:"false"}),"\uff0c\u5e76\u4e14 ",(0,r.jsx)(n.code,{children:"LastStartTime"})," \u4e3a\u6700\u65b0\u65f6\u95f4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW BACKENDS;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u786e\u8ba4 BE \u8fdb\u7a0b\u5df2\u4e0d\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps aux | grep be\nps aux | grep supervisor\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u65b0\u7684 BE \u8282\u70b9\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sh /home/doris/Starrocks/be/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68c0\u67e5\u5347\u7ea7\u7ed3\u679c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770b\u65b0 BE \u8fdb\u7a0b\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps aux | grep be\nps aux | grep supervisor\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u67e5\u770b\u8282\u70b9 ",(0,r.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW BACKENDS;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u67e5\u770b ",(0,r.jsx)(n.strong,{children:"be.out"}),"\uff0c\u68c0\u67e5\u662f\u5426\u6709\u5f02\u5e38\u65e5\u5fd7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u67e5\u770b ",(0,r.jsx)(n.strong,{children:"be.INFO"}),"\uff0c\u68c0\u67e5 heartbeat \u662f\u5426\u6b63\u5e38\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u67e5\u770b ",(0,r.jsx)(n.strong,{children:"be.WARN"}),"\uff0c \u68c0\u67e5\u662f\u5426\u6709\u5f02\u5e38\u65e5\u5fd7\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u6210\u529f\u5347\u7ea7 2 \u4e2a BE \u8282\u70b9\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"SHOW FRONTENDS;"})," \u67e5\u770b ",(0,r.jsx)(n.code,{children:"ReplayedJournalId"})," \u662f\u5426\u5728\u589e\u957f\uff0c\u4ee5\u68c0\u6d4b\u5bfc\u5165\u662f\u5426\u5b58\u5728\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5347\u7ea7-fe-\u8282\u70b9",children:"\u5347\u7ea7 FE \u8282\u70b9"}),"\n",(0,r.jsx)(n.p,{children:"\u6210\u529f\u5347\u7ea7 BE \u8282\u70b9\u540e\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u5347\u7ea7 FE \u8282\u70b9\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5347\u7ea7 FE \u9075\u5faa",(0,r.jsx)(n.strong,{children:"\u5148\u5347\u7ea7 Observer\uff0c\u518d\u5347\u7ea7 Follower\uff0c\u6700\u540e\u5347\u7ea7 Leader"})," \u7684\u987a\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4fee\u6539 FE \u6e90\u7801\uff08\u53ef\u9009\uff0c\u5982\u679c\u60a8\u65e0\u9700\u4ece Apache Doris 0.13.15 \u7248\u672c\u5347\u7ea7\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"a. \u4e0b\u8f7d\u6e90\u7801 patch\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wget "http://starrocks-public.oss-cn-zhangjiakou.aliyuncs.com/upgrade_from_apache_0.13.15.patch"\n'})}),"\n",(0,r.jsx)(n.p,{children:"b. \u5408\u5165\u6e90\u7801 patch\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7 Git \u5408\u5165\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git apply --reject upgrade_from_apache_0.13.15.patch\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u672c\u5730\u4ee3\u7801\u4e0d\u5728 Git \u73af\u5883\u4e2d\uff0c\u60a8\u4e5f\u53ef\u4ee5\u6839\u636e patch \u7684\u5185\u5bb9\u624b\u52a8\u5408\u5165\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"c. \u7f16\u8bd1 FE \u6a21\u5757\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./build.sh --fe --clean\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u786e\u5b9a\u5404 FE \u8282\u70b9\u7684 Leader \u548c Follower \u8eab\u4efd\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTENDS;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c ",(0,r.jsx)(n.code,{children:"IsMaster"})," \u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"\uff0c\u4ee3\u8868\u8be5\u8282\u70b9\u4e3a Leader\uff0c\u5426\u5219\u4e3a Follower \u6216 Observer\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68c0\u67e5\u7cfb\u7edf\u662f\u5426\u4f7f\u7528 Supervisor \u542f\u52a8\u7684 FE\uff0c\u5e76\u5173\u95ed FE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u539f\u6709\u8fdb\u7a0b\u3002\nps aux | grep fe\n# \u68c0\u67e5 Doris \u8d26\u6237\u4e0b\u662f\u5426\u6709 Supervisor \u8fdb\u7a0b\nps aux | grep supervisor\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u5df2\u90e8\u7f72\u5e76\u4f7f\u7528 Supervisor \u542f\u52a8 FE\uff0c\u60a8\u9700\u8981\u901a\u8fc7 Supervisor \u53d1\u9001\u547d\u4ee4\u5173\u95ed FE\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /home/doris/doris/fe && ./control.sh stop && cd -\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u90e8\u7f72 Supervisor\uff0c\u60a8\u9700\u8981\u624b\u52a8\u5173\u95ed BE\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sh /home/doris/doris/fe/bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b FE \u8fdb\u7a0b\u72b6\u6001\uff0c\u786e\u8ba4\u8282\u70b9 ",(0,r.jsx)(n.code,{children:"Alive"})," \u4e3a ",(0,r.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTENDS;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u786e\u8ba4 BE \u8fdb\u7a0b\u5df2\u4e0d\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps aux | grep fe\nps aux | grep supervisor\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5347\u7ea7 Follower \u6216\u8005 Leader \u4e4b\u524d\uff0c\u52a1\u5fc5\u786e\u4fdd\u5907\u4efd\u5143\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5347\u7ea7\u7684\u65e5\u671f\u505a\u5907\u4efd\u65f6\u95f4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp -r /home/doris/doris/fe/palo-meta /home/doris/doris/fe/doris-meta\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u8f83\u5e76\u62f7\u8d1d\u539f\u6709 ",(0,r.jsx)(n.strong,{children:"conf/fe.conf"})," \u7684\u5185\u5bb9\u5230\u65b0 FE \u7684 ",(0,r.jsx)(n.strong,{children:"conf/fe.conf"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u6bd4\u8f83\u5e76\u4fee\u6539\u548c\u62f7\u8d1d\u3002\nvimdiff /home/doris/Starrocks/fe/conf/fe.conf /home/doris/doris/fe/conf/fe.conf\n\n# \u4fee\u6539\u6b64\u884c\u914d\u7f6e\u5230\u65b0 FE \u4e2d\uff0c\u5728\u539f doris \u76ee\u5f55\uff0c\u65b0\u7684 meta \u6587\u4ef6\uff08\u540e\u9762\u4f1a\u62f7\u8d1d\uff09\u3002\nmeta_dir = /home/doris/doris/fe/doris-meta\n# \u7ef4\u6301\u539f\u6709java\u5806\u5927\u5c0f\u7b49\u4fe1\u606f\u3002\nJAVA_OPTS="-Xmx8192m\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u65b0\u7684 FE \u8282\u70b9\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sh /home/doris/Starrocks/fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68c0\u67e5\u5347\u7ea7\u7ed3\u679c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770b\u65b0 FE \u8fdb\u7a0b\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps aux | grep be\nps aux | grep supervisor\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u67e5\u770b\u8282\u70b9 ",(0,r.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW BACKENDS;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u67e5\u770b ",(0,r.jsx)(n.strong,{children:"fe.out"})," \u6216 ",(0,r.jsx)(n.strong,{children:"fe.log"}),"\uff0c\u68c0\u67e5\u662f\u5426\u6709\u5f02\u5e38\u65e5\u5fd7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c ",(0,r.jsx)(n.strong,{children:"fe.log"})," \u59cb\u7ec8\u662f UNKNOWN \u72b6\u6001\uff0c\u6ca1\u6709\u53d8\u6210 Follower\u3001Observer\uff0c\u8bf4\u660e\u5347\u7ea7\u51fa\u73b0\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u901a\u8fc7\u4fee\u6539\u6e90\u7801\u5347\u7ea7\uff0c\u9700\u8981\u7b49\u5143\u6570\u636e\u4ea7\u751f\u65b0 image \u4e4b\u540e\uff08\u65e2 ",(0,r.jsx)(n.strong,{children:"meta/image"})," \u76ee\u5f55\u4e0b\u6709\u65b0\u7684 ",(0,r.jsx)(n.strong,{children:"image.xxx"})," \u6587\u4ef6\u751f\u6210\uff09\uff0c\u518d\u5c06 ",(0,r.jsx)(n.strong,{children:"fe/lib"})," \u8def\u5f84\u66ff\u6362\u56de\u65b0\u7684\u5b89\u88c5\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u56de\u6eda\u65b9\u6848",children:"\u56de\u6eda\u65b9\u6848"}),"\n",(0,r.jsx)(n.p,{children:"\u4ece Apache Doris \u5347\u7ea7\u7684 StarRocks \u6682\u65f6\u4e0d\u652f\u6301\u56de\u6eda\u3002\u5efa\u8bae\u60a8\u5728\u6d4b\u8bd5\u73af\u5883\u9a8c\u8bc1\u6d4b\u8bd5\u6210\u529f\u540e\u518d\u5347\u7ea7\u81f3\u751f\u4ea7\u73af\u5883\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u9047\u5230\u65e0\u6cd5\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u4e0b\u65b9\u4f01\u4e1a\u5fae\u4fe1\u5bfb\u6c42\u5e2e\u52a9\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u4e8c\u7ef4\u7801",src:s(85047).Z+"",width:"396",height:"396"})})]})}const t=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},85047:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/8.3.1-11103c7c06c37942bed8219fe23d4d9f.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>l});var r=s(67294);const c=r.createContext({});function l(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:l(e),r.createElement(c.Provider,{value:d},n)}}}]);