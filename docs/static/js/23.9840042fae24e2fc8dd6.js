webpackJsonp([23],{OiCi:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,"\n#permission .switchBtn {\n  margin: 30px 0;\n}\n#permission .el-alert {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n",""])},w8qi:function(t,i,e){var n=e("OiCi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("331effe3",n,!0)},wuY9:function(t,i,e){"use strict";function n(t){e("w8qi")}Object.defineProperty(i,"__esModule",{value:!0});var s={name:"permission",data:function(){return{permission:!1}},watch:{permission:function(t){t?this.$store.commit("set_role","visitor"):this.$store.commit("set_role","admin")}}},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"permission"}},[e("p",[t._v("你的权限为："+t._s(t.$store.state.user.role))]),t._v(" "),e("p",{staticClass:"switchBtn"},[e("el-switch",{attrs:{"inactive-text":"admin","active-text":"visitor"},model:{value:t.permission,callback:function(i){t.permission=i},expression:"permission"}})],1),t._v(" "),e("el-alert",{attrs:{type:"warning",closable:!1,title:"注意："}},[e("p",[t._v("进入此页面的权限等级为：admin")]),t._v(" "),e("p",[t._v("如果你切换为visitor，重新进入此页面时你将无法进入，请刷新重新查看效果")])])],1)},o=[],a={render:r,staticRenderFns:o},c=a,l=e("VU/8"),p=n,m=l(s,c,!1,p,null,null);i.default=m.exports}});