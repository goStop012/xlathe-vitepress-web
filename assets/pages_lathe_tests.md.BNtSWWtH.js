var G=Object.defineProperty;var f=(s,a,d)=>a in s?G(s,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[a]=d;var c=(s,a,d)=>f(s,typeof a!="symbol"?a+"":a,d);import{d as w,s as T,o as p,c as m,E as g,F as i,j as t,t as u,$ as v,ad as x,p as I,l as b,_ as P,I as S,a as L}from"./chunks/framework.Dpud8YDe.js";const _=s=>(I("data-v-b1fe8728"),s=s(),b(),s),U=["id"],V=_(()=>t("td",null,"Test:",-1)),y={class:"testCode"},D=_(()=>t("td",null,"Input:",-1)),N=["onUpdate:modelValue","onInput"],$=w({__name:"Tests",setup(s){function a(l){return l.replace(/^\s*[\r|\n]/gm,"")}function d(l){return l.replace(/ /gm,"")}class e{constructor(r){c(this,"name");c(this,"testCode");c(this,"inputCode");const{name:n,testCode:o}=r;this.name=n,this.testCode=a(o==null?void 0:o.toUpperCase())||"",this.inputCode=""}}const C=T([new e({name:"程序头",testCode:""}),new e({name:"程序尾",testCode:""}),new e({name:"刀具开始",testCode:""}),new e({name:"刀具结束",testCode:""}),new e({name:"G0",testCode:""}),new e({name:"G1",testCode:""}),new e({name:"G1-C",testCode:""}),new e({name:"G1-R",testCode:""}),new e({name:"G1-A",testCode:""}),new e({name:"G2",testCode:""}),new e({name:"G3",testCode:""}),new e({name:"G71",testCode:""}),new e({name:"G72",testCode:""}),new e({name:"G73",testCode:""}),new e({name:"G74",testCode:""}),new e({name:"G75",testCode:""}),new e({name:"G76",testCode:`
(M20xP1.5)
G0 X21. Z-2.
G76 P020060 Q50 R0.02
G76 X19.85 Z-32. P0974 Q50 F1.5`}),new e({name:"G90",testCode:""}),new e({name:"G92",testCode:""}),new e({name:"G94",testCode:""})]),h=(l,r,n)=>{const o=l.target;d(r.toUpperCase())===d(n.toUpperCase())?o.classList.add("safety"):o.classList.add("danger")};return(l,r)=>(p(!0),m(i,null,g(C.value,n=>(p(),m(i,null,[t("h2",{id:n.name.toLowerCase().replaceAll(" ","-")},u(n.name),9,U),t("table",null,[t("tr",null,[V,t("td",null,[t("pre",null,[t("code",y,u(n.testCode),1)])])]),t("tr",null,[D,t("td",null,[v(t("textarea",{class:"inputCode","onUpdate:modelValue":o=>n.inputCode=o,onInput:o=>h(o,n.testCode,n.inputCode)},null,40,N),[[x,n.inputCode]])])])])],64))),256))}}),k=P($,[["__scopeId","data-v-b1fe8728"]]),B=t("h1",{id:"tests",tabindex:"-1"},[L("Tests "),t("a",{class:"header-anchor",href:"#tests","aria-label":'Permalink to "Tests"'},"​")],-1),E=t("p",null,"This is a Tests component.",-1),M=JSON.parse('{"title":"Tests","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/tests.md","filePath":"pages/lathe/tests.md"}'),F={name:"pages/lathe/tests.md"},O=Object.assign(F,{setup(s){return(a,d)=>(p(),m("div",{"data-pagefind-body":!0},[B,E,S(k)]))}});export{M as __pageData,O as default};
