"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45143],{28926:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=s(85893),t=s(11151);const i={},r="CREATE USER",l={id:"sql-reference/sql-statements/account-management/CREATE USER",title:"CREATE USER",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/CREATE USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/CREATE USER",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/CREATE USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/CREATE USER.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE ROLE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/CREATE ROLE"},next:{title:"DROP ROLE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/DROP ROLE"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li",p:"p"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-user",children:"CREATE USER"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE USER\nuser_identity [auth_option]\n[DEFAULT ROLE 'role_name']\n\nuser_identity:\n    'user_name'@'host'\n\nauth_option: {\n    IDENTIFIED BY 'auth_string'\n    IDENTIFIED WITH auth_plugin\n    IDENTIFIED WITH auth_plugin BY 'auth_string'\n    IDENTIFIED WITH auth_plugin AS 'auth_string'\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'The command "CREATE USER" is used to create a StarRocks user. In StarRocks, a "user_identity" uniquely identifies a user.'}),"\n",(0,a.jsx)(n.li,{children:'"user_identity" consists of two parts, "user_name" and "host". Here, "user_name" is the username and "host" identifies the host address where the client connects. The "host" part can use % for fuzzy matching. If no host is specified, the default is \'%\', meaning that the user can connect to StarRocks from any host.'}),"\n",(0,a.jsx)(n.li,{children:'"auth_option" specifies user authentication method. It currently supports "mysql_native_password" and "authentication_ldap_simple".'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If a role is specified, it will automatically grant all permissions the role owns to this newly created user with the precondition that the role already exists. If a role is not specified, the user defaults to having no permission."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a passwordless user (without specifying host, it is equivalent to jack@'%')"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE USER 'jack';\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a password user that allows login from '172.10.1.10'."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To avoid passing in plaintext, use case 2 can also be created in the following way"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,a.jsx)(n.p,{children:"The encrypted content could be obtained though PASSWORD(), for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT PASSWORD('123456');\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a user authenticated by ldap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a user authenticated by ldap, and specify user's DN (Distinguished Name) in ldap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com'\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a user who is allowed to log in from '192.168' subnet and meanwhile specify its role as example_role"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a user who is allowed to log in from the domain named 'example_domain'"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '123456';\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a user and specify a role"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var a=s(67294);const t=a.createContext({});function i(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:i(e),a.createElement(t.Provider,{value:l},n)}}}]);