import{f as p,r as n,i as c,g as i,q as e,o as u,k as d,n as l,S as f,O as _}from"./entry.817a3c76.js";import{_ as g}from"./app-grid.vue.638de1eb.js";import{b as y}from"./order-config.0a9afb68.js";import{p as S}from"./common.89e7c513.js";import"./inputnumber.esm.61990a7a.js";import"./button.esm.d41bf8a9.js";import"./index.esm.b2d0812c.js";import"./inputtext.esm.cab18d55.js";import"./dropdown.esm.bd98f989.js";import"./index.esm.948ba663.js";import"./overlayeventbus.esm.48ae1668.js";import"./virtualscroller.esm.ab4b7b3c.js";import"./tristatecheckbox.esm.fde3f881.js";import"./checkbox.esm.24dceccf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.2a0fb72f.js";import"./index.esm.91e28247.js";import"./AppCard.d4fdc9c4.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./AppProductsGrid.vue.eaf40a66.js";const $=p({__name:"my-order-list",setup(v){const t=n(null);return c(async()=>{const o=(await i(f).getMany(async r=>r.from("orderStatusType").select())).map(({id:r,name:s,severity:m})=>({value:r,label:s,severity:m}));t.value=S(y(o,"user-list"),["id","shippingMethodName","vatDocumentRequired","productsPriceToPay","shippingPriceToPay","totalPriceToPay","orderStatusTypeId","comment"],{title:"Мои заказы",getData:()=>i(_).getUserOrders()})}),(a,o)=>e(t)?(u(),d(e(g),{key:0,config:e(t)},null,8,["config"])):l("",!0)}});export{$ as default};
