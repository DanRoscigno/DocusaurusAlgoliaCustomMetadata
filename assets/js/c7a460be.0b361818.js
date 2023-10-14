"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78048],{48905:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(85893),o=s(11151);const r={},c="json_query",a={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",title:"json_query",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",permalink:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"json_length",permalink:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length"},next:{title:"json_string",permalink:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json_query",children:"json_query"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Queries the value of an element that can be located by the ",(0,t.jsx)(n.code,{children:"json_path"})," expression in a JSON object and returns a JSON value."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"json_query(json_object_expr, json_path)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_object_expr"}),": the expression that represents the JSON object. The object can be a JSON column, or a JSON object that is produced by a JSON constructor function such as PARSE_JSON."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_path"}),": the expression that represents the path to an element in the JSON object. The value of this parameter is a string. For information about the JSON path syntax that is supported by StarRocks, see ",(0,t.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",children:"Overview of JSON functions and operators"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a JSON value."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the element does not exist, the json_query function returns an SQL value of ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Query the value of an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a.b'"})," expression in the specified JSON object. In this example, the json_query function returns a JSON value of ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_query(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.b') ;\n\n       -> 1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Query the value of an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a.c'"})," expression in the specified JSON object. In this example, the element does not exist. Therefore, the json_query function returns an SQL value of ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_query(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.c') ;\n\n       -> NULL\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: Query the value of an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a[2]'"})," expression in the specified JSON object. In this example, the JSON object, which is an array named a, contains an element at index 2, and the value of the element is 3. Therefore, the JSON_QUERY function returns a JSON value of ",(0,t.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_query(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[2]') ;\n\n       -> 3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 4: Query an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a[3]'"})," expression in the specified JSON object. In this example, the JSON object, which is an array named a, does not contain an element at index 3. Therefore, the json_query function returns an SQL value of ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_query(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[3]') ;\n\n       -> NULL\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const o=t.createContext({});function r(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(o.Provider,{value:a},n)}}}]);