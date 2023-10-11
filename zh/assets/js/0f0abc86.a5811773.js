"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39017],{70004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=s(85893),l=s(11151);const d={},c="ALTER SYSTEM",i={id:"sql-reference/sql-statements/Administration/ALTER SYSTEM",title:"ALTER SYSTEM",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/Administration/ALTER SYSTEM.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER SYSTEM",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ALTER SYSTEM",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ALTER SYSTEM.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"ALTER RESOURCE GROUP",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ALTER RESOURCE GROUP"},next:{title:"CANCEL DECOMMISSION",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/CANCEL DECOMMISSION"}},t={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e",id:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3},{value:"Broker",id:"broker",level:3},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",div:"div",a:"a"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-system",children:"ALTER SYSTEM"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u7ba1\u7406 StarRocks \u96c6\u7fa4\u4e2d\u7684 FE\u3001BE \u548c Broker\u3002\u4ec5 root \u7528\u6237\u6709\u6743\u9650\u4f7f\u7528\u8be5\u8bed\u53e5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e",children:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsx)(n.h3,{id:"fe",children:"FE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0 Follower FE\u3002\u6dfb\u52a0\u540e\uff0c\u53ef\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SHOW PROC '/frontends'\\G"})," \u547d\u4ee4\u67e5\u770b\u65b0\u589eFE \u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:' ALTER SYSTEM ADD FOLLOWER "host:edit_log_port"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5220\u9664 Follower FE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP FOLLOWER "host:edit_log_port"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0 Observer FE\u3002\u6dfb\u52a0\u540e\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"SHOW PROC '/frontends'\\G"})," \u547d\u4ee4\u67e5\u770b\u65b0\u589eFE \u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD OBSERVER "host:edit_log_port"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5220\u9664 Observer FE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP OBSERVER "host:edit_log_port"[, ...]\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["host",(0,r.jsx)(n.div,{})]}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"host"}),"\uff1aFE \u673a\u5668\u7684\u4e3b\u673a\u540d\u6216 IP \u5730\u5740\u3002\u5982\u679c\u673a\u5668\u5b58\u5728\u591a\u4e2a IP \u5730\u5740\uff0c\u5219\u8be5\u53c2\u6570\u53d6\u503c\u5e94\u4e3a ",(0,r.jsx)(n.code,{children:"priority_networks"})," \u914d\u7f6e\u9879\u4e0b\u8bbe\u5b9a\u7684\u552f\u4e00\u901a\u4fe1 IP \u5730\u5740\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"edit_log_port"}),"\uff1aFE \u4e0a\u7684 BDBJE \u901a\u4fe1\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"9010"}),"\u3002"]})]})})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa image\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER SYSTEM CREATE IMAGE\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u8be5\u8bed\u53e5\u4f1a\u4e3b\u52a8\u89e6\u53d1 Leader FE \u521b\u5efa\u65b0\u7684 Image\uff08\u5143\u6570\u636e\u5feb\u7167\uff09\u6587\u4ef6\u3002\u8be5\u64cd\u4f5c\u5f02\u6b65\u6267\u884c\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b FE \u65e5\u5fd7\u6587\u4ef6 ",(0,r.jsx)(n.strong,{children:"fe.log"})," \u786e\u8ba4\u64cd\u4f5c\u4f55\u65f6\u5f00\u59cb\u6267\u884c\u53ca\u7ed3\u675f\u3002",(0,r.jsx)(n.code,{children:"triggering a new checkpoint manually..."})," \u8868\u660e\u64cd\u4f5c\u5f00\u59cb\u6267\u884c\uff0c",(0,r.jsx)(n.code,{children:"finished save image..."})," \u5219\u8868\u660e Image \u521b\u5efa\u5b8c\u6210\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"be",children:"BE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0 BE\u3002 \u6dfb\u52a0\u540e\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW%20BACKENDS",children:"SHOW BACKENDS"})," \u67e5\u770b\u65b0\u589e BE \u7684\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BACKEND "host:heartbeat_service_port"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5220\u9664 BE\u3002\u5982\u679c\u6709\u8868\u662f\u5355\u526f\u672c\u4e14\u8be5\u8868\u7684\u90e8\u5206 tablet \u5206\u5e03\u5728\u8981\u5220\u9664\u7684 BE \u4e0a\uff0c\u5219\u4e0d\u5141\u8bb8\u5220\u9664\u8be5 BE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BACKEND "host:heartbeat_service_port"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0b\u7ebf BE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DECOMMISSION BACKEND "host:heartbeat_service_port"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u7ebf\u524d\uff0c\u8be5 BE \u4e0a\u7684\u6570\u636e\u4f1a\u8fc1\u79fb\u5230\u5176\u4ed6 BE \u4e0a\uff0c\u8fc7\u7a0b\u4e2d\u4e0d\u5f71\u54cd\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2\u3002\u4e0b\u7ebf BE \u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW%20BACKENDS",children:"SHOW BACKENDS"})," \u8bed\u53e5\u67e5\u770b\u662f\u5426\u4e0b\u7ebf\u6210\u529f\uff0c\u5982\u4e0b\u7ebf\u6210\u529f\uff0c\u8be5 BE \u4e0d\u4f1a\u5728 SHOW BACKENDS \u8fd4\u56de\u7684\u4fe1\u606f\u4e2d\u663e\u793a\u3002\u60a8\u53ef\u4ee5\u624b\u52a8\u64a4\u9500\u4e0b\u7ebf\u64cd\u4f5c\uff0c\u8be6\u60c5\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/CANCEL%20DECOMMISSION",children:"CANCEL DECOMMISSION"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["host",(0,r.jsx)(n.div,{})]}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[" ",(0,r.jsx)(n.code,{children:"host"}),"\uff1aBE \u673a\u5668\u7684\u4e3b\u673a\u540d\u6216 IP \u5730\u5740\u3002\u5982\u679c\u673a\u5668\u5b58\u5728\u591a\u4e2a IP \u5730\u5740\uff0c\u5219\u8be5\u53c2\u6570\u53d6\u503c\u5e94\u4e3a ",(0,r.jsx)(n.code,{children:"priority_networks"})," \u914d\u7f6e\u9879\u4e0b\u8bbe\u5b9a\u7684\u552f\u4e00\u901a\u4fe1 IP \u5730\u5740\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"heartbeat_service_port"}),"\uff1aBE \u7684\u5fc3\u8df3\u7aef\u53e3\uff0c\u7528\u4e8e\u63a5\u6536\u6765\u81ea FE \u7684\u5fc3\u8df3\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"9050"}),"\u3002"]})]})})]})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"broker",children:"Broker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0 Broker\u3002\u6dfb\u52a0\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Broker Load \u5c06 HDFS \u6216\u5916\u90e8\u4e91\u5b58\u50a8\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u4e2d\u3002\u8be6\u60c5\u53c2\u89c1",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/BrokerLoad",children:"\u4ece HDFS \u6216\u5916\u90e8\u4e91\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\u6570\u636e"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BROKER broker_name "host:port"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e00\u6761 SQL \u8bed\u53e5\u4e2d\uff0c\u5982\u540c\u65f6\u6dfb\u52a0\u591a\u4e2a Broker\uff08\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"host:port"}),"\u4e3a\u4e00\u4e2a Broker\uff09\uff0c\u90a3\u4e48\u8fd9\u4e9b Broker \u5171\u7528\u540c\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"broker_name"}),"\u3002\u6dfb\u52a0\u540e\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW%20BROKER",children:"SHOW BROKER"})," \u8bed\u53e5\u67e5\u770b Broker \u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5220\u9664 Broker\u3002\u6ce8\u610f\u5982\u4e00\u4e2a Broker \u4e0a\u6709\u6b63\u5728\u6267\u884c\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u90a3\u4e48\u5220\u9664\u8be5 Broker \u4f1a\u5bfc\u81f4\u8be5\u4efb\u52a1\u4e2d\u65ad\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5220\u9664 ",(0,r.jsx)(n.code,{children:"broker_name"})," \u4e0b\u7684\u4e00\u4e2a\u6216\u591a\u4e2a Broker\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BROKER broker_name "host:broker_ipc_port"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5220\u9664\u6240\u6709\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"broker_name"})," \u4e0b\u7684 Broker\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER SYSTEM DROP ALL BROKER broker_name\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"broker_name"}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a Broker \u7684\u540d\u79f0\u6216\u591a\u4e2a Broker \u5171\u7528\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["host",(0,r.jsx)(n.div,{})]}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"host"}),"\uff1aBroker \u673a\u5668\u7684\u4e3b\u673a\u540d\u6216 IP \u5730\u5740\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"broker_ipc_port"}),"\uff1aBroker \u4e0a\u7684 thrift server \u7aef\u53e3\uff0c\u7528\u4e8e\u63a5\u53d7 FE \u6216 BE \u7684\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"8000"}),"\u3002"]})]})})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u548c\u5220\u9664 FE\u3001\u6dfb\u52a0\u548c\u5220\u9664 BE \u4ee5\u53ca\u6dfb\u52a0\u548c\u5220\u9664 Broker \u5747\u4e3a\u540c\u6b65\u64cd\u4f5c\u3002\u6267\u884c\u5220\u9664\u8bed\u53e5\u540e\uff0cFE\u3001BE \u6216 Broker \u4f1a\u76f4\u63a5\u5220\u9664\uff0c\u4e0d\u53ef\u624b\u52a8\u64a4\u9500\u8be5\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u6dfb\u52a0\u4e00\u4e2a Follower FE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD FOLLOWER "x.x.x.x:9010";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u540c\u65f6\u5220\u9664\u4e24\u4e2a Observer FE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP OBSERVER "x.x.x.x:9010","x.x.x.x:9010";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u6dfb\u52a0\u4e00\u4e2a BE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BACKEND "x.x.x.x:9050";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u540c\u65f6\u5220\u9664\u4e24\u4e2a BE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BACKEND "x.x.x.x:9050", "x.x.x.x:9050";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e94\uff1a\u540c\u65f6\u4e0b\u7ebf\u4e24\u4e2a BE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DECOMMISSION BACKEND "x.x.x.x:9050", "x.x.x.x:9050";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u516d\uff1a\u540c\u65f6\u6dfb\u52a0\u4e24\u4e2a\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"hdfs"})," \u7684 Broker\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BROKER hdfs "x.x.x.x:8000", "x.x.x.x:8000";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u4e03\uff1a\u5220\u9664 ",(0,r.jsx)(n.code,{children:"amazon_s3"})," \u4e0b\u7684\u4e24\u4e2a Broker\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BROKER amazon_s3 "x.x.x.x:8000", "x.x.x.x:8000";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u516b\uff1a\u5220\u9664 ",(0,r.jsx)(n.code,{children:"amazon_s3"})," \u4e0b\u7684\u6240\u6709 Broker\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER SYSTEM DROP ALL BROKER amazon_s3;\n"})})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>d});var r=s(67294);const l=r.createContext({});function d(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:d(e),r.createElement(l.Provider,{value:i},n)}}}]);