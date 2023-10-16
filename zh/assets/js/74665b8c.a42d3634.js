"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29765],{91396:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(85893),i=s(11151);const t={displayed_sidebar:"Chinese"},c="rtrim",l={id:"sql-reference/sql-functions/string-functions/rtrim",title:"rtrim",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rtrim",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rtrim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/rtrim.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"rpad",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rpad"},next:{title:"space",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/space"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rtrim",children:"rtrim"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u5b57\u7b26\u4e32\u7684\u53f3\u4fa7\uff08\u7ed3\u5c3e\u90e8\u5206\uff09\u79fb\u9664\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u6216\u6307\u5b9a\u5b57\u7b26\u3002\u4ece 2.5.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u4ece\u5b57\u7b26\u4e32\u4e2d\u79fb\u9664\u6307\u5b9a\u7684\u5b57\u7b26\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"rtrim(str[, characters]);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": \u5f85\u88c1\u526a\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"characters"}),": \u53ef\u9009\uff0c\u8981\u79fb\u9664\u7684\u5b57\u7b26\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u9ed8\u8ba4\u79fb\u9664\u7a7a\u683c\u3002\u5982\u679c\u8be5\u53c2\u6570\u4e3a\u7a7a\u5b57\u7b26\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u79fb\u9664\u5b57\u7b26\u4e32\u53f3\u4fa7\u7684\u8fde\u7eed\u7a7a\u683c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rtrim('   ab d   ');\n+---------------------+\n| rtrim('   ab d   ') |\n+---------------------+\n|    ab d             |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u79fb\u9664\u5b57\u7b26\u4e32\u53f3\u4fa7\u7684\u6307\u5b9a\u5b57\u7b26\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rtrim(\"xxabcdxx\", \"x\");\n+------------------------+\n| rtrim('xxabcdxx', 'x') |\n+------------------------+\n| xxabcd                 |\n+------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/trim",children:"trim"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/ltrim",children:"ltrim"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:t(e),r.createElement(i.Provider,{value:l},n)}}}]);