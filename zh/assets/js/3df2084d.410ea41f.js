"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40692],{20501:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var c=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese"},i="md5sum",d={id:"sql-reference/sql-functions/crytographic-functions/md5sum",title:"md5sum",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/crytographic-functions/md5sum.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/md5sum",permalink:"/doc/zh/docs/sql-reference/sql-functions/crytographic-functions/md5sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/md5sum.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"md5",permalink:"/doc/zh/docs/sql-reference/sql-functions/crytographic-functions/md5"},next:{title:"md5sum_numeric",permalink:"/doc/zh/docs/sql-reference/sql-functions/crytographic-functions/md5sum_numeric"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"md5sum",children:"md5sum"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u8ba1\u7b97\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u7684 MD5 128-bit \u6821\u9a8c\u548c (checksum)\uff0c\u4ee5 32 \u5b57\u7b26\u7684\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u8868\u793a\u3002\u8be5\u51fd\u6570\u53ef\u63a5\u6536\u591a\u4e2a\u53c2\u6570\uff0c\u4e0e md5() \u51fd\u6570\u76f8\u6bd4\uff0c\u6587\u4ef6\u68c0\u67e5\u7684\u6548\u7387\u66f4\u9ad8\u3002\u5982\u679c\u4f20\u5165\u5355\u4e2a\u53c2\u6570\uff0cmd5sum \u548c md5 \u8ba1\u7b97\u7ed3\u679c\u76f8\u540c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"md5sum \u7b97\u6cd5\u4e00\u822c\u7528\u4e8e\u68c0\u67e5\u6587\u4ef6\u7684\u5b8c\u6574\u6027\uff0c\u9632\u6b62\u6587\u4ef6\u88ab\u7be1\u6539\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"md5sum(expr,...);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select md5sum(\"starrocks\");\n+----------------------------------+\n| md5sum('starrocks')              |\n+----------------------------------+\n| f75523a916caf65f1ad487a9f8017f75 |\n+----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum(\"starrocks\",\"star\");\n+----------------------------------+\n| md5sum('starrocks', 'star')      |\n+----------------------------------+\n| 7af4bfe35b8df2786ad133c57cb2aed8 |\n+----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum(null);\n+----------------------------------+\n| md5sum(NULL)                     |\n+----------------------------------+\n| d41d8cd98f00b204e9800998ecf8427e |\n+----------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var c=s(67294);const r=c.createContext({});function t(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:t(e),c.createElement(r.Provider,{value:d},n)}}}]);