import{A as d}from"./AppCardGroup.19680c97.js";import f from"./product-form.9675567f.js";import{_ as y}from"./order-form.vue.2a2146cc.js";import{j as _,c as s,b as e,w as t,F as u,o as m,C as g,k}from"./entry.2894c27a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.f3b29ab0.js";import"./index.esm.b8ed1986.js";import"./AppCard.0290cee7.js";const D={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["add","delete","submit"],setup(p,{emit:n}){const r=p;return(x,o)=>{const l=_("FormKit");return m(),s(u,null,[e(d,null,{default:t(()=>[e(l,{type:"list",name:"products",dynamic:""},{default:t(({items:i})=>[(m(!0),s(u,null,g(i,(c,a)=>(m(),k(l,{key:c,index:a,type:"group"},{default:t(()=>[e(f,{readonly:r.readonly,index:a,onDelete:()=>n("delete",a)},null,8,["readonly","index","onDelete"])]),_:2},1032,["index"]))),128))]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(y,{"order-name":r.orderName,readonly:r.readonly,"msg-source":r.msgSource,onAdd:o[0]||(o[0]=()=>n("add")),onSubmit:o[1]||(o[1]=()=>n("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{D as default};
