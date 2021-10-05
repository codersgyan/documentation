"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1079],{113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(7462),i=n(3366),a=(n(7294),n(4137)),s={sidebar_position:5},r="Low Coupling & High Cohesion",l={unversionedId:"guides/low-coupling",id:"guides/low-coupling",isDocsHomePage:!1,title:"Low Coupling & High Cohesion",description:"Application modules should be designed as having high cohesion (aimed at solving one determined task) and low coupling (independent on other modules as possible)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/low-coupling.md",sourceDirName:"guides",slug:"/guides/low-coupling",permalink:"/en/docs/guides/low-coupling",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/low-coupling.md",tags:[],version:"current",lastUpdatedAt:1633435656,formattedLastUpdatedAt:"10/5/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Migration from v1",permalink:"/en/docs/guides/migration-from-v1"},next:{title:"Decouple entities",permalink:"/en/docs/guides/decouple-entities"}},p=[{value:"Composition of components (UI level)",id:"composition-of-components-ui-level",children:[{value:"Example",id:"example",children:[]}]},{value:"Layer composition (APP level)",id:"layer-composition-app-level",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Total",id:"total",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"low-coupling--high-cohesion"},"Low Coupling & High Cohesion"),(0,a.kt)("p",null,"Application modules should be designed as having ",(0,a.kt)("strong",{parentName:"p"},"high cohesion")," (aimed at solving one determined task) and ",(0,a.kt)("strong",{parentName:"p"},"low coupling")," (independent on other modules as possible)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"coupling-cohesion-themed",src:n(5596).Z})),(0,a.kt)("p",null,"Within the framework of the methodology, this is achieved through:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/app-splitting"},"Splitting the application")," into layers and slices-modules that implement specific functionality."),(0,a.kt)("li",{parentName:"ul"},"The requirement for each module is to provide a ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/public-api"},"public access interface")),(0,a.kt)("li",{parentName:"ul"},"Introduction of special restrictions on ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/cross-communication"},"interaction of modules with each other"),' - each module can depend only on "underlying" modules, but not on modules from the same or higher layer.')),(0,a.kt)("h2",{id:"composition-of-components-ui-level"},"Composition of components (UI level)"),(0,a.kt)("p",null,"The majority of modern UI frameworks and libraries provide a component model in which each component can have its own properties, its own state and child components, as well as, often, slots."),(0,a.kt)("p",null,"This model allows you to assemble the interface as a ",(0,a.kt)("strong",{parentName:"p"},"composition of various components that are not directly related to each other")," and, thereby, achieve ",(0,a.kt)("strong",{parentName:"p"},"low coupling")," of the interface components"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's consider such a composition using the example of a ",(0,a.kt)("strong",{parentName:"p"},"list with a header:")),(0,a.kt)("h4",{id:"laying-the-extensibility"},"Laying the extensibility"),(0,a.kt)("p",null,"The list component will not itself determine the type and structure of the header components and list elements, instead it will accept them as parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'interface ListProps {\n    Header: Component;\n    Items: Component;\n}\n\nconst List: Component<ListProps> = ({ Header, Items }) => (\n    <div class="wrapper">\n        {Header}\n        <ul class="...">\n            {Items}\n        </ul>\n    </div>\n)\n\n')),(0,a.kt)("h4",{id:"using-the-composition"},"Using the composition"),(0,a.kt)("p",null,"This allows you to ",(0,a.kt)("strong",{parentName:"p"},"reuse and independently change")," components of different versions of the header and list items. The components of the header and list elements can have both their local state and their binding to any parts of the general state of the application - the list component will not know anything about it, and therefore will not depend on it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<List Header={<FancyHeader />} Items={<ToDoItems />} />\n\n<List Items={<CartItems />} />\n\n<List Header={<FancyHeaderV2 color="red" />} Items={<FancyItems />} />\n\n')),(0,a.kt)("h2",{id:"layer-composition-app-level"},"Layer composition (APP level)"),(0,a.kt)("p",null,"The methodology suggests dividing the functionality that is valuable for the user into separate modules - ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/layers/features"},(0,a.kt)("strong",{parentName:"a"},"features")),", and the logic related to business entities - ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/layers/entities"},(0,a.kt)("strong",{parentName:"a"},"entities")),". Both features and entities ",(0,a.kt)("strong",{parentName:"p"},"should be designed as highly connected modules"),", i.e. aimed at solving ",(0,a.kt)("strong",{parentName:"p"},"one specific task")," or concentrated around ",(0,a.kt)("strong",{parentName:"p"},"one specific entity.")),(0,a.kt)("p",null,"All interactions between such modules, similar to the UI components from the example above, should be organized as a ",(0,a.kt)("strong",{parentName:"p"},"composition of various modules.")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"Using the example of a chat application with the following features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you can open the contact list and select a friend"),(0,a.kt)("li",{parentName:"ul"},"you can open a conversation with a selected friend")),(0,a.kt)("p",null,"Within the framework of the methodology, it can be represented something like this:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/layers/entities"},"Entities")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User (contains the user's state)"),(0,a.kt)("li",{parentName:"ul"},"Contact (the state of the contact list, tools for working with an individual contact)"),(0,a.kt)("li",{parentName:"ul"},"Correspondence (the state of the current correspondence and working with it)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/layers/features"},"Features")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The form of sending a message"),(0,a.kt)("li",{parentName:"ul"},"Correspondence selection menu")),(0,a.kt)("h4",{id:"lets-tie-it-all-together"},"Let's tie it all together"),(0,a.kt)("p",null,"The application, to begin with, will have one page, the interface will be based on a slightly modified component from the first example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=page/main/ui.tsx",title:"page/main/ui.tsx"},"<List\n    Header={<ConversationSwitch />}\n    Items={<Messages />}\n    Footer={<MessageInput />}\n/>\n")),(0,a.kt)("h4",{id:"data-model"},"Data model"),(0,a.kt)("p",null,"The page data model will be organized as a ",(0,a.kt)("strong",{parentName:"p"},"composition of features and entities"),". In this example, the features will be implemented as factories and access the interface of entities through the parameters of these factories."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"However, the implementation in the form of a factory is optional - the feature may depend on the underlying layers and directly")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=pages/main/model.ts",title:"pages/main/model.ts"},'import { userStore } from "entitites/user"\nimport { conversationStore } from "entities/conversation"\nimport { contactStore } from "entities/contact"\n\nimport { createMessageInput } from "features/message-input"\nimport { createConversationSwitch } from "features/conversation-switch"\n\nimport { beautifiy } from "shared/lib/beautify-text"\n\nexport const { allConversations, setConversation } = createConversationSwitch({\n    contacts: contactStore.allContacts,\n    setConversation: conversationStore.setConversation,\n    currentConversation: conversationStore.conversation,\n    currentUser: userStore.currentUser\n})\n\nexport const { sendMessage, attachFile } = createMessageInput({\n    author: userStore.currentUser\n    send: conversationStore.sendMessage,\n    formatMessage: beautify\n})\n')),(0,a.kt)("h2",{id:"total"},"Total"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modules must have ",(0,a.kt)("strong",{parentName:"li"},"high cohesion")," (have one responsibility, solve one specific task) and provide ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/public-api"},(0,a.kt)("strong",{parentName:"a"},"public interface"))," access"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Low coupling")," is achieved through the composition of elements-UI components, features and entities"),(0,a.kt)("li",{parentName:"ol"},"Also, to reduce entanglement, modules ",(0,a.kt)("strong",{parentName:"li"},"should depend on each other only through public interfaces")," - this is how the independence of modules from each other's internal implementation is achieved")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/"},"(Article) About Low Coupling and High Cohesion clearly"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"The scheme at the beginning is inspired by this article")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9"},"(Article) Low Coupling and High Cohesion. The Law of Demeter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.slideshare.net/cristalngo/software-design-principles-57388843"},"(Presentation) About design principles (including Low Coupling & High Cohesion)"))))}m.isMDXComponent=!0},5596:function(e,t,n){t.Z=n.p+"assets/images/coupling-ca24ecbbb9b4595e100e3e990025ed73.png"}}]);