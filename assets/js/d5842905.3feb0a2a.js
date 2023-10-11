"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52910],{793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={},a="convert_tz",o={id:"sql-reference/sql-functions/date-time-functions/convert_tz",title:"convert_tz",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/convert_tz.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/convert_tz",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/convert_tz",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/convert_tz.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"adddate,days_add",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/adddate"},next:{title:"curdate,current_date",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/curdate"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"convert_tz",children:"convert_tz"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Converts a DATE or DATETIME value from one time zone to another."}),"\n",(0,s.jsxs)(n.p,{children:["This function may return different results for different time zones. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/administration/timezone",children:"Configure a time zone"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DATETIME CONVERT_TZ(DATETIME|DATE dt, VARCHAR from_tz, VARCHAR to_tz)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dt"}),": the DATE or DATETIME value to convert."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"from_tz"}),": the source time zone. VARCHAR is supported. The time zone can be represented in two formats: one is Time Zone Database (for example, Asia/Shanghai) and the other is UTC offset (for example, +08:00)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"to_tz"}),": the destination time zone. VARCHAR is supported. Its format is the same as ",(0,s.jsx)(n.code,{children:"from_tz"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the DATETIME data type. If the input is a DATE value, it will be converted into a DATETIME value. This function returns NULL if any of the input parameters is invalid or NULL."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.p,{children:["For Time Zone Database, see ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"List of tz database time zones"})," (in Wikipedia)."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Convert a datetime in Shanghai to Los_Angeles."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"select convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n+---------------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles') |\n+---------------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                       |\n+---------------------------------------------------------------------------+\n1 row in set (0.00 sec)                                                       |\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Convert a date in Shanghai to Los_Angeles."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"select convert_tz('2019-08-01', 'Asia/Shanghai', 'America/Los_Angeles');\n+------------------------------------------------------------------+\n| convert_tz('2019-08-01', 'Asia/Shanghai', 'America/Los_Angeles') |\n+------------------------------------------------------------------+\n| 2019-07-31 09:00:00                                              |\n+------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 3: Convert a datetime in UTC+08:00 to Los_Angeles."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"select convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"CONVERT_TZ, timezone, time zone"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:o},n)}}}]);