"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87972],{6331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),s=n(11151);const a={},r="Authentication methods",o={id:"administration/Authentication",title:"Authentication methods",description:'In addition to the authentication method of "username+password", StarRocks also supports LDAP.',source:"@site/versioned_docs/version-3.0/administration/Authentication.md",sourceDirName:"administration",slug:"/administration/Authentication",permalink:"/doc/en/3.0/administration/Authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Authentication.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",next:{title:"Back up and restore data",permalink:"/doc/en/3.0/administration/Backup_and_restore"}},c={},l=[{value:"LDAP Authentication",id:"ldap-authentication",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"authentication-methods",children:"Authentication methods"}),"\n",(0,i.jsx)(t.p,{children:'In addition to the authentication method of "username+password", StarRocks also supports LDAP.'}),"\n",(0,i.jsx)(t.h2,{id:"ldap-authentication",children:"LDAP Authentication"}),"\n",(0,i.jsx)(t.p,{children:"To use LDAP authentication, you need to add the LDAP service into the FE node configuration first."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authentication_ldap_simple_server_host"}),": Specify the service IP."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authentication_ldap_simple_server_port"}),": Specify the service port, with a default value of 389."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When creating a user, specify the authentication method as LDAP authentication by ",(0,i.jsx)(t.code,{children:"IDENTIFIED WITH authentication_ldap_simple AS 'xxx'"}),". xxx is the DN (Distinguished Name) of the user in LDAP."]}),"\n",(0,i.jsx)(t.p,{children:"Example 1:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE USER tom IDENTIFIED WITH authentication_ldap_simple AS 'uid=tom,ou=company,dc=example,dc=com'\n"})}),"\n",(0,i.jsx)(t.p,{children:"It is possible to create a user without specifying the user's DN in LDAP. When the user logs in, StarRocks will go to the LDAP system to retrieve the user information. if there is one and only one match, the authentication is successful."}),"\n",(0,i.jsx)(t.p,{children:"Example 2:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE USER tom IDENTIFIED WITH authentication_ldap_simple\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this case, additional configuration needs to be added to the FE"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authentication_ldap_simple_bind_base_dn"}),": The base DN of the user, specifying the retrieval range of the user."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authentication_ldap_simple_user_search_attr"}),": The name of the attribute in the LDAP object that identifies the user, uid by default."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authentication_ldap_simple_bind_root_dn"}),": The DN of the administrator account used to retrieve the user information."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"authentication_ldap_simple_bind_root_pwd"}),": The password of the administrator account used when retrieving the user information."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"LDAP authentication requires the client to pass on a clear-text password to StarRocks. There are three ways to pass on a clear-text password:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"MySQL command line"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Add ",(0,i.jsx)(t.code,{children:"--default-auth mysql_clear_password --enable-cleartext-plugin"})," when executing:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"mysql -utom -P8030 -h127.0.0.1 -p --default-auth mysql_clear_password --enable-cleartext-plugin\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"JDBC"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Since JDBC\u2019s default MysqlClearPasswordPlugin requires  SSL transport, a custom plugin is required."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public class MysqlClearPasswordPluginWithoutSSL extends MysqlClearPasswordPlugin {\n    @Override  \n    public boolean requiresConfidentiality() {\n        return false;\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once connected, configure the custom plugin into the property."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'...\nProperties properties = new Properties();// replace xxx.xxx.xxx to your pacakage name\nproperties.put("authenticationPlugins", "xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL");\nproperties.put("defaultAuthenticationPlugin", "xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL");\nproperties.put("disabledAuthenticationPlugins", "com.mysql.jdbc.authentication.MysqlNativePasswordPlugin");DriverManager.getConnection(url, properties);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"ODBC"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Add ",(0,i.jsx)(t.code,{children:"default\\_auth=mysql_clear_password"})," and ",(0,i.jsx)(t.code,{children:"ENABLE_CLEARTEXT\\_PLUGIN=1"})," in the DSN of ODBC: , along with username and password."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var i=n(67294);const s=i.createContext({});function a(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:a(e),i.createElement(s.Provider,{value:o},t)}}}]);