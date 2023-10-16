"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62446],{33385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(85893),r=t(11151);const o={displayed_sidebar:"English"},i="Deploy StarRocks manually",a={id:"deployment/deploy_manually",title:"Deploy StarRocks manually",description:"This topic describes how to manually deploy shared-nothing StarRocks (in which the BE is responsible for both storage and computing). For other modes of installation, see Deployment Overview.",source:"@site/versioned_docs/version-3.1/deployment/deploy_manually.md",sourceDirName:"deployment",slug:"/deployment/deploy_manually",permalink:"/doc/docs/deployment/deploy_manually",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/deployment/deploy_manually.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Shared-nothing deployment",permalink:"/doc/docs/category/shared-nothing-deployment"},next:{title:"Deploy StarRocks with Operator",permalink:"/doc/docs/deployment/sr_operator"}},d={},l=[{value:"Step 1: Start the Leader FE node",id:"step-1-start-the-leader-fe-node",level:2},{value:"Step 2: Start the BE service",id:"step-2-start-the-be-service",level:2},{value:"Step 3: (Optional) Start the CN service",id:"step-3-optional-start-the-cn-service",level:2},{value:"Step 4: Set up the cluster",id:"step-4-set-up-the-cluster",level:2},{value:"Step 5: (Optional) Deploy a high-availability FE cluster",id:"step-5-optional-deploy-a-high-availability-fe-cluster",level:2},{value:"Stop the StarRocks cluster",id:"stop-the-starrocks-cluster",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",strong:"strong",blockquote:"blockquote",ul:"ul"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-starrocks-manually",children:"Deploy StarRocks manually"}),"\n",(0,s.jsxs)(n.p,{children:["This topic describes how to manually deploy shared-nothing StarRocks (in which the BE is responsible for both storage and computing). For other modes of installation, see ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/deployment_overview",children:"Deployment Overview"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To deploy a shared-data StarRocks cluster (decoupled storage and computing), see ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/shared_data/s3",children:"Deploy and use shared-data StarRocks"})]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-start-the-leader-fe-node",children:"Step 1: Start the Leader FE node"}),"\n",(0,s.jsx)(n.p,{children:"The following procedures are performed on an FE instance."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a dedicated directory for metadata storage. We recommend storing metadata in a separate directory from the FE deployment files. Make sure that this directory exists and that you have write access to it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <meta_dir> with the metadata directory you want to create.\nmkdir -p <meta_dir>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the directory that stores the ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/prepare_deployment_files",children:"StarRocks FE deployment files"})," you prepared earlier, and modify the FE configuration file ",(0,s.jsx)(n.strong,{children:"fe/conf/fe.conf"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["a. Specify the metadata directory in the configuration item ",(0,s.jsx)(n.code,{children:"meta_dir"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <meta_dir> with the metadata directory you have created.\nmeta_dir = <meta_dir>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["b. If any of the FE ports mentioned in the ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/environment_configurations#fe-ports",children:"Environment Configuration Checklist"})," are occupied, you must assign valid alternatives in the FE configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"http_port = aaaa        # Default: 8030\nrpc_port = bbbb         # Default: 9020\nquery_port = cccc       # Default: 9030\nedit_log_port = dddd    # Default: 9010\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to deploy multiple FE nodes in a cluster, you must assign the same ",(0,s.jsx)(n.code,{children:"http_port"})," to each FE node."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["c. If you want to enable IP address access for your cluster, you must add the configuration item ",(0,s.jsx)(n.code,{children:"priority_networks"})," in the configuration file and assign a dedicated IP address (in the CIDR format) to the FE node. You can ignore this configuration item if you want to enable ",(0,s.jsx)(n.a,{href:"/doc/docs/administration/enable_fqdn",children:"FQDN access"})," for your cluster."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"priority_networks = x.x.x.x/x\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["You can run ",(0,s.jsx)(n.code,{children:"ifconfig"})," in your terminal to view the IP address(es) owned by the instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["d. If you have multiple JDKs installed on the instance, and you want to use a specific JDK that is different from the one specified in the environment variable ",(0,s.jsx)(n.code,{children:"JAVA_HOME"}),", you must specify the path where the chosen JDK is installed by adding the configuration item ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," in the configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <path_to_JDK> with the path where the chosen JDK is installed.\nJAVA_HOME = <path_to_JDK>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["f.  For information about advanced configuration items, see ",(0,s.jsx)(n.a,{href:"/doc/docs/administration/Configuration#fe-configuration-items",children:"Parameter Configuration - FE configuration items"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the FE node."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To enable IP address access for your cluster, run the following command to start the FE node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To enable FQDN access for your cluster, run the following command to start the FE node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./fe/bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that you only need to specify the parameter ",(0,s.jsx)(n.code,{children:"--host_type"})," ONCE when you start the node for the first time."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(n.p,{children:["Before starting the FE node with FQDN access enabled, make sure you have assigned hostnames for all instances in ",(0,s.jsx)(n.strong,{children:"/etc/hosts"}),". See ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/environment_configurations#hostnames",children:"Environment Configuration Checklist - Hostnames"})," for more information."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the FE logs to verify if the FE node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat fe/log/fe.log | grep thrift\n"})}),"\n",(0,s.jsx)(n.p,{children:'A record of log like "2022-08-10 16:12:29,911 INFO (UNKNOWN x.x.x.x_9010_1660119137253(-1)|1) [FeServer.start():52] thrift server started with port 9020." suggests that the FE node is started properly.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-start-the-be-service",children:"Step 2: Start the BE service"}),"\n",(0,s.jsx)(n.p,{children:"The following procedures are performed on the BE instances."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a dedicated directory for data storage. We recommend storing data in a separate directory from the BE deployment directory. Make sure that this directory exists and you have write access to it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <storage_root_path> with the data storage directory you want to create.\nmkdir -p <storage_root_path>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the directory that stores the ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/prepare_deployment_files",children:"StarRocks BE deployment files"})," you prepared earlier, and modify the BE configuration file ",(0,s.jsx)(n.strong,{children:"be/conf/be.conf"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["a. Specify the data directory in the configuration item ",(0,s.jsx)(n.code,{children:"storage_root_path"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <storage_root_path> with the data directory you have created.\nstorage_root_path = <storage_root_path>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["b. If any of the BE ports mentioned in the ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/environment_configurations#be-ports",children:"Environment Configuration Checklist"})," are occupied, you must assign valid alternatives in the BE configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"be_port = vvvv                   # Default: 9060\nbe_http_port = xxxx              # Default: 8040\nheartbeat_service_port = yyyy    # Default: 9050\nbrpc_port = zzzz                 # Default: 8060\n"})}),"\n",(0,s.jsxs)(n.p,{children:["c. If you want to enable IP address access for your cluster, you must add the configuration item ",(0,s.jsx)(n.code,{children:"priority_networks"})," in the configuration file and assign a dedicated IP address (in the CIDR format) to the BE node. You can ignore this configuration item if you want to enable FQDN access for your cluster."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"priority_networks = x.x.x.x/x\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["You can run ",(0,s.jsx)(n.code,{children:"ifconfig"})," in your terminal to view the IP address(es) owned by the instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["d. If you have multiple JDKs installed on the instance, and you want to use a specific JDK that is different from the one specified in the environment variable ",(0,s.jsx)(n.code,{children:"JAVA_HOME"}),", you must specify the path where the chosen JDK is installed by adding the configuration item ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," in the configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <path_to_JDK> with the path where the chosen JDK is installed.\nJAVA_HOME = <path_to_JDK>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For information about advanced configuration items, see ",(0,s.jsx)(n.a,{href:"/doc/docs/administration/Configuration#be-configuration-items",children:"Parameter Configuration - BE configuration items"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./be/bin/start_be.sh --daemon\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Before starting the BE node with FQDN access enabled, make sure you have assigned hostnames for all instances in ",(0,s.jsx)(n.strong,{children:"/etc/hosts"}),". See ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/environment_configurations#hostnames",children:"Environment Configuration Checklist - Hostnames"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:["You do not need to specify the parameter ",(0,s.jsx)(n.code,{children:"--host_type"})," when you start BE nodes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the BE logs to verify if the BE node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat be/log/be.INFO | grep heartbeat\n"})}),"\n",(0,s.jsx)(n.p,{children:'A record of log like "I0810 16:18:44.487284 3310141 task_worker_pool.cpp:1387] Waiting to receive first heartbeat from frontend" suggests that the BE node is started properly.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can start new BE nodes by repeating the above procedures on other BE instances."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"A high-availability cluster of BEs is automatically formed when at least three BE nodes are deployed and added to a StarRocks cluster."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-3-optional-start-the-cn-service",children:"Step 3: (Optional) Start the CN service"}),"\n",(0,s.jsx)(n.p,{children:"A Compute Node (CN) is a stateless computing service that does not maintain data itself. You can optionally add CN nodes to your cluster to provide extra computing resources for queries. You can deploy CN nodes with the BE deployment files. Compute Nodes are supported since v2.4."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the directory that stores the ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/prepare_deployment_files",children:"StarRocks BE deployment files"})," you prepared earlier, and modify the CN configuration file ",(0,s.jsx)(n.strong,{children:"be/conf/cn.conf"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["a. If any of the CN ports mentioned in the ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/environment_configurations",children:"Environment Configuration Checklist"})," are occupied, you must assign valid alternatives in the CN configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"be_port = vvvv                   # Default: 9060    (From v3.1 onwards, this configuration item is renamed from `thrift_port` to `be_port`.)\nbe_http_port = xxxx              # Default: 8040\nheartbeat_service_port = yyyy    # Default: 9050\nbrpc_port = zzzz                 # Default: 8060\n"})}),"\n",(0,s.jsxs)(n.p,{children:["b. If you want to enable IP address access for your cluster, you must add the configuration item ",(0,s.jsx)(n.code,{children:"priority_networks"})," in the configuration file and assign a dedicated IP address (in the CIDR format) to the CN node. You can ignore this configuration item if you want to enable FQDN access for your cluster."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"priority_networks = x.x.x.x/x\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["You can run ",(0,s.jsx)(n.code,{children:"ifconfig"})," in your terminal to view the IP address(es) owned by the instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["c. If you have multiple JDKs installed on the instance, and you want to use a specific JDK that is different from the one specified in the environment variable ",(0,s.jsx)(n.code,{children:"JAVA_HOME"}),", you must specify the path where the chosen JDK is installed by adding the configuration item ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," in the configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"# Replace <path_to_JDK> with the path where the chosen JDK is installed.\nJAVA_HOME = <path_to_JDK>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For information about advanced configuration items, see ",(0,s.jsx)(n.a,{href:"/doc/docs/administration/Configuration#be-configuration-items",children:"Parameter Configuration - BE configuration items"})," because most of CN's parameters are inherited from BE."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the CN node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./be/bin/start_cn.sh --daemon\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Before starting the CN node with FQDN access enabled, make sure you have assigned hostnames for all instances in ",(0,s.jsx)(n.strong,{children:"/etc/hosts"}),". See ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/environment_configurations#hostnames",children:"Environment Configuration Checklist - Hostnames"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:["You do not need to specify the parameter ",(0,s.jsx)(n.code,{children:"--host_type"})," when you start CN nodes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the CN logs to verify if the CN node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat be/log/cn.INFO | grep heartbeat\n"})}),"\n",(0,s.jsx)(n.p,{children:'A record of log like "I0313 15:03:45.820030 412450 thrift_server.cpp:375] heartbeat has started listening port on 9050" suggests that the CN node is started properly.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can start new CN nodes by repeating the above procedures on other instances."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-4-set-up-the-cluster",children:"Step 4: Set up the cluster"}),"\n",(0,s.jsx)(n.p,{children:"After all FE, BE nodes, and CN nodes are started properly, you can set up the StarRocks cluster."}),"\n",(0,s.jsx)(n.p,{children:"The following procedures are performed on a MySQL client. You must have MySQL client 5.5.0 or later installed."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Connect to StarRocks via your MySQL client. You need to log in with the initial account ",(0,s.jsx)(n.code,{children:"root"}),", and the password is empty by default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <fe_address> with the IP address (priority_networks) or FQDN \n# of the Leader FE node, and replace <query_port> (Default: 9030) \n# with the query_port you specified in fe.conf.\nmysql -h <fe_address> -P<query_port> -uroot\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the status of the Leader FE node by executing the following SQL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"MySQL [(none)]> SHOW PROC '/frontends'\\G\n*************************** 1. row ***************************\n             Name: x.x.x.x_9010_1686810741121\n               IP: x.x.x.x\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: LEADER\n        ClusterId: 919351034\n             Join: true\n            Alive: true\nReplayedJournalId: 1220\n    LastHeartbeat: 2023-06-15 15:39:04\n         IsHelper: true\n           ErrMsg: \n        StartTime: 2023-06-15 14:32:28\n          Version: 3.0.0-48f4d81\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the field ",(0,s.jsx)(n.code,{children:"Alive"})," is ",(0,s.jsx)(n.code,{children:"true"}),", this FE node is properly started and added to the cluster."]}),"\n",(0,s.jsxs)(n.li,{children:["If the field ",(0,s.jsx)(n.code,{children:"Role"})," is ",(0,s.jsx)(n.code,{children:"FOLLOWER"}),", this FE node is eligible to be elected as the Leader FE node."]}),"\n",(0,s.jsxs)(n.li,{children:["If the field ",(0,s.jsx)(n.code,{children:"Role"})," is ",(0,s.jsx)(n.code,{children:"LEADER"}),", this FE node is the Leader FE node."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the BE nodes to the cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'-- Replace <be_address> with the IP address (priority_networks) \n-- or FQDN of the BE nodes, and replace <heartbeat_service_port> \n-- with the heartbeat_service_port (Default: 9050) you specified in be.conf.\nALTER SYSTEM ADD BACKEND "<be_address>:<heartbeat_service_port>";\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["You can use the preceding command to add multiple BE nodes at a time. Each ",(0,s.jsx)(n.code,{children:"<be_address>:<heartbeat_service_port>"})," pair represents one BE node."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the status of the BE nodes by executing the following SQL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/backends'\\G\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'MySQL [(none)]> SHOW PROC \'/backends\'\\G\n*************************** 1. row ***************************\n            BackendId: 10007\n                   IP: 172.26.195.67\n        HeartbeatPort: 9050\n               BePort: 9060\n             HttpPort: 8040\n             BrpcPort: 8060\n        LastStartTime: 2023-06-15 15:23:08\n        LastHeartbeat: 2023-06-15 15:57:30\n                Alive: true\n SystemDecommissioned: false\nClusterDecommissioned: false\n            TabletNum: 30\n     DataUsedCapacity: 0.000 \n        AvailCapacity: 341.965 GB\n        TotalCapacity: 1.968 TB\n              UsedPct: 83.04 %\n       MaxDiskUsedPct: 83.04 %\n               ErrMsg: \n              Version: 3.0.0-48f4d81\n               Status: {"lastSuccessReportTabletsTime":"2023-06-15 15:57:08"}\n    DataTotalCapacity: 341.965 GB\n          DataUsedPct: 0.00 %\n             CpuCores: 16\n    NumRunningQueries: 0\n           MemUsedPct: 0.01 %\n           CpuUsedPct: 0.0 %\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the field ",(0,s.jsx)(n.code,{children:"Alive"})," is ",(0,s.jsx)(n.code,{children:"true"}),", this BE node is properly started and added to the cluster."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Optional) Add a CN node to the cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'-- Replace <cn_address> with the IP address (priority_networks) \n-- or FQDN of the CN node, and replace <heartbeat_service_port> \n-- with the heartbeat_service_port (Default: 9050) you specified in cn.conf.\nALTER SYSTEM ADD COMPUTE NODE "<cn_address>:<heartbeat_service_port>";\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["You can add multiple CN nodes with one SQL. Each ",(0,s.jsx)(n.code,{children:"<cn_address>:<heartbeat_service_port>"})," pair represents one CN node."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Optional) Check the status of the CN nodes by executing the following SQL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/compute_nodes'\\G\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"MySQL [(none)]> SHOW PROC '/compute_nodes'\\G\n*************************** 1. row ***************************\n        ComputeNodeId: 10003\n                   IP: x.x.x.x\n        HeartbeatPort: 9050\n               BePort: 9060\n             HttpPort: 8040\n             BrpcPort: 8060\n        LastStartTime: 2023-03-13 15:11:13\n        LastHeartbeat: 2023-03-13 15:11:13\n                Alive: true\n SystemDecommissioned: false\nClusterDecommissioned: false\n               ErrMsg: \n              Version: 2.5.2-c3772fb\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the field ",(0,s.jsx)(n.code,{children:"Alive"})," is ",(0,s.jsx)(n.code,{children:"true"}),", this CN node is properly started and added to the cluster."]}),"\n",(0,s.jsxs)(n.p,{children:["After CNs are properly started and you want to use CNs during queries, set the system variables ",(0,s.jsx)(n.code,{children:"SET prefer_compute_node = true;"})," and ",(0,s.jsx)(n.code,{children:"SET use_compute_nodes = -1;"}),". For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/reference/System_variable#descriptions-of-variables",children:"System variables"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-5-optional-deploy-a-high-availability-fe-cluster",children:"Step 5: (Optional) Deploy a high-availability FE cluster"}),"\n",(0,s.jsx)(n.p,{children:"A high-availability FE cluster requires at least THREE Follower FE nodes in the StarRocks cluster. After the Leader FE node is started successfully, you can then start two new FE nodes to deploy a high-availability FE cluster."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Connect to StarRocks via your MySQL client. You need to log in with the initial account ",(0,s.jsx)(n.code,{children:"root"}),", and the password is empty by default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <fe_address> with the IP address (priority_networks) or FQDN \n# of the Leader FE node, and replace <query_port> (Default: 9030) \n# with the query_port you specified in fe.conf.\nmysql -h <fe_address> -P<query_port> -uroot\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the new Follower FE node to the cluster by executing the following SQL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'-- Replace <fe_address> with the IP address (priority_networks) \n-- or FQDN of the new Follower FE node, and replace <edit_log_port> \n-- with the edit_log_port (Default: 9010) you specified in fe.conf.\nALTER SYSTEM ADD FOLLOWER "<fe2_address>:<edit_log_port>";\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can use the preceding command to add a single Follower FE nodes each time."}),"\n",(0,s.jsxs)(n.li,{children:["If you want to add Observer FE nodes, execute ",(0,s.jsx)(n.code,{children:'ALTER SYSTEM ADD OBSERVER "<fe_address>:<edit_log_port>"='}),". For detailed instructions, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ALTER_SYSTEM",children:"ALTER SYSTEM - FE"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Launch a terminal on the new FE instance, create a dedicated directory for metadata storage, navigate to the directory that stores the StarRocks FE deployment files, and modify the FE configuration file ",(0,s.jsx)(n.strong,{children:"fe/conf/fe.conf"}),". For more instructions, see ",(0,s.jsx)(n.a,{href:"#step-1-start-the-leader-fe-node",children:"Step 1: Start the Leader FE node"}),". Basically, you can repeat the procedures in Step 1 ",(0,s.jsx)(n.strong,{children:"except for the command used to start the FE node"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"After configuring the Follower FE node, execute the following SQL to assign a helper node for Follower FE node and start the Follower FE node."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"When adding new Follower FE node to a cluster, you must assign a helper node (essentially an existing Follower FE node) to the new Follower FE node to synchronize the metadata."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To start a new FE node with IP address access, run the following command to start the FE node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <helper_fe_ip> with the IP address (priority_networks) \n# of the Leader FE node, and replace <helper_edit_log_port> (Default: 9010) with \n# the Leader FE node's edit_log_port.\n./fe/bin/start_fe.sh --helper <helper_fe_ip>:<helper_edit_log_port> --daemon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that you only need to specify the parameter ",(0,s.jsx)(n.code,{children:"--helper"})," ONCE when you start the node for the first time."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To start a new FE node with FQDN access, run the following command to start the FE node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <helper_fqdn> with the FQDN of the Leader FE node, \n# and replace <helper_edit_log_port> (Default: 9010) with the Leader FE node's edit_log_port.\n./fe/bin/start_fe.sh --helper <helper_fqdn>:<helper_edit_log_port> \\\n      --host_type FQDN --daemon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that you only need to specify the parameters ",(0,s.jsx)(n.code,{children:"--helper"})," and ",(0,s.jsx)(n.code,{children:"--host_type"})," ONCE when you start the node for the first time."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the FE logs to verify if the FE node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat fe/log/fe.log | grep thrift\n"})}),"\n",(0,s.jsx)(n.p,{children:'A record of log like "2022-08-10 16:12:29,911 INFO (UNKNOWN x.x.x.x_9010_1660119137253(-1)|1) [FeServer.start():52] thrift server started with port 9020." suggests that the FE node is started properly.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the preceding procedure 2, 3, and 4 until you have start all the new Follower FE nodes properly, and then check the status of the FE nodes by executing the following SQL from your MySQL client:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"MySQL [(none)]> SHOW PROC '/frontends'\\G\n*************************** 1. row ***************************\n             Name: x.x.x.x_9010_1686810741121\n               IP: x.x.x.x\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: LEADER\n        ClusterId: 919351034\n             Join: true\n            Alive: true\nReplayedJournalId: 1220\n    LastHeartbeat: 2023-06-15 15:39:04\n         IsHelper: true\n           ErrMsg: \n        StartTime: 2023-06-15 14:32:28\n          Version: 3.0.0-48f4d81\n*************************** 2. row ***************************\n             Name: x.x.x.x_9010_1686814080597\n               IP: x.x.x.x\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: FOLLOWER\n        ClusterId: 919351034\n             Join: true\n            Alive: true\nReplayedJournalId: 1219\n    LastHeartbeat: 2023-06-15 15:39:04\n         IsHelper: true\n           ErrMsg: \n        StartTime: 2023-06-15 15:38:53\n          Version: 3.0.0-48f4d81\n*************************** 3. row ***************************\n             Name: x.x.x.x_9010_1686814090833\n               IP: x.x.x.x\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: FOLLOWER\n        ClusterId: 919351034\n             Join: true\n            Alive: true\nReplayedJournalId: 1219\n    LastHeartbeat: 2023-06-15 15:39:04\n         IsHelper: true\n           ErrMsg: \n        StartTime: 2023-06-15 15:37:52\n          Version: 3.0.0-48f4d81\n3 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the field ",(0,s.jsx)(n.code,{children:"Alive"})," is ",(0,s.jsx)(n.code,{children:"true"}),", this FE node is properly started and added to the cluster."]}),"\n",(0,s.jsxs)(n.li,{children:["If the field ",(0,s.jsx)(n.code,{children:"Role"})," is ",(0,s.jsx)(n.code,{children:"FOLLOWER"}),", this FE node is eligible to be elected as the Leader FE node."]}),"\n",(0,s.jsxs)(n.li,{children:["If the field ",(0,s.jsx)(n.code,{children:"Role"})," is ",(0,s.jsx)(n.code,{children:"LEADER"}),", this FE node is the Leader FE node."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"stop-the-starrocks-cluster",children:"Stop the StarRocks cluster"}),"\n",(0,s.jsx)(n.p,{children:"You can stop the StarRocks cluster by running the following commands on the corresponding instances."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop an FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./fe/bin/stop_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop a BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./be/bin/stop_be.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop a CN node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./be/bin/stop_cn.sh --daemon\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"Try the following steps to identify the errors that occur when you start the FE, BE, or CN nodes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If an FE node is not started properly, you can identify the problem by checking its log in ",(0,s.jsx)(n.strong,{children:"fe/log/fe.warn.log"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat fe/log/fe.warn.log\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Having identified and resolved the problem, you must first terminate the current FE process, delete the existing ",(0,s.jsx)(n.strong,{children:"meta"})," directory, create a new metadata storage directory, and then restart the FE node with the correct configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If a BE node is not started properly, you can identify the problem by checking its log in ",(0,s.jsx)(n.strong,{children:"be/log/be.WARNING"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat be/log/be.WARNING\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Having identified and resolved the problem, you must first terminate the existing BE process, delete the existing ",(0,s.jsx)(n.strong,{children:"storage"})," directory, create a new data storage directory, and then restart the BE node with the correct configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If a CN node is not started properly, you can identify the problem by checking its log in ",(0,s.jsx)(n.strong,{children:"be/log/cn.WARNING"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cat be/log/cn.WARNING\n"})}),"\n",(0,s.jsx)(n.p,{children:"Having identified and resolved the problem, you must first terminate the existing CN process, and then restart the CN node with the correct configuration."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,s.jsxs)(n.p,{children:["Having deployed your StarRocks cluster, you can move on to ",(0,s.jsx)(n.a,{href:"/doc/docs/deployment/post_deployment_setup",children:"Post-deployment Setup"})," for instructions on initial management measures."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var s=t(67294);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(r.Provider,{value:a},n)}}}]);