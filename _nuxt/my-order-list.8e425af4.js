import k from"./inputtext.esm.4b6e9177.js";import{s as T,a as w}from"./datatable.esm.41980a05.js";import L from"./tristatecheckbox.esm.76ca42da.js";import{f as S,j as U,m as x,I as N,J as n,z as R,o as $,c as M,b as a,w as o,a as u,h as d,d as D,l as f,K as O,L as q,p as A,e as F}from"./entry.a1f6cece.js";import{u as z}from"./usePrimeDataTable.fff9e0c6.js";import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.e199cda5.js";import"./dropdown.esm.4d738716.js";import"./index.esm.a798e3e3.js";import"./overlayeventbus.esm.30c14994.js";import"./virtualscroller.esm.54767d05.js";import"./inputnumber.esm.86b32e1b.js";import"./button.esm.f2e75a5b.js";import"./index.esm.b0edc791.js";const v=i=>(A("data-v-ea3cd97f"),i=i(),F(),i),E={class:"datatable-header"},Q=v(()=>u("h5",null,"Мои заказы",-1)),j={class:"p-input-icon-left"},J=v(()=>u("i",{class:"pi pi-search"},null,-1)),K=S({__name:"my-order-list",setup(i){const h=U(),b=x(),g=N(),{tableData:_,filters:l,dataTableRef:y}=z();l.value={global:{value:null,matchMode:n.CONTAINS},id:{value:null,matchMode:n.CONTAINS},delivery_type_id:{value:null,matchMode:n.EQUALS},vat_document_required:{value:null,matchMode:n.EQUALS},comment:{value:null,matchMode:n.CONTAINS}};async function V(){const s=await b.from("orders").select().eq("user_id",h.value.id);console.log(s.data),_.value=s.data}R(()=>V());const I={globalFilterFields:["id"],filterDisplay:"row",stripedRows:!0,paginator:!0,rows:10,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Показаны записи с {first} по {last}. Всего: {totalRecords}"};function P(s){g.push("/user/my-order-info?orderId="+s.data.id)}return(s,c)=>{const m=k,p=T,C=L;return $(),M("div",{class:f(["card",s.$style.root])},[a(d(w),O({ref_key:"dataTableRef",ref:y,filters:d(l),"onUpdate:filters":c[1]||(c[1]=e=>q(l)?l.value=e:null),value:d(_),"data-key":"name",class:"p-datatable-sm"},I,{onRowClick:P}),{header:o(()=>[u("div",E,[Q,u("span",j,[J,a(m,{modelValue:d(l).global.value,"onUpdate:modelValue":c[0]||(c[0]=e=>d(l).global.value=e),placeholder:"Поиск"},null,8,["modelValue"])])])]),empty:o(()=>[D(" Записи не найдены ")]),default:o(()=>[a(p,{field:"id",header:"ID","data-type":"number",class:"grid-column-id",sortable:!0},{filter:o(({filterModel:e,filterCallback:r})=>[a(m,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,class:"p-column-filter",onInput:t=>r()},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),a(p,{field:"delivery_type_id",header:"Получение",sortable:!0}),a(p,{field:"vat_document_required",header:"НДС","data-type":"boolean",class:"grid-column-vat",sortable:!0},{body:o(({data:e})=>[u("i",{class:f(["pi",{"pi-check-circle text-green-500":e.vat_document_required,"pi-times-circle text-red-400":!e.vat_document_required}])},null,2)]),filter:o(({filterModel:e,filterCallback:r})=>[a(C,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,onChange:t=>r()},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(p,{field:"comment",header:"Комментрарий",sortable:!0},{filter:o(({filterModel:e,filterCallback:r})=>[a(m,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,class:"p-column-filter",onInput:t=>r()},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1})]),_:1},16,["filters","value"])],2)}}});const G="_root_1aizc_1",H={root:G},W={$style:H},ce=B(K,[["__cssModules",W],["__scopeId","data-v-ea3cd97f"]]);export{ce as default};
