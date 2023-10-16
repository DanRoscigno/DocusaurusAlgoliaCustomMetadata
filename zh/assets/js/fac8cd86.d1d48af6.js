"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68882],{83598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=a(85893),o=a(11151);const r={displayed_sidebar:"English"},n=void 0,d={id:"assets/commonMarkdown/sharedDataCNconf",title:"sharedDataCNconf",description:"Before starting CNs, add the following configuration items in the CN configuration file cn.conf:",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataCNconf.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataCNconf",permalink:"/doc/zh/docs/assets/commonMarkdown/sharedDataCNconf",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataCNconf.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},i={},c=[{value:"starlet_port",id:"starlet_port",level:4},{value:"storage_root_path",id:"storage_root_path",level:4}];function h(e){const t=Object.assign({p:"p",strong:"strong",pre:"pre",code:"code",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Before starting CNs"}),", add the following configuration items in the CN configuration file ",(0,s.jsx)(t.strong,{children:"cn.conf"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Properties",children:"starlet_port = <starlet_port>\nstorage_root_path = <storage_root_path>\n"})}),"\n",(0,s.jsx)(t.h4,{id:"starlet_port",children:"starlet_port"}),"\n",(0,s.jsxs)(t.p,{children:["The CN heartbeat service port for the StarRocks shared-data cluster. Default value: ",(0,s.jsx)(t.code,{children:"9070"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"storage_root_path",children:"storage_root_path"}),"\n",(0,s.jsxs)(t.p,{children:["The storage volume directory that the local cached data depends on and the medium type of the storage. Multiple volumes are separated by semicolon (;). If the storage medium is SSD, add ",(0,s.jsx)(t.code,{children:",medium:ssd"})," at the end of the directory. If the storage medium is HDD, add ",(0,s.jsx)(t.code,{children:",medium:hdd"})," at the end of the directory. Example: ",(0,s.jsx)(t.code,{children:"/data1,medium:hdd;/data2,medium:ssd"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The default value for ",(0,s.jsx)(t.code,{children:"storage_root_path"})," is ",(0,s.jsx)(t.code,{children:"${STARROCKS_HOME}/storage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Local cache is effective when queries are frequent and the data being queried is recent, but there are cases that you may wish to turn off the local cache completely."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"In a Kubernetes environment with CN pods that scale up and down in number on demand, the pods may not have storage volumes attached."}),"\n",(0,s.jsx)(t.li,{children:"When the data being queried is in a data lake in remote storage and most of it is archive (old) data. If the queries are infrequent the data cache will have a low hit ratio and the benefit may not be worth having the cache."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To turn off the data cache set:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Properties",children:"storage_root_path =\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.p,{children:["The data is cached under the directory ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"<storage_root_path>/starlet_cache"})}),"."]}),"\n"]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>d,ah:()=>r});var s=a(67294);const o=s.createContext({});function r(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function d({components:e,children:t,disableParentContext:a}){let d;return d=a?"function"==typeof e?e({}):e||n:r(e),s.createElement(o.Provider,{value:d},t)}}}]);