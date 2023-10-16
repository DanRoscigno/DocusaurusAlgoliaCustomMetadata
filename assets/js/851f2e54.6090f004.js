"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53968],{39195:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const i={displayed_sidebar:"English"},d="previous_day",a={id:"sql-reference/sql-functions/date-time-functions/previous_day",title:"previous_day",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/previous_day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/previous_day",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/previous_day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/previous_day.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"now, current_timestamp, localtime, localtimestamp",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/now"},next:{title:"quarter",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/quarter"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"previous_day",children:"previous_day"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the date of the first specified day of week (DOW) that occurs before the input date (DATE  or DATETIME). For example, ",(0,r.jsx)(n.code,{children:"previous_day('2023-04-06', 'Monday')"})," returns the date of the previous Monday that occurred before '2023-04-06'."]}),"\n",(0,r.jsxs)(n.p,{children:["This function is supported from v3.1. It is the opposite of ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/date-time-functions/next_day",children:"next_day"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"DATE previous_day(DATETIME|DATE date_expr, VARCHAR dow)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"date_expr"}),": the input date. It must be a valid DATE or DATETIME expression."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dow"}),": the day of week. Valid values include a number of abbreviations which are case-sensitive:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"DOW_FULL"}),(0,r.jsx)(n.th,{children:"DOW_2"}),(0,r.jsx)(n.th,{align:"center",children:"DOW_3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sunday"}),(0,r.jsx)(n.td,{children:"Su"}),(0,r.jsx)(n.td,{align:"center",children:"Sun"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Monday"}),(0,r.jsx)(n.td,{children:"Mo"}),(0,r.jsx)(n.td,{align:"center",children:"Mon"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tuesday"}),(0,r.jsx)(n.td,{children:"Tu"}),(0,r.jsx)(n.td,{align:"center",children:"Tue"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Wednesday"}),(0,r.jsx)(n.td,{children:"We"}),(0,r.jsx)(n.td,{align:"center",children:"Wed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thursday"}),(0,r.jsx)(n.td,{children:"Th"}),(0,r.jsx)(n.td,{align:"center",children:"Thu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Friday"}),(0,r.jsx)(n.td,{children:"Fr"}),(0,r.jsx)(n.td,{align:"center",children:"Fri"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Saturday"}),(0,r.jsx)(n.td,{children:"Sa"}),(0,r.jsx)(n.td,{align:"center",children:"Sat"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a DATE value."}),"\n",(0,r.jsxs)(n.p,{children:["Any invalid ",(0,r.jsx)(n.code,{children:"dow"})," will cause an error. ",(0,r.jsx)(n.code,{children:"dow"})," is case-sensitive."]}),"\n",(0,r.jsx)(n.p,{children:"NULL is returned if an invalid date or a NULL argument is passed in."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"-- Return the date of the previous Monday that occurred before 2023-04-06. 2023-04-06 is Thursday and the date of the previous Monday is 2023-04-03.\n\nMySQL > select previous_day('2023-04-06', 'Monday');\n+--------------------------------------+\n| previous_day('2023-04-06', 'Monday') |\n+--------------------------------------+\n| 2023-04-03                           |\n+--------------------------------------+\n\nMySQL > select previous_day('2023-04-06', 'Tue');\n+-----------------------------------+\n| previous_day('2023-04-06', 'Tue') |\n+-----------------------------------+\n| 2023-04-04                        |\n+-----------------------------------+\n\nMySQL > select previous_day('2023-04-06 20:13:14', 'Fr');\n+-------------------------------------------+\n| previous_day('2023-04-06 20:13:14', 'Fr') |\n+-------------------------------------------+\n| 2023-03-31                                |\n+-------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(n.p,{children:"PREVIOUS_DAY, PREVIOUS, previousday"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||d:i(e),r.createElement(t.Provider,{value:a},n)}}}]);