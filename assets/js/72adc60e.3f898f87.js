"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19627],{49297:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},a="System limits",o={id:"reference/System_limit",title:"System limits",description:"This topic describes the rules and limits that apply when you use StarRocks.",source:"@site/versioned_docs/version-3.1/reference/System_limit.md",sourceDirName:"reference",slug:"/reference/System_limit",permalink:"/doc/docs/reference/System_limit",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/reference/System_limit.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Error Codes",permalink:"/doc/docs/reference/Error_code"},next:{title:"AWS IAM policies",permalink:"/doc/docs/reference/aws_iam_policies"}},c={},l=[];function d(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"system-limits",children:"System limits"}),"\n",(0,t.jsx)(n.p,{children:"This topic describes the rules and limits that apply when you use StarRocks."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"StarRocks uses the MySQL protocol for communication. You can connect to the StarRocks cluster via a MySQL client or JDBC. We recommend that you use a MySQL client whose version is 5.1 or later. Versions earlier than 5.1 do not support usernames that are longer than 16 characters."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Naming conventions for catalogs, databases, tables, views, partitions, columns, usernames, and roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The name can only consist of digits (0-9), letters (a-z or A-Z), and underscores (_). ",(0,t.jsx)(n.strong,{children:"Usernames can be all digits."})]}),"\n",(0,t.jsxs)(n.li,{children:["The name cannot exceed 64 characters in length, ",(0,t.jsx)(n.strong,{children:"among which the catalog, database, table, and column names cannot exceed 1023 characters in length."})]}),"\n",(0,t.jsx)(n.li,{children:"Catalog, database, table, view, partition, and roles names must start with a lowercase or uppercase letter."}),"\n",(0,t.jsx)(n.li,{children:"Column names can start with an underscore (_)."}),"\n",(0,t.jsxs)(n.li,{children:["Catalog, database, table, view, username, and role names are case-sensitive. Column and partition names are ",(0,t.jsx)(n.strong,{children:"not"})," case-sensitive."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Naming conventions for labels:\nYou can specify the label of a job when you import data. The label name can consist of underscores (_), letters (a-z or A-Z), and digits (0-9), and cannot exceed 128 characters in length. The label name has no requirement for the starting character."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When you create a table, the key column cannot be of the FLOAT or DOUBLE type. You can use the DECIMAL type to represent decimals."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The maximum length of a VARCHAR value varies in different versions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In versions earlier than StarRocks 2.1, the length ranges from 1 to 65533 bytes."}),"\n",(0,t.jsx)(n.li,{children:"[Preview] In StarRocks 2.1 and later versions, the length ranges from 1 to 1048576 bytes. Maximum length of a VARCHAR value = Maximum row size (1048578 bytes) - Length prefix (2 bytes). The length prefix indicates the number of bytes in the value."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The default length is 1 byte."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"StarRocks supports only UTF-8 encoding, not GBK."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"StarRocks does not support modifying column names in tables."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"By default, a query can be nested with a maximum of 10,000 subqueries."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:o},n)}}}]);