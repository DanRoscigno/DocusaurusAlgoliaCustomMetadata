"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28210],{96557:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=i(85893),s=i(11151);const c={},r="bitmap_union",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union",permalink:"/doc/zh/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_to_string",permalink:"/doc/zh/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"},next:{title:"bitmap_union_count",permalink:"/doc/zh/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union_count"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"bitmap_union",children:"bitmap_union"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u8f93\u5165\u4e00\u7ec4 bitmap \u503c\uff0c\u6c42\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u5e76\u96c6\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"BITMAP_UNION(value)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"value"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select page_id, bitmap_union(user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u548c bitmap_count \u51fd\u6570\u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u6c42\u5f97\u7f51\u9875\u7684 UV \u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select page_id, bitmap_count(bitmap_union(user_id))\nfrom table\ngroup by page_id;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5f53 ",(0,t.jsx)(e.code,{children:"user_id"})," \u5b57\u6bb5\u4e3a INT \u65f6\uff0c\u4e0a\u9762\u67e5\u8be2\u8bed\u4e49\u7b49\u540c\u4e8e\u5982\u4e0b\u8bed\u53e5\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select page_id, count(distinct user_id)\nfrom table\ngroup by page_id;\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(u,n)})):u(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>o,ah:()=>c});var t=i(67294);const s=t.createContext({});function c(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function o({components:n,children:e,disableParentContext:i}){let o;return o=i?"function"==typeof n?n({}):n||r:c(n),t.createElement(s.Provider,{value:o},e)}}}]);