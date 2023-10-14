"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4468],{22775:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=s(85893),r=s(11151);const c={},i="year",a={id:"sql-reference/sql-functions/date-time-functions/year",title:"year",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/year.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/year",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/year",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/year.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"weeks_sub",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/weeks_sub"},next:{title:"years_add",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/years_add"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"year",children:"year"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u4e2d\u7684\u5e74\u4efd\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"INT YEAR(DATE|DATETIME date)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"date"}),"\uff1a\u5fc5\u586b\u3002\u652f\u6301 DATE \u548c DATETIME \u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\uff0c\u8303\u56f4 1000~9999\u3002\n\u6b64\u51fd\u6570\u4f1a\u5bf9\u6574\u6570\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u8f93\u5165\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\uff0c\u5982\u679c\u672a\u80fd\u4ece\u8f93\u5165\u4e2d\u89e3\u6790\u51fa\u5408\u6cd5\u5e74\u4efd\uff0c\u5982 ",(0,t.jsx)(n.code,{children:"year('string')"}),"\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u8f93\u5165\u6570\u636e\u7c7b\u578b\u975e\u6cd5\uff0c\u5982 ",(0,t.jsx)(n.code,{children:"year(3.1415)"}),"\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u8fd4\u56de '1987-01-01' \u4e2d\u7684\u5e74\u4efd ",(0,t.jsx)(n.code,{children:"1987"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"\nselect year('1987-01-01');\n+--------------------+\n| year('1987-01-01') |\n+--------------------+\n|               1987 |\n+--------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8fd4\u56de\u5f53\u524d\u5e74\u4efd\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select year(now());\n+-------------+\n| year(now()) |\n+-------------+\n|        2022 |\n+-------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:a},n)}}}]);