"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28141],{80125:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);const l={displayed_sidebar:"Chinese"},r="DROP DATABASE",d={id:"sql-reference/sql-statements/data-definition/DROP_DATABASE",title:"DROP DATABASE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/DROP_DATABASE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_DATABASE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_DATABASE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/DROP_DATABASE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"DROP CATALOG",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_CATALOG"},next:{title:"DROP INDEX",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_INDEX"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",ol:"ol",li:"li",a:"a",ul:"ul"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-database",children:"DROP DATABASE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u6570\u636e\u5e93\uff08database\uff09\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u9700\u8981\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u7684 DROP \u6743\u9650\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- 2.0 \u4e4b\u524d\u7248\u672c\nDROP DATABASE [IF EXISTS] [FORCE] db_name\n-- 2.0 \u53ca\u4ee5\u540e\u7248\u672c\nDROP DATABASE [IF EXISTS] db_name [FORCE]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c DROP DATABASE \u4e00\u6bb5\u65f6\u95f4\u5185\uff08\u9ed8\u8ba4 1 \u5929\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 RECOVER \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u6570\u636e\u5e93\u3002\u8be6\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," \u8bed\u53e5\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u6267\u884c ",(0,t.jsx)(n.code,{children:"DROP DATABASE FORCE"}),"\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u6570\u636e\u5e93\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14 ",(0,t.jsx)(n.strong,{children:"\u4e0d\u80fd\u88ab\u6062\u590d"}),"\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u6570\u636e\u5e93 db_test\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP DATABASE db_test;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u53c2\u8003",children:"\u76f8\u5173\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>l});var t=s(67294);const i=t.createContext({});function l(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(i.Provider,{value:d},n)}}}]);