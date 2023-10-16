"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20280],{41499:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(85893),i=n(11151);const a={displayed_sidebar:"English"},t="REVOKE",l={id:"sql-reference/sql-statements/account-management/REVOKE",title:"REVOKE",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/REVOKE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/REVOKE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/REVOKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/REVOKE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"GRANT",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/GRANT"},next:{title:"SET PASSWORD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/SET_PASSWORD"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"db_name[.tbl_name]",id:"db_nametbl_name",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"revoke",children:"REVOKE"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"You can use the REVOKE statement to perform the following operations:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Revoke specific privileges from a user or a role."}),"\n",(0,r.jsx)(s.li,{children:"Revoke the privilege that allows a user to impersonate another user to perform operations. This feature is supported only in StarRock 2.4 and later versions."}),"\n",(0,r.jsx)(s.li,{children:"Revoke a role from a user. This feature is supported only in StarRock 2.4 and later versions."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Revoke specific privileges on a database and a table from a user or a role. The role from which you want to revoke privileges must already exist."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE privilege_list ON db_name[.tbl_name] FROM {user_identity | ROLE 'role_name'}\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Revoke specific privileges on a resource from a user or a role. The role from which you want to revoke privileges must already exist."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE privilege_list ON RESOURCE 'resource_name' FROM {user_identity | ROLE 'role_name'};\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Revoke the privilege that allows user ",(0,r.jsx)(s.code,{children:"a"})," to impersonate user ",(0,r.jsx)(s.code,{children:"b"})," to perform operations."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE IMPERSONATE ON user_identity_b FROM user_identity_a;\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Revoke a role from a user. The role must already exist."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE 'role_name' FROM user_identity;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,r.jsxs)(s.p,{children:["The privileges that can be revoked from a user or a role. If you want to revoke multiple privileges at a time, separate the privileges with commas (",(0,r.jsx)(s.code,{children:","}),"). You can revoke the following privileges:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"NODE_PRIV"}),": the privilege to manage cluster nodes such as enabling nodes and disabling nodes. This privilege can only be granted to the root user."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ADMIN_PRIV"}),": all privileges except ",(0,r.jsx)(s.code,{children:"NODE_PRIV"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GRANT_PRIV"}),": the privilege of performing operations such as creating users and roles, deleting users and roles, granting privileges, revoking privileges, and setting passwords for accounts."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SELECT_PRIV"}),": the read privilege on databases and tables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"LOAD_PRIV"}),": the privilege to load data into databases and tables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ALTER_PRIV"}),": the privilege to change schemas of databases and tables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"CREATE_PRIV"}),": the privilege to create databases and tables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DROP_PRIV"}),": the privilege to delete databases and tables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"USAGE_PRIV"}),": the privilege to use resources."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"db_nametbl_name",children:"db_name[.tbl_name]"}),"\n",(0,r.jsx)(s.p,{children:"The database and table. This parameter supports the following three formats:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"*.*"}),": indicates all databases and tables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"db.*"}),": indicates a specific database and all tables in this database."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"db.tbl"}),": indicates a specific table in a specific database."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Note: When you use the ",(0,r.jsx)(s.code,{children:"db.*"})," or ",(0,r.jsx)(s.code,{children:"db.tbl"})," format, you can specify a database or a table that does not exist."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,r.jsx)(s.p,{children:"The resource name. This parameter supports the following two formats:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"*"}),": indicates all the resources."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"resource"}),": indicates a specific resource."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Note: When you use the ",(0,r.jsx)(s.code,{children:"resource"})," format, you can specify a resource that does not exist."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,r.jsxs)(s.p,{children:["This parameter contains two parts: ",(0,r.jsx)(s.code,{children:"user_name"})," and ",(0,r.jsx)(s.code,{children:"host"}),". ",(0,r.jsx)(s.code,{children:"user_name"})," indicates the user name. ",(0,r.jsx)(s.code,{children:"host"})," indicates the IP address of the user. You can leave ",(0,r.jsx)(s.code,{children:"host"})," unspecified or you can specify a domain for ",(0,r.jsx)(s.code,{children:"host"}),". If you leave ",(0,r.jsx)(s.code,{children:"host"})," unspecified, ",(0,r.jsx)(s.code,{children:"host"})," defaults to ",(0,r.jsx)(s.code,{children:"%"}),", which means you can access StarRocks from any host. If you specify a domain for ",(0,r.jsx)(s.code,{children:"host"}),", it may take one minute for the privilege to take effect. The ",(0,r.jsx)(s.code,{children:"user_identity"})," parameter must be created by the ",(0,r.jsx)(s.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," statement."]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Example 1: Revoke the read privilege on ",(0,r.jsx)(s.code,{children:"testDb"})," and all tables in this database from user ",(0,r.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Example 2: Revoke the privilege to use spark_resource from user ",(0,r.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Example 3: Revoke ",(0,r.jsx)(s.code,{children:"my_role"})," from user ",(0,r.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE 'my_role' FROM 'jack'@'%';\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Example 4: Revoke the privilege that allows user ",(0,r.jsx)(s.code,{children:"jack"})," to impersonate ",(0,r.jsx)(s.code,{children:"rose"})," to perform operations."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"REVOKE IMPERSONATE ON 'rose'@'%' FROM 'jack'@'%';\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>a});var r=n(67294);const i=r.createContext({});function a(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||t:a(e),r.createElement(i.Provider,{value:l},s)}}}]);