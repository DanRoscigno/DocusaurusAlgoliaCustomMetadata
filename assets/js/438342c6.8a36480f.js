"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80294],{56012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(85893),s=a(11151);const n={},r="File manager",l={id:"administration/filemanager",title:"File manager",description:"With file manager, you can create, view, and delete files, such as the files that are used to access external data sources: public key files, private key files, and certificate files. You can reference or access the created files by using commands.",source:"@site/versioned_docs/version-2.5/administration/filemanager.md",sourceDirName:"administration",slug:"/administration/filemanager",permalink:"/doc/docs/2.5/administration/filemanager",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/filemanager.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Enable FQDN access",permalink:"/doc/docs/2.5/administration/enable_fqdn"},next:{title:"Information Schema",permalink:"/doc/docs/2.5/administration/information_schema"}},o={},c=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Create a file",id:"create-a-file",level:2},{value:"View a file",id:"view-a-file",level:2},{value:"Delete a file",id:"delete-a-file",level:2},{value:"How an FE and a BE use a file",id:"how-an-fe-and-a-be-use-a-file",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code",a:"a",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"file-manager",children:"File manager"}),"\n",(0,i.jsx)(t.p,{children:"With file manager, you can create, view, and delete files, such as the files that are used to access external data sources: public key files, private key files, and certificate files. You can reference or access the created files by using commands."}),"\n",(0,i.jsx)(t.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"File"}),": refers to the file that is created and saved in StarRocks. After a file is created and stored in StarRocks, StarRocks assigns a unique ID to the file. You can find a file based on the database name, catalog, and file name. In a database, only an admin user can create and delete files, and all users who have permissions to access a database can use the files that belong to the database."]}),"\n",(0,i.jsx)(t.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Configure the following parameters for each FE.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"small_file_dir"}),": the path in which the uploaded files are stored. The default path is ",(0,i.jsx)(t.code,{children:"small_files/"}),", which is in the runtime directory of the FE. You need to specify this parameter in the ",(0,i.jsx)(t.strong,{children:"fe.conf"})," file and then restart the FE to allow the change to take effect."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"max_small_file_size_bytes"}),": the maximum size of a single file. The default value of this parameter is 1 MB. If the size of a file exceeds the value of this parameter, the file cannot be created. You can specify this parameter by using the ",(0,i.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN%20SET%20CONFIG",children:"ADMIN SET CONFIG"})," statement."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"max_small_file_number"}),": the maximum number of files that can be created within a cluster. The default value of this parameter is 100. If the number of files that you have created reaches the value of this parameter, you cannot continue creating files. You can specify this parameter by using the ADMIN SET CONFIG statement."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note: Increasing the values of the two parameters causes an increase in the memory usage of the FE. Therefore, we recommend that you do not increase the values of the two parameters unless necessary."}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Configure the following parameters for each BE."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"small_file_dir"}),": the path in which the downloaded files are stored. The default path is ",(0,i.jsx)(t.code,{children:"lib/small_files/"}),", which is in the runtime directory of the BE. You can specify this parameter in the ",(0,i.jsx)(t.strong,{children:"be.conf"})," file."]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-file",children:"Create a file"}),"\n",(0,i.jsxs)(t.p,{children:["You can execute the CREATE FILE statement to create a file. For more information, see ",(0,i.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/Administration/CREATE%20FILE",children:"CREATE FILE"}),". After a file is created, the file is uploaded and persisted in StarRocks."]}),"\n",(0,i.jsx)(t.h2,{id:"view-a-file",children:"View a file"}),"\n",(0,i.jsxs)(t.p,{children:["You can execute the SHOW FILE statement to view the information about a file stored in a database. For more information, see ",(0,i.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/Administration/SHOW%20FILE",children:"SHOW FILE"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"delete-a-file",children:"Delete a file"}),"\n",(0,i.jsxs)(t.p,{children:["You can execute the DROP FILE statement to delete a file. For more information, see ",(0,i.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/Administration/DROP%20FILE",children:"DROP FILE"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-an-fe-and-a-be-use-a-file",children:"How an FE and a BE use a file"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FE"}),": The SmallFileMgr class stores the data related to the file in the specified directory of the FE. Then the SmallFileMgr class returns a local file path for the FE to use the file."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"BE"}),": The BE calls the ",(0,i.jsx)(t.strong,{children:"/api/get_small_file API"})," (HTTP) to download the file to its specified directory and record the information of the file. When the BE requests to use the file, the BE checks whether the file has been downloaded and then verifies the file. If the file pass the verification, the path of the file is returned. If the file fails the verification, the file is deleted and re-downloaded from the FE. When a BE restarts, it preloads the downloaded file into its memory."]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>l,ah:()=>n});var i=a(67294);const s=i.createContext({});function n(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||r:n(e),i.createElement(s.Provider,{value:l},t)}}}]);