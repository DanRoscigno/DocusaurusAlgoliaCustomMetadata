"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73812],{6600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(85893),s=n(11151);const c={},i="regexp_extract",a={id:"sql-reference/sql-functions/like_predicate-functions/regexp_extract",title:"regexp_extract",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/like_predicate-functions/regexp_extract.md",sourceDirName:"sql-reference/sql-functions/like_predicate-functions",slug:"/sql-reference/sql-functions/like_predicate-functions/regexp_extract",permalink:"/doc/en/3.0/sql-reference/sql-functions/like_predicate-functions/regexp_extract",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/like_predicate-functions/regexp_extract.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"regexp",permalink:"/doc/en/3.0/sql-reference/sql-functions/like_predicate-functions/regexp"},next:{title:"regexp_replace",permalink:"/doc/en/3.0/sql-reference/sql-functions/like_predicate-functions/regexp_replace"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"regexp_extract",children:"regexp_extract"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"This function returns the first matching substring in the target value which matches the regular expression pattern. It extracts the item in pos that matches the pattern. The pattern must completely match some parts of str so that the function can return parts needed to be matched in the pattern. If no matches are found, it will return an empty string."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Haskell",children:"VARCHAR regexp_extract(VARCHAR str, VARCHAR pattern, int pos)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nMySQL > SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(t.p,{children:"REGEXP_EXTRACT,REGEXP,EXTRACT"})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>c});var r=n(67294);const s=r.createContext({});function c(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:c(e),r.createElement(s.Provider,{value:a},t)}}}]);