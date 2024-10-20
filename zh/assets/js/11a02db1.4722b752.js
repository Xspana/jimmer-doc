"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[702],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return r?t.createElement(v,o(o({ref:n},d),{},{components:r})):t.createElement(v,o({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(67294),a=r(34334);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:r,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},n)}},65488:(e,n,r)=>{r.d(n,{Z:()=>m});var t=r(83117),a=r(67294),l=r(34334),o=r(72389),i=r(67392),s=r(7094),c=r(12466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:r,block:o,defaultValue:p,values:m,groupId:v,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:n,label:r,attributes:t}}=e;return{value:n,label:r,attributes:t}})),N=(0,i.l)(f,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,s.U)(),[k,w]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=v){const e=g[v];null!=e&&e!==k&&f.some((n=>n.value===e))&&w(e)}const x=e=>{const n=e.currentTarget,r=O.indexOf(n),t=f[r].value;t!==k&&(j(n),w(t),null!=v&&T(v,String(t)))},E=e=>{var n;let r=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;r=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;r=O[n]??O[O.length-1];break}}null==(n=r)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:n,label:r,attributes:o}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>O.push(e),onKeyDown:E,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":k===n})}),r??n)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function m(e){const n=(0,o.Z)();return a.createElement(p,(0,t.Z)({key:String(n)},e))}},99578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(83117),a=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={sidebar_position:4,title:"3.4 \u591a\u5c5e\u6027\u9012\u5f52"},s=void 0,c={unversionedId:"showcase/recursive-query/multiple-props",id:"showcase/recursive-query/multiple-props",title:"3.4 \u591a\u5c5e\u6027\u9012\u5f52",description:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/multiple-props.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/multiple-props",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/multiple-props",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/multiple-props.mdx",tags:[],version:"current",lastUpdatedAt:1708980990,formattedLastUpdatedAt:"2024\u5e742\u670826\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"3.4 \u591a\u5c5e\u6027\u9012\u5f52"},sidebar:"tutorialSidebar",previous:{title:"3.2 \u63a7\u5236\u8282\u70b9\u662f\u5426\u9012\u5f52",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/node-control"},next:{title:"4. \u6761\u4ef6",permalink:"/jimmer-doc/zh/docs/showcase/where/"}},d={},u=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}],p={toc:u};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"},"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nTreeNode treeNode = sqlClient\n    .findById(\n        TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveParent() \u2776 \n                .recursiveChildNodes() \u2777,\n        10L\n    );\n"))),(0,a.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val treeNode = sqlClient\n    .findById(\n        newFetcher(Book::class).by {\n            allScalarFields()\n                `parent*`() \u2776\n                `childNodes*`() \u2777\n        },\n        10L\n    )\n")))),(0,a.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7684\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":10,\n    "name":"Woman",\n    "parent":{ \u2776\n        "id":9,\n        "name":"Clothing",\n        "parent":{ \u2776\n            "id":1,\n            "name":"Home",\n            "parent":null \u2776\n        }\n    },\n    "childNodes":[ \u2777\n        {\n            "id":11,\n            "name":"Casual wear",\n            "childNodes":[ \u2777\n                {\n                    "id":12,\n                    "name":"Dress",\n                    "childNodes":[] \u2777\n                },\n                {\n                    "id":13,\n                    "name":"Miniskirt",\n                    "childNodes":[] \u2777\n                },\n                {\n                    "id":14,\n                    "name":"Jeans",\n                    "childNodes":[] \u2777\n                }\n            ]\n        },\n        {\n            "id":15,\n            "name":"Formal wear",\n            "childNodes":[ \u2777\n                {\n                    "id":16,\n                    "name":"Suit",\n                    "childNodes":[] \u2777\n                },\n                {\n                    "id":17,\n                    "name":"Shirt",\n                    "childNodes":[] \u2777\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"\u67e5\u8be2\u9759\u6001dto"},"\u67e5\u8be2\u9759\u6001DTO"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3adto\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.TreeNode\n    -> package com.yourcompany.yourproject.model.dto\n\nRecursiveTreeNodeView {\n    #allScalars(this)\n    parent* \u2776\n    childNodes* \u2777\n}\n")),(0,a.kt)("p",null,"\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"RecursiveTreeNodeView")),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nRecursiveTreeNodeView treeNode = sqlClient\n    .findById(\n        RecursiveTreeNodeView.class,\n        10L\n    );\n"))),(0,a.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val treeNode = sqlClient\n    .findById(\n        RecursiveTreeNodeView::class,\n        10L\n    )\n")))),(0,a.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"RecursiveTreeNodeView(\n    id=10, \n    name=Woman, \n    parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n        id=9, \n        name=Clothing, \n        parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n            id=1, \n            name=Home, \n            parent=null \u2776\n        )\n    ), \n    childNodes=[ \u2777\n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=11, \n            name=Casual wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=12, \n                    name=Dress, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=13, \n                    name=Miniskirt, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=14, \n                    name=Jeans, \n                    childNodes=[] \u2777\n                )\n            ]\n        ), \n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=15, \n            name=Formal wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=16, \n                    name=Suit, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=17, \n                    name=Shirt, \n                    childNodes=[] \u2777\n                )\n            ]\n        )\n    ]\n)\n")))}m.isMDXComponent=!0}}]);