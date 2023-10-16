"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85321],{27826:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=t(85893),i=t(11151);const n={displayed_sidebar:"English"},a="SET",l={id:"sql-reference/sql-statements/Administration/SET",title:"SET",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SET.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SET",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SET",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/SET.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"KILL",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/KILL"},next:{title:"SHOW BACKENDS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_BACKENDS"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"set",children:"SET"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["Sets the specified system variables or user-defined variables for StarRocks. You can view the system variables of StarRocks using ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES",children:"SHOW VARIABLES"}),". For details about system variables, see ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/reference/System_variable",children:"System Variables"}),". For details about user-defined variables, see ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/reference/user_defined_variables",children:"User-defined variables"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET [ GLOBAL | SESSION ] <variable_name> = <value> [, <variable_name> = <value>] ...\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Parameter"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Modifier:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"GLOBAL"}),(0,r.jsx)("li",{children:"SESSION"})]})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["With a ",(0,r.jsx)(s.code,{children:"GLOBAL"})," modifier, the statement sets the variables globally."]}),(0,r.jsxs)("li",{children:["With a ",(0,r.jsx)(s.code,{children:"SESSION"})," modifier, the statement sets the variables within the session. ",(0,r.jsx)(s.code,{children:"LOCAL"})," is a synonym for ",(0,r.jsx)(s.code,{children:"SESSION"}),"."]}),(0,r.jsxs)("li",{children:["If no modifier is present, the default is ",(0,r.jsx)(s.code,{children:"SESSION"}),"."]})]}),"For details about global and session variables, see ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/reference/System_variable",children:"System Variables"}),".",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"NOTE"}),(0,r.jsx)("br",{}),"Only users with the ADMIN privilege can set the variables globally."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"variable_name"}),(0,r.jsx)(s.td,{children:"The name of the variable."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"value"}),(0,r.jsx)(s.td,{children:"The value of the variable."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Example 1: Set the ",(0,r.jsx)(s.code,{children:"time_zone"})," to ",(0,r.jsx)(s.code,{children:"Asia/Shanghai"})," within the session."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'mysql> SET time_zone = "Asia/Shanghai";\nQuery OK, 0 rows affected (0.00 sec)\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Example 2: Set the ",(0,r.jsx)(s.code,{children:"exec_mem_limit"})," to ",(0,r.jsx)(s.code,{children:"2147483648"})," globally."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"mysql> SET GLOBAL exec_mem_limit = 2147483648;\nQuery OK, 0 rows affected (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>n});var r=t(67294);const i=r.createContext({});function n(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:n(e),r.createElement(i.Provider,{value:l},s)}}}]);