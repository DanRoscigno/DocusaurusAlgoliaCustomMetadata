"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67569],{82244:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=t(85893),r=t(11151);const a={},l="Superset Support",c={id:"integrations/superset_support",title:"Superset Support",description:"Apache Superset is a modern data exploration and visualization platform. It uses SQLAlchemy to query data.",source:"@site/versioned_docs/version-3.1/integrations/superset_support.md",sourceDirName:"integrations",slug:"/integrations/superset_support",permalink:"/doc/en/integrations/superset_support",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/integrations/superset_support.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Integrate Jupyter with StarRocks",permalink:"/doc/en/integrations/other_integrations/jupysql"},next:{title:"Architecture",permalink:"/doc/en/introduction/Architecture"}},i={},o=[{value:"Environment",id:"environment",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:2},{value:"Sqlalchemy Example",id:"sqlalchemy-example",level:3},{value:"Superset Example",id:"superset-example",level:3}];function d(e){const s=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"superset-support",children:"Superset Support"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://superset.apache.org",children:"Apache Superset"})," is a modern data exploration and visualization platform. It uses ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/tree/main/contrib/starrocks-python-client/starrocks",children:"SQLAlchemy"})," to query data."]}),"\n",(0,n.jsxs)(s.p,{children:["Although ",(0,n.jsx)(s.a,{href:"https://superset.apache.org/docs/databases/mysql",children:"Mysql Dialect"})," can be used, it does not support ",(0,n.jsx)(s.code,{children:"largeint"}),". So we developed ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/blob/main/contrib/sqlalchemy-connector",children:"StarRocks Dialect"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"environment",children:"Environment"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Python 3.x"}),"\n",(0,n.jsx)(s.li,{children:"mysqlclient (pip install mysqlclient)"}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://superset.apache.org",children:"Apache Superset"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Notice: If ",(0,n.jsx)(s.code,{children:"mysqlclient"})," is not installed, an exception will be thrown:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-plain",metastring:"text",children:"No module named 'MySQLdb'\n"})}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.p,{children:["Since ",(0,n.jsx)(s.code,{children:"dialect"})," does not contribute to ",(0,n.jsx)(s.code,{children:"SQLAlchemy"}),", it needs to be installed from the source code."]}),"\n",(0,n.jsxs)(s.p,{children:["If you install ",(0,n.jsx)(s.code,{children:"superset"})," with Docker, install ",(0,n.jsx)(s.code,{children:"sqlalchemy-starrocks"})," with ",(0,n.jsx)(s.code,{children:"root"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Install from ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/tree/main/contrib/starrocks-python-client/starrocks",children:"Source Code"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pip install .\n"})}),"\n",(0,n.jsx)(s.p,{children:"Uninstall"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pip uninstall sqlalchemy-starrocks\n"})}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.p,{children:"To connect to StarRocks with SQLAlchemy, the following URL pattern can be used:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"starrocks://<username>:<password>@<host>:<port>/<database>[?charset=utf8]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,n.jsx)(s.h3,{id:"sqlalchemy-example",children:"Sqlalchemy Example"}),"\n",(0,n.jsx)(s.p,{children:"It is recommended to use python 3.x to connect to the StarRocks database, eg:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'from sqlalchemy import create_engine\nimport pandas as pd\nconn = create_engine(\'starrocks://root:@x.x.x.x:9030/superset_db?charset=utf8\')\nsql = """select * from xxx"""\ndf = pd.read_sql(sql, conn)\n'})}),"\n",(0,n.jsx)(s.h3,{id:"superset-example",children:"Superset Example"}),"\n",(0,n.jsxs)(s.p,{children:["In superset, use ",(0,n.jsx)(s.code,{children:"Other"})," database, and set url as:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"starrocks://root:@x.x.x.x:9030/superset_db?charset=utf8\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:a(e),n.createElement(r.Provider,{value:c},s)}}}]);