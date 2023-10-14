"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67371],{76109:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(85893),r=s(11151);const i={},a="RAND, RANDOM",c={id:"sql-reference/sql-functions/math-functions/rand",title:"RAND, RANDOM",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/rand.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/rand",permalink:"/doc/en/2.5/sql-reference/sql-functions/math-functions/rand",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/rand.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"radians",permalink:"/doc/en/2.5/sql-reference/sql-functions/math-functions/radians"},next:{title:"round, dround",permalink:"/doc/en/2.5/sql-reference/sql-functions/math-functions/round"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rand-random",children:"RAND, RANDOM"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"RAND(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": optional. The data type is BIGINT. If ",(0,t.jsx)(n.code,{children:"x"})," is specified, this function returns a repeatable random number. If ",(0,t.jsx)(n.code,{children:"x"})," is not specified, this function returns a completely random number."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select rand();\n+--------------------+\n| rand()             |\n+--------------------+\n| 0.9393535880089522 |\n+--------------------+\n1 row in set (0.01 sec)\nselect rand(3);\n+--------------------+\n| rand(3)            |\n+--------------------+\n| 0.6659865964511347 |\n+--------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"RAND, RANDOM"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:c},n)}}}]);