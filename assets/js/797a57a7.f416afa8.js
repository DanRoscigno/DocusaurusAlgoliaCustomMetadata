"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93262],{23785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=t(85893),r=t(11151);const l={},o="log2",c={id:"sql-reference/sql-functions/math-functions/log2",title:"log2",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/log2.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/log2",permalink:"/doc/en/sql-reference/sql-functions/math-functions/log2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/log2.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"log10, dlog10",permalink:"/doc/en/sql-reference/sql-functions/math-functions/log10"},next:{title:"mod",permalink:"/doc/en/sql-reference/sql-functions/math-functions/mod"}},i={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"log2",children:"log2"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calculates the base 2 logarithm of a number."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"log2(arg)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arg"}),": The value whose logarithm you want to calculate. Only DOUBLE data type is supported."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["StarRocks returns NULL if ",(0,s.jsx)(n.code,{children:"arg"})," is specified as a negative or 0."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Calculate the base 2 logarithm of 8."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select log2(8);\n+---------+\n| log2(8) |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>l});var s=t(67294);const r=s.createContext({});function l(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:l(e),s.createElement(r.Provider,{value:c},n)}}}]);