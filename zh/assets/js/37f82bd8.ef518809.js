"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36757],{10242:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var c=s(85893),a=s(11151);const i={displayed_sidebar:"Chinese"},r="map_size",t={id:"sql-reference/sql-functions/map-functions/map_size",title:"map_size",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/map-functions/map_size.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_size",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/map_size",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/map-functions/map_size.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"map_keys",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/map_keys"},next:{title:"map_values",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/map_values"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"map_size",children:"map_size"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de Map \u4e2d\u5143\u7d20\u7684\u4e2a\u6570\u3002MAP \u91cc\u4fdd\u5b58\u7684\u662f\u952e\u503c\u5bf9 (key-value pair)\uff0c\u6bd4\u5982 ",(0,c.jsx)(n.code,{children:'{"a":1, "b":2}'}),"\u3002\u4e00\u4e2a\u952e\u503c\u5bf9\u7b97\u4f5c\u4e00\u4e2a\u5143\u7d20\uff0c\u6bd4\u5982 ",(0,c.jsx)(n.code,{children:'{"a":1, "b":2}'})," \u7684\u5143\u7d20\u4e2a\u6570\u4e3a 2\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u67e5\u8be2\u6570\u636e\u6e56\u4e2d\u7684\u590d\u6742\u6570\u636e\u7c7b\u578b MAP \u548c STRUCT\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 StarRocks \u63d0\u4f9b\u7684 external catalog \u65b9\u5f0f\u6765\u67e5\u8be2 Apache Hive\u2122\uff0cApache Hudi\uff0cApache Iceberg \u4e2d\u7684 MAP \u548c STRUCT \u6570\u636e\u3002\u4ec5\u652f\u6301\u67e5\u8be2 ORC \u548c Parquet \u7c7b\u578b\u6587\u4ef6\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 external catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e90\uff0c\u53c2\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/data_source/catalog/catalog_overview",children:"Catalog \u6982\u8ff0"})," \u548c\u5bf9\u5e94\u7684 catalog \u6587\u6863\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"map_size(any_map)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"any_map"}),": \u8981\u83b7\u53d6\u5143\u7d20\u4e2a\u6570\u7684 MAP \u503c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c MAP \u4e2d\u7684\u67d0\u4e2a key \u6216 value \u662f NULL\uff0c\u8be5 NULL \u503c\u6b63\u5e38\u8ba1\u7b97\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe Hive \u4e2d\u6709\u8868 ",(0,c.jsx)(n.code,{children:"hive_map"}),"\uff0c\u6570\u636e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:'select * from hive_map order by col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u5728\u672c\u5730\u6570\u636e\u5e93\u521b\u5efa Hive catalog \u6765\u8bbf\u95ee\u8be5\u8868\uff0c\u8ba1\u7b97 ",(0,c.jsx)(n.code,{children:"col_map"})," \u5217\u6bcf\u884c\u7684\u5143\u7d20\u4e2a\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plaintext",children:"select map_size(col_map) from hive_map order by col_int;\n+-------------------+\n| map_size(col_map) |\n+-------------------+\n|                 2 |\n|                 1 |\n|                 2 |\n+-------------------+\n3 rows in set (0.05 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>i});var c=s(67294);const a=c.createContext({});function i(e){const n=c.useContext(a);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||r:i(e),c.createElement(a.Provider,{value:t},n)}}}]);