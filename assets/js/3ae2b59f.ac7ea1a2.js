"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59131],{28685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=t(85893),s=t(11151);const r={},a="unix_timestamp",o={id:"sql-reference/sql-functions/date-time-functions/unix_timestamp",title:"unix_timestamp",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/unix_timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/unix_timestamp",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/unix_timestamp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/unix_timestamp.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"to_tera_timestamp",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/to_tera_timestamp"},next:{title:"utc_time",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/utc_time"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"unix_timestamp",children:"unix_timestamp"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Converts a DATE or DATETIME value into a UNIX timestamp."}),"\n",(0,i.jsx)(n.p,{children:"If no parameter is specified, this function converts the current time into a UNIX timestamp."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"date"})," parameter must be of the DATE or DATETIME type."]}),"\n",(0,i.jsx)(n.p,{children:"For time before 1970-01-01 00:00:00 or after 2038-01-19 11:14:07, this function returns 0."}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the date format, see ",(0,i.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This function may return different results for different time zones. For more information, see ",(0,i.jsx)(n.a,{href:"/doc/en/3.0/administration/timezone",children:"Configure a time zone"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"INT UNIX_TIMESTAMP()\nINT UNIX_TIMESTAMP(DATETIME date)\nINT UNIX_TIMESTAMP(DATETIME date, STRING fmt)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nMySQL > select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nMySQL > select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nMySQL > select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n|unix_timestamp('2007-11-30 10:30%3A19')|\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nMySQL > select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(n.p,{children:"UNIX_TIMESTAMP,UNIX,TIMESTAMP"})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var i=t(67294);const s=i.createContext({});function r(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:r(e),i.createElement(s.Provider,{value:o},n)}}}]);