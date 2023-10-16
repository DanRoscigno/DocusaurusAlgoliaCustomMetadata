"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32137],{36777:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(85893),s=i(11151);const o={displayed_sidebar:"English"},a="bitmap_union",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_to_string",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"},next:{title:"bitmap_union_count",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union_count"}},r={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bitmap_union",children:"bitmap_union"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Calculates the bitmap union of a set of values after grouping. Common usage scenarios include calculating PV and UV."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BITMAP BITMAP_UNION(BITMAP value)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select page_id, bitmap_union(user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use this function with bitmap_count() to obtain the UV of a web page."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select page_id, bitmap_count(bitmap_union(user_id))\nfrom table\ngroup by page_id;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"user_id"})," is an integer, the above query statement is equivalent to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select page_id, count(distinct user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"BITMAP_UNION, BITMAP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>c,ah:()=>o});var t=i(67294);const s=t.createContext({});function o(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:i}){let c;return c=i?"function"==typeof e?e({}):e||a:o(e),t.createElement(s.Provider,{value:c},n)}}}]);