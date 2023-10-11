"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42315],{42387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=s(85893),d=s(11151);const r={},i="\u542f\u7528 FQDN \u8bbf\u95ee",c={id:"administration/enable_fqdn",title:"\u542f\u7528 FQDN \u8bbf\u95ee",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u542f\u7528\u57fa\u4e8e\u5b8c\u5168\u9650\u5b9a\u57df\u540d\uff08fully qualified domain name\uff0cFQDN\uff09\u8bbf\u95ee StarRocks \u8282\u70b9\u3002 FQDN \u662f\u6307\u53ef\u4ee5\u5728 Internet \u4e0a\u8bbf\u95ee\u7684\u7279\u5b9a\u5b9e\u4f53\u7684\u5b8c\u6574\u57df\u540d\u3002FQDN \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a\u4e3b\u673a\u540d\u548c\u57df\u540d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/administration/enable_fqdn.md",sourceDirName:"administration",slug:"/administration/enable_fqdn",permalink:"/doc/zh/docs/2.5/administration/enable_fqdn",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/enable_fqdn.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u90e8\u7f72 Broker \u8282\u70b9",permalink:"/doc/zh/docs/2.5/administration/deploy_broker"},next:{title:"\u6587\u4ef6\u7ba1\u7406\u5668",permalink:"/doc/zh/docs/2.5/administration/filemanager"}},h={},o=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u65b0\u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee",id:"\u65b0\u96c6\u7fa4\u542f\u7528-fqdn-\u8bbf\u95ee",level:2},{value:"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee",id:"\u65e7\u96c6\u7fa4\u542f\u7528-fqdn-\u8bbf\u95ee",level:2},{value:"\u4e3a FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee",id:"\u4e3a-fe-\u8282\u70b9\u542f\u7528-fqdn-\u8bbf\u95ee",level:3},{value:"\u4fee\u6539 Follower FE \u8282\u70b9",id:"\u4fee\u6539-follower-fe-\u8282\u70b9",level:4},{value:"\u4fee\u6539 Leader FE \u8282\u70b9",id:"\u4fee\u6539-leader-fe-\u8282\u70b9",level:4},{value:"\u4e3a BE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee",id:"\u4e3a-be-\u8282\u70b9\u542f\u7528-fqdn-\u8bbf\u95ee",level:3},{value:"\u56de\u6eda",id:"\u56de\u6eda",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",a:"a",h3:"h3",blockquote:"blockquote",h4:"h4",ol:"ol"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u542f\u7528-fqdn-\u8bbf\u95ee",children:"\u542f\u7528 FQDN \u8bbf\u95ee"}),"\n",(0,l.jsxs)(n.p,{children:["\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u542f\u7528\u57fa\u4e8e\u5b8c\u5168\u9650\u5b9a\u57df\u540d\uff08fully qualified domain name\uff0cFQDN\uff09\u8bbf\u95ee StarRocks \u8282\u70b9\u3002 FQDN \u662f\u6307\u53ef\u4ee5\u5728 Internet \u4e0a\u8bbf\u95ee\u7684\u7279\u5b9a\u5b9e\u4f53\u7684",(0,l.jsx)(n.strong,{children:"\u5b8c\u6574\u57df\u540d"}),"\u3002FQDN \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a\u4e3b\u673a\u540d\u548c\u57df\u540d\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"StarRocks v2.4 \u4e4b\u524d\u7248\u672c\u4ec5\u652f\u6301\u901a\u8fc7 IP \u5730\u5740\u8bbf\u95ee\u6bcf\u4e2a\u8282\u70b9\u3002\u5373\u4fbf\u4f7f\u7528 FQDN \u6dfb\u52a0\u8282\u70b9\u5230\u96c6\u7fa4\uff0c\u8be5 FQDN \u4ecd\u4f1a\u88ab\u5f3a\u5236\u8f6c\u6362\u4e3a IP \u5730\u5740\u3002\u5982\u679c\u66f4\u6539\u96c6\u7fa4\u4e2d\u67d0\u4e9b\u8282\u70b9\u7684 IP \u5730\u5740\uff0c\u5c06\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u8bbf\u95ee\u8be5\u8282\u70b9\u3002\u5728 v2.4 \u7248\u672c\u4e2d\uff0cStarRocks \u5c06\u6bcf\u4e2a\u8282\u70b9\u4e0e\u5176 IP \u5730\u5740\u89e3\u8026\u3002\u542f\u7528 FQDN \u8bbf\u95ee\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8282\u70b9\u7684 FQDN \u7ba1\u7406\u5bf9\u5e94\u7684\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u9700\u4e3a StarRocks \u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee\uff0c\u8bf7\u786e\u4fdd\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u673a\u5668\u90fd\u5fc5\u987b\u914d\u7f6e\u6709\u4e3b\u673a\u540d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5fc5\u987b\u5728\u96c6\u7fa4\u4e2d\u6bcf\u53f0\u673a\u5668\u7684 ",(0,l.jsx)(n.strong,{children:"/etc/hosts"})," \u6587\u4ef6\u4e2d\u6307\u5b9a\u96c6\u7fa4\u4e2d\u5176\u4ed6\u673a\u5668\u5bf9\u5e94\u7684 IP \u5730\u5740\u548c FQDN\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"/etc/hosts"})," \u6587\u4ef6\u4e2d\u4e0d\u80fd\u6709\u91cd\u590d\u7684 IP \u5730\u5740\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65b0\u96c6\u7fa4\u542f\u7528-fqdn-\u8bbf\u95ee",children:"\u65b0\u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee"}),"\n",(0,l.jsxs)(n.p,{children:["\u65b0\u96c6\u7fa4\u4e2d\u7684 FE \u8282\u70b9\u5728\u542f\u52a8\u65f6\u9ed8\u8ba4\u542f\u7528 IP \u5730\u5740\u8bbf\u95ee\u3002\u5982\u9700\u90e8\u7f72\u542f\u7528 FQDN \u8bbf\u95ee\u7684\u65b0\u96c6\u7fa4\uff0c\u60a8\u53ea\u9700",(0,l.jsx)(n.strong,{children:"\u5728\u521d\u6b21\u542f\u52a8\u96c6\u7fa4\u65f6"}),"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 FE \u8282\u70b9\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Shell",children:"sh bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"--host_type"})," \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u8be5\u8282\u70b9\u7684\u8bbf\u95ee\u65b9\u5f0f\u3002\u6709\u6548\u503c\u5305\u62ec ",(0,l.jsx)(n.code,{children:"FQDN"})," \u548c ",(0,l.jsx)(n.code,{children:"IP"}),"\u3002\u53ea\u9700\u5728\u7b2c\u4e00\u6b21\u542f\u52a8\u8282\u70b9\u65f6\u6307\u5b9a\u8be5\u5c5e\u6027\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6709\u5173\u5982\u4f55\u90e8\u7f72 StarRocks \u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/2.5/deployment/deploy_manually",children:"\u624b\u52a8\u90e8\u7f72 StarRocks"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u65b0\u96c6\u7fa4\u4e2d\u7684 BE \u8282\u70b9\u5c06\u901a\u8fc7 FE \u5143\u6570\u636e\u4e2d\u5b9a\u4e49\u7684 ",(0,l.jsx)(n.code,{children:"BE Address"})," \u5224\u5b9a\u4f7f\u7528 FQDN \u6216 IP \u5730\u5740\u6807\u8bc6\u81ea\u8eab\uff0c\u6240\u4ee5\u60a8\u65e0\u9700\u5728\u542f\u52a8 BE \u8282\u70b9\u65f6\u6307\u5b9a ",(0,l.jsx)(n.code,{children:"--host_type"}),"\u3002\u4f8b\u5982\uff0c\u5982\u679c ",(0,l.jsx)(n.code,{children:"BE Address"})," \u8bb0\u5f55\u4e86\u4e00\u4e2a BE \u8282\u70b9\u7684 FQDN\uff0c\u5219\u8be5 BE \u8282\u70b9\u4f7f\u7528\u8fd9\u4e2a FQDN \u6765\u6807\u8bc6\u81ea\u8eab\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65e7\u96c6\u7fa4\u542f\u7528-fqdn-\u8bbf\u95ee",children:"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u9700\u4e3a\u65e7\u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee\uff0c\u60a8\u9996\u5148\u9700\u8981\u5c06\u96c6\u7fa4 ",(0,l.jsx)(n.strong,{children:"\u5347\u7ea7"})," \u81f3v2.4.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4e3a-fe-\u8282\u70b9\u542f\u7528-fqdn-\u8bbf\u95ee",children:"\u4e3a FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4e3a FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u65f6\uff0c\u60a8\u9700\u8981\u5148\u4fee\u6539\u6240\u6709 Follower FE \u8282\u70b9\uff0c\u6700\u540e\u4fee\u6539 Leader FE \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bf7\u60a8\u786e\u4fdd\u96c6\u7fa4\u4e2d\u81f3\u5c11\u6709 3 \u4e2a Follower FE \u8282\u70b9\uff0c\u5426\u5219\u65e0\u6cd5\u4e3a FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4fee\u6539-follower-fe-\u8282\u70b9",children:"\u4fee\u6539 Follower FE \u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4fee\u6539 Leader FE \u8282\u70b9\u524d\uff0c\u8bf7\u52a1\u5fc5\u9996\u5148\u4fee\u6539\u6240\u6709 Follower FE \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fdb\u5165 FE \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62 FE \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Shell",children:"sh bin/stop_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u67e5\u770b\u8be5 FE \u8282\u70b9\u7684 ",(0,l.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u76f4\u81f3\u53d8\u4e3a ",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u5c06\u8be5 FE \u8282\u70b9\u7684 IP \u5730\u5740\u53d8\u66f4\u4e3a FQDN\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY FRONTEND HOST "<fe_ip>" TO "<fe_hostname>";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u8be5 FE \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Shell",children:"sh bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"--host_type"})," \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u8be5\u8282\u70b9\u7684\u8bbf\u95ee\u65b9\u5f0f\u3002\u6709\u6548\u503c\u5305\u62ec ",(0,l.jsx)(n.code,{children:"FQDN"})," \u548c ",(0,l.jsx)(n.code,{children:"IP"}),"\u3002\u60a8\u53ea\u9700\u5728\u4fee\u6539\u540e\u7b2c\u4e00\u6b21\u542f\u52a8\u8282\u70b9\u65f6\u6307\u5b9a\u8be5\u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67e5\u770b\u8be5 FE \u8282\u70b9\u7684 ",(0,l.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u76f4\u81f3\u53d8\u4e3a ",(0,l.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728\u5f53\u524d FE \u8282\u70b9\u7684 ",(0,l.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u4e3a ",(0,l.jsx)(n.code,{children:"true"})," \u540e\uff0c\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u4f9d\u6b21\u4e3a\u5176\u4ed6 Follower FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4fee\u6539-leader-fe-\u8282\u70b9",children:"\u4fee\u6539 Leader FE \u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4fee\u6539\u5b8c\u6240\u6709 Follower FE \u8282\u70b9\u5e76\u6210\u529f\u91cd\u542f\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4e3a Leader FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u4e86\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Leader FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u4e4b\u524d\uff0c\u7528\u4e8e\u6dfb\u52a0\u65b0\u8282\u70b9\u7684 FQDN \u4ecd\u4f1a\u88ab\u8f6c\u6362\u4e3a IP \u5730\u5740\u3002\u5728\u96c6\u7fa4\u91cd\u65b0\u9009\u51fa\u542f\u7528\u4e86 FQDN \u8bbf\u95ee\u7684 Leader FE \u8282\u70b9\u540e\uff0c\u6dfb\u52a0\u65b0\u8282\u70b9\u7684 FQDN \u5c06\u4e0d\u4f1a\u88ab\u8f6c\u6362\u4e3a IP \u5730\u5740\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fdb\u5165 Leader FE \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Shell",children:"sh bin/stop_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u68c0\u67e5\u96c6\u7fa4\u662f\u5426\u9009\u4e3e\u51fa\u65b0\u7684 Leader FE \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4efb\u4f55 ",(0,l.jsx)(n.code,{children:"Alive"})," \u548c ",(0,l.jsx)(n.code,{children:"Role"})," \u4e3a ",(0,l.jsx)(n.code,{children:"LEADER"})," \u7684 FE \u8282\u70b9\u5373\u4e3a\u6b63\u5e38\u8fd0\u884c\u7684 Leader FE \u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u5c06\u8be5 FE \u8282\u70b9\u7684 IP \u5730\u5740\u53d8\u66f4\u4e3a FQDN\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY FRONTEND HOST "<fe_ip>" TO "<fe_hostname>";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u8be5 FE \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Shell",children:"sh bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"--host_type"})," \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u8be5\u8282\u70b9\u7684\u8bbf\u95ee\u65b9\u5f0f\u3002\u6709\u6548\u503c\u5305\u62ec ",(0,l.jsx)(n.code,{children:"FQDN"})," \u548c ",(0,l.jsx)(n.code,{children:"IP"}),"\u3002\u60a8\u53ea\u9700\u5728\u4fee\u6539\u540e\u7b2c\u4e00\u6b21\u542f\u52a8\u8282\u70b9\u65f6\u6307\u5b9a\u8be5\u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67e5\u770b\u8be5 FE \u8282\u70b9\u7684 ",(0,l.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u76f4\u81f3\u53d8\u4e3a ",(0,l.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c ",(0,l.jsx)(n.code,{children:"Alive"})," \u72b6\u6001\u53d8\u4e3a ",(0,l.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u5f53\u524d FE \u8282\u70b9\u88ab\u6210\u529f\u4fee\u6539\u5e76\u4f5c\u4e3a Follower FE \u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4e3a-be-\u8282\u70b9\u542f\u7528-fqdn-\u8bbf\u95ee",children:"\u4e3a BE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u4e3a BE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY BACKEND HOST "<be_ip>" TO "<be_hostname>";\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a BE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u540e\uff0c\u60a8\u65e0\u9700\u91cd\u542f\u8be5 BE \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u56de\u6eda",children:"\u56de\u6eda"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u9700\u5c06\u5df2\u542f\u7528 FQDN \u8bbf\u95ee\u7684 StarRocks \u96c6\u7fa4\u56de\u6eda\u5230\u4e0d\u652f\u6301 FQDN \u8bbf\u95ee\u7684\u65e9\u671f\u7248\u672c\uff0c\u60a8\u5fc5\u987b\u9996\u5148\u5c06\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u4fee\u6539\u4e3a IP \u5730\u5740\u8bbf\u95ee\u3002 \u60a8\u53ef\u4ee5\u53c2\u8003",(0,l.jsx)(n.a,{href:"#%E6%97%A7%E9%9B%86%E7%BE%A4%E5%90%AF%E7%94%A8-fqdn-%E8%AE%BF%E9%97%AE",children:"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN \u8bbf\u95ee"}),"\u4e2d\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5e76\u5c06\u5176\u4e2d\u7684 SQL \u547d\u4ee4\u66f4\u6539\u4e3a\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e3a FE \u8282\u70b9\u542f\u7528 IP \u5730\u5740\u8bbf\u95ee\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY FRONTEND HOST "<fe_hostname>" TO "<fe_ip>";\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e3a BE \u8282\u70b9\u542f\u7528 IP \u5730\u5740\u8bbf\u95ee\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY BACKEND HOST "<be_hostname>" TO "<be_ip>";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u60a8\u9700\u8981\u91cd\u542f\u96c6\u7fa4\u4f7f\u4fee\u6539\u751f\u6548\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u95ee\uff1a\u5728\u4e3a FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u65f6\u8fd4\u56de\u9519\u8bef\uff1a\u201crequired 1 replica. But none were active with this master\u201d\u3002\u8be5\u5982\u4f55\u5904\u7406\uff1f"})}),"\n",(0,l.jsx)(n.p,{children:"\u7b54\uff1a\u8bf7\u786e\u4fdd\u96c6\u7fa4\u4e2d\u81f3\u5c11\u6709 3 \u4e2a Follower FE \u8282\u70b9\uff0c\u5426\u5219\u65e0\u6cd5\u4e3a FE \u8282\u70b9\u542f\u7528 FQDN \u8bbf\u95ee\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u95ee\uff1a\u662f\u5426\u53ef\u4ee5\u901a\u8fc7 IP \u5730\u5740\u5c06\u65b0\u8282\u70b9\u6dfb\u52a0\u5230\u542f\u7528\u4e86 FQDN \u8bbf\u95ee\u7684\u96c6\u7fa4\uff1f"})}),"\n",(0,l.jsx)(n.p,{children:"\u7b54\uff1a\u53ef\u4ee5\u3002"})]})}const t=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var l=s(67294);const d=l.createContext({});function r(e){const n=l.useContext(d);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:r(e),l.createElement(d.Provider,{value:c},n)}}}]);