"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85717],{11323:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(85893),i=s(11151);const t={},o="Querybook",c={id:"integrations/BI_integrations/Querybook",title:"Querybook",description:"Querybook \u652f\u6301\u5bf9 StarRocks \u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u548c\u53ef\u89c6\u5316\u5904\u7406\u3002",source:"@site/chinese_versioned_docs/version-3.1/integrations/BI_integrations/Querybook.md",sourceDirName:"integrations/BI_integrations",slug:"/integrations/BI_integrations/Querybook",permalink:"/doc/zh/integrations/BI_integrations/Querybook",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/integrations/BI_integrations/Querybook.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Hex",permalink:"/doc/zh/integrations/BI_integrations/Hex"},next:{title:"QuickBI",permalink:"/doc/zh/integrations/BI_integrations/QuickBI"}},l={},a=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",a:"a",img:"img",ul:"ul",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"querybook",children:"Querybook"}),"\n",(0,r.jsx)(n.p,{children:"Querybook \u652f\u6301\u5bf9 StarRocks \u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u548c\u53ef\u89c6\u5316\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u786e\u4fdd\u60a8\u5df2\u5b8c\u6210\u5982\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u514b\u9686\u5e76\u4e0b\u8f7d Querybook \u5e93\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"git clone git@github.com:pinterest/querybook.git\ncd querybook\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.jsx)(n.code,{children:"requirements"})," \u6587\u4ef6\u5939\u91cc\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"local.txt"})," \u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"touch requirements/local.txt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u6587\u4ef6\u5305\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'echo -e "starrocks\\nmysqlclient" > requirements/local.txt \n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u5bb9\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"make\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u96c6\u6210",children:"\u96c6\u6210"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fdb\u5165 ",(0,r.jsx)(n.a,{href:"https://localhost:10001/admin/query_engine/",children:"https:///admin/query_engine/"})," \u9875\u9762\u6dfb\u52a0\u67e5\u8be2\u5f15\u64ce\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Querybook",src:s(54146).Z+"",width:"1280",height:"740"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.strong,{children:"Language"})," \u91cc\u9009\u62e9 ",(0,r.jsx)(n.strong,{children:"Starrocks"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.strong,{children:"Executor"})," \u91cc\u9009\u62e9 ",(0,r.jsx)(n.strong,{children:"sqlalchemy"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.strong,{children:"Connection_string"})," \u91cc\uff0c\u6309\u5982\u4e0b StarRocks SQLAlchemy URI \u683c\u5f0f\u6765\u586b\u5199 URI\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"starrocks://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>\n"})}),"\n",(0,r.jsx)(n.p,{children:"URI \u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"User"}),"\uff1a\u7528\u4e8e\u767b\u5f55 StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"admin"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Password"}),"\uff1a\u7528\u4e8e\u767b\u5f55 StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Host"}),"\uff1aStarRocks \u96c6\u7fa4\u7684 FE \u4e3b\u673a IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Port"}),"\uff1aStarRocks \u96c6\u7fa4\u7684 FE \u67e5\u8be2\u7aef\u53e3\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"9030"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Catalog"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807 Catalog\u3002Internal Catalog \u548c External Catalog \u5747\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Database"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807\u6570\u636e\u5e93\u3002\u5185\u90e8\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u5747\u652f\u6301\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},54146:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/BI_querybook_1-4805d379448a5c6df3b524aad977f499.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:t(e),r.createElement(i.Provider,{value:c},n)}}}]);