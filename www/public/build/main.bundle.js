var codex =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@codexteam/deeplinker/dist/deeplinker.js":
/*!***************************************************************!*\
  !*** ./node_modules/@codexteam/deeplinker/dist/deeplinker.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o,r,i,u,c,f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/**
 * Helps to set link with custom protocol (to open apps) and usual link (for webpages) to a button
 *
 * @author Taly Guryn <https://github.com/talyguryn>
 * @license MIT
 */e.exports=(o=function(e){"object"!==(void 0===e?"undefined":f(e))&&c("Passed element is not an object");var n=e.dataset.link||e.href,t=e.dataset.appLink;i(t,n)},r=function(e){e||c("Can not open app, because appLink is undefined");var n=document.createElement("iframe");n.style.display="none",document.body.appendChild(n),null!==n&&(n.src=e)},i=function(e,n){var t=!1;window.addEventListener("pagehide",function(){t=!0},!1),window.addEventListener("blur",function(){t=!0},!1),r(e),setTimeout(function(){t||u(n)},100)},u=function(e){e||c("Can not open page because link is undefined"),window.open(e,"_blank")},c=function(e){throw Error("[Deeplinker] "+e)},{click:o,init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".deeplinker",n=document.querySelectorAll(e);n.length&&Array.prototype.slice.call(n).forEach(function(e){e.addEventListener("click",function(n){n.preventDefault(),o(e)})})},tryToOpenApp:r})}])});

/***/ }),

/***/ "./node_modules/codex.editor.code/dist/bundle.js":
/*!*******************************************************!*\
  !*** ./node_modules/codex.editor.code/dist/bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1).toString();
/**
 * CodeTool for CodeX Editor
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var o=function(){function e(t){var n=t.data,r=t.config,o=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.placeholder=r.placeholder||e.DEFAULT_PLACEHOLDER,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.data={code:n.code||""},this.element=this.drawView()}return r(e,null,[{key:"displayInToolbox",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}}]),r(e,[{key:"drawView",value:function(){var e=document.createElement("div"),t=document.createElement("textarea");return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),t.textContent=this.data.code,t.placeholder=this.placeholder,e.appendChild(t),e}},{key:"render",value:function(){return this.element}},{key:"save",value:function(e){return{code:e.querySelector("textarea").value}}}],[{key:"toolboxIcon",get:function(){return'<svg width="14" height="14" viewBox="0 -1 14 14" xmlns="http://www.w3.org/2000/svg" > <path d="M3.177 6.852c.205.253.347.572.427.954.078.372.117.844.117 1.417 0 .418.01.725.03.92.02.18.057.314.107.396.046.075.093.117.14.134.075.027.218.056.42.083a.855.855 0 0 1 .56.297c.145.167.215.38.215.636 0 .612-.432.934-1.216.934-.457 0-.87-.087-1.233-.262a1.995 1.995 0 0 1-.853-.751 2.09 2.09 0 0 1-.305-1.097c-.014-.648-.029-1.168-.043-1.56-.013-.383-.034-.631-.06-.733-.064-.263-.158-.455-.276-.578a2.163 2.163 0 0 0-.505-.376c-.238-.134-.41-.256-.519-.371C.058 6.76 0 6.567 0 6.315c0-.37.166-.657.493-.846.329-.186.56-.342.693-.466a.942.942 0 0 0 .26-.447c.056-.2.088-.42.097-.658.01-.25.024-.85.043-1.802.015-.629.239-1.14.672-1.522C2.691.19 3.268 0 3.977 0c.783 0 1.216.317 1.216.921 0 .264-.069.48-.211.643a.858.858 0 0 1-.563.29c-.249.03-.417.076-.498.126-.062.04-.112.134-.139.291-.031.187-.052.562-.061 1.119a8.828 8.828 0 0 1-.112 1.378 2.24 2.24 0 0 1-.404.963c-.159.212-.373.406-.64.583.25.163.454.342.612.538zm7.34 0c.157-.196.362-.375.612-.538a2.544 2.544 0 0 1-.641-.583 2.24 2.24 0 0 1-.404-.963 8.828 8.828 0 0 1-.112-1.378c-.009-.557-.03-.932-.061-1.119-.027-.157-.077-.251-.14-.29-.08-.051-.248-.096-.496-.127a.858.858 0 0 1-.564-.29C8.57 1.401 8.5 1.185 8.5.921 8.5.317 8.933 0 9.716 0c.71 0 1.286.19 1.72.574.432.382.656.893.671 1.522.02.952.033 1.553.043 1.802.009.238.041.458.097.658a.942.942 0 0 0 .26.447c.133.124.364.28.693.466a.926.926 0 0 1 .493.846c0 .252-.058.446-.183.58-.109.115-.281.237-.52.371-.21.118-.377.244-.504.376-.118.123-.212.315-.277.578-.025.102-.045.35-.06.733-.013.392-.027.912-.042 1.56a2.09 2.09 0 0 1-.305 1.097c-.2.323-.486.574-.853.75a2.811 2.811 0 0 1-1.233.263c-.784 0-1.216-.322-1.216-.934 0-.256.07-.47.214-.636a.855.855 0 0 1 .562-.297c.201-.027.344-.056.418-.083.048-.017.096-.06.14-.134a.996.996 0 0 0 .107-.396c.02-.195.031-.502.031-.92 0-.573.039-1.045.117-1.417.08-.382.222-.701.427-.954z" /> </svg>'}},{key:"DEFAULT_PLACEHOLDER",get:function(){return"Enter code"}}]),e}();e.exports=o},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".ce-code__textarea {\n    min-height: 200px;\n    font-size: 13px;\n    resize: vertical;\n    font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],u=n(5);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=h(t)),r=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return f(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&f(l(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.delimiter/dist/bundle.js":
/*!************************************************************!*\
  !*** ./node_modules/codex.editor.delimiter/dist/bundle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1).toString();
/**
 * Delimiter Block for the CodeX Editor.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var o=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=n}return r(e,null,[{key:"displayInToolbox",get:function(){return!0}},{key:"contentless",get:function(){return!0}}]),r(e,[{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e}},{key:"render",value:function(){return this._element}},{key:"save",value:function(e){return{}}}],[{key:"toolboxIcon",get:function(){return'<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>'}}]),e}();e.exports=o},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.ce-delimiter {\n    line-height: 1.6em;\n    width: 100%;\n    text-align: center;\n}\n\n.ce-delimiter:before {\n    display: inline-block;\n    content: "***";\n    font-size: 30px;\n    line-height: 65px;\n    height: 30px;\n    letter-spacing: 0.2em;\n}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,u=[],c=n(5);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=s++;n=a||(a=h(t)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return f(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&f(l(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.header/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/codex.editor.header/dist/bundle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();
/**
 * Header block for the CodeX Editor.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var i=function(){function t(e){var n=e.data,r=e.config,i=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=r,this._data=n||{},this.settingsButtons=[],this._element=this.getTag()}return r(t,null,[{key:"displayInToolbox",get:function(){return!0}}]),r(t,[{key:"render",value:function(){return this._element}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("DIV");return this.levels.forEach(function(n){var r=document.createElement("SPAN");r.classList.add(t._CSS.settingsButton),t.currentLevel.number===n.number&&r.classList.add(t._CSS.settingsButtonActive),r.innerHTML=n.svg,r.dataset.level=n.number,r.addEventListener("click",function(){t.setLevel(n.number)}),e.appendChild(r),t.settingsButtons.push(r)}),e}},{key:"setLevel",value:function(t){var e=this;this.data={level:t},this.settingsButtons.forEach(function(n){n.classList.toggle(e._CSS.settingsButtonActive,parseInt(n.dataset.level)===t)})}},{key:"merge",value:function(t){var e={text:this.data.text+t.text,level:this.data.level};this.data=e}},{key:"validate",value:function(t){return""!==t.text.trim()}},{key:"save",value:function(t){return{text:t.innerHTML,level:this.currentLevel.number}}},{key:"getTag",value:function(){var t=document.createElement(this.currentLevel.tag);return t.innerHTML=this._data.text||"",t.classList.add(this._CSS.wrapper),t.contentEditable="true",t.dataset.placeholder=this._settings.placeholder||"",t}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data},set:function(t){if(this._data=t||{},void 0!==t.level&&this._element.parentNode){var e=this.getTag();e.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(e,this._element),this._element=e}void 0!==t.text&&(this._element.innerHTML=this._data.text||"")}},{key:"currentLevel",get:function(){var t=this,e=this.levels.find(function(e){return e.number===t._data.level});return e||(e=this.levels[0]),e}},{key:"levels",get:function(){return[{number:2,tag:"H2",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'},{number:3,tag:"H3",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'},{number:4,tag:"H4",svg:'<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'}]}}],[{key:"onPasteHandler",value:function(t){var e=4;switch(t.tagName){case"H1":case"H2":e=2;break;case"H3":e=3}return{level:e,text:t.innerHTML}}},{key:"onPaste",get:function(){return{handler:t.onPasteHandler,tags:["H1","H2","H3","H4","H5","H6"]}}},{key:"toolboxIcon",get:function(){return'<svg width="11" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/></svg>'}}]),t}();t.exports=i},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"/**\n * Plugin styles\n */\n.ce-header {\n  padding: 1em 0;\n  margin: 0;\n  margin-bottom: -0.9em;\n  line-height: 1.5em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,c=[],u=n(5);function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(g(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(g(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),d(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=s++;n=a||(a=h(e)),r=b.bind(null,n,c,!1),i=b.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return l(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o];(s=r[a.id]).refs--,i.push(s)}t&&l(f(t,e),e);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.inline-code/dist/bundle.js":
/*!**************************************************************!*\
  !*** ./node_modules/codex.editor.inline-code/dist/bundle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();var o=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="SPAN",this.CSS="inline-code",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return r(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(t){if(t){var e=this.api.selection.findParentTag(this.tag,this.CSS);e?this.unwrap(e):this.wrap(t)}}},{key:"wrap",value:function(t){var e=document.createElement(this.tag);e.classList.add(this.CSS),e.appendChild(t.extractContents()),t.insertNode(e),this.api.selection.expandToTag(e)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var e=window.getSelection(),n=e.getRangeAt(0),r=n.extractContents();t.parentNode.removeChild(t),n.insertNode(r),e.removeAllRanges(),e.addRange(n)}},{key:"checkState",value:function(){var t=this.api.selection.findParentTag(this.tag,this.CSS);this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return'<svg width="19" height="13" viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg"><path d="M17.839 5.525a1.105 1.105 0 0 1-.015 1.547l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.137-4.137-4.078-4.078A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.026.026.05.053.074.08zm-14.952.791l4.137 4.137a1.105 1.105 0 1 1-1.562 1.562L.519 7.072a1.105 1.105 0 0 1-.015-1.547c.023-.028.048-.055.074-.081L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.887 6.316z" id="a"/></svg>'}}],[{key:"isInline",get:function(){return!0}}]),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".inline-code {\n  background: rgba(251,241,241,0.78);\n  color: #C44545;\n  padding: 4px 6px;\n  border-radius: 2px;\n  margin: 0 2px;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 0.9em;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,u=[],c=n(5);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=h(e)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.list/dist/bundle.js":
/*!*******************************************************!*\
  !*** ./node_modules/codex.editor.list/dist/bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1).toString();var i=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elements={wrapper:null},this.settings=[{name:"unordered",title:"Unordered",icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',default:!1},{name:"ordered",title:"Ordered",icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',default:!0}],this._data={style:this.settings.find(function(e){return!0===e.default}).name,items:[]},this.api=r,this.data=n}return r(e,null,[{key:"displayInToolbox",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"toolboxIcon",get:function(){return'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>'}}]),r(e,[{key:"render",value:function(){var e=this,t="ordered"===this._data.style?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered;return this._elements.wrapper=this._make("ul",[this.CSS.baseBlock,this.CSS.wrapper,t],{contentEditable:!0}),this._data.items.length?this._data.items.forEach(function(t){e._elements.wrapper.appendChild(e._make("li",[e.CSS.item,e.CSS.input],{innerHTML:t}))}):this._elements.wrapper.appendChild(this._make("li",[this.CSS.item,this.CSS.input])),this._elements.wrapper.addEventListener("keydown",function(t){var n=t.ctrlKey||t.metaKey;switch(t.keyCode){case 13:e.getOutofList(t);break;case 8:e.backspace(t);break;case 65:n&&e.selectItem(t)}},!1),this._elements.wrapper}},{key:"save",value:function(){return this.data}},{key:"renderSettings",value:function(){var e=this,t=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.forEach(function(n){var r=e._make("div",e.CSS.settingsButton,{innerHTML:n.icon});r.addEventListener("click",function(){e.toggleTune(n.name);var t=r.parentNode.querySelectorAll("."+e.CSS.settingsButton);Array.from(t).forEach(function(t){return t.classList.remove(e.CSS.settingsButtonActive)}),r.classList.toggle(e.CSS.settingsButtonActive)}),e._data.style===n.name&&r.classList.add(e.CSS.settingsButtonActive),t.appendChild(r)}),t}},{key:"toggleTune",value:function(e){this._elements.wrapper.classList.toggle(this.CSS.wrapperOrdered,"ordered"===e),this._elements.wrapper.classList.toggle(this.CSS.wrapperUnordered,"unordered"===e),this._data.style=e}},{key:"_make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(e);Array.isArray(n)?(t=i.classList).add.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n)):n&&i.classList.add(n);for(var o in r)i[o]=r[o];return i}},{key:"getOutofList",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item);if(!(t.length<2)){var n=t[t.length-1];window.getSelection().anchorNode!==n||n.innerHTML.replace("<br>"," ").trim()||(this.api.blocks.insertNewBlock(),e.preventDefault(),e.stopPropagation())}}},{key:"backspace",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item),n=t[0];n&&t.length<2&&!n.innerHTML.replace("<br>"," ").trim()&&e.preventDefault()}},{key:"selectItem",value:function(e){e.preventDefault();var t=window.getSelection(),n=t.anchorNode.parentNode.closest("."+this.CSS.item),r=new Range;r.selectNodeContents(n),t.removeAllRanges(),t.addRange(r)}},{key:"CSS",get:function(){return{baseBlock:this.api.styles.block,wrapper:"cdx-list",wrapperOrdered:"cdx-list--ordered",wrapperUnordered:"cdx-list--unordered",item:"cdx-list__item",input:this.api.styles.input,settingsWrapper:"cdx-list-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"data",set:function(e){e||(e={}),this._data.style=e.style||this.settings.find(function(e){return!0===e.default}).name,this._data.items=e.items||[]},get:function(){this._data.items=[];for(var e=this._elements.wrapper.querySelectorAll("."+this.CSS.item),t=0;t<e.length;t++){e[t].innerHTML.replace("<br>"," ").trim()&&this._data.items.push(e[t].innerHTML)}return this._data}}],[{key:"pasteHandler",value:function(e){var t=e.tagName,n=void 0;switch(t){case"OL":n="ordered";break;case"UL":case"LI":n="unordered"}var r={type:n,items:[]};if("LI"===t)r.items=[e.innerHTML];else{var i=Array.from(e.querySelectorAll("LI"));r.items=i.map(function(e){return e.innerHTML}).filter(function(e){return!!e.trim()})}return r}},{key:"onPaste",get:function(){return{tags:["OL","UL","LI"],handler:e.pasteHandler}}}]),e}();e.exports=i},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n    min-height: 1.45em;\n    counter-reset: index;\n}\n\n.cdx-list--unordered .cdx-list__item::before {\n    content: '';\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: #7B7E89;\n    position: absolute;\n    margin-left: -35px;\n    margin-top: 9px;\n}\n\n.cdx-list--ordered .cdx-list__item::before {\n    content: counter(index);\n    position: absolute;\n    margin-left: -37px;\n    margin-top: 2px;\n    font-size: 13px;\n    font-weight: 500;\n    color: #7B7E89;\n}\n\n.cdx-list__item {\n    margin-bottom: 5px;\n    list-style: none;\n    min-height: 1.45em;\n    box-sizing: content-box;\n    width: auto;\n    counter-increment: index;\n}\n\n.cdx-list-settings {\n    display: flex;\n}\n\n.cdx-list-settings .cdx-settings-button {\n    width: 50%;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],u=n(5);function l(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(v(i.parts[a],t))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(v(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),d(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var c=s++;n=a||(a=h(t)),r=y.bind(null,n,c,!1),i=y.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return l(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o];(s=r[a.id]).refs--,i.push(s)}e&&l(f(e,t),t);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.marker/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/codex.editor.marker/dist/bundle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();var o=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="MARK",this.CSS="cdx-marker",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return r(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(t){if(t){var e=this.api.selection.findParentTag(this.tag,this.CSS);e?this.unwrap(e):this.wrap(t)}}},{key:"wrap",value:function(t){var e=document.createElement(this.tag);e.classList.add(this.CSS),e.appendChild(t.extractContents()),t.insertNode(e),this.api.selection.expandToTag(e)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var e=window.getSelection(),n=e.getRangeAt(0),r=n.extractContents();t.parentNode.removeChild(t),n.insertNode(r),e.removeAllRanges(),e.addRange(n)}},{key:"checkState",value:function(){var t=this.api.selection.findParentTag(this.tag,this.CSS);this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return'<svg width="20" height="18"> <path d="M10.458 12.04l2.919 1.686-.781 1.417-.984-.03-.974 1.687H8.674l1.49-2.583-.508-.775.802-1.401zm.546-.952l3.624-6.327a1.597 1.597 0 0 1 2.182-.59 1.632 1.632 0 0 1 .615 2.201l-3.519 6.391-2.902-1.675zm-7.73 3.467h3.465a1.123 1.123 0 1 1 0 2.247H3.273a1.123 1.123 0 1 1 0-2.247z"/> </svg>'}}],[{key:"isInline",get:function(){return!0}}]),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-marker {\n  background: rgba(245,235,111,0.29);\n  padding: 3px 0;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,u=[],c=n(5);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=h(e)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.quote/dist/bundle.js":
/*!********************************************************!*\
  !*** ./node_modules/codex.editor.quote/dist/bundle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();var o=function(){function t(e){var n=e.data,r=e.config,o=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=t.ALIGNMENTS,a=t.DEFAULT_ALIGNMENT;this.api=o,this.quotePlaceholder=r.quotePlaceholder||t.DEFAULT_QUOTE_PLACEHOLDER,this.captionPlaceholder=r.captionPlaceholder||t.DEFAULT_CAPTION_PLACEHOLDER,this.data={quote:n.quote||"",caption:n.caption||"",alignment:Object.values(i).includes(n.alignment)&&n.alignment||r.defaultAlignment||a}}return r(t,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",quote:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption",settingsWrapper:"cdx-quote-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"settings",get:function(){return[{name:"left",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'},{name:"center",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'}]}}],[{key:"displayInToolbox",get:function(){return!0}},{key:"toolboxIcon",get:function(){return'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>'}},{key:"contentless",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_QUOTE_PLACEHOLDER",get:function(){return"Enter a quote"}},{key:"DEFAULT_CAPTION_PLACEHOLDER",get:function(){return"Enter a caption"}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center"}}},{key:"DEFAULT_ALIGNMENT",get:function(){return t.ALIGNMENTS.left}}]),r(t,[{key:"render",value:function(){var t=this._make("blockquote",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.quote],{contentEditable:!0,innerHTML:this.data.quote}),n=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!0,innerHTML:this.data.caption});return e.dataset.placeholder=this.quotePlaceholder,n.dataset.placeholder=this.captionPlaceholder,t.appendChild(e),t.appendChild(n),t}},{key:"save",value:function(t){var e=t.querySelector("."+this.CSS.quote),n=t.querySelector("."+this.CSS.caption);return Object.assign(this.data,{quote:e.innerHTML,caption:n.innerHTML})}},{key:"renderSettings",value:function(){var t=this,e=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.map(function(n){var r=t._make("div",t.CSS.settingsButton,{innerHTML:n.icon,title:function(t){return t[0].toUpperCase()+t.substr(1)}(n.name)+" alignment"});return r.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(r),r}).forEach(function(e,n,r){e.addEventListener("click",function(){t._toggleTune(t.settings[n].name),r.forEach(function(e,n){var r=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,r===t.data.alignment)})})}),e}},{key:"_toggleTune",value:function(t){this.data.alignment=t}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);Array.isArray(n)?(e=o.classList).add.apply(e,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(n)):n&&o.classList.add(n);for(var i in r)o[i]=r[i];return o}}]),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,u=[],c=n(5);function l(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(g(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(g(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=h(e)),r=y.bind(null,n,u,!1),o=y.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return l(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&l(f(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor.simple-image/dist/bundle.js":
/*!***************************************************************!*\
  !*** ./node_modules/codex.editor.simple-image/dist/bundle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();var i=function(){function t(e){var n=e.data,r=(e.config,e.api);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture"},this.data={url:n.url||"",caption:n.caption||"",withBorder:void 0!==n.withBorder&&n.withBorder,withBackground:void 0!==n.withBackground&&n.withBackground,stretched:void 0!==n.stretched&&n.stretched},this.nodes={wrapper:null,imageHolder:null},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'}]}return r(t,[{key:"render",value:function(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("div",this.CSS.loading),r=this._make("div",this.CSS.imageHolder),i=this._make("img"),o=this._make("div",this.CSS.input,{contentEditable:"true",innerHTML:this.data.caption||""});return o.dataset.placeholder="Enter a caption",i.src=this.data.url,e.appendChild(n),i.onload=function(){e.classList.remove(t.CSS.loading),r.appendChild(i),e.appendChild(r),e.appendChild(o),n.remove(),t._acceptTuneView()},i.onerror=function(){console.log("Failed to load an image")},this.nodes.imageHolder=r,this.nodes.wrapper=e,e}},{key:"save",value:function(t){var e=t.querySelector("img"),n=t.querySelector("."+this.CSS.input);return e?Object.assign(this.data,{url:e.src,caption:n.innerHTML}):this.data}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach(function(n){var r=document.createElement("div");r.classList.add(t.CSS.settingsButton),r.innerHTML=n.icon,r.addEventListener("click",function(){t._toggleTune(n.name),r.classList.toggle(t.CSS.settingsButtonActive)}),r.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(r)}),e}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(n)):n&&i.classList.add(n);for(var o in r)i[o]=r[o];return i}},{key:"_toggleTune",value:function(t){this.data[t]=!this.data[t],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var t=this;this.settings.forEach(function(e){t.nodes.imageHolder.classList.toggle(t.CSS.imageHolder+"--"+e.name.replace(/([A-Z])/g,function(t){return"-"+t[0].toLowerCase()}),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.api.blocks.getCurrentBlockIndex(),!!t.data.stretched)})}}],[{key:"onPaste",get:function(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},patternHandler:function(t){return{url:t}}}}}]),t}();t.exports=i},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-image {}\n\n.cdx-simple-image .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-simple-image .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-image img {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-simple-image__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-simple-image__picture--with-background img {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-simple-image__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-simple-image__picture--stretched img {\n  max-width: none;\n  width: 100%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,c=[],u=n(5);function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(g(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(g(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function f(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=s++;n=a||(a=h(e)),r=b.bind(null,n,c,!1),i=b.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return l(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o];(s=r[a.id]).refs--,i.push(s)}t&&l(d(t,e),e);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});

/***/ }),

/***/ "./node_modules/codex.editor/build/codex-editor.js":
/*!*********************************************************!*\
  !*** ./node_modules/codex.editor/build/codex-editor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,o){ true?module.exports=o():undefined}(window,function(){return function(e){var o={};function t(s){if(o[s])return o[s].exports;var n=o[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(s,n,function(o){return e[o]}.bind(null,n));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}({"./build/sprite.svg":
/*!**************************!*\
  !*** ./build/sprite.svg ***!
  \**************************/
/*! no static exports found */function(e,o){e.exports='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 13 15">\n  <path d="M5.996 13.9H1.752c-.613 0-1.05-.137-1.312-.412-.262-.275-.393-.712-.393-1.312V1.737C.047 1.125.18.684.449.416.718.147 1.152.013 1.752.013h4.5a10.5 10.5 0 0 1 1.723.123c.487.082.922.24 1.308.474a3.43 3.43 0 0 1 1.449 1.738c.132.363.199.747.199 1.151 0 1.39-.695 2.406-2.084 3.05 1.825.581 2.737 1.712 2.737 3.391 0 .777-.199 1.477-.596 2.099a3.581 3.581 0 0 1-1.61 1.378c-.424.177-.91.301-1.46.374-.549.073-1.19.109-1.922.109zm-.209-6.167H2.86v4.055h3.022c1.9 0 2.851-.686 2.851-2.056 0-.7-.246-1.21-.739-1.525-.492-.316-1.228-.474-2.207-.474zM2.86 2.125v3.59h2.577c.7 0 1.242-.066 1.624-.198a1.55 1.55 0 0 0 .876-.758c.158-.265.237-.562.237-.89 0-.702-.25-1.167-.748-1.398-.499-.23-1.26-.346-2.283-.346H2.86z"/>\n\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 18 4">\n  <g fill-rule="evenodd">\n    <circle cx="9" cy="2" r="2"/>\n    <circle cx="2" cy="2" r="2"/>\n    <circle cx="16" cy="2" r="2"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 6 15">\n  <path d="M4 5.2l-1.368 7.474c-.095.518-.29.91-.585 1.175a1.468 1.468 0 0 1-1.01.398c-.379 0-.662-.136-.85-.407-.186-.272-.234-.66-.141-1.166L1.4 5.276c.093-.511.282-.896.567-1.155a1.43 1.43 0 0 1 .994-.389c.38 0 .668.13.867.389.199.259.256.618.172 1.08zm-.79-2.67c-.36 0-.648-.111-.863-.332-.215-.221-.286-.534-.212-.938.067-.366.253-.668.559-.905A1.57 1.57 0 0 1 3.673 0c.334 0 .612.107.831.322.22.215.292.527.217.938-.073.398-.256.709-.55.933a1.55 1.55 0 0 1-.961.336z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 15 14">\n    <path transform="rotate(-45 11.83 6.678)" d="M11.332 4.013a51.07 51.07 0 0 1-2.28.001A1.402 1.402 0 0 0 7.7 2.25H3.65a1.4 1.4 0 1 0 0 2.8h.848c.206.86.693 1.61 1.463 2.25H3.65a3.65 3.65 0 1 1 0-7.3H7.7a3.65 3.65 0 0 1 3.632 4.013zM10.9 0h2a3.65 3.65 0 0 1 0 7.3H8.85a3.65 3.65 0 0 1-3.632-4.011A62.68 62.68 0 0 1 7.5 3.273 1.401 1.401 0 0 0 8.85 5.05h4.05a1.4 1.4 0 0 0 0-2.8h-.48C12.274 1.664 11.694.785 10.9 0z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 16 18">\n    <path transform="rotate(-45 8.358 11.636)" d="M9.14 9.433c.008-.12-.087-.686-.112-.81a1.4 1.4 0 0 0-1.64-1.106l-3.977.772a1.4 1.4 0 0 0 .535 2.749l.935-.162s.019 1.093.592 2.223l-1.098.148A3.65 3.65 0 1 1 2.982 6.08l3.976-.773c1.979-.385 3.838.919 4.28 2.886.51 2.276-1.084 2.816-1.073 2.935.011.12-.394-1.59-1.026-1.696zm3.563-.875l2.105 3.439a3.65 3.65 0 0 1-6.19 3.868L6.47 12.431c-1.068-1.71-.964-2.295-.49-3.07.067-.107 1.16-1.466 1.48-.936-.12.036.9 1.33.789 1.398-.656.41-.28.76.13 1.415l2.145 3.435a1.4 1.4 0 0 0 2.375-1.484l-1.132-1.941c.42-.435 1.237-1.054.935-2.69zm1.88-2.256h3.4a1.125 1.125 0 0 1 0 2.25h-3.4a1.125 1.125 0 0 1 0-2.25zM11.849.038c.62 0 1.125.503 1.125 1.125v3.4a1.125 1.125 0 0 1-2.25 0v-3.4c0-.622.503-1.125 1.125-1.125z"/>\n\n</symbol></svg>'},"./node_modules/@codexteam/shortcuts/lib/shortcuts.js":
/*!************************************************************!*\
  !*** ./node_modules/@codexteam/shortcuts/lib/shortcuts.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){
/*!
 * Library for handling keyboard shortcuts
 * @copyright undefined
 * @license MIT
 * @author CodeX (https://ifmo.su)
 * @version 1.0.0
 */
"undefined"!=typeof self&&self,e.exports=function(e){function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var t={};return o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=0)}([function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function e(e,o){for(var t=0;t<o.length;t++){var s=o[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(o,t,s){return t&&e(o.prototype,t),s&&e(o,s),o}}(),n={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46},r={CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],SHIFT:["SHIFT"],ALT:["ALT","OPTION"]},l=function(){function e(o){var t=this;(function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")})(this,e),this.commands={},this.keys={},this.parseShortcutName(o.name),this.element=o.on,this.callback=o.callback,this.executeShortcut=function(e){t.execute(e)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return s(e,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var o=0;o<e.length;o++)if(e[o]=e[o].toUpperCase(),e[o].length>1)for(var t in r)r[t].includes(e[o])&&(this.commands[t]=!0);else this.keys[e[o]]=!0}},{key:"execute",value:function(e){var o=e.ctrlKey||e.metaKey,t=e.shiftKey,s=e.altKey,r={CMD:o,SHIFT:t,ALT:s},l=void 0,i=!0;for(l in this.commands)i=i&&r[l];var u=void 0,d=!0;for(u in this.keys)d=d&&e.keyCode===n[u];i&&d&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),e}();o.default=l}])},"./node_modules/babel-core/register.js":
/*!*********************************************!*\
  !*** ./node_modules/babel-core/register.js ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){e.exports=t(/*! babel-register */"./node_modules/babel-register/lib/browser.js")},"./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(e){if(t(/*! core-js/shim */"./node_modules/core-js/shim.js"),t(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js"),t(/*! core-js/fn/regexp/escape */"./node_modules/core-js/fn/regexp/escape.js"),e._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");e._babelPolyfill=!0;var o="defineProperty";function s(e,t,s){e[t]||Object[o](e,t,{writable:!0,configurable:!0,value:s})}s(String.prototype,"padLeft","".padStart),s(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&s(Array,e,Function.call.bind([][e]))})}).call(this,t(/*! ./../../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},"./node_modules/babel-register/lib/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/babel-register/lib/browser.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0,o.default=function(){},e.exports=o.default},"./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/array/from */"./node_modules/core-js/library/fn/array/from.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/get-iterator */"./node_modules/core-js/library/fn/get-iterator.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/is-iterable */"./node_modules/core-js/library/fn/is-iterable.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/map.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/map.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/map */"./node_modules/core-js/library/fn/map.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/assign */"./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/create */"./node_modules/core-js/library/fn/object/create.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/define-property */"./node_modules/core-js/library/fn/object/define-property.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/entries.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/entries.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/entries */"./node_modules/core-js/library/fn/object/entries.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/get-prototype-of */"./node_modules/core-js/library/fn/object/get-prototype-of.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/keys */"./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/object/set-prototype-of */"./node_modules/core-js/library/fn/object/set-prototype-of.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/promise */"./node_modules/core-js/library/fn/promise.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/symbol */"./node_modules/core-js/library/fn/symbol/index.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){e.exports={default:t(/*! core-js/library/fn/symbol/iterator */"./node_modules/core-js/library/fn/symbol/iterator.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(t(/*! ../core-js/promise */"./node_modules/babel-runtime/core-js/promise.js"));o.default=function(e){return function(){var o=e.apply(this,arguments);return new s.default(function(e,t){return function n(r,l){try{var i=o[r](l),u=i.value}catch(e){return void t(e)}if(!i.done)return s.default.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})}}},"./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0,o.default=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}},"./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(t(/*! ../core-js/object/define-property */"./node_modules/babel-runtime/core-js/object/define-property.js"));o.default=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(e,n.key,n)}}return function(o,t,s){return t&&e(o.prototype,t),s&&e(o,s),o}}()},"./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=l(t(/*! ../core-js/object/set-prototype-of */"./node_modules/babel-runtime/core-js/object/set-prototype-of.js")),n=l(t(/*! ../core-js/object/create */"./node_modules/babel-runtime/core-js/object/create.js")),r=l(t(/*! ../helpers/typeof */"./node_modules/babel-runtime/helpers/typeof.js"));function l(e){return e&&e.__esModule?e:{default:e}}o.default=function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+(void 0===o?"undefined":(0,r.default)(o)));e.prototype=(0,n.default)(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(s.default?(0,s.default)(e,o):e.__proto__=o)}},"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(t(/*! ../helpers/typeof */"./node_modules/babel-runtime/helpers/typeof.js"));o.default=function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!==(void 0===o?"undefined":(0,s.default)(o))&&"function"!=typeof o?e:o}},"./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=r(t(/*! ../core-js/is-iterable */"./node_modules/babel-runtime/core-js/is-iterable.js")),n=r(t(/*! ../core-js/get-iterator */"./node_modules/babel-runtime/core-js/get-iterator.js"));function r(e){return e&&e.__esModule?e:{default:e}}o.default=function(){return function(e,o){if(Array.isArray(e))return e;if((0,s.default)(Object(e)))return function(e,o){var t=[],s=!0,r=!1,l=void 0;try{for(var i,u=(0,n.default)(e);!(s=(i=u.next()).done)&&(t.push(i.value),!o||t.length!==o);s=!0);}catch(e){r=!0,l=e}finally{try{!s&&u.return&&u.return()}finally{if(r)throw l}}return t}(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},"./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(t(/*! ../core-js/array/from */"./node_modules/babel-runtime/core-js/array/from.js"));o.default=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return(0,s.default)(e)}},"./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";o.__esModule=!0;var s=l(t(/*! ../core-js/symbol/iterator */"./node_modules/babel-runtime/core-js/symbol/iterator.js")),n=l(t(/*! ../core-js/symbol */"./node_modules/babel-runtime/core-js/symbol.js")),r="function"==typeof n.default&&"symbol"==typeof s.default?function(e){return typeof e}:function(e){return e&&"function"==typeof n.default&&e.constructor===n.default&&e!==n.default.prototype?"symbol":typeof e};function l(e){return e&&e.__esModule?e:{default:e}}o.default="function"==typeof n.default&&"symbol"===r(s.default)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof n.default&&e.constructor===n.default&&e!==n.default.prototype?"symbol":void 0===e?"undefined":r(e)}},"./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! no static exports found */function(e,o,t){var s=function(){return this}()||Function("return this")(),n=s.regeneratorRuntime&&Object.getOwnPropertyNames(s).indexOf("regeneratorRuntime")>=0,r=n&&s.regeneratorRuntime;if(s.regeneratorRuntime=void 0,e.exports=t(/*! ./runtime */"./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js"),n)s.regeneratorRuntime=r;else try{delete s.regeneratorRuntime}catch(e){s.regeneratorRuntime=void 0}},"./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */function(e,o){!function(o){"use strict";var t,s=Object.prototype,n=s.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag",d="object"==typeof e,c=o.regeneratorRuntime;if(c)d&&(e.exports=c);else{(c=o.regeneratorRuntime=d?e.exports:{}).wrap=y;var a="suspendedStart",m="suspendedYield",f="executing",j="completed",_={},p={};p[l]=function(){return this};var h=Object.getPrototypeOf,b=h&&h(h(B([])));b&&b!==s&&n.call(b,l)&&(p=b);var v=w.prototype=k.prototype=Object.create(p);x.prototype=v.constructor=w,w.constructor=x,w[u]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var o="function"==typeof e&&e.constructor;return!!o&&(o===x||"GeneratorFunction"===(o.displayName||o.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(v),e},c.awrap=function(e){return{__await:e}},E(S.prototype),S.prototype[i]=function(){return this},c.AsyncIterator=S,c.async=function(e,o,t,s){var n=new S(y(e,o,t,s));return c.isGeneratorFunction(o)?n:n.next().then(function(e){return e.done?e.value:n.next()})},E(v),v[u]="Generator",v[l]=function(){return this},v.toString=function(){return"[object Generator]"},c.keys=function(e){var o=[];for(var t in e)o.push(t);return o.reverse(),function t(){for(;o.length;){var s=o.pop();if(s in e)return t.value=s,t.done=!1,t}return t.done=!0,t}},c.values=B,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var o=this;function s(s,n){return i.type="throw",i.arg=e,o.next=s,n&&(o.method="next",o.arg=t),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],i=l.completion;if("root"===l.tryLoc)return s("end");if(l.tryLoc<=this.prev){var u=n.call(l,"catchLoc"),d=n.call(l,"finallyLoc");if(u&&d){if(this.prev<l.catchLoc)return s(l.catchLoc,!0);if(this.prev<l.finallyLoc)return s(l.finallyLoc)}else if(u){if(this.prev<l.catchLoc)return s(l.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return s(l.finallyLoc)}}}},abrupt:function(e,o){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=o&&o<=r.finallyLoc&&(r=null);var l=r?r.completion:{};return l.type=e,l.arg=o,r?(this.method="next",this.next=r.finallyLoc,_):this.complete(l)},complete:function(e,o){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&o&&(this.next=o),_},finish:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),M(t),_}},catch:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.tryLoc===e){var s=t.completion;if("throw"===s.type){var n=s.arg;M(t)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,o,s){return this.delegate={iterator:B(e),resultName:o,nextLoc:s},"next"===this.method&&(this.arg=t),_}}}function y(e,o,t,s){var n=o&&o.prototype instanceof k?o:k,r=Object.create(n.prototype),l=new O(s||[]);return r._invoke=function(e,o,t){var s=a;return function(n,r){if(s===f)throw new Error("Generator is already running");if(s===j){if("throw"===n)throw r;return N()}for(t.method=n,t.arg=r;;){var l=t.delegate;if(l){var i=C(l,t);if(i){if(i===_)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(s===a)throw s=j,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);s=f;var u=g(e,o,t);if("normal"===u.type){if(s=t.done?j:m,u.arg===_)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(s=j,t.method="throw",t.arg=u.arg)}}}(e,t,l),r}function g(e,o,t){try{return{type:"normal",arg:e.call(o,t)}}catch(e){return{type:"throw",arg:e}}}function k(){}function x(){}function w(){}function E(e){["next","throw","return"].forEach(function(o){e[o]=function(e){return this._invoke(o,e)}})}function S(e){var o;this._invoke=function(t,s){function r(){return new Promise(function(o,r){!function o(t,s,r,l){var i=g(e[t],e,s);if("throw"!==i.type){var u=i.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?Promise.resolve(d.__await).then(function(e){o("next",e,r,l)},function(e){o("throw",e,r,l)}):Promise.resolve(d).then(function(e){u.value=e,r(u)},l)}l(i.arg)}(t,s,o,r)})}return o=o?o.then(r,r):r()}}function C(e,o){var s=e.iterator[o.method];if(s===t){if(o.delegate=null,"throw"===o.method){if(e.iterator.return&&(o.method="return",o.arg=t,C(e,o),"throw"===o.method))return _;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var n=g(s,e.iterator,o.arg);if("throw"===n.type)return o.method="throw",o.arg=n.arg,o.delegate=null,_;var r=n.arg;return r?r.done?(o[e.resultName]=r.value,o.next=e.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,_):r:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,_)}function T(e){var o={tryLoc:e[0]};1 in e&&(o.catchLoc=e[1]),2 in e&&(o.finallyLoc=e[2],o.afterLoc=e[3]),this.tryEntries.push(o)}function M(e){var o=e.completion||{};o.type="normal",delete o.arg,e.completion=o}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function B(e){if(e){var o=e[l];if(o)return o.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,r=function o(){for(;++s<e.length;)if(n.call(e,s))return o.value=e[s],o.done=!1,o;return o.value=t,o.done=!0,o};return r.next=r}}return{next:N}}function N(){return{value:t,done:!0}}}(function(){return this}()||Function("return this")())},"./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){e.exports=t(/*! regenerator-runtime */"./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js")},"./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/core.regexp.escape */"./node_modules/core-js/modules/core.regexp.escape.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/modules/_core.js").RegExp.escape},"./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),t(/*! ../../modules/es6.array.from */"./node_modules/core-js/library/modules/es6.array.from.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Array.from},"./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js"),t(/*! ../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),e.exports=t(/*! ../modules/core.get-iterator */"./node_modules/core-js/library/modules/core.get-iterator.js")},"./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js"),t(/*! ../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),e.exports=t(/*! ../modules/core.is-iterable */"./node_modules/core-js/library/modules/core.is-iterable.js")},"./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../modules/es6.object.to-string */"./node_modules/core-js/library/modules/es6.object.to-string.js"),t(/*! ../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),t(/*! ../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js"),t(/*! ../modules/es6.map */"./node_modules/core-js/library/modules/es6.map.js"),t(/*! ../modules/es7.map.to-json */"./node_modules/core-js/library/modules/es7.map.to-json.js"),t(/*! ../modules/es7.map.of */"./node_modules/core-js/library/modules/es7.map.of.js"),t(/*! ../modules/es7.map.from */"./node_modules/core-js/library/modules/es7.map.from.js"),e.exports=t(/*! ../modules/_core */"./node_modules/core-js/library/modules/_core.js").Map},"./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.object.assign */"./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.object.create */"./node_modules/core-js/library/modules/es6.object.create.js");var s=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,o){return s.create(e,o)}},"./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.object.define-property */"./node_modules/core-js/library/modules/es6.object.define-property.js");var s=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,o,t){return s.defineProperty(e,o,t)}},"./node_modules/core-js/library/fn/object/entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/entries.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es7.object.entries */"./node_modules/core-js/library/modules/es7.object.entries.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.entries},"./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.object.get-prototype-of */"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf},"./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.object.keys */"./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.object.set-prototype-of */"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf},"./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../modules/es6.object.to-string */"./node_modules/core-js/library/modules/es6.object.to-string.js"),t(/*! ../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),t(/*! ../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js"),t(/*! ../modules/es6.promise */"./node_modules/core-js/library/modules/es6.promise.js"),t(/*! ../modules/es7.promise.finally */"./node_modules/core-js/library/modules/es7.promise.finally.js"),t(/*! ../modules/es7.promise.try */"./node_modules/core-js/library/modules/es7.promise.try.js"),e.exports=t(/*! ../modules/_core */"./node_modules/core-js/library/modules/_core.js").Promise},"./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.symbol */"./node_modules/core-js/library/modules/es6.symbol.js"),t(/*! ../../modules/es6.object.to-string */"./node_modules/core-js/library/modules/es6.object.to-string.js"),t(/*! ../../modules/es7.symbol.async-iterator */"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js"),t(/*! ../../modules/es7.symbol.observable */"./node_modules/core-js/library/modules/es7.symbol.observable.js"),e.exports=t(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Symbol},"./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ../../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),t(/*! ../../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js"),e.exports=t(/*! ../../modules/_wks-ext */"./node_modules/core-js/library/modules/_wks-ext.js").f("iterator")},"./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o){e.exports=function(){}},"./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o,t,s){if(!(e instanceof o)||void 0!==s&&s in e)throw TypeError(t+": incorrect invocation!");return e}},"./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js");e.exports=function(e,o){var t=[];return s(e,!1,t.push,t,o),t}},"./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),n=t(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),r=t(/*! ./_to-absolute-index */"./node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(o,t,l){var i,u=s(o),d=n(u.length),c=r(l,d);if(e&&t!=t){for(;d>c;)if((i=u[c++])!=i)return!0}else for(;d>c;c++)if((e||c in u)&&u[c]===t)return e||c||0;return!e&&-1}}},"./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),n=t(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),r=t(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),l=t(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),i=t(/*! ./_array-species-create */"./node_modules/core-js/library/modules/_array-species-create.js");e.exports=function(e,o){var t=1==e,u=2==e,d=3==e,c=4==e,a=6==e,m=5==e||a,f=o||i;return function(o,i,j){for(var _,p,h=r(o),b=n(h),v=s(i,j,3),y=l(b.length),g=0,k=t?f(o,y):u?f(o,0):void 0;y>g;g++)if((m||g in b)&&(p=v(_=b[g],g,h),e))if(t)k[g]=p;else if(p)switch(e){case 3:return!0;case 5:return _;case 6:return g;case 2:k.push(_)}else if(c)return!1;return a?-1:d||c?c:k}}},"./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),n=t(/*! ./_is-array */"./node_modules/core-js/library/modules/_is-array.js"),r=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species");e.exports=function(e){var o;return n(e)&&("function"!=typeof(o=e.constructor)||o!==Array&&!n(o.prototype)||(o=void 0),s(o)&&null===(o=o[r])&&(o=void 0)),void 0===o?Array:o}},"./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_array-species-constructor */"./node_modules/core-js/library/modules/_array-species-constructor.js");e.exports=function(e,o){return new(s(e))(o)}},"./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js"),n=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag"),r="Arguments"==s(function(){return arguments}());e.exports=function(e){var o,t,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,o){try{return e[o]}catch(e){}}(o=Object(e),n))?t:r?s(o):"Object"==(l=s(o))&&"function"==typeof o.callee?"Arguments":l}},"./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},"./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,n=t(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js"),r=t(/*! ./_redefine-all */"./node_modules/core-js/library/modules/_redefine-all.js"),l=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),i=t(/*! ./_an-instance */"./node_modules/core-js/library/modules/_an-instance.js"),u=t(/*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js"),d=t(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js"),c=t(/*! ./_iter-step */"./node_modules/core-js/library/modules/_iter-step.js"),a=t(/*! ./_set-species */"./node_modules/core-js/library/modules/_set-species.js"),m=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),f=t(/*! ./_meta */"./node_modules/core-js/library/modules/_meta.js").fastKey,j=t(/*! ./_validate-collection */"./node_modules/core-js/library/modules/_validate-collection.js"),_=m?"_s":"size",p=function(e,o){var t,s=f(o);if("F"!==s)return e._i[s];for(t=e._f;t;t=t.n)if(t.k==o)return t};e.exports={getConstructor:function(e,o,t,d){var c=e(function(e,s){i(e,c,o,"_i"),e._t=o,e._i=n(null),e._f=void 0,e._l=void 0,e[_]=0,void 0!=s&&u(s,t,e[d],e)});return r(c.prototype,{clear:function(){for(var e=j(this,o),t=e._i,s=e._f;s;s=s.n)s.r=!0,s.p&&(s.p=s.p.n=void 0),delete t[s.i];e._f=e._l=void 0,e[_]=0},delete:function(e){var t=j(this,o),s=p(t,e);if(s){var n=s.n,r=s.p;delete t._i[s.i],s.r=!0,r&&(r.n=n),n&&(n.p=r),t._f==s&&(t._f=n),t._l==s&&(t._l=r),t[_]--}return!!s},forEach:function(e){j(this,o);for(var t,s=l(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(s(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!p(j(this,o),e)}}),m&&s(c.prototype,"size",{get:function(){return j(this,o)[_]}}),c},def:function(e,o,t){var s,n,r=p(e,o);return r?r.v=t:(e._l=r={i:n=f(o,!0),k:o,v:t,p:s=e._l,n:void 0,r:!1},e._f||(e._f=r),s&&(s.n=r),e[_]++,"F"!==n&&(e._i[n]=r)),e},getEntry:p,setStrong:function(e,o,t){d(e,o,function(e,t){this._t=j(e,o),this._k=t,this._l=void 0},function(){for(var e=this._k,o=this._l;o&&o.r;)o=o.p;return this._t&&(this._l=o=o?o.n:this._t._f)?c(0,"keys"==e?o.k:"values"==e?o.v:[o.k,o.v]):(this._t=void 0,c(1))},t?"entries":"values",!t,!0),a(o)}}},"./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),n=t(/*! ./_array-from-iterable */"./node_modules/core-js/library/modules/_array-from-iterable.js");e.exports=function(e){return function(){if(s(this)!=e)throw TypeError(e+"#toJSON isn't generic");return n(this)}}},"./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),r=t(/*! ./_meta */"./node_modules/core-js/library/modules/_meta.js"),l=t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js"),i=t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=t(/*! ./_redefine-all */"./node_modules/core-js/library/modules/_redefine-all.js"),d=t(/*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js"),c=t(/*! ./_an-instance */"./node_modules/core-js/library/modules/_an-instance.js"),a=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),m=t(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),f=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,j=t(/*! ./_array-methods */"./node_modules/core-js/library/modules/_array-methods.js")(0),_=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js");e.exports=function(e,o,t,p,h,b){var v=s[e],y=v,g=h?"set":"add",k=y&&y.prototype,x={};return _&&"function"==typeof y&&(b||k.forEach&&!l(function(){(new y).entries().next()}))?(y=o(function(o,t){c(o,y,e,"_c"),o._c=new v,void 0!=t&&d(t,h,o[g],o)}),j("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var o="add"==e||"set"==e;e in k&&(!b||"clear"!=e)&&i(y.prototype,e,function(t,s){if(c(this,y,e),!o&&b&&!a(t))return"get"==e&&void 0;var n=this._c[e](0===t?0:t,s);return o?this:n})}),b||f(y.prototype,"size",{get:function(){return this._c.size}})):(y=p.getConstructor(o,e,h,g),u(y.prototype,t),r.NEED=!0),m(y,e),x[e]=y,n(n.G+n.W+n.F,x),b||p.setStrong(y,e,h),y}},"./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},"./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=function(e,o,t){o in e?s.f(e,o,n(0,t)):e[o]=t}},"./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,o,t){if(s(e),void 0===o)return e;switch(t){case 1:return function(t){return e.call(o,t)};case 2:return function(t,s){return e.call(o,t,s)};case 3:return function(t,s,n){return e.call(o,t,s,n)}}return function(){return e.apply(o,arguments)}}},"./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){e.exports=!t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),n=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document,r=s(n)&&s(n.createElement);e.exports=function(e){return r?n.createElement(e):{}}},"./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js"),n=t(/*! ./_object-gops */"./node_modules/core-js/library/modules/_object-gops.js"),r=t(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js");e.exports=function(e){var o=s(e),t=n.f;if(t)for(var l,i=t(e),u=r.f,d=0;i.length>d;)u.call(e,l=i[d++])&&o.push(l);return o}},"./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),r=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),l=t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),i=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),u=function(e,o,t){var d,c,a,m=e&u.F,f=e&u.G,j=e&u.S,_=e&u.P,p=e&u.B,h=e&u.W,b=f?n:n[o]||(n[o]={}),v=b.prototype,y=f?s:j?s[o]:(s[o]||{}).prototype;for(d in f&&(t=o),t)(c=!m&&y&&void 0!==y[d])&&i(b,d)||(a=c?y[d]:t[d],b[d]=f&&"function"!=typeof y[d]?t[d]:p&&c?r(a,s):h&&y[d]==a?function(e){var o=function(o,t,s){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(o);case 2:return new e(o,t)}return new e(o,t,s)}return e.apply(this,arguments)};return o.prototype=e.prototype,o}(a):_&&"function"==typeof a?r(Function.call,a):a,_&&((b.virtual||(b.virtual={}))[d]=a,e&u.R&&v&&!v[d]&&l(v,d,a)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),n=t(/*! ./_iter-call */"./node_modules/core-js/library/modules/_iter-call.js"),r=t(/*! ./_is-array-iter */"./node_modules/core-js/library/modules/_is-array-iter.js"),l=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),i=t(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),u=t(/*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js"),d={},c={};(o=e.exports=function(e,o,t,a,m){var f,j,_,p,h=m?function(){return e}:u(e),b=s(t,a,o?2:1),v=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");if(r(h)){for(f=i(e.length);f>v;v++)if((p=o?b(l(j=e[v])[0],j[1]):b(e[v]))===d||p===c)return p}else for(_=h.call(e);!(j=_.next()).done;)if((p=n(_,b,j.value,o))===d||p===c)return p}).BREAK=d,o.RETURN=c},"./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},"./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){var t={}.hasOwnProperty;e.exports=function(e,o){return t.call(e,o)}},"./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?function(e,o,t){return s.f(e,o,n(1,t))}:function(e,o,t){return e[o]=t,e}},"./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document;e.exports=s&&s.documentElement},"./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){e.exports=!t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")&&!t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(t(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o,t){var s=void 0===t;switch(o.length){case 0:return s?e():e.call(t);case 1:return s?e(o[0]):e.call(t,o[0]);case 2:return s?e(o[0],o[1]):e.call(t,o[0],o[1]);case 3:return s?e(o[0],o[1],o[2]):e.call(t,o[0],o[1],o[2]);case 4:return s?e(o[0],o[1],o[2],o[3]):e.call(t,o[0],o[1],o[2],o[3])}return e.apply(t,o)}},"./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==s(e)?e.split(""):Object(e)}},"./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),n=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||r[n]===e)}},"./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");e.exports=Array.isArray||function(e){return"Array"==s(e)}},"./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,o,t,n){try{return n?o(s(t)[0],t[1]):o(t)}catch(o){var r=e.return;throw void 0!==r&&s(r.call(e)),o}}},"./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js"),r=t(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),l={};t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")(l,t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,o,t){e.prototype=s(l,{next:n(1,t)}),r(e,o+" Iterator")}},"./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),n=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),r=t(/*! ./_redefine */"./node_modules/core-js/library/modules/_redefine.js"),l=t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),i=t(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),u=t(/*! ./_iter-create */"./node_modules/core-js/library/modules/_iter-create.js"),d=t(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),c=t(/*! ./_object-gpo */"./node_modules/core-js/library/modules/_object-gpo.js"),a=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,o,t,j,_,p,h){u(t,o,j);var b,v,y,g=function(e){if(!m&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new t(this,e)}}return function(){return new t(this,e)}},k=o+" Iterator",x="values"==_,w=!1,E=e.prototype,S=E[a]||E["@@iterator"]||_&&E[_],C=S||g(_),T=_?x?g("entries"):C:void 0,M="Array"==o&&E.entries||S;if(M&&(y=c(M.call(new e)))!==Object.prototype&&y.next&&(d(y,k,!0),s||"function"==typeof y[a]||l(y,a,f)),x&&S&&"values"!==S.name&&(w=!0,C=function(){return S.call(this)}),s&&!h||!m&&!w&&E[a]||l(E,a,C),i[o]=C,i[k]=f,_)if(b={values:x?C:g("values"),keys:p?C:g("keys"),entries:T},h)for(v in b)v in E||r(E,v,b[v]);else n(n.P+n.F*(m||w),o,b);return b}},"./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=!1;try{var r=[7][s]();r.return=function(){n=!0},Array.from(r,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!n)return!1;var t=!1;try{var r=[7],l=r[s]();l.next=function(){return{done:t=!0}},r[s]=function(){return l},e(r)}catch(e){}return t}},"./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{value:o,done:!!e}}},"./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */function(e,o){e.exports={}},"./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o){e.exports=!0},"./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js")("meta"),n=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),r=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),l=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,i=0,u=Object.isExtensible||function(){return!0},d=!t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return u(Object.preventExtensions({}))}),c=function(e){l(e,s,{value:{i:"O"+ ++i,w:{}}})},a=e.exports={KEY:s,NEED:!1,fastKey:function(e,o){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,s)){if(!u(e))return"F";if(!o)return"E";c(e)}return e[s].i},getWeak:function(e,o){if(!r(e,s)){if(!u(e))return!0;if(!o)return!1;c(e)}return e[s].w},onFreeze:function(e){return d&&a.NEED&&u(e)&&!r(e,s)&&c(e),e}}},"./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_task */"./node_modules/core-js/library/modules/_task.js").set,r=s.MutationObserver||s.WebKitMutationObserver,l=s.process,i=s.Promise,u="process"==t(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js")(l);e.exports=function(){var e,o,t,d=function(){var s,n;for(u&&(s=l.domain)&&s.exit();e;){n=e.fn,e=e.next;try{n()}catch(s){throw e?t():o=void 0,s}}o=void 0,s&&s.enter()};if(u)t=function(){l.nextTick(d)};else if(!r||s.navigator&&s.navigator.standalone)if(i&&i.resolve){var c=i.resolve(void 0);t=function(){c.then(d)}}else t=function(){n.call(s,d)};else{var a=!0,m=document.createTextNode("");new r(d).observe(m,{characterData:!0}),t=function(){m.data=a=!a}}return function(s){var n={fn:s,next:void 0};o&&(o.next=n),e||(e=n,t()),o=n}}},"./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");e.exports.f=function(e){return new function(e){var o,t;this.promise=new e(function(e,s){if(void 0!==o||void 0!==t)throw TypeError("Bad Promise constructor");o=e,t=s}),this.resolve=s(o),this.reject=s(t)}(e)}},"./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js"),n=t(/*! ./_object-gops */"./node_modules/core-js/library/modules/_object-gops.js"),r=t(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js"),l=t(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),i=t(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),u=Object.assign;e.exports=!u||t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){var e={},o={},t=Symbol(),s="abcdefghijklmnopqrst";return e[t]=7,s.split("").forEach(function(e){o[e]=e}),7!=u({},e)[t]||Object.keys(u({},o)).join("")!=s})?function(e,o){for(var t=l(e),u=arguments.length,d=1,c=n.f,a=r.f;u>d;)for(var m,f=i(arguments[d++]),j=c?s(f).concat(c(f)):s(f),_=j.length,p=0;_>p;)a.call(f,m=j[p++])&&(t[m]=f[m]);return t}:u},"./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=t(/*! ./_object-dps */"./node_modules/core-js/library/modules/_object-dps.js"),r=t(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js"),l=t(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),i=function(){},u=function(){var e,o=t(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("iframe"),s=r.length;for(o.style.display="none",t(/*! ./_html */"./node_modules/core-js/library/modules/_html.js").appendChild(o),o.src="javascript:",(e=o.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;s--;)delete u.prototype[r[s]];return u()};e.exports=Object.create||function(e,o){var t;return null!==e?(i.prototype=s(e),t=new i,i.prototype=null,t[l]=e):t=u(),void 0===o?t:n(t,o)}},"./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=t(/*! ./_ie8-dom-define */"./node_modules/core-js/library/modules/_ie8-dom-define.js"),r=t(/*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js"),l=Object.defineProperty;o.f=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,o,t){if(s(e),o=r(o,!0),s(t),n)try{return l(e,o,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[o]=t.value),e}},"./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),n=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),r=t(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js");e.exports=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,o){n(e);for(var t,l=r(o),i=l.length,u=0;i>u;)s.f(e,t=l[u++],o[t]);return e}},"./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js"),r=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),l=t(/*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js"),i=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),u=t(/*! ./_ie8-dom-define */"./node_modules/core-js/library/modules/_ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;o.f=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?d:function(e,o){if(e=r(e),o=l(o,!0),u)try{return d(e,o)}catch(e){}if(i(e,o))return n(!s.f.call(e,o),e[o])}},"./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),n=t(/*! ./_object-gopn */"./node_modules/core-js/library/modules/_object-gopn.js").f,r={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"[object Window]"==r.call(e)?function(e){try{return n(e)}catch(e){return l.slice()}}(e):n(s(e))}},"./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys-internal */"./node_modules/core-js/library/modules/_object-keys-internal.js"),n=t(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js").concat("length","prototype");o.f=Object.getOwnPropertyNames||function(e){return s(e,n)}},"./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o){o.f=Object.getOwnPropertySymbols},"./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),n=t(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),r=t(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),l=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=n(e),s(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},"./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),r=t(/*! ./_array-includes */"./node_modules/core-js/library/modules/_array-includes.js")(!1),l=t(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var t,i=n(e),u=0,d=[];for(t in i)t!=l&&s(i,t)&&d.push(t);for(;o.length>u;)s(i,t=o[u++])&&(~r(d,t)||d.push(t));return d}},"./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys-internal */"./node_modules/core-js/library/modules/_object-keys-internal.js"),n=t(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return s(e,n)}},"./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o){o.f={}.propertyIsEnumerable},"./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),r=t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,o){var t=(n.Object||{})[e]||Object[e],l={};l[e]=o(t),s(s.S+s.F*r(function(){t(1)}),"Object",l)}},"./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),r=t(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js").f;e.exports=function(e){return function(o){for(var t,l=n(o),i=s(l),u=i.length,d=0,c=[];u>d;)r.call(l,t=i[d++])&&c.push(e?[t,l[t]]:l[t]);return c}}},"./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},"./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),r=t(/*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js");e.exports=function(e,o){if(s(e),n(o)&&o.constructor===e)return o;var t=r.f(e);return(0,t.resolve)(o),t.promise}},"./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");e.exports=function(e,o,t){for(var n in o)t&&e[n]?e[n]=o[n]:s(e,n,o[n]);return e}},"./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){e.exports=t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")},"./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=t(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js"),r=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),l=t(/*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js");e.exports=function(e){s(s.S,e,{from:function(e){var o,t,s,i,u=arguments[1];return n(this),(o=void 0!==u)&&n(u),void 0==e?new this:(t=[],o?(s=0,i=r(u,arguments[2],2),l(e,!1,function(e){t.push(i(e,s++))})):l(e,!1,t.push,t),new this(t))}})}},"./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");e.exports=function(e){s(s.S,e,{of:function(){for(var e=arguments.length,o=new Array(e);e--;)o[e]=arguments[e];return new this(o)}})}},"./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),n=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),r=function(e,o){if(n(e),!s(o)&&null!==o)throw TypeError(o+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,o,s){try{(s=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js")(Function.call,t(/*! ./_object-gopd */"./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype,"__proto__").set,2))(e,[]),o=!(e instanceof Array)}catch(e){o=!0}return function(e,t){return r(e,t),o?e.__proto__=t:s(e,t),e}}({},!1):void 0),check:r}},"./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),r=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),l=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),i=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species");e.exports=function(e){var o="function"==typeof n[e]?n[e]:s[e];l&&o&&!o[i]&&r.f(o,i,{configurable:!0,get:function(){return this}})}},"./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,n=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),r=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag");e.exports=function(e,o,t){e&&!n(e=t?e:e.prototype,r)&&s(e,r,{configurable:!0,value:o})}},"./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("keys"),n=t(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return s[e]||(s[e]=n(e))}},"./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),n=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(e.exports=function(e,o){return r[e]||(r[e]=void 0!==o?o:{})})("versions",[]).push({version:s.version,mode:t(/*! ./_library */"./node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=t(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js"),r=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species");e.exports=function(e,o){var t,l=s(e).constructor;return void 0===l||void 0==(t=s(l)[r])?o:n(t)}},"./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),n=t(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return function(o,t){var r,l,i=String(n(o)),u=s(t),d=i.length;return u<0||u>=d?e?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===d||(l=i.charCodeAt(u+1))<56320||l>57343?e?i.charAt(u):r:e?i.slice(u,u+2):l-56320+(r-55296<<10)+65536}}},"./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s,n,r,l=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),i=t(/*! ./_invoke */"./node_modules/core-js/library/modules/_invoke.js"),u=t(/*! ./_html */"./node_modules/core-js/library/modules/_html.js"),d=t(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js"),c=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),a=c.process,m=c.setImmediate,f=c.clearImmediate,j=c.MessageChannel,_=c.Dispatch,p=0,h={},b=function(){var e=+this;if(h.hasOwnProperty(e)){var o=h[e];delete h[e],o()}},v=function(e){b.call(e.data)};m&&f||(m=function(e){for(var o=[],t=1;arguments.length>t;)o.push(arguments[t++]);return h[++p]=function(){i("function"==typeof e?e:Function(e),o)},s(p),p},f=function(e){delete h[e]},"process"==t(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js")(a)?s=function(e){a.nextTick(l(b,e,1))}:_&&_.now?s=function(e){_.now(l(b,e,1))}:j?(r=(n=new j).port2,n.port1.onmessage=v,s=l(r.postMessage,r,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(s=function(e){c.postMessage(e+"","*")},c.addEventListener("message",v,!1)):s="onreadystatechange"in d("script")?function(e){u.appendChild(d("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(l(b,e,1),0)}),e.exports={set:m,clear:f}},"./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),n=Math.max,r=Math.min;e.exports=function(e,o){return(e=s(e))<0?n(e+o,0):r(e,o)}},"./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o){var t=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:t)(e)}},"./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),n=t(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return s(n(e))}},"./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),n=Math.min;e.exports=function(e){return e>0?n(s(e),9007199254740991):0}},"./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return Object(s(e))}},"./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,o){if(!s(e))return e;var t,n;if(o&&"function"==typeof(t=e.toString)&&!s(n=t.call(e)))return n;if("function"==typeof(t=e.valueOf)&&!s(n=t.call(e)))return n;if(!o&&"function"==typeof(t=e.toString)&&!s(n=t.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){var t=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+s).toString(36))}},"./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").navigator;e.exports=s&&s.userAgent||""},"./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,o){if(!s(e)||e._t!==o)throw TypeError("Incompatible receiver, "+o+" required!");return e}},"./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),r=t(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),l=t(/*! ./_wks-ext */"./node_modules/core-js/library/modules/_wks-ext.js"),i=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f;e.exports=function(e){var o=n.Symbol||(n.Symbol=r?{}:s.Symbol||{});"_"==e.charAt(0)||e in o||i(o,e,{value:l.f(e)})}},"./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){o.f=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")},"./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("wks"),n=t(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js"),r=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").Symbol,l="function"==typeof r;(e.exports=function(e){return s[e]||(s[e]=l&&r[e]||(l?r:n)("Symbol."+e))}).store=s},"./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),n=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),r=t(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");e.exports=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||r[s(e)]}},"./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=t(/*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js");e.exports=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").getIterator=function(e){var o=n(e);if("function"!=typeof o)throw TypeError(e+" is not iterable!");return s(o.call(e))}},"./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),n=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),r=t(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");e.exports=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").isIterable=function(e){var o=Object(e);return void 0!==o[n]||"@@iterator"in o||r.hasOwnProperty(s(o))}},"./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),n=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),r=t(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),l=t(/*! ./_iter-call */"./node_modules/core-js/library/modules/_iter-call.js"),i=t(/*! ./_is-array-iter */"./node_modules/core-js/library/modules/_is-array-iter.js"),u=t(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),d=t(/*! ./_create-property */"./node_modules/core-js/library/modules/_create-property.js"),c=t(/*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js");n(n.S+n.F*!t(/*! ./_iter-detect */"./node_modules/core-js/library/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function(e){var o,t,n,a,m=r(e),f="function"==typeof this?this:Array,j=arguments.length,_=j>1?arguments[1]:void 0,p=void 0!==_,h=0,b=c(m);if(p&&(_=s(_,j>2?arguments[2]:void 0,2)),void 0==b||f==Array&&i(b))for(t=new f(o=u(m.length));o>h;h++)d(t,h,p?_(m[h],h):m[h]);else for(a=b.call(m),t=new f;!(n=a.next()).done;h++)d(t,h,p?l(a,_,[n.value,h],!0):n.value);return t.length=h,t}})},"./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_add-to-unscopables */"./node_modules/core-js/library/modules/_add-to-unscopables.js"),n=t(/*! ./_iter-step */"./node_modules/core-js/library/modules/_iter-step.js"),r=t(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),l=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js");e.exports=t(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(Array,"Array",function(e,o){this._t=l(e),this._i=0,this._k=o},function(){var e=this._t,o=this._k,t=this._i++;return!e||t>=e.length?(this._t=void 0,n(1)):n(0,"keys"==o?t:"values"==o?e[t]:[t,e[t]])},"values"),r.Arguments=r.Array,s("keys"),s("values"),s("entries")},"./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_collection-strong */"./node_modules/core-js/library/modules/_collection-strong.js"),n=t(/*! ./_validate-collection */"./node_modules/core-js/library/modules/_validate-collection.js");e.exports=t(/*! ./_collection */"./node_modules/core-js/library/modules/_collection.js")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var o=s.getEntry(n(this,"Map"),e);return o&&o.v},set:function(e,o){return s.def(n(this,"Map"),0===e?0:e,o)}},s,!0)},"./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S+s.F,"Object",{assign:t(/*! ./_object-assign */"./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S,"Object",{create:t(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js")})},"./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S+s.F*!t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),"Object",{defineProperty:t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f})},"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),n=t(/*! ./_object-gpo */"./node_modules/core-js/library/modules/_object-gpo.js");t(/*! ./_object-sap */"./node_modules/core-js/library/modules/_object-sap.js")("getPrototypeOf",function(){return function(e){return n(s(e))}})},"./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),n=t(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js");t(/*! ./_object-sap */"./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return n(s(e))}})},"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S,"Object",{setPrototypeOf:t(/*! ./_set-proto */"./node_modules/core-js/library/modules/_set-proto.js").set})},"./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o){},"./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s,n,r,l,i=t(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),u=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),d=t(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),c=t(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),a=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),m=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),f=t(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js"),j=t(/*! ./_an-instance */"./node_modules/core-js/library/modules/_an-instance.js"),_=t(/*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js"),p=t(/*! ./_species-constructor */"./node_modules/core-js/library/modules/_species-constructor.js"),h=t(/*! ./_task */"./node_modules/core-js/library/modules/_task.js").set,b=t(/*! ./_microtask */"./node_modules/core-js/library/modules/_microtask.js")(),v=t(/*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js"),y=t(/*! ./_perform */"./node_modules/core-js/library/modules/_perform.js"),g=t(/*! ./_user-agent */"./node_modules/core-js/library/modules/_user-agent.js"),k=t(/*! ./_promise-resolve */"./node_modules/core-js/library/modules/_promise-resolve.js"),x=u.TypeError,w=u.process,E=w&&w.versions,S=E&&E.v8||"",C=u.Promise,T="process"==c(w),M=function(){},O=n=v.f,B=!!function(){try{var e=C.resolve(1),o=(e.constructor={})[t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species")]=function(e){e(M,M)};return(T||"function"==typeof PromiseRejectionEvent)&&e.then(M)instanceof o&&0!==S.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(e){}}(),N=function(e){var o;return!(!m(e)||"function"!=typeof(o=e.then))&&o},A=function(e,o){if(!e._n){e._n=!0;var t=e._c;b(function(){for(var s=e._v,n=1==e._s,r=0,l=function(o){var t,r,l,i=n?o.ok:o.fail,u=o.resolve,d=o.reject,c=o.domain;try{i?(n||(2==e._h&&L(e),e._h=1),!0===i?t=s:(c&&c.enter(),t=i(s),c&&(c.exit(),l=!0)),t===o.promise?d(x("Promise-chain cycle")):(r=N(t))?r.call(t,u,d):u(t)):d(s)}catch(e){c&&!l&&c.exit(),d(e)}};t.length>r;)l(t[r++]);e._c=[],e._n=!1,o&&!e._h&&I(e)})}},I=function(e){h.call(u,function(){var o,t,s,n=e._v,r=P(e);if(r&&(o=y(function(){T?w.emit("unhandledRejection",n,e):(t=u.onunhandledrejection)?t({promise:e,reason:n}):(s=u.console)&&s.error&&s.error("Unhandled promise rejection",n)}),e._h=T||P(e)?2:1),e._a=void 0,r&&o.e)throw o.v})},P=function(e){return 1!==e._h&&0===(e._a||e._c).length},L=function(e){h.call(u,function(){var o;T?w.emit("rejectionHandled",e):(o=u.onrejectionhandled)&&o({promise:e,reason:e._v})})},R=function(e){var o=this;o._d||(o._d=!0,(o=o._w||o)._v=e,o._s=2,o._a||(o._a=o._c.slice()),A(o,!0))},F=function(e){var o,t=this;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw x("Promise can't be resolved itself");(o=N(e))?b(function(){var s={_w:t,_d:!1};try{o.call(e,d(F,s,1),d(R,s,1))}catch(e){R.call(s,e)}}):(t._v=e,t._s=1,A(t,!1))}catch(e){R.call({_w:t,_d:!1},e)}}};B||(C=function(e){j(this,C,"Promise","_h"),f(e),s.call(this);try{e(d(F,this,1),d(R,this,1))}catch(e){R.call(this,e)}},(s=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=t(/*! ./_redefine-all */"./node_modules/core-js/library/modules/_redefine-all.js")(C.prototype,{then:function(e,o){var t=O(p(this,C));return t.ok="function"!=typeof e||e,t.fail="function"==typeof o&&o,t.domain=T?w.domain:void 0,this._c.push(t),this._a&&this._a.push(t),this._s&&A(this,!1),t.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new s;this.promise=e,this.resolve=d(F,e,1),this.reject=d(R,e,1)},v.f=O=function(e){return e===C||e===l?new r(e):n(e)}),a(a.G+a.W+a.F*!B,{Promise:C}),t(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js")(C,"Promise"),t(/*! ./_set-species */"./node_modules/core-js/library/modules/_set-species.js")("Promise"),l=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").Promise,a(a.S+a.F*!B,"Promise",{reject:function(e){var o=O(this);return(0,o.reject)(e),o.promise}}),a(a.S+a.F*(i||!B),"Promise",{resolve:function(e){return k(i&&this===l?C:this,e)}}),a(a.S+a.F*!(B&&t(/*! ./_iter-detect */"./node_modules/core-js/library/modules/_iter-detect.js")(function(e){C.all(e).catch(M)})),"Promise",{all:function(e){var o=this,t=O(o),s=t.resolve,n=t.reject,r=y(function(){var t=[],r=0,l=1;_(e,!1,function(e){var i=r++,u=!1;t.push(void 0),l++,o.resolve(e).then(function(e){u||(u=!0,t[i]=e,--l||s(t))},n)}),--l||s(t)});return r.e&&n(r.v),t.promise},race:function(e){var o=this,t=O(o),s=t.reject,n=y(function(){_(e,!1,function(e){o.resolve(e).then(t.resolve,s)})});return n.e&&s(n.v),t.promise}})},"./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_string-at */"./node_modules/core-js/library/modules/_string-at.js")(!0);t(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,o=this._t,t=this._i;return t>=o.length?{value:void 0,done:!0}:(e=s(o,t),this._i+=e.length,{value:e,done:!1})})},"./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),r=t(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),l=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),i=t(/*! ./_redefine */"./node_modules/core-js/library/modules/_redefine.js"),u=t(/*! ./_meta */"./node_modules/core-js/library/modules/_meta.js").KEY,d=t(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js"),c=t(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js"),a=t(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),m=t(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js"),f=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js"),j=t(/*! ./_wks-ext */"./node_modules/core-js/library/modules/_wks-ext.js"),_=t(/*! ./_wks-define */"./node_modules/core-js/library/modules/_wks-define.js"),p=t(/*! ./_enum-keys */"./node_modules/core-js/library/modules/_enum-keys.js"),h=t(/*! ./_is-array */"./node_modules/core-js/library/modules/_is-array.js"),b=t(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),v=t(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),y=t(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),g=t(/*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js"),k=t(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js"),x=t(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js"),w=t(/*! ./_object-gopn-ext */"./node_modules/core-js/library/modules/_object-gopn-ext.js"),E=t(/*! ./_object-gopd */"./node_modules/core-js/library/modules/_object-gopd.js"),S=t(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),C=t(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js"),T=E.f,M=S.f,O=w.f,B=s.Symbol,N=s.JSON,A=N&&N.stringify,I=f("_hidden"),P=f("toPrimitive"),L={}.propertyIsEnumerable,R=c("symbol-registry"),F=c("symbols"),D=c("op-symbols"),z=Object.prototype,U="function"==typeof B,H=s.QObject,G=!H||!H.prototype||!H.prototype.findChild,W=r&&d(function(){return 7!=x(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(e,o,t){var s=T(z,o);s&&delete z[o],M(e,o,t),s&&e!==z&&M(z,o,s)}:M,V=function(e){var o=F[e]=x(B.prototype);return o._k=e,o},K=U&&"symbol"==typeof B.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof B},q=function(e,o,t){return e===z&&q(D,o,t),b(e),o=g(o,!0),b(t),n(F,o)?(t.enumerable?(n(e,I)&&e[I][o]&&(e[I][o]=!1),t=x(t,{enumerable:k(0,!1)})):(n(e,I)||M(e,I,k(1,{})),e[I][o]=!0),W(e,o,t)):M(e,o,t)},Y=function(e,o){b(e);for(var t,s=p(o=y(o)),n=0,r=s.length;r>n;)q(e,t=s[n++],o[t]);return e},J=function(e){var o=L.call(this,e=g(e,!0));return!(this===z&&n(F,e)&&!n(D,e))&&(!(o||!n(this,e)||!n(F,e)||n(this,I)&&this[I][e])||o)},X=function(e,o){if(e=y(e),o=g(o,!0),e!==z||!n(F,o)||n(D,o)){var t=T(e,o);return!t||!n(F,o)||n(e,I)&&e[I][o]||(t.enumerable=!0),t}},$=function(e){for(var o,t=O(y(e)),s=[],r=0;t.length>r;)n(F,o=t[r++])||o==I||o==u||s.push(o);return s},Z=function(e){for(var o,t=e===z,s=O(t?D:y(e)),r=[],l=0;s.length>l;)!n(F,o=s[l++])||t&&!n(z,o)||r.push(F[o]);return r};U||(i((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),o=function(t){this===z&&o.call(D,t),n(this,I)&&n(this[I],e)&&(this[I][e]=!1),W(this,e,k(1,t))};return r&&G&&W(z,e,{configurable:!0,set:o}),V(e)}).prototype,"toString",function(){return this._k}),E.f=X,S.f=q,t(/*! ./_object-gopn */"./node_modules/core-js/library/modules/_object-gopn.js").f=w.f=$,t(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js").f=J,t(/*! ./_object-gops */"./node_modules/core-js/library/modules/_object-gops.js").f=Z,r&&!t(/*! ./_library */"./node_modules/core-js/library/modules/_library.js")&&i(z,"propertyIsEnumerable",J,!0),j.f=function(e){return V(f(e))}),l(l.G+l.W+l.F*!U,{Symbol:B});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)f(Q[ee++]);for(var oe=C(f.store),te=0;oe.length>te;)_(oe[te++]);l(l.S+l.F*!U,"Symbol",{for:function(e){return n(R,e+="")?R[e]:R[e]=B(e)},keyFor:function(e){if(!K(e))throw TypeError(e+" is not a symbol!");for(var o in R)if(R[o]===e)return o},useSetter:function(){G=!0},useSimple:function(){G=!1}}),l(l.S+l.F*!U,"Object",{create:function(e,o){return void 0===o?x(e):Y(x(e),o)},defineProperty:q,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:Z}),N&&l(l.S+l.F*(!U||d(function(){var e=B();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var o,t,s=[e],n=1;arguments.length>n;)s.push(arguments[n++]);if(t=o=s[1],(v(o)||void 0!==e)&&!K(e))return h(o)||(o=function(e,o){if("function"==typeof t&&(o=t.call(this,e,o)),!K(o))return o}),s[1]=o,A.apply(N,s)}}),B.prototype[P]||t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")(B.prototype,P,B.prototype.valueOf),a(B,"Symbol"),a(Math,"Math",!0),a(s.JSON,"JSON",!0)},"./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-from */"./node_modules/core-js/library/modules/_set-collection-from.js")("Map")},"./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-of */"./node_modules/core-js/library/modules/_set-collection-of.js")("Map")},"./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.P+s.R,"Map",{toJSON:t(/*! ./_collection-to-json */"./node_modules/core-js/library/modules/_collection-to-json.js")("Map")})},"./node_modules/core-js/library/modules/es7.object.entries.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.entries.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=t(/*! ./_object-to-array */"./node_modules/core-js/library/modules/_object-to-array.js")(!0);s(s.S,"Object",{entries:function(e){return n(e)}})},"./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=t(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),r=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),l=t(/*! ./_species-constructor */"./node_modules/core-js/library/modules/_species-constructor.js"),i=t(/*! ./_promise-resolve */"./node_modules/core-js/library/modules/_promise-resolve.js");s(s.P+s.R,"Promise",{finally:function(e){var o=l(this,n.Promise||r.Promise),t="function"==typeof e;return this.then(t?function(t){return i(o,e()).then(function(){return t})}:e,t?function(t){return i(o,e()).then(function(){throw t})}:e)}})},"./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=t(/*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js"),r=t(/*! ./_perform */"./node_modules/core-js/library/modules/_perform.js");s(s.S,"Promise",{try:function(e){var o=n.f(this),t=r(e);return(t.e?o.reject:o.resolve)(t.v),o.promise}})},"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_wks-define */"./node_modules/core-js/library/modules/_wks-define.js")("asyncIterator")},"./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_wks-define */"./node_modules/core-js/library/modules/_wks-define.js")("observable")},"./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./es6.array.iterator */"./node_modules/core-js/library/modules/es6.array.iterator.js");for(var s=t(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),r=t(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),l=t(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag"),i="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<i.length;u++){var d=i[u],c=s[d],a=c&&c.prototype;a&&!a[l]&&n(a,l,d),r[d]=r.Array}},"./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js");e.exports=function(e,o){if("number"!=typeof e&&"Number"!=s(e))throw TypeError(o);return+e}},"./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("unscopables"),n=Array.prototype;void 0==n[s]&&t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(n,s,{}),e.exports=function(e){n[s][e]=!0}},"./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o,t,s){if(!(e instanceof o)||void 0!==s&&s in e)throw TypeError(t+": incorrect invocation!");return e}},"./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),n=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js"),r=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js");e.exports=[].copyWithin||function(e,o){var t=s(this),l=r(t.length),i=n(e,l),u=n(o,l),d=arguments.length>2?arguments[2]:void 0,c=Math.min((void 0===d?l:n(d,l))-u,l-i),a=1;for(u<i&&i<u+c&&(a=-1,u+=c-1,i+=c-1);c-- >0;)u in t?t[i]=t[u]:delete t[i],i+=a,u+=a;return t}},"./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),n=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js"),r=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js");e.exports=function(e){for(var o=s(this),t=r(o.length),l=arguments.length,i=n(l>1?arguments[1]:void 0,t),u=l>2?arguments[2]:void 0,d=void 0===u?t:n(u,t);d>i;)o[i++]=e;return o}},"./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js");e.exports=function(e,o){var t=[];return s(e,!1,t.push,t,o),t}},"./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),n=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),r=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js");e.exports=function(e){return function(o,t,l){var i,u=s(o),d=n(u.length),c=r(l,d);if(e&&t!=t){for(;d>c;)if((i=u[c++])!=i)return!0}else for(;d>c;c++)if((e||c in u)&&u[c]===t)return e||c||0;return!e&&-1}}},"./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),n=t(/*! ./_iobject */"./node_modules/core-js/modules/_iobject.js"),r=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),l=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),i=t(/*! ./_array-species-create */"./node_modules/core-js/modules/_array-species-create.js");e.exports=function(e,o){var t=1==e,u=2==e,d=3==e,c=4==e,a=6==e,m=5==e||a,f=o||i;return function(o,i,j){for(var _,p,h=r(o),b=n(h),v=s(i,j,3),y=l(b.length),g=0,k=t?f(o,y):u?f(o,0):void 0;y>g;g++)if((m||g in b)&&(p=v(_=b[g],g,h),e))if(t)k[g]=p;else if(p)switch(e){case 3:return!0;case 5:return _;case 6:return g;case 2:k.push(_)}else if(c)return!1;return a?-1:d||c?c:k}}},"./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_iobject */"./node_modules/core-js/modules/_iobject.js"),l=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js");e.exports=function(e,o,t,i,u){s(o);var d=n(e),c=r(d),a=l(d.length),m=u?a-1:0,f=u?-1:1;if(t<2)for(;;){if(m in c){i=c[m],m+=f;break}if(m+=f,u?m<0:a<=m)throw TypeError("Reduce of empty array with no initial value")}for(;u?m>=0:a>m;m+=f)m in c&&(i=o(i,c[m],m,d));return i}},"./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_is-array */"./node_modules/core-js/modules/_is-array.js"),r=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e){var o;return n(e)&&("function"!=typeof(o=e.constructor)||o!==Array&&!n(o.prototype)||(o=void 0),s(o)&&null===(o=o[r])&&(o=void 0)),void 0===o?Array:o}},"./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_array-species-constructor */"./node_modules/core-js/modules/_array-species-constructor.js");e.exports=function(e,o){return new(s(e))(o)}},"./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),n=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=t(/*! ./_invoke */"./node_modules/core-js/modules/_invoke.js"),l=[].slice,i={};e.exports=Function.bind||function(e){var o=s(this),t=l.call(arguments,1),u=function(){var s=t.concat(l.call(arguments));return this instanceof u?function(e,o,t){if(!(o in i)){for(var s=[],n=0;n<o;n++)s[n]="a["+n+"]";i[o]=Function("F,a","return new F("+s.join(",")+")")}return i[o](e,t)}(o,s.length,s):r(o,s,e)};return n(o.prototype)&&(u.prototype=o.prototype),u}},"./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js"),n=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag"),r="Arguments"==s(function(){return arguments}());e.exports=function(e){var o,t,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,o){try{return e[o]}catch(e){}}(o=Object(e),n))?t:r?s(o):"Object"==(l=s(o))&&"function"==typeof o.callee?"Arguments":l}},"./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},"./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,n=t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),r=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js"),l=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),i=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),u=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),d=t(/*! ./_iter-define */"./node_modules/core-js/modules/_iter-define.js"),c=t(/*! ./_iter-step */"./node_modules/core-js/modules/_iter-step.js"),a=t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js"),m=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),f=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").fastKey,j=t(/*! ./_validate-collection */"./node_modules/core-js/modules/_validate-collection.js"),_=m?"_s":"size",p=function(e,o){var t,s=f(o);if("F"!==s)return e._i[s];for(t=e._f;t;t=t.n)if(t.k==o)return t};e.exports={getConstructor:function(e,o,t,d){var c=e(function(e,s){i(e,c,o,"_i"),e._t=o,e._i=n(null),e._f=void 0,e._l=void 0,e[_]=0,void 0!=s&&u(s,t,e[d],e)});return r(c.prototype,{clear:function(){for(var e=j(this,o),t=e._i,s=e._f;s;s=s.n)s.r=!0,s.p&&(s.p=s.p.n=void 0),delete t[s.i];e._f=e._l=void 0,e[_]=0},delete:function(e){var t=j(this,o),s=p(t,e);if(s){var n=s.n,r=s.p;delete t._i[s.i],s.r=!0,r&&(r.n=n),n&&(n.p=r),t._f==s&&(t._f=n),t._l==s&&(t._l=r),t[_]--}return!!s},forEach:function(e){j(this,o);for(var t,s=l(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(s(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!p(j(this,o),e)}}),m&&s(c.prototype,"size",{get:function(){return j(this,o)[_]}}),c},def:function(e,o,t){var s,n,r=p(e,o);return r?r.v=t:(e._l=r={i:n=f(o,!0),k:o,v:t,p:s=e._l,n:void 0,r:!1},e._f||(e._f=r),s&&(s.n=r),e[_]++,"F"!==n&&(e._i[n]=r)),e},getEntry:p,setStrong:function(e,o,t){d(e,o,function(e,t){this._t=j(e,o),this._k=t,this._l=void 0},function(){for(var e=this._k,o=this._l;o&&o.r;)o=o.p;return this._t&&(this._l=o=o?o.n:this._t._f)?c(0,"keys"==e?o.k:"values"==e?o.v:[o.k,o.v]):(this._t=void 0,c(1))},t?"entries":"values",!t,!0),a(o)}}},"./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),n=t(/*! ./_array-from-iterable */"./node_modules/core-js/modules/_array-from-iterable.js");e.exports=function(e){return function(){if(s(this)!=e)throw TypeError(e+"#toJSON isn't generic");return n(this)}}},"./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js"),n=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").getWeak,r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),l=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),i=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),u=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),d=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js"),c=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),a=t(/*! ./_validate-collection */"./node_modules/core-js/modules/_validate-collection.js"),m=d(5),f=d(6),j=0,_=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},h=function(e,o){return m(e.a,function(e){return e[0]===o})};p.prototype={get:function(e){var o=h(this,e);if(o)return o[1]},has:function(e){return!!h(this,e)},set:function(e,o){var t=h(this,e);t?t[1]=o:this.a.push([e,o])},delete:function(e){var o=f(this.a,function(o){return o[0]===e});return~o&&this.a.splice(o,1),!!~o}},e.exports={getConstructor:function(e,o,t,r){var d=e(function(e,s){i(e,d,o,"_i"),e._t=o,e._i=j++,e._l=void 0,void 0!=s&&u(s,t,e[r],e)});return s(d.prototype,{delete:function(e){if(!l(e))return!1;var t=n(e);return!0===t?_(a(this,o)).delete(e):t&&c(t,this._i)&&delete t[this._i]},has:function(e){if(!l(e))return!1;var t=n(e);return!0===t?_(a(this,o)).has(e):t&&c(t,this._i)}}),d},def:function(e,o,t){var s=n(r(o),!0);return!0===s?_(e).set(o,t):s[e._i]=t,e},ufstore:_}},"./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),l=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js"),i=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js"),u=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),d=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),c=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),a=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),m=t(/*! ./_iter-detect */"./node_modules/core-js/modules/_iter-detect.js"),f=t(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),j=t(/*! ./_inherit-if-required */"./node_modules/core-js/modules/_inherit-if-required.js");e.exports=function(e,o,t,_,p,h){var b=s[e],v=b,y=p?"set":"add",g=v&&v.prototype,k={},x=function(e){var o=g[e];r(g,e,"delete"==e?function(e){return!(h&&!c(e))&&o.call(this,0===e?0:e)}:"has"==e?function(e){return!(h&&!c(e))&&o.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!c(e)?void 0:o.call(this,0===e?0:e)}:"add"==e?function(e){return o.call(this,0===e?0:e),this}:function(e,t){return o.call(this,0===e?0:e,t),this})};if("function"==typeof v&&(h||g.forEach&&!a(function(){(new v).entries().next()}))){var w=new v,E=w[y](h?{}:-0,1)!=w,S=a(function(){w.has(1)}),C=m(function(e){new v(e)}),T=!h&&a(function(){for(var e=new v,o=5;o--;)e[y](o,o);return!e.has(-0)});C||((v=o(function(o,t){d(o,v,e);var s=j(new b,o,v);return void 0!=t&&u(t,p,s[y],s),s})).prototype=g,g.constructor=v),(S||T)&&(x("delete"),x("has"),p&&x("get")),(T||E)&&x(y),h&&g.clear&&delete g.clear}else v=_.getConstructor(o,e,p,y),l(v.prototype,t),i.NEED=!0;return f(v,e),k[e]=v,n(n.G+n.W+n.F*(v!=b),k),h||_.setStrong(v,e,p),v}},"./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */function(e,o){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},"./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js");e.exports=function(e,o,t){o in e?s.f(e,o,n(0,t)):e[o]=t}},"./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");e.exports=function(e,o,t){if(s(e),void 0===o)return e;switch(t){case 1:return function(t){return e.call(o,t)};case 2:return function(t,s){return e.call(o,t,s)};case 3:return function(t,s,n){return e.call(o,t,s,n)}}return function(){return e.apply(o,arguments)}}},"./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),n=Date.prototype.getTime,r=Date.prototype.toISOString,l=function(e){return e>9?e:"0"+e};e.exports=s(function(){return"0385-07-25T07:06:39.999Z"!=r.call(new Date(-5e13-1))})||!s(function(){r.call(new Date(NaN))})?function(){if(!isFinite(n.call(this)))throw RangeError("Invalid time value");var e=this,o=e.getUTCFullYear(),t=e.getUTCMilliseconds(),s=o<0?"-":o>9999?"+":"";return s+("00000"+Math.abs(o)).slice(s?-6:-4)+"-"+l(e.getUTCMonth()+1)+"-"+l(e.getUTCDate())+"T"+l(e.getUTCHours())+":"+l(e.getUTCMinutes())+":"+l(e.getUTCSeconds())+"."+(t>99?t:"0"+l(t))+"Z"}:r},"./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),n=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js");e.exports=function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return n(s(this),"number"!=e)}},"./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){e.exports=!t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").document,r=s(n)&&s(n.createElement);e.exports=function(e){return r?n.createElement(e):{}}},"./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),n=t(/*! ./_object-gops */"./node_modules/core-js/modules/_object-gops.js"),r=t(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js");e.exports=function(e){var o=s(e),t=n.f;if(t)for(var l,i=t(e),u=r.f,d=0;i.length>d;)u.call(e,l=i[d++])&&o.push(l);return o}},"./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),l=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),i=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),u=function(e,o,t){var d,c,a,m,f=e&u.F,j=e&u.G,_=e&u.S,p=e&u.P,h=e&u.B,b=j?s:_?s[o]||(s[o]={}):(s[o]||{}).prototype,v=j?n:n[o]||(n[o]={}),y=v.prototype||(v.prototype={});for(d in j&&(t=o),t)a=((c=!f&&b&&void 0!==b[d])?b:t)[d],m=h&&c?i(a,s):p&&"function"==typeof a?i(Function.call,a):a,b&&l(b,d,a,e&u.U),v[d]!=a&&r(v,d,m),p&&y[d]!=a&&(y[d]=a)};s.core=n,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("match");e.exports=function(e){var o=/./;try{"/./"[e](o)}catch(t){try{return o[s]=!1,!"/./"[e](o)}catch(e){}}return!0}},"./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),n=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),r=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),l=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js"),i=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js");e.exports=function(e,o,t){var u=i(e),d=t(l,u,""[e]),c=d[0],a=d[1];r(function(){var o={};return o[u]=function(){return 7},7!=""[e](o)})&&(n(String.prototype,e,c),s(RegExp.prototype,u,2==o?function(e,o){return a.call(e,this,o)}:function(e){return a.call(e,this)}))}},"./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");e.exports=function(){var e=s(this),o="";return e.global&&(o+="g"),e.ignoreCase&&(o+="i"),e.multiline&&(o+="m"),e.unicode&&(o+="u"),e.sticky&&(o+="y"),o}},"./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_is-array */"./node_modules/core-js/modules/_is-array.js"),n=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),l=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),i=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("isConcatSpreadable");e.exports=function e(o,t,u,d,c,a,m,f){for(var j,_,p=c,h=0,b=!!m&&l(m,f,3);h<d;){if(h in u){if(j=b?b(u[h],h,t):u[h],_=!1,n(j)&&(_=void 0!==(_=j[i])?!!_:s(j)),_&&a>0)p=e(o,t,j,r(j.length),p,a-1)-1;else{if(p>=9007199254740991)throw TypeError();o[p]=j}p++}h++}return p}},"./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),n=t(/*! ./_iter-call */"./node_modules/core-js/modules/_iter-call.js"),r=t(/*! ./_is-array-iter */"./node_modules/core-js/modules/_is-array-iter.js"),l=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),i=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),u=t(/*! ./core.get-iterator-method */"./node_modules/core-js/modules/core.get-iterator-method.js"),d={},c={};(o=e.exports=function(e,o,t,a,m){var f,j,_,p,h=m?function(){return e}:u(e),b=s(t,a,o?2:1),v=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");if(r(h)){for(f=i(e.length);f>v;v++)if((p=o?b(l(j=e[v])[0],j[1]):b(e[v]))===d||p===c)return p}else for(_=h.call(e);!(j=_.next()).done;)if((p=n(_,b,j.value,o))===d||p===c)return p}).BREAK=d,o.RETURN=c},"./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},"./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var t={}.hasOwnProperty;e.exports=function(e,o){return t.call(e,o)}},"./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js");e.exports=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?function(e,o,t){return s.f(e,o,n(1,t))}:function(e,o,t){return e[o]=t,e}},"./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").document;e.exports=s&&s.documentElement},"./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){e.exports=!t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&!t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty(t(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_set-proto */"./node_modules/core-js/modules/_set-proto.js").set;e.exports=function(e,o,t){var r,l=o.constructor;return l!==t&&"function"==typeof l&&(r=l.prototype)!==t.prototype&&s(r)&&n&&n(e,r),e}},"./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o,t){var s=void 0===t;switch(o.length){case 0:return s?e():e.call(t);case 1:return s?e(o[0]):e.call(t,o[0]);case 2:return s?e(o[0],o[1]):e.call(t,o[0],o[1]);case 3:return s?e(o[0],o[1],o[2]):e.call(t,o[0],o[1],o[2]);case 4:return s?e(o[0],o[1],o[2],o[3]):e.call(t,o[0],o[1],o[2],o[3])}return e.apply(t,o)}},"./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==s(e)?e.split(""):Object(e)}},"./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),n=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||r[n]===e)}},"./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js");e.exports=Array.isArray||function(e){return"Array"==s(e)}},"./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=Math.floor;e.exports=function(e){return!s(e)&&isFinite(e)&&n(e)===e}},"./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js"),r=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("match");e.exports=function(e){var o;return s(e)&&(void 0!==(o=e[r])?!!o:"RegExp"==n(e))}},"./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");e.exports=function(e,o,t,n){try{return n?o(s(t)[0],t[1]):o(t)}catch(o){var r=e.return;throw void 0!==r&&s(r.call(e)),o}}},"./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),r=t(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),l={};t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(l,t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,o,t){e.prototype=s(l,{next:n(1,t)}),r(e,o+" Iterator")}},"./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_library */"./node_modules/core-js/modules/_library.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),l=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),i=t(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),u=t(/*! ./_iter-create */"./node_modules/core-js/modules/_iter-create.js"),d=t(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),c=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),a=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,o,t,j,_,p,h){u(t,o,j);var b,v,y,g=function(e){if(!m&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new t(this,e)}}return function(){return new t(this,e)}},k=o+" Iterator",x="values"==_,w=!1,E=e.prototype,S=E[a]||E["@@iterator"]||_&&E[_],C=S||g(_),T=_?x?g("entries"):C:void 0,M="Array"==o&&E.entries||S;if(M&&(y=c(M.call(new e)))!==Object.prototype&&y.next&&(d(y,k,!0),s||"function"==typeof y[a]||l(y,a,f)),x&&S&&"values"!==S.name&&(w=!0,C=function(){return S.call(this)}),s&&!h||!m&&!w&&E[a]||l(E,a,C),i[o]=C,i[k]=f,_)if(b={values:x?C:g("values"),keys:p?C:g("keys"),entries:T},h)for(v in b)v in E||r(E,v,b[v]);else n(n.P+n.F*(m||w),o,b);return b}},"./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),n=!1;try{var r=[7][s]();r.return=function(){n=!0},Array.from(r,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!n)return!1;var t=!1;try{var r=[7],l=r[s]();l.next=function(){return{done:t=!0}},r[s]=function(){return l},e(r)}catch(e){}return t}},"./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{value:o,done:!!e}}},"./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports={}},"./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=!1},"./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){var t=Math.expm1;e.exports=!t||t(10)>22025.465794806718||t(10)<22025.465794806718||-2e-17!=t(-2e-17)?function(e){return 0==(e=+e)?e:e>-1e-6&&e<1e-6?e+e*e/2:Math.exp(e)-1}:t},"./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_math-sign */"./node_modules/core-js/modules/_math-sign.js"),n=Math.pow,r=n(2,-52),l=n(2,-23),i=n(2,127)*(2-l),u=n(2,-126);e.exports=Math.fround||function(e){var o,t,n=Math.abs(e),d=s(e);return n<u?d*function(e){return e+1/r-1/r}(n/u/l)*u*l:(t=(o=(1+l/r)*n)-(o-n))>i||t!=t?d*(1/0):d*t}},"./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:Math.log(1+e)}},"./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=Math.scale||function(e,o,t,s,n){return 0===arguments.length||e!=e||o!=o||t!=t||s!=s||n!=n?NaN:e===1/0||e===-1/0?e:(e-o)*(n-s)/(t-o)+s}},"./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},"./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("meta"),n=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),l=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,i=0,u=Object.isExtensible||function(){return!0},d=!t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return u(Object.preventExtensions({}))}),c=function(e){l(e,s,{value:{i:"O"+ ++i,w:{}}})},a=e.exports={KEY:s,NEED:!1,fastKey:function(e,o){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,s)){if(!u(e))return"F";if(!o)return"E";c(e)}return e[s].i},getWeak:function(e,o){if(!r(e,s)){if(!u(e))return!0;if(!o)return!1;c(e)}return e[s].w},onFreeze:function(e){return d&&a.NEED&&u(e)&&!r(e,s)&&c(e),e}}},"./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./es6.map */"./node_modules/core-js/modules/es6.map.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("metadata"),l=r.store||(r.store=new(t(/*! ./es6.weak-map */"./node_modules/core-js/modules/es6.weak-map.js"))),i=function(e,o,t){var n=l.get(e);if(!n){if(!t)return;l.set(e,n=new s)}var r=n.get(o);if(!r){if(!t)return;n.set(o,r=new s)}return r};e.exports={store:l,map:i,has:function(e,o,t){var s=i(o,t,!1);return void 0!==s&&s.has(e)},get:function(e,o,t){var s=i(o,t,!1);return void 0===s?void 0:s.get(e)},set:function(e,o,t,s){i(t,s,!0).set(e,o)},keys:function(e,o){var t=i(e,o,!1),s=[];return t&&t.forEach(function(e,o){s.push(o)}),s},key:function(e){return void 0===e||"symbol"==typeof e?e:String(e)},exp:function(e){n(n.S,"Reflect",e)}}},"./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_task */"./node_modules/core-js/modules/_task.js").set,r=s.MutationObserver||s.WebKitMutationObserver,l=s.process,i=s.Promise,u="process"==t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(l);e.exports=function(){var e,o,t,d=function(){var s,n;for(u&&(s=l.domain)&&s.exit();e;){n=e.fn,e=e.next;try{n()}catch(s){throw e?t():o=void 0,s}}o=void 0,s&&s.enter()};if(u)t=function(){l.nextTick(d)};else if(!r||s.navigator&&s.navigator.standalone)if(i&&i.resolve){var c=i.resolve(void 0);t=function(){c.then(d)}}else t=function(){n.call(s,d)};else{var a=!0,m=document.createTextNode("");new r(d).observe(m,{characterData:!0}),t=function(){m.data=a=!a}}return function(s){var n={fn:s,next:void 0};o&&(o.next=n),e||(e=n,t()),o=n}}},"./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");e.exports.f=function(e){return new function(e){var o,t;this.promise=new e(function(e,s){if(void 0!==o||void 0!==t)throw TypeError("Bad Promise constructor");o=e,t=s}),this.resolve=s(o),this.reject=s(t)}(e)}},"./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),n=t(/*! ./_object-gops */"./node_modules/core-js/modules/_object-gops.js"),r=t(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js"),l=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),i=t(/*! ./_iobject */"./node_modules/core-js/modules/_iobject.js"),u=Object.assign;e.exports=!u||t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){var e={},o={},t=Symbol(),s="abcdefghijklmnopqrst";return e[t]=7,s.split("").forEach(function(e){o[e]=e}),7!=u({},e)[t]||Object.keys(u({},o)).join("")!=s})?function(e,o){for(var t=l(e),u=arguments.length,d=1,c=n.f,a=r.f;u>d;)for(var m,f=i(arguments[d++]),j=c?s(f).concat(c(f)):s(f),_=j.length,p=0;_>p;)a.call(f,m=j[p++])&&(t[m]=f[m]);return t}:u},"./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),n=t(/*! ./_object-dps */"./node_modules/core-js/modules/_object-dps.js"),r=t(/*! ./_enum-bug-keys */"./node_modules/core-js/modules/_enum-bug-keys.js"),l=t(/*! ./_shared-key */"./node_modules/core-js/modules/_shared-key.js")("IE_PROTO"),i=function(){},u=function(){var e,o=t(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("iframe"),s=r.length;for(o.style.display="none",t(/*! ./_html */"./node_modules/core-js/modules/_html.js").appendChild(o),o.src="javascript:",(e=o.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;s--;)delete u.prototype[r[s]];return u()};e.exports=Object.create||function(e,o){var t;return null!==e?(i.prototype=s(e),t=new i,i.prototype=null,t[l]=e):t=u(),void 0===o?t:n(t,o)}},"./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),n=t(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),r=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),l=Object.defineProperty;o.f=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperty:function(e,o,t){if(s(e),o=r(o,!0),s(t),n)try{return l(e,o,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[o]=t.value),e}},"./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js");e.exports=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperties:function(e,o){n(e);for(var t,l=r(o),i=l.length,u=0;i>u;)s.f(e,t=l[u++],o[t]);return e}},"./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";e.exports=t(/*! ./_library */"./node_modules/core-js/modules/_library.js")||!t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){var e=Math.random();__defineSetter__.call(null,e,function(){}),delete t(/*! ./_global */"./node_modules/core-js/modules/_global.js")[e]})},"./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js"),n=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),r=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),l=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),i=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),u=t(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;o.f=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?d:function(e,o){if(e=r(e),o=l(o,!0),u)try{return d(e,o)}catch(e){}if(i(e,o))return n(!s.f.call(e,o),e[o])}},"./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),n=t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f,r={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"[object Window]"==r.call(e)?function(e){try{return n(e)}catch(e){return l.slice()}}(e):n(s(e))}},"./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys-internal */"./node_modules/core-js/modules/_object-keys-internal.js"),n=t(/*! ./_enum-bug-keys */"./node_modules/core-js/modules/_enum-bug-keys.js").concat("length","prototype");o.f=Object.getOwnPropertyNames||function(e){return s(e,n)}},"./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){o.f=Object.getOwnPropertySymbols},"./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_shared-key */"./node_modules/core-js/modules/_shared-key.js")("IE_PROTO"),l=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=n(e),s(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},"./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),r=t(/*! ./_array-includes */"./node_modules/core-js/modules/_array-includes.js")(!1),l=t(/*! ./_shared-key */"./node_modules/core-js/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var t,i=n(e),u=0,d=[];for(t in i)t!=l&&s(i,t)&&d.push(t);for(;o.length>u;)s(i,t=o[u++])&&(~r(d,t)||d.push(t));return d}},"./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys-internal */"./node_modules/core-js/modules/_object-keys-internal.js"),n=t(/*! ./_enum-bug-keys */"./node_modules/core-js/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return s(e,n)}},"./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){o.f={}.propertyIsEnumerable},"./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js");e.exports=function(e,o){var t=(n.Object||{})[e]||Object[e],l={};l[e]=o(t),s(s.S+s.F*r(function(){t(1)}),"Object",l)}},"./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),r=t(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js").f;e.exports=function(e){return function(o){for(var t,l=n(o),i=s(l),u=i.length,d=0,c=[];u>d;)r.call(l,t=i[d++])&&c.push(e?[t,l[t]]:l[t]);return c}}},"./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js"),n=t(/*! ./_object-gops */"./node_modules/core-js/modules/_object-gops.js"),r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),l=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").Reflect;e.exports=l&&l.ownKeys||function(e){var o=s.f(r(e)),t=n.f;return t?o.concat(t(e)):o}},"./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").parseFloat,n=t(/*! ./_string-trim */"./node_modules/core-js/modules/_string-trim.js").trim;e.exports=1/s(t(/*! ./_string-ws */"./node_modules/core-js/modules/_string-ws.js")+"-0")!=-1/0?function(e){var o=n(String(e),3),t=s(o);return 0===t&&"-"==o.charAt(0)?-0:t}:s},"./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").parseInt,n=t(/*! ./_string-trim */"./node_modules/core-js/modules/_string-trim.js").trim,r=t(/*! ./_string-ws */"./node_modules/core-js/modules/_string-ws.js"),l=/^[-+]?0[xX]/;e.exports=8!==s(r+"08")||22!==s(r+"0x16")?function(e,o){var t=n(String(e),3);return s(t,o>>>0||(l.test(t)?16:10))}:s},"./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},"./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),n=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=t(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js");e.exports=function(e,o){if(s(e),n(o)&&o.constructor===e)return o;var t=r.f(e);return(0,t.resolve)(o),t.promise}},"./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js");e.exports=function(e,o,t){for(var n in o)s(e,n,o[n],t);return e}},"./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),r=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),l=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("src"),i=Function.toString,u=(""+i).split("toString");t(/*! ./_core */"./node_modules/core-js/modules/_core.js").inspectSource=function(e){return i.call(e)},(e.exports=function(e,o,t,i){var d="function"==typeof t;d&&(r(t,"name")||n(t,"name",o)),e[o]!==t&&(d&&(r(t,l)||n(t,l,e[o]?""+e[o]:u.join(String(o)))),e===s?e[o]=t:i?e[o]?e[o]=t:n(e,o,t):(delete e[o],n(e,o,t)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[l]||i.call(this)})},"./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){var t=o===Object(o)?function(e){return o[e]}:o;return function(o){return String(o).replace(e,t)}}},"./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=Object.is||function(e,o){return e===o?0!==e||1/e==1/o:e!=e&&o!=o}},"./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),r=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),l=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js");e.exports=function(e){s(s.S,e,{from:function(e){var o,t,s,i,u=arguments[1];return n(this),(o=void 0!==u)&&n(u),void 0==e?new this:(t=[],o?(s=0,i=r(u,arguments[2],2),l(e,!1,function(e){t.push(i(e,s++))})):l(e,!1,t.push,t),new this(t))}})}},"./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");e.exports=function(e){s(s.S,e,{of:function(){for(var e=arguments.length,o=new Array(e);e--;)o[e]=arguments[e];return new this(o)}})}},"./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=function(e,o){if(n(e),!s(o)&&null!==o)throw TypeError(o+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,o,s){try{(s=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js")(Function.call,t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype,"__proto__").set,2))(e,[]),o=!(e instanceof Array)}catch(e){o=!0}return function(e,t){return r(e,t),o?e.__proto__=t:s(e,t),e}}({},!1):void 0),check:r}},"./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),r=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),l=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e){var o=s[e];r&&o&&!o[l]&&n.f(o,l,{configurable:!0,get:function(){return this}})}},"./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,n=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),r=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag");e.exports=function(e,o,t){e&&!n(e=t?e:e.prototype,r)&&s(e,r,{configurable:!0,value:o})}},"./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("keys"),n=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js");e.exports=function(e){return s[e]||(s[e]=n(e))}},"./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_core */"./node_modules/core-js/modules/_core.js"),n=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(e.exports=function(e,o){return r[e]||(r[e]=void 0!==o?o:{})})("versions",[]).push({version:s.version,mode:t(/*! ./_library */"./node_modules/core-js/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),n=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),r=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e,o){var t,l=s(e).constructor;return void 0===l||void 0==(t=s(l)[r])?o:n(t)}},"./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js");e.exports=function(e,o){return!!e&&s(function(){o?e.call(null,function(){},1):e.call(null)})}},"./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),n=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e){return function(o,t){var r,l,i=String(n(o)),u=s(t),d=i.length;return u<0||u>=d?e?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===d||(l=i.charCodeAt(u+1))<56320||l>57343?e?i.charAt(u):r:e?i.slice(u,u+2):l-56320+(r-55296<<10)+65536}}},"./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-regexp */"./node_modules/core-js/modules/_is-regexp.js"),n=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e,o,t){if(s(o))throw TypeError("String#"+t+" doesn't accept regex!");return String(n(e))}},"./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),r=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js"),l=/"/g,i=function(e,o,t,s){var n=String(r(e)),i="<"+o;return""!==t&&(i+=" "+t+'="'+String(s).replace(l,"&quot;")+'"'),i+">"+n+"</"+o+">"};e.exports=function(e,o){var t={};t[e]=o(i),s(s.P+s.F*n(function(){var o=""[e]('"');return o!==o.toLowerCase()||o.split('"').length>3}),"String",t)}},"./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),n=t(/*! ./_string-repeat */"./node_modules/core-js/modules/_string-repeat.js"),r=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e,o,t,l){var i=String(r(e)),u=i.length,d=void 0===t?" ":String(t),c=s(o);if(c<=u||""==d)return i;var a=c-u,m=n.call(d,Math.ceil(a/d.length));return m.length>a&&(m=m.slice(0,a)),l?m+i:i+m}},"./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),n=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e){var o=String(n(this)),t="",r=s(e);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(o+=o))1&r&&(t+=o);return t}},"./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js"),r=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),l=t(/*! ./_string-ws */"./node_modules/core-js/modules/_string-ws.js"),i="["+l+"]",u=RegExp("^"+i+i+"*"),d=RegExp(i+i+"*$"),c=function(e,o,t){var n={},i=r(function(){return!!l[e]()||"​"!="​"[e]()}),u=n[e]=i?o(a):l[e];t&&(n[t]=u),s(s.P+s.F*i,"String",n)},a=c.trim=function(e,o){return e=String(n(e)),1&o&&(e=e.replace(u,"")),2&o&&(e=e.replace(d,"")),e};e.exports=c},"./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,t){var s,n,r,l=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),i=t(/*! ./_invoke */"./node_modules/core-js/modules/_invoke.js"),u=t(/*! ./_html */"./node_modules/core-js/modules/_html.js"),d=t(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js"),c=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),a=c.process,m=c.setImmediate,f=c.clearImmediate,j=c.MessageChannel,_=c.Dispatch,p=0,h={},b=function(){var e=+this;if(h.hasOwnProperty(e)){var o=h[e];delete h[e],o()}},v=function(e){b.call(e.data)};m&&f||(m=function(e){for(var o=[],t=1;arguments.length>t;)o.push(arguments[t++]);return h[++p]=function(){i("function"==typeof e?e:Function(e),o)},s(p),p},f=function(e){delete h[e]},"process"==t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(a)?s=function(e){a.nextTick(l(b,e,1))}:_&&_.now?s=function(e){_.now(l(b,e,1))}:j?(r=(n=new j).port2,n.port1.onmessage=v,s=l(r.postMessage,r,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(s=function(e){c.postMessage(e+"","*")},c.addEventListener("message",v,!1)):s="onreadystatechange"in d("script")?function(e){u.appendChild(d("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(l(b,e,1),0)}),e.exports={set:m,clear:f}},"./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),n=Math.max,r=Math.min;e.exports=function(e,o){return(e=s(e))<0?n(e+o,0):r(e,o)}},"./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),n=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js");e.exports=function(e){if(void 0===e)return 0;var o=s(e),t=n(o);if(o!==t)throw RangeError("Wrong length!");return t}},"./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){var t=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:t)(e)}},"./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_iobject */"./node_modules/core-js/modules/_iobject.js"),n=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e){return s(n(e))}},"./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),n=Math.min;e.exports=function(e){return e>0?n(s(e),9007199254740991):0}},"./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e){return Object(s(e))}},"./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e,o){if(!s(e))return e;var t,n;if(o&&"function"==typeof(t=e.toString)&&!s(n=t.call(e)))return n;if("function"==typeof(t=e.valueOf)&&!s(n=t.call(e)))return n;if(!o&&"function"==typeof(t=e.toString)&&!s(n=t.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";if(t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")){var s=t(/*! ./_library */"./node_modules/core-js/modules/_library.js"),n=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),l=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),i=t(/*! ./_typed */"./node_modules/core-js/modules/_typed.js"),u=t(/*! ./_typed-buffer */"./node_modules/core-js/modules/_typed-buffer.js"),d=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),c=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),a=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),m=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),f=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js"),j=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),_=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),p=t(/*! ./_to-index */"./node_modules/core-js/modules/_to-index.js"),h=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js"),b=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),v=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),y=t(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),g=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),k=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),x=t(/*! ./_is-array-iter */"./node_modules/core-js/modules/_is-array-iter.js"),w=t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),E=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),S=t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f,C=t(/*! ./core.get-iterator-method */"./node_modules/core-js/modules/core.get-iterator-method.js"),T=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),M=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js"),O=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js"),B=t(/*! ./_array-includes */"./node_modules/core-js/modules/_array-includes.js"),N=t(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),A=t(/*! ./es6.array.iterator */"./node_modules/core-js/modules/es6.array.iterator.js"),I=t(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),P=t(/*! ./_iter-detect */"./node_modules/core-js/modules/_iter-detect.js"),L=t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js"),R=t(/*! ./_array-fill */"./node_modules/core-js/modules/_array-fill.js"),F=t(/*! ./_array-copy-within */"./node_modules/core-js/modules/_array-copy-within.js"),D=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),z=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),U=D.f,H=z.f,G=n.RangeError,W=n.TypeError,V=n.Uint8Array,K=Array.prototype,q=u.ArrayBuffer,Y=u.DataView,J=O(0),X=O(2),$=O(3),Z=O(4),Q=O(5),ee=O(6),oe=B(!0),te=B(!1),se=A.values,ne=A.keys,re=A.entries,le=K.lastIndexOf,ie=K.reduce,ue=K.reduceRight,de=K.join,ce=K.sort,ae=K.slice,me=K.toString,fe=K.toLocaleString,je=M("iterator"),_e=M("toStringTag"),pe=T("typed_constructor"),he=T("def_constructor"),be=i.CONSTR,ve=i.TYPED,ye=i.VIEW,ge=O(1,function(e,o){return Se(N(e,e[he]),o)}),ke=r(function(){return 1===new V(new Uint16Array([1]).buffer)[0]}),xe=!!V&&!!V.prototype.set&&r(function(){new V(1).set({})}),we=function(e,o){var t=j(e);if(t<0||t%o)throw G("Wrong offset!");return t},Ee=function(e){if(g(e)&&ve in e)return e;throw W(e+" is not a typed array!")},Se=function(e,o){if(!(g(e)&&pe in e))throw W("It is not a typed array constructor!");return new e(o)},Ce=function(e,o){return Te(N(e,e[he]),o)},Te=function(e,o){for(var t=0,s=o.length,n=Se(e,s);s>t;)n[t]=o[t++];return n},Me=function(e,o,t){U(e,o,{get:function(){return this._d[t]}})},Oe=function(e){var o,t,s,n,r,l,i=k(e),u=arguments.length,c=u>1?arguments[1]:void 0,a=void 0!==c,m=C(i);if(void 0!=m&&!x(m)){for(l=m.call(i),s=[],o=0;!(r=l.next()).done;o++)s.push(r.value);i=s}for(a&&u>2&&(c=d(c,arguments[2],2)),o=0,t=_(i.length),n=Se(this,t);t>o;o++)n[o]=a?c(i[o],o):i[o];return n},Be=function(){for(var e=0,o=arguments.length,t=Se(this,o);o>e;)t[e]=arguments[e++];return t},Ne=!!V&&r(function(){fe.call(new V(1))}),Ae=function(){return fe.apply(Ne?ae.call(Ee(this)):Ee(this),arguments)},Ie={copyWithin:function(e,o){return F.call(Ee(this),e,o,arguments.length>2?arguments[2]:void 0)},every:function(e){return Z(Ee(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return R.apply(Ee(this),arguments)},filter:function(e){return Ce(this,X(Ee(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return Q(Ee(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Ee(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){J(Ee(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return te(Ee(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return oe(Ee(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return de.apply(Ee(this),arguments)},lastIndexOf:function(e){return le.apply(Ee(this),arguments)},map:function(e){return ge(Ee(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return ie.apply(Ee(this),arguments)},reduceRight:function(e){return ue.apply(Ee(this),arguments)},reverse:function(){for(var e,o=Ee(this).length,t=Math.floor(o/2),s=0;s<t;)e=this[s],this[s++]=this[--o],this[o]=e;return this},some:function(e){return $(Ee(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return ce.call(Ee(this),e)},subarray:function(e,o){var t=Ee(this),s=t.length,n=h(e,s);return new(N(t,t[he]))(t.buffer,t.byteOffset+n*t.BYTES_PER_ELEMENT,_((void 0===o?s:h(o,s))-n))}},Pe=function(e,o){return Ce(this,ae.call(Ee(this),e,o))},Le=function(e){Ee(this);var o=we(arguments[1],1),t=this.length,s=k(e),n=_(s.length),r=0;if(n+o>t)throw G("Wrong length!");for(;r<n;)this[o+r]=s[r++]},Re={entries:function(){return re.call(Ee(this))},keys:function(){return ne.call(Ee(this))},values:function(){return se.call(Ee(this))}},Fe=function(e,o){return g(e)&&e[ve]&&"symbol"!=typeof o&&o in e&&String(+o)==String(o)},De=function(e,o){return Fe(e,o=b(o,!0))?a(2,e[o]):H(e,o)},ze=function(e,o,t){return!(Fe(e,o=b(o,!0))&&g(t)&&v(t,"value"))||v(t,"get")||v(t,"set")||t.configurable||v(t,"writable")&&!t.writable||v(t,"enumerable")&&!t.enumerable?U(e,o,t):(e[o]=t.value,e)};be||(z.f=De,D.f=ze),l(l.S+l.F*!be,"Object",{getOwnPropertyDescriptor:De,defineProperty:ze}),r(function(){me.call({})})&&(me=fe=function(){return de.call(this)});var Ue=f({},Ie);f(Ue,Re),m(Ue,je,Re.values),f(Ue,{slice:Pe,set:Le,constructor:function(){},toString:me,toLocaleString:Ae}),Me(Ue,"buffer","b"),Me(Ue,"byteOffset","o"),Me(Ue,"byteLength","l"),Me(Ue,"length","e"),U(Ue,_e,{get:function(){return this[ve]}}),e.exports=function(e,o,t,u){var d=e+((u=!!u)?"Clamped":"")+"Array",a="get"+e,f="set"+e,j=n[d],h=j||{},b=j&&E(j),v=!j||!i.ABV,k={},x=j&&j.prototype,C=function(e,t){U(e,t,{get:function(){return function(e,t){var s=e._d;return s.v[a](t*o+s.o,ke)}(this,t)},set:function(e){return function(e,t,s){var n=e._d;u&&(s=(s=Math.round(s))<0?0:s>255?255:255&s),n.v[f](t*o+n.o,s,ke)}(this,t,e)},enumerable:!0})};v?(j=t(function(e,t,s,n){c(e,j,d,"_d");var r,l,i,u,a=0,f=0;if(g(t)){if(!(t instanceof q||"ArrayBuffer"==(u=y(t))||"SharedArrayBuffer"==u))return ve in t?Te(j,t):Oe.call(j,t);r=t,f=we(s,o);var h=t.byteLength;if(void 0===n){if(h%o)throw G("Wrong length!");if((l=h-f)<0)throw G("Wrong length!")}else if((l=_(n)*o)+f>h)throw G("Wrong length!");i=l/o}else i=p(t),r=new q(l=i*o);for(m(e,"_d",{b:r,o:f,l:l,e:i,v:new Y(r)});a<i;)C(e,a++)}),x=j.prototype=w(Ue),m(x,"constructor",j)):r(function(){j(1)})&&r(function(){new j(-1)})&&P(function(e){new j,new j(null),new j(1.5),new j(e)},!0)||(j=t(function(e,t,s,n){var r;return c(e,j,d),g(t)?t instanceof q||"ArrayBuffer"==(r=y(t))||"SharedArrayBuffer"==r?void 0!==n?new h(t,we(s,o),n):void 0!==s?new h(t,we(s,o)):new h(t):ve in t?Te(j,t):Oe.call(j,t):new h(p(t))}),J(b!==Function.prototype?S(h).concat(S(b)):S(h),function(e){e in j||m(j,e,h[e])}),j.prototype=x,s||(x.constructor=j));var T=x[je],M=!!T&&("values"==T.name||void 0==T.name),O=Re.values;m(j,pe,!0),m(x,ve,d),m(x,ye,!0),m(x,he,j),(u?new j(1)[_e]==d:_e in x)||U(x,_e,{get:function(){return d}}),k[d]=j,l(l.G+l.W+l.F*(j!=h),k),l(l.S,d,{BYTES_PER_ELEMENT:o}),l(l.S+l.F*r(function(){h.of.call(j,1)}),d,{from:Oe,of:Be}),"BYTES_PER_ELEMENT"in x||m(x,"BYTES_PER_ELEMENT",o),l(l.P,d,Ie),L(d),l(l.P+l.F*xe,d,{set:Le}),l(l.P+l.F*!M,d,Re),s||x.toString==me||(x.toString=me),l(l.P+l.F*r(function(){new j(1).slice()}),d,{slice:Pe}),l(l.P+l.F*(r(function(){return[1,2].toLocaleString()!=new j([1,2]).toLocaleString()})||!r(function(){x.toLocaleString.call([1,2])})),d,{toLocaleString:Ae}),I[d]=M?T:O,s||M||m(x,je,O)}}else e.exports=function(){}},"./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),r=t(/*! ./_library */"./node_modules/core-js/modules/_library.js"),l=t(/*! ./_typed */"./node_modules/core-js/modules/_typed.js"),i=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),u=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js"),d=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),c=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),a=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),m=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),f=t(/*! ./_to-index */"./node_modules/core-js/modules/_to-index.js"),j=t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f,_=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,p=t(/*! ./_array-fill */"./node_modules/core-js/modules/_array-fill.js"),h=t(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),b="prototype",v="Wrong index!",y=s.ArrayBuffer,g=s.DataView,k=s.Math,x=s.RangeError,w=s.Infinity,E=y,S=k.abs,C=k.pow,T=k.floor,M=k.log,O=k.LN2,B=n?"_b":"buffer",N=n?"_l":"byteLength",A=n?"_o":"byteOffset";function I(e,o,t){var s,n,r,l=new Array(t),i=8*t-o-1,u=(1<<i)-1,d=u>>1,c=23===o?C(2,-24)-C(2,-77):0,a=0,m=e<0||0===e&&1/e<0?1:0;for((e=S(e))!=e||e===w?(n=e!=e?1:0,s=u):(s=T(M(e)/O),e*(r=C(2,-s))<1&&(s--,r*=2),(e+=s+d>=1?c/r:c*C(2,1-d))*r>=2&&(s++,r/=2),s+d>=u?(n=0,s=u):s+d>=1?(n=(e*r-1)*C(2,o),s+=d):(n=e*C(2,d-1)*C(2,o),s=0));o>=8;l[a++]=255&n,n/=256,o-=8);for(s=s<<o|n,i+=o;i>0;l[a++]=255&s,s/=256,i-=8);return l[--a]|=128*m,l}function P(e,o,t){var s,n=8*t-o-1,r=(1<<n)-1,l=r>>1,i=n-7,u=t-1,d=e[u--],c=127&d;for(d>>=7;i>0;c=256*c+e[u],u--,i-=8);for(s=c&(1<<-i)-1,c>>=-i,i+=o;i>0;s=256*s+e[u],u--,i-=8);if(0===c)c=1-l;else{if(c===r)return s?NaN:d?-w:w;s+=C(2,o),c-=l}return(d?-1:1)*s*C(2,c-o)}function L(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function R(e){return[255&e]}function F(e){return[255&e,e>>8&255]}function D(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function z(e){return I(e,52,8)}function U(e){return I(e,23,4)}function H(e,o,t){_(e[b],o,{get:function(){return this[t]}})}function G(e,o,t,s){var n=f(+t);if(n+o>e[N])throw x(v);var r=e[B]._b,l=n+e[A],i=r.slice(l,l+o);return s?i:i.reverse()}function W(e,o,t,s,n,r){var l=f(+t);if(l+o>e[N])throw x(v);for(var i=e[B]._b,u=l+e[A],d=s(+n),c=0;c<o;c++)i[u+c]=d[r?c:o-c-1]}if(l.ABV){if(!d(function(){y(1)})||!d(function(){new y(-1)})||d(function(){return new y,new y(1.5),new y(NaN),"ArrayBuffer"!=y.name})){for(var V,K=(y=function(e){return c(this,y),new E(f(e))})[b]=E[b],q=j(E),Y=0;q.length>Y;)(V=q[Y++])in y||i(y,V,E[V]);r||(K.constructor=y)}var J=new g(new y(2)),X=g[b].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||u(g[b],{setInt8:function(e,o){X.call(this,e,o<<24>>24)},setUint8:function(e,o){X.call(this,e,o<<24>>24)}},!0)}else y=function(e){c(this,y,"ArrayBuffer");var o=f(e);this._b=p.call(new Array(o),0),this[N]=o},g=function(e,o,t){c(this,g,"DataView"),c(e,y,"DataView");var s=e[N],n=a(o);if(n<0||n>s)throw x("Wrong offset!");if(n+(t=void 0===t?s-n:m(t))>s)throw x("Wrong length!");this[B]=e,this[A]=n,this[N]=t},n&&(H(y,"byteLength","_l"),H(g,"buffer","_b"),H(g,"byteLength","_l"),H(g,"byteOffset","_o")),u(g[b],{getInt8:function(e){return G(this,1,e)[0]<<24>>24},getUint8:function(e){return G(this,1,e)[0]},getInt16:function(e){var o=G(this,2,e,arguments[1]);return(o[1]<<8|o[0])<<16>>16},getUint16:function(e){var o=G(this,2,e,arguments[1]);return o[1]<<8|o[0]},getInt32:function(e){return L(G(this,4,e,arguments[1]))},getUint32:function(e){return L(G(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return P(G(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return P(G(this,8,e,arguments[1]),52,8)},setInt8:function(e,o){W(this,1,e,R,o)},setUint8:function(e,o){W(this,1,e,R,o)},setInt16:function(e,o){W(this,2,e,F,o,arguments[2])},setUint16:function(e,o){W(this,2,e,F,o,arguments[2])},setInt32:function(e,o){W(this,4,e,D,o,arguments[2])},setUint32:function(e,o){W(this,4,e,D,o,arguments[2])},setFloat32:function(e,o){W(this,4,e,U,o,arguments[2])},setFloat64:function(e,o){W(this,8,e,z,o,arguments[2])}});h(y,"ArrayBuffer"),h(g,"DataView"),i(g[b],l.VIEW,!0),o.ArrayBuffer=y,o.DataView=g},"./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */function(e,o,t){for(var s,n=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),l=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),i=l("typed_array"),u=l("view"),d=!(!n.ArrayBuffer||!n.DataView),c=d,a=0,m="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");a<9;)(s=n[m[a++]])?(r(s.prototype,i,!0),r(s.prototype,u,!0)):c=!1;e.exports={ABV:d,CONSTR:c,TYPED:i,VIEW:u}},"./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var t=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+s).toString(36))}},"./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").navigator;e.exports=s&&s.userAgent||""},"./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e,o){if(!s(e)||e._t!==o)throw TypeError("Incompatible receiver, "+o+" required!");return e}},"./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=t(/*! ./_library */"./node_modules/core-js/modules/_library.js"),l=t(/*! ./_wks-ext */"./node_modules/core-js/modules/_wks-ext.js"),i=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f;e.exports=function(e){var o=n.Symbol||(n.Symbol=r?{}:s.Symbol||{});"_"==e.charAt(0)||e in o||i(o,e,{value:l.f(e)})}},"./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){o.f=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")},"./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("wks"),n=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),r=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").Symbol,l="function"==typeof r;(e.exports=function(e){return s[e]||(s[e]=l&&r[e]||(l?r:n)("Symbol."+e))}).store=s},"./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),n=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),r=t(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js");e.exports=t(/*! ./_core */"./node_modules/core-js/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||r[s(e)]}},"./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_replacer */"./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g,"\\$&");s(s.S,"RegExp",{escape:function(e){return n(e)}})},"./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.P,"Array",{copyWithin:t(/*! ./_array-copy-within */"./node_modules/core-js/modules/_array-copy-within.js")}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")("copyWithin")},"./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(4);s(s.P+s.F*!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].every,!0),"Array",{every:function(e){return n(this,e,arguments[1])}})},"./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.P,"Array",{fill:t(/*! ./_array-fill */"./node_modules/core-js/modules/_array-fill.js")}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")("fill")},"./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(2);s(s.P+s.F*!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].filter,!0),"Array",{filter:function(e){return n(this,e,arguments[1])}})},"./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(6),r="findIndex",l=!0;r in[]&&Array(1)[r](function(){l=!1}),s(s.P+s.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")(r)},"./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(5),r=!0;"find"in[]&&Array(1).find(function(){r=!1}),s(s.P+s.F*r,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")("find")},"./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(0),r=t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].forEach,!0);s(s.P+s.F*!r,"Array",{forEach:function(e){return n(this,e,arguments[1])}})},"./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),l=t(/*! ./_iter-call */"./node_modules/core-js/modules/_iter-call.js"),i=t(/*! ./_is-array-iter */"./node_modules/core-js/modules/_is-array-iter.js"),u=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),d=t(/*! ./_create-property */"./node_modules/core-js/modules/_create-property.js"),c=t(/*! ./core.get-iterator-method */"./node_modules/core-js/modules/core.get-iterator-method.js");n(n.S+n.F*!t(/*! ./_iter-detect */"./node_modules/core-js/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function(e){var o,t,n,a,m=r(e),f="function"==typeof this?this:Array,j=arguments.length,_=j>1?arguments[1]:void 0,p=void 0!==_,h=0,b=c(m);if(p&&(_=s(_,j>2?arguments[2]:void 0,2)),void 0==b||f==Array&&i(b))for(t=new f(o=u(m.length));o>h;h++)d(t,h,p?_(m[h],h):m[h]);else for(a=b.call(m),t=new f;!(n=a.next()).done;h++)d(t,h,p?l(a,_,[n.value,h],!0):n.value);return t.length=h,t}})},"./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-includes */"./node_modules/core-js/modules/_array-includes.js")(!1),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0;s(s.P+s.F*(l||!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")(r)),"Array",{indexOf:function(e){return l?r.apply(this,arguments)||0:n(this,e,arguments[1])}})},"./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Array",{isArray:t(/*! ./_is-array */"./node_modules/core-js/modules/_is-array.js")})},"./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js"),n=t(/*! ./_iter-step */"./node_modules/core-js/modules/_iter-step.js"),r=t(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),l=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js");e.exports=t(/*! ./_iter-define */"./node_modules/core-js/modules/_iter-define.js")(Array,"Array",function(e,o){this._t=l(e),this._i=0,this._k=o},function(){var e=this._t,o=this._k,t=this._i++;return!e||t>=e.length?(this._t=void 0,n(1)):n(0,"keys"==o?t:"values"==o?e[t]:[t,e[t]])},"values"),r.Arguments=r.Array,s("keys"),s("values"),s("entries")},"./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),r=[].join;s(s.P+s.F*(t(/*! ./_iobject */"./node_modules/core-js/modules/_iobject.js")!=Object||!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")(r)),"Array",{join:function(e){return r.call(n(this),void 0===e?",":e)}})},"./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),r=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),l=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),i=[].lastIndexOf,u=!!i&&1/[1].lastIndexOf(1,-0)<0;s(s.P+s.F*(u||!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")(i)),"Array",{lastIndexOf:function(e){if(u)return i.apply(this,arguments)||0;var o=n(this),t=l(o.length),s=t-1;for(arguments.length>1&&(s=Math.min(s,r(arguments[1]))),s<0&&(s=t+s);s>=0;s--)if(s in o&&o[s]===e)return s||0;return-1}})},"./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(1);s(s.P+s.F*!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].map,!0),"Array",{map:function(e){return n(this,e,arguments[1])}})},"./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_create-property */"./node_modules/core-js/modules/_create-property.js");s(s.S+s.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){function e(){}return!(Array.of.call(e)instanceof e)}),"Array",{of:function(){for(var e=0,o=arguments.length,t=new("function"==typeof this?this:Array)(o);o>e;)n(t,e,arguments[e++]);return t.length=o,t}})},"./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-reduce */"./node_modules/core-js/modules/_array-reduce.js");s(s.P+s.F*!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].reduceRight,!0),"Array",{reduceRight:function(e){return n(this,e,arguments.length,arguments[1],!0)}})},"./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-reduce */"./node_modules/core-js/modules/_array-reduce.js");s(s.P+s.F*!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].reduce,!0),"Array",{reduce:function(e){return n(this,e,arguments.length,arguments[1],!1)}})},"./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_html */"./node_modules/core-js/modules/_html.js"),r=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js"),l=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js"),i=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),u=[].slice;s(s.P+s.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){n&&u.call(n)}),"Array",{slice:function(e,o){var t=i(this.length),s=r(this);if(o=void 0===o?t:o,"Array"==s)return u.call(this,e,o);for(var n=l(e,t),d=l(o,t),c=i(d-n),a=new Array(c),m=0;m<c;m++)a[m]="String"==s?this.charAt(n+m):this[n+m];return a}})},"./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(3);s(s.P+s.F*!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")([].some,!0),"Array",{some:function(e){return n(this,e,arguments[1])}})},"./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),r=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),l=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),i=[].sort,u=[1,2,3];s(s.P+s.F*(l(function(){u.sort(void 0)})||!l(function(){u.sort(null)})||!t(/*! ./_strict-method */"./node_modules/core-js/modules/_strict-method.js")(i)),"Array",{sort:function(e){return void 0===e?i.call(r(this)):i.call(r(this),n(e))}})},"./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")("Array")},"./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Date",{now:function(){return(new Date).getTime()}})},"./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_date-to-iso-string */"./node_modules/core-js/modules/_date-to-iso-string.js");s(s.P+s.F*(Date.prototype.toISOString!==n),"Date",{toISOString:n})},"./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js");s(s.P+s.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(e){var o=n(this),t=r(o);return"number"!=typeof t||isFinite(t)?o.toISOString():null}})},"./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toPrimitive"),n=Date.prototype;s in n||t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(n,s,t(/*! ./_date-to-primitive */"./node_modules/core-js/modules/_date-to-primitive.js"))},"./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=Date.prototype,n=s.toString,r=s.getTime;new Date(NaN)+""!="Invalid Date"&&t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(s,"toString",function(){var e=r.call(this);return e==e?n.call(this):"Invalid Date"})},"./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.P,"Function",{bind:t(/*! ./_bind */"./node_modules/core-js/modules/_bind.js")})},"./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),r=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("hasInstance"),l=Function.prototype;r in l||t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f(l,r,{value:function(e){if("function"!=typeof this||!s(e))return!1;if(!s(this.prototype))return e instanceof this;for(;e=n(e);)if(this.prototype===e)return!0;return!1}})},"./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&s(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},"./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_collection-strong */"./node_modules/core-js/modules/_collection-strong.js"),n=t(/*! ./_validate-collection */"./node_modules/core-js/modules/_validate-collection.js");e.exports=t(/*! ./_collection */"./node_modules/core-js/modules/_collection.js")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var o=s.getEntry(n(this,"Map"),e);return o&&o.v},set:function(e,o){return s.def(n(this,"Map"),0===e?0:e,o)}},s,!0)},"./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_math-log1p */"./node_modules/core-js/modules/_math-log1p.js"),r=Math.sqrt,l=Math.acosh;s(s.S+s.F*!(l&&710==Math.floor(l(Number.MAX_VALUE))&&l(1/0)==1/0),"Math",{acosh:function(e){return(e=+e)<1?NaN:e>94906265.62425156?Math.log(e)+Math.LN2:n(e-1+r(e-1)*r(e+1))}})},"./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=Math.asinh;s(s.S+s.F*!(n&&1/n(0)>0),"Math",{asinh:function e(o){return isFinite(o=+o)&&0!=o?o<0?-e(-o):Math.log(o+Math.sqrt(o*o+1)):o}})},"./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=Math.atanh;s(s.S+s.F*!(n&&1/n(-0)<0),"Math",{atanh:function(e){return 0==(e=+e)?e:Math.log((1+e)/(1-e))/2}})},"./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_math-sign */"./node_modules/core-js/modules/_math-sign.js");s(s.S,"Math",{cbrt:function(e){return n(e=+e)*Math.pow(Math.abs(e),1/3)}})},"./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},"./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=Math.exp;s(s.S,"Math",{cosh:function(e){return(n(e=+e)+n(-e))/2}})},"./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_math-expm1 */"./node_modules/core-js/modules/_math-expm1.js");s(s.S+s.F*(n!=Math.expm1),"Math",{expm1:n})},"./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{fround:t(/*! ./_math-fround */"./node_modules/core-js/modules/_math-fround.js")})},"./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=Math.abs;s(s.S,"Math",{hypot:function(e,o){for(var t,s,r=0,l=0,i=arguments.length,u=0;l<i;)u<(t=n(arguments[l++]))?(r=r*(s=u/t)*s+1,u=t):r+=t>0?(s=t/u)*s:t;return u===1/0?1/0:u*Math.sqrt(r)}})},"./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=Math.imul;s(s.S+s.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return-5!=n(4294967295,5)||2!=n.length}),"Math",{imul:function(e,o){var t=+e,s=+o,n=65535&t,r=65535&s;return 0|n*r+((65535&t>>>16)*r+n*(65535&s>>>16)<<16>>>0)}})},"./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{log10:function(e){return Math.log(e)*Math.LOG10E}})},"./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{log1p:t(/*! ./_math-log1p */"./node_modules/core-js/modules/_math-log1p.js")})},"./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},"./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{sign:t(/*! ./_math-sign */"./node_modules/core-js/modules/_math-sign.js")})},"./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_math-expm1 */"./node_modules/core-js/modules/_math-expm1.js"),r=Math.exp;s(s.S+s.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(e){return Math.abs(e=+e)<1?(n(e)-n(-e))/2:(r(e-1)-r(-e-1))*(Math.E/2)}})},"./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_math-expm1 */"./node_modules/core-js/modules/_math-expm1.js"),r=Math.exp;s(s.S,"Math",{tanh:function(e){var o=n(e=+e),t=n(-e);return o==1/0?1:t==1/0?-1:(o-t)/(r(e)+r(-e))}})},"./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},"./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),r=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js"),l=t(/*! ./_inherit-if-required */"./node_modules/core-js/modules/_inherit-if-required.js"),i=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),u=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),d=t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f,c=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js").f,a=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,m=t(/*! ./_string-trim */"./node_modules/core-js/modules/_string-trim.js").trim,f=s.Number,j=f,_=f.prototype,p="Number"==r(t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js")(_)),h="trim"in String.prototype,b=function(e){var o=i(e,!1);if("string"==typeof o&&o.length>2){var t,s,n,r=(o=h?o.trim():m(o,3)).charCodeAt(0);if(43===r||45===r){if(88===(t=o.charCodeAt(2))||120===t)return NaN}else if(48===r){switch(o.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+o}for(var l,u=o.slice(2),d=0,c=u.length;d<c;d++)if((l=u.charCodeAt(d))<48||l>n)return NaN;return parseInt(u,s)}}return+o};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var o=arguments.length<1?0:e,t=this;return t instanceof f&&(p?u(function(){_.valueOf.call(t)}):"Number"!=r(t))?l(new j(b(o)),t,f):b(o)};for(var v,y=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?d(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;y.length>g;g++)n(j,v=y[g])&&!n(f,v)&&a(f,v,c(j,v));f.prototype=_,_.constructor=f,t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(s,"Number",f)}},"./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Number",{EPSILON:Math.pow(2,-52)})},"./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").isFinite;s(s.S,"Number",{isFinite:function(e){return"number"==typeof e&&n(e)}})},"./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Number",{isInteger:t(/*! ./_is-integer */"./node_modules/core-js/modules/_is-integer.js")})},"./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Number",{isNaN:function(e){return e!=e}})},"./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_is-integer */"./node_modules/core-js/modules/_is-integer.js"),r=Math.abs;s(s.S,"Number",{isSafeInteger:function(e){return n(e)&&r(e)<=9007199254740991}})},"./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},"./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_parse-float */"./node_modules/core-js/modules/_parse-float.js");s(s.S+s.F*(Number.parseFloat!=n),"Number",{parseFloat:n})},"./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_parse-int */"./node_modules/core-js/modules/_parse-int.js");s(s.S+s.F*(Number.parseInt!=n),"Number",{parseInt:n})},"./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),r=t(/*! ./_a-number-value */"./node_modules/core-js/modules/_a-number-value.js"),l=t(/*! ./_string-repeat */"./node_modules/core-js/modules/_string-repeat.js"),i=1..toFixed,u=Math.floor,d=[0,0,0,0,0,0],c="Number.toFixed: incorrect invocation!",a=function(e,o){for(var t=-1,s=o;++t<6;)s+=e*d[t],d[t]=s%1e7,s=u(s/1e7)},m=function(e){for(var o=6,t=0;--o>=0;)t+=d[o],d[o]=u(t/e),t=t%e*1e7},f=function(){for(var e=6,o="";--e>=0;)if(""!==o||0===e||0!==d[e]){var t=String(d[e]);o=""===o?t:o+l.call("0",7-t.length)+t}return o},j=function(e,o,t){return 0===o?t:o%2==1?j(e,o-1,t*e):j(e*e,o/2,t)};s(s.P+s.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){i.call({})})),"Number",{toFixed:function(e){var o,t,s,i,u=r(this,c),d=n(e),_="",p="0";if(d<0||d>20)throw RangeError(c);if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(_="-",u=-u),u>1e-21)if(t=(o=function(e){for(var o=0,t=e;t>=4096;)o+=12,t/=4096;for(;t>=2;)o+=1,t/=2;return o}(u*j(2,69,1))-69)<0?u*j(2,-o,1):u/j(2,o,1),t*=4503599627370496,(o=52-o)>0){for(a(0,t),s=d;s>=7;)a(1e7,0),s-=7;for(a(j(10,s,1),0),s=o-1;s>=23;)m(1<<23),s-=23;m(1<<s),a(1,1),m(2),p=f()}else a(0,t),a(1<<-o,0),p=f()+l.call("0",d);return p=d>0?_+((i=p.length)<=d?"0."+l.call("0",d-i)+p:p.slice(0,i-d)+"."+p.slice(i-d)):_+p}})},"./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),r=t(/*! ./_a-number-value */"./node_modules/core-js/modules/_a-number-value.js"),l=1..toPrecision;s(s.P+s.F*(n(function(){return"1"!==l.call(1,void 0)})||!n(function(){l.call({})})),"Number",{toPrecision:function(e){var o=r(this,"Number#toPrecision: incorrect invocation!");return void 0===e?l.call(o):l.call(o,e)}})},"./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S+s.F,"Object",{assign:t(/*! ./_object-assign */"./node_modules/core-js/modules/_object-assign.js")})},"./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Object",{create:t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js")})},"./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S+s.F*!t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),"Object",{defineProperties:t(/*! ./_object-dps */"./node_modules/core-js/modules/_object-dps.js")})},"./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S+s.F*!t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),"Object",{defineProperty:t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f})},"./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").onFreeze;t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("freeze",function(e){return function(o){return e&&s(o)?e(n(o)):o}})},"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),n=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js").f;t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("getOwnPropertyDescriptor",function(){return function(e,o){return n(s(e),o)}})},"./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("getOwnPropertyNames",function(){return t(/*! ./_object-gopn-ext */"./node_modules/core-js/modules/_object-gopn-ext.js").f})},"./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),n=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js");t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("getPrototypeOf",function(){return function(e){return n(s(e))}})},"./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("isExtensible",function(e){return function(o){return!!s(o)&&(!e||e(o))}})},"./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("isFrozen",function(e){return function(o){return!s(o)||!!e&&e(o)}})},"./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("isSealed",function(e){return function(o){return!s(o)||!!e&&e(o)}})},"./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Object",{is:t(/*! ./_same-value */"./node_modules/core-js/modules/_same-value.js")})},"./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),n=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js");t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("keys",function(){return function(e){return n(s(e))}})},"./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").onFreeze;t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("preventExtensions",function(e){return function(o){return e&&s(o)?e(n(o)):o}})},"./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").onFreeze;t(/*! ./_object-sap */"./node_modules/core-js/modules/_object-sap.js")("seal",function(e){return function(o){return e&&s(o)?e(n(o)):o}})},"./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Object",{setPrototypeOf:t(/*! ./_set-proto */"./node_modules/core-js/modules/_set-proto.js").set})},"./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),n={};n[t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag")]="z",n+""!="[object z]"&&t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(Object.prototype,"toString",function(){return"[object "+s(this)+"]"},!0)},"./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_parse-float */"./node_modules/core-js/modules/_parse-float.js");s(s.G+s.F*(parseFloat!=n),{parseFloat:n})},"./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_parse-int */"./node_modules/core-js/modules/_parse-int.js");s(s.G+s.F*(parseInt!=n),{parseInt:n})},"./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s,n,r,l,i=t(/*! ./_library */"./node_modules/core-js/modules/_library.js"),u=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),d=t(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),c=t(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),a=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),m=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),f=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),j=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),_=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),p=t(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),h=t(/*! ./_task */"./node_modules/core-js/modules/_task.js").set,b=t(/*! ./_microtask */"./node_modules/core-js/modules/_microtask.js")(),v=t(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js"),y=t(/*! ./_perform */"./node_modules/core-js/modules/_perform.js"),g=t(/*! ./_user-agent */"./node_modules/core-js/modules/_user-agent.js"),k=t(/*! ./_promise-resolve */"./node_modules/core-js/modules/_promise-resolve.js"),x=u.TypeError,w=u.process,E=w&&w.versions,S=E&&E.v8||"",C=u.Promise,T="process"==c(w),M=function(){},O=n=v.f,B=!!function(){try{var e=C.resolve(1),o=(e.constructor={})[t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species")]=function(e){e(M,M)};return(T||"function"==typeof PromiseRejectionEvent)&&e.then(M)instanceof o&&0!==S.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(e){}}(),N=function(e){var o;return!(!m(e)||"function"!=typeof(o=e.then))&&o},A=function(e,o){if(!e._n){e._n=!0;var t=e._c;b(function(){for(var s=e._v,n=1==e._s,r=0,l=function(o){var t,r,l,i=n?o.ok:o.fail,u=o.resolve,d=o.reject,c=o.domain;try{i?(n||(2==e._h&&L(e),e._h=1),!0===i?t=s:(c&&c.enter(),t=i(s),c&&(c.exit(),l=!0)),t===o.promise?d(x("Promise-chain cycle")):(r=N(t))?r.call(t,u,d):u(t)):d(s)}catch(e){c&&!l&&c.exit(),d(e)}};t.length>r;)l(t[r++]);e._c=[],e._n=!1,o&&!e._h&&I(e)})}},I=function(e){h.call(u,function(){var o,t,s,n=e._v,r=P(e);if(r&&(o=y(function(){T?w.emit("unhandledRejection",n,e):(t=u.onunhandledrejection)?t({promise:e,reason:n}):(s=u.console)&&s.error&&s.error("Unhandled promise rejection",n)}),e._h=T||P(e)?2:1),e._a=void 0,r&&o.e)throw o.v})},P=function(e){return 1!==e._h&&0===(e._a||e._c).length},L=function(e){h.call(u,function(){var o;T?w.emit("rejectionHandled",e):(o=u.onrejectionhandled)&&o({promise:e,reason:e._v})})},R=function(e){var o=this;o._d||(o._d=!0,(o=o._w||o)._v=e,o._s=2,o._a||(o._a=o._c.slice()),A(o,!0))},F=function(e){var o,t=this;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw x("Promise can't be resolved itself");(o=N(e))?b(function(){var s={_w:t,_d:!1};try{o.call(e,d(F,s,1),d(R,s,1))}catch(e){R.call(s,e)}}):(t._v=e,t._s=1,A(t,!1))}catch(e){R.call({_w:t,_d:!1},e)}}};B||(C=function(e){j(this,C,"Promise","_h"),f(e),s.call(this);try{e(d(F,this,1),d(R,this,1))}catch(e){R.call(this,e)}},(s=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js")(C.prototype,{then:function(e,o){var t=O(p(this,C));return t.ok="function"!=typeof e||e,t.fail="function"==typeof o&&o,t.domain=T?w.domain:void 0,this._c.push(t),this._a&&this._a.push(t),this._s&&A(this,!1),t.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new s;this.promise=e,this.resolve=d(F,e,1),this.reject=d(R,e,1)},v.f=O=function(e){return e===C||e===l?new r(e):n(e)}),a(a.G+a.W+a.F*!B,{Promise:C}),t(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js")(C,"Promise"),t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")("Promise"),l=t(/*! ./_core */"./node_modules/core-js/modules/_core.js").Promise,a(a.S+a.F*!B,"Promise",{reject:function(e){var o=O(this);return(0,o.reject)(e),o.promise}}),a(a.S+a.F*(i||!B),"Promise",{resolve:function(e){return k(i&&this===l?C:this,e)}}),a(a.S+a.F*!(B&&t(/*! ./_iter-detect */"./node_modules/core-js/modules/_iter-detect.js")(function(e){C.all(e).catch(M)})),"Promise",{all:function(e){var o=this,t=O(o),s=t.resolve,n=t.reject,r=y(function(){var t=[],r=0,l=1;_(e,!1,function(e){var i=r++,u=!1;t.push(void 0),l++,o.resolve(e).then(function(e){u||(u=!0,t[i]=e,--l||s(t))},n)}),--l||s(t)});return r.e&&n(r.v),t.promise},race:function(e){var o=this,t=O(o),s=t.reject,n=y(function(){_(e,!1,function(e){o.resolve(e).then(t.resolve,s)})});return n.e&&s(n.v),t.promise}})},"./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),l=(t(/*! ./_global */"./node_modules/core-js/modules/_global.js").Reflect||{}).apply,i=Function.apply;s(s.S+s.F*!t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){l(function(){})}),"Reflect",{apply:function(e,o,t){var s=n(e),u=r(t);return l?l(s,o,u):i.call(s,o,u)}})},"./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),r=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),l=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),i=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),u=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),d=t(/*! ./_bind */"./node_modules/core-js/modules/_bind.js"),c=(t(/*! ./_global */"./node_modules/core-js/modules/_global.js").Reflect||{}).construct,a=u(function(){function e(){}return!(c(function(){},[],e)instanceof e)}),m=!u(function(){c(function(){})});s(s.S+s.F*(a||m),"Reflect",{construct:function(e,o){r(e),l(o);var t=arguments.length<3?e:r(arguments[2]);if(m&&!a)return c(e,o,t);if(e==t){switch(o.length){case 0:return new e;case 1:return new e(o[0]);case 2:return new e(o[0],o[1]);case 3:return new e(o[0],o[1],o[2]);case 4:return new e(o[0],o[1],o[2],o[3])}var s=[null];return s.push.apply(s,o),new(d.apply(e,s))}var u=t.prototype,f=n(i(u)?u:Object.prototype),j=Function.apply.call(e,f,o);return i(j)?j:f}})},"./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),l=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js");n(n.S+n.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){Reflect.defineProperty(s.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(e,o,t){r(e),o=l(o,!0),r(t);try{return s.f(e,o,t),!0}catch(e){return!1}}})},"./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js").f,r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");s(s.S,"Reflect",{deleteProperty:function(e,o){var t=n(r(e),o);return!(t&&!t.configurable)&&delete e[o]}})},"./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=function(e){this._t=n(e),this._i=0;var o,t=this._k=[];for(o in e)t.push(o)};t(/*! ./_iter-create */"./node_modules/core-js/modules/_iter-create.js")(r,"Object",function(){var e,o=this._k;do{if(this._i>=o.length)return{value:void 0,done:!0}}while(!((e=o[this._i++])in this._t));return{value:e,done:!1}}),s(s.S,"Reflect",{enumerate:function(e){return new r(e)}})},"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");n(n.S,"Reflect",{getOwnPropertyDescriptor:function(e,o){return s.f(r(e),o)}})},"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),r=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");s(s.S,"Reflect",{getPrototypeOf:function(e){return n(r(e))}})},"./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),n=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),r=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),l=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),i=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),u=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");l(l.S,"Reflect",{get:function e(o,t){var l,d,c=arguments.length<3?o:arguments[2];return u(o)===c?o[t]:(l=s.f(o,t))?r(l,"value")?l.value:void 0!==l.get?l.get.call(c):void 0:i(d=n(o))?e(d,t,c):void 0}})},"./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Reflect",{has:function(e,o){return o in e}})},"./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=Object.isExtensible;s(s.S,"Reflect",{isExtensible:function(e){return n(e),!r||r(e)}})},"./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Reflect",{ownKeys:t(/*! ./_own-keys */"./node_modules/core-js/modules/_own-keys.js")})},"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=Object.preventExtensions;s(s.S,"Reflect",{preventExtensions:function(e){n(e);try{return r&&r(e),!0}catch(e){return!1}}})},"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_set-proto */"./node_modules/core-js/modules/_set-proto.js");n&&s(s.S,"Reflect",{setPrototypeOf:function(e,o){n.check(e,o);try{return n.set(e,o),!0}catch(e){return!1}}})},"./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),n=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),r=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),l=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),i=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),u=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),d=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),c=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");i(i.S,"Reflect",{set:function e(o,t,i){var a,m,f=arguments.length<4?o:arguments[3],j=n.f(d(o),t);if(!j){if(c(m=r(o)))return e(m,t,i,f);j=u(0)}if(l(j,"value")){if(!1===j.writable||!c(f))return!1;if(a=n.f(f,t)){if(a.get||a.set||!1===a.writable)return!1;a.value=i,s.f(f,t,a)}else s.f(f,t,u(0,i));return!0}return void 0!==j.set&&(j.set.call(f,i),!0)}})},"./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_inherit-if-required */"./node_modules/core-js/modules/_inherit-if-required.js"),r=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,l=t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f,i=t(/*! ./_is-regexp */"./node_modules/core-js/modules/_is-regexp.js"),u=t(/*! ./_flags */"./node_modules/core-js/modules/_flags.js"),d=s.RegExp,c=d,a=d.prototype,m=/a/g,f=/a/g,j=new d(m)!==m;if(t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&(!j||t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return f[t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("match")]=!1,d(m)!=m||d(f)==f||"/a/i"!=d(m,"i")}))){d=function(e,o){var t=this instanceof d,s=i(e),r=void 0===o;return!t&&s&&e.constructor===d&&r?e:n(j?new c(s&&!r?e.source:e,o):c((s=e instanceof d)?e.source:e,s&&r?u.call(e):o),t?this:a,d)};for(var _=function(e){e in d||r(d,e,{configurable:!0,get:function(){return c[e]},set:function(o){c[e]=o}})},p=l(c),h=0;p.length>h;)_(p[h++]);a.constructor=d,d.prototype=a,t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(s,"RegExp",d)}t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")("RegExp")},"./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&"g"!=/./g.flags&&t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype,"flags",{configurable:!0,get:t(/*! ./_flags */"./node_modules/core-js/modules/_flags.js")})},"./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_fix-re-wks */"./node_modules/core-js/modules/_fix-re-wks.js")("match",1,function(e,o,t){return[function(t){"use strict";var s=e(this),n=void 0==t?void 0:t[o];return void 0!==n?n.call(t,s):new RegExp(t)[o](String(s))},t]})},"./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_fix-re-wks */"./node_modules/core-js/modules/_fix-re-wks.js")("replace",2,function(e,o,t){return[function(s,n){"use strict";var r=e(this),l=void 0==s?void 0:s[o];return void 0!==l?l.call(s,r,n):t.call(String(r),s,n)},t]})},"./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_fix-re-wks */"./node_modules/core-js/modules/_fix-re-wks.js")("search",1,function(e,o,t){return[function(t){"use strict";var s=e(this),n=void 0==t?void 0:t[o];return void 0!==n?n.call(t,s):new RegExp(t)[o](String(s))},t]})},"./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_fix-re-wks */"./node_modules/core-js/modules/_fix-re-wks.js")("split",2,function(e,o,s){"use strict";var n=t(/*! ./_is-regexp */"./node_modules/core-js/modules/_is-regexp.js"),r=s,l=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var i=void 0===/()??/.exec("")[1];s=function(e,o){var t=String(this);if(void 0===e&&0===o)return[];if(!n(e))return r.call(t,e,o);var s,u,d,c,a,m=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),j=0,_=void 0===o?4294967295:o>>>0,p=new RegExp(e.source,f+"g");for(i||(s=new RegExp("^"+p.source+"$(?!\\s)",f));(u=p.exec(t))&&!((d=u.index+u[0].length)>j&&(m.push(t.slice(j,u.index)),!i&&u.length>1&&u[0].replace(s,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(u[a]=void 0)}),u.length>1&&u.index<t.length&&l.apply(m,u.slice(1)),c=u[0].length,j=d,m.length>=_));)p.lastIndex===u.index&&p.lastIndex++;return j===t.length?!c&&p.test("")||m.push(""):m.push(t.slice(j)),m.length>_?m.slice(0,_):m}}else"0".split(void 0,0).length&&(s=function(e,o){return void 0===e&&0===o?[]:r.call(this,e,o)});return[function(t,n){var r=e(this),l=void 0==t?void 0:t[o];return void 0!==l?l.call(t,r,n):s.call(String(r),t,n)},s]})},"./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./es6.regexp.flags */"./node_modules/core-js/modules/es6.regexp.flags.js");var s=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),n=t(/*! ./_flags */"./node_modules/core-js/modules/_flags.js"),r=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),l=/./.toString,i=function(e){t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(RegExp.prototype,"toString",e,!0)};t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?i(function(){var e=s(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?n.call(e):void 0)}):"toString"!=l.name&&i(function(){return l.call(this)})},"./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_collection-strong */"./node_modules/core-js/modules/_collection-strong.js"),n=t(/*! ./_validate-collection */"./node_modules/core-js/modules/_validate-collection.js");e.exports=t(/*! ./_collection */"./node_modules/core-js/modules/_collection.js")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return s.def(n(this,"Set"),e=0===e?0:e,e)}},s)},"./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("anchor",function(e){return function(o){return e(this,"a","name",o)}})},"./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("big",function(e){return function(){return e(this,"big","","")}})},"./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("blink",function(e){return function(){return e(this,"blink","","")}})},"./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("bold",function(e){return function(){return e(this,"b","","")}})},"./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_string-at */"./node_modules/core-js/modules/_string-at.js")(!1);s(s.P,"String",{codePointAt:function(e){return n(this,e)}})},"./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),r=t(/*! ./_string-context */"./node_modules/core-js/modules/_string-context.js"),l="".endsWith;s(s.P+s.F*t(/*! ./_fails-is-regexp */"./node_modules/core-js/modules/_fails-is-regexp.js")("endsWith"),"String",{endsWith:function(e){var o=r(this,e,"endsWith"),t=arguments.length>1?arguments[1]:void 0,s=n(o.length),i=void 0===t?s:Math.min(n(t),s),u=String(e);return l?l.call(o,u,i):o.slice(i-u.length,i)===u}})},"./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("fixed",function(e){return function(){return e(this,"tt","","")}})},"./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("fontcolor",function(e){return function(o){return e(this,"font","color",o)}})},"./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("fontsize",function(e){return function(o){return e(this,"font","size",o)}})},"./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js"),r=String.fromCharCode,l=String.fromCodePoint;s(s.S+s.F*(!!l&&1!=l.length),"String",{fromCodePoint:function(e){for(var o,t=[],s=arguments.length,l=0;s>l;){if(o=+arguments[l++],n(o,1114111)!==o)throw RangeError(o+" is not a valid code point");t.push(o<65536?r(o):r(55296+((o-=65536)>>10),o%1024+56320))}return t.join("")}})},"./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_string-context */"./node_modules/core-js/modules/_string-context.js");s(s.P+s.F*t(/*! ./_fails-is-regexp */"./node_modules/core-js/modules/_fails-is-regexp.js")("includes"),"String",{includes:function(e){return!!~n(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("italics",function(e){return function(){return e(this,"i","","")}})},"./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_string-at */"./node_modules/core-js/modules/_string-at.js")(!0);t(/*! ./_iter-define */"./node_modules/core-js/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,o=this._t,t=this._i;return t>=o.length?{value:void 0,done:!0}:(e=s(o,t),this._i+=e.length,{value:e,done:!1})})},"./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("link",function(e){return function(o){return e(this,"a","href",o)}})},"./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),r=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js");s(s.S,"String",{raw:function(e){for(var o=n(e.raw),t=r(o.length),s=arguments.length,l=[],i=0;t>i;)l.push(String(o[i++])),i<s&&l.push(String(arguments[i]));return l.join("")}})},"./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.P,"String",{repeat:t(/*! ./_string-repeat */"./node_modules/core-js/modules/_string-repeat.js")})},"./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("small",function(e){return function(){return e(this,"small","","")}})},"./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),r=t(/*! ./_string-context */"./node_modules/core-js/modules/_string-context.js"),l="".startsWith;s(s.P+s.F*t(/*! ./_fails-is-regexp */"./node_modules/core-js/modules/_fails-is-regexp.js")("startsWith"),"String",{startsWith:function(e){var o=r(this,e,"startsWith"),t=n(Math.min(arguments.length>1?arguments[1]:void 0,o.length)),s=String(e);return l?l.call(o,s,t):o.slice(t,t+s.length)===s}})},"./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("strike",function(e){return function(){return e(this,"strike","","")}})},"./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("sub",function(e){return function(){return e(this,"sub","","")}})},"./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-html */"./node_modules/core-js/modules/_string-html.js")("sup",function(e){return function(){return e(this,"sup","","")}})},"./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-trim */"./node_modules/core-js/modules/_string-trim.js")("trim",function(e){return function(){return e(this,3)}})},"./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_has */"./node_modules/core-js/modules/_has.js"),r=t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),l=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),i=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),u=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").KEY,d=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),c=t(/*! ./_shared */"./node_modules/core-js/modules/_shared.js"),a=t(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),m=t(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),f=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js"),j=t(/*! ./_wks-ext */"./node_modules/core-js/modules/_wks-ext.js"),_=t(/*! ./_wks-define */"./node_modules/core-js/modules/_wks-define.js"),p=t(/*! ./_enum-keys */"./node_modules/core-js/modules/_enum-keys.js"),h=t(/*! ./_is-array */"./node_modules/core-js/modules/_is-array.js"),b=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),v=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),y=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),g=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),k=t(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),x=t(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),w=t(/*! ./_object-gopn-ext */"./node_modules/core-js/modules/_object-gopn-ext.js"),E=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),S=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),C=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),T=E.f,M=S.f,O=w.f,B=s.Symbol,N=s.JSON,A=N&&N.stringify,I=f("_hidden"),P=f("toPrimitive"),L={}.propertyIsEnumerable,R=c("symbol-registry"),F=c("symbols"),D=c("op-symbols"),z=Object.prototype,U="function"==typeof B,H=s.QObject,G=!H||!H.prototype||!H.prototype.findChild,W=r&&d(function(){return 7!=x(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(e,o,t){var s=T(z,o);s&&delete z[o],M(e,o,t),s&&e!==z&&M(z,o,s)}:M,V=function(e){var o=F[e]=x(B.prototype);return o._k=e,o},K=U&&"symbol"==typeof B.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof B},q=function(e,o,t){return e===z&&q(D,o,t),b(e),o=g(o,!0),b(t),n(F,o)?(t.enumerable?(n(e,I)&&e[I][o]&&(e[I][o]=!1),t=x(t,{enumerable:k(0,!1)})):(n(e,I)||M(e,I,k(1,{})),e[I][o]=!0),W(e,o,t)):M(e,o,t)},Y=function(e,o){b(e);for(var t,s=p(o=y(o)),n=0,r=s.length;r>n;)q(e,t=s[n++],o[t]);return e},J=function(e){var o=L.call(this,e=g(e,!0));return!(this===z&&n(F,e)&&!n(D,e))&&(!(o||!n(this,e)||!n(F,e)||n(this,I)&&this[I][e])||o)},X=function(e,o){if(e=y(e),o=g(o,!0),e!==z||!n(F,o)||n(D,o)){var t=T(e,o);return!t||!n(F,o)||n(e,I)&&e[I][o]||(t.enumerable=!0),t}},$=function(e){for(var o,t=O(y(e)),s=[],r=0;t.length>r;)n(F,o=t[r++])||o==I||o==u||s.push(o);return s},Z=function(e){for(var o,t=e===z,s=O(t?D:y(e)),r=[],l=0;s.length>l;)!n(F,o=s[l++])||t&&!n(z,o)||r.push(F[o]);return r};U||(i((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),o=function(t){this===z&&o.call(D,t),n(this,I)&&n(this[I],e)&&(this[I][e]=!1),W(this,e,k(1,t))};return r&&G&&W(z,e,{configurable:!0,set:o}),V(e)}).prototype,"toString",function(){return this._k}),E.f=X,S.f=q,t(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f=w.f=$,t(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js").f=J,t(/*! ./_object-gops */"./node_modules/core-js/modules/_object-gops.js").f=Z,r&&!t(/*! ./_library */"./node_modules/core-js/modules/_library.js")&&i(z,"propertyIsEnumerable",J,!0),j.f=function(e){return V(f(e))}),l(l.G+l.W+l.F*!U,{Symbol:B});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)f(Q[ee++]);for(var oe=C(f.store),te=0;oe.length>te;)_(oe[te++]);l(l.S+l.F*!U,"Symbol",{for:function(e){return n(R,e+="")?R[e]:R[e]=B(e)},keyFor:function(e){if(!K(e))throw TypeError(e+" is not a symbol!");for(var o in R)if(R[o]===e)return o},useSetter:function(){G=!0},useSimple:function(){G=!1}}),l(l.S+l.F*!U,"Object",{create:function(e,o){return void 0===o?x(e):Y(x(e),o)},defineProperty:q,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:Z}),N&&l(l.S+l.F*(!U||d(function(){var e=B();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var o,t,s=[e],n=1;arguments.length>n;)s.push(arguments[n++]);if(t=o=s[1],(v(o)||void 0!==e)&&!K(e))return h(o)||(o=function(e,o){if("function"==typeof t&&(o=t.call(this,e,o)),!K(o))return o}),s[1]=o,A.apply(N,s)}}),B.prototype[P]||t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(B.prototype,P,B.prototype.valueOf),a(B,"Symbol"),a(Math,"Math",!0),a(s.JSON,"JSON",!0)},"./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_typed */"./node_modules/core-js/modules/_typed.js"),r=t(/*! ./_typed-buffer */"./node_modules/core-js/modules/_typed-buffer.js"),l=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),i=t(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js"),u=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),d=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),c=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").ArrayBuffer,a=t(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),m=r.ArrayBuffer,f=r.DataView,j=n.ABV&&c.isView,_=m.prototype.slice,p=n.VIEW;s(s.G+s.W+s.F*(c!==m),{ArrayBuffer:m}),s(s.S+s.F*!n.CONSTR,"ArrayBuffer",{isView:function(e){return j&&j(e)||d(e)&&p in e}}),s(s.P+s.U+s.F*t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return!new m(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function(e,o){if(void 0!==_&&void 0===o)return _.call(l(this),e);for(var t=l(this).byteLength,s=i(e,t),n=i(void 0===o?t:o,t),r=new(a(this,m))(u(n-s)),d=new f(this),c=new f(r),j=0;s<n;)c.setUint8(j++,d.getUint8(s++));return r}}),t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")("ArrayBuffer")},"./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.G+s.W+s.F*!t(/*! ./_typed */"./node_modules/core-js/modules/_typed.js").ABV,{DataView:t(/*! ./_typed-buffer */"./node_modules/core-js/modules/_typed-buffer.js").DataView})},"./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Float32",4,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Float64",8,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Int16",2,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Int32",4,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Int8",1,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Uint16",2,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Uint32",4,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Uint8",1,function(e){return function(o,t,s){return e(this,o,t,s)}})},"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_typed-array */"./node_modules/core-js/modules/_typed-array.js")("Uint8",1,function(e){return function(o,t,s){return e(this,o,t,s)}},!0)},"./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s,n=t(/*! ./_array-methods */"./node_modules/core-js/modules/_array-methods.js")(0),r=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),l=t(/*! ./_meta */"./node_modules/core-js/modules/_meta.js"),i=t(/*! ./_object-assign */"./node_modules/core-js/modules/_object-assign.js"),u=t(/*! ./_collection-weak */"./node_modules/core-js/modules/_collection-weak.js"),d=t(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),c=t(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),a=t(/*! ./_validate-collection */"./node_modules/core-js/modules/_validate-collection.js"),m=l.getWeak,f=Object.isExtensible,j=u.ufstore,_={},p=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},h={get:function(e){if(d(e)){var o=m(e);return!0===o?j(a(this,"WeakMap")).get(e):o?o[this._i]:void 0}},set:function(e,o){return u.def(a(this,"WeakMap"),e,o)}},b=e.exports=t(/*! ./_collection */"./node_modules/core-js/modules/_collection.js")("WeakMap",p,h,u,!0,!0);c(function(){return 7!=(new b).set((Object.freeze||Object)(_),7).get(_)})&&(i((s=u.getConstructor(p,"WeakMap")).prototype,h),l.NEED=!0,n(["delete","has","get","set"],function(e){var o=b.prototype,t=o[e];r(o,e,function(o,n){if(d(o)&&!f(o)){this._f||(this._f=new s);var r=this._f[e](o,n);return"set"==e?this:r}return t.call(this,o,n)})}))},"./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_collection-weak */"./node_modules/core-js/modules/_collection-weak.js"),n=t(/*! ./_validate-collection */"./node_modules/core-js/modules/_validate-collection.js");t(/*! ./_collection */"./node_modules/core-js/modules/_collection.js")("WeakSet",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return s.def(n(this,"WeakSet"),e,!0)}},s,!1,!0)},"./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_flatten-into-array */"./node_modules/core-js/modules/_flatten-into-array.js"),r=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),l=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),i=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),u=t(/*! ./_array-species-create */"./node_modules/core-js/modules/_array-species-create.js");s(s.P,"Array",{flatMap:function(e){var o,t,s=r(this);return i(e),o=l(s.length),t=u(s,0),n(t,s,s,o,0,1,e,arguments[1]),t}}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")("flatMap")},"./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_flatten-into-array */"./node_modules/core-js/modules/_flatten-into-array.js"),r=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),l=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),i=t(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),u=t(/*! ./_array-species-create */"./node_modules/core-js/modules/_array-species-create.js");s(s.P,"Array",{flatten:function(){var e=arguments[0],o=r(this),t=l(o.length),s=u(o,0);return n(s,o,o,t,0,void 0===e?1:i(e)),s}}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")("flatten")},"./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_array-includes */"./node_modules/core-js/modules/_array-includes.js")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),t(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js")("includes")},"./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_microtask */"./node_modules/core-js/modules/_microtask.js")(),r=t(/*! ./_global */"./node_modules/core-js/modules/_global.js").process,l="process"==t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(r);s(s.G,{asap:function(e){var o=l&&r.domain;n(o?o.bind(e):e)}})},"./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_cof */"./node_modules/core-js/modules/_cof.js");s(s.S,"Error",{isError:function(e){return"Error"===n(e)}})},"./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.G,{global:t(/*! ./_global */"./node_modules/core-js/modules/_global.js")})},"./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-from */"./node_modules/core-js/modules/_set-collection-from.js")("Map")},"./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-of */"./node_modules/core-js/modules/_set-collection-of.js")("Map")},"./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.P+s.R,"Map",{toJSON:t(/*! ./_collection-to-json */"./node_modules/core-js/modules/_collection-to-json.js")("Map")})},"./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{clamp:function(e,o,t){return Math.min(t,Math.max(o,e))}})},"./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{DEG_PER_RAD:Math.PI/180})},"./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=180/Math.PI;s(s.S,"Math",{degrees:function(e){return e*n}})},"./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_math-scale */"./node_modules/core-js/modules/_math-scale.js"),r=t(/*! ./_math-fround */"./node_modules/core-js/modules/_math-fround.js");s(s.S,"Math",{fscale:function(e,o,t,s,l){return r(n(e,o,t,s,l))}})},"./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{iaddh:function(e,o,t,s){var n=e>>>0,r=t>>>0;return(o>>>0)+(s>>>0)+((n&r|(n|r)&~(n+r>>>0))>>>31)|0}})},"./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{imulh:function(e,o){var t=+e,s=+o,n=65535&t,r=65535&s,l=t>>16,i=s>>16,u=(l*r>>>0)+(n*r>>>16);return l*i+(u>>16)+((n*i>>>0)+(65535&u)>>16)}})},"./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{isubh:function(e,o,t,s){var n=e>>>0,r=t>>>0;return(o>>>0)-(s>>>0)-((~n&r|~(n^r)&n-r>>>0)>>>31)|0}})},"./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{RAD_PER_DEG:180/Math.PI})},"./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=Math.PI/180;s(s.S,"Math",{radians:function(e){return e*n}})},"./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{scale:t(/*! ./_math-scale */"./node_modules/core-js/modules/_math-scale.js")})},"./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{signbit:function(e){return(e=+e)!=e?e:0==e?1/e==1/0:e>0}})},"./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"Math",{umulh:function(e,o){var t=+e,s=+o,n=65535&t,r=65535&s,l=t>>>16,i=s>>>16,u=(l*r>>>0)+(n*r>>>16);return l*i+(u>>>16)+((n*i>>>0)+(65535&u)>>>16)}})},"./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),l=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js");t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&s(s.P+t(/*! ./_object-forced-pam */"./node_modules/core-js/modules/_object-forced-pam.js"),"Object",{__defineGetter__:function(e,o){l.f(n(this),e,{get:r(o),enumerable:!0,configurable:!0})}})},"./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),l=t(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js");t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&s(s.P+t(/*! ./_object-forced-pam */"./node_modules/core-js/modules/_object-forced-pam.js"),"Object",{__defineSetter__:function(e,o){l.f(n(this),e,{set:r(o),enumerable:!0,configurable:!0})}})},"./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_object-to-array */"./node_modules/core-js/modules/_object-to-array.js")(!0);s(s.S,"Object",{entries:function(e){return n(e)}})},"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_own-keys */"./node_modules/core-js/modules/_own-keys.js"),r=t(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),l=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),i=t(/*! ./_create-property */"./node_modules/core-js/modules/_create-property.js");s(s.S,"Object",{getOwnPropertyDescriptors:function(e){for(var o,t,s=r(e),u=l.f,d=n(s),c={},a=0;d.length>a;)void 0!==(t=u(s,o=d[a++]))&&i(c,o,t);return c}})},"./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),l=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),i=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js").f;t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&s(s.P+t(/*! ./_object-forced-pam */"./node_modules/core-js/modules/_object-forced-pam.js"),"Object",{__lookupGetter__:function(e){var o,t=n(this),s=r(e,!0);do{if(o=i(t,s))return o.get}while(t=l(t))}})},"./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),r=t(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),l=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),i=t(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js").f;t(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&s(s.P+t(/*! ./_object-forced-pam */"./node_modules/core-js/modules/_object-forced-pam.js"),"Object",{__lookupSetter__:function(e){var o,t=n(this),s=r(e,!0);do{if(o=i(t,s))return o.set}while(t=l(t))}})},"./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_object-to-array */"./node_modules/core-js/modules/_object-to-array.js")(!1);s(s.S,"Object",{values:function(e){return n(e)}})},"./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=t(/*! ./_core */"./node_modules/core-js/modules/_core.js"),l=t(/*! ./_microtask */"./node_modules/core-js/modules/_microtask.js")(),i=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("observable"),u=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),d=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),c=t(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),a=t(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js"),m=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),f=t(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),j=f.RETURN,_=function(e){return null==e?void 0:u(e)},p=function(e){var o=e._c;o&&(e._c=void 0,o())},h=function(e){return void 0===e._o},b=function(e){h(e)||(e._o=void 0,p(e))},v=function(e,o){d(e),this._c=void 0,this._o=e,e=new y(this);try{var t=o(e),s=t;null!=t&&("function"==typeof t.unsubscribe?t=function(){s.unsubscribe()}:u(t),this._c=t)}catch(o){return void e.error(o)}h(this)&&p(this)};v.prototype=a({},{unsubscribe:function(){b(this)}});var y=function(e){this._s=e};y.prototype=a({},{next:function(e){var o=this._s;if(!h(o)){var t=o._o;try{var s=_(t.next);if(s)return s.call(t,e)}catch(e){try{b(o)}finally{throw e}}}},error:function(e){var o=this._s;if(h(o))throw e;var t=o._o;o._o=void 0;try{var s=_(t.error);if(!s)throw e;e=s.call(t,e)}catch(e){try{p(o)}finally{throw e}}return p(o),e},complete:function(e){var o=this._s;if(!h(o)){var t=o._o;o._o=void 0;try{var s=_(t.complete);e=s?s.call(t,e):void 0}catch(e){try{p(o)}finally{throw e}}return p(o),e}}});var g=function(e){c(this,g,"Observable","_f")._f=u(e)};a(g.prototype,{subscribe:function(e){return new v(e,this._f)},forEach:function(e){var o=this;return new(r.Promise||n.Promise)(function(t,s){u(e);var n=o.subscribe({next:function(o){try{return e(o)}catch(e){s(e),n.unsubscribe()}},error:s,complete:t})})}}),a(g,{from:function(e){var o="function"==typeof this?this:g,t=_(d(e)[i]);if(t){var s=d(t.call(e));return s.constructor===o?s:new o(function(e){return s.subscribe(e)})}return new o(function(o){var t=!1;return l(function(){if(!t){try{if(f(e,!1,function(e){if(o.next(e),t)return j})===j)return}catch(e){if(t)throw e;return void o.error(e)}o.complete()}}),function(){t=!0}})},of:function(){for(var e=0,o=arguments.length,t=new Array(o);e<o;)t[e]=arguments[e++];return new("function"==typeof this?this:g)(function(e){var o=!1;return l(function(){if(!o){for(var s=0;s<t.length;++s)if(e.next(t[s]),o)return;e.complete()}}),function(){o=!0}})}}),m(g.prototype,i,function(){return this}),s(s.G,{Observable:g}),t(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")("Observable")},"./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),l=t(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),i=t(/*! ./_promise-resolve */"./node_modules/core-js/modules/_promise-resolve.js");s(s.P+s.R,"Promise",{finally:function(e){var o=l(this,n.Promise||r.Promise),t="function"==typeof e;return this.then(t?function(t){return i(o,e()).then(function(){return t})}:e,t?function(t){return i(o,e()).then(function(){throw t})}:e)}})},"./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js"),r=t(/*! ./_perform */"./node_modules/core-js/modules/_perform.js");s(s.S,"Promise",{try:function(e){var o=n.f(this),t=r(e);return(t.e?o.reject:o.resolve)(t.v),o.promise}})},"./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s.key,l=s.set;s.exp({defineMetadata:function(e,o,t,s){l(e,o,n(t),r(s))}})},"./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s.key,l=s.map,i=s.store;s.exp({deleteMetadata:function(e,o){var t=arguments.length<3?void 0:r(arguments[2]),s=l(n(o),t,!1);if(void 0===s||!s.delete(e))return!1;if(s.size)return!0;var u=i.get(o);return u.delete(t),!!u.size||i.delete(o)}})},"./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./es6.set */"./node_modules/core-js/modules/es6.set.js"),n=t(/*! ./_array-from-iterable */"./node_modules/core-js/modules/_array-from-iterable.js"),r=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),l=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),i=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),u=r.keys,d=r.key,c=function(e,o){var t=u(e,o),r=i(e);if(null===r)return t;var l=c(r,o);return l.length?t.length?n(new s(t.concat(l))):l:t};r.exp({getMetadataKeys:function(e){return c(l(e),arguments.length<2?void 0:d(arguments[1]))}})},"./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),l=s.has,i=s.get,u=s.key,d=function(e,o,t){if(l(e,o,t))return i(e,o,t);var s=r(o);return null!==s?d(e,s,t):void 0};s.exp({getMetadata:function(e,o){return d(e,n(o),arguments.length<3?void 0:u(arguments[2]))}})},"./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s.keys,l=s.key;s.exp({getOwnMetadataKeys:function(e){return r(n(e),arguments.length<2?void 0:l(arguments[1]))}})},"./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s.get,l=s.key;s.exp({getOwnMetadata:function(e,o){return r(e,n(o),arguments.length<3?void 0:l(arguments[2]))}})},"./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=t(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),l=s.has,i=s.key,u=function(e,o,t){if(l(e,o,t))return!0;var s=r(o);return null!==s&&u(e,s,t)};s.exp({hasMetadata:function(e,o){return u(e,n(o),arguments.length<3?void 0:i(arguments[2]))}})},"./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s.has,l=s.key;s.exp({hasOwnMetadata:function(e,o){return r(e,n(o),arguments.length<3?void 0:l(arguments[2]))}})},"./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_metadata */"./node_modules/core-js/modules/_metadata.js"),n=t(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=t(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),l=s.key,i=s.set;s.exp({metadata:function(e,o){return function(t,s){i(e,o,(void 0!==s?n:r)(t),l(s))}}})},"./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-from */"./node_modules/core-js/modules/_set-collection-from.js")("Set")},"./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-of */"./node_modules/core-js/modules/_set-collection-of.js")("Set")},"./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.P+s.R,"Set",{toJSON:t(/*! ./_collection-to-json */"./node_modules/core-js/modules/_collection-to-json.js")("Set")})},"./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_string-at */"./node_modules/core-js/modules/_string-at.js")(!0);s(s.P,"String",{at:function(e){return n(this,e)}})},"./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_defined */"./node_modules/core-js/modules/_defined.js"),r=t(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),l=t(/*! ./_is-regexp */"./node_modules/core-js/modules/_is-regexp.js"),i=t(/*! ./_flags */"./node_modules/core-js/modules/_flags.js"),u=RegExp.prototype,d=function(e,o){this._r=e,this._s=o};t(/*! ./_iter-create */"./node_modules/core-js/modules/_iter-create.js")(d,"RegExp String",function(){var e=this._r.exec(this._s);return{value:e,done:null===e}}),s(s.P,"String",{matchAll:function(e){if(n(this),!l(e))throw TypeError(e+" is not a regexp!");var o=String(this),t="flags"in u?String(e.flags):i.call(e),s=new RegExp(e.source,~t.indexOf("g")?t:"g"+t);return s.lastIndex=r(e.lastIndex),new d(s,o)}})},"./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_string-pad */"./node_modules/core-js/modules/_string-pad.js"),r=t(/*! ./_user-agent */"./node_modules/core-js/modules/_user-agent.js");s(s.P+s.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(r),"String",{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_string-pad */"./node_modules/core-js/modules/_string-pad.js"),r=t(/*! ./_user-agent */"./node_modules/core-js/modules/_user-agent.js");s(s.P+s.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(r),"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},"./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-trim */"./node_modules/core-js/modules/_string-trim.js")("trimLeft",function(e){return function(){return e(this,1)}},"trimStart")},"./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){"use strict";t(/*! ./_string-trim */"./node_modules/core-js/modules/_string-trim.js")("trimRight",function(e){return function(){return e(this,2)}},"trimEnd")},"./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_wks-define */"./node_modules/core-js/modules/_wks-define.js")("asyncIterator")},"./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_wks-define */"./node_modules/core-js/modules/_wks-define.js")("observable")},"./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js");s(s.S,"System",{global:t(/*! ./_global */"./node_modules/core-js/modules/_global.js")})},"./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-from */"./node_modules/core-js/modules/_set-collection-from.js")("WeakMap")},"./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-of */"./node_modules/core-js/modules/_set-collection-of.js")("WeakMap")},"./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-from */"./node_modules/core-js/modules/_set-collection-from.js")("WeakSet")},"./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){t(/*! ./_set-collection-of */"./node_modules/core-js/modules/_set-collection-of.js")("WeakSet")},"./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){for(var s=t(/*! ./es6.array.iterator */"./node_modules/core-js/modules/es6.array.iterator.js"),n=t(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),r=t(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),l=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),i=t(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),u=t(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),d=t(/*! ./_wks */"./node_modules/core-js/modules/_wks.js"),c=d("iterator"),a=d("toStringTag"),m=u.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},j=n(f),_=0;_<j.length;_++){var p,h=j[_],b=f[h],v=l[h],y=v&&v.prototype;if(y&&(y[c]||i(y,c,m),y[a]||i(y,a,h),u[h]=m,b))for(p in s)y[p]||r(y,p,s[p],!0)}},"./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),n=t(/*! ./_task */"./node_modules/core-js/modules/_task.js");s(s.G+s.B,{setImmediate:n.set,clearImmediate:n.clear})},"./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){var s=t(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n=t(/*! ./_export */"./node_modules/core-js/modules/_export.js"),r=t(/*! ./_user-agent */"./node_modules/core-js/modules/_user-agent.js"),l=[].slice,i=/MSIE .\./.test(r),u=function(e){return function(o,t){var s=arguments.length>2,n=!!s&&l.call(arguments,2);return e(s?function(){("function"==typeof o?o:Function(o)).apply(this,n)}:o,t)}};n(n.G+n.B+n.F*i,{setTimeout:u(s.setTimeout),setInterval:u(s.setInterval)})},"./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */function(e,o,t){t(/*! ./modules/es6.symbol */"./node_modules/core-js/modules/es6.symbol.js"),t(/*! ./modules/es6.object.create */"./node_modules/core-js/modules/es6.object.create.js"),t(/*! ./modules/es6.object.define-property */"./node_modules/core-js/modules/es6.object.define-property.js"),t(/*! ./modules/es6.object.define-properties */"./node_modules/core-js/modules/es6.object.define-properties.js"),t(/*! ./modules/es6.object.get-own-property-descriptor */"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js"),t(/*! ./modules/es6.object.get-prototype-of */"./node_modules/core-js/modules/es6.object.get-prototype-of.js"),t(/*! ./modules/es6.object.keys */"./node_modules/core-js/modules/es6.object.keys.js"),t(/*! ./modules/es6.object.get-own-property-names */"./node_modules/core-js/modules/es6.object.get-own-property-names.js"),t(/*! ./modules/es6.object.freeze */"./node_modules/core-js/modules/es6.object.freeze.js"),t(/*! ./modules/es6.object.seal */"./node_modules/core-js/modules/es6.object.seal.js"),t(/*! ./modules/es6.object.prevent-extensions */"./node_modules/core-js/modules/es6.object.prevent-extensions.js"),t(/*! ./modules/es6.object.is-frozen */"./node_modules/core-js/modules/es6.object.is-frozen.js"),t(/*! ./modules/es6.object.is-sealed */"./node_modules/core-js/modules/es6.object.is-sealed.js"),t(/*! ./modules/es6.object.is-extensible */"./node_modules/core-js/modules/es6.object.is-extensible.js"),t(/*! ./modules/es6.object.assign */"./node_modules/core-js/modules/es6.object.assign.js"),t(/*! ./modules/es6.object.is */"./node_modules/core-js/modules/es6.object.is.js"),t(/*! ./modules/es6.object.set-prototype-of */"./node_modules/core-js/modules/es6.object.set-prototype-of.js"),t(/*! ./modules/es6.object.to-string */"./node_modules/core-js/modules/es6.object.to-string.js"),t(/*! ./modules/es6.function.bind */"./node_modules/core-js/modules/es6.function.bind.js"),t(/*! ./modules/es6.function.name */"./node_modules/core-js/modules/es6.function.name.js"),t(/*! ./modules/es6.function.has-instance */"./node_modules/core-js/modules/es6.function.has-instance.js"),t(/*! ./modules/es6.parse-int */"./node_modules/core-js/modules/es6.parse-int.js"),t(/*! ./modules/es6.parse-float */"./node_modules/core-js/modules/es6.parse-float.js"),t(/*! ./modules/es6.number.constructor */"./node_modules/core-js/modules/es6.number.constructor.js"),t(/*! ./modules/es6.number.to-fixed */"./node_modules/core-js/modules/es6.number.to-fixed.js"),t(/*! ./modules/es6.number.to-precision */"./node_modules/core-js/modules/es6.number.to-precision.js"),t(/*! ./modules/es6.number.epsilon */"./node_modules/core-js/modules/es6.number.epsilon.js"),t(/*! ./modules/es6.number.is-finite */"./node_modules/core-js/modules/es6.number.is-finite.js"),t(/*! ./modules/es6.number.is-integer */"./node_modules/core-js/modules/es6.number.is-integer.js"),t(/*! ./modules/es6.number.is-nan */"./node_modules/core-js/modules/es6.number.is-nan.js"),t(/*! ./modules/es6.number.is-safe-integer */"./node_modules/core-js/modules/es6.number.is-safe-integer.js"),t(/*! ./modules/es6.number.max-safe-integer */"./node_modules/core-js/modules/es6.number.max-safe-integer.js"),t(/*! ./modules/es6.number.min-safe-integer */"./node_modules/core-js/modules/es6.number.min-safe-integer.js"),t(/*! ./modules/es6.number.parse-float */"./node_modules/core-js/modules/es6.number.parse-float.js"),t(/*! ./modules/es6.number.parse-int */"./node_modules/core-js/modules/es6.number.parse-int.js"),t(/*! ./modules/es6.math.acosh */"./node_modules/core-js/modules/es6.math.acosh.js"),t(/*! ./modules/es6.math.asinh */"./node_modules/core-js/modules/es6.math.asinh.js"),t(/*! ./modules/es6.math.atanh */"./node_modules/core-js/modules/es6.math.atanh.js"),t(/*! ./modules/es6.math.cbrt */"./node_modules/core-js/modules/es6.math.cbrt.js"),t(/*! ./modules/es6.math.clz32 */"./node_modules/core-js/modules/es6.math.clz32.js"),t(/*! ./modules/es6.math.cosh */"./node_modules/core-js/modules/es6.math.cosh.js"),t(/*! ./modules/es6.math.expm1 */"./node_modules/core-js/modules/es6.math.expm1.js"),t(/*! ./modules/es6.math.fround */"./node_modules/core-js/modules/es6.math.fround.js"),t(/*! ./modules/es6.math.hypot */"./node_modules/core-js/modules/es6.math.hypot.js"),t(/*! ./modules/es6.math.imul */"./node_modules/core-js/modules/es6.math.imul.js"),t(/*! ./modules/es6.math.log10 */"./node_modules/core-js/modules/es6.math.log10.js"),t(/*! ./modules/es6.math.log1p */"./node_modules/core-js/modules/es6.math.log1p.js"),t(/*! ./modules/es6.math.log2 */"./node_modules/core-js/modules/es6.math.log2.js"),t(/*! ./modules/es6.math.sign */"./node_modules/core-js/modules/es6.math.sign.js"),t(/*! ./modules/es6.math.sinh */"./node_modules/core-js/modules/es6.math.sinh.js"),t(/*! ./modules/es6.math.tanh */"./node_modules/core-js/modules/es6.math.tanh.js"),t(/*! ./modules/es6.math.trunc */"./node_modules/core-js/modules/es6.math.trunc.js"),t(/*! ./modules/es6.string.from-code-point */"./node_modules/core-js/modules/es6.string.from-code-point.js"),t(/*! ./modules/es6.string.raw */"./node_modules/core-js/modules/es6.string.raw.js"),t(/*! ./modules/es6.string.trim */"./node_modules/core-js/modules/es6.string.trim.js"),t(/*! ./modules/es6.string.iterator */"./node_modules/core-js/modules/es6.string.iterator.js"),t(/*! ./modules/es6.string.code-point-at */"./node_modules/core-js/modules/es6.string.code-point-at.js"),t(/*! ./modules/es6.string.ends-with */"./node_modules/core-js/modules/es6.string.ends-with.js"),t(/*! ./modules/es6.string.includes */"./node_modules/core-js/modules/es6.string.includes.js"),t(/*! ./modules/es6.string.repeat */"./node_modules/core-js/modules/es6.string.repeat.js"),t(/*! ./modules/es6.string.starts-with */"./node_modules/core-js/modules/es6.string.starts-with.js"),t(/*! ./modules/es6.string.anchor */"./node_modules/core-js/modules/es6.string.anchor.js"),t(/*! ./modules/es6.string.big */"./node_modules/core-js/modules/es6.string.big.js"),t(/*! ./modules/es6.string.blink */"./node_modules/core-js/modules/es6.string.blink.js"),t(/*! ./modules/es6.string.bold */"./node_modules/core-js/modules/es6.string.bold.js"),t(/*! ./modules/es6.string.fixed */"./node_modules/core-js/modules/es6.string.fixed.js"),t(/*! ./modules/es6.string.fontcolor */"./node_modules/core-js/modules/es6.string.fontcolor.js"),t(/*! ./modules/es6.string.fontsize */"./node_modules/core-js/modules/es6.string.fontsize.js"),t(/*! ./modules/es6.string.italics */"./node_modules/core-js/modules/es6.string.italics.js"),t(/*! ./modules/es6.string.link */"./node_modules/core-js/modules/es6.string.link.js"),t(/*! ./modules/es6.string.small */"./node_modules/core-js/modules/es6.string.small.js"),t(/*! ./modules/es6.string.strike */"./node_modules/core-js/modules/es6.string.strike.js"),t(/*! ./modules/es6.string.sub */"./node_modules/core-js/modules/es6.string.sub.js"),t(/*! ./modules/es6.string.sup */"./node_modules/core-js/modules/es6.string.sup.js"),t(/*! ./modules/es6.date.now */"./node_modules/core-js/modules/es6.date.now.js"),t(/*! ./modules/es6.date.to-json */"./node_modules/core-js/modules/es6.date.to-json.js"),t(/*! ./modules/es6.date.to-iso-string */"./node_modules/core-js/modules/es6.date.to-iso-string.js"),t(/*! ./modules/es6.date.to-string */"./node_modules/core-js/modules/es6.date.to-string.js"),t(/*! ./modules/es6.date.to-primitive */"./node_modules/core-js/modules/es6.date.to-primitive.js"),t(/*! ./modules/es6.array.is-array */"./node_modules/core-js/modules/es6.array.is-array.js"),t(/*! ./modules/es6.array.from */"./node_modules/core-js/modules/es6.array.from.js"),t(/*! ./modules/es6.array.of */"./node_modules/core-js/modules/es6.array.of.js"),t(/*! ./modules/es6.array.join */"./node_modules/core-js/modules/es6.array.join.js"),t(/*! ./modules/es6.array.slice */"./node_modules/core-js/modules/es6.array.slice.js"),t(/*! ./modules/es6.array.sort */"./node_modules/core-js/modules/es6.array.sort.js"),t(/*! ./modules/es6.array.for-each */"./node_modules/core-js/modules/es6.array.for-each.js"),t(/*! ./modules/es6.array.map */"./node_modules/core-js/modules/es6.array.map.js"),t(/*! ./modules/es6.array.filter */"./node_modules/core-js/modules/es6.array.filter.js"),t(/*! ./modules/es6.array.some */"./node_modules/core-js/modules/es6.array.some.js"),t(/*! ./modules/es6.array.every */"./node_modules/core-js/modules/es6.array.every.js"),t(/*! ./modules/es6.array.reduce */"./node_modules/core-js/modules/es6.array.reduce.js"),t(/*! ./modules/es6.array.reduce-right */"./node_modules/core-js/modules/es6.array.reduce-right.js"),t(/*! ./modules/es6.array.index-of */"./node_modules/core-js/modules/es6.array.index-of.js"),t(/*! ./modules/es6.array.last-index-of */"./node_modules/core-js/modules/es6.array.last-index-of.js"),t(/*! ./modules/es6.array.copy-within */"./node_modules/core-js/modules/es6.array.copy-within.js"),t(/*! ./modules/es6.array.fill */"./node_modules/core-js/modules/es6.array.fill.js"),t(/*! ./modules/es6.array.find */"./node_modules/core-js/modules/es6.array.find.js"),t(/*! ./modules/es6.array.find-index */"./node_modules/core-js/modules/es6.array.find-index.js"),t(/*! ./modules/es6.array.species */"./node_modules/core-js/modules/es6.array.species.js"),t(/*! ./modules/es6.array.iterator */"./node_modules/core-js/modules/es6.array.iterator.js"),t(/*! ./modules/es6.regexp.constructor */"./node_modules/core-js/modules/es6.regexp.constructor.js"),t(/*! ./modules/es6.regexp.to-string */"./node_modules/core-js/modules/es6.regexp.to-string.js"),t(/*! ./modules/es6.regexp.flags */"./node_modules/core-js/modules/es6.regexp.flags.js"),t(/*! ./modules/es6.regexp.match */"./node_modules/core-js/modules/es6.regexp.match.js"),t(/*! ./modules/es6.regexp.replace */"./node_modules/core-js/modules/es6.regexp.replace.js"),t(/*! ./modules/es6.regexp.search */"./node_modules/core-js/modules/es6.regexp.search.js"),t(/*! ./modules/es6.regexp.split */"./node_modules/core-js/modules/es6.regexp.split.js"),t(/*! ./modules/es6.promise */"./node_modules/core-js/modules/es6.promise.js"),t(/*! ./modules/es6.map */"./node_modules/core-js/modules/es6.map.js"),t(/*! ./modules/es6.set */"./node_modules/core-js/modules/es6.set.js"),t(/*! ./modules/es6.weak-map */"./node_modules/core-js/modules/es6.weak-map.js"),t(/*! ./modules/es6.weak-set */"./node_modules/core-js/modules/es6.weak-set.js"),t(/*! ./modules/es6.typed.array-buffer */"./node_modules/core-js/modules/es6.typed.array-buffer.js"),t(/*! ./modules/es6.typed.data-view */"./node_modules/core-js/modules/es6.typed.data-view.js"),t(/*! ./modules/es6.typed.int8-array */"./node_modules/core-js/modules/es6.typed.int8-array.js"),t(/*! ./modules/es6.typed.uint8-array */"./node_modules/core-js/modules/es6.typed.uint8-array.js"),t(/*! ./modules/es6.typed.uint8-clamped-array */"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js"),t(/*! ./modules/es6.typed.int16-array */"./node_modules/core-js/modules/es6.typed.int16-array.js"),t(/*! ./modules/es6.typed.uint16-array */"./node_modules/core-js/modules/es6.typed.uint16-array.js"),t(/*! ./modules/es6.typed.int32-array */"./node_modules/core-js/modules/es6.typed.int32-array.js"),t(/*! ./modules/es6.typed.uint32-array */"./node_modules/core-js/modules/es6.typed.uint32-array.js"),t(/*! ./modules/es6.typed.float32-array */"./node_modules/core-js/modules/es6.typed.float32-array.js"),t(/*! ./modules/es6.typed.float64-array */"./node_modules/core-js/modules/es6.typed.float64-array.js"),t(/*! ./modules/es6.reflect.apply */"./node_modules/core-js/modules/es6.reflect.apply.js"),t(/*! ./modules/es6.reflect.construct */"./node_modules/core-js/modules/es6.reflect.construct.js"),t(/*! ./modules/es6.reflect.define-property */"./node_modules/core-js/modules/es6.reflect.define-property.js"),t(/*! ./modules/es6.reflect.delete-property */"./node_modules/core-js/modules/es6.reflect.delete-property.js"),t(/*! ./modules/es6.reflect.enumerate */"./node_modules/core-js/modules/es6.reflect.enumerate.js"),t(/*! ./modules/es6.reflect.get */"./node_modules/core-js/modules/es6.reflect.get.js"),t(/*! ./modules/es6.reflect.get-own-property-descriptor */"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js"),t(/*! ./modules/es6.reflect.get-prototype-of */"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js"),t(/*! ./modules/es6.reflect.has */"./node_modules/core-js/modules/es6.reflect.has.js"),t(/*! ./modules/es6.reflect.is-extensible */"./node_modules/core-js/modules/es6.reflect.is-extensible.js"),t(/*! ./modules/es6.reflect.own-keys */"./node_modules/core-js/modules/es6.reflect.own-keys.js"),t(/*! ./modules/es6.reflect.prevent-extensions */"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js"),t(/*! ./modules/es6.reflect.set */"./node_modules/core-js/modules/es6.reflect.set.js"),t(/*! ./modules/es6.reflect.set-prototype-of */"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js"),t(/*! ./modules/es7.array.includes */"./node_modules/core-js/modules/es7.array.includes.js"),t(/*! ./modules/es7.array.flat-map */"./node_modules/core-js/modules/es7.array.flat-map.js"),t(/*! ./modules/es7.array.flatten */"./node_modules/core-js/modules/es7.array.flatten.js"),t(/*! ./modules/es7.string.at */"./node_modules/core-js/modules/es7.string.at.js"),t(/*! ./modules/es7.string.pad-start */"./node_modules/core-js/modules/es7.string.pad-start.js"),t(/*! ./modules/es7.string.pad-end */"./node_modules/core-js/modules/es7.string.pad-end.js"),t(/*! ./modules/es7.string.trim-left */"./node_modules/core-js/modules/es7.string.trim-left.js"),t(/*! ./modules/es7.string.trim-right */"./node_modules/core-js/modules/es7.string.trim-right.js"),t(/*! ./modules/es7.string.match-all */"./node_modules/core-js/modules/es7.string.match-all.js"),t(/*! ./modules/es7.symbol.async-iterator */"./node_modules/core-js/modules/es7.symbol.async-iterator.js"),t(/*! ./modules/es7.symbol.observable */"./node_modules/core-js/modules/es7.symbol.observable.js"),t(/*! ./modules/es7.object.get-own-property-descriptors */"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js"),t(/*! ./modules/es7.object.values */"./node_modules/core-js/modules/es7.object.values.js"),t(/*! ./modules/es7.object.entries */"./node_modules/core-js/modules/es7.object.entries.js"),t(/*! ./modules/es7.object.define-getter */"./node_modules/core-js/modules/es7.object.define-getter.js"),t(/*! ./modules/es7.object.define-setter */"./node_modules/core-js/modules/es7.object.define-setter.js"),t(/*! ./modules/es7.object.lookup-getter */"./node_modules/core-js/modules/es7.object.lookup-getter.js"),t(/*! ./modules/es7.object.lookup-setter */"./node_modules/core-js/modules/es7.object.lookup-setter.js"),t(/*! ./modules/es7.map.to-json */"./node_modules/core-js/modules/es7.map.to-json.js"),t(/*! ./modules/es7.set.to-json */"./node_modules/core-js/modules/es7.set.to-json.js"),t(/*! ./modules/es7.map.of */"./node_modules/core-js/modules/es7.map.of.js"),t(/*! ./modules/es7.set.of */"./node_modules/core-js/modules/es7.set.of.js"),t(/*! ./modules/es7.weak-map.of */"./node_modules/core-js/modules/es7.weak-map.of.js"),t(/*! ./modules/es7.weak-set.of */"./node_modules/core-js/modules/es7.weak-set.of.js"),t(/*! ./modules/es7.map.from */"./node_modules/core-js/modules/es7.map.from.js"),t(/*! ./modules/es7.set.from */"./node_modules/core-js/modules/es7.set.from.js"),t(/*! ./modules/es7.weak-map.from */"./node_modules/core-js/modules/es7.weak-map.from.js"),t(/*! ./modules/es7.weak-set.from */"./node_modules/core-js/modules/es7.weak-set.from.js"),t(/*! ./modules/es7.global */"./node_modules/core-js/modules/es7.global.js"),t(/*! ./modules/es7.system.global */"./node_modules/core-js/modules/es7.system.global.js"),t(/*! ./modules/es7.error.is-error */"./node_modules/core-js/modules/es7.error.is-error.js"),t(/*! ./modules/es7.math.clamp */"./node_modules/core-js/modules/es7.math.clamp.js"),t(/*! ./modules/es7.math.deg-per-rad */"./node_modules/core-js/modules/es7.math.deg-per-rad.js"),t(/*! ./modules/es7.math.degrees */"./node_modules/core-js/modules/es7.math.degrees.js"),t(/*! ./modules/es7.math.fscale */"./node_modules/core-js/modules/es7.math.fscale.js"),t(/*! ./modules/es7.math.iaddh */"./node_modules/core-js/modules/es7.math.iaddh.js"),t(/*! ./modules/es7.math.isubh */"./node_modules/core-js/modules/es7.math.isubh.js"),t(/*! ./modules/es7.math.imulh */"./node_modules/core-js/modules/es7.math.imulh.js"),t(/*! ./modules/es7.math.rad-per-deg */"./node_modules/core-js/modules/es7.math.rad-per-deg.js"),t(/*! ./modules/es7.math.radians */"./node_modules/core-js/modules/es7.math.radians.js"),t(/*! ./modules/es7.math.scale */"./node_modules/core-js/modules/es7.math.scale.js"),t(/*! ./modules/es7.math.umulh */"./node_modules/core-js/modules/es7.math.umulh.js"),t(/*! ./modules/es7.math.signbit */"./node_modules/core-js/modules/es7.math.signbit.js"),t(/*! ./modules/es7.promise.finally */"./node_modules/core-js/modules/es7.promise.finally.js"),t(/*! ./modules/es7.promise.try */"./node_modules/core-js/modules/es7.promise.try.js"),t(/*! ./modules/es7.reflect.define-metadata */"./node_modules/core-js/modules/es7.reflect.define-metadata.js"),t(/*! ./modules/es7.reflect.delete-metadata */"./node_modules/core-js/modules/es7.reflect.delete-metadata.js"),t(/*! ./modules/es7.reflect.get-metadata */"./node_modules/core-js/modules/es7.reflect.get-metadata.js"),t(/*! ./modules/es7.reflect.get-metadata-keys */"./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js"),t(/*! ./modules/es7.reflect.get-own-metadata */"./node_modules/core-js/modules/es7.reflect.get-own-metadata.js"),t(/*! ./modules/es7.reflect.get-own-metadata-keys */"./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js"),t(/*! ./modules/es7.reflect.has-metadata */"./node_modules/core-js/modules/es7.reflect.has-metadata.js"),t(/*! ./modules/es7.reflect.has-own-metadata */"./node_modules/core-js/modules/es7.reflect.has-own-metadata.js"),t(/*! ./modules/es7.reflect.metadata */"./node_modules/core-js/modules/es7.reflect.metadata.js"),t(/*! ./modules/es7.asap */"./node_modules/core-js/modules/es7.asap.js"),t(/*! ./modules/es7.observable */"./node_modules/core-js/modules/es7.observable.js"),t(/*! ./modules/web.timers */"./node_modules/core-js/modules/web.timers.js"),t(/*! ./modules/web.immediate */"./node_modules/core-js/modules/web.immediate.js"),t(/*! ./modules/web.dom.iterable */"./node_modules/core-js/modules/web.dom.iterable.js"),e.exports=t(/*! ./modules/_core */"./node_modules/core-js/modules/_core.js")},"./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){var o=[];return o.toString=function(){return this.map(function(o){var t=function(e,o){var t=e[1]||"",s=e[3];if(!s)return t;if(o&&"function"==typeof btoa){var n=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(s),r=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[t].concat(r).concat([n]).join("\n")}return[t].join("\n")}(o,e);return o[2]?"@media "+o[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(s[r]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&s[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="("+l[2]+") and ("+t+")"),o.push(l))}},o}},"./node_modules/html-janitor/src/html-janitor.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-janitor/src/html-janitor.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){var s,n;void 0===(n="function"==typeof(s=function(){function e(e){var o=e.tags,t=Object.keys(o),s=t.map(function(e){return typeof o[e]}).every(function(e){return"object"===e||"boolean"===e||"function"===e});if(!s)throw new Error("The configuration was invalid");this.config=e}var o=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function t(e){return-1!==o.indexOf(e.nodeName)}var s=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function n(e){return-1!==s.indexOf(e.nodeName)}function r(e,o,t){return"function"==typeof e.tags[o]?e.tags[o](t):e.tags[o]}function l(e,o){return void 0===o||"boolean"==typeof o&&!o}function i(e,o,t){var s=e.name.toLowerCase();return!0!==o&&("function"==typeof o[s]?!o[s](e.value,t):void 0===o[s]||!1===o[s]||"string"==typeof o[s]&&o[s]!==e.value)}return e.prototype.clean=function(e){var o=document.createElement("div");return o.innerHTML=e,this._sanitize(o),o.innerHTML},e.prototype._sanitize=function(e){var o=function(e){return document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(e),s=o.firstChild();if(s)do{if(!s._sanitized)if(s.nodeType!==Node.TEXT_NODE){if(s.nodeType===Node.COMMENT_NODE){e.removeChild(s),this._sanitize(e);break}var u,d=n(s);d&&(u=Array.prototype.some.call(s.childNodes,t));var c=!!e.parentNode,a=t(e)&&t(s)&&c,m=s.nodeName.toLowerCase(),f=r(this.config,m,s);if(d&&u||l(0,f)||!this.config.keepNestedBlockElements&&a){if("SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName)for(;s.childNodes.length>0;)e.insertBefore(s.childNodes[0],s);e.removeChild(s),this._sanitize(e);break}for(var j=0;j<s.attributes.length;j+=1){var _=s.attributes[j];i(_,f,s)&&(s.removeAttribute(_.name),j-=1)}this._sanitize(s),s._sanitized=!0}else if(""===s.data.trim()&&(s.previousElementSibling&&t(s.previousElementSibling)||s.nextElementSibling&&t(s.nextElementSibling))){e.removeChild(s),this._sanitize(e);break}}while(s=o.nextSibling())},e})?s.call(o,t,o,e):s)||(e.exports=n)},"./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,t){(function(o){!function(o){"use strict";var t,s=Object.prototype,n=s.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag",d="object"==typeof e,c=o.regeneratorRuntime;if(c)d&&(e.exports=c);else{(c=o.regeneratorRuntime=d?e.exports:{}).wrap=y;var a="suspendedStart",m="suspendedYield",f="executing",j="completed",_={},p={};p[l]=function(){return this};var h=Object.getPrototypeOf,b=h&&h(h(B([])));b&&b!==s&&n.call(b,l)&&(p=b);var v=w.prototype=k.prototype=Object.create(p);x.prototype=v.constructor=w,w.constructor=x,w[u]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var o="function"==typeof e&&e.constructor;return!!o&&(o===x||"GeneratorFunction"===(o.displayName||o.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(v),e},c.awrap=function(e){return{__await:e}},E(S.prototype),S.prototype[i]=function(){return this},c.AsyncIterator=S,c.async=function(e,o,t,s){var n=new S(y(e,o,t,s));return c.isGeneratorFunction(o)?n:n.next().then(function(e){return e.done?e.value:n.next()})},E(v),v[u]="Generator",v[l]=function(){return this},v.toString=function(){return"[object Generator]"},c.keys=function(e){var o=[];for(var t in e)o.push(t);return o.reverse(),function t(){for(;o.length;){var s=o.pop();if(s in e)return t.value=s,t.done=!1,t}return t.done=!0,t}},c.values=B,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var o=this;function s(s,n){return i.type="throw",i.arg=e,o.next=s,n&&(o.method="next",o.arg=t),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],i=l.completion;if("root"===l.tryLoc)return s("end");if(l.tryLoc<=this.prev){var u=n.call(l,"catchLoc"),d=n.call(l,"finallyLoc");if(u&&d){if(this.prev<l.catchLoc)return s(l.catchLoc,!0);if(this.prev<l.finallyLoc)return s(l.finallyLoc)}else if(u){if(this.prev<l.catchLoc)return s(l.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return s(l.finallyLoc)}}}},abrupt:function(e,o){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=o&&o<=r.finallyLoc&&(r=null);var l=r?r.completion:{};return l.type=e,l.arg=o,r?(this.method="next",this.next=r.finallyLoc,_):this.complete(l)},complete:function(e,o){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&o&&(this.next=o),_},finish:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),M(t),_}},catch:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.tryLoc===e){var s=t.completion;if("throw"===s.type){var n=s.arg;M(t)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,o,s){return this.delegate={iterator:B(e),resultName:o,nextLoc:s},"next"===this.method&&(this.arg=t),_}}}function y(e,o,t,s){var n=o&&o.prototype instanceof k?o:k,r=Object.create(n.prototype),l=new O(s||[]);return r._invoke=function(e,o,t){var s=a;return function(n,r){if(s===f)throw new Error("Generator is already running");if(s===j){if("throw"===n)throw r;return N()}for(t.method=n,t.arg=r;;){var l=t.delegate;if(l){var i=C(l,t);if(i){if(i===_)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(s===a)throw s=j,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);s=f;var u=g(e,o,t);if("normal"===u.type){if(s=t.done?j:m,u.arg===_)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(s=j,t.method="throw",t.arg=u.arg)}}}(e,t,l),r}function g(e,o,t){try{return{type:"normal",arg:e.call(o,t)}}catch(e){return{type:"throw",arg:e}}}function k(){}function x(){}function w(){}function E(e){["next","throw","return"].forEach(function(o){e[o]=function(e){return this._invoke(o,e)}})}function S(e){function t(o,s,r,l){var i=g(e[o],e,s);if("throw"!==i.type){var u=i.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?Promise.resolve(d.__await).then(function(e){t("next",e,r,l)},function(e){t("throw",e,r,l)}):Promise.resolve(d).then(function(e){u.value=e,r(u)},l)}l(i.arg)}var s;"object"==typeof o.process&&o.process.domain&&(t=o.process.domain.bind(t)),this._invoke=function(e,o){function n(){return new Promise(function(s,n){t(e,o,s,n)})}return s=s?s.then(n,n):n()}}function C(e,o){var s=e.iterator[o.method];if(s===t){if(o.delegate=null,"throw"===o.method){if(e.iterator.return&&(o.method="return",o.arg=t,C(e,o),"throw"===o.method))return _;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var n=g(s,e.iterator,o.arg);if("throw"===n.type)return o.method="throw",o.arg=n.arg,o.delegate=null,_;var r=n.arg;return r?r.done?(o[e.resultName]=r.value,o.next=e.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,_):r:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,_)}function T(e){var o={tryLoc:e[0]};1 in e&&(o.catchLoc=e[1]),2 in e&&(o.finallyLoc=e[2],o.afterLoc=e[3]),this.tryEntries.push(o)}function M(e){var o=e.completion||{};o.type="normal",delete o.arg,e.completion=o}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function B(e){if(e){var o=e[l];if(o)return o.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,r=function o(){for(;++s<e.length;)if(n.call(e,s))return o.value=e[s],o.done=!1,o;return o.value=t,o.done=!0,o};return r.next=r}}return{next:N}}function N(){return{value:t,done:!0}}}("object"==typeof o?o:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,t(/*! ./../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,o){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},"./src/codex.js":
/*!**********************!*\
  !*** ./src/codex.js ***!
  \**********************/
/*! no static exports found */function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=u(t(/*! babel-runtime/core-js/object/set-prototype-of */"./node_modules/babel-runtime/core-js/object/set-prototype-of.js")),n=u(t(/*! babel-runtime/helpers/typeof */"./node_modules/babel-runtime/helpers/typeof.js")),r=u(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=u(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));t(/*! babel-core/register */"./node_modules/babel-core/register.js"),t(/*! components/polyfills */"./src/components/polyfills.ts");var i=u(t(/*! ./components/core */"./src/components/core.js"));function u(e){return e&&e.__esModule?e:{default:e}}window&&window._babelPolyfill||t(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");var d=function(){function e(o){var t=this;(0,r.default)(this,e);var s=function(){};"object"===(void 0===o?"undefined":(0,n.default)(o))&&"function"==typeof o.onReady&&(s=o.onReady);var l=new i.default(o);this.isReady=l.isReady.then(function(){t.exportAPI(l),s()})}return(0,l.default)(e,null,[{key:"version",get:function(){return"2.1.0"}}]),(0,l.default)(e,[{key:"exportAPI",value:function(e){var o=this;["configuration"].forEach(function(t){o[t]=e[t]}),this.destroy=function(){for(var t in e.moduleInstances.Listeners.removeAll(),e.moduleInstances.UI.destroy(),e.moduleInstances.ModificationsObserver.destroy(),e=null,o)delete o[t];(0,s.default)(o,null)},(0,s.default)(this,e.moduleInstances.API.methods),delete this.exportAPI}}]),e}();d.displayName="CodexEditor",o.default=d,e.exports=o.default},"./src/components/__module.ts":
/*!************************************!*\
  !*** ./src/components/__module.ts ***!
  \************************************/
/*! no static exports found */function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=r(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),n=r(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(o){var t=o.config;if((0,s.default)(this,e),new.target===e)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=t}return(0,n.default)(e,[{key:"state",set:function(e){this.Editor=e}}]),e}();l.displayName="Module",o.default=l,e.exports=o.default},"./src/components/block-tunes/block-tune-delete.ts":
/*!*********************************************************!*\
  !*** ./src/components/block-tunes/block-tune-delete.ts ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=l(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),r=l(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(o){var t=this,s=o.api;(0,n.default)(this,e),this.CSS={wrapper:"ass",button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=s,this.resetConfirmation=function(){t.setConfirmation(!1)}}return(0,r.default)(e,[{key:"render",value:function(){var e=this;return this.nodes.button=s.make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(s.svg("cross",12,12)),this.api.listener.on(this.nodes.button,"click",function(o){return e.handleClick(o)},!1),this.nodes.button}},{key:"handleClick",value:function(e){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks.delete(),e.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation))}},{key:"setConfirmation",value:function(e){this.needConfirmation=e,this.nodes.button.classList.add(this.CSS.buttonConfirm)}}]),e}();i.displayName="DeleteTune",o.default=i,e.exports=o.default}).call(this,t(/*! dom */"./src/components/dom.ts"))},"./src/components/block-tunes/block-tune-move-down.ts":
/*!************************************************************!*\
  !*** ./src/components/block-tunes/block-tune-move-down.ts ***!
  \************************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=l(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),r=l(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(o){var t=o.api;(0,n.default)(this,e),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=t}return(0,r.default)(e,[{key:"render",value:function(){var e=this,o=s.make("div",[this.CSS.button,this.CSS.wrapper],{});return o.appendChild(s.svg("arrow-down",14,14)),this.api.listener.on(o,"click",function(t){return e.handleClick(t,o)},!1),o}},{key:"handleClick",value:function(e,o){var t=this,s=this.api.blocks.getCurrentBlockIndex();if(s===this.api.blocks.getBlocksCount()-1)return o.classList.add(this.CSS.animation),void window.setTimeout(function(){o.classList.remove(t.CSS.animation)},500);var n=this.api.blocks.getBlockByIndex(s+1).holder,r=n.getBoundingClientRect(),l=Math.abs(window.innerHeight-n.offsetHeight);r.top<window.innerHeight&&(l=window.scrollY+n.offsetHeight),window.scrollTo(0,l),this.api.blocks.swap(s,s+1)}}]),e}();i.displayName="MoveDownTune",o.default=i,e.exports=o.default}).call(this,t(/*! dom */"./src/components/dom.ts"))},"./src/components/block-tunes/block-tune-move-up.ts":
/*!**********************************************************!*\
  !*** ./src/components/block-tunes/block-tune-move-up.ts ***!
  \**********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=l(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),r=l(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(o){var t=o.api;(0,n.default)(this,e),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=t}return(0,r.default)(e,[{key:"render",value:function(){var e=this,o=s.make("div",[this.CSS.button,this.CSS.wrapper],{});return o.appendChild(s.svg("arrow-up",14,14)),this.api.listener.on(o,"click",function(t){return e.handleClick(t,o)},!1),o}},{key:"handleClick",value:function(e,o){var t=this,s=this.api.blocks.getCurrentBlockIndex();if(0===s)return o.classList.add(this.CSS.animation),void window.setTimeout(function(){o.classList.remove(t.CSS.animation)},500);var n=this.api.blocks.getBlockByIndex(s).holder,r=this.api.blocks.getBlockByIndex(s-1).holder,l=n.getBoundingClientRect(),i=r.getBoundingClientRect(),u=void 0;u=i.top>0?Math.abs(l.top)-Math.abs(i.top):window.innerHeight-Math.abs(l.top)+Math.abs(i.top),window.scrollBy(0,-1*u),this.api.blocks.swap(s,s-1)}}]),e}();i.displayName="MoveUpTune",o.default=i,e.exports=o.default}).call(this,t(/*! dom */"./src/components/dom.ts"))},"./src/components/block.ts":
/*!*********************************!*\
  !*** ./src/components/block.ts ***!
  \*********************************/
/*! no static exports found */function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=a(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),n=a(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),r=a(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),l=a(t(/*! ./dom */"./src/components/dom.ts")),i=a(t(/*! ./utils */"./src/components/utils.ts")),u=a(t(/*! ./block-tunes/block-tune-move-up */"./src/components/block-tunes/block-tune-move-up.ts")),d=a(t(/*! ./block-tunes/block-tune-delete */"./src/components/block-tunes/block-tune-delete.ts")),c=a(t(/*! ./block-tunes/block-tune-move-down */"./src/components/block-tunes/block-tune-move-down.ts"));function a(e){return e&&e.__esModule?e:{default:e}}var m=function(){function e(o,t,s,r,l){(0,n.default)(this,e),this.inputIndex=0,this.name=o,this.tool=t,this.class=s,this.settings=r,this.api=l,this.holder=this.compose(),this.tunes=this.makeTunes()}return(0,r.default)(e,[{key:"call",value:function(e,o){this.tool[e]&&this.tool[e]instanceof Function&&this.tool[e].call(this.tool,o)}},{key:"mergeWith",value:function(e){var o=this;return s.default.resolve().then(function(){o.tool.merge(e)})}},{key:"save",value:function(){var e=this,o=this.tool.save(this.pluginsContent),t=window.performance.now(),n=void 0;return s.default.resolve(o).then(function(o){return n=window.performance.now(),{tool:e.name,data:o,time:n-t}}).catch(function(e){i.default.log("Saving proccess for "+this.tool.name+" tool failed due to the "+e,"log","red")})}},{key:"validateData",value:function(e){var o=!0;return this.tool.validate instanceof Function&&(o=this.tool.validate(e)),!!o&&e}},{key:"makeTunes",value:function(){var e=this;return[u.default,d.default,c.default].map(function(o){return new o({api:e.api,settings:e.settings})})}},{key:"renderTunes",value:function(){var e=document.createDocumentFragment();return this.tunes.forEach(function(o){l.default.append(e,o.render())}),e}},{key:"compose",value:function(){var o=l.default.make("div",e.CSS.wrapper),t=l.default.make("div",e.CSS.content),s=this.tool.render();return t.appendChild(s),o.appendChild(t),o}},{key:"inputs",get:function(){var e=this.holder,o="[contenteditable], textarea, input, "+["text","password","email","number","search","tel","url"].map(function(e){return'input[type="'+e+'"]'}).join(", "),t=i.default.array(e.querySelectorAll(o));return this.inputIndex>t.length-1&&(this.inputIndex=t.length-1),t}},{key:"currentInput",get:function(){return this.inputs[this.inputIndex]},set:function(e){var o=this.inputs.findIndex(function(o){return o===e||o.contains(e)});-1!==o&&(this.inputIndex=o)}},{key:"firstInput",get:function(){return this.inputs[0]}},{key:"lastInput",get:function(){var e=this.inputs;return e[e.length-1]}},{key:"nextInput",get:function(){return this.inputs[this.inputIndex+1]}},{key:"previousInput",get:function(){return this.inputs[this.inputIndex-1]}},{key:"pluginsContent",get:function(){var o=this.holder.querySelector("."+e.CSS.content);return o&&o.childNodes.length?o.childNodes[0]:null}},{key:"data",get:function(){return this.save()}},{key:"mergeable",get:function(){return"function"==typeof this.tool.merge}},{key:"isEmpty",get:function(){if(this.class.contentless)return!1;var e=l.default.isEmpty(this.pluginsContent),o=!this.hasMedia;return e&&o}},{key:"hasMedia",get:function(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}},{key:"selected",set:function(o){!0!==o||this.isEmpty?this.holder.classList.remove(e.CSS.selected):this.holder.classList.add(e.CSS.selected)}},{key:"stretched",set:function(o){this.holder.classList.toggle(e.CSS.wrapperStretched,o)}},{key:"dropTarget",set:function(o){this.holder.classList.toggle(e.CSS.dropTarget,o)}}],[{key:"CSS",get:function(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}}]),e}();m.displayName="Block",o.default=m,e.exports=o.default},"./src/components/core.js":
/*!********************************!*\
  !*** ./src/components/core.js ***!
  \********************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=c(t(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),l=c(t(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),i=c(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),u=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),d=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=["api-blocks.ts","api-caret.ts","api-events.ts","api-listener.ts","api-sanitizer.ts","api-saver.ts","api-selection.ts","api-styles.ts","api-toolbar.ts","api.ts","block-events.ts","blockManager.js","caret.js","dragNDrop.ts","events.js","listeners.js","modificationsObserver.ts","paste.ts","renderer.js","sanitizer.js","saver.js","shortcuts.ts","toolbar-blockSettings.js","toolbar-inline.ts","toolbar-toolbox.js","toolbar.js","tools.js","ui.js"].map(function(e){return t("./src/components/modules sync [^_](api-blocks.ts|api-caret.ts|api-events.ts|api-listener.ts|api-sanitizer.ts|api-saver.ts|api-selection.ts|api-styles.ts|api-toolbar.ts|api.ts|block-events.ts|blockManager.js|caret.js|dragNDrop.ts|events.js|listeners.js|modificationsObserver.ts|paste.ts|renderer.js|sanitizer.js|saver.js|shortcuts.ts|toolbar-blockSettings.js|toolbar-inline.ts|toolbar-toolbox.js|toolbar.js|tools.js|ui.js)$")("./"+e)}),m=function(){function e(o){var t=this;(0,u.default)(this,e),this.config={},this.moduleInstances={};var n=void 0,r=void 0;this.isReady=new i.default(function(e,o){n=e,r=o}),i.default.resolve().then(function(){t.configuration=o}).then(function(){return t.validate()}).then(function(){return t.init()}).then(function(){return t.start()}).then(function(){s.log("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"),setTimeout(function(){n()},500)}).catch(function(e){s.log("CodeX Editor does not ready because of "+e,"error"),r(e)})}return(0,d.default)(e,[{key:"validate",value:function(){if(!this.config.holderId)return i.default.reject("«holderId» param must being not empty");if(!n.get(this.config.holderId))return i.default.reject("element with ID «"+this.config.holderId+"» is missing. Pass correct holder's ID.");for(var e in this.config.tools){var o=this.config.tools[e];if(!s.isFunction(o)&&!s.isFunction(o.class))return i.default.reject("Tool «"+e+"» must be a constructor function or an object with that function in the «class» property")}}},{key:"init",value:function(){this.constructModules(),this.configureModules()}},{key:"constructModules",value:function(){var e=this;a.forEach(function(o){try{e.moduleInstances[o.displayName]=new o({config:e.configuration})}catch(e){console.log("Module %o skipped because %o",o,e)}})}},{key:"configureModules",value:function(){for(var e in this.moduleInstances)this.moduleInstances[e].state=this.getModulesDiff(e)}},{key:"getModulesDiff",value:function(e){var o={};for(var t in this.moduleInstances)t!==e&&(o[t]=this.moduleInstances[t]);return o}},{key:"start",value:function(){var e=(0,l.default)(r.default.mark(function e(){var o,t=this;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=["Tools","UI","BlockManager","Paste","DragNDrop","ModificationsObserver"],e.next=3,o.reduce(function(e,o){return e.then((0,l.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.log("Preparing "+o+" module","time"),e.prev=1,e.next=4,t.moduleInstances[o].prepare();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s.log("Module "+o+" was skipped because of %o","warn",e.t0);case 9:s.log("Preparing "+o+" module","timeEnd");case 10:case"end":return e.stop()}},e,t,[[1,6]])})))},i.default.resolve());case 3:return e.abrupt("return",this.moduleInstances.Renderer.render(this.config.data.blocks));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"configuration",set:function(e){"string"!=typeof e&&void 0!==e||(e={holderId:e}),this.config.initialBlock=e.initialBlock||"paragraph";var o={type:this.config.initialBlock,data:{}};this.config.holderId=e.holderId||"codex-editor",this.config.placeholder=e.placeholder||"write your story...",this.config.sanitizer=e.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!e.hideToolbar&&e.hideToolbar,this.config.tools=e.tools||{},this.config.data=e.data||{},this.config.onReady=e.onReady||function(){},this.config.onChange=e.onChange||function(){},s.isEmpty(this.config.data)?(this.config.data={},this.config.data.blocks=[o]):this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data.blocks=[o])},get:function(){return this.config}}]),e}();m.displayName="Core",o.default=m,e.exports=o.default}).call(this,t(/*! utils */"./src/components/utils.ts"),t(/*! dom */"./src/components/dom.ts"))},"./src/components/dom.ts":
/*!*******************************!*\
  !*** ./src/components/dom.ts ***!
  \*******************************/
/*! no static exports found */function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=i(t(/*! babel-runtime/helpers/typeof */"./node_modules/babel-runtime/helpers/typeof.js")),n=i(t(/*! babel-runtime/helpers/toConsumableArray */"./node_modules/babel-runtime/helpers/toConsumableArray.js")),r=i(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=i(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){(0,r.default)(this,e)}return(0,l.default)(e,null,[{key:"isSingleTag",value:function(e){return e.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(e.tagName)}},{key:"make",value:function(e){var o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(e);Array.isArray(t)?(o=r.classList).add.apply(o,(0,n.default)(t)):t&&r.classList.add(t);for(var l in s)s.hasOwnProperty(l)&&(r[l]=s[l]);return r}},{key:"text",value:function(e){return document.createTextNode(e)}},{key:"svg",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,s=document.createElementNS("http://www.w3.org/2000/svg","svg");return s.classList.add("icon","icon--"+e),s.setAttribute("width",o+"px"),s.setAttribute("height",t+"px"),s.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'+e+'"></use>',s}},{key:"append",value:function(e,o){Array.isArray(o)?o.forEach(function(o){return e.appendChild(o)}):e.appendChild(o)}},{key:"prepend",value:function(e,o){Array.isArray(o)?(o=o.reverse()).forEach(function(o){return e.prepend(o)}):e.prepend(o)}},{key:"swap",value:function(e,o){var t=document.createElement("div"),s=e.parentNode;s.insertBefore(t,e),s.insertBefore(e,o),s.insertBefore(o,t),s.removeChild(t)}},{key:"find",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,o=arguments[1];return e.querySelector(o)}},{key:"get",value:function(e){return document.getElementById(e)}},{key:"findAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,o=arguments[1];return e.querySelectorAll(o)}},{key:"getDeepestNode",value:function(o){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=t?"lastChild":"firstChild",n=t?"previousSibling":"nextSibling";if(o&&o.nodeType===Node.ELEMENT_NODE&&o[s]){var r=o[s];if(e.isSingleTag(r)&&!e.isNativeInput(r))if(r[n])r=r[n];else{if(!r.parentNode[n])return r.parentNode;r=r.parentNode[n]}return this.getDeepestNode(r,t)}return o}},{key:"isElement",value:function(e){return e&&"object"===(void 0===e?"undefined":(0,s.default)(e))&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE}},{key:"isFragment",value:function(e){return e&&"object"===(void 0===e?"undefined":(0,s.default)(e))&&e.nodeType&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}},{key:"isNativeInput",value:function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}},{key:"isNodeEmpty",value:function(e){return 0===(this.isElement(e)&&this.isNativeInput(e)?e.value:e.textContent.replace("​","")).trim().length}},{key:"isLeaf",value:function(e){return!!e&&0===e.childNodes.length}},{key:"isEmpty",value:function(e){var o=this,t=[],s=[];if(!e)return!0;if(!e.childNodes.length)return this.isNodeEmpty(e);for(t.push(e.firstChild);t.length>0;)if(e=t.shift()){for(this.isLeaf(e)?s.push(e):t.push(e.firstChild);e&&e.nextSibling;)(e=e.nextSibling)&&t.push(e);if(e&&!this.isNodeEmpty(e))return!1}return s.every(function(e){return o.isNodeEmpty(e)})}},{key:"isHTMLString",value:function(o){var t=e.make("div");return t.innerHTML=o,t.childElementCount>0}},{key:"getContentLength",value:function(o){return e.isNativeInput(o)?o.value.length:o.nodeType===Node.TEXT_NODE?o.length:o.textContent.length}},{key:"blockElements",get:function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"]}}]),e}();u.displayName="Dom",o.default=u,e.exports=o.default},"./src/components/inline-tools/inline-tool-bold.ts":
/*!*********************************************************!*\
  !*** ./src/components/inline-tools/inline-tool-bold.ts ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=l(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),r=l(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(o){o.api;(0,n.default)(this,e),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}}return(0,r.default)(e,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.svg("bold",13,15)),this.nodes.button}},{key:"surround",value:function(e){document.execCommand(this.commandName)}},{key:"checkState",value:function(e){var o=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,o),o}},{key:"shortcut",get:function(){return"CMD+B"}}]),e}();i.displayName="BoldInlineTool",o.default=i,e.exports=o.default}).call(this,t(/*! dom */"./src/components/dom.ts"))},"./src/components/inline-tools/inline-tool-italic.ts":
/*!***********************************************************!*\
  !*** ./src/components/inline-tools/inline-tool-italic.ts ***!
  \***********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=l(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),r=l(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(o){o.api;(0,n.default)(this,e),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}return(0,r.default)(e,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.svg("italic",6,15)),this.nodes.button}},{key:"surround",value:function(e){document.execCommand(this.commandName)}},{key:"checkState",value:function(e){var o=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,o),o}},{key:"shortcut",get:function(){return"CMD+I"}}]),e}();i.displayName="ItalicInlineTool",o.default=i,e.exports=o.default}).call(this,t(/*! dom */"./src/components/dom.ts"))},"./src/components/inline-tools/inline-tool-link.ts":
/*!*********************************************************!*\
  !*** ./src/components/inline-tools/inline-tool-link.ts ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=u(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=u(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=u(t(/*! ../selection */"./src/components/selection.ts"));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(o){var t=o.api;(0,r.default)(this,e),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.inlineToolbar=t.toolbar,this.selection=new i.default}return(0,l.default)(e,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.svg("link",15,14)),this.nodes.button.appendChild(s.svg("unlink",16,18)),this.nodes.button}},{key:"renderActions",value:function(){var e=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder="Add a link",this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",function(o){o.keyCode===e.ENTER_KEY&&e.enterPressed(o)}),this.nodes.input}},{key:"surround",value:function(e){if(e){this.selection.save();var o=this.selection.findParentTag("A");if(o)return this.selection.expandToTag(o),this.unlink(),this.closeActions(),this.checkState(),void this.inlineToolbar.close()}this.toggleActions()}},{key:"checkState",value:function(e){var o=this.selection.findParentTag("A");if(o){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var t=o.getAttribute("href");this.nodes.input.value="null"!==t?t:"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!o}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),e&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",e&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"enterPressed",value:function(e){var o=this.nodes.input.value||"";o.trim()||(this.selection.restore(),this.unlink(),e.preventDefault(),this.closeActions()),this.validateURL(o)?(o=this.prepareLink(o),this.selection.restore(),this.insertLink(o),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.closeActions(),this.inlineToolbar.close(),this.checkState()):n.log("Incorrect Link pasted","warn",o)}},{key:"validateURL",value:function(e){return!/\s/.test(e)}},{key:"prepareLink",value:function(e){return e=e.trim(),e=this.addProtocol(e)}},{key:"addProtocol",value:function(e){if(/^(\w+):\/\//.test(e))return e;var o=/^\/[^\/\s]/.test(e),t="#"===e.substring(0,1),s=/^\/\/[^\/\s]/.test(e);return o||t||s||(e="http://"+e),e}},{key:"insertLink",value:function(e){var o=this.selection.findParentTag("A");o&&this.selection.expandToTag(o),document.execCommand(this.commandLink,!1,e)}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"shortcut",get:function(){return"CMD+K"}}]),e}();d.displayName="LinkInlineTool",o.default=d,e.exports=o.default}).call(this,t(/*! dom */"./src/components/dom.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/interfaces/editor-config.ts":
/*!****************************************************!*\
  !*** ./src/components/interfaces/editor-config.ts ***!
  \****************************************************/
/*! no static exports found */function(e,o,t){"use strict"},"./src/components/modules sync [^_](api-blocks.ts|api-caret.ts|api-events.ts|api-listener.ts|api-sanitizer.ts|api-saver.ts|api-selection.ts|api-styles.ts|api-toolbar.ts|api.ts|block-events.ts|blockManager.js|caret.js|dragNDrop.ts|events.js|listeners.js|modificationsObserver.ts|paste.ts|renderer.js|sanitizer.js|saver.js|shortcuts.ts|toolbar-blockSettings.js|toolbar-inline.ts|toolbar-toolbox.js|toolbar.js|tools.js|ui.js)$":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/modules sync nonrecursive [^_](api-blocks.ts|api-caret.ts|api-events.ts|api-listener.ts|api-sanitizer.ts|api-saver.ts|api-selection.ts|api-styles.ts|api-toolbar.ts|api.ts|block-events.ts|blockManager.js|caret.js|dragNDrop.ts|events.js|listeners.js|modificationsObserver.ts|paste.ts|renderer.js|sanitizer.js|saver.js|shortcuts.ts|toolbar-blockSettings.js|toolbar-inline.ts|toolbar-toolbox.js|toolbar.js|tools.js|ui.js)$ ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,o,t){var s={"./api-blocks.ts":"./src/components/modules/api-blocks.ts","./api-caret.ts":"./src/components/modules/api-caret.ts","./api-events.ts":"./src/components/modules/api-events.ts","./api-listener.ts":"./src/components/modules/api-listener.ts","./api-sanitizer.ts":"./src/components/modules/api-sanitizer.ts","./api-saver.ts":"./src/components/modules/api-saver.ts","./api-selection.ts":"./src/components/modules/api-selection.ts","./api-styles.ts":"./src/components/modules/api-styles.ts","./api-toolbar.ts":"./src/components/modules/api-toolbar.ts","./api.ts":"./src/components/modules/api.ts","./block-events.ts":"./src/components/modules/block-events.ts","./blockManager.js":"./src/components/modules/blockManager.js","./caret.js":"./src/components/modules/caret.js","./dragNDrop.ts":"./src/components/modules/dragNDrop.ts","./events.js":"./src/components/modules/events.js","./listeners.js":"./src/components/modules/listeners.js","./modificationsObserver.ts":"./src/components/modules/modificationsObserver.ts","./paste.ts":"./src/components/modules/paste.ts","./renderer.js":"./src/components/modules/renderer.js","./sanitizer.js":"./src/components/modules/sanitizer.js","./saver.js":"./src/components/modules/saver.js","./shortcuts.ts":"./src/components/modules/shortcuts.ts","./toolbar-blockSettings.js":"./src/components/modules/toolbar-blockSettings.js","./toolbar-inline.ts":"./src/components/modules/toolbar-inline.ts","./toolbar-toolbox.js":"./src/components/modules/toolbar-toolbox.js","./toolbar.js":"./src/components/modules/toolbar.js","./tools.js":"./src/components/modules/tools.js","./ui.js":"./src/components/modules/ui.js"};function n(e){var o=r(e);return t(o)}function r(e){var o=s[e];if(!(o+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="./src/components/modules sync [^_](api-blocks.ts|api-caret.ts|api-events.ts|api-listener.ts|api-sanitizer.ts|api-saver.ts|api-selection.ts|api-styles.ts|api-toolbar.ts|api.ts|block-events.ts|blockManager.js|caret.js|dragNDrop.ts|events.js|listeners.js|modificationsObserver.ts|paste.ts|renderer.js|sanitizer.js|saver.js|shortcuts.ts|toolbar-blockSettings.js|toolbar-inline.ts|toolbar-toolbox.js|toolbar.js|tools.js|ui.js)$"},"./src/components/modules/api-blocks.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/api-blocks.ts ***!
  \**********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"getBlocksCount",value:function(){return this.Editor.BlockManager.blocks.length}},{key:"getCurrentBlockIndex",value:function(){return this.Editor.BlockManager.currentBlockIndex}},{key:"getBlockByIndex",value:function(e){return this.Editor.BlockManager.getBlockByIndex(e)}},{key:"swap",value:function(e,o){this.Editor.BlockManager.swap(e,o),this.Editor.Toolbar.move(!1)}},{key:"delete",value:function(e){this.Editor.BlockManager.removeBlock(e),0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),0===this.Editor.BlockManager.currentBlockIndex?this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock):this.Editor.Caret.navigatePrevious(!0),this.Editor.Toolbar.close()}},{key:"clear",value:function(){this.Editor.BlockManager.clear(!0)}},{key:"render",value:function(e){this.Editor.BlockManager.clear(),this.Editor.Renderer.render(e.blocks)}},{key:"stretchBlock",value:function(e,o){var t=this.Editor.BlockManager.getBlockByIndex(e);t&&(t.stretched=void 0===o||o)}},{key:"insertNewBlock",value:function(){var e=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(e)}},{key:"methods",get:function(){var e=this;return{clear:function(){return e.clear()},render:function(o){return e.render(o)},delete:function(){return e.delete()},swap:function(o,t){return e.swap(o,t)},getBlockByIndex:function(o){return e.getBlockByIndex(o)},getCurrentBlockIndex:function(){return e.getCurrentBlockIndex()},getBlocksCount:function(){return e.getBlocksCount()},stretchBlock:function(o,t){return e.stretchBlock(o,t)},insertNewBlock:function(){return e.insertNewBlock()}}}}]),o}(s);c.displayName="BlocksAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-caret.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/api-caret.ts ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"methods",get:function(){return{}}}]),o}(s);c.displayName="CaretAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-events.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/api-events.ts ***!
  \**********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"on",value:function(e,o){this.Editor.Events.on(e,o)}},{key:"emit",value:function(e,o){this.Editor.Events.emit(e,o)}},{key:"off",value:function(e,o){this.Editor.Events.off(e,o)}},{key:"methods",get:function(){var e=this;return{emit:function(o,t){return e.emit(o,t)},off:function(o,t){return e.off(o,t)},on:function(o,t){return e.on(o,t)}}}}]),o}(s);c.displayName="EventsAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-listener.ts":
/*!************************************************!*\
  !*** ./src/components/modules/api-listener.ts ***!
  \************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"on",value:function(e,o,t,s){this.Editor.Listeners.on(e,o,t,s)}},{key:"off",value:function(e,o,t){this.Editor.Listeners.off(e,o,t)}},{key:"methods",get:function(){var e=this;return{on:function(o,t,s,n){return e.on(o,t,s,n)},off:function(o,t,s){return e.off(o,t,s)}}}}]),o}(s);c.displayName="ListenerAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-sanitizer.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/api-sanitizer.ts ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"clean",value:function(e,o){return this.Editor.Sanitizer.clean(e,o)}},{key:"methods",get:function(){var e=this;return{clean:function(o,t){return e.clean(o,t)}}}}]),o}(s);c.displayName="SanitizerAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-saver.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/api-saver.ts ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"save",value:function(){return this.Editor.Saver.save()}},{key:"methods",get:function(){var e=this;return{save:function(){return e.save()}}}}]),o}(s);c.displayName="SaverAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-selection.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/api-selection.ts ***!
  \*************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),d=c(t(/*! ../selection */"./src/components/selection.ts"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"findParentTag",value:function(e,o){return(new d.default).findParentTag(e,o)}},{key:"expandToTag",value:function(e){(new d.default).expandToTag(e)}},{key:"methods",get:function(){var e=this;return{findParentTag:function(o,t){return e.findParentTag(o,t)},expandToTag:function(o){return e.expandToTag(o)}}}}]),o}(s);a.displayName="SelectionAPI",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-styles.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/api-styles.ts ***!
  \**********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"classes",get:function(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}]),o}(s);c.displayName="StylesAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api-toolbar.ts":
/*!***********************************************!*\
  !*** ./src/components/modules/api-toolbar.ts ***!
  \***********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"open",value:function(){this.Editor.Toolbar.open()}},{key:"close",value:function(){this.Editor.Toolbar.close()}},{key:"methods",get:function(){var e=this;return{close:function(){return e.close()},open:function(){return e.open()}}}}]),o}(s);c.displayName="ToolbarAPI",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/api.ts":
/*!***************************************!*\
  !*** ./src/components/modules/api.ts ***!
  \***************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;return(0,r.default)(this,o),(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}))}return(0,u.default)(o,e),(0,l.default)(o,[{key:"methods",get:function(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listener:this.Editor.ListenerAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods}}}]),o}(s);c.displayName="API",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/block-events.ts":
/*!************************************************!*\
  !*** ./src/components/modules/block-events.ts ***!
  \************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),i=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),u=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),d=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var t=e.config;return(0,l.default)(this,o),(0,u.default)(this,(o.__proto__||(0,r.default)(o)).call(this,{config:t}))}return(0,d.default)(o,e),(0,i.default)(o,[{key:"keydown",value:function(e){switch(this.beforeKeydownProcessing(e),e.keyCode){case n.keyCodes.BACKSPACE:this.backspace(e);break;case n.keyCodes.ENTER:this.enter(e);break;case n.keyCodes.DOWN:case n.keyCodes.RIGHT:this.arrowRightAndDown(e);break;case n.keyCodes.UP:case n.keyCodes.LEFT:this.arrowLeftAndUp(e);break;case n.keyCodes.TAB:this.tabPressed(e);break;default:this.defaultHandler()}}},{key:"beforeKeydownProcessing",value:function(e){this.Editor.BlockManager.clearHighlightings(),this.needToolbarClosing(e)&&this.Editor.Toolbar.close()}},{key:"keyup",value:function(e){this.Editor.InlineToolbar.handleShowingEvent(e)}},{key:"mouseUp",value:function(e){this.Editor.InlineToolbar.handleShowingEvent(e)}},{key:"tabPressed",value:function(e){var o=this.Editor.BlockManager.currentBlock;e.preventDefault(),e.stopPropagation();var t=e.shiftKey?"left":"right";this.Editor.Toolbar.opened&&o.isEmpty?this.Editor.Toolbox.open():o.isEmpty&&(this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.show(),this.Editor.Toolbox.open()),this.Editor.Toolbox.opened&&this.Editor.Toolbox.leaf(t)}},{key:"dragOver",value:function(e){this.Editor.BlockManager.getBlockByChildNode(e.target).dropTarget=!0}},{key:"dragLeave",value:function(e){this.Editor.BlockManager.getBlockByChildNode(e.target).dropTarget=!1}},{key:"enter",value:function(e){var o=this.Editor.BlockManager.currentBlock,t=this.Editor.Tools.toolsAvailable[o.name];if(!t||!t[this.Editor.Tools.apiSettings.IS_ENABLED_LINE_BREAKS]){if(this.Editor.Toolbox.opened&&this.Editor.Toolbox.getActiveTool)return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),void this.Editor.Toolbox.toolButtonActivate(e,this.Editor.Toolbox.getActiveTool);if(!e.shiftKey){var s=this.Editor.BlockManager.split();this.Editor.Caret.setToBlock(s),this.Editor.Tools.isInitial(s.tool)&&s.isEmpty&&(this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.show()),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}}},{key:"backspace",value:function(e){var o=this,t=this.Editor.BlockManager,s=this.Editor.BlockManager.currentBlock,n=this.Editor.Tools.toolsAvailable[s.name];if(!n||!n[this.Editor.Tools.apiSettings.IS_ENABLED_LINE_BREAKS]){var r=0===t.currentBlockIndex,l=this.Editor.Caret.isAtStart&&!r;if(this.Editor.BlockManager.currentBlock.isEmpty)return this.Editor.BlockManager.removeBlock(),0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),0===this.Editor.BlockManager.currentBlockIndex?this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock):this.Editor.Caret.navigatePrevious(!0),void this.Editor.Toolbar.close();if(l){e.preventDefault();var i=t.getBlockByIndex(t.currentBlockIndex-1),u=t.currentBlock;u.name===i.name&&i.mergeable?(this.Editor.Caret.createShadow(i.pluginsContent),t.mergeBlocks(i,u).then(function(){o.Editor.Caret.restoreCaret(i.pluginsContent),i.pluginsContent.normalize(),o.Editor.Toolbar.close()})):this.Editor.Caret.navigatePrevious()&&this.Editor.Toolbar.close()}}}},{key:"arrowRightAndDown",value:function(e){this.Editor.Caret.navigateNext()&&e.preventDefault()}},{key:"arrowLeftAndUp",value:function(e){this.Editor.Caret.navigatePrevious()&&e.preventDefault()}},{key:"defaultHandler",value:function(){}},{key:"needToolbarClosing",value:function(e){var o=e.keyCode===n.keyCodes.ENTER&&this.Editor.Toolbox.opened,t=e.keyCode===n.keyCodes.TAB;return!(e.shiftKey||t||o)}}]),o}(s);a.displayName="BlockEvents",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/blockManager.js":
/*!************************************************!*\
  !*** ./src/components/modules/blockManager.js ***!
  \************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n,r){Object.defineProperty(o,"__esModule",{value:!0});var l=f(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),i=f(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),u=f(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),d=f(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),c=f(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=f(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),m=f(t(/*! ../block */"./src/components/block.ts"));function f(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function o(e){var t=e.config;(0,u.default)(this,o);var s=(0,c.default)(this,(o.__proto__||(0,i.default)(o)).call(this,{config:t}));return s._blocks=null,s.currentBlockIndex=-1,s}return(0,a.default)(o,e),(0,d.default)(o,[{key:"prepare",value:function(){var e=this;return new l.default(function(o){var t=new _(e.Editor.UI.nodes.redactor);e._blocks=new Proxy(t,{set:_.set,get:_.get}),o()})}},{key:"composeBlock",value:function(e,o,t){var s=this.Editor.Tools.construct(e,o),n=this.Editor.Tools.available[e],r=new m.default(e,s,n,t,this.Editor.API.methods);return this.bindEvents(r),r.call("appendCallback",{}),r}},{key:"bindEvents",value:function(e){var o=this;this.Editor.Listeners.on(e.holder,"keydown",function(e){return o.Editor.BlockEvents.keydown(e)},!0),this.Editor.Listeners.on(e.holder,"mouseup",function(e){return o.Editor.BlockEvents.mouseUp(e)}),this.Editor.Listeners.on(e.holder,"keyup",function(e){return o.Editor.BlockEvents.keyup(e)}),this.Editor.Listeners.on(e.holder,"dragover",function(e){return o.Editor.BlockEvents.dragOver(e)}),this.Editor.Listeners.on(e.holder,"dragleave",function(e){return o.Editor.BlockEvents.dragLeave(e)})}},{key:"insert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.initialBlock,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=++this.currentBlockIndex,n=this.composeBlock(e,o,t);return this._blocks[s]=n,n}},{key:"insertAtEnd",value:function(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}},{key:"mergeBlocks",value:function(e,o){var t=this,s=this._blocks.indexOf(o);return l.default.resolve().then(function(){if(!o.isEmpty)return o.data.then(function(o){e.mergeWith(o.data)})}).then(function(){t.removeBlock(s),t.currentBlockIndex=t._blocks.indexOf(e)})}},{key:"removeBlock",value:function(e){e||(e=this.currentBlockIndex),this._blocks.remove(e),this.blocks.length||(this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus())}},{key:"split",value:function(){var e=this.Editor.Caret.extractFragmentFromCaretPosition(),o=n.make("div");o.append(e);var t={text:n.isEmpty(o)?"":o.innerHTML};return this.insert(this.config.initialBlock,t)}},{key:"replace",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this.composeBlock(e,o);return this._blocks.insert(this.currentBlockIndex,t,!0),t}},{key:"getBlockByIndex",value:function(e){return this._blocks[e]}},{key:"getBlock",value:function(e){n.isElement(e)||(e=e.parentNode);var o=this._blocks.nodes,t=e.closest("."+m.default.CSS.wrapper),s=o.indexOf(t);if(s>=0)return this._blocks[s]}},{key:"highlightCurrentNode",value:function(){this.clearHighlightings(),this.currentBlock.selected=!0}},{key:"clearHighlightings",value:function(){this.blocks.forEach(function(e){return e.selected=!1})}},{key:"setCurrentBlockByChildNode",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";n.isElement(e)||(e=e.parentNode);var t=e.closest("."+m.default.CSS.wrapper);if(!t)throw new Error("Can not find a Block from this child Node");this.currentBlockIndex=this._blocks.nodes.indexOf(t),this.Editor.Caret.setToInput(e,o)}},{key:"getBlockByChildNode",value:function(e){n.isElement(e)||(e=e.parentNode);var o=e.closest("."+m.default.CSS.wrapper);return this.blocks.find(function(e){return e.holder===o})}},{key:"swap",value:function(e,o){this._blocks.swap(e,o),this.currentBlockIndex=o}},{key:"dropPointer",value:function(){this.currentBlockIndex=-1,this.clearHighlightings()}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),e&&this.insert(this.config.initialBlock)}},{key:"lastBlock",get:function(){return this._blocks[this._blocks.length-1]}},{key:"currentBlock",get:function(){return this._blocks[this.currentBlockIndex]}},{key:"nextBlock",get:function(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}},{key:"nextContentfulBlock",get:function(){return this.blocks.slice(this.currentBlockIndex+1).find(function(e){return!!e.inputs.length})}},{key:"previousContentfulBlock",get:function(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find(function(e){return!!e.inputs.length})}},{key:"previousBlock",get:function(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}},{key:"blocks",get:function(){return this._blocks.array}}]),o}(s);j.displayName="BlockManager",o.default=j;var _=function(){function e(o){(0,u.default)(this,e),this.blocks=[],this.workingArea=o}return(0,d.default)(e,[{key:"push",value:function(e){this.blocks.push(e),this.workingArea.appendChild(e.holder)}},{key:"swap",value:function(e,o){var t=this.blocks[o];n.swap(this.blocks[e].holder,t.holder),this.blocks[o]=this.blocks[e],this.blocks[e]=t}},{key:"insert",value:function(e,o){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){e>this.length&&(e=this.length),t&&this.blocks[e].holder.remove();var s=t?1:0;if(this.blocks.splice(e,s,o),e>0){this.blocks[e-1].holder.insertAdjacentElement("afterend",o.holder)}else{var n=this.blocks[e+1];n?n.holder.insertAdjacentElement("beforebegin",o.holder):this.workingArea.appendChild(o.holder)}}else this.push(o)}},{key:"remove",value:function(e){isNaN(e)&&(e=this.length-1),this.blocks[e].holder.remove(),this.blocks.splice(e,1)}},{key:"removeAll",value:function(){this.workingArea.innerHTML="",this.blocks.length=0}},{key:"insertAfter",value:function(e,o){var t=this.blocks.indexOf(e);this.insert(t+1,o)}},{key:"get",value:function(e){return this.blocks[e]}},{key:"indexOf",value:function(e){return this.blocks.indexOf(e)}},{key:"length",get:function(){return this.blocks.length}},{key:"array",get:function(){return this.blocks}},{key:"nodes",get:function(){return r.array(this.workingArea.children)}}],[{key:"set",value:function(e,o,t){return!isNaN(Number(o))&&(e.insert(o,t),!0)}},{key:"get",value:function(e,o){return isNaN(Number(o))?e[o]:e.get(o)}}]),e}();_.displayName="Blocks",e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/caret.js":
/*!*****************************************!*\
  !*** ./src/components/modules/caret.js ***!
  \*****************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n,r){Object.defineProperty(o,"__esModule",{value:!0});var l=m(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),i=m(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),u=m(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),d=m(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=m(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),a=m(t(/*! ../selection */"./src/components/selection.ts"));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function o(e){var t=e.config;return(0,i.default)(this,o),(0,d.default)(this,(o.__proto__||(0,l.default)(o)).call(this,{config:t}))}return(0,c.default)(o,e),(0,u.default)(o,[{key:"setToBlock",value:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.positions.DEFAULT,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.Editor.BlockManager,u=void 0;switch(s){case o.positions.START:u=e.firstInput;break;case o.positions.END:u=e.lastInput;break;default:u=e.currentInput}if(u){var d=n.getDeepestNode(u,s===o.positions.END),c=n.getContentLength(d);switch(!0){case s===o.positions.START:l=0;break;case s===o.positions.END:case l>c:l=c}r.delay(function(){t.set(d,l)},20)(),i.setCurrentBlockByChildNode(e.holder),i.currentBlock.currentInput=u}}},{key:"setToInput",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.positions.DEFAULT,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.Editor.BlockManager.currentBlock,l=n.getDeepestNode(e);switch(t){case o.positions.START:this.set(l,0);break;case o.positions.END:var i=n.getContentLength(l);this.set(l,i);break;default:s&&this.set(l,s)}r.currentInput=e}},{key:"set",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=document.createRange(),s=a.default.get();if(n.isNativeInput(e))return e.focus(),void(e.selectionStart=e.selectionEnd=o);t.setStart(e,o),t.setEnd(e,o),s.removeAllRanges(),s.addRange(t);var r=t.getBoundingClientRect(),l=r.top,i=r.bottom,u=window.innerHeight;l<0&&window.scrollBy(0,l),i>u&&window.scrollBy(0,i-u)}},{key:"setToTheLastBlock",value:function(){var e=this.Editor.BlockManager.lastBlock;if(e)if(e.isEmpty)this.setToBlock(e);else{var o=this.Editor.BlockManager.insertAtEnd();this.setToBlock(o)}}},{key:"extractFragmentFromCaretPosition",value:function(){var e=a.default.get();if(e.rangeCount){var o=e.getRangeAt(0),t=this.Editor.BlockManager.currentBlock.currentInput;if(o.deleteContents(),t){var s=o.cloneRange(!0);return s.selectNodeContents(t),s.setStart(o.endContainer,o.endOffset),s.extractContents()}}}},{key:"getHigherLevelSiblings",value:function(e,o){for(var t=e,s=[];t.parentNode&&"true"!==t.parentNode.contentEditable;)t=t.parentNode;for(var n="left"===o?"previousSibling":"nextSibling";t[n];)t=t[n],s.push(t);return s}},{key:"navigateNext",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.Editor.BlockManager,s=t.currentBlock,n=t.nextContentfulBlock,r=s.nextInput;return!(!n&&!r)&&(e?(this.setToBlock(n,o.positions.START),!0):!!this.isAtEnd&&(r?this.setToInput(r,o.positions.START):this.setToBlock(n,o.positions.START),!0))}},{key:"navigatePrevious",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.Editor.BlockManager,s=t.currentBlock,n=t.previousContentfulBlock,r=(s||{}).previousInput;return!(!n&&!r)&&(e&&this.setToBlock(n,o.positions.END),!!this.isAtStart&&(r?this.setToInput(r,o.positions.END):this.setToBlock(n,o.positions.END),!0))}},{key:"createShadow",value:function(e){var t=document.createElement("span");t.classList.add(o.CSS.shadowCaret),e.insertAdjacentElement("beforeEnd",t)}},{key:"restoreCaret",value:function(e){var t=e.querySelector("."+o.CSS.shadowCaret);t&&((new a.default).expandToTag(t),setTimeout(function(){var e=document.createRange();e.selectNode(t),e.extractContents()},50))}},{key:"isAtStart",get:function(){if(!a.default.isCollapsed)return!1;var e=a.default.get(),o=e.anchorNode,t=n.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);if(n.isNativeInput(t))return 0===t.selectionEnd;var s=o.textContent.search(/\S/);if((-1===s&&(s=0),n.isEmpty(t))&&(this.getHigherLevelSiblings(o,"left").every(function(e){return n.isEmpty(e)})&&e.anchorOffset===s))return!0;return null===t||o===t&&e.anchorOffset<=s}},{key:"isAtEnd",get:function(){if(!a.default.isCollapsed)return!1;var e=a.default.get(),o=e.anchorNode,t=n.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(n.isNativeInput(t))return t.selectionEnd===t.value.length;if(n.isEmpty(t)&&(this.getHigherLevelSiblings(o,"right").every(function(e){return n.isEmpty(e)})&&e.anchorOffset===o.textContent.length))return!0;var s=t.textContent.replace(/\s+$/,"");return o===t&&e.anchorOffset>=s.length}}],[{key:"CSS",get:function(){return{shadowCaret:"cdx-shadow-caret"}}},{key:"positions",get:function(){return{START:"start",END:"end",DEFAULT:"default"}}}]),o}(s);f.displayName="Caret",o.default=f,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/dragNDrop.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/dragNDrop.ts ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=m(t(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),r=m(t(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),l=m(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),i=m(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),u=m(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),d=m(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=m(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),a=m(t(/*! ../selection */"./src/components/selection.ts"));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function o(){var e=this;(0,i.default)(this,o);var t=(0,d.default)(this,(o.__proto__||(0,l.default)(o)).apply(this,arguments));return t.isStartedAtEditor=!1,t.processDrop=function(){var o=(0,r.default)(n.default.mark(function o(s){var r,l,i;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.Editor,l=r.BlockManager,i=r.Paste,s.preventDefault(),l.blocks.forEach(function(e){return e.dropTarget=!1}),a.default.isAtEditor&&!a.default.isCollapsed&&t.isStartedAtEditor&&document.execCommand("delete"),t.isStartedAtEditor=!1;try{l.setCurrentBlockByChildNode(s.target,"end")}catch(e){l.setCurrentBlockByChildNode(l.lastBlock.holder,"end")}i.processDataTransfer(s.dataTransfer,!0);case 7:case"end":return e.stop()}},o,e)}));return function(e){return o.apply(this,arguments)}}(),t}return(0,c.default)(o,e),(0,u.default)(o,[{key:"prepare",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){var e=this;this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"drop",this.processDrop,!0),this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"dragstart",function(o){a.default.isAtEditor&&!a.default.isCollapsed&&(e.isStartedAtEditor=!0),e.Editor.InlineToolbar.close()}),this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"dragover",function(e){return e.preventDefault()},!0)}}]),o}(s);f.displayName="DragNDrop",o.default=f,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/events.js":
/*!******************************************!*\
  !*** ./src/components/modules/events.js ***!
  \******************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;(0,r.default)(this,o);var s=(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}));return s.subscribers={},s}return(0,u.default)(o,e),(0,l.default)(o,[{key:"on",value:function(e,o){e in this.subscribers||(this.subscribers[e]=[]),this.subscribers[e].push(o)}},{key:"emit",value:function(e,o){this.subscribers[e]&&this.subscribers[e].reduce(function(e,o){var t=o(e);return t||e},o)}},{key:"off",value:function(e,o){for(var t=0;t<this.subscribers[e].length;t++)if(this.subscribers[e][t]===o){delete this.subscribers[e][t];break}}},{key:"destroy",value:function(){this.subscribers=null}}]),o}(s);c.displayName="Events",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/listeners.js":
/*!*********************************************!*\
  !*** ./src/components/modules/listeners.js ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=d(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=d(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=d(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function o(e){var t=e.config;(0,r.default)(this,o);var s=(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}));return s.allListeners=[],s}return(0,u.default)(o,e),(0,l.default)(o,[{key:"on",value:function(e,o,t){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n={element:e,eventType:o,handler:t,useCapture:s};this.findOne(e,o,t)||(this.allListeners.push(n),e.addEventListener(o,t,s))}},{key:"off",value:function(e,o,t){for(var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=this.findAll(e,o,t),r=0;r<n.length;r++){var l=this.allListeners.indexOf(n[r]);l>0&&this.allListeners.splice(l,1)}e.removeEventListener(o,t,s)}},{key:"findByElement",value:function(e){for(var o=[],t=0;t<this.allListeners.length;t++){var s=this.allListeners[t];s.element===e&&o.push(s)}return o}},{key:"findByType",value:function(e){for(var o=[],t=0;t<this.allListeners.length;t++){var s=this.allListeners[t];s.type===e&&o.push(s)}return o}},{key:"findByHandler",value:function(e){for(var o=[],t=0;t<this.allListeners.length;t++){var s=this.allListeners[t];s.handler===e&&o.push(s)}return o}},{key:"findOne",value:function(e,o,t){var s=this.findAll(e,o,t);return s.length>0?s[0]:null}},{key:"findAll",value:function(e,o,t){var s=e?this.findByElement(e):[];return e&&o&&t?s.filter(function(e){return e.eventType===o&&e.handler===t}):e&&o?s.filter(function(e){return e.eventType===o}):s}},{key:"removeAll",value:function(){this.allListeners.map(function(e){e.element.removeEventListener(e.eventType,e.handler)}),this.allListeners=[]}}]),o}(s);c.displayName="Listeners",o.default=c,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/modificationsObserver.ts":
/*!*********************************************************!*\
  !*** ./src/components/modules/modificationsObserver.ts ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=m(t(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),l=m(t(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),i=m(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),u=m(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),d=m(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),c=m(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=m(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function o(e){var t=e.config;(0,u.default)(this,o);var s=(0,c.default)(this,(o.__proto__||(0,i.default)(o)).call(this,{config:t}));return s.mutationDebouncer=n.debounce(function(){s.config.onChange.call()},o.DebounceTimer),s}return(0,a.default)(o,e),(0,d.default)(o,[{key:"destroy",value:function(){this.mutationDebouncer=null}},{key:"prepare",value:function(){var e=(0,l.default)(r.default.mark(function e(){var o=this;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.setTimeout(function(){o.setObserver()},1e3);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setObserver",value:function(){var e=this,o=this.Editor,t=o.Listeners,s=o.UI;t.on(s.nodes.redactor,"DOMSubtreeModified",function(){e.mutationDebouncer()},!1)}}]),o}(s);f.displayName="ModificationsObserver",o.default=f,f.DebounceTimer=450,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/paste.ts":
/*!*****************************************!*\
  !*** ./src/components/modules/paste.ts ***!
  \*****************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n,r){Object.defineProperty(o,"__esModule",{value:!0});var l=k(t(/*! babel-runtime/helpers/toConsumableArray */"./node_modules/babel-runtime/helpers/toConsumableArray.js")),i=k(t(/*! babel-runtime/core-js/array/from */"./node_modules/babel-runtime/core-js/array/from.js")),u=k(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),d=k(t(/*! babel-runtime/core-js/object/entries */"./node_modules/babel-runtime/core-js/object/entries.js")),c=k(t(/*! babel-runtime/core-js/object/assign */"./node_modules/babel-runtime/core-js/object/assign.js")),a=k(t(/*! babel-runtime/core-js/object/keys */"./node_modules/babel-runtime/core-js/object/keys.js")),m=k(t(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),f=k(t(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),j=k(t(/*! babel-runtime/helpers/slicedToArray */"./node_modules/babel-runtime/helpers/slicedToArray.js")),_=k(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),p=k(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),h=k(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),b=k(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),v=k(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),y=k(t(/*! ./caret */"./src/components/modules/caret.js")),g=k(t(/*! ../selection */"./src/components/selection.ts"));function k(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function o(e){var t=this,s=e.config;(0,p.default)(this,o);var r=(0,b.default)(this,(o.__proto__||(0,_.default)(o)).call(this,{config:s}));return r.toolsTags={},r.toolsPatterns=[],r.toolsFiles={},r.processTool=function(e){var o=(0,j.default)(e,2),t=o[0],s=o[1];try{var l=s.onPaste||{};r.getTagsConfig(t,l),r.getFilesConfig(t,l),r.getPatternsConfig(t,l)}catch(e){n.log("Paste handling for «"+t+"» Tool hasn't been set up because of the error","warn",e)}},r.handlePasteEvent=function(){var e=(0,f.default)(m.default.mark(function e(o){var s;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.Editor,s.Sanitizer,s.BlockManager,s.Tools,s.Caret,!r.isNativeBehaviour(o.target)||o.clipboardData.types.includes("Files")){e.next=3;break}return e.abrupt("return");case 3:o.preventDefault(),r.processDataTransfer(o.clipboardData);case 5:case"end":return e.stop()}},e,t)}));return function(o){return e.apply(this,arguments)}}(),r}return(0,v.default)(o,e),(0,h.default)(o,[{key:"prepare",value:function(){var e=(0,f.default)(m.default.mark(function e(){return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setCallback(),this.processTools();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"processDataTransfer",value:function(){var e=(0,f.default)(m.default.mark(function e(o){var t,s,n,l,i,u,d=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.Editor.Sanitizer,!o.types.includes("Files")){e.next=5;break}return e.next=4,this.processFiles(o.items);case 4:return e.abrupt("return");case 5:if(s=o.getData("text/plain"),n=o.getData("text/html"),d&&s.trim()&&n.trim()&&(n="<p>"+(n.trim()?n:s)+"</p>"),l=(0,a.default)(this.toolsTags).reduce(function(e,o){return e[o.toLowerCase()]=!0,e},{}),i={tags:(0,c.default)({},l,t.defaultConfig.tags)},(u=t.clean(n,i)).trim()&&u.trim()!==s&&r.isHTMLString(u)){e.next=16;break}return e.next=14,this.processText(s);case 14:e.next=18;break;case 16:return e.next=18,this.processText(u,!0);case 18:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"setCallback",value:function(){var e=this.Editor,o=e.Listeners,t=e.UI;o.on(t.nodes.redactor,"paste",this.handlePasteEvent)}},{key:"processTools",value:function(){var e=this.Editor.Tools.blockTools;(0,d.default)(e).forEach(this.processTool)}},{key:"getTagsConfig",value:function(e,o){var t=this;(this.config.initialBlock!==e||o.handler||n.log("«"+e+"» Tool must provide a paste handler.","warn"),o.handler)&&("function"==typeof o.handler?(o.tags||[]).forEach(function(s){t.toolsTags.hasOwnProperty(s)?n.log("Paste handler for «"+e+"» Tool on «"+s+"» tag is skipped because it is already used by «"+t.toolsTags[s].tool+"» Tool.","warn"):t.toolsTags[s.toUpperCase()]={handler:o.handler,tool:e}}):n.log("Paste handler for «"+e+"» Tool should be a function.","warn"))}},{key:"getFilesConfig",value:function(e,o){var t=o.fileHandler,s=o.files,r=void 0===s?{}:s,l=r.extensions,i=r.mimeTypes;t&&(l||i)&&("function"==typeof t?(l&&!Array.isArray(l)&&(n.log("«extensions» property of the onDrop config for «"+e+"» Tool should be an array"),l=[]),i&&!Array.isArray(i)&&(n.log("«mimeTypes» property of the onDrop config for «"+e+"» Tool should be an array"),i=[]),i&&(i=i.filter(function(o){return!!n.isValidMimeType(o)||(n.log("MIME type value «"+o+"» for the «"+e+"» Tool is not a valid MIME type","warn"),!1)})),this.toolsFiles[e]={extensions:l||[],mimeTypes:i||[],handler:t}):n.log("Drop handler for «"+e+"» Tool should be a function."))}},{key:"getPatternsConfig",value:function(e,o){var t=this;o.patternHandler&&!n.isEmpty(o.patterns)&&("function"==typeof o.patternHandler?(0,d.default)(o.patterns).forEach(function(s){var r=(0,j.default)(s,2),l=r[0],i=r[1];i instanceof RegExp||n.log("Pattern "+i+" for «"+e+"» Tool is skipped because it should be a Regexp instance.","warn"),t.toolsPatterns.push({key:l,pattern:i,handler:o.patternHandler,tool:e})}):n.log("Pattern parser for «"+e+"» Tool should be a function.","warn"))}},{key:"isNativeBehaviour",value:function(e){var o=this.Editor.BlockManager;return!!r.isNativeInput(e)||!o.getBlock(e)}},{key:"processFiles",value:function(){var e=(0,f.default)(m.default.mark(function e(o){var t,s=this;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.Editor.BlockManager,void 0,e.next=4,u.default.all((0,i.default)(o).map(function(e){return s.processFile(e)}));case 4:e.sent.filter(function(e){return!!e}).forEach(function(e,o){0===o&&t.currentBlock&&t.currentBlock.isEmpty?t.replace(e.type,e.data):t.insert(e.type,e.data)});case 7:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"processFile",value:function(){var e=(0,f.default)(m.default.mark(function e(o){var t,s,r,l,i,u;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==o.kind){e.next=2;break}return e.abrupt("return");case 2:if(t=o.getAsFile(),s=n.getFileExtension(t),r=(0,d.default)(this.toolsFiles).find(function(e){var o=(0,j.default)(e,2),n=(o[0],o[1]),r=n.mimeTypes,l=n.extensions,i=t.type.split("/"),u=(0,j.default)(i,2),d=u[0],c=u[1],a=l.find(function(e){return e.toLowerCase()===s.toLowerCase()}),m=r.find(function(e){var o=e.split("/"),t=(0,j.default)(o,2),s=t[0],n=t[1];return s===d&&(n===c||"*"===n)});return!!a||!!m})){e.next=7;break}return e.abrupt("return");case 7:return l=(0,j.default)(r,2),i=l[0],u=l[1].handler,e.next=10,u(t);case 10:return e.t0=e.sent,e.t1=i,e.abrupt("return",{data:e.t0,type:e.t1});case 13:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"processText",value:function(){var e=(0,f.default)(m.default.mark(function e(o){var t,s,n,r,l=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.Editor,s=t.Caret,n=t.BlockManager,(r=i?this.processHTML(o):this.processPlain(o)).length){e.next=4;break}return e.abrupt("return");case 4:if(1!==r.length||r[0].isBlock){e.next=7;break}return this.processSingleBlock(r.pop()),e.abrupt("return");case 7:return g.default.isAtEditor&&!s.isAtEnd&&g.default.isCollapsed&&this.splitBlock(),e.next=10,u.default.all(r.map(function(){var e=(0,f.default)(m.default.mark(function e(o,t){return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.insertBlock(o,0===t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,l)}));return function(o,t){return e.apply(this,arguments)}}()));case 10:s.setToBlock(n.currentBlock,y.default.positions.END);case 11:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"processHTML",value:function(e){var o=this,t=this.Editor,s=t.Tools,n=t.Sanitizer,l=this.config.initialBlock,i=r.make("DIV");return i.innerHTML=e,this.getNodes(i).map(function(e){var t=void 0,i=l,u=!1;switch(e.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(t=r.make("div")).appendChild(e);break;case Node.ELEMENT_NODE:t=e,u=!0,o.toolsTags[t.tagName]&&(i=o.toolsTags[t.tagName].tool)}var d=s.blockTools[i].onPaste,a=d.handler,m=d.tags.reduce(function(e,o){return e[o.toLowerCase()]={},e},{}),f={tags:(0,c.default)({},m,n.defaultConfig.tags)};return t.innerHTML=n.clean(t.innerHTML,f),{content:t,isBlock:u,handler:a,tool:i}}).filter(function(e){return!r.isNodeEmpty(e.content)||r.isSingleTag(e.content)})}},{key:"processPlain",value:function(e){var o=this.config.initialBlock,t=this.Editor.Tools;if(!e)return[];var s=o,n=t.blockTools[s].onPaste.handler;return e.split(/\r?\n/).filter(function(e){return e.trim()}).map(function(e){var o=r.make("div");return o.innerHTML=e,{content:o,tool:s,isBlock:!1,handler:n}})}},{key:"processSingleBlock",value:function(){var e=(0,f.default)(m.default.mark(function e(t){var s,n,r,l,i,u,d;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.config.initialBlock,n=this.Editor,r=n.BlockManager,l=n.Caret,i=t.content,!(t.tool===s&&i.textContent.length<o.PATTERN_PROCESSING_MAX_LENGTH)){e.next=11;break}return e.next=4,this.processPattern(i.textContent);case 4:if(!(u=e.sent)){e.next=11;break}return this.splitBlock(),d=void 0,d=r.currentBlock&&r.currentBlock.isEmpty?r.replace(u.tool,u.data):r.insert(u.tool,u.data),l.setToBlock(d,y.default.positions.END),e.abrupt("return");case 11:document.execCommand("insertHTML",!1,i.innerHTML);case 12:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"processPattern",value:function(){var e=(0,f.default)(m.default.mark(function e(o){var t,s;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.toolsPatterns.find(function(e){var t=e.pattern.exec(o);return!!t&&o===t.shift()}),e.t0=t,!e.t0){e.next=6;break}return e.next=5,t.handler(o,t.key);case 5:e.t0=e.sent;case 6:return s=e.t0,e.abrupt("return",s&&{data:s,tool:t.tool});case 8:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"insertBlock",value:function(){var e=(0,f.default)(m.default.mark(function e(o){var t,s,n,r,l,i,u=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.handler(o.content);case 2:if(t=e.sent,s=this.Editor,n=s.BlockManager,r=s.Caret,l=n.currentBlock,!(u&&l&&l.isEmpty)){e.next=10;break}return n.replace(o.tool,t),e.abrupt("return");case 10:i=n.insert(o.tool,t),r.setToBlock(i);case 12:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"splitBlock",value:function(){var e=this.Editor,o=e.BlockManager,t=e.Caret;o.currentBlock&&(o.currentBlock.isEmpty||t.isAtEnd||(o.split(),o.currentBlockIndex--))}},{key:"getNodes",value:function(e){var o=(0,i.default)(e.childNodes),t=(0,a.default)(this.toolsTags);return o.reduce(function e(o,s){if(r.isEmpty(s)&&!r.isSingleTag(s))return o;var n=o[o.length-1],u=new DocumentFragment;switch(n&&r.isFragment(n)&&(u=o.pop()),s.nodeType){case Node.ELEMENT_NODE:var d=s;if(!r.blockElements.includes(d.tagName.toLowerCase())&&!t.includes(d.tagName))return u.appendChild(d),[].concat((0,l.default)(o),[u]);if(t.includes(d.tagName)||r.blockElements.includes(d.tagName.toLowerCase())&&(0,i.default)(d.children).every(function(e){var o=e.tagName;return!r.blockElements.includes(o.toLowerCase())}))return[].concat((0,l.default)(o),[d]);break;case Node.TEXT_NODE:return u.appendChild(s),[].concat((0,l.default)(o),[u]);default:return[].concat((0,l.default)(o),[u])}return[].concat((0,l.default)(o),(0,l.default)((0,i.default)(s.childNodes).reduce(e,[])))},[])}}]),o}(s);x.displayName="Paste",o.default=x,x.PATTERN_PROCESSING_MAX_LENGTH=450,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! utils */"./src/components/utils.ts"),t(/*! dom */"./src/components/dom.ts"))},"./src/components/modules/renderer.js":
/*!********************************************!*\
  !*** ./src/components/modules/renderer.js ***!
  \********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=a(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),l=a(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),i=a(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),u=a(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),d=a(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=a(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function a(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function o(e){var t=e.config;return(0,i.default)(this,o),(0,d.default)(this,(o.__proto__||(0,l.default)(o)).call(this,{config:t}))}return(0,c.default)(o,e),(0,u.default)(o,[{key:"render",value:function(e){for(var o=this,t=[],s=function(s){t.push({function:function(){return o.insertBlock(e[s])}})},r=0;r<e.length;r++)s(r);return n.sequence(t)}},{key:"insertBlock",value:function(e){var o=e.type,t=e.data,s=e.settings;if(o in this.Editor.Tools.available)try{this.Editor.BlockManager.insert(o,t,s)}catch(e){n.log("Block «"+o+"» skipped because of plugins error","warn",t),r.default.reject(e)}else n.log("Tool «"+o+"» is not found. Check 'tools' property at your initial CodeX Editor config.","warn");return r.default.resolve()}}]),o}(s);m.displayName="Renderer",o.default=m,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/sanitizer.js":
/*!*********************************************!*\
  !*** ./src/components/modules/sanitizer.js ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),i=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),u=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),d=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var s=e.config;(0,l.default)(this,o);var n=(0,u.default)(this,(o.__proto__||(0,r.default)(o)).call(this,{config:s}));return n.defaultConfig=null,n._sanitizerInstance=null,n.sanitizerConfig=s.settings?s.settings.sanitizer:{},n.sanitizerInstance=t(/*! html-janitor */"./node_modules/html-janitor/src/html-janitor.js"),n}return(0,d.default)(o,e),(0,i.default)(o,[{key:"clean",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.isEmpty(t)?this._sanitizerInstance.clean(e):o.clean(e,t)}},{key:"sanitizerInstance",set:function(e){this._sanitizerInstance=new e(this.defaultConfig)}},{key:"sanitizerConfig",set:function(e){n.isEmpty(e)?this.defaultConfig={tags:{p:{},a:{href:!0,target:"_blank",rel:"nofollow"},b:{},i:{}}}:this.defaultConfig=e}}],[{key:"clean",value:function(e,t){return new o({config:{settings:{sanitizer:t}}}).clean(e)}}]),o}(s);a.displayName="Sanitizer",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/saver.js":
/*!*****************************************!*\
  !*** ./src/components/modules/saver.js ***!
  \*****************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=c(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),r=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),i=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),u=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),d=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var t=e.config;(0,l.default)(this,o);var s=(0,u.default)(this,(o.__proto__||(0,r.default)(o)).call(this,{config:t}));return s.output=null,s.blocksData=[],s}return(0,d.default)(o,e),(0,i.default)(o,[{key:"save",value:function(){var e=this,o=[];return this.Editor.BlockManager.blocks.forEach(function(e){o.push(e.data)}),n.default.all(o).then(function(o){return e.makeOutput(o)}).then(function(e){return e})}},{key:"makeOutput",value:function(e){var o=[],t=0;return console.groupCollapsed("[CodexEditor saving]:"),e.forEach(function(e){console.log("«"+e.tool+"» saving info",e),t+=e.time,o.push({type:e.tool,data:e.data})}),console.log("Total",t),console.groupEnd(),{time:+new Date,blocks:o,version:"2.1.0"}}}]),o}(s);a.displayName="Saver",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/shortcuts.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/shortcuts.ts ***!
  \*********************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s){Object.defineProperty(o,"__esModule",{value:!0});var n=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),l=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),i=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),d=c(t(/*! @codexteam/shortcuts */"./node_modules/@codexteam/shortcuts/lib/shortcuts.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var t=e.config;(0,r.default)(this,o);var s=(0,i.default)(this,(o.__proto__||(0,n.default)(o)).call(this,{config:t}));return s.registeredShortcuts=[],s}return(0,u.default)(o,e),(0,l.default)(o,[{key:"add",value:function(e){var o=new d.default({name:e.name,on:document,callback:e.handler});this.registeredShortcuts.push(o)}},{key:"remove",value:function(e){}}]),o}(s);a.displayName="Shortcuts",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"))},"./src/components/modules/toolbar-blockSettings.js":
/*!*********************************************************!*\
  !*** ./src/components/modules/toolbar-blockSettings.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),i=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),u=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),d=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var t=e.config;(0,l.default)(this,o);var s=(0,u.default)(this,(o.__proto__||(0,r.default)(o)).call(this,{config:t}));return s.nodes={wrapper:null,toolSettings:null,defaultSettings:null},s}return(0,d.default)(o,e),(0,i.default)(o,[{key:"make",value:function(){this.nodes.wrapper=n.make("div",o.CSS.wrapper),this.nodes.toolSettings=n.make("div",o.CSS.toolSettings),this.nodes.defaultSettings=n.make("div",o.CSS.defaultSettings),n.append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings])}},{key:"addToolSettings",value:function(){"function"==typeof this.Editor.BlockManager.currentBlock.tool.renderSettings&&n.append(this.nodes.toolSettings,this.Editor.BlockManager.currentBlock.tool.renderSettings())}},{key:"addDefaultSettings",value:function(){n.append(this.nodes.defaultSettings,this.Editor.BlockManager.currentBlock.renderTunes())}},{key:"open",value:function(){this.nodes.wrapper.classList.add(o.CSS.wrapperOpened),this.addToolSettings(),this.addDefaultSettings(),this.Editor.Events.emit(this.events.opened)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(o.CSS.wrapperOpened),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.Editor.Events.emit(this.events.closed)}},{key:"events",get:function(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(o.CSS.wrapperOpened)}}],[{key:"CSS",get:function(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button"}}}]),o}(s);a.displayName="BlockSettings",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"))},"./src/components/modules/toolbar-inline.ts":
/*!**************************************************!*\
  !*** ./src/components/modules/toolbar-inline.ts ***!
  \**************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=b(t(/*! babel-runtime/core-js/map */"./node_modules/babel-runtime/core-js/map.js")),l=b(t(/*! babel-runtime/core-js/object/assign */"./node_modules/babel-runtime/core-js/object/assign.js")),i=b(t(/*! babel-runtime/core-js/array/from */"./node_modules/babel-runtime/core-js/array/from.js")),u=b(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),d=b(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),c=b(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),a=b(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),m=b(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),f=b(t(/*! ../inline-tools/inline-tool-bold */"./src/components/inline-tools/inline-tool-bold.ts")),j=b(t(/*! ../inline-tools/inline-tool-italic */"./src/components/inline-tools/inline-tool-italic.ts")),_=b(t(/*! ../inline-tools/inline-tool-link */"./src/components/inline-tools/inline-tool-link.ts")),p=b(t(/*! ../selection */"./src/components/selection.ts")),h=b(t(/*! ../utils */"./src/components/utils.ts"));function b(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function o(e){var t=e.config;(0,d.default)(this,o);var s=(0,a.default)(this,(o.__proto__||(0,u.default)(o)).call(this,{config:t}));return s.CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inlineToolButtonLast:"ce-inline-tool--last"},s.nodes={wrapper:null,buttons:null,actions:null},s.toolbarVerticalMargin=20,s}return(0,m.default)(o,e),(0,c.default)(o,[{key:"make",value:function(){this.nodes.wrapper=n.make("div",this.CSS.inlineToolbar),this.nodes.buttons=n.make("div",this.CSS.buttonsWrapper),this.nodes.actions=n.make("div",this.CSS.actionsWrapper),n.append(this.nodes.wrapper,[this.nodes.buttons,this.nodes.actions]),n.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addTools()}},{key:"handleShowingEvent",value:function(e){this.allowedToShow(e)?(this.move(),this.open(),this.checkToolsState()):this.close()}},{key:"move",value:function(){var e=p.default.rect,o=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),t={x:e.x-o.left,y:e.y+e.height-o.top+this.toolbarVerticalMargin};e.width&&(t.x+=Math.floor(e.width/2)),this.nodes.wrapper.style.left=Math.floor(t.x)+"px",this.nodes.wrapper.style.top=Math.floor(t.y)+"px"}},{key:"open",value:function(){this.filterTools(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.tools.forEach(function(e,o){"function"==typeof e.clear&&e.clear()})}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),this.tools.forEach(function(e,o){"function"==typeof e.clear&&e.clear()})}},{key:"allowedToShow",value:function(e){if(e&&["IMG","INPUT"].includes(e.target.tagName))return!1;var o=p.default.get(),t=p.default.text;if(!o||!o.anchorNode)return!1;if(o.isCollapsed||t.length<1)return!1;var s=this.Editor.BlockManager.getBlock(o.anchorNode);if(!s)return!1;var n=this.Editor.Tools.getToolSettings(s.name);return n&&n[this.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR]}},{key:"filterTools",value:function(){var e=this,o=p.default.get(),t=this.Editor.BlockManager.getBlock(o.anchorNode),s=this.Editor.Tools.getToolSettings(t.name),n=s&&s[this.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR],r=(0,i.default)(this.nodes.buttons.querySelectorAll("."+this.CSS.inlineToolButton));r.forEach(function(o){o.hidden=!1,o.classList.remove(e.CSS.inlineToolButtonLast)}),Array.isArray(n)&&r.forEach(function(e){e.hidden=!n.includes(e.dataset.tool)});var l=r.filter(function(e){return!e.hidden}).pop();l&&l.classList.add(this.CSS.inlineToolButtonLast)}},{key:"addTools",value:function(){var e=this;this.tools.forEach(function(o,t){e.addTool(t,o)})}},{key:"addTool",value:function(e,o){var t=this,s=o.render();if(s){if(s.dataset.tool=e,this.nodes.buttons.appendChild(s),"function"==typeof o.renderActions){var n=o.renderActions();this.nodes.actions.appendChild(n)}this.Editor.Listeners.on(s,"click",function(e){t.toolClicked(o),e.preventDefault()});var r=this.Editor.Tools.getToolSettings(e),l=null;this.internalTools[e]?l=this.internalTools[e].shortcut:r&&r[this.Editor.Tools.apiSettings.SHORTCUT]&&(l=r[this.Editor.Tools.apiSettings.SHORTCUT]),l&&this.enableShortcuts(o,l)}else h.default.log("Render method must return an instance of Node","warn",e)}},{key:"enableShortcuts",value:function(e,o){var t=this;this.Editor.Shortcuts.add({name:o,handler:function(o){var s=t.Editor.BlockManager.currentBlock;if(s){var n=t.Editor.Tools.getToolSettings(s.name);n&&n[t.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR]&&(o.preventDefault(),t.toolClicked(e))}}})}},{key:"toolClicked",value:function(e){var o=p.default.range;e.surround(o),this.checkToolsState()}},{key:"checkToolsState",value:function(){this.tools.forEach(function(e,o){e.checkState(p.default.get())})}},{key:"tools",get:function(){if(!this.toolsInstances||0===this.toolsInstances.size){var e=(0,l.default)({},this.internalTools,this.externalTools);for(var o in this.toolsInstances=new r.default,e)e.hasOwnProperty(o)&&this.toolsInstances.set(o,e[o])}return this.toolsInstances}},{key:"internalTools",get:function(){return{bold:this.Editor.Tools.constructInline(f.default),italic:this.Editor.Tools.constructInline(j.default),link:this.Editor.Tools.constructInline(_.default)}}},{key:"externalTools",get:function(){var e={};for(var o in this.Editor.Tools.inline)this.Editor.Tools.inline.hasOwnProperty(o)&&(e[o]=this.Editor.Tools.constructInline(this.Editor.Tools.inline[o]));return e}}]),o}(s);v.displayName="InlineToolbar",o.default=v,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"))},"./src/components/modules/toolbar-toolbox.js":
/*!***************************************************!*\
  !*** ./src/components/modules/toolbar-toolbox.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n,r){Object.defineProperty(o,"__esModule",{value:!0});var l=a(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),i=a(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),u=a(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),d=a(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=a(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));a(t(/*! ../interfaces/editor-config */"./src/components/interfaces/editor-config.ts"));function a(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function o(e){var t=e.config;(0,i.default)(this,o);var s=(0,d.default)(this,(o.__proto__||(0,l.default)(o)).call(this,{config:t}));return s.nodes={toolbox:null,buttons:[]},s.opened=!1,s.activeButtonIndex=-1,s.displayedToolsCount=0,s}return(0,c.default)(o,e),(0,u.default)(o,[{key:"make",value:function(){this.nodes.toolbox=n.make("div",o.CSS.toolbox),n.append(this.Editor.Toolbar.nodes.content,this.nodes.toolbox),this.addTools()}},{key:"addTools",value:function(){var e=this.Editor.Tools.toolsAvailable;for(var o in e)this.addTool(o,e[o])}},{key:"addTool",value:function(e,t){var s=this,l=this.Editor.Tools.apiSettings;if(!t[l.IS_DISPLAYED_IN_TOOLBOX]||t[l.TOOLBAR_ICON]){if(t[l.IS_DISPLAYED_IN_TOOLBOX]){var i=n.make("li",[o.CSS.toolboxButton],{title:e});i.innerHTML=t.toolboxIcon,n.append(this.nodes.toolbox,i),this.nodes.toolbox.appendChild(i),this.nodes.buttons.push(i),this.Editor.Listeners.on(i,"click",function(o){s.toolButtonActivate(o,e)});var u=this.Editor.Tools.getToolSettings(e);u&&u[this.Editor.Tools.apiSettings.SHORTCUT]&&this.enableShortcut(t,e,u[this.Editor.Tools.apiSettings.SHORTCUT]),this.displayedToolsCount++}}else r.log("Toolbar icon is missed. Tool %o skipped","warn",e)}},{key:"enableShortcut",value:function(e,o,t){var s=this;this.Editor.Shortcuts.add({name:t,handler:function(t){t.preventDefault(),s.insertNewBlock(e,o)}})}},{key:"insertNewBlock",value:function(e,o){var t=this.Editor.BlockManager.currentBlock,s=void 0;s=!e[this.Editor.Tools.apiSettings.IS_IRREPLACEBLE_TOOL]&&t.isEmpty?this.Editor.BlockManager.replace(o):this.Editor.BlockManager.insert(o),this.Editor.Caret.setToBlock(s),this.Editor.Toolbar.close()}},{key:"toolButtonActivate",value:function(e,o){var t=this.Editor.Tools.toolsClasses[o];this.insertNewBlock(t,o)}},{key:"open",value:function(){this.isEmpty||(this.nodes.toolbox.classList.add(o.CSS.toolboxOpened),this.opened=!0)}},{key:"close",value:function(){this.nodes.toolbox.classList.remove(o.CSS.toolboxOpened),this.opened=!1,this.activeButtonIndex=-1;var e=this.nodes.toolbox.querySelector("."+o.CSS.toolboxButtonActive);e&&e.classList.remove(o.CSS.toolboxButtonActive)}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"leaf",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",t=this.nodes.toolbox.childNodes;-1===this.activeButtonIndex?this.activeButtonIndex="right"===e?-1:0:t[this.activeButtonIndex].classList.remove(o.CSS.toolboxButtonActive),this.activeButtonIndex="right"===e?(this.activeButtonIndex+1)%t.length:(t.length+this.activeButtonIndex-1)%t.length,t[this.activeButtonIndex].classList.add(o.CSS.toolboxButtonActive)}},{key:"getActiveTool",get:function(){var e=this.nodes.toolbox.childNodes;return-1===this.activeButtonIndex?null:e[this.activeButtonIndex].title}},{key:"isEmpty",get:function(){return 0===this.displayedToolsCount}}],[{key:"CSS",get:function(){return{toolbox:"ce-toolbox",toolboxButton:"ce-toolbox__button",toolboxButtonActive:"ce-toolbox__button--active",toolboxOpened:"ce-toolbox--opened"}}}]),o}(s);m.displayName="Toolbox",o.default=m,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/toolbar.js":
/*!*******************************************!*\
  !*** ./src/components/modules/toolbar.js ***!
  \*******************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=c(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=c(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),i=c(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),u=c(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),d=c(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function o(e){var t=e.config;(0,l.default)(this,o);var s=(0,u.default)(this,(o.__proto__||(0,r.default)(o)).call(this,{config:t}));return s.nodes={wrapper:null,content:null,actions:null,plusButton:null,blockActionsButtons:null,settingsToggler:null},s}return(0,d.default)(o,e),(0,i.default)(o,[{key:"make",value:function(){var e=this;this.nodes.wrapper=n.make("div",o.CSS.toolbar),["content","actions"].forEach(function(t){e.nodes[t]=n.make("div",o.CSS[t]),n.append(e.nodes.wrapper,e.nodes[t])}),this.nodes.plusButton=n.make("div",o.CSS.plusButton),n.append(this.nodes.plusButton,n.svg("plus",14,14)),n.append(this.nodes.content,this.nodes.plusButton),this.nodes.plusButton.addEventListener("click",function(o){return e.plusButtonClicked(o)},!1),this.Editor.Toolbox.make(),this.nodes.blockActionsButtons=n.make("div",o.CSS.blockActionsButtons),this.nodes.settingsToggler=n.make("span",o.CSS.settingsToggler);var t=n.svg("dots",18,4);n.append(this.nodes.settingsToggler,t),n.append(this.nodes.blockActionsButtons,this.nodes.settingsToggler),n.append(this.nodes.actions,this.nodes.blockActionsButtons),this.Editor.BlockSettings.make(),n.append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),n.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.bindEvents()}},{key:"move",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.Editor.Toolbox.close(),this.Editor.BlockSettings.close());var e=this.Editor.BlockManager.currentBlock.holder;if(e){var o=Math.floor(e.offsetHeight/2);this.nodes.plusButton.style.transform="translate3d(0, calc("+o+"px - 50%), 0)",this.Editor.Toolbox.nodes.toolbox.style.transform="translate3d(0, calc("+o+"px - 50%), 0)",this.nodes.wrapper.style.transform="translate3D(0, "+Math.floor(e.offsetTop)+"px, 0)"}}},{key:"open",value:function(){var e=this;setTimeout(function(){e.move(),e.nodes.wrapper.classList.add(o.CSS.toolbarOpened)},50)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(o.CSS.toolbarOpened),this.Editor.Toolbox.close(),this.Editor.BlockSettings.close()}},{key:"plusButtonClicked",value:function(){this.Editor.Toolbox.toggle()}},{key:"bindEvents",value:function(){var e=this;this.Editor.Listeners.on(this.nodes.settingsToggler,"click",function(o){e.settingsTogglerClicked(o)})}},{key:"settingsTogglerClicked",value:function(){this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open()}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(o.CSS.toolbarOpened)}},{key:"plusButton",get:function(){var e=this;return{hide:function(){return e.nodes.plusButton.classList.add(o.CSS.plusButtonHidden)},show:function(){e.Editor.Toolbox.isEmpty||e.nodes.plusButton.classList.remove(o.CSS.plusButtonHidden)}}}}],[{key:"CSS",get:function(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",toolbarOpened:"ce-toolbar--opened",plusButton:"ce-toolbar__plus",plusButtonHidden:"ce-toolbar__plus--hidden",blockActionsButtons:"ce-toolbar__actions-buttons",settingsToggler:"ce-toolbar__settings-btn"}}}]),o}(s);a.displayName="Toolbar",o.default=a,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"))},"./src/components/modules/tools.js":
/*!*****************************************!*\
  !*** ./src/components/modules/tools.js ***!
  \*****************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n){Object.defineProperty(o,"__esModule",{value:!0});var r=_(t(/*! babel-runtime/helpers/slicedToArray */"./node_modules/babel-runtime/helpers/slicedToArray.js")),l=_(t(/*! babel-runtime/core-js/object/entries */"./node_modules/babel-runtime/core-js/object/entries.js")),i=_(t(/*! babel-runtime/helpers/typeof */"./node_modules/babel-runtime/helpers/typeof.js")),u=_(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),d=_(t(/*! babel-runtime/core-js/object/keys */"./node_modules/babel-runtime/core-js/object/keys.js")),c=_(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),a=_(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),m=_(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),f=_(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),j=_(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js"));function _(e){return e&&e.__esModule?e:{default:e}}var p=t(/*! ../tools/paragraph/dist/bundle */"./src/components/tools/paragraph/dist/bundle.js"),h=function(e){function o(e){var t=e.config;(0,a.default)(this,o);var s=(0,f.default)(this,(o.__proto__||(0,c.default)(o)).call(this,{config:t}));return s.toolsClasses={},s.toolsSettings={},s.toolsAvailable={},s.toolsUnavailable={},s._inlineTools=null,s}return(0,j.default)(o,e),(0,m.default)(o,[{key:"prepare",value:function(){var e=this;if(this.config.tools.paragraph={class:p,inlineToolbar:!0},!this.config.hasOwnProperty("tools")||0===(0,d.default)(this.config.tools).length)return u.default.reject("Can't start without tools");for(var o in this.config.tools)"object"===(0,i.default)(this.config.tools[o])?(this.toolsClasses[o]=this.config.tools[o].class,this.toolsSettings[o]=this.config.tools[o],delete this.toolsSettings[o].class):(this.toolsClasses[o]=this.config.tools[o],this.toolsSettings[o]={});var t=this.getListOfPrepareFunctions();return 0===t.length?u.default.resolve():n.sequence(t,function(o){e.success(o)},function(o){e.fallback(o)})}},{key:"getListOfPrepareFunctions",value:function(){var e=[];for(var o in this.toolsClasses){var t=this.toolsClasses[o];"function"==typeof t.prepare?e.push({function:t.prepare,data:{toolName:o,config:this.toolsSettings[o][this.apiSettings.CONFIG]}}):this.toolsAvailable[o]=t}return e}},{key:"success",value:function(e){this.toolsAvailable[e.toolName]=this.toolsClasses[e.toolName]}},{key:"fallback",value:function(e){this.toolsUnavailable[e.toolName]=this.toolsClasses[e.toolName]}},{key:"construct",value:function(e,o){var t=this.toolsClasses[e],s=this.toolsSettings[e][this.apiSettings.CONFIG];return new t({api:this.Editor.API.methods,config:s||{},data:o})}},{key:"constructInline",value:function(e){return new e({api:this.Editor.API.methods})}},{key:"isInitial",value:function(e){return e instanceof this.available[this.config.initialBlock]}},{key:"getToolSettings",value:function(e){return this.toolsSettings[e]}},{key:"available",get:function(){return this.toolsAvailable}},{key:"unavailable",get:function(){return this.toolsUnavailable}},{key:"inline",get:function(){var e=this;if(this._inlineTools)return this._inlineTools;var o={};return(0,l.default)(this.available).filter(function(o){var t=(0,r.default)(o,2),s=(t[0],t[1]);if(!s[e.apiSettings.IS_INLINE])return!1;var l=["render","surround","checkState"].filter(function(o){return!e.constructInline(s)[o]});return!l.length||(n.log("Incorrect Inline Tool: "+s.name+". Some of required methods is not implemented %o","warn",l),!1)}).forEach(function(e){var t=(0,r.default)(e,2),s=t[0],n=t[1];return o[s]=n}),this._inlineTools=o,this._inlineTools}},{key:"blockTools",get:function(){var e=this,o={};return(0,l.default)(this.available).filter(function(o){var t=(0,r.default)(o,2);t[0];return!t[1][e.apiSettings.IS_INLINE]}).forEach(function(e){var t=(0,r.default)(e,2),s=t[0],n=t[1];return o[s]=n}),o}},{key:"apiSettings",get:function(){return{CONFIG:"config",IS_CONTENTLESS:"contentless",IS_DISPLAYED_IN_TOOLBOX:"displayInToolbox",IS_ENABLED_INLINE_TOOLBAR:"inlineToolbar",IS_ENABLED_LINE_BREAKS:"enableLineBreaks",IS_INLINE:"isInline",IS_IRREPLACEBLE_TOOL:"irreplaceable",IS_PASTE_DISALLOWED:"disallowPaste",SHORTCUT:"shortcut",TOOLBAR_ICON:"toolboxIcon"}}}]),o}(s);h.displayName="Tools",o.default=h,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/modules/ui.js":
/*!**************************************!*\
  !*** ./src/components/modules/ui.js ***!
  \**************************************/
/*! no static exports found */function(e,o,t){"use strict";(function(s,n,r){Object.defineProperty(o,"__esModule",{value:!0});var l=_(t(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),i=_(t(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),u=_(t(/*! babel-runtime/core-js/object/get-prototype-of */"./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),d=_(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),c=_(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),a=_(t(/*! babel-runtime/helpers/possibleConstructorReturn */"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),m=_(t(/*! babel-runtime/helpers/inherits */"./node_modules/babel-runtime/helpers/inherits.js")),f=_(t(/*! ../../../build/sprite.svg */"./build/sprite.svg")),j=_(t(/*! ../selection */"./src/components/selection.ts"));function _(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function o(e){var t=e.config;(0,d.default)(this,o);var s=(0,a.default)(this,(o.__proto__||(0,u.default)(o)).call(this,{config:t}));return s.nodes={holder:null,wrapper:null,redactor:null},s}return(0,m.default)(o,e),(0,c.default)(o,[{key:"prepare",value:function(){var e=(0,i.default)(l.default.mark(function e(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.make();case 2:return e.next=4,this.appendSVGSprite();case 4:return e.next=6,this.Editor.Toolbar.make();case 6:return e.next=8,this.Editor.InlineToolbar.make();case 8:return e.next=10,this.loadStyles();case 10:return e.next=12,this.bindEvents();case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"make",value:function(){var e=(0,i.default)(l.default.mark(function e(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.nodes.holder=document.getElementById(this.config.holderId),this.nodes.holder){e.next=3;break}throw Error("Holder wasn't found by ID: #"+this.config.holderId);case 3:this.nodes.wrapper=n.make("div",this.CSS.editorWrapper),this.nodes.redactor=n.make("div",this.CSS.editorZone),this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadStyles",value:function(){var e=t(/*! ../../styles/main.css */"./src/styles/main.css"),o=n.make("style",null,{textContent:e.toString()});n.prepend(document.head,o)}},{key:"bindEvents",value:function(){var e=this;this.Editor.Listeners.on(this.nodes.redactor,"click",function(o){return e.redactorClicked(o)},!1),this.Editor.Listeners.on(document,"keydown",function(o){return e.documentKeydown(o)},!0),this.Editor.Listeners.on(document,"click",function(o){return e.documentClicked(o)},!1)}},{key:"documentKeydown",value:function(e){switch(e.keyCode){case r.keyCodes.ENTER:this.enterPressed(e);break;default:this.defaultBehaviour(e)}}},{key:"defaultBehaviour",value:function(e){e.target.closest("."+this.CSS.editorWrapper)||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close())}},{key:"enterPressed",value:function(e){if(this.Editor.BlockManager.currentBlockIndex>=0&&"BODY"===e.target.tagName){var o=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(o),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.move(),this.Editor.Toolbar.plusButton.show()}}},{key:"documentClicked",value:function(e){var o=e.target.closest("."+this.Editor.InlineToolbar.CSS.inlineToolbar);e.target.closest("."+this.CSS.editorWrapper)||j.default.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()),o||this.Editor.InlineToolbar.handleShowingEvent(e),j.default.isAtEditor&&this.Editor.BlockManager.setCurrentBlockByChildNode(j.default.anchorNode)}},{key:"redactorClicked",value:function(e){var o=e.target;try{this.Editor.BlockManager.setCurrentBlockByChildNode(o),this.Editor.BlockManager.highlightCurrentNode()}catch(e){this.Editor.Caret.setToTheLastBlock()}e.stopImmediatePropagation(),e.stopPropagation(),this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.hide(),this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.insert();var t=this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool),s=this.Editor.BlockManager.currentBlock.isEmpty;t&&s&&this.Editor.Toolbar.plusButton.show()}},{key:"appendSVGSprite",value:function(){var e=n.make("div");e.hidden=!0,e.style.display="none",e.innerHTML=f.default,n.append(this.nodes.wrapper,e)}},{key:"destroy",value:function(){this.nodes.holder.innerHTML=""}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}}]),o}(s);p.displayName="UI",o.default=p,e.exports=o.default}).call(this,t(/*! ./../__module.ts */"./src/components/__module.ts"),t(/*! dom */"./src/components/dom.ts"),t(/*! utils */"./src/components/utils.ts"))},"./src/components/polyfills.ts":
/*!*************************************!*\
  !*** ./src/components/polyfills.ts ***!
  \*************************************/
/*! no static exports found */function(e,o,t){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var o=(this.document||this.ownerDocument).querySelectorAll(e),t=o.length;--t>=0&&o.item(t)!==this;);return t>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){var o=this;if(!document.documentElement.contains(o))return null;do{if(o.matches(e))return o;o=o.parentElement||o.parentNode}while(null!==o);return null}),Element.prototype.prepend||(Element.prototype.prepend=function(e){var o=document.createDocumentFragment();Array.isArray(e)||(e=[e]),e.forEach(function(e){var t=e instanceof Node;o.appendChild(t?e:document.createTextNode(String(e)))}),this.insertBefore(o,this.firstChild)})},"./src/components/selection.ts":
/*!*************************************!*\
  !*** ./src/components/selection.ts ***!
  \*************************************/
/*! no static exports found */function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=l(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),n=l(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),r=l(t(/*! ./utils */"./src/components/utils.ts"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(){(0,s.default)(this,e),this.instance=null,this.selection=null,this.savedSelectionRange=null}return(0,n.default)(e,[{key:"save",value:function(){this.savedSelectionRange=e.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"findParentTag",value:function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,s=window.getSelection(),n=null;return s&&s.anchorNode&&s.focusNode?([s.anchorNode,s.focusNode].forEach(function(s){for(var r=t;r>0&&s.parentNode&&(s.tagName!==e||(n=s,o&&s.classList&&!s.classList.contains(o)&&(n=null),!n));)s=s.parentNode,r--}),n):null}},{key:"expandToTag",value:function(e){var o=window.getSelection();o.removeAllRanges();var t=document.createRange();t.selectNodeContents(e),o.addRange(t)}}],[{key:"get",value:function(){return window.getSelection()}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",get:function(){var e=window.getSelection();return e?e.anchorNode:null}},{key:"anchorOffset",get:function(){var e=window.getSelection();return e?e.anchorOffset:null}},{key:"isCollapsed",get:function(){var e=window.getSelection();return e?e.isCollapsed:null}},{key:"isAtEditor",get:function(){var o=e.get(),t=o.anchorNode||o.focusNode;t&&t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);var s=null;return t&&(s=t.closest("."+e.CSS.editorZone)),s&&s.nodeType===Node.ELEMENT_NODE}},{key:"range",get:function(){var e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}},{key:"rect",get:function(){var e=document.selection,o=void 0,t={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return o=(e=e).createRange(),t.x=o.boundingLeft,t.y=o.boundingTop,t.width=o.boundingWidth,t.height=o.boundingHeight,t;if(!window.getSelection)return r.default.log("Method window.getSelection is not supported","warn"),t;if(!(e=window.getSelection()).rangeCount)return r.default.log("Method SelectionUtils.rangeCount() is not supported","warn"),t;if((o=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(t=o.getBoundingClientRect()),0===t.x&&0===t.y){var s=document.createElement("span");if(s.getBoundingClientRect){s.appendChild(document.createTextNode("​")),o.insertNode(s),t=s.getBoundingClientRect();var n=s.parentNode;n.removeChild(s),n.normalize()}}return t}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),e}();i.displayName="SelectionUtils",o.default=i,e.exports=o.default},"./src/components/tools/paragraph/dist/bundle.js":
/*!*******************************************************!*\
  !*** ./src/components/tools/paragraph/dist/bundle.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,t){window,e.exports=function(e){var o={};function t(s){if(o[s])return o[s].exports;var n=o[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(s,n,function(o){return e[o]}.bind(null,n));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="/",t(t.s=0)}([function(e,o,t){"use strict";var s=function(){function e(e,o){for(var t=0;t<o.length;t++){var s=o[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(o,t,s){return t&&e(o.prototype,t),s&&e(o,s),o}}();t(1).toString();
/**
 * Base Paragraph Block for the CodeX Editor.
 * Represents simple paragraph
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var n=function(){function e(o){var t=o.data,s=(o.config,o.api);!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=s,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this._data={},this._element=this.drawView(),this.data=t}return s(e,null,[{key:"displayInToolbox",get:function(){return!1}}]),s(e,[{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e.contentEditable=!0,e}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(e){var o={text:this.data.text+e.text};this.data=o}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML}}},{key:"data",get:function(){var e=this._element.innerHTML;return this._data.text=e,this._data},set:function(e){this._data=e||{},this._element.innerHTML=this._data.text||""}}],[{key:"onPaste",get:function(){return{tags:["P"],handler:function(e){return{text:e.innerHTML}}}}}]),e}();e.exports=n},function(e,o,t){var s=t(2);"string"==typeof s&&(s=[[e.i,s,""]]),t(4)(s,{hmr:!0,transform:void 0,insertInto:void 0}),s.locals&&(e.exports=s.locals)},function(e,o,t){(e.exports=t(3)(!1)).push([e.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""])},function(e,o){e.exports=function(e){var o=[];return o.toString=function(){return this.map(function(o){var t=function(e,o){var t=e[1]||"",s=e[3];if(!s)return t;if(o&&"function"==typeof btoa){var n=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(s),r=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[t].concat(r).concat([n]).join("\n")}return[t].join("\n")}(o,e);return o[2]?"@media "+o[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(s[r]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&s[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="("+l[2]+") and ("+t+")"),o.push(l))}},o}},function(e,o,t){var s={},n=function(e){var o;return function(){return void 0===o&&(o=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),o}}(),r=function(e){var o={};return function(e){if("function"==typeof e)return e();if(void 0===o[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]}}(),l=null,i=0,u=[],d=t(5);function c(e,o){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](n.parts[l]);for(;l<n.parts.length;l++)r.parts.push(p(n.parts[l],o))}else{var i=[];for(l=0;l<n.parts.length;l++)i.push(p(n.parts[l],o));s[n.id]={id:n.id,refs:1,parts:i}}}}function a(e,o){for(var t=[],s={},n=0;n<e.length;n++){var r=e[n],l=o.base?r[0]+o.base:r[0],i={css:r[1],media:r[2],sourceMap:r[3]};s[l]?s[l].parts.push(i):t.push(s[l]={id:l,parts:[i]})}return t}function m(e,o){var t=r(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=u[u.length-1];if("top"===e.insertAt)s?s.nextSibling?t.insertBefore(o,s.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),u.push(o);else if("bottom"===e.insertAt)t.appendChild(o);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=r(e.insertInto+" "+e.insertAt.before);t.insertBefore(o,n)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var o=u.indexOf(e);o>=0&&u.splice(o,1)}function j(e){var o=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),_(o,e.attrs),m(e,o),o}function _(e,o){Object.keys(o).forEach(function(t){e.setAttribute(t,o[t])})}function p(e,o){var t,s,n,r;if(o.transform&&e.css){if(!(r=o.transform(e.css)))return function(){};e.css=r}if(o.singleton){var u=i++;t=l||(l=j(o)),s=b.bind(null,t,u,!1),n=b.bind(null,t,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var o=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(o,e.attrs),m(e,o),o}(o),s=function(e,o,t){var s=t.css,n=t.sourceMap,r=void 0===o.convertToAbsoluteUrls&&n;(o.convertToAbsoluteUrls||r)&&(s=d(s)),n&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var l=new Blob([s],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(l),i&&URL.revokeObjectURL(i)}.bind(null,t,o),n=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=j(o),s=function(e,o){var t=o.css,s=o.media;if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),n=function(){f(t)});return s(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;s(e=o)}else n()}}e.exports=function(e,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(o=o||{}).attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=n()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var t=a(e,o);return c(t,o),function(e){for(var n=[],r=0;r<t.length;r++){var l=t[r];(i=s[l.id]).refs--,n.push(i)}for(e&&c(a(e,o),o),r=0;r<n.length;r++){var i;if(0===(i=n[r]).refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete s[i.id]}}}};var h=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}();function b(e,o,t,s){var n=t?"":s.css;if(e.styleSheet)e.styleSheet.cssText=h(o,n);else{var r=document.createTextNode(n),l=e.childNodes;l[o]&&e.removeChild(l[o]),l.length?e.insertBefore(r,l[o]):e.appendChild(r)}}},function(e,o){e.exports=function(e){var o="undefined"!=typeof window&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=o.protocol+"//"+o.host,s=t+o.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,o){var n,r=o.trim().replace(/^"(.*)"$/,function(e,o){return o}).replace(/^'(.*)'$/,function(e,o){return o});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:s+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}}])},"./src/components/utils.ts":
/*!*********************************!*\
  !*** ./src/components/utils.ts ***!
  \*********************************/
/*! no static exports found */function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=d(t(/*! babel-runtime/core-js/object/keys */"./node_modules/babel-runtime/core-js/object/keys.js")),n=d(t(/*! babel-runtime/core-js/promise */"./node_modules/babel-runtime/core-js/promise.js")),r=d(t(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),l=d(t(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),i=d(t(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),u=d(t(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){(0,i.default)(this,e)}return(0,u.default)(e,null,[{key:"log",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log",t=arguments[2];t?e="[codex-editor]: "+e:["time","timeEnd"].includes(o)?e="[codex-editor]: "+e:(t=e||"undefined",e="[codex-editor]: %o");try{"console"in window&&window.console[o]&&(t?window.console[o](e,t):window.console[o](e))}catch(e){}}},{key:"sequence",value:function(){var e=(0,l.default)(r.default.mark(function e(o){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},i=function(){var e=(0,l.default)(r.default.mark(function e(o,t,s){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.function(o.data);case 3:return e.next=5,t(void 0!==o.data?o.data:{});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(void 0!==o.data?o.data:{});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(o,t,s){return e.apply(this,arguments)}}(),u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.reduce(function(){var e=(0,l.default)(r.default.mark(function e(o,n){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o;case 2:return e.abrupt("return",i(n,s,u));case 3:case"end":return e.stop()}},e,t)}));return function(o,t){return e.apply(this,arguments)}}(),n.default.resolve());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(o){return e.apply(this,arguments)}}()},{key:"array",value:function(e){return Array.prototype.slice.call(e)}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isClass",value:function(e){return"function"==typeof e&&/^\s*class\s+/.test(e.toString())}},{key:"isEmpty",value:function(e){return 0===(0,s.default)(e).length&&e.constructor===Object}},{key:"isPromise",value:function(e){return n.default.resolve(e)===e}},{key:"isContentEditable",value:function(e){return"true"===e.contentEditable}},{key:"delay",value:function(e,o){return function(){var t=this,s=arguments;window.setTimeout(function(){return e.apply(t,s)},o)}}},{key:"getFileExtension",value:function(e){return e.name.split(".").pop()}},{key:"isValidMimeType",value:function(e){return/^[-\w]+\/([-+\w]+|\*)$/.test(e)}},{key:"debounce",value:function(e,o,t){var s=this,n=arguments,r=void 0;return function(){var l=s,i=n,u=t&&!r;window.clearTimeout(r),r=window.setTimeout(function(){r=null,t||e.apply(l,i)},o),u&&e.apply(l,i)}}},{key:"keyCodes",get:function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91}}}]),e}();c.displayName="Util",o.default=c,e.exports=o.default},"./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */function(e,o,t){(e.exports=t(/*! ../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,":root {\n  /**\n   * Selection color\n   */\n  --selectionColor: rgba(61,166,239,0.63);\n\n  /**\n   * Toolbar buttons\n   */\n  --bg-light: #eff2f5;\n\n  /**\n   * All gray texts: placeholders, settings\n   */\n  --grayText: #707684;\n\n  /**\n   * Blue icons\n   */\n  --color-active-icon: #388AE5;\n\n  /**\n   * Gray border, loaders\n   */\n  --color-gray-border: #E8E8EB;\n\n  /**\n   * Block content width\n   */\n  --content-width: 650px;\n\n  /**\n   * Toolbar buttons height and width\n   */\n  --toolbar-buttons-size: 34px;\n\n  /**\n   * Toolbar Plus Button and Toolbox buttons height and width\n   */\n  --toolbox-buttons-size: 24px;\n\n  /**\n   * Confirm deletion bg\n   */\n  --color-confirm: #E24A4A;\n}\n/**\n* Editor wrapper\n*/\n.codex-editor {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.codex-editor .hide {\n    display: none;\n  }\n.codex-editor__redactor {\n    padding-bottom: 300px;\n  }\n.codex-editor svg {\n    fill: currentColor;\n    vertical-align: middle;\n    max-height: 100%;\n  }\n/**\n * Set color for native selection\n */\n::-moz-selection{\n  background-color: rgba(61,166,239,0.63);\n  background-color: var(--selectionColor);\n}\n::selection{\n  background-color: rgba(61,166,239,0.63);\n  background-color: var(--selectionColor);\n}\n/**\n * Add placeholder to content editable elements with data attribute\n * data-placeholder=\"Hello world!\"\n */\n[contentEditable=true][data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  color: var(--grayText);\n  font-weight: normal;\n}\n[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0.3;\n}\n.ce-toolbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  /*opacity: 0;*/\n  /*visibility: hidden;*/\n  -webkit-transition: opacity 100ms ease;\n  transition: opacity 100ms ease;\n  will-change: opacity, transform;\n  display: none;\n}\n.ce-toolbar--opened {\n    display: block;\n    /*opacity: 1;*/\n    /*visibility: visible;*/\n  }\n.ce-toolbar__content {\n    max-width: 650px;\n    max-width: var(--content-width);\n    margin: 0 auto;\n    position: relative;\n  }\n.ce-toolbar__plus {\n  color: #707684;\n  color: var(--grayText);\n  cursor: pointer;\n  width: 24px;\n  width: var(--toolbox-buttons-size);\n  height: 24px;\n  height: var(--toolbox-buttons-size);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center\n  }\n.ce-toolbar__plus:not(:last-of-type){\n  margin-right: 10px;\n    }\n.ce-toolbar__plus {\n\n    position: absolute;\n    left: calc(calc(24px + 10px) * -1);\n    left: calc(calc(var(--toolbox-buttons-size) + 10px) * -1);\n  }\n.ce-toolbar__plus:hover,\n    .ce-toolbar__plus--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-toolbar__plus--active{\n  -webkit-animation: bounceIn 0.75s 1;\n          animation: bounceIn 0.75s 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n    }\n.ce-toolbar__plus--hidden {\n      display: none;\n    }\n.ce-toolbar__plus,\n  .ce-toolbar .ce-toolbox {\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n/**\n   * Block actions Zone\n   * -------------------------\n   */\n.ce-toolbar__actions {\n    position: absolute;\n    right: 0;\n    top: 10px;\n    padding-right: 16px;\n  }\n.ce-toolbar__actions-buttons {\n      text-align: right;\n    }\n.ce-toolbar__settings-btn {\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    color: #707684;\n    color: var(--grayText);\n    cursor: pointer;\n  }\n.ce-toolbox {\n    position: absolute;\n    visibility: hidden;\n    -webkit-transition: opacity 100ms ease;\n    transition: opacity 100ms ease;\n    will-change: opacity;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.ce-toolbox--opened {\n        opacity: 1;\n        visibility: visible;\n    }\n.ce-toolbox__button {\n  color: #707684;\n  color: var(--grayText);\n  cursor: pointer;\n  width: 24px;\n  width: var(--toolbox-buttons-size);\n  height: 24px;\n  height: var(--toolbox-buttons-size);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n    }\n.ce-toolbox__button:not(:last-of-type){\n  margin-right: 10px;\n    }\n.ce-toolbox__button:hover,\n    .ce-toolbox__button--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-toolbox__button--active{\n  -webkit-animation: bounceIn 0.75s 1;\n          animation: bounceIn 0.75s 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n    }\n.ce-inline-toolbar {\n  position: absolute;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n          box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n  border-radius: 4px;\n  z-index: 2\n}\n.ce-inline-toolbar::before {\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  margin-left: -7px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  background-color: #fff;\n  z-index: -1;\n    }\n.ce-inline-toolbar {\n  padding: 6px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: none;\n  -webkit-box-shadow: 0 6px 12px -6px rgba(131, 147, 173, 0.46),\n              5px -12px 34px -13px rgba(97, 105, 134, 0.6),\n              0 26px 52px 3px rgba(147, 165, 186, 0.24);\n          box-shadow: 0 6px 12px -6px rgba(131, 147, 173, 0.46),\n              5px -12px 34px -13px rgba(97, 105, 134, 0.6),\n              0 26px 52px 3px rgba(147, 165, 186, 0.24);\n}\n.ce-inline-toolbar--showed {\n    display: block;\n  }\n.ce-inline-toolbar [hidden] {\n    display: none !important;\n  }\n.ce-inline-tool {\n  display: inline-block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  vertical-align: bottom;\n  color: #707684;\n  color: var(--grayText)\n}\n.ce-inline-tool:not(:last-of-type){\n  margin-right: 5px;\n    }\n.ce-inline-tool:hover {\n  background-color: #eff2f5;\n  background-color: var(--bg-light);\n    }\n.ce-inline-tool {\n  line-height: normal;\n}\n.ce-inline-tool--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-inline-tool--last {\n    margin-right: 0 !important;\n  }\n.ce-inline-tool--link .icon {\n      margin-top: -2px;\n    }\n.ce-inline-tool--link .icon--unlink {\n      display: none;\n    }\n.ce-inline-tool--unlink .icon--link {\n      display: none;\n    }\n.ce-inline-tool--unlink .icon--unlink {\n      display: inline-block;\n    }\n.ce-inline-tool-input {\n    background-color: #eff2f5;\n    background-color: var(--bg-light);\n    outline: none;\n    border: 0;\n    border-radius: 3px;\n    margin: 6px 0 0;\n    font-size: 13px;\n    padding: 8px;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: none\n  }\n.ce-inline-tool-input::-webkit-input-placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input:-ms-input-placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input::-ms-input-placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input::placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input--showed {\n      display: block;\n    }\n.ce-settings {\n  position: absolute;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n          box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n  border-radius: 4px;\n  z-index: 2\n}\n.ce-settings::before {\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  margin-left: -7px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  background-color: #fff;\n  z-index: -1;\n    }\n.ce-settings {\n  right: 5px;\n  top: 35px;\n  min-width: 124px\n}\n.ce-settings::before{\n    left: auto;\n    right: 12px;\n  }\n.ce-settings {\n\n  display: none;\n}\n.ce-settings--opened {\n    display: block;\n  }\n.ce-settings__plugin-zone:not(:empty){\n      padding: 6px 6px 0;\n    }\n.ce-settings__default-zone:not(:empty){\n      padding: 6px;\n    }\n.ce-settings__button {\n  display: inline-block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  vertical-align: bottom;\n  color: #707684;\n  color: var(--grayText)\n  }\n.ce-settings__button:not(:last-of-type){\n  margin-right: 5px;\n    }\n.ce-settings__button:hover {\n  background-color: #eff2f5;\n  background-color: var(--bg-light);\n    }\n.ce-settings__button {\n    line-height: 32px;\n  }\n.ce-settings__button--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-settings__button--disabled {\n        cursor: not-allowed !important;\n        opacity: .3;\n    }\n.ce-settings__button--selected {\n      color: #388AE5;\n      color: var(--color-active-icon);\n    }\n.ce-settings__button--delete {\n      -webkit-transition: background-color 300ms ease;\n      transition: background-color 300ms ease;\n      will-change: background-color;\n    }\n.ce-settings__button--delete .icon {\n        -webkit-transition: -webkit-transform 200ms ease-out;\n        transition: -webkit-transform 200ms ease-out;\n        transition: transform 200ms ease-out;\n        transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n        will-change: transform;\n      }\n.ce-settings__button--confirm {\n      background-color: #E24A4A;\n      background-color: var(--color-confirm);\n      color: #fff\n    }\n.ce-settings__button--confirm:hover {\n        background-color: rgb(213, 74, 74) !important;\n        background-color: rgb(213, 74, 74) !important;\n      }\n.ce-settings__button--confirm .icon {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n      }\n.ce-block:first-of-type {\n    margin-top: 0;\n  }\n.ce-block--selected {\n    background-image: linear-gradient(17deg, rgba(243, 248, 255, 0.03) 63.45%, rgba(207, 214, 229, 0.27) 98%);\n    border-radius: 3px;\n  }\n.ce-block--stretched .ce-block__content {\n    max-width: none;\n  }\n.ce-block__content {\n    position: relative;\n    max-width: 650px;\n    max-width: var(--content-width);\n    margin: 0 auto;\n  }\n.ce-block--drop-target .ce-block__content:before {\n      content: '';\n      position: absolute;\n      top: 100%;\n      left: -20px;\n      margin-top: -1px;\n      height: 8px;\n      width: 8px;\n      border: solid #388AE5;\n      border: solid var(--color-active-icon);\n      border-width: 1px 1px 0 0;\n      -webkit-transform-origin: right;\n              transform-origin: right;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n    }\n.ce-block--drop-target .ce-block__content:after {\n      content: '';\n      position: absolute;\n      top: 100%;\n      height: 1px;\n      width: 100%;\n      color: #388AE5;\n      color: var(--color-active-icon);\n      background: repeating-linear-gradient(\n        90deg,\n        #388AE5,\n        #388AE5 1px,\n        #fff 1px,\n        #fff 6px\n      );\n      background: repeating-linear-gradient(\n        90deg,\n        var(--color-active-icon),\n        var(--color-active-icon) 1px,\n        #fff 1px,\n        #fff 6px\n      );\n    }\n.wobble {\n  -webkit-animation-name: wobble;\n          animation-name: wobble;\n  -webkit-animation-duration: 400ms;\n          animation-duration: 400ms;\n}\n/**\n * @author Nick Pettit - https://github.com/nickpettit/glide\n */\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n            transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n            transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n            transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n            transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    -webkit-transform: scale3d(0.86, 0.86, 0.86);\n            transform: scale3d(0.86, 0.86, 0.86);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    -webkit-transform: scale3d(0.86, 0.86, 0.86);\n            transform: scale3d(0.86, 0.86, 0.86);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n/**\n * Block Tool wrapper\n */\n.cdx-block {\n  padding: 0.7em 0;\n}\n/**\n * Input\n */\n.cdx-input {\n  border: 1px solid #E8E8EB;\n  border: 1px solid var(--color-gray-border);\n  -webkit-box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, 0.06);\n          box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, 0.06);\n  border-radius: 3px;\n  padding: 10px 12px;\n  outline: none;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n/**\n * Settings\n */\n.cdx-settings-button {\n  display: inline-block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  vertical-align: bottom;\n  color: #707684;\n  color: var(--grayText)\n}\n.cdx-settings-button:not(:last-of-type){\n  margin-right: 5px;\n    }\n.cdx-settings-button:hover {\n  background-color: #eff2f5;\n  background-color: var(--bg-light);\n    }\n.cdx-settings-button--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.cdx-settings-button--active {\n    color: #388AE5;\n    color: var(--color-active-icon);\n  }\n/**\n * Loader\n */\n.cdx-loader {\n  position: relative;\n  border: 1px solid #E8E8EB;\n  border: 1px solid var(--color-gray-border)\n}\n.cdx-loader::before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 18px;\n    height: 18px;\n    margin: -11px 0 0 -11px;\n    border: 2px solid #E8E8EB;\n    border: 2px solid var(--color-gray-border);\n    border-left-color: #388AE5;\n    border-left-color: var(--color-active-icon);\n    border-radius: 50%;\n    -webkit-animation: cdxRotation 1.2s infinite linear;\n            animation: cdxRotation 1.2s infinite linear;\n  }\n@-webkit-keyframes cdxRotation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes cdxRotation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n",""])},0:
/*!*************************!*\
  !*** multi ./src/codex ***!
  \*************************/
/*! no static exports found */function(e,o,t){e.exports=t(/*! ./src/codex */"./src/codex.js")}})});
//# sourceMappingURL=codex-editor.js.map

/***/ }),

/***/ "./node_modules/module-dispatcher/lib/moduleDispatcher.js":
/*!****************************************************************!*\
  !*** ./node_modules/module-dispatcher/lib/moduleDispatcher.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * CodeX Module Dispatcher — Initialize frontend Modules from the DOM without inline scripts
 * 
 * @copyright CodeX Team <team@ifmo.su>
 * @license MIT https://github.com/codex-team/dispatcher/LICENSE
 * @author @polinashneider https://github.com/polinashneider
 * @version 0.0.1
 */
!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){var n=t.name,o=t.element,s=t.settings,i=t.moduleClass;r(this,e),this.name=n,this.element=o,this.settings=s,this.moduleClass=i}return s(e,[{key:"init",value:function(){try{console.assert(this.moduleClass.init instanceof Function,"Module «"+this.name+"» should implement init method"),this.moduleClass.init instanceof Function&&(this.moduleClass.init(this.settings,this.element),console.log("Module «"+this.name+"» initialized"))}catch(e){console.warn("Module «"+this.name+"» was not initialized because of ",e)}}},{key:"destroy",value:function(){this.moduleClass.destroy instanceof Function&&(this.moduleClass.destroy(),console.log("Module «"+this.name+"» destroyed."))}}]),e}(),u=function(){function e(t){r(this,e),this.Library=t.Library||window,this.modules=this.findModules(document),this.initModules()}return s(e,[{key:"findModules",value:function(e){for(var t=[],n=e.querySelectorAll("[data-module]"),r=n.length-1;r>=0;r--)t.push.apply(t,o(this.extractModulesData(n[r])));return t}},{key:"extractModulesData",value:function(e){var t=this,n=[],o=e.dataset.module;return o=o.replace(/\s+/," "),o.split(" ").forEach(function(o,r){var s=new i({name:o,element:e,settings:t.getModuleSettings(e,r,o),moduleClass:t.Library[o]});n.push(s)}),n}},{key:"getModuleSettings",value:function(e,t,n){var o=e.querySelector("module-settings"),r=void 0;if(!o)return null;try{r=o.textContent.trim(),r=JSON.parse(r)}catch(e){return console.warn("Can not parse Module «"+n+"» settings bacause of: "+e),console.groupCollapsed(n+" settings"),console.log(r),console.groupEnd(),null}return Array.isArray(r)?r[t]?r[t]:null:0===t?r:(console.warn("Wrong settings format. For several Modules use an array instead of object."),null)}},{key:"initModules",value:function(){console.groupCollapsed("ModuleDispatcher"),this.modules.forEach(function(e){e.init()}),console.groupEnd()}}]),e}();t.default=u}])});

/***/ }),

/***/ "./public/app/css/main.css":
/*!*********************************!*\
  !*** ./public/app/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./public/app/js/main.js":
/*!*******************************!*\
  !*** ./public/app/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleDispatcher = __webpack_require__(/*! module-dispatcher */ "./node_modules/module-dispatcher/lib/moduleDispatcher.js");

var _moduleDispatcher2 = _interopRequireDefault(_moduleDispatcher);

var _writing = __webpack_require__(/*! ./modules/writing */ "./public/app/js/modules/writing.js");

var _writing2 = _interopRequireDefault(_writing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Import Dispatcher for Frontend Modules initialization
 */
__webpack_require__(/*! ../css/main.css */ "./public/app/css/main.css");
/**
 * CodeX community id at vk.com.
 * used by vkWidget module
 */


var VK_COMMUNITY_ID = 103229636;

var codex = function (codex_) {
  'use strict';

  codex_.settings = {};
  /**
  * Preparation method
  */

  codex_.init = function (settings) {
    /** Save settings or use defaults */
    for (var set in settings) {
      this.settings[set] = settings[set] || this.settings[set] || null;
    }

    codex.docReady(function () {
      initModules();
    });
  };

  return codex_;
}({});
/**
 * Function responsible for modules initialization
 * Called no earlier than document is ready
 */


function initModules() {
  new _moduleDispatcher2.default({
    Library: codex
  });
  codex.scrollUp.init();
  /**
   * Find elements with "deeplinker" class and add click listener
   *
   * @param {string} selector
   */

  codex.deeplinker.init('.deeplinker');
  codex.codeStyling.init('.article-code__content');
  codex.vkWidget.init({
    id: 'vk_groups',
    display: {
      'mode': 3,
      'width': 'auto'
    },
    communityId: VK_COMMUNITY_ID
  });
  /**
   * Acitve play-video buttons
   */

  var playVideoButton = document.querySelector('[name="js-show-player"]');

  if (playVideoButton) {
    var Player = __webpack_require__(/*! ./modules/player */ "./public/app/js/modules/player.js").default;

    new Player({
      sourceURL: 'public/app/img/products/ar-tester.mp4',
      toggler: playVideoButton,
      wrapperSelector: '.product-card--ar-tester'
    });
  }
}
/**
* Document ready event listener
* @usage codex.docReady(function(){ # code ... } );
*/


codex.docReady = function (f) {
  return /in/.test(document.readyState) ? window.setTimeout(codex.docReady, 9, f) : f();
};
/**
* Pages
*/


codex.admin = __webpack_require__(/*! ./modules/admin */ "./public/app/js/modules/admin.js");
codex.join = __webpack_require__(/*! ./modules/join */ "./public/app/js/modules/join.js");
/**
 * Modules
 */

codex.core = __webpack_require__(/*! ./modules/core */ "./public/app/js/modules/core.js");
codex.dragndrop = __webpack_require__(/*! ./modules/dragndrop */ "./public/app/js/modules/dragndrop.js");
codex.scrollUp = __webpack_require__(/*! ./modules/scrollUp */ "./public/app/js/modules/scrollUp.js");
codex.sharer = __webpack_require__(/*! ./modules/sharer */ "./public/app/js/modules/sharer.js");
codex.developer = __webpack_require__(/*! ./modules/bestDevelopers */ "./public/app/js/modules/bestDevelopers.js"); // codex.simpleCode = require('./modules/simpleCodeStyling');

codex.showMoreNews = __webpack_require__(/*! ./modules/showMoreNews */ "./public/app/js/modules/showMoreNews.js");
codex.polyfills = __webpack_require__(/*! ./modules/polyfills */ "./public/app/js/modules/polyfills.js");
codex.ajax = __webpack_require__(/*! ./modules/ajax */ "./public/app/js/modules/ajax.js");
codex.profile = __webpack_require__(/*! ./modules/profile */ "./public/app/js/modules/profile.js");
codex.helpers = __webpack_require__(/*! ./modules/helpers */ "./public/app/js/modules/helpers.js");
codex.quiz = __webpack_require__(/*! ./modules/quiz */ "./public/app/js/modules/quiz.js");
codex.quizForm = __webpack_require__(/*! ./modules/quizForm */ "./public/app/js/modules/quizForm.js");
codex.transport = __webpack_require__(/*! ./modules/transport */ "./public/app/js/modules/transport.js");
codex.vkWidget = __webpack_require__(/*! ./modules/vkWidget */ "./public/app/js/modules/vkWidget.js");
codex.codeStyling = __webpack_require__(/*! ./modules/codeStyling */ "./public/app/js/modules/codeStyling.js");
codex.deeplinker = __webpack_require__(/*! @codexteam/deeplinker */ "./node_modules/@codexteam/deeplinker/dist/deeplinker.js");
codex.pluginsFilter = __webpack_require__(/*! ./modules/pluginsFilter */ "./public/app/js/modules/pluginsFilter.js");
codex.writing = new _writing2.default();
module.exports = codex;

/***/ }),

/***/ "./public/app/js/modules/admin.js":
/*!****************************************!*\
  !*** ./public/app/js/modules/admin.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Admin page methods
 */
module.exports = function (admin) {
  /**
   * Initializes dragndrop module
   * @uses  codex.dragndrop
   */
  function initDragNDrop() {
    codex.dragndrop({
      droppableClass: 'list-item',
      findDraggable: function findDraggable(e) {
        var target = e.target.closest('.draggable');
        if (target) return target.closest('.list-item');
        return null;
      },
      makeAvatar: function makeAvatar(elem) {
        var avatar = {};
        avatar.elem = elem.cloneNode(true);
        avatar.elem.classList.add('dnd-avatar');
        elem.parentNode.insertBefore(avatar.elem, elem.nextSibling);
        elem.classList.add('no-display');

        avatar.rollback = function () {
          avatar.elem.parentNode.removeChild(avatar.elem);
          elem.classList.remove('no-display');
        };

        return avatar;
      },
      targetChanged: function targetChanged(target, newTarget, avatar) {
        if (!newTarget) return;
        var targetPosition = newTarget.compareDocumentPosition(avatar.elem);

        if (targetPosition & 4) {
          newTarget.parentNode.insertBefore(avatar.elem, newTarget);
        } else if (targetPosition & 2) {
          newTarget.parentNode.insertBefore(avatar.elem, newTarget.nextSibling);
        }
      },
      move: function move() {},
      targetReached: function targetReached(target, avatar, elem) {
        target.parentNode.insertBefore(elem, target.nextSibling);
        avatar.elem.parentNode.removeChild(avatar.elem);
        elem.classList.remove('no-display');
        var itemId = elem.dataset.id,
            itemType = elem.dataset.type,
            itemBelowValue = null,
            nextSibling;

        if (nextSibling == elem.nextElementSibling) {
          itemBelowValue = nextSibling.dataset.type + ':' + nextSibling.dataset.id;
        }

        var ajaxData = {
          success: function success() {
            document.getElementById('saved').classList.remove('top-menu__saved_hidden');
            window.setTimeout(function () {
              document.getElementById('saved').classList.add('top-menu__saved_hidden');
            }, 1000);
          },
          type: 'POST',
          url: '/admin/feed',
          data: JSON.stringify({
            'item_id': itemId,
            'item_type': itemType,
            'item_below_value': itemBelowValue
          })
        };
        codex.core.ajax(ajaxData);
      }
    }); // body...
  }
  /**
   * Module initialization
   * @param  {Object}      params             - init params
   * @param  {String|null} params.listType    - feed list type ("cards"|"list")
   */


  admin.init = function (params) {
    codex.core.log('Initialized.', 'Module admin');

    if (params.listType == 'cards') {
      var items = document.querySelectorAll('.feed-item');

      for (var i = items.length - 1; i > -1; i--) {
        items[i].classList.add('draggable');
        items[i].classList.add('feed-item--dnd');
        items[i].classList.add('list-item');
      }
    }

    initDragNDrop();
  };

  return admin;
}({});

/***/ }),

/***/ "./public/app/js/modules/ajax.js":
/*!***************************************!*\
  !*** ./public/app/js/modules/ajax.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ajax = function () {
  var xhr_ = function xhr_(xhr) {
    var objectToQueryString = function objectToQueryString(a) {
      var prefix, s, add, name, r20, output;
      s = [];
      r20 = /%20/g;

      add = function add(key, value) {
        // If value is a function, invoke it and return its value
        if (typeof value == 'function') {
          value = value();
        } else {
          value = value === null ? '' : value;
        }

        s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
      };

      if (a instanceof Array) {
        for (name in a) {
          add(name, a[name]);
        }
      } else {
        for (prefix in a) {
          buildParams(prefix, a[prefix], add);
        }
      }

      output = s.join('&').replace(r20, '+');
      return output;
    };

    var buildParams = function buildParams(prefix, obj, add) {
      var name, i, l, rbracket;
      rbracket = /\[\]$/;

      if (obj instanceof Array) {
        for (i = 0, l = obj.length; i < l; i++) {
          if (rbracket.test(prefix)) {
            add(prefix, obj[i]);
          } else {
            buildParams(prefix + '[' + (_typeof(obj[i]) === 'object' ? i : '') + ']', obj[i], add);
          }
        }
      } else if (_typeof(obj) == 'object') {
        // Serialize object item.
        for (name in obj) {
          buildParams(prefix + '[' + name + ']', obj[name], add);
        }
      } else {
        // Serialize scalar item.
        add(prefix, obj);
      }
    };

    xhr.call = function (data) {
      if (!data || !data.url) {
        console.warn('url wasn\'t passed into ajax method');
        return;
      }

      var XMLHTTP = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
          successCallback;
      data.type = data.type || 'GET';
      data.url = data.url;
      data.async = data.async || false;
      data.data = data.data || '';
      data.formData = data.formData || false;
      data['content-type'] = data.contentType || 'text/html';
      successCallback = data.success || successCallback;

      if (data.type == 'GET' && data.data) {
        data.url = /\?/.test(data.url) ? data.url + '&' + data.data : data.url + '?' + data.data;
      }

      if (data.beforeSend && typeof data.beforeSend == 'function') {
        data.beforeSend.call();
      }

      XMLHTTP.open(data.type, data.url, data.async);
      XMLHTTP.setRequestHeader('Content-type', data['content-type']);
      XMLHTTP.setRequestHeader('Connection', 'close');
      XMLHTTP.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      XMLHTTP.onreadystatechange = function () {
        if (XMLHTTP.readyState == 4 && XMLHTTP.status == 200 && successCallback) {
          successCallback.call(XMLHTTP.responseText);
        }
      };

      XMLHTTP.send(data.formData || objectToQueryString(data.data));
    };

    xhr.parseHTML = function (markup) {
      var doc = document.implementation.createHTMLDocument('');

      if (markup.toLowerCase().indexOf('<!doctype') > -1) {
        doc.documentElement.innerHTML = markup;
      } else {
        doc.body.innerHTML = markup;
      }

      return doc;
    };
    /**
     * Adapted from {@link http://www.bulgaria-web-developers.com/projects/javascript/serialize/}
     * Changes:
     *     Ensures proper URL encoding of name as well as value
     *     Preserves element order
     *     XHTML and JSLint-friendly
     *     Disallows disabled form elements and reset buttons as per HTML4 [successful controls]{@link http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2}
     *         (as used in jQuery). Note: This does not serialize <object>
     *         elements (even those without a declare attribute) or
     *         <input type="file" />, as per jQuery, though it does serialize
     *         the <button>'s (which are potential HTML4 successful controls) unlike jQuery
     * @license MIT/GPL
    */


    xhr.serialize = function (form) {
      'use strict';

      var i,
          j,
          len,
          jLen,
          formElement,
          q = [];

      function urlencode(str) {
        // http://kevin.vanzonneveld.net
        // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
        // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
        return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
      }

      function addNameValue(name, value) {
        q.push(urlencode(name) + '=' + urlencode(value));
      }

      if (!form || !form.nodeName || form.nodeName.toLowerCase() !== 'form') {
        throw 'You must supply a form element';
      }

      for (i = 0, len = form.elements.length; i < len; i++) {
        formElement = form.elements[i];

        if (formElement.name === '' || formElement.disabled) {
          continue;
        }

        switch (formElement.nodeName.toLowerCase()) {
          case 'input':
            switch (formElement.type) {
              case 'text':
              case 'email':
              case 'hidden':
              case 'password':
              case 'button': // Not submitted when submitting form manually, though jQuery does serialize this and it can be an HTML4 successful control

              case 'submit':
                addNameValue(formElement.name, formElement.value);
                break;

              case 'checkbox':
              case 'radio':
                if (formElement.checked) {
                  addNameValue(formElement.name, formElement.value);
                }

                break;

              case 'file':
                // addNameValue(formElement.name, formElement.value); // Will work and part of HTML4 "successful controls", but not used in jQuery
                break;

              case 'reset':
                break;
            }

            break;

          case 'textarea':
            addNameValue(formElement.name, formElement.value);
            break;

          case 'select':
            switch (formElement.type) {
              case 'select-one':
                addNameValue(formElement.name, formElement.value);
                break;

              case 'select-multiple':
                for (j = 0, jLen = formElement.options.length; j < jLen; j++) {
                  if (formElement.options[j].selected) {
                    addNameValue(formElement.name, formElement.options[j].value);
                  }
                }

                break;
            }

            break;

          case 'button':
            // jQuery does not submit these, though it is an HTML4 successful control
            switch (formElement.type) {
              case 'reset':
              case 'submit':
              case 'button':
                addNameValue(formElement.name, formElement.value);
                break;
            }

            break;
        }
      }

      return q.join('&');
    };
  };

  return {
    xhr: xhr_
  };
}({});

module.exports = ajax;

/***/ }),

/***/ "./public/app/js/modules/bestDevelopers.js":
/*!*************************************************!*\
  !*** ./public/app/js/modules/bestDevelopers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * codex.bestDevelopers module
 * Sets best developers values in admin/user for further output in templates/developers.php
 */
var developer = function () {
  var bind = function bind() {
    var chBoxes = document.querySelectorAll('.developer-checkbox');

    for (var i = chBoxes.length - 1; i > -1; i--) {
      chBoxes[i].addEventListener('change', toggle);
    }
  };
  /**
   * Sends ajax data 0 or 1, whether user is best developer or not
   * @param {Event} event
   * @uses codex.core.ajax
   */


  var toggle = function toggle(event) {
    var data = {
      data: 'id=' + event.target.id + '&value=' + (event.target.checked ? 1 : 0),
      url: '/admin/developer'
    };
    codex.core.ajax(data);
  };

  return {
    bind: bind
  };
}();

module.exports = developer;

/***/ }),

/***/ "./public/app/js/modules/cPreview.js":
/*!*******************************************!*\
  !*** ./public/app/js/modules/cPreview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module to compose output JSON preview
 */
var cPreview = function () {
  /**
   * Shows JSON in pretty preview
   * @param {object} output - what to show
   * @param {Element} holder - where to show
   */
  function show(output, holder) {
    /** Make JSON pretty */
    output = JSON.stringify(output, null, 4);
    /** Encode HTML entities */

    output = encodeHTMLEntities(output);
    /** Stylize! */

    output = stylize(output);
    holder.innerHTML = output;
  }

  ;
  /**
   * Converts '>', '<', '&' symbols to entities
   */

  function encodeHTMLEntities(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /**
   * Some styling magic
   */


  function stylize(string) {
    /** Stylize JSON keys */
    string = string.replace(/"(\w+)"\s?:/g, '"<span class=sc_key>$1</span>" :');
    /** Stylize tool names */

    string = string.replace(/"(paragraph|quote|list|header|link|code|image|delimiter|raw)"/g, '"<span class=sc_toolname>$1</span>"');
    /** Stylize HTML tags */

    string = string.replace(/(&lt;[\/a-z]+(&gt;)?)/gi, '<span class=sc_tag>$1</span>');
    /** Stylize strings */

    string = string.replace(/"([^"]+)"/gi, '"<span class=sc_attr>$1</span>"');
    /** Boolean/Null */

    string = string.replace(/\b(true|false|null)\b/gi, '<span class=sc_bool>$1</span>');
    return string;
  }

  return {
    show: show
  };
}({});

module.exports = cPreview;

/***/ }),

/***/ "./public/app/js/modules/codeStyling.js":
/*!**********************************************!*\
  !*** ./public/app/js/modules/codeStyling.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Code Styling module
 */
module.exports = function codeStyling() {
  'use strict';
  /**
   * DOM manipulations helper
   */

  var $ = __webpack_require__(/*! ./dom */ "./public/app/js/modules/dom.js").default;
  /**
   * Extrnal library for code styling
   * @link https://highlightjs.org
   * @type {Object}
   */


  var library = {
    js: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js',
    css: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github-gist.min.css'
  };
  /**
   * Loads styling library
   */

  var prepare = function prepare() {
    return Promise.all([$.loadResource('JS', library.js, 'highlight'), $.loadResource('CSS', library.css, 'highlight')]).catch(function (err) {
      return console.warn('Cannot load code styling module: ', err);
    }).then(function () {
      return console.log('Code Styling is ready');
    });
  };
  /**
   * Finds code blocks and fires highlighting
   * @param {String} codeBlocksSelector - where to find <code> blocks
   */


  var init = function init(codeBlocksSelector) {
    var codeBlocks = document.querySelectorAll(codeBlocksSelector);

    if (codeBlocks) {
      prepare().then(function () {
        if (!window.hljs) {
          console.warn('Code Styling script loaded but not ready');
          return;
        }

        for (var i = codeBlocks.length - 1; i >= 0; i--) {
          window.hljs.highlightBlock(codeBlocks[i]);
        }
      });
    }
  };

  return {
    init: init
  };
}();

/***/ }),

/***/ "./public/app/js/modules/core.js":
/*!***************************************!*\
  !*** ./public/app/js/modules/core.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* Significant core methods
*/
module.exports = function () {
  /** Logging method */
  var log = function log(str, prefix, type, arg) {
    var staticLength = 32;

    if (prefix) {
      prefix = prefix.length < staticLength ? prefix : prefix.substr(0, staticLength - 2);

      while (prefix.length < staticLength - 1) {
        prefix += ' ';
      }

      prefix += ':';
      str = prefix + str;
    }

    type = type || 'log';

    try {
      if ('console' in window && window.console[type]) {
        if (arg) console[type](str, arg);else console[type](str);
      }
    } catch (e) {}
  };
  /**
  * Native ajax method.
  * @param {Object} data
  */


  var ajax = function ajax(data) {
    if (!data || !data.url) {
      return;
    }

    var XMLHTTP = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
        successFunction = function successFunction() {};

    data.async = true;
    data.type = data.type || 'GET';
    data.data = data.data || '';
    data['content-type'] = data['content-type'] || 'application/json; charset=utf-8';
    successFunction = data.success || successFunction;

    if (data.type == 'GET' && data.data) {
      data.url = /\?/.test(data.url) ? data.url + '&' + data.data : data.url + '?' + data.data;
    }

    if (data.withCredentials) {
      XMLHTTP.withCredentials = true;
    }

    if (data.beforeSend && typeof data.beforeSend == 'function') {
      data.beforeSend.call();
    }

    XMLHTTP.open(data.type, data.url, data.async);
    XMLHTTP.setRequestHeader('Content-type', data['content-type']);
    XMLHTTP.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    XMLHTTP.onreadystatechange = function () {
      if (XMLHTTP.readyState == 4 && XMLHTTP.status == 200) {
        successFunction(XMLHTTP.responseText);
      }
    };

    XMLHTTP.send(data.data);
  };

  return {
    ajax: ajax,
    log: log
  };
}();

/***/ }),

/***/ "./public/app/js/modules/dom.js":
/*!**************************************!*\
  !*** ./public/app/js/modules/dom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * DOM manipulations methods
 */
var DOM =
/*#__PURE__*/
function () {
  function DOM() {
    _classCallCheck(this, DOM);
  }

  _createClass(DOM, null, [{
    key: "make",

    /**
     * Helper for making Elements with classname and attributes
     * @param  {string} tagName           - new Element tag name
     * @param  {array|string} classNames  - list or name of CSS classname(s)
     * @param  {Object} attributes        - any attributes
     * @return {Element}
     */
    value: function make(tagName, classNames, attributes) {
      var el = document.createElement(tagName);

      if (Array.isArray(classNames)) {
        var _el$classList;

        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
      } else if (classNames) {
        el.classList.add(classNames);
      }

      for (var attrName in attributes) {
        el[attrName] = attributes[attrName];
      }

      return el;
    }
    /**
     * Replaces node with
     * @param {Element} nodeToReplace
     * @param {Element} replaceWith
     */

  }, {
    key: "replace",
    value: function replace(nodeToReplace, replaceWith) {
      return nodeToReplace.parentNode.replaceChild(replaceWith, nodeToReplace);
    }
    /**
     * getElementById alias
     * @param {String} elementId
     */

  }, {
    key: "get",
    value: function get(elementId) {
      return document.getElementById(elementId);
    }
    /**
     * Loads static resourse: CSS or JS
     * @param {string} type  - CSS|JS
     * @param {string} path  - resource path
     * @param {string} inctanceName - unique name of resource
     * @return Promise
     */

  }, {
    key: "loadResource",
    value: function loadResource(type, path, instanceName) {
      /**
       * Imported resource ID prefix
       * @type {String}
       */
      var resourcePrefix = 'cdx-resourse';
      return new Promise(function (resolve, reject) {
        if (!type || !['JS', 'CSS'].includes(type)) {
          reject("Unexpected resource type passed. \xABCSS\xBB or \xABJS\xBB expected, \xAB".concat(type, "\xBB passed"));
        }

        var node;
        /** Script is already loaded */

        if (!instanceName) {
          reject('Instance name is missed');
        } else if (document.getElementById("".concat(resourcePrefix, "-").concat(type.toLowerCase(), "-").concat(instanceName))) {
          resolve(path);
        }

        if (type === 'JS') {
          node = document.createElement('script');
          node.async = true;
          node.defer = true;
          node.charset = 'utf-8';
        } else {
          node = document.createElement('link');
          node.rel = 'stylesheet';
        }

        node.id = "".concat(resourcePrefix, "-").concat(type.toLowerCase(), "-").concat(instanceName);
        var timerLabel = "Resource loading ".concat(type, " ").concat(instanceName);
        console.time(timerLabel);

        node.onload = function () {
          console.timeEnd(timerLabel);
          resolve(path);
        };

        node.onerror = function () {
          console.timeEnd(timerLabel);
          reject(path);
        };

        if (type === 'JS') {
          node.src = path;
        } else {
          node.href = path;
        }

        document.head.appendChild(node);
      });
    }
  }]);

  return DOM;
}();

exports.default = DOM;

/***/ }),

/***/ "./public/app/js/modules/dragndrop.js":
/*!********************************************!*\
  !*** ./public/app/js/modules/dragndrop.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (settings) {
  var defaultHandlers = {
    findDraggable: function findDraggable(e) {
      return e.target.closest('.' + draggableClass);
    },
    findDroppable: function findDroppable(e) {
      return document.elementFromPoint(e.clientX, e.clientY).closest('.' + droppableClass);
    },

    /**
     * The simplest makeAvatar method.
     *
     * Just set elem to avatar.elem. And remembers element position in document.
     * If drop isn`t success, returns elem to start position.
     */
    makeAvatar: function makeAvatar(elem) {
      var avatar = {};

      var avatarRollback = function avatarRollback() {
        avatar.elem.classList.remove('dnd-default-avatar');
        if (avatar.nextSibling) avatar.parentNode.insertBefore(avatar.elem, avatar.nextSibling);else avatar.parentNode.appendChild(avatar.elem);
        delete dragObj.avatar;
      };

      avatar = {
        elem: elem,
        parentNode: elem.parentNode,
        nextSibling: elem.nextElementSibling,
        rollback: avatarRollback
      }; // Set avatar position: absolute; for drag'n'drop

      avatar.elem.classList.add('dnd-default-avatar');
      return avatar;
    },

    /**
     * Highlights droppable elements under cursor with border
     */
    targetChanged: function targetChanged(target, newTarget) {
      if (target) target.classList('dnd-default-target-highlight');
      if (newTarget) newTarget.classList.add('dnd-default-target-highlight');
    },
    move: function move(e, avatar, shift) {
      avatar.elem.style.left = e.pageX - shift.x + 'px';
      avatar.elem.style.top = e.pageY - shift.y + 'px';
    },

    /**
     * Inserts elem into document if drop is success
     */
    targetReached: function targetReached(target, avatar, elem) {
      target.classList.remove('dnd-default-target-highlight');
      target.parentNode.insertBefore(elem, target.nextElementSibling);
      avatar.elem.classList.remove('dnd-default-avatar');
    }
  };
  var draggableClass = settings.draggableClass || 'draggable',
      droppableClass = settings.droppableClass || 'droppable',
      findDraggable = settings.findDraggable || defaultHandlers.findDraggable,
      findDroppable = settings.findDroppable || defaultHandlers.findDroppable,
      makeAvatar = settings.makeAvatar || defaultHandlers.makeAvatar,
      targetChanged = settings.targetChanged || defaultHandlers.targetChanged,
      move = settings.move || defaultHandlers.move,
      targetReached = settings.targetReached || defaultHandlers.targetReached;
  var dragObj = {};

  var onMouseDown = function onMouseDown(e) {
    /**
     * Check mouse (which=1 - right mouse button) or touch (which=0 - touch) event.
     */
    if (e.which > 1) return;
    e = touchSupported(e);
    dragObj.clickedAt = {
      x: e.pageX,
      y: e.pageY
    };
    dragObj.elem = findDraggable(e);
    if (!dragObj.elem) return;
    toggleSelection();
    var coords = getCoords(dragObj.elem);
    dragObj.shift = {
      x: e.pageX - coords.x,
      y: e.pageY - coords.y
    };
  };

  var onMouseMove = function onMouseMove(e) {
    if (!dragObj.elem) return; // Prevent touchmove scroll

    e.preventDefault();
    e = touchSupported(e); // Check mouse offset. If x or y offset <5, assume that it`s accidental move

    if (Math.abs(e.pageX - dragObj.clickedAt.x) < 5 && Math.abs(e.pageY - dragObj.clickedAt.y) < 5) return;

    if (!dragObj.avatar) {
      dragObj.avatar = makeAvatar(dragObj.elem);
    }

    var newTarget = findDroppable(e);

    if (newTarget != dragObj.target) {
      targetChanged(dragObj.target, newTarget, dragObj.avatar);
      dragObj.target = newTarget;
    }

    move(e, dragObj.avatar, dragObj.shift);
  };

  var onMouseUp = function onMouseUp(e) {
    if (e.which > 1) return;

    if (!dragObj.avatar) {
      dragObj = {};
      return;
    }

    e = touchSupported(e);
    var target = findDroppable(e);
    if (target) targetReached(target, dragObj.avatar, dragObj.elem, e);else dragObj.avatar.rollback();
    dragObj = {};
    toggleSelection();
  };

  var getCoords = function getCoords(elem) {
    var rect = elem.getBoundingClientRect();
    return {
      x: rect.left + window.pageXOffset,
      y: rect.top + window.pageYOffset
    };
  };

  var touchSupported = function touchSupported(e) {
    if (e.changedTouches) var touch = e.changedTouches[0];else return e;
    e.pageX = touch.pageX;
    e.pageY = touch.pageY;
    e.clientX = touch.clientX;
    e.clientY = touch.clientY;
    e.screenX = touch.screenX;
    e.screenY = touch.screenY;
    e.target = touch.target;
    return e;
  };

  var toggleSelection = function toggleSelection() {
    document.body.classList.toggle('no-selection');
  };

  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('touchstart', onMouseDown);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchend', onMouseUp);

  document.ondragstart = function () {
    return false;
  };
};

/***/ }),

/***/ "./public/app/js/modules/editor.js":
/*!*****************************************!*\
  !*** ./public/app/js/modules/editor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CodexEditor = __webpack_require__(/*! codex.editor */ "./node_modules/codex.editor/build/codex-editor.js");
/**
 * Require module to compose output JSON preview
 */


var cPreview = __webpack_require__(/*! ./cPreview */ "./public/app/js/modules/cPreview.js");
/**
 * Load Tools for the Editor
 */


var Header = __webpack_require__(/*! codex.editor.header */ "./node_modules/codex.editor.header/dist/bundle.js");

var SimpleImage = __webpack_require__(/*! codex.editor.simple-image */ "./node_modules/codex.editor.simple-image/dist/bundle.js");

var Quote = __webpack_require__(/*! codex.editor.quote */ "./node_modules/codex.editor.quote/dist/bundle.js");

var Marker = __webpack_require__(/*! codex.editor.marker */ "./node_modules/codex.editor.marker/dist/bundle.js");

var CodeTool = __webpack_require__(/*! codex.editor.code */ "./node_modules/codex.editor.code/dist/bundle.js");

var Delimiter = __webpack_require__(/*! codex.editor.delimiter */ "./node_modules/codex.editor.delimiter/dist/bundle.js");

var InlineCode = __webpack_require__(/*! codex.editor.inline-code */ "./node_modules/codex.editor.inline-code/dist/bundle.js");

var List = __webpack_require__(/*! codex.editor.list */ "./node_modules/codex.editor.list/dist/bundle.js");
/**
 * Editor instance
 */


var ceEditor;
/**
 * Container to output saved Editor data
 */

var output;

var cdxEditor =
/*#__PURE__*/
function () {
  function cdxEditor() {
    _classCallCheck(this, cdxEditor);
  }

  _createClass(cdxEditor, [{
    key: "init",

    /**
     * Initialize Editor with settings
     * @param {Object} settings           - Editor's parameters
     * @param {String} settings.output_id - ID of container where Editor's saved data will be shown
     * @param {Object[]} settings.blocks  - Editor's blocks content
     */
    value: function init(settings) {
      var _this = this;

      /**
       * Define content of Editor's blocks
       * @type {Object|{blocks}}
       */
      var editorData = settings.blocks || this.defaultEditorData();
      /**
       * Define сontainer to output Editor saved data
       * @type {HTMLElement}
       */

      output = document.getElementById(settings.output_id);

      if (output) {
        console.log('Output target with ID: «' + settings.output_id + '» was initialized successfully');
      } else {
        console.warn('Can\'t find output target with ID: «' + settings.output_id + '»');
      }
      /**
       * Instantiate new Editor with set of Tools
       */


      ceEditor = new CodexEditor({
        tools: {
          image: SimpleImage,
          header: {
            class: Header,
            inlineToolbar: ['link', 'marker', 'bold'],
            config: {
              placeholder: 'Title'
            }
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: Quote.DEFAULT_QUOTE_PLACEHOLDER,
              captionPlaceholder: Quote.DEFAULT_CAPTION_PLACEHOLDER
            }
          },
          code: {
            class: CodeTool,
            shortcut: 'CMD+SHIFT+D'
          },
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C'
          },
          marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
          },
          delimiter: Delimiter
        },
        data: {
          blocks: editorData
        },
        onReady: function onReady() {
          _this.prepareEditor();
        },
        onChange: function onChange() {
          _this.previewData();
        }
      });
    }
  }, {
    key: "defaultEditorData",

    /**
     * Define default Editor's data if none was passed
     * @returns {Object[]} blocks
     */
    value: function defaultEditorData() {
      return {
        blocks: [{
          type: 'header',
          data: {
            text: '',
            level: 2
          }
        }]
      };
    }
  }, {
    key: "previewData",

    /**
     * Shows JSON output of editor saved data
     */
    value: function previewData() {
      ceEditor.saver.save().then(function (savedData) {
        cPreview.show(savedData, output);
      });
    }
  }, {
    key: "prepareEditor",

    /**
     * When editor is ready, trigger click inside editor to show toolbar
     * Preview JSON output
     */
    value: function prepareEditor() {
      document.querySelector('.codex-editor__redactor').click();
      this.previewData();
    }
  }]);

  return cdxEditor;
}();

;
module.exports = new cdxEditor();

/***/ }),

/***/ "./public/app/js/modules/helpers.js":
/*!******************************************!*\
  !*** ./public/app/js/modules/helpers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (helpers) {
  helpers.setCookie = function (name, value, expires, path, domain) {
    var str = name + '=' + value;
    if (expires) str += '; expires=' + expires.toGMTString();
    if (path) str += '; path=' + path;
    if (domain) str += '; domain=' + domain;
    document.cookie = str;
  };

  helpers.getCookie = function (name) {
    var dc = document.cookie;
    var prefix = name + '=';
    var begin = dc.indexOf('; ' + prefix);

    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) return null;
    } else begin += 2;

    var end = document.cookie.indexOf(';', begin);
    if (end == -1) end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
  };

  helpers.getOffset = function (el) {
    var _x = 0;
    var _y = 0;

    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft + el.clientLeft;
      _y += el.offsetTop + el.clientTop;
      el = el.offsetParent;
    }

    return {
      top: _y,
      left: _x
    };
  };

  return helpers;
}({});

/***/ }),

/***/ "./public/app/js/modules/join.js":
/*!***************************************!*\
  !*** ./public/app/js/modules/join.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module for /join page
 * Blocks writing without authorization
 *
 * Toggles into view blankAdditionalFields: Name and Surname, Email
 */
var join = function () {
  var animationClass = 'wobble';
  /**
  * Module initialization
  */

  var init = function init() {
    var joinBlank = document.getElementById('joinBlank');

    if (typeof joinBlank != 'undefined' && joinBlank !== null) {
      var joinBlankTextareas = joinBlank.getElementsByTagName('textarea');

      if (joinBlankTextareas.length) {
        for (var i = joinBlankTextareas.length - 1; i >= 0; i--) {
          joinBlankTextareas[i].addEventListener('keyup', checkUserCanEdit, false);
        }
      }
    }

    var blankShowAdditionalFieldsButton = document.getElementById('blankShowAdditionalFieldsButton');

    if (typeof blankShowAdditionalFieldsButton != 'undefined' && blankShowAdditionalFieldsButton !== null) {
      blankShowAdditionalFieldsButton.addEventListener('click', showAdditionalFields, false);
    }
  };
  /**
   * Adds wobble-effect to Auth block if user starts typing into textarea unauthorized
   * @param {Event} event
   */


  var checkUserCanEdit = function checkUserCanEdit(event) {
    var textarea = event.target,
        blankAuthBlock = document.getElementById('js-join-auth'),
        emailInput = document.getElementById('js-email');

    if (blankAuthBlock && !emailInput.value.length) {
      blankAuthBlock.classList.add(animationClass);
      window.setTimeout(function () {
        return blankAuthBlock.classList.remove(animationClass);
      }, 450);
      textarea.value = '';
    }
  };
  /**
   * Toggles into view blankAdditionalFields: Name and Surname, Email
   * @param {Event} event
   */


  var showAdditionalFields = function showAdditionalFields() {
    var blankAdditionalFields = document.getElementById('blankAdditionalFields');
    blankAdditionalFields.classList.toggle('hide');
  };

  return {
    init: init
  };
}({});

module.exports = join;

/***/ }),

/***/ "./public/app/js/modules/player.js":
/*!*****************************************!*\
  !*** ./public/app/js/modules/player.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dom = __webpack_require__(/*! ./dom */ "./public/app/js/modules/dom.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class  Player
 * @classdesc Simple player on the overlay container
 *
 * @typedef {Player}
 * @property {String} sourceURL - video URL
 * @property {Element} toggler  - Play Button
 * @property {Element} wrapper  - In wich Element player should be added
 * @property {Element} overlay  - Player main container
 * @property {Object} CSS       - CSS dictionary
 *
 */
var Player =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param  {String} options.sourceURL        - video URL
   * @param  {Element} options.toggler         - play button
   * @param  {String} options.wrapperSelector  - xpath selector for the player holder
   */
  function Player(_ref) {
    var _this = this;

    var sourceURL = _ref.sourceURL,
        toggler = _ref.toggler,
        wrapperSelector = _ref.wrapperSelector;

    _classCallCheck(this, Player);

    this.sourceURL = sourceURL;
    this.toggler = toggler;
    this.wrapper = document.querySelector(wrapperSelector);
    this.overlay = null;
    this.CSS = {
      overlay: 'video-overlay',
      overlayShowed: 'video-overlay--showed',
      overlayLoaded: 'video-overlay--loaded',
      closeButton: 'video-overlay__close'
    };
    /**
     * Add Play Button click listener
     */

    this.toggler.addEventListener('click', function () {
      _this.showVideoOverlay();
    }, false);
  }
  /**
   * Creates player container and append it to the parent element
   */


  _createClass(Player, [{
    key: "showVideoOverlay",
    value: function showVideoOverlay() {
      var _this2 = this;

      this.overlay = _dom2.default.make('div', this.CSS.overlay);

      var video = _dom2.default.make('video', null, {
        autoplay: true,
        loop: true
      }),
          source = _dom2.default.make('source', null, {
        src: this.sourceURL,
        type: 'video/mp4'
      }),
          closeButton = _dom2.default.make('div', this.CSS.closeButton);
      /**
       * Append <video>
       */


      video.appendChild(source);
      this.overlay.appendChild(video);
      /**
       * Bind loading callback
       */

      video.addEventListener('loadeddata', function () {
        _this2.videoLoaded();
      });
      /**
       * Activate close button
       */

      this.overlay.appendChild(closeButton);
      closeButton.addEventListener('click', function () {
        _this2.close();
      });
      /**
       * Add overlay to the wrapper
       */

      this.wrapper.appendChild(this.overlay);
      window.setTimeout(function () {
        _this2.overlay.classList.add(_this2.CSS.overlayShowed);
      }, 50);
    }
    /**
     * Video loaded callback
     * Shows player
     */

  }, {
    key: "videoLoaded",
    value: function videoLoaded() {
      this.wrapper.classList.add(this.CSS.overlayLoaded);
    }
    /**
     * Removes overlay with video
     */

  }, {
    key: "close",
    value: function close() {
      this.overlay.remove();
      this.overlay = null;
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),

/***/ "./public/app/js/modules/pluginsFilter.js":
/*!************************************************!*\
  !*** ./public/app/js/modules/pluginsFilter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Plugins filter on editor landing page
 */

module.exports = function () {
  /**
   * Block plugins
   */
  var blockTools;
  /**
   * Inline Tool plugins
   */

  var inlineTools;
  /**
   * Initialize module
   * @typedef {Object} settings                             - module's parameters passed from ModuleDispatcher
   * @param   {String} settings.blockToolsClass             - class of Editor Block Tools
   * @param   {String} settings.inlineToolsClass            - class of Editor Inline Tools
   * @param   {String} settings.blockFilterButtonClass      - class of button Block Tools filter
   * @param   {String} settings.inlineFilterButtonClass     - class of button Inline Tools filter
   * @param   {String} settings.allToolsFilterButtonClass   - class of button showing all types of Tools
   */

  var init = function init(settings) {
    blockTools = document.querySelectorAll(settings.blockToolsClass);
    inlineTools = document.querySelectorAll(settings.inlineToolsClass);
    var pluginFilters = [{
      'buttonClass': settings.blockFilterButtonClass,
      'buttonAction': showBlockToolsOnly
    }, {
      'buttonClass': settings.inlineFilterButtonClass,
      'buttonAction': showInlineToolsOnly
    }, {
      'buttonClass': settings.allToolsFilterButtonClass,
      'buttonAction': showAllPlugins
    }];
    /**
     * Add event listener if filter button exists, otherwise show console message
     */

    for (var j = 0; j < pluginFilters.length; j++) {
      var filterButton = document.querySelector(pluginFilters[j].buttonClass);
      var buttonClass = pluginFilters[j].buttonClass;
      var filterAction = pluginFilters[j].buttonAction;

      if (filterButton) {
        filterButton.addEventListener('click', filterAction);
      } else {
        console.warn('Can\'t find button with class: «' + buttonClass + '»');
      }
    }
  };
  /**
   * Show only Inline Tools, hide Blocks
   */


  var showInlineToolsOnly = function showInlineToolsOnly() {
    toggleTools(inlineTools, blockTools);
  };
  /**
   * Show only Blocks, hide Inline Tools
   */


  var showBlockToolsOnly = function showBlockToolsOnly() {
    toggleTools(blockTools, inlineTools);
  };
  /**
   * Show all types of Editor Tools
   */


  var showAllPlugins = function showAllPlugins() {
    toggleTools(inlineTools, blockTools, false);
  };
  /**
   * Toggle Editor Block and Inline Tools into view
   * @param {HTMLCollection} toolsToShow - Block or Inline Editor's Tools to show
   * @param {HTMLCollection} toolsToHide - Block or Inline Editor's Tools to hide
   * @param {Boolean} hideOneType        - pass false to show both Block and Inline Tools
   */


  var toggleTools = function toggleTools(toolsToShow, toolsToHide) {
    var hideOneType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    for (var i = 0; i < toolsToHide.length; i++) {
      toolsToHide[i].classList.toggle('hide', hideOneType);
    }

    for (var _i = 0; _i < toolsToShow.length; _i++) {
      toolsToShow[_i].classList.toggle('hide', false);
    }
  };

  return {
    init: init
  };
}({});

/***/ }),

/***/ "./public/app/js/modules/polyfills.js":
/*!********************************************!*\
  !*** ./public/app/js/modules/polyfills.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var polyfills = function () {
  /**
   * Polyfilling ECMAScript 6 method String.includes
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Browser_compatibility
   */
  if (!String.prototype.includes) {
    String.prototype.includes = function () {
      'use strict';

      return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
  }
  /**
   * Polyfill for Element.prototype.matches method
   */


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
  /**
   * Polyfill for Element.prototype.closest method
   */


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var node = this;

      while (node) {
        if (node.matches(selector)) return node;
        node = node.parentElement;
      }

      return null;
    };
  }

  ;
}({});

module.exports = polyfills;

/***/ }),

/***/ "./public/app/js/modules/profile.js":
/*!******************************************!*\
  !*** ./public/app/js/modules/profile.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Profile page methods
 */
module.exports = function () {
  /**
   * Photo uploading success-callback
   * Fired by transport
   * @param  {string} newPhotoURL - uploaded file URL
   */
  var uploadPhotoSuccess = function uploadPhotoSuccess(newPhotoURL) {
    var settingsPhoto = document.getElementById('profile-photo-updatable'),
        headerPhoto = document.getElementById('header-avatar-updatable');
    settingsPhoto.src = newPhotoURL;
    headerPhoto.src = newPhotoURL;
  };

  return {
    uploadPhotoSuccess: uploadPhotoSuccess
  };
}();

/***/ }),

/***/ "./public/app/js/modules/quiz.js":
/*!***************************************!*\
  !*** ./public/app/js/modules/quiz.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Модуль quiz с единственным публичным методом quiz.init()
 */
module.exports = function () {
  var quizData = null,
      numberOfQuestions = null,
      currentQuestion = null,
      score = null,
      maxScore = null;
  /**
   * Публичный метод init.
   *
   * @param {object} quizDataInput  - объект с информацией о тесте
   * @param {string} holder - id элемента, в который будет выводиться тест
   */

  var init = function init(quizDataInput, holder) {
    quizData = quizDataInput;
    numberOfQuestions = quizData.questions.length;
    currentQuestion = 0;
    score = 0;
    gameProcessing_.prepare();
    UI_.prepare(holder);
    UI_.setupQuestionInterface();
  };

  var UI_ = {
    holder: null,
    currentQuestionObj: null,
    // Объект, в котором будут храниться DOM-элементы, связанные с отображением вопроса
    questionElems: null,
    prepare: function prepare(holder) {
      UI_.holder = document.getElementById(holder);
      UI_.holder.classList.add('quiz');
      UI_.holder.classList.add('clearfix');
    },

    /**
     * Создаем элементы для вывода теста, заносим их в UI_.questionElems и выводим на страницу.
     */
    setupQuestionInterface: function setupQuestionInterface() {
      UI_.clear();
      var title, optionsHolder, counter, nextButton;
      title = UI_.createElem('div', 'quiz__question-title');
      optionsHolder = UI_.createElem('div', 'quiz__question-options');
      counter = UI_.createElem('div', 'quiz__question-counter');
      nextButton = UI_.createElem('input', ['quiz__question-button', 'quiz__question-button_next']);
      nextButton.setAttribute('type', 'button');
      nextButton.setAttribute('value', 'Далее →');
      UI_.questionElems = {
        counter: counter,
        title: title,
        optionsHolder: optionsHolder,
        options: [],
        nextButton: nextButton
      };
      UI_.append(UI_.questionElems);
      UI_.showQuestion();
    },

    /**
     * Выводим текущий вопрос на страницу (вопрос, варианты ответа и счетчик)
     */
    showQuestion: function showQuestion() {
      UI_.clear(UI_.questionElems.optionsHolder);
      UI_.questionElems.options = [];
      UI_.questionElems.nextButton.removeEventListener('click', UI_.showQuestion);
      UI_.currentQuestionObj = quizData.questions[currentQuestion];
      UI_.questionElems.nextButton.setAttribute('disabled', true);
      UI_.questionElems.title.textContent = UI_.currentQuestionObj.title;
      UI_.questionElems.counter.textContent = currentQuestion + 1 + '/' + numberOfQuestions;
      UI_.currentQuestionObj.answers.map(UI_.createOption);
    },
    answerSelected: function answerSelected(answer) {
      answer.classList.add('quiz__question-answer_selected');
      UI_.questionElems.options.map(function (current) {
        current.removeEventListener('click', gameProcessing_.getUserAnswer);
      });
      UI_.questionElems.nextButton.disabled = false;

      if (currentQuestion < numberOfQuestions - 1) {
        UI_.questionElems.nextButton.addEventListener('click', UI_.showQuestion);
      } else {
        UI_.questionElems.nextButton.addEventListener('click', UI_.showResult);
      }

      UI_.showAnswer(answer);
      currentQuestion++;
    },

    /**
     * Добавляем стили и выводим сообщение для выбранного варианта ответа
     * Открываем доступ к следующему вопросу
     *
     * @param {Element} answer - DOM-элемент выбранного ответа
     */
    showAnswer: function showAnswer(answer) {
      var answerStyle = answer.dataset.score > 0 ? '_right' : '_wrong',
          answerIndex = answer.dataset.index;
      answer.classList.add('quiz__question-answer' + answerStyle);
      var answerMessage = UI_.createElem('div', 'quiz__answer-message');
      answerMessage.textContent = UI_.currentQuestionObj.answers[answerIndex].message;
      UI_.insertAfter(answerMessage, answer);

      if (answer.dataset.score == 0) {
        UI_.showCorrectAnswers();
      }
    },
    showCorrectAnswers: function showCorrectAnswers() {
      UI_.questionElems.options.map(function (answer) {
        if (answer.dataset.score > 0) {
          answer.classList.add('quiz__question-answer_right');
        } else {
          answer.classList.add('quiz__question-answer_wrong');
        }
      });
    },
    showResult: function showResult() {
      var result = score + '/' + maxScore;
      UI_.questionElems.nextButton.removeEventListener('click', UI_.showResult);
      UI_.clear();
      var resultScore = UI_.createElem('div', 'quiz__result-score');
      resultScore.textContent = result;
      var resultMessage = UI_.createElem('div', 'quiz__result-message');
      resultMessage.textContent = gameProcessing_.getMessage();
      var social = UI_.createElem('div', 'quiz__sharing');
      UI_.createSocial(social, result);
      var retry = UI_.createElem('div', 'quiz__retry-button');
      retry.textContent = 'Пройти еще раз';
      retry.addEventListener('click', init.bind(null, quizData, UI_.holder.id));
      UI_.append([resultScore, resultMessage, social, retry]);
      codex.sharer.init();
    },

    /**
     * Создаем кнопки социальных сетей и добавляем их в holder
     *
     * @param {Element} holder
     */
    createSocial: function createSocial(holder, result) {
      var networks = [{
        title: 'Share on the VK',
        shareType: 'vkontakte',
        class: 'vk',
        icon: 'icon-vkontakte'
      }, {
        title: 'Share on the Facebook',
        shareType: 'facebook',
        class: 'fb',
        icon: 'icon-facebook-squared'
      }, {
        title: 'Tweet',
        shareType: 'twitter',
        class: 'tw',
        icon: 'icon-twitter'
      }, {
        title: 'Forward in Telegramm',
        shareType: 'telegram',
        class: 'tg',
        icon: 'icon-paper-plane'
      }];
      networks.map(function (current) {
        var button = UI_.createElem('span', ['but', current.class]),
            icon = UI_.createElem('i', current.icon),
            shareMessage = null;
        button.dataset.shareType = current.shareType;
        button.setAttribute('title', current.title);

        if (quizData.shareMessage) {
          shareMessage = quizData.shareMessage.replace('$score', result);
        }

        shareMessage = shareMessage || 'Я набрал ' + result + ' в ' + (quizData.title || 'тесте от команды CodeX');
        button.dataset.url = window.location.href;
        button.dataset.title = shareMessage;
        button.dataset.desc = quizData.description || '';
        UI_.append(icon, button);
        UI_.append(button, holder);
      });
    },

    /**
     * Создаем i-й вариант ответа и выводим в UI_.questionElems.optionsHolder
     * И добавляем в UI_.questionElems.options
     *
     * @param {Object} answer - объект варианта ответа
     * @param {int} i - его номер в вопросе
     */
    createOption: function createOption(answer, i) {
      var answerObj = UI_.createElem('div', 'quiz__question-answer');
      answerObj.dataset.score = answer.score;
      answerObj.dataset.index = i;
      answerObj.textContent = answer.text; // Вешаем слушатель на вариант ответа

      answerObj.addEventListener('click', gameProcessing_.getUserAnswer);
      UI_.questionElems.options.push(answerObj);
      UI_.append(answerObj, UI_.questionElems.optionsHolder);
    },

    /**
     * Создает новый DOM-элемент с набором переданных классов
     *
     * @param {string} tag - имя тега
     * @param {string|Array} classes - имя или массив имен классов
     * @returns {Element}
     */
    createElem: function createElem(tag, classes) {
      var elem = document.createElement(tag);

      if (!classes) {
        return elem;
      }

      if (classes instanceof Array) {
        for (var i in classes) {
          elem.classList.add(classes[i]);
        }
      } else {
        elem.classList.add(classes);
      }

      return elem;
    },

    /**
     * Добавляет элементы в переданный элемент
     *
     * @param {Element|Array} elems - элемент или массив элементов
     * @param {Element|null} parent - родитель или UI_.holder, если передан NULL
     */
    append: function append(elems, parent) {
      parent = parent || UI_.holder;

      if (!(elems instanceof Element)) {
        for (var i in elems) {
          if (elems[i] instanceof Element) {
            parent.appendChild(elems[i]);
          }
        }
      } else {
        parent.appendChild(elems);
      }
    },

    /**
     * Вставляет элемент после переданного элемента
     *
     * @param {Element} elem
     * @param {Element} elemBefore
     */
    insertAfter: function insertAfter(elem, elemBefore) {
      if (elemBefore.nextSibling) {
        UI_.questionElems.optionsHolder.insertBefore(elem, elemBefore.nextSibling);
      } else {
        UI_.append(elem, elemBefore.parentNode);
      }
    },

    /**
     * Удалаяет все дочерние элементы элемента parent
     *
     * @param {Element} parent
     */
    clear: function clear(parent) {
      parent = parent || UI_.holder;

      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  };
  var gameProcessing_ = {
    prepare: function prepare() {
      maxScore = 0;
      quizData.questions.map(function (question) {
        question.answers.map(function (answer) {
          maxScore += parseFloat(answer.score);
        });
      });
    },

    /**
     * Добавляет баллы за ответ
     *
     * @param {Object} e - объект события клика по варианту ответа
     */
    getUserAnswer: function getUserAnswer(e) {
      var answer = e.currentTarget;
      score += parseFloat(answer.dataset.score);
      UI_.answerSelected(answer);
    },

    /**
     * Получает сообщение о результате для набранного количества баллов
     *
     * @returns {string} message
     */
    getMessage: function getMessage() {
      var messages = quizData.resultMessages,
          message;
      messages.sort(function (a, b) {
        return a['score'] - b['score'];
      });

      if (!messages.length) {
        return;
      }

      for (var i in messages) {
        if (score < messages[i]['score']) {
          break;
        }

        message = messages[i]['message'];
      }

      return message;
    }
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./public/app/js/modules/quizForm.js":
/*!*******************************************!*\
  !*** ./public/app/js/modules/quizForm.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* Quiz form client handler
* Author: @ndawn
* Date: 09/12/16
*/
module.exports = function (quiz) {
  /**
  * Quiz form
  * @var {null} quiz.form - form DOM element
  */
  quiz.form = null;
  /**
  * Nodes list
  * @var {object} quiz.nodes - dict of DOM elements of questions and result messages
  */

  quiz.nodes = {
    'title': null,
    'description': null,
    'questions': [],
    'resultMessages': [],
    'shareMessage': null
  };
  /**
  * Question insert button and anchor for new questions
  * @var {Element} quiz.questionInsertAnchor - DOM element of question insert anchor
  * @var {Element} quiz.questionInsertButton - DOM element of question insert button
  */

  quiz.questionInsertAnchor = null;
  quiz.questionInsertButton = null;
  /**
  * Result message insert button and anchor for new resultMessages
  * @var {Element} quiz.resultMessageInsertAnchor - DOM element of result message insert anchor
  * @var {Element} quiz.resultMessageInsertButton - DOM element of result message insert button
  */

  quiz.resultMessageInsertAnchor = null;
  quiz.resultMessageInsertButton = null;
  /**
  * Result messages holder element
  * @var {Element} quiz.resultMessagesHolder - DOM element of result messages holder
  */

  quiz.resultMessagesHolder = null;
  /**
  * @private
  * DOM element creating function
  * Creates a DOM element with given attributes
  * @param {string} tag - HTML tag of the element
  * @param {object} attributes - dictionary with attributes to be added to the element
  */

  var newDOMElement_ = function newDOMElement_(tag, attributes, text) {
    text = text || '';
    var element = document.createElement(tag);
    var textNode = document.createTextNode(text);
    element.appendChild(textNode);

    for (var attr in attributes) {
      var attrNode = document.createAttribute(attr);
      attrNode.value = attributes[attr];
      element.setAttributeNode(attrNode);
    }

    return element;
  };
  /**
  * @private
  * Answer block creating function
  * Creates a couple of DOM elements and appends them to question answers list
  * @param {number} questionIndex - index of question which answer to be appended to
  */


  var appendAnswerBlock_ = function appendAnswerBlock_(questionIndex, answerData) {
    var answer = {};
    var question = quiz.nodes.questions[questionIndex];
    var objectIndex = question.answers.length;
    answerData = answerData || {};
    answer.holder = newDOMElement_('tr', {
      'class': 'quiz-form__question-answer-holder',
      'data-question-index': questionIndex,
      'data-object-index': objectIndex
    });
    answer.textColumn = newDOMElement_('td', {
      'class': 'quiz-form__question-answer-text-column'
    });
    answer.text = newDOMElement_('input', {
      'type': 'text',
      'class': 'quiz-form__question-answer-text',
      'value': answerData.text || '',
      'required': '',
      'form': 'null'
    });
    answer.scoreColumn = newDOMElement_('td', {
      'class': 'quiz-form__question-answer-score-column'
    });
    answer.score = newDOMElement_('input', {
      'type': 'number',
      'min': '0',
      'step': '1',
      'value': answerData.score || '0',
      'class': 'quiz-form__question-answer-score',
      'required': '',
      'form': 'null'
    });
    answer.messageColumn = newDOMElement_('td', {
      'class': 'quiz-form__question-answer-message-column'
    });
    answer.message = newDOMElement_('input', {
      'type': 'text',
      'class': 'quiz-form__question-answer-message',
      'value': answerData.message || '',
      'required': '',
      'form': 'null'
    });
    answer.destroyButtonColumn = newDOMElement_('td', {
      'class': 'quiz-form__question-answer-destroy-button-column'
    });
    answer.destroyButton = newDOMElement_('span', {
      'class': 'quiz-form__question-answer-destroy-button'
    });
    answer.destroyButtonCross = newDOMElement_('img', {
      'class': 'quiz-form__button-cross',
      'src': '/public/app/img/quizzes/cross.svg'
    });
    answer.textColumn.appendChild(answer.text);
    answer.scoreColumn.appendChild(answer.score);
    answer.messageColumn.appendChild(answer.message);
    answer.destroyButton.appendChild(answer.destroyButtonCross);
    answer.destroyButtonColumn.appendChild(answer.destroyButton);
    answer.holder.appendChild(answer.textColumn);
    answer.holder.appendChild(answer.scoreColumn);
    answer.holder.appendChild(answer.messageColumn);
    answer.holder.appendChild(answer.destroyButtonColumn);
    question.answers.push(answer);
    insertDOMElement_(answer);
    updateDestroyIcons_(question.answers);
  };
  /**
  * @private
  * Question element creating function
  * Creates a question JS object with DOM elements in it and appends it to the questions list
  */


  var appendQuestionBlock_ = function appendQuestionBlock_(questionData) {
    var question = {};
    var objectIndex = quiz.nodes.questions.length;
    questionData = questionData || {};
    question.holder = newDOMElement_('div', {
      'class': 'quiz-form__question-holder',
      'data-object-index': objectIndex
    });
    question.number = newDOMElement_('label', {
      'class': 'quiz-form__question-number'
    }, 'Вопрос ' + (objectIndex + 1));
    question.destroyButton = newDOMElement_('span', {
      'class': 'quiz-form__question-destroy-button'
    });
    question.destroyButtonCross = newDOMElement_('img', {
      'class': 'quiz-form__button-cross',
      'src': '/public/app/img/quizzes/cross.svg'
    });
    question.titleLabel = newDOMElement_('label', {
      'class': 'quiz-form__label quiz-form__question-title-label'
    }, 'Заголовок вопроса');
    question.title = newDOMElement_('input', {
      'type': 'text',
      'class': 'quiz-form__question-title',
      'value': questionData.title || '',
      'required': '',
      'form': 'null'
    });
    question.answers = [];
    question.answersHolder = newDOMElement_('table', {
      'class': 'quiz-form__question-answers-holder'
    });
    question.answersHead = newDOMElement_('thead', {
      'class': 'quiz-form__question-answers-head'
    });
    question.answersLabel = newDOMElement_('th', {
      'class': 'quiz-form__label quiz-form__question-answers-label'
    }, 'Ответы');
    question.scoresLabel = newDOMElement_('th', {
      'class': 'quiz-form__label quiz-form__question-scores-label'
    }, 'Баллы');
    question.messagesLabel = newDOMElement_('th', {
      'class': 'quiz-form__label quiz-form__question-messages-label'
    }, 'Комментарии к ответам');
    question.destroyButtonLabel = newDOMElement_('th', {
      'class': 'quiz-form__question-destroy-buttons-label'
    });
    question.addAnswerButtonRow = newDOMElement_('tr', {
      'class': 'quiz-form__question-add-answer-button-row'
    });
    question.addAnswerButtonColumn = newDOMElement_('td', {
      'class': 'quiz-form__question-add-answer-button-column'
    });
    question.addAnswerButton = newDOMElement_('span', {
      'class': 'quiz-form__question-add-answer-button'
    }, 'Добавить ответ');
    question.addAnswerButtonPlus = newDOMElement_('img', {
      'class': 'quiz-form__button-plus',
      'src': '/public/app/img/quizzes/plus.svg'
    });
    question.holder.appendChild(question.number);
    question.destroyButton.appendChild(question.destroyButtonCross);
    question.holder.appendChild(question.destroyButton);
    question.holder.appendChild(question.titleLabel);
    question.holder.appendChild(question.title);
    question.answersHead.appendChild(question.answersLabel);
    question.answersHead.appendChild(question.scoresLabel);
    question.answersHead.appendChild(question.messagesLabel);
    question.answersHead.appendChild(question.destroyButtonLabel);
    question.answersHolder.appendChild(question.answersHead);
    question.addAnswerButton.insertBefore(question.addAnswerButtonPlus, question.addAnswerButton.firstChild);
    question.addAnswerButtonColumn.appendChild(question.addAnswerButton);
    question.addAnswerButtonRow.appendChild(question.addAnswerButtonColumn);
    question.answersHolder.appendChild(question.addAnswerButtonRow);
    question.holder.appendChild(question.answersHolder);
    quiz.nodes.questions.push(question);

    if (questionData.answers) {
      questionData.answers.map(function (current) {
        appendAnswerBlock_(objectIndex, current);
      });
    } else {
      appendAnswerBlock_(objectIndex);
      appendAnswerBlock_(objectIndex);
      appendAnswerBlock_(objectIndex);
    }

    insertDOMElement_(question);
    updateDestroyIcons_(quiz.nodes.questions);
  };
  /**
  * @private
  * Message block creating function
  * Creates a result message DOM element and appends it to the result messages list
  */


  var appendResultMessageBlock_ = function appendResultMessageBlock_(messageData) {
    var message = {};
    var objectIndex = quiz.nodes.resultMessages.length;
    messageData = messageData || {};
    message.holder = newDOMElement_('tr', {
      'class': 'quiz-form__message-holder',
      'data-object-index': objectIndex
    });
    message.messageColumn = newDOMElement_('td', {
      'class': 'quiz-form__message-message-column'
    });
    message.message = newDOMElement_('input', {
      'type': 'text',
      'class': 'quiz-form__message-message',
      'value': messageData.message || '',
      'required': '',
      'form': 'null'
    });
    message.scoreColumn = newDOMElement_('td', {
      'class': 'quiz-form__message-score-column'
    });
    message.score = newDOMElement_('input', {
      'type': 'number',
      'min': '0',
      'step': '1',
      'value': messageData.score || '0',
      'class': 'quiz-form__message-score',
      'required': '',
      'form': 'null'
    });
    message.destroyButtonColumn = newDOMElement_('td', {
      'class': 'quiz-form__message-destroy-button-column'
    });
    message.destroyButton = newDOMElement_('span', {
      'class': 'quiz-form__message-destroy-button'
    });
    message.destroyButtonCross = newDOMElement_('img', {
      'class': 'quiz-form__button-cross',
      'src': '/public/app/img/quizzes/cross.svg'
    });
    message.messageColumn.appendChild(message.message);
    message.scoreColumn.appendChild(message.score);
    message.destroyButton.appendChild(message.destroyButtonCross);
    message.destroyButtonColumn.appendChild(message.destroyButton);
    message.holder.appendChild(message.messageColumn);
    message.holder.appendChild(message.scoreColumn);
    message.holder.appendChild(message.destroyButtonColumn);
    quiz.nodes.resultMessages.push(message);
    insertDOMElement_(message);
    updateDestroyIcons_(quiz.nodes.resultMessages);
  };
  /**
  * @private
  * Object shifting function
  * Sets numbers in the question with child elements to given index
  * @param {object} obj - object in which numbers to be set
  * @param {number} index - index to which child elements' attributes to be set
  */


  var setObjectNumber_ = function setObjectNumber_(obj, numberTo) {
    obj.holder.dataset.objectIndex = numberTo - 1;

    if (obj.number) {
      obj.number.textContent = 'Вопрос ' + numberTo;
    }
  };
  /**
  * @private
  * Updating destroy icons function
  * Disables or enables destroy icon for the only element in container
  * @param {object} container - object in which icon is to be disabled or enabled
  */


  var updateDestroyIcons_ = function updateDestroyIcons_(container) {
    if (container.length <= 1) {
      container[0].destroyButton.style.display = 'none';

      if (container[0].firstChild) {
        container[0].firstChild.style.display = 'none';
      }
    } else {
      container[0].destroyButton.style.display = '';

      if (container[0].firstChild) {
        container[0].firstChild.style.display = '';
      }
    }
  };
  /**
  * @private
  * DOM element inserting function
  * Inserts DOM element to DOM
  * @param {object} obj - object in which DOM element to be inserted
  */


  var insertDOMElement_ = function insertDOMElement_(obj) {
    var before;
    var parent;

    if (obj.answers) {
      before = quiz.questionInsertAnchor;
      parent = quiz.form;
    } else if (obj.text) {
      before = quiz.nodes.questions[parseInt(obj.holder.dataset.questionIndex)].addAnswerButtonRow;
      parent = quiz.nodes.questions[parseInt(obj.holder.dataset.questionIndex)].answersHolder;
    } else {
      before = quiz.resultMessageInsertAnchor;
      parent = quiz.resultMessagesHolder;
    }

    parent.insertBefore(obj.holder, before);
  };
  /**
  * @private
  * Element object destroying function
  * Removes the DOM element of object from DOM and destroys object itself
  * @param {object} container - list where object is to be destroyed
  * @param {number} elementIndex - index of object in list
  */


  var destroyObject_ = function destroyObject_(container, elementIndex) {
    container[elementIndex].holder.parentNode.removeChild(container[elementIndex].holder);
    container.splice(elementIndex, 1);

    for (var i = elementIndex; i < container.length; i++) {
      setObjectNumber_(container[i], i + 1);
    }

    updateDestroyIcons_(container);
  };
  /**
  * @private
  * Event listeners setting function
  * Set event listeners for insert and destroy buttons and form submission
  */


  var setEventListeners_ = function setEventListeners_() {
    quiz.form.onsubmit = function (event) {
      event.preventDefault();
      var json = {
        'title': quiz.form.querySelector('[name="title"]').value,
        'description': quiz.form.querySelector('[name="description"]').value,
        'questions': [],
        'resultMessages': [],
        'shareMessage': quiz.form.querySelector('[name="shareMessage"]').value
      };

      for (var i in quiz.nodes.questions) {
        var jsonQuestion = {};
        jsonQuestion.title = quiz.nodes.questions[i].title.value;
        jsonQuestion.answers = [];

        for (var j in quiz.nodes.questions[i].answers) {
          var jsonAnswer = {};
          jsonAnswer.text = quiz.nodes.questions[i].answers[j].text.value;
          jsonAnswer.score = quiz.nodes.questions[i].answers[j].score.value;
          jsonAnswer.message = quiz.nodes.questions[i].answers[j].message.value;
          jsonQuestion.answers.push(jsonAnswer);
        }

        json.questions.push(jsonQuestion);
      }

      for (var i in quiz.nodes.resultMessages) {
        var jsonMessage = {};
        jsonMessage.score = quiz.nodes.resultMessages[i].score.value;
        jsonMessage.message = quiz.nodes.resultMessages[i].message.value;
        json.resultMessages.push(jsonMessage);
      }

      ;
      quiz.form.appendChild(newDOMElement_('input', {
        'type': 'hidden',
        'name': 'quiz_data',
        'value': JSON.stringify(json)
      }));
      quiz.form.submit();
    };

    quiz.questionInsertButton.onclick = function () {
      appendQuestionBlock_();
    };

    quiz.resultMessageInsertButton.onclick = function () {
      appendResultMessageBlock_();
    };

    quiz.form.onclick = function (event) {
      var container;
      var elementIndex;

      if (event.target.classList.contains('quiz-form__question-destroy-button')) {
        container = quiz.nodes.questions;
        elementIndex = parseInt(event.target.parentNode.dataset.objectIndex);
      } else if (event.target.parentNode.classList.contains('quiz-form__question-destroy-button')) {
        container = quiz.nodes.questions;
        elementIndex = parseInt(event.target.parentNode.parentNode.dataset.objectIndex);
      } else if (event.target.classList.contains('quiz-form__question-answer-destroy-button')) {
        container = quiz.nodes.questions[parseInt(event.target.parentNode.parentNode.dataset.questionIndex)].answers;
        elementIndex = parseInt(event.target.parentNode.parentNode.dataset.objectIndex);
      } else if (event.target.parentNode.classList.contains('quiz-form__question-answer-destroy-button')) {
        container = quiz.nodes.questions[parseInt(event.target.parentNode.parentNode.parentNode.dataset.questionIndex)].answers;
        elementIndex = parseInt(event.target.parentNode.parentNode.parentNode.dataset.objectIndex);
      } else if (event.target.classList.contains('quiz-form__message-destroy-button')) {
        container = quiz.nodes.resultMessages;
        elementIndex = parseInt(event.target.parentNode.parentNode.dataset.objectIndex);
      } else if (event.target.classList.contains('quiz-form__question-add-answer-button')) {
        container = null;
        elementIndex = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.dataset.objectIndex);
      }

      if (container === null) {
        appendAnswerBlock_(elementIndex);
      } else if (container !== undefined) {
        destroyObject_(container, elementIndex);
      }
    };
  };
  /**
  * @private
  * First result message adding function
  * Inserts result message with number 1 to the form
  */


  var addInitialResultMessage_ = function addInitialResultMessage_() {
    appendResultMessageBlock_();
  };
  /**
  * @private
  * First question adding function
  * Inserts question with number 1 to the form
  */


  var addInitialQuestion_ = function addInitialQuestion_() {
    appendQuestionBlock_();
  };
  /**
  * @private
  * Initial form parameters setting adding function
  * Sets form variable and insert buttons
  */


  var setInitialFormParams_ = function setInitialFormParams_() {
    quiz.form = document.forms.quizForm;
    quiz.questionInsertAnchor = document.getElementById('questionInsertAnchor');
    quiz.questionInsertButton = document.getElementById('questionInsertButton');
    quiz.resultMessageInsertAnchor = document.getElementById('resultMessageInsertAnchor');
    quiz.resultMessageInsertButton = document.getElementById('resultMessageInsertButton');
    quiz.resultMessagesHolder = document.getElementById('resultMessagesHolder');
  };
  /**
  * @private
  * Initial destroy icons updating function
  * Updates initially placed destroy icons
  */


  var updateInitialDestroyIcons_ = function updateInitialDestroyIcons_() {
    updateDestroyIcons_(quiz.nodes.questions);
    updateDestroyIcons_(quiz.nodes.resultMessages);
    updateDestroyIcons_(quiz.nodes.questions[0].answers);
  };

  var render = function render(quizData) {
    var questions = quizData.questions,
        resultMessages = quizData.resultMessages;
    document.querySelector('[name="title"]').value = quizData.title;
    document.querySelector('textarea[name="description"]').textContent = quizData.description;
    document.querySelector('[name="shareMessage"]').value = quizData.shareMessage;
    setInitialFormParams_();
    resultMessages.map(function (current) {
      appendResultMessageBlock_(current);
    });
    questions.map(function (current) {
      appendQuestionBlock_(current);
    });
    setEventListeners_();
    updateInitialDestroyIcons_();
  };
  /**
   * @public
   * Initialization function
   * Initializes quiz form: inserts initial DOM elements, sets initial event listeners, etc
   */


  quiz.init = function (quizData) {
    if (quizData) {
      render(quizData);
      return;
    }

    setInitialFormParams_();
    addInitialQuestion_();
    addInitialResultMessage_();
    setEventListeners_();
    updateInitialDestroyIcons_();
  };

  return quiz;
}({});

/***/ }),

/***/ "./public/app/js/modules/scrollUp.js":
/*!*******************************************!*\
  !*** ./public/app/js/modules/scrollUp.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* Module for scroll-up button
*/
module.exports = function () {
  /**
  * Page scroll offset to show scroll-up button
  */
  var SCROLL_UP_OFFSET = 100,
      button = null;

  var scrollPage = function scrollPage() {
    window.scrollTo(0, 0);
  };

  var windowScrollHandler = function windowScrollHandler() {
    if (window.pageYOffset > SCROLL_UP_OFFSET) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };
  /**
  * Init method
  * Fired after document is ready
  */


  var init = function init() {
    /** Find scroll-up button */
    button = document.createElement('DIV');
    button.classList.add('scroll-up');
    document.body.appendChild(button);
    /** Bind click event on scroll-up button */

    button.addEventListener('click', scrollPage);
    /** Global window scroll handler */

    window.addEventListener('scroll', windowScrollHandler);
  };

  return {
    init: init
  };
}();

/***/ }),

/***/ "./public/app/js/modules/sharer.js":
/*!*****************************************!*\
  !*** ./public/app/js/modules/sharer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module for social sharing
 */
module.exports = function (sharer) {
  /**
   * @param  {Object} data - Info about item we want to share
   */
  sharer.vkontakte = function (data) {
    var link = 'https://vk.com/share.php?';
    link += 'url=' + data.url;
    link += '&title=' + data.title;
    link += '&description=' + data.desc;
    link += '&image=' + data.img;
    link += '&noparse=true';
    sharer.popup(link, 'vkontakte');
  };

  sharer.facebook = function (data) {
    var FB_APP_ID = 1740455756240878,
        link = 'https://www.facebook.com/dialog/share?display=popup';
    link += '&app_id=' + FB_APP_ID;
    link += '&href=' + data.url;
    link += '&redirect_uri=' + document.location.href;
    sharer.popup(link, 'facebook');
  };

  sharer.twitter = function (data) {
    var link = 'https://twitter.com/share?';
    link += 'text=' + data.title;
    link += '&url=' + data.url;
    link += '&counturl=' + data.url;
    sharer.popup(link, 'twitter');
  };

  sharer.telegram = function (data) {
    var link = 'https://telegram.me/share/url';
    link += '?text=' + data.title;
    link += '&url=' + data.url;
    sharer.popup(link, 'telegram');
  };
  /**
   * @param  {String} url
   * @param  {String} socialType
   */


  sharer.popup = function (url, socialType) {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    /**
    * Write analytics goal
    */

    if (window.yaCounter32652805) {
      window.yaCounter32652805.reachGoal('article-share', function () {}, this, {
        type: socialType,
        url: url
      });
    }
  };
  /**
   * Init sharer
   * @param  {String} buttonsSelector  - on wich elements should bind sharing
   */


  sharer.init = function (buttonsSelector) {
    console.assert(buttonsSelector, 'Sharer: buttons selector is missed');
    var shareButtons = document.querySelectorAll(buttonsSelector);

    for (var i = shareButtons.length - 1; i >= 0; i--) {
      shareButtons[i].addEventListener('click', sharer.click, true);
    }
  };
  /**
   * @param  {Event} event
   */


  sharer.click = function (event) {
    var target = event.target;
    /**
    * Social provider stores in data 'shareType' attribute on share-button
    * But click may be fired on child-element in button, so we need to handle it.
    */

    var type = target.dataset.shareType || target.parentNode.dataset.shareType;
    if (!sharer[type]) return;
    /**
    * Sanitize share params
    * @todo test for taint strings
    */
    // for (key in window.shareData){
    //      window.shareData[key] = encodeURIComponent(window.shareData[key]);
    // }

    var shareData = {
      url: target.dataset.url || target.parentNode.dataset.url,
      title: target.dataset.title || target.parentNode.dataset.title,
      desc: target.dataset.desc || target.parentNode.dataset.desc,
      img: target.dataset.img || target.parentNode.dataset.title
    };
    /**
    * Fire click handler
    */

    sharer[type](shareData);
  };

  return sharer;
}({});

/***/ }),

/***/ "./public/app/js/modules/showMoreNews.js":
/*!***********************************************!*\
  !*** ./public/app/js/modules/showMoreNews.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * codex.showMoreNews module
 * Used in news block
 * Reveals more news when appender button is fired
 * Usage onclick="codex.showMoreNews.init( this );"
 */
var showMoreNews = function () {
  /**
   * Helper for 'show more news' button
   * @param {Element} button   - appender button
   */
  var init = function init(button) {
    var PORTION = 5; // Amount of news shown each time appender button is fired

    var news = document.querySelectorAll('.news__list_item'),
        hided = [];

    for (var i = 0, newsItem; !!(newsItem = news[i]); i++) {
      if (newsItem.classList.contains('news__list_item--hidden')) {
        hided.push(newsItem);
      }
    }
    /**
     * @param {Element} item
     * Remove PORTION of first elements from array hided
     */


    hided.splice(0, PORTION).map(function (item) {
      item.classList.remove('news__list_item--hidden');
    });

    if (!hided.length) {
      button.classList.add('news__list_item--hidden');
    }
  };

  return {
    init: init
  };
}({});

module.exports = showMoreNews;

/***/ }),

/***/ "./public/app/js/modules/transport.js":
/*!********************************************!*\
  !*** ./public/app/js/modules/transport.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* Ajax file transport module
* @author Savchenko Peter (vk.com/specc)
* @param {Object} transport
*/
module.exports = function (transport) {
  transport.currentButtonClicked = {};
  /**
   * @param {Element} buttons
   */

  transport.init = function (buttons) {
    transport.form = document.getElementById('transportForm');
    transport.input = document.getElementById('transportInput');

    for (var i = buttons.length - 1; i >= 0; i--) {
      buttons[i].addEventListener('click', transport.buttonCallback, false);
    }

    transport.input.addEventListener('change', transport.submitCallback, false);
  };
  /**
   * @param {Event} event
   */


  transport.buttonCallback = function () {
    var action = this.dataset.action,
        targetId = this.dataset.id,
        isMultiple = !!this.dataset.multiple || false;
    transport.fillForm({
      action: action,
      id: targetId
    });

    if (isMultiple) {
      transport.form.multiple = 'multiple';
    }

    transport.currentButtonClicked = this;
    transport.input.click();
  };
  /**
  * Append hidden inputs to tranport form
  * @param {Object} data
  */


  transport.fillForm = function (data) {
    var input, alreadyAddedInput;

    for (var field in data) {
      if (typeof data[field] == 'undefined') {
        continue;
      }

      alreadyAddedInput = transport.form.querySelector('input[name=' + field + ']');

      if (typeof alreadyAddedInput != 'undefined' && alreadyAddedInput !== null) {
        input = alreadyAddedInput;
      } else {
        input = document.createElement('input');
      }

      input.type = 'hidden';
      input.name = field;
      input.value = data[field];
      transport.form.appendChild(input);
    }
  };

  transport.submitCallback = function () {
    var FILE_MAX_SIZE = 30 * 1024 * 1024; // 30 MB

    var files = transport.getFileObject(this);

    for (var i = files.length - 1; i >= 0; i--) {
      /** Validate file extension */
      if (!transport.validateExtension(files[i]) || !transport.validateMIME(files[i])) {
        window.console && console.warn('Wrong file type: %o', +files[i].name);
        return;
      }
      /** Validate file size */


      if (!transport.validateSize(files[i], FILE_MAX_SIZE)) {
        window.console && console.warn('File size exceeded limit: %o MB', files[i].size / (1024 * 1024).toFixed(2));
        return;
      }
    }

    transport.currentButtonClicked.className += ' loading';
    transport.form.submit();
  };
  /**
  * Fires from transport-frame window
  * @param {Object} response
  */


  transport.response = function (response) {
    transport.currentButtonClicked.className = transport.currentButtonClicked.className.replace('loading', '');

    if (response.callback) {
      eval(response.callback);
    }

    if (response.result) {
      if (response.result == 'error') {
        window.console && console.warn(response.error_description || 'error');
      }
    }
  };
  /**
   * @param  {[Element]} fileInput
   * @return {[type]}           [description]
   */


  transport.getFileObject = function (fileInput) {
    if (!fileInput) return false;
    /**
    * Workaround with IE that doesn't support File API
    * @todo test and delete this crutch
    */

    return typeof ActiveXObject == 'function' ? new ActiveXObject('Scripting.FileSystemObject').getFile(fileInput.value) : fileInput.files;
  };
  /**
   * @param {Object} accept
   * @param {Object} fileObj
   * @return {Boolean}
   */


  transport.validateMIME = function (fileObj, accept) {
    accept = typeof accept == 'array' ? accept : ['image/jpeg', 'image/png'];

    for (var i = accept.length - 1; i >= 0; i--) {
      if (fileObj.type == accept[i]) return true;
    }

    return false;
  };

  transport.validateExtension = function (fileObj, accept) {
    var ext = fileObj.name.match(/\.(\w+)($|#|\?)/);
    if (!ext) return false;
    ext = ext[1].toLowerCase();
    accept = typeof accept == 'array' ? accept : ['jpg', 'jpeg', 'png'];

    for (var i = accept.length - 1; i >= 0; i--) {
      if (ext == accept[i]) return true;
    }

    return false;
  };

  transport.validateSize = function (fileObj, maxSize) {
    return fileObj.size < maxSize;
  };

  return transport;
}({});

/***/ }),

/***/ "./public/app/js/modules/vkWidget.js":
/*!*******************************************!*\
  !*** ./public/app/js/modules/vkWidget.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module for VK community widget: https://vk.com/dev/Community
 * Adds vkWidget to page
 */
var vkWidget = function () {
  var targetId,
      targetView,
      communityId,
      VK_API_URI = 'https://vk.com/js/api/openapi.js';
  /**
   * Initialization of module
   *
   * @param  {[Object]} params
   * @param {int} params.id - element id, where widget is appended
   * @param {int} params.display.mode - widget appearance ("3" - show people in the community)
   * @param {int|string} params.display.width - set widget width to a fixed number or auto
   * @param {int} params.communityId - id of VK community
   *
   * @example
   * vkWidget.init({
   *   id: 'vk_groups',
   *   display: {
   *       'mode': 3,
   *       'width': 'auto'
   *   },
   *   communityId: 103229636
   * });
   */

  var init = function init(params) {
    targetId = params.id || null, targetView = params.display || {
      'mode': 3,
      'width': 'auto'
    }, communityId = params.communityId || 0;

    if (document.getElementById(targetId) == undefined) {
      console.log('Cannot find element with id ' + targetId);
      return;
    }

    ;
    loadScript();
  };
  /**
   * Loads VK Api script to initialize a widget
   * and appends it to page
   */


  var loadScript = function loadScript() {
    var vkApiScript = document.createElement('SCRIPT');
    vkApiScript.src = VK_API_URI;
    vkApiScript.setAttribute('async', 'true');
    vkApiScript.onload = showWidget;
    document.body.appendChild(vkApiScript);
  };
  /**
   * Runs widget initiating from vkApi
   */


  var showWidget = function showWidget() {
    window.VK.Widgets.Group(targetId, targetView, communityId);
  };

  return {
    init: init
  };
}({});

module.exports = vkWidget;

/***/ }),

/***/ "./public/app/js/modules/writing.js":
/*!******************************************!*\
  !*** ./public/app/js/modules/writing.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _editor = __webpack_require__(/*! ./editor */ "./public/app/js/modules/editor.js");

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Writing =
/*#__PURE__*/
function () {
  function Writing() {
    _classCallCheck(this, Writing);
  }

  _createClass(Writing, [{
    key: "init",
    value: function init(settings) {
      _editor2.default.init(settings); // import(/* webpackChunkName: "codex-editor" */ './editor')
      //     .then(({default: cdxEditor}) => {
      //
      //         cdxEditor.init(settings);
      //
      //     });

    }
  }]);

  return Writing;
}();

exports.default = Writing;
;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map