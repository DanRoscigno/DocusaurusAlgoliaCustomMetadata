"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76345],{21511:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=n(85893),r=n(11151);const a={displayed_sidebar:"English"},l="SET DEFAULT ROLE",c={id:"sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",title:"SET DEFAULT ROLE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"REVOKE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/REVOKE"},next:{title:"SET PASSWORD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SET_PASSWORD"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"set-default-role",children:"SET DEFAULT ROLE"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Sets the roles that are activated by default when the user connects to the server."}),"\n",(0,t.jsx)(s.p,{children:"This command is supported from v3.0."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"-- Set specified roles as default roles.\nSET DEFAULT ROLE <role_name>[,<role_name>,..] TO <user_identity>;\n-- Set all roles of the user, including roles that will be assigned to this user, as default roles. \nSET DEFAULT ROLE ALL TO <user_identity>;\n-- No default role is set but the public role is still enabled after a user login. \nSET DEFAULT ROLE NONE TO <user_identity>; \n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"role_name"}),": the role name"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"user_identity"}),": the user identity"]}),"\n",(0,t.jsx)(s.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(s.p,{children:["Individual users can set default roles for themselves. ",(0,t.jsx)(s.code,{children:"user_admin"})," can set default roles for other users. Before you perform this operation, make sure that the user has already been assigned these roles."]}),"\n",(0,t.jsxs)(s.p,{children:["You can query the roles of a user using ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Query the roles of the current user."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW GRANTS FOR test;\n+--------------+---------+----------------------------------------------+\n| UserIdentity | Catalog | Grants                                       |\n+--------------+---------+----------------------------------------------+\n| 'test'@'%'   | NULL    | GRANT 'db_admin', 'user_admin' TO 'test'@'%' |\n+--------------+---------+----------------------------------------------+\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 1: Set roles ",(0,t.jsx)(s.code,{children:"db_admin"})," and ",(0,t.jsx)(s.code,{children:"user_admin"})," as the default roles for the user ",(0,t.jsx)(s.code,{children:"test"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET DEFAULT ROLE db_admin TO test;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 2: Set all roles of the user ",(0,t.jsx)(s.code,{children:"test"}),", including roles that will be assigned to this user as default roles."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET DEFAULT ROLE ALL TO test;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 3: Clear all the default roles of the user ",(0,t.jsx)(s.code,{children:"test"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET DEFAULT ROLE NONE TO test;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>a});var t=n(67294);const r=t.createContext({});function a(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:a(e),t.createElement(r.Provider,{value:c},s)}}}]);