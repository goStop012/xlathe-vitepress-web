var L=Object.defineProperty;var g=(t,e,a)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var r=(t,e,a)=>g(t,typeof e!="symbol"?e+"":e,a);import{L as u,j as w,C as v}from"./chunks/inputValueType.CypuVB6x.js";import{T as _}from"./chunks/lib.M749mhBX.js";import{d as I,s as $,y as b,o as i,c as l,F as m,E as x,j as s,t as y,I as f,p as S,l as k,_ as N,a as j}from"./chunks/framework.Cp4JlySx.js";const C=t=>(S("data-v-40e86e5a"),t=t(),k(),t),V={class:"hader"},B=["id"],D=C(()=>s("input",{type:"text"},null,-1)),F=I({__name:"ToleranceList",setup(t){class e{constructor(o){r(this,"name");r(this,"input");r(this,"output");r(this,"instance");const{name:p,input:c,instance:h}=o;this.name=p,this.input=c,this.instance=h,this.output=new h.constructor(w(c))}}const a=$([new e({name:"Tolerance",input:{tolerance:new u},instance:new _}),new e({name:"Tolerance",input:{tolerance:new u},instance:new _})]);function T(){a.value.push(new e({name:"Tolerance",input:{tolerance:new u},instance:new _}));const n=document.querySelector(".VPDocOutlineItem.root"),o=d(a.value.length-1);n==null||n.insertAdjacentHTML("beforeend",`
  <li data-v-102d11df="">
    <a data-v-102d11df="" class="outline-link" href="#${o}" title="${o}">${o}</a>
  </li>
  `)}const d=n=>`#${n}`;return b(()=>{}),(n,o)=>(i(),l(m,null,[(i(!0),l(m,null,x(a.value,(p,c)=>(i(),l(m,null,[s("span",V,[s("h2",{id:d(c)},y(d(c)),9,B),D]),f(v,{data:p},null,8,["data"])],64))),256)),s("input",{type:"button",onClick:T,value:"AddItem"})],64))}}),P=N(F,[["__scopeId","data-v-40e86e5a"]]),A=s("h1",{id:"tolerancelist",tabindex:"-1"},[j("ToleranceList "),s("a",{class:"header-anchor",href:"#tolerancelist","aria-label":'Permalink to "ToleranceList"'},"​")],-1),E=s("p",null,"This is a ToleranceList component.",-1),J=JSON.parse('{"title":"ToleranceList","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/ToleranceList.md","filePath":"pages/lathe/ToleranceList.md"}'),M={name:"pages/lathe/ToleranceList.md"},z=Object.assign(M,{setup(t){return(e,a)=>(i(),l("div",{"data-pagefind-body":!0},[A,E,f(P)]))}});export{J as __pageData,z as default};
