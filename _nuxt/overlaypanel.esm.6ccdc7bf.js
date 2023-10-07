import{G as O,a4 as f,Z as o,a5 as S,U as E,a7 as P,P as I,a6 as T,a3 as z,j as A,Q as d,o as a,k as p,w as v,b as B,a9 as x,V as y,c as h,H as c,a as D,D as m,I as H,n as b,E as K}from"./entry.819b999e.js";import{O as u}from"./overlayeventbus.esm.6f5e9b5e.js";var R=`
.p-overlaypanel {
    margin-top: 10px;
}

.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Animation */
.p-overlaypanel-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-overlaypanel-leave-to {
    opacity: 0;
}

.p-overlaypanel-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-overlaypanel-leave-active {
    transition: opacity 0.1s linear;
}

.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
}

.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
}

.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
}

.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
}
`,j={root:function(e){var n=e.instance;return["p-overlaypanel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},content:"p-overlaypanel-content",closeButton:"p-overlaypanel-close p-link",closeIcon:"p-overlaypanel-close-icon"},U=O(R,{name:"overlaypanel",manual:!0}),Z=U.load,N={name:"BaseOverlayPanel",extends:K,props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:String,default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0}},css:{classes:j,loadStyle:Z},provide:function(){return{$parentInstance:this}}},V={name:"OverlayPanel",extends:N,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&f.clear(this.container),this.overlayEventListener&&(u.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,n){this.visible?this.hide():this.show(e,n)},show:function(e,n){this.visible=!0,this.eventTarget=e.currentTarget,this.target=n||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var n=this;this.container.setAttribute(this.attributeSelector,""),o.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&f.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(r){n.container.contains(r.target)&&(n.selfClick=!0)},this.focus(),u.on("overlay-click",this.overlayEventListener),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),u.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&f.clear(e)},alignOverlay:function(){o.absolutePosition(this.container,this.target);var e=o.getOffset(this.container),n=o.getOffset(this.target),r=0;e.left<n.left&&(r=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft","".concat(r,"px")),e.top<n.top&&(this.container.setAttribute("data-p-overlaypanel-flipped","true"),!this.isUnstyled&&o.addClass(this.container,"p-overlaypanel-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&(this.hide(),o.focus(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&o.isClient()&&(this.outsideClickListener=function(n){e.visible&&!e.selfClick&&!e.isTargetClicked(n)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new S(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!o.isTouchDevice()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);var e="";for(var n in this.breakpoints)e+=`
                        @media screen and (max-width: `.concat(n,`) {
                            .p-overlaypanel[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[n],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=e}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){u.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return E()},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:P,ripple:I},components:{Portal:T,TimesIcon:z}};function l(t){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(t)}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g(Object(n),!0).forEach(function(r){q(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function q(t,e,n){return e=F(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t){var e=G(t,"string");return l(e)==="symbol"?e:String(e)}function G(t,e){if(l(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(l(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var M=["aria-modal"],Q=["aria-label"];function Y(t,e,n,r,s,i){var C=A("Portal"),w=d("ripple"),k=d("focustrap");return a(),p(C,{appendTo:t.appendTo},{default:v(function(){return[B(x,{name:"p-overlaypanel",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:v(function(){return[s.visible?y((a(),h("div",c({key:0,ref:i.containerRef,role:"dialog","aria-modal":s.visible,onClick:e[5]||(e[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:t.cx("root")},L(L({},t.$attrs),t.ptm("root"))),[D("div",c({class:t.cx("content"),onClick:e[0]||(e[0]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onMousedown:e[1]||(e[1]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onContentKeydown&&i.onContentKeydown.apply(i,arguments)})},t.ptm("content")),[m(t.$slots,"default")],16),t.showCloseIcon?y((a(),h("button",c({key:0,class:t.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",autofocus:"",onClick:e[3]||(e[3]=function(){return i.hide&&i.hide.apply(i,arguments)}),onKeydown:e[4]||(e[4]=function(){return i.onButtonKeydown&&i.onButtonKeydown.apply(i,arguments)})},t.ptm("closeButton")),[m(t.$slots,"closeicon",{},function(){return[(a(),p(H(t.closeIcon?"span":"TimesIcon"),c({class:[t.cx("closeIcon"),t.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))]})],16,Q)),[[w]]):b("",!0)],16,M)),[[k]]):b("",!0)]}),_:3},8,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}V.render=Y;export{V as s};
