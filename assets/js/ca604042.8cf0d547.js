"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3668],{24386:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var t=s(85893),d=s(11151);const c={},i="add_months",o={id:"sql-reference/sql-functions/date-time-functions/add_months",title:"add_months",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/add_months.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/add_months",permalink:"/doc/zh/3.0/sql-reference/sql-functions/date-time-functions/add_months",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/add_months.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"to_base64",permalink:"/doc/zh/3.0/sql-reference/sql-functions/crytographic-functions/to_base64"},next:{title:"adddate,days_add",permalink:"/doc/zh/3.0/sql-reference/sql-functions/date-time-functions/adddate"}},l={},r=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,d.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"add_months",children:"add_months"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u7ed9\u5b9a\u7684\u65e5\u671f\uff08DATE\u3001DATETIME\uff09\u4e0a\u589e\u52a0\u6216\u51cf\u5c11\u4e00\u4e2a\u6574\u6570\u6708 ",(0,t.jsx)(e.code,{children:"months"}),"\u3002",(0,t.jsx)(e.code,{children:"months"})," \u53ef\u4ee5\u662f\u6b63\u6570\u6216\u8d1f\u6570\uff0c\u6b63\u6570\u8868\u793a\u589e\u52a0\u6708\u4efd\uff1b\u8d1f\u6570\u8868\u793a\u51cf\u5c11\u6708\u4efd\u3002\u8be5\u51fd\u6570\u4e0e ",(0,t.jsx)(e.a,{href:"./months_add",children:"months_add"})," \u529f\u80fd\u76f8\u540c\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u65e5\u671f\u90e8\u5206\u4e0e\u65e5\u671f\u4e2d\u6307\u5b9a\u7684\u90e8\u5206\u76f8\u540c\u3002\u5982\u679c\u5bf9\u6708\u7684\u6700\u540e\u4e00\u5929\u52a0\u51cf\u6708\u4efd\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5982\u679c\u8fd4\u56de\u6708\u4efd\u7684\u65e5\u671f\u6bd4\u8f93\u5165\u6708\u4efd\u7684\u65e5\u671f\u591a\uff0c\u5219\u65e5\u671f\u90e8\u5206\u76f8\u540c\uff0c\u6bd4\u5982 ",(0,t.jsx)(e.code,{children:"select add_months('2022-02-28', 1)"})," \u8fd4\u56de ",(0,t.jsx)(e.code,{children:"2022-03-28 00:00:00"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5982\u679c\u8fd4\u56de\u6708\u4efd\u7684\u65e5\u671f\u6bd4\u8f93\u5165\u6708\u4efd\u7684\u65e5\u671f\u5c11\uff0c\u5c06\u8fd4\u56de\u5bf9\u5e94\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\uff0c\u6bd4\u5982 ",(0,t.jsx)(e.code,{children:"select add_months('2022-01-31', 1);"})," \u8fd4\u56de ",(0,t.jsx)(e.code,{children:"2022-02-28 00:00:00"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e0e Oralce \u7684\u533a\u522b\uff1a\u5728 Oracle \u4e2d\uff0c\u5982\u679c\u5bf9\u6708\u7684\u6700\u540e\u4e00\u5929\u52a0\u51cf\u6708\u4efd\uff0c\u8fd4\u56de\u7684\u65e5\u671f\u90fd\u662f\u5bf9\u5e94\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u7ed9\u5b9a\u7684\u65e5\u671f\u65e0\u6548\u6216\u8005\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"ADD_MONTHS(date, months);\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"date"}),": \u7ed9\u5b9a\u7684\u65e5\u671f\uff0c\u53ef\u4ee5\u662f DATE \u6216 DATETIME \u7c7b\u578b\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"months"}),": \u8981\u589e\u52a0\u7684\u6574\u6570\u6708\u3002INT \u7c7b\u578b\uff0c\u53ef\u4ee5\u662f\u6b63\u6570\u6216\u8d1f\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"> select add_months('2022-01-01', 2);\n+-----------------------------+\n| add_months('2022-01-01', 2) |\n+-----------------------------+\n| 2022-03-01 00:00:00         |\n+-----------------------------+\n\n> select add_months('2022-01-01', -5);\n+------------------------------+\n| add_months('2022-01-01', -5) |\n+------------------------------+\n| 2021-08-01 00:00:00          |\n+------------------------------+\n\n> select add_months('2022-01-31', 1);\n+-----------------------------+\n| add_months('2022-01-31', 1) |\n+-----------------------------+\n| 2022-02-28 00:00:00         |\n+-----------------------------+\n\n> select add_months('2022-01-31 17:01:02', -2);\n+---------------------------------------+\n| add_months('2022-01-31 17:01:02', -2) |\n+---------------------------------------+\n| 2021-11-30 17:01:02                   |\n+---------------------------------------+\n\n> select add_months('2022-02-28', 1);\n+-----------------------------+\n| add_months('2022-02-28', 1) |\n+-----------------------------+\n| 2022-03-28 00:00:00         |\n+-----------------------------+\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>c});var t=s(67294);const d=t.createContext({});function c(n){const e=t.useContext(d);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||i:c(n),t.createElement(d.Provider,{value:o},e)}}}]);