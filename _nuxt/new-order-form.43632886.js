import{A as e}from"./AppCardGroup.bc03e898.js";import{_ as n}from"./order-form.vue.ef57a13f.js";import{_ as l}from"./AppProductsGrid.vue.43db4282.js";import{j as u,c as d,b as o,w as m,F as c,o as _}from"./entry.8e7119ca.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.9196a46d.js";import"./index.esm.f10c0c33.js";import"./AppCard.d30ddb9c.js";import"./app-grid.vue.27572db1.js";import"./inputnumber.esm.0ee950b2.js";import"./inputtext.esm.bd96e195.js";import"./dropdown.esm.34c2535f.js";import"./index.esm.723a2c94.js";import"./overlayeventbus.esm.54709e3e.js";import"./virtualscroller.esm.0155878a.js";import"./tristatecheckbox.esm.3d8edca2.js";import"./checkbox.esm.fe802dbf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.a8fdde70.js";import"./index.esm.3ae98fd6.js";const q={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["submit"],setup(i,{emit:p}){const r=i;return(f,t)=>{const s=u("FormKit");return _(),d(c,null,[o(e,null,{default:m(()=>[o(s,{type:"list",name:"products",dynamic:""},{default:m(({node:a})=>[o(l,{items:a.value,mode:"new"},null,8,["items"])]),_:1})]),_:1}),o(e,null,{default:m(()=>[o(n,{"order-name":r.orderName,readonly:r.readonly,"msg-source":r.msgSource,onSubmit:t[0]||(t[0]=()=>p("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{q as default};
