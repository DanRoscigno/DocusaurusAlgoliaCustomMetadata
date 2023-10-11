"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97385],{16848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(85893),r=a(11151);const o={},i="SQL",s={id:"faq/Sql_faq",title:"SQL",description:"This topic provides answers to some frequently asked questions about SQL.",source:"@site/versioned_docs/version-2.5/faq/Sql_faq.md",sourceDirName:"faq",slug:"/faq/Sql_faq",permalink:"/doc/docs/2.5/faq/Sql_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/faq/Sql_faq.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Other FAQs",permalink:"/doc/docs/2.5/faq/Others"},next:{title:"Broker Load",permalink:"/doc/docs/2.5/faq/loading/Broker_load_faq"}},l={},c=[{value:"This error &quot;fail to allocate memory.&quot; when I build a materialized view",id:"this-error-fail-to-allocate-memory-when-i-build-a-materialized-view",level:2},{value:"Does StarRocks support caching query results?",id:"does-starrocks-support-caching-query-results",level:2},{value:"When a <code>Null</code> is included in the calculation, the calculation results of functions are false except for the ISNULL() function",id:"when-a-null-is-included-in-the-calculation-the-calculation-results-of-functions-are-false-except-for-the-isnull-function",level:2},{value:"Why is the query result incorrect after I enclose quotation marks around a value of the BIGINT data type for an equivalence query?",id:"why-is-the-query-result-incorrect-after-i-enclose-quotation-marks-around-a-value-of-the-bigint-data-type-for-an-equivalence-query",level:2},{value:"Problem description",id:"problem-description",level:3},{value:"Solution",id:"solution",level:3},{value:"Does StarRocks support the DECODE function?",id:"does-starrocks-support-the-decode-function",level:2},{value:"Can the latest data be queried immediately after data is loaded into the Primary Key table of StarRocks?",id:"can-the-latest-data-be-queried-immediately-after-data-is-loaded-into-the-primary-key-table-of-starrocks",level:2},{value:"Do the utf8mb4 characters stored in StarRocks get truncated or appear garbled?",id:"do-the-utf8mb4-characters-stored-in-starrocks-get-truncated-or-appear-garbled",level:2},{value:"This error &quot;table&#39;s state is not normal&quot; occurs when I run the <code>alter table</code> command",id:"this-error-tables-state-is-not-normal-occurs-when-i-run-the-alter-table-command",level:2},{value:"This error &quot;get partition detail failed: org.apache.doris.common.DdlException: get hive partition meta data failed: java.net.UnknownHostException&quot; occurs when I query the external tables of Apache Hive",id:"this-error-get-partition-detail-failed-orgapachedoriscommonddlexception-get-hive-partition-meta-data-failed-javanetunknownhostexception-occurs-when-i-query-the-external-tables-of-apache-hive",level:2},{value:"This error &quot;planner use long time 3000 remaining task num 1&quot; occurs when I query data",id:"this-error-planner-use-long-time-3000-remaining-task-num-1-occurs-when-i-query-data",level:2},{value:"When cardinality of column A is small, the query results of <code>select B from tbl order by A limit 10</code> vary each time",id:"when-cardinality-of-column-a-is-small-the-query-results-of-select-b-from-tbl-order-by-a-limit-10-vary-each-time",level:2},{value:"Why is there a large gap in column efficiency between SELECT * and SELECT?",id:"why-is-there-a-large-gap-in-column-efficiency-between-select--and-select",level:2},{value:"Does DELETE support nested functions?",id:"does-delete-support-nested-functions",level:2},{value:"How to improve the usage efficiency of a database when there are hundreds of tables in it?",id:"how-to-improve-the-usage-efficiency-of-a-database-when-there-are-hundreds-of-tables-in-it",level:2},{value:"How to reduce the disk space occupied by the BE log and the FE log?",id:"how-to-reduce-the-disk-space-occupied-by-the-be-log-and-the-fe-log",level:2},{value:"This error &quot;table *** is colocate table, cannot change replicationNum&quot; occurs when I modify the replication number",id:"this-error-table--is-colocate-table-cannot-change-replicationnum-occurs-when-i-modify-the-replication-number",level:2},{value:"Does setting VARCHAR to the maximum value affect storage?",id:"does-setting-varchar-to-the-maximum-value-affect-storage",level:2},{value:"This error &quot;create partititon timeout&quot; occurs when I truncate a table",id:"this-error-create-partititon-timeout-occurs-when-i-truncate-a-table",level:2},{value:"This error &quot;Failed to specify server&#39;s Kerberos principal name&quot; occurs when I access external tables of Apache Hive",id:"this-error-failed-to-specify-servers-kerberos-principal-name-occurs-when-i-access-external-tables-of-apache-hive",level:2},{value:"Is &quot;2021-10&quot; a date format in StarRocks?",id:"is-2021-10-a-date-format-in-starrocks",level:2},{value:"Can &quot;2021-10&quot; be used as a partition field?",id:"can-2021-10-be-used-as-a-partition-field",level:2},{value:"Where can I query the size of a StarRocks database or table?",id:"where-can-i-query-the-size-of-a-starrocks-database-or-table",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong",a:"a",h3:"h3",pre:"pre",div:"div",ul:"ul",li:"li",ol:"ol"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sql",children:"SQL"}),"\n",(0,n.jsx)(t.p,{children:"This topic provides answers to some frequently asked questions about SQL."}),"\n",(0,n.jsx)(t.h2,{id:"this-error-fail-to-allocate-memory-when-i-build-a-materialized-view",children:'This error "fail to allocate memory." when I build a materialized view'}),"\n",(0,n.jsxs)(t.p,{children:["To solve this problem, increase the value of the ",(0,n.jsx)(t.code,{children:"memory_limitation_per_thread_for_schema_change"})," parameter in the ",(0,n.jsx)(t.strong,{children:"be.conf"})," file. This parameter refers to the maximum storage that can be allocated for a single task to change the scheme. The default value of the maximum storage is 2 GB."]}),"\n",(0,n.jsx)(t.h2,{id:"does-starrocks-support-caching-query-results",children:"Does StarRocks support caching query results?"}),"\n",(0,n.jsxs)(t.p,{children:["StarRocks does not directly cache final query results. From v2.5 onwards, StarRocks uses the Query Cache feature to save the intermediate results of first-stage aggregation in the cache. New queries that are semantically equivalent to previous queries can reuse the cached computation results to accelerate computations. Query cache uses BE memory. For more information, see ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/using_starrocks/query_cache",children:"Query cache"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"when-a-null-is-included-in-the-calculation-the-calculation-results-of-functions-are-false-except-for-the-isnull-function",children:["When a ",(0,n.jsx)(t.code,{children:"Null"})," is included in the calculation, the calculation results of functions are false except for the ISNULL() function"]}),"\n",(0,n.jsxs)(t.p,{children:["In standard SQL, every calculation that includes an operand with a ",(0,n.jsx)(t.code,{children:"NULL"})," value returns a ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"why-is-the-query-result-incorrect-after-i-enclose-quotation-marks-around-a-value-of-the-bigint-data-type-for-an-equivalence-query",children:"Why is the query result incorrect after I enclose quotation marks around a value of the BIGINT data type for an equivalence query?"}),"\n",(0,n.jsx)(t.h3,{id:"problem-description",children:"Problem description"}),"\n",(0,n.jsx)(t.p,{children:"See the following examples:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",children:"select cust_id,idno \n\nfrom llyt_dev.dwd_mbr_custinfo_dd \n\nwhere Pt= \u20182021-06-30\u2019 \n\nand cust_id = \u201820210129005809043707\u2019 \n\nlimit 10 offset 0;\n+---------------------+-----------------------------------------+\n\n|   cust_id           |      idno                               |\n\n+---------------------+-----------------------------------------+\n\n|  20210129005809436  | yjdgjwsnfmdhjw294F93kmHCNMX39dw=        |\n\n|  20210129005809436  | sdhnswjwijeifme3kmHCNMX39gfgrdw=        |\n\n|  20210129005809436  | Tjoedk3js82nswndrf43X39hbggggbw=        |\n\n|  20210129005809436  | denuwjaxh73e39592jwshbnjdi22ogw=        |\n\n|  20210129005809436  | ckxwmsd2mei3nrunjrihj93dm3ijin2=        |\n\n|  20210129005809436  | djm2emdi3mfi3mfu4jro2ji2ndimi3n=        |\n\n+---------------------+-----------------------------------------+\nselect cust_id,idno \n\nfrom llyt_dev.dwd_mbr_custinfo_dd \n\nwhere Pt= \u20182021-06-30\u2019 \n\nand cust_id = 20210129005809043707 \n\nlimit 10 offset 0;\n+---------------------+-----------------------------------------+\n\n|   cust_id           |      idno                               |\n\n+---------------------+-----------------------------------------+\n\n|  20210189979989976  | xuywehuhfuhruehfurhghcfCNMX39dw=        |\n\n+---------------------+-----------------------------------------+\n"})}),"\n",(0,n.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.p,{children:"When you compare the STRING data type and the INTEGER data type, the fields of these two types are cast to the DOUBLE data type. Therefore, quotation marks cannot be added. Otherwise, the condition defined in the WHERE clause cannot be indexed."}),"\n",(0,n.jsx)(t.h2,{id:"does-starrocks-support-the-decode-function",children:"Does StarRocks support the DECODE function?"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks does not support the DECODE function of the Oracle database. StarRocks is compatible with MySQL, so you can use the CASE WHEN statement."}),"\n",(0,n.jsx)(t.h2,{id:"can-the-latest-data-be-queried-immediately-after-data-is-loaded-into-the-primary-key-table-of-starrocks",children:"Can the latest data be queried immediately after data is loaded into the Primary Key table of StarRocks?"}),"\n",(0,n.jsx)(t.p,{children:"Yes. StarRocks merges data in a way that references Google Mesa. In StarRocks, a BE triggers the data merge and it has two kinds of compaction to merge data. If the data merge is not completed, it is finished during your query. Therefore, you can read the latest data after data loading."}),"\n",(0,n.jsx)(t.h2,{id:"do-the-utf8mb4-characters-stored-in-starrocks-get-truncated-or-appear-garbled",children:"Do the utf8mb4 characters stored in StarRocks get truncated or appear garbled?"}),"\n",(0,n.jsx)(t.p,{children:"No."}),"\n",(0,n.jsxs)(t.h2,{id:"this-error-tables-state-is-not-normal-occurs-when-i-run-the-alter-table-command",children:['This error "table\'s state is not normal" occurs when I run the ',(0,n.jsx)(t.code,{children:"alter table"})," command"]}),"\n",(0,n.jsx)(t.p,{children:"This error occurs because the previous alteration has not been completed. You can run the following code to check the status of the previous alteration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'show tablet from lineitem where State="ALTER"; \n'})}),"\n",(0,n.jsx)(t.p,{children:"The time spent on the alteration operation relates to the data volume. In general, the alteration can be completed in minutes. We recommend that you stop loading data into StarRocks while you are altering tables because data loading lowers the speed at which alteration completes."}),"\n",(0,n.jsxs)(t.h2,{id:"this-error-get-partition-detail-failed-orgapachedoriscommonddlexception-get-hive-partition-meta-data-failed-javanetunknownhostexception-occurs-when-i-query-the-external-tables-of-apache-hive",children:['This error "get partition detail failed: org.apache.doris.common.DdlException: get hive partition meta data failed: java.net.UnknownHostException',(0,n.jsx)(t.div,{}),'" occurs when I query the external tables of Apache Hive']}),"\n",(0,n.jsxs)(t.p,{children:["This error occurs when the metadata of Apache Hive partitions cannot be obtained. To solve this problem, copy ",(0,n.jsx)(t.strong,{children:"core-sit.xml"})," and ",(0,n.jsx)(t.strong,{children:"hdfs-site.xml"})," to the ",(0,n.jsx)(t.strong,{children:"fe.conf"})," file and the ",(0,n.jsx)(t.strong,{children:"be.conf"})," file."]}),"\n",(0,n.jsx)(t.h2,{id:"this-error-planner-use-long-time-3000-remaining-task-num-1-occurs-when-i-query-data",children:'This error "planner use long time 3000 remaining task num 1" occurs when I query data'}),"\n",(0,n.jsxs)(t.p,{children:["This error occurs usually due to a full garbage collection (full GC), which can be checked by using backend monitoring and the ",(0,n.jsx)(t.strong,{children:"fe.gc"})," log. To solve this problem, perform one of the following operations:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Allows SQL's client to access multiple frontends (FEs) simultaneously to spread the load."}),"\n",(0,n.jsxs)(t.li,{children:["Change the heap size of Java Virtual Machine (JVM) from 8 GB to 16 GB in the ",(0,n.jsx)(t.strong,{children:"fe.conf"})," file to increase memory and reduce the impact of full GC."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"when-cardinality-of-column-a-is-small-the-query-results-of-select-b-from-tbl-order-by-a-limit-10-vary-each-time",children:["When cardinality of column A is small, the query results of ",(0,n.jsx)(t.code,{children:"select B from tbl order by A limit 10"})," vary each time"]}),"\n",(0,n.jsx)(t.p,{children:"SQL can only guarantee that column A is ordered, and it cannot guarantee that the order of column B is the same for each query. MySQL can guarantee the order of column A and column B because it is a standalone database."}),"\n",(0,n.jsxs)(t.p,{children:["StarRocks is a distributed database, of which data stored in the underlying table is in a sharding pattern. The data of column A is distributed across multiple machines, so the order of column B returned by multiple machines may be different for each query, resulting in inconsistent order of B each time. To solve this problem, change ",(0,n.jsx)(t.code,{children:"select B from tbl order by A limit 10"})," to ",(0,n.jsx)(t.code,{children:"select B from tbl order by A,B limit 10"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"why-is-there-a-large-gap-in-column-efficiency-between-select--and-select",children:"Why is there a large gap in column efficiency between SELECT * and SELECT?"}),"\n",(0,n.jsx)(t.p,{children:"To solve this problem, check the profile and see MERGE details:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check whether the aggregation on the storage layer takes up too much time."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check whether there are too many indicator columns. If so, aggregate hundreds of columns of millions of rows."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",children:"MERGE:\n\n    - aggr: 26s270ms\n\n    - sort: 15s551ms\n"})}),"\n",(0,n.jsx)(t.h2,{id:"does-delete-support-nested-functions",children:"Does DELETE support nested functions?"}),"\n",(0,n.jsxs)(t.p,{children:["Nested functions are not supported, such as ",(0,n.jsx)(t.code,{children:"to_days(now())"})," in ",(0,n.jsx)(t.code,{children:"DELETE from test_new WHERE to_days(now())-to_days(publish_time) >7;"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-improve-the-usage-efficiency-of-a-database-when-there-are-hundreds-of-tables-in-it",children:"How to improve the usage efficiency of a database when there are hundreds of tables in it?"}),"\n",(0,n.jsxs)(t.p,{children:["To improve efficiency, add the ",(0,n.jsx)(t.code,{children:"-A"})," parameter when you connect to MySQL's client server: ",(0,n.jsx)(t.code,{children:"mysql -uroot -h127.0.0.1 -P8867 -A"}),". MySQL's client server does not pre-read database information."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-reduce-the-disk-space-occupied-by-the-be-log-and-the-fe-log",children:"How to reduce the disk space occupied by the BE log and the FE log?"}),"\n",(0,n.jsxs)(t.p,{children:["Adjust the log level and corresponding parameters. For more information, see ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/administration/Configuration",children:"Parameter Configuration"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"this-error-table--is-colocate-table-cannot-change-replicationnum-occurs-when-i-modify-the-replication-number",children:'This error "table *** is colocate table, cannot change replicationNum" occurs when I modify the replication number'}),"\n",(0,n.jsxs)(t.p,{children:["When you create colocated tables, you need to set the ",(0,n.jsx)(t.code,{children:"group"})," property. Therefore, you cannot modify the replication number for a single table. You can perform the following steps to modify the replication number for all tables in a group:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"group_with"})," to ",(0,n.jsx)(t.code,{children:"empty"})," for all tables in a group."]}),"\n",(0,n.jsxs)(t.li,{children:["Set a proper ",(0,n.jsx)(t.code,{children:"replication_num"})," for all tables in a group."]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"group_with"})," back to its original value."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"does-setting-varchar-to-the-maximum-value-affect-storage",children:"Does setting VARCHAR to the maximum value affect storage?"}),"\n",(0,n.jsx)(t.p,{children:"VARCHAR is a variable-length data type, which has a specified length that can be changed based on the actual data length. Specifying a different varchar length when you create a table has little impact on the query performance on the same data."}),"\n",(0,n.jsx)(t.h2,{id:"this-error-create-partititon-timeout-occurs-when-i-truncate-a-table",children:'This error "create partititon timeout" occurs when I truncate a table'}),"\n",(0,n.jsxs)(t.p,{children:["To truncate a table, you need to create the corresponding partitions and then swap them. If there are a larger number of partitions that need to be created, this error occurs. In addition, if there are many data load tasks, the lock will be held for a long time during the compaction process. Therefore, the lock cannot be acquired when you create tables. If there are too many data load tasks, set ",(0,n.jsx)(t.code,{children:"tablet_map_shard_size"})," to ",(0,n.jsx)(t.code,{children:"512"})," in the ",(0,n.jsx)(t.strong,{children:"be.conf"})," file to reduce the lock contention."]}),"\n",(0,n.jsx)(t.h2,{id:"this-error-failed-to-specify-servers-kerberos-principal-name-occurs-when-i-access-external-tables-of-apache-hive",children:'This error "Failed to specify server\'s Kerberos principal name" occurs when I access external tables of Apache Hive'}),"\n",(0,n.jsxs)(t.p,{children:["Add the following information to ",(0,n.jsx)(t.strong,{children:"hdfs-site.xml"})," in the ",(0,n.jsx)(t.strong,{children:"fe.conf"})," file and the ",(0,n.jsx)(t.strong,{children:"be.conf"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-HTML",children:"<property>\n\n<name>dfs.namenode.kerberos.principal.pattern</name>\n\n<value>*</value>\n\n</property>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"is-2021-10-a-date-format-in-starrocks",children:'Is "2021-10" a date format in StarRocks?'}),"\n",(0,n.jsx)(t.p,{children:"No."}),"\n",(0,n.jsx)(t.h2,{id:"can-2021-10-be-used-as-a-partition-field",children:'Can "2021-10" be used as a partition field?'}),"\n",(0,n.jsx)(t.p,{children:'No, use functions to change "2021-10" to "2021-10-01" and then use "2021-10-01" as a partition field.'}),"\n",(0,n.jsx)(t.h2,{id:"where-can-i-query-the-size-of-a-starrocks-database-or-table",children:"Where can I query the size of a StarRocks database or table?"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW%20DATA",children:"SHOW DATA"})," command."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SHOW DATA;"})," displays the data size and replicas of all tables in the current database."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SHOW DATA FROM <db_name>.<table_name>;"})," displays the data size, number of replicas, and number of rows in a specified table of a specified database."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>s,ah:()=>o});var n=a(67294);const r=n.createContext({});function o(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:a}){let s;return s=a?"function"==typeof e?e({}):e||i:o(e),n.createElement(r.Provider,{value:s},t)}}}]);