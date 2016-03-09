window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return typeof e===t}var i,a,c,l="2.8.3",s={},u=!0,p=t.documentElement,f="modernizr",d=t.createElement(f),y=d.style,h=({}.toString,{}),m=[],g=m.slice,v={}.hasOwnProperty;c=o(v,"undefined")||o(v.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return v.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=g.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(g.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(g.call(arguments)))};return r});for(var b in h)c(h,b)&&(a=b.toLowerCase(),s[a]=h[b](),m.push((s[a]?"":"no-")+a));return s.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(p.className+=" "+(t?"":"no-")+e),s[e]=t}return s},r(""),d=i=null,s._version=l,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+m.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();v=1,e?e.t?y(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):v=0}function l(e,n,r,o,i,l,s){function u(t){if(!d&&a(p.readyState)&&(b.r=d=1,!v&&c(),p.onload=p.onreadystatechange=null,t)){"img"!=e&&y(function(){w.removeChild(p)},50);for(var r in C[n])C[n].hasOwnProperty(r)&&C[n][r].onload()}}var s=s||f.errorTimeout,p=t.createElement(e),d=0,m=0,b={t:r,s:n,e:i,a:l,x:s};1===C[n]&&(m=1,C[n]=[]),"object"==e?p.data=n:(p.src=n,p.type=e),p.width=p.height="0",p.onerror=p.onload=p.onreadystatechange=function(){u.call(this,m)},g.splice(o,0,b),"img"!=e&&(m||2===C[n]?(w.insertBefore(p,j?null:h),y(u,s)):C[n].push(p))}function s(e,t,n,r,i){return v=0,t=t||"j",o(e)?l("c"==t?O:E,e,t,this.i++,n,r,i):(g.splice(this.i++,0,e),1==g.length&&c()),this}function u(){var e=f;return e.loader={load:s,i:0},e}var p,f,d=t.documentElement,y=e.setTimeout,h=t.getElementsByTagName("script")[0],m={}.toString,g=[],v=0,b="MozAppearance"in d.style,j=b&&!!t.createRange().compareNode,w=j?d:h.parentNode,d=e.opera&&"[object Opera]"==m.call(e.opera),d=!!t.attachEvent&&!d,E=b?"object":d?"script":"img",O=d?"script":E,S=Array.isArray||function(e){return"[object Array]"==m.call(e)},x=[],C={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=x.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=x[n](i);return i}function a(e,o,i,a,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(C[l.url]?l.noexec=!0:C[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(l.origUrl,c,a),s&&s(l.origUrl,c,a),C[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(p=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}),a(e,p,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(p)?p=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}:p[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(f[l])),a(e[l],p,t,l,s))}else!n&&d()}var c,l,s=!!e.test,u=e.load||e.both,p=e.callback||i,f=p,d=e.complete||i;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,p=this.yepnope.loader;if(o(e))a(e,0,p,0);else if(S(e))for(l=0;l<e.length;l++)s=e[l],o(s)?a(s,0,p,0):S(s)?f(s):Object(s)===s&&c(s,p);else Object(e)===e&&c(e,p)},f.addPrefix=function(e,t){T[e]=t},f.addFilter=function(e){x.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",p=function(){t.removeEventListener("DOMContentLoaded",p,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,p,d=t.createElement("script"),o=o||f.errorTimeout;d.src=e;for(p in r)d.setAttribute(p,r[p]);n=s?c:n||i,d.onreadystatechange=d.onload=function(){!u&&a(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},y(function(){u||(u=1,n(1))},o),l?d.onload():h.parentNode.insertBefore(d,h)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s,o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(h.parentNode.insertBefore(o,h),y(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};