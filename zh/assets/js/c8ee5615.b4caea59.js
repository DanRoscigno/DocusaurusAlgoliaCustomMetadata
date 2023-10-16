"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11099],{8307:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>_,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(85893),t=s(11151);const r={displayed_sidebar:"Chinese"},a="bitmap_subset_in_range",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",title:"bitmap_subset_in_range",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_remove",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_remove"},next:{title:"bitmap_subset_limit",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_subset_in_range",children:"bitmap_subset_in_range"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece Bitmap \u4e2d\u8fd4\u56de\u53d6\u503c\u5728\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5143\u7d20\u3002\u8fd4\u56de\u7684\u5143\u7d20\u662f Bitmap \u7684\u5b50\u96c6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u4e3b\u8981\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BITMAP bitmap_subset_in_range(BITMAP src, BIGINT start_range, BIGINT end_range)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"src"}),": \u8981\u622a\u53d6\u7684\u76ee\u6807 bitmap\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start_range"}),": \u7528\u4e8e\u6307\u5b9a\u8303\u56f4\u7684\u8d77\u59cb\u503c\uff0c\u5fc5\u987b\u662f BIGINT \u7c7b\u578b\u3002\u5982\u679c\u6307\u5b9a\u7684\u8d77\u59cb\u503c\u8d85\u8fc7\u4e86 Bitmap \u7684\u6700\u5927\u957f\u5ea6\uff0c\u5219\u8fd4\u56de NULL\uff0c\u53c2\u89c1\u793a\u4f8b\u56db\u3002\u5982\u679c ",(0,i.jsx)(n.code,{children:"start_range"})," \u5b58\u5728\u4e8e Bitmap \u4e2d\uff0c\u8fd4\u56de\u503c\u4f1a\u5305\u62ec ",(0,i.jsx)(n.code,{children:"start_range"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"end_range"}),": \u7528\u4e8e\u6307\u5b9a\u8303\u56f4\u7684\u7ed3\u675f\u503c\uff0c\u5fc5\u987b\u662f BIGINT \u7c7b\u578b. \u5982\u679c ",(0,i.jsx)(n.code,{children:"end_range"})," \u5c0f\u4e8e\u6216\u7b49\u4e8e ",(0,i.jsx)(n.code,{children:"start range"}),"\uff0c\u8fd4\u56de NULL\uff0c\u53c2\u89c1\u793a\u4f8b\u4e09\u3002\u6ce8\u610f\u8fd4\u56de\u503c\u4e0d\u5305\u62ec ",(0,i.jsx)(n.code,{children:"end_range"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u8f93\u5165 BITMAP \u7684\u5b50\u96c6\u3002\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u65e0\u6548\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de\u7684\u5b50\u96c6\u5305\u62ec ",(0,i.jsx)(n.code,{children:"start_range"})," \u4f46\u662f\u4e0d\u5305\u62ec ",(0,i.jsx)(n.code,{children:"end_range"}),"\uff0c\u53c2\u89c1\u793a\u4f8b\u4e94\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0cbitmap_subset_in_range() \u51fd\u6570\u7684\u8f93\u5165\u503c\u4e3a ",(0,i.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"})," \u51fd\u6570\u8ba1\u7b97\u540e\u7684\u7ed3\u679c\u3002\u6bd4\u5982\u793a\u4f8b\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"bitmap_from_string('1,1,3,1,5,3,5,7,7,9')"})," \u5b9e\u9645\u8f93\u51fa\u7684 BITMAP \u503c\u4e3a ",(0,i.jsx)(n.code,{children:"1, 3, 5, 7, 9"}),"\u3002bitmap_subset_in_range() \u4f1a\u57fa\u4e8e\u8fd9\u4e2a\u503c\u8fdb\u884c\u8ba1\u7b97\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4ece BITMAP \u4e2d\u8fd4\u56de\u53d6\u503c\u5728 [1,4) \u4e4b\u95f4\u7684\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 1, 4)) value;\n+-------+\n| value |\n+-------+\n| 1,3   |\n+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4ece Bitmap \u4e2d\u8fd4\u56de\u53d6\u503c\u5728 [1,100) \u4e4b\u95f4\u7684\u5143\u7d20\u3002100 \u8d85\u8fc7\u4e86 Bitmap \u7684\u6700\u5927\u957f\u5ea6\uff0c\u6240\u4ee5\u8fd4\u56de\u6240\u6709\u5339\u914d\u7684\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, 100)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,3,5,7,9 |\n+-----------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u7ed3\u675f\u503c 3 \u5c0f\u4e8e\u8d77\u59cb\u503c 4\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u8d77\u59cb\u503c 10 \u8d85\u8fc7\u4e86 Bitmap \u7684\u6700\u5927\u957f\u5ea6\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 10, 15)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e94\uff1a\u4ece Bitmap \u4e2d\u8fd4\u56de\u53d6\u503c\u5728 [1,3) \u4e4b\u95f4\u7684\u5143\u7d20\u3002\u8fd4\u56de\u7684\u5b50\u96c6\u5305\u62ec\u8d77\u59cb\u503c 1\uff0c\u4e0d\u5305\u62ec\u7ed3\u675f\u503c 3\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,4,5,6,7,9'), 1, 3)) value;\n+-------+\n| value |\n+-------+\n| 1     |\n+-------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit",children:"bitmap_subset_limit"})})]})}const _=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:r(e),i.createElement(t.Provider,{value:c},n)}}}]);