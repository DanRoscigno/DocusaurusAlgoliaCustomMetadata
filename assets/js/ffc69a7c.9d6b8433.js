"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[5522],{94788:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var c=s(85893),o=s(11151);const i={},r="JSON_EXISTS",t={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",title:"JSON_EXISTS",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",permalink:"/doc/zh/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"JSON_EACH",permalink:"/doc/zh/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each"},next:{title:"json_keys",permalink:"/doc/zh/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,o.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"json_exists",children:"JSON_EXISTS"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\uff08",(0,c.jsx)(e.code,{children:"json_path"}),"\uff09\u662f\u5426\u5b58\u5728\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u7684\u503c\u3002\u5982\u679c\u503c\u5b58\u5728\uff0c\u5219\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"1"}),"\uff1b\u5982\u679c\u503c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"JSON_EXISTS(json_object_expr, json_path)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_object_expr"}),"\uff1aJSON \u5bf9\u8c61\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u662f JSON \u7c7b\u578b\u7684\u5217\uff0c\u6216\u8005 PARSE_JSON \u7b49 JSON \u51fd\u6570\u6784\u9020\u7684 JSON \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_path"}),": \u67e5\u8be2 JSON \u5bf9\u8c61\u65f6\u7684\u8def\u5f84\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002StarRocks \u652f\u6301\u7684 JSON Path \u7684\u8bed\u6cd5\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(e.a,{href:"/doc/zh/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators#json-path",children:"JSON Path \u8bed\u6cd5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de BOOLEAN \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f\uff08",(0,c.jsx)(e.code,{children:"'$.a.b'"})," \uff09\u6307\u5b9a\u7684\u503c\u3002\u7531\u4e8e\u503c\u5b58\u5728\uff0c\u56e0\u6b64\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"1"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"SELECT JSON_EXISTS(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.b');\n+-----------------------------------------------------+\n| json_exists(parse_json('{\"a\": {\"b\": 1}}'), '$.a.b') |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f\uff08",(0,c.jsx)(e.code,{children:"'$.a.c'"})," \uff09\u6307\u5b9a\u7684\u503c\u3002\u7531\u4e8e\u503c\u4e0d\u5b58\u5728\uff0c\u56e0\u6b64\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"SELECT JSON_EXISTS(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.c');\n +-----------------------------------------------------+\n| json_exists(parse_json('{\"a\": {\"b\": 1}}'), '$.a.c') |\n+-----------------------------------------------------+\n|                                                   0 |\n+-----------------------------------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,c.jsx)(e.code,{children:"'$.a[2]'"})," \uff08a \u6570\u7ec4\u7684\u7b2c 2 \u4e2a\u5143\u7d20\uff09\u6307\u5b9a\u7684\u503c\u3002\u7531\u4e8e a \u6570\u7ec4\u4e2d\u5b58\u5728\u7b2c 2 \u4e2a\u5143\u7d20\uff0c\u56e0\u6b64\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"1"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"SELECT JSON_EXISTS(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[2]');\n+-----------------------------------------------------+\n| json_exists(parse_json('{\"a\": [1,2,3]}'), '$.a[2]') |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u56db\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,c.jsx)(e.code,{children:"'$.a[3]'"})," \uff08a \u6570\u7ec4\u7684\u7b2c 3 \u4e2a\u5143\u7d20\uff09\u6307\u5b9a\u7684\u503c\u3002\u7531\u4e8e a \u6570\u7ec4\u4e2d\u4e0d\u5b58\u5728\u7b2c 3 \u4e2a\u5143\u7d20\uff0c\u56e0\u6b64\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"SELECT JSON_EXISTS(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[3]');\n+-----------------------------------------------------+\n| json_exists(parse_json('{\"a\": [1,2,3]}'), '$.a[3]') |\n+-----------------------------------------------------+\n|                                                   0 |\n+-----------------------------------------------------+\n"})})]})}const j=function(n={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>i});var c=s(67294);const o=c.createContext({});function i(n){const e=c.useContext(o);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||r:i(n),c.createElement(o.Provider,{value:t},e)}}}]);