"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60833],{19078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(85893),r=t(11151);const i={},a="STDDEV,STDDEV_POP,std",o={id:"sql-reference/sql-functions/aggregate-functions/stddev",title:"STDDEV,STDDEV_POP,std",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/stddev.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/stddev",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/stddev",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/stddev.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"STD",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/std"},next:{title:"STDDEV_SAMP",permalink:"/doc/en/2.5/sql-reference/sql-functions/aggregate-functions/stddev_samp"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"stddevstddev_popstd",children:"STDDEV,STDDEV_POP,std"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the population standard deviation of the expr expression. Since v2.5.10, this function can also be used as a window function."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"STDDEV(expr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": the expression. If it is a table column, it must evaluate to TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a DOUBLE value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT stddev(lo_quantity), stddev_pop(lo_quantity) from lineorder;\n+---------------------+-------------------------+\n| stddev(lo_quantity) | stddev_pop(lo_quantity) |\n+---------------------+-------------------------+\n|   14.43100708360797 |       14.43100708360797 |\n+---------------------+-------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"STDDEV,STDDEV_POP,POP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:o},n)}}}]);