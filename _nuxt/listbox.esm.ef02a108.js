import{H,U as L,Z as r,_ as y,a0 as G,Q as B,G as U,j as N,V as j,o as f,c as h,a as O,I as l,z as m,W as D,aJ as q,k as z,J as W,y as J,t as b,v as K,b as Q,ab as Z,w as T,F as E,C as X,d as F}from"./entry.2894c27a.js";import{s as Y}from"./index.esm.fa7ca877.js";import{s as $}from"./virtualscroller.esm.01356a1a.js";import"./index.esm.b8ed1986.js";var _=`
.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.p-listbox-item-group {
    cursor: auto;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-listbox-filter {
    width: 100%;
}
`,ee={root:function(e){var i=e.instance,n=e.props;return["p-listbox p-component",{"p-focus":i.focused,"p-disabled":n.disabled}]},header:"p-listbox-header",filterContainer:"p-listbox-filter-container",filterInput:"p-listbox-filter p-inputtext p-component",filterIcon:"p-listbox-filter-icon",wrapper:"p-listbox-list-wrapper",list:"p-listbox-list",itemGroup:"p-listbox-item-group",item:function(e){var i=e.instance,n=e.option,o=e.index,s=e.getItemOptions;return["p-listbox-item",{"p-highlight":i.isSelected(n),"p-focus":i.focusedOptionIndex===i.getOptionIndex(o,s),"p-disabled":i.isOptionDisabled(n)}]},emptyMessage:"p-listbox-empty-message"},te=H(_,{name:"listbox",manual:!0}),ie=te.load,ne={name:"BaseListbox",extends:U,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,listStyle:null,disabled:Boolean,dataKey:null,multiple:Boolean,metaKeySelection:Boolean,filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},filterInputProps:null,virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},filterIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},css:{classes:ee,loadStyle:ie},provide:function(){return{$parentInstance:this}}};function P(t){return le(t)||re(t)||oe(t)||se()}function se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,e){if(t){if(typeof t=="string")return V(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return V(t,e)}}function re(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function le(t){if(Array.isArray(t))return V(t)}function V(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var ae={name:"Listbox",extends:ne,emits:["update:modelValue","change","focus","blur","filter"],list:null,virtualScroller:null,optionTouched:!1,startRangeIndex:-1,searchTimeout:null,searchValue:"",focusOnHover:!1,data:function(){return{id:this.$attrs.id,filterValue:null,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||L()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||L(),this.autoUpdateModel()},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?r.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?r.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e,i){return(this.dataKey?r.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTOptions:function(e,i,n,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(n,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?r.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return r.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return r.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(n){return i.isOptionGroup(n)}).length:e)+1},onFirstHiddenFocus:function(){y.focus(this.list);var e=y.getFirstFocusableElement(this.$el,':not([data-p-hidden-focusable="true"])');this.$refs.lastHiddenFocusableElement.tabIndex=r.isEmpty(e)?-1:void 0,this.$refs.firstHiddenFocusableElement.tabIndex=-1},onLastHiddenFocus:function(e){var i=e.relatedTarget;if(i===this.list){var n=y.getFirstFocusableElement(this.$el,':not([data-p-hidden-focusable="true"])');y.focus(n),this.$refs.firstHiddenFocusableElement.tabIndex=void 0}else y.focus(this.$refs.firstHiddenFocusableElement);this.$refs.lastHiddenFocusableElement.tabIndex=-1},onFocusout:function(e){!this.$el.contains(e.relatedTarget)&&this.$refs.lastHiddenFocusableElement&&this.$refs.firstHiddenFocusableElement&&(this.$refs.lastHiddenFocusableElement.tabIndex=this.$refs.firstHiddenFocusableElement.tabIndex=void 0)},onListFocus:function(e){this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=this.startRangeIndex=-1,this.searchValue="",this.$emit("blur",e)},onListKeyDown:function(e){var i=this,n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onSpaceKey(e);break;case"Tab":break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(this.multiple&&e.code==="KeyA"&&n){var o=this.visibleOptions.filter(function(s){return i.isValidOption(s)}).map(function(s){return i.getOptionValue(s)});this.updateModel(e,o),e.preventDefault();break}!n&&r.isPrintableCharacter(e.key)&&(this.searchOptions(e,e.key),e.preventDefault());break}},onOptionSelect:function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;this.disabled||this.isOptionDisabled(i)||(this.multiple?this.onOptionSelectMultiple(e,i):this.onOptionSelectSingle(e,i),this.optionTouched=!1,n!==-1&&(this.focusedOptionIndex=n))},onOptionMouseDown:function(e,i){this.changeFocusedOptionIndex(e,i)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onOptionTouchEnd:function(){this.disabled||(this.optionTouched=!0)},onOptionSelectSingle:function(e,i){var n=this.isSelected(i),o=!1,s=null,u=this.optionTouched?!1:this.metaKeySelection;if(u){var g=e.metaKey||e.ctrlKey;n?g&&(s=null,o=!0):(s=this.getOptionValue(i),o=!0)}else s=n?null:this.getOptionValue(i),o=!0;o&&this.updateModel(e,s)},onOptionSelectMultiple:function(e,i){var n=this.isSelected(i),o=null,s=this.optionTouched?!1:this.metaKeySelection;if(s){var u=e.metaKey||e.ctrlKey;n?o=u?this.removeOption(i):[this.getOptionValue(i)]:(o=u?this.modelValue||[]:[],o=[].concat(P(o),[this.getOptionValue(i)]))}else o=n?this.removeOption(i):[].concat(P(this.modelValue||[]),[this.getOptionValue(i)]);this.updateModel(e,o)},onOptionSelectRange:function(e){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(n===-1&&(n=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(n)),n!==-1&&o!==-1){var s=Math.min(n,o),u=Math.max(n,o),g=this.visibleOptions.slice(s,u+1).filter(function(d){return i.isValidOption(d)}).map(function(d){return i.getOptionValue(d)});this.updateModel(e,g)}},onFilterChange:function(e){this.$emit("filter",{originalEvent:e,value:e.target.value}),this.focusedOptionIndex=this.startRangeIndex=-1},onFilterBlur:function(){this.focusedOptionIndex=this.startRangeIndex=-1},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break}},onArrowDownKey:function(e){var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,i),this.changeFocusedOptionIndex(e,i),e.preventDefault()},onArrowUpKey:function(e){var i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i),e.preventDefault()},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i)e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1;else{var n=e.metaKey||e.ctrlKey,o=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&n&&this.onOptionSelectRange(e,o,this.startRangeIndex),this.changeFocusedOptionIndex(e,o)}e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(o,o),this.focusedOptionIndex=-1}else{var s=e.metaKey||e.ctrlKey,u=this.findLastOptionIndex();this.multiple&&e.shiftKey&&s&&this.onOptionSelectRange(e,this.startRangeIndex,u),this.changeFocusedOptionIndex(e,u)}e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},isOptionMatched:function(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption:function(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){var i=this,n=this.getOptionValue(e);return this.multiple?(this.modelValue||[]).some(function(o){return r.equals(o,n,i.equalityKey)}):r.equals(this.modelValue,n,this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return r.findLastIndex(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return i.isValidOption(o)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(e){var i=this,n=e>0?r.findLastIndex(this.visibleOptions.slice(0,e),function(o){return i.isValidOption(o)}):-1;return n>-1?n:e},findFirstSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?r.findLastIndex(this.visibleOptions,function(i){return e.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(e){var i=this,n=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return i.isValidSelectedOption(o)}):-1;return n>-1?n+e+1:-1},findPrevSelectedOptionIndex:function(e){var i=this,n=this.hasSelectedOption&&e>0?r.findLastIndex(this.visibleOptions.slice(0,e),function(o){return i.isValidSelectedOption(o)}):-1;return n>-1?n:-1},findNearestSelectedOptionIndex:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=-1;return this.hasSelectedOption&&(i?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e},findFirstFocusedOptionIndex:function(){var e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,i){var n=this;this.searchValue=(this.searchValue||"")+i;var o=-1;this.focusedOptionIndex!==-1?(o=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(s){return n.isOptionMatched(s)}),o=o===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(s){return n.isOptionMatched(s)}):o+this.focusedOptionIndex):o=this.visibleOptions.findIndex(function(s){return n.isOptionMatched(s)}),o===-1&&this.focusedOptionIndex===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&this.changeFocusedOptionIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500)},removeOption:function(e){var i=this;return this.modelValue.filter(function(n){return!r.equals(n,i.getOptionValue(e),i.equalityKey)})},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&!this.multiple&&this.onOptionSelect(e,this.visibleOptions[i]))},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedOptionId,n=y.findSingle(this.list,'li[id="'.concat(i,'"]'));n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&!this.multiple&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex]))},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(n,o,s){n.push({optionGroup:o,group:!0,index:s});var u=i.getOptionGroupChildren(o);return u&&u.forEach(function(g){return n.push(g)}),n},[])},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?G.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption:function(){return r.isNotEmpty(this.modelValue)},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return r.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:B},components:{VirtualScroller:$,SearchIcon:Y}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,n)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?A(Object(i),!0).forEach(function(n){ue(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function ue(t,e,i){return e=de(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function de(t){var e=pe(t,"string");return v(e)==="symbol"?e:String(e)}function pe(t,e){if(v(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(v(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ce=["id"],fe=["tabindex"],he=["placeholder","aria-owns","aria-activedescendant","tabindex"],Oe=["id","aria-multiselectable","aria-label","aria-labelledby","aria-activedescendant","aria-disabled"],me=["id"],ge=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousedown","onMousemove","data-p-highlight","data-p-focused","data-p-disabled"],be=["tabindex"];function ye(t,e,i,n,o,s){var u=N("VirtualScroller"),g=j("ripple");return f(),h("div",l({id:o.id,class:t.cx("root"),onFocusout:e[10]||(e[10]=function(){return s.onFocusout&&s.onFocusout.apply(s,arguments)})},t.ptm("root"),{"data-pc-name":"listbox"}),[O("span",l({ref:"firstHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[0]||(e[0]=function(){return s.onFirstHiddenFocus&&s.onFirstHiddenFocus.apply(s,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,fe),m(t.$slots,"header",{value:t.modelValue,options:s.visibleOptions}),t.filter?(f(),h("div",l({key:0,class:t.cx("header")},t.ptm("header")),[O("div",l({class:t.cx("filterContainer")},t.ptm("filterContainer")),[D(O("input",l({ref:"filterInput","onUpdate:modelValue":e[1]||(e[1]=function(d){return o.filterValue=d}),type:"text",class:t.cx("filterInput"),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":s.focusedOptionId,tabindex:!t.disabled&&!o.focused?t.tabindex:-1,onInput:e[2]||(e[2]=function(){return s.onFilterChange&&s.onFilterChange.apply(s,arguments)}),onBlur:e[3]||(e[3]=function(){return s.onFilterBlur&&s.onFilterBlur.apply(s,arguments)}),onKeydown:e[4]||(e[4]=function(){return s.onFilterKeyDown&&s.onFilterKeyDown.apply(s,arguments)})},R(R({},t.filterInputProps),t.ptm("filterInput"))),null,16,he),[[q,o.filterValue]]),m(t.$slots,"filtericon",{class:J(t.cx("filterIcon"))},function(){return[(f(),z(W(t.filterIcon?"span":"SearchIcon"),l({class:[t.cx("filterIcon"),t.filterIcon]},t.ptm("filterIcon")),null,16,["class"]))]})],16),O("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),b(s.filterResultMessageText),17)],16)):K("",!0),O("div",l({ref:"listWrapper",class:t.cx("wrapper"),style:t.listStyle},t.ptm("wrapper")),[Q(u,l({ref:s.virtualScrollerRef},t.virtualScrollerOptions,{style:t.listStyle,items:s.visibleOptions,tabindex:-1,disabled:s.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Z({content:T(function(d){var M=d.styleClass,k=d.contentRef,S=d.items,c=d.getItemOptions,C=d.contentStyle,x=d.itemSize;return[O("ul",l({ref:function(p){return s.listRef(p,k)},id:o.id+"_list",class:[t.cx("list"),M],style:C,tabindex:-1,role:"listbox","aria-multiselectable":t.multiple,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-activedescendant":o.focused?s.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[6]||(e[6]=function(){return s.onListFocus&&s.onListFocus.apply(s,arguments)}),onBlur:e[7]||(e[7]=function(){return s.onListBlur&&s.onListBlur.apply(s,arguments)}),onKeydown:e[8]||(e[8]=function(){return s.onListKeyDown&&s.onListKeyDown.apply(s,arguments)})},t.ptm("list")),[(f(!0),h(E,null,X(S,function(a,p){return f(),h(E,{key:s.getOptionRenderKey(a,s.getOptionIndex(p,c))},[s.isOptionGroup(a)?(f(),h("li",l({key:0,id:o.id+"_"+s.getOptionIndex(p,c),style:{height:x?x+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[m(t.$slots,"optiongroup",{option:a.optionGroup,index:s.getOptionIndex(p,c)},function(){return[F(b(s.getOptionGroupLabel(a.optionGroup)),1)]})],16,me)):D((f(),h("li",l({key:1,id:o.id+"_"+s.getOptionIndex(p,c),style:{height:x?x+"px":void 0},class:t.cx("item",{option:a,index:p,getItemOptions:c}),role:"option","aria-label":s.getOptionLabel(a),"aria-selected":s.isSelected(a),"aria-disabled":s.isOptionDisabled(a),"aria-setsize":s.ariaSetSize,"aria-posinset":s.getAriaPosInset(s.getOptionIndex(p,c)),onClick:function(I){return s.onOptionSelect(I,a,s.getOptionIndex(p,c))},onMousedown:function(I){return s.onOptionMouseDown(I,s.getOptionIndex(p,c))},onMousemove:function(I){return s.onOptionMouseMove(I,s.getOptionIndex(p,c))},onTouchend:e[5]||(e[5]=function(w){return s.onOptionTouchEnd()})},s.getPTOptions(a,c,p,"item"),{"data-p-highlight":s.isSelected(a),"data-p-focused":o.focusedOptionIndex===s.getOptionIndex(p,c),"data-p-disabled":s.isOptionDisabled(a)}),[m(t.$slots,"option",{option:a,index:s.getOptionIndex(p,c)},function(){return[F(b(s.getOptionLabel(a)),1)]})],16,ge)),[[g]])],64)}),128)),o.filterValue&&(!S||S&&S.length===0)?(f(),h("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[m(t.$slots,"emptyfilter",{},function(){return[F(b(s.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(f(),h("li",l({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[m(t.$slots,"empty",{},function(){return[F(b(s.emptyMessageText),1)]})],16)):K("",!0)],16,Oe)]}),_:2},[t.$slots.loader?{name:"loader",fn:T(function(d){var M=d.options;return[m(t.$slots,"loader",{options:M})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),m(t.$slots,"footer",{value:t.modelValue,options:s.visibleOptions}),!t.options||t.options&&t.options.length===0?(f(),h("span",l({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),b(s.emptyMessageText),17)):K("",!0),O("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),b(s.selectedMessageText),17),O("span",l({ref:"lastHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[9]||(e[9]=function(){return s.onLastHiddenFocus&&s.onLastHiddenFocus.apply(s,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,be)],16,ce)}ae.render=ye;export{ae as default};
