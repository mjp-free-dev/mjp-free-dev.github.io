import{f as p,r as n,i as c,g as i,q as t,o as l,k as d,n as u,S as f,O as g}from"./entry.8e7119ca.js";import{_,r as y}from"./app-grid.vue.27572db1.js";import{b as P}from"./order-config.f18ae773.js";import{p as S}from"./common.89e7c513.js";import"./inputnumber.esm.0ee950b2.js";import"./button.esm.9196a46d.js";import"./index.esm.f10c0c33.js";import"./inputtext.esm.bd96e195.js";import"./dropdown.esm.34c2535f.js";import"./index.esm.723a2c94.js";import"./overlayeventbus.esm.54709e3e.js";import"./virtualscroller.esm.0155878a.js";import"./tristatecheckbox.esm.3d8edca2.js";import"./checkbox.esm.fe802dbf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.a8fdde70.js";import"./index.esm.3ae98fd6.js";import"./AppCard.d30ddb9c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./AppProductsGrid.vue.43db4282.js";const j=p({__name:"all-order-list",setup(v){const e=n(null);return c(async()=>{const o=(await i(f).getMany(async r=>r.from("orderStatusType").select())).map(({id:r,name:s,severity:m})=>({value:r,label:s,severity:m}));e.value=S(P(o,"moder-list"),["id","shippingMethodName","vatDocumentRequired","productsPriceToPay","shippingPriceToPay","totalPriceToPay","orderStatusTypeId","totalPriceNet","totalPriceGross","deliveryDate","shippingDate","comment","notes"],{title:"Все заказы",getData:()=>i(g).getAllOrders(),columns:{id:y("/moder/all-order-info?orderId=")}})}),(a,o)=>t(e)?(l(),d(t(_),{key:0,config:t(e)},null,8,["config"])):u("",!0)}});export{j as default};
