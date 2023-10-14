"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71560],{37302:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=e(85893),r=e(11151);const d={},i="\u5728 AWS \u4e0a\u4f7f\u7528 AWS CloudFormation \u90e8\u7f72 StarRocks \u96c6\u7fa4",o={id:"administration/AWS_cloudformation",title:"\u5728 AWS \u4e0a\u4f7f\u7528 AWS CloudFormation \u90e8\u7f72 StarRocks \u96c6\u7fa4",description:"StarRocks \u652f\u6301\u4e0e AWS CloudFormation \u96c6\u6210\uff0c\u60a8\u53ef\u4ee5\u5728 AWS \u4e0a\u4f7f\u7528 AWS CloudFormation \u5feb\u901f\u90e8\u7f72\u5e76\u4f7f\u7528 StarRocks \u96c6\u7fa4\u3002",source:"@site/chinese_versioned_docs/version-3.1/administration/AWS_cloudformation.md",sourceDirName:"administration",slug:"/administration/AWS_cloudformation",permalink:"/doc/zh/administration/AWS_cloudformation",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/AWS_cloudformation.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",next:{title:"\u7ba1\u7406\u624b\u518c",permalink:"/doc/zh/administration/Administration_guide"}},c={},l=[{value:"AWS CloudFormation",id:"aws-cloudformation",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6a21\u7248",id:"\u6a21\u7248",level:3},{value:"\u5806\u6808",id:"\u5806\u6808",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2}];function a(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",ol:"ol",li:"li",strong:"strong",img:"img",code:"code",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5728-aws-\u4e0a\u4f7f\u7528-aws-cloudformation-\u90e8\u7f72-starrocks-\u96c6\u7fa4",children:"\u5728 AWS \u4e0a\u4f7f\u7528 AWS CloudFormation \u90e8\u7f72 StarRocks \u96c6\u7fa4"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u652f\u6301\u4e0e AWS CloudFormation \u96c6\u6210\uff0c\u60a8\u53ef\u4ee5\u5728 AWS \u4e0a\u4f7f\u7528 AWS CloudFormation \u5feb\u901f\u90e8\u7f72\u5e76\u4f7f\u7528 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"aws-cloudformation",children:"AWS CloudFormation"}),"\n",(0,t.jsxs)(n.p,{children:["AWS CloudFormation \u662f AWS \u63d0\u4f9b\u7684\u4e00\u9879\u670d\u52a1\uff0c\u652f\u6301\u7b80\u5355\u4e14\u5feb\u901f\u5730\u5bf9 AWS \u8d44\u6e90\u548c\u7b2c\u4e09\u65b9\u8d44\u6e90\uff08\u4f8b\u5982 StarRocks \u96c6\u7fa4\uff09\u8fdb\u884c\u5efa\u6a21\u548c\u914d\u7f6e\uff0c\u5e2e\u52a9\u60a8\u51cf\u5c11\u8d44\u6e90\u7ba1\u7406\u7684\u65f6\u95f4\u6210\u672c\uff0c\u800c\u82b1\u66f4\u591a\u7684\u65f6\u95f4\u5728\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u63cf\u8ff0\u60a8\u6240\u9700\u7684\u8d44\u6e90\u7684\u6a21\u677f\uff0c\u800c AWS CloudFormation \u5c06\u8d1f\u8d23\u4e3a\u60a8\u914d\u7f6e\u8fd9\u4e9b\u8d44\u6e90\u3002\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_tw/AWSCloudFormation/latest/UserGuide/Welcome.html",children:"\u4ec0\u4e48\u662f AWS CloudFormation"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u7248",children:"\u6a21\u7248"}),"\n",(0,t.jsxs)(n.p,{children:["\u6a21\u677f (Template) \u662f JSON \u6216 YAML \u683c\u5f0f\u7684\u6587\u672c\u6587\u4ef6\uff0c\u63cf\u8ff0\u4e86 AWS \u8d44\u6e90\u548c\u7b2c\u4e09\u65b9\u8d44\u6e90\u3001\u4ee5\u53ca\u8fd9\u4e9b\u8d44\u6e90\u7684\u5c5e\u6027\u3002\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2aab5c15b7",children:"\u6a21\u677f"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5806\u6808",children:"\u5806\u6808"}),"\n",(0,t.jsxs)(n.p,{children:["\u5806\u6808 (Stack) \u7528\u4e8e\u521b\u5efa\u548c\u7ba1\u7406\u6a21\u677f\u4e2d\u63cf\u8ff0\u7684\u8d44\u6e90\u3002\u60a8\u53ef\u901a\u8fc7\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u5806\u6808\u6765\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u4e00\u7ec4\u8d44\u6e90\u3002\u5806\u6808\u4e2d\u7684\u6240\u6709\u8d44\u6e90\u5747\u7531\u5806\u6808\u7684\u6a21\u677f\u5b9a\u4e49\u3002\u5047\u8bbe\u60a8\u521b\u5efa\u4e86\u4e00\u4e2a\u6a21\u677f\uff0c\u63cf\u8ff0\u4e86\u5404\u79cd\u8d44\u6e90\u3002\u8981\u521b\u5efa\u8fd9\u4e9b\u8d44\u6e90\uff0c\u60a8\u53ef\u901a\u8fc7\u63d0\u4ea4\u6a21\u677f\u6765\u521b\u5efa\u5806\u6808\uff0cAWS CloudFormation \u5c06\u4f1a\u4e3a\u60a8\u914d\u7f6e\u6240\u6709\u8fd9\u4e9b\u8d44\u6e90\u3002\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2aab5c15b9",children:"\u5806\u6808"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u767b\u5f55 ",(0,t.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/",children:"AWS CloudFormation \u63a7\u5236\u53f0"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u9009\u62e9",(0,t.jsx)(n.strong,{children:"\u521b\u5efa\u5806\u6808"})," > ",(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b0\u8d44\u6e90(\u6807\u51c6)\u3002"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"\u4f7f\u7528\u65b0\u8d44\u6e90",src:e(67944).Z+"",width:"518",height:"142"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\uff0c\u6307\u5b9a\u6a21\u677f\u3002\n",(0,t.jsx)(n.img,{alt:"\u6307\u5b9a\u6a21\u677f",src:e(51162).Z+"",width:"1280",height:"724"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.strong,{children:"\u5148\u51b3\u6761\u4ef6-\u51c6\u5907\u6a21\u7248"}),"\u90e8\u5206\uff0c\u9009\u62e9",(0,t.jsx)(n.strong,{children:"\u6a21\u677f\u5df2\u5c31\u7eea\u3002"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.strong,{children:"\u6307\u5b9a\u6a21\u7248"}),"\u90e8\u5206\uff0c\u9009\u62e9",(0,t.jsx)(n.strong,{children:"\u6a21\u7248\u6e90"}),"\u4e3a",(0,t.jsx)(n.strong,{children:"Amazon S3 URL"}),"\u3002\u5e76\u5728 ",(0,t.jsx)(n.strong,{children:"Amazon S3 URL"})," \u4e2d\u8f93\u5165\u5982\u4e0b\u7f51\u5740\uff1a\n",(0,t.jsx)(n.code,{children:"https://cf-templates-1euv6e68138u2-us-east-1.s3.amazonaws.com/templates/starrocks.template.yaml"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9",(0,t.jsx)(n.strong,{children:"\u6a21\u7248\u6e90"}),"\u4e3a",(0,t.jsx)(n.strong,{children:"\u4e0a\u4f20\u6a21\u7248\u6587\u4ef6"}),"\uff0c\u7136\u540e\u5355\u51fb",(0,t.jsx)(n.strong,{children:"\u9009\u62e9\u6587\u4ef6"}),"\uff0c\u4e0a\u4f20 ",(0,t.jsx)(n.strong,{children:"starrocks.template.yaml"})," \u6587\u4ef6\u3002\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740\uff0c\u8bf7\u53c2\u89c1 StarRocks \u9879\u76ee\u4e2d ",(0,t.jsx)(n.a,{href:"https://github.com/StarRocks/aws-cloudformation",children:"aws-cloudformation \u4ed3\u5e93"}),"\u3002",(0,t.jsx)(n.img,{alt:"starrocks.template.yaml \u6587\u4ef6",src:e(24061).Z+"",width:"1280",height:"224"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5355\u51fb",(0,t.jsx)(n.strong,{children:"\u4e0b\u4e00\u6b65"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5b9a\u5806\u6808\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec",(0,t.jsx)(n.strong,{children:"\u5806\u6808\u540d\u79f0"}),"\u548c",(0,t.jsx)(n.strong,{children:"\u53c2\u6570"}),"\uff0c\u5e76\u5355\u51fb",(0,t.jsx)(n.strong,{children:"\u4e0b\u4e00\u6b65"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.strong,{children:"\u5806\u6808\u540d\u79f0"}),"\u6846\u4e2d\u8f93\u5165\u5806\u6808\u540d\u79f0\u3002\n\u5806\u6808\u540d\u79f0\u662f\u5e2e\u52a9\u60a8\u4ece\u5806\u6808\u5217\u8868\u4e2d\u67e5\u627e\u7279\u5b9a\u5806\u6808\u7684\u6807\u8bc6\u7b26\u3002\u5806\u6808\u540d\u79f0\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\uff08\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\u548c\u8fde\u5b57\u7b26\uff0c\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 128 \u4e2a\u5b57\u7b26\uff0c\u5e76\u4e14\u5fc5\u987b\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u53c2\u8003\u5982\u4e0b\u4fe1\u606f\uff0c\u586b\u5199\u53c2\u6570\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u7f51\u7edc\u914d\u7f6e"}),(0,t.jsx)(n.td,{children:"Availability Zones"}),(0,t.jsxs)(n.td,{children:["\u9009\u62e9\u4e00\u4e2a\u53ef\u7528\u533a\uff0c\u7528\u4e8e\u90e8\u7f72 StarRocks \u96c6\u7fa4\u3002\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",children:"\u53ef\u7528\u533a"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"EC2 \u914d\u7f6e"}),(0,t.jsx)(n.td,{children:"Key pair name"}),(0,t.jsxs)(n.td,{children:["\u5bc6\u94a5\u5bf9\uff0c\u662f\u7531\u516c\u6709\u5bc6\u94a5\u548c\u79c1\u6709\u5bc6\u94a5\u7ec4\u6210\u7684\u4e00\u7ec4\u5b89\u5168\u51ed\u8bc1\uff0c\u5728\u8fde\u63a5\u5230 Amazon EC2 \u5b9e\u4f8b\u65f6\u7528\u6765\u8bc1\u660e\u60a8\u7684\u8eab\u4efd\u3002\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"\u5bc6\u94a5\u5bf9"}),"\u3002\u8bf4\u660e\uff1a\u5982\u679c\u672a\u521b\u5efa\u5bc6\u94a5\u5bf9\uff0c\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/create-key-pairs.html",children:"\u521b\u5efa\u5bc6\u94a5\u5bf9"}),"\u8fdb\u884c\u521b\u5efa\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u73af\u5883\u914d\u7f6e"}),(0,t.jsx)(n.td,{children:"Reference the latest Amazon Linux AMI in a CloudFormation template"}),(0,t.jsxs)(n.td,{children:["\u6700\u65b0\u7248\u672c\u7684 Amazon Machine Images (AMI) ID\uff0c\u67b6\u6784\u4e3a64 \u4f4d (",(0,t.jsx)(n.code,{children:"x86_64"}),") \uff0c\u7528\u4e8e\u542f\u52a8 Amazon EC2 \u5b9e\u4f8b\u3002\u9ed8\u8ba4\u4e3a StarRocks \u7684\u5171\u4eab AMI  ID\u3002\u8bf4\u660e\uff1aAMI \u662f\u7531 AWS \u63d0\u4f9b\u7684\u652f\u6301\u548c\u7ef4\u62a4\u6620\u50cf\uff0c\u63d0\u4f9b\u542f\u52a8\u5b9e\u4f8b\u7684\u4fe1\u606f\u3002\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/AMIs.html",children:"Amazon Machine Images"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"URL of download JDK 1.8"}),(0,t.jsx)(n.td,{children:"JDK 1.8 \u7684\u4e0b\u8f7d\u5730\u5740\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"URL of StarRocks"}),(0,t.jsx)(n.td,{children:"StarRocks \u4e8c\u8fdb\u5236\u5305\u7684\u4e0b\u8f7d\u5730\u5740\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"StarRocks \u96c6\u7fa4\u914d\u7f6e"}),(0,t.jsx)(n.td,{children:"Number of StarRocks Fe"}),(0,t.jsxs)(n.td,{children:["FE \u8282\u70b9\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.strong,{children:"1"}),"\uff0c\u53d6\u503c\u8303\u56f4\u4e3a ",(0,t.jsx)(n.strong,{children:"1"})," \u6216 ",(0,t.jsx)(n.strong,{children:"3"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Fe instance type"}),(0,t.jsxs)(n.td,{children:["FE \u8282\u70b9\u6240\u5c5e Amazon EC2 \u7684\u5b9e\u4f8b\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.strong,{children:"t2.micro"}),"\u3002\u5b9e\u4f8b\u7c7b\u578b\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cn/ec2/instance-types/",children:"Amazon EC2 \u5b9e\u4f8b\u7c7b\u578b"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Number of StarRocks Be"}),(0,t.jsxs)(n.td,{children:["BE \u8282\u70b9\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.strong,{children:"3"}),"\uff0c\u53d6\u503c\u8303\u56f4\u4e3a ",(0,t.jsx)(n.strong,{children:"3"}),"\uff5e",(0,t.jsx)(n.strong,{children:"6"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Be instance type"}),(0,t.jsxs)(n.td,{children:["BE \u8282\u70b9\u6240\u5c5e Amazon EC2 \u7684\u5b9e\u4f8b\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.strong,{children:"t2.micro"}),"\u3002\u5b9e\u4f8b\u7c7b\u578b\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cn/ec2/instance-types/",children:"Amazon EC2 \u5b9e\u4f8b\u7c7b\u578b"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FE \u914d\u7f6e\u9879"}),(0,t.jsx)(n.td,{children:"Dir to save fe log"}),(0,t.jsx)(n.td,{children:"FE \u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\uff0c\u5fc5\u987b\u4e3a\u7edd\u5bf9\u8def\u5f84\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Sys Log Level"}),(0,t.jsxs)(n.td,{children:["FE \u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,t.jsx)(n.strong,{children:"INFO"}),"\uff0c\u53d6\u503c\u4e3a ",(0,t.jsx)(n.strong,{children:"INFO"}),"\u3001",(0,t.jsx)(n.strong,{children:"WARN"}),"\u3001 ",(0,t.jsx)(n.strong,{children:"ERROR"}),"\u3001",(0,t.jsx)(n.strong,{children:"FATAL"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Meta data dir"}),(0,t.jsxs)(n.td,{children:["FE \u5143\u6570\u636e\u5b58\u50a8\u8def\u5f84\uff0c\u4e14\u5fc5\u987b\u4e3a\u7edd\u5bf9\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.strong,{children:"feDefaultMetaPath"}),"\uff0c\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u8def\u5f84 ",(0,t.jsx)(n.strong,{children:"/home/starrocks/StarRocks/fe/meta"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BE \u914d\u7f6e\u9879"}),(0,t.jsx)(n.td,{children:"Dir to save be sys log"}),(0,t.jsx)(n.td,{children:"BE \u65e5\u5fd7\u7684\u5b58\u50a8\u8def\u5f84\uff0c\u5fc5\u987b\u586b\u5199\u7edd\u5bf9\u8def\u5f84\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Sys Log Level"}),(0,t.jsxs)(n.td,{children:["BE \u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,t.jsx)(n.strong,{children:"INFO"}),"\uff0c\u53d6\u503c\u4e3a ",(0,t.jsx)(n.strong,{children:"INFO"}),"\u3001",(0,t.jsx)(n.strong,{children:"WARN"}),"\u3001 ",(0,t.jsx)(n.strong,{children:"ERROR"}),"\u3001",(0,t.jsx)(n.strong,{children:"FATAL"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Volume type of Be nodes"}),(0,t.jsxs)(n.td,{children:["Amazon EBS \u5377\u7c7b\u578b\u3002Amazon EBS \u5377\uff08\u7b80\u79f0 EBS \u5377\uff09\u662f\u5757\u5b58\u50a8\u5377\uff0c\u6302\u8f7d\u81f3Amazon EC2 \u5b9e\u4f8b\u4e0a\u3002\u66f4\u591a\u4ecb\u7ecd\u548c\u7c7b\u578b\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-volumes.html",children:"Amazon EBS \u5377"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Volume size of Be nodes"}),(0,t.jsx)(n.td,{children:"EBS \u5377\u4e2d\u53ef\u7528\u4e8e BE \u8282\u70b9\u5b58\u50a8\u6570\u636e\u7684\u5bb9\u91cf\uff0c\u5355\u4f4d\u4e3a GB\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bbe\u7f6e\u5806\u6808\u66f4\u591a\u9009\u9879\u3002\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"\u8bbe\u7f6e AWS CloudFormation \u5806\u6808\u9009\u9879"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u5355\u51fb",(0,t.jsx)(n.strong,{children:"\u4e0b\u4e00\u6b65"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5ba1\u6838\u524d\u9762\u8bbe\u7f6e\u7684\u5806\u6808\u4fe1\u606f\uff0c\u5305\u62ec\u6a21\u677f\u3001\u8be6\u7ec6\u4fe1\u606f\u3001\u66f4\u591a\u9009\u9879\u3002\u5e76\u4e14\uff0c\u8bc4\u4f30\u5806\u6808\u6210\u672c\u3002\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/cfn-using-console-create-stack-review.html",children:"\u5ba1\u67e5\u5806\u6808\u4fe1\u606f\u5e76\u8bc4\u4f30\u5806\u6808\u6210\u672c"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u5982\u679c\u9700\u8981\u4fee\u6539\u5806\u6808\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb\u5bf9\u5e94\u90e8\u5206\u53f3\u4e0a\u89d2\u7684",(0,t.jsx)(n.strong,{children:"\u7f16\u8f91"}),"\uff0c\u4ee5\u8fd4\u56de\u76f8\u5173\u9875\u9762\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u52fe\u9009\u5982\u4e0b\u4e24\u4e2a\u590d\u9009\u6846\uff0c\u5e76\u5355\u51fb",(0,t.jsx)(n.strong,{children:"\u521b\u5efa\u5806\u6808"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u521b\u5efa\u5806\u6808",src:e(75279).Z+"",width:"1050",height:"327"})})]})}const h=function(s={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),s.components);return n?(0,t.jsx)(n,Object.assign({},s,{children:(0,t.jsx)(a,s)})):a(s)}},67944:(s,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/8.1.3-1-e4185a133630798069e3909a557f5369.png"},51162:(s,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/8.1.3-2-b5959836da2e1bf1bf87233370e0457c.png"},24061:(s,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/8.1.3-3-26e67856733990bcec2a6b7d8c1e3ba7.png"},75279:(s,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/8.1.3-4-36f2a71589298dce46a1c4e017a72ade.png"},11151:(s,n,e)=>{e.d(n,{Zo:()=>o,ah:()=>d});var t=e(67294);const r=t.createContext({});function d(s){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof s?s(n):{...n,...s}),[n,s])}const i={};function o({components:s,children:n,disableParentContext:e}){let o;return o=e?"function"==typeof s?s({}):s||i:d(s),t.createElement(r.Provider,{value:o},n)}}}]);