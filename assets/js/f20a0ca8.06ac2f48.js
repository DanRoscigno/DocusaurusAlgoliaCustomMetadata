"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33704],{95558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=s(85893),a=s(11151);const l={displayed_sidebar:"English"},r="CANCEL ALTER TABLE",i={id:"sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",title:"CANCEL ALTER TABLE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"BACKUP",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/BACKUP"},next:{title:"CANCEL BACKUP",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_BACKUP"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cancel-alter-table",children:"CANCEL ALTER TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Cancels the following operations performed with the ALTER TABLE statement on a given table:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Table schema: add and delete columns, reorder columns, and modify data types of columns."}),"\n",(0,t.jsx)(n.li,{children:"Rollup index: create and delete rollup indexes."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This statement is a synchronous operation and requires you to have the ",(0,t.jsx)(n.code,{children:"ALTER_PRIV"})," privilege on the table."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cancel schema changes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE COLUMN FROM [db_name.]table_name\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cancel changes to rollup indexes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE ROLLUP FROM [db_name.]table_name\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"The name of the database to which the table belongs. If this parameter is not specified, your current database is used by default."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table_name"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"The table name."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Cancel the schema changes to ",(0,t.jsx)(n.code,{children:"example_table"})," in the ",(0,t.jsx)(n.code,{children:"example_db"}),"database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE COLUMN FROM example_db.example_table;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Cancel rollup index changes to ",(0,t.jsx)(n.code,{children:"example_table"})," in your current database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE ROLLUP FROM example_table;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var t=s(67294);const a=t.createContext({});function l(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(a.Provider,{value:i},n)}}}]);