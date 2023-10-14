"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71969],{24430:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=s(85893),t=s(11151);const i={},r="ALTER DATABASE",a={id:"sql-reference/sql-statements/data-definition/ALTER_DATABASE",title:"ALTER DATABASE",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER_DATABASE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_DATABASE",permalink:"/doc/zh/3.0/sql-reference/sql-statements/data-definition/ALTER_DATABASE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/ALTER_DATABASE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"AUTO_INCREMENT",permalink:"/doc/zh/3.0/sql-reference/sql-statements/auto_increment"},next:{title:"ALTER MATERIALIZED VIEW",permalink:"/doc/zh/3.0/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW"}},d={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d",id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d",level:3},{value:"\u91cd\u547d\u540d\u6570\u636e\u5e93",id:"\u91cd\u547d\u540d\u6570\u636e\u5e93",level:3},{value:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u526f\u672c\u6570\u91cf\u914d\u989d",id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u526f\u672c\u6570\u91cf\u914d\u989d",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}];function A(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li",ul:"ul",a:"a"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"alter-database",children:"ALTER DATABASE"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u7684\u5c5e\u6027\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709\u8be5\u6570\u636e\u5e93 ALTER \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.h3,{id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d",children:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d"}),"\n",(0,l.jsx)(n.p,{children:"\u5355\u4f4d\u4e3a B/K/KB/M/MB/G/GB/T/TB/P/PB\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE <db_name> SET DATA QUOTA <quota>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u91cd\u547d\u540d\u6570\u636e\u5e93",children:"\u91cd\u547d\u540d\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE <db_name> RENAME <new_db_name>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u526f\u672c\u6570\u91cf\u914d\u989d",children:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u526f\u672c\u6570\u91cf\u914d\u989d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET REPLICA QUOTA <quota>\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"\u91cd\u547d\u540d\u6570\u636e\u5e93\u540e\uff0c\u5982\u9700\u8981\uff0c\u8bf7\u4f7f\u7528 REVOKE \u548c GRANT \u547d\u4ee4\u4fee\u6539\u76f8\u5e94\u7684\u7528\u6237\u6743\u9650\u3002\n\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u6570\u636e\u91cf\u914d\u989d\u548c\u9ed8\u8ba4\u526f\u672c\u6570\u91cf\u914d\u989d\u5747\u4e3a 2^63 - 1\u3002\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\n-- \u4e0a\u8ff0\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c\u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684\u8bed\u53e5\nALTER DATABASE example_db SET DATA QUOTA 10T;\nALTER DATABASE example_db SET DATA QUOTA 100G;\nALTER DATABASE example_db SET DATA QUOTA 200M;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5c06\u6570\u636e\u5e93 example_db \u91cd\u547d\u540d\u4e3a example_db2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db RENAME example_db2;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bbe\u5b9a\u6307\u5b9a\u6570\u636e\u5e93\u526f\u672c\u6570\u91cf\u914d\u989d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-definition/DROP_DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(A,e)})):A(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var l=s(67294);const t=l.createContext({});function i(e){const n=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),l.createElement(t.Provider,{value:a},n)}}}]);