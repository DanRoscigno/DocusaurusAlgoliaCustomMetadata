"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47241],{7053:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=s(85893),r=s(11151);const c={},a="VARCHAR",l={id:"sql-reference/sql-statements/data-types/VARCHAR",title:"VARCHAR",description:"\u63cf\u8ff0",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/data-types/VARCHAR.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/VARCHAR",permalink:"/doc/zh/sql-reference/sql-statements/data-types/VARCHAR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/VARCHAR.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"TINYINT",permalink:"/doc/zh/sql-reference/sql-statements/data-types/TINYINT"},next:{title:"\u6570\u636e\u7c7b\u578b\u6982\u8ff0",permalink:"/doc/zh/sql-reference/sql-statements/data-types/data-type-list"}},i={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"varchar",children:"VARCHAR"}),"\n",(0,n.jsx)(t.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsx)(t.p,{children:"VARCHAR(M)"}),"\n",(0,n.jsxs)(t.p,{children:["\u53d8\u957f\u5b57\u7b26\u4e32\u3002",(0,n.jsx)(t.code,{children:"M"})," \u4ee3\u8868\u53d8\u957f\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u5355\u4f4d\uff1a\u5b57\u8282\uff0c\u9ed8\u8ba4\u53d6\u503c\u4e3a ",(0,n.jsx)(t.code,{children:"1"}),"\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["StarRocks 2.1 \u4e4b\u524d\u7684\u7248\u672c\uff0c",(0,n.jsx)(t.code,{children:"M"})," \u7684\u53d6\u503c\u8303\u56f4\u4e3a 1~65533\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:["\u3010\u516c\u6d4b\u4e2d\u3011\u81ea StarRocks 2.1 \u7248\u672c\u5f00\u59cb\uff0c",(0,n.jsx)(t.code,{children:"M"})," \u7684\u53d6\u503c\u8303\u56f4\u4e3a 1~1048576\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(t.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE varcharDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    pd_type VARCHAR(20) COMMENT "range char(m),m in (1-65533) "\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>c});var n=s(67294);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:c(e),n.createElement(r.Provider,{value:l},t)}}}]);