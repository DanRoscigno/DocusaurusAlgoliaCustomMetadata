"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15241],{30738:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var a=s(85893),r=s(11151);const t={displayed_sidebar:"English"},l="transform_keys",c={id:"sql-reference/sql-functions/map-functions/transform_keys",title:"transform_keys",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/transform_keys.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/transform_keys",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/transform_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/transform_keys.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"map_values",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_values"},next:{title:"transform_values",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/transform_values"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"transform_keys",children:"transform_keys"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Transforms keys in a map using a ",(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"})," and produces a new key for each entry in the map."]}),"\n",(0,a.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"MAP transform_keys(lambda_func, any_map)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_func"})," can also be placed after ",(0,a.jsx)(n.code,{children:"any_map"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"MAP transform_keys(any_map, lambda_func)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"any_map"}),": the Map."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_func"}),": the Lambda expression you want to apply to ",(0,a.jsx)(n.code,{children:"any_map"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(n.p,{children:["Returns a map value where the data types of keys are determined by the result of the Lambda expression and the data types of values are the same as values in ",(0,a.jsx)(n.code,{children:"any_map"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,a.jsx)(n.p,{children:"If a key or value in the original map is NULL, NULL is processed as a normal value."}),"\n",(0,a.jsx)(n.p,{children:"The Lambda expression must have two parameters. The first parameter represents the key. The second parameter represents the value."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["The following example uses ",(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/map-functions/map_from_arrays",children:"map_from_arrays"})," to generate a map value ",(0,a.jsx)(n.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),". Then the Lambda expression is applied to each key to increment the key by 1."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"mysql> select transform_keys((k,v)->(k+1), col_map) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+------------------------------------------+\n| transform_keys((k, v) -> k + 1, col_map) |\n+------------------------------------------+\n| {2:\"ab\",4:\"cdd\",3:null,null:\"abc\"}       |\n+------------------------------------------+\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var a=s(67294);const r=a.createContext({});function t(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:t(e),a.createElement(r.Provider,{value:c},n)}}}]);