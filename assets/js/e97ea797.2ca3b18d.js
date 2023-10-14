"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52928],{65793:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const i={},c="hex_decode_string",o={id:"sql-reference/sql-functions/string-functions/hex_decode_string",title:"hex_decode_string",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/hex_decode_string.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/hex_decode_string",permalink:"/doc/en/sql-reference/sql-functions/string-functions/hex_decode_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/hex_decode_string.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"hex_decode_binary",permalink:"/doc/en/sql-reference/sql-functions/string-functions/hex_decode_binary"},next:{title:"instr",permalink:"/doc/en/sql-reference/sql-functions/string-functions/instr"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hex_decode_string",children:"hex_decode_string"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["This function performs the opposite operation of ",(0,t.jsx)(n.a,{href:"/doc/en/sql-reference/sql-functions/string-functions/hex",children:"hex()"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It interprets each pair of hexadecimal digits in the input string as a number and converts it to the byte represented by the number. The return value is a binary string."}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.0."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"hex_decode_string(str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to convert. The supported data type is VARCHAR. An empty string is returned if any of the following situations occur:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The length of the string is 0 or the number of characters in the string is an odd number."}),"\n",(0,t.jsxs)(n.li,{children:["The string contains characters other than ",(0,t.jsx)(n.code,{children:"[0-9]"}),", ",(0,t.jsx)(n.code,{children:"[a-z]"}),", and ",(0,t.jsx)(n.code,{children:"[A-Z]"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select hex_decode_string(hex(\"Hello StarRocks\"));\n+-------------------------------------------+\n| hex_decode_string(hex('Hello StarRocks')) |\n+-------------------------------------------+\n| Hello StarRocks                           |\n+-------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"HEX_DECODE_STRING"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:o},n)}}}]);