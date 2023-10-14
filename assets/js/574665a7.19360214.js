"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32438],{94637:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(85893),c=s(11151);const r={},i="microseconds_add",d={id:"sql-reference/sql-functions/date-time-functions/microseconds_add",title:"microseconds_add",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/microseconds_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_add",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/microseconds_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/microseconds_add.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"makedate",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/makedate"},next:{title:"microseconds_sub",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/microseconds_sub"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"microseconds_add",children:"microseconds_add"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Adds a time interval to a date value. The time interval is in microseconds."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME microseconds_add(DATETIME expr1,INT expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the time expression. It must be of the DATETIME type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": the time interval you want to add, in microseconds. It must be of the INT type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["Returns a value of the DATETIME type. If the input value is of the DATE type, the hour, minute, and seconds parts are processed as ",(0,t.jsx)(n.code,{children:"00:00:00"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_add('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_add('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:50.000002                 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nselect microseconds_add('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_add('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-30 00:00:00.000002        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:d},n)}}}]);