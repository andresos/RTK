parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__extends=e,exports.__rest=n,exports.__decorate=o,exports.__param=a,exports.__metadata=c,exports.__awaiter=i,exports.__generator=u,exports.__exportStar=f,exports.__values=l,exports.__read=s,exports.__spread=p,exports.__await=y,exports.__asyncGenerator=_,exports.__asyncDelegator=h,exports.__asyncValues=b,exports.__makeTemplateObject=v,exports.__importStar=d,exports.__importDefault=w;var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};function e(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=exports.__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function n(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r}function o(t,e,r,n){var o,a=arguments.length,c=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,r,c):o(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c}function a(t,e){return function(r,n){e(r,n,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function i(t,e,r,n){return new(r||(r=Promise))(function(o,a){function c(t){try{u(n.next(t))}catch(t){a(t)}}function i(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(c,i)}u((n=n.apply(t,e||[])).next())})}function u(t,e){var r,n,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=n[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}function f(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function l(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function s(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)c.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return c}function p(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t}function y(t){return this instanceof y?(this.v=t,this):new y(t)}function _(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),a=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){a.push([t,e,r,n])>1||i(t,e)})})}function i(t,e){try{(r=o[t](e)).value instanceof y?Promise.resolve(r.value.v).then(u,f):l(a[0][2],r)}catch(t){l(a[0][3],t)}var r}function u(t){i("next",t)}function f(t){i("throw",t)}function l(t,e){t(e),a.shift(),a.length&&i(a[0][0],a[0][1])}}function h(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){t[n]&&(e[n]=function(e){return(r=!r)?{value:y(t[n](e)),done:"return"===n}:o?o(e):e})}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator];return e?e.call(t):"function"==typeof l?l(t):t[Symbol.iterator]()}function v(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function d(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function w(t){return t&&t.__esModule?t:{default:t}}
},{}],20:[function(require,module,exports) {
module.exports=function(e){var t=String.prototype.split,n=/()??/.exec("")[1]===e;return function(l,r,i){if("[object RegExp]"!==Object.prototype.toString.call(r))return t.call(l,r,i);var o,p,s,c,g=[],u=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),x=0;r=new RegExp(r.source,u+"g");for(l+="",n||(o=new RegExp("^"+r.source+"$(?!\\s)",u)),i=i===e?-1>>>0:i>>>0;(p=r.exec(l))&&!((s=p.index+p[0].length)>x&&(g.push(l.slice(x,p.index)),!n&&p.length>1&&p[0].replace(o,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(p[t]=e)}),p.length>1&&p.index<l.length&&Array.prototype.push.apply(g,p.slice(1)),c=p[0].length,x=s,g.length>=i));)r.lastIndex===p.index&&r.lastIndex++;return x===l.length?!c&&r.test("")||g.push(""):g.push(l.slice(x)),g.length>i?g.slice(0,i):g}}();
},{}],23:[function(require,module,exports) {
var r=[].indexOf;module.exports=function(e,n){if(r)return e.indexOf(n);for(var f=0;f<e.length;++f)if(e[f]===n)return f;return-1};
},{}],22:[function(require,module,exports) {
var n=require("indexof");function t(t){var u=t.classList;if(u)return u;var i={add:o,remove:a,contains:c,toggle:function(n){return c(n)?(a(n),!1):(o(n),!0)},toString:function(){return t.className},length:0,item:function(n){return l()[n]||null}};return i;function o(t){var r=l();n(r,t)>-1||(r.push(t),f(r))}function a(t){var r=l(),e=n(r,t);-1!==e&&(r.splice(e,1),f(r))}function c(t){return n(l(),t)>-1}function l(){return r(t.className.split(" "),e)}function f(n){var r=n.length;t.className=n.join(" "),i.length=r;for(var e=0;e<n.length;e++)i[e]=n[e];delete n[r]}}function r(n,t){for(var r=[],e=0;e<n.length;e++)t(n[e])&&r.push(n[e]);return r}function e(n){return!!n}module.exports=t;
},{"indexof":23}],21:[function(require,module,exports) {

},{}],16:[function(require,module,exports) {
var e=require("browser-split"),t=require("class-list"),n="undefined"==typeof window?require("html-element"):window,r=n.document,i=n.Text;function o(){var n=[];function o(){var o=[].slice.call(arguments),s=null;function u(o){var c,p;if(null==o);else if("string"==typeof o)s?s.appendChild(c=r.createTextNode(o)):(p=e(o,/([\.#]?[^\s#.]+)/),/^\.|#/.test(p[1])&&(s=r.createElement("div")),l(p,function(e){var n=e.substring(1,e.length);e&&(s?"."===e[0]?t(s).add(n):"#"===e[0]&&s.setAttribute("id",n):s=r.createElement(e))}));else if("number"==typeof o||"boolean"==typeof o||o instanceof Date||o instanceof RegExp)s.appendChild(c=r.createTextNode(o.toString()));else if(a(o))l(o,u);else if(f(o))s.appendChild(c=o);else if(o instanceof i)s.appendChild(c=o);else if("object"==typeof o)for(var d in o)if("function"==typeof o[d])/^on\w+/.test(d)?function(e,t){s.addEventListener?(s.addEventListener(e.substring(2),t[e],!1),n.push(function(){s.removeEventListener(e.substring(2),t[e],!1)})):(s.attachEvent(e,t[e]),n.push(function(){s.detachEvent(e,t[e])}))}(d,o):(s[d]=o[d](),n.push(o[d](function(e){s[d]=e})));else if("style"===d)if("string"==typeof o[d])s.style.cssText=o[d];else for(var h in o[d])!function(e,t){if("function"==typeof t)s.style.setProperty(e,t()),n.push(t(function(t){s.style.setProperty(e,t)}));else var r=o[d][e].match(/(.*)\W+!important\W*$/);r?s.style.setProperty(e,r[1],"important"):s.style.setProperty(e,o[d][e])}(h,o[d][h]);else if("attrs"===d)for(var y in o[d])s.setAttribute(y,o[d][y]);else"data-"===d.substr(0,5)?s.setAttribute(d,o[d]):s[d]=o[d];else if("function"==typeof o){y=o();s.appendChild(c=f(y)?y:r.createTextNode(y)),n.push(o(function(e){f(e)&&c.parentElement?(c.parentElement.replaceChild(e,c),c=e):c.textContent=e}))}return c}for(;o.length;)u(o.shift());return s}return o.cleanup=function(){for(var e=0;e<n.length;e++)n[e]();n.length=0},o}var s=module.exports=o();function f(e){return e&&e.nodeName&&e.nodeType}function l(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n)}function a(e){return"[object Array]"==Object.prototype.toString.call(e)}s.context=o;
},{"browser-split":20,"class-list":22,"html-element":21}],9:[function(require,module,exports) {
"use strict";function e(e,t){var r=document.getElementById(e);r&&(r.firstChild&&r.removeChild(r.firstChild),r.appendChild(t))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=e;
},{}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HDPI_FACTOR=window.devicePixelRatio?window.devicePixelRatio:2,exports.CANVAS_SIZE_RESOLUTION_INDEPENDENT=300,exports.RESULT_SIZE_RESOLUTION_INDEPENDENT=150,exports.CANVAS_SIZE=exports.CANVAS_SIZE_RESOLUTION_INDEPENDENT*exports.HDPI_FACTOR,exports.RESULT_SIZE=exports.RESULT_SIZE_RESOLUTION_INDEPENDENT*exports.HDPI_FACTOR;
},{}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./constants");exports.canvas={height:e.CANVAS_SIZE_RESOLUTION_INDEPENDENT+"px",width:e.CANVAS_SIZE_RESOLUTION_INDEPENDENT+"px",border:"2px solid #ddd",background:"#fff","background-image":'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ddd" stroke-width="0.2"><line x1="50" y1="0" x2="50" y2="100" /><line x1="0" y1="50" x2="100" y2="50" /></g><g stroke="#bbb" stroke-width="0.2"><line x1="0" y1="100" x2="100" y2="0" /><line x1="0" y1="0" x2="100" y2="100" /></g></svg>\')'},exports.result={display:"inline-block",height:e.RESULT_SIZE_RESOLUTION_INDEPENDENT+"px",width:e.RESULT_SIZE_RESOLUTION_INDEPENDENT+"px",border:"1px solid #ddd","background-image":'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ddd" stroke-width="0.2"><line x1="50" y1="0" x2="50" y2="100" /><line x1="0" y1="50" x2="100" y2="50" /></g><g stroke="#bbb" stroke-width="0.2"><line x1="0" y1="100" x2="100" y2="0" /><line x1="0" y1="0" x2="100" y2="100" /></g></svg>\')'},exports.actions={},exports.action={background:"transparent","font-size":"22px",border:"none",outline:"none"};
},{"./constants":10}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("./constants"),n={color:"#000",lineWidth:18},o=[];function r(t,o,r,a){var i=t.getContext("2d");if(i){var s=e.__assign({},n,a);i.beginPath(),i.moveTo(o.x,o.y),i.lineTo(r.x,r.y),i.lineWidth=s.lineWidth,i.lineCap="round",i.lineJoin="round",i.strokeStyle=s.color,i.stroke()}}function a(e,n){return{x:(n.pageX-e.offsetLeft)*t.HDPI_FACTOR,y:(n.pageY-e.offsetTop)*t.HDPI_FACTOR}}var i=window.localStorage||window.sessionStorage;function s(e){e.splice(0,e.length)}exports.load=function(){return JSON.parse(i.getItem("state")||"[]")},exports.save=function(e){console.log("saved state",e),i.setItem("state",JSON.stringify(e))},exports.clear=function(e){var t=e.getContext("2d");t&&t.clearRect(0,0,e.width,e.height)},exports.redraw=function(e,t,n){void 0===n&&(n={}),exports.clear(e),t.forEach(function(t){for(var o=1;o<t.length;o++)r(e,t[o-1],t[o],n)})},exports.handleStart=function(e){return function(t){t.preventDefault();var n=t.changedTouches,r=a(e,n[0]);o.push(r)}},exports.handleMove=function(e){return function(t){t.preventDefault();var i=t.changedTouches,s=a(e,i[0]);r(e,o[o.length-1],s,n),o.push(s)}},exports.handleEnd=function(e,t){return function(i){i.preventDefault();var u=i.changedTouches,c=a(e,u[0]);r(e,o[o.length-1],c,n),t.push(JSON.parse(JSON.stringify(o))),exports.save(t),s(o)}},exports.handleCancel=function(){return function(e){e.preventDefault(),s(o)}};
},{"tslib":15,"./constants":10}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=e.__importStar(require("hyperscript")),r=require("./dom"),n=e.__importStar(require("./styles")),a=require("./constants"),i=require("./touch"),d=t.context(),s=d("canvas",{style:n.canvas,width:a.CANVAS_SIZE,height:a.CANVAS_SIZE}),c=d("button",{style:n.action},"❌"),o=d("div",{style:n.actions},c),u=d("div",{},[s,o]);r.render("whiteboard",u),i.save([]);var v=[];function l(){v.splice(-1,1),i.redraw(s,v)}c.addEventListener("touchstart",l,!1),s.addEventListener("touchstart",i.handleStart(s),!1),s.addEventListener("touchend",i.handleEnd(s,v),!1),s.addEventListener("touchcancel",i.handleCancel(),!1),s.addEventListener("touchmove",i.handleMove(s),!1),s.addEventListener("click",function(e){return e.preventDefault()},!1);
},{"tslib":15,"hyperscript":16,"./dom":9,"./styles":7,"./constants":10,"./touch":8}]},{},[5], null)
//# sourceMappingURL=/whiteboard.82bdc309.map