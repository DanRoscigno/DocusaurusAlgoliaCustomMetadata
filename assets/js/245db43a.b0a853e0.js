"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3637],{63221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151);const r={displayed_sidebar:"English"},l="SHOW SQLBLACKLIST",a={id:"sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",title:"SHOW SQLBLACKLIST",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW RESOURCE GROUP",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP"},next:{title:"SHOW TABLE STATUS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_TABLE_STATUS"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-sqlblacklist",children:"SHOW SQLBLACKLIST"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Shows the SQL regular expressions in the SQL blacklist."}),"\n",(0,s.jsxs)(t.p,{children:["For more about SQL Blacklist, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/administration/Blacklist",children:"Manage SQL Blacklist"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW SQLBLACKLIST\n"})}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Return"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Index"}),(0,s.jsx)(t.td,{children:"The index number of the SQL regular expression that has been added to the blacklist."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Forbidden SQL"}),(0,s.jsx)(t.td,{children:"The SQL regular expression that has been added to the blacklist."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW SQLBLACKLIST;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n| 3     | select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]                                                                                                                                                                                                                            |\n| 4     | select count\\(distinct .+\\) from .+                                                                                                                                                                                                                                                                    |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:a},t)}}}]);