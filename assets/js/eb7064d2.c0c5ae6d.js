"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88061],{92744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var r=s(85893),t=s(11151);const c={},i="md5sum_numeric",u={id:"sql-reference/sql-functions/crytographic-functions/md5sum_numeric",title:"md5sum_numeric",description:"Calculates the 128-bit checksum of multiple strings. The checksum is represented by a decimal string of digits.",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/crytographic-functions/md5sum_numeric.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/md5sum_numeric",permalink:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/md5sum_numeric",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/md5sum_numeric.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"md5sum",permalink:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/md5sum"},next:{title:"sha2",permalink:"/doc/en/2.5/sql-reference/sql-functions/crytographic-functions/sha2"}},a={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"md5sum_numeric",children:"md5sum_numeric"}),"\n",(0,r.jsx)(n.p,{children:"Calculates the 128-bit checksum of multiple strings. The checksum is represented by a decimal string of digits."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"LARGEINT md5sum_numeric(VARCHAR expr,...);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr"}),": the string to calculate. It must be of the VARCHAR type."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a checksum of the LARGEINT type. If the input is empty, an error is returned."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select md5sum_numeric(\"starrocks\");\n+-----------------------------------------+\n| md5sum_numeric('starrocks')             |\n+-----------------------------------------+\n| 328761383472799310362963866384446095221 |\n+-----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum_numeric(\"starrocks\",\"star\");\n+-----------------------------------------+\n| md5sum_numeric('starrocks', 'star')     |\n+-----------------------------------------+\n| 163436627872604162110984707546327199448 |\n+-----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum_numeric(null);\n+-----------------------------------------+\n| md5sum_numeric(NULL)                    |\n+-----------------------------------------+\n| 281949768489412648962353822266799178366 |\n+-----------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>u,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function u({components:e,children:n,disableParentContext:s}){let u;return u=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(t.Provider,{value:u},n)}}}]);