"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3160],{8708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),s={sidebar_position:1},l="Viewer",o={unversionedId:"guides/examples/viewer",id:"guides/examples/viewer",isDocsHomePage:!1,title:"Viewer",description:"Every application has business logic related with the current authorized user.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/viewer.md",sourceDirName:"guides/examples",slug:"/guides/examples/viewer",permalink:"/en/docs/guides/examples/viewer",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/viewer.md",tags:[],version:"current",lastUpdatedAt:1633435656,formattedLastUpdatedAt:"10/5/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Abstractions",permalink:"/en/docs/concepts/abstractions"},next:{title:"Autocomplete",permalink:"/en/docs/guides/examples/autocompleted"}},u=[{value:"Entities",id:"entities",children:[{value:"Examples",id:"examples",children:[]},{value:"<code>index.ts</code>",id:"indexts",children:[]},{value:"<code>ui</code>",id:"ui",children:[]},{value:"<code>model</code>",id:"model",children:[]}]},{value:"Features",id:"features",children:[{value:"Examples",id:"examples-1",children:[]},{value:"<code>ui</code>",id:"ui-1",children:[]}]},{value:"Pages",id:"pages",children:[{value:"Examples",id:"examples-2",children:[]},{value:"<code>ui</code>",id:"ui-2",children:[]}]},{value:"Processes",id:"processes",children:[{value:"Examples",id:"examples-3",children:[]}]},{value:"App",id:"app",children:[{value:"Examples",id:"examples-4",children:[]}]},{value:"Conclusions",id:"conclusions",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"viewer"},"Viewer"),(0,r.kt)("p",null,"Every application has business logic related ",(0,r.kt)("strong",{parentName:"p"},"with the current authorized user.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Usually such an entity is called ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewer")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Principle")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," - but within the framework of the article, we will focus on ",(0,r.kt)("inlineCode",{parentName:"p"},"viewer"),", but it all depends on your project and team")),(0,r.kt)("p",null,"Also, this is one of the illustrative examples when a business entity generates business features, then pages, and even business processes"),(0,r.kt)("p",null,"Let's look at them in more detail below with examples"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The names of the directories inside the segments (ui, model) may differ from project to project"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"The methodology does not regulate this level of nesting in any way yet"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It should also be understood that the examples given below are abstract and synthetic, and are formed by the author's point of view and experience"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"The implementation in your projects may differ, the methodology, again, does not regulate these aspects in any way")))))),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The business entity of the user")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represents the most atomic abstraction for design"),(0,r.kt)("li",{parentName:"ul"},"Here the authorization context is formed, which is then usually relied on by all the overlying layers of the application")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'It should be understood that often there is a public "external" user (',(0,r.kt)("inlineCode",{parentName:"p"},"entities/user"),') in the application, and there is an authorized "internal" user (',(0,r.kt)("inlineCode",{parentName:"p"},"entities/viewer"),")"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Do not forget to take this difference into account when designing architecture and logic")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Segments can be both files and directories\n|\n\u251c\u2500\u2500 entities/viewer              # Layer: Business entities\n|         |                      #     Slice: Current user\n|         \u251c\u2500\u2500 ui/                #      Segment: UI-logic (components)\n|         \u251c\u2500\u2500 lib/               #      Segment: Infrastructure-logic (helpers)\n|         \u251c\u2500\u2500 model/             #      Segment: Business Logic\n|         \u2514\u2500\u2500 index.ts           #      [Public API Declaration]\n|   ...           \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entities/viewer")," - the entity of the current user ",(0,r.kt)("em",{parentName:"li"},"(Session / Principle)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entities/user")," - the essence of public user ",(0,r.kt)("em",{parentName:"li"},"(not necessarily associated with the current)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Depending on the complexity of your application - you can use the ",(0,r.kt)("inlineCode",{parentName:"em"},"user")," for naming the current user")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"But it can cause serious problems when/if I have to separate the logic of a normal user and current, who came into the system"))))),(0,r.kt)("h3",{id:"indexts"},(0,r.kt)("inlineCode",{parentName:"h3"},"index.ts")),(0,r.kt)("p",null,"The usual ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/public-api"},"Public API of the module")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Largely repeats the API declaration for the layers described below")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/ui/index.ts",title:"entities/user/ui/index.ts"},'export { ViewerCard } from "./card";\nexport { ViewerAvatar } from "./avatar";\n...\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/model/index.ts",title:"entities/user/model/index.ts"},'export * as selectors from "./selectors";\nexport * as events from "./events";\nexport * as stores from "./stores";\n...\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/index.ts",title:"entities/user/index.ts"},'export * from "./ui"\nexport * as viewerModel from "./model";\n')),(0,r.kt)("h3",{id:"ui"},(0,r.kt)("inlineCode",{parentName:"h3"},"ui")),(0,r.kt)("p",null,"It may contain components that are not related to a specific page/feature, but directly to the user's entity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=entities/user/ui/card/index.tsx",title:"entities/user/ui/card/index.tsx"},'import { Card } from "shared/ui/card";\n\n// It is considered a good practice not to link ui components from entitites directly to the model\n// So that it can be used not only for the current model,\n// But also for externally received props\n\nexport type UserCardProps = {\n    data: User;\n    className?: string;\n    // And other card-props\n};\n\nexport const UserCard = ({ data, ... }: UserCardProps) => {\n    return (\n        <Card \n            title={data.fullName}\n            description={data.bio}\n            ...\n        />\n    )\n}\n')),(0,r.kt)("h3",{id:"model"},(0,r.kt)("inlineCode",{parentName:"h3"},"model")),(0,r.kt)("p",null,"At this level, the entity of the current user is usually created, with the re-export of hooks/contracts/selectors for use by the overlying layers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/model/stores.ts",title:"entities/user/model/stores.ts"},"// effector\nexport const $user = createStore(...);\n// redux (+ toolkit)\nexport const userSlice = createSlice(...)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/model/selectors.ts",title:"entities/user/model/selectors.ts"},"// effector\nexport const useViewer = () => {\n    return useStore($user)\n}\n// redux (+ toolkit)\nexport const useViewer = () => {\n    return useSelector((store) => store.entities.userSlice);\n}\n")),(0,r.kt)("p",null,"Also, other logic can be implemented here"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateUserDetails")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logoutUser")),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features tied to the current user")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses business entities (often ",(0,r.kt)("inlineCode",{parentName:"li"},"entities/viewer"),") and shared resources in the implementation"),(0,r.kt)("li",{parentName:"ul"},"Features may not be directly related to the viewer, but they can use its context when implementing logic")),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# Segments can be both files and directories\n|\n\u251c\u2500\u2500 features/auth                # Layer: Business features\n|        |                       #    Slice Group: The structural group "User authorization"\n|        \u251c\u2500\u2500 by-phone/           #      Slice: Feature "Authorization by phone"\n|        |     \u251c\u2500\u2500 ui/           #         Segment: UI-logic (components)\n|        |     \u251c\u2500\u2500 lib/          #         Segment: Infrastructure-logic (helpers)\n|        |     \u251c\u2500\u2500 model/        #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 by-oauth/           #      Slice: Feature "Authorization by an external resource"\n|   ...           \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"features/auth/{by-phone, by-oauth, logout ...}")," - ",(0,r.kt)("strong",{parentName:"li"},"structural")," group of authorization features ",(0,r.kt)("em",{parentName:"li"},"(by phone, by external resource, logout,...)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"features/wallet/{add-funds,...}")," - ",(0,r.kt)("strong",{parentName:"li"},"structural")," group of features for working with the user's internal account ",(0,r.kt)("em",{parentName:"li"},"(adding funds to the account,...)"))),(0,r.kt)("h3",{id:"ui-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"ui")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authorization by an external resource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/auth/by-oauth/ui.tsx",title:"features/auth/by-oauth/ui.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const AuthByOAuth = () => {\n    return (\n        <OAuth\n            domain={...}\n            scope={...}\n            ...\n            // for redux, you additionally need dispatch\n            onSuccess={(user) => viewerModel.setUser(user)}\n        />\n    )\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the user's context in features")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/wallet/ui.tsx",title:"features/wallet/ui.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const Wallet = () => {\n    const viewer = viewerModel.useViewer();\n    const { moneyCount } = viewer;\n    \n    ...\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the viewer components")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/header/ui.tsx",title:"features/header/ui.tsx"},'import { ViewerAvatar } from "entities/viewer";\n...\nexport const Header = () => {\n    ...\n    return (\n        <Layout.Header>\n            ...\n            <ViewerAvatar\n                onClick={...}\n                onLogout={...}\n                ...\n            />\n        </Layout.Header>\n    )\n}\n')),(0,r.kt)("h2",{id:"pages"},"Pages"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pages related to the current user in one way or another")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They can both directly affect the functionality of the viewer"),(0,r.kt)("li",{parentName:"ul"},"And use it indirectly (including its context / features)")),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# Segments can be both files and directories\n|\n\u251c\u2500\u2500 pages/viewer                 # Layer: Application pages\n|        |                       #    Slice Group: The "Current User" structural group\n|        \u251c\u2500\u2500 profile/            #     Slice: The viewer profile page\n|        |     \u251c\u2500\u2500 ui.tsx        #         Segment: UI-logic (components)\n|        |     \u251c\u2500\u2500 lib.ts        #         Segment: Infrastructure-logic (helpers)\n|        |     \u251c\u2500\u2500 model.ts      #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 settings/           #     Slice: The viewer account settings page\n|   ...           \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/viewer/profile")," - the user's LC page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/viewer/settings")," - user account settings page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/user")," - the user's page (not necessarily the current one)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/auth/{sign-in, sign-up, reset}")," ",(0,r.kt)("strong",{parentName:"li"},"structural")," group of authorization pages ",(0,r.kt)("em",{parentName:"li"},"(login / registration / password recovery)"))),(0,r.kt)("h3",{id:"ui-2"},(0,r.kt)("inlineCode",{parentName:"h3"},"ui")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the viewer components and ",(0,r.kt)("em",{parentName:"li"},"viewer-based")," features on the pages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/user/ui.tsx",title:"pages/user/ui.tsx"},'import { Wallet } from "features/wallet";\nimport { ViewerCard } from "entities/viewer";\n...\nexport const UserPage = () => {\n    ...\n    return (\n        <Layout>\n            <Header\n                extra={<Wallet.AddFunds />}\n            />\n            ...\n            <ViewerCard />\n        </Layout>\n    )\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the viewer model")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/some/ui.tsx",title:"pages/some/ui.tsx"},'import { viewerModel } from "entities/viewer";\n...\nexport const SomePage = () => {\n    ...\n    return (\n        <Layout>\n            ...\n            <Settings onSave={(payload) => viewerModel.events.saveChanges(payload)} />\n        </Layout>\n    )\n}\n')),(0,r.kt)("h2",{id:"processes"},"Processes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Business processes affecting the current user")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Affects user cases that permeate the pages of the system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The process layer is optional"),", and is usually used ",(0,r.kt)("em",{parentName:"li"},"only when the logic grows in pages")," and you need ",(0,r.kt)("em",{parentName:"li"},"separate context management")," on several pages at once")),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Segments can be both files and directories\n|\n\u251c\u2500\u2500 processes                    # Layer: Business processes\n|        \u251c\u2500\u2500 auth/               #     Slice: User authorization process\n|        |     \u251c\u2500\u2500 lib.ts        #         Segment: Infrastructure-logic (helpers)\n|        |     \u251c\u2500\u2500 model.ts      #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 quick-tour/         #     Slice: The process of onboarding a new user\n|   ...           \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"processes/auth")," - the business process of user authorization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"processes/quick-tour")," - a business process for familiarizing the user with the system ",(0,r.kt)("em",{parentName:"li"},"(~ UserOnboard)"))),(0,r.kt)("h2",{id:"app"},"App"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialization of user account data")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is usually a check on whether the user ",(0,r.kt)("strong",{parentName:"li"},"was already logged in")," before he entered the service",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If yes")," - the provider replenishes the user's context for further use in the system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If not")," - the authorization process is started or the context of the viewer is changed so that the authorization page takes the necessary actions")))),(0,r.kt)("h3",{id:"examples-4"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# The `app` structure is unique for each project and is not regulated by the methodology\n|\n\u251c\u2500\u2500 app/providers                # Layer: Initializing the application (HOCs providers)\n|        \u251c\u2500\u2500 withAuth.tsx        #    HOC: Initializing the authorization context\n|        |   ...                 #\n|   ...           \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/providers/withAuth")," - HOC for user authorization",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used ",(0,r.kt)("strong",{parentName:"li"},"only at the top level, as a provider")," with logic initialization, to which only ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"app"),"-layer")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Not to be confused with the ",(0,r.kt)("inlineCode",{parentName:"strong"},"useViewer")," hook"),", which is accessed by all other layers ",(0,r.kt)("em",{parentName:"li"},"(processes / pages / features)"))),(0,r.kt)("h2",{id:"conclusions"},"Conclusions"),(0,r.kt)("p",null,"As we can see in the examples above - ",(0,r.kt)("strong",{parentName:"p"},"all business logic begins to be built from a single entity, and can spread to the very top layer.")),(0,r.kt)("p",null,"Therefore, you need to be able to ",(0,r.kt)("strong",{parentName:"p"},"correctly allocate the scope of the module's influence"),", and depending on this, choose the appropriate layer for the location of the logic."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Thus, we will get the most supported, readable and reused code.")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/65"},'Discussion "The applicability of feature-sliced in combat"')," (",(0,r.kt)("em",{parentName:"li"},"there are also examples with viewer")," inside)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/342"},"Question about the user's profile and identity (community-chat)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/552"},"Explanation about UIKIT#Card and User#Card (community-chat)"))))}c.isMDXComponent=!0}}]);