"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38822],{9550:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=s(85893),i=s(11151);const r={},a="ADMIN SET REPLICA STATUS",l={id:"sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",title:"ADMIN SET REPLICA STATUS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",permalink:"/doc/en/3.0/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"ADMIN SET CONFIG",permalink:"/doc/en/3.0/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG"},next:{title:"ADMIN SHOW CONFIG",permalink:"/doc/en/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"admin-set-replica-status",children:"ADMIN SET REPLICA STATUS"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This statement is used to set the status of the specified replicas."}),"\n",(0,n.jsx)(t.p,{children:"This command currently only used to manually set the status of some replicas to BAD or OK, allowing the system to automatically repair these replicas."}),"\n",(0,n.jsx)(t.p,{children:"Syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS\nPROPERTIES ("key" = "value", ...)\n'})}),"\n",(0,n.jsx)(t.p,{children:"The following attributes are currently supported:"}),"\n",(0,n.jsx)(t.p,{children:"\"table_id': required. Specify a Tablet Id."}),"\n",(0,n.jsx)(t.p,{children:'"backend_id": required. Specify a Backend Id.'}),"\n",(0,n.jsx)(t.p,{children:'"status": required. Specify the status. Currently only "bad" and "ok" are supported.'}),"\n",(0,n.jsx)(t.p,{children:"If the specified replica does not exist or its status is bad, the replica will be ignored."}),"\n",(0,n.jsx)(t.p,{children:"Note:"}),"\n",(0,n.jsx)(t.p,{children:"Replicas set to Bad status may be dropped immediately, please proceed with caution."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set the replica status of tablet 10003 on BE 10001 to bad."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set the replica status of tablet 10003 on BE 10001 to ok."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n'})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:l},t)}}}]);