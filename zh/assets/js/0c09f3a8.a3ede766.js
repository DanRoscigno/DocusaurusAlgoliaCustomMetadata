"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29047],{8485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var t=s(85893),l=s(11151);const c={displayed_sidebar:"Chinese"},r="least",a={id:"sql-reference/sql-functions/math-functions/least",title:"least",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/math-functions/least.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/least",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/least",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/least.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"greatest",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/greatest"},next:{title:"ln, dlog1, log",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/ln"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"least",children:"least"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u4e2d\u7684\u6700\u5c0f\u503c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e\u8f93\u5165\u503c\u76f8\u540c\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u5728\u5bf9\u6bd4\u65f6\u9075\u5faa\u7684\u539f\u5219\u540c ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/math-functions/greatest",children:"greatest"})," \u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"LEAST(expr1,...);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a SMALLINT\u3001TINYINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001DATETIME\u3001VARCHAR\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8f93\u5165\u503c\u4e3a\u5355\u503c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select least(3);\n+----------+\n| least(3) |\n+----------+\n|        3 |\n+----------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8fd4\u56de\u4e00\u7ec4\u6570\u503c\u4e2d\u7684\u6700\u5c0f\u503c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select least(3,4,5,5,6);\n+----------------------+\n| least(3, 4, 5, 5, 6) |\n+----------------------+\n|                    3 |\n+----------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u8f93\u5165\u503c\u4e2d\u5305\u542b DOUBLE \u7c7b\u578b\u503c\uff0c\u6240\u6709\u503c\u6309\u7167 DOUBLE \u7c7b\u578b\u8fdb\u884c\u6bd4\u8f83\uff0c\u5e76\u8fd4\u56de DOUBLE \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select least(4,4.5,5.5);\n+--------------------+\n| least(4, 4.5, 5.5) |\n+--------------------+\n|                4.0 |\n+--------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u8f93\u5165\u503c\u5305\u542b\u6570\u503c\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u4e14\u5b57\u7b26\u4e32\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u6309\u7167\u6570\u503c\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select least(7,'5');\n+---------------+\n| least(7, '5') |\n+---------------+\n| 5             |\n+---------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u8f93\u5165\u503c\u5305\u542b\u6570\u503c\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e14\u5b57\u7b26\u4e32\u4e0d\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u6309\u7167\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\u3002\u5b57\u7b26\u4e32 ",(0,t.jsx)(n.code,{children:"'1'"})," \u5c0f\u4e8e",(0,t.jsx)(n.code,{children:"'at'"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select least(1,'at');\n+----------------+\n| least(1, 'at') |\n+----------------+\n| 1              |\n+----------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u516d\uff1a\u8f93\u5165\u503c\u5168\u90e8\u4e3a\u5b57\u7b26\u578b\uff0c\u6700\u5c0f\u503c\u4e3a\u5b57\u6bcd\u8868\u7b2c\u4e00\u4f4d ",(0,t.jsx)(n.code,{children:"A"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select least('A','B','Z');\n+----------------------+\n| least('A', 'B', 'Z') |\n+----------------------+\n| A                    |\n+----------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const l=t.createContext({});function c(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(l.Provider,{value:a},n)}}}]);