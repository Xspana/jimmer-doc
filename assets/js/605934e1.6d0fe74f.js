"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1906],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>p});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?t.createElement(h,l(l({ref:n},c),{},{components:a})):t.createElement(h,l({ref:n},c))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),r=a(34334);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>p});var t=a(83117),r=a(67294),i=a(34334),l=a(72389),o=a(67392),s=a(7094),d=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var n;const{lazy:a,block:l,defaultValue:m,values:p,groupId:h,className:N}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??v.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),y=(0,o.l)(b,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[T,k]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=h){const e=g[h];null!=e&&e!==T&&b.some((n=>n.value===e))&&k(e)}const R=e=>{const n=e.currentTarget,a=x.indexOf(n),t=b[a].value;t!==T&&(C(n),k(t),null!=h&&w(h,String(t)))},V=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;a=x[n]??x[x.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},N)},b.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>x.push(e),onKeyDown:V,onFocus:R,onClick:R},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===n})}),a??n)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function p(e){const n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},98279:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=a(83117),r=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={sidebar_position:1,title:"3.1 Basic usage"},s=void 0,d={unversionedId:"showcase/recursive-query/usage",id:"showcase/recursive-query/usage",title:"3.1 Basic usage",description:"Query Dynamic Entities",source:"@site/docs/showcase/recursive-query/usage.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/usage",permalink:"/jimmer-doc/docs/showcase/recursive-query/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/recursive-query/usage.mdx",tags:[],version:"current",lastUpdatedAt:1708691860,formattedLastUpdatedAt:"Feb 23, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"3.1 Basic usage"},sidebar:"tutorialSidebar",previous:{title:"3. Recursive Query",permalink:"/jimmer-doc/docs/showcase/recursive-query/"},next:{title:"3.2 Limit Depth",permalink:"/jimmer-doc/docs/showcase/recursive-query/depth"}},c={},u=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}],m={toc:u};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"query-dynamic-entities"},"Query Dynamic Entities"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                // highlight-next-line\n                .recursiveChildNodes()\n        )\n    )\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                `childNodes*`()\n            }\n        )\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"The result is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    {\n                        "id":3,\n                        "name":"Drinks",\n                        "childNodes":[\n                            {\n                                "id":4,\n                                "name":"Coca Cola",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":5,\n                                "name":"Fanta",\n                                "childNodes":[]\n                            }\n                        ]\n                    },\n                    {\n                        "id":6,\n                        "name":"Bread",\n                        "childNodes":[\n                            {\n                                "id":7,\n                                "name":"Baguette",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":8,\n                                "name":"Ciabatta",\n                                "childNodes":[]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                "id":9,\n                "name":"Clothing",\n                "childNodes":[\n                    {\n                        "id":10,\n                        "name":"Woman",\n                        "childNodes":[\n                            {\n                                "id":11,\n                                "name":"Casual wear",\n                                "childNodes":[\n                                    {\n                                        "id":12,\n                                        "name":"Dress",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":13,\n                                        "name":"Miniskirt",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":14,\n                                        "name":"Jeans",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            },\n                            {\n                                "id":15,\n                                "name":"Formal wear",\n                                "childNodes":[\n                                    {\n                                        "id":16,\n                                        "name":"Suit",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":17,\n                                        "name":"Shirt",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            }\n                        ]\n                    },\n                    {\n                        "id":18,\n                        "name":"Man",\n                        "childNodes":[\n                            {\n                                "id":19,\n                                "name":"Casual wear",\n                                "childNodes":[\n                                    {\n                                        "id":20,\n                                        "name":"Jacket",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":21,\n                                        "name":"Jeans",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            },\n                            {\n                                "id":22,\n                                "name":"Formal wear",\n                                "childNodes":[\n                                    {\n                                        "id":23,\n                                        "name":"Suit",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":24,\n                                        "name":"Shirt",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n]\n')),(0,r.kt)("h2",{id:"query-static-dto"},"Query Static DTO"),(0,r.kt)("p",null,"Create any file with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dto")," extension under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto")," folder, and edit the code as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.TreeNode\n    -> package com.yourcompany.yourproject.model.dto\n\nRecursiveTreeNodeView {\n    #allScalars(this)\n    #highlight-next-line\n    childNodes*\n}\n")),(0,r.kt)("p",null,"Compile the project, a java/kotlin class named ",(0,r.kt)("inlineCode",{parentName:"p"},"RecursiveTreeNodeView")," will be automatically generated."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nList<RecursiveTreeNodeView> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        // highlight-next-line\n        table.fetch(RecursiveTreeNodeView.class)\n    )\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            // highlight-next-line\n            table.fetch(RecursiveTreeNodeView::class)\n        )\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"The result is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[\n    RecursiveTreeNodeView(\n        id=1, \n        name=Home, \n        childNodes=[\n            RecursiveTreeNodeView(\n                id=2, \n                name=Food, \n                childNodes=[\n                    RecursiveTreeNodeView(\n                        id=3, \n                        name=Drinks, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=4, \n                                name=Coca Cola, \n                                childNodes=[]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=5, \n                                name=Fanta, \n                                childNodes=[]\n                            )\n                        ]\n                    ), \n                    RecursiveTreeNodeView(\n                        id=6, \n                        name=Bread, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=7, \n                                name=Baguette, \n                                childNodes=[]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=8, \n                                name=Ciabatta, \n                                childNodes=[]\n                            )\n                        ]\n                    )\n                ]\n            ), \n            RecursiveTreeNodeView(\n                id=9, \n                name=Clothing, \n                childNodes=[\n                    RecursiveTreeNodeView(\n                        id=10, \n                        name=Woman, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=11, \n                                name=Casual wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=12, \n                                        name=Dress, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=13, \n                                        name=Miniskirt, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=14, \n                                        name=Jeans, \n                                        childNodes=[]\n                                    )\n                                ]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=15, \n                                name=Formal wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=16, \n                                        name=Suit, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=17, \n                                        name=Shirt, \n                                        childNodes=[]\n                                    )\n                                ]\n                            )\n                        ]\n                    ), \n                    RecursiveTreeNodeView(\n                        id=18, \n                        name=Man, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=19, \n                                name=Casual wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=20, \n                                        name=Jacket, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=21, \n                                        name=Jeans, \n                                        childNodes=[]\n                                    )\n                                ]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=22, \n                                name=Formal wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=23, \n                                        name=Suit, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=24, \n                                        name=Shirt, \n                                        childNodes=[]\n                                    )\n                                ]\n                            )\n                        ]\n                    )\n                ]\n            )\n        ]\n    )\n]\n")))}p.isMDXComponent=!0}}]);