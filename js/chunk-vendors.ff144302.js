(self["webpackChunkbarbas_vue_ts"]=self["webpackChunkbarbas_vue_ts"]||[]).push([[504],{4046:function(e,t,n){"use strict";n.d(t,{Am:function(){return F},FA:function(){return R},Fy:function(){return b},I9:function(){return $},Im:function(){return L},Ku:function(){return X},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return w},bD:function(){return M},c1:function(){return I},cY:function(){return _},dM:function(){return k},eX:function(){return O},g:function(){return x},hp:function(){return U},jZ:function(){return E},lT:function(){return A},lV:function(){return S},p9:function(){return Y},sr:function(){return T},tD:function(){return V},u:function(){return l},yU:function(){return m},zW:function(){return C}});n(4114),n(8992),n(3949),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,l=c?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==l||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==l){const e=a<<4&240|l>>2;if(r.push(e),64!==h){const e=l<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={VUE_APP_MODE_APP:"production",VUE_APP_FIREBASE_APP_KEY:"AIzaSyCwZBJduSZhvzKAl-b63uo3pi1YIkk3Bc0",VUE_APP_FIREBASE_AUTH_DOMAIN:"barbas-c86ed.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"barbas-c86ed",VUE_APP_FIREBASE_STORAGE:"barbas-c86ed.firebasestorage.app",VUE_APP_FIREBASE_MESSAGING:"800838594148",VUE_APP_FIREBASE_APP_ID:"1:800838594148:web:341626557847e3173c7971",VUE_APP_FIREBASE_MEASUREMENT:"G-7BN122WWNX",NODE_ENV:"production",BASE_URL:"/undefined/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function I(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function T(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){try{return"object"===typeof indexedDB}catch(e){return!1}}function O(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function k(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="FirebaseError";class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?N(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new x(r,o,n);return a}}function N(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(j(n)&&j(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=1e3,K=2,q=144e5,G=.5;function Y(e,t=W,n=K){const r=t*Math.pow(n,e),i=Math.round(G*r*(Math.random()-.5)*2);return Math.min(q,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){"use strict";n.d(t,{C4:function(){return T},EW:function(){return je},Gc:function(){return ve},IG:function(){return Se},IJ:function(){return Pe},KR:function(){return ke},Kh:function(){return me},Pr:function(){return Le},R1:function(){return Ne},X2:function(){return l},bl:function(){return S},fE:function(){return Ee},g8:function(){return be},hV:function(){return He},hZ:function(){return M},i9:function(){return Oe},ju:function(){return Ie},lJ:function(){return Ae},qA:function(){return F},u4:function(){return L},ux:function(){return Te},wB:function(){return Be},yC:function(){return o}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,A(this),m(this);const e=s,t=E;s=this,E=!0;try{return this.fn()}finally{0,v(this),s=e,E=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)b(e);this.deps=this.depsTail=void 0,A(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let u,h,d=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=u,u=e}function p(){d++}function g(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function m(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),b(r),w(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===C)return;e.globalVersion=C;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=s,i=E;s=e,E=!0;try{m(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,E=i,v(e),e.flags&=-3}}function b(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)b(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function w(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let E=!0;const I=[];function T(){I.push(E),E=!1}function S(){const e=I.pop();E=void 0===e||e}function A(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let C=0;class O{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class k{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!E||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new O(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,P(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,C++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function P(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)P(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const x=new WeakMap,R=Symbol(""),N=Symbol(""),D=Symbol("");function L(e,t,n){if(E&&s){let t=x.get(e);t||x.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new k),r.map=t,r.key=n),r.track()}}function M(e,t,n,i,s,o){const a=x.get(e);if(!a)return void C++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const s=(0,r.cy)(e),o=s&&(0,r.yI)(n);if(s&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===D||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(D)),t){case"add":s?o&&c(a.get("length")):(c(a.get(R)),(0,r.CE)(e)&&c(a.get(N)));break;case"delete":s||(c(a.get(R)),(0,r.CE)(e)&&c(a.get(N)));break;case"set":(0,r.CE)(e)&&c(a.get(R));break}}g()}function j(e){const t=Te(e);return t===e?t:(L(t,"iterate",D),Ee(e)?t:t.map(Ae))}function F(e){return L(e=Te(e),"iterate",D),e}const $={__proto__:null,[Symbol.iterator](){return U(this,Symbol.iterator,Ae)},concat(...e){return j(this).concat(...e.map((e=>(0,r.cy)(e)?j(e):e)))},entries(){return U(this,"entries",(e=>(e[1]=Ae(e[1]),e)))},every(e,t){return B(this,"every",e,t,void 0,arguments)},filter(e,t){return B(this,"filter",e,t,(e=>e.map(Ae)),arguments)},find(e,t){return B(this,"find",e,t,Ae,arguments)},findIndex(e,t){return B(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return B(this,"findLast",e,t,Ae,arguments)},findLastIndex(e,t){return B(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return B(this,"forEach",e,t,void 0,arguments)},includes(...e){return z(this,"includes",e)},indexOf(...e){return z(this,"indexOf",e)},join(e){return j(this).join(e)},lastIndexOf(...e){return z(this,"lastIndexOf",e)},map(e,t){return B(this,"map",e,t,void 0,arguments)},pop(){return W(this,"pop")},push(...e){return W(this,"push",e)},reduce(e,...t){return H(this,"reduce",e,t)},reduceRight(e,...t){return H(this,"reduceRight",e,t)},shift(){return W(this,"shift")},some(e,t){return B(this,"some",e,t,void 0,arguments)},splice(...e){return W(this,"splice",e)},toReversed(){return j(this).toReversed()},toSorted(e){return j(this).toSorted(e)},toSpliced(...e){return j(this).toSpliced(...e)},unshift(...e){return W(this,"unshift",e)},values(){return U(this,"values",Ae)}};function U(e,t,n){const r=F(e),i=r[t]();return r===e||Ee(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const V=Array.prototype;function B(e,t,n,r,i,s){const o=F(e),a=o!==e&&!Ee(e),c=o[t];if(c!==V[t]){const t=c.apply(e,s);return a?Ae(t):t}let l=n;o!==e&&(a?l=function(t,r){return n.call(this,Ae(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function H(e,t,n,r){const i=F(e);let s=n;return i!==e&&(Ee(e)?n.length>3&&(s=function(t,r,i){return n.call(this,t,r,i,e)}):s=function(t,r,i){return n.call(this,t,Ae(r),i,e)}),i[t](s,...r)}function z(e,t,n){const r=Te(e);L(r,"iterate",D);const i=r[t](...n);return-1!==i&&!1!==i||!Ie(n[0])?i:(n[0]=Te(n[0]),r[t](...n))}function W(e,t,n=[]){T(),p();const r=Te(e)[t].apply(e,n);return g(),S(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),q=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function G(e){(0,r.Bm)(e)||(e=String(e));const t=Te(this);return L(t,"has",e),t.hasOwnProperty(e)}class Y{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?fe:de:s?he:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){let e;if(o&&(e=$[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,Oe(e)?e:n);return((0,r.Bm)(t)?q.has(t):K(t))?a:(i||L(e,"get",t),s?a:Oe(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ye(a):me(a):a)}}class X extends Y{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=we(s);if(Ee(n)||we(n)||(s=Te(s),n=Te(n)),!(0,r.cy)(e)&&Oe(s)&&!Oe(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,Oe(e)?e:i);return e===Te(i)&&(o?(0,r.$H)(n,s)&&M(e,"set",t,n,s):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&M(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&q.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":R),Reflect.ownKeys(e)}}class Z extends Y{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const J=new X,Q=new Z,ee=new X(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Te(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?te:t?Ce:Ae;return!t&&L(o,"iterate",l?N:R),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(e,t){const n={get(n){const i=this["__v_raw"],s=Te(i),o=Te(n);e||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=ne(s),c=t?te:e?Ce:Ae;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Te(t),"iterate",R),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=Te(n),s=Te(t);return e||((0,r.$H)(t,s)&&L(i,"has",t),L(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Te(s),a=t?te:e?Ce:Ae;return!e&&L(o,"iterate",R),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){t||Ee(e)||we(e)||(e=Te(e));const n=Te(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||Ee(n)||we(n)||(n=Te(n));const i=Te(this),{has:s,get:o}=ne(i);let a=s.call(i,e);a||(e=Te(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&M(i,"set",e,n,c):M(i,"add",e,n),this},delete(e){const t=Te(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Te(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&M(t,"delete",e,void 0,s),o},clear(){const e=Te(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=re(r,e,t)})),n}function oe(e,t){const n=se(e,t);return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const ae={get:oe(!1,!1)},ce={get:oe(!1,!0)},le={get:oe(!0,!1)};const ue=new WeakMap,he=new WeakMap,de=new WeakMap,fe=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ge(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,r.Zf)(e))}function me(e){return we(e)?e:_e(e,!1,J,ae,ue)}function ve(e){return _e(e,!1,ee,ce,he)}function ye(e){return _e(e,!0,Q,le,de)}function _e(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ge(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function be(e){return we(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return!!e&&!!e["__v_raw"]}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function Se(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Gv)(e)?me(e):e,Ce=e=>(0,r.Gv)(e)?ye(e):e;function Oe(e){return!!e&&!0===e["__v_isRef"]}function ke(e){return xe(e,!1)}function Pe(e){return xe(e,!0)}function xe(e,t){return Oe(e)?e:new Re(e,t)}class Re{constructor(e,t){this.dep=new k,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Te(e),this._value=t?e:Ae(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ee(e)||we(e);e=n?e:Te(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ae(e),this.dep.trigger())}}function Ne(e){return Oe(e)?e.value:e}const De={get:(e,t,n)=>"__v_raw"===t?e:Ne(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Le(e){return be(e)?e:new Proxy(e,De)}class Me{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new k(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=C-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const e=this.dep.track();return _(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function je(e,t,n=!1){let i,s;(0,r.Tn)(e)?i=e:(i=e.get,s=e.set);const o=new Me(i,s,n);return o}const Fe={},$e=new WeakMap;let Ue;function Ve(e,t=!1,n=Ue){if(n){let t=$e.get(n);t||$e.set(n,t=[]),t.push(e)}else 0}function Be(e,t,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:u,call:h}=n,d=e=>s?e:Ee(e)||!1===s||0===s?He(e,1):He(e);let f,p,g,m,v=!1,y=!1;if(Oe(e)?(p=()=>e.value,v=Ee(e)):be(e)?(p=()=>d(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>be(e)||Ee(e))),p=()=>e.map((e=>Oe(e)?e.value:be(e)?d(e):(0,r.Tn)(e)?h?h(e,2):e():void 0))):p=(0,r.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){T();try{g()}finally{S()}}const t=Ue;Ue=f;try{return h?h(e,3,[m]):e(m)}finally{Ue=t}}:r.tE,t&&s){const e=p,t=!0===s?1/0:s;p=()=>He(e(),t)}const _=a(),b=()=>{f.stop(),_&&_.active&&(0,r.TF)(_.effects,f)};if(o&&t){const e=t;t=(...t)=>{e(...t),b()}}let w=y?new Array(e.length).fill(Fe):Fe;const E=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(s||v||(y?e.some(((e,t)=>(0,r.$H)(e,w[t]))):(0,r.$H)(e,w))){g&&g();const n=Ue;Ue=f;try{const n=[e,w===Fe?void 0:y&&w[0]===Fe?[]:w,m];h?h(t,3,n):t(...n),w=e}finally{Ue=n}}}else f.run()};return u&&u(E),f=new l(p),f.scheduler=c?()=>c(E,!1):E,m=e=>Ve(e,!1,f),g=f.onStop=()=>{const e=$e.get(f);if(e){if(h)h(e,4);else for(const t of e)t();$e.delete(f)}},t?i?E(!0):w=f.run():c?c(E.bind(null,!0),!0):f.run(),b.pause=f.pause.bind(f),b.resume=f.resume.bind(f),b.stop=b,b}function He(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Oe(e))He(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)He(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{He(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)He(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&He(e[r],t,n)}return e}},6768:function(e,t,n){"use strict";n.d(t,{$u:function(){return se},CE:function(){return Gt},Df:function(){return V},EW:function(){return Mn},FK:function(){return jt},Fv:function(){return an},Gt:function(){return Be},Gy:function(){return L},K9:function(){return ut},Lk:function(){return en},MZ:function(){return U},OW:function(){return $},Q3:function(){return cn},QP:function(){return j},WQ:function(){return He},bF:function(){return tn},bo:function(){return k},dY:function(){return m},eW:function(){return on},g2:function(){return fe},h:function(){return jn},k6:function(){return O},nI:function(){return yn},pI:function(){return ve},pM:function(){return B},qL:function(){return o},uX:function(){return Ht},v6:function(){return dn},wB:function(){return wt}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(3949),n(1454),n(8872),n(7550);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}if(l)return(0,r.C4)(),s(l,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,a,o,u)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const l=[];let u=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(e){const t=g||p;return e?t.then(this?e.bind(this):e):t}function v(e){let t=u+1,n=l.length;while(t<n){const r=t+n>>>1,i=l[r],s=I(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=I(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=I(n)?l.push(e):l.splice(v(t),0,e),e.flags|=1,_()}}function _(){g||(g=p.then(T))}function b(e){(0,i.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(f+1,0,e):1&e.flags||(h.push(e),e.flags|=1),_()}function w(e,t,n=u+1){for(0;n<l.length;n++){const t=l[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,l.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function E(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>I(e)-I(t)));if(h.length=0,d)return void d.push(...e);for(d=e,f=0;f<d.length;f++){const e=d[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,f=0}}const I=e=>null==e.id?2&e.flags?-1:1/0:e.id;function T(e){i.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,E(e),g=null,(l.length||h.length)&&T(e)}}let S=null,A=null;function C(e){const t=S;return S=e,A=e&&e.type.__scopeId||null,t}function O(e,t=S,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Kt(-1);const i=C(t);let s;try{s=e(...n)}finally{C(i),r._d&&Kt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function k(e,t){if(null===S)return e;const n=Nn(S),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,l=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function P(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),o(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const x=Symbol("_vte"),R=e=>e.__isTeleport;const N=Symbol("_leaveCb"),D=Symbol("_enterCb");function L(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return re((()=>{e.isMounted=!0})),oe((()=>{e.isUnmounting=!0})),e}const M=[Function,Array],j={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function F(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function $(e,t,n,r,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:_,onAfterAppear:b,onAppearCancelled:w}=t,E=String(e.key),I=F(n,e),T=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},A={mode:c,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!a)return;r=y||u}t[N]&&t[N](!0);const i=I[E];i&&Zt(e,i)&&i.el[N]&&i.el[N](),T(r,[t])},enter(e){let t=h,r=d,i=f;if(!n.isMounted){if(!a)return;t=_||h,r=b||d,i=w||f}let s=!1;const o=e[D]=t=>{s||(s=!0,T(t?i:r,[e]),A.delayedLeave&&A.delayedLeave(),e[D]=void 0)};t?S(t,[e,o]):o()},leave(t,r){const i=String(e.key);if(t[D]&&t[D](!0),n.isUnmounting)return r();T(p,[t]);let s=!1;const o=t[N]=n=>{s||(s=!0,r(),T(n?v:m,[t]),t[N]=void 0,I[i]===e&&delete I[i])};I[i]=e,g?S(g,[t,o]):o()},clone(e){const i=$(e,t,n,r,s);return s&&s(i),i}};return A}function U(e,t){6&e.shapeFlag&&e.component?(e.transition=t,U(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function V(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===jt?(128&o.patchFlag&&i++,r=r.concat(V(o.children,t,a))):(t||o.type!==$t)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function B(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function H(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function z(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>z(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(W(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&z(e,t,n,o.component.subTree));const c=4&o.shapeFlag?Nn(o.component):o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:e=>(0,i.$3)(g,e);if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,m(d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,u,12,[l,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?m(h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],m(h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,m(h)&&(p[h]=l)):s&&(h.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,lt(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const W=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const K=e=>e.type.__isKeepAlive;RegExp,RegExp;function q(e,t){return(0,i.cy)(e)?e.some((e=>q(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function G(e,t){X(e,"a",t)}function Y(e,t){X(e,"da",t)}function X(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,r,n),n){let e=n.parent;while(e&&e.parent)K(e.parent.vnode)&&Z(r,t,n,e),e=e.parent}}function Z(e,t,n,r){const s=ee(t,e,r,!0);ae((()=>{(0,i.TF)(r[t],s)}),n)}function J(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Q(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=vn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=wn(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const te=e=>(t,n=vn)=>{An&&"sp"!==e||ee(e,((...e)=>t(...e)),n)},ne=te("bm"),re=te("m"),ie=te("bu"),se=te("u"),oe=te("bum"),ae=te("um"),ce=te("sp"),le=te("rtg"),ue=te("rtc");function he(e,t=vn){ee("ec",e,t)}const de="components";function fe(e,t){return ge(de,e,!0,t)||e}const pe=Symbol.for("v-ndc");function ge(e,t,n=!0,r=!1){const s=S||vn;if(s){const n=s.type;if(e===de){const e=Dn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=me(s[e]||n[e],t)||me(s.appContext[e],t);return!o&&r?n:o}}function me(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function ve(e,t,n,s){let o;const a=n&&n[s],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1;n&&(i=!(0,r.fE)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=t(i?(0,r.lJ)(e[s]):e[s],s,void 0,a&&a[s])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const ye=e=>e?In(e)?Nn(e):ye(e.parent):null,_e=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ye(e.parent),$root:e=>ye(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Oe(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>It.bind(e)}),be=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),we={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(be(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ie&&(c[t]=0)}}const d=_e[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return be(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||be(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(_e,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ee(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ie=!0;function Te(e){const t=Oe(e),n=e.proxy,s=e.ctx;Ie=!1,t.beforeCreate&&Ae(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:I,renderTracked:T,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:O,inheritAttrs:k,components:P,directives:x,filters:R}=t,N=null;if(h&&Se(h,s,N),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ie=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Mn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Ce(l[r],s,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Be(t,e[t])}))}function D(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ae(d,e,"c"),D(ne,f),D(re,p),D(ie,g),D(se,m),D(G,v),D(Y,y),D(he,A),D(ue,T),D(le,S),D(oe,b),D(ae,E),D(ce,C),(0,i.cy)(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===i.tE&&(e.render=I),null!=k&&(e.inheritAttrs=k),P&&(e.components=P),x&&(e.directives=x),C&&H(e)}function Se(e,t,n=i.tE){(0,i.cy)(e)&&(e=Ne(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?He(n.from||s,n.default,!0):He(n.from||s):He(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Ae(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ce(e,t,n,r){let s=r.includes(".")?Tt(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&wt(s,n)}else if((0,i.Tn)(e))wt(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Ce(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&wt(s,r,e)}else 0}function Oe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||r?(l={},s.length&&s.forEach((e=>ke(l,e,a,!0))),ke(l,t,a)):l=t,(0,i.Gv)(t)&&o.set(t,l),l}function ke(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ke(e,s,n,!0),i&&i.forEach((t=>ke(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Pe[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Pe={data:xe,props:Me,emits:Me,methods:Le,computed:Le,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Le,directives:Le,watch:je,provide:xe,inject:Re};function xe(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Re(e,t){return Le(Ne(e),Ne(t))}function Ne(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function Le(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Me(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ee(e),Ee(null!=t?t:{})):t}function je(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=De(e[r],t[r]);return n}function Fe(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $e=0;function Ue(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Fe(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:$e++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,i.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(i,o,a){if(!l){0;const c=u._ceVNode||tn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,i):e(c,i,a),l=!0,u._container=i,i.__vue_app__=u,Nn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(o(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=Ve;Ve=u;try{return e()}finally{Ve=t}}};return u}}let Ve=null;function Be(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function He(e,t,n=!1){const r=vn||S;if(r||Ve){const s=Ve?Ve._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const ze={},We=()=>Object.create(ze),Ke=e=>Object.getPrototypeOf(e)===ze;function qe(e,t,n,i=!1){const s={},o=We();e.propsDefaults=Object.create(null),Ye(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ge(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ye(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Xe(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Ot(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=Xe(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function Ye(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:Ot(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Xe(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return l}function Xe(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=wn(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Ze=new WeakMap;function Je(e,t,n=!1){const r=n?Ze:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=Je(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);Qe(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(Qe(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let l=!1,u=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=l,r[1]=u,(l||(0,i.$3)(r,"default"))&&c.push(t)}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function Qe(e){return"$"!==e[0]&&!(0,i.SU)(e)}const et=e=>"_"===e[0]||"$stable"===e,tt=e=>(0,i.cy)(e)?e.map(ln):[ln(e)],nt=(e,t,n)=>{if(t._n)return t;const r=O(((...e)=>tt(t(...e))),n);return r._c=!1,r},rt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(et(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=nt(s,n,r);else if(null!=n){0;const e=tt(n);t[s]=()=>e}}},it=(e,t)=>{const n=tt(t);e.slots.default=()=>n},st=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},ot=(e,t,n)=>{const r=e.slots=We();if(32&e.vnode.shapeFlag){const e=t._;e?(st(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):rt(t,r)}else t&&it(e,t)},at=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:st(s,t,n):(o=!t.$stable,rt(t,s)),a=t}else t&&(it(e,t),a={default:1});if(o)for(const i in s)et(i)||null!=a[i]||delete s[i]};function ct(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const lt=Mt;function ut(e){return ht(e)}function ht(e,t){ct();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zt(e,t)&&(r=Q(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Ft:_(e,t,n,r);break;case $t:b(e,t,n,r);break;case Ut:null==e&&I(t,n,r,o);break;case jt:L(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ne)}null!=u&&i&&z(u,e&&e.ref,s,t||e,!t)},_=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?C(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},C=(e,t,n,r,o,l,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,l,g&&g.is,g),8&m?d(f,e.children):16&m&&k(e.children,f,null,r,o,dt(e,l),u,h),y&&P(e,null,r,"created"),O(f,e,e.scopeId,u,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(f,e,null,g[e],l,r);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&fn(p,r,e)}y&&P(e,null,r,"beforeMount");const _=pt(o,v);_&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||_||y)&&lt((()=>{p&&fn(p,r,e),_&&v.enter(f),y&&P(e,null,r,"mounted")}),o)},O=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n||Lt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?un(e[l]):ln(e[l]);v(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&ft(n,!1),(m=g.onVnodeBeforeUpdate)&&fn(m,n,t,e),f&&P(t,e,n,"beforeUpdate"),n&&ft(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(l,""),h?N(e.dynamicChildren,h,l,n,r,dt(t,s),o):c||V(e,t,l,null,n,r,dt(t,s),o,!1),u>0){if(16&u)D(l,p,g,n,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=g[r];o===i&&"value"!==r||a(l,r,i,o,s,n)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||D(l,p,g,n,s);((m=g.onVnodeUpdated)||f)&&lt((()=>{m&&fn(m,n,t,e),f&&P(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===jt||!Zt(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,i,s,o,!0)}},D=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],l=t[o];c!==l&&"value"!==o&&a(e,o,l,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},L=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),k(t.children||[],n,d,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&gt(e,t,!0)):V(e,t,n,d,i,o,a,c,u)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):F(e,t,c)},j=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(K(e)&&(a.ctx.renderer=ne),Cn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,$,o),!e.el){const e=a.subTree=tn($t);b(null,e,t,n)}}else $(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(Rt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},$=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:u}=e;{const n=vt(e);if(n)return t&&(t.el=u.el,U(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,ft(e,!1),t?(t.el=u.el,U(e,t,c)):t=u,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&fn(h,s,t,u),ft(e,!0);const p=kt(e);0;const g=e.subTree;e.subTree=p,v(g,p,f(g.el),Q(g),e,o,a),t.el=p.el,null===d&&Dt(e,p.el),r&&lt(r,o),(h=t.props&&t.props.onVnodeUpdated)&&lt((()=>fn(h,s,t,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d,root:f,type:p}=e,g=W(t);if(ft(e,!1),u&&(0,i.DY)(u),!g&&(r=l&&l.onVnodeBeforeMount)&&fn(r,d,t),ft(e,!0),c&&ie){const t=()=>{e.subTree=kt(e),ie(c,e.subTree,e,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=kt(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&lt(h,o),!g&&(r=l&&l.onVnodeMounted)){const e=t;lt((()=>fn(r,d,e)),o)}(256&t.shapeFlag||d&&W(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&lt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new r.X2(l);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>y(d),ft(e,!0),h()},U=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ge(e,t.props,i,n),at(e,t.children,n),(0,r.C4)(),w(e),(0,r.bl)()},V=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(l,h,n,r,i,s,o,a,c);if(256&f)return void B(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&J(l,i,s),h!==l&&d(n,h)):16&u?16&p?H(l,h,n,r,i,s,o,a,c):J(l,i,s,!0):(8&u&&d(n,""),16&p&&k(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?un(t[f]):ln(t[f]);v(e[f],r,n,null,s,o,a,c,l)}u>h?J(e,s,o,!0,!1,d):k(t,n,r,s,o,a,c,l,d)},H=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?un(t[u]):ln(t[u]);if(!Zt(r,i))break;v(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?un(t[f]):ln(t[f]);if(!Zt(r,i))break;v(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)v(null,t[u]=l?un(t[u]):ln(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)G(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=l?un(t[u]):ln(t[u]);null!=e.key&&m.set(e.key,u)}let y,_=0;const b=f-g+1;let w=!1,E=0;const I=new Array(b);for(u=0;u<b;u++)I[u]=0;for(u=p;u<=d;u++){const r=e[u];if(_>=b){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===I[y-g]&&Zt(r,t[y])){i=y;break}void 0===i?G(r,s,o,!0):(I[i-g]=u+1,i>=E?E=i:w=!0,v(r,t[i],n,null,s,o,a,c,l),_++)}const T=w?mt(I):i.Oj;for(y=T.length-1,u=b-1;u>=0;u--){const e=g+u,i=t[e],d=e+1<h?t[e+1].el:r;0===I[u]?v(null,i,n,d,s,o,a,c,l):w&&(y<0||u!==T[y]?q(i,n,d,2):y--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===jt){s(o,t,n);for(let e=0;e<l.length;e++)q(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ut)return void T(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),lt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&z(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,g=!W(e);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&fn(m,t,e),6&u)Z(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&P(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,r):l&&!l.hasOnce&&(s!==jt||h>0&&64&h)?J(l,t,n,!1,!0):(s===jt&&384&h||!i&&16&u)&&J(c,t,n),r&&Y(e)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&lt((()=>{m&&fn(m,t,e),p&&P(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===jt)return void X(n,r);if(t===Ut)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},X=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Z=(e,t,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:l,a:u}=e;yt(l),yt(u),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,G(a,e,t,n)),c&&lt(c,t),lt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},Q=e=>{if(6&e.shapeFlag)return Q(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[x];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,w(),E(),ee=!1)},ne={p:v,um:G,m:q,r:Y,mt:j,mc:k,pc:V,pbc:N,n:Q,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:Ue(te,re)}}function dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=un(s[i]),t.el=e.el),n||-2===t.patchFlag||gt(e,t)),t.type===Ft&&(t.el=e.el)}}function mt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function vt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vt(t)}function yt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _t=Symbol.for("v-scx"),bt=()=>{{const e=He(_t);return e}};function wt(e,t,n){return Et(e,t,n)}function Et(e,t,n=i.MZ){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,i.X$)({},n);const h=t&&s||!t&&"post"!==c;let d;if(An)if("sync"===c){const e=bt();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const f=vn;u.call=(e,t,n)=>o(e,f,t,n);let p=!1;"post"===c?u.scheduler=e=>{lt(e,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(e,t)=>{t?e():y(e)}),u.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const g=(0,r.wB)(e,t,u);return An&&(d?d.push(g):h&&g()),g}function It(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?Tt(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=wn(this),c=Et(s,o.bind(r),n);return a(),c}function Tt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const St=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function At(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&St(r,t.slice(7));let l;c&&(c.trim&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(s=n.map(i.bB)));let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&o(u,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function Ct(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Ct(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function Ot(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function kt(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=C(e);let _,b;try{if(4&n.shapeFlag){const e=s||r,t=e;_=ln(h.call(t,e,d,f,g,p,m)),b=l}else{const e=t;0,_=ln(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),b=t.props?l:Pt(l)}}catch(E){Vt.length=0,a(E,e,1),_=tn($t)}let w=_;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(o&&e.some(i.CP)&&(b=xt(b,o)),w=sn(w,b,!1,!0))}return n.dirs&&(w=sn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&U(w,n.transition),_=w,C(y),_}const Pt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},xt=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Rt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Nt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Nt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ot(l,n))return!0}}return!1}function Nt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ot(n,s))return!0}return!1}function Dt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Lt=e=>e.__isSuspense;function Mt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):b(e)}const jt=Symbol.for("v-fgt"),Ft=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Ut=Symbol.for("v-stc"),Vt=[];let Bt=null;function Ht(e=!1){Vt.push(Bt=e?null:[])}function zt(){Vt.pop(),Bt=Vt[Vt.length-1]||null}let Wt=1;function Kt(e,t=!1){Wt+=e,e<0&&Bt&&t&&(Bt.hasOnce=!0)}function qt(e){return e.dynamicChildren=Wt>0?Bt||i.Oj:null,zt(),Wt>0&&Bt&&Bt.push(e),e}function Gt(e,t,n,r,i,s){return qt(en(e,t,n,r,i,s,!0))}function Yt(e,t,n,r,i){return qt(tn(e,t,n,r,i,!0))}function Xt(e){return!!e&&!0===e.__v_isVNode}function Zt(e,t){return e.type===t.type&&e.key===t.key}const Jt=({key:e})=>null!=e?e:null,Qt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:S,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,r=0,s=null,o=(e===jt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jt(t),ref:t&&Qt(t),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(hn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Wt>0&&!a&&Bt&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Bt.push(l),l}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==pe||(e=$t),Xt(e)){const r=sn(e,t,!0);return n&&hn(r,n),Wt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag=-2,r}if(Ln(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Lt(e)?128:R(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,r.ju)(e)||Ke(e)?(0,i.X$)({},e):e:null}function sn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?dn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Jt(u),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(Qt(t)):[o,Qt(t)]:Qt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&U(h,l.clone(h)),h}function on(e=" ",t=0){return tn(Ft,null,e,t)}function an(e,t){const n=tn(Ut,null,e);return n.staticCount=t,n}function cn(e="",t=!1){return t?(Ht(),Yt($t,null,e)):tn($t,null,e)}function ln(e){return null==e||"boolean"===typeof e?tn($t):(0,i.cy)(e)?tn(jt,null,e.slice()):Xt(e)?un(e):tn(Ft,null,String(e))}function un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function hn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Ke(t)?3===r&&S&&(1===S.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=S}}else(0,i.Tn)(t)?(t={default:t,_ctx:S},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){o(e,t,7,[n,r])}const pn=Fe();let gn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:gn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Je(s,o),emitsOptions:Ct(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=At.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const yn=()=>vn||S;let _n,bn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};_n=t("__VUE_INSTANCE_SETTERS__",(e=>vn=e)),bn=t("__VUE_SSR_SETTERS__",(e=>An=e))}const wn=e=>{const t=vn;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},En=()=>{vn&&vn.scope.off(),_n(null)};function In(e){return 4&e.vnode.shapeFlag}let Tn,Sn,An=!1;function Cn(e,t=!1,n=!1){t&&bn(t);const{props:r,children:i}=e.vnode,s=In(e);qe(e,r,s,t),ot(e,i,n);const o=s?On(e,t):void 0;return t&&bn(!1),o}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,we);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?Rn(e):null,c=wn(e),l=s(o,e,0,[e.props,n]),u=(0,i.yL)(l);if((0,r.bl)(),c(),!u&&!e.sp||W(e)||H(e),u){if(l.then(En,En),t)return l.then((n=>{kn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else kn(e,l,t)}else Pn(e,t)}function kn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Pn(e,n)}function Pn(e,t,n){const s=e.type;if(!e.render){if(!t&&Tn&&!s.render){const t=s.template||Oe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Tn(t,c)}}e.render=s.render||i.tE,Sn&&Sn(e)}{const t=wn(e);(0,r.C4)();try{Te(e)}finally{(0,r.bl)(),t()}}}const xn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Rn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,xn),slots:e.slots,emit:e.emit,expose:t}}function Nn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in _e?_e[n](e):void 0},has(e,t){return t in e||t in _e}})):e.proxy}function Dn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Ln(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Mn=(e,t)=>{const n=(0,r.EW)(e,t,An);return n};function jn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Xt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Xt(n)&&(n=[n]),tn(e,t,n))}const Fn="3.5.13"},5130:function(e,t,n){"use strict";n.d(t,{D$:function(){return oe},Ef:function(){return ue},hp:function(){return te}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(fe){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const _=/(^|;)\s*display\s*:/;function b(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(r,t,"")}else for(const e in t)null==n[e]&&E(r,e,"");for(const e in n)"display"===e&&(o=!0),E(r,e,n[e])}else if(s){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,o=_.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=o?r.display:"",e[v]&&(r.display="none"))}const w=/\s*!important$/;function E(e,t,n){if((0,i.cy)(n))n.forEach((n=>E(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=S(e,t);w.test(n)?e.setProperty((0,i.Tg)(r),n.replace(w,""),"important"):e[r]=n}}const I=["Webkit","Moz","ms"],T={};function S(e,t){const n=T[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return T[t]=r;r=(0,i.ZH)(r);for(let i=0;i<I.length;i++){const n=I[i]+r;if(n in e)return T[t]=n}return t}const A="http://www.w3.org/1999/xlink";function C(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(A,t.slice(6,t.length)):e.setAttributeNS(A,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function O(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(fe){0}c&&e.removeAttribute(s||t)}function k(e,t,n,r){e.addEventListener(t,n,r)}function P(e,t,n,r){e.removeEventListener(t,n,r)}const x=Symbol("_vei");function R(e,t,n,r,i=null){const s=e[x]||(e[x]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=D(t);if(r){const o=s[t]=F(r,i);k(e,n,o,a)}else o&&(P(e,n,o,a),s[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function D(e){let t;if(N.test(e)){let n;t={};while(n=e.match(N))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let L=0;const M=Promise.resolve(),j=()=>L||(M.then((()=>L=0)),L=Date.now());function F(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)($(e,n.value),t,5,[e])};return n.value=e,n.attached=j(),n}function $(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const U=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,V=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?g(e,r,a):"style"===t?b(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||R(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):B(e,t,r,a))?(O(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||C(e,t,r,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),C(e,t,r,a)):O(e,(0,i.PT)(t),r,o,t)};function B(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&U(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!U(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const H=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function z(e){e.target.composing=!0}function W(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const K=Symbol("_assign"),q={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[K]=H(s);const o=r||s.props&&"number"===s.props.type;k(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[K](r)})),n&&k(e,"change",(()=>{e.value=e.value.trim()})),t||(k(e,"compositionstart",z),k(e,"compositionend",W),k(e,"change",W))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(e[K]=H(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===l)return}e.value=l}}},G={deep:!0,created(e,t,n){e[K]=H(n),k(e,"change",(()=>{const t=e._modelValue,n=Q(e),r=e.checked,s=e[K];if((0,i.cy)(t)){const e=(0,i.u3)(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,i.vM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(ee(e,r))}))},mounted:Y,beforeUpdate(e,t,n){e[K]=H(n),Y(e,t,n)}};function Y(e,{value:t,oldValue:n},r){let s;if(e._modelValue=t,(0,i.cy)(t))s=(0,i.u3)(t,r.props.value)>-1;else if((0,i.vM)(t))s=t.has(r.props.value);else{if(t===n)return;s=(0,i.BX)(t,ee(e,!0))}e.checked!==s&&(e.checked=s)}const X={created(e,{value:t},n){e.checked=(0,i.BX)(t,n.props.value),e[K]=H(n),k(e,"change",(()=>{e[K](Q(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e[K]=H(r),t!==n&&(e.checked=(0,i.BX)(t,r.props.value))}},Z={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);k(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(Q(e)):Q(e)));e[K](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[K]=H(s)},mounted(e,{value:t}){J(e,t)},beforeUpdate(e,t,n){e[K]=H(n)},updated(e,{value:t}){e._assigning||J(e,t)}};function J(e,t){const n=e.multiple,r=(0,i.cy)(t);if(!n||r||(0,i.vM)(t)){for(let s=0,o=e.options.length;s<o;s++){const o=e.options[s],a=Q(o);if(n)if(r){const e=typeof a;o.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,i.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,i.BX)(Q(o),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Q(e){return"_value"in e?e._value:e.value}function ee(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const te={created(e,t,n){re(e,t,n,null,"created")},mounted(e,t,n){re(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){re(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){re(e,t,n,r,"updated")}};function ne(e,t){switch(e){case"SELECT":return Z;case"TEXTAREA":return q;default:switch(t){case"checkbox":return G;case"radio":return X;default:return q}}}function re(e,t,n,r,i){const s=ne(e.tagName,n.props&&n.props.type),o=s[i];o&&o(e,t,n,r)}const ie=["ctrl","shift","alt","meta"],se={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ie.some((n=>e[`${n}Key`]&&!t.includes(n)))},oe=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=se[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ae=(0,i.X$)({patchProp:V},d);let ce;function le(){return ce||(ce=(0,r.K9)(ae))}const ue=(...e)=>{const t=le().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=de(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,he(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function he(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function de(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){"use strict";n.d(t,{$3:function(){return f},$H:function(){return j},BH:function(){return W},BX:function(){return ne},Bm:function(){return w},C4:function(){return Z},CE:function(){return g},CP:function(){return l},DY:function(){return F},Gv:function(){return E},J$:function(){return Q},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return R},Qd:function(){return C},Ro:function(){return V},SU:function(){return k},TF:function(){return h},Tg:function(){return D},Tn:function(){return _},Tr:function(){return K},We:function(){return H},X$:function(){return u},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return A},bB:function(){return U},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return se},yI:function(){return O},yL:function(){return I},yQ:function(){return $}});n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),_=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,I=e=>(E(e)||_(e))&&_(e.then)&&_(e.catch),T=Object.prototype.toString,S=e=>T.call(e),A=e=>S(e).slice(8,-1),C=e=>"[object Object]"===S(e),O=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,k=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},x=/-(\w)/g,R=P((e=>e.replace(x,((e,t)=>t?t.toUpperCase():"")))),N=/\B([A-Z])/g,D=P((e=>e.replace(N,"-$1").toLowerCase())),L=P((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=P((e=>{const t=e?`on${L(e)}`:"";return t})),j=(e,t)=>!Object.is(e,t),F=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const H=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",W=r(z);function K(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?X(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||E(e))return e}const q=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Y,"").split(q).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Z(e){let t="";if(b(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Z(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),se=e=>b(e)?e:null==e?"":p(e)||E(e)&&(e.toString===T||!_(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:w(t)?ae(t):!E(t)||p(t)||C(t)?t:String(t),ae=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},323:function(e,t,n){n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),function(t,n){e.exports=n()}(0,(function(){"use strict";const e=new Map,t={set(t,n,r){e.has(t)||e.set(t,new Map);const i=e.get(t);i.has(n)||0===i.size?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}},n="transitionend",r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),i=e=>{e.dispatchEvent(new Event(n))},s=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>s(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(r(e)):null,a=e=>{if(!s(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},c=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),l=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?l(e.parentNode):null},u=()=>{},h=e=>{e.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=e=>{var t;t=()=>{const t=d();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of f)e()})),f.push(t)):t()},m=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,v=(e,t,r=!0)=>{if(!r)return void m(e);const s=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const a=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,a),m(e))};t.addEventListener(n,a),setTimeout((()=>{o||i(t)}),s)},y=(e,t,n,r)=>{const i=e.length;let s=e.indexOf(t);return-1===s?!n&&r?e[i-1]:e[0]:(s+=n?1:-1,r&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},_=/[^.]*(?=\..*)\.|.*/,b=/\..*/,w=/::\d+$/,E={};let I=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(e,t){return t&&`${t}::${I++}`||e.uidEvent||I++}function C(e){const t=A(e);return e.uidEvent=t,E[t]=E[t]||{},E[t]}function O(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function k(e,t,n){const r="string"==typeof t,i=r?n:t||n;let s=N(e);return S.has(s)||(s=e),[r,i,s]}function P(e,t,n,r,i){if("string"!=typeof t||!e)return;let[s,o,a]=k(t,n,r);if(t in T){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=C(e),l=c[a]||(c[a]={}),u=O(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=A(o,t.replace(_,"")),d=s?function(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return L(i,{delegateTarget:o}),r.oneOff&&D.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return L(r,{delegateTarget:e}),n.oneOff&&D.off(e,r.type,t),t.apply(e,[r])}}(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function x(e,t,n,r,i){const s=O(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function R(e,t,n,r){const i=t[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&x(e,t,n,o.callable,o.delegationSelector)}function N(e){return e=e.replace(b,""),T[e]||e}const D={on(e,t,n,r){P(e,t,n,r,!1)},one(e,t,n,r){P(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[i,s,o]=k(t,n,r),a=o!==t,c=C(e),l=c[o]||{},u=t.startsWith(".");if(void 0===s){if(u)for(const n of Object.keys(c))R(e,c,n,t.slice(1));for(const[n,r]of Object.entries(l)){const i=n.replace(w,"");a&&!t.includes(i)||x(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;x(e,c,o,s,i?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=d();let i=null,s=!0,o=!0,a=!1;t!==N(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),s=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());const c=L(new Event(t,{bubbles:s,cancelable:!0}),n);return a&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function L(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function M(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function j(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const F={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${j(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${j(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=M(e.dataset[r])}return t},getDataAttribute:(e,t)=>M(e.getAttribute(`data-bs-${j(t)}`))};class ${static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=s(t)?F.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...s(t)?F.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,i]of Object.entries(t)){const t=e[r],o=s(t)?"element":null==(n=t)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)}var n}}class U extends ${constructor(e,n){super(),(e=o(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),D.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){v(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(o(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const V=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map((e=>r(e))).join(","):null},B={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!c(e)&&a(e)))},getSelectorFromElement(e){const t=V(e);return t&&B.findOne(t)?t:null},getElementFromSelector(e){const t=V(e);return t?B.findOne(t):null},getMultipleElementsFromSelector(e){const t=V(e);return t?B.find(t):[]}},H=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;D.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),c(this))return;const i=B.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()}))},z=".bs.alert",W=`close${z}`,K=`closed${z}`;class q extends U{static get NAME(){return"alert"}close(){if(D.trigger(this._element,W).defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),D.trigger(this._element,K),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=q.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}H(q,"close"),g(q);const G='[data-bs-toggle="button"]';class Y extends U{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=Y.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}D.on(document,"click.bs.button.data-api",G,(e=>{e.preventDefault();const t=e.target.closest(G);Y.getOrCreateInstance(t).toggle()})),g(Y);const X=".bs.swipe",Z=`touchstart${X}`,J=`touchmove${X}`,Q=`touchend${X}`,ee=`pointerdown${X}`,te=`pointerup${X}`,ne={endCallback:null,leftCallback:null,rightCallback:null},re={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ie extends ${constructor(e,t){super(),this._element=e,e&&ie.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ne}static get DefaultType(){return re}static get NAME(){return"swipe"}dispose(){D.off(this._element,X)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&m(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(D.on(this._element,ee,(e=>this._start(e))),D.on(this._element,te,(e=>this._end(e))),this._element.classList.add("pointer-event")):(D.on(this._element,Z,(e=>this._start(e))),D.on(this._element,J,(e=>this._move(e))),D.on(this._element,Q,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const se=".bs.carousel",oe=".data-api",ae="next",ce="prev",le="left",ue="right",he=`slide${se}`,de=`slid${se}`,fe=`keydown${se}`,pe=`mouseenter${se}`,ge=`mouseleave${se}`,me=`dragstart${se}`,ve=`load${se}${oe}`,ye=`click${se}${oe}`,_e="carousel",be="active",we=".active",Ee=".carousel-item",Ie=we+Ee,Te={ArrowLeft:ue,ArrowRight:le},Se={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ae={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ce extends U{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=B.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===_e&&this.cycle()}static get Default(){return Se}static get DefaultType(){return Ae}static get NAME(){return"carousel"}next(){this._slide(ae)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(ce)}pause(){this._isSliding&&i(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?D.one(this._element,de,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void D.one(this._element,de,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?ae:ce;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&D.on(this._element,fe,(e=>this._keydown(e))),"hover"===this._config.pause&&(D.on(this._element,pe,(()=>this.pause())),D.on(this._element,ge,(()=>this._maybeEnableCycle()))),this._config.touch&&ie.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of B.find(".carousel-item img",this._element))D.on(t,me,(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder(le)),rightCallback:()=>this._slide(this._directionToOrder(ue)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new ie(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Te[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=B.findOne(we,this._indicatorsElement);t.classList.remove(be),t.removeAttribute("aria-current");const n=B.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(be),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),r=e===ae,i=t||y(this._getItems(),n,r,this._config.wrap);if(i===n)return;const s=this._getItemIndex(i),o=t=>D.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s});if(o(he).defaultPrevented)return;if(!n||!i)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const c=r?"carousel-item-start":"carousel-item-end",l=r?"carousel-item-next":"carousel-item-prev";i.classList.add(l),h(i),n.classList.add(c),i.classList.add(c),this._queueCallback((()=>{i.classList.remove(c,l),i.classList.add(be),n.classList.remove(be,l,c),this._isSliding=!1,o(de)}),n,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return B.findOne(Ie,this._element)}_getItems(){return B.find(Ee,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return p()?e===le?ce:ae:e===le?ae:ce}_orderToDirection(e){return p()?e===ce?le:ue:e===ce?ue:le}static jQueryInterface(e){return this.each((function(){const t=Ce.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}D.on(document,ye,"[data-bs-slide], [data-bs-slide-to]",(function(e){const t=B.getElementFromSelector(this);if(!t||!t.classList.contains(_e))return;e.preventDefault();const n=Ce.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),D.on(window,ve,(()=>{const e=B.find('[data-bs-ride="carousel"]');for(const t of e)Ce.getOrCreateInstance(t)})),g(Ce);const Oe=".bs.collapse",ke=`show${Oe}`,Pe=`shown${Oe}`,xe=`hide${Oe}`,Re=`hidden${Oe}`,Ne=`click${Oe}.data-api`,De="show",Le="collapse",Me="collapsing",je=`:scope .${Le} .${Le}`,Fe='[data-bs-toggle="collapse"]',$e={parent:null,toggle:!0},Ue={parent:"(null|element)",toggle:"boolean"};class Ve extends U{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=B.find(Fe);for(const r of n){const e=B.getSelectorFromElement(r),t=B.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return $e}static get DefaultType(){return Ue}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>Ve.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(D.trigger(this._element,ke).defaultPrevented)return;for(const r of e)r.hide();const t=this._getDimension();this._element.classList.remove(Le),this._element.classList.add(Me),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Me),this._element.classList.add(Le,De),this._element.style[t]="",D.trigger(this._element,Pe)}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(D.trigger(this._element,xe).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,h(this._element),this._element.classList.add(Me),this._element.classList.remove(Le,De);for(const t of this._triggerArray){const e=B.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Me),this._element.classList.add(Le),D.trigger(this._element,Re)}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(De)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=o(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Fe);for(const t of e){const e=B.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=B.find(je,this._config.parent);return B.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Ve.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}D.on(document,Ne,Fe,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of B.getMultipleElementsFromSelector(this))Ve.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(Ve);var Be="top",He="bottom",ze="right",We="left",Ke="auto",qe=[Be,He,ze,We],Ge="start",Ye="end",Xe="clippingParents",Ze="viewport",Je="popper",Qe="reference",et=qe.reduce((function(e,t){return e.concat([t+"-"+Ge,t+"-"+Ye])}),[]),tt=[].concat(qe,[Ke]).reduce((function(e,t){return e.concat([t,t+"-"+Ge,t+"-"+Ye])}),[]),nt="beforeRead",rt="read",it="afterRead",st="beforeMain",ot="main",at="afterMain",ct="beforeWrite",lt="write",ut="afterWrite",ht=[nt,rt,it,st,ot,at,ct,lt,ut];function dt(e){return e?(e.nodeName||"").toLowerCase():null}function ft(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function pt(e){return e instanceof ft(e).Element||e instanceof Element}function gt(e){return e instanceof ft(e).HTMLElement||e instanceof HTMLElement}function mt(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ft(e).ShadowRoot||e instanceof ShadowRoot)}const vt={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];gt(i)&&dt(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});gt(r)&&dt(r)&&(Object.assign(r.style,s),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function yt(e){return e.split("-")[0]}var _t=Math.max,bt=Math.min,wt=Math.round;function Et(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function It(){return!/^((?!chrome|android).)*safari/i.test(Et())}function Tt(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,s=1;t&&gt(e)&&(i=e.offsetWidth>0&&wt(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&wt(r.height)/e.offsetHeight||1);var o=(pt(e)?ft(e):window).visualViewport,a=!It()&&n,c=(r.left+(a&&o?o.offsetLeft:0))/i,l=(r.top+(a&&o?o.offsetTop:0))/s,u=r.width/i,h=r.height/s;return{width:u,height:h,top:l,right:c+u,bottom:l+h,left:c,x:c,y:l}}function St(e){var t=Tt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function At(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&mt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ct(e){return ft(e).getComputedStyle(e)}function Ot(e){return["table","td","th"].indexOf(dt(e))>=0}function kt(e){return((pt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Pt(e){return"html"===dt(e)?e:e.assignedSlot||e.parentNode||(mt(e)?e.host:null)||kt(e)}function xt(e){return gt(e)&&"fixed"!==Ct(e).position?e.offsetParent:null}function Rt(e){for(var t=ft(e),n=xt(e);n&&Ot(n)&&"static"===Ct(n).position;)n=xt(n);return n&&("html"===dt(n)||"body"===dt(n)&&"static"===Ct(n).position)?t:n||function(e){var t=/firefox/i.test(Et());if(/Trident/i.test(Et())&&gt(e)&&"fixed"===Ct(e).position)return null;var n=Pt(e);for(mt(n)&&(n=n.host);gt(n)&&["html","body"].indexOf(dt(n))<0;){var r=Ct(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function Nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Dt(e,t,n){return _t(e,bt(t,n))}function Lt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Mt(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const jt={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=e.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=yt(n.placement),c=Nt(a),l=[We,ze].indexOf(a)>=0?"height":"width";if(s&&o){var u=function(e,t){return Lt("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Mt(e,qe))}(i.padding,n),h=St(s),d="y"===c?Be:We,f="y"===c?He:ze,p=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],g=o[c]-n.rects.reference[c],m=Rt(s),v=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,y=p/2-g/2,_=u[d],b=v-h[l]-u[f],w=v/2-h[l]/2+y,E=Dt(_,w,b),I=c;n.modifiersData[r]=((t={})[I]=E,t.centerOffset=E-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&At(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ft(e){return e.split("-")[1]}var $t={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ut(e){var t,n=e.popper,r=e.popperRect,i=e.placement,s=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,h=e.isFixed,d=o.x,f=void 0===d?0:d,p=o.y,g=void 0===p?0:p,m="function"==typeof u?u({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var v=o.hasOwnProperty("x"),y=o.hasOwnProperty("y"),_=We,b=Be,w=window;if(l){var E=Rt(n),I="clientHeight",T="clientWidth";E===ft(n)&&"static"!==Ct(E=kt(n)).position&&"absolute"===a&&(I="scrollHeight",T="scrollWidth"),(i===Be||(i===We||i===ze)&&s===Ye)&&(b=He,g-=(h&&E===w&&w.visualViewport?w.visualViewport.height:E[I])-r.height,g*=c?1:-1),i!==We&&(i!==Be&&i!==He||s!==Ye)||(_=ze,f-=(h&&E===w&&w.visualViewport?w.visualViewport.width:E[T])-r.width,f*=c?1:-1)}var S,A=Object.assign({position:a},l&&$t),C=!0===u?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:wt(n*i)/i||0,y:wt(r*i)/i||0}}({x:f,y:g},ft(n)):{x:f,y:g};return f=C.x,g=C.y,c?Object.assign({},A,((S={})[b]=y?"0":"",S[_]=v?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",S)):Object.assign({},A,((t={})[b]=y?g+"px":"",t[_]=v?f+"px":"",t.transform="",t))}const Vt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:yt(t.placement),variation:Ft(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ut(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ut(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var Bt={passive:!0};const Ht={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=ft(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,Bt)})),a&&c.addEventListener("resize",n.update,Bt),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,Bt)})),a&&c.removeEventListener("resize",n.update,Bt)}},data:{}};var zt={left:"right",right:"left",bottom:"top",top:"bottom"};function Wt(e){return e.replace(/left|right|bottom|top/g,(function(e){return zt[e]}))}var Kt={start:"end",end:"start"};function qt(e){return e.replace(/start|end/g,(function(e){return Kt[e]}))}function Gt(e){var t=ft(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Yt(e){return Tt(kt(e)).left+Gt(e).scrollLeft}function Xt(e){var t=Ct(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Zt(e){return["html","body","#document"].indexOf(dt(e))>=0?e.ownerDocument.body:gt(e)&&Xt(e)?e:Zt(Pt(e))}function Jt(e,t){var n;void 0===t&&(t=[]);var r=Zt(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=ft(r),o=i?[s].concat(s.visualViewport||[],Xt(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Jt(Pt(o)))}function Qt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function en(e,t,n){return t===Ze?Qt(function(e,t){var n=ft(e),r=kt(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=It();(l||!l&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+Yt(e),y:c}}(e,n)):pt(t)?function(e,t){var n=Tt(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):Qt(function(e){var t,n=kt(e),r=Gt(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=_t(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=_t(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Yt(e),c=-r.scrollTop;return"rtl"===Ct(i||n).direction&&(a+=_t(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}(kt(e)))}function tn(e){var t,n=e.reference,r=e.element,i=e.placement,s=i?yt(i):null,o=i?Ft(i):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(s){case Be:t={x:a,y:n.y-r.height};break;case He:t={x:a,y:n.y+n.height};break;case ze:t={x:n.x+n.width,y:c};break;case We:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=s?Nt(s):null;if(null!=l){var u="y"===l?"height":"width";switch(o){case Ge:t[l]=t[l]-(n[u]/2-r[u]/2);break;case Ye:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function nn(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,s=n.strategy,o=void 0===s?e.strategy:s,a=n.boundary,c=void 0===a?Xe:a,l=n.rootBoundary,u=void 0===l?Ze:l,h=n.elementContext,d=void 0===h?Je:h,f=n.altBoundary,p=void 0!==f&&f,g=n.padding,m=void 0===g?0:g,v=Lt("number"!=typeof m?m:Mt(m,qe)),y=d===Je?Qe:Je,_=e.rects.popper,b=e.elements[p?y:d],w=function(e,t,n,r){var i="clippingParents"===t?function(e){var t=Jt(Pt(e)),n=["absolute","fixed"].indexOf(Ct(e).position)>=0&&gt(e)?Rt(e):e;return pt(n)?t.filter((function(e){return pt(e)&&At(e,n)&&"body"!==dt(e)})):[]}(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce((function(t,n){var i=en(e,n,r);return t.top=_t(i.top,t.top),t.right=bt(i.right,t.right),t.bottom=bt(i.bottom,t.bottom),t.left=_t(i.left,t.left),t}),en(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(pt(b)?b:b.contextElement||kt(e.elements.popper),c,u,o),E=Tt(e.elements.reference),I=tn({reference:E,element:_,strategy:"absolute",placement:i}),T=Qt(Object.assign({},_,I)),S=d===Je?T:E,A={top:w.top-S.top+v.top,bottom:S.bottom-w.bottom+v.bottom,left:w.left-S.left+v.left,right:S.right-w.right+v.right},C=e.modifiersData.offset;if(d===Je&&C){var O=C[i];Object.keys(A).forEach((function(e){var t=[ze,He].indexOf(e)>=0?1:-1,n=[Be,He].indexOf(e)>=0?"y":"x";A[e]+=O[n]*t}))}return A}function rn(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?tt:c,u=Ft(r),h=u?a?et:et.filter((function(e){return Ft(e)===u})):qe,d=h.filter((function(e){return l.indexOf(e)>=0}));0===d.length&&(d=h);var f=d.reduce((function(t,n){return t[n]=nn(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[yt(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}const sn={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,g=n.allowedAutoPlacements,m=t.options.placement,v=yt(m),y=c||(v!==m&&p?function(e){if(yt(e)===Ke)return[];var t=Wt(e);return[qt(e),t,qt(t)]}(m):[Wt(m)]),_=[m].concat(y).reduce((function(e,n){return e.concat(yt(n)===Ke?rn(t,{placement:n,boundary:u,rootBoundary:h,padding:l,flipVariations:p,allowedAutoPlacements:g}):n)}),[]),b=t.rects.reference,w=t.rects.popper,E=new Map,I=!0,T=_[0],S=0;S<_.length;S++){var A=_[S],C=yt(A),O=Ft(A)===Ge,k=[Be,He].indexOf(C)>=0,P=k?"width":"height",x=nn(t,{placement:A,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),R=k?O?ze:We:O?He:Be;b[P]>w[P]&&(R=Wt(R));var N=Wt(R),D=[];if(s&&D.push(x[C]<=0),a&&D.push(x[R]<=0,x[N]<=0),D.every((function(e){return e}))){T=A,I=!1;break}E.set(A,D)}if(I)for(var L=function(e){var t=_.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},M=p?3:1;M>0&&"break"!==L(M);M--);t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function on(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function an(e){return[Be,ze,He,We].some((function(t){return e[t]>=0}))}const cn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=nn(t,{elementContext:"reference"}),a=nn(t,{altBoundary:!0}),c=on(o,r),l=on(a,i,s),u=an(c),h=an(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}},ln={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=tt.reduce((function(e,n){return e[n]=function(e,t,n){var r=yt(e),i=[We,Be].indexOf(r)>=0?-1:1,s="function"==typeof n?n(Object.assign({},t,{placement:e})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[We,ze].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}},un={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=tn({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},hn={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=void 0===d||d,p=n.tetherOffset,g=void 0===p?0:p,m=nn(t,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),v=yt(t.placement),y=Ft(t.placement),_=!y,b=Nt(v),w="x"===b?"y":"x",E=t.modifiersData.popperOffsets,I=t.rects.reference,T=t.rects.popper,S="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,A="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(E){if(s){var k,P="y"===b?Be:We,x="y"===b?He:ze,R="y"===b?"height":"width",N=E[b],D=N+m[P],L=N-m[x],M=f?-T[R]/2:0,j=y===Ge?I[R]:T[R],F=y===Ge?-T[R]:-I[R],$=t.elements.arrow,U=f&&$?St($):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},B=V[P],H=V[x],z=Dt(0,I[R],U[R]),W=_?I[R]/2-M-z-B-A.mainAxis:j-z-B-A.mainAxis,K=_?-I[R]/2+M+z+H+A.mainAxis:F+z+H+A.mainAxis,q=t.elements.arrow&&Rt(t.elements.arrow),G=q?"y"===b?q.clientTop||0:q.clientLeft||0:0,Y=null!=(k=null==C?void 0:C[b])?k:0,X=N+K-Y,Z=Dt(f?bt(D,N+W-Y-G):D,N,f?_t(L,X):L);E[b]=Z,O[b]=Z-N}if(a){var J,Q="x"===b?Be:We,ee="x"===b?He:ze,te=E[w],ne="y"===w?"height":"width",re=te+m[Q],ie=te-m[ee],se=-1!==[Be,We].indexOf(v),oe=null!=(J=null==C?void 0:C[w])?J:0,ae=se?re:te-I[ne]-T[ne]-oe+A.altAxis,ce=se?te+I[ne]+T[ne]-oe-A.altAxis:ie,le=f&&se?function(e,t,n){var r=Dt(e,t,n);return r>n?n:r}(ae,te,ce):Dt(f?ae:re,te,f?ce:ie);E[w]=le,O[w]=le-te}t.modifiersData[r]=O}},requiresIfExists:["offset"]};function dn(e,t,n){void 0===n&&(n=!1);var r,i,s=gt(t),o=gt(t)&&function(e){var t=e.getBoundingClientRect(),n=wt(t.width)/e.offsetWidth||1,r=wt(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=kt(t),c=Tt(e,o,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!n)&&(("body"!==dt(t)||Xt(a))&&(l=(r=t)!==ft(r)&&gt(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:Gt(r)),gt(t)?((u=Tt(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=Yt(a))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function fn(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}var pn={placement:"bottom",modifiers:[],strategy:"absolute"};function gn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function mn(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?pn:i;return function(e,t,n){void 0===n&&(n=s);var i,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},pn,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n;h(),a.options=Object.assign({},s,a.options,i),a.scrollParents={reference:pt(e)?Jt(e):e.contextElement?Jt(e.contextElement):[],popper:Jt(t)};var o,l,d=function(e){var t=fn(e);return ht.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(r,a.options.modifiers),l=o.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return a.orderedModifiers=d.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var s=i({state:a,name:t,instance:u,options:r});c.push(s||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,n=e.popper;if(gn(t,n)){a.rects={reference:dn(t,Rt(n),"fixed"===a.options.strategy),popper:St(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var i=a.orderedModifiers[r],s=i.fn,o=i.options,c=void 0===o?{}:o,h=i.name;"function"==typeof s&&(a=s({state:a,options:c,name:h,instance:u})||a)}else a.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(i())}))}))),o}),destroy:function(){h(),l=!0}};if(!gn(e,t))return u;function h(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var vn=mn(),yn=mn({defaultModifiers:[Ht,un,Vt,vt]}),_n=mn({defaultModifiers:[Ht,un,Vt,vt,ln,sn,hn,jt,cn]});const bn=Object.freeze(Object.defineProperty({__proto__:null,afterMain:at,afterRead:it,afterWrite:ut,applyStyles:vt,arrow:jt,auto:Ke,basePlacements:qe,beforeMain:st,beforeRead:nt,beforeWrite:ct,bottom:He,clippingParents:Xe,computeStyles:Vt,createPopper:_n,createPopperBase:vn,createPopperLite:yn,detectOverflow:nn,end:Ye,eventListeners:Ht,flip:sn,hide:cn,left:We,main:ot,modifierPhases:ht,offset:ln,placements:tt,popper:Je,popperGenerator:mn,popperOffsets:un,preventOverflow:hn,read:rt,reference:Qe,right:ze,start:Ge,top:Be,variationPlacements:et,viewport:Ze,write:lt},Symbol.toStringTag,{value:"Module"})),wn="dropdown",En=".bs.dropdown",In=".data-api",Tn="ArrowUp",Sn="ArrowDown",An=`hide${En}`,Cn=`hidden${En}`,On=`show${En}`,kn=`shown${En}`,Pn=`click${En}${In}`,xn=`keydown${En}${In}`,Rn=`keyup${En}${In}`,Nn="show",Dn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ln=`${Dn}.${Nn}`,Mn=".dropdown-menu",jn=p()?"top-end":"top-start",Fn=p()?"top-start":"top-end",$n=p()?"bottom-end":"bottom-start",Un=p()?"bottom-start":"bottom-end",Vn=p()?"left-start":"right-start",Bn=p()?"right-start":"left-start",Hn={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},zn={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Wn extends U{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=B.next(this._element,Mn)[0]||B.prev(this._element,Mn)[0]||B.findOne(Mn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Hn}static get DefaultType(){return zn}static get NAME(){return wn}toggle(){return this._isShown()?this.hide():this.show()}show(){if(c(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!D.trigger(this._element,On,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))D.on(e,"mouseover",u);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Nn),this._element.classList.add(Nn),D.trigger(this._element,kn,e)}}hide(){if(c(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!D.trigger(this._element,An,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))D.off(e,"mouseover",u);this._popper&&this._popper.destroy(),this._menu.classList.remove(Nn),this._element.classList.remove(Nn),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),D.trigger(this._element,Cn,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!s(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${wn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===bn)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:s(this._config.reference)?e=o(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=_n(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Nn)}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return Vn;if(e.classList.contains("dropstart"))return Bn;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?Fn:jn:t?Un:$n}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...m(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=B.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>a(e)));n.length&&y(n,t,e===Sn,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Wn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;const t=B.find(Ln);for(const n of t){const t=Wn.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!i||"outside"===t._config.autoClose&&i)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,r=[Tn,Sn].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const i=this.matches(Dn)?this:B.prev(this,Dn)[0]||B.next(this,Dn)[0]||B.findOne(Dn,e.delegateTarget.parentNode),s=Wn.getOrCreateInstance(i);if(r)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),i.focus())}}D.on(document,xn,Dn,Wn.dataApiKeydownHandler),D.on(document,xn,Mn,Wn.dataApiKeydownHandler),D.on(document,Pn,Wn.clearMenus),D.on(document,Rn,Wn.clearMenus),D.on(document,Pn,Dn,(function(e){e.preventDefault(),Wn.getOrCreateInstance(this).toggle()})),g(Wn);const Kn="backdrop",qn="show",Gn=`mousedown.bs.${Kn}`,Yn={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Xn={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Zn extends ${constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Yn}static get DefaultType(){return Xn}static get NAME(){return Kn}show(e){if(!this._config.isVisible)return void m(e);this._append();const t=this._getElement();this._config.isAnimated&&h(t),t.classList.add(qn),this._emulateAnimation((()=>{m(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(qn),this._emulateAnimation((()=>{this.dispose(),m(e)}))):m(e)}dispose(){this._isAppended&&(D.off(this._element,Gn),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=o(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),D.on(e,Gn,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}const Jn=".bs.focustrap",Qn=`focusin${Jn}`,er=`keydown.tab${Jn}`,tr="backward",nr={autofocus:!0,trapElement:null},rr={autofocus:"boolean",trapElement:"element"};class ir extends ${constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return nr}static get DefaultType(){return rr}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),D.off(document,Jn),D.on(document,Qn,(e=>this._handleFocusin(e))),D.on(document,er,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,D.off(document,Jn))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=B.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===tr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?tr:"forward")}}const sr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",or=".sticky-top",ar="padding-right",cr="margin-right";class lr{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ar,(t=>t+e)),this._setElementAttributes(sr,ar,(t=>t+e)),this._setElementAttributes(or,cr,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ar),this._resetElementAttributes(sr,ar),this._resetElementAttributes(or,cr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth();this._applyManipulationCallback(e,(e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)}))}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&F.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,(e=>{const n=F.getDataAttribute(e,t);null!==n?(F.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)}))}_applyManipulationCallback(e,t){if(s(e))t(e);else for(const n of B.find(e,this._element))t(n)}}const ur=".bs.modal",hr=`hide${ur}`,dr=`hidePrevented${ur}`,fr=`hidden${ur}`,pr=`show${ur}`,gr=`shown${ur}`,mr=`resize${ur}`,vr=`click.dismiss${ur}`,yr=`mousedown.dismiss${ur}`,_r=`keydown.dismiss${ur}`,br=`click${ur}.data-api`,wr="modal-open",Er="show",Ir="modal-static",Tr={backdrop:!0,focus:!0,keyboard:!0},Sr={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ar extends U{constructor(e,t){super(e,t),this._dialog=B.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new lr,this._addEventListeners()}static get Default(){return Tr}static get DefaultType(){return Sr}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||D.trigger(this._element,pr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wr),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){this._isShown&&!this._isTransitioning&&(D.trigger(this._element,hr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Er),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){D.off(window,ur),D.off(this._dialog,ur),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Zn({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ir({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=B.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),h(this._element),this._element.classList.add(Er),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,D.trigger(this._element,gr,{relatedTarget:e})}),this._dialog,this._isAnimated())}_addEventListeners(){D.on(this._element,_r,(e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),D.on(window,mr,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),D.on(this._element,yr,(e=>{D.one(this._element,vr,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(wr),this._resetAdjustments(),this._scrollBar.reset(),D.trigger(this._element,fr)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(D.trigger(this._element,dr).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;"hidden"===t||this._element.classList.contains(Ir)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Ir),this._queueCallback((()=>{this._element.classList.remove(Ir),this._queueCallback((()=>{this._element.style.overflowY=t}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=p()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=p()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Ar.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}D.on(document,br,'[data-bs-toggle="modal"]',(function(e){const t=B.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),D.one(t,pr,(e=>{e.defaultPrevented||D.one(t,fr,(()=>{a(this)&&this.focus()}))}));const n=B.findOne(".modal.show");n&&Ar.getInstance(n).hide(),Ar.getOrCreateInstance(t).toggle(this)})),H(Ar),g(Ar);const Cr=".bs.offcanvas",Or=".data-api",kr=`load${Cr}${Or}`,Pr="show",xr="showing",Rr="hiding",Nr=".offcanvas.show",Dr=`show${Cr}`,Lr=`shown${Cr}`,Mr=`hide${Cr}`,jr=`hidePrevented${Cr}`,Fr=`hidden${Cr}`,$r=`resize${Cr}`,Ur=`click${Cr}${Or}`,Vr=`keydown.dismiss${Cr}`,Br={backdrop:!0,keyboard:!0,scroll:!1},Hr={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class zr extends U{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Br}static get DefaultType(){return Hr}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||D.trigger(this._element,Dr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new lr).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xr),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Pr),this._element.classList.remove(xr),D.trigger(this._element,Lr,{relatedTarget:e})}),this._element,!0))}hide(){this._isShown&&(D.trigger(this._element,Mr).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Rr),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Pr,Rr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new lr).reset(),D.trigger(this._element,Fr)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=Boolean(this._config.backdrop);return new Zn({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{"static"!==this._config.backdrop?this.hide():D.trigger(this._element,jr)}:null})}_initializeFocusTrap(){return new ir({trapElement:this._element})}_addEventListeners(){D.on(this._element,Vr,(e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():D.trigger(this._element,jr))}))}static jQueryInterface(e){return this.each((function(){const t=zr.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}D.on(document,Ur,'[data-bs-toggle="offcanvas"]',(function(e){const t=B.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),c(this))return;D.one(t,Fr,(()=>{a(this)&&this.focus()}));const n=B.findOne(Nr);n&&n!==t&&zr.getInstance(n).hide(),zr.getOrCreateInstance(t).toggle(this)})),D.on(window,kr,(()=>{for(const e of B.find(Nr))zr.getOrCreateInstance(e).show()})),D.on(window,$r,(()=>{for(const e of B.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&zr.getOrCreateInstance(e).hide()})),H(zr),g(zr);const Wr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Kr=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),qr=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Gr=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Kr.has(n)||Boolean(qr.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))},Yr={allowList:Wr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Xr={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Zr={entry:"(string|element|function|null)",selector:"(string|element)"};class Jr extends ${constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Yr}static get DefaultType(){return Xr}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Zr)}_setContent(e,t,n){const r=B.findOne(n,e);r&&((t=this._resolvePossibleFunction(t))?s(t)?this._putElementInTemplate(o(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const r=(new window.DOMParser).parseFromString(e,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const s of i){const e=s.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){s.remove();continue}const n=[].concat(...s.attributes),r=[].concat(t["*"]||[],t[e]||[]);for(const t of n)Gr(t,r)||s.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return m(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const Qr=new Set(["sanitize","allowList","sanitizeFn"]),ei="fade",ti="show",ni=".modal",ri="hide.bs.modal",ii="hover",si="focus",oi={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},ai={allowList:Wr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ci={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class li extends U{constructor(e,t){if(void 0===bn)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ai}static get DefaultType(){return ci}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),D.off(this._element.closest(ni),ri,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=D.trigger(this._element,this.constructor.eventName("show")),t=(l(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),D.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(n),n.classList.add(ti),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))D.on(i,"mouseover",u);this._queueCallback((()=>{D.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!D.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ti),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))D.off(e,"mouseover",u);this._activeTrigger.click=!1,this._activeTrigger[si]=!1,this._activeTrigger[ii]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),D.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(ei,ti),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=(e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(ei),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Jr({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ei)}_isShown(){return this.tip&&this.tip.classList.contains(ti)}_createPopper(e){const t=m(this._config.placement,[this,e,this._element]),n=oi[t.toUpperCase()];return _n(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return m(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...m(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)D.on(this._element,this.constructor.eventName("click"),this._config.selector,(e=>{this._initializeOnDelegatedTarget(e).toggle()}));else if("manual"!==t){const e=t===ii?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),n=t===ii?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");D.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?si:ii]=!0,t._enter()})),D.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?si:ii]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},D.on(this._element.closest(ni),ri,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=F.getDataAttributes(this._element);for(const n of Object.keys(t))Qr.has(n)&&delete t[n];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:o(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=li.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}g(li);const ui={...li.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},hi={...li.DefaultType,content:"(null|string|element|function)"};class di extends li{static get Default(){return ui}static get DefaultType(){return hi}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=di.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}g(di);const fi=".bs.scrollspy",pi=`activate${fi}`,gi=`click${fi}`,mi=`load${fi}.data-api`,vi="active",yi="[href]",_i=".nav-link",bi=`${_i}, .nav-item > ${_i}, .list-group-item`,wi={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ei={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ii extends U{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return wi}static get DefaultType(){return Ei}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=o(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(D.off(this._config.target,gi),D.on(this._config.target,gi,yi,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(s),!r)return}else i||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=B.find(yi,this._config.target);for(const t of e){if(!t.hash||c(t))continue;const e=B.findOne(decodeURI(t.hash),this._element);a(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(vi),this._activateParents(e),D.trigger(this._element,pi,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))B.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(vi);else for(const t of B.parents(e,".nav, .list-group"))for(const e of B.prev(t,bi))e.classList.add(vi)}_clearActiveClass(e){e.classList.remove(vi);const t=B.find(`${yi}.${vi}`,e);for(const n of t)n.classList.remove(vi)}static jQueryInterface(e){return this.each((function(){const t=Ii.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}D.on(window,mi,(()=>{for(const e of B.find('[data-bs-spy="scroll"]'))Ii.getOrCreateInstance(e)})),g(Ii);const Ti=".bs.tab",Si=`hide${Ti}`,Ai=`hidden${Ti}`,Ci=`show${Ti}`,Oi=`shown${Ti}`,ki=`click${Ti}`,Pi=`keydown${Ti}`,xi=`load${Ti}`,Ri="ArrowLeft",Ni="ArrowRight",Di="ArrowUp",Li="ArrowDown",Mi="Home",ji="End",Fi="active",$i="fade",Ui="show",Vi=".dropdown-toggle",Bi=`:not(${Vi})`,Hi='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zi=`.nav-link${Bi}, .list-group-item${Bi}, [role="tab"]${Bi}, ${Hi}`,Wi=`.${Fi}[data-bs-toggle="tab"], .${Fi}[data-bs-toggle="pill"], .${Fi}[data-bs-toggle="list"]`;class Ki extends U{constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),D.on(this._element,Pi,(e=>this._keydown(e))))}static get NAME(){return"tab"}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?D.trigger(t,Si,{relatedTarget:e}):null;D.trigger(e,Ci,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(Fi),this._activate(B.getElementFromSelector(e)),this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),D.trigger(e,Oi,{relatedTarget:t})):e.classList.add(Ui)}),e,e.classList.contains($i)))}_deactivate(e,t){e&&(e.classList.remove(Fi),e.blur(),this._deactivate(B.getElementFromSelector(e)),this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),D.trigger(e,Ai,{relatedTarget:t})):e.classList.remove(Ui)}),e,e.classList.contains($i)))}_keydown(e){if(![Ri,Ni,Di,Li,Mi,ji].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter((e=>!c(e)));let n;if([Mi,ji].includes(e.key))n=t[e.key===Mi?0:t.length-1];else{const r=[Ni,Li].includes(e.key);n=y(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Ki.getOrCreateInstance(n).show())}_getChildren(){return B.find(zi,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=B.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains("dropdown"))return;const r=(e,r)=>{const i=B.findOne(e,n);i&&i.classList.toggle(r,t)};r(Vi,Fi),r(".dropdown-menu",Ui),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Fi)}_getInnerElement(e){return e.matches(zi)?e:B.findOne(zi,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each((function(){const t=Ki.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}D.on(document,ki,Hi,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),c(this)||Ki.getOrCreateInstance(this).show()})),D.on(window,xi,(()=>{for(const e of B.find(Wi))Ki.getOrCreateInstance(e)})),g(Ki);const qi=".bs.toast",Gi=`mouseover${qi}`,Yi=`mouseout${qi}`,Xi=`focusin${qi}`,Zi=`focusout${qi}`,Ji=`hide${qi}`,Qi=`hidden${qi}`,es=`show${qi}`,ts=`shown${qi}`,ns="hide",rs="show",is="showing",ss={animation:"boolean",autohide:"boolean",delay:"number"},os={animation:!0,autohide:!0,delay:5e3};class as extends U{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return os}static get DefaultType(){return ss}static get NAME(){return"toast"}show(){D.trigger(this._element,es).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ns),h(this._element),this._element.classList.add(rs,is),this._queueCallback((()=>{this._element.classList.remove(is),D.trigger(this._element,ts),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(D.trigger(this._element,Ji).defaultPrevented||(this._element.classList.add(is),this._queueCallback((()=>{this._element.classList.add(ns),this._element.classList.remove(is,rs),D.trigger(this._element,Qi)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(rs),super.dispose()}isShown(){return this._element.classList.contains(rs)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){D.on(this._element,Gi,(e=>this._onInteraction(e,!0))),D.on(this._element,Yi,(e=>this._onInteraction(e,!1))),D.on(this._element,Xi,(e=>this._onInteraction(e,!0))),D.on(this._element,Zi,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=as.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return H(as),g(as),{Alert:q,Button:Y,Carousel:Ce,Collapse:Ve,Dropdown:Wn,Modal:Ar,Offcanvas:zr,Popover:di,ScrollSpy:Ii,Tab:Ki,Toast:as,Tooltip:li}}))},1241:function(e,t){"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3506:function(e,t,n){"use strict";var r=n(3925),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){"use strict";var r=n(4402).has;e.exports=function(e){return r(e),e}},6469:function(e,t,n){"use strict";var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},679:function(e,t,n){"use strict";var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){"use strict";var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7811:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){"use strict";var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;e.exports=o&&i(o.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==s(e))throw new a("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){"use strict";var r=n(4576),i=n(7476),s=n(7394),o=r.ArrayBuffer,a=o&&o.prototype,c=a&&i(a.slice);e.exports=function(e){if(0!==s(e))return!1;if(!c)return!1;try{return c(e,0,0),!1}catch(t){return!0}}},5169:function(e,t,n){"use strict";var r=n(3238),i=TypeError;e.exports=function(e){if(r(e))throw new i("ArrayBuffer is detached");return e}},5636:function(e,t,n){"use strict";var r=n(4576),i=n(9504),s=n(6706),o=n(7696),a=n(5169),c=n(7394),l=n(4483),u=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=Math.min,g=d.prototype,m=f.prototype,v=i(g.slice),y=s(g,"resizable","get"),_=s(g,"maxByteLength","get"),b=i(m.getInt8),w=i(m.setInt8);e.exports=(u||l)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),g=!y||!y(e);if(a(e),u&&(e=h(e,{transfer:[e]}),i===s&&(n||g)))return e;if(i>=s&&(!n||g))r=v(e,0,s);else{var m=n&&!g&&_?{maxByteLength:_(e)}:void 0;r=new d(s,m);for(var E=new f(e),I=new f(r),T=p(s,i),S=0;S<T;S++)w(I,S,b(E,S))}return u||l(e),r}},4644:function(e,t,n){"use strict";var r,i,s,o=n(7811),a=n(3724),c=n(4576),l=n(4901),u=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),_=n(2967),b=n(8227),w=n(3392),E=n(1181),I=E.enforce,T=E.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,O=C&&C.prototype,k=S&&y(S),P=A&&y(A),x=Object.prototype,R=c.TypeError,N=b("toStringTag"),D=w("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==d(c.opera),j=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},$={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(F,t)||h($,t)},V=function(e){var t=y(e);if(u(t)){var n=T(t);return n&&h(n,L)?n[L]:V(t)}},B=function(e){if(!u(e))return!1;var t=d(e);return h(F,t)||h($,t)},H=function(e){if(B(e))return e;throw new R("Target is not a typed array")},z=function(e){if(l(e)&&(!_||v(k,e)))return e;throw new R(f(e)+" is not a typed array constructor")},W=function(e,t,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(l){}}}P[e]&&!n||g(P,e,n?t:M&&A[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in F)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(k[e]&&!n)return;try{return g(k,e,n?t:M&&k[e]||t)}catch(s){}}for(r in F)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in F)i=c[r],s=i&&i.prototype,s?I(s)[L]=i:M=!1;for(r in $)i=c[r],s=i&&i.prototype,s&&(I(s)[L]=i);if((!M||!l(k)||k===Function.prototype)&&(k=function(){throw new R("Incorrect invocation")},M))for(r in F)c[r]&&_(c[r],k);if((!M||!P||P===x)&&(P=k.prototype,M))for(r in F)c[r]&&_(c[r].prototype,P);if(M&&y(O)!==P&&_(O,P),a&&!h(P,N))for(r in j=!0,m(P,N,{configurable:!0,get:function(){return u(this)?this[D]:void 0}}),F)c[r]&&p(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:j&&D,aTypedArray:H,aTypedArrayConstructor:z,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:V,isView:U,isTypedArray:B,TypedArray:k,TypedArrayPrototype:P}},5370:function(e,t,n){"use strict";var r=n(6198);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},9617:function(e,t,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var l,u=i(o,c);if(e&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){"use strict";var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},9928:function(e,t,n){"use strict";var r=n(6198),i=n(1291),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),l=c<0?a+c:c;if(l>=a||l<0)throw new s("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===l?o:e[h];return u}},6319:function(e,t,n){"use strict";var r=n(8551),i=n(9539);e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},2195:function(e,t,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6955:function(e,t,n){"use strict";var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,l="Arguments"===s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},2211:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2529:function(e){"use strict";e.exports=function(e,t){return{value:e,done:t}}},6699:function(e,t,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4659:function(e,t,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);e.exports=function(e,t,n){r?i.f(e,t,s(0,n)):e[t]=n}},2106:function(e,t,n){"use strict";var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&s(n,l,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},6279:function(e,t,n){"use strict";var r=n(6840);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},9433:function(e,t,n){"use strict";var r=n(4576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){"use strict";var r,i,s,o,a=n(4576),c=n(9429),l=n(1548),u=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(l)f=function(e){u(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}e.exports=f},4055:function(e,t,n){"use strict";var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8574:function(e,t,n){"use strict";var r=n(4215);e.exports="NODE"===r},2839:function(e,t,n){"use strict";var r=n(4576),i=r.navigator,s=i&&i.userAgent;e.exports=s?String(s):""},9519:function(e,t,n){"use strict";var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},4215:function(e,t,n){"use strict";var r=n(4576),i=n(2839),s=n(2195),o=function(e){return i.slice(0,e.length)===e};e.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(e,t,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},6518:function(e,t,n){"use strict";var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),l=n(2796);e.exports=function(e,t){var n,u,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(u=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},9039:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},6080:function(e,t,n){"use strict";var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){"use strict";var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},6706:function(e,t,n){"use strict";var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},7476:function(e,t,n){"use strict";var r=n(2195),i=n(9504);e.exports=function(e){if("Function"===r(e))return i(e)}},9504:function(e,t,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},9429:function(e,t,n){"use strict";var r=n(4576),i=n(8574);e.exports=function(e){if(i){try{return r.process.getBuiltinModule(e)}catch(t){}try{return Function('return require("'+e+'")')()}catch(t){}}}},4124:function(e,t,n){"use strict";var r=n(4576);e.exports=function(e,t){var n=r[e],i=n&&n.prototype;return i&&i[t]}},7751:function(e,t,n){"use strict";var r=n(4576),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},1767:function(e){"use strict";e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},851:function(e,t,n){"use strict";var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");e.exports=function(e){if(!s(e))return i(e,c)||i(e,"@@iterator")||o[r(e)]}},81:function(e,t,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return s(r(n,e));throw new c(o(e)+" is not iterable")}},5966:function(e,t,n){"use strict";var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){"use strict";var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",l=RangeError,u=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(e){return s(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new u(c);var n=o(t);if(n<0)throw new l(c);return new d(e,n)}},4576:function(e,t,n){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){"use strict";e.exports={}},397:function(e,t,n){"use strict";var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){"use strict";var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3167:function(e,t,n){"use strict";var r=n(4901),i=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3706:function(e,t,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){"use strict";var r,i,s,o=n(8622),a=n(4576),c=n(34),l=n(6699),u=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new g(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw new g(p);return t.facade=e,l(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},4209:function(e,t,n){"use strict";var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},4376:function(e,t,n){"use strict";var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){"use strict";var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){"use strict";var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===u||n!==l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},4117:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){"use strict";var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){"use strict";var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){"use strict";e.exports=!1},757:function(e,t,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},507:function(e,t,n){"use strict";var r=n(9565);e.exports=function(e,t,n){var i,s,o=n?e:e.iterator,a=e.next;while(!(i=r(a,o)).done)if(s=t(i.value),void 0!==s)return s}},2652:function(e,t,n){"use strict";var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),l=n(1625),u=n(81),h=n(851),d=n(9539),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},g=p.prototype;e.exports=function(e,t,n){var m,v,y,_,b,w,E,I=n&&n.that,T=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),A=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),O=r(t,I),k=function(e){return m&&d(m,"normal",e),new p(!0,e)},P=function(e){return T?(s(e),C?O(e[0],e[1],k):O(e[0],e[1])):C?O(e,k):O(e)};if(S)m=e.iterator;else if(A)m=e;else{if(v=h(e),!v)throw new f(o(e)+" is not iterable");if(a(v)){for(y=0,_=c(e);_>y;y++)if(b=P(e[y]),b&&l(g,b))return b;return new p(!1)}m=u(e,v)}w=S?e.next:m.next;while(!(E=i(w,m)).done){try{b=P(E.value)}catch(x){d(m,"throw",x)}if("object"==typeof b&&b&&l(g,b))return b}return new p(!1)}},9539:function(e,t,n){"use strict";var r=n(9565),i=n(8551),s=n(5966);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},9462:function(e,t,n){"use strict";var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),l=n(5966),u=n(7657).IteratorPrototype,h=n(2529),d=n(9539),f=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=c.set,v=function(e){var t=c.getterFor(e?g:p);return o(i(u),{next:function(){var n=t(this);if(e)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=t(this),i=n.iterator;if(n.done=!0,e){var s=l(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,"normal")}catch(o){return d(i,"throw",o)}return i&&d(i,"normal"),h(void 0,!0)}})},y=v(!0),_=v(!1);s(_,f,"Iterator Helper"),e.exports=function(e,t){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=t?g:p,r.nextHandler=e,r.counter=0,r.done=!1,m(this,r)};return n.prototype=t?y:_,n}},713:function(e,t,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(1767),a=n(9462),c=n(6319),l=a((function(){var e=this.iterator,t=s(r(this.next,e)),n=this.done=!!t.done;if(!n)return c(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function(e){return s(this),i(e),new l(o(this),{mapper:e})}},7657:function(e,t,n){"use strict";var r,i,s,o=n(9039),a=n(4901),c=n(34),l=n(2360),u=n(2787),h=n(6840),d=n(8227),f=n(6395),p=d("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o((function(){var e={};return r[p].call(e)!==e}));m?r={}:f&&(r=l(r)),a(r[p])||h(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(e){"use strict";e.exports={}},6198:function(e,t,n){"use strict";var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),u=n(1181),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||l(this)}),"toString")},741:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){"use strict";var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2360:function(e,t,n){"use strict";var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),l=n(4055),u=n(6119),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=b(),void 0===t?n:s.f(n,t)}},6801:function(e,t,n){"use strict";var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),l=i.length,u=0;while(l>u)s.f(e,n=i[u++],r[n]);return e}},4913:function(e,t,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),l=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?u:null}},1625:function(e,t,n){"use strict";var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~o(u,n)||c(u,n));return u}},1072:function(e,t,n){"use strict";var r=n(1828),i=n(8727);e.exports=Object.keys||function(e){return r(e,i)}},8773:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){"use strict";var r=n(6706),i=n(34),s=n(7750),o=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7979:function(e,t,n){"use strict";var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},7750:function(e,t,n){"use strict";var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){"use strict";var r=n(4402),i=n(8469),s=r.Set,o=r.add;e.exports=function(e){var t=new s;return i(e,(function(e){o(t,e)})),t}},3440:function(e,t,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),l=n(507),u=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=s(t);return o(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):l(n.getIterator(),(function(e){u(t,e)&&h(i,e)})),i}},4402:function(e,t,n){"use strict";var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){"use strict";var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),l=i.Set,u=i.add,h=i.has;e.exports=function(e){var t=r(this),n=o(e),i=new l;return s(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&u(i,e)})):a(t,(function(e){n.includes(e)&&u(i,e)})),i}},4449:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var u=n.getIterator();return!1!==c(u,(function(e){if(i(t,e))return l(u,"normal",!1)}))}},3838:function(e,t,n){"use strict";var r=n(7080),i=n(5170),s=n(8469),o=n(3789);e.exports=function(e){var t=r(this),n=o(e);return!(i(t)>n.size)&&!1!==s(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<n.size)return!1;var l=n.getIterator();return!1!==a(l,(function(e){if(!i(t,e))return c(l,"normal",!1)}))}},8469:function(e,t,n){"use strict";var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),l=r(a.keys),u=l(new o).next;e.exports=function(e,t,n){return n?i({iterator:l(e),next:u},t):c(e,t)}},4916:function(e,t,n){"use strict";var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(e,t,n){"use strict";var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,l=i.has,u=i.remove;e.exports=function(e){var t=r(this),n=o(e).getIterator(),i=s(t);return a(n,(function(e){l(t,e)?u(i,e):c(i,e)})),i}},4204:function(e,t,n){"use strict";var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=o(e).getIterator(),c=s(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){"use strict";var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){"use strict";var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){"use strict";var r=n(4576),i=n(9039),s=n(9519),o=n(4215),a=r.structuredClone;e.exports=!!a&&!i((function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var e=new ArrayBuffer(8),t=a(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){"use strict";var r=n(9519),i=n(9039),s=n(4576),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5854:function(e,t,n){"use strict";var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){"use strict";var r=n(1291),i=n(8014),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5397:function(e,t,n){"use strict";var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){"use strict";var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){"use strict";var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){"use strict";var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){"use strict";var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},655:function(e,t,n){"use strict";var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},6823:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){"use strict";var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){"use strict";var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){"use strict";var r=n(4576),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){"use strict";var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(l,e)?l[e]:h("Symbol."+e)),u[e]}},6573:function(e,t,n){"use strict";var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},9678:function(e,t,n){"use strict";var r=n(6518),i=n(7628),s=n(5397),o=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(s(this),a)}}),o("toReversed")},7145:function(e,t,n){"use strict";var r=n(6518),i=n(9504),s=n(9306),o=n(5397),a=n(5370),c=n(4124),l=n(6469),u=Array,h=i(c("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(e){void 0!==e&&s(e);var t=o(this),n=a(u,t);return h(n,e)}}),l("toSorted")},1658:function(e,t,n){"use strict";var r=n(6518),i=n(6469),s=n(6837),o=n(6198),a=n(5610),c=n(5397),l=n(1291),u=Array,h=Math.max,d=Math.min;r({target:"Array",proto:!0},{toSpliced:function(e,t){var n,r,i,f,p=c(this),g=o(p),m=a(e,g),v=arguments.length,y=0;for(0===v?n=r=0:1===v?(n=0,r=g-m):(n=v-2,r=d(h(l(t),0),g-m)),i=s(g+n-r),f=u(i);y<m;y++)f[y]=p[y];for(;y<m+n;y++)f[y]=arguments[y-m+2];for(;y<i;y++)f[y]=p[y+r-n];return f}}),i("toSpliced")},8111:function(e,t,n){"use strict";var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),l=n(2106),u=n(4659),h=n(9039),d=n(9297),f=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),v="constructor",y="Iterator",_=f("toStringTag"),b=TypeError,w=i[y],E=m||!a(w)||w.prototype!==p||!h((function(){w({})})),I=function(){if(s(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},T=function(e,t){g?l(p,e,{configurable:!0,get:function(){return t},set:function(t){if(o(this),this===p)throw new b("You can't redefine this property");d(this,e)?this[e]=t:u(this,e,t)}}):p[e]=t};d(p,_)||T(_,y),!E&&d(p,v)&&p[v]!==Object||T(v,I),I.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:I})},1148:function(e,t,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(e){o(this),s(e);var t=a(this),n=0;return!i(t,(function(t,r){if(!e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(e,t,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),l=n(6319),u=n(6395),h=c((function(){var e,t,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(e=o(i(a,r)),t=this.done=!!e.done,t)return;if(n=e.value,l(r,s,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:u},{filter:function(e){return o(this),s(e),new h(a(this),{predicate:e})}})},116:function(e,t,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(e){o(this),s(e);var t=a(this),n=0;return i(t,(function(t,r){if(e(t,n++))return r(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(e,t,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(e){o(this),s(e);var t=a(this),n=0;i(t,(function(t){e(t,n++)}),{IS_RECORD:!0})}})},1701:function(e,t,n){"use strict";var r=n(6518),i=n(713),s=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:s},{map:i})},8237:function(e,t,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){o(this),s(e);var t=a(this),n=arguments.length<2,r=n?void 0:arguments[1],l=0;if(i(t,(function(t){n?(n=!1,r=t):r=e(r,t,l),l++}),{IS_RECORD:!0}),n)throw new c("Reduce of empty iterator with no initial value");return r}})},3579:function(e,t,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(e){o(this),s(e);var t=a(this),n=0;return i(t,(function(t,r){if(e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(e,t,n){"use strict";var r=n(6518),i=n(8551),s=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var e=[];return s(o(i(this)),a,{that:e,IS_RECORD:!0}),e}})},9479:function(e,t,n){"use strict";var r=n(4576),i=n(3724),s=n(2106),o=n(7979),a=n(9039),c=r.RegExp,l=c.prototype,u=i&&a((function(){var e=!0;try{c(".","d")}catch(u){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(s.hasIndices="d"),s)i(o,s[o]);var a=Object.getOwnPropertyDescriptor(l,"flags").get.call(t);return a!==r||n!==r}));u&&s(l,"flags",{configurable:!0,get:o})},7642:function(e,t,n){"use strict";var r=n(6518),i=n(3440),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},8004:function(e,t,n){"use strict";var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(e,t,n){"use strict";var r=n(6518),i=n(4449),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){"use strict";var r=n(6518),i=n(3838),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){"use strict";var r=n(6518),i=n(8527),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){"use strict";var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){"use strict";var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},7467:function(e,t,n){"use strict";var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(e,t,n){"use strict";var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,u=i(r.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return u(n,e)}))},9577:function(e,t,n){"use strict";var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,l=i.getTypedArrayConstructor,u=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var n=c(this),i=o(e),u=s(n)?a(t):+t;return r(n,l(n),i,u)}}["with"],!h)},8992:function(e,t,n){"use strict";n(8111)},3215:function(e,t,n){"use strict";n(1148)},4520:function(e,t,n){"use strict";n(2489)},2577:function(e,t,n){"use strict";n(116)},3949:function(e,t,n){"use strict";n(7588)},1454:function(e,t,n){"use strict";n(1701)},8872:function(e,t,n){"use strict";n(8237)},7550:function(e,t,n){"use strict";n(3579)},1795:function(e,t,n){"use strict";n(1806)},4979:function(e,t,n){"use strict";var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),l=n(679),u=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),_=function(){l(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new v(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),u(r,this,_),r},b=_.prototype=y.prototype,w="stack"in new v(m),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!I&&!(I.writable&&I.configurable),S=w&&!T&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var A=s(m),C=A.prototype;if(C.constructor!==A)for(var O in g||a(C,"constructor",o(1,A)),d)if(c(d,O)){var k=d[O],P=k.s;c(A,P)||a(A,P,o(6,k.c))}},4603:function(e,t,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.append),u=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,u(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||l(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.getAll),u=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=l(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){"use strict";var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},1114:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function s(e){var t=i(e,"string");return"symbol"==r(t)?t:t+""}function o(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{A:function(){return o}})},6540:function(e,t,n){"use strict";n.d(t,{KO:function(){return ee},MF:function(){return Z},Sx:function(){return Q},Wp:function(){return J},j6:function(){return K},om:function(){return W},xZ:function(){return q}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(852),i=n(1363),s=n(4046),o=n(8071);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",u="0.10.17",h=new i.Vy("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",_="@firebase/database",b="@firebase/data-connect",w="@firebase/database-compat",E="@firebase/functions",I="@firebase/functions-compat",T="@firebase/installations",S="@firebase/installations-compat",A="@firebase/messaging",C="@firebase/messaging-compat",O="@firebase/performance",k="@firebase/performance-compat",P="@firebase/remote-config",x="@firebase/remote-config-compat",R="@firebase/storage",N="@firebase/storage-compat",D="@firebase/firestore",L="@firebase/vertexai",M="@firebase/firestore-compat",j="firebase",F="11.1.0",$="[DEFAULT]",U={[l]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-data-connect",[w]:"fire-rtdb-compat",[E]:"fire-fn",[I]:"fire-fn-compat",[T]:"fire-iid",[S]:"fire-iid-compat",[A]:"fire-fcm",[C]:"fire-fcm-compat",[O]:"fire-perf",[k]:"fire-perf-compat",[P]:"fire-rc",[x]:"fire-rc-compat",[R]:"fire-gcs",[N]:"fire-gcs-compat",[D]:"fire-fst",[M]:"fire-fst-compat",[L]:"fire-vertex","fire-js":"fire-js",[j]:"fire-js-all"},V=new Map,B=new Map,H=new Map;function z(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(H.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;H.set(t,e);for(const n of V.values())z(n,e);for(const n of B.values())z(n,e);return!0}function K(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function q(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Y=new s.FA("app","Firebase",G);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Y.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=F;function J(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:$,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw Y.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw Y.create("no-options");const a=V.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw Y.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of H.values())c.addComponent(r);const l=new X(n,i,c);return V.set(o,l),l}function Q(e=$){const t=V.get(e);if(!t&&e===$&&(0,s.T9)())return J();if(!t)throw Y.create("no-app",{appName:e});return t}function ee(e,t,n){var i;let s=null!==(i=U[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}W(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te="firebase-heartbeat-database",ne=1,re="firebase-heartbeat-store";let ie=null;function se(){return ie||(ie=(0,o.P2)(te,ne,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(re)}catch(n){console.warn(n)}}}}).catch((e=>{throw Y.create("idb-open",{originalErrorMessage:e.message})}))),ie}async function oe(e){try{const t=await se(),n=t.transaction(re),r=await n.objectStore(re).get(ce(e));return await n.done,r}catch(t){if(t instanceof s.g)h.warn(t.message);else{const e=Y.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});h.warn(e.message)}}}async function ae(e,t){try{const n=await se(),r=n.transaction(re,"readwrite"),i=r.objectStore(re);await i.put(t,ce(e)),await r.done}catch(n){if(n instanceof s.g)h.warn(n.message);else{const e=Y.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(e.message)}}}function ce(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=1024,ue=2592e6;class he{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=de();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ue})),this._storage.overwrite(this._heartbeatsCache)}catch(n){h.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=de(),{heartbeatsToSend:n,unsentEntries:r}=fe(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return h.warn(t),""}}}function de(){const e=new Date;return e.toISOString().substring(0,10)}function fe(e,t=le){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ge(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await oe(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ge(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){W(new r.uA("platform-logger",(e=>new a(e)),"PRIVATE")),W(new r.uA("heartbeat",(e=>new he(e)),"PRIVATE")),ee(l,u,e),ee(l,u,"esm2017"),ee("fire-js","")}me("")},852:function(e,t,n){"use strict";n.d(t,{h1:function(){return l},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){"use strict";n.d(t,{$b:function(){return i},Vy:function(){return l}});n(4114),n(8992),n(4520),n(1454);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},5942:function(e,t,n){"use strict";n.d(t,{P5:function(){return bt}});n(4114),n(8992),n(2577),n(3949),n(1454);var r=n(6540),i=n(1363),s=n(4046),o=n(852),a=(n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979),n(8071));const c="@firebase/installations",l="0.6.11",u=1e4,h=`w:${l}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new s.FA(g,m,v);function _(e){return e instanceof s.g&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function w(e){return{token:e.token,requestStatus:2,expiresIn:A(e.expiresIn),creationTime:Date.now()}}async function E(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T(e,{refreshToken:t}){const n=I(e);return n.append("Authorization",C(t)),n}async function S(e){const t=await e();return t.status>=500&&t.status<600?e():t}function A(e){return Number(e.replace("s","000"))}function C(e){return`${d} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=I(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:d,appId:e.appId,sdkVersion:h},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await S((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:w(e.authToken)};return t}throw await E("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=/^[cdef][\w-]{21}$/,R="";function N(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=D(e);return x.test(n)?n:R}catch(e){return R}}function D(e){const t=P(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function j(e,t){const n=L(e);F(n,t),$(n,t)}function F(e,t){const n=M.get(e);if(n)for(const r of n)r(t)}function $(e,t){const n=V();n&&n.postMessage({key:e,fid:t}),B()}let U=null;function V(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=e=>{F(e.data.key,e.data.fid)}),U}function B(){0===M.size&&U&&(U.close(),U=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="firebase-installations-database",z=1,W="firebase-installations-store";let K=null;function q(){return K||(K=(0,a.P2)(H,z,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(W)}}})),K}async function G(e,t){const n=L(e),r=await q(),i=r.transaction(W,"readwrite"),s=i.objectStore(W),o=await s.get(n);return await s.put(t,n),await i.done,o&&o.fid===t.fid||j(e,t.fid),t}async function Y(e){const t=L(e),n=await q(),r=n.transaction(W,"readwrite");await r.objectStore(W).delete(t),await r.done}async function X(e,t){const n=L(e),r=await q(),i=r.transaction(W,"readwrite"),s=i.objectStore(W),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||j(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){let t;const n=await X(e.appConfig,(n=>{const r=J(n),i=Q(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===R?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function J(e){const t=e||{fid:N(),registrationStatus:0};return re(t)}function Q(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await O(e,t);return G(e.appConfig,n)}catch(n){throw _(n)&&409===n.customData.serverCode?await Y(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await k(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Z(e);return n||t}return t}function ne(e){return X(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se({appConfig:e,heartbeatServiceProvider:t},n){const r=oe(e,n),i=T(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:h,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await S((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t=w(e);return t}throw await E("Generate Auth Token",c)}function oe(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t=!1){let n;const r=await X(e.appConfig,(r=>{if(!he(r))throw y.create("not-registered");const i=r.authToken;if(!t&&de(i))return r;if(1===i.requestStatus)return n=ce(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=ue(e,t),t}})),i=n?await n:r.authToken;return i}async function ce(e,t){let n=await le(e.appConfig);while(1===n.authToken.requestStatus)await k(100),n=await le(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ae(e,t):r}function le(e){return X(e,(e=>{if(!he(e))throw y.create("not-registered");const t=e.authToken;return ge(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ue(e,t){try{const n=await se(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,r),n}catch(n){if(!_(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await Y(e.appConfig);throw n}}function he(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ge(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e){const t=e,{installationEntry:n,registrationPromise:r}=await Z(t);return r?r.catch(console.error):ae(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){const n=e;await ye(n);const r=await ae(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await Z(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){if(!e||!e.options)throw be("App Configuration");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function be(e){return y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="installations",Ee="installations-internal",Ie=e=>{const t=e.getProvider("app").getImmediate(),n=_e(t),i=(0,r.j6)(t,"heartbeat"),s={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},Te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.j6)(t,we).getImmediate(),i={getId:()=>me(n),getToken:e=>ve(n,e)};return i};function Se(){(0,r.om)(new o.uA(we,Ie,"PUBLIC")),(0,r.om)(new o.uA(Ee,Te,"PRIVATE"))}Se(),(0,r.KO)(c,l),(0,r.KO)(c,l,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ae="analytics",Ce="firebase_id",Oe="origin",ke=6e4,Pe="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xe="https://www.googletagmanager.com/gtag/js",Re=new i.Vy("@firebase/analytics"),Ne={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},De=new s.FA("analytics","Analytics",Ne);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){if(!e.startsWith(xe)){const t=De.create("invalid-gtag-resource",{gtagURL:e});return Re.warn(t.message),""}return e}function Me(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function je(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Fe(e,t){const n=je("firebase-js-sdk-policy",{createScriptURL:Le}),r=document.createElement("script"),i=`${xe}?l=${e}&id=${t}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $e(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ue(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=await Me(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){Re.error(a)}e("config",i,s)}async function Ve(e,t,n,r,i){try{let s=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await Me(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Re.error(s)}}function Be(e,t,n,r){async function i(i,...s){try{if("event"===i){const[r,i]=s;await Ve(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await Ue(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){Re.error(o)}}return i}function He(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=Be(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function ze(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xe)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=30,Ke=1e3;class qe{constructor(e={},t=Ke){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ge=new qe;function Ye(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Xe(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Ye(r)},s=Pe.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw De.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function Ze(e,t=Ge,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw De.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw De.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tt;return setTimeout((async()=>{a.abort()}),void 0!==n?n:ke),Je({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Je(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ge){var o;const{appId:a,measurementId:c}=e;try{await Qe(r,t)}catch(l){if(c)return Re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const t=await Xe(e);return i.deleteThrottleMetadata(a),t}catch(l){const t=l;if(!et(t)){if(i.deleteThrottleMetadata(a),c)return Re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:c};throw l}const u=503===Number(null===(o=null===t||void 0===t?void 0:t.customData)||void 0===o?void 0:o.httpStatus)?(0,s.p9)(n,i.intervalMillis,We):(0,s.p9)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,h),Re.debug(`Calling attemptFetch again in ${u} millis`),Je(e,h,r,i)}}function Qe(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(De.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function et(e){if(!(e instanceof s.g)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt,rt;async function it(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}function st(e){rt=e}function ot(e){nt=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(){if(!(0,s.zW)())return Re.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eX)()}catch(e){return Re.warn(De.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function ct(e,t,n,r,i,s,o){var a;const c=Ze(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Re.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Re.error(e))),t.push(c);const l=at().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);ze(s)||Fe(s,u.measurementId),rt&&(i("consent","default",rt),st(void 0)),i("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Oe]="firebase",d.update=!0,null!=h&&(d[Ce]=h),i("config",u.measurementId,d),nt&&(i("set",nt),ot(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.app=e}_delete(){return delete ut[this.app.options.appId],Promise.resolve()}}let ut={},ht=[];const dt={};let ft,pt,gt="dataLayer",mt="gtag",vt=!1;function yt(){const e=[];if((0,s.sr)()&&e.push("This is a browser extension environment."),(0,s.dM)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=De.create("invalid-analytics-context",{errorInfo:t});Re.warn(n.message)}}function _t(e,t,n){yt();const r=e.options.appId;if(!r)throw De.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw De.create("no-api-key");Re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ut[r])throw De.create("already-exists",{id:r});if(!vt){$e(gt);const{wrappedGtag:e,gtagCore:t}=He(ut,ht,dt,gt,mt);pt=e,ft=t,vt=!0}ut[r]=ct(e,ht,dt,t,ft,gt,n);const i=new lt(e);return i}function bt(e=(0,r.Sx)()){e=(0,s.Ku)(e);const t=(0,r.j6)(e,Ae);return t.isInitialized()?t.getImmediate():wt(e)}function wt(e,t={}){const n=(0,r.j6)(e,Ae);if(n.isInitialized()){const e=n.getImmediate();if((0,s.bD)(t,n.getOptions()))return e;throw De.create("already-initialized")}const i=n.initialize({options:t});return i}function Et(e,t,n,r){e=(0,s.Ku)(e),it(pt,ut[e.app.options.appId],t,n,r).catch((e=>Re.error(e)))}const It="@firebase/analytics",Tt="0.10.10";function St(){function e(e){try{const t=e.getProvider(Ae).getImmediate();return{logEvent:(e,n,r)=>Et(t,e,n,r)}}catch(t){throw De.create("interop-component-reg-failed",{reason:t})}}(0,r.om)(new o.uA(Ae,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return _t(n,r,t)}),"PUBLIC")),(0,r.om)(new o.uA("analytics-internal",e,"PRIVATE")),(0,r.KO)(It,Tt),(0,r.KO)(It,Tt,"esm2017")}St()},6400:function(e,t,n){"use strict";n.d(t,{Wp:function(){return r.Wp}});var r=n(6540),i="firebase",s="11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},3869:function(e,t,n){"use strict";n.d(t,{eJ:function(){return Mt},xI:function(){return Kr}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(4603),n(7566),n(8721);var r=n(6540),i=n(4046),s=n(1363);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function _(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,r,s={}){return D(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},s);return(0,i.c1)()||(l.referrerPolicy="no-referrer"),k.fetch()(M(e,e.config.apiHost,n,a),l)}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),t);try{const t=new F(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw $(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function L(e,t,n,r,i={}){const s=await N(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function M(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}function j(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),x.get())}))}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return void 0!==e&&void 0!==e.enterprise}class V{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return j(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return N(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=G(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:W(q(s.auth_time)),issuedAtTime:W(q(s.iat)),expirationTime:W(q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function G(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Y(e){const t=G(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,z(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?re(s.providerUserInfo):[],a=ne(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function te(e){const t=(0,i.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await D(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=M(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return N(e,"POST","/v2/accounts:revokeToken",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(0!==e.length,"internal-error");const t=Y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oe;return n&&(_("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return te(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await X(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:I}=t;_(y&&I,e,"internal-error");const T=oe.fromJSON(this.name,I);_("string"===typeof y,e,"internal-error"),ae(u,e.name),ae(h,e.name),_("boolean"===typeof b,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),ae(d,e.name),ae(f,e.name),ae(p,e.name),ae(g,e.name),ae(m,e.name),ae(v,e.name);const S=new ce({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new oe;o.updateFromIdToken(n);const a=new ce({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Q(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function ue(e){w(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(ue(de),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ue(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=ce._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(Ee(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,i.ZQ)()){return/crios\//i.test(e)}function _e(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,i.ZQ)()){return/android/i.test(e)}function we(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Ie(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,i.ZQ)()){var t;return Ie(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,i.lT)()&&10===document.documentMode}function Ae(e=(0,i.ZQ)()){return Ie(e)||be(e)||Ee(e)||we(e)||/windows phone/i.test(e)||_e(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t={}){return N(e,"GET","/v2/passwordPolicy",R(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=6;class xe{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Pe,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await z(this,{idToken:e}),n=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ke(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ne(e){return(0,i.Ku)(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Me(e){Le=e}function je(e){return Le.loadJS(e)}function Fe(){return Le.recaptchaEnterpriseScript}function $e(){return Le.gapiScript}function Ue(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.enterprise=new Be}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Be{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const He="recaptcha-enterprise",ze="NO_RECAPTCHA";class We{constructor(e){this.type=He,this.auth=Ne(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new V(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;U(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(ze)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new Ve;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&U(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Fe();0!==t.length&&(t+=n),je(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ke(e,t,n,r=!1,i=!1){const s=new We(e);let o;if(i)o=ze;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qe(e,t,n,r,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ke(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ke(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const i=await Ke(e,t,n);return r(e,i).catch((async i=>{var s;if("AUDIT"===(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ke(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)}))}{const i=await Ke(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function Ge(e){const t=Ne(e),n=await B(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new V(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new We(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Xe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ue);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ze(e,t,n){const r=Ne(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Je(t),{host:o,port:a}=Qe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tt()}function Je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qe(e){const t=Je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:et(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:et(t)}}}function et(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function tt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){return N(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function ot(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends nt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new at(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new at(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,t,"signInWithPassword",it,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return st(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,n,"signUpPassword",rt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ot(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="http://localhost";class ut extends nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ut(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ct(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}buildRequest(){const e={requestUri:lt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function dt(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function ft(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const pt={["USER_NOT_FOUND"]:"user-not-found"};async function gt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),pt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends nt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new mt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new mt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return dt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ft(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new mt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class _t{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=vt(null!==(r=c["mode"])&&void 0!==r?r:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=yt(e);try{return new _t(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(){this.providerId=bt.PROVIDER_ID}static credential(e,t){return at._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=_t.parseLink(t);return _(n,"argument-error"),at._fromEmailAndCode(e,n.code,n.tenantId)}}bt.PROVIDER_ID="password",bt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends Et{constructor(){super("facebook.com")}static credential(e){return ut._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch(t){return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com",It.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends Et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ut._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tt.credential(t,n)}catch(r){return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com",Tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Et{constructor(){super("github.com")}static credential(e){return ut._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch(t){return null}}}St.GITHUB_SIGN_IN_METHOD="github.com",St.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends Et{constructor(){super("twitter.com")}static credential(e,t){return ut._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return At.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t){return L(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.TWITTER_SIGN_IN_METHOD="twitter.com",At.PROVIDER_ID="twitter.com";class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),s=kt(n),o=new Ot({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=kt(n);return new Ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Pt(e,t,n,r)}}function xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await X(e,xt(i,s,t,e),n);_(r.idToken,i,"internal-error");const o=G(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(e.uid===a,i,"user-mismatch"),Ot._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",s=await xt(e,i,t),o=await Ot._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(e){const t=Ne(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Mt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Ne(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},o=qe(i,s,"signUpPassword",Ct,"EMAIL_PASSWORD_PROVIDER"),a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Lt(e),t})),c=await Ot._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function jt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Ft(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Ut(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function Vt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Bt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const Ht="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=1e3,Kt=10;class qt extends zt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Kt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qt.type="LOCAL";const Gt=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends zt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yt.type="SESSION";const Xt=Yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Jt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Zt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.receivers=[];class en{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Qt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function nn(e){tn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return"undefined"!==typeof tn()["WorkerGlobalScope"]&&"function"===typeof tn()["importScripts"]}async function sn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function on(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function an(){return rn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="firebaseLocalStorageDb",ln=1,un="firebaseLocalStorage",hn="fbase_key";class dn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function fn(e,t){return e.transaction([un],t?"readwrite":"readonly").objectStore(un)}function pn(){const e=indexedDB.deleteDatabase(cn);return new dn(e).toPromise()}function gn(){const e=indexedDB.open(cn,ln);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(un,{keyPath:hn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(un)?t(n):(n.close(),await pn(),t(await gn()))}))}))}async function mn(e,t,n){const r=fn(e,!0).put({[hn]:t,value:n});return new dn(r).toPromise()}async function vn(e,t){const n=fn(e,!1).get(t),r=await new dn(n).toPromise();return void 0===r?null:r.value}function yn(e,t){const n=fn(e,!0).delete(t);return new dn(n).toPromise()}const _n=800,bn=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>bn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(an()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await sn(),!this.activeServiceWorker)return;this.sender=new en(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&on()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gn();return await mn(e,Ht,"1"),await yn(e,Ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>mn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>vn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>yn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=fn(e,!1).getAll();return new dn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),_n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wn.type="LOCAL";const En=wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function Tn(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function Sn(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const An="recaptcha";async function Cn(e,t,n){var r;if(!e._getRecaptchaConfig())try{await Ge(e)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){_("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ze){_((null===n||void 0===n?void 0:n.type)===An,e,"argument-error");const r=await On(e,t,n);return $t(e,r)}return $t(e,t)},o=qe(e,r,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((e=>Promise.reject(e)));return a.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const s=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;_(s,e,"missing-multi-factor-info");const o={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ze){_((null===n||void 0===n?void 0:n.type)===An,e,"argument-error");const r=await On(e,t,n);return In(e,r)}return In(e,t)},c=qe(e,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),l=await c.catch((e=>Promise.reject(e)));return l.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===ze){_((null===n||void 0===n?void 0:n.type)===An,e,"argument-error");const r=await On(e,t,n);return ht(e,r)}return ht(e,t)},s=qe(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),o=await s.catch((e=>Promise.reject(e)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function On(e,t,n){_(n.type===An,e,"argument-error");const r=await n.verify();_("string"===typeof r,e,"argument-error");const i=Object.assign({},t);if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.providerId=kn.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Cn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return mt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return kn.credentialFromTaggedObject(t)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?mt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pn(e,t){return t?ue(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn.PROVIDER_ID="phone",kn.PHONE_SIGN_IN_METHOD="phone";class xn extends nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rn(e){return Dt(e.auth,new xn(e),e.bypassAuthState)}function Nn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Nt(n,new xn(e),e.bypassAuthState)}async function Dn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Rt(n,new xn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rn;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return Nn;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new C(2e3,1e4);class jn extends Ln{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Mn.get())};e()}}jn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn="pendingRedirect",$n=new Map;class Un extends Ln{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const t=await Vn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Vn(e,t){const n=zn(t),r=Hn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Bn(e,t){$n.set(e._key(),t)}function Hn(e){return ue(e._redirectPersistence)}function zn(e){return fe(Fn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Ne(e),s=Pn(i,t),o=new Un(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn=6e5;class qn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Xn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gn(e))}saveEventToCache(e){this.cachedEventUids.add(Gn(e)),this.lastProcessedEventTime=Date.now()}}function Gn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Xn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qn=/^https?/;async function er(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zn(e);for(const r of t)try{if(tr(r))return}catch(n){}p(e,"unauthorized-domain")}function tr(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Qn.test(n))return!1;if(Jn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new C(3e4,6e4);function rr(){const e=tn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ir(e){return new Promise(((t,n)=>{var r,i,s;function o(){rr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rr(),n(g(e,"network-request-failed"))},timeout:nr.get()})}if(null===(i=null===(r=tn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=tn().gapi)||void 0===s?void 0:s.load)){const t=Ue("iframefcb");return tn()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},je(`${$e()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw sr=null,e}))}let sr=null;function or(e){return sr=sr||ir(e),sr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new C(5e3,15e3),cr="__/auth/iframe",lr="emulator/auth/iframe",ur={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dr(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,lr):`https://${e.config.authDomain}/${cr}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=hr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function fr(e){const t=await or(e),n=tn().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:dr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ur,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=tn().setTimeout((()=>{r(i)}),ar.get());function o(){tn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gr=500,mr=600,vr="_blank",yr="http://localhost";class _r{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function br(e,t,n,r=gr,s=mr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},pr),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(c=ye(u)?vr:n),me(u)&&(t=t||yr,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Te(u)&&"_self"!==c)return wr(t||"",c),new _r(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new _r(d)}function wr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="__/auth/handler",Ir="emulator/auth/handler",Tr=encodeURIComponent("fac");async function Sr(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof wt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),h=u?`#${Tr}=${encodeURIComponent(u)}`:"";return`${Ar(e)}?${(0,i.Am)(l).slice(1)}${h}`}function Ar({config:e}){return e.emulator?O(e,Ir):`https://${e.authDomain}/${Er}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="webStorageSupport";class Or{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xt,this._completeRedirectFn=Wn,this._overrideRedirectResult=Bn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Sr(e,t,n,E(),r);return br(e,s,Qt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Sr(e,t,n,E(),r);return nn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await fr(e),n=new qn(e);return t.register("authEvent",(t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Cr,{type:Cr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Cr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=er(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ae()||ve()||Ie()}}const kr=Or;class Pr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class xr extends Pr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new xr(e)}_finalizeEnroll(e,t,n){return Ut(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Tn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rr{constructor(){}static assertion(e){return xr._fromCredential(e)}}Rr.FACTOR_ID="phone";class Nr{static assertionForEnrollment(e,t){return Dr._fromSecret(e,t)}static assertionForSignIn(e,t){return Dr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;_("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Vt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Lr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Nr.FACTOR_ID="totp";class Dr extends Pr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Dr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Dr(t,e)}async _finalizeEnroll(e,t,n){return _("undefined"!==typeof this.secret,e,"argument-error"),Bt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){_(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Sn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Lr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Lr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Mr(e)||Mr(t))&&(r=!0),r&&(Mr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Mr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Mr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var jr="@firebase/auth",Fr="1.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},l=new Re(r,i,s,c);return Xe(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new $r(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(jr,Fr,Ur(e)),(0,r.KO)(jr,Fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=300,Hr=(0,i.XA)("authIdTokenMaxAge")||Br;let zr=null;const Wr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hr)return;const i=null===n||void 0===n?void 0:n.token;zr!==i&&(zr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ye(e,{popupRedirectResolver:kr,persistence:[En,Gt,Xt]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Wr(e.toString());Ft(n,t,(()=>t(n.currentUser))),jt(n,(e=>t(e)))}}const o=(0,i.Tj)("auth");return o&&Ze(n,`http://${o}`),n}function qr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Me({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",qr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Vr("Browser")},2005:function(e,t,n){"use strict";n.d(t,{H9:function(){return gt},aU:function(){return ut},BN:function(){return Ft}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(1795),n(4979);var r=n(6540),i=n(852),s=n(1363),o=n(4046);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="11.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s.Vy("@firebase/firestore");function u(e,...t){if(l.logLevel<=s.$b.DEBUG){const n=t.map(f);l.debug(`Firestore (${c}): ${e}`,...n)}}function h(e,...t){if(l.logLevel<=s.$b.ERROR){const n=t.map(f);l.error(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(l.logLevel<=s.$b.WARN){const n=t.map(f);l.warn(`Firestore (${c}): ${e}`,...n)}}function f(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw h(t),new Error(t)}function g(e,t){e||p()}function m(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="ok",y="cancelled",_="unknown",b="invalid-argument",w="deadline-exceeded",E="not-found",I="permission-denied",T="unauthenticated",S="resource-exhausted",A="failed-precondition",C="aborted",O="out-of-range",k="unimplemented",P="internal",x="unavailable";class R extends o.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(a.UNAUTHENTICATED)))}shutdown(){}}class L{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class M{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(g("string"==typeof e.accessToken),new N(e.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class j{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=a.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class F{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new j(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e){this.h=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(g("string"==typeof e.token),new $(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class B{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new B("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof B&&e.projectId===this.projectId&&e.database===this.database}}class H{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===H.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof H?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends H{construct(e,t,n){return new z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new R(b,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new z(t)}static emptyPath(){return new z([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends H{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return W.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new R(b,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new R(b,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new R(b,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new R(b,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(z.fromString(e))}static fromName(e){return new q(z.fromString(e).popFirst(5))}static empty(){return new q(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new z(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t,n){if(!n)throw new R(b,`Function ${e}() cannot be called with an empty ${t}.`)}function Y(e){if(!q.isDocumentKey(e))throw new R(b,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function X(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function Z(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new R(b,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=X(e);throw new R(b,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let Q=null;function ee(){return null===Q?Q=function(){return 268435456+Math.round(2147483648*Math.random())}():Q++,"0x"+Q.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function te(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re,ie;function se(e){if(void 0===e)return h("RPC_ERROR","HTTP error has no status"),_;switch(e){case 200:return v;case 400:return A;case 401:return T;case 403:return I;case 404:return E;case 409:return C;case 416:return O;case 429:return S;case 499:return y;case 500:return _;case 501:return k;case 503:return x;case 504:return w;default:return e>=200&&e<300?v:e>=400&&e<500?A:e>=500&&e<600?P:_}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ie=re||(re={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";class oe extends class{get m(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.A=t+"://"+e.host,this.T=`projects/${n}/databases/${r}`,this.R="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}P(e,t,n,r,i){const s=ee(),o=this.V(e,t.toUriEncodedString());u("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.T,"x-goog-request-params":this.R};return this.I(a,r,i),this.p(e,o,a,n).then((t=>(u("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw d("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}g(e,t,n,r,i,s){return this.P(e,t,n,r,i)}I(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+c}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}V(e,t){const n=ne[e];return`${this.A}/v1/${t}:${n}`}terminate(){}}{F(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,n,r){var i;const s=JSON.stringify(r);let o;try{o=await fetch(t,{method:"POST",headers:n,body:s})}catch(e){const t=e;throw new R(se(t.status),"Request failed with error: "+t.statusText)}if(!o.ok){let e=await o.json();Array.isArray(e)&&(e=e[0]);const t=null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message;throw new R(se(o.status),`Request failed with error: ${null!=t?t:o.statusText}`)}return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ae(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function le(e,t){return e<t?-1:e>t?1:0}function ue(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function de(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new fe("Invalid base64 string: "+e):e}}(e);return new pe(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const ge=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(e){if(g(!!e),"string"==typeof e){let t=0;const n=ge.exec(e);if(g(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ve(e.seconds),nanos:ve(e.nanos)}}function ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ye(e){return"string"==typeof e?pe.fromBase64String(e):pe.fromUint8Array(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new _e(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(b,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(b,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(b,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(b,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function we(e){const t=me(e.mapValue.fields.__local_write_time__.timestampValue);return new _e(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?be(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
  * @license
  * Copyright 2022 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:p()}function Ie(e,t){if(e===t)return!0;const n=Ee(e);if(n!==Ee(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return we(e).isEqual(we(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=me(e.timestampValue),r=me(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ye(e.bytesValue).isEqual(ye(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ve(e.geoPointValue.latitude)===ve(t.geoPointValue.latitude)&&ve(e.geoPointValue.longitude)===ve(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ve(e.integerValue)===ve(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ve(e.doubleValue),r=ve(t.doubleValue);return n===r?te(n)===te(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ue(e.arrayValue.values||[],t.arrayValue.values||[],Ie);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(he(n)!==he(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ie(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function Te(e){return!!e&&"mapValue"in e}function Se(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return de(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Se(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Se(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ce(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ce(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ce(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ce(this.root,e,this.comparator,!0)}}class Ce{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Oe.RED,this.left=null!=r?r:Oe.EMPTY,this.right=null!=i?i:Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Oe(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Oe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1,Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pe(this.data.getIterator())}getIteratorFrom(e){return new Pe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ke))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Pe{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new xe([])}unionWith(e){let t=new ke(K.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ue(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Te(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Se(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Se(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Te(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ie(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Te(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){de(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Re(Se(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.C=null,this.S=null,this.N=null,this.startAt,this.endAt}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:te(t)?"-0":t}}function Le(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!te(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):De(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(){this._=void 0}}class je extends Me{}class Fe extends Me{constructor(e){super(),this.elements=e}}class $e extends Me{constructor(e){super(),this.elements=e}}class Ue extends Me{constructor(e,t){super(),this.serializer=e,this.O=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Be{}class He extends Be{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ze extends Be{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class We extends Be{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ke extends Be{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const e={and:"AND",or:"OR"}})();class qe{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ge(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ye(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xe(e,t){return Ge(e,t.toTimestamp())}function Ze(e,t){return Je(e,t).canonicalString()}function Je(e,t){const n=function(e){return new z(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Qe(e,t){return Ze(e.databaseId,t.path)}function et(e,t,n){return{name:Qe(e,t),fields:n.value.mapValue.fields}}function tt(e,t){let n;if(t instanceof He)n={update:et(e,t.key,t.value)};else if(t instanceof We)n={delete:Qe(e,t.key)};else if(t instanceof ze)n={update:et(e,t.key,t.data),updateMask:nt(t.fieldMask)};else{if(!(t instanceof Ke))return p();n={verify:Qe(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof je)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fe)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof $e)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ue)return{fieldPath:t.field.canonicalString(),increment:n.O};throw p()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Xe(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:p()}(e,t.precondition)),n}function nt(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rt(e){return new qe(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.J=!1}Y(){if(this.J)throw new R(A,"The client has already been terminated.")}P(e,t,n,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.P(e,Je(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new R(_,e.toString())}))}g(e,t,n,r,i){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.g(e,Je(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new R(_,e.toString())}))}terminate(){this.J=!0,this.connection.terminate()}}async function st(e,t){const n=m(e),r={writes:t.map((e=>tt(n.serializer,e)))};await n.P("Commit",n.serializer.databaseId,z.emptyPath(),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ot=new Map;function at(e){if(e._terminated)throw new R(A,"The client has already been terminated.");if(!ot.has(e)){u("ComponentProvider","Initializing Datastore");const t=function(e){return new oe(e)}(function(e,t,n,r){return new V(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,J(r.experimentalLongPollingOptions),r.useFetchStreams)}
/**
      * @license
      * Copyright 2018 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e._databaseId,e.app.options.appId||"",e._persistenceKey,e._freezeSettings())),n=rt(e._databaseId),r=function(e,t,n,r){return new it(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,t,n);ot.set(e,r)}return ot.get(e)}class ct{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new R(b,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new R(b,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}!function(e,t,n,r){if(!0===t&&!0===r)throw new R(b,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new R(b,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new R(b,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new R(b,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lt{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ct({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new R(A,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new R(A,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ct(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new F(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new R(b,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ot.get(e);t&&(u("ComponentProvider","Removing Datastore"),ot.delete(e),t.terminate())}(this),Promise.resolve()}}function ut(e,t){const n="object"==typeof e?e:(0,r.Sx)(),i="string"==typeof e?e:t||"(default)",s=(0,r.j6)(n,"firestore/lite").getImmediate({identifier:i});if(!s._initialized){const e=(0,o.yU)("firestore");e&&ht(s,...e)}return s}function ht(e,t,n,r={}){var i;const s=(e=Z(e,lt))._getSettings(),c=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==c&&d("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:c,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=a.MOCK_USER;else{t=(0,o.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new R(b,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(s)}e._authCredentials=new L(new N(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new dt(this.firestore,e,this._query)}}class ft{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class pt extends dt{constructor(e,t,n){super(e,t,function(e){return new Ne(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new q(e))}withConverter(e){return new pt(this.firestore,e,this._path)}}function gt(e,t,...n){if(e=(0,o.Ku)(e),1===arguments.length&&(t=ce.newId()),G("doc","path",t),e instanceof lt){const r=z.fromString(t,...n);return Y(r),new ft(e,null,new q(r))}{if(!(e instanceof ft||e instanceof pt))throw new R(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Y(r),new ft(e.firestore,e instanceof pt?e.converter:null,new q(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(pe.fromBase64String(e))}catch(e){throw new R(b,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new mt(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new R(b,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(b,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(b,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=/^__.*__$/;class Et{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ze(e,this.data,this.fieldMask,t,this.fieldTransforms):new He(e,this.data,t,this.fieldTransforms)}}function It(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class Tt{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.X(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Tt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.et({path:n,nt:!1});return r.it(e),r}st(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.et({path:n,nt:!1});return r.X(),r}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return Lt(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(It(this.tt)&&wt.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class St{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rt(e)}lt(e,t,n,r=!1){return new Tt({tt:e,methodName:t,ct:n,path:K.emptyPath(),nt:!1,_t:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function At(e){const t=e._freezeSettings(),n=rt(e._databaseId);return new St(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ct(e,t,n,r,i,s={}){const o=e.lt(s.merge||s.mergeFields?2:0,t,n,i);xt("Data must be an object, but it was:",o,r);const a=kt(r,o);let c,l;if(s.merge)c=new xe(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Rt(t,r,n);if(!o.contains(i))throw new R(b,`Field '${i}' is specified in your field mask but missing from your input data.`);Mt(e,i)||e.push(i)}c=new xe(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Et(new Re(a),c,l)}function Ot(e,t){if(Pt(e=(0,o.Ku)(e)))return xt("Unsupported field value:",t,e),kt(e,t);if(e instanceof yt)return function(e,t){if(!It(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.nt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ot(i,t.ot(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,o.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Le(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=_e.fromDate(e);return{timestampValue:Ge(t.serializer,n)}}if(e instanceof _e){const n=new _e(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ge(t.serializer,n)}}if(e instanceof _t)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof mt)return{bytesValue:Ye(t.serializer,e._byteString)};if(e instanceof ft){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ze(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof bt)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.ut("VectorValues must only contain numeric values.");return De(t.serializer,e)}))}}}}}}(e,t);throw t.ut(`Unsupported field value: ${X(e)}`)}(e,t)}function kt(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):de(e,((e,r)=>{const i=Ot(r,t.rt(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Pt(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof _e||e instanceof _t||e instanceof mt||e instanceof ft||e instanceof yt||e instanceof bt)}function xt(e,t,n){if(!Pt(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=X(n);throw"an object"===r?t.ut(e+" a custom object"):t.ut(e+" "+r)}}function Rt(e,t,n){if((t=(0,o.Ku)(t))instanceof vt)return t._internalPath;if("string"==typeof t)return Dt(e,t);throw Lt("Field path arguments must be of type string or ",e,!1,void 0,n)}const Nt=new RegExp("[~\\*/\\[\\]]");function Dt(e,t,n){if(t.search(Nt)>=0)throw Lt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new vt(...t.split("."))._internalPath}catch(r){throw Lt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Lt(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(b,a+e+c)}function Mt(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function Ft(e,t,n){const r=jt((e=Z(e,ft)).converter,t,n),i=Ct(At(e.firestore),"setDoc",e._key,r,null!==e.converter,n);return st(at(e.firestore),[i.toMutation(e._key,Ve.none())])}!function(){!function(e){c=e}(`${r.MF}_lite`),(0,r.om)(new i.uA("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new lt(new M(e.getProvider("auth-internal")),new U(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new R(b,'"projectId" not provided in firebase.initializeApp.');return new B(e.options.projectId,t)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(r,t),r);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)("firestore-lite","4.7.5",""),(0,r.KO)("firestore-lite","4.7.5","esm2017")}()},8071:function(e,t,n){"use strict";n.d(t,{P2:function(){return w}});n(8992),n(7550),n(4979);const r=(e,t)=>t.some((t=>e instanceof t));let i,s;function o(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function f(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(_(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),d.set(t,e),t}function p(e){if(l.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));l.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function m(e){g=e(g)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(b(this),t),_(c.get(this))}:function(...t){return _(e.apply(b(this),t))}:function(t,...n){const r=e.call(b(this),t,...n);return u.set(r,t.sort?t.sort():[t]),_(r)}}function y(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&p(e),r(e,o())?new Proxy(e,g):e)}function _(e){if(e instanceof IDBRequest)return f(e);if(h.has(e))return h.get(e);const t=y(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const b=e=>d.get(e);function w(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=_(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(_(o.result),e.oldVersion,e.newVersion,_(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],T=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return T.set(t,s),s}m((e=>({...e,get:(t,n,r)=>S(t,n)||e.get(t,n,r),has:(t,n)=>!!S(t,n)||e.has(t,n)})))},1387:function(e,t,n){"use strict";n.d(t,{LA:function(){return ce},aE:function(){return it}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550);var r=n(6768),i=n(144);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&o(e.default)}const c=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=h(i)?i.map(e):e(i)}return n}const u=()=>{},h=Array.isArray;const d=/#/g,f=/&/g,p=/\//g,g=/=/g,m=/\?/g,v=/\+/g,y=/%5B/g,_=/%5D/g,b=/%5E/g,w=/%60/g,E=/%7B/g,I=/%7C/g,T=/%7D/g,S=/%20/g;function A(e){return encodeURI(""+e).replace(I,"|").replace(y,"[").replace(_,"]")}function C(e){return A(e).replace(E,"{").replace(T,"}").replace(b,"^")}function O(e){return A(e).replace(v,"%2B").replace(S,"+").replace(d,"%23").replace(f,"%26").replace(w,"`").replace(E,"{").replace(T,"}").replace(b,"^")}function k(e){return O(e).replace(g,"%3D")}function P(e){return A(e).replace(d,"%23").replace(m,"%3F")}function x(e){return null==e?"":P(e).replace(p,"%2F")}function R(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const N=/\/$/,D=e=>e.replace(N,"");function L(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=H(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:R(o)}}function M(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function j(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&$(t.matched[r],n.matched[i])&&U(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function $(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!V(e[n],t[n]))return!1;return!0}function V(e,t){return h(e)?B(e,t):h(t)?B(t,e):e===t}function B(e,t){return h(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function H(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var W,K;(function(e){e["pop"]="pop",e["push"]="push"})(W||(W={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function q(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const G=/^[^#]+#/;function Y(e,t){return e.replace(G,"#")+t}function X(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Z=()=>({left:window.scrollX,top:window.scrollY});function J(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=X(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let re=()=>location.protocol+"//"+location.host;function ie(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),j(n,"")}const o=j(n,e);return o+r+i}function se(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=ie(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:W.pop,direction:u?u>0?K.forward:K.back:K.unknown})}))};function l(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:Z()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function oe(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Z():null}}function ae(e){const{history:t,location:n}=window,r={value:ie(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:re()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=c({},t.state,oe(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=c({},i.value,t.state,{forward:e,scroll:Z()});s(o.current,o,!0);const a=c({},oe(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function ce(e){e=q(e);const t=ae(e),n=se(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=c({location:"",base:e,go:r,createHref:Y.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function fe(e,t){return c(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=c({},me,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ve,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;s.push({name:e,repeatable:n,optional:a});const h=l||ge;if(h!==ge){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(h(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=h(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function _e(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=_e(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Ie=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ie.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function Se(e,t,n){const r=ye(Te(e.path),n);const i=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ae(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=Oe(e);a.aliasOf=r&&r.record;const h=Re(t,e),d=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(Oe(c({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a})))}let f,p;for(const t of d){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(f=Se(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Pe(f)&&o(e.name)),Le(f)&&l(f),a.children){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function l(e){const t=Ne(e,n);n.splice(t,0,e),e.record.name&&!Pe(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,o=i.record.name,a=c(Ce(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ce(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw fe(1,{location:e,currentLocation:t});o=i.record.name,a=c({},t.params,e.params),s=i.stringify(a)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:l,meta:xe(l)}}function d(){n.length=0,r.clear()}return t=Re({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:i}}function Ce(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Oe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ke(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ke(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xe(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function Re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ne(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,s=be(e,t[i]);s<0?r=i:n=i+1}const i=De(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function De(e){let t=e;while(t=t.parent)if(Le(t)&&0===be(e,t))return t}function Le({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(v," "),n=e.indexOf("="),s=R(n<0?e:e.slice(0,n)),o=n<0?null:R(e.slice(n+1));if(s in t){let e=t[s];h(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=k(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=h(r)?r.map((e=>e&&O(e))):[r&&O(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=h(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const $e=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),Be=Symbol(""),He=Symbol("");function ze(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function We(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(fe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},u=s((()=>e.call(r&&r.instances[i],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function Ke(e,t,n,r,i=e=>e()){const s=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(o(l)){const o=l.__vccOpts||l,a=o[t];a&&s.push(We(a,n,r,c,e,i))}else{let o=l();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const o=a(s)?s.default:s;c.mods[e]=s,c.components[e]=o;const l=o.__vccOpts||o,u=l[t];return u&&We(u,n,r,c,e,i)()}))))}}}return s}function qe(e){const t=(0,r.WQ)(Ve),n=(0,r.WQ)(Be);const s=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex($.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex($.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&U(n.params,s.value.params)));function l(n={}){if(Ze(n)){const n=t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}function Ge(e){return 1===e.length?e[0]:e}const Ye=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=(0,i.Kh)(qe(e)),{options:s}=(0,r.WQ)(Ve),o=(0,r.EW)((()=>({[et(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[et(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&Ge(t.default(n));return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Xe=Ye;function Ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const et=(e,t,n)=>null!=e?e:null!=t?t:n,tt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(He),o=(0,r.EW)((()=>e.route||s.value)),a=(0,r.WQ)(Ue,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(a);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>o.value.matched[l.value]));(0,r.Gt)(Ue,(0,r.EW)((()=>l.value+1))),(0,r.Gt)($e,u),(0,r.Gt)(He,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&$(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,a=u.value,l=a&&a.components[s];if(!l)return nt(n.default,{Component:l,route:i});const d=a.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(a.instances[s]=null)},g=(0,r.h)(l,c({},f,t,{onVnodeUnmounted:p,ref:h}));return nt(n.default,{Component:g,route:i})||g}}});function nt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const rt=tt;function it(e){const t=Ae(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||je,a=e.history;const d=ze(),f=ze(),p=ze(),g=(0,i.IJ)(z);let m=z;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=l.bind(null,(e=>""+e)),y=l.bind(null,x),_=l.bind(null,R);function b(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function w(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=c({},r||g.value),"string"===typeof e){const i=L(n,e,r.path),s=t.resolve({path:i.path},r),o=a.createHref(i.fullPath);return c(i,s,{params:_(s.params),hash:R(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=c({},e,{path:L(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];i=c({},e,{params:y(t)}),r.params=y(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=v(_(s.params));const u=M(o,c({},e,{hash:C(l),path:s.path})),h=a.createHref(u);return c({fullPath:u,hash:l,query:o===je?Fe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function S(e){return"string"===typeof e?L(n,e,g.value.path):c({},e)}function A(e,t){if(m!==e)return fe(8,{from:t,to:e})}function O(e){return N(e)}function k(e){return O(c(S(e),{replace:!0}))}function P(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function N(e,t){const n=m=T(e),r=g.value,i=e.state,s=e.force,a=!0===e.replace,l=P(n);if(l)return N(c(S(l),{state:"object"===typeof l?c({},i,l.state):i,force:s,replace:a}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&F(o,r,n)&&(h=fe(16,{to:u,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):$(u,r)).catch((e=>pe(e)?pe(e,2)?e:ee(e):Y(e,u,r))).then((e=>{if(e){if(pe(e,2))return N(c({replace:a},S(e.to),{state:"object"===typeof e.to?c({},i,e.to.state):i,force:s}),t||u)}else e=V(u,r,!0,a,i);return U(u,r,e),e}))}function D(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let n;const[r,i,s]=st(e,t);n=Ke(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(We(r,e,t))}));const o=D.bind(null,e,t);return n.push(o),ce(n).then((()=>{n=[];for(const r of d.list())n.push(We(r,e,t));return n.push(o),ce(n)})).then((()=>{n=Ke(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(We(r,e,t))}));return n.push(o),ce(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(We(i,e,t));else n.push(We(r.beforeEnter,e,t));return n.push(o),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ke(s,"beforeRouteEnter",e,t,j),n.push(o),ce(n)))).then((()=>{n=[];for(const r of f.list())n.push(We(r,e,t));return n.push(o),ce(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function U(e,t,n){p.list().forEach((r=>j((()=>r(e,t,n)))))}function V(e,t,n,r,i){const o=A(e,t);if(o)return o;const l=t===z,u=s?history.state:{};n&&(r||l?a.replace(e.fullPath,c({scroll:l&&u&&u.scroll},i)):a.push(e.fullPath,i)),g.value=e,re(e,t,n,l),ee()}let B;function H(){B||(B=a.listen(((e,t,n)=>{if(!ae.listening)return;const r=T(e),i=P(r);if(i)return void N(c(i,{replace:!0,force:!0}),r).catch(u);m=r;const o=g.value;s&&te(Q(o.fullPath,n.delta),Z()),$(r,o).catch((e=>pe(e,12)?e:pe(e,2)?(N(c(S(e.to),{force:!0}),r).then((e=>{pe(e,20)&&!n.delta&&n.type===W.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Y(e,r,o)))).then((e=>{e=e||V(r,o,!1),e&&(n.delta&&!pe(e,8)?a.go(-n.delta,!1):n.type===W.pop&&pe(e,20)&&a.go(-1,!1)),U(r,o,e)})).catch(u)})))}let K,q=ze(),G=ze();function Y(e,t,n){ee(e);const r=G.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function X(){return K&&g.value!==z?Promise.resolve():new Promise(((e,t)=>{q.add([e,t])}))}function ee(e){return K||(K=!e,H(),q.list().forEach((([t,n])=>e?n(e):t())),q.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ne(Q(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&J(e))).catch((e=>Y(e,t,n)))}const ie=e=>a.go(e);let se;const oe=new Set,ae={currentRoute:g,listening:!0,addRoute:b,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:E,resolve:T,options:e,push:O,replace:k,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:X,install(e){const t=this;e.component("RouterLink",Xe),e.component("RouterView",rt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!se&&g.value===z&&(se=!0,O(a.location).catch((e=>{0})));const n={};for(const i in z)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(Ve,t),e.provide(Be,(0,i.Gc)(n)),e.provide(He,g);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=z,B&&B(),B=null,g.value=z,se=!1,K=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>j(t)))),Promise.resolve())}return ae}function st(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>$(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>$(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.ff144302.js.map