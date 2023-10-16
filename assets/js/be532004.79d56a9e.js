"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50220],{52883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(85893),a=n(11151);const r={displayed_sidebar:"English"},i="SHOW CREATE VIEW",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",title:"SHOW CREATE VIEW",description:"Returns the CREATE statement that was used to create a given view. The CREATE VIEW statement helps you understand how the view is defined and provides a reference for you to modify or reconstruct the view. Note that the SHOW CREATE VIEW statement requires you to have the SELECT privilege on the view and the table based on which the view is created.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW CREATE TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE"},next:{title:"SHOW DATA",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATA"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-create-view",children:"SHOW CREATE VIEW"}),"\n",(0,s.jsxs)(t.p,{children:["Returns the CREATE statement that was used to create a given view. The CREATE VIEW statement helps you understand how the view is defined and provides a reference for you to modify or reconstruct the view. Note that the SHOW CREATE VIEW statement requires you to have the ",(0,s.jsx)(t.code,{children:"SELECT"})," privilege on the view and the table based on which the view is created."]}),"\n",(0,s.jsxs)(t.p,{children:["From v2.5.4 onwards, you can use SHOW CREATE VIEW to query the statement that is used to create a ",(0,s.jsx)(t.strong,{children:"materialized view"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE VIEW [db_name.]view_name\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db_name"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The database name. If this parameter is not specified, the CREATE VIEW statement of a given view in your current database is returned by default."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"view_name"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The view name."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"+---------+--------------+----------------------+----------------------+\n| View    | Create View  | character_set_client | collation_connection |\n+---------+--------------+----------------------+----------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"The following table describes the parameters returned by this statement."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"View"}),(0,s.jsx)(t.td,{children:"The view name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Create View"}),(0,s.jsx)(t.td,{children:"The CREATE VIEW statement of the view."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"character_set_client"}),(0,s.jsx)(t.td,{children:"The character set the client uses to send statements to StarRocks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"collation_connection"}),(0,s.jsx)(t.td,{children:"The rules for comparing characters in a character set."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Create a table named ",(0,s.jsx)(t.code,{children:"example_table"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Create a view named ",(0,s.jsx)(t.code,{children:"example_view"})," based on ",(0,s.jsx)(t.code,{children:"example_table"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"CREATE VIEW example_view (k1, k2, k3, v1)\nAS SELECT k1, k2, k3, v1 FROM example_table;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Display the CREATE VIEW statement of ",(0,s.jsx)(t.code,{children:"example_view"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:'SHOW CREATE VIEW example_db.example_view;\n\n+--------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+\n| View         | Create View                                                                                                                                                                                                                                                                                                                     | character_set_client | collation_connection |\n+--------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+\n| example_view | CREATE VIEW `example_view` (k1, k2, k3, v1) COMMENT "VIEW" AS SELECT `default_cluster:db1`.`example_table`.`k1` AS `k1`, `default_cluster:db1`.`example_table`.`k2` AS `k2`, `default_cluster:db1`.`example_table`.`k3` AS `k3`, `default_cluster:db1`.`example_table`.`v1` AS `v1` FROM `default_cluster:db1`.`example_table`; | utf8                 | utf8_general_ci      |\n+--------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+\n'})})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:l},t)}}}]);