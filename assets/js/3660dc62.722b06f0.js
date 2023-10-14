"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56699],{49427:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=s(85893),r=s(11151);const a={},i="VARCHAR",c={id:"sql-reference/sql-statements/data-types/VARCHAR",title:"VARCHAR",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/VARCHAR.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/VARCHAR",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/VARCHAR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/VARCHAR.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"TINYINT",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/TINYINT"},next:{title:"Data type overview",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/data-type-list"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"varchar",children:"VARCHAR"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"VARCHAR(M)"}),"\n",(0,n.jsxs)(t.p,{children:["A variable-length string. ",(0,n.jsx)(t.code,{children:"M"})," indicates the length of the string. The default value is ",(0,n.jsx)(t.code,{children:"1"}),". Unit: bytes."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In versions earlier than StarRocks 2.1, the value range of ",(0,n.jsx)(t.code,{children:"M"})," is 1\u201365533."]}),"\n",(0,n.jsxs)(t.li,{children:["[Preview] In StarRocks 2.1 and later versions, the value range of ",(0,n.jsx)(t.code,{children:"M"})," is 1\u20131048576."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Create a table and specify the column type as VARCHAR."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE varcharDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    pd_type VARCHAR(20) COMMENT "range char(m),m in (1-65533) "\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk)\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>a});var n=s(67294);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:c},t)}}}]);