"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76110],{88754:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=s(85893),t=s(11151);const i={},c="\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",l={id:"faq/Deploy_faq",title:"\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",description:"\u672c\u9875\u5217\u4e3e\u4e86\u90e8\u7f72 StarRocks \u65f6\u53ef\u80fd\u4f1a\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\u53ca\u6f5c\u5728\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/chinese_versioned_docs/version-3.0/faq/Deploy_faq.md",sourceDirName:"faq",slug:"/faq/Deploy_faq",permalink:"/doc/zh/3.0/faq/Deploy_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/faq/Deploy_faq.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Spark connector \u7248\u672c\u53d1\u5e03",permalink:"/doc/zh/3.0/ecosystem_release/spark_connector"},next:{title:"query_dump \u63a5\u53e3",permalink:"/doc/zh/3.0/faq/Dump_query"}},o={},a=[{value:"\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6 <strong>fe.conf</strong> \u4e2d <code>priority_networks</code> \u53c2\u6570\u4e0b\u914d\u7f6e\u56fa\u5b9a IP\uff1f",id:"\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6-feconf-\u4e2d-priority_networks-\u53c2\u6570\u4e0b\u914d\u7f6e\u56fa\u5b9a-ip",level:2},{value:"\u5b89\u88c5 BE \u8282\u70b9\u540e\u542f\u52a8\u5931\u8d25\uff0c\u5e76\u8fd4\u56de\u9519\u8bef &quot;StarRocks BE http service did not start correctly, exiting&quot;\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u5b89\u88c5-be-\u8282\u70b9\u540e\u542f\u52a8\u5931\u8d25\u5e76\u8fd4\u56de\u9519\u8bef-starrocks-be-http-service-did-not-start-correctly-exiting\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u5728\u90e8\u7f72\u4f01\u4e1a\u7248 StarRocks \u7684\u8fc7\u7a0b\u5f53\u4e2d\uff0c\u914d\u7f6e\u8282\u70b9\u65f6\u62a5\u9519\uff1a\u201cFailed to Distribute files to node\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u5728\u90e8\u7f72\u4f01\u4e1a\u7248-starrocks-\u7684\u8fc7\u7a0b\u5f53\u4e2d\u914d\u7f6e\u8282\u70b9\u65f6\u62a5\u9519failed-to-distribute-files-to-node\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"StarRocks \u662f\u5426\u652f\u6301\u52a8\u6001\u4fee\u6539 FE\u3001BE \u914d\u7f6e\u9879\uff1f",id:"starrocks-\u662f\u5426\u652f\u6301\u52a8\u6001\u4fee\u6539-febe-\u914d\u7f6e\u9879",level:2},{value:"\u4e3a BE \u8282\u70b9\u589e\u52a0\u78c1\u76d8\u7a7a\u95f4\u540e\uff0c\u6570\u636e\u5b58\u50a8\u65e0\u6cd5\u5747\u8861\u8d1f\u8f7d\u4e14\u62a5\u9519 \u201cFailed to get scan range, no queryable replica found in tablet: xxxxx\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u4e3a-be-\u8282\u70b9\u589e\u52a0\u78c1\u76d8\u7a7a\u95f4\u540e\u6570\u636e\u5b58\u50a8\u65e0\u6cd5\u5747\u8861\u8d1f\u8f7d\u4e14\u62a5\u9519-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxxx\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u91cd\u542f\u96c6\u7fa4\u65f6\uff0cFE \u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519 \u201cFe type ,is ready \u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u91cd\u542f\u96c6\u7fa4\u65f6fe-\u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519-fe-type-is-ready-\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u5b89\u88c5\u96c6\u7fa4\u65f6\u62a5\u9519 \u201cfailed to get service info err\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u5b89\u88c5\u96c6\u7fa4\u65f6\u62a5\u9519-failed-to-get-service-info-err\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"BE \u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519 \u201cFail to get master client from cache. host= port=0 code=THRIFT_RPC_ERROR\u201c\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"be-\u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519-fail-to-get-master-client-from-cache-host-port0-codethrift_rpc_error\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u901a\u8fc7 StarRocks Manager \u5347\u7ea7\u96c6\u7fa4\u65f6\u62a5\u9519 \u201cFailed to transport upgrade files to agent host. src:\u2026\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u901a\u8fc7-starrocks-manager-\u5347\u7ea7\u96c6\u7fa4\u65f6\u62a5\u9519-failed-to-transport-upgrade-files-to-agent-host-src\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u65b0\u6269\u5bb9\u8282\u70b9\u7684 FE \u72b6\u6001\u6b63\u5e38\uff0c\u4f46\u662f\u5728 StarRocks Manager \u7684 <strong>\u8bca\u65ad</strong> \u9875\u9762\u4e0b\uff0c\u8be5 FE \u8282\u70b9\u65e5\u5fd7\u5c55\u793a\u62a5\u9519 \u201cFailed to search log\u201c\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u65b0\u6269\u5bb9\u8282\u70b9\u7684-fe-\u72b6\u6001\u6b63\u5e38\u4f46\u662f\u5728-starrocks-manager-\u7684-\u8bca\u65ad-\u9875\u9762\u4e0b\u8be5-fe-\u8282\u70b9\u65e5\u5fd7\u5c55\u793a\u62a5\u9519-failed-to-search-log\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u542f\u52a8 FE \u5931\u8d25\u5e76\u62a5\u9519 \u201cexceeds max permissable delta:5000ms\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u542f\u52a8-fe-\u5931\u8d25\u5e76\u62a5\u9519-exceeds-max-permissable-delta5000ms\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u5982\u679c BE \u8282\u70b9\u6709\u591a\u5757\u78c1\u76d8\u505a\u5b58\u50a8\uff0c\u5982\u4f55\u8bbe\u7f6e <code>storage_root_path</code> \u914d\u7f6e\u9879\uff1f",id:"\u5982\u679c-be-\u8282\u70b9\u6709\u591a\u5757\u78c1\u76d8\u505a\u5b58\u50a8\u5982\u4f55\u8bbe\u7f6e-storage_root_path-\u914d\u7f6e\u9879",level:2},{value:"\u6dfb\u52a0\u65b0\u7684 FE \u8282\u70b9\u81f3\u96c6\u7fa4\u540e\u62a5\u9519 \u201cinvalid cluster id: xxxxxxxx\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u6dfb\u52a0\u65b0\u7684-fe-\u8282\u70b9\u81f3\u96c6\u7fa4\u540e\u62a5\u9519-invalid-cluster-id-xxxxxxxx\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u5f53\u524d FE \u8282\u70b9\u5df2\u7ecf\u542f\u52a8\uff0c\u4e14\u72b6\u6001\u4e3a <code>transfer\uff1afollower</code>\uff0c\u4f46\u662f\u8c03\u7528 <code>show frontends</code> \u547d\u4ee4\u8fd4\u56de <code>isAlive</code> \u72b6\u6001\u4e3a <code>false</code>\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u5f53\u524d-fe-\u8282\u70b9\u5df2\u7ecf\u542f\u52a8\u4e14\u72b6\u6001\u4e3a-transferfollower\u4f46\u662f\u8c03\u7528-show-frontends-\u547d\u4ee4\u8fd4\u56de-isalive-\u72b6\u6001\u4e3a-false\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u67e5\u8be2\u62a5\u9519 \u201ccould not initialize class com.starrocks.rpc.BackendServiceProxy\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u67e5\u8be2\u62a5\u9519-could-not-initialize-class-comstarrocksrpcbackendserviceproxy\u6211\u8be5\u5982\u4f55\u89e3\u51b3",level:2}];function d(e){const r=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",ul:"ul",li:"li",pre:"pre",a:"a",blockquote:"blockquote",div:"div"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",children:"\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"}),"\n",(0,n.jsx)(r.p,{children:"\u672c\u9875\u5217\u4e3e\u4e86\u90e8\u7f72 StarRocks \u65f6\u53ef\u80fd\u4f1a\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\u53ca\u6f5c\u5728\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,n.jsxs)(r.h2,{id:"\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6-feconf-\u4e2d-priority_networks-\u53c2\u6570\u4e0b\u914d\u7f6e\u56fa\u5b9a-ip",children:["\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,n.jsx)(r.strong,{children:"fe.conf"})," \u4e2d ",(0,n.jsx)(r.code,{children:"priority_networks"})," \u53c2\u6570\u4e0b\u914d\u7f6e\u56fa\u5b9a IP\uff1f"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5047\u8bbe\u5f53\u524d\u8282\u70b9\u6709\u4e24\u4e2a IP \u5730\u5740\uff1a",(0,n.jsx)(r.code,{children:"192.168.108.23"})," \u548c ",(0,n.jsx)(r.code,{children:"192.168.108.43"}),"\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u5982\u679c\u60a8\u5c06 ",(0,n.jsx)(r.code,{children:"priority_networks"})," \u8bbe\u5b9a\u4e3a ",(0,n.jsx)(r.code,{children:"192.168.108.23/24"}),"\uff0cStarRocks \u4f1a\u5c06\u8be5\u5730\u5740\u8bc6\u522b\u4e3a ",(0,n.jsx)(r.code,{children:"192.168.108.43"}),"\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u5982\u679c\u60a8\u5c06 ",(0,n.jsx)(r.code,{children:"priority_networks"})," \u8bbe\u5b9a\u4e3a ",(0,n.jsx)(r.code,{children:"192.168.108.23/32"}),"\uff0c\u542f\u52a8\u540e StarRocks \u4f1a\u51fa\u9519\uff0c\u5e76\u5c06\u8be5\u5730\u5740\u8bc6\u522b\u4e3a ",(0,n.jsx)(r.code,{children:"127.0.0.1"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0a\u95ee\u9898\u6709\u4ee5\u4e0b\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u5220\u53bb CIDR \u540e\u7f00 ",(0,n.jsx)(r.code,{children:"32"})," \u6216\u8005\u5c06\u5176\u6539\u4e3a ",(0,n.jsx)(r.code,{children:"28"}),"\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"\u5c06 StarRocks \u5347\u7ea7\u81f3 2.1 \u6216\u66f4\u65b0\u7248\u672c\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5b89\u88c5-be-\u8282\u70b9\u540e\u542f\u52a8\u5931\u8d25\u5e76\u8fd4\u56de\u9519\u8bef-starrocks-be-http-service-did-not-start-correctly-exiting\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:'\u5b89\u88c5 BE \u8282\u70b9\u540e\u542f\u52a8\u5931\u8d25\uff0c\u5e76\u8fd4\u56de\u9519\u8bef "StarRocks BE http service did not start correctly, exiting"\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f'}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u5728\u5b89\u88c5 BE \u540e\u542f\u52a8\u62a5\u9519 ",(0,n.jsx)(r.code,{children:"StarRocks Be http service did not start correctly,exiting"}),"\uff0c\u8be5\u95ee\u9898\u662f BE \u8282\u70b9 ",(0,n.jsx)(r.code,{children:"be_http_port"})," \u7aef\u53e3\u88ab\u5360\u7528\u5bfc\u81f4\u3002\u60a8\u9700\u8981\u4fee\u6539 BE \u914d\u7f6e\u6587\u4ef6 ",(0,n.jsx)(r.strong,{children:"be.conf"})," \u4e2d\u7684 ",(0,n.jsx)(r.code,{children:"be_http_port"})," \u914d\u7f6e\u9879\u5e76\u91cd\u542f BE \u670d\u52a1\u4f7f\u914d\u7f6e\u751f\u6548\u3002\u5982\u679c\u591a\u6b21\u4fee\u6539\u4e3a\u672a\u88ab\u5360\u7528\u7684\u7aef\u53e3\uff0c\u7cfb\u7edf\u4ecd\u7136\u91cd\u590d\u62a5\u9519\uff0c\u60a8\u9700\u8981\u68c0\u67e5\u8282\u70b9\u662f\u5426\u88c5\u6709 Yarn \u7b49\u7a0b\u5e8f\uff0c\u786e\u8ba4\u76d1\u542c\u7aef\u53e3\u9009\u62e9\u4fee\u6539\u76d1\u542c\u89c4\u5219\uff0c\u6216\u8005 BE \u7684\u7aef\u53e3\u9009\u53d6\u8303\u56f4\u7ed5\u8fc7\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5728\u90e8\u7f72\u4f01\u4e1a\u7248-starrocks-\u7684\u8fc7\u7a0b\u5f53\u4e2d\u914d\u7f6e\u8282\u70b9\u65f6\u62a5\u9519failed-to-distribute-files-to-node\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u5728\u90e8\u7f72\u4f01\u4e1a\u7248 StarRocks \u7684\u8fc7\u7a0b\u5f53\u4e2d\uff0c\u914d\u7f6e\u8282\u70b9\u65f6\u62a5\u9519\uff1a\u201cFailed to Distribute files to node\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0a\u9519\u8bef\u662f\u7531\u4e8e FE \u8282\u70b9\u95f4 setuptools \u7248\u672c\u4e0d\u5339\u914d\u5bfc\u81f4\u3002\u60a8\u9700\u8981\u4f7f\u7528 root \u6743\u9650\u5728\u96c6\u7fa4\u7684\u6240\u6709\u673a\u5668\u4e0a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"yum remove python-setuptools\nrm /usr/lib/python2.7/site-packages/setuptool* -rf\nwget https://bootstrap.pypa.io/ez_setup.py -O - | python\n"})}),"\n",(0,n.jsx)(r.h2,{id:"starrocks-\u662f\u5426\u652f\u6301\u52a8\u6001\u4fee\u6539-febe-\u914d\u7f6e\u9879",children:"StarRocks \u662f\u5426\u652f\u6301\u52a8\u6001\u4fee\u6539 FE\u3001BE \u914d\u7f6e\u9879\uff1f"}),"\n",(0,n.jsxs)(r.p,{children:["\u90e8\u5206 FE \u8282\u70b9\u548c BE \u8282\u70b9\u914d\u7f6e\u9879\u652f\u6301\u52a8\u6001\u4fee\u6539\u3002\u5177\u4f53\u64cd\u4f5c\u53c2\u8003 ",(0,n.jsx)(r.a,{href:"/doc/zh/3.0/administration/Configuration",children:"\u914d\u7f6e\u53c2\u6570"}),"\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u52a8\u6001\u4fee\u6539 FE \u8282\u70b9\u914d\u7f6e\u9879\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u4f7f\u7528 SQL \u65b9\u5f0f\u52a8\u6001\u4fee\u6539\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("key" = "value");\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:'--\u793a\u4f8b\uff1a\nADMIN SET FRONTEND CONFIG ("enable_statistic_collect" = "false");\n'})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u4f7f\u7528\u547d\u4ee4\u884c\u65b9\u5f0f\u52a8\u6001\u4fee\u6539\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"curl --location-trusted -u username:password \\\n'http://<ip>:<fe_http_port>/api/_set_config?key=value'\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"curl --location-trusted -u <username>:<password> \\\n'http://192.168.110.101:8030/api/_set_config?enable_statistic_collect=true'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u52a8\u6001\u4fee\u6539 BE \u8282\u70b9\u914d\u7f6e\u9879\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u4f7f\u7528\u547d\u4ee4\u884c\u65b9\u5f0f\u52a8\u6001\u4fee\u6539\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"curl -XPOST -u username:password \\\n'http://<ip>:<be_http_port>/api/update_config?key=value'\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"\u6ce8\u610f"}),"\n",(0,n.jsx)(r.p,{children:"\u4f7f\u7528\u4ee5\u4e0a\u65b9\u5f0f\u4fee\u6539\u53c2\u6570\u65f6\uff0c\u8bf7\u786e\u4fdd\u5f53\u524d\u7528\u6237\u62e5\u6709\u8fdc\u7a0b\u767b\u5f55\u6743\u9650\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u7528\u6237 test \u5e76\u8d4b\u4e88\u5176\u76f8\u5e94\u6743\u9650\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE USER 'test'@'%' IDENTIFIED BY '123456';\nGRANT SELECT_PRIV ON . TO 'test'@'%';\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u4e3a-be-\u8282\u70b9\u589e\u52a0\u78c1\u76d8\u7a7a\u95f4\u540e\u6570\u636e\u5b58\u50a8\u65e0\u6cd5\u5747\u8861\u8d1f\u8f7d\u4e14\u62a5\u9519-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxxx\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u4e3a BE \u8282\u70b9\u589e\u52a0\u78c1\u76d8\u7a7a\u95f4\u540e\uff0c\u6570\u636e\u5b58\u50a8\u65e0\u6cd5\u5747\u8861\u8d1f\u8f7d\u4e14\u62a5\u9519 \u201cFailed to get scan range, no queryable replica found in tablet: xxxxx\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,n.jsx)(r.p,{children:"\u8be5\u9519\u8bef\u53ef\u80fd\u53d1\u751f\u5728\u5f80\u4e3b\u952e\u6a21\u578b\u8868 (Primary Key) \u5bfc\u5165\u6570\u636e\u65f6\uff0cBE \u8282\u70b9\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u5bfc\u81f4 BE Crash\u3002\u6269\u5bb9\u78c1\u76d8\u540e\uff0c\u7531\u4e8e PK \u8868\u76ee\u524d\u8fd8\u4e0d\u652f\u6301 BE \u5185\u90e8\u78c1\u76d8\u95f4\u7684\u5747\u8861\uff0c\u6570\u636e\u5b58\u50a8\u65e0\u6cd5\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u89e3\u51b3\u65b9\u6848:"})}),"\n",(0,n.jsx)(r.p,{children:"\u8be5\u95ee\u9898\uff08PK \u8868\u4e0d\u652f\u6301 BE \u5185\u78c1\u76d8\u95f4\u5747\u8861\uff09\u76ee\u524d\u4ecd\u5728\u4fee\u590d\u5f53\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u89e3\u51b3\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u624b\u52a8\u5747\u8861\u6570\u636e\u5b58\u50a8\u8d1f\u8f7d\uff0c\u6bd4\u5982\u901a\u8fc7\u628a\u4f7f\u7528\u7387\u9ad8\u7684\u78c1\u76d8\u4e0a\u7684\u6570\u636e\u76ee\u5f55 copy \u5230\u4e00\u4e2a\u78c1\u76d8\u7a7a\u95f4\u66f4\u5927\u7684\u76ee\u5f55\u3002"}),"\n",(0,n.jsxs)(r.li,{children:["\u5982\u679c\u5f53\u524d\u78c1\u76d8\u4e2d\u7684\u6570\u636e\u975e\u91cd\u8981\u6570\u636e\uff0c\u5efa\u8bae\u60a8\u76f4\u63a5\u5220\u9664\u6389\u78c1\u76d8\u5e76\u4fee\u6539\u76f8\u5e94\u78c1\u76d8\u8def\u5f84\u3002\u5982\u679c\u7cfb\u7edf\u7ee7\u7eed\u62a5\u9519\uff0c\u60a8\u9700\u8981\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"TRUNCATE TABLE"})," \u547d\u4ee4\u6e05\u9664\u5f53\u524d\u8868\u4e2d\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"\u91cd\u542f\u96c6\u7fa4\u65f6fe-\u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519-fe-type-is-ready-\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:["\u91cd\u542f\u96c6\u7fa4\u65f6\uff0cFE \u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519 \u201cFe type",(0,n.jsx)(r.div,{})," ,is ready ",(0,n.jsx)(r.div,{}),"\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"]}),"\n",(0,n.jsx)(r.p,{children:"\u8bf7\u786e\u8ba4 Leader FE \u8282\u70b9\u662f\u5426\u5df2\u542f\u52a8\u3002\u5982\u679c\u672a\u542f\u52a8\uff0c\u8bf7\u5c1d\u8bd5\u9010\u53f0\u91cd\u542f\u96c6\u7fa4\u4e2d\u7684 FE \u8282\u70b9\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u5b89\u88c5\u96c6\u7fa4\u65f6\u62a5\u9519-failed-to-get-service-info-err\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u5b89\u88c5\u96c6\u7fa4\u65f6\u62a5\u9519 \u201cfailed to get service info err\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsx)(r.p,{children:"\u8bf7\u68c0\u67e5\u5f53\u524d\u673a\u5668\u662f\u5426\u5f00\u542f\u4e86 OpenSSH Daemon\uff08SSHD\uff09\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b SSHD \u72b6\u6001\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"/etc/init.d/sshd status\n"})}),"\n",(0,n.jsx)(r.h2,{id:"be-\u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519-fail-to-get-master-client-from-cache-host-port0-codethrift_rpc_error\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"BE \u542f\u52a8\u5931\u8d25\u5e76\u62a5\u9519 \u201cFail to get master client from cache. host= port=0 code=THRIFT_RPC_ERROR\u201c\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsxs)(r.p,{children:["\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 ",(0,n.jsx)(r.strong,{children:"be.conf"})," \u4e2d\u6307\u5b9a\u7684\u7aef\u53e3\u662f\u5426\u88ab\u5360\u7528\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"netstat  -anp  |grep  port\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u88ab\u5360\u7528\uff0c\u8bf7\u66f4\u6362\u5176\u4ed6\u7a7a\u95f2\u7aef\u53e3\u540e\u91cd\u542f\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u901a\u8fc7-starrocks-manager-\u5347\u7ea7\u96c6\u7fa4\u65f6\u62a5\u9519-failed-to-transport-upgrade-files-to-agent-host-src\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u901a\u8fc7 StarRocks Manager \u5347\u7ea7\u96c6\u7fa4\u65f6\u62a5\u9519 \u201cFailed to transport upgrade files to agent host. src:\u2026\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0a\u9519\u8bef\u7531\u90e8\u7f72\u8def\u5f84\u7684\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db3\u6240\u5bfc\u81f4\u3002\u5728\u5347\u7ea7\u96c6\u7fa4\u65f6\uff0cStarRocks Manager \u4f1a\u5c06\u65b0\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5206\u53d1\u81f3\u5404\u4e2a\u8282\u70b9\uff0c\u82e5\u90e8\u7f72\u76ee\u5f55\u7684\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u5219\u6587\u4ef6\u65e0\u6cd5\u88ab\u5206\u53d1\uff0c\u51fa\u73b0\u4e0a\u8ff0\u62a5\u9519\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u8bf7\u68c0\u67e5\u5bf9\u5e94\u7684\u78c1\u76d8\u7684\u5b58\u50a8\u7a7a\u95f4\u3002\u5982\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8bf7\u6269\u5c55\u76f8\u5e94\u78c1\u76d8\u7a7a\u95f4\u3002"}),"\n",(0,n.jsxs)(r.h2,{id:"\u65b0\u6269\u5bb9\u8282\u70b9\u7684-fe-\u72b6\u6001\u6b63\u5e38\u4f46\u662f\u5728-starrocks-manager-\u7684-\u8bca\u65ad-\u9875\u9762\u4e0b\u8be5-fe-\u8282\u70b9\u65e5\u5fd7\u5c55\u793a\u62a5\u9519-failed-to-search-log\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:["\u65b0\u6269\u5bb9\u8282\u70b9\u7684 FE \u72b6\u6001\u6b63\u5e38\uff0c\u4f46\u662f\u5728 StarRocks Manager \u7684 ",(0,n.jsx)(r.strong,{children:"\u8bca\u65ad"})," \u9875\u9762\u4e0b\uff0c\u8be5 FE \u8282\u70b9\u65e5\u5fd7\u5c55\u793a\u62a5\u9519 \u201cFailed to search log\u201c\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"]}),"\n",(0,n.jsxs)(r.p,{children:["\u9ed8\u8ba4\u8bbe\u7f6e\u4e0b\uff0cStarRocks Manager \u4f1a\u5728 30 \u79d2\u5185\u53bb\u83b7\u53d6\u65b0\u90e8\u7f72 FE \u8282\u70b9\u8def\u5f84\u914d\u7f6e\u3002\u5982\u679c\u5f53\u524d FE \u8282\u70b9\u542f\u52a8\u8f83\u6162\u6216\u7531\u4e8e\u5176\u4ed6\u539f\u56e0\u5bfc\u81f4 30 \u79d2\u5185\u672a\u54cd\u5e94\u5c31\u4f1a\u51fa\u73b0\u4e0a\u8ff0\u95ee\u9898\u3002\u8bf7\u901a\u8fc7 ",(0,n.jsx)(r.strong,{children:"/starrocks-manager-xxx/center/log/webcenter/log/web/drms.INFO"})," \u8def\u5f84\u68c0\u67e5 StarRocks Manager Web \u65e5\u5fd7\uff0c\u68c0\u7d22\u65e5\u5fd7\u4e2d\u662f\u5426\u542b\u6709 \u201cFailed to update fe configurations\u201d \u62a5\u9519\u3002\u82e5\u6709\uff0c\u8bf7\u91cd\u542f\u5bf9\u5e94\u7684 FE \u670d\u52a1\uff0cStarRocks Manager \u4f1a\u91cd\u65b0\u83b7\u53d6\u8def\u5f84\u914d\u7f6e\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u542f\u52a8-fe-\u5931\u8d25\u5e76\u62a5\u9519-exceeds-max-permissable-delta5000ms\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u542f\u52a8 FE \u5931\u8d25\u5e76\u62a5\u9519 \u201cexceeds max permissable delta:5000ms\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0a\u9519\u8bef\u7531\u4e8e\u96c6\u7fa4\u5185\u4e0d\u540c\u673a\u5668\u7684\u65f6\u5dee\u8d85\u8fc7 5 \u79d2\u5bfc\u81f4\u3002\u60a8\u9700\u8981\u901a\u8fc7\u6821\u51c6\u673a\u5668\u65f6\u95f4\u89e3\u51b3\u8be5\u95ee\u9898\u3002"}),"\n",(0,n.jsxs)(r.h2,{id:"\u5982\u679c-be-\u8282\u70b9\u6709\u591a\u5757\u78c1\u76d8\u505a\u5b58\u50a8\u5982\u4f55\u8bbe\u7f6e-storage_root_path-\u914d\u7f6e\u9879",children:["\u5982\u679c BE \u8282\u70b9\u6709\u591a\u5757\u78c1\u76d8\u505a\u5b58\u50a8\uff0c\u5982\u4f55\u8bbe\u7f6e ",(0,n.jsx)(r.code,{children:"storage_root_path"})," \u914d\u7f6e\u9879\uff1f"]}),"\n",(0,n.jsxs)(r.p,{children:["\u8be5\u914d\u7f6e\u9879\u4f4d\u4e8e BE \u914d\u7f6e\u6587\u4ef6 ",(0,n.jsx)(r.strong,{children:"be.conf"})," \u4e2d\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:";"})," \u5206\u9694\u591a\u4e2a\u78c1\u76d8\u8def\u5f84\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u6dfb\u52a0\u65b0\u7684-fe-\u8282\u70b9\u81f3\u96c6\u7fa4\u540e\u62a5\u9519-invalid-cluster-id-xxxxxxxx\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u6dfb\u52a0\u65b0\u7684 FE \u8282\u70b9\u81f3\u96c6\u7fa4\u540e\u62a5\u9519 \u201cinvalid cluster id: xxxxxxxx\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsxs)(r.p,{children:["\u4ee5\u4e0a\u9519\u8bef\u662f\u7531\u4e8e\u7b2c\u4e00\u6b21\u542f\u52a8\u96c6\u7fa4\u65f6\u672a\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"--helper"})," \u9009\u9879\u6dfb\u52a0\u8be5 FE \u8282\u70b9\uff0c\u4ece\u800c\u5bfc\u81f4\u4e0d\u540c\u8282\u70b9\u7684\u5143\u6570\u636e\u4e0d\u4e00\u81f4\u3002\u60a8\u9700\u8981\u5c06\u76f8\u5e94\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u5143\u6570\u636e\u6e05\u7a7a\uff0c\u5e76\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"--helper"})," \u9009\u9879\u91cd\u65b0\u6dfb\u52a0\u8be5 FE \u8282\u70b9\u81f3\u96c6\u7fa4\u3002"]}),"\n",(0,n.jsxs)(r.h2,{id:"\u5f53\u524d-fe-\u8282\u70b9\u5df2\u7ecf\u542f\u52a8\u4e14\u72b6\u6001\u4e3a-transferfollower\u4f46\u662f\u8c03\u7528-show-frontends-\u547d\u4ee4\u8fd4\u56de-isalive-\u72b6\u6001\u4e3a-false\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:["\u5f53\u524d FE \u8282\u70b9\u5df2\u7ecf\u542f\u52a8\uff0c\u4e14\u72b6\u6001\u4e3a ",(0,n.jsx)(r.code,{children:"transfer\uff1afollower"}),"\uff0c\u4f46\u662f\u8c03\u7528 ",(0,n.jsx)(r.code,{children:"show frontends"})," \u547d\u4ee4\u8fd4\u56de ",(0,n.jsx)(r.code,{children:"isAlive"})," \u72b6\u6001\u4e3a ",(0,n.jsx)(r.code,{children:"false"}),"\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"]}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0a\u95ee\u9898\u662f\u7531\u4e8e\u8d85\u8fc7\u534a\u6570\u7684 Java Virtual Machine\uff08JVM\uff09\u5185\u5b58\u88ab\u4f7f\u7528\u4e14\u672a\u6807\u8bb0 checkpoint\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6bcf\u79ef\u7d2f 50,000 \u6761\u65e5\u5fd7\uff0c\u7cfb\u7edf\u4fbf\u4f1a\u6807\u8bb0\u4e00\u4e2a checkpoint\u3002\u5efa\u8bae\u60a8\u5728\u4e1a\u52a1\u4f4e\u5cf0\u671f\u4fee\u6539\u5404 FE \u8282\u70b9\u7684 JVM \u53c2\u6570\u5e76\u91cd\u542f FE \u4f7f\u4fee\u6539\u751f\u6548\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u67e5\u8be2\u62a5\u9519-could-not-initialize-class-comstarrocksrpcbackendserviceproxy\u6211\u8be5\u5982\u4f55\u89e3\u51b3",children:"\u67e5\u8be2\u62a5\u9519 \u201ccould not initialize class com.starrocks.rpc.BackendServiceProxy\u201d\u3002\u6211\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u8bf7\u786e\u8ba4\u73af\u5883\u53d8\u91cf ",(0,n.jsx)(r.code,{children:"$JAVA_HOME"})," \u662f\u5426\u4e3a\u6b63\u786e\u7684 JDK \u8def\u5f84\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"\u8bf7\u786e\u8ba4\u6240\u6709\u8282\u70b9\u7684 JDK \u662f\u5426\u662f\u540c\u4e00\u4e2a\u7248\u672c\uff0c\u6240\u6709\u8282\u70b9\u9700\u8981\u4f7f\u7528\u76f8\u540c\u7248\u672c\u7684 JDK\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>l,ah:()=>i});var n=s(67294);const t=n.createContext({});function i(e){const r=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function l({components:e,children:r,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),n.createElement(t.Provider,{value:l},r)}}}]);