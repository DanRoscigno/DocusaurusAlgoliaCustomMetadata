"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75797],{62088:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=s(85893),c=s(11151);const l={displayed_sidebar:"Chinese"},i="map_values",r={id:"sql-reference/sql-functions/map-functions/map_values",title:"map_values",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/map_values.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_values",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/map_values",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/map-functions/map_values.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"map_size",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/map_size"},next:{title:"transform_keys",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/transform_keys"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u67e5\u8be2 StarRocks \u672c\u5730\u8868\u4e2d\u7684 MAP \u6570\u636e",id:"\u67e5\u8be2-starrocks-\u672c\u5730\u8868\u4e2d\u7684-map-\u6570\u636e",level:3},{value:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684 MAP \u6570\u636e",id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684-map-\u6570\u636e",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3",a:"a"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"map_values",children:"map_values"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56de Map \u4e2d\u6240\u6709 Value \u7ec4\u6210\u7684\u6570\u7ec4\u3002MAP \u91cc\u4fdd\u5b58\u7684\u662f\u952e\u503c\u5bf9 (key-value pair)\uff0c\u6bd4\u5982 ",(0,a.jsx)(n.code,{children:'{"a":1, "b":2}'}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"map_values(any_map)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"any_map"}),":  \u8981\u83b7\u53d6 Values \u7684 MAP \u503c\uff0c\u5fc5\u987b\u662f MAP \u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56de ARRAY \u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u683c\u5f0f\u4e3a ",(0,a.jsx)(n.code,{children:"array<valueType>"}),"\u3002",(0,a.jsx)(n.code,{children:"valueType"})," \u7684\u6570\u636e\u7c7b\u578b\u548c MAP \u503c\u91cc\u7684 Value \u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u8be2-starrocks-\u672c\u5730\u8868\u4e2d\u7684-map-\u6570\u636e",children:"\u67e5\u8be2 StarRocks \u672c\u5730\u8868\u4e2d\u7684 MAP \u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["3.1 \u7248\u672c\u652f\u6301\u5728\u5efa\u8868\u65f6\u5b9a\u4e49 MAP \u7c7b\u578b\u7684\u5217\uff0c\u4ee5\u521b\u5efa\u8868 ",(0,a.jsx)(n.code,{children:"test_map"})," \u4e3a\u4f8b\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_map(\n    col_int INT,\n    col_map MAP<VARCHAR(50),INT>\n  )\nDUPLICATE KEY(col_int);\n\nINSERT INTO test_map VALUES\n(1,map{"a":1,"b":2}),\n(2,map{"c":3}),\n(3,map{"d":4,"e":5});\n\nSELECT * FROM test_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u83b7\u53d6 ",(0,a.jsx)(n.code,{children:"col_map"})," \u5217\u6bcf\u884c\u7684\u6240\u6709 values\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SELECT map_values(col_map) FROM test_map ORDER BY col_int;\n+---------------------+\n| map_values(col_map) |\n+---------------------+\n| [1,2]               |\n| [3]                 |\n| [4,5]               |\n+---------------------+\n3 rows in set (0.04 sec)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684-map-\u6570\u636e",children:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684 MAP \u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5047\u8bbe Hive \u4e2d\u6709\u8868 ",(0,a.jsx)(n.code,{children:"hive_map"}),"\uff0c\u6570\u636e\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:'SELECT * FROM hive_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 StarRocks \u96c6\u7fa4\u4e2d",(0,a.jsx)(n.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog#%E5%88%9B%E5%BB%BA-hive-catalog",children:"\u521b\u5efa Hive catalog"}),"\u6765\u8bbf\u95ee\u8be5\u8868\uff0c\u83b7\u53d6 ",(0,a.jsx)(n.code,{children:"col_map"})," \u5217\u6bcf\u884c\u7684\u6240\u6709 values\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SELECT map_values(col_map) FROM hive_map ORDER BY col_int;\n+---------------------+\n| map_values(col_map) |\n+---------------------+\n| [1,2]               |\n| [3]                 |\n| [4,5]               |\n+---------------------+\n3 rows in set (0.04 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var a=s(67294);const c=a.createContext({});function l(e){const n=a.useContext(c);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:l(e),a.createElement(c.Provider,{value:r},n)}}}]);