import{f as a,g as t,o as m,k as p,q as r,M as n,y as c}from"./entry.6f32ce5b.js";import{_ as f}from"./app-grid.vue.5d9107ab.js";import{p as g}from"./common.89e7c513.js";import{m as d}from"./message-grid-config.5d9cd0f0.js";import"./inputnumber.esm.52323d17.js";import"./button.esm.036886f5.js";import"./index.esm.85bba4e9.js";import"./inputtext.esm.78c4a222.js";import"./dropdown.esm.77ada897.js";import"./index.esm.18165f7b.js";import"./overlayeventbus.esm.2e24985a.js";import"./virtualscroller.esm.1ee6effb.js";import"./tristatecheckbox.esm.b3265c15.js";import"./checkbox.esm.36f62ccf.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.46e31c4b.js";import"./index.esm.725207ba.js";import"./AppCard.b14c3dc7.js";import"./_plugin-vue_export-helper.c27b6911.js";const $=a({__name:"my-messages",setup(_){const o=t(n),i=t(c),s=g(d,["orderId","displayName","displayText","createdAt"],{title:"Мои сообщения",getData:async()=>{const e=await o.getMyMessages();return await i.resetUnreadCount(),e}});return(e,u)=>(m(),p(r(f),{config:r(s)},null,8,["config"]))}});export{$ as default};
