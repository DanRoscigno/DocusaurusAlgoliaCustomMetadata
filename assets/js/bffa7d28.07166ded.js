"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39251],{24721:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(85893),i=s(11151);const r={displayed_sidebar:"English"},c="KILL",a={id:"sql-reference/sql-statements/Administration/KILL",title:"KILL",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/KILL.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/KILL",permalink:"/doc/docs/sql-reference/sql-statements/Administration/KILL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/KILL.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"INSTALL PLUGIN",permalink:"/doc/docs/sql-reference/sql-statements/Administration/INSTALL_PLUGIN"},next:{title:"SET",permalink:"/doc/docs/sql-reference/sql-statements/Administration/SET"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"kill",children:"KILL"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Terminates a connection or a query currently being performed by threads executing within StarRocks."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"KILL [ CONNECTION | QUERY ] <processlist_id>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Modifier:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"CONNECTION"}),(0,n.jsx)("li",{children:"QUERY"})]})]}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["With a ",(0,n.jsx)(t.code,{children:"CONNECTION"})," modifier, the KILL statement terminates the connection associated with the given ",(0,n.jsx)(t.code,{children:"processlist_id"}),", after terminating any statement the connection is executing."]}),(0,n.jsxs)("li",{children:["With a ",(0,n.jsx)(t.code,{children:"QUERY"})," modifier, the KILL statement terminates the statement the connection is currently executing, but leaves the connection itself intact."]}),(0,n.jsxs)("li",{children:["If no modifier is present, the default is ",(0,n.jsx)(t.code,{children:"CONNECTION"}),"."]})]})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"processlist_id"}),(0,n.jsxs)(t.td,{children:["The ID of the thread you want to terminate. You can get the IDs of the threads that are being executed using ",(0,n.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",children:"SHOW PROCESSLIST"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW FULL PROCESSLIST;\n+------+------+---------------------+--------+---------+---------------------+------+-------+-----------------------+-----------+\n| Id   | User | Host                | Db     | Command | ConnectionStartTime | Time | State | Info                  | IsPending |\n+------+------+---------------------+--------+---------+---------------------+------+-------+-----------------------+-----------+\n|   20 | root | xxx.xx.xxx.xx:xxxxx | sr_hub | Query   | 2023-01-05 16:30:19 |    0 | OK    | show full processlist | false     |\n+------+------+---------------------+--------+---------+---------------------+------+-------+-----------------------+-----------+\n1 row in set (0.01 sec)\n\nmysql> KILL 20;\nQuery OK, 0 rows affected (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:r(e),n.createElement(i.Provider,{value:a},t)}}}]);