import{r as u,$ as g,a2 as m,ag as p,ah as R,ai as v,x as y,c as D,aj as f,ak as w,al as h,am as S,an as $,ao as U}from"./index-b6d89713.js";let I=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((a,e)=>(e&=63,e<36?a+=e.toString(36):e<62?a+=(e-26).toString(36).toUpperCase():e>62?a+="-":a+="_",a),"");const c=u(null),A=async(s,a)=>{let e=a.title.replaceAll(" ","-")+"-"+I(3);const t=g(m,s,e);try{c.value=null,await p(t,a)}catch(o){c.value=o.message}},O=async(s,a,e)=>{const t=g(m,s,a);try{await p(t,e)}catch(o){c.value=o.message}},j=async(s,a)=>{try{const e=g(m,s,a);await R(e),console.log("doc deleted")}catch(e){console.log("error useDocument"),c.value=e.message}},x=async(s,a,e)=>{const t=g(m,s,a);try{await v(t,{...e}),console.log("post updated")}catch(o){console.log("ERROR IN UDPATE DOC"),c.value=o.message}},C=()=>({addDocument:A,setDocument:O,deleteDocument:j,error:c,updateDocument:x}),N=C,E=()=>{const s=y(),a=D(()=>s.user),e=u(),t=u(),o=u();return{error:e,imageUrl:o,imageRef:t,uploadImage:async(d,r)=>{var l;t.value=`${d}/${(l=a.value)==null?void 0:l.uid}/${r.name}`;const n=f(w,t.value);try{const i=await h(n,r);o.value=await S(n)}catch(i){e.value=i.message}},deleteImage:async d=>{const r=$(),n=f(r,d);try{await U(n),console.log("img deleted")}catch(l){e.value=l.message}}}},P=E;export{P as a,I as n,N as u};