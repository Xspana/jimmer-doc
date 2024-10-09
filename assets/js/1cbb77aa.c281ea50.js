"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9223],{21508:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var t=i(74848),s=i(28453),a=i(11470),o=i(19365),r=i(64087),d=i(46845);const l={sidebar_position:5,title:"Save Associations"},c=void 0,h={id:"mutation/save-command/association",title:"Save Associations",description:"Association Types",source:"@site/docs/mutation/save-command/association.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/association",permalink:"/jimmer-doc/docs/mutation/save-command/association",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/association.mdx",tags:[],version:"current",lastUpdatedAt:1712768787e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Save Associations"},sidebar:"tutorialSidebar",previous:{title:"Incomplete Object",permalink:"/jimmer-doc/docs/mutation/save-command/incomplete"},next:{title:"Dissociation Operations",permalink:"/jimmer-doc/docs/mutation/save-command/dissociation"}},p={},u=[{value:"Association Types",id:"association-types",level:2},{value:"Short Association",id:"short-association",level:3},{value:"Long Association",id:"long-association",level:3},{value:"Speciality of One-To-Many Associations",id:"speciality-of-one-to-many-associations",level:2},{value:"Entity Definition",id:"entity-definition",level:3},{value:"Using Save Command",id:"using-save-command",level:3},{value:"Dissociate Operations",id:"dissociate-operations",level:2}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"association-types",children:"Association Types"}),"\n",(0,t.jsx)(n.p,{children:"From the user's perspective, there are two types of associations in the data structure to be saved:"}),"\n",(0,t.jsx)(n.h3,{id:"short-association",children:"Short Association"}),"\n",(0,t.jsx)(n.p,{children:"A so-called short association indicates that only the association itself between the current object and other objects is modified, with no interest in modifying the associated objects."}),"\n",(0,t.jsxs)(n.p,{children:["Usually, the UI design will use radio buttons ",(0,t.jsx)(n.em,{children:"(associated reference)"})," or checkboxes ",(0,t.jsx)(n.em,{children:"(associated collection)"}),"."]}),"\n",(0,t.jsx)(r.M,{}),"\n",(0,t.jsx)("div",{children:"\xa0"}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Single-select dropdown corresponds to the many-to-one association ",(0,t.jsx)(n.code,{children:"Book.store"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Multiple-select dropdown corresponds to the many-to-many association ",(0,t.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"In actual projects, the available data may be too much to be designed as a dropdown UI. In this case, an modal selector with filtering and pagination can be used instead of a dropdown, which is a common workaround."})}),"\n",(0,t.jsxs)(n.p,{children:["Since the user only wants to modify the association itself between the current object and other objects, without further modifying the associated objects, the UI cannot have nested multi-level associations. This is why it is called a ",(0,t.jsx)(n.strong,{children:"short association"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"When passing data structures of arbitrary shapes as parameters to the save command, short associations can be specified in two ways:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The associated object has only the id property"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The associated object has only the key properties"}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Two examples are shown below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The associated object has only the id property:"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Objects.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // Associated object has only id property  \n        // highlight-next-line\n        store.setId(2L);\n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only id property\n        // highlight-next-line \n        author.setId(4L); \n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only id property\n        // highlight-next-line\n        author.setId(5L);\n    });\n});\nsqlClient.save(book);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store {\n        // Associated object has only id property\n        // highlight-next-line\n        id = 2L\n    }\n    authors().addBy {\n        // Associated object has only id property\n        // highlight-next-line\n        id = 4L\n    }\n    authors().addBy {\n        // Associated object has only id property \n        // highlight-next-line\n        id = 5L\n    }\n}\nsqlClient.save(book)\n'})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"The data structure is hard-coded here only for demonstration. In actual projects the data structure to be saved is submitted by the front-end UI."}),(0,t.jsxs)(n.p,{children:["Of course, if the user defines the ",(0,t.jsx)(n.code,{children:"authorIds"})," property according to ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"Mapping/Advanced mapping/View Properties/IdView"}),", the above code can be simplified, for example:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"draft.setAuthorIds(Arrays.asList(4L, 5L));\n"})}),(0,t.jsxs)(n.p,{children:["For greater applicability of the examples, it is not assumed here that the user has defined ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"IdView"})," properties for the entity type. Subsequent documents will not be reminded again."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The associated object has only the key property:"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"In the following code, it is assumed that:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The key property of ",(0,t.jsx)(n.code,{children:"BookStore"})," type is ",(0,t.jsx)(n.code,{children:"name"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The key properties of ",(0,t.jsx)(n.code,{children:"Author"})," type are ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"In actual projects, this uniqueness constraint is not reasonable. It is assumed here to simplify the example. Please don't take this detail too seriously."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Objects.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // Associated object has only key property, \n        // i.e. `BookStore.name`\n        // highlight-next-line\n        store.setName("MANNING");\n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only key properties, \n        // i.e. `Author.firstName` and `Author.lastName` \n        // highlight-next-line\n        author.setFirstName("Boris").setLastName("Cherny");\n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only key properties, \n        // i.e. `Author.firstName` and `Author.lastName`\n        // highlight-next-line\n        author.setFirstName("Samer").setLastName("Buna");\n    });\n});\nsqlClient.save(book);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store {\n        // Associated object has only key property, i.e. `BookStore.name`\n        // highlight-next-line\n        name = "MANNING"\n    }\n    authors().addBy {\n        // Associated object has only key properties, i.e. `Author.firstName` and `Author.lastName`\n        // highlight-next-line\n        firstName = "Boris"\n        // highlight-next-line  \n        lastName = "Cherny"\n    }\n    authors().addBy {\n        // Associated object has only key properties, i.e. `Author.firstName` and `Author.lastName`\n        // highlight-next-line\n        firstName = "Samer"\n        // highlight-next-line\n        lastName = "Buna"\n    }\n}\nsqlClient.save(book)\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"long-association",children:"Long Association"}),"\n",(0,t.jsx)(n.p,{children:"A so-called long association indicates that in addition to modifying the association itself between the current object and other objects, the associated objects need to be further modified."}),"\n",(0,t.jsx)(n.p,{children:"Usually, the UI design will use nested tables, for example:"}),"\n",(0,t.jsx)(d.Y,{}),"\n",(0,t.jsx)("div",{children:"\xa0"}),"\n",(0,t.jsxs)(n.p,{children:["Since the user wants not only to modify the association between the current object and other objects, but also to further modify the associated objects, and the associated objects can contain deeper associations, theoretically the UI can have nested multi-level associations. This is why it is called a ",(0,t.jsx)(n.strong,{children:"long association"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Although designers deliberately avoid nesting deeper nested tables in nested tables to ensure UI simplicity, there are still scenarios in actual projects that require maintaining multi-level nested associations on the UI, such as:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The form itself is a tree structure that is edited and then saved as a whole."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Visual UI design, because the UI components themselves are tree structures. After a series of visual drag-and-drop designs by the user, the UI component tree is saved as a whole."}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"When passing data structures of arbitrary shapes as parameters to the save command, long associations can be specified in two ways:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the id property has already been specified for the associated object, continue to specify any non-id properties for the object ",(0,t.jsx)(n.em,{children:"(including key properties)"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Otherwise, all key properties and other properties must be been specified for the associated object."}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:"Regardless of which approach above, specify at least one property for associated objects that is neither id nor key."})]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Order order = Objects.createOrder(draft -> {\n    draft.applyCustomer(customer -> customer.setId(1L));\n    draft.setProvince("Prenzlauer Berg");\n    draft.setCity("Berlin");\n    draft.setAddress("Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany");\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(1L));\n        // Property neither id nor key  \n        // highlight-next-line\n        item.setQuantity(2);\n    });\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(10L));\n        // Property neither id nor key\n        // highlight-next-line\n        item.setQuantity(1);\n    });\n});\nsqlClient.save(order);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val order = new(Order::class).by {\n    customer { id = 1L }\n    province = "Prenzlauer Berg"\n    city = "Berlin" \n    address = "Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"\n    items().addBy {\n        product { id = 1L }\n        // Property neither id nor key\n        // highlight-next-line\n        quantity = 2\n    }\n    items().addBy {\n        product { id = 10L }\n        // Property neither id nor key\n        // highlight-next-line\n        quantity = 1\n    }\n}\nsqlClient.save(order)\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The data structure is hard-coded here only for demonstration. In actual projects the data structure to be saved is submitted by the front-end UI."})}),"\n",(0,t.jsx)(n.h2,{id:"speciality-of-one-to-many-associations",children:"Speciality of One-To-Many Associations"}),"\n",(0,t.jsx)(n.p,{children:"It was mentioned before:"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["If the entity type declares the Key property ",(0,t.jsx)(n.em,{children:"(which also means the id has no business meaning other than serving as a unique identifier)"}),", then"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For the aggregated root object to be saved, it is recommended to specify either the id property or the key properties, otherwise it will be understood as forced insertion."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For the associated objects to be saved that this article is discussing, either the id property or all key properties must be specified, otherwise an exception will occur."}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"However, there is one exceptional case for one-to-many relationships."}),"\n",(0,t.jsx)(n.p,{children:"Let's look at an example:"}),"\n",(0,t.jsx)(n.h3,{id:"entity-definition",children:"Entity Definition"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key \n    String name();\n\n    // highlight-next-line\n    @Key\n    @Nullable\n    @ManyToOne\n    TreeNode parent();\n\n    ...other properties omitted... \n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt" ',children:"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key \n    @ManyToOne\n    val parent: TreeNode?\n\n    ...other properties omitted...\n}\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"using-save-command",children:"Using Save Command"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(food -> {\n    food\n        // highlight-next-line\n        .setParent(null)\n        .setName("Food")\n        .addIntoChildNodes(drink -> {\n            drink\n                .setName("Drink")\n                .addIntoChildNodes(cococola -> {\n                    cococola.setName("Cococola");\n                })\n                .addIntoChildNodes(fanta -> {\n                    fanta.setName("Fanta");\n                });\n            ;\n        })\n        .addIntoAuthors(bread -> {\n            bread\n                .setName("Bread")\n                .addIntoChildNodes(daguette -> {\n                    daguette.setName("Baguette");\n                })\n                .addIntoChildNodes(ciabatta -> {\n                    ciabatta.setName("Ciabatta");\n                })\n        });\n    ;\n});\nsqlClient.save(treeNode);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by {\n    // highlight-next-line\n    parent = null\n    name = "Food"\n    childNodes().addBy {\n        name = "Drinks" \n        childNodes().addBy {\n            name = "Cococola"\n        }\n        childNodes().addBy {\n            name = "Fanta"\n        }\n    }\n    childNodes().addBy {\n        name = "Bread"\n        childNodes().addBy {\n            name = "Baguette"\n        }\n        childNodes().addBy {\n            name = "Ciabatta"\n        }\n    }\n}\nsqlClient.save(treeNode)\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The key properties of the ",(0,t.jsx)(n.code,{children:"TreeNode"})," type are ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"parent"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the root node, if the id property is not specified, it is recommended to specify the ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"parent"})," properties, otherwise it will be understood as forced insertion."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the child nodes, if the id property is not specified, the ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"parent"})," properties must be specified, otherwise an exception will occur."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["However, in this example, except for the root node object, the ",(0,t.jsx)(n.code,{children:"parent"})," property of all other objects is not specified. This code does not seem to execute normally."]}),"\n",(0,t.jsx)(n.p,{children:"In fact, this code can run correctly, because the save command makes a special provision for one-to-many associations:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If the data structure to be saved contains some child objects held by the parent object through a one-to-many association ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.code,{children:"TreeNode.childNodes"})," in this example)"]}),", then the reverse many-to-one association of these child objects ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.code,{children:"TreeNode.parent"})," in this example)"]})," will be deemed by the save command to have been set."]})}),"\n",(0,t.jsxs)(n.p,{children:["So in the above example, the save command will consider the ",(0,t.jsx)(n.code,{children:"parent"})," property of all child nodes to have already been set. That is, all child objects have both the ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"parent"})," properties at the same time, so the save command can run smoothly."]}),"\n",(0,t.jsx)(n.h2,{id:"dissociate-operations",children:"Dissociate Operations"}),"\n",(0,t.jsxs)(n.p,{children:["For associated objects, insert or update operations are not much different from saving the aggregated root object operations introduced earlier. The user just needs to remember that associated objects are not controlled by ",(0,t.jsx)(n.a,{href:"./save-mode",children:"Save Mode"})," ",(0,t.jsxs)(n.em,{children:["(or it can be considered that the save mode for associated objects is only ",(0,t.jsx)(n.code,{children:"UPSERT"}),")"]}),"."]}),"\n",(0,t.jsx)(n.p,{children:"However, associated objects have a very special operation: dissociation."}),"\n",(0,t.jsxs)(n.p,{children:["Dissociation is a very important concept. Due to limited space, we will discuss it in detail in the ",(0,t.jsx)(n.a,{href:"./dissociation",children:"next document"}),"."]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},46845:(e,n,i)=>{i.d(n,{Y:()=>T});var t=i(96540),s=i(67733),a=i(67512),o=i(43581),r=i(80421),d=i(1489),l=i(71543),c=i(57416),h=i(53881),p=i(88933),u=i(46780),m=i(19591),j=i(618),x=i(73231),y=i(30854),g=i(16718),b=i(4671),v=i(67034),f=i(63051),A=i(15993),k=i(28968),I=i(13407),N=i(46831),w=i(44586),C=i(82470),B=i(16712),S=i(74848);const T=(0,t.memo)((()=>{const{i18n:e}=(0,w.A)(),n=(0,B.o)(),i=(0,t.useMemo)((()=>n?L:P),[n]),T=(0,t.useMemo)((()=>{const e=new Map;for(const n of i)e.set(n.id,n);return e}),[i]),U=(0,t.useMemo)((()=>n?q:M),[n]),z=(0,t.useMemo)((()=>{const e=new Map;for(const n of U)e.set(n.id,n);return e}),[U]),[D,F]=(0,C.e)((()=>({userId:1,province:T.get(1).province,city:T.get(1).city,address:T.get(1).address,items:[{__rowId:1,productId:1,name:z.get(1).name,quantity:2},{__rowId:2,productId:10,name:z.get(10).name,quantity:1}]}))),O=(0,t.useMemo)((()=>Math.max(...D.items.map((e=>e.__rowId)))+1),[D]),E=(0,t.useCallback)((e=>{const n=T.get(parseInt(e.target.value));void 0!==n&&F((e=>{e.userId=n.id,e.province=n.province,e.city=n.city,e.address=n.address}))}),[F,T]),G=(0,t.useCallback)((e=>{F((n=>{n.province=e.target.value}))}),[F]),K=(0,t.useCallback)((e=>{F((n=>{n.city=e.target.value}))}),[F]),W=(0,t.useCallback)((e=>{F((n=>{n.address=e.target.value}))}),[F]),V=(0,t.useCallback)(((e,n)=>{F((i=>{for(const t of i.items)if(t.__rowId===n){t.productId=parseInt(e.target.value),_(i);break}}))}),[F]),Q=(0,t.useCallback)(((e,n)=>{F((i=>{for(const t of i.items)if(t.__rowId===n){t.quantity=parseInt(e.target.value),_(i);break}}))}),[F]),J=(0,t.useCallback)((e=>{F((n=>{for(let i=n.items.length-1;i>=0;--i)if(n.items[i].__rowId===e){n.items.splice(i,1);break}}))}),[F]),R=(0,t.useCallback)((()=>{F((e=>{e.items.push({__rowId:O,quantity:1})}))}),[F,O]),[Y,H]=(0,t.useState)(!1),X=(0,t.useCallback)((()=>{H(!0)}),[]),Z=(0,t.useCallback)((()=>{H(!1)}),[]);return(0,S.jsxs)(c.A,{elevation:3,style:{padding:"1.5rem"},children:[(0,S.jsx)(s.A,{component:"form",noValidate:!0,autoComplete:"off",children:(0,S.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,S.jsx)(d.Ay,{item:!0,xs:4,children:(0,S.jsx)(o.A,{fullWidth:!0,select:!0,label:n?"\u8d2d\u4e70\u4eba":"Purchaser",value:D.userId,onChange:E,children:i.map((e=>(0,S.jsx)(r.A,{value:e.id,children:e.nickName},e.id)))})}),(0,S.jsx)(d.Ay,{item:!0,xs:4,children:(0,S.jsx)(o.A,{fullWidth:!0,label:n?"\u7701\u4efd":"Province",value:D.province,onChange:G})}),(0,S.jsx)(d.Ay,{item:!0,xs:4,children:(0,S.jsx)(o.A,{fullWidth:!0,label:n?"\u57ce\u5e02":"City",value:D.city,onChange:K})}),(0,S.jsx)(d.Ay,{item:!0,xs:12,children:(0,S.jsx)(o.A,{fullWidth:!0,label:n?"\u5730\u5740":"Address",value:D.address,onChange:W})}),(0,S.jsxs)(d.Ay,{item:!0,xs:12,children:[(0,S.jsx)(l.A,{textAlign:"left",children:n?"\u8ba2\u5355\u660e\u7ec6":"Order Items"}),(0,S.jsx)(m.A,{component:c.A,children:(0,S.jsxs)(h.A,{size:"small",children:[(0,S.jsx)(j.A,{children:(0,S.jsxs)(x.A,{children:[(0,S.jsx)(u.A,{children:n?"\u5546\u54c1":"Commodity"}),(0,S.jsx)(u.A,{children:n?"\u6570\u91cf":"Quantity"}),(0,S.jsx)(u.A,{children:n?"\u5355\u4ef7":"Unit price"}),(0,S.jsx)(u.A,{children:n?"\u660e\u7ec6\u4ef7":"Item price"}),(0,S.jsx)(u.A,{children:n?"\u5220\u9664":"Delete"})]})}),(0,S.jsx)(p.A,{children:D.items.map((e=>{const n=void 0!==e.productId?z.get(e.productId):void 0;return(0,S.jsxs)(x.A,{children:[(0,S.jsx)(u.A,{children:(0,S.jsx)(o.A,{select:!0,value:n?.id,variant:"standard",size:"small",onChange:n=>{V(n,e.__rowId)},children:U.map((e=>(0,S.jsx)(r.A,{value:e.id,children:e.name},e.id)))})}),(0,S.jsx)(u.A,{children:(0,S.jsx)(o.A,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:n=>{Q(n,e.__rowId)}})}),(0,S.jsx)(u.A,{children:n?.price}),(0,S.jsx)(u.A,{children:void 0!==n&&n.price*e.quantity}),(0,S.jsx)(u.A,{children:(0,S.jsx)(b.A,{onClick:()=>J(e.__rowId),children:(0,S.jsx)(v.A,{})})})]},e.__rowId)}))}),(0,S.jsx)(y.A,{children:(0,S.jsx)(x.A,{children:(0,S.jsx)(u.A,{colSpan:5,children:(0,S.jsxs)(a.A,{onClick:R,children:[(0,S.jsx)(g.A,{}),n?"\u6dfb\u52a0":"Add"]})})})})]})})]}),(0,S.jsxs)(d.Ay,{item:!0,xs:12,children:[n?"\u603b\u989d":"Total price",":",D.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>z.get(e.productId).price*e.quantity)).reduce(((e,n)=>e+n),0)]}),(0,S.jsx)(d.Ay,{item:!0,xs:12,children:(0,S.jsx)(a.A,{variant:"contained",onClick:X,children:n?"\u63d0\u4ea4":"Submit"})})]})}),(0,S.jsxs)(f.A,{open:Y,onClose:Z,children:[(0,S.jsx)(N.A,{children:n?"\u4fe1\u606f":"Info"}),(0,S.jsx)(k.A,{children:(0,S.jsx)(I.A,{children:n?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,S.jsx)(A.A,{children:(0,S.jsx)(a.A,{onClick:Z,children:n?"\u5173\u95ed":"Close"})})]})]})})),L=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],P=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],q=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],M=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function _(e){const n=e.items,i=new Map;for(let t=0;t<n.length;t++){const e=n[t];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){n.splice(t--,1);continue}if(void 0===e.productId)continue;const s=i.get(e.productId);void 0===s?i.set(e.productId,e):(s.quantity+=e.quantity,n.splice(t--,1))}}},64087:(e,n,i)=>{i.d(n,{M:()=>b});var t=i(44586),s=i(31729),a=i(48440),o=i(80421),r=i(57416),d=i(18441),l=i(68999),c=i(43581),h=i(63051),p=i(46831),u=i(28968),m=i(15993),j=i(13407),x=i(67512),y=i(96540),g=i(74848);const b=(0,y.memo)((()=>{const[e,n]=(0,y.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),i=(0,y.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),b=(0,y.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),v=(0,y.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),f=(0,y.useCallback)((e=>{let i;const t=e.target.value;i="string"==typeof t?parseInt(t):t,-1===i&&(i=void 0),n((e=>({...e,storeId:i})))}),[]),A=(0,y.useCallback)((e=>{let i=[];console.log(e.target.value);const t=e.target.value;i="string"==typeof t?t.split(",").map((e=>parseInt(e))):t,n((e=>({...e,authorIds:i})))}),[]),{i18n:k}=(0,t.A)(),I=(0,y.useMemo)((()=>"zh"==k.currentLocale||"zh_cn"==k.currentLocale||"zh_CN"==k.currentLocale),[k.currentLocale]),[N,w]=(0,y.useState)(!1),C=(0,y.useCallback)((()=>{w(!0)}),[]),B=(0,y.useCallback)((()=>{w(!1)}),[]);return(0,g.jsxs)(r.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,g.jsxs)(l.A,{spacing:2,children:[(0,g.jsx)("h1",{children:"Book Form"}),(0,g.jsx)(c.A,{label:"Name",value:e.name,onChange:i,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,g.jsx)(c.A,{label:"Edition",type:"number",value:e.edition,onChange:b}),(0,g.jsx)(c.A,{label:"Price",type:"number",value:e.price,onChange:v}),(0,g.jsxs)(s.A,{fullWidth:!0,children:[(0,g.jsx)(a.A,{id:"store-select-label",children:"Store"}),(0,g.jsxs)(d.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:f,children:[(0,g.jsx)(o.A,{value:-1,children:"--NONE--"}),(0,g.jsx)(o.A,{value:1,children:"O'REILLY"}),(0,g.jsx)(o.A,{value:2,children:"MANNING"})]})]}),(0,g.jsxs)(s.A,{fullWidth:!0,children:[(0,g.jsx)(a.A,{id:"author-multi-select-label",children:"Authors"}),(0,g.jsxs)(d.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:A,children:[(0,g.jsx)(o.A,{value:1,children:"Eve Procello"}),(0,g.jsx)(o.A,{value:2,children:"Alex Banks"}),(0,g.jsx)(o.A,{value:3,children:"Dan Vanderkam"}),(0,g.jsx)(o.A,{value:4,children:"Boris Cherny"}),(0,g.jsx)(o.A,{value:5,children:"Samer Buna"})]})]}),(0,g.jsx)(s.A,{children:(0,g.jsx)(x.A,{onClick:C,variant:"contained",children:I?"\u63d0\u4ea4":"Submit"})})]}),(0,g.jsxs)(h.A,{open:N,onClose:B,children:[(0,g.jsx)(p.A,{children:I?"\u4fe1\u606f":"Info"}),(0,g.jsx)(u.A,{children:(0,g.jsx)(j.A,{children:I?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,g.jsx)(m.A,{children:(0,g.jsx)(x.A,{onClick:B,children:"\u5173\u95ed"})})]})]})}))},16712:(e,n,i)=>{i.d(n,{o:()=>s});var t=i(44586);function s(){const{i18n:e}=(0,t.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}}}]);