"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86124],{83443:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var c=s(85893),t=s(11151);const r={},i="sm3",o={id:"sql-reference/sql-functions/crytographic-functions/sm3",title:"sm3",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/crytographic-functions/sm3.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/sm3",permalink:"/doc/zh/2.5/sql-reference/sql-functions/crytographic-functions/sm3",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/crytographic-functions/sm3.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"sha2",permalink:"/doc/zh/2.5/sql-reference/sql-functions/crytographic-functions/sha2"},next:{title:"to_base64",permalink:"/doc/zh/2.5/sql-reference/sql-functions/crytographic-functions/to_base64"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"sm3",children:"sm3"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 SM3 \u6458\u8981\u7b97\u6cd5\uff0c\u5c06\u5b57\u7b26\u4e32 ",(0,c.jsx)(n.code,{children:"str"})," \u52a0\u5bc6\u4e3a 256-bit \u7684 \u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\uff0c\u6bcf 32 \u4f4d\u7528\u7a7a\u683c\u5206\u9694\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6458\u8981\u7b97\u6cd5\u5e7f\u6cdb\u5e94\u7528\u5728\u6570\u5b57\u7b7e\u540d\uff0c\u6d88\u606f\u8ba4\u8bc1\uff0c\u6570\u636e\u5b8c\u6574\u6027\u68c0\u6d4b\u7b49\u9886\u57df\u3002SM3 \u7b97\u6cd5\u662f\u5728 SHA-256 \u57fa\u7840\u4e0a\u7684\u6539\u8fdb\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"SM3(str);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"str"}),": \u5f85\u52a0\u5bc6\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u8f93\u5165\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u8f93\u5165\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ec5\u63a5\u6536\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8f93\u5165\u591a\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f1a\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select sm3('l');\n+-------------------------------------------------------------------------+\n| sm3('l')                                                                |\n+-------------------------------------------------------------------------+\n| 1dec1a7a 94236240 49db411e 2c32c62d c0c93856 8208ac3a 09d395eb 2468b445 |\n+-------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),c.createElement(t.Provider,{value:o},n)}}}]);