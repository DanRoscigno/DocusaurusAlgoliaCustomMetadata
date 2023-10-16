"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67307],{13738:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>E,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var t=s(85893),r=s(11151);const d={displayed_sidebar:"Chinese"},c="REFRESH MATERIALIZED VIEW",i={id:"sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",title:"REFRESH MATERIALIZED VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"PAUSE ROUTINE LOAD",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD"},next:{title:"RESUME ROUTINE LOAD",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"refresh-materialized-view",children:"REFRESH MATERIALIZED VIEW"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u624b\u52a8\u5237\u65b0\u6307\u5b9a\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6216\u5176\u4e2d\u90e8\u5206\u5206\u533a\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ea\u80fd\u901a\u8fc7\u8be5\u547d\u4ee4\u624b\u52a8\u5237\u65b0\u5237\u65b0\u65b9\u5f0f\u4e3a ASYNC \u6216 MANUAL \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",children:"SHOW MATERIALIZED VIEWS"})," \u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u65b9\u5f0f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'REFRESH MATERIALIZED VIEW [database.]mv_name\n[PARTITION START ("<partition_start_date>") END ("<partition_end_date>")]\n[FORCE]\n[WITH { SYNC | ASYNC } MODE]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mv_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u5f85\u624b\u52a8\u5237\u65b0\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PARTITION START () END ()"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u624b\u52a8\u5237\u65b0\u8be5\u65f6\u95f4\u533a\u95f4\u5185\u7684\u5206\u533a\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"partition_start_date"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u5f85\u624b\u52a8\u5237\u65b0\u7684\u5206\u533a\u5f00\u59cb\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"partition_end_date"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u5f85\u624b\u52a8\u5237\u65b0\u7684\u5206\u533a\u7ed3\u675f\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FORCE"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u5982\u679c\u6307\u5b9a\u8be5\u53c2\u6570\uff0cStarRocks \u5c06\u5f3a\u5236\u5237\u65b0\u76f8\u5e94\u7684\u7269\u5316\u89c6\u56fe\u6216\u5206\u533a\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0cStarRocks \u4f1a\u81ea\u52a8\u5224\u65ad\u6570\u636e\u662f\u5426\u88ab\u66f4\u65b0\u8fc7\uff0c\u53ea\u5728\u9700\u8981\u65f6\u5237\u65b0\u5206\u533a\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WITH ... MODE"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsxs)(n.td,{children:["\u540c\u6b65\u6216\u5f02\u6b65\u8c03\u7528\u5237\u65b0\u4efb\u52a1\u3002",(0,t.jsx)(n.code,{children:"SYNC"})," \u6307\u540c\u6b65\u8c03\u7528\u5237\u65b0\u4efb\u52a1\uff0c\u6267\u884c SQL \u8bed\u53e5\u540e\uff0cStarRocks \u5c06\u5728\u5237\u65b0\u4efb\u52a1\u6210\u529f\u6216\u5931\u8d25\u540e\u8fd4\u56de\u7ed3\u679c\u3002",(0,t.jsx)(n.code,{children:"ASYNC"})," \u6307\u5f02\u6b65\u8c03\u7528\u5237\u65b0\u4efb\u52a1\uff0c\u6267\u884c SQL \u8bed\u53e5\u540e\uff0cStarRocks \u5c06\u5728\u5237\u65b0\u4efb\u52a1\u63d0\u4ea4\u540e\u7acb\u5373\u8fd4\u56de\u6210\u529f\uff0c\u5b9e\u9645\u5237\u65b0\u4efb\u52a1\u4f1a\u5f02\u6b65\u5728\u540e\u53f0\u8fd0\u884c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 StarRocks \u7684 Information Schema \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"tasks"})," \u548c ",(0,t.jsx)(n.code,{children:"task_runs"})," \u5143\u6570\u636e\u8868\u6765\u67e5\u770b\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u72b6\u6001\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"/doc/zh/docs/using_starrocks/Materialized_view#%E6%9F%A5%E7%9C%8B%E5%BC%82%E6%AD%A5%E7%89%A9%E5%8C%96%E8%A7%86%E5%9B%BE%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8A%B6%E6%80%81",children:"\u67e5\u770b\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u6267\u884c\u72b6\u6001"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,t.jsx)(n.code,{children:"ASYNC"}),"\u3002\u81ea v3.1.0 \u8d77\u652f\u6301\u3002"]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u5237\u65b0\u57fa\u4e8e\u5916\u90e8\u6570\u636e\u76ee\u5f55\uff08External Catalog\uff09\u521b\u5efa\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u65f6\uff0cStarRocks \u4f1a\u5237\u65b0\u6240\u6709\u5206\u533a\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5f02\u6b65\u8c03\u7528\u4efb\u52a1\u624b\u52a8\u5237\u65b0\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REFRESH MATERIALIZED VIEW lo_mv1;\n\nREFRESH MATERIALIZED VIEW lo_mv1 WITH ASYNC MODE;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u624b\u52a8\u5237\u65b0\u7269\u5316\u89c6\u56fe\u6307\u5b9a\u5206\u533a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'REFRESH MATERIALIZED VIEW lo_mv1 \nPARTITION START ("2020-02-01") END ("2020-03-01");\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u5f3a\u5236\u624b\u52a8\u5237\u65b0\u7269\u5316\u89c6\u56fe\u6307\u5b9a\u5206\u533a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'REFRESH MATERIALIZED VIEW lo_mv1 \nPARTITION START ("2020-02-01") END ("2020-03-01") FORCE;\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u540c\u6b65\u8c03\u7528\u4efb\u52a1\u624b\u52a8\u5237\u65b0\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REFRESH MATERIALIZED VIEW lo_mv1 WITH SYNC MODE;\n"})})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>d});var t=s(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:d(e),t.createElement(r.Provider,{value:i},n)}}}]);