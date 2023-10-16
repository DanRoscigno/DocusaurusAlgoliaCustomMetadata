"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11112],{15881:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=s(85893),i=s(11151);const r={displayed_sidebar:"English"},l="negative",a={id:"sql-reference/sql-functions/math-functions/negative",title:"negative",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/negative.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/negative",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/negative",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/negative.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"multiply",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/multiply"},next:{title:"pi",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/pi"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"negative",children:"negative"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the negative of input ",(0,t.jsx)(n.code,{children:"arg"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"negative(arg)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameter",children:"Parameter"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"arg"})," supports the following data types:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BIGINT"}),"\n",(0,t.jsx)(n.li,{children:"DOUBLE"}),"\n",(0,t.jsx)(n.li,{children:"DECIMALV2"}),"\n",(0,t.jsx)(n.li,{children:"DECIMAL32"}),"\n",(0,t.jsx)(n.li,{children:"DECIMAL64"}),"\n",(0,t.jsx)(n.li,{children:"DECIMAL128"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the same data type as the input."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select negative(3);\n+-------------+\n| negative(3) |\n+-------------+\n|          -3 |\n+-------------+\n1 row in set (0.00 sec)\n\nmysql> select negative(cast(3.14 as decimalv2));\n+--------------------------------------+\n| negative(CAST(3.14 AS DECIMAL(9,0))) |\n+--------------------------------------+\n|                                -3.14 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:a},n)}}}]);