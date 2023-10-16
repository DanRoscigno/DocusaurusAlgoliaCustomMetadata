"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66264],{86209:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var c=s(85893),r=s(11151);const o={displayed_sidebar:"Chinese"},i="JSON \u8fd0\u7b97\u7b26",l={id:"sql-reference/sql-functions/json-functions/json-operators",title:"JSON \u8fd0\u7b97\u7b26",description:"StarRocks \u652f\u6301\u4f7f\u7528 `\uff0c>=\uff0c=\uff0c!= \u8fd0\u7b97\u7b26\u67e5\u8be2 JSON \u6570\u636e\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 IN` \u8fd0\u7b97\u7b26\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/json-functions/json-operators.md",sourceDirName:"sql-reference/sql-functions/json-functions",slug:"/sql-reference/sql-functions/json-functions/json-operators",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-operators.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"PARSE_JSON",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json"},next:{title:"\u7bad\u5934\u51fd\u6570",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function"}},t={},d=[{value:"\u8fd0\u7b97\u89c4\u5219",id:"\u8fd0\u7b97\u89c4\u5219",level:2}];function a(n){const e=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre"},(0,r.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"json-\u8fd0\u7b97\u7b26",children:"JSON \u8fd0\u7b97\u7b26"}),"\n",(0,c.jsxs)(e.p,{children:["StarRocks \u652f\u6301\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"<"}),"\uff0c",(0,c.jsx)(e.code,{children:"<="}),"\uff0c",(0,c.jsx)(e.code,{children:">"}),"\uff0c",(0,c.jsx)(e.code,{children:">="}),"\uff0c",(0,c.jsx)(e.code,{children:"="}),"\uff0c",(0,c.jsx)(e.code,{children:"!="})," \u8fd0\u7b97\u7b26\u67e5\u8be2 JSON \u6570\u636e\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"IN"})," \u8fd0\u7b97\u7b26\u3002"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8fd0\u7b97\u7b26\u4e24\u8fb9\u5fc5\u987b\u5747\u4e3a JSON \u7c7b\u578b\u7684\u6570\u636e\u3002"}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679c\u8fd0\u7b97\u7b26\u4e00\u8fb9\u662f JSON \u7c7b\u578b\u7684\u6570\u636e\uff0c\u53e6\u4e00\u8fb9\u4e0d\u662f\uff0c\u5219\u8fd0\u7b97\u65f6\u4f1a\u901a\u8fc7\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff0c\u5c06\u4e0d\u662f JSON \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u6362\u4e3a JSON \u7c7b\u578b\u7684\u6570\u636e\u3002\u7c7b\u578b\u8f6c\u6362\u89c4\u5219\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(e.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",children:"JSON \u7c7b\u578b\u8f6c\u6362"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd0\u7b97\u89c4\u5219",children:"\u8fd0\u7b97\u89c4\u5219"}),"\n",(0,c.jsx)(e.p,{children:"JSON \u8fd0\u7b97\u7b26\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5f53\u8fd0\u7b97\u7b26\u4e24\u8fb9 JSON \u6570\u636e\u7684\u503c\u5c5e\u4e8e\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\u65f6"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4e3a\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\uff08\u6570\u5b57\u7c7b\u578b\u3001\u5b57\u7b26\u4e32\u7c7b\u578b\u3001\u5e03\u5c14\u7c7b\u578b)\uff0c\u5219\u8fd0\u7b97\u65f6\uff0c\u9075\u5faa\u57fa\u672c\u7c7b\u578b\u7684\u8fd0\u7b97\u89c4\u5219\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u90fd\u662f\u6570\u503c\u7c7b\u578b\uff0c\u4f46\u5206\u522b\u4e3a DOUBLE \u548c INT \u65f6\uff0c\u5219\u4f1a\u5c06 INT \u8f6c\u578b\u6210 DOUBLE \u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4e3a\u590d\u5408\u6570\u636e\u7c7b\u578b\uff08\u5bf9\u8c61\u7c7b\u578b\u3001\u6570\u7ec4\u7c7b\u578b \uff09\uff0c\u5219\u8fd0\u7b97\u65f6\uff0c\u6309\u7167\u5143\u7d20\u9010\u4e2a\u6bd4\u8f83\uff1a\u6309 key \u7684\u5b57\u5178\u5e8f\u6392\u5e8f\uff0c\u518d\u9010\u4e2a\u6bd4\u8f83 key \u5bf9\u5e94\u7684 value\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u6bd4\u5982\uff0c\u5bf9\u4e8e JSON \u5bf9\u8c61 ",(0,c.jsx)(e.code,{children:'{"a": 1, "c": 2}'})," \u548c ",(0,c.jsx)(e.code,{children:'{"b": 1, "a": 2}'}),"\uff0c\u6309\u7167\u8fd0\u7b97\u7b26\u5de6\u4fa7 JSON \u5bf9\u8c61\u4e2d\u952e\u7684\u5b57\u5178\u5e8f\u8fdb\u884c\u5bf9\u6bd4\u3002\u5bf9\u6bd4\u8282\u70b9 ",(0,c.jsx)(e.code,{children:"a"}),"\uff0c\u7531\u4e8e\u5de6\u8fb9\u7684\u503c ",(0,c.jsx)(e.code,{children:"1"})," < \u53f3\u8fb9\u7684\u503c ",(0,c.jsx)(e.code,{children:"2"})," \uff0c\u56e0\u6b64",(0,c.jsx)(e.code,{children:'{"a": 1, "c": 2}'})," < ",(0,c.jsx)(e.code,{children:'{"b": 1, "a": 2}'}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'mysql> SELECT PARSE_JSON(\'{"a": 1, "c": 2}\') < PARSE_JSON(\'{"b": 1, "a": 2} \');\n       -> 1\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5bf9\u4e8e JSON \u5bf9\u8c61 ",(0,c.jsx)(e.code,{children:'{"a": 1, "c": 2}'})," \u548c ",(0,c.jsx)(e.code,{children:'{"b": 1, "a": 1}'}),"\uff0c\u6309\u7167\u8fd0\u7b97\u7b26\u5de6\u4fa7 JSON \u5bf9\u8c61\u4e2d\u952e\u7684\u5b57\u5178\u5e8f\u8fdb\u884c\u5bf9\u6bd4\u3002\u9996\u5148\u5bf9\u6bd4\u8282\u70b9 ",(0,c.jsx)(e.code,{children:"a"}),"\uff0c \u5de6\u53f3\u7684\u503c\u5747\u4e3a ",(0,c.jsx)(e.code,{children:"1"}),"\u3002\u5bf9\u6bd4\u8282\u70b9 ",(0,c.jsx)(e.code,{children:"c"}),"\uff0c\u7531\u4e8e\u53f3\u4fa7\u4e0d\u5b58\u5728\u8be5\u503c\uff0c\u56e0\u6b64 ",(0,c.jsx)(e.code,{children:'{"a": 1, "c": 2}'})," > ",(0,c.jsx)(e.code,{children:'{"b": 1, "a": 1}'}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'mysql> SELECT PARSE_JSON(\'{"a": 1, "c": 2}\') < PARSE_JSON(\'{"b": 1, "a": 1}\');\n       -> 0\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5f53\u8fd0\u7b97\u7b26\u4e24\u8fb9 JSON \u6570\u636e\u7684\u503c\u4e3a\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u65f6\uff0c\u8fd0\u7b97\u65f6\uff0c\u6309\u7167\u7c7b\u578b\u6392\u5e8f\uff0c\u8fdb\u884c\u6bd4\u8f83\u3002\u76ee\u524d\u7c7b\u578b\u6392\u5e8f\u4e3a NULL < BOOLEAN < ARRAY < OBJECT < DOUBLE < INT < STRING\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'mysql> SELECT PARSE_JSON(\'"a"\') < PARSE_JSON(\'{"a": 1, "c": 2}\');\n       -> 0\n'})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>o});var c=s(67294);const r=c.createContext({});function o(n){const e=c.useContext(r);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||i:o(n),c.createElement(r.Provider,{value:l},e)}}}]);