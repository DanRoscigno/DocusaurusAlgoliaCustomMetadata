"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28624],{59651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>E,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(85893),i=t(11151);const r={},a="CREATE INDEX",l={id:"sql-reference/sql-statements/data-definition/CREATE_INDEX",title:"CREATE INDEX",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_INDEX.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_INDEX",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_INDEX",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_INDEX.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE EXTERNAL CATALOG",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG"},next:{title:"CREATE MATERIALIZED VIEW",permalink:"/doc/en/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-index",children:"CREATE INDEX"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to create indexes."}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX index_name ON table_name (column [, ...],) [USING BITMAP] [COMMENT'balabala']\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Only support bitmap index in the current version."}),"\n",(0,s.jsx)(n.li,{children:"Create BITMAP index only in a single column."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create bitmap index for ",(0,s.jsx)(n.code,{children:"siteid"})," on ",(0,s.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX index_name ON table1 (siteid) USING BITMAP COMMENT 'balabala';\n"})}),"\n"]}),"\n"]})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:l},n)}}}]);