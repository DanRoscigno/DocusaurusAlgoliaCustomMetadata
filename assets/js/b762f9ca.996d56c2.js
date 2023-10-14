"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75616],{54244:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=l(85893),t=l(11151);const o={},c="Connector",r={id:"using_starrocks/Connector",title:"Connector",description:"\u6982\u5ff5",source:"@site/chinese_versioned_docs/version-2.5/using_starrocks/Connector.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Connector",permalink:"/doc/zh/2.5/using_starrocks/Connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/using_starrocks/Connector.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Colocate Join",permalink:"/doc/zh/2.5/using_starrocks/Colocate_join"},next:{title:"CBO \u7edf\u8ba1\u4fe1\u606f",permalink:"/doc/zh/2.5/using_starrocks/Cost_based_optimizer"}},i={},s=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Connector",id:"connector-1",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u521b\u5efaCatalog",id:"\u521b\u5efacatalog",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:4},{value:"\u5220\u9664Catalog",id:"\u5220\u9664catalog",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u4f7f\u7528Catalog",id:"\u4f7f\u7528catalog",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"Hive Connector\u5143\u6570\u636e\u540c\u6b65",id:"hive-connector\u5143\u6570\u636e\u540c\u6b65",level:3}];function d(e){const a=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",h4:"h4",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"connector",children:"Connector"}),"\n",(0,n.jsx)(a.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,n.jsx)(a.h3,{id:"catalog",children:"Catalog"}),"\n",(0,n.jsxs)(a.p,{children:["StarRocks\u4e2d\u7684Catalog\u5305\u62ec\u4e24\u79cd\u7c7b\u578b\uff0c\u5206\u522b\u4e3aInternal Catalog\u4e0eExternal Catalog. Catalog\u5305\u542b\u7528\u6237\u6240\u6709\u7684Database. \u5f53\u524dStarRocks\u4e2d\u5b58\u5728\u4e00\u4e2a\u9ed8\u8ba4\u7684Internal Catalog\u5b9e\u4f8b\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a",(0,n.jsx)(a.code,{children:"default_catalog"}),". \u5bf9\u4e8e\u5b58\u50a8\u5728StarRocks\u4e2d\u7684Database/Table/View \u7b49\uff0c\u5747\u5728Internal Catalog\u4e0b\uff0c\u5982OlapTable\u548cExternal Hive Table\u3002\u5bf9\u4e8eExternal Catalog\uff0c\u662f\u7528\u6237\u901a\u8fc7\u6267\u884cCreate Catalog DDL\u8bed\u53e5\u6240\u5f97\u3002\u6bcf\u4e2aExternal Catalog\u4e0b\u5b58\u5728\u4e00\u4e2aConnector\u6765\u83b7\u53d6\u5916\u90e8\u7684\u6570\u636e\u6e90\u4fe1\u606f\u3002\u5f53\u524d\u7248\u672c\u4ec5\u652f\u6301Hive Connector. \u7528\u6237\u53ef\u6307\u5b9afully-qualified\u8fdb\u884c\u67e5\u8be2\u6307\u5b9acatalog\u7684\u6570\u636e\u8868\u3002\u5982\u901a\u8fc7\u6307\u5b9a",(0,n.jsx)(a.code,{children:"hive_catalog.hive_db.hive_table"}),"\u6765\u67e5\u8be2\u7528\u6237\u81ea\u5b9a\u4e49\u7684hive_catalog\u4e2d\u7684\u8868\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a",(0,n.jsx)(a.code,{children:"default_catalog.my_db.my_olap_table"}),"\u6765\u67e5\u8be2Olap\u8868\uff0c\u540c\u65f6\u4e5f\u53ef\u5bf9\u4e0d\u540ccatalog\u95f4\u7684\u6570\u636e\u8fdb\u884c\u8054\u90a6\u67e5\u8be2\u3002"]}),"\n",(0,n.jsx)(a.h3,{id:"connector-1",children:"Connector"}),"\n",(0,n.jsx)(a.p,{children:"StarRocks\u4e2d\u7684Connector\u4e3a\u7528\u6237\u81ea\u5b9aCatalog\u4e0b\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u8fde\u63a5\u5668\u3002\u901a\u8fc7Connector StarRocks\u53ef\u4ee5\u83b7\u53d6\u8fd0\u884c\u671f\u95f4\u9700\u8981\u7684\u8868\u4fe1\u606f\uff0c\u5f85\u626b\u63cf\u6587\u4ef6\u7b49\u4fe1\u606f\u3002\u5f53\u524d\u6bcf\u4e2aExternal Catalog\u5bf9\u5e94\u4e00\u4e2aConnector\u5b9e\u4f8b\u3002Connector\u662f\u5728\u521b\u5efaExternal Catalog\u8fc7\u7a0b\u4e2d\u5b8c\u6210\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684Connector."}),"\n",(0,n.jsx)(a.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,n.jsx)(a.h3,{id:"\u521b\u5efacatalog",children:"\u521b\u5efaCatalog"}),"\n",(0,n.jsx)(a.h4,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'CREATE EXTERNAL CATALOG <catalog_name> PROPERTIES ("key"="valuse", ...);\n'})}),"\n",(0,n.jsx)(a.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(a.p,{children:"\u521b\u5efahive catalog"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'CREATE EXTERNAL CATALOG hive_catalog0 PROPERTIES("type"="hive", "hive.metastore.uris"="thrift://127.0.0.1:9083");\n'})}),"\n",(0,n.jsx)(a.h4,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"\u5f53\u524d\u53ea\u652f\u6301\u521b\u5efahive external catalog"}),"\n",(0,n.jsxs)(a.li,{children:["PROPERTIES\u4e2d\u7684",(0,n.jsx)(a.code,{children:"type"}),"\u4e3a\u5fc5\u586b\u9879\uff0chive catalog\u4e2d\u7684\u503c\u4e3a",(0,n.jsx)(a.code,{children:"hive"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"\u5220\u9664catalog",children:"\u5220\u9664Catalog"}),"\n",(0,n.jsx)(a.h4,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"DROP EXTERNAL CATALOG <catalog_name>\n"})}),"\n",(0,n.jsx)(a.h4,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(a.p,{children:"\u5220\u9664 hive catalog"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"DROP EXTERNAL CATALOG hive_catalog;\n"})}),"\n",(0,n.jsx)(a.h3,{id:"\u4f7f\u7528catalog",children:"\u4f7f\u7528Catalog"}),"\n",(0,n.jsxs)(a.p,{children:["\u5f53\u524dCatalog\u5206\u4e3a\u4e24\u79cd\uff0c\u5206\u522b\u4e3aInternal Catalog\u4e0eExternal Catalog\u3002\u7528\u6237\u53ef\u901a\u8fc7",(0,n.jsx)(a.code,{children:"SHOW CATALOGS"}),"\u67e5\u770b\u5f53\u524d\u5b58\u5728\u54ea\u4e9bCatalog\u3002Internal Catalog\u5728StarRocks\u4e2d\u53ea\u5b58\u5728\u4e00\u4e2a\u9ed8\u8ba4\u5b9e\u4f8b\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,n.jsx)(a.code,{children:"default_catalog"}),"\u3002\u7528\u6237\u5728\u4ecemysql client\u767b\u5f55StarRocks\u4e4b\u540e\uff0c\u5f53\u524d\u8fde\u63a5\u7684\u9ed8\u8ba4Catalog\u4e3a",(0,n.jsx)(a.code,{children:"default_catalog"}),"\uff0c\u5982\u679c\u7528\u6237\u53ea\u4f7f\u7528Internal Catalog\u4e2d\u7684OLAP\u8868\u529f\u80fd\uff0c\u5176\u4f7f\u7528\u65b9\u5f0f\u4e0e\u539f\u6709\u4fdd\u6301\u4e0d\u53d8\u3002\u7528\u6237\u53ef\u901a\u8fc7",(0,n.jsx)(a.code,{children:"show databases"}),"\u67e5\u770bInternal Catalog\u4e2d\u6709\u54ea\u4e9bdatabases\u3002\n\u5bf9\u4e8eExternal Catalog\uff0c\u7528\u6237\u53ef\u4f7f\u7528",(0,n.jsx)(a.code,{children:"SHOW DATABASES FROM <external_catalog_name>"}),"\u7684\u65b9\u5f0f\u67e5\u770b\u5b58\u5728\u54ea\u4e9bDatabase\uff0c\u7136\u540e\u53ef\u901a\u8fc7",(0,n.jsx)(a.code,{children:"USE external_catalog.db"}),"\u7684\u65b9\u5f0f\u5207\u6362\u5f53\u524d\u8fde\u63a5\u7684current_catalog\u548ccurrent_db. \u5f53\u524d\u53ea\u652f\u6301Use\u5230DB\u7ea7\u522b\uff0c\u6682\u4e0d\u652f\u6301Use\u5230Catalog\u7ea7\u522b\uff0c\u540e\u9762\u4f1a\u9646\u7eed\u5f00\u653e\u8be5\u529f\u80fd\u3002"]}),"\n",(0,n.jsx)(a.h4,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- \u5728default_catalog\u4e0b\uff0cuse olap_db\u4f5c\u4e3acurrent database;\nUSE olap_db;\n\n-- \u5728default_catalog.olap_db\u4e0b\u67e5\u8be2olap_table;\nSELECT * FROM olap_table limit 1;\n\n-- \u5728default_catalog.olap_db\u4e0b\u67e5\u8be2external catalog\u4e2d\u7684\u8868\uff0c\u9700\u8981\u5199external table\u7684\u5168\u540d\u3002\nSELECT * FROM hive_catalog.hive_db.hive_tbl;\n\n-- \u5207\u6362current_catalog\u4e0ecurrent_database\u5206\u522b\u4e3ahive_catalog\u548chive_db\nUSE hive_catalog.hive_db\n\n-- \u5728hive_catalog.hive_db\u4e0b\u67e5\u8be2hive table\nSELECT * FROM hive_table limit 1;\n\n-- \u5728hive_catalog.hive_db\u4e0b\u67e5\u8be2Internal Catalog\u4e2d\u7684OLAP\u8868\nSELECT * FROM default_catalog.olap_db.olap_table;\n\n-- \u5728hive_catalog.hive_db\u4e0b\u4e0eInternal Catalog\u4e2d\u7684OLAP\u8868\u505a\u8054\u90a6\u67e5\u8be2\nSELECT * FROM hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;\n\n-- \u5728\u5176\u4ed6hive catalog\u4e0b\u5bf9hive_catalog\u4e0eInternal catalog\u7684OLAP\u8868\u505a\u8054\u90a6\u67e5\u8be2\nSELECT * FROM hive_catalog.hive_db.hive_tbl h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;\n"})}),"\n",(0,n.jsx)(a.h3,{id:"hive-connector\u5143\u6570\u636e\u540c\u6b65",children:"Hive Connector\u5143\u6570\u636e\u540c\u6b65"}),"\n",(0,n.jsxs)(a.p,{children:["\u5f53\u524dHive Connector\u5bf9\u4e8e\u7528\u6237Hive Metastore\u4e2d\u8bb0\u5f55\u7684\u8868\u7ed3\u6784\u4ee5\u53ca\u5206\u533a\u6587\u4ef6\u4fe1\u606f\u5728FE\u4e2d\u8fdb\u884c\u4e86\u7f13\u5b58\uff0c\u5f53\u524d\u5b9e\u73b0\u65b9\u5f0f\u4e0e\u5237\u65b0\u65b9\u5f0f\u4e0eHive\u5916\u8868\u4fdd\u6301\u76f8\u540c\uff0c\u8bf7\u53c2\u89c1",(0,n.jsx)(a.a,{href:"../using_starrocks/External_table#%E7%BC%93%E5%AD%98%E6%9B%B4%E6%96%B0",children:"Hive \u5916\u8868"}),"\u3002"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,a,l)=>{l.d(a,{Zo:()=>r,ah:()=>o});var n=l(67294);const t=n.createContext({});function o(e){const a=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function r({components:e,children:a,disableParentContext:l}){let r;return r=l?"function"==typeof e?e({}):e||c:o(e),n.createElement(t.Provider,{value:r},a)}}}]);