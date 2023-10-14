"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21855],{1141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=s(85893),d=s(11151);const i={},r="SHOW EXPORT",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",title:"SHOW EXPORT",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",permalink:"/doc/zh/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW DYNAMIC PARTITION TABLES",permalink:"/doc/zh/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES"},next:{title:"SHOW LOAD",permalink:"/doc/zh/sql-reference/sql-statements/data-manipulation/SHOW_LOAD"}},t={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function x(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"show-export",children:"SHOW EXPORT"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u7b26\u5408\u6307\u5b9a\u6761\u4ef6\u7684\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT\n[ FROM <db_name> ]\n[\nWHERE\n    [ QUERYID = <query_id> ]\n    [ STATE = { "PENDING" | "EXPORTING" | "FINISHED" | "CANCELLED" } ]\n]\n[ ORDER BY <field_name> [ ASC | DESC ] [, ... ] ]\n[ LIMIT <count> ]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u5305\u542b\u56db\u4e2a\u53ef\u9009\u5b50\u53e5\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"FROM"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u5b50\u53e5\uff0c\u5219\u9ed8\u8ba4\u67e5\u8be2\u5f53\u524d\u6570\u636e\u5e93\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"WHERE"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\u3002\u53ea\u6709\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u7684\u5bfc\u5165\u4f5c\u4e1a\u8bb0\u5f55\u624d\u4f1a\u4f5c\u4e3a\u67e5\u8be2\u7ed3\u679c\u8fd4\u56de\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u662f\u5426\u5fc5\u9009"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"QUERYID"}),(0,l.jsx)(n.td,{children:"\u5426"}),(0,l.jsx)(n.td,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u7684 ID\u3002\u8be5\u53c2\u6570\u7528\u4e8e\u67e5\u8be2\u5355\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"STATE"}),(0,l.jsx)(n.td,{children:"\u5426"}),(0,l.jsxs)(n.td,{children:["\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,l.jsx)("br",{}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(n.code,{children:"PENDING"}),"\uff1a\u8868\u793a\u67e5\u8be2\u5f85\u8c03\u5ea6\u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(n.code,{children:"EXPORING"}),"\uff1a\u8868\u793a\u67e5\u8be2\u6b63\u5728\u6267\u884c\u4e2d\u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(n.code,{children:"FINISHED"}),"\uff1a\u8868\u793a\u67e5\u8be2\u6210\u529f\u5b8c\u6210\u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(n.code,{children:"CANCELLED"}),"\uff1a\u8868\u793a\u67e5\u8be2\u5931\u8d25\u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"]})]})]})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"ORDER BY"}),"\n",(0,l.jsxs)(n.p,{children:["\u6307\u5b9a\u7528\u4e8e\u5bf9\u8fd4\u56de\u7684\u5bfc\u51fa\u4f5c\u4e1a\u8bb0\u5f55\u8fdb\u884c\u6392\u5e8f\u7684\u5b57\u6bb5\u7684\u540d\u79f0\u3002\u652f\u6301\u6307\u5b9a\u591a\u4e2a\u5b57\u6bb5\uff0c\u591a\u4e2a\u5b57\u6bb5\u4e4b\u95f4\u5fc5\u987b\u7528\u9017\u53f7 (,) \u5206\u9694\u3002\u53e6\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728\u5b57\u6bb5\u540e\u901a\u8fc7\u6dfb\u52a0 ",(0,l.jsx)(n.code,{children:"ASC"})," \u6216 ",(0,l.jsx)(n.code,{children:"DESC"})," \u5173\u952e\u5b57\u6765\u6307\u5b9a\u6309\u8be5\u5b57\u6bb5\u5bf9\u8fd4\u56de\u7684\u5bfc\u51fa\u4f5c\u4e1a\u8bb0\u5f55\u8fdb\u884c\u5347\u5e8f\u6216\u964d\u5e8f\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"LIMIT"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u5141\u8bb8\u8fd4\u56de\u7684\u5bfc\u51fa\u4f5c\u4e1a\u8bb0\u5f55\u6700\u5927\u6570\u91cf\u3002\u53d6\u503c\u8303\u56f4\uff1a\u6b63\u6574\u6570\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u5b50\u53e5\uff0c\u5219\u9ed8\u8ba4\u8fd4\u56de\u7b26\u5408\u6307\u5b9a\u6761\u4ef6\u7684\u6240\u6709\u5bfc\u51fa\u4f5c\u4e1a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f8b\u5982\u67e5\u770b\u4e00\u4e2a ID \u4e3a ",(0,l.jsx)(n.code,{children:"edee47f0-abe1-11ec-b9d1-00163e1e238f"})," \u7684\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT\nWHERE QUERYID = "edee47f0-abe1-11ec-b9d1-00163e1e238f";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'     JobId: 14008\n   QueryId: edee47f0-abe1-11ec-b9d1-00163e1e238f\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"column separator":"\\t","columns":["*"],"tablet num":10,"broker":"","coord num":1,"db":"db0","tbl":"tbl_simple","row delimiter":"\\n","mem limit":2147483648}\n      Path: hdfs://127.0.0.1:9000/users/230320/\nCreateTime: 2023-03-20 11:16:14\n StartTime: 2023-03-20 11:16:17\nFinishTime: 2023-03-20 11:16:26\n   Timeout: 7200\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"JobId"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"QueryId"}),"\uff1a\u5f53\u524d\u67e5\u8be2\u7684 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"State"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001\uff0c\u5305\u62ec\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PENDING"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u5f85\u8c03\u5ea6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"EXPORTING"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u6b63\u5728\u6267\u884c\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FINISHED"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u6210\u529f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CANCELLED"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u5931\u8d25\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Progress"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u8fdb\u5ea6\u3002\u8be5\u8fdb\u5ea6\u4ee5\u67e5\u8be2\u8ba1\u5212\u4e3a\u5355\u4f4d\u3002\u5047\u8bbe\u5bfc\u51fa\u4f5c\u4e1a\u4e00\u5171\u5206\u4e3a 10 \u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5f53\u524d\u5df2\u5b8c\u6210 3 \u4e2a\uff0c\u5219\u8fdb\u5ea6\u4e3a 30%\u3002\u6709\u5173\u67e5\u8be2\u8ba1\u5212\u7684\u539f\u7406\uff0c\u53c2\u89c1",(0,l.jsx)(n.a,{href:"/doc/zh/unloading/Export#%E5%AF%BC%E5%87%BA%E6%B5%81%E7%A8%8B",children:"\u201c\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e > \u5bfc\u51fa\u6d41\u7a0b\u201d"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"TaskInfo"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u4fe1\u606f\uff0c\u683c\u5f0f\u4e3a JSON\uff0c\u5305\u62ec\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"partitions"}),"\uff1a\u5bfc\u51fa\u6570\u636e\u6240\u5728\u7684\u5206\u533a\u3002\u901a\u914d\u7b26 (",(0,l.jsx)(n.code,{children:"*"}),") \u8868\u793a\u5bfc\u51fa\u4e86\u6240\u6709\u5206\u533a\u7684\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"column separator"}),"\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"columns"}),"\uff1a\u5bfc\u51fa\u7684\u5217\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"tablet num"}),"\uff1a\u5bfc\u51fa\u7684 Tablet \u603b\u6570\u91cf\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"broker"}),"\uff1a\u5728 v2.4 \u53ca\u4ee5\u524d\u7248\u672c\uff0c\u8be5\u5b57\u6bb5\u7528\u4e8e\u8fd4\u56de\u5bfc\u51fa\u4f5c\u4e1a\u4f7f\u7528\u7684 Broker \u7684\u540d\u79f0\u3002\u81ea v2.5 \u8d77\uff0c\u8be5\u5b57\u6bb5\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002\u5177\u4f53\u539f\u56e0\u8bf7\u53c2\u89c1",(0,l.jsx)(n.a,{href:"/doc/zh/unloading/Export#%E8%83%8C%E6%99%AF%E4%BF%A1%E6%81%AF",children:"\u201c\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e > \u80cc\u666f\u4fe1\u606f\u201d"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"coord num"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u62c6\u5206\u7684\u67e5\u8be2\u8ba1\u5212\u7684\u4e2a\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"db"}),"\uff1a\u5bfc\u51fa\u6570\u636e\u6240\u5728\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"tbl"}),"\uff1a\u5bfc\u51fa\u6570\u636e\u6240\u5728\u7684\u8868\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"row delimiter"}),"\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u884c\u5206\u9694\u7b26\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mem limit"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002\u5355\u4f4d\u662f\u5b57\u8282\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Path"}),"\uff1a\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u5bfc\u51fa\u8def\u5f84\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CreateTime"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u521b\u5efa\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"StartTime"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u5f00\u59cb\u8c03\u5ea6\u7684\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FinishTime"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u7ed3\u675f\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Timeout"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u662f\u79d2\u3002\u8be5\u65f6\u95f4\u4ece ",(0,l.jsx)(n.code,{children:"CreateTime"})," \u5f00\u59cb\u8ba1\u7b97\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ErrorMsg"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u9519\u8bef\u539f\u56e0\u3002\u8be5\u5b57\u6bb5\u4ec5\u5f53\u5bfc\u51fa\u4f5c\u4e1a\u51fa\u73b0\u9519\u8bef\u65f6\u624d\u4f1a\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u5f53\u524d\u6570\u636e\u5e93\u4e0b\u6240\u6709\u5bfc\u51fa\u4f5c\u4e1a\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW EXPORT;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93 ",(0,l.jsx)(n.code,{children:"example_db"})," \u4e0b ID \u4e3a ",(0,l.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001122"})," \u7684\u5bfc\u51fa\u4f5c\u4e1a\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT FROM example_db\nWHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93 ",(0,l.jsx)(n.code,{children:"example_db"})," \u4e0b\u72b6\u6001\u4e3a ",(0,l.jsx)(n.code,{children:"EXPORTING"})," \u7684\u5bfc\u51fa\u4f5c\u4e1a\uff0c\u5e76\u6309 ",(0,l.jsx)(n.code,{children:"StartTime"})," \u5bf9\u8fd4\u56de\u7684\u5bfc\u51fa\u4f5c\u4e1a\u8bb0\u5f55\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT FROM example_db\nWHERE STATE = "exporting"\nORDER BY StartTime ASC;\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93 ",(0,l.jsx)(n.code,{children:"example_db"})," \u4e0b\u6240\u6709\u5bfc\u51fa\u4f5c\u4e1a\uff0c\u5e76\u6309 ",(0,l.jsx)(n.code,{children:"StartTime"})," \u5bf9\u8fd4\u56de\u7684\u5bfc\u51fa\u4f5c\u4e1a\u8bb0\u5f55\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW EXPORT FROM example_db\nORDER BY StartTime DESC;\n"})}),"\n"]}),"\n"]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(x,e)})):x(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var l=s(67294);const d=l.createContext({});function i(e){const n=l.useContext(d);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:i(e),l.createElement(d.Provider,{value:c},n)}}}]);