(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33817adb"],{1882:function(t,e,i){"use strict";var n=i("e7b3");i.o(n,"render")&&i.d(e,"render",(function(){return n["render"]})),i.o(n,"staticRenderFns")&&i.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},5783:function(t,e,i){"use strict";i.r(e);var n=i("1882"),s=i("b164");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);var o=i("2877"),l=Object(o["a"])(s["default"],n["render"],n["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},"5ffd":function(t,e,i){"use strict";i("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{sticky:!1,singleLine:!0,icon:"mdi-plus",color:void 0,iconColor:void 0,elevation:4,colors:["red","blue","teal lighten-2","warning lighten-1","orange"],icons:["mdi-access-point-network","mdi-plus","mdi-minus","mdi-network-strength-2-alert","mdi-earth"]}}};e.default=n},b164:function(t,e,i){"use strict";i.r(e);var n=i("5ffd"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},e7b3:function(t,e,i){"use strict";i("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var n=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("v-container",{attrs:{"grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.banners"),customClasses:"mb-30",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("The "),e("code",[t._v("v-banner")]),t._v(" component is used as middle-interruptive message to user with 1-2\n\t\t\t\t\t\tactions. It comes in 2 variations, single-line and multi-line (implicit).")])]),e("v-banner",{attrs:{"single-line":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v("\n\t\t\t\t\t\t\tAction\n\t\t\t\t\t\t")])]},proxy:!0}])},[t._v("\n\t\t\t\t\tOne line message text string with two actions on tablet / Desktop\n\n\t\t\t\t\t")])],1),e("app-card",{attrs:{heading:t.$t("message.playground"),customClasses:"mb-30",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("v-row",{staticClass:"px-3",attrs:{justify:"space-between"}},[e("v-switch",{attrs:{label:"Sticky"},model:{value:t.sticky,callback:function(e){t.sticky=e},expression:"sticky"}}),e("v-switch",{attrs:{label:"Single-line"},model:{value:t.singleLine,callback:function(e){t.singleLine=e},expression:"singleLine"}}),e("v-select",{staticStyle:{"max-width":"250px"},attrs:{items:t.icons,label:"Icon",clearable:""},model:{value:t.icon,callback:function(e){t.icon=e},expression:"icon"}}),e("v-select",{staticStyle:{"max-width":"250px"},attrs:{items:t.colors,label:"Color",clearable:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),e("v-select",{staticStyle:{"max-width":"250px"},attrs:{items:t.colors,label:"Icon color",clearable:""},model:{value:t.iconColor,callback:function(e){t.iconColor=e},expression:"iconColor"}}),e("v-slider",{staticStyle:{width:"100%"},attrs:{label:"Elevation",min:"0",max:"24",clearable:""},model:{value:t.elevation,callback:function(e){t.elevation=e},expression:"elevation"}})],1),e("v-sheet",{staticClass:"overflow-y-auto",attrs:{"max-height":"400"}},[e("v-container",{staticStyle:{height:"1500px"}},[e("v-banner",{attrs:{sticky:t.sticky,"single-line":t.singleLine,icon:t.icon,color:t.color,"icon-color":t.iconColor,elevation:t.elevation},scopedSlots:t._u([{key:"actions",fn:function(){return[e("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v("\n\t\t\t\t\t\t\t\t\tAction\n\t\t\t\t\t\t\t\t")])]},proxy:!0}])},[t._v("\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus\n\t\t\t\t\t\t\tsapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid\n\t\t\t\t\t\t\tcorrupti maiores doloribus soluta optio blanditiis.\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus\n\t\t\t\t\t\t\tsapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid\n\t\t\t\t\t\t\tcorrupti maiores doloribus soluta optio blanditiis.\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus\n\t\t\t\t\t\t\tsapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid\n\t\t\t\t\t\t\tcorrupti maiores doloribus soluta optio blanditiis.\n\n\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1)],1)};e.render=n;var s=[];e.staticRenderFns=s}}]);