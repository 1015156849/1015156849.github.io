webpackJsonp([6],{21:function(t,e,n){var o=n(10)(n(29),n(43),null,null);o.options.__file="D:\\Github_Project\\galibang.cn_dev\\src\\views\\admin\\child\\event_detail.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] event_detail.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{edit_mode:!1,defaultNum:[1,2,3],from:{event_title:"这个是title",event_title_img:"",event_title_img_base64:"",event_time_start:"2019-10-8",event_time_end:"2019-10-8",event_time_start_type:"17:00",event_desc:""}}},mounted:function(){this.$store.commit("pushBreadCrumb",{title:"活动详情",name:"event_detail"})},methods:{before:function(t){var e=this;this.from.event_title_img=t;this.from.event_title_img.name.replace(/.+\./,"");if(t.size>2097152)this.$Message.error(t.name+"大小超过2M!"),this.from.event_title_img=null;else{var n=new FileReader;n.readAsDataURL(t),n.onload=function(t){var n=t.target.result;e.from.event_title_img_base64=n,console.log("event_title_img_base64 :",n)}}return!1},changeTime:function(t){this.from.event_time_start=t[0],this.from.event_time_end=t[1],console.log("time :",this.from.event_time_star+"到"+this.from.event_time_end+",开服时间 : "+this.from.event_time_start_type)},submitPublic:function(){},submitPrivate:function(){},changeMode:function(){this.edit_mode=!this.edit_mode}}}},43:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("Card",{staticStyle:{width:"100%","background-color":"#f8f8f9","margin-bottom":"20px"}},[n("Steps",{attrs:{current:0,status:"process"}},[n("Step",{attrs:{title:"待提交",content:"补全内容后提交或保存为草稿"}}),t._v(" "),n("Step",{attrs:{title:"审核中",content:"提交后将在最多三个工作日审核通过"}}),t._v(" "),n("Step",{attrs:{title:"已发布",content:"即将推送到小程序"}})],1)],1),t._v(" "),t.edit_mode?n("div",[n("Form",{attrs:{model:t.from,autocomplete:"on","label-width":80}},[n("FormItem",{attrs:{label:"活动名称"}},[n("Input",{staticStyle:{width:"100%"},attrs:{placeholder:"请填写活动名称",clearable:""},model:{value:t.from.event_title,callback:function(e){t.$set(t.from,"event_title",e)},expression:"from.event_title"}})],1),t._v(" "),n("FormItem",{attrs:{label:"顶部图片"}},[""==t.from.event_title_img?n("Upload",{attrs:{multiple:"",accept:"image/gif, image/jpeg, image/png",type:"drag","before-upload":t.before,action:""}},[n("div",{staticStyle:{padding:"20px 0"}},[n("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),n("p",[t._v("单击或拖到此处上传")])],1)]):t._e(),t._v(" "),n("div",[n("img",{staticStyle:{"max-width":"300"},attrs:{src:t.from.event_title_img_base64}})])],1),t._v(" "),n("FormItem",{attrs:{label:"活动时间"}},[n("DatePicker",{attrs:{type:"daterange","split-panels":"",placeholder:"Select date",format:"yyyy-MM-dd"},on:{"on-change":t.changeTime}})],1),t._v(" "),n("FormItem",{attrs:{label:"开服时间"}},[n("RadioGroup",{attrs:{type:"button"},model:{value:t.from.event_time_start_type,callback:function(e){t.$set(t.from,"event_time_start_type",e)},expression:"from.event_time_start_type"}},[n("Radio",{attrs:{label:"17:00"}},[n("span",[t._v("下午5点")])]),t._v(" "),n("Radio",{attrs:{label:"19:00"}},[n("span",[t._v("下午7点")])]),t._v(" "),n("Radio",{attrs:{label:"00:00"}},[n("span",[t._v("延迟未定")])])],1)],1),t._v(" "),n("FormItem",{attrs:{label:"F12内容"}},[n("Input",{attrs:{type:"textarea",placeholder:"粘贴此处",autosize:{minRows:5,maxRows:15}},model:{value:t.from.event_desc,callback:function(e){t.$set(t.from,"event_desc",e)},expression:"from.event_desc"}})],1),t._v(" "),n("FormItem",[n("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary"},on:{click:t.submitPublic}},[t._v("提交审核")]),t._v(" "),n("Button",{on:{click:t.submitPrivate}},[t._v("保存草稿")]),t._v(" "),n("Button",{on:{click:t.changeMode}},[t._v("切换模式")])],1)],1)],1):n("div",[n("div",[n("Collapse",{model:{value:t.defaultNum,callback:function(e){t.defaultNum=e},expression:"defaultNum"}},[n("Panel",{attrs:{name:"1"}},[t._v("\n          活动名称\n          "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.from.event_title))])]),t._v(" "),n("Panel",{attrs:{name:"2"}},[t._v("\n          活动置顶图\n          "),n("img",{staticStyle:{"max-width":"300"},attrs:{slot:"content",src:t.from.event_title_img_base64},slot:"content"})]),t._v(" "),n("Panel",{attrs:{name:"3"}},[t._v("\n          活动时间\n          "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.from.event_time_start+"到"+t.from.event_time_end))])]),t._v(" "),n("Panel",{attrs:{name:"4"}},[t._v("\n          活动内容预览\n          "),n("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.from.event_desc)},slot:"content"})])],1),t._v(" "),n("Button",{on:{click:t.changeMode}},[t._v("切换模式")])],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});