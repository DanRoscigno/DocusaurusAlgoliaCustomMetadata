"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48166],{19404:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese"},l="named_struct",i={id:"sql-reference/sql-functions/struct-functions/named_struct",title:"named_struct",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/struct-functions/named_struct.md",sourceDirName:"sql-reference/sql-functions/struct-functions",slug:"/sql-reference/sql-functions/struct-functions/named_struct",permalink:"/doc/zh/docs/sql-reference/sql-functions/struct-functions/named_struct",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/struct-functions/named_struct.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Struct Functions",permalink:"/doc/zh/docs/category/struct-functions-1"},next:{title:"row",permalink:"/doc/zh/docs/sql-reference/sql-functions/struct-functions/row"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"named_struct",children:"named_struct"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u7ed9\u5b9a\u7684\u5b57\u6bb5\u540d\u548c\u5b57\u6bb5\u503c\u6765\u6784\u5efa STRUCT\u3002\u8be5\u53c2\u6570\u652f\u6301 named struct\uff0c\u4f7f\u7528\u8be5\u51fd\u6570\u65f6\u9700\u8981\u6307\u5b9a\u5b57\u6bb5\u540d\u79f0\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"STRUCT named_struct({STRING name1, ANY val1} [, ...] )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"nameN"}),": STRING \u7c7b\u578b\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"valN"}),": \u4efb\u610f\u7c7b\u578b\u7684\u503c\uff0c\u53ef\u4ee5\u4e3a NULL\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"name \u548c value \u8868\u8fbe\u5f0f\u5fc5\u987b\u6210\u5bf9\u51fa\u73b0\uff0c\u5426\u5219\u521b\u5efa\u5931\u8d25\u3002\u5fc5\u987b\u8f93\u5165\u81f3\u5c11\u4e00\u5bf9 name \u548c value\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a STRUCT\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"SELECT named_struct('a', 1, 'b', 2, 'c', 3);\n+--------------------------------------+\n| named_struct('a', 1, 'b', 2, 'c', 3) |\n+--------------------------------------+\n| {\"a\":1,\"b\":2,\"c\":3}                  |\n+--------------------------------------+\n\nSELECT named_struct('a', null, 'b', 2, 'c', 3);\n+-----------------------------------------+\n| named_struct('a', null, 'b', 2, 'c', 3) |\n+-----------------------------------------+\n| {\"a\":null,\"b\":2,\"c\":3}                  |\n+-----------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-types/STRUCT",children:"STRUCT data type"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/struct-functions/row",children:"row/struct"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(c.Provider,{value:i},n)}}}]);