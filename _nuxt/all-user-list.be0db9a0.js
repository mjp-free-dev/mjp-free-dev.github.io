import{f as y,r as b,g as P,S as C,j as N,o as g,i as B,q as n}from"./entry.ab75e8ac.js";import{s as r,c as _,a as w,A as E}from"./index.6d001619.js";import"./inputtext.esm.45c4acb4.js";import"./dropdown.esm.a6d85c4d.js";import"./index.esm.d623317e.js";import"./index.esm.fff8a1bc.js";import"./overlayeventbus.esm.8a7e1ff2.js";import"./virtualscroller.esm.bbedecd3.js";import"./tristatecheckbox.esm.2a356d3b.js";import"./checkbox.esm.cc15a536.js";import"./datetime.f31b9a37.js";import"./inputnumber.esm.2387d47b.js";import"./button.esm.11483814.js";import"./index.esm.18478d38.js";import"./AppCard.ca239374.js";import"./_plugin-vue_export-helper.c27b6911.js";const K=y({__name:"all-user-list",setup(L){const l=b([]),i=P(C);async function o(){const a=await i.getMany(async e=>e.from("userPublicProfile").select("*, userPrivateProfile(*), userBalance(*), userClaim(*)"));l.value=a.map(e=>{const{id:s,fullName:t,displayId:m}=e,{plnBalance:p}=e.userBalance[0]??e.userBalance,{email:d,phoneNumber:f}=e.userPrivateProfile[0]??e.userPrivateProfile,{accessLevel:v}=(e.userClaim?e.userClaim[0]:null)??e.userClaim??{accessLevel:1};return{id:s,fullName:t,displayId:m,plnBalance:p,email:d,phoneNumber:f,accessLevel:v}})}N(o);async function c(a){const{id:e,accessLevel:s}=a;console.log(e,s),await i.set(async t=>t.from("userClaim").upsert({id:e,accessLevel:s})),await o()}const u={title:"Все пользователи",labels:{id:"",displayId:"#",fullName:"Имя",email:"Email",phoneNumber:"Телефон",plnBalance:"Баланс (PLN)",accessLevel:"Доступ"},columns:{id:!1,displayId:r,fullName:r,email:r,phoneNumber:r,plnBalance:_,accessLevel:w([{value:1,label:"Пользователь",severity:"info"},{value:2,label:"Модератор",severity:"warning"},{value:3,label:"Администратор",severity:"danger"}])}};return(a,e)=>(g(),B(n(E),{config:u,data:n(l),onRowEditSave:c},null,8,["data"]))}});export{K as default};
