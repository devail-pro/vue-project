(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a9185e"],{"0e67":function(t,e,a){"use strict";var r=a("93c5");a.o(r,"render")&&a.d(e,"render",(function(){return r["render"]})),a.o(r,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]}))},"2ff7":function(t,e,a){"use strict";a.r(e);var r=a("eb2d"),s=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},"363b":function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("7f7f");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.projectData},scopedSlots:t._u([{key:"item",fn:function(a){var r=a.item;return[e("tr",[e("td",[t._v(t._s(r.id))]),e("td",{staticClass:"text-left"},[e("router-link",{staticClass:"black--text",attrs:{to:"/".concat(t.getCurrentAppLayoutHandler()+"/crm/projectDetails/"+r.id)}},[t._v(t._s(r.name))])],1),e("td",{staticClass:"text-left"},[t._v(t._s(r.budget))]),e("td",{staticClass:"text-left"},[t._v(t._s(r.duration))]),e("td",{staticClass:"text-left text-nowrap"},[t._v(t._s(r.client))]),e("td",{staticClass:"text-left text-nowrap"},t._l(r.teamImage,(function(t,a){return e("img",{key:a,staticClass:"img-circle thumb-gap rounded-circle",attrs:{width:"25",height:"25",src:t}})})),0),e("td",{staticClass:"text-left"},["Active"==r.status?e("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v(t._s(r.status))]):e("v-chip",{attrs:{color:"error","text-color":"white"}},[t._v(t._s(r.status))])],1),e("td",{staticClass:"text-left"},[t._v(t._s(r.deadline))])])]}}])})],1)};e.render=r;var s=[];e.staticRenderFns=s},"365c":function(t,e,a){"use strict";var r=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(a("bc3a")),n=s.default.create({baseURL:"https://reactify.theironnetwork.org/data/"});e.default=n},3807:function(t,e,a){"use strict";var r=a("363b");a.o(r,"render")&&a.d(e,"render",(function(){return r["render"]})),a.o(r,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]}))},"5d81":function(t,e,a){"use strict";a.r(e);var r=a("9a18"),s=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},"5e79":function(t,e,a){"use strict";var r=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(a("365c"));var s=a("4da1"),n={props:["managementData"],data:function(){return{}},methods:{getCurrentAppLayoutHandler:function(){return(0,s.getCurrentAppLayout)(this.$router)}}};e.default=n},"6bcf":function(t,e,a){"use strict";a.r(e);var r=a("5e79"),s=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},"78f6":function(t,e,a){"use strict";a.r(e);var r=a("8f0c"),s=a("5d81");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var i=a("2877"),c=Object(i["a"])(s["default"],r["render"],r["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},"8f0c":function(t,e,a){"use strict";var r=a("e9f7");a.o(r,"render")&&a.d(e,"render",(function(){return r["render"]})),a.o(r,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]}))},"93c5":function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-card-content pt-0"},[e("div",{staticClass:"desc-wrap"},[e("h6",[t._v("Description :")]),e("p",[t._v("\n         "+t._s(t.managementData.description)+"\n      ")])]),e("div",{staticClass:"mb-4 project-team"},[e("h6",[t._v("Team Members :")]),e("div",t._l(t.managementData.teamImage,(function(t,a){return e("img",{key:a,staticClass:"img-circle thumb-gap rounded-circle",attrs:{width:"30px",height:"30px",src:t}})})),0)]),e("div",{staticClass:"deadline-info mb-4"},[e("h6",[t._v("Deadline :")]),e("p",[t._v(t._s(t.managementData.deadline))])]),e("div",{staticClass:"progress-bar mb-5"},[e("h6",{staticClass:"v-input__prepend-outer mb-5"},[t._v("\n         Progress : "+t._s(t.managementData.progressValue)+" %\n      ")]),e("v-flex",{attrs:{"d-flex":"","justify-content-space-between":"","text-center":"","pa-0":""}},[e("v-progress-linear",{attrs:{color:"primary",height:"7"},model:{value:t.managementData.progressValue,callback:function(e){t.$set(t.managementData,"progressValue",e)},expression:"managementData.progressValue"}})],1)],1),e("div",{staticClass:"button-wrap text-right"},[e("v-btn",{attrs:{color:"primary",medium:"",to:"/".concat(t.getCurrentAppLayoutHandler()+"/crm/projectDetails/"+t.managementData.id)}},[t._v("\n         Learn More\n      ")])],1)])};e.render=r;var s=[];e.staticRenderFns=s},"9a18":function(t,e,a){"use strict";var r=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(a("9fbf")),n=r(a("d83a")),i=r(a("365c")),c={components:{ProjectGridView:s.default,ProjectListView:n.default},data:function(){return{projectData:[],viewType:"projectGrid",selectedView:"grid",isActive:"grid"}},mounted:function(){this.getProjectData()},methods:{getProjectData:function(){var t=this;this.loader=!0,i.default.get("vuely/projectDetails.js").then((function(e){t.loader=!1,t.projectData=e.data})).catch((function(t){console.log("error"+t)}))},listView:function(){this.viewType="projectList",this.selectedView="list",this.isActive="list"},girdView:function(){this.viewType="projectGrid",this.selectedView="grid",this.isActive="grid"}}};e.default=c},"9fbf":function(t,e,a){"use strict";a.r(e);var r=a("0e67"),s=a("6bcf");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var i=a("2877"),c=Object(i["a"])(s["default"],r["render"],r["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},d83a:function(t,e,a){"use strict";a.r(e);var r=a("3807"),s=a("2ff7");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var i=a("2877"),c=Object(i["a"])(s["default"],r["render"],r["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},e9f7:function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("7f7f");var r=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("v-container",{attrs:{fluid:"","pt-0":"","grid-list-xl":""}},[e("v-layout",{attrs:{row:"",wrap:"","align-items-center":"","search-wrap":""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"","align-items-center":"","pt-0":""}},[e("app-card",{attrs:{customClasses:"mb-0 py-12"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg3:"","align-items-center":""}},[e("h2",{staticClass:"mb-0"},[t._v("Search")])]),e("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg9:"","pb-0":""}},[e("div",{staticClass:"d-flex search-field-wrap"},[e("div",{staticClass:"w-75"},[e("v-text-field",{staticClass:"pt-0 pr-3",attrs:{label:"Search Projects"}})],1),e("div",[e("v-btn",{staticClass:"my-0 ml-0 mr-2",attrs:{color:"primary",medium:""}},[t._v("Search")]),e("v-btn",{attrs:{color:"primary m-0",medium:""}},[t._v("Add"),e("i",{staticClass:"material-icons"},[t._v("add")])])],1)])])],1)],1)],1)],1),e("div",{staticClass:"d-flex justify-space-between align-items-center pa-6 project-grid-title"},[e("div",{staticClass:"title"},[e("h3",{staticClass:"mb-0"},[t._v(t._s(t.$t("message."+t.viewType)))])]),e("div",{staticClass:"text-right project-icon"},[e("v-icon",{staticClass:"mr-2",class:{active:"grid"==t.isActive},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.girdView(1)}}},[t._v("apps")]),e("v-icon",{class:{active:"list"==t.isActive},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.listView(2)}}},[t._v("list")])],1)]),e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.projectData,(function(a,r){return e("app-card",{directives:[{name:"show",rawName:"v-show",value:"grid"==t.selectedView,expression:"selectedView == 'grid'"}],key:r,attrs:{heading:t.$t("message."+a.name),colClasses:"xl4 lg4 md6 sm6 xs12",customClasses:"mb-0",fullBlock:!0,fullScreen:!0,reloadable:!0,closeable:!0}},[e("ProjectGridView",{attrs:{managementData:a}})],1)})),1),e("v-layout",{directives:[{name:"show",rawName:"v-show",value:"list"==t.selectedView,expression:"selectedView == 'list'"}],attrs:{row:"",wrap:""}},[e("app-card",{attrs:{colClasses:"xl12 lg12 md12 sm12 xs12",customClasses:"mb-0"}},[e("ProjectListView")],1)],1)],1)],1)};e.render=r;var s=[];e.staticRenderFns=s},eb2d:function(t,e,a){"use strict";var r=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a("4da1"),n=r(a("365c")),i={data:function(){return{projectData:[],headers:[{text:"Id",value:"id",sortable:!1},{text:"Project Name",value:"name",sortable:!1},{text:"Budget",value:"budget",sortable:!1},{text:"Duration",value:"duration",sortable:!1},{text:"Client",value:"client",sortable:!1},{text:"Team",value:"teamImage",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Deadline",value:"deadline",sortable:!1}]}},mounted:function(){this.getProjectData()},methods:{getProjectData:function(){var t=this;this.loader=!0,n.default.get("vuely/projectDetails.js").then((function(e){t.loader=!1,t.projectData=e.data})).catch((function(t){console.log("error"+t)}))},getCurrentAppLayoutHandler:function(){return(0,s.getCurrentAppLayout)(this.$router)}}};e.default=i}}]);