"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27594],{47965:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(85893),l=s(11151);const t={displayed_sidebar:"Chinese"},a="ARRAY",c={id:"sql-reference/sql-statements/data-types/Array",title:"ARRAY",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 StarRocks \u4e2d\u7684\u6570\u7ec4\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/Array.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/Array",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/Array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/Array.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",permalink:"/doc/zh/docs/category/\u534a\u7ed3\u6784\u5316\u7c7b\u578b"},next:{title:"JSON",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/JSON"}},i={},d=[{value:"\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u7684\u5217",id:"\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u7684\u5217",level:2},{value:"\u4f7f\u7528 SELECT \u8bed\u53e5\u6784\u9020\u6570\u7ec4",id:"\u4f7f\u7528-select-\u8bed\u53e5\u6784\u9020\u6570\u7ec4",level:2},{value:"\u5bfc\u5165\u6570\u7ec4\u7c7b\u578b\u7684\u6570\u636e",id:"\u5bfc\u5165\u6570\u7ec4\u7c7b\u578b\u7684\u6570\u636e",level:2},{value:"\u901a\u8fc7 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u7ec4",id:"\u901a\u8fc7-insert-into-\u8bed\u53e5\u5bfc\u5165\u6570\u7ec4",level:3},{value:"\u901a\u8fc7 Broker Load \u6279\u91cf\u5bfc\u5165 ORC \u6216 Parquet \u6587\u4ef6\u4e2d\u7684\u6570\u7ec4",id:"\u901a\u8fc7-broker-load-\u6279\u91cf\u5bfc\u5165-orc-\u6216-parquet-\u6587\u4ef6\u4e2d\u7684\u6570\u7ec4",level:3},{value:"\u901a\u8fc7 Stream Load \u6216 Routine Load \u5bfc\u5165 CSV \u683c\u5f0f\u6570\u7ec4",id:"\u901a\u8fc7-stream-load-\u6216-routine-load-\u5bfc\u5165-csv-\u683c\u5f0f\u6570\u7ec4",level:3},{value:"\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u5143\u7d20",id:"\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u5143\u7d20",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",h3:"h3",a:"a"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array",children:"ARRAY"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 StarRocks \u4e2d\u7684\u6570\u7ec4\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u7ec4\uff08Array) \u662f\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u79cd\u6269\u5c55\u6570\u636e\u7c7b\u578b\uff0c\u5176\u76f8\u5173\u7279\u6027\u5728\u4f17\u591a\u6570\u636e\u5e93\u7cfb\u7edf\u4e2d\u5747\u6709\u652f\u6301\uff0c\u53ef\u4ee5\u5e7f\u6cdb\u7684\u5e94\u7528\u4e8e A/B Test \u5bf9\u6bd4\u3001\u7528\u6237\u6807\u7b7e\u5206\u6790\u3001\u4eba\u7fa4\u753b\u50cf\u7b49\u573a\u666f\u3002StarRocks \u5f53\u524d\u652f\u6301\u591a\u7ef4\u6570\u7ec4\u5d4c\u5957\u3001\u6570\u7ec4\u5207\u7247\u3001\u6bd4\u8f83\u3001\u8fc7\u6ee4\u7b49\u7279\u6027\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u7684\u5217",children:"\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u7684\u5217"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u7684\u5217\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- \u5b9a\u4e49\u4e00\u7ef4\u6570\u7ec4\u3002\nARRAY<type>\n\n-- \u5b9a\u4e49\u5d4c\u5957\u6570\u7ec4\u3002\nARRAY<ARRAY<type>>\n\n-- \u5b9a\u4e49 NOT NULL \u6570\u7ec4\u5217\u3002\nARRAY<type> NOT NULL\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u7ec4\u5217\u7684\u5b9a\u4e49\u5f62\u5f0f\u4e3a ",(0,r.jsx)(n.code,{children:"ARRAY<type>"}),"\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"type"})," \u8868\u793a\u6570\u7ec4\u5185\u7684\u5143\u7d20\u7c7b\u578b\u3002\u6570\u7ec4\u5143\u7d20\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\uff1aBOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001VARCHAR\u3001CHAR\u3001DATETIME\u3001DATE\u3001JSON\u3001BINARY (3.0 \u53ca\u4ee5\u540e\uff09\u3001MAP (3.1 \u53ca\u4ee5\u540e\uff09\u3001STRUCT (3.1 \u53ca\u4ee5\u540e\uff09\u3001Fast Decimal (3.1 \u53ca\u4ee5\u540e)\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u7ec4\u5185\u7684\u5143\u7d20\u9ed8\u8ba4\u53ef\u4ee5\u4e3a NULL\uff0c\u6bd4\u5982 [NULL, 1, 2]\u3002\u6682\u65f6\u4e0d\u652f\u6301\u6307\u5b9a\u6570\u7ec4\u5143\u7d20\u4e3a NOT NULL\uff0c\u4f46\u662f\u60a8\u53ef\u4ee5\u5b9a\u4e49\u6570\u7ec4\u5217\u672c\u8eab\u4e3a NOT NULL\uff0c\u6bd4\u5982\u4e0a\u9762\u7684\u7b2c\u4e09\u4e2a\u793a\u4f8b\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u7ec4\u7c7b\u578b\u7684\u5217\u5728\u4f7f\u7528\u65f6\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"StarRocks 2.1 \u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u4ec5\u652f\u6301\u5728\u660e\u7ec6\u6a21\u578b\u8868\u4e2d\uff08Duplicate Key\uff09\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u5217\u3002\u81ea 2.1 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5728 Primary Key\u3001Unique Key\u3001Aggregate Key \u6a21\u578b\u8868\u4e2d\u5b9a\u4e49\u6570\u7ec4\u7c7b\u578b\u5217\u3002\u6ce8\u610f\u5728\u805a\u5408\u6a21\u578b\u8868\uff08Aggregate Key) \u4e2d\uff0c\u4ec5\u5f53\u805a\u5408\u5217\u7684\u805a\u5408\u51fd\u6570\u4e3a replace \u548c replace_if_not_null \u65f6\uff0c\u624d\u652f\u6301\u5c06\u8be5\u5217\u5b9a\u4e49\u4e3a\u6570\u7ec4\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u7ec4\u5217\u6682\u65f6\u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u7ec4\u5217\u4e0d\u80fd\u4f5c\u4e3a\u5206\u6876\uff08Distributed By\uff09\u5217\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u7ec4\u5217\u4e0d\u80fd\u4f5c\u4e3a\u5206\u533a\uff08Partition By\uff09\u5217\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u7ec4\u5217\u6682\u4e0d\u652f\u6301 DECIMAL V3 \u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u7ec4\u5217\u6700\u591a\u652f\u6301 14 \u5c42\u5d4c\u5957\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- \u5efa\u8868\u5e76\u6307\u5b9a\u5176\u4e2d\u7684 `c1` \u5217\u4e3a\u4e00\u7ef4\u6570\u7ec4\uff0c\u5143\u7d20\u7c7b\u578b\u4e3a INT\u3002\ncreate table t0(\n  c0 INT,\n  c1 ARRAY<INT>\n)\nduplicate key(c0)\ndistributed by hash(c0);\n\n-- \u5efa\u8868\u5e76\u6307\u5b9a `c1` \u4e3a\u4e24\u5c42\u7684\u5d4c\u5957\u6570\u7ec4\uff0c\u5143\u7d20\u7c7b\u578b\u4e3a VARCHAR\u3002\ncreate table t1(\n  c0 INT,\n  c1 ARRAY<ARRAY<VARCHAR(10)>>\n)\nduplicate key(c0)\ndistributed by hash(c0);\n\n-- \u5efa\u8868\u5e76\u5b9a\u4e49 NOT NULL \u6570\u7ec4\u7684\u5217\u3002\ncreate table t2(\n  c0 INT,\n  c1 ARRAY<INT> NOT NULL\n)\nduplicate key(c0)\ndistributed by hash(c0);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-select-\u8bed\u53e5\u6784\u9020\u6570\u7ec4",children:"\u4f7f\u7528 SELECT \u8bed\u53e5\u6784\u9020\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 SQL \u8bed\u53e5\u4e2d\u901a\u8fc7\u4e2d\u62ec\u53f7\uff08",(0,r.jsx)(n.code,{children:"[]"}),"\uff09\u6765\u6784\u9020\u6570\u7ec4\u5e38\u91cf\uff0c\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u901a\u8fc7\u9017\u53f7\uff08",(0,r.jsx)(n.code,{children:","}),"\uff09\u5206\u9694\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select [1, 2, 3] as numbers;\n\n+---------+\n| numbers |\n+---------+\n| [1,2,3] |\n+---------+\n\nmysql> select ["apple", "orange", "pear"] as fruit;\n\n+---------------------------+\n| fruit                     |\n+---------------------------+\n| ["apple","orange","pear"] |\n+---------------------------+\n\nmysql> select [true, false] as booleans;\n\n+----------+\n| booleans |\n+----------+\n| [1,0]    |\n+----------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6570\u7ec4\u5143\u7d20\u5177\u6709\u4e0d\u540c\u7c7b\u578b\u65f6\uff0cStarRocks \u4f1a\u81ea\u52a8\u63a8\u5bfc\u51fa\u5408\u9002\u7684\u7c7b\u578b\uff08supertype\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select [1, 1.2] as floats;\n\n+---------+\n| floats  |\n+---------+\n| [1,1.2] |\n+---------+\n\nmysql> select [12, "100"];\n\n+--------------+\n| [12,\'100\']   |\n+--------------+\n| ["12","100"] |\n+--------------+\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u5c16\u62ec\u53f7\uff08",(0,r.jsx)(n.code,{children:"<>"}),"\uff09\u58f0\u660e\u6570\u7ec4\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select ARRAY<float>[1, 2];\n\n+-----------------------+\n| ARRAY<float>[1.0,2.0] |\n+-----------------------+\n| [1,2]                 |\n+-----------------------+\n\nmysql> select ARRAY<INT>["12", "100"];\n\n+------------------------+\n| ARRAY<int(11)>[12,100] |\n+------------------------+\n| [12,100]               |\n+------------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u7ec4\u5143\u7d20\u4e2d\u53ef\u4ee5\u5305\u542b NULL\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1, NULL];\n\n+----------+\n| [1,NULL] |\n+----------+\n| [1,null] |\n+----------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9a\u4e49\u7a7a\u6570\u7ec4\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5c16\u62ec\u53f7\u58f0\u660e\u5176\u7c7b\u578b\u3002\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4e49\u4e3a ",(0,r.jsx)(n.code,{children:"[]"}),"\uff0c\u6b64\u65f6 StarRocks \u4f1a\u6839\u636e\u4e0a\u4e0b\u6587\u63a8\u65ad\u5176\u7c7b\u578b\uff0c\u5982\u679c\u65e0\u6cd5\u63a8\u65ad\u5219\u4f1a\u62a5\u9519\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [];\n\n+------+\n| []   |\n+------+\n| []   |\n+------+\n\nmysql> select ARRAY<VARCHAR(10)>[];\n\n+----------------------------------+\n| ARRAY<unknown type: NULL_TYPE>[] |\n+----------------------------------+\n| []                               |\n+----------------------------------+\n\nmysql> select array_append([], 10);\n\n+----------------------+\n| array_append([], 10) |\n+----------------------+\n| [10]                 |\n+----------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5bfc\u5165\u6570\u7ec4\u7c7b\u578b\u7684\u6570\u636e",children:"\u5bfc\u5165\u6570\u7ec4\u7c7b\u578b\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u5f53\u524d\u652f\u6301\u4e09\u79cd\u65b9\u5f0f\u5199\u5165\u6570\u7ec4\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-insert-into-\u8bed\u53e5\u5bfc\u5165\u6570\u7ec4",children:"\u901a\u8fc7 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u7ec4"}),"\n",(0,r.jsx)(n.p,{children:"INSERT INTO \u8bed\u53e5\u5bfc\u5165\u65b9\u5f0f\u9002\u5408\u5c0f\u6279\u91cf\u6570\u636e\u9010\u884c\u5bfc\u5165\u6216\u5bf9 StarRocks \u5185\u5916\u90e8\u8868\u6570\u636e\u8fdb\u884c ETL \u5904\u7406\u5e76\u5bfc\u5165\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"create table t0(\n  c0 INT,\n  c1 ARRAY<INT>\n)\nduplicate key(c0)\ndistributed by hash(c0);\nINSERT INTO t0 VALUES(1, [1,2,3]);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-broker-load-\u6279\u91cf\u5bfc\u5165-orc-\u6216-parquet-\u6587\u4ef6\u4e2d\u7684\u6570\u7ec4",children:"\u901a\u8fc7 Broker Load \u6279\u91cf\u5bfc\u5165 ORC \u6216 Parquet \u6587\u4ef6\u4e2d\u7684\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u4e2d\u7684\u6570\u7ec4\u7c7b\u578b\uff0c\u4e0e ORC \u6216 Parquet \u683c\u5f0f\u4e2d\u7684 List \u7ed3\u6784\u76f8\u5bf9\u5e94\uff0c\u6240\u4ee5\u65e0\u9700\u989d\u5916\u6307\u5b9a\u3002\u5177\u4f53\u5bfc\u5165\u65b9\u6cd5\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker load"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u524d StarRocks \u652f\u6301\u76f4\u63a5\u5bfc\u5165 ORC \u6587\u4ef6\u7684 List \u7ed3\u6784\u3002Parquet \u683c\u5f0f\u5bfc\u5165\u6b63\u5728\u5f00\u53d1\u4e2d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-stream-load-\u6216-routine-load-\u5bfc\u5165-csv-\u683c\u5f0f\u6570\u7ec4",children:"\u901a\u8fc7 Stream Load \u6216 Routine Load \u5bfc\u5165 CSV \u683c\u5f0f\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/loading/StreamLoad#%E5%AF%BC%E5%85%A5-csv-%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%95%B0%E6%8D%AE",children:"Stream Load"})," \u6216 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/loading/RoutineLoad#%E5%AF%BC%E5%85%A5-csv-%E6%95%B0%E6%8D%AE",children:"Routine Load"})," \u65b9\u5f0f\u5bfc\u5165 CSV \u6587\u672c\u6587\u4ef6\u6216 Kafka \u4e2d\u7684 CSV \u683c\u5f0f\u6570\u636e\uff0c\u9ed8\u8ba4\u91c7\u7528\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u5143\u7d20",children:"\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u5143\u7d20"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e2d\u62ec\u53f7\uff08",(0,r.jsx)(n.code,{children:"[]"}),"\uff09\u52a0\u4e0b\u6807\u5f62\u5f0f\u8bbf\u95ee\u6570\u7ec4\u4e2d\u67d0\u4e2a\u5143\u7d20\u3002\u4e0b\u6807\u4ece ",(0,r.jsx)(n.code,{children:"1"})," \u5f00\u59cb\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][1];\n\n+------------+\n| [1,2,3][1] |\n+------------+\n|          1 |\n+------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6807\u8bb0\u4e0b\u6807\u4e3a ",(0,r.jsx)(n.code,{children:"0"})," \u6216\u8d1f\u6570\uff0cStarRocks ",(0,r.jsx)(n.strong,{children:"\u4e0d\u4f1a\u62a5\u9519\uff0c\u4f1a\u8fd4\u56de NULL"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][0];\n\n+------------+\n| [1,2,3][0] |\n+------------+\n|       NULL |\n+------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6807\u8bb0\u7684\u4e0b\u6807\u8d85\u8fc7\u6570\u7ec4\u5927\u5c0f\uff0cStarRocks ",(0,r.jsx)(n.strong,{children:"\u4f1a\u8fd4\u56de NULL"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][4];\n\n+------------+\n| [1,2,3][4] |\n+------------+\n|       NULL |\n+------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u591a\u7ef4\u6570\u7ec4\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.strong,{children:"\u9012\u5f52"}),"\u65b9\u5f0f\u8bbf\u95ee\u5185\u90e8\u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [[1,2],[3,4]][2];\n\n+------------------+\n| [[1,2],[3,4]][2] |\n+------------------+\n| [3,4]            |\n+------------------+\n\nmysql> select [[1,2],[3,4]][2][1];\n\n+---------------------+\n| [[1,2],[3,4]][2][1] |\n+---------------------+\n|                   3 |\n+---------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var r=s(67294);const l=r.createContext({});function t(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:t(e),r.createElement(l.Provider,{value:c},n)}}}]);