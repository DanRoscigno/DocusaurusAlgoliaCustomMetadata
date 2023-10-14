"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48990],{73916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=t(85893),a=t(11151);const l={},r="SHOW DATABASES",i={id:"sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",title:"SHOW DATABASES",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW DATA",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DATA"},next:{title:"SHOW DELETE",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DELETE"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-databases",children:"SHOW DATABASES"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u6216\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u5e93\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES [FROM <catalog_name>]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catalog_name"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsxs)(n.td,{children:["Internal catalog \u6216 external catalog \u7684\u540d\u79f0\u3002",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["\u5982\u4e0d\u6307\u5b9a\u6216\u6307\u5b9a\u4e3a internal catalog \u540d\u79f0\uff0c\u5373 ",(0,s.jsx)(n.code,{children:"default_catalog"}),"\uff0c\u5219\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5e93\u3002"]}),(0,s.jsxs)("li",{children:["\u5982\u6307\u5b9a external catalog \u540d\u79f0\uff0c\u5219\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u7684\u5185\u5916\u90e8 catalog\u3002"]})]})]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5e93\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6216"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES FROM default_catalog;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"+----------+\n| Database |\n+----------+\n| db1      |\n| db2      |\n| db3      |\n+----------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7 external catalog ",(0,s.jsx)(n.code,{children:"hive1"})," \u67e5\u770b Apache Hive\u2122 \u4e2d\u7684\u6570\u636e\u5e93\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES FROM hive1;\n\n+-----------+\n| Database  |\n+-----------+\n| hive_db1  |\n| hive_db2  |\n| hive_db3  |\n+-----------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/DROP_DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>l});var s=t(67294);const a=s.createContext({});function l(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||r:l(e),s.createElement(a.Provider,{value:i},n)}}}]);