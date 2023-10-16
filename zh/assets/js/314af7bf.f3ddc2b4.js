"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96617],{75118:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var n=t(85893),r=t(11151);const a={displayed_sidebar:"Chinese"},c="SMALLINT",i={id:"sql-reference/sql-statements/data-types/SMALLINT",title:"SMALLINT",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-types/SMALLINT.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/SMALLINT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/SMALLINT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/SMALLINT.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"LARGEINT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/LARGEINT"},next:{title:"STRING",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/STRING"}},l={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"smallint",children:"SMALLINT"}),"\n",(0,n.jsx)(s.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsx)(s.p,{children:"2 \u5b57\u8282\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 [-32768, 32767]\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a SMALLINT\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:'CREATE TABLE smallintDemo (\n    pk SMALLINT COMMENT "range [-32768, 32767]"\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n'})})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:i},s)}}}]);