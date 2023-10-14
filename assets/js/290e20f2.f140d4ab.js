"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26399],{5252:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=r(85893),n=r(11151);const t={},o="\u3010\u516c\u6d4b\u4e2d\u3011\u4ece Apache\xae Pulsar\u2122 \u6301\u7eed\u5bfc\u5165",a={id:"loading/load_from_pulsar",title:"\u3010\u516c\u6d4b\u4e2d\u3011\u4ece Apache\xae Pulsar\u2122 \u6301\u7eed\u5bfc\u5165",description:"\u81ea StarRocks 2.5 \u7248\u672c\uff0cRoutine Load \u652f\u6301\u6301\u7eed\u6d88\u8d39 Apache\xae Pulsar\u2122 \u7684\u6d88\u606f\u5e76\u5bfc\u5165\u81f3 StarRocks \u4e2d\u3002Pulsar \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u6d88\u606f\u961f\u5217\u7cfb\u7edf\uff0c\u91c7\u7528\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u67b6\u6784\u3002",source:"@site/chinese_versioned_docs/version-3.0/loading/load_from_pulsar.md",sourceDirName:"loading",slug:"/loading/load_from_pulsar",permalink:"/doc/zh/3.0/loading/load_from_pulsar",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/load_from_pulsar.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u4e25\u683c\u6a21\u5f0f",permalink:"/doc/zh/3.0/loading/load_concept/strict_mode"},next:{title:"quick_start",permalink:"/doc/zh/3.0/quick_start/"}},d={},l=[{value:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f",id:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f",level:2},{value:"Pulsar \u76f8\u5173\u6982\u5ff5",id:"pulsar-\u76f8\u5173\u6982\u5ff5",level:2},{value:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",id:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",level:2},{value:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u548c\u4efb\u52a1",id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u548c\u4efb\u52a1",level:2},{value:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a",id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1",id:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1",level:3},{value:"\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a",id:"\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a",level:2}];function c(e){const i=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",a:"a",ul:"ul",li:"li",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"\u516c\u6d4b\u4e2d\u4ece-apache-pulsar-\u6301\u7eed\u5bfc\u5165",children:"\u3010\u516c\u6d4b\u4e2d\u3011\u4ece Apache\xae Pulsar\u2122 \u6301\u7eed\u5bfc\u5165"}),"\n",(0,s.jsx)(i.p,{children:"\u81ea StarRocks 2.5 \u7248\u672c\uff0cRoutine Load \u652f\u6301\u6301\u7eed\u6d88\u8d39 Apache\xae Pulsar\u2122 \u7684\u6d88\u606f\u5e76\u5bfc\u5165\u81f3 StarRocks \u4e2d\u3002Pulsar \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u6d88\u606f\u961f\u5217\u7cfb\u7edf\uff0c\u91c7\u7528\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u67b6\u6784\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u901a\u8fc7 Routine Load \u5c06\u6570\u636e\u4ece Pulsar \u5bfc\u5165\uff0c\u4e0e\u4ece Apache Kafka \u5bfc\u5165\u7c7b\u4f3c\u3002\u672c\u6587\u4ee5 CSV \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\u4e3a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Routine Load  \u4ece Pulsar \u6301\u7eed\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f",children:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f"}),"\n",(0,s.jsx)(i.p,{children:"Routine Load \u76ee\u524d\u652f\u6301\u4ece Pulsar \u96c6\u7fa4\u4e2d\u6d88\u8d39 CSV\u3001JSON \u683c\u5f0f\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"\u8bf4\u660e"}),"\n",(0,s.jsx)(i.p,{children:"\u5bf9\u4e8e CSV \u683c\u5f0f\u7684\u6570\u636e\uff0cStarRocks \u652f\u6301\u8bbe\u7f6e\u957f\u5ea6\u6700\u5927\u4e0d\u8d85\u8fc7 50 \u4e2a\u5b57\u8282\u7684 UTF-8 \u7f16\u7801\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5217\u5206\u9694\u7b26\uff0c\u5305\u62ec\u5e38\u89c1\u7684\u9017\u53f7 (,)\u3001Tab \u548c Pipe (|)\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"pulsar-\u76f8\u5173\u6982\u5ff5",children:"Pulsar \u76f8\u5173\u6982\u5ff5"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#topics",children:"Topic"})})}),"\n",(0,s.jsxs)(i.p,{children:["Topic \u8d1f\u8d23\u5b58\u50a8\u548c\u53d1\u5e03\u6d88\u606f\u3002Producer \u5f80 Topic \u4e2d\u5199\u6d88\u606f\uff0cConsumer \u4ece Topic \u4e2d\u8bfb\u6d88\u606f\u3002Pulsar \u7684 Topic \u5206\u4e3a Partitioned Topic \u548c Non-Partitioned Topic \u4e24\u7c7b\u3002",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#partitioned-topics",children:"Partitioned Topic"}),"\uff1a\u901a\u8fc7\u591a\u4e2a Broker \u63d0\u4f9b\u670d\u52a1\uff0c\u53ef\u4ee5\u652f\u6301\u66f4\u9ad8\u7684\u541e\u5410\u91cf\u3002Pulsar \u901a\u8fc7\u591a\u4e2a Internal Topic \u6765\u5b9e\u73b0 Partitioned Topic\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"Non-Partitioned Topic\uff1a\u53ea\u4f1a\u6709\u5355\u4e2a Broker \u63d0\u4f9b\u670d\u52a1\uff0c\u9650\u5236\u4e86 Topic \u7684\u541e\u5410\u91cf\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#messages",children:"Message ID"})})}),"\n",(0,s.jsxs)(i.p,{children:["Message ID \u8868\u793a\u6d88\u606f ID \uff0c\u5728\u96c6\u7fa4\u7ef4\u5ea6\u662f\u552f\u4e00\u7684\uff0c\u7c7b\u4f3c\u4e8e Kafka \u7684 Offset\u3002Consumer \u53ef\u4ee5\u901a\u8fc7 seek \u7279\u5b9a\u7684 Message ID \u79fb\u52a8\u6d88\u8d39\u8fdb\u5ea6\u3002\u4f46\u662f\u76f8\u6bd4\u4e8e Kafka \u7684 Offset \u4e3a\u957f\u6574\u578b\u6570\u503c\uff0cPulsar \u7684 Message ID \u7531\u56db\u90e8\u5206\u6784\u6210:  ",(0,s.jsx)(i.code,{children:"ledgerId:entryID:partition-index:batch-index"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["\u56e0\u6b64\uff0c\u60a8\u65e0\u6cd5\u76f4\u63a5\u901a\u8fc7\u6d88\u606f\u5c31\u80fd\u5f97\u5230 Message ID**\u3002",(0,s.jsx)(i.strong,{children:"\u6240\u4ee5\u76ee\u524d\u6682\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u8d77\u59cb Position\uff0c\u4ec5\u652f\u6301\u4ece Partition \u5f00\u5934\u6216\u8005\u7ed3\u5c3e\u5f00\u59cb\u6d88\u8d39"}),"\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#subscriptions",children:"Subscription"})})}),"\n",(0,s.jsx)(i.p,{children:"\u8ba2\u9605\u662f\u547d\u540d\u597d\u7684\u914d\u7f6e\u89c4\u5219\uff0c\u6307\u5bfc\u6d88\u606f\u5982\u4f55\u6295\u9012\u7ed9 Consumer\uff0c\u652f\u6301\u5982\u4e0b\u56db\u79cd\u7c7b\u578b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"exclusive"})," (\u9ed8\u8ba4)\uff1a\u4e00\u4e2a Subscription \u53ea\u80fd\u4e0e\u4e00\u4e2a Consumer \u5173\u8054\uff0c\u53ea\u6709\u8fd9\u4e2a Consumer \u53ef\u4ee5\u63a5\u6536\u5230 Topic \u7684\u5168\u90e8\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"shared"}),"\uff1a\u591a\u4e2a Consumer \u53ef\u4ee5\u5173\u8054\u540c\u4e00\u4e2a Subscription\uff0c\u6d88\u606f\u6309\u7167 round-robin \u7684\u65b9\u5f0f\u5206\u53d1\u5230 Consumer \u4e0a\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"failover"}),"\uff1a\u591a\u4e2a Consumer \u53ef\u4ee5\u5173\u8054\u540c\u4e00\u4e2a Subscription\uff0c\u5176\u4e2d\u90e8\u5206 Consumer \u4f1a\u88ab\u4f5c\u4e3a Master Consumer\u3002 \u5bf9\u4e8e Non-Partitioned Topic\uff0c \u4e00\u4e2a Topic \u4f1a\u9009\u51fa\u4e00\u4e2a Master Consumer\u3002\u5bf9\u4e8e Partitioned Topic\uff0c\u4e00\u4e2a Partition \u4f1a\u9009\u51fa\u4e00\u4e2a Master Consumer\u3002Master Consumer \u8d1f\u8d23\u6d88\u8d39\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"key_shared"}),"\uff1a\u591a\u4e2a Consumer \u53ef\u4ee5\u5173\u8054\u540c\u4e00\u4e2a Subscription\uff0c\u76f8\u540c Key \u7684\u6d88\u606f\u4f1a\u88ab\u5206\u53d1\u5230\u540c\u4e00\u4e2a Consumer\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsx)(i.p,{children:"\u76ee\u524d Routine Load \u4f7f\u7528\u7684\u662f exclusive \u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",children:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a"}),"\n",(0,s.jsxs)(i.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(i.a,{href:"../sql-statements/data-manipulation/CREATE_ROUTINE_LOAD.md",children:"CREATE ROUTINE LOAD"})," \u8bed\u53e5\uff0c\u5411StarRocks \u63d0\u4ea4\u4e00\u4e2a Routine Load \u5bfc\u5165\u4f5c\u4e1a ",(0,s.jsx)(i.code,{children:"routine_wiki_edit_1"}),"\uff0c\u6301\u7eed\u6d88\u8d39 Pulsar \u96c6\u7fa4\u4e2d Topic ",(0,s.jsx)(i.code,{children:"ordertest1"}),"  \u7684\u6d88\u606f\uff0c \u5e76\u4e14\u4f7f\u7528 Subscription  ",(0,s.jsx)(i.code,{children:"load-test"}),"\uff0c\u6307\u5b9a\u6d88\u8d39\u5206\u533a\u4e3a ",(0,s.jsx)(i.code,{children:"load-partition-0"}),"\uff0c",(0,s.jsx)(i.code,{children:"load-partition-1"}),"\uff0c\u5206\u533a\u5bf9\u5e94\u7684\u6d88\u8d39\u8d77\u59cb Position \u5206\u522b\u4e3a Partition \u6709\u6570\u636e\u7684\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39\u3001Partition \u672b\u5c3e\u5f00\u59cb\u6d88\u8d39\u3002\u5e76\u5bfc\u5165\u81f3\u6570\u636e\u5e93 ",(0,s.jsx)(i.code,{children:"load_test"})," \u7684\u8868 ",(0,s.jsx)(i.code,{children:"routine_wiki_edit"})," \u4e2d\u3002"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD load_test.routine_wiki_edit_1 ON routine_wiki_edit\nCOLUMNS TERMINATED BY ",",\nROWS TERMINATED BY "\\n",\nCOLUMNS (order_id, pay_dt, customer_name, nationality, temp_gender, price)\nWHERE event_time > "2022-01-01 00:00:00",\nPROPERTIES\n(\n    "desired_concurrent_number" = "1",\n    "max_batch_interval" = "15000",\n    "max_error_number" = "1000"\n)\nFROM PULSAR\n(\n    "pulsar_service_url" = "pulsar://localhost:6650",\n    "pulsar_topic" = "persistent://tenant/namespace/ordertest1",\n    "pulsar_subscription" = "load-test",\n    "pulsar_partitions" = "load-partition-0,load-partition-1",\n    "pulsar_initial_positions" = "POSITION_EARLIEST,POSITION_LATEST",\n    "property.auth.token" = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUJzdWIiOiJqaXV0aWFuY2hlbiJ9.lulGngOC72vE70OW54zcbyw7XdKSOxET94WT_hIqD5Y"\n);\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u6d88\u8d39 Pulsar \u4e2d\u7684\u6570\u636e\uff0c\u9664\u4e86  ",(0,s.jsx)(i.code,{children:"data_source_properties"})," \u76f8\u5173\u53c2\u6570\u5916\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\u65b9\u5f0f\u4e0e",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/loading/RoutineLoad#%E5%AF%BC%E5%85%A5%E4%BD%9C%E4%B8%9A",children:"\u6d88\u8d39 Kafka"})," \u65f6\u76f8\u540c\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"data_source_properties"})," \u76f8\u5173\u53c2\u6570\u4ee5\u53ca\u8bf4\u660e\u5982\u4e0b\u8868\u6240\u8ff0\u3002"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"\u662f\u5426\u5fc5\u586b"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"pulsar_service_url"})}),(0,s.jsx)(i.td,{children:"\u662f"}),(0,s.jsxs)(i.td,{children:["Pulsar \u96c6\u7fa4\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u683c\u5f0f\u4e3a ",(0,s.jsx)(i.code,{children:"pulsar://``ip:port"})," \u6216 ",(0,s.jsx)(i.code,{children:"pulsar://``service:port"}),"\u3002\u793a\u4f8b\uff1a",(0,s.jsx)(i.code,{children:'"pulsar_service_url" = "pulsar://``localhost:6650``"'})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"pulsar_topic"})}),(0,s.jsx)(i.td,{children:"\u662f"}),(0,s.jsxs)(i.td,{children:["\u6240\u9700\u6d88\u8d39 Topic\u3002\u793a\u4f8b\uff1a",(0,s.jsx)(i.code,{children:'"pulsar_topic" = "persistent://tenant/namespace/topic-name"'})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"pulsar_subscription"})}),(0,s.jsx)(i.td,{children:"\u662f"}),(0,s.jsxs)(i.td,{children:["\u6240\u9700\u6d88\u8d39 Topic \u5bf9\u5e94\u7684 Subscription\u3002\u793a\u4f8b\uff1a",(0,s.jsx)(i.code,{children:'"pulsar_subscription" = "my_subscription"'})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"pulsar_partitions"}),"\u3001",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"})]}),(0,s.jsx)(i.td,{children:"\u662f"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"pulsar_partitions"})," \u4e3a\u9700\u8981\u6d88\u8d39\u7684 Partition\u3002",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"}),"\u4e3a\u5bf9\u5e94 Partition \u7684\u6d88\u8d39\u8d77\u59cb Position\u3002\u6bcf\u8bbe\u7f6e\u4e00\u4e2a Partition \u9700\u8981\u8bbe\u7f6e\u5bf9\u5e94 Partition \u7684\u6d88\u8d39\u8d77\u59cb Position\u3002 \u53d6\u503c\u8303\u56f4\u4e3a\uff1a",(0,s.jsx)(i.code,{children:"POSITION_EARLIEST"})," (\u9ed8\u8ba4)\uff1a\u4ece Partition \u6709\u6570\u636e\u7684\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39\u3002",(0,s.jsx)(i.code,{children:"POSITION_LATEST"}),"\uff1a\u4ece Partition \u672b\u5c3e\u5f00\u59cb\u6d88\u8d39\u3002",(0,s.jsx)(i.strong,{children:"\u8bf4\u660e"}),"\u5982\u679c\u4e0d\u6307\u5b9a ",(0,s.jsx)(i.code,{children:"pulsar_partitions"}),"\uff0c\u5219\u4f1a\u81ea\u52a8\u5c55\u5f00 Topic \u4e0b\u6240\u6709  Partition \u8fdb\u884c\u6d88\u8d39\u3002\u5982\u679c ",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"})," \u548c ",(0,s.jsx)(i.code,{children:"property.pulsar_default_initial_position"})," \u90fd\u6307\u5b9a\uff0c\u5219\u524d\u8005\u4f1a\u8986\u76d6\u540e\u8005\u7684\u914d\u7f6e\u3002\u5982\u679c ",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"})," \u548c ",(0,s.jsx)(i.code,{children:"property.pulsar_default_initial_position"})," \u90fd\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4ece subscription \u5efa\u7acb\u540e\u6536\u5230\u7684\u7b2c\u4e00\u6761\u6570\u636e\u5f00\u59cb\u6d88\u8d39\u3002\u793a\u4f8b\uff1a",(0,s.jsx)(i.code,{children:'"pulsar_partitions" = "my-partition-0,my-partition-1,my-partition-2,my-partition-3", "pulsar_initial_positions" = "POSITION_EARLIEST,POSITION_EARLIEST,POSITION_LATEST,POSITION_LATEST"'})]})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"Routine Load \u8fd8\u652f\u6301\u81ea\u5b9a\u4e49 Pulsar \u53c2\u6570\uff0c\u5982\u4e0b\u8868\u6240\u8ff0\u3002"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"\u662f\u5426\u5fc5\u586b"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"property.pulsar_default_initial_position"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsxs)(i.td,{children:["\u5f85\u6d88\u8d39 partition \u7684\u9ed8\u8ba4\u6d88\u8d39\u8d77\u59cb position\u3002 \u4ec5\u5728 ",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"})," \u672a\u6307\u5b9a\u65f6\u751f\u6548\u3002\u6709\u6548\u53d6\u503c\u4e0e pulsar_initial_positions \u4e00\u81f4\u3002\u793a\u4f8b\uff1a",(0,s.jsx)(i.code,{children:'"property.pulsar_default_initial_position" = "POSITION_EARLIEST"'})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"property.auth.token"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsxs)(i.td,{children:["\u7528\u4e8e\u8eab\u4efd\u8ba4\u8bc1\u548c\u9274\u6743\u7684 ",(0,s.jsx)(i.a,{href:"https://pulsar.apache.org/docs/2.10.x/security-overview/",children:"token"}),"\uff0c\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u793a\u4f8b: ",(0,s.jsx)(i.code,{children:'"property.auth.token" = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUJzdWIiOiJqaXV0aWFuY2hlbiJ9.lulGngOC72vE70OW54zcbyw7XdKSOxET94WT_hIqD"'})]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u548c\u4efb\u52a1",children:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u548c\u4efb\u52a1"}),"\n",(0,s.jsx)(i.h3,{id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a",children:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a"}),"\n",(0,s.jsxs)(i.p,{children:["\u63d0\u4ea4 Routine Load \u5bfc\u5165\u4f5c\u4e1a\u4ee5\u540e\uff0c\u60a8\u53ef\u4ee5\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",children:"SHOW ROUTINE LOAD"})," \u8bed\u53e5\u6765\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(i.code,{children:"routine_wiki_edit_1"})," \u7684\u5bfc\u5165\u4f5c\u4e1a\u7684\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-Plaintext",children:'MySQL [load_test] > SHOW ROUTINE LOAD for routine_wiki_edit_1 \\G\n*************************** 1. row ***************************\n                  Id: 10142\n                Name: routine_wiki_edit_1\n          CreateTime: 2022-06-29 14:52:55\n           PauseTime: 2022-06-29 17:33:53\n             EndTime: NULL\n              DbName: default_cluster:test_pulsar\n           TableName: test1\n               State: PAUSED\n      DataSourceType: PULSAR\n      CurrentTaskNum: 0\n       JobProperties: {"partitions":"*","rowDelimiter":"\'\\n\'","partial_update":"false","columnToColumnExpr":"*","maxBatchIntervalS":"10","whereExpr":"*","timezone":"Asia/Shanghai","format":"csv","columnSeparator":"\',\'","json_root":"","strict_mode":"false","jsonpaths":"","desireTaskConcurrentNum":"3","maxErrorNum":"10","strip_outer_array":"false","currentTaskConcurrentNum":"0","maxBatchRows":"200000"}\nDataSourceProperties: {"serviceUrl":"pulsar://localhost:6650","currentPulsarPartitions":"my-partition-0,my-partition-1","topic":"persistent://tenant/namespace/ordertest1","subscription":"load-test"}\n    CustomProperties: {"auth.token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUJzdWIiOiJqaXV0aWFuY2hlbiJ9.lulGngOC72vE70OW54zcbyw7XdKSOxET94WT_hIqD"}\n           Statistic: {"receivedBytes":5480943882,"errorRows":0,"committedTaskNum":696,"loadedRows":66243440,"loadRowsRate":29000,"abortedTaskNum":0,"totalRows":66243440,"unselectedRows":0,"receivedBytesRate":2400000,"taskExecuteTimeMs":2283166}\n            Progress: {"my-partition-0(backlog): 100","my-partition-1(backlog): 0"}\nReasonOfStateChanged: \n        ErrorLogUrls: \n            OtherMsg:\n1 row in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u6d88\u8d39 Pulsar \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\uff0c\u9664\u4e86 ",(0,s.jsx)(i.code,{children:"progress"})," \u5916\u5176\u4ed6\u53c2\u6570\u4ee5\u53ca\u542b\u4e49\u4e0e",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/loading/RoutineLoad#%E6%9F%A5%E7%9C%8B%E5%AF%BC%E5%85%A5%E4%BD%9C%E4%B8%9A",children:"\u6d88\u8d39 Kafka"})," \u65f6\u76f8\u540c\u3002",(0,s.jsx)(i.code,{children:"progress"})," \u8868\u793a\u88ab\u6d88\u8d39 Partition \u7684 Backlog\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1",children:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,s.jsxs)(i.p,{children:["\u63d0\u4ea4 Routine Load \u5bfc\u5165\u4f5c\u4e1a\u4ee5\u540e\uff0c\u60a8\u53ef\u4ee5\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",children:"SHOW ROUTINE LOAD"}),"\uff0c\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u4e00\u4e2a\u6216\u591a\u4e2a\u5bfc\u5165\u4efb\u52a1\u7684\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(i.code,{children:"routine_wiki_edit_1"}),"\u7684\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u4e00\u4e2a\u6216\u591a\u4e2a\u5bfc\u5165\u4efb\u52a1\u7684\u4fe1\u606f\u3002\u6bd4\u5982\u5f53\u524d\u6709\u591a\u5c11\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\uff0c\u6d88\u8d39\u5206\u533a\u53ca\u8fdb\u5ea6",(0,s.jsx)(i.code,{children:"DataSourceProperties"}),"\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684 Coordinator BE \u8282\u70b9 ",(0,s.jsx)(i.code,{children:"BeId"}),"\u3002"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-SQL",children:'MySQL [example_db]> SHOW ROUTINE LOAD TASK WHERE JobName = "routine_wiki_edit_1" \\G\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u6d88\u8d39 Pulsar \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\uff0c\u53c2\u6570\u4ee5\u53ca\u542b\u4e49\u4e0e",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/loading/RoutineLoad#%E6%9F%A5%E7%9C%8B%E5%AF%BC%E5%85%A5%E4%BB%BB%E5%8A%A1",children:"\u6d88\u8d39 Kafka"})," \u65f6\u7c7b\u4f3c\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a",children:"\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a"}),"\n",(0,s.jsxs)(i.p,{children:["\u4fee\u6539\u524d\uff0c\u60a8\u9700\u8981\u5148\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-reference/data-manipulation/PAUSE_ROUTINE_LOAD.md",children:"PAUSE ROUTINE LOAD"})," \u6682\u505c\u5bfc\u5165\u4f5c\u4e1a\u3002\u7136\u540e\u6267\u884c ",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})," \u8bed\u53e5\uff0c\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a\u7684\u53c2\u6570\u914d\u7f6e\u3002\u4fee\u6539\u6210\u529f\u540e\uff0c\u60a8\u9700\u8981\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-reference/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"}),"\uff0c\u6062\u590d\u5bfc\u5165\u4f5c\u4e1a\u3002\u7136\u540e\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",children:"SHOW ROUTINE LOAD"})," \u8bed\u53e5\u67e5\u770b\u4fee\u6539\u540e\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u6d88\u8d39 Pulsar \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\uff0c\u9664\u4e86 ",(0,s.jsx)(i.code,{children:"data_source_properties"})," \u5916\u7684\u53c2\u6570\u4fee\u6539\u65b9\u5f0f\u4e0e",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/loading/RoutineLoad#%E4%BF%AE%E6%94%B9%E5%AF%BC%E5%85%A5%E4%BD%9C%E4%B8%9A",children:"\u6d88\u8d39 Kafka"}),"  \u65f6\u76f8\u540c\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u4fee\u6539\u524d\uff0c\u60a8\u9700\u8981\u5148\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-reference/data-manipulation/PAUSE_ROUTINE_LOAD.md",children:"PAUSE ROUTINE LOAD"})," \u6682\u505c\u5bfc\u5165\u4f5c\u4e1a\u3002\u7136\u540e\u6267\u884c ",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})," \u8bed\u53e5\uff0c\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a\u7684\u53c2\u6570\u914d\u7f6e\u3002\u4fee\u6539\u6210\u529f\u540e\uff0c\u60a8\u9700\u8981\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-reference/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"}),"\uff0c\u6062\u590d\u5bfc\u5165\u4f5c\u4e1a\u3002\u7136\u540e\u6267\u884c ",(0,s.jsx)(i.a,{href:"../sql-statements/data-manipulation/SHOW_ROUTINE_LOAD.md",children:"SHOW ROUTINE LOAD"})," \u8bed\u53e5\u67e5\u770b\u4fee\u6539\u540e\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u6d88\u8d39 Pulsar \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\uff0c\u9664\u4e86 ",(0,s.jsx)(i.code,{children:"data_source_properties"})," \u5916\u7684\u53c2\u6570\u4fee\u6539\u65b9\u5f0f\u4e0e",(0,s.jsx)(i.a,{href:"/doc/zh/3.0/loading/RoutineLoad#%E4%BF%AE%E6%94%B9%E5%AF%BC%E5%85%A5%E4%BD%9C%E4%B8%9A",children:"\u6d88\u8d39 Kafka"}),"  \u65f6\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"data_source_properties"}),"\u76f8\u5173\u53c2\u6570\u4e2d\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u4fee\u6539",(0,s.jsx)(i.code,{children:"pulsar_partitions"}),"\u3001",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"}),"\uff0c\u4ee5\u53ca\u81ea\u5b9a\u4e49 Pulsar \u53c2\u6570",(0,s.jsx)(i.code,{children:"property.pulsar_default_initial_position"})," \u3001 ",(0,s.jsx)(i.code,{children:"property.auth.token"}),"\u3002\u4e0d\u652f\u6301\u4fee\u6539 ",(0,s.jsx)(i.code,{children:"pulsar_service_url"}),", ",(0,s.jsx)(i.code,{children:"pulsar_topic"}),", ",(0,s.jsx)(i.code,{children:"pulsar_subscription"}),"\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u5982\u679c\u9700\u8981\u4fee\u6539\u5f85\u6d88\u8d39 partition \u4ee5\u53ca\u5bf9\u5e94\u8d77\u59cb position\uff0c\u5219\u60a8\u9700\u8981\u786e\u4fdd\u5728\u521b\u5efa Routine Load \u5bfc\u5165\u4f5c\u4e1a\u65f6\u5df2\u7ecf\u4f7f\u7528 ",(0,s.jsx)(i.code,{children:"pulsar_partitions"})," \u6307\u5b9a partition\u3002\u5e76\u4e14\u4ec5\u652f\u6301\u4fee\u6539\u5df2\u7ecf\u6307\u5b9a partition \u7684\u8d77\u59cb position ",(0,s.jsx)(i.code,{children:"pulsar_initial_positions"}),"\uff0c\u4e0d\u652f\u6301\u65b0\u589e\u548c\u5220\u9664 partition\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u5982\u679c\u5728\u521b\u5efa Routine Load \u5bfc\u5165\u4f5c\u4e1a\u65f6\u4ec5\u6307\u5b9a Topic ",(0,s.jsx)(i.code,{children:"pulsar_topic"}),"\uff0c\u4f46\u662f\u6ca1\u6709\u6307\u5b9a partition ",(0,s.jsx)(i.code,{children:"pulsar_partitions"}),"\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(i.code,{children:"pulsar_default_initial_position"})," \u4fee\u6539 topic \u4e0b\u6240\u6709 partition \u7684\u8d77\u59cb position\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,n.ah)(),e.components);return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,i,r)=>{r.d(i,{Zo:()=>a,ah:()=>t});var s=r(67294);const n=s.createContext({});function t(e){const i=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const o={};function a({components:e,children:i,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||o:t(e),s.createElement(n.Provider,{value:a},i)}}}]);