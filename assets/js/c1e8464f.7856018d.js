"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15284],{12353:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=s(85893),t=s(11151);const l={displayed_sidebar:"English"},r="Bitmap indexing",a={id:"using_starrocks/Bitmap_index",title:"Bitmap indexing",description:"This topic describes how to create and manage a bitmap index, along with usage cases.",source:"@site/versioned_docs/version-3.0/using_starrocks/Bitmap_index.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Bitmap_index",permalink:"/doc/docs/3.0/using_starrocks/Bitmap_index",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Bitmap_index.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Read data from StarRocks using Spark connector",permalink:"/doc/docs/3.0/unloading/Spark_connector"},next:{title:"Bloom filter indexing",permalink:"/doc/docs/3.0/using_starrocks/Bloomfilter_index"}},d={},c=[{value:"Benefits",id:"benefits",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Create a bitmap index",id:"create-a-bitmap-index",level:2},{value:"Display bitmap indexes",id:"display-bitmap-indexes",level:2},{value:"Delete a bitmap index",id:"delete-a-bitmap-index",level:2},{value:"Usage cases",id:"usage-cases",level:2},{value:"Query a single column",id:"query-a-single-column",level:3},{value:"Query multiple columns",id:"query-multiple-columns",level:3}];function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote",h3:"h3",img:"img",ol:"ol"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap-indexing",children:"Bitmap indexing"}),"\n",(0,i.jsx)(n.p,{children:"This topic describes how to create and manage a bitmap index, along with usage cases."}),"\n",(0,i.jsx)(n.p,{children:"A bitmap index is a special database index that uses bitmaps, which are an array of bits. A bit is always in one of two values: 0 and 1. Each bit in the bitmap corresponds to a single row in the table. The value of each bit depends upon the value of the corresponding row."}),"\n",(0,i.jsxs)(n.p,{children:["A bitmap index can help improve the query performance on a given column. If a query hits a sort key column, StarRocks efficiently returns the query result by using the ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/table_design/Sort_key",children:"prefix index"}),". However, the prefix index entry for a data block cannot exceed 36 bytes in length. If you want to improve the query performance on a column, which is not used as a sort key, you can create a bitmap index for the column."]}),"\n",(0,i.jsx)(n.h2,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsx)(n.p,{children:"You can benefit from bitmap indexes in the following aspects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reduce response time when the column has low cardinality, such as the columns of the ENUM type. If the number of distinct values in a column is relatively high, we recommend that you use a bloom filter index to improve query speed. For more information, see ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/using_starrocks/Bloomfilter_index",children:"Bloom filter indexing"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Use less storage space compared to other indexing techniques. Bitmap indexes typically take up only a fraction of the size of the indexed data in a table."}),"\n",(0,i.jsxs)(n.li,{children:["Combine multiple bitmap indexes together to fire queries on multiple columns. For more information, see ",(0,i.jsx)(n.a,{href:"#query-multiple-columns",children:"Query multiple columns"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can create a bitmap index for a column that can be filtered by using the equal (",(0,i.jsx)(n.code,{children:"="}),") or [NOT] IN operator."]}),"\n",(0,i.jsx)(n.li,{children:"You can create bitmap indexes for all columns of a Duplicate Key table or Unique Key table. For an Aggregate table or Primary Key table, you can only create bitmap indexes for key columns."}),"\n",(0,i.jsx)(n.li,{children:"The columns of the FLOAT, DOUBLE, BOOLEAN, and DECIMAL types do not support creating bitmap indexes."}),"\n",(0,i.jsxs)(n.li,{children:["You can check whether a query uses bitmap indexes by viewing the ",(0,i.jsx)(n.code,{children:"BitmapIndexFilterRows"})," field of the query's profile."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-bitmap-index",children:"Create a bitmap index"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to create a bitmap index for a column."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a bitmap index for a column when you create a table. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE d0.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX index_name (column_name [, ...]) [USING BITMAP] [COMMENT \'\']\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1)\nPROPERTIES ("storage_type" = "column");\n'})}),"\n",(0,i.jsx)(n.p,{children:"The following table describes the parameters related to the bitmap index."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Parameter"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Required"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"index_name"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["The name of the bitmap index.  The naming conventions are as follows:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"The name can contain letters, digits (0-9), and underscores (_). It must start with a letter."}),(0,i.jsx)("li",{children:"The name cannot exceed 64 characters in length."})]}),"The name of bitmap index must be unique in a table."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"column_name"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["The name of the column on which a bitmap index is created. You can specify multiple column names to create bitmap indexes for multiple columns at a time. Separate multiple columns with commas (",(0,i.jsx)(n.code,{children:","}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"COMMENT"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"The comment of the bitmap index."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["You can create bitmap indexes for multiple columns at a time by specifying multiple ",(0,i.jsx)(n.code,{children:"INDEX index_name (column_name [, ...]) [USING BITMAP] [COMMENT '']"})," commands. These commands need to be separated with commas (",(0,i.jsx)(n.code,{children:","}),"). For other parameter descriptions of the CREATE TABLE statement, see ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a bitmap index for a column of a table using the CREATE INDEX statement. For parameter descriptions and examples, see ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_INDEX",children:"CREATE INDEX"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index_name ON table_name (column_name) [USING BITMAP] [COMMENT ''];\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"display-bitmap-indexes",children:"Display bitmap indexes"}),"\n",(0,i.jsxs)(n.p,{children:["You can view all bitmap indexes created in a table using the SHOW INDEX statement. For parameter descriptions and examples, see ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_INDEX",children:"SHOW INDEX"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW { INDEX[ES] | KEY[S] } FROM [db_name.]table_name [FROM db_name];\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note"})}),"\n",(0,i.jsx)(n.p,{children:"Creating indexes is an asynchronous process. Therefore, you can only see the indexes that have completed the creation process."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"delete-a-bitmap-index",children:"Delete a bitmap index"}),"\n",(0,i.jsxs)(n.p,{children:["You can delete a bitmap index from a table using the DROP INDEX statement. For parameter descriptions and examples, see ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP_INDEX",children:"DROP INDEX"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"DROP INDEX index_name ON [db_name.]table_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage-cases",children:"Usage cases"}),"\n",(0,i.jsxs)(n.p,{children:["For example, the following table ",(0,i.jsx)(n.code,{children:"employee"})," shows a portion of a company's employee information."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"ID"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Gender"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Position"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Income_level"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"01"}),(0,i.jsx)(n.td,{children:"female"}),(0,i.jsx)(n.td,{children:"Developer"}),(0,i.jsx)(n.td,{children:"level_1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"02"}),(0,i.jsx)(n.td,{children:"female"}),(0,i.jsx)(n.td,{children:"Analyst"}),(0,i.jsx)(n.td,{children:"level_2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"03"}),(0,i.jsx)(n.td,{children:"female"}),(0,i.jsx)(n.td,{children:"Salesman"}),(0,i.jsx)(n.td,{children:"level_1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"04"}),(0,i.jsx)(n.td,{children:"male"}),(0,i.jsx)(n.td,{children:"Accountant"}),(0,i.jsx)(n.td,{children:"level_3"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"query-a-single-column",children:"Query a single column"}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you want to improve the query performance on the ",(0,i.jsx)(n.code,{children:"Gender"})," column, you can create a bitmap index for the column by using the following statement."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index1 ON employee (Gender) USING BITMAP COMMENT 'index1';\n"})}),"\n",(0,i.jsx)(n.p,{children:"After you execute the preceding statement, the bitmap index is generated as shown in the following figure."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"figure",src:s(10186).Z+"",width:"781",height:"345"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Build a dictionary: StarRocks builds a dictionary for the ",(0,i.jsx)(n.code,{children:"Gender"})," column and maps ",(0,i.jsx)(n.code,{children:"female"})," and ",(0,i.jsx)(n.code,{children:"male"})," to coded values of the INT type: ",(0,i.jsx)(n.code,{children:"0"})," and ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Generate bitmaps: StarRocks generates bitmaps for ",(0,i.jsx)(n.code,{children:"female"})," and ",(0,i.jsx)(n.code,{children:"male"})," based on the coded values. The bitmap of ",(0,i.jsx)(n.code,{children:"female"})," is ",(0,i.jsx)(n.code,{children:"1110"})," because ",(0,i.jsx)(n.code,{children:"female"})," displays in the first three rows. The bitmap of ",(0,i.jsx)(n.code,{children:"male"})," is ",(0,i.jsx)(n.code,{children:"0001"})," because ",(0,i.jsx)(n.code,{children:"male"})," only displays in the fourth row."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you want to find out the male employee in the company, you can send a query as follows."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT xxx FROM employee WHERE Gender = male;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After the query is sent, StarRocks searches for the dictionary to get the coded value of ",(0,i.jsx)(n.code,{children:"male"}),", which is ",(0,i.jsx)(n.code,{children:"1"}),"and then gets the bitmap of ",(0,i.jsx)(n.code,{children:"male"}),", which is ",(0,i.jsx)(n.code,{children:"0001"}),". This means that only the fourth row matches the query condition. Then StarRocks will skip the first three rows and read only the fourth row."]}),"\n",(0,i.jsx)(n.h3,{id:"query-multiple-columns",children:"Query multiple columns"}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you want to improve the query performance on the ",(0,i.jsx)(n.code,{children:"Gender"})," and ",(0,i.jsx)(n.code,{children:"Income_level"}),"column, you can create bitmap indexes for these two columns by using the following statements."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Gender"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index1 ON employee (Gender) USING BITMAP COMMENT 'index1';\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Income_level"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index2 ON employee (Income_level) USING BITMAP COMMENT 'index2';\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After you execute the preceding two statements, the bitmap indexes are generated as shown in the following figure."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"figure",src:s(92137).Z+"",width:"901",height:"496"})}),"\n",(0,i.jsxs)(n.p,{children:["StarRocks respectively builds a dictionary for the ",(0,i.jsx)(n.code,{children:"Gender"})," and ",(0,i.jsx)(n.code,{children:"Income_level"})," columns and then generates bitmaps for the distinct values in these two columns."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Gender"}),": The bitmap of ",(0,i.jsx)(n.code,{children:"female"})," is ",(0,i.jsx)(n.code,{children:"1110"})," and the bitmap of ",(0,i.jsx)(n.code,{children:"male"})," is ",(0,i.jsx)(n.code,{children:"0001"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Producer"}),": The bitmap of ",(0,i.jsx)(n.code,{children:"level_1"})," is ",(0,i.jsx)(n.code,{children:"1010"}),", the bitmap of ",(0,i.jsx)(n.code,{children:"level_2"})," is ",(0,i.jsx)(n.code,{children:"0100"}),", and the bitmap of ",(0,i.jsx)(n.code,{children:"level_3"})," is ",(0,i.jsx)(n.code,{children:"0001"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to find out the female employees whose salary is in the ",(0,i.jsx)(n.code,{children:"level_1"}),", you can send a query as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:" SELECT xxx FROM employee \n WHERE Gender = female AND Income_level = level_1;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After the query is sent, StarRocks search for the dictionaries of ",(0,i.jsx)(n.code,{children:"Gender"})," and ",(0,i.jsx)(n.code,{children:"Income_level"})," at the same time to get the following information:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The coded value of ",(0,i.jsx)(n.code,{children:"female"})," is ",(0,i.jsx)(n.code,{children:"0"})," and the bitmap of ",(0,i.jsx)(n.code,{children:"female"})," is ",(0,i.jsx)(n.code,{children:"1110"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The coded value of ",(0,i.jsx)(n.code,{children:"level_1"})," is ",(0,i.jsx)(n.code,{children:"0"})," and the bitmap of ",(0,i.jsx)(n.code,{children:"level_1"})," is ",(0,i.jsx)(n.code,{children:"1010"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["StarRocks performs a bitwise logical operation ",(0,i.jsx)(n.code,{children:"1110 & 1010"})," based on the ",(0,i.jsx)(n.code,{children:"AND"})," operator to get the result ",(0,i.jsx)(n.code,{children:"1010"}),".  According to the result, StarRocks only reads the first row and the third row."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},10186:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/3.6.1-2-85b4b393741b2a2352524293ea03fd2d.png"},92137:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/3.6.1-3-d713e5fe788c80dffac28eb9bbcc8dd7.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>l});var i=s(67294);const t=i.createContext({});function l(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:l(e),i.createElement(t.Provider,{value:a},n)}}}]);