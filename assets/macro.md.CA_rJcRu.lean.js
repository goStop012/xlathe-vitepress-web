import{_ as k,W as j,y as S,ad as N,o as l,c,j as u,t as h,k as b,F as p,E as g,e as M,$ as x,af as I,ag as V,I as O,a as A}from"./chunks/framework.Cn6CLnPL.js";const C="_dark_1aws3_1",T={dark:C},U=["id"],q=u("td",null,[u("span",null,"[ ")],-1),w={key:0},J={key:1},$=["colspan"],F=["onUpdate:modelValue"],L=["value"],P=["readonly","onUpdate:modelValue"],B=u("td",null,[u("span",null," ]")],-1),D=u("td",null,[u("span",null," = ")],-1),E=["value"],W={__name:"MacroWidget",props:{config:{type:Object,required:!0}},setup(y){const t=y,i=t.config;function m(a){const d={};for(let r in a)d[r]=a[r].value;return d}function _(a){return typeof a=="number"?parseFloat(a.toFixed(4)):typeof a=="string"?a.toString().toUpperCase():a}function v(a,d){const r=Object.keys(d).length,f=a.reduce((o,s)=>Object.keys(s).length>o?Object.keys(s).length:o,-1/0);return r===1&&f!==1?f:void 0}const e=j({items:i.items,select:""}),n=i.calc;return S(()=>{console.log("mounted",t.config.name,{items:N(e.items)})}),(a,d)=>(l(),c(p,null,[u("h2",{id:b(i).name.toLowerCase().replaceAll(" ","-")},h(b(i).name),9,U),u("table",null,[(l(!0),c(p,null,g(e.items,r=>(l(),c("tr",null,[q,(l(!0),c(p,null,g(r.value,(f,o)=>(l(),c(p,null,[Object.keys(r.value).length>1&&(Object.keys(r.value).findIndex(s=>s===o)+1)%2===0?(l(),c("td",w,h(r.name.toUpperCase()),1)):M("",!0),Object.keys(r.value).length==1?(l(),c("td",J,h(r.name.toUpperCase()),1)):M("",!0),u("td",{colspan:v(Object.values(m(e.items)),r.value)},[Array.isArray(r.range)?x((l(),c("select",{key:0,"onUpdate:modelValue":s=>r.value[o]=s},[(l(!0),c(p,null,g(r.range,s=>(l(),c("option",{value:s},h(s),9,L))),256))],8,F)),[[I,r.value[o]]]):x((l(),c("input",{key:1,type:"number",readonly:r.name===e.select,"onUpdate:modelValue":s=>r.value[o]=s},null,8,P)),[[V,r.value[o]]])],8,$)],64))),256)),B,D,u("td",null,[u("input",{type:"text",readonly:"",value:_(b(n)[r.name](...Object.values(r.value)))},null,8,E)]),u("td",null,h(r.comment),1)]))),256))])],64))}},R={$style:T},z=k(W,[["__cssModules",R]]),G={__name:"Macro",setup(y){function t(e="default",n="默认注释",a=void 0,d={min:-9999.9999,max:9999.9999},r=!1){(a===void 0||typeof a=="number"||typeof a=="string"||typeof a=="boolean"||Array.isArray(a))&&(a={value_:a});const f={name:e,comment:n,value:a,range:d||{min:-9999.9999,max:9999.9999},disabled:r};{let o;Array.isArray(a)?o=a:typeof a=="object"?o=[...Object.values(a).flat()]:o=[a],o.every(s=>typeof s=="boolean")?f.inType="boolean":o.every(s=>typeof s=="string")?f.inType="string":o.every(s=>typeof s=="number")&&(f.inType="number")}return f}function i(...e){const n={};return e.forEach(a=>{n[a.name]=a}),n}function m(e){return e*Math.PI/180}function _(e){return e*180/Math.PI}const v={Arithmetic:{name:"算术运算",items:i(t("+","加法",{lv:1,rv:2},void 0,!0),t("-","减法",{lv:1,rv:2},void 0,!0),t("*","乘法",{lv:1,rv:2},void 0,!0),t("/","除法",{lv:1,rv:2},void 0,!0)),calc:{"+":(e,n)=>e+n,"-":(e,n)=>e-n,"*":(e,n)=>e*n,"/":(e,n)=>e/n}},Comparison:{name:"比较运算",items:i(t("eq","等于",{lv:1,rv:2},void 0,!0),t("ne","不等于",{lv:1,rv:2},void 0,!0),t("gt","大于",{lv:1,rv:2},void 0,!0),t("ge","大于等于",{lv:1,rv:2},void 0,!0),t("lt","小于",{lv:1,rv:2},void 0,!1),t("le","小于等于",{lv:1,rv:2},void 0,!0)),calc:{eq:(e,n)=>e===n,ne:(e,n)=>e!==n,gt:(e,n)=>e>n,ge:(e,n)=>e>=n,lt:(e,n)=>e<n,le:(e,n)=>e<=n}},Logic:{name:"逻辑运算",items:i(t("and","与",{lv:!0,rv:!1},[!0,!1],!0),t("or","或",{lv:!0,rv:!1},[!0,!1],!0),t("not","非",!0,[!0,!1],!0)),calc:{and:(e,n)=>JSON.parse(e)&&JSON.parse(n),or:(e,n)=>JSON.parse(e)||JSON.parse(n),not:e=>!JSON.parse(e)}},Trigonometry:{name:"三角函数",items:i(t("sin","正弦",90,{min:0,max:90},!0),t("cos","余弦",90,{min:0,max:90},!0),t("tan","正切",45,{min:0,max:90},!0),t("asin","反正弦",.5,{min:-1,max:1},!0),t("acos","反余弦",.5,{min:-1,max:1},!0),t("atan","反正切",.5,{min:-1,max:1},!0)),calc:{sin:e=>Math.sin(m(e)),cos:e=>Math.cos(m(e)),tan:e=>Math.tan(m(e)),asin:e=>_(Math.asin(e)),acos:e=>_(Math.acos(e)),atan:e=>_(Math.atan(e))}},Function:{name:"函数",items:i(t("sqrt","平方根",4,void 0,!0),t("abs","绝对值",-2,void 0,!0),t("round","四舍五入",3.6,void 0,!0),t("exp","指数",2,void 0,!0),t("ln","对数",10,void 0,!0),t("fix","下取整",3.6,void 0,!0),t("fup","上取整",3.6,void 0,!0)),calc:{sqrt:e=>Math.sqrt(e),abs:e=>Math.abs(e),round:e=>Math.round(e),exp:e=>Math.exp(e),ln:e=>Math.log(e),fix:e=>Math.floor(e),fup:e=>Math.ceil(e)}},B2D:{name:"进制转换",items:i(t("b2d","二进制转十进制","101010",void 0,!0),t("d2b","十进制转二进制","10",void 0,!0)),calc:{b2d:e=>parseInt(e*1,2).toString(),d2b:e=>(e*1).toString(2)}}};return(e,n)=>(l(),c(p,null,g(v,(a,d)=>O(z,{key:d,config:a},null,8,["config"])),64))}},H=u("h1",{id:"macro",tabindex:"-1"},[A("Macro "),u("a",{class:"header-anchor",href:"#macro","aria-label":'Permalink to "Macro"'},"​")],-1),K=u("p",null,"This is a macro component.",-1),Y=JSON.parse('{"title":"Macro","description":"","frontmatter":{},"headers":[],"relativePath":"+macro.md","filePath":"+macro.md"}'),Q={name:"+macro.md"},Z=Object.assign(Q,{setup(y){return(t,i)=>(l(),c("div",{"data-pagefind-body":!0},[H,K,O(G)]))}});export{Y as __pageData,Z as default};
