"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53919],{40331:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=s(85893),d=s(11151);const i={displayed_sidebar:"Chinese"},l="CREATE VIEW",r={id:"sql-reference/sql-statements/data-definition/CREATE_VIEW",title:"CREATE VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_VIEW",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CREATE_VIEW.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CREATE TABLE LIKE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE"},next:{title:"DROP ANALYZE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_ANALYZE"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-view",children:"CREATE VIEW"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u89c6\u56fe\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u89c6\u56fe\uff08\u6216\u903b\u8f91\u89c6\u56fe\uff09\u662f\u4e00\u79cd\u865a\u62df\u8868\uff0c\u5176\u4e2d\u7684\u6570\u636e\u6765\u81ea\u4e8e\u5bf9\u5176\u4ed6\u73b0\u6709\u5b9e\u4f53\u8868\u7684\u67e5\u8be2\u7ed3\u679c\u3002\u56e0\u6b64\uff0c\u89c6\u56fe\u65e0\u9700\u5360\u7528\u7269\u7406\u5b58\u50a8\u7a7a\u95f4\u3002\u6240\u6709\u9488\u5bf9\u89c6\u56fe\u7684\u67e5\u8be2\u76f8\u5f53\u4e8e\u8be5\u89c6\u56fe\u5bf9\u5e94\u67e5\u8be2\u8bed\u53e5\u4e4b\u4e0a\u7684\u5b50\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4e8e StarRocks \u652f\u6301\u7684\u7269\u5316\u89c6\u56fe\uff0c\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"/doc/zh/docs/using_starrocks/Materialized_view-single_table",children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\u548c",(0,t.jsx)(n.a,{href:"/doc/zh/docs/using_starrocks/Materialized_view",children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u9700\u8981\u6709\u6307\u5b9a\u6570\u636e\u5e93\u7684 CREATE VIEW \u6743\u9650\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE [OR REPLACE] VIEW [IF NOT EXISTS]\n[<database>.]<view_name>\n(\n    <column_name>[ COMMENT 'column comment']\n    [, <column_name>[ COMMENT 'column comment'], ...]\n)\n[COMMENT 'view comment']\nAS <query_statement>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OR REPLACE"}),(0,t.jsx)(n.td,{children:"\u66ff\u6362\u5df2\u6709\u89c6\u56fe\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"database"}),(0,t.jsx)(n.td,{children:"\u89c6\u56fe\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"view_name"}),(0,t.jsx)(n.td,{children:"\u89c6\u56fe\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"column_name"}),(0,t.jsxs)(n.td,{children:["\u89c6\u56fe\u4e2d\u7684\u5217\u540d\u3002\u8bf7\u6ce8\u610f\uff0c\u89c6\u56fe\u4e2d\u7684\u5217\u548c ",(0,t.jsx)(n.code,{children:"query_statement"})," \u4e2d\u67e5\u8be2\u7684\u5217\u7684\u6570\u91cf\u5fc5\u987b\u4e00\u81f4\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"COMMENT"}),(0,t.jsx)(n.td,{children:"\u89c6\u56fe\u4e2d\u7684\u5217\u6216\u89c6\u56fe\u672c\u8eab\u7684\u6ce8\u91ca\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"query_statement"}),(0,t.jsx)(n.td,{children:"\u7528\u4e8e\u521b\u5efa\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\u3002\u53ef\u4ee5\u4e3a StarRocks \u652f\u6301\u7684\u4efb\u610f\u67e5\u8be2\u8bed\u53e5\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u67e5\u8be2\u89c6\u56fe\u9700\u8981\u8be5\u89c6\u56fe\u7684 SELECT \u6743\u9650\u548c\u5176\u5bf9\u5e94\u57fa\u8868\u7684 SELECT \u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u57fa\u8868\u53d8\u66f4\u5bfc\u81f4\u521b\u5efa\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\u65e0\u6cd5\u6267\u884c\uff0c\u5219\u67e5\u8be2\u8be5\u89c6\u56fe\u65f6\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7\u57fa\u4e8e\u8868 ",(0,t.jsx)(n.code,{children:"example_table"})," \u7684\u805a\u5408\u67e5\u8be2\u5728\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"})," \u4e2d\u521b\u5efa\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"example_view"})," \u7684\u89c6\u56fe\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7\u57fa\u4e8e\u8868 ",(0,t.jsx)(n.code,{children:"example_table"})," \u7684\u805a\u5408\u67e5\u8be2\u5728\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"})," \u4e2d\u521b\u5efa\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"example_view"})," \u7684\u89c6\u56fe\uff0c\u5e76\u4e3a\u89c6\u56fe\u548c\u5176\u4e2d\u7684\u5217\u8bbe\u7f6e\u6ce8\u91ca\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE VIEW example_db.example_view\n(\n    k1 COMMENT 'first key',\n    k2 COMMENT 'second key',\n    k3 COMMENT 'third key',\n    v1 COMMENT 'first value'\n)\nCOMMENT 'my first view'\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",children:"SHOW CREATE VIEW"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/ALTER_VIEW",children:"ALTER VIEW"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_VIEW",children:"DROP VIEW"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var t=s(67294);const d=t.createContext({});function i(e){const n=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:i(e),t.createElement(d.Provider,{value:r},n)}}}]);