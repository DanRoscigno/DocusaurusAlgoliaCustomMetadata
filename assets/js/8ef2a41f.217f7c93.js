"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92497],{32149:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=n(85893),i=n(11151);const l={displayed_sidebar:"documentation"},r="INSTALL PLUGIN",a={id:"sql-reference/sql-statements/Administration/INSTALL_PLUGIN",title:"INSTALL PLUGIN",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/INSTALL_PLUGIN.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/INSTALL_PLUGIN.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"EXPLAIN",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/EXPLAIN"},next:{title:"KILL",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/KILL"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"install-plugin",children:"INSTALL PLUGIN"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"This statement is used to install a plugin,"}),"\n",(0,t.jsx)(s.p,{children:"Syntax:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,t.jsx)(s.p,{children:"3 types of sources are supported:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"1. An absolute path that directs to a zip file\n2. An absolute path that directs to a plugin directory \n3. A http or https download link that directs to a zip file\n"})}),"\n",(0,t.jsx)(s.p,{children:"PROPERTIES supports setting some configurations of plugins, such as setting the  md5sum value of the zip file, etc."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Install a plugin from local zip file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/starrocks/auditdemo.zip";\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Install a plugin from local inpath:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/starrocks/auditdemo/";\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Download and install a plugin:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Download and install a plugin. Meanwhile, set the md5sum value of the zip file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n'})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>l});var t=n(67294);const i=t.createContext({});function l(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:l(e),t.createElement(i.Provider,{value:a},s)}}}]);