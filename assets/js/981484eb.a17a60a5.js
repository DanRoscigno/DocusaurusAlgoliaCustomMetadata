"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44579],{52613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={},o="ADMIN SET CONFIG",c={id:"sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",title:"ADMIN SET CONFIG",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",permalink:"/doc/en/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ADMIN REPAIR",permalink:"/doc/en/sql-reference/sql-statements/Administration/ADMIN_REPAIR"},next:{title:"ADMIN SET REPLICA STATUS",permalink:"/doc/en/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"admin-set-config",children:"ADMIN SET CONFIG"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["This statement is used to set configuration items for the cluster (Currently, only FE dynamic configuration items can be set using this command). You can view these configuration items using the ",(0,s.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SHOW FRONTEND CONFIG"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["The configurations will be restored to the default values in the ",(0,s.jsx)(n.code,{children:"fe.conf"})," file after the FE restarts. Therefore, we recommend that you also modify the configuration items in ",(0,s.jsx)(n.code,{children:"fe.conf"})," to prevent the loss of modifications."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("key" = "value")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"disable_balance"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\n'})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:c},n)}}}]);