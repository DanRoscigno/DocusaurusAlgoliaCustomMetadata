"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10677],{39756:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=s(85893),l=s(11151);const o={},i="\u8d1f\u8f7d\u5747\u8861",c={id:"administration/Load_balance",title:"\u8d1f\u8f7d\u5747\u8861",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5728\u591a\u4e2a FE \u8282\u70b9\u4e4b\u4e0a\u90e8\u7f72\u8d1f\u8f7d\u5747\u8861\u5c42\u4ee5\u5b9e\u73b0 StarRocks \u7684\u9ad8\u53ef\u7528\u3002",source:"@site/chinese_versioned_docs/version-2.5/administration/Load_balance.md",sourceDirName:"administration",slug:"/administration/Load_balance",permalink:"/doc/zh/2.5/administration/Load_balance",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Load_balance.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"\u90e8\u7f72 FE \u9ad8\u53ef\u7528\u96c6\u7fa4",permalink:"/doc/zh/2.5/administration/Deployment"},next:{title:"\u7ba1\u7406\u5185\u5b58",permalink:"/doc/zh/2.5/administration/Memory_management"}},t={},a=[{value:"\u901a\u8fc7\u4ee3\u7801\u5747\u8861\u8d1f\u8f7d",id:"\u901a\u8fc7\u4ee3\u7801\u5747\u8861\u8d1f\u8f7d",level:2},{value:"\u901a\u8fc7 JDBC Connector \u5747\u8861\u8d1f\u8f7d",id:"\u901a\u8fc7-jdbc-connector-\u5747\u8861\u8d1f\u8f7d",level:2},{value:"\u901a\u8fc7 ProxySQL \u5747\u8861\u8d1f\u8f7d",id:"\u901a\u8fc7-proxysql-\u5747\u8861\u8d1f\u8f7d",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ol:"ol",li:"li",blockquote:"blockquote",strong:"strong"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u8d1f\u8f7d\u5747\u8861",children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5728\u591a\u4e2a FE \u8282\u70b9\u4e4b\u4e0a\u90e8\u7f72\u8d1f\u8f7d\u5747\u8861\u5c42\u4ee5\u5b9e\u73b0 StarRocks \u7684\u9ad8\u53ef\u7528\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u8fc7\u4ee3\u7801\u5747\u8861\u8d1f\u8f7d",children:"\u901a\u8fc7\u4ee3\u7801\u5747\u8861\u8d1f\u8f7d"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u5c42\u4ee3\u7801\u8fdb\u884c\u91cd\u8bd5\u548c\u8d1f\u8f7d\u5747\u8861 (Load Balance)\u3002\u5f53\u7279\u5b9a\u8fde\u63a5\u5b95\u673a\uff0c\u4ee3\u7801\u5e94\u63a7\u5236\u7cfb\u7edf\u81ea\u52a8\u5728\u5176\u4ed6\u8fde\u63a5\u4e0a\u8fdb\u884c\u91cd\u8bd5\u3002\u4f7f\u7528\u8be5\u65b9\u5f0f\uff0c\u60a8\u9700\u8981\u914d\u7f6e\u591a\u4e2a StarRocks \u524d\u7aef\u8282\u70b9\u5730\u5740\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u8fc7-jdbc-connector-\u5747\u8861\u8d1f\u8f7d",children:"\u901a\u8fc7 JDBC Connector \u5747\u8861\u8d1f\u8f7d"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 MySQL JDBC Connector \u8fde\u63a5 StarRocks\uff0c\u53ef\u4ee5\u901a\u8fc7 JDBC \u7684\u81ea\u52a8\u91cd\u8bd5\u673a\u5236\u8fdb\u884c\u91cd\u8bd5\u548c\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"jdbc:mysql:loadbalance://[host1][:port],[host2][:port][,[host3][:port]]...[/[database]][?propertyName1=propertyValue1[&propertyName2=propertyValue2]...]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u8fc7-proxysql-\u5747\u8861\u8d1f\u8f7d",children:"\u901a\u8fc7 ProxySQL \u5747\u8861\u8d1f\u8f7d"}),"\n",(0,r.jsx)(n.p,{children:"ProxySQL \u662f\u4e00\u4e2a\u7075\u6d3b\u5f3a\u5927\u7684 MySQL \u4ee3\u7406\u5c42\uff0c\u53ef\u4ee5\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u652f\u6301 Query \u8def\u7531\u3001SQL Cache\uff0c\u52a8\u6001\u52a0\u8f7d\u914d\u7f6e\u3001\u6545\u969c\u5207\u6362\u548c SQL \u8fc7\u6ee4\u7b49\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u7684 FE \u8fdb\u7a0b\u8d1f\u8d23\u63a5\u6536\u7528\u6237\u8fde\u63a5\u548c\u67e5\u8be2\u8bf7\u6c42\uff0c\u5176\u672c\u8eab\u662f\u53ef\u4ee5\u6a2a\u5411\u6269\u5c55\u4e14\u53ef\u4ee5\u90e8\u7f72\u4e3a\u9ad8\u53ef\u7528\u96c6\u7fa4\u3002\u60a8\u9700\u8981\u5728\u591a\u4e2a FE \u8282\u70b9\u4e0a\u67b6\u8bbe\u4e00\u5c42 Proxy \u4ee5\u5b9e\u73b0\u81ea\u52a8\u7684\u8fde\u63a5\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yum install -y gnutls perl-DBD-MySQL perl-DBI perl-devel\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0b\u8f7d\u5e76\u89e3\u538b ProxySQL \u5b89\u88c5\u5305\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget https://github.com/sysown/proxysql/releases/download/v2.0.14/proxysql-2.0.14-1-centos7.x86_64.rpm\r\nrpm2cpio proxysql-2.0.14-1-centos7.x86_64.rpm | cpio -ivdm\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u60a8\u53ef\u4ee5\u81ea\u884c\u9009\u62e9\u4e0b\u8f7d\u5176\u4ed6\u7248\u672c\u7684 ProxySQL\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(n.strong,{children:"/etc/proxysql.cnf"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\u9879\u4e3a\u60a8\u6709\u8bbf\u95ee\u6743\u9650\u7684\u76ee\u5f55\uff08\u7edd\u5bf9\u8def\u5f84\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:'datadir = "/var/lib/proxysql"\r\nerrorlog = "/var/lib/proxysql/proxysql.log"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8 ProxySQL\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./usr/bin/proxysql -c ./etc/proxysql.cnf --no-monitor\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u767b\u5f55 StarRocks\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"mysql -u admin -padmin -h 127.0.0.1 -P6032\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,r.jsxs)(n.p,{children:["ProxySQL \u9ed8\u8ba4\u5305\u542b\u4e24\u4e2a\u7aef\u53e3\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"6032"})," \u662f ProxySQL \u7684\u7ba1\u7406\u7aef\u53e3\uff0c",(0,r.jsx)(n.code,{children:"6033"})," \u662f ProxySQL \u7684\u6d41\u91cf\u8f6c\u53d1\u7aef\u53e3\uff0c\u5373\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u7aef\u53e3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u5168\u5c40\u65e5\u5fd7\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET mysql-eventslog_filename='proxysql_queries.log';\r\nSET mysql-eventslog_default_log=1;\r\nSET mysql-eventslog_format=2;\r\nLOAD MYSQL VARIABLES TO RUNTIME;\r\nSAVE MYSQL VARIABLES TO DISK;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u63d2\u5165\u4e3b\u8282\u70b9\u4ee5\u53ca Observer \u8282\u70b9\u5e76\u8bfb\u53d6\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into mysql_servers(hostgroup_id, hostname, port) values(1, '172.26.92.139', 9030);\r\ninsert into mysql_servers(hostgroup_id, hostname, port) values(1, '172.26.34.139', 9030);\r\ninsert into mysql_servers(hostgroup_id, hostname, port) values(1, '172.26.34.140', 9030);\r\nload mysql servers to runtime;\r\nsave mysql servers to disk;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u7528\u6237\u540d\u548c\u5bc6\u7801\u5e76\u8bfb\u53d6\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into mysql_users(username, password, active, default_hostgroup, backend, frontend) \r\nvalues('root', '*FAAFFE644E901CFAFAEC7562415E5FAEC243B8B2', 1, 1, 1, 1);\r\nload mysql users to runtime; \r\nsave mysql users to disk;\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8fd9\u91cc ",(0,r.jsx)(n.code,{children:"password"})," \u8f93\u5165\u503c\u4e3a\u5bc6\u6587\u3002\u4f8b\u5982\uff0croot \u7528\u6237\u5bc6\u7801\u4e3a ",(0,r.jsx)(n.code,{children:"root123"}),"\uff0c\u5219 ",(0,r.jsx)(n.code,{children:"password"})," \u8f93\u5165\u4e3a ",(0,r.jsx)(n.code,{children:"*FAAFFE644E901CFAFAEC7562415E5FAEC243B8B2"}),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"password()"}),"\u51fd\u6570\u83b7\u53d6\u5177\u4f53\u8f93\u5165\u7684\u52a0\u5bc6\u503c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select password('root123');\r\n+---------------------------------------------+\r\n| '*FAAFFE644E901CFAFAEC7562415E5FAEC243B8B2' |\r\n+---------------------------------------------+\r\n| *FAAFFE644E901CFAFAEC7562415E5FAEC243B8B2   |\r\n+---------------------------------------------+\r\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5199\u5165\u4ee3\u7406\u89c4\u5219\u5e76\u8bfb\u53d6\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into mysql_query_rules(rule_id, active, match_digest, destination_hostgroup, mirror_hostgroup, apply) values(1, 1, '.', 1, 2, 1);\r\nload mysql query rules to runtime; \r\nsave mysql query rules to disk;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5b8c\u6210\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ProxySQL \u7ecf\u7531 ",(0,r.jsx)(n.code,{children:"6033"})," \u7aef\u53e3\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'mysql -u admin -padmin -P6033 -h 127.0.0.1 -e"select * from db_name.table_name"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u7ed3\u679c\u6b63\u5e38\u8fd4\u56de\uff0c\u5219\u8868\u793a\u60a8\u5df2\u6210\u529f\u901a\u8fc7 ProxySQL \u8fde\u63a5 StarRocks\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>o});var r=s(67294);const l=r.createContext({});function o(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:o(e),r.createElement(l.Provider,{value:c},n)}}}]);