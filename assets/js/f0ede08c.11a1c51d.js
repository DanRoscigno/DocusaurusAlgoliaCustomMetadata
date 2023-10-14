"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40364],{41309:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(85893),a=s(11151);const l={},d="SHOW TABLES",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_TABLES",title:"SHOW TABLES",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_TABLES.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_TABLES.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW SNAPSHOT",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT"},next:{title:"SHOW TABLET",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_TABLET"}},i={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-tables",children:"SHOW TABLES"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u6240\u6709\u8868\u3002\u53ef\u4ee5\u662f StarRocks \u5185\u90e8\u8868\u6216\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u8868\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES [FROM <catalog_name>.<db_name>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"catalog_name"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsxs)(n.td,{children:["Internal catalog \u6216 External catalog \u7684\u540d\u79f0\u3002",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["\u5982\u679c\u4e0d\u6307\u5b9a\u6216\u6307\u5b9a\u4e3a internal catalog \u540d\u79f0\uff08",(0,t.jsx)(n.code,{children:"default_catalog"}),"\uff09\uff0c\u5219\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5e93\u3002"]}),(0,t.jsx)("li",{children:"\u5982\u679c\u6307\u5b9a external catalog \u540d\u79f0\uff0c\u5219\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u5e93\u3002"})]})," \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u7684\u5185\u5916\u90e8 catalog\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6570\u636e\u5e93\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u8fde\u63a5\u5230 StarRocks \u96c6\u7fa4\u540e\uff0c\u67e5\u770b Internal catalog \u4e0b\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"})," \u4e2d\u7684\u8868\u3002\u4e0b\u9762\u4e24\u4e2a\u8bed\u53e5\u529f\u80fd\u5bf9\u7b49\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"show tables from example_db;\n+----------------------------+\n| Tables_in_example_db       |\n+----------------------------+\n| depts                      |\n| depts_par                  |\n| emps                       |\n| emps2                      |\n+----------------------------+\n\nshow tables from default_catalog.example_db;\n+----------------------------+\n| Tables_in_example_db       |\n+----------------------------+\n| depts                      |\n| depts_par                  |\n| emps                       |\n| emps2                      |\n+----------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"USE <db_name>;"})," \u8fde\u63a5\u5230 ",(0,t.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u540e\uff0c\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e0b\u7684\u8868\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"show tables;\n\n+----------------------------+\n| Tables_in_example_db       |\n+----------------------------+\n| depts                      |\n| depts_par                  |\n| emps                       |\n| emps2                      |\n+----------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u770b External catalog ",(0,t.jsx)(n.code,{children:"hudi_catalog"})," \u4e0b\u6307\u5b9a\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"hudi_db"})," \u4e2d\u7684\u8868\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"show tables from hudi_catalog.hudi_db;\n+----------------------------+\n| Tables_in_hudi_db          |\n+----------------------------+\n| hudi_sync_mor              |\n| hudi_table1                |\n+----------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SET CATALOG <catalog_name>;"})," \u5207\u6362\u5230 ",(0,t.jsx)(n.code,{children:"hudi_catalog"})," \u4e0b\uff0c\u7136\u540e\u6267\u884c ",(0,t.jsx)(n.code,{children:"SHOW TABLES FROM hudi_db;"})," \u6765\u67e5\u770b\u8be5\u6570\u636e\u5e93\u4e0b\u7684\u8868\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"}),"\uff1a\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u4e0b\u6240\u6709\u7684 Catalog\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"}),"\uff1a\u67e5\u770b Internal Catalog \u6216 External Catalog \u4e0b\u7684\u6240\u6709\u6570\u636e\u5e93\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../data-definition/SET_CATALOG.md",children:"SET CATALOG"}),"\uff1a\u5207\u6362 Catalog\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var t=s(67294);const a=t.createContext({});function l(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||d:l(e),t.createElement(a.Provider,{value:r},n)}}}]);