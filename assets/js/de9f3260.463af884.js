"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71952],{51575:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=s(85893),r=s(11151);const t={},a="JSON operators",c={id:"sql-reference/sql-functions/json-functions/json-operators",title:"JSON operators",description:"StarRocks supports the following JSON comparison operators: `, >=, =, and !=. You can use these operators to query JSON data. However, StarRocks does not allow you to use IN` to query JSON data.",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/json-functions/json-operators.md",sourceDirName:"sql-reference/sql-functions/json-functions",slug:"/sql-reference/sql-functions/json-functions/json-operators",permalink:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-operators.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"parse_json",permalink:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json"},next:{title:"Arrow function",permalink:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function"}},i={},l=[{value:"Arithmetic rules",id:"arithmetic-rules",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",blockquote:"blockquote",a:"a",h2:"h2",pre:"pre"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"json-operators",children:"JSON operators"}),"\n",(0,o.jsxs)(n.p,{children:["StarRocks supports the following JSON comparison operators: ",(0,o.jsx)(n.code,{children:"<"}),", ",(0,o.jsx)(n.code,{children:"<="}),", ",(0,o.jsx)(n.code,{children:">"}),", ",(0,o.jsx)(n.code,{children:">="}),", ",(0,o.jsx)(n.code,{children:"="}),", and ",(0,o.jsx)(n.code,{children:"!="}),". You can use these operators to query JSON data. However, StarRocks does not allow you to use ",(0,o.jsx)(n.code,{children:"IN"})," to query JSON data."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The operands of an operator must both be JSON values."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If one operand of an operator is a JSON value while the other is not, the operand that is not a JSON value is converted to a JSON value during the arithmetic operation. For more information about the conversion rules, see ",(0,o.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",children:"CAST"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"arithmetic-rules",children:"Arithmetic rules"}),"\n",(0,o.jsx)(n.p,{children:"JSON operators comply with the following arithmetic rules:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["When the operands of an operator are JSON values of the same data type:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If both operands are JSONs values of a basic data type, such as NUMBER, STRING, or BOOLEAN, the operator performs the arithmetic operation in compliance with the arithmetic rules for the basic data type."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: If both operands are numbers but one is a DOUBLE value and the other is an INT value, the operator converts the INT value to a DOUBLE value."}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If both operands are JSON values of a composite data type, such as OBJECT or ARRAY, the operator sorts the keys in the operands in dictionary order based on the sequence of the keys in the first operand and then compares the values of the keys between the operands."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example 1:"}),"\n",(0,o.jsxs)(n.p,{children:["The first operand is ",(0,o.jsx)(n.code,{children:'{"a": 1, "c": 2}'}),", and the second operand is ",(0,o.jsx)(n.code,{children:'{"b": 1, "a": 2}'}),". In this example, the operator compares the values of the keys ",(0,o.jsx)(n.code,{children:"a"})," between the operands. The value of the key ",(0,o.jsx)(n.code,{children:"a"})," in the first operand is  ",(0,o.jsx)(n.code,{children:"1"}),", whereas the value of the key ",(0,o.jsx)(n.code,{children:"a"})," in the second operand is ",(0,o.jsx)(n.code,{children:"2"}),". The value ",(0,o.jsx)(n.code,{children:"1"})," is greater than the value ",(0,o.jsx)(n.code,{children:"2"}),". Therefore, the operator concludes that the first operand ",(0,o.jsx)(n.code,{children:'{"a": 1, "c": 2}'})," is less than the second operand ",(0,o.jsx)(n.code,{children:'{"b": 1, "``a``": 2}'}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:'mysql> SELECT PARSE_JSON(\'{"a": 1, "c": 2}\') < PARSE_JSON(\'{"b": 1, "a": 2} \');\n\n       -> 1\n'})}),"\n",(0,o.jsx)(n.p,{children:"Example 2:"}),"\n",(0,o.jsxs)(n.p,{children:["The first operand is ",(0,o.jsx)(n.code,{children:'{"a": 1, "c": 2}'}),", and the second operand is ",(0,o.jsx)(n.code,{children:'{"b": 1, "a": 1}'}),". In this example, the operator first compares the values of the keys ",(0,o.jsx)(n.code,{children:"a"})," between the operands. The values of the keys ",(0,o.jsx)(n.code,{children:"a"})," in the operands are both  ",(0,o.jsx)(n.code,{children:"1"}),". Then, the operator compares the values of the keys ",(0,o.jsx)(n.code,{children:"c"})," in the operands. The second operand does not contain the key ",(0,o.jsx)(n.code,{children:"c"}),". Therefore, the operator concludes that the first operand ",(0,o.jsx)(n.code,{children:'{"a": 1, "c": 2}'})," is greater than the second operand ",(0,o.jsx)(n.code,{children:'{"b": 1, "a": 1}'}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:'mysql> SELECT PARSE_JSON(\'{"a": 1, "c": 2}\') < PARSE_JSON(\'{"b": 1, "a": 1}\');\n\n       -> 0\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"When the operands of an operator are JSON values of two distinct data types, the operator compares the operands in compliance with the following arithmetic rules: NULL < BOOLEAN < ARRAY < OBJECT < DOUBLE < INT < STRING."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:'mysql> SELECT PARSE_JSON(\'"a"\') < PARSE_JSON(\'{"a": 1, "c": 2}\');\n\n       -> 0\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var o=s(67294);const r=o.createContext({});function t(e){const n=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:t(e),o.createElement(r.Provider,{value:c},n)}}}]);