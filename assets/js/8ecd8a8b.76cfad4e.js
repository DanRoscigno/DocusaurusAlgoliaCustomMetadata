"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6214],{18954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),o=t(11151);const s={},i="Routine Load",r={id:"faq/loading/Routine_load_faq",title:"Routine Load",description:"How can I improve loading performance?",source:"@site/versioned_docs/version-3.1/faq/loading/Routine_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Routine_load_faq",permalink:"/doc/en/faq/loading/Routine_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Routine_load_faq.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Data loading",permalink:"/doc/en/faq/loading/Loading_faq"},next:{title:"Stream Load",permalink:"/doc/en/faq/loading/Stream_load_faq"}},d={},c=[{value:"How can I improve loading performance?",id:"how-can-i-improve-loading-performance",level:2},{value:"What do I do if the result of SHOW ROUTINE LOAD shows that the load job is in the <code>PAUSED</code> state?",id:"what-do-i-do-if-the-result-of-show-routine-load-shows-that-the-load-job-is-in-the-paused-state",level:2},{value:"What do I do if the result of SHOW ROUTINE LOAD shows that the load job is in the <code>CANCELLED</code> state?",id:"what-do-i-do-if-the-result-of-show-routine-load-shows-that-the-load-job-is-in-the-cancelled-state",level:2},{value:"Can Routine Load guarantee consistency semantics when consuming from Kafka and writing to StarRocks?",id:"can-routine-load-guarantee-consistency-semantics-when-consuming-from-kafka-and-writing-to-starrocks",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",blockquote:"blockquote",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"routine-load",children:"Routine Load"}),"\n",(0,a.jsx)(n.h2,{id:"how-can-i-improve-loading-performance",children:"How can I improve loading performance?"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Method 1: Increase the actual load task parallelism"})," by splitting a load job into as many parallel load tasks as possible."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,a.jsx)(n.p,{children:"This method may consume more CPU resources and cause too many tablet versions."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The actual load task parallelism is determined by the following formula composed of several parameters, with an upper limit of the number of BE nodes alive or the number of partitions to be consumed."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plaintext",children:"min(alive_be_number, partition_number, desired_concurrent_number, max_routine_load_task_concurrent_num)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alive_be_number"}),": the number of BE nodes alive."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"partition_number"}),": the number of partitions to be consumed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"desired_concurrent_number"}),": the desired load task parallelism for a Routine Load job. The default value is ",(0,a.jsx)(n.code,{children:"3"}),". You can set a higher value for this parameter to increase the actual load task parallelism.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you have not created a Routine Load job, you need to set this parameter when using ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"})," to create a Routine Load job."]}),"\n",(0,a.jsxs)(n.li,{children:["If you have already created a Routine Load job, you need to use ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})," to modify this parameter."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_routine_load_task_concurrent_num"}),": the default maximum task parallelism for a Routine Load job. The default value is ",(0,a.jsx)(n.code,{children:"5"}),". This parameter is a an FE dynamic parameter. For more information and the configuration method, see ",(0,a.jsx)(n.a,{href:"/doc/en/administration/Configuration#loading-and-unloading",children:"Parameter configuration"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Therefore, when the number of partitions to be consumed and the number of BE nodes alive are greater than the other two parameters, you can increase the values of ",(0,a.jsx)(n.code,{children:"desired_concurrent_number"})," and ",(0,a.jsx)(n.code,{children:"max_routine_load_task_concurrent_num"})," parameters to increase the actual load task parallelism."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, the number of partitions to be consumed is ",(0,a.jsx)(n.code,{children:"7"}),", the number of live BE nodes is ",(0,a.jsx)(n.code,{children:"5"}),", and ",(0,a.jsx)(n.code,{children:"max_routine_load_task_concurrent_num"})," is the default value ",(0,a.jsx)(n.code,{children:"5"}),". At this time, if you need to increase the load task parallelism to the upper limit, you need to set ",(0,a.jsx)(n.code,{children:"desired_concurrent_number"})," to ",(0,a.jsx)(n.code,{children:"5"})," (the default value is ",(0,a.jsx)(n.code,{children:"3"}),"). Then, the actual task parallelism ",(0,a.jsx)(n.code,{children:"min(5,7,5,5)"})," is computed to be ",(0,a.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For more parameter descriptions, see ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Method 2: Increase the amount of data consumed by a Routine Load task from one or more partitions."})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,a.jsx)(n.p,{children:"This method may cause delay in data loading."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The upper limit of the number of messages that a Routine Load task can consume is determined by either the parameter ",(0,a.jsx)(n.code,{children:"max_routine_load_batch_size"})," which means the maximum number of messages that a load task can consume or the parameter ",(0,a.jsx)(n.code,{children:"routine_load_task_consume_second"})," which means the maximum duration of message consumption. Once an load task consumes enough data that meets either requirement, the consumption is complete. These two parameters are FE dynamic parameters. For more information and the configuration method, see ",(0,a.jsx)(n.a,{href:"/doc/en/administration/Configuration#loading-and-unloading",children:"Parameter configuration"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can analyze which parameter determines the upper limit of the amount of data consumed by a load task by viewing the log in ",(0,a.jsx)(n.strong,{children:"be/log/be.INFO"}),". By increasing that parameter, you can increase the amount of data consumed by a load task."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plaintext",children:"I0325 20:27:50.410579 15259 data_consumer_group.cpp:131] consumer group done: 41448fb1a0ca59ad-30e34dabfa7e47a0. consume time(ms)=3261, received rows=179190, received bytes=9855450, eos: 1, left_time: -261, left_bytes: 514432550, blocking get time(us): 3065086, blocking put time(us): 24855\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Normally, the field ",(0,a.jsx)(n.code,{children:"left_bytes"})," in the log is greater than or equal to ",(0,a.jsx)(n.code,{children:"0"}),", indicating that the amount of data consumed by a load task has not exceeded ",(0,a.jsx)(n.code,{children:"max_routine_load_batch_size"})," within ",(0,a.jsx)(n.code,{children:"routine_load_task_consume_second"}),". This means that a batch of scheduled load tasks can consume all data from Kafka without delay in consumption. In this scenario, you can set a larger value for ",(0,a.jsx)(n.code,{children:"routine_load_task_consume_second"})," to increase the amount of data consumed by a load task from one or more partitions."]}),"\n",(0,a.jsxs)(n.p,{children:["If the field ",(0,a.jsx)(n.code,{children:"left_bytes"})," is less than ",(0,a.jsx)(n.code,{children:"0"}),", it means that the amount of data consumed by a load task has reached ",(0,a.jsx)(n.code,{children:"max_routine_load_batch_size"})," within ",(0,a.jsx)(n.code,{children:"routine_load_task_consume_second"}),". Every time data from Kafka fills the batch of scheduled load tasks. Therefore, it is highly likely that there is remaining data that has not been consumed in Kafka, causing delay in consumption. In this case, you can set a larger value for ",(0,a.jsx)(n.code,{children:"max_routine_load_batch_size"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"what-do-i-do-if-the-result-of-show-routine-load-shows-that-the-load-job-is-in-the-paused-state",children:["What do I do if the result of SHOW ROUTINE LOAD shows that the load job is in the ",(0,a.jsx)(n.code,{children:"PAUSED"})," state?"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check the field ",(0,a.jsx)(n.code,{children:"ReasonOfStateChanged"})," and it reports the error message ",(0,a.jsx)(n.code,{children:"Broker: Offset out of range"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Cause analysis:"})," The consumer offset of the load job does not exist in the Kafka partition."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Solution:"})," You can execute ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",children:"SHOW ROUTINE LOAD"})," and check the latest consumer offset of the load job in the parameter ",(0,a.jsx)(n.code,{children:"Progress"}),". Then, you can verify if the corresponding message exists in the Kafka partition. If it does not exist, it may be because"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The consumer offset specified when the load job is created is an offset in the future."}),"\n",(0,a.jsxs)(n.li,{children:["The message at the specified consumer offset in the Kafka partition has been removed before being consumed by the load job. It is recommended to set a reasonable Kafka log cleaning policy and parameters, such as ",(0,a.jsx)(n.code,{children:"log.retention.hours and log.retention.bytes"}),", based on the loading speed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check the field ",(0,a.jsx)(n.code,{children:"ReasonOfStateChanged"})," and it doesn't report the error message ",(0,a.jsx)(n.code,{children:"Broker: Offset out of range"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Cause analysis:"})," The number of error rows in the load task exceeds the threshold ",(0,a.jsx)(n.code,{children:"max_error_number"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Solution:"})," You can troubleshoot and fix the issue by using error messages in the fields ",(0,a.jsx)(n.code,{children:"ReasonOfStateChanged"})," and ",(0,a.jsx)(n.code,{children:"ErrorLogUrls"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If it is caused by incorrect data format in the data source, you need to check the data format and fix the issue. After successfully fixing the issue, you can use ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"})," to resume the paused load job."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If it is because that StarRocks cannot parse the data format in the data source, you need to adjust the threshold ",(0,a.jsx)(n.code,{children:"max_error_number"}),". You can first execute ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",children:"SHOW ROUTINE LOAD"})," to view the value of ",(0,a.jsx)(n.code,{children:"max_error_number"}),", and then use ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})," to increase the threshold. After modifying the threshold, you can use ",(0,a.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"})," to resume the paused load job."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"what-do-i-do-if-the-result-of-show-routine-load-shows-that-the-load-job-is-in-the-cancelled-state",children:["What do I do if the result of SHOW ROUTINE LOAD shows that the load job is in the ",(0,a.jsx)(n.code,{children:"CANCELLED"})," state?"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Cause analysis:"})," The load job encountered an exception during loading, such as the table deleted."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Solution:"})," When troubleshooting and fixing the issue, you can refer to the error messages in the fields ",(0,a.jsx)(n.code,{children:"ReasonOfStateChanged"})," and ",(0,a.jsx)(n.code,{children:"ErrorLogUrls"}),". However, after fixing the issue, you cannot resume the cancelled load job."]}),"\n",(0,a.jsx)(n.h2,{id:"can-routine-load-guarantee-consistency-semantics-when-consuming-from-kafka-and-writing-to-starrocks",children:"Can Routine Load guarantee consistency semantics when consuming from Kafka and writing to StarRocks?"}),"\n",(0,a.jsx)(n.p,{children:"Routine Load guarantees exactly-once semantics."}),"\n",(0,a.jsx)(n.p,{children:"Each load task is a individual transaction. If an error occurs during the execution of the transaction, the transaction is aborted, and the FE does not update the consumption progress of the relevant partitions of the load tasks. When the FE schedules the load tasks from the task queue next time, the load tasks send the consumption request from the last saved consumption position of the partitions, thus ensuring exactly-once semantics."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>s});var a=t(67294);const o=a.createContext({});function s(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||i:s(e),a.createElement(o.Provider,{value:r},n)}}}]);