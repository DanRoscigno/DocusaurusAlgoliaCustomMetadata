"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78342],{22743:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},r="bitmap_andnot",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_andnot",title:"bitmap_andnot",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_andnot.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_andnot",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_andnot",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_andnot.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_and",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and"},next:{title:"bitmap_contains",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_contains"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_andnot",children:"bitmap_andnot"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["Returns bitmap values that exist in ",(0,s.jsx)(e.code,{children:"lhs"})," but do not exist in ",(0,s.jsx)(e.code,{children:"rhs"}),", and returns the new bitmap."]}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"bitmap_andnot(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(bitmap_andnot(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,3   |\n+------+\n\nmysql> select bitmap_to_string(bitmap_andnot(bitmap_from_string('1,3,5'), bitmap_from_string('1'))) cnt;\n+------+\n|cnt   |\n+------+\n|3,5   |\n+------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"BITMAP_ANDNOT, BITMAP"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>o,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function o({components:n,children:e,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||r:a(n),s.createElement(i.Provider,{value:o},e)}}}]);