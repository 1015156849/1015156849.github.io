webpackJsonp([0],{23:function(e,t,s){s(32);var n=s(9)(s(29),s(36),"data-v-30b94fce",null);n.options.__file="D:\\Github_Project\\galibang.cn_dev\\src\\views\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},29:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show:!1}},mounted:function(){this.show=!0},methods:{GoGuest:function(){this.$router.push("index")},GoAdmin:function(){this.$router.push("sys")}}}},32:function(e,t){},33:function(e,t,s){e.exports=s.p+"a1c7c35ec293e4930db447d2ae022a89.png"},36:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("div",[n("transition",{attrs:{name:"fade","enter-active-class":"zoomIn","leave-active-class":"zoomOut"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"animated",attrs:{src:s(33)}})])],1),e._v(" "),n("h1",[e._v("咖喱棒")]),e._v(" "),n("div",[n("Button",{staticClass:"btn",attrs:{type:"info",ghost:""},on:{click:e.GoGuest}},[e._v("我是游客")]),e._v(" "),n("Button",{staticClass:"btn",attrs:{type:"success",ghost:""},on:{click:e.GoAdmin}},[e._v("我是版主")])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});