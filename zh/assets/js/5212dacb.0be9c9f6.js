"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1075],{16803:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var c=n(85893),i=n(11151);const t={displayed_sidebar:"Chinese"},r="microseconds_sub",o={id:"sql-reference/sql-functions/date-time-functions/microseconds_sub",title:"microseconds_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_sub",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/microseconds_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"microseconds_add",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/microseconds_add"},next:{title:"minute",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/minute"}},d={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"microseconds_sub",children:"microseconds_sub"}),"\n",(0,c.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(s.p,{children:["\u4ece ",(0,c.jsx)(s.code,{children:"expr1"})," \u4e2d\u51cf\u53bb\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Haskell",children:"DATETIME microseconds_sub(DATETIME expr1,INT expr2);\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"expr2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a DATE \u7c7b\u578b\uff0c\u5219\u65f6-\u5206-\u79d2\u90e8\u5206\u9ed8\u8ba4\u6309\u7167 00:00:00 \u5904\u7406\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_sub('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_sub('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:49.999998                 |\n+--------------------------------------------+\n\nselect microseconds_sub('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_sub('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-29 23:59:59.999998        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>t});var c=n(67294);const i=c.createContext({});function t(e){const s=c.useContext(i);return c.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:t(e),c.createElement(i.Provider,{value:o},s)}}}]);