"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78399],{66300:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=n(85893),r=n(11151);const i={displayed_sidebar:"Chinese31"},l="ALTER STORAGE VOLUME",d={id:"sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",title:"ALTER STORAGE VOLUME",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"ALTER RESOURCE GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP"},next:{title:"ALTER SYSTEM",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER_SYSTEM"}},c={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-storage-volume",children:"ALTER STORAGE VOLUME"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(s.p,{children:["\u66f4\u6539\u5b58\u50a8\u5377\u7684\u8ba4\u8bc1\u5c5e\u6027\u3001\u6ce8\u91ca\u6216\u72b6\u6001\uff08",(0,t.jsx)(s.code,{children:"enabled"}),"\uff09\u3002\u5173\u4e8e\u5b58\u50a8\u5377\u7684\u5c5e\u6027\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"}),"\u3002\u8be5\u529f\u80fd\u81ea v3.1 \u8d77\u652f\u6301\u3002"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u4ec5\u62e5\u6709\u7279\u5b9a\u5b58\u50a8\u5377 ALTER \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(s.li,{children:["\u5df2\u6709\u5b58\u50a8\u5377\u7684 ",(0,t.jsx)(s.code,{children:"TYPE"})," \u3001",(0,t.jsx)(s.code,{children:"LOCATIONS"})," \u548c\u5176\u4ed6\u5b58\u50a8\u8def\u5f84\u76f8\u5173\u7684\u53c2\u6570\u65e0\u6cd5\u66f4\u6539\uff0c\u4ec5\u80fd\u66f4\u6539\u8ba4\u8bc1\u5c5e\u6027\u3002\u5982\u679c\u60a8\u66f4\u6539\u4e86\u5b58\u50a8\u8def\u5f84\u76f8\u5173\u7684\u914d\u7f6e\u9879\uff0c\u5219\u5728\u6b64\u4e4b\u524d\u521b\u5efa\u7684\u6570\u636e\u5e93\u548c\u8868\u5c06\u53d8\u4e3a\u53ea\u8bfb\uff0c\u60a8\u65e0\u6cd5\u5411\u5176\u4e2d\u5bfc\u5165\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"enabled"})," \u4e3a ",(0,t.jsx)(s.code,{children:"false"})," \u7684\u5b58\u50a8\u5377\u65e0\u6cd5\u88ab\u5f15\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'ALTER STORAGE VOLUME [ IF EXISTS ] <storage_volume_name>\n{ COMMENT \'<comment_string>\'\n| SET ("key" = "value"[,...]) }\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"storage_volume_name"}),(0,t.jsx)(s.td,{children:"\u5f85\u66f4\u6539\u6216\u65b0\u589e\u5c5e\u6027\u7684\u5b58\u50a8\u5377\u7684\u540d\u79f0\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"COMMENT"}),(0,t.jsx)(s.td,{children:"\u5b58\u50a8\u5377\u7684\u6ce8\u91ca\u3002"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["\u6709\u5173\u53ef\u66f4\u6539\u6216\u65b0\u589e PROPERTIES \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME#properties",children:"CREATE STORAGE VOLUME - PROPERTIES"}),"\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u7981\u7528\u5b58\u50a8\u5377 ",(0,t.jsx)(s.code,{children:"my_s3_volume"}),"\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:'MySQL > ALTER STORAGE VOLUME my_s3_volume\n    -> SET ("enabled" = "false");\nQuery OK, 0 rows affected (0.01 sec)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4fee\u6539\u5b58\u50a8\u5377 ",(0,t.jsx)(s.code,{children:"my_s3_volume"})," \u7684\u8ba4\u8bc1\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:'MySQL > ALTER STORAGE VOLUME my_s3_volume\n    -> SET (\n    ->     "aws.s3.use_instance_profile" = "true"\n    -> );\nQuery OK, 0 rows affected (0.00 sec)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",children:"DROP STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:d},s)}}}]);