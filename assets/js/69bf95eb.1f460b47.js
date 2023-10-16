"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89981],{9504:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const i={displayed_sidebar:"English"},c="regexp",l={id:"sql-reference/sql-functions/like_predicate-functions/regexp",title:"regexp",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/like_predicate-functions/regexp.md",sourceDirName:"sql-reference/sql-functions/like_predicate-functions",slug:"/sql-reference/sql-functions/like_predicate-functions/regexp",permalink:"/doc/docs/sql-reference/sql-functions/like_predicate-functions/regexp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/like_predicate-functions/regexp.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"like",permalink:"/doc/docs/sql-reference/sql-functions/like_predicate-functions/like"},next:{title:"regexp_extract",permalink:"/doc/docs/sql-reference/sql-functions/like_predicate-functions/regexp_extract"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"regexp",children:"regexp"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Checks whether a given expression matches the regular expression specified by ",(0,r.jsx)(n.code,{children:"pattern"}),". If yes, 1 is returned. Otherwise, 0 is returned. NULL is returned if any of the input parameter is NULL."]}),"\n",(0,r.jsxs)(n.p,{children:["regexp() supports more complex matching conditions than ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/like_predicate-functions/like",children:"like()"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN regexp(VARCHAR expr, VARCHAR pattern);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr"}),": the string expression. The supported data type is VARCHAR."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pattern"}),": the pattern to match. The supported data type is VARCHAR."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a BOOLEAN value."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select regexp(\"abc123\",\"abc*\");\n+--------------------------+\n| regexp('abc123', 'abc*') |\n+--------------------------+\n|                        1 |\n+--------------------------+\n1 row in set (0.06 sec)\n\nselect regexp(\"abc123\",\"xyz*\");\n+--------------------------+\n| regexp('abc123', 'xyz*') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"regexp, regular"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:l},n)}}}]);