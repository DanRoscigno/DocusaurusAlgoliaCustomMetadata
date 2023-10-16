"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54825],{95589:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=s(85893),r=s(11151);const c={displayed_sidebar:"English"},i="aes_encrypt",a={id:"sql-reference/sql-functions/crytographic-functions/aes_encrypt",title:"aes_encrypt",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/aes_encrypt",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"aes_decrypt",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/aes_decrypt"},next:{title:"base64_decode_binary",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_binary"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aes_encrypt",children:"aes_encrypt"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Uses the AES_128_ECB algorithm to encrypt a string and returns a binary string."}),"\n",(0,t.jsx)(n.p,{children:"AES is short for advanced encryption standard and ECB is short for electronic code book. The key used to encrypt the string is a 128-bit string."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"aes_encrypt(str,key_str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to encrypt. It must be of the VARCHAR type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"key_str"}),": the key used to encrypt ",(0,t.jsx)(n.code,{children:"str"}),". It must be of the VARCHAR type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type. If the input is NULL, NULL is returned."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Use this function to AES encrypt ",(0,t.jsx)(n.code,{children:"starrocks"})," and convert the encrypted string into a Base64-encoded string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select to_base64(AES_ENCRYPT('starrocks','F3229A0B371ED2D9441B830D21A390C3'));\n+-------------------------------------------------------------------------+\n| to_base64(aes_encrypt('starrocks', 'F3229A0B371ED2D9441B830D21A390C3')) |\n+-------------------------------------------------------------------------+\n| uv/Lhzm74syo8JlfWarwKA==                                                |\n+-------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:a},n)}}}]);