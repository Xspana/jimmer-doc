"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7442],{38621:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>a});var r=t(74848),s=t(28453);const a=[{value:"\u573a\u666f-1",id:"\u573a\u666f-1",level:2},{value:"\u573a\u666f-2",id:"\u573a\u666f-2",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u76ee\u524d\u5176\u4ed6\u64cd\u4f5cSQL\u7684\u6280\u672f\u65b9\u6848\uff0c\u65e0\u8bbaORM\u8fd8\u662f\u975eORM\uff0c\u90fd\u6709\u5b58\u5728\u4e00\u4e2a\u7a7a\u767d\u9886\u57df\uff1a\u53ea\u8003\u8651\u5230\u4e86\u52a8\u6001",(0,r.jsx)(n.code,{children:"where"}),"\uff0c\u6ca1\u6709\u8003\u8651",(0,r.jsx)(n.code,{children:"\u52a8\u6001join"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u52a8\u6001JOIN"}),"\u5b9a\u4e49\uff1a\u5982\u679c\u67d0\u4e9b\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u9488\u5bf9\u5176\u4ed6\u8868\u800c\u975e\u5f53\u524d\u8868\u3002\u8fd9\u610f\u5473\u7740"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6761\u4ef6\u6ee1\u8db3\u65f6\uff1a\u5148\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5230\u5176\u4ed6\u8868\uff0c\u518d\u5bf9join\u5f97\u5230\u7684\u8868\u6dfb\u52a0\u52a8\u6001where\u6761\u4ef6"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\uff1a\u4e0d\u80fd\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5176\u4ed6\u8868"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u573a\u666f-1",children:"\u573a\u666f-1"}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u7b2c\u4e00\u4e2a\u573a\u666f\uff0c\u8fd9\u91cc\u7528\u9762\u5411\u539f\u751fSQL\u7684MyBatis\u4e3a\u4f8b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b9a\u4e49MyBatis Mapper\u63a5\u53e3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n    );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u53ef\u80fd\u4e3anull\uff0c\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u540e\u9762\u4e24\u4e2a\u67e5\u8be2\u53c2\u6570\uff1a",(0,r.jsx)(n.code,{children:"storeName"}),"\u548c",(0,r.jsx)(n.code,{children:"storeWebsite"}),"\uff0c\u5176\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4e0d\u65bd\u52a0\u5728\u5f53\u524d\u8868",(0,r.jsx)(n.code,{children:"BOOK"}),"\u4e0a\uff0c\u800c\u662f\u65bd\u52a0\u5728\u7236\u8868",(0,r.jsx)(n.code,{children:"BOOK_STORE\u4e0a"}),"\u3002\n\u5373\uff0c\u5f53\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u975enull\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5bf9",(0,r.jsx)(n.code,{children:"BOOK_STORE"}),"\u8868\u7684JOIN\uff0c\u8fd9\u79cd\u7531\u53c2\u6570\u503c\u52a8\u6001\u51b3\u5b9a\u662f\u5426\u6dfb\u52a0\u7684\u8868\u8fde\u63a5\uff0c\u5728\u672c\u6587\u4e2d\u88ab\u79f0\u4e3a",(0,r.jsx)(n.code,{children:"\u52a8\u6001JOIN"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b9a\u4e49MyBatis\u7684SQL\u6620\u5c04XML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u2776\u5c31\u662f\u52a8\u6001JOIN\u3002\u7136\u800c\u5bf9\u5f00\u53d1\u4eba\u5458\u800c\u8a00\uff0c\u2777\u548c\u2778\u624d\u662f\u76ee\u7684\uff0c\u2776\u662f\u4e3a\u652f\u6301\u2777\u548c\u2778\u800c\u4e0d\u5f97\u4e0d\u505a\u7684\u5de5\u4f5c\uff0c\u5176\u5224\u65ad\u6761\u4ef6\u662f\u4e00\u79cd\u8d1f\u62c5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u2776\u7684\u5224\u65ad\u6761\u4ef6\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"or"}),"\uff0c\u8fd9\u4e5f\u4e0d\u96be\u7406\u89e3\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7136\u800c\uff0c\u8fd9\u4ec5\u4ec5\u662f\u6700\u7b80\u5355\u7684\u4e24\u8868\u4e4b\u95f4\u52a8\u6001\u8fde\u63a5\uff0c\u5bf9\u4e8e\u66f4\u6df1\u7684\u591a\u8868\u8fde\u63a5\u64cd\u4f5c\u800c\u8a00\uff0c\u52a8\u6001\u8fde\u63a5\u7684\u590d\u6742\u5ea6\u4f1a\u6025\u5267\u4e0a\u5347\uff01"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u573a\u666f-2",children:"\u573a\u666f-2"}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u7b2c\u4e8c\u4e2a\u573a\u666f\uff0c\u6709\u4e86\u524d\u9762\u7684\u4f8b\u5b50\u4f5c\u4e3a\u57fa\u7840\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u4e0d\u540c\u4efb\u4f55\u4e1a\u52a1\u8026\u5408\u4e86\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n    <select id="findAObjects" resultType="somepackage.A">\n        select distinct A.id\n        from A\n        \x3c!-- highlight-start --\x3e\n        <if test="bId != null or cId != null or dId != null or eId != null">\n            inner join B on A.ID = B.A_ID\n        </if>\n        <if test="cId != null or dId != null or eId != null">\n            inner join C on B.ID = C.B_ID\n        </if>\n        <if test="dId != null or eId != null">\n            inner join D on C.ID = D.C_ID\n        </if>\n        <if test="eId != null">\n            inner join E on D.ID = E.D_ID\n        </if>\n        \x3c!-- highlight-end --\x3e\n        <where>\n            <if test="aId != null">\n                and A.ID = #{aId}\n            </if>\n            <if test="bId != null">\n                and B.ID = #{bId}\n            </if>\n            <if test="cId != null">\n                and C.ID = #{cId}\n            </if>\n            <if test="dId != null">\n                and D.ID = #{dId}\n            </if>\n            <if test="eId != null">\n                and E.ID = #{eId}\n            </if>\n        </where>\n    </select>\n</mapper>\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u903b\u8f91\u5f88\u7b80\u5355\uff0cA\u3001B\u3001C\u3001D\u548cE\u8fd9\u4e94\u5f20\u8868\u5f62\u6210\u4e86\u4e00\u4e2aJOIN\u94fe\uff0c\u6bcf\u5f20\u8868\u90fd\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u3002\u7136\u800c\uff0c\u6b63\u5982\u4f60\u6240\u89c1\uff0c\u52a8\u6001JOIN\u7684\u590d\u6742\u5ea6\u5df2\u7ecf\u53d8\u5f97\u4e0d\u53ef\u63a5\u53d7\u4e86\u3002"})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},39907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(74848),s=t(28453),a=t(38621);t(11470),t(19365);const l={sidebar_position:1,title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898"},i=void 0,o={id:"query/dynamic-join/problem",title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898",description:"\u5728\u4e0a\u4e00\u7bc7\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u52a8\u6001\u67e5\u8be2\u3002\u672c\u76ee\u5f55\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u52a8\u6001\u8868\u94fe\u63a5\u7684\u95ee\u9898",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/problem.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/problem",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/problem",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/problem.mdx",tags:[],version:"current",lastUpdatedAt:1704015848e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898"},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001JOIN",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/"},next:{title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/chain-style"}},c={},u=[...a.RM];function d(e){const n={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"../dynamic-where",children:"\u4e0a\u4e00\u7bc7\u6587\u6863"}),"\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u52a8\u6001\u67e5\u8be2\u3002\u672c\u76ee\u5f55\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u52a8\u6001\u8868\u94fe\u63a5\u7684\u95ee\u9898"]}),"\n",(0,r.jsx)(a.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),s=t(18215),a=t(23104),l=t(56347),i=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function I(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(I,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);