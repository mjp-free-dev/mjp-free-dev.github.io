import{f as r,l as u,m as n,q as p,s as c,o as i,k as l,w as s,b as t,a as m}from"./entry.6f82f3e9.js";import{A as d}from"./AppCard.15c0afdc.js";import{A as _}from"./AppCardGroup.02cde9cc.js";import{A as f}from"./AppCardLayout.9b57ab3b.js";import"./_plugin-vue_export-helper.c27b6911.js";const A=m("p",null,"Производится выход...",-1),b=r({__name:"logout",setup(C){const a=u(),o=n(),e=p();return c(async()=>{await a.signOut(),await o.push("/account/login"),e.add({severity:"success",summary:"Вы вышли"})}),(h,w)=>(i(),l(f,null,{default:s(()=>[t(_,null,{default:s(()=>[t(d,{basis:"300px",title:"Выход"},{default:s(()=>[A]),_:1})]),_:1})]),_:1}))}});export{b as default};
