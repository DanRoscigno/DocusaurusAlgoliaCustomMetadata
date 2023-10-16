"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27863],{42235:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(85893),t=s(11151);const i={displayed_sidebar:"English"},c="UPPER",l={id:"sql-reference/sql-functions/string-functions/upper",title:"UPPER",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/upper.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/upper",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/upper",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/upper.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"unhex",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/unhex"},next:{title:"URL_DECODE",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/url_decode"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"upper",children:"UPPER"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Converts a string to upper-case."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haskell",children:"upper(str)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"str"}),": the string to convert. If ",(0,r.jsx)(n.code,{children:"str"})," is not a string type, it will try implicit cast first."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-values",children:"Return values"}),"\n",(0,r.jsx)(n.p,{children:"Return an upper-case string."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"MySQL [test]> select C_String, upper(C_String) from ex_iceberg_tbl;\n+-------------------+-------------------+\n| C_String          | upper(C_String)   |\n+-------------------+-------------------+\n| Hello, StarRocks! | HELLO, STARROCKS! |\n| Hello, World!     | HELLO, WORLD!     |\n+-------------------+-------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:l},n)}}}]);