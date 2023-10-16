"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9465],{69885:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),c=s(11151);const r={displayed_sidebar:"English"},i="second",o={id:"sql-reference/sql-functions/date-time-functions/second",title:"second",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/second.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/second",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/second",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/second.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"quarter",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/quarter"},next:{title:"seconds_add",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/seconds_add"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"second",children:"second"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the second part for a given date. The return value ranges from 0 to 59."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"date"})," parameter must be of the DATE or DATETIME type."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"INT SECOND(DATETIME date)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select second('2018-12-31 23:59:59');\n+-----------------------------+\n|second('2018-12-31 23:59:59')|\n+-----------------------------+\n|                          59 |\n+-----------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"SECOND"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:o},n)}}}]);