"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74393],{98558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=s(85893),i=s(11151);const o={displayed_sidebar:"English"},r="fmod",d={id:"sql-reference/sql-functions/math-functions/fmod",title:"fmod",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/fmod.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/fmod",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/fmod",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/fmod.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"floor, dfloor",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/floor"},next:{title:"greatest",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/greatest"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"fmod",children:"fmod"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the floating point remainder of the division ( ",(0,t.jsx)(n.code,{children:"dividend"}),"/",(0,t.jsx)(n.code,{children:"divisor"})," ). It is a modulo function."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"fmod(dividend,devisor);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dividend"}),":  DOUBLE or FLOAT is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"devisor"}),": DOUBLE or FLOAT is supported."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["The data type of ",(0,t.jsx)(n.code,{children:"devisor"})," needs to be the same as the data type of ",(0,t.jsx)(n.code,{children:"dividend"}),". Otherwise, StarRocks performs implicit conversion to convert the data type."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["The data type and sign of output need to be the same as the data type and sign of ",(0,t.jsx)(n.code,{children:"dividend"}),". If ",(0,t.jsx)(n.code,{children:"divisor"})," is ",(0,t.jsx)(n.code,{children:"0"}),", ",(0,t.jsx)(n.code,{children:"NULL"})," is returned."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"mysql> select fmod(3.14,3.14);\n+------------------+\n| fmod(3.14, 3.14) |\n+------------------+\n|                0 |\n+------------------+\n\nmysql> select fmod(11.5,3);\n+---------------+\n| fmod(11.5, 3) |\n+---------------+\n|           2.5 |\n+---------------+\n\nmysql> select fmod(3,6);\n+------------+\n| fmod(3, 6) |\n+------------+\n|          3 |\n+------------+\n\nmysql> select fmod(3,0);\n+------------+\n| fmod(3, 0) |\n+------------+\n|       NULL |\n+------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>o});var t=s(67294);const i=t.createContext({});function o(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:o(e),t.createElement(i.Provider,{value:d},n)}}}]);