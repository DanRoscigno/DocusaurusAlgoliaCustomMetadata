"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40773],{94468:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=r(85893),t=r(11151);const i={displayed_sidebar:"English"},c="replace",a={id:"sql-reference/sql-functions/string-functions/replace",title:"replace",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/replace.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/replace",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/replace",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/replace.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"repeat",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/repeat"},next:{title:"reverse",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/reverse"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"replace",children:"replace"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Replaces all occurrences of characters in a string with another string. This function performs a case-sensitive match when searching for ",(0,s.jsx)(n.code,{children:"pattern"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v3.0."}),"\n",(0,s.jsxs)(n.p,{children:["Note: Prior to 3.0, this function was implemented as ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/like_predicate-functions/regexp_replace",children:"regexp_replace"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"VARCHAR replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"str"}),": the original string."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pattern"}),": the characters to replace. Note that this is not a regular expression."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"repl"}),": the string used to replace characters in ",(0,s.jsx)(n.code,{children:"pattern"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a string with the specified characters replaced."}),"\n",(0,s.jsx)(n.p,{children:"If any argument is NULL, the result is NULL."}),"\n",(0,s.jsx)(n.p,{children:"If no matching characters are found, the original string is returned."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"-- Replace '.' in 'a.b.c' with '+'.\n\nMySQL > SELECT replace('a.b.c', '.', '+');\n+----------------------------+\n| replace('a.b.c', '.', '+') |\n+----------------------------+\n| a+b+c                      |\n+----------------------------+\n\n-- No matching characters are found and the original string is returned.\n\nMySQL > SELECT replace('a b c', '', '*');\n+----------------------------+\n| replace('a b c', '', '*') |\n+----------------------------+\n| a b c                      |\n+----------------------------+\n\n-- Replace 'like' with an empty string.\n\nMySQL > SELECT replace('We like StarRocks', 'like', '');\n+------------------------------------------+\n| replace('We like StarRocks', 'like', '') |\n+------------------------------------------+\n| We  StarRocks                            |\n+------------------------------------------+\n\n-- No matching characters are found and the original string is returned.\n\nMySQL > SELECT replace('He is awesome', 'handsome', 'smart');\n+-----------------------------------------------+\n| replace('He is awesome', 'handsome', 'smart') |\n+-----------------------------------------------+\n| He is awesome                                 |\n+-----------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"REPLACE, replace"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:i(e),s.createElement(t.Provider,{value:a},n)}}}]);