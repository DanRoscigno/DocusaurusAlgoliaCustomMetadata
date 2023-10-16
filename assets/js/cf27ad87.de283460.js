"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4580],{97475:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const a={displayed_sidebar:"English"},i="reverse",l={id:"sql-reference/sql-functions/array-functions/reverse",title:"reverse",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/reverse.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/reverse",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/reverse",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/reverse.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"element_at",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/element_at"},next:{title:"unnest",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/unnest"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"reverse",children:"reverse"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Reverses a string or array. Returns a string or array with the characters in the string or array elements in reverse order."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"reverse(param)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"param"}),": the string or array to reverse. It can be of the VARCHAR, CHAR, or ARRAY type."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, this function supports only one-dimensional arrays and the array elements cannot be of the DECIMAL type. This function supports the following types of array elements: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, VARCHAR, DECIMALV2, DATETIME, DATE, and JSON. ",(0,s.jsx)(n.strong,{children:"JSON is supported from 2.5."})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["The return type is the same as ",(0,s.jsx)(n.code,{children:"param"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Reverse a string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT REVERSE('hello');\n+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Reverse an array."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MYSQL> SELECT REVERSE([4,1,5,8]);\n+--------------------+\n| REVERSE([4,1,5,8]) |\n+--------------------+\n| [8,5,1,4]          |\n+--------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>a});var s=r(67294);const t=s.createContext({});function a(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:a(e),s.createElement(t.Provider,{value:l},n)}}}]);