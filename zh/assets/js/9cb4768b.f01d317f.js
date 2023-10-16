"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59509],{51985:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese"},r="negative",l={id:"sql-reference/sql-functions/math-functions/negative",title:"negative",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/math-functions/negative.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/negative",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/negative",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/negative.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"multiply",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/multiply"},next:{title:"pi",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/pi"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"negative",children:"negative"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"x"})," \u53d6\u5176\u8d1f\u6570\u4f5c\u4e3a\u7ed3\u679c\u8f93\u51fa\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"NEGATIVE(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3001DOUBLE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u4e0e\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"x"})," \u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql>  select negative(3);\n+-------------+\n| negative(3) |\n+-------------+\n|          -3 |\n+-------------+\n1 row in set (0.00 sec)\n\nmysql> select negative(cast(3.14 as decimalv2));\n+--------------------------------------+\n| negative(CAST(3.14 AS DECIMAL(9,0))) |\n+--------------------------------------+\n|                                -3.14 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(i.Provider,{value:l},n)}}}]);