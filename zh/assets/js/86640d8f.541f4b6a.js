"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70929],{35100:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var c=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese"},d="CREATE USER",l={id:"sql-reference/sql-statements/account-management/CREATE_USER",title:"CREATE USER",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/account-management/CREATE_USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/CREATE_USER",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/CREATE_USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/CREATE_USER.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CREATE ROLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/CREATE_ROLE"},next:{title:"DROP ROLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/DROP_ROLE"}},i={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"create-user",children:"CREATE USER"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa StarRocks \u7528\u6237\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ea\u6709\u62e5\u6709 ",(0,c.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u7684\u7528\u6237\u624d\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER <user_identity> [auth_option] [DEFAULT ROLE <role_name>[, <role_name>, ...]]\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"user_identity"}),"\uff1a\u7528\u6237\u6807\u8bc6\u3002\u7531\u767b\u5f55IP\uff08userhost\uff09\u548c\u7528\u6237\u540d\uff08username\uff09\u7ec4\u6210\uff0c\u5199\u4f5c\uff1a",(0,c.jsx)(n.code,{children:"username@'userhost'"})," \u3002\u5176\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"userhost"})," \u7684\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"%"})," \u6765\u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,c.jsx)(n.code,{children:"userhost"}),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"%"}),"\uff0c\u5373\u8868\u793a\u521b\u5efa\u4e00\u4e2a\u53ef\u4ee5\u4ece\u4efb\u610f host \u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"username"})," \u94fe\u63a5\u5230 StarRocks \u7684\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"auth_option"}),"\uff1a\u7528\u6237\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002\u76ee\u524d\uff0cStarRocks \u652f\u6301\u539f\u751f\u5bc6\u7801\u3001mysql_native_password \u548c LDAP \u4e09\u79cd\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5176\u4e2d\uff0c\u539f\u751f\u5bc6\u7801\u4e0e mysql_native_password \u8ba4\u8bc1\u65b9\u5f0f\u7684\u5185\u5728\u903b\u8f91\u76f8\u540c\uff0c\u4ec5\u5728\u5177\u4f53\u8bbe\u7f6e\u8bed\u6cd5\u4e0a\u6709\u8f7b\u5fae\u5dee\u522b\u3002\u540c\u4e00\u4e2a user identity \u53ea\u80fd\u4f7f\u7528\u4e00\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"  auth_option: {\n      IDENTIFIED BY 'auth_string'\n      IDENTIFIED WITH mysql_native_password BY 'auth_string'\n      IDENTIFIED WITH mysql_native_password AS 'auth_string'\n      IDENTIFIED WITH authentication_ldap_simple AS 'auth_string'\n      \n  }\n"})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u8ba4\u8bc1\u65b9\u5f0f"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u521b\u5efa\u7528\u6237\u65f6\u7684\u5bc6\u7801"})}),(0,c.jsx)(n.th,{children:(0,c.jsxs)(n.strong,{children:["\u7528\u6237",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.strong,{children:"\u767b\u5f55"})}),"\u65f6\u7684\u5bc6\u7801"]})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u539f\u751f\u5bc6\u7801"}),(0,c.jsx)(n.td,{children:"\u660e\u6587\u6216\u5bc6\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"mysql_native_password BY"})}),(0,c.jsx)(n.td,{children:"\u660e\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"mysql_native_password WITH"})}),(0,c.jsx)(n.td,{children:"\u5bc6\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"authentication_ldap_simple"})}),(0,c.jsx)(n.td,{children:"\u660e\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]})]})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\uff1a\u5728\u6240\u6709\u8ba4\u8bc1\u65b9\u5f0f\u4e2d\uff0cStarRocks\u5747\u4f1a\u52a0\u5bc6\u5b58\u50a8\u7528\u6237\u7684\u5bc6\u7801\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DEFAULT ROLE <role_name>[, <role_name>, ...]"}),"\uff1a\u5982\u679c\u6307\u5b9a\u4e86\u6b64\u53c2\u6570\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u6b64\u89d2\u8272\u8d4b\u4e88\u7ed9\u7528\u6237\uff0c\u5e76\u4e14\u5728\u7528\u6237\u767b\u5f55\u540e\u9ed8\u8ba4\u6fc0\u6d3b\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u8be5\u7528\u6237\u9ed8\u8ba4\u6ca1\u6709\u4efb\u4f55\u6743\u9650\u3002\u6307\u5b9a\u7684\u89d2\u8272\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528\u660e\u6587\u5bc6\u7801\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff08\u4e0d\u6307\u5b9a host \u7b49\u4ef7\u4e8e jack@'%'\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack IDENTIFIED BY '123456';\nCREATE USER jack IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528\u5bc6\u6587\u5bc6\u7801\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u5141\u8bb8\u8be5\u7528\u6237\u4ece '172.10.1.10' \u767b\u5f55\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\nCREATE USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u5bc6\u6587\u5bc6\u7801\u53ef\u4ee5\u901a\u8fc7PASSWORD()\u51fd\u6570\u83b7\u5f97"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece\u57df\u540d 'example_domain' \u767b\u5f55\u7684\u7528\u6237\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '123456';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u521b\u5efa\u4e00\u4e2a LDAP \u8ba4\u8bc1\u7684\u7528\u6237\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e94\uff1a\u521b\u5efa\u4e00\u4e2a LDAP \u8ba4\u8bc1\u7684\u7528\u6237\uff0c\u5e76\u6307\u5b9a\u7528\u6237\u5728 LDAP \u4e2d\u7684 DN (Distinguished Name)\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u516d\uff1a\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece '192.168' \u5b50\u7f51\u767b\u5f55\u7684\u7528\u6237\uff0c\u540c\u65f6\u6307\u5b9a\u5176\u9ed8\u8ba4\u89d2\u8272\u4e3a ",(0,c.jsx)(n.code,{children:"db_admin"})," \u548c ",(0,c.jsx)(n.code,{children:"user_admin"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE db_admin, user_admin;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u7528\u6237\u540e\uff0c\u53ef\u4ee5\u4e3a\u7528\u6237\u6388\u4e88\u6743\u9650\u6216\u89d2\u8272\uff0c\u66f4\u6539\u7528\u6237\u4fe1\u606f\uff0c\u6216\u8005\u5220\u9664\u7528\u6237\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/DROP_USER",children:"DROP USER"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var c=s(67294);const r=c.createContext({});function t(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||d:t(e),c.createElement(r.Provider,{value:l},n)}}}]);