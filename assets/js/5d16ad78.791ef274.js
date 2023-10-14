"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44954],{46873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=t(85893),i=t(11151);const l={},r="ISNOTNULL",c={id:"sql-reference/sql-functions/utility-functions/isnotnull",title:"ISNOTNULL",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/utility-functions/isnotnull.md",sourceDirName:"sql-reference/sql-functions/utility-functions",slug:"/sql-reference/sql-functions/utility-functions/isnotnull",permalink:"/doc/en/sql-reference/sql-functions/utility-functions/isnotnull",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/utility-functions/isnotnull.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"host_name",permalink:"/doc/en/sql-reference/sql-functions/utility-functions/host_name"},next:{title:"ISNULL",permalink:"/doc/en/sql-reference/sql-functions/utility-functions/isnull"}},o={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"isnotnull",children:"ISNOTNULL"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Checks whether the value is not ",(0,s.jsx)(n.code,{children:"NULL"}),", returns ",(0,s.jsx)(n.code,{children:"1"})," if it is not ",(0,s.jsx)(n.code,{children:"NULL"}),", and returns ",(0,s.jsx)(n.code,{children:"0"})," if it is ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ISNOTNULL(v)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"}),": the value to check. All date types is supported."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns 1 if it is not ",(0,s.jsx)(n.code,{children:"NULL"}),", and returns 0 if it is ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MYSQL > SELECT c1, isnotnull(c1) FROM t1;\n+------+--------------+\n| c1   | `c1` IS NULL |\n+------+--------------+\n| NULL |            0 |\n|    1 |            1 |\n+------+--------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>l});var s=t(67294);const i=s.createContext({});function l(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:l(e),s.createElement(i.Provider,{value:c},n)}}}]);