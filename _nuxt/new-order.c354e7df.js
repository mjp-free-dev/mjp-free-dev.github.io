import{f as _,l as g,g as b,r as s,o as S,k as y,w as i,b as n,q as P,S as V,B as h}from"./entry.5bfca14e.js";import k from"./new-order-form.8231b583.js";import{A as w}from"./AppCardLayout.f65c919a.js";import{p as L}from"./AppProductsGrid.vue.a5e439aa.js";import"./AppCardGroup.2107353e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./order-form.vue.ac6fd63b.js";import"./button.esm.92af89c0.js";import"./index.esm.ce451912.js";import"./AppCard.85a5598c.js";import"./app-grid.vue.45c209a0.js";import"./inputnumber.esm.0b12fa7c.js";import"./inputtext.esm.14d7091a.js";import"./dropdown.esm.732eb628.js";import"./index.esm.d964bd20.js";import"./overlayeventbus.esm.77f22d2b.js";import"./virtualscroller.esm.1f7828d9.js";import"./tristatecheckbox.esm.1e8fe442.js";import"./checkbox.esm.05000209.js";import"./datetime.f31b9a37.js";import"./overlaypanel.esm.7ecf03c6.js";import"./index.esm.0e18fab3.js";const W=_({__name:"new-order",setup(O){const m=g(),l=b(V),a=s(null),u=s({comment:"",products:[{id:1,url:"",count:1}],shippingMethodId:null,vatDocumentRequired:!1});async function p(t){const e={...t,products:t.products.map(r=>({url:r.url,count:r.count}))},o=await l.set(async r=>r.rpc("addOrder",e));o!=null&&o.id&&m.push("/user/my-order-info?orderId="+(o==null?void 0:o.id))}function c(t){return t.value.products.length>0}function d(t){return!t.value.products.map(L).some(o=>o.length)}function f(t){u.value.products.splice(t,1)}function v(){var t;(t=a.value)==null||t.node.submit()}return(t,e)=>(S(),y(P(h),{ref_key:"form",ref:a,modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),type:"form",validation:"atLeastOneProduct|validProducts","validation-rules":{atLeastOneProduct:c,validProducts:d},"validation-messages":{atLeastOneProduct:"Добавьте хотя бы один товар.",validProducts:"Заполните корректно таблицу с товарами"},actions:!1,onSubmit:p},{default:i(()=>[n(w,null,{default:i(()=>{var o;return[n(k,{"msg-source":(o=a.value)==null?void 0:o.node,onDelete:f,onSubmit:v},null,8,["msg-source"])]}),_:1})]),_:1},8,["modelValue","validation-rules","validation-messages"]))}});export{W as default};
