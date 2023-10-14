"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98402],{20488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(85893),i=t(11151);const r={},l="sleep",c={id:"sql-reference/sql-functions/utility-functions/sleep",title:"sleep",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/utility-functions/sleep.md",sourceDirName:"sql-reference/sql-functions/utility-functions",slug:"/sql-reference/sql-functions/utility-functions/sleep",permalink:"/doc/en/2.5/sql-reference/sql-functions/utility-functions/sleep",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/utility-functions/sleep.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"last_query_id",permalink:"/doc/en/2.5/sql-reference/sql-functions/utility-functions/last_query_id"},next:{title:"uuid",permalink:"/doc/en/2.5/sql-reference/sql-functions/utility-functions/uuid"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sleep",children:"sleep"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Delays the execution of an operation for a specified period of time (in seconds) and returns a BOOLEAN value to indicate whether the sleep is completed without interruption. ",(0,s.jsx)(n.code,{children:"1"})," is returned if the sleep is completed without interruption. Otherwise, ",(0,s.jsx)(n.code,{children:"0"})," is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN sleep(INT x);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"}),": the duration for which you want to delay the execution of an operation. It must be of the INT type. Unit: seconds. If the input is is NULL, NULL is returned immediately without sleeping."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the BOOLEAN type."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select sleep(3);\n+----------+\n| sleep(3) |\n+----------+\n|        1 |\n+----------+\n1 row in set (3.00 sec)\n\nselect sleep(NULL);\n+-------------+\n| sleep(NULL) |\n+-------------+\n|        NULL |\n+-------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"SLEEP, sleep"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:c},n)}}}]);