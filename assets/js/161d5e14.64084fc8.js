"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41637],{5665:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var c=s(85893),t=s(11151);const r={},i="md5",o={id:"sql-reference/sql-functions/crytographic-functions/md5",title:"md5",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/md5.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/md5",permalink:"/doc/zh/sql-reference/sql-functions/crytographic-functions/md5",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/crytographic-functions/md5.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"from_base64",permalink:"/doc/zh/sql-reference/sql-functions/crytographic-functions/from_base64"},next:{title:"md5sum",permalink:"/doc/zh/sql-reference/sql-functions/crytographic-functions/md5sum"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"md5",children:"md5"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528 MD5 \u52a0\u5bc6\u7b97\u6cd5\u5c06\u7ed9\u5b9a\u5b57\u7b26\u4e32\u8fdb\u884c\u52a0\u5bc6\uff0c\u8f93\u51fa\u4e00\u4e2a 128-bit \u7684\u6821\u9a8c\u548c (checksum)\u3002\u6821\u9a8c\u548c\u4ee5 32 \u5b57\u7b26\u7684\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u8868\u793a\u3002"}),"\n",(0,c.jsx)(n.p,{children:"MD5 \u4fe1\u606f\u6458\u8981\u7b97\u6cd5 (MD5 Message-Digest Algorithm)\uff0c\u662f\u4e00\u79cd\u5e7f\u6cdb\u4f7f\u7528\u7684\u5bc6\u7801\u6563\u5217\u51fd\u6570\uff0c\u7528\u4e8e\u786e\u4fdd\u4fe1\u606f\u4f20\u8f93\u5b8c\u6574\u4e00\u81f4\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"md5(expr)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr"}),": \u5f85\u8ba1\u7b97\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u8f93\u5165 \u4e3a NULL\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a NULL\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select md5('abc');\n+----------------------------------+\n| md5('abc')                       |\n+----------------------------------+\n| 900150983cd24fb0d6963f7d28e17f72 |\n+----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5(null);\n+-----------+\n| md5(NULL) |\n+-----------+\n| NULL      |\n+-----------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),c.createElement(t.Provider,{value:o},n)}}}]);