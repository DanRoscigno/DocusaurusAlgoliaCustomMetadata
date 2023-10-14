"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89326],{21945:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var c=s(85893),t=s(11151);const i={},d="seconds_diff",r={id:"sql-reference/sql-functions/date-time-functions/seconds_diff",title:"seconds_diff",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/seconds_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/seconds_diff",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/seconds_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/seconds_diff.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"seconds_add",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/seconds_add"},next:{title:"seconds_sub",permalink:"/doc/zh/sql-reference/sql-functions/date-time-functions/seconds_sub"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"seconds_diff",children:"seconds_diff"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u591a\u5c11\u79d2 (",(0,c.jsx)(n.code,{children:"expr1"})," \u2212 ",(0,c.jsx)(n.code,{children:"expr2"}),")\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"BIGINT seconds_diff(DATETIME expr1, DATETIME expr2);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr1"}),": \u7ed3\u675f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr2"}),": \u5f00\u59cb\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002\u5982\u679c\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select seconds_diff('2010-11-30 23:59:59', '2010-11-30 20:59:59');\n+------------------------------------------------------------+\n| seconds_diff('2010-11-30 23:59:59', '2010-11-30 20:59:59') |\n+------------------------------------------------------------+\n|                                                      10800 |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var c=s(67294);const t=c.createContext({});function i(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||d:i(e),c.createElement(t.Provider,{value:r},n)}}}]);