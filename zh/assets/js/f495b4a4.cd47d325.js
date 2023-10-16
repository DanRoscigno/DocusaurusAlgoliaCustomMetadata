"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29459],{39769:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var s=i(85893),r=i(11151);const c={displayed_sidebar:"Chinese"},l="\u4f18\u5316\u6027\u80fd",d={id:"administration/Profiling",title:"\u4f18\u5316\u6027\u80fd",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f18\u5316 StarRocks \u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Profiling.md",sourceDirName:"administration",slug:"/administration/Profiling",permalink:"/doc/zh/docs/administration/Profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Profiling.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u67e5\u770b\u5206\u6790 Query Profile",permalink:"/doc/zh/docs/administration/query_profile"},next:{title:"\u53c2\u8003\u624b\u518c",permalink:"/doc/zh/docs/category/\u53c2\u8003\u624b\u518c"}},a={},t=[{value:"\u901a\u8fc7\u5efa\u8868\u4f18\u5316\u6027\u80fd",id:"\u901a\u8fc7\u5efa\u8868\u4f18\u5316\u6027\u80fd",level:2},{value:"\u9009\u62e9\u6570\u636e\u6a21\u578b",id:"\u9009\u62e9\u6570\u636e\u6a21\u578b",level:3},{value:"\u4f7f\u7528 Colocate Table",id:"\u4f7f\u7528-colocate-table",level:3},{value:"\u4f7f\u7528\u661f\u578b\u6a21\u578b",id:"\u4f7f\u7528\u661f\u578b\u6a21\u578b",level:3},{value:"\u4f7f\u7528\u5206\u533a\u548c\u5206\u6876",id:"\u4f7f\u7528\u5206\u533a\u548c\u5206\u6876",level:3},{value:"\u4f7f\u7528\u7a00\u758f\u7d22\u5f15\u548c Bloomfilter",id:"\u4f7f\u7528\u7a00\u758f\u7d22\u5f15\u548c-bloomfilter",level:3},{value:"\u4f7f\u7528\u5012\u6392\u7d22\u5f15",id:"\u4f7f\u7528\u5012\u6392\u7d22\u5f15",level:3},{value:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe",id:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe",level:3},{value:"\u4f18\u5316\u5bfc\u5165\u6027\u80fd",id:"\u4f18\u5316\u5bfc\u5165\u6027\u80fd",level:2},{value:"\u4f18\u5316 Schema Change \u6027\u80fd",id:"\u4f18\u5316-schema-change-\u6027\u80fd",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4f18\u5316\u6027\u80fd",children:"\u4f18\u5316\u6027\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f18\u5316 StarRocks \u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u901a\u8fc7\u5efa\u8868\u4f18\u5316\u6027\u80fd",children:"\u901a\u8fc7\u5efa\u8868\u4f18\u5316\u6027\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u5efa\u8868\u9636\u6bb5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4f18\u5316 StarRocks \u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u9009\u62e9\u6570\u636e\u6a21\u578b",children:"\u9009\u62e9\u6570\u636e\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u652f\u6301\u56db\u79cd\u6570\u636e\u6a21\u578b\uff1a\u4e3b\u952e\u6a21\u578b (PRIMARY KEY)\uff0c\u805a\u5408\u6a21\u578b (AGGREGATE KEY)\uff0c\u66f4\u65b0\u6a21\u578b (UNIQUE KEY)\uff0c\u4ee5\u53ca\u660e\u7ec6\u6a21\u578b (DUPLICATE KEY)\u3002\u56db\u79cd\u6a21\u578b\u4e2d\u6570\u636e\u90fd\u662f\u4f9d\u636e KEY \u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"AGGREGATE KEY \u6a21\u578b"})}),"\n",(0,s.jsx)(n.p,{children:"AGGREGATE KEY \u76f8\u540c\u65f6\uff0c\u65b0\u65e7\u8bb0\u5f55\u88ab\u805a\u5408\uff0c\u76ee\u524d\u652f\u6301\u7684\u805a\u5408\u51fd\u6570\u6709 SUM\uff0cMIN\uff0cMAX\uff0c\u4ee5\u53ca REPLACE\u3002AGGREGATE KEY \u6a21\u578b\u53ef\u4ee5\u63d0\u524d\u805a\u5408\u6570\u636e\uff0c\u9002\u5408\u62a5\u8868\u548c\u591a\u7ef4\u5206\u6790\u4e1a\u52a1\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE site_visit\n(\n    siteid      INT,\n    city        SMALLINT,\n    username    VARCHAR(32),\n    pv BIGINT   SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, city, username)\nDISTRIBUTED BY HASH(siteid);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"UNIQUE KEY \u6a21\u578b"})}),"\n",(0,s.jsx)(n.p,{children:"UNIQUE KEY \u76f8\u540c\u65f6\uff0c\u65b0\u8bb0\u5f55\u8986\u76d6\u65e7\u8bb0\u5f55\u3002\u76ee\u524d UNIQUE KEY \u7684\u5b9e\u73b0\u4e0e AGGREGATE KEY \u7684 REPLACE \u805a\u5408\u65b9\u6cd5\u4e00\u6837\uff0c\u4e8c\u8005\u672c\u8d28\u4e0a\u53ef\u4ee5\u8ba4\u4e3a\u76f8\u540c\u3002UNIQUE KEY \u6a21\u578b\u9002\u7528\u4e8e\u6709\u66f4\u65b0\u7684\u5206\u6790\u4e1a\u52a1\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nUNIQUE KEY(orderid)\nDISTRIBUTED BY HASH(orderid);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DUPLICATE KEY \u6a21\u578b"})}),"\n",(0,s.jsx)(n.p,{children:"DUPLICATE KEY \u53ea\u7528\u4e8e\u6392\u5e8f\uff0c\u76f8\u540c DUPLICATE KEY \u7684\u8bb0\u5f55\u4f1a\u540c\u65f6\u5b58\u5728\u3002DUPLICATE KEY \u6a21\u578b\u9002\u7528\u4e8e\u6570\u636e\u65e0\u9700\u63d0\u524d\u805a\u5408\u7684\u5206\u6790\u4e1a\u52a1\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE session_data\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"PRIMARY KEY \u6a21\u578b"})}),"\n",(0,s.jsx)(n.p,{children:"PRIMARY KEY \u6a21\u578b\u4fdd\u8bc1\u540c\u4e00\u4e2a\u4e3b\u952e\u4e0b\u4ec5\u5b58\u5728\u4e00\u6761\u8bb0\u5f55\u3002\u76f8\u5bf9\u4e8e\u66f4\u65b0\u6a21\u578b\uff0c\u4e3b\u952e\u6a21\u578b\u5728\u67e5\u8be2\u65f6\u4e0d\u9700\u8981\u6267\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u5e76\u4e14\u652f\u6301\u8c13\u8bcd\u548c\u7d22\u5f15\u4e0b\u63a8\uff0c\u80fd\u591f\u5728\u652f\u6301\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u7b49\u573a\u666f\u7684\u540c\u65f6\uff0c\u63d0\u4f9b\u9ad8\u6548\u67e5\u8be2\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE orders (\n    dt date NOT NULL,\n    order_id bigint NOT NULL,\n    user_id int NOT NULL,\n    merchant_id int NOT NULL,\n    good_id int NOT NULL,\n    good_name string NOT NULL,\n    price int NOT NULL,\n    cnt int NOT NULL,\n    revenue int NOT NULL,\n    state tinyint NOT NULL\n)\nPRIMARY KEY (dt, order_id)\nDISTRIBUTED BY HASH(order_id);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528-colocate-table",children:"\u4f7f\u7528 Colocate Table"}),"\n",(0,s.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u5c06\u5206\u5e03\u76f8\u540c\u7684\u76f8\u5173\u8868\u5b58\u50a8\u4e0e\u5171\u540c\u7684\u5206\u6876\u5217\uff0c\u4ece\u800c\u76f8\u5173\u8868\u7684 JOIN \u64cd\u4f5c\u53ef\u4ee5\u76f4\u63a5\u5728\u672c\u5730\u8fdb\u884c\uff0c\u8fdb\u800c\u52a0\u901f\u67e5\u8be2\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/using_starrocks/Colocate_join",children:"Colocate Join"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE colocate_table\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid)\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u661f\u578b\u6a21\u578b",children:"\u4f7f\u7528\u661f\u578b\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u652f\u6301\u9009\u62e9\u66f4\u7075\u6d3b\u7684\u661f\u578b\u6a21\u578b (star schema) \u6765\u66ff\u4ee3\u4f20\u7edf\u5efa\u6a21\u65b9\u5f0f\u7684\u5927\u5bbd\u8868\u3002\u901a\u8fc7\u661f\u578b\u6a21\u578b\uff0c\u60a8\u53ef\u4ee5\u7528\u4e00\u4e2a\u89c6\u56fe\u6765\u53d6\u4ee3\u5bbd\u8868\u8fdb\u884c\u5efa\u6a21\uff0c\u76f4\u63a5\u4f7f\u7528\u591a\u8868\u5173\u8054\u6765\u67e5\u8be2\u3002\u5728 SSB \u7684\u6807\u51c6\u6d4b\u8bd5\u96c6\u7684\u5bf9\u6bd4\u4e2d\uff0cStarRocks \u7684\u591a\u8868\u5173\u8054\u6027\u80fd\u76f8\u8f83\u4e8e\u5355\u8868\u67e5\u8be2\u5e76\u65e0\u660e\u663e\u4e0b\u964d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u6bd4\u661f\u578b\u6a21\u578b\uff0c\u5bbd\u8868\u7684\u7f3a\u70b9\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ef4\u5ea6\u66f4\u65b0\u6210\u672c\u66f4\u9ad8\u3002\u5bbd\u8868\u4e2d\uff0c\u7ef4\u5ea6\u4fe1\u606f\u66f4\u65b0\u4f1a\u53cd\u5e94\u5230\u6574\u5f20\u8868\u4e2d\uff0c\u5176\u66f4\u65b0\u7684\u9891\u7387\u76f4\u63a5\u5f71\u54cd\u67e5\u8be2\u7684\u6548\u7387\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7ef4\u62a4\u6210\u672c\u66f4\u9ad8\u3002\u5bbd\u8868\u7684\u5efa\u8bbe\u9700\u8981\u989d\u5916\u7684\u5f00\u53d1\u5de5\u4f5c\u3001\u5b58\u50a8\u7a7a\u95f4\u548c\u6570\u636e Backfill \u6210\u672c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5bfc\u5165\u6210\u672c\u66f4\u9ad8\u3002\u5bbd\u8868\u7684 Schema \u5b57\u6bb5\u6570\u8f83\u591a\uff0c\u805a\u5408\u6a21\u578b\u4e2d\u53ef\u80fd\u5305\u542b\u66f4\u591a Key \u5217\uff0c\u5176\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u9700\u8981\u6392\u5e8f\u7684\u5217\u4f1a\u589e\u52a0\uff0c\u8fdb\u800c\u5bfc\u81f4\u5bfc\u5165\u65f6\u95f4\u53d8\u957f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u4f18\u5148\u4f7f\u7528\u661f\u578b\u6a21\u578b\uff0c\u53ef\u4ee5\u5728\u4fdd\u8bc1\u7075\u6d3b\u7684\u57fa\u7840\u4e0a\u83b7\u5f97\u9ad8\u6548\u7684\u6307\u6807\u5206\u6790\u6548\u679c\u3002\u4f46\u5982\u679c\u60a8\u7684\u4e1a\u52a1\u5bf9\u4e8e\u9ad8\u5e76\u53d1\u6216\u8005\u4f4e\u5ef6\u8fdf\u6709\u8f83\u9ad8\u7684\u8981\u6c42\uff0c\u60a8\u4ecd\u53ef\u4ee5\u9009\u62e9\u5bbd\u8868\u6a21\u578b\u8fdb\u884c\u52a0\u901f\u3002StarRocks \u63d0\u4f9b\u4e0e ClickHouse \u76f8\u5f53\u7684\u5bbd\u8868\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u5206\u533a\u548c\u5206\u6876",children:"\u4f7f\u7528\u5206\u533a\u548c\u5206\u6876"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks\u652f\u6301\u4e24\u7ea7\u5206\u533a\u5b58\u50a8\uff0c\u7b2c\u4e00\u5c42\u4e3a RANGE \u5206\u533a\uff08Partition\uff09\uff0c\u7b2c\u4e8c\u5c42\u4e3a HASH \u5206\u6876\uff08Bucket\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"RANGE \u5206\u533a\u7528\u4e8e\u5c06\u6570\u636e\u5212\u5206\u6210\u4e0d\u540c\u533a\u95f4\uff0c\u903b\u8f91\u4e0a\u7b49\u540c\u4e8e\u5c06\u539f\u59cb\u8868\u5212\u5206\u6210\u4e86\u591a\u4e2a\u5b50\u8868\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u591a\u6570\u7528\u6237\u4f1a\u6839\u636e\u6309\u65f6\u95f4\u8fdb\u884c\u5206\u533a\u3002\u57fa\u4e8e\u65f6\u95f4\u8fdb\u884c\u5206\u533a\u6709\u4ee5\u4e0b\u597d\u5904\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ef\u533a\u5206\u51b7\u70ed\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u4f7f\u7528 StarRocks \u5206\u7ea7\u5b58\u50a8\uff08SSD + SATA\uff09\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6309\u5206\u533a\u5220\u9664\u6570\u636e\u65f6\uff0c\u66f4\u52a0\u8fc5\u901f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"HASH \u5206\u6876\u6307\u6839\u636e Hash \u503c\u5c06\u6570\u636e\u5212\u5206\u6210\u4e0d\u540c\u7684 Bucket\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5efa\u8bae\u91c7\u7528\u533a\u5206\u5ea6\u5927\u7684\u5217\u505a\u5206\u6876\uff0c\u907f\u514d\u51fa\u73b0\u6570\u636e\u503e\u659c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3a\u65b9\u4fbf\u6570\u636e\u6062\u590d\uff0c\u5efa\u8bae\u5355\u4e2a Bucket \u4fdd\u6301\u8f83\u5c0f\u7684 Size\uff0c\u5e94\u4fdd\u8bc1\u5176\u4e2d\u6570\u636e\u538b\u7f29\u540e\u5927\u5c0f\u4fdd\u6301\u5728 100MB \u81f3 1GB \u5de6\u53f3\u3002\u5efa\u8bae\u60a8\u5728\u5efa\u8868\u6216\u589e\u52a0\u5206\u533a\u65f6\u5408\u7406\u8003\u8651 Bucket \u6570\u76ee\uff0c\u5176\u4e2d\u4e0d\u540c\u5206\u533a\u53ef\u6307\u5b9a\u4e0d\u540c\u7684 Bucket \u6570\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u5efa\u8bae\u91c7\u7528 Random \u5206\u6876\u65b9\u5f0f\u3002\u5efa\u8868\u65f6\uff0c\u8bf7\u6307\u5b9a\u660e\u786e\u7684 Hash \u5206\u6876\u5217\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u7a00\u758f\u7d22\u5f15\u548c-bloomfilter",children:"\u4f7f\u7528\u7a00\u758f\u7d22\u5f15\u548c Bloomfilter"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5bf9\u6570\u636e\u8fdb\u884c\u6709\u5e8f\u5b58\u50a8\uff0c\u5728\u6570\u636e\u6709\u5e8f\u7684\u57fa\u7840\u4e0a\u4e3a\u5176\u5efa\u7acb\u7a00\u758f\u7d22\u5f15\uff0c\u7d22\u5f15\u7c92\u5ea6\u4e3a Block\uff081024 \u884c\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7a00\u758f\u7d22\u5f15\u9009\u53d6 Schema \u4e2d\u56fa\u5b9a\u957f\u5ea6\u7684\u524d\u7f00\u4f5c\u4e3a\u7d22\u5f15\u5185\u5bb9\uff0c\u76ee\u524d StarRocks \u9009\u53d6 36 \u4e2a\u5b57\u8282\u7684\u524d\u7f00\u4f5c\u4e3a\u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u5efa\u8bae\u60a8\u5c06\u67e5\u8be2\u4e2d\u5e38\u89c1\u7684\u8fc7\u6ee4\u5b57\u6bb5\u653e\u5728 Schema \u7684\u524d\u90e8\u3002\u533a\u5206\u5ea6\u8d8a\u5927\uff0c\u9891\u6b21\u8d8a\u9ad8\u7684\u67e5\u8be2\u5b57\u6bb5\u5e94\u5f53\u88ab\u653e\u7f6e\u4e8e\u66f4\u524d\u90e8\u3002VARCHAR \u7c7b\u578b\u7684\u5b57\u6bb5\u53ea\u80fd\u4f5c\u4e3a\u7a00\u758f\u7d22\u5f15\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\uff0c\u56e0\u4e3a\u7d22\u5f15\u4f1a\u5728 VARCHAR \u5b57\u6bb5\u5904\u622a\u65ad\uff0cVARCHAR \u6570\u636e\u5982\u679c\u51fa\u73b0\u5728\u524d\u9762\uff0c\u7d22\u5f15\u7684\u957f\u5ea6\u53ef\u80fd\u4e0d\u8db3 36 \u4e2a\u5b57\u8282\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e0a\u8ff0 ",(0,s.jsx)(n.code,{children:"site_visit"}),"\u8868\uff0c\u5176\u6392\u5e8f\u5217\u5305\u62ec ",(0,s.jsx)(n.code,{children:"siteid"}),"\uff0c",(0,s.jsx)(n.code,{children:"city"}),"\uff0c",(0,s.jsx)(n.code,{children:"username"})," \u4e09\u5217\u3002\u5176\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"siteid"})," \u6240\u5360\u5b57\u8282\u6570\u4e3a 4\uff0c",(0,s.jsx)(n.code,{children:"city"})," \u6240\u5360\u5b57\u8282\u6570\u4e3a 2\uff0c",(0,s.jsx)(n.code,{children:"username"})," \u6240\u5360\u5b57\u8282\u6570\u4e3a 32\uff0c\u6240\u4ee5\u8be5\u8868\u7684\u524d\u7f00\u7d22\u5f15\u7684\u5185\u5bb9\u4e3a ",(0,s.jsx)(n.code,{children:"siteid"})," + ",(0,s.jsx)(n.code,{children:"city"})," + ",(0,s.jsx)(n.code,{children:"username"})," \u7684\u524d 30 \u4e2a\u5b57\u8282\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9664\u7a00\u758f\u7d22\u5f15\u4e4b\u5916\uff0cStarRocks \u8fd8\u63d0\u4f9b Bloomfilter \u7d22\u5f15\u3002Bloomfilter \u7d22\u5f15\u5bf9\u533a\u5206\u5ea6\u6bd4\u8f83\u5927\u7684\u5217\u8fc7\u6ee4\u6548\u679c\u660e\u663e\u3002\u5982\u679c\u9700\u8981\u5c06 VARCHAR \u5b57\u6bb5\u524d\u7f6e\uff0c\u60a8\u53ef\u4ee5\u5efa\u7acb Bloomfilter \u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u5012\u6392\u7d22\u5f15",children:"\u4f7f\u7528\u5012\u6392\u7d22\u5f15"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5012\u6392\u7d22\u5f15\uff0c\u91c7\u7528\u4f4d\u56fe\u6280\u672f\u6784\u5efa\u7d22\u5f15\uff08Bitmap Index\uff09\u3002\u60a8\u53ef\u4ee5\u5c06\u7d22\u5f15\u5e94\u7528\u5728 DUPLICATE KEY \u6570\u636e\u6a21\u578b\u7684\u6240\u6709\u5217\u548c AGGREGATE KEY \u548c UNIQUE KEY \u6a21\u578b\u7684 Key \u5217\u4e0a\u3002\u4f4d\u56fe\u7d22\u5f15\u9002\u5408\u53d6\u503c\u7a7a\u95f4\u8f83\u5c0f\u7684\u5217\uff0c\u4f8b\u5982\u6027\u522b\u3001\u57ce\u5e02\u3001\u7701\u4efd\u7b49\u4fe1\u606f\u5217\u4e0a\u3002\u968f\u7740\u53d6\u503c\u7a7a\u95f4\u7684\u589e\u52a0\uff0c\u4f4d\u56fe\u7d22\u5f15\u4f1a\u540c\u6b65\u81a8\u80c0\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe",children:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe"}),"\n",(0,s.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\uff08Rollup\uff09\u672c\u8d28\u4e0a\u53ef\u4ee5\u7406\u89e3\u4e3a\u539f\u59cb\u8868\uff08Base table\uff09\u7684\u4e00\u4e2a\u7269\u5316\u7d22\u5f15\u3002\u5efa\u7acb\u7269\u5316\u89c6\u56fe\u65f6\uff0c\u60a8\u53ef\u4ee5\u53ea\u9009\u53d6 Base table \u4e2d\u7684\u90e8\u5206\u5217\u4f5c\u4e3a schema\uff0cschema \u4e2d\u7684\u5b57\u6bb5\u987a\u5e8f\u4e5f\u53ef\u4e0e Base table \u4e0d\u540c\u3002\u4e0b\u5217\u60c5\u5f62\u53ef\u4ee5\u8003\u8651\u5efa\u7acb\u7269\u5316\u89c6\u56fe\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Base table \u4e2d\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8\u3002\u8fd9\u901a\u5e38\u662f\u56e0\u4e3a Base table \u6709\u533a\u5206\u5ea6\u6bd4\u8f83\u5927\u7684\u5b57\u6bb5\u800c\u5bfc\u81f4\u3002\u6b64\u65f6\uff0c\u60a8\u53ef\u4ee5\u8003\u8651\u9009\u53d6\u90e8\u5206\u5217\uff0c\u5efa\u7acb\u7269\u5316\u89c6\u56fe\u3002\u5bf9\u4e8e\u4e0a\u8ff0 ",(0,s.jsx)(n.code,{children:"site_visit"})," \u8868\uff0c",(0,s.jsx)(n.code,{children:"siteid"})," \u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8\u3002\u5982\u679c\u6709\u7ecf\u5e38\u6839\u636e\u57ce\u5e02\u7edf\u8ba1 ",(0,s.jsx)(n.code,{children:"pv"})," \u9700\u6c42\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u53ea\u6709 ",(0,s.jsx)(n.code,{children:"city"}),"\uff0c",(0,s.jsx)(n.code,{children:"pv"})," \u7684\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE site_visit ADD ROLLUP rollup_city(city, pv);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Base table \u4e2d\u7684\u524d\u7f00\u7d22\u5f15\u65e0\u6cd5\u547d\u4e2d\uff0c\u8fd9\u901a\u5e38\u662f\u56e0\u4e3a base table \u7684\u5efa\u8868\u65b9\u5f0f\u65e0\u6cd5\u8986\u76d6\u6240\u6709\u7684\u67e5\u8be2\u6a21\u5f0f\u3002\u6b64\u65f6\uff0c\u60a8\u53ef\u4ee5\u8003\u8651\u8c03\u6574\u5217\u987a\u5e8f\uff0c\u5efa\u7acb\u7269\u5316\u89c6\u56fe\u3002\u5bf9\u4e8e\u4e0a\u8ff0 ",(0,s.jsx)(n.code,{children:"session_data"})," \u8868\uff0c\u5982\u679c\u9664\u4e86\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"visitorid"})," \u5206\u6790\u8bbf\u95ee\u60c5\u51b5\u5916\uff0c\u8fd8\u6709\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"brower"}),"\uff0c",(0,s.jsx)(n.code,{children:"province"})," \u5206\u6790\u7684\u60c5\u5f62\uff0c\u53ef\u4ee5\u5355\u72ec\u5efa\u7acb\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE session_data ADD ROLLUP rollup_brower(brower,province,ip,url) DUPLICATE KEY(brower,province);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f18\u5316\u5bfc\u5165\u6027\u80fd",children:"\u4f18\u5316\u5bfc\u5165\u6027\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u76ee\u524d\u63d0\u4f9b Broker Load \u548c Stream Load \u4e24\u79cd\u5bfc\u5165\u65b9\u5f0f\uff0c\u901a\u8fc7\u6307\u5b9a\u5bfc\u5165 label \u6807\u8bc6\u4e00\u6279\u6b21\u7684\u5bfc\u5165\u3002StarRocks \u5bf9\u5355\u6279\u6b21\u7684\u5bfc\u5165\u4f1a\u4fdd\u8bc1\u539f\u5b50\u751f\u6548\uff0c\u5373\u4f7f\u5355\u6b21\u5bfc\u5165\u591a\u5f20\u8868\u4e5f\u540c\u6837\u4fdd\u8bc1\u5176\u539f\u5b50\u6027\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stream Load\uff1a\u901a\u8fc7 HTTP \u63a8\u6d41\u65b9\u5f0f\u5bfc\u5165\u6570\u636e\uff0c\u7528\u4e8e\u5fae\u6279\u5bfc\u5165\u3002\u8be5\u6a21\u5f0f\u4e0b\uff0c1MB \u6570\u636e\u5bfc\u5165\u5ef6\u8fdf\u53ef\u7ef4\u6301\u5728\u79d2\u7ea7\u522b\uff0c\u9002\u5408\u9ad8\u9891\u5bfc\u5165\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Broker Load\uff1a\u901a\u8fc7\u62c9\u53d6\u7684\u65b9\u5f0f\u6279\u91cf\u5bfc\u5165\u6570\u636e\uff0c\u9002\u5408\u5927\u6279\u91cf\u6570\u636e\u7684\u5bfc\u5165\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f18\u5316-schema-change-\u6027\u80fd",children:"\u4f18\u5316 Schema Change \u6027\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u76ee\u524d\u652f\u6301\u4e09\u79cd Schema Change \u65b9\u5f0f\uff0c\u5373 Sorted Schema Change\uff0cDirect Schema Change\uff0cLinked Schema Change\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sorted Schema Change\uff1a\u6539\u53d8\u5217\u7684\u6392\u5e8f\u65b9\u5f0f\uff0c\u9700\u5bf9\u6570\u636e\u8fdb\u884c\u91cd\u65b0\u6392\u5e8f\u3002\u4f8b\u5982\u5220\u9664\u6392\u5e8f\u5217\u4e2d\u7684\u4e00\u5217\uff0c\u5b57\u6bb5\u91cd\u6392\u5e8f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE site_visit DROP COLUMN city;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Direct Schema Change\uff1a\u65e0\u9700\u91cd\u65b0\u6392\u5e8f\uff0c\u4f46\u662f\u9700\u8981\u5bf9\u6570\u636e\u505a\u4e00\u6b21\u8f6c\u6362\u3002\u4f8b\u5982\u4fee\u6539\u5217\u7684\u7c7b\u578b\uff0c\u5728\u7a00\u758f\u7d22\u5f15\u4e2d\u52a0\u4e00\u5217\u7b49\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE site_visit MODIFY COLUMN username varchar(64);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Linked Schema Change\uff1a\u65e0\u9700\u8f6c\u6362\u6570\u636e\uff0c\u76f4\u63a5\u5b8c\u6210\u3002\u4f8b\u5982\u52a0\u5217\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE site_visit ADD COLUMN click bigint SUM default '0';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u5728\u5efa\u8868\u65f6\u8003\u8651\u597d Schema\uff0c\u4ee5\u4fbf\u52a0\u5feb\u540e\u7eed Schema Change \u901f\u5ea6\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>d,ah:()=>c});var s=i(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:i}){let d;return d=i?"function"==typeof e?e({}):e||l:c(e),s.createElement(r.Provider,{value:d},n)}}}]);