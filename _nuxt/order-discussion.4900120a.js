import g from"./inputtext.esm.45c4acb4.js";import{s as x}from"./button.esm.11483814.js";import{f as M,g as I,M as y,r as c,j as w,o as a,i,w as l,b as n,a as u,c as C,y as b,q as p,F as A,z as B}from"./entry.ab75e8ac.js";import{A as V}from"./AppCard.ca239374.js";import{A as h}from"./AppCardGroup.c9eaf2e9.js";import k from"./order-discussion-message.c998d2c1.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.fff8a1bc.js";import"./datetime.f31b9a37.js";const D={class:"chat-container"},N={class:"user-message"},S=M({__name:"order-discussion",props:{orderId:{},mode:{}},setup(m){const s=m,o=I(y),t=c([]),e=c("");w(async()=>{t.value=await o.getOrderMessages(s.orderId)});async function _(){e.value&&(s.mode==="customer"?await o.addCustomerMessage(s.orderId,e.value):await o.addModerMessage(s.orderId,e.value),e.value="",t.value=await o.getOrderMessages(s.orderId))}return(F,d)=>{const f=g,v=x;return a(),i(h,null,{default:l(()=>[n(V,{basis:"700px",title:"Обсуждение заказа #"+s.orderId},{default:l(()=>[u("div",D,[(a(!0),C(A,null,b(p(t),r=>(a(),i(k,{time:r.createdAt,source:r.source,sender:r.displayName,text:r.displayText},null,8,["time","source","sender","text"]))),256))]),u("div",N,[n(f,{modelValue:p(e),"onUpdate:modelValue":d[0]||(d[0]=r=>B(e)?e.value=r:null),class:"messagebox",placeholder:"Введите сообщение"},null,8,["modelValue"]),n(v,{label:"Отправить",onClick:_})])]),_:1},8,["title"])]),_:1})}}});const $=O(S,[["__scopeId","data-v-6cf412e3"]]);export{$ as default};
