(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d12ad62"],{"323a":function(t,e,a){"use strict";var r=a("9f83");a.o(r,"render")&&a.d(e,"render",(function(){return r["render"]})),a.o(r,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]}))},3633:function(t,e,a){"use strict";var r=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(a("365c")),n={data:function(){return{loader:!0,search:"",selected:[],headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Sodium (mg)",value:"sodium"},{text:"Calcium (%)",value:"calcium"},{text:"Iron (%)",value:"iron"}],items:[]}},mounted:function(){this.getTablesData()},methods:{getTablesData:function(){var t=this;s.default.get("vuely/tablesData.js").then((function(e){t.loader=!1,t.items=e.data})).catch((function(t){console.log(t)}))}}};e.default=n},"365c":function(t,e,a){"use strict";var r=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(a("bc3a")),n=s.default.create({baseURL:"https://reactify.theironnetwork.org/data/"});e.default=n},"7d29":function(t,e,a){"use strict";a.r(e);var r=a("323a"),s=a("9003");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var i=a("2877"),o=Object(i["a"])(s["default"],r["render"],r["staticRenderFns"],!1,null,null,null);e["default"]=o.exports},9003:function(t,e,a){"use strict";a.r(e);var r=a("3633"),s=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},"9f83":function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("7f7f"),a("386d");var r=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("app-section-loader",{attrs:{status:t.loader}}),e("v-container",{attrs:{fluid:"","grid-list-xl":"","py-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.selectableRows"),fullBlock:!0,colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search,"item-key":"name","show-select":""},scopedSlots:t._u([{key:"headerCell",fn:function(a){return[e("v-tooltip",{attrs:{bottom:""}},[e("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n\t\t\t\t\t\t\t"+t._s(a.header.text)+"\n\t\t\t\t\t\t")]),e("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(a.header.text)+"\n\t\t\t\t\t\t")])])]}},{key:"items",fn:function(a){return[e("td",[e("v-checkbox",{attrs:{color:"primary","hide-details":""},model:{value:a.selected,callback:function(e){t.$set(a,"selected",e)},expression:"props.selected"}})],1),e("td",[t._v(t._s(a.item.name))]),e("td",[t._v(t._s(a.item.calories))]),e("td",[t._v(t._s(a.item.fat))]),e("td",[t._v(t._s(a.item.carbs))]),e("td",[t._v(t._s(a.item.protein))]),e("td",[t._v(t._s(a.item.sodium))]),e("td",[t._v(t._s(a.item.calcium))]),e("td",[t._v(t._s(a.item.iron))])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)],1)};e.render=r;var s=[];e.staticRenderFns=s}}]);