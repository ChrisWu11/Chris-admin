(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b415c8"],{"7a57":function(e,t,o){"use strict";o("83ea")},"83ea":function(e,t,o){},"9ed6":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("div",{staticClass:"lnner-header"},[o("div",[o("h1",[e._v("Hello!")]),o("h2",[e._v("欢迎来到Chris-admin!")]),o("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),o("el-form-item",[o("el-input",{attrs:{placeholder:"请输入密码",type:"password","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),o("el-form-item",[o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLogin(t)},click:e.onLogin}},[e._v("登 录")])],1)],1)],1)]),o("div",[o("svg",{staticClass:"waves",attrs:{viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[o("defs",[o("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),o("g",{staticClass:"parallax"},[o("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}}),o("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}}),o("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}}),o("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"7",fill:"#fff"}})])])])])},n=[],s=o("b775"),r=function(e){return Object(s["a"])({url:"/login",method:"POST",data:e})},i=function(e){return Object(s["a"])({url:"/roles",method:"POST",data:e})},l=o("a18c"),c={name:"LoginIndex",components:{},props:{},data:function(){return{form:{username:"admin",password:"123456"},loading:!1}},computed:{},watch:{},created:function(){},mounted:function(){var e=this;document.onkeydown=function(){var t=window.event.keyCode;13===t&&e.onLogin()}},methods:{onLogin:function(){var e=this;this.loading=!0,r(this.form).then((function(t){console.log(t,"login=>res"),e.$store.commit("setRole",t.data.role),e.$store.commit("setUsername",t.data.username),e.$store.commit("setPhoto",t.data.photo),sessionStorage.setItem("token",t.data.token),i(t.data.role).then((function(t){console.log(t.data,"getRoles=>ret.data"),e.$store.commit("setRightList",t.data),e.loading=!1,e.$message.success("登陆成功"),Object(l["b"])(),e.$router.push("/")}))}))}}},d=c,u=(o("7a57"),o("2877")),m=Object(u["a"])(d,a,n,!1,null,"4853a7a2",null);t["default"]=m.exports}}]);