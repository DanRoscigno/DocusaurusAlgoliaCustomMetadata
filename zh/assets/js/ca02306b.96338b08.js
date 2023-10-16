"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70935],{65052:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const o={displayed_sidebar:"Chinese"},a="to_bitmap",r={id:"sql-reference/sql-functions/bitmap-functions/to_bitmap",title:"to_bitmap",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/to_bitmap",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"sub_bitmap",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/sub_bitmap"},next:{title:"JSON \u51fd\u6570\u6982\u8ff0",permalink:"/doc/zh/docs/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators"}},c={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"to_bitmap",children:"to_bitmap"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u5165\u4e3a\u53d6\u503c\u5728 0 ~ 18446744073709551615 \u533a\u95f4\u7684 unsigned bigint\uff0c\u8f93\u51fa\u4e3a\u5305\u542b\u8be5\u5143\u7d20\u7684 bitmap\u3002\u5982\u679c\u8f93\u5165\u503c\u4e0d\u5728\u8be5\u8303\u56f4\u5185\uff0c\u4f1a\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4e3b\u8981\u7528\u4e8e Stream Load \u5bfc\u5165\u65f6\u5c06\u6574\u578b\u5b57\u6bb5\u5bfc\u5165 StarRocks \u8868\u4e2d\u7684 bitmap \u5b57\u6bb5\uff0c\u5982\u4e0b\u4f8b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"TO_BITMAP(expr)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"expr"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a unsigned BIGINT\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n\nselect bitmap_to_string(to_bitmap(10));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(10)) |\n+---------------------------------+\n| 10                              |\n+---------------------------------+\n\nselect bitmap_to_string(to_bitmap(-5));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(-5)) |\n+---------------------------------+\n| NULL                            |\n+---------------------------------+\n\nselect bitmap_to_string(to_bitmap(null));\n+-----------------------------------+\n| bitmap_to_string(to_bitmap(NULL)) |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>r,ah:()=>o});var s=t(67294);const i=s.createContext({});function o(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function r({components:n,children:e,disableParentContext:t}){let r;return r=t?"function"==typeof n?n({}):n||a:o(n),s.createElement(i.Provider,{value:r},e)}}}]);