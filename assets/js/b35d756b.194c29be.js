"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34489],{15139:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),l=s(11151);const r={displayed_sidebar:"English"},i="json_length",o={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",title:"json_length",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"json_keys",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys"},next:{title:"json_query",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json_length",children:"json_length"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the length of a JSON document. If a path is specified, this function returns the length of the value identified by the path."}),"\n",(0,t.jsx)(n.p,{children:"The length of a document is determined according to the following rules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The length of a scalar value is 1. For example, the length of ",(0,t.jsx)(n.code,{children:"1"}),", ",(0,t.jsx)(n.code,{children:'"a"'}),", ",(0,t.jsx)(n.code,{children:"true"}),", ",(0,t.jsx)(n.code,{children:"false"}),", and ",(0,t.jsx)(n.code,{children:"null"})," is 1."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The length of an array is the number of array elements. For example, the length of ",(0,t.jsx)(n.code,{children:"[1, 2]"})," is 2."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The length of an object is the number of object members. For example, the length of ",(0,t.jsx)(n.code,{children:'{"a": 1}'})," is 1."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The length of nested arrays or objects does not count. For example, the length of ",(0,t.jsx)(n.code,{children:'{"a": [1, 2]}'})," is 1, because the nested array ",(0,t.jsx)(n.code,{children:"[1, 2]"})," is not calculated into length."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"json_length(json_doc[, path])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_doc"}),": required, the JSON document for which to return the length."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"path"}),": optional. It is used to return the length of a value within the document. The path generally starts with ",(0,t.jsx)(n.code,{children:"$"})," and uses ",(0,t.jsx)(n.code,{children:"."})," as the path separator. ",(0,t.jsx)(n.code,{children:"[]"})," is used as the array subscript, which starts from 0."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the INT type."}),"\n",(0,t.jsx)(n.p,{children:"An error is returned if the JSON document is not a valid document."}),"\n",(0,t.jsx)(n.p,{children:"0 is returned in any of the following scenarios:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"path"})})," does not identify a value in the document."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The path is not a valid path expression."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The path contains the ",(0,t.jsx)(n.code,{children:"*"})," or ",(0,t.jsx)(n.code,{children:"**"})," wildcard."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Return the length of a scalar value."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select json_length('1');\n+------------------+\n| json_length('1') |\n+------------------+\n|                1 |\n+------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Return the length of an empty object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select json_length('{}');\n+-------------------+\n| json_length('{}') |\n+-------------------+\n|                 0 |\n+-------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 3: Return the length of an object that has data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'select json_length(\'{"Name": "Homer"}\');\n+----------------------------------+\n| json_length(\'{"Name": "Homer"}\') |\n+----------------------------------+\n|                                1 |\n+----------------------------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 4: Return the length of a JSON array."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select json_length('[1, 2, 3]');\n+--------------------------+\n| json_length('[1, 2, 3]') |\n+--------------------------+\n|                        3 |\n+--------------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 5: Return the length of a JSON array in which one element has a nested array."}),"\n",(0,t.jsxs)(n.p,{children:["The nested array ",(0,t.jsx)(n.code,{children:"[3, 4]"})," is not calculated into length."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select json_length('[1, 2, [3, 4]]');\n+-------------------------------+\n| json_length('[1, 2, [3, 4]]') |\n+-------------------------------+\n|                             3 |\n+-------------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 6: Return the length of an object specified by path ",(0,t.jsx)(n.code,{children:"$.Person"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SET @file = \'{  \n    "Person": {    \n       "Name": "Homer", \n       "Age": 39,\n       "Hobbies": ["Eating", "Sleeping"]  \n    }\n }\';\nselect json_length(@file, \'$.Person\') \'Result\';\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example 7: Return the length of the value specified by path ",(0,t.jsx)(n.code,{children:"$.y"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select json_length('{\"x\": 1, \"y\": [1, 2]}', '$.y');\n+---------------------------------------------+\n| json_length('{\"x\": 1, \"y\": [1, 2]}', '$.y') |\n+---------------------------------------------+\n|                                           2 |\n+---------------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:o},n)}}}]);