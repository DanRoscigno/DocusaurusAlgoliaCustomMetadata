"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46699],{26018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const r={},o="INSERT INTO \u5bfc\u5165\u5e38\u89c1\u95ee\u9898",c={id:"faq/loading/Insert_into_faq",title:"INSERT INTO \u5bfc\u5165\u5e38\u89c1\u95ee\u9898",description:"\u672c\u9875\u5217\u4e3e\u4e86\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\u53ef\u80fd\u4f1a\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\u53ca\u6f5c\u5728\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/chinese_versioned_docs/version-2.5/faq/loading/Insert_into_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Insert_into_faq",permalink:"/doc/zh/2.5/faq/loading/Insert_into_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/faq/loading/Insert_into_faq.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Flink Connector\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/2.5/faq/loading/Flink_connector_faq"},next:{title:"\u5bfc\u5165\u901a\u7528\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/2.5/faq/loading/Loading_faq"}},a={},l=[{value:"\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\uff0cSQL \u6bcf\u63d2\u5165\u4e00\u6761\u5927\u7ea6\u8017\u65f6 50~100ms \u4e4b\u95f4\uff0c\u80fd\u5426\u4f18\u5316\u6267\u884c\u6548\u7387\u6709\uff1f",id:"\u4f7f\u7528-insert-into-\u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6sql-\u6bcf\u63d2\u5165\u4e00\u6761\u5927\u7ea6\u8017\u65f6-50100ms-\u4e4b\u95f4\u80fd\u5426\u4f18\u5316\u6267\u884c\u6548\u7387\u6709",level:2},{value:"\u4f7f\u7528 INSERT INTO SELECT \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u7cfb\u7edf\u62a5\u9519 \u201cindex channel has intoleralbe failure\u201d\u3002\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u4f7f\u7528-insert-into-select-\u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\u7cfb\u7edf\u62a5\u9519-index-channel-has-intoleralbe-failure\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u4f7f\u7528 INSERT INTO SELECT \u8bed\u53e5\u5bfc\u5165\u5927\u91cf\u6570\u636e\u65f6\u4f1a\u6267\u884c\u5931\u8d25 \u201cexecute timeout\u201d\u3002\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u4f7f\u7528-insert-into-select-\u8bed\u53e5\u5bfc\u5165\u5927\u91cf\u6570\u636e\u65f6\u4f1a\u6267\u884c\u5931\u8d25-execute-timeout\u5982\u4f55\u89e3\u51b3",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"insert-into-\u5bfc\u5165\u5e38\u89c1\u95ee\u9898",children:"INSERT INTO \u5bfc\u5165\u5e38\u89c1\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u9875\u5217\u4e3e\u4e86\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\u53ef\u80fd\u4f1a\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\u53ca\u6f5c\u5728\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528-insert-into-\u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6sql-\u6bcf\u63d2\u5165\u4e00\u6761\u5927\u7ea6\u8017\u65f6-50100ms-\u4e4b\u95f4\u80fd\u5426\u4f18\u5316\u6267\u884c\u6548\u7387\u6709",children:"\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\uff0cSQL \u6bcf\u63d2\u5165\u4e00\u6761\u5927\u7ea6\u8017\u65f6 50~100ms \u4e4b\u95f4\uff0c\u80fd\u5426\u4f18\u5316\u6267\u884c\u6548\u7387\u6709\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a INSERT INTO \u5bfc\u5165\u65b9\u5f0f\u4e3a\u6279\u91cf\u5199\u5165\uff0c\u6240\u4ee5\u5355\u6761\u5199\u5165\u548c\u6279\u91cf\u5199\u5165\u7684\u8017\u65f6\u76f8\u540c\u3002\u56e0\u6b64 OLAP \u573a\u666f\u4e0b\u4e0d\u5efa\u8bae\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5355\u6761\u5199\u5165\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528-insert-into-select-\u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\u7cfb\u7edf\u62a5\u9519-index-channel-has-intoleralbe-failure\u5982\u4f55\u89e3\u51b3",children:"\u4f7f\u7528 INSERT INTO SELECT \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u7cfb\u7edf\u62a5\u9519 \u201cindex channel has intoleralbe failure\u201d\u3002\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u9519\u8bef\u56e0\u6d41\u5f0f\u5bfc\u5165 RPC \u8d85\u65f6\u5bfc\u81f4\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8c03\u8282 RPC \u8d85\u65f6\u76f8\u5173\u53c2\u6570\u89e3\u51b3\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u9700\u8981\u5728 BE \u914d\u7f6e\u6587\u4ef6 ",(0,i.jsx)(n.strong,{children:"be.conf"})," \u4e2d\u4fee\u6539\u4ee5\u4e0b\u7cfb\u7edf\u914d\u7f6e\u9879\uff0c\u5e76\u91cd\u542f\u96c6\u7fa4\u4f7f\u4fee\u6539\u751f\u6548\uff1a"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"streaming_load_rpc_max_alive_time_sec"}),": \u6d41\u5f0f\u5bfc\u5165 RPC \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 1200\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4ee5\u4e0b\u7cfb\u7edf\u53d8\u91cf\u8c03\u6574\u67e5\u8be2\u7684\u8d85\u65f6\u65f6\u95f4\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"query_timeout"}),"\uff1a\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"300"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528-insert-into-select-\u8bed\u53e5\u5bfc\u5165\u5927\u91cf\u6570\u636e\u65f6\u4f1a\u6267\u884c\u5931\u8d25-execute-timeout\u5982\u4f55\u89e3\u51b3",children:"\u4f7f\u7528 INSERT INTO SELECT \u8bed\u53e5\u5bfc\u5165\u5927\u91cf\u6570\u636e\u65f6\u4f1a\u6267\u884c\u5931\u8d25 \u201cexecute timeout\u201d\u3002\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u9519\u8bef\u56e0 query \u8d85\u65f6\u5bfc\u81f4\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u8282 Session \u53d8\u91cf ",(0,i.jsx)(n.code,{children:"query_timeout"}),"\u89e3\u51b3\u3002\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e3a 300\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set query_timeout =xx;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var i=t(67294);const s=i.createContext({});function r(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),i.createElement(s.Provider,{value:c},n)}}}]);