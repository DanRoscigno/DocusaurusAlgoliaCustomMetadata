"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10687],{32132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),s=t(11151);const i={},c="quarter",l={id:"sql-reference/sql-functions/date-time-functions/quarter",title:"quarter",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/quarter.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/quarter",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/quarter",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/quarter.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"now, current_timestamp, localtime, localtimestamp",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/now"},next:{title:"second",permalink:"/doc/zh/2.5/sql-reference/sql-functions/date-time-functions/second"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quarter",children:"quarter"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u7ed9\u5b9a\u7684\u65e5\u671f\u503c\u5bf9\u5e94\u7684\u5b63\u5ea6\uff0c\u8303\u56f4 1~4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"INT quarter(DATETIME|DATE date);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"date"}),": \u65e5\u671f\u8868\u8fbe\u5f0f\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u6216 DATE\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u51fa\u73b0\u4ee5\u4e0b\u60c5\u51b5\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u503c\u4e3a\u7a7a\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6307\u5b9a\u7684\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u6bd4\u5982 2022-02-29\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u65e5\u671f\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8fd4\u56de DATETIME \u683c\u5f0f\u65e5\u671f\u5bf9\u5e94\u7684\u5b63\u5ea6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT QUARTER(\"2022-10-09 15:59:33\");\n+--------------------------------+\n| quarter('2022-10-09 15:59:33') |\n+--------------------------------+\n|                              4 |\n+--------------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8fd4\u56de DATE \u683c\u5f0f\u65e5\u671f\u5bf9\u5e94\u7684\u5b63\u5ea6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT QUARTER(\"2022-10-09\");\n+-----------------------+\n| quarter('2022-10-09') |\n+-----------------------+\n|                     4 |\n+-----------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u5bf9\u5e94\u7684\u5b63\u5ea6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT QUARTER(NOW());\n+----------------+\n| quarter(now()) |\n+----------------+\n|              4 |\n+----------------+\n\nSELECT QUARTER(CURDATE());\n+--------------------+\n| quarter(curdate()) |\n+--------------------+\n|                  4 |\n+--------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var r=t(67294);const s=r.createContext({});function i(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:i(e),r.createElement(s.Provider,{value:l},n)}}}]);