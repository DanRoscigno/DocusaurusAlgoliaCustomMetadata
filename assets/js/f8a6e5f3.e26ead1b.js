"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68351],{29239:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>_,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var r=n(85893),t=n(11151);const c={},a="\u90e8\u7f72\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",d={id:"deployment/deploy_shared_data",title:"\u90e8\u7f72\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u548c\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u3002",source:"@site/chinese_versioned_docs/version-3.0/deployment/deploy_shared_data.md",sourceDirName:"deployment",slug:"/deployment/deploy_shared_data",permalink:"/doc/zh/3.0/deployment/deploy_shared_data",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/deployment/deploy_shared_data.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u624b\u52a8\u90e8\u7f72 StarRocks",permalink:"/doc/zh/3.0/deployment/deploy_manually"},next:{title:"\u90e8\u7f72\u603b\u89c8",permalink:"/doc/zh/3.0/deployment/deployment_overview"}},l={},i=[{value:"\u90e8\u7f72 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",id:"\u90e8\u7f72-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",level:2},{value:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4 FE \u8282\u70b9",id:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4-fe-\u8282\u70b9",level:3},{value:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4 CN \u8282\u70b9",id:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4-cn-\u8282\u70b9",level:3},{value:"\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",id:"\u4f7f\u7528-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:3},{value:"\u67e5\u770b\u8868\u4fe1\u606f",id:"\u67e5\u770b\u8868\u4fe1\u606f",level:3},{value:"\u5411 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u5bfc\u5165\u6570\u636e",id:"\u5411-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u5bfc\u5165\u6570\u636e",level:3},{value:"\u5728 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u67e5\u8be2",id:"\u5728-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u67e5\u8be2",level:3}];function o(e){const s=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",img:"img",h2:"h2",strong:"strong",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u90e8\u7f72\u4f7f\u7528-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",children:"\u90e8\u7f72\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u548c\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u91c7\u7528\u4e86\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u67b6\u6784\uff0c\u7279\u522b\u4e3a\u4e91\u5b58\u50a8\u8bbe\u8ba1\u3002\u5728\u5b58\u7b97\u5206\u79bb\u7684\u6a21\u5f0f\u4e0b\uff0cStarRocks \u5c06\u6570\u636e\u5b58\u50a8\u5728\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff08\u4f8b\u5982 AWS S3\u3001OSS \u4ee5\u53ca MinIO\uff09\u6216 HDFS \u4e2d\uff0c\u800c\u672c\u5730\u76d8\u4f5c\u4e3a\u70ed\u6570\u636e\u7f13\u5b58\uff0c\u7528\u4ee5\u52a0\u901f\u67e5\u8be2\u3002\u901a\u8fc7\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u67b6\u6784\uff0c\u60a8\u53ef\u4ee5\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u5e76\u4e14\u4f18\u5316\u8d44\u6e90\u9694\u79bb\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u96c6\u7fa4\u7684\u5f39\u6027\u6269\u5c55\u80fd\u529b\u4e5f\u5f97\u4ee5\u52a0\u5f3a\u3002\u5728\u67e5\u8be2\u547d\u4e2d\u7f13\u5b58\u7684\u60c5\u51b5\u4e0b\uff0c\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u7684\u67e5\u8be2\u6027\u80fd\u4e0e\u5b58\u7b97\u4e00\u4f53\u96c6\u7fa4\u6027\u80fd\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u76f8\u5bf9\u5b58\u7b97\u4e00\u4f53\u67b6\u6784\uff0cStarRocks \u7684\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u67b6\u6784\u63d0\u4f9b\u4ee5\u4e0b\u4f18\u52bf\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5ec9\u4ef7\u4e14\u53ef\u65e0\u7f1d\u6269\u5c55\u7684\u5b58\u50a8\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u5f39\u6027\u53ef\u6269\u5c55\u7684\u8ba1\u7b97\u80fd\u529b\u3002\u7531\u4e8e\u6570\u636e\u4e0d\u5b58\u50a8\u5728 CN \u8282\u70b9\u4e2d\uff0c\u56e0\u6b64\u96c6\u7fa4\u65e0\u9700\u8fdb\u884c\u8de8\u8282\u70b9\u6570\u636e\u8fc1\u79fb\u6216 Shuffle \u5373\u53ef\u5b8c\u6210\u6269\u7f29\u5bb9\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u70ed\u6570\u636e\u7684\u672c\u5730\u78c1\u76d8\u7f13\u5b58\uff0c\u7528\u4ee5\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u53ef\u8c03\u6574\u7f13\u5b58\u70ed\u6570\u636e\u7684\u751f\u5b58\u65f6\u95f4 (TTL)\uff0c\u7cfb\u7edf\u81ea\u52a8\u5220\u9664\u8fc7\u671f\u7f13\u5b58\u6570\u636e\uff0c\u8282\u7701\u672c\u5730\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u53ef\u9009\u5f02\u6b65\u5bfc\u5165\u6570\u636e\u81f3\u5bf9\u8c61\u5b58\u50a8\uff0c\u63d0\u9ad8\u5bfc\u5165\u6548\u7387\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u67b6\u6784\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Shared-data Architecture",src:n(37234).Z+"",width:"902",height:"668"})}),"\n",(0,r.jsx)(s.p,{children:"\u8be5\u529f\u80fd\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u90e8\u7f72-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",children:"\u90e8\u7f72 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u7684\u90e8\u7f72\u65b9\u5f0f\u4e0e\u5b58\u7b97\u4e00\u4f53\u96c6\u7fa4\u7684\u90e8\u7f72\u65b9\u5f0f\u7c7b\u4f3c\uff0c\u4f46\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u9700\u8981\u90e8\u7f72 CN \u8282\u70b9\u800c\u975e BE \u8282\u70b9\u3002\u672c\u5c0f\u8282\u4ec5\u5217\u51fa\u90e8\u7f72 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u65f6\u9700\u8981\u6dfb\u52a0\u5230 FE \u548c CN \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"fe.conf"})," \u548c ",(0,r.jsx)(s.strong,{children:"cn.conf"})," \u4e2d\u7684\u989d\u5916\u914d\u7f6e\u9879\u3002\u6709\u5173\u90e8\u7f72 StarRocks \u96c6\u7fa4\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/doc/zh/3.0/deployment/deploy_manually",children:"\u90e8\u7f72 StarRocks"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4-fe-\u8282\u70b9",children:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4 FE \u8282\u70b9"}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u542f\u52a8 FE \u4e4b\u524d\uff0c\u5728 FE \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"fe.conf"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u914d\u7f6e\u9879"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"run_mode"}),(0,r.jsxs)(s.td,{children:["StarRocks \u96c6\u7fa4\u7684\u8fd0\u884c\u6a21\u5f0f\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"shared_data"})," \u548c ",(0,r.jsx)(s.code,{children:"shared_nothing"})," (\u9ed8\u8ba4)\u3002",(0,r.jsx)(s.code,{children:"shared_data"})," \u8868\u793a\u5728\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\u8fd0\u884c StarRocks\u3002",(0,r.jsx)(s.code,{children:"shared_nothing"})," \u8868\u793a\u5728\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\u4e0b\u8fd0\u884c StarRocks\u3002",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"}),(0,r.jsx)("br",{}),"StarRocks \u96c6\u7fa4\u4e0d\u652f\u6301\u5b58\u7b97\u5206\u79bb\u548c\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\u6df7\u5408\u90e8\u7f72\u3002",(0,r.jsx)("br",{}),"\u8bf7\u52ff\u5728\u96c6\u7fa4\u90e8\u7f72\u5b8c\u6210\u540e\u66f4\u6539 ",(0,r.jsx)(s.code,{children:"run_mode"}),"\uff0c\u5426\u5219\u5c06\u5bfc\u81f4\u96c6\u7fa4\u65e0\u6cd5\u518d\u6b21\u542f\u52a8\u3002\u4e0d\u652f\u6301\u4ece\u5b58\u7b97\u4e00\u4f53\u96c6\u7fa4\u8f6c\u6362\u4e3a\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloud_native_meta_port"}),(0,r.jsxs)(s.td,{children:["\u4e91\u539f\u751f\u5143\u6570\u636e\u670d\u52a1\u76d1\u542c\u7aef\u53e3\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"6090"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloud_native_storage_type"}),(0,r.jsxs)(s.td,{children:["\u60a8\u4f7f\u7528\u7684\u5b58\u50a8\u7c7b\u578b\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"S3"}),"\uff08\u9ed8\u8ba4\uff09\u548c ",(0,r.jsx)(s.code,{children:"HDFS"}),"\u3002\u5982\u679c\u60a8\u5c06\u6b64\u9879\u6307\u5b9a\u4e3a ",(0,r.jsx)(s.code,{children:"S3"}),"\uff0c\u5219\u5fc5\u987b\u6dfb\u52a0\u4ee5 ",(0,r.jsx)(s.code,{children:"aws_s3"})," \u4e3a\u524d\u7f00\u7684\u914d\u7f6e\u9879\u3002\u5982\u679c\u5c06\u6b64\u9879\u6307\u5b9a\u4e3a ",(0,r.jsx)(s.code,{children:"HDFS"}),"\uff0c\u5219\u53ea\u9700\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"cloud_native_hdfs_url"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloud_native_hdfs_url"}),(0,r.jsxs)(s.td,{children:["HDFS \u5b58\u50a8\u7684 URL\uff0c\u4f8b\u5982 ",(0,r.jsx)(s.code,{children:"hdfs://127.0.0.1:9000/user/xxx/starrocks/"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_path"}),(0,r.jsxs)(s.td,{children:["\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u7684 S3 \u5b58\u50a8\u7a7a\u95f4\u8def\u5f84\uff0c\u7531 S3 \u5b58\u50a8\u6876\u7684\u540d\u79f0\u53ca\u5176\u4e0b\u7684\u5b50\u8def\u5f84\uff08\u5982\u6709\uff09\u7ec4\u6210\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"testbucket/subpath"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_region"}),(0,r.jsxs)(s.td,{children:["\u9700\u8bbf\u95ee\u7684 S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u5730\u533a\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"us-west-2"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_endpoint"}),(0,r.jsxs)(s.td,{children:["\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u8fde\u63a5\u5730\u5740\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_use_aws_sdk_default_behavior"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u4f7f\u7528 AWS SDK \u9ed8\u8ba4\u7684\u8ba4\u8bc1\u51ed\u8bc1\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"})," (\u9ed8\u8ba4)\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_use_instance_profile"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u4f7f\u7528 Instance Profile \u6216 Assumed Role \u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u8bbf\u95ee S3\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"})," (\u9ed8\u8ba4)\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528 IAM \u7528\u6237\u51ed\u8bc1\uff08Access Key \u548c Secret Key\uff09\u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"false"}),"\uff0c\u5e76\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"aws_s3_access_key"})," \u548c ",(0,r.jsx)(s.code,{children:"aws_s3_secret_key"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528 Instance Profile \u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528 Assumed Role \u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\uff0c\u5e76\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"aws_s3_iam_role_arn"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528\u5916\u90e8 AWS \u8d26\u6237\u901a\u8fc7 Assumed Role \u8ba4\u8bc1\u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u989d\u5916\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"aws_s3_external_id"}),"\u3002"]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_access_key"}),(0,r.jsx)(s.td,{children:"\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Access Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_secret_key"}),(0,r.jsx)(s.td,{children:"\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Secret Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_iam_role_arn"}),(0,r.jsx)(s.td,{children:"\u6709\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u6743\u9650 IAM Role \u7684 ARN\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws_s3_external_id"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u8de8 AWS \u8d26\u6237\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u5916\u90e8 ID\u3002"})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 HDFS \u5b58\u50a8\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = HDFS\ncloud_native_hdfs_url = <hdfs_url>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 AWS S3\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 AWS SDK \u9ed8\u8ba4\u7684\u8ba4\u8bc1\u51ed\u8bc1\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u5982 us-west-2\naws_s3_region = <region>\n\n# \u5982 https://s3.us-west-2.amazonaws.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_use_aws_sdk_default_behavior = true\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 IAM user-based \u8ba4\u8bc1\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\naws_s3_path = <s3_path>\naws_s3_region = <region>\naws_s3_endpoint = <endpoint_url>\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Instance Profile \u8ba4\u8bc1\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u5982 us-west-2\naws_s3_region = <region>\n\n# \u5982 https://s3.us-west-2.amazonaws.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_use_instance_profile = true\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Assumed Role \u8ba4\u8bc1\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u5982 us-west-2\naws_s3_region = <region>\n\n# \u5982 https://s3.us-west-2.amazonaws.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_use_instance_profile = true\naws_s3_iam_role_arn = <role_arn>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u5916\u90e8 AWS \u8d26\u6237\u901a\u8fc7 Assumed Role \u8ba4\u8bc1\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u5982 us-west-2\naws_s3_region = <region>\n\n# \u5982 https://s3.us-west-2.amazonaws.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_use_instance_profile = true\naws_s3_iam_role_arn = <role_arn>\naws_s3_external_id = <external_id>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 GCP Cloud Storage\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1aus-east-1\naws_s3_region = <region>\n\n# \u4f8b\u5982\uff1ahttps://storage.googleapis.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u963f\u91cc\u4e91 OSS\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1acn-zhangjiakou\naws_s3_region = <region>\n\n# \u4f8b\u5982\uff1ahttps://oss-cn-zhangjiakou-internal.aliyuncs.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u534e\u4e3a\u4e91 OBS\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1acn-north-4\naws_s3_region = <region>\n\n# \u4f8b\u5982\uff1ahttps://obs.cn-north-4.myhuaweicloud.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u817e\u8baf\u4e91 COS\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1aap-beijing\naws_s3_region = <region>\n\n# \u4f8b\u5982\uff1ahttps://cos.ap-beijing.myqcloud.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u706b\u5c71\u5f15\u64ce TOS\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1acn-beijing\naws_s3_region = <region>\n\n# \u4f8b\u5982\uff1ahttps://tos-s3-cn-beijing.ivolces.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u91d1\u5c71\u4e91\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1aBEIJING\naws_s3_region = <region>\n\n# \u6ce8\u610f\u8bf7\u4f7f\u7528\u4e09\u7ea7\u57df\u540d, \u91d1\u5c71\u4e91\u4e0d\u652f\u6301\u4e8c\u7ea7\u57df\u540d\n# \u4f8b\u5982\uff1ajeff-test.ks3-cn-beijing.ksyuncs.com\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 MinIO\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1aus-east-1\naws_s3_region = <region>\n\n# \u4f8b\u5982\uff1ahttp://172.26.xx.xxx:39000\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Ceph S3\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"run_mode = shared_data\ncloud_native_meta_port = <meta_port>\ncloud_native_storage_type = S3\n\n# \u5982 testbucket/subpath\naws_s3_path = <s3_path>\n\n# \u4f8b\u5982\uff1ahttp://172.26.xx.xxx:7480\naws_s3_endpoint = <endpoint_url>\n\naws_s3_access_key = <access_key>\naws_s3_secret_key = <secret_key>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4-cn-\u8282\u70b9",children:"\u914d\u7f6e\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4 CN \u8282\u70b9"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5728\u542f\u52a8 CN \u4e4b\u524d"}),"\uff0c\u5728 CN \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"cn.conf"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"starlet_port = <starlet_port>\nstorage_root_path = <storage_root_path>\n"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u914d\u7f6e\u9879"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"starlet_port"}),(0,r.jsxs)(s.td,{children:["\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\uff0c\u7528\u4e8e CN \u5fc3\u8df3\u670d\u52a1\u7684\u7aef\u53e3\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"9070"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"storage_root_path"}),(0,r.jsxs)(s.td,{children:["\u672c\u5730\u7f13\u5b58\u6570\u636e\u4f9d\u8d56\u7684\u5b58\u50a8\u76ee\u5f55\u4ee5\u53ca\u8be5\u5b58\u50a8\u4ecb\u8d28\u7684\u7c7b\u578b\uff0c\u591a\u5757\u76d8\u914d\u7f6e\u4f7f\u7528\u5206\u53f7\uff08;\uff09\u9694\u5f00\u3002\u5982\u679c\u4e3a SSD \u78c1\u76d8\uff0c\u9700\u5728\u8def\u5f84\u540e\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:",medium:ssd"}),"\uff0c\u5982\u679c\u4e3a HDD \u78c1\u76d8\uff0c\u9700\u5728\u8def\u5f84\u540e\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:",medium:hdd"}),"\u3002\u4f8b\u5982\uff1a",(0,r.jsx)(s.code,{children:"/data1,medium:hdd;/data2,medium:ssd"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"${STARROCKS_HOME}/storage"}),"\u3002"]})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.p,{children:["\u672c\u5730\u7f13\u5b58\u6570\u636e\u5c06\u5b58\u50a8\u5728 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"<storage_root_path>/starlet_cache"})})," \u8def\u5f84\u4e0b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4",children:"\u4f7f\u7528 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u7684\u4f7f\u7528\u4e5f\u7c7b\u4f3c\u4e8e\u666e\u901a StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,r.jsx)(s.p,{children:"\u8fde\u63a5\u5230 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u540e\uff0c\u60a8\u9700\u8981\u521b\u5efa\u6570\u636e\u5e93\uff0c\u5e76\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868\u3002\u76ee\u524d\uff0cStarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u6a21\u578b\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u660e\u7ec6\u6a21\u578b\uff08Duplicate Key\uff09"}),"\n",(0,r.jsx)(s.li,{children:"\u805a\u5408\u6a21\u578b\uff08Aggregate Key\uff09"}),"\n",(0,r.jsx)(s.li,{children:"\u66f4\u65b0\u6a21\u578b\uff08Unique Key\uff09"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.p,{children:["\u76ee\u524d\uff0cStarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u6682\u4e0d\u652f\u6301",(0,r.jsx)(s.strong,{children:"\u4e3b\u952e\u6a21\u578b"}),"\uff08Primary Key\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u6570\u636e\u5e93 ",(0,r.jsx)(s.code,{children:"cloud_db"}),"\uff0c\u5e76\u57fa\u4e8e\u660e\u7ec6\u6a21\u578b\u521b\u5efa\u8868 ",(0,r.jsx)(s.code,{children:"detail_demo"}),"\uff0c\u542f\u7528\u672c\u5730\u78c1\u76d8\u7f13\u5b58\uff0c\u5c06\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a 30 \u5929\uff0c\u5e76\u7981\u7528\u5f02\u6b65\u6570\u636e\u5bfc\u5165\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE DATABASE cloud_db;\nUSE cloud_db;\nCREATE TABLE IF NOT EXISTS detail_demo (\n    recruit_date  DATE           NOT NULL COMMENT "YYYY-MM-DD",\n    region_num    TINYINT        COMMENT "range [-128, 127]",\n    num_plate     SMALLINT       COMMENT "range [-32768, 32767] ",\n    tel           INT            COMMENT "range [-2147483648, 2147483647]",\n    id            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    password      LARGEINT       COMMENT "range [-2^127 + 1 ~ 2^127 - 1]",\n    name          CHAR(20)       NOT NULL COMMENT "range char(m),m in (1-255) ",\n    profile       VARCHAR(500)   NOT NULL COMMENT "upper limit value 65533 bytes",\n    ispass        BOOLEAN        COMMENT "true/false"\n)\nDUPLICATE KEY(recruit_date, region_num)\nDISTRIBUTED BY HASH(recruit_date, region_num)\nPROPERTIES (\n    "enable_storage_cache" = "true",\n    "storage_cache_ttl" = "2592000",\n    "enable_async_write_back" = "false"\n);\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u6ce8\u610f"}),"\n",(0,r.jsxs)(s.p,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(s.a,{href:"/doc/zh/3.0/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u9664\u4e86\u5e38\u89c4\u8868 PROPERTIES \u4e4b\u5916\uff0c\u60a8\u8fd8\u9700\u8981\u5728\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u4ee5\u4e0b PROPERTIES\uff1a"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5c5e\u6027"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enable_storage_cache"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u542f\u7528\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"}),"\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u65f6\uff0c\u6570\u636e\u4f1a\u540c\u65f6\u5bfc\u5165\u5bf9\u8c61\u5b58\u50a8\uff08\u6216 HDFS\uff09\u548c\u672c\u5730\u78c1\u76d8\uff08\u4f5c\u4e3a\u67e5\u8be2\u52a0\u901f\u7684\u7f13\u5b58\uff09\u3002"]}),(0,r.jsxs)("li",{children:["\u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"false"})," \u65f6\uff0c\u6570\u636e\u4ec5\u5bfc\u5165\u5230\u5bf9\u8c61\u5b58\u50a8\u4e2d\u3002"]})]}),(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"}),(0,r.jsx)("br",{}),"\u5982\u9700\u542f\u7528\u672c\u5730\u78c1\u76d8\u7f13\u5b58\uff0c\u5fc5\u987b\u5728 CN \u914d\u7f6e\u9879 ",(0,r.jsx)(s.code,{children:"storage_root_path"})," \u4e2d\u6307\u5b9a\u78c1\u76d8\u76ee\u5f55\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"storage_cache_ttl"}),(0,r.jsxs)(s.td,{children:["\u542f\u7528\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u540e\uff0cStarRocks \u5728\u672c\u5730\u78c1\u76d8\u4e2d\u7f13\u5b58\u70ed\u6570\u636e\u7684\u5b58\u6d3b\u65f6\u95f4\u3002\u8fc7\u671f\u6570\u636e\u5c06\u4ece\u672c\u5730\u78c1\u76d8\u4e2d\u5220\u9664\u3002\u5982\u679c\u5c06\u8be5\u503c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"-1"}),"\uff0c\u5219\u7f13\u5b58\u6570\u636e\u4e0d\u4f1a\u8fc7\u671f\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"2592000"}),"\uff0830 \u5929\uff09\u3002",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"}),(0,r.jsx)("br",{}),"\u5f53\u7981\u7528\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u65f6\uff0c\u60a8\u65e0\u9700\u8bbe\u7f6e\u8be5\u914d\u7f6e\u9879\u3002\u5982\u679c\u60a8\u7981\u7528\u4e86\u672c\u5730\u78c1\u76d8\u7f13\u5b58\uff0c\u5e76\u4e14\u5c06\u6b64\u9879\u8bbe\u7f6e\u4e3a\u9664 ",(0,r.jsx)(s.code,{children:"0"})," \u4ee5\u5916\u7684\u503c\uff0cStarRocks \u5c06\u51fa\u73b0\u672a\u77e5\u884c\u4e3a\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enable_async_write_back"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5141\u8bb8\u6570\u636e\u5f02\u6b65\u5199\u5165\u5bf9\u8c61\u5b58\u50a8\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u65f6\uff0c\u5bfc\u5165\u4efb\u52a1\u5728\u6570\u636e\u5199\u5165\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u540e\u7acb\u5373\u8fd4\u56de\u6210\u529f\uff0c\u6570\u636e\u5c06\u5f02\u6b65\u5199\u5165\u5bf9\u8c61\u5b58\u50a8\u3002\u5141\u8bb8\u6570\u636e\u5f02\u6b65\u5199\u5165\u53ef\u4ee5\u63d0\u5347\u5bfc\u5165\u6027\u80fd\uff0c\u4f46\u5982\u679c\u7cfb\u7edf\u53d1\u751f\u6545\u969c\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u4e00\u5b9a\u7684\u6570\u636e\u53ef\u9760\u6027\u98ce\u9669\u3002"]}),(0,r.jsxs)("li",{children:["\u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"false"})," \u65f6\uff0c\u53ea\u6709\u5728\u6570\u636e\u540c\u65f6\u5199\u5165\u5bf9\u8c61\u5b58\u50a8\u548c\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u540e\uff0c\u5bfc\u5165\u4efb\u52a1\u624d\u4f1a\u8fd4\u56de\u6210\u529f\u3002\u7981\u7528\u6570\u636e\u5f02\u6b65\u5199\u5165\u4fdd\u8bc1\u4e86\u66f4\u9ad8\u7684\u53ef\u7528\u6027\uff0c\u4f46\u4f1a\u5bfc\u81f4\u8f83\u4f4e\u7684\u5bfc\u5165\u6027\u80fd\u3002"]})]})]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"\u67e5\u770b\u8868\u4fe1\u606f",children:"\u67e5\u770b\u8868\u4fe1\u606f"}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.code,{children:'SHOW PROC "/dbs/<db_id>"'})," \u67e5\u770b\u7279\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u8868\u7684\u4fe1\u606f\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/Administration/SHOW_PROC",children:"SHOW PROC"}),"\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'mysql> SHOW PROC "/dbs/xxxxx";\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| TableId | TableName   | IndexNum | PartitionColumnName | PartitionNum | State  | Type         | LastConsistencyCheckTime | ReplicaCount | PartitionType | StoragePath                  |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| 12003   | detail_demo | 1        | NULL                | 1            | NORMAL | CLOUD_NATIVE | NULL                     | 8            | UNPARTITIONED | s3://xxxxxxxxxxxxxx/1/12003/ |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n'})}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u4e2d\u8868\u7684 ",(0,r.jsx)(s.code,{children:"Type"})," \u4e3a ",(0,r.jsx)(s.code,{children:"CLOUD_NATIVE"}),"\u3002",(0,r.jsx)(s.code,{children:"StoragePath"})," \u5b57\u6bb5\u4e3a\u8868\u5728\u5bf9\u8c61\u5b58\u50a8\u4e2d\u7684\u8def\u5f84\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u5411-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u5bfc\u5165\u6570\u636e",children:"\u5411 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u5bfc\u5165\u6570\u636e"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u652f\u6301 StarRocks \u63d0\u4f9b\u7684\u6240\u6709\u5bfc\u5165\u65b9\u5f0f\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/doc/zh/3.0/loading/Loading_intro",children:"\u5bfc\u5165\u603b\u89c8"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u5728-starrocks-\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u67e5\u8be2",children:"\u5728 StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u67e5\u8be2"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u652f\u6301 StarRocks \u63d0\u4f9b\u7684\u6240\u6709\u67e5\u8be2\u65b9\u5f0f\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/doc/zh/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"}),"\u3002"]})]})}const _=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},37234:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/share_data_arch-1ea64217887964b4053c012cc808cb81.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>c});var r=n(67294);const t=r.createContext({});function c(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||a:c(e),r.createElement(t.Provider,{value:d},s)}}}]);