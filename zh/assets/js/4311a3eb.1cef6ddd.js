"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42629],{2815:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(85893),l=s(11151);const i={displayed_sidebar:"Chinese"},c="\u7ba1\u7406\u67e5\u8be2",d={id:"administration/Query_management",title:"\u7ba1\u7406\u67e5\u8be2",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406\u67e5\u8be2\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/administration/Query_management.md",sourceDirName:"administration",slug:"/administration/Query_management",permalink:"/doc/zh/docs/3.0/administration/Query_management",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Query_management.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u4f18\u5316\u6027\u80fd",permalink:"/doc/zh/docs/3.0/administration/Profiling"},next:{title:"\u5206\u6790\u67e5\u8be2",permalink:"/doc/zh/docs/3.0/administration/Query_planning"}},t={},a=[{value:"\u7ba1\u7406\u7528\u6237\u8fde\u63a5\u6570",id:"\u7ba1\u7406\u7528\u6237\u8fde\u63a5\u6570",level:2},{value:"\u8bbe\u7f6e\u67e5\u8be2\u76f8\u5173\u7684 Session \u53d8\u91cf",id:"\u8bbe\u7f6e\u67e5\u8be2\u76f8\u5173\u7684-session-\u53d8\u91cf",level:2},{value:"\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6",id:"\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6",level:3},{value:"\u8c03\u6574\u67e5\u8be2\u5185\u5b58\u4e0a\u9650",id:"\u8c03\u6574\u67e5\u8be2\u5185\u5b58\u4e0a\u9650",level:3},{value:"\u8c03\u6574\u6570\u636e\u5e93\u5b58\u50a8\u5bb9\u91cf Quota",id:"\u8c03\u6574\u6570\u636e\u5e93\u5b58\u50a8\u5bb9\u91cf-quota",level:2},{value:"\u505c\u6b62\u67e5\u8be2",id:"\u505c\u6b62\u67e5\u8be2",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u7ba1\u7406\u67e5\u8be2",children:"\u7ba1\u7406\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7ba1\u7406\u7528\u6237\u8fde\u63a5\u6570",children:"\u7ba1\u7406\u7528\u6237\u8fde\u63a5\u6570"}),"\n",(0,r.jsx)(n.p,{children:"Property \u6307\u9488\u5bf9\u7528\u6237\u7c92\u5ea6\u7684\u5c5e\u6027\u7684\u8bbe\u7f6e\u9879\u3002\u8bbe\u7f6e\u7528\u6237\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u5206\u914d\u7ed9\u7528\u6237\u7684\u8d44\u6e90\u7b49\u3002\u6b64\u5904\u7684\u7528\u6237\u5c5e\u6027\uff0c\u662f\u6307\u9488\u5bf9 user\uff0c\u800c\u975e user_identity \u7684\u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u7ba1\u7406\u7279\u5b9a\u7528\u6237\u7684\u5ba2\u6237\u7aef\u5230 FE \u6700\u5927\u8fde\u63a5\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY [FOR 'user'] 'key' = 'value'[, ...];\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u4fee\u6539\u7528\u6237 jack \u7684\u6700\u5927\u8fde\u63a5\u6570\u4e3a 1000\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7279\u5b9a\u7528\u6237\u7684\u8fde\u63a5\u6570\u9650\u5236\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW PROPERTY FOR 'user';\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u67e5\u8be2\u76f8\u5173\u7684-session-\u53d8\u91cf",children:"\u8bbe\u7f6e\u67e5\u8be2\u76f8\u5173\u7684 Session \u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u67e5\u8be2\u76f8\u5173\u7684 Session \u7ea7\u522b\u53d8\u91cf\uff0c\u4ee5\u8c03\u6574\u5f53\u524d Session \u4e2d\u67e5\u8be2\u7684\u5e76\u53d1\u5ea6\uff0c\u5185\u5b58\u7b49\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6",children:"\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u9700\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6\uff0c\u63a8\u8350\u60a8\u4fee\u6539 Pipeline \u6267\u884c\u5f15\u64ce\u76f8\u5173\u53d8\u91cf\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u81ea 2.2 \u7248\u672c\u8d77\uff0c\u6b63\u5f0f\u53d1\u5e03 Pipeline \u5f15\u64ce\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u81ea 3.0 \u7248\u672c\u8d77\uff0c\u652f\u6301\u6839\u636e\u67e5\u8be2\u5e76\u53d1\u5ea6\u81ea\u9002\u5e94\u8c03\u8282 ",(0,r.jsx)(n.code,{children:"pipeline_dop"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET enable_pipeline_engine = true;\r\nSET pipeline_dop = 0;\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enable_pipeline_engine"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u542f\u7528 Pipeline \u6267\u884c\u5f15\u64ce\u3002true\uff1a\u542f\u7528\uff08\u9ed8\u8ba4\uff09\uff0cfalse\uff1a\u4e0d\u542f\u7528\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pipeline_dop"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a Pipeline \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf\u3002\u5efa\u8bae\u8bbe\u4e3a\u9ed8\u8ba4\u503c 0\uff0c\u5373\u7cfb\u7edf\u81ea\u9002\u5e94\u8c03\u6574\u6bcf\u4e2a pipeline \u7684\u5e76\u884c\u5ea6\u3002\u60a8\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5927\u4e8e 0 \u7684\u6570\u503c\uff0c\u901a\u5e38\u4e3a BE \u8282\u70b9 CPU \u7269\u7406\u6838\u6570\u7684\u4e00\u534a\u3002"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u901a\u8fc7\u8bbe\u7f6e\u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET GLOBAL parallel_fragment_exec_instance_num = INT;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parallel_fragment_exec_instance_num"}),"\uff1a\u4e00\u4e2a Fragment \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf\u3002\u4e00\u4e2a Fragment \u5b9e\u4f8b\u5360\u7528 BE \u8282\u70b9\u7684\u4e00\u4e2a CPU\uff0c\u6240\u4ee5\u4e00\u4e2a\u67e5\u8be2\u7684\u5e76\u884c\u5ea6\u4e3a\u4e00\u4e2a Fragment \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf\u3002\u5982\u679c\u60a8\u5e0c\u671b\u63d0\u5347\u4e00\u4e2a\u67e5\u8be2\u7684\u5e76\u884c\u5ea6\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e\u8be5\u53c2\u6570\u4e3a BE \u7684 CPU \u6838\u6570\u7684\u4e00\u534a\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b9e\u9645\u573a\u666f\u4e2d\uff0c\u4e00\u4e2a Fragment \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf\u5b58\u5728\u4e0a\u9650\uff0c\u4e3a\u4e00\u5f20\u8868\u5728\u4e00\u4e2a BE \u4e2d\u7684 Tablet \u6570\u91cf\u3002\u4f8b\u5982\uff0c\u4e00\u5f20\u8868\u7684 3 \u4e2a\u5206\u533a\uff0c32 \u4e2a\u5206\u6876\uff0c\u5206\u5e03\u5728 4 \u4e2a BE \u8282\u70b9\u4e0a\uff0c\u5219\u4e00\u4e2a BE \u8282\u70b9\u7684 Tablet \u6570\u91cf\u4e3a 32 * 3 / 4 = 24\uff0c\u56e0\u6b64\u8be5 BE \u8282\u70b9\u4e0a\u4e00\u4e2a Fragment \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u4e0a\u9650\u4e3a 24\uff0c\u6b64\u65f6\u5373\u4f7f\u8bbe\u7f6e\u8be5\u53c2\u6570\u4e3a ",(0,r.jsx)(n.code,{children:"32"}),"\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u5e76\u884c\u6570\u4ecd\u4e3a 24\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0cCPU \u8d44\u6e90\u5f80\u5f80\u5df2\u5145\u5206\u5229\u7528\uff0c\u56e0\u6b64\u5efa\u8bae\u8bbe\u7f6e Fragment \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf\u4e3a ",(0,r.jsx)(n.code,{children:"1"}),"\uff0c\u4ee5\u51cf\u5c11\u4e0d\u540c\u67e5\u8be2\u95f4\u8d44\u6e90\u7ade\u4e89\uff0c\u4ece\u800c\u63d0\u9ad8\u6574\u4f53\u67e5\u8be2\u6548\u7387\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8c03\u6574\u67e5\u8be2\u5185\u5b58\u4e0a\u9650",children:"\u8c03\u6574\u67e5\u8be2\u5185\u5b58\u4e0a\u9650"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8c03\u6574\u67e5\u8be2\u5185\u5b58\u4e0a\u9650\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET query_mem_limit = INT;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"query_mem_limit"}),"\uff1a\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\uff0c\u5355\u4f4d\u662f Byte\u3002\u5efa\u8bae\u8bbe\u7f6e\u4e3a 17179869184\uff0816GB\uff09\u4ee5\u4e0a\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8c03\u6574\u6570\u636e\u5e93\u5b58\u50a8\u5bb9\u91cf-quota",children:"\u8c03\u6574\u6570\u636e\u5e93\u5b58\u50a8\u5bb9\u91cf Quota"}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u8bbe\u7f6e\u4e0b\uff0c\u6bcf\u4e2a\u6570\u636e\u5e93\u7684\u5b58\u50a8\u5bb9\u91cf\u65e0\u9650\u5236\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8c03\u6574\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET DATA QUOTA quota;\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a",(0,r.jsx)(n.code,{children:"quota"})," \u5355\u4f4d\u4e3a ",(0,r.jsx)(n.code,{children:"B"}),"\uff0c",(0,r.jsx)(n.code,{children:"K"}),"\uff0c",(0,r.jsx)(n.code,{children:"KB"}),"\uff0c",(0,r.jsx)(n.code,{children:"M"}),"\uff0c",(0,r.jsx)(n.code,{children:"MB"}),"\uff0c",(0,r.jsx)(n.code,{children:"G"}),"\uff0c",(0,r.jsx)(n.code,{children:"GB"}),"\uff0c",(0,r.jsx)(n.code,{children:"T"}),"\uff0c",(0,r.jsx)(n.code,{children:"TB"}),"\uff0c",(0,r.jsx)(n.code,{children:"P"}),"\uff0c\u6216 ",(0,r.jsx)(n.code,{children:"PB"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE example_db SET DATA QUOTA 10T;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be6\u7ec6\u5185\u5bb9\uff0c\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_DATABASE",children:"ALTER DATABASE"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u505c\u6b62\u67e5\u8be2",children:"\u505c\u6b62\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u67d0\u4e00\u4e2a\u8fde\u63a5\u4e0a\u7684\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"KILL connection_id;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"connection_id"}),"\uff1a\u7279\u5b9a\u8fde\u63a5\u7684 ID\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"SHOW processlist;"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"select connection_id();"})," \u67e5\u770b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> show processlist;\r\n+------+--------------+---------------------+-----------------+-------------------+---------+------+-------+------+\r\n| Id   | User         | Host                | Cluster         | Db                | Command | Time | State | Info |\r\n+------+--------------+---------------------+-----------------+-------------------+---------+------+-------+------+\r\n|    1 | starrocksmgr | 172.26.34.147:56208 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\r\n|  129 | root         | 172.26.92.139:54818 | default_cluster |                   | Query   |    0 |       |      |\r\n|  114 | test         | 172.26.34.147:57974 | default_cluster | ssb_100g          | Query   |    3 |       |      |\r\n|    3 | starrocksmgr | 172.26.34.147:57268 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\r\n|  100 | root         | 172.26.34.147:58472 | default_cluster | ssb_100           | Sleep   |  637 |       |      |\r\n|  117 | starrocksmgr | 172.26.34.147:33790 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\r\n|    6 | starrocksmgr | 172.26.34.147:57632 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\r\n|  119 | starrocksmgr | 172.26.34.147:33804 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\r\n|  111 | root         | 172.26.92.139:55472 | default_cluster |                   | Sleep   | 2758 |       |      |\r\n+------+--------------+---------------------+-----------------+-------------------+---------+------+-------+------+\r\n9 rows in set (0.00 sec)\r\n\r\nmysql> select connection_id();\r\n+-----------------+\r\n| CONNECTION_ID() |\r\n+-----------------+\r\n|              98 |\r\n+-----------------+\r\n\r\n\r\nmysql> kill 114;\r\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Info"})," \u5217\u4e2d\u5c55\u793a\u5bf9\u5e94\u7684 SQL \u8bed\u53e5\u3002\u5982\u679c\u56e0\u4e3a SQL \u8bed\u53e5\u8f83\u957f\u800c\u5bfc\u81f4\u88ab\u622a\u65ad\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SHOW FULL processlist;"})," \u6765\u67e5\u770b\u5b8c\u6574\u7684 SQL \u8bed\u53e5\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>i});var r=s(67294);const l=r.createContext({});function i(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(l.Provider,{value:d},n)}}}]);