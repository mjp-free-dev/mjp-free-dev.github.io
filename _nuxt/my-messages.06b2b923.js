import{f as a,g as t,o as m,k as p,q as r,M as n,y as c}from"./entry.ef3daa6b.js";import{_ as f}from"./app-grid.vue.c3c95e3d.js";import{p as g}from"./common.89e7c513.js";import{m as d}from"./message-grid-config.81173af3.js";import"./inputnumber.esm.cde36fcb.js";import"./button.esm.ae27811b.js";import"./index.esm.b66eecda.js";import"./inputtext.esm.23600ca7.js";import"./dropdown.esm.28d6e4b9.js";import"./index.esm.9270cfce.js";import"./overlayeventbus.esm.042ed61b.js";import"./virtualscroller.esm.b674481e.js";import"./tristatecheckbox.esm.a561878a.js";import"./checkbox.esm.8005b0bc.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.b0d24185.js";import"./index.esm.83c93c4d.js";import"./AppCard.f3d13d9d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.88c16502.js";const b=a({__name:"my-messages",setup(_){const o=t(n),i=t(c),s=g(d,["orderId","displayName","displayText","createdAt"],{title:"Мои сообщения",getData:async()=>{const e=await o.getMyMessages();return await i.resetUnreadCount(),e}});return(e,u)=>(m(),p(r(f),{config:r(s)},null,8,["config"]))}});export{b as default};
