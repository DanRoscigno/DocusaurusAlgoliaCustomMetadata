"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74684],{67686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},a="str_to_map",l={id:"sql-reference/sql-functions/string-functions/str_to_map",title:"str_to_map",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/str_to_map.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/str_to_map",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/str_to_map",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/str_to_map.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"starts_with",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/starts_with"},next:{title:"strcmp",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/strcmp"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"str_to_map",children:"str_to_map"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Splits a given string into key-value pairs using two delimiters and returns a map of the split pairs."}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"MAP<VARCHAR, VARCHAR> str_to_map(VARCHAR content[, VARCHAR delimiter[, VARCHAR map_delimiter]])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"content"}),": required, the string expression to split."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delimiter"}),": optional, the delimiter used to split ",(0,t.jsx)(n.code,{children:"content"})," into key-value pairs, defaults to ",(0,t.jsx)(n.code,{children:","}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"map_delimiter"}),": optional, the delimiter used to separate each key-value pair, defaults to ",(0,t.jsx)(n.code,{children:":"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a MAP of STRING elements. Any null input results in NULL."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'mysql> SELECT str_to_map(\'a:1|b:2|c:3\', \'|\', \':\') as map;\n+---------------------------+\n| map                       |\n+---------------------------+\n| {"a":"1","b":"2","c":"3"} |\n+---------------------------+\n\nmysql> SELECT str_to_map(\'a:1;b:2;c:3\', \';\', \':\') as map;\n+---------------------------+\n| map                       |\n+---------------------------+\n| {"a":"1","b":"2","c":"3"} |\n+---------------------------+\n\nmysql> SELECT str_to_map(\'a:1,b:2,c:3\', \',\', \':\') as map;\n+---------------------------+\n| map                       |\n+---------------------------+\n| {"a":"1","b":"2","c":"3"} |\n+---------------------------+\n\nmysql> SELECT str_to_map(\'a\') as map;\n+------------+\n| map        |\n+------------+\n| {"a":null} |\n+------------+\n\nmysql> SELECT str_to_map(\'a:1,b:2,c:3\',null, \':\') as map;\n+------+\n| map  |\n+------+\n| NULL |\n+------+\n\nmysql> SELECT str_to_map(\'a:1,b:2,c:null\') as map;\n+------------------------------+\n| map                          |\n+------------------------------+\n| {"a":"1","b":"2","c":"null"} |\n+------------------------------+\n'})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"STR_TO_MAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:l},n)}}}]);