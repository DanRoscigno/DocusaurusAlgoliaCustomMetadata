"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23474],{65046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(85893),s=n(11151);const o={displayed_sidebar:"English"},r="Configure a time zone",a={id:"administration/timezone",title:"Configure a time zone",description:"This topic describes how to configure a time zone and the impacts of time zone settings.",source:"@site/versioned_docs/version-3.0/administration/timezone.md",sourceDirName:"administration",slug:"/administration/timezone",permalink:"/doc/docs/3.0/administration/timezone",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/timezone.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Deploy and Manage StarRocks with StarGo",permalink:"/doc/docs/3.0/administration/stargo"},next:{title:"insertPrivNote",permalink:"/doc/docs/3.0/assets/commonMarkdown/insertPrivNote"}},c={},d=[{value:"Configure a session-level time zone or a global time zone",id:"configure-a-session-level-time-zone-or-a-global-time-zone",level:2},{value:"Time zone format",id:"time-zone-format",level:3},{value:"Default time zone",id:"default-time-zone",level:3},{value:"View time zone settings",id:"view-time-zone-settings",level:2},{value:"Impacts of time zone settings",id:"impacts-of-time-zone-settings",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configure-a-time-zone",children:"Configure a time zone"}),"\n",(0,i.jsx)(t.p,{children:"This topic describes how to configure a time zone and the impacts of time zone settings."}),"\n",(0,i.jsx)(t.h2,{id:"configure-a-session-level-time-zone-or-a-global-time-zone",children:"Configure a session-level time zone or a global time zone"}),"\n",(0,i.jsxs)(t.p,{children:["You can configure a session-level time zone or a global time zone for your StarRocks cluster using the ",(0,i.jsx)(t.code,{children:"time_zone"})," parameter."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To configure a session-level time zone, execute the command ",(0,i.jsx)(t.code,{children:"SET time_zone = 'xxx';"}),". You can configure different time zones for different sessions. The time zone setting becomes invalid if you disconnect with FEs."]}),"\n",(0,i.jsxs)(t.li,{children:["To configure a global time zone, execute the command ",(0,i.jsx)(t.code,{children:"SET global time_zone = 'xxx';"}),". The time zone setting is persisted in FEs and is valid even if you disconnect with FEs."]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note"})}),"\n",(0,i.jsxs)(t.p,{children:["Before you load data into StarRocks, modify the global time zone of your StarRocks cluster to the same value of the ",(0,i.jsx)(t.code,{children:"system_time_zone"})," parameter. Otherwise, after data loading, data of the DATE type are incorrect. The ",(0,i.jsx)(t.code,{children:"system_time_zone"})," parameter refers to the time zone of the machines that are used to host FEs. When the machines are started, the time zone of the machines is recorded as the value of this parameter. You cannot manually configure this parameter."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"time-zone-format",children:"Time zone format"}),"\n",(0,i.jsxs)(t.p,{children:["The value of the ",(0,i.jsx)(t.code,{children:"time_zone"})," parameter is not case-sensitive. The value of the parameter can be in one of the following formats."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Format"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Example"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UTC offset"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"SET time_zone = '+10:00';"})," ",(0,i.jsx)(t.code,{children:"SET global time_zone = '-6:00';"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Time zone name"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"SET time_zone = 'Asia/Shanghai';"})," ",(0,i.jsx)(t.code,{children:"SET global time_zone = 'America/Los_Angeles';"})]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["For more information about time zone format, see ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"List of tz database time zones"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note"})}),"\n",(0,i.jsxs)(t.p,{children:["Time zone abbreviations are not supported except for CST. If you set the value of ",(0,i.jsx)(t.code,{children:"time_zone"})," to ",(0,i.jsx)(t.code,{children:"CST"}),", StarRocks converts ",(0,i.jsx)(t.code,{children:"CST"})," into ",(0,i.jsx)(t.code,{children:"Asia/Shanghai"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"default-time-zone",children:"Default time zone"}),"\n",(0,i.jsxs)(t.p,{children:["The default value of the ",(0,i.jsx)(t.code,{children:"time_zone"})," parameter is ",(0,i.jsx)(t.code,{children:"Asia/Shanghai"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"view-time-zone-settings",children:"View time zone settings"}),"\n",(0,i.jsx)(t.p,{children:"To view the time zone setting, run the following command."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:" SHOW VARIABLES LIKE '%time_zone%';\n"})}),"\n",(0,i.jsx)(t.h2,{id:"impacts-of-time-zone-settings",children:"Impacts of time zone settings"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Time zone settings affect the time values returned by the SHOW LOAD and SHOW BACKENDS statements. However, the settings do not affect the value specified in the ",(0,i.jsx)(t.code,{children:"LESS THAN"})," clause when the partitioning columns specified in CREATE TABLE statement are of the DATE or DATETIME type. The settings also do not affect data of the DATE and DATETIME types."]}),"\n",(0,i.jsxs)(t.li,{children:["Time zone settings affect the display and storage of the following functions:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"from_unixtime"}),": returns a date and time of your specified time zone based on a specified UTC timestamp. For example, if the global time zone of your StarRocks cluster is ",(0,i.jsx)(t.code,{children:"Asia/Shanghai"}),", ",(0,i.jsx)(t.code,{children:"select FROM_UNIXTIME(0);"})," returns ",(0,i.jsx)(t.code,{children:"1970-01-01 08:00:00"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"unix_timestamp"}),": returns a UTC timestamp based on the date and time of your specified time zone. For example, if the global time zone of your StarRocks cluster is ",(0,i.jsx)(t.code,{children:"Asia/Shanghai"}),", ",(0,i.jsx)(t.code,{children:"select UNIX_TIMESTAMP('1970-01-01 08:00:00');"})," returns ",(0,i.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"curtime"}),": returns the current time of your specified time zone. For example, if the current time of a specified time zone is 16:34:05. ",(0,i.jsx)(t.code,{children:"select CURTIME();"})," returns ",(0,i.jsx)(t.code,{children:"16:34:05"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"now"}),": returns the current date and time of your specified time zone. For example, if the current date and time of a specified time zone is 2021-02-11 16:34:13, ",(0,i.jsx)(t.code,{children:"select NOW();"})," returns ",(0,i.jsx)(t.code,{children:"2021-02-11 16:34:13"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"convert_tz"}),": converts the date and time from one time zone to another. For example, ",(0,i.jsx)(t.code,{children:"select CONVERT_TZ('2021-08-01 11:11:11', 'Asia/Shanghai', 'America/Los_Angeles');"})," returns ",(0,i.jsx)(t.code,{children:"2021-07-31 20:11:11"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var i=n(67294);const s=i.createContext({});function o(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:o(e),i.createElement(s.Provider,{value:a},t)}}}]);