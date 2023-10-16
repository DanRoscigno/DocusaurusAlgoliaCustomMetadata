"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58525],{65347:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={displayed_sidebar:"Chinese"},c="bitmap_and",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_and",title:"bitmap_and",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_and.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_and",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_and",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_and.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_agg",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_agg"},next:{title:"bitmap_andnot",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_andnot"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_and",children:"bitmap_and"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u8ba1\u7b97\u4e24\u4e2a bitmap \u7684\u4ea4\u96c6\uff0c\u8fd4\u56de\u65b0\u7684 bitmap\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"BITMAP_AND(lhs, rhs)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"lhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"rhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"MySQL > select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nMySQL > select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function r({components:n,children:e,disableParentContext:t}){let r;return r=t?"function"==typeof n?n({}):n||c:a(n),s.createElement(i.Provider,{value:r},e)}}}]);