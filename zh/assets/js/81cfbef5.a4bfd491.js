"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19070],{1261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese"},c="grouping_id",o={id:"sql-reference/sql-functions/aggregate-functions/grouping_id",title:"grouping_id",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/aggregate-functions/grouping_id.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/grouping_id",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/grouping_id",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/grouping_id.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"grouping",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/grouping"},next:{title:"hll_empty",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_empty"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"grouping_id",children:"grouping_id"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4e8e\u533a\u5206\u76f8\u540c\u5206\u7ec4\u6807\u51c6\u7684\u5206\u7ec4\u7edf\u8ba1\u7ed3\u679c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"GROUPING_ID(expr)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"epxr"}),": \u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u9700\u8981\u662f BIGINT \u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de BIGINT \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT COL1,GROUPING_ID(COL2) AS 'GroupingID' FROM tbl GROUP BY ROLLUP (COL1, COL2);\n+------+------------+\n| COL1 | GroupingID |\n+------+------------+\n| NULL |          1 |\n| 2.20 |          1 |\n| 2.20 |          0 |\n| 1.10 |          1 |\n| 1.10 |          0 |\n+------+------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var i=s(67294);const r=i.createContext({});function t(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:t(e),i.createElement(r.Provider,{value:o},n)}}}]);