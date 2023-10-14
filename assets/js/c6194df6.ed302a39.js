"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77923],{87467:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=t(85893),r=t(11151);const l={},a="\u6570\u636e\u7c7b\u578b\u6982\u8ff0",c={id:"sql-reference/sql-statements/data-types/data-type-list",title:"\u6570\u636e\u7c7b\u578b\u6982\u8ff0",description:"StarRocks \u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\uff1a\u6570\u503c\u7c7b\u578b\u3001\u5b57\u7b26\u4e32\u7c7b\u578b\u3001\u65e5\u671f\u7c7b\u578b\u3001\u534a\u7ed3\u6784\u5316\u7c7b\u578b\u3001\u5176\u4ed6\u7c7b\u578b\u3002\u60a8\u5728\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u7c7b\u578b\u7684\u5217\uff0c\u5411\u8868\u4e2d\u5bfc\u5165\u8be5\u7c7b\u578b\u7684\u6570\u636e\u5e76\u67e5\u8be2\u6570\u636e\u3002",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/data-types/data-type-list.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/data-type-list",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-types/data-type-list",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/data-type-list.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"VARCHAR",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-types/VARCHAR"},next:{title:"\u5173\u952e\u5b57",permalink:"/doc/zh/2.5/sql-reference/sql-statements/keywords"}},d={},i=[{value:"\u6570\u503c\u7c7b\u578b",id:"\u6570\u503c\u7c7b\u578b",level:2},{value:"\u5b57\u7b26\u4e32\u7c7b\u578b",id:"\u5b57\u7b26\u4e32\u7c7b\u578b",level:2},{value:"\u65e5\u671f\u7c7b\u578b",id:"\u65e5\u671f\u7c7b\u578b",level:2},{value:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",id:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",level:2},{value:"\u5176\u4ed6\u7c7b\u578b",id:"\u5176\u4ed6\u7c7b\u578b",level:2}];function h(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u6570\u636e\u7c7b\u578b\u6982\u8ff0",children:"\u6570\u636e\u7c7b\u578b\u6982\u8ff0"}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks \u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\uff1a",(0,n.jsx)(s.a,{href:"#%E6%95%B0%E5%80%BC%E7%B1%BB%E5%9E%8B",children:"\u6570\u503c\u7c7b\u578b"}),"\u3001",(0,n.jsx)(s.a,{href:"#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B",children:"\u5b57\u7b26\u4e32\u7c7b\u578b"}),"\u3001",(0,n.jsx)(s.a,{href:"#%E6%97%A5%E6%9C%9F%E7%B1%BB%E5%9E%8B",children:"\u65e5\u671f\u7c7b\u578b"}),"\u3001",(0,n.jsx)(s.a,{href:"#%E5%8D%8A%E7%BB%93%E6%9E%84%E5%8C%96%E7%B1%BB%E5%9E%8B",children:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b"}),"\u3001",(0,n.jsx)(s.a,{href:"#%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B",children:"\u5176\u4ed6\u7c7b\u578b"}),"\u3002\u60a8\u5728\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u7c7b\u578b\u7684\u5217\uff0c\u5411\u8868\u4e2d\u5bfc\u5165\u8be5\u7c7b\u578b\u7684\u6570\u636e\u5e76\u67e5\u8be2\u6570\u636e\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u6570\u503c\u7c7b\u578b",children:"\u6570\u503c\u7c7b\u578b"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/TINYINT",children:"TINYINT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/SMALLINT",children:"SMALLINT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/INT",children:"INT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/BIGINT",children:"BIGINT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/LARGEINT",children:"LARGEINT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/DECIMAL",children:"DECIMAL"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/DOUBLE",children:"DOUBLE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/FLOAT",children:"FLOAT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/BOOLEAN",children:"BOOLEAN"})}),"\n",(0,n.jsx)(s.li,{children:"PERCENTILE"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5b57\u7b26\u4e32\u7c7b\u578b",children:"\u5b57\u7b26\u4e32\u7c7b\u578b"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/CHAR",children:"CHAR"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/STRING",children:"STRING"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/VARCHAR",children:"VARCHAR"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u65e5\u671f\u7c7b\u578b",children:"\u65e5\u671f\u7c7b\u578b"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/DATE",children:"DATE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/DATETIME",children:"DATETIME"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",children:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/Array",children:"ARRAY"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/JSON",children:"JSON"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5176\u4ed6\u7c7b\u578b",children:"\u5176\u4ed6\u7c7b\u578b"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/BITMAP",children:"BITMAP"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/data-types/HLL",children:"HLL"})}),"\n"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>l});var n=t(67294);const r=n.createContext({});function l(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:l(e),n.createElement(r.Provider,{value:c},s)}}}]);