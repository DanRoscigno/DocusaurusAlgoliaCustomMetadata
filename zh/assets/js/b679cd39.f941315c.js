"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31981],{55041:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var l=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese"},d="\u6269\u5bb9\u7f29\u5bb9 StarRocks",i={id:"administration/Scale_up_down",title:"\u6269\u5bb9\u7f29\u5bb9 StarRocks",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u6269\u5bb9\u4ee5\u53ca\u7f29\u5bb9 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Scale_up_down.md",sourceDirName:"administration",slug:"/administration/Scale_up_down",permalink:"/doc/zh/docs/administration/Scale_up_down",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Scale_up_down.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u8fd0\u7ef4\u96c6\u7fa4",permalink:"/doc/zh/docs/category/\u8fd0\u7ef4\u96c6\u7fa4"},next:{title:"\u5907\u4efd\u4e0e\u6062\u590d",permalink:"/doc/zh/docs/administration/Backup_and_restore"}},o={},a=[{value:"\u6269\u7f29\u5bb9 FE \u96c6\u7fa4",id:"\u6269\u7f29\u5bb9-fe-\u96c6\u7fa4",level:2},{value:"\u6269\u5bb9 FE \u96c6\u7fa4",id:"\u6269\u5bb9-fe-\u96c6\u7fa4",level:3},{value:"\u7f29\u5bb9 FE \u96c6\u7fa4",id:"\u7f29\u5bb9-fe-\u96c6\u7fa4",level:3},{value:"\u6269\u7f29\u5bb9 BE \u96c6\u7fa4",id:"\u6269\u7f29\u5bb9-be-\u96c6\u7fa4",level:2},{value:"\u6269\u5bb9 BE \u96c6\u7fa4",id:"\u6269\u5bb9-be-\u96c6\u7fa4",level:3},{value:"\u7f29\u5bb9 BE \u96c6\u7fa4",id:"\u7f29\u5bb9-be-\u96c6\u7fa4",level:3}];function t(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",code:"code",h3:"h3",a:"a",pre:"pre"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u6269\u5bb9\u7f29\u5bb9-starrocks",children:"\u6269\u5bb9\u7f29\u5bb9 StarRocks"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u6269\u5bb9\u4ee5\u53ca\u7f29\u5bb9 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u6269\u7f29\u5bb9-fe-\u96c6\u7fa4",children:"\u6269\u7f29\u5bb9 FE \u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"StarRocks FE \u8282\u70b9\u5206\u4e3a Follower \u8282\u70b9\u548c Observer \u8282\u70b9\u3002Follower \u8282\u70b9\u53c2\u4e0e\u9009\u4e3e\u6295\u7968\u548c\u5199\u5165\uff0cObserver \u8282\u70b9\u53ea\u7528\u6765\u540c\u6b65\u65e5\u5fd7\uff0c\u6269\u5c55\u8bfb\u6027\u80fd\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6240\u6709 FE \u8282\u70b9\u7684 ",(0,l.jsx)(n.code,{children:"http_port"})," \u5fc5\u987b\u76f8\u540c\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"Follower FE \u8282\u70b9\uff08\u5305\u62ec Leader \u8282\u70b9\uff09\u7684\u6570\u91cf\u63a8\u8350\u4e3a\u5947\u6570\u3002\u5efa\u8bae\u90e8\u7f72 3 \u4e2a Follower \u8282\u70b9\uff0c\u4ee5\u7ec4\u6210\u9ad8\u53ef\u7528\u90e8\u7f72\uff08HA\uff09\u6a21\u5f0f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5f53 FE \u96c6\u7fa4\u5df2\u7ecf\u4e3a\u9ad8\u53ef\u7528\u90e8\u7f72\u6a21\u5f0f\u65f6\uff08\u5373\u5305\u542b 1 \u4e2a Leader \u8282\u70b9\uff0c2 \u4e2a Follower \u8282\u70b9\uff09\uff0c\u5efa\u8bae\u60a8\u901a\u8fc7\u589e\u52a0 Observer \u8282\u70b9\u6765\u6269\u5c55 FE \u7684\u8bfb\u670d\u52a1\u80fd\u529b\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a FE \u8282\u70b9\u53ef\u4ee5\u5e94\u5bf9 10 \u81f3 20 \u53f0 BE \u8282\u70b9\u3002\u5efa\u8bae\u60a8\u5c06 FE \u96c6\u7fa4\u8282\u70b9\u6570\u91cf\u63a7\u5236\u5728 10 \u4e2a\u4ee5\u4e0b\u3002\u901a\u5e38 3 \u4e2a FE \u8282\u70b9\u5373\u53ef\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u9700\u6c42\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6269\u5bb9-fe-\u96c6\u7fa4",children:"\u6269\u5bb9 FE \u96c6\u7fa4"}),"\n",(0,l.jsxs)(n.p,{children:["\u90e8\u7f72\u5e76\u542f\u52a8\u65b0\u589e FE \u8282\u70b9\u3002\u8be6\u7ec6\u90e8\u7f72\u65b9\u5f0f\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/deployment/deploy_manually",children:"\u90e8\u7f72 StarRocks"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'bin/start_fe.sh --helper "fe_leader_host:edit_log_port" --daemon\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"fe_leader_host"}),"\uff1a Leader FE \u8282\u70b9\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u6269\u5bb9 FE \u96c6\u7fa4\u3002\u60a8\u53ef\u4ee5\u5c06\u65b0\u589e\u8282\u70b9\u8bbe\u5b9a\u4e3a Follower \u6216 Observer \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5c06\u65b0\u589e\u8282\u70b9\u8bbe\u5b9a\u4e3a Follower \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD follower "fe_host:edit_log_port";\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5c06\u65b0\u589e\u8282\u70b9\u8bbe\u5b9a\u4e3a Observer \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD observer "fe_host:edit_log_port";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u8282\u70b9\u4fe1\u606f\u9a8c\u8bc1\u6269\u5bb9\u662f\u5426\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/frontends';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7f29\u5bb9-fe-\u96c6\u7fa4",children:"\u7f29\u5bb9 FE \u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5220\u9664 Follower \u6216 Observer \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664 Follower \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP follower "fe_host:edit_log_port";\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664 Observer \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP observer "fe_host:edit_log_port";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u8282\u70b9\u4fe1\u606f\u9a8c\u8bc1\u7f29\u5bb9\u662f\u5426\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/frontends';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6269\u7f29\u5bb9-be-\u96c6\u7fa4",children:"\u6269\u7f29\u5bb9 BE \u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"BE \u96c6\u7fa4\u6210\u529f\u6269\u7f29\u5bb9\u540e\uff0cStarRocks \u4f1a\u81ea\u52a8\u6839\u636e\u8d1f\u8f7d\u60c5\u51b5\uff0c\u8fdb\u884c\u6570\u636e\u5747\u8861\uff0c\u6b64\u671f\u95f4\u7cfb\u7edf\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u6269\u5bb9-be-\u96c6\u7fa4",children:"\u6269\u5bb9 BE \u96c6\u7fa4"}),"\n",(0,l.jsxs)(n.p,{children:["\u90e8\u7f72\u5e76\u542f\u52a8\u65b0\u589e BE \u8282\u70b9\u3002\u8be6\u7ec6\u90e8\u7f72\u65b9\u5f0f\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/deployment/deploy_manually",children:"\u90e8\u7f72 StarRocks"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bin/start_be.sh --daemon\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6269\u5bb9 BE \u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER SYSTEM ADD backend 'be_host:be_heartbeat_service_port';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u8282\u70b9\u4fe1\u606f\u9a8c\u8bc1\u6269\u5bb9\u662f\u5426\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/backends';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7f29\u5bb9-be-\u96c6\u7fa4",children:"\u7f29\u5bb9 BE \u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 DROP \u6216 DECOMMISSION \u7684\u65b9\u5f0f\u7f29\u5bb9 BE \u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(n.p,{children:"DROP \u4f1a\u7acb\u523b\u5220\u9664 BE \u8282\u70b9\uff0c\u4e22\u5931\u7684\u526f\u672c\u7531 FE \u8c03\u5ea6\u8865\u9f50\uff0c\u800c DECOMMISSION \u5148\u4fdd\u8bc1\u526f\u672c\u8865\u9f50\uff0c\u7136\u540e\u518d\u5220\u9664 BE \u8282\u70b9\u3002\u5efa\u8bae\u60a8\u901a\u8fc7 DECOMMISSION \u65b9\u5f0f\u8fdb\u884c BE \u96c6\u7fa4\u7f29\u5bb9\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u901a\u8fc7 DECOMMISSION \u7684\u65b9\u5f0f\u7f29\u5bb9 BE \u96c6\u7fa4\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DECOMMISSION backend "be_host:be_heartbeat_service_port";\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u901a\u8fc7 DROP \u7684\u65b9\u5f0f\u7f29\u5bb9 BE \u96c6\u7fa4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8b66\u544a\uff1a\u5982\u679c\u60a8\u9700\u8981\u4f7f\u7528 DROP \u65b9\u5f0f\u5220\u9664 BE \u8282\u70b9\uff0c\u8bf7\u786e\u4fdd\u7cfb\u7edf\u4e09\u526f\u672c\u5b8c\u6574\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP backend "be_host:be_heartbeat_service_port";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u8282\u70b9\u4fe1\u606f\u9a8c\u8bc1\u7f29\u5bb9\u662f\u5426\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/backends';\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(t,e)})):t(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var l=s(67294);const r=l.createContext({});function c(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||d:c(e),l.createElement(r.Provider,{value:i},n)}}}]);