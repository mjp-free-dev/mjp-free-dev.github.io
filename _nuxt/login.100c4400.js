import{s as v}from"./button.esm.80d429ee.js";import{f as h,r as b,i as k,j as c,o as C,k as x,w as t,b as e,A}from"./entry.3eeb7ad7.js";import{A as r}from"./AppCard.b8a305ce.js";import{A as I}from"./AppCardGroup.e1de8908.js";import"./index.esm.2ade5b5f.js";import"./_plugin-vue_export-helper.c27b6911.js";const B=h({__name:"login",setup(V){const a=b({}),l=k(A),m=[{$formkit:"primeInputText",name:"email",label:"Email",validation:"required | email"}],d=[...m,{$formkit:"primePassword",name:"password",label:"Пароль",validation:"required",toggleMask:!0}];async function f(){const{email:i}=a.value;l.signInWithOtp(i)}function g(){const{email:i,password:o}=a.value;l.signInWithPass(i,o)}function _(){l.signInWithOAuth("google")}return(i,o)=>{const p=c("FormKitSchema"),n=v,u=c("FormKit");return C(),x(I,null,{default:t(()=>[e(r,{basis:"300px",title:"Вход по ссылке на почту"},{default:t(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),type:"form",actions:!1},{default:t(()=>[e(p,{schema:m,data:a.value},null,8,["data"]),e(n,{icon:"pi pi-at",label:"Отправить ссылку на почту",onClick:f})]),_:1},8,["modelValue"])]),_:1}),e(r,{basis:"300px",title:"Вход по логину и паролю"},{default:t(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=s=>a.value=s),type:"form",actions:!1},{default:t(()=>[e(p,{schema:d,data:a.value},null,8,["data"]),e(n,{icon:"pi pi-sign-in",label:"Войти",onClick:g})]),_:1},8,["modelValue"])]),_:1}),e(r,{basis:"300px",title:"Вход через другие системы"},{default:t(()=>[e(n,{icon:"pi pi-google",label:"Войти через Google",onClick:_})]),_:1})]),_:1})}}});export{B as default};
