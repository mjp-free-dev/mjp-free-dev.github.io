import{f as v,k as _,g as b,S as g,r as s,o as S,i as y,w as n,b as u,q as h,a9 as V}from"./entry.ab75e8ac.js";import k from"./new-order-form.eb15bcf9.js";import{A as w}from"./AppCardLayout.20548bc6.js";import"./AppCardGroup.c9eaf2e9.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./product-form.a6d76e00.js";import"./button.esm.11483814.js";import"./index.esm.fff8a1bc.js";import"./AppCard.ca239374.js";import"./order-form.vue.e26be786.js";const F=v({__name:"new-order",setup(L){const i=_(),l=b(g),r=s(null),a=s({comment:"",products:[{}],shippingMethodId:null,vatDocumentRequired:!1});async function d(o){const e=await l.set(async t=>t.rpc("addOrder",o));e!=null&&e.id&&i.push("/user/my-order-info?orderId="+(e==null?void 0:e.id))}function m(o){return o.value.products.length>0}function c(o){a.value.products.splice(o,1)}function p(){a.value.products.push({})}function f(){var o;(o=r.value)==null||o.node.submit()}return(o,e)=>(S(),y(h(V),{ref_key:"form",ref:r,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),type:"form",validation:"atLeastOneProduct","validation-rules":{atLeastOneProduct:m},"validation-messages":{atLeastOneProduct:"Добавьте хотя бы один товар."},actions:!1,onSubmit:d},{default:n(()=>[u(w,null,{default:n(()=>{var t;return[u(k,{"msg-source":(t=r.value)==null?void 0:t.node,onAdd:p,onDelete:c,onSubmit:f},null,8,["msg-source"])]}),_:1})]),_:1},8,["modelValue","validation-rules","validation-messages"]))}});export{F as default};
