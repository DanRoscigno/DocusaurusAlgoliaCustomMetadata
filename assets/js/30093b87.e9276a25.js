"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32494],{76993:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var s=t(85893),r=t(11151);const l={},c="null_or_empty",i={id:"sql-reference/sql-functions/string-functions/null_or_empty",title:"null_or_empty",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/null_or_empty.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/null_or_empty",permalink:"/doc/zh/3.0/sql-reference/sql-functions/string-functions/null_or_empty",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/null_or_empty.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"money_format",permalink:"/doc/zh/3.0/sql-reference/sql-functions/string-functions/money_format"},next:{title:"parse_url",permalink:"/doc/zh/3.0/sql-reference/sql-functions/string-functions/parse_url"}},o={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"null_or_empty",children:"null_or_empty"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u5b57\u7b26\u4e32\u4e3a\u7a7a\u5b57\u7b26\u4e32\u6216\u8005 NULL \u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"NULL_OR_EMPTY(str)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"str"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select null_or_empty(null);\n+---------------------+\n| null_or_empty(NULL) |\n+---------------------+\n|                   1 |\n+---------------------+\n\nMySQL > select null_or_empty(\"\");\n+-------------------+\n| null_or_empty('') |\n+-------------------+\n|                 1 |\n+-------------------+\n\nMySQL > select null_or_empty(\"a\");\n+--------------------+\n| null_or_empty('a') |\n+--------------------+\n|                  0 |\n+--------------------+\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>i,ah:()=>l});var s=t(67294);const r=s.createContext({});function l(n){const e=s.useContext(r);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function i({components:n,children:e,disableParentContext:t}){let i;return i=t?"function"==typeof n?n({}):n||c:l(n),s.createElement(r.Provider,{value:i},e)}}}]);