import{s as d}from"./button.esm.a37fda45.js";import{A as l}from"./AppCard.67e1ae2d.js";import{f as c,j as u,o,k as r,w as n,n as _,b as f}from"./entry.daca868c.js";const C=c({__name:"product-form",props:{index:{},readonly:{type:Boolean}},emits:["delete"],setup(a,{emit:i}){const e=a,m=[{$formkit:"primeInputText",name:"url",label:"Ссылка на товар",help:e.readonly?"":"Пример: https://example.com/product?id=42",validation:"required | url",_disabled:e.readonly},{$formkit:"primeInputNumber",name:"count",label:"Количество товара",validation:"required|min:1|max:1000000000",_disabled:e.readonly}];return(x,t)=>{const s=u("FormKitSchema"),p=d;return o(),r(l,{basis:"350px",title:"Toвар #"+(e.index+1)},{actions:n(()=>[e.readonly?_("",!0):(o(),r(p,{key:0,severity:"danger",icon:"pi pi-trash",onClick:t[0]||(t[0]=y=>i("delete"))}))]),default:n(()=>[f(s,{schema:m})]),_:1},8,["title"])}}});export{C as _};
