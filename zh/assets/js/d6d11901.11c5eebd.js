"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78919],{30565:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>A,toc:()=>t});var i=s(85893),d=s(11151);const l={displayed_sidebar:"Chinese"},r="\u4e3b\u952e\u6a21\u578b",A={id:"table_design/table_types/primary_key_table",title:"\u4e3b\u952e\u6a21\u578b",description:"\u4e3b\u952e\u6a21\u578b\u652f\u6301\u5206\u522b\u5b9a\u4e49\u4e3b\u952e\u548c\u6392\u5e8f\u952e\u3002\u6570\u636e\u5bfc\u5165\u81f3\u4e3b\u952e\u6a21\u578b\u7684\u8868\u65f6\u5148\u6309\u7167\u6392\u5e8f\u952e\u6392\u5e8f\u540e\u5b58\u50a8\u3002\u67e5\u8be2\u65f6\u8fd4\u56de\u4e3b\u952e\u76f8\u540c\u7684\u4e00\u7ec4\u6570\u636e\u4e2d\u7684\u6700\u65b0\u6570\u636e\u3002\u76f8\u5bf9\u4e8e\u66f4\u65b0\u6a21\u578b\uff0c\u4e3b\u952e\u6a21\u578b\u5728\u67e5\u8be2\u65f6\u4e0d\u9700\u8981\u6267\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u5e76\u4e14\u652f\u6301\u8c13\u8bcd\u548c\u7d22\u5f15\u4e0b\u63a8\uff0c\u80fd\u591f\u5728\u652f\u6301\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u7b49\u573a\u666f\u7684\u540c\u65f6\uff0c\u63d0\u4f9b\u9ad8\u6548\u67e5\u8be2\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/table_design/table_types/primary_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/primary_key_table",permalink:"/doc/zh/docs/table_design/table_types/primary_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/table_types/primary_key_table.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u66f4\u65b0\u6a21\u578b",permalink:"/doc/zh/docs/table_design/table_types/unique_key_table"},next:{title:"\u6570\u636e\u5206\u5e03",permalink:"/doc/zh/docs/table_design/Data_distribution"}},c={},t=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function a(n){const e=Object.assign({h1:"h1",p:"p",strong:"strong",blockquote:"blockquote",ul:"ul",li:"li",h2:"h2",a:"a",img:"img",code:"code",pre:"pre"},(0,d.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u4e3b\u952e\u6a21\u578b",children:"\u4e3b\u952e\u6a21\u578b"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e3b\u952e\u6a21\u578b\u652f\u6301\u5206\u522b\u5b9a\u4e49\u4e3b\u952e\u548c\u6392\u5e8f\u952e\u3002\u6570\u636e\u5bfc\u5165\u81f3\u4e3b\u952e\u6a21\u578b\u7684\u8868\u65f6\u5148\u6309\u7167\u6392\u5e8f\u952e\u6392\u5e8f\u540e\u5b58\u50a8\u3002\u67e5\u8be2\u65f6\u8fd4\u56de\u4e3b\u952e\u76f8\u540c\u7684\u4e00\u7ec4\u6570\u636e\u4e2d\u7684\u6700\u65b0\u6570\u636e\u3002\u76f8\u5bf9\u4e8e\u66f4\u65b0\u6a21\u578b\uff0c\u4e3b\u952e\u6a21\u578b\u5728\u67e5\u8be2\u65f6\u4e0d\u9700\u8981\u6267\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u5e76\u4e14\u652f\u6301\u8c13\u8bcd\u548c\u7d22\u5f15\u4e0b\u63a8\uff0c\u80fd\u591f\u5728\u652f\u6301",(0,i.jsx)(e.strong,{children:"\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0"}),"\u7b49\u573a\u666f\u7684\u540c\u65f6\uff0c\u63d0\u4f9b\u9ad8\u6548\u67e5\u8be2\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"3.0 \u7248\u672c\u4e4b\u524d\uff0c\u4e3b\u952e\u6a21\u578b\u4e0d\u652f\u6301\u5206\u522b\u5b9a\u4e49\u4e3b\u952e\u548c\u6392\u5e8f\u952e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u81ea 3.1 \u7248\u672c\u8d77\uff0c\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u652f\u6301\u521b\u5efa\u4e3b\u952e\u6a21\u578b\u8868\uff0c\u4f46\u662f\u4e0d\u652f\u6301\u4e3b\u952e\u6a21\u578b\u8868\u5f00\u542f\u6301\u4e45\u5316\u7d22\u5f15\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3b\u952e\u6a21\u578b\u9002\u7528\u4e8e\u5b9e\u65f6\u548c\u9891\u7e41\u66f4\u65b0\u7684\u573a\u666f\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5b9e\u65f6\u5bf9\u63a5\u4e8b\u52a1\u578b\u6570\u636e\u81f3 StarRocks"}),"\u3002\u4e8b\u52a1\u578b\u6570\u636e\u5e93\u4e2d\uff0c\u9664\u4e86\u63d2\u5165\u6570\u636e\u5916\uff0c\u4e00\u822c\u8fd8\u4f1a\u6d89\u53ca\u8f83\u591a\u66f4\u65b0\u548c\u5220\u9664\u6570\u636e\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64\u4e8b\u52a1\u578b\u6570\u636e\u5e93\u7684\u6570\u636e\u540c\u6b65\u81f3 StarRocks \u65f6\uff0c\u5efa\u8bae\u4f7f\u7528\u4e3b\u952e\u6a21\u578b\u3002",(0,i.jsx)(e.a,{href:"/doc/zh/docs/loading/Flink_cdc_load",children:"\u901a\u8fc7 Flink-CDC \u7b49\u5de5\u5177\u76f4\u63a5\u5bf9\u63a5 TP \u7684 Binlog"}),"\uff0c\u5b9e\u65f6\u540c\u6b65\u589e\u5220\u6539\u7684\u6570\u636e\u81f3\u4e3b\u952e\u6a21\u578b\uff0c\u53ef\u4ee5\u7b80\u5316\u6570\u636e\u540c\u6b65\u6d41\u7a0b\uff0c\u5e76\u4e14\u76f8\u5bf9\u4e8e Merge-On-Read \u7b56\u7565\u7684\u66f4\u65b0\u6a21\u578b\uff0c\u67e5\u8be2\u6027\u80fd\u80fd\u591f\u63d0\u5347 3~10 \u500d\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5229\u7528\u90e8\u5206\u5217\u66f4\u65b0\u8f7b\u677e\u5b9e\u73b0\u591a\u6d41 JOIN"}),"\u3002\u5728\u7528\u6237\u753b\u50cf\u7b49\u5206\u6790\u573a\u666f\u4e2d\uff0c\u4e00\u822c\u4f1a\u91c7\u7528\u5927\u5bbd\u8868\u65b9\u5f0f\u6765\u63d0\u5347\u591a\u7ef4\u5206\u6790\u7684\u6027\u80fd\uff0c\u540c\u65f6\u7b80\u5316\u6570\u636e\u5206\u6790\u5e08\u7684\u4f7f\u7528\u6a21\u578b\u3002\u800c\u8fd9\u79cd\u573a\u666f\u4e2d\u7684\u4e0a\u6e38\u6570\u636e\uff0c\u5f80\u5f80\u53ef\u80fd\u6765\u81ea\u4e8e\u591a\u4e2a\u4e0d\u540c\u4e1a\u52a1\uff08\u6bd4\u5982\u6765\u81ea\u8d2d\u7269\u6d88\u8d39\u4e1a\u52a1\u3001\u5feb\u9012\u4e1a\u52a1\u3001\u94f6\u884c\u4e1a\u52a1\u7b49\uff09\u6216\u7cfb\u7edf\uff08\u6bd4\u5982\u8ba1\u7b97\u7528\u6237\u4e0d\u540c\u6807\u7b7e\u5c5e\u6027\u7684\u673a\u5668\u5b66\u4e60\u7cfb\u7edf\uff09\uff0c\u4e3b\u952e\u6a21\u578b\u7684\u90e8\u5206\u5217\u66f4\u65b0\u529f\u80fd\u5c31\u5f88\u597d\u5730\u6ee1\u8db3\u8fd9\u79cd\u9700\u6c42\uff0c\u4e0d\u540c\u4e1a\u52a1\u76f4\u63a5\u5404\u81ea\u6309\u9700\u66f4\u65b0\u4e0e\u4e1a\u52a1\u76f8\u5173\u7684\u5217\u5373\u53ef\uff0c\u5e76\u4e14\u7ee7\u7eed\u4eab\u53d7\u4e3b\u952e\u6a21\u578b\u7684\u5b9e\u65f6\u540c\u6b65\u589e\u5220\u6539\u6570\u636e\u53ca\u9ad8\u6548\u7684\u67e5\u8be2\u6027\u80fd\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u5f00\u542f\u6301\u4e45\u5316\u7d22\u5f15\uff0c\u4e3b\u952e\u6a21\u578b\u5927\u5927\u964d\u4f4e\u4e86\u4e3b\u952e\u7d22\u5f15\u5bf9\u5185\u5b58\u7684\u5360\u7528\u3002\u56e0\u4e3a\u5bfc\u5165\u65f6\u5c11\u90e8\u5206\u4e3b\u952e\u7d22\u5f15\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u5927\u90e8\u5206\u4e3b\u952e\u7d22\u5f15\u5b58\u5728\u78c1\u76d8\u4e2d\u3002",(0,i.jsx)(e.strong,{children:"\u5355\u6761\u4e3b\u952e\u7f16\u7801\u540e\u7684\u6700\u5927\u957f\u5ea6\u4e3a 128 \u5b57\u8282"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u4e0d\u5f00\u542f\u6301\u4e45\u5316\u7d22\u5f15\uff0c\u4e3b\u952e\u6a21\u578b\u9002\u7528\u4e8e\u4e3b\u952e\u5360\u7528\u7a7a\u95f4\u76f8\u5bf9\u53ef\u63a7\u7684\u573a\u666f\uff0c\u56e0\u4e3a\u5bfc\u5165\u65f6\u5c06\u4e3b\u952e\u7d22\u5f15\u52a0\u8f7d\u81f3\u5185\u5b58\u4e2d\u3002",(0,i.jsx)(e.strong,{children:"\u5355\u6761\u4e3b\u952e\u7f16\u7801\u540e\u7684\u6700\u5927\u957f\u5ea6\u548c\u5185\u5b58\u5360\u7528\u4e0a\u9650\u4e3a 128 \u5b57\u8282"}),"\u3002\n\u5982\u4e0b\u4e24\u4e2a\u573a\u666f\u4e2d\uff0c\u4e3b\u952e\u5360\u7528\u7a7a\u95f4\u76f8\u5bf9\u53ef\u63a7\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6570\u636e\u6709\u51b7\u70ed\u7279\u5f81"}),"\uff0c\u5373\u6700\u8fd1\u51e0\u5929\u7684\u70ed\u6570\u636e\u624d\u7ecf\u5e38\u88ab\u4fee\u6539\uff0c\u8001\u7684\u51b7\u6570\u636e\u5f88\u5c11\u88ab\u4fee\u6539\u3002\u4f8b\u5982\uff0cMySQL\u8ba2\u5355\u8868\u5b9e\u65f6\u540c\u6b65\u5230 StarRocks \u4e2d\u63d0\u4f9b\u5206\u6790\u67e5\u8be2\u3002\u5176\u4e2d\uff0c\u6570\u636e\u6309\u5929\u5206\u533a\uff0c\u5bf9\u8ba2\u5355\u7684\u4fee\u6539\u96c6\u4e2d\u5728\u6700\u8fd1\u51e0\u5929\u65b0\u521b\u5efa\u7684\u8ba2\u5355\uff0c\u8001\u7684\u8ba2\u5355\u5b8c\u6210\u540e\u5c31\u4e0d\u518d\u66f4\u65b0\uff0c\u56e0\u6b64\u5bfc\u5165\u65f6\u5176\u4e3b\u952e\u7d22\u5f15\u5c31\u4e0d\u4f1a\u52a0\u8f7d\uff0c\u4e5f\u5c31\u4e0d\u4f1a\u5360\u7528\u5185\u5b58\uff0c\u5185\u5b58\u4e2d\u4ec5\u4f1a\u52a0\u8f7d\u6700\u8fd1\u51e0\u5929\u7684\u7d22\u5f15\u3002",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.img,{alt:"\u4e3b\u952e1",src:s(8655).Z+"",width:"304",height:"483"})]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u56fe\u6240\u793a\uff0c\u6570\u636e\u6309\u5929\u5206\u533a\uff0c\u6700\u65b0\u4e24\u4e2a\u5206\u533a\u7684\u6570\u636e\u66f4\u65b0\u6bd4\u8f83\u9891\u7e41\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5927\u5bbd\u8868"}),"\uff08\u6570\u767e\u5230\u6570\u5343\u5217\uff09\u3002\u4e3b\u952e\u53ea\u5360\u6574\u4e2a\u6570\u636e\u7684\u5f88\u5c0f\u4e00\u90e8\u5206\uff0c\u5176\u5185\u5b58\u5f00\u9500\u6bd4\u8f83\u4f4e\u3002\u6bd4\u5982\u7528\u6237\u72b6\u6001\u548c\u753b\u50cf\u8868\uff0c\u867d\u7136\u5217\u975e\u5e38\u591a\uff0c\u4f46\u603b\u7684\u7528\u6237\u6570\u4e0d\u5927\uff08\u5343\u4e07\u81f3\u4ebf\u7ea7\u522b\uff09\uff0c\u4e3b\u952e\u7d22\u5f15\u5185\u5b58\u5360\u7528\u76f8\u5bf9\u53ef\u63a7\u3002\n",(0,i.jsx)(e.img,{alt:"\u4e3b\u952e2",src:s(15478).Z+"",width:"620",height:"82"})]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u56fe\u6240\u793a\uff0c\u5927\u5bbd\u8868\u4e2d\u4e3b\u952e\u53ea\u5360\u4e00\u5c0f\u90e8\u5206\uff0c\u4e14\u6570\u636e\u884c\u6570\u4e0d\u591a\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3b\u952e\u6a21\u578b\u662f\u7531 StarRocks \u5168\u65b0\u8bbe\u8ba1\u5f00\u53d1\u7684\u5b58\u50a8\u5f15\u64ce\u652f\u6491\u3002\u76f8\u6bd4\u4e8e\u66f4\u65b0\u6a21\u578b\uff0c\u4e3b\u952e\u6a21\u578b\u7684\u5143\u6570\u636e\u7ec4\u7ec7\u3001\u8bfb\u53d6\u3001\u5199\u5165\u65b9\u5f0f\u5b8c\u5168\u4e0d\u540c\uff0c\u4e0d\u9700\u8981\u6267\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u5e76\u4e14\u652f\u6301\u8c13\u8bcd\u548c\u7d22\u5f15\u4e0b\u63a8\uff0c\u6781\u5927\u5730\u63d0\u9ad8\u4e86\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u66f4\u65b0\u6a21\u578b\u6574\u4f53\u4e0a\u91c7\u7528\u4e86 Merge-On-Read \u7684\u7b56\u7565\u3002\u867d\u7136\u5199\u5165\u65f6\u5904\u7406\u7b80\u5355\u9ad8\u6548\uff0c\u4f46\u662f\u67e5\u8be2\u65f6\u9700\u8981\u5728\u7ebf\u805a\u5408\u591a\u7248\u672c\u3002\u5e76\u4e14\u7531\u4e8e Merge \u7b97\u5b50\u7684\u5b58\u5728\uff0c\u8c13\u8bcd\u548c\u7d22\u5f15\u65e0\u6cd5\u4e0b\u63a8\uff0c\u4e25\u91cd\u5f71\u54cd\u4e86\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u800c\u4e3b\u952e\u6a21\u578b\u91c7\u7528\u4e86 Delete+Insert \u7684\u7b56\u7565\uff0c\u4fdd\u8bc1\u540c\u4e00\u4e2a\u4e3b\u952e\u4e0b\u4ec5\u5b58\u5728\u4e00\u6761\u8bb0\u5f55\uff0c\u8fd9\u6837\u5c31\u5b8c\u5168\u907f\u514d\u4e86 Merge \u64cd\u4f5c\u3002\u5177\u4f53\u5b9e\u73b0\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"StarRocks \u6536\u5230\u5bf9\u67d0\u8bb0\u5f55\u7684\u66f4\u65b0\u64cd\u4f5c\u65f6\uff0c\u4f1a\u901a\u8fc7\u4e3b\u952e\u7d22\u5f15\u627e\u5230\u8be5\u6761\u8bb0\u5f55\u7684\u4f4d\u7f6e\uff0c\u5e76\u5bf9\u5176\u6807\u8bb0\u4e3a\u5220\u9664\uff0c\u518d\u63d2\u5165\u4e00\u6761\u65b0\u7684\u8bb0\u5f55\u3002\u76f8\u5f53\u4e8e\u628a Update \u6539\u5199\u4e3a Delete+Insert\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"StarRocks \u6536\u5230\u5bf9\u67d0\u8bb0\u5f55\u7684\u5220\u9664\u64cd\u4f5c\u65f6\uff0c\u4f1a\u901a\u8fc7\u4e3b\u952e\u7d22\u5f15\u627e\u5230\u8be5\u6761\u8bb0\u5f55\u7684\u4f4d\u7f6e\uff0c\u5bf9\u5176\u6807\u8bb0\u4e3a\u5220\u9664\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u6837\uff0c\u67e5\u8be2\u65f6\u4e0d\u9700\u8981\u6267\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u4e0d\u5f71\u54cd\u8c13\u8bcd\u548c\u7d22\u5f15\u7684\u4e0b\u63a8\uff0c\u4fdd\u8bc1\u4e86\u67e5\u8be2\u7684\u9ad8\u6548\u6267\u884c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f8b\u5982\uff0c\u9700\u8981\u6309\u5929\u5b9e\u65f6\u5206\u6790\u8ba2\u5355\uff0c\u5219\u53ef\u4ee5\u5c06\u65f6\u95f4 ",(0,i.jsx)(e.code,{children:"dt"}),"\u3001\u8ba2\u5355\u7f16\u53f7 ",(0,i.jsx)(e.code,{children:"order_id"})," \u4f5c\u4e3a\u4e3b\u952e\uff0c\u5176\u4f59\u5217\u4e3a\u6307\u6807\u5217\u3002\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"create table orders (\n    dt date NOT NULL,\n    order_id bigint NOT NULL,\n    user_id int NOT NULL,\n    merchant_id int NOT NULL,\n    good_id int NOT NULL,\n    good_name string NOT NULL,\n    price int NOT NULL,\n    cnt int NOT NULL,\n    revenue int NOT NULL,\n    state tinyint NOT NULL\n) PRIMARY KEY (dt, order_id)\nPARTITION BY RANGE(`dt`) (\n    PARTITION p20210820 VALUES [('2021-08-20'), ('2021-08-21')),\n    PARTITION p20210821 VALUES [('2021-08-21'), ('2021-08-22')),\n    PARTITION p20210929 VALUES [('2021-09-29'), ('2021-09-30')),\n    PARTITION p20210930 VALUES [('2021-09-30'), ('2021-10-01'))\n) DISTRIBUTED BY HASH(order_id)\nPROPERTIES (\n    \"replication_num\" = \"3\",\n    \"enable_persistent_index\" = \"true\"\n);\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5efa\u8868\u65f6\u5fc5\u987b\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"DISTRIBUTED BY HASH"})," \u5b50\u53e5\u6307\u5b9a\u5206\u6876\u952e\uff0c\u5426\u5219\u5efa\u8868\u5931\u8d25\u3002\u5206\u6876\u952e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,i.jsx)(e.a,{href:"/doc/zh/docs/table_design/Data_distribution#%E5%88%86%E6%A1%B6",children:"\u5206\u6876"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,i.jsx)(e.a,{href:"/doc/zh/docs/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f8b\u5982\uff0c\u9700\u8981\u6309\u5730\u57df\u3001\u6700\u8fd1\u6d3b\u8dc3\u65f6\u95f4\u5b9e\u65f6\u5206\u6790\u7528\u6237\u60c5\u51b5\uff0c\u5219\u53ef\u4ee5\u5c06\u8868\u793a\u7528\u6237 ID \u7684 ",(0,i.jsx)(e.code,{children:"user_id"})," \u5217\u4f5c\u4e3a\u4e3b\u952e\uff0c\u8868\u793a\u5730\u57df\u7684 ",(0,i.jsx)(e.code,{children:"address"})," \u5217\u548c\u8868\u793a\u6700\u8fd1\u6d3b\u8dc3\u65f6\u95f4\u7684 ",(0,i.jsx)(e.code,{children:"last_active"})," \u5217\u4f5c\u4e3a\u6392\u5e8f\u952e\u3002\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:'create table users (\n    user_id bigint NOT NULL,\n    name string NOT NULL,\n    email string NULL,\n    address string NULL,\n    age tinyint NULL,\n    sex tinyint NULL,\n    last_active datetime,\n    property0 tinyint NOT NULL,\n    property1 tinyint NOT NULL,\n    property2 tinyint NOT NULL,\n    property3 tinyint NOT NULL\n) PRIMARY KEY (user_id)\nDISTRIBUTED BY HASH(user_id)\nORDER BY(`address`,`last_active`)\nPROPERTIES (\n    "replication_num" = "3",\n    "enable_persistent_index" = "true"\n);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e3b\u952e\u76f8\u5173\u7684\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\uff0c\u4e3b\u952e\u5fc5\u987b\u5b9a\u4e49\u5728\u5176\u4ed6\u5217\u4e4b\u524d\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u4e3b\u952e\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"PRIMARY KEY"})," \u5b9a\u4e49\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4e3b\u952e\u5fc5\u987b\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u4e14\u5217\u7684\u503c\u4e0d\u4f1a\u4fee\u6539\u3002\u672c\u793a\u4f8b\u4e2d\u4e3b\u952e\u4e3a ",(0,i.jsx)(e.code,{children:"dt"}),"\u3001",(0,i.jsx)(e.code,{children:"order_id"}),"\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u4e3b\u952e\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\uff1aBOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001DATE\u3001DATETIME\u3001VARCHAR/STRING\u3002\u5e76\u4e14\u4e0d\u5141\u8bb8\u4e3a NULL\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5206\u533a\u5217\u548c\u5206\u6876\u5217\u5fc5\u987b\u5728\u4e3b\u952e\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"enable_persistent_index"}),"\uff1a\u662f\u5426\u6301\u4e45\u5316\u4e3b\u952e\u7d22\u5f15\uff0c\u540c\u65f6\u4f7f\u7528\u78c1\u76d8\u548c\u5185\u5b58\u5b58\u50a8\u4e3b\u952e\u7d22\u5f15\uff0c\u907f\u514d\u4e3b\u952e\u7d22\u5f15\u5360\u7528\u8fc7\u5927\u5185\u5b58\u7a7a\u95f4\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6301\u4e45\u5316\u4e3b\u952e\u7d22\u5f15\u540e\uff0c\u4e3b\u952e\u7d22\u5f15\u6240\u5360\u5185\u5b58\u4e3a\u4e4b\u524d\u7684 1/10\u3002\u60a8\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\uff0c\u5728",(0,i.jsx)(e.code,{children:"PROPERTIES"}),"\u4e2d\u914d\u7f6e\u8be5\u53c2\u6570\uff0c\u53d6\u503c\u8303\u56f4\u4e3a ",(0,i.jsx)(e.code,{children:"true"})," \u6216\u8005 ",(0,i.jsx)(e.code,{children:"false"}),"\uff08\u9ed8\u8ba4\u503c\uff09\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u81ea 2.3.0 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u914d\u7f6e\u8be5\u53c2\u6570\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u78c1\u76d8\u4e3a\u56fa\u6001\u786c\u76d8 SSD\uff0c\u5219\u5efa\u8bae\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.code,{children:"true"}),"\u3002\u5982\u679c\u78c1\u76d8\u4e3a\u673a\u68b0\u786c\u76d8 HDD\uff0c\u5e76\u4e14\u5bfc\u5165\u9891\u7387\u4e0d\u9ad8\uff0c\u5219\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.code,{children:"true"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5efa\u8868\u540e\uff0c\u5982\u679c\u60a8\u9700\u8981\u4fee\u6539\u8be5\u53c2\u6570\uff0c\u8bf7\u53c2\u89c1 ALTER TABLE ",(0,i.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/ALTER_TABLE#%E4%BF%AE%E6%94%B9%E8%A1%A8%E7%9A%84%E5%B1%9E%E6%80%A7",children:"\u4fee\u6539\u8868\u7684\u5c5e\u6027"})," \u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0d\u652f\u6301\u4e3b\u952e\u6a21\u578b\u8868\u5f00\u542f\u6301\u4e45\u5316\u7d22\u5f15\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u672a\u5f00\u542f\u6301\u4e45\u5316\u7d22\u5f15\uff0c\u5bfc\u5165\u65f6\u4e3b\u952e\u7d22\u5f15\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5360\u7528\u5185\u5b58\u8f83\u591a\u3002\u56e0\u6b64\u5efa\u8bae\u60a8\u9075\u5faa\u5982\u4e0b\u5efa\u8bae\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5408\u7406\u8bbe\u7f6e\u4e3b\u952e\u7684\u5217\u6570\u548c\u957f\u5ea6\u3002\u5efa\u8bae\u4e3b\u952e\u4e3a\u5360\u7528\u5185\u5b58\u7a7a\u95f4\u8f83\u5c11\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982 INT\u3001BIGINT \u7b49\uff0c\u6682\u65f6\u4e0d\u5efa\u8bae\u4e3a VARCHAR\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u5728\u5efa\u8868\u524d\u6839\u636e\u4e3b\u952e\u7684\u6570\u636e\u7c7b\u578b\u548c\u8868\u7684\u884c\u6570\u6765\u9884\u4f30\u4e3b\u952e\u7d22\u5f15\u5360\u7528\u5185\u5b58\u7a7a\u95f4\uff0c\u4ee5\u907f\u514d\u51fa\u73b0\u5185\u5b58\u6ea2\u51fa\u3002\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u4e3b\u952e\u7d22\u5f15\u5360\u7528\u5185\u5b58\u7a7a\u95f4\u7684\u8ba1\u7b97\u65b9\u5f0f\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5047\u8bbe\u5b58\u5728\u4e3b\u952e\u6a21\u578b\uff0c\u4e3b\u952e\u4e3a",(0,i.jsx)(e.code,{children:"dt"}),"\u3001",(0,i.jsx)(e.code,{children:"id"}),"\uff0c\u6570\u636e\u7c7b\u578b\u4e3a DATE\uff084 \u4e2a\u5b57\u8282\uff09\u3001BIGINT\uff088 \u4e2a\u5b57\u8282\uff09\u3002\u5219\u4e3b\u952e\u5360 12 \u4e2a\u5b57\u8282\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5047\u8bbe\u8be5\u8868\u7684\u70ed\u6570\u636e\u6709 1000 \u4e07\u884c\uff0c\u5b58\u50a8\u4e3a\u4e09\u4e2a\u526f\u672c\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u5219\u5185\u5b58\u5360\u7528\u7684\u8ba1\u7b97\u65b9\u5f0f\uff1a",(0,i.jsx)(e.code,{children:"(12 + 9(\u6bcf\u884c\u56fa\u5b9a\u5f00\u9500) ) * 1000W * 3 * 1.5\uff08\u54c8\u5e0c\u8868\u5e73\u5747\u989d\u5916\u5f00\u9500) = 945 M"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"ORDER BY"})," \u5173\u952e\u5b57\u6307\u5b9a\u6392\u5e8f\u952e\uff0c\u53ef\u6307\u5b9a\u4e3a\u4efb\u610f\u5217\u7684\u6392\u5217\u7ec4\u5408\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u6307\u5b9a\u4e86\u6392\u5e8f\u952e\uff0c\u5c31\u6839\u636e\u6392\u5e8f\u952e\u6784\u5efa\u524d\u7f00\u7d22\u5f15\uff1b\u5982\u679c\u6ca1\u6307\u5b9a\u6392\u5e8f\u952e\uff0c\u5c31\u6839\u636e\u4e3b\u952e\u6784\u5efa\u524d\u7f00\u7d22\u5f15\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u652f\u6301\u4f7f\u7528 ALTER TABLE \u8fdb\u884c\u8868\u7ed3\u6784\u53d8\u66f4\uff0c\u4f46\u662f\u5b58\u5728\u5982\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e0d\u652f\u6301\u4fee\u6539\u4e3b\u952e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5bf9\u4e8e\u6392\u5e8f\u952e\uff0c\u652f\u6301\u901a\u8fc7 ALTER TABLE ... ORDER BY ... \u91cd\u65b0\u6307\u5b9a\u6392\u5e8f\u952e\u3002\u4e0d\u652f\u6301\u5220\u9664\u6392\u5e8f\u952e\uff0c\u4e0d\u652f\u6301\u4fee\u6539\u6392\u5e8f\u952e\u4e2d\u5217\u7684\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0d\u652f\u6301\u8c03\u6574\u5217\u987a\u5e8f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u81ea2.3 \u7248\u672c\u8d77\uff0c\u9664\u4e86\u4e3b\u952e\u4e4b\u5916\u7684\u5217\u65b0\u589e\u652f\u6301 BITMAP\u3001HLL \u6570\u636e\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u8868\u65f6\uff0c\u652f\u6301\u4e3a\u9664\u4e86\u4e3b\u952e\u4e4b\u5916\u7684\u5217\u521b\u5efa BITMAP\u3001Bloom Filter \u7b49\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u81ea 2.4 \u7248\u672c\u8d77\uff0c\u652f\u6301\u57fa\u4e8e\u4e3b\u952e\u6a21\u578b\u7684\u8868\u521b\u5efa",(0,i.jsx)(e.a,{href:"/doc/zh/docs/using_starrocks/Materialized_view",children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,i.jsxs)(e.p,{children:["\u5efa\u8868\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5bfc\u5165\u6570\u636e\u81f3\u8868\u4e2d\u3002\u5177\u4f53\u5bfc\u5165\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1",(0,i.jsx)(e.a,{href:"/doc/zh/docs/loading/Loading_intro",children:"\u5bfc\u5165\u603b\u89c8"}),"\u3002\n\u5982\u679c\u9700\u8981\u66f4\u65b0\u4e3b\u952e\u6a21\u578b\u8868\u7684\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(e.a,{href:"/doc/zh/docs/loading/Load_to_Primary_Key_tables",children:"\u5bfc\u5165"}),"\u6216\u6267\u884c DML \u8bed\u53e5\uff08",(0,i.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/UPDATE",children:"UPDATE"})," \u6216 ",(0,i.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/DELETE",children:"DELETE"}),"\uff09\u5b9e\u73b0\uff0c\u5e76\u4e14\u66f4\u65b0\u64cd\u4f5c\u662f\u539f\u5b50\u6027\u7684\u3002"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(a,n)})):a(n)}},8655:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/3.2-1-e82c04cee3654d64c7d24653f952d77a.png"},15478:(n,e,s)=>{s.d(e,{Z:()=>i});const i="data:image/png;base64,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"},11151:(n,e,s)=>{s.d(e,{Zo:()=>A,ah:()=>l});var i=s(67294);const d=i.createContext({});function l(n){const e=i.useContext(d);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function A({components:n,children:e,disableParentContext:s}){let A;return A=s?"function"==typeof n?n({}):n||r:l(n),i.createElement(d.Provider,{value:A},e)}}}]);