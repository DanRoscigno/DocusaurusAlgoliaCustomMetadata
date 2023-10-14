"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75158],{28180:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=s(85893),i=s(11151);const r={},a="SHOW META",d={id:"sql-reference/sql-statements/data-definition/SHOW_META",title:"SHOW META",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/SHOW_META.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SHOW_META",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-definition/SHOW_META",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/SHOW_META.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW ANALYZE STATUS",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS"},next:{title:"SHOW RESOURCES",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-definition/SHOW_RESOURCES"}},c={},l=[{value:"Description",id:"description",level:2},{value:"View metadata of basic statistics",id:"view-metadata-of-basic-statistics",level:3},{value:"Syntax",id:"syntax",level:4},{value:"View metadata of histograms",id:"view-metadata-of-histograms",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"References",id:"references",level:2}];function h(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",h4:"h4",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"show-meta",children:"SHOW META"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Views metadata of CBO statistics, including basic statistics and histograms."}),"\n",(0,n.jsx)(t.p,{children:"This statement is supported from v2.4."}),"\n",(0,n.jsx)(t.h3,{id:"view-metadata-of-basic-statistics",children:"View metadata of basic statistics"}),"\n",(0,n.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW STATS META [WHERE]\n"})}),"\n",(0,n.jsx)(t.p,{children:"This statement returns the following columns."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Column"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Database"}),(0,n.jsx)(t.td,{children:"The database name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsx)(t.td,{children:"The table name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Columns"}),(0,n.jsx)(t.td,{children:"The column names."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsxs)(t.td,{children:["The type of statistics. ",(0,n.jsx)(t.code,{children:"FULL"})," means full collection and ",(0,n.jsx)(t.code,{children:"SAMPLE"})," means sampled collection."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"UpdateTime"}),(0,n.jsx)(t.td,{children:"The latest statistics update time for the current table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Properties"}),(0,n.jsx)(t.td,{children:"Custom parameters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Healthy"}),(0,n.jsx)(t.td,{children:"The health of statistical information."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"view-metadata-of-histograms",children:"View metadata of histograms"}),"\n",(0,n.jsx)(t.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW HISTOGRAM META [WHERE];\n"})}),"\n",(0,n.jsx)(t.p,{children:"This statement returns the following columns."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Column"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Database"}),(0,n.jsx)(t.td,{children:"The database name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsx)(t.td,{children:"The table name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Column"}),(0,n.jsx)(t.td,{children:"The columns."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsxs)(t.td,{children:["Type of statistics. The value is ",(0,n.jsx)(t.code,{children:"HISTOGRAM"})," for histograms."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"UpdateTime"}),(0,n.jsx)(t.td,{children:"The latest statistics update time for the current table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Properties"}),(0,n.jsx)(t.td,{children:"Custom parameters."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.p,{children:["For more information about collecting statistics for CBO, see ",(0,n.jsx)(t.a,{href:"/doc/en/3.0/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>d,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function d({components:e,children:t,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:d},t)}}}]);