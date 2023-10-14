"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43522],{91243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(85893),l=t(11151);const r={},i="HLL",a={id:"sql-reference/sql-statements/data-definition/HLL",title:"HLL",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/HLL.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/HLL",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/HLL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/HLL.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"DROP VIEW",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/DROP_VIEW"},next:{title:"KILL ANALYZE",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/KILL_ANALYZE"}},d={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u521b\u5efa\u542b\u6709 hll \u5217\u7684\u8868",id:"\u521b\u5efa\u542b\u6709-hll-\u5217\u7684\u8868",level:3},{value:"\u901a\u8fc7 Stream load \u5bfc\u5165\u6570\u636e",id:"\u901a\u8fc7-stream-load-\u5bfc\u5165\u6570\u636e",level:3},{value:"\u901a\u8fc7 HLL \u805a\u5408\u6570\u636e",id:"\u901a\u8fc7-hll-\u805a\u5408\u6570\u636e",level:3},{value:"\u67e5\u8be2 HLL \u5217",id:"\u67e5\u8be2-hll-\u5217",level:3}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",a:"a",h3:"h3",pre:"pre"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hll",children:"HLL"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"HLL \u662f\u57fa\u4e8e HyperLogLog \u7b97\u6cd5\u7684\u5de5\u7a0b\u5b9e\u73b0\uff0c\u7528\u4e8e\u4fdd\u5b58 HyperLogLog \u8ba1\u7b97\u8fc7\u7a0b\u7684\u4e2d\u95f4\u7ed3\u679c\uff0cHLL \u7c7b\u578b\u7684\u5217\u53ea\u80fd\u4f5c\u4e3a\u8868\u7684 value \u5217\u7c7b\u578b\uff0c\u901a\u8fc7\u805a\u5408\u6765\u4e0d\u65ad\u7684\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u52a0\u5feb\u67e5\u8be2\u7684\u76ee\u7684\u3002\u57fa\u4e8e HLL \u5230\u7684\u662f\u4e00\u4e2a\u4f30\u7b97\u7ed3\u679c\uff0c\u8bef\u5dee\u5927\u6982\u5728 1%\u5de6\u53f3\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["HLL \u5217\u662f\u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684\uff0c\u5bfc\u5165\u7684\u65f6\u5019\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HLL_HASH"})," \u51fd\u6570\u6765\u6307\u5b9a\u6570\u636e\u4e2d\u54ea\u4e00\u5217\u7528\u4e8e\u751f\u6210 HLL \u5217\u5b83\u5e38\u7528\u4e8e\u66ff\u4ee3 ",(0,s.jsx)(n.code,{children:"count distinct"}),"\uff0c\u901a\u8fc7\u7ed3\u5408 rollup \u5728\u4e1a\u52a1\u4e0a\u7528\u4e8e\u5feb\u901f\u8ba1\u7b97 uv\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u5173\u51fd\u6570:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-functions/aggregate-functions/hll_union_agg",children:"HLL_UNION_AGG(hll)"})}),"\uff1a\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u6ee1\u8db3\u6761\u4ef6\u7684\u6240\u6709\u6570\u636e\u7684\u57fa\u6570\u4f30\u7b97\u3002\u6b64\u51fd\u6570\u8fd8\u53ef\u7528\u4e8e\u5206\u6790\u51fd\u6570\uff0c\u53ea\u652f\u6301\u9ed8\u8ba4\u7a97\u53e3\uff0c\u4e0d\u652f\u6301 window \u5b50\u53e5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",children:"HLL_RAW_AGG(hll)"})}),"\uff1a\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u805a\u5408 hll \u7c7b\u578b\u5b57\u6bb5\uff0c\u5e76\u4e14\u8fd4\u56de\u7684\u8fd8\u662f hll \u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-functions/scalar-functions/hll_cardinality",children:"HLL_CARDINALITY(hll)"})}),"\uff1a\u6b64\u51fd\u6570\u7528\u4e8e\u8ba1\u7b97\u5355\u6761 hll \u5217\u7684\u57fa\u6570\u4f30\u7b97\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"HLL_HASH(column_name)"})}),"\uff1a\u751f\u6210 HLL \u5217\u7c7b\u578b\uff0c\u7528\u4e8e insert \u6216\u5bfc\u5165\u7684\u65f6\u5019\uff0c\u5bfc\u5165\u7684\u4f7f\u7528\u89c1\u76f8\u5173\u8bf4\u660e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-functions/aggregate-functions/hll_empty",children:"HLL_EMPTY()"})}),"\uff1a\u751f\u6210\u7a7a HLL \u5217\uff0c\u7528\u4e8e insert \u6216\u5bfc\u5165\u7684\u65f6\u5019\u8865\u5145\u9ed8\u8ba4\u503c\uff0c\u5bfc\u5165\u7684\u4f7f\u7528\u89c1\u76f8\u5173\u8bf4\u660e\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa\u542b\u6709-hll-\u5217\u7684\u8868",children:"\u521b\u5efa\u542b\u6709 hll \u5217\u7684\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"create table test(\n    dt date,\n    id int,\n    name char(10),\n    province char(10),\n    os char(1),\n    set1 hll hll_union,\n    set2 hll hll_union\n)\ndistributed by hash(id) buckets 32;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u901a\u8fc7-stream-load-\u5bfc\u5165\u6570\u636e",children:["\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream load"})," \u5bfc\u5165\u6570\u636e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'a. \u4f7f\u7528\u8868\u4e2d\u7684\u5217\u751f\u6210hll\u5217\ncurl --location-trusted -uname:password -T data -H "label:load_1" \\\n    -H "columns:dt, id, name, province, os, set1=hll_hash(id), set2=hll_hash(name)"\nhttp://host/api/test_db/test/_stream_load\n\nb. \u4f7f\u7528\u6570\u636e\u4e2d\u7684\u67d0\u4e00\u5217\u751f\u6210hll\u5217\ncurl --location-trusted -uname:password -T data -H "label:load_1" \\\n    -H "columns:dt, id, name, province, sex, cuid, os, set1=hll_hash(cuid), set2=hll_hash(os)"\nhttp://host/api/test_db/test/_stream_load\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u901a\u8fc7-hll-\u805a\u5408\u6570\u636e",children:"\u901a\u8fc7 HLL \u805a\u5408\u6570\u636e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u805a\u5408\u76f4\u63a5\u5bf9 base \u8868\u67e5\u8be2\uff0c\u901f\u5ea6\u53ef\u80fd\u8ddf\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"approx_count_distinct"})," \u901f\u5ea6\u5dee\u4e0d\u591a\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u805a\u5408\u6570\u636e\u6709\u5e38\u7528\u65b9\u5f0f 3 \u79cd\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"--\u57fa\u4e8e\u7b2c\u4e00\u4e2a\u793a\u4f8b\u521b\u5efa\u7684HLL\u8868\u521b\u5efa\u4e00\u4e2arollup\uff0c\u8ba9hll\u5217\u4ea7\u751f\u805a\u5408\nalter table test add rollup test_rollup(dt, set1);\n\n\n--\u521b\u5efa\u53e6\u5916\u4e00\u5f20\u4e13\u95e8\u8ba1\u7b97uv\u7684\u8868\uff0c\u7136\u540einsert\u6570\u636e\ncreate table test_uv(\n    dt date,\n    id int,\n    uv_set hll hll_union\n)\ndistributed by hash(id) buckets 32;\n\ninsert into test_uv select dt, id, set1 from test;\n\n\n--\u521b\u5efa\u53e6\u5916\u4e00\u5f20\u4e13\u95e8\u8ba1\u7b97uv\u7684\u8868\uff0c\u7136\u540einsert\u5e76\u901a\u8fc7hll_hash\u6839\u636etest\u5176\u5b83\u975ehll\u5217\u751f\u6210hll\u5217\ncreate table test_uv(\n    dt date,\n    id int,\n    id_set hll hll_union\n)\ndistributed by hash(id) buckets 32;\n\ninsert into test_uv select dt, id, hll_hash(id) from test;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u8be2-hll-\u5217",children:"\u67e5\u8be2 HLL \u5217"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2 hll \u5217\u4e0d\u5141\u8bb8\u76f4\u63a5\u67e5\u8be2\u5b83\u7684\u539f\u59cb\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u5957\u7684\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"--a. \u6c42\u603buv\nselect HLL_UNION_AGG(uv_set) from test_uv;\n\n--b. \u6c42\u6bcf\u4e00\u5929\u7684uv\nselect dt, HLL_CARDINALITY(uv_set) from test_uv;\n\n--c. \u6c42test\u8868\u4e2dset1\u7684\u805a\u5408\u503c\nselect dt, HLL_CARDINALITY(uv)from (\n    select dt, HLL_RAW_AGG(set1) as uv from test group by dt) tmp;\nselect dt, HLL_UNION_AGG(set1) as uv from test group by dt;\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const l=s.createContext({});function r(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(l.Provider,{value:a},n)}}}]);