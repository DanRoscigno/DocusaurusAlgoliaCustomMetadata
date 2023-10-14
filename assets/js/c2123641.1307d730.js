"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86487],{54974:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(85893),i=s(11151);const c={},r="months_diff",o={id:"sql-reference/sql-functions/date-time-functions/months_diff",title:"months_diff",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/months_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/months_diff",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/months_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/months_diff.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"months_add",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/months_add"},next:{title:"months_sub",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/months_sub"}},d={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"months_diff",children:"months_diff"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u4e2a\u6708\uff08",(0,t.jsx)(n.code,{children:"expr1"})," - ",(0,t.jsx)(n.code,{children:"expr2"}),"\uff09\uff0c\u7ed3\u679c\u7cbe\u786e\u5230\u6708\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BIGINT months_diff(DATETIME expr1, DATETIME expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": \u7ed3\u675f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": \u5f00\u59cb\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002\u5982\u679c\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u76f8\u5dee\u4e0d\u6ee1\u4e00\u5468\uff0c\u5219\u8fd4\u56de 0\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select months_diff('2010-11-30 23:59:59', '2010-1-1 23:59:59');\n+---------------------------------------------------------+\n| months_diff('2010-11-30 23:59:59', '2010-1-1 23:59:59') |\n+---------------------------------------------------------+\n|                                                      10 |\n+---------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(i.Provider,{value:o},n)}}}]);