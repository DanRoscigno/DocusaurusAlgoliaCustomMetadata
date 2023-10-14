"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82541],{16394:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(85893),r=s(11151);const i={},c="hex",l={id:"sql-reference/sql-functions/string-functions/hex",title:"hex",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/hex.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/hex",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/hex",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/hex.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"group_concat",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/group_concat"},next:{title:"instr",permalink:"/doc/en/2.5/sql-reference/sql-functions/string-functions/instr"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hex",children:"hex"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"x"})," is a numerical value, this function returns a hexadecimal string representation of the value."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"x"})," is a string, this function returns a hexadecimal string representation of the string where each character in the string is converted into two hexadecimal digits."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"HEX(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": the string or number to convert. The supported data types are BIGINT and VARCHAR."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select hex(3);\n+--------+\n| hex(3) |\n+--------+\n| 3      |\n+--------+\n1 row in set (0.00 sec)\n\nmysql> select hex('3');\n+----------+\n| hex('3') |\n+----------+\n| 33       |\n+----------+\n1 row in set (0.00 sec)\n\nmysql> select hex('apple');\n+--------------+\n| hex('apple') |\n+--------------+\n| 6170706C65   |\n+--------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"HEX"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},n)}}}]);