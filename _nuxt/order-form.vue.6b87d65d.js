import{s as f}from"./button.esm.80d429ee.js";import{A as _}from"./AppCard.b8a305ce.js";import{f as k,r as y,ag as h,s as C,j as g,o as a,k as t,w as l,y as r,a as v,z as n,b as S,K as x}from"./entry.3eeb7ad7.js";const w={class:"content"},$=k({__name:"order-form",props:{msgSource:{},readonly:{type:Boolean},orderName:{}},emits:["add","submit"],setup(p,{emit:i}){const e=p,s=y(null),c=h();return C(async()=>{const m=await c.reload();s.value=[{$formkit:"primeCheckbox",name:"vatDocumentRequired",label:"Требуется документ для НДС",_disabled:e.readonly},{$formkit:"primeDropdown",name:"shippingMethodId",label:"Способ получения",validation:"required",_disabled:e.readonly,options:m},{$formkit:"primeTextarea",name:"comment",label:"Коментарий",rows:"5",_disabled:e.readonly}]}),(m,o)=>{const u=g("FormKitSchema"),d=f;return a(),t(_,{basis:"500px",title:"Информация о заказе "+(e.orderName??"")},{actions:l(()=>[e.readonly?r("",!0):(a(),t(d,{key:0,icon:"pi pi-plus",label:"Добавить товар",onClick:o[1]||(o[1]=b=>i("add"))}))]),default:l(()=>[v("div",w,[n(s)?(a(),t(u,{key:0,schema:n(s)},null,8,["schema"])):r("",!0),S(n(x),{node:e.msgSource},null,8,["node"]),e.readonly?r("",!0):(a(),t(d,{key:1,label:"Отправить",onClick:o[0]||(o[0]=b=>i("submit"))}))])]),_:1},8,["title"])}}});export{$ as _};
