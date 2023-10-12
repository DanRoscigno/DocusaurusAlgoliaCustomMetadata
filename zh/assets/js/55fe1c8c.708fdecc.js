"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22328],{27522:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var s=r(85893),a=r(11151);const c={displayed_sidebar:"Chinese31"},t="array_cum_sum",l={id:"sql-reference/sql-functions/array-functions/array_cum_sum",title:"array_cum_sum",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/array-functions/array_cum_sum.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_cum_sum",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_cum_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_cum_sum.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"array_contains_all",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_contains_all"},next:{title:"array_difference",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_difference"}},i={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_cum_sum",children:"array_cum_sum"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u5411\u524d\u7d2f\u52a0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"array_cum_sum(array(bigint))\narray_cum_sum(array(double))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"}),"\uff1a\u9700\u8981\u5904\u7406\u7684\u6570\u7ec4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT (8 \u5b57\u8282\u6709\u7b26\u53f7\u6574\u578b\uff09\u548c DOUBLE (8 \u5b57\u8282\u6d6e\u70b9\u6570)\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u548c\u8f93\u5165\u6570\u7ec4\u7c7b\u578b\u76f8\u540c\u7684\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5bf9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u5411\u524d\u7d2f\u52a0\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select array_cum_sum([11, 11, 12]);\n+---------------------------+\n| array_cum_sum([11,11,12]) |\n+---------------------------+\n| [11,22,34]                |\n+---------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4e0e CAST \u51fd\u6570\u642d\u914d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select array_cum_sum([cast(11.33 as double),cast(11.11 as double),cast(12.324 as double)]);\n+---------------------------------------------------------------------------------------+\n| array_cum_sum([CAST(11.33 AS DOUBLE), CAST(11.11 AS DOUBLE), CAST(12.324 AS DOUBLE)]) |\n+---------------------------------------------------------------------------------------+\n| [11.33,22.439999999999998,34.763999999999996]                                         |\n+---------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u6570\u7ec4\u4e2d\u5305\u542b null \u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select array_cum_sum([null,1,2]);\n+---------------------------------+\n| array_cum_sum([null,1,2])       |\n+---------------------------------+\n| [null,1,3]                      |\n+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u8f93\u5165\u6570\u7ec4\u4e3a NULL\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select array_cum_sum(null);\n+---------------------------------+\n| array_cum_sum(NULL)             |\n+---------------------------------+\n| NULL                            |\n+---------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>c});var s=r(67294);const a=s.createContext({});function c(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||t:c(e),s.createElement(a.Provider,{value:l},n)}}}]);