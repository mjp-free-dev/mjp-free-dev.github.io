import{A as p}from"./AppCardGroup.bb33e21d.js";import{_ as n}from"./order-form.vue.d096f966.js";import{_ as l}from"./AppProductsGrid.vue.f5a6c5ad.js";import{j as d,c as u,b as o,w as m,F as c,o as _}from"./entry.52dc1539.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.2c654bfb.js";import"./index.esm.808fdf09.js";import"./AppCard.e7e64d2e.js";import"./app-grid.vue.a2deb59e.js";import"./inputnumber.esm.f70e74ca.js";import"./inputtext.esm.48a58b64.js";import"./dropdown.esm.eb2bd712.js";import"./index.esm.8cd44613.js";import"./overlayeventbus.esm.e180a120.js";import"./virtualscroller.esm.cd9c4eaa.js";import"./tristatecheckbox.esm.479ba751.js";import"./checkbox.esm.cc491fd3.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.0dc180b1.js";import"./index.esm.482688f0.js";const z={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["add","delete","submit"],setup(i,{emit:e}){const t=i;return(f,r)=>{const s=d("FormKit");return _(),u(c,null,[o(p,null,{default:m(()=>[o(s,{type:"list",name:"products",dynamic:""},{default:m(({node:a})=>[o(l,{items:a.value},null,8,["items"])]),_:1})]),_:1}),o(p,null,{default:m(()=>[o(n,{"order-name":t.orderName,readonly:t.readonly,"msg-source":t.msgSource,onAdd:r[0]||(r[0]=()=>e("add")),onSubmit:r[1]||(r[1]=()=>e("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{z as default};
