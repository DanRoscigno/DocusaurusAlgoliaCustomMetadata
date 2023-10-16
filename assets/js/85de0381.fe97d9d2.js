"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4802],{80910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),d=t(11151);const r={displayed_sidebar:"English"},i="next_day",a={id:"sql-reference/sql-functions/date-time-functions/next_day",title:"next_day",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/next_day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/next_day",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/next_day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/next_day.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"months_sub",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/months_sub"},next:{title:"now, current_timestamp, localtime, localtimestamp",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/now"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"next_day",children:"next_day"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the date of the first specified day of week (DOW) that occurs after the input date (DATE or DATETIME). For example, ",(0,s.jsx)(n.code,{children:"next_day('2023-04-06', 'Monday')"})," returns the date of the next Monday that occurred after '2023-04-06'."]}),"\n",(0,s.jsxs)(n.p,{children:["This function is supported from v3.1. It is the opposite of ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/date-time-functions/previous_day",children:"previous_day"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DATE next_day(DATETIME|DATE date_expr, VARCHAR dow)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"date_expr"}),": the input date. It must be a valid DATE or DATETIME expression."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dow"}),": the day of week. Valid values include a number of abbreviations which are case-sensitive:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"DOW_FULL"}),(0,s.jsx)(n.th,{children:"DOW_2"}),(0,s.jsx)(n.th,{align:"center",children:"DOW_3"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sunday"}),(0,s.jsx)(n.td,{children:"Su"}),(0,s.jsx)(n.td,{align:"center",children:"Sun"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Monday"}),(0,s.jsx)(n.td,{children:"Mo"}),(0,s.jsx)(n.td,{align:"center",children:"Mon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Tuesday"}),(0,s.jsx)(n.td,{children:"Tu"}),(0,s.jsx)(n.td,{align:"center",children:"Tue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Wednesday"}),(0,s.jsx)(n.td,{children:"We"}),(0,s.jsx)(n.td,{align:"center",children:"Wed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thursday"}),(0,s.jsx)(n.td,{children:"Th"}),(0,s.jsx)(n.td,{align:"center",children:"Thu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Friday"}),(0,s.jsx)(n.td,{children:"Fr"}),(0,s.jsx)(n.td,{align:"center",children:"Fri"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Saturday"}),(0,s.jsx)(n.td,{children:"Sa"}),(0,s.jsx)(n.td,{align:"center",children:"Sat"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a DATE value."}),"\n",(0,s.jsxs)(n.p,{children:["Any invalid ",(0,s.jsx)(n.code,{children:"dow"})," will cause an error. ",(0,s.jsx)(n.code,{children:"dow"})," is case-sensitive."]}),"\n",(0,s.jsx)(n.p,{children:"Returns NULL if an invalid date or a NULL argument is passed in."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"-- Return the date of the next Monday that occurred after 2023-04-06. 2023-04-06 is Thursday and the date of the next Monday is 2023-04-10.\n\nMySQL > select next_day('2023-04-06', 'Monday');\n+----------------------------------+\n| next_day('2023-04-06', 'Monday') |\n+----------------------------------+\n| 2023-04-10                       |\n+----------------------------------+\n\nMySQL > select next_day('2023-04-06', 'Tue');\n+-------------------------------+\n| next_day('2023-04-06', 'Tue') |\n+-------------------------------+\n| 2023-04-11                    |\n+-------------------------------+\n\nMySQL > select next_day('2023-04-06 20:13:14', 'Fr');\n+---------------------------------------+\n| next_day('2023-04-06 20:13:14', 'Fr') |\n+---------------------------------------+\n| 2023-04-07                            |\n+---------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"NEXT_DAY, NEXT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const d=s.createContext({});function r(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(d.Provider,{value:a},n)}}}]);