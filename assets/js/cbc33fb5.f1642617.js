"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97800],{9682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},r="TRUNCATE TABLE",l={id:"sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",title:"TRUNCATE TABLE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW RESOURCES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_RESOURCES"},next:{title:"USE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/USE"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"truncate-table",children:"TRUNCATE TABLE"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to truncate the specified table and partition data."}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"This statement is used to truncate data while retaining tables or partitions."}),"\n",(0,s.jsx)(n.li,{children:"Unlike DELETE, this statement can only empty the specified tables or partitions as a whole, and filtering conditions cannot be added."}),"\n",(0,s.jsx)(n.li,{children:"Unlike DELETE, using this method to clear data will not affect query performance."}),"\n",(0,s.jsx)(n.li,{children:"This statement directly deletes data. The deleted data cannot be recovered."}),"\n",(0,s.jsx)(n.li,{children:"The table on which you perform this operation must be in the NORMAL state. For example, you cannot perform TRUNCATE TABLE on a table with SCHEMA CHANGE going on."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Truncate table ",(0,s.jsx)(n.code,{children:"tbl"})," under ",(0,s.jsx)(n.code,{children:"example_db"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Truncate partitions ",(0,s.jsx)(n.code,{children:"p1"})," and ",(0,s.jsx)(n.code,{children:"p2"})," in table ",(0,s.jsx)(n.code,{children:"tbl"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:l},n)}}}]);