"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73292],{968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var d=t(85893),c=t(11151);const s={},r="date_trunc",i={id:"sql-reference/sql-functions/date-time-functions/date_trunc",title:"date_trunc",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/date_trunc.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_trunc",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/date_trunc",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/date_trunc.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"date_sub",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/date_sub"},next:{title:"datediff",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/datediff"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"date_trunc",children:"date_trunc"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u7cbe\u5ea6\u7ea7\u522b\uff0c\u5c06\u4e00\u4e2a\u65e5\u671f\u65f6\u95f4\u622a\u65ad\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["StarRocks \u540c\u65f6\u63d0\u4f9b ",(0,d.jsx)(n.code,{children:"year()"}),"\u3001",(0,d.jsx)(n.code,{children:"quarter()"}),"\u3001",(0,d.jsx)(n.code,{children:"month()"}),"\u3001",(0,d.jsx)(n.code,{children:"week()"}),"\u3001",(0,d.jsx)(n.code,{children:"day()"}),"\u3001",(0,d.jsx)(n.code,{children:"hour()"})," \u7b49\u51fd\u6570\u8fdb\u884c\u6307\u5b9a\u90e8\u5206\u7684\u63d0\u53d6\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Haskell",children:"DATETIME date_trunc(VARCHAR fmt, DATETIME|DATE datetime)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"datetime"}),": \u9700\u8981\u622a\u65ad\u7684\u65f6\u95f4\uff0c\u7c7b\u578b\u4e3a DATETIME \u6216 DATE\u3002\u65e5\u671f\u548c\u65f6\u95f4\u5fc5\u987b\u771f\u5b9e\u5b58\u5728\uff0c\u5426\u5219\u8fd4\u56de NULL\u3002\u6bd4\u5982 '2021-02-29 11:12:13' \u4e3a\u4e0d\u5b58\u5728\u7684\u65e5\u671f\uff0c\u8ba1\u7b97\u65f6\u4f1a\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"fmt"}),": \u7cbe\u5ea6\u7ea7\u522b\uff0c\u5373\u9700\u8981\u5c06 ",(0,d.jsx)(n.code,{children:"datetime"})," \u622a\u65ad\u5230\u54ea\u4e2a\u65f6\u95f4\u5355\u4f4d\u3002\u7c7b\u578b\u4e3a VARCHAR \u5e38\u91cf\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"fmt"})," \u7684\u53d6\u503c\u5fc5\u987b\u4e3a\u4e0b\u8868\u4e2d\u5217\u4e3e\u7684\u65f6\u95f4\u5355\u4f4d\u3002\u5982\u679c\u53d6\u503c\u4e0d\u6b63\u786e\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"fmt \u53d6\u503c"}),(0,d.jsx)(n.th,{children:"\u542b\u4e49"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"second"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u79d2\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minute"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5206\u949f\uff0c\u79d2\u90e8\u5206\u5f52\u96f6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hour"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5c0f\u65f6\uff0c\u5206\u949f\u548c\u79d2\u90e8\u5206\u5f52\u96f6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"day"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5929\uff0c\u65f6\u95f4\u90e8\u5206\u5f52\u96f6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"week"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5f53\u524d\u661f\u671f\u7684\u7b2c\u4e00\u5929\uff0c\u65f6\u95f4\u90e8\u5206\u5f52\u96f6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"month"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5f53\u524d\u6708\u4efd\u7684\u7b2c\u4e00\u5929\uff0c\u65f6\u95f4\u90e8\u5206\u5f52\u96f6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"quarter"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5f53\u524d\u5b63\u5ea6\u7684\u7b2c\u4e00\u5929\uff0c\u65f6\u95f4\u90e8\u5206\u5f52\u96f6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"year"}),(0,d.jsx)(n.td,{children:"\u622a\u65ad\u5230\u5f53\u524d\u5e74\u4efd\u7684\u7b2c\u4e00\u5929\uff0c\u65f6\u95f4\u90e8\u5206\u5f52\u96f6\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de DATETIME \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c ",(0,d.jsx)(n.code,{children:"datetime"})," \u4e3a DATE \u7c7b\u578b\uff0c",(0,d.jsx)(n.code,{children:"fmt"})," \u8bbe\u5b9a\u4e3a ",(0,d.jsx)(n.code,{children:"hour"}),"\uff0c",(0,d.jsx)(n.code,{children:"minute"}),"\uff0c \u6216 ",(0,d.jsx)(n.code,{children:"second"})," \u65f6\uff0c\u8fd4\u56de\u7684\u65f6\u95f4\u90e8\u5206\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"00:00:00"}),"\uff0c\u53c2\u89c1\u793a\u4f8b\u4e94\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5c06\u8f93\u5165\u7684\u65f6\u95f4\u622a\u65ad\u81f3\u5206\u949f\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"select date_trunc(\"minute\", \"2020-11-04 11:12:13\");\n+---------------------------------------------+\n| date_trunc('minute', '2020-11-04 11:12:13') |\n+---------------------------------------------+\n| 2020-11-04 11:12:00                         |\n+---------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06\u8f93\u5165\u7684\u65f6\u95f4\u622a\u65ad\u81f3\u5c0f\u65f6\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"select date_trunc(\"hour\", \"2020-11-04 11:12:13\");\n+-------------------------------------------+\n| date_trunc('hour', '2020-11-04 11:12:13') |\n+-------------------------------------------+\n| 2020-11-04 11:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u5c06\u8f93\u5165\u7684\u65f6\u95f4\u622a\u65ad\u81f3\u4e00\u5468\u7b2c\u4e00\u5929\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"select date_trunc(\"week\", \"2020-11-04 11:12:13\");\n+-------------------------------------------+\n| date_trunc('week', '2020-11-04 11:12:13') |\n+-------------------------------------------+\n| 2020-11-02 00:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u5c06\u8f93\u5165\u7684\u65f6\u95f4\u622a\u65ad\u81f3\u4e00\u5e74\u7b2c\u4e00\u5929\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-undefined",children:"select date_trunc(\"year\", \"2020-11-04 11:12:13\");\n+-------------------------------------------+\n| date_trunc('year', '2020-11-04 11:12:13') |\n+-------------------------------------------+\n| 2020-01-01 00:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1aDATE \u7c7b\u578b\u4e0b\uff0c",(0,d.jsx)(n.code,{children:"fmt"})," \u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"hour"}),"\u65f6\uff0c\u65f6\u95f4\u90e8\u5206\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"00:00:00"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-undefined",children:"select date_trunc(\"hour\", \"2020-11-04\");\n+----------------------------------+\n| date_trunc('hour', '2020-11-04') |\n+----------------------------------+\n| 2020-11-04 00:00:00              |\n+----------------------------------+\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>s});var d=t(67294);const c=d.createContext({});function s(e){const n=d.useContext(c);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||r:s(e),d.createElement(c.Provider,{value:i},n)}}}]);