"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18381],{25968:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(85893),r=n(11151);const i={displayed_sidebar:"English"},c="URL_DECODE",l={id:"sql-reference/sql-functions/string-functions/url_decode",title:"URL_DECODE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/url_decode.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/url_decode",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/url_decode",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/url_decode.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"UPPER",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/upper"},next:{title:"URL_ENCODE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/url_encode"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"url_decode",children:"URL_DECODE"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Converts an url to a decode string."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-haskell",children:"url_decode(str)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"str"}),": the string to decode. If ",(0,t.jsx)(s.code,{children:"str"})," is not a string type, it will try implicit cast first."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"return-values",children:"Return values"}),"\n",(0,t.jsx)(s.p,{children:"Return an encode string."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plaintext",children:"mysql> select url_decode('https%3A%2F%2Fdocs.starrocks.io%2Fen-us%2Flatest%2Fquick_start%2FDeploy');\n+---------------------------------------------------------------------------------------+\n| url_decode('https%3A%2F%2Fdocs.starrocks.io%2Fen-us%2Flatest%2Fquick_start%2FDeploy') |\n+---------------------------------------------------------------------------------------+\n| https://docs.starrocks.io/en-us/latest/quick_start/Deploy                             |\n+---------------------------------------------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},s)}}}]);