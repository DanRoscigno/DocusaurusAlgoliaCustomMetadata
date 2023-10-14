"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26800],{72630:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(85893),i=s(11151);const r={},o="convert_tz",l={id:"sql-reference/sql-functions/How_to_Write_Functions_Documentation",title:"convert_tz",description:"- This article uses CONVERT_TZ as an example to illustrate the requirements for writing functions documentation.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/How_to_Write_Functions_Documentation.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/How_to_Write_Functions_Documentation",permalink:"/doc/en/3.0/sql-reference/sql-functions/How_to_Write_Functions_Documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/How_to_Write_Functions_Documentation.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"StarRocks version 2.2",permalink:"/doc/en/3.0/release_notes/release-2.2"},next:{title:"Java UDFs",permalink:"/doc/en/3.0/sql-reference/sql-functions/JAVA_UDF"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",blockquote:"blockquote",ul:"ul",li:"li",em:"em",code:"code",h2:"h2",p:"p",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"convert_tz",children:"convert_tz"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"This article uses"})," ",(0,t.jsx)(n.code,{children:"*CONVERT_TZ*"})," ",(0,t.jsx)(n.em,{children:"as an example to illustrate the requirements for writing functions documentation."})]}),"\n",(0,t.jsx)(n.li,{children:"If the documentation cites the following syntax and examples, please use code blocks."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Converts a datetime value from one time zone to another."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"What does this function do."})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME CONVERT_TZ(DATETIME dt, VARCHAR from_tz, VARCHAR to_tz)\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The syntax of this function. Enclose the syntax in code blocks."})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dt"}),": the datetime value to convert. DATETIME is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"from_tz"}),": the source time zone. VARCHAR is supported. The time zone can be represented in two  formats: one is Time Zone Database (for example, Asia/Shanghai), the other is UTC offset (for example, +08:00)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"to_tz"}),": the destination time zone. VARCHAR is supported. Its format is the same as ",(0,t.jsx)(n.code,{children:"from_tz"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The format is ",(0,t.jsx)(n.code,{children:"parameter"}),":",(0,t.jsx)(n.code,{children:"description"}),"+",(0,t.jsx)(n.code,{children:"data type"})," (list all the data types supported)."]}),"\n",(0,t.jsx)(n.li,{children:"The description must include information, such as parameter description, value format, value range, whether this parameter is required, formats and units when different data types are used."}),"\n",(0,t.jsx)(n.li,{children:"The data types must be capitalized, for example, DATETIME."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DATETIME data type."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The data type must be capitalized."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Additional notes can be provided if necessary, for example,"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Types of the return value if the input value supports multiple data types."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Type of the error returned (for example, NULL) if the data type of the input value is not supported."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["For the Time Zone Database, please refer to ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"tz database time zones"})," (in Wikipedia)."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You can also add some notes or precautions for using this function. (optional)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Convert a date and time in Shanghai to Los_Angeles."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"MySQL > select convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n        -> 2019-07-31 22:21:03                                                       |\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Convert a date and time in UTC+08:00 to Los_Angeles."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"MySQL > select convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Provide examples for using this function and describe the purpose of each example to help users quickly understand the example."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Enclose the code of different use scenarios in different code blocks."})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"If you need to describe more than one scenario in an example, add a comment for each scenario to help"})," ",(0,t.jsx)(n.em,{children:"users quickly distinguish between them."})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"If the returned result is simple, the format in example"})," ",(0,t.jsx)(n.em,{children:"1"})," ",(0,t.jsx)(n.em,{children:"is recommended. Otherwise, the format in example 2 is recommended."})]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||o:r(e),t.createElement(i.Provider,{value:l},n)}}}]);