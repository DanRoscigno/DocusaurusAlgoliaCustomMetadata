"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46212],{75818:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(85893),c=s(11151);const o={displayed_sidebar:"English"},r="json_keys",a={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",title:"json_keys",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"json_exists",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists"},next:{title:"json_length",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json_keys",children:"json_keys"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the top-level keys from a JSON object as a JSON array, or, if a ",(0,t.jsx)(n.code,{children:"path"})," is specified, the top-level keys from the path."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"json_keys(json_doc[, path])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_doc"}),": required. The JSON document for which to return the keys. It must be a JSON object."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"path"}),": optional. The path generally starts with ",(0,t.jsx)(n.code,{children:"$"})," and uses ",(0,t.jsx)(n.code,{children:"."})," as the path separator. ",(0,t.jsx)(n.code,{children:"[]"})," is used as the array subscript, which starts from 0."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a JSON array."}),"\n",(0,t.jsx)(n.p,{children:"An empty array is returned if the JSON object is empty."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NULL"})," is returned if the JSON document is not a JSON object or the path does not identify a value in the document."]}),"\n",(0,t.jsxs)(n.p,{children:["If the JSON document is an array nested with a JSON object, you can use the ",(0,t.jsx)(n.code,{children:"path"})," parameter to obtain keys from that object."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Return an empty array because the input JSON object is empty."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select json_keys('{}');\n+-----------------+\n| json_keys('{}') |\n+-----------------+\n| []              |\n+-----------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Return the keys of a JSON object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'select json_keys(\'{"a": 1, "b": 2, "c": 3}\');\n+----------------+\n| json_keys(\'1\') |\n+----------------+\n|["a", "b", "c"] |\n+----------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 3: Return the keys of a JSON object that matches the specified path."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'select json_keys(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.c\');\n+---------------------------------------------------------------------+\n| json_keys(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.c\') |\n+---------------------------------------------------------------------+\n| ["d", "e", "f"]                                                     |\n+---------------------------------------------------------------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 4: The path does not exist."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'select json_keys(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.e\');\n+---------------------------------------------------------------------+\n| json_keys(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.e\') |\n+---------------------------------------------------------------------+\n| NULL                                                                |\n+---------------------------------------------------------------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 5: The JSON document is not a JSON object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'select json_keys(\'[1, 2, {"a": 1, "b": 2}]\');\n+---------------------------------------+\n| json_keys(\'[1, 2, {"a": 1, "b": 2}]\') |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 6: The JSON document is an array nested with a JSON object. A path is specified to obtain keys from that object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'select json_keys(\'[0, 1, {"a": 1, "b": 2}]\', \'$[2]\');\n+-----------------------------------------------+\n| json_keys(\'[0, 1, {"a": 1, "b": 2}]\', \'$[2]\') |\n+-----------------------------------------------+\n| ["a", "b"]                                    |\n+-----------------------------------------------+\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>o});var t=s(67294);const c=t.createContext({});function o(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:o(e),t.createElement(c.Provider,{value:a},n)}}}]);