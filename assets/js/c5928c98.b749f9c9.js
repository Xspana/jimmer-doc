"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4780],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),i=t(34334);const o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),i=t(67294),o=t(34334),r=t(72389),l=t(67392),s=t(7094),p=t(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var n;const{lazy:t,block:r,defaultValue:u,values:c,groupId:k,className:h}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,l.l)(g,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===u?u:u??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,s.U)(),[w,T]=(0,i.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:L}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==w&&g.some((n=>n.value===e))&&T(e)}const _=e=>{const n=e.currentTarget,t=C.indexOf(n),a=g[t].value;a!==w&&(L(n),T(a),null!=k&&f(k,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},g.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>C.push(e),onKeyDown:O,onFocus:_,onClick:_},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,i.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function c(e){const n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},65368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=t(83117),i=(t(67294),t(3905)),o=t(65488),r=t(85162);const l={sidebar_position:1,title:"ManyToManyView"},s=void 0,p={unversionedId:"mapping/advanced/view/many-to-many-view",id:"mapping/advanced/view/many-to-many-view",title:"ManyToManyView",description:"Limitations of classic ORM associations",source:"@site/docs/mapping/advanced/view/many-to-many-view.mdx",sourceDirName:"mapping/advanced/view",slug:"/mapping/advanced/view/many-to-many-view",permalink:"/jimmer-doc/docs/mapping/advanced/view/many-to-many-view",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/view/many-to-many-view.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ManyToManyView"},sidebar:"tutorialSidebar",previous:{title:"IdView",permalink:"/jimmer-doc/docs/mapping/advanced/view/id-view"},next:{title:"Calculated Properties",permalink:"/jimmer-doc/docs/mapping/advanced/calculated/"}},d={},m=[{value:"Limitations of classic ORM associations",id:"limitations-of-classic-orm-associations",level:2},{value:"Undisputed many-to-many association",id:"undisputed-many-to-many-association",level:3},{value:"Undisputed double many-to-one association",id:"undisputed-double-many-to-one-association",level:3},{value:"The controversial, tangled scenario",id:"the-controversial-tangled-scenario",level:3},{value:"Getting Started with ManyToManyView",id:"getting-started-with-manytomanyview",level:2},{value:"Basic relationship mapping",id:"basic-relationship-mapping",level:3},{value:"Using @ManyToManyView",id:"using-manytomanyview",level:3},{value:"The essence of @ManyToManyView",id:"the-essence-of-manytomanyview",level:2}],u={toc:m};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"limitations-of-classic-orm-associations"},"Limitations of classic ORM associations"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"../../base/association"},"Basic Mapping/Associative Mapping"),", we learned about the classic associative mappings in ORM, including one-to-one, many-to-one, one-to-many and many-to-many."),(0,i.kt)("p",null,"However, there is one scenario that makes the choice of mapping mode very tangled. To show this scenario, let's start with a familiar scenario."),(0,i.kt)("h3",{id:"undisputed-many-to-many-association"},"Undisputed many-to-many association"),(0,i.kt)("p",null,"Let's look at a piece of DDL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table book(\n    ...omit...\n)engine=innodb;;\n\ncreate table author(\n    ...omit...  \n) engine=innodb;\n\n/* highlight-next-line */\ncreate table book_author_mapping(\n    book_id bigint unsigned not null,\n    author_id bigint unsigned not null\n) engine=innodb;\nalter table book_author_mapping\n    add constraint pk_book_author_mapping\n        primary key(book_id, author_id)\n;\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__book\n        foreign key(book_id)\n            references book(id)\n                on delete cascade\n;\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__author\n        foreign key(author_id)\n            references author(id)\n                on delete cascade\n;\n")),(0,i.kt)("p",null,"In this piece of DDL, ",(0,i.kt)("inlineCode",{parentName:"p"},"book_author_mapping")," table is very special, it only has two foreign keys, one pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"book")," table, and one pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," table. This kind of subtable with only two foreign keys is used to express the many-to-many association between two parent tables. "),(0,i.kt)("p",null,"ORM's many-to-many mapping will hide the intermediate table, that is, the intermediate table does not correspond to a Java/Kotlin entity type. Therefore, the intermediate table does not need an independent primary key, but directly uses the two foreign keys as a combined primary key."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In addition to the two associative foreign keys, the intermediate table must not have any other fields, which is a limitation of many-to-many associations in ORM.")),(0,i.kt)("p",null,"The corresponding many-to-many association in ORM is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Owning side: ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    ...other code omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    ...other code omitted...\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inverse side ",(0,i.kt)("em",{parentName:"p"},"(optional)"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'@Entity\npublic interface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'@Entity\ninterface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...other code omitted...\n}\n')))))),(0,i.kt)("h3",{id:"undisputed-double-many-to-one-association"},"Undisputed double many-to-one association"),(0,i.kt)("p",null,"Let's look at the second scenario, first, look at a piece of DDL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table order_(\n    ...omit...\n) engine=innodb;\n\ncreate table product(\n    ...omit...\n) engine=innodb;\n\n/* highlight-next-line */\ncreate table order_item(\n    id bigint unsigned not null auto_increment primary key, \n    order_id bigint unsigned not null,\n    product_id bigint unsigned not null,\n    /* highlight-next-line */\n    quantity int not null,\n    /* highlight-next-line */  \n    unit_price numeric(10, 2) not null\n) engine=innodb;\nalter table order_item\n    add constraint business_key_order_item\n        unique(order_id, product_id)\n;\nalter table order_item\n    add constraint fk_order_item__order\n        foreign key(order_id)\n            references order_(id)\n;\nalter table order_item\n    add constraint fk_order_item__product\n        foreign key(product_id)\n            references product(id)\n;\n")),(0,i.kt)("p",null,"This is a classic ",(0,i.kt)("inlineCode",{parentName:"p"},"order - order item - product")," association."),(0,i.kt)("p",null,"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"order-item")," looks a bit like the intermediate table of many-to-many, because it has two foreign keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"order_id")," pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"order_")," table and ",(0,i.kt)("inlineCode",{parentName:"p"},"product_id")," pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"product")," table."),(0,i.kt)("p",null,"However, ",(0,i.kt)("inlineCode",{parentName:"p"},"order-item")," is not an intermediate table, because it has other business fields, ",(0,i.kt)("inlineCode",{parentName:"p"},"quantity")," representing quantity of goods, and ",(0,i.kt)("inlineCode",{parentName:"p"},"unit_price")," representing a snapshot of the price of goods at the time of order."),(0,i.kt)("p",null,"Fortunately, for the classic ",(0,i.kt)("inlineCode",{parentName:"p"},"order - order item - product")," association, it is more intuitive to think of ",(0,i.kt)("inlineCode",{parentName:"p"},"order_item")," as an independent entity, with two many-to-one associations pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"order_")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"product")," respectively;\nRather than viewing ",(0,i.kt)("inlineCode",{parentName:"p"},"order-item")," as a join table and thinking there is a many-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"order_")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"product"),"."),(0,i.kt)("p",null,"It is precisely because ",(0,i.kt)("inlineCode",{parentName:"p"},"order_item")," is regarded as an independent entity that ",(0,i.kt)("inlineCode",{parentName:"p"},"order_item")," uses an independent primary key."),(0,i.kt)("p",null,"We can map these three tables in ORM using two many-to-one associations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OrderItem.order")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderItem.product")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="OrderItem.java"',title:'"OrderItem.java"'},"@Entity\npublic interface OrderItem {\n\n    @ManyToOne\n    // highlight-next-line\n    Order order();\n\n    @ManyToOne\n    // highlight-next-line\n    Product product();\n\n    int quantity();\n\n    BigDecimal unitPrice();\n\n    ...other code omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="OrderItem.kt"',title:'"OrderItem.kt"'},"@Entity\ninterface OrderItem {\n\n    @ManyToOne\n    // highlight-next-line\n    val order: Order\n\n    @ManyToOne\n    // highlight-next-line\n    val product: Product\n\n    val quantity: Int\n\n    val unitPrice: BigDecimal\n\n    ...other code omitted...\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Order.items")),(0,i.kt)("p",{parentName:"li"},"In such systems, it is often necessary to get the detail list according to the order, so we define a one-to-many property ",(0,i.kt)("inlineCode",{parentName:"p"},"Order.items")," as a mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderItem.order"),"."),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Order.java"',title:'"Order.java"'},'@Entity\n@Table(name = "ORDER_")\npublic interface Order {\n\n    @OneToMany(mappedBy = "order")\n    List<OrderItem> items();\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Order.kt"',title:'"Order.kt"'},'@Entity\n@Table(name = "ORDER_")\ninterface Order {\n\n    @OneToMany(mappedBy = "order")\n    val items: List<OrderItem>\n\n    ...other code omitted...\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not provide ",(0,i.kt)("inlineCode",{parentName:"p"},"Product.items")),(0,i.kt)("p",{parentName:"li"},"In such systems, it is rarely necessary to get the detail list based on the product ",(0,i.kt)("em",{parentName:"p"},"(if starting the analysis from the product side, it is usually a complex query rather than a simple association)"),", so a one-way ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderItem.product")," association is sufficient."),(0,i.kt)("p",{parentName:"li"},"So there is no need to show the code for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," entity."))),(0,i.kt)("h3",{id:"the-controversial-tangled-scenario"},"The controversial, tangled scenario"),(0,i.kt)("p",null,"In the previous text, we showed two business scenarios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scenario 1: The intermediate table ",(0,i.kt)("inlineCode",{parentName:"p"},"book_author_mapping")," is very clean, with only two foreign key fields, and is naturally mapped to a many-to-many association")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scenario 2: ",(0,i.kt)("inlineCode",{parentName:"p"},"order_item")," looks like an intermediate table but is not an intermediate table, because in addition to the two foreign keys it also needs to have other business fields.\nFortunately, people will choose to treat OrderItem as an independent entity and use two many-to-one associations to string the three entity types together."))),(0,i.kt)("p",null,"Next, let's look at scenario 3, first look at the DDL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table student(\n    ...omit...\n)engine=innodb;;\n\ncreate table course(\n    ...omit...\n) engine=innodb;\n\n/* highlight-next-line */\ncreate table learning_link (\n    id bigint unsigned not null auto_increment primary key,\n    student_id bigint unsigned not null,\n    course_id bigint unsigned not null,\n    /* highlight-next-line */\n    score int\n) engine=innodb;\nalter table learning_link\n    add constraint pk_student_course_mapping\n        primary key(student_id, course_id)\n;\nalter table learning_link\n    add constraint fk_student_course_mapping__student\n        foreign key(student_id)\n            references student(id)\n                on delete cascade\n;\nalter table learning_link\n    add constraint fk_student_course_mapping__course\n        foreign key(course_id)\n            references course(id)\n                on delete cascade\n;\n")),(0,i.kt)("p",null,"This piece of DDL represents the elective course system in schools. There is a many-to-many relationship between students and elective courses."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For students, it is of course very important to know which courses they have chosen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For schools, it is also very important to know which students have chosen each course, because teacher resources and teaching venues need to be arranged based on this information"))),(0,i.kt)("p",null,"That is, for the student entity and the course entity, associating with each other and querying each other is an important and high frequency operation. Therefore, abstracting bidirectional many-to-many associations between ",(0,i.kt)("inlineCode",{parentName:"p"},"student")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," is a very good choice."),(0,i.kt)("p",null,"Unfortunately, the elective relationship table ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_link")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"score")," field that can be null, null indicating that the exam has not yet taken place, non-null indicating the score after the exam. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Because of the existence of this field, the intermediate table is no longer clean, and cannot be simply mapped to the classic ORM many-to-many association. That is, this is not a simple scenario 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Of course, we can handle this problem using the method of scenario 2, treating ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_link")," as an independent entity, and using two many-to-one associations to string the three entity types together."),(0,i.kt)("p",{parentName:"li"},"However, for a large part of the upper layer business, what they really care about is only the mutual association between ",(0,i.kt)("inlineCode",{parentName:"p"},"student")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"course"),", and they don't care about the ",(0,i.kt)("inlineCode",{parentName:"p"},"score")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_link")," table.\n",(0,i.kt)("em",{parentName:"p"},"(That is, the non-foreign key business field ",(0,i.kt)("inlineCode",{parentName:"em"},"learning_link"),".",(0,i.kt)("inlineCode",{parentName:"em"},"score")," of the intermediate table is far less important than the relevant fields in scenario 2)"),".\nIn this case, scenario 2's solution will bring a higher cognitive burden, and scenario 1's way of thinking is obviously simpler."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This scenario is actually the most tangled scenario in classic ORM, which cannot be simply mapped to many-to-many associations, while hoping that some upper layer business can adopt the many-to-many mentality to simplify the problem."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToManyView")," is a powerful tool designed for such scenarios.")),(0,i.kt)("h2",{id:"getting-started-with-manytomanyview"},"Getting Started with ManyToManyView"),(0,i.kt)("p",null,"For the discussed scenario 3 above, Jimmer gave a two-step solution."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Basic association mapping:"),(0,i.kt)("p",{parentName:"li"},"First, treat ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_link")," as an independent entity according to scenario 2, and provide two many-to-one associations pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"student")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," respectively;\nConversely, ",(0,i.kt)("inlineCode",{parentName:"p"},"student")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," also use one-to-many associations to reference ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_link"),". That is, use two bidirectional one-to-many associations to string the three entity types together.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToManyView"),":"),(0,i.kt)("p",{parentName:"li"},"Then, on the basis of the first step, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToManyView")," to quickly simulate the effect of scenario 1."))),(0,i.kt)("h3",{id:"basic-relationship-mapping"},"Basic relationship mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink.student")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink.course")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="LearningLink.java"',title:'"LearningLink.java"'},"@Entity\npublic interface LearningLink {\n\n    @ManyToOne\n    // highlight-next-line\n    Student student(); \u2460\n\n    @ManyToOne\n    // highlight-next-line  \n    Course course(); \u2461\n\n    Integer score();\n\n    ...other code omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="LearningLink.kt"',title:'"LearningLink.kt"'},"@Entity\ninterface LearningLink {\n\n    @ManyToOne\n    // highlight-next-line\n    val student: Student \u2460\n\n    @ManyToOne \n    // highlight-next-line\n    val course: Course \u2461\n\n    val score: Int?\n\n    ...other code omitted...\n}\n")))),(0,i.kt)("p",{parentName:"li"},"Where \u2460 and \u2461 will be referenced by subsequent code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Student.learningLinks")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Student.java"',title:'"Student.java"'},'@Entity\npublic interface Student {\n\n    @OneToMany(mappedBy = "student")\n    // highlight-next-line\n    List<LearningLink> learningLinks(); \u2462\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Student.kt"',title:'"Student.kt"'},'@Entity\ninterface Student {\n\n    @OneToMany(mappedBy = "student")\n    // highlight-next-line\n    val learningLinks: List<LearningLink> \u2462\n\n    ...other code omitted...\n}\n')))),(0,i.kt)("p",{parentName:"li"},"Where \u2462 will be referenced by subsequent code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Course.learningLinks")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Course.java"',title:'"Course.java"'},'@Entity\npublic interface Course {\n\n    @OneToMany(mappedBy = "course")\n    // highlight-next-line\n    List<LearningLink> learningLinks(); \u2463\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Course.kt"',title:'"Course.kt"'},'@Entity\ninterface Course {\n\n    @OneToMany(mappedBy = "course")\n    // highlight-next-line\n    val learningLinks: List<LearningLink> \u2463\n\n    ...other code omitted...\n}\n')))),(0,i.kt)("p",{parentName:"li"},"Where \u2463 will be referenced by subsequent code"))),(0,i.kt)("h3",{id:"using-manytomanyview"},"Using @ManyToManyView"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simulate many-to-many association: ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.courses")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Student.java"',title:'"Student.java"'},'@Entity\npublic interface Student {\n\n    @ManyToManyView(\n        prop = "learningLinks", \u2776 -> \u2462\n        deeperProp = "course" \u2777 -> \u2461 \n    )\n    // highlight-next-line\n    List<Course> courses();\n\n    // The one-to-many association `learningLinks` \n    // has been declared in step 1\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks(); \u2462\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Student.kt"',title:'"Student.kt"'},'@Entity\ninterface Student {\n\n    @ManyToManyView(\n        prop = "learningLinks", \u2776 -> \u2462\n        deeperProp = "course" \u2777 -> \u2461\n    )\n    // highlight-next-line\n    val courses: List<Course>\n\n    // The one-to-many association `learningLinks` \n    // has been declared in step 1\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink> \u2462\n\n    ...other code omitted...\n}\n')))),(0,i.kt)("p",{parentName:"li"},"The current property ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.courses")," can be obtained in two steps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 ",(0,i.kt)("inlineCode",{parentName:"p"},'prop = "learningLinks"')),(0,i.kt)("p",{parentName:"li"},"First, get all ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," objects through another property of the current entity ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.learningLinks")," \u2462")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 ",(0,i.kt)("inlineCode",{parentName:"p"},'deeperProp = "course"')),(0,i.kt)("p",{parentName:"li"},"For each ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," object obtained in the previous step, ",(0,i.kt)("inlineCode",{parentName:"p"},"Course")," can be further obtained through the ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink.course")," property \u2461"),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," entity has only one many-to-one association pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Course")," entity, there is no ambiguity, so ",(0,i.kt)("inlineCode",{parentName:"p"},'deeperProp = "course"')," can be omitted here"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simulate many-to-many association: ",(0,i.kt)("inlineCode",{parentName:"p"},"Course.students")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Course.java"',title:'"Course.java"'},'@Entity\npublic interface Course {\n\n    @ManyToManyView(\n        prop = "learningLinks", \u2776 -> \u2463\n        deeperProp = "student" \u2777 -> \u2460  \n    )\n    // highlight-next-line\n    List<Student> students();\n\n    // The one-to-many association `learningLinks` has been declared in step 1\n    @OneToMany(mappedBy = "course")\n    List<LearningLink> learningLinks(); \u2463\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Course.kt"',title:'"Course.kt"'},'@Entity\ninterface Course {\n\n    @ManyToManyView(\n        prop = "learningLinks", \u2776 -> \u2463\n        deeperProp = "student" \u2777 -> \u2460\n    )\n    // highlight-next-line\n    val students: List<Student>\n\n    // The one-to-many association `learningLinks` has been declared in step 1  \n    @OneToMany(mappedBy = "course")\n    val learningLinks: List<LearningLink> \u2463\n\n    ...other code omitted...\n}\n')))),(0,i.kt)("p",{parentName:"li"},"The current property ",(0,i.kt)("inlineCode",{parentName:"p"},"Course.students")," can be obtained in two steps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 ",(0,i.kt)("inlineCode",{parentName:"p"},'prop = "learningLinks"')),(0,i.kt)("p",{parentName:"li"},"First, get all ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," objects through another property of the current entity ",(0,i.kt)("inlineCode",{parentName:"p"},"Course.learningLinks")," \u2463")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 ",(0,i.kt)("inlineCode",{parentName:"p"},'deeperProp = "student"')),(0,i.kt)("p",{parentName:"li"},"For each ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," object obtained in the previous step, ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," can be further obtained through the ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink.student")," property \u2460"),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," entity has only one many-to-one association pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," entity, there is no ambiguity, so ",(0,i.kt)("inlineCode",{parentName:"p"},'deeperProp = "student"')," can be omitted here")))))),(0,i.kt)("h2",{id:"the-essence-of-manytomanyview"},"The essence of @ManyToManyView"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The property declared by ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToManyView")," does not maintain its own data, it is only a view of the original property, which proxies and wraps the collection returned by the original property."),(0,i.kt)("p",{parentName:"li"},"Take the Java example in this article ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," side as an example (the ",(0,i.kt)("inlineCode",{parentName:"p"},"Course")," side is the same)."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Original association property: List","<","LearningLink",">"," learningLinks();")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View association property: List","<","Course",">"," courses();"))),(0,i.kt)("p",{parentName:"li"},"You can understand the ManyToManyView view property with this pseudocode:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Override  \npublic List<Course> courses() {\n    return new ListProxy<>(\n        this.learningLinks(),  \n        LearningLink::course\n    );\n}\n")),(0,i.kt)("p",{parentName:"li"},"The view association property returns a proxy collection that wraps the collection of the original property and transforms the elements of the original collection."),(0,i.kt)("p",{parentName:"li"},"It is obvious that the two are essentially the same and share the same data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When constructing entity objects, only the original property can be set, not the view property."),(0,i.kt)("p",{parentName:"li"},"This is different from ",(0,i.kt)("a",{parentName:"p",href:"./id-view"},"@IdView"),". For ",(0,i.kt)("a",{parentName:"p",href:"./id-view"},"@IdView"),", both the original property and the view property can be set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Whether it is the original property or the view property, the preprocessor will generate code to match them, so both can be used in ",(0,i.kt)("a",{parentName:"p",href:"../../../query/object-fetcher"},"object fetchers")," and strongly typed SQL DSL."))))}c.isMDXComponent=!0}}]);