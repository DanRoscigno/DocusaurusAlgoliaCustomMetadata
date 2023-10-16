"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56195],{93615:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(85893),t=s(11151);const r={displayed_sidebar:"Chinese"},c="like",l={id:"sql-reference/sql-functions/like_predicate-functions/like",title:"like",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/like_predicate-functions/like.md",sourceDirName:"sql-reference/sql-functions/like_predicate-functions",slug:"/sql-reference/sql-functions/like_predicate-functions/like",permalink:"/doc/zh/docs/sql-reference/sql-functions/like_predicate-functions/like",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/like_predicate-functions/like.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Pattern Matching Functions",permalink:"/doc/zh/docs/category/pattern-matching-functions-1"},next:{title:"regexp",permalink:"/doc/zh/docs/sql-reference/sql-functions/like_predicate-functions/regexp"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"like",children:"like"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u5224\u65ad\u5b57\u7b26\u4e32 ",(0,i.jsx)(n.code,{children:"expr"})," \u662f\u5426",(0,i.jsx)(n.strong,{children:"\u6a21\u7cca\u5339\u914d"}),"\u7ed9\u5b9a\u7684\u6a21\u5f0f ",(0,i.jsx)(n.code,{children:"pattern"}),"\uff0c\u5339\u914d\u6210\u529f\u8fd4\u56de 1\uff0c\u5426\u5219\u8fd4\u56de 0\u3002LIKE \u901a\u5e38\u4e0e ",(0,i.jsx)(n.code,{children:"%"}),"\u3001",(0,i.jsx)(n.code,{children:"_"})," \u7ed3\u5408\u4f7f\u7528\uff0c",(0,i.jsx)(n.code,{children:"%"})," \u8868\u793a 0 \u4e2a\u3001\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\uff0c",(0,i.jsx)(n.code,{children:"_"})," \u8868\u793a\u5355\u4e2a\u5b57\u7b26\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN like(VARCHAR expr, VARCHAR pattern);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr"}),": \u76ee\u6807\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pattern"}),": \u5b57\u7b26\u4e32\u9700\u5339\u914d\u7684\u6a21\u5f0f\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"\nmysql> select like(\"star\",\"star\");\n+----------------------+\n| like('star', 'star') |\n+----------------------+\n|                    1 |\n+----------------------+\n\n\nmysql> select like(\"starrocks\",\"star%\");\n+----------------------+\n| like('star', 'star') |\n+----------------------+\n|                    1 |\n+----------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:r(e),i.createElement(t.Provider,{value:l},n)}}}]);