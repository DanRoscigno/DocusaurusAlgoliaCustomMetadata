"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[24047],{609:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},l="BINARY/VARBINARY",a={id:"sql-reference/sql-statements/data-types/BINARY",title:"BINARY/VARBINARY",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/BINARY.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/BINARY",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/BINARY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/BINARY.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u5b57\u7b26\u4e32\u7c7b\u578b",permalink:"/doc/zh/docs/category/\u5b57\u7b26\u4e32\u7c7b\u578b"},next:{title:"CHAR",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/CHAR"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879",id:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u521b\u5efa BINARY \u7c7b\u578b\u7684\u5217",id:"\u521b\u5efa-binary-\u7c7b\u578b\u7684\u5217",level:3},{value:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a BINARY \u7c7b\u578b",id:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a-binary-\u7c7b\u578b",level:3},{value:"\u67e5\u8be2\u548c\u5904\u7406 BINARY \u7c7b\u578b\u7684\u6570\u636e",id:"\u67e5\u8be2\u548c\u5904\u7406-binary-\u7c7b\u578b\u7684\u6570\u636e",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",blockquote:"blockquote",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"binaryvarbinary",children:"BINARY/VARBINARY"}),"\n",(0,t.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"BINARY(M)"}),"\n",(0,t.jsx)(n.p,{children:"VARBINARY(M)"}),"\n",(0,t.jsx)(n.p,{children:"\u81ea 3.0 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301 BINARY/VARBINARY \u6570\u636e\u7c7b\u578b\uff0c\u7528\u4e8e\u5b58\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u652f\u6301\u7684\u6700\u5927\u957f\u5ea6\u4e0e VARCHAR \u7c7b\u578b\u76f8\u540c\uff0c",(0,t.jsx)(n.code,{children:"M"})," \u7684\u53d6\u503c\u8303\u56f4\u4e3a 1~1048576\u3002\u5982\u679c\u672a\u6307\u5b9a ",(0,t.jsx)(n.code,{children:"M"}),"\uff0c\u9ed8\u8ba4\u4e3a\u6700\u5927\u503c 1048576\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"BINARY \u662f VARBINARY \u7684\u522b\u540d\uff0c\u7528\u6cd5\u4e0e VARBINARY \u76f8\u540c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879",children:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u5728\u660e\u7ec6\u6a21\u578b\u3001\u4e3b\u952e\u6a21\u578b\u3001\u66f4\u65b0\u6a21\u578b\u8868\u4e2d\u521b\u5efa VARBINARY \u7c7b\u578b\u7684\u5217\uff0c\u4f46\u4e0d\u652f\u6301\u5728\u805a\u5408\u6a21\u578b\u8868\u4e2d\u521b\u5efa VARBINARY \u7c7b\u578b\u7684\u5217\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6682\u4e0d\u652f\u6301 BINARY/VARBINARY \u7c7b\u578b\u7684\u5217\u4f5c\u4e3a\u660e\u7ec6\u6a21\u578b\u3001\u4e3b\u952e\u6a21\u578b\u3001\u66f4\u65b0\u6a21\u578b\u8868\u7684\u5206\u533a\u952e\u3001\u5206\u6876\u952e\u3001\u7ef4\u5ea6\u5217\uff0c\u5e76\u4e14\u4e0d\u652f\u6301\u7528\u4e8e JOIN\u3001GROUP BY\u3001ORDER BY \u5b50\u53e5\u3002"}),"\n",(0,t.jsx)(n.li,{children:"BINARY(M)/VARBINARY(M) \u4e0d\u4f1a\u5bf9\u6ca1\u6709\u5bf9\u9f50\u7684\u957f\u5ea6\u505a\u8865\u9f50\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.h3,{id:"\u521b\u5efa-binary-\u7c7b\u578b\u7684\u5217",children:"\u521b\u5efa BINARY \u7c7b\u578b\u7684\u5217"}),"\n",(0,t.jsxs)(n.p,{children:["\u5efa\u8868\u65f6\uff0c\u901a\u8fc7\u5173\u952e\u5b57 ",(0,t.jsx)(n.code,{children:"VARBINARY"}),"\uff0c\u6307\u5b9a\u5217 ",(0,t.jsx)(n.code,{children:"j"})," \u4e3a VARBINARY \u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `test_binary` (\n    `id` INT(11) NOT NULL COMMENT "",\n    `j`  VARBINARY NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n\nmysql> DESC test_binary;\n+-------+-----------+------+-------+---------+-------+\n| Field | Type      | Null | Key   | Default | Extra |\n+-------+-----------+------+-------+---------+-------+\n| id    | int       | NO   | true  | NULL    |       |\n| j     | varbinary | YES  | false | NULL    |       |\n+-------+-----------+------+-------+---------+-------+\n2 rows in set (0.01 sec)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a-binary-\u7c7b\u578b",children:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a BINARY \u7c7b\u578b"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5982\u4e0b\u65b9\u5f0f\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a BINARY \u7c7b\u578b\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7 INSERT INTO \u5c06\u6570\u636e\u5199\u5165\u81f3 BINARY \u7c7b\u578b\u7684\u5e38\u91cf\u5217\uff08\u4f8b\u5982\u5217 ",(0,t.jsx)(n.code,{children:"j"}),"\uff09\uff0c\u5176\u4e2d\u5e38\u91cf\u5217\u4ee5 ",(0,t.jsx)(n.code,{children:"x''"})," \u4f5c\u4e3a\u524d\u7f00\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_binary (id, j) VALUES (1, x'abab');\nINSERT INTO test_binary (id, j) VALUES (2, x'baba');\nINSERT INTO test_binary (id, j) VALUES (3, x'010102');\nINSERT INTO test_binary (id, j) VALUES (4, x'0000');\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7 TO_BINARY() \u51fd\u6570\u5c06 VARCHAR \u7c7b\u578b\u6570\u636e\u8f6c\u6362\u4e3a BINARY \u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_binary select 5, to_binary('abab', 'hex');\nINSERT INTO test_binary select 6, to_binary('abab', 'base64');\nINSERT INTO test_binary select 7, to_binary('abab', 'utf8');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u8be2\u548c\u5904\u7406-binary-\u7c7b\u578b\u7684\u6570\u636e",children:"\u67e5\u8be2\u548c\u5904\u7406 BINARY \u7c7b\u578b\u7684\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u67e5\u8be2\u548c\u5904\u7406 BINARY \u7c7b\u578b\u7684\u6570\u636e\uff0c\u5e76\u4e14\u652f\u6301\u4f7f\u7528 BINARY \u51fd\u6570\u548c\u8fd0\u7b97\u7b26\u3002\u672c\u793a\u4f8b\u4ee5\u8868 ",(0,t.jsx)(n.code,{children:"test_binary"})," \u8868\u8fdb\u884c\u8bf4\u660e\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5982\u679c\u5728\u542f\u52a8 MySQL client \u65f6\u6dfb\u52a0\u4e86 ",(0,t.jsx)(n.code,{children:"--binary-as-hex"})," \u9009\u9879\uff0c\u4f1a\u9ed8\u8ba4\u4ee5 ",(0,t.jsx)(n.code,{children:"hex"})," \u7684\u683c\u5f0f\u5c55\u793a\u7ed3\u679c\u4e2d\u7684 BINARY \u6570\u636e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from test_binary;\n+------+------------+\n| id   | j          |\n+------+------------+\n|    1 | 0xABAB     |\n|    2 | 0xBABA     |\n|    3 | 0x010102   |\n|    4 | 0x0000     |\n|    5 | 0xABAB     |\n|    6 | 0xABAB     |\n|    7 | 0x61626162 |\n+------+------------+\n7 rows in set (0.08 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/string-functions/hex",children:"hex"})," \u51fd\u6570\u67e5\u770b BINARY \u7c7b\u578b\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select id, hex(j) from test_binary;\n+------+----------+\n| id   | hex(j)   |\n+------+----------+\n|    1 | ABAB     |\n|    2 | BABA     |\n|    3 | 010102   |\n|    4 | 0000     |\n|    5 | ABAB     |\n|    6 | ABAB     |\n|    7 | 61626162 |\n+------+----------+\n7 rows in set (0.02 sec)\n"})})]})}const A=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:a},n)}}}]);