import{A as d}from"./AppCardGroup.76fa47d7.js";import f from"./product-form.20909329.js";import{_ as y}from"./order-form.vue.4814cf50.js";import{j as _,c as s,b as e,w as t,F as u,o as m,z as g,k}from"./entry.e4510a96.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./button.esm.7b475824.js";import"./index.esm.13b0b569.js";import"./AppCard.a0367c04.js";const D={__name:"new-order-form",props:["msgSource","readonly","orderName"],emits:["add","delete","submit"],setup(p,{emit:n}){const r=p;return(x,o)=>{const l=_("FormKit");return m(),s(u,null,[e(d,null,{default:t(()=>[e(l,{type:"list",name:"products",dynamic:""},{default:t(({items:i})=>[(m(!0),s(u,null,g(i,(c,a)=>(m(),k(l,{key:c,index:a,type:"group"},{default:t(()=>[e(f,{readonly:r.readonly,index:a,onDelete:()=>n("delete",a)},null,8,["readonly","index","onDelete"])]),_:2},1032,["index"]))),128))]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(y,{"order-name":r.orderName,readonly:r.readonly,"msg-source":r.msgSource,onAdd:o[0]||(o[0]=()=>n("add")),onSubmit:o[1]||(o[1]=()=>n("submit"))},null,8,["order-name","readonly","msg-source"])]),_:1})],64)}}};export{D as default};
