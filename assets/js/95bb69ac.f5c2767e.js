"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16677],{75037:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=s(85893),c=s(11151);const l={},t="nullif",r={id:"sql-reference/sql-functions/condition-functions/nullif",title:"nullif",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/condition-functions/nullif.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/nullif",permalink:"/doc/zh/sql-reference/sql-functions/condition-functions/nullif",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/condition-functions/nullif.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ifnull",permalink:"/doc/zh/sql-reference/sql-functions/condition-functions/ifnull"},next:{title:"aes_decrypt",permalink:"/doc/zh/sql-reference/sql-functions/crytographic-functions/aes_decrypt"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"nullif",children:"nullif"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(e.p,{children:["\u82e5\u53c2\u6570 ",(0,i.jsx)(e.code,{children:"expr1"})," \u4e0e ",(0,i.jsx)(e.code,{children:"expr2"})," \u76f8\u7b49\uff0c\u5219\u8fd4\u56de NULL\uff0c\u5426\u5219\u8fd4\u56de ",(0,i.jsx)(e.code,{children:"expr1"})," \u7684\u503c\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"nullif(expr1,expr2);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"expr1"})," \u4e0e ",(0,i.jsx)(e.code,{children:"expr2"})," \u5fc5\u987b\u5728\u6570\u636e\u7c7b\u578b\u4e0a\u80fd\u591f\u517c\u5bb9\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e ",(0,i.jsx)(e.code,{children:"expr1"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select nullif(1,2);\n+--------------+\n| nullif(1, 2) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select nullif(1,1);\n+--------------+\n| nullif(1, 1) |\n+--------------+\n|         NULL |\n+--------------+\n1 row in set (0.01 sec)\n"})})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>l});var i=s(67294);const c=i.createContext({});function l(n){const e=i.useContext(c);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||t:l(n),i.createElement(c.Provider,{value:r},e)}}}]);