"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20316],{67743:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var l=e(85893),a=e(11151);const s={},i="array_filter",c={id:"sql-reference/sql-functions/array-functions/array_filter",title:"array_filter",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_filter.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_filter",permalink:"/doc/zh/sql-reference/sql-functions/array-functions/array_filter",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_filter.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_distinct",permalink:"/doc/zh/sql-reference/sql-functions/array-functions/array_distinct"},next:{title:"array_generate",permalink:"/doc/zh/sql-reference/sql-functions/array-functions/array_generate"}},t={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0d\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f",id:"\u4e0d\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",level:3},{value:"\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f",id:"\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",level:3}];function o(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,a.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"array_filter",children:"array_filter"}),"\n",(0,l.jsx)(r.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsxs)(r.p,{children:["\u6839\u636e\u8bbe\u5b9a\u7684\u8fc7\u6ee4\u6761\u4ef6\u8fd4\u56de\u6570\u7ec4\u4e2d\u5339\u914d\u7684\u5143\u7d20\u3002\u8be5\u51fd\u6570\u53ef\u7528\u4e8e\u666e\u901a\u7684\u6570\u7ec4\u8fc7\u6ee4\uff0c\u4e5f\u53ef\u4ee5\u642d\u914d Lambda \u51fd\u6570\u8fdb\u884c\u66f4\u7075\u6d3b\u7684\u6570\u7ec4\u8fc7\u6ee4\u3002\u6709\u5173 Lambda \u8868\u8fbe\u5f0f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,l.jsx)(r.a,{href:"/doc/zh/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-Haskell",children:"array_filter(array, array<bool>)\narray_filter(lambda_function, arr1,arr2...)\n"})}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:"array_filter(array, array<bool>)"})}),"\n",(0,l.jsxs)(r.p,{children:["\u5c06 ",(0,l.jsx)(r.code,{children:"array"})," \u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u4f20\u9012\u7ed9 ",(0,l.jsx)(r.code,{children:"array<bool>"})," \u51fd\u6570\u8fdb\u884c\u5224\u65ad\u3002 \u5982\u679c ",(0,l.jsx)(r.code,{children:"array<bool>"})," \u8fd4\u56de ",(0,l.jsx)(r.code,{children:"true"}),"\uff0c\u5219\u5c06 ",(0,l.jsx)(r.code,{children:"array"})," \u4e2d\u7684\u5f53\u524d\u5143\u7d20\u8fd4\u56de\u5230\u7ed3\u679c\u6570\u7ec4\u4e2d\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:"array_filter(lambda_function, arr1,arr2...)"})}),"\n",(0,l.jsxs)(r.p,{children:["\u5c06 ",(0,l.jsx)(r.code,{children:"lambda_function"})," \u5e94\u7528\u5230\u6bcf\u4e2a\u8f93\u5165\u6570\u7ec4\uff0c\u8fd4\u56de\u5339\u914d\u7684\u6570\u7ec4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"array"}),": \u8981\u8fdb\u884c\u8fc7\u6ee4\u7684\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"array<bool>"}),": \u7528\u4e8e\u8fc7\u6ee4\u6570\u7ec4\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"lambda_function"}),": \u7528\u4e8e\u8fc7\u6ee4\u6570\u7ec4\u7684 lambda \u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"array_filter(array, array<bool>)"})," \u91cc\u7684\u4e24\u4e2a\u8f93\u5165\u53c2\u6570\u5fc5\u987b\u662f ARRAY \u7c7b\u578b\uff0c\u5e76\u4e14\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u4ee5\u517c\u5bb9\u6216\u8005\u8f6c\u6362\u6210 ",(0,l.jsx)(r.code,{children:"array<bool>"}),"\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"array_filter(lambda_function, arr1,arr2...)"})," \u4e2d\u5bf9 lambda function \u7684\u8981\u6c42\u540c ",(0,l.jsx)(r.a,{href:"/doc/zh/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"\u3002"]}),"\n",(0,l.jsx)(r.li,{children:"\u5982\u679c\u8f93\u5165\u6570\u7ec4\u4e3a null\uff0c\u8fd4\u56de null\u3002\u5982\u679c\u7528\u4e8e\u8fc7\u6ee4\u7684\u6570\u7ec4\u4e3a null\uff0c\u5219\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(r.h3,{id:"\u4e0d\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",children:"\u4e0d\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-plain",children:"  -- \u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u90fd\u5339\u914d\u8fc7\u6ee4\u89c4\u5219\uff0c\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u3002\n  select array_filter([1,2,3],[1,1,1]);\n  +------------------------------------+\n  | array_filter([1, 2, 3], [1, 1, 1]) |\n  +------------------------------------+\n  | [1,2,3]                            |\n  +------------------------------------+\n  1 row in set (0.01 sec)\n  \n  -- \u8fd4\u56de\u548c\u8fc7\u6ee4\u89c4\u5219\u5339\u914d\u7684\u5143\u7d20\uff0c\u7b2c\u4e00\u548c\u7b2c\u4e09\u4e2a\u5143\u7d20\u5339\u914d\u3002\n  select array_filter([1,2,3],[1,0,1]);\n  +------------------------------------+\n  | array_filter([1, 2, 3], [1, 0, 1]) |\n  +------------------------------------+\n  | [1,3]                              |\n  +------------------------------------+\n  1 row in set (0.01 sec)\n  \n  -- \u8fc7\u6ee4\u6570\u7ec4\u4e3a null\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002\n  select array_filter([1,2,3],null);\n  +-------------------------------+\n  | array_filter([1, 2, 3], NULL) |\n  +-------------------------------+\n  | []                             |\n  +-------------------------------+\n  1 row in set (0.01 sec)\n  \n  -- \u8f93\u5165\u6570\u7ec4\u4e3a null\uff0c\u8fd4\u56de null\u3002\n  select array_filter(null,[1]);\n  +-------------------------+\n  | array_filter(NULL, [1]) |\n  +-------------------------+\n  | NULL                    |\n  +-------------------------+\n  \n  -- \u8f93\u5165\u6570\u7ec4\u548c\u8fc7\u6ee4\u6570\u7ec4\u90fd\u662f null\uff0c\u8fd4\u56de null\u3002\n  select array_filter(null,null);\n  +--------------------------+\n  | array_filter(NULL, NULL) |\n  +--------------------------+\n  | NULL                     |\n  +--------------------------+\n  1 row in set (0.01 sec)\n  \n  -- \u8fc7\u6ee4\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e3a null\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002\n  select array_filter([1,2,3],[null]);\n  +---------------------------------+\n  | array_filter([1, 2, 3], [NULL]) |\n  +---------------------------------+\n  | []                              |\n  +---------------------------------+\n  1 row in set (0.01 sec)\n  \n  -- \u8fc7\u6ee4\u6570\u7ec4\u4e2d\u7684\u4e24\u4e2a\u5143\u7d20\u90fd\u4e3a null\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002\n  select array_filter([1,2,3],[null,null]);\n  +---------------------------------------+\n  | array_filter([1, 2, 3], [NULL, NULL]) |\n  +---------------------------------------+\n  | []                                    |\n  +---------------------------------------+\n  1 row in set (0.00 sec)\n  \n  -- \u4ec5\u8fd4\u56de\u6570\u7ec4\u4e2d\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20 2\u3002\n  select array_filter([1,2,3],[null,1,0]);\n  +---------------------------------------+\n  | array_filter([1, 2, 3], [NULL, 1, 0]) |\n  +---------------------------------------+\n  | [2]                                   |\n  +---------------------------------------+\n"})}),"\n",(0,l.jsx)(r.h3,{id:"\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",children:"\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-plain",children:"  -- \u8fd4\u56de\u6570\u7ec4 `x` \u4e2d\u5c0f\u4e8e\u6570\u7ec4 `y` \u7684\u5143\u7d20\u3002\n  select array_filter((x,y) -> x < y, [1,2,null], [4,5,6]);\n  +--------------------------------------------------------+\n  | array_filter((x, y) -> x < y, [1, 2, NULL], [4, 5, 6]) |\n  +--------------------------------------------------------+\n  | [1,2]                                                  |\n  +--------------------------------------------------------+\n"})})]})}const u=function(n={}){const{wrapper:r}=Object.assign({},(0,a.ah)(),n.components);return r?(0,l.jsx)(r,Object.assign({},n,{children:(0,l.jsx)(o,n)})):o(n)}},11151:(n,r,e)=>{e.d(r,{Zo:()=>c,ah:()=>s});var l=e(67294);const a=l.createContext({});function s(n){const r=l.useContext(a);return l.useMemo((()=>"function"==typeof n?n(r):{...r,...n}),[r,n])}const i={};function c({components:n,children:r,disableParentContext:e}){let c;return c=e?"function"==typeof n?n({}):n||i:s(n),l.createElement(a.Provider,{value:c},r)}}}]);