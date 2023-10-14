"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65699],{158:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(85893),r=s(11151);const a={},i="SET PASSWORD",c={id:"sql-reference/sql-statements/account-management/SET_PASSWORD",title:"SET PASSWORD",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/SET_PASSWORD.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_PASSWORD",permalink:"/doc/en/2.5/sql-reference/sql-statements/account-management/SET_PASSWORD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/SET_PASSWORD.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"REVOKE",permalink:"/doc/en/2.5/sql-reference/sql-statements/account-management/REVOKE"},next:{title:"SET PROPERTY",permalink:"/doc/en/2.5/sql-reference/sql-statements/account-management/SET_PROPERTY"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-password",children:"SET PASSWORD"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD [FOR user_identity] =\n[PASSWORD('plain password')]|['hashed password']\n"})}),"\n",(0,t.jsx)(n.p,{children:"SET PASSWORD command can be used to change user's login password. If the field, [FOR user_identity], does not exist, the current user's password shall be modified."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"Please note that the user_identity must match exactly the user_identity specified when creating a user by using CREATE USER. Otherwise, the user will be reported as non-existent. If user_identity is not specified, the current user is 'username'@'ip, which may not match any user_identity. The current user can be viewed through SHOW GRANTS. \n"})}),"\n",(0,t.jsx)(n.p,{children:"PASSWORD() inputs plaintext passwords, while the direct usage of strings requires the transmission of encrypted password."}),"\n",(0,t.jsx)(n.p,{children:"Modifying passwords of other users requires administrator privileges."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify the password of the current user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify the password of the specified user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:c},n)}}}]);