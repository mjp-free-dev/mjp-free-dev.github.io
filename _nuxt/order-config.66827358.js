import{b as a,f as u,o as l,k as c,q as p,l as m}from"./entry.3da54617.js";import{f,_ as h,c as i,b as o,r as g,d as b,a as P}from"./app-grid.vue.6e53066b.js";import"./AppCard.d3127d28.js";import"./inputtext.esm.787be2eb.js";function _(e,t){if(e.length<=t)return e;const s=e.split("?")[0],r="...",n=t-r.length,d=s.substr(-n);return r+d}function y(e){return{...f,slots:{body:({data:t,field:s})=>{const r=t[s];if(!r)return[];const n=_(r,e);return[a("a",{target:"_blank",style:"text-decoration: underline;",href:r},[n])]}}}}const k=u({__name:"AppOrderItems",props:{data:{}},setup(e){const t=e,s={title:"",getData:()=>Promise.resolve(t.data),hidePaging:!0,labels:{url:"Ссылка",priceForOne:"Цена за единицу (PLN)",count:"Количество"},columns:{url:y(50),priceForOne:i,count:o}};return(r,n)=>(l(),c(p(h),{config:s}))}});function A(e){return{allowExpand:!0,allowAdd:()=>m().push("/user/new-order"),slots:{expansion:t=>[a(k,{data:t.data.products},null)]},labels:{products:"",createdAt:"",createdBy:"",orderStatus:"",shippingMethod:"",shippingMethodId:"",id:"#",shippingMethodName:"Получение",vatDocumentRequired:"VAT",positions:"Позиций",items:"Единиц",price:"Цена (PLN)",orderStatusTypeId:"Статус",comment:"Комментрарий"},columns:{products:!1,createdAt:!1,createdBy:!1,orderStatus:!1,shippingMethod:!1,shippingMethodId:!1,id:g("/user/my-order-info?orderId="),shippingMethodName:o,vatDocumentRequired:b,positions:o,items:o,price:i,orderStatusTypeId:P(e),comment:o}}}export{A as b};
