import i from"./product-form.7b89e9b0.js";import u from"./order-form.cb40f874.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";import{q as y,c as a,a as m,b as s,w as l,o as d,F as g,C as F,S as v}from"./entry.a1015cae.js";import"./button.esm.af27022a.js";import"./index.esm.03be2101.js";import"./AppCard.488e347b.js";const x={class:"form"},w={class:"card-group"},b={class:"card-group"},k={__name:"new-order-form",props:["msgSource","readonly"],emits:["add","delete","submit"],setup(c,{emit:o}){const r=c;return(B,e)=>{const n=y("FormKit");return d(),a("div",x,[m("div",w,[s(n,{type:"list",name:"products",dynamic:""},{default:l(({items:p})=>[(d(!0),a(g,null,F(p,(_,t)=>(d(),v(n,{key:_,index:t,type:"group"},{default:l(()=>[s(i,{readonly:r.readonly,index:t,onDelete:()=>o("delete",t)},null,8,["readonly","index","onDelete"])]),_:2},1032,["index"]))),128))]),_:1})]),m("div",b,[s(u,{readonly:r.readonly,"msg-source":r.msgSource,onAdd:e[0]||(e[0]=()=>o("add")),onSubmit:e[1]||(e[1]=()=>o("submit"))},null,8,["readonly","msg-source"])])])}}},h=f(k,[["__scopeId","data-v-faedf348"]]);export{h as default};
