import{d as D,x as V,c as x,r as n,t as S,o as a,a as r,f as m,y as _,u as t,G as B,e as v,z as T,T as $,b as N,h as f,A as z,B as A,K as I,n as K}from"./index-b6d89713.js";import{g as q,_ as E,a as G,P as M}from"./getDocument-41effa4e.js";import"./Input-56f90532.js";import"./useStorage-9f0f3d16.js";import"./Loading-099f4485.js";const R={class:"update-post"},j={key:0,class:"error"},F={key:1,class:"submit"},H=["disabled"],J=D({__name:"UpdatePostView",props:{id:{required:!0,type:String}},setup(g){const U=g,{getDoc:i,document:d,error:p}=q(),w=V(),P=x(()=>w.user),l=n();let e=n(!0),c=n(!1),u=n("");S(async()=>await i("posts",U.id));const y=async()=>await i("updateDraft",P.value.uid),h=()=>l.value.handleSubmit(),C=s=>c.value=s,b=s=>{console.log("payload",s),u=s};return(s,o)=>(a(),r("div",R,[m(E,{class:"nav","onUpdate:change":o[0]||(o[0]=k=>_(e)?e.value=!0:e=!0),"onUpdate:preview":o[1]||(o[1]=k=>_(e)?e.value=!1:e=!1)}),t(p)?(a(),r("div",j,B(t(p)),1)):v("",!0),m($,{name:"switch",mode:"out-in",appear:""},{default:T(()=>[(a(),f(I,null,[(a(),f(z(t(e)?G:M),{class:A(["component",{preview:!t(e)}]),"onUpdate:updateDraft":y,"onUpdate:isPending":C,"onUpdate:imagePreviewUrl":b,postToUpdate:t(d),post:t(d),imagePreviewUrl:t(u),ref_key:"childComponent",ref:l},null,40,["class","postToUpdate","post","imagePreviewUrl"]))],1024))]),_:1}),t(e)?(a(),r("div",F,[N("button",{class:"btn",onClick:h,disabled:t(c)},"Сохранить",8,H)])):v("",!0)]))}});const Y=K(J,[["__scopeId","data-v-383024d3"]]);export{Y as default};