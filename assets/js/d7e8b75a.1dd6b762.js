"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12344],{34779:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var c=s(85893),r=s(11151);const d={},t="JSON \u51fd\u6570\u6982\u8ff0",i={id:"sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",title:"JSON \u51fd\u6570\u6982\u8ff0",description:"StarRocks \u652f\u6301\u5982\u4e0b JSON \u6784\u9020\u51fd\u6570\u3001JSON \u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570\u3001JSON \u8fd0\u7b97\u7b26\u4ee5\u53ca\u67e5\u8be2 JSON \u5bf9\u8c61\u7684 JSON Path\u3002",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators.md",sourceDirName:"sql-reference/sql-functions/json-functions",slug:"/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",permalink:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"json_string",permalink:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string"},next:{title:"like",permalink:"/doc/zh/3.0/sql-reference/sql-functions/like_predicate-functions/like"}},o={},l=[{value:"JSON \u6784\u9020\u51fd\u6570",id:"json-\u6784\u9020\u51fd\u6570",level:2},{value:"JSON \u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570",id:"json-\u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570",level:2},{value:"JSON \u8fd0\u7b97\u7b26",id:"json-\u8fd0\u7b97\u7b26",level:2},{value:"JSON Path",id:"json-path",level:2}];function h(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code",img:"img",pre:"pre",strong:"strong"},(0,r.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"json-\u51fd\u6570\u6982\u8ff0",children:"JSON \u51fd\u6570\u6982\u8ff0"}),"\n",(0,c.jsx)(e.p,{children:"StarRocks \u652f\u6301\u5982\u4e0b JSON \u6784\u9020\u51fd\u6570\u3001JSON \u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570\u3001JSON \u8fd0\u7b97\u7b26\u4ee5\u53ca\u67e5\u8be2 JSON \u5bf9\u8c61\u7684 JSON Path\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"json-\u6784\u9020\u51fd\u6570",children:"JSON \u6784\u9020\u51fd\u6570"}),"\n",(0,c.jsx)(e.p,{children:"JSON \u6784\u9020\u51fd\u6570\u53ef\u4ee5\u6784\u9020 JSON \u7c7b\u578b\u7684\u6570\u636e\u3002\u4f8b\u5982 JSON \u7c7b\u578b\u7684\u5bf9\u8c61\u3001JSON \u7c7b\u578b\u7684\u6570\u7ec4\u7b49\u3002"}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u51fd\u6570\u540d\u79f0"}),(0,c.jsx)(e.th,{children:"\u529f\u80fd"}),(0,c.jsx)(e.th,{children:"\u793a\u4f8b"}),(0,c.jsx)(e.th,{children:"\u8fd4\u56de\u7ed3\u679c"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",children:"json_object"})}),(0,c.jsx)(e.td,{children:"\u6784\u9020 JSON \u7c7b\u578b\u7684\u5bf9\u8c61\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT JSON_OBJECT(' Daniel Smith', 26, 'Lily Smith', 25);"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'{"Daniel Smith": 26, "Lily Smith": 25}'})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",children:"json_array"})}),(0,c.jsx)(e.td,{children:"\u6784\u9020 JSON \u7c7b\u578b\u7684\u6570\u7ec4\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT JSON_ARRAY(1, 2, 3);"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"[1,2,3]"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",children:"parse_json"})}),(0,c.jsx)(e.td,{children:"\u4ece\u5b57\u7b26\u4e32\u89e3\u6790\u5e76\u6784\u9020\u51fa JSON \u7c7b\u578b\u7684\u6570\u636e\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT PARSE_JSON('{\"a\": 1}');"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'{"a": 1}'})})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"json-\u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570",children:"JSON \u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570"}),"\n",(0,c.jsx)(e.p,{children:"JSON \u67e5\u8be2\u548c\u5904\u7406\u51fd\u6570\u53ef\u4ee5\u67e5\u8be2\u548c\u5904\u7406 JSON \u7c7b\u578b\u7684\u6570\u636e\u3002\u4f8b\u5982\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\u4e0b\u7684\u503c\u3002"}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u51fd\u6570\u540d\u79f0"}),(0,c.jsx)(e.th,{children:"\u529f\u80fd"}),(0,c.jsx)(e.th,{children:"\u793a\u4f8b"}),(0,c.jsx)(e.th,{children:"\u8fd4\u56de\u7ed3\u679c"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",children:"\u7bad\u5934\u51fd\u6570"})}),(0,c.jsx)(e.td,{children:"\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\u4e0b\u7684\u503c\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT parse_json('{\"a\": {\"b\": 1}}') -> '$.a.b';"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",children:"JSON \u7c7b\u578b\u8f6c\u6362"})}),(0,c.jsx)(e.td,{children:"\u5c06\u5b9e\u73b0 JSON \u7c7b\u578b\u7684\u6570\u636e\u4e0e SQL \u7c7b\u578b\u95f4\u7684\u4e92\u76f8\u8f6c\u6362\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT CAST(1 AS JSON);"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",children:"get_json_double"})}),(0,c.jsx)(e.td,{children:"\u89e3\u6790\u5e76\u83b7\u53d6 json_str \u5185 json_path \u7684\u6d6e\u70b9\u578b\u5185\u5bb9\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");'})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1.3"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int",children:"get_json_int"})}),(0,c.jsx)(e.td,{children:"\u89e3\u6790\u5e76\u83b7\u53d6 json_str \u5185 json_path \u7684\u6574\u578b\u5185\u5bb9\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");'})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",children:"get_json_string"})}),(0,c.jsx)(e.td,{children:"\u89e3\u6790\u5e76\u83b7\u53d6 json_str \u5185 json_path \u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u3002\u8be5\u51fd\u6570\u522b\u540d\u4e3a get_json_object."}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'SELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");'})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"v1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",children:"json_each"})}),(0,c.jsx)(e.td,{children:"\u5c06\u6700\u5916\u5c42\u7684 JSON \u5bf9\u8c61\u5c55\u5f00\u4e3a\u952e\u503c\u5bf9\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT * FROM tj_test, LATERAL JSON_EACH(j);"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.img,{alt:"json_each",src:s(39498).Z+"",width:"610",height:"198"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",children:"json_exists"})}),(0,c.jsx)(e.td,{children:"\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u662f\u5426\u5b58\u5728\u67d0\u4e2a\u503c\u3002\u5982\u679c\u5b58\u5728\uff0c\u5219\u8fd4\u56de 1\uff1b\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de 0\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT JSON_EXISTS('{\"a\": 1}', '$.a');"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",children:"json_keys"})}),(0,c.jsx)(e.td,{children:"\u8fd4\u56de JSON \u5bf9\u8c61\u4e2d\u6240\u6709\u6700\u4e0a\u5c42\u6210\u5458 (key) \u7ec4\u6210\u7684\u6570\u7ec4\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'SELECT JSON_KEYS(\'{"a": 1, "b": 2, "c": 3}\');'})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'["a", "b", "c"]'})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",children:"json_length"})}),(0,c.jsx)(e.td,{children:"\u8fd4\u56de JSON \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'SELECT json_length(\'{"Name": "Alice"}\');'})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",children:"json_query"})}),(0,c.jsx)(e.td,{children:"\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\u4e0b\u7684\u503c\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"SELECT JSON_QUERY('{\"a\": 1}', '$.a');"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",children:"json_string"})}),(0,c.jsx)(e.td,{children:"\u5c06 JSON \u5bf9\u8c61\u8f6c\u5316\u4e3a JSON \u5b57\u7b26\u4e32\u3002"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'SELECT json_string(parse_json(\'{"Name": "Alice"}\'));'})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'{"Name": "Alice"}'})})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"json-\u8fd0\u7b97\u7b26",children:"JSON \u8fd0\u7b97\u7b26"}),"\n",(0,c.jsxs)(e.p,{children:["StarRocks \u652f\u6301\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"<"}),"\uff0c",(0,c.jsx)(e.code,{children:"<="}),"\uff0c",(0,c.jsx)(e.code,{children:">"}),"\uff0c",(0,c.jsx)(e.code,{children:">="}),"\uff0c ",(0,c.jsx)(e.code,{children:"="}),"\uff0c",(0,c.jsx)(e.code,{children:"!="})," \u8fd0\u7b97\u7b26\u67e5\u8be2 JSON \u6570\u636e\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 IN \u8fd0\u7b97\u7b26\u3002JSON \u8fd0\u7b97\u7b26\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(e.a,{href:"/doc/zh/3.0/sql-reference/sql-functions/json-functions/json-operators",children:"JSON \u8fd0\u7b97\u7b26"}),"\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"json-path",children:"JSON Path"}),"\n",(0,c.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 JSON Path \u8def\u5f84\u8868\u8fbe\u5f0f\uff0c\u67e5\u8be2 JSON \u7c7b\u578b\u7684\u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\u7684\u503c\u3002JSON Path \u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e00\u822c\u7ed3\u5408\u591a\u79cd JSON \u51fd\u6570\u4f7f\u7528\uff08\u4f8b\u5982 JSON_QUERY\uff09\u3002\u76ee\u524d StarRocks \u4e2d JSON Path \u6ca1\u6709\u5b8c\u5168\u9075\u5faa ",(0,c.jsx)(e.a,{href:"https://modern-sql.com/blog/2017-06/whats-new-in-sql-2016#json-path",children:"SQL/JSONPath \u6807\u51c6"}),"\u3002StarRocks \u4e2d JSON Path \u8bed\u6cd5\u8bf4\u660e\uff0c\u53c2\u89c1\u4e0b\u8868\uff08\u4ee5\u5982\u4e0b JSON object \u4e3a\u4f8b\uff09\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-JSON",children:'{\n    "people": [{\n        "name": "Daniel",\n        "surname": "Smith"\n    }, {\n        "name": "Lily",\n        "surname": "Smith",\n        "active": true\n    }]\n}\n'})}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"JSON Path \u7684\u7b26\u53f7"}),(0,c.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,c.jsx)(e.th,{children:"JSON Path \u793a\u4f8b"}),(0,c.jsx)(e.th,{children:"\u67e5\u8be2\u4e0a\u8ff0 JSON \u5bf9\u8c61\u7684\u503c"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"$"}),(0,c.jsx)(e.td,{children:"\u8868\u793a\u6839\u8282\u70b9\u7684\u5bf9\u8c61\u3002"}),(0,c.jsx)(e.td,{children:"'$'"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'{ "people": [ { "name": "Daniel", "surname": "Smith" }, { "name": "Lily", "surname": Smith, "active": true } ] }'})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"."}),(0,c.jsx)(e.td,{children:"\u8868\u793a\u5b50\u8282\u70b9\u3002"}),(0,c.jsx)(e.td,{children:"' $.people'"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'[ { "name": "Daniel", "surname": "Smith" }, { "name": "Lily", "surname": Smith, "active": true } ]'})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"[]"}),(0,c.jsxs)(e.td,{children:["\u8868\u793a\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u7ec4\u4e0b\u6807\u3002[n] \u8868\u793a\u9009\u62e9\u6570\u7ec4\u4e2d\u7b2c n \u4e2a\u5143\u7d20\uff0c\u4ece 0 \u5f00\u59cb\u8ba1\u6570\u3002",(0,c.jsx)("br",{}),(0,c.jsxs)(e.strong,{children:['\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u67e5\u8be2\u591a\u7ef4\u6570\u7ec4\uff0c\u4f8b\u5982 ["Lucy", "Daniel"], ["James", "Smith"]\u3002\u5982\u679c\u8981\u67e5\u8be2\u5230 "Lucy"\u8fd9\u4e2a\u5143\u7d20\uff0c\u53ef\u4ee5\u4f7f\u7528\u8def\u5f84 ',(0,c.jsx)(e.code,{children:"$.people[0][0]"}),"\u3002"]})]}),(0,c.jsx)(e.td,{children:"'$.people[0]'"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:'{ "name": "Daniel", "surname": "Smith"}'})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"[*]"}),(0,c.jsx)(e.td,{children:"\u8868\u793a\u6570\u7ec4\u4e2d\u7684\u5168\u90e8\u5143\u7d20\u3002"}),(0,c.jsx)(e.td,{children:"'$.people[*].name'"}),(0,c.jsx)(e.td,{children:'["Daniel", "Lily"]'})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"[start: end]"}),(0,c.jsx)(e.td,{children:"\u8868\u793a\u6570\u7ec4\u7247\u6bb5\uff0c\u533a\u95f4\u4e3a [start, end)\uff0c\u4e0d\u5305\u542b end \u4ee3\u8868\u7684\u5143\u7d20\u3002"}),(0,c.jsx)(e.td,{children:"'$.people[0: 1].name'"}),(0,c.jsx)(e.td,{children:'["Daniel"]'})]})]})]})]})}const j=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(h,n)})):h(n)}},39498:(n,e,s)=>{s.d(e,{Z:()=>c});const c=s.p+"assets/images/json_each-acfb20b2e8c25e0f1889a081f532f10f.png"},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>d});var c=s(67294);const r=c.createContext({});function d(n){const e=c.useContext(r);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||t:d(n),c.createElement(r.Provider,{value:i},e)}}}]);