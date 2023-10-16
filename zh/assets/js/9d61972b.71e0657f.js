"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33228],{1285:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var d=s(85893),t=s(11151);const l={displayed_sidebar:"Chinese"},i="SHOW TABLET",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_TABLET",title:"SHOW TABLET",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLET.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_TABLET.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW TABLES",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLES"},next:{title:"SHOW TRANSACTION",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION"}},c={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u67d0\u4e2a\u5206\u533a\u5185\u6240\u6709 Tablet \u7684\u4fe1\u606f",id:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u67d0\u4e2a\u5206\u533a\u5185\u6240\u6709-tablet-\u7684\u4fe1\u606f",level:3},{value:"\u67e5\u770b\u5355\u4e2a Tablet \u7684\u4fe1\u606f",id:"\u67e5\u770b\u5355\u4e2a-tablet-\u7684\u4fe1\u606f",level:3},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u5206\u533a\u5185\u7684\u6240\u6709 tablet",id:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u5206\u533a\u5185\u7684\u6240\u6709-tablet",level:3},{value:"\u67e5\u770b\u5355\u4e2a tablet",id:"\u67e5\u770b\u5355\u4e2a-tablet",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"show-tablet",children:"SHOW TABLET"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b Tablet \u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0c\u8be5\u64cd\u4f5c\u9700\u8981 SYSTEM \u7ea7 OPERATE \u6743\u9650\uff0c\u4ee5\u53ca\u5bf9\u5e94\u8868\u7684 SELECT \u6743\u9650\u30022.5 \u53ca\u4e4b\u524d\u7248\u672c\uff0c\u8be5\u64cd\u4f5c\u9700\u8981 ADMIN_PRIV \u6743\u9650\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.h3,{id:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u67d0\u4e2a\u5206\u533a\u5185\u6240\u6709-tablet-\u7684\u4fe1\u606f",children:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u67d0\u4e2a\u5206\u533a\u5185\u6240\u6709 Tablet \u7684\u4fe1\u606f"}),"\n",(0,d.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a WHERE \u5b50\u53e5\u6765\u8fc7\u6ee4\u7b26\u5408\u6761\u4ef6\u7684 Tablet\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'SHOW TABLET\nFROM [<db_name>.]<table_name>\n[PARTITION(<partition_name>, ...]\n[\nWHERE\n    [version = <version_number>] \n    [[AND] backendid = <backend_id>] \n    [[AND] STATE = "NORMAL"|"ALTER"|"CLONE"|"DECOMMISSION"]\n]\n[ORDER BY <field_name> [ASC | DESC]]\n[LIMIT [<offset>,]<limit>]\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"db_name"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u6570\u636e\u5e93\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"table_name"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u8868\u540d\u3002\u5fc5\u987b\u6307\u5b9a\uff0c\u5426\u5219\u62a5\u9519\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"partition_name"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u5206\u533a\u540d\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"version_number"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u7248\u672c\u53f7\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"backend_id"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"Tablet \u526f\u672c\u6240\u5728\u7684 BE \u7684 ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"STATE"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsxs)(n.td,{children:["Tablet \u526f\u672c\u7684\u72b6\u6001\u3002",(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[(0,d.jsx)(n.code,{children:"NORMAL"}),"\uff1a\u526f\u672c\u5904\u4e8e\u6b63\u5e38\u72b6\u6001\u3002"]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(n.code,{children:"ALTER"}),"\uff1a\u526f\u672c\u6b63\u5728\u505a Rollup \u6216 schema change\u3002"]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(n.code,{children:"CLONE"}),"\uff1a\u526f\u672c\u5904\u4e8e clone \u72b6\u6001\uff08\u672a\u5b8c\u6210 clone \u7684\u526f\u672c\u6682\u4e0d\u53ef\u7528\uff09\u3002"]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(n.code,{children:"DECOMMISSION"}),"\uff1a\u526f\u672c\u5904\u4e8e DECOMMISSION \u72b6\u6001\uff08\u4e0b\u7ebf\uff09\u3002"]})]})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"field_name"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsxs)(n.td,{children:["\u5c06\u8fd4\u56de\u7ed3\u679c\u6309\u7167\u6307\u5b9a\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u6392\u5217\u3002",(0,d.jsx)(n.code,{children:"SHOW TABLET FROM <table_name>"})," \u8fd4\u56de\u7684\u5b57\u6bb5\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u6392\u5e8f\u5b57\u6bb5\u3002",(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["\u5982\u8981\u5347\u5e8f\u6392\u5217\uff0c\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"ORDER BY field_name ASC"}),"\u3002"]}),(0,d.jsxs)("li",{children:["\u5982\u8981\u964d\u5e8f\u6392\u5217\uff0c\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"ORDER BY field_name DESC"}),"\u3002"]})]})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"offset"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsxs)(n.td,{children:["\u8fd4\u56de\u7ed3\u679c\u4e2d\u8df3\u8fc7\u7684 Tablet \u7684\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"OFFSET 5"})," \u8868\u793a\u8df3\u8fc7\u524d 5 \u4e2a Tablet\uff0c\u8fd4\u56de\u5269\u4e0b\u7684\u7ed3\u679c\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"limit"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsxs)(n.td,{children:["\u67e5\u770b\u6307\u5b9a\u6570\u91cf\u7684 Tablet\u3002\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"LIMIT 10"})," \u4f1a\u663e\u793a 10 \u4e2a Tablet \u7684\u4fe1\u606f\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u663e\u793a\u6240\u6709\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684 Tablet\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u67e5\u770b\u5355\u4e2a-tablet-\u7684\u4fe1\u606f",children:"\u67e5\u770b\u5355\u4e2a Tablet \u7684\u4fe1\u606f"}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"SHOW TABLET FROM <table_name>"})," \u83b7\u53d6\u4e86\u6240\u6709 Tablet ID \u540e\uff0c\u60a8\u53ef\u4ee5\u53ea\u67e5\u8be2\u67d0\u4e2a Tablet \u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET <tablet_id>\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tablet_id"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"Tablet \u7684 ID"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,d.jsx)(n.h3,{id:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u5206\u533a\u5185\u7684\u6240\u6709-tablet",children:"\u67e5\u770b\u67d0\u5f20\u8868\u6216\u5206\u533a\u5185\u7684\u6240\u6709 tablet"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plain",children:"+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+------------------+--------------+----------+----------+-------------------+\n| TabletId | ReplicaId | BackendId | SchemaHash | Version | VersionHash | LstSuccessVersion | LstSuccessVersionHash | LstFailedVersion | LstFailedVersionHash | LstFailedTime | DataSize | RowCount | State  | LstConsistencyCheckTime | CheckVersion | CheckVersionHash | VersionCount | PathHash | MetaUrl  | CompactionStatus  |\n+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+------------------+--------------+----------+----------+-------------------+\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5b57\u6bb5"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"TabletId"}),(0,d.jsx)(n.td,{children:"Table \u7684 ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ReplicaId"}),(0,d.jsx)(n.td,{children:"\u526f\u672c ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BackendId"}),(0,d.jsx)(n.td,{children:"\u526f\u672c\u6240\u5728\u7684 BE \u7684 ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SchemaHash"}),(0,d.jsx)(n.td,{children:"Schema hash\uff08\u968f\u673a\u751f\u6210\uff09\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Version"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u7248\u672c\u53f7\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"VersionHash"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u7248\u672c\u53f7\u7684 hash\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LstSuccessVersion"}),(0,d.jsx)(n.td,{children:"\u6700\u540e\u4e00\u6b21 load \u6210\u529f\u7684\u7248\u672c\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LstSuccessVersionHash"}),(0,d.jsx)(n.td,{children:"\u6700\u540e\u4e00\u6b21 load \u6210\u529f\u7684\u7248\u672c\u7684 hash\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LstFailedVersion"}),(0,d.jsxs)(n.td,{children:["\u6700\u540e\u4e00\u6b21 load \u5931\u8d25\u7684\u7248\u672c\u3002",(0,d.jsx)(n.code,{children:"-1"})," \u8868\u793a\u4e0d\u5b58\u5728\u5931\u8d25\u7684\u7248\u672c\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LstFailedVersionHash"}),(0,d.jsx)(n.td,{children:"\u6700\u540e\u4e00\u6b21 load \u5931\u8d25\u7684\u7248\u672c\u7684 hash\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LstFailedTime"}),(0,d.jsxs)(n.td,{children:["\u6700\u540e\u4e00\u6b21 load \u5931\u8d25\u7684\u65f6\u95f4\u3002",(0,d.jsx)(n.code,{children:"NULL"})," \u8868\u793a\u6ca1\u6709\u5931\u8d25\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DataSize"}),(0,d.jsx)(n.td,{children:"\u8be5 Tablet \u4e0a\u7684\u6570\u636e\u5927\u5c0f\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"RowCount"}),(0,d.jsx)(n.td,{children:"\u8be5 Tablet \u4e0a\u7684\u6570\u636e\u884c\u6570\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"State"}),(0,d.jsx)(n.td,{children:"Tablet \u7684\u526f\u672c\u72b6\u6001\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LstConsistencyCheckTime"}),(0,d.jsxs)(n.td,{children:["\u6700\u540e\u4e00\u6b21\u4e00\u81f4\u6027\u68c0\u67e5\u7684\u65f6\u95f4\u3002",(0,d.jsx)(n.code,{children:"NULL"})," \u8868\u793a\u6ca1\u6709\u8fdb\u884c\u4e00\u81f4\u6027\u68c0\u67e5."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CheckVersion"}),(0,d.jsxs)(n.td,{children:["\u4e00\u81f4\u6027\u68c0\u67e5\u7684\u7248\u672c\u3002",(0,d.jsx)(n.code,{children:"-1"})," \u8868\u793a\u4e0d\u5b58\u5728\u68c0\u67e5\u7248\u672c\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CheckVersionHash"}),(0,d.jsx)(n.td,{children:"\u4e00\u81f4\u6027\u68c0\u67e5\u7684\u7248\u672c\u7684 hash\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"VersionCount"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u7248\u672c\u6570\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PathHash"}),(0,d.jsx)(n.td,{children:"Tablet \u5b58\u50a8\u76ee\u5f55\u7684 hash\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MetaUrl"}),(0,d.jsx)(n.td,{children:"\u901a\u8fc7 URL \u67e5\u8be2\u66f4\u591a\u7684 meta \u4fe1\u606f\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CompactionStatus"}),(0,d.jsx)(n.td,{children:"\u901a\u8fc7 URL \u67e5\u8be2 Compaction \u72b6\u6001\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u67e5\u770b\u5355\u4e2a-tablet",children:"\u67e5\u770b\u5355\u4e2a tablet"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"+--------+-----------+---------------+-----------+------+---------+-------------+---------+--------+-----------+\n| DbName | TableName | PartitionName | IndexName | DbId | TableId | PartitionId | IndexId | IsSync | DetailCmd |\n+--------+-----------+---------------+-----------+------+---------+-------------+---------+--------+-----------+\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5b57\u6bb5"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DbName"}),(0,d.jsx)(n.td,{children:"Tablet \u6240\u5c5e\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"TableName"}),(0,d.jsx)(n.td,{children:"Tablet \u6240\u5c5e\u8868\u7684\u540d\u79f0\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PartitionName"}),(0,d.jsx)(n.td,{children:"Tablet \u6240\u5c5e\u5206\u533a\u7684\u540d\u79f0\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"IndexName"}),(0,d.jsx)(n.td,{children:"\u7d22\u5f15\u540d\u79f0\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DbId"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u5e93 ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"TableId"}),(0,d.jsx)(n.td,{children:"\u8868 ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PartitionId"}),(0,d.jsx)(n.td,{children:"\u5206\u533a ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"IndexId"}),(0,d.jsx)(n.td,{children:"\u7d22\u5f15 ID\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"IsSync"}),(0,d.jsxs)(n.td,{children:["\u68c0\u67e5 Tablet \u4e0a\u7684\u6570\u636e\u662f\u5426\u4e0e\u8868 meta \u91cc\u7684\u6570\u636e\u4e00\u81f4\u3002",(0,d.jsx)(n.code,{children:"false"})," \u8868\u793a\u68c0\u67e5\u9879\u6570\u636e\u6709\u7f3a\u5931\u3002",(0,d.jsx)(n.code,{children:"true"})," \u8868\u793a\u68c0\u67e5\u9879\u6570\u636e\u6b63\u5e38\uff0c\u5373\u4ee3\u8868 Tablet \u6b63\u5e38\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DetailCmd"}),(0,d.jsx)(n.td,{children:"\u901a\u8fc7 URL \u67e5\u8be2\u66f4\u591a\u4fe1\u606f\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u6570\u636e\u5e93 ",(0,d.jsx)(n.code,{children:"example_db"})," \u4e0b\u521b\u5efa\u8868 ",(0,d.jsx)(n.code,{children:"test_show_tablet"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `test_show_tablet` (\n  `k1` date NULL COMMENT "",\n  `k2` datetime NULL COMMENT "",\n  `k3` char(20) NULL COMMENT "",\n  `k4` varchar(20) NULL COMMENT "",\n  `k5` boolean NULL COMMENT "",\n  `k6` tinyint(4) NULL COMMENT "",\n  `k7` smallint(6) NULL COMMENT "",\n  `k8` int(11) NULL COMMENT "",\n  `k9` bigint(20) NULL COMMENT "",\n  `k10` largeint(40) NULL COMMENT "",\n  `k11` float NULL COMMENT "",\n  `k12` double NULL COMMENT "",\n  `k13` decimal128(27, 9) NULL COMMENT ""\n) ENGINE=OLAP \nDUPLICATE KEY(`k1`, `k2`, `k3`, `k4`, `k5`)\nCOMMENT "OLAP"\nPARTITION BY RANGE(`k1`)\n(PARTITION p20210101 VALUES [("2021-01-01"), ("2021-01-02")),\nPARTITION p20210102 VALUES [("2021-01-02"), ("2021-01-03")),\nPARTITION p20210103 VALUES [("2021-01-03"), ("2021-01-04")),\nPARTITION p20210104 VALUES [("2021-01-04"), ("2021-01-05")),\nPARTITION p20210105 VALUES [("2021-01-05"), ("2021-01-06")),\nPARTITION p20210106 VALUES [("2021-01-06"), ("2021-01-07")),\nPARTITION p20210107 VALUES [("2021-01-07"), ("2021-01-08")),\nPARTITION p20210108 VALUES [("2021-01-08"), ("2021-01-09")),\nPARTITION p20210109 VALUES [("2021-01-09"), ("2021-01-10")))\nDISTRIBUTED BY HASH(`k1`, `k2`, `k3`);\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709 Tablet \u4fe1\u606f\u3002\u4ee5\u4e0b\u793a\u4f8b\u4ec5\u622a\u53d6\u5176\u4e2d\u4e00\u884c tablet \u4fe1\u606f\u6765\u8bf4\u660e\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plain",children:"mysql> show tablet from example_db.test_show_tablet\\G\n*************************** 1. row ***************************\n           TabletId: 9588955\n          ReplicaId: 9588956\n          BackendId: 10004\n         SchemaHash: 0\n            Version: 1\n        VersionHash: 0\n  LstSuccessVersion: 1\nLstSuccessVersionHash: 0\n   LstFailedVersion: -1\nLstFailedVersionHash: 0\n      LstFailedTime: NULL\n           DataSize: 0B\n           RowCount: 0\n              State: NORMAL\nLstConsistencyCheckTime: NULL\n       CheckVersion: -1\n   CheckVersionHash: 0\n       VersionCount: 1\n           PathHash: 0\n            MetaUrl: http://172.26.92.141:8038/api/meta/header/9588955\n   CompactionStatus: http://172.26.92.141:8038/api/compaction/show?tablet_id=9588955\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b id \u4e3a 9588955 \u7684 Tablet \u7684\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plain",children:"mysql> show tablet 9588955\\G\n*************************** 1. row ***************************\n   DbName: example_db\nTableName: test_show_tablet\nPartitionName: p20210103\nIndexName: test_show_tablet\n     DbId: 11145\n  TableId: 9588953\nPartitionId: 9588946\n  IndexId: 9588954\n   IsSync: true\nDetailCmd: SHOW PROC '/dbs/11145/9588953/partitions/9588946/9588954/9588955';\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u67e5\u770b\u8868\u4e2d\u5206\u533a ",(0,d.jsx)(n.code,{children:"p20210103"})," \u7684 Tablet \u4fe1\u606f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"    SHOW TABLET FROM test_show_tablet partition(p20210103);\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u8868\u4e2d 10 \u4e2a Tablet \u7684\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"    SHOW TABLET FROM test_show_tablet limit 10;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4ece\u504f\u79fb\u4f4d\u7f6e 5 \u5f00\u59cb\u83b7\u53d6 10 \u4e2a Tablet \u7684\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"    SHOW TABLET FROM test_show_tablet limit 5,10;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6309\u7167 ",(0,d.jsx)(n.code,{children:"backendid"}),"\uff0c",(0,d.jsx)(n.code,{children:"version"}),"\uff0c",(0,d.jsx)(n.code,{children:"state"})," \u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'    SHOW TABLET FROM test_show_tablet\n    WHERE backendid = 10004 and version = 1 and state = "NORMAL";\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6309\u7167 ",(0,d.jsx)(n.code,{children:"version"})," \u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"    SHOW TABLET FROM table_name where backendid = 10004 order by version;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u67e5\u770b index \u540d\u4e3a ",(0,d.jsx)(n.code,{children:"test_show_tablet"})," \u7684 Tablet \u7684\u4fe1\u606f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'    SHOW TABLET FROM test_show_tablet where indexname = "test_show_tablet";\n'})}),"\n"]}),"\n"]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var d=s(67294);const t=d.createContext({});function l(e){const n=d.useContext(t);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:l(e),d.createElement(t.Provider,{value:r},n)}}}]);