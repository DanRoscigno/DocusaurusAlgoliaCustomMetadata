"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42880],{80622:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=r(85893),s=r(11151);const a={},i="array_intersect",c={id:"sql-reference/sql-functions/array-functions/array_intersect",title:"array_intersect",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_intersect.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_intersect",permalink:"/doc/en/sql-reference/sql-functions/array-functions/array_intersect",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_intersect.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_generate",permalink:"/doc/en/sql-reference/sql-functions/array-functions/array_generate"},next:{title:"array_join",permalink:"/doc/en/sql-reference/sql-functions/array-functions/array_join"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"array_intersect",children:"array_intersect"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns an array of the elements in the intersection of one or more arrays."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"array_intersect(input0, input1, ...)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"input"}),": one or more arrays whose intersection you want to obtain. Specify arrays in the ",(0,t.jsx)(n.code,{children:"(input0, input1, ...)"})," format and make sure that the arrays that you specify are of the same data type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns an array of the same data type as the arrays that you specify."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> SELECT array_intersect(["SQL", "storage"], ["mysql", "query", "SQL"], ["SQL"])\nAS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| ["SQL"]      |\n+--------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> SELECT array_intersect(["SQL", "storage"], ["mysql", null], [null]) AS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| []           |\n+--------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> SELECT array_intersect(["SQL", null, "storage"], ["mysql", null], [null]) AS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| [null]       |\n+--------------+\n'})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>a});var t=r(67294);const s=t.createContext({});function a(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:a(e),t.createElement(s.Provider,{value:c},n)}}}]);