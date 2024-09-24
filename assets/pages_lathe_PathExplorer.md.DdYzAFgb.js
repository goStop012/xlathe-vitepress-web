var V=Object.defineProperty;var N=(s,e,t)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var m=(s,e,t)=>N(s,typeof e!="symbol"?e+"":e,t);import{U as x,_ as O,p as b,o,c as r,k as h,t as f,a3 as S,j as i,F as g,C,G as R,a as E}from"./chunks/framework.5q7voRLl.js";class I{constructor(e,t){m(this,"cells");m(this,"columnIndexMap");m(this,"COLUMNS");m(this,"ROWS");this.COLUMNS=e,this.ROWS=t,this.cells=x(this.COLUMNS.map(()=>Array(this.ROWS).fill(""))),this.columnIndexMap=Object.fromEntries(this.COLUMNS.map((a,l)=>[a,l]))}evalCell(e){if(!e.startsWith("="))return e;e=e.slice(1).replace(/\b([A-Z])(\d{1,2})\b/g,(t,a,l)=>{const n=this.columnIndexMap[a];return n!==void 0?`get(${n}, ${l})`:`#ERROR: Invalid Column ${a}`});try{return new Function("get",`return ${e}`)(this.getCellValue.bind(this))}catch(t){return console.log(t),`#ERROR ${t}`}}getCellValue(e,t){if(!this.isValidCoordinate(e,t))return`#ERROR: Invalid coordinates (${e}, ${t})`;const a=this.cells[e][t];if(a==="")return null;const l=this.evalCell(a),n=Number(l);return Number.isFinite(n)?n:l}setCellValue(e,t,a){if(!this.isValidCoordinate(e,t)){console.error(`Invalid cell coordinates (${e}, ${t})`);return}this.cells[e][t]=String(a)}setRowValue(e,t){if(!this.isValidRow(e)||t.length!==this.COLUMNS.length){console.error("Invalid row or value length mismatch.");return}t.forEach((a,l)=>{this.setCellValue(l,e,a)})}getCellAsObject(e,t){if(this.isValidCoordinate(e,t)){const a=this.COLUMNS[e],l=this.getCellValue(e,t);return l===null?{}:{[a]:l}}return{error:"Invalid cell coordinates"}}getRowAsObject(e){if(this.isValidRow(e)){const t={};return this.COLUMNS.forEach((a,l)=>{const n=this.getCellValue(l,e);n!==null&&(t[a]=n)}),t}return{error:"Invalid row index"}}setRowFromObject(e,t){if(!this.isValidRow(e)){console.error("Invalid row index.");return}for(const a in t){const l=this.columnIndexMap[a];l!==void 0?this.setCellValue(l,e,t[a]):console.error(`Invalid column name: ${a}`)}}setCellFromObject(e,t){const a=Object.keys(t)[0],l=this.columnIndexMap[a];l!==void 0?this.setCellValue(l,e,t[a]):console.error(`Invalid column name: ${a}`)}setGCodes(e){e.forEach((t,a)=>{const l={},n=t.match(/([A-Z])(-?\d*\.?\d*)/g);n&&n.forEach(d=>{const u=d[0],v=d.slice(1),p=parseFloat(v);isNaN(p)||(l[u]=p)}),this.setRowFromObject(a,l)})}getGCodes(){const e=[];for(let t=0;t<this.ROWS;t++){const a=[];for(let l=0;l<this.COLUMNS.length;l++){const n=this.COLUMNS[l],d=this.getCellValue(l,t);d!==null&&a.push(`${n}${d}`)}a.length>0&&e.push(a.join(" "))}return e}isValidCoordinate(e,t){return e>=0&&e<this.COLUMNS.length&&this.isValidRow(t)}isValidRow(e){return e>=0&&e<this.ROWS}}const c=new I(["G","X","Z","U","W","A","C","R"],20),w=["G00 X94. Z1.","G1 Z0.02","A90.","X98.1 Z-2.8 A15. R0.5","Z-45."];c.setGCodes(w);console.log(c.getCellAsObject(0,0));console.log(c.getRowAsObject(0));console.log(c.getGCodes());const M=["title"],_=["value"],$={key:1},P={__name:"PathExplorerWidet",props:{c:Number,r:Number},setup(s){const e=c.cells,t=c.evalCell.bind(c),a=s,l=b(!1);function n(d){l.value=!1,e[a.c][a.r]=d.target.value.trim()}return(d,u)=>(o(),r("div",{class:"cell",title:h(e)[s.c][s.r],onClick:u[1]||(u[1]=v=>l.value=!0)},[l.value?(o(),r("input",{key:0,value:h(e)[s.c][s.r],onChange:n,onBlur:n,onVnodeMounted:u[0]||(u[0]=({el:v})=>v.focus())},null,40,_)):(o(),r("span",$,f(h(t)(h(e)[s.c][s.r])),1))],8,M))}},U=O(P,[["__scopeId","data-v-25a93067"]]),j={__name:"PathExplorer",setup(s){const e=c.cells,t=c.COLUMNS;return(a,l)=>(o(),r(g,null,[l[1]||(l[1]=S("<dl data-v-1c727ea3><dt data-v-1c727ea3>TODO</dt><dd data-v-1c727ea3>禁用某单元格</dd><dd data-v-1c727ea3>单元格状态：新增/修改/删除</dd><dd data-v-1c727ea3>设置某单元格值</dd><dd data-v-1c727ea3>某单元格值 &lt;-&gt; Gcode</dd><dd data-v-1c727ea3>-</dd><dd data-v-1c727ea3>设置某列值</dd><dd data-v-1c727ea3>某列值 &lt;-&gt; Gcode</dd><dd data-v-1c727ea3>-</dd><dd data-v-1c727ea3>G1-ACR &lt;-&gt; G1/2/3</dd><dd data-v-1c727ea3>-</dd><dd data-v-1c727ea3>载入实例</dd><dd data-v-1c727ea3>Class RightTriangle 支持输入点；</dd></dl>",1)),i("table",null,[i("thead",null,[i("tr",null,[l[0]||(l[0]=i("th",null,null,-1)),(o(!0),r(g,null,C(h(t),n=>(o(),r("th",null,f(n),1))),256))])]),i("tbody",null,[(o(!0),r(g,null,C(h(e)[0].length,n=>(o(),r("tr",null,[i("th",null,f(n-1),1),(o(!0),r(g,null,C(h(t),(d,u)=>(o(),r("td",null,[R(U,{r:n-1,c:u},null,8,["r","c"])]))),256))]))),256))])])],64))}},G=O(j,[["__scopeId","data-v-1c727ea3"]]),y=JSON.parse('{"title":"PathExplorer","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/PathExplorer.md","filePath":"pages/lathe/PathExplorer.md"}'),L={name:"pages/lathe/PathExplorer.md"},F=Object.assign(L,{setup(s){return(e,t)=>(o(),r("div",{"data-pagefind-body":!0},[t[0]||(t[0]=i("h1",{id:"pathexplorer",tabindex:"-1"},[E("PathExplorer "),i("a",{class:"header-anchor",href:"#pathexplorer","aria-label":'Permalink to "PathExplorer"'},"​")],-1)),t[1]||(t[1]=i("p",null,"This is a PathExplorer component.",-1)),R(G)]))}});export{y as __pageData,F as default};
