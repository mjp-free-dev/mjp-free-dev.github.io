import{A as e}from"./AppCardGroup.604c65ff.js";import{_ as n}from"./order-form.vue.64d2bd84.js";import{_ as l}from"./AppProductsGrid.vue.35fa968f.js";import{j as u,c as d,b as o,w as m,F as c,o as _}from"./entry.be33f26a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.34893e38.js";import"./index.esm.f633f1e3.js";import"./AppCard.c9a798ef.js";import"./app-grid.vue.92b2cf11.js";import"./inputnumber.esm.8498f136.js";import"./inputtext.esm.0800557f.js";import"./dropdown.esm.8d01750f.js";import"./index.esm.db6dba8d.js";import"./overlayeventbus.esm.45b167bf.js";import"./virtualscroller.esm.15a82d55.js";import"./tristatecheckbox.esm.89733a7e.js";import"./checkbox.esm.5eb0a31d.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.f5e7b007.js";import"./index.esm.3a746720.js";const q={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["submit"],setup(i,{emit:p}){const r=i;return(f,t)=>{const s=u("FormKit");return _(),d(c,null,[o(e,null,{default:m(()=>[o(s,{type:"list",name:"products",dynamic:""},{default:m(({node:a})=>[o(l,{items:a.value,mode:"new"},null,8,["items"])]),_:1})]),_:1}),o(e,null,{default:m(()=>[o(n,{"order-name":r.orderName,readonly:r.readonly,"msg-source":r.msgSource,onSubmit:t[0]||(t[0]=()=>p("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{q as default};
