import{d as o,n as u,o as l,a as r}from"./index-b6d89713.js";const s=o({props:{modelValue:{type:String},type:{type:String,required:!1,default:"text"}},emits:["update:modelValue"],setup(e,t){return{handleInput:n=>{t.emit("update:modelValue",n.target.value)}}}}),d=["type","value"];function i(e,t,p,n,m,f){return l(),r("input",{type:e.type,value:e.modelValue,onInput:t[0]||(t[0]=(...a)=>e.handleInput&&e.handleInput(...a))},null,40,d)}const c=u(s,[["render",i]]);export{c as I};