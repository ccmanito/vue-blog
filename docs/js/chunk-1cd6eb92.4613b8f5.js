(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd6eb92"],{"76b8":function(t,i,e){"use strict";var s=e("fbf7"),n=e.n(s);n.a},d328:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"permission"}},[e("p",[t._v("你的权限为："+t._s(t.$store.state.user.role))]),e("p",{staticClass:"switchBtn"},[e("el-switch",{attrs:{"inactive-text":"admin","active-text":"visitor"},model:{value:t.permission,callback:function(i){t.permission=i},expression:"permission"}})],1),e("el-alert",{attrs:{type:"warning",closable:!1,title:"注意："}},[e("p",[t._v("进入此页面的权限等级为：admin")]),e("p",[t._v("如果你切换为visitor，重新进入此页面时你将无法进入，请刷新重新查看效果")])])],1)},n=[],o={name:"permission",data:function(){return{permission:!1}},watch:{permission:function(t){t?this.$store.commit("SET_ROLE","visitor"):this.$store.commit("SET_ROLE","admin")}}},r=o,a=(e("76b8"),e("2877")),c=Object(a["a"])(r,s,n,!1,null,null,null);c.options.__file="permission.vue";i["default"]=c.exports},fbf7:function(t,i,e){t.exports={appColor:"#42b983",appColorRGB:"66, 185, 131",menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#42b983",menuWidth:"180px"}}}]);