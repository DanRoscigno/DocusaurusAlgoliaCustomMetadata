"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18185],{82199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(85893),c=t(11151);const r={},i="APPROX_COUNT_DISTINCT",o={id:"sql-reference/sql-functions/aggregate-functions/approx_count_distinct",title:"APPROX_COUNT_DISTINCT",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/approx_count_distinct.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",permalink:"/doc/zh/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/approx_count_distinct.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ANY_VALUE",permalink:"/doc/zh/sql-reference/sql-functions/aggregate-functions/any_value"},next:{title:"AVG",permalink:"/doc/zh/sql-reference/sql-functions/aggregate-functions/avg"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",blockquote:"blockquote",pre:"pre"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"approx_count_distinct",children:"APPROX_COUNT_DISTINCT"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u7c7b\u4f3c\u4e8e ",(0,s.jsx)(n.code,{children:"COUNT(DISTINCT col)"})," \u7ed3\u679c\u7684\u8fd1\u4f3c\u503c\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b83\u6bd4 COUNT \u548c DISTINCT \u7ec4\u5408\u7684\u901f\u5ea6\u66f4\u5feb\uff0c\u5e76\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u56e0\u6b64\u5bf9\u4e8e\u9ad8\u57fa\u6570\u7684\u5217\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"APPROX_COUNT_DISTINCT(expr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"epxr"}),": \u88ab\u9009\u53d6\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------------------------+\n| approx_count_distinct(`query_id`) |\n+-----------------------------------+\n| 17721                             |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const c=s.createContext({});function r(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(c.Provider,{value:o},n)}}}]);