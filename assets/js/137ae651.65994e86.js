"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79799],{80515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(85893),s=r(11151);const n={},i="Deployment",a={id:"faq/Deploy_faq",title:"Deployment",description:"This topic provides answers to some frequently asked questions about deployment.",source:"@site/versioned_docs/version-3.1/faq/Deploy_faq.md",sourceDirName:"faq",slug:"/faq/Deploy_faq",permalink:"/doc/en/faq/Deploy_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/Deploy_faq.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Spark connector",permalink:"/doc/en/ecosystem_release/spark_connector"},next:{title:"query_dump interface",permalink:"/doc/en/faq/Dump_query"}},d={},c=[{value:"How do I bind a fixed IP address with the <code>priority_networks</code> parameter in the <code>fe.conf</code> file?",id:"how-do-i-bind-a-fixed-ip-address-with-the-priority_networks-parameter-in-the-feconf-file",level:2},{value:"Problem description",id:"problem-description",level:3},{value:"Solution",id:"solution",level:3},{value:"Why does the error &quot;StarRocks BE http service did not start correctly, exiting&quot; occur when I start a backend (BE) after installation?",id:"why-does-the-error-starrocks-be-http-service-did-not-start-correctly-exiting-occur-when-i-start-a-backend-be-after-installation",level:2},{value:"What do I do when the error occurs: ERROR 1064 (HY000): Could not initialize class com.starrocks.rpc.BackendServiceProxy?",id:"what-do-i-do-when-the-error-occurs-error-1064-hy000-could-not-initialize-class-comstarrocksrpcbackendserviceproxy",level:2},{value:"Why does the error &quot;Failed to Distribute files to node&quot; occur when I deploy StarRocks of Enterprise Edition and configure nodes?",id:"why-does-the-error-failed-to-distribute-files-to-node-occur-when-i-deploy-starrocks-of-enterprise-edition-and-configure-nodes",level:2},{value:"Can FE and BE configurations of StarRocks be modified and then take effect without restarting the cluster?",id:"can-fe-and-be-configurations-of-starrocks-be-modified-and-then-take-effect-without-restarting-the-cluster",level:2},{value:"What do I do if the error &quot;Failed to get scan range, no queryable replica found in tablet&quot; occurs after I extend the BE disk space?",id:"what-do-i-do-if-the-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-occurs-after-i-extend-the-be-disk-space",level:2},{value:"Problem description",id:"problem-description-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Why does the error &quot;Fe type ,is ready .&quot; occur when I start an FE during the cluster restart?",id:"why-does-the-error-fe-type-is-ready--occur-when-i-start-an-fe-during-the-cluster-restart",level:2},{value:"Why does the error &quot;failed to get service info err.&quot; occur when I deploy the cluster?",id:"why-does-the-error-failed-to-get-service-info-err-occur-when-i-deploy-the-cluster",level:2},{value:"Why does the error &quot;Fail to get master client from <code>cache. ``host= port=0 code=THRIFT_RPC_ERROR</code>&quot; occur when I start a BE?",id:"why-does-the-error-fail-to-get-master-client-from-cache-host-port0-codethrift_rpc_error-occur-when-i-start-a-be",level:2},{value:"Why does the error &quot;Failed to transport upgrade files to agent host. src:\u2026&quot; occur when I upgrade a cluster of the Enterprise Edition?",id:"why-does-the-error-failed-to-transport-upgrade-files-to-agent-host-src-occur-when-i-upgrade-a-cluster-of-the-enterprise-edition",level:2},{value:"Why does the FE node log on the diagnostics page of StarRocks Manager display &quot;Search log failed.&quot; for a newly deployed FE node that is running properly?",id:"why-does-the-fe-node-log-on-the-diagnostics-page-of-starrocks-manager-display-search-log-failed-for-a-newly-deployed-fe-node-that-is-running-properly",level:2},{value:"Why does the error &quot;exceeds max permissable delta:5000ms.&quot; occur when I start an FE?",id:"why-does-the-error-exceeds-max-permissable-delta5000ms-occur-when-i-start-an-fe",level:2},{value:"How do I set the <code>storage_root_path</code> parameter if there are multiple disks in a BE for data storage?",id:"how-do-i-set-the-storage_root_path-parameter-if-there-are-multiple-disks-in-a-be-for-data-storage",level:2},{value:"Why does the error &quot;invalid cluster id: 209721925.&quot; occur after an FE is added to my cluster?",id:"why-does-the-error-invalid-cluster-id-209721925-occur-after-an-fe-is-added-to-my-cluster",level:2},{value:"Why Alive is <code>false</code> when an FE is running and prints log <code>transfer: follower</code>?",id:"why-alive-is-false-when-an-fe-is-running-and-prints-log-transfer-follower",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote",div:"div",a:"a"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsx)(t.p,{children:"This topic provides answers to some frequently asked questions about deployment."}),"\n",(0,o.jsxs)(t.h2,{id:"how-do-i-bind-a-fixed-ip-address-with-the-priority_networks-parameter-in-the-feconf-file",children:["How do I bind a fixed IP address with the ",(0,o.jsx)(t.code,{children:"priority_networks"})," parameter in the ",(0,o.jsx)(t.code,{children:"fe.conf"})," file?"]}),"\n",(0,o.jsx)(t.h3,{id:"problem-description",children:"Problem description"}),"\n",(0,o.jsx)(t.p,{children:"For example, if you have two IP addresses: 192.168.108.23 and 192.168.108.43. You might provide IP addresses as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If you specify the addresses as 192.168.108.23/24, StarRocks will recognize them as 192.168.108.43."}),"\n",(0,o.jsx)(t.li,{children:"If you specify the addresses as 192.168.108.23/32, StarRocks will recognize them as 127.0.0.1."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(t.p,{children:"There are the following two ways to solve this problem:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Do not add "32" at the end of an IP address or change "32" to "28".'}),"\n",(0,o.jsx)(t.li,{children:"You can also upgrade to StarRocks 2.1 or later."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-error-starrocks-be-http-service-did-not-start-correctly-exiting-occur-when-i-start-a-backend-be-after-installation",children:'Why does the error "StarRocks BE http service did not start correctly, exiting" occur when I start a backend (BE) after installation?'}),"\n",(0,o.jsx)(t.p,{children:"When installing a BE, the system reports a startup error: StarRocks Be http service did not start correctly, exiting."}),"\n",(0,o.jsxs)(t.p,{children:["This error occurs because the web services port of the BE is occupied. Try to modify the ports in the ",(0,o.jsx)(t.code,{children:"be.conf"})," file and restart the BE."]}),"\n",(0,o.jsx)(t.h2,{id:"what-do-i-do-when-the-error-occurs-error-1064-hy000-could-not-initialize-class-comstarrocksrpcbackendserviceproxy",children:"What do I do when the error occurs: ERROR 1064 (HY000): Could not initialize class com.starrocks.rpc.BackendServiceProxy?"}),"\n",(0,o.jsx)(t.p,{children:"This error occurs when you run programs in Java Runtime Environment (JRE). To solve this problem, replace JRE with Java Development Kit (JDK). We recommend that you use Oracle's JDK 1.8 or later."}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-error-failed-to-distribute-files-to-node-occur-when-i-deploy-starrocks-of-enterprise-edition-and-configure-nodes",children:'Why does the error "Failed to Distribute files to node" occur when I deploy StarRocks of Enterprise Edition and configure nodes?'}),"\n",(0,o.jsx)(t.p,{children:"This error occurs when Setuptools versions installed on multiple frontends (FEs) are inconsistent. To solve this problem, you can execute the following command as a root user."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:"yum remove python-setuptools\n\nrm /usr/lib/python2.7/site-packages/setuptool* -rf\n\nwget https://bootstrap.pypa.io/ez_setup.py -O - | python\n"})}),"\n",(0,o.jsx)(t.h2,{id:"can-fe-and-be-configurations-of-starrocks-be-modified-and-then-take-effect-without-restarting-the-cluster",children:"Can FE and BE configurations of StarRocks be modified and then take effect without restarting the cluster?"}),"\n",(0,o.jsx)(t.p,{children:"Yes. Perform the following steps to complete the modifications for an FE and a BE:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["FE: You can complete the modification for an FE in one of the following ways:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"SQL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:'ADMIN SET FRONTEND CONFIG ("key" = "value");\n'})}),"\n",(0,o.jsx)(t.p,{children:"Example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:'ADMIN SET FRONTEND CONFIG ("enable_statistic_collect" = "false");\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Shell"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:"curl --location-trusted -u username:password \\\nhttp://<ip>:<fe_http_port/api/_set_config?key=value>\n"})}),"\n",(0,o.jsx)(t.p,{children:"Example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:"curl --location-trusted -u <username>:<password> \\\nhttp://192.168.110.101:8030/api/_set_config?enable_statistic_collect=true\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"BE: You can complete the modification for a BE in the following way:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:"curl -XPOST -u username:password \\\nhttp://<ip>:<be_http_port>/api/update_config?key=value\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note: Make sure that the user has permission to log in remotely. If not, you can grant the permission to the user in the following way:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:"CREATE USER 'test'@'%' IDENTIFIED BY '123456';\n\nGRANT SELECT_PRIV ON . TO 'test'@'%';\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"what-do-i-do-if-the-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-occurs-after-i-extend-the-be-disk-space",children:['What do I do if the error "Failed to get scan range, no queryable replica found in tablet',(0,o.jsx)(t.div,{}),'" occurs after I extend the BE disk space?']}),"\n",(0,o.jsx)(t.h3,{id:"problem-description-1",children:"Problem description"}),"\n",(0,o.jsx)(t.p,{children:"This error may occur during data loading into Primary Key tables. During data loading, the destination BE does not have enough disk space for the loaded data and the BE crashes. New disks are then added to extend the disk space. However, Primary Key tables do not support disk space re-balancing and the data cannot be offloaded to other disks."}),"\n",(0,o.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(t.p,{children:"Patches to this bug (Primary Key tables do not support BE disk space re-balancing) is still under active development. Currently, you can fix it in either of the following two ways:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Manually distribute data among disks. For example, copy the directory from the disk with a high space usage to a disk with a larger space."}),"\n",(0,o.jsxs)(t.li,{children:["If the data on these disks is not important, we recommend you delete the disks and modify the disk path. If this error persists, use ",(0,o.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",children:"TRUNCATE TABLE"})," to clear data in the table to free up some space."]}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"why-does-the-error-fe-type-is-ready--occur-when-i-start-an-fe-during-the-cluster-restart",children:['Why does the error "Fe type',(0,o.jsx)(t.div,{})," ,is ready ",(0,o.jsx)(t.div,{}),'." occur when I start an FE during the cluster restart?']}),"\n",(0,o.jsx)(t.p,{children:"Check if the leader FE is running. If not, restart the FE nodes in your cluster one by one."}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-error-failed-to-get-service-info-err-occur-when-i-deploy-the-cluster",children:'Why does the error "failed to get service info err." occur when I deploy the cluster?'}),"\n",(0,o.jsxs)(t.p,{children:["Check if OpenSSH Daemon (sshd) is enabled. If not, run the ",(0,o.jsx)(t.code,{children:"/etc/init.d/sshd`` status"})," command to enable it."]}),"\n",(0,o.jsxs)(t.h2,{id:"why-does-the-error-fail-to-get-master-client-from-cache-host-port0-codethrift_rpc_error-occur-when-i-start-a-be",children:['Why does the error "Fail to get master client from ',(0,o.jsx)(t.code,{children:"cache. ``host= port=0 code=THRIFT_RPC_ERROR"}),'" occur when I start a BE?']}),"\n",(0,o.jsxs)(t.p,{children:["Run the ",(0,o.jsx)(t.code,{children:"netstat -anp |grep port"})," command to check whether the ports in the ",(0,o.jsx)(t.code,{children:"be.conf"})," file are occupied. If so, replace the occupied port with a free port and then restart the BE."]}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-error-failed-to-transport-upgrade-files-to-agent-host-src-occur-when-i-upgrade-a-cluster-of-the-enterprise-edition",children:'Why does the error "Failed to transport upgrade files to agent host. src:\u2026" occur when I upgrade a cluster of the Enterprise Edition?'}),"\n",(0,o.jsx)(t.p,{children:"This error occurs when the disk space specified in the deployment directory is insufficient. During the cluster upgrade, the StarRocks Manager distributes the binary file of the new version to each node. If the disk space specified in the deployment directory is insufficient, the file cannot be distributed to each node. To solve this problem, add data disks."}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-fe-node-log-on-the-diagnostics-page-of-starrocks-manager-display-search-log-failed-for-a-newly-deployed-fe-node-that-is-running-properly",children:'Why does the FE node log on the diagnostics page of StarRocks Manager display "Search log failed." for a newly deployed FE node that is running properly?'}),"\n",(0,o.jsx)(t.p,{children:"By default, StarRocks Manager obtains the path configuration of the newly deployed FE within 30 seconds. This error occurs when the FE starts slowly or does not respond within 30 seconds due to other reasons. Check the log of Manager Web via the path:"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"/starrocks-manager-xxx/center/log/webcenter/log/web/``drms.INFO"}),'(you can customize the path). Then find that whether the message "Failed to update FE configurations" display in the log. If so, restart the corresponding FE to obtain the new path configuration.']}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-error-exceeds-max-permissable-delta5000ms-occur-when-i-start-an-fe",children:'Why does the error "exceeds max permissable delta:5000ms." occur when I start an FE?'}),"\n",(0,o.jsx)(t.p,{children:"This error occurs when the time difference between two machines is more than 5s. To solve this problem, align the time of these two machines."}),"\n",(0,o.jsxs)(t.h2,{id:"how-do-i-set-the-storage_root_path-parameter-if-there-are-multiple-disks-in-a-be-for-data-storage",children:["How do I set the ",(0,o.jsx)(t.code,{children:"storage_root_path"})," parameter if there are multiple disks in a BE for data storage?"]}),"\n",(0,o.jsxs)(t.p,{children:["Configure the ",(0,o.jsx)(t.code,{children:"storage_root_path"})," parameter in the ",(0,o.jsx)(t.code,{children:"be.conf"})," file and separate values of this parameter with ",(0,o.jsx)(t.code,{children:";"}),". For example: ",(0,o.jsx)(t.code,{children:"storage_root_path=/the/path/to/storage1;/the/path/to/storage2;/the/path/to/storage3;"})]}),"\n",(0,o.jsx)(t.h2,{id:"why-does-the-error-invalid-cluster-id-209721925-occur-after-an-fe-is-added-to-my-cluster",children:'Why does the error "invalid cluster id: 209721925." occur after an FE is added to my cluster?'}),"\n",(0,o.jsxs)(t.p,{children:["If you do not add the ",(0,o.jsx)(t.code,{children:"--helper"})," option for this FE when starting your cluster for the first time, the metadata between two machines is inconsistent, thus this error occurs. To solve this problem, you need to   clear all metadata under the meta directory and then add an FE with the ",(0,o.jsx)(t.code,{children:"--helper"})," option."]}),"\n",(0,o.jsxs)(t.h2,{id:"why-alive-is-false-when-an-fe-is-running-and-prints-log-transfer-follower",children:["Why Alive is ",(0,o.jsx)(t.code,{children:"false"})," when an FE is running and prints log ",(0,o.jsx)(t.code,{children:"transfer: follower"}),"?"]}),"\n",(0,o.jsx)(t.p,{children:"This issue occurs when more than half of memory of Java Virtual Machine (JVM) is used and no checkpoint is marked. In general, a checkpoint will be marked after the system accumulates 50,000 pieces of log. We recommend that you modify the JVM's parameters of each FE and restarting these FEs when they are not heavily loaded."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},11151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>n});var o=r(67294);const s=o.createContext({});function n(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:n(e),o.createElement(s.Provider,{value:a},t)}}}]);