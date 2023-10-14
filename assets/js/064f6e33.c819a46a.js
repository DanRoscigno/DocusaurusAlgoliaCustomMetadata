"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[91932],{58066:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=l(85893),r=l(11151);const a={},t="all_match",c={id:"sql-reference/sql-functions/array-functions/all_match",title:"all_match",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/all_match.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/all_match",permalink:"/doc/en/sql-reference/sql-functions/array-functions/all_match",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/all_match.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"window_funnel",permalink:"/doc/en/sql-reference/sql-functions/aggregate-functions/window_funnel"},next:{title:"any_match",permalink:"/doc/en/sql-reference/sql-functions/array-functions/any_match"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"all_match",children:"all_match"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns whether all elements of an array match the given predicate."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"true"})," (1) if all the elements match the predicate (a special case is when the array is empty)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"false"})," (0) if one or more elements do not match."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Returns NULL if the predicate returns NULL for one or more elements and ",(0,s.jsx)(n.code,{children:"true"})," for all other elements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v3.0.6 onwards."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"all_match(lambda_function, arr1, arr2...)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns whether all elements of ",(0,s.jsx)(n.code,{children:"arr1"})," match the given predicate in the lambda function."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arr1"}),": the array to match."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arrN"}),": optional arrays used in the lambda function."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lambda_function"}),": the lambda function used to match values."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a BOOLEAN value."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The lambda function follows the usage notes in ",(0,s.jsx)(n.a,{href:"/doc/en/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the input array is null or the lambda function results in null, null is returned."}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"arr1"})," is empty, ",(0,s.jsx)(n.code,{children:"true"})," is returned."]}),"\n",(0,s.jsxs)(n.li,{children:["To apply this function to MAP, rewrite ",(0,s.jsx)(n.code,{children:"all_match((k,v)->k>v,map)"})," to ",(0,s.jsx)(n.code,{children:"all_match(map_values(transform_values((k,v)->k>v, map)))"}),". For example, ",(0,s.jsx)(n.code,{children:"select all_match(map_values(transform_values((k,v)->k>v, map{2:1})));"})," returns 1."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Check whether all elements in ",(0,s.jsx)(n.code,{children:"x"})," are less than the elements in ",(0,s.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select all_match((x,y) -> x < y, [1,2,-8], [4,5,6]);\n+---------------------------------------------------+\n| all_match((x, y) -> x < y, [1, 2, -8], [4, 5, 6]) |\n+---------------------------------------------------+\n|                                                 1 |\n+---------------------------------------------------+\n\nselect all_match((x,y) -> x < y, [1,2,null], [4,5,6]);\n+-----------------------------------------------------+\n| all_match((x, y) -> x < y, [1, 2, NULL], [4, 5, 6]) |\n+-----------------------------------------------------+\n|                                                NULL |\n+-----------------------------------------------------+\n\nselect all_match((x,y) -> x < y, [1,2,8], [4,5,6]);\n+--------------------------------------------------+\n| all_match((x, y) -> x < y, [1, 2, 8], [4, 5, 6]) |\n+--------------------------------------------------+\n|                                                0 |\n+--------------------------------------------------+\n\nselect all_match((x,y) -> x < y, [], []);\n+------------------------------------+\n| all_match((x, y) -> x < y, [], []) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n\nselect all_match((x,y) -> x < y, null, [4,5,6]);\n+---------------------------------------------+\n| all_match((x, y) -> x < y, NULL, [4, 5, 6]) |\n+---------------------------------------------+\n|                                        NULL |\n+---------------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,l)=>{l.d(n,{Zo:()=>c,ah:()=>a});var s=l(67294);const r=s.createContext({});function a(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:l}){let c;return c=l?"function"==typeof e?e({}):e||t:a(e),s.createElement(r.Provider,{value:c},n)}}}]);