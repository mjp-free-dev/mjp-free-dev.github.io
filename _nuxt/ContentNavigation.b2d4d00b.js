import{u as f}from"./asyncData.f047d2de.js";import{ay as v,a0 as p,aB as g,f as d,aC as l,B as h,aD as _,az as y,aa as r}from"./entry.7cb56bd3.js";import{_ as C}from"./nuxt-link.aa5057cd.js";import{q as w,e as P,j as $}from"./query.eff6d8f2.js";import{w as c,s as N,u as j}from"./utils.ca42461c.js";import{u as D}from"./preview.4b7bca09.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await g(()=>import("./client-db.1525eeab.js"),["./client-db.1525eeab.js","./entry.7cb56bd3.js","./entry.6624a8e9.css","./query.eff6d8f2.js","./utils.ca42461c.js","./preview.4b7bca09.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},R=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{R as default};
