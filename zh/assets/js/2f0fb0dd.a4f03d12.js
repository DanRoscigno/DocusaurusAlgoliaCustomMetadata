"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4049],{8022:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var c=s(85893),l=s(11151);const r={},i="REVOKE",d={id:"sql-reference/sql-statements/account-management/REVOKE",title:"REVOKE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/account-management/REVOKE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/REVOKE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/REVOKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/REVOKE.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"GRANT",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/GRANT"},next:{title:"SET PASSWORD",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/SET PASSWORD"}},t={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"db_name [.tbl_name]",id:"db_name-tbl_name",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote",a:"a"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"revoke",children:"REVOKE"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bed\u53e5\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u7684\u6307\u5b9a\u6743\u9650\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u64a4\u9500\u5148\u524d\u6388\u4e88\u67d0\u7528\u6237\u7684\u6307\u5b9a\u89d2\u8272\u3002\u6ce8\u610f\u4ec5 StarRocks 2.4 \u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301\u8be5\u529f\u80fd\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u64a4\u9500\u4e00\u4e2a\u7528\u6237 IMPERSONATE \u53e6\u4e00\u4e2a\u7528\u6237\u7684\u6743\u9650\u3002\u6ce8\u610f\u4ec5 StarRocks 2.4 \u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301\u8be5\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u5bf9\u6570\u636e\u5e93\u548c\u8868\u7684\u6307\u5b9a\u6743\u9650\u3002\u5f53\u64a4\u9500\u67d0\u89d2\u8272\u7684\u6307\u5b9a\u6743\u9650\u65f6\uff0c\u8be5\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE privilege_list ON db_name[.tbl_name] FROM {user_identity | ROLE 'role_name'}\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u5bf9\u8d44\u6e90\u7684\u6307\u5b9a\u6743\u9650\u3002\u5f53\u64a4\u9500\u67d0\u89d2\u8272\u7684\u6307\u5b9a\u6743\u9650\u65f6\uff0c\u8be5\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE privilege_list ON RESOURCE 'resource_name' FROM {user_identity | ROLE 'role_name'};\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u64a4\u9500\u7528\u6237 ",(0,c.jsx)(n.code,{children:"a"})," \u4ee5\u7528\u6237 ",(0,c.jsx)(n.code,{children:"b"})," \u7684\u8eab\u4efd\u6267\u884c\u547d\u4ee4\u7684\u6743\u9650\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE IMPERSONATE ON user_identity_b FROM user_identity_a;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u64a4\u9500\u5148\u524d\u6388\u4e88\u67d0\u7528\u6237\u7684\u6307\u5b9a\u89d2\u8272\u3002\u8be5\u6307\u5b9a\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE 'role_name' FROM user_identity;\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsx)(n.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,c.jsxs)(n.p,{children:["\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u7684\u6307\u5b9a\u6743\u9650\u3002\u5982\u679c\u8981\u4e00\u6b21\u6027\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u591a\u79cd\u6743\u9650\uff0c\u9700\u8981\u7528\u9017\u53f7 (",(0,c.jsx)(n.code,{children:","}),") \u5c06\u4e0d\u540c\u6743\u9650\u5206\u9694\u5f00\u3002\u652f\u6301\u64a4\u9500\u7684\u6743\u9650\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"NODE_PRIV"}),"\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650\uff0c\u5982\u8282\u70b9\u4e0a\u4e0b\u7ebf\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ADMIN_PRIV"}),"\uff1a\u9664 ",(0,c.jsx)(n.code,{children:"NODE_PRIV"})," \u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"GRANT_PRIV"}),"\uff1a\u64cd\u4f5c\u6743\u9650\uff0c\u5982\u521b\u5efa\u7528\u6237\u548c\u89d2\u8272\u3001\u5220\u9664\u7528\u6237\u548c\u89d2\u8272\u3001\u6388\u6743\u3001\u64a4\u6743\u548c\u8bbe\u7f6e\u8d26\u6237\u5bc6\u7801\u7b49\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"SELECT_PRIV"}),"\uff1a\u6570\u636e\u5e93\u548c\u8868\u7684\u8bfb\u53d6\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"LOAD_PRIV"}),"\uff1a\u6570\u636e\u5e93\u548c\u8868\u7684\u5bfc\u5165\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ALTER_PRIV"}),"\uff1a\u6570\u636e\u5e93\u548c\u8868\u7684\u7ed3\u6784\u53d8\u66f4\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"CREATE_PRIV"}),"\uff1a\u6570\u636e\u5e93\u548c\u8868\u7684\u521b\u5efa\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"DROP_PRIV"}),"\uff1a\u6570\u636e\u5e93\u548c\u8868\u7684\u5220\u9664\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"USAGE_PRIV"}),"\uff1a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"db_name-tbl_name",children:"db_name [.tbl_name]"}),"\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u7684\u6570\u636e\u5e93\u548c\u8868\u3002\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"*.*"}),"\uff1a\u6240\u6709\u6570\u636e\u5e93\u53ca\u5e93\u4e2d\u6240\u6709\u8868\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"db.*"}),"\uff1a\u6307\u5b9a\u6570\u636e\u5e93\u53ca\u5e93\u4e2d\u6240\u6709\u8868\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"db.tbl"}),"\uff1a\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u6307\u5b9a\u8868\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u5f53\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"db.*"})," \u6216 ",(0,c.jsx)(n.code,{children:"db.tbl"})," \u683c\u5f0f\u65f6\uff0c\u6307\u5b9a\u6570\u636e\u5e93\u548c\u6307\u5b9a\u8868\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u6570\u636e\u5e93\u548c\u8868\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u7684\u8d44\u6e90\u3002\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"*"}),"\uff1a\u6240\u6709\u8d44\u6e90\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"resource"}),"\uff1a\u6307\u5b9a\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u5f53\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"resource"})," \u683c\u5f0f\u65f6\uff0c\u6307\u5b9a\u8d44\u6e90\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u53c2\u6570\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a",(0,c.jsx)(n.code,{children:"user_name"})," \u548c ",(0,c.jsx)(n.code,{children:"host"}),"\u3002 ",(0,c.jsx)(n.code,{children:"user_name"})," \u8868\u793a\u7528\u6237\u540d\u3002",(0,c.jsx)(n.code,{children:"host"})," \u8868\u793a\u7528\u6237\u7684\u4e3b\u673a\u5730\u5740\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e3a\u57df\u540d\u3002\u5982\u4e0d\u6307\u5b9a\uff0chost \u9ed8\u8ba4\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"%"}),"\uff0c\u8868\u793a\u8be5\u7528\u6237\u53ef\u4ee5\u4ece\u4efb\u610f host \u8fde\u63a5 StarRocks\u3002\u5982\u6307\u5b9a ",(0,c.jsx)(n.code,{children:"host"})," \u4e3a\u57df\u540d\uff0c\u6743\u9650\u7684\u751f\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u6709 1 \u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002",(0,c.jsx)(n.code,{children:"user_identity"})," \u5fc5\u987b\u662f\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/CREATE%20USER",children:"CREATE USER"})," \u8bed\u53e5\u521b\u5efa\u7684\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"role_name",children:"role_name"}),"\n",(0,c.jsx)(n.p,{children:"\u89d2\u8272\u540d\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u64a4\u9500\u7528\u6237 ",(0,c.jsx)(n.code,{children:"jack"})," \u5bf9\u6570\u636e\u5e93 ",(0,c.jsx)(n.code,{children:"db1"})," \u53ca\u5e93\u4e2d\u6240\u6709\u8868\u7684\u8bfb\u53d6\u6743\u9650\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u64a4\u9500\u7528\u6237 ",(0,c.jsx)(n.code,{children:"jack"})," \u5bf9\u8d44\u6e90 spark_resource \u7684\u4f7f\u7528\u6743\u9650\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u64a4\u9500\u5148\u524d\u6388\u4e88\u7528\u6237 ",(0,c.jsx)(n.code,{children:"jack"})," \u7684 ",(0,c.jsx)(n.code,{children:"my_role"})," \u89d2\u8272\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE 'my_role' FROM 'jack'@'%';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u56db\uff1a\u64a4\u9500\u7528\u6237 ",(0,c.jsx)(n.code,{children:"jack"})," \u4ee5\u7528\u6237 ",(0,c.jsx)(n.code,{children:"rose"})," \u7684\u8eab\u4efd\u6267\u884c\u547d\u4ee4\u7684\u6743\u9650\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"REVOKE IMPERSONATE ON 'rose'@'%' FROM 'jack'@'%';\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var c=s(67294);const l=c.createContext({});function r(e){const n=c.useContext(l);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:r(e),c.createElement(l.Provider,{value:d},n)}}}]);