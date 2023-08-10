import{s as _}from"./button.esm.33817917.js";import{K as M,L as w,M as C,N as S,O as I,R as T,P as k,q as B,Q as D,o as p,S as b,w as f,T as $,a as i,U as l,G as h,V as j,c as v,z as E,W as N,X as A,Y as V,f as L,Z as W,b as a,d as g,_ as K}from"./entry.7cb56bd3.js";import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.aef8f342.js";var R=`
.p-message-wrapper {
    display: flex;
    align-items: center;
}

.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}

.p-message-leave-active .p-message-close {
    display: none;
}
`,q={root:function(n){var s=n.props;return"p-message p-component p-message-"+s.severity},wrapper:"p-message-wrapper",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close p-link",closeIcon:"p-message-close-icon"},x=M(R,{name:"message",manual:!0}),G=x.load,Q={name:"BaseMessage",extends:V,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},css:{classes:q,loadStyle:G},provide:function(){return{$parentInstance:this}}},O={name:"Message",extends:Q,emits:["close"],timeout:null,data:function(){return{visible:!0}},mounted:function(){this.sticky||this.closeAfterDelay()},methods:{close:function(n){this.visible=!1,this.$emit("close",n)},closeAfterDelay:function(){var n=this;setTimeout(function(){n.visible=!1},this.life)}},computed:{iconComponent:function(){return{info:w,success:C,warn:S,error:I}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:T},components:{TimesIcon:k,InfoCircleIcon:w,CheckIcon:C,ExclamationTriangleIcon:S,TimesCircleIcon:I}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function P(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),s.push.apply(s,t)}return s}function c(e){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?P(Object(s),!0).forEach(function(t){U(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function U(e,n,s){return n=X(n),n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function X(e){var n=Y(e,"string");return d(n)==="symbol"?n:String(n)}function Y(e,n){if(d(e)!=="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var t=s.call(e,n||"default");if(d(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Z=["aria-label"];function F(e,n,s,t,o,r){var y=B("TimesIcon"),u=D("ripple");return p(),b(A,{name:"p-message",appear:""},{default:f(function(){return[$(i("div",l({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root"),{"data-pc-name":"message"}),[i("div",l({class:e.cx("wrapper")},e.ptm("wrapper")),[h(e.$slots,"messageicon",{class:"p-message-icon"},function(){return[(p(),b(j(e.icon?"span":r.iconComponent),l({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),i("div",l({class:["p-message-text",e.cx("text")]},e.ptm("text")),[h(e.$slots,"default")],16),e.closable?$((p(),v("button",l({key:0,class:e.cx("closeButton"),"aria-label":r.closeAriaLabel,type:"button",onClick:n[0]||(n[0]=function(m){return r.close(m)})},c(c(c({},e.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[h(e.$slots,"closeicon",{},function(){return[e.closeIcon?(p(),v("i",l({key:0,class:[e.cx("closeIcon"),e.closeIcon]},c(c({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16)):(p(),b(y,l({key:1,class:[e.cx("closeIcon"),e.closeIcon]},c(c({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))]})],16,Z)),[[u]]):E("",!0)],16)],16),[[N,o.visible]])]}),_:3})}O.render=F;const H={class:"card"},J=i("h2",null,"PrimeVue Toast Demo",-1),ee={class:"grid grid-cols-4"},ne=i("h2",null,"Messages",-1),se=L({__name:"PrimeDemoToast",setup(e){const n=W(),s=(t,o,r)=>{n.add({severity:t,summary:o,detail:r,life:3e3})};return(t,o)=>{const r=_,y=K,u=O;return p(),v("div",H,[J,i("div",ee,[i("div",null,[a(r,{label:"Success",class:"p-button-success",onClick:o[0]||(o[0]=m=>s("success","Success Message","Message Content"))})]),i("div",null,[a(r,{label:"Info",class:"p-button-info",onClick:o[1]||(o[1]=m=>s("info","Info Message","Message Content"))})]),i("div",null,[a(r,{label:"Warn",class:"p-button-warning",onClick:o[2]||(o[2]=m=>s("warn","Warn Message","Message Content"))})]),i("div",null,[a(r,{label:"Error",class:"p-button-danger",onClick:o[3]||(o[3]=m=>s("error","Error Message","Message Content"))})]),a(y)]),ne,a(u,{severity:"success"},{default:f(()=>[g(" Success Message Content ")]),_:1}),a(u,{severity:"info"},{default:f(()=>[g(" Info Message Content ")]),_:1}),a(u,{severity:"warn"},{default:f(()=>[g(" Warning Message Content ")]),_:1}),a(u,{severity:"error"},{default:f(()=>[g(" Error Message Content ")]),_:1})])}}}),te={},oe={class:"card"};function re(e,n){const s=se;return p(),v("div",oe,[a(s)])}const pe=z(te,[["render",re]]);export{pe as default};
