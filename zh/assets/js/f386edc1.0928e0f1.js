"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9114],{91959:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var s=r(85893),c=r(11151);const t={displayed_sidebar:"Chinese"},o="\u4f7f\u7528 Kafka connector \u5bfc\u5165\u6570\u636e",a={id:"loading/Kafka-connector-starrocks",title:"\u4f7f\u7528 Kafka connector \u5bfc\u5165\u6570\u636e",description:"StarRocks \u63d0\u4f9b  Apache Kafka\xae  \u8fde\u63a5\u5668 (StarRocks Connector for Apache Kafka\xae)\uff0c\u6301\u7eed\u6d88\u8d39 Kafka \u7684\u6d88\u606f\u5e76\u5bfc\u5165\u81f3 StarRocks \u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/loading/Kafka-connector-starrocks.md",sourceDirName:"loading",slug:"/loading/Kafka-connector-starrocks",permalink:"/doc/zh/docs/2.5/loading/Kafka-connector-starrocks",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/Kafka-connector-starrocks.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Introduction",permalink:"/doc/zh/docs/2.5/loading/Json_loading"},next:{title:"\u901a\u8fc7\u5bfc\u5165\u5b9e\u73b0\u6570\u636e\u53d8\u66f4",permalink:"/doc/zh/docs/2.5/loading/Load_to_Primary_Key_tables"}},d={},i=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u51c6\u5907 Kafka \u73af\u5883",id:"\u51c6\u5907-kafka-\u73af\u5883",level:3},{value:"\u5b89\u88c5 Kafka connector",id:"\u5b89\u88c5-kafka-connector",level:3},{value:"\u521b\u5efa StarRocks \u8868",id:"\u521b\u5efa-starrocks-\u8868",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"<strong>\u53c2\u6570\u8bf4\u660e</strong>",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5bfc\u5165 Debezium CDC \u683c\u5f0f\u6570\u636e",id:"\u5bfc\u5165-debezium-cdc-\u683c\u5f0f\u6570\u636e",level:3}];function l(n){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",a:"a",blockquote:"blockquote",strong:"strong",ol:"ol",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u4f7f\u7528-kafka-connector-\u5bfc\u5165\u6570\u636e",children:"\u4f7f\u7528 Kafka connector \u5bfc\u5165\u6570\u636e"}),"\n",(0,s.jsx)(e.p,{children:"StarRocks \u63d0\u4f9b  Apache Kafka\xae  \u8fde\u63a5\u5668 (StarRocks Connector for Apache Kafka\xae)\uff0c\u6301\u7eed\u6d88\u8d39 Kafka \u7684\u6d88\u606f\u5e76\u5bfc\u5165\u81f3 StarRocks \u4e2d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 Kafka connector \u53ef\u4ee5\u66f4\u597d\u7684\u878d\u5165 Kafka \u751f\u6001\uff0cStarRocks \u53ef\u4ee5\u4e0e Kafka connect \u65e0\u7f1d\u5bf9\u63a5\u3002\u4e3a StarRocks \u51c6\u5b9e\u65f6\u63a5\u5165\u94fe\u8def\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u9009\u62e9\u3002\u76f8\u6bd4\u4e8e Routine Load\uff0c\u60a8\u53ef\u4ee5\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u4f18\u5148\u8003\u8651\u4f7f\u7528 Kafka connector \u5bfc\u5165\u6570\u636e\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u5bfc\u5165\u9664 CSV\u3001JSON\u3001Avro \u4ee5\u5916\u7684\u683c\u5f0f\u6570\u636e\uff0c\u4f8b\u5982 Protobuf \u683c\u5f0f\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u5bf9\u6570\u636e\u505a\u81ea\u5b9a\u4e49\u7684 transform \u64cd\u4f5c\uff0c\u4f8b\u5982 Debezium CDC \u683c\u5f0f\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4ece\u591a\u4e2a Kafka Topic \u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4ece Confluent cloud \u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u66f4\u7cbe\u7ec6\u5316\u7684\u63a7\u5236\u5bfc\u5165\u7684\u6279\u6b21\u5927\u5c0f\uff0c\u5e76\u884c\u5ea6\u7b49\u53c2\u6570\uff0c\u4ee5\u6c42\u8fbe\u5230\u5bfc\u5165\u901f\u7387\u548c\u8d44\u6e90\u4f7f\u7528\u4e4b\u95f4\u7684\u5e73\u8861\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsx)(e.h3,{id:"\u51c6\u5907-kafka-\u73af\u5883",children:"\u51c6\u5907 Kafka \u73af\u5883"}),"\n",(0,s.jsx)(e.p,{children:"\u652f\u6301\u81ea\u5efa Apache Kafka \u96c6\u7fa4\u548c Confluent cloud\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u4f7f\u7528\u81ea\u5efa Apache Kafka \u96c6\u7fa4\uff0c\u8bf7\u786e\u4fdd\u5df2\u90e8\u7f72 Apache Kafka \u96c6\u7fa4\u548c Kafka connect \u96c6\u7fa4\uff0c\u5e76\u521b\u5efa Topic\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u4f7f\u7528 Confluent cloud\uff0c\u8bf7\u786e\u4fdd\u5df2\u62e5\u6709 Confluent \u8d26\u53f7\uff0c\u5e76\u5df2\u7ecf\u521b\u5efa\u96c6\u7fa4\u548c Topic\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u88c5-kafka-connector",children:"\u5b89\u88c5 Kafka connector"}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5 Kafka connector \u81f3 Kafka connect\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u81ea\u5efa Kafka \u96c6\u7fa4"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e0b\u8f7d\u5e76\u89e3\u538b\u538b\u7f29\u5305 ",(0,s.jsx)(e.a,{href:"https://releases.starrocks.io/starrocks/starrocks-kafka-connector-1.0.0.tar.gz",children:"starrocks-kafka-connector-1.0.0.tar.gz"}),"\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u5c06\u89e3\u538b\u540e\u7684\u76ee\u5f55\u590d\u5236\u5230 Kafka \u7684 libs \u76ee\u5f55\u4e2d\uff0c\u91cd\u65b0\u542f\u52a8 Kafka connect \u4ee5\u8bfb\u53d6\u6700\u65b0\u7684 JAR \u6587\u4ef6\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Confluent cloud"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.p,{children:"Kafka connector \u76ee\u524d\u5c1a\u672a\u4e0a\u4f20\u5230 Confluent Hub\uff0c\u60a8\u9700\u8981\u5c06\u5176\u538b\u7f29\u5305\u4e0a\u4f20\u5230 Confluent cloud\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u521b\u5efa-starrocks-\u8868",children:"\u521b\u5efa StarRocks \u8868"}),"\n",(0,s.jsx)(e.p,{children:"\u60a8\u9700\u8981\u6839\u636e Kafka Topic \u4ee5\u53ca\u6570\u636e\u5728 StarRocks \u4e2d\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u4ee5\u81ea\u5efa Kafka \u96c6\u7fa4\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e Kafka connector \u5e76\u542f\u52a8 Kafka connect \uff0c\u5bfc\u5165\u6570\u636e\u81f3 StarRocks\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u521b\u5efa Kafka connector \u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(e.strong,{children:"connect-StarRocks-sink.properties"}),"\uff0c\u5e76\u914d\u7f6e\u5bf9\u5e94\u53c2\u6570\u3002\u53c2\u6570\u548c\u76f8\u5173\u8bf4\u660e\uff0c\u53c2\u89c1",(0,s.jsx)(e.a,{href:"#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Properties",children:"name=starrocks-kafka-connector\nconnector.class=com.starrocks.connector.kafka.StarRocksSinkConnector\ntopics=dbserver1.inventory.customers\nstarrocks.http.url=192.168.xxx.xxx:8030,192.168.xxx.xxx:8030\nstarrocks.username=root\nstarrocks.password=123456\nstarrocks.database.name=inventory\nkey.converter=io.confluent.connect.json.JsonSchemaConverter\nvalue.converter=io.confluent.connect.json.JsonSchemaConverter\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u6e90\u7aef\u6570\u636e\u4e3a CDC \u6570\u636e\uff0c\u4f8b\u5982 Debezium CDC \u683c\u5f0f\u7684\u6570\u636e\uff0c\u5e76\u4e14 StarRocks \u8868\u4e3a\u4e3b\u952e\u6a21\u578b\u7684\u8868\uff0c\u4e3a\u4e86\u5c06\u6e90\u7aef\u7684\u6570\u636e\u53d8\u66f4\u540c\u6b65\u81f3\u4e3b\u952e\u6a21\u578b\u7684\u8868\uff0c\u5219\u60a8\u8fd8\u9700\u8981",(0,s.jsxs)(e.a,{href:"#%E5%AF%BC%E5%85%A5-debezium-cdc-%E6%A0%BC%E5%BC%8F%E6%95%B0%E6%8D%AE",children:["\u914d\u7f6e ",(0,s.jsx)(e.code,{children:"transforms"})," \u4ee5\u53ca\u76f8\u5173\u53c2\u6570"]}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u542f\u52a8 Kafka Connect\u3002\u547d\u4ee4\u4e2d\u7684\u53c2\u6570\u89e3\u91ca\uff0c\u53c2\u89c1 ",(0,s.jsx)(e.a,{href:"https://kafka.apache.org/documentation.html#connect_running",children:"Running Kafka Connect"}),"\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Standalone \u6a21\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Shell",children:"bin/connect-standalone worker.properties connect-StarRocks-sink.properties [connector2.properties connector3.properties ...]\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5206\u5e03\u5f0f\u6a21\u5f0f"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.p,{children:"\u751f\u4ea7\u73af\u5883\u4e2d\u5efa\u8bae\u60a8\u4f7f\u7528\u5206\u5e03\u5f0f\u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 worker\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Shell",children:"bin/connect-distributed worker.properties\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff0c\u5206\u5e03\u5f0f\u6a21\u5f0f\u4e0d\u652f\u6301\u542f\u52a8\u65f6\u5728\u547d\u4ee4\u884c\u914d\u7f6e Kafka connector\u3002\u60a8\u9700\u8981\u901a\u8fc7\u8c03\u7528 REST API \u6765\u914d\u7f6e Kafka connector \u548c\u542f\u52a8 Kafka connect:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Shell",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"starrocks-kafka-connector",\n  "config":{\n    "connector.class":"com.starrocks.connector.kafka.SinkConnector",\n    "topics":"dbserver1.inventory.customers",\n    "starrocks.http.url":"192.168.xxx.xxx:8030,192.168.xxx.xxx:8030",\n    "starrocks.user":"root",\n    "starrocks.password":"123456",\n    "starrocks.database.name":"inventory",\n    "key.converter":"io.confluent.connect.json.JsonSchemaConverter",\n    "value.converter":"io.confluent.connect.json.JsonSchemaConverter"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2 StarRocks \u8868\u4e2d\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:(0,s.jsx)(e.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53c2\u6570"}),(0,s.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u8868\u793a\u5f53\u524d\u7684 Kafka connector\uff0c\u5728 Kafka connect \u96c6\u7fa4\u4e2d\u5fc5\u987b\u4e3a\u5168\u5c40\u552f\u4e00\uff0c\u4f8b\u5982 starrocks-kafka-connector\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"connector.class"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{children:"com.starrocks.connector.kafka.SinkConnector"}),(0,s.jsx)(e.td,{children:"kafka connector \u7684 sink \u4f7f\u7528\u7684\u7c7b\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"topics"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{}),(0,s.jsxs)(e.td,{children:["\u4e00\u4e2a\u6216\u591a\u4e2a\u5f85\u8ba2\u9605 Topic\uff0c\u6bcf\u4e2a Topic \u5bf9\u5e94\u4e00\u4e2a StarRocks \u8868\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b Topic \u7684\u540d\u79f0\u4e0e StarRocks \u8868\u540d\u4e00\u81f4\uff0c\u5bfc\u5165\u65f6\u6839\u636e Topic \u540d\u79f0\u786e\u5b9a\u76ee\u6807 StarRocks \u8868\u3002",(0,s.jsx)(e.code,{children:"topics"})," \u548c ",(0,s.jsx)(e.code,{children:"topics.regex"}),"\uff08\u5982\u4e0b\uff09 \u4e24\u8005\u4e8c\u9009\u4e00\u586b\u5199\u3002\u5982\u679c\u4e24\u8005\u4e0d\u4e00\u81f4\uff0c\u5219\u8fd8\u9700\u8981\u914d\u7f6e ",(0,s.jsx)(e.code,{children:"starrocks.topic2table.map"}),"\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"topics.regex"}),(0,s.jsx)(e.td,{}),(0,s.jsxs)(e.td,{children:["\u4e0e\u5f85\u8ba2\u9605 Topic \u5339\u914d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u66f4\u591a\u89e3\u91ca\uff0c\u540c ",(0,s.jsx)(e.code,{children:"topics"}),"\u3002",(0,s.jsx)(e.code,{children:"topics"})," \u548c ",(0,s.jsx)(e.code,{children:"topics.regex"})," \u548c ",(0,s.jsx)(e.code,{children:"topics"}),"\uff08\u5982\u4e0a\uff09\u4e24\u8005\u4e8c\u9009\u4e00\u586b\u5199\u3002"]}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"starrocks.topic2table.map"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{}),(0,s.jsxs)(e.td,{children:["\u5f53 Topic \u7684\u540d\u79f0\u4e0e StarRocks \u8868\u540d\u4e0d\u4e00\u81f4\u65f6\uff0c\u8be5\u914d\u7f6e\u9879\u53ef\u4ee5\u8bf4\u660e\u6620\u5c04\u5173\u7cfb\uff0c\u683c\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"<topic-1>:<table-1>,<topic-2>:<table-2>,..."}),"\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"starrocks.http.url"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{}),(0,s.jsxs)(e.td,{children:["FE \u7684 HTTP Server \u5730\u5740\u3002\u683c\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"<fe_host1>:<fe_http_port1>,<fe_host2>:<fe_http_port2>,..."}),"\u3002\u591a\u4e2a\u5730\u5740\uff0c\u4f7f\u7528\u82f1\u6587\u9017\u53f7 (,) \u5206\u9694\u3002\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:"192.168.xxx.xxx:8030,192.168.xxx.xxx:8030"}),"\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"starrocks.database.name"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"StarRocks \u76ee\u6807\u5e93\u540d\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"starrocks.username"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"StarRocks \u7528\u6237\u540d\u3002\u7528\u6237\u9700\u8981\u5177\u6709\u76ee\u6807\u8868\u7684 INSERT \u6743\u9650\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"starrocks.password"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"StarRocks \u7528\u6237\u5bc6\u7801\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"key.converter"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"Kafka connect \u96c6\u7fa4\u7684 key converter"}),(0,s.jsx)(e.td,{children:"sink connector (\u5728\u672c\u573a\u666f\u4e2d\u5373 Kafka-connector-starrocks) \u7684 key converter\uff0c\u7528\u4e8e\u53cd\u5e8f\u5217\u5316 Kafka \u6570\u636e\u7684 key\u3002\u9ed8\u8ba4\u4e3a Kafka connect \u96c6\u7fa4\u7684 key converter, \u60a8\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"value.converter"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"Kafka connect \u96c6\u7fa4\u7684 value converter"}),(0,s.jsx)(e.td,{children:"sink connector \u7684 value converter\uff0c\u7528\u4e8e\u53cd\u5e8f\u5217\u5316 Kafka \u6570\u636e\u7684 value\u3002\u9ed8\u8ba4\u4e3a Kafka connect \u96c6\u7fa4\u7684 value converter, \u60a8\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"key.converter.schema.registry.url"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"key converter \u5bf9\u5e94\u7684 schema registry \u5730\u5740\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"value.converter.schema.registry.url"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"value converter \u5bf9\u5e94\u7684 schema registry \u5730\u5740\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"tasks.max"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Kafka connector \u8981\u521b\u5efa\u7684 task \u7ebf\u7a0b\u6570\u91cf\u4e0a\u9650\uff0c\u901a\u5e38\u4e0e Kafka Connect \u96c6\u7fa4\u4e2d\u7684 worker \u8282\u70b9\u4e0a\u7684 CPU \u6838\u6570\u91cf\u76f8\u540c\u3002\u5982\u679c\u9700\u8981\u589e\u52a0\u5bfc\u5165\u6027\u80fd\u7684\u65f6\u5019\u53ef\u4ee5\u8c03\u6574\u8be5\u53c2\u6570\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"bufferflush.maxbytes"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"94371840(90M)"}),(0,s.jsx)(e.td,{children:"\u6570\u636e\u6512\u6279\u7684\u5927\u5c0f\uff0c\u8fbe\u5230\u8be5\u9608\u503c\u540e\u5c06\u6570\u636e\u901a\u8fc7 Stream Load \u6279\u91cf\u5199\u5165 StarRocks\u3002\u53d6\u503c\u8303\u56f4\uff1a[64MB, 10GB]\u3002 Stream Load SDK buffer\u53ef\u80fd\u4f1a\u542f\u52a8\u591a\u4e2a Stream Load \u6765\u7f13\u51b2\u6570\u636e\uff0c\u56e0\u6b64\u8fd9\u91cc\u7684\u9608\u503c\u662f\u6307\u603b\u6570\u636e\u91cf\u5927\u5c0f\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"bufferflush.intervalms"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"300000"}),(0,s.jsx)(e.td,{children:"\u6570\u636e\u6512\u6279\u53d1\u9001\u7684\u95f4\u9694\uff0c\u7528\u4e8e\u63a7\u5236\u6570\u636e\u5199\u5165 StarRocks \u7684\u5ef6\u8fdf\uff0c\u53d6\u503c\u8303\u56f4\uff1a[1000, 3600000]\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"connect.timeoutms"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"1000"}),(0,s.jsx)(e.td,{children:"\u8fde\u63a5 http-url \u7684\u8d85\u65f6\u65f6\u95f4\u3002\u53d6\u503c\u8303\u56f4\uff1a[100, 60000]\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sink.properties.*"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsxs)(e.td,{children:["\u6307\u5b9a Stream Load \u7684\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u5bfc\u5165\u884c\u4e3a\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"sink.properties.format"})," \u6307\u5b9a\u5bfc\u5165\u6570\u636e\u7684\u683c\u5f0f\u4e3a CSV \u6216\u8005 JSON\u3002\u66f4\u591a\u53c2\u6570\u548c\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(e.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"}),"\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sink.properties.format"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"json"}),(0,s.jsxs)(e.td,{children:["Stream Load \u5bfc\u5165\u65f6\u7684\u6570\u636e\u683c\u5f0f\u3002\u53d6\u503c\u4e3a CSV \u6216\u8005 JSON\u3002\u9ed8\u8ba4\u4e3aJSON\u3002\u66f4\u591a\u53c2\u6570\u8bf4\u660e\uff0c\u53c2\u89c1 ",(0,s.jsx)(e.a,{href:"../sql-reference/sql-statements/data-manipulation/STREAM_LOAD#csv-%E9%80%82%E7%94%A8%E5%8F%82%E6%95%B0",children:"CSV \u9002\u7528\u53c2\u6570"}),"\u548c ",(0,s.jsx)(e.a,{href:"../sql-reference/sql-statements/data-manipulation/STREAM_LOAD#json-%E9%80%82%E7%94%A8%E5%8F%82%E6%95%B0",children:"JSON \u9002\u7528\u53c2\u6570"}),"\u3002"]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e0d\u652f\u6301\u5c06 Kafka topic \u91cc\u7684\u4e00\u6761\u6d88\u606f\u5c55\u5f00\u6210\u591a\u6761\u5bfc\u5165\u5230 StarRocks\u3002"}),"\n",(0,s.jsx)(e.li,{children:"Kafka Connector \u7684 Sink \u4fdd\u8bc1 at-least-once \u8bed\u4e49\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsx)(e.h3,{id:"\u5bfc\u5165-debezium-cdc-\u683c\u5f0f\u6570\u636e",children:"\u5bfc\u5165 Debezium CDC \u683c\u5f0f\u6570\u636e"}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c Kafka \u6570\u636e\u4e3a Debezium CDC \u683c\u5f0f\uff0c\u5e76\u4e14 StarRocks \u8868\u4e3a\u4e3b\u952e\u6a21\u578b\u8868\uff0c\u5219\u5728 Kafka connector \u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(e.strong,{children:"connect-StarRocks-sink.properties"})," \u4e2d\u9664\u4e86",(0,s.jsx)(e.a,{href:"#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",children:"\u914d\u7f6e\u57fa\u7840\u53c2\u6570"}),"\u5916\uff0c\u8fd8\u9700\u8981\u914d\u7f6e ",(0,s.jsx)(e.code,{children:"transforms"})," \u4ee5\u53ca\u76f8\u5173\u53c2\u6570\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Properties",children:"transforms=addfield,unwrap\ntransforms.addfield.type=com.starrocks.connector.kafka.transforms.AddOpFieldForDebeziumRecord\ntransforms.unwrap.type=io.debezium.transforms.ExtractNewRecordState\ntransforms.unwrap.drop.tombstones=true\ntransforms.unwrap.delete.handling.mode=rewrite\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u4e0a\u8ff0\u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u6307\u5b9a ",(0,s.jsx)(e.code,{children:"transforms=addfield,unwrap"}),"\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["addfield transform \u7528\u4e8e\u5411 Debezium CDC \u683c\u5f0f\u6570\u636e\u7684\u6bcf\u4e2a\u8bb0\u5f55\u6dfb\u52a0\u4e00\u4e2a__op\u5b57\u6bb5\uff0c\u4ee5\u652f\u6301 ",(0,s.jsx)(e.a,{href:"/doc/zh/docs/2.5/table_design/table_types/primary_key_table",children:"\u4e3b\u952e\u6a21\u578b\u8868"}),"\uff0c\u3002\u5982\u679c StarRocks \u8868\u4e0d\u662f\u4e3b\u952e\u6a21\u578b\u8868\uff0c\u5219\u65e0\u9700\u6307\u5b9a addfield \u8f6c\u6362\u3002addfield transform \u7684\u7c7b\u662f com.Starrocks.Kafka.Transforms.AddOpFieldForDebeziumRecord\uff0c\u5df2\u7ecf\u5305\u542b\u5728 Kafka connector \u7684 JAR \u6587\u4ef6\u4e2d\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u5b89\u88c5\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["unwrap transform \u662f\u6307\u7531 Debezium \u63d0\u4f9b\u7684 unwrap\uff0c\u53ef\u4ee5\u6839\u636e\u64cd\u4f5c\u7c7b\u578b unwrap Debezium \u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,s.jsx)(e.a,{href:"https://debezium.io/documentation/reference/stable/transformations/event-flattening.html",children:"New Record State Extraction"}),"\u3002"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(l,n)})):l(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>a,ah:()=>t});var s=r(67294);const c=s.createContext({});function t(n){const e=s.useContext(c);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function a({components:n,children:e,disableParentContext:r}){let a;return a=r?"function"==typeof n?n({}):n||o:t(n),s.createElement(c.Provider,{value:a},e)}}}]);