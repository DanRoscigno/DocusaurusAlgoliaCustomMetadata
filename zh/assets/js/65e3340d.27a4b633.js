"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70737],{18412:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=t(85893),d=t(11151);const r={displayed_sidebar:"Chinese"},i="SHOW ANALYZE STATUS",c={id:"sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",title:"SHOW ANALYZE STATUS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW ANALYZE JOB",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB"},next:{title:"SHOW META",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_META"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,d.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-analyze-status",children:"SHOW ANALYZE STATUS"}),"\n",(0,n.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsx)(s.p,{children:"\u67e5\u770b\u5f53\u524d\u6240\u6709\u91c7\u96c6\u4efb\u52a1\u7684\u72b6\u6001\u3002**\u8be5\u8bed\u53e5\u4e0d\u652f\u6301\u67e5\u770b\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u5982\u8981\u67e5\u770b\uff0c\u8bf7\u4f7f\u7528 SHOW ANALYZE JOB;\u3002**\u8be5\u8bed\u53e5\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW ANALYZE STATUS [LIKE | WHERE predicate]\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"Like \u6216 Where"})," \u6765\u7b5b\u9009\u9700\u8981\u8fd4\u56de\u7684\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u76ee\u524d ",(0,n.jsx)(s.code,{children:"SHOW ANALYZE STATUS"})," \u4f1a\u8fd4\u56de\u5982\u4e0b\u5217\u3002"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u5217\u540d"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Id"}),(0,n.jsx)(s.td,{children:"\u91c7\u96c6\u4efb\u52a1\u7684 ID\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database"}),(0,n.jsx)(s.td,{children:"\u6570\u636e\u5e93\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Table"}),(0,n.jsx)(s.td,{children:"\u8868\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Columns"}),(0,n.jsx)(s.td,{children:"\u5217\u540d\u5217\u8868\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:"\u7edf\u8ba1\u4fe1\u606f\u7684\u7c7b\u578b\uff0c\u5305\u62ec FULL\uff0cSAMPLE\uff0cHISTOGRAM\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Schedule"}),(0,n.jsxs)(s.td,{children:["\u8c03\u5ea6\u7684\u7c7b\u578b\u3002",(0,n.jsx)(s.code,{children:"ONCE"})," \u8868\u793a\u624b\u52a8\uff0c",(0,n.jsx)(s.code,{children:"SCHEDULE"})," \u8868\u793a\u81ea\u52a8\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Status"}),(0,n.jsx)(s.td,{children:"\u4efb\u52a1\u72b6\u6001\uff0c\u5305\u62ec RUNNING\uff08\u6b63\u5728\u6267\u884c\uff09\u3001SUCCESS\uff08\u6267\u884c\u6210\u529f\uff09\u548c FAILED\uff08\u6267\u884c\u5931\u8d25\uff09\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"StartTime"}),(0,n.jsx)(s.td,{children:"\u4efb\u52a1\u5f00\u59cb\u6267\u884c\u7684\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"EndTime"}),(0,n.jsx)(s.td,{children:"\u4efb\u52a1\u7ed3\u675f\u6267\u884c\u7684\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Properties"}),(0,n.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u53c2\u6570\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Reason"}),(0,n.jsx)(s.td,{children:"\u4efb\u52a1\u5931\u8d25\u7684\u539f\u56e0\u3002\u5982\u679c\u6267\u884c\u6210\u529f\u5219\u4e3a NULL\u3002"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ANALYZE_TABLE",children:"ANALYZE TABLE"}),"\uff1a\u521b\u5efa\u624b\u52a8\u91c7\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"}),"\uff1a\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u4e2d\uff08Running\uff09\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"/doc/zh/docs/3.0/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>r});var n=t(67294);const d=n.createContext({});function r(e){const s=n.useContext(d);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:r(e),n.createElement(d.Provider,{value:c},s)}}}]);