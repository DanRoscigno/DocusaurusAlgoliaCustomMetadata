"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86861],{8273:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var t=s(85893),a=s(11151);const c={},i="ALTER USER",r={id:"sql-reference/sql-statements/account-management/ALTER_USER",title:"ALTER USER",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/ALTER_USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/ALTER_USER",permalink:"/doc/en/2.5/sql-reference/sql-statements/account-management/ALTER_USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/ALTER_USER.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"DESC",permalink:"/doc/en/2.5/sql-reference/sql-statements/Utility/DESCRIBE"},next:{title:"CREATE ROLE",permalink:"/doc/en/2.5/sql-reference/sql-statements/account-management/CREATE_ROLE"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-user",children:"ALTER USER"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Changes user information."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER USER\nuser_identity [auth_option]\n\nuser_identity:\n'user_name'@'host'\n\nauth_option: {\nIDENTIFIED BY 'auth_string'\nIDENTIFIED WITH auth_plugin\nIDENTIFIED  WITH auth_plugin BY 'auth_string'\nIDENTIFIED WITH auth_plugin AS 'auth_string'\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:'The command is used to change user information. \n "auth_option" specifies authentication method. It currently supports "mysql_native_password" and "authentication_ldap_simple".\n'})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Change user's password in mysql."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER USER 'jack' IDENTIFIED BY '123456';\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER USER 'jack' IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To avoid transmitting password in plaintext, the following method can also be used to change password."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,t.jsx)(n.p,{children:'The encrypted content can be obtained by "PASSWORD()", for example:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT PASSWORD('123456');\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Alter user authentication method as "ldap".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED WITH authentication_ldap_simple\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Alter user authentication method as "ldap", and specify user\'s DN (Distinguished Name) in ldap.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com'\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var t=s(67294);const a=t.createContext({});function c(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(a.Provider,{value:r},n)}}}]);