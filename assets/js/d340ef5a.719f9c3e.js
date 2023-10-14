"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22423],{64625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=t(85893),o=t(11151);const c={},a="dayofweek",i={id:"sql-reference/sql-functions/date-time-functions/dayofweek",title:"dayofweek",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/dayofweek.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/dayofweek",permalink:"/doc/zh/3.0/sql-reference/sql-functions/date-time-functions/dayofweek",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/dayofweek.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"dayofmonth",permalink:"/doc/zh/3.0/sql-reference/sql-functions/date-time-functions/dayofmonth"},next:{title:"dayofyear",permalink:"/doc/zh/3.0/sql-reference/sql-functions/date-time-functions/dayofyear"}},r={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dayofweek",children:"dayofweek"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u7684\u5de5\u4f5c\u65e5\u7d22\u5f15\u503c\uff0c\u5373\u661f\u671f\u65e5\u4e3a 1\uff0c\u661f\u671f\u4e00\u4e3a 2\uff0c\u661f\u671f\u516d\u4e3a 7\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u4e3a DATE \u6216 DATETIME \u7c7b\u578b\uff0c\u6216\u8005\u4e3a\u53ef\u4ee5 CAST \u6210 DATE \u6216 DATETIME \u7c7b\u578b\u7684\u6570\u5b57\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT dayofweek(DATETIME date)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select dayofweek('2019-06-25');\n+----------------------------------+\n| dayofweek('2019-06-25 00:00:00') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n\nselect dayofweek(cast(20190625 as date));\n+-----------------------------------+\n| dayofweek(CAST(20190625 AS DATE)) |\n+-----------------------------------+\n|                                 3 |\n+-----------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>c});var s=t(67294);const o=s.createContext({});function c(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:c(e),s.createElement(o.Provider,{value:i},n)}}}]);