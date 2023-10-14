"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98995],{42276:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(85893),r=t(11151);const a={},i="Apache Superset",o={id:"integrations/BI_integrations/Superset",title:"Apache Superset",description:"Apache Superset supports querying and visualizing both internal data and external data in StarRocks.",source:"@site/versioned_docs/version-3.1/integrations/BI_integrations/Superset.md",sourceDirName:"integrations/BI_integrations",slug:"/integrations/BI_integrations/Superset",permalink:"/doc/en/integrations/BI_integrations/Superset",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/integrations/BI_integrations/Superset.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"QuickBI",permalink:"/doc/en/integrations/BI_integrations/QuickBI"},next:{title:"Tableau Desktop",permalink:"/doc/en/integrations/BI_integrations/Tableau_Desktop"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",a:"a",img:"img",ul:"ul",strong:"strong"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"apache-superset",children:"Apache Superset"}),"\n",(0,n.jsx)(s.p,{children:"Apache Superset supports querying and visualizing both internal data and external data in StarRocks."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.p,{children:"Make sure that you have finished the following installations:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Install the Python client for StarRocks on your Apache Superset server."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"pip install starrocks\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Install the latest version of Apache Superset. For more information, see ",(0,n.jsx)(s.a,{href:"https://superset.apache.org/docs/installation/installing-superset-from-scratch/",children:"Installing Superset from Scratch"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"integration",children:"Integration"}),"\n",(0,n.jsx)(s.p,{children:"Create a database in Apache Superset:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Apache Superset - 1",src:t(80071).Z+"",width:"501",height:"844"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Apache Superset - 2",src:t(65385).Z+"",width:"507",height:"845"})}),"\n",(0,n.jsx)(s.p,{children:"Take note of the following points:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["For ",(0,n.jsx)(s.strong,{children:"SUPPORTED DATABASES"}),", select ",(0,n.jsx)(s.strong,{children:"StarRocks"}),", which will be used as the data source."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["For ",(0,n.jsx)(s.strong,{children:"SQLALCHEMY"})," ",(0,n.jsx)(s.strong,{children:"URI"}),", enter a URI in the StarRocks SQLAlchemy URI format as below:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"starrocks://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>\n"})}),"\n",(0,n.jsx)(s.p,{children:"The parameters in the URI are described as follows:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"User"}),": the username that is used to log in to your StarRocks cluster, for example, ",(0,n.jsx)(s.code,{children:"admin"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Password"}),": the password that is used to log in to your StarRocks cluster."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Host"}),": the FE host IP address of your StarRocks cluster."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Port"}),": the FE query port of your StarRocks cluster, for example, ",(0,n.jsx)(s.code,{children:"9030"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Catalog"}),": the target catalog in your StarRocks cluster. Both internal and external catalogs are supported."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Database"}),": the target database in your StarRocks cluster. Both internal and external databases are supported."]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},80071:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/BI_superset_1-eff12bff07257eed12c79806812c0da6.png"},65385:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/BI_superset_2-0f8ec523d0d808a9e157ab1a0e91c69a.png"},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:o},s)}}}]);