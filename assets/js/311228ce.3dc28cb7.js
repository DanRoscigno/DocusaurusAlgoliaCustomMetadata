"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87497],{80368:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(85893),t=s(11151);const i={},c="rpad",o={id:"sql-reference/sql-functions/string-functions/rpad",title:"rpad",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/rpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rpad",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/rpad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/rpad.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"right",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/right"},next:{title:"rtrim",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/rtrim"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rpad",children:"rpad"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["This function returns strings with a length of ",(0,r.jsx)(n.code,{children:"len"})," (starting counting from the first syllable) in ",(0,r.jsx)(n.code,{children:"str"}),". If ",(0,r.jsx)(n.code,{children:"len"})," is longer than ",(0,r.jsx)(n.code,{children:"str"}),", the return value is lengthened to ",(0,r.jsx)(n.code,{children:"len"})," characters by adding pad characters behind ",(0,r.jsx)(n.code,{children:"str"}),".  If ",(0,r.jsx)(n.code,{children:"str"})," is longer than ",(0,r.jsx)(n.code,{children:"len"}),", the return value is shortened to ",(0,r.jsx)(n.code,{children:"len"})," characters. ",(0,r.jsx)(n.code,{children:"len"})," means the length of characters, not bytes."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR rpad(VARCHAR str, INT len, VARCHAR pad)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nMySQL > SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(n.p,{children:"RPAD"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:o},n)}}}]);