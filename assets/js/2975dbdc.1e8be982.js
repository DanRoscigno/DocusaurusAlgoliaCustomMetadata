"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71109],{35010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},l="ALTER VIEW",a={id:"sql-reference/sql-statements/data-definition/ALTER_VIEW",title:"ALTER VIEW",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/ALTER_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_VIEW",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/ALTER_VIEW.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ALTER TABLE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/ALTER_TABLE"},next:{title:"ANALYZE TABLE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/ANALYZE_TABLE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-view",children:"ALTER VIEW"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Modifies the definition of a view."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"View is logical, where the data isn't stored in the physical medium. The view will be used as a subquery in the statement when queried. Therefore, modifying the definition of views is equivalent to modifying query_stmt."}),"\n",(0,s.jsx)(n.li,{children:"query_stmt is arbitrarily supported SQL."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Alter ",(0,s.jsx)(n.code,{children:"example_view"})," on ",(0,s.jsx)(n.code,{children:"example_db"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\nc1 COMMENT "column 1",\nc2 COMMENT "column 2",\nc3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) \nFROM example_table\nGROUP BY k1, k2\n'})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:a},n)}}}]);