"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35638],{40015:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(85893),t=n(11151);const c={displayed_sidebar:"English"},i="base64_decode_string",o={id:"sql-reference/sql-functions/crytographic-functions/base64_decode_string",title:"base64_decode_string",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_string.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/base64_decode_string",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/base64_decode_string.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"base64_decode_binary",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_binary"},next:{title:"from_base64",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/from_base64"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"base64_decode_string",children:"base64_decode_string"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["This function is the same as ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/from_base64",children:"from_base64"}),".\nDecodes a Base64-encoded string. and an inverse of ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/to_base64",children:"to_base64"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"This function is supported from v3.0."}),"\n",(0,r.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Haskell",children:"base64_decode_string(str);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"str"}),": the string to decode. It must be of the VARCHAR type."]}),"\n",(0,r.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(s.p,{children:"Returns a value of the VARCHAR type. If the input is NULL or an invalid Base64 string, NULL is returned. If the input is empty, an error is returned."}),"\n",(0,r.jsx)(s.p,{children:"This function accepts only one string. More than one input string causes an error."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"\nmysql> select base64_decode_string(to_base64(\"Hello StarRocks\"));\n+----------------------------------------------------+\n| base64_decode_string(to_base64('Hello StarRocks')) |\n+----------------------------------------------------+\n| Hello StarRocks                                    |\n+----------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>c});var r=n(67294);const t=r.createContext({});function c(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:c(e),r.createElement(t.Provider,{value:o},s)}}}]);