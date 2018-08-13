!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("xgplayer")):"function"==typeof define&&define.amd?define(["xgplayer"],t):"object"==typeof exports?exports["xgplayer-music.js"]=t(require("xgplayer")):e["xgplayer-music.js"]=t(e.xgplayer)}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(11)),i=a(r(10));function a(e){return e&&e.__esModule?e:{default:e}}var s=void 0,l=o.default.util,p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=o.default.util,n=r.deepCopy({controls:!0,mediaType:"audio",ignores:["fullscreen","start","definition","makeBullet","textTrack","loading","pc","mobile","playbackRate","replay","volume","error","poster"]},e),a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return a.rawConfig=e,a.list="Array"===r.typeOf(n.url)?n.url:[{src:n.url,name:n.name}],a.history=[],a.index=0,n.lyric&&(a.__lyric__=new i.default(n.lyric,n.animateInterval),a.__lyric__.bind(a)),r.addClass(a.root,"xgplayer-music"),Object.defineProperty(a,"src",{get:function(){return this.video.currentSrc},set:function(e){var t="String"===r.typeOf(e)?{src:e,name:""}:e;this.history.push(t),this.video.src=t.src},configurable:!0}),a.start(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"add",value:function(){}},{key:"remove",value:function(){}},{key:"random",value:function(){var e=this.list.length;return this.index=Math.ceil(Math.random()*e),this.list[this.index]}},{key:"next",value:function(){switch(console.log("next,mode="+this.mode),this.mode){case"order":case"loop":this.index+1<this.list.length&&(this.index++,this.src=this.list[this.index].src);break;default:var e=this.random();e&&(this.src=e.src)}}},{key:"prev",value:function(){switch(console.log("prev,mode="+this.mode),this.mode){case"order":case"loop":this.index-1>-1&&this.list.length>0&&(this.index--,this.src=this.list[this.index].src);break;default:var e=this.random();e&&(this.src=e.src)}}},{key:"lyric",set:function(e){"Array"===l.typeOf(e)?(this.__lyric__&&this.__lyric__.unbind(this),this.__lyric__=new i.default(e[0],e[1]),this.__lyric__.bind(this)):"String"===l.typeOf(e)&&(this.__lyric__&&this.__lyric__.unbind(this),this.__lyric__=new i.default(e),this.__lyric__.bind(this))},get:function(){return this.__lyric__?this.__lyric__.rawTxt:""}},{key:"lyricLine",get:function(){return this.__lyric__?this.__lyric__.line:-1}},{key:"lyricList",get:function(){return this.__lyric__?this.__lyric__.list:[]}},{key:"mode",get:function(){return s||t.ModeType[0]},set:function(e){switch(e){case 0:case 1:case 2:s=t.ModeType[e]}}}],[{key:"ModeType",get:function(){return["order","random","loop"]}}]),t}();t.default=p,e.exports=t.default},function(e,t,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,p=0,c=[],u=r(6);function f(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(m(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(m(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function d(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function x(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),c.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function y(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),h(t,e.attrs),x(e,t),t}function h(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function m(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=p++;r=l||(l=y(t)),n=_.bind(null,r,a,!1),o=_.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),x(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=u(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){g(r),r.href&&URL.revokeObjectURL(r.href)}):(r=y(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){g(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=d(e,t);return f(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}e&&f(d(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var v,b=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,'.xgplayer-music .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;cursor:default}.xgplayer-music .xgplayer-controls .xgplayer-prev{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-play{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.xgplayer-music .xgplayer-controls .xgplayer-play .xgplayer-tips{display:none}.xgplayer-music .xgplayer-controls .xgplayer-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-poster{position:static;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;width:40px;height:40px;text-align:center;vertical-align:middle;position:relative;top:50%;margin-top:-17px}.xgplayer-music .xgplayer-controls .xgplayer-poster img{max-width:100%;max-height:100%}.xgplayer-music .xgplayer-controls .xgplayer-progress{position:relative;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;top:70%;left:20px;margin-top:-11px;-webkit-box-flex:99;-ms-flex:99;flex:99}.xgplayer-music .xgplayer-controls .xgplayer-progress>*{height:3px;margin-top:8.5px}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-progress-played:after{top:-4px;width:10px;height:10px;content:" ";display:block}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-tips{display:none!important}.xgplayer-music .xgplayer-controls .xgplayer-time{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;margin-left:30px;line-height:1;position:relative;top:55%}.xgplayer-music .xgplayer-controls .xgplayer-placeholder{-webkit-box-ordinal-group:1000;-ms-flex-order:999;order:999;width:0}.xgplayer-music .xgplayer-controls .xgplayer-icon{padding-top:5px}.xgplayer-music .xgplayer-controls .xgplayer-name{position:absolute;left:175px;bottom:50%;font-size:12px;color:#ddd}.xgplayer-music{font-size:14px}',""])},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(1)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){"use strict";var n,o=r(0),i=(n=o)&&n.__esModule?n:{default:n};r(4);i.default.install("theme-lyric",function(e){e.config.theme})},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,'.xgplayer-music .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;cursor:default}.xgplayer-music .xgplayer-controls .xgplayer-prev{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-play{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.xgplayer-music .xgplayer-controls .xgplayer-play .xgplayer-tips{display:none}.xgplayer-music .xgplayer-controls .xgplayer-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-poster{position:static;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;width:40px;height:40px;text-align:center;vertical-align:middle;position:relative;top:50%;margin-top:-17px}.xgplayer-music .xgplayer-controls .xgplayer-poster img{max-width:100%;max-height:100%}.xgplayer-music .xgplayer-controls .xgplayer-progress{position:relative;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;top:70%;left:20px;margin-top:-11px;-webkit-box-flex:99;-ms-flex:99;flex:99}.xgplayer-music .xgplayer-controls .xgplayer-progress>*{height:3px;margin-top:8.5px}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-progress-played:after{top:-4px;width:10px;height:10px;content:" ";display:block}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-tips{display:none!important}.xgplayer-music .xgplayer-controls .xgplayer-time{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;margin-left:30px;line-height:1;position:relative;top:55%}.xgplayer-music .xgplayer-controls .xgplayer-placeholder{-webkit-box-ordinal-group:1000;-ms-flex-order:999;order:999;width:0}.xgplayer-music .xgplayer-controls .xgplayer-icon{padding-top:5px}.xgplayer-music .xgplayer-controls .xgplayer-name{position:absolute;left:175px;bottom:50%;font-size:12px;color:#ddd}',""])},function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(1)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){"use strict";var n,o=r(0),i=(n=o)&&n.__esModule?n:{default:n};r(8);i.default.install("theme-default",function(e){var t=e.config,r=e.constructor.util,n=e.controls;if(t.controls){r.addClass(e.root,"xgplayer-music-default"),t.theme&&"default"!==t.theme||(t.width||(e.config.width="100%",e.root.style.width="100%"),t.height||(e.config.height="50px",e.root.style.height="50px"));var o=r.createDom("xg-prev",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform = "scale(0.025 0.025)"\n            d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>\n        </svg></xg-icon>',{},"xgplayer-prev");n.appendChild(o);var i=["click","touchstart"];i.forEach(function(t){o.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.prev()},!1)});var a=r.createDom("xg-next",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.025 0.025)"\n            d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n        </svg></xg-icon>',{},"xgplayer-next");n.appendChild(a),i.forEach(function(t){a.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.next()},!1)});var s=r.createDom("xg-name",""+e.config.name,{},"xgplayer-name");n.appendChild(s);var l=r.createDom("xg-poster",'<img src="'+e.config.poster+'">',{},"xgplayer-poster");n.appendChild(l)}else e.root.style.display="none"})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function e(t){o(this,e),this.regRule=/(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g,this.regRule.test(t)?this.time=60*RegExp.$1+1*RegExp.$2+1*("0."+RegExp.$3):this.time=-1};t.LyricTime=i;var a=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;o(this,e),this.rawTxt=t,this.txt=t.replace(/^[\r\n]|[\r\n]$/g,"").match(/(\[.*\])[^[]+/g),this.isDynamic=[].concat(t.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length===this.txt.length&&this.txt.length>1,this.animateInterval=r,this.list=this.txt.map(function(e,t){var r=/(\[[\d:\S]+\])([^[]+)/g.test(e),n=RegExp.$1,o=RegExp.$2;return{time:r?new i(n).time:-1,lyric:o,idx:t}}),this.line=0}return n(e,[{key:"adjust",value:function(){for(var e,t,r=this.list,n=0,o=r.length;n<o;n++){for(e=n+1;e<o&&!(r[e].time>r[n].time);e++);if(e<o){var i=(r[e].time-r[n].time)/(e-n);for(t=n+1;t<e;t++)r[t].time=r[t-1].time+i}}}},{key:"find",value:function(e){var t=this.list,r=this.animateInterval;return t.filter(function(n,o){var i=n.time;return e>=i&&t[o++]&&1*e+1*r<=t[o++].time})}},{key:"bind",value:function(e){var t=this;return!!this.isDynamic&&(this.__handle__=function(){var r=t.find(e.currentTime)[0];r.idx!==t.line&&(t.line=r.idx,e.emit("lyricUpdate",r))}.bind(this,e),e.on("timeupdate",this.__handle__),!0)}},{key:"unbind",value:function(e){this.__handle__&&(e.off("lybricUpdate",this.__handle__),delete this.__handle__)}}]),e}();t.default=a},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),i=(n=o)&&n.__esModule?n:{default:n};r(9),r(5),t.default=i.default,e.exports=t.default},function(e,t,r){e.exports=r(12)}])});