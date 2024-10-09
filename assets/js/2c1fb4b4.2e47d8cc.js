"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),r=n(34334),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:b,className:y}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,s.U)(),[_,T]=(0,i.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==_&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),a=f[n].value;a!==_&&(O(t),T(a),null!=b&&g(b,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},y)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>j.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,i.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},17407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),r=n(65488),o=n(85162);const l={sidebar_position:2,title:"Association Path Chaining"},s=void 0,p={unversionedId:"query/dynamic-join/chain-style",id:"query/dynamic-join/chain-style",title:"Association Path Chaining",description:"How Jimmer solves the dynamic join problem will be discussed in subsequent docs. This article first introduces the join style in Jimmer.",source:"@site/docs/query/dynamic-join/chain-style.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/chain-style",permalink:"/jimmer-doc/docs/query/dynamic-join/chain-style",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/dynamic-join/chain-style.mdx",tags:[],version:"current",lastUpdatedAt:1704100403,formattedLastUpdatedAt:"Jan 1, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Association Path Chaining"},sidebar:"tutorialSidebar",previous:{title:"Problems with Other Solutions",permalink:"/jimmer-doc/docs/query/dynamic-join/problem"},next:{title:"Merge Conflict Joins",permalink:"/jimmer-doc/docs/query/dynamic-join/merge"}},c={},u=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Outer Joins",id:"outer-joins",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How Jimmer solves the dynamic join problem will be discussed in subsequent docs. This article first introduces the join style in Jimmer."),(0,i.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,i.kt)("p",null,"Firstly, Jimmer does not support cartesian products which is exists in theoretical and should be carefully avoided in actual projects."),(0,i.kt)("p",null,"Thus, Jimmer's SQL DSL does not need to support multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," clauses. All cross-table operations are unified as ",(0,i.kt)("inlineCode",{parentName:"p"},"join"),"."),(0,i.kt)("p",null,"In Jimmer, all table joins are implicit, formed by association paths of arbitrary length, and are considered as multiple table joins. For example:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooksByStoreCityName(@Nullable String storeCityName) {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            storeCityName != null && !storeCityName.isEmpty(),\n            // highlight-next-line\n            table.store().city().name().eq(name) \n        )\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .execute();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooksByStoreCityName(name: storeCityName?): List<Book> =  \n    sqlClient\n        .createQuery(Book::class) {\n            storeCityName?.takeIf { it.isNotEmpty() }?.let {\n                // highlight-next-line\n                where(table.store.city.name eq it)\n            }\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .execute()\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the above code, ",(0,i.kt)("inlineCode",{parentName:"p"},"table.store().city()")," in Java or ",(0,i.kt)("inlineCode",{parentName:"p"},"table.store.city")," in Kotlin is the association path.  "),(0,i.kt)("p",{parentName:"admonition"},"The association path length is unlimited. Each association reference corresponds to a SQL join operation."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"from BOOK tb_1_\n// highlight-next-line  \ninner join BOOK_STORE tb_2_ // `.store`\n    on tb_1_.STORE_ID = tb_2_.ID \n// highlight-next-line\ninner join CITY tb_3_ // `.city`\n    on tb_2_.CITY_ID = tb_3_.ID\n\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"findBooksByStoreCityName(null)"),", the generated SQL is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},'findBooksByStoreCityName("ChengDu")'),", the generated SQL is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID \nfrom BOOK tb_1_\n// highlight-next-line\ninner join BOOK_STORE tb_2_ // `.store`\n    on tb_1_.STORE_ID = tb_2_.ID\n// highlight-next-line\ninner join CITY tb_3_ // `.city`\n    on tb_2_.CITY_ID = tb_3_.ID\nwhere\n    // `.name eq "ChengDu"` \n    // highlight-next-line\n    tb_3_.NAME = ? /* ChengDu */ \norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n')))),(0,i.kt)("h2",{id:"outer-joins"},"Outer Joins"),(0,i.kt)("p",null,"The association paths ",(0,i.kt)("inlineCode",{parentName:"p"},".store")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".city")," in the above example represent inner joins."),(0,i.kt)("p",null,"It's also easy to express outer joins, taking left outer join as an example:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"table.store().city(JoinType.LEFT) \n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"table.store.`city?`  \n")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To fully leverage Kotlin's strengths and optimize its developer experience, Jimmer provides slightly different APIs for Java and Kotlin with the same essence."),(0,i.kt)("p",{parentName:"admonition"},"However, outer joins are the only exception where Java and Kotlin APIs behave differently:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Java DSL\nUse JoinType to represent join type, can be ",(0,i.kt)("inlineCode",{parentName:"p"},"INNER")," ",(0,i.kt)("em",{parentName:"p"},"(default)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LEFT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RIGHT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"FULL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kotlin DSL"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DSL properties same as entity properties represent inner join")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DSL properties with a ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," suffix compared to entity properties represent left outer join"))),(0,i.kt)("p",{parentName:"li"},"That is, Kotlin DSL does not support ",(0,i.kt)("inlineCode",{parentName:"p"},"RIGHT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FULL"),". This sacrifice is a careful trade-off to gain null safety integration in Kotlin, which is more important."),(0,i.kt)("p",{parentName:"li"},"This detail will be discussed in ",(0,i.kt)("a",{parentName:"p",href:"./kotlin-join"},"Kotlin Join Features"),".")))))}d.isMDXComponent=!0}}]);