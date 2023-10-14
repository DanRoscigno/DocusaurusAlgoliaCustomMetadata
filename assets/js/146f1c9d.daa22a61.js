"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43855],{56770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={},c="months_diff",o={id:"sql-reference/sql-functions/date-time-functions/months_diff",title:"months_diff",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/months_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/months_diff",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/months_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/months_diff.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"months_add",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/months_add"},next:{title:"months_sub",permalink:"/doc/en/sql-reference/sql-functions/date-time-functions/months_sub"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"months_diff",children:"months_diff"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the month difference between two date expressions (",(0,s.jsx)(n.code,{children:"expr1"})," \u2212 ",(0,s.jsx)(n.code,{children:"expr2"}),"), accurate to the month."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BIGINT months_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr1"}),": the end time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr2"}),": the start time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a BIGINT value."}),"\n",(0,s.jsx)(n.p,{children:"NULL is returned if the date does not exist, for example, 2022-02-29."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select months_diff('2010-11-30 23:59:59', '2010-1-1 23:59:59');\n+---------------------------------------------------------+\n| months_diff('2010-11-30 23:59:59', '2010-1-1 23:59:59') |\n+---------------------------------------------------------+\n|                                                      10 |\n+---------------------------------------------------------+\n\nselect months_diff('2010-11-30', '2010-1-1');\n+---------------------------------------+\n| months_diff('2010-11-30', '2010-1-1') |\n+---------------------------------------+\n|                                    10 |\n+---------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:o},n)}}}]);