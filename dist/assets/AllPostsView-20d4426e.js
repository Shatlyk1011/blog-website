import{d as w,g as y,r as m,c as C,o as s,a as c,b as a,u as t,e as i,f,w as V,v as b,_ as I,h,F as x,i as B,j as L,k as P,p as A,l as F,m as N,n as S}from"./index-a4990679.js";import{L as R}from"./Loading-de1bfe1d.js";const j=l=>(A("data-v-897b3315"),l=l(),F(),l),D={class:"all-posts"},E={class:"search"},M={class:"wrap"},T={key:0,class:"no-result"},U=j(()=>a("p",null,"К сожалению такого поста нету. ",-1)),$={key:1,class:"posts"},q=w({__name:"AllPostsView",setup(l){let u=B();const{posts:e}=y(),o=m(""),p=m(),_=C(()=>{if(u.params.tag&&e.value){let n=u.params.tag;return e.value.filter(r=>r.tags.includes(n))}return o.value!==""&&e.value?e.value.filter(n=>n.title.toLowerCase().includes(o.value.toLowerCase())):e.value}),d=()=>{o.value="",p.value.focus(),L.push("/all-posts")};return(n,r)=>{var v;const g=P("font-awesome-icon");return s(),c(x,null,[a("div",D,[a("div",E,[t(u).params.tag?(s(),c("button",{key:0,class:"clear",onClick:d},"Очистить результат")):i("",!0),a("div",M,[f(g,{icon:"fa-solid fa-magnifying-glass"}),V(a("input",{"onUpdate:modelValue":r[0]||(r[0]=k=>o.value=k),type:"search",placeholder:"Поиск...",ref_key:"searchInput",ref:p},null,512),[[b,o.value,void 0,{trim:!0}]])])]),t(e)&&!((v=t(_))!=null&&v.length)?(s(),c("div",T,[U,a("button",{onClick:d},"Попробуйте еще раз")])):i("",!0),t(e)?(s(),c("div",$,[f(I,{posts:t(_)},null,8,["posts"])])):(s(),h(R,{key:2}))]),t(e)?(s(),h(N,{key:0})):i("",!0)],64)}}});const H=S(q,[["__scopeId","data-v-897b3315"]]);export{H as default};
