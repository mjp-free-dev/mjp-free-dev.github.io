import c from"./ContentRenderer.814aa705.js";import p from"./ContentDoc.b9ec5239.js";import{f as _,y as u,o as m,c as f,b as s,w as a,a as t,t as e,h as r}from"./entry.7cb56bd3.js";import"./ContentRendererMarkdown.563bcec9.js";import"./index.a6ef77ff.js";import"./preview.4b7bca09.js";import"./ContentQuery.ed46cd4b.js";import"./asyncData.f047d2de.js";import"./query.eff6d8f2.js";import"./utils.ca42461c.js";const h={class:"markdown"},d={class:"font-bold"},g=t("hr",null,null,-1),x={class:"text-2xl"},E=_({__name:"[...slug]",setup(C){const n=u().params.slug.toString();return(v,w)=>{const l=c,i=p;return m(),f("div",h,[s(i,{path:r(n)},{default:a(({doc:o})=>[t("h1",null,e(o.title),1),t("p",null,e(o.description),1),t("p",d," Author: "+e(o.author),1),g,s(l,{value:o},null,8,["value"])]),"not-found":a(()=>[t("h1",x," Content Page ("+e(r(n))+") not found ",1)]),_:1},8,["path"])])}}});export{E as default};
