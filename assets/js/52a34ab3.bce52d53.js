"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10069],{19619:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=a(85893),r=a(11151);const t={displayed_sidebar:"English"},i="map_apply",o={id:"sql-reference/sql-functions/map-functions/map_apply",title:"map_apply",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/map-functions/map_apply.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_apply",permalink:"/doc/docs/3.0/sql-reference/sql-functions/map-functions/map_apply",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/map-functions/map_apply.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"element_at",permalink:"/doc/docs/3.0/sql-reference/sql-functions/map-functions/element_at"},next:{title:"map_keys",permalink:"/doc/docs/3.0/sql-reference/sql-functions/map-functions/map_keys"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"map_apply",children:"map_apply"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Applies a ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"})," to the keys and values of the original Map and generates a new Map. This function is supported from v3.0."]}),"\n",(0,s.jsxs)(n.p,{children:["From v2.5, StarRocks supports querying complex data types MAP and STRUCT from data lakes. MAP is an unordered collection of key-value pairs, for example, ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use external catalogs provided by StarRocks to query MAP and STRUCT data from Apache Hive\u2122, Apache Hudi, and Apache Iceberg. You can only query data from ORC and Parquet files. For more information about how to use external catalogs to query external data sources, see ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/data_source/catalog/catalog_overview",children:"Overview of catalogs"})," and topics related to the required catalog type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"MAP map_apply(lambda_func, any_map)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lambda_func"}),": the Lambda expression."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_map"}),": the map to which the Lambda expression is applied."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a map value. The data types of keys and values in the result map are determined by the result of the Lambda expression."}),"\n",(0,s.jsx)(n.p,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,s.jsx)(n.p,{children:"If a key or value in the original map is NULL, NULL is processed as a normal value."}),"\n",(0,s.jsx)(n.p,{children:"The Lambda expression must have two parameters. The first parameter represents the key. The second parameter represents the value."})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>o,ah:()=>t});var s=a(67294);const r=s.createContext({});function t(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||i:t(e),s.createElement(r.Provider,{value:o},n)}}}]);