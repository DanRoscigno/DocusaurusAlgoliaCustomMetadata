"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12664],{29468:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=r(85893),t=r(11151);const i={},c="rtrim",a={id:"sql-reference/sql-functions/string-functions/rtrim",title:"rtrim",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rtrim",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/rtrim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/rtrim.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"rpad",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/rpad"},next:{title:"space",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/space"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rtrim",children:"rtrim"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Removes the trailing spaces or specified characters from the end (right) of the ",(0,s.jsx)(n.code,{children:"str"})," argument. Removing specified characters are supported from StarRocks 2.5.0."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR rtrim(VARCHAR str[, VARCHAR characters]);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"str"}),": required, the string to trim, which must evaluate to a VARCHAR value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"characters"}),": optional, the characters to remove, which must be a VARCHAR value. If this parameter is not specified, spaces are removed from the string by default. If this parameter is set to an empty string, an error is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a VARCHAR value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Remove the three trailing spaces from the string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT rtrim('   ab d   ');\n+---------------------+\n| rtrim('   ab d   ') |\n+---------------------+\n|    ab d             |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Remove specified characters from the end of the string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rtrim(\"xxabcdxx\", \"x\");\n+------------------------+\n| rtrim('xxabcdxx', 'x') |\n+------------------------+\n| xxabcd                 |\n+------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-functions/string-functions/trim",children:"trim"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-functions/string-functions/ltrim",children:"ltrim"})}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:i(e),s.createElement(t.Provider,{value:a},n)}}}]);