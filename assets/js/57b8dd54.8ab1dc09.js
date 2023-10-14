"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96938],{89890:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=s(85893),r=s(11151);const i={},d="DROP FILE",c={id:"sql-reference/sql-statements/Administration/DROP_FILE",title:"DROP FILE",description:"DROP FILE \u8bed\u53e5\u7528\u4e8e\u5220\u9664\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\u7684\u6587\u4ef6\u3002\u4f7f\u7528\u8be5\u8bed\u53e5\u5220\u9664\u4e00\u4e2a\u6587\u4ef6\uff0c\u90a3\u4e48\u8be5\u6587\u4ef6\u5728 FE \u5185\u5b58\u548c BDBJE \u4e2d\u5747\u4f1a\u88ab\u5220\u9664\u3002",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DROP_FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DROP_FILE",permalink:"/doc/zh/sql-reference/sql-statements/Administration/DROP_FILE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/DROP_FILE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DESC STORAGE VOLUME",permalink:"/doc/zh/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME"},next:{title:"DROP RESOURCE GROUP",permalink:"/doc/zh/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP"}},l={},a=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-file",children:"DROP FILE"}),"\n",(0,n.jsx)(t.p,{children:"DROP FILE \u8bed\u53e5\u7528\u4e8e\u5220\u9664\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\u7684\u6587\u4ef6\u3002\u4f7f\u7528\u8be5\u8bed\u53e5\u5220\u9664\u4e00\u4e2a\u6587\u4ef6\uff0c\u90a3\u4e48\u8be5\u6587\u4ef6\u5728 FE \u5185\u5b58\u548c BDBJE \u4e2d\u5747\u4f1a\u88ab\u5220\u9664\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'DROP FILE "file_name" [FROM database]\n\n[properties]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u53c2\u6570"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u5fc5\u586b"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file_name"}),(0,n.jsx)(t.td,{children:"\u662f"}),(0,n.jsx)(t.td,{children:"\u6587\u4ef6\u540d\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"database"}),(0,n.jsx)(t.td,{children:"\u5426"}),(0,n.jsx)(t.td,{children:"\u6587\u4ef6\u6240\u5c5e\u7684\u6570\u636e\u5e93\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"properties"}),(0,n.jsx)(t.td,{children:"\u662f"}),(0,n.jsxs)(t.td,{children:["\u6587\u4ef6\u5c5e\u6027\uff0c\u5177\u4f53\u914d\u7f6e\u9879\u89c1\u4e0b\u8868\uff1a",(0,n.jsx)(t.code,{children:"properties"}),"\u914d\u7f6e\u9879\u3002"]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"properties"})," \u914d\u7f6e\u9879"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u914d\u7f6e\u9879"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u5fc5\u586b"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"catalog"}),(0,n.jsx)(t.td,{children:"\u662f"}),(0,n.jsx)(t.td,{children:"\u6587\u4ef6\u6240\u5c5e\u7c7b\u522b\u3002"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsxs)(t.p,{children:["\u5220\u9664\u6587\u4ef6 ",(0,n.jsx)(t.code,{children:"ca.pem"}),"\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'DROP FILE "ca.pem" properties("catalog" = "kafka");\n'})})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:i(e),n.createElement(r.Provider,{value:c},t)}}}]);