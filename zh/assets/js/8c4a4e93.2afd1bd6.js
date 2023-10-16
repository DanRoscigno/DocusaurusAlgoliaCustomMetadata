"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78180],{6158:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=s(85893),i=s(11151);const a={displayed_sidebar:"Chinese"},r="\u6743\u9650\u7cfb\u7edf FAQ",d={id:"administration/privilege_faq",title:"\u6743\u9650\u7cfb\u7edf FAQ",description:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\uff0c\u4f46\u7528\u6237\u6267\u884c SQL \u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/privilege_faq.md",sourceDirName:"administration",slug:"/administration/privilege_faq",permalink:"/doc/zh/docs/administration/privilege_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/privilege_faq.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/doc/zh/docs/administration/User_privilege"},next:{title:"\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1",permalink:"/doc/zh/docs/administration/Authentication"}},c={},l=[{value:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\uff0c\u4f46\u7528\u6237\u6267\u884c SQL \u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff1f",id:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u4f46\u7528\u6237\u6267\u884c-sql-\u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650",level:2},{value:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650\uff0c<code>GRANT ALL ON ALL TABLES IN DATABASE &lt;db_name&gt; TO USER &lt;user_identity&gt;;</code>\uff0c\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868\uff1f",id:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650grant-all-on-all-tables-in-database-db_name-to-user-user_identity\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868",level:2},{value:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u7684\u6240\u6709\u6743\u9650\uff0c<code>GRANT ALL ON DATABASE &lt;db_name&gt; TO USER &lt;user_identity&gt;;</code>\uff0c\u5728\u6570\u636e\u5e93\u4e0b <code>SHOW TABLES;</code> \u4ec0\u4e48\u4e5f\u4e0d\u8fd4\u56de\uff1f",id:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u7684\u6240\u6709\u6743\u9650grant-all-on-database-db_name-to-user-user_identity\u5728\u6570\u636e\u5e93\u4e0b-show-tables-\u4ec0\u4e48\u4e5f\u4e0d\u8fd4\u56de",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6743\u9650\u7cfb\u7edf-faq",children:"\u6743\u9650\u7cfb\u7edf FAQ"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u4f46\u7528\u6237\u6267\u884c-sql-\u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650",children:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\uff0c\u4f46\u7528\u6237\u6267\u884c SQL \u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u53ef\u80fd\u662f\u56e0\u4e3a\u7528\u6237\u6ca1\u6709\u6fc0\u6d3b\u8be5\u89d2\u8272\u3002\u6bcf\u4e2a\u7528\u6237\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"select current_role();"})," \u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u4f1a\u8bdd\u4e0b\u5df2\u7ecf\u6fc0\u6d3b\u7684\u89d2\u8272\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u8981\u624b\u52a8\u6fc0\u6d3b\u89d2\u8272\uff0c\u53ef\u4ee5\u5728\u5f53\u524d\u4f1a\u8bdd\u4e0b\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})," \u547d\u4ee4\uff0c\u6fc0\u6d3b\u8be5\u89d2\u8272\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u5e0c\u671b\u767b\u5f55\u65f6\u81ea\u52a8\u6fc0\u6d3b\u89d2\u8272\uff0cuser_admin \u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," \u6216\u8005 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER DEFAULT ROLE"})," \u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u89d2\u8272\u3002\u8bbe\u7f6e\u6210\u529f\u540e\uff0c\u7528\u6237\u91cd\u65b0\u767b\u5f55\u5373\u53ef\u81ea\u52a8\u6fc0\u6d3b\u9ed8\u8ba4\u89d2\u8272\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5e0c\u671b\u7cfb\u7edf\u5185\u90e8\u6240\u6709\u7528\u6237\u90fd\u80fd\u591f\u5728\u767b\u5f55\u65f6\u9ed8\u8ba4\u6fc0\u6d3b\u6240\u6709\u62e5\u6709\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u64cd\u4f5c\u3002\u8be5\u64cd\u4f5c\u9700\u8981 System \u5c42\u7684 OPERATE \u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL activate_all_roles_on_login = TRUE;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u8fc7\uff0c\u6211\u4eec\u8fd8\u662f\u5efa\u8bae\u60a8\u80fd\u591f\u4f7f\u7528\u6700\u5c0f\u6743\u9650\u539f\u5219\uff0c\u4e3a\u7528\u6237\u8bbe\u7f6e\u62e5\u6709\u76f8\u5bf9\u8f83\u5c0f\u6743\u9650\u7684\u9ed8\u8ba4\u89d2\u8272\u6765\u89c4\u907f\u6f5c\u5728\u7684\u8bef\u64cd\u4f5c\u3002\u4f8b\u5982\u5bf9\u4e8e\u666e\u901a\u7528\u6237\uff0c\u5c06\u4ec5\u6709 SELECT \u6743\u9650\u7684 read_only \u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4e0d\u5c06\u62e5\u6709 ALTER\u3001DROP\u3001INSERT \u7b49\u6743\u9650\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff1b\u5bf9\u4e8e\u7ba1\u7406\u5458\uff0c\u5c06 db_admin \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4e0d\u5c06\u53ef\u4ee5\u4e0a\u7ebf\u548c\u4e0b\u7ebf\u8282\u70b9\u7684 node_admin \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u6267\u884c ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u547d\u4ee4\u8fdb\u884c\u6388\u6743\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650grant-all-on-all-tables-in-database-db_name-to-user-user_identity\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868",children:["\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650\uff0c",(0,t.jsx)(n.code,{children:"GRANT ALL ON ALL TABLES IN DATABASE <db_name> TO USER <user_identity>;"}),"\uff0c\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868\uff1f"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u662f\u6570\u636e\u5e93\u7ea7\u522b\u7684\u6743\u9650\uff0c\u60a8\u9700\u8981\u8d4b\u6743\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"GRANT CREATE TABLE ON DATABASE <db_name> TO USER <user_identity>;;\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u7684\u6240\u6709\u6743\u9650grant-all-on-database-db_name-to-user-user_identity\u5728\u6570\u636e\u5e93\u4e0b-show-tables-\u4ec0\u4e48\u4e5f\u4e0d\u8fd4\u56de",children:["\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u7684\u6240\u6709\u6743\u9650\uff0c",(0,t.jsx)(n.code,{children:"GRANT ALL ON DATABASE <db_name> TO USER <user_identity>;"}),"\uff0c\u5728\u6570\u636e\u5e93\u4e0b ",(0,t.jsx)(n.code,{children:"SHOW TABLES;"})," \u4ec0\u4e48\u4e5f\u4e0d\u8fd4\u56de\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SHOW TABLES;"})," \u53ea\u4f1a\u8fd4\u56de\u5f53\u524d\u7528\u6237\u6709\u4efb\u610f\u6743\u9650\u7684\u8868\u3002\u4ee5 SELECT \u6743\u9650\u4e3a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u8d4b\u6743\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON ALL TABLES IN DATABASE <db_name> TO USER <user_identity>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u8bed\u53e5\u4e0e 3.0 \u4e4b\u524d\u7248\u672c\u7684 ",(0,t.jsx)(n.code,{children:"GRANT select_priv ON db.* TO <user_identity>;"})," \u662f\u7b49\u4ef7\u7684\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:d},n)}}}]);