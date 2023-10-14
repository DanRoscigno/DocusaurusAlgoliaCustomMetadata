"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41281],{4432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var s=i(85893),t=i(11151);const c={},l="time_slice",d={id:"sql-reference/sql-functions/date-time-functions/time_slice",title:"time_slice",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/time_slice.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/time_slice",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/time_slice",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/time_slice.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"str_to_date",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/str_to_date"},next:{title:"time_to_sec",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/time_to_sec"}},r={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"time_slice",children:"time_slice"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\uff0c\u5c06\u7ed9\u5b9a\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u5176\u6240\u5728\u7684\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u6216\u7ed3\u675f\u65f6\u523b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u8f6c\u5316\u4e3a\u7ed3\u675f\u65f6\u523b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DATETIME time_slice(DATETIME dt, INTERVAL N type[, boundary])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dt"}),"\uff1a\u9700\u8981\u8f6c\u5316\u7684\u65f6\u95f4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INTERVAL N type"}),"\uff1a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"interval 5 second"})," \u8868\u793a\u65f6\u95f4\u7c92\u5ea6\u4e3a 5 \u79d2\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"N"})," \u662f INT \u7c7b\u578b\u7684\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u957f\u5ea6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," \u662f\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u5355\u4f4d\uff0c\u53d6\u503c\u53ef\u4ee5\u662f YEAR\uff0cQUARTER\uff0cMONTH\uff0cWEEK\uff0cDAY\uff0cHOUR\uff0cMINUTE\uff0cSECOND\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"boundary"}),"\uff1a\u53ef\u9009\uff0c\u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u65f6\u95f4\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b (",(0,s.jsx)(n.code,{children:"FLOOR"}),") \u8fd8\u662f\u7ed3\u675f\u65f6\u523b (",(0,s.jsx)(n.code,{children:"CEIL"}),")\u3002\u53d6\u503c\u8303\u56f4\uff1aFLOOR\uff0cCEIL\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"FLOOR"}),"\u3002\u8be5\u53c2\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.p,{children:["\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u4ece\u516c\u5143 ",(0,s.jsx)(n.code,{children:"0001-01-01 00:00:00"})," \u7b97\u8d77\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,s.jsx)(n.code,{children:"test_all_type_select"}),"\uff0c\u6570\u636e\u4ee5 ",(0,s.jsx)(n.code,{children:"id_int"})," \u6392\u5e8f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select * from test_all_type_select order by id_int;\n\n+------------+---------------------+--------+\n| id_date    | id_datetime         | id_int |\n+------------+---------------------+--------+\n| 2052-12-26 | 1691-12-23 04:01:09 |      0 |\n| 2168-08-05 | 2169-12-18 15:44:31 |      1 |\n| 1737-02-06 | 1840-11-23 13:09:50 |      2 |\n| 2245-10-01 | 1751-03-21 00:19:04 |      3 |\n| 1889-10-27 | 1861-09-12 13:28:18 |      4 |\n+------------+---------------------+--------+\n5 rows in set (0.06 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5c06\u7ed9\u5b9a\u7684 DATETIME \u65f6\u95f4 ",(0,s.jsx)(n.code,{children:"id_datetime"})," \u8f6c\u5316\u4e3a\u4ee5 5 \u79d2\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b \uff08\u4e0d\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"boundary"})," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"FLOOR"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select time_slice(id_datetime, interval 5 second)\nfrom test_all_type_select\norder by id_int;\n\n+---------------------------------------------------+\n| time_slice(id_datetime, INTERVAL 5 second, floor) |\n+---------------------------------------------------+\n| 1691-12-23 04:01:05                               |\n| 2169-12-18 15:44:30                               |\n| 1840-11-23 13:09:50                               |\n| 1751-03-21 00:19:00                               |\n| 1861-09-12 13:28:15                               |\n+---------------------------------------------------+\n5 rows in set (0.16 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5c06\u7ed9\u5b9a\u7684 DATETIME \u65f6\u95f4 ",(0,s.jsx)(n.code,{children:"id_datetime"})," \u8f6c\u5316\u4e3a\u4ee5 5 \u5929\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b\uff08\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"boundary"})," \u4e3a ",(0,s.jsx)(n.code,{children:"FLOOR"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select time_slice(id_datetime, interval 5 day, FLOOR)\nfrom test_all_type_select\norder by id_int;\n\n+------------------------------------------------+\n| time_slice(id_datetime, INTERVAL 5 day, floor) |\n+------------------------------------------------+\n| 1691-12-22 00:00:00                            |\n| 2169-12-16 00:00:00                            |\n| 1840-11-21 00:00:00                            |\n| 1751-03-18 00:00:00                            |\n| 1861-09-12 00:00:00                            |\n+------------------------------------------------+\n5 rows in set (0.15 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06\u7ed9\u5b9a\u7684 DATETIME \u65f6\u95f4 ",(0,s.jsx)(n.code,{children:"id_datetime"})," \u8f6c\u5316\u4e3a\u4ee5 5 \u5929\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u7ed3\u675f\u65f6\u523b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select time_slice(id_datetime, interval 5 day, CEIL)\nfrom test_all_type_select\norder by id_int;\n\n+-----------------------------------------------+\n| time_slice(id_datetime, INTERVAL 5 day, ceil) |\n+-----------------------------------------------+\n| 1691-12-27 00:00:00                           |\n| 2169-12-21 00:00:00                           |\n| 1840-11-26 00:00:00                           |\n| 1751-03-23 00:00:00                           |\n| 1861-09-17 00:00:00                           |\n+-----------------------------------------------+\n5 rows in set (0.12 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>d,ah:()=>c});var s=i(67294);const t=s.createContext({});function c(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:i}){let d;return d=i?"function"==typeof e?e({}):e||l:c(e),s.createElement(t.Provider,{value:d},n)}}}]);