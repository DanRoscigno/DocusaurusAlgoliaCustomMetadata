"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89555],{60348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(85893),s=t(11151);const i={},r="Deploy FE Cluster with High Availability",l={id:"administration/Deployment",title:"Deploy FE Cluster with High Availability",description:"This topic introduces StarRocks' high-availability (HA) deployment of the FE nodes.",source:"@site/versioned_docs/version-3.1/administration/Deployment.md",sourceDirName:"administration",slug:"/administration/Deployment",permalink:"/doc/en/administration/Deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Deployment.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Data Recovery",permalink:"/doc/en/administration/Data_recovery"},next:{title:"Load Balancing",permalink:"/doc/en/administration/Load_balance"}},a={},c=[{value:"Understand the FE HA cluster",id:"understand-the-fe-ha-cluster",level:2},{value:"Understand FE roles",id:"understand-fe-roles",level:3},{value:"Deploy a FE HA cluster",id:"deploy-a-fe-ha-cluster",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol",pre:"pre",code:"code",blockquote:"blockquote",a:"a"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-fe-cluster-with-high-availability",children:"Deploy FE Cluster with High Availability"}),"\n",(0,o.jsx)(n.p,{children:"This topic introduces StarRocks' high-availability (HA) deployment of the FE nodes."}),"\n",(0,o.jsx)(n.h2,{id:"understand-the-fe-ha-cluster",children:"Understand the FE HA cluster"}),"\n",(0,o.jsx)(n.p,{children:"StarRocks' FE high-availability clusters use a primary-secondary replication architecture to avoid single points of failure. FE uses the raft-like BDB JE protocol to achieve leader selection, log replication, and failover."}),"\n",(0,o.jsx)(n.h3,{id:"understand-fe-roles",children:"Understand FE roles"}),"\n",(0,o.jsx)(n.p,{children:"In an FE cluster, nodes are divided into the following two roles:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"FE Follower"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"FE Followers are voting members of the replication protocol, participating in the selection of the Leader FE and submitting logs. The number of the FE Followers is odd (2n+1). It takes majority (n+1) for confirmation and tolerates minority (n) failure."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"FE Observer"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"FE Observers are non-voting member and are used to subscribe to replication logs asynchronously. In a cluster, the status of FE Observers lags behind that of the Followers, similar to the leaner role in other replication protocols."}),"\n",(0,o.jsx)(n.p,{children:"The FE cluster automatically selects the Leader FE from the FE Followers. The Leader FE executes all state changes. A change can be initiated from a non-Leader FE node, and then forwarded to the Leader FE for execution. Non-Leader FE node records the LSN of the most recent change in the replication log. Read operations can be performed directly on the non-leader node, but they wait until the state of the non-Leader FE node gets synchronized with the LSN of the last operation. Observer nodes can increase the load capacity of read operations on the FE cluster. Users with little urgency can read the observer nodes."}),"\n",(0,o.jsx)(n.h2,{id:"deploy-a-fe-ha-cluster",children:"Deploy a FE HA cluster"}),"\n",(0,o.jsx)(n.p,{children:"To deploy a FE cluster with high availability, the following requirements must be met:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The clock difference between the FE nodes should not exceed 5s. Use the NTP protocol to calibrate the time."}),"\n",(0,o.jsx)(n.li,{children:"You can only deploy one FE node on one machine."}),"\n",(0,o.jsx)(n.li,{children:"You must allocate the same HTTP ports on all FE nodes."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When all above requirements are met, you can follow these steps to add FE instances one by one into the StarRocks cluster to enable HA deployment of FE nodes."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Distribute binary and configuration files (same as a single instance)."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Connect the MySQL client to the existing FE, and add the information of the new instance, including role, IP, port:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'mysql> ALTER SYSTEM ADD FOLLOWER "host:port";\n'})}),"\n",(0,o.jsx)(n.p,{children:"Or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'mysql> ALTER SYSTEM ADD OBSERVER "host:port";\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The host is the IP of the machine. If the machine has multiple IPs, select the IP in priority_networks. For example, ",(0,o.jsx)(n.code,{children:"priority_networks=192.168.1.0/24"})," can be set to use the subnet ",(0,o.jsx)(n.code,{children:"192.168.1.x"})," for communication. The port is ",(0,o.jsx)(n.code,{children:"edit_log_port"}),", default to ",(0,o.jsx)(n.code,{children:"9010"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: Due to security considerations, StarRocks' FE and BE can only listen to one IP for communication. If a machine has multiple network cards, StarRocks may not be able to automatically find the correct IP. For example, run the ",(0,o.jsx)(n.code,{children:"ifconfig"})," command to get that ",(0,o.jsx)(n.code,{children:"eth0 IP"})," is ",(0,o.jsx)(n.code,{children:"192.168.1.1"}),", ",(0,o.jsx)(n.code,{children:"docker0 : 172.17.0.1"}),". We can set the word network ",(0,o.jsx)(n.code,{children:"192.168.1.0/24"})," to designate eth0 as the communication IP. Here we use ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",children:"CIDR"})," notation to specify the subnet range where the IP is located, so that it can be used on all BE and FE. ",(0,o.jsx)(n.code,{children:"priority_networks"})," is written in both ",(0,o.jsx)(n.code,{children:"fe.conf"})," and ",(0,o.jsx)(n.code,{children:"be.conf"}),". This attribute indicates which IP to use when the FE or BE is started. The example is as follows: ",(0,o.jsx)(n.code,{children:"priority_networks=10.1.3.0/24"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If an error occurs, delete the FE by using the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'alter system drop follower "fe_host:edit_log_port";\nalter system drop observer "fe_host:edit_log_port";\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["FE nodes need to be interconnected in pairs to complete master selection, voting, log submission, and replication. When the FE node is first initiated, a node in the existing cluster needs to be designated as a helper. The helper node gets the configuration information of all the FE nodes in the cluster to establish a connection. Therefore, during initiation, specify the ",(0,o.jsx)(n.code,{children:"--helper"})," parameter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./bin/start_fe.sh --helper host:port --daemon\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The host is the IP of the helper node. If there are multiple IPs, select the IP in ",(0,o.jsx)(n.code,{children:"priority_networks"}),". The port is ",(0,o.jsx)(n.code,{children:"edit_log_port"}),", default to ",(0,o.jsx)(n.code,{children:"9010"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["There is no need to specify the ",(0,o.jsx)(n.code,{children:"--helper"})," parameter for future starts. The FE stores other FEs\u2019 configuration information in the local directory. To start directly:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check the cluster status and confirm that the deployment is successful."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> SHOW PROC '/frontends'\\G\n\n***1\\. row***\n\nName: 172.26.x.x_9010_1584965098874\n\nIP: 172.26.x.x\n\nHostName: sr-test1\n\n......\n\nRole: FOLLOWER\n\nIsMaster: true\n\n......\n\nAlive: true\n\n......\n\n***2\\. row***\n\nName: 172.26.x.x_9010_1584965098874\n\nIP: 172.26.x.x\n\nHostName: sr-test2\n\n......\n\nRole: FOLLOWER\n\nIsMaster: false\n\n......\n\nAlive: true\n\n......\n\n***3\\. row***\n\nName: 172.26.x.x_9010_1584965098874\n\nIP: 172.26.x.x\n\nHostName: sr-test3\n\n......\n\nRole: FOLLOWER\n\nIsMaster: false\n\n......\n\nAlive: true\n\n......\n\n3 rows in set (0.05 sec)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"Alive"})," is ",(0,o.jsx)(n.code,{children:"true"}),", the node is successfully added to the cluster. In the above example, ",(0,o.jsx)(n.code,{children:"172.26.x.x_9010_1584965098874"})," is the Leader FE node."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var o=t(67294);const s=o.createContext({});function i(e){const n=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:i(e),o.createElement(s.Provider,{value:l},n)}}}]);