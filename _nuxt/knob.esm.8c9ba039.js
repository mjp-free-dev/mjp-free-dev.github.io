import{H as h,G as m,o as r,c as u,I as o,a as l,t as p,n as f}from"./entry.817a3c76.js";var c=`
@keyframes dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
@layer primevue {
    .p-knob-range {
        fill: none;
        transition: stroke 0.1s ease-in;
    }
    .p-knob-value {
        animation-name: dash-frame;
        animation-fill-mode: forwards;
        fill: none;
    }
    .p-knob-text {
        font-size: 1.3rem;
        text-align: center;
    }
}
`,v={root:function(a){var n=a.props;return["p-knob p-component",{"p-disabled":n.disabled}]},range:"p-knob-range",value:"p-knob-value",label:"p-knob-text"},b=h.extend({name:"knob",css:c,classes:v}),y={name:"BaseKnob",extends:m,props:{modelValue:{type:Number,default:null},size:{type:Number,default:100},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:"var(--primary-color, Black)"},rangeColor:{type:String,default:"var(--surface-border, LightGray)"},textColor:{type:String,default:"var(--text-color-secondary, Black)"},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:String,default:"{value}"},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:b,provide:function(){return{$parentInstance:this}}},M={name:"Knob",extends:y,emits:["update:modelValue","change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*Math.PI/3,maxRadians:-Math.PI/3}},methods:{updateValue:function(a,n){var i=a-this.size/2,s=this.size/2-n,t=Math.atan2(s,i),d=-Math.PI/2-Math.PI/6;this.updateModel(t,d)},updateModel:function(a,n){var i;if(a>this.maxRadians)i=this.mapRange(a,this.minRadians,this.maxRadians,this.min,this.max);else if(a<n)i=this.mapRange(a+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max);else return;var s=Math.round((i-this.min)/this.step)*this.step+this.min;this.$emit("update:modelValue",s),this.$emit("change",s)},updateModelValue:function(a){a>this.max?this.$emit("update:modelValue",this.max):a<this.min?this.$emit("update:modelValue",this.min):this.$emit("update:modelValue",a)},mapRange:function(a,n,i,s,t){return(a-n)*(t-s)/(i-n)+s},onClick:function(a){!this.disabled&&!this.readonly&&this.updateValue(a.offsetX,a.offsetY)},onMouseDown:function(a){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),a.preventDefault())},onMouseUp:function(a){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),a.preventDefault())},onTouchStart:function(a){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),a.preventDefault())},onTouchEnd:function(a){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),a.preventDefault())},onMouseMove:function(a){!this.disabled&&!this.readonly&&(this.updateValue(a.offsetX,a.offsetY),a.preventDefault())},onTouchMove:function(a){if(!this.disabled&&!this.readonly&&a.touches.length==1){var n=this.$el.getBoundingClientRect(),i=a.targetTouches.item(0),s=i.clientX-n.left,t=i.clientY-n.top;this.updateValue(s,t)}},onKeyDown:function(a){if(!this.disabled&&!this.readonly)switch(a.code){case"ArrowRight":case"ArrowUp":{a.preventDefault(),this.updateModelValue(this.modelValue+1);break}case"ArrowLeft":case"ArrowDown":{a.preventDefault(),this.updateModelValue(this.modelValue-1);break}case"Home":{a.preventDefault(),this.$emit("update:modelValue",this.min);break}case"End":{a.preventDefault(),this.$emit("update:modelValue",this.max);break}case"PageUp":{a.preventDefault(),this.updateModelValue(this.modelValue+10);break}case"PageDown":{a.preventDefault(),this.updateModelValue(this.modelValue-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.modelValue,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<Math.PI?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return this.valueTemplate.replace(/{value}/g,this.modelValue)}}},g=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],w=["d","stroke-width","stroke"],k=["d","stroke-width","stroke"],R=["fill"];function V(e,a,n,i,s,t){return r(),u("div",o({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"knob"}),[(r(),u("svg",o({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:a[0]||(a[0]=function(){return t.onClick&&t.onClick.apply(t,arguments)}),onKeydown:a[1]||(a[1]=function(){return t.onKeyDown&&t.onKeyDown.apply(t,arguments)}),onMousedown:a[2]||(a[2]=function(){return t.onMouseDown&&t.onMouseDown.apply(t,arguments)}),onMouseup:a[3]||(a[3]=function(){return t.onMouseUp&&t.onMouseUp.apply(t,arguments)}),onTouchstart:a[4]||(a[4]=function(){return t.onTouchStart&&t.onTouchStart.apply(t,arguments)}),onTouchend:a[5]||(a[5]=function(){return t.onTouchEnd&&t.onTouchEnd.apply(t,arguments)})},e.ptm("svg")),[l("path",o({d:t.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,w),l("path",o({d:t.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,k),e.showValue?(r(),u("text",o({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("label")},e.ptm("label")),p(t.valueToDisplay),17,R)):f("",!0)],16,g))],16)}M.render=V;export{M as default};
