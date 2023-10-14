"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32012],{41810:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var o=r(85893),s=r(11151);const i={},d="Downgrade StarRocks",t={id:"deployment/downgrade",title:"Downgrade StarRocks",description:"This topic describes how to downgrade your StarRocks cluster.",source:"@site/versioned_docs/version-3.1/deployment/downgrade.md",sourceDirName:"deployment",slug:"/deployment/downgrade",permalink:"/doc/en/deployment/downgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/deployment/downgrade.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Deployment prerequisites",permalink:"/doc/en/deployment/deployment_prerequisites"},next:{title:"Check environment configurations",permalink:"/doc/en/deployment/environment_configurations"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Downgrade paths",id:"downgrade-paths",level:3},{value:"Downgrade procedure",id:"downgrade-procedure",level:3},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Perform compatibility configuration",id:"perform-compatibility-configuration",level:3},{value:"Downgrade FE",id:"downgrade-fe",level:2},{value:"Downgrade BE",id:"downgrade-be",level:2},{value:"Downgrade CN",id:"downgrade-cn",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a",pre:"pre",code:"code",ol:"ol",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"downgrade-starrocks",children:"Downgrade StarRocks"}),"\n",(0,o.jsx)(n.p,{children:"This topic describes how to downgrade your StarRocks cluster."}),"\n",(0,o.jsx)(n.p,{children:"If an exception occurs after you upgrade a StarRocks cluster, you can downgrade it to the earlier version to quickly recover the cluster."}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Review the information in this section before downgrading. Perform any recommended actions."}),"\n",(0,o.jsx)(n.h3,{id:"downgrade-paths",children:"Downgrade paths"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For patch version downgrade"})}),"\n",(0,o.jsx)(n.p,{children:"You can downgrade your StarRocks cluster across patch versions, for example, from v2.2.11 directly to v2.2.6."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For minor version downgrade"})}),"\n",(0,o.jsxs)(n.p,{children:["For compatibility and safety reasons, we strongly recommend you downgrade your StarRocks cluster ",(0,o.jsx)(n.strong,{children:"consecutively from one minor version to another"}),". For example, to downgrade a StarRocks v2.5 cluster to v2.2, you need to downgrade it in the following order: v2.5.x --\x3e v2.4.x --\x3e v2.3.x --\x3e v2.2.x."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For major version downgrade"})}),"\n",(0,o.jsx)(n.p,{children:"You can only downgrade your StarRocks v3.0 cluster to v2.5.3 and later versions."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"StarRocks upgrades the BDB library in v3.0. However, BDBJE cannot be rolled back. You must use BDB library of v3.0 after a downgrade."}),"\n",(0,o.jsx)(n.li,{children:"The new RBAC privilege system is used by default after you upgrade to v3.0. You can only use the RBAC privilege system after a downgrade."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"downgrade-procedure",children:"Downgrade procedure"}),"\n",(0,o.jsxs)(n.p,{children:["StarRocks' downgrade procedure is the reverse order of the ",(0,o.jsx)(n.a,{href:"/doc/en/deployment/upgrade#upgrade-procedure",children:"upgrade procedure"}),". Therefore, you need to ",(0,o.jsx)(n.strong,{children:"downgrade"})," ",(0,o.jsx)(n.strong,{children:"FEs"})," ",(0,o.jsx)(n.strong,{children:"first and then BEs and CNs"}),". Downgrading them in the wrong order may lead to incompatibility between FEs and BEs/CNs, and thereby cause the service to crash. For FE nodes, you must first downgrade all Follower FE nodes before downgrading the Leader FE node."]}),"\n",(0,o.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,o.jsx)(n.p,{children:"During preparation, you must perform the compatibility configuration if you are up for a minor or major version downgrade. You also need to perform the downgrade availability test on one of the FEs or BEs before downgrading all nodes in the cluster."}),"\n",(0,o.jsx)(n.h3,{id:"perform-compatibility-configuration",children:"Perform compatibility configuration"}),"\n",(0,o.jsx)(n.p,{children:"If you want to downgrade your StarRocks cluster to an earlier minor or major version, you must perform the compatibility configuration. In addition to the universal compatibility configuration, detailed configurations vary depending on the version of the StarRocks cluster you downgrade from."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Universal compatibility configuration"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Before downgrading your StarRocks cluster, you must disable tablet clone."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("disable_balance"="true");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="true");\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After the downgrade, you can enable tablet clone again if the status of all BE nodes becomes ",(0,o.jsx)(n.code,{children:"Alive"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "2000");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "100");\nADMIN SET FRONTEND CONFIG ("disable_balance"="false");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="false");\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"If you downgrade from v2.2 and later versions"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Set the FE configuration item ",(0,o.jsx)(n.code,{children:"ignore_unknown_log_id"})," to ",(0,o.jsx)(n.code,{children:"true"}),". Because it is a static parameter, you must modify it in the FE configuration file ",(0,o.jsx)(n.strong,{children:"fe.conf"})," and restart the node to allow the modification to take effect. After the downgrade and the first checkpoint are completed, you can reset it to ",(0,o.jsx)(n.code,{children:"false"})," and restart the node."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"If you have enabled FQDN access"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you have enabled FQDN access (supported from v2.4 onwards) and need to downgrade to versions earlier than v2.4, you must switch to IP address access before downgrading. See ",(0,o.jsx)(n.a,{href:"/doc/en/administration/enable_fqdn#rollback",children:"Rollback FQDN"})," for detailed instructions."]}),"\n",(0,o.jsx)(n.h2,{id:"downgrade-fe",children:"Downgrade FE"}),"\n",(0,o.jsx)(n.p,{children:"After the compatibility configuration and the availability test, you can downgrade the FE nodes. You must first downgrade the Follower FE nodes and then the Leader FE node."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Navigate to the working directory of the FE node and stop the node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"# Replace <fe_dir> with the deployment directory of the FE node.\ncd <fe_dir>/fe\n./bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Replace the original deployment files under ",(0,o.jsx)(n.strong,{children:"bin"}),", ",(0,o.jsx)(n.strong,{children:"lib"}),", and ",(0,o.jsx)(n.strong,{children:"spark-dpp"})," with the ones of the earlier version."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\nmv spark-dpp spark-dpp.bak\ncp -r /tmp/StarRocks-x.x.x/fe/lib  .   \ncp -r /tmp/StarRocks-x.x.x/fe/bin  .\ncp -r /tmp/StarRocks-x.x.x/fe/spark-dpp  .\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,o.jsx)(n.p,{children:"If you are downgrading StarRocks v3.0 to v2.5, you must follow these steps after you replace the deployment files:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Copy the file ",(0,o.jsx)(n.strong,{children:"fe/lib/starrocks-bdb-je-18.3.13.jar"})," of the v3.0 deployment to the directory ",(0,o.jsx)(n.strong,{children:"fe/lib"})," of the v2.5 deployment."]}),"\n",(0,o.jsxs)(n.li,{children:["Delete the file ",(0,o.jsx)(n.strong,{children:"fe/lib/je-7.*.jar"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start the FE node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"sh bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the FE node is started successfully."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"ps aux | grep StarRocksFE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Repeat the above procedures to downgrade other Follower FE nodes, and finally the Leader FE node."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,o.jsx)(n.p,{children:"If you are downgrading StarRocks v3.0 to v2.5, you must follow these steps after the downgrade:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.a,{href:"/doc/en/sql-reference/sql-statements/Administration/ALTER_SYSTEM",children:"ALTER SYSTEM CREATE IMAGE"})," to create a new image."]}),"\n",(0,o.jsx)(n.li,{children:"Wait for the new image to be synchronized to all Follower FEs."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you do not run this command, some of the downgrade operations may fail. ALTER SYSTEM CREATE IMAGE is supported from v2.5.3 and later."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"downgrade-be",children:"Downgrade BE"}),"\n",(0,o.jsx)(n.p,{children:"Having downgraded the FE nodes, you can then downgrade the BE nodes in the cluster."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Navigate to the working directory of the BE node and stop the node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"# Replace <be_dir> with the deployment directory of the BE node.\ncd <be_dir>/be\n./bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Replace the original deployment files under ",(0,o.jsx)(n.strong,{children:"bin"})," and ",(0,o.jsx)(n.strong,{children:"lib"})," with the ones of the earlier version."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start the BE node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"sh bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the BE node is started successfully."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Repeat the above procedures to downgrade other BE nodes."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"downgrade-cn",children:"Downgrade CN"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Navigate to the working directory of the CN node and stop the node gracefully."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"# Replace <cn_dir> with the deployment directory of the CN node.\ncd <cn_dir>/be\n./bin/stop_cn.sh --graceful\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Replace the original deployment files under ",(0,o.jsx)(n.strong,{children:"bin"})," and ",(0,o.jsx)(n.strong,{children:"lib"})," with the ones of the earlier version."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start the CN node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"sh bin/start_cn.sh --daemon\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the CN node is started successfully."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"ps aux | grep  starrocks_be\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Repeat the above procedures to downgrade other CN nodes."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>t,ah:()=>i});var o=r(67294);const s=o.createContext({});function i(e){const n=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function t({components:e,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof e?e({}):e||d:i(e),o.createElement(s.Provider,{value:t},n)}}}]);