"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58737],{91461:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var n=r(85893),t=r(11151);const c={displayed_sidebar:"Chinese"},l="\u652f\u6301 Superset",a={id:"integrations/superset_support",title:"\u652f\u6301 Superset",description:"Apache Superset \u662f\u4e00\u4e2a\u73b0\u4ee3\u6570\u636e\u63a2\u7d22\u548c\u53ef\u89c6\u5316\u5e73\u53f0\u3002\u5b83\u4f7f\u7528 SQLAlchemy \u6765\u67e5\u8be2\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/integrations/superset_support.md",sourceDirName:"integrations",slug:"/integrations/superset_support",permalink:"/doc/zh/docs/integrations/superset_support",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/integrations/superset_support.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese"},i={},o=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Sqlalchemy \u793a\u4f8b",id:"sqlalchemy-\u793a\u4f8b",level:3},{value:"Superset \u793a\u4f8b",id:"superset-\u793a\u4f8b",level:3}];function h(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u652f\u6301-superset",children:"\u652f\u6301 Superset"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://superset.apache.org",children:"Apache Superset"})," \u662f\u4e00\u4e2a\u73b0\u4ee3\u6570\u636e\u63a2\u7d22\u548c\u53ef\u89c6\u5316\u5e73\u53f0\u3002\u5b83\u4f7f\u7528 ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/tree/main/contrib/starrocks-python-client/starrocks",children:"SQLAlchemy"})," \u6765\u67e5\u8be2\u6570\u636e\u3002\n\u867d\u7136\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.a,{href:"https://superset.apache.org/docs/databases/mysql",children:"Mysql Dialect"}),"\uff0c\u4f46\u662f\u5b83\u4e0d\u652f\u6301 LARGEINT\u3002\u6240\u4ee5\u6211\u4eec\u5f00\u53d1\u4e86 ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/blob/main/contrib/sqlalchemy-connector",children:"StarRocks Dialect"}),"\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Python 3.x"}),"\n",(0,n.jsx)(s.li,{children:"mysqlclient (pip install mysqlclient)"}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://superset.apache.org",children:"Apache Superset"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6ce8\u610f: \u5982\u679c\u6ca1\u6709\u5b89\u88c5 ",(0,n.jsx)(s.code,{children:"mysqlclient"}),"\uff0c\u5c06\u629b\u51fa\u5f02\u5e38: No module named 'MySQLdb'\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,n.jsxs)(s.p,{children:["\u7531\u4e8e ",(0,n.jsx)(s.code,{children:"dialect"})," \u8fd8\u6ca1\u6709\u8d21\u732e\u7ed9 SQLAlchemy \u793e\u533a\uff0c\u9700\u8981\u4f7f\u7528\u6e90\u7801\u8fdb\u884c\u5b89\u88c5\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528 Docker \u5b89\u88c5 Superset\uff0c\u9700\u8981\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"root"})," \u7528\u6237\u5b89\u88c5 ",(0,n.jsx)(s.code,{children:"sqlalchemy-starrocks"}),"\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5b89\u88c5\u901a\u8fc7",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/tree/main/contrib/starrocks-python-client/starrocks",children:"\u6e90\u7801"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pip install .\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5378\u8f7d"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pip uninstall sqlalchemy-starrocks\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,n.jsx)(s.p,{children:"\u901a\u8fc7 SQLAlchemy \u8fde\u63a5 StarRocks\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u8ff0\u94fe\u63a5\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"starrocks://<username>:<password>@<host>:<port>/<database>[?charset=utf8]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.h3,{id:"sqlalchemy-\u793a\u4f8b",children:"Sqlalchemy \u793a\u4f8b"}),"\n",(0,n.jsx)(s.p,{children:"\u5efa\u8bae\u4f7f\u7528 python 3.x \u8fde\u63a5 StarRocks \u6570\u636e\u5e93\uff0c\u6bd4\u5982\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'from sqlalchemy import create_engine\nimport pandas as pd\nconn = create_engine(\'starrocks://root:@x.x.x.x:9030/superset_db?charset=utf8\')\nsql = """select * from xxx"""\ndf = pd.read_sql(sql, conn)\n'})}),"\n",(0,n.jsx)(s.h3,{id:"superset-\u793a\u4f8b",children:"Superset \u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u4f7f\u7528 Superset \u65f6\uff0c\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"Other"})," \u6570\u636e\u5e93\u8fde\u63a5\uff0c\u5e76\u4e14\u8bbe\u7f6e url \u4e3a\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"starrocks://root:@x.x.x.x:9030/superset_db?charset=utf8\n"})})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>a,ah:()=>c});var n=r(67294);const t=n.createContext({});function c(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||l:c(e),n.createElement(t.Provider,{value:a},s)}}}]);