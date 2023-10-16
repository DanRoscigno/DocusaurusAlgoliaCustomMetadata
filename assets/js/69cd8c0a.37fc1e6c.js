"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30555],{34419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=n(85893),i=n(11151);const r={displayed_sidebar:"English"},a="timestampadd",d={id:"sql-reference/sql-functions/date-time-functions/timestampadd",title:"timestampadd",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/timestampadd.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestampadd",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/timestampadd",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/timestampadd.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"timestamp",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/timestamp"},next:{title:"timestampdiff",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/timestampdiff"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"timestampadd",children:"timestampadd"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Adds an integer expression interval to the date or datetime expression ",(0,s.jsx)(t.code,{children:"datetime_expr"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The unit for the interval as mentioned must be one of the following:"}),"\n",(0,s.jsx)(t.p,{children:"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME TIMESTAMPADD(unit, interval, DATETIME datetime_expr)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"\nMySQL > SELECT TIMESTAMPADD(MINUTE,1,'2019-01-02');\n+------------------------------------------------+\n| timestampadd(MINUTE, 1, '2019-01-02 00:00:00') |\n+------------------------------------------------+\n| 2019-01-02 00:01:00                            |\n+------------------------------------------------+\n\nMySQL > SELECT TIMESTAMPADD(WEEK,1,'2019-01-02');\n+----------------------------------------------+\n| timestampadd(WEEK, 1, '2019-01-02 00:00:00') |\n+----------------------------------------------+\n| 2019-01-09 00:00:00                          |\n+----------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"TIMESTAMPADD"})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>d,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function d({components:e,children:t,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:d},t)}}}]);