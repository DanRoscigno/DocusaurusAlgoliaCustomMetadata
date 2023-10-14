"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17352],{99645:(t,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var e=s(85893),a=s(11151);const r={},i="DataGrip",c={id:"integrations/IDE_integrations/DataGrip",title:"DataGrip",description:"DataGrip \u652f\u6301\u67e5\u8be2 StarRocks \u4e2d\u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u3002",source:"@site/chinese_versioned_docs/version-3.1/integrations/IDE_integrations/DataGrip.md",sourceDirName:"integrations/IDE_integrations",slug:"/integrations/IDE_integrations/DataGrip",permalink:"/doc/zh/integrations/IDE_integrations/DataGrip",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/integrations/IDE_integrations/DataGrip.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DBeaver",permalink:"/doc/zh/integrations/IDE_integrations/DBeaver"},next:{title:"\u914d\u7f6e AWS \u8ba4\u8bc1\u4fe1\u606f",permalink:"/doc/zh/integrations/authenticate_to_aws_resources"}},o={},d=[];function l(t){const n=Object.assign({h1:"h1",p:"p",strong:"strong",img:"img",ul:"ul",li:"li",code:"code"},(0,a.ah)(),t.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"datagrip",children:"DataGrip"}),"\n",(0,e.jsx)(n.p,{children:"DataGrip \u652f\u6301\u67e5\u8be2 StarRocks \u4e2d\u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u3002"}),"\n",(0,e.jsxs)(n.p,{children:["\u5728 DataGrip \u4e2d\u521b\u5efa\u6570\u636e\u6e90\u3002\u6ce8\u610f\u521b\u5efa\u8fc7\u7a0b\u4e2d\u9700\u8981\u9009\u62e9 ",(0,e.jsx)(n.strong,{children:"MySQL"})," \u4f5c\u4e3a\u6570\u636e\u6e90 (",(0,e.jsx)(n.strong,{children:"Data"})," ",(0,e.jsx)(n.strong,{children:"Source"}),")\u3002"]}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"DataGrip - 1",src:s(55979).Z+"",width:"1280",height:"712"})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"DataGrip - 2",src:s(67242).Z+"",width:"1280",height:"811"})}),"\n",(0,e.jsx)(n.p,{children:"\u9700\u8981\u8bbe\u7f6e\u7684\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Host"}),"\uff1aStarRocks \u96c6\u7fa4\u7684 FE \u4e3b\u673a IP \u5730\u5740\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Port"}),"\uff1aStarRocks \u96c6\u7fa4\u7684 FE \u67e5\u8be2\u7aef\u53e3\uff0c\u5982 ",(0,e.jsx)(n.code,{children:"9030"}),"\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Authentication"}),"\uff1a\u9274\u6743\u65b9\u5f0f\u3002\u9009\u62e9 ",(0,e.jsx)(n.strong,{children:"Username & Password"}),"\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"User"}),"\uff1a\u7528\u4e8e\u767b\u5f55 StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u5982 ",(0,e.jsx)(n.code,{children:"admin"}),"\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Password"}),"\uff1a\u7528\u4e8e\u767b\u5f55 StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Database"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u8981\u8bbf\u95ee\u7684\u6570\u636e\u6e90\u3002\u683c\u5f0f\u4e3a ",(0,e.jsx)(n.code,{children:"<catalog_name>.<database_name>"}),"\u3002","\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"catalog_name"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u76ee\u6807 Catalog \u7684\u540d\u79f0\u3002Internal Catalog \u548c External Catalog \u5747\u652f\u6301\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"database_name"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u76ee\u6807\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002\u5185\u90e8\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u5747\u652f\u6301\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(t={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),t.components);return n?(0,e.jsx)(n,Object.assign({},t,{children:(0,e.jsx)(l,t)})):l(t)}},55979:(t,n,s)=>{s.d(n,{Z:()=>e});const e=s.p+"assets/images/BI_datagrip_1-c1fed7e5af5d1cc0a678f2ccba06cac1.png"},67242:(t,n,s)=>{s.d(n,{Z:()=>e});const e=s.p+"assets/images/BI_datagrip_2-b4dc9f2ad1041a911ff1baa18c2bdbdd.png"},11151:(t,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var e=s(67294);const a=e.createContext({});function r(t){const n=e.useContext(a);return e.useMemo((()=>"function"==typeof t?t(n):{...n,...t}),[n,t])}const i={};function c({components:t,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof t?t({}):t||i:r(t),e.createElement(a.Provider,{value:c},n)}}}]);