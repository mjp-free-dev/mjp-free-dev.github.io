import{s as C}from"./button.esm.f2e75a5b.js";import{o as _,c as k,r as y,l as x,f as S,m as V,q as W,s as d,v as u,x as $,w as l,a as i,b as t}from"./entry.a1f6cece.js";import{A as f}from"./AppCard.a532ea68.js";import{_ as A}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.e199cda5.js";const B="_root_gzpfb_1",q={root:B},F={};function K(s,n){return _(),k("div",{class:x(s.$style.root)},[y(s.$slots,"default")],2)}const O={$style:q},T=A(F,[["render",K],["__cssModules",O]]),E={class:"card"},G={style:{"margin-bottom":"10px"}},D=S({__name:"login",setup(s){const n=V(),e=W({}),g=d([{$el:"h5",children:"Вход по ссылке на почту"},{$formkit:"primeInputText",name:"email",label:"Email",validation:"required | email"}]),h=d([{$formkit:"primeInputText",name:"email",label:"Email",validation:"required | email"},{$formkit:"primeInputText",name:"password",label:"Пароль",validation:"required"}]);async function v(){const a=window.location.toString().replace("/login","/confirm"),{error:o}=await n.auth.signInWithOtp({email:e.value.email,options:{emailRedirectTo:a}});o&&console.log(o)}async function w(){window.location.toString().replace("/login","/confirm");const{error:a}=await n.auth.signInWithPassword({email:e.value.email,password:e.value.password});a&&console.log(a)}async function b(){const{data:a,error:o}=await n.auth.signInWithOAuth({provider:"google"});console.log(a,o)}async function I(){const{data:a,error:o}=await n.auth.signInWithOAuth({provider:"apple"});console.log(a,o)}return(a,o)=>{const m=u("FormKitSchema"),p=u("FormKit"),r=C;return _(),$(T,null,{default:l(()=>[i("div",E,[t(p,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),type:"form",actions:!1},{default:l(()=>[t(m,{schema:g,data:e.value},null,8,["schema","data"]),i("button",{class:"p-component p-button",onClick:v}," Отправить ссылку на почту ")]),_:1},8,["modelValue"])]),t(f,{title:"Вход по логину и паролю"},{default:l(()=>[t(p,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=c=>e.value=c),type:"form",actions:!1},{default:l(()=>[t(m,{schema:h,data:e.value},null,8,["schema","data"]),t(r,{icon:"pi pi-sign-in",label:"Войти",onClick:w})]),_:1},8,["modelValue"])]),_:1}),t(f,{title:"Вход через другие системы"},{default:l(()=>[i("div",G,[t(r,{icon:"pi pi-google",label:"Войти через Google",onClick:b})]),i("div",null,[t(r,{icon:"pi pi-apple",label:"Войти через Apple ID",onClick:I})])]),_:1})]),_:1})}}});export{D as default};
