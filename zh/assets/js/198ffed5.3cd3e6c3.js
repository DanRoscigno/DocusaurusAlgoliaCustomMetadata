"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[7368],{1978:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese"},a="SET DEFAULT ROLE",d={id:"sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",title:"SET DEFAULT ROLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"REVOKE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/REVOKE"},next:{title:"SET PASSWORD",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_PASSWORD"}},l={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-default-role",children:"SET DEFAULT ROLE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u7528\u6237\u767b\u5f55\u65f6\u9ed8\u8ba4\u6fc0\u6d3b\u7684\u89d2\u8272\u3002\u8be5\u547d\u4ee4\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"-- \u8bbe\u7f6e\u6307\u5b9a\u89d2\u8272\u4e3a\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\u3002\nSET DEFAULT ROLE <role_name>[,<role_name>,..] TO <user_identity>;\n-- \u8bbe\u7f6e\u7528\u6237\u62e5\u6709\u7684\u6240\u6709\u89d2\u8272\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u5305\u62ec\u672a\u6765\u8d4b\u4e88\u7ed9\u7528\u6237\u7684\u89d2\u8272\u3002\nSET DEFAULT ROLE ALL TO <user_identity>;\n-- \u4e0d\u8bbe\u7f6e\u4efb\u4f55\u89d2\u8272\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4f46\u6b64\u65f6\u7528\u6237\u4ecd\u65e7\u4f1a\u9ed8\u8ba4\u6fc0\u6d3b public \u89d2\u8272\u3002\nSET DEFAULT ROLE NONE TO <user_identity>; \n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"role_name"}),": \u7528\u6237\u62e5\u6709\u7684\u89d2\u8272\u540d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"user_identity"}),": \u7528\u6237\u6807\u8bc6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.p,{children:["\u666e\u901a\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u5df1\u7684\u9ed8\u8ba4\u89d2\u8272\uff0c",(0,t.jsx)(n.code,{children:"user_admin"})," \u53ef\u4ee5\u4e3a\u5176\u4ed6\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u89d2\u8272\u3002\u8bbe\u5b9a\u65f6\uff0c\u8bf7\u786e\u8ba4\u7528\u6237\u5df2\u7ecf\u62e5\u6709\u5bf9\u5e94\u89d2\u8272\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})," \u67e5\u770b\u62e5\u6709\u7684\u89d2\u8272\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u7528\u6237\u62e5\u6709\u7684\u89d2\u8272\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS FOR test;\n+--------------+---------+----------------------------------------------+\n| UserIdentity | Catalog | Grants                                       |\n+--------------+---------+----------------------------------------------+\n| 'test'@'%'   | NULL    | GRANT 'db_admin', 'user_admin' TO 'test'@'%' |\n+--------------+---------+----------------------------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"db_admin"}),"\u3001",(0,t.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u4e3a ",(0,t.jsx)(n.code,{children:"test"})," \u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET DEFAULT ROLE db_admin TO test;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"test"})," \u7528\u6237\u62e5\u6709\u7684\u6240\u6709\u89d2\u8272\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u5305\u542b\u672a\u6765\u6388\u4e88\u7ed9\u7528\u6237\u7684\u89d2\u8272\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET DEFAULT ROLE ALL TO test;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u6e05\u7a7a ",(0,t.jsx)(n.code,{children:"test"})," \u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET DEFAULT ROLE NONE TO test;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(c.Provider,{value:d},n)}}}]);