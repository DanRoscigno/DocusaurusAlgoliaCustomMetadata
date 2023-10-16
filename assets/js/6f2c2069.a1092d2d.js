"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39889],{70683:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(85893),c=s(11151);const r={displayed_sidebar:"English"},i="concat",o={id:"sql-reference/sql-functions/string-functions/concat",title:"concat",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/concat.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"character_length",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/character_length"},next:{title:"concat_ws",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/concat_ws"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"concat",children:"concat"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"This function combines multiple strings. If any of the parameter value is NULL, it will return NULL."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR concat(VARCHAR,...)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nMySQL > select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nMySQL > select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"CONCAT"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(n){const e=t.useContext(c);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||i:r(n),t.createElement(c.Provider,{value:o},e)}}}]);