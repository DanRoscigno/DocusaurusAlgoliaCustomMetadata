"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98907],{50705:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var i=s(85893),d=s(11151);const c={displayed_sidebar:"Chinese"},t="week",r={id:"sql-reference/sql-functions/date-time-functions/week",title:"week",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/week.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/week",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/week",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/week.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"utc_timestamp",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/utc_timestamp"},next:{title:"week_iso",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/week_iso"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",del:"del"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"week",children:"week"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba1\u7b97\u6307\u5b9a\u65e5\u671f\u5c5e\u4e8e\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5468\u3002\u8be5\u51fd\u6570\u4e0e MySQL \u4e2d\u7684 WEEK \u51fd\u6570\u8bed\u4e49\u76f8\u540c\u3002\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INT WEEK(DATETIME/DATE date, INT mode)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"date"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u548c DATE\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mode"}),": \u53ef\u9009\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002\u7528\u4e8e\u786e\u5b9a\u5468\u6570\u8ba1\u7b97\u903b\u8f91\uff0c\u5373\u4e00\u5468\u8d77\u59cb\u4e8e\u5468\u65e5\u8fd8\u662f\u5468\u4e00\uff0c\u4ee5\u53ca\u8fd4\u56de\u503c\u7684\u8303\u56f4\u662f 0",(0,i.jsx)(n.del,{children:"53 \u8fd8\u662f 1"}),"53\u3002\u8be5\u53c2\u6570\u53d6\u503c\u8303\u56f4 0~7\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,i.jsx)(n.code,{children:"0"}),"\u3002\u5982\u679c\u672a\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u9ed8\u8ba4\u6309\u7167\u6a21\u5f0f ",(0,i.jsx)(n.code,{children:"0"}),"\u5bf9\u5e94\u7684\u89c4\u5219\u8ba1\u7b97\u3002\u5177\u4f53\u7684\u8bed\u4e49\u5982\u4e0b\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"Mode    First day of week    Range    Week 1 is the first week \u2026\n0       Sunday               0-53     with a Sunday in this year\n1       Monday               0-53     with 4 or more days this year\n2       Sunday               1-53     with a Sunday in this year\n3       Monday               1-53     with 4 or more days this year\n4       Sunday               0-53     with 4 or more days this year\n5       Monday               0-53     with a Monday in this year\n6       Sunday               1-53     with 4 or more days this year\n7       Monday               1-53     with a Monday in this year\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\u3002\u53d6\u503c\u8303\u56f4 0~53\uff0c\u5177\u4f53\u7684\u8303\u56f4\u7531 ",(0,i.jsx)(n.code,{children:"mode"})," \u53c2\u6570\u51b3\u5b9a\u3002 \u5982\u679c ",(0,i.jsx)(n.code,{children:"date"})," \u53d6\u503c\u7c7b\u578b\u4e0d\u5408\u6cd5\u6216\u8f93\u5165\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u67e5\u8be2 ",(0,i.jsx)(n.code,{children:"2007-01-01"})," \u6240\u5728\u7684\u5468\uff0c",(0,i.jsx)(n.code,{children:"2007-01-01"})," \u5728\u65e5\u5386\u4e0a\u662f\u5468\u4e00\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mode"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"0"}),"\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a 0\u3002\u6b64\u65f6\u5468\u65e5\u4f5c\u4e3a\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c",(0,i.jsx)(n.code,{children:"2007-01-01"})," \u4e0d\u80fd\u4f5c\u4e3a\u7b2c\u4e00\u5468\uff0c\u56e0\u6b64\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT WEEK('2007-01-01', 0);\n+-----------------------+\n| week('2007-01-01', 0) |\n+-----------------------+\n|                     0 |\n+-----------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mode"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"1"}),"\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,i.jsx)(n.code,{children:"1"}),"\u3002\u6b64\u65f6\u5468\u4e00\u4f5c\u4e3a\u4e00\u5468\u7684\u7b2c\u4e00\u5929\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT WEEK('2007-01-01', 1);\n+-----------------------+\n| week('2007-01-01', 1) |\n+-----------------------+\n|                     1 |\n+-----------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mode"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"2"}),"\uff0c\u8fd4\u56de\u7ed3\u679c ",(0,i.jsx)(n.code,{children:"53"}),"\u3002\u6b64\u65f6\u5468\u65e5\u4f5c\u4e3a\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4f46\u662f\u53d6\u503c\u8303\u56f4\u662f 1~53\uff0c\u6240\u4ee5\u8fd4\u56de 53\uff0c\u8868\u793a\u8fd9\u662f\u4e0a\u4e00\u5e74\u7684\u6700\u540e\u4e00\u5468\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT WEEK('2007-01-01', 2);\n+-----------------------+\n| week('2007-01-01', 2) |\n+-----------------------+\n|                    53 |\n+-----------------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var i=s(67294);const d=i.createContext({});function c(e){const n=i.useContext(d);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||t:c(e),i.createElement(d.Provider,{value:r},n)}}}]);