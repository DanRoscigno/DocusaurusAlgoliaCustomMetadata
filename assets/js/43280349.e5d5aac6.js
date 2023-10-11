"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39916],{33025:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(85893),r=s(11151);const i={},c="like",l={id:"sql-reference/sql-functions/like_predicate-functions/like",title:"like",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/like_predicate-functions/like.md",sourceDirName:"sql-reference/sql-functions/like_predicate-functions",slug:"/sql-reference/sql-functions/like_predicate-functions/like",permalink:"/doc/docs/2.5/sql-reference/sql-functions/like_predicate-functions/like",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/like_predicate-functions/like.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Overview of JSON functions and operators",permalink:"/doc/docs/2.5/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators"},next:{title:"regexp",permalink:"/doc/docs/2.5/sql-reference/sql-functions/like_predicate-functions/regexp"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"like",children:"like"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Checks whether a given expression fuzzy matches the specified pattern. If yes, 1 is returned. Otherwise, 0 is returned. NULL is returned if any of the input parameter is NULL."}),"\n",(0,t.jsxs)(n.p,{children:["LIKE is usually used together with characters such as the percent sign (%) and underscore (_). ",(0,t.jsx)(n.code,{children:"%"})," matches 0, 1, or more characters. ",(0,t.jsx)(n.code,{children:"_"})," matches any single character."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN like(VARCHAR expr, VARCHAR pattern);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the string expression. The supported data type is VARCHAR."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pattern"}),": the pattern to match. The supported data type is VARCHAR."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a BOOLEAN value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select like(\"star\",\"star\");\n+----------------------+\n| like('star', 'star') |\n+----------------------+\n|                    1 |\n+----------------------+\n\nmysql> select like(\"starrocks\",\"star%\");\n+----------------------+\n| like('star', 'star') |\n+----------------------+\n|                    1 |\n+----------------------+\n\nmysql> select like(\"starrocks\",\"star_\");\n+----------------------------+\n| like('starrocks', 'star_') |\n+----------------------------+\n|                          0 |\n+----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},n)}}}]);