"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81618],{29679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(85893),r=t(11151);const l={},d="ALTER LOAD",i={id:"sql-reference/sql-statements/data-manipulation/ALTER_LOAD",title:"ALTER LOAD",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/ALTER_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/ALTER_LOAD.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW FUNCTIONS",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/show-functions"},next:{title:"BROKER LOAD",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD"}},a={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",blockquote:"blockquote",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-load",children:"ALTER LOAD"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,s.jsx)(n.strong,{children:"QUEUEING"})," \u6216\u8005 ",(0,s.jsx)(n.strong,{children:"LOADING"})," \u72b6\u6001\u7684 Broker Load \u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u3002StarRocks \u81ea v2.5 \u7248\u672c\u8d77\u652f\u6301\u8be5\u547d\u4ee4\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539\u5904\u4e8e ",(0,s.jsx)(n.strong,{children:"LOADING"})," \u72b6\u6001\u7684 Broker Load \u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u4e0d\u4f1a\u5bf9\u4f5c\u4e1a\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER LOAD FOR <label_name>\nproperties\n(\n    'priority'='{LOWEST | LOW | NORMAL | HIGH | HIGHEST}'\n)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u662f\u5426\u5fc5\u9009"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"label_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e\u3002\u683c\u5f0f\uff1a",(0,s.jsx)(n.code,{children:"[<database_name>.]<label_name>"}),"\u3002\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#label",children:"BROKER LOAD"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"priority"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,s.jsx)(n.code,{children:"LOWEST"}),"\u3001",(0,s.jsx)(n.code,{children:"LOW"}),"\u3001",(0,s.jsx)(n.code,{children:"NORMAL"}),"\u3001",(0,s.jsx)(n.code,{children:"HIGH"})," \u548c ",(0,s.jsx)(n.code,{children:"HIGHEST"}),"\u3002\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD#opt_properties",children:"BROKER LOAD"}),"\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a\u6807\u7b7e\u4e3a ",(0,s.jsx)(n.code,{children:"test_db.label1"})," \u7684 Broker Load \u4f5c\u4e1a\uff0c\u4e14\u4f5c\u4e1a\u5f53\u524d\u5904\u4e8e ",(0,s.jsx)(n.strong,{children:"QUEUEING"})," \u72b6\u6001\u6216\u8005 ",(0,s.jsx)(n.strong,{children:"LOADING"})," \u72b6\u6001\u3002\u5982\u679c\u60a8\u60f3\u5c3d\u5feb\u6267\u884c\u8be5\u4f5c\u4e1a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u628a\u8be5\u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u6539\u4e3a ",(0,s.jsx)(n.code,{children:"HIGHEST"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER LOAD FOR test_db.label1\nproperties\n(\n    'priority'='HIGHEST'\n);\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>l});var s=t(67294);const r=s.createContext({});function l(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||d:l(e),s.createElement(r.Provider,{value:i},n)}}}]);