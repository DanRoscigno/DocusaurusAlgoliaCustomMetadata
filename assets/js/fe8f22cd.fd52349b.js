"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29905],{27635:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var c=s(85893),o=s(11151);const r={},i="\u7bad\u5934\u51fd\u6570",t={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",title:"\u7bad\u5934\u51fd\u6570",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",permalink:"/doc/zh/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"JSON \u8fd0\u7b97\u7b26",permalink:"/doc/zh/sql-reference/sql-functions/json-functions/json-operators"},next:{title:"cast",permalink:"/doc/zh/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",blockquote:"blockquote"},(0,o.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"\u7bad\u5934\u51fd\u6570",children:"\u7bad\u5934\u51fd\u6570"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u7bad\u5934\u51fd\u6570 ",(0,c.jsx)(e.code,{children:"->"})," \u53ef\u4ee5\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\uff08",(0,c.jsx)(e.code,{children:"json_path"}),"\uff09\u4e2d\u7684\u503c\uff0c\u5e76\u8f93\u51fa\u4e3a JSON \u7c7b\u578b\u3002\u7bad\u5934\u51fd\u6570\u6bd4 JSON_QUERY \u51fd\u6570\u66f4\u7b80\u6d01\u6613\u7528\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"json_object_expr -> json_path\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_object_expr"}),": JSON \u5bf9\u8c61\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u662f JSON \u7c7b\u578b\u7684\u5217\uff0c\u6216\u8005 PARSE_JSON \u7b49 JSON \u51fd\u6570\u6784\u9020\u7684 JSON \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_path"}),": \u67e5\u8be2 JSON \u5bf9\u8c61\u65f6\u7684\u8def\u5f84\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002StarRocks \u652f\u6301\u7684 JSON Path \u7684\u8bed\u6cd5\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(e.a,{href:"/doc/zh/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators#json-path",children:"JSON Path \u8bed\u6cd5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de JSON \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u67e5\u8be2\u7684\u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de SQL \u7c7b\u578b\u7684 NULL\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,c.jsx)(e.code,{children:"'$.a.b'"})," \u6307\u5b9a\u7684\u503c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT PARSE_JSON('{\"a\": {\"b\": 1}}') -> '$.a.b';\n       -> 1\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u652f\u6301\u5d4c\u5957\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff0c\u57fa\u4e8e\u524d\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u7ed3\u679c\u8fdb\u884c\u67e5\u8be2\u3002"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u6b64\u793a\u4f8b\u4e2d\u7684 ",(0,c.jsx)(e.code,{children:"json_path"})," \u7701\u7565\u6839\u5143\u7d20$\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT PARSE_JSON('{\"a\": {\"b\": 1}}')->'a'->'b';\n       -> 1\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,c.jsx)(e.code,{children:"'a'"})," \u6307\u5b9a\u7684\u503c\u3002"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u6b64\u793a\u4f8b\u4e2d\u7684 ",(0,c.jsx)(e.code,{children:"json_path"})," \u7701\u7565\u6839\u5143\u7d20$\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'mysql> SELECT PARSE_JSON(\'{"a": "b"}\') -> \'a\';\n       -> "b"\n'})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>r});var c=s(67294);const o=c.createContext({});function r(n){const e=c.useContext(o);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||i:r(n),c.createElement(o.Provider,{value:t},e)}}}]);