webpackJsonp([6],{20:function(e,t,n){var o=n(10)(n(28),n(46),null,null);o.options.__file="D:\\Github_Project\\galibang.cn_dev\\src\\views\\admin\\child\\admin_list.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] admin_list.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tableHeight:null,columns1:[{title:"微信号",slot:"wxName"},{title:"等级",key:"levelName"},{title:"是否冻结",key:"isFrozen"},{title:"action",key:"action",window:150,slot:"action",align:"center"}],data1:[{wxName:"John Brown",levelName:"2016-10-03",isFrozen:!1},{wxName:"John Brown",levelName:"2016-10-03",isFrozen:!1},{wxName:"John Brown",levelName:"2016-10-03",isFrozen:!1}]}},mounted:function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=.82*e;this.tableHeight=t},methods:{show:function(e){this.$router.push({name:"event_detail",params:"1"})},remove:function(e){this.data1.splice(e,1)}}}},46:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Table",{staticStyle:{width:"100%"},attrs:{height:e.tableHeight,border:"",stripe:"",columns:e.columns1,data:e.data1},scopedSlots:e._u([{key:"name",fn:function(t){var o=t.row;return[n("strong",[e._v(e._s(o.name))])]}},{key:"action",fn:function(t){var o=(t.row,t.index);return[n("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.show(o)}}},[e._v("编辑权限")]),e._v(" "),n("Button",{attrs:{type:"error",size:"small"},on:{click:function(t){e.remove(o)}}},[e._v("冻结")])]}}])})},staticRenderFns:[]},e.exports.render._withStripped=!0}});