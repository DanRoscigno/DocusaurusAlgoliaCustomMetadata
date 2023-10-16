"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63723],{85066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=t(85893),i=t(11151);const c={displayed_sidebar:"Chinese"},r="date",d={id:"sql-reference/sql-functions/date-time-functions/date",title:"date",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/date.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/date.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"curtime,current_time",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/curtime"},next:{title:"date_add",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date_add"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"date",children:"date"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u65e5\u671f\u6216\u65f6\u95f4\u65e5\u671f\u8868\u8fbe\u5f0f\u4e2d\u622a\u53d6\u65e5\u671f\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DATE date(DATETIME|DATE expr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": \u65e5\u671f\u6216\u65f6\u95f4\u65e5\u671f\u8868\u8fbe\u5f0f\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE \u6216 DATETIME\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a NULL \u6216\u6570\u636e\u7c7b\u578b\u4e0d\u5408\u6cd5\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4ece DATETIME \u503c\u4e2d\u622a\u53d6\u65e5\u671f\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT DATE(\"2017-12-31 11:20:59\");\n+-----------------------------+\n| date('2017-12-31 11:20:59') |\n+-----------------------------+\n| 2017-12-31                  |\n+-----------------------------+\n1 row in set (0.05 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4ece DATE \u503c\u4e2d\u622a\u53d6\u65e5\u671f\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT DATE('2017-12-31');\n+--------------------+\n| date('2017-12-31') |\n+--------------------+\n| 2017-12-31         |\n+--------------------+\n1 row in set (0.08 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u8be5\u51fd\u6570\u4e0e current_timestamp() \u51fd\u6570\u642d\u914d\u4f7f\u7528\uff0c\u622a\u53d6\u5f53\u524d\u65f6\u95f4\u6233\u4e2d\u7684\u65e5\u671f\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT DATE(current_timestamp());\n+---------------------------+\n| date(current_timestamp()) |\n+---------------------------+\n| 2022-11-08                |\n+---------------------------+\n1 row in set (0.05 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||r:c(e),s.createElement(i.Provider,{value:d},n)}}}]);