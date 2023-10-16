"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11183],{64755:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var t=i(85893),s=i(11151);const c={displayed_sidebar:"Chinese"},o="bitmap_union_count",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union_count",title:"bitmap_union_count",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_union_count.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union_count",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_union_count.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_union",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union"},next:{title:"bitmap_union_int",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union_int"}},l={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"bitmap_union_count",children:"bitmap_union_count"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u8ba1\u7b97\u8f93\u5165\u7684\u4e00\u7ec4 bitmap \u503c\u7684\u5e76\u96c6\uff0c\u5e76\u8fd4\u56de\u5e76\u96c6\u7684\u57fa\u6570\u3002\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"BITMAP_UNION_COUNT(value)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"value"})," \uff1a\u8f93\u5165\u7684\u4e00\u7ec4 bitmap \u503c\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u7528\u8be5\u51fd\u6570\u8ba1\u7b97\u7f51\u9875\u7684 UV \u6570\u636e\u3002\u5047\u8bbe ",(0,t.jsx)(e.code,{children:"user_id"})," \u5b57\u6bb5\u7c7b\u578b\u4e3a INT\uff0c\u4e0b\u9762\u4e24\u4e2a\u67e5\u8be2\u662f\u7b49\u4ef7\u7684\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"mysql> select * from test\n+---------+---------+\n| page_id | user_id |\n+---------+---------+\n|       1 |       1 |\n|       1 |       2 |\n|       2 |       1 |\n+---------+---------+\n\nmysql> select page_id,count(distinct user_id) from test group by page_id;\n+---------+-------------------------+\n| page_id | count(DISTINCT user_id) |\n+---------+-------------------------+\n|       1 |                       2 |\n|       2 |                       1 |\n+---------+-------------------------+\n\nmysql> select page_id,bitmap_union_count(to_bitmap(user_id)) from test group by page_id;\n+---------+----------------------------------------+\n| page_id | bitmap_union_count(to_bitmap(user_id)) |\n+---------+----------------------------------------+\n|       1 |                                      2 |\n|       2 |                                      1 |\n+---------+----------------------------------------+\n\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(a,n)})):a(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>r,ah:()=>c});var t=i(67294);const s=t.createContext({});function c(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function r({components:n,children:e,disableParentContext:i}){let r;return r=i?"function"==typeof n?n({}):n||o:c(n),t.createElement(s.Provider,{value:r},e)}}}]);