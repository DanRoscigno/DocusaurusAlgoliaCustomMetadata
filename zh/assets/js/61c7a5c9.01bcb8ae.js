"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9345],{71219:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),d=s(11151);const i={displayed_sidebar:"Chinese"},l="last_day",a={id:"sql-reference/sql-functions/date-time-functions/last_day",title:"last_day",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/last_day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/last_day",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/last_day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/last_day.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"jodatime_format",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/jodatime_format"},next:{title:"makedate",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/makedate"}},r={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"last_day",children:"last_day"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u6839\u636e\u6307\u5b9a\u7684\u65f6\u95f4\u5355\u4f4d\uff0c\u8fd4\u56de\u8f93\u5165\u7684\u65e5\u671f\u5bf9\u5e94\u7684\u6700\u540e\u4e00\u5929\u3002\u6bd4\u5982 ",(0,t.jsx)(n.code,{children:"last_day('2023-05-10', 'month')"})," \u8fd4\u56de '2023-05-10' \u6240\u5728\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u65f6\u95f4\u5355\u4f4d\uff0c\u5219\u8fd4\u56de\u8be5\u65e5\u671f\u5bf9\u5e94\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"DATE last_day(DATETIME|DATE date_expr[, VARCHAR unit])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"date_expr"}),"\uff1aDATE \u6216 DATETIME \u8868\u8fbe\u5f0f\uff0c\u5fc5\u586b\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"unit"}),": \u65f6\u95f4\u5355\u4f4d\uff0c\u53ef\u9009\u3002\u6709\u6548\u503c\u5305\u62ec ",(0,t.jsx)(n.code,{children:"month"}),", ",(0,t.jsx)(n.code,{children:"quarter"}),", \u548c ",(0,t.jsx)(n.code,{children:"year"}),"\u3002\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"month"}),"\u3002\u5982\u679c\u8f93\u5165\u7684 ",(0,t.jsx)(n.code,{children:"unit"})," \u4e0d\u5408\u6cd5\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u65e5\u671f\u503c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"MySQL > select last_day('2023-05-10', 'month');\n+----------------------------------+\n| last_day('2023-05-10', 'month')  |\n+----------------------------------+\n| 2023-05-31                       |\n+----------------------------------+\n\nMySQL > select last_day('2023-05-10');\n+------------------------+\n| last_day('2023-05-10') |\n+------------------------+\n| 2023-05-31             |\n+------------------------+\n\nMySQL > select last_day('2023-05-10', 'quarter');\n+-----------------------------------+\n| last_day('2023-05-10', 'quarter') |\n+-----------------------------------+\n| 2023-06-30                        |\n+-----------------------------------+\n\nMySQL > select last_day('2023-05-10', 'year');\n+---------------------------------------+\n| last_day('2023-05-10', 'year')        |\n+---------------------------------------+\n| 2023-12-31                            |\n+---------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"LAST_DAY, LAST"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const d=t.createContext({});function i(e){const n=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:i(e),t.createElement(d.Provider,{value:a},n)}}}]);