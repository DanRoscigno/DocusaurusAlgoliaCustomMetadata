"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64128],{45637:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(85893),i=s(11151);const r={},c="ST_AsText,ST_AsWKT",a={id:"sql-reference/sql-functions/spatial-functions/st_astext",title:"ST_AsText,ST_AsWKT",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_astext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_astext",permalink:"/doc/en/3.0/sql-reference/sql-functions/spatial-functions/st_astext",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_astext.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"HLL_CARDINALITY",permalink:"/doc/en/3.0/sql-reference/sql-functions/scalar-functions/hll_cardinality"},next:{title:"ST_Circle",permalink:"/doc/en/3.0/sql-reference/sql-functions/spatial-functions/st_circle"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"st_astextst_aswkt",children:"ST_AsText,ST_AsWKT"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Converts a geometric figure to WKT (Well Known Text) format."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Haskell",children:"VARCHAR ST_AsText(GEOMETRY geo)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,n.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(t.p,{children:"ST_ASTEXT,ST_ASWKT,ST,ASTEXT,ASWKT"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:r(e),n.createElement(i.Provider,{value:a},t)}}}]);