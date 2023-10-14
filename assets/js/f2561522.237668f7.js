"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38466],{99906:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var c=r(85893),s=r(11151);const a={},t="array_concat",l={id:"sql-reference/sql-functions/array-functions/array_concat",title:"array_concat",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_concat.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_concat",permalink:"/doc/zh/3.0/sql-reference/sql-functions/array-functions/array_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_concat.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"array_avg",permalink:"/doc/zh/3.0/sql-reference/sql-functions/array-functions/array_avg"},next:{title:"array_contains",permalink:"/doc/zh/3.0/sql-reference/sql-functions/array-functions/array_contains"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong"},(0,s.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"array_concat",children:"array_concat"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(e.p,{children:"\u5c06\u591a\u4e2a\u6570\u7ec4\u62fc\u63a5\u6210\u4e00\u4e2a\u6570\u7ec4\u3002\u62fc\u63a5\u540e\u7684\u6570\u7ec4\u5305\u542b\u591a\u4e2a\u6570\u7ec4\u91cc\u7684\u6240\u6709\u5143\u7d20\u3002\u5f85\u62fc\u63a5\u7684\u6570\u7ec4\u5143\u7d20\u7c7b\u578b\u53ef\u4ee5\u76f8\u540c\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u540c\uff0c\u4f46\u662f\u5efa\u8bae\u5bf9\u76f8\u540c\u5143\u7d20\u7c7b\u578b\u7684\u6570\u7ec4\u8fdb\u884c\u62fc\u63a5\u3002"}),"\n",(0,c.jsx)(e.p,{children:"NULL \u503c\u4f1a\u4f5c\u4e3a\u6b63\u5e38\u503c\u5904\u7406\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"array_concat(input0, input1, ...)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"input"}),"\uff1a\u8868\u793a\u4e0d\u9650\u6570\u91cf\u3001\u5177\u6709\u76f8\u540c\u5143\u7d20\u7c7b\u578b\u7684\u6570\u7ec4\u3002\u6570\u7ec4\u5143\u7d20\u53ef\u4ee5\u662f\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\uff1aBOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMALV2\u3001VARCHAR\u3001DATETIME\u3001DATE\u3001JSON\u3002",(0,c.jsx)(e.strong,{children:"\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0c\u8be5\u51fd\u6570\u652f\u6301 JSON \u7c7b\u578b\u7684\u6570\u7ec4\u5143\u7d20\u3002"})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de (input0, input1, ...) \u4e2d\u6240\u6709\u5143\u7d20\u6709\u5e8f\u62fc\u63a5\u540e\u7684\u6570\u7ec4\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd4\u56de\u7684\u6570\u7ec4\u5143\u7d20\u7c7b\u578b\u4e0e ",(0,c.jsx)(e.code,{children:"input"})," \u4e2d\u6570\u7ec4\u7684\u5143\u7d20\u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u793a\u4f8b\u4e00\uff1a\u5bf9\u6570\u503c\u5143\u7d20\u7684\u6570\u7ec4\u8fdb\u884c\u62fc\u63a5\u3002"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_concat([57.73,97.32,128.55,null,324.2], [3], [5]) as res;\n+-------------------------------------+\n| res                                 |\n+-------------------------------------+\n| [57.73,97.32,128.55,null,324.2,3,5] |\n+-------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u793a\u4f8b\u4e8c\uff1a\u5bf9\u5b57\u7b26\u4e32\u5143\u7d20\u7684\u6570\u7ec4\u8fdb\u884c\u62fc\u63a5\u3002"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> select array_concat(["sql","storage","execute"], ["Query"], ["Vectorized", "cbo"]);\n+----------------------------------------------------------------------------+\n| array_concat([\'sql\',\'storage\',\'execute\'], [\'Query\'], [\'Vectorized\',\'cbo\']) |\n+----------------------------------------------------------------------------+\n| ["sql","storage","execute","Query","Vectorized","cbo"]                     |\n+----------------------------------------------------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u793a\u4f8b\u4e09\uff1a\u5bf9\u4e0d\u540c\u5143\u7d20\u7c7b\u578b\u7684\u6570\u7ec4\u8fdb\u884c\u62fc\u63a5\u3002"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain_Text",children:'select array_concat([57,65], ["pear","apple"]);\n+-------------------------------------------+\n| array_concat([57, 65], [\'pear\', \'apple\']) |\n+-------------------------------------------+\n| ["57","65","pear","apple"]                |\n+-------------------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u793a\u4f8b\u56db\uff1anull\u4f5c\u4e3a\u6b63\u5e38\u503c\u5904\u7406\u3002"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> select array_concat(["sql",null], [null], ["Vectorized", null]);\n+---------------------------------------------------------+\n| array_concat([\'sql\',NULL], [NULL], [\'Vectorized\',NULL]) |\n+---------------------------------------------------------+\n| ["sql",null,null,"Vectorized",null]                     |\n+---------------------------------------------------------+\n'})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>l,ah:()=>a});var c=r(67294);const s=c.createContext({});function a(n){const e=c.useContext(s);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function l({components:n,children:e,disableParentContext:r}){let l;return l=r?"function"==typeof n?n({}):n||t:a(n),c.createElement(s.Provider,{value:l},e)}}}]);