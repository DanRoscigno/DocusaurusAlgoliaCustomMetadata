"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61925],{10977:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>t});var r=s(85893),d=s(11151);const c={},i="Routine Load\u5e38\u89c1\u95ee\u9898",o={id:"faq/loading/Routine_load_faq",title:"Routine Load\u5e38\u89c1\u95ee\u9898",description:"1. \u5982\u4f55\u63d0\u9ad8\u5bfc\u5165\u6027\u80fd\uff1f",source:"@site/chinese_versioned_docs/version-2.5/faq/loading/Routine_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Routine_load_faq",permalink:"/doc/zh/2.5/faq/loading/Routine_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/faq/loading/Routine_load_faq.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u5bfc\u5165\u901a\u7528\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/2.5/faq/loading/Loading_faq"},next:{title:"Stream Load \u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/2.5/faq/loading/Stream_load_faq"}},l={},t=[{value:"1. \u5982\u4f55\u63d0\u9ad8\u5bfc\u5165\u6027\u80fd\uff1f",id:"1-\u5982\u4f55\u63d0\u9ad8\u5bfc\u5165\u6027\u80fd",level:2},{value:"2. \u6267\u884c SHOW ROUTINE LOAD\uff0c\u5bfc\u5165\u4f5c\u4e1a\u4e3a <strong>PAUSED</strong> \u6216\u8005 <strong>CANCELLED \u72b6\u6001\uff0c\u5982\u4f55\u6392\u67e5\u9519\u8bef\u5e76\u4fee\u590d\uff1f</strong>",id:"2-\u6267\u884c-show-routine-load\u5bfc\u5165\u4f5c\u4e1a\u4e3a-paused-\u6216\u8005-cancelled-\u72b6\u6001\u5982\u4f55\u6392\u67e5\u9519\u8bef\u5e76\u4fee\u590d",level:2},{value:"3. \u4f7f\u7528 Routine Load \u6d88\u8d39 Kafka \u5199\u5165 StarRocks \u662f\u5426\u80fd\u4fdd\u8bc1\u4e00\u81f4\u6027\u8bed\u4e49\uff1f",id:"3-\u4f7f\u7528-routine-load-\u6d88\u8d39-kafka-\u5199\u5165-starrocks-\u662f\u5426\u80fd\u4fdd\u8bc1\u4e00\u81f4\u6027\u8bed\u4e49",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",blockquote:"blockquote",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"routine-load\u5e38\u89c1\u95ee\u9898",children:"Routine Load\u5e38\u89c1\u95ee\u9898"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u5982\u4f55\u63d0\u9ad8\u5bfc\u5165\u6027\u80fd",children:"1. \u5982\u4f55\u63d0\u9ad8\u5bfc\u5165\u6027\u80fd\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u65b9\u5f0f\u4e00"}),"\uff1a",(0,r.jsx)(n.strong,{children:"\u589e\u52a0\u5b9e\u9645\u4efb\u52a1\u5e76\u884c\u5ea6"}),"\uff0c\u5c06\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u62c6\u5206\u6210\u5c3d\u53ef\u80fd\u591a\u7684\u5bfc\u5165\u4efb\u52a1\u5e76\u884c\u6267\u884c\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u65b9\u5f0f\u53ef\u80fd\u4f1a\u6d88\u8017\u66f4\u591a\u7684 CPU \u8d44\u6e90\uff0c\u5e76\u4e14\u5bfc\u81f4\u5bfc\u5165\u7248\u672c\u8fc7\u591a\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b9e\u9645\u4efb\u52a1\u5e76\u884c\u5ea6\u7531\u5982\u4e0b\u591a\u4e2a\u53c2\u6570\u7ec4\u6210\u7684\u516c\u5f0f\u51b3\u5b9a\uff0c\u4e0a\u9650\u4e3a BE \u8282\u70b9\u7684\u6570\u91cf\u6216\u8005\u6d88\u8d39\u5206\u533a\u7684\u6570\u91cf\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"min(alive_be_number, partition_number, desired_concurrent_number, max_routine_load_task_concurrent_num)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alive_be_number"}),"\uff1a\u5b58\u6d3b BE \u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"partition_number"}),"\uff1a\u6d88\u8d39\u5206\u533a\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"desired_concurrent_number"}),"\uff1aRoutine Load \u5bfc\u5165\u4f5c\u4e1a\u65f6\u4e3a\u5355\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u8bbe\u7f6e\u8f83\u9ad8\u7684\u671f\u671b\u4efb\u52a1\u5e76\u884c\u5ea6\uff0c\u9ed8\u8ba4\u503c\u4e3a 3\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8fd8\u672a\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5219\u9700\u8981\u5728\u6267\u884c ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"})," \u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u65f6\uff0c\u8bbe\u7f6e\u8be5\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u5df2\u7ecf\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5219\u9700\u8981\u6267\u884c ",(0,r.jsx)(n.a,{href:"../../sql-reference/sql-statements/data-manipulation/ALTER_ROUTINE_LOAD.md",children:"ALTER ROUTINE LOAD"}),"\uff0c\u4fee\u6539\u8be5\u53c2\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"max_routine_load_task_concurrent_num"}),"\uff1aRoutine Load \u5bfc\u5165\u4f5c\u4e1a\u7684\u9ed8\u8ba4\u6700\u5927\u4efb\u52a1\u5e76\u884c\u5ea6\u7684 \uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"5"}),"\u3002\u8be5\u53c2\u6570\u4e3a FE \u52a8\u6001\u53c2\u6570\uff0c\u66f4\u591a\u8bf4\u660e\u548c\u8bbe\u7f6e\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/administration/Configuration#%E5%AF%BC%E5%85%A5%E5%92%8C%E5%AF%BC%E5%87%BA%E7%9B%B8%E5%85%B3%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",children:"\u914d\u7f6e\u53c2\u6570"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\u5f53\u6d88\u8d39\u5206\u533a\u548c BE \u8282\u70b9\u6570\u91cf\u8f83\u591a\uff0c\u5e76\u4e14\u5927\u4e8e\u5176\u4f59\u4e24\u4e2a\u53c2\u6570\u65f6\uff0c\u5982\u679c\u60a8\u9700\u8981\u589e\u52a0\u5b9e\u9645\u4efb\u52a1\u5e76\u884c\u5ea6\uff0c\u5219\u53ef\u4ee5\u63d0\u9ad8\u5982\u4e0b\u53c2\u6570\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u6d88\u8d39\u5206\u533a\u6570\u91cf\u4e3a ",(0,r.jsx)(n.code,{children:"7"}),"\uff0c\u5b58\u6d3b BE \u6570\u91cf\u4e3a ",(0,r.jsx)(n.code,{children:"5"}),"\uff0c",(0,r.jsx)(n.code,{children:"max_routine_load_task_concurrent_num"})," \u4e3a\u9ed8\u8ba4\u503c ",(0,r.jsx)(n.code,{children:"5"}),"\u3002\u6b64\u65f6\u5982\u679c\u9700\u8981\u589e\u52a0\u5b9e\u9645\u4efb\u52a1\u5e76\u53d1\u5ea6\u81f3\u4e0a\u9650\uff0c\u5219\u9700\u8981\u5c06 ",(0,r.jsx)(n.code,{children:"desired_concurrent_number"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"5"}),"\uff08\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"3"}),"\uff09\uff0c\u5219\u8ba1\u7b97\u5b9e\u9645\u4efb\u52a1\u5e76\u884c\u5ea6 ",(0,r.jsx)(n.code,{children:"min(5,7,5,5)"})," \u4e3a ",(0,r.jsx)(n.code,{children:"5"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD#example",children:"CREATE ROUTINE LOAD"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u65b9\u5f0f\u4e8c"}),"\uff1a",(0,r.jsx)(n.strong,{children:"\u589e\u5927\u5355\u4e2a\u5bfc\u5165\u4efb\u52a1\u6d88\u8d39\u5206\u533a\u7684\u6570\u636e\u91cf"}),"\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u65b9\u5f0f\u4f1a\u9020\u6210\u6570\u636e\u5bfc\u5165\u7684\u5ef6\u8fdf\u53d8\u5927\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5355\u4e2a Routine Load \u5bfc\u5165\u4efb\u52a1\u6d88\u8d39\u6d88\u606f\u7684\u4e0a\u9650\u7531\u5bfc\u5165\u4efb\u52a1\u6700\u591a\u6d88\u8d39\u6d88\u606f\u91cf ",(0,r.jsx)(n.code,{children:"max_routine_load_batch_size"}),"\uff0c\u6216\u8005\u6d88\u8d39\u6700\u5927\u65f6\u957f ",(0,r.jsx)(n.code,{children:"routine_load_task_consume_second"})," \u51b3\u5b9a\u3002\u5f53\u5bfc\u5165\u4efb\u52a1\u6d88\u8d39\u6570\u636e\u5e76\u8fbe\u5230\u4e0a\u8ff0\u8981\u6c42\u540e\uff0c\u5219\u5b8c\u6210\u6d88\u8d39\u3002\u4e0a\u8ff0\u4e24\u4e2a\u53c2\u6570\u4e3a FE \u914d\u7f6e\u9879\uff0c\u66f4\u591a\u8bf4\u660e\u548c\u8bbe\u7f6e\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/administration/Configuration#%E5%AF%BC%E5%85%A5%E5%92%8C%E5%AF%BC%E5%87%BA%E7%9B%B8%E5%85%B3%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",children:"\u914d\u7f6e\u53c2\u6570"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b ",(0,r.jsx)(n.strong,{children:"be/log/be.INFO"})," \u4e2d\u7684\u65e5\u5fd7\uff0c\u5206\u6790\u5355\u4e2a\u5bfc\u5165\u4efb\u52a1\u6d88\u8d39\u6570\u636e\u91cf\u7684\u4e0a\u9650\u7531\u4e0a\u8ff0\u4f55\u79cd\u53c2\u6570\u51b3\u5b9a\uff0c\u5e76\u4e14\u901a\u8fc7\u63d0\u9ad8\u8be5\u53c2\u6570\uff0c\u589e\u5927\u5355\u4e2a\u5bfc\u5165\u4efb\u52a1\u6d88\u8d39\u7684\u6570\u636e\u91cf\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"I0325 20:27:50.410579 15259 data_consumer_group.cpp:131] consumer group done: 41448fb1a0ca59ad-30e34dabfa7e47a0. consume time(ms)=3261, received rows=179190, received bytes=9855450, eos: 1, left_time: -261, left_bytes: 514432550, blocking get time(us): 3065086, blocking put time(us): 24855\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u8be5\u65e5\u5fd7\u7684 ",(0,r.jsx)(n.code,{children:"left_bytes"})," \u5b57\u6bb5\u5e94\u8be5 >= ",(0,r.jsx)(n.code,{children:"0"}),"\uff0c\u8868\u793a\u5728 ",(0,r.jsx)(n.code,{children:"routine_load_task_consume_second"})," \u65f6\u95f4\u5185\u4e00\u6b21\u8bfb\u53d6\u7684\u6570\u636e\u91cf\u8fd8\u672a\u8d85\u8fc7 ",(0,r.jsx)(n.code,{children:"max_routine_load_batch_size"}),"\uff0c\u8bf4\u660e\u8c03\u5ea6\u7684\u4e00\u6279\u5bfc\u5165\u4efb\u52a1\u90fd\u53ef\u4ee5\u6d88\u8d39\u5b8c Kafka \u7684\u6570\u636e\uff0c\u4e0d\u5b58\u5728\u6d88\u8d39\u5ef6\u8fdf\uff0c\u5219\u6b64\u65f6\u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8 ",(0,r.jsx)(n.code,{children:"routine_load_task_consume_second"}),"\uff0c\u589e\u5927\u5355\u4e2a\u5bfc\u5165\u4efb\u52a1\u6d88\u8d39\u5206\u533a\u7684\u6570\u636e\u91cf \u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c ",(0,r.jsx)(n.code,{children:"left_bytes < 0"}),"\uff0c\u5219\u8868\u793a\u672a\u5230\u5728 ",(0,r.jsx)(n.code,{children:"routine_load_task_consume_second"})," \u89c4\u5b9a\u65f6\u95f4\uff0c\u4e00\u6b21\u8bfb\u53d6\u7684\u6570\u636e\u91cf\u5df2\u7ecf\u8fbe\u5230 ",(0,r.jsx)(n.code,{children:"max_routine_load_batch_size"}),"\uff0c\u6bcf\u6b21 Kafka \u7684\u6570\u636e\u90fd\u4f1a\u628a\u8c03\u5ea6\u7684\u4e00\u6279\u5bfc\u5165\u4efb\u52a1\u586b\u6ee1\uff0c\u56e0\u6b64\u6781\u6709\u53ef\u80fd Kafka \u8fd8\u6709\u5269\u4f59\u6570\u636e\u6ca1\u6709\u6d88\u8d39\u5b8c\uff0c\u5b58\u5728\u6d88\u8d39\u79ef\u538b\uff0c\u5219\u53ef\u4ee5\u63d0\u9ad8 ",(0,r.jsx)(n.code,{children:"max_routine_load_batch_size"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"2-\u6267\u884c-show-routine-load\u5bfc\u5165\u4f5c\u4e1a\u4e3a-paused-\u6216\u8005-cancelled-\u72b6\u6001\u5982\u4f55\u6392\u67e5\u9519\u8bef\u5e76\u4fee\u590d",children:["2. \u6267\u884c SHOW ROUTINE LOAD\uff0c\u5bfc\u5165\u4f5c\u4e1a\u4e3a ",(0,r.jsx)(n.strong,{children:"PAUSED"})," \u6216\u8005 ",(0,r.jsx)(n.strong,{children:"CANCELLED \u72b6\u6001\uff0c\u5982\u4f55\u6392\u67e5\u9519\u8bef\u5e76\u4fee\u590d\uff1f"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u62a5\u9519\u63d0\u793a"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u53d8\u6210 ",(0,r.jsx)(n.strong,{children:"PAUSED"})," \u72b6\u6001\uff0c\u5e76\u4e14 ",(0,r.jsx)(n.code,{children:"ReasonOfStateChanged"})," \u62a5\u9519 ",(0,r.jsx)(n.code,{children:"Broker: Offset out of range"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u539f\u56e0\u5206\u6790"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u7684\u6d88\u8d39\u4f4d\u70b9\u5728 Kafka \u5206\u533a\u4e2d\u4e0d\u5b58\u5728\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u5f0f"}),"\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c SHOW ROUTINE LOAD\uff0c\u5728 ",(0,r.jsx)(n.code,{children:"Progress"})," \u53c2\u6570\u4e2d\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7684\u6700\u65b0\u6d88\u8d39\u4f4d\u70b9\uff0c\u5e76\u4e14\u5728 Kafka \u5206\u533a\u4e2d\u67e5\u770b\u662f\u5426\u5b58\u5728\u8be5\u4f4d\u70b9\u7684\u6d88\u606f\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u53ef\u80fd\u6709\u5982\u4e0b\u4e24\u4e2a\u539f\u56e0\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u65f6\u6307\u5b9a\u7684\u6d88\u8d39\u4f4d\u70b9\u4e3a\u5c06\u6765\u7684\u65f6\u95f4\u70b9\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["Kafka \u5206\u533a\u4e2d\u8be5\u4f4d\u70b9\u7684\u6d88\u606f\u8fd8\u672a\u88ab\u5bfc\u5165\u4f5c\u4e1a\u6d88\u8d39\uff0c\u5c31\u5df2\u7ecf\u88ab\u6e05\u7406\u3002\u5efa\u8bae\u60a8\u6839\u636e\u5bfc\u5165\u4f5c\u4e1a\u7684\u5bfc\u5165\u901f\u5ea6\u8bbe\u7f6e\u5408\u7406\u7684 Kafka \u65e5\u5fd7\u6e05\u7406\u7b56\u7565\u548c\u53c2\u6570\uff0c\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"log.retention.hours"}),", ",(0,r.jsx)(n.code,{children:"log.retention.bytes"}),"\u7b49\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u62a5\u9519\u63d0\u793a"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u53d8\u6210 ",(0,r.jsx)(n.strong,{children:"PAUSED"})," \u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u539f\u56e0\u5206\u6790"}),"\uff1a\u53ef\u80fd\u4e3a\u5bfc\u5165\u4efb\u52a1\u9519\u8bef\u884c\u6570\u8d85\u8fc7\u9608\u503c ",(0,r.jsx)(n.code,{children:"max_error_number"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u5f0f"}),"\uff1a\u60a8\u53ef\u4ee5\u6839\u636e ",(0,r.jsx)(n.code,{children:"ReasonOfStateChanged"}),", ",(0,r.jsx)(n.code,{children:"ErrorLogUrls"}),"\u62a5\u9519\u8fdb\u884c\u6392\u67e5\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u662f\u6570\u636e\u6e90\u7684\u6570\u636e\u683c\u5f0f\u95ee\u9898\uff0c\u5219\u9700\u8981\u68c0\u67e5\u6570\u636e\u6e90\u6570\u636e\u683c\u5f0f\uff0c\u5e76\u8fdb\u884c\u4fee\u590d\u3002\u4fee\u590d\u540e\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"}),"\uff0c\u6062\u590d ",(0,r.jsx)(n.strong,{children:"PAUSED"})," \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u662f\u6570\u636e\u6e90\u7684\u6570\u636e\u683c\u5f0f\u65e0\u6cd5\u88ab StarRocks \u89e3\u6790\uff0c\u5219\u9700\u8981\u8c03\u6574\u9519\u8bef\u884c\u6570\u9608\u503c",(0,r.jsx)(n.code,{children:"max_error_number"}),"\u3002\n\u60a8\u53ef\u4ee5\u5148\u6267\u884c ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",children:"SHOW ROUTINE LOAD"}),"\uff0c\u67e5\u770b\u9519\u8bef\u884c\u6570\u9608\u503c ",(0,r.jsx)(n.code,{children:"max_error_number"}),"\uff0c\u7136\u540e\u6267\u884c ",(0,r.jsx)(n.a,{href:"../../sql-reference/sql-statements/data-manipulation/ALTER_ROUTINE_LOAD.md",children:"ALTER ROUTINE LOAD"}),"\uff0c\u9002\u5f53\u63d0\u9ad8\u9519\u8bef\u884c\u6570\u9608\u503c ",(0,r.jsx)(n.code,{children:"max_error_number"}),"\u3002\u4fee\u6539\u9608\u503c\u540e\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"}),"\uff0c\u6062\u590d ",(0,r.jsx)(n.strong,{children:"PAUSED"})," \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u62a5\u9519\u63d0\u793a"}),"\uff1a\u5982\u679c\u5bfc\u5165\u4f5c\u4e1a\u53d8\u6210\u4e3a ",(0,r.jsx)(n.strong,{children:"CANCELLED"})," \u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u539f\u56e0\u5206\u6790"}),"\uff1a\u53ef\u80fd\u4e3a\u5bfc\u5165\u4efb\u52a1\u6267\u884c\u65f6\u9047\u5230\u5f02\u5e38\uff0c\u5982\u8868\u88ab\u5220\u9664\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u5f0f"}),"\uff1a\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(n.code,{children:"ReasonOfStateChanged"}),", ",(0,r.jsx)(n.code,{children:"ErrorLogUrls"})," \u62a5\u9519\u8fdb\u884c\u6392\u67e5\u548c\u4fee\u590d\u3002\u4f46\u662f\u4fee\u590d\u540e\uff0c\u60a8\u65e0\u6cd5\u6062\u590d ",(0,r.jsx)(n.strong,{children:"CANCELLED"})," \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u4f7f\u7528-routine-load-\u6d88\u8d39-kafka-\u5199\u5165-starrocks-\u662f\u5426\u80fd\u4fdd\u8bc1\u4e00\u81f4\u6027\u8bed\u4e49",children:"3. \u4f7f\u7528 Routine Load \u6d88\u8d39 Kafka \u5199\u5165 StarRocks \u662f\u5426\u80fd\u4fdd\u8bc1\u4e00\u81f4\u6027\u8bed\u4e49\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"Routine Load \u80fd\u591f\u4fdd\u8bc1 Exactly-once \u8bed\u4e49\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u4e8b\u52a1\uff0c\u5982\u679c\u8be5\u4e8b\u52a1\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u5219\u4e8b\u52a1\u4f1a\u4e2d\u6b62\uff0cFE \u4e0d\u4f1a\u66f4\u65b0\u8be5\u5bfc\u5165\u4efb\u52a1\u76f8\u5173\u5206\u533a\u7684\u6d88\u8d39\u8fdb\u5ea6\u3002\u5e76\u4e14 FE \u5728\u4e0b\u4e00\u6b21\u8c03\u5ea6\u4efb\u52a1\u6267\u884c\u961f\u5217\u4e2d\u7684\u5bfc\u5165\u4efb\u52a1\u65f6\uff0c\u4ece\u4e0a\u6b21\u4fdd\u5b58\u7684\u5206\u533a\u6d88\u8d39\u4f4d\u70b9\u53d1\u8d77\u6d88\u8d39\u8bf7\u6c42\uff0c\u5982\u6b64\u53ef\u4ee5\u4fdd\u8bc1 Exactly once \u8bed\u4e49\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var r=s(67294);const d=r.createContext({});function c(e){const n=r.useContext(d);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(d.Provider,{value:o},n)}}}]);