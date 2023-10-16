"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93262],{23785:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=s(85893),r=s(11151);const l={displayed_sidebar:"English"},o="log2",i={id:"sql-reference/sql-functions/math-functions/log2",title:"log2",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/log2.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/log2",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/log2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/log2.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"log10, dlog10",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/log10"},next:{title:"mod",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/mod"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"log2",children:"log2"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Calculates the base 2 logarithm of a number."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"log2(arg)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arg"}),": The value whose logarithm you want to calculate. Only DOUBLE data type is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks returns NULL if ",(0,t.jsx)(n.code,{children:"arg"})," is specified as a negative or 0."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Calculate the base 2 logarithm of 8."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select log2(8);\n+---------+\n| log2(8) |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var t=s(67294);const r=t.createContext({});function l(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:l(e),t.createElement(r.Provider,{value:i},n)}}}]);