"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73042],{58626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const c={},r="ADD SQLBLACKLIST",l={id:"sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST",title:"ADD SQLBLACKLIST",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST",permalink:"/doc/zh/3.0/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"version",permalink:"/doc/zh/3.0/sql-reference/sql-functions/utility-functions/version"},next:{title:"ADMIN CANCEL REPAIR",permalink:"/doc/zh/3.0/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-sqlblacklist",children:"ADD SQLBLACKLIST"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u4e00\u4e2a SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u6dfb\u52a0\u81f3 SQL \u9ed1\u540d\u5355\u3002\u542f\u7528 SQL \u9ed1\u540d\u5355\u529f\u80fd\u540e\uff0cStarRocks \u4f1a\u5c06\u6240\u6709\u9700\u8981\u6267\u884c\u7684 SQL \u8bed\u53e5\u4e0e\u9ed1\u540d\u5355\u4e2d\u7684 SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002StarRocks \u4e0d\u4f1a\u6267\u884c\u4e0e\u9ed1\u540d\u5355\u4e2d\u4efb\u4f55\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5339\u914d\u7684 SQL\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173 SQL \u9ed1\u540d\u5355\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"/doc/zh/3.0/administration/Blacklist",children:"\u7ba1\u7406 SQL \u9ed1\u540d\u5355"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ADD SQLBLACKLIST "<sql_reg_expr>"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sql_reg_expr"}),"\uff1a\u7528\u4e8e\u6307\u5b9a SQL \u8bed\u53e5\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4e3a\u4e86\u533a\u5206 SQL \u8bed\u53e5\u4e2d\u7684\u7279\u6b8a\u5b57\u7b26\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u7279\u6b8a\u5b57\u7b26\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u8f6c\u4e49\u7b26\uff08\\\uff09\u4f5c\u4e3a SQL \u8bed\u53e5\u4e2d\u7279\u6b8a\u5b57\u7b26\u7684\u524d\u7f00\uff0c\u5982 ",(0,t.jsx)(n.code,{children:"("}),"\u3001",(0,t.jsx)(n.code,{children:")"})," \u4ee5\u53ca ",(0,t.jsx)(n.code,{children:"+"}),"\u3002\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"("})," \u548c ",(0,t.jsx)(n.code,{children:")"})," \u5728 SQL \u8bed\u53e5\u4e2d\u7ecf\u5e38\u88ab\u4f7f\u7528\uff0cStarRocks \u53ef\u4ee5\u76f4\u63a5\u8bc6\u522b SQL \u8bed\u53e5\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"("})," \u548c ",(0,t.jsx)(n.code,{children:")"}),"\u3002\u6240\u4ee5\u60a8\u65e0\u9700\u4e3a ",(0,t.jsx)(n.code,{children:"("})," \u548c ",(0,t.jsx)(n.code,{children:")"})," \u6dfb\u52a0\u8f6c\u4e49\u7b26\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5c06 ",(0,t.jsx)(n.code,{children:"count(\\*)"})," \u6dfb\u52a0\u5230 SQL \u9ed1\u540d\u5355\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST "select count(\\\\*) from .+";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5c06 ",(0,t.jsx)(n.code,{children:"count(distinct )"})," \u6dfb\u52a0\u5230 SQL \u9ed1\u540d\u5355\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST "select count(distinct .+) from .+";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06 ",(0,t.jsx)(n.code,{children:"order by limit x, y\uff0c1 <= x <=7, 5 <=y <=7"})," \u52a0\u5165SQL\u9ed1\u540d\u5355\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST "select id_int from test_all_type_select1 \n    order by id_int \n    limit [1-7], [5-7]";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u56db\uff1a\u5c06\u590d\u6742\u7684 SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u6dfb\u52a0\u5230 SQL \u9ed1\u540d\u5355\u4e2d\u3002\u8be5\u793a\u4f8b\u662f\u4e3a\u4e86\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u8f6c\u4e49\u7b26\u6765\u8868\u793a SQL \u8bed\u53e5\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"*"})," \u548c ",(0,t.jsx)(n.code,{children:"-"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST \n    "select id_int \\\\* 4, id_tinyint, id_varchar \n        from test_all_type_nullable \n    except select id_int, id_tinyint, id_varchar \n        from test_basic \n    except select (id_int \\\\* 9 \\\\- 8) \\\\/ 2, id_tinyint, id_varchar \n        from test_all_type_nullable2 \n    except select id_int, id_tinyint, id_varchar \n        from test_basic_nullable";\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(i.Provider,{value:l},n)}}}]);