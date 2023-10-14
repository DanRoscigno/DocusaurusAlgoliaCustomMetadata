"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8291],{35622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=t(85893),i=t(11151);const l={},s="Bloom filter indexing",r={id:"using_starrocks/Bloomfilter_index",title:"Bloom filter indexing",description:"This topic describes how to create and modify bloom filter indexes, along with how they works.",source:"@site/versioned_docs/version-3.0/using_starrocks/Bloomfilter_index.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Bloomfilter_index",permalink:"/doc/en/3.0/using_starrocks/Bloomfilter_index",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Bloomfilter_index.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Bitmap indexing",permalink:"/doc/en/3.0/using_starrocks/Bitmap_index"},next:{title:"Colocate Join",permalink:"/doc/en/3.0/using_starrocks/Colocate_join"}},a={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Create bloom filter indexes",id:"create-bloom-filter-indexes",level:2},{value:"Display bloom filter indexes",id:"display-bloom-filter-indexes",level:2},{value:"Modify bloom filter indexes",id:"modify-bloom-filter-indexes",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"bloom-filter-indexing",children:"Bloom filter indexing"}),"\n",(0,o.jsx)(n.p,{children:"This topic describes how to create and modify bloom filter indexes, along with how they works."}),"\n",(0,o.jsx)(n.p,{children:"A bloom filter index is a space-efficiency data structure that is used to detect the possible presence of filtered data in data files of a table. If the bloom filter index detects that the data to be filtered are not in a certain data file, StarRocks skips scanning the data file. Bloom filter indexes can reduce response time when the column (such as ID) has a relatively high cardinality."}),"\n",(0,o.jsxs)(n.p,{children:["If a query hits a sort key column, StarRocks efficiently returns the query result by using the ",(0,o.jsx)(n.a,{href:"/doc/en/3.0/table_design/Sort_key",children:"prefix index"}),". However, the prefix index entry for a data block cannot exceed 36 bytes in length. If you want to improve the query performance on a column, which is not used as a sort key and has a relatively high cardinality, you can create a bloom filter index for the column."]}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsxs)(n.p,{children:["For example, you create a bloom filter index on a ",(0,o.jsx)(n.code,{children:"column1"})," of a given table ",(0,o.jsx)(n.code,{children:"table1"})," and run a query such as ",(0,o.jsx)(n.code,{children:"Select xxx from table1 where column1 = something;"}),". Then the following situations happen when StarRocks scans the data files of ",(0,o.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the bloom filter index detects that a data file does not contain the data to be filtered, StarRocks skips the data file to improve query performance."}),"\n",(0,o.jsx)(n.li,{children:"If the bloom filter index detects that a data file may contain the data to be filtered, StarRocks reads the data file to check whether the data exists. Note that the bloom filter can tell you for sure if a value is not present, but it cannot say for sure that a value is present, only that it may be present. Using a bloom filter index to determine whether a value is present may give false positives, which means that a bloom filter index detects that a data file contains the data to be filtered, but the data file does not actually contain the data."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can create bloom filter indexes for all columns of a Duplicate Key or Primary Key table. For an Aggregate table or Unique Key table, you can only create bloom filter indexes for key columns."}),"\n",(0,o.jsx)(n.li,{children:"TINYINT, FLOAT, DOUBLE, and DECIMAL columns do not support creating bloom filter indexes."}),"\n",(0,o.jsxs)(n.li,{children:["Bloom filter indexes can only improve the performance of queries that contain the ",(0,o.jsx)(n.code,{children:"in"})," and ",(0,o.jsx)(n.code,{children:"="})," operators, such as ",(0,o.jsx)(n.code,{children:"Select xxx from table where x in {}"})," and ",(0,o.jsx)(n.code,{children:"Select xxx from table where column = xxx"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You can check whether a query uses bloom filter indexes by viewing the ",(0,o.jsx)(n.code,{children:"BloomFilterFilterRows"})," field of the query's profile."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-bloom-filter-indexes",children:"Create bloom filter indexes"}),"\n",(0,o.jsxs)(n.p,{children:["You can create a bloom filter index for a column when you create a table by specifying the ",(0,o.jsx)(n.code,{children:"bloom_filter_columns"})," parameter in ",(0,o.jsx)(n.code,{children:"PROPERTIES"}),". For example, create bloom filter indexes for the ",(0,o.jsx)(n.code,{children:"k1"})," and ",(0,o.jsx)(n.code,{children:"k2"})," columns in ",(0,o.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE table1\n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 SMALLINT DEFAULT "10"\n)\nENGINE = olap\nPRIMARY KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2)\nPROPERTIES("bloom_filter_columns" = "k1,k2");\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can create bloom filter indexes for multiple columns at a time by specifying these column names. Note that you need to separate these column names with commas (",(0,o.jsx)(n.code,{children:","}),"). For other parameter descriptions of the CREATE TABLE statement, see ",(0,o.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"display-bloom-filter-indexes",children:"Display bloom filter indexes"}),"\n",(0,o.jsxs)(n.p,{children:["For example, the following statement displays bloom filter indexes of ",(0,o.jsx)(n.code,{children:"table1"}),". For the output description, see ",(0,o.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"SHOW CREATE TABLE table1;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"modify-bloom-filter-indexes",children:"Modify bloom filter indexes"}),"\n",(0,o.jsxs)(n.p,{children:["You can add, reduce, and delete bloom filter indexes by using the ",(0,o.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," statement."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The following statement adds a bloom filter index on the ",(0,o.jsx)(n.code,{children:"v1"})," column."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE table1 SET ("bloom_filter_columns" = "k1,k2,v1");\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The following statement reduces the bloom filter index on the ",(0,o.jsx)(n.code,{children:"k2"})," column."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE table1 SET ("bloom_filter_columns" = "k1");\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The following statement deletes all bloom filter indexes of ",(0,o.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE table1 SET ("bloom_filter_columns" = "");\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: Altering an index is an asynchronous operation. You can view the progress of this operation by executing ",(0,o.jsx)(n.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"}),". You can run only one alter index task on a table each time."]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>l});var o=t(67294);const i=o.createContext({});function l(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||s:l(e),o.createElement(i.Provider,{value:r},n)}}}]);