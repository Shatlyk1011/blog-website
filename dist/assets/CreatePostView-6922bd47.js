import{d as f,o as t,a as o,q as S,p as U,l as k,s as B,b as g,n as w,t as D,r as i,x as $,c as I,f as d,y as m,z as N,T,u as a,e as q,h,A as H,B as z,K as A}from"./index-a4990679.js";import{g as K,_ as E,a as M,P as R}from"./getDocument-6b082c2b.js";import"./Input-0466daf4.js";import"./useStorage-2a32704d.js";import"./Loading-de1bfe1d.js";const j=s=>(U("data-v-5c06aaa8"),s=s(),k(),s),F={class:"helper-board"},G={key:0,class:"advice"},J=B("<h2 data-v-5c06aaa8>Доска помощи при использовании редоктора</h2><ul data-v-5c06aaa8><li data-v-5c06aaa8><strong data-v-5c06aaa8>**text**</strong> или <strong data-v-5c06aaa8>__text__</strong></li><li data-v-5c06aaa8><em data-v-5c06aaa8>*text*</em> или <em data-v-5c06aaa8>_text_</em></li><li data-v-5c06aaa8><s data-v-5c06aaa8>~~text~~</s> ~~text~~</li><li data-v-5c06aaa8><code data-v-5c06aaa8>`text`</code> (код)</li><li data-v-5c06aaa8><code data-v-5c06aaa8>```ts/css/html</code> (блок кода)</li><li data-v-5c06aaa8><blockquote data-v-5c06aaa8>&gt; </blockquote></li></ul>",2),L=[J],O={key:1},Q=j(()=>g("code",{style:{"line-height":"1.8"}},"color highlight",-1)),W=f({__name:"HelperBoard",props:{changeView:{type:Boolean,required:!0}},setup(s){return(e,r)=>(t(),o("div",F,[s.changeView?(t(),o("div",G,L)):(t(),o("div",O,[Q,S(" будет применено после опубликации")]))]))}});const X=w(W,[["__scopeId","data-v-5c06aaa8"]]),Y={class:"create-post"},Z={key:0,class:"submit"},ee=["disabled"],ae=f({__name:"CreatePostView",setup(s){D(async()=>await u("createDraft",p.value.uid));let e=i(!0),r=i(!1),l=i("");const _=i(),b=$(),p=I(()=>b.user),{getDoc:u,document:v}=K(),x=async()=>await u("createDraft",p.value.uid),y=()=>_.value.handleSubmit(),P=c=>r.value=c,V=c=>l=c;return(c,n)=>(t(),o("div",Y,[d(E,{class:"nav","onUpdate:change":n[0]||(n[0]=C=>m(e)?e.value=!0:e=!0),"onUpdate:preview":n[1]||(n[1]=C=>m(e)?e.value=!1:e=!1)}),d(T,{name:"switch",mode:"out-in",appear:""},{default:N(()=>[(t(),h(A,null,[(t(),h(H(a(e)?M:R),{class:z(["component",{preview:!a(e)}]),"onUpdate:draft":x,"onUpdate:isPending":P,"onUpdate:imagePreviewUrl":V,setDraft:!0,postToSetDraft:a(v),post:a(v),imagePreviewUrl:a(l),ref_key:"childComponent",ref:_},null,40,["class","postToSetDraft","post","imagePreviewUrl"]))],1024))]),_:1}),d(X,{class:"helper-board",changeView:a(e)},null,8,["changeView"]),a(e)?(t(),o("div",Z,[g("button",{class:"btn",onClick:y,disabled:a(r)},"Опубликовать",8,ee)])):q("",!0)]))}});const ie=w(ae,[["__scopeId","data-v-702917bb"]]);export{ie as default};
