(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-217efff0"],{"0cb3":function(e,a,l){"use strict";l.r(a);var t=l("1f9c"),r=l.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){l.d(a,e,(function(){return t[e]}))}(s);a["default"]=r.a},"1f9c":function(e,a,l){"use strict";l("1c01"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{value1:0,value2:0,value3:0,media:0,alarm:0,red:64,green:128,blue:0,ex1:{label:"color",val:25,color:"orange darken-3"},ex2:{label:"track-color",val:75,color:"green lighten-1"},ex3:{label:"thumb-color",val:50,color:"red"}}}};a.default=t},"2dde":function(e,a,l){"use strict";var t=l("62ae");l.o(t,"render")&&l.d(a,"render",(function(){return t["render"]})),l.o(t,"staticRenderFns")&&l.d(a,"staticRenderFns",(function(){return t["staticRenderFns"]}))},"62ae":function(e,a,l){"use strict";l("1c01"),Object.defineProperty(a,"__esModule",{value:!0}),a.staticRenderFns=a.render=void 0;var t=function(){var e=this,a=e._self._c;return a("div",[a("page-title-bar"),a("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("app-card",{attrs:{heading:e.$t("message.continuous"),colClasses:"xs12 md6"}},[a("v-slider",{attrs:{"hide-details":"",step:"0"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),a("v-slider",{attrs:{"hide-details":"",step:"0",disabled:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),a("app-card",{attrs:{heading:e.$t("message.discrete"),colClasses:"xs12 md6"}},[a("v-slider",{attrs:{"hide-details":"","thumb-label":"",step:"10",ticks:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("app-card",{attrs:{heading:e.$t("message.customColors"),colClasses:"xs12 md6"}},[a("v-slider",{attrs:{label:e.ex1.label,color:e.ex1.color},model:{value:e.ex1.val,callback:function(a){e.$set(e.ex1,"val",a)},expression:"ex1.val"}}),a("v-slider",{attrs:{label:e.ex2.label,"track-color":e.ex2.color},model:{value:e.ex2.val,callback:function(a){e.$set(e.ex2,"val",a)},expression:"ex2.val"}}),a("v-slider",{attrs:{label:e.ex3.label,"thumb-color":e.ex3.color,"thumb-label":""},model:{value:e.ex3.val,callback:function(a){e.$set(e.ex3,"val",a)},expression:"ex3.val"}})],1),a("app-card",{attrs:{heading:e.$t("message.editableNumericValue"),colClasses:"xs12 md6"}},[a("v-responsive",{style:{background:"rgb(".concat(e.red,", ").concat(e.green,", ").concat(e.blue,")")},attrs:{height:"100px"}}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs9:""}},[a("v-slider",{attrs:{"hide-details":"",label:"R",max:255},model:{value:e.red,callback:function(a){e.red=a},expression:"red"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{"hide-details":"",type:"number"},model:{value:e.red,callback:function(a){e.red=a},expression:"red"}})],1),a("v-flex",{attrs:{xs9:""}},[a("v-slider",{attrs:{"hide-details":"",label:"G",max:255},model:{value:e.green,callback:function(a){e.green=a},expression:"green"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{"hide-details":"",type:"number"},model:{value:e.green,callback:function(a){e.green=a},expression:"green"}})],1),a("v-flex",{attrs:{xs9:""}},[a("v-slider",{attrs:{"hide-details":"",label:"B",max:255},model:{value:e.blue,callback:function(a){e.blue=a},expression:"blue"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{"hide-details":"",type:"number"},model:{value:e.blue,callback:function(a){e.blue=a},expression:"blue"}})],1)],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("app-card",{attrs:{heading:e.$t("message.icons"),colClasses:"xs12 md6"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[e._v("Media volume")])],1),a("v-flex",{attrs:{xs8:""}},[a("v-slider",{attrs:{"hide-details":"","prepend-icon":"volume_up"},model:{value:e.media,callback:function(a){e.media=a},expression:"media"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[e._v("Alarm volume")])],1),a("v-flex",{attrs:{xs8:""}},[a("v-slider",{attrs:{"hide-details":"","append-icon":"alarm"},model:{value:e.alarm,callback:function(a){e.alarm=a},expression:"alarm"}})],1)],1)],1)],1)],1)],1)};a.render=t;var r=[];a.staticRenderFns=r},e681:function(e,a,l){"use strict";l.r(a);var t=l("2dde"),r=l("0cb3");for(var s in r)["default"].indexOf(s)<0&&function(e){l.d(a,e,(function(){return r[e]}))}(s);var n=l("2877"),d=Object(n["a"])(r["default"],t["render"],t["staticRenderFns"],!1,null,null,null);a["default"]=d.exports}}]);