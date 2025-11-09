import{$ as br,$a as ni,A as rh,Aa as xh,Ab as mn,B as Bc,Ba as Mh,Bb as Vh,C as Yn,Ca as Sh,Cb as qc,D as ji,Da as dn,Db as zo,E as yi,Ea as Eh,Eb as Ho,F as Vc,Fa as Ot,Fb as Go,G as sh,Ga as Is,Gb as Zn,H as oh,Ha as wh,Hb as zh,I as ah,Ia as Bo,Ib as Hh,J as ch,Ja as qi,Jb as tn,K as Oo,Ka as Lt,Kb as Wo,L as Qt,La as Ah,Lb as Ns,M as Ts,Ma as Gc,Mb as Gh,N as bt,Na as Wc,Nb as Nn,O as Ye,Oa as Th,Ob as Wh,P as $i,Pa as jc,Pb as St,Q as pe,Qa as ut,Qb as Fn,R as mt,Ra as gt,Rb as jh,S as lh,Sa as At,T as Ee,Ta as Sr,U as Ne,Ua as Ch,V as G,Va as Tt,W as vr,Wa as Mt,X as uh,Xa as $c,Y as bi,Ya as Vo,Z as Mn,Za as Dh,_ as yr,_a as Er,a as te,aa as dh,ab as Ps,b as pt,ba as hh,bb as Ls,ca as Sn,cb as Rh,d as Es,da as nt,db as Ih,e as Po,ea as ko,eb as Ph,f as th,fa as xi,fb as En,g as ws,ga as zc,gb as ct,h as kc,ha as un,hb as rt,i as Uc,ia as fh,ib as Ct,j as Vt,ja as ph,jb as Lh,k as bn,ka as Mi,kb as Nh,l as ei,la as Cs,lb as Fh,m as Kt,ma as Ft,mb as Oh,n as ye,na as mh,nb as kh,o as Gi,oa as Ds,ob as en,p as nh,pa as gh,pb as wr,q as ih,qa as Xi,qb as Pn,r as Ie,ra as Uo,rb as hn,s as As,sa as Rs,sb as Xc,t as xn,ta as Hc,tb as Ln,u as Lo,ua as xr,ub as fn,v as No,va as Mr,vb as pn,w as Fo,wa as _h,wb as Uh,x as ti,xa as vh,xb as Bh,y as vi,ya as yh,yb as qt,z as Wi,za as bh,zb as Yi}from"./chunk-GGDG4RFI.js";var qh=null;function wn(){return qh}function Yc(i){qh??=i}var Fs=class{},Os=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>G(Yh),providedIn:"platform"})}return i})();var Yh=(()=>{class i extends Os{_location;_history;_doc=G(nt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return wn().getBaseHref(this._doc)}onPopState(e){let n=wn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=wn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function jo(i,t){return i?t?i.endsWith("/")?t.startsWith("/")?i+t.slice(1):i+t:t.startsWith("/")?i+t:`${i}/${t}`:i:t}function $h(i){let t=i.search(/#|\?|$/);return i[t-1]==="/"?i.slice(0,t-1)+i.slice(t):i}function On(i){return i&&i[0]!=="?"?`?${i}`:i}var Si=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>G(Zc),providedIn:"root"})}return i})(),$o=new Ee(""),Zc=(()=>{class i extends Si{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??G(nt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return jo(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+On(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+On(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+On(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||i)(Ne(Os),Ne($o,8))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Zi=(()=>{class i{_subject=new Vt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=d_($h(Xh(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+On(n))}normalize(e){return i.stripTrailingSlash(u_(this._basePath,Xh(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+On(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+On(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=On;static joinWithSlash=jo;static stripTrailingSlash=$h;static \u0275fac=function(n){return new(n||i)(Ne(Si))};static \u0275prov=pe({token:i,factory:()=>l_(),providedIn:"root"})}return i})();function l_(){return new Zi(Ne(Si))}function u_(i,t){if(!i||!t.startsWith(i))return t;let e=t.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function Xh(i){return i.replace(/\/index.html$/,"")}function d_(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var Jc=(()=>{class i extends Si{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=jo(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+On(s))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+On(s))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||i)(Ne(Os),Ne($o,8))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})();var Xo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({})}return i})();function Kc(i,t){t=encodeURIComponent(t);for(let e of i.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===t)return decodeURIComponent(s)}return null}var ks=class{};var Qc="browser";function Zh(i){return i===Qc}var Yo=new Ee(""),rl=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,s){return this._findPluginFor(n).addEventListener(e,n,r,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new Ye(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||i)(Ne(Yo),Ne(Mt))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),Us=class{_doc;constructor(t){this._doc=t}manager},el="ng-app-id";function Jh(i){for(let t of i)t.remove()}function Kh(i,t){let e=t.createElement("style");return e.textContent=i,e}function p_(i,t,e,n){let r=i.head?.querySelectorAll(`style[${el}="${t}"],link[${el}="${t}"]`);if(r)for(let s of r)s.removeAttribute(el),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function nl(i,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var sl=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,s={}){this.doc=e,this.appId=n,this.nonce=r,p_(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Kh);n?.forEach(r=>this.addUsage(r,this.external,nl))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Jh(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Jh(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Kh(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,nl(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||i)(Ne(nt),Ne(Ds),Ne(Rs,8),Ne(Xi))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),tl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ol=/%COMP%/g;var ef="%COMP%",m_=`_nghost-${ef}`,g_=`_ngcontent-${ef}`,__=!0,v_=new Ee("",{providedIn:"root",factory:()=>__});function y_(i){return g_.replace(ol,i)}function b_(i){return m_.replace(ol,i)}function tf(i,t){return t.map(e=>e.replace(ol,i))}var zs=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,s,o,a,c,l=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new Bs(e,o,c,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof qo?r.applyToHost(e):r instanceof Vs&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer,f=this.tracingService;switch(n.encapsulation){case Hc.Emulated:s=new qo(c,l,n,this.appId,u,o,a,h,f);break;case Hc.ShadowDom:return new il(c,l,e,n,o,a,this.nonce,h,f);default:s=new Vs(c,l,n,u,o,a,h,f);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||i)(Ne(rl),Ne(sl),Ne(Ds),Ne(v_),Ne(nt),Ne(Xi),Ne(Mt),Ne(Rs),Ne(Ch,8))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),Bs=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,r,s){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(tl[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Qh(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Qh(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new Ye(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;let s=tl[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let r=tl[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(Is.DashCase|Is.Important)?t.style.setProperty(e,n,r&Is.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Is.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,r){if(typeof t=="string"&&(t=wn().getGlobalEventTarget(this.doc,t),!t))throw new Ye(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(t,e,s)),this.eventManager.addEventListener(t,e,s,r)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Qh(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var il=class extends Bs{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,r,s,o,a,c,l){super(t,s,o,c,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=tf(r.id,u);for(let f of u){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=f,this.shadowRoot.appendChild(m)}let h=r.getExternalStyles?.();if(h)for(let f of h){let m=nl(f,s);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Vs=class extends Bs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,r,s,o,a,c,l){super(t,s,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=l?tf(l,u):u,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&wh.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},qo=class extends Vs{contentAttr;hostAttr;constructor(t,e,n,r,s,o,a,c,l){let u=r+"-"+n.id;super(t,e,n,s,o,a,c,l,u),this.contentAttr=y_(u),this.hostAttr=b_(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}};var Zo=class i extends Fs{supportsDOMEvents=!0;static makeCurrent(){Yc(new i)}onAndCancel(t,e,n,r){return t.addEventListener(e,n,r),()=>{t.removeEventListener(e,n,r)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=M_();return e==null?null:S_(e)}resetBaseElement(){Hs=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Kc(document.cookie,t)}},Hs=null;function M_(){return Hs=Hs||document.head.querySelector("base"),Hs?Hs.getAttribute("href"):null}function S_(i){return new URL(i,document.baseURI).pathname}var E_=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),rf=(()=>{class i extends Us{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,s){return e.addEventListener(n,r,s),()=>this.removeEventListener(e,n,r,s)}removeEventListener(e,n,r,s){return e.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(Ne(nt))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),nf=["alt","control","meta","shift"],w_={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},A_={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},sf=(()=>{class i extends Us{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>wn().onAndCancel(e,o.domEventName,a,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),nf.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),o+=l+".")}),o+=s,n.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(e,n){let r=w_[e.key]||e.key,s="";return n.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),nf.forEach(o=>{if(o!==r){let a=A_[o];a(e)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(e,n,r){return s=>{i.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||i)(Ne(nt))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})();function al(i,t,e){let n=te({rootComponent:i,platformRef:e?.platformRef},T_(t));return Wh(n)}function T_(i){return{appProviders:[...P_,...i?.providers??[]],platformProviders:I_}}function C_(){Zo.makeCurrent()}function D_(){return new xi}function R_(){return mh(document),document}var I_=[{provide:Xi,useValue:Qc},{provide:gh,useValue:C_,multi:!0},{provide:nt,useFactory:R_}];var P_=[{provide:uh,useValue:"root"},{provide:xi,useFactory:D_},{provide:Yo,useClass:rf,multi:!0,deps:[nt]},{provide:Yo,useClass:sf,multi:!0,deps:[nt]},zs,sl,rl,{provide:Bo,useExisting:zs},{provide:ks,useClass:E_},[]];var ll=class{};var Ji=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let s=t.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var ul=class{encodeKey(t){return of(t)}encodeValue(t){return of(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function N_(i,t){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,s)),t.decodeValue(r.slice(s+1))],c=e.get(o)||[];c.push(a),e.set(o,c)}),e}var F_=/%(\d[a-f0-9])/gi,O_={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function of(i){return encodeURIComponent(i).replace(F_,(t,e)=>O_[e]??t)}function Jo(i){return`${i}`}var ii=class i{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new ul,t.fromString){if(t.fromObject)throw new Ye(2805,!1);this.map=N_(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],r=Array.isArray(n)?n.map(Jo):[Jo(n)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Jo(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(Jo(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var dl=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function k_(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function af(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function cf(i){return typeof Blob<"u"&&i instanceof Blob}function lf(i){return typeof FormData<"u"&&i instanceof FormData}function U_(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var B_="X-Request-URL",uf="text/plain",df="application/json",pC=`${df}, ${uf}, */*`,Ar=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,r){this.url=e,this.method=t.toUpperCase();let s;if(k_(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s){if(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,this.keepalive=!!s.keepalive,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),s.priority&&(this.priority=s.priority),s.cache&&(this.cache=s.cache),s.credentials&&(this.credentials=s.credentials),typeof s.timeout=="number"){if(s.timeout<1||!Number.isInteger(s.timeout))throw new Ye(2822,"");this.timeout=s.timeout}s.mode&&(this.mode=s.mode),s.redirect&&(this.redirect=s.redirect),s.integrity&&(this.integrity=s.integrity),s.referrer&&(this.referrer=s.referrer),this.transferCache=s.transferCache}if(this.headers??=new Ji,this.context??=new dl,!this.params)this.params=new ii,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||af(this.body)||cf(this.body)||lf(this.body)||U_(this.body)?this.body:this.body instanceof ii?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||lf(this.body)?null:cf(this.body)?this.body.type||null:af(this.body)?null:typeof this.body=="string"?uf:this.body instanceof ii?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?df:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,s=t.keepalive??this.keepalive,o=t.priority||this.priority,a=t.cache||this.cache,c=t.mode||this.mode,l=t.redirect||this.redirect,u=t.credentials||this.credentials,h=t.referrer||this.referrer,f=t.integrity||this.integrity,m=t.transferCache??this.transferCache,g=t.timeout??this.timeout,_=t.body!==void 0?t.body:this.body,p=t.withCredentials??this.withCredentials,d=t.reportProgress??this.reportProgress,E=t.headers||this.headers,M=t.params||this.params,w=t.context??this.context;return t.setHeaders!==void 0&&(E=Object.keys(t.setHeaders).reduce((R,T)=>R.set(T,t.setHeaders[T]),E)),t.setParams&&(M=Object.keys(t.setParams).reduce((R,T)=>R.set(T,t.setParams[T]),M)),new i(e,n,_,{params:M,headers:E,context:w,reportProgress:d,responseType:r,withCredentials:p,transferCache:m,keepalive:s,cache:a,priority:o,timeout:g,mode:c,redirect:l,credentials:u,referrer:h,integrity:f})}},fl=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(fl||{}),hl=class{headers;status;statusText;url;ok;type;redirected;constructor(t,e=200,n="OK"){this.headers=t.headers||new Ji,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.ok=this.status>=200&&this.status<300}};var Ko=class i extends hl{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=fl.Response;clone(t={}){return new i({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected})}};function cl(i,t){return{body:t,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer}}var pl=(()=>{class i{handler;constructor(e){this.handler=e}request(e,n,r={}){let s;if(e instanceof Ar)s=e;else{let c;r.headers instanceof Ji?c=r.headers:c=new Ji(r.headers);let l;r.params&&(r.params instanceof ii?l=r.params:l=new ii({fromObject:r.params})),s=new Ar(e,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,integrity:r.integrity,timeout:r.timeout})}let o=ye(s).pipe(Wi(c=>this.handler.handle(c)));if(e instanceof Ar||r.observe==="events")return o;let a=o.pipe(ti(c=>c instanceof Ko));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(Ie(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Ye(2806,!1);return c.body}));case"blob":return a.pipe(Ie(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Ye(2807,!1);return c.body}));case"text":return a.pipe(Ie(c=>{if(c.body!==null&&typeof c.body!="string")throw new Ye(2808,!1);return c.body}));case"json":default:return a.pipe(Ie(c=>c.body))}case"response":return a;default:throw new Ye(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ii().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,cl(r,n))}post(e,n,r={}){return this.request("POST",e,cl(r,n))}put(e,n,r={}){return this.request("PUT",e,cl(r,n))}static \u0275fac=function(n){return new(n||i)(Ne(ll))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})();var mC=RegExp(`^${B_}:`,"m");var hf=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||i)(Ne(nt))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ml=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=Ne(j_),r},providedIn:"root"})}return i})(),j_=(()=>{class i extends ml{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case dn.NONE:return n;case dn.HTML:return Mr(n,"HTML")?xr(n):Sh(this._doc,String(n)).toString();case dn.STYLE:return Mr(n,"Style")?xr(n):n;case dn.SCRIPT:if(Mr(n,"Script"))return xr(n);throw new Ye(5200,!1);case dn.URL:return Mr(n,"URL")?xr(n):Mh(String(n));case dn.RESOURCE_URL:if(Mr(n,"ResourceURL"))return xr(n);throw new Ye(5201,!1);default:throw new Ye(5202,!1)}}bypassSecurityTrustHtml(e){return _h(e)}bypassSecurityTrustStyle(e){return vh(e)}bypassSecurityTrustScript(e){return yh(e)}bypassSecurityTrustUrl(e){return bh(e)}bypassSecurityTrustResourceUrl(e){return xh(e)}static \u0275fac=function(n){return new(n||i)(Ne(nt))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ke="primary",to=Symbol("RouteTitle"),bl=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Pr(i){return new bl(i)}function $_(i,t,e){let n=e.path.split("/");if(n.length>i.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function X_(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;++e)if(!Jn(i[e],t[e]))return!1;return!0}function Jn(i,t){let e=i?xl(i):void 0,n=t?xl(t):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let s=0;s<e.length;s++)if(r=e[s],!Mf(i[r],t[r]))return!1;return!0}function xl(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Mf(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let e=[...i].sort(),n=[...t].sort();return e.every((r,s)=>n[s]===r)}else return i===t}function Sf(i){return i.length>0?i[i.length-1]:null}function oi(i){return nh(i)?i:Vo(i)?Kt(Promise.resolve(i)):ye(i)}var q_={exact:wf,subset:Af},Ef={exact:Y_,subset:Z_,ignored:()=>!0};function pf(i,t,e){return q_[e.paths](i.root,t.root,e.matrixParams)&&Ef[e.queryParams](i.queryParams,t.queryParams)&&!(e.fragment==="exact"&&i.fragment!==t.fragment)}function Y_(i,t){return Jn(i,t)}function wf(i,t,e){if(!Qi(i.segments,t.segments)||!ta(i.segments,t.segments,e)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!i.children[n]||!wf(i.children[n],t.children[n],e))return!1;return!0}function Z_(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(e=>Mf(i[e],t[e]))}function Af(i,t,e){return Tf(i,t,t.segments,e)}function Tf(i,t,e,n){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!Qi(r,e)||t.hasChildren()||!ta(r,e,n))}else if(i.segments.length===e.length){if(!Qi(i.segments,e)||!ta(i.segments,e,n))return!1;for(let r in t.children)if(!i.children[r]||!Af(i.children[r],t.children[r],n))return!1;return!0}else{let r=e.slice(0,i.segments.length),s=e.slice(i.segments.length);return!Qi(i.segments,r)||!ta(i.segments,r,n)||!i.children[ke]?!1:Tf(i.children[ke],t,s,n)}}function ta(i,t,e){return t.every((n,r)=>Ef[e](i[r].parameters,n.parameters))}var si=class{root;queryParams;fragment;_queryParamMap;constructor(t=new Ke([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Pr(this.queryParams),this._queryParamMap}toString(){return Q_.serialize(this)}},Ke=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return na(this)}},Ki=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=Pr(this.parameters),this._parameterMap}toString(){return Df(this)}};function J_(i,t){return Qi(i,t)&&i.every((e,n)=>Jn(e.parameters,t[n].parameters))}function Qi(i,t){return i.length!==t.length?!1:i.every((e,n)=>e.path===t[n].path)}function K_(i,t){let e=[];return Object.entries(i.children).forEach(([n,r])=>{n===ke&&(e=e.concat(t(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==ke&&(e=e.concat(t(r,n)))}),e}var pa=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>new Lr,providedIn:"root"})}return i})(),Lr=class{parse(t){let e=new Sl(t);return new si(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Gs(t.root,!0)}`,n=nv(t.queryParams),r=typeof t.fragment=="string"?`#${ev(t.fragment)}`:"";return`${e}${n}${r}`}},Q_=new Lr;function na(i){return i.segments.map(t=>Df(t)).join("/")}function Gs(i,t){if(!i.hasChildren())return na(i);if(t){let e=i.children[ke]?Gs(i.children[ke],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==ke&&n.push(`${r}:${Gs(s,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=K_(i,(n,r)=>r===ke?[Gs(i.children[ke],!1)]:[`${r}:${Gs(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[ke]!=null?`${na(i)}/${e[0]}`:`${na(i)}/(${e.join("//")})`}}function Cf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Qo(i){return Cf(i).replace(/%3B/gi,";")}function ev(i){return encodeURI(i)}function Ml(i){return Cf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ia(i){return decodeURIComponent(i)}function mf(i){return ia(i.replace(/\+/g,"%20"))}function Df(i){return`${Ml(i.path)}${tv(i.parameters)}`}function tv(i){return Object.entries(i).map(([t,e])=>`;${Ml(t)}=${Ml(e)}`).join("")}function nv(i){let t=Object.entries(i).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Qo(e)}=${Qo(r)}`).join("&"):`${Qo(e)}=${Qo(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var iv=/^[^\/()?;#]+/;function gl(i){let t=i.match(iv);return t?t[0]:""}var rv=/^[^\/()?;=#]+/;function sv(i){let t=i.match(rv);return t?t[0]:""}var ov=/^[^=?&#]+/;function av(i){let t=i.match(ov);return t?t[0]:""}var cv=/^[^&#]+/;function lv(i){let t=i.match(cv);return t?t[0]:""}var Sl=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ke([],{}):new Ke([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n[ke]=new Ke(t,e)),n}parseSegment(){let t=gl(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new Ye(4009,!1);return this.capture(t),new Ki(ia(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=sv(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=gl(this.remaining);r&&(n=r,this.capture(n))}t[ia(e)]=ia(n)}parseQueryParam(t){let e=av(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=lv(this.remaining);o&&(n=o,this.capture(n))}let r=mf(e),s=mf(n);if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(s)}else t[r]=s}parseParens(t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=gl(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ye(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=ke);let o=this.parseChildren();e[s]=Object.keys(o).length===1?o[ke]:new Ke([],o),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new Ye(4011,!1)}};function Rf(i){return i.segments.length>0?new Ke([],{[ke]:i}):i}function If(i){let t={};for(let[n,r]of Object.entries(i.children)){let s=If(r);if(n===ke&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))t[o]=a;else(s.segments.length>0||s.hasChildren())&&(t[n]=s)}let e=new Ke(i.segments,t);return uv(e)}function uv(i){if(i.numberOfChildren===1&&i.children[ke]){let t=i.children[ke];return new Ke(i.segments.concat(t.segments),t.children)}return i}function Nr(i){return i instanceof si}function dv(i,t,e=null,n=null){let r=Pf(i);return Lf(r,t,e,n)}function Pf(i){let t;function e(s){let o={};for(let c of s.children){let l=e(c);o[c.outlet]=l}let a=new Ke(s.url,o);return s===i&&(t=a),a}let n=e(i.root),r=Rf(n);return t??r}function Lf(i,t,e,n){let r=i;for(;r.parent;)r=r.parent;if(t.length===0)return _l(r,r,r,e,n);let s=hv(t);if(s.toRoot())return _l(r,r,new Ke([],{}),e,n);let o=fv(s,r,i),a=o.processChildren?js(o.segmentGroup,o.index,s.commands):Ff(o.segmentGroup,o.index,s.commands);return _l(r,o.segmentGroup,a,e,n)}function ra(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function qs(i){return typeof i=="object"&&i!=null&&i.outlets}function _l(i,t,e,n,r){let s={};n&&Object.entries(n).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;i===t?o=e:o=Nf(i,t,e);let a=Rf(If(o));return new si(a,s,r)}function Nf(i,t,e){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===t?n[r]=e:n[r]=Nf(s,t,e)}),new Ke(i.segments,n)}var sa=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&ra(n[0]))throw new Ye(4003,!1);let r=n.find(qs);if(r&&r!==Sf(n))throw new Ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function hv(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new sa(!0,0,i);let t=0,e=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new sa(e,t,n)}var Dr=class{segmentGroup;processChildren;index;constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function fv(i,t,e){if(i.isAbsolute)return new Dr(t,!0,0);if(!e)return new Dr(t,!1,NaN);if(e.parent===null)return new Dr(e,!0,0);let n=ra(i.commands[0])?0:1,r=e.segments.length-1+n;return pv(e,r,i.numberOfDoubleDots)}function pv(i,t,e){let n=i,r=t,s=e;for(;s>r;){if(s-=r,n=n.parent,!n)throw new Ye(4005,!1);r=n.segments.length}return new Dr(n,!1,r-s)}function mv(i){return qs(i[0])?i[0].outlets:{[ke]:i}}function Ff(i,t,e){if(i??=new Ke([],{}),i.segments.length===0&&i.hasChildren())return js(i,t,e);let n=gv(i,t,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new Ke(i.segments.slice(0,n.pathIndex),{});return s.children[ke]=new Ke(i.segments.slice(n.pathIndex),i.children),js(s,0,r)}else return n.match&&r.length===0?new Ke(i.segments,{}):n.match&&!i.hasChildren()?El(i,t,e):n.match?js(i,0,r):El(i,t,e)}function js(i,t,e){if(e.length===0)return new Ke(i.segments,{});{let n=mv(e),r={};if(Object.keys(n).some(s=>s!==ke)&&i.children[ke]&&i.numberOfChildren===1&&i.children[ke].segments.length===0){let s=js(i.children[ke],t,e);return new Ke(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ff(i.children[s],t,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new Ke(i.segments,r)}}function gv(i,t,e){let n=0,r=t,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=e.length)return s;let o=i.segments[r],a=e[n];if(qs(a))break;let c=`${a}`,l=n<e.length-1?e[n+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!_f(c,l,o))return s;n+=2}else{if(!_f(c,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function El(i,t,e){let n=i.segments.slice(0,t),r=0;for(;r<e.length;){let s=e[r];if(qs(s)){let c=_v(s.outlets);return new Ke(n,c)}if(r===0&&ra(e[0])){let c=i.segments[t];n.push(new Ki(c.path,gf(e[0]))),r++;continue}let o=qs(s)?s.outlets[ke]:`${s}`,a=r<e.length-1?e[r+1]:null;o&&a&&ra(a)?(n.push(new Ki(o,gf(a))),r+=2):(n.push(new Ki(o,{})),r++)}return new Ke(n,{})}function _v(i){let t={};return Object.entries(i).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=El(new Ke([],{}),0,n))}),t}function gf(i){let t={};return Object.entries(i).forEach(([e,n])=>t[e]=`${n}`),t}function _f(i,t,e){return i==e.path&&Jn(t,e.parameters)}var $s="imperative",kt=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(kt||{}),An=class{id;url;constructor(t,e){this.id=t,this.url=e}},Fr=class extends An{type=kt.NavigationStart;navigationTrigger;restoredState;constructor(t,e,n="imperative",r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ei=class extends An{urlAfterRedirects;type=kt.NavigationEnd;constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},nn=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(nn||{}),oa=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(oa||{}),ri=class extends An{reason;code;type=kt.NavigationCancel;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},wi=class extends An{reason;code;type=kt.NavigationSkipped;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}},Ys=class extends An{error;target;type=kt.NavigationError;constructor(t,e,n,r){super(t,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},aa=class extends An{urlAfterRedirects;state;type=kt.RoutesRecognized;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wl=class extends An{urlAfterRedirects;state;type=kt.GuardsCheckStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Al=class extends An{urlAfterRedirects;state;shouldActivate;type=kt.GuardsCheckEnd;constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Tl=class extends An{urlAfterRedirects;state;type=kt.ResolveStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cl=class extends An{urlAfterRedirects;state;type=kt.ResolveEnd;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dl=class{route;type=kt.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Rl=class{route;type=kt.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Il=class{snapshot;type=kt.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pl=class{snapshot;type=kt.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ll=class{snapshot;type=kt.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nl=class{snapshot;type=kt.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Zs=class{},Or=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function vv(i){return!(i instanceof Zs)&&!(i instanceof Or)}function yv(i,t){return i.providers&&!i._injector&&(i._injector=jc(i.providers,t,`Route: ${i.path}`)),i._injector??t}function kn(i){return i.outlet||ke}function bv(i,t){let e=i.filter(n=>kn(n)===t);return e.push(...i.filter(n=>kn(n)!==t)),e}function Ur(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let t=i.parent;t;t=t.parent){let e=t.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Fl=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ur(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new no(this.rootInjector)}},no=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Fl(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||i)(Ne(bi))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ca=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Ol(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=Ol(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=kl(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return kl(t,this._root).map(e=>e.value)}};function Ol(i,t){if(i===t.value)return t;for(let e of t.children){let n=Ol(i,e);if(n)return n}return null}function kl(i,t){if(i===t.value)return[t];for(let e of t.children){let n=kl(i,e);if(n.length)return n.unshift(t),n}return[]}var gn=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Cr(i){let t={};return i&&i.children.forEach(e=>t[e.value.outlet]=e),t}var la=class extends ca{snapshot;constructor(t,e){super(t),this.snapshot=e,$l(this,t)}toString(){return this.snapshot.toString()}};function Of(i){let t=xv(i),e=new bn([new Ki("",{})]),n=new bn({}),r=new bn({}),s=new bn({}),o=new bn(""),a=new er(e,n,s,o,r,ke,i,t.root);return a.snapshot=t.root,new la(new gn(a,[]),t)}function xv(i){let t={},e={},n={},s=new Rr([],t,n,"",e,ke,i,null,{});return new da("",new gn(s,[]))}var er=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,n,r,s,o,a,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ie(l=>l[to]))??ye(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ie(t=>Pr(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ie(t=>Pr(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ua(i,t,e="emptyOnly"){let n,{routeConfig:r}=i;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:te(te({},t.params),i.params),data:te(te({},t.data),i.data),resolve:te(te(te(te({},i.data),t.data),r?.data),i._resolvedData)}:n={params:te({},i.params),data:te({},i.data),resolve:te(te({},i.data),i._resolvedData??{})},r&&Uf(r)&&(n.resolve[to]=r.title),n}var Rr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[to]}constructor(t,e,n,r,s,o,a,c,l){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Pr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Pr(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},da=class extends ca{url;constructor(t,e){super(e),this.url=t,$l(this,e)}toString(){return kf(this._root)}};function $l(i,t){t.value._routerState=i,t.children.forEach(e=>$l(i,e))}function kf(i){let t=i.children.length>0?` { ${i.children.map(kf).join(", ")} } `:"";return`${i.value}${t}`}function vl(i){if(i.snapshot){let t=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Jn(t.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Jn(t.params,e.params)||i.paramsSubject.next(e.params),X_(t.url,e.url)||i.urlSubject.next(e.url),Jn(t.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Ul(i,t){let e=Jn(i.params,t.params)&&J_(i.url,t.url),n=!i.parent!=!t.parent;return e&&!n&&(!i.parent||Ul(i.parent,t.parent))}function Uf(i){return typeof i.title=="string"||i.title===null}var Mv=new Ee(""),Bf=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ke;activateEvents=new Tt;deactivateEvents=new Tt;attachEvents=new Tt;detachEvents=new Tt;routerOutletData=Gh(void 0);parentContexts=G(no);location=G(Gc);changeDetector=G(Nn);inputBinder=G(ma,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ye(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new Ye(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Bl(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=At({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Mi]})}return i})(),Bl=class{route;childContexts;parent;outletData;constructor(t,e,n,r){this.route=t,this.childContexts=e,this.parent=n,this.outletData=r}get(t,e){return t===er?this.route:t===no?this.childContexts:t===Mv?this.outletData:this.parent.get(t,e)}},ma=new Ee("");var Vf=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Ct(0,"router-outlet")},dependencies:[Bf],encapsulation:2})}return i})();function Xl(i){let t=i.children&&i.children.map(Xl),e=t?pt(te({},i),{children:t}):te({},i);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==ke&&(e.component=Vf),e}function Sv(i,t,e){let n=Js(i,t._root,e?e._root:void 0);return new la(n,t)}function Js(i,t,e){if(e&&i.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let r=Ev(i,t,e);return new gn(n,r)}else{if(i.shouldAttach(t.value)){let s=i.retrieve(t.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=t.value,o.children=t.children.map(a=>Js(i,a)),o}}let n=wv(t.value),r=t.children.map(s=>Js(i,s));return new gn(n,r)}}function Ev(i,t,e){return t.children.map(n=>{for(let r of e.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Js(i,n,r);return Js(i,n)})}function wv(i){return new er(new bn(i.url),new bn(i.params),new bn(i.queryParams),new bn(i.fragment),new bn(i.data),i.outlet,i.component,i)}var Ks=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},zf="ngNavigationCancelingError";function ha(i,t){let{redirectTo:e,navigationBehaviorOptions:n}=Nr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=Hf(!1,nn.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Hf(i,t){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[zf]=!0,e.cancellationCode=t,e}function Av(i){return Gf(i)&&Nr(i.url)}function Gf(i){return!!i&&i[zf]}var Tv=(i,t,e,n)=>Ie(r=>(new Vl(t,r.targetRouterState,r.currentRouterState,e,n).activate(i),r)),Vl=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,n,r,s){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),vl(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let r=Cr(e);t.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(t,e,o.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Cr(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:a})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Cr(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let r=Cr(e);t.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new Nl(s.value.snapshot))}),t.children.length&&this.forwardEvent(new Pl(t.value.snapshot))}activateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(vl(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,o.children)}else this.activateChildRoutes(t,e,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),vl(a.route.value),this.activateChildRoutes(t,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}else this.activateChildRoutes(t,null,n)}},fa=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Ir=class{component;route;constructor(t,e){this.component=t,this.route=e}};function Cv(i,t,e){let n=i._root,r=t?t._root:null;return Ws(n,r,e,[n.value])}function Dv(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function Br(i,t){let e=Symbol(),n=t.get(i,e);return n===e?typeof i=="function"&&!lh(i)?i:t.get(i):n}function Ws(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Cr(t);return i.children.forEach(o=>{Rv(o,s[o.value.outlet],e,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Xs(a,e.getContext(o),r)),r}function Rv(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=t?t.value:null,a=e?e.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=Iv(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new fa(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ws(i,t,a?a.children:null,n,r):Ws(i,t,e,n,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ir(a.outlet.component,o))}else o&&Xs(t,a,r),r.canActivateChecks.push(new fa(n)),s.component?Ws(i,null,a?a.children:null,n,r):Ws(i,null,e,n,r);return r}function Iv(i,t,e){if(typeof e=="function")return e(i,t);switch(e){case"pathParamsChange":return!Qi(i.url,t.url);case"pathParamsOrQueryParamsChange":return!Qi(i.url,t.url)||!Jn(i.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ul(i,t)||!Jn(i.queryParams,t.queryParams);case"paramsChange":default:return!Ul(i,t)}}function Xs(i,t,e){let n=Cr(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?t?Xs(o,t.children.getContext(s),e):Xs(o,null,e):Xs(o,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Ir(t.outlet.component,r)):e.canDeactivateChecks.push(new Ir(null,r)):e.canDeactivateChecks.push(new Ir(null,r))}function io(i){return typeof i=="function"}function Pv(i){return typeof i=="boolean"}function Lv(i){return i&&io(i.canLoad)}function Nv(i){return i&&io(i.canActivate)}function Fv(i){return i&&io(i.canActivateChild)}function Ov(i){return i&&io(i.canDeactivate)}function kv(i){return i&&io(i.canMatch)}function Wf(i){return i instanceof ih||i?.name==="EmptyError"}var ea=Symbol("INITIAL_VALUE");function kr(){return Qt(i=>As(i.map(t=>t.pipe(Yn(1),Oo(ea)))).pipe(Ie(t=>{for(let e of t)if(e!==!0){if(e===ea)return ea;if(e===!1||Uv(e))return e}return!0}),ti(t=>t!==ea),Yn(1)))}function Uv(i){return Nr(i)||i instanceof Ks}function Bv(i,t){return xn(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=e;return o.length===0&&s.length===0?ye(pt(te({},e),{guardsResult:!0})):Vv(o,n,r,i).pipe(xn(a=>a&&Pv(a)?zv(n,s,i,t):ye(a)),Ie(a=>pt(te({},e),{guardsResult:a})))})}function Vv(i,t,e,n){return Kt(i).pipe(xn(r=>$v(r.component,r.route,e,t,n)),yi(r=>r!==!0,!0))}function zv(i,t,e,n){return Kt(t).pipe(Wi(r=>Lo(Gv(r.route.parent,n),Hv(r.route,n),jv(i,r.path,e),Wv(i,r.route,e))),yi(r=>r!==!0,!0))}function Hv(i,t){return i!==null&&t&&t(new Ll(i)),ye(!0)}function Gv(i,t){return i!==null&&t&&t(new Il(i)),ye(!0)}function Wv(i,t,e){let n=t.routeConfig?t.routeConfig.canActivate:null;if(!n||n.length===0)return ye(!0);let r=n.map(s=>No(()=>{let o=Ur(t)??e,a=Br(s,o),c=Nv(a)?a.canActivate(t,i):Mn(o,()=>a(t,i));return oi(c).pipe(yi())}));return ye(r).pipe(kr())}function jv(i,t,e){let n=t[t.length-1],s=t.slice(0,t.length-1).reverse().map(o=>Dv(o)).filter(o=>o!==null).map(o=>No(()=>{let a=o.guards.map(c=>{let l=Ur(o.node)??e,u=Br(c,l),h=Fv(u)?u.canActivateChild(n,i):Mn(l,()=>u(n,i));return oi(h).pipe(yi())});return ye(a).pipe(kr())}));return ye(s).pipe(kr())}function $v(i,t,e,n,r){let s=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!s||s.length===0)return ye(!0);let o=s.map(a=>{let c=Ur(t)??r,l=Br(a,c),u=Ov(l)?l.canDeactivate(i,t,e,n):Mn(c,()=>l(i,t,e,n));return oi(u).pipe(yi())});return ye(o).pipe(kr())}function Xv(i,t,e,n){let r=t.canLoad;if(r===void 0||r.length===0)return ye(!0);let s=r.map(o=>{let a=Br(o,i),c=Lv(a)?a.canLoad(t,e):Mn(i,()=>a(t,e));return oi(c)});return ye(s).pipe(kr(),jf(n))}function jf(i){return th(bt(t=>{if(typeof t!="boolean")throw ha(i,t)}),Ie(t=>t===!0))}function qv(i,t,e,n){let r=t.canMatch;if(!r||r.length===0)return ye(!0);let s=r.map(o=>{let a=Br(o,i),c=kv(a)?a.canMatch(t,e):Mn(i,()=>a(t,e));return oi(c)});return ye(s).pipe(kr(),jf(n))}var Qs=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},eo=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Tr(i){return Gi(new Qs(i))}function Yv(i){return Gi(new Ye(4e3,!1))}function Zv(i){return Gi(Hf(!1,nn.GuardRejected))}var zl=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return ye(n);if(r.numberOfChildren>1||!r.children[ke])return Yv(`${t.redirectTo}`);r=r.children[ke]}}applyRedirectCommands(t,e,n,r,s){return Jv(e,r,s).pipe(Ie(o=>{if(o instanceof si)throw new eo(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),t,n);if(o[0]==="/")throw new eo(a);return a}))}applyRedirectCreateUrlTree(t,e,n,r){let s=this.createSegmentGroup(t,e.root,n,r);return new si(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=e[a]}else n[r]=s}),n}createSegmentGroup(t,e,n,r){let s=this.createSegments(t,e.segments,n,r),o={};return Object.entries(e.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(t,c,n,r)}),new Ke(s,o)}createSegments(t,e,n,r){return e.map(s=>s.path[0]===":"?this.findPosParam(t,s,r):this.findOrReturn(s,n))}findPosParam(t,e,n){let r=n[e.path.substring(1)];if(!r)throw new Ye(4001,!1);return r}findOrReturn(t,e){let n=0;for(let r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}};function Jv(i,t,e){if(typeof i=="string")return ye(i);let n=i,{queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,params:l,data:u,title:h}=t;return oi(Mn(e,()=>n({params:l,data:u,queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,title:h})))}var Hl={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Kv(i,t,e,n,r){let s=$f(i,t,e);return s.matched?(n=yv(t,n),qv(n,t,e,r).pipe(Ie(o=>o===!0?s:te({},Hl)))):ye(s)}function $f(i,t,e){if(t.path==="**")return Qv(e);if(t.path==="")return t.pathMatch==="full"&&(i.hasChildren()||e.length>0)?te({},Hl):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||$_)(e,i,t);if(!r)return te({},Hl);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?te(te({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Qv(i){return{matched:!0,parameters:i.length>0?Sf(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function vf(i,t,e,n){return e.length>0&&n0(i,e,n)?{segmentGroup:new Ke(t,t0(n,new Ke(e,i.children))),slicedSegments:[]}:e.length===0&&i0(i,e,n)?{segmentGroup:new Ke(i.segments,e0(i,e,n,i.children)),slicedSegments:e}:{segmentGroup:new Ke(i.segments,i.children),slicedSegments:e}}function e0(i,t,e,n){let r={};for(let s of e)if(ga(i,t,s)&&!n[kn(s)]){let o=new Ke([],{});r[kn(s)]=o}return te(te({},n),r)}function t0(i,t){let e={};e[ke]=t;for(let n of i)if(n.path===""&&kn(n)!==ke){let r=new Ke([],{});e[kn(n)]=r}return e}function n0(i,t,e){return e.some(n=>ga(i,t,n)&&kn(n)!==ke)}function i0(i,t,e){return e.some(n=>ga(i,t,n))}function ga(i,t,e){return(i.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function r0(i,t,e){return t.length===0&&!i.children[e]}var Gl=class{};function s0(i,t,e,n,r,s,o="emptyOnly"){return new Wl(i,t,e,n,r,o,s).recognize()}var o0=31,Wl=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,n,r,s,o,a){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new zl(this.urlSerializer,this.urlTree)}noMatchError(t){return new Ye(4002,`'${t.segmentGroup}'`)}recognize(){let t=vf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(Ie(({children:e,rootSnapshot:n})=>{let r=new gn(n,e),s=new da("",r),o=dv(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(t){let e=new Rr([],Object.freeze({}),Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ke,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,ke,e).pipe(Ie(n=>({children:n,rootSnapshot:e})),vi(n=>{if(n instanceof eo)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Qs?this.noMatchError(n):n}))}processSegmentGroup(t,e,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(t,e,n,s):this.processSegment(t,e,n,n.segments,r,!0,s).pipe(Ie(o=>o instanceof gn?[o]:[]))}processChildren(t,e,n,r){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return Kt(s).pipe(Wi(o=>{let a=n.children[o],c=bv(e,o);return this.processSegmentGroup(t,c,a,o,r)}),oh((o,a)=>(o.push(...a),o)),Bc(null),sh(),xn(o=>{if(o===null)return Tr(n);let a=Xf(o);return a0(a),ye(a)}))}processSegment(t,e,n,r,s,o,a){return Kt(e).pipe(Wi(c=>this.processSegmentAgainstRoute(c._injector??t,e,c,n,r,s,o,a).pipe(vi(l=>{if(l instanceof Qs)return ye(null);throw l}))),yi(c=>!!c),vi(c=>{if(Wf(c))return r0(n,r,s)?ye(new Gl):Tr(n);throw c}))}processSegmentAgainstRoute(t,e,n,r,s,o,a,c){return kn(n)!==o&&(o===ke||!ga(r,s,n))?Tr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,n,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,r,e,n,s,o,c):Tr(r)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:h,remainingSegments:f}=$f(e,r,s);if(!c)return Tr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>o0&&(this.allowRedirects=!1));let m=new Rr(s,l,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,yf(r),kn(r),r.component??r._loadedComponent??null,r,bf(r)),g=ua(m,a,this.paramsInheritanceStrategy);return m.params=Object.freeze(g.params),m.data=Object.freeze(g.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,m,t).pipe(Qt(p=>this.applyRedirects.lineralizeSegments(r,p)),xn(p=>this.processSegment(t,n,e,p.concat(f),o,!1,a)))}matchSegmentAgainstRoute(t,e,n,r,s,o){let a=Kv(e,n,r,t,this.urlSerializer);return n.path==="**"&&(e.children={}),a.pipe(Qt(c=>c.matched?(t=n._injector??t,this.getChildConfig(t,n,r).pipe(Qt(({routes:l})=>{let u=n._loadedInjector??t,{parameters:h,consumedSegments:f,remainingSegments:m}=c,g=new Rr(f,h,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,yf(n),kn(n),n.component??n._loadedComponent??null,n,bf(n)),_=ua(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(_.params),g.data=Object.freeze(_.data);let{segmentGroup:p,slicedSegments:d}=vf(e,f,m,l);if(d.length===0&&p.hasChildren())return this.processChildren(u,l,p,g).pipe(Ie(M=>new gn(g,M)));if(l.length===0&&d.length===0)return ye(new gn(g,[]));let E=kn(n)===s;return this.processSegment(u,l,p,d,E?ke:s,!0,g).pipe(Ie(M=>new gn(g,M instanceof gn?[M]:[])))}))):Tr(e)))}getChildConfig(t,e,n){return e.children?ye({routes:e.children,injector:t}):e.loadChildren?e._loadedRoutes!==void 0?ye({routes:e._loadedRoutes,injector:e._loadedInjector}):Xv(t,e,n,this.urlSerializer).pipe(xn(r=>r?this.configLoader.loadChildren(t,e).pipe(bt(s=>{e._loadedRoutes=s.routes,e._loadedInjector=s.injector})):Zv(e))):ye({routes:[],injector:t})}};function a0(i){i.sort((t,e)=>t.value.outlet===ke?-1:e.value.outlet===ke?1:t.value.outlet.localeCompare(e.value.outlet))}function c0(i){let t=i.value.routeConfig;return t&&t.path===""}function Xf(i){let t=[],e=new Set;for(let n of i){if(!c0(n)){t.push(n);continue}let r=t.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):t.push(n)}for(let n of e){let r=Xf(n.children);t.push(new gn(n.value,r))}return t.filter(n=>!e.has(n))}function yf(i){return i.data||{}}function bf(i){return i.resolve||{}}function l0(i,t,e,n,r,s){return xn(o=>s0(i,t,e,n,o.extractedUrl,r,s).pipe(Ie(({state:a,tree:c})=>pt(te({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function u0(i,t){return xn(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return ye(e);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of qf(c))o.add(l);let a=0;return Kt(o).pipe(Wi(c=>s.has(c)?d0(c,n,i,t):(c.data=ua(c,c.parent,i).resolve,ye(void 0))),bt(()=>a++),Vc(1),xn(c=>a===o.size?ye(e):ei))})}function qf(i){let t=i.children.map(e=>qf(e)).flat();return[i,...t]}function d0(i,t,e,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!Uf(r)&&(s[to]=r.title),No(()=>(i.data=ua(i,i.parent,e).resolve,h0(s,i,t,n).pipe(Ie(o=>(i._resolvedData=o,i.data=te(te({},i.data),o),null)))))}function h0(i,t,e,n){let r=xl(i);if(r.length===0)return ye({});let s={};return Kt(r).pipe(xn(o=>f0(i[o],t,e,n).pipe(yi(),bt(a=>{if(a instanceof Ks)throw ha(new Lr,a);s[o]=a}))),Vc(1),Ie(()=>s),vi(o=>Wf(o)?ei:Gi(o)))}function f0(i,t,e,n){let r=Ur(t)??n,s=Br(i,r),o=s.resolve?s.resolve(t,e):Mn(r,()=>s(t,e));return oi(o)}function yl(i){return Qt(t=>{let e=i(t);return e?Kt(e).pipe(Ie(()=>t)):ye(t)})}var Yf=(()=>{class i{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===ke);return n}getResolvedTitleForRoute(e){return e.data[to]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>G(p0),providedIn:"root"})}return i})(),p0=(()=>{class i extends Yf{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(Ne(hf))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_a=new Ee("",{providedIn:"root",factory:()=>({})}),va=new Ee(""),Zf=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=G(zh);loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return ye(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=oi(Mn(e,()=>n.loadComponent())).pipe(Ie(Jf),Qt(Kf),bt(o=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o}),ji(()=>{this.componentLoaders.delete(n)})),s=new Uc(r,()=>new Vt).pipe(kc());return this.componentLoaders.set(n,s),s}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return ye({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=m0(n,this.compiler,e,this.onLoadEndListener).pipe(ji(()=>{this.childrenLoaders.delete(n)})),o=new Uc(s,()=>new Vt).pipe(kc());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function m0(i,t,e,n){return oi(Mn(e,()=>i.loadChildren())).pipe(Ie(Jf),Qt(Kf),xn(r=>r instanceof Th||Array.isArray(r)?ye(r):Kt(t.compileModuleAsync(r))),Ie(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(e).injector,o=s.get(va,[],{optional:!0,self:!0}).flat()),{routes:o.map(Xl),injector:s}}))}function g0(i){return i&&typeof i=="object"&&"default"in i}function Jf(i){return g0(i)?i.default:i}function Kf(i){return ye(i)}var ql=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>G(_0),providedIn:"root"})}return i})(),_0=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Qf=new Ee("");var ep=new Ee(""),tp=(()=>{class i{currentNavigation=un(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new Vt;transitionAbortWithErrorSubject=new Vt;configLoader=G(Zf);environmentInjector=G(bi);destroyRef=G(ko);urlSerializer=G(pa);rootContexts=G(no);location=G(Zi);inputBindingEnabled=G(ma,{optional:!0})!==null;titleStrategy=G(Yf);options=G(_a,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=G(ql);createViewTransition=G(Qf,{optional:!0});navigationErrorHandler=G(ep,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>ye(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Dl(r)),n=r=>this.events.next(new Rl(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;tn(()=>{this.transitions?.next(pt(te({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:n}))})}setupNavigations(e){return this.transitions=new bn(null),this.transitions.pipe(ti(n=>n!==null),Qt(n=>{let r=!1;return ye(n).pipe(Qt(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",nn.SupersededByNewNavigation),ei;this.currentTransition=n,this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?pt(te({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>s.abortController.abort()});let o=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!o&&a!=="reload")return this.events.next(new wi(s.id,this.urlSerializer.serialize(s.rawUrl),"",oa.IgnoredSameUrlNavigation)),s.resolve(!1),ei;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return ye(s).pipe(Qt(c=>(this.events.next(new Fr(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?ei:Promise.resolve(c))),l0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),bt(c=>{n.targetSnapshot=c.targetSnapshot,n.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=c.urlAfterRedirects,u));let l=new aa(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(o&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:c,extractedUrl:l,source:u,restoredState:h,extras:f}=s,m=new Fr(c,this.urlSerializer.serialize(l),u,h);this.events.next(m);let g=Of(this.rootComponentType).snapshot;return this.currentTransition=n=pt(te({},s),{targetSnapshot:g,urlAfterRedirects:l,extras:pt(te({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(_=>(_.finalUrl=l,_)),ye(n)}else return this.events.next(new wi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",oa.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ei}),bt(s=>{let o=new wl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(o)}),Ie(s=>(this.currentTransition=n=pt(te({},s),{guards:Cv(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n)),Bv(this.environmentInjector,s=>this.events.next(s)),bt(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ha(this.urlSerializer,s.guardsResult);let o=new Al(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(o)}),ti(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",nn.GuardRejected),!1)),yl(s=>{if(s.guards.canActivateChecks.length!==0)return ye(s).pipe(bt(o=>{let a=new Tl(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Qt(o=>{let a=!1;return ye(o).pipe(u0(this.paramsInheritanceStrategy,this.environmentInjector),bt({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(o,"",nn.NoDataFromResolver)}}))}),bt(o=>{let a=new Cl(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}))}),yl(s=>{let o=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=Ur(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(bt(u=>{a.component=u}),Ie(()=>{})))}for(let l of a.children)c.push(...o(l));return c};return As(o(s.targetSnapshot.root)).pipe(Bc(null),Yn(1))}),yl(()=>this.afterPreactivation()),Qt(()=>{let{currentSnapshot:s,targetSnapshot:o}=n,a=this.createViewTransition?.(this.environmentInjector,s.root,o.root);return a?Kt(a).pipe(Ie(()=>n)):ye(n)}),Ie(s=>{let o=Sv(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=pt(te({},s),{targetRouterState:o}),this.currentNavigation.update(a=>(a.targetRouterState=o,a)),n}),bt(()=>{this.events.next(new Zs)}),Tv(this.rootContexts,e.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),Yn(1),Ts(new ws(s=>{let o=n.abortController.signal,a=()=>s.next();return o.addEventListener("abort",a),()=>o.removeEventListener("abort",a)}).pipe(ti(()=>!r&&!n.targetRouterState),bt(()=>{this.cancelNavigationTransition(n,n.abortController.signal.reason+"",nn.Aborted)}))),bt({next:s=>{r=!0,this.lastSuccessfulNavigation=tn(this.currentNavigation),this.events.next(new Ei(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{r=!0}}),Ts(this.transitionAbortWithErrorSubject.pipe(bt(s=>{throw s}))),ji(()=>{r||this.cancelNavigationTransition(n,"",nn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),vi(s=>{if(this.destroyed)return n.resolve(!1),ei;if(r=!0,Gf(s))this.events.next(new ri(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Av(s)?this.events.next(new Or(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let o=new Ys(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let a=Mn(this.environmentInjector,()=>this.navigationErrorHandler?.(o));if(a instanceof Ks){let{message:c,cancellationCode:l}=ha(this.urlSerializer,a);this.events.next(new ri(n.id,this.urlSerializer.serialize(n.extractedUrl),c,l)),this.events.next(new Or(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(o),s}catch(a){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(a)}}return ei}))}))}cancelNavigationTransition(e,n,r){let s=new ri(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(s),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=tn(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function v0(i){return i!==$s}var y0=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>G(b0),providedIn:"root"})}return i})(),jl=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}},b0=(()=>{class i extends jl{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Cs(i)))(r||i)}})();static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),np=(()=>{class i{urlSerializer=G(pa);options=G(_a,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=G(Zi);urlHandlingStrategy=G(ql);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new si;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let s=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,o=r??s;return o instanceof si?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Of(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:()=>G(x0),providedIn:"root"})}return i})(),x0=(()=>{class i extends np{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof Fr?this.updateStateMemento():e instanceof wi?this.commitTransition(n):e instanceof aa?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Zs?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof ri&&e.code!==nn.SupersededByNewNavigation&&e.code!==nn.Redirect?this.restoreHistory(n):e instanceof Ys?this.restoreHistory(n,!0):e instanceof Ei&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,c=te(te({},o),this.generateNgRouterState(r,a));this.location.replaceState(e,"",c)}else{let a=te(te({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===e.finalUrl&&s===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Cs(i)))(r||i)}})();static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ip(i,t){i.events.pipe(ti(e=>e instanceof Ei||e instanceof ri||e instanceof Ys||e instanceof wi),Ie(e=>e instanceof Ei||e instanceof wi?0:(e instanceof ri?e.code===nn.Redirect||e.code===nn.SupersededByNewNavigation:!1)?2:1),ti(e=>e!==2),Yn(1)).subscribe(()=>{t()})}var M0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},S0={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Yl=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=G($c);stateManager=G(np);options=G(_a,{optional:!0})||{};pendingTasks=G(ph);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=G(tp);urlSerializer=G(pa);location=G(Zi);urlHandlingStrategy=G(ql);injector=G(bi);_events=new Vt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=G(y0);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=G(va,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!G(ma,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Po;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=tn(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof ri&&n.code!==nn.Redirect&&n.code!==nn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Ei)this.navigated=!0;else if(n instanceof Or){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),c=te({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||v0(r.source)},o);this.scheduleNavigation(a,$s,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}vv(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),$s,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r)=>{this.navigateToSyncWithBrowser(e,r,n)})}navigateToSyncWithBrowser(e,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=te({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(e);this.scheduleNavigation(a,n,o,s).catch(c=>{this.disposed||this.injector.get(zc)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return tn(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Xl),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=n,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=te(te({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let f=r?r.snapshot:this.routerState.snapshot.root;h=Pf(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Lf(h,e,u,l??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Nr(e)?e:this.parseUrl(e),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,$s,null,n)}navigate(e,n={skipLocationChange:!1}){return E0(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=te({},M0):n===!1?r=te({},S0):r=n,Nr(e))return pf(this.currentUrlTree,e,r);let s=this.parseUrl(e);return pf(this.currentUrlTree,s,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(e,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((h,f)=>{a=h,c=f});let u=this.pendingTasks.add();return ip(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(h=>Promise.reject(h))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function E0(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new Ye(4008,!1)}var w0=new Ee("");function Zl(i,...t){return vr([{provide:va,multi:!0,useValue:i},[],{provide:er,useFactory:A0,deps:[Yl]},{provide:Dh,multi:!0,useFactory:C0},t.map(e=>e.\u0275providers)])}function A0(i){return i.routerState.root}function T0(i,t){return{\u0275kind:i,\u0275providers:t}}function C0(){let i=G(Sn);return t=>{let e=i.get(Er);if(t!==e.components[0])return;let n=i.get(Yl),r=i.get(D0);i.get(R0)===1&&n.initialNavigation(),i.get(I0,null,{optional:!0})?.setUpPreloading(),i.get(w0,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var D0=new Ee("",{factory:()=>new Vt}),R0=new Ee("",{providedIn:"root",factory:()=>1});var I0=new Ee("");function Jl(){return T0(6,[{provide:Si,useClass:Jc}])}var L0="@",N0=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=G(Sn);loadingSchedulerFn=G(F0,{optional:!0});_engine;constructor(e,n,r,s,o){this.doc=e,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-ZVEBNGUM.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new Ye(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new Kl(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(e,n);s.use(a),this.scheduler??=this.injector.get(fh,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){Ah()};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),Kl=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,r){this.delegate.insertBefore(t,e,n,r)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,r){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(t,e,n,r)),this.delegate.listen(t,e,n,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(L0)}},F0=new Ee("");function rp(i="animations"){return Wc("NgAsyncAnimations"),vr([{provide:Bo,useFactory:(t,e,n)=>new N0(t,e,n,i),deps:[nt,zs,Mt]},{provide:Uo,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var sp={providers:[Hh({eventCoalescing:!0}),Zl([],Jl()),rp()]};var O0=0,op=1,k0=2;var Lm=1,U0=2,hi=3,Oi=0,on=1,zn=2;var Li=0,os=1,fo=2,ap=3,cp=4,B0=5,or=100,V0=101,z0=102,lp=103,up=104,H0=200,G0=201,W0=202,j0=203,Pu=204,Lu=205,$0=206,X0=207,q0=208,Y0=209,Z0=210,J0=211,K0=212,Q0=213,ey=214,ty=0,ny=1,iy=2,Wa=3,ry=4,sy=5,oy=6,ay=7,Nm=0,cy=1,ly=2,Ni=0,uy=1,dy=2,hy=3,fy=4,py=5,my=6;var dp=300,ls=301,us=302,Nu=303,Fu=304,_c=306,Ou=1e3,Hn=1001,ku=1002,Zt=1003,hp=1004;var Ql=1005;var Cn=1006,gy=1007;var po=1008;var Fi=1009,_y=1010,vy=1011,gd=1012,Fm=1013,Ii=1014,Pi=1015,mo=1016,Om=1017,km=1018,cr=1020,yy=1021,Gn=1023,by=1024,xy=1025,lr=1026,ds=1027,My=1028,Um=1029,Sy=1030,Bm=1031,Vm=1033,eu=33776,tu=33777,nu=33778,iu=33779,fp=35840,pp=35841,mp=35842,gp=35843,zm=36196,_p=37492,vp=37496,yp=37808,bp=37809,xp=37810,Mp=37811,Sp=37812,Ep=37813,wp=37814,Ap=37815,Tp=37816,Cp=37817,Dp=37818,Rp=37819,Ip=37820,Pp=37821,ru=36492,Lp=36494,Np=36495,Ey=36283,Fp=36284,Op=36285,kp=36286;var ja=2300,$a=2301,su=2302,Up=2400,Bp=2401,Vp=2402;var Hm=3e3,ur=3001,wy=3200,Ay=3201,Ty=0,Cy=1,Dn="",Ut="srgb",mi="srgb-linear",_d="display-p3",vc="display-p3-linear",Xa="linear",lt="srgb",qa="rec709",Ya="p3";var Vr=7680;var zp=519,Dy=512,Ry=513,Iy=514,Gm=515,Py=516,Ly=517,Ny=518,Fy=519,Hp=35044;var Gp="300 es",Uu=1035,pi=2e3,Za=2001,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ou=Math.PI/180,Bu=180/Math.PI;function xo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[t&255]+zt[t>>8&255]+"-"+zt[t>>16&15|64]+zt[t>>24&255]+"-"+zt[e&63|128]+zt[e>>8&255]+"-"+zt[e>>16&255]+zt[e>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function Oy(i,t){return(i%t+t)%t}function au(i,t,e){return(1-e)*i+e*t}function Wp(i){return(i&i-1)===0&&i!==0}function Vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ro(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Je=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],d=r[6],E=r[1],M=r[4],w=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*_+a*E+c*R,s[3]=o*p+a*M+c*T,s[6]=o*d+a*w+c*A,s[1]=l*_+u*E+h*R,s[4]=l*p+u*M+h*T,s[7]=l*d+u*w+h*A,s[2]=f*_+m*E+g*R,s[5]=f*p+m*M+g*T,s[8]=f*d+m*w+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=e*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cu.makeScale(t,e)),this}rotate(t){return this.premultiply(cu.makeRotation(-t)),this}translate(t,e){return this.premultiply(cu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cu=new $e;function Wm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ky(){let i=Ja("canvas");return i.style.display="block",i}var jp={};function uo(i){i in jp||(jp[i]=!0,console.warn(i))}var $p=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xp=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ya={[mi]:{transfer:Xa,primaries:qa,toReference:i=>i,fromReference:i=>i},[Ut]:{transfer:lt,primaries:qa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vc]:{transfer:Xa,primaries:Ya,toReference:i=>i.applyMatrix3(Xp),fromReference:i=>i.applyMatrix3($p)},[_d]:{transfer:lt,primaries:Ya,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xp),fromReference:i=>i.applyMatrix3($p).convertLinearToSRGB()}},Uy=new Set([mi,vc]),it={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uy.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ya[t].toReference,r=ya[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ya[i].primaries},getTransfer:function(i){return i===Dn?Xa:ya[i].transfer}};function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zr,Ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zr===void 0&&(zr=Ja("canvas")),zr.width=t.width,zr.height=t.height;let n=zr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},By=0,Qa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=xo(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uu(r[o].image)):s.push(uu(r[o]))}else s=uu(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vy=0,ms=(()=>{class i extends ki{constructor(e=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Hn,s=Hn,o=Cn,a=po,c=Gn,l=Fi,u=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=xo(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ur?Ut:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ou:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ou:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?ur:Hm}set encoding(e){uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Ut:Dn}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=dp,i.DEFAULT_ANISOTROPY=1,i})(),dt=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,w=(m+1)/2,R=(d+1)/2,T=(u+f)/4,A=(h+_)/4,W=(g+p)/4;return M>w&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=T/n,s=A/n):w>R?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=T/r,s=W/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=W/s),this.set(n,r,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zu=class extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new dt(0,0,t,e),this.scissorTest=!1,this.viewport=new dt(0,0,t,e);let r={width:t,height:e,depth:1};n.encoding!==void 0&&(uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Ut:Dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ms(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ec=class extends ms{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hu=class extends ms{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==m||u!==g){let p=1-a,d=c*f+l*m+u*g+h*_,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let R=Math.sqrt(M),T=Math.atan2(R,d*E);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}let w=a*E;if(c=c*p+f*w,l=l*p+m*w,u=u*p+g*w,h=h*p+_*w,p===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-a*m,t[e+2]=l*g+u*m+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return du.copy(this).projectOnVector(t),this.sub(du)}reflect(t){return this.sub(du.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},du=new P,qp=new Ui,dr=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),xa.subVectors(this.max,so),Hr.subVectors(t.a,so),Gr.subVectors(t.b,so),Wr.subVectors(t.c,so),Ai.subVectors(Gr,Hr),Ti.subVectors(Wr,Gr),tr.subVectors(Hr,Wr);let e=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-tr.z,tr.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,tr.z,0,-tr.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-tr.y,tr.x,0];return!hu(e,Hr,Gr,Wr,xa)||(e=[1,0,0,0,1,0,0,0,1],!hu(e,Hr,Gr,Wr,xa))?!1:(Ma.crossVectors(Ai,Ti),e=[Ma.x,Ma.y,Ma.z],hu(e,Hr,Gr,Wr,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ai=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,ba=new dr,Hr=new P,Gr=new P,Wr=new P,Ai=new P,Ti=new P,tr=new P,so=new P,xa=new P,Ma=new P,nr=new P;function hu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){nr.fromArray(i,s);let a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=t.dot(nr),l=e.dot(nr),u=n.dot(nr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var zy=new dr,oo=new P,fu=new P,hs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zy.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oo.subVectors(t,this.center);let e=oo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(oo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oo.copy(t.center).add(fu)),this.expandByPoint(oo.copy(t.center).sub(fu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new P,pu=new P,Sa=new P,Ci=new P,mu=new P,Ea=new P,gu=new P,tc=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){pu.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(pu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Sa),a=Ci.dot(this.direction),c=-Ci.dot(Sa),l=Ci.lengthSq(),u=Math.abs(1-o*o),h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(pu).addScaledVector(Sa,f),m}intersectSphere(t,e){ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,r,s){mu.subVectors(e,t),Ea.subVectors(n,t),gu.crossVectors(mu,Ea);let o=this.direction.dot(gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);let c=a*this.direction.dot(Ea.crossVectors(Ci,Ea));if(c<0)return null;let l=a*this.direction.dot(mu.cross(Ci));if(l<0||c+l>o)return null;let u=-a*Ci.dot(gu);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(t,e,n,r,s,o,a,c,l,u,h,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,m,g,_,p)}set(t,e,n,r,s,o,a,c,l,u,h,f,m,g,_,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/jr.setFromMatrixColumn(t,0).length(),s=1/jr.setFromMatrixColumn(t,1).length(),o=1/jr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,m=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,m=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,m=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,m=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hy,t,Gy)}lookAt(t,e,n){let r=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Di.crossVectors(n,_n),Di.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Di.crossVectors(n,_n)),Di.normalize(),wa.crossVectors(_n,Di),r[0]=Di.x,r[4]=wa.x,r[8]=_n.x,r[1]=Di.y,r[5]=wa.y,r[9]=_n.y,r[2]=Di.z,r[6]=wa.z,r[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],E=n[3],M=n[7],w=n[11],R=n[15],T=r[0],A=r[4],W=r[8],b=r[12],S=r[1],B=r[5],H=r[9],ee=r[13],D=r[2],k=r[6],z=r[10],X=r[14],j=r[3],$=r[7],q=r[11],ne=r[15];return s[0]=o*T+a*S+c*D+l*j,s[4]=o*A+a*B+c*k+l*$,s[8]=o*W+a*H+c*z+l*q,s[12]=o*b+a*ee+c*X+l*ne,s[1]=u*T+h*S+f*D+m*j,s[5]=u*A+h*B+f*k+m*$,s[9]=u*W+h*H+f*z+m*q,s[13]=u*b+h*ee+f*X+m*ne,s[2]=g*T+_*S+p*D+d*j,s[6]=g*A+_*B+p*k+d*$,s[10]=g*W+_*H+p*z+d*q,s[14]=g*b+_*ee+p*X+d*ne,s[3]=E*T+M*S+w*D+R*j,s[7]=E*A+M*B+w*k+R*$,s[11]=E*W+M*H+w*z+R*q,s[15]=E*b+M*ee+w*X+R*ne,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*m-n*c*m)+_*(+e*c*m-e*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+p*(+e*l*h-e*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+d*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],E=h*p*l-_*f*l+_*c*m-a*p*m-h*c*d+a*f*d,M=g*f*l-u*p*l-g*c*m+o*p*m+u*c*d-o*f*d,w=u*_*l-g*h*l+g*a*m-o*_*m-u*a*d+o*h*d,R=g*h*c-u*_*c-g*a*f+o*_*f+u*a*p-o*h*p,T=e*E+n*M+r*w+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=E*A,t[1]=(_*f*s-h*p*s-_*r*m+n*p*m+h*r*d-n*f*d)*A,t[2]=(a*p*s-_*c*s+_*r*l-n*p*l-a*r*d+n*c*d)*A,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*m-n*c*m)*A,t[4]=M*A,t[5]=(u*p*s-g*f*s+g*r*m-e*p*m-u*r*d+e*f*d)*A,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*d-e*c*d)*A,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*m+e*c*m)*A,t[8]=w*A,t[9]=(g*h*s-u*_*s-g*n*m+e*_*m+u*n*d-e*h*d)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*d+e*a*d)*A,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*m-e*a*m)*A,t[12]=R*A,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*p+e*h*p)*A,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*p-e*a*p)*A,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,m=s*u,g=s*h,_=o*u,p=o*h,d=a*h,E=c*l,M=c*u,w=c*h,R=n.x,T=n.y,A=n.z;return r[0]=(1-(_+d))*R,r[1]=(m+w)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(m-w)*T,r[5]=(1-(f+d))*T,r[6]=(p+E)*T,r[7]=0,r[8]=(g+M)*A,r[9]=(p-E)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=jr.set(r[0],r[1],r[2]).length(),o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Bn.copy(this);let l=1/s,u=1/o,h=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,e.setFromRotationMatrix(Bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=pi){let c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r),m,g;if(a===pi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Za)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=pi){let c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*l,m=(n+r)*u,g,_;if(a===pi)g=(o+s)*h,_=-2*h;else if(a===Za)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},jr=new P,Bn=new wt,Hy=new P(0,0,0),Gy=new P(1,1,1),Di=new P,wa=new P,_n=new P,Yp=new wt,Zp=new Ui,Wy=(()=>{class i{constructor(e=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,s=this._order){return this._x=e,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){let s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],f=s[2],m=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),nc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jy=0,Jp=new P,$r=new Ui,li=new wt,Aa=new P,ao=new P,$y=new P,Xy=new Ui,Kp=new P(1,0,0),Qp=new P(0,1,0),em=new P(0,0,1),qy={type:"added"},Yy={type:"removed"},Bi=(()=>{class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,n=new Wy,r=new Ui,s=new P(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new $e}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Aa.copy(e):Aa.set(e,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ao,Aa,this.up):li.lookAt(Aa,ao,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(li),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,$y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,Xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++){let o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(e.materials,this.material[l]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(e.animations,l))}}if(n){let c=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),m=a(e.skeletons),g=a(e.animations),_=a(e.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),f.length>0&&(r.shapes=f),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let h=c[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){let s=e.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new P(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Vn=new P,ui=new P,_u=new P,di=new P,Xr=new P,qr=new P,tm=new P,vu=new P,yu=new P,bu=new P,Ta=!1,ns=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Vn.subVectors(t,e),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Vn.subVectors(r,e),ui.subVectors(n,e),_u.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(ui),c=Vn.dot(_u),l=ui.dot(ui),u=ui.dot(_u),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(t,e,n,r,s,o,a,c){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),this.getInterpolation(t,e,n,r,s,o,a,c)}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static isFrontFacing(t,e,n,r){return Vn.subVectors(n,e),ui.subVectors(t,e),Vn.cross(ui).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Vn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Xr.subVectors(r,n),qr.subVectors(s,n),vu.subVectors(t,n);let c=Xr.dot(vu),l=qr.dot(vu);if(c<=0&&l<=0)return e.copy(n);yu.subVectors(t,r);let u=Xr.dot(yu),h=qr.dot(yu);if(u>=0&&h<=u)return e.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Xr,o);bu.subVectors(t,s);let m=Xr.dot(bu),g=qr.dot(bu);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(qr,a);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return tm.subVectors(s,r),a=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(tm,a);let d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function xu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ut){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,it.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=it.workingColorSpace){return this.r=t,this.g=e,this.b=n,it.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=it.workingColorSpace){if(t=Oy(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xu(o,s,t+1/3),this.g=xu(o,s,t),this.b=xu(o,s,t-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(t,e=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ut){let n=jm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=lu(t.r),this.g=lu(t.g),this.b=lu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ut){return it.fromWorkingColorSpace(Ht.copy(this),t),Math.round(sn(Ht.r*255,0,255))*65536+Math.round(sn(Ht.g*255,0,255))*256+Math.round(sn(Ht.b*255,0,255))}getHexString(t=Ut){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=it.workingColorSpace){it.fromWorkingColorSpace(Ht.copy(this),e);let n=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=it.workingColorSpace){return it.fromWorkingColorSpace(Ht.copy(this),e),t.r=Ht.r,t.g=Ht.g,t.b=Ht.b,t}getStyle(t=Ut){it.fromWorkingColorSpace(Ht.copy(this),t);let e=Ht.r,n=Ht.g,r=Ht.b;return t!==Ut?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Ca);let n=au(Ri.h,Ca.h,e),r=au(Ri.s,Ca.s,e),s=au(Ri.l,Ca.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new Xe;Xe.NAMES=jm;var Zy=0,hr=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=os,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Lu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pu&&(n.blendSrc=this.blendSrc),this.blendDst!==Lu&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ic=class extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Et=new P,Da=new Je,an=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Et.fromBufferAttribute(this,e),Et.applyMatrix3(t),this.setXYZ(e,Et.x,Et.y,Et.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Et.fromBufferAttribute(this,e),Et.applyMatrix4(t),this.setXYZ(e,Et.x,Et.y,Et.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Et.fromBufferAttribute(this,e),Et.applyNormalMatrix(t),this.setXYZ(e,Et.x,Et.y,Et.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Et.fromBufferAttribute(this,e),Et.transformDirection(t),this.setXYZ(e,Et.x,Et.y,Et.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hp&&(t.usage=this.usage),t}};var rc=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sc=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var In=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Jy=0,Tn=new wt,Mu=new Bi,Yr=new P,vn=new dr,co=new dr,Nt=new P,Wn=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wm(t)?sc:rc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $e().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Mu.lookAt(t),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new In(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(vn.min,co.min),vn.expandByPoint(Nt),Nt.addVectors(vn.max,co.max),vn.expandByPoint(Nt)):(vn.expandByPoint(co.min),vn.expandByPoint(co.max))}vn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Nt.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Nt));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(Yr.fromBufferAttribute(t,l),Nt.add(Yr)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<a;S++)l[S]=new P,u[S]=new P;let h=new P,f=new P,m=new P,g=new Je,_=new Je,p=new Je,d=new P,E=new P;function M(S,B,H){h.fromArray(r,S*3),f.fromArray(r,B*3),m.fromArray(r,H*3),g.fromArray(o,S*2),_.fromArray(o,B*2),p.fromArray(o,H*2),f.sub(h),m.sub(h),_.sub(g),p.sub(g);let ee=1/(_.x*p.y-p.x*_.y);isFinite(ee)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ee),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ee),l[S].add(d),l[B].add(d),l[H].add(d),u[S].add(E),u[B].add(E),u[H].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let S=0,B=w.length;S<B;++S){let H=w[S],ee=H.start,D=H.count;for(let k=ee,z=ee+D;k<z;k+=3)M(n[k+0],n[k+1],n[k+2])}let R=new P,T=new P,A=new P,W=new P;function b(S){A.fromArray(s,S*3),W.copy(A);let B=l[S];R.copy(B),R.sub(A.multiplyScalar(A.dot(B))).normalize(),T.crossVectors(W,B);let ee=T.dot(u[S])<0?-1:1;c[S*4]=R.x,c[S*4+1]=R.y,c[S*4+2]=R.z,c[S*4+3]=ee}for(let S=0,B=w.length;S<B;++S){let H=w[S],ee=H.start,D=H.count;for(let k=ee,z=ee+D;k<z;k+=3)b(n[k+0]),b(n[k+1]),b(n[k+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Nt.fromBufferAttribute(t,e),Nt.normalize(),t.setXYZ(e,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nm=new wt,ir=new tc,Ra=new hs,im=new P,Zr=new P,Jr=new P,Kr=new P,Su=new P,Ia=new P,Pa=new Je,La=new Je,Na=new Je,rm=new P,sm=new P,om=new P,Fa=new P,Oa=new P,Rn=class extends Bi{constructor(t=new Wn,e=new ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ia.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(Su.fromBufferAttribute(h,t),o?Ia.addScaledVector(Su,u):Ia.addScaledVector(Su.sub(e),u))}e.add(Ia)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),ir.copy(t.ray).recast(t.near),!(Ra.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ra,im)===null||ir.origin.distanceToSquared(im)>(t.far-t.near)**2))&&(nm.copy(s).invert(),ir.copy(t.ray).applyMatrix4(nm),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,R=M;w<R;w+=3){let T=a.getX(w),A=a.getX(w+1),W=a.getX(w+2);r=ka(this,d,t,n,l,u,h,T,A,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let E=a.getX(p),M=a.getX(p+1),w=a.getX(p+2);r=ka(this,o,t,n,l,u,h,E,M,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,R=M;w<R;w+=3){let T=w,A=w+1,W=w+2;r=ka(this,d,t,n,l,u,h,T,A,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let E=p,M=p+1,w=p+2;r=ka(this,o,t,n,l,u,h,E,M,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function Ky(i,t,e,n,r,s,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Oi,a),c===null)return null;Oa.copy(a),Oa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Oa);return l<e.near||l>e.far?null:{distance:l,point:Oa.clone(),object:i}}function ka(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Zr),i.getVertexPosition(c,Jr),i.getVertexPosition(l,Kr);let u=Ky(i,t,e,n,Zr,Jr,Kr,Fa);if(u){r&&(Pa.fromBufferAttribute(r,a),La.fromBufferAttribute(r,c),Na.fromBufferAttribute(r,l),u.uv=ns.getInterpolation(Fa,Zr,Jr,Kr,Pa,La,Na,new Je)),s&&(Pa.fromBufferAttribute(s,a),La.fromBufferAttribute(s,c),Na.fromBufferAttribute(s,l),u.uv1=ns.getInterpolation(Fa,Zr,Jr,Kr,Pa,La,Na,new Je),u.uv2=u.uv1),o&&(rm.fromBufferAttribute(o,a),sm.fromBufferAttribute(o,c),om.fromBufferAttribute(o,l),u.normal=ns.getInterpolation(Fa,Zr,Jr,Kr,rm,sm,om,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new P,materialIndex:0};ns.getNormal(Zr,Jr,Kr,h.normal),u.face=h}return u}var go=class i extends Wn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(h,2));function g(_,p,d,E,M,w,R,T,A,W,b){let S=w/A,B=R/W,H=w/2,ee=R/2,D=T/2,k=A+1,z=W+1,X=0,j=0,$=new P;for(let q=0;q<z;q++){let ne=q*B-ee;for(let ie=0;ie<k;ie++){let V=ie*S-H;$[_]=V*E,$[p]=ne*M,$[d]=D,l.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[d]=T>0?1:-1,u.push($.x,$.y,$.z),h.push(ie/A),h.push(1-q/W),X+=1}}for(let q=0;q<W;q++)for(let ne=0;ne<A;ne++){let ie=f+ne+k*q,V=f+ne+k*(q+1),Y=f+(ne+1)+k*(q+1),le=f+(ne+1)+k*q;c.push(ie,V,le),c.push(V,Y,le),j+=6}a.addGroup(m,j,b),m+=j,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Yt(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let r in n)t[r]=n[r]}return t}function Qy(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $m(i){return i.getRenderTarget()===null?i.outputColorSpace:it.workingColorSpace}var eb={clone:fs,merge:Yt},tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Qy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oc=class extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends oc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ou*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ou*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qr=-90,es=1,Gu=class extends Bi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(Qr,es,t,e);r.layers=this.layers,this.add(r);let s=new Gt(Qr,es,t,e);s.layers=this.layers,this.add(s);let o=new Gt(Qr,es,t,e);o.layers=this.layers,this.add(o);let a=new Gt(Qr,es,t,e);a.layers=this.layers,this.add(a);let c=new Gt(Qr,es,t,e);c.layers=this.layers,this.add(c);let l=new Gt(Qr,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ac=class extends ms{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wu=class extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ur?Ut:Dn),this.texture=new ac(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new go(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Li});s.uniforms.tEquirect.value=e;let o=new Rn(r,s),a=e.minFilter;return e.minFilter===po&&(e.minFilter=Cn),new Gu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Eu=new P,ib=new P,rb=new $e,fi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Eu.subVectors(n,e).cross(ib.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Eu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||rb.getNormalMatrix(t),r=this.coplanarPoint(Eu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new hs,Ua=new P,_o=class{constructor(t=new fi,e=new fi,n=new fi,r=new fi,s=new fi,o=new fi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],E=r[13],M=r[14],w=r[15];if(n[0].setComponents(c-s,f-l,p-m,w-d).normalize(),n[1].setComponents(c+s,f+l,p+m,w+d).normalize(),n[2].setComponents(c+o,f+u,p+g,w+E).normalize(),n[3].setComponents(c-o,f-u,p-g,w-E).normalize(),n[4].setComponents(c-a,f-h,p-_,w-M).normalize(),e===pi)n[5].setComponents(c+a,f+h,p+_,w+M).normalize();else if(e===Za)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ua.x=r.normal.x>0?t.max.x:t.min.x,Ua.y=r.normal.y>0?t.max.y:t.min.y,Ua.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xm(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function sb(i,t){let e=t.isWebGL2,n=new WeakMap;function r(l,u){let h=l.array,f=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,h){let f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let d=g[_];e?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var ju=class i extends Wn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){let E=d*f-o;for(let M=0;M<l;M++){let w=M*h-s;g.push(w,-E,0),_.push(0,0,1),p.push(M/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let M=E+l*d,w=E+l*(d+1),R=E+1+l*(d+1),T=E+1+l*d;m.push(M,w,T),m.push(w,R,T)}this.setIndex(m),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(_,3)),this.setAttribute("uv",new In(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Db=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ib=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",kb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ob,alphahash_pars_fragment:ab,alphamap_fragment:cb,alphamap_pars_fragment:lb,alphatest_fragment:ub,alphatest_pars_fragment:db,aomap_fragment:hb,aomap_pars_fragment:fb,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:_b,bsdfs:vb,iridescence_fragment:yb,bumpmap_pars_fragment:bb,clipping_planes_fragment:xb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:Sb,clipping_planes_vertex:Eb,color_fragment:wb,color_pars_fragment:Ab,color_pars_vertex:Tb,color_vertex:Cb,common:Db,cube_uv_reflection_fragment:Rb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Pb,displacementmap_vertex:Lb,emissivemap_fragment:Nb,emissivemap_pars_fragment:Fb,colorspace_fragment:Ob,colorspace_pars_fragment:kb,envmap_fragment:Ub,envmap_common_pars_fragment:Bb,envmap_pars_fragment:Vb,envmap_pars_vertex:zb,envmap_physical_pars_fragment:Qb,envmap_vertex:Hb,fog_vertex:Gb,fog_pars_vertex:Wb,fog_fragment:jb,fog_pars_fragment:$b,gradientmap_pars_fragment:Xb,lightmap_fragment:qb,lightmap_pars_fragment:Yb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Jb,lights_pars_begin:Kb,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:rx,lights_physical_pars_fragment:sx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:cx,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:hx,map_fragment:fx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:vx,morphcolor_vertex:yx,morphnormal_vertex:bx,morphtarget_pars_vertex:xx,morphtarget_vertex:Mx,normal_fragment_begin:Sx,normal_fragment_maps:Ex,normal_pars_fragment:wx,normal_pars_vertex:Ax,normal_vertex:Tx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:Nx,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:kx,dithering_pars_fragment:Ux,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Hx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:jx,skinning_pars_vertex:$x,skinning_vertex:Xx,skinnormal_vertex:qx,specularmap_fragment:Yx,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Kx,transmission_fragment:Qx,transmission_pars_fragment:eM,uv_pars_fragment:tM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:rM,background_vert:sM,background_frag:oM,backgroundCube_vert:aM,backgroundCube_frag:cM,cube_vert:lM,cube_frag:uM,depth_vert:dM,depth_frag:hM,distanceRGBA_vert:fM,distanceRGBA_frag:pM,equirect_vert:mM,equirect_frag:gM,linedashed_vert:_M,linedashed_frag:vM,meshbasic_vert:yM,meshbasic_frag:bM,meshlambert_vert:xM,meshlambert_frag:MM,meshmatcap_vert:SM,meshmatcap_frag:EM,meshnormal_vert:wM,meshnormal_frag:AM,meshphong_vert:TM,meshphong_frag:CM,meshphysical_vert:DM,meshphysical_frag:RM,meshtoon_vert:IM,meshtoon_frag:PM,points_vert:LM,points_frag:NM,shadow_vert:FM,shadow_frag:OM,sprite_vert:kM,sprite_frag:UM},se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Kn={basic:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([se.points,se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([se.common,se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([se.sprite,se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Yt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Yt([se.lights,se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Kn.physical={uniforms:Yt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ba={r:0,b:0,g:0};function BM(i,t,e,n,r,s,o){let a=new Xe(0),c=s===!0?0:1,l,u,h=null,f=0,m=null;function g(p,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===_c)?(u===void 0&&(u=new Rn(new go(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:fs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=it.getTransfer(M.colorSpace)!==lt,(h!==M||f!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Rn(new ju(2,2),new jn({name:"BackgroundMaterial",uniforms:fs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=it.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,d){p.getRGB(Ba,$m(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function VM(i,t,e,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function h(D,k,z,X,j){let $=!1;if(o){let q=_(X,z,k);l!==q&&(l=q,m(l.object)),$=d(D,X,z,j),$&&E(D,X,z,j)}else{let q=k.wireframe===!0;(l.geometry!==X.id||l.program!==z.id||l.wireframe!==q)&&(l.geometry=X.id,l.program=z.id,l.wireframe=q,$=!0)}j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,W(D,k,z,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,k,z){let X=z.wireframe===!0,j=a[D.id];j===void 0&&(j={},a[D.id]=j);let $=j[k.id];$===void 0&&($={},j[k.id]=$);let q=$[X];return q===void 0&&(q=p(f()),$[X]=q),q}function p(D){let k=[],z=[],X=[];for(let j=0;j<r;j++)k[j]=0,z[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:X,object:D,attributes:{},index:null}}function d(D,k,z,X){let j=l.attributes,$=k.attributes,q=0,ne=z.getAttributes();for(let ie in ne)if(ne[ie].location>=0){let Y=j[ie],le=$[ie];if(le===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),Y===void 0||Y.attribute!==le||le&&Y.data!==le.data)return!0;q++}return l.attributesNum!==q||l.index!==X}function E(D,k,z,X){let j={},$=k.attributes,q=0,ne=z.getAttributes();for(let ie in ne)if(ne[ie].location>=0){let Y=$[ie];Y===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));let le={};le.attribute=Y,Y&&Y.data&&(le.data=Y.data),j[ie]=le,q++}l.attributes=j,l.attributesNum=q,l.index=X}function M(){let D=l.newAttributes;for(let k=0,z=D.length;k<z;k++)D[k]=0}function w(D){R(D,0)}function R(D,k){let z=l.newAttributes,X=l.enabledAttributes,j=l.attributeDivisors;z[D]=1,X[D]===0&&(i.enableVertexAttribArray(D),X[D]=1),j[D]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),j[D]=k)}function T(){let D=l.newAttributes,k=l.enabledAttributes;for(let z=0,X=k.length;z<X;z++)k[z]!==D[z]&&(i.disableVertexAttribArray(z),k[z]=0)}function A(D,k,z,X,j,$,q){q===!0?i.vertexAttribIPointer(D,k,z,j,$):i.vertexAttribPointer(D,k,z,X,j,$)}function W(D,k,z,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();let j=X.attributes,$=z.getAttributes(),q=k.defaultAttributeValues;for(let ne in $){let ie=$[ne];if(ie.location>=0){let V=j[ne];if(V===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){let Y=V.normalized,le=V.itemSize,ve=e.get(V);if(ve===void 0)continue;let _e=ve.buffer,Fe=ve.type,Ue=ve.bytesPerElement,Ae=n.isWebGL2===!0&&(Fe===i.INT||Fe===i.UNSIGNED_INT||V.gpuType===Fm);if(V.isInterleavedBufferAttribute){let Ze=V.data,L=Ze.stride,jt=V.offset;if(Ze.isInstancedInterleavedBuffer){for(let xe=0;xe<ie.locationSize;xe++)R(ie.location+xe,Ze.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let xe=0;xe<ie.locationSize;xe++)w(ie.location+xe);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let xe=0;xe<ie.locationSize;xe++)A(ie.location+xe,le/ie.locationSize,Fe,Y,L*Ue,(jt+le/ie.locationSize*xe)*Ue,Ae)}else{if(V.isInstancedBufferAttribute){for(let Ze=0;Ze<ie.locationSize;Ze++)R(ie.location+Ze,V.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ze=0;Ze<ie.locationSize;Ze++)w(ie.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Ze=0;Ze<ie.locationSize;Ze++)A(ie.location+Ze,le/ie.locationSize,Fe,Y,le*Ue,le/ie.locationSize*Ze*Ue,Ae)}}else if(q!==void 0){let Y=q[ne];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(ie.location,Y);break;case 3:i.vertexAttrib3fv(ie.location,Y);break;case 4:i.vertexAttrib4fv(ie.location,Y);break;default:i.vertexAttrib1fv(ie.location,Y)}}}}T()}function b(){H();for(let D in a){let k=a[D];for(let z in k){let X=k[z];for(let j in X)g(X[j].object),delete X[j];delete k[z]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;let k=a[D.id];for(let z in k){let X=k[z];for(let j in X)g(X[j].object),delete X[j];delete k[z]}delete a[D.id]}function B(D){for(let k in a){let z=a[k];if(z[D.id]===void 0)continue;let X=z[D.id];for(let j in X)g(X[j].object),delete X[j];delete z[D.id]}}function H(){ee(),u=!0,l!==c&&(l=c,m(l.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:ee,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:w,disableUnusedAttributes:T}}function zM(i,t,e,n){let r=n.isWebGL2,s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),e.update(h,s,1)}function c(u,h,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,f),e.update(h,s,f)}function l(u,h,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function HM(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=o||t.has("OES_texture_float"),R=M&&w,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:R,maxSamples:T}}function GM(i){let t=this,e=null,n=0,r=!1,s=!1,o=new fi,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){let g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let E=s?0:n,M=E*4,w=d.clippingState||null;c.value=w,w=u(g,f,M,m);for(let R=0;R!==M;++R)w[R]=e[R];d.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let d=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,w=m;M!==_;++M,w+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function WM(i){let t=new WeakMap;function e(o,a){return a===Nu?o.mapping=ls:a===Fu&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nu||a===Fu)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wu(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var $u=class extends oc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,am=[.125,.215,.35,.446,.526,.582],ar=20,wu=new $u,cm=new Xe,Au=null,Tu=0,Cu=0,sr=(1+Math.sqrt(5))/2,ts=1/sr,lm=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,sr,ts),new P(0,sr,-ts),new P(ts,0,sr),new P(-ts,0,sr),new P(sr,ts,0),new P(-sr,ts,0)],cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Au=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Au,Tu,Cu),t.scissorTest=!1,Va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Au=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:mo,format:Gn,colorSpace:mi,depthBuffer:!1},r=um(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jM(s)),this._blurMaterial=$M(s,t,e)}return r}_compileMaterial(t){let e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,wu)}_sceneToCubeUV(t,e,n,r){let a=new Gt(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cm),u.toneMapping=Ni,u.autoClear=!1;let m=new ic({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Rn(new go,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(cm),_=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let M=this._cubeSize;Va(r,E*M,d>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===ls||t.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Va(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lm[(r-1)%lm.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Rn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ar-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ar;p>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ar}`);let d=[],E=0;for(let A=0;A<ar;++A){let W=A/_,b=Math.exp(-W*W/2);d.push(b),A===0?E+=b:A<p&&(E+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let w=this._sizeLods[r],R=3*w*(r>M-is?r-M+is:0),T=4*(this._cubeSize-w);Va(e,R,T,3*w,2*w),c.setRenderTarget(e),c.render(h,wu)}};function jM(i){let t=[],e=[],n=[],r=i,s=i-is+1+am.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-is?c=am[o-i+is-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,E=new Float32Array(_*g*m),M=new Float32Array(p*g*m),w=new Float32Array(d*g*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,W=T>2?0:-1,b=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];E.set(b,_*g*T),M.set(f,p*g*T);let S=[T,T,T,T,T,T];w.set(S,d*g*T)}let R=new Wn;R.setAttribute("position",new an(E,_)),R.setAttribute("uv",new an(M,p)),R.setAttribute("faceIndex",new an(w,d)),t.push(R),r>is&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function um(i,t,e){let n=new gi(i,t,e);return n.texture.mapping=_c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function $M(i,t,e){let n=new Float32Array(ar),r=new P(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function dm(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function hm(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Nu||c===Fu,u=c===ls||c===us;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new cc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new cc(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function YM(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(h){let f=[],m=h.index,g=h.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let M=0,w=E.length;M<w;M+=3){let R=E[M+0],T=E[M+1],A=E[M+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){let E=g.array;_=g.version;for(let M=0,w=E.length/3-1;M<w;M+=3){let R=M+0,T=M+1,A=M+2;f.push(R,T,T,A,A,R)}}else return;let p=new(Wm(f)?sc:rc)(f,1);p.version=_;let d=s.get(h);d&&t.remove(d),s.set(h,p)}function u(h){let f=s.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ZM(i,t,e,n){let r=n.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(s,g,a,m*c),e.update(g,s,1)}function h(m,g,_){if(_===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*c,_),e.update(g,s,_)}function f(m,g,_){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let E=0;E<_;E++)d+=g[E];e.update(d,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function JM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function KM(i,t){return i[0]-t[0]}function QM(i,t){return Math.abs(t[1])-Math.abs(i[1])}function eS(i,t,e){let n={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==_){let k=function(){ee.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();let M=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],W=u.morphAttributes.color||[],b=0;M===!0&&(b=1),w===!0&&(b=2),R===!0&&(b=3);let S=u.attributes.position.count*b,B=1;S>t.maxTextureSize&&(B=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let H=new Float32Array(S*B*4*_),ee=new ec(H,S,B,_);ee.type=Pi,ee.needsUpdate=!0;let D=b*4;for(let z=0;z<_;z++){let X=T[z],j=A[z],$=W[z],q=S*B*4*z;for(let ne=0;ne<X.count;ne++){let ie=ne*D;M===!0&&(o.fromBufferAttribute(X,ne),H[q+ie+0]=o.x,H[q+ie+1]=o.y,H[q+ie+2]=o.z,H[q+ie+3]=0),w===!0&&(o.fromBufferAttribute(j,ne),H[q+ie+4]=o.x,H[q+ie+5]=o.y,H[q+ie+6]=o.z,H[q+ie+7]=0),R===!0&&(o.fromBufferAttribute($,ne),H[q+ie+8]=o.x,H[q+ie+9]=o.y,H[q+ie+10]=o.z,H[q+ie+11]=$.itemSize===4?o.w:1)}}p={count:_,texture:ee,size:new Je(S,B)},s.set(u,p),u.addEventListener("dispose",k)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];let E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{let g=f===void 0?0:f.length,_=n[u.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[u.id]=_}for(let w=0;w<g;w++){let R=_[w];R[0]=w,R[1]=f[w]}_.sort(QM);for(let w=0;w<8;w++)w<g&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(KM);let p=u.morphAttributes.position,d=u.morphAttributes.normal,E=0;for(let w=0;w<8;w++){let R=a[w],T=R[0],A=R[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+w)!==p[T]&&u.setAttribute("morphTarget"+w,p[T]),d&&u.getAttribute("morphNormal"+w)!==d[T]&&u.setAttribute("morphNormal"+w,d[T]),r[w]=A,E+=A):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),d&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}let M=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function tS(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var lc=class extends ms{constructor(t,e,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:lr,u!==lr&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=Ii),n===void 0&&u===ds&&(n=cr),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qm=new ms,Ym=new lc(1,1);Ym.compareFunction=Gm;var Zm=new ec,Jm=new Hu,Km=new ac,fm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),_m=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=fm[r];if(s===void 0&&(s=new Float32Array(r),fm[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Dt(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Rt(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yc(i,t){let e=pm[t];e===void 0&&(e=new Int32Array(t),pm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function iS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dt(e,t))return;i.uniform2fv(this.addr,t),Rt(e,t)}}function rS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Dt(e,t))return;i.uniform3fv(this.addr,t),Rt(e,t)}}function sS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dt(e,t))return;i.uniform4fv(this.addr,t),Rt(e,t)}}function oS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Dt(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Rt(e,t)}else{if(Dt(e,n))return;_m.set(n),i.uniformMatrix2fv(this.addr,!1,_m),Rt(e,n)}}function aS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Dt(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Rt(e,t)}else{if(Dt(e,n))return;gm.set(n),i.uniformMatrix3fv(this.addr,!1,gm),Rt(e,n)}}function cS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Dt(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Rt(e,t)}else{if(Dt(e,n))return;mm.set(n),i.uniformMatrix4fv(this.addr,!1,mm),Rt(e,n)}}function lS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dt(e,t))return;i.uniform2iv(this.addr,t),Rt(e,t)}}function dS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dt(e,t))return;i.uniform3iv(this.addr,t),Rt(e,t)}}function hS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dt(e,t))return;i.uniform4iv(this.addr,t),Rt(e,t)}}function fS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dt(e,t))return;i.uniform2uiv(this.addr,t),Rt(e,t)}}function mS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dt(e,t))return;i.uniform3uiv(this.addr,t),Rt(e,t)}}function gS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dt(e,t))return;i.uniform4uiv(this.addr,t),Rt(e,t)}}function _S(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?Ym:qm;e.setTexture2D(t||s,r)}function vS(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Jm,r)}function yS(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Km,r)}function bS(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Zm,r)}function xS(i){switch(i){case 5126:return nS;case 35664:return iS;case 35665:return rS;case 35666:return sS;case 35674:return oS;case 35675:return aS;case 35676:return cS;case 5124:case 35670:return lS;case 35667:case 35671:return uS;case 35668:case 35672:return dS;case 35669:case 35673:return hS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return bS}}function MS(i,t){i.uniform1fv(this.addr,t)}function SS(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function ES(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function wS(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function AS(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function TS(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function CS(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function DS(i,t){i.uniform1iv(this.addr,t)}function RS(i,t){i.uniform2iv(this.addr,t)}function IS(i,t){i.uniform3iv(this.addr,t)}function PS(i,t){i.uniform4iv(this.addr,t)}function LS(i,t){i.uniform1uiv(this.addr,t)}function NS(i,t){i.uniform2uiv(this.addr,t)}function FS(i,t){i.uniform3uiv(this.addr,t)}function OS(i,t){i.uniform4uiv(this.addr,t)}function kS(i,t,e){let n=this.cache,r=t.length,s=yc(e,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||qm,s[o])}function US(i,t,e){let n=this.cache,r=t.length,s=yc(e,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Jm,s[o])}function BS(i,t,e){let n=this.cache,r=t.length,s=yc(e,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Km,s[o])}function VS(i,t,e){let n=this.cache,r=t.length,s=yc(e,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zm,s[o])}function zS(i){switch(i){case 5126:return MS;case 35664:return SS;case 35665:return ES;case 35666:return wS;case 35674:return AS;case 35675:return TS;case 35676:return CS;case 5124:case 35670:return DS;case 35667:case 35671:return RS;case 35668:case 35672:return IS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return NS;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return VS}}var Xu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xS(e.type)}},qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zS(e.type)}},Yu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Du=/(\w+)(\])?(\[|\.)?/g;function vm(i,t){i.seq.push(t),i.map[t.id]=t}function HS(i,t,e){let n=i.name,r=n.length;for(Du.lastIndex=0;;){let s=Du.exec(n),o=Du.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){vm(e,l===void 0?new Xu(a,i,t):new qu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Yu(a),vm(e,h)),e=h}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);HS(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function ym(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var GS=37297,WS=0;function jS(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $S(i){let t=it.getPrimaries(it.workingColorSpace),e=it.getPrimaries(i),n;switch(t===e?n="":t===Ya&&e===qa?n="LinearDisplayP3ToLinearSRGB":t===qa&&e===Ya&&(n="LinearSRGBToLinearDisplayP3"),i){case mi:case vc:return[n,"LinearTransferOETF"];case Ut:case _d:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+jS(i.getShaderSource(t),o)}else return r}function XS(i,t){let e=$S(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qS(i,t){let e;switch(t){case uy:e="Linear";break;case dy:e="Reinhard";break;case hy:e="OptimizedCineon";break;case fy:e="ACESFilmic";break;case my:e="AgX";break;case py:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function YS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function ZS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function JS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function KS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rs(i){return i!==""}function xm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(i){return i.replace(QS,tE)}var eE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tE(i,t){let e=Ve[t];if(e===void 0){let n=eE.get(t);if(n!==void 0)e=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zu(e)}var nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(i){return i.replace(nE,iE)}function iE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Em(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===U0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function sE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case us:t="ENVMAP_TYPE_CUBE";break;case _c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function aE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nm:t="ENVMAP_BLENDING_MULTIPLY";break;case cy:t="ENVMAP_BLENDING_MIX";break;case ly:t="ENVMAP_BLENDING_ADD";break}return t}function cE(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lE(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=rE(e),l=sE(e),u=oE(e),h=aE(e),f=cE(e),m=e.isWebGL2?"":YS(e),g=ZS(e),_=JS(s),p=r.createProgram(),d,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),E.length>0&&(E+=`
`)):(d=[Em(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),E=[m,Em(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Ve.tonemapping_pars_fragment:"",e.toneMapping!==Ni?qS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,XS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=Zu(o),o=xm(o,e),o=Mm(o,e),a=Zu(a),a=xm(a,e),a=Mm(a,e),o=Sm(o),a=Sm(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let w=M+d+o,R=M+E+a,T=ym(r,r.VERTEX_SHADER,w),A=ym(r,r.FRAGMENT_SHADER,R);r.attachShader(p,T),r.attachShader(p,A),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function W(H){if(i.debug.checkShaderErrors){let ee=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(A).trim(),z=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,T,A);else{let j=bm(r,T,"vertex"),$=bm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+j+`
`+$)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(D===""||k==="")&&(X=!1);X&&(H.diagnostics={runnable:z,programLog:ee,vertexShader:{log:D,prefix:d},fragmentShader:{log:k,prefix:E}})}r.deleteShader(T),r.deleteShader(A),b=new cs(r,p),S=KS(r,p)}let b;this.getUniforms=function(){return b===void 0&&W(this),b};let S;this.getAttributes=function(){return S===void 0&&W(this),S};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(p,GS)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=WS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var uE=0,Ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ku(t),e.set(t,n)),n}},Ku=class{constructor(t){this.id=uE++,this.code=t,this.usedTimes=0}};function dE(i,t,e,n,r,s,o){let a=new nc,c=new Ju,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function p(b,S,B,H,ee){let D=H.fog,k=ee.geometry,z=b.isMeshStandardMaterial?H.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),j=X&&X.mapping===_c?X.image.height:null,$=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=q!==void 0?q.length:0,ie=0;k.morphAttributes.position!==void 0&&(ie=1),k.morphAttributes.normal!==void 0&&(ie=2),k.morphAttributes.color!==void 0&&(ie=3);let V,Y,le,ve;if($){let $t=Kn[$];V=$t.vertexShader,Y=$t.fragmentShader}else V=b.vertexShader,Y=b.fragmentShader,c.update(b),le=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);let _e=i.getRenderTarget(),Fe=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,Ae=!!b.map,Ze=!!b.matcap,L=!!X,jt=!!b.aoMap,xe=!!b.lightMap,Pe=!!b.bumpMap,fe=!!b.normalMap,ht=!!b.displacementMap,ze=!!b.emissiveMap,x=!!b.metalnessMap,v=!!b.roughnessMap,F=b.anisotropy>0,K=b.clearcoat>0,J=b.iridescence>0,Q=b.sheen>0,me=b.transmission>0,ce=F&&!!b.anisotropyMap,de=K&&!!b.clearcoatMap,we=K&&!!b.clearcoatNormalMap,He=K&&!!b.clearcoatRoughnessMap,Z=J&&!!b.iridescenceMap,tt=J&&!!b.iridescenceThicknessMap,qe=Q&&!!b.sheenColorMap,Re=Q&&!!b.sheenRoughnessMap,be=!!b.specularMap,he=!!b.specularColorMap,Be=!!b.specularIntensityMap,Qe=me&&!!b.transmissionMap,_t=me&&!!b.thicknessMap,We=!!b.gradientMap,re=!!b.alphaMap,C=b.alphaTest>0,oe=!!b.alphaHash,ae=!!b.extensions,Te=!!k.attributes.uv1,Me=!!k.attributes.uv2,st=!!k.attributes.uv3,ot=Ni;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ot=i.toneMapping),{isWebGL2:u,shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:Y,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ue,instancing:Fe,instancingColor:Fe&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:mi,map:Ae,matcap:Ze,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:j,aoMap:jt,lightMap:xe,bumpMap:Pe,normalMap:fe,displacementMap:f&&ht,emissiveMap:ze,normalMapObjectSpace:fe&&b.normalMapType===Cy,normalMapTangentSpace:fe&&b.normalMapType===Ty,metalnessMap:x,roughnessMap:v,anisotropy:F,anisotropyMap:ce,clearcoat:K,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:He,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:tt,sheen:Q,sheenColorMap:qe,sheenRoughnessMap:Re,specularMap:be,specularColorMap:he,specularIntensityMap:Be,transmission:me,transmissionMap:Qe,thicknessMap:_t,gradientMap:We,opaque:b.transparent===!1&&b.blending===os,alphaMap:re,alphaTest:C,alphaHash:oe,combine:b.combine,mapUv:Ae&&_(b.map.channel),aoMapUv:jt&&_(b.aoMap.channel),lightMapUv:xe&&_(b.lightMap.channel),bumpMapUv:Pe&&_(b.bumpMap.channel),normalMapUv:fe&&_(b.normalMap.channel),displacementMapUv:ht&&_(b.displacementMap.channel),emissiveMapUv:ze&&_(b.emissiveMap.channel),metalnessMapUv:x&&_(b.metalnessMap.channel),roughnessMapUv:v&&_(b.roughnessMap.channel),anisotropyMapUv:ce&&_(b.anisotropyMap.channel),clearcoatMapUv:de&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(b.sheenRoughnessMap.channel),specularMapUv:be&&_(b.specularMap.channel),specularColorMapUv:he&&_(b.specularColorMap.channel),specularIntensityMapUv:Be&&_(b.specularIntensityMap.channel),transmissionMapUv:Qe&&_(b.transmissionMap.channel),thicknessMapUv:_t&&_(b.thicknessMap.channel),alphaMapUv:re&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Me,vertexUv3s:st,pointsUvs:ee.isPoints===!0&&!!k.attributes.uv&&(Ae||re),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let B in b.defines)S.push(B),S.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(E(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function E(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function w(b){let S=g[b.type],B;if(S){let H=Kn[S];B=eb.clone(H.uniforms)}else B=b.uniforms;return B}function R(b,S){let B;for(let H=0,ee=l.length;H<ee;H++){let D=l[H];if(D.cacheKey===S){B=D,++B.usedTimes;break}}return B===void 0&&(B=new lE(i,S,b,s),l.push(B)),B}function T(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function A(b){c.remove(b)}function W(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:W}}function hE(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function fE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Am(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,m,g,_,p){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function a(h,f,m,g,_,p){let d=o(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function c(h,f,m,g,_,p){let d=o(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||fE),n.length>1&&n.sort(f||wm),r.length>1&&r.sort(f||wm)}function u(){for(let h=t,f=i.length;h<f;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function pE(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Am,i.set(n,[o])):r>=s.length?(o=new Am,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function mE(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Xe};break;case"SpotLight":e={position:new P,direction:new P,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":e={color:new Xe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function gE(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _E=0;function vE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yE(i,t){let e=new mE,n=gE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);let s=new P,o=new wt,a=new wt;function c(u,h){let f=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,d=0,E=0,M=0,w=0,R=0,T=0,A=0,W=0,b=0;u.sort(vE);let S=h===!0?Math.PI:1;for(let H=0,ee=u.length;H<ee;H++){let D=u[H],k=D.color,z=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=k.r*z*S,m+=k.g*z*S,g+=k.b*z*S;else if(D.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(D.sh.coefficients[$],z);b++}else if(D.isDirectionalLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){let q=D.shadow,ne=n.get(D);ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,r.directionalShadow[_]=ne,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=D.shadow.matrix,w++}r.directional[_]=$,_++}else if(D.isSpotLight){let $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(k).multiplyScalar(z*S),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,r.spot[d]=$;let q=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,q.updateMatrices(D),D.castShadow&&W++),r.spotLightMatrix[d]=q.matrix,D.castShadow){let ne=n.get(D);ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,r.spotShadow[d]=ne,r.spotShadowMap[d]=j,T++}d++}else if(D.isRectAreaLight){let $=e.get(D);$.color.copy(k).multiplyScalar(z),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=$,E++}else if(D.isPointLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*S),$.distance=D.distance,$.decay=D.decay,D.castShadow){let q=D.shadow,ne=n.get(D);ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,ne.shadowCameraNear=q.camera.near,ne.shadowCameraFar=q.camera.far,r.pointShadow[p]=ne,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=D.shadow.matrix,R++}r.point[p]=$,p++}else if(D.isHemisphereLight){let $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(z*S),$.groundColor.copy(D.groundColor).multiplyScalar(z*S),r.hemi[M]=$,M++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;let B=r.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==d||B.rectAreaLength!==E||B.hemiLength!==M||B.numDirectionalShadows!==w||B.numPointShadows!==R||B.numSpotShadows!==T||B.numSpotMaps!==A||B.numLightProbes!==b)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=E,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+A-W,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=b,B.directionalLength=_,B.pointLength=p,B.spotLength=d,B.rectAreaLength=E,B.hemiLength=M,B.numDirectionalShadows=w,B.numPointShadows=R,B.numSpotShadows=T,B.numSpotMaps=A,B.numLightProbes=b,r.version=_E++)}function l(u,h){let f=0,m=0,g=0,_=0,p=0,d=h.matrixWorldInverse;for(let E=0,M=u.length;E<M;E++){let w=u[E];if(w.isDirectionalLight){let R=r.directional[f];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),f++}else if(w.isSpotLight){let R=r.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(w.isRectAreaLight){let R=r.rectArea[_];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let R=r.point[m];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){let R=r.hemi[p];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:r}}function Tm(i,t){let e=new yE(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bE(i,t){let e=new WeakMap;function n(s,o=0){let a=e.get(s),c;return a===void 0?(c=new Tm(i,t),e.set(s,[c])):o>=a.length?(c=new Tm(i,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qu=class extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ed=class extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SE(i,t,e){let n=new _o,r=new Je,s=new Je,o=new dt,a=new Qu({depthPacking:Ay}),c=new ed,l={},u=e.maxTextureSize,h={[Oi]:on,[on]:Oi,[zn]:zn},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:xE,fragmentShader:ME}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Wn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Rn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lm;let d=this.type;this.render=function(T,A,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let ee=d!==hi&&this.type===hi,D=d===hi&&this.type!==hi;for(let k=0,z=T.length;k<z;k++){let X=T[k],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let $=j.getFrameExtents();if(r.multiply($),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,j.mapSize.y=s.y)),j.map===null||ee===!0||D===!0){let ne=this.type!==hi?{minFilter:Zt,magFilter:Zt}:{};j.map!==null&&j.map.dispose(),j.map=new gi(r.x,r.y,ne),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let q=j.getViewportCount();for(let ne=0;ne<q;ne++){let ie=j.getViewport(ne);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),H.viewport(o),j.updateMatrices(X,ne),n=j.getFrustum(),w(A,W,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===hi&&E(j,W),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(b,S,B)};function E(T,A){let W=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,W,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,W,m,_,null)}function M(T,A,W,b){let S=null,B=W.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)S=B;else if(S=W.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=S.uuid,ee=A.uuid,D=l[H];D===void 0&&(D={},l[H]=D);let k=D[ee];k===void 0&&(k=S.clone(),D[ee]=k,A.addEventListener("dispose",R)),S=k}if(S.visible=A.visible,S.wireframe=A.wireframe,b===hi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,W.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=i.properties.get(S);H.light=W}return S}function w(T,A,W,b,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld);let ee=t.update(T),D=T.material;if(Array.isArray(D)){let k=ee.groups;for(let z=0,X=k.length;z<X;z++){let j=k[z],$=D[j.materialIndex];if($&&$.visible){let q=M(T,$,b,S);T.onBeforeShadow(i,T,A,W,ee,q,j),i.renderBufferDirect(W,null,ee,q,T,j),T.onAfterShadow(i,T,A,W,ee,q,j)}}}else if(D.visible){let k=M(T,D,b,S);T.onBeforeShadow(i,T,A,W,ee,k,null),i.renderBufferDirect(W,null,ee,k,T,null),T.onAfterShadow(i,T,A,W,ee,k,null)}}let H=T.children;for(let ee=0,D=H.length;ee<D;ee++)w(H[ee],A,W,b,S)}function R(T){T.target.removeEventListener("dispose",R);for(let W in l){let b=l[W],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function EE(i,t,e){let n=e.isWebGL2;function r(){let C=!1,oe=new dt,ae=null,Te=new dt(0,0,0,0);return{setMask:function(Me){ae!==Me&&!C&&(i.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){C=Me},setClear:function(Me,st,ot,It,$t){$t===!0&&(Me*=It,st*=It,ot*=It),oe.set(Me,st,ot,It),Te.equals(oe)===!1&&(i.clearColor(Me,st,ot,It),Te.copy(oe))},reset:function(){C=!1,ae=null,Te.set(-1,0,0,0)}}}function s(){let C=!1,oe=null,ae=null,Te=null;return{setTest:function(Me){Me?Ue(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Me){oe!==Me&&!C&&(i.depthMask(Me),oe=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case ty:i.depthFunc(i.NEVER);break;case ny:i.depthFunc(i.ALWAYS);break;case iy:i.depthFunc(i.LESS);break;case Wa:i.depthFunc(i.LEQUAL);break;case ry:i.depthFunc(i.EQUAL);break;case sy:i.depthFunc(i.GEQUAL);break;case oy:i.depthFunc(i.GREATER);break;case ay:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Me}},setLocked:function(Me){C=Me},setClear:function(Me){Te!==Me&&(i.clearDepth(Me),Te=Me)},reset:function(){C=!1,oe=null,ae=null,Te=null}}}function o(){let C=!1,oe=null,ae=null,Te=null,Me=null,st=null,ot=null,It=null,$t=null;return{setTest:function(at){C||(at?Ue(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(at){oe!==at&&!C&&(i.stencilMask(at),oe=at)},setFunc:function(at,Xt,qn){(ae!==at||Te!==Xt||Me!==qn)&&(i.stencilFunc(at,Xt,qn),ae=at,Te=Xt,Me=qn)},setOp:function(at,Xt,qn){(st!==at||ot!==Xt||It!==qn)&&(i.stencilOp(at,Xt,qn),st=at,ot=Xt,It=qn)},setLocked:function(at){C=at},setClear:function(at){$t!==at&&(i.clearStencil(at),$t=at)},reset:function(){C=!1,oe=null,ae=null,Te=null,Me=null,st=null,ot=null,It=null,$t=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,M=null,w=null,R=null,T=null,A=null,W=null,b=new Xe(0,0,0),S=0,B=!1,H=null,ee=null,D=null,k=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,$=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=$>=2);let ne=null,ie={},V=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),le=new dt().fromArray(V),ve=new dt().fromArray(Y);function _e(C,oe,ae,Te){let Me=new Uint8Array(4),st=i.createTexture();i.bindTexture(C,st),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<ae;ot++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(oe+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return st}let Fe={};Fe[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Fe[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(i.DEPTH_TEST),c.setFunc(Wa),ze(!1),x(op),Ue(i.CULL_FACE),fe(Li);function Ue(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function Ae(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Ze(C,oe){return m[C]!==oe?(i.bindFramebuffer(C,oe),m[C]=oe,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function L(C,oe){let ae=_,Te=!1;if(C)if(ae=g.get(oe),ae===void 0&&(ae=[],g.set(oe,ae)),C.isWebGLMultipleRenderTargets){let Me=C.texture;if(ae.length!==Me.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let st=0,ot=Me.length;st<ot;st++)ae[st]=i.COLOR_ATTACHMENT0+st;ae.length=Me.length,Te=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,Te=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,Te=!0);Te&&(e.isWebGL2?i.drawBuffers(ae):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function jt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}let xe={[or]:i.FUNC_ADD,[V0]:i.FUNC_SUBTRACT,[z0]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[lp]=i.MIN,xe[up]=i.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(xe[lp]=C.MIN_EXT,xe[up]=C.MAX_EXT)}let Pe={[H0]:i.ZERO,[G0]:i.ONE,[W0]:i.SRC_COLOR,[Pu]:i.SRC_ALPHA,[Z0]:i.SRC_ALPHA_SATURATE,[q0]:i.DST_COLOR,[$0]:i.DST_ALPHA,[j0]:i.ONE_MINUS_SRC_COLOR,[Lu]:i.ONE_MINUS_SRC_ALPHA,[Y0]:i.ONE_MINUS_DST_COLOR,[X0]:i.ONE_MINUS_DST_ALPHA,[J0]:i.CONSTANT_COLOR,[K0]:i.ONE_MINUS_CONSTANT_COLOR,[Q0]:i.CONSTANT_ALPHA,[ey]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(C,oe,ae,Te,Me,st,ot,It,$t,at){if(C===Li){d===!0&&(Ae(i.BLEND),d=!1);return}if(d===!1&&(Ue(i.BLEND),d=!0),C!==B0){if(C!==E||at!==B){if((M!==or||T!==or)&&(i.blendEquation(i.FUNC_ADD),M=or,T=or),at)switch(C){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.ONE,i.ONE);break;case ap:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ap:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,R=null,A=null,W=null,b.set(0,0,0),S=0,E=C,B=at}return}Me=Me||oe,st=st||ae,ot=ot||Te,(oe!==M||Me!==T)&&(i.blendEquationSeparate(xe[oe],xe[Me]),M=oe,T=Me),(ae!==w||Te!==R||st!==A||ot!==W)&&(i.blendFuncSeparate(Pe[ae],Pe[Te],Pe[st],Pe[ot]),w=ae,R=Te,A=st,W=ot),(It.equals(b)===!1||$t!==S)&&(i.blendColor(It.r,It.g,It.b,$t),b.copy(It),S=$t),E=C,B=!1}function ht(C,oe){C.side===zn?Ae(i.CULL_FACE):Ue(i.CULL_FACE);let ae=C.side===on;oe&&(ae=!ae),ze(ae),C.blending===os&&C.transparent===!1?fe(Li):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let Te=C.stencilWrite;l.setTest(Te),Te&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(C){H!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),H=C)}function x(C){C!==O0?(Ue(i.CULL_FACE),C!==ee&&(C===op?i.cullFace(i.BACK):C===k0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),ee=C}function v(C){C!==D&&(j&&i.lineWidth(C),D=C)}function F(C,oe,ae){C?(Ue(i.POLYGON_OFFSET_FILL),(k!==oe||z!==ae)&&(i.polygonOffset(oe,ae),k=oe,z=ae)):Ae(i.POLYGON_OFFSET_FILL)}function K(C){C?Ue(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+X-1),ne!==C&&(i.activeTexture(C),ne=C)}function Q(C,oe,ae){ae===void 0&&(ne===null?ae=i.TEXTURE0+X-1:ae=ne);let Te=ie[ae];Te===void 0&&(Te={type:void 0,texture:void 0},ie[ae]=Te),(Te.type!==C||Te.texture!==oe)&&(ne!==ae&&(i.activeTexture(ae),ne=ae),i.bindTexture(C,oe||Fe[C]),Te.type=C,Te.texture=oe)}function me(){let C=ie[ne];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(C){le.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),le.copy(C))}function Qe(C){ve.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function _t(C,oe){let ae=h.get(oe);ae===void 0&&(ae=new WeakMap,h.set(oe,ae));let Te=ae.get(C);Te===void 0&&(Te=i.getUniformBlockIndex(oe,C.name),ae.set(C,Te))}function We(C,oe){let Te=h.get(oe).get(C);u.get(oe)!==Te&&(i.uniformBlockBinding(oe,Te,C.__bindingPointIndex),u.set(oe,Te))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,ie={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,M=null,w=null,R=null,T=null,A=null,W=null,b=new Xe(0,0,0),S=0,B=!1,H=null,ee=null,D=null,k=null,z=null,le.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ue,disable:Ae,bindFramebuffer:Ze,drawBuffers:L,useProgram:jt,setBlending:fe,setMaterial:ht,setFlipSided:ze,setCullFace:x,setLineWidth:v,setPolygonOffset:F,setScissorTest:K,activeTexture:J,bindTexture:Q,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:be,texImage3D:he,updateUBOMapping:_t,uniformBlockBinding:We,texStorage2D:qe,texStorage3D:Re,texSubImage2D:we,texSubImage3D:He,compressedTexSubImage2D:Z,compressedTexSubImage3D:tt,scissor:Be,viewport:Qe,reset:re}}function wE(i,t,e,n,r,s,o){let a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return m?new OffscreenCanvas(x,v):Ja("canvas")}function _(x,v,F,K){let J=1;if((x.width>K||x.height>K)&&(J=K/Math.max(x.width,x.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){let Q=v?Vu:Math.floor,me=Q(J*x.width),ce=Q(J*x.height);h===void 0&&(h=g(me,ce));let de=F?g(me,ce):h;return de.width=me,de.height=ce,de.getContext("2d").drawImage(x,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+me+"x"+ce+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return Wp(x.width)&&Wp(x.height)}function d(x){return a?!1:x.wrapS!==Hn||x.wrapT!==Hn||x.minFilter!==Zt&&x.minFilter!==Cn}function E(x,v){return x.generateMipmaps&&v&&x.minFilter!==Zt&&x.minFilter!==Cn}function M(x){i.generateMipmap(x)}function w(x,v,F,K,J=!1){if(a===!1)return v;if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Q=v;if(v===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RGBA){let me=J?Xa:it.getTransfer(K);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=me===lt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function R(x,v,F){return E(x,F)===!0||x.isFramebufferTexture&&x.minFilter!==Zt&&x.minFilter!==Cn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function T(x){return x===Zt||x===hp||x===Ql?i.NEAREST:i.LINEAR}function A(x){let v=x.target;v.removeEventListener("dispose",A),b(v),v.isVideoTexture&&u.delete(v)}function W(x){let v=x.target;v.removeEventListener("dispose",W),B(v)}function b(x){let v=n.get(x);if(v.__webglInit===void 0)return;let F=x.source,K=f.get(F);if(K){let J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(x),Object.keys(K).length===0&&f.delete(F)}n.remove(x)}function S(x){let v=n.get(x);i.deleteTexture(v.__webglTexture);let F=x.source,K=f.get(F);delete K[v.__cacheKey],o.memory.textures--}function B(x){let v=x.texture,F=n.get(x),K=n.get(v);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let Q=0;Q<F.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let J=0,Q=v.length;J<Q;J++){let me=n.get(v[J]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(v[J])}n.remove(v),n.remove(x)}let H=0;function ee(){H=0}function D(){let x=H;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),H+=1,x}function k(x){let v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function z(x,v){let F=n.get(x);if(x.isVideoTexture&&ht(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){let K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(F,x,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function X(x,v){let F=n.get(x);if(x.version>0&&F.__version!==x.version){le(F,x,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function j(x,v){let F=n.get(x);if(x.version>0&&F.__version!==x.version){le(F,x,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function $(x,v){let F=n.get(x);if(x.version>0&&F.__version!==x.version){ve(F,x,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let q={[Ou]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[ku]:i.MIRRORED_REPEAT},ne={[Zt]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[Ql]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[gy]:i.LINEAR_MIPMAP_NEAREST,[po]:i.LINEAR_MIPMAP_LINEAR},ie={[Dy]:i.NEVER,[Fy]:i.ALWAYS,[Ry]:i.LESS,[Gm]:i.LEQUAL,[Iy]:i.EQUAL,[Ny]:i.GEQUAL,[Py]:i.GREATER,[Ly]:i.NOTEQUAL};function V(x,v,F){if(F?(i.texParameteri(x,i.TEXTURE_WRAP_S,q[v.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,q[v.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,q[v.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,ne[v.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,ne[v.minFilter])):(i.texParameteri(x,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(x,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Hn||v.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(x,i.TEXTURE_MAG_FILTER,T(v.magFilter)),i.texParameteri(x,i.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Zt&&v.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Zt||v.minFilter!==Ql&&v.minFilter!==po||v.type===Pi&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===mo&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(x,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Y(x,v){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",A));let K=v.source,J=f.get(K);J===void 0&&(J={},f.set(K,J));let Q=k(v);if(Q!==x.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Q].usedTimes++;let me=J[x.__cacheKey];me!==void 0&&(J[x.__cacheKey].usedTimes--,me.usedTimes===0&&S(v)),x.__cacheKey=Q,x.__webglTexture=J[Q].texture}return F}function le(x,v,F){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);let J=Y(x,v),Q=v.source;e.bindTexture(K,x.__webglTexture,i.TEXTURE0+F);let me=n.get(Q);if(Q.version!==me.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let ce=it.getPrimaries(it.workingColorSpace),de=v.colorSpace===Dn?null:it.getPrimaries(v.colorSpace),we=v.colorSpace===Dn||ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let He=d(v)&&p(v.image)===!1,Z=_(v.image,He,!1,r.maxTextureSize);Z=ze(v,Z);let tt=p(Z)||a,qe=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),be=w(v.internalFormat,qe,Re,v.colorSpace,v.isVideoTexture);V(K,v,tt);let he,Be=v.mipmaps,Qe=a&&v.isVideoTexture!==!0&&be!==zm,_t=me.__version===void 0||J===!0,We=R(v,Z,tt);if(v.isDepthTexture)be=i.DEPTH_COMPONENT,a?v.type===Pi?be=i.DEPTH_COMPONENT32F:v.type===Ii?be=i.DEPTH_COMPONENT24:v.type===cr?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:v.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===lr&&be===i.DEPTH_COMPONENT&&v.type!==gd&&v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ii,Re=s.convert(v.type)),v.format===ds&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,v.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=cr,Re=s.convert(v.type))),_t&&(Qe?e.texStorage2D(i.TEXTURE_2D,1,be,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,be,Z.width,Z.height,0,qe,Re,null));else if(v.isDataTexture)if(Be.length>0&&tt){Qe&&_t&&e.texStorage2D(i.TEXTURE_2D,We,be,Be[0].width,Be[0].height);for(let re=0,C=Be.length;re<C;re++)he=Be[re],Qe?e.texSubImage2D(i.TEXTURE_2D,re,0,0,he.width,he.height,qe,Re,he.data):e.texImage2D(i.TEXTURE_2D,re,be,he.width,he.height,0,qe,Re,he.data);v.generateMipmaps=!1}else Qe?(_t&&e.texStorage2D(i.TEXTURE_2D,We,be,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,qe,Re,Z.data)):e.texImage2D(i.TEXTURE_2D,0,be,Z.width,Z.height,0,qe,Re,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qe&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,We,be,Be[0].width,Be[0].height,Z.depth);for(let re=0,C=Be.length;re<C;re++)he=Be[re],v.format!==Gn?qe!==null?Qe?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,Z.depth,qe,he.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,be,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?e.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,Z.depth,qe,Re,he.data):e.texImage3D(i.TEXTURE_2D_ARRAY,re,be,he.width,he.height,Z.depth,0,qe,Re,he.data)}else{Qe&&_t&&e.texStorage2D(i.TEXTURE_2D,We,be,Be[0].width,Be[0].height);for(let re=0,C=Be.length;re<C;re++)he=Be[re],v.format!==Gn?qe!==null?Qe?e.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,he.width,he.height,qe,he.data):e.compressedTexImage2D(i.TEXTURE_2D,re,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?e.texSubImage2D(i.TEXTURE_2D,re,0,0,he.width,he.height,qe,Re,he.data):e.texImage2D(i.TEXTURE_2D,re,be,he.width,he.height,0,qe,Re,he.data)}else if(v.isDataArrayTexture)Qe?(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,We,be,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,qe,Re,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,qe,Re,Z.data);else if(v.isData3DTexture)Qe?(_t&&e.texStorage3D(i.TEXTURE_3D,We,be,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,qe,Re,Z.data)):e.texImage3D(i.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,qe,Re,Z.data);else if(v.isFramebufferTexture){if(_t)if(Qe)e.texStorage2D(i.TEXTURE_2D,We,be,Z.width,Z.height);else{let re=Z.width,C=Z.height;for(let oe=0;oe<We;oe++)e.texImage2D(i.TEXTURE_2D,oe,be,re,C,0,qe,Re,null),re>>=1,C>>=1}}else if(Be.length>0&&tt){Qe&&_t&&e.texStorage2D(i.TEXTURE_2D,We,be,Be[0].width,Be[0].height);for(let re=0,C=Be.length;re<C;re++)he=Be[re],Qe?e.texSubImage2D(i.TEXTURE_2D,re,0,0,qe,Re,he):e.texImage2D(i.TEXTURE_2D,re,be,qe,Re,he);v.generateMipmaps=!1}else Qe?(_t&&e.texStorage2D(i.TEXTURE_2D,We,be,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,qe,Re,Z)):e.texImage2D(i.TEXTURE_2D,0,be,qe,Re,Z);E(v,tt)&&M(K),me.__version=Q.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ve(x,v,F){if(v.image.length!==6)return;let K=Y(x,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+F);let Q=n.get(J);if(J.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+F);let me=it.getPrimaries(it.workingColorSpace),ce=v.colorSpace===Dn?null:it.getPrimaries(v.colorSpace),de=v.colorSpace===Dn||me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,He=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let re=0;re<6;re++)!we&&!He?Z[re]=_(v.image[re],!1,!0,r.maxCubemapSize):Z[re]=He?v.image[re].image:v.image[re],Z[re]=ze(v,Z[re]);let tt=Z[0],qe=p(tt)||a,Re=s.convert(v.format,v.colorSpace),be=s.convert(v.type),he=w(v.internalFormat,Re,be,v.colorSpace),Be=a&&v.isVideoTexture!==!0,Qe=Q.__version===void 0||K===!0,_t=R(v,tt,qe);V(i.TEXTURE_CUBE_MAP,v,qe);let We;if(we){Be&&Qe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,he,tt.width,tt.height);for(let re=0;re<6;re++){We=Z[re].mipmaps;for(let C=0;C<We.length;C++){let oe=We[C];v.format!==Gn?Re!==null?Be?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C,0,0,oe.width,oe.height,Re,oe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C,0,0,oe.width,oe.height,Re,be,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C,he,oe.width,oe.height,0,Re,be,oe.data)}}}else{We=v.mipmaps,Be&&Qe&&(We.length>0&&_t++,e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,he,Z[0].width,Z[0].height));for(let re=0;re<6;re++)if(He){Be?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Z[re].width,Z[re].height,Re,be,Z[re].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,he,Z[re].width,Z[re].height,0,Re,be,Z[re].data);for(let C=0;C<We.length;C++){let ae=We[C].image[re].image;Be?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C+1,0,0,ae.width,ae.height,Re,be,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C+1,he,ae.width,ae.height,0,Re,be,ae.data)}}else{Be?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,be,Z[re]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,he,Re,be,Z[re]);for(let C=0;C<We.length;C++){let oe=We[C];Be?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C+1,0,0,Re,be,oe.image[re]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,C+1,he,Re,be,oe.image[re])}}}E(v,qe)&&M(i.TEXTURE_CUBE_MAP),Q.__version=J.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function _e(x,v,F,K,J,Q){let me=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),de=w(F.internalFormat,me,ce,F.colorSpace);if(!n.get(v).__hasExternalTextures){let He=Math.max(1,v.width>>Q),Z=Math.max(1,v.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Q,de,He,Z,v.depth,0,me,ce,null):e.texImage2D(J,Q,de,He,Z,0,me,ce,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),fe(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(F).__webglTexture,0,Pe(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(F).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(x,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,x),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||fe(v)){let J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Pi?K=i.DEPTH_COMPONENT32F:J.type===Ii&&(K=i.DEPTH_COMPONENT24));let Q=Pe(v);fe(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,K,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,K,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,x)}else if(v.depthBuffer&&v.stencilBuffer){let K=Pe(v);F&&fe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,v.width,v.height):fe(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,x)}else{let K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<K.length;J++){let Q=K[J],me=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),de=w(Q.internalFormat,me,ce,Q.colorSpace),we=Pe(v);F&&fe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,de,v.width,v.height):fe(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);let K=n.get(v.depthTexture).__webglTexture,J=Pe(v);if(v.depthTexture.format===lr)fe(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===ds)fe(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(x){let v=n.get(x),F=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ue(v.__webglFramebuffer,x)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=i.createRenderbuffer(),Fe(v.__webglDepthbuffer[K],x,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Fe(v.__webglDepthbuffer,x,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(x,v,F){let K=n.get(x);v!==void 0&&_e(K.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ae(x)}function L(x){let v=x.texture,F=n.get(x),K=n.get(v);x.addEventListener("dispose",W),x.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++);let J=x.isWebGLCubeRenderTarget===!0,Q=x.isWebGLMultipleRenderTargets===!0,me=p(x)||a;if(J){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let de=0;de<v.mipmaps.length;de++)F.__webglFramebuffer[ce][de]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){let ce=x.texture;for(let de=0,we=ce.length;de<we;de++){let He=n.get(ce[de]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&fe(x)===!1){let ce=Q?v:[v];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){let we=ce[de];F.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[de]);let He=s.convert(we.format,we.colorSpace),Z=s.convert(we.type),tt=w(we.internalFormat,He,Z,we.colorSpace,x.isXRRenderTarget===!0),qe=Pe(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,tt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,F.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),V(i.TEXTURE_CUBE_MAP,v,me);for(let ce=0;ce<6;ce++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(F.__webglFramebuffer[ce][de],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else _e(F.__webglFramebuffer[ce],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);E(v,me)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let ce=x.texture;for(let de=0,we=ce.length;de<we;de++){let He=ce[de],Z=n.get(He);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),V(i.TEXTURE_2D,He,me),_e(F.__webglFramebuffer,x,He,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),E(He,me)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let ce=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?ce=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ce,K.__webglTexture),V(ce,v,me),a&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(F.__webglFramebuffer[de],x,v,i.COLOR_ATTACHMENT0,ce,de);else _e(F.__webglFramebuffer,x,v,i.COLOR_ATTACHMENT0,ce,0);E(v,me)&&M(ce),e.unbindTexture()}x.depthBuffer&&Ae(x)}function jt(x){let v=p(x)||a,F=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0,J=F.length;K<J;K++){let Q=F[K];if(E(Q,v)){let me=x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(Q).__webglTexture;e.bindTexture(me,ce),M(me),e.unbindTexture()}}}function xe(x){if(a&&x.samples>0&&fe(x)===!1){let v=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],F=x.width,K=x.height,J=i.COLOR_BUFFER_BIT,Q=[],me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(x),de=x.isWebGLMultipleRenderTargets===!0;if(de)for(let we=0;we<v.length;we++)e.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<v.length;we++){Q.push(i.COLOR_ATTACHMENT0+we),x.depthBuffer&&Q.push(me);let He=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(He===!1&&(x.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),He===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),de){let Z=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<v.length;we++){e.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);let He=n.get(v[we]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,He,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Pe(x){return Math.min(r.maxSamples,x.samples)}function fe(x){let v=n.get(x);return a&&x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ht(x){let v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function ze(x,v){let F=x.colorSpace,K=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Uu||F!==mi&&F!==Dn&&(it.getTransfer(F)===lt?a===!1?t.has("EXT_sRGB")===!0&&K===Gn?(x.format=Uu,x.minFilter=Cn,x.generateMipmaps=!1):v=Ka.sRGBToLinear(v):(K!==Gn||J!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=D,this.resetTextureUnits=ee,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Ze,this.setupRenderTarget=L,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fe}function AE(i,t,e){let n=e.isWebGL2;function r(s,o=Dn){let a,c=it.getTransfer(o);if(s===Fi)return i.UNSIGNED_BYTE;if(s===Om)return i.UNSIGNED_SHORT_4_4_4_4;if(s===km)return i.UNSIGNED_SHORT_5_5_5_1;if(s===_y)return i.BYTE;if(s===vy)return i.SHORT;if(s===gd)return i.UNSIGNED_SHORT;if(s===Fm)return i.INT;if(s===Ii)return i.UNSIGNED_INT;if(s===Pi)return i.FLOAT;if(s===mo)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yy)return i.ALPHA;if(s===Gn)return i.RGBA;if(s===by)return i.LUMINANCE;if(s===xy)return i.LUMINANCE_ALPHA;if(s===lr)return i.DEPTH_COMPONENT;if(s===ds)return i.DEPTH_STENCIL;if(s===Uu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===My)return i.RED;if(s===Um)return i.RED_INTEGER;if(s===Sy)return i.RG;if(s===Bm)return i.RG_INTEGER;if(s===Vm)return i.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(c===lt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===eu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===eu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fp||s===pp||s===mp||s===gp)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===fp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_p||s===vp)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_p)return c===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yp||s===bp||s===xp||s===Mp||s===Sp||s===Ep||s===wp||s===Ap||s===Tp||s===Cp||s===Dp||s===Rp||s===Ip||s===Pp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ep)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pp)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ru||s===Lp||s===Np)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ru)return c===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Np)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ey||s===Fp||s===Op||s===kp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ru)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Fp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Op)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}var td=class extends Gt{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ss=class extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}},TE={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nd=class extends ki{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null,_=e.getContextAttributes(),p=null,d=null,E=[],M=[],w=new Je,R=null,T=new Gt;T.layers.enable(1),T.viewport=new dt;let A=new Gt;A.layers.enable(2),A.viewport=new dt;let W=[T,A],b=new td;b.layers.enable(1),b.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=E[V];return Y===void 0&&(Y=new ho,E[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=E[V];return Y===void 0&&(Y=new ho,E[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=E[V];return Y===void 0&&(Y=new ho,E[V]=Y),Y.getHandSpace()};function H(V){let Y=M.indexOf(V.inputSource);if(Y===-1)return;let le=E[Y];le!==void 0&&(le.update(V.inputSource,V.frame,l||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function ee(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",D);for(let V=0;V<E.length;V++){let Y=M[V];Y!==null&&(M[V]=null,E[V].disconnect(Y))}S=null,B=null,t.setRenderTarget(p),m=null,f=null,h=null,r=null,d=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(V){return Es(this,null,function*(){if(r=V,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(w),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new gi(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,le=null,ve=null;_.depth&&(ve=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=_.stencil?ds:lr,le=_.stencil?cr:Ii);let _e={colorFormat:e.RGBA8,depthFormat:ve,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new gi(f.textureWidth,f.textureHeight,{format:Gn,type:Fi,depthTexture:new lc(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Fe=t.properties.get(d);Fe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(V){for(let Y=0;Y<V.removed.length;Y++){let le=V.removed[Y],ve=M.indexOf(le);ve>=0&&(M[ve]=null,E[ve].disconnect(le))}for(let Y=0;Y<V.added.length;Y++){let le=V.added[Y],ve=M.indexOf(le);if(ve===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=M.length){M.push(le),ve=Fe;break}else if(M[Fe]===null){M[Fe]=le,ve=Fe;break}if(ve===-1)break}let _e=E[ve];_e&&_e.connect(le)}}let k=new P,z=new P;function X(V,Y,le){k.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);let ve=k.distanceTo(z),_e=Y.projectionMatrix.elements,Fe=le.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Ae=_e[14]/(_e[10]+1),Ze=(_e[9]+1)/_e[5],L=(_e[9]-1)/_e[5],jt=(_e[8]-1)/_e[0],xe=(Fe[8]+1)/Fe[0],Pe=Ue*jt,fe=Ue*xe,ht=ve/(-jt+xe),ze=ht*-jt;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(ht),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let x=Ue+ht,v=Ae+ht,F=Pe-ze,K=fe+(ve-ze),J=Ze*Ae/v*x,Q=L*Ae/v*x;V.projectionMatrix.makePerspective(F,K,J,Q,x,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;b.near=A.near=T.near=V.near,b.far=A.far=T.far=V.far,(S!==b.near||B!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,B=b.far);let Y=V.parent,le=b.cameras;j(b,Y);for(let ve=0;ve<le.length;ve++)j(le[ve],Y);le.length===2?X(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),$(V,b,Y)};function $(V,Y,le){le===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Bu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let q=null;function ne(V,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let le=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let ve=!1;le.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let _e=0;_e<le.length;_e++){let Fe=le[_e],Ue=null;if(m!==null)Ue=m.getViewport(Fe);else{let Ze=h.getViewSubImage(f,Fe);Ue=Ze.viewport,_e===0&&(t.setRenderTargetTextures(d,Ze.colorTexture,f.ignoreDepthValues?void 0:Ze.depthStencilTexture),t.setRenderTarget(d))}let Ae=W[_e];Ae===void 0&&(Ae=new Gt,Ae.layers.enable(_e),Ae.viewport=new dt,W[_e]=Ae),Ae.matrix.fromArray(Fe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Fe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(Ae)}}for(let le=0;le<E.length;le++){let ve=M[le],_e=E[le];ve!==null&&_e!==void 0&&_e.update(ve,Y,l||o)}q&&q(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ie=new Xm;ie.setAnimationLoop(ne),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}};function CE(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,$m(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,M,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,E,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===on&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===on&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=t.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,E,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function DE(i,t,e,n){let r={},s={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){let w=M.program;n.uniformBlockBinding(E,w)}function l(E,M){let w=r[E.id];w===void 0&&(g(E),w=u(E),r[E.id]=w,E.addEventListener("dispose",p));let R=M.program;n.updateUBOMapping(E,R);let T=t.render.frame;s[E.id]!==T&&(f(E),s[E.id]=T)}function u(E){let M=h();E.__bindingPointIndex=M;let w=i.createBuffer(),R=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=r[E.id],w=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=w.length;T<A;T++){let W=Array.isArray(w[T])?w[T]:[w[T]];for(let b=0,S=W.length;b<S;b++){let B=W[b];if(m(B,T,b,R)===!0){let H=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value],D=0;for(let k=0;k<ee.length;k++){let z=ee[k],X=_(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+D,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,w,R){let T=E.value,A=M+"_"+w;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let W=R[A];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return R[A]=T,!0}else if(W.equals(T)===!1)return W.copy(T),!0}return!1}function g(E){let M=E.uniforms,w=0,R=16;for(let A=0,W=M.length;A<W;A++){let b=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,B=b.length;S<B;S++){let H=b[S],ee=Array.isArray(H.value)?H.value:[H.value];for(let D=0,k=ee.length;D<k;D++){let z=ee[D],X=_(z),j=w%R;j!==0&&R-j<X.boundary&&(w+=R-j),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=X.storage}}}let T=w%R;return T>0&&(w+=R-T),E.__size=w,E.__cache={},this}function _(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){let M=E.target;M.removeEventListener("dispose",p);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var vo=class{constructor(t={}){let{canvas:e=ky(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let M=this,w=!1,R=0,T=0,A=null,W=-1,b=null,S=new dt,B=new dt,H=null,ee=new Xe(0),D=0,k=e.width,z=e.height,X=1,j=null,$=null,q=new dt(0,0,k,z),ne=new dt(0,0,k,z),ie=!1,V=new _o,Y=!1,le=!1,ve=null,_e=new wt,Fe=new Je,Ue=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return A===null?X:1}let L=n;function jt(y,I){for(let O=0;O<y.length;O++){let U=y[O],N=e.getContext(U,I);if(N!==null)return N}return null}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",oe,!1),L===null){let I=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&I.shift(),L=jt(I,y),L===null)throw jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let xe,Pe,fe,ht,ze,x,v,F,K,J,Q,me,ce,de,we,He,Z,tt,qe,Re,be,he,Be,Qe;function _t(){xe=new qM(L),Pe=new HM(L,xe,t),xe.init(Pe),he=new AE(L,xe,Pe),fe=new EE(L,xe,Pe),ht=new JM(L),ze=new hE,x=new wE(L,xe,fe,ze,Pe,he,ht),v=new WM(M),F=new XM(M),K=new sb(L,Pe),Be=new VM(L,xe,K,Pe),J=new YM(L,K,ht,Be),Q=new tS(L,J,K,ht),qe=new eS(L,Pe,x),He=new GM(ze),me=new dE(M,v,F,xe,Pe,Be,He),ce=new CE(M,ze),de=new pE,we=new bE(xe,Pe),tt=new BM(M,v,F,fe,Q,f,c),Z=new SE(M,Q,Pe),Qe=new DE(L,ht,Pe,fe),Re=new zM(L,xe,ht,Pe),be=new ZM(L,xe,ht,Pe),ht.programs=me.programs,M.capabilities=Pe,M.extensions=xe,M.properties=ze,M.renderLists=de,M.shadowMap=Z,M.state=fe,M.info=ht}_t();let We=new nd(M,L);this.xr=We,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(k,z,!1))},this.getSize=function(y){return y.set(k,z)},this.setSize=function(y,I,O=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,z=I,e.width=Math.floor(y*X),e.height=Math.floor(I*X),O===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(k*X,z*X).floor()},this.setDrawingBufferSize=function(y,I,O){k=y,z=I,X=O,e.width=Math.floor(y*O),e.height=Math.floor(I*O),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(q)},this.setViewport=function(y,I,O,U){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,I,O,U),fe.viewport(S.copy(q).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy(ne)},this.setScissor=function(y,I,O,U){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,I,O,U),fe.scissor(B.copy(ne).multiplyScalar(X).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){fe.setScissorTest(ie=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(y=!0,I=!0,O=!0){let U=0;if(y){let N=!1;if(A!==null){let ue=A.texture.format;N=ue===Vm||ue===Bm||ue===Um}if(N){let ue=A.texture.type,ge=ue===Fi||ue===Ii||ue===gd||ue===cr||ue===Om||ue===km,Se=tt.getClearColor(),Ce=tt.getClearAlpha(),Ge=Se.r,Le=Se.g,Oe=Se.b;ge?(m[0]=Ge,m[1]=Le,m[2]=Oe,m[3]=Ce,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Ge,g[1]=Le,g[2]=Oe,g[3]=Ce,L.clearBufferiv(L.COLOR,0,g))}else U|=L.COLOR_BUFFER_BIT}I&&(U|=L.DEPTH_BUFFER_BIT),O&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),we.dispose(),ze.dispose(),v.dispose(),F.dispose(),Q.dispose(),Be.dispose(),Qe.dispose(),me.dispose(),We.dispose(),We.removeEventListener("sessionstart",$t),We.removeEventListener("sessionend",at),ve&&(ve.dispose(),ve=null),Xt.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let y=ht.autoReset,I=Z.enabled,O=Z.autoUpdate,U=Z.needsUpdate,N=Z.type;_t(),ht.autoReset=y,Z.enabled=I,Z.autoUpdate=O,Z.needsUpdate=U,Z.type=N}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ae(y){let I=y.target;I.removeEventListener("dispose",ae),Te(I)}function Te(y){Me(y),ze.remove(y)}function Me(y){let I=ze.get(y).programs;I!==void 0&&(I.forEach(function(O){me.releaseProgram(O)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,O,U,N,ue){I===null&&(I=Ae);let ge=N.isMesh&&N.matrixWorld.determinant()<0,Se=s_(y,I,O,U,N);fe.setMaterial(U,ge);let Ce=O.index,Ge=1;if(U.wireframe===!0){if(Ce=J.getWireframeAttribute(O),Ce===void 0)return;Ge=2}let Le=O.drawRange,Oe=O.attributes.position,yt=Le.start*Ge,ln=(Le.start+Le.count)*Ge;ue!==null&&(yt=Math.max(yt,ue.start*Ge),ln=Math.min(ln,(ue.start+ue.count)*Ge)),Ce!==null?(yt=Math.max(yt,0),ln=Math.min(ln,Ce.count)):Oe!=null&&(yt=Math.max(yt,0),ln=Math.min(ln,Oe.count));let Pt=ln-yt;if(Pt<0||Pt===1/0)return;Be.setup(N,U,Se,O,Ce);let Qn,ft=Re;if(Ce!==null&&(Qn=K.get(Ce),ft=be,ft.setIndex(Qn)),N.isMesh)U.wireframe===!0?(fe.setLineWidth(U.wireframeLinewidth*Ze()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(N.isLine){let je=U.linewidth;je===void 0&&(je=1),fe.setLineWidth(je*Ze()),N.isLineSegments?ft.setMode(L.LINES):N.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else N.isPoints?ft.setMode(L.POINTS):N.isSprite&&ft.setMode(L.TRIANGLES);if(N.isBatchedMesh)ft.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)ft.renderInstances(yt,Pt,N.count);else if(O.isInstancedBufferGeometry){let je=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Lc=Math.min(O.instanceCount,je);ft.renderInstances(yt,Pt,Lc)}else ft.render(yt,Pt)};function st(y,I,O){y.transparent===!0&&y.side===zn&&y.forceSinglePass===!1?(y.side=on,y.needsUpdate=!0,Io(y,I,O),y.side=Oi,y.needsUpdate=!0,Io(y,I,O),y.side=zn):Io(y,I,O)}this.compile=function(y,I,O=null){O===null&&(O=y),p=we.get(O),p.init(),E.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(M._useLegacyLights);let U=new Set;return y.traverse(function(N){let ue=N.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){let Se=ue[ge];st(Se,O,N),U.add(Se)}else st(ue,O,N),U.add(ue)}),E.pop(),p=null,U},this.compileAsync=function(y,I,O=null){let U=this.compile(y,I,O);return new Promise(N=>{function ue(){if(U.forEach(function(ge){ze.get(ge).currentProgram.isReady()&&U.delete(ge)}),U.size===0){N(y);return}setTimeout(ue,10)}xe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ot=null;function It(y){ot&&ot(y)}function $t(){Xt.stop()}function at(){Xt.start()}let Xt=new Xm;Xt.setAnimationLoop(It),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(y){ot=y,We.setAnimationLoop(y),y===null?Xt.stop():Xt.start()},We.addEventListener("sessionstart",$t),We.addEventListener("sessionend",at),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(I),I=We.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,A),p=we.get(y,E.length),p.init(),E.push(p),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(_e),le=this.localClippingEnabled,Y=He.init(this.clippingPlanes,le),_=de.get(y,d.length),_.init(),d.push(_),qn(y,I,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(j,$),this.info.render.frame++,Y===!0&&He.beginShadows();let O=p.state.shadowsArray;if(Z.render(O,y,I),Y===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,y),p.setupLights(M._useLegacyLights),I.isArrayCamera){let U=I.cameras;for(let N=0,ue=U.length;N<ue;N++){let ge=U[N];Yd(_,y,ge,ge.viewport)}}else Yd(_,y,I);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(M,y,I),Be.resetDefaultState(),W=-1,b=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function qn(y,I,O,U){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){U&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);let ge=Q.update(y),Se=y.material;Se.visible&&_.push(y,ge,Se,O,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){let ge=Q.update(y),Se=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(_e)),Array.isArray(Se)){let Ce=ge.groups;for(let Ge=0,Le=Ce.length;Ge<Le;Ge++){let Oe=Ce[Ge],yt=Se[Oe.materialIndex];yt&&yt.visible&&_.push(y,ge,yt,O,Ue.z,Oe)}}else Se.visible&&_.push(y,ge,Se,O,Ue.z,null)}}let ue=y.children;for(let ge=0,Se=ue.length;ge<Se;ge++)qn(ue[ge],I,O,U)}function Yd(y,I,O,U){let N=y.opaque,ue=y.transmissive,ge=y.transparent;p.setupLightsView(O),Y===!0&&He.setGlobalState(M.clippingPlanes,O),ue.length>0&&r_(N,ue,I,O),U&&fe.viewport(S.copy(U)),N.length>0&&Ro(N,I,O),ue.length>0&&Ro(ue,I,O),ge.length>0&&Ro(ge,I,O),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function r_(y,I,O,U){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ue=Pe.isWebGL2;ve===null&&(ve=new gi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?mo:Fi,minFilter:po,samples:ue?4:0})),M.getDrawingBufferSize(Fe),ue?ve.setSize(Fe.x,Fe.y):ve.setSize(Vu(Fe.x),Vu(Fe.y));let ge=M.getRenderTarget();M.setRenderTarget(ve),M.getClearColor(ee),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();let Se=M.toneMapping;M.toneMapping=Ni,Ro(y,O,U),x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve);let Ce=!1;for(let Ge=0,Le=I.length;Ge<Le;Ge++){let Oe=I[Ge],yt=Oe.object,ln=Oe.geometry,Pt=Oe.material,Qn=Oe.group;if(Pt.side===zn&&yt.layers.test(U.layers)){let ft=Pt.side;Pt.side=on,Pt.needsUpdate=!0,Zd(yt,O,U,ln,Pt,Qn),Pt.side=ft,Pt.needsUpdate=!0,Ce=!0}}Ce===!0&&(x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve)),M.setRenderTarget(ge),M.setClearColor(ee,D),M.toneMapping=Se}function Ro(y,I,O){let U=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ue=y.length;N<ue;N++){let ge=y[N],Se=ge.object,Ce=ge.geometry,Ge=U===null?ge.material:U,Le=ge.group;Se.layers.test(O.layers)&&Zd(Se,I,O,Ce,Ge,Le)}}function Zd(y,I,O,U,N,ue){y.onBeforeRender(M,I,O,U,N,ue),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,I,O,U,y,ue),N.transparent===!0&&N.side===zn&&N.forceSinglePass===!1?(N.side=on,N.needsUpdate=!0,M.renderBufferDirect(O,I,U,N,y,ue),N.side=Oi,N.needsUpdate=!0,M.renderBufferDirect(O,I,U,N,y,ue),N.side=zn):M.renderBufferDirect(O,I,U,N,y,ue),y.onAfterRender(M,I,O,U,N,ue)}function Io(y,I,O){I.isScene!==!0&&(I=Ae);let U=ze.get(y),N=p.state.lights,ue=p.state.shadowsArray,ge=N.state.version,Se=me.getParameters(y,N.state,ue,I,O),Ce=me.getProgramCacheKey(Se),Ge=U.programs;U.environment=y.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(y.isMeshStandardMaterial?F:v).get(y.envMap||U.environment),Ge===void 0&&(y.addEventListener("dispose",ae),Ge=new Map,U.programs=Ge);let Le=Ge.get(Ce);if(Le!==void 0){if(U.currentProgram===Le&&U.lightsStateVersion===ge)return Kd(y,Se),Le}else Se.uniforms=me.getUniforms(y),y.onBuild(O,Se,M),y.onBeforeCompile(Se,M),Le=me.acquireProgram(Se,Ce),Ge.set(Ce,Le),U.uniforms=Se.uniforms;let Oe=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=He.uniform),Kd(y,Se),U.needsLights=a_(y),U.lightsStateVersion=ge,U.needsLights&&(Oe.ambientLightColor.value=N.state.ambient,Oe.lightProbe.value=N.state.probe,Oe.directionalLights.value=N.state.directional,Oe.directionalLightShadows.value=N.state.directionalShadow,Oe.spotLights.value=N.state.spot,Oe.spotLightShadows.value=N.state.spotShadow,Oe.rectAreaLights.value=N.state.rectArea,Oe.ltc_1.value=N.state.rectAreaLTC1,Oe.ltc_2.value=N.state.rectAreaLTC2,Oe.pointLights.value=N.state.point,Oe.pointLightShadows.value=N.state.pointShadow,Oe.hemisphereLights.value=N.state.hemi,Oe.directionalShadowMap.value=N.state.directionalShadowMap,Oe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Oe.spotShadowMap.value=N.state.spotShadowMap,Oe.spotLightMatrix.value=N.state.spotLightMatrix,Oe.spotLightMap.value=N.state.spotLightMap,Oe.pointShadowMap.value=N.state.pointShadowMap,Oe.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Le,U.uniformsList=null,Le}function Jd(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=cs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Kd(y,I){let O=ze.get(y);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function s_(y,I,O,U,N){I.isScene!==!0&&(I=Ae),x.resetTextureUnits();let ue=I.fog,ge=U.isMeshStandardMaterial?I.environment:null,Se=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mi,Ce=(U.isMeshStandardMaterial?F:v).get(U.envMap||ge),Ge=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Oe=!!O.morphAttributes.position,yt=!!O.morphAttributes.normal,ln=!!O.morphAttributes.color,Pt=Ni;U.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=M.toneMapping);let Qn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ft=Qn!==void 0?Qn.length:0,je=ze.get(U),Lc=p.state.lights;if(Y===!0&&(le===!0||y!==b)){let yn=y===b&&U.id===W;He.setState(U,y,yn)}let vt=!1;U.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Lc.state.version||je.outputColorSpace!==Se||N.isBatchedMesh&&je.batching===!1||!N.isBatchedMesh&&je.batching===!0||N.isInstancedMesh&&je.instancing===!1||!N.isInstancedMesh&&je.instancing===!0||N.isSkinnedMesh&&je.skinning===!1||!N.isSkinnedMesh&&je.skinning===!0||N.isInstancedMesh&&je.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&je.instancingColor===!1&&N.instanceColor!==null||je.envMap!==Ce||U.fog===!0&&je.fog!==ue||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==He.numPlanes||je.numIntersection!==He.numIntersection)||je.vertexAlphas!==Ge||je.vertexTangents!==Le||je.morphTargets!==Oe||je.morphNormals!==yt||je.morphColors!==ln||je.toneMapping!==Pt||Pe.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(vt=!0):(vt=!0,je.__version=U.version);let zi=je.currentProgram;vt===!0&&(zi=Io(U,I,N));let Qd=!1,Ss=!1,Nc=!1,Bt=zi.getUniforms(),Hi=je.uniforms;if(fe.useProgram(zi.program)&&(Qd=!0,Ss=!0,Nc=!0),U.id!==W&&(W=U.id,Ss=!0),Qd||b!==y){Bt.setValue(L,"projectionMatrix",y.projectionMatrix),Bt.setValue(L,"viewMatrix",y.matrixWorldInverse);let yn=Bt.map.cameraPosition;yn!==void 0&&yn.setValue(L,Ue.setFromMatrixPosition(y.matrixWorld)),Pe.logarithmicDepthBuffer&&Bt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Bt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Ss=!0,Nc=!0)}if(N.isSkinnedMesh){Bt.setOptional(L,N,"bindMatrix"),Bt.setOptional(L,N,"bindMatrixInverse");let yn=N.skeleton;yn&&(Pe.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Bt.setValue(L,"boneTexture",yn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Bt.setOptional(L,N,"batchingTexture"),Bt.setValue(L,"batchingTexture",N._matricesTexture,x));let Fc=O.morphAttributes;if((Fc.position!==void 0||Fc.normal!==void 0||Fc.color!==void 0&&Pe.isWebGL2===!0)&&qe.update(N,O,zi),(Ss||je.receiveShadow!==N.receiveShadow)&&(je.receiveShadow=N.receiveShadow,Bt.setValue(L,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Hi.envMap.value=Ce,Hi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Ss&&(Bt.setValue(L,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&o_(Hi,Nc),ue&&U.fog===!0&&ce.refreshFogUniforms(Hi,ue),ce.refreshMaterialUniforms(Hi,U,X,z,ve),cs.upload(L,Jd(je),Hi,x)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(cs.upload(L,Jd(je),Hi,x),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Bt.setValue(L,"center",N.center),Bt.setValue(L,"modelViewMatrix",N.modelViewMatrix),Bt.setValue(L,"normalMatrix",N.normalMatrix),Bt.setValue(L,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let yn=U.uniformsGroups;for(let Oc=0,c_=yn.length;Oc<c_;Oc++)if(Pe.isWebGL2){let eh=yn[Oc];Qe.update(eh,zi),Qe.bind(eh,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function o_(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function a_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,O){ze.get(y.texture).__webglTexture=I,ze.get(y.depthTexture).__webglTexture=O;let U=ze.get(y);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let O=ze.get(y);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,O=0){A=y,R=I,T=O;let U=!0,N=null,ue=!1,ge=!1;if(y){let Ce=ze.get(y);Ce.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(L.FRAMEBUFFER,null),U=!1):Ce.__webglFramebuffer===void 0?x.setupRenderTarget(y):Ce.__hasExternalTextures&&x.rebindTextures(y,ze.get(y.texture).__webglTexture,ze.get(y.depthTexture).__webglTexture);let Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);let Le=ze.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?N=Le[I][O]:N=Le[I],ue=!0):Pe.isWebGL2&&y.samples>0&&x.useMultisampledRTT(y)===!1?N=ze.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[O]:N=Le,S.copy(y.viewport),B.copy(y.scissor),H=y.scissorTest}else S.copy(q).multiplyScalar(X).floor(),B.copy(ne).multiplyScalar(X).floor(),H=ie;if(fe.bindFramebuffer(L.FRAMEBUFFER,N)&&Pe.drawBuffers&&U&&fe.drawBuffers(y,N),fe.viewport(S),fe.scissor(B),fe.setScissorTest(H),ue){let Ce=ze.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ce.__webglTexture,O)}else if(ge){let Ce=ze.get(y.texture),Ge=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,O||0,Ge)}W=-1},this.readRenderTargetPixels=function(y,I,O,U,N,ue,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ze.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){fe.bindFramebuffer(L.FRAMEBUFFER,Se);try{let Ce=y.texture,Ge=Ce.format,Le=Ce.type;if(Ge!==Gn&&he.convert(Ge)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Le===mo&&(xe.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==Fi&&he.convert(Le)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Pi&&(Pe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-U&&O>=0&&O<=y.height-N&&L.readPixels(I,O,U,N,he.convert(Ge),he.convert(Le),ue)}finally{let Ce=A!==null?ze.get(A).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(y,I,O=0){let U=Math.pow(2,-O),N=Math.floor(I.image.width*U),ue=Math.floor(I.image.height*U);x.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,y.x,y.y,N,ue),fe.unbindTexture()},this.copyTextureToTexture=function(y,I,O,U=0){let N=I.image.width,ue=I.image.height,ge=he.convert(O.format),Se=he.convert(O.type);x.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,y.x,y.y,N,ue,ge,Se,I.image.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,ge,I.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,U,y.x,y.y,ge,Se,I.image),U===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(y,I,O,U,N=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=y.max.x-y.min.x+1,ge=y.max.y-y.min.y+1,Se=y.max.z-y.min.z+1,Ce=he.convert(U.format),Ge=he.convert(U.type),Le;if(U.isData3DTexture)x.setTexture3D(U,0),Le=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)x.setTexture2DArray(U,0),Le=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Oe=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=L.getParameter(L.UNPACK_SKIP_PIXELS),Pt=L.getParameter(L.UNPACK_SKIP_ROWS),Qn=L.getParameter(L.UNPACK_SKIP_IMAGES),ft=O.isCompressedTexture?O.mipmaps[N]:O.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,y.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,y.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,y.min.z),O.isDataTexture||O.isData3DTexture?L.texSubImage3D(Le,N,I.x,I.y,I.z,ue,ge,Se,Ce,Ge,ft.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Le,N,I.x,I.y,I.z,ue,ge,Se,Ce,ft.data)):L.texSubImage3D(Le,N,I.x,I.y,I.z,ue,ge,Se,Ce,Ge,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,Oe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qn),N===0&&U.generateMipmaps&&L.generateMipmap(Le),fe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,fe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_d?"display-p3":"srgb",e.unpackColorSpace=it.workingColorSpace===vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?ur:Hm}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ur?Ut:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},id=class extends vo{};id.prototype.isWebGL1Renderer=!0;var uc=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dc=class extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var yo=class extends hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cm=new wt,rd=new tc,za=new hs,Ha=new P,hc=class extends Bi{constructor(t=new Wn,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),za.radius+=s,t.ray.intersectsSphere(za)===!1)return;Cm.copy(r).invert(),rd.copy(t.ray).applyMatrix4(Cm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let p=l.getX(g);Ha.fromBufferAttribute(h,p),Dm(Ha,p,c,r,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ha.fromBufferAttribute(h,g),Dm(Ha,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Dm(i,t,e,n,r,s,o){let a=rd.distanceSqToPoint(i);if(a<e){let c=new P;rd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var sd=class i extends Wn{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],m=[],g=0,_=[],p=n/2,d=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(f,3)),this.setAttribute("uv",new In(m,2));function E(){let w=new P,R=new P,T=0,A=(e-t)/n;for(let W=0;W<=s;W++){let b=[],S=W/s,B=S*(e-t)+t;for(let H=0;H<=r;H++){let ee=H/r,D=ee*c+a,k=Math.sin(D),z=Math.cos(D);R.x=B*k,R.y=-S*n+p,R.z=B*z,h.push(R.x,R.y,R.z),w.set(k,A,z).normalize(),f.push(w.x,w.y,w.z),m.push(ee,1-S),b.push(g++)}_.push(b)}for(let W=0;W<r;W++)for(let b=0;b<s;b++){let S=_[b][W],B=_[b+1][W],H=_[b+1][W+1],ee=_[b][W+1];u.push(S,B,ee),u.push(B,H,ee),T+=6}l.addGroup(d,T,0),d+=T}function M(w){let R=g,T=new Je,A=new P,W=0,b=w===!0?t:e,S=w===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,p*S,0),f.push(0,S,0),m.push(.5,.5),g++;let B=g;for(let H=0;H<=r;H++){let D=H/r*c+a,k=Math.cos(D),z=Math.sin(D);A.x=b*z,A.y=p*S,A.z=b*k,h.push(A.x,A.y,A.z),f.push(0,S,0),T.x=k*.5+.5,T.y=z*.5*S+.5,m.push(T.x,T.y),g++}for(let H=0;H<r;H++){let ee=R+H,D=B+H;w===!0?u.push(D,D+1,ee):u.push(D+1,D,ee),W+=3}l.addGroup(d,W,w===!0?1:2),d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fc=class i extends sd{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};function Ga(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function RE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{e:{let o;t:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break e}o=e.length;break t}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},od=class extends ps{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Up,endingEnd:Up}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bp:s=t,a=2*e-n;break;case Vp:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bp:o=t,c=2*n-e;break;case Vp:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,E=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-m)*p+(1.5+m)*_+.5*g,w=m*p-m*_;for(let R=0;R!==a;++R)s[R]=d*o[u+R]+E*o[l+R]+M*o[c+R]+w*o[h+R];return s}},ad=class extends ps{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},cd=class extends ps{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},$n=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ga(e,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ga(t.times,Array),values:Ga(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ad(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new od(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ja:e=this.InterpolantFactoryMethodDiscrete;break;case $a:e=this.InterpolantFactoryMethodLinear;break;case su:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&RE(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===su,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(r)c=!0;else{let h=a*n,f=h-n,m=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[f+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[h+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=$a;var fr=class extends $n{};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=ja;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ld=class extends $n{};ld.prototype.ValueTypeName="color";var ud=class extends $n{};ud.prototype.ValueTypeName="number";var dd=class extends ps{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ui.slerpFlat(s,0,o,l-a,o,l,c);return s}},bo=class extends $n{InterpolantFactoryMethodLinear(t){return new dd(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.DefaultInterpolation=$a;bo.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends $n{};pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=ja;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends $n{};hd.prototype.ValueTypeName="vector";var pc=class extends Bi{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ru=new wt,Rm=new P,Im=new P,fd=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rm),Im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Im),e.updateMatrixWorld(),Ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ru)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Pm=new wt,lo=new P,Iu=new P,pd=class extends fd{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lo.setFromMatrixPosition(t.matrixWorld),n.position.copy(lo),Iu.copy(n.position),Iu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Iu),n.updateMatrixWorld(),r.makeTranslation(-lo.x,-lo.y,-lo.z),Pm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pm)}},mc=class extends pc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new pd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var gc=class extends pc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var yd="\\[\\]\\.:\\/",IE=new RegExp("["+yd+"]","g"),bd="[^"+yd+"]",PE="[^"+yd.replace("\\.","")+"]",LE=/((?:WC+[\/:])*)/.source.replace("WC",bd),NE=/(WCOD+)?/.source.replace("WCOD",PE),FE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),OE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),kE=new RegExp("^"+LE+NE+FE+OE+"$"),UE=["material","materials","bones","map"],md=class{constructor(t,e,n){let r=n||xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xt=(()=>{class i{constructor(e,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,r){return e&&e.isAnimationObjectGroup?new i.Composite(e,n,r):new i(e,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IE,"")}static parseTrackName(e){let n=kE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);UE.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(n);if(r!==void 0)return r}if(e.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)e[n++]=r[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(e||(e=i.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=md,i})();xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tR=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var _s={autoRotate:!0,fogDensity:.05,animationSpeed:.3,particleCount:3e3,coneColor1:"#4488ff",coneColor2:"#88ccff"};var bc=(()=>{class i{scene;camera;renderer;cone;particles;config=te({},_s);time=0;animationFrameId=null;mouseX=0;mouseY=0;constructor(){}init(e){this.scene=new dc,this.scene.fog=new uc(0,this.config.fogDensity),this.camera=new Gt(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,5,15),this.camera.lookAt(0,0,0),this.renderer=new vo({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement),this.createLightCone(),this.createParticles();let n=new gc(2236962);this.scene.add(n);let r=new mc(16777215,1,100);r.position.set(0,10,0),this.scene.add(r),this.animate()}createLightCone(){let e=new fc(8,16,32,1,!0),n=new jn({uniforms:{time:{value:0},color1:{value:new Xe(this.config.coneColor1)},color2:{value:new Xe(this.config.coneColor2)}},vertexShader:`
        varying vec3 vPosition;
        varying vec3 vNormal;

        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;

        varying vec3 vPosition;
        varying vec3 vNormal;

        void main() {
          float dist = length(vPosition.xz);
          float gradient = (vPosition.y + 8.0) / 16.0;
          vec3 color = mix(color1, color2, gradient);
          float pulse = sin(time * 2.0 + dist) * 0.5 + 0.5;
          float alpha = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          alpha = alpha * 0.3 + 0.1;
          alpha *= pulse * 0.5 + 0.5;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:zn,blending:fo,depthWrite:!1});this.cone=new Rn(e,n),this.cone.position.y=2,this.cone.rotation.x=Math.PI,this.scene.add(this.cone)}createParticles(){let e=new Wn,n=new Float32Array(this.config.particleCount*3),r=[];for(let o=0;o<this.config.particleCount;o++){let a=o*3,c=Math.random()*Math.PI*2,l=Math.random()*12,u=Math.random()*20-5;n[a]=Math.cos(c)*l,n[a+1]=u,n[a+2]=Math.sin(c)*l,r.push({x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.02})}e.setAttribute("position",new an(n,3));let s=new yo({color:16777215,size:.1,transparent:!0,opacity:.6,blending:fo,depthWrite:!1});this.particles=new hc(e,s),this.particles.userData.velocities=r,this.scene.add(this.particles)}animate=()=>{if(this.animationFrameId=requestAnimationFrame(this.animate),this.time+=.01*this.config.animationSpeed,this.cone&&this.cone.material.uniforms&&(this.cone.material.uniforms.time.value=this.time),this.cone&&(this.cone.rotation.y+=.005*this.config.animationSpeed,this.cone.scale.x=1+Math.sin(this.time*.5)*.1,this.cone.scale.z=1+Math.cos(this.time*.5)*.1),this.particles){let e=this.particles.geometry.attributes.position.array,n=this.particles.userData.velocities;for(let r=0;r<e.length;r+=3){let s=r/3;if(e[r]+=n[s].x,e[r+1]+=n[s].y,e[r+2]+=n[s].z,Math.abs(e[r])>15||Math.abs(e[r+1])>15||Math.abs(e[r+2])>15){let o=Math.random()*Math.PI*2,a=Math.random()*12;e[r]=Math.cos(o)*a,e[r+1]=Math.random()*20-5,e[r+2]=Math.sin(o)*a}}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.rotation.y+=.001*this.config.animationSpeed}this.config.autoRotate&&(this.camera.position.x=Math.sin(this.time*.2)*15,this.camera.position.z=Math.cos(this.time*.2)*15,this.camera.position.y=5+Math.sin(this.time*.1)*3,this.camera.lookAt(0,0,0)),this.renderer.render(this.scene,this.camera)};updateConfig(e){if(this.config=te(te({},this.config),e),e.fogDensity!==void 0&&this.scene.fog&&(this.scene.fog.density=e.fogDensity),(e.coneColor1||e.coneColor2)&&this.cone){let n=this.cone.material;e.coneColor1&&(n.uniforms.color1.value=new Xe(e.coneColor1)),e.coneColor2&&(n.uniforms.color2.value=new Xe(e.coneColor2))}}onMouseMove(e,n){this.mouseX=e.clientX/n.clientWidth*2-1,this.mouseY=-(e.clientY/n.clientHeight)*2+1,this.config.autoRotate||(this.camera.position.x=this.mouseX*5,this.camera.position.y=this.mouseY*5+5,this.camera.lookAt(0,0,0))}onResize(e){this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}destroy(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.renderer&&this.renderer.dispose(),this.cone&&(this.cone.geometry.dispose(),this.cone.material.dispose()),this.particles&&(this.particles.geometry.dispose(),this.particles.material.dispose())}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var VE=["canvasContainer"],eg=(()=>{class i{lightSceneService;canvasContainer;constructor(e){this.lightSceneService=e}ngOnInit(){this.lightSceneService.init(this.canvasContainer.nativeElement)}onResize(){this.lightSceneService.onResize(this.canvasContainer.nativeElement)}onMouseMove(e){this.lightSceneService.onMouseMove(e,this.canvasContainer.nativeElement)}ngOnDestroy(){this.lightSceneService.destroy()}static \u0275fac=function(n){return new(n||i)(Lt(bc))};static \u0275cmp=ut({type:i,selectors:[["app-light-canvas"]],viewQuery:function(n,r){if(n&1&&Ln(VE,7),n&2){let s;fn(s=pn())&&(r.canvasContainer=s.first)}},hostBindings:function(n,r){n&1&&en("resize",function(){return r.onResize()},Eh)("mousemove",function(o){return r.onMouseMove(o)})},decls:2,vars:0,consts:[["canvasContainer",""],[1,"canvas-container"]],template:function(n,r){n&1&&Fh(0,"div",1,0)},styles:[".canvas-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}"]})}return i})();var cg=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||i)(Lt(qi),Lt(Ft))};static \u0275dir=At({type:i})}return i})(),zE=(()=>{class i extends cg{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Cs(i)))(r||i)}})();static \u0275dir=At({type:i,features:[Sr]})}return i})(),bs=new Ee("");var HE={provide:bs,useExisting:$i(()=>lg),multi:!0};function GE(){let i=wn()?wn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var WE=new Ee(""),lg=(()=>{class i extends cg{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!GE())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||i)(Lt(qi),Lt(Ft),Lt(WE,8))};static \u0275dir=At({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&en("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[Zn([HE]),Sr]})}return i})();var Ad=new Ee(""),jE=new Ee("");function ug(i){return i!=null}function dg(i){return Vo(i)?Kt(i):i}function hg(i){let t={};return i.forEach(e=>{t=e!=null?te(te({},t),e):t}),Object.keys(t).length===0?null:t}function fg(i,t){return t.map(e=>e(i))}function $E(i){return!i.validate}function pg(i){return i.map(t=>$E(t)?t:e=>t.validate(e))}function XE(i){if(!i)return null;let t=i.filter(ug);return t.length==0?null:function(e){return hg(fg(e,t))}}function mg(i){return i!=null?XE(pg(i)):null}function qE(i){if(!i)return null;let t=i.filter(ug);return t.length==0?null:function(e){let n=fg(e,t).map(dg);return Fo(n).pipe(Ie(hg))}}function gg(i){return i!=null?qE(pg(i)):null}function tg(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function YE(i){return i._rawValidators}function ZE(i){return i._rawAsyncValidators}function xd(i){return i?Array.isArray(i)?i:[i]:[]}function Mc(i,t){return Array.isArray(i)?i.includes(t):i===t}function ng(i,t){let e=xd(t);return xd(i).forEach(r=>{Mc(e,r)||e.push(r)}),e}function ig(i,t){return xd(t).filter(e=>!Mc(i,e))}var Sc=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=mg(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=gg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},Md=class extends Sc{name;get formDirective(){return null}get path(){return null}},Ao=class extends Sc{_parent=null;name=null;valueAccessor=null},Sd=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},JE={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},MR=pt(te({},JE),{"[class.ng-submitted]":"isSubmitted"}),_g=(()=>{class i extends Sd{constructor(e){super(e)}static \u0275fac=function(n){return new(n||i)(Lt(Ao,2))};static \u0275dir=At({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&qt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Sr]})}return i})();var Mo="VALID",xc="INVALID",vs="PENDING",So="DISABLED",mr=class{},Ec=class extends mr{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Eo=class extends mr{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},wo=class extends mr{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},ys=class extends mr{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var Ed=class extends mr{source;constructor(t){super(),this.source=t}};function KE(i){return(wc(i)?i.validators:i)||null}function QE(i){return Array.isArray(i)?mg(i):i||null}function ew(i,t){return(wc(t)?t.asyncValidators:i)||null}function tw(i){return Array.isArray(i)?gg(i):i||null}function wc(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var wd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return tn(this.statusReactive)}set status(t){tn(()=>this.statusReactive.set(t))}_status=Wo(()=>this.statusReactive());statusReactive=un(void 0);get valid(){return this.status===Mo}get invalid(){return this.status===xc}get pending(){return this.status==vs}get disabled(){return this.status===So}get enabled(){return this.status!==So}errors;get pristine(){return tn(this.pristineReactive)}set pristine(t){tn(()=>this.pristineReactive.set(t))}_pristine=Wo(()=>this.pristineReactive());pristineReactive=un(!0);get dirty(){return!this.pristine}get touched(){return tn(this.touchedReactive)}set touched(t){tn(()=>this.touchedReactive.set(t))}_touched=Wo(()=>this.touchedReactive());touchedReactive=un(!1);get untouched(){return!this.touched}_events=new Vt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ng(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ng(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ig(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ig(t,this._rawAsyncValidators))}hasValidator(t){return Mc(this._rawValidators,t)}hasAsyncValidator(t){return Mc(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(pt(te({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new wo(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new wo(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(pt(te({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Eo(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new Eo(!0,n))}markAsPending(t={}){this.status=vs;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ys(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(pt(te({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=So,this.errors=null,this._forEachChild(r=>{r.disable(pt(te({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ec(this.value,n)),this._events.next(new ys(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(pt(te({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Mo,this._forEachChild(n=>{n.enable(pt(te({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(pt(te({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Mo||this.status===vs)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ec(this.value,e)),this._events.next(new ys(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(pt(te({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?So:Mo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=vs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=dg(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new ys(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new Tt,this.statusChanges=new Tt}_calculateStatus(){return this._allControlsDisabled()?So:this.errors?xc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vs)?vs:this._anyControlsHaveStatus(xc)?xc:Mo}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new Eo(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new wo(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){wc(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=QE(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=tw(this._rawAsyncValidators)}};var vg=new Ee("",{providedIn:"root",factory:()=>Td}),Td="always";function nw(i,t){return[...t.path,i]}function iw(i,t,e=Td){sw(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),ow(i,t),cw(i,t),aw(i,t),rw(i,t)}function rg(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function rw(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function sw(i,t){let e=YE(i);t.validator!==null?i.setValidators(tg(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=ZE(i);t.asyncValidator!==null?i.setAsyncValidators(tg(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();rg(t._rawValidators,r),rg(t._rawAsyncValidators,r)}function ow(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&yg(i,t)})}function aw(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&yg(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function yg(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function cw(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function lw(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function uw(i){return Object.getPrototypeOf(i.constructor)===zE}function dw(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(s=>{s.constructor===lg?e=s:uw(s)?n=s:r=s}),r||n||e||null}function sg(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function og(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var hw=class extends wd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(KE(e),ew(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),wc(e)&&(e.nonNullable||e.initialValueIsDefault)&&(og(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ed(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){sg(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){sg(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){og(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var fw={provide:Ao,useExisting:$i(()=>Cd)},ag=Promise.resolve(),Cd=(()=>{class i extends Ao{_changeDetectorRef;callSetDisabledState;control=new hw;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Tt;constructor(e,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=dw(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),lw(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){iw(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ag.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&St(n);ag.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?nw(e,this._parent):[e]}static \u0275fac=function(n){return new(n||i)(Lt(Md,9),Lt(Ad,10),Lt(jE,10),Lt(bs,10),Lt(Nn,8),Lt(vg,8))};static \u0275dir=At({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Zn([fw]),Sr,Mi]})}return i})();var pw=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({})}return i})();var bg=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:vg,useValue:e.callSetDisabledState??Td}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[pw]})}return i})();function Dd(i){return i.buttons===0||i.detail===0}function Rd(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}function Id(i){return i.composedPath?i.composedPath()[0]:i.target}var Pd;try{Pd=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Pd=!1}var Xn=(()=>{class i{_platformId=G(Xi);isBrowser=this._platformId?Zh(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Pd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var To;function xg(){if(To==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>To=!0}))}finally{To=To||!1}return To}function Ac(i){return xg()?i:!!i.capture}function Tc(i){return i instanceof Ft?i.nativeElement:i}var Cc=new WeakMap,gr=(()=>{class i{_appRef;_injector=G(Sn);_environmentInjector=G(bi);load(e){let n=this._appRef=this._appRef||this._injector.get(Er),r=Cc.get(n);r||(r={loaders:new Set,refs:[]},Cc.set(n,r),n.onDestroy(()=>{Cc.get(n)?.refs.forEach(s=>s.destroy()),Cc.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(jh(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ld(i){return Array.isArray(i)?i:[i]}var Mg=new Set,_r,Dc=(()=>{class i{_platform=G(Xn);_nonce=G(Rs,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):_w}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&gw(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function gw(i,t){if(!Mg.has(i))try{_r||(_r=document.createElement("style"),t&&_r.setAttribute("nonce",t),_r.setAttribute("type","text/css"),document.head.appendChild(_r)),_r.sheet&&(_r.sheet.insertRule(`@media ${i} {body{ }}`,0),Mg.add(i))}catch(e){console.error(e)}}function _w(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Nd=(()=>{class i{_mediaMatcher=G(Dc);_zone=G(Mt);_queries=new Map;_destroySubject=new Vt;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Sg(Ld(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Sg(Ld(e)).map(o=>this._registerQuery(o).observable),s=As(r);return s=Lo(s.pipe(Yn(1)),s.pipe(ch(1),rh(0))),s.pipe(Ie(o=>{let a={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),s={observable:new ws(o=>{let a=c=>this._zone.run(()=>o.next(c));return n.addListener(a),()=>{n.removeListener(a)}}).pipe(Oo(n),Ie(({matches:o})=>({query:e,matches:o})),Ts(this._destroySubject)),mql:n};return this._queries.set(e,s),s}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Sg(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var Vi=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Vi||{}),Eg="cdk-high-contrast-black-on-white",wg="cdk-high-contrast-white-on-black",Fd="cdk-high-contrast-active",Od=(()=>{class i{_platform=G(Xn);_hasCheckedHighContrastMode;_document=G(nt);_breakpointSubscription;constructor(){this._breakpointSubscription=G(Nd).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Vi.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Vi.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Vi.BLACK_ON_WHITE}return Vi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Fd,Eg,wg),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===Vi.BLACK_ON_WHITE?e.add(Fd,Eg):n===Vi.WHITE_ON_BLACK&&e.add(Fd,wg)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var kd={},Ud=(()=>{class i{_appId=G(Ds);getId(e){return this._appId!=="ng"&&(e+=this._appId),kd.hasOwnProperty(e)||(kd[e]=0),`${e}${kd[e]++}`}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vw=new Ee("cdk-dir-doc",{providedIn:"root",factory:yw});function yw(){return G(nt)}var bw=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ag(i){let t=i?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?bw.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var Bd=(()=>{class i{get value(){return this.valueSignal()}valueSignal=un("ltr");change=new Tt;constructor(){let e=G(vw,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ag(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Vd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({})}return i})();var cn=(()=>{class i{constructor(){G(Od)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[Vd,Vd]})}return i})();var xw=["*"];var Mw=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Sw=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Ew=new Ee("MAT_CARD_CONFIG"),Tg=(()=>{class i{appearance;constructor(){let e=G(Ew,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&qt("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:xw,decls:1,vars:0,template:function(n,r){n&1&&(Pn(),hn(0))},styles:[`.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}
`],encapsulation:2,changeDetection:0})}return i})(),Cg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=At({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var Dg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=At({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),Rg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=At({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})();var Ig=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Sw,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(Pn(Mw),hn(0),Lh(1,"div",0),hn(2,1),Nh(),hn(3,2))},encapsulation:2,changeDetection:0})}return i})();var Pg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[cn,cn]})}return i})();var Aw=new Ee("MATERIAL_ANIMATIONS");var Lg=null;function Tw(){return G(Aw,{optional:!0})?.animationsDisabled||G(Uo,{optional:!0})==="NoopAnimations"?"di-disabled":(Lg??=G(Dc).matchMedia("(prefers-reduced-motion)").matches,Lg?"reduced-motion":"enabled")}function xs(){return Tw()!=="enabled"}var Jt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Jt||{}),zd=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Jt.HIDDEN;constructor(t,e,n,r=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ng=Ac({passive:!0,capture:!0}),Hd=class{_events=new Map;addHandler(t,e,n,r){let s=this._events.get(e);if(s){let o=s.get(n);o?o.add(r):s.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ng)})}removeHandler(t,e,n){let r=this._events.get(t);if(!r)return;let s=r.get(e);s&&(s.delete(n),s.size===0&&r.delete(e),r.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Ng)))}_delegateEventHandler=t=>{let e=Id(t);e&&this._events.get(t.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(s=>s.handleEvent(t))})}},Fg={enterDuration:225,exitDuration:150},Cw=800,Og=Ac({passive:!0,capture:!0}),kg=["mousedown","touchstart"],Ug=["mouseup","mouseleave","touchend","touchcancel"],Dw=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}
`],encapsulation:2,changeDetection:0})}return i})(),Gd=class i{_target;_ngZone;_platform;_containerElement;_triggerElement;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect;static _eventManager=new Hd;constructor(t,e,n,r,s){this._target=t,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Tc(n)),s&&s.get(gr).load(Dw)}fadeInRipple(t,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=te(te({},Fg),n.animation);n.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);let o=n.radius||Rw(t,e,r),a=t-r.left,c=e-r.top,l=s.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-o}px`,u.style.top=`${c-o}px`,u.style.height=`${o*2}px`,u.style.width=`${o*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),f=h.transitionProperty,m=h.transitionDuration,g=f==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,_=new zd(this,u,n,g);u.style.transform="scale3d(1, 1, 1)",_.state=Jt.FADING_IN,n.persistent||(this._mostRecentTransientRipple=_);let p=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let d=()=>{p&&(p.fallbackTimer=null),clearTimeout(M),this._finishRippleTransition(_)},E=()=>this._destroyRipple(_),M=setTimeout(E,l+100);u.addEventListener("transitionend",d),u.addEventListener("transitioncancel",E),p={onTransitionEnd:d,onTransitionCancel:E,fallbackTimer:M}}),this._activeRipples.set(_,p),(g||!l)&&this._finishRippleTransition(_),_}fadeOutRipple(t){if(t.state===Jt.FADING_OUT||t.state===Jt.HIDDEN)return;let e=t.element,n=te(te({},Fg),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=Jt.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=Tc(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,kg.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ug.forEach(e=>{this._triggerElement.addEventListener(e,this,Og)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Jt.FADING_IN?this._startFadeOutTransition(t):t.state===Jt.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=Jt.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Jt.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Dd(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Cw;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Rd(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===Jt.VISIBLE||t.config.terminateOnPointerUp&&t.state===Jt.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(kg.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Ug.forEach(e=>t.removeEventListener(e,this,Og)),this._pointerUpEventsRegistered=!1))}};function Rw(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+r*r)}var Wd=new Ee("mat-ripple-global-options"),Co=(()=>{class i{_elementRef=G(Ft);_animationsDisabled=xs();color;unbounded;centered;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=G(Mt),n=G(Xn),r=G(Wd,{optional:!0}),s=G(Sn);this._globalOptions=r||{},this._rippleRenderer=new Gd(this,e,this._elementRef,n,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:te(te(te({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,te(te({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,te(te({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=At({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&qt("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Rc=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}
`],encapsulation:2,changeDetection:0})}return i})();var Bg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[cn,cn]})}return i})();var Iw=["knob"],Pw=["valueIndicatorContainer"];function Lw(i,t){if(i&1&&(ct(0,"div",2,1)(2,"div",5)(3,"span",6),mn(4),rt()()()),i&2){let e=wr();Ot(4),Vh(e.valueIndicatorText)}}var Nw=["trackActive"],Fw=["*"];function Ow(i,t){if(i&1&&Ct(0,"div"),i&2){let e=t.$implicit,n=t.$index,r=wr(3);Yi(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Bh("transform",r._calcTickMarkTransform(n))}}function kw(i,t){if(i&1&&Ih(0,Ow,1,4,"div",8,Rh),i&2){let e=wr(2);Ph(e._tickMarks)}}function Uw(i,t){if(i&1&&(ct(0,"div",6,1),Ps(2,kw,2,0),rt()),i&2){let e=wr();Ot(2),Ls(e._cachedWidth?2:-1)}}function Bw(i,t){if(i&1&&Ct(0,"mat-slider-visual-thumb",7),i&2){let e=wr();En("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var De=(function(i){return i[i.START=1]="START",i[i.END=2]="END",i})(De||{}),Ms=(function(i){return i[i.ACTIVE=0]="ACTIVE",i[i.INACTIVE=1]="INACTIVE",i})(Ms||{}),jd=new Ee("_MatSlider"),Vg=new Ee("_MatSliderThumb"),Vw=new Ee("_MatSliderRangeThumb"),zg=new Ee("_MatSliderVisualThumb");var zw=(()=>{class i{_cdr=G(Nn);_ngZone=G(Mt);_slider=G(jd);_renderer=G(qi);_listenerCleanups;discrete;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=G(Ft).nativeElement;_platform=G(Xn);constructor(){}ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let n=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(n,"pointermove",this._onPointerMove),r.listen(n,"pointerdown",this._onDragStart),r.listen(n,"pointerup",this._onDragEnd),r.listen(n,"pointerleave",this._onMouseLeave),r.listen(n,"focus",this._onFocus),r.listen(n,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let n=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,n);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Jt.FADING_IN||e?.state===Jt.VISIBLE}_showRipple(e,n){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===De.START?De.END:De.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!n)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let n=this._getSibling();n._isShowingAnyRipple()||(this._hideValueIndicator(),n._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===De.START?De.END:De.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(n,r){if(n&1&&(Ln(Co,5),Ln(Iw,5),Ln(Pw,5)),n&2){let s;fn(s=pn())&&(r._ripple=s.first),fn(s=pn())&&(r._knob=s.first),fn(s=pn())&&(r._valueIndicatorContainer=s.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[Zn([{provide:zg,useExisting:i}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(n,r){n&1&&(Ps(0,Lw,5,1,"div",2),Ct(1,"div",3,0)(3,"div",4)),n&2&&(Ls(r.discrete?0:-1),Ot(3),En("matRippleDisabled",!0))},dependencies:[Co],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}
`],encapsulation:2,changeDetection:0})}return i})(),Hg=(()=>{class i{_ngZone=G(Mt);_cdr=G(Nn);_elementRef=G(Ft);_dir=G(Bd,{optional:!0});_globalRippleOptions=G(Wd,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let n=this._getInput(De.END),r=this._getInput(De.START);n&&(n.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let n=e==null||isNaN(e)?this._min:e;this._min!==n&&this._updateMin(n)}_min=0;color;disableRipple=!1;_updateMin(e){let n=this._min;this._min=e,this._isRange?this._updateMinRange({old:n,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let n=this._getInput(De.END),r=this._getInput(De.START),s=n.value,o=r.value;r.min=e.new,n.min=Math.max(e.new,r.value),r.max=Math.min(n.max,n.value),r._updateWidthInactive(),n._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(n,r):this._onTranslateXChangeBySideEffect(r,n),s!==n.value&&this._onValueChange(n),o!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let n=this._getInput(De.END);if(n){let r=n.value;n.min=e,n._updateThumbUIByValue(),this._updateTrackUI(n),r!==n.value&&this._onValueChange(n)}}get max(){return this._max}set max(e){let n=e==null||isNaN(e)?this._max:e;this._max!==n&&this._updateMax(n)}_max=100;_updateMax(e){let n=this._max;this._max=e,this._isRange?this._updateMaxRange({old:n,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let n=this._getInput(De.END),r=this._getInput(De.START),s=n.value,o=r.value;n.max=e.new,r.max=Math.min(e.new,n.value),n.min=r.value,n._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,n):this._onTranslateXChangeBySideEffect(n,r),s!==n.value&&this._onValueChange(n),o!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let n=this._getInput(De.END);if(n){let r=n.value;n.max=e,n._updateThumbUIByValue(),this._updateTrackUI(n),r!==n.value&&this._onValueChange(n)}}get step(){return this._step}set step(e){let n=isNaN(e)?this._step:e;this._step!==n&&this._updateStep(n)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(De.END),n=this._getInput(De.START),r=e.value,s=n.value,o=n.value;e.min=this._min,n.max=this._max,e.step=this._step,n.step=this._step,this._platform.SAFARI&&(e.value=e.value,n.value=n.value),e.min=Math.max(this._min,n.value),n.max=Math.min(this._max,e.value),n._updateWidthInactive(),e._updateWidthInactive(),e.value<o?this._onTranslateXChangeBySideEffect(n,e):this._onTranslateXChangeBySideEffect(e,n),r!==e.value&&this._onValueChange(e),s!==n.value&&this._onValueChange(n)}_updateStepNonRange(){let e=this._getInput(De.END);if(e){let n=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),n!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=xs();_dirChangeSubscription;_resizeObserver;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=!1;_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=G(Xn);constructor(){G(gr).load(Rc),this._dir&&(this._dirChangeSubscription=this._dir.change.subscribe(()=>this._onDirChange()),this._isRtl=this._dir.value==="rtl")}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(De.END),n=this._getInput(De.START);this._isRange=!!e&&!!n,this._cdr.detectChanges();let r=this._getThumb(De.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,n):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,n){e.initProps(),e.initUI(),n.initProps(),n.initUI(),e._updateMinMax(),n._updateMinMax(),e._updateStaticStyles(),n._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),n._updateThumbUIByValue()}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChange(){this._isRtl=this._dir?.value==="rtl",this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI()}_onDirChangeRange(){let e=this._getInput(De.END),n=this._getInput(De.START);e._setIsLeftThumb(),n._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),n.translateX=n._calcTranslateXByValue(),e._updateStaticStyles(),n._updateStaticStyles(),e._updateWidthInactive(),n._updateWidthInactive(),e._updateThumbUIByValue(),n._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(De.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(De.START)._isActive||this._getThumb(De.END)._isActive}_getValue(e=De.END){let n=this._getInput(e);return n?n.value:this.min}_skipUpdate(){return!!(this._getInput(De.START)?._skipUIUpdate||this._getInput(De.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let n=this._trackActive.nativeElement.style;n.left=e.left,n.right=e.right,n.transformOrigin=e.transformOrigin,n.transform=e.transform}_calcTickMarkTransform(e){let n=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl?this._cachedWidth-6-n:n}px`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,n){this._hasViewInitialized&&(e._updateThumbUIByValue(),n._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(De.END),n=this._getInput(De.START);e._updateThumbUIByValue(),n._updateThumbUIByValue(),e._updateStaticStyles(),n._updateStaticStyles(),e._updateMinMax(),n._updateMinMax(),e._updateWidthInactive(),n._updateWidthInactive()}else{let e=this._getInput(De.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(De.START),n=this._getInput(De.END);return!e||!n?!1:n.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let n=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(n.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let n=this._getThumb(e.thumbPosition===De.END?De.END:De.START);n._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let n=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(n):e._hostElement.setAttribute("aria-valuetext",n),this.discrete){e.thumbPosition===De.START?this.startValueIndicatorText=n:this.endValueIndicatorText=n;let r=this._getThumb(e.thumbPosition);n.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(De.END),n=this._getInput(De.START);e&&this._updateValueIndicatorUI(e),n&&this._updateValueIndicatorUI(n)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let n=e.getSibling();if(!n||!this._cachedWidth)return;let r=Math.abs(n.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-n.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${n.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let n=this._getValue(),r=Math.max(Math.round((n-this.min)/e),0)+1,s=Math.max(Math.round((this.max-n)/e),0)-1;this._isRtl?r++:s++,this._tickMarks=Array(r).fill(Ms.ACTIVE).concat(Array(s).fill(Ms.INACTIVE))}_updateTickMarkUIRange(e){let n=this._getValue(),r=this._getValue(De.START),s=Math.max(Math.round((r-this.min)/e),0),o=Math.max(Math.round((n-r)/e)+1,0),a=Math.max(Math.round((this.max-n)/e),0);this._tickMarks=Array(s).fill(Ms.INACTIVE).concat(Array(o).fill(Ms.ACTIVE),Array(a).fill(Ms.INACTIVE))}_getInput(e){if(e===De.END&&this._input)return this._input;if(this._inputs?.length)return e===De.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===De.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,n){let r=n.width/2,s=n.x+r,o=n.y+r,a=e.clientX-s,c=e.clientY-o;return Math.pow(a,2)+Math.pow(c,2)<Math.pow(r,2)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["mat-slider"]],contentQueries:function(n,r,s){if(n&1&&(Xc(s,Vg,5),Xc(s,Vw,4)),n&2){let o;fn(o=pn())&&(r._input=o.first),fn(o=pn())&&(r._inputs=o)}},viewQuery:function(n,r){if(n&1&&(Ln(Nw,5),Ln(zg,5)),n&2){let s;fn(s=pn())&&(r._trackActive=s.first),fn(s=pn())&&(r._thumbs=s)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(n,r){n&2&&(Yi("mat-"+(r.color||"primary")),qt("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",St],discrete:[2,"discrete","discrete",St],showTickMarks:[2,"showTickMarks","showTickMarks",St],min:[2,"min","min",Fn],color:"color",disableRipple:[2,"disableRipple","disableRipple",St],max:[2,"max","max",Fn],step:[2,"step","step",Fn],displayWith:"displayWith"},exportAs:["matSlider"],features:[Zn([{provide:jd,useExisting:i}])],ngContentSelectors:Fw,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(n,r){n&1&&(Pn(),hn(0),ct(1,"div",2),Ct(2,"div",3),ct(3,"div",4),Ct(4,"div",5,0),rt(),Ps(6,Uw,3,1,"div",6),rt(),Ps(7,Bw,1,3,"mat-slider-visual-thumb",7),Ct(8,"mat-slider-visual-thumb",7)),n&2&&(Ot(6),Ls(r.showTickMarks?6:-1),Ot(),Ls(r._isRange?7:-1),Ot(),En("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[zw],styles:[`.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}
`],encapsulation:2,changeDetection:0})}return i})();var Hw={provide:bs,useExisting:$i(()=>$d),multi:!0};var $d=(()=>{class i{_ngZone=G(Mt);_elementRef=G(Ft);_cdr=G(Nn);_slider=G(jd);_platform=G(Xn);_listenerCleanups;get value(){return Fn(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let n=e+"";if(!this._hasSetInitialValue){this._initialValue=n;return}this._isActive||this._setValue(n)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Tt;dragStart=new Tt;dragEnd=new Tt;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=De.END;get min(){return Fn(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return Fn(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return Fn(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return St(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=un("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new Vt;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=G(qi);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let n=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=n,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let n=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,s=this._slider.step===0?1:this._slider.step,o=Math.floor((this._slider.max-this._slider.min)/s),a=this._slider._isRtl?1-n/r:n/r,l=Math.round(a*o)/o*(this._slider.max-this._slider.min)+this._slider.min,u=Math.round(l/s)*s,h=this.value;if(u===h){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=u,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let n=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),n)}_calcTranslateXByValue(){return this._slider._isRtl?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,n){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(n)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(n){return new(n||i)};static \u0275dir=At({type:i,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(n,r){n&1&&en("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),n&2&&ni("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",Fn]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[Zn([Hw,{provide:Vg,useExisting:i}])]})}return i})();var Gg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[cn,Bg]})}return i})();var Ww=["mat-internal-form-field",""],jw=["*"],Wg=(()=>{class i{labelPosition;static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,r){n&2&&qt("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ww,ngContentSelectors:jw,decls:1,vars:0,template:function(n,r){n&1&&(Pn(),hn(0))},styles:[`.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}
`],encapsulation:2,changeDetection:0})}return i})();var $w=["input"],Xw=["label"],qw=["*"],Yw=new Ee("mat-checkbox-default-options",{providedIn:"root",factory:$g});function $g(){return{color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1}}var Wt=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(Wt||{}),Xd=class{source;checked},jg=$g(),qd=(()=>{class i{_elementRef=G(Ft);_changeDetectorRef=G(Nn);_ngZone=G(Mt);_animationsDisabled=xs();_options=G(Yw,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new Xd;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required;labelPosition="after";name=null;change=new Tt;indeterminateChange=new Tt;value;disableRipple;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Wt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){G(gr).load(Rc);let e=G(new Ns("tabindex"),{optional:!0});this._options=this._options||jg,this.color=this._options.color||jg.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=G(Ud).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(Wt.Indeterminate):this._transitionCheckState(this.checked?Wt.Checked:Wt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=un(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,r=this._getAnimationTargetElement();if(!(n===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let s=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(s)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Wt.Checked:Wt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case Wt.Init:if(n===Wt.Checked)return this._animationClasses.uncheckedToChecked;if(n==Wt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Wt.Unchecked:return n===Wt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Wt.Checked:return n===Wt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Wt.Indeterminate:return n===Wt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["mat-checkbox"]],viewQuery:function(n,r){if(n&1&&(Ln($w,5),Ln(Xw,5)),n&2){let s;fn(s=pn())&&(r._inputElement=s.first),fn(s=pn())&&(r._labelElement=s.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,r){n&2&&(kh("id",r.id),ni("tabindex",null)("aria-label",null)("aria-labelledby",null),Yi(r.color?"mat-"+r.color:"mat-accent"),qt("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",St],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",St],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",St],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Fn(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",St],checked:[2,"checked","checked",St],disabled:[2,"disabled","disabled",St],indeterminate:[2,"indeterminate","indeterminate",St]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Zn([{provide:bs,useExisting:$i(()=>i),multi:!0},{provide:Ad,useExisting:i,multi:!0}]),Mi],ngContentSelectors:qw,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],[1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],[1,"mdc-checkbox__ripple"],[1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,r){if(n&1){let s=Oh();Pn(),ct(0,"div",3),en("click",function(a){return yr(s),br(r._preventBubblingFromLabel(a))}),ct(1,"div",4,0)(3,"div",5),en("click",function(){return yr(s),br(r._onTouchTargetClick())}),rt(),ct(4,"input",6,1),en("blur",function(){return yr(s),br(r._onBlur())})("click",function(){return yr(s),br(r._onInputClick())})("change",function(a){return yr(s),br(r._onInteractionEvent(a))}),rt(),Ct(6,"div",7),ct(7,"div",8),dh(),ct(8,"svg",9),Ct(9,"path",10),rt(),hh(),Ct(10,"div",11),rt(),Ct(11,"div",12),rt(),ct(12,"label",13,2),hn(14),rt()()}if(n&2){let s=Uh(2);En("labelPosition",r.labelPosition),Ot(4),qt("mdc-checkbox--selected",r.checked),En("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),ni("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),Ot(7),En("matRippleTrigger",s)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),Ot(),En("for",r.inputId)}},dependencies:[Co,Wg],styles:[`.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}
`],encapsulation:2,changeDetection:0})}return i})(),Xg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[qd,cn,cn]})}return i})();var Ic;function Jw(){if(Ic===void 0&&(Ic=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Ic=i.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Ic}function Do(i){return Jw()?.createHTML(i)||i}function qg(i){return Error(`Unable to find icon with the name "${i}"`)}function Kw(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Yg(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Zg(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var _i=class{url;svgText;options;svgElement;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},Kg=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,s){this._httpClient=e,this._sanitizer=n,this._errorHandler=s,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,s){return this._addSvgIconConfig(e,n,new _i(r,null,s))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,s){let o=this._sanitizer.sanitize(dn.HTML,r);if(!o)throw Zg(r);let a=Do(o);return this._addSvgIconConfig(e,n,new _i("",a,s))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new _i(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let s=this._sanitizer.sanitize(dn.HTML,n);if(!s)throw Zg(n);let o=Do(s);return this._addSvgIconSetConfig(e,new _i("",o,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(dn.RESOURCE_URL,e);if(!n)throw Yg(e);let r=this._cachedIconsByUrl.get(n);return r?ye(Pc(r)):this._loadSvgIconFromConfig(new _i(e,null)).pipe(bt(s=>this._cachedIconsByUrl.set(n,s)),Ie(s=>Pc(s)))}getNamedSvgIcon(e,n=""){let r=Jg(n,e),s=this._svgIconConfigs.get(r);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(n,e),s)return this._svgIconConfigs.set(r,s),this._getSvgFromConfig(s);let o=this._iconSetConfigs.get(n);return o?this._getSvgFromIconSetConfigs(e,o):Gi(qg(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?ye(Pc(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Ie(n=>Pc(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return ye(r);let s=n.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(vi(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(dn.RESOURCE_URL,o.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),ye(null)})));return Fo(s).pipe(Ie(()=>{let o=this._extractIconWithNameFromAnySet(e,n);if(!o)throw qg(e);return o}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let s=n[r];if(s.svgText&&s.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(s),a=this._extractSvgIconFromSet(o,e,s.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(bt(n=>e.svgText=n),Ie(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?ye(null):this._fetchIcon(e).pipe(bt(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let s=e.querySelector(`[id="${n}"]`);if(!s)return null;let o=s.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,r);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),r);let a=this._svgElementFromString(Do("<svg></svg>"));return a.appendChild(o),this._setSvgAttributes(a,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(Do("<svg></svg>")),r=e.attributes;for(let s=0;s<r.length;s++){let{name:o,value:a}=r[s];o!=="id"&&n.setAttribute(o,a)}for(let s=0;s<e.childNodes.length;s++)e.childNodes[s].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[s].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,s=r?.withCredentials??!1;if(!this._httpClient)throw Kw();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let o=this._sanitizer.sanitize(dn.RESOURCE_URL,n);if(!o)throw Yg(n);let a=this._inProgressUrlFetches.get(o);if(a)return a;let c=this._httpClient.get(o,{responseType:"text",withCredentials:s}).pipe(Ie(l=>Do(l)),ji(()=>this._inProgressUrlFetches.delete(o)),ah());return this._inProgressUrlFetches.set(o,c),c}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(Jg(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let s=this._resolvers[r](n,e);if(s)return Qw(s)?new _i(s.url,null,s.options):new _i(s,null)}}static \u0275fac=function(n){return new(n||i)(Ne(pl,8),Ne(ml),Ne(nt,8),Ne(xi))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Pc(i){return i.cloneNode(!0)}function Jg(i,t){return i+":"+t}function Qw(i){return!!(i.url&&i.options)}var eA=["*"],tA=new Ee("MAT_ICON_DEFAULT_OPTIONS"),nA=new Ee("mat-icon-location",{providedIn:"root",factory:iA});function iA(){let i=G(nt),t=i?i.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}var Qg=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],rA=Qg.map(i=>`[${i}]`).join(", "),sA=/^url\(['"]?#(.*?)['"]?\)$/,e_=(()=>{class i{_elementRef=G(Ft);_iconRegistry=G(Kg);_location=G(nA);_errorHandler=G(xi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Po.EMPTY;constructor(){let e=G(new Ns("aria-hidden"),{optional:!0}),n=G(tA,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,s)=>{r.forEach(o=>{s.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(rA),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<n.length;s++)Qg.forEach(o=>{let a=n[s],c=a.getAttribute(o),l=c?c.match(sA):null;if(l){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:o,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(Yn(1)).subscribe(s=>this._setSvgElement(s),s=>{let o=`Error retrieving icon ${n}:${r}! ${s.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(ni("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Yi(r.color?"mat-"+r.color:""),qt("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",St],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:eA,decls:1,vars:0,template:function(n,r){n&1&&(Pn(),hn(0))},styles:[`mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}
`],encapsulation:2,changeDetection:0})}return i})(),t_=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=gt({type:i});static \u0275inj=mt({imports:[cn,cn]})}return i})();var n_=(()=>{class i{lightSceneService;autoRotate=_s.autoRotate;fogDensity=_s.fogDensity;animationSpeed=_s.animationSpeed;constructor(e){this.lightSceneService=e}onAutoRotateChange(){this.lightSceneService.updateConfig({autoRotate:this.autoRotate})}onFogDensityChange(){this.lightSceneService.updateConfig({fogDensity:this.fogDensity})}onAnimationSpeedChange(){this.lightSceneService.updateConfig({animationSpeed:this.animationSpeed})}static \u0275fac=function(n){return new(n||i)(Lt(bc))};static \u0275cmp=ut({type:i,selectors:[["app-control-panel"]],decls:34,vars:11,consts:[[1,"control-panel"],[1,"flex","items-center","gap-2"],[1,"space-y-6","mt-4"],[1,"control-item"],[1,"text-white",3,"ngModelChange","change","ngModel"],[1,"control-label"],[1,"icon-small"],[1,"w-full",3,"ngModelChange","input","min","max","step","ngModel"],["matSliderThumb",""],[1,"info-section","mt-6","p-4","rounded-lg","bg-black/30"],[1,"text-xs","text-gray-400"],[1,"icon-tiny"]],template:function(n,r){n&1&&(ct(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"mat-icon"),mn(4,"settings"),rt(),ct(5,"span"),mn(6,"Lumina Controls"),rt()(),ct(7,"mat-card-subtitle"),mn(8,`Inspired by Anthony McCall's "Line Describing a Cone"`),rt()(),ct(9,"mat-card-content",2)(10,"div",3)(11,"mat-checkbox",4),Go("ngModelChange",function(o){return Ho(r.autoRotate,o)||(r.autoRotate=o),o}),en("change",function(){return r.onAutoRotateChange()}),mn(12," Auto Rotate Camera "),rt()(),ct(13,"div",3)(14,"label",5)(15,"mat-icon",6),mn(16,"cloud"),rt(),ct(17,"span"),mn(18),rt()(),ct(19,"mat-slider",7),Go("ngModelChange",function(o){return Ho(r.fogDensity,o)||(r.fogDensity=o),o}),en("input",function(){return r.onFogDensityChange()}),Ct(20,"input",8),rt()(),ct(21,"div",3)(22,"label",5)(23,"mat-icon",6),mn(24,"speed"),rt(),ct(25,"span"),mn(26),rt()(),ct(27,"mat-slider",7),Go("ngModelChange",function(o){return Ho(r.animationSpeed,o)||(r.animationSpeed=o),o}),en("input",function(){return r.onAnimationSpeedChange()}),Ct(28,"input",8),rt()(),ct(29,"div",9)(30,"p",10)(31,"mat-icon",11),mn(32,"info"),rt(),mn(33," This interactive installation explores volumetric light as a sculptural medium, creating an ethereal cone of light that morphs and pulses in three-dimensional space. "),rt()()()()),n&2&&(Ot(11),zo("ngModel",r.autoRotate),Ot(7),qc("Fog Density: ",r.fogDensity.toFixed(3)),Ot(),En("min",0)("max",.1)("step",.001),zo("ngModel",r.fogDensity),Ot(7),qc("Animation Speed: ",(r.animationSpeed*100).toFixed(0),"%"),Ot(),En("min",0)("max",1)("step",.01),zo("ngModel",r.animationSpeed))},dependencies:[Xo,bg,_g,Cd,Pg,Tg,Dg,Ig,Rg,Cg,Gg,Hg,$d,Xg,qd,t_,e_],styles:[".control-panel[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;max-width:400px;z-index:100;background:#000c!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1)}.control-item[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.control-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.icon-small[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.icon-tiny[_ngcontent-%COMP%]{margin-right:.25rem;display:inline;vertical-align:middle;font-size:.75rem;line-height:1rem}.info-section[_ngcontent-%COMP%]{border-width:1px;border-color:#ffffff1a}  .mat-mdc-card-header{border-bottom-width:1px;border-color:#ffffff1a;padding-bottom:1rem}  .mat-mdc-card-title{font-size:1.25rem;line-height:1.75rem;font-weight:300;letter-spacing:.025em;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}  .mat-mdc-card-subtitle{margin-top:.25rem;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@media (max-width: 768px){.control-panel[_ngcontent-%COMP%]{max-width:calc(100% - 40px);top:10px;left:10px}}"]})}return i})();var i_=(()=>{class i{title="Lumina - Angular Light Art";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ut({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"app-container"],[1,"light-canvas"]],template:function(n,r){n&1&&(ct(0,"div",0),Ct(1,"app-light-canvas",1)(2,"app-control-panel"),rt())},dependencies:[eg,n_],styles:[".app-container[_ngcontent-%COMP%]{width:100vw;height:100vh;position:relative;overflow:hidden;background:#000}.light-canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})}return i})();al(i_,sp).catch(i=>console.error(i));
