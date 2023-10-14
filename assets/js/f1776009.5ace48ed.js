"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47492],{87723:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(85893),s=n(11151);const r={},l="bit_shift_right",c={id:"sql-reference/sql-functions/bit-functions/bit_shift_right_logical",title:"bit_shift_right",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bit-functions/bit_shift_right_logical.md",sourceDirName:"sql-reference/sql-functions/bit-functions",slug:"/sql-reference/sql-functions/bit-functions/bit_shift_right_logical",permalink:"/doc/en/sql-reference/sql-functions/bit-functions/bit_shift_right_logical",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bit-functions/bit_shift_right_logical.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bit_shift_right_logical",permalink:"/doc/en/sql-reference/sql-functions/bit-functions/bit_shift_right"},next:{title:"bitand",permalink:"/doc/en/sql-reference/sql-functions/bit-functions/bitand"}},h={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const i=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"bit_shift_right",children:"bit_shift_right"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Shifts the binary representation of a numeric expression to the right by a specified number of bits."}),"\n",(0,t.jsxs)(i.p,{children:["This function performs an ",(0,t.jsx)(i.strong,{children:"arithmetic right shift"}),", during which the bit length does not change, the low bit is dropped, and the sign bit is used as the high bit. For example, shifting ",(0,t.jsx)(i.code,{children:"10101"})," to the right by one bit results in ",(0,t.jsx)(i.code,{children:"11010"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-Haskell",children:"bit_shift_right(value, shift)\n"})}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"value"}),": the value or numeric expression to shift. Supported data types are TINYINT, SMALLINT, INT, BIGINT, and LARGEINT."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"shift"}),": the number of bits to shift. The supported data type is BIGINT. The supported data type is BIGINT."]}),"\n",(0,t.jsx)(i.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(i.p,{children:["Returns a value of the same type as ",(0,t.jsx)(i.code,{children:"value"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,t.jsxs)(i.li,{children:["If ",(0,t.jsx)(i.code,{children:"shift"})," is less than 0, 0 is returned."]}),"\n",(0,t.jsxs)(i.li,{children:["Shifting a ",(0,t.jsx)(i.code,{children:"value"})," by ",(0,t.jsx)(i.code,{children:"0"})," always results in the original ",(0,t.jsx)(i.code,{children:"value"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Shifting ",(0,t.jsx)(i.code,{children:"0"})," by a ",(0,t.jsx)(i.code,{children:"shift"})," always results in ",(0,t.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["If the data type of ",(0,t.jsx)(i.code,{children:"value"})," is numeric but not an integer, that value will be cast to an integer. See ",(0,t.jsx)(i.a,{href:"#examples",children:"Examples"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["If the data type of ",(0,t.jsx)(i.code,{children:"value"}),' is a string, the value will be cast to an integer if possible. For example, the string "2.3" will be cast to 2. If the value cannot be cast to an integer, the value will be treated as NULL. See ',(0,t.jsx)(i.a,{href:"#examples",children:"Examples"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.p,{children:"Use this function to shift numeric values."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-Plain",children:"SELECT bit_shift_right(2, 1);\n+-----------------------+\n| bit_shift_right(2, 1) |\n+-----------------------+\n|                     1 |\n+-----------------------+\n\nSELECT bit_shift_right(2.2, 1);\n+-------------------------+\n| bit_shift_right(2.2, 1) |\n+-------------------------+\n|                       1 |\n+-------------------------+\n\nSELECT bit_shift_right(\"2\", 1);\n+-------------------------+\n| bit_shift_right('2', 1) |\n+-------------------------+\n|                       1 |\n+-------------------------+\n\nSELECT bit_shift_right(-2, 1);\n+------------------------+\n| bit_shift_right(-2, 1) |\n+------------------------+\n|                     -1 |\n+------------------------+\n"})}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/doc/en/sql-reference/sql-functions/bit-functions/bit_shift_left",children:"bit_shift_left"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/doc/en/sql-reference/sql-functions/bit-functions/bit_shift_right_logical",children:"bit_shift_right_logical"})}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:i}=Object.assign({},(0,s.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,i,n)=>{n.d(i,{Zo:()=>c,ah:()=>r});var t=n(67294);const s=t.createContext({});function r(e){const i=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const l={};function c({components:e,children:i,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:r(e),t.createElement(s.Provider,{value:c},i)}}}]);