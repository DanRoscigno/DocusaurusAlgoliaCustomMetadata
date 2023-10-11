"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30604],{5059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=a(85893),n=a(11151);const l={},r="SHOW CREATE CATALOG",c={id:"sql-reference/sql-statements/data-manipulation/SHOW CREATE CATALOG",title:"SHOW CREATE CATALOG",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW CREATE CATALOG.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW CREATE CATALOG",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW CREATE CATALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW CREATE CATALOG.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW CATALOGS",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW CATALOGS"},next:{title:"SHOW CREATE DATABASE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW CREATE DATABASE"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-create-catalog",children:"SHOW CREATE CATALOG"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(t.p,{children:["\u67e5\u770b\u67d0\u4e2a External Catalog\uff08\u5982 Hive Catalog\u3001Iceberg Catalog\u3001Hudi Catalog \u6216 Delta Lake Catalog\uff09\u7684\u521b\u5efa\u8bed\u53e5\u3002\u53c2\u89c1 ",(0,s.jsx)(t.a,{href:"/doc/zh/docs/2.5/data_source/catalog/hive_catalog",children:"Hive Catalog"}),"\u3001",(0,s.jsx)(t.a,{href:"/doc/zh/docs/2.5/data_source/catalog/iceberg_catalog",children:"Iceberg Catalog"}),"\u3001",(0,s.jsx)(t.a,{href:"/doc/zh/docs/2.5/data_source/catalog/hudi_catalog",children:"Hudi Catalog"})," \u548c ",(0,s.jsx)(t.a,{href:"/doc/zh/docs/2.5/data_source/catalog/deltalake_catalog",children:"Delta Lake Catalog"}),"\u3002\u5176\u4e2d\u8ba4\u8bc1\u76f8\u5173\u7684\u5bc6\u94a5\u4fe1\u606f\u4f1a\u8fdb\u884c\u8131\u654f\u5c55\u793a\uff0c\u65e0\u6cd5\u67e5\u770b\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u8be5\u547d\u4ee4\u81ea 2.5.4 \u7248\u672c\u8d77\u652f\u6301\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE CATALOG <catalog_name>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u662f\u5426\u5fc5\u9009"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"catalog_name"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u5f85\u67e5\u770b\u7684 Catalog \u7684\u540d\u79f0\u3002"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"+------------+-----------------+\n| Catalog    | Create Catalog  |\n+------------+-----------------+\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u5b57\u6bb5"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Catalog"}),(0,s.jsx)(t.td,{children:"Catalog \u7684\u540d\u79f0\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Create Catalog"}),(0,s.jsx)(t.td,{children:"Catalog \u7684\u521b\u5efa\u8bed\u53e5\u3002"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee5\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(t.code,{children:"hive_catalog_glue"})," \u7684 Hive Catalog \u4e3a\u4f8b\uff0c\u67e5\u8be2\u8be5 Catalog \u7684\u521b\u5efa\u8bed\u53e5\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE CATALOG hive_catalog_glue;\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG `hive_catalog_hms`\nPROPERTIES ("aws.s3.access_key"  =  "AK******M4",\n"hive.metastore.type"  =  "glue",\n"aws.s3.secret_key"  =  "iV******iD",\n"aws.glue.secret_key"  =  "iV******iD",\n"aws.s3.use_instance_profile"  =  "false",\n"aws.s3.region"  =  "us-west-1",\n"aws.glue.region"  =  "us-west-1",\n"type"  =  "hive",\n"aws.glue.access_key"  =  "AK******M4"\n)\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>c,ah:()=>l});var s=a(67294);const n=s.createContext({});function l(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||r:l(e),s.createElement(n.Provider,{value:c},t)}}}]);