class s{static isType(t,e){return Object.prototype.toString.call(t)===`[object ${e}]`}static isNumber(t){return this.isType(t,"Number")&&!Number.isNaN(t)}static isString(t){return this.isType(t,"String")}static isBoolean(t){return this.isType(t,"Boolean")}static isArray(t){return this.isType(t,"Array")}static isObject(t){return this.isType(t,"Object")}static isRegExp(t){return this.isType(t,"RegExp")}static isUndefined(t){return this.isType(t,"Undefined")}static isNull(t){return this.isType(t,"Null")}static degreesToRadians(t){return t*Math.PI/180}static radiansToDegrees(t){return(t*(180/Math.PI)+360)%360}static parseBinary(t){return parseInt(t,2)}static toBinaryString(t){return t.toString(2)}static formatNumber(t){return typeof t=="number"?parseFloat(t.toFixed(4)):t}static formatStringOrBoolean(t){return typeof t=="string"||typeof t=="boolean"?t.toString().toUpperCase():t}static objectFormat(t){const e={};for(let i in t){const r=t[i];this.isObject(r)?e[i]=this.objectFormat(r):(this.isNumber(r)&&(e[i]=s.formatNumber(r)),(this.isString(r)||this.isBoolean(r))&&(e[i]=s.formatStringOrBoolean(r)))}return e}static deepCopy(t,e=new WeakMap){if(t===null||typeof t!="object")return t;if(e.has(t))return e.get(t);if(Array.isArray(t)){const i=[];e.set(t,i);for(let r=0;r<t.length;r++)i[r]=this.deepCopy(t[r],e);return i}if(this.isObject(t)||t instanceof Date||t instanceof RegExp){const i={};e.set(t,i);for(const r in t)t.hasOwnProperty(r)&&(i[r]=this.deepCopy(t[r],e));return i}throw new Error("Unable to copy object! Its type isn't supported.")}static intersection(...t){return t.reduce((e,i)=>e.filter(r=>i.includes(r)))}static union(...t){return[...new Set(t.reduce((e,i)=>e.concat(i),[]))]}static difference(...t){const[e,...i]=t;return e.filter(r=>!i.some(n=>n.includes(r)))}}export{s as U};
