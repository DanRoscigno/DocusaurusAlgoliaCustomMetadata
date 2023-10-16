"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55232],{84113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const a={displayed_sidebar:"English"},r="bitmap_hash",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_hash",title:"bitmap_hash",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_hash.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_hash",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_hash.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_has_any",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_has_any"},next:{title:"bitmap_intersect",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_intersect"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_hash",children:"bitmap_hash"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Calculates a 32-bit hash value for any type of input and return the bitmap containing the hash value. It is mainly used for the stream load task to import non integer fields into the bitmap field of the StarRocks table. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,device_id, device_id=bitmap_hash(device_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP BITMAP_HASH(expr)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_hash('hello'));\n+------------------------------------+\n| bitmap_count(bitmap_hash('hello')) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n\nselect bitmap_to_string(bitmap_hash('hello'));\n+----------------------------------------+\n| bitmap_to_string(bitmap_hash('hello')) |\n+----------------------------------------+\n| 1321743225                             |\n+----------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"BITMAP_HASH,BITMAP"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:c},t)}}}]);