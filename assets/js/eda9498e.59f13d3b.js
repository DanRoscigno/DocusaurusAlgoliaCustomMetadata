"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79462],{76901:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=s(85893),r=s(11151);const c={displayed_sidebar:"English"},i="row",o={id:"sql-reference/sql-functions/struct-functions/row",title:"row",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/struct-functions/row.md",sourceDirName:"sql-reference/sql-functions/struct-functions",slug:"/sql-reference/sql-functions/struct-functions/row",permalink:"/doc/docs/3.0/sql-reference/sql-functions/struct-functions/row",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/struct-functions/row.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"URL_ENCODE",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/url_encode"},next:{title:"catalog",permalink:"/doc/docs/3.0/sql-reference/sql-functions/utility-functions/catalog"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"row",children:"row"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Create an unnamed STRUCT/ROW value from the given values."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"STRUCT row(ANY val, ...)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"This function is a variable argument function. Callers should give at least one argument."}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Return a STRUCT value which is consisted from the input values."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:'select row(1,"Star","Rocks");\n+-------------------------+\n| row(1, \'Star\', \'Rocks\') |\n+-------------------------+\n| {1,"Star","Rocks"}      |\n+-------------------------+\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:'select row("StarRocks", NULL);\n+------------------------+\n| row(\'StarRocks\', NULL) |\n+------------------------+\n| {"StarRocks",null}     |\n+------------------------+\n'})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},n)}}}]);