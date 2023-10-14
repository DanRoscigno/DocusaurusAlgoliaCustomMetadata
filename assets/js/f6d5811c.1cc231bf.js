"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70898],{28907:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=r(85893),c=r(11151);const s={},i="VARIANCE, VAR_POP, VARIANCE_POP",a={id:"sql-reference/sql-functions/aggregate-functions/variance",title:"VARIANCE, VAR_POP, VARIANCE_POP",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/variance.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/variance",permalink:"/doc/zh/3.0/sql-reference/sql-functions/aggregate-functions/variance",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/variance.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"VAR_SAMP, VARIANCE_SAMP",permalink:"/doc/zh/3.0/sql-reference/sql-functions/aggregate-functions/var_samp"},next:{title:"window_funnel",permalink:"/doc/zh/3.0/sql-reference/sql-functions/aggregate-functions/window_funnel"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"variance-var_pop-variance_pop",children:"VARIANCE, VAR_POP, VARIANCE_POP"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u8868\u8fbe\u5f0f\u7684\u65b9\u5dee\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARIANCE(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": \u9009\u53d6\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"expr"})," \u662f Decimal \u7c7b\u578b\uff0c\u90a3\u4e48\u8fd4\u56de Decimal \u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5426\u5219\u8fd4\u56de Double \u7c7b\u578b\u7684\u503c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select var_pop(i_current_price), i_rec_start_date from item group by i_rec_start_date;\n+--------------------------+------------------+\n| var_pop(i_current_price) | i_rec_start_date |\n+--------------------------+------------------+\n|       314.96177792808226 | 1997-10-27       |\n|       463.73633459357285 | NULL             |\n|       302.02102643609123 | 1999-10-28       |\n|        337.9318386924913 | 2000-10-27       |\n|       333.80931439318346 | 2001-10-27       |\n+--------------------------+------------------+\n\nselect variance(i_current_price), i_rec_start_date from item group by i_rec_start_date;\n+---------------------------+------------------+\n| variance(i_current_price) | i_rec_start_date |\n+---------------------------+------------------+\n|        314.96177792808226 | 1997-10-27       |\n|         463.7363345935729 | NULL             |\n|        302.02102643609123 | 1999-10-28       |\n|         337.9318386924912 | 2000-10-27       |\n|        333.80931439318346 | 2001-10-27       |\n+---------------------------+------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>s});var t=r(67294);const c=t.createContext({});function s(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:s(e),t.createElement(c.Provider,{value:a},n)}}}]);