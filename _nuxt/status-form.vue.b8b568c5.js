import{s as u}from"./button.esm.cc1e67b9.js";import{f,r as b,i as _,L as y,l as x,j as v,o as a,k as o,w as k,x as i,v as s,b as g,E as S}from"./entry.fc266965.js";import{A as F}from"./AppCard.c4a1baa7.js";const w=f({__name:"status-form",props:{id:{},msgSource:{},readonly:{type:Boolean}},emits:["update"],setup(m,{emit:l}){const e=m,t=b(null),c=_(y);return x(async()=>{const n=await c.getEnabledOrderStatusTypes();t.value=[{$formkit:"primeDropdown",name:"typeId",label:"Статус",validation:"required",_disabled:e.readonly,options:n},{$formkit:"primeInputNumber",name:"buyPrice",label:"Цена закупки",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:e.readonly},{$formkit:"primeInputNumber",name:"sellPrice",label:"Цена продажи",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:e.readonly}]}),(n,r)=>{const d=v("FormKitSchema"),p=u;return a(),o(F,{basis:"500px",title:"Статус заказа #"+e.id},{default:k(()=>[i(t)?(a(),o(d,{key:0,schema:i(t)},null,8,["schema"])):s("",!0),g(i(S),{node:e.msgSource},null,8,["node"]),e.readonly?s("",!0):(a(),o(p,{key:1,label:"Обновить",onClick:r[0]||(r[0]=C=>l("update"))}))]),_:1},8,["title"])}}});export{w as _};
