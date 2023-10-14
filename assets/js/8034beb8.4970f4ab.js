"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14514],{21054:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var s=r(85893),c=r(11151);const a={},l="array_agg",t={id:"sql-reference/sql-functions/array-functions/array_agg",title:"array_agg",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_agg.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_agg",permalink:"/doc/zh/2.5/sql-reference/sql-functions/array-functions/array_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_agg.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"window_funnel",permalink:"/doc/zh/2.5/sql-reference/sql-functions/aggregate-functions/window_funnel"},next:{title:"array_append",permalink:"/doc/zh/2.5/sql-reference/sql-functions/array-functions/array_append"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"array_agg",children:"array_agg"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u5c06\u4e00\u5217\u4e2d\u7684\u503c\uff08\u5305\u62ec\u7a7a\u503c null\uff09\u4e32\u8054\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u7528\u4e8e\u591a\u884c\u8f6c\u4e00\u884c\uff08\u884c\u8f6c\u5217\uff09\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"ARRAY_AGG(col)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"col"}),"\uff1a\u9700\u8981\u8f6c\u6362\u7684\u5217\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001VARCHAR\u3001CHAR\u3001DATETIME\u3001DATE\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6570\u7ec4\u4e2d\u5143\u7d20\u4e0d\u4fdd\u8bc1\u987a\u5e8f\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u8fd4\u56de\u8f6c\u6362\u751f\u6210\u7684\u6570\u7ec4\u3002\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e0e ",(0,s.jsx)(e.code,{children:"col"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u5982\u4e0b\u6570\u636e\u8868\u8fdb\u884c\u4ecb\u7ecd\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from test;\n+------+------+\n| c1   | c2   |\n+------+------+\n|    1 | a    |\n|    1 | b    |\n|    2 | c    |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6839\u636e ",(0,s.jsx)(e.code,{children:"c1"})," \u5217\u5206\u7ec4\uff0c\u5bf9 ",(0,s.jsx)(e.code,{children:"c2"})," \u6267\u884c",(0,s.jsx)(e.strong,{children:"\u884c\u8f6c\u5217"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'mysql> select c1, array_agg(c2) from test group by c1;\n+------+-----------------+\n| c1   | array_agg(`c2`) |\n+------+-----------------+\n|    1 | ["a","b"]       |\n|    2 | [null,"c"]      |\n|    3 | [null]          |\n+------+-----------------+\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u6574\u884c\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\uff0c\u805a\u5408\u7ed3\u679c\u4e3a ",(0,s.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_agg(c2) from test where c1>4;\n+-----------------+\n| array_agg(`c2`) |\n+-----------------+\n| NULL            |\n+-----------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>t,ah:()=>a});var s=r(67294);const c=s.createContext({});function a(n){const e=s.useContext(c);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function t({components:n,children:e,disableParentContext:r}){let t;return t=r?"function"==typeof n?n({}):n||l:a(n),s.createElement(c.Provider,{value:t},e)}}}]);