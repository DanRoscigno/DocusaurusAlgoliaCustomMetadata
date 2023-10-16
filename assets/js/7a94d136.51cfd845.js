"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6173],{99683:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=a(85893),t=a(11151);const i={displayed_sidebar:"English"},r="map_size",c={id:"sql-reference/sql-functions/map-functions/map_size",title:"map_size",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_size.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_size",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_size",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_size.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"map_keys",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_keys"},next:{title:"map_values",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_values"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Query MAP data from a StarRocks native table",id:"query-map-data-from-a-starrocks-native-table",level:3},{value:"Query MAP data from data lake",id:"query-map-data-from-data-lake",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"map_size",children:"map_size"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the number of elements in a MAP value. MAP is an unordered collection of key-value pairs, for example, ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'}),". One key-value pair constitutes one element, for example, ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'})," contains two elements."]}),"\n",(0,s.jsxs)(n.p,{children:["This function has an alias ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/map-functions/cardinality",children:"cardinality()"}),". It is supported from v2.5."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT map_size(any_map)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_map"}),": the MAP value from which you want to retrieve the number of elements."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the INT type."}),"\n",(0,s.jsx)(n.p,{children:"If the input is NULL, NULL is returned."}),"\n",(0,s.jsx)(n.p,{children:"If a key or value in the MAP value is NULL, NULL is processed as a normal value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"query-map-data-from-a-starrocks-native-table",children:"Query MAP data from a StarRocks native table"}),"\n",(0,s.jsxs)(n.p,{children:["From v3.1 onwards, StarRocks supports defining MAP columns when you create a table. This example uses table ",(0,s.jsx)(n.code,{children:"test_map"}),", which contains the following data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'CREATE TABLE test_map(\n    col_int INT,\n    col_map MAP<VARCHAR(50),INT>\n  )\nDUPLICATE KEY(col_int);\n\nINSERT INTO test_map VALUES\n(1,map{"a":1,"b":2}),\n(2,map{"c":3}),\n(3,map{"d":4,"e":5});\n\nSELECT * FROM test_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Obtain the number of elements in each row of the ",(0,s.jsx)(n.code,{children:"col_map"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select map_size(col_map) from test_map order by col_int;\n+-------------------+\n| map_size(col_map) |\n+-------------------+\n|                 2 |\n|                 1 |\n|                 2 |\n+-------------------+\n3 rows in set (0.05 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"query-map-data-from-data-lake",children:"Query MAP data from data lake"}),"\n",(0,s.jsxs)(n.p,{children:["This example uses Hive table ",(0,s.jsx)(n.code,{children:"hive_map"}),", which contains the following data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:'SELECT * FROM hive_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After a ",(0,s.jsx)(n.a,{href:"/doc/docs/data_source/catalog/hive_catalog#create-a-hive-catalog",children:"Hive catalog"})," is created in your cluster, you can use this catalog and the map_size() function to obtain the number of elements in each row of the ",(0,s.jsx)(n.code,{children:"col_map"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select map_size(col_map) from hive_map order by col_int;\n+-------------------+\n| map_size(col_map) |\n+-------------------+\n|                 2 |\n|                 1 |\n|                 2 |\n+-------------------+\n3 rows in set (0.05 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>i});var s=a(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||r:i(e),s.createElement(t.Provider,{value:c},n)}}}]);