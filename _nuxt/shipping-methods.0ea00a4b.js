import{f as c,r as d,i as l,S as u,l as f,o as b,k as g,x as n}from"./entry.2894c27a.js";import{s as h,b as s,d as w,A as _}from"./index.ae42b1a7.js";import"./inputtext.esm.4df286ea.js";import"./dropdown.esm.1f0d9021.js";import"./index.esm.bd679c97.js";import"./index.esm.b8ed1986.js";import"./overlayeventbus.esm.4d65d8a4.js";import"./virtualscroller.esm.01356a1a.js";import"./tristatecheckbox.esm.bc7798de.js";import"./checkbox.esm.3da35f71.js";import"./datetime.f31b9a37.js";import"./inputnumber.esm.94d5614f.js";import"./button.esm.f3b29ab0.js";import"./index.esm.28d371ed.js";import"./AppCard.0290cee7.js";import"./_plugin-vue_export-helper.c27b6911.js";const j=c({__name:"shipping-methods",setup(y){const e=d([]),o=l(u);async function a(){e.value=await o.getMany(async t=>t.from("shippingMethod").select())}f(a);async function r(t){await o.set(async i=>i.from("shippingMethod").upsert(t)),await a()}async function p(){await o.set(async t=>t.from("shippingMethod").upsert({name:"",description:"",enabled:!1})),await a()}const m={title:"Способы получения",labels:{id:"ID",name:"Имя",description:"Описание",enabled:"Активность"},columns:{id:h,name:s,description:s,enabled:w}};return(t,i)=>(b(),g(n(_),{config:m,data:n(e),onRowAdd:p,onRowEditSave:r},null,8,["data"]))}});export{j as default};
