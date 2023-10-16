"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54029],{49474:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var t=r(85893),n=r(11151);const c={displayed_sidebar:"English"},o="Deploy StarRocks with Operator",a={id:"deployment/sr_operator",title:"Deploy StarRocks with Operator",description:"This topic introduces how to use the StarRocks Operator to automate the deployment and management of a StarRocks cluster on a Kubernetes cluster.",source:"@site/versioned_docs/version-3.0/deployment/sr_operator.md",sourceDirName:"deployment",slug:"/deployment/sr_operator",permalink:"/doc/docs/3.0/deployment/sr_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/deployment/sr_operator.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Prepare deployment files",permalink:"/doc/docs/3.0/deployment/prepare_deployment_files"},next:{title:"Deploy StarRocks on AWS",permalink:"/doc/docs/3.0/deployment/starrocks_on_aws"}},l={},i=[{value:"How it works",id:"how-it-works",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Create Kubernetes cluster",id:"create-kubernetes-cluster",level:3},{value:"Deploy StarRocks Operator",id:"deploy-starrocks-operator",level:3},{value:"Deploy StarRocks Cluster",id:"deploy-starrocks-cluster",level:2},{value:"Manage StarRocks Cluster",id:"manage-starrocks-cluster",level:2},{value:"Access StarRocks Cluster",id:"access-starrocks-cluster",level:3},{value:"Access StarRocks Cluster from within Kubernetes Cluster",id:"access-starrocks-cluster-from-within-kubernetes-cluster",level:4},{value:"Access StarRocks Cluster from outside Kubernetes Cluster",id:"access-starrocks-cluster-from-outside-kubernetes-cluster",level:4},{value:"Upgrade StarRocks Cluster",id:"upgrade-starrocks-cluster",level:3},{value:"Upgrade BE nodes",id:"upgrade-be-nodes",level:4},{value:"Upgrade FE nodes",id:"upgrade-fe-nodes",level:4},{value:"Scale StarRocks cluster",id:"scale-starrocks-cluster",level:3},{value:"Scale out BE cluster",id:"scale-out-be-cluster",level:4},{value:"Scale out FE cluster",id:"scale-out-fe-cluster",level:4},{value:"Automatic scaling for CN cluster",id:"automatic-scaling-for-cn-cluster",level:3},{value:"FAQ",id:"faq",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",h3:"h3",a:"a",ul:"ul",li:"li",ol:"ol",pre:"pre",code:"code",strong:"strong",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",em:"em"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"deploy-starrocks-with-operator",children:"Deploy StarRocks with Operator"}),"\n",(0,t.jsx)(s.p,{children:"This topic introduces how to use the StarRocks Operator to automate the deployment and management of a StarRocks cluster on a Kubernetes cluster."}),"\n",(0,t.jsx)(s.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img",src:r(41949).Z+"",width:"925",height:"643"})}),"\n",(0,t.jsx)(s.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsx)(s.h3,{id:"create-kubernetes-cluster",children:"Create Kubernetes cluster"}),"\n",(0,t.jsxs)(s.p,{children:["You can use the cloud-managed Kubernetes service, such as an ",(0,t.jsx)(s.a,{href:"https://aws.amazon.com/eks/?nc1=h_ls",children:"Amazon Elastic Kubernetes Service (EKS)"})," or ",(0,t.jsx)(s.a,{href:"https://cloud.google.com/kubernetes-engine",children:"Google Kubernetes Engine (GKE)"})," cluster, or a self-managed Kubernetes cluster."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create an Amazon EKS cluster"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Check that ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html",children:"the following command-line tools are installed in your environment"}),":","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Install and configure AWS command-line tool AWS CLI."}),"\n",(0,t.jsx)(s.li,{children:"Install EKS cluster command-line tool eksctl."}),"\n",(0,t.jsx)(s.li,{children:"Install Kubernetes cluster command-line tool kubectl."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Use one of the following methods to create an EKS cluster:","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html",children:"Use eksctl to quickly create an EKS cluster"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html",children:"Manually create an EKS cluster with the AWS console and AWS CLI"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create a GKE cluster"}),"\n",(0,t.jsxs)(s.p,{children:["Before you start to create a GKE cluster, make sure that you complete all the ",(0,t.jsx)(s.a,{href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster#before-you-begin",children:"prerequisites"}),". Then follow the instructions provided in ",(0,t.jsx)(s.a,{href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster#create_cluster",children:"Create a GKE cluster"})," to create a GKE cluster."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create a self-managed Kubernetes cluster"}),"\n",(0,t.jsxs)(s.p,{children:["Follow the instructions provided in ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/",children:"Bootstrapping clusters with kubeadm"})," to create a self-managed Kubernetes cluster. You can use ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/",children:"Minikube"})," and ",(0,t.jsx)(s.a,{href:"https://docs.docker.com/desktop/",children:"Docker Desktop"})," to create a single-node private Kubernetes cluster with minimum steps."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"deploy-starrocks-operator",children:"Deploy StarRocks Operator"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add the custom resource StarRocksCluster."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/deploy/starrocks.com_starrocksclusters.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Deploy the StarRocks Operator. You can choose to deploy the StarRocks Operator by using a default configuration file or a custom configuration file."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Deploy the StarRocks Operator by using a default configuration file."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/deploy/operator.yaml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The StarRocks Operator is deployed to the namespace ",(0,t.jsx)(s.code,{children:"starrocks"})," and manages all StarRocks clusters under all namespaces."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Deploy the StarRocks Operator by using a custom configuration file."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Download the configuration file ",(0,t.jsx)(s.strong,{children:"operator.yaml"}),", which is used to deploy the StarRocks Operator."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -O https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/deploy/operator.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Modify the configuration file ",(0,t.jsx)(s.strong,{children:"operator.yaml"})," to suit your needs."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Deploy the StarRocks Operator."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f operator.yaml\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Check the running status of the StarRocks Operator. If the pod is in the ",(0,t.jsx)(s.code,{children:"Running"})," state and all containers inside the pod are ",(0,t.jsx)(s.code,{children:"READY"}),", the StarRocks Operator is running as expected."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n starrocks get pods\nNAME                                  READY   STATUS    RESTARTS   AGE\nstarrocks-controller-65bb8679-jkbtg   1/1     Running   0          5m6s\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.p,{children:["If you customize the namespace in which the StarRocks Operator is located, you need to replace",(0,t.jsx)(s.code,{children:"starrocks"})," with the name of your customized namespace."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"deploy-starrocks-cluster",children:"Deploy StarRocks Cluster"}),"\n",(0,t.jsxs)(s.p,{children:["You can directly use the ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/tree/main/examples/starrocks",children:"sample configuration files"})," provided by StarRocks to deploy a StarRocks cluster (an object instantiated by using the custom resource StarRocks Cluster). For example, you can use ",(0,t.jsx)(s.strong,{children:"starrocks-fe-and-be.yaml"})," to deploy a StarRocks cluster that contains three FE nodes and three BE nodes."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/examples/starrocks/starrocks-fe-and-be.yaml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The following table describes a few important fields in the ",(0,t.jsx)(s.strong,{children:"starrocks-fe-and-be.yaml"})," file."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Field"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Kind"}),(0,t.jsxs)(s.td,{children:["The resource type of the object. The value must be ",(0,t.jsx)(s.code,{children:"StarRocksCluster"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Metadata"}),(0,t.jsxs)(s.td,{children:["Metadata, in which the following sub-fields are nested:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"name"}),": the name of the object. Each object name uniquely identifies an object of the same resource type."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"namespace"}),": the namespace to which the object belongs."]})]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Spec"}),(0,t.jsxs)(s.td,{children:["The expected status of the object. Valid values are ",(0,t.jsx)(s.code,{children:"starRocksFeSpec"}),", ",(0,t.jsx)(s.code,{children:"starRocksBeSpec"}),", and ",(0,t.jsx)(s.code,{children:"starRocksCnSpec"}),"."]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["You can also deploy the StarRocks cluster by using a modified configuration file. For supported fields and detailed descriptions, see ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/doc/api.md",children:"api.md"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Deploying the StarRocks cluster takes a while. During this period, you can use the command ",(0,t.jsx)(s.code,{children:"kubectl -n starrocks get pods"})," to check the starting status of the StarRocks cluster. If all the pods are in the ",(0,t.jsx)(s.code,{children:"Running"})," state and all containers inside the pods are ",(0,t.jsx)(s.code,{children:"READY"}),", the StarRocks cluster is running as expected."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.p,{children:["If you customize the namespace in which the StarRocks cluster is located, you need to replace ",(0,t.jsx)(s.code,{children:"starrocks"})," with the name of your customized namespace."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n starrocks get pods\nNAME                                  READY   STATUS    RESTARTS   AGE\nstarrocks-controller-65bb8679-jkbtg   1/1     Running   0          22h\nstarrockscluster-sample-be-0          1/1     Running   0          23h\nstarrockscluster-sample-be-1          1/1     Running   0          23h\nstarrockscluster-sample-be-2          1/1     Running   0          22h\nstarrockscluster-sample-fe-0          1/1     Running   0          21h\nstarrockscluster-sample-fe-1          1/1     Running   0          21h\nstarrockscluster-sample-fe-2          1/1     Running   0          22h\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Note"})}),"\n",(0,t.jsxs)(s.p,{children:["If some pods cannot start after a long period of time, you can use ",(0,t.jsx)(s.code,{children:"kubectl logs -n starrocks <pod_name>"})," to view the log information or use ",(0,t.jsx)(s.code,{children:"kubectl -n starrocks describe pod <pod_name>"})," to view the event information to locate the problem."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"manage-starrocks-cluster",children:"Manage StarRocks Cluster"}),"\n",(0,t.jsx)(s.h3,{id:"access-starrocks-cluster",children:"Access StarRocks Cluster"}),"\n",(0,t.jsxs)(s.p,{children:["The components of the StarRocks cluster can be accessed through their associated Services, such as the FE Service. For detailed descriptions of Services and their access addresses, see ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/doc/api.md",children:"api.md"})," and ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/",children:"Services"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Only the FE Service is deployed by default. If you need to deploy the BE Service and CN Service, you need to configure ",(0,t.jsx)(s.code,{children:"starRocksBeSpec"})," and ",(0,t.jsx)(s.code,{children:"starRocksCnSpec"})," in the StarRocks cluster configuration file."]}),"\n",(0,t.jsxs)(s.li,{children:["The name of a Service is ",(0,t.jsx)(s.code,{children:"<cluster name>-<component name>-service"})," by default, for example, ",(0,t.jsx)(s.code,{children:"starrockscluster-sample-fe-service"}),". You can also specify the Service name in the spec of each component."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"access-starrocks-cluster-from-within-kubernetes-cluster",children:"Access StarRocks Cluster from within Kubernetes Cluster"}),"\n",(0,t.jsx)(s.p,{children:"From within the Kubernetes cluster, the StarRocks cluster can be accessed through the FE Service's ClusterIP."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Obtain the internal virtual IP address ",(0,t.jsx)(s.code,{children:"CLUSTER-IP"})," and port ",(0,t.jsx)(s.code,{children:"PORT(S)"})," of the FE Service."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"$ kubectl -n starrocks get svc \nNAME                                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                               AGE\nbe-domain-search                     ClusterIP   None             <none>        9050/TCP                              23m\nfe-domain-search                     ClusterIP   None             <none>        9030/TCP                              25m\nstarrockscluster-sample-fe-service   ClusterIP   10.100.162.xxx   <none>        8030/TCP,9020/TCP,9030/TCP,9010/TCP   25m\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Access the StarRocks cluster by using the MySQL client from within the Kubernetes cluster."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"mysql -h 10.100.162.xxx -P 9030 -uroot\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"access-starrocks-cluster-from-outside-kubernetes-cluster",children:"Access StarRocks Cluster from outside Kubernetes Cluster"}),"\n",(0,t.jsx)(s.p,{children:"From outside the Kubernetes cluster, you can access the StarRocks cluster through the FE Service's LoadBalancer or NodePort. This topic uses LoadBalancer as an example:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Run the command ",(0,t.jsx)(s.code,{children:"kubectl -n starrocks edit src starrockscluster-sample"})," to update the StarRocks cluster configuration file, and change the Service type of ",(0,t.jsx)(s.code,{children:"starRocksFeSpec"})," to ",(0,t.jsx)(s.code,{children:"LoadBalancer"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-YAML",children:"starRocksFeSpec:\n  image: starrocks/fe-ubuntu:3.0-latest\n  replicas: 3\n  requests:\n    cpu: 4\n    memory: 16Gi\n  service:            \n    type: LoadBalancer # specified as LoadBalancer\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Obtain the IP address ",(0,t.jsx)(s.code,{children:"EXTERNAL-IP"})," and port ",(0,t.jsx)(s.code,{children:"PORT(S)"})," that the FE Service exposes to the outside."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"$ kubectl -n starrocks get svc\nNAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)                                                       AGE\nbe-domain-search                     ClusterIP      None             <none>                                                                   9050/TCP                                                      127m\nfe-domain-search                     ClusterIP      None             <none>                                                                   9030/TCP                                                      129m\nstarrockscluster-sample-fe-service   LoadBalancer   10.100.162.xxx   a7509284bf3784983a596c6eec7fc212-618xxxxxx.us-west-2.elb.amazonaws.com   8030:30629/TCP,9020:32544/TCP,9030:32244/TCP,9010:32024/TCP   129m               ClusterIP      None            <none>                                                                   9030/TCP                                                      23h\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in to your machine host and access the StarRocks cluster by using the MySQL client."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"mysql -h a7509284bf3784983a596c6eec7fc212-618xxxxxx.us-west-2.elb.amazonaws.com -P9030 -uroot\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"upgrade-starrocks-cluster",children:"Upgrade StarRocks Cluster"}),"\n",(0,t.jsx)(s.h4,{id:"upgrade-be-nodes",children:"Upgrade BE nodes"}),"\n",(0,t.jsxs)(s.p,{children:["Run the following command to specify a new BE image file, such as ",(0,t.jsx)(s.code,{children:"starrocks/be-ubuntu:latest"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksBeSpec":{"image":"starrocks/be-ubuntu:latest"}}}\'\n'})}),"\n",(0,t.jsx)(s.h4,{id:"upgrade-fe-nodes",children:"Upgrade FE nodes"}),"\n",(0,t.jsxs)(s.p,{children:["Run the following command to specify a new FE image file, such as ",(0,t.jsx)(s.code,{children:"starrocks/fe-ubuntu:latest"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksFeSpec":{"image":"starrocks/fe-ubuntu:latest"}}}\'\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The upgrade process lasts for a while. You can run the command ",(0,t.jsx)(s.code,{children:"kubectl -n starrocks get pods"})," to view the upgrade progress."]}),"\n",(0,t.jsx)(s.h3,{id:"scale-starrocks-cluster",children:"Scale StarRocks cluster"}),"\n",(0,t.jsx)(s.p,{children:"This topic takes scaling out the BE and FE clusters as examples."}),"\n",(0,t.jsx)(s.h4,{id:"scale-out-be-cluster",children:"Scale out BE cluster"}),"\n",(0,t.jsx)(s.p,{children:"Run the following command to scale out the BE cluster to 9 nodes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksBeSpec":{"replicas":9}}}\'\n'})}),"\n",(0,t.jsx)(s.h4,{id:"scale-out-fe-cluster",children:"Scale out FE cluster"}),"\n",(0,t.jsx)(s.p,{children:"Run the following command to scale out the FE cluster to 4 nodes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksFeSpec":{"replicas":4}}}\'\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The scaling process lasts for a while. You can use the command ",(0,t.jsx)(s.code,{children:"kubectl -n starrocks get pods"})," to view the scaling progress."]}),"\n",(0,t.jsx)(s.h3,{id:"automatic-scaling-for-cn-cluster",children:"Automatic scaling for CN cluster"}),"\n",(0,t.jsxs)(s.p,{children:["Run the command ",(0,t.jsx)(s.code,{children:"kubectl -n starrocks edit src starrockscluster-sample"})," to configure the automatic scaling policy for the CN cluster. You can specify the resource metrics for CNs as the average CPU utilization, average memory usage, elastic scaling threshold, upper elastic scaling limit, and lower elastic scaling limit. The upper elastic scaling limit and lower elastic scaling limit specify the maximum number and minimum number of CNs allowed for elastic scaling."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.p,{children:["If the automatic scaling policy for the CN cluster is configured, delete the ",(0,t.jsx)(s.code,{children:"replicas"})," field from the ",(0,t.jsx)(s.code,{children:"starRocksCnSpec"})," in the StarRocks cluster configuration file."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Kubernetes also supports using ",(0,t.jsx)(s.code,{children:"behavior"})," to customize scaling behaviors according to business scenarios, helping you achieve rapid or slow scaling or disable scaling. For more information about automatic scaling policies, see ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",children:"Horizontal Pod Scaling"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The following is a ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/examples/starrocks/deploy_a_starrocks_cluster_with_cn.yaml",children:"template"})," provided by StarRocks to help you configure automatic scaling policies:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-YAML",children:"  starRocksCnSpec:\n    image: starrocks/cn-ubuntu:latest\n    limits:\n      cpu: 16\n      memory: 64Gi\n    requests:\n      cpu: 16\n      memory: 64Gi\n    autoScalingPolicy: # Automatic scaling policy of the CN cluster.\n      maxReplicas: 10 # The maximum number of CNs is set to 10.\n      minReplicas: 1 # The minimum number of CNs is set to 1.\n      # operator creates an HPA resource based on the following field.\n      # see https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ for more information.\n      hpaPolicy:\n        metrics: # Resource metrics\n          - type: Resource\n            resource:\n              name: memory  # The average memory usage of CNs is specified as a resource metric.\n              target:\n                # The elastic scaling threshold is 60%.\n                # When the average memory utilization of CNs exceeds 60%, the number of CNs increases for scale-out.\n                # When the average memory utilization of CNs is below 60%, the number of CNs decreases for scale-in.\n                averageUtilization: 60\n                type: Utilization\n          - type: Resource\n            resource:\n              name: cpu # The average CPU utilization of CNs is specified as a resource metric.\n              target:\n                # The elastic scaling threshold is 60%.\n                # When the average CPU utilization of CNs exceeds 60%, the number of CNs increases for scale-out.\n                # When the average CPU utilization of CNs is below 60%, the number of CNs decreases for scale-in.\n                averageUtilization: 60\n                type: Utilization\n        behavior: #  The scaling behavior is customized according to business scenarios, helping you achieve rapid or slow scaling or disable scaling.\n          scaleUp:\n            policies:\n              - type: Pods\n                value: 1\n                periodSeconds: 10\n          scaleDown:\n            selectPolicy: Disabled\n"})}),"\n",(0,t.jsx)(s.p,{children:"The following table describes a few important fields:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The upper and lower elastic scaling limit."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-YAML",children:"maxReplicas: 10 # The maximum number of CNs is set to 10.\nminReplicas: 1 # The minimum number of CNs is set to 1.\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The elastic scaling threshold."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-YAML",children:"# For example, the average CPU utilization of CNs is specified as a resource metric.\n# The elastic scaling threshold is 60%.\n# When the average CPU utilization of CNs exceeds 60%, the number of CNs increases for scale-out.\n# When the average CPU utilization of CNs is below 60%, the number of CNs decreases for scale-in.\n- type: Resource\n  resource:\n    name: cpu\n    target:\n      averageUtilization: 60\n"})}),"\n",(0,t.jsx)(s.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Issue description:"})," When a custom resource StarRocksCluster is installed using ",(0,t.jsx)(s.code,{children:"kubectl apply -f xxx"}),", an error is returned ",(0,t.jsx)(s.code,{children:"The CustomResourceDefinition 'starrocksclusters.starrocks.com' is invalid: metadata.annotations: Too long: must have at most 262144 bytes"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Cause analysis:"})," Whenever ",(0,t.jsx)(s.code,{children:"kubectl apply -f xxx"})," is used to create or update resources, a metadata annotation ",(0,t.jsx)(s.code,{children:"kubectl.kubernetes.io/last-applied-configuration"})," is added. This metadata annotation is in JSON format and records the ",(0,t.jsx)(s.em,{children:"last-applied-configuration"}),". ",(0,t.jsx)(s.code,{children:"kubectl apply -f xxx"}),'" is suitable for most cases, but in rare situations , such as when the configuration file for the custom resource is too large, it may cause the size of the metadata annotation to exceed the limit.']}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Solution:"})," If you install the custom resource StarRocksCluster for the first time, it is recommended to use ",(0,t.jsx)(s.code,{children:"kubectl create -f xxx"}),". If the custom resource StarRocksCluster is already installed in the environment, and you need to update its configuration, it is recommended to use ",(0,t.jsx)(s.code,{children:"kubectl replace -f xxx"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},41949:(e,s,r)=>{r.d(s,{Z:()=>t});const t=r.p+"assets/images/starrocks_operator-9cab6c348d06e353636bf21afc7e3815.png"},11151:(e,s,r)=>{r.d(s,{Zo:()=>a,ah:()=>c});var t=r(67294);const n=t.createContext({});function c(e){const s=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function a({components:e,children:s,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||o:c(e),t.createElement(n.Provider,{value:a},s)}}}]);