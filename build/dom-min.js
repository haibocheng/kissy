/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dom/attr",function(j,b,s,i){function x(d){if(j.isArray(d)){for(var a=0;a<d.length;a++)d[a]=x(d[a]);return d}else return d+h}var y=document.documentElement,k=!y.hasAttribute,l=y.textContent!==i?"textContent":"innerText",h="",u=b._isElementNode,o=/^(?:href|src|style)/,r=/^(?:href|src|colspan|rowspan)/,v=/\r/g,t=/^(?:radio|checkbox)/,f={readonly:"readOnly"},m={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};k&&j.mix(f,{"for":"htmlFor","class":"className"});var q={tabindex:{getter:function(d){return d.tabIndex},
setter:function(d,a){if(isNaN(parseInt(a))){d.removeAttribute("tabindex");d.removeAttribute("tabIndex")}else d.tabIndex=a}},style:{getter:function(d){return d.style.cssText},setter:function(d,a){d.style.cssText=a}},checked:{setter:function(d,a){d.checked=!!a}},disabled:{setter:function(d,a){d.disabled=!!a}}};j.mix(b,{attr:function(d,a,c,g){if(j.isPlainObject(a)){g=c;for(var e in a)b.attr(d,e,a[e],g)}else if(a=j.trim(a)){a=a.toLowerCase();if(g&&m[a])return b[a](d,c);a=f[a]||a;var n=q[a];if(c===i){d=
b.get(d);if(!u(d))return null;if(n&&n.getter)return n.getter(d);var p;o.test(a)||(p=d[a]);if(p===i)p=d.getAttribute(a);if(k)if(r.test(a))p=d.getAttribute(a,2);return p===i?null:p}else j.each(b.query(d),function(w){if(u(w))n&&n.setter?n.setter(w,c):w.setAttribute(a,h+c)})}},removeAttr:function(d,a){a=a.toLowerCase();j.each(b.query(d),function(c){if(u(c)){b.attr(c,a,h);c.removeAttribute(a)}})},hasAttr:k?function(d,a){a=a.toLowerCase();var c=b.get(d).getAttributeNode(a);return!!(c&&c.specified)}:function(d,
a){a=a.toLowerCase();return b.get(d).hasAttribute(a)},val:function(d,a){if(a===i){var c=b.get(d);if(!u(c))return null;if(c&&c.nodeName.toUpperCase()==="option".toUpperCase())return(c.attributes.value||{}).specified?c.value:c.text;if(c&&c.nodeName.toUpperCase()==="select".toUpperCase()){var g=c.selectedIndex,e=c.options;if(g<0)return null;else if(c.type==="select-one")return b.val(e[g]);c=[];for(var n=0,p=e.length;n<p;++n)e[n].selected&&c.push(b.val(e[n]));return c}if(s.webkit&&t.test(c.type))return c.getAttribute("value")===
null?"on":c.value;return(c.value||h).replace(v,h)}j.each(b.query(d),function(w){if(w&&w.nodeName.toUpperCase()==="select".toUpperCase()){a=x(a);var z=j.makeArray(a),B=w.options,A;n=0;for(p=B.length;n<p;++n){A=B[n];A.selected=j.inArray(b.val(A),z)}if(!z.length)w.selectedIndex=-1}else if(u(w))w.value=a})},text:function(d,a){if(a===i){var c=b.get(d);if(u(c))return c[l]||h;else if(b._nodeTypeIs(c,3))return c.nodeValue;return null}else j.each(b.query(d),function(g){if(u(g))g[l]=a;else if(b._nodeTypeIs(g,
3))g.nodeValue=a})}});return b},{requires:["dom/base","ua"]});KISSY.add("dom/base",function(j,b){function s(i,x){return i&&i.nodeType===x}return{_isElementNode:function(i){return s(i,1)},_getWin:function(i){return i&&"scrollTo"in i&&i.document?i:s(i,9)?i.defaultView||i.parentWindow:i==b?window:false},_nodeTypeIs:s,_isNodeList:function(i){return i&&!i.nodeType&&i.item&&!i.setTimeout}}});
KISSY.add("dom/class",function(j,b,s){function i(k,l,h,u){if(!(l=j.trim(l)))return u?false:s;k=b.query(k);var o=0,r=k.length,v=l.split(x);for(l=[];o<v.length;o++){var t=j.trim(v[o]);t&&l.push(t)}for(o=0;o<r;o++){v=k[o];if(b._isElementNode(v)){v=h(v,l,l.length);if(v!==s)return v}}if(u)return false;return s}var x=/[\.\s]\s*\.?/,y=/[\n\t]/g;j.mix(b,{hasClass:function(k,l){return i(k,l,function(h,u,o){if(h=h.className){h=" "+h+" ";for(var r=0,v=true;r<o;r++)if(h.indexOf(" "+u[r]+" ")<0){v=false;break}if(v)return true}},
true)},addClass:function(k,l){i(k,l,function(h,u,o){var r=h.className;if(r){var v=" "+r+" ";r=r;for(var t=0;t<o;t++)if(v.indexOf(" "+u[t]+" ")<0)r+=" "+u[t];h.className=j.trim(r)}else h.className=l},s)},removeClass:function(k,l){i(k,l,function(h,u,o){var r=h.className;if(r)if(o){r=(" "+r+" ").replace(y," ");for(var v=0,t;v<o;v++)for(t=" "+u[v]+" ";r.indexOf(t)>=0;)r=r.replace(t," ");h.className=j.trim(r)}else h.className=""},s)},replaceClass:function(k,l,h){b.removeClass(k,l);b.addClass(k,h)},toggleClass:function(k,
l,h){var u=j.isBoolean(h),o;i(k,l,function(r,v,t){for(var f=0,m;f<t;f++){m=v[f];o=u?!h:b.hasClass(r,m);b[o?"removeClass":"addClass"](r,m)}},s)}});return b},{requires:["dom/base"]});
KISSY.add("dom/create",function(j,b,s,i){function x(e,n,p,w){if(p){var z=j.guid("ks-tmp-"),B=RegExp(v);n+='<span id="'+z+'"></span>';j.available(z,function(){var A=b.get("head"),C,F,D,G,H,E;for(B.lastIndex=0;C=B.exec(n);)if((D=(F=C[1])?F.match(f):false)&&D[2]){C=k.createElement("script");C.src=D[2];if((G=F.match(m))&&G[2])C.charset=G[2];C.async=true;A.appendChild(C)}else if((E=C[2])&&E.length>0)j.globalEval(E);(H=k.getElementById(z))&&b.remove(H);j.isFunction(w)&&w()});y(e,n)}else{y(e,n);j.isFunction(w)&&
w()}}function y(e,n){n=(n+"").replace(v,"");try{e.innerHTML=n}catch(p){for(;e.firstChild;)e.removeChild(e.firstChild);n&&e.appendChild(b.create(n))}}var k=document,l=s.ie,h=b._nodeTypeIs,u=b._isElementNode,o=k.createElement("div"),r=/<(\w+)/,v=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,t=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,f=/\ssrc=(['"])(.*?)\1/i,m=/\scharset=(['"])(.*?)\1/i;j.mix(b,{create:function(e,n,p){if(h(e,1)||h(e,3)){n=e;p=n.cloneNode(true);if(s.ie<8)p.innerHTML=n.innerHTML;return p}if(!(e=
j.trim(e)))return null;var w=null;w=b._creators;var z,B="div",A;if(z=t.exec(e))w=(p||k).createElement(z[1]);else{if((z=r.exec(e))&&(A=z[1])&&j.isFunction(w[A=A.toLowerCase()]))B=A;e=w[B](e,p).childNodes;if(e.length===1)p=e[0].parentNode.removeChild(e[0]);else{e=e;A=p||k;p=null;if(e&&(e.push||e.item)&&e[0]){A=A||e[0].ownerDocument;p=A.createDocumentFragment();if(e.item)e=j.makeArray(e);A=0;for(w=e.length;A<w;A++)p.appendChild(e[A])}p=p}w=p}p=w;u(p)&&j.isPlainObject(n)&&b.attr(p,n,true);return p},_creators:{div:function(e,
n){var p=n?n.createElement("div"):o;p.innerHTML=e;return p}},html:function(e,n,p,w){if(n===i){e=b.get(e);if(u(e))return e.innerHTML;return null}else j.each(b.query(e),function(z){u(z)&&x(z,n,p,w)})},remove:function(e){j.each(b.query(e),function(n){n.parentNode&&n.parentNode.removeChild(n)})}});if(l||s.gecko||s.webkit){var q=b._creators,d=b.create,a=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,c={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},g;for(g in c)(function(e){q[g]=
function(n,p){return d("<"+e+">"+n+"</"+e+">",null,p)}})(c[g]);if(l){q.script=function(e,n){var p=n?n.createElement("div"):o;p.innerHTML="-"+e;p.removeChild(p.firstChild);return p};if(l<8)q.tbody=function(e,n){var p=d("<table>"+e+"</table>",null,n),w=p.children.tags("tbody")[0];p.children.length>1&&w&&!a.test(e)&&w.parentNode.removeChild(w);return p}}j.mix(q,{optgroup:q.option,th:q.td,thead:q.tbody,tfoot:q.tbody,caption:q.tbody,colgroup:q.tbody})}return b},{requires:["./base","ua"]});
KISSY.add("dom/data",function(j,b,s){var i=window,x="_ks_data_"+j.now(),y={},k={},l={};l.applet=1;l.object=1;l.embed=1;j.mix(b,{hasData:function(h,u){var o=b.get(h),r;if(!o||o.nodeName&&l[o.nodeName.toLowerCase()])return false;if(o==i)o=k;r=o&&o.nodeType;if(o=(r?y:o)[r?o[x]:x])if(u!==s){if(u in o)return true}else return true;return false},data:function(h,u,o){if(j.isPlainObject(u))for(var r in u)b.data(h,r,u[r]);else if(o===s){h=b.get(h);if(!h||h.nodeName&&l[h.nodeName.toLowerCase()])return null;
if(h==i)h=k;r=h&&h.nodeType;r=h=(r?y:h)[r?h[x]:x];if(j.isString(u)&&h)r=h[u];return r===s?null:r}else b.query(h).each(function(v){if(!(!v||v.nodeName&&l[v.nodeName.toLowerCase()])){if(v==i)v=k;var t=y,f;if(v&&v.nodeType){if(!(f=v[x]))f=v[x]=j.guid()}else{f=x;t=v}if(u&&o!==s){t[f]||(t[f]={});t[f][u]=o}}})},removeData:function(h,u){b.query(h).each(function(o){if(o){if(o==i)o=k;var r,v=y,t,f=o&&o.nodeType;if(f)r=o[x];else{v=o;r=x}if(r){t=v[r];if(u){if(t){delete t[u];j.isEmptyObject(t)&&b.removeData(o)}}else{if(f)o.removeAttribute&&
o.removeAttribute(x);else try{delete o[x]}catch(m){}f&&delete v[r]}}}})}});return b},{requires:["dom/base"]});
KISSY.add("dom/insertion",function(j,b){j.mix(b,{insertBefore:function(s,i){s=b.query(s);if(i=b.get(i)&&i.parentNode)s.each(function(x){i.parentNode.insertBefore(x,i)})},insertAfter:function(s,i){s=b.query(s);if(i=b.get(i)&&i.parentNode)s.each(function(x){i.parentNode.insertBefore(x,i.nextSibling)})},append:function(s,i){s=b.query(s);if(i=b.get(i))i.appendChild&&s.each(function(x){i.appendChild(x)})},prepend:function(s,i){s=b.query(s);if(i=b.get(i))s.each(function(x){i.insertBefore(x,i.firstChild)})}});
b.prependTo=b.prepend;b.appendTo=b.append;return b},{requires:["dom/base"]});
KISSY.add("dom/offset",function(j,b,s,i){function x(a){var c=0,g=0,e=h(a[v]);if(a[d]){a=a[d]();c=a[t];g=a[f];if(s.mobile!=="apple"){c+=b[m](e);g+=b[q](e)}}return{left:c,top:g}}var y=window,k=b._isElementNode,l=b._nodeTypeIs,h=b._getWin,u=document.compatMode==="CSS1Compat",o=Math.max,r=parseInt,v="ownerDocument",t="left",f="top",m="scrollLeft",q="scrollTop",d="getBoundingClientRect";j.mix(b,{offset:function(a,c){if(!(a=b.get(a))||!a[v])return null;if(c===i)return x(a);var g=a;if(b.css(g,"position")===
"static")g.style.position="relative";var e=x(g),n={},p,w;for(w in c){p=r(b.css(g,w),10)||0;n[w]=p+c[w]-e[w]}b.css(g,n)},scrollIntoView:function(a,c,g,e){if((a=b.get(a))&&a[v]){e=e===i?true:!!e;g=g===i?true:!!g;if(!c||c===y)a.scrollIntoView(g);else{c=b.get(c);if(l(c,9))c=h(c);var n=!!h(c),p=b.offset(a),w=n?{left:b.scrollLeft(c),top:b.scrollTop(c)}:b.offset(c),z={left:p[t]-w[t],top:p[f]-w[f]};p=n?b.viewportHeight(c):c.clientHeight;n=n?b.viewportWidth(c):c.clientWidth;w=b[m](c);var B=b[q](c),A=w+n,C=
B+p,F=a.offsetHeight;a=a.offsetWidth;var D=z.left+w-(r(b.css(c,"borderLeftWidth"))||0);z=z.top+B-(r(b.css(c,"borderTopWidth"))||0);var G=D+a,H=z+F,E,I;if(F>p||z<B||g)E=z;else if(H>C)E=H-p;if(e)if(a>n||D<w||g)I=D;else if(G>A)I=G-n;b[q](c,E);b[m](c,I)}}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});j.each(["Left","Top"],function(a,c){var g="scroll"+a;b[g]=function(e,n){if(j.isNumber(e))arguments.callee(y,e);else{e=b.get(e);var p=0,w=h(e);if(w){if(n!==i){p=a=="Left"?n:b.scrollLeft(w);var z=
a=="Top"?n:b.scrollTop(w);w.scrollTo(p,z)}p=w.document;p=w[c?"pageYOffset":"pageXOffset"]||p.documentElement[g]||p.body[g]}else if(k(e=b.get(e)))p=n!==i?e[g]=n:e[g];return n===i?p:i}}});j.each(["Width","Height"],function(a){b["doc"+a]=function(c){c=b.get(c);c=h(c).document;return o(u?c.documentElement["scroll"+a]:c.body["scroll"+a],b["viewport"+a](c))};b["viewport"+a]=function(c){c=b.get(c);var g="inner"+a;c=h(c);var e=c.document;return g in c?c[g]:u?e.documentElement["client"+a]:e.body["client"+
a]}});return b},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(j,b,s){function i(f,m){var q,d,a=[],c;d=j.require("sizzle");m=x(m);if(j.isString(f))if(f.indexOf(",")!=-1){q=f.split(",");j.each(q,function(g){a.push.apply(a,j.makeArray(i(g,m)))})}else{f=j.trim(f);if(r.test(f)){if(d=y(f.slice(1),m))a=[d]}else if(q=v.exec(f)){d=q[1];c=q[2];q=q[3];if(m=d?y(d,m):m)if(q)if(!d||f.indexOf(o)!==-1)a=j.makeArray(t(q,c,m));else{if((d=y(d,m))&&b.hasClass(d,q))a=[d]}else if(c)a=k(c,m)}else if(d)a=d(f,m);else l(f)}else if(f&&(j.isArray(f)||
u(f)))a=j.makeArray(f);else if(f)a=[f];if(u(a))a=j.makeArray(a);a.each=function(g,e){return j.each(a,g,e)};return a}function x(f){if(f===s)f=h;else if(j.isString(f)&&r.test(f))f=y(f.slice(1),h);else if(f&&f.nodeType!==1&&f.nodeType!==9)f=null;return f}function y(f,m){if(m.nodeType!==9)m=m.ownerDocument;return m.getElementById(f)}function k(f,m){return m.getElementsByTagName(f)}function l(f){j.error("Unsupported selector: "+f)}var h=document,u=b._isNodeList,o=" ",r=/^#[\w-]+$/,v=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;
(function(){var f=h.createElement("div");f.appendChild(h.createComment(""));if(f.getElementsByTagName("*").length>0)k=function(m,q){var d=j.makeArray(q.getElementsByTagName(m));if(m==="*"){for(var a=[],c=0,g=0,e;e=d[c++];)if(e.nodeType===1)a[g++]=e;d=a}return d}})();var t=h.getElementsByClassName?function(f,m,q){q=f=j.makeArray(q.getElementsByClassName(f));var d=0,a=0,c=f.length,g;if(m&&m!=="*"){q=[];for(m=m.toUpperCase();d<c;++d){g=f[d];if(g.tagName===m)q[a++]=g}}return q}:h.querySelectorAll?function(f,
m,q){return q.querySelectorAll((m?m:"")+"."+f)}:function(f,m,q){m=q.getElementsByTagName(m||"*");q=[];var d=0,a=0,c=m.length,g,e;for(f=o+f+o;d<c;++d){g=m[d];if((e=g.className)&&(o+e+o).indexOf(f)>-1)q[a++]=g}return q};j.mix(b,{query:i,get:function(f,m){return i(f,m)[0]||null},filter:function(f,m,q){var d=i(f,q),a=j.require("sizzle"),c,g,e,n=[];if(j.isString(m)&&(c=v.exec(m))&&!c[1]){g=c[2];e=c[3];m=function(p){return!(g&&p.tagName!==g.toUpperCase()||e&&!b.hasClass(p,e))}}if(j.isFunction(m))n=j.filter(d,
m);else if(m&&a)n=a._filter(f,m,q);else l(m);return n},test:function(f,m,q){f=i(f,q);return f.length&&b.filter(f,m,q).length===f.length}});return b},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(j,b,s,i,x){if(!s.ie)return b;i=document;var y=i.documentElement,k=b._CUSTOM_STYLES,l=/^-?\d+(?:px)?$/i,h=/^-?\d/,u=/^(?:width|height)$/;try{if(y.style.opacity==x&&y.filters)k.opacity={get:function(t){var f=100;try{f=t.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(m){try{f=t.filters("alpha").opacity}catch(q){if(t=((t.currentStyle||0).filter||"").match(/alpha\(opacity[=:]([^)]+)\)/))f=parseInt(j.trim(t[1]))}}return f/100+""},set:function(t,f){var m=t.style,
q=(t.currentStyle||0).filter||"";m.zoom=1;if(q)q=j.trim(q.replace(/alpha\(opacity[=:][^)]+\),?/ig,""));if(q&&f!=1)q+=", ";m.filter=q+(f!=1?"alpha(opacity="+f*100+")":"")}}}catch(o){}s=s.ie==8;var r={},v={get:function(t,f){var m=t.currentStyle[f]+"";if(m.indexOf("px")<0)m=r[m]?r[m]:0;return m}};r.thin=s?"1px":"2px";r.medium=s?"3px":"4px";r.thick=s?"5px":"6px";j.each(["","Top","Left","Right","Bottom"],function(t){k["border"+t+"Width"]=v});if(!(i.defaultView||{}).getComputedStyle&&y.currentStyle)b._getComputedStyle=
function(t,f){var m=t.style,q=t.currentStyle[f];if(u.test(f))q=b[f](t)+"px";else if(!l.test(q)&&h.test(q)){var d=m.left,a=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left;m.left=f==="fontSize"?"1em":q||0;q=m.pixelLeft+"px";m.left=d;t.runtimeStyle.left=a}return q};return b},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(j,b,s,i){function x(d,a){var c=b.get(d),g=a===h?c.offsetWidth:c.offsetHeight;j.each(a===h?["Left","Right"]:["Top","Bottom"],function(e){g-=parseFloat(b._getComputedStyle(c,"padding"+e))||0;g-=parseFloat(b._getComputedStyle(c,"border"+e+"Width"))||0});return g}function y(d,a,c){var g=c;if(c===u&&r.test(a)){g=0;if(j.inArray(b.css(d,"position"),["absolute","fixed"])){c=d[a==="left"?"offsetLeft":"offsetTop"];if(s.ie===8||s.opera)c-=o(b.css(d.offsetParent,"border-"+a+"-width"))||
0;g=c-(o(b.css(d,"margin-"+a))||0)}}return g}var k=document,l=k.documentElement,h="width",u="auto",o=parseInt,r=/^(?:left|top)/,v=/^(?:width|height|top|left|right|bottom|margin|padding)/i,t=/-([a-z])/ig,f=function(d,a){return a.toUpperCase()},m={},q={};j.mix(b,{_CUSTOM_STYLES:m,_getComputedStyle:function(d,a){var c="",g=d.ownerDocument;if(d.style)c=g.defaultView.getComputedStyle(d,null)[a];return c},css:function(d,a,c){if(j.isPlainObject(a))for(var g in a)b.css(d,g,a[g]);else{if(a.indexOf("-")>0)a=
a.replace(t,f);g=a;a=m[a]||a;if(c===i){d=b.get(d);var e="";if(d&&d.style){e=a.get?a.get(d,g):d.style[a];if(e===""&&!a.get)e=y(d,a,b._getComputedStyle(d,a))}return e===i?"":e}else{if(c===null||c==="")c="";else if(!isNaN(new Number(c))&&v.test(a))c+="px";(a===h||a==="height")&&parseFloat(c)<0||j.each(b.query(d),function(n){if(n&&n.style){a.set?a.set(n,c):n.style[a]=c;if(c==="")n.style.cssText||n.removeAttribute("style")}})}}},width:function(d,a){if(a===i)return x(d,h);else b.css(d,h,a)},height:function(d,
a){if(a===i)return x(d,"height");else b.css(d,"height",a)},show:function(d){b.query(d).each(function(a){if(a){a.style.display=b.data(a,"display")||"";if(b.css(a,"display")==="none"){var c=a.tagName,g=q[c],e;if(!g){e=k.createElement(c);k.body.appendChild(e);g=b.css(e,"display");b.remove(e);q[c]=g}b.data(a,"display",g);a.style.display=g}}})},hide:function(d){b.query(d).each(function(a){if(a){var c=a.style,g=c.display;if(g!=="none"){g&&b.data(a,"display",g);c.display="none"}}})},toggle:function(d){b.query(d).each(function(a){if(a)b.css(a,
"display")==="none"?b.show(a):b.hide(a)})},addStyleSheet:function(d,a,c){if(j.isString(d)){c=a;a=d;d=window}d=b._getWin(d).document;var g;if(c&&(c=c.replace("#","")))g=b.get("#"+c,d);if(!g){g=b.create("<style>",{id:c},d);b.get("head",d).appendChild(g);if(g.styleSheet)g.styleSheet.cssText=a;else g.appendChild(d.createTextNode(a))}},unselectable:function(d){b.query(d).each(function(a){if(a)if(s.gecko)a.style.MozUserSelect="none";else if(s.webkit)a.style.KhtmlUserSelect="none";else if(s.ie||s.opera){var c=
0,g=a.getElementsByTagName("*");for(a.setAttribute("unselectable","on");a=g[c++];)switch(a.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:a.setAttribute("unselectable","on")}}})}});if(l.style.cssFloat!==i)m["float"]="cssFloat";else if(l.style.styleFloat!==i)m["float"]="styleFloat";return b},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(j,b,s){function i(k,l,h,u){if(!(k=b.get(k)))return null;if(l===s)l=1;var o=null,r,v;if(j.isNumber(l)&&l>=0){if(l===0)return k;r=0;v=l;l=function(){return++r===v}}for(;k=k[h];)if(y(k)&&(!l||b.test(k,l))&&(!u||u(k))){o=k;break}return o}function x(k,l,h){var u=[];var o=k=b.get(k);if(k&&h)o=k.parentNode;if(o){h=0;for(o=o.firstChild;o;o=o.nextSibling)if(y(o)&&o!==k&&(!l||b.test(o,l)))u[h++]=o}return u}var y=b._isElementNode;j.mix(b,{parent:function(k,l){return i(k,l,
"parentNode",function(h){return h.nodeType!=11})},next:function(k,l){return i(k,l,"nextSibling",s)},prev:function(k,l){return i(k,l,"previousSibling",s)},siblings:function(k,l){return x(k,l,true)},children:function(k,l){return x(k,l,s)},contains:function(k,l){var h=false;if((k=b.get(k))&&(l=b.get(l)))if(k.contains){if(l.nodeType===3){l=l.parentNode;if(l===k)return true}if(l)return k.contains(l)}else if(k.compareDocumentPosition)return!!(k.compareDocumentPosition(l)&16);else for(;!h&&(l=l.parentNode);)h=
l==k;return h},equals:function(k,l){k=j.query(k);l=j.query(l);if(k.length!=l.length)return false;for(var h=k.length;h>=0;h--)if(k[h]!=l[h])return false;return true}});return b},{requires:["./base"]});KISSY.add("dom",function(j,b){return b},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});