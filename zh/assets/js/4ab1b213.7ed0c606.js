"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47116],{81750:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var i=s(85893),l=s(11151);const c={displayed_sidebar:"Chinese"},r="CONVERT_TZ",t={id:"sql-reference/sql-functions/How_to_Write_Functions_Documentation",title:"CONVERT_TZ",description:"- \u672c\u6587\u4ee5 CONVERT_TZ \u51fd\u6570\u4e3a\u4f8b\uff0c\u8bf4\u660e\u51fd\u6570\u6587\u6863\u7684\u5199\u4f5c\u8981\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/How_to_Write_Functions_Documentation.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/How_to_Write_Functions_Documentation",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/How_to_Write_Functions_Documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/How_to_Write_Functions_Documentation.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"StarRocks version 2.2",permalink:"/doc/zh/docs/3.0/release_notes/release-2.2"},next:{title:"Java UDF",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/JAVA_UDF"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879 \uff08\u53ef\u9009\uff09",id:"\u6ce8\u610f\u4e8b\u9879-\u53ef\u9009",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",blockquote:"blockquote",ul:"ul",li:"li",em:"em",code:"code",h2:"h2",p:"p",pre:"pre",a:"a"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"convert_tz",children:"CONVERT_TZ"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["\u672c\u6587\u4ee5 ",(0,i.jsx)(n.code,{children:"CONVERT_TZ"})," \u51fd\u6570\u4e3a\u4f8b\uff0c\u8bf4\u660e\u51fd\u6570\u6587\u6863\u7684\u5199\u4f5c\u8981\u6c42\u3002"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u786e\u4fdd\u51fd\u6570\u540d\u79f0\u3001\u8bed\u6cd5\u3001\u793a\u4f8b\u51c6\u786e\uff0c\u662f\u5426\u6709\u522b\u540d\uff0c\u662f\u5426\u8865\u5145\u4e86\u5fc5\u8981\u7684\u6ce8\u610f\u4e8b\u9879\u548c\u62a5\u9519\u53ef\u80fd\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u7ed9\u5b9a\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u53e6\u4e00\u4e2a\u65f6\u533a\u7684\u65f6\u95f4\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u7b80\u8981\u63cf\u8ff0\u51fd\u6570\u529f\u80fd\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u5bf9\u4e8e\u6709\u4e1a\u52a1\u573a\u666f\u7684\u51fd\u6570\uff0c\u9700\u660e\u786e\u4e1a\u52a1\u573a\u666f\u3001\u6bd4\u5982\uff0cretention() \u51fd\u6570\u5e38\u7528\u4e8e\u8ba1\u7b97\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u7528\u6237\u7559\u5b58\u60c5\u51b5\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u5982\u679c\u6709\u4f7f\u7528\u89c4\u5219\u6216\u6ce8\u610f\u4e8b\u9879\uff0c\u9700\u8981\u8bf4\u660e\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u51fd\u6570\u662f\u5426\u6709\u80fd\u529b\u8fb9\u754c\uff0c\u6bd4\u5982\u4ec5\u652f\u6301\u4f20\u5165 xxx \u4e2a\u53c2\u6570\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"CONVERT_TZ(dt, from_tz, to_tz)\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u51fd\u6570\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u4f7f\u7528\u4ee3\u7801\u5757\u5305\u88f9\u3002\u68c0\u67e5\u8bed\u6cd5\u7684\u6b63\u786e\u6027\uff0c\u8bed\u6cd5\u662f\u5426\u4e0e\u4ee3\u7801\u5b9e\u73b0\u4e00\u81f4\u3002\u54ea\u4e9b\u53c2\u6570\u662f\u53ef\u9009\u53c2\u6570\uff0c\u4f7f\u7528 [] \u5305\u88f9\u3002"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dt"}),"\uff1a\u9700\u8981\u8f6c\u5316\u7684\u65f6\u95f4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from_tz"}),"\uff1a\u6e90\u65f6\u533a\u540d\u79f0\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u65f6\u533a\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u683c\u5f0f\uff1a\u65f6\u533a\u4fe1\u606f\u6570\u636e\u5e93\uff08Time Zone Database\uff0c\u6bd4\u5982 Asia/Shanghai\uff09\uff0c\u6216 UTC \u504f\u79fb\u91cf\uff08\u4f8b\u5982+08: 00\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"to_tz"}),"\uff1a\u76ee\u6807\u65f6\u533a\u540d\u79f0\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u683c\u5f0f\u540c ",(0,i.jsx)(n.code,{children:"from_tz"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["\u53c2\u6570\u8bf4\u7684\u683c\u5f0f\u4e3a ",(0,i.jsx)(n.code,{children:"\u53c2\u6570\uff1a\u542b\u4e49+\u6570\u636e\u7c7b\u578b"}),"\uff08\u8bf7\u5217\u51fa\u6240\u652f\u6301\u7684\u5168\u90e8\u6570\u636e\u7c7b\u578b\uff09\u3002"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u53c2\u6570\u542b\u4e49\u5305\u62ec\uff1a\u53c2\u6570\u89e3\u91ca\u3001\u662f\u5426\u5fc5\u9009\u3001\u53d6\u503c\u7c7b\u578b\u3001\u53d6\u503c\u683c\u5f0f\uff08if any\uff09\u3001\u53d6\u503c\u8303\u56f4\uff08if any\uff09\u3001\u4e0d\u540c\u53d6\u503c\u7684\u542b\u4e49\u3001\u662f\u5426\u6709\u5355\u4f4d\u3001\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u4e0b\u7684\u53d6\u503c\u548c\u5355\u4f4d\u5dee\u5f02\u7b49\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u6570\u636e\u7c7b\u578b\u9700\u8981\u5b57\u6bcd\u5168\u5927\u5199\uff0c\u6bd4\u5982 DATETIME\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de DATETIME \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u4e0d\u540c\u7684\u5165\u53c2\u7c7b\u578b\u5bf9\u5e94\u7684\u8f93\u51fa\u7c7b\u578b\uff0c\u8fd4\u56de\u503c\u7684\u542b\u4e49\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u5404\u7c7b\u53ef\u80fd\u7684\u9519\u8bef\uff1a\u8f93\u5165\u503c\u4e0d\u6ee1\u8db3\u6570\u636e\u7c7b\u578b\u8981\u6c42\u65f6/null/\u7a7a/\u8d85\u9650\u65f6\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u6bd4\u5982\u8fd4\u56de NULL\uff0c\u7a7a\uff0c\u62a5\u9519\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879-\u53ef\u9009",children:"\u6ce8\u610f\u4e8b\u9879 \uff08\u53ef\u9009\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u5404\u65f6\u533a\u5bf9\u5e94\u7684\u65f6\u533a\u4fe1\u606f\u6570\u636e\u5e93\uff0c\u8bf7\u53c2\u89c1",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"\u65f6\u533a\u6570\u636e\u5e93"}),"\uff08\u6765\u6e90\uff1a\u7ef4\u57fa\u767e\u79d1\uff09\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u4f7f\u7528\u8be5\u51fd\u6570\u65f6\u7684\u6ce8\u610f\u4e8b\u9879\u6216\u8005\u9650\u5236\uff0c\u5982\u679c\u5f71\u54cd\u7528\u6237\u4f7f\u7528\uff0c\u5fc5\u987b\u8bf4\u660e\u3002"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5c06\u4e0a\u6d77\u65f6\u95f4\u8f6c\u5316\u4e3a\u6d1b\u6749\u77f6\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"MySQL > select convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n+---------------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles') |\n+---------------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                       |\n+---------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06\u4e1c\u516b\u533a\u65f6\u95f4\u8f6c\u5316\u4e3a\u6d1b\u6749\u77f6\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"MySQL > select convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"*\u5c3d\u91cf\u63d0\u4f9b\u6bd4\u8f83\u5168\u7684\u4f7f\u7528\u793a\u4f8b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"*\u5c3d\u91cf\u8bf4\u660e\u6bcf\u4e2a\u793a\u4f8b\u7684\u4f5c\u7528\u548c\u76ee\u7684\uff0c\u8ba9\u7528\u6237\u5feb\u901f\u4e86\u89e3\u8be5\u793a\u4f8b\u573a\u666f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"*\u793a\u4f8b\u4ee3\u7801\u6b63\u786e\uff0c\u80fd\u8dd1\u901a\u3002"}),"\n",(0,i.jsx)(n.li,{children:"*\u590d\u6742\u51fd\u6570\u9700\u8981\u5bf9\u793a\u4f8b\u7ed3\u679c\u8fdb\u884c\u89e3\u91ca\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u7406\u89e3\u3002"}),"\n",(0,i.jsx)(n.li,{children:"*\u793a\u4f8b\u4ee3\u7801\u9700\u8981\u505a\u9002\u5f53\u6362\u884c\uff0c\u4e0d\u5e94\u592a\u957f\u3002"}),"\n"]}),"\n"]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>c});var i=s(67294);const l=i.createContext({});function c(e){const n=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||r:c(e),i.createElement(l.Provider,{value:t},n)}}}]);