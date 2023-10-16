"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31628],{39423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const i={displayed_sidebar:"English"},o="Deploy StarRocks",a={id:"quick_start/Deploy",title:"Deploy StarRocks",description:"This QuickStart tutorial guides you through the procedures to deploy a simple StarRocks cluster. Before getting started, you can read StarRocks Architecture for more conceptual details.",source:"@site/versioned_docs/version-3.0/quick_start/Deploy.md",sourceDirName:"quick_start",slug:"/quick_start/Deploy",permalink:"/doc/docs/3.0/quick_start/Deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/quick_start/Deploy.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Create a table",permalink:"/doc/docs/3.0/quick_start/Create_table"},next:{title:"Load and query data",permalink:"/doc/docs/3.0/quick_start/Import_and_query"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Download and install StarRocks",id:"step-1-download-and-install-starrocks",level:2},{value:"Step 2: Start the FE node",id:"step-2-start-the-fe-node",level:2},{value:"Step 3: Start the BE node",id:"step-3-start-the-be-node",level:2},{value:"Step 4: Set up a StarRocks cluster",id:"step-4-set-up-a-starrocks-cluster",level:2},{value:"Stop the StarRocks cluster",id:"stop-the-starrocks-cluster",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",ol:"ol",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-starrocks",children:"Deploy StarRocks"}),"\n",(0,r.jsxs)(n.p,{children:["This QuickStart tutorial guides you through the procedures to deploy a simple StarRocks cluster. Before getting started, you can read ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/introduction/Architecture",children:"StarRocks Architecture"})," for more conceptual details."]}),"\n",(0,r.jsxs)(n.p,{children:["Following these steps, you can deploy a StarRocks instance with only one frontend (FE) node and one backend (BE) node on your local machine. This instance can help you complete the upcoming QuickStart tutorials on ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/quick_start/Create_table",children:"creating a table"})," and ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/quick_start/Import_and_query",children:"loading and querying data"}),", and thereby acquaints you with the basic operations of StarRocks."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you want to run StarRocks on Ubuntu 22.04 or with ARM-arch processors, you must download and run the specific Docker image by the tag from ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/starrocks/allin1-ubuntu/tags",children:"StarRocks' Docker Hub"}),", and copy the binaries from the Docker container (Directory: ",(0,r.jsx)(n.strong,{children:"/data/starrocks"}),") to your host machine."]}),"\n",(0,r.jsxs)(n.li,{children:["To guarantee the high availability and performance ",(0,r.jsx)(n.strong,{children:"in the production environment"}),", we recommend that you deploy at least three FE nodes and three BE nodes in your StarRocks cluster."]}),"\n",(0,r.jsx)(n.li,{children:"You can deploy an FE node and a BE node on one machine. However, deploying multiple nodes of the same kind on one machine is not allowed, because the same kinds of nodes cannot share a same IP address."}),"\n",(0,r.jsxs)(n.li,{children:["By default, FE nodes in a new cluster are started via IP address access. To start a new cluster with FQDN access, see ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/administration/enable_fqdn#set-up-a-new-cluster-with-fqdn-access",children:"Set up a new cluster with FQDN access"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before deploying StarRocks, make sure the following requirements are satisfied."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hardware"}),"\nYou can follow these steps on relatively elementary hardware, such as a machine with 4 CPU cores and 16 GB of RAM. The CPU MUST support AVX2 instruction sets."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.p,{children:["You can run ",(0,r.jsx)(n.code,{children:"cat /proc/cpuinfo | grep avx2"})," in your terminal to check if the CPU supports the AVX2 instruction sets."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Software"}),"\nYour machine MUST be running on OS with Linux kernel 3.10 or later. In addition, you must have JDK 1.8 or later and MySQL client 5.5 or later installed on your machine. Please note that JRE is not supported."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Environment variable"}),"\nStarRocks relies on system environment variable ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," to locate the Java dependency on the machine. Set this environment variable as the directory to which Java is installed, for example, ",(0,r.jsx)(n.code,{children:"/opt/jdk1.8.0_301**"}),"**."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.p,{children:["You can run ",(0,r.jsx)(n.code,{children:"echo $JAVA_HOME"})," in your terminal to check if you have specified ",(0,r.jsx)(n.code,{children:"JAVA_HOME"}),". If you have not specified it, see ",(0,r.jsx)(n.a,{href:"https://linuxize.com/post/how-to-set-and-list-environment-variables-in-linux/",children:"How to Set and List Environment Variables in Linux"})," for detailed instructions."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-1-download-and-install-starrocks",children:"Step 1: Download and install StarRocks"}),"\n",(0,r.jsxs)(n.p,{children:["After all the ",(0,r.jsx)(n.a,{href:"#prerequisites",children:"prerequisites"})," are met, you can download the StarRocks software package to install it on your machine."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Launch a terminal, navigate to a local directory to which you have both read and write access, and run the following command to create a dedicated directory for StarRocks deployment."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mkdir -p HelloStarRocks\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(n.p,{children:"You can remove the instance cleanly at any time by deleting the directory."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the StarRocks software package to this directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"cd HelloStarRocks\nwget https://releases.starrocks.io/starrocks/StarRocks-3.0.0.tar.gz\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Extract the files in the software package to install StarRocks on your machine."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"tar -xzvf StarRocks-3.0.0.tar.gz --strip-components 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The software package includes the working directories of FE (",(0,r.jsx)(n.strong,{children:"fe"}),"), BE (",(0,r.jsx)(n.strong,{children:"be"}),"), ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/deployment/deploy_broker",children:"Broker"})," (",(0,r.jsx)(n.strong,{children:"apache_hdfs_broker"}),"), User Defined Function (",(0,r.jsx)(n.strong,{children:"udf"}),"), and ",(0,r.jsx)(n.strong,{children:"LICENSE"})," and ",(0,r.jsx)(n.strong,{children:"NOTICE"})," files."]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-start-the-fe-node",children:"Step 2: Start the FE node"}),"\n",(0,r.jsx)(n.p,{children:"Having installed StarRocks, you need to start the FE node. FE is the front layer of StarRocks. It manages the system metadata, client connections, query plan, and query schedule."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a directory for FE metadata storage under the working directory of FE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mkdir -p fe/meta\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.p,{children:["It is recommended to create a separate directory for FE metadata storage ",(0,r.jsx)(n.strong,{children:"in production environment"}),", because the operation of a StarRocks cluster is largely dependent on its metadata."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the IP addresses of the machine."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"ifconfig\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If your machine has multiple IP addresses, for example, ",(0,r.jsx)(n.code,{children:"eth0"})," and ",(0,r.jsx)(n.code,{children:"eth1"}),", you must specify a dedicated IP address for FE service when configuring the property ",(0,r.jsx)(n.code,{children:"priority_networks"})," of FE node in the following sub-step."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the connection status of the following ports."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["FE HTTP server port (",(0,r.jsx)(n.code,{children:"http_port"}),", Default: ",(0,r.jsx)(n.code,{children:"8030"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["FE thrift server port (",(0,r.jsx)(n.code,{children:"rpc_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9020"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["FE MySQL server port (",(0,r.jsx)(n.code,{children:"query_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9030"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["FE internal communication port (",(0,r.jsx)(n.code,{children:"edit_log_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9010"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"netstat -tunlp | grep 8030\nnetstat -tunlp | grep 9020\nnetstat -tunlp | grep 9030\nnetstat -tunlp | grep 9010\n"})}),"\n",(0,r.jsx)(n.p,{children:"If any of the above ports are occupied, you must find an alternative and specify it when configuring the corresponding ports of the FE node in the following sub-step."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the FE configuration file ",(0,r.jsx)(n.strong,{children:"fe/conf/fe.conf"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If your machine has multiple IP addresses, you must add the configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," in the FE configuration file and assign a dedicated IP address to the FE node."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"priority_networks = x.x.x.x\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If any of the above FE ports are occupied, you must assign a valid alternative in the FE configuration file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"http_port = aaaa\nrpc_port = bbbb\nquery_port = cccc\nedit_log_port = dddd\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you want to set a different ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," for StarRocks when you have multiple Java dependencies in your machine, you must specify it in the FE configuration file."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"JAVA_HOME = /path/to/your/java\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start FE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"./fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify if the FE node is started successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"cat fe/log/fe.log | grep thrift\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A record of log like ",(0,r.jsx)(n.code,{children:"2022-08-10 16:12:29,911 INFO (UNKNOWN x.x.x.x_9010_1660119137253(-1)|1) [FeServer.start():52] thrift server started with port 9020."})," suggests that the FE node is started properly."]}),"\n",(0,r.jsx)(n.h2,{id:"step-3-start-the-be-node",children:"Step 3: Start the BE node"}),"\n",(0,r.jsx)(n.p,{children:"After FE node is started, you need to start the BE node. BE is the executing layer of StarRocks. It stores data and executes queries."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a directory for data storage under the working directory of BE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mkdir -p be/storage\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.p,{children:["It is recommended to create a separate directory for BE data storage ",(0,r.jsx)(n.strong,{children:"in production environment"})," to ensure the security of data."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the connection status of the following ports."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["BE thrift server port (",(0,r.jsx)(n.code,{children:"be_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9060"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["BE HTTP server port (",(0,r.jsx)(n.code,{children:"be_http_port"}),", Default: ",(0,r.jsx)(n.code,{children:"8040"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["heartbeat service port (",(0,r.jsx)(n.code,{children:"heartbeat_service_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9050"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["BE BRPC port (",(0,r.jsx)(n.code,{children:"brpc_port"}),", Default: ",(0,r.jsx)(n.code,{children:"8060"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"netstat -tunlp | grep 9060\nnetstat -tunlp | grep 8040\nnetstat -tunlp | grep 9050\nnetstat -tunlp | grep 8060\n"})}),"\n",(0,r.jsx)(n.p,{children:"If any of the above ports are occupied, you must find an alternative and specify it when configuring BE node in the following sub-step."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the BE configuration file ",(0,r.jsx)(n.strong,{children:"be/conf/be.conf"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If your machine has multiple IP addresses, you must add the configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," in the BE configuration file and assign a dedicated IP address to BE node."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(n.p,{children:"The BE node can have the same IP addresses as the FE node if they are installed on the same machine."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"priority_networks = x.x.x.x\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If any of the above BE ports are occupied, you must assign a valid alternative in the BE configuration file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"be_port = vvvv\nbe_http_port = xxxx\nheartbeat_service_port = yyyy\nbrpc_port = zzzz\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you want to set a different ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," for StarRocks when you have multiple Java dependencies in your machine, you must specify it in the BE configuration file."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"JAVA_HOME = /path/to/your/java\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start BE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"./be/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify if the BE node is started successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"cat be/log/be.INFO | grep heartbeat\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'A record of log like "I0810 16:18:44.487284 3310141 task_worker_pool.cpp:1387] Waiting to receive first heartbeat from frontend" suggests that the BE node is started properly.'}),"\n",(0,r.jsx)(n.h2,{id:"step-4-set-up-a-starrocks-cluster",children:"Step 4: Set up a StarRocks cluster"}),"\n",(0,r.jsx)(n.p,{children:"After the FE node and BE node are started properly, you can set up the StarRocks cluster."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to StarRocks via your MySQL client. You can log in with the default user ",(0,r.jsx)(n.code,{children:"root"}),", and the password is empty by default."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql -h <fe_ip> -P<fe_query_port> -uroot\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Change the ",(0,r.jsx)(n.code,{children:"-P"})," value accordingly if you have assigned a different FE MySQL server port (",(0,r.jsx)(n.code,{children:"query_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9030"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Change the ",(0,r.jsx)(n.code,{children:"-h"})," value accordingly if you have specified the configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," in the FE configuration file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the status of the FE node by running the following SQL in the MySQL client."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"  MySQL [(none)]> SHOW PROC '/frontends'\\G\n  *************************** 1. row ***************************\n              Name: x.x.x.x_9010_1660119137253\n                IP: x.x.x.x\n        EditLogPort: 9010\n          HttpPort: 8030\n          QueryPort: 9030\n            RpcPort: 9020\n              Role: FOLLOWER\n          IsMaster: true\n          ClusterId: 58958864\n              Join: true\n              Alive: true\n  ReplayedJournalId: 30602\n      LastHeartbeat: 2022-08-11 20:34:26\n          IsHelper: true\n            ErrMsg: \n          StartTime: 2022-08-10 16:12:29\n            Version: 2.3.0-a9bdb09\n  1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the field ",(0,r.jsx)(n.code,{children:"Alive"})," is ",(0,r.jsx)(n.code,{children:"true"}),", this FE node is properly started and added to the cluster."]}),"\n",(0,r.jsxs)(n.li,{children:["If the field ",(0,r.jsx)(n.code,{children:"Role"})," is ",(0,r.jsx)(n.code,{children:"FOLLOWER"}),", this FE node is eligible to be elected as the Leader node."]}),"\n",(0,r.jsxs)(n.li,{children:["If the field ",(0,r.jsx)(n.code,{children:"Role"})," is ",(0,r.jsx)(n.code,{children:"LEADER"}),", this FE node is the Leader node."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the BE node to the cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'ALTER SYSTEM ADD BACKEND "<be_ip>:<heartbeat_service_port>";\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If your machine has multiple IP addresses, ",(0,r.jsx)(n.code,{children:"be_ip"})," must match the ",(0,r.jsx)(n.code,{children:"priority_networks"})," you have specified in the BE configuration file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"heartbeat_service_port"})," must match the BE heartbeat service port (",(0,r.jsx)(n.code,{children:"heartbeat_service_port"}),", Default: ",(0,r.jsx)(n.code,{children:"9050"}),") you have specified in the BE configuration file"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the status of the BE node."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"SHOW PROC '/backends'\\G\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'MySQL [(none)]> SHOW PROC \'/backends\'\\G\n  *************************** 1. row ***************************\n              BackendId: 10036\n                Cluster: default_cluster\n                    IP: x.x.x.x\n          HeartbeatPort: 9050\n                BePort: 9060\n              HttpPort: 8040\n              BrpcPort: 8060\n          LastStartTime: 2022-08-10 17:39:01\n          LastHeartbeat: 2022-08-11 20:34:31\n                  Alive: true\n  SystemDecommissioned: false\n  ClusterDecommissioned: false\n              TabletNum: 0\n      DataUsedCapacity: .000 \n          AvailCapacity: 1.000 B\n          TotalCapacity: .000 \n                UsedPct: 0.00 %\n        MaxDiskUsedPct: 0.00 %\n                ErrMsg: \n                Version: 2.3.0-a9bdb09\n                Status: {"lastSuccessReportTabletsTime":"N/A"}\n      DataTotalCapacity: .000 \n            DataUsedPct: 0.00 %\n              CpuCores: 16\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the field ",(0,r.jsx)(n.code,{children:"Alive"})," is ",(0,r.jsx)(n.code,{children:"true"}),", this BE node is properly started and added to the cluster."]}),"\n",(0,r.jsx)(n.h2,{id:"stop-the-starrocks-cluster",children:"Stop the StarRocks cluster"}),"\n",(0,r.jsx)(n.p,{children:"You can stop the StarRocks cluster by running the following commands."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the FE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"./fe/bin/stop_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the BE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"./be/bin/stop_be.sh --daemon\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.p,{children:"Try the following steps to identify the errors that occurs when you start the FE or BE node:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the FE node is not started properly, you can identify the problem by checking the log in ",(0,r.jsx)(n.strong,{children:"fe/log/fe.warn.log"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"cat fe/log/fe.warn.log\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Having identified and resolved the problem, you must first terminate the existing FE process, delete the FE ",(0,r.jsx)(n.strong,{children:"meta"})," directory, create a new metadata storage directory, and then restart the FE node with the correct configuration."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the BE node is not started properly, you can identify the problem by checking the log in ",(0,r.jsx)(n.strong,{children:"be/log/be.WARNING"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"cat be/log/be.WARNING\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Having identified and resolved the problem, you must first terminate the existing BE process, delete the BE ",(0,r.jsx)(n.strong,{children:"storage"})," directory, create a new data storage directory, and then restart the BE node with the correct configuration."]}),"\n",(0,r.jsx)(n.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,r.jsxs)(n.p,{children:["Having deployed StarRocks, you can continue the QuickStart tutorials on ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/quick_start/Create_table",children:"creating a table"})," and ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/quick_start/Import_and_query",children:"loading and querying data"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can also:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/docs/3.0/developers/build-starrocks/Build_in_docker",children:"Compile StarRocks from source code in Docker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/docs/3.0/quick_start/deploy_with_docker",children:"Deploy StarRocks with Docker"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/3.0/administration/stargo",children:"Deploy StarRocks with StarGo"}),", a StarRocks cluster management tool"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/docs/3.0/administration/Scale_up_down",children:"Scale your StarRocks cluster"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/docs/3.0/administration/Cluster_administration",children:"Upgrade your StarRocks cluster"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(67294);const s=r.createContext({});function i(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:i(e),r.createElement(s.Provider,{value:a},n)}}}]);