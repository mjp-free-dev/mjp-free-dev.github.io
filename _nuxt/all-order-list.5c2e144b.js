import{f as p,i as a,r as n,s as m,o as d,k as c,z as t,O as l}from"./entry.3eeb7ad7.js";import{r as u,b as e,c as f,d as h}from"./index.f7c275c0.js";import"./inputtext.esm.45cd8726.js";import"./dropdown.esm.eb3dfe34.js";import"./index.esm.418e4cbf.js";import"./index.esm.2ade5b5f.js";import"./overlayeventbus.esm.f0be52fe.js";import"./virtualscroller.esm.69c6dea9.js";import"./tristatecheckbox.esm.6120ea4d.js";import"./checkbox.esm.40454eed.js";import"./inputnumber.esm.e3a3f6a9.js";import"./button.esm.80d429ee.js";import"./index.esm.27920cb2.js";import"./AppCard.b8a305ce.js";import"./_plugin-vue_export-helper.c27b6911.js";const S=p({__name:"all-order-list",setup(g){const r=a(l),o=n([]);async function i(){o.value=await r.getAllOrders()}m(i);const s={title:"Мои заказы",labels:{products:"",userId:"",shippingMethod:"",shippingMethodId:"",id:"ID",shippingMethodName:"Получение",vatDocumentRequired:"НДС",positions:"Позиций",items:"Единиц",price:"Цена (PLN)",comment:"Комментрарий"},columns:{products:!1,userId:!1,shippingMethod:!1,shippingMethodId:!1,id:u("/moder/all-order-info?orderId="),shippingMethodName:e,vatDocumentRequired:f,positions:e,items:e,price:e,comment:e}};return(_,I)=>(d(),c(t(h),{config:s,data:t(o)},null,8,["data"]))}});export{S as default};
