"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73122],{23239:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(85893),t=n(11151);const i={displayed_sidebar:"Chinese"},d="ALTER RESOURCE GROUP",c={id:"sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",title:"ALTER RESOURCE GROUP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS"},next:{title:"ALTER STORAGE VOLUME",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"alter-resource-group",children:"ALTER RESOURCE GROUP"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(s.p,{children:"\u4fee\u6539\u8d44\u6e90\u7ec4\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <resource_group_name>\n{  ADD CLASSIFIER1, CLASSIFIER2, ...\n | DROP (CLASSIFIER_ID_1, CLASSIFIER_ID_2, ...)\n | DROP ALL\n | WITH resource_limit \n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"resource_group_name"}),(0,r.jsx)(s.td,{children:"\u5f85\u4fee\u6539\u7684\u8d44\u6e90\u7ec4\u540d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ADD"}),(0,r.jsxs)(s.td,{children:["\u4e3a\u8d44\u6e90\u7ec4\u6dfb\u52a0\u5206\u7c7b\u5668\u3002\u5173\u4e8e\u5206\u7c7b\u5668\u53c2\u6570\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u89c1 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP",children:"CREATE RESOURCE GROUP - \u53c2\u6570\u8bf4\u660e"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DROP"}),(0,r.jsxs)(s.td,{children:["\u901a\u8fc7\u5206\u7c7b\u5668 ID \u4e3a\u8d44\u6e90\u7ec4\u5220\u9664\u5bf9\u5e94\u5206\u7c7b\u5668\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",children:"SHOW RESOURCE GROUP"})," \u8bed\u53e5\u67e5\u770b\u5206\u7c7b\u5668 ID\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DROP ALL"}),(0,r.jsx)(s.td,{children:"\u4e3a\u8d44\u6e90\u7ec4\u5220\u9664\u6240\u6709\u5206\u7c7b\u5668\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"WITH"}),(0,r.jsxs)(s.td,{children:["\u4e3a\u8d44\u6e90\u7ec4\u4fee\u6539\u8d44\u6e90\u9650\u5236\u3002\u5173\u4e8e\u8d44\u6e90\u9650\u5236\u53c2\u6570\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u89c1 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP",children:"CREATE RESOURCE GROUP - \u53c2\u6570\u8bf4\u660e"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u4e3a\u8d44\u6e90\u7ec4 ",(0,r.jsx)(s.code,{children:"rg1"})," \u6dfb\u52a0\u65b0\u7684\u5206\u7c7b\u5668\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 ADD (user='root', query_type in ('select'));\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4e3a\u8d44\u6e90\u7ec4 ",(0,r.jsx)(s.code,{children:"rg1"})," \u5220\u9664 ID \u4e3a ",(0,r.jsx)(s.code,{children:"300040"}),"\uff0c",(0,r.jsx)(s.code,{children:"300041"})," \u4ee5\u53ca ",(0,r.jsx)(s.code,{children:"300041"})," \u7684\u5206\u7c7b\u5668\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 DROP (300040, 300041, 300041);\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e09\uff1a\u4e3a\u8d44\u6e90\u7ec4 ",(0,r.jsx)(s.code,{children:"rg1"})," \u5220\u9664\u6240\u6709\u5206\u7c7b\u5668\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 DROP ALL;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u56db\uff1a\u4fee\u6539\u8d44\u6e90\u7ec4 ",(0,r.jsx)(s.code,{children:"rg1"})," \u7684\u8d44\u6e90\u9650\u5236\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP rg1 WITH (\n    'cpu_core_limit' = '20'\n);\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>i});var r=n(67294);const t=r.createContext({});function i(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:i(e),r.createElement(t.Provider,{value:c},s)}}}]);