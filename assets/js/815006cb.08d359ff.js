"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53977],{88048:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=s(85893),t=s(11151);const i={displayed_sidebar:"English"},l="ALTER DATABASE",r={id:"sql-reference/sql-statements/data-definition/ALTER_DATABASE",title:"ALTER DATABASE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/ALTER_DATABASE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_DATABASE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_DATABASE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/ALTER_DATABASE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"UNINSTALL PLUGIN",permalink:"/doc/docs/sql-reference/sql-statements/Administration/UNINSTALL_PLUGIN"},next:{title:"ALTER MATERIALIZED VIEW",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function A(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",pre:"pre",code:"code",ul:"ul",a:"a"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"alter-database",children:"ALTER DATABASE"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Configures the properties of the specified database. (Administrator only)"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set database data quota in B/K/KB/M/MB/G/GB/T/TB/P/PB unit."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET DATA QUOTA quota;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Rename the database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name RENAME new_db_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set database replica quota"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET REPLICA QUOTA quota;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"After renaming the database, use REVOKE and GRANT commands to modify the corresponding user permission if necessary.\nThe database's default data quota and the default replica quota are 2^63-1.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set specified database data quota"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\n-- The above unit is bytes, equivalent to the following statement.\nALTER DATABASE example_db SET DATA QUOTA 10T;\nALTER DATABASE example_db SET DATA QUOTA 100G;\nALTER DATABASE example_db SET DATA QUOTA 200M;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Rename the database example_db as example_db2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db RENAME example_db2;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set specified database replica quota"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(A,e)})):A(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var a=s(67294);const t=a.createContext({});function i(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:i(e),a.createElement(t.Provider,{value:r},n)}}}]);