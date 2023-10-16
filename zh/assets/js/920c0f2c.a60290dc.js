"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44354],{83600:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var a=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},c="transform_values",o={id:"sql-reference/sql-functions/map-functions/transform_values",title:"transform_values",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/transform_values.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/transform_values",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/transform_values",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/map-functions/transform_values.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"transform_keys",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/transform_keys"},next:{title:"Binary Functions",permalink:"/doc/zh/docs/category/binary-functions-1"}},i={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"transform_values",children:"transform_values"}),"\n",(0,a.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsxs)(e.p,{children:["\u5bf9 Map \u4e2d\u7684 value \u8fdb\u884c lambda \u8f6c\u6362\u3002\u6709\u5173 Lambda \u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,a.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Haskell",children:"map transform_values(lambda_func, any_map)\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"lambda_func"})," \u4e5f\u53ef\u4ee5\u653e\u5728 ",(0,a.jsx)(e.code,{children:"any_map"})," \u4e4b\u540e\uff0c\u5373:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Haskell",children:"map transform_values(any_map, lambda_func)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"any_map"}),"\uff1a\u8981\u8fdb\u884c\u8fd0\u7b97\u7684 Map \u503c\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"lambda_func"}),"\uff1a\u5bf9 ",(0,a.jsx)(e.code,{children:"any_map"})," \u7684\u6240\u6709 value \u8fdb\u884c\u8f6c\u6362\u7684 Lambda \u51fd\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd4\u56de map\u3002map \u7684 value \u7c7b\u578b\u7531 Lambda \u51fd\u6570\u7684\u8fd0\u7b97\u7ed3\u679c\u51b3\u5b9a\uff1bkey \u7684\u7c7b\u578b\u4e0e ",(0,a.jsx)(e.code,{children:"any_map"})," \u4e2d\u7684 key \u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c MAP \u4e2d\u7684\u67d0\u4e2a key \u6216 value \u662f NULL\uff0c\u8be5 NULL \u503c\u6b63\u5e38\u5904\u7406\u5e76\u8fd4\u56de\u3002"}),"\n",(0,a.jsx)(e.p,{children:"Lambda \u51fd\u6570\u91cc\u5fc5\u987b\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4ee3\u8868 key\uff0c\u7b2c\u4e8c\u4e2a\u4ee3\u8868 value\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsxs)(e.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,a.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-functions/map-functions/map_from_arrays",children:"map_from_arrays"})," \u751f\u6210\u4e00\u4e2a map \u503c ",(0,a.jsx)(e.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),"\u3002\u7136\u540e\u5c06 Lambda \u51fd\u6570\u5e94\u7528\u5230 map \u4e2d\u7684\u6bcf\u4e2a value\u3002\u7b2c\u4e00\u4e2a\u793a\u4f8b\u5c06\u6bcf\u4e2a value \u53d8\u4e3a 1\uff0c\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u5c06\u6bcf\u4e2a value \u53d8\u4e3a null\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-SQL",children:"mysql> select transform_values((k,v)->1, col_map) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+----------------------------------------+\n| transform_values((k, v) -> 1, col_map) |\n+----------------------------------------+\n| {1:1,3:1,2:1,null:1}                   |\n+----------------------------------------+\n1 row in set (0.02 sec)\n\n\nmysql> select transform_values((k,v)->null, col_map) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+--------------------------------------------+\n| transform_values((k, v) -> NULL, col_map)  |\n+--------------------------------------------+\n| {1:null,3:null,2:null,null:null} |\n+--------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>r});var a=s(67294);const l=a.createContext({});function r(n){const e=a.useContext(l);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||c:r(n),a.createElement(l.Provider,{value:o},e)}}}]);