"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93080],{17375:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(85893),t=s(11151);const r={displayed_sidebar:"English"},c="divide",d={id:"sql-reference/sql-functions/math-functions/divide",title:"divide",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/divide.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/divide",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/divide",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/divide.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"degrees",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/degrees"},next:{title:"e",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/e"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"divide",children:"divide"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Return the quotient of x divide y. If y is 0, return null."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"divide(x, y)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"x"}),": The supported types are DOUBLE, FLOAT, LARGEINT, BIGINT, INT, SMALLINT, TINYINT, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"y"}),": The supported types are the same as ",(0,i.jsx)(n.code,{children:"x"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,i.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,i.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select divide(3, 2);\n+--------------+\n| divide(3, 2) |\n+--------------+\n|          1.5 |\n+--------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:r(e),i.createElement(t.Provider,{value:d},n)}}}]);