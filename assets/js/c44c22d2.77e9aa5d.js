"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60136],{27534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=t(85893),r=t(11151);const c={},a="SHOW ROLES",l={id:"sql-reference/sql-statements/account-management/SHOW_ROLES",title:"SHOW ROLES",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/SHOW_ROLES.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW_ROLES",permalink:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_ROLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/SHOW_ROLES.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW GRANTS",permalink:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS"},next:{title:"SHOW USERS",permalink:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_USERS"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",blockquote:"blockquote",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-roles",children:"SHOW ROLES"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Displays all roles in the system. You can use ",(0,s.jsx)(n.code,{children:"SHOW GRANTS FOR ROLE <role_name>;"})," to view the privileges of a specific role. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"}),". This command is supported from v3.0."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: Only the ",(0,s.jsx)(n.code,{children:"user_admin"})," role can execute this statement."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW ROLES\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return fields:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Field"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Name"}),(0,s.jsx)(n.td,{children:"The name of the role."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Display all roles in the system."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql> SHOW ROLES;\n+---------------+\n| Name          |\n+---------------+\n| root          |\n| db_admin      |\n| cluster_admin |\n| user_admin    |\n| public        |\n| testrole      |\n+---------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/account-management/DROP_ROLE",children:"DROP ROLE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>c});var s=t(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:c(e),s.createElement(r.Provider,{value:l},n)}}}]);