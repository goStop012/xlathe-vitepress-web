var x=Object.defineProperty;var o=(s,t,r)=>t in s?x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r;var e=(s,t,r)=>o(s,typeof t!="symbol"?t+"":t,r);import{U as h}from"./Utils.n4EkZCRG.js";class i{constructor(t){e(this,"x");e(this,"y");if(this.isXZInput(t))this.x=t.z,this.y=t.x/2;else if(this.isXYInput(t))this.x=t.x,this.y=t.y;else throw new Error(`${this.constructor.name}，Point assignment error: Invalid object structure. Current object is: ${JSON.stringify(t)}`);this.x=h.formatNumber(this.x),this.y=h.formatNumber(this.y)}isXYInput(t){return"y"in t}isXZInput(t){return"z"in t}add(t){return new i({x:this.x+t.x,y:this.y+t.y})}sub(t){return new i({x:this.x-t.x,y:this.y-t.y})}div(t){if(t===0)throw new Error(`${this.constructor.name}，Division by zero`);return new i({x:this.x/t,y:this.y/t})}mul(t){return new i({x:this.x*t,y:this.y*t})}toLathePoint(){return{x:h.formatNumber(this.y*2),z:this.x}}toLatheAxisPrint(t=" "){const{x:r,z:n}=this.toLathePoint();return`X${r}${t}Z${n}`}print(t=" "){return`${this.x}${t}${this.y}`}toAxisPrint(t=" "){return`X${this.x}${t}Y${this.y}`}}export{i as P};
