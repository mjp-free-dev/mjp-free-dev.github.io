import{f as p,g as n,O as a,r as m,j as d,o as c,i as l,q as t}from"./entry.ab75e8ac.js";import{r as u,b as e,d as f,c as h,f as g}from"./index.6d001619.js";import"./inputtext.esm.45c4acb4.js";import"./dropdown.esm.a6d85c4d.js";import"./index.esm.d623317e.js";import"./index.esm.fff8a1bc.js";import"./overlayeventbus.esm.8a7e1ff2.js";import"./virtualscroller.esm.bbedecd3.js";import"./tristatecheckbox.esm.2a356d3b.js";import"./checkbox.esm.cc15a536.js";import"./datetime.f31b9a37.js";import"./inputnumber.esm.2387d47b.js";import"./button.esm.11483814.js";import"./index.esm.18478d38.js";import"./AppCard.ca239374.js";import"./_plugin-vue_export-helper.c27b6911.js";const j=p({__name:"all-order-list",setup(_){const r=n(a),o=m([]);async function i(){o.value=await r.getAllOrders()}d(i);const s={title:"Мои заказы",labels:{products:"",userId:"",shippingMethod:"",shippingMethodId:"",id:"ID",shippingMethodName:"Получение",vatDocumentRequired:"VAT",positions:"Позиций",items:"Единиц",price:"Цена (PLN)",comment:"Комментрарий"},columns:{products:!1,userId:!1,shippingMethod:!1,shippingMethodId:!1,id:u("/moder/all-order-info?orderId="),shippingMethodName:e,vatDocumentRequired:f,positions:e,items:e,price:h,comment:e}};return(I,M)=>(c(),l(t(g),{config:s,data:t(o)},null,8,["data"]))}});export{j as default};
