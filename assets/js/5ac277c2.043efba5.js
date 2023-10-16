"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92637],{58683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},a="Sorted streaming aggregate",o={id:"using_starrocks/sorted_aggregate",title:"Sorted streaming aggregate",description:"Common aggregation methods in database systems include hash aggregate and sort aggregate.",source:"@site/versioned_docs/version-3.1/using_starrocks/sorted_aggregate.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/sorted_aggregate",permalink:"/doc/docs/using_starrocks/sorted_aggregate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/using_starrocks/sorted_aggregate.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Use HLL for approximate count distinct",permalink:"/doc/docs/using_starrocks/Using_HLL"},next:{title:"Integrations",permalink:"/doc/docs/category/integrations"}},d={},c=[{value:"Working principles",id:"working-principles",level:2},{value:"Limits",id:"limits",level:2},{value:"Examples",id:"examples",level:2},{value:"Check whether sorted streaming aggregate is enabled",id:"check-whether-sorted-streaming-aggregate-is-enabled",level:2}];function g(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sorted-streaming-aggregate",children:"Sorted streaming aggregate"}),"\n",(0,t.jsx)(n.p,{children:"Common aggregation methods in database systems include hash aggregate and sort aggregate."}),"\n",(0,t.jsxs)(n.p,{children:["From v2.5 onwards, StarRocks supports ",(0,t.jsx)(n.strong,{children:"sorted streaming aggregate"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"working-principles",children:"Working principles"}),"\n",(0,t.jsx)(n.p,{children:"Aggregate nodes (AGG) are mainly responsible for handling GROUP BY and aggregate functions."}),"\n",(0,t.jsx)(n.p,{children:"Sorted streaming aggregate can group data by comparing GROUP BY keys according to the sequence of the keys, without the need to create a hash table. This effectively reduces memory resources consumed by aggregation. For queries with a high aggregation cardinality, sorted streaming aggregate improves aggregation performance and reduces memory usage."}),"\n",(0,t.jsx)(n.p,{children:"You can enable sorted streaming aggregate by setting the following variable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set enable_sort_aggregate=true;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The keys in GROUP BY must have a sequence. For example, if the sort key is ",(0,t.jsx)(n.code,{children:"k1, k2, k3"}),", then:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GROUP BY k1"}),"  and  ",(0,t.jsx)(n.code,{children:"GROUP BY k1, k2"})," are allowed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GROUP BY k1, k3"})," does not follow the sort key sequence. Therefore, sorted streaming aggregate cannot take effect on such a clause."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The selected partition must be a single partition (because the same key may be distributed on different machines in different partitions)."}),"\n",(0,t.jsxs)(n.li,{children:["The GROUP BY keys must have the same distribution as the bucket keys specified when you create a table. For example, if a table has three columns ",(0,t.jsx)(n.code,{children:"k1, k2, k3"}),", the bucket key can be ",(0,t.jsx)(n.code,{children:"k1"})," or ",(0,t.jsx)(n.code,{children:"k1, k2"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the bucket key is ",(0,t.jsx)(n.code,{children:"k1"}),", the ",(0,t.jsx)(n.code,{children:"GROUP BY"})," key can be ",(0,t.jsx)(n.code,{children:"k1"}),", ",(0,t.jsx)(n.code,{children:"k1, k2"}),", or ",(0,t.jsx)(n.code,{children:"k1, k2, k3"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If the bucket key is ",(0,t.jsx)(n.code,{children:"k1, k2"}),", the GROUP BY key can be ",(0,t.jsx)(n.code,{children:"k1, k2"})," or ",(0,t.jsx)(n.code,{children:"k1, k2, k3"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If the query plans do not meet this requirement, the sorted streaming aggregate feature cannot take effect even if this feature is enabled."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Sorted streaming aggregate works only for first-stage aggregation (that is, there is only one Scan node under the AGG node)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a table and insert data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `test_sorted_streaming_agg_basic`\n(\n    `id_int` int(11) NOT NULL COMMENT "",\n    `id_string` varchar(100) NOT NULL COMMENT ""\n) \nENGINE=OLAP \nDUPLICATE KEY(`id_int`)COMMENT "OLAP"\nDISTRIBUTED BY HASH(`id_int`)\nPROPERTIES\n("replication_num" = "3"); \n\nINSERT INTO test_sorted_streaming_agg_basic VALUES\n(1, \'v1\'),\n(2, \'v2\'),\n(3, \'v3\'),\n(1, \'v4\');\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable sorted streaming aggregate and use EXPLAIN to query the SQL profile."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set enable_sort_aggregate = true;\n\nexplain costs select id_int, max(id_string)\nfrom test_sorted_streaming_agg_basic\ngroup by id_int;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"check-whether-sorted-streaming-aggregate-is-enabled",children:"Check whether sorted streaming aggregate is enabled"}),"\n",(0,t.jsxs)(n.p,{children:["View the results of ",(0,t.jsx)(n.code,{children:"EXPLAIN costs"}),". If the ",(0,t.jsx)(n.code,{children:"sorted streaming"})," field is ",(0,t.jsx)(n.code,{children:"true"})," in the AGG node, this feature is enabled."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"|                                                                                                                                    |\n|   1:AGGREGATE (update finalize)                                                                                                    |\n|   |  aggregate: max[([2: id_string, VARCHAR, false]); args: VARCHAR; result: VARCHAR; args nullable: false; result nullable: true] |\n|   |  group by: [1: id_int, INT, false]                                                                                             |\n|   |  sorted streaming: true                                                                                                        |\n|   |  cardinality: 1                                                                                                                |\n|   |  column statistics:                                                                                                            |\n|   |  * id_int--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                       |\n|   |  * max--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                          |\n|   |                                                                                                                                |\n|   0:OlapScanNode                                                                                                                   |\n|      table: test_sorted_streaming_agg_basic, rollup: test_sorted_streaming_agg_basic                                               |\n|      preAggregation: on                                                                                                            |\n|      partitionsRatio=1/1, tabletsRatio=10/10                                                                                       |\n|      tabletList=30672,30674,30676,30678,30680,30682,30684,30686,30688,30690                                                        |\n|      actualRows=0, avgRowSize=2.0                                                                                                  |\n|      cardinality: 1                                                                                                                |\n|      column statistics:                                                                                                            |\n|      * id_int--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                       |\n|      * id_string--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                    |\n"})})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(g,e)})):g(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:o},n)}}}]);