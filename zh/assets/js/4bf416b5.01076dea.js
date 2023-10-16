"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28952],{45206:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>O,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=s(85893),l=s(11151);const a={displayed_sidebar:"Chinese"},i="SHOW ROUTINE LOAD",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",title:"SHOW ROUTINE LOAD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW RESTORE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE"},next:{title:"SHOW ROUTINE LOAD TASK",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD_TASK"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-routine-load",children:"SHOW ROUTINE LOAD"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b routine load \u4efb\u52a1\u7684\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5c55\u793a\u540d\u79f0\u4e3a test1 \u7684\u6240\u6709\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALL ROUTINE LOAD FOR test1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5c55\u793a\u540d\u79f0\u4e3a test1 \u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ROUTINE LOAD FOR test1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u663e\u793a example_db \u4e0b\uff0c\u6240\u6709\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"use example_db;\nSHOW ALL ROUTINE LOAD;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u663e\u793a example_db \u4e0b\uff0c\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"use example_db;\nSHOW ROUTINE LOAD;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u663e\u793a example_db \u4e0b\uff0c\u540d\u79f0\u4e3a test1 \u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ROUTINE LOAD FOR example_db.test1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u663e\u793a example_db \u4e0b\uff0c\u540d\u79f0\u4e3a test1 \u7684\u6240\u6709\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALL ROUTINE LOAD FOR example_db.test1;\n"})}),"\n"]}),"\n"]})]})}const O=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>a});var t=s(67294);const l=t.createContext({});function a(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(l.Provider,{value:r},n)}}}]);