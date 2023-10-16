"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47601],{11924:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>i});var s=a(85893),l=a(11151);const c={displayed_sidebar:"Chinese"},r="map_apply",t={id:"sql-reference/sql-functions/map-functions/map_apply",title:"map_apply",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/map-functions/map_apply.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_apply",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/map_apply",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/map-functions/map_apply.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"element_at",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/element_at"},next:{title:"map_keys",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/map_keys"}},p={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"map_apply",children:"map_apply"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de map \u4e2d\u6240\u6709 key \u6216 value \u8fdb\u884c ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/Lambda_expression",children:"Lambda"})," \u51fd\u6570\u8fd0\u7b97\u540e\u7684 map \u503c\u3002\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"StarRocks \u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u67e5\u8be2\u6570\u636e\u6e56\u4e2d\u7684\u590d\u6742\u6570\u636e\u7c7b\u578b MAP \u548c STRUCT\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 StarRocks \u63d0\u4f9b\u7684 external catalog \u65b9\u5f0f\u6765\u67e5\u8be2 Apache Hive\u2122\uff0cApache Hudi\uff0cApache Iceberg \u4e2d\u7684 MAP \u548c STRUCT \u6570\u636e\u3002\u4ec5\u652f\u6301\u67e5\u8be2 ORC \u548c Parquet \u7c7b\u578b\u6587\u4ef6\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 external catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e90\uff0c\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/3.0/data_source/catalog/catalog_overview",children:"Catalog \u6982\u8ff0"})," \u548c\u5bf9\u5e94\u7684 catalog \u6587\u6863\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"MAP map_apply(lambda_func, any_map)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lambda_func"}),": \u5e94\u7528\u4e8e map \u7684 Lambda \u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_map"}),": \u8fdb\u884c Lambda \u51fd\u6570\u8fd0\u7b97\u7684 MAP \u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a map\u3002map \u7684 key \u548c value \u7684\u6570\u636e\u7c7b\u578b\u7531 Lambda \u51fd\u6570\u7684\u8fd0\u7b97\u7ed3\u679c\u51b3\u5b9a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c map \u4e2d\u7684\u67d0\u4e2a key \u6216 value \u662f NULL\uff0c\u8be5 NULL \u503c\u6b63\u5e38\u8ba1\u7b97\u5e76\u8fd4\u56de\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"map_from_arrays.md",children:"map_from_arrays"})," \u751f\u6210 map \u503c ",(0,s.jsx)(n.code,{children:'{1:"ab",3:"cd"}'}),'\u3002\u7136\u540e\u4f7f\u7528 Lambda \u51fd\u6570\u5bf9 map \u4e2d\u7684 key \u52a0 1\uff0c\u5bf9 value \u8ba1\u7b97\u5b57\u7b26\u957f\u5ea6\uff0c\u6bd4\u5982 "ab" \u7684\u5b57\u7b26\u957f\u5ea6\u662f 2\u3002']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'mysql> select map_apply((k,v)->(k+1,length(v)), col_map) from (select map_from_arrays([1,3],["ab","cd"]) as col_map)A;\n+--------------------------------------------------+\n| map_apply((k, v) -> (k + 1, length(v)), col_map) |\n+--------------------------------------------------+\n| {2:2,4:2}                                        |\n+--------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select map_apply((k,v)->(k+1,length(v)), col_map) from (select map_from_arrays(null,null) as col_map)A;\n+--------------------------------------------------+\n| map_apply((k, v) -> (k + 1, length(v)), col_map) |\n+--------------------------------------------------+\n| NULL                                             |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select map_apply((k,v)->(k+1,length(v)), col_map) from (select map_from_arrays([1,null],["ab","cd"]) as col_map)A;\n+--------------------------------------------------+\n| map_apply((k, v) -> (k + 1, length(v)), col_map) |\n+--------------------------------------------------+\n|{2:2,null:2}                                      |\n+--------------------------------------------------+\n'})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>t,ah:()=>c});var s=a(67294);const l=s.createContext({});function c(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function t({components:e,children:n,disableParentContext:a}){let t;return t=a?"function"==typeof e?e({}):e||r:c(e),s.createElement(l.Provider,{value:t},n)}}}]);