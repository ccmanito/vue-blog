(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-591a6d1c"],{"4d2d":function(c,o,e){"use strict";var t=e("f322"),r=e.n(t);r.a},8495:function(c,o,e){"use strict";e.r(o);var t=function(){var c=this,o=c.$createElement,e=c._self._c||o;return e("div",{attrs:{id:"clipboard"}},[e("div",{staticClass:"app-introduce"},[c._v("\n        "+c._s(c.$t("clipboard.description"))+"\n        "),e("a",{attrs:{href:"https://github.com/uncleLian/vue-clipboard-pack",target:"_blank"}},[c._v("vue-clipboard-pack")])]),e("div",{staticClass:"demo"},[e("h3",[c._v(c._s(c.$t("clipboard.directive")))]),e("el-input",{model:{value:c.copy1,callback:function(o){c.copy1=o},expression:"copy1"}},[e("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:c.copy1,expression:"copy1",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:c.onSuccess,expression:"onSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:c.onError,expression:"onError",arg:"error"}],attrs:{slot:"append"},slot:"append"},[c._v(c._s(c.$t("clipboard.copy")))])],1),e("el-input",{model:{value:c.cut1,callback:function(o){c.cut1=o},expression:"cut1"}},[e("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:cut",value:c.cut1,expression:"cut1",arg:"cut"},{name:"clipboard",rawName:"v-clipboard:success",value:c.onSuccess,expression:"onSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:c.onError,expression:"onError",arg:"error"}],attrs:{slot:"append"},slot:"append"},[c._v(c._s(c.$t("clipboard.cut")))])],1)],1),e("div",{staticClass:"demo"},[e("h3",[c._v(c._s(c.$t("clipboard.default")))]),e("el-input",{model:{value:c.copy2,callback:function(o){c.copy2=o},expression:"copy2"}},[e("el-button",{attrs:{slot:"append"},on:{click:function(o){return c.copy(c.copy2)}},slot:"append"},[c._v(c._s(c.$t("clipboard.copy")))])],1),e("el-input",{staticClass:"cutEl",model:{value:c.cut2,callback:function(o){c.cut2=o},expression:"cut2"}},[e("el-button",{attrs:{slot:"append"},on:{click:c.cut},slot:"append"},[c._v(c._s(c.$t("clipboard.cut")))])],1)],1)])},r=[],a={name:"clipboard",data:function(){return{copy1:"111111111",cut1:"222222222",copy2:"333333333",cut2:"444444444"}},methods:{copy:function(c){var o=this;this.$copyText(c).then(function(c){o.onSuccess()}).catch(function(){o.onError()})},cut:function(){var c=this,o=this.$el.querySelector(".cutEl input");this.$cutText(o).then(function(o){c.onSuccess()}).catch(function(){c.onError()})},onSuccess:function(){this.$message.success("Success")},onError:function(){this.$message.error("Error")}}},s=a,n=(e("4d2d"),e("2877")),i=Object(n["a"])(s,t,r,!1,null,null,null);o["default"]=i.exports},f322:function(c,o,e){c.exports={appColor:"#42b983",appColorRGB:"66, 185, 131"}}}]);