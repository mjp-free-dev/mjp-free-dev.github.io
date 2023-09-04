import{Z as d,a1 as y,G as m,j as v,o as p,c as k,a as s,I as l,z as g,k as O,v as S,y as P}from"./entry.2894c27a.js";var C={root:function(t){var r=t.instance,n=t.props;return["p-checkbox p-component",{"p-checkbox-checked":r.checked,"p-checkbox-disabled":n.disabled,"p-checkbox-focused":r.focused}]},input:function(t){var r=t.instance,n=t.props;return["p-checkbox-box",{"p-highlight":r.checked,"p-disabled":n.disabled,"p-focus":r.focused}]},icon:"p-checkbox-icon"},j={name:"BaseCheckbox",extends:m,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:C},provide:function(){return{$parentInstance:this}}};function I(e){return T(e)||V(e)||A(e)||B()}function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(e,t){if(e){if(typeof e=="string")return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}}function V(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T(e){if(Array.isArray(e))return c(e)}function c(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w={name:"Checkbox",extends:j,emits:["click","update:modelValue","change","input","focus","blur"],data:function(){return{focused:!1}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{checked:this.checked,focused:this.focused,disabled:this.disabled}})},onClick:function(t){var r=this;if(!this.disabled&&!this.readonly){var n;this.binary?n=this.checked?this.falseValue:this.trueValue:this.checked?n=this.modelValue.filter(function(i){return!d.equals(i,r.value)}):n=this.modelValue?[].concat(I(this.modelValue),[this.value]):[this.value],this.$emit("click",t),this.$emit("update:modelValue",n),this.$emit("change",t),this.$emit("input",n),this.$refs.input.focus()}},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.binary?this.modelValue===this.trueValue:d.contains(this.value,this.modelValue)}},components:{CheckIcon:y}};function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(n){$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $(e,t,r){return t=q(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=x(e,"string");return u(t)==="symbol"?t:String(t)}function x(e,t){if(u(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(u(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var E=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label"],D=["data-p-highlight","data-p-disabled","data-p-focused"];function F(e,t,r,n,i,a){var h=v("CheckIcon");return p(),k("div",l({class:e.cx("root"),onClick:t[2]||(t[2]=function(o){return a.onClick(o)})},a.getPTOptions("root"),{"data-pc-name":"checkbox"}),[s("div",l({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[s("input",l({ref:"input",id:e.inputId,type:"checkbox",value:e.value,name:e.name,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(o){return a.onFocus(o)}),onBlur:t[1]||(t[1]=function(o){return a.onBlur(o)})},e.ptm("hiddenInput")),null,16,E)],16),s("div",l({ref:"box",class:[e.cx("input"),e.inputClass],style:e.inputStyle},b(b({},e.inputProps),a.getPTOptions("input")),{"data-p-highlight":a.checked,"data-p-disabled":e.disabled,"data-p-focused":i.focused}),[g(e.$slots,"icon",{checked:a.checked,class:P(e.cx("icon"))},function(){return[a.checked?(p(),O(h,l({key:0,class:e.cx("icon")},a.getPTOptions("icon")),null,16,["class"])):S("",!0)]})],16,D)],16)}w.render=F;export{w as default};
