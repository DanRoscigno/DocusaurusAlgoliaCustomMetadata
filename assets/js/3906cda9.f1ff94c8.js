"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8102],{1620:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=r(85893),a=r(11151);const t={},i="array_position",o={id:"sql-reference/sql-functions/array-functions/array_position",title:"array_position",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_position.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_position",permalink:"/doc/zh/2.5/sql-reference/sql-functions/array-functions/array_position",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_position.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"array_min",permalink:"/doc/zh/2.5/sql-reference/sql-functions/array-functions/array_min"},next:{title:"array_remove",permalink:"/doc/zh/2.5/sql-reference/sql-functions/array-functions/array_remove"}},c={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function p(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"array_position",children:"array_position"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u6570\u7ec4\u4e2d\u67d0\u4e2a\u5143\u7d20\u4f4d\u7f6e\uff0c\u662f\u7684\u8bdd\u8fd4\u56de\u4f4d\u7f6e\uff0c\u5426\u5219\u8fd4\u56de0."}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"array_position(any_array, any_element)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_position([\"apple\",\"orange\",\"pear\"], \"orange\");\n+-----------------------------------------------------+\n| array_position(['apple','orange','pear'], 'orange') |\n+-----------------------------------------------------+\n|                                                   2 |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u83b7\u53d6\u6570\u7ec4NULL\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_position([1, NULL], NULL);\n+--------------------------------+\n| array_position([1,NULL], NULL) |\n+--------------------------------+\n|                              2 |\n+--------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u5e94\u7528\u5728\u591a\u7ef4\u6570\u7ec4\u4e2d\uff0c\u83b7\u53d6\u67d0\u4e2a\u5b50\u6570\u7ec4\u7684\u4f4d\u7f6e\uff0c\u6b64\u65f6\u8981\u6c42\u5b50\u6570\u7ec4\u5143\u7d20\u5b8c\u5168\u5339\u914d\uff0c\u5305\u62ec\u5143\u7d20\u6392\u5217\u987a\u5e8f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_position([[1,2,3], [4,5,6]], [4,5,6]);\n+--------------------------------------------+\n| array_position([[1,2,3],[4,5,6]], [4,5,6]) |\n+--------------------------------------------+\n|                                          2 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_position([[1,2,3], [4,5,6]], [4,6,5]);\n+--------------------------------------------+\n| array_position([[1,2,3],[4,5,6]], [4,6,5]) |\n+--------------------------------------------+\n|                                          0 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(p,n)})):p(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>o,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(n){const e=s.useContext(a);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function o({components:n,children:e,disableParentContext:r}){let o;return o=r?"function"==typeof n?n({}):n||i:t(n),s.createElement(a.Provider,{value:o},e)}}}]);