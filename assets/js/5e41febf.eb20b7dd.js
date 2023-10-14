"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14179],{61498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const a={},r="bitmap_to_base64",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_base64",title:"bitmap_to_base64",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_to_array",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_array"},next:{title:"bitmap_to_string",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_to_base64",children:"bitmap_to_base64"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Converts a bitmap to a Base64-encoded string. This function is supported from v2.5."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR bitmap_to_base64(BITMAP bitmap)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bitmap"}),": the bitmap to convert. This parameter is required. If the input value is invalid, an error is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Use this function with other bitmap functions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_base64(bitmap_from_string(\"0, 1, 2, 3\"));\n+----------------------------------------------------+\n| bitmap_to_base64(bitmap_from_string('0, 1, 2, 3')) |\n+----------------------------------------------------+\n| AjowAAABAAAAAAADABAAAAAAAAEAAgADAA==               |\n+----------------------------------------------------+\n1 row in set (0.00 sec)\n\n\nselect bitmap_to_base64(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_base64(to_bitmap(1)) |\n+--------------------------------+\n| AQEAAAA=                       |\n+--------------------------------+\n1 row in set (0.00 sec)\n\n\nselect bitmap_to_base64(bitmap_empty());\n+----------------------------------+\n| bitmap_to_base64(bitmap_empty()) |\n+----------------------------------+\n| AA==                             |\n+----------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Convert each value in a BITMAP column into Base64-encoded strings."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create an Aggregate table ",(0,s.jsx)(n.code,{children:"page_uv"})," where the ",(0,s.jsx)(n.code,{children:"AGGREGATE KEY"})," is (",(0,s.jsx)(n.code,{children:"page_id"}),", ",(0,s.jsx)(n.code,{children:"visit_date"}),"). This table contains a BITMAP column ",(0,s.jsx)(n.code,{children:"visit_users"})," whose values are to be aggregated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'    CREATE TABLE `page_uv`\n    (`page_id` INT NOT NULL,\n    `visit_date` datetime NOT NULL,\n    `visit_users` BITMAP BITMAP_UNION NOT NULL\n    ) ENGINE=OLAP\n    AGGREGATE KEY(`page_id`, `visit_date`)\n    DISTRIBUTED BY HASH(`page_id`) BUCKETS 1\n    PROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n    );\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Insert data into this table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"  insert into page_uv values\n  (1, '2020-06-23 01:30:30', to_bitmap(13)),\n  (1, '2020-06-23 01:30:30', to_bitmap(23)),\n  (1, '2020-06-23 01:30:30', to_bitmap(33)),\n  (1, '2020-06-23 02:30:30', to_bitmap(13)),\n  (2, '2020-06-23 01:30:30', to_bitmap(23));\n  \n  select * from page_uv order by page_id;\n  +---------+---------------------+-------------+\n  | page_id | visit_date          | visit_users |\n  +---------+---------------------+-------------+\n  |       1 | 2020-06-23 01:30:30 | NULL        |\n  |       1 | 2020-06-23 02:30:30 | NULL        |\n  |       2 | 2020-06-23 01:30:30 | NULL        |\n  +---------+---------------------+-------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Convert each value in the ",(0,s.jsx)(n.code,{children:"visit_users"})," column into a Base64-encoded string."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"  select page_id, bitmap_to_base64(visit_users) from page_uv;\n  +---------+------------------------------------------+\n  | page_id | bitmap_to_base64(visit_users)            |\n  +---------+------------------------------------------+\n  |       1 | CgMAAAANAAAAAAAAABcAAAAAAAAAIQAAAAAAAAA= |\n  |       1 | AQ0AAAA=                                 |\n  |       2 | ARcAAAA=                                 |\n  +---------+------------------------------------------+\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:o},n)}}}]);