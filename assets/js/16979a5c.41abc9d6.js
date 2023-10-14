"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[91322],{73734:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(85893),t=s(11151);const i={},a="SHOW GRANTS",l={id:"sql-reference/sql-statements/account-management/SHOW_GRANTS",title:"SHOW GRANTS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW_GRANTS",permalink:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW AUTHENTICATION",permalink:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION"},next:{title:"SHOW ROLES",permalink:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_ROLES"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"show-grants",children:"SHOW GRANTS"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Displays all the privileges that have been granted to a user or role."}),"\n",(0,r.jsxs)(n.p,{children:["For more information about roles and privileges, see ",(0,r.jsx)(n.a,{href:"/doc/en/3.0/administration/privilege_overview",children:"Overview of privileges"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: All the roles and users can view the privileges granted to them or the roles assigned to them. However, only the ",(0,r.jsx)(n.code,{children:"user_admin"})," role can view the privileges of a specific user or role."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS; -- View the privileges of the current user.\nSHOW GRANTS FOR ROLE <role_name>; -- View the privileges of a specific role.\nSHOW GRANTS FOR <user_identity>; -- View the privileges of a specific user.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"role_name"}),"\n",(0,r.jsx)(n.li,{children:"user_identity"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return fields:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- View the privileges of a specific user.\n+--------------+--------+---------------------------------------------+\n|UserIdentity  |Catalog | Grants                                      |\n+--------------+--------+---------------------------------------------+\n\n-- View the privileges of a specific role.\n+-------------+--------+-------------------------------------------------------+\n|RoleName     |Catalog | Grants                                                |\n+-------------+-----------------+----------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Field"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UserIdentity"}),(0,r.jsx)(n.td,{children:"The user identity, which is displayed when you query the privileges of a user."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RoleName"}),(0,r.jsx)(n.td,{children:"The role name, which is displayed when you query the privileges of a role."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Catalog"}),(0,r.jsxs)(n.td,{children:["The catalog name.",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"default"})," is returned if the GRANT operation is performed on the StarRocks internal catalog.",(0,r.jsx)("br",{}),"The name of the external catalog is returned if the GRANT operation is performed on an external catalog.",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"NULL"})," is returned if the operation shown in the ",(0,r.jsx)(n.code,{children:"Grants"})," column is assigning roles."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Grants"}),(0,r.jsx)(n.td,{children:"The specific GRANT operation."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"mysql> SHOW GRANTS;\n+--------------+---------+----------------------------------------+\n| UserIdentity | Catalog | Grants                                 |\n+--------------+---------+----------------------------------------+\n| 'root'@'%'   | NULL    | GRANT 'root', 'testrole' TO 'root'@'%' |\n+--------------+---------+----------------------------------------+\n\nmysql> SHOW GRANTS FOR 'user_g'@'%';\n+-------------+-------------+-----------------------------------------------------------------------------------------------+\n|UserIdentity |Catalog      |Grants                                                                                         |\n+-------------+-------------------------------------------------------------------------------------------------------------+\n|'user_g'@'%' |NULL         |GRANT role_g, public to `user_g`@`%`;                                                          | \n|'user_g'@'%' |NULL         |GRANT IMPERSONATE ON `user_a`@`%`, `user_b`@`%`TO `user_g`@`%`;                                |    \n|'user_g'@'%' |default      |GRANT CREATE_DATABASE ON CATALOG default_catalog TO USER `user_g`@`%`;                         | \n|'user_g'@'%' |default      |GRANT ALTER, DROP, CREATE_TABLE ON DATABASE db1 TO USER `user_g`@`%`;                          | \n|'user_g'@'%' |default      |GRANT CREATE_VIEW ON DATABASE db1 TO USER `user_g`@`%` WITH GRANT OPTION;                      | \n|'user_g'@'%' |default      |GRANT ALTER, DROP, SELECT, INGEST, EXPORT, DELETE, UPDATE ON TABLE db.* TO USER `user_g`@`%`;  | \n|'user_g'@'%' |default      |GRANT ALTER, DROP, SELECT ON VIEW db2.view TO USER `user_g`@`%`;                               | \n|'user_g'@'%' |Hive_catalog |GRANT USAGE ON CATALOG Hive_catalog TO USER `user_g`@`%`                                       |\n+-------------+--------------+-----------------------------------------------------------------------------------------------+\n\nmysql> SHOW GRANTS FOR ROLE role_g;\n+-------------+--------+-------------------------------------------------------+\n|RoleName     |Catalog | Grants                                                |\n+-------------+-----------------+----------------------------------------------+\n|role_g       |NULL    | GRANT role_p, role_test TO ROLE role_g;               | \n|role_g       |default | GRANT SELECT ON *.* TO ROLE role_g WITH GRANT OPTION; | \n+-------------+--------+--------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:i(e),r.createElement(t.Provider,{value:l},n)}}}]);