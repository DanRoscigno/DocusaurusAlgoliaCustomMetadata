"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57212],{51404:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>i});var a=s(85893),r=s(11151);const c={},l="transform_keys",t={id:"sql-reference/sql-functions/map-functions/transform_keys",title:"transform_keys",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/map-functions/transform_keys.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/transform_keys",permalink:"/doc/zh/3.0/sql-reference/sql-functions/map-functions/transform_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/map-functions/transform_keys.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"map_values",permalink:"/doc/zh/3.0/sql-reference/sql-functions/map-functions/map_values"},next:{title:"transform_values",permalink:"/doc/zh/3.0/sql-reference/sql-functions/map-functions/transform_values"}},o={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"transform_keys",children:"transform_keys"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsxs)(n.p,{children:["\u5bf9 Map \u4e2d\u7684 key \u8fdb\u884c Lambda \u8f6c\u6362\u3002\u6709\u5173 Lambda \u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,a.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["StarRocks \u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u67e5\u8be2\u6570\u636e\u6e56\u4e2d\u7684\u590d\u6742\u6570\u636e\u7c7b\u578b MAP \u548c STRUCT\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 StarRocks \u63d0\u4f9b\u7684 external catalog \u65b9\u5f0f\u6765\u67e5\u8be2 Apache Hive\u2122\uff0cApache Hudi\uff0cApache Iceberg \u4e2d\u7684 MAP \u548c STRUCT \u6570\u636e\u3002\u4ec5\u652f\u6301\u67e5\u8be2 ORC \u548c Parquet \u7c7b\u578b\u6587\u4ef6\u3002\u60f3\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 external catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e90\uff0c\u53c2\u89c1 ",(0,a.jsx)(n.a,{href:"/doc/zh/3.0/data_source/catalog/catalog_overview",children:"Catalog \u6982\u8ff0"})," \u548c\u5bf9\u5e94\u7684 catalog \u6587\u6863\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"MAP transform_keys(lambda_func, any_map)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_func"})," \u4e5f\u53ef\u4ee5\u653e\u5728 ",(0,a.jsx)(n.code,{children:"any_map"})," \u4e4b\u540e\uff0c \u5373:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"MAP transform_keys(any_map, lambda_func)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"any_map"}),"\uff1a\u8981\u8fdb\u884c\u8fd0\u7b97\u7684 Map \u503c\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_func"}),"\uff1a\u5bf9 ",(0,a.jsx)(n.code,{children:"any_map"})," \u7684\u6240\u6709 key \u8fdb\u884c\u8f6c\u6362\u7684 Lambda \u51fd\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56de map\u3002map \u7684 key \u7c7b\u578b\u7531 Lambda \u51fd\u6570\u7684\u8fd0\u7b97\u7ed3\u679c\u51b3\u5b9a\uff1bvalue \u7684\u7c7b\u578b\u4e0e ",(0,a.jsx)(n.code,{children:"any_map"})," \u4e2d\u7684 value \u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c MAP \u4e2d\u7684\u67d0\u4e2a key \u6216 value \u662f NULL\uff0c\u8be5 NULL \u503c\u6b63\u5e38\u5904\u7406\u5e76\u8fd4\u56de\u3002"}),"\n",(0,a.jsx)(n.p,{children:"Lambda \u51fd\u6570\u91cc\u5fc5\u987b\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4ee3\u8868 key\uff0c\u7b2c\u4e8c\u4e2a\u4ee3\u8868 value\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/map-functions/map_from_arrays",children:"map_from_arrays"})," \u751f\u6210\u4e00\u4e2a map \u503c ",(0,a.jsx)(n.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),"\u3002\u7136\u540e\u5c06 Lambda \u51fd\u6570\u5e94\u7528\u5230 map \u4e2d\u7684\u6bcf\u4e2a key\uff0c\u5bf9 key \u52a0 1\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"mysql> select transform_keys((k,v)->(k+1), col_map) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+------------------------------------------+\n| transform_keys((k, v) -> k + 1, col_map) |\n+------------------------------------------+\n| {2:\"ab\",4:\"cdd\",3:null,null:\"abc\"}       |\n+------------------------------------------+\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>c});var a=s(67294);const r=a.createContext({});function c(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||l:c(e),a.createElement(r.Provider,{value:t},n)}}}]);