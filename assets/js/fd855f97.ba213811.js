"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22829],{62493:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const r={},c="sinh",l={id:"sql-reference/sql-functions/math-functions/sinh",title:"sinh",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/sinh.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/sinh",permalink:"/doc/en/sql-reference/sql-functions/math-functions/sinh",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/sinh.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"sin",permalink:"/doc/en/sql-reference/sql-functions/math-functions/sin"},next:{title:"sqrt, dsqrt",permalink:"/doc/en/sql-reference/sql-functions/math-functions/sqrt"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sinh",children:"sinh"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Computes the hyperbolic sine of the argument."}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.0."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE sinh(DOUBLE arg)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"arg"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before it computes the hyperbolic sine of the value."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select sinh(-1);\n+---------------------+\n| sinh(-1)            |\n+---------------------+\n| -1.1752011936438014 |\n+---------------------+\n\nmysql> select sinh(0);\n+---------+\n| sinh(0) |\n+---------+\n|       0 |\n+---------+\n\nmysql> select sinh(1);\n+--------------------+\n| sinh(1)            |\n+--------------------+\n| 1.1752011936438014 |\n+--------------------+\n\nmysql> select sinh(\"\");\n+----------+\n| sinh('') |\n+----------+\n|     NULL |\n+----------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"SINH"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:l},n)}}}]);