import{f as l,g as h,z as f,r as g,s as M,o as b,k as I,A as p}from"./entry.6f82f3e9.js";import{r as _,b as t,c as D,d as k}from"./index.d7976f6d.js";import"./inputtext.esm.ace789a5.js";import"./dropdown.esm.0e48b34e.js";import"./index.esm.d1a6b219.js";import"./index.esm.63a65999.js";import"./overlayeventbus.esm.0de0701f.js";import"./virtualscroller.esm.cb0603df.js";import"./tristatecheckbox.esm.392f4dcb.js";import"./checkbox.esm.f6afd0e2.js";import"./inputnumber.esm.8fad9cc9.js";import"./button.esm.a41dd05c.js";import"./index.esm.f537a05e.js";import"./AppCard.15c0afdc.js";import"./_plugin-vue_export-helper.c27b6911.js";const F=l({__name:"my-order-list",setup(v){const a=h(),c=f(),i=g([]);async function d(){const r=(await c.from("order").select("*, shippingMethod(*)").eq("userId",a.value.id)).data??[],n=[];for(const e of r)n.push(Object.assign({},e,{price:e.products.reduce((s,o)=>s+o.priceForOne*o.count,0),items:e.products.reduce((s,o)=>s+o.count,0),positions:e.products.length,shippingMethodName:e.shippingMethod.name}));i.value=n}M(d);const m={title:"Мои заказы",labels:{products:"",userId:"",shippingMethod:"",shippingMethodId:"",id:"ID",shippingMethodName:"Получение",vatDocumentRequired:"НДС",positions:"Позиций",items:"Единиц",price:"Цена (PLN)",comment:"Комментрарий"},columns:{products:!1,userId:!1,shippingMethod:!1,shippingMethodId:!1,id:_("/user/my-order-info?orderId="),shippingMethodName:t,vatDocumentRequired:D,positions:t,items:t,price:t,comment:t}};return(u,r)=>(b(),I(p(k),{config:m,data:p(i)},null,8,["data"]))}});export{F as default};
