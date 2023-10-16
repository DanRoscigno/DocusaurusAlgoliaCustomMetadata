"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89485],{78834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151);const s={displayed_sidebar:"English"},o="Load data using Kafka connector",c={id:"loading/Kafka-connector-starrocks",title:"Load data using Kafka connector",description:"StarRocks provides a self-developed connector named Apache Kafka\xae connector (StarRocks Connector for Apache Kafka\xae) that continuously consumes messages from Kafka and loads them into StarRocks. The Kafka connector guarantees at-least-once semantics.",source:"@site/versioned_docs/version-3.1/loading/Kafka-connector-starrocks.md",sourceDirName:"loading",slug:"/loading/Kafka-connector-starrocks",permalink:"/doc/docs/loading/Kafka-connector-starrocks",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/Kafka-connector-starrocks.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Load data from Apache Kafka",permalink:"/doc/docs/category/load-data-from-apache-kafka"},next:{title:"Continuously load data from Apache Kafka\xae",permalink:"/doc/docs/loading/RoutineLoad"}},i={},d=[{value:"Preparations",id:"preparations",level:2},{value:"Set up Kafka environment",id:"set-up-kafka-environment",level:3},{value:"Install Kafka connector",id:"install-kafka-connector",level:3},{value:"Create StarRocks table",id:"create-starrocks-table",level:3},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Limits",id:"limits",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Load Debezium-formatted CDC data",id:"load-debezium-formatted-cdc-data",level:3}];function l(e){const t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",a:"a",blockquote:"blockquote",strong:"strong",ol:"ol",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"load-data-using-kafka-connector",children:"Load data using Kafka connector"}),"\n",(0,r.jsx)(t.p,{children:"StarRocks provides a self-developed connector named Apache Kafka\xae connector (StarRocks Connector for Apache Kafka\xae) that continuously consumes messages from Kafka and loads them into StarRocks. The Kafka connector guarantees at-least-once semantics."}),"\n",(0,r.jsx)(t.p,{children:"The Kafka connector can seamlessly integrate with Kafka Connect, which allows StarRocks better integrated with the Kafka ecosystem. It is a wise choice if you want to load real-time data into StarRocks. Compared with Routine Load, it is recommended to use the Kafka connector in the following scenarios:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The format of source data is, for example, Protobuf, not JSON, CSV, or Avro."}),"\n",(0,r.jsx)(t.li,{children:"Customize data transformation, such as Debezium-formatted CDC data."}),"\n",(0,r.jsx)(t.li,{children:"Load data from multiple Kafka topics."}),"\n",(0,r.jsx)(t.li,{children:"Load data from Confluent cloud."}),"\n",(0,r.jsx)(t.li,{children:"Need finer control over load batch sizes, parallelism, and other parameters to achieve a balance between load speed and resource utilization."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"preparations",children:"Preparations"}),"\n",(0,r.jsx)(t.h3,{id:"set-up-kafka-environment",children:"Set up Kafka environment"}),"\n",(0,r.jsx)(t.p,{children:"Both self-managed Apache Kafka clusters and Confluent cloud are supported."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"For a self-managed Apache Kafka cluster, make sure that you deploy the Apache Kafka cluster and Kafka Connect cluster and create topics."}),"\n",(0,r.jsx)(t.li,{children:"For Confluent cloud, make sure that you have a Confluent account and create clusters and topics."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"install-kafka-connector",children:"Install Kafka connector"}),"\n",(0,r.jsx)(t.p,{children:"Submit the Kafka connector into Kafka Connect:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Self-managed Kafka cluster:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Download and unzip ",(0,r.jsx)(t.a,{href:"https://releases.starrocks.io/starrocks/starrocks-kafka-connector-1.0.0.tar.gz",children:"starrocks-kafka-connector-1.0.0.tar.gz"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Copy the extracted directory to the libs directory of Kafka. Restart Kafka Connect to read the latest JAR files."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Confluent cloud:"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(t.p,{children:"The Kafka connector is not currently uploaded to Confluent Hub. You need to upload the compressed file to Confluent cloud."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"create-starrocks-table",children:"Create StarRocks table"}),"\n",(0,r.jsx)(t.p,{children:"Create a table or tables in StarRocks according to Kafka Topics and data."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"The following steps take a self-managed Kafka cluster as an example to demonstrate how to configure the Kafka connector and start the Kafka connect in order to load data into StarRocks."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a Kafka connector configuration file named ",(0,r.jsx)(t.strong,{children:"connect-StarRocks-sink.properties"})," and configure the  parameters. For detailed information about parameters, see ",(0,r.jsx)(t.a,{href:"#parameters",children:"Parameters"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Properties",children:"name=starrocks-kafka-connector\nconnector.class=com.starrocks.connector.kafka.StarRocksSinkConnector\ntopics=dbserver1.inventory.customers\nstarrocks.http.url=192.168.xxx.xxx:8030,192.168.xxx.xxx:8030\nstarrocks.username=root\nstarrocks.password=123456\nstarrocks.database.name=inventory\nkey.converter=io.confluent.connect.json.JsonSchemaConverter\nvalue.converter=io.confluent.connect.json.JsonSchemaConverter\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,r.jsxs)(t.p,{children:["If the source data is CDC data, such as data in Debezium format, and the StarRocks table is a Primary Key table, you also need to ",(0,r.jsxs)(t.a,{href:"#load-debezium-formatted-cdc-data",children:["configure ",(0,r.jsx)(t.code,{children:"transform"})]})," in order to synchronize the source data changes to the Primary Key table."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run the Kafka Connector. For parameters and description in the following command, see ",(0,r.jsx)(t.a,{href:"https://kafka.apache.org/documentation.html#connect_running",children:"Kafka Documentation"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Standalone mode"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"bin/connect-standalone worker.properties connect-StarRocks-sink.properties [connector2.properties connector3.properties ...]\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Distributed mode"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(t.p,{children:"It is recommended to use the distributed mode in the production environment."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start the worker."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"bin/connect-distributed worker.properties\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Note that in distributed mode the connector configurations are not passed on the command line. Instead, use the REST API described below to configure the Kafka connector and run the Kafka connect."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Shell",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n"name":"starrocks-kafka-connector",\n"config":{\n    "connector.class":"com.starrocks.connector.kafka.SinkConnector",\n    "topics":"dbserver1.inventory.customers",\n    "starrocks.http.url":"192.168.xxx.xxx:8030,192.168.xxx.xxx:8030",\n    "starrocks.user":"root",\n    "starrocks.password":"123456",\n    "starrocks.database.name":"inventory",\n    "key.converter":"io.confluent.connect.json.JsonSchemaConverter",\n    "value.converter":"io.confluent.connect.json.JsonSchemaConverter"\n}\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Query data in the StarRocks table."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Name for this Kafka connector. It must be globally unique among all Kafka connectors within this Kafka connect cluster. For example, starrocks-kafka-connector."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"connector.class"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{children:"com.starrocks.connector.kafka.SinkConnector"}),(0,r.jsx)(t.td,{children:"Class used by this Kafka connector's sink."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"topics"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["One or more topics to subscribe to, where each topic corresponds to a StarRocks table. By default, StarRocks assumes that the topic name matches the name of the StarRocks table. So StarRocks determines the target StarRocks table by using the topic name. Please choose either to fill in ",(0,r.jsx)(t.code,{children:"topics"})," or ",(0,r.jsx)(t.code,{children:"topics.regex"})," (below), but not both.However, if the StarRocks table name is not the same as the topic name, then use the optional ",(0,r.jsx)(t.code,{children:"starrocks.topic2table.map"})," parameter (below) to specify the mapping from topic name to table name."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"topics.regex"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Regular expression to match the one or more topics to subscribe to. For more description, see ",(0,r.jsx)(t.code,{children:"topics"}),". Please choose either to fill in  ",(0,r.jsx)(t.code,{children:"topics.regex"}),"or ",(0,r.jsx)(t.code,{children:"topics"})," (above), but not both."]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"starrocks.topic2table.map"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["The mapping of the StarRocks table name and the topic name when the topic name is different from the StarRocks table name. The format is ",(0,r.jsx)(t.code,{children:"<topic-1>:<table-1>,<topic-2>:<table-2>,..."}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"starrocks.http.url"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["The HTTP URL of the FE in your StarRocks cluster. The format is ",(0,r.jsx)(t.code,{children:"<fe_host1>:<fe_http_port1>,<fe_host2>:<fe_http_port2>,..."}),". Multiple addresses are separated by commas (,). For example, ",(0,r.jsx)(t.code,{children:"192.168.xxx.xxx:8030,192.168.xxx.xxx:8030"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"starrocks.database.name"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The name of StarRocks database."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"starrocks.username"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["The username of your StarRocks cluster account. The user needs the ",(0,r.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"INSERT"})," privilege on the StarRocks table."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"starrocks.password"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The password of your StarRocks cluster account."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key.converter"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"In this scenario, the Kafka connector provided by StarRocks is a sink connector. This parameter specifies the key converter for the sink connector, which is used to deserialize the keys of Kafka data. You need to determine the value of this parameter based on the key converter used by the source connector."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value.converter"}),(0,r.jsx)(t.td,{children:"YES"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"This parameter specifies the value converter for the sink connector, which is used to deserialize the values of Kafka data. You need to determine the value of this parameter based on the value converter used by the source connector."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key.converter.schema.registry.url"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Schema registry URL for the key converter."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value.converter.schema.registry.url"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Schema registry URL for the value converter."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tasks.max"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"The upper limit for the number of task threads that the Kafka connector can create, which is usually the same as the number of CPU cores on the worker nodes in the Kafka Connect cluster. You can tune this parameter to control load performance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bufferflush.maxbytes"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{children:"94371840(90M)"}),(0,r.jsx)(t.td,{children:"The maximum size of data that can be accumulated in memory before being sent to StarRocks at a time. The maximum value ranges from 64 MB to 10 GB. Keep in mind that the Stream Load SDK buffer may create multiple Stream Load jobs to buffer data. Therefore, the threshold mentioned here refers to the total data size."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bufferflush.intervalms"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{children:"300000"}),(0,r.jsx)(t.td,{children:"Interval for sending a batch of data which controls the load latency. Range: [1000, 3600000]."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"connect.timeoutms"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"Timeout for connecting to the HTTP URL. Range: [100, 60000]."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sink.properties.*"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Stream Load parameters o control load behavior. For example, the parameter ",(0,r.jsx)(t.code,{children:"sink.properties.format"})," specifies the format used for Stream Load, such as CSV or JSON. For a list of supported parameters and their descriptions, see [STREAM LOAD](../sql-reference/sql-statements/data-manipulation/STREAM LOAD.md)."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sink.properties.format"}),(0,r.jsx)(t.td,{children:"NO"}),(0,r.jsx)(t.td,{children:"json"}),(0,r.jsxs)(t.td,{children:["The format used for Stream Load. The Kafka connector will transform each batch of data to the format before sending them to StarRocks. Valid values: ",(0,r.jsx)(t.code,{children:"csv"})," and ",(0,r.jsx)(t.code,{children:"json"}),". For more information, see ",(0,r.jsx)(t.a,{href:"../sql-reference/sql-statements/data-manipulation/STREAM_LOAD#csv-parameters",children:"CSV parameters**"}),"\u548c** ",(0,r.jsx)(t.a,{href:"../sql-reference/sql-statements/data-manipulation/STREAM_LOAD#json-parameters",children:"JSON parameters"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"limits",children:"Limits"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"It is not supported to flatten a single message from a Kafka topic into multiple data rows and load into StarRocks."}),"\n",(0,r.jsx)(t.li,{children:"The Kafka Connector's Sink guarantees at-least-once semantics."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,r.jsx)(t.h3,{id:"load-debezium-formatted-cdc-data",children:"Load Debezium-formatted CDC data"}),"\n",(0,r.jsxs)(t.p,{children:["If the Kafka data is in Debezium CDC format and the StarRocks table is a Primary Key table, you also need to configure the ",(0,r.jsx)(t.code,{children:"transforms"})," parameter and other related parameters."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Properties",children:"transforms=addfield,unwrap\ntransforms.addfield.type=com.starrocks.connector.kafka.transforms.AddOpFieldForDebeziumRecord\ntransforms.unwrap.type=io.debezium.transforms.ExtractNewRecordState\ntransforms.unwrap.drop.tombstones=true\ntransforms.unwrap.delete.handling.mode\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the above configurations, we specify ",(0,r.jsx)(t.code,{children:"transforms=addfield,unwrap"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The addfield transform is used to add the __op field to each record of Debezium CDC-formatted data to support the StarRocks primary key model table. If the StarRocks table is not a Primary Key table, you do not need to specify the addfield transform. The addfield transform class is com.Starrocks.Kafka.Transforms.AddOpFieldForDebeziumRecord. It is included in the Kafka connector JAR file, so you do not need to manually install it."}),"\n",(0,r.jsxs)(t.li,{children:["The unwrap transform is provided by Debezium and is used to unwrap Debezium's complex data structure based on the operation type. For more information, see ",(0,r.jsx)(t.a,{href:"https://debezium.io/documentation/reference/stable/transformations/event-flattening.html",children:"New Record State Extraction"}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var r=n(67294);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(a.Provider,{value:c},t)}}}]);