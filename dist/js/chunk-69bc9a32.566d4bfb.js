(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69bc9a32"],{7232:function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{length:3,window:0,step:1,onboarding:0,dropdown_font:[{text:"Arial"},{text:"Calibri"},{text:"Courier"},{text:"Verdana"}],dropdown_edit:[{text:"100%"},{text:"75%"},{text:"50%"},{text:"25%"},{text:"0%"}],toggle_exclusive:2,toggle_multiple:[1,2,3]}},computed:{currentTitle:function(){switch(this.step){case 1:return"Sign-up";case 2:return"Create a password";default:return"Account created"}}},methods:{next:function(){this.onboarding=this.onboarding+1===length?0:this.onboarding+1},prev:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}}};e.default=s},b320:function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hover-wrapper group-wrapper"},[e("page-title-bar"),e("v-container",{attrs:{"grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.buttonGroups"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("The "),e("code",[t._v("v-btn-toggle")]),t._v(" ccomponent is a simple wrapper for "),e("code",[t._v("v-item-group")]),t._v(" built specifically to work with "),e("code",[t._v("v-btn")]),t._v(".")])]),e("v-toolbar",{attrs:{dense:""}},[e("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_font,label:"Select font","hide-details":""}}),e("v-divider",{staticClass:"my-0",attrs:{vertical:""}}),e("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_edit,editable:"",label:"Select size","hide-details":"",overflow:""}}),e("v-divider",{staticClass:"mr-2 my-0",attrs:{vertical:""}}),e("v-btn-toggle",{staticClass:"transparent",attrs:{multiple:""},model:{value:t.toggle_multiple,callback:function(e){t.toggle_multiple=e},expression:"toggle_multiple"}},[e("v-btn",{attrs:{value:1,text:""}},[e("v-icon",[t._v("format_bold")])],1),e("v-btn",{attrs:{value:2,text:""}},[e("v-icon",[t._v("format_italic")])],1),e("v-btn",{attrs:{value:3,text:""}},[e("v-icon",[t._v("format_underlined")])],1),e("v-btn",{attrs:{value:4,text:""}},[e("v-icon",[t._v("format_color_fill")])],1)],1),e("v-divider",{staticClass:"mx-2 my-0",attrs:{vertical:""}}),e("v-btn-toggle",{staticClass:"transparent",model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[e("v-btn",{attrs:{value:1,text:""}},[e("v-icon",[t._v("format_align_left")])],1),e("v-btn",{attrs:{value:2,text:""}},[e("v-icon",[t._v("format_align_center")])],1),e("v-btn",{attrs:{value:3,text:""}},[e("v-icon",[t._v("format_align_right")])],1),e("v-btn",{attrs:{value:4,text:""}},[e("v-icon",[t._v("format_align_justify")])],1)],1)],1)],1),e("app-card",{attrs:{heading:t.$t("message.itemGroups"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("The "),e("code",[t._v("v-item-group")]),t._v(" provides the ability to create a group of selectable items out of any component. This is the baseline functionality for components such as "),e("code",[t._v("v-tabs")]),t._v(" and "),e("code",[t._v("v-carousel")]),t._v(".")]),e("v-card",[e("v-toolbar",{attrs:{color:"primary",dark:""}},[e("v-toolbar-title",[t._v("Submit a post")])],1),e("v-card-text",[e("v-text-field",{attrs:{filled:"",label:"Title",value:"My new post"}}),e("v-textarea",{attrs:{filled:"",label:"Text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"}}),e("v-divider",{staticClass:"my-2"}),e("v-item-group",{attrs:{multiple:""}},[e("v-subheader",[t._v("Tags")]),t._l(8,(function(a){return e("v-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(s){var i=s.active,n=s.toggle;return e("v-chip",{staticClass:"ma-2",attrs:{"input-value":i},on:{click:n}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tTag "+t._s(a)+"\n\t\t\t\t\t\t\t\t\t\t")])}}],null,!0)})}))],2)],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"success",depressed:""}},[t._v("\n                        Post\n                        ")])],1)],1)],1)]),e("app-card",{attrs:{heading:t.$t("message.windows"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("The "),e("code",[t._v("v-window")]),t._v(" component is the baseline functionality for transitioning content from 1 pane to another. Other components such as "),e("code",[t._v("v-tabs")]),t._v(", "),e("code",[t._v("v-carousel")]),t._v(" and "),e("code",[t._v("v-stepper")]),t._v(" utilize this component at their core.")])]),e("v-layout",{attrs:{"align-center":""}},[e("v-item-group",{staticClass:"mr-4 group",attrs:{mandatory:"",tag:"v-flex"},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.length,(function(a){return e("v-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(a){var s=a.active,i=a.toggle;return e("div",{},[e("v-btn",{staticClass:"mb-3",attrs:{"input-value":s,icon:""},on:{click:i}},[e("v-icon",[t._v("mdi-record")])],1)],1)}}],null,!0)})})),1),e("v-flex",[e("v-window",{staticClass:"elevation-1",attrs:{vertical:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.length,(function(a){return e("v-window-item",{key:a},[e("v-card",{attrs:{text:""}},[e("v-card-text",[e("v-layout",{attrs:{"align-center":"","custom-layout":"","mb-4":""}},[e("v-avatar",{staticClass:"mr-3",attrs:{color:"grey"}}),e("strong",{staticClass:"title"},[t._v("Title "+t._s(a))]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-account")])],1)],1),t._l(3,(function(a,s){return e("p",{key:s},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t\t\t\t\t\t\t")])})),e("p")],2)],1)],1)})),1)],1)],1)],1),e("app-card",{attrs:{heading:t.$t("message.onBoarding"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[e("code",[t._v("v-window")]),t._v(" makes it easy to create custom components such as a different styled stepper.")])]),e("v-card",{attrs:{color:"black",dark:"",text:"",tile:""}},[e("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(a){return e("v-window-item",{key:"card-".concat(a)},[e("v-card",{attrs:{color:"transparent",height:"200"}},[e("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":"","m-0":"",tag:"v-card-text"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tTransparent themed, for background-imaged slides. Background color black added for demonstration purposes.\n\t\t\t\t\t\t\t\t\t")])],1)],1)})),1),e("v-card-actions",{staticClass:"justify-space-between group-slider-action"},[e("v-btn",{staticClass:"group-slider-prev",attrs:{text:""},on:{click:t.prev}},[e("v-icon",[t._v("mdi-chevron-left")])],1),e("v-item-group",{staticClass:"text-center",attrs:{mandatory:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(a){return e("v-item",{key:"btn-".concat(a),scopedSlots:t._u([{key:"default",fn:function(a){var s=a.active,i=a.toggle;return e("v-btn",{attrs:{"input-value":s,icon:""},on:{click:i}},[e("v-icon",[t._v("mdi-record")])],1)}}],null,!0)})})),1),e("v-btn",{staticClass:"group-slider-next",attrs:{text:""},on:{click:t.next}},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1),e("app-card",{attrs:{heading:t.$t("message.accountCreation"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("Create rich forms with smooth animations."),e("code",[t._v(" v-window ")]),t._v(" automatically tracks the current selection index to automatically change the transition direction. This can be manually controlled with the reverse prop.")])]),e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[e("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[e("span",[t._v(t._s(t.currentTitle))]),e("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary lighten-2",size:"24"},domProps:{textContent:t._s(t.step)}})],1),e("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e("v-window-item",{attrs:{value:1}},[e("v-card-text",[e("v-text-field",{attrs:{label:"Email",value:"abc@example.com"}}),e("span",{staticClass:"caption grey--text text--darken-1"},[t._v("\n\t\t\t\t\t\t\t\t\t\tThis is the email you will use to login to your Vuely account\n\t\t\t\t\t\t\t\t\t")])],1)],1),e("v-window-item",{attrs:{value:2}},[e("v-card-text",[e("v-text-field",{attrs:{label:"Password",type:"password"}}),e("v-text-field",{attrs:{label:"Confirm Password",type:"password"}}),e("span",{staticClass:"caption grey--text text--darken-1"},[t._v("\n\t\t\t\t\t\t\t\t\t\tPlease enter a password for your account\n\t\t\t\t\t\t\t\t\t")])],1)],1),e("v-window-item",{attrs:{value:3}},[e("div",{staticClass:"pa-3 text-center"},[e("v-img",{staticClass:"mb-4",attrs:{contain:"",height:"128",src:"/static/img/session.png"}}),e("h3",{staticClass:"title font-weight-light mb-2"},[t._v("Welcome to Vuely")]),e("span",{staticClass:"caption grey--text"},[t._v("Thanks for signing up!")])],1)])],1),e("v-divider"),e("v-card-actions",[e("v-btn",{attrs:{disabled:1===t.step,text:""},on:{click:function(e){t.step--}}},[t._v("\n\t\t\t\t\t\t\t\tBack\n\t\t\t\t\t\t\t")]),e("v-spacer"),e("v-btn",{attrs:{disabled:3===t.step,color:"primary",depressed:""},on:{click:function(e){t.step++}}},[t._v("\n                        \tNext\n\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1)],1)};e.render=s;var i=[];e.staticRenderFns=i},b82f:function(t,e,a){"use strict";a.r(e);var s=a("7232"),i=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=i.a},e553:function(t,e,a){"use strict";var s=a("b320");a.o(s,"render")&&a.d(e,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},f49c:function(t,e,a){"use strict";a.r(e);var s=a("e553"),i=a("b82f");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);var o=a("2877"),r=Object(o["a"])(i["default"],s["render"],s["staticRenderFns"],!1,null,null,null);e["default"]=r.exports}}]);