"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95151],{73863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var t=s(85893),r=s(11151);const d={},l="SHOW SNAPSHOT",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",title:"SHOW SNAPSHOT",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",permalink:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW ROUTINE LOAD TASK",permalink:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD_TASK"},next:{title:"SHOW TABLES",permalink:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLES"}},a={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-snapshot",children:"SHOW SNAPSHOT"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u6307\u5b9a\u4ed3\u5e93\u4e2d\u7684\u5907\u4efd\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/3.0/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW SNAPSHOT ON <repo_name>\n[WHERE SNAPSHOT = <snapshot_name> [AND TIMESTAMP = <backup_timestamp>]]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"repo_name"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u6240\u5c5e\u4ed3\u5e93\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snapshot_nam"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"backup_timestamp"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u65f6\u95f4\u6233\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8fd4\u56de"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Snapshot"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Timestamp"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u65f6\u95f4\u6233\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Status"}),(0,t.jsx)(n.td,{children:"\u5982\u679c\u5907\u4efd\u6b63\u5e38\uff0c\u5219\u663e\u793a OK\uff0c\u5426\u5219\u663e\u793a\u9519\u8bef\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Database"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u6240\u5c5e\u6570\u636e\u5e93\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Details"}),(0,t.jsx)(n.td,{children:"\u5907\u4efd\u7684\u6570\u636e\u76ee\u5f55\u53ca\u6587\u4ef6\u7ed3\u6784\u3002JSON \u683c\u5f0f\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u4ed3\u5e93 ",(0,t.jsx)(n.code,{children:"example_repo"})," \u4e2d\u5df2\u6709\u7684\u5907\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW SNAPSHOT ON example_repo;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u67e5\u770b\u4ed3\u5e93 ",(0,t.jsx)(n.code,{children:"example_repo"})," \u4e2d\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"backup1"})," \u7684\u5907\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW SNAPSHOT ON example_repo\nWHERE SNAPSHOT = "backup1";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u770b\u4ed3\u5e93 ",(0,t.jsx)(n.code,{children:"example_repo"})," \u4e2d\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"backup1"})," \u3001\u65f6\u95f4\u6233\u4e3a ",(0,t.jsx)(n.code,{children:"2018-05-05-15-34-26"})," \u7684\u5907\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW SNAPSHOT ON example_repo \nWHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";\n'})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>d});var t=s(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:d(e),t.createElement(r.Provider,{value:c},n)}}}]);