"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),o=n(34334),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:j}=(0,s.U)(),[y,O]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==y&&v.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==y&&(w(t),O(a),null!=b&&j(b,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},15107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={sidebar_position:4,title:"\u548cJackson\u534f\u540c"},s=void 0,u={unversionedId:"object/jackson",id:"object/jackson",title:"\u548cJackson\u534f\u540c",description:"Jimmer\u5bf9\u8c61\u662f\u52a8\u6001\u7684\uff0c\u5e76\u4e0d\u662f\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u90fd\u9700\u8981\u521d\u59cb\u5316\uff0c\u5b83\u5141\u8bb8\u7f3a\u5c11\u4e00\u4e9b\u5c5e\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/jackson.mdx",sourceDirName:"object",slug:"/object/jackson",permalink:"/jimmer-doc/zh/docs/object/jackson",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/object/jackson.mdx",tags:[],version:"current",lastUpdatedAt:1729445762,formattedLastUpdatedAt:"2024\u5e7410\u670820\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u548cJackson\u534f\u540c"},sidebar:"tutorialSidebar",previous:{title:"Draft",permalink:"/jimmer-doc/zh/docs/object/draft"},next:{title:"DTO\u8f6c\u6362",permalink:"/jimmer-doc/zh/docs/object/view/"}},c={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer\u5bf9\u8c61\u662f\u52a8\u6001\u7684\uff0c\u5e76\u4e0d\u662f\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u90fd\u9700\u8981\u521d\u59cb\u5316\uff0c\u5b83\u5141\u8bb8\u7f3a\u5c11\u4e00\u4e9b\u5c5e\u6027\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u672a\u6307\u5b9a\u7684\u5c5e\u6027\u5728\u76f4\u63a5\u88ab\u4ee3\u7801\u8bbf\u95ee\u65f6\u4f1a\u5bfc\u81f4\u5f02\u5e38")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u672a\u6307\u5b9a\u7684\u5c5e\u6027\u5728JSON\u5e8f\u5217\u5316\u4e2d\u81ea\u52a8\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5f02\u5e38"))),(0,r.kt)("p",null,"\u8fd9\u91cc\u63d0\u5230\u4e86JSON\u5e8f\u5217\u5316\uff0c\u6307",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"jackson"),"\u3002"),(0,r.kt)("p",null,"jimmer-core\u5b9a\u4e49\u4e86\u4e00\u4e2ajackson\u6a21\u5757\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.jackson.ImmutableModule"),"\uff0c\u5229\u7528\u8be5\u6a21\u5757\u53ef\u4ee5\u4e3ajackson\u589e\u52a0\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316jimmer\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u5206\u4e24\u79cd\u60c5\u51b5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter"),(0,r.kt)("p",{parentName:"li"},"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cJimmer\u5df2\u7ecf\u6ce8\u4e3aSpring\u8fd9\u518c\u4e86ImmutableModule\uff0c\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Jimmer\u5185\u90e8\u4ee3\u7801\uff0c\u975e\u7528\u6237\u4ee3\u7801\n@ConditionalOnMissingBean(ImmutableModule.class)\n@Bean\npublic ImmutableModule immutableModule() {\n    return new ImmutableModule();\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0cSpring\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectMapper"),"\u5df2\u7ecf\u53ef\u4ee5\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316Jimmer\u52a8\u6001\u5bf9\u8c61\uff0c\u800c\u7edd\u5927\u90e8\u5206\u5bf9\u8c61\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5de5\u4f5c\u90fd\u662f\u5728HTTP\u4ea4\u4e92\u65f6\u7531Spring\u81ea\u52a8\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\u65e0\u9700\u4efb\u4f55\u5f00\u53d1\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Spring\u9ed8\u8ba4\u7684Json\u5904\u7406\u5e93\u5c31\u662f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"jackson"),"\uff0c\u52ff\u66ff\u6362\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ObjectMapper mapper = new ObjectMapper()\n    // highlight-next-line\n    .registerModule(new ImmutableModule());\n\nTreeNode treeNode = Immutables.createTreeNode(\n    draft -> draft.setName("Root Node")\n);\n\n// \u7cfb\u5217\u5316\nString json = mapper.writeValueAsString(treeNode);\n\n// \u53cd\u5e8f\u5217\u5316\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode.class);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mapper = ObjectMapper()\n    // highlight-next-line\n    .registerModule(ImmutableModule())\n\nval treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\n\n// \u5e8f\u5217\u5316\nval json = mapper.writeValueAsString(treeNode);\n\n// \u53cd\u5e8f\u5217\u5316\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode::class.java);\n')))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5e8f\u5217\u5316\u64cd\u4f5c\u800c\u8a00\uff0c\u6709\u4e00\u4e2a\u4fbf\u6377\u65b9\u5f0f\uff0c\u5c31\u662fjimmer\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"toString"),"\u65b9\u6cd5\u3002"))))}d.isMDXComponent=!0}}]);