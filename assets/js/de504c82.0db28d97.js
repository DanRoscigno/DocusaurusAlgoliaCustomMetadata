"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64071],{46495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(85893),d=t(11151);const r={},i="DROP INDEX",c={id:"sql-reference/sql-statements/data-definition/DROP_INDEX",title:"DROP INDEX",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/DROP_INDEX.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_INDEX",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/DROP_INDEX",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/DROP_INDEX.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DROP DATABASE",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/DROP_DATABASE"},next:{title:"DROP MATERIALIZED VIEW",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-index",children:"DROP INDEX"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6307\u5b9a\u8868\u7684\u67d0\u4e2a bitmap \u7d22\u5f15\u3002\u521b\u5efa bitmap \u7d22\u5f15\u4f1a\u5360\u7528\u989d\u5916\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u6240\u4ee5\u4e0d\u7528\u7684\u7d22\u5f15\u5efa\u8bae\u5220\u9664\u3002\u5220\u9664\u7d22\u5f15\u540e\uff0c\u5b58\u50a8\u7a7a\u95f4\u4f1a\u7acb\u5373\u91ca\u653e\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP INDEX index_name ON [db_name.]table_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"index_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u8981\u5220\u9664\u7684\u7d22\u5f15\u540d\u79f0\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u521b\u5efa\u7d22\u5f15\u7684\u8868\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u8868\u6240\u5c5e\u7684\u6570\u636e\u5e93\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\u4e3a\u8868",(0,s.jsx)(n.code,{children:"sales_records"}),"\u4e2d\u7684",(0,s.jsx)(n.code,{children:"item_id"}),"\u5217\u521b\u5efa\u4f4d\u56fe\u7d22\u5f15\uff0c\u7d22\u5f15\u540d\u79f0\u4e3a",(0,s.jsx)(n.code,{children:"index3"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index3 ON sales_records (item_id);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5220\u9664\u8868",(0,s.jsx)(n.code,{children:"sales_records"}),"\u4e2d\u7684\u7d22\u5f15",(0,s.jsx)(n.code,{children:"index3"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP INDEX index3 ON sales_records;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const d=s.createContext({});function r(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(d.Provider,{value:c},n)}}}]);