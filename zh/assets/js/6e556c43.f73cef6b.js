"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39156],{86338:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=s(85893),l=s(11151);const i={},c="\u6570\u636e\u6a21\u578b",r={id:"table_design/table_types/table_types",title:"\u6570\u636e\u6a21\u578b",description:"\u5efa\u8868\u65f6\uff0c\u60a8\u9700\u8981\u6307\u5b9a\u6570\u636e\u6a21\u578b (Data Model)\uff0c\u8fd9\u6837\u6570\u636e\u5bfc\u5165\u81f3\u6570\u636e\u6a21\u578b\u65f6\uff0cStarRocks \u4f1a\u6309\u7167\u6392\u5e8f\u952e\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u5904\u7406\u548c\u5b58\u50a8\u3002\u672c\u6587\u4ecb\u7ecd StarRocks \u652f\u6301\u7684\u5404\u79cd\u6570\u636e\u6a21\u578b\uff0c\u6ee1\u8db3\u60a8\u5728\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u4e0b\u7684\u9700\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/table_design/table_types/table_types.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/",permalink:"/doc/zh/docs/2.5/table_design/table_types/",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/table_design/table_types/table_types.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u52a8\u6001\u5206\u533a",permalink:"/doc/zh/docs/2.5/table_design/dynamic_partitioning"},next:{title:"\u805a\u5408\u6a21\u578b",permalink:"/doc/zh/docs/2.5/table_design/table_types/aggregate_table"}},d={},o=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b-1",level:3},{value:"\u6392\u5e8f\u952e",id:"\u6392\u5e8f\u952e",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",blockquote:"blockquote",strong:"strong",a:"a"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6570\u636e\u6a21\u578b",children:"\u6570\u636e\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u60a8\u9700\u8981\u6307\u5b9a\u6570\u636e\u6a21\u578b (Data Model)\uff0c\u8fd9\u6837\u6570\u636e\u5bfc\u5165\u81f3\u6570\u636e\u6a21\u578b\u65f6\uff0cStarRocks \u4f1a\u6309\u7167\u6392\u5e8f\u952e\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u5904\u7406\u548c\u5b58\u50a8\u3002\u672c\u6587\u4ecb\u7ecd StarRocks \u652f\u6301\u7684\u5404\u79cd\u6570\u636e\u6a21\u578b\uff0c\u6ee1\u8db3\u60a8\u5728\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u4e0b\u7684\u9700\u6c42\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,t.jsx)(n.h3,{id:"\u6570\u636e\u6a21\u578b-1",children:"\u6570\u636e\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u652f\u6301\u56db\u79cd\u6570\u636e\u6a21\u578b\uff0c\u5206\u522b\u662f\u660e\u7ec6\u6a21\u578b (Duplicate Key Model)\u3001\u805a\u5408\u6a21\u578b (Aggregate Key Model)\u3001\u66f4\u65b0\u6a21\u578b (Unique Key Model) \u548c\u4e3b\u952e\u6a21\u578b (Primary Key Model)\u3002\u8fd9\u56db\u79cd\u6570\u636e\u6a21\u578b\u80fd\u591f\u652f\u6301\u591a\u79cd\u6570\u636e\u5206\u6790\u573a\u666f\uff0c\u4f8b\u5982\u65e5\u5fd7\u5206\u6790\u3001\u6570\u636e\u6c47\u603b\u5206\u6790\u3001\u5b9e\u65f6\u5206\u6790\u7b49\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u6392\u5e8f\u952e",children:"\u6392\u5e8f\u952e"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5bfc\u5165\u81f3\u4f7f\u7528\u67d0\u4e2a\u6570\u636e\u6a21\u578b\u7684\u8868\uff0c\u4f1a\u6309\u7167\u5efa\u8868\u65f6\u6307\u5b9a\u7684\u4e00\u5217\u6216\u591a\u5217\u6392\u5e8f\u540e\u5b58\u50a8\uff0c\u8fd9\u90e8\u5206\u7528\u4e8e\u6392\u5e8f\u7684\u5217\u5c31\u79f0\u4e3a\u6392\u5e8f\u952e\u3002\u6392\u5e8f\u952e\u901a\u5e38\u4e3a\u67e5\u8be2\u65f6\u8fc7\u6ee4\u6761\u4ef6\u9891\u7e41\u4f7f\u7528\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5217\uff0c\u7528\u4ee5\u52a0\u901f\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u660e\u7ec6\u6a21\u578b\u4e2d\uff0c\u6570\u636e\u6309\u7167\u6392\u5e8f\u952e ",(0,t.jsx)(n.code,{children:"DUPLICATE KEY"})," \u6392\u5e8f\uff0c\u5e76\u4e14\u6392\u5e8f\u952e\u4e0d\u9700\u8981\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u6570\u636e\u6309\u7167\u6392\u5e8f\u952e ",(0,t.jsx)(n.code,{children:"AGGREGATE KEY"})," \u805a\u5408\u540e\u6392\u5e8f\uff0c\u5e76\u4e14\u6392\u5e8f\u952e\u9700\u8981\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u66f4\u65b0\u6a21\u578b\u4e2d\uff0c\u6570\u636e\u6309\u7167\u6392\u5e8f\u952e ",(0,t.jsx)(n.code,{children:"UNIQUE KEY"})," REPLACE \u540e\u6392\u5e8f\uff0c\u5e76\u4e14\u6392\u5e8f\u952e\u9700\u8981\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e3b\u952e\u6a21\u578b\u4e2d\uff0c\u6570\u636e\u6309\u7167\u6392\u5e8f\u952e ",(0,t.jsx)(n.code,{children:"PRIMARY KEY"})," REPLACE \u540e\u6392\u5e8f\uff0c\u5e76\u4e14\u6392\u5e8f\u952e\u9700\u8981\u6ee1\u8db3\u552f\u4e00\u6027\u548c\u975e\u7a7a\u7ea6\u675f\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6392\u5e8f\u952e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"/doc/zh/docs/2.5/table_design/Sort_key",children:"\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\uff0c\u6392\u5e8f\u952e\u5fc5\u987b\u5b9a\u4e49\u5728\u5176\u4ed6\u5217\u4e4b\u524d\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u521b\u5efa\u8868\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u5b9a\u4e49\u4e3a\u6392\u5e8f\u952e\u3002\u6392\u5e8f\u952e\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\u7684\u51fa\u73b0\u6b21\u5e8f\uff0c\u4e3a\u6570\u636e\u5b58\u50a8\u65f6\u591a\u91cd\u6392\u5e8f\u7684\u6b21\u5e8f\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e0d\u652f\u6301\u6392\u5e8f\u952e\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3001HLL\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u524d\u7f00\u7d22\u5f15\u7684\u957f\u5ea6\u9650\u5236\u4e3a 36 \u5b57\u8282\u3002\u5982\u679c\u6392\u5e8f\u952e\u4e2d\u5168\u90e8\u5217\u7684\u503c\u7684\u957f\u5ea6\u52a0\u8d77\u6765\u8d85\u8fc7 36 \u5b57\u8282\uff0c\u5219\u524d\u7f00\u7d22\u5f15\u4ec5\u4f1a\u4fdd\u5b58\u9650\u5236\u8303\u56f4\u5185\u6392\u5e8f\u952e\u7684\u82e5\u5e72\u524d\u7f00\u5217\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5bfc\u5165\u7684\u6570\u636e\u5b58\u5728\u91cd\u590d\u7684\u4e3b\u952e\uff0c\u5219\u6570\u636e\u5bfc\u5165\u81f3\u6570\u636e\u6a21\u578b\uff0c\u5b58\u50a8\u5728 StarRocks \u65f6\uff0c\u5219\u4f1a\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u5904\u7406\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u660e\u7ec6\u6a21\u578b\uff1a\u8868\u4e2d\u4f1a\u5b58\u5728\u4e3b\u952e\u91cd\u590d\u7684\u6570\u636e\u884c\uff0c\u5e76\u4e14\u4e0e\u5bfc\u5165\u7684\u6570\u636e\u662f\u5b8c\u5168\u5bf9\u5e94\u7684\u3002\u60a8\u53ef\u4ee5\u53ec\u56de\u6240\u5bfc\u5165\u7684\u5168\u90e8\u5386\u53f2\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u805a\u5408\u6a21\u578b\uff1a\u8868\u4e2d\u4e0d\u5b58\u5728\u4e3b\u952e\u91cd\u590d\u7684\u6570\u636e\u884c\uff0c\u4e3b\u952e\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\u3002\u5bfc\u5165\u7684\u6570\u636e\u4e2d\u4e3b\u952e\u91cd\u590d\u7684\u6570\u636e\u884c\u805a\u5408\u4e3a\u4e00\u884c\uff0c\u5373\u5177\u6709\u76f8\u540c\u4e3b\u952e\u7684\u6307\u6807\u5217\uff0c\u4f1a\u901a\u8fc7\u805a\u5408\u51fd\u6570\u8fdb\u884c\u805a\u5408\u3002\u60a8\u53ea\u80fd\u53ec\u56de\u5bfc\u5165\u7684\u5168\u90e8\u5386\u53f2\u6570\u636e\u7684\u805a\u5408\u7ed3\u679c\uff0c\u4f46\u662f\u65e0\u6cd5\u53ec\u56de\u5386\u53f2\u660e\u7ec6\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e3b\u952e\u6a21\u578b\u548c\u66f4\u65b0\u6a21\u578b\uff1a\u8868\u4e2d\u4e0d\u5b58\u5728\u4e3b\u952e\u91cd\u590d\u7684\u6570\u636e\u884c\uff0c\u4e3b\u952e\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\u3002\u6700\u65b0\u5bfc\u5165\u7684\u6570\u636e\u884c\uff0c\u66ff\u6362\u6389\u5176\u4ed6\u4e3b\u952e\u91cd\u590d\u7684\u6570\u636e\u884c\u3002\u8fd9\u4e24\u79cd\u6a21\u578b\u53ef\u4ee5\u89c6\u4e3a\u805a\u5408\u6a21\u578b\u7684\u7279\u6b8a\u60c5\u51b5\uff0c\u76f8\u5f53\u4e8e\u5728\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u4e3a\u8868\u7684\u6307\u6807\u5217\u6307\u5b9a\u805a\u5408\u51fd\u6570\u4e3a REPLACE\uff0cREPLACE \u51fd\u6570\u8fd4\u56de\u4e3b\u952e\u76f8\u540c\u7684\u4e00\u7ec4\u6570\u636e\u4e2d\u7684\u6700\u65b0\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var t=s(67294);const l=t.createContext({});function i(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(l.Provider,{value:r},n)}}}]);