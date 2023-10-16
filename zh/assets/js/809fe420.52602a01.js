"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29280],{81851:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=e(85893),s=e(11151);const r={displayed_sidebar:"Chinese"},c="\u4f7f\u7528 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd",a={id:"using_starrocks/Using_bitmap",title:"\u4f7f\u7528 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd\uff08Exact Count Distinct\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/using_starrocks/Using_bitmap.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Using_bitmap",permalink:"/doc/zh/docs/using_starrocks/Using_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/using_starrocks/Using_bitmap.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u6570\u636e\u53bb\u91cd",permalink:"/doc/zh/docs/category/\u6570\u636e\u53bb\u91cd"},next:{title:"\u4f7f\u7528 HyperLogLog \u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd",permalink:"/doc/zh/docs/using_starrocks/Using_HLL"}},l={},d=[{value:"\u4f20\u7edf Count distinct",id:"\u4f20\u7edf-count-distinct",level:2},{value:"Bitmap \u53bb\u91cd\u7684\u4f18\u52bf",id:"bitmap-\u53bb\u91cd\u7684\u4f18\u52bf",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"Bitmap \u53bb\u91cd\u4f7f\u7528\u793a\u4f8b",id:"bitmap-\u53bb\u91cd\u4f7f\u7528\u793a\u4f8b",level:2},{value:"Bitmap \u5168\u5c40\u5b57\u5178",id:"bitmap-\u5168\u5c40\u5b57\u5178",level:2},{value:"\u57fa\u4e8e Hive \u8868\u7684\u5168\u5c40\u5b57\u5178",id:"\u57fa\u4e8e-hive-\u8868\u7684\u5168\u5c40\u5b57\u5178",level:3},{value:"\u57fa\u4e8e Trie \u6811\u6784\u5efa\u5168\u5c40\u5b57\u5178",id:"\u57fa\u4e8e-trie-\u6811\u6784\u5efa\u5168\u5c40\u5b57\u5178",level:3}];function h(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",blockquote:"blockquote",pre:"pre",code:"code",a:"a",ul:"ul",li:"li",ol:"ol",h3:"h3"},(0,s.ah)(),i.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4f7f\u7528-bitmap-\u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd",children:"\u4f7f\u7528 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd\uff08Exact Count Distinct\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Bitmap \u53bb\u91cd\u80fd\u591f\u51c6\u786e\u8ba1\u7b97\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u4e0d\u91cd\u590d\u5143\u7d20\u7684\u6570\u91cf\uff0c\u76f8\u6bd4\u4f20\u7edf\u7684 Count Distinct\uff0c\u53ef\u4ee5\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u3001\u52a0\u901f\u8ba1\u7b97\u3002\u4f8b\u5982\uff0c\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 A\uff0c\u5176\u53d6\u503c\u8303\u56f4\u4e3a [0, n)\uff0c\u53ef\u91c7\u7528 (n+7)/8 \u7684\u5b57\u8282\u957f\u5ea6\u7684 bitmap \u5bf9\u8be5\u6570\u7ec4\u53bb\u91cd\u3002\u5373\u5c06\u6240\u6709 bit \u521d\u59cb\u5316\u4e3a 0\uff0c\u7136\u540e\u4ee5\u6570\u7ec4 A \u4e2d\u5143\u7d20\u7684\u53d6\u503c\u4f5c\u4e3a bit \u7684\u4e0b\u6807\uff0c\u5e76\u5c06 bit \u7f6e\u4e3a 1\uff0c\u90a3\u4e48 bitmap \u4e2d 1 \u7684\u4e2a\u6570\u5373\u4e3a\u6570\u7ec4 A \u4e2d\u4e0d\u540c\u5143\u7d20 (Count Distinct) \u7684\u6570\u91cf\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f20\u7edf-count-distinct",children:"\u4f20\u7edf Count distinct"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u662f\u57fa\u4e8e MPP \u67b6\u6784\u5b9e\u73b0\u7684\uff0c\u5728\u4f7f\u7528 count distinct \u505a\u7cbe\u786e\u53bb\u91cd\u65f6\uff0c\u53ef\u4ee5\u4fdd\u7559\u660e\u7ec6\u6570\u636e\uff0c\u7075\u6d3b\u6027\u8f83\u9ad8\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u5728\u67e5\u8be2\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u9700\u8981\u8fdb\u884c\u591a\u6b21\u6570\u636e shuffle\uff08\u4e0d\u540c\u8282\u70b9\u95f4\u4f20\u8f93\u6570\u636e\uff0c\u8ba1\u7b97\u53bb\u91cd\uff09\uff0c\u4f1a\u5bfc\u81f4\u6027\u80fd\u968f\u7740\u6570\u636e\u91cf\u589e\u5927\u800c\u76f4\u7ebf\u4e0b\u964d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6bd4\u5982\uff0c\u8981\u901a\u8fc7\u4ee5\u4e0b\u660e\u7ec6\u6570\u636e\u8ba1\u7b97\u8868\uff08dt, page, user_id\uff09\u6bcf\u4e2a\u9875\u9762\u7684 UV\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center",children:"dt"}),(0,t.jsx)(n.th,{align:"center",children:"page"}),(0,t.jsx)(n.th,{align:"center",children:"user_id"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"20191206"}),(0,t.jsx)(n.td,{align:"center",children:"game"}),(0,t.jsx)(n.td,{align:"center",children:"101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"20191206"}),(0,t.jsx)(n.td,{align:"center",children:"shopping"}),(0,t.jsx)(n.td,{align:"center",children:"102"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"20191206"}),(0,t.jsx)(n.td,{align:"center",children:"game"}),(0,t.jsx)(n.td,{align:"center",children:"101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"20191206"}),(0,t.jsx)(n.td,{align:"center",children:"shopping"}),(0,t.jsx)(n.td,{align:"center",children:"101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"20191206"}),(0,t.jsx)(n.td,{align:"center",children:"game"}),(0,t.jsx)(n.td,{align:"center",children:"101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"20191206"}),(0,t.jsx)(n.td,{align:"center",children:"shopping"}),(0,t.jsx)(n.td,{align:"center",children:"101"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u5728\u8ba1\u7b97\u65f6\uff0c\u4f1a\u6309\u7167\u4e0b\u56fe\u8fdb\u884c\u8ba1\u7b97\uff0c\u5148\u6839\u636e page \u5217\u548c user_id \u5217 group by\uff0c\u6700\u540e\u518d count\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alter",src:e(87390).Z+"",width:"2052",height:"1068"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\uff1a\u56fe\u4e2d\u662f 6 \u884c\u6570\u636e\u5728 2 \u4e2a BE \u8282\u70b9\u4e0a\u8ba1\u7b97\u7684\u793a\u610f\u56fe\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e2d\uff0c\u7531\u4e8e\u6570\u636e\u9700\u8981\u8fdb\u884c\u591a\u6b21 shuffle\uff0c\u5f53\u6570\u636e\u91cf\u8d8a\u6765\u8d8a\u5927\u65f6\uff0c\u6240\u9700\u7684\u8ba1\u7b97\u8d44\u6e90\u5c31\u4f1a\u8d8a\u6765\u8d8a\u591a\uff0c\u67e5\u8be2\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u6162\u3002\u800c\u4f7f\u7528 Bitmap \u53bb\u91cd\uff0c\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u4f20\u7edf count distinct \u5728\u5927\u91cf\u6570\u636e\u573a\u666f\u4e0b\u7684\u6027\u80fd\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select page, count(distinct user_id) as uv from table group by page;\n\n|  page      |   uv  |\n| :---:      | :---: |\n|  game      |  1    |\n|  shopping  |   2   |\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bitmap-\u53bb\u91cd\u7684\u4f18\u52bf",children:"Bitmap \u53bb\u91cd\u7684\u4f18\u52bf"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0e\u4f20\u7edf ",(0,t.jsx)(n.a,{href:"#%E4%BC%A0%E7%BB%9F-count-distinct",children:"count distinct"})," \u65b9\u5f0f\u76f8\u6bd4\uff0cBitmap \u7684\u4f18\u52bf\u4e3b\u8981\u4f53\u73b0\u5728\u4ee5\u4e0b\u4e24\u70b9 \uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\uff1a\u901a\u8fc7\u7528 Bitmap \u7684\u4e00\u4e2a Bit \u4f4d\u8868\u793a\u5bf9\u5e94\u4e0b\u6807\u662f\u5426\u5b58\u5728\uff0c\u80fd\u8282\u7701\u5927\u91cf\u5b58\u50a8\u7a7a\u95f4\u3002\u4f8b\u5982\uff0c\u5bf9 INT32 \u7c7b\u578b\u7684\u6570\u636e\u53bb\u91cd\uff0c\u5982\u4f7f\u7528\u666e\u901a\u7684 bitmap\uff0c\u5176\u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\u53ea\u5360 COUNT(DISTINCT expr) \u7684 1/32\u3002StarRocks \u91c7\u7528\u4e00\u79cd\u8bbe\u8ba1\u7684\u5341\u5206\u7cbe\u5de7\u7684 bitmap\uff0c\u53eb\u505a Roaring Bitmap\uff0c\u76f8\u8f83 Bitmap \u4f1a\u8fdb\u4e00\u6b65\u51cf\u5c11\u5185\u5b58\u5360\u7528\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u52a0\u901f\u8ba1\u7b97\uff1aBitmap \u53bb\u91cd\u4f7f\u7528\u7684\u662f\u4f4d\u8fd0\u7b97\uff0c\u6240\u4ee5\u8ba1\u7b97\u901f\u5ea6\u76f8\u8f83 COUNT(DISTINCT expr) \u66f4\u5feb\uff0c\u800c\u4e14 bitmap \u53bb\u91cd\u5728 StarRocks MPP \u6267\u884c\u5f15\u64ce\u4e2d\u8fd8\u53ef\u4ee5\u5e76\u884c\u52a0\u901f\u5904\u7406\uff0c\u63d0\u9ad8\u8ba1\u7b97\u901f\u5ea6\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4e8e Roaring Bitmap \u7684\u5b9e\u73b0\uff0c\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/RoaringBitmap/RoaringBitmap",children:"\u5177\u4f53\u8bba\u6587\u548c\u5b9e\u73b0"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bitmap index \u548c Bitmap \u53bb\u91cd\u4e8c\u8005\u867d\u7136\u90fd\u4f7f\u7528 Bitmap \u6280\u672f\uff0c\u4f46\u5f15\u5165\u539f\u56e0\u548c\u89e3\u51b3\u7684\u95ee\u9898\u5b8c\u5168\u4e0d\u540c\u3002\u524d\u8005\u7528\u4e8e\u4f4e\u57fa\u6570\u7684\u679a\u4e3e\u578b\u5217\u7684\u7b49\u503c\u6761\u4ef6\u8fc7\u6ee4\uff0c\u540e\u8005\u5219\u7528\u4e8e\u8ba1\u7b97\u4e00\u7ec4\u6570\u636e\u884c\u7684\u6307\u6807\u5217\u7684\u4e0d\u91cd\u590d\u5143\u7d20\u7684\u4e2a\u6570\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u4ece StarRocks 2.3 \u7248\u672c\u5f00\u59cb\uff0c\u6240\u6709\u6570\u636e\u6a21\u578b\u8868\u7684\u6307\u6807\u5217\u5747\u652f\u6301\u8bbe\u7f6e\u4e3a BITMAP \u7c7b\u578b\uff0c\u4f46\u662f\u6240\u6709\u6570\u636e\u6a21\u578b\u8868\u7684\u4e0d\u652f\u6301",(0,t.jsx)(n.a,{href:"/doc/zh/docs/table_design/Sort_key",children:"\u6392\u5e8f\u952e"}),"\u4e3a BITMAP \u7c7b\u578b\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5efa\u8868\u65f6\uff0c\u6307\u5b9a\u6307\u6807\u5217\u7c7b\u578b\u4e3a BITMAP\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union",children:"BITMAP_UNION"})," \u51fd\u6570\u8fdb\u884c\u805a\u5408\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"StarRocks \u7684 bitmap \u53bb\u91cd\u662f\u57fa\u4e8e Roaring Bitmap \u5b9e\u73b0\u7684\uff0croaring bitmap \u53ea\u80fd\u5bf9 TINYINT\uff0cSMALLINT\uff0cINT \u548c BIGINT \u7c7b\u578b\u7684\u6570\u636e\u53bb\u91cd\u3002\u5982\u60f3\u8981\u4f7f\u7528 Roaring Bitmap \u5bf9\u5176\u4ed6\u7c7b\u578b\u7684\u6570\u636e\u53bb\u91cd\uff0c\u5219\u9700\u8981\u6784\u5efa\u5168\u5c40\u5b57\u5178\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bitmap-\u53bb\u91cd\u4f7f\u7528\u793a\u4f8b",children:"Bitmap \u53bb\u91cd\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u7edf\u8ba1\u67d0\u4e00\u4e2a\u9875\u9762\u7684\u72ec\u7acb\u8bbf\u5ba2\u4eba\u6570\uff08UV\uff09\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u5f20\u805a\u5408\u8868 ",(0,t.jsx)(n.code,{children:"page_uv"}),"\u3002\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"visit_users"})," \u5217\u8868\u793a\u8bbf\u95ee\u7528\u6237\u7684 ID\uff0c\u4e3a\u805a\u5408\u5217\uff0c\u5217\u7c7b\u578b\u4e3a BITMAP\uff0c\u4f7f\u7528\u805a\u5408\u51fd\u6570 BITMAP_UNION \u6765\u805a\u5408\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `page_uv` (\n  `page_id` INT NOT NULL COMMENT \'\u9875\u9762id\',\n  `visit_date` datetime NOT NULL COMMENT \'\u8bbf\u95ee\u65f6\u95f4\',\n  `visit_users` BITMAP BITMAP_UNION NOT NULL COMMENT \'\u8bbf\u95ee\u7528\u6237id\'\n) ENGINE=OLAP\nAGGREGATE KEY(`page_id`, `visit_date`)\nDISTRIBUTED BY HASH(`page_id`)\nPROPERTIES (\n  "replication_num" = "3",\n  "storage_format" = "DEFAULT"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5411\u8868\u4e2d\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u91c7\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO page_uv VALUES\n(1, '2020-06-23 01:30:30', to_bitmap(13)),\n(1, '2020-06-23 01:30:30', to_bitmap(23)),\n(1, '2020-06-23 01:30:30', to_bitmap(33)),\n(1, '2020-06-23 02:30:30', to_bitmap(13)),\n(2, '2020-06-23 01:30:30', to_bitmap(23));\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5bfc\u5165\u540e:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728 page_id = 1\uff0c visit_date = '2020-06-23 01:30:30' \u6570\u636e\u884c\uff0c",(0,t.jsx)(n.code,{children:"visit_users"})," \u5b57\u6bb5\u5305\u542b 3 \u4e2a bitmap \u5143\u7d20\uff0813\uff0c23\uff0c33\uff09\uff1b"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 page_id = 1\uff0c visit_date = '2020-06-23 02:30:30' \u7684\u6570\u636e\u884c\uff0c",(0,t.jsx)(n.code,{children:"visit_users"})," \u5b57\u6bb5\u5305\u542b 1 \u4e2a bitmap \u5143\u7d20\uff0813\uff09\uff1b"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 page_id = 2\uff0c visit_date = '2020-06-23 01:30:30' \u7684\u6570\u636e\u884c\uff0c",(0,t.jsx)(n.code,{children:"visit_users"})," \u5b57\u6bb5\u5305\u542b 1 \u4e2a bitmap \u5143\u7d20\uff0823\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u91c7\u7528\u672c\u5730\u6587\u4ef6\u5bfc\u5165\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'echo -e \'1,2020-06-23 01:30:30,130\\n1,2020-06-23 01:30:30,230\\n1,2020-06-23 01:30:30,120\\n1,2020-06-23 02:30:30,133\\n2,2020-06-23 01:30:30,234\' > tmp.csv | \ncurl --location-trusted -u <username>:<password> -H "label:label_1600960288798" \\\n    -H "column_separator:," \\\n    -H "columns:page_id,visit_date,visit_users, visit_users=to_bitmap(visit_users)" -T tmp.csv \\\n    http://StarRocks_be0:8040/api/db0/page_uv/_stream_load\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7edf\u8ba1\u6bcf\u4e2a\u9875\u9762\u7684 UV\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select page_id, count(distinct visit_users) from page_uv group by page_id;\n\n+-----------+------------------------------+\n|  page_id  | count(DISTINCT `visit_users`) |\n+-----------+------------------------------+\n|         1 |                            3 |\n+-----------+------------------------------+\n|         2 |                            1 |\n+-----------+------------------------------+\n2 row in set (0.00 sec)\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bitmap-\u5168\u5c40\u5b57\u5178",children:"Bitmap \u5168\u5c40\u5b57\u5178"}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u57fa\u4e8e Bitmap \u7c7b\u578b\u7684\u53bb\u91cd\u673a\u5236\u6709\u4e00\u5b9a\u9650\u5236\uff0c\u5373 Bitmap \u9700\u8981\u4f7f\u7528\u6574\u6570\u578b\u7c7b\u578b\u4f5c\u4e3a\u8f93\u5165\u3002\u5982\u7528\u6237\u671f\u671b\u5c06\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u4f5c\u4e3a Bitmap \u7684\u8f93\u5165\uff0c\u5219\u9700\u8981\u6784\u5efa\u5168\u5c40\u5b57\u5178\uff0c\u5c06\u5176\u4ed6\u7c7b\u578b\u6570\u636e\uff08\u5982\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\u901a\u8fc7\u5168\u5c40\u5b57\u5178\u6620\u5c04\u6210\u4e3a\u6574\u6570\u7c7b\u578b\u3002\u6784\u5efa\u5168\u5c40\u5b57\u5178\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6848\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u4e8e-hive-\u8868\u7684\u5168\u5c40\u5b57\u5178",children:"\u57fa\u4e8e Hive \u8868\u7684\u5168\u5c40\u5b57\u5178"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u65b9\u6848\u9700\u521b\u5efa\u4e00\u5f20 Hive \u8868\u4f5c\u4e3a\u5168\u5c40\u5b57\u5178\u3002Hive \u8868\u6709\u4e24\u4e2a\u5217\uff0c\u4e00\u4e2a\u662f\u539f\u59cb\u503c\uff0c\u4e00\u4e2a\u662f\u7f16\u7801\u7684 Int \u503c\u3002\u4ee5\u4e0b\u4e3a\u5168\u5c40\u5b57\u5178\u7684\u751f\u6210\u6b65\u9aa4\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u4e8b\u5b9e\u8868\u7684\u5b57\u5178\u5217\u53bb\u91cd\u5e76\u751f\u6210\u4e34\u65f6\u8868\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u4e34\u65f6\u8868\u548c\u5168\u5c40\u5b57\u5178\u8fdb\u884c left join\uff0c\u4ee5\u60ac\u7a7a\u7684\u8bcd\u5178\u9879\u4f5c\u4e3a\u65b0 value\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u65b0 value \u8fdb\u884c\u7f16\u7801\u5e76\u63d2\u5165\u5168\u5c40\u5b57\u5178\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u4e8b\u5b9e\u8868\u548c\u66f4\u65b0\u540e\u7684\u5168\u5c40\u5b57\u5178\u8fdb\u884c left join\uff0c\u5c06\u8bcd\u5178\u9879\u66ff\u6362\u4e3a ID\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u91c7\u7528\u8fd9\u79cd\u6784\u5efa\u5168\u5c40\u5b57\u5178\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 Spark \u6216\u8005 MapReduce \u5b9e\u73b0\u5168\u5c40\u5b57\u5178\u7684\u66f4\u65b0\uff0c\u548c\u5bf9\u4e8b\u5b9e\u8868\u4e2d Value \u5217\u7684\u66ff\u6362\u3002\u76f8\u6bd4\u57fa\u4e8e Trie \u6811\u7684\u5168\u5c40\u5b57\u5178\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5206\u5e03\u5f0f\u5316\uff0c\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u5168\u5c40\u5b57\u5178\u590d\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u6784\u5efa\u5168\u5c40\u5b57\u5178\u65f6\uff0c\u4e8b\u5b9e\u8868\u4f1a\u88ab\u8bfb\u53d6\u591a\u6b21\uff0c\u5e76\u4e14\u8fc7\u7a0b\u4e2d\u6709\u4e24\u6b21 Join \u64cd\u4f5c\uff0c\u4f1a\u5bfc\u81f4\u8ba1\u7b97\u5168\u5c40\u5b57\u5178\u4f7f\u7528\u5927\u91cf\u989d\u5916\u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u4e8e-trie-\u6811\u6784\u5efa\u5168\u5c40\u5b57\u5178",children:"\u57fa\u4e8e Trie \u6811\u6784\u5efa\u5168\u5c40\u5b57\u5178"}),"\n",(0,t.jsx)(n.p,{children:"Trie \u6811\u53c8\u53eb\u524d\u7f00\u6811\u6216\u5b57\u5178\u6811\u3002Trie \u6811\u4e2d\u8282\u70b9\u7684\u540e\u4ee3\u5b58\u5728\u5171\u540c\u7684\u524d\u7f00\uff0c\u7cfb\u7edf\u53ef\u4ee5\u5229\u7528\u5b57\u7b26\u4e32\u7684\u516c\u5171\u524d\u7f00\u6765\u51cf\u5c11\u67e5\u8be2\u65f6\u95f4\uff0c\u4ece\u800c\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11\u5b57\u7b26\u4e32\u6bd4\u8f83\u3002\u56e0\u6b64\uff0c\u57fa\u4e8e Trie \u6811\u6784\u5efa\u5168\u5c40\u5b57\u5178\u7684\u65b9\u5f0f\u9002\u5408\u7528\u4e8e\u5b9e\u73b0\u5b57\u5178\u7f16\u7801\u3002\u4f46\u57fa\u4e8e Trie \u6811\u7684\u5168\u5c40\u5b57\u5178\u5b9e\u73b0\u96be\u4ee5\u5206\u5e03\u5f0f\u5316\uff0c\u5728\u6570\u636e\u91cf\u6bd4\u8f83\u5927\u7684\u65f6\u5019\u4f1a\u4ea7\u751f\u6027\u80fd\u74f6\u9888\u3002"})]})}const o=function(i={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),i.components);return n?(0,t.jsx)(n,Object.assign({},i,{children:(0,t.jsx)(h,i)})):h(i)}},87390:(i,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/6.1.2-2-6a82bd242b24c4e2c7a406aa3c1cfa89.png"},11151:(i,n,e)=>{e.d(n,{Zo:()=>a,ah:()=>r});var t=e(67294);const s=t.createContext({});function r(i){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof i?i(n):{...n,...i}),[n,i])}const c={};function a({components:i,children:n,disableParentContext:e}){let a;return a=e?"function"==typeof i?i({}):i||c:r(i),t.createElement(s.Provider,{value:a},n)}}}]);