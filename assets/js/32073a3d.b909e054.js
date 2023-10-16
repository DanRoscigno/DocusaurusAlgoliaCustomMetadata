"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65818],{60436:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=a(85893),l=a(11151);const r={displayed_sidebar:"English"},i="map_filter",c={id:"sql-reference/sql-functions/map-functions/map_filter",title:"map_filter",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_filter.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_filter",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_filter",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/map-functions/map_filter.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"map_concat",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_concat"},next:{title:"map_from_arrays",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_from_arrays"}},t={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Use <code>array&lt;boolean&gt;</code>",id:"use-arrayboolean",level:3},{value:"Use Lambda expression",id:"use-lambda-expression",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"map_filter",children:"map_filter"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Filters key-value pairs in a map by applying a Boolean array or a ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"})," to each key-value pair. The pair that evaluates to ",(0,s.jsx)(n.code,{children:"true"})," is returned."]}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"MAP map_filter(any_map, array<boolean>)\nMAP map_filter(lambda_func, any_map)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"map_filter(any_map, array<boolean>)"})}),"\n",(0,s.jsxs)(n.p,{children:["Evaluates key-value pairs in ",(0,s.jsx)(n.code,{children:"any_map"})," one by one against ",(0,s.jsx)(n.code,{children:"array<boolean>"})," and returns key-value pairs that evaluate to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"map_filter(lambda_func, any_map)"})}),"\n",(0,s.jsxs)(n.p,{children:["Applies ",(0,s.jsx)(n.code,{children:"lambda_func"})," to the key-value pairs in ",(0,s.jsx)(n.code,{children:"any_map"})," one by one and returns key-value pairs whose result is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_map"}),": the map value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array<boolean>"}),": the Boolean array used to evaluate the map value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lambda_func"}),": the Lambda expression used to evaluate the map value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a map whose data type is the same as ",(0,s.jsx)(n.code,{children:"any_map"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"any_map"})," is NULL, NULL is returned. If ",(0,s.jsx)(n.code,{children:"array<boolean>"})," is null, an empty map is returned."]}),"\n",(0,s.jsx)(n.p,{children:"If a key or value in the map value is NULL, NULL is processed as a normal value."}),"\n",(0,s.jsx)(n.p,{children:"The Lambda expression must have two parameters. The first parameter represents the key. The second parameter represents the value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.h3,{id:"use-arrayboolean",children:["Use ",(0,s.jsx)(n.code,{children:"array<boolean>"})]}),"\n",(0,s.jsxs)(n.p,{children:["The following example uses ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/map-functions/map_from_arrays",children:"map_from_arrays()"})," to generate a map value ",(0,s.jsx)(n.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),". Then each key-value pair is evaluated against ",(0,s.jsx)(n.code,{children:"array<boolean>"})," and the pair whose result is ",(0,s.jsx)(n.code,{children:"true"})," is returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql> select map_filter(col_map, array<boolean>[0,0,0,1,1]) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+----------------------------------------------------+\n| map_filter(col_map, ARRAY<BOOLEAN>[0, 0, 0, 1, 1]) |\n+----------------------------------------------------+\n| {null:\"abc\"}                                       |\n+----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select map_filter(null, array<boolean>[0,0,0,1,1]);\n+-------------------------------------------------+\n| map_filter(NULL, ARRAY<BOOLEAN>[0, 0, 0, 1, 1]) |\n+-------------------------------------------------+\n| NULL                                            |\n+-------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select map_filter(col_map, null) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+---------------------------+\n| map_filter(col_map, NULL) |\n+---------------------------+\n| {}                        |\n+---------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-lambda-expression",children:"Use Lambda expression"}),"\n",(0,s.jsxs)(n.p,{children:["The following example uses map_from_arrays() to generate a map value ",(0,s.jsx)(n.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),". Then each key-value pair is evaluated against the Lambda expression and the key-value pair whose value is not null is returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"\nmysql> select map_filter((k,v) -> v is not null,col_map) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+------------------------------------------------+\n| map_filter((k,v) -> v is not null, col_map)    |\n+------------------------------------------------+\n| {1:\"ab\",3:\"cdd\",null:'abc'}                        |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>r});var s=a(67294);const l=s.createContext({});function r(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||i:r(e),s.createElement(l.Provider,{value:c},n)}}}]);