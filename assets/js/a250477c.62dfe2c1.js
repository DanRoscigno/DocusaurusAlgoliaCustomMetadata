"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14931],{95208:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=a(85893),s=a(11151);const t={displayed_sidebar:"English"},i="array_max",c={id:"sql-reference/sql-functions/array-functions/array_max",title:"array_max",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_max.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_max",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_max",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_max.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_map",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_map"},next:{title:"array_min",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_min"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array_max",children:"array_max"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Obtains the maximum value of all data in an ARRAY and return this result."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"array_max(array(type))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_max([113, 11, 12]);\n+------------------------+\n| array_max([113,11,12]) |\n+------------------------+\n| 113                    |\n+------------------------+\n\nmysql> select array_max([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_max([11.33,11.11,12.324]) |\n+---------------------------------+\n| 12.324                          |\n+---------------------------------+\n\nmysql> select array_max([cast('2020-02-25 11:35:17' as datetime), cast('2019-08-25 17:07:10' as datetime), cast('2025-08-25 17:07:10' as datetime)]);\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| array_max([CAST('2020-02-25 11:35:17' AS DATETIME),CAST('2019-08-25 17:07:10' AS DATETIME),CAST('2025-08-25 17:07:10' AS DATETIME)]) |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| 2025-08-25 17:07:10                                                                                                                  |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(n.p,{children:"ARRAY_MAX,ARRAY"})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>t});var r=a(67294);const s=r.createContext({});function t(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||i:t(e),r.createElement(s.Provider,{value:c},n)}}}]);