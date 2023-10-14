"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53526],{76446:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(85893),r=s(11151);const i={},a="years_diff",c={id:"sql-reference/sql-functions/date-time-functions/years_diff",title:"years_diff",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/years_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/years_diff",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/years_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/years_diff.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"years_add",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/years_add"},next:{title:"years_sub",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/years_sub"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"years_diff",children:"years_diff"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the year difference between two date expressions (",(0,t.jsx)(n.code,{children:"expr1"})," \u2212 ",(0,t.jsx)(n.code,{children:"expr2"}),"), accurate to the year."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BIGINT years_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the end time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": the start time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a BIGINT value."}),"\n",(0,t.jsx)(n.p,{children:"NULL is returned if the date does not exist, for example, 2022-02-29."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select years_diff('2010-11-30 23:59:59', '2000-11-1 23:59:59');\n+---------------------------------------------------------+\n| years_diff('2010-11-30 23:59:59', '2000-11-1 23:59:59') |\n+---------------------------------------------------------+\n|                                                      10 |\n+---------------------------------------------------------+\n\nselect years_diff('2010-11-30', '2000-11-1');\n+---------------------------------------+\n| years_diff('2010-11-30', '2000-11-1') |\n+---------------------------------------+\n|                                    10 |\n+---------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:c},n)}}}]);