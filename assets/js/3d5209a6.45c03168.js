"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35238],{51051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(85893),i=t(11151);const a={},r="CREATE VIEW",l={id:"sql-reference/sql-statements/data-definition/CREATE_VIEW",title:"CREATE VIEW",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_VIEW",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_VIEW.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE TABLE LIKE",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE"},next:{title:"DROP ANALYZE",permalink:"/doc/en/sql-reference/sql-statements/data-definition/DROP_ANALYZE"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Relevant SQLs",id:"relevant-sqls",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-view",children:"CREATE VIEW"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Creates a view."}),"\n",(0,s.jsx)(n.p,{children:"A view, or a logical view, is a virtual table whose data is derived from a query against other existing physical tables. Therefore, a view uses no physical storage, and all queries against the view are equivalent to sub-queries of the query statement used to build the view."}),"\n",(0,s.jsxs)(n.p,{children:["For information about materialized views supported by StarRocks, see ",(0,s.jsx)(n.a,{href:"/doc/en/using_starrocks/Materialized_view-single_table",children:"Synchronous materialized views"})," and ",(0,s.jsx)(n.a,{href:"/doc/en/using_starrocks/Materialized_view",children:"Asynchronous materialized views"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsx)(n.p,{children:"Only users with the CREATE VIEW privilege on a specific database can perform this operation."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE [OR REPLACE] VIEW [IF NOT EXISTS]\n[<database>.]<view_name>\n(\n    <column_name>[ COMMENT 'column comment']\n    [, <column_name>[ COMMENT 'column comment'], ...]\n)\n[COMMENT 'view comment']\nAS <query_statement>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OR REPLACE"}),(0,s.jsx)(n.td,{children:"Replace an existing view."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"database"}),(0,s.jsx)(n.td,{children:"The name of the database where the view resides."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"view_name"}),(0,s.jsx)(n.td,{children:"The name of the view."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column_name"}),(0,s.jsxs)(n.td,{children:["The name of the column(s) in the view. Note that the columns in the view and the columns queried in the ",(0,s.jsx)(n.code,{children:"query_statement"})," must agree in number."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"COMMENT"}),(0,s.jsx)(n.td,{children:"The comment on the column in the view or the view itself."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query_statement"}),(0,s.jsx)(n.td,{children:"The query statement used to create the view. It can be any query statement supported by StarRocks."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Querying a view requires the SELECT privilege on the view and on its corresponding base tables."}),"\n",(0,s.jsx)(n.li,{children:"If the query statement used to build a view cannot be executed due to the Schema Change on the base tables, StarRocks returns an error when you query the view."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Create a view named ",(0,s.jsx)(n.code,{children:"example_view"})," in ",(0,s.jsx)(n.code,{children:"example_db"})," with an aggregate query against ",(0,s.jsx)(n.code,{children:"example_table"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Create a view named ",(0,s.jsx)(n.code,{children:"example_view"})," in the database ",(0,s.jsx)(n.code,{children:"example_db"})," with an aggregate query against the table ",(0,s.jsx)(n.code,{children:"example_table"}),", and specify comments for the view and each column in it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE VIEW example_db.example_view\n(\n    k1 COMMENT 'first key',\n    k2 COMMENT 'second key',\n    k3 COMMENT 'third key',\n    v1 COMMENT 'first value'\n)\nCOMMENT 'my first view'\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"relevant-sqls",children:"Relevant SQLs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",children:"SHOW CREATE VIEW"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/ALTER_VIEW",children:"ALTER VIEW"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/DROP_VIEW",children:"DROP VIEW"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:l},n)}}}]);