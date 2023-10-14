"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32137],{36777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const o={},a="bitmap_union",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_to_string",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"},next:{title:"bitmap_union_count",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union_count"}},r={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_union",children:"bitmap_union"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Calculates the bitmap union of a set of values after grouping. Common usage scenarios include calculating PV and UV."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BITMAP BITMAP_UNION(BITMAP value)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select page_id, bitmap_union(user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use this function with bitmap_count() to obtain the UV of a web page."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select page_id, bitmap_count(bitmap_union(user_id))\nfrom table\ngroup by page_id;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"user_id"})," is an integer, the above query statement is equivalent to the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select page_id, count(distinct user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(n.p,{children:"BITMAP_UNION, BITMAP"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var i=t(67294);const s=i.createContext({});function o(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:o(e),i.createElement(s.Provider,{value:c},n)}}}]);