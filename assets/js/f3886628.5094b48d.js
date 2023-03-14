"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[69757],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function v(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=c(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),k=v[0],f=v[1],w=h({queryString:s,groupId:u}),y=w[0],g=w[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=b[0],C=b[1],T=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),g(e),C(e)}),[g,C,p]),tabValues:p}}var k=n(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var o,i=d.indexOf(e.currentTarget)-1;n=null!=(o=d[i])?o:d[d.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return d.push(e)},onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function g(e){var t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function b(e){var t=(0,k.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},48441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(74866),l=n(85162),s=["components"],u={id:"drawer-layout",title:"React Native Drawer Layout",sidebar_label:"Drawer Layout"},d=void 0,p={unversionedId:"drawer-layout",id:"version-6.x/drawer-layout",title:"React Native Drawer Layout",description:"A cross-platform Drawer component for React Native implemented using react-native-gesture-handler and react-native-reanimated.",source:"@site/versioned_docs/version-6.x/drawer-layout.md",sourceDirName:".",slug:"/drawer-layout",permalink:"/docs/drawer-layout",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/drawer-layout.md",tags:[],version:"6.x",frontMatter:{id:"drawer-layout",title:"React Native Drawer Layout",sidebar_label:"Drawer Layout"},sidebar:"version-6.x/docs",previous:{title:"Tab View",permalink:"/docs/tab-view"},next:{title:"NavigationContainer",permalink:"/docs/navigation-container"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"API reference",id:"api-reference",level:2},{value:"<code>Drawer</code>",id:"drawer",level:3},{value:"Drawer Props",id:"drawer-props",level:4},{value:"<code>open</code>",id:"open",level:5},{value:"<code>onOpen</code>",id:"onopen",level:5},{value:"<code>onClose</code>",id:"onclose",level:5},{value:"<code>renderDrawerContent</code>",id:"renderdrawercontent",level:5},{value:"<code>layout</code>",id:"layout",level:5},{value:"<code>drawerPosition</code>",id:"drawerposition",level:5},{value:"<code>drawerType</code>",id:"drawertype",level:5},{value:"<code>drawerStyle</code>",id:"drawerstyle",level:5},{value:"<code>overlayStyle</code>",id:"overlaystyle",level:5},{value:"<code>hideStatusBarOnOpen</code>",id:"hidestatusbaronopen",level:5},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",level:5},{value:"<code>statusBarAnimation</code>",id:"statusbaranimation",level:5},{value:"<code>swipeEnabled</code>",id:"swipeenabled",level:5},{value:"<code>swipeEdgeWidth</code>",id:"swipeedgewidth",level:5},{value:"<code>swipeMinDistance</code>",id:"swipemindistance",level:5},{value:"<code>swipeMinVelocity</code>",id:"swipeminvelocity",level:5},{value:"<code>gestureHandlerProps</code>",id:"gesturehandlerprops",level:5},{value:"<code>children</code>",id:"children",level:5},{value:"<code>useDrawerProgress</code>",id:"usedrawerprogress",level:3}],h={toc:m},v="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(v,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A cross-platform Drawer component for React Native implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),"."),(0,o.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,o.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,o.kt)("source",{src:"/assets/navigators/drawer/drawer.mov"}))),(0,o.kt)("p",null,"This package doesn't integrate with React Navigation. If you want to integrate the drawer layout with React Navigation's navigation system, e.g. want to show screens in the drawer and be able to navigate between them using ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate")," etc, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/drawer-navigator"},"Drawer Navigator")," instead."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To use this package, open a Terminal in the project root and run:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-drawer-layout\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-drawer-layout\n")))),(0,o.kt)("p",null,"Then, you need to install and configure the libraries that are required by the drawer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First, install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),"."),(0,o.kt)("p",{parentName:"li"},"If you have a Expo managed project, in your project directory, run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install react-native-gesture-handler react-native-reanimated\n")),(0,o.kt)("p",{parentName:"li"},"If you have a bare React Native project, in your project directory, run:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-gesture-handler react-native-reanimated\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-gesture-handler react-native-reanimated\n")))),(0,o.kt)("p",{parentName:"li"},"The Drawer supports both Reanimated 1 and Reanimated 2. If you want to use Reanimated 2, make sure to configure it following the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation"},"installation guide"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To finalize installation of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),", add the following at the ",(0,o.kt)("strong",{parentName:"p"},"top")," (make sure it's at the top and there's nothing else before it) of your entry file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note: If you are building for Android or iOS, do not skip this step, or your app may crash in production even if it works fine in development. This is not applicable to other platforms."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're on a Mac and developing for iOS, you also need to install the pods (via ",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods"),") to complete the linking."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx pod-install ios\n")),(0,o.kt)("p",null,"We're done! Now you can build and run the app on your device/simulator."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, Text } from 'react-native';\nimport { Drawer } from 'react-native-drawer-layout';\n\nexport default function DrawerExample() {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <Drawer\n      open={open}\n      onOpen={() => setOpen(true)}\n      onClose={() => setOpen(false)}\n      renderDrawerContent={() => {\n        return <Text>Drawer content</Text>;\n      }}\n    >\n      <Button\n        onPress={() => setOpen((prevOpen) => !prevOpen)}\n        title={`${open ? 'Close' : 'Open'} drawer`}\n      />\n    </Drawer>\n  );\n}\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("p",null,"The package exports a ",(0,o.kt)("inlineCode",{parentName:"p"},"Drawer")," component which is the one you'd use to render the drawer."),(0,o.kt)("h3",{id:"drawer"},(0,o.kt)("inlineCode",{parentName:"h3"},"Drawer")),(0,o.kt)("p",null,"Component responsible for rendering a drawer with animations and gestures."),(0,o.kt)("h4",{id:"drawer-props"},"Drawer Props"),(0,o.kt)("h5",{id:"open"},(0,o.kt)("inlineCode",{parentName:"h5"},"open")),(0,o.kt)("p",null,"Whether the drawer is open or not."),(0,o.kt)("h5",{id:"onopen"},(0,o.kt)("inlineCode",{parentName:"h5"},"onOpen")),(0,o.kt)("p",null,"Callback which is called when the drawer is opened."),(0,o.kt)("h5",{id:"onclose"},(0,o.kt)("inlineCode",{parentName:"h5"},"onClose")),(0,o.kt)("p",null,"Callback which is called when the drawer is closed."),(0,o.kt)("h5",{id:"renderdrawercontent"},(0,o.kt)("inlineCode",{parentName:"h5"},"renderDrawerContent")),(0,o.kt)("p",null,"Callback which returns a react element to render as the content of the drawer."),(0,o.kt)("h5",{id:"layout"},(0,o.kt)("inlineCode",{parentName:"h5"},"layout")),(0,o.kt)("p",null,"Object containing the layout of the container. Defaults to the dimensions of the application's window."),(0,o.kt)("h5",{id:"drawerposition"},(0,o.kt)("inlineCode",{parentName:"h5"},"drawerPosition")),(0,o.kt)("p",null,"Position of the drawer on the screen. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," in RTL mode, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),"."),(0,o.kt)("h5",{id:"drawertype"},(0,o.kt)("inlineCode",{parentName:"h5"},"drawerType")),(0,o.kt)("p",null,"Type of the drawer. It determines how the drawer looks and animates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"front"),": Traditional drawer which covers the screen with a overlay behind it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"back"),": The drawer is revealed behind the screen on swipe."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slide"),": Both the screen and the drawer slide on swipe to reveal the drawer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"permanent"),": A permanent drawer is shown as a sidebar.")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"slide")," on iOS and ",(0,o.kt)("inlineCode",{parentName:"p"},"front")," on other platforms."),(0,o.kt)("h5",{id:"drawerstyle"},(0,o.kt)("inlineCode",{parentName:"h5"},"drawerStyle")),(0,o.kt)("p",null,"Style object for the drawer. You can pass a custom background color for drawer or a custom width for the drawer."),(0,o.kt)("h5",{id:"overlaystyle"},(0,o.kt)("inlineCode",{parentName:"h5"},"overlayStyle")),(0,o.kt)("p",null,"Style object for the overlay."),(0,o.kt)("h5",{id:"hidestatusbaronopen"},(0,o.kt)("inlineCode",{parentName:"h5"},"hideStatusBarOnOpen")),(0,o.kt)("p",null,"Whether to hide the status bar when the drawer is open. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h5",{id:"keyboarddismissmode"},(0,o.kt)("inlineCode",{parentName:"h5"},"keyboardDismissMode")),(0,o.kt)("p",null,"Whether to dismiss the keyboard when the drawer is open. Supported values are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),": The keyboard will not be dismissed when the drawer is open."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"on-drag"),": The keyboard will be dismissed when the drawer is opened by a swipe gesture.")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"on-drag"),"."),(0,o.kt)("h5",{id:"statusbaranimation"},(0,o.kt)("inlineCode",{parentName:"h5"},"statusBarAnimation")),(0,o.kt)("p",null,"Animation to use when the status bar is hidden. Supported values are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slide"),": The status bar will slide out of view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fade"),": The status bar will fade out of view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),": The status bar will not animate.")),(0,o.kt)("p",null,"Use it in combination with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideStatusBarOnOpen"),"."),(0,o.kt)("h5",{id:"swipeenabled"},(0,o.kt)("inlineCode",{parentName:"h5"},"swipeEnabled")),(0,o.kt)("p",null,"Whether to enable swipe gestures to open the drawer. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Swipe gestures are only supported on iOS and Android."),(0,o.kt)("h5",{id:"swipeedgewidth"},(0,o.kt)("inlineCode",{parentName:"h5"},"swipeEdgeWidth")),(0,o.kt)("p",null,"How far from the edge of the screen the swipe gesture should activate. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"32"),"."),(0,o.kt)("p",null,"This is only supported on iOS and Android."),(0,o.kt)("h5",{id:"swipemindistance"},(0,o.kt)("inlineCode",{parentName:"h5"},"swipeMinDistance")),(0,o.kt)("p",null,"Minimum swipe distance that should activate opening the drawer. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"60"),"."),(0,o.kt)("p",null,"This is only supported on iOS and Android."),(0,o.kt)("h5",{id:"swipeminvelocity"},(0,o.kt)("inlineCode",{parentName:"h5"},"swipeMinVelocity")),(0,o.kt)("p",null,"Minimum swipe velocity that should activate opening the drawer. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"500"),"."),(0,o.kt)("p",null,"This is only supported on iOS and Android."),(0,o.kt)("h5",{id:"gesturehandlerprops"},(0,o.kt)("inlineCode",{parentName:"h5"},"gestureHandlerProps")),(0,o.kt)("p",null,"Props to pass to the underlying pan gesture handler."),(0,o.kt)("p",null,"This is only supported on iOS and Android."),(0,o.kt)("h5",{id:"children"},(0,o.kt)("inlineCode",{parentName:"h5"},"children")),(0,o.kt)("p",null,"Content that the drawer should wrap."),(0,o.kt)("h3",{id:"usedrawerprogress"},(0,o.kt)("inlineCode",{parentName:"h3"},"useDrawerProgress")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useDrawerProgress")," hook returns a Reanimated SharedValue (with modern implementation) or Reanimated Node (with legacy implementation) which represents the progress of the drawer. It can be used to animate the content of the screen."),(0,o.kt)("p",null,"Example with modern implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Animated } from 'react-native-reanimated';\nimport { useDrawerProgress } from 'react-native-drawer-layout';\n\n// ...\n\nfunction MyComponent() {\n  const progress = useDrawerProgress();\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: interpolate(progress, [0, 1], [-100, 0]),\n        },\n      ],\n    };\n  });\n\n  return <Animated.View style={animatedStyle}>{/* ... */}</Animated.View>;\n}\n")),(0,o.kt)("p",null,"Example with legacy implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Animated } from 'react-native-reanimated';\nimport { useDrawerProgress } from 'react-native-drawer-layout';\n\n// ...\n\nfunction MyComponent() {\n  const progress = useDrawerProgress();\n\n  // If you are on react-native-reanimated 1.x, use `Animated.interpolate` instead of `Animated.interpolateNode`\n  const translateX = Animated.interpolateNode(progress, {\n    inputRange: [0, 1],\n    outputRange: [-100, 0],\n  });\n\n  return (\n    <Animated.View style={{ transform: [{ translateX }] }}>\n      {/* ... */}\n    </Animated.View>\n  );\n}\n")),(0,o.kt)("p",null,"If you are using class components, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DrawerProgressContext")," to get the progress value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { DrawerProgressContext } from 'react-native-drawer-layout';\n\n// ...\n\nclass MyComponent extends React.Component {\n  static contextType = DrawerProgressContext;\n\n  render() {\n    const progress = this.context;\n\n    // ...\n  }\n}\n")))}k.isMDXComponent=!0}}]);