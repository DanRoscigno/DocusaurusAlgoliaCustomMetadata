"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53034],{95922:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const c={},r="split",l={id:"sql-reference/sql-functions/string-functions/split",title:"split",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/split.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/split",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/split",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/split.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"space",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/space"},next:{title:"split_part",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/split_part"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"split",children:"split"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"This function splits a given string according to the separators, and returns the split parts in ARRAY."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"ARRAY<VARCHAR> split(VARCHAR content, VARCHAR delimiter)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'mysql> select split("a,b,c",",");\n+---------------------+\n| split(\'a,b,c\', \',\') |\n+---------------------+\n| ["a","b","c"]       |\n+---------------------+\n\nmysql> select split("a,b,c",",b,");\n+-----------------------+\n| split(\'a,b,c\', \',b,\') |\n+-----------------------+\n| ["a","c"]             |\n+-----------------------+\n\nmysql> select split("abc","");\n+------------------+\n| split(\'abc\', \'\') |\n+------------------+\n| ["a","b","c"]    |\n+------------------+\n'})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"SPLIT"})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(p,n)})):p(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||r:c(n),t.createElement(i.Provider,{value:l},e)}}}]);