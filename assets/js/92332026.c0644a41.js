"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76734],{94419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(85893),i=t(11151);const o={},c="ST_Point",l={id:"sql-reference/sql-functions/spatial-functions/st_point",title:"ST_Point",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-functions/spatial-functions/st_point.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_point",permalink:"/doc/zh/2.5/sql-reference/sql-functions/spatial-functions/st_point",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/spatial-functions/st_point.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"ST_LineFromText, ST_LineStringFromText",permalink:"/doc/zh/2.5/sql-reference/sql-functions/spatial-functions/st_linefromtext"},next:{title:"ST_Polygon, ST_PolyFromText, ST_PolygonFromText",permalink:"/doc/zh/2.5/sql-reference/sql-functions/spatial-functions/st_polygon"}},r={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"st_point",children:"ST_Point"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u7ed9\u5b9a\u7684 X \u5750\u6807\u503c\u3001Y \u5750\u6807\u503c\u8fd4\u56de\u5bf9\u5e94\u7684 Point\uff0c\u5f53\u524d\u8fd9\u4e2a\u503c\u53ea\u5728\u7403\u9762\u96c6\u5408\u4e0a\u6709\u610f\u4e49\uff0cX/Y \u5bf9\u5e94\u7684\u662f\u7ecf\u5ea6/\u7eac\u5ea6(longitude/latitude)\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ST_Point(x, y)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"}),": X \u5750\u6807\u503c\uff0c\u652f\u6301\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"y"}),": Y \u5750\u6807\u503c\uff0c\u652f\u6301\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a POINT\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>o});var s=t(67294);const i=s.createContext({});function o(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:o(e),s.createElement(i.Provider,{value:l},n)}}}]);