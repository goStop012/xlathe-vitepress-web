var v=Object.defineProperty;var N=(n,t,e)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>N(n,typeof t!="symbol"?t+"":t,e);import{L as u,T as m,n as k,C as w}from"./chunks/inputValueType.CBxRsWn0.js";import{d as y,p as b,v as C,o as c,c as d,F as _,C as O,j as r,t as x,G as f,_ as $,a as V}from"./chunks/framework.5q7voRLl.js";import"./chunks/Utils.DC-NElVd.js";import"./chunks/Point.DhzxLGKq.js";const j={class:"hader"},B=["id"],D=y({__name:"ToleranceList",setup(n){class t{constructor(a){l(this,"name");l(this,"keyOption");l(this,"input");l(this,"output");l(this,"className");const{name:o,keyOption:i={value:"",options:[]},input:h,className:T}=a;this.name=o,this.keyOption=i,this.input=h,this.className=T,this.output=new T(k(h))}}const e=b([new t({name:"Tolerance",input:{tolerance:new u},className:m}),new t({name:"Tolerance",input:{tolerance:new u},className:m})]);function L(){const s=new t({name:"Tolerance",input:{tolerance:new u},className:m});e.value.push(s),g(e.value.length-1)}function g(s){const a=document.querySelector(".VPDocOutlineItem.root"),o=p(s);a==null||a.insertAdjacentHTML("beforeend",`
    <li data-v-102d11df="">
      <a data-v-102d11df="" class="outline-link" href="#${o}" title="${o}">${o}</a>
    </li>
    `)}const p=s=>`#${s}`;return C(()=>{}),(s,a)=>(c(),d(_,null,[(c(!0),d(_,null,O(e.value,(o,i)=>(c(),d(_,{key:i},[r("span",j,[r("h2",{id:p(i)},x(p(i)),9,B),a[0]||(a[0]=r("input",{type:"text"},null,-1))]),f(w,{data:o},null,8,["data"])],64))),128)),r("input",{type:"button",onClick:L,value:"Add Item"})],64))}}),F=$(D,[["__scopeId","data-v-12628e71"]]),q=JSON.parse('{"title":"ToleranceList","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/ToleranceList.md","filePath":"pages/lathe/ToleranceList.md"}'),I={name:"pages/lathe/ToleranceList.md"},E=Object.assign(I,{setup(n){return(t,e)=>(c(),d("div",{"data-pagefind-body":!0},[e[0]||(e[0]=r("h1",{id:"tolerancelist",tabindex:"-1"},[V("ToleranceList "),r("a",{class:"header-anchor",href:"#tolerancelist","aria-label":'Permalink to "ToleranceList"'},"​")],-1)),e[1]||(e[1]=r("p",null,"This is a ToleranceList component.",-1)),f(F)]))}});export{q as __pageData,E as default};
