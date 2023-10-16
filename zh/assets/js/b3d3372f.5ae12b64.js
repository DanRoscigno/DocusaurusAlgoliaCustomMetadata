"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83561],{24884:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese"},t="if",o={id:"sql-reference/sql-functions/condition-functions/if",title:"if",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/condition-functions/if.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/if",permalink:"/doc/zh/docs/sql-reference/sql-functions/condition-functions/if",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/condition-functions/if.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"coalesce",permalink:"/doc/zh/docs/sql-reference/sql-functions/condition-functions/coalesce"},next:{title:"ifnull",permalink:"/doc/zh/docs/sql-reference/sql-functions/condition-functions/ifnull"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"if",children:"if"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"expr1"})," \u6210\u7acb\uff0c\u8fd4\u56de\u7ed3\u679c ",(0,i.jsx)(n.code,{children:"expr2"}),"\uff0c\u5426\u5219\u8fd4\u56de\u7ed3\u679c ",(0,i.jsx)(n.code,{children:"expr3"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"if(expr1,expr2,expr3);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr2"})," \u548c ",(0,i.jsx)(n.code,{children:"expr3"})," \u5fc5\u987b\u5728\u6570\u636e\u7c7b\u578b\u4e0a\u80fd\u591f\u517c\u5bb9\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e ",(0,i.jsx)(n.code,{children:"expr2"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select if(false,1,2);\n+-----------------+\n| if(FALSE, 1, 2) |\n+-----------------+\n|               2 |\n+-----------------+\n\nmysql> select if(false,2.14,2);\n+--------------------+\n| if(FALSE, 2.14, 2) |\n+--------------------+\n|               2.00 |\n+--------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var i=s(67294);const c=i.createContext({});function r(e){const n=i.useContext(c);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||t:r(e),i.createElement(c.Provider,{value:o},n)}}}]);