import{A as s}from"./AppCardGroup.f885ea26.js";import{_}from"./product-form.vue.2a2b5c80.js";import{_ as f}from"./order-form.vue.d5cbf29b.js";import{j as y,c as d,b as e,w as t,F as u,o as m,z as g,k}from"./entry.ab7684c4.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.b1ed2379.js";import"./index.esm.6eea56af.js";import"./AppCard.268a5e1b.js";const D={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["add","delete","submit"],setup(p,{emit:n}){const r=p;return(x,o)=>{const l=y("FormKit");return m(),d(u,null,[e(l,{type:"list",name:"products",dynamic:""},{default:t(({items:i})=>[(m(!0),d(u,null,g(i,(c,a)=>(m(),k(l,{key:c,index:a,type:"group"},{default:t(()=>[e(s,null,{default:t(()=>[e(_,{readonly:r.readonly,index:a,onDelete:()=>n("delete",a)},null,8,["readonly","index","onDelete"])]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1}),e(s,null,{default:t(()=>[e(f,{"order-name":r.orderName,readonly:r.readonly,"msg-source":r.msgSource,onAdd:o[0]||(o[0]=()=>n("add")),onSubmit:o[1]||(o[1]=()=>n("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{D as default};
