/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-testallprops-testprop-teststyles !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,u;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],u=s.split("."),1===u.length?Modernizr[u[0]]=o:(!Modernizr[u[0]]||Modernizr[u[0]]instanceof Boolean||(Modernizr[u[0]]=new Boolean(Modernizr[u[0]])),Modernizr[u[0]][u[1]]=o),_.push((o?"":"no-")+u.join("-"))}}function i(e){var n=z.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?z.className.baseVal=n:z.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(){var e=n.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var i,u,a,l,c="modernizr",p=s("div"),d=f();if(parseInt(r,10))for(;r--;)a=s("div"),a.id=o?o[r]:c+(r+1),p.appendChild(a);return i=s("style"),i.type="text/css",i.id="s"+c,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",l=z.style.overflow,z.style.overflow="hidden",z.appendChild(d)),u=t(p,e),d.fake?(d.parentNode.removeChild(d),z.style.overflow=l,z.offsetHeight):p.parentNode.removeChild(p),!!u}function c(e,n){if("object"==typeof e)for(var t in e)L(e,t)&&c(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),i([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function p(e,n){return!!~(""+e).indexOf(n)}function d(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n){return function(){return e.apply(n,arguments)}}function m(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?v(o,t||n):o);return!1}function h(e,n,o,i){function a(){l&&(delete k.style,delete k.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=d(e,o);if(!r(f,"undefined"))return f}for(var l,c,v,m,h,y=["modernizr","tspan"];!k.style;)l=!0,k.modElem=s(y.shift()),k.style=k.modElem.style;for(v=e.length,c=0;v>c;c++)if(m=e[c],h=k.style[m],p(m,"-")&&(m=u(m)),k.style[m]!==t){if(i||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{k.style[m]=o}catch(g){}if(k.style[m]!=h)return a(),"pfx"==n?m:!0}return a(),!1}function y(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),u=(e+" "+P.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?h(u,n,o,i):(u=(e+" "+b.join(s+" ")+s).split(" "),m(u,n,t))}function g(e,n,r){return y(e,t,t,n,r)}var _=[],C=[],S={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];S._prefixes=w;var x="Moz O ms Webkit",b=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=b;var P=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=P;var E=function(n){var r,o=w.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var u=w[s],a=u.toUpperCase()+"_"+r;if(a in i)return"@-"+u.toLowerCase()+"-"+n}return!1};S.atRule=E;var z=n.documentElement,T="svg"===z.nodeName.toLowerCase(),j=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=s(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();S.hasEvent=j;var A=function(e,n){var t=!1,r=s("div"),o=r.style;if(e in o){var i=b.length;for(o[e]=n,t=o[e];i--&&!t;)o[e]="-"+b[i]+"-"+n,t=o[e]}return""===t&&(t=!1),t};S.prefixedCSSValue=A;var N=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();S.mq=N;var L;S.testStyles=l;!function(){var e={}.hasOwnProperty;L=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),S._l={},S.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=c});var O={elem:s("modernizr")};Modernizr._q.push(function(){delete O.elem});var k={style:O.elem.style};Modernizr._q.unshift(function(){delete k.style});S.testProp=function(e,n,r){return h([e],t,n,r)};S.testAllProps=y;var q=S.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=u(e)),n?y(e,n,t):y(e,"pfx"))};S.prefixedCSS=function(e){var n=q(e);return n&&a(n)};S.testAllProps=g,o(),i(_),delete S.addTest,delete S.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);