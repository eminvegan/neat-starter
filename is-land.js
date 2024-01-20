class Island extends HTMLElement{static tagName="is-land";static prefix="is-land--";static attr={template:"data-island",ready:"ready",defer:"defer-hydration"};static onceCache=new Map;static onReady=new Map;static fallback={":not(is-land,:defined,[defer-hydration])"(e,t,a){let n=document.createElement(a+t.localName);for(let s of t.getAttributeNames())n.setAttribute(s,t.getAttribute(s));let i=t.shadowRoot;if(!i){let o=t.querySelector(":scope > template:is([shadowrootmode], [shadowroot])");if(o){let l=o.getAttribute("shadowrootmode")||o.getAttribute("shadowroot")||"closed";(i=t.attachShadow({mode:l})).appendChild(o.content.cloneNode(!0))}}return i&&n.attachShadow({mode:i.mode}).append(...i.childNodes),n.append(...t.childNodes),t.replaceWith(n),e.then(()=>{n.shadowRoot&&t.shadowRoot.append(...n.shadowRoot.childNodes),t.append(...n.childNodes),n.replaceWith(t)})}};constructor(){super(),this.ready=new Promise(e=>{this.readyResolve=e})}static getParents(e,t=!1){let a=[];for(;e;){if(e.matches&&e.matches(Island.tagName)){if(t&&e===t)break;Conditions.hasConditions(e)&&a.push(e)}e=e.parentNode}return a}static async ready(e,t){if(t||(t=Island.getParents(e)),0===t.length)return;let a=await Promise.all(t.map(e=>e.wait()));if(a.length)return a[0]}forceFallback(){for(let e in window.Island&&Object.assign(Island.fallback,window.Island.fallback),Island.fallback){let t=Array.from(this.querySelectorAll(e)).reverse();for(let a of t){if(!a.isConnected)continue;let n=Island.getParents(a);if(1===n.length){let s=Island.ready(a,n);Island.fallback[e](s,a,Island.prefix)}}}}wait(){return this.ready}async connectedCallback(){Conditions.hasConditions(this)&&this.forceFallback(),await this.hydrate()}getTemplates(){return this.querySelectorAll(`template[${Island.attr.template}]`)}replaceTemplates(e){for(let t of e){if(Island.getParents(t,this).length>0)continue;let a=t.getAttribute(Island.attr.template);if("replace"===a){let n=Array.from(this.childNodes);for(let s of n)this.removeChild(s);this.appendChild(t.content);break}{let i=t.innerHTML;if("once"===a&&i){if(Island.onceCache.has(i)){t.remove();return}Island.onceCache.set(i,!0)}t.replaceWith(t.content)}}}async hydrate(){let e=[];this.parentNode&&e.push(Island.ready(this.parentNode));let t=Conditions.getConditions(this);for(let a in t)Conditions.map[a]&&e.push(Conditions.map[a](t[a],this));for(let n of(await Promise.all(e),this.replaceTemplates(this.getTemplates()),Island.onReady.values()))await n.call(this,Island);this.readyResolve(),this.setAttribute(Island.attr.ready,""),this.querySelectorAll(`[${Island.attr.defer}]`).forEach(e=>e.removeAttribute(Island.attr.defer))}}class Conditions{static map={visible:Conditions.visible,idle:Conditions.idle,interaction:Conditions.interaction,media:Conditions.media,"save-data":Conditions.saveData};static hasConditions(e){return Object.keys(Conditions.getConditions(e)).length>0}static getConditions(e){let t={};for(let a of Object.keys(Conditions.map))e.hasAttribute(`on:${a}`)&&(t[a]=e.getAttribute(`on:${a}`));return t}static visible(e,t){if("IntersectionObserver"in window)return new Promise(e=>{let a=new IntersectionObserver(t=>{let[n]=t;n.isIntersecting&&(a.unobserve(n.target),e())});a.observe(t)})}static idle(){let e=new Promise(e=>{"complete"!==document.readyState?window.addEventListener("load",()=>e(),{once:!0}):e()});return"requestIdleCallback"in window?Promise.all([new Promise(e=>{requestIdleCallback(()=>{e()})}),e,]):e}static interaction(e,t){let a=["click","touchstart"];return e&&(a=(e||"").split(",").map(e=>e.trim())),new Promise(e=>{function n(s){for(let i of(e(),a))t.removeEventListener(i,n)}for(let s of a)t.addEventListener(s,n,{once:!0,passive:!0})})}static media(e){let t={matches:!0};if(e&&"matchMedia"in window&&(t=window.matchMedia(e)),!t.matches)return new Promise(e=>{t.addListener(t=>{t.matches&&e()})})}static saveData(e){if("connection"in navigator&&navigator.connection.saveData!==("false"!==e))return new Promise(()=>{})}}"customElements"in window&&(window.customElements.define(Island.tagName,Island),window.Island=Island);export const ready=Island.ready;export{Island,Island as component};