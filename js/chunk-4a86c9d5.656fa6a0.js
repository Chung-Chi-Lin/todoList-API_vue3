(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a86c9d5"],{"7e77":function(e,t,a){e.exports=a.p+"img/img.734379a0.png"},c7d2:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),c=a("f0c8"),l=a.n(c),s=a("7e77"),n=a.n(s);const d={class:"container pt-5"},i=Object(o["createElementVNode"])("div",{class:"loadingio-spinner-bean-eater-iylmkqp50l"},[Object(o["createElementVNode"])("div",{class:"ldio-t0eby9sr4hr"},[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div"),Object(o["createElementVNode"])("div"),Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div"),Object(o["createElementVNode"])("div"),Object(o["createElementVNode"])("div")])])],-1),r={class:"row p-md-5"},m=Object(o["createElementVNode"])("div",{class:"col-6 me-5 d-none d-md-block"},[Object(o["createElementVNode"])("h1",{class:"f-Baloo fw-bold h2 ps-3"},[Object(o["createElementVNode"])("img",{src:l.a,alt:"checkbox",style:{height:"55px"}}),Object(o["createTextVNode"])(" ONLINE TODO LIST ")]),Object(o["createElementVNode"])("img",{src:n.a,class:"img-fluid",alt:"todoMan"})],-1),b={class:"col"},p=Object(o["createStaticVNode"])('<h2 class="mt-5 h3 d-none d-md-block ps-2">最實用的線上待辦事項服務</h2><div class="text-center d-inline d-md-none"><h1 class="f-Baloo fw-bold"><img src="'+l.a+'" alt="checkbox"> ONLINE TODO LIST </h1><h2 class="h5">最實用的線上待辦事項服務</h2></div>',2),u={class:"form-group pt-4"},h=Object(o["createElementVNode"])("label",{for:"Email"},"Email",-1),O={class:"form-group pt-4"},j=Object(o["createElementVNode"])("label",{for:"pwd"},"密碼",-1),V={class:"d-grid gap-4 col-4 mx-auto pt-5"};function N(e,t,a,c,l,s){const n=Object(o["resolveComponent"])("loading"),N=Object(o["resolveComponent"])("v-field"),g=Object(o["resolveComponent"])("ErrorMessage"),E=Object(o["resolveComponent"])("v-form");return Object(o["openBlock"])(),Object(o["createElementBlock"])("main",d,[Object(o["createVNode"])(n,{active:l.isLoading},{default:Object(o["withCtx"])(()=>[i]),_:1},8,["active"]),Object(o["createElementVNode"])("div",r,[m,Object(o["createElementVNode"])("div",b,[p,Object(o["createVNode"])(E,{class:"container"},{default:Object(o["withCtx"])(({errors:e})=>[Object(o["createElementVNode"])("div",u,[h,Object(o["createVNode"])(N,{id:"Email",name:"Email欄位",type:"text",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":e["Email欄位"]}]),placeholder:"請輸入Email",rules:"email|required",modelValue:l.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>l.user.email=e),style:{height:"70px"}},null,8,["class","modelValue"]),Object(o["createVNode"])(g,{name:"Email欄位",class:"invalid-feedback"})]),Object(o["createElementVNode"])("div",O,[j,Object(o["createVNode"])(N,{id:"pwd",name:"密碼",type:"password",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":e["密碼"]}]),placeholder:"請輸入密碼",rules:"required|min:6",modelValue:l.user.password,"onUpdate:modelValue":t[1]||(t[1]=e=>l.user.password=e),style:{height:"70px"}},null,8,["class","modelValue"]),Object(o["createVNode"])(g,{name:"密碼",class:"invalid-feedback"})]),Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("button",{class:"btn btn-dark py-md-3",type:"button",onClick:t[2]||(t[2]=(...e)=>s.logIn&&s.logIn(...e))},"登入"),Object(o["createElementVNode"])("button",{class:"btn btn-h",type:"button",onClick:t[3]||(t[3]=(...e)=>s.goSignUp&&s.goSignUp(...e))},"註冊帳號")])]),_:1})])])])}a("14d9");var g=a("3d20"),E=a.n(g),v={data(){return{user:{email:"",password:""},token:"",isLoading:!1}},methods:{logIn(){const e="https://todoo.5xcamp.us/users/sign_in",t={user:{email:this.user.email,password:this.user.password}};this.isLoading=!0,this.$http.post(e,t).then(e=>{this.token=e.headers.authorization,this.isLoading=!1,this.$router.push({path:"/todolist",query:{id:e.headers.authorization,nickname:e.data.nickname}})}).catch(e=>{this.isLoading=!1,E.a.fire({title:e.response.data.message,text:"如需註冊請點選帳號註冊，或重試帳號密碼",icon:"error",confirmButtonText:"了解"})})},goSignUp(){this.$router.push("/signUp")}}},f=a("6b0d"),k=a.n(f);const w=k()(v,[["render",N]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-4a86c9d5.656fa6a0.js.map