"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68035],{99775:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),i=s(11151);const r={},c="if",o={id:"sql-reference/sql-functions/condition-functions/if",title:"if",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/condition-functions/if.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/if",permalink:"/doc/en/sql-reference/sql-functions/condition-functions/if",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/condition-functions/if.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"coalesce",permalink:"/doc/en/sql-reference/sql-functions/condition-functions/coalesce"},next:{title:"ifnull",permalink:"/doc/en/sql-reference/sql-functions/condition-functions/ifnull"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"if",children:"if"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"expr1"})," evaluates to TRUE, returns ",(0,t.jsx)(n.code,{children:"expr2"}),". Otherwise, returns ",(0,t.jsx)(n.code,{children:"expr3"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"if(expr1,expr2,expr3);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the condition. It must be a BOOLEAN value."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"})," and ",(0,t.jsx)(n.code,{children:"expr3"})," must be compatible in data type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["The return value has the same type as ",(0,t.jsx)(n.code,{children:"expr2"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select if(true,1,2);\n+----------------+\n| if(TRUE, 1, 2) |\n+----------------+\n|              1 |\n+----------------+\n\nmysql> select if(false,2.14,2);\n+--------------------+\n| if(FALSE, 2.14, 2) |\n+--------------------+\n|               2.00 |\n+--------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:o},n)}}}]);