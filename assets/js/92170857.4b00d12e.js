"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[712],{82668:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(85893),i=s(11151);const r={},l="CREATE ANALYZE",c={id:"sql-reference/sql-statements/data-definition/CREATE_ANALYZE",title:"CREATE ANALYZE",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_ANALYZE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CREATE_ANALYZE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CANCEL RESTORE",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/CANCEL_RESTORE"},next:{title:"CREATE DATABASE",permalink:"/doc/zh/sql-reference/sql-statements/data-definition/CREATE_DATABASE"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-analyze",children:"CREATE ANALYZE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa\u81ea\u5b9a\u4e49\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\uff0c\u8fdb\u884c CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cStarRocks \u4f1a\u5468\u671f\u6027\u81ea\u52a8\u91c7\u96c6\u8868\u7684\u5168\u91cf\u7edf\u8ba1\u4fe1\u606f\u3002\u9ed8\u8ba4\u68c0\u67e5\u66f4\u65b0\u65f6\u95f4\u4e3a 5 \u5206\u949f\u4e00\u6b21\uff0c\u5982\u679c\u53d1\u73b0\u6709\u6570\u636e\u66f4\u65b0\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u91c7\u96c6\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u4f7f\u7528\u81ea\u52a8\u5168\u91cf\u91c7\u96c6\uff0c\u53ef\u4ee5\u8bbe\u7f6e FE \u914d\u7f6e\u9879 ",(0,t.jsx)(n.code,{children:"enable_collect_full_statistic"})," \u4e3a ",(0,t.jsx)(n.code,{children:"false"}),"\uff0c\u7cfb\u7edf\u4f1a\u505c\u6b62\u81ea\u52a8\u5168\u91cf\u91c7\u96c6\uff0c\u6839\u636e\u60a8\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u4efb\u52a1\u8fdb\u884c\u5b9a\u5236\u5316\u91c7\u96c6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u81ea\u5b9a\u4e49\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5173\u95ed\u81ea\u52a8\u5168\u91cf\u91c7\u96c6 ",(0,t.jsx)(n.code,{children:"enable_collect_full_statistic=false"}),"\uff0c\u5426\u5219\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u52a1\u4e0d\u751f\u6548\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"-- \u5b9a\u671f\u91c7\u96c6\u6240\u6709\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE [FULL|SAMPLE] ALL PROPERTIES (property [,property])\n\n-- \u5b9a\u671f\u91c7\u96c6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE [FULL|SAMPLE] DATABASE db_name PROPERTIES (property [,property])\n\n-- \u5b9a\u671f\u91c7\u96c6\u6307\u5b9a\u8868\u3001\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE [FULL|SAMPLE] TABLE tbl_name (col_name [,col_name]) PROPERTIES (property [,property])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u91c7\u96c6\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"FULL\uff1a\u5168\u91cf\u91c7\u96c6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"SAMPLE\uff1a\u62bd\u6837\u91c7\u96c6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u4e0d\u6307\u5b9a\u91c7\u96c6\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a\u5168\u91cf\u91c7\u96c6\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"col_name"}),": \u8981\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u5217\uff0c\u591a\u5217\u4f7f\u7528\u9017\u53f7 (,)\u5206\u9694\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u8868\u793a\u91c7\u96c6\u6574\u5f20\u8868\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["PROPERTIES: \u91c7\u96c6\u4efb\u52a1\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u5219\u91c7\u7528 ",(0,t.jsx)(n.code,{children:"fe.conf"})," \u4e2d\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002\u4efb\u52a1\u5b9e\u9645\u6267\u884c\u4e2d\u4f7f\u7528\u7684 PROPERTIES\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB",children:"SHOW ANALYZE JOB"})," \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Properties"})," \u5217\u67e5\u770b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"PROPERTIES"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u7c7b\u578b"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statistic_auto_collect_ratio"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{children:"0.8"}),(0,t.jsx)(n.td,{children:"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u7684\u5065\u5eb7\u5ea6\u9608\u503c\u3002\u5982\u679c\u7edf\u8ba1\u4fe1\u606f\u7684\u5065\u5eb7\u5ea6\u5c0f\u4e8e\u8be5\u9608\u503c\uff0c\u5219\u89e6\u53d1\u81ea\u52a8\u91c7\u96c6\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statistics_max_full_collect_data_size"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u6700\u5927\u5206\u533a\u7684\u5927\u5c0f\u3002\u5355\u4f4d: GB\u3002\u5982\u679c\u67d0\u4e2a\u5206\u533a\u8d85\u8fc7\u8be5\u503c\uff0c\u5219\u653e\u5f03\u5168\u91cf\u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\uff0c\u8f6c\u4e3a\u5bf9\u8be5\u8868\u8fdb\u884c\u62bd\u6837\u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statistic_sample_collect_rows"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{children:"200000"}),(0,t.jsx)(n.td,{children:"\u62bd\u6837\u91c7\u96c6\u7684\u91c7\u6837\u884c\u6570\u3002\u5982\u679c\u8be5\u53c2\u6570\u53d6\u503c\u8d85\u8fc7\u4e86\u5b9e\u9645\u7684\u8868\u884c\u6570\uff0c\u5219\u8fdb\u884c\u5168\u91cf\u91c7\u96c6\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 1\uff1a\u81ea\u52a8\u5168\u91cf\u91c7\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6240\u6709\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE ALL;\n\n-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE DATABASE db_name;\n\n-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE FULL DATABASE db_name;\n\n-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u8868\u3001\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE TABLE tbl_name(c1, c2, c3); \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 2\uff1a\u81ea\u52a8\u62bd\u6837\u91c7\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- \u5b9a\u671f\u62bd\u6837\u91c7\u96c6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\nCREATE ANALYZE SAMPLE DATABASE db_name;\n\n-- \u5b9a\u671f\u62bd\u6837\u91c7\u96c6\u6307\u5b9a\u8868\u3001\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u8bbe\u7f6e\u91c7\u6837\u884c\u6570\u548c\u5065\u5eb7\u5ea6\u9608\u503c\u3002\nCREATE ANALYZE SAMPLE TABLE tbl_name(c1, c2, c3) PROPERTIES(\n   "statistic_auto_collect_ratio" = "0.5",\n   "statistic_sample_collect_rows" = "1000000"\n);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB",children:"SHOW ANALYZE JOB"}),"\uff1a\u67e5\u770b\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/data-definition/DROP_ANALYZE",children:"DROP ANALYZE"}),"\uff1a\u5220\u9664\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"}),"\uff1a\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u4e2d\uff08Running\uff09\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:c},n)}}}]);