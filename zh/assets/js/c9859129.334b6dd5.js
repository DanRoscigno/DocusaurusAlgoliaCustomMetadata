"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98711],{96983:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(85893),t=n(11151);const i={},c="SET",d={id:"sql-reference/sql-statements/Administration/SET",title:"SET",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/Administration/SET.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SET",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SET",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/SET.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"KILL",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/KILL"},next:{title:"SHOW BACKENDS",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW BACKENDS"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"set",children:"SET"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(s.p,{children:["\u4e3a StarRocks \u8bbe\u7f6e\u6307\u5b9a\u7684\u7cfb\u7edf\u53d8\u91cf\u6216\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW%20VARIABLES",children:"SHOW VARIABLES"})," \u67e5\u770b StarRocks \u7684\u7cfb\u7edf\u53d8\u91cf\u3002\u6709\u5173\u7cfb\u7edf\u53d8\u91cf\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/reference/System_variable",children:"\u7cfb\u7edf\u53d8\u91cf"}),"\u3002\u6709\u5173\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/reference/user_defined_variables",children:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf"}),"\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET [ GLOBAL | SESSION ] <variable_name> = <value> [, <variable_name> = <value>] ...\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\u4fee\u9970\u7b26\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"GLOBAL"}),(0,r.jsx)("li",{children:"SESSION"})]})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"GLOBAL"})," \u4fee\u9970\u7b26\uff0c\u8be5\u8bed\u53e5\u8bbe\u7f6e\u8be5\u53d8\u91cf\u503c\u4e3a\u5168\u5c40\u53d8\u91cf\u503c\u3002"]}),(0,r.jsxs)("li",{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"SESSION"})," \u4fee\u9970\u7b26\uff0c\u8be5\u8bed\u53e5\u8bbe\u7f6e\u8be5\u53d8\u91cf\u503c\u5bf9\u5f53\u524d\u8fde\u63a5\u6709\u6548\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"LOCAL"})," \u66ff\u4ee3 ",(0,r.jsx)(s.code,{children:"SESSION"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u4e0d\u6307\u5b9a\u4fee\u9970\u7b26\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(s.code,{children:"SESSION"}),"\u3002"]})]}),"\u6709\u5173\u5168\u5c40\u53d8\u91cf\u548c\u4f1a\u8bdd\u53d8\u91cf\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/reference/System_variable",children:"\u7cfb\u7edf\u53d8\u91cf"}),"\u3002",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"}),(0,r.jsx)("br",{}),"\u4ec5\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"variable_name"}),(0,r.jsx)(s.td,{children:"\u53d8\u91cf\u540d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"value"}),(0,r.jsx)(s.td,{children:"\u53d8\u91cf\u503c\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5728\u5f53\u524d\u4f1a\u8bdd\u5185\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"time_zone"})," \u4e3a ",(0,r.jsx)(s.code,{children:"Asia/Shanghai"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'mysql> SET time_zone = "Asia/Shanghai";\nQuery OK, 0 rows affected (0.00 sec)\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5168\u5c40\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"exec_mem_limit"})," \u4e3a ",(0,r.jsx)(s.code,{children:"2147483648"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"mysql> SET GLOBAL exec_mem_limit = 2147483648;\nQuery OK, 0 rows affected (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>i});var r=n(67294);const t=r.createContext({});function i(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:d},s)}}}]);