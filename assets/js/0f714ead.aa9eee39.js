"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77885],{14175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(85893),r=n(11151);const i={},a="str_to_date",o={id:"sql-reference/sql-functions/date-time-functions/str_to_date",title:"str_to_date",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/str_to_date.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/str_to_date",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/str_to_date",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/str_to_date.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"str2date",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/str2date"},next:{title:"str_to_jodatime",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/str_to_jodatime"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"str_to_date",children:"str_to_date"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Converts a string into a DATETIME value according to the specified format. If the conversion fails, NULL is returned."}),"\n",(0,s.jsxs)(t.p,{children:["The format must be consistent with that described in ",(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This function is inverse to ",(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME STR_TO_DATE(VARCHAR str, VARCHAR format)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"str"}),": the time expression you want to convert. It must be of the VARCHAR type."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"format"}),": the format used to return the value. For the supported format, see ",(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.p,{children:["Returns a value of the DATETIME type. If ",(0,s.jsx)(t.code,{children:"format"})," specifies a date, a DATE value is returned."]}),"\n",(0,s.jsxs)(t.p,{children:["NULL is returned if ",(0,s.jsx)(t.code,{children:"str"})," or ",(0,s.jsx)(t.code,{children:"format"})," is NULL."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Example 1: Convert the input into a DATETIME value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 2: Convert the input into a DATE value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d')               |\n+--------------------------------------------------------------+\n| 2014-12-21                                                   |\n+--------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:'Example 3: Convert the input "200442 Monday" into a DATE value.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"STR_TO_DATE,STR,TO,DATE"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var s=n(67294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:o},t)}}}]);