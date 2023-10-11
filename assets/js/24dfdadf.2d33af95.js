"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38194],{24426:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=s(85893),i=s(11151);const a={},r="asin",c={id:"sql-reference/sql-functions/math-functions/asin",title:"asin",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/asin.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/asin",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/asin",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/asin.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"acos",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/acos"},next:{title:"atan",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/atan"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"asin",children:"asin"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Computes the arc sine of the argument."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE asin(DOUBLE arg)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"arg"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before it computes the arc sine of the value."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select asin(1);\n+--------------------+\n| asin(1)            |\n+--------------------+\n| 1.5707963267948966 |\n+--------------------+\n\nmysql> select asin(-0.5);\n+---------------------+\n| asin(-0.5)          |\n+---------------------+\n| -0.5235987755982989 |\n+---------------------+\n\nmysql> select asin(0);\n+---------+\n| asin(0) |\n+---------+\n|       0 |\n+---------+\n\nmysql> select asin(\"\");\n+----------+\n| asin('') |\n+----------+\n|     NULL |\n+----------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"ASIN"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:c},n)}}}]);