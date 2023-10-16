"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[5321],{74197:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=t(85893),r=t(11151);const a={displayed_sidebar:"English"},i="VARCHAR",c={id:"sql-reference/sql-statements/data-types/VARCHAR",title:"VARCHAR",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-types/VARCHAR.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/VARCHAR",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-types/VARCHAR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/VARCHAR.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"TINYINT",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-types/TINYINT"},next:{title:"Data type overview",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-types/data-type-list"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"varchar",children:"VARCHAR"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"VARCHAR(M)"}),"\n",(0,n.jsxs)(s.p,{children:["A variable-length string. ",(0,n.jsx)(s.code,{children:"M"})," indicates the length of the string. The default value is ",(0,n.jsx)(s.code,{children:"1"}),". Unit: bytes."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["In versions earlier than StarRocks 2.1, the value range of ",(0,n.jsx)(s.code,{children:"M"})," is 1\u201365533."]}),"\n",(0,n.jsxs)(s.li,{children:["[Preview] In StarRocks 2.1 and later versions, the value range of ",(0,n.jsx)(s.code,{children:"M"})," is 1\u20131048576."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Create a table and specify the column type as VARCHAR."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'CREATE TABLE varcharDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    pd_type VARCHAR(20) COMMENT "range char(m),m in (1-65533) "\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk) BUCKETS 4;\n'})})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:c},s)}}}]);