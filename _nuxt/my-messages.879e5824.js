import{f as a,g as t,o as m,k as p,q as r,M as n,x as c}from"./entry.e85593be.js";import{_ as f}from"./app-grid.vue.7ccbb837.js";import{p as g}from"./common.89e7c513.js";import{m as d}from"./message-grid-config.9edec072.js";import"./inputnumber.esm.5d87c23a.js";import"./button.esm.129ada41.js";import"./index.esm.8d716db7.js";import"./inputtext.esm.46b8f2d6.js";import"./dropdown.esm.84ee6587.js";import"./index.esm.aaacc20a.js";import"./overlayeventbus.esm.575c1580.js";import"./virtualscroller.esm.35aa146a.js";import"./tristatecheckbox.esm.feface7b.js";import"./checkbox.esm.d73584bf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.b92fde5f.js";import"./index.esm.4da7eded.js";import"./AppCard.c02371e3.js";import"./_plugin-vue_export-helper.c27b6911.js";const $=a({__name:"my-messages",setup(_){const o=t(n),i=t(c),s=g(d,["orderId","displayName","displayText","createdAt"],{title:"Мои сообщения",getData:async()=>{const e=await o.getMyMessages();return await i.resetUnreadCount(),e}});return(e,u)=>(m(),p(r(f),{config:r(s)},null,8,["config"]))}});export{$ as default};
