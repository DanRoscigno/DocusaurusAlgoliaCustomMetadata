"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14347],{94673:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const r={},o="bitmap_union_int",a={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union_int",title:"bitmap_union_int",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_union_int.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union_int",permalink:"/doc/en/sql-reference/sql-functions/bitmap-functions/bitmap_union_int",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union_int.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_union_count",permalink:"/doc/en/sql-reference/sql-functions/bitmap-functions/bitmap_union_count"},next:{title:"bitmap_xor",permalink:"/doc/en/sql-reference/sql-functions/bitmap-functions/bitmap_xor"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bitmap_union_int",children:"bitmap_union_int"}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Count the number of different values \u200b\u200bin columns of type TINYINT, SMALLINT and INT, return the sum of COUNT (DISTINCT expr) same."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"BIGINT bitmap_union_int(expr)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"expr"}),": column expression. The supported column type is TINYINT, SMALLINT and INT."]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(e.p,{children:"Returns a value of the BIGINT type."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plaintext",children:"mysql> select bitmap_union_int(k1) from tbl1;\n+------------------------+\n| bitmap_union_int(`k1`) |\n+------------------------+\n|                      2 |\n+------------------------+\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(u,n)})):u(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>a,ah:()=>r});var i=t(67294);const s=i.createContext({});function r(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function a({components:n,children:e,disableParentContext:t}){let a;return a=t?"function"==typeof n?n({}):n||o:r(n),i.createElement(s.Provider,{value:a},e)}}}]);