"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51128],{40591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},r="bitmap_has_any",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_has_any",title:"bitmap_has_any",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_has_any.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_has_any",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_has_any",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_has_any.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_from_string",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_from_string"},next:{title:"bitmap_hash",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_hash"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_has_any",children:"bitmap_has_any"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calculates whether there are intersecting elements between two Bitmap columns, and the return value is Boolean value."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"B00LEAN BITMAP_HAS_ANY(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_has_any(to_bitmap(1),to_bitmap(2)) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nMySQL > select bitmap_has_any(to_bitmap(1),to_bitmap(1)) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_HAS_ANY,BITMAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:c},n)}}}]);