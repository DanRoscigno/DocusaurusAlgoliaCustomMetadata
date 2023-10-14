"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13077],{50907:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const r={},c="DROP FUNCTION",l={id:"sql-reference/sql-statements/data-definition/drop-function",title:"DROP FUNCTION",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/drop-function.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/drop-function",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/drop-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/drop-function.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE FUNCTION",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/create-function"},next:{title:"SHOW FUNCTIONS",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/show-functions"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-function",children:"DROP FUNCTION"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u51fd\u6570\u7684\u540d\u79f0\u3001\u53c2\u6570\u7c7b\u578b\u5b8c\u5168\u4e00\u81f4\u624d\u80fd\u591f\u88ab\u5220\u9664\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u6267\u884c\u8be5\u547d\u4ee4\u7684\u7528\u6237\u5fc5\u987b\u662f\u51fd\u6570\u7684\u62e5\u6709\u8005\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP [GLOBAL] FUNCTION <function_name>(arg_type [, ...])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GLOBAL"}),"\uff1a\u8868\u793a\u5220\u9664\u5168\u5c40\u51fd\u6570\u3002StarRocks \u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u521b\u5efa ",(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-functions/JAVA_UDF",children:"Global UDF"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"function_name"}),": \u5f85\u5220\u9664\u51fd\u6570\u7684\u540d\u5b57\uff0c\u5fc5\u586b\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arg_type"}),": \u5f85\u5220\u9664\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u5fc5\u586b\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u4e00\u4e2a\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION my_add(INT, INT)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/data-definition/show-functions",children:"SHOW FUNCTIONS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-functions/JAVA_UDF",children:"Java UDF"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:l},n)}}}]);