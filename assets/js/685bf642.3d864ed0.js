"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12607],{70622:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=n(85893),i=n(11151);const r={displayed_sidebar:"English"},l="SHOW FILE",a={id:"sql-reference/sql-statements/Administration/SHOW_FILE",title:"SHOW FILE",description:"You can execute the SHOW FILE statement to view the information about a file stored in a database.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW_FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_FILE",permalink:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FILE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW_FILE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW COMPUTE NODES",permalink:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES"},next:{title:"SHOW FRONTENDS",permalink:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_FRONTENDS"}},c={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-file",children:"SHOW FILE"}),"\n",(0,t.jsx)(s.p,{children:"You can execute the SHOW FILE statement to view the information about a file stored in a database."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW FILE [FROM database]\n"})}),"\n",(0,t.jsx)(s.p,{children:"The file information returned by this statement is as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"FileId"}),": the globally unique ID of the file."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"DbName"}),": the database to which the file belongs."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Catalog"}),": the category to which the file belongs."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"FileName"}),": the name of the file."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"FileSize"}),": the size of the file. The unit is bytes."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"MD5"}),": the message-digest algorithm that is used to check the file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["View the file stored in ",(0,t.jsx)(s.code,{children:"my_database"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW FILE FROM my_database;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:a},s)}}}]);