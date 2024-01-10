import{_ as W}from"./AppProductsGrid.vue.ce7dfa26.js";import{f as U,r as v,i as K,j as B,o as n,k as l,w as s,q as d,s as L,b as y,n as b,v as X,g as M,S as Y,O as Z,E as ee}from"./entry.ef3daa6b.js";import{A as N}from"./AppCardGroup.5379585f.js";import{A as te}from"./AppCardLayout.c2db4499.js";import ae from"./order-discussion.b9a3e24d.js";import{_ as re}from"./order-form-ro.vue.5e48ed69.js";import{_ as oe}from"./AppOrderPublicStatusForm.vue.68d2572b.js";import{A as R}from"./AppCard.f3d13d9d.js";import{s as ie}from"./button.esm.ae27811b.js";import{D as O}from"./datetime.f31b9a37.js";import"./app-grid.vue.c3c95e3d.js";import"./inputnumber.esm.cde36fcb.js";import"./inputtext.esm.23600ca7.js";import"./dropdown.esm.28d6e4b9.js";import"./index.esm.9270cfce.js";import"./index.esm.b66eecda.js";import"./overlayeventbus.esm.042ed61b.js";import"./virtualscroller.esm.b674481e.js";import"./tristatecheckbox.esm.a561878a.js";import"./checkbox.esm.8005b0bc.js";import"./overlaypanel.esm.b0d24185.js";import"./index.esm.83c93c4d.js";import"./index.88c16502.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./order-discussion-message.8cf4f298.js";const ue=U({__name:"AppOrderCustomerForm",props:{data:{}},setup(t){const a=t,r=v(null),o=v(null);return K(()=>{o.value={displayId:a.data.createdByProfile.displayId,fullName:a.data.createdByProfile.fullName,email:a.data.createdByProfile.userPrivateProfile.email,phoneNumber:a.data.createdByProfile.userPrivateProfile.phoneNumber},r.value=[{$formkit:"primeInputText",name:"displayId",label:"Номер в системе",_disabled:!0},{$formkit:"primeInputText",name:"fullName",label:"Фамилия Имя",_disabled:!0},{$formkit:"primeInputText",name:"email",label:"Email",_disabled:!0},{$formkit:"primeInputText",name:"phoneNumber",label:"Номер телефона",_disabled:!0}]}),(i,e)=>{const w=B("FormKitSchema"),P=B("FormKit");return n(),l(R,{basis:"500px",title:"Заказчик"},{default:s(()=>[d(r)&&d(o)?(n(),l(P,{key:0,ref:"form",modelValue:d(o),"onUpdate:modelValue":e[0]||(e[0]=u=>L(o)?o.value=u:null),type:"form",actions:!1},{default:s(()=>[y(w,{schema:d(r)},null,8,["schema"])]),_:1},8,["modelValue"])):b("",!0)]),_:1})}}});function G(t){if(Number.isFinite(t))return t}function E(t){if(typeof t!="string")return;const a=O.fromFormat(t,"yyyy-MM-dd");if(a.isValid)return a.toJSDate()}function q(t){if(typeof t=="object"&&t instanceof Date){const a=O.fromJSDate(t);if(a.isValid)return a.toFormat("yyyy-MM-dd")}if(typeof t=="string"){const a=O.fromFormat("yyyy-MM-dd",t);if(a.isValid)return a.toFormat("yyyy-MM-dd")}}const se=U({__name:"AppOrderPrivateStatusForm",props:{id:{},readonly:{type:Boolean},data:{}},emits:["update"],setup(t,{emit:a}){const r=t,o=v(null),i=v(null);K(()=>{i.value={deliveryDate:E(r.data.deliveryDate),shippingDate:E(r.data.shippingDate),notes:r.data.notes,totalPriceNet:G(r.data.totalPriceNet),totalPriceGross:G(r.data.totalPriceGross)},o.value=[{$formkit:"primeInputNumber",name:"totalPriceNet",label:"Итого цена нетто",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:!0},{$formkit:"primeInputNumber",name:"totalPriceGross",label:"Итого цена брутто",suffix:" PLN",minFractionDigits:2,maxFractionDigits:2,validation:"min:0.01|max:1000000000",_disabled:!0},{$formkit:"primeCalendar",name:"deliveryDate",label:"Дата доставки",dateFormat:"yy-mm-dd",showButtonBar:!0,_disabled:r.readonly},{$formkit:"primeCalendar",name:"shippingDate",label:"Дата выдачи",dateFormat:"yy-mm-dd",showButtonBar:!0,_disabled:r.readonly},{$formkit:"primeTextarea",name:"notes",label:"Заметки",rows:"5",_disabled:r.readonly}]});const e=v(null);function w(){var u;(u=e.value)==null||u.node.submit()}function P(){if(!i.value)return;const{deliveryDate:u,shippingDate:m,notes:T}=i.value;a("update",{deliveryDate:q(u),shippingDate:q(m),notes:T})}return(u,m)=>{const T=B("FormKitSchema"),F=ie,k=B("FormKit");return n(),l(R,{basis:"500px",title:"Учёт заказа #"+r.id},{default:s(()=>[d(o)&&d(i)?(n(),l(k,{key:0,ref_key:"form",ref:e,modelValue:d(i),"onUpdate:modelValue":m[1]||(m[1]=$=>L(i)?i.value=$:null),type:"form",actions:!1,onSubmit:P},{default:s(()=>[y(T,{schema:d(o)},null,8,["schema"]),r.readonly?b("",!0):(n(),l(F,{key:0,label:"Обновить",onClick:m[0]||(m[0]=()=>w())}))]),_:1},8,["modelValue"])):b("",!0)]),_:1},8,["title"])}}}),Ae=U({__name:"all-order-info",setup(t){const o=X().query.orderId,i=Number(Array.isArray(o)?o[0]:o),e=v(null),w=v(void 0),P=v(null),u=v(null),m=M(Y),T=M(Z);async function F(){e.value=null,w.value=void 0,P.value=null,u.value=null}async function k(){F();const c=(await T.getAllOrders(i))[0];e.value=c;const{id:p,vatDocumentRequired:f,shippingMethodName:S,comment:_,orderStatusTypeId:h,productsPriceToPay:I,totalPriceToPay:x,shippingPriceToPay:g,deliveryDate:A,shippingDate:V,notes:C,totalPriceNet:H,totalPriceGross:Q}=c;w.value={id:p,vatDocumentRequired:f,shippingMethodName:S,comment:_},P.value={orderStatusTypeId:h,productsPriceToPay:I,totalPriceToPay:x,shippingPriceToPay:g},u.value={deliveryDate:A,shippingDate:V,notes:C,totalPriceNet:H,totalPriceGross:Q}}const $=M(ee);K(k);async function j(D){if(!e.value)return;const c=e.value.createdByProfile.userPrivateProfile.email,p=e.value.orderStatusTypeId,{id:f,orderPrivateStatus:S,orderPublicStatus:_}=e.value,{orderStatusTypeId:h,shippingPriceToPay:I,orderStatusTypeName:x}=D;F(),await m.set(async g=>g.rpc("updateOrderStatus",{orderId:f,newTypeId:h,newPublicStatus:{shippingPriceToPay:I},newProductsPublicStatus:_.productsPublicStatus,newPrivateStatus:S.privateStatus,newProductsPrivateStatus:S.productsPrivateStatus})),p!==h&&await $.sendStatusEmail(c,f,x),await k()}async function J(D){if(!e.value)return;const{id:c,orderPrivateStatus:p,orderPublicStatus:f,orderStatusTypeId:S}=e.value;F(),await m.set(async _=>_.rpc("updateOrderStatus",{orderId:c,newTypeId:S,newPublicStatus:f.publicStatus,newProductsPublicStatus:f.productsPublicStatus,newPrivateStatus:D,newProductsPrivateStatus:p.productsPrivateStatus})),await k()}async function z(D){if(!e.value)return;const{id:c,orderPrivateStatus:p,orderPublicStatus:f,orderStatusTypeId:S}=e.value,_=[],h=[];for(const I of D){const{priceToPay:x,adminPriceForOne:g,priceGross:A,priceMarkup:V,priceNet:C}=I;_.push({priceToPay:x,adminPriceForOne:g}),h.push({priceGross:A,priceMarkup:V,priceNet:C})}F(),await m.set(async I=>I.rpc("updateOrderStatus",{orderId:c,newTypeId:S,newPublicStatus:f.publicStatus,newProductsPublicStatus:_,newPrivateStatus:p.privateStatus,newProductsPrivateStatus:h})),await k()}return(D,c)=>{const p=W;return n(),l(te,null,{default:s(()=>[y(N,null,{default:s(()=>[e.value?(n(),l(p,{key:0,items:e.value.products,mode:"moder",onUpdated:z},null,8,["items"])):b("",!0)]),_:1}),y(N,null,{default:s(()=>[y(re,{data:w.value},null,8,["data"])]),_:1}),y(N,null,{default:s(()=>[P.value?(n(),l(oe,{key:0,id:d(i),data:P.value,readonly:!1,onUpdate:j},null,8,["id","data"])):b("",!0)]),_:1}),y(N,null,{default:s(()=>[u.value?(n(),l(se,{key:0,id:d(i),data:u.value,readonly:!1,onUpdate:J},null,8,["id","data"])):b("",!0)]),_:1}),y(N,null,{default:s(()=>[e.value?(n(),l(ue,{key:0,data:e.value},null,8,["data"])):b("",!0)]),_:1}),y(N,null,{default:s(()=>[e.value?(n(),l(ae,{key:0,customerEmail:e.value.createdByProfile.userPrivateProfile.email,"order-id":d(i),mode:"moder"},null,8,["customerEmail","order-id"])):b("",!0)]),_:1})]),_:1})}}});export{Ae as default};
