"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83086],{88609:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var d=s(85893),r=s(11151);const i={displayed_sidebar:"English"},n="Error Codes",c={id:"reference/Error_code",title:"Error Codes",description:"This section describes the common error codes for query requests.",source:"@site/versioned_docs/version-2.5/reference/Error_code.md",sourceDirName:"reference",slug:"/reference/Error_code",permalink:"/doc/docs/2.5/reference/Error_code",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/reference/Error_code.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Deploy StarRocks with Docker",permalink:"/doc/docs/2.5/quick_start/deploy_with_docker"},next:{title:"System limits",permalink:"/doc/docs/2.5/reference/System_limit"}},l={},h=[];function x(e){const t=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"error-codes",children:"Error Codes"}),"\n",(0,d.jsx)(t.p,{children:"This section describes the common error codes for query requests."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Serial number"}),(0,d.jsx)(t.th,{children:"Error code"}),(0,d.jsx)(t.th,{children:"Error message"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1005"}),(0,d.jsx)(t.td,{children:"Table creation failed. Returns a specific reason."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1007"}),(0,d.jsx)(t.td,{children:"Cannot create a database with the same name."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1008"}),(0,d.jsx)(t.td,{children:"Cannot delete non-existent database."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1044"}),(0,d.jsx)(t.td,{children:"Cannot access unauthorized database."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1045"}),(0,d.jsx)(t.td,{children:"Username and password do not match and therefore cannot access the system."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1046"}),(0,d.jsx)(t.td,{children:"The target database is not specified."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1047"}),(0,d.jsx)(t.td,{children:"An invalid command is specified."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1049"}),(0,d.jsx)(t.td,{children:"An invalid database is specified."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1050"}),(0,d.jsx)(t.td,{children:"A table with the same name already exists."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1051"}),(0,d.jsx)(t.td,{children:"An invalid table is specified."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1052"}),(0,d.jsx)(t.td,{children:"The specified column name is ambiguous and therefore the corresponding column cannot be uniquely identified."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1053"}),(0,d.jsx)(t.td,{children:"An illegal data column was specified for the Semi-Join/Anti-Join query."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1054"}),(0,d.jsx)(t.td,{children:"The specified column does not exist in the table."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1058"}),(0,d.jsx)(t.td,{children:"The number of columns selected in the query statement does not match the number of columns in the query result."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1060"}),(0,d.jsx)(t.td,{children:"There are duplicate column names."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1064"}),(0,d.jsx)(t.td,{children:"There is no surviving BE node."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1066"}),(0,d.jsx)(t.td,{children:"Duplicate table alias appears in the query statement."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1094"}),(0,d.jsx)(t.td,{children:"Thread ID is invalid."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1095"}),(0,d.jsx)(t.td,{children:"The non-owner of a thread cannot terminate the thread."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1096"}),(0,d.jsx)(t.td,{children:"The query statement does not specify the table to be queried."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1102"}),(0,d.jsx)(t.td,{children:"The database name is incorrect."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1104"}),(0,d.jsx)(t.td,{children:"The table name is incorrect."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1105"}),(0,d.jsx)(t.td,{children:"Other errors."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1110"}),(0,d.jsx)(t.td,{children:"Duplicate columns were specified in the subquery."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1111"}),(0,d.jsxs)(t.td,{children:["Illegal use of aggregation function in ",(0,d.jsx)(t.code,{children:"WHERE"})," clause"]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1113"}),(0,d.jsx)(t.td,{children:"The set of columns in the new table cannot be empty."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1115"}),(0,d.jsx)(t.td,{children:"Unsupported character sets are used."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1130"}),(0,d.jsx)(t.td,{children:"An unauthorized IP address is used by the client."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1132"}),(0,d.jsx)(t.td,{children:"No permission to change user password."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1141"}),(0,d.jsx)(t.td,{children:"Specified entries don\u2019t have privileges to revoke."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1142"}),(0,d.jsx)(t.td,{children:"An unauthorized action was performed."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1166"}),(0,d.jsx)(t.td,{children:"The data column name is incorrect."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1193"}),(0,d.jsx)(t.td,{children:"System variable has invalid name"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1203"}),(0,d.jsx)(t.td,{children:"The number of active connections used exceeded the limit."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1211"}),(0,d.jsx)(t.td,{children:"Not allowed to create new users."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1227"}),(0,d.jsx)(t.td,{children:"The user has performed an out-of-authority operation."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1228"}),(0,d.jsxs)(t.td,{children:["Session variables cannot be modified by the ",(0,d.jsx)(t.code,{children:"SET GLOBAL"})," command."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1229"}),(0,d.jsxs)(t.td,{children:["Global variables should be modified by the ",(0,d.jsx)(t.code,{children:"SET GLOBAL"})," command."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1230"}),(0,d.jsx)(t.td,{children:"Related system variables do not have default values."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1231"}),(0,d.jsx)(t.td,{children:"An invalid value was set for a system variable."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1232"}),(0,d.jsx)(t.td,{children:"A value of the wrong data type was set for a system variable."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1248"}),(0,d.jsx)(t.td,{children:"No alias was set for an inline view."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1251"}),(0,d.jsx)(t.td,{children:"The client does not support the user authentication protocol required by the server."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1286"}),(0,d.jsx)(t.td,{children:"The storage engine is incorrectly configured."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1298"}),(0,d.jsx)(t.td,{children:"The time zone is incorrectly configured."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1347"}),(0,d.jsx)(t.td,{children:"The object does not match the expected type."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1353"}),(0,d.jsxs)(t.td,{children:["The specified column number in the ",(0,d.jsx)(t.code,{children:"Select"})," clause of the view is not equal to the defined column number."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1364"}),(0,d.jsx)(t.td,{children:"No default value is set for columns that do not allow NULL values."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1372"}),(0,d.jsx)(t.td,{children:"The password is not long enough."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1396"}),(0,d.jsx)(t.td,{children:"The performed operation failed."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1471"}),(0,d.jsx)(t.td,{children:"The specified table is not allowed to insert data."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1507"}),(0,d.jsx)(t.td,{children:"Delete nonexistent partition, and no condition is specified to only delete existing partitions."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1508"}),(0,d.jsx)(t.td,{children:"All partitions should be deleted by a delete table operation."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1517"}),(0,d.jsx)(t.td,{children:"There are duplicate partition names."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1524"}),(0,d.jsx)(t.td,{children:"The specified plugin has not been loaded."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1567"}),(0,d.jsx)(t.td,{children:"The name of the partition is incorrect."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1621"}),(0,d.jsx)(t.td,{children:"The specified system variable is read-only."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1735"}),(0,d.jsx)(t.td,{children:"The specified partition name does not exist in the table."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1748"}),(0,d.jsx)(t.td,{children:"Data cannot be inserted into a table that does not have a partition."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1749"}),(0,d.jsx)(t.td,{children:"The specified partition does not exist."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5000"}),(0,d.jsx)(t.td,{children:"The specified table is not an OLAP table."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5001"}),(0,d.jsx)(t.td,{children:"The specified storage path is invalid."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5002"}),(0,d.jsx)(t.td,{children:"The name of the specified column should be displayed."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5003"}),(0,d.jsx)(t.td,{children:"The dimension column should be preceded by the index column."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5004"}),(0,d.jsx)(t.td,{children:"The table should contain at least 1 dimension column."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5005"}),(0,d.jsx)(t.td,{children:"The cluster ID is invalid."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5006"}),(0,d.jsx)(t.td,{children:"Invalid query plan."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5007"}),(0,d.jsx)(t.td,{children:"Conflicting query plans."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5008"}),(0,d.jsx)(t.td,{children:"The data insert is only available for data tables with partitions."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5009"}),(0,d.jsxs)(t.td,{children:["The ",(0,d.jsx)(t.code,{children:"PARTITION"})," clause cannot be used to insert data into tables without partitions."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5010"}),(0,d.jsxs)(t.td,{children:["The number of columns in the table to be created is not equal to the number of columns in the ",(0,d.jsx)(t.code,{children:"SELECT"})," clause."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5011"}),(0,d.jsx)(t.td,{children:"Table reference could not be accessed."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5012"}),(0,d.jsx)(t.td,{children:"The specified value is not a valid number."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5013"}),(0,d.jsx)(t.td,{children:"The time unit is not supported."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5014"}),(0,d.jsx)(t.td,{children:"The table status is not normal."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5015"}),(0,d.jsx)(t.td,{children:"The partition status is not normal."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5016"}),(0,d.jsx)(t.td,{children:"A data import job exists in the partition."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5017"}),(0,d.jsx)(t.td,{children:"The specified column is not a dimension column."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5018"}),(0,d.jsx)(t.td,{children:"The format of the value is invalid."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5019"}),(0,d.jsx)(t.td,{children:"The data replica does not match the version."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5021"}),(0,d.jsx)(t.td,{children:"The BE node is offline."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5022"}),(0,d.jsx)(t.td,{children:"The number of partitions in a non-partitioned table is not 1"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5023"}),(0,d.jsx)(t.td,{children:"No action was specified in the statement used to modify the table or data."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5024"}),(0,d.jsx)(t.td,{children:"Job execution timed out."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5025"}),(0,d.jsx)(t.td,{children:"Data insertion failed."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5026"}),(0,d.jsxs)(t.td,{children:["An unsupported data type was used when creating a table via the ",(0,d.jsx)(t.code,{children:"SELECT"})," statement."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5027"}),(0,d.jsx)(t.td,{children:"The specified parameter was not set."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5028"}),(0,d.jsx)(t.td,{children:"The specified cluster was not found."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5030"}),(0,d.jsx)(t.td,{children:"The user does not have permission to access the cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5031"}),(0,d.jsx)(t.td,{children:"No parameter specified or invalid parameter."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5032"}),(0,d.jsx)(t.td,{children:"The number of cluster instances was not specified."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5034"}),(0,d.jsx)(t.td,{children:"A cluster with the same name already exists."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5035"}),(0,d.jsx)(t.td,{children:"The number of cluster instances is incorrectly configured."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5036"}),(0,d.jsx)(t.td,{children:"Insufficient BE nodes in the cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5037"}),(0,d.jsx)(t.td,{children:"All databases should be deleted before deleting the cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5038"}),(0,d.jsx)(t.td,{children:"The BE node with the specified ID does not exist in the cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5040"}),(0,d.jsx)(t.td,{children:"No cluster with the same name exists."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5042"}),(0,d.jsx)(t.td,{children:"No permissions."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5043"}),(0,d.jsx)(t.td,{children:"The number of instances should be greater than 0."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5046"}),(0,d.jsx)(t.td,{children:"Source cluster does not exist."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5047"}),(0,d.jsx)(t.td,{children:"Destination cluster does not exist."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5048"}),(0,d.jsx)(t.td,{children:"Source database does not exist."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5049"}),(0,d.jsx)(t.td,{children:"Destination database does not exist."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5050"}),(0,d.jsx)(t.td,{children:"No cluster selected."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5051"}),(0,d.jsx)(t.td,{children:"The source database should be associated with the destination database first."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5052"}),(0,d.jsx)(t.td,{children:"Intra-cluster error: BE node information is incorrect."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5053"}),(0,d.jsx)(t.td,{children:"There is no migration task from the source database to the destination database."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5054"}),(0,d.jsx)(t.td,{children:"The specified database has been associated with the destination database, or data is being migrated."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5055"}),(0,d.jsx)(t.td,{children:"Database associations or data migrations cannot be performed within the same cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5056"}),(0,d.jsx)(t.td,{children:"Database cannot be deleted: it is associated with another database or data is being migrated."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5056"}),(0,d.jsx)(t.td,{children:"Database cannot be renamed: it is associated with another database or data is being migrated."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5056"}),(0,d.jsx)(t.td,{children:"Insufficient BE nodes in the cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5056"}),(0,d.jsx)(t.td,{children:"The specified number of BE nodes already exists in the cluster."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5059"}),(0,d.jsx)(t.td,{children:"There are BE nodes in the cluster that are in the offline state."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"The type name is incorrect."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5064"}),(0,d.jsx)(t.td,{children:"Generic error message."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"The Colocate feature has been disabled by the administrator."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"A colocate data table with the same name does not exist."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"The Colocate table must be an OLAP table."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"Colocate tables should have the same number of replicas."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"Colocate tables should have the same number of split buckets."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"Colocate tables should have the same number of partition columns."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5063"}),(0,d.jsx)(t.td,{children:"Colocate tables should have the same data type of partitioned columns."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5064"}),(0,d.jsx)(t.td,{children:"The specified table is not a colocate table."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5065"}),(0,d.jsx)(t.td,{children:"The specified operation is invalid."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5065"}),(0,d.jsxs)(t.td,{children:["The specified time unit is illegal. The correct units are ",(0,d.jsx)(t.code,{children:"DAY"}),", ",(0,d.jsx)(t.code,{children:"WEEK"}),", and ",(0,d.jsx)(t.code,{children:"MONTH"}),"."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5066"}),(0,d.jsx)(t.td,{children:"The start value of the dynamic partition should be less than 0."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5066"}),(0,d.jsx)(t.td,{children:"The start value of the dynamic partition is not a valid number."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5066"}),(0,d.jsx)(t.td,{children:"The end value of the dynamic partition should be greater than 0."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5066"}),(0,d.jsx)(t.td,{children:"The end value of the dynamic partition is not a valid number."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5066"}),(0,d.jsx)(t.td,{children:"The end value of the dynamic partition is null."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5067"}),(0,d.jsx)(t.td,{children:"The bucket number of the dynamic partition should be greater than 0."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5067"}),(0,d.jsx)(t.td,{children:"The bucket number of the dynamic partition is not a valid number."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5066"}),(0,d.jsx)(t.td,{children:"The bucket number of the dynamic partition is empty."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5068"}),(0,d.jsx)(t.td,{children:"Whether to allow dynamic partition where the value is not a valid boolean: true or false."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5069"}),(0,d.jsx)(t.td,{children:"The name of the specified dynamic partition has an illegal prefix."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5070"}),(0,d.jsx)(t.td,{children:"The specified operation is disabled."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5071"}),(0,d.jsx)(t.td,{children:"The number of replicas of the dynamic partition should be greater than 0."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5072"}),(0,d.jsx)(t.td,{children:"The number of replicas of the dynamic partition is not a valid number."}),(0,d.jsx)(t.td,{})]})]})]})]})}const j=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(x,e)})):x(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>i});var d=s(67294);const r=d.createContext({});function i(e){const t=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||n:i(e),d.createElement(r.Provider,{value:c},t)}}}]);