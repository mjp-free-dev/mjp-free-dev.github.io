import{f as F,u as Me,Y as Ae,o as d,c as y,a as l,H as R,E as Pe,r as j,i as me,aK as ve,ab as D,ak as ne,q as v,aL as $e,aM as Ce,aN as Ie,ad as Q,aO as Te,ae as je,aP as Be,aQ as Ne,g as Y,A as ye,x as Le,av as Ee,b as B,w as I,t as T,k as N,n as O,B as E,F as J,z as X,af as ge,p as xe,e as De,s as Fe,ao as Ve,V as Re,aG as ze,a9 as Ke,D as We}from"./entry.52dc1539.js";import{_ as be}from"./nuxt-link.46f8cda5.js";import{s as qe}from"./overlaypanel.esm.0dc180b1.js";import{_ as He}from"./_plugin-vue_export-helper.c27b6911.js";import"./overlayeventbus.esm.e180a120.js";const Je=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),Ue=(e,t)=>(n,a)=>(Me(()=>e({...Je(n),...a.attrs},a)),()=>{var i,o;return t?(o=(i=a.slots).default)==null?void 0:o.call(i):null}),Ge={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Qe=F({name:"Link",inheritAttrs:!1,props:{...Ge,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:Ue(e=>({link:[e]}))});var Ye={root:function(t){var n=t.instance,a=t.props;return["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-radiobutton-disabled":a.disabled,"p-radiobutton-focused":n.focused}]},input:function(t){var n=t.instance,a=t.props;return["p-radiobutton-box",{"p-highlight":n.checked,"p-disabled":a.disabled,"p-focus":n.focused}]},icon:"p-radiobutton-icon"},Xe={name:"BaseRadioButton",extends:Pe,props:{value:null,modelValue:null,name:{type:String,default:null},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:Ye},provide:function(){return{$parentInstance:this}}},he={name:"RadioButton",extends:Xe,emits:["click","update:modelValue","change","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(t){this.disabled||(this.$emit("click",t),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",t))},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue!=null&&Ae.equals(this.modelValue,this.value)}}};function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(n),!0).forEach(function(a){Ze(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ze(e,t,n){return t=et(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function et(e){var t=tt(e,"string");return z(t)==="symbol"?t:String(t)}function tt(e,t){if(z(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(z(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nt=["id","name","checked","disabled","value","aria-labelledby","aria-label"],at=["data-p-highlight","data-p-disabled","data-p-focused"];function it(e,t,n,a,i,o){return d(),y("div",R({class:e.cx("root"),onClick:t[2]||(t[2]=function(f){return o.onClick(f)})},e.ptm("root"),{"data-pc-name":"radiobutton"}),[l("div",R({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[l("input",R({ref:"input",id:e.inputId,type:"radio",name:e.name,checked:o.checked,disabled:e.disabled,value:e.value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:t[1]||(t[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},e.ptm("hiddenInput")),null,16,nt)],16),l("div",R({ref:"box",class:[e.cx("input"),e.inputClass],style:e.inputStyle},ie(ie({},e.inputProps),e.ptm("input")),{"data-p-highlight":o.checked,"data-p-disabled":e.disabled,"data-p-focused":i.focused}),[l("div",R({class:e.cx("icon")},e.ptm("icon")),null,16)],16,at)],16)}he.render=it;const ot=F({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const a=j(!1);return me(()=>{a.value=!0}),i=>{var p;if(a.value)return(p=t.default)==null?void 0:p.call(t);const o=t.fallback||t.placeholder;if(o)return o();const f=i.fallback||i.placeholder||"",m=i.fallbackTag||i.placeholderTag||"span";return y(m,n,f)}}}),L=ve({ripple:!0,darkTheme:!1,inputStyle:"outlined",menuMode:"static",theme:"lara-light-indigo",scale:14,activeMenuItem:null}),C=ve({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1});function Z(){const e=(f,m)=>{L.darkTheme=m,L.theme=f},t=f=>{L.scale=f},n=f=>{L.activeMenuItem=f.value||f},a=()=>{L.menuMode==="overlay"&&(C.overlayMenuActive=!C.overlayMenuActive),window.innerWidth>991?C.staticMenuDesktopInactive=!C.staticMenuDesktopInactive:C.staticMenuMobileActive=!C.staticMenuMobileActive},i=D(()=>C.overlayMenuActive||C.staticMenuMobileActive),o=D(()=>L.darkTheme);return{layoutConfig:ne(L),layoutState:ne(C),changeThemeSettings:e,setScale:t,onMenuToggle:a,isSidebarActive:i,isDarkTheme:o,setActiveMenuItem:n}}function lt(e){return $e()?(Ce(e),!0):!1}function ee(e){return typeof e=="function"?e():v(e)}const rt=typeof window<"u",st=()=>{};function ut(e,t){function n(...a){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(i).catch(o)})}return n}const _e=e=>e();function ct(e=_e){const t=j(!0);function n(){t.value=!1}function a(){t.value=!0}const i=(...o)=>{t.value&&e(...o)};return{isActive:Ie(t),pause:n,resume:a,eventFilter:i}}var oe=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,ft=(e,t)=>{var n={};for(var a in e)dt.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&oe)for(var a of oe(e))t.indexOf(a)<0&&pt.call(e,a)&&(n[a]=e[a]);return n};function mt(e,t,n={}){const a=n,{eventFilter:i=_e}=a,o=ft(a,["eventFilter"]);return Q(e,ut(i,t),o)}var vt=Object.defineProperty,yt=Object.defineProperties,gt=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,le=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bt=(e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&le(e,n,t[n]);if(U)for(var n of U(t))ke.call(t,n)&&le(e,n,t[n]);return e},ht=(e,t)=>yt(e,gt(t)),_t=(e,t)=>{var n={};for(var a in e)Se.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&U)for(var a of U(e))t.indexOf(a)<0&&ke.call(e,a)&&(n[a]=e[a]);return n};function St(e,t,n={}){const a=n,{eventFilter:i}=a,o=_t(a,["eventFilter"]),{eventFilter:f,pause:m,resume:p,isActive:g}=ct(i);return{stop:mt(e,t,ht(bt({},o),{eventFilter:f})),pause:m,resume:p,isActive:g}}function kt(e){var t;const n=ee(e);return(t=n==null?void 0:n.$el)!=null?t:n}const G=rt?window:void 0;function re(...e){let t,n,a,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,i]=e,t=G):[t,n,a,i]=e,!t)return st;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],f=()=>{o.forEach(r=>r()),o.length=0},m=(r,s,u,h)=>(r.addEventListener(s,u,h),()=>r.removeEventListener(s,u,h)),p=Q(()=>[kt(t),ee(i)],([r,s])=>{f(),r&&o.push(...n.flatMap(u=>a.map(h=>m(r,u,h,s))))},{immediate:!0,flush:"post"}),g=()=>{p(),f()};return lt(g),g}const q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H="__vueuse_ssr_handlers__",wt=Ot();function Ot(){return H in q||(q[H]=q[H]||{}),q[H]}function Mt(e,t){return wt[e]||t}function At(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Pt=Object.defineProperty,se=Object.getOwnPropertySymbols,$t=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ce=(e,t)=>{for(var n in t||(t={}))$t.call(t,n)&&ue(e,n,t[n]);if(se)for(var n of se(t))Ct.call(t,n)&&ue(e,n,t[n]);return e};const It={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},de="vueuse-storage";function Tt(e,t,n,a={}){var i;const{flush:o="pre",deep:f=!0,listenToStorageChanges:m=!0,writeDefaults:p=!0,mergeDefaults:g=!1,shallow:r,window:s=G,eventFilter:u,onError:h=c=>{console.error(c)}}=a,k=(r?Te:j)(t);if(!n)try{n=Mt("getDefaultStorage",()=>{var c;return(c=G)==null?void 0:c.localStorage})()}catch(c){h(c)}if(!n)return k;const b=ee(t),x=At(b),$=(i=a.serializer)!=null?i:It[x],{pause:K,resume:W}=St(k,()=>M(k.value),{flush:o,deep:f,eventFilter:u});return s&&m&&(re(s,"storage",V),re(s,de,w)),V(),k;function M(c){try{if(c==null)n.removeItem(e);else{const _=$.write(c),S=n.getItem(e);S!==_&&(n.setItem(e,_),s&&s.dispatchEvent(new CustomEvent(de,{detail:{key:e,oldValue:S,newValue:_,storageArea:n}})))}}catch(_){h(_)}}function A(c){const _=c?c.newValue:n.getItem(e);if(_==null)return p&&b!==null&&n.setItem(e,$.write(b)),b;if(!c&&g){const S=$.read(_);return typeof g=="function"?g(S,b):x==="object"&&!Array.isArray(S)?ce(ce({},b),S):S}else return typeof _!="string"?_:$.read(_)}function w(c){V(c.detail)}function V(c){if(!(c&&c.storageArea!==n)){if(c&&c.key==null){k.value=b;return}if(!(c&&c.key!==e)){K();try{k.value=A(c)}catch(_){h(_)}finally{c?je(W):W()}}}}}function jt(e,t,n={}){const{window:a=G}=n;return Tt(e,t,a==null?void 0:a.localStorage,n)}function pe(e){return`https://cdn.jsdelivr.net/npm/primevue@3.31.0/resources/themes/${e}/theme.css`}const fe="arya-blue",we=Be("theme",{state:()=>jt("theme",{theme:fe,link:pe(fe)}),getters:{allThemes:()=>Bt},actions:{setTheme(e){this.theme=e,this.link=pe(e)}}}),Bt=["arya-blue","arya-green","arya-orange","arya-purple","bootstrap4-dark-blue","bootstrap4-dark-purple","bootstrap4-light-blue","bootstrap4-light-purple","fluent-light","lara-dark-blue","lara-dark-indigo","lara-dark-purple","lara-dark-teal","lara-light-blue","lara-light-indigo","lara-light-purple","lara-light-teal","luna-amber","luna-blue","luna-green","luna-pink","md-dark-deeppurple","md-dark-indigo","md-light-deeppurple","md-light-indigo","mdc-dark-deeppurple","mdc-dark-indigo","mdc-light-deeppurple","mdc-light-indigo","mira","nano","nova","nova-accent","nova-alt","nova-vue","rhea","saga-blue","saga-green","saga-orange","saga-purple","soho-dark","soho-light","tailwind-light","vela-blue","vela-green","vela-orange","vela-purple","viva-dark","viva-light"],P=e=>(xe("data-v-f9cc64d7"),e=e(),De(),e),Nt={class:"layout-topbar"},Lt=P(()=>l("i",{class:"pi pi-bars"},null,-1)),Et=[Lt],xt=P(()=>l("i",{class:"pi pi-ellipsis-v"},null,-1)),Dt=[xt],Ft=P(()=>l("i",{class:"pi pi-comment"},null,-1)),Vt={key:0,style:{display:"block","margin-left":"5px"}},Rt={key:1},zt=P(()=>l("i",{class:"pi pi-dollar"},null,-1)),Kt={style:{display:"block"}},Wt=P(()=>l("i",{class:"pi pi-sign-out"},null,-1)),qt=P(()=>l("span",null,"Выход",-1)),Ht=P(()=>l("i",{class:"pi pi-user"},null,-1)),Jt=P(()=>l("span",null,"Мой профиль",-1)),Ut=P(()=>l("i",{class:"pi pi-cog"},null,-1)),Gt=P(()=>l("span",null,"Оформление",-1)),Qt=[Ut,Gt],Yt={class:"style-menu"},Xt={class:"field-radiobutton"},Zt=F({__name:"AppTopbar",emits:["menuToggle"],setup(e,{emit:t}){const{layoutConfig:n,onMenuToggle:a}=Z(),i=j(null),o=j(!1);Ne();const f=Y(ye),m=Y(Le),p=f.getIsAnonRef(),g=m.getStreamingDataRef();me(()=>{u()}),Ee(()=>{h()}),D(()=>`/layout/images/${n.darkTheme.value?"logo-white":"logo-dark"}.svg`);function r(){o.value=!o.value}const s=D(()=>({"layout-topbar-menu-mobile-active":o.value})),u=()=>{i.value||(i.value=M=>{k(M)&&(o.value=!1)},document.addEventListener("click",i.value))},h=()=>{i.value&&(document.removeEventListener("click",i.value),i.value=null)},k=M=>{if(!o.value)return;const A=document.querySelector(".layout-topbar-menu"),w=document.querySelector(".layout-topbar-menu-button");return!(A!=null&&A.isSameNode(M.target)||A!=null&&A.contains(M.target)||w!=null&&w.isSameNode(M.target)||w!=null&&w.contains(M.target))},x=ge().public.APP_TITLE,$=we(),K=j(null);function W(M){K.value.toggle(M)}return(M,A)=>{const w=be,V=he,c=qe,_=ot;return d(),y("div",Nt,[l("button",{class:"p-link layout-menu-button layout-topbar-button",onClick:A[0]||(A[0]=S=>v(a)())},Et),B(w,{to:"/",class:"layout-topbar-logo"},{default:I(()=>[l("span",null,T(v(x)),1)]),_:1}),l("button",{class:"p-link layout-topbar-menu-button layout-topbar-button",onClick:r},Dt),l("div",{class:E(["layout-topbar-menu",s.value])},[v(p)?O("",!0):(d(),N(w,{key:0,to:"/user/my-messages/",class:"p-link layout-topbar-button layout-topbar-button-wide",onClick:r},{default:I(()=>[Ft,v(g).value.unreadMessages?(d(),y("p",Vt," Новые сообщения: "+T(v(g).value.unreadMessages),1)):O("",!0),v(g).value.unreadMessages?O("",!0):(d(),y("span",Rt,"Мои сообщения"))]),_:1})),v(p)?O("",!0):(d(),N(w,{key:1,to:"/user/my-transactions/",class:"p-link layout-topbar-button layout-topbar-button-wide",onClick:r},{default:I(()=>{var S;return[zt,l("p",Kt," Баланс: "+T(((S=v(g).value.plnBalance)==null?void 0:S.toFixed(2))??"...")+" PLN ",1)]}),_:1})),v(p)?O("",!0):(d(),N(w,{key:2,to:"/account/logout/",class:"p-link layout-topbar-button",onClick:r},{default:I(()=>[Wt,qt]),_:1})),v(p)?O("",!0):(d(),N(w,{key:3,to:"/account/my-profile/",class:"p-link layout-topbar-button",onClick:r},{default:I(()=>[Ht,Jt]),_:1})),l("button",{class:"p-link layout-topbar-button",onClick:W},Qt)],2),B(_,null,{default:I(()=>[B(c,{id:"overlay_panel",ref_key:"op",ref:K,"append-to":"body"},{default:I(()=>[l("div",Yt,[(d(!0),y(J,null,X(v($).allThemes,(S,An)=>(d(),y("div",Xt,[B(V,{id:"saga",modelValue:v($).theme,"onUpdate:modelValue":te=>v($).theme=te,value:S,name:"layoutColorMode",onChange:te=>v($).setTheme(S)},null,8,["modelValue","onUpdate:modelValue","value","onChange"]),l("label",null,T(S),1)]))),256))])]),_:1},512)]),_:1})])}}});const en=He(Zt,[["__scopeId","data-v-f9cc64d7"]]),tn={class:"mt-4 layout-footer"},nn={class:"font-medium ml-2"},an={__name:"AppFooter",setup(e){const t=ge();return(n,a)=>(d(),y("div",tn,[l("span",nn,T(v(t).public.APP_NAME)+" - "+T(v(t).public.APP_VERSION),1)]))}},on={key:0,class:"layout-menuitem-root-text"},ln=["href","target"],rn={class:"layout-menuitem-text"},sn={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},un={class:"layout-menuitem-text"},cn={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},dn={class:"layout-submenu"},Oe=F({__name:"AppMenuItem",props:{item:{type:Object,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const t=e,n=Fe(),{layoutConfig:a,layoutState:i,setActiveMenuItem:o,onMenuToggle:f}=Z(),m=j(!1),p=j(null);Ve(()=>{p.value=t.parentItemKey?t.parentItemKey+"-"+t.index:String(t.index);const s=i.activeMenuItem;m.value=s===p.value||s?s.startsWith(p.value+"-"):!1}),Q(()=>a.activeMenuItem.value,s=>{m.value=s===p.value||s.startsWith(p.value+"-")});const g=(s,u)=>{if(u.disabled){s.preventDefault();return}const{overlayMenuActive:h,staticMenuMobileActive:k}=i;(u.to||u.url)&&(k.value||h.value)&&f(),u.command&&u.command({originalEvent:s,item:u});const b=u.items?m.value?t.parentItemKey:p:p.value;o(b)},r=s=>n.path===s.to;return(s,u)=>{const h=be,k=Oe;return d(),y("li",{class:E({"layout-root-menuitem":e.root,"active-menuitem":m.value})},[e.root&&e.item.visible!==!1?(d(),y("div",on,T(e.item.label),1)):O("",!0),(!e.item.to||e.item.items)&&e.item.visible!==!1?(d(),y("a",{key:1,href:e.item.url,class:E(e.item.class),target:e.item.target,tabindex:"0",onClick:u[0]||(u[0]=b=>g(b,e.item,e.index))},[l("i",{class:E([e.item.icon,"layout-menuitem-icon"])},null,2),l("span",rn,T(e.item.label),1),e.item.items?(d(),y("i",sn)):O("",!0)],10,ln)):O("",!0),e.item.to&&!e.item.items&&e.item.visible!==!1?(d(),N(h,{key:2,class:E([e.item.class,{"active-route":r(e.item)}]),tabindex:"0",to:e.item.to,onClick:u[1]||(u[1]=b=>g(b,e.item,e.index))},{default:I(()=>[l("i",{class:E([e.item.icon,"layout-menuitem-icon"])},null,2),l("span",un,T(e.item.label),1),e.item.items?(d(),y("i",cn)):O("",!0)]),_:1},8,["class","to"])):O("",!0),e.item.items&&e.item.visible!==!1?(d(),N(Ke,{key:3,name:"layout-submenu"},{default:I(()=>[Re(l("ul",dn,[(d(!0),y(J,null,X(e.item.items,(b,x)=>(d(),N(k,{key:b,index:x,item:b,"parent-item-key":p.value,root:!1},null,8,["index","item","parent-item-key"]))),128))],512),[[ze,e.root?!0:m.value]])]),_:1})):O("",!0)],2)}}});function pn(){const t=Y(ye).getAccessLevelRef();return D(()=>{const n=t.value;return[{label:"Главная",items:[{label:"Главная",to:"/",icon:"pi pi-fw pi-home"}]},{label:"Aккаунт",items:n===0?[fn]:[mn,vn]},...n>=1?[yn]:[],...n>=2?[gn]:[],...n>=3?[bn]:[]]})}const fn={label:"Вход/Регистрация",to:"/account/login",icon:"pi pi-fw pi-sign-in"},mn={label:"Выход",to:"/account/logout",icon:"pi pi-fw pi-sign-out"},vn={label:"Мой профиль",to:"/account/my-profile",icon:"pi pi-fw pi-user"},yn={label:"Заказы",items:[{label:"Новый заказ",to:"/user/new-order",icon:"pi pi-fw pi-plus"},{label:"Мои заказы",to:"/user/my-order-list",icon:"pi pi-fw pi-list"},{label:"Мои сообщения",to:"/user/my-messages",icon:"pi pi-fw pi-comment"},{label:"Мои транзакции",to:"/user/my-transactions",icon:"pi pi-fw pi-dollar"}]},gn={label:"Модерирование",items:[{label:"Все заказы",to:"/moder/all-order-list",icon:"pi pi-fw pi-list"},{label:"Все сообщения",to:"/moder/all-messages",icon:"pi pi-fw pi-comment"},{label:"Все транзакции",to:"/moder/all-transactions",icon:"pi pi-fw pi-dollar"}]},bn={label:"Администрирование",items:[{label:"Все пользователи",to:"/admin/all-user-list",icon:"pi pi-fw pi-users"},{label:"Типы статусов заказов",to:"/admin/order-status-types",icon:"pi pi-fw pi-cog"},{label:"Способы получения",to:"/admin/shipping-methods",icon:"pi pi-fw pi-cog"}]},hn={class:"layout-menu"},_n={key:1,class:"menu-separator"},Sn=F({__name:"AppMenu",setup(e){const t=pn();return(n,a)=>(d(),y("ul",hn,[(d(!0),y(J,null,X(v(t),(i,o)=>(d(),y(J,{key:i},[i.separator?O("",!0):(d(),N(Oe,{key:0,item:i,index:o},null,8,["item","index"])),i.separator?(d(),y("li",_n)):O("",!0)],64))),128))]))}}),kn={class:"layout-sidebar"},wn={class:"layout-main-container"},On={class:"layout-main"},Mn=l("div",{class:"layout-mask"},null,-1),jn=F({__name:"default",setup(e){const{layoutConfig:t,layoutState:n,isSidebarActive:a}=Z(),i=j(null),o=we();Q(a,r=>{r?m():p()});const f=D(()=>({"layout-theme-light":t.darkTheme.value==="light","layout-theme-dark":t.darkTheme.value==="dark","layout-overlay":t.menuMode.value==="overlay","layout-static":t.menuMode.value==="static","layout-static-inactive":n.staticMenuDesktopInactive.value&&t.menuMode.value==="static","layout-overlay-active":n.overlayMenuActive.value,"layout-mobile-active":n.staticMenuMobileActive.value,"p-input-filled":t.inputStyle.value==="filled","p-ripple-disabled":!t.ripple.value})),m=()=>{i.value||(i.value=r=>{g(r)&&(n.overlayMenuActive.value=!1,n.staticMenuMobileActive.value=!1,n.menuHoverActive.value=!1)},document.addEventListener("click",i.value))},p=()=>{i.value&&(document.removeEventListener("click",i),i.value=null)},g=r=>{const s=document.querySelector(".layout-sidebar"),u=document.querySelector(".layout-menu-button");return!(s.isSameNode(r.target)||s.contains(r.target)||u.isSameNode(r.target)||u.contains(r.target))};return(r,s)=>{const u=Qe,h=en,k=an;return d(),y("div",null,[B(u,{rel:"stylesheet",href:v(o).link},null,8,["href"]),l("div",{class:E(["layout-wrapper",f.value])},[B(h),l("div",kn,[B(Sn)]),l("div",wn,[l("div",On,[We(r.$slots,"default")]),B(k)]),Mn],2)])}}});export{jn as default};
