"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77379],{84047:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=c(85893),r=c(11151);const t={},i="percentile_cont",l={id:"sql-reference/sql-functions/aggregate-functions/percentile_cont",title:"percentile_cont",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/aggregate-functions/percentile_cont.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_cont",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/percentile_cont",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/percentile_cont.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"PERCENTILE_APPROX",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/percentile_approx"},next:{title:"percentile_disc",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/percentile_disc"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_cont",children:"percentile_cont"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u7cbe\u786e\u767e\u5206\u4f4d\u6570\u3002\u8be5\u51fd\u6570\u4f7f\u7528\u8fde\u7eed\u5206\u5e03\u6a21\u578b\uff0c\u5982\u679c\u672a\u627e\u5230\u4e0e\u767e\u5206\u4f4d\u5b8c\u5168\u5339\u914d\u7684\u503c\uff0c\u5219\u8fd4\u56de\u4e34\u8fd1\u4e24\u4e2a\u503c\u7684\u7ebf\u6027\u63d2\u503c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"PERCENTILE_CONT (expr, percentile) \n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": \u8981\u8ba1\u7b97\u767e\u5206\u4f4d\u6570\u7684\u5217\uff0c\u5217\u503c\u5fc5\u987b\u4e3a\u6570\u503c\u7c7b\u578b\u3001DATE\u6216 DATETIME\u7c7b\u578b\u3002\u5982\u679c\u8981\u8ba1\u7b97\u7269\u7406\uff08physics\uff09\u5f97\u5206\u7684\u4e2d\u4f4d\u6570\uff0c\u5219",(0,s.jsx)(n.code,{children:"expr"}),"\u8bbe\u7f6e\u4e3a\u5305\u542bphysics\u5206\u6570\u7684\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"percentile"}),": \u6307\u5b9a\u7684\u767e\u5206\u4f4d\uff0c\u4ecb\u4e8e 0 \u548c 1 \u4e4b\u95f4\u7684\u6d6e\u70b9\u5e38\u91cf\u3002\u5982\u679c\u8981\u8ba1\u7b97\u4e2d\u4f4d\u6570\uff0c\u5219\u8bbe\u7f6e\u4e3a 0.5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9a\u7684\u767e\u5206\u4f4d\u5bf9\u5e94\u7684\u503c\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\u4e0e\u767e\u5206\u4f4d\u5b8c\u5168\u5339\u914d\u7684\u503c\uff0c\u5219\u8fd4\u56de\u4e34\u8fd1\u4e24\u4e2a\u6570\u503c\u7684\u7ebf\u6027\u63d2\u503c\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7c7b\u578b\u4e0e ",(0,s.jsx)(n.code,{children:"expr"})," \u5185\u7684\u6570\u636e\u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u5ffd\u7565 Null \u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u8868",(0,s.jsx)(n.code,{children:"exam"}),"\uff0c\u6570\u636e\u5982\u4e0b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select * from exam order by Subject;\n+-----------+-------+\n| Subject   | Score |\n+-----------+-------+\n| chemistry |    80 |\n| chemistry |   100 |\n| chemistry |  NULL |\n| math      |    60 |\n| math      |    70 |\n| math      |    85 |\n| physics   |    75 |\n| physics   |    80 |\n| physics   |    85 |\n| physics   |    99 |\n+-----------+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u6bcf\u4e2a\u79d1\u76ee\u5f97\u5206\u7684\u4e2d\u4f4d\u6570\uff0c\u5ffd\u7565 Null \u503c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2\u8bed\u53e5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SELECT Subject, PERCENTILE_CONT (Score, 0.5)  FROM exam group by Subject;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+-----------+-----------------------------+\n| Subject   | percentile_cont(Score, 0.5) |\n+-----------+-----------------------------+\n| chemistry |                          90 |\n| math      |                          70 |\n| physics   |                        82.5 |\n+-----------+-----------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,c)=>{c.d(n,{Zo:()=>l,ah:()=>t});var s=c(67294);const r=s.createContext({});function t(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:c}){let l;return l=c?"function"==typeof e?e({}):e||i:t(e),s.createElement(r.Provider,{value:l},n)}}}]);