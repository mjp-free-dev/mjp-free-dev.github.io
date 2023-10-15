import{s as A}from"./button.esm.31c6eab7.js";import{f as w,r as y,g as d,h as C,i as x,j as f,o as I,k as S,w as t,b as e,A as V,T as W}from"./entry.6e8d4fb5.js";import{A as m}from"./AppCard.63a6ae7a.js";import{A as q}from"./AppCardGroup.24d01505.js";import"./index.esm.978c6e03.js";import"./_plugin-vue_export-helper.c27b6911.js";const N=w({__name:"login",setup(P){const a=y({}),i=d(V),g=d(W),n=C().query.error,_=Number(Array.isArray(n)?n[0]:n);x(()=>{_&&g.showError("Ошибка входа","Неверная или просроченная ссылка")});const u=[{$formkit:"primeInputText",name:"email",label:"Email",validation:"required | email"}],v=[...u,{$formkit:"primePassword",name:"password",label:"Пароль",validation:"required",toggleMask:!0}];async function h(){const{email:s}=a.value;i.signInWithOtp(s)}function b(){const{email:s,password:o}=a.value;i.signInWithPass(s,o)}function k(){i.signInWithOAuth("google")}return(s,o)=>{const p=f("FormKitSchema"),r=A,c=f("FormKit");return I(),S(q,null,{default:t(()=>[e(m,{basis:"300px",title:"Вход по ссылке на email"},{default:t(()=>[e(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),type:"form",actions:!1},{default:t(()=>[e(p,{schema:u,data:a.value},null,8,["data"]),e(r,{icon:"pi pi-at",label:"Отправить ссылку на email",onClick:h})]),_:1},8,["modelValue"])]),_:1}),e(m,{basis:"300px",title:"Вход по логину и паролю"},{default:t(()=>[e(c,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value=l),type:"form",actions:!1},{default:t(()=>[e(p,{schema:v,data:a.value},null,8,["data"]),e(r,{icon:"pi pi-sign-in",label:"Войти",onClick:b})]),_:1},8,["modelValue"])]),_:1}),e(m,{basis:"300px",title:"Вход через другие системы"},{default:t(()=>[e(r,{icon:"pi pi-google",label:"Войти через Google",onClick:k})]),_:1})]),_:1})}}});export{N as default};
