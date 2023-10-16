"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27153],{79741:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=s(85893),o=s(11151);const l={displayed_sidebar:"Chinese"},i="ST_Polygon, ST_PolyFromText, ST_PolygonFromText",c={id:"sql-reference/sql-functions/spatial-functions/st_polygon",title:"ST_Polygon, ST_PolyFromText, ST_PolygonFromText",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_polygon.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_polygon",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_polygon",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/spatial-functions/st_polygon.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ST_Point",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_point"},next:{title:"ST_X",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_x"}},r={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"st_polygon-st_polyfromtext-st_polygonfromtext",children:"ST_Polygon, ST_PolyFromText, ST_PolygonFromText"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u4e00\u4e2a WKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u591a\u8fb9\u5f62\u5185\u5b58\u5f62\u5f0f\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"ST_Polygon(wkt)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"wkt"}),": \u5f85\u8f6c\u5316\u7684 WKT\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a GEOMETRY\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>l});var t=s(67294);const o=t.createContext({});function l(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:l(e),t.createElement(o.Provider,{value:c},n)}}}]);