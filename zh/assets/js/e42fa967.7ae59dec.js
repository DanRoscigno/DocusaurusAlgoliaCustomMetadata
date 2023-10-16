"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59612],{60969:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>t});var c=s(85893),l=s(11151);const d={displayed_sidebar:"Chinese"},r="\u521b\u5efa\u8868",i={id:"quick_start/Create_table",title:"\u521b\u5efa\u8868",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u521b\u5efa\u8868\u4ee5\u53ca\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/quick_start/Create_table.md",sourceDirName:"quick_start",slug:"/quick_start/Create_table",permalink:"/doc/zh/docs/3.0/quick_start/Create_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/quick_start/Create_table.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"quick_start",permalink:"/doc/zh/docs/3.0/quick_start/"},next:{title:"Deploy StarRocks",permalink:"/doc/zh/docs/3.0/quick_start/Deploy"}},a={},t=[{value:"\u8fde\u63a5 StarRocks",id:"\u8fde\u63a5-starrocks",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868-1",level:2},{value:"\u5efa\u8868\u8bed\u53e5\u8bf4\u660e",id:"\u5efa\u8868\u8bed\u53e5\u8bf4\u660e",level:3},{value:"\u6392\u5e8f\u952e",id:"\u6392\u5e8f\u952e",level:4},{value:"\u5b57\u6bb5\u7c7b\u578b",id:"\u5b57\u6bb5\u7c7b\u578b",level:4},{value:"\u5206\u533a\u5206\u6876",id:"\u5206\u533a\u5206\u6876",level:4},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:4},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:4},{value:"ENGINE \u7c7b\u578b",id:"engine-\u7c7b\u578b",level:4},{value:"\u67e5\u770b\u8868\u4fe1\u606f",id:"\u67e5\u770b\u8868\u4fe1\u606f",level:2},{value:"\u4fee\u6539\u8868\u7ed3\u6784",id:"\u4fee\u6539\u8868\u7ed3\u6784",level:2},{value:"\u589e\u52a0\u5217",id:"\u589e\u52a0\u5217",level:3},{value:"\u5220\u9664\u5217",id:"\u5220\u9664\u5217",level:3},{value:"\u67e5\u770b\u4fee\u6539\u8868\u7ed3\u6784\u4f5c\u4e1a\u72b6\u6001",id:"\u67e5\u770b\u4fee\u6539\u8868\u7ed3\u6784\u4f5c\u4e1a\u72b6\u6001",level:3},{value:"\u53d6\u6d88\u4fee\u6539\u8868\u7ed3\u6784",id:"\u53d6\u6d88\u4fee\u6539\u8868\u7ed3\u6784",level:3},{value:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743",id:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3",h4:"h4"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u521b\u5efa\u8868\u4ee5\u53ca\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ea\u6709\u62e5\u6709 default_catalog \u4e0b ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/administration/privilege_item",children:"CREATE DATABASE"})," \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u521b\u5efa\u6570\u636e\u5e93\u3002\u53ea\u6709\u62e5\u6709\u8be5\u6570\u636e\u5e93 CREATE TABLE \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u5728\u8be5\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fde\u63a5-starrocks",children:"\u8fde\u63a5 StarRocks"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u6210\u529f ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/quick_start/deploy_with_docker",children:"\u90e8\u7f72 StarRocks \u96c6\u7fa4"})," \u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u4efb\u610f\u4e00\u4e2a FE \u8282\u70b9\u7684 ",(0,c.jsx)(n.code,{children:"query_port"}),"\uff08\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"9030"}),"\uff09\u4ee5\u8fde\u63a5 StarRocks\u3002StarRocks \u5185\u7f6e ",(0,c.jsx)(n.code,{children:"root"})," \u7528\u6237\uff0c\u5bc6\u7801\u9ed8\u8ba4\u4e3a\u7a7a\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"mysql -h <fe_host> -P9030 -u root\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u521b\u5efa\u6570\u636e\u5e93",children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,c.jsxs)(n.p,{children:["\u521b\u5efa ",(0,c.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u6307\u5b9a\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u548c\u5217\u540d\u7b49\u53d8\u91cf\u65f6\uff0c\u5982\u679c\u4f7f\u7528\u4e86\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u5fc5\u987b\u4f7f\u7528\u53cd\u5f15\u53f7 (`) \u5305\u88f9\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u4ea7\u751f\u62a5\u9519\u3002\u6709\u5173 StarRocks \u7684\u4fdd\u7559\u5173\u952e\u5b57\u5217\u8868\uff0c\u8bf7\u53c2\u89c1",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/keywords#%E4%BF%9D%E7%95%99%E5%85%B3%E9%94%AE%E5%AD%97",children:"\u5173\u952e\u5b57"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE example_db;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"SHOW DATABASES;"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u4e2d\u6240\u6709\u6570\u636e\u5e93\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL [(none)]> SHOW DATABASES;\n\n+--------------------+\n| Database           |\n+--------------------+\n| _statistics_       |\n| example_db         |\n| information_schema |\n+--------------------+\n3 rows in set (0.00 sec)\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u4e0e MySQL \u7684\u8868\u7ed3\u6784\u7c7b\u4f3c\uff0c",(0,c.jsx)(n.code,{children:"information_schema"})," \u5305\u542b\u5f53\u524d StarRocks \u96c6\u7fa4\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u4f46\u662f\u90e8\u5206\u7edf\u8ba1\u4fe1\u606f\u8fd8\u4e0d\u5b8c\u5584\u3002\u63a8\u8350\u60a8\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"DESC table_name"})," \u7b49\u547d\u4ee4\u6765\u83b7\u53d6\u6570\u636e\u5e93\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u521b\u5efa\u8868-1",children:"\u521b\u5efa\u8868"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u65b0\u5efa\u7684\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u652f\u6301 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/",children:"\u591a\u79cd\u6570\u636e\u6a21\u578b"}),"\uff0c\u4ee5\u9002\u7528\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u3002\u4ee5\u4e0b\u793a\u4f8b\u57fa\u4e8e ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/duplicate_key_table",children:"\u660e\u7ec6\u8868\u6a21\u578b"})," \u7f16\u5199\u5efa\u8868\u8bed\u53e5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u66f4\u591a\u5efa\u8868\u8bed\u6cd5\uff0c\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})," \u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'use example_db;\nCREATE TABLE IF NOT EXISTS `detailDemo` (\n    `recruit_date`  DATE           NOT NULL COMMENT "YYYY-MM-DD",\n    `region_num`    TINYINT        COMMENT "range [-128, 127]",\n    `num_plate`     SMALLINT       COMMENT "range [-32768, 32767] ",\n    `tel`           INT            COMMENT "range [-2147483648, 2147483647]",\n    `id`            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    `password`      LARGEINT       COMMENT "range [-2^127 + 1 ~ 2^127 - 1]",\n    `name`          CHAR(20)       NOT NULL COMMENT "range char(m),m in (1-255)",\n    `profile`       VARCHAR(500)   NOT NULL COMMENT "upper limit value 1048576 bytes",\n    `hobby`         STRING         NOT NULL COMMENT "upper limit value 65533 bytes",\n    `leave_time`    DATETIME       COMMENT "YYYY-MM-DD HH:MM:SS",\n    `channel`       FLOAT          COMMENT "4 bytes",\n    `income`        DOUBLE         COMMENT "8 bytes",\n    `account`       DECIMAL(12,4)  COMMENT "",\n    `ispass`        BOOLEAN        COMMENT "true/false"\n) ENGINE=OLAP\nDUPLICATE KEY(`recruit_date`, `region_num`)\nPARTITION BY RANGE(`recruit_date`)\n(\n    PARTITION p20220311 VALUES [(\'2022-03-11\'), (\'2022-03-12\')),\n    PARTITION p20220312 VALUES [(\'2022-03-12\'), (\'2022-03-13\')),\n    PARTITION p20220313 VALUES [(\'2022-03-13\'), (\'2022-03-14\')),\n    PARTITION p20220314 VALUES [(\'2022-03-14\'), (\'2022-03-15\')),\n    PARTITION p20220315 VALUES [(\'2022-03-15\'), (\'2022-03-16\'))\n)\nDISTRIBUTED BY HASH(`recruit_date`, `region_num`);\n'})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5728 StarRocks \u4e2d\uff0c\u5b57\u6bb5\u540d\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u8868\u540d\u533a\u5206\u5927\u5c0f\u5199\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u5efa\u8868\u65f6\uff0c",(0,c.jsx)(n.code,{children:"DISTRIBUTED BY"})," \u4e3a\u5fc5\u586b\u5b57\u6bb5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5efa\u8868\u8bed\u53e5\u8bf4\u660e",children:"\u5efa\u8868\u8bed\u53e5\u8bf4\u660e"}),"\n",(0,c.jsx)(n.h4,{id:"\u6392\u5e8f\u952e",children:"\u6392\u5e8f\u952e"}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u8868\u5185\u90e8\u7ec4\u7ec7\u5b58\u50a8\u6570\u636e\u65f6\u4f1a\u6309\u7167\u6307\u5b9a\u5217\u6392\u5e8f\uff0c\u8fd9\u4e9b\u5217\u4e3a\u6392\u5e8f\u5217\uff08Sort Key\uff09\u3002\u660e\u7ec6\u6a21\u578b\u4e2d\u7531 ",(0,c.jsx)(n.code,{children:"DUPLICATE KEY"})," \u6307\u5b9a\u6392\u5e8f\u5217\u3002\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"recruit_date"})," \u4ee5\u53ca ",(0,c.jsx)(n.code,{children:"region_num"})," \u4e24\u5217\u4e3a\u6392\u5e8f\u5217\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u6392\u5e8f\u5217\u5728\u5efa\u8868\u65f6\u5e94\u5b9a\u4e49\u5728\u5176\u4ed6\u5217\u4e4b\u524d\u3002\u6392\u5e8f\u952e\u8be6\u7ec6\u63cf\u8ff0\u4ee5\u53ca\u4e0d\u540c\u6570\u636e\u6a21\u578b\u7684\u8868\u7684\u8bbe\u7f6e\u65b9\u6cd5\u8bf7\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/Sort_key",children:"\u6392\u5e8f\u952e"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"\u5b57\u6bb5\u7c7b\u578b",children:"\u5b57\u6bb5\u7c7b\u578b"}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u8868\u4e2d\u652f\u6301\u591a\u79cd\u5b57\u6bb5\u7c7b\u578b\uff0c\u9664\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u5df2\u7ecf\u5217\u4e3e\u7684\u5b57\u6bb5\u7c7b\u578b\uff0c\u8fd8\u652f\u6301 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/using_starrocks/Using_bitmap",children:"BITMAP \u7c7b\u578b"}),"\uff0c",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/using_starrocks/Using_HLL",children:"HLL \u7c7b\u578b"}),"\uff0c",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/Array",children:"ARRAY \u7c7b\u578b"}),"\uff0c\u5b57\u6bb5\u7c7b\u578b\u4ecb\u7ecd\u8be6\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/BIGINT",children:"\u6570\u636e\u7c7b\u578b\u7ae0\u8282"}),"\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u5728\u5efa\u8868\u65f6\uff0c\u60a8\u5e94\u5c3d\u91cf\u4f7f\u7528\u7cbe\u786e\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u6574\u578b\u6570\u636e\u4e0d\u5e94\u4f7f\u7528\u5b57\u7b26\u4e32\u7c7b\u578b\uff0cINT \u7c7b\u578b\u5373\u53ef\u6ee1\u8db3\u7684\u6570\u636e\u4e0d\u5e94\u4f7f\u7528 BIGINT \u7c7b\u578b\u3002\u7cbe\u786e\u7684\u6570\u636e\u7c7b\u578b\u80fd\u591f\u66f4\u597d\u7684\u53d1\u6325\u6570\u636e\u5e93\u7684\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"\u5206\u533a\u5206\u6876",children:"\u5206\u533a\u5206\u6876"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"PARTITION"})," \u5173\u952e\u5b57\u7528\u4e8e\u7ed9\u8868 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE#partition_desc",children:"\u521b\u5efa\u5206\u533a"}),"\u3002\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"recruit_date"})," \u8fdb\u884c\u8303\u56f4\u5206\u533a\uff0c\u4ece 11 \u65e5\u5230 15 \u65e5\u6bcf\u5929\u521b\u5efa\u4e00\u4e2a\u5206\u533a\u3002StarRocks \u652f\u6301\u52a8\u6001\u751f\u6210\u5206\u533a\uff0c\u8be6\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/Data_distribution#%E5%8A%A8%E6%80%81%E5%88%86%E5%8C%BA%E7%AE%A1%E7%90%86",children:"\u52a8\u6001\u5206\u533a\u7ba1\u7406"}),"\u3002",(0,c.jsx)(n.strong,{children:"\u4e3a\u4e86\u4f18\u5316\u751f\u4ea7\u73af\u5883\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4e3a\u8868\u5236\u5b9a\u5408\u7406\u7684\u6570\u636e\u5206\u533a\u8ba1\u5212\u3002"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DISTRIBUTED"})," \u5173\u952e\u5b57\u7528\u4e8e\u7ed9\u8868 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE#distribution_desc",children:"\u521b\u5efa\u5206\u6876"}),"\uff0c\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"recruit_date"})," \u4ee5\u53ca ",(0,c.jsx)(n.code,{children:"region_num"})," \u4e24\u4e2a\u5b57\u6bb5\u4f5c\u4e3a\u5206\u6876\u5217\u3002\u5e76\u4e14\u81ea 2.5.7 \u8d77 StarRocks \u652f\u6301\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\uff0c\u8be6\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u521b\u5efa\u8868\u65f6\u5408\u7406\u7684\u5206\u533a\u548c\u5206\u6876\u8bbe\u8ba1\u53ef\u4ee5\u4f18\u5316\u8868\u7684\u67e5\u8be2\u6027\u80fd\u3002\u6709\u5173\u5206\u533a\u5206\u6876\u5217\u5982\u4f55\u9009\u62e9\uff0c\u8be6\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/Data_distribution",children:"\u6570\u636e\u5206\u5e03"}),"\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u6570\u636e\u6a21\u578b",children:"\u6570\u636e\u6a21\u578b"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DUPLICATE"})," \u5173\u952e\u5b57\u8868\u793a\u5f53\u524d\u8868\u4e3a\u660e\u7ec6\u6a21\u578b\uff0c",(0,c.jsx)(n.code,{children:"KEY"})," \u4e2d\u7684\u5217\u8868\u793a\u5f53\u524d\u8868\u7684\u6392\u5e8f\u5217\u3002StarRocks \u652f\u6301\u591a\u79cd\u6570\u636e\u6a21\u578b\uff0c\u5206\u522b\u4e3a ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/duplicate_key_table",children:"\u660e\u7ec6\u6a21\u578b"}),"\uff0c",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/aggregate_table",children:"\u805a\u5408\u6a21\u578b"}),"\uff0c",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/unique_key_table",children:"\u66f4\u65b0\u6a21\u578b"}),"\uff0c",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/primary_key_table",children:"\u4e3b\u952e\u6a21\u578b"}),"\u3002\u4e0d\u540c\u6a21\u578b\u7684\u9002\u7528\u4e8e\u591a\u79cd\u4e1a\u52a1\u573a\u666f\uff0c\u5408\u7406\u9009\u62e9\u53ef\u4f18\u5316\u67e5\u8be2\u6548\u7387\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u7d22\u5f15",children:"\u7d22\u5f15"}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u9ed8\u8ba4\u4f1a\u7ed9 Key \u5217\u521b\u5efa\u7a00\u758f\u7d22\u5f15\u52a0\u901f\u67e5\u8be2\uff0c\u5177\u4f53\u89c4\u5219\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/Sort_key",children:"\u6392\u5e8f\u952e"}),"\u3002\u652f\u6301\u7684\u7d22\u5f15\u7c7b\u578b\u6709 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/using_starrocks/Bitmap_index",children:"Bitmap \u7d22\u5f15"}),"\uff0c",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/using_starrocks/Bloomfilter_index",children:"Bloomfilter \u7d22\u5f15"})," \u7b49\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u7d22\u5f15\u521b\u5efa\u5bf9\u8868\u6a21\u578b\u548c\u5217\u6709\u8981\u6c42\uff0c\u8be6\u7ec6\u8bf4\u660e\u89c1\u5bf9\u5e94\u7d22\u5f15\u4ecb\u7ecd\u7ae0\u8282\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"engine-\u7c7b\u578b",children:"ENGINE \u7c7b\u578b"}),"\n",(0,c.jsxs)(n.p,{children:["\u9ed8\u8ba4 ENGINE \u7c7b\u578b\u4e3a ",(0,c.jsx)(n.code,{children:"olap"}),"\uff0c\u5bf9\u5e94 StarRocks \u96c6\u7fa4\u5185\u90e8\u8868\u3002\u5176\u4ed6\u53ef\u9009\u9879\u5305\u62ec ",(0,c.jsx)(n.code,{children:"mysql"}),"\uff0c",(0,c.jsx)(n.code,{children:"elasticsearch"}),"\uff0c",(0,c.jsx)(n.code,{children:"hive"}),"\uff0c",(0,c.jsx)(n.code,{children:"jdbc"}),"\uff082.3 \u53ca\u4ee5\u540e\uff09\uff0c",(0,c.jsx)(n.code,{children:"hudi"}),"\uff082.2 \u53ca\u4ee5\u540e\uff09\u4ee5\u53ca ",(0,c.jsx)(n.code,{children:"iceberg"}),"\uff0c\u5206\u522b\u4ee3\u8868\u6240\u521b\u5efa\u7684\u8868\u4e3a\u76f8\u5e94\u7c7b\u578b\u7684 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/data_source/External_table",children:"\u5916\u90e8\u8868"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u770b\u8868\u4fe1\u606f",children:"\u67e5\u770b\u8868\u4fe1\u606f"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 SQL \u547d\u4ee4\u67e5\u770b\u8868\u7684\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u6240\u6709\u7684\u8868"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES;\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67e5\u770b\u8868\u7684\u7ed3\u6784"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"DESC table_name;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"DESC detailDemo;\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67e5\u770b\u5efa\u8868\u8bed\u53e5"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE table_name;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE detailDemo;\n"})}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"\u4fee\u6539\u8868\u7ed3\u6784",children:"\u4fee\u6539\u8868\u7ed3\u6784"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u652f\u6301\u591a\u79cd DDL \u64cd\u4f5c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE#schema-change",children:"ALTER TABLE"})," \u547d\u4ee4\u53ef\u4ee5\u4fee\u6539\u8868\u7684 Schema\uff0c\u5305\u62ec\u589e\u52a0\u5217\uff0c\u5220\u9664\u5217\uff0c\u4fee\u6539\u5217\u7c7b\u578b\uff08\u6682\u4e0d\u652f\u6301\u4fee\u6539\u5217\u540d\u79f0\uff09\uff0c\u6539\u53d8\u5217\u987a\u5e8f\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u589e\u52a0\u5217",children:"\u589e\u52a0\u5217"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5728\u4ee5\u4e0a\u521b\u5efa\u7684\u8868\u4e2d\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"ispass"})," \u5217\u540e\u65b0\u589e\u4e00\u5217 ",(0,c.jsx)(n.code,{children:"uv"}),"\uff0c\u7c7b\u578b\u4e3a BIGINT\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE detailDemo ADD COLUMN uv BIGINT DEFAULT '0' after ispass;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5220\u9664\u5217",children:"\u5220\u9664\u5217"}),"\n",(0,c.jsx)(n.p,{children:"\u5220\u9664\u4ee5\u4e0a\u6b65\u9aa4\u65b0\u589e\u7684\u5217\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\u6dfb\u52a0\u4e86 ",(0,c.jsx)(n.code,{children:"uv"}),"\uff0c\u8bf7\u52a1\u5fc5\u5220\u9664\u6b64\u5217\u4ee5\u4fdd\u8bc1\u540e\u7eed Quick Start \u5185\u5bb9\u53ef\u4ee5\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE detailDemo DROP COLUMN uv;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u67e5\u770b\u4fee\u6539\u8868\u7ed3\u6784\u4f5c\u4e1a\u72b6\u6001",children:"\u67e5\u770b\u4fee\u6539\u8868\u7ed3\u6784\u4f5c\u4e1a\u72b6\u6001"}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u8868\u7ed3\u6784\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN\\G;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5f53\u4f5c\u4e1a\u72b6\u6001\u4e3a FINISHED\uff0c\u5219\u8868\u793a\u4f5c\u4e1a\u5b8c\u6210\uff0c\u65b0\u7684\u8868\u7ed3\u6784\u4fee\u6539\u5df2\u751f\u6548\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539 Schema \u5b8c\u6210\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6700\u65b0\u7684\u8868\u7ed3\u6784\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"DESC table_name;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL [example_db]> desc detailDemo;\n\n+--------------+-----------------+------+-------+---------+-------+\n| Field        | Type            | Null | Key   | Default | Extra |\n+--------------+-----------------+------+-------+---------+-------+\n| recruit_date | DATE            | No   | true  | NULL    |       |\n| region_num   | TINYINT         | Yes  | true  | NULL    |       |\n| num_plate    | SMALLINT        | Yes  | false | NULL    |       |\n| tel          | INT             | Yes  | false | NULL    |       |\n| id           | BIGINT          | Yes  | false | NULL    |       |\n| password     | LARGEINT        | Yes  | false | NULL    |       |\n| name         | CHAR(20)        | No   | false | NULL    |       |\n| profile      | VARCHAR(500)    | No   | false | NULL    |       |\n| hobby        | VARCHAR(65533)  | No   | false | NULL    |       |\n| leave_time   | DATETIME        | Yes  | false | NULL    |       |\n| channel      | FLOAT           | Yes  | false | NULL    |       |\n| income       | DOUBLE          | Yes  | false | NULL    |       |\n| account      | DECIMAL64(12,4) | Yes  | false | NULL    |       |\n| ispass       | BOOLEAN         | Yes  | false | NULL    |       |\n| uv           | BIGINT          | Yes  | false | 0       |       |\n+--------------+-----------------+------+-------+---------+-------+\n15 rows in set (0.00 sec)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u53d6\u6d88\u4fee\u6539\u8868\u7ed3\u6784",children:"\u53d6\u6d88\u4fee\u6539\u8868\u7ed3\u6784"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4f5c\u4e1a\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CANCEL ALTER TABLE COLUMN FROM table_name\\G;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743",children:"\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u521b\u5efa\u5b8c\u6210\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa ",(0,c.jsx)(n.code,{children:"test"})," \u7528\u6237\uff0c\u5e76\u6388\u4e88\u5176 ",(0,c.jsx)(n.code,{children:"example_db"})," \u7684\u8bfb\u5199\u6743\u9650\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'test' IDENTIFIED by '123456';\nGRANT ALL on example_db.* to test;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u767b\u5f55\u88ab\u6388\u6743\u7684 ",(0,c.jsx)(n.code,{children:"test"})," \u8d26\u6237\uff0c\u5c31\u53ef\u4ee5\u64cd\u4f5c ",(0,c.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"mysql -h 127.0.0.1 -P9030 -utest -p123456\n"})}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,c.jsxs)(n.p,{children:["\u8868\u521b\u5efa\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/quick_start/Import_and_query",children:"\u5bfc\u5165\u5e76\u67e5\u8be2\u6570\u636e"}),"\u3002"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>d});var c=s(67294);const l=c.createContext({});function d(e){const n=c.useContext(l);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:d(e),c.createElement(l.Provider,{value:i},n)}}}]);