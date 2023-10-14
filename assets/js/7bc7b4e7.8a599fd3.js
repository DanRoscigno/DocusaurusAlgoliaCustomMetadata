"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65888],{4684:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(85893),s=n(11151);const r={},c="JDBC catalog",o={id:"data_source/catalog/jdbc_catalog",title:"JDBC catalog",description:"StarRocks supports JDBC catalogs from v3.0 onwards.",source:"@site/versioned_docs/version-3.0/data_source/catalog/jdbc_catalog.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/jdbc_catalog",permalink:"/doc/en/3.0/data_source/catalog/jdbc_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/data_source/catalog/jdbc_catalog.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Iceberg catalog",permalink:"/doc/en/3.0/data_source/catalog/iceberg_catalog"},next:{title:"Query external data",permalink:"/doc/en/3.0/data_source/catalog/query_external_data"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a JDBC catalog",id:"create-a-jdbc-catalog",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"<code>catalog_name</code>",id:"catalog_name",level:4},{value:"<code>comment</code>",id:"comment",level:4},{value:"<code>PROPERTIES</code>",id:"properties",level:4},{value:"Examples",id:"examples",level:3},{value:"View JDBC catalogs",id:"view-jdbc-catalogs",level:2},{value:"Drop a JDBC catalog",id:"drop-a-jdbc-catalog",level:2},{value:"Query a table in a JDBC catalog",id:"query-a-table-in-a-jdbc-catalog",level:2},{value:"FAQ",id:"faq",level:2}];function i(e){const a=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",h3:"h3",pre:"pre",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ol:"ol"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"jdbc-catalog",children:"JDBC catalog"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks supports JDBC catalogs from v3.0 onwards."}),"\n",(0,t.jsx)(a.p,{children:"A JDBC catalog is a kind of external catalog that enables you to query data from data sources accessed through JDBC without ingestion."}),"\n",(0,t.jsxs)(a.p,{children:["Also, you can directly transform and load data from JDBC data sources by using ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"})," based on JDBC catalogs."]}),"\n",(0,t.jsx)(a.p,{children:"JDBC catalogs currently support MySQL and PostgreSQL."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["The FEs and BEs in your StarRocks cluster can download the JDBC driver from the download URL specified by the ",(0,t.jsx)(a.code,{children:"driver_url"})," parameter."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"JAVA_HOME"})," in the ",(0,t.jsx)(a.strong,{children:"$BE_HOME/bin/start_be.sh"})," file on each BE node is properly configured as a path in the JDK environment instead of a path in the JRE environment. For example, you can configure ",(0,t.jsx)(a.code,{children:"export JAVA_HOME = <JDK_absolute_path>"}),". You must add this configuration at the beginning of the script and restart the BE for the configuration to take effect."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"create-a-jdbc-catalog",children:"Create a JDBC catalog"}),"\n",(0,t.jsx)(a.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG <catalog_name>\n[COMMENT <comment>]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,t.jsx)(a.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(a.h4,{id:"catalog_name",children:(0,t.jsx)(a.code,{children:"catalog_name"})}),"\n",(0,t.jsx)(a.p,{children:"The name of the JDBC catalog. The naming conventions are as follows:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The name can contain letters, digits (0-9), and underscores (_). It must start with a letter."}),"\n",(0,t.jsx)(a.li,{children:"The name is case-sensitive and cannot exceed 1023 characters in length."}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"comment",children:(0,t.jsx)(a.code,{children:"comment"})}),"\n",(0,t.jsx)(a.p,{children:"The description of the JDBC catalog. This parameter is optional."}),"\n",(0,t.jsx)(a.h4,{id:"properties",children:(0,t.jsx)(a.code,{children:"PROPERTIES"})}),"\n",(0,t.jsxs)(a.p,{children:["The properties of the JDBC Catalog. ",(0,t.jsx)(a.code,{children:"PROPERTIES"})," must include the following parameters:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Parameter"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Description"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"type"}),(0,t.jsxs)(a.td,{children:["The type of the resource. Set the value to ",(0,t.jsx)(a.code,{children:"jdbc"}),"."]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"user"}),(0,t.jsx)(a.td,{children:"The username that is used to connect to the target database."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"password"}),(0,t.jsx)(a.td,{children:"The password that is used to connect to the target database."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"jdbc_uri"}),(0,t.jsxs)(a.td,{children:["The URI that the JDBC driver uses to connect to the target database. For MySQL, the URI is in the ",(0,t.jsx)(a.code,{children:'"jdbc:mysql://ip:port"'})," format. For PostgreSQL, the URI is in the ",(0,t.jsx)(a.code,{children:'"jdbc:postgresql://ip:port/db_name"'})," format. For more information, visit the official websites of ",(0,t.jsx)(a.a,{href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html",children:"MySQL"})," and ",(0,t.jsx)(a.a,{href:"https://jdbc.postgresql.org/documentation/head/connect.html",children:"PostgreSQL"}),"."]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"driver_url"}),(0,t.jsxs)(a.td,{children:["The download URL of the JDBC driver JAR package. An HTTP URL or file URL is supported, for example, ",(0,t.jsx)(a.code,{children:"https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar"})," and ",(0,t.jsx)(a.code,{children:"file:///home/disk1/postgresql-42.3.3.jar"}),".",(0,t.jsx)("br",{}),(0,t.jsx)(a.strong,{children:"NOTE"}),(0,t.jsx)("br",{}),"You can also put the JDBC driver to any same path on the FE and BE nodes and set ",(0,t.jsx)(a.code,{children:"driver_url"})," to that path, which must be in the ",(0,t.jsx)(a.code,{children:"file:///<path>/to/the/driver"})," format."]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"driver_class"}),(0,t.jsxs)(a.td,{children:["The class name of the JDBC driver. The JDBC driver class names of common database engines are as follows:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["MySQL: ",(0,t.jsx)(a.code,{children:"com.mysql.jdbc.Driver"})," (MySQL v5.x and earlier) and ",(0,t.jsx)(a.code,{children:"com.mysql.cj.jdbc.Driver"})," (MySQL v6.x and later)"]}),(0,t.jsxs)("li",{children:["PostgreSQL: ",(0,t.jsx)(a.code,{children:"org.postgresql.Driver"})]})]})]})]})]})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"The FEs download the JDBC driver JAR package at the time of JDBC catalog creation, and the BEs download the JDBC driver JAR package at the time of the first query. The amount of time taken for the download varies depending on network conditions."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(a.p,{children:["The following example creates two JDBC catalogs: ",(0,t.jsx)(a.code,{children:"jdbc0"})," and ",(0,t.jsx)(a.code,{children:"jdbc1"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG jdbc0\nPROPERTIES\n(\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="changeme",\n    "jdbc_uri"="jdbc:postgresql://127.0.0.1:5432/jdbc_test",\n    "driver_url"="https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar",\n    "driver_class"="org.postgresql.Driver"\n);\n\nCREATE EXTERNAL CATALOG jdbc1\nPROPERTIES\n(\n    "type"="jdbc",\n    "user"="root",\n    "password"="changeme",\n    "jdbc_uri"="jdbc:mysql://127.0.0.1:3306",\n    "driver_url"="https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar",\n    "driver_class"="com.mysql.cj.jdbc.Driver"\n);\n'})}),"\n",(0,t.jsx)(a.h2,{id:"view-jdbc-catalogs",children:"View JDBC catalogs"}),"\n",(0,t.jsxs)(a.p,{children:["You can use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," to query all catalogs in the current StarRocks cluster:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SHOW CATALOGS;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can also use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",children:"SHOW CREATE CATALOG"})," to query the creation statement of an external catalog. The following example queries the creation statement of a JDBC catalog named ",(0,t.jsx)(a.code,{children:"jdbc0"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SHOW CREATE CATALOG jdbc0;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"drop-a-jdbc-catalog",children:"Drop a JDBC catalog"}),"\n",(0,t.jsxs)(a.p,{children:["You can use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/DROP_CATALOG",children:"DROP CATALOG"})," to drop a JDBC catalog."]}),"\n",(0,t.jsxs)(a.p,{children:["The following example drops a JDBC catalog named ",(0,t.jsx)(a.code,{children:"jdbc0"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"DROP Catalog jdbc0;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"query-a-table-in-a-jdbc-catalog",children:"Query a table in a JDBC catalog"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})," to view the databases in your JDBC-compatible cluster:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES <catalog_name>;\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/SET_CATALOG",children:"SET CATALOG"})," to switch to the destination catalog in the current session:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SET CATALOG <catalog_name>;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Then, use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})," to specify the active database in the current session:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"USE <db_name>;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Or, you can use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})," to directly specify the active database in the destination catalog:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"USE <catalog_name>.<db_name>;\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"/doc/en/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})," to query the destination table in the specified database:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM <table_name>;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(a.p,{children:'What do I do if an error suggesting "Malformed database URL, failed to parse the main URL sections" is thrown?'}),"\n",(0,t.jsxs)(a.p,{children:["If you encounter such an error, the URI that you passed in ",(0,t.jsx)(a.code,{children:"jdbc_uri"}),' is invalid. Check the URI that you pass and make sure it is valid. For more information, see the parameter descriptions in the "',(0,t.jsx)(a.a,{href:"#properties",children:"PROPERTIES"}),'" section of this topic.']})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>o,ah:()=>r});var t=n(67294);const s=t.createContext({});function r(e){const a=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function o({components:e,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(s.Provider,{value:o},a)}}}]);