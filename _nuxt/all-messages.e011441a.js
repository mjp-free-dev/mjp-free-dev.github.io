import{f as i,g as d,M as l,r as m,i as p,o as n,k as c,q as a}from"./entry.0d578655.js";import{r as u,b as t,e as f,f as _}from"./index.140dc3c2.js";import"./inputtext.esm.cf46f872.js";import"./dropdown.esm.0758a07f.js";import"./index.esm.3b45c474.js";import"./index.esm.05dd7407.js";import"./overlayeventbus.esm.4291a9ee.js";import"./virtualscroller.esm.cf58996d.js";import"./tristatecheckbox.esm.0bf7371f.js";import"./checkbox.esm.6f35e722.js";import"./datetime.f31b9a37.js";import"./inputnumber.esm.4cf1238e.js";import"./button.esm.306fa2f9.js";import"./index.esm.ea9f10e6.js";import"./AppCard.c21bd4c3.js";import"./_plugin-vue_export-helper.c27b6911.js";const E=i({__name:"all-messages",setup(g){const r=d(l),e=m([]);async function o(){e.value=await r.getAllMessages()}p(o);const s={title:"Все сообщения",labels:{id:"",authorName:"",text:"",source:"",authorDisplayId:"",data:"",orderId:"Номер заказа",displayName:"Отправитель",displayText:"Сообщение",createdAt:"Время"},columns:{id:!1,authorName:!1,text:!1,source:!1,authorDisplayId:!1,data:!1,orderId:u("/moder/all-order-info?orderId="),displayName:t,displayText:t,createdAt:f}};return(y,x)=>(n(),c(a(_),{config:s,data:a(e)},null,8,["data"]))}});export{E as default};
