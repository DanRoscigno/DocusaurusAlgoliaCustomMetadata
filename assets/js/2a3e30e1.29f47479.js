"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45727],{97599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=a(85893),r=a(11151);const o={},n="Other FAQs",i={id:"faq/Others",title:"Other FAQs",description:"This topic provides answers to some general questions.",source:"@site/versioned_docs/version-2.5/faq/Others.md",sourceDirName:"faq",slug:"/faq/Others",permalink:"/doc/docs/2.5/faq/Others",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/faq/Others.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Data Export",permalink:"/doc/docs/2.5/faq/Exporting_faq"},next:{title:"SQL",permalink:"/doc/docs/2.5/faq/Sql_faq"}},l={},c=[{value:"Do VARCHAR (32) and STRING occupy the same storage space?",id:"do-varchar-32-and-string-occupy-the-same-storage-space",level:2},{value:"Do VARCHAR (32) and STRING perform the same for the data query?",id:"do-varchar-32-and-string-perform-the-same-for-the-data-query",level:2},{value:"Why do TXT files imported from Oracle still appear garbled after I set the character set to UTF-8?",id:"why-do-txt-files-imported-from-oracle-still-appear-garbled-after-i-set-the-character-set-to-utf-8",level:2},{value:"Is the length of STRING defined by MySQL the same as that defined by StarRocks?",id:"is-the-length-of-string-defined-by-mysql-the-same-as-that-defined-by-starrocks",level:2},{value:"Can the data type of partitioned fields of a table be FLOAT, DOUBLE, or DECIMAL?",id:"can-the-data-type-of-partitioned-fields-of-a-table-be-float-double-or-decimal",level:2},{value:"How to check the storage space that is occupied by the data in a table?",id:"how-to-check-the-storage-space-that-is-occupied-by-the-data-in-a-table",level:2},{value:"How to request a quota increase for the StarRocks database?",id:"how-to-request-a-quota-increase-for-the-starrocks-database",level:2},{value:"Does StarRocks support updating particular fields in a table by executing the UPSERT statement?",id:"does-starrocks-support-updating-particular-fields-in-a-table-by-executing-the-upsert-statement",level:2},{value:"How to swap the data between two tables or two partitions?",id:"how-to-swap-the-data-between-two-tables-or-two-partitions",level:2},{value:"This error &quot;error to open replicated environment, will exit&quot; occurs when I restart a frontend (FE)",id:"this-error-error-to-open-replicated-environment-will-exit-occurs-when-i-restart-a-frontend-fe",level:2},{value:"This error &quot;Broker list path exception&quot; occurs when I query data from a new Apache Hive table",id:"this-error-broker-list-path-exception-occurs-when-i-query-data-from-a-new-apache-hive-table",level:2},{value:"Problem description",id:"problem-description",level:3},{value:"Solution",id:"solution",level:3},{value:"This error &quot;get hive partition metadata failed&quot; occurs when I query data from a new Apache Hive table",id:"this-error-get-hive-partition-metadata-failed-occurs-when-i-query-data-from-a-new-apache-hive-table",level:2},{value:"Problem description",id:"problem-description-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"This error &quot;do_open failed. reason = Invalid ORC postscript length&quot; occurs when I access ORC external table in Apache Hive",id:"this-error-do_open-failed-reason--invalid-orc-postscript-length-occurs-when-i-access-orc-external-table-in-apache-hive",level:2},{value:"Problem description",id:"problem-description-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"This error &quot;caching_sha2_password cannot be loaded&quot; occurs when I connect external tables of MySQL",id:"this-error-caching_sha2_password-cannot-be-loaded-occurs-when-i-connect-external-tables-of-mysql",level:2},{value:"Problem description",id:"problem-description-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"How to release disk space immediately after deleting a table?",id:"how-to-release-disk-space-immediately-after-deleting-a-table",level:2},{value:"How to view the current version of StarRocks?",id:"how-to-view-the-current-version-of-starrocks",level:2},{value:"How to set the memory size of an FE?",id:"how-to-set-the-memory-size-of-an-fe",level:2},{value:"How does StarRocks calculate its query time?",id:"how-does-starrocks-calculate-its-query-time",level:2},{value:"Does StarRocks support setting the path when I export data locally?",id:"does-starrocks-support-setting-the-path-when-i-export-data-locally",level:2},{value:"What are the concurrency upper limits of StarRocks?",id:"what-are-the-concurrency-upper-limits-of-starrocks",level:2},{value:"Why is the first-time SSB test performance of StarRocks slower than that done the second time?",id:"why-is-the-first-time-ssb-test-performance-of-starrocks-slower-than-that-done-the-second-time",level:2},{value:"How many BEs need to be configured at least for a cluster?",id:"how-many-bes-need-to-be-configured-at-least-for-a-cluster",level:2},{value:"How to set data permissions when I use Apache Superset to visualize the data in StarRocks?",id:"how-to-set-data-permissions-when-i-use-apache-superset-to-visualize-the-data-in-starrocks",level:2},{value:"Why does the profile fail to display after I set <code>enable_profile</code> to <code>true</code>?",id:"why-does-the-profile-fail-to-display-after-i-set-enable_profile-to-true",level:2},{value:"How to check field annotations in the tables of StarRocks?",id:"how-to-check-field-annotations-in-the-tables-of-starrocks",level:2},{value:"When I create a table, how to specify the default value for the NOW() function?",id:"when-i-create-a-table-how-to-specify-the-default-value-for-the-now-function",level:2},{value:"How can I release the storage space of BE nodes?",id:"how-can-i-release-the-storage-space-of-be-nodes",level:2},{value:"Can add extra disks to BE nodes?",id:"can-add-extra-disks-to-be-nodes",level:2}];function h(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",pre:"pre",code:"code",a:"a",ul:"ul",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"other-faqs",children:"Other FAQs"}),"\n",(0,s.jsx)(t.p,{children:"This topic provides answers to some general questions."}),"\n",(0,s.jsx)(t.h2,{id:"do-varchar-32-and-string-occupy-the-same-storage-space",children:"Do VARCHAR (32) and STRING occupy the same storage space?"}),"\n",(0,s.jsx)(t.p,{children:"Both are variable-length data types. When you store data of the same length, VARCHAR (32) and STRING occupy the same storage space."}),"\n",(0,s.jsx)(t.h2,{id:"do-varchar-32-and-string-perform-the-same-for-the-data-query",children:"Do VARCHAR (32) and STRING perform the same for the data query?"}),"\n",(0,s.jsx)(t.p,{children:"Yes."}),"\n",(0,s.jsx)(t.h2,{id:"why-do-txt-files-imported-from-oracle-still-appear-garbled-after-i-set-the-character-set-to-utf-8",children:"Why do TXT files imported from Oracle still appear garbled after I set the character set to UTF-8?"}),"\n",(0,s.jsx)(t.p,{children:"To solve this problem, perform the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["For example, there is a file named ",(0,s.jsx)(t.strong,{children:"original"}),", whose text is garbled. The character set of this file is ISO-8859-1. Run the following code to obtain the character set of the file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"file --mime-encoding origin.txt\norigin.txt: iso-8859-1\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"iconv"})," command to convert the character set of this file into UTF-8."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"iconv -f iso-8859-1 -t utf-8 origin.txt > origin_utf-8.txt\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"After the conversion, the text of this file still appears garbled. You can then regrade the character set of this file as GBK and convert the character set into UTF-8 again."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"iconv -f gbk -t utf-8 origin.txt > origin_utf-8.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"is-the-length-of-string-defined-by-mysql-the-same-as-that-defined-by-starrocks",children:"Is the length of STRING defined by MySQL the same as that defined by StarRocks?"}),"\n",(0,s.jsx)(t.p,{children:'For VARCHAR(n), StarRocks defines "n" by bytes and MySQL defines "n" by characters. According to UTF-8, one Chinese character is equal to three bytes. When StarRocks and MySQL define "n" as the same number, MySQL saves three times as many characters as StarRocks.'}),"\n",(0,s.jsx)(t.h2,{id:"can-the-data-type-of-partitioned-fields-of-a-table-be-float-double-or-decimal",children:"Can the data type of partitioned fields of a table be FLOAT, DOUBLE, or DECIMAL?"}),"\n",(0,s.jsx)(t.p,{children:"No, only DATE, DATETIME, and INT are supported."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-check-the-storage-space-that-is-occupied-by-the-data-in-a-table",children:"How to check the storage space that is occupied by the data in a table?"}),"\n",(0,s.jsx)(t.p,{children:"Execute the SHOW DATA statement to see the corresponding storage space. You can also see the data volume, the number of copies, and the number of rows."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": There is a time delay in data statistics."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-request-a-quota-increase-for-the-starrocks-database",children:"How to request a quota increase for the StarRocks database?"}),"\n",(0,s.jsx)(t.p,{children:"To request a quota increase, run the following code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"ALTER DATABASE example_db SET DATA QUOTA 10T;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"does-starrocks-support-updating-particular-fields-in-a-table-by-executing-the-upsert-statement",children:"Does StarRocks support updating particular fields in a table by executing the UPSERT statement?"}),"\n",(0,s.jsxs)(t.p,{children:["StarRocks 2.2 and later support updating specific fields in a table by using the Primary Key table. StarRocks 1.9 and later support updating all fields in a table by using the Primary Key table. For more information, see ",(0,s.jsx)(t.a,{href:"/doc/docs/2.5/table_design/table_types/primary_key_table",children:"Primary Key table"})," in StarRocks 2.2."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-swap-the-data-between-two-tables-or-two-partitions",children:"How to swap the data between two tables or two partitions?"}),"\n",(0,s.jsx)(t.p,{children:"Execute the SWAP WITH statement to swap the data between two tables or two partitions. The SWAP WITH statement is more secure than the INSERT OVERWRITE statement. Before you swap the data, check the data first and then see whether the data after the swapping is consistent with the data before the swapping."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Swap two tables: For example, there is a table named table 1. If you want to replace table 1 with another one, perform the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a new table named table 2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"create table2 like table1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Use Stream Load, Broker Load, or Insert Into to load data from table 1 into table 2."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Replace table 1 with table 2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE table1 SWAP WITH table2;\n"})}),"\n",(0,s.jsx)(t.p,{children:"By doing so, the data is loaded accurately into table 1."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Swap two partitions: For example, there is a table named table 1. If you want to replace the partition data in table 1, perform the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a temporary partition."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE table1\n\nADD TEMPORARY PARTITION tp1\n\nVALUES LESS THAN("2020-02-01");\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Load the partition data from table 1 into the temporary partition."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Replace the partition of table 1 with the temporary partition."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE table1\n\nREPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"this-error-error-to-open-replicated-environment-will-exit-occurs-when-i-restart-a-frontend-fe",children:'This error "error to open replicated environment, will exit" occurs when I restart a frontend (FE)'}),"\n",(0,s.jsx)(t.p,{children:"This error occurs due to BDBJE's bug. To solve this problem, update the BDBJE version to 1.17 or later."}),"\n",(0,s.jsx)(t.h2,{id:"this-error-broker-list-path-exception-occurs-when-i-query-data-from-a-new-apache-hive-table",children:'This error "Broker list path exception" occurs when I query data from a new Apache Hive table'}),"\n",(0,s.jsx)(t.h3,{id:"problem-description",children:"Problem description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"msg:Broker list path exception\n\npath=hdfs://172.31.3.136:9000/user/hive/warehouse/zltest.db/student_info/*, broker=TNetworkAddress(hostname:172.31.4.233, port:8000)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"Contact the StarRocks technical support and check whether the address and port of the namenode are correct and whether you have permission to access the address and port of the namenode."}),"\n",(0,s.jsx)(t.h2,{id:"this-error-get-hive-partition-metadata-failed-occurs-when-i-query-data-from-a-new-apache-hive-table",children:'This error "get hive partition metadata failed" occurs when I query data from a new Apache Hive table'}),"\n",(0,s.jsx)(t.h3,{id:"problem-description-1",children:"Problem description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"msg:get hive partition meta data failed: java.net.UnknownHostException: emr-header-1.cluster-242\n"})}),"\n",(0,s.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,s.jsxs)(t.p,{children:["Ensure that the network is connected and upload the ",(0,s.jsx)(t.strong,{children:"host"})," file to each backend (BE) in your StarRocks cluster."]}),"\n",(0,s.jsx)(t.h2,{id:"this-error-do_open-failed-reason--invalid-orc-postscript-length-occurs-when-i-access-orc-external-table-in-apache-hive",children:'This error "do_open failed. reason = Invalid ORC postscript length" occurs when I access ORC external table in Apache Hive'}),"\n",(0,s.jsx)(t.h3,{id:"problem-description-2",children:"Problem description"}),"\n",(0,s.jsx)(t.p,{children:"The metadata of the Apache Hive is cached in the FEs. But there is a two-hours time lag for StarRocks to update the metadata. Before StarRocks finishes the update, If you insert new data or update data in the Apache Hive table, the data in HDFS scanned by the BEs and the data obtained by the FEs are different. Therefore, this error occurs."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"MySQL [bdp_dim]> select * from dim_page_func_s limit 1;\n\nERROR 1064 (HY000): HdfsOrcScanner::do_open failed. reason = Invalid ORC postscript length\n"})}),"\n",(0,s.jsx)(t.h3,{id:"solution-2",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"To solve this problem, perform one of the following operations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Upgrade your current version to StarRocks 2.2 or later."}),"\n",(0,s.jsxs)(t.li,{children:["Manually refresh your Apache Hive table. For more information, see ",(0,s.jsx)(t.a,{href:"../using_starrocks/External_table#metadata-caching-strategy",children:"Metadata caching strategy"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"this-error-caching_sha2_password-cannot-be-loaded-occurs-when-i-connect-external-tables-of-mysql",children:'This error "caching_sha2_password cannot be loaded" occurs when I connect external tables of MySQL'}),"\n",(0,s.jsx)(t.h3,{id:"problem-description-3",children:"Problem description"}),"\n",(0,s.jsx)(t.p,{children:"The default authentication plugin of MySQL 8.0 is caching_sha2_password. The default authentication plugin of MySQL 5.7 is mysql_native_password. This error occurs because you use the wrong authentication plugin."}),"\n",(0,s.jsx)(t.h3,{id:"solution-3",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"To solve this problem, perform one of the following operations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Connect to the StarRocks."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Modify the ",(0,s.jsx)(t.code,{children:"my.cnf"})," file."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"vim my.cnf\n\n[mysqld]\n\ndefault_authentication_plugin=mysql_native_password\n"})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-release-disk-space-immediately-after-deleting-a-table",children:"How to release disk space immediately after deleting a table?"}),"\n",(0,s.jsx)(t.p,{children:"If you execute the DROP TABLE statement to delete a table, StarRocks takes a while to release the allocated disk space. To release the allocated disk space immediately, execute the DROP TABLE FORCE statement to delete a table. When you execute the DROP TABLE FORCE statement, the StarRocks deletes the table directly without checking whether there are unfinished events in it. We recommend that you execute the DROP TABLE FORCE statement with caution. Because once the table is deleted, you cannot restore it."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-view-the-current-version-of-starrocks",children:"How to view the current version of StarRocks?"}),"\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"select current_version();"})," command or the CLI command ",(0,s.jsx)(t.code,{children:"./bin/show_fe_version.sh"})," to view the current version."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-set-the-memory-size-of-an-fe",children:"How to set the memory size of an FE?"}),"\n",(0,s.jsxs)(t.p,{children:["The metadata is stored in the memory used by the FE. You can set the memory size of the FE according to the number of tablets as shown in the table below. For example, if the number of tablets is below 1 million, you should allocate a minimum of 16 GB memory to the FE. You can configure the values of the parameters ",(0,s.jsx)(t.code,{children:"-Xms"})," \u548c ",(0,s.jsx)(t.code,{children:"-Xmx"})," in the ",(0,s.jsx)(t.strong,{children:"JAVA_OPTS"})," configuration item in the ",(0,s.jsx)(t.strong,{children:"fe.conf"})," file, and the values of the parameters ",(0,s.jsx)(t.code,{children:"-Xms"})," \u548c ",(0,s.jsx)(t.code,{children:"-Xmx"})," should be consistent. Note that the configuration should be same across all FEs because any of the FEs can be elected as a Leader."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number of tablets"}),(0,s.jsx)(t.th,{children:"Memory size of each FE"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"below 1 million"}),(0,s.jsx)(t.td,{children:"16 GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1 \uff5e 2 million"}),(0,s.jsx)(t.td,{children:"32 GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2 \uff5e 5 million"}),(0,s.jsx)(t.td,{children:"64 GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5 \uff5e 10 million"}),(0,s.jsx)(t.td,{children:"128 GB"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"how-does-starrocks-calculate-its-query-time",children:"How does StarRocks calculate its query time?"}),"\n",(0,s.jsx)(t.p,{children:"StarRocks supports querying data by using multiple threads. Query time refers to the time used by multiple threads to query data."}),"\n",(0,s.jsx)(t.h2,{id:"does-starrocks-support-setting-the-path-when-i-export-data-locally",children:"Does StarRocks support setting the path when I export data locally?"}),"\n",(0,s.jsx)(t.p,{children:"No."}),"\n",(0,s.jsx)(t.h2,{id:"what-are-the-concurrency-upper-limits-of-starrocks",children:"What are the concurrency upper limits of StarRocks?"}),"\n",(0,s.jsx)(t.p,{children:"You can test the concurrency limitations based on the actual business scenarios or simulated business scenarios. According to the feedback of some users, maximum of 20,000 QPS or 30,000 QPS can be achieved."}),"\n",(0,s.jsx)(t.h2,{id:"why-is-the-first-time-ssb-test-performance-of-starrocks-slower-than-that-done-the-second-time",children:"Why is the first-time SSB test performance of StarRocks slower than that done the second time?"}),"\n",(0,s.jsx)(t.p,{children:"The speed to read disks for the first query relates to the performance of disks. After the first query, the page cache is generated for the subsequent queries, so the query is faster than before."}),"\n",(0,s.jsx)(t.h2,{id:"how-many-bes-need-to-be-configured-at-least-for-a-cluster",children:"How many BEs need to be configured at least for a cluster?"}),"\n",(0,s.jsx)(t.p,{children:"StarRocks supports single node deployment, so you need to configure at least one BE. BEs need to be run with AVX2, so we recommend that you deploy BEs on machines with 8-core and 16GB or higher configurations."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-set-data-permissions-when-i-use-apache-superset-to-visualize-the-data-in-starrocks",children:"How to set data permissions when I use Apache Superset to visualize the data in StarRocks?"}),"\n",(0,s.jsx)(t.p,{children:"You can create a new user account and then set the data permission by granting permissions on the table query to the user."}),"\n",(0,s.jsxs)(t.h2,{id:"why-does-the-profile-fail-to-display-after-i-set-enable_profile-to-true",children:["Why does the profile fail to display after I set ",(0,s.jsx)(t.code,{children:"enable_profile"})," to ",(0,s.jsx)(t.code,{children:"true"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:"The report is only submitted to the leader FE for access."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-check-field-annotations-in-the-tables-of-starrocks",children:"How to check field annotations in the tables of StarRocks?"}),"\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"show create table xxx"})," command."]}),"\n",(0,s.jsx)(t.h2,{id:"when-i-create-a-table-how-to-specify-the-default-value-for-the-now-function",children:"When I create a table, how to specify the default value for the NOW() function?"}),"\n",(0,s.jsx)(t.p,{children:"Only StarRocks 2.1 or later version supports specifying the default value for a function. For versions earlier than StarRocks 2.1, you can only specify a constant for a function."}),"\n",(0,s.jsx)(t.h2,{id:"how-can-i-release-the-storage-space-of-be-nodes",children:"How can I release the storage space of BE nodes?"}),"\n",(0,s.jsxs)(t.p,{children:["You can remove the directory ",(0,s.jsx)(t.code,{children:"trash"})," using ",(0,s.jsx)(t.code,{children:"rm -rf"})," command. If you have already restored your data from snapshot, you can remove the directory ",(0,s.jsx)(t.code,{children:"snapshot"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"can-add-extra-disks-to-be-nodes",children:"Can add extra disks to BE nodes?"}),"\n",(0,s.jsxs)(t.p,{children:["Yes. You can add the disks to the directory specified by the BE configuration item ",(0,s.jsx)(t.code,{children:"storage_root_path"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>o});var s=a(67294);const r=s.createContext({});function o(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||n:o(e),s.createElement(r.Provider,{value:i},t)}}}]);