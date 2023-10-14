"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72745],{33898:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(85893),r=s(11151);const i={},a="ALTER RESOURCE",o={id:"sql-reference/sql-statements/data-definition/ALTER_RESOURCE",title:"ALTER RESOURCE",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/ALTER_RESOURCE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",permalink:"/doc/en/2.5/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/ALTER_RESOURCE.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"ALTER MATERIALIZED VIEW",permalink:"/doc/en/2.5/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW"},next:{title:"ALTER TABLE",permalink:"/doc/en/2.5/sql-reference/sql-statements/data-definition/ALTER_TABLE"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"alter-resource",children:"ALTER RESOURCE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"You can use the ALTER RESOURCE statement to modify the properties of a resource."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER RESOURCE \'resource_name\' SET PROPERTIES ("key"="value", ...)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"resource_name"}),": the name of the resource to be modified."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'PROPERTIES ("key"="value", ...)'}),": the properties of the resource. You can modify different properties based on resource types. Currently, StarRocks supports modifying the URI of the Hive metastore of the following resources."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Apache Iceberg resources support modifying the following properties:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"iceberg.catalog-impl"}),": the fully qualified class name of ",(0,n.jsx)(t.a,{href:"/doc/en/2.5/data_source/External_table",children:"custom catalog"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"iceberg.catalog.hive.metastore.uris"}),": the URI of the Hive metastore."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Apache Hive\u2122 resources and Apache Hudi resources support modifying ",(0,n.jsx)(t.code,{children:"hive.metastore.uris"}),", which indicates the URI of the Hive metastore."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsx)(t.p,{children:"After you reference a resource to create an external table, if you modify the URI of the Hive metastore of this resource, the external table becomes unavailable. If you still want to use the external table to query data, make sure that the new metastore contains a table whose name and schema are the same as that in the original metastore."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Modify the URI of the Hive metastore of Hive resource ",(0,n.jsx)(t.code,{children:"hive0"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER RESOURCE \'hive0\' SET PROPERTIES ("hive.metastore.uris" = "thrift://10.10.44.91:9083")\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:i(e),n.createElement(r.Provider,{value:o},t)}}}]);