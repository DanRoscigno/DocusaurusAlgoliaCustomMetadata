"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36819],{427:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese"},t="hex_decode_binary",d={id:"sql-reference/sql-functions/string-functions/hex_decode_binary",title:"hex_decode_binary",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/hex_decode_binary.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/hex_decode_binary",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/hex_decode_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/hex_decode_binary.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"hex",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/hex"},next:{title:"hex_decode_string",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/hex_decode_string"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"hex_decode_binary",children:"hex_decode_binary"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u4e00\u4e2a\u5341\u516d\u8fdb\u5236\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u89e3\u7801\u4e3a VARBINARY \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"VARBINARY hex_decode_binary(VARCHAR str);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"str"}),"\uff1a\u8981\u89e3\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u4e3a VARCHAR \u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u53d1\u751f\u4ee5\u4e0b\u4efb\u4f55\u60c5\u51b5\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a BINARY \u7c7b\u578b\u7684\u7a7a\u503c\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8f93\u5165\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u4e3a 0\uff0c\u6216\u8f93\u5165\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u6570\u91cf\u4e3a\u5947\u6570\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8f93\u5165\u5b57\u7b26\u4e32\u5305\u542b [0-9]\u3001[a-z] \u548c [A-Z] \u4ee5\u5916\u7684\u5b57\u7b26\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a VARBINARY \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"mysql> select hex(hex_decode_binary(hex(\"Hello StarRocks\")));\n+------------------------------------------------+\n| hex(hex_decode_binary(hex('Hello StarRocks'))) |\n+------------------------------------------------+\n| 48656C6C6F2053746172526F636B73                 |\n+------------------------------------------------+\n\nmysql> select hex_decode_binary(NULL);\n+--------------------------------------------------+\n| hex_decode_binary(NULL)                          |\n+--------------------------------------------------+\n| NULL                                             |\n+--------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,i.jsx)(n.p,{children:"HEX_DECODE_BINARY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>c});var i=s(67294);const r=i.createContext({});function c(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||t:c(e),i.createElement(r.Provider,{value:d},n)}}}]);