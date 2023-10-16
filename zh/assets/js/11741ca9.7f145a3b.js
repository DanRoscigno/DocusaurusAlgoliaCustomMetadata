"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36062],{80363:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var d=s(85893),t=s(11151);const i={displayed_sidebar:"Chinese"},c="adddate,days_add",a={id:"sql-reference/sql-functions/date-time-functions/adddate",title:"adddate,days_add",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/adddate.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/adddate",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/adddate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/adddate.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"add_months",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/add_months"},next:{title:"convert_tz",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/convert_tz"}},r={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"adddatedays_add",children:"adddate,days_add"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u5411\u65e5\u671f\u6dfb\u52a0\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Haskell",children:"DATETIME ADDDATE(DATETIME|DATE date,INTERVAL expr type)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"date"}),"\uff1a\u5fc5\u987b\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002\u53ef\u4ee5\u662f DATETIME \u6216 DATE \u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"expr"}),"\uff1a\u9700\u8981\u6dfb\u52a0\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"type"}),"\uff1a\u65f6\u95f4\u95f4\u9694\u7684\u5355\u4f4d\uff0c\u53d6\u503c\u53ef\u4ee5\u662f YEAR\uff0cMONTH\uff0cDAY\uff0cHOUR\uff0cMINUTE\uff0c\u6216 SECOND\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de DATETIME \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a\u7a7a\u6216\u8005\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select adddate('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| adddate('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n\nselect adddate('2010-11-30', INTERVAL 2 DAY);\n+----------------------------------------+\n| adddate('2010-11-30', INTERVAL 2 DAY) |\n+----------------------------------------+\n| 2010-12-02 00:00:00                    |\n+----------------------------------------+\n1 row in set (0.01 sec)\n\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var d=s(67294);const t=d.createContext({});function i(e){const n=d.useContext(t);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),d.createElement(t.Provider,{value:a},n)}}}]);