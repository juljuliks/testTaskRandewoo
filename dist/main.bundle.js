/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var e={960:(e,t,r)=>{"use strict";var n=r(275);function o(e,t){return{status:e[0],data:(r=e[1],n.isArrayBuffer(r)||n.isBuffer(r)||n.isStream(r)?r:n.isObjectOrArray(r)?JSON.parse(JSON.stringify(r)):r),headers:e[2],config:t,request:{responseURL:t.url}};var r}e.exports=function(e,t,r,s){var i=s.url||"";s.baseURL&&i.substr(0,s.baseURL.length)===s.baseURL&&(i=i.slice(s.baseURL.length)),delete s.adapter,e.history[s.method].push(s);var a=n.findHandler(e.handlers,s.method,i,s.data,s.params,s.headers,s.baseURL);if(a)if(7===a.length&&n.purgeIfReplyOnce(e,a),2===a.length)e.originalAdapter(s).then(t,r);else if("function"!=typeof a[3])n.settle(t,r,o(a.slice(3),s),e.delayResponse);else{var u=a[3](s);"function"!=typeof u.then?n.settle(t,r,o(u,s),e.delayResponse):u.then((function(i){i.config&&i.status?n.settle(t,r,o([i.status,i.data,i.headers],i.config),0):n.settle(t,r,o(i,s),e.delayResponse)}),(function(t){e.delayResponse>0?setTimeout((function(){r(t)}),e.delayResponse):r(t)}))}else switch(e.onNoMatch){case"passthrough":e.originalAdapter(s).then(t,r);break;case"throwException":throw n.createCouldNotFindMockError(s);default:n.settle(t,r,{status:404,config:s},e.delayResponse)}}},913:(e,t,r)=>{"use strict";var n=r(960),o=r(275),s=["get","post","head","delete","patch","put","options","list"];function i(){return s.reduce((function(e,t){return e[t]=[],e}),{})}function a(){u.call(this),c.call(this)}function u(){this.handlers=i()}function c(){this.history=i()}function f(e,t){a.call(this),e&&(this.axiosInstance=e,this.originalAdapter=e.defaults.adapter,this.delayResponse=t&&t.delayResponse>0?t.delayResponse:null,this.onNoMatch=t&&t.onNoMatch||null,e.defaults.adapter=this.adapter.call(this))}function d(e,t,r){if("any"===e)s.forEach((function(e){t[e].push(r)}));else{var n=function(e,t,r){for(var n=-1,s=0;s<t[e].length;s+=1){var i=t[e][s],a=7===i.length;(i[0]instanceof RegExp&&r[0]instanceof RegExp?String(i[0])===String(r[0]):i[0]===r[0])&&o.isEqual(i[1],r[1])&&o.isEqual(i[2],r[2])&&!a&&(n=s)}return n}(e,t,r);n>-1&&r.length<7?t[e].splice(n,1,r):t[e].push(r)}}f.prototype.adapter=function(){return function(e){var t=this;if(3!==arguments.length)return new Promise((function(r,o){n(t,r,o,e)}));n(t,arguments[0],arguments[1],arguments[2])}.bind(this)},f.prototype.restore=function(){this.axiosInstance&&(this.axiosInstance.defaults.adapter=this.originalAdapter,this.axiosInstance=void 0)},f.prototype.reset=a,f.prototype.resetHandlers=u,f.prototype.resetHistory=c,s.concat("any").forEach((function(e){var t="on"+e.charAt(0).toUpperCase()+e.slice(1);f.prototype[t]=function(t,r,n){var s=this;function i(o,i,a){var u=[t,r,n,o,i,a];return d(e,s.handlers,u),s}function a(o,i,a){var u=[t,r,n,o,i,a,!0];return d(e,s.handlers,u),s}return t=void 0===t?/.*/:t,{reply:i,replyOnce:a,passThrough:function(){var n=[t,r];return d(e,s.handlers,n),s},abortRequest:function(){return i((function(e){var t=o.createAxiosError("Request aborted",e,void 0,"ECONNABORTED");return Promise.reject(t)}))},abortRequestOnce:function(){return a((function(e){var t=o.createAxiosError("Request aborted",e,void 0,"ECONNABORTED");return Promise.reject(t)}))},networkError:function(){return i((function(e){var t=o.createAxiosError("Network Error",e);return Promise.reject(t)}))},networkErrorOnce:function(){return a((function(e){var t=o.createAxiosError("Network Error",e);return Promise.reject(t)}))},timeout:function(){return i((function(e){var t=o.createAxiosError(e.timeoutErrorMessage||"timeout of "+e.timeout+"ms exceeded",e,void 0,"ECONNABORTED");return Promise.reject(t)}))},timeoutOnce:function(){return a((function(e){var t=o.createAxiosError(e.timeoutErrorMessage||"timeout of "+e.timeout+"ms exceeded",e,void 0,"ECONNABORTED");return Promise.reject(t)}))}}}})),e.exports=f,e.exports.default=f},275:(e,t,r)=>{"use strict";var n=r(669),o=r(63),s=r(738),i=Object.prototype.toString,a=!!n.create().defaults.headers;function u(e,t){for(var r=e.length,n=0;n<r;n++){var o=e[n];if(t(o))return o}}function c(e){return"[object Function]"===i.call(e)}function f(e){return null!==e&&"object"==typeof e}function d(e,t){return e?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):t}function p(e,t){return("/"===e[0]?e.substr(1):e)===("/"===t[0]?t.substr(1):t)}function l(e,t,r,n){return["delete","get","head","options"].indexOf(e.toLowerCase())>=0?h(r,n?n.params:void 0):function(e,t){if(void 0===t)return!0;var r;try{r=JSON.parse(e)}catch(e){}return h(r||e,t)}(t,n)}function h(e,t){return void 0===t||("function"==typeof t.asymmetricMatch?t.asymmetricMatch(e):o(e,t))}function m(e,t,r,n){if(!a)return r;var o=new Error(e);return o.isAxiosError=!0,o.config=t,void 0!==r&&(o.response=r),void 0!==n&&(o.code=n),o.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},o}e.exports={find:u,findHandler:function(e,t,r,n,o,s,i){return u(e[t.toLowerCase()],(function(e){return"string"==typeof e[0]?(p(r,e[0])||p(d(i,r),e[0]))&&l(t,n,o,e[1])&&h(s,e[2]):e[0]instanceof RegExp?(e[0].test(r)||e[0].test(d(i,r)))&&l(t,n,o,e[1])&&h(s,e[2]):void 0}))},purgeIfReplyOnce:function(e,t){Object.keys(e.handlers).forEach((function(r){var n=e.handlers[r].indexOf(t);n>-1&&e.handlers[r].splice(n,1)}))},settle:function e(t,r,n,o){o>0?setTimeout((function(){e(t,r,n)}),o):n.config&&n.config.validateStatus?n.config.validateStatus(n.status)?t(n):r(m("Request failed with status code "+n.status,n.config,n)):n.status>=200&&n.status<300?t(n):r(n)},isStream:function(e){return f(e)&&c(e.pipe)},isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isFunction:c,isObjectOrArray:f,isBuffer:s,isEqual:o,createAxiosError:m,createCouldNotFindMockError:function(e){var t="Could not find mock for: \n"+JSON.stringify(e,["method","url"],2),r=new Error(t);return r.isCouldNotFindMockError=!0,r.url=e.url,r.method=e.method,r}}},669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),s=r(372),i=r(327),a=r(97),u=r(109),c=r(985),f=r(61);e.exports=function(e){return new Promise((function(t,r){var d=e.data,p=e.headers;n.isFormData(d)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?u(l.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,r,s),l=null}},l.onabort=function(){l&&(r(f("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){r(f("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,"ECONNABORTED",l)),l=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||c(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in l&&n.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),r(e),l=null)})),d||(d=null),l.send(d)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),s=r(321),i=r(185);function a(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var u=a(r(655));u.Axios=s,u.create=function(e){return a(i(u.defaults,e))},u.Cancel=r(263),u.CancelToken=r(972),u.isCancel=r(502),u.all=function(e){return Promise.all(e)},u.spread=r(713),u.isAxiosError=r(268),e.exports=u,e.exports.default=u},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),s=r(782),i=r(572),a=r(185);function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=u},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),s=r(502),i=r(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function c(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=u(void 0,e[o])):r[o]=u(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=u(void 0,t[e]))})),n.forEach(s,c),n.forEach(i,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=u(void 0,e[o])):r[o]=u(void 0,t[o])})),n.forEach(a,(function(n){n in t?r[n]=u(e[n],t[n]):n in e&&(r[n]=u(void 0,e[n]))}));var f=o.concat(s).concat(i).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return n.forEach(d,c),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),o=r(16),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=r(448)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(s)})),e.exports=u},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,i={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},63:e=>{"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,s;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(s=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,s[o]))return!1;for(o=n;0!=o--;){var i=s[o];if(!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},738:e=>{e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},138:(e,t,r)=>{const n=r(669),o=r(913);class s{constructor(e){this.id=this.getId(),this.name=e,this.timeAndCoordinates=this.getUpdatedTimeAndCoordinates()}getId(){return+Math.random().toString(10).substr(2,9)}getRandomDegrees(e,t){return+(Math.random()*(t-e)+e).toFixed(6)}coordinateGenerator(){return`${this.getRandomDegrees(0,90)}°, ${this.getRandomDegrees(0,180)}°`}generateTimeAndCoordinates(){let e=[];const t=Math.floor(100*Math.random());for(let r=0;r<t;r++)e.push({timestamp:this.getTimestamp(),coordinates:this.coordinateGenerator()});return e}getUpdatedTimeAndCoordinates(){let e=this.generateTimeAndCoordinates();return setInterval((()=>{e.unshift(...this.generateTimeAndCoordinates())}),6e4),e}getTimestamp(){const e=e=>e<10?"0"+e:e,t=new Date;return{year:t.getFullYear(),month:e(t.getMonth()+1),day:e(t.getDate()),hours:e(t.getHours()),minutes:e(t.getMinutes()),seconds:e(t.getSeconds()),getDate(){return`${this.year}-${this.month}-${this.day}T${this.hours}:${this.minutes}:${this.seconds}`}}.getDate()}}const i=[new s("MovingObject_1"),new s("MovingObject_2"),new s("MovingObject_3")],a=e=>{e.timeAndCoordinates.forEach(((t,r)=>{const n=document.createElement("tr");n.innerHTML=`<td>${r+1}</td>\n                    <td>${e.id}</td>\n                    <td>${e.name}</td>\n                    <td>${t.timestamp}</td>\n                    <td>${t.coordinates}</td>\n                    `,document.querySelector("tbody").appendChild(n)}))},u=()=>1e3*Math.floor(5*Math.random()+4),c=e=>{n.get("/objects").then((t=>{document.querySelector("tbody").innerHTML="",a(t.data[e])}))};document.addEventListener("DOMContentLoaded",(function(){i.forEach((e=>{a(e)})),document.querySelector("select").addEventListener("change",(e=>{console.log(u()),new o(n,{delayResponse:u()}).onGet("/objects").reply(200,i),c(e.target.value),setInterval((()=>{c(e.target.value)}),6e4)}))})),e.exports={MovingObject:s,generateDelay:u}}},t={};!function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(138)})();