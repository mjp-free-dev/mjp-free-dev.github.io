import{f as p,r as n,i as c,g as i,q as e,o as u,k as d,n as l,S as f,O as _}from"./entry.6e8d4fb5.js";import{_ as g}from"./app-grid.vue.1612e8b2.js";import{b as y}from"./order-config.9e280427.js";import{p as S}from"./common.89e7c513.js";import"./inputnumber.esm.16796fc0.js";import"./button.esm.31c6eab7.js";import"./index.esm.978c6e03.js";import"./inputtext.esm.d2459eb8.js";import"./dropdown.esm.ebe9fc40.js";import"./index.esm.692acad8.js";import"./overlayeventbus.esm.408a5135.js";import"./virtualscroller.esm.9fd8be96.js";import"./tristatecheckbox.esm.ceef21e9.js";import"./checkbox.esm.c5753387.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.b79618e7.js";import"./index.esm.780df751.js";import"./AppCard.63a6ae7a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./AppProductsGrid.vue.0679d5e5.js";const $=p({__name:"my-order-list",setup(v){const t=n(null);return c(async()=>{const o=(await i(f).getMany(async r=>r.from("orderStatusType").select())).map(({id:r,name:s,severity:m})=>({value:r,label:s,severity:m}));t.value=S(y(o,"user-list"),["id","shippingMethodName","vatDocumentRequired","productsPriceToPay","shippingPriceToPay","totalPriceToPay","orderStatusTypeId","comment"],{title:"Мои заказы",getData:()=>i(_).getUserOrders()})}),(a,o)=>e(t)?(u(),d(e(g),{key:0,config:e(t)},null,8,["config"])):l("",!0)}});export{$ as default};
