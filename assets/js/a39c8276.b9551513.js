"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99204],{3330:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=d(85893),r=d(11151);const i={},l="\u66f4\u65b0\u6a21\u578b",c={id:"table_design/table_types/unique_key_table",title:"\u66f4\u65b0\u6a21\u578b",description:"\u5efa\u8868\u65f6\uff0c\u652f\u6301\u5b9a\u4e49\u4e3b\u952e\u548c\u6307\u6807\u5217\uff0c\u67e5\u8be2\u65f6\u8fd4\u56de\u4e3b\u952e\u76f8\u540c\u7684\u4e00\u7ec4\u6570\u636e\u4e2d\u7684\u6700\u65b0\u6570\u636e\u3002\u76f8\u5bf9\u4e8e\u660e\u7ec6\u6a21\u578b\uff0c\u66f4\u65b0\u6a21\u578b\u7b80\u5316\u4e86\u6570\u636e\u5bfc\u5165\u6d41\u7a0b\uff0c\u80fd\u591f\u66f4\u597d\u5730\u652f\u6491\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u7684\u573a\u666f\u3002",source:"@site/chinese_versioned_docs/version-2.5/table_design/table_types/unique_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/unique_key_table",permalink:"/doc/zh/2.5/table_design/table_types/unique_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/table_types/unique_key_table.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u4e3b\u952e\u6a21\u578b",permalink:"/doc/zh/2.5/table_design/table_types/primary_key_table"},next:{title:"\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e",permalink:"/doc/zh/2.5/unloading/Export"}},t={},h=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",blockquote:"blockquote",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u66f4\u65b0\u6a21\u578b",children:"\u66f4\u65b0\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u652f\u6301\u5b9a\u4e49\u4e3b\u952e\u548c\u6307\u6807\u5217\uff0c\u67e5\u8be2\u65f6\u8fd4\u56de\u4e3b\u952e\u76f8\u540c\u7684\u4e00\u7ec4\u6570\u636e\u4e2d\u7684\u6700\u65b0\u6570\u636e\u3002\u76f8\u5bf9\u4e8e\u660e\u7ec6\u6a21\u578b\uff0c\u66f4\u65b0\u6a21\u578b\u7b80\u5316\u4e86\u6570\u636e\u5bfc\u5165\u6d41\u7a0b\uff0c\u80fd\u591f\u66f4\u597d\u5730\u652f\u6491\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u7684\u573a\u666f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u4f8b\u5982\u5206\u6790\u7535\u5546\u8ba2\u5355\u3002\u5728\u7535\u5546\u573a\u666f\u4e2d\uff0c\u8ba2\u5355\u7684\u72b6\u6001\u7ecf\u5e38\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u6bcf\u5929\u7684\u8ba2\u5355\u66f4\u65b0\u91cf\u53ef\u7a81\u7834\u4e0a\u4ebf\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u65b0\u6a21\u578b\u53ef\u4ee5\u89c6\u4e3a\u805a\u5408\u6a21\u578b\u7684\u7279\u6b8a\u60c5\u51b5\uff0c\u6307\u6807\u5217\u6307\u5b9a\u7684\u805a\u5408\u51fd\u6570\u4e3a REPLACE\uff0c\u8fd4\u56de\u5177\u6709\u76f8\u540c\u4e3b\u952e\u7684\u4e00\u7ec4\u6570\u636e\u4e2d\u7684\u6700\u65b0\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5206\u6279\u6b21\u591a\u6b21\u5bfc\u5165\u81f3\u66f4\u65b0\u6a21\u578b\uff0c\u6bcf\u4e00\u6279\u6b21\u6570\u636e\u5206\u914d\u4e00\u4e2a\u7248\u672c\u53f7\uff0c\u56e0\u6b64\u540c\u4e00\u4e3b\u952e\u7684\u6570\u636e\u53ef\u80fd\u6709\u591a\u4e2a\u7248\u672c\uff0c\u67e5\u8be2\u65f6\u8fd4\u56de\u7248\u672c\u6700\u65b0\uff08\u5373\u7248\u672c\u53f7\u6700\u5927\uff09\u7684\u6570\u636e\u3002\u76f8\u5bf9\u4e8e\u660e\u7ec6\u6a21\u578b\uff0c\u66f4\u65b0\u6a21\u578b\u901a\u8fc7\u7b80\u5316\u5bfc\u5165\u6d41\u7a0b\uff0c\u80fd\u591f\u66f4\u597d\u5730\u652f\u6301\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\u4e0b\u8868\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"ID"})," \u662f\u4e3b\u952e\uff0c",(0,s.jsx)(n.code,{children:"value"})," \u662f\u6307\u6807\u5217\uff0c",(0,s.jsx)(n.code,{children:"_version"})," \u662f StarRocks \u5185\u90e8\u7684\u7248\u672c\u53f7\u3002\u5176\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"ID"})," \u4e3a 1 \u7684\u6570\u636e\u6709\u4e24\u4e2a\u5bfc\u5165\u6279\u6b21\uff0c\u7248\u672c\u53f7\u5206\u522b\u4e3a ",(0,s.jsx)(n.code,{children:"1"})," \u548c ",(0,s.jsx)(n.code,{children:"2"}),"\uff1b",(0,s.jsx)(n.code,{children:"ID"})," \u4e3a ",(0,s.jsx)(n.code,{children:"2"})," \u7684\u6570\u636e\u6709\u4e09\u4e2a\u5bfc\u5165\u6279\u6b21\uff0c\u7248\u672c\u53f7\u5206\u522b\u4e3a ",(0,s.jsx)(n.code,{children:"3"}),"\u3001",(0,s.jsx)(n.code,{children:"4"}),"\u3001",(0,s.jsx)(n.code,{children:"5"}),"\u3002"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"ID"}),(0,s.jsx)(n.th,{children:"value"}),(0,s.jsx)(n.th,{children:"_version"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"101"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"101"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"102"}),(0,s.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u8be2 ",(0,s.jsx)(n.code,{children:"ID"})," \u4e3a ",(0,s.jsx)(n.code,{children:"1"})," \u7684\u6570\u636e\u65f6\uff0c\u4ec5\u4f1a\u8fd4\u56de\u6700\u65b0\u7248\u672c ",(0,s.jsx)(n.code,{children:"2"})," \u7684\u6570\u636e\uff0c\u800c\u67e5\u8be2 ",(0,s.jsx)(n.code,{children:"ID"})," \u4e3a ",(0,s.jsx)(n.code,{children:"2"})," \u7684\u6570\u636e\u65f6\uff0c\u4ec5\u4f1a\u8fd4\u56de\u6700\u65b0\u7248\u672c ",(0,s.jsx)(n.code,{children:"5"})," \u7684\u6570\u636e\uff0c\u6700\u7ec8\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"ID"}),(0,s.jsx)(n.th,{children:"value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"101"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"102"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u7535\u5546\u8ba2\u5355\u5206\u6790\u573a\u666f\u4e2d\uff0c\u7ecf\u5e38\u6309\u7167\u65e5\u671f\u5bf9\u8ba2\u5355\u72b6\u6001\u8fdb\u884c\u7edf\u8ba1\u5206\u6790\uff0c\u5219\u53ef\u4ee5\u5c06\u7ecf\u5e38\u4f7f\u7528\u7684\u8fc7\u6ee4\u5b57\u6bb5\u8ba2\u5355\u521b\u5efa\u65f6\u95f4 ",(0,s.jsx)(n.code,{children:"create_time"}),"\u3001\u8ba2\u5355\u7f16\u53f7 ",(0,s.jsx)(n.code,{children:"order_id"})," \u4f5c\u4e3a\u4e3b\u952e\uff0c\u5176\u4f59\u5217\u8ba2\u5355\u72b6\u6001 ",(0,s.jsx)(n.code,{children:"order_state"})," \u548c\u8ba2\u5355\u603b\u4ef7 ",(0,s.jsx)(n.code,{children:"total_price"})," \u4f5c\u4e3a\u6307\u6807\u5217\u3002\u8fd9\u6837\u65e2\u80fd\u591f\u6ee1\u8db3\u5b9e\u65f6\u66f4\u65b0\u8ba2\u5355\u72b6\u6001\u7684\u9700\u6c42\uff0c\u53c8\u80fd\u591f\u5728\u67e5\u8be2\u4e2d\u8fdb\u884c\u5feb\u901f\u8fc7\u6ee4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8be5\u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS orders (\n    create_time DATE NOT NULL COMMENT "create time of an order",\n    order_id BIGINT NOT NULL COMMENT "id of an order",\n    order_state INT COMMENT "state of an order",\n    total_price BIGINT COMMENT "price of an order"\n)\nUNIQUE KEY(create_time, order_id)\nDISTRIBUTED BY HASH(order_id) BUCKETS 8\nPROPERTIES (\n"replication_num" = "3"\n); \n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5efa\u8868\u65f6\u5fc5\u987b\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"DISTRIBUTED BY HASH"})," \u5b50\u53e5\u6307\u5b9a\u5206\u6876\u952e\u3002\u5206\u6876\u952e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"../Data_distribution.md/#%E5%88%86%E6%A1%B6",children:"\u5206\u6876"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e3b\u952e\u7684\u76f8\u5173\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\uff0c\u4e3b\u952e\u5fc5\u987b\u5b9a\u4e49\u5728\u5176\u4ed6\u5217\u4e4b\u524d\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u4e3b\u952e\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"UNIQUE KEY"})," \u5b9a\u4e49\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4e3b\u952e\u5fc5\u987b\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u4e14\u5217\u7684\u503c\u4e0d\u4f1a\u4fee\u6539\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u8bbe\u7f6e\u5408\u7406\u7684\u4e3b\u952e\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u65f6\uff0c\u4e3b\u952e\u5728\u805a\u5408\u4e4b\u524d\u5c31\u80fd\u8fdb\u884c\u8fc7\u6ee4\uff0c\u800c\u6307\u6807\u5217\u7684\u8fc7\u6ee4\u901a\u5e38\u5728\u591a\u7248\u672c\u805a\u5408\u4e4b\u540e\uff0c\u56e0\u6b64\u5efa\u8bae\u5c06\u9891\u7e41\u4f7f\u7528\u7684\u8fc7\u6ee4\u5b57\u6bb5\u4f5c\u4e3a\u4e3b\u952e\uff0c\u5728\u805a\u5408\u524d\u5c31\u80fd\u8fc7\u6ee4\u6570\u636e\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u805a\u5408\u8fc7\u7a0b\u4e2d\u4f1a\u6bd4\u8f83\u6240\u6709\u4e3b\u952e\uff0c\u56e0\u6b64\u9700\u8981\u907f\u514d\u8bbe\u7f6e\u8fc7\u591a\u7684\u4e3b\u952e\uff0c\u4ee5\u514d\u964d\u4f4e\u67e5\u8be2\u6027\u80fd\u3002\u5982\u679c\u67d0\u4e2a\u5217\u53ea\u662f\u5076\u5c14\u4f1a\u4f5c\u4e3a\u67e5\u8be2\u4e2d\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5219\u4e0d\u5efa\u8bae\u653e\u5728\u4e3b\u952e\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u4e0d\u652f\u6301\u4e3a\u6307\u6807\u5217\u521b\u5efa BITMAP\u3001Bloom Filter \u7b49\u7d22\u5f15\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,s.jsxs)(n.p,{children:["\u5efa\u8868\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u591a\u79cd\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5bfc\u5165\u6570\u636e\u81f3\u8868\u4e2d\u3002\u5177\u4f53\u5bfc\u5165\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"/doc/zh/2.5/loading/Loading_intro",children:"\u5bfc\u5165\u6982\u89c8"}),"\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u4ec5\u652f\u6301\u5168\u90e8\u66f4\u65b0\uff0c\u5373\u5bfc\u5165\u4efb\u52a1\u9700\u8981\u6307\u660e\u6240\u6709\u5217\uff0c\u4f8b\u5982\u793a\u4f8b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"create_time"}),"\u3001",(0,s.jsx)(n.code,{children:"order_id"}),"\u3001",(0,s.jsx)(n.code,{children:"order_state"})," \u548c ",(0,s.jsx)(n.code,{children:"total_price"})," \u56db\u4e2a\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u8bbe\u8ba1\u5bfc\u5165\u9891\u7387\u65f6\uff0c\u5efa\u8bae\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u5bf9\u5b9e\u65f6\u6027\u7684\u8981\u6c42\u4e3a\u51c6\u3002\u67e5\u8be2\u66f4\u65b0\u6a21\u578b\u7684\u6570\u636e\u65f6\uff0c\u9700\u8981\u805a\u5408\u591a\u7248\u672c\u7684\u6570\u636e\uff0c\u5f53\u7248\u672c\u8fc7\u591a\u65f6\u4f1a\u5bfc\u81f4\u67e5\u8be2\u6027\u80fd\u964d\u4f4e\u3002\u6240\u4ee5\u5bfc\u5165\u6570\u636e\u81f3\u66f4\u65b0\u6a21\u578b\u65f6\uff0c\u5e94\u8be5\u9002\u5f53\u964d\u4f4e\u5bfc\u5165\u9891\u7387\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002\u5982\u679c\u4e1a\u52a1\u5bf9\u5b9e\u65f6\u6027\u7684\u8981\u6c42\u662f\u5206\u949f\u7ea7\u522b\uff0c\u90a3\u4e48\u6bcf\u5206\u949f\u5bfc\u5165\u4e00\u6b21\u66f4\u65b0\u6570\u636e\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u79d2\u7ea7\u5bfc\u5165\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,d)=>{d.d(n,{Zo:()=>c,ah:()=>i});var s=d(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:d}){let c;return c=d?"function"==typeof e?e({}):e||l:i(e),s.createElement(r.Provider,{value:c},n)}}}]);