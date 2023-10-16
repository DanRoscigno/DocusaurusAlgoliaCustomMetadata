"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50515],{33841:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=n(85893),r=n(11151);const i={displayed_sidebar:"English"},c="substring, substr",l={id:"sql-reference/sql-functions/string-functions/substring",title:"substring, substr",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/substring.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/substring",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/substring",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/substring.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"strright",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/strright"},next:{title:"trim",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/trim"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter values",id:"parameter-values",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"substring-substr",children:"substring, substr"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Extracts characters from a string and returns a substring."}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"len"})," is not specified, this function extracts characters from the position specified by ",(0,t.jsx)(s.code,{children:"pos"}),". If ",(0,t.jsx)(s.code,{children:"len"})," is specified, this function extracts ",(0,t.jsx)(s.code,{children:"len"})," characters from the position specified by ",(0,t.jsx)(s.code,{children:"pos"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"pos"})," can be a negative integer. In this case, this function extracts characters starting from the end of the string."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"VARCHAR substr(VARCHAR str, pos[, len])\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameter-values",children:"Parameter values"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"str"}),": the string to extract characters, required. It must be a VARCHAR value."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pos"}),": the start position, required. The first position in the string is 1."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"length"}),": the number of characters to extract, optional. It must be a positive integer."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(s.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,t.jsxs)(s.p,{children:["If the number of characters (",(0,t.jsx)(s.code,{children:"len"}),") to return exceeds the actual length of the matching characters, all the matching characters are returned."]}),"\n",(0,t.jsxs)(s.p,{children:["If the position specified by ",(0,t.jsx)(s.code,{children:"pos"})," exceeds the range of the string, an empty string is returned."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select substring(\"starrockscluster\", 1, 9);\n+-------------------------------------+\n| substring('starrockscluster', 1, 9) |\n+-------------------------------------+\n| starrocks                           |\n+-------------------------------------+\n\nMySQL > select substring(\"starrocks\", -5, 5);\n+-------------------------------+\n| substring('starrocks', -5, 5) |\n+-------------------------------+\n| rocks                         |\n+-------------------------------+\n\nMySQL > select substring(\"apple\", 1, 9);\n+--------------------------+\n| substring('apple', 1, 9) |\n+--------------------------+\n| apple                    |\n+--------------------------+\n"})}),"\n",(0,t.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(s.p,{children:"substring,string,sub"})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},s)}}}]);