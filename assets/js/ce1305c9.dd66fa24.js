"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[7795],{3028:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var t=r(85893),a=r(11151);const n={},s="Broker Load",d={id:"faq/loading/Broker_load_faq",title:"Broker Load",description:"1. Does Broker Load support re-running load jobs that have been run successfully and are in the FINISHED state?",source:"@site/versioned_docs/version-2.5/faq/loading/Broker_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Broker_load_faq",permalink:"/doc/en/2.5/faq/loading/Broker_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Broker_load_faq.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"SQL",permalink:"/doc/en/2.5/faq/Sql_faq"},next:{title:"DataX",permalink:"/doc/en/2.5/faq/loading/DataX_faq"}},i={},c=[{value:"1. Does Broker Load support re-running load jobs that have been run successfully and are in the FINISHED state?",id:"1-does-broker-load-support-re-running-load-jobs-that-have-been-run-successfully-and-are-in-the-finished-state",level:2},{value:"2. When I load data from HDFS by using Broker Load, what do I do if the date and time values loaded into the destination StarRocks table are 8 hours later than the date and time values from the source data file?",id:"2-when-i-load-data-from-hdfs-by-using-broker-load-what-do-i-do-if-the-date-and-time-values-loaded-into-the-destination-starrocks-table-are-8-hours-later-than-the-date-and-time-values-from-the-source-data-file",level:2},{value:"3. When I load ORC-formatted data by using Broker Load, what do I do if the <code>ErrorMsg: type:ETL_RUN_FAIL; msg:Cannot cast &#39;&lt;slot 6&gt;&#39; from VARCHAR to ARRAY&lt;VARCHAR(30)&gt;</code> error occurs?",id:"3-when-i-load-orc-formatted-data-by-using-broker-load-what-do-i-do-if-the-errormsg-typeetl_run_fail-msgcannot-cast-slot-6-from-varchar-to-arrayvarchar30-error-occurs",level:2},{value:"4. The Broker Load job does not report errors, but why am I unable to query the loaded data?",id:"4-the-broker-load-job-does-not-report-errors-but-why-am-i-unable-to-query-the-loaded-data",level:2},{value:"5. What do I do if the &quot;failed to send batch&quot; or &quot;TabletWriter add batch with unknown id&quot; error occurs?",id:"5-what-do-i-do-if-the-failed-to-send-batch-or-tabletwriter-add-batch-with-unknown-id-error-occurs",level:2},{value:"6. What do I do if the &quot;LOAD-RUN-FAIL; msg:OrcScannerAdapter::init_include_columns. col name = xxx not found&quot; error occurs?",id:"6-what-do-i-do-if-the-load-run-fail-msgorcscanneradapterinit_include_columns-col-name--xxx-not-found-error-occurs",level:2},{value:"7. How do I handle errors such as the error that causes the Broker Load job to run for an excessively long period of time?",id:"7-how-do-i-handle-errors-such-as-the-error-that-causes-the-broker-load-job-to-run-for-an-excessively-long-period-of-time",level:2},{value:"8. How do I configure an Apache HDFS cluster that runs in HA mode?",id:"8-how-do-i-configure-an-apache-hdfs-cluster-that-runs-in-ha-mode",level:2},{value:"9. How do I configure Hadoop ViewFS Federation?",id:"9-how-do-i-configure-hadoop-viewfs-federation",level:2},{value:"10. When I access an HDFS cluster that requires Kerberos authentication, what do I do if the &quot;Can&#39;t get Kerberos realm&quot; error occurs?",id:"10-when-i-access-an-hdfs-cluster-that-requires-kerberos-authentication-what-do-i-do-if-the-cant-get-kerberos-realm-error-occurs",level:2}];function h(e){const o=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"broker-load",children:"Broker Load"}),"\n",(0,t.jsx)(o.h2,{id:"1-does-broker-load-support-re-running-load-jobs-that-have-been-run-successfully-and-are-in-the-finished-state",children:"1. Does Broker Load support re-running load jobs that have been run successfully and are in the FINISHED state?"}),"\n",(0,t.jsxs)(o.p,{children:["Broker Load does not support re-running load jobs that have been run successfully and are in the FINISHED state. Also, to prevent data loss and duplication, Broker Load does not allow reusing the labels of successfully run load jobs. You can use ",(0,t.jsx)(o.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})," to view the history of load jobs and find the load job that you want to re-run. Then, you can copy the information of that load job and use the job information, except the label, to create another load job."]}),"\n",(0,t.jsx)(o.h2,{id:"2-when-i-load-data-from-hdfs-by-using-broker-load-what-do-i-do-if-the-date-and-time-values-loaded-into-the-destination-starrocks-table-are-8-hours-later-than-the-date-and-time-values-from-the-source-data-file",children:"2. When I load data from HDFS by using Broker Load, what do I do if the date and time values loaded into the destination StarRocks table are 8 hours later than the date and time values from the source data file?"}),"\n",(0,t.jsxs)(o.p,{children:["Both the destination StarRocks table and the Broker Load job are compiled at creation to use a China Standard Time (CST) time zone (specified by using the ",(0,t.jsx)(o.code,{children:"timezone"})," parameter). However, the server is set to run based on a Coordinated Universal Time (UTC) time zone. As a result, 8 extra hours are added to the date and time values from the source data file during data loading. To prevent this issue, do not specify the ",(0,t.jsx)(o.code,{children:"timezone"})," parameter when you create the destination StarRocks table."]}),"\n",(0,t.jsxs)(o.h2,{id:"3-when-i-load-orc-formatted-data-by-using-broker-load-what-do-i-do-if-the-errormsg-typeetl_run_fail-msgcannot-cast-slot-6-from-varchar-to-arrayvarchar30-error-occurs",children:["3. When I load ORC-formatted data by using Broker Load, what do I do if the ",(0,t.jsx)(o.code,{children:"ErrorMsg: type:ETL_RUN_FAIL; msg:Cannot cast '<slot 6>' from VARCHAR to ARRAY<VARCHAR(30)>"})," error occurs?"]}),"\n",(0,t.jsxs)(o.p,{children:["The source data file has different column names than the destination StarRocks table. In this situation, you must use the ",(0,t.jsx)(o.code,{children:"SET"})," clause in the load statement to specify the column mapping between the file and the table. When executing the ",(0,t.jsx)(o.code,{children:"SET"})," clause, StarRocks needs to perform a type inference, but it fails in invoking the ",(0,t.jsx)(o.a,{href:"/doc/en/2.5/sql-reference/sql-functions/cast",children:"cast"})," function to transform the source data to the destination data types. To resolve this issue, make sure that the source data file has the same column names as the destination StarRocks table. As such, the ",(0,t.jsx)(o.code,{children:"SET"})," clause is not needed and therefore StarRocks does not need to invoke the cast function to perform data type conversions. Then the Broker Load job can be run successfully."]}),"\n",(0,t.jsx)(o.h2,{id:"4-the-broker-load-job-does-not-report-errors-but-why-am-i-unable-to-query-the-loaded-data",children:"4. The Broker Load job does not report errors, but why am I unable to query the loaded data?"}),"\n",(0,t.jsxs)(o.p,{children:["Broker Load is an asynchronous loading method. The load job may still fail even if the load statement does not return errors. After you run a Broker Load job, you can use ",(0,t.jsx)(o.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})," to view the result and ",(0,t.jsx)(o.code,{children:"errmsg"})," of the load job. Then, you can modify the job configuration and retry."]}),"\n",(0,t.jsx)(o.h2,{id:"5-what-do-i-do-if-the-failed-to-send-batch-or-tabletwriter-add-batch-with-unknown-id-error-occurs",children:'5. What do I do if the "failed to send batch" or "TabletWriter add batch with unknown id" error occurs?'}),"\n",(0,t.jsxs)(o.p,{children:["The amount of time taken to write the data exceeds the upper limit, causing a timeout error. To resolve this issue, modify the settings of the ",(0,t.jsx)(o.a,{href:"/doc/en/2.5/reference/System_variable",children:"session variable"})," ",(0,t.jsx)(o.code,{children:"query_timeout"})," and the ",(0,t.jsx)(o.a,{href:"/doc/en/2.5/administration/Configuration#configure-be-static-parameters",children:"BE configuration item"})," ",(0,t.jsx)(o.code,{children:"streaming_load_rpc_max_alive_time_sec"})," based on your business requirements."]}),"\n",(0,t.jsx)(o.h2,{id:"6-what-do-i-do-if-the-load-run-fail-msgorcscanneradapterinit_include_columns-col-name--xxx-not-found-error-occurs",children:'6. What do I do if the "LOAD-RUN-FAIL; msg:OrcScannerAdapter::init_include_columns. col name = xxx not found" error occurs?'}),"\n",(0,t.jsx)(o.p,{children:"If you are loading Parquet- or ORC-formatted data, check whether the column names held in the first row of the source data file are the same as the column names of the destination StarRocks table."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-SQL",children:"(tmp_c1,tmp_c2)\nSET\n(\n   id=tmp_c2,\n   name=tmp_c1\n)\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The preceding example maps the ",(0,t.jsx)(o.code,{children:"tmp_c1"})," and ",(0,t.jsx)(o.code,{children:"tmp_c2"})," columns of the source data file onto the ",(0,t.jsx)(o.code,{children:"name"})," and ",(0,t.jsx)(o.code,{children:"id"}),"  columns of the destination StarRocks table, respectively. If you do not specify the ",(0,t.jsx)(o.code,{children:"SET"})," clause, the column names specified in the ",(0,t.jsx)(o.code,{children:"column_list"})," parameter are used to declare the column mapping. For more information, see ",(0,t.jsx)(o.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"NOTICE"})}),"\n",(0,t.jsxs)(o.p,{children:["If the source data file is an ORC-formatted file generated by Apache Hive\u2122 and the first row of the file holds ",(0,t.jsx)(o.code,{children:"(_col0, _col1, _col2, ...)"}),', the "Invalid Column Name" error may occur. If this error occurs, you need to use the ',(0,t.jsx)(o.code,{children:"SET"})," clause to specify the column mapping."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"7-how-do-i-handle-errors-such-as-the-error-that-causes-the-broker-load-job-to-run-for-an-excessively-long-period-of-time",children:"7. How do I handle errors such as the error that causes the Broker Load job to run for an excessively long period of time?"}),"\n",(0,t.jsxs)(o.p,{children:["View the FE log file ",(0,t.jsx)(o.strong,{children:"fe.log"})," and search for the ID of the load job based on the job label. Then, view the BE log file ",(0,t.jsx)(o.strong,{children:"be.INFO"})," and retrieve the log records of the load job based on the job ID to locate the root cause of the error."]}),"\n",(0,t.jsx)(o.h2,{id:"8-how-do-i-configure-an-apache-hdfs-cluster-that-runs-in-ha-mode",children:"8. How do I configure an Apache HDFS cluster that runs in HA mode?"}),"\n",(0,t.jsx)(o.p,{children:"If an HDFS cluster runs in high availability (HA) mode, configure it as follows:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"dfs.nameservices"}),": the name of the HDFS cluster, for example, ",(0,t.jsx)(o.code,{children:'"dfs.nameservices" = "my_ha"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"dfs.ha.namenodes.xxx"}),": the name of the NameNode in the HDFS cluster. If you specify multiple NameNode names, separate them with commas (",(0,t.jsx)(o.code,{children:","}),"). ",(0,t.jsx)(o.code,{children:"xxx"})," is the HDFS cluster name that you have specified in ",(0,t.jsx)(o.code,{children:"dfs.nameservices"}),", for example, ",(0,t.jsx)(o.code,{children:'"dfs.ha.namenodes.my_ha" = "my_nn"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"dfs.namenode.rpc-address.xxx.nn"}),": the RPC address of the NameNode in the HDFS cluster. ",(0,t.jsx)(o.code,{children:"nn"})," is the NameNode name that you have specified in ",(0,t.jsx)(o.code,{children:"dfs.ha.namenodes.xxx"}),", for example, ",(0,t.jsx)(o.code,{children:'"dfs.namenode.rpc-address.my_ha.my_nn" = "host:port"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"dfs.client.failover.proxy.provider"}),": the provider of the NameNode to which the client will connect. Default value: ",(0,t.jsx)(o.code,{children:"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-SQL",children:'(\n    "dfs.nameservices" = "my-ha",\n    "dfs.ha.namenodes.my-ha" = "my-namenode1, my-namenode2",\n    "dfs.namenode.rpc-address.my-ha.my-namenode1" = "nn1-host:rpc_port",\n    "dfs.namenode.rpc-address.my-ha.my-namenode2" = "nn2-host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n'})}),"\n",(0,t.jsx)(o.p,{children:"The HA mode can be used with simple authentication or Kerberos authentication. For example, to use simple authentication to access an HDFS cluster that runs in HA mode, you need to specify the following configurations:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-SQL",children:'(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my-ha",\n    "dfs.ha.namenodes.my-ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my-ha.my-namenode1" = "nn1-host:rpc_port",\n    "dfs.namenode.rpc-address.my-ha.my-namenode2" = "nn2-host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n'})}),"\n",(0,t.jsxs)(o.p,{children:["You can add the configurations of the HDFS cluster to the ",(0,t.jsx)(o.strong,{children:"hdfs-site.xml"})," file. This way, you only need to specify the file path and authentication information when you use brokers to load data from the HDFS cluster."]}),"\n",(0,t.jsx)(o.h2,{id:"9-how-do-i-configure-hadoop-viewfs-federation",children:"9. How do I configure Hadoop ViewFS Federation?"}),"\n",(0,t.jsxs)(o.p,{children:["Copy the ViewFs-related configuration files ",(0,t.jsx)(o.code,{children:"core-site.xml"})," and ",(0,t.jsx)(o.code,{children:"hdfs-site.xml"})," to the ",(0,t.jsx)(o.strong,{children:"broker/conf"})," directory."]}),"\n",(0,t.jsxs)(o.p,{children:["If you have a custom file system, you also need to copy the file system-related ",(0,t.jsx)(o.strong,{children:".jar"})," files to the ",(0,t.jsx)(o.strong,{children:"broker/lib"})," directory."]}),"\n",(0,t.jsx)(o.h2,{id:"10-when-i-access-an-hdfs-cluster-that-requires-kerberos-authentication-what-do-i-do-if-the-cant-get-kerberos-realm-error-occurs",children:'10. When I access an HDFS cluster that requires Kerberos authentication, what do I do if the "Can\'t get Kerberos realm" error occurs?'}),"\n",(0,t.jsxs)(o.p,{children:["Check that the ",(0,t.jsx)(o.strong,{children:"/etc/krb5.conf"})," file is configured on all hosts on which brokers are deployed."]}),"\n",(0,t.jsxs)(o.p,{children:["If the error persists, add ",(0,t.jsx)(o.code,{children:"-Djava.security.krb5.conf:/etc/krb5.conf"})," to the end of the ",(0,t.jsx)(o.code,{children:"JAVA_OPTS"})," variable in the broker startup script."]})]})}const l=function(e={}){const{wrapper:o}=Object.assign({},(0,a.ah)(),e.components);return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,o,r)=>{r.d(o,{Zo:()=>d,ah:()=>n});var t=r(67294);const a=t.createContext({});function n(e){const o=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const s={};function d({components:e,children:o,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||s:n(e),t.createElement(a.Provider,{value:d},o)}}}]);