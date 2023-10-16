"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31415],{86617:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},t="previous_day",c={id:"sql-reference/sql-functions/date-time-functions/previous_day",title:"previous_day",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/previous_day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/previous_day",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/previous_day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/previous_day.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"now, current_timestamp, localtime, localtimestamp",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/now"},next:{title:"quarter",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/quarter"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"previous_day",children:"previous_day"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsxs)(n.p,{children:["\u6839\u636e\u8f93\u5165\u7684\u65e5\u671f\u503c\uff0c\u8fd4\u56de\u5b83\u4e4b\u524d\u7684\u90a3\u4e2a\u661f\u671f\u51e0\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u3002\u6bd4\u5982 ",(0,d.jsx)(n.code,{children:"previous_day('2023-04-06', 'Monday')"})," \u8fd4\u56de '2023-04-06' \u4e4b\u524d\u7684\u90a3\u4e2a\u661f\u671f\u4e00\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u76f8\u53cd\u51fd\u6570\u4e3a ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/next_day",children:"next_day"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DATE previous_day(DATETIME|DATE date_expr, VARCHAR dow)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"date_expr"}),"\uff1a\u8f93\u5165\u7684\u65e5\u671f\u503c\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE \u6216 DATETIME\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dow"}),"\uff1a\u661f\u671f\u51e0\u3002\u6709\u6548\u503c\u4e3a\u661f\u671f\u548c\u4ee5\u4e0b\u7f29\u5199\u5f62\u5f0f\uff0c\u533a\u5206\u5927\u5c0f\u5199\u3002"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"DOW_FULL"}),(0,d.jsx)(n.th,{children:"DOW_2"}),(0,d.jsx)(n.th,{align:"center",children:"DOW_3"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sunday"}),(0,d.jsx)(n.td,{children:"Su"}),(0,d.jsx)(n.td,{align:"center",children:"Sun"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Monday"}),(0,d.jsx)(n.td,{children:"Mo"}),(0,d.jsx)(n.td,{align:"center",children:"Mon"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Tuesday"}),(0,d.jsx)(n.td,{children:"Tu"}),(0,d.jsx)(n.td,{align:"center",children:"Tue"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Wednesday"}),(0,d.jsx)(n.td,{children:"We"}),(0,d.jsx)(n.td,{align:"center",children:"Wed"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thursday"}),(0,d.jsx)(n.td,{children:"Th"}),(0,d.jsx)(n.td,{align:"center",children:"Thu"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Friday"}),(0,d.jsx)(n.td,{children:"Fr"}),(0,d.jsx)(n.td,{align:"center",children:"Fri"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Saturday"}),(0,d.jsx)(n.td,{children:"Sa"}),(0,d.jsx)(n.td,{align:"center",children:"Sat"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u65e5\u671f\u503c\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c ",(0,d.jsx)(n.code,{children:"dow"})," \u8f93\u5165\u503c\u975e\u6cd5\uff0c\u4f1a\u8fd4\u56de\u62a5\u9519\u3002",(0,d.jsx)(n.code,{children:"dow"})," \u533a\u5206\u5927\u5c0f\u5199\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u7684\u65e5\u671f\u503c\u975e\u6cd5\u6216\u8005\u8f93\u5165\u7684\u65e5\u671f\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"-- \u8fd4\u56de 2023-04-06 \u4e4b\u524d\u7684\u90a3\u4e2a\u661f\u671f\u4e00\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u30022023-04-06 \u4e3a\u5468\u56db\uff0c\u5b83\u4e4b\u524d\u7684\u661f\u671f\u4e00\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u4e3a 2023-04-03\u3002\n\nMySQL > select previous_day('2023-04-06', 'Monday');\n+--------------------------------------+\n| previous_day('2023-04-06', 'Monday') |\n+--------------------------------------+\n| 2023-04-03                           |\n+--------------------------------------+\n\nMySQL > select previous_day('2023-04-06', 'Tue');\n+-----------------------------------+\n| previous_day('2023-04-06', 'Tue') |\n+-----------------------------------+\n| 2023-04-04                        |\n+-----------------------------------+\n\nMySQL > select previous_day('2023-04-06 20:13:14', 'Fr');\n+-------------------------------------------+\n| previous_day('2023-04-06 20:13:14', 'Fr') |\n+-------------------------------------------+\n| 2023-03-31                                |\n+-------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,d.jsx)(n.p,{children:"PREVIOUS_DAY, PREVIOUS, previousday"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var d=s(67294);const r=d.createContext({});function i(e){const n=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||t:i(e),d.createElement(r.Provider,{value:c},n)}}}]);