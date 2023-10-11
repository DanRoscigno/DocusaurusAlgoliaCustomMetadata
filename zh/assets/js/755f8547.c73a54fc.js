"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65666],{15315:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var c=s(85893),t=s(11151);const r={},o="group_concat",i={id:"sql-reference/sql-functions/string-functions/group_concat",title:"group_concat",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/string-functions/group_concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/group_concat",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/group_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/group_concat.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"find_in_set",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/find_in_set"},next:{title:"hex",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/hex"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"group_concat",children:"group_concat"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["group_concat \u5c06\u7ed3\u679c\u96c6\u4e2d\u7684\u591a\u884c\u7ed3\u679c\u8fde\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,c.jsx)(e.code,{children:"sep"})," \u4e3a\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8fde\u63a5\u7b26\u53f7\uff0c\u8be5\u53c2\u6570\u53ef\u9009\u3002\u8be5\u51fd\u6570\u4f1a\u5ffd\u7565 null \u503c\u3002"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u6ce8: \u7531\u4e8e\u662f\u5206\u5e03\u5f0f\u8ba1\u7b97\uff0c\u8be5\u51fd\u6570",(0,c.jsx)(e.strong,{children:"\u4e0d\u80fd\u4fdd\u8bc1\u591a\u884c\u6570\u636e\u662f\u300c\u6709\u5e8f\u300d\u62fc\u63a5\u7684"}),"\u3002\u8be5\u51fd\u6570\u901a\u5e38\u9700\u8981\u548c GROUP BY \u8bed\u53e5\u4e00\u8d77\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"group_concat(VARCHAR str[, VARCHAR sep])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"str"}),": \u5f85\u62fc\u63a5\u7684\u4e00\u5217\u503c\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"sep"}),": \u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8fde\u63a5\u7b26\uff0c\u53ef\u9009\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u9017\u53f7\uff08",(0,c.jsx)(e.code,{children:","}),"\uff09\u52a0\u4e00\u4e2a\u7a7a\u683c\u4f5c\u4e3a\u8fde\u63a5\u7b26\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:"\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"CREATE TABLE IF NOT EXISTS group_concat (\n    id        tinyint(4)      NULL,\n    value   varchar(65533)  NULL\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(id);\n\nINSERT INTO group_concat VALUES\n(1,'fruit'),\n(2,'drinks'),\n(3,null),\n(4,'fruit'),\n(5,'meat'),\n(6,'seafood');\n\nselect * from group_concat order by id;\n+------+---------+\n| id   | value   |\n+------+---------+\n|    1 | fruit   |\n|    2 | drinks  |\n|    3 | NULL    |\n|    4 | fruit   |\n|    5 | meat    |\n|    6 | seafood |\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528 group_concat \u5bf9 value \u5217\u4e2d\u7684\u503c\u8fdb\u884c\u62fc\u63a5\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"-- \u4e0d\u6307\u5b9a\u8fde\u63a5\u7b26\uff0c\u672a\u6709\u5e8f\u62fc\u63a5\u3002\nselect group_concat(value) from group_concat;\n+-------------------------------------+\n| group_concat(value)                 |\n+-------------------------------------+\n| meat, fruit, seafood, fruit, drinks |\n+-------------------------------------+\n\n-- \u6307\u5b9a\u7a7a\u683c\u4f5c\u4e3a\u8fde\u63a5\u7b26\u3002\nMySQL > select group_concat(value, \" \") from group_concat;\n+---------------------------------+\n| group_concat(value, ' ')        |\n+---------------------------------+\n| fruit meat fruit drinks seafood |\n+---------------------------------+\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(n){const e=c.useContext(t);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||o:r(n),c.createElement(t.Provider,{value:i},e)}}}]);