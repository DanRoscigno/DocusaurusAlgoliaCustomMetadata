"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16681],{65510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const i={displayed_sidebar:"English"},a="SHOW AUTHENTICATION",c={id:"sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION",title:"SHOW AUTHENTICATION",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SET ROLE",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SET_ROLE"},next:{title:"SHOW GRANTS",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-authentication",children:"SHOW AUTHENTICATION"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Displays the authentication information of the current user or all users in the current cluster. Each user has privilege to view their authentication information. Only users with the global ",(0,s.jsx)(n.code,{children:"GRANT"})," privilege and the ",(0,s.jsx)(n.code,{children:"user_admin role"})," can view the authentication information of all users or the authentication information of specified users."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW [ALL] AUTHENTICATION [FOR USERNAME]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Required"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ALL"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"If this keyword is specified, the authentication information of all users in the current cluster is returned. If this keyword is not specified, only the authentication information of the current user is returned."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"USERNAME"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"If this parameter is specified, the authentication information of a specified user can be viewed. If this parameter is not specified, only the authentication information of the current user can be viewed."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"+---------------+----------+-------------+-------------------+\n| UserIdentity  | Password | AuthPlugin  | UserForAuthPlugin |\n+---------------+----------+-------------+-------------------+\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Field"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UserIdentity"}),(0,s.jsx)(n.td,{children:"The user identity."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Password"}),(0,s.jsxs)(n.td,{children:["Whether a password is used to log in to the StarRocks cluster.",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.code,{children:"Yes"}),": A password is used."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.code,{children:"No"}),": No password is used."]})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AuthPlugin"}),(0,s.jsxs)(n.td,{children:["The interface that is used for authentication. Valid values: ",(0,s.jsx)(n.code,{children:"MYSQL_NATIVE_PASSWORD"}),",  ",(0,s.jsx)(n.code,{children:"AUTHENTICATION_LDAP_SIMPLE"}),", or ",(0,s.jsx)(n.code,{children:"AUTHENTICATION_KERBEROS"}),". If no interface is used, ",(0,s.jsx)(n.code,{children:"NULL"})," is returned."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UserForAuthPlugin"}),(0,s.jsxs)(n.td,{children:["The name of the user using the LDAP or Kerberos authentication. If no authentication is used, ",(0,s.jsx)(n.code,{children:"NULL"})," is returned."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Display the authentication information of the current user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SHOW AUTHENTICATION;\n+--------------+----------+------------+-------------------+\n| UserIdentity | Password | AuthPlugin | UserForAuthPlugin |\n+--------------+----------+------------+-------------------+\n| 'root'@'%'   | No       | NULL       | NULL              |\n+--------------+----------+------------+-------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Display the authentication information of all users in the current cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SHOW ALL AUTHENTICATION;\n+---------------+----------+-------------------------+-------------------+\n| UserIdentity  | Password | AuthPlugin              | UserForAuthPlugin |\n+---------------+----------+-------------------------+-------------------+\n| 'root'@'%'    | Yes      | NULL                    | NULL              |\n| 'chelsea'@'%' | No       | AUTHENTICATION_KERBEROS | HADOOP.COM        |\n+---------------+----------+-------------------------+-------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 3: Display the authentication information of a specified user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SHOW AUTHENTICATION FOR root;\n+--------------+----------+------------+-------------------+\n| UserIdentity | Password | AuthPlugin | UserForAuthPlugin |\n+--------------+----------+------------+-------------------+\n| 'root'@'%'   | Yes      | NULL       | NULL              |\n+--------------+----------+------------+-------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:c},n)}}}]);