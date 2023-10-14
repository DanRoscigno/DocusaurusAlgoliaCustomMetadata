"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9555],{74942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const a={},r="bitmap_intersect",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_intersect",title:"bitmap_intersect",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_intersect.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_intersect.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_hash",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_hash"},next:{title:"bitmap_max",permalink:"/doc/en/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_max"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_intersect",children:"bitmap_intersect"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Aggregation function, used to calculate the bitmap intersection after grouping. Common usage scenarios, such as calculating user retention rate."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP BITMAP_INTERSECT(BITMAP value)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Enter a set of bitmap values, find the intersection of this set of bitmap values, and return the result."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Table structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"-- Calculate users retention under different tags today and yesterday. \nselect tag, bitmap_intersect(user_id)\nfrom (\n    select tag, date, bitmap_union(user_id) user_id\n    from table\n    where date in ('2020-05-18', '2020-05-19')\n    group by tag, date) a\ngroup by tag;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use with bitmap_to_string function to obtain the specific data of the intersection."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"--Find out users retained under different tags today and yesterday. \nselect tag, bitmap_to_string(bitmap_intersect(user_id))\nfrom (\n    select tag, date, bitmap_union(user_id) user_id\n    from table where date in ('2020-05-18', '2020-05-19')\n    group by tag, date) a\ngroup by tag;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"BITMAP_INTERSECT, BITMAP"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:c},t)}}}]);