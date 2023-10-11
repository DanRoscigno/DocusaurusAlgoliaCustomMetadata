"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73915],{38928:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const c={},o="bitmap_count",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_count",title:"bitmap_count",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_count.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_count",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_count.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_contains",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_contains"},next:{title:"bitmap_empty",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_empty"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_count",children:"bitmap_count"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Returns the 1-bit count for the input bitmap."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"INT BITMAP_COUNT(any_bitmap)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_from_string(\"1,2,4\"));\n+-------------------------------------------+\n| bitmap_count(bitmap_from_string('1,2,4')) |\n+-------------------------------------------+\n|                                         3 |\n+-------------------------------------------+\n\nMySQL > select bitmap_count(NULL);\n+--------------------+\n| bitmap_count(NULL) |\n+--------------------+\n|                  0 |\n+--------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"BITMAP,BITMAP_COUNT"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(p,n)})):p(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>r,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function r({components:n,children:e,disableParentContext:t}){let r;return r=t?"function"==typeof n?n({}):n||o:c(n),s.createElement(i.Provider,{value:r},e)}}}]);