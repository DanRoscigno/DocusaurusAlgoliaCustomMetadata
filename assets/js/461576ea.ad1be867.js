"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97165],{24510:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=s(85893),n=s(11151);const o={displayed_sidebar:"English"},r="EXPORT",l={id:"sql-reference/sql-statements/data-manipulation/EXPORT",title:"EXPORT",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/EXPORT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/EXPORT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/EXPORT.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP TASK",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK"},next:{title:"GROUP BY",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/GROUP_BY"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Export all data of a table to HDFS",id:"export-all-data-of-a-table-to-hdfs",level:3},{value:"Export the data of specified partitions of a table to HDFS",id:"export-the-data-of-specified-partitions-of-a-table-to-hdfs",level:3},{value:"Export all data of a table to HDFS with column separator specified",id:"export-all-data-of-a-table-to-hdfs-with-column-separator-specified",level:3},{value:"Export all data of a table to HDFS with file name prefix specified",id:"export-all-data-of-a-table-to-hdfs-with-file-name-prefix-specified",level:3},{value:"Export data to AWS S3",id:"export-data-to-aws-s3",level:3}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"export",children:"EXPORT"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Exports the data of a table to a specified location."}),"\n",(0,a.jsxs)(t.p,{children:["This is an asynchronous operation. The export result is returned after you submit the export task. You can use ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"})," to view the progress of the export task."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,a.jsxs)(t.p,{children:["You can export data out of StarRocks tables only as a user who has the EXPORT privilege on those StarRocks tables. If you do not have the EXPORT privilege, follow the instructions provided in ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to grant the EXPORT privilege to the user that you use to connect to your StarRocks cluster."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"EXPORT TABLE <table_name>\n[PARTITION (<partition_name>[, ...])]\n[(<column_name>[, ...])]\nTO <export_path>\n[opt_properties]\nWITH BROKER\n[broker_properties]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"table_name"})}),"\n",(0,a.jsxs)(t.p,{children:["The name of the table. StarRocks supports exporting the data of tables whose ",(0,a.jsx)(t.code,{children:"engine"})," is ",(0,a.jsx)(t.code,{children:"olap"})," or ",(0,a.jsx)(t.code,{children:"mysql"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"partition_name"})}),"\n",(0,a.jsx)(t.p,{children:"The partitions from which you want to export data. By default, if you do not specify this parameter, StarRocks exports the data from all partitions of the table."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"column_name"})}),"\n",(0,a.jsx)(t.p,{children:"The columns from which you want to export data. The sequence of columns that you specify by using this parameter can differ from the schema of the table. By default, if you do not specify this parameter, StarRocks exports the data from all columns of the table."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"export_path"})}),"\n",(0,a.jsxs)(t.p,{children:["The location to which you want to export the data of the table. If the location contains a path, make sure that the path ends with a slash (/). Otherwise, the part following the last slash (/) in the path will be used as the prefix to the name of the exported file. By default, ",(0,a.jsx)(t.code,{children:"data_"})," is used as the file name prefix if no file name prefix is specified."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"opt_properties"})}),"\n",(0,a.jsx)(t.p,{children:"Optional properties that you can configure for the export task."}),"\n",(0,a.jsx)(t.p,{children:"Syntax:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'[PROPERTIES ("<key>"="<value>", ...)]\n'})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Property"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"column_separator"}),(0,a.jsxs)(t.td,{children:["The column separator that you want to use in the exported file. Default value: ",(0,a.jsx)(t.code,{children:"\\t"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"line_delimiter"}),(0,a.jsxs)(t.td,{children:["The row separator that you want to use in the exported file. Default value: ",(0,a.jsx)(t.code,{children:"\\n"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"load_mem_limit"}),(0,a.jsx)(t.td,{children:"The maximum memory that is allowed for the export task on each individual BE. Unit: bytes. The default maximum memory is 2 GB."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"timeout"}),(0,a.jsxs)(t.td,{children:["The amount of time after which the export task times out. Unit: second. Default value: ",(0,a.jsx)(t.code,{children:"86400"}),", meaning 1 day."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"include_query_id"}),(0,a.jsxs)(t.td,{children:["Specifies whether the name of the exported file contains ",(0,a.jsx)(t.code,{children:"query_id"}),". Valid values: ",(0,a.jsx)(t.code,{children:"true"})," and ",(0,a.jsx)(t.code,{children:"false"}),". The value ",(0,a.jsx)(t.code,{children:"true"})," specifies that the file name contains ",(0,a.jsx)(t.code,{children:"query_id"}),", and the value ",(0,a.jsx)(t.code,{children:"false"})," specifies that the file name does not contain ",(0,a.jsx)(t.code,{children:"query_id"}),"."]})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"WITH BROKER"})}),"\n",(0,a.jsxs)(t.p,{children:["In v2.4 and earlier, input ",(0,a.jsx)(t.code,{children:'WITH BROKER "<broker_name>"'})," to specify the broker you want to use. From v2.5 onwards, you no longer need to specify a broker, but you still need to retain the ",(0,a.jsx)(t.code,{children:"WITH BROKER"})," keyword. For more information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/unloading/Export#background-information",children:"Export data using EXPORT > Background information"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"broker_properties"})}),"\n",(0,a.jsxs)(t.p,{children:["The information that is used to authenticate the source data. The authentication information varies depending on the data source. For more information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.h3,{id:"export-all-data-of-a-table-to-hdfs",children:"Export all data of a table to HDFS"}),"\n",(0,a.jsxs)(t.p,{children:["The following example exports all data of the ",(0,a.jsx)(t.code,{children:"testTbl"})," table to the ",(0,a.jsx)(t.code,{children:"hdfs://<hdfs_host>:<hdfs_port>/a/b/c/"})," path of an HDFS cluster:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nWITH BROKER\n(\n        "username"="xxx",\n        "password"="yyy"\n);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"export-the-data-of-specified-partitions-of-a-table-to-hdfs",children:"Export the data of specified partitions of a table to HDFS"}),"\n",(0,a.jsxs)(t.p,{children:["The following example exports the data of two partitions, ",(0,a.jsx)(t.code,{children:"p1"})," and ",(0,a.jsx)(t.code,{children:"p2"}),", of the ",(0,a.jsx)(t.code,{children:"testTbl"})," table to the ",(0,a.jsx)(t.code,{children:"hdfs://<hdfs_host>:<hdfs_port>/a/b/c/"})," path of an HDFS cluster:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE testTbl\nPARTITION (p1,p2) \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nWITH BROKER\n(\n        "username"="xxx",\n        "password"="yyy"\n);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"export-all-data-of-a-table-to-hdfs-with-column-separator-specified",children:"Export all data of a table to HDFS with column separator specified"}),"\n",(0,a.jsxs)(t.p,{children:["The following example exports all data of the ",(0,a.jsx)(t.code,{children:"testTbl"})," table to the ",(0,a.jsx)(t.code,{children:"hdfs://<hdfs_host>:<hdfs_port>/a/b/c/"})," path of an HDFS cluster and specifies that commas (",(0,a.jsx)(t.code,{children:","}),") is used as the column separator:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nPROPERTIES\n(\n    "column_separator"=","\n) \nWITH BROKER\n(\n    "username"="xxx",\n    "password"="yyy"\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The following example exports all data of the ",(0,a.jsx)(t.code,{children:"testTbl"})," table to the ",(0,a.jsx)(t.code,{children:"hdfs://<hdfs_host>:<hdfs_port>/a/b/c/"})," path of an HDFS cluster and specifies that ",(0,a.jsx)(t.code,{children:"\\x01"})," (the default column separator supported by Hive) is used as the column separator:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nPROPERTIES\n(\n    "column_separator"="\\\\x01"\n) \nWITH BROKER;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"export-all-data-of-a-table-to-hdfs-with-file-name-prefix-specified",children:"Export all data of a table to HDFS with file name prefix specified"}),"\n",(0,a.jsxs)(t.p,{children:["The following example exports all data of the ",(0,a.jsx)(t.code,{children:"testTbl"})," table to the ",(0,a.jsx)(t.code,{children:"hdfs://<hdfs_host>:<hdfs_port>/a/b/c/"})," path of an HDFS cluster and specifies that ",(0,a.jsx)(t.code,{children:"testTbl_"})," is used as the prefix to the name of the exported file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/testTbl_" \nWITH BROKER;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"export-data-to-aws-s3",children:"Export data to AWS S3"}),"\n",(0,a.jsxs)(t.p,{children:["The following example exports all data of the ",(0,a.jsx)(t.code,{children:"testTbl"})," table to the ",(0,a.jsx)(t.code,{children:"s3-package/export/"})," path of an AWS S3 bucket:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE testTbl \nTO "s3a://s3-package/export/"\nWITH BROKER\n(\n    "aws.s3.access_key" = "xxx",\n    "aws.s3.secret_key" = "yyy",\n    "aws.s3.region" = "zzz"\n);\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>o});var a=s(67294);const n=a.createContext({});function o(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:o(e),a.createElement(n.Provider,{value:l},t)}}}]);