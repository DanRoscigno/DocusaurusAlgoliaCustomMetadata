"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55669],{2853:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var d=s(85893),t=s(11151);const i={},c="days_diff",r={id:"sql-reference/sql-functions/date-time-functions/days_diff",title:"days_diff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/date-time-functions/days_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/days_diff",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/days_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/days_diff.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"dayofyear",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/dayofyear"},next:{title:"days_sub",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/days_sub"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,t.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"days_diff",children:"days_diff"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u5929\uff08",(0,d.jsx)(n.code,{children:"expr1"})," - ",(0,d.jsx)(n.code,{children:"expr2"}),"\uff09\uff0c\u7ed3\u679c\u7cbe\u786e\u5230\u5929\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6b64\u51fd\u6570\u4e0e ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/datediff",children:"datediff"})," \u7684\u533a\u522b\u662f\uff1a"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u51fd\u6570\u540d"}),(0,d.jsx)(n.th,{children:"\u884c\u4e3a"}),(0,d.jsx)(n.th,{children:"\u4f8b\u5b50"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"days_diff"}),(0,d.jsx)(n.td,{children:"\u5bf9\u65e5\u671f\u7684\u5224\u65ad\u7cbe\u786e\u5230\u79d2\u7ea7\uff0c\u5e76\u5411\u4e0b\u53d6\u6574\u6570\u3002"}),(0,d.jsx)(n.td,{children:"'2020-12-25 23:00:00' \u4e0e '2020-12-24 23:00:01' \u7684 days_diff \u4e3a 0\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"datediff"}),(0,d.jsx)(n.td,{children:"\u5bf9\u65e5\u671f\u7684\u5224\u65ad\u7cbe\u786e\u5230\u5929\u7ea7\u3002"}),(0,d.jsx)(n.td,{children:"'2020-12-25 23:00:00' \u4e0e '2020-12-24 23:00:01' \u7684 datediff \u4e3a 1\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Haskell",children:"BIGINT days_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"expr1"}),": \u7ed3\u675f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"expr2"}),": \u5f00\u59cb\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002\u5982\u679c\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u76f8\u5dee\u4e0d\u6ee1\u4e00\u5929\uff0c\u5219\u8fd4\u56de 0\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select days_diff('2010-11-30 23:00:00', '2010-11-29 23:00:00')\n+---------------------------------------------------------+\n| days_diff('2010-11-30 23:00:00', '2010-11-29 23:00:00') |\n+---------------------------------------------------------+\n| 1                                                       |\n+---------------------------------------------------------+\n\nselect days_diff('2010-11-30 23:00:00', '2010-11-29 23:10:00')\n+---------------------------------------------------------+\n| days_diff('2010-11-30 23:00:00', '2010-11-29 23:10:00') |\n+---------------------------------------------------------+\n| 0                                                       |\n+---------------------------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var d=s(67294);const t=d.createContext({});function i(e){const n=d.useContext(t);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:i(e),d.createElement(t.Provider,{value:r},n)}}}]);