"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30421],{84046:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(85893),c=s(11151);const r={},l="sum",o={id:"sql-reference/sql-functions/aggregate-functions/sum",title:"sum",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/sum.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/sum",permalink:"/doc/zh/sql-reference/sql-functions/aggregate-functions/sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/sum.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"STDDEV_SAMP",permalink:"/doc/zh/sql-reference/sql-functions/aggregate-functions/stddev_samp"},next:{title:"VAR_SAMP, VARIANCE_SAMP",permalink:"/doc/zh/sql-reference/sql-functions/aggregate-functions/var_samp"}},t={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,c.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"sum",children:"sum"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u6307\u5b9a\u5217\u6240\u6709\u503c\u7684\u603b\u548c\u3002\u8be5\u51fd\u6570\u4f1a\u5ffd\u7565 NULL \u503c\uff0c\u53ef\u4ee5\u4e0e DISTINCT \u8fd0\u7b97\u7b26\u642d\u914d\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"SUM(expr)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"expr"}),": \u7528\u4e8e\u6307\u5b9a\u53c2\u4e0e\u6c42\u548c\u8fd0\u7b97\u7684\u5217\u3002\u5217\u503c\u53ef\u4ee5\u4e3a TINYINT\uff0cSMALLINT\uff0cINT\uff0cFLOAT\uff0cDOUBLE\uff0c\u6216DECIMAL \u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u5217\u503c\u548c\u8fd4\u56de\u503c\u7c7b\u578b\u7684\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"TINYINT -> BIGINT"}),"\n",(0,i.jsx)(e.li,{children:"SMALLINT -> BIGINT"}),"\n",(0,i.jsx)(e.li,{children:"INT -> BIGINT"}),"\n",(0,i.jsx)(e.li,{children:"FLOAT -> DOUBLE"}),"\n",(0,i.jsx)(e.li,{children:"DOUBLE -> DOUBLE"}),"\n",(0,i.jsx)(e.li,{children:"DECIMAL -> DECIMAL"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u5217\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002\n\u5982\u679c\u67d0\u884c\u7684\u503c\u4e3aNULL\uff0c\u8be5\u884c\u4e0d\u53c2\u4e0e\u8ba1\u7b97\u3002\n\u5982\u679c\u5217\u503c\u4e3a STRING \u7c7b\u578b\u7684\u6570\u5b57\uff0c\u4f1a\u9690\u5f0f\u8f6c\u6362\u4e3a DOUBLE \u7c7b\u578b\u540e\u518d\u8fdb\u884c\u8fd0\u7b97\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u8868",(0,i.jsx)(e.code,{children:"employees"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS employees (\n    region_num    TINYINT        COMMENT "range [-128, 127]",\n    id            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    hobby         STRING         NOT NULL COMMENT "upper limit value 65533 bytes",\n    income        DOUBLE         COMMENT "8 bytes",\n    sales       DECIMAL(12,4)  COMMENT ""\n    )\n    DISTRIBUTED BY HASH(region_num);\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"INSERT INTO employees VALUES\n(3,432175,'3',25600,1250.23),\n(4,567832,'3',37932,2564.33),\n(3,777326,'2',null,1932.99),\n(5,342611,'6',43727,45235.1),\n(2,403882,'4',36789,52872.4);\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u8be2\u8868\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select * from employees;\n+------------+--------+-------+--------+------------+\n| region_num | id     | hobby | income | sales      |\n+------------+--------+-------+--------+------------+\n|          5 | 342611 | 6     |  43727 | 45235.1000 |\n|          2 | 403882 | 4     |  36789 | 52872.4000 |\n|          4 | 567832 | 3     |  37932 |  2564.3300 |\n|          3 | 432175 | 3     |  25600 |  1250.2300 |\n|          3 | 777326 | 2     |   NULL |  1932.9900 |\n+------------+--------+-------+--------+------------+\n5 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528",(0,i.jsx)(e.code,{children:"sum"}),"\u51fd\u6570\u8fdb\u884c\u6c42\u548c\u8fd0\u7b97\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u793a\u4f8b1\uff1a\u8ba1\u7b97\u5404\u5730\u533a\u7684\u9500\u552e\u989d\u603b\u548c\uff0c\u5373\u4ee5",(0,i.jsx)(e.code,{children:"region_num"}),"\u8fdb\u884c\u5206\u7ec4\u5bf9",(0,i.jsx)(e.code,{children:"sales"}),"\u6c42\u548c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT region_num, sum(sales) from employees\ngroup by region_num;\n\n+------------+------------+\n| region_num | sum(sales) |\n+------------+------------+\n|          2 | 52872.4000 |\n|          5 | 45235.1000 |\n|          4 |  2564.3300 |\n|          3 |  3183.2200 |\n+------------+------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u793a\u4f8b2\uff1a\u8ba1\u7b97\u5404\u5730\u533a\u5458\u5de5\u7684\u6536\u5165\u603b\u5408\uff0c\u5373\u4ee5",(0,i.jsx)(e.code,{children:"region_num"}),"\u8fdb\u884c\u5206\u7ec4\u5bf9",(0,i.jsx)(e.code,{children:"income"}),"\u8fdb\u884c\u6c42\u548c\u3002\u56e0\u4e3a ",(0,i.jsx)(e.code,{children:"sum"})," \u51fd\u6570\u5ffd\u7565 NULL \u503c\uff0c\u56e0\u6b64",(0,i.jsx)(e.code,{children:"id"}),"\u4e3a",(0,i.jsx)(e.code,{children:"777326"}),"\u7684\u5458\u5de5\u6536\u5165\u6ca1\u6709\u53c2\u4e0e\u8ba1\u7b97\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select region_num, sum(income) from employees\ngroup by region_num;\n\n+------------+-------------+\n| region_num | sum(income) |\n+------------+-------------+\n|          2 |       36789 |\n|          5 |       43727 |\n|          4 |       37932 |\n|          3 |       25600 |\n+------------+-------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u793a\u4f8b3\uff1a\u8ba1\u7b97\u5458\u5de5\u7231\u597d\u6570\u603b\u548c\u3002\u5176\u4e2d",(0,i.jsx)(e.code,{children:"hobby"}),"\u5217\u4e3aSTRING\u7c7b\u578b\u7684\u6570\u5b57\uff0c\u5728\u8ba1\u7b97\u65f6\u4f1a\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\u4e3aDOUBLE\u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select sum(DISTINCT hobby) from employees;\n\n+---------------------+\n| sum(DISTINCT hobby) |\n+---------------------+\n|                  15 |\n+---------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b4\uff1a\u7ed3\u5408 WHERE \u6761\u4ef6\u5b50\u53e5\uff0c\u8ba1\u7b97\u6708\u6536\u5165\u5927\u4e8e30000\u7684\u5458\u5de5\u6536\u5165\u603b\u548c\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select sum(income) from employees\nWHERE income > 30000;\n\n+-------------+\n| sum(income) |\n+-------------+\n|      118448 |\n+-------------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>r});var i=s(67294);const c=i.createContext({});function r(n){const e=i.useContext(c);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||l:r(n),i.createElement(c.Provider,{value:o},e)}}}]);