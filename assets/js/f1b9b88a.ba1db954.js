"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71711],{80439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(85893),i=n(11151);const r={displayed_sidebar:"English"},d="timestampdiff",c={id:"sql-reference/sql-functions/date-time-functions/timestampdiff",title:"timestampdiff",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/timestampdiff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestampdiff",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/timestampdiff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/timestampdiff.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"timestampadd",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/timestampadd"},next:{title:"to_date",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/to_date"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"timestampdiff",children:"timestampdiff"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Returns the interval from ",(0,s.jsx)(t.code,{children:"datetime_expr2"})," to ",(0,s.jsx)(t.code,{children:"datetime_expr1"}),". ",(0,s.jsx)(t.code,{children:"datetime_expr1"})," and ",(0,s.jsx)(t.code,{children:"datetime_expr2"})," must be of the DATE or DATETIME type."]}),"\n",(0,s.jsx)(t.p,{children:"The unit for the integer result and the interval should be one of the following:"}),"\n",(0,s.jsx)(t.p,{children:"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"INT TIMESTAMPDIFF(unit,DATETIME datetime_expr1, DATETIME datetime_expr2)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"MySQL> SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"TIMESTAMPDIFF"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:r(e),s.createElement(i.Provider,{value:c},t)}}}]);