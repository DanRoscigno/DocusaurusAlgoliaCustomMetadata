"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61868],{45505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(85893),i=n(11151);const a={displayed_sidebar:"English"},r="SHOW VARIABLES",l={id:"sql-reference/sql-statements/Administration/SHOW_VARIABLES",title:"SHOW VARIABLES",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_VARIABLES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW TABLE STATUS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_TABLE_STATUS"},next:{title:"UNINSTALL PLUGIN",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/UNINSTALL_PLUGIN"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-variables",children:"SHOW VARIABLES"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Shows the system variables of StarRocks. For details about system variables, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/reference/System_variable",children:"System Variables"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW [ GLOBAL | SESSION ] VARIABLES\n    [ LIKE <pattern> | WHERE <expr> ]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Modifier:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"GLOBAL"}),(0,s.jsx)("li",{children:"SESSION"})]})]}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["With a ",(0,s.jsx)(t.code,{children:"GLOBAL"})," modifier, the statement displays global system variable values. These are the values used to initialize the corresponding session variables for new connections to StarRocks. If a variable has no global value, no value is displayed."]}),(0,s.jsxs)("li",{children:["With a ",(0,s.jsx)(t.code,{children:"SESSION"})," modifier, the statement displays the system variable values that are in effect for the current connection. If a variable has no session value, the global value is displayed. ",(0,s.jsx)(t.code,{children:"LOCAL"})," is a synonym for ",(0,s.jsx)(t.code,{children:"SESSION"}),"."]}),(0,s.jsxs)("li",{children:["If no modifier is present, the default is ",(0,s.jsx)(t.code,{children:"SESSION"}),"."]})]})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pattern"}),(0,s.jsx)(t.td,{children:"The pattern used to match the variable by the variable name with the LIKE clause. You can use the % wildcard in this parameter."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expr"}),(0,s.jsxs)(t.td,{children:["The expression used to match the variable by the variable name ",(0,s.jsx)(t.code,{children:"variable_name"})," or the variable value ",(0,s.jsx)(t.code,{children:"value"})," with the WHERE clause."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Return"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Variable_name"}),(0,s.jsx)(t.td,{children:"The name of the variable."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Value"}),(0,s.jsx)(t.td,{children:"The value of the variable."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Example 1: Show a variable by exactly matching the variable name with the LIKE clause."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW VARIABLES LIKE 'wait_timeout';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| wait_timeout  | 28800 |\n+---------------+-------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 2: Show variables by approximately matching the variable name with the LIKE clause and the wildcard (%)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW VARIABLES LIKE '%imeou%';\n+------------------------------------+-------+\n| Variable_name                      | Value |\n+------------------------------------+-------+\n| interactive_timeout                | 3600  |\n| net_read_timeout                   | 60    |\n| net_write_timeout                  | 60    |\n| new_planner_optimize_timeout       | 3000  |\n| query_delivery_timeout             | 300   |\n| query_queue_pending_timeout_second | 300   |\n| query_timeout                      | 300   |\n| tx_visible_wait_timeout            | 10    |\n| wait_timeout                       | 28800 |\n+------------------------------------+-------+\n9 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 3: Show a variable by exactly matching the variable name with the WHERE clause."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> show variables where variable_name = 'wait_timeout';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| wait_timeout  | 28800 |\n+---------------+-------+\n1 row in set (0.17 sec)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 4: Show a variable by exactly matching the value of the variable with the WHERE clause."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> show variables where value = '28800';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| wait_timeout  | 28800 |\n+---------------+-------+\n1 row in set (0.70 sec)\n"})})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:l},t)}}}]);