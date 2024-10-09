"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6015],{61959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),o=t(11470),s=t(19365);const i={sidebar_position:3,title:"3.2 Control Recursion Of Node"},l=void 0,c={id:"showcase/recursive-query/node-control",title:"3.2 Control Recursion Of Node",description:"Query Dynamic Entities",source:"@site/docs/showcase/recursive-query/node-control.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/node-control",permalink:"/jimmer-doc/docs/showcase/recursive-query/node-control",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/recursive-query/node-control.mdx",tags:[],version:"current",lastUpdatedAt:170869186e4,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"3.2 Control Recursion Of Node"},sidebar:"tutorialSidebar",previous:{title:"3.2 Limit Depth",permalink:"/jimmer-doc/docs/showcase/recursive-query/depth"},next:{title:"3.4 Multiple Properties",permalink:"/jimmer-doc/docs/showcase/recursive-query/multiple-props"}},u={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveChildNodes(cfg -> {\n                    cfg.recursive(it -> {\n                        // highlight-next-line\n                        return !it.getEntity().name().equals("Clothing");\n                    });\n                })\n        )\n    )\n    .execute();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    recursive {\n                        // highlight-next-line\n                        it.name != "Clothing"\n                    }\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If the name of the current tree node is equal to ",(0,r.jsx)(n.code,{children:"Clothing"}),", terminate the recursion, otherwise continue recursion. The result is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    {\n                        "id":3,\n                        "name":"Drinks",\n                        "childNodes":[\n                            {\n                                "id":4,\n                                "name":"Coca Cola",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":5,\n                                "name":"Fanta",\n                                "childNodes":[]\n                            }\n                        ]\n                    },\n                    {\n                        "id":6,\n                        "name":"Bread",\n                        "childNodes":[\n                            {\n                                "id":7,\n                                "name":"Baguette",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":8,\n                                "name":"Ciabatta",\n                                "childNodes":[]\n                            }\n                        ]\n                    }\n                ]\n            },\n            // highlight-next-line\n            {"id":9,"name":"Clothing"}\n        ]\n    }\n]\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Clothing"})," object does not have the ",(0,r.jsx)(n.code,{children:"childNodes"})," property as ",(0,r.jsx)(n.code,{children:"[]"}),", but does not have the ",(0,r.jsx)(n.code,{children:"childNodes"})," property at all."]}),(0,r.jsxs)(n.p,{children:["This means whether the ",(0,r.jsx)(n.code,{children:"Clothing"})," object has subordinate objects is unknown, because the recursion process was prematurely terminated due to manual intervention."]})]}),"\n",(0,r.jsx)(n.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,r.jsx)(n.p,{children:"Controlling whether each node recurses using static DTOs will be provided in later versions, please wait for later versions."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),o=t(23104),s=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=c??b;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);