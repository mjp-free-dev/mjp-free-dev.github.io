import{f as a,g as t,o as m,k as p,q as r,M as n,y as c}from"./entry.794ab1a3.js";import{_ as f}from"./app-grid.vue.c34d1b5f.js";import{p as g}from"./common.89e7c513.js";import{m as d}from"./message-grid-config.e2c85739.js";import"./inputnumber.esm.78ad8a24.js";import"./button.esm.3da93bcb.js";import"./index.esm.d121c06e.js";import"./inputtext.esm.18ff8fff.js";import"./dropdown.esm.772fd204.js";import"./index.esm.196603a3.js";import"./overlayeventbus.esm.b4e0798b.js";import"./virtualscroller.esm.0de93786.js";import"./tristatecheckbox.esm.5b972f31.js";import"./checkbox.esm.a5e0441d.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.9b20d2e3.js";import"./index.esm.86f75874.js";import"./AppCard.6c46a362.js";import"./_plugin-vue_export-helper.c27b6911.js";const $=a({__name:"my-messages",setup(_){const o=t(n),i=t(c),s=g(d,["orderId","displayName","displayText","createdAt"],{title:"Мои сообщения",getData:async()=>{const e=await o.getMyMessages();return await i.resetUnreadCount(),e}});return(e,u)=>(m(),p(r(f),{config:r(s)},null,8,["config"]))}});export{$ as default};
