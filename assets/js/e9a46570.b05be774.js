"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84030],{326:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const d={},r="CREATE INDEX",l={id:"sql-reference/sql-statements/data-definition/CREATE_INDEX",title:"CREATE INDEX",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_INDEX.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_INDEX",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/CREATE_INDEX",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CREATE_INDEX.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE EXTERNAL CATALOG",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG"},next:{title:"CREATE MATERIALIZED VIEW",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u64cd\u4f5c",id:"\u76f8\u5173\u64cd\u4f5c",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-index",children:"CREATE INDEX"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u7d22\u5f15\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u521b\u5efa bitmap \u7d22\u5f15\u3002\u6709\u5173 bitmap \u7d22\u5f15\u7684\u4f7f\u7528\u8bf4\u660e\u548c\u9002\u7528\u573a\u666f\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/using_starrocks/Bitmap_index",children:"Bitmap \u7d22\u5f15"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index_name ON table_name (column_name) [USING BITMAP] [COMMENT'']\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"index_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["\u7d22\u5f15\u540d\u79f0\uff0c\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"\u5fc5\u987b\u7531\u5b57\u6bcd(a-z\u6216A-Z)\u3001\u6570\u5b57(0-9)\u6216\u4e0b\u5212\u7ebf(_)\u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),(0,t.jsx)("li",{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002"})]}),"\u5728\u540c\u4e00\u5f20\u8868\u4e2d\u4e0d\u80fd\u521b\u5efa\u540d\u79f0\u76f8\u540c\u7684\u7d22\u5f15\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u8868\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"column_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u521b\u5efa\u7d22\u5f15\u7684\u5217\u540d\u3002\u6267\u884c\u4e00\u6b21\u8be5\u8bed\u53e5\u53ea\u80fd\u4e3a\u67d0\u4e00\u5217\u521b\u5efa\u7d22\u5f15\uff0c\u4e14\u540c\u4e00\u5217\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"COMMENT"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u7d22\u5f15\u5907\u6ce8\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e3b\u952e\u6a21\u578b\u548c\u660e\u7ec6\u6a21\u578b\u4e2d\u6240\u6709\u5217\u90fd\u53ef\u4ee5\u521b\u5efa bitmap \u7d22\u5f15\uff1b\u805a\u5408\u6a21\u578b\u548c\u66f4\u65b0\u6a21\u578b\u4e2d\uff0c\u53ea\u6709\u7ef4\u5ea6\u5217\uff08\u5373 Key \u5217\uff09\u652f\u6301\u521b\u5efa bitmap \u7d22\u5f15\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4e3a FLOAT\u3001DOUBLE\u3001BOOLEAN \u548c DECIMAL \u7c7b\u578b\u7684\u5217\u521b\u5efa bitmap \u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\u6709\u4e00\u5f20\u8868",(0,t.jsx)(n.code,{children:"sales_records"}),"\uff0c\u5176\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE sales_records\n(\n    record_id int,\n    seller_id int,\n    item_id int\n)\nDISTRIBUTED BY hash(record_id)\nPROPERTIES (\n    "replication_num" = "3"\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u8868",(0,t.jsx)(n.code,{children:"sales_records"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"item_id"}),"\u5217\u521b\u5efa bitmap \u7d22\u5f15\uff0c\u7d22\u5f15\u540d\u79f0\u4e3a",(0,t.jsx)(n.code,{children:"index3"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index3 ON sales_records (item_id) USING BITMAP COMMENT '';\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6216"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index3 ON sales_records (item_id);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u64cd\u4f5c",children:"\u76f8\u5173\u64cd\u4f5c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u8981\u67e5\u770b\u7d22\u5f15\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/Administration/SHOW_INDEX",children:"SHOW INDEX"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u8981\u5220\u9664\u7d22\u5f15\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/data-definition/DROP_INDEX",children:"DROP INDEX"}),"\u3002"]}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>d});var t=s(67294);const i=t.createContext({});function d(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:d(e),t.createElement(i.Provider,{value:l},n)}}}]);