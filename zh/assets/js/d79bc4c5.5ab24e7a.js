"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58832],{88773:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=s(85893),a=s(11151);const c={},i="Lambda \u8868\u8fbe\u5f0f",l={id:"sql-reference/sql-functions/Lambda_expression",title:"Lambda \u8868\u8fbe\u5f0f",description:"Lambda \u8868\u8fbe\u5f0f\uff08Lambda expression\uff09\u662f\u4e00\u79cd\u533f\u540d\u51fd\u6570\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u9ad8\u9636\u51fd\u6570\u7684\u4f20\u5165\u53c2\u6570\uff0c\u4e0d\u80fd\u5355\u72ec\u4f7f\u7528\u3002Lambda \u8868\u8fbe\u5f0f\u53ef\u4ee5\u8ba9\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u3001\u7d27\u51d1\u3001\u53ef\u6269\u5c55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/Lambda_expression.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/Lambda_expression",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/Lambda_expression",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/Lambda_expression.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Java UDF",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/JAVA_UDF"},next:{title:"\u4f7f\u7528\u7a97\u53e3\u51fd\u6570\u7ec4\u7ec7\u8fc7\u6ee4\u6570\u636e",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/Window_function"}},d={},o=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function t(e){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lambda-\u8868\u8fbe\u5f0f",children:"Lambda \u8868\u8fbe\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"Lambda \u8868\u8fbe\u5f0f\uff08Lambda expression\uff09\u662f\u4e00\u79cd\u533f\u540d\u51fd\u6570\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u9ad8\u9636\u51fd\u6570\u7684\u4f20\u5165\u53c2\u6570\uff0c\u4e0d\u80fd\u5355\u72ec\u4f7f\u7528\u3002Lambda \u8868\u8fbe\u5f0f\u53ef\u4ee5\u8ba9\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u3001\u7d27\u51d1\u3001\u53ef\u6269\u5c55\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Lambda \u8868\u8fbe\u5f0f\u4f7f\u7528\u8fd0\u7b97\u7b26 ",(0,r.jsx)(n.code,{children:"->"})," \u6765\u8868\u793a\uff0c\u8bfb\u4f5c \u201cgoes to\u201d\u3002\u8fd0\u7b97\u7b26\u5de6\u4fa7\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u53f3\u4fa7\u4e3a\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u652f\u6301\u5728\u4ee5\u4e0b\u9ad8\u9636\u51fd\u6570 (higher-order function) \u4e2d\u5e94\u7528 Lambda \u8868\u8fbe\u5f0f\uff1a",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"\uff0c",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_filter",children:"array_filter()"}),"\uff0c",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_sum",children:"array_sum()"}),"\uff0c",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_sortby",children:"array_sortby()"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"parameter -> expression\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parameter"}),": Lambda \u8868\u8fbe\u5f0f\u63a5\u6536\u7684\u53c2\u6570\uff0c\u53ef\u63a5\u6536 0 \u4e2a\u30011 \u4e2a\u6216\u591a\u4e2a\u53c2\u6570\u3002\u5982\u679c\u53c2\u6570\u4e2a\u6570\u5927\u4e8e\u7b49\u4e8e 2\uff0c\u9700\u8981\u7528\u62ec\u53f7\u5305\u88f9\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expression"}),": Lambda \u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u5185\u5d4c\u6807\u91cf\u51fd\u6570\u3002\u8868\u8fbe\u5f0f\u5fc5\u987b\u4e3a\u652f\u6301\u8f93\u5165\u53c2\u6570\u7684\u5408\u6cd5\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u7531 ",(0,r.jsx)(n.code,{children:"expression"})," \u7684\u7ed3\u679c\u7c7b\u578b\u51b3\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u51e0\u4e4e\u6240\u6709\u7684\u6807\u91cf\u51fd\u6570\u90fd\u53ef\u4ee5\u5d4c\u5957\u5728 lamdba \u8868\u8fbe\u5f0f\u91cc\u3002\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f8b\u5916\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e0d\u652f\u6301\u5b50\u67e5\u8be2\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"x -> 5 + (SELECT 3)"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e0d\u652f\u6301\u805a\u5408\u51fd\u6570\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"x -> min(y)"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u7a97\u53e3\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u8868\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u76f8\u5173\u5217 (correlated column)\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u51e0\u4e2a lambda \u8868\u8fbe\u5f0f\u7684\u7b80\u5355\u4e3e\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'-- \u4e0d\u9700\u8981\u4f20\u5165\u53c2\u6570, \u76f4\u63a5\u8fd4\u56de 3\u3002\n() -> 3    \n-- \u63a5\u6536\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570,\u8fd4\u56de\u52a0 2 \u7684\u7ed3\u679c\u3002\nx -> x + 2 \n-- \u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\u4e4b\u548c\u3002\n(x, y) -> x + y \n-- Lambda \u8868\u8fbe\u5f0f\u5185\u5d4c\u51fd\u6570\u3002\nx -> COALESCE(x, 0)\nx -> day(x)\nx -> split(x,",")\nx -> if(x>0,"positive","negative")\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9ad8\u9636\u51fd\u6570\u91cc\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"select array_map((x,y,z) -> x + y, [1], [2], [4]);\n+----------------------------------------------+\n| array_map((x, y, z) -> x + y, [1], [2], [4]) |\n+----------------------------------------------+\n| [3]                                          |\n+----------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var r=s(67294);const a=r.createContext({});function c(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(a.Provider,{value:l},n)}}}]);