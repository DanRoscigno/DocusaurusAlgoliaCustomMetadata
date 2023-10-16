"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8213],{99604:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>T,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var s=i(85893),r=i(11151);const t={displayed_sidebar:"Chinese"},d="\u901a\u8fc7 Audit Loader \u7ba1\u7406 StarRocks \u4e2d\u7684\u5ba1\u8ba1\u65e5\u5fd7",a={id:"administration/audit_loader",title:"\u901a\u8fc7 Audit Loader \u7ba1\u7406 StarRocks \u4e2d\u7684\u5ba1\u8ba1\u65e5\u5fd7",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u63d2\u4ef6 Audit Loader \u5728 StarRocks \u5185\u90e8\u7ba1\u7406\u5ba1\u8ba1\u65e5\u5fd7\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/administration/audit_loader.md",sourceDirName:"administration",slug:"/administration/audit_loader",permalink:"/doc/zh/docs/3.0/administration/audit_loader",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/audit_loader.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/doc/zh/docs/3.0/administration/User_privilege"},next:{title:"\u542f\u7528 FQDN \u8bbf\u95ee",permalink:"/doc/zh/docs/3.0/administration/enable_fqdn"}},c={},o=[{value:"\u521b\u5efa\u5ba1\u8ba1\u65e5\u5fd7\u5e93\u8868",id:"\u521b\u5efa\u5ba1\u8ba1\u65e5\u5fd7\u5e93\u8868",level:2},{value:"Download and configure Audit Loader",id:"download-and-configure-audit-loader",level:2},{value:"\u5b89\u88c5 Audit Loader",id:"\u5b89\u88c5-audit-loader",level:2},{value:"\u9a8c\u8bc1\u5b89\u88c5\u5e76\u67e5\u8be2\u5ba1\u8ba1\u65e5\u5fd7",id:"\u9a8c\u8bc1\u5b89\u88c5\u5e76\u67e5\u8be2\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}];function l(n){const e=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u901a\u8fc7-audit-loader-\u7ba1\u7406-starrocks-\u4e2d\u7684\u5ba1\u8ba1\u65e5\u5fd7",children:"\u901a\u8fc7 Audit Loader \u7ba1\u7406 StarRocks \u4e2d\u7684\u5ba1\u8ba1\u65e5\u5fd7"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u63d2\u4ef6 Audit Loader \u5728 StarRocks \u5185\u90e8\u7ba1\u7406\u5ba1\u8ba1\u65e5\u5fd7\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["StarRocks \u5c06\u5176\u6240\u6709\u5ba1\u8ba1\u65e5\u5fd7\u5b58\u50a8\u5728\u672c\u5730\u6587\u4ef6 ",(0,s.jsx)(e.strong,{children:"fe/log/fe.audit.log"})," \u4e2d\uff0c\u65e0\u6cd5\u901a\u8fc7\u7cfb\u7edf\u5185\u90e8\u6570\u636e\u5e93\u8bbf\u95ee\u3002Audit Loader \u63d2\u4ef6\u4ee4\u60a8\u53ef\u4ee5\u5728\u96c6\u7fa4\u5185\u7ba1\u7406\u5ba1\u8ba1\u65e5\u5fd7\u3002Audit Loader \u53ef\u4ee5\u4ece\u672c\u5730\u6587\u4ef6\u4e2d\u8bfb\u53d6\u65e5\u5fd7\uff0c\u5e76\u901a\u8fc7 HTTP PUT \u5c06\u65e5\u5fd7\u5bfc\u5165\u81f3 StarRocks \u4e2d\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u521b\u5efa\u5ba1\u8ba1\u65e5\u5fd7\u5e93\u8868",children:"\u521b\u5efa\u5ba1\u8ba1\u65e5\u5fd7\u5e93\u8868"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 StarRocks \u96c6\u7fa4\u4e2d\u4e3a\u5ba1\u8ba1\u65e5\u5fd7\u521b\u5efa\u6570\u636e\u5e93\u548c\u8868\u3002\u8be6\u7ec6\u64cd\u4f5c\u8bf4\u660e\u53c2\u9605 ",(0,s.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})," \u548c ",(0,s.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u56e0 StarRocks \u5404\u7248\u672c\u5ba1\u8ba1\u65e5\u5fd7\u5b57\u6bb5\u4e0d\u540c\uff0c\u5176\u6240\u5bf9\u5e94\u7684\u5efa\u8868\u8bed\u53e5\u4e5f\u4e0d\u76f8\u540c\u3002\u60a8\u9700\u8981\u4ece\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u9009\u62e9\u4e0e\u60a8\u7684 StarRocks \u96c6\u7fa4\u7248\u672c\u5bf9\u5e94\u7684\u5efa\u8868\u8bed\u53e5\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bf7\u52ff\u66f4\u6539\u793a\u4f8b\u4e2d\u7684\u8868\u5c5e\u6027\uff0c\u5426\u5219\u5c06\u5bfc\u81f4\u65e5\u5fd7\u5bfc\u5165\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"StarRocks v2.4\u3001v2.5\u3001v3.0\u3001v3.1 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\n\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__ (\n  `queryId`        VARCHAR(48)            COMMENT "\u67e5\u8be2\u7684\u552f\u4e00ID",\n  `timestamp`      DATETIME     NOT NULL  COMMENT "\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4",\n  `queryType`      VARCHAR(12)            COMMENT "\u67e5\u8be2\u7c7b\u578b\uff08query, slow_query\uff09",\n  `clientIp`       VARCHAR(32)            COMMENT "\u5ba2\u6237\u7aefIP",\n  `user`           VARCHAR(64)            COMMENT "\u67e5\u8be2\u7528\u6237\u540d",\n  `authorizedUser` VARCHAR(64)            COMMENT "\u7528\u6237\u552f\u4e00\u6807\u8bc6\uff0c\u65e2user_identity",\n  `resourceGroup`  VARCHAR(64)            COMMENT "\u8d44\u6e90\u7ec4\u540d",\n  `catalog`        VARCHAR(32)            COMMENT "Catalog\u540d",\n  `db`             VARCHAR(96)            COMMENT "\u67e5\u8be2\u6240\u5728\u6570\u636e\u5e93",\n  `state`          VARCHAR(8)             COMMENT "\u67e5\u8be2\u72b6\u6001\uff08EOF\uff0cERR\uff0cOK\uff09",\n  `errorCode`      VARCHAR(96)            COMMENT "\u9519\u8bef\u7801",\n  `queryTime`      BIGINT                 COMMENT "\u67e5\u8be2\u6267\u884c\u65f6\u95f4\uff08\u6beb\u79d2\uff09",\n  `scanBytes`      BIGINT                 COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u5b57\u8282\u6570",\n  `scanRows`       BIGINT                 COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u8bb0\u5f55\u884c\u6570",\n  `returnRows`     BIGINT                 COMMENT "\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570",\n  `cpuCostNs`      BIGINT                 COMMENT "\u67e5\u8be2CPU\u8017\u65f6\uff08\u7eb3\u79d2\uff09",\n  `memCostBytes`   BIGINT                 COMMENT "\u67e5\u8be2\u6d88\u8017\u5185\u5b58\uff08\u5b57\u8282\uff09",\n  `stmtId`         INT                    COMMENT "SQL\u8bed\u53e5\u589e\u91cfID",\n  `isQuery`        TINYINT                COMMENT "SQL\u662f\u5426\u4e3a\u67e5\u8be2\uff081\u62160\uff09",\n  `feIp`           VARCHAR(32)            COMMENT "\u6267\u884c\u8be5\u8bed\u53e5\u7684FE IP",\n  `stmt`           STRING                 COMMENT "\u539f\u59cbSQL\u8bed\u53e5",\n  `digest`         VARCHAR(32)            COMMENT "SQL\u6307\u7eb9",\n  `planCpuCosts`   DOUBLE                 COMMENT "\u67e5\u8be2\u89c4\u5212\u9636\u6bb5CPU\u5360\u7528\uff08\u7eb3\u79d2\uff09",\n  `planMemCosts`   DOUBLE                 COMMENT "\u67e5\u8be2\u89c4\u5212\u9636\u6bb5\u5185\u5b58\u5360\u7528\uff08\u5b57\u8282\uff09"\n) ENGINE = OLAP\nDUPLICATE KEY (`queryId`, `timestamp`, `queryType`)\nCOMMENT "\u5ba1\u8ba1\u65e5\u5fd7\u8868"\nPARTITION BY RANGE (`timestamp`) ()\nDISTRIBUTED BY HASH (`queryId`) BUCKETS 3 \nPROPERTIES (\n  "dynamic_partition.time_unit" = "DAY",\n  "dynamic_partition.start" = "-30",\n  "dynamic_partition.end" = "3",\n  "dynamic_partition.prefix" = "p",\n  "dynamic_partition.enable" = "true",\n  "replication_num" = "3"\n);\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"StarRocks v2.3.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__ (\n  `queryId`        VARCHAR(48)            COMMENT "\u67e5\u8be2\u7684\u552f\u4e00ID",\n  `timestamp`      DATETIME     NOT NULL  COMMENT "\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4",\n  `clientIp`       VARCHAR(32)            COMMENT "\u5ba2\u6237\u7aefIP",\n  `user`           VARCHAR(64)            COMMENT "\u67e5\u8be2\u7528\u6237\u540d",\n  `resourceGroup`  VARCHAR(64)            COMMENT "\u8d44\u6e90\u7ec4\u540d",\n  `db`             VARCHAR(96)            COMMENT "\u67e5\u8be2\u6240\u5728\u6570\u636e\u5e93",\n  `state`          VARCHAR(8)             COMMENT "\u67e5\u8be2\u72b6\u6001\uff08EOF\uff0cERR\uff0cOK\uff09",\n  `errorCode`      VARCHAR(96)            COMMENT "\u9519\u8bef\u7801",\n  `queryTime`      BIGINT                 COMMENT "\u67e5\u8be2\u6267\u884c\u65f6\u95f4\uff08\u6beb\u79d2\uff09",\n  `scanBytes`      BIGINT                 COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u5b57\u8282\u6570",\n  `scanRows`       BIGINT                 COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u8bb0\u5f55\u884c\u6570",\n  `returnRows`     BIGINT                 COMMENT "\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570",\n  `cpuCostNs`      BIGINT                 COMMENT "\u67e5\u8be2CPU\u8017\u65f6\uff08\u7eb3\u79d2\uff09",\n  `memCostBytes`   BIGINT                 COMMENT "\u67e5\u8be2\u6d88\u8017\u5185\u5b58\uff08\u5b57\u8282\uff09",\n  `stmtId`         INT                    COMMENT "SQL\u8bed\u53e5\u589e\u91cfID",\n  `isQuery`        TINYINT                COMMENT "SQL\u662f\u5426\u4e3a\u67e5\u8be2\uff081\u62160\uff09",\n  `feIp`           VARCHAR(32)            COMMENT "\u6267\u884c\u8be5\u8bed\u53e5\u7684FE IP",\n  `stmt`           STRING                 COMMENT "\u539f\u59cbSQL\u8bed\u53e5",\n  `digest`         VARCHAR(32)            COMMENT "SQL\u6307\u7eb9",\n  `planCpuCosts`   DOUBLE                 COMMENT "\u67e5\u8be2\u89c4\u5212\u9636\u6bb5CPU\u5360\u7528\uff08\u7eb3\u79d2\uff09",\n  `planMemCosts`   DOUBLE                 COMMENT "\u67e5\u8be2\u89c4\u5212\u9636\u6bb5\u5185\u5b58\u5360\u7528\uff08\u5b57\u8282\uff09"\n) ENGINE = OLAP\nDUPLICATE KEY (`queryId`, `timestamp`, `clientIp`)\nCOMMENT "\u5ba1\u8ba1\u65e5\u5fd7\u8868"\nPARTITION BY RANGE (`timestamp`) ()\nDISTRIBUTED BY HASH (`queryId`)\nPROPERTIES (\n  "dynamic_partition.time_unit" = "DAY",\n  "dynamic_partition.start" = "-30",\n  "dynamic_partition.end" = "3",\n  "dynamic_partition.prefix" = "p",\n  "dynamic_partition.buckets" = "3",\n  "dynamic_partition.enable" = "true",\n  "replication_num" = "3"\n);\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"StarRocks v2.2.1 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__\n(\n    query_id         VARCHAR(48)            COMMENT "\u67e5\u8be2\u7684\u552f\u4e00ID",\n    time             DATETIME     NOT NULL  COMMENT "\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4",\n    client_ip        VARCHAR(32)            COMMENT "\u5ba2\u6237\u7aefIP",\n    user             VARCHAR(64)            COMMENT "\u67e5\u8be2\u7528\u6237\u540d",\n    db               VARCHAR(96)            COMMENT "\u67e5\u8be2\u6240\u5728\u6570\u636e\u5e93",\n    state            VARCHAR(8)             COMMENT "\u67e5\u8be2\u72b6\u6001\uff08EOF\uff0cERR\uff0cOK\uff09",\n    query_time       BIGINT                 COMMENT "\u67e5\u8be2\u6267\u884c\u65f6\u95f4\uff08\u6beb\u79d2\uff09",\n    scan_bytes       BIGINT                 COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u5b57\u8282\u6570",\n    scan_rows        BIGINT                 COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u8bb0\u5f55\u884c\u6570",\n    return_rows      BIGINT                 COMMENT "\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570",\n    cpu_cost_ns      BIGINT                 COMMENT "\u67e5\u8be2CPU\u8017\u65f6\uff08\u7eb3\u79d2\uff09",\n    mem_cost_bytes   BIGINT                 COMMENT "\u67e5\u8be2\u6d88\u8017\u5185\u5b58\uff08\u5b57\u8282\uff09",\n    stmt_id          INT                    COMMENT "SQL\u8bed\u53e5\u589e\u91cfID",\n    is_query         TINYINT                COMMENT "SQL\u662f\u5426\u4e3a\u67e5\u8be2\uff081\u62160\uff09",\n    frontend_ip      VARCHAR(32)            COMMENT "\u6267\u884c\u8be5\u8bed\u53e5\u7684FE IP",\n    stmt             STRING                 COMMENT "\u539f\u59cbSQL\u8bed\u53e5",\n    digest           VARCHAR(32)            COMMENT "SQL\u6307\u7eb9"\n) engine=OLAP\nduplicate key(query_id, time, client_ip)\npartition by range(time) ()\ndistributed by hash(query_id) BUCKETS 3 \nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"StarRocks v2.2.0\u3001v2.1.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__\n(\n    query_id        VARCHAR(48)           COMMENT "\u67e5\u8be2\u7684\u552f\u4e00ID",\n    time            DATETIME    NOT NULL  COMMENT "\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4",\n    client_ip       VARCHAR(32)           COMMENT "\u5ba2\u6237\u7aefIP",\n    user            VARCHAR(64)           COMMENT "\u67e5\u8be2\u7528\u6237\u540d",\n    db              VARCHAR(96)           COMMENT "\u67e5\u8be2\u6240\u5728\u6570\u636e\u5e93",\n    state           VARCHAR(8)            COMMENT "\u67e5\u8be2\u72b6\u6001\uff08EOF\uff0cERR\uff0cOK\uff09",\n    query_time      BIGINT                COMMENT "\u67e5\u8be2\u6267\u884c\u65f6\u95f4\uff08\u6beb\u79d2\uff09",\n    scan_bytes      BIGINT                COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u5b57\u8282\u6570",\n    scan_rows       BIGINT                COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u8bb0\u5f55\u884c\u6570",\n    return_rows     BIGINT                COMMENT "\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570",\n    stmt_id         INT                   COMMENT "SQL\u8bed\u53e5\u589e\u91cfID",\n    is_query        TINYINT               COMMENT "SQL\u662f\u5426\u4e3a\u67e5\u8be2\uff081\u62160\uff09",\n    frontend_ip     VARCHAR(32)           COMMENT "\u6267\u884c\u8be5\u8bed\u53e5\u7684FE IP",\n    stmt            STRING                COMMENT "\u539f\u59cbSQL\u8bed\u53e5",\n    digest          VARCHAR(32)           COMMENT "SQL\u6307\u7eb9"\n) engine=OLAP\nDUPLICATE KEY(query_id, time, client_ip)\nPARTITION BY RANGE(time) ()\nDISTRIBUTED BY HASH(query_id) BUCKETS 3 \nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"StarRocks v2.0.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u3001v1.19.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__\n(\n    query_id        VARCHAR(48)           COMMENT "\u67e5\u8be2\u7684\u552f\u4e00ID",\n    time            DATETIME    NOT NULL  COMMENT "\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4",\n    client_ip       VARCHAR(32)           COMMENT "\u5ba2\u6237\u7aefIP",\n    user            VARCHAR(64)           COMMENT "\u67e5\u8be2\u7528\u6237\u540d",\n    db              VARCHAR(96)           COMMENT "\u67e5\u8be2\u6240\u5728\u6570\u636e\u5e93",\n    state           VARCHAR(8)            COMMENT "\u67e5\u8be2\u72b6\u6001\uff08EOF\uff0cERR\uff0cOK\uff09",\n    query_time      BIGINT                COMMENT "\u67e5\u8be2\u6267\u884c\u65f6\u95f4\uff08\u6beb\u79d2\uff09",\n    scan_bytes      BIGINT                COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u5b57\u8282\u6570",\n    scan_rows       BIGINT                COMMENT "\u67e5\u8be2\u626b\u63cf\u7684\u8bb0\u5f55\u884c\u6570",\n    return_rows     BIGINT                COMMENT "\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570",\n    stmt_id         INT                   COMMENT "SQL\u8bed\u53e5\u589e\u91cfID",\n    is_query        TINYINT               COMMENT "SQL\u662f\u5426\u4e3a\u67e5\u8be2\uff081\u62160\uff09",\n    frontend_ip     VARCHAR(32)           COMMENT "\u6267\u884c\u8be5\u8bed\u53e5\u7684FE IP",\n    stmt            STRING                COMMENT "\u539f\u59cbSQL\u8bed\u53e5"\n) engine=OLAP\nDUPLICATE KEY(query_id, time, client_ip)\nPARTITION BY RANGE(time) ()\nDISTRIBUTED BY HASH(query_id) BUCKETS 3 \nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"starrocks_audit_tbl__"})," \u8868\u662f\u52a8\u6001\u5206\u533a\u8868\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u4e2a\u52a8\u6001\u5206\u533a\u5c06\u5728\u5efa\u8868\u540e 10 \u5206\u949f\u521b\u5efa\u3002\u5206\u533a\u521b\u5efa\u540e\u5ba1\u8ba1\u65e5\u5fd7\u65b9\u53ef\u5bfc\u5165\u81f3\u8868\u4e2d\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8bed\u53e5\u68c0\u67e5\u8868\u4e2d\u7684\u5206\u533a\u662f\u5426\u521b\u5efa\u5b8c\u6210\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM starrocks_audit_db__.starrocks_audit_tbl__;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f85\u5206\u533a\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u4e0b\u4e00\u6b65\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"download-and-configure-audit-loader",children:"Download and configure Audit Loader"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://releases.mirrorship.cn/resources/AuditLoader.zip",children:"\u4e0b\u8f7d"})," Audit Loader \u5b89\u88c5\u5305\u3002\u6839\u636e StarRocks \u4e0d\u540c\u7248\u672c\uff0c\u8be5\u5b89\u88c5\u5305\u5305\u542b\u4e0d\u540c\u7684\u8def\u5f84\u3002\u60a8\u5fc5\u987b\u5b89\u88c5\u4e0e\u60a8\u7684 StarRocks \u7248\u672c\u517c\u5bb9\u7684 Audit Loader \u5b89\u88c5\u5305\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"2.4"}),"\uff1aStarRocks v2.4.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u5bf9\u5e94\u5b89\u88c5\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"2.3"}),"\uff1aStarRocks v2.3.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u5bf9\u5e94\u5b89\u88c5\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"2.2.1+"}),"\uff1aStarRocks v2.2.1 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u5bf9\u5e94\u5b89\u88c5\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"2.1-2.2.0"}),"\uff1aStarRocks v2.2.0, StarRocks v2.1.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u5bf9\u5e94\u5b89\u88c5\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"1.18.2-2.0"}),"\uff1aStarRocks v2.0.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u3001v1.19.0 \u53ca\u5176\u4e4b\u540e\u5c0f\u7248\u672c\u5bf9\u5e94\u5b89\u88c5\u5305"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u89e3\u538b\u5b89\u88c5\u5305\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"unzip auditloader.zip\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u89e3\u538b\u751f\u6210\u4ee5\u4e0b\u6587\u4ef6\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"auditloader.jar"}),"\uff1a\u63d2\u4ef6\u6838\u5fc3\u4ee3\u7801\u5305\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"plugin.properties"}),"\uff1a\u63d2\u4ef6\u5c5e\u6027\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"plugin.conf"}),"\uff1a\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539 ",(0,s.jsx)(e.strong,{children:"plugin.conf"})," \u6587\u4ef6\u4ee5\u914d\u7f6e Audit Loader\u3002\u60a8\u5fc5\u987b\u914d\u7f6e\u4ee5\u4e0b\u9879\u76ee\u4ee5\u786e\u4fdd Audit Loader \u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"frontend_host_port"}),"\uff1aFE \u8282\u70b9 IP \u5730\u5740\u548c HTTP \u7aef\u53e3\uff0c\u683c\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"<fe_ip>:<fe_http_port>"}),"\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"127.0.0.1:8030"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"database"}),"\uff1a\u5ba1\u8ba1\u65e5\u5fd7\u5e93\u540d\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"table"}),"\uff1a\u5ba1\u8ba1\u65e5\u5fd7\u8868\u540d\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"user"}),"\uff1a\u96c6\u7fa4\u7528\u6237\u540d\u3002\u8be5\u7528\u6237\u5fc5\u987b\u5177\u6709\u5bf9\u5e94\u8868\u7684 INSERT \u6743\u9650\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"password"}),"\uff1a\u96c6\u7fa4\u7528\u6237\u5bc6\u7801\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u91cd\u65b0\u6253\u5305\u4ee5\u4e0a\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"zip -q -m -r auditloader.zip auditloader.jar plugin.conf plugin.properties\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5c06\u538b\u7f29\u5305\u5206\u53d1\u81f3\u6240\u6709 FE \u8282\u70b9\u8fd0\u884c\u7684\u673a\u5668\u3002\u8bf7\u786e\u4fdd\u6240\u6709\u538b\u7f29\u5305\u90fd\u5b58\u50a8\u5728\u76f8\u540c\u7684\u8def\u5f84\u4e0b\uff0c\u5426\u5219\u63d2\u4ef6\u5c06\u5b89\u88c5\u5931\u8d25\u3002\u5206\u53d1\u5b8c\u6210\u540e\uff0c\u8bf7\u590d\u5236\u538b\u7f29\u5305\u7684\u7edd\u5bf9\u8def\u5f84\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88c5-audit-loader",children:"\u5b89\u88c5 Audit Loader"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u5b89\u88c5 Audit Loader \u63d2\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'INSTALL PLUGIN FROM "<absolute_path_to_package>";\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u7ec6\u64cd\u4f5c\u8bf4\u660e\u53c2\u9605 ",(0,s.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",children:"INSTALL PLUGIN"}),"\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9a8c\u8bc1\u5b89\u88c5\u5e76\u67e5\u8be2\u5ba1\u8ba1\u65e5\u5fd7",children:"\u9a8c\u8bc1\u5b89\u88c5\u5e76\u67e5\u8be2\u5ba1\u8ba1\u65e5\u5fd7"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PLUGINS",children:"SHOW PLUGINS"})," \u8bed\u53e5\u68c0\u67e5\u63d2\u4ef6\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u63d2\u4ef6 ",(0,s.jsx)(e.code,{children:"AuditLoader"})," \u7684 ",(0,s.jsx)(e.code,{children:"Status"})," \u4e3a ",(0,s.jsx)(e.code,{children:"INSTALLED"}),"\uff0c\u5373\u4ee3\u8868\u5b89\u88c5\u6210\u529f\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"mysql> SHOW PLUGINS\\G\n*************************** 1. row ***************************\n    Name: __builtin_AuditLogBuilder\n    Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\nClassName: com.starrocks.qe.AuditLogBuilder\n    SoName: NULL\n    Sources: Builtin\n    Status: INSTALLED\nProperties: {}\n*************************** 2. row ***************************\n    Name: AuditLoader\n    Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 1.0.1\nJavaVersion: 1.8.0\nClassName: com.starrocks.plugin.audit.AuditLoaderPlugin\n    SoName: NULL\n    Sources: /x/xx/xxx/xxxxx/auditloader.zip\n    Status: INSTALLED\nProperties: {}\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u968f\u673a\u6267\u884c SQL \u8bed\u53e5\u4ee5\u751f\u6210\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5e76\u7b49\u5f8560\u79d2\uff08\u6216\u60a8\u5728\u914d\u7f6e Audit Loader \u65f6\u5728 ",(0,s.jsx)(e.code,{children:"max_batch_interval_sec"})," \u9879\u4e2d\u6307\u5b9a\u7684\u65f6\u95f4\uff09\u4ee5\u5141\u8bb8 Audit Loader \u5c06\u5ba1\u8ba1\u65e5\u5fd7\u6512\u6279\u5bfc\u5165\u81f3StarRocks \u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2\u5ba1\u8ba1\u65e5\u5fd7\u8868\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"SELECT * FROM starrocks_audit_db__.starrocks_audit_tbl__;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u5ba1\u8ba1\u65e5\u5fd7\u6210\u529f\u5bfc\u5165\u7684\u60c5\u51b5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"mysql> SELECT * FROM starrocks_audit_db__.starrocks_audit_tbl__\\G\n*************************** 1. row ***************************\n    queryId: 082ddf02-6492-11ed-a071-6ae6b1db20eb\n    timestamp: 2022-11-15 11:03:08\n    clientIp: xxx.xx.xxx.xx:33544\n        user: root\nresourceGroup: default_wg\n            db: \n        state: EOF\n    errorCode: \n    queryTime: 8\n    scanBytes: 0\n    scanRows: 0\n    returnRows: 0\n    cpuCostNs: 62380\nmemCostBytes: 14504\n        stmtId: 33\n    isQuery: 1\n        feIp: xxx.xx.xxx.xx\n        stmt: SELECT * FROM starrocks_audit_db__.starrocks_audit_tbl__\n        digest: \nplanCpuCosts: 21\nplanMemCosts: 0\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u5728\u52a8\u6001\u5206\u533a\u521b\u5efa\u6210\u529f\u4e14\u63d2\u4ef6\u5b89\u88c5\u6210\u529f\u540e\u4ecd\u7136\u957f\u65f6\u95f4\u6ca1\u6709\u5ba1\u8ba1\u65e5\u5fd7\u5bfc\u5165\u81f3\u8868\u4e2d\uff0c\u60a8\u9700\u8981\u68c0\u67e5 ",(0,s.jsx)(e.strong,{children:"plugin.conf"})," \u6587\u4ef6\u662f\u5426\u914d\u7f6e\u6b63\u786e\u3002 \u5982\u9700\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u60a8\u9700\u8981\u9996\u5148\u5378\u8f7d\u63d2\u4ef6\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"UNINSTALL PLUGIN AuditLoader;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u6709\u914d\u7f6e\u8bbe\u7f6e\u6b63\u786e\u540e\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u4e0a\u8ff0\u6b65\u9aa4\u91cd\u65b0\u5b89\u88c5 Audit Loader\u3002"})]})}const T=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(l,n)})):l(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>a,ah:()=>t});var s=i(67294);const r=s.createContext({});function t(n){const e=s.useContext(r);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function a({components:n,children:e,disableParentContext:i}){let a;return a=i?"function"==typeof n?n({}):n||d:t(n),s.createElement(r.Provider,{value:a},e)}}}]);