"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70608],{43339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(85893),a=t(11151);const i={},l="bitmap_agg",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_agg",title:"bitmap_agg",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_agg.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_agg",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_agg.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"base64_to_bitmap",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap"},next:{title:"bitmap_and",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_and"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_agg",children:"bitmap_agg"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Aggregates values (excluding NULLs) in a column into a bitmap (multiple rows into one row)."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITMAP_AGG(col)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"col"}),": the column whose values you want to aggregate. It must evaluate to BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, and LARGEINT."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the BITMAP type."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsx)(n.p,{children:"If the value in a row is less than 0 or greater than 18446744073709551615, the value will be ignored and not added to the Bitmap (see Example 3)."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Take the following data table as an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PlainText",children:'mysql> CREATE TABLE t1_test (\n    c1 int,\n    c2 boolean,\n    c3 tinyint,\n    c4 int,\n    c5 bigint,\n    c6 largeint\n    )\nDUPLICATE KEY(c1)\nDISTRIBUTED BY HASH(c1)\nBUCKETS 1\nPROPERTIES ("replication_num" = "3");\n\nINSERT INTO t1_test VALUES\n    (1, true, 11, 111, 1111, 11111),\n    (2, false, 22, 222, 2222, 22222),\n    (3, true, 33, 333, 3333, 33333),\n    (4, null, null, null, null, null),\n    (5, -1, -11, -111, -1111, -11111),\n    (6, null, null, null, null, "36893488147419103232");\n\nselect * from t1_test order by c1;\n+------+------+------+------+-------+----------------------+\n| c1   | c2   | c3   | c4   | c5    | c6                   |\n+------+------+------+------+-------+----------------------+\n|    1 |    1 |   11 |  111 |  1111 | 11111                |\n|    2 |    0 |   22 |  222 |  2222 | 22222                |\n|    3 |    1 |   33 |  333 |  3333 | 33333                |\n|    4 | NULL | NULL | NULL |  NULL | NULL                 |\n|    5 |    1 |  -11 | -111 | -1111 | -11111               |\n|    6 | NULL | NULL | NULL |  NULL | 36893488147419103232 |\n+------+------+------+------+-------+----------------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Aggregate values in column ",(0,s.jsx)(n.code,{children:"c1"})," into one bitmap."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PlainText",children:"mysql> select bitmap_to_string(bitmap_agg(c1)) from t1_test;\n+----------------------------------+\n| bitmap_to_string(bitmap_agg(c1)) |\n+----------------------------------+\n| 1,2,3,4,5,6                      |\n+----------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Aggregate values in column ",(0,s.jsx)(n.code,{children:"c2"})," into one bitmap (NULLs are ignored)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PlainText",children:"mysql> SELECT BITMAP_TO_STRING(BITMAP_AGG(c2)) FROM t1_test;\n+----------------------------------+\n| bitmap_to_string(bitmap_agg(c2)) |\n+----------------------------------+\n| 0,1                              |\n+----------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 3: Aggregate values in column ",(0,s.jsx)(n.code,{children:"c6"})," into one bitmap (the last two values that exceed the value range are ignored)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PlainText",children:"mysql> select bitmap_to_string(bitmap_agg(c6)) from t1_test;\n+----------------------------------+\n| bitmap_to_string(bitmap_agg(c6)) |\n+----------------------------------+\n| 11111,22222,33333                |\n+----------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_AGG, BITMAP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var s=t(67294);const a=s.createContext({});function i(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:i(e),s.createElement(a.Provider,{value:r},n)}}}]);