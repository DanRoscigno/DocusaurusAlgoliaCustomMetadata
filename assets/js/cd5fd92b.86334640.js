"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16040],{49106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=n(85893),a=n(11151);const r={},c="DATE",i={id:"sql-reference/sql-statements/data-types/DATE",title:"DATE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/DATE.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/DATE",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/DATE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/DATE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CHAR",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/CHAR"},next:{title:"DATETIME",permalink:"/doc/en/3.0/sql-reference/sql-statements/data-types/DATETIME"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date",children:"DATE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["DATE type. The current value range is ['0000-01-01','9999-12-31'] and the default format is ",(0,s.jsx)(t.code,{children:"YYYY-MM-DD"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Example 1: Specify a column as the DATE type when you create a table."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE dateDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    make_time DATE NOT NULL COMMENT "YYYY-MM-DD"\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Example 2: Convert a DATETIME value into a DATE value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> SELECT DATE('2003-12-31 01:02:03');\n-> '2003-12-31'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more information, see the ",(0,s.jsx)(t.a,{href:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/date",children:"date"})," function."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),s.createElement(a.Provider,{value:i},t)}}}]);