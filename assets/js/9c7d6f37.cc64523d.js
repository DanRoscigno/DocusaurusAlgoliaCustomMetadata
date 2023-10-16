"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23915],{82332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},o="EXPLAIN",a={id:"sql-reference/sql-statements/Administration/EXPLAIN",title:"EXPLAIN",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/EXPLAIN.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/EXPLAIN",permalink:"/doc/docs/sql-reference/sql-statements/Administration/EXPLAIN",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/EXPLAIN.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP STORAGE VOLUME",permalink:"/doc/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME"},next:{title:"INSTALL PLUGIN",permalink:"/doc/docs/sql-reference/sql-statements/Administration/INSTALL_PLUGIN"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"explain",children:"EXPLAIN"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Shows the logical or physical execution plans for a query statement."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"EXPLAIN <query>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"The query statement whose execution plan you want to view."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the execution plan of the input query statement."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Return"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"avgRowSize"}),(0,s.jsx)(n.td,{children:"The average size of the scanned data rows."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cardinality"}),(0,s.jsx)(n.td,{children:"The total number of data rows in the scanned table."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colocate"}),(0,s.jsx)(n.td,{children:"Whether the table is in colocate mode."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNodes"}),(0,s.jsx)(n.td,{children:"The number of nodes to scan."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rollup"}),(0,s.jsx)(n.td,{children:"The Rollup materialized view that is used."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"preaggregation"}),(0,s.jsx)(n.td,{children:"The status of preaggregation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"predicates"}),(0,s.jsx)(n.td,{children:"Predicates in the query."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> EXPLAIN select count(*)\nfrom store_sales, \n    household_demographics, \n    time_dim, \n    store\nwhere ss_sold_time_sk = time_dim.t_time_sk\n    and ss_hdemo_sk = household_demographics.hd_demo_sk\n    and ss_store_sk = s_store_sk\n    and time_dim.t_hour = 8\n    and time_dim.t_minute >= 30\n    and household_demographics.hd_dep_count = 5\n    and store.s_store_name = 'ese'\norder by count(*) limit 100;\n\n+------------------------------------------------------------------------------+\n| Explain String                                                               |\n+------------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                              |\n|  OUTPUT EXPRS:<slot 11>                                                      |\n|   PARTITION: UNPARTITIONED                                                   |\n|   RESULT SINK                                                                |\n|   12:MERGING-EXCHANGE                                                        |\n|      limit: 100                                                              |\n|      tuple ids: 5                                                            |\n|                                                                              |\n| PLAN FRAGMENT 1                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 12                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   8:TOP-N                                                                    |\n|   |  order by: <slot 11> ASC                                                 |\n|   |  offset: 0                                                               |\n|   |  limit: 100                                                              |\n|   |  tuple ids: 5                                                            |\n|   |                                                                          |\n|   7:AGGREGATE (update finalize)                                              |\n|   |  output: count(*)                                                        |\n|   |  group by:                                                               |\n|   |  tuple ids: 4                                                            |\n|   |                                                                          |\n|   6:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_store_sk` = `s_store_sk`                       |\n|   |  tuple ids: 0 2 1 3                                                      |\n|   |                                                                          |\n|   |----11:EXCHANGE                                                           |\n|   |       tuple ids: 3                                                       |\n|   |                                                                          |\n|   4:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_hdemo_sk`=`household_demographics`.`hd_demo_sk`|\n|   |  tuple ids: 0 2 1                                                        |\n|   |                                                                          |\n|   |----10:EXCHANGE                                                           |\n|   |       tuple ids: 1                                                       |\n|   |                                                                          |\n|   2:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: table not in same group                        |\n|   |  equal join conjunct: `ss_sold_time_sk` = `time_dim`.`t_time_sk`         |\n|   |  tuple ids: 0 2                                                          |\n|   |                                                                          |\n|   |----9:EXCHANGE                                                            |\n|   |       tuple ids: 2                                                       |\n|   |                                                                          |\n|   0:OlapScanNode                                                             |\n|      TABLE: store_sales                                                      |\n|      PREAGGREGATION: OFF. Reason: `ss_sold_time_sk` is value column          |\n|      partitions=1/1                                                          |\n|      rollup: store_sales                                                     |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 0                                                            |\n|                                                                              |\n| PLAN FRAGMENT 2                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|                                                                              |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 11                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   5:OlapScanNode                                                             |\n|      TABLE: store                                                            |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `store`.`s_store_name` = 'ese'                              |\n|      partitions=1/1                                                          |\n|      rollup: store                                                           |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 3                                                            |\n|                                                                              |\n| PLAN FRAGMENT 3                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 10                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   3:OlapScanNode                                                             |\n|      TABLE: household_demographics                                           |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `household_demographics`.`hd_dep_count` = 5                 |\n|      partitions=1/1                                                          |\n|      rollup: household_demographics                                          |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 1                                                            |\n|                                                                              |\n| PLAN FRAGMENT 4                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 09                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   1:OlapScanNode                                                             |\n|      TABLE: time_dim                                                         |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `time_dim`.`t_hour` = 8, `time_dim`.`t_minute` >= 30        |\n|      partitions=1/1                                                          |\n|      rollup: time_dim                                                        |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 2                                                            |\n+------------------------------------------------------------------------------+\n128 rows in set (0.02 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},n)}}}]);