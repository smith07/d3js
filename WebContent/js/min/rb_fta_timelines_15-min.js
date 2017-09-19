/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});


// https://d3js.org Version 4.9.1. Copyright 2017 Mike Bostock.
(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})})(this,function(t){"use strict";function n(t){return function(n,e){return js(t(n),e)}}function e(t,n){return[t,n]}function r(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=sf?10:o>=ff?5:o>=lf?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=sf?10:o>=ff?5:o>=lf?2:1)}function i(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=sf?i*=10:o>=ff?i*=5:o>=lf&&(i*=2),n<t?-i:i}function o(t){return t.length}function u(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function c(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return t(e)+n}}function s(){return!this.__axis}function f(t,n){function e(e){var u=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,a=null==o?n.tickFormat?n.tickFormat.apply(n,r):Cf:o,_=Math.max(f,0)+h,y=n.range(),g=y[0]+.5,m=y[y.length-1]+.5,x=(n.bandwidth?c:Cf)(n.copy()),b=e.selection?e.selection():e,w=b.selectAll(".domain").data([null]),M=b.selectAll(".tick").data(u,n).order(),T=M.exit(),k=M.enter().append("g").attr("class","tick"),N=M.select("line"),S=M.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),M=M.merge(k),N=N.merge(k.append("line").attr("stroke","#000").attr(d+"2",p*f)),S=S.merge(k.append("text").attr("fill","#000").attr(d,p*_).attr("dy",t===zf?"0em":t===Lf?"0.71em":"0.32em")),e!==b&&(w=w.transition(e),M=M.transition(e),N=N.transition(e),S=S.transition(e),T=T.transition(e).attr("opacity",qf).attr("transform",function(t){return isFinite(t=x(t))?v(t):this.getAttribute("transform")}),k.attr("opacity",qf).attr("transform",function(t){var n=this.parentNode.__axis;return v(n&&isFinite(n=n(t))?n:x(t))})),T.remove(),w.attr("d",t===Rf||t==Pf?"M"+p*l+","+g+"H0.5V"+m+"H"+p*l:"M"+g+","+p*l+"V0.5H"+m+"V"+p*l),M.attr("opacity",1).attr("transform",function(t){return v(x(t))}),N.attr(d+"2",p*f),S.attr(d,p*_).text(a),b.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Pf?"start":t===Rf?"end":"middle"),b.each(function(){this.__axis=x})}var r=[],i=null,o=null,f=6,l=6,h=3,p=t===zf||t===Rf?-1:1,d=t===Rf||t===Pf?"x":"y",v=t===zf||t===Lf?u:a;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=Af.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:Af.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:Af.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(f=l=+t,e):f},e.tickSizeInner=function(t){return arguments.length?(f=+t,e):f},e.tickSizeOuter=function(t){return arguments.length?(l=+t,e):l},e.tickPadding=function(t){return arguments.length?(h=+t,e):h},e}function l(t){return f(zf,t)}function h(t){return f(Pf,t)}function p(t){return f(Lf,t)}function d(t){return f(Rf,t)}function v(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new _(r)}function _(t){this._=t}function y(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function g(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function m(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Uf,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function x(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Df&&n.documentElement.namespaceURI===Df?n.createElement(t):n.createElementNS(e,t)}}function b(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function w(){return new M}function M(){this._="@"+(++Yf).toString(36)}function T(t,n,e){return t=k(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function k(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function N(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function S(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function E(t,n,e){var r=$f.hasOwnProperty(t.type)?T:k;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var f=0,l=c.length;f<l;++f)if((a=c[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function A(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function C(){}function z(){return[]}function P(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function L(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new P(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function R(t,n,e,r,i,o,u){var a,c,s,f={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=s=ol+u.call(c,c.__data__,a,n),s in f?i[a]=c:f[s]=c);for(a=0;a<h;++a)s=ol+u.call(t,o[a],a,o),(c=f[s])?(r[a]=c,c.__data__=o[a],f[s]=null):e[a]=new P(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&f[p[a]]===c&&(i[a]=c)}function q(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function U(t){return function(){this.removeAttribute(t)}}function D(t){return function(){this.removeAttributeNS(t.space,t.local)}}function O(t,n){return function(){this.setAttribute(t,n)}}function F(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function I(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Y(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function B(t){return function(){this.style.removeProperty(t)}}function H(t,n,e){return function(){this.style.setProperty(t,n,e)}}function j(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function X(t,n){return t.style.getPropertyValue(n)||gl(t).getComputedStyle(t,null).getPropertyValue(n)}function $(t){return function(){delete this[t]}}function V(t,n){return function(){this[t]=n}}function W(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function Z(t){return t.trim().split(/^|\s+/)}function G(t){return t.classList||new J(t)}function J(t){this._node=t,this._names=Z(t.getAttribute("class")||"")}function Q(t,n){for(var e=G(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function K(t,n){for(var e=G(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function tt(t){return function(){Q(this,t)}}function nt(t){return function(){K(this,t)}}function et(t,n){return function(){(n.apply(this,arguments)?Q:K)(this,t)}}function rt(){this.textContent=""}function it(t){return function(){this.textContent=t}}function ot(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function ut(){this.innerHTML=""}function at(t){return function(){this.innerHTML=t}}function ct(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function st(){this.nextSibling&&this.parentNode.appendChild(this)}function ft(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function lt(){return null}function ht(){var t=this.parentNode;t&&t.removeChild(this)}function pt(t,n,e){var r=gl(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function dt(t,n){return function(){return pt(this,t,n)}}function vt(t,n){return function(){return pt(this,t,n.apply(this,arguments))}}function _t(t,n){this._groups=t,this._parents=n}function yt(){return new _t([[document.documentElement]],zl)}function gt(){t.event.stopImmediatePropagation()}function mt(t,n){var e=t.document.documentElement,r=Pl(t).on("dragstart.drag",null);n&&(r.on("click.drag",Ul,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function xt(t,n,e,r,i,o,u,a,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=c,this._=s}function bt(){return!t.event.button}function wt(){return this.parentNode}function Mt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Tt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function kt(){}function Nt(t){var n;return t=(t+"").trim().toLowerCase(),(n=jl.exec(t))?(n=parseInt(n[1],16),new zt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Xl.exec(t))?St(parseInt(n[1],16)):(n=$l.exec(t))?new zt(n[1],n[2],n[3],1):(n=Vl.exec(t))?new zt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Wl.exec(t))?Et(n[1],n[2],n[3],n[4]):(n=Zl.exec(t))?Et(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Gl.exec(t))?Pt(n[1],n[2]/100,n[3]/100,1):(n=Jl.exec(t))?Pt(n[1],n[2]/100,n[3]/100,n[4]):Ql.hasOwnProperty(t)?St(Ql[t]):"transparent"===t?new zt(NaN,NaN,NaN,0):null}function St(t){return new zt(t>>16&255,t>>8&255,255&t,1)}function Et(t,n,e,r){return r<=0&&(t=n=e=NaN),new zt(t,n,e,r)}function At(t){return t instanceof kt||(t=Nt(t)),t?(t=t.rgb(),new zt(t.r,t.g,t.b,t.opacity)):new zt}function Ct(t,n,e,r){return 1===arguments.length?At(t):new zt(t,n,e,null==r?1:r)}function zt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Pt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new qt(t,n,e,r)}function Lt(t){if(t instanceof qt)return new qt(t.h,t.s,t.l,t.opacity);if(t instanceof kt||(t=Nt(t)),!t)return new qt;if(t instanceof qt)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new qt(u,a,c,t.opacity)}function Rt(t,n,e,r){return 1===arguments.length?Lt(t):new qt(t,n,e,null==r?1:r)}function qt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Ut(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Dt(t){if(t instanceof Ft)return new Ft(t.l,t.a,t.b,t.opacity);if(t instanceof $t){var n=t.h*Kl;return new Ft(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof zt||(t=At(t));var e=Ht(t.r),r=Ht(t.g),i=Ht(t.b),o=It((.4124564*e+.3575761*r+.1804375*i)/nh),u=It((.2126729*e+.7151522*r+.072175*i)/eh);return new Ft(116*u-16,500*(o-u),200*(u-It((.0193339*e+.119192*r+.9503041*i)/rh)),t.opacity)}function Ot(t,n,e,r){return 1===arguments.length?Dt(t):new Ft(t,n,e,null==r?1:r)}function Ft(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function It(t){return t>ah?Math.pow(t,1/3):t/uh+ih}function Yt(t){return t>oh?t*t*t:uh*(t-ih)}function Bt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ht(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function jt(t){if(t instanceof $t)return new $t(t.h,t.c,t.l,t.opacity);t instanceof Ft||(t=Dt(t));var n=Math.atan2(t.b,t.a)*th;return new $t(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xt(t,n,e,r){return 1===arguments.length?jt(t):new $t(t,n,e,null==r?1:r)}function $t(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Vt(t){if(t instanceof Zt)return new Zt(t.h,t.s,t.l,t.opacity);t instanceof zt||(t=At(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(vh*r+ph*n-dh*e)/(vh+ph-dh),o=r-i,u=(hh*(e-i)-fh*o)/lh,a=Math.sqrt(u*u+o*o)/(hh*i*(1-i)),c=a?Math.atan2(u,o)*th-120:NaN;return new Zt(c<0?c+360:c,a,i,t.opacity)}function Wt(t,n,e,r){return 1===arguments.length?Vt(t):new Zt(t,n,e,null==r?1:r)}function Zt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Gt(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function Jt(t,n){return function(e){return t+e*n}}function Qt(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Kt(t,n){var e=n-t;return e?Jt(t,e>180||e<-180?e-360*Math.round(e/360):e):Th(isNaN(t)?n:t)}function tn(t){return 1==(t=+t)?nn:function(n,e){return e-n?Qt(n,e,t):Th(isNaN(n)?e:n)}}function nn(t,n){var e=n-t;return e?Jt(t,e):Th(isNaN(t)?n:t)}function en(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=Ct(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function rn(t){return function(){return t}}function on(t){return function(n){return t(n)+""}}function un(t){return"none"===t?Oh:(_h||(_h=document.createElement("DIV"),yh=document.documentElement,gh=document.defaultView),_h.style.transform=t,t=gh.getComputedStyle(yh.appendChild(_h),null).getPropertyValue("transform"),yh.removeChild(_h),t=t.slice(7,-1).split(","),Fh(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function an(t){return null==t?Oh:(mh||(mh=document.createElementNS("http://www.w3.org/2000/svg","g")),mh.setAttribute("transform",t),(t=mh.transform.baseVal.consolidate())?(t=t.matrix,Fh(t.a,t.b,t.c,t.d,t.e,t.f)):Oh)}function cn(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:Ch(t,i)},{i:c-2,x:Ch(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:Ch(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function a(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:Ch(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function c(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:Ch(t,e)},{i:a-2,x:Ch(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),a(n.skewX,e.skewX,r,i),c(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function sn(t){return((t=Math.exp(t))+1/t)/2}function fn(t){return((t=Math.exp(t))-1/t)/2}function ln(t){return((t=Math.exp(2*t))-1)/(t+1)}function hn(t){return function(n,e){var r=t((n=Rt(n)).h,(e=Rt(e)).h),i=nn(n.s,e.s),o=nn(n.l,e.l),u=nn(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function pn(t,n){var e=nn((t=Ot(t)).l,(n=Ot(n)).l),r=nn(t.a,n.a),i=nn(t.b,n.b),o=nn(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function dn(t){return function(n,e){var r=t((n=Xt(n)).h,(e=Xt(e)).h),i=nn(n.c,e.c),o=nn(n.l,e.l),u=nn(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function vn(t){return function n(e){function r(n,r){var i=t((n=Wt(n)).h,(r=Wt(r)).h),o=nn(n.s,r.s),u=nn(n.l,r.l),a=nn(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(Math.pow(t,e)),n.opacity=a(t),n+""}}return e=+e,r.gamma=n,r}(1)}function _n(){return ep||(op(yn),ep=ip.now()+rp)}function yn(){ep=0}function gn(){this._call=this._time=this._next=null}function mn(t,n,e){var r=new gn;return r.restart(t,n,e),r}function xn(){_n(),++Jh;for(var t,n=xh;n;)(t=ep-n._time)>=0&&n._call.call(null,t),n=n._next;--Jh}function bn(){ep=(np=ip.now())+rp,Jh=Qh=0;try{xn()}finally{Jh=0,Mn(),ep=0}}function wn(){var t=ip.now(),n=t-np;n>tp&&(rp-=n,np=t)}function Mn(){for(var t,n,e=xh,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:xh=n);bh=t,Tn(r)}function Tn(t){if(!Jh){Qh&&(Qh=clearTimeout(Qh));var n=t-ep;n>24?(t<1/0&&(Qh=setTimeout(bn,n)),Kh&&(Kh=clearInterval(Kh))):(Kh||(np=ep,Kh=setInterval(wn,tp)),Jh=1,op(bn))}}function kn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>fp)throw new Error("too late");return e}function Nn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>hp)throw new Error("too late");return e}function Sn(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function En(t,n,e){function r(t){e.state=lp,e.timer.restart(i,e.delay,e.time),e.delay<=t&&i(t-e.delay)}function i(r){var s,f,l,h;if(e.state!==lp)return u();for(s in c)if(h=c[s],h.name===e.name){if(h.state===pp)return up(i);h.state===dp?(h.state=_p,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete c[s]):+s<n&&(h.state=_p,h.timer.stop(),delete c[s])}if(up(function(){e.state===pp&&(e.state=dp,e.timer.restart(o,e.delay,e.time),o(r))}),e.state=hp,e.on.call("start",t,t.__data__,e.index,e.group),e.state===hp){for(e.state=pp,a=new Array(l=e.tween.length),s=0,f=-1;s<l;++s)(h=e.tween[s].value.call(t,t.__data__,e.index,e.group))&&(a[++f]=h);a.length=f+1}}function o(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=vp,1),i=-1,o=a.length;++i<o;)a[i].call(null,r);e.state===vp&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=_p,e.timer.stop(),delete c[n];for(var r in c)return;delete t.__transition}var a,c=t.__transition;c[n]=e,e.timer=mn(r,0,e.time)}function An(t,n){var e,r;return function(){var i=Nn(this,t),o=i.tween;if(o!==e){r=e=o;for(var u=0,a=r.length;u<a;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function Cn(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Nn(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}}function zn(t,n,e){var r=t._id;return t.each(function(){var t=Nn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Sn(t,r).value[n]}}function Pn(t){return function(){this.removeAttribute(t)}}function Ln(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Rn(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function qn(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function Un(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttribute(t):(u=this.getAttribute(t),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function Dn(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function On(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function Fn(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function In(t,n){return function(){kn(this,t).delay=+n.apply(this,arguments)}}function Yn(t,n){return n=+n,function(){kn(this,t).delay=n}}function Bn(t,n){return function(){Nn(this,t).duration=+n.apply(this,arguments)}}function Hn(t,n){return n=+n,function(){Nn(this,t).duration=n}}function jn(t,n){if("function"!=typeof n)throw new Error;return function(){Nn(this,t).ease=n}}function Xn(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function $n(t,n,e){var r,i,o=Xn(n)?kn:Nn;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}function Vn(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Wn(t,n){var e,r,i;return function(){var o=X(this,t),u=(this.style.removeProperty(t),X(this,t));return o===u?null:o===e&&u===r?i:i=n(e=o,r=u)}}function Zn(t){return function(){this.style.removeProperty(t)}}function Gn(t,n,e){var r,i;return function(){var o=X(this,t);return o===e?null:o===r?i:i=n(r=o,e)}}function Jn(t,n,e){var r,i,o;return function(){var u=X(this,t),a=e(this);return null==a&&(this.style.removeProperty(t),a=X(this,t)),u===a?null:u===r&&a===i?o:o=n(r=u,i=a)}}function Qn(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function Kn(t){return function(){this.textContent=t}}function te(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function ne(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function ee(t){return yt().transition(t)}function re(){return++Fp}function ie(t){return+t}function oe(t){return t*t}function ue(t){return t*(2-t)}function ae(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function ce(t){return t*t*t}function se(t){return--t*t*t+1}function fe(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function le(t){return 1-Math.cos(t*Xp)}function he(t){return Math.sin(t*Xp)}function pe(t){return(1-Math.cos(jp*t))/2}function de(t){return Math.pow(2,10*t-10)}function ve(t){return 1-Math.pow(2,-10*t)}function _e(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function ye(t){return 1-Math.sqrt(1-t*t)}function ge(t){return Math.sqrt(1- --t*t)}function me(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function xe(t){return 1-be(1-t)}function be(t){return(t=+t)<$p?nd*t*t:t<Wp?nd*(t-=Vp)*t+Zp:t<Jp?nd*(t-=Gp)*t+Qp:nd*(t-=Kp)*t+td}function we(t){return((t*=2)<=1?1-be(1-t):be(t-1)+1)/2}function Me(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return sd.time=_n(),sd;return e}function Te(){t.event.stopImmediatePropagation()}function ke(t){return{type:t}}function Ne(){return!t.event.button}function Se(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Ee(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Ae(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Ce(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function ze(){return Le(xd)}function Pe(){return Le(bd)}function Le(n){function e(t){var e=t.property("__brush",a).selectAll(".overlay").data([ke("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Md.overlay).merge(e).each(function(){var t=Ee(this).extent;Pl(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([ke("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Md.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Md[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",u)}function r(){var t=Pl(this),n=Ee(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function u(){function e(){var t=Gf(T);!U||w||M||(Math.abs(t[0]-O[0])>Math.abs(t[1]-O[1])?M=!0:w=!0),O=t,b=!0,vd(),o()}function o(){var t;switch(m=O[0]-D[0],x=O[1]-D[1],N){case yd:case _d:S&&(m=Math.max(P-l,Math.min(R-v,m)),h=l+m,_=v+m),E&&(x=Math.max(L-p,Math.min(q-y,x)),d=p+x,g=y+x);break;case gd:S<0?(m=Math.max(P-l,Math.min(R-l,m)),h=l+m,_=v):S>0&&(m=Math.max(P-v,Math.min(R-v,m)),h=l,_=v+m),E<0?(x=Math.max(L-p,Math.min(q-p,x)),d=p+x,g=y):E>0&&(x=Math.max(L-y,Math.min(q-y,x)),d=p,g=y+x);break;case md:S&&(h=Math.max(P,Math.min(R,l-m*S)),_=Math.max(P,Math.min(R,v+m*S))),E&&(d=Math.max(L,Math.min(q,p-x*E)),g=Math.max(L,Math.min(q,y+x*E)))}_<h&&(S*=-1,t=l,l=v,v=t,t=h,h=_,_=t,k in Td&&Y.attr("cursor",Md[k=Td[k]])),g<d&&(E*=-1,t=p,p=y,y=t,t=d,d=g,g=t,k in kd&&Y.attr("cursor",Md[k=kd[k]])),A.selection&&(z=A.selection),w&&(h=z[0][0],_=z[1][0]),M&&(d=z[0][1],g=z[1][1]),z[0][0]===h&&z[0][1]===d&&z[1][0]===_&&z[1][1]===g||(A.selection=[[h,d],[_,g]],r.call(T),F.brush())}function u(){if(Te(),t.event.touches){if(t.event.touches.length)return;c&&clearTimeout(c),c=setTimeout(function(){c=null},500),I.on("touchmove.brush touchend.brush touchcancel.brush",null)}else mt(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);I.attr("pointer-events","all"),Y.attr("cursor",Md.overlay),A.selection&&(z=A.selection),Ae(z)&&(A.selection=null,r.call(T)),F.end()}function a(){switch(t.event.keyCode){case 16:U=S&&E;break;case 18:N===gd&&(S&&(v=_-m*S,l=h+m*S),E&&(y=g-x*E,p=d+x*E),N=md,o());break;case 32:N!==gd&&N!==md||(S<0?v=_-m:S>0&&(l=h-m),E<0?y=g-x:E>0&&(p=d-x),N=yd,Y.attr("cursor",Md.selection),o());break;default:return}vd()}function s(){switch(t.event.keyCode){case 16:U&&(w=M=U=!1,o());break;case 18:N===md&&(S<0?v=_:S>0&&(l=h),E<0?y=g:E>0&&(p=d),N=gd,o());break;case 32:N===yd&&(t.event.altKey?(S&&(v=_-m*S,l=h+m*S),E&&(y=g-x*E,p=d+x*E),N=md):(S<0?v=_:S>0&&(l=h),E<0?y=g:E>0&&(p=d),N=gd),Y.attr("cursor",Md[k]),o());break;default:return}vd()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return vd()}else if(c)return;if(f.apply(this,arguments)){var l,h,p,d,v,_,y,g,m,x,b,w,M,T=this,k=t.event.target.__data__.type,N="selection"===(t.event.metaKey?k="overlay":k)?_d:t.event.altKey?md:gd,S=n===bd?null:Nd[k],E=n===xd?null:Sd[k],A=Ee(T),C=A.extent,z=A.selection,P=C[0][0],L=C[0][1],R=C[1][0],q=C[1][1],U=S&&E&&t.event.shiftKey,D=Gf(T),O=D,F=i(T,arguments).beforestart();"overlay"===k?A.selection=z=[[l=n===bd?P:D[0],p=n===xd?L:D[1]],[v=n===bd?R:l,y=n===xd?q:p]]:(l=z[0][0],p=z[0][1],v=z[1][0],y=z[1][1]),h=l,d=p,_=v,g=y;var I=Pl(T).attr("pointer-events","none"),Y=I.selectAll(".overlay").attr("cursor",Md[k]);if(t.event.touches)I.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",u,!0);else{var B=Pl(t.event.view).on("keydown.brush",a,!0).on("keyup.brush",s,!0).on("mousemove.brush",e,!0).on("mouseup.brush",u,!0);Dl(t.event.view)}Te(),gp(T),r.call(T),F.start()}}function a(){var t=this.__brush||{selection:null};return t.extent=s.apply(this,arguments),t.dim=n,t}var c,s=Se,f=Ne,l=v(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){u.selection=1===t&&Ae(s)?null:f(t),r.call(o),a.brush()}var o=this,u=o.__brush,a=i(o,arguments),c=u.selection,s=n.input("function"==typeof e?e.apply(this,arguments):e,u.extent),f=qh(c,s);return c&&s?t:t(1)}):t.each(function(){var t=this,o=arguments,u=t.__brush,a=n.input("function"==typeof e?e.apply(t,o):e,u.extent),c=i(t,o).beforestart();gp(t),u.selection=null==a||Ae(a)?null:a,r.call(t),c.start().brush().end()})},o.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){A(new dd(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(s="function"==typeof t?t:pd([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):s},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:pd(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function Re(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function qe(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Ue(){return new qe}function De(t){return t.source}function Oe(t){return t.target}function Fe(t){return t.radius}function Ie(t){return t.startAngle}function Ye(t){return t.endAngle}function Be(){}function He(t,n){var e=new Be;if(t instanceof Be)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var u in t)e.set(u,t[u]);return e}function je(){return{}}function Xe(t,n,e){t[n]=e}function $e(){return He()}function Ve(t,n,e){t.set(n,e)}function We(){}function Ze(t,n){var e=new We;if(t instanceof We)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function Ge(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Je(t,n){var e=Ge(t);return function(r,i){return n(e(r),i,t)}}function Qe(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Ke(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,c,s,f,l,h,p=t._root,d={data:r},v=t._x0,_=t._y0,y=t._x1,g=t._y1;if(!p)return t._root=d,t;for(;p.length;)if((s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u,i=p,!(p=p[l=f<<1|s]))return i[l]=d,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&e===c)return d.next=p,i?i[l]=d:t._root=d,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u}while((l=f<<1|s)==(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=d,t}function tr(t){var n,e,r,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,s=1/0,f=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,a[e]=i,r<c&&(c=r),r>f&&(f=r),i<s&&(s=i),i>l&&(l=i));for(f<c&&(c=this._x0,f=this._x1),l<s&&(s=this._y0,l=this._y1),this.cover(c,s).cover(f,l),e=0;e<o;++e)Ke(this,u[e],a[e],t[e]);return this}function nr(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function er(t){return t[0]}function rr(t){return t[1]}function ir(t,n,e){var r=new or(null==n?er:n,null==e?rr:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function or(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function ur(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function ar(t){return t.x+t.vx}function cr(t){return t.y+t.vy}function sr(t){return t.index}function fr(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function lr(t){return t.x}function hr(t){return t.y}function pr(t){return new dr(t)}function dr(t){if(!(n=Ov.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],c=!!n[7],s=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(c=!0,f="g"):Dv[f]||(f=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,
this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=c,this.precision=s,this.type=f}function vr(n){return Fv=Bv(n),t.format=Fv.format,t.formatPrefix=Fv.formatPrefix,Fv}function _r(){this.reset()}function yr(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function gr(t){return t>1?0:t<-1?N_:Math.acos(t)}function mr(t){return t>1?S_:t<-1?-S_:Math.asin(t)}function xr(t){return(t=I_(t/2))*t}function br(){}function wr(t,n){t&&X_.hasOwnProperty(t.type)&&X_[t.type](t,n)}function Mr(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Tr(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)Mr(t[e],n,1);n.polygonEnd()}function kr(){Z_.point=Sr}function Nr(){Er(Vv,Wv)}function Sr(t,n){Z_.point=Er,Vv=t,Wv=n,t*=z_,n*=z_,Zv=t,Gv=q_(n=n/2+E_),Jv=I_(n)}function Er(t,n){t*=z_,n*=z_,n=n/2+E_;var e=t-Zv,r=e>=0?1:-1,i=r*e,o=q_(n),u=I_(n),a=Jv*u,c=Gv*o+a*q_(i),s=a*r*I_(i);V_.add(R_(s,c)),Zv=t,Gv=o,Jv=u}function Ar(t){return[R_(t[1],t[0]),mr(t[2])]}function Cr(t){var n=t[0],e=t[1],r=q_(e);return[r*q_(n),r*I_(n),I_(e)]}function zr(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Pr(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Lr(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Rr(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function qr(t){var n=B_(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function Ur(t,n){u_.push(a_=[Qv=t,t_=t]),n<Kv&&(Kv=n),n>n_&&(n_=n)}function Dr(t,n){var e=Cr([t*z_,n*z_]);if(o_){var r=Pr(o_,e),i=[r[1],-r[0],0],o=Pr(i,r);qr(o),o=Ar(o);var u,a=t-e_,c=a>0?1:-1,s=o[0]*C_*c,f=P_(a)>180;f^(c*e_<s&&s<c*t)?(u=o[1]*C_)>n_&&(n_=u):(s=(s+360)%360-180,f^(c*e_<s&&s<c*t)?(u=-o[1]*C_)<Kv&&(Kv=u):(n<Kv&&(Kv=n),n>n_&&(n_=n))),f?t<e_?Hr(Qv,t)>Hr(Qv,t_)&&(t_=t):Hr(t,t_)>Hr(Qv,t_)&&(Qv=t):t_>=Qv?(t<Qv&&(Qv=t),t>t_&&(t_=t)):t>e_?Hr(Qv,t)>Hr(Qv,t_)&&(t_=t):Hr(t,t_)>Hr(Qv,t_)&&(Qv=t)}else u_.push(a_=[Qv=t,t_=t]);n<Kv&&(Kv=n),n>n_&&(n_=n),o_=e,e_=t}function Or(){Q_.point=Dr}function Fr(){a_[0]=Qv,a_[1]=t_,Q_.point=Ur,o_=null}function Ir(t,n){if(o_){var e=t-e_;J_.add(P_(e)>180?e+(e>0?360:-360):e)}else r_=t,i_=n;Z_.point(t,n),Dr(t,n)}function Yr(){Z_.lineStart()}function Br(){Ir(r_,i_),Z_.lineEnd(),P_(J_)>k_&&(Qv=-(t_=180)),a_[0]=Qv,a_[1]=t_,o_=null}function Hr(t,n){return(n-=t)<0?n+360:n}function jr(t,n){return t[0]-n[0]}function Xr(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function $r(t,n){t*=z_,n*=z_;var e=q_(n);Vr(e*q_(t),e*I_(t),I_(n))}function Vr(t,n,e){++c_,f_+=(t-f_)/c_,l_+=(n-l_)/c_,h_+=(e-h_)/c_}function Wr(){ty.point=Zr}function Zr(t,n){t*=z_,n*=z_;var e=q_(n);b_=e*q_(t),w_=e*I_(t),M_=I_(n),ty.point=Gr,Vr(b_,w_,M_)}function Gr(t,n){t*=z_,n*=z_;var e=q_(n),r=e*q_(t),i=e*I_(t),o=I_(n),u=R_(B_((u=w_*o-M_*i)*u+(u=M_*r-b_*o)*u+(u=b_*i-w_*r)*u),b_*r+w_*i+M_*o);s_+=u,p_+=u*(b_+(b_=r)),d_+=u*(w_+(w_=i)),v_+=u*(M_+(M_=o)),Vr(b_,w_,M_)}function Jr(){ty.point=$r}function Qr(){ty.point=ti}function Kr(){ni(m_,x_),ty.point=$r}function ti(t,n){m_=t,x_=n,t*=z_,n*=z_,ty.point=ni;var e=q_(n);b_=e*q_(t),w_=e*I_(t),M_=I_(n),Vr(b_,w_,M_)}function ni(t,n){t*=z_,n*=z_;var e=q_(n),r=e*q_(t),i=e*I_(t),o=I_(n),u=w_*o-M_*i,a=M_*r-b_*o,c=b_*i-w_*r,s=B_(u*u+a*a+c*c),f=mr(s),l=s&&-f/s;__+=l*u,y_+=l*a,g_+=l*c,s_+=f,p_+=f*(b_+(b_=r)),d_+=f*(w_+(w_=i)),v_+=f*(M_+(M_=o)),Vr(b_,w_,M_)}function ei(t,n){return[t>N_?t-A_:t<-N_?t+A_:t,n]}function ri(t,n,e){return(t%=A_)?n||e?ry(oi(t),ui(n,e)):oi(t):n||e?ui(n,e):ei}function ii(t){return function(n,e){return n+=t,[n>N_?n-A_:n<-N_?n+A_:n,e]}}function oi(t){var n=ii(t);return n.invert=ii(-t),n}function ui(t,n){function e(t,n){var e=q_(n),a=q_(t)*e,c=I_(t)*e,s=I_(n),f=s*r+a*i;return[R_(c*o-f*u,a*r-s*i),mr(f*o+c*u)]}var r=q_(t),i=I_(t),o=q_(n),u=I_(n);return e.invert=function(t,n){var e=q_(n),a=q_(t)*e,c=I_(t)*e,s=I_(n),f=s*o-c*u;return[R_(c*o+s*u,a*r+f*i),mr(f*r-a*i)]},e}function ai(t,n,e,r,i,o){if(e){var u=q_(n),a=I_(n),c=r*e;null==i?(i=n+r*A_,o=n-c/2):(i=ci(u,i),o=ci(u,o),(r>0?i<o:i>o)&&(i+=r*A_));for(var s,f=i;r>0?f>o:f<o;f-=c)s=Ar([u,-a*q_(f),-a*I_(f)]),t.point(s[0],s[1])}}function ci(t,n){n=Cr(n),n[0]-=t,qr(n);var e=gr(-n[1]);return((-n[2]<0?-e:e)+A_-k_)%A_}function si(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function fi(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function li(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,a,s){var f=0,l=0;if(null==i||(f=u(i,a))!==(l=u(o,a))||c(i,o)<0^a>0)do{s.point(0===f||3===f?t:e,f>1?r:n)}while((f=(f+a+4)%4)!==l);else s.point(o[0],o[1])}function u(r,i){return P_(r[0]-t)<k_?i>0?0:3:P_(r[0]-e)<k_?i>0?2:1:P_(r[1]-n)<k_?i>0?1:0:i>0?3:2}function a(t,n){return c(t.x,n.x)}function c(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){function c(t,n){i(t,n)&&N.point(t,n)}function s(){for(var n=0,e=0,i=_.length;e<i;++e)for(var o,u,a=_[e],c=1,s=a.length,f=a[0],l=f[0],h=f[1];c<s;++c)o=l,u=h,f=a[c],l=f[0],h=f[1],u<=r?h>r&&(l-o)*(r-u)>(h-u)*(t-o)&&++n:h<=r&&(l-o)*(r-u)<(h-u)*(t-o)&&--n;return n}function f(){N=S,v=[],_=[],k=!0}function l(){var t=s(),n=k&&t,e=(v=bf(v)).length;(n||e)&&(u.polygonStart(),n&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),e&&xy(v,a,t,o,u),u.polygonEnd()),N=u,v=_=y=null}function h(){E.point=d,_&&_.push(y=[]),T=!0,M=!1,b=w=NaN}function p(){v&&(d(g,m),x&&M&&S.rejoin(),v.push(S.result())),E.point=c,M&&N.lineEnd()}function d(o,u){var a=i(o,u);if(_&&y.push([o,u]),T)g=o,m=u,x=a,T=!1,a&&(N.lineStart(),N.point(o,u));else if(a&&M)N.point(o,u);else{var c=[b=Math.max(wy,Math.min(by,b)),w=Math.max(wy,Math.min(by,w))],s=[o=Math.max(wy,Math.min(by,o)),u=Math.max(wy,Math.min(by,u))];gy(c,s,t,n,e,r)?(M||(N.lineStart(),N.point(c[0],c[1])),N.point(s[0],s[1]),a||N.lineEnd(),k=!1):a&&(N.lineStart(),N.point(o,u),k=!1)}b=o,w=u,M=a}var v,_,y,g,m,x,b,w,M,T,k,N=u,S=yy(),E={point:c,lineStart:h,lineEnd:p,polygonStart:f,polygonEnd:l};return E}}function hi(){Sy.point=di,Sy.lineEnd=pi}function pi(){Sy.point=Sy.lineEnd=br}function di(t,n){t*=z_,n*=z_,iy=t,oy=I_(n),uy=q_(n),Sy.point=vi}function vi(t,n){t*=z_,n*=z_;var e=I_(n),r=q_(n),i=P_(t-iy),o=q_(i),u=I_(i),a=r*u,c=uy*e-oy*r*o,s=oy*e+uy*r*o;Ny.add(R_(B_(a*a+c*c),s)),iy=t,oy=e,uy=r}function _i(t,n){return!(!t||!Ly.hasOwnProperty(t.type))&&Ly[t.type](t,n)}function yi(t,n){return 0===zy(t,n)}function gi(t,n){var e=zy(t[0],t[1]);return zy(t[0],n)+zy(n,t[1])<=e+k_}function mi(t,n){return!!ky(t.map(xi),bi(n))}function xi(t){return t=t.map(bi),t.pop(),t}function bi(t){return[t[0]*z_,t[1]*z_]}function wi(t,n,e){var r=cf(t,n-k_,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Mi(t,n,e){var r=cf(t,n-k_,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Ti(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return cf(U_(o/_)*_,i,_).map(h).concat(cf(U_(s/y)*y,c,y).map(p)).concat(cf(U_(r/d)*d,e,d).filter(function(t){return P_(t%_)>k_}).map(f)).concat(cf(U_(a/v)*v,u,v).filter(function(t){return P_(t%y)>k_}).map(l))}var e,r,i,o,u,a,c,s,f,l,h,p,d=10,v=d,_=90,y=360,g=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(p(c).slice(1),h(i).reverse().slice(1),p(s).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],s=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),s>c&&(n=s,s=c,c=n),t.precision(g)):[[o,s],[i,c]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],a=+n[0][1],u=+n[1][1],r>e&&(n=r,r=e,e=n),a>u&&(n=a,a=u,u=n),t.precision(g)):[[r,a],[e,u]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(_=+n[0],y=+n[1],t):[_,y]},t.stepMinor=function(n){return arguments.length?(d=+n[0],v=+n[1],t):[d,v]},t.precision=function(n){return arguments.length?(g=+n,f=wi(a,u,90),l=Mi(r,e,g),h=wi(s,c,90),p=Mi(o,i,g),t):g},t.extentMajor([[-180,-90+k_],[180,90-k_]]).extentMinor([[-180,-80-k_],[180,80+k_]])}function ki(){return Ti()()}function Ni(){Fy.point=Si}function Si(t,n){Fy.point=Ei,ay=sy=t,cy=fy=n}function Ei(t,n){Oy.add(fy*t-sy*n),sy=t,fy=n}function Ai(){Ei(ay,cy)}function Ci(t,n){t<Iy&&(Iy=t),t>By&&(By=t),n<Yy&&(Yy=n),n>Hy&&(Hy=n)}function zi(t,n){Xy+=t,$y+=n,++Vy}function Pi(){tg.point=Li}function Li(t,n){tg.point=Ri,zi(py=t,dy=n)}function Ri(t,n){var e=t-py,r=n-dy,i=B_(e*e+r*r);Wy+=i*(py+t)/2,Zy+=i*(dy+n)/2,Gy+=i,zi(py=t,dy=n)}function qi(){tg.point=zi}function Ui(){tg.point=Oi}function Di(){Fi(ly,hy)}function Oi(t,n){tg.point=Fi,zi(ly=py=t,hy=dy=n)}function Fi(t,n){var e=t-py,r=n-dy,i=B_(e*e+r*r);Wy+=i*(py+t)/2,Zy+=i*(dy+n)/2,Gy+=i,i=dy*t-py*n,Jy+=i*(py+t),Qy+=i*(dy+n),Ky+=3*i,zi(py=t,dy=n)}function Ii(t){this._context=t}function Yi(t,n){ag.point=Bi,eg=ig=t,rg=og=n}function Bi(t,n){ig-=t,og-=n,ug.add(B_(ig*ig+og*og)),ig=t,og=n}function Hi(){this._string=[]}function ji(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Xi(t){return t.length>1}function $i(t,n){return((t=t.x)[0]<0?t[1]-S_-k_:S_-t[1])-((n=n.x)[0]<0?n[1]-S_-k_:S_-n[1])}function Vi(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,u){var a=o>0?N_:-N_,c=P_(o-e);P_(c-N_)<k_?(t.point(e,r=(r+u)/2>0?S_:-S_),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),n=0):i!==a&&c>=N_&&(P_(e-i)<k_&&(e-=i*k_),P_(o-a)<k_&&(o-=a*k_),r=Wi(e,r,o,u),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=o,r=u),i=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function Wi(t,n,e,r){var i,o,u=I_(t-e);return P_(u)>k_?L_((I_(n)*(o=q_(r))*I_(e)-I_(r)*(i=q_(n))*I_(t))/(i*o*u)):(n+r)/2}function Zi(t,n,e,r){var i;if(null==t)i=e*S_,r.point(-N_,i),r.point(0,i),r.point(N_,i),r.point(N_,0),r.point(N_,-i),r.point(0,-i),r.point(-N_,-i),r.point(-N_,0),r.point(-N_,i);else if(P_(t[0]-n[0])>k_){var o=t[0]<n[0]?N_:-N_;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}function Gi(t){return function(n){var e=new Ji;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Ji(){}function Qi(t,n,e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),$_(e,t.stream(jy));var u=jy.result(),a=Math.min(r/(u[1][0]-u[0][0]),i/(u[1][1]-u[0][1])),c=+n[0][0]+(r-a*(u[1][0]+u[0][0]))/2,s=+n[0][1]+(i-a*(u[1][1]+u[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([c,s])}function Ki(t,n,e){return Qi(t,[[0,0],n],e)}function to(t){return Gi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function no(t,n){function e(r,i,o,u,a,c,s,f,l,h,p,d,v,_){var y=s-r,g=f-i,m=y*y+g*g;if(m>4*n&&v--){var x=u+h,b=a+p,w=c+d,M=B_(x*x+b*b+w*w),T=mr(w/=M),k=P_(P_(w)-1)<k_||P_(o-l)<k_?(o+l)/2:R_(b,x),N=t(k,T),S=N[0],E=N[1],A=S-r,C=E-i,z=g*A-y*C;(z*z/m>n||P_((y*A+g*C)/m-.5)>.3||u*h+a*p+c*d<dg)&&(e(r,i,o,u,a,c,S,E,k,x/=M,b/=M,w,v,_),_.point(S,E),e(S,E,k,x,b,w,s,f,l,h,p,d,v,_))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){y=NaN,w.point=o,n.lineStart()}function o(r,i){var o=Cr([r,i]),u=t(r,i);e(y,g,_,m,x,b,y=u[0],g=u[1],_=r,m=o[0],x=o[1],b=o[2],pg,n),n.point(y,g)}function u(){w.point=r,n.lineEnd()}function a(){i(),w.point=c,w.lineEnd=s}function c(t,n){o(f=t,n),l=y,h=g,p=m,d=x,v=b,w.point=o}function s(){e(y,g,_,m,x,b,l,h,f,p,d,v,pg,n),w.lineEnd=u,u()}var f,l,h,p,d,v,_,y,g,m,x,b,w={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),w.lineStart=a},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}function eo(t){return ro(function(){return t})()}function ro(t){function n(t){return t=f(t[0]*z_,t[1]*z_),[t[0]*_+a,c-t[1]*_]}function e(t){return(t=f.invert((t[0]-a)/_,(c-t[1])/_))&&[t[0]*C_,t[1]*C_]}function r(t,n){return t=u(t,n),[t[0]*_+a,c-t[1]*_]}function i(){f=ry(s=ri(b,w,M),u);var t=u(m,x);return a=y-t[0]*_,c=g+t[1]*_,o()}function o(){return d=v=null,n}var u,a,c,s,f,l,h,p,d,v,_=150,y=480,g=250,m=0,x=0,b=0,w=0,M=0,T=null,k=fg,N=null,S=Uy,E=.5,A=vg(r,E);return n.stream=function(t){return d&&v===t?d:d=_g(k(s,A(S(v=t))))},n.clipAngle=function(t){return arguments.length?(k=+t?lg(T=t*z_,6*z_):(T=null,fg),o()):T*C_},n.clipExtent=function(t){return arguments.length?(S=null==t?(N=l=h=p=null,Uy):li(N=+t[0][0],l=+t[0][1],h=+t[1][0],p=+t[1][1]),o()):null==N?null:[[N,l],[h,p]]},n.scale=function(t){return arguments.length?(_=+t,i()):_},n.translate=function(t){return arguments.length?(y=+t[0],g=+t[1],i()):[y,g]},n.center=function(t){return arguments.length?(m=t[0]%360*z_,x=t[1]%360*z_,i()):[m*C_,x*C_]},n.rotate=function(t){return arguments.length?(b=t[0]%360*z_,w=t[1]%360*z_,M=t.length>2?t[2]%360*z_:0,i()):[b*C_,w*C_,M*C_]},n.precision=function(t){return arguments.length?(A=vg(r,E=t*t),o()):B_(E)},n.fitExtent=function(t,e){return Qi(n,t,e)},n.fitSize=function(t,e){return Ki(n,t,e)},function(){return u=t.apply(this,arguments),n.invert=u.invert&&e,i()}}function io(t){var n=0,e=N_/3,r=ro(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*z_,e=t[1]*z_):[n*C_,e*C_]},i}function oo(t){function n(t,n){return[t*e,I_(n)/e]}var e=q_(t);return n.invert=function(t,n){return[t/e,mr(n*e)]},n}function uo(t,n){function e(t,n){var e=B_(o-2*i*I_(n))/i;return[e*I_(t*=i),u-e*q_(t)]}var r=I_(t),i=(r+I_(n))/2;if(P_(i)<k_)return oo(t);var o=1+r*(2*i-r),u=B_(o)/i;return e.invert=function(t,n){var e=u-n;return[R_(t,P_(e))/i*Y_(e),mr((o-(t*t+e*e)*i*i)/(2*i))]},e}function ao(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}function co(t){return function(n,e){var r=q_(n),i=q_(e),o=t(r*i);return[o*i*I_(n),o*I_(e)]}}function so(t){return function(n,e){var r=B_(n*n+e*e),i=t(r),o=I_(i),u=q_(i);return[R_(n*o,r*u),mr(r&&e*o/r)]}}function fo(t,n){return[t,O_(H_((S_+n)/2))]}function lo(t){function n(){var n=N_*a(),u=o(vy(o.rotate()).invert([0,0]));return s(null==f?[[u[0]-n,u[1]-n],[u[0]+n,u[1]+n]]:t===fo?[[Math.max(u[0]-n,f),e],[Math.min(u[0]+n,r),i]]:[[f,Math.max(u[1]-n,e)],[r,Math.min(u[1]+n,i)]])}var e,r,i,o=eo(t),u=o.center,a=o.scale,c=o.translate,s=o.clipExtent,f=null;return o.scale=function(t){return arguments.length?(a(t),n()):a()},o.translate=function(t){return arguments.length?(c(t),n()):c()},o.center=function(t){return arguments.length?(u(t),n()):u()},o.clipExtent=function(t){return arguments.length?(null==t?f=e=r=i=null:(f=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),n()):null==f?null:[[f,e],[r,i]]},n()}function ho(t){return H_((S_+t)/2)}function po(t,n){function e(t,n){o>0?n<-S_+k_&&(n=-S_+k_):n>S_-k_&&(n=S_-k_);var e=o/F_(ho(n),i);return[e*I_(i*t),o-e*q_(i*t)]}var r=q_(t),i=t===n?I_(t):O_(r/q_(n))/O_(ho(n)/ho(t)),o=r*F_(ho(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=Y_(i)*B_(t*t+e*e);return[R_(t,P_(e))/i*Y_(e),2*L_(F_(o/r,1/i))-S_]},e):fo}function vo(t,n){return[t,n]}function _o(t,n){function e(t,n){var e=o-n,r=i*t;return[e*I_(r),o-e*q_(r)]}var r=q_(t),i=t===n?I_(t):(r-q_(n))/(n-t),o=r/i+t;return P_(i)<k_?vo:(e.invert=function(t,n){var e=o-n;return[R_(t,P_(e))/i*Y_(e),o-Y_(i)*B_(t*t+e*e)]},e)}function yo(t,n){var e=q_(n),r=q_(t)*e;return[e*I_(t)/r,I_(n)/r]}function go(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?Uy:Gi({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function mo(t,n){return[q_(n)*I_(t),I_(n)]}function xo(t,n){var e=q_(n),r=1+q_(t)*e;return[e*I_(t)/r,I_(n)/r]}function bo(t,n){return[O_(H_((S_+n)/2)),-t]}function wo(t,n){return t.parent===n.parent?1:2}function Mo(t){return t.reduce(To,0)/t.length}function To(t,n){return t+n.x}function ko(t){return 1+t.reduce(No,0)}function No(t,n){return Math.max(t,n.y)}function So(t){for(var n;n=t.children;)t=n[0];return t}function Eo(t){for(var n;n=t.children;)t=n[n.length-1];return t}function Ao(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function Co(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function zo(t,n){var e,r,i,o,u,a=new Uo(t),c=+t.value&&(a.value=t.value),s=[a];for(null==n&&(n=Lo);e=s.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(u=i.length))for(e.children=new Array(u),o=u-1;o>=0;--o)s.push(r=e.children[o]=new Uo(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(qo)}function Po(){return zo(this).eachBefore(Ro)}function Lo(t){return t.children}function Ro(t){t.data=t.data.data}function qo(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Uo(t){this.data=t,this.depth=this.height=0,this.parent=null}function Do(t){this._=t,this.next=null}function Oo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r-n.r;return i*i+1e-6>e*e+r*r}function Fo(t,n){var e,r,i,o=null,u=t.head;switch(n.length){case 1:e=Io(n[0]);break;case 2:e=Yo(n[0],n[1]);break;case 3:e=Bo(n[0],n[1],n[2])}for(;u;)i=u._,r=u.next,e&&Oo(e,i)?o=u:(o?(t.tail=o,o.next=null):t.head=t.tail=null,n.push(i),e=Fo(t,n),n.pop(),t.head?(u.next=t.head,t.head=u):(u.next=null,t.head=t.tail=u),o=t.tail,o.next=r),u=r;return t.tail=o,e}function Io(t){return{x:t.x,y:t.y,r:t.r}}function Yo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,u=n.y,a=n.r,c=o-e,s=u-r,f=a-i,l=Math.sqrt(c*c+s*s);return{x:(e+o+c/l*f)/2,y:(r+u+s/l*f)/2,r:(l+i+a)/2}}function Bo(t,n,e){var r=t.x,i=t.y,o=t.r,u=n.x,a=n.y,c=n.r,s=e.x,f=e.y,l=e.r,h=2*(r-u),p=2*(i-a),d=2*(c-o),v=r*r+i*i-o*o-u*u-a*a+c*c,_=2*(r-s),y=2*(i-f),g=2*(l-o),m=r*r+i*i-o*o-s*s-f*f+l*l,x=_*p-h*y,b=(p*m-y*v)/x-r,w=(y*d-p*g)/x,M=(_*v-h*m)/x-i,T=(h*g-_*d)/x,k=w*w+T*T-1,N=2*(b*w+M*T+o),S=b*b+M*M-o*o,E=(-N-Math.sqrt(N*N-4*k*S))/(2*k);return{x:b+w*E+r,y:M+T*E+i,r:E}}function Ho(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,u=t.r+e.r,a=n.x-r,c=n.y-i,s=a*a+c*c;if(s){var f=.5+((u*=u)-(o*=o))/(2*s),l=Math.sqrt(Math.max(0,2*o*(u+s)-(u-=s)*u-o*o))/(2*s);e.x=r+f*a+l*c,e.y=i+f*c-l*a}else e.x=r+u,e.y=i}function jo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i-1e-6>e*e+r*r}function Xo(t,n,e){var r=t._,i=t.next._,o=r.r+i.r,u=(r.x*i.r+i.x*r.r)/o-n,a=(r.y*i.r+i.y*r.r)/o-e;return u*u+a*a}function $o(t){this._=t,this.next=null,this.previous=null}function Vo(t){if(!(i=t.length))return 0;var n,e,r,i;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Ho(e,n,r=t[2]);var o,u,a,c,s,f,l,h=n.r*n.r,p=e.r*e.r,d=r.r*r.r,v=h+p+d,_=h*n.x+p*e.x+d*r.x,y=h*n.y+p*e.y+d*r.y;n=new $o(n),e=new $o(e),r=new $o(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(a=3;a<i;++a){Ho(n._,e._,r=t[a]),r=new $o(r),c=e.next,s=n.previous,f=e._.r,l=n._.r;do{if(f<=l){if(jo(c._,r._)){e=c,n.next=e,e.previous=n,--a;continue t}f+=c._.r,c=c.next}else{if(jo(s._,r._)){n=s,n.next=e,e.previous=n,--a;continue t}l+=s._.r,s=s.previous}}while(c!==s.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,v+=d=r._.r*r._.r,_+=d*r._.x,y+=d*r._.y,h=Xo(n,o=_/v,u=y/v);(r=r.next)!==e;)(d=Xo(r,o,u))<h&&(n=r,h=d);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=$g(n),a=0;a<i;++a)n=t[a],n.x-=r.x,n.y-=r.y;return r.r}function Wo(t){return null==t?null:Zo(t)}function Zo(t){if("function"!=typeof t)throw new Error;return t}function Go(){return 0}function Jo(t){return Math.sqrt(t.value)}function Qo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Ko(t,n){return function(e){if(r=e.children){var r,i,o,u=r.length,a=t(e)*n||0;if(a)for(i=0;i<u;++i)r[i].r+=a;if(o=Vo(r),a)for(i=0;i<u;++i)r[i].r-=a;e.r=o+a}}}function tu(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function nu(t){return t.id}function eu(t){return t.parentId}function ru(t,n){return t.parent===n.parent?1:2}function iu(t){var n=t.children;return n?n[0]:t.t}function ou(t){var n=t.children;return n?n[n.length-1]:t.t}function uu(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function au(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)n=i[o],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function cu(t,n,e){return t.a.parent===n.parent?t.a:e}function su(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function fu(t){for(var n,e,r,i,o,u=new su(t,0),a=[u];n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)a.push(e=n.children[i]=new su(r[i],i)),e.parent=n;return(u.parent=new su(null,0)).children=[u],u}function lu(t,n,e,r,i,o){for(var u,a,c,s,f,l,h,p,d,v,_,y=[],g=n.children,m=0,x=0,b=g.length,w=n.value;m<b;){c=i-e,s=o-r;do{f=g[x++].value}while(!f&&x<b);for(l=h=f,v=Math.max(s/c,c/s)/(w*t),_=f*f*v,d=Math.max(h/_,_/l);x<b;++x){if(f+=a=g[x].value,a<l&&(l=a),a>h&&(h=a),_=f*f*v,(p=Math.max(h/_,_/l))>d){f-=a;break}d=p}y.push(u={value:f,dice:c<s,children:g.slice(m,x)}),u.dice?Jg(u,e,r,i,w?r+=s*f/w:o):im(u,e,r,w?e+=c*f/w:i,o),w-=f,m=x}return y}function hu(t,n){return t[0]-n[0]||t[1]-n[1]}function pu(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&pm(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function du(t){this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function vu(t){if(!t._start)try{_u(t)}catch(n){if(t._tasks[t._ended+t._active-1])gu(t,n);else if(!t._data)throw n}}function _u(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=yu(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||gm)}}function yu(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?gu(t,e):(t._data[n]=r,t._waiting?vu(t):mu(t))))}}function gu(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(n){}t._active=NaN,mu(t)}function mu(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function xu(t){if(null==t)t=1/0;else if(!((t=+t)>=1))throw new Error("invalid concurrency");return new du(t)}function bu(t){return function(n,e){t(null==n?e:null)}}function wu(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function Mu(t,n){return function(e){return t(e.responseText,n)}}function Tu(t){function n(n){var o=n+"",u=e.get(o);if(!u){if(i!==Om)return i;e.set(o,u=r.push(n))}return t[(u-1)%t.length]}var e=He(),r=[],i=Om;return t=null==t?[]:Dm.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=He();for(var i,o,u=-1,a=t.length;++u<a;)e.has(o=(i=t[u])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=Dm.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return Tu().domain(r).range(t).unknown(i)},n}function ku(){function t(){var t=i().length,r=u[1]<u[0],l=u[r-0],h=u[1-r];n=(h-l)/Math.max(1,t-c+2*s),a&&(n=Math.floor(n)),l+=(h-l-n*(t-c))*f,e=n*(1-c),a&&(l=Math.round(l),e=Math.round(e));var p=cf(t).map(function(t){return l+n*t});return o(r?p.reverse():p)}var n,e,r=Tu().unknown(void 0),i=r.domain,o=r.range,u=[0,1],a=!1,c=0,s=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},r.rangeRound=function(n){return u=[+n[0],+n[1]],a=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(a=!!n,t()):a},r.padding=function(n){return arguments.length?(c=s=Math.max(0,Math.min(1,n)),t()):c},r.paddingInner=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return ku().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)},t()}function Nu(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Nu(n())},t}function Su(){return Nu(ku().paddingInner(1))}function Eu(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Fm(n)}function Au(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function Cu(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function zu(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function Pu(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),u=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)o[a]=e(t[a],t[a+1]),u[a]=r(n[a],n[a+1]);return function(n){var e=Vs(t,n,1,i)-1;return u[e](o[e](n))}}function Lu(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Ru(t,n){function e(){return i=Math.min(a.length,c.length)>2?Pu:zu,o=u=null,r}function r(n){return(o||(o=i(a,c,f?Au(t):t,s)))(+n)}var i,o,u,a=Ym,c=Ym,s=qh,f=!1;return r.invert=function(t){return(u||(u=i(c,a,Eu,f?Cu(n):n)))(+t)},r.domain=function(t){return arguments.length?(a=Um.call(t,Im),e()):a.slice()},r.range=function(t){return arguments.length?(c=Dm.call(t),e()):c.slice()},r.rangeRound=function(t){return c=Dm.call(t),s=Uh,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function qu(t){var n=t.domain;return t.ticks=function(t){var e=n();return hf(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return Bm(n(),t,e)},t.nice=function(e){null==e&&(e=10);var i,o=n(),u=0,a=o.length-1,c=o[u],s=o[a];return s<c&&(i=c,c=s,s=i,i=u,u=a,a=i),i=r(c,s,e),i>0?(c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i,i=r(c,s,e)):i<0&&(c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i,i=r(c,s,e)),i>0?(o[u]=Math.floor(c/i)*i,o[a]=Math.ceil(s/i)*i,n(o)):i<0&&(o[u]=Math.ceil(c*i)/i,o[a]=Math.floor(s*i)/i,n(o)),t},t}function Uu(){var t=Ru(Eu,Ch);return t.copy=function(){return Lu(t,Uu())},qu(t)}function Du(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Um.call(e,Im),t):n.slice()},t.copy=function(){return Du().domain(n)},qu(t)}function Ou(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:Fm(n)}function Fu(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function Iu(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Yu(t){return 10===t?Iu:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Bu(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Hu(t){return function(n){return-t(-n)}}function ju(){function n(){return o=Bu(i),u=Yu(i),r()[0]<0&&(o=Hu(o),u=Hu(u)),e}var e=Ru(Ou,Fu).domain([1,10]),r=e.domain,i=10,o=Bu(10),u=Yu(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),a=e[0],c=e[e.length-1];(n=c<a)&&(h=a,a=c,c=h);var s,f,l,h=o(a),p=o(c),d=null==t?10:+t,v=[];if(!(i%1)&&p-h<d){if(h=Math.round(h)-1,p=Math.round(p)+1,a>0){for(;h<p;++h)for(f=1,s=u(h);f<i;++f)if(!((l=s*f)<a)){if(l>c)break;v.push(l)}}else for(;h<p;++h)for(f=i-1,s=u(h);f>=1;--f)if(!((l=s*f)<a)){if(l>c)break;v.push(l)}}else v=hf(h,p,Math.min(p-h,d)).map(u);return n?v.reverse():v},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var a=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/u(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=a?r(t):""}},e.nice=function(){return r(Hm(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return Lu(e,ju().base(i))},e}function Xu(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function $u(){function t(t,n){return(n=Xu(n,e)-(t=Xu(t,e)))?function(r){return(Xu(r,e)-t)/n}:Fm(n)}function n(t,n){return n=Xu(n,e)-(t=Xu(t,e)),function(r){return Xu(t+n*r,1/e)}}var e=1,r=Ru(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return Lu(r,$u().exponent(e))},qu(r)}function Vu(){return $u().exponent(.5)}function Wu(){function t(){var t=0,o=Math.max(1,r.length);for(i=new Array(o-1);++t<o;)i[t-1]=vf(e,t/o);return n}function n(t){if(!isNaN(t=+t))return r[Vs(i,t)]}var e=[],r=[],i=[];return n.invertExtent=function(t){var n=r.indexOf(t);return n<0?[NaN,NaN]:[n>0?i[n-1]:e[0],n<i.length?i[n]:e[e.length-1]]},n.domain=function(n){if(!arguments.length)return e.slice();e=[];for(var r,i=0,o=n.length;i<o;++i)null==(r=n[i])||isNaN(r=+r)||e.push(r);return e.sort(js),t()},n.range=function(n){return arguments.length?(r=Dm.call(n),t()):r.slice()},n.quantiles=function(){return i.slice()},n.copy=function(){return Wu().domain(e).range(r)},n}function Zu(){function t(t){if(t<=t)return u[Vs(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(u=Dm.call(t)).length-1,n()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Zu().domain([e,r]).range(u)},qu(t)}function Gu(){function t(t){if(t<=t)return e[Vs(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=Dm.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=Dm.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return Gu().domain(n).range(e)},t}function Ju(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(new Date(+e))}while(n(e,o),t(e),e<r);return u},i.filter=function(e){return Ju(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return jm.setTime(+n),Xm.setTime(+r),t(jm),t(Xm),Math.floor(e(jm,Xm))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}function Qu(t){return Ju(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Wm)/Zm})}function Ku(t){return Ju(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Zm})}function ta(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function na(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function ea(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function ra(t){function n(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=Vx[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),
u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function e(t,n){return function(e){var i=ea(1900);if(r(i,t,e+="",0)!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var o="Z"in i?na(ea(i.y)).getUTCDay():n(ea(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(o+5)%7:i.w+7*i.U-(o+6)%7}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,na(i)):n(i)}}function r(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=B[i in Vx?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=C.exec(n.slice(e));return r?(t.p=z[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=R.exec(n.slice(e));return r?(t.w=q[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=P.exec(n.slice(e));return r?(t.w=L[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=O.exec(n.slice(e));return r?(t.m=F[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){var r=U.exec(n.slice(e));return r?(t.m=D[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){return r(t,w,n,e)}function f(t,n,e){return r(t,M,n,e)}function l(t,n,e){return r(t,T,n,e)}function h(t){return S[t.getDay()]}function p(t){return N[t.getDay()]}function d(t){return A[t.getMonth()]}function v(t){return E[t.getMonth()]}function _(t){return k[+(t.getHours()>=12)]}function y(t){return S[t.getUTCDay()]}function g(t){return N[t.getUTCDay()]}function m(t){return A[t.getUTCMonth()]}function x(t){return E[t.getUTCMonth()]}function b(t){return k[+(t.getUTCHours()>=12)]}var w=t.dateTime,M=t.date,T=t.time,k=t.periods,N=t.days,S=t.shortDays,E=t.months,A=t.shortMonths,C=ua(k),z=aa(k),P=ua(N),L=aa(N),R=ua(S),q=aa(S),U=ua(E),D=aa(E),O=ua(A),F=aa(A),I={a:h,A:p,b:d,B:v,c:null,d:wa,e:wa,H:Ma,I:Ta,j:ka,L:Na,m:Sa,M:Ea,p:_,S:Aa,U:Ca,w:za,W:Pa,x:null,X:null,y:La,Y:Ra,Z:qa,"%":Ga},Y={a:y,A:g,b:m,B:x,c:null,d:Ua,e:Ua,H:Da,I:Oa,j:Fa,L:Ia,m:Ya,M:Ba,p:b,S:Ha,U:ja,w:Xa,W:$a,x:null,X:null,y:Va,Y:Wa,Z:Za,"%":Ga},B={a:o,A:u,b:a,B:c,c:s,d:va,e:va,H:ya,I:ya,j:_a,L:xa,m:da,M:ga,p:i,S:ma,U:sa,w:ca,W:fa,x:f,X:l,y:ha,Y:la,Z:pa,"%":ba};return I.x=n(M,I),I.X=n(T,I),I.c=n(w,I),Y.x=n(M,Y),Y.X=n(T,Y),Y.c=n(w,Y),{format:function(t){var e=n(t+="",I);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",ta);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Y);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,na);return n.toString=function(){return t},n}}}function ia(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function oa(t){return t.replace(Gx,"\\$&")}function ua(t){return new RegExp("^(?:"+t.map(oa).join("|")+")","i")}function aa(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function ca(t,n,e){var r=Wx.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function sa(t,n,e){var r=Wx.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function fa(t,n,e){var r=Wx.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function la(t,n,e){var r=Wx.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function ha(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function pa(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function da(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function va(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function _a(t,n,e){var r=Wx.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function ya(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function ga(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function ma(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function xa(t,n,e){var r=Wx.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function ba(t,n,e){var r=Zx.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function wa(t,n){return ia(t.getDate(),n,2)}function Ma(t,n){return ia(t.getHours(),n,2)}function Ta(t,n){return ia(t.getHours()%12||12,n,2)}function ka(t,n){return ia(1+ex.count(xx(t),t),n,3)}function Na(t,n){return ia(t.getMilliseconds(),n,3)}function Sa(t,n){return ia(t.getMonth()+1,n,2)}function Ea(t,n){return ia(t.getMinutes(),n,2)}function Aa(t,n){return ia(t.getSeconds(),n,2)}function Ca(t,n){return ia(ix.count(xx(t),t),n,2)}function za(t){return t.getDay()}function Pa(t,n){return ia(ox.count(xx(t),t),n,2)}function La(t,n){return ia(t.getFullYear()%100,n,2)}function Ra(t,n){return ia(t.getFullYear()%1e4,n,4)}function qa(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ia(n/60|0,"0",2)+ia(n%60,"0",2)}function Ua(t,n){return ia(t.getUTCDate(),n,2)}function Da(t,n){return ia(t.getUTCHours(),n,2)}function Oa(t,n){return ia(t.getUTCHours()%12||12,n,2)}function Fa(t,n){return ia(1+Nx.count(jx(t),t),n,3)}function Ia(t,n){return ia(t.getUTCMilliseconds(),n,3)}function Ya(t,n){return ia(t.getUTCMonth()+1,n,2)}function Ba(t,n){return ia(t.getUTCMinutes(),n,2)}function Ha(t,n){return ia(t.getUTCSeconds(),n,2)}function ja(t,n){return ia(Ex.count(jx(t),t),n,2)}function Xa(t){return t.getUTCDay()}function $a(t,n){return ia(Ax.count(jx(t),t),n,2)}function Va(t,n){return ia(t.getUTCFullYear()%100,n,2)}function Wa(t,n){return ia(t.getUTCFullYear()%1e4,n,4)}function Za(){return"+0000"}function Ga(){return"%"}function Ja(n){return Xx=ra(n),t.timeFormat=Xx.format,t.timeParse=Xx.parse,t.utcFormat=Xx.utcFormat,t.utcParse=Xx.utcParse,Xx}function Qa(t){return t.toISOString()}function Ka(t){var n=new Date(t);return isNaN(n)?null:n}function tc(t){return new Date(t)}function nc(t){return t instanceof Date?+t:+new Date(+t)}function ec(t,n,e,r,o,u,a,c,s){function f(i){return(a(i)<i?v:u(i)<i?_:o(i)<i?y:r(i)<i?g:n(i)<i?e(i)<i?m:x:t(i)<i?b:w)(i)}function l(n,e,r,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(r-e)/n,a=Xs(function(t){return t[2]}).right(M,u);a===M.length?(o=i(e/ob,r/ob,n),n=t):a?(a=M[u/M[a-1][2]<M[a][2]/u?a-1:a],o=a[1],n=a[0]):(o=i(e,r,n),n=c)}return null==o?n:n.every(o)}var h=Ru(Eu,Ch),p=h.invert,d=h.domain,v=s(".%L"),_=s(":%S"),y=s("%I:%M"),g=s("%I %p"),m=s("%a %d"),x=s("%b %d"),b=s("%B"),w=s("%Y"),M=[[a,1,Kx],[a,5,5*Kx],[a,15,15*Kx],[a,30,30*Kx],[u,1,tb],[u,5,5*tb],[u,15,15*tb],[u,30,30*tb],[o,1,nb],[o,3,3*nb],[o,6,6*nb],[o,12,12*nb],[r,1,eb],[r,2,2*eb],[e,1,rb],[n,1,ib],[n,3,3*ib],[t,1,ob]];return h.invert=function(t){return new Date(p(t))},h.domain=function(t){return arguments.length?d(Um.call(t,nc)):d().map(tc)},h.ticks=function(t,n){var e,r=d(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],u?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:s(n)},h.nice=function(t,n){var e=d();return(t=l(t,e[0],e[e.length-1],n))?d(Hm(e,t)):h},h.copy=function(){return Lu(h,ec(t,n,e,r,o,u,a,c,s))},h}function rc(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function ic(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return ic(t).domain([e,r]).clamp(i)},qu(n)}function oc(t){return t>1?0:t<-1?zb:Math.acos(t)}function uc(t){return t>=1?Pb:t<=-1?-Pb:Math.asin(t)}function ac(t){return t.innerRadius}function cc(t){return t.outerRadius}function sc(t){return t.startAngle}function fc(t){return t.endAngle}function lc(t){return t&&t.padAngle}function hc(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,f=u-i,l=a-o,h=(f*(n-o)-l*(t-i))/(l*c-f*s);return[t+h*c,n+h*s]}function pc(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/Ab(a*a+c*c),f=s*c,l=-s*a,h=t+f,p=n+l,d=e+f,v=r+l,_=(h+d)/2,y=(p+v)/2,g=d-h,m=v-p,x=g*g+m*m,b=i-o,w=h*v-d*p,M=(m<0?-1:1)*Ab(Nb(0,b*b*x-w*w)),T=(w*m-g*M)/x,k=(-w*g-m*M)/x,N=(w*m+g*M)/x,S=(-w*g+m*M)/x,E=T-_,A=k-y,C=N-_,z=S-y;return E*E+A*A>C*C+z*z&&(T=N,k=S),{cx:T,cy:k,x01:-f,y01:-l,x11:T*(i/b-1),y11:k*(i/b-1)}}function dc(t){this._context=t}function vc(t){return t[0]}function _c(t){return t[1]}function yc(t){this._curve=t}function gc(t){function n(n){return new yc(t(n))}return n._curve=t,n}function mc(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(gc(t)):n()._curve},t}function xc(t){return t.source}function bc(t){return t.target}function wc(t){function n(){var n,a=jb.call(arguments),c=e.apply(this,a),s=r.apply(this,a);if(u||(u=n=Ue()),t(u,+i.apply(this,(a[0]=c,a)),+o.apply(this,a),+i.apply(this,(a[0]=s,a)),+o.apply(this,a)),n)return u=null,n+""||null}var e=xc,r=bc,i=vc,o=_c,u=null;return n.source=function(t){return arguments.length?(e=t,n):e},n.target=function(t){return arguments.length?(r=t,n):r},n.x=function(t){return arguments.length?(i="function"==typeof t?t:wb(+t),n):i},n.y=function(t){return arguments.length?(o="function"==typeof t?t:wb(+t),n):o},n.context=function(t){return arguments.length?(u=null==t?null:t,n):u},n}function Mc(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Tc(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function kc(t,n,e,r,i){var o=Xb(n,e),u=Xb(n,e=(e+i)/2),a=Xb(r,e),c=Xb(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(u[0],u[1],a[0],a[1],c[0],c[1])}function Nc(){return wc(Mc)}function Sc(){return wc(Tc)}function Ec(){var t=wc(kc);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}function Ac(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function Cc(t){this._context=t}function zc(t){this._context=t}function Pc(t){this._context=t}function Lc(t,n){this._basis=new Cc(t),this._beta=n}function Rc(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function qc(t,n){this._context=t,this._k=(1-n)/6}function Uc(t,n){this._context=t,this._k=(1-n)/6}function Dc(t,n){this._context=t,this._k=(1-n)/6}function Oc(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>Cb){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>Cb){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function Fc(t,n){this._context=t,this._alpha=n}function Ic(t,n){this._context=t,this._alpha=n}function Yc(t,n){this._context=t,this._alpha=n}function Bc(t){this._context=t}function Hc(t){return t<0?-1:1}function jc(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Hc(o)+Hc(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function Xc(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function $c(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function Vc(t){this._context=t}function Wc(t){this._context=new Zc(t)}function Zc(t){this._context=t}function Gc(t){return new Vc(t)}function Jc(t){return new Wc(t)}function Qc(t){this._context=t}function Kc(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function ts(t,n){this._context=t,this._t=n}function ns(t){return new ts(t,0)}function es(t){return new ts(t,1)}function rs(t,n){return t[n]}function is(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function os(t){return t[0]}function us(t){return t[1]}function as(){this._=null}function cs(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function ss(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function fs(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ls(t){for(;t.L;)t=t.L;return t}function hs(t,n,e,r){var i=[null,null],o=Yw.push(i)-1;return i.left=t,i.right=n,e&&ds(i,t,n,e),r&&ds(i,n,t,r),Fw[t.index].halfedges.push(o),Fw[n.index].halfedges.push(o),i}function ps(t,n,e){var r=[n,e];return r.left=t,r}function ds(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function vs(t,n,e,r,i){var o,u=t[0],a=t[1],c=u[0],s=u[1],f=a[0],l=a[1],h=0,p=1,d=f-c,v=l-s;if(o=n-c,d||!(o>0)){if(o/=d,d<0){if(o<h)return;o<p&&(p=o)}else if(d>0){if(o>p)return;o>h&&(h=o)}if(o=r-c,d||!(o<0)){if(o/=d,d<0){if(o>p)return;o>h&&(h=o)}else if(d>0){if(o<h)return;o<p&&(p=o)}if(o=e-s,v||!(o>0)){if(o/=v,v<0){if(o<h)return;o<p&&(p=o)}else if(v>0){if(o>p)return;o>h&&(h=o)}if(o=i-s,v||!(o<0)){if(o/=v,v<0){if(o>p)return;o>h&&(h=o)}else if(v>0){if(o<h)return;o<p&&(p=o)}return!(h>0||p<1)||(h>0&&(t[0]=[c+h*d,s+h*v]),p<1&&(t[1]=[c+p*d,s+p*v]),!0)}}}}}function _s(t,n,e,r,i){var o=t[1];if(o)return!0;var u,a,c=t[0],s=t.left,f=t.right,l=s[0],h=s[1],p=f[0],d=f[1],v=(l+p)/2,_=(h+d)/2;if(d===h){if(v<n||v>=r)return;if(l>p){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=(l-p)/(d-h),a=_-u*v,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(e-a)/u,e];o=[(i-a)/u,i]}else{if(c){if(c[1]<e)return}else c=[(i-a)/u,i];o=[(e-a)/u,e]}else if(h<d){if(c){if(c[0]>=r)return}else c=[n,u*n+a];o=[r,u*r+a]}else{if(c){if(c[0]<n)return}else c=[r,u*r+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function ys(t,n,e,r){for(var i,o=Yw.length;o--;)_s(i=Yw[o],t,n,e,r)&&vs(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>jw||Math.abs(i[0][1]-i[1][1])>jw)||delete Yw[o]}function gs(t){return Fw[t.index]={site:t,halfedges:[]}}function ms(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function xs(t,n){return n[+(n.left!==t.site)]}function bs(t,n){return n[+(n.left===t.site)]}function ws(){for(var t,n,e,r,i=0,o=Fw.length;i<o;++i)if((t=Fw[i])&&(r=(n=t.halfedges).length)){var u=new Array(r),a=new Array(r);for(e=0;e<r;++e)u[e]=e,a[e]=ms(t,Yw[n[e]]);for(u.sort(function(t,n){return a[n]-a[t]}),e=0;e<r;++e)a[e]=n[u[e]];for(e=0;e<r;++e)n[e]=a[e]}}function Ms(t,n,e,r){var i,o,u,a,c,s,f,l,h,p,d,v,_=Fw.length,y=!0;for(i=0;i<_;++i)if(o=Fw[i]){for(u=o.site,c=o.halfedges,a=c.length;a--;)Yw[c[a]]||c.splice(a,1);for(a=0,s=c.length;a<s;)p=bs(o,Yw[c[a]]),d=p[0],v=p[1],f=xs(o,Yw[c[++a%s]]),l=f[0],h=f[1],(Math.abs(d-l)>jw||Math.abs(v-h)>jw)&&(c.splice(a,0,Yw.push(ps(u,p,Math.abs(d-t)<jw&&r-v>jw?[t,Math.abs(l-t)<jw?h:r]:Math.abs(v-r)<jw&&e-d>jw?[Math.abs(h-r)<jw?l:e,r]:Math.abs(d-e)<jw&&v-n>jw?[e,Math.abs(l-e)<jw?h:n]:Math.abs(v-n)<jw&&d-t>jw?[Math.abs(h-n)<jw?l:t,n]:null))-1),++s);s&&(y=!1)}if(y){var g,m,x,b=1/0;for(i=0,y=null;i<_;++i)(o=Fw[i])&&(u=o.site,g=u[0]-t,m=u[1]-n,(x=g*g+m*m)<b&&(b=x,y=o));if(y){var w=[t,n],M=[t,r],T=[e,r],k=[e,n];y.halfedges.push(Yw.push(ps(u=y.site,w,M))-1,Yw.push(ps(u,M,T))-1,Yw.push(ps(u,T,k))-1,Yw.push(ps(u,k,w))-1)}}for(i=0;i<_;++i)(o=Fw[i])&&(o.halfedges.length||delete Fw[i])}function Ts(){cs(this),this.x=this.y=this.arc=this.site=this.cy=null}function ks(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var u=i[0],a=i[1],c=r[0]-u,s=r[1]-a,f=o[0]-u,l=o[1]-a,h=2*(c*l-s*f);if(!(h>=-Xw)){var p=c*c+s*s,d=f*f+l*l,v=(l*p-s*d)/h,_=(c*d-f*p)/h,y=Bw.pop()||new Ts;y.arc=t,y.site=i,y.x=v+u,y.y=(y.cy=_+a)+Math.sqrt(v*v+_*_),t.circle=y;for(var g=null,m=Iw._;m;)if(y.y<m.y||y.y===m.y&&y.x<=m.x){if(!m.L){g=m.P;break}m=m.L}else{if(!m.R){g=m;break}m=m.R}Iw.insert(g,y),g||(Dw=y)}}}}function Ns(t){var n=t.circle;n&&(n.P||(Dw=n.N),Iw.remove(n),Bw.push(n),cs(n),t.circle=null)}function Ss(){cs(this),this.edge=this.site=this.circle=null}function Es(t){var n=Hw.pop()||new Ss;return n.site=t,n}function As(t){Ns(t),Ow.remove(t),Hw.push(t),cs(t)}function Cs(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,a=[t];As(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<jw&&Math.abs(r-c.circle.cy)<jw;)o=c.P,a.unshift(c),As(c),c=o;a.unshift(c),Ns(c);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<jw&&Math.abs(r-s.circle.cy)<jw;)u=s.N,a.push(s),As(s),s=u;a.push(s),Ns(s);var f,l=a.length;for(f=1;f<l;++f)s=a[f],c=a[f-1],ds(s.edge,c.site,s.site,i);c=a[0],s=a[l-1],s.edge=hs(c.site,s.site,null,i),ks(c),ks(s)}function zs(t){for(var n,e,r,i,o=t[0],u=t[1],a=Ow._;a;)if((r=Ps(a,u)-o)>jw)a=a.L;else{if(!((i=o-Ls(a,u))>jw)){r>-jw?(n=a.P,e=a):i>-jw?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}gs(t);var c=Es(t);if(Ow.insert(n,c),n||e){if(n===e)return Ns(n),e=Es(n.site),Ow.insert(c,e),c.edge=e.edge=hs(n.site,c.site),ks(n),void ks(e);if(!e)return void(c.edge=hs(n.site,c.site));Ns(n),Ns(e);var s=n.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,d=e.site,v=d[0]-f,_=d[1]-l,y=2*(h*_-p*v),g=h*h+p*p,m=v*v+_*_,x=[(_*g-p*m)/y+f,(h*m-v*g)/y+l];ds(e.edge,s,d,x),c.edge=hs(s,t,null,x),e.edge=hs(t,d,null,x),ks(n),ks(e)}}function Ps(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var u=t.P;if(!u)return-1/0;e=u.site;var a=e[0],c=e[1],s=c-n;if(!s)return a;var f=a-r,l=1/o-1/s,h=f/s;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*s)-c+s/2+i-o/2)))/l+r:(r+a)/2}function Ls(t,n){var e=t.N;if(e)return Ps(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function Rs(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function qs(t,n){return n[1]-t[1]||n[0]-t[0]}function Us(t,n){var e,r,i,o=t.sort(qs).pop();for(Yw=[],Fw=new Array(t.length),Ow=new as,Iw=new as;;)if(i=Dw,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(zs(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Cs(i.arc)}if(ws(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],s=+n[1][1];ys(u,a,c,s),Ms(u,a,c,s)}this.edges=Yw,this.cells=Fw,Ow=Iw=Yw=Fw=null}function Ds(t,n,e){this.target=t,this.type=n,this.transform=e}function Os(t,n,e){this.k=t,this.x=n,this.y=e}function Fs(t){return t.__zoom||Ww}function Is(){t.event.stopImmediatePropagation()}function Ys(){return!t.event.button}function Bs(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Hs(){return this.__zoom||Ww}var js=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},Xs=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}},$s=Xs(js),Vs=$s.right,Ws=$s.left,Zs=function(t,n){null==n&&(n=e);for(var r=0,i=t.length-1,o=t[0],u=new Array(i<0?0:i);r<i;)u[r]=n(o,o=t[++r]);return u},Gs=function(t,n,r){var i,o,u,a,c=t.length,s=n.length,f=new Array(c*s);for(null==r&&(r=e),i=u=0;i<c;++i)for(a=t[i],o=0;o<s;++o,++u)f[u]=r(a,n[o]);return f},Js=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Qs=function(t){return null===t?NaN:+t},Ks=function(t,n){var e,r,i=t.length,o=0,u=-1,a=0,c=0;if(null==n)for(;++u<i;)isNaN(e=Qs(t[u]))||(r=e-a,a+=r/++o,c+=r*(e-a));else for(;++u<i;)isNaN(e=Qs(n(t[u],u,t)))||(r=e-a,a+=r/++o,c+=r*(e-a));if(o>1)return c/(o-1)},tf=function(t,n){var e=Ks(t,n);return e?Math.sqrt(e):e},nf=function(t,n){var e,r,i,o=t.length,u=-1;if(null==n){for(;++u<o;)if(null!=(e=t[u])&&e>=e)for(r=i=e;++u<o;)null!=(e=t[u])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++u<o;)if(null!=(e=n(t[u],u,t))&&e>=e)for(r=i=e;++u<o;)null!=(e=n(t[u],u,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]},ef=Array.prototype,rf=ef.slice,of=ef.map,uf=function(t){return function(){return t}},af=function(t){return t},cf=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},sf=Math.sqrt(50),ff=Math.sqrt(10),lf=Math.sqrt(2),hf=function(t,n,e){var i,o,u,a=n<t,c=-1;if(a&&(i=t,t=n,n=i),0===(u=r(t,n,e))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),o=new Array(i=Math.ceil(n-t+1));++c<i;)o[c]=(t+c)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),o=new Array(i=Math.ceil(t-n+1));++c<i;)o[c]=(t-c)/u;return a&&o.reverse(),o},pf=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},df=function(){function t(t){var o,u,a=t.length,c=new Array(a);for(o=0;o<a;++o)c[o]=n(t[o],o,t);var s=e(c),f=s[0],l=s[1],h=r(c,f,l);Array.isArray(h)||(h=i(f,l,h),h=cf(Math.ceil(f/h)*h,Math.floor(l/h)*h,h));for(var p=h.length;h[0]<=f;)h.shift(),--p;for(;h[p-1]>l;)h.pop(),--p;var d,v=new Array(p+1);for(o=0;o<=p;++o)d=v[o]=[],d.x0=o>0?h[o-1]:f,d.x1=o<p?h[o]:l;for(o=0;o<a;++o)u=c[o],f<=u&&u<=l&&v[Vs(h,u,0,p)].push(t[o]);return v}var n=af,e=nf,r=pf;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:uf(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:uf([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:uf(Array.isArray(n)?rf.call(n):n),t):r},t},vf=function(t,n,e){if(null==e&&(e=Qs),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t);return u+(+e(t[o+1],o+1,t)-u)*(i-o)}},_f=function(t,n,e){return t=of.call(t,Qs).sort(js),Math.ceil((e-n)/(2*(vf(t,.75)-vf(t,.25))*Math.pow(t.length,-1/3)))},yf=function(t,n,e){return Math.ceil((e-n)/(3.5*tf(t)*Math.pow(t.length,-1/3)))},gf=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r},mf=function(t,n){var e,r=t.length,i=r,o=-1,u=0;if(null==n)for(;++o<r;)isNaN(e=Qs(t[o]))?--i:u+=e;else for(;++o<r;)isNaN(e=Qs(n(t[o],o,t)))?--i:u+=e;if(i)return u/i},xf=function(t,n){var e,r=t.length,i=-1,o=[];if(null==n)for(;++i<r;)isNaN(e=Qs(t[i]))||o.push(e);else for(;++i<r;)isNaN(e=Qs(n(t[i],i,t)))||o.push(e);return vf(o.sort(js),.5)},bf=function(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--u]=r[n];return e},wf=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r},Mf=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},Tf=function(t,n){if(e=t.length){var e,r,i=0,o=0,u=t[o];for(null==n&&(n=js);++i<e;)(n(r=t[i],u)<0||0!==n(u,u))&&(u=r,o=i);return 0===n(u,u)?o:void 0}},kf=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},Nf=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},Sf=function(t){if(!(i=t.length))return[];for(var n=-1,e=wf(t,o),r=new Array(e);++n<e;)for(var i,u=-1,a=r[n]=new Array(i);++u<i;)a[u]=t[u][n];return r},Ef=function(){return Sf(arguments)},Af=Array.prototype.slice,Cf=function(t){return t},zf=1,Pf=2,Lf=3,Rf=4,qf=1e-6,Uf={value:function(){}};_.prototype=v.prototype={constructor:_,on:function(t,n){var e,r=this._,i=y(t+"",r),o=-1,u=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=m(r[e],t.name,n);else if(null==n)for(e in r)r[e]=m(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=g(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new _(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var Df="http://www.w3.org/1999/xhtml",Of={svg:"http://www.w3.org/2000/svg",xhtml:Df,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ff=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Of.hasOwnProperty(n)?{space:Of[n],local:t}:t},If=function(t){var n=Ff(t);return(n.local?b:x)(n)},Yf=0;M.prototype=w.prototype={constructor:M,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var Bf=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var Hf=document.documentElement;if(!Hf.matches){var jf=Hf.webkitMatchesSelector||Hf.msMatchesSelector||Hf.mozMatchesSelector||Hf.oMatchesSelector;Bf=function(t){return function(){return jf.call(this,t)}}}}var Xf=Bf,$f={};if(t.event=null,"undefined"!=typeof document){"onmouseenter"in document.documentElement||($f={mouseenter:"mouseover",mouseleave:"mouseout"})}var Vf=function(t,n,e){var r,i,o=N(t+""),u=o.length;{if(!(arguments.length<2)){for(a=n?E:S,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,f=a.length;s<f;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value}},Wf=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},Zf=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},Gf=function(t){var n=Wf();return n.changedTouches&&(n=n.changedTouches[0]),Zf(t,n)},Jf=function(t){return null==t?C:function(){return this.querySelector(t)}},Qf=function(t){"function"!=typeof t&&(t=Jf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),f=0;f<c;++f)(o=a[f])&&(u=t.call(o,o.__data__,f,a))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new _t(r,this._parents)},Kf=function(t){return null==t?z:function(){return this.querySelectorAll(t)}},tl=function(t){"function"!=typeof t&&(t=Kf(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new _t(r,i)},nl=function(t){"function"!=typeof t&&(t=Xf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new _t(r,this._parents)},el=function(t){return new Array(t.length)},rl=function(){return new _t(this._enter||this._groups.map(el),this._parents)};P.prototype={constructor:P,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var il=function(t){return function(){return t}},ol="$",ul=function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?R:L,r=this._parents,i=this._groups;"function"!=typeof t&&(t=il(t));for(var o=i.length,u=new Array(o),a=new Array(o),c=new Array(o),s=0;s<o;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),d=p.length,v=a[s]=new Array(d),_=u[s]=new Array(d);e(f,l,v,_,c[s]=new Array(h),p,n);for(var y,g,m=0,x=0;m<d;++m)if(y=v[m]){for(m>=x&&(x=m+1);!(g=_[x])&&++x<d;);y._next=g||null}}return u=new _t(u,r),u._enter=a,u._exit=c,u},al=function(){return new _t(this._exit||this._groups.map(el),this._parents)},cl=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new _t(u,this._parents)},sl=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},fl=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=q);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),f=0;f<c;++f)(u=a[f])&&(s[f]=u);s.sort(n)}return new _t(i,this._parents).order()},ll=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},hl=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},pl=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},dl=function(){var t=0;return this.each(function(){++t}),t},vl=function(){return!this.node()},_l=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},yl=function(t,n){var e=Ff(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?D:U:"function"==typeof n?e.local?Y:I:e.local?F:O)(e,n))},gl=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},ml=function(t,n,e){return arguments.length>1?this.each((null==n?B:"function"==typeof n?j:H)(t,n,null==e?"":e)):X(this.node(),t)},xl=function(t,n){return arguments.length>1?this.each((null==n?$:"function"==typeof n?W:V)(t,n)):this.node()[t]};J.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var bl=function(t,n){var e=Z(t+"");if(arguments.length<2){for(var r=G(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?et:n?tt:nt)(e,n))},wl=function(t){return arguments.length?this.each(null==t?rt:("function"==typeof t?ot:it)(t)):this.node().textContent},Ml=function(t){return arguments.length?this.each(null==t?ut:("function"==typeof t?ct:at)(t)):this.node().innerHTML},Tl=function(){return this.each(st)},kl=function(){return this.each(ft)},Nl=function(t){var n="function"==typeof t?t:If(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},Sl=function(t,n){var e="function"==typeof t?t:If(t),r=null==n?lt:"function"==typeof n?n:Jf(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},El=function(){return this.each(ht)},Al=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},Cl=function(t,n){return this.each(("function"==typeof n?vt:dt)(t,n))},zl=[null];_t.prototype=yt.prototype={constructor:_t,select:Qf,selectAll:tl,filter:nl,data:ul,enter:rl,exit:al,merge:cl,order:sl,sort:fl,call:ll,nodes:hl,node:pl,size:dl,empty:vl,each:_l,attr:yl,style:ml,property:xl,classed:bl,text:wl,html:Ml,raise:Tl,lower:kl,append:Nl,insert:Sl,remove:El,datum:Al,on:Vf,dispatch:Cl};var Pl=function(t){return"string"==typeof t?new _t([[document.querySelector(t)]],[document.documentElement]):new _t([[t]],zl)},Ll=function(t){return"string"==typeof t?new _t([document.querySelectorAll(t)],[document.documentElement]):new _t([null==t?[]:t],zl)
},Rl=function(t,n,e){arguments.length<3&&(e=n,n=Wf().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Zf(t,r);return null},ql=function(t,n){null==n&&(n=Wf().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Zf(t,n[e]);return i},Ul=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Dl=function(t){var n=t.document.documentElement,e=Pl(t).on("dragstart.drag",Ul,!0);"onselectstart"in n?e.on("selectstart.drag",Ul,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")},Ol=function(t){return function(){return t}};xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var Fl=function(){function n(t){t.on("mousedown.drag",e).on("touchstart.drag",o).on("touchmove.drag",u).on("touchend.drag touchcancel.drag",a).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!h&&p.apply(this,arguments)){var n=c("mouse",d.apply(this,arguments),Gf,this,arguments);n&&(Pl(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),Dl(t.event.view),gt(),l=!1,s=t.event.clientX,f=t.event.clientY,n("start"))}}function r(){if(Ul(),!l){var n=t.event.clientX-s,e=t.event.clientY-f;l=n*n+e*e>x}y.mouse("drag")}function i(){Pl(t.event.view).on("mousemove.drag mouseup.drag",null),mt(t.event.view,l),Ul(),y.mouse("end")}function o(){if(p.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=d.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=c(r[n].identifier,i,Rl,this,arguments))&&(gt(),e("start"))}}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=y[r[n].identifier])&&(Ul(),e("drag"))}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(h&&clearTimeout(h),h=setTimeout(function(){h=null},500),n=0;n<i;++n)(e=y[r[n].identifier])&&(gt(),e("end"))}function c(e,r,i,o,u){var a,c,s,f=i(r,e),l=g.copy();if(A(new xt(n,"beforestart",a,e,m,f[0],f[1],0,0,l),function(){return null!=(t.event.subject=a=_.apply(o,u))&&(c=a.x-f[0]||0,s=a.y-f[1]||0,!0)}))return function t(h){var p,d=f;switch(h){case"start":y[e]=t,p=m++;break;case"end":delete y[e],--m;case"drag":f=i(r,e),p=m}A(new xt(n,h,a,e,p,f[0]+c,f[1]+s,f[0]-d[0],f[1]-d[1],l),l.apply,l,[h,o,u])}}var s,f,l,h,p=bt,d=wt,_=Mt,y={},g=v("start","drag","end"),m=0,x=0;return n.filter=function(t){return arguments.length?(p="function"==typeof t?t:Ol(!!t),n):p},n.container=function(t){return arguments.length?(d="function"==typeof t?t:Ol(t),n):d},n.subject=function(t){return arguments.length?(_="function"==typeof t?t:Ol(t),n):_},n.on=function(){var t=g.on.apply(g,arguments);return t===g?n:t},n.clickDistance=function(t){return arguments.length?(x=(t=+t)*t,n):Math.sqrt(x)},n},Il=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},Yl="\\s*([+-]?\\d+)\\s*",Bl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Hl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",jl=/^#([0-9a-f]{3})$/,Xl=/^#([0-9a-f]{6})$/,$l=new RegExp("^rgb\\("+[Yl,Yl,Yl]+"\\)$"),Vl=new RegExp("^rgb\\("+[Hl,Hl,Hl]+"\\)$"),Wl=new RegExp("^rgba\\("+[Yl,Yl,Yl,Bl]+"\\)$"),Zl=new RegExp("^rgba\\("+[Hl,Hl,Hl,Bl]+"\\)$"),Gl=new RegExp("^hsl\\("+[Bl,Hl,Hl]+"\\)$"),Jl=new RegExp("^hsla\\("+[Bl,Hl,Hl,Bl]+"\\)$"),Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Il(kt,Nt,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Il(zt,Ct,Tt(kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new zt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new zt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Il(qt,Rt,Tt(kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new qt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new qt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new zt(Ut(t>=240?t-240:t+120,i,r),Ut(t,i,r),Ut(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Kl=Math.PI/180,th=180/Math.PI,nh=.95047,eh=1,rh=1.08883,ih=4/29,oh=6/29,uh=3*oh*oh,ah=oh*oh*oh;Il(Ft,Ot,Tt(kt,{brighter:function(t){return new Ft(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Ft(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=eh*Yt(t),n=nh*Yt(n),e=rh*Yt(e),new zt(Bt(3.2404542*n-1.5371385*t-.4985314*e),Bt(-.969266*n+1.8760108*t+.041556*e),Bt(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),Il($t,Xt,Tt(kt,{brighter:function(t){return new $t(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new $t(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Dt(this).rgb()}}));var ch=-.14861,sh=1.78277,fh=-.29227,lh=-.90649,hh=1.97294,ph=hh*lh,dh=hh*sh,vh=sh*fh-lh*ch;Il(Zt,Wt,Tt(kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Zt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Zt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Kl,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new zt(255*(n+e*(ch*r+sh*i)),255*(n+e*(fh*r+lh*i)),255*(n+e*(hh*r)),this.opacity)}}));var _h,yh,gh,mh,xh,bh,wh=function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i;return Gt((e-r/n)*n,u,i,o,a)}},Mh=function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n];return Gt((e-r/n)*n,i,o,u,a)}},Th=function(t){return function(){return t}},kh=function t(n){function e(t,n){var e=r((t=Ct(t)).r,(n=Ct(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=nn(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}var r=tn(n);return e.gamma=t,e}(1),Nh=en(wh),Sh=en(Mh),Eh=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=qh(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}},Ah=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},Ch=function(t,n){return t=+t,n-=t,function(e){return t+n*e}},zh=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=qh(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},Ph=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Lh=new RegExp(Ph.source,"g"),Rh=function(t,n){var e,r,i,o=Ph.lastIndex=Lh.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=Ph.exec(t))&&(r=Lh.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:Ch(e,r)})),o=Lh.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?on(c[0].x):rn(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})},qh=function(t,n){var e,r=typeof n;return null==n||"boolean"===r?Th(n):("number"===r?Ch:"string"===r?(e=Nt(n))?(n=e,kh):Rh:n instanceof Nt?kh:n instanceof Date?Ah:Array.isArray(n)?Eh:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?zh:Ch)(t,n)},Uh=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},Dh=180/Math.PI,Oh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Fh=function(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Dh,skewX:Math.atan(c)*Dh,scaleX:u,scaleY:a}},Ih=cn(un,"px, ","px)","deg)"),Yh=cn(an,", ",")",")"),Bh=Math.SQRT2,Hh=function(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],f=a-i,l=c-o,h=f*f+l*l;if(h<1e-12)r=Math.log(s/u)/Bh,e=function(t){return[i+t*f,o+t*l,u*Math.exp(Bh*t*r)]};else{var p=Math.sqrt(h),d=(s*s-u*u+4*h)/(2*u*2*p),v=(s*s-u*u-4*h)/(2*s*2*p),_=Math.log(Math.sqrt(d*d+1)-d),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-_)/Bh,e=function(t){var n=t*r,e=sn(_),a=u/(2*p)*(e*ln(Bh*n+_)-fn(_));return[i+a*f,o+a*l,u*e/sn(Bh*n+_)]}}return e.duration=1e3*r,e},jh=hn(Kt),Xh=hn(nn),$h=dn(Kt),Vh=dn(nn),Wh=vn(Kt),Zh=vn(nn),Gh=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},Jh=0,Qh=0,Kh=0,tp=1e3,np=0,ep=0,rp=0,ip="object"==typeof performance&&performance.now?performance:Date,op="function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){setTimeout(t,17)};gn.prototype=mn.prototype={constructor:gn,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?_n():+e)+(null==n?0:+n),this._next||bh===this||(bh?bh._next=this:xh=this,bh=this),this._call=t,this._time=e,Tn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Tn())}};var up=function(t,n,e){var r=new gn;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},ap=function(t,n,e){var r=new gn,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?_n():+e,r.restart(function o(u){u+=i,r.restart(o,i+=n,e),t(u)},n,e),r)},cp=v("start","end","interrupt"),sp=[],fp=0,lp=1,hp=2,pp=3,dp=4,vp=5,_p=6,yp=function(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};En(t,e,{name:n,index:r,group:i,on:cp,tween:sp,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:fp})},gp=function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>hp&&e.state<vp,e.state=_p,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}},mp=function(t){return this.each(function(){gp(this,t)})},xp=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Sn(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?An:Cn)(e,t,n))},bp=function(t,n){var e;return("number"==typeof n?Ch:n instanceof Nt?kh:(e=Nt(n))?(n=e,kh):Rh)(t,n)},wp=function(t,n){var e=Ff(t),r="transform"===e?Yh:bp;return this.attrTween(t,"function"==typeof n?(e.local?Dn:Un)(e,r,zn(this,"attr."+t,n)):null==n?(e.local?Ln:Pn)(e):(e.local?qn:Rn)(e,r,n+""))},Mp=function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=Ff(t);return this.tween(e,(r.local?On:Fn)(r,n))},Tp=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?In:Yn)(n,t)):Sn(this.node(),n).delay},kp=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Bn:Hn)(n,t)):Sn(this.node(),n).duration},Np=function(t){var n=this._id;return arguments.length?this.each(jn(n,t)):Sn(this.node(),n).ease},Sp=function(t){"function"!=typeof t&&(t=Xf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new ne(r,this._parents,this._name,this._id)},Ep=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new ne(u,this._parents,this._name,this._id)},Ap=function(t,n){var e=this._id;return arguments.length<2?Sn(this.node(),e).on.on(t):this.each($n(e,t,n))},Cp=function(){return this.on("end.remove",Vn(this._id))},zp=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Jf(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,c,s=r[u],f=s.length,l=o[u]=new Array(f),h=0;h<f;++h)(a=s[h])&&(c=t.call(a,a.__data__,h,s))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,yp(l[h],n,e,h,l,Sn(a,e)));return new ne(o,this._parents,n,e)},Pp=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Kf(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var c,s=r[a],f=s.length,l=0;l<f;++l)if(c=s[l]){for(var h,p=t.call(c,c.__data__,l,s),d=Sn(c,e),v=0,_=p.length;v<_;++v)(h=p[v])&&yp(h,n,e,v,p,d);o.push(p),u.push(c)}return new ne(o,u,n,e)},Lp=yt.prototype.constructor,Rp=function(){return new Lp(this._groups,this._parents)},qp=function(t,n,e){var r="transform"==(t+="")?Ih:bp;return null==n?this.styleTween(t,Wn(t,r)).on("end.style."+t,Zn(t)):this.styleTween(t,"function"==typeof n?Jn(t,r,zn(this,"style."+t,n)):Gn(t,r,n+""),e)},Up=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Qn(t,n,null==e?"":e))},Dp=function(t){return this.tween("text","function"==typeof t?te(zn(this,"text",t)):Kn(null==t?"":t+""))},Op=function(){for(var t=this._name,n=this._id,e=re(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var f=Sn(u,n);yp(u,t,e,s,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new ne(r,this._parents,t,e)},Fp=0,Ip=yt.prototype;ne.prototype=ee.prototype={constructor:ne,select:zp,selectAll:Pp,filter:Sp,merge:Ep,selection:Rp,transition:Op,call:Ip.call,nodes:Ip.nodes,node:Ip.node,size:Ip.size,empty:Ip.empty,each:Ip.each,on:Ap,attr:wp,attrTween:Mp,style:qp,styleTween:Up,text:Dp,remove:Cp,tween:xp,delay:Tp,duration:kp,ease:Np};var Yp=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Bp=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Hp=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),jp=Math.PI,Xp=jp/2,$p=4/11,Vp=6/11,Wp=8/11,Zp=.75,Gp=9/11,Jp=10/11,Qp=.9375,Kp=21/22,td=63/64,nd=1/$p/$p,ed=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),rd=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),id=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),od=2*Math.PI,ud=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=od);return r.amplitude=function(n){return t(n,e*od)},r.period=function(e){return t(n,e)},r}(1,.3),ad=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=od);return r.amplitude=function(n){return t(n,e*od)},r.period=function(e){return t(n,e)},r}(1,.3),cd=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=od);return r.amplitude=function(n){return t(n,e*od)},r.period=function(e){return t(n,e)},r}(1,.3),sd={time:null,delay:0,duration:250,ease:fe},fd=function(t){var n,e;t instanceof ne?(n=t._id,t=t._name):(n=re(),(e=sd).time=_n(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&yp(u,t,n,s,a,e||Me(u,n));return new ne(r,this._parents,t,n)};yt.prototype.interrupt=mp,yt.prototype.transition=fd;var ld=[null],hd=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>lp&&e.name===n)return new ne([[t]],ld,n,+r)}return null},pd=function(t){return function(){return t}},dd=function(t,n,e){this.target=t,this.type=n,this.selection=e},vd=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},_d={name:"drag"},yd={name:"space"},gd={name:"handle"},md={name:"center"},xd={name:"x",handles:["e","w"].map(ke),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},bd={name:"y",handles:["n","s"].map(ke),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},wd={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(ke),input:function(t){return t},output:function(t){return t}},Md={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Td={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},kd={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Nd={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Sd={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},Ed=function(){return Le(wd)},Ad=Math.cos,Cd=Math.sin,zd=Math.PI,Pd=zd/2,Ld=2*zd,Rd=Math.max,qd=function(){function t(t){var o,u,a,c,s,f,l=t.length,h=[],p=cf(l),d=[],v=[],_=v.groups=new Array(l),y=new Array(l*l);for(o=0,s=-1;++s<l;){for(u=0,f=-1;++f<l;)u+=t[s][f];h.push(u),d.push(cf(l)),o+=u}for(e&&p.sort(function(t,n){return e(h[t],h[n])}),r&&d.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),o=Rd(0,Ld-n*l)/o,c=o?n:Ld/l,u=0,s=-1;++s<l;){for(a=u,f=-1;++f<l;){var g=p[s],m=d[g][f],x=t[g][m],b=u,w=u+=x*o;y[m*l+g]={index:g,subindex:m,startAngle:b,endAngle:w,value:x}}_[g]={index:g,startAngle:a,endAngle:u,value:h[g]},u+=c}for(s=-1;++s<l;)for(f=s-1;++f<l;){var M=y[f*l+s],T=y[s*l+f];(M.value||T.value)&&v.push(M.value<T.value?{source:T,target:M}:{source:M,target:T})}return i?v.sort(i):v}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=Rd(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=Re(n))._=n,t):i&&i._},t},Ud=Array.prototype.slice,Dd=function(t){return function(){return t}},Od=Math.PI,Fd=2*Od,Id=Fd-1e-6;qe.prototype=Ue.prototype={constructor:qe,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,a=e-t,c=r-n,s=o-t,f=u-n,l=s*s+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(f*a-c*s)>1e-6&&i){var h=e-o,p=r-u,d=a*a+c*c,v=h*h+p*p,_=Math.sqrt(d),y=Math.sqrt(l),g=i*Math.tan((Od-Math.acos((d+l-v)/(2*_*y)))/2),m=g/y,x=g/_;Math.abs(m-1)>1e-6&&(this._+="L"+(t+m*s)+","+(n+m*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>s*p)+","+(this._x1=t+x*a)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e;var u=e*Math.cos(r),a=e*Math.sin(r),c=t+u,s=n+a,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+s:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-s)>1e-6)&&(this._+="L"+c+","+s),e&&(l<0&&(l=l%Fd+Fd),l>Id?this._+="A"+e+","+e+",0,1,"+f+","+(t-u)+","+(n-a)+"A"+e+","+e+",0,1,"+f+","+(this._x1=c)+","+(this._y1=s):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Od)+","+f+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var Yd=function(){function t(){var t,a=Ud.call(arguments),c=n.apply(this,a),s=e.apply(this,a),f=+r.apply(this,(a[0]=c,a)),l=i.apply(this,a)-Pd,h=o.apply(this,a)-Pd,p=f*Ad(l),d=f*Cd(l),v=+r.apply(this,(a[0]=s,a)),_=i.apply(this,a)-Pd,y=o.apply(this,a)-Pd;if(u||(u=t=Ue()),u.moveTo(p,d),u.arc(0,0,f,l,h),l===_&&h===y||(u.quadraticCurveTo(0,0,v*Ad(_),v*Cd(_)),u.arc(0,0,v,_,y)),u.quadraticCurveTo(0,0,p,d),u.closePath(),t)return u=null,t+""||null}var n=De,e=Oe,r=Fe,i=Ie,o=Ye,u=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:Dd(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Dd(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Dd(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(u=null==n?null:n,t):u},t};Be.prototype=He.prototype={constructor:Be,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var Bd=function(){function t(n,i,u,a){if(i>=o.length)return null!=r?r(n):null!=e?n.sort(e):n;for(var c,s,f,l=-1,h=n.length,p=o[i++],d=He(),v=u();++l<h;)(f=d.get(c=p(s=n[l])+""))?f.push(s):d.set(c,[s]);return d.each(function(n,e){a(v,e,t(n,i,u,a))}),v}function n(t,e){if(++e>o.length)return t;var i,a=u[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=a?i.sort(function(t,n){return a(t.key,n.key)}):i}var e,r,i,o=[],u=[];return i={object:function(n){return t(n,0,je,Xe)},map:function(n){return t(n,0,$e,Ve)},entries:function(e){return n(t(e,0,$e,Ve),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return u[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},Hd=He.prototype;We.prototype=Ze.prototype={constructor:We,has:Hd.has,add:function(t){return t+="",this["$"+t]=t,this},remove:Hd.remove,clear:Hd.clear,values:Hd.keys,size:Hd.size,empty:Hd.empty,each:Hd.each};var jd=function(t){var n=[];for(var e in t)n.push(e);return n},Xd=function(t){var n=[];for(var e in t)n.push(t[e]);return n},$d=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},Vd=function(t){function n(t,n){var r,i,o=e(t,function(t,e){if(r)return r(t,e-1);i=t,r=n?Je(t,n):Ge(t)});return o.columns=i,o}function e(t,n){function e(){if(f>=s)return u;if(i)return i=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(i=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(i=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;f<s;){var a=1;if(10===(n=t.charCodeAt(f++)))i=!0;else if(13===n)i=!0,10===t.charCodeAt(f)&&(++f,++a);else if(n!==c)continue;return t.slice(e,f-a)}return t.slice(e)}for(var r,i,o={},u={},a=[],s=t.length,f=0,l=0;(r=e())!==u;){for(var h=[];r!==o&&r!==u;)h.push(r),r=e();n&&null==(h=n(h,l++))||a.push(h)}return a}function r(n,e){return null==e&&(e=Qe(n)),[e.map(u).join(t)].concat(n.map(function(n){return e.map(function(t){return u(n[t])}).join(t)})).join("\n")}function i(t){return t.map(o).join("\n")}function o(n){return n.map(u).join(t)}function u(t){return null==t?"":a.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n\r]"),c=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:i}},Wd=Vd(","),Zd=Wd.parse,Gd=Wd.parseRows,Jd=Wd.format,Qd=Wd.formatRows,Kd=Vd("\t"),tv=Kd.parse,nv=Kd.parseRows,ev=Kd.format,rv=Kd.formatRows,iv=function(t,n){function e(){var e,i,o=r.length,u=0,a=0;for(e=0;e<o;++e)i=r[e],u+=i.x,a+=i.y;for(u=u/o-t,a=a/o-n,e=0;e<o;++e)i=r[e],i.x-=u,i.y-=a}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},ov=function(t){return function(){return t}},uv=function(){return 1e-6*(Math.random()-.5)},av=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Ke(this.cover(n,e),n,e,t)},cv=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,c=i-e,s=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,o=r+c,t>i||n>o);break;case 1:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,o=r+c,e>t||n>o);break;case 2:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,r=o-c,t>i||r>n);break;case 3:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,r=o-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},sv=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},fv=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},lv=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i},hv=function(t,n,e){var r,i,o,u,a,c,s,f=this._x0,l=this._y0,h=this._x1,p=this._y1,d=[],v=this._root;for(v&&d.push(new lv(v,f,l,h,p)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,p=n+e,e*=e);c=d.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<f||(a=c.y1)<l))if(v.length){var _=(i+u)/2,y=(o+a)/2;d.push(new lv(v[3],_,y,u,a),new lv(v[2],i,y,_,a),new lv(v[1],_,o,u,y),new lv(v[0],i,o,_,y)),(s=(n>=y)<<1|t>=_)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-s],d[d.length-1-s]=c)}else{var g=t-+this._x.call(null,v.data),m=n-+this._y.call(null,v.data),x=g*g+m*m;if(x<e){var b=Math.sqrt(e=x);f=t-b,l=n-b,h=t+b,p=n+b,r=v.data}}return r},pv=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,c,s,f,l,h,p=this._root,d=this._x0,v=this._y0,_=this._x1,y=this._y1;if(!p)return this;if(p.length)for(;;){if((s=o>=(a=(d+_)/2))?d=a:_=a,(f=u>=(c=(v+y)/2))?v=c:y=c,n=p,!(p=p[l=f<<1|s]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)},dv=function(){return this._root},vv=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},_v=function(t){var n,e,r,i,o,u,a=[],c=this._root;for(c&&a.push(new lv(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var s=(r+o)/2,f=(i+u)/2;(e=c[3])&&a.push(new lv(e,s,f,o,u)),(e=c[2])&&a.push(new lv(e,r,f,s,u)),(e=c[1])&&a.push(new lv(e,s,i,o,f)),(e=c[0])&&a.push(new lv(e,r,i,s,f))}return this},yv=function(t){var n,e=[],r=[];for(this._root&&e.push(new lv(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,s=n.y1,f=(u+c)/2,l=(a+s)/2;(o=i[0])&&e.push(new lv(o,u,a,f,l)),(o=i[1])&&e.push(new lv(o,f,a,c,l)),(o=i[2])&&e.push(new lv(o,u,l,f,s)),(o=i[3])&&e.push(new lv(o,f,l,c,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},gv=function(t){return arguments.length?(this._x=t,this):this._x},mv=function(t){return arguments.length?(this._y=t,this):this._y},xv=ir.prototype=or.prototype;xv.copy=function(){var t,n,e=new or(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=ur(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=ur(n));return e},xv.add=av,xv.addAll=tr,xv.cover=cv,xv.data=sv,xv.extent=fv,xv.find=hv,xv.remove=pv,xv.removeAll=nr,xv.root=dv,xv.size=vv,xv.visit=_v,xv.visitAfter=yv,xv.x=gv,xv.y=mv;var bv,wv=function(t){function n(){function t(t,n,e,r,i){var o=t.data,a=t.r,p=l+a;{if(!o)return n>s+p||r<s-p||e>f+p||i<f-p;if(o.index>c.index){var d=s-o.x-o.vx,v=f-o.y-o.vy,_=d*d+v*v;_<p*p&&(0===d&&(d=uv(),_+=d*d),0===v&&(v=uv(),_+=v*v),_=(p-(_=Math.sqrt(_)))/_*u,c.vx+=(d*=_)*(p=(a*=a)/(h+a)),c.vy+=(v*=_)*p,o.vx-=d*(p=1-p),o.vy-=v*p)}}}for(var n,r,c,s,f,l,h,p=i.length,d=0;d<a;++d)for(r=ir(i,ar,cr).visitAfter(e),n=0;n<p;++n)c=i[n],l=o[c.index],h=l*l,s=c.x+c.vx,f=c.y+c.vy,r.visit(t)}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,u=1,a=1
;return"function"!=typeof t&&(t=ov(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(a=+t,n):a},n.strength=function(t){return arguments.length?(u=+t,n):u},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:ov(+e),r(),n):t},n},Mv=function(t){function n(t){return 1/Math.min(s[t.source.index],s[t.target.index])}function e(n){for(var e=0,r=t.length;e<d;++e)for(var i,o,c,s,l,h,p,v=0;v<r;++v)i=t[v],o=i.source,c=i.target,s=c.x+c.vx-o.x-o.vx||uv(),l=c.y+c.vy-o.y-o.vy||uv(),h=Math.sqrt(s*s+l*l),h=(h-a[v])/h*n*u[v],s*=h,l*=h,c.vx-=s*(p=f[v]),c.vy-=l*p,o.vx+=s*(p=1-p),o.vy+=l*p}function r(){if(c){var n,e,r=c.length,h=t.length,p=He(c,l);for(n=0,s=new Array(r);n<h;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=fr(p,e.source)),"object"!=typeof e.target&&(e.target=fr(p,e.target)),s[e.source.index]=(s[e.source.index]||0)+1,s[e.target.index]=(s[e.target.index]||0)+1;for(n=0,f=new Array(h);n<h;++n)e=t[n],f[n]=s[e.source.index]/(s[e.source.index]+s[e.target.index]);u=new Array(h),i(),a=new Array(h),o()}}function i(){if(c)for(var n=0,e=t.length;n<e;++n)u[n]=+h(t[n],n,t)}function o(){if(c)for(var n=0,e=t.length;n<e;++n)a[n]=+p(t[n],n,t)}var u,a,c,s,f,l=sr,h=n,p=ov(30),d=1;return null==t&&(t=[]),e.initialize=function(t){c=t,r()},e.links=function(n){return arguments.length?(t=n,r(),e):t},e.id=function(t){return arguments.length?(l=t,e):l},e.iterations=function(t){return arguments.length?(d=+t,e):d},e.strength=function(t){return arguments.length?(h="function"==typeof t?t:ov(+t),i(),e):h},e.distance=function(t){return arguments.length?(p="function"==typeof t?t:ov(+t),o(),e):p},e},Tv=10,kv=Math.PI*(3-Math.sqrt(5)),Nv=function(t){function n(){e(),p.call("tick",o),u<a&&(h.stop(),p.call("end",o))}function e(){var n,e,r=t.length;for(u+=(s-u)*c,l.each(function(t){t(u)}),n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=f:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=f:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=Tv*Math.sqrt(e),o=e*kv;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,u=1,a=.001,c=1-Math.pow(a,1/300),s=0,f=.6,l=He(),h=mn(n),p=v("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(u=+t,o):u},alphaMin:function(t){return arguments.length?(a=+t,o):a},alphaDecay:function(t){return arguments.length?(c=+t,o):+c},alphaTarget:function(t){return arguments.length?(s=+t,o):s},velocityDecay:function(t){return arguments.length?(f=1-t,o):1-f},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,u,a,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)a=t[s],i=n-a.x,o=e-a.y,(u=i*i+o*o)<r&&(c=a,r=u);return c},on:function(t,n){return arguments.length>1?(p.on(t,n),o):p.on(t)}}},Sv=function(){function t(t){var n,a=i.length,c=ir(i,lr,hr).visitAfter(e);for(u=t,n=0;n<a;++n)o=i[n],c.visit(r)}function n(){if(i){var t,n,e=i.length;for(a=new Array(e),t=0;t<e;++t)n=i[t],a[n.index]=+c(n,t,i)}}function e(t){var n,e,r,i,o,u=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=n.value)&&(u+=e,r+=e*n.x,i+=e*n.y);t.x=r/u,t.y=i/u}else{n=t,n.x=n.data.x,n.y=n.data.y;do{u+=a[n.data.index]}while(n=n.next)}t.value=u}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,c=t.y-o.y,h=r-n,p=i*i+c*c;if(h*h/l<p)return p<f&&(0===i&&(i=uv(),p+=i*i),0===c&&(c=uv(),p+=c*c),p<s&&(p=Math.sqrt(s*p)),o.vx+=i*t.value*u/p,o.vy+=c*t.value*u/p),!0;if(!(t.length||p>=f)){(t.data!==o||t.next)&&(0===i&&(i=uv(),p+=i*i),0===c&&(c=uv(),p+=c*c),p<s&&(p=Math.sqrt(s*p)));do{t.data!==o&&(h=a[t.data.index]*u/p,o.vx+=i*h,o.vy+=c*h)}while(t=t.next)}}var i,o,u,a,c=ov(-30),s=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(c="function"==typeof e?e:ov(+e),n(),t):c},t.distanceMin=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},Ev=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=ov(.1);return"function"!=typeof t&&(t=ov(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:ov(+t),e(),n):u},n.x=function(r){return arguments.length?(t="function"==typeof r?r:ov(+r),e(),n):t},n},Av=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=ov(.1);return"function"!=typeof t&&(t=ov(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:ov(+t),e(),n):u},n.y=function(r){return arguments.length?(t="function"==typeof r?r:ov(+r),e(),n):t},n},Cv=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},zv=function(t){return t=Cv(Math.abs(t)),t?t[1]:NaN},Pv=function(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(e.substring(i-=a,i+a)),!((c+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}},Lv=function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}},Rv=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},qv=function(t,n){var e=Cv(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(bv=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Cv(t,Math.max(0,n+o-1))[0]},Uv=function(t,n){var e=Cv(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},Dv={"":Rv,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Uv(100*t,n)},r:Uv,s:qv,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Ov=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;pr.prototype=dr.prototype,dr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Fv,Iv=function(t){return t},Yv=["y","z","a","f","p","n","Âµ","m","","k","M","G","T","P","E","Z","Y"],Bv=function(t){function n(t){function n(t){var n,i,a,f=_,x=y;if("c"===v)x=g(t)+x,t="";else{t=+t;var b=t<0;if(t=g(Math.abs(t),d),b&&0==+t&&(b=!1),f=(b?"("===s?s:"-":"-"===s||"("===s?"":s)+f,x=x+("s"===v?Yv[8+bv/3]:"")+(b&&"("===s?")":""),m)for(n=-1,i=t.length;++n<i;)if(48>(a=t.charCodeAt(n))||a>57){x=(46===a?o+t.slice(n+1):t.slice(n))+x,t=t.slice(0,n);break}}p&&!l&&(t=r(t,1/0));var w=f.length+t.length+x.length,M=w<h?new Array(h-w+1).join(e):"";switch(p&&l&&(t=r(M+t,M.length?h-x.length:1/0),M=""),c){case"<":t=f+t+x+M;break;case"=":t=f+M+t+x;break;case"^":t=M.slice(0,w=M.length>>1)+f+t+x+M.slice(w);break;default:t=M+f+t+x}return u(t)}t=pr(t);var e=t.fill,c=t.align,s=t.sign,f=t.symbol,l=t.zero,h=t.width,p=t.comma,d=t.precision,v=t.type,_="$"===f?i[0]:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",y="$"===f?i[1]:/[%p]/.test(v)?a:"",g=Dv[v],m=!v||/[defgprs%]/.test(v);return d=null==d?v?6:12:/[gprs]/.test(v)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=pr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(zv(e)/3))),o=Math.pow(10,-i),u=Yv[8+i/3];return function(t){return r(o*t)+u}}var r=t.grouping&&t.thousands?Pv(t.grouping,t.thousands):Iv,i=t.currency,o=t.decimal,u=t.numerals?Lv(t.numerals):Iv,a=t.percent||"%";return{format:n,formatPrefix:e}};vr({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var Hv=function(t){return Math.max(0,-zv(Math.abs(t)))},jv=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(zv(n)/3)))-zv(Math.abs(t)))},Xv=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,zv(n)-zv(t))+1},$v=function(){return new _r};_r.prototype={constructor:_r,reset:function(){this.s=this.t=0},add:function(t){yr(T_,t,this.t),yr(this,T_.s,this.s),this.s?this.t+=T_.t:this.s=T_.t},valueOf:function(){return this.s}};var Vv,Wv,Zv,Gv,Jv,Qv,Kv,t_,n_,e_,r_,i_,o_,u_,a_,c_,s_,f_,l_,h_,p_,d_,v_,__,y_,g_,m_,x_,b_,w_,M_,T_=new _r,k_=1e-6,N_=Math.PI,S_=N_/2,E_=N_/4,A_=2*N_,C_=180/N_,z_=N_/180,P_=Math.abs,L_=Math.atan,R_=Math.atan2,q_=Math.cos,U_=Math.ceil,D_=Math.exp,O_=Math.log,F_=Math.pow,I_=Math.sin,Y_=Math.sign||function(t){return t>0?1:t<0?-1:0},B_=Math.sqrt,H_=Math.tan,j_={Feature:function(t,n){wr(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)wr(e[r].geometry,n)}},X_={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){Mr(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Mr(e[r],n,0)},Polygon:function(t,n){Tr(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Tr(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)wr(e[r],n)}},$_=function(t,n){t&&j_.hasOwnProperty(t.type)?j_[t.type](t,n):wr(t,n)},V_=$v(),W_=$v(),Z_={point:br,lineStart:br,lineEnd:br,polygonStart:function(){V_.reset(),Z_.lineStart=kr,Z_.lineEnd=Nr},polygonEnd:function(){var t=+V_;W_.add(t<0?A_+t:t),this.lineStart=this.lineEnd=this.point=br},sphere:function(){W_.add(A_)}},G_=function(t){return W_.reset(),$_(t,Z_),2*W_},J_=$v(),Q_={point:Ur,lineStart:Or,lineEnd:Fr,polygonStart:function(){Q_.point=Ir,Q_.lineStart=Yr,Q_.lineEnd=Br,J_.reset(),Z_.polygonStart()},polygonEnd:function(){Z_.polygonEnd(),Q_.point=Ur,Q_.lineStart=Or,Q_.lineEnd=Fr,V_<0?(Qv=-(t_=180),Kv=-(n_=90)):J_>k_?n_=90:J_<-k_&&(Kv=-90),a_[0]=Qv,a_[1]=t_}},K_=function(t){var n,e,r,i,o,u,a;if(n_=t_=-(Qv=Kv=1/0),u_=[],$_(t,Q_),e=u_.length){for(u_.sort(jr),n=1,r=u_[0],o=[r];n<e;++n)i=u_[n],Xr(r,i[0])||Xr(r,i[1])?(Hr(r[0],i[1])>Hr(r[0],r[1])&&(r[1]=i[1]),Hr(i[0],r[1])>Hr(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(u=-1/0,e=o.length-1,n=0,r=o[e];n<=e;r=i,++n)i=o[n],(a=Hr(r[1],i[0]))>u&&(u=a,Qv=i[0],t_=r[1])}return u_=a_=null,Qv===1/0||Kv===1/0?[[NaN,NaN],[NaN,NaN]]:[[Qv,Kv],[t_,n_]]},ty={sphere:br,point:$r,lineStart:Wr,lineEnd:Jr,polygonStart:function(){ty.lineStart=Qr,ty.lineEnd=Kr},polygonEnd:function(){ty.lineStart=Wr,ty.lineEnd=Jr}},ny=function(t){c_=s_=f_=l_=h_=p_=d_=v_=__=y_=g_=0,$_(t,ty);var n=__,e=y_,r=g_,i=n*n+e*e+r*r;return i<1e-12&&(n=p_,e=d_,r=v_,s_<k_&&(n=f_,e=l_,r=h_),(i=n*n+e*e+r*r)<1e-12)?[NaN,NaN]:[R_(e,n)*C_,mr(r/B_(i))*C_]},ey=function(t){return function(){return t}},ry=function(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e};ei.invert=ei;var iy,oy,uy,ay,cy,sy,fy,ly,hy,py,dy,vy=function(t){function n(n){return n=t(n[0]*z_,n[1]*z_),n[0]*=C_,n[1]*=C_,n}return t=ri(t[0]*z_,t[1]*z_,t.length>2?t[2]*z_:0),n.invert=function(n){return n=t.invert(n[0]*z_,n[1]*z_),n[0]*=C_,n[1]*=C_,n},n},_y=function(){function t(t,n){e.push(t=r(t,n)),t[0]*=C_,t[1]*=C_}function n(){var t=i.apply(this,arguments),n=o.apply(this,arguments)*z_,c=u.apply(this,arguments)*z_;return e=[],r=ri(-t[0]*z_,-t[1]*z_,0).invert,ai(a,n,c,1),t={type:"Polygon",coordinates:[e]},e=r=null,t}var e,r,i=ey([0,0]),o=ey(90),u=ey(6),a={point:t};return n.center=function(t){return arguments.length?(i="function"==typeof t?t:ey([+t[0],+t[1]]),n):i},n.radius=function(t){return arguments.length?(o="function"==typeof t?t:ey(+t),n):o},n.precision=function(t){return arguments.length?(u="function"==typeof t?t:ey(+t),n):u},n},yy=function(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:br,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}},gy=function(t,n,e,r,i,o){var u,a=t[0],c=t[1],s=n[0],f=n[1],l=0,h=1,p=s-a,d=f-c;if(u=e-a,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<h&&(h=u)}else if(p>0){if(u>h)return;u>l&&(l=u)}if(u=i-a,p||!(u<0)){if(u/=p,p<0){if(u>h)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<h&&(h=u)}if(u=r-c,d||!(u>0)){if(u/=d,d<0){if(u<l)return;u<h&&(h=u)}else if(d>0){if(u>h)return;u>l&&(l=u)}if(u=o-c,d||!(u<0)){if(u/=d,d<0){if(u>h)return;u>l&&(l=u)}else if(d>0){if(u<l)return;u<h&&(h=u)}return l>0&&(t[0]=a+l*p,t[1]=c+l*d),h<1&&(n[0]=a+h*p,n[1]=c+h*d),!0}}}}},my=function(t,n){return P_(t[0]-n[0])<k_&&P_(t[1]-n[1])<k_},xy=function(t,n,e,r,i){var o,u,a=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(my(r,u)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a.push(e=new si(r,t,null,!0)),c.push(e.o=new si(r,null,e,!1)),a.push(e=new si(u,t,null,!1)),c.push(e.o=new si(u,null,e,!0))}}),a.length){for(c.sort(n),fi(a),fi(c),o=0,u=c.length;o<u;++o)c[o].e=e=!e;for(var s,f,l=a[0];;){for(var h=l,p=!0;h.v;)if((h=h.n)===l)return;s=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(o=0,u=s.length;o<u;++o)i.point((f=s[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(s=h.p.z,o=s.length-1;o>=0;--o)i.point((f=s[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,s=h.z,p=!p}while(!h.v);i.lineEnd()}}},by=1e9,wy=-by,My=function(){var t,n,e,r=0,i=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=li(r,i,o,u)(n=e)},extent:function(a){return arguments.length?(r=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],t=n=null,e):[[r,i],[o,u]]}}},Ty=$v(),ky=function(t,n){var e=n[0],r=n[1],i=[I_(e),-q_(e),0],o=0,u=0;Ty.reset();for(var a=0,c=t.length;a<c;++a)if(f=(s=t[a]).length)for(var s,f,l=s[f-1],h=l[0],p=l[1]/2+E_,d=I_(p),v=q_(p),_=0;_<f;++_,h=g,d=x,v=b,l=y){var y=s[_],g=y[0],m=y[1]/2+E_,x=I_(m),b=q_(m),w=g-h,M=w>=0?1:-1,T=M*w,k=T>N_,N=d*x;if(Ty.add(R_(N*M*I_(T),v*b+N*q_(T))),o+=k?w+M*A_:w,k^h>=e^g>=e){var S=Pr(Cr(l),Cr(y));qr(S);var E=Pr(i,S);qr(E);var A=(k^w>=0?-1:1)*mr(E[2]);(r>A||r===A&&(S[0]||S[1]))&&(u+=k^w>=0?1:-1)}}return(o<-k_||o<k_&&Ty<-k_)^1&u},Ny=$v(),Sy={sphere:br,point:br,lineStart:hi,lineEnd:br,polygonStart:br,polygonEnd:br},Ey=function(t){return Ny.reset(),$_(t,Sy),+Ny},Ay=[null,null],Cy={type:"LineString",coordinates:Ay},zy=function(t,n){return Ay[0]=t,Ay[1]=n,Ey(Cy)},Py={Feature:function(t,n){return _i(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(_i(e[r].geometry,n))return!0;return!1}},Ly={Sphere:function(){return!0},Point:function(t,n){return yi(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(yi(e[r],n))return!0;return!1},LineString:function(t,n){return gi(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(gi(e[r],n))return!0;return!1},Polygon:function(t,n){return mi(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(mi(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(_i(e[r],n))return!0;return!1}},Ry=function(t,n){return(t&&Py.hasOwnProperty(t.type)?Py[t.type]:_i)(t,n)},qy=function(t,n){var e=t[0]*z_,r=t[1]*z_,i=n[0]*z_,o=n[1]*z_,u=q_(r),a=I_(r),c=q_(o),s=I_(o),f=u*q_(e),l=u*I_(e),h=c*q_(i),p=c*I_(i),d=2*mr(B_(xr(o-r)+u*c*xr(i-e))),v=I_(d),_=d?function(t){var n=I_(t*=d)/v,e=I_(d-t)/v,r=e*f+n*h,i=e*l+n*p,o=e*a+n*s;return[R_(i,r)*C_,R_(o,B_(r*r+i*i))*C_]}:function(){return[e*C_,r*C_]};return _.distance=d,_},Uy=function(t){return t},Dy=$v(),Oy=$v(),Fy={point:br,lineStart:br,lineEnd:br,polygonStart:function(){Fy.lineStart=Ni,Fy.lineEnd=Ai},polygonEnd:function(){Fy.lineStart=Fy.lineEnd=Fy.point=br,Dy.add(P_(Oy)),Oy.reset()},result:function(){var t=Dy/2;return Dy.reset(),t}},Iy=1/0,Yy=Iy,By=-Iy,Hy=By,jy={point:Ci,lineStart:br,lineEnd:br,polygonStart:br,polygonEnd:br,result:function(){var t=[[Iy,Yy],[By,Hy]];return By=Hy=-(Yy=Iy=1/0),t}},Xy=0,$y=0,Vy=0,Wy=0,Zy=0,Gy=0,Jy=0,Qy=0,Ky=0,tg={point:zi,lineStart:Pi,lineEnd:qi,polygonStart:function(){tg.lineStart=Ui,tg.lineEnd=Di},polygonEnd:function(){tg.point=zi,tg.lineStart=Pi,tg.lineEnd=qi},result:function(){var t=Ky?[Jy/Ky,Qy/Ky]:Gy?[Wy/Gy,Zy/Gy]:Vy?[Xy/Vy,$y/Vy]:[NaN,NaN];return Xy=$y=Vy=Wy=Zy=Gy=Jy=Qy=Ky=0,t}};Ii.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,A_)}},result:br};var ng,eg,rg,ig,og,ug=$v(),ag={point:br,lineStart:function(){ag.point=Yi},lineEnd:function(){ng&&Bi(eg,rg),ag.point=br},polygonStart:function(){ng=!0},polygonEnd:function(){ng=null},result:function(){var t=+ug;return ug.reset(),t}};Hi.prototype={_radius:4.5,_circle:ji(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=ji(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}};var cg=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),$_(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return $_(t,r(Fy)),Fy.result()},e.measure=function(t){return $_(t,r(ag)),ag.result()},e.bounds=function(t){return $_(t,r(jy)),jy.result()},e.centroid=function(t){return $_(t,r(tg)),tg.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,Uy):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Hi):new Ii(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},sg=function(t,n,e,r){return function(i,o){function u(n,e){var r=i(n,e);t(n=r[0],e=r[1])&&o.point(n,e)}function a(t,n){var e=i(t,n);_.point(e[0],e[1])}function c(){b.point=a,_.lineStart()}function s(){b.point=u,_.lineEnd()}function f(t,n){v.push([t,n]);var e=i(t,n);m.point(e[0],e[1])}function l(){m.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),m.lineEnd();var t,n,e,r,i=m.clean(),u=g.result(),a=u.length;if(v.pop(),p.push(v),v=null,a)if(1&i){if(e=u[0],(n=e.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&u.push(u.pop().concat(u.shift())),d.push(u.filter(Xi))}var p,d,v,_=n(o),y=i.invert(r[0],r[1]),g=yy(),m=n(g),x=!1,b={point:u,lineStart:c,lineEnd:s,polygonStart:function(){b.point=f,b.lineStart=l,b.lineEnd=h,d=[],p=[]},polygonEnd:function(){b.point=u,b.lineStart=c,b.lineEnd=s,d=bf(d);var t=ky(p,y);d.length?(x||(o.polygonStart(),x=!0),xy(d,$i,t,e,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),d=p=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return b}},fg=sg(function(){return!0},Vi,Zi,[-N_,-S_]),lg=function(t,n){function e(e,r,i,o){ai(o,t,n,i,e,r)}function r(t,n){return q_(t)*q_(n)>a}function i(t){var n,e,i,a,f;return{lineStart:function(){a=i=!1,f=1},point:function(l,h){var p,d=[l,h],v=r(l,h),_=c?v?0:u(l,h):v?u(l+(l<0?N_:-N_),h):0;if(!n&&(a=i=v)&&t.lineStart(),v!==i&&(!(p=o(n,d))||my(n,p)||my(d,p))&&(d[0]+=k_,d[1]+=k_,v=r(d[0],d[1])),v!==i)f=0,v?(t.lineStart(),p=o(d,n),t.point(p[0],p[1])):(p=o(n,d),t.point(p[0],p[1]),t.lineEnd()),n=p;else if(s&&n&&c^v){var y;_&e||!(y=o(d,n,!0))||(f=0,c?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&my(n,d)||t.point(d[0],d[1]),n=d,i=v,e=_},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return f|(a&&i)<<1}}}function o(t,n,e){var r=Cr(t),i=Cr(n),o=[1,0,0],u=Pr(r,i),c=zr(u,u),s=u[0],f=c-s*s;if(!f)return!e&&t;var l=a*c/f,h=-a*s/f,p=Pr(o,u),d=Rr(o,l);Lr(d,Rr(u,h));var v=p,_=zr(d,v),y=zr(v,v),g=_*_-y*(zr(d,d)-1);if(!(g<0)){var m=B_(g),x=Rr(v,(-_-m)/y);if(Lr(x,d),x=Ar(x),!e)return x;var b,w=t[0],M=n[0],T=t[1],k=n[1];M<w&&(b=w,w=M,M=b);var N=M-w,S=P_(N-N_)<k_,E=S||N<k_;if(!S&&k<T&&(b=T,T=k,k=b),E?S?T+k>0^x[1]<(P_(x[0]-w)<k_?T:k):T<=x[1]&&x[1]<=k:N>N_^(w<=x[0]&&x[0]<=M)){var A=Rr(v,(-_+m)/y);return Lr(A,d),[x,Ar(A)]}}}function u(n,e){var r=c?t:N_-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var a=q_(t),c=a>0,s=P_(a)>k_;return sg(r,i,e,c?[0,-t]:[-N_,t-N_])},hg=function(t){return{stream:Gi(t)}};Ji.prototype={constructor:Ji,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var pg=16,dg=q_(30*z_),vg=function(t,n){return+n?no(t,n):to(t)},_g=Gi({point:function(t,n){this.stream.point(t*z_,n*z_)}}),yg=function(){return io(uo).scale(155.424).center([0,33.6442])},gg=function(){return yg().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])},mg=function(){function t(t){var n=t[0],e=t[1];return a=null,i.point(n,e),a||(o.point(n,e),a)||(u.point(n,e),a)}function n(){return e=r=null,t}var e,r,i,o,u,a,c=gg(),s=yg().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=yg().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){a=[t,n]}};return t.invert=function(t){var n=c.scale(),e=c.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:c).invert(t)},t.stream=function(t){return e&&r===t?e:e=ao([c.stream(r=t),s.stream(t),f.stream(t)])},t.precision=function(t){return arguments.length?(c.precision(t),s.precision(t),f.precision(t),n()):c.precision()},t.scale=function(n){return arguments.length?(c.scale(n),s.scale(.35*n),f.scale(n),t.translate(c.translate())):c.scale()},t.translate=function(t){if(!arguments.length)return c.translate();var e=c.scale(),r=+t[0],a=+t[1];return i=c.translate(t).clipExtent([[r-.455*e,a-.238*e],[r+.455*e,a+.238*e]]).stream(l),o=s.translate([r-.307*e,a+.201*e]).clipExtent([[r-.425*e+k_,a+.12*e+k_],[r-.214*e-k_,a+.234*e-k_]]).stream(l),u=f.translate([r-.205*e,a+.212*e]).clipExtent([[r-.214*e+k_,a+.166*e+k_],[r-.115*e-k_,a+.234*e-k_]]).stream(l),n()},t.fitExtent=function(n,e){return Qi(t,n,e)},t.fitSize=function(n,e){return Ki(t,n,e)},t.scale(1070)},xg=co(function(t){return B_(2/(1+t))});xg.invert=so(function(t){return 2*mr(t/2)});var bg=function(){return eo(xg).scale(124.75).clipAngle(179.999)},wg=co(function(t){return(t=gr(t))&&t/I_(t)});wg.invert=so(function(t){return t});var Mg=function(){return eo(wg).scale(79.4188).clipAngle(179.999)};fo.invert=function(t,n){return[t,2*L_(D_(n))-S_]};var Tg=function(){return lo(fo).scale(961/A_)},kg=function(){return io(po).scale(109.5).parallels([30,30])};vo.invert=vo;var Ng=function(){return eo(vo).scale(152.63)},Sg=function(){return io(_o).scale(131.154).center([0,13.9389])};yo.invert=so(L_);var Eg=function(){return eo(yo).scale(144.049).clipAngle(60)},Ag=function(){function t(){return i=o=null,u}var n,e,r,i,o,u,a=1,c=0,s=0,f=1,l=1,h=Uy,p=null,d=Uy;return u={stream:function(t){return i&&o===t?i:i=h(d(o=t))},clipExtent:function(i){return arguments.length?(d=null==i?(p=n=e=r=null,Uy):li(p=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==p?null:[[p,n],[e,r]]},scale:function(n){return arguments.length?(h=go((a=+n)*f,a*l,c,s),t()):a},translate:function(n){return arguments.length?(h=go(a*f,a*l,c=+n[0],s=+n[1]),t()):[c,s]},reflectX:function(n){return arguments.length?(h=go(a*(f=n?-1:1),a*l,c,s),t()):f<0},reflectY:function(n){return arguments.length?(h=go(a*f,a*(l=n?-1:1),c,s),t()):l<0},fitExtent:function(t,n){return Qi(u,t,n)},fitSize:function(t,n){return Ki(u,t,n)}}};mo.invert=so(mr);var Cg=function(){return eo(mo).scale(249.5).clipAngle(90+k_)};xo.invert=so(function(t){return 2*L_(t)});var zg=function(){return eo(xo).scale(250).clipAngle(142)};bo.invert=function(t,n){return[-n,2*L_(D_(t))-S_]};var Pg=function(){var t=lo(bo),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},Lg=function(){function t(t){var o,u=0;t.eachAfter(function(t){var e=t.children;e?(t.x=Mo(e),t.y=ko(e)):(t.x=o?u+=n(t,o):0,t.y=0,o=t)});var a=So(t),c=Eo(t),s=a.x-n(a,c)/2,f=c.x+n(c,a)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-s)/(f-s)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=wo,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},Rg=function(){return this.eachAfter(Ao)},qg=function(t){var n,e,r,i,o=this,u=[o];do{for(n=u.reverse(),u=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r])}while(u.length);return this},Ug=function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},Dg=function(t){for(var n,e,r,i=this,o=[i],u=[];i=o.pop();)if(u.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=u.pop();)t(i);return this},Og=function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},Fg=function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},Ig=function(t){for(var n=this,e=Co(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},Yg=function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},Bg=function(){var t=[];return this.each(function(n){t.push(n)}),t},Hg=function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},jg=function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n};Uo.prototype=zo.prototype={constructor:Uo,count:Rg,each:qg,eachAfter:Dg,eachBefore:Ug,sum:Og,sort:Fg,path:Ig,ancestors:Yg,descendants:Bg,leaves:Hg,links:jg,copy:Po};var Xg=function(t){for(var n=(t=t.slice()).length,e=null,r=e;n;){var i=new Do(t[n-1]);r=r?r.next=i:e=i,t[void 0]=t[--n]}return{head:e,tail:r}},$g=function(t){return Fo(Xg(t),[])},Vg=function(t){return Vo(t),t},Wg=function(t){return function(){return t}},Zg=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(Qo(n)).eachAfter(Ko(i,.5)).eachBefore(tu(1)):t.eachBefore(Qo(Jo)).eachAfter(Ko(Go,1)).eachAfter(Ko(i,t.r/Math.min(e,r))).eachBefore(tu(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=Go;return t.radius=function(e){return arguments.length?(n=Wo(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Wg(+n),t):i},t},Gg=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},Jg=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(r-n)/t.value;++a<c;)o=u[a],o.y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s},Qg=function(){function t(t){var u=t.height+1;return t.x0=t.y0=i,t.x1=e,t.y1=r/u,t.eachBefore(n(r,u)),o&&t.eachBefore(Gg),t}function n(t,n){return function(e){e.children&&Jg(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,o=e.y0,u=e.x1-i,a=e.y1-i;u<r&&(r=u=(r+u)/2),a<o&&(o=a=(o+a)/2),e.x0=r,e.y0=o,e.x1=u,e.y1=a}}var e=1,r=1,i=0,o=!1;return t.round=function(n){return arguments.length?(o=!!n,t):o},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i=+n,t):i},t},Kg="$",tm={depth:-1},nm={},em=function(){function t(t){var r,i,o,u,a,c,s,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],a=l[i]=new Uo(r),null!=(c=n(r,i,t))&&(c+="")&&(s=Kg+(a.id=c),h[s]=s in h?nm:a);for(i=0;i<f;++i)if(a=l[i],null!=(c=e(t[i],i,t))&&(c+="")){if(!(u=h[Kg+c]))throw new Error("missing: "+c);if(u===nm)throw new Error("ambiguous: "+c);u.children?u.children.push(a):u.children=[a],a.parent=u}else{if(o)throw new Error("multiple roots");o=a}if(!o)throw new Error("no root");if(o.parent=tm,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(qo),o.parent=null,f>0)throw new Error("cycle");return o}var n=nu,e=eu;return t.id=function(e){return arguments.length?(n=Zo(e),t):n},t.parentId=function(n){return arguments.length?(e=Zo(n),t):e},t};su.prototype=Object.create(Uo.prototype);var rm=function(){function t(t){var r=fu(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),c)t.eachBefore(i);else{var s=t,f=t,l=t;t.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=s===f?1:o(s,f)/2,p=h-s.x,d=u/(f.x+h+p),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+p)*d,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,i=t.i?e[t.i-1]:null;if(n){au(t);var u=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+o(t._,i._),t.m=t.z-u):t.z=u}else i&&(t.z=i.z+o(t._,i._));t.parent.A=r(t,i,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t,n,e){if(n){for(var r,i=t,u=t,a=n,c=i.parent.children[0],s=i.m,f=u.m,l=a.m,h=c.m;a=ou(a),i=iu(i),a&&i;)c=iu(c),u=ou(u),u.a=t,r=a.z+l-i.z-s+o(a._,i._),r>0&&(uu(cu(a,t,e),t,r),s+=r,f+=r),l+=a.m,s+=i.m,h+=c.m,f+=u.m;a&&!ou(u)&&(u.t=a,u.m+=l-f),i&&!iu(c)&&(c.t=i,c.m+=s-h,e=t)}return e}function i(t){t.x*=u,t.y=t.depth*a}var o=ru,u=1,a=1,c=null;return t.separation=function(n){return arguments.length?(o=n,t):o},t.size=function(n){return arguments.length?(c=!1,u=+n[0],a=+n[1],t):c?null:[u,a]},t.nodeSize=function(n){return arguments.length?(c=!0,u=+n[0],a=+n[1],t):c?[u,a]:null},t},im=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(i-e)/t.value;++a<c;)o=u[a],o.x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*s},om=(1+Math.sqrt(5))/2,um=function t(n){function e(t,e,r,i,o){lu(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(om),am=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),u=[0],r&&t.eachBefore(Gg),t}function n(t){var n=u[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,
t.children&&(n=u[t.depth+1]=a(t)/2,r+=l(t)-n,i+=c(t)-n,o-=s(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=um,r=!1,i=1,o=1,u=[0],a=Go,c=Go,s=Go,f=Go,l=Go;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=Zo(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(a="function"==typeof n?n:Wg(+n),t):a},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:Wg(+n),t):c},t.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:Wg(+n),t):s},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Wg(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Wg(+n),t):l},t},cm=function(t,n,e,r,i){function o(t,n,e,r,i,u,a){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=u,s.y1=a,void 0}for(var l=f[t],h=e/2+l,p=t+1,d=n-1;p<d;){var v=p+d>>>1;f[v]<h?p=v+1:d=v}h-f[p-1]<f[p]-h&&t+1<p&&--p;var _=f[p]-l,y=e-_;if(u-r>a-i){var g=(r*y+u*_)/e;o(t,p,_,r,i,g,a),o(p,n,y,g,i,u,a)}else{var m=(i*y+a*_)/e;o(t,p,_,r,i,u,m),o(p,n,y,r,m,u,a)}}var u,a,c=t.children,s=c.length,f=new Array(s+1);for(f[0]=a=u=0;u<s;++u)f[u+1]=a+=c[u].value;o(0,s,t.value,n,e,r,i)},sm=function(t,n,e,r,i){(1&t.depth?im:Jg)(t,n,e,r,i)},fm=function t(n){function e(t,e,r,i,o){if((u=t._squarify)&&u.ratio===n)for(var u,a,c,s,f,l=-1,h=u.length,p=t.value;++l<h;){for(a=u[l],c=a.children,s=a.value=0,f=c.length;s<f;++s)a.value+=c[s].value;a.dice?Jg(a,e,r,i,r+=(o-r)*a.value/p):im(a,e,r,e+=(i-e)*a.value/p,o),p-=a.value}else t._squarify=u=lu(n,t,e,r,i,o),u.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(om),lm=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},hm=function(t){for(var n,e,r=-1,i=t.length,o=0,u=0,a=t[i-1],c=0;++r<i;)n=a,a=t[r],c+=e=n[0]*a[1]-a[0]*n[1],o+=(n[0]+a[0])*e,u+=(n[1]+a[1])*e;return c*=3,[o/c,u/c]},pm=function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])},dm=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(hu),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=pu(r),u=pu(i),a=u[0]===o[0],c=u[u.length-1]===o[o.length-1],s=[];for(n=o.length-1;n>=0;--n)s.push(t[r[o[n]][2]]);for(n=+a;n<u.length-c;++n)s.push(t[r[u[n]][2]]);return s},vm=function(t,n){for(var e,r,i=t.length,o=t[i-1],u=n[0],a=n[1],c=o[0],s=o[1],f=!1,l=0;l<i;++l)o=t[l],e=o[0],r=o[1],r>a!=s>a&&u<(c-e)*(a-r)/(s-r)+e&&(f=!f),c=e,s=r;return f},_m=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],u=o[0],a=o[1],c=0;++r<i;)n=u,e=a,o=t[r],u=o[0],a=o[1],n-=u,e-=a,c+=Math.sqrt(n*n+e*e);return c},ym=[].slice,gm={};du.prototype=xu.prototype={constructor:du,defer:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("defer after await");if(null!=this._error)return this;var n=ym.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),vu(this),this},abort:function(){return null==this._error&&gu(this,new Error("abort")),this},await:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=function(n,e){t.apply(null,[n].concat(e))},mu(this),this},awaitAll:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=t,mu(this),this}};var mm=function(){return Math.random()},xm=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(mm),bm=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(mm),wm=function t(n){function e(){var t=bm.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(mm),Mm=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(mm),Tm=function t(n){function e(t){var e=Mm.source(n)(t);return function(){return e()/t}}return e.source=t,e}(mm),km=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(mm),Nm=function(t,n){function e(t){var n,e=s.status;if(!e&&wu(s)||e>=200&&e<300||304===e){if(o)try{n=o.call(r,s)}catch(t){return void a.call("error",r,t)}else n=s;a.call("load",r,n)}else a.call("error",r,t)}var r,i,o,u,a=v("beforesend","progress","load","error"),c=He(),s=new XMLHttpRequest,f=null,l=null,h=0;if("undefined"==typeof XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(t)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=s.ontimeout=e:s.onreadystatechange=function(t){s.readyState>3&&e(t)},s.onprogress=function(t){a.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==n?c.remove(t):c.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(u=t,r):u},timeout:function(t){return arguments.length?(h=+t,r):h},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},password:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return s.open(n,t,!0,f,l),null==i||c.has("accept")||c.set("accept",i+",*/*"),s.setRequestHeader&&c.each(function(t,n){s.setRequestHeader(n,t)}),null!=i&&s.overrideMimeType&&s.overrideMimeType(i),null!=u&&(s.responseType=u),h>0&&(s.timeout=h),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=bu(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),a.call("beforesend",r,s),s.send(null==e?null:e),r},abort:function(){return s.abort(),r},on:function(){var t=a.on.apply(a,arguments);return t===a?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r},Sm=function(t,n){return function(e,r){var i=Nm(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}},Em=Sm("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),Am=Sm("application/json",function(t){return JSON.parse(t.responseText)}),Cm=Sm("text/plain",function(t){return t.responseText}),zm=Sm("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),Pm=function(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=Nm(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(Mu(n,r=t)):r},o.row(r),i?o.get(i):o}},Lm=Pm("text/csv",Zd),Rm=Pm("text/tab-separated-values",tv),qm=Array.prototype,Um=qm.map,Dm=qm.slice,Om={name:"implicit"},Fm=function(t){return function(){return t}},Im=function(t){return+t},Ym=[0,1],Bm=function(n,e,r){var o,u=n[0],a=n[n.length-1],c=i(u,a,null==e?10:e);switch(r=pr(null==r?",f":r),r.type){case"s":var s=Math.max(Math.abs(u),Math.abs(a));return null!=r.precision||isNaN(o=jv(c,s))||(r.precision=o),t.formatPrefix(r,s);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(o=Xv(c,Math.max(Math.abs(u),Math.abs(a))))||(r.precision=o-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(o=Hv(c))||(r.precision=o-2*("%"===r.type))}return t.format(r)},Hm=function(t,n){t=t.slice();var e,r=0,i=t.length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t},jm=new Date,Xm=new Date,$m=Ju(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});$m.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Ju(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):$m:null};var Vm=$m.range,Wm=6e4,Zm=6048e5,Gm=Ju(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),Jm=Gm.range,Qm=Ju(function(t){t.setTime(Math.floor(t/Wm)*Wm)},function(t,n){t.setTime(+t+n*Wm)},function(t,n){return(n-t)/Wm},function(t){return t.getMinutes()}),Km=Qm.range,tx=Ju(function(t){var n=t.getTimezoneOffset()*Wm%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),nx=tx.range,ex=Ju(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Wm)/864e5},function(t){return t.getDate()-1}),rx=ex.range,ix=Qu(0),ox=Qu(1),ux=Qu(2),ax=Qu(3),cx=Qu(4),sx=Qu(5),fx=Qu(6),lx=ix.range,hx=ox.range,px=ux.range,dx=ax.range,vx=cx.range,_x=sx.range,yx=fx.range,gx=Ju(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),mx=gx.range,xx=Ju(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});xx.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ju(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var bx=xx.range,wx=Ju(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Wm)},function(t,n){return(n-t)/Wm},function(t){return t.getUTCMinutes()}),Mx=wx.range,Tx=Ju(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),kx=Tx.range,Nx=Ju(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Sx=Nx.range,Ex=Ku(0),Ax=Ku(1),Cx=Ku(2),zx=Ku(3),Px=Ku(4),Lx=Ku(5),Rx=Ku(6),qx=Ex.range,Ux=Ax.range,Dx=Cx.range,Ox=zx.range,Fx=Px.range,Ix=Lx.range,Yx=Rx.range,Bx=Ju(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),Hx=Bx.range,jx=Ju(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});jx.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ju(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Xx,$x=jx.range,Vx={"-":"",_:" ",0:"0"},Wx=/^\s*\d+/,Zx=/^%/,Gx=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;Ja({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Jx=Date.prototype.toISOString?Qa:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"),Qx=+new Date("2000-01-01T00:00:00.000Z")?Ka:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),Kx=1e3,tb=60*Kx,nb=60*tb,eb=24*nb,rb=7*eb,ib=30*eb,ob=365*eb,ub=function(){return ec(xx,gx,ix,ex,tx,Qm,Gm,$m,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},ab=function(){return ec(jx,Bx,Ex,Nx,Tx,wx,Gm,$m,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},cb=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})},sb=cb("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),fb=cb("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),lb=cb("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),hb=cb("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),pb=Zh(Wt(300,.5,0),Wt(-240,.5,1)),db=Zh(Wt(-100,.75,.35),Wt(80,1.5,.8)),vb=Zh(Wt(260,.75,.35),Wt(80,1.5,.8)),_b=Wt(),yb=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return _b.h=360*t-100,_b.s=1.5-1.5*n,_b.l=.8-.9*n,_b+""},gb=rc(cb("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),mb=rc(cb("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),xb=rc(cb("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),bb=rc(cb("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),wb=function(t){return function(){return t}},Mb=Math.abs,Tb=Math.atan2,kb=Math.cos,Nb=Math.max,Sb=Math.min,Eb=Math.sin,Ab=Math.sqrt,Cb=1e-12,zb=Math.PI,Pb=zb/2,Lb=2*zb,Rb=function(){function t(){var t,s,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-Pb,p=u.apply(this,arguments)-Pb,d=Mb(p-h),v=p>h;if(c||(c=t=Ue()),l<f&&(s=l,l=f,f=s),l>Cb)if(d>Lb-Cb)c.moveTo(l*kb(h),l*Eb(h)),c.arc(0,0,l,h,p,!v),f>Cb&&(c.moveTo(f*kb(p),f*Eb(p)),c.arc(0,0,f,p,h,v));else{var _,y,g=h,m=p,x=h,b=p,w=d,M=d,T=a.apply(this,arguments)/2,k=T>Cb&&(i?+i.apply(this,arguments):Ab(f*f+l*l)),N=Sb(Mb(l-f)/2,+r.apply(this,arguments)),S=N,E=N;if(k>Cb){var A=uc(k/f*Eb(T)),C=uc(k/l*Eb(T));(w-=2*A)>Cb?(A*=v?1:-1,x+=A,b-=A):(w=0,x=b=(h+p)/2),(M-=2*C)>Cb?(C*=v?1:-1,g+=C,m-=C):(M=0,g=m=(h+p)/2)}var z=l*kb(g),P=l*Eb(g),L=f*kb(b),R=f*Eb(b);if(N>Cb){var q=l*kb(m),U=l*Eb(m),D=f*kb(x),O=f*Eb(x);if(d<zb){var F=w>Cb?hc(z,P,D,O,q,U,L,R):[L,R],I=z-F[0],Y=P-F[1],B=q-F[0],H=U-F[1],j=1/Eb(oc((I*B+Y*H)/(Ab(I*I+Y*Y)*Ab(B*B+H*H)))/2),X=Ab(F[0]*F[0]+F[1]*F[1]);S=Sb(N,(f-X)/(j-1)),E=Sb(N,(l-X)/(j+1))}}M>Cb?E>Cb?(_=pc(D,O,z,P,l,E,v),y=pc(q,U,L,R,l,E,v),c.moveTo(_.cx+_.x01,_.cy+_.y01),E<N?c.arc(_.cx,_.cy,E,Tb(_.y01,_.x01),Tb(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,E,Tb(_.y01,_.x01),Tb(_.y11,_.x11),!v),c.arc(0,0,l,Tb(_.cy+_.y11,_.cx+_.x11),Tb(y.cy+y.y11,y.cx+y.x11),!v),c.arc(y.cx,y.cy,E,Tb(y.y11,y.x11),Tb(y.y01,y.x01),!v))):(c.moveTo(z,P),c.arc(0,0,l,g,m,!v)):c.moveTo(z,P),f>Cb&&w>Cb?S>Cb?(_=pc(L,R,q,U,f,-S,v),y=pc(z,P,D,O,f,-S,v),c.lineTo(_.cx+_.x01,_.cy+_.y01),S<N?c.arc(_.cx,_.cy,S,Tb(_.y01,_.x01),Tb(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,S,Tb(_.y01,_.x01),Tb(_.y11,_.x11),!v),c.arc(0,0,f,Tb(_.cy+_.y11,_.cx+_.x11),Tb(y.cy+y.y11,y.cx+y.x11),v),c.arc(y.cx,y.cy,S,Tb(y.y11,y.x11),Tb(y.y01,y.x01),!v))):c.arc(0,0,f,b,x,v):c.lineTo(L,R)}else c.moveTo(0,0);if(c.closePath(),t)return c=null,t+""||null}var n=ac,e=cc,r=wb(0),i=null,o=sc,u=fc,a=lc,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-zb/2;return[kb(r)*t,Eb(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:wb(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:wb(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:wb(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:wb(+n),t):o},t.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:wb(+n),t):u},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:wb(+n),t):a},t.context=function(n){return arguments.length?(c=null==n?null:n,t):c},t};dc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var qb=function(t){return new dc(t)},Ub=function(){function t(t){var a,c,s,f=t.length,l=!1;for(null==i&&(u=o(s=Ue())),a=0;a<=f;++a)!(a<f&&r(c=t[a],a,t))===l&&((l=!l)?u.lineStart():u.lineEnd()),l&&u.point(+n(c,a,t),+e(c,a,t));if(s)return u=null,s+""||null}var n=vc,e=_c,r=wb(!0),i=null,o=qb,u=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:wb(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:wb(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(u=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=u=null:u=o(i=n),t):i},t},Db=function(){function t(t){var n,f,l,h,p,d=t.length,v=!1,_=new Array(d),y=new Array(d);for(null==a&&(s=c(p=Ue())),n=0;n<=d;++n){if(!(n<d&&u(h=t[n],n,t))===v)if(v=!v)f=n,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),l=n-1;l>=f;--l)s.point(_[l],y[l]);s.lineEnd(),s.areaEnd()}v&&(_[n]=+e(h,n,t),y[n]=+i(h,n,t),s.point(r?+r(h,n,t):_[n],o?+o(h,n,t):y[n]))}if(p)return s=null,p+""||null}function n(){return Ub().defined(u).curve(c).context(a)}var e=vc,r=null,i=wb(0),o=_c,u=wb(!0),a=null,c=qb,s=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:wb(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:wb(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:wb(!!n),t):u},t.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),t):c},t.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),t):a},t},Ob=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Fb=function(t){return t},Ib=function(){function t(t){var a,c,s,f,l,h=t.length,p=0,d=new Array(h),v=new Array(h),_=+i.apply(this,arguments),y=Math.min(Lb,Math.max(-Lb,o.apply(this,arguments)-_)),g=Math.min(Math.abs(y)/h,u.apply(this,arguments)),m=g*(y<0?-1:1);for(a=0;a<h;++a)(l=v[d[a]=a]=+n(t[a],a,t))>0&&(p+=l);for(null!=e?d.sort(function(t,n){return e(v[t],v[n])}):null!=r&&d.sort(function(n,e){return r(t[n],t[e])}),a=0,s=p?(y-h*m)/p:0;a<h;++a,_=f)c=d[a],l=v[c],f=_+(l>0?l*s:0)+m,v[c]={data:t[c],index:a,value:l,startAngle:_,endAngle:f,padAngle:g};return v}var n=Fb,e=Ob,r=null,i=wb(0),o=wb(Lb),u=wb(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:wb(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:wb(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:wb(+n),t):u},t},Yb=gc(qb);yc.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Bb=function(){return mc(Ub().curve(Yb))},Hb=function(){var t=Db().curve(Yb),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return mc(e())},delete t.lineX0,t.lineEndAngle=function(){return mc(r())},delete t.lineX1,t.lineInnerRadius=function(){return mc(i())},delete t.lineY0,t.lineOuterRadius=function(){return mc(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(gc(t)):n()._curve},t},jb=Array.prototype.slice,Xb=function(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]},$b={draw:function(t,n){var e=Math.sqrt(n/zb);t.moveTo(e,0),t.arc(0,0,e,0,Lb)}},Vb={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},Wb=Math.sqrt(1/3),Zb=2*Wb,Gb={draw:function(t,n){var e=Math.sqrt(n/Zb),r=e*Wb;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Jb=Math.sin(zb/10)/Math.sin(7*zb/10),Qb=Math.sin(Lb/10)*Jb,Kb=-Math.cos(Lb/10)*Jb,tw={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Qb*e,i=Kb*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=Lb*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},nw={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},ew=Math.sqrt(3),rw={draw:function(t,n){var e=-Math.sqrt(n/(3*ew));t.moveTo(0,2*e),t.lineTo(-ew*e,-e),t.lineTo(ew*e,-e),t.closePath()}},iw=-.5,ow=Math.sqrt(3)/2,uw=1/Math.sqrt(12),aw=3*(uw/2+1),cw={draw:function(t,n){var e=Math.sqrt(n/aw),r=e/2,i=e*uw,o=r,u=e*uw+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(iw*r-ow*i,ow*r+iw*i),t.lineTo(iw*o-ow*u,ow*o+iw*u),t.lineTo(iw*a-ow*c,ow*a+iw*c),t.lineTo(iw*r+ow*i,iw*i-ow*r),t.lineTo(iw*o+ow*u,iw*u-ow*o),t.lineTo(iw*a+ow*c,iw*c-ow*a),t.closePath()}},sw=[$b,Vb,Gb,nw,tw,rw,cw],fw=function(){function t(){var t;if(r||(r=t=Ue()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=wb($b),e=wb(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:wb(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},lw=function(){};Cc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ac(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ac(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var hw=function(t){return new Cc(t)};zc.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Ac(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var pw=function(t){return new zc(t)};Pc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Ac(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var dw=function(t){return new Pc(t)};Lc.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var vw=function t(n){function e(t){return 1===n?new Cc(t):new Lc(t,n)}return e.beta=function(n){return t(+n)},e}(.85);qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Rc(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Rc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,
this._y1=this._y2,this._y2=n}};var _w=function t(n){function e(t){return new qc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Uc.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Rc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var yw=function t(n){function e(t){return new Uc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Dc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Rc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var gw=function t(n){function e(t){return new Dc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Fc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Oc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var mw=function t(n){function e(t){return n?new Fc(t,n):new qc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Ic.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Oc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var xw=function t(n){function e(t){return n?new Ic(t,n):new Uc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Yc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Oc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var bw=function t(n){function e(t){return n?new Yc(t,n):new Dc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Bc.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};var ww=function(t){return new Bc(t)};Vc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:$c(this,this._t0,Xc(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,$c(this,Xc(this,e=jc(this,t,n)),e);break;default:$c(this,this._t0,e=jc(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Wc.prototype=Object.create(Vc.prototype)).point=function(t,n){Vc.prototype.point.call(this,n,t)},Zc.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=Kc(t),i=Kc(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var Mw=function(t){return new Qc(t)};ts.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var Tw=function(t){return new ts(t,.5)},kw=function(t,n){if((i=t.length)>1)for(var e,r,i,o=1,u=t[n[0]],a=u.length;o<i;++o)for(r=u,u=t[n[o]],e=0;e<a;++e)u[e][1]+=u[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]},Nw=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e},Sw=function(){function t(t){var o,u,a=n.apply(this,arguments),c=t.length,s=a.length,f=new Array(s);for(o=0;o<s;++o){for(var l,h=a[o],p=f[o]=new Array(c),d=0;d<c;++d)p[d]=l=[0,+i(t[d],h,d,t)],l.data=t[d];p.key=h}for(o=0,u=e(f);o<s;++o)f[u[o]].index=o;return r(f,u),f}var n=wb([]),e=Nw,r=kw,i=rs;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:wb(jb.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?Nw:"function"==typeof n?n:wb(jb.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?kw:n,t):r},t},Ew=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}kw(t,n)}},Aw=function(t,n){if((a=t.length)>1)for(var e,r,i,o,u,a,c=0,s=t[n[0]].length;c<s;++c)for(o=u=0,e=0;e<a;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):r[0]=o},Cw=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}kw(t,n)}},zw=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var f=t[n[a]],l=f[u][1]||0,h=f[u-1][1]||0,p=(l-h)/2,d=0;d<a;++d){var v=t[n[d]];p+=(v[u][1]||0)-(v[u-1][1]||0)}c+=l,s+=p*l}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,kw(t,n)}},Pw=function(t){var n=t.map(is);return Nw(t).sort(function(t,e){return n[t]-n[e]})},Lw=function(t){return Pw(t).reverse()},Rw=function(t){var n,e,r=t.length,i=t.map(is),o=Nw(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)},qw=function(t){return Nw(t).reverse()},Uw=function(t){return function(){return t}};as.prototype={constructor:as,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=ls(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(ss(this,e),t=e,e=t.U),e.C=!1,r.C=!0,fs(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(fs(this,e),t=e,e=t.U),e.C=!1,r.C=!0,ss(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,u=t.R;if(e=o?u?ls(u):o:u,i?i.L===t?i.L=e:i.R=e:this._=e,o&&u?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==u?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=u,u.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,ss(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,fs(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,ss(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,fs(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,ss(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,fs(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Dw,Ow,Fw,Iw,Yw,Bw=[],Hw=[],jw=1e-6,Xw=1e-12;Us.prototype={constructor:Us,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return xs(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,u,a=e.site,c=-1,s=n[i[o-1]],f=s.left===a?s.right:s.left;++c<o;)u=f,s=n[i[c]],f=s.left===a?s.right:s.left,u&&f&&r<u.index&&r<f.index&&Rs(a,u,f)<0&&t.push([a.data,u.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,u=o._found||0,a=o.cells.length;!(i=o.cells[u]);)if(++u>=a)return null;var c=t-i.site[0],s=n-i.site[1],f=c*c+s*s;do{i=o.cells[r=u],u=null,i.halfedges.forEach(function(e){var r=o.edges[e],a=r.left;if(a!==i.site&&a||(a=r.right)){var c=t-a[0],s=n-a[1],l=c*c+s*s;l<f&&(f=l,u=a.index)}})}while(null!==u);return o._found=r,null==e||f<=e*e?i.site:null}};var $w=function(){function t(t){return new Us(t.map(function(r,i){var o=[Math.round(n(r,i,t)/jw)*jw,Math.round(e(r,i,t)/jw)*jw];return o.index=i,o.data=r,o}),r)}var n=os,e=us,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:Uw(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Uw(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},Vw=function(t){return function(){return t}};Os.prototype={constructor:Os,scale:function(t){return 1===t?this:new Os(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Os(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ww=new Os(1,0,0);Fs.prototype=Os.prototype;var Zw=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Gw=function(){function n(t){t.on("wheel.zoom",s).on("mousedown.zoom",f).on("dblclick.zoom",l).on("touchstart.zoom",h).on("touchmove.zoom",p).on("touchend.zoom touchcancel.zoom",d).style("-webkit-tap-highlight-color","rgba(0,0,0,0)").property("__zoom",Hs)}function e(t,n){return n=Math.max(x,Math.min(b,n)),n===t.k?t:new Os(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Os(t.k,r,i)}function i(t,n){var e=t.invertX(n[0][0])-w,r=t.invertX(n[1][0])-M,i=t.invertY(n[0][1])-T,o=t.invertY(n[1][1])-k;return t.translate(r>e?(e+r)/2:Math.min(0,e)||Math.max(0,r),o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o))}function o(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function u(t,n,e){t.on("start.zoom",function(){a(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=a(t,r),u=m.apply(t,r),c=e||o(u),s=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),f=t.__zoom,l="function"==typeof n?n.apply(t,r):n,h=S(f.invert(c).concat(s/f.k),l.invert(c).concat(s/l.k));return function(t){if(1===t)t=l;else{var n=h(t),e=s/n[2];t=new Os(e,c[0]-n[0]*e,c[1]-n[1]*e)}i.zoom(null,t)}})}function a(t,n){for(var e,r=0,i=E.length;r<i;++r)if((e=E[r]).that===t)return e;return new c(t,n)}function c(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=m.apply(t,n)}function s(){function n(){o.wheel=null,o.end()}if(g.apply(this,arguments)){var o=a(this,arguments),u=this.__zoom,c=Math.max(x,Math.min(b,u.k*Math.pow(2,-t.event.deltaY*(t.event.deltaMode?120:1)/500))),s=Gf(this);if(o.wheel)o.mouse[0][0]===s[0]&&o.mouse[0][1]===s[1]||(o.mouse[1]=u.invert(o.mouse[0]=s)),clearTimeout(o.wheel);else{if(u.k===c)return;o.mouse=[s,u.invert(s)],gp(this),o.start()}Zw(),o.wheel=setTimeout(n,P),o.zoom("mouse",i(r(e(u,c),o.mouse[0],o.mouse[1]),o.extent))}}function f(){function n(){if(Zw(),!o.moved){var n=t.event.clientX-s,e=t.event.clientY-f;o.moved=n*n+e*e>L}o.zoom("mouse",i(r(o.that.__zoom,o.mouse[0]=Gf(o.that),o.mouse[1]),o.extent))}function e(){u.on("mousemove.zoom mouseup.zoom",null),mt(t.event.view,o.moved),Zw(),o.end()}if(!y&&g.apply(this,arguments)){var o=a(this,arguments),u=Pl(t.event.view).on("mousemove.zoom",n,!0).on("mouseup.zoom",e,!0),c=Gf(this),s=t.event.clientX,f=t.event.clientY;Dl(t.event.view),Is(),o.mouse=[c,this.__zoom.invert(c)],gp(this),o.start()}}function l(){if(g.apply(this,arguments)){var o=this.__zoom,a=Gf(this),c=o.invert(a),s=o.k*(t.event.shiftKey?.5:2),f=i(r(e(o,s),a,c),m.apply(this,arguments));Zw(),N>0?Pl(this).transition().duration(N).call(u,f,a):Pl(this).call(n.transform,f)}}function h(){if(g.apply(this,arguments)){var n,e,r,i,o=a(this,arguments),u=t.event.changedTouches,c=u.length;for(Is(),e=0;e<c;++e)r=u[e],i=Rl(this,u,r.identifier),i=[i,this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);if(_&&(_=clearTimeout(_),!o.touch1))return o.end(),void((i=Pl(this).on("dblclick.zoom"))&&i.apply(this,arguments));n&&(_=setTimeout(function(){_=null},z),gp(this),o.start())}}function p(){var n,o,u,c,s=a(this,arguments),f=t.event.changedTouches,l=f.length;for(Zw(),_&&(_=clearTimeout(_)),n=0;n<l;++n)o=f[n],u=Rl(this,f,o.identifier),s.touch0&&s.touch0[2]===o.identifier?s.touch0[0]=u:s.touch1&&s.touch1[2]===o.identifier&&(s.touch1[0]=u);if(o=s.that.__zoom,s.touch1){var h=s.touch0[0],p=s.touch0[1],d=s.touch1[0],v=s.touch1[1],y=(y=d[0]-h[0])*y+(y=d[1]-h[1])*y,g=(g=v[0]-p[0])*g+(g=v[1]-p[1])*g;o=e(o,Math.sqrt(y/g)),u=[(h[0]+d[0])/2,(h[1]+d[1])/2],c=[(p[0]+v[0])/2,(p[1]+v[1])/2]}else{if(!s.touch0)return;u=s.touch0[0],c=s.touch0[1]}s.zoom("touch",i(r(o,u,c),s.extent))}function d(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(Is(),y&&clearTimeout(y),y=setTimeout(function(){y=null},z),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end()}var _,y,g=Ys,m=Bs,x=0,b=1/0,w=-b,M=b,T=w,k=M,N=250,S=Hh,E=[],C=v("start","zoom","end"),z=500,P=150,L=0;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Hs),t!==e?u(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},n.scaleTo=function(t,u){n.transform(t,function(){var t=m.apply(this,arguments),n=this.__zoom,a=o(t),c=n.invert(a);return i(r(e(n,"function"==typeof u?u.apply(this,arguments):u),a,c),t)})},n.translateBy=function(t,e,r){n.transform(t,function(){return i(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),m.apply(this,arguments))})},c.prototype={start:function(){return 1==++this.active&&(this.index=E.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(E.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){A(new Ds(n,t,this.that.__zoom),C.apply,C,[t,this.that,this.args])}},n.filter=function(t){return arguments.length?(g="function"==typeof t?t:Vw(!!t),n):g},n.extent=function(t){return arguments.length?(m="function"==typeof t?t:Vw([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):m},n.scaleExtent=function(t){return arguments.length?(x=+t[0],b=+t[1],n):[x,b]},n.translateExtent=function(t){return arguments.length?(w=+t[0][0],M=+t[1][0],T=+t[0][1],k=+t[1][1],n):[[w,T],[M,k]]},n.duration=function(t){return arguments.length?(N=+t,n):N},n.interpolate=function(t){return arguments.length?(S=t,n):S},n.on=function(){var t=C.on.apply(C,arguments);return t===C?n:t},n.clickDistance=function(t){return arguments.length?(L=(t=+t)*t,n):Math.sqrt(L)},n};t.version="4.9.1",t.bisect=Vs,t.bisectRight=Vs,t.bisectLeft=Ws,t.ascending=js,t.bisector=Xs,t.cross=Gs,t.descending=Js,t.deviation=tf,t.extent=nf,t.histogram=df,t.thresholdFreedmanDiaconis=_f,t.thresholdScott=yf,t.thresholdSturges=pf,t.max=gf,t.mean=mf,t.median=xf,t.merge=bf,t.min=wf,t.pairs=Zs,t.permute=Mf,t.quantile=vf,t.range=cf,t.scan=Tf,t.shuffle=kf,t.sum=Nf,t.ticks=hf,t.tickIncrement=r,t.tickStep=i,t.transpose=Sf,t.variance=Ks,t.zip=Ef,t.axisTop=l,t.axisRight=h,t.axisBottom=p,t.axisLeft=d,t.brush=Ed,t.brushX=ze,t.brushY=Pe,t.brushSelection=Ce,t.chord=qd,t.ribbon=Yd,t.nest=Bd,t.set=Ze,t.map=He,t.keys=jd,t.values=Xd,t.entries=$d,t.color=Nt,t.rgb=Ct,t.hsl=Rt,t.lab=Ot,t.hcl=Xt,t.cubehelix=Wt,t.dispatch=v,t.drag=Fl,t.dragDisable=Dl,t.dragEnable=mt,t.dsvFormat=Vd,t.csvParse=Zd,t.csvParseRows=Gd,t.csvFormat=Jd,t.csvFormatRows=Qd,t.tsvParse=tv,t.tsvParseRows=nv,t.tsvFormat=ev,t.tsvFormatRows=rv,t.easeLinear=ie,t.easeQuad=ae,t.easeQuadIn=oe,t.easeQuadOut=ue,t.easeQuadInOut=ae,t.easeCubic=fe,t.easeCubicIn=ce,t.easeCubicOut=se,t.easeCubicInOut=fe,t.easePoly=Hp,t.easePolyIn=Yp,t.easePolyOut=Bp,t.easePolyInOut=Hp,t.easeSin=pe,t.easeSinIn=le,t.easeSinOut=he,t.easeSinInOut=pe,t.easeExp=_e,t.easeExpIn=de,t.easeExpOut=ve,t.easeExpInOut=_e,t.easeCircle=me,t.easeCircleIn=ye,t.easeCircleOut=ge,t.easeCircleInOut=me,t.easeBounce=be,t.easeBounceIn=xe,t.easeBounceOut=be,t.easeBounceInOut=we,t.easeBack=id,t.easeBackIn=ed,t.easeBackOut=rd,t.easeBackInOut=id,t.easeElastic=ad,t.easeElasticIn=ud,t.easeElasticOut=ad,t.easeElasticInOut=cd,t.forceCenter=iv,t.forceCollide=wv,t.forceLink=Mv,t.forceManyBody=Sv,t.forceSimulation=Nv,t.forceX=Ev,t.forceY=Av,t.formatDefaultLocale=vr,t.formatLocale=Bv,t.formatSpecifier=pr,t.precisionFixed=Hv,t.precisionPrefix=jv,t.precisionRound=Xv,t.geoArea=G_,t.geoBounds=K_,t.geoCentroid=ny,t.geoCircle=_y,t.geoClipExtent=My,t.geoContains=Ry,t.geoDistance=zy,t.geoGraticule=Ti,t.geoGraticule10=ki,t.geoInterpolate=qy,t.geoLength=Ey,t.geoPath=cg,t.geoAlbers=gg,t.geoAlbersUsa=mg,t.geoAzimuthalEqualArea=bg,t.geoAzimuthalEqualAreaRaw=xg,t.geoAzimuthalEquidistant=Mg,t.geoAzimuthalEquidistantRaw=wg,t.geoConicConformal=kg,t.geoConicConformalRaw=po,t.geoConicEqualArea=yg,t.geoConicEqualAreaRaw=uo,t.geoConicEquidistant=Sg,t.geoConicEquidistantRaw=_o,t.geoEquirectangular=Ng,t.geoEquirectangularRaw=vo,t.geoGnomonic=Eg,t.geoGnomonicRaw=yo,t.geoIdentity=Ag,t.geoProjection=eo,t.geoProjectionMutator=ro,t.geoMercator=Tg,t.geoMercatorRaw=fo,t.geoOrthographic=Cg,t.geoOrthographicRaw=mo,t.geoStereographic=zg,t.geoStereographicRaw=xo,t.geoTransverseMercator=Pg,t.geoTransverseMercatorRaw=bo,t.geoRotation=vy,t.geoStream=$_,t.geoTransform=hg,t.cluster=Lg,t.hierarchy=zo,t.pack=Zg,t.packSiblings=Vg,t.packEnclose=$g,t.partition=Qg,t.stratify=em,t.tree=rm,t.treemap=am,t.treemapBinary=cm,t.treemapDice=Jg,t.treemapSlice=im,t.treemapSliceDice=sm,t.treemapSquarify=um,t.treemapResquarify=fm,t.interpolate=qh,t.interpolateArray=Eh,t.interpolateBasis=wh,t.interpolateBasisClosed=Mh,t.interpolateDate=Ah,t.interpolateNumber=Ch,t.interpolateObject=zh,t.interpolateRound=Uh,t.interpolateString=Rh,t.interpolateTransformCss=Ih,t.interpolateTransformSvg=Yh,t.interpolateZoom=Hh,t.interpolateRgb=kh,t.interpolateRgbBasis=Nh,t.interpolateRgbBasisClosed=Sh,t.interpolateHsl=jh,t.interpolateHslLong=Xh,t.interpolateLab=pn,t.interpolateHcl=$h,t.interpolateHclLong=Vh,t.interpolateCubehelix=Wh,t.interpolateCubehelixLong=Zh,t.quantize=Gh,t.path=Ue,t.polygonArea=lm,t.polygonCentroid=hm;t.polygonHull=dm,t.polygonContains=vm,t.polygonLength=_m,t.quadtree=ir,t.queue=xu,t.randomUniform=xm,t.randomNormal=bm,t.randomLogNormal=wm,t.randomBates=Tm,t.randomIrwinHall=Mm,t.randomExponential=km,t.request=Nm,t.html=Em,t.json=Am,t.text=Cm,t.xml=zm,t.csv=Lm,t.tsv=Rm,t.scaleBand=ku,t.scalePoint=Su,t.scaleIdentity=Du,t.scaleLinear=Uu,t.scaleLog=ju,t.scaleOrdinal=Tu,t.scaleImplicit=Om,t.scalePow=$u,t.scaleSqrt=Vu,t.scaleQuantile=Wu,t.scaleQuantize=Zu,t.scaleThreshold=Gu,t.scaleTime=ub,t.scaleUtc=ab,t.schemeCategory10=sb,t.schemeCategory20b=fb,t.schemeCategory20c=lb,t.schemeCategory20=hb,t.interpolateCubehelixDefault=pb,t.interpolateRainbow=yb,t.interpolateWarm=db,t.interpolateCool=vb,t.interpolateViridis=gb,t.interpolateMagma=mb,t.interpolateInferno=xb,t.interpolatePlasma=bb,t.scaleSequential=ic,t.creator=If,t.local=w,t.matcher=Xf,t.mouse=Gf,t.namespace=Ff,t.namespaces=Of,t.select=Pl,t.selectAll=Ll,t.selection=yt,t.selector=Jf,t.selectorAll=Kf,t.style=X,t.touch=Rl,t.touches=ql,t.window=gl,t.customEvent=A,t.arc=Rb,t.area=Db,t.line=Ub,t.pie=Ib,t.radialArea=Hb,t.radialLine=Bb,t.linkHorizontal=Nc,t.linkVertical=Sc,t.linkRadial=Ec,t.symbol=fw,t.symbols=sw,t.symbolCircle=$b,t.symbolCross=Vb,t.symbolDiamond=Gb,t.symbolSquare=nw,t.symbolStar=tw,t.symbolTriangle=rw,t.symbolWye=cw,t.curveBasisClosed=pw,t.curveBasisOpen=dw,t.curveBasis=hw,t.curveBundle=vw,t.curveCardinalClosed=yw,t.curveCardinalOpen=gw,t.curveCardinal=_w,t.curveCatmullRomClosed=xw,t.curveCatmullRomOpen=bw,t.curveCatmullRom=mw,t.curveLinearClosed=ww,t.curveLinear=qb,t.curveMonotoneX=Gc,t.curveMonotoneY=Jc,t.curveNatural=Mw,t.curveStep=Tw,t.curveStepAfter=es,t.curveStepBefore=ns,t.stack=Sw,t.stackOffsetExpand=Ew,t.stackOffsetDiverging=Aw,t.stackOffsetNone=kw,t.stackOffsetSilhouette=Cw,t.stackOffsetWiggle=zw,t.stackOrderAscending=Pw,t.stackOrderDescending=Lw,t.stackOrderInsideOut=Rw,t.stackOrderNone=Nw,t.stackOrderReverse=qw,t.timeInterval=Ju,t.timeMillisecond=$m,t.timeMilliseconds=Vm,t.utcMillisecond=$m,t.utcMilliseconds=Vm,t.timeSecond=Gm,t.timeSeconds=Jm,t.utcSecond=Gm,t.utcSeconds=Jm,t.timeMinute=Qm,t.timeMinutes=Km,t.timeHour=tx,t.timeHours=nx,t.timeDay=ex,t.timeDays=rx,t.timeWeek=ix,t.timeWeeks=lx,t.timeSunday=ix,t.timeSundays=lx,t.timeMonday=ox,t.timeMondays=hx,t.timeTuesday=ux,t.timeTuesdays=px,t.timeWednesday=ax,t.timeWednesdays=dx,t.timeThursday=cx,t.timeThursdays=vx,t.timeFriday=sx,t.timeFridays=_x,t.timeSaturday=fx,t.timeSaturdays=yx,t.timeMonth=gx,t.timeMonths=mx,t.timeYear=xx,t.timeYears=bx,t.utcMinute=wx,t.utcMinutes=Mx,t.utcHour=Tx,t.utcHours=kx,t.utcDay=Nx,t.utcDays=Sx,t.utcWeek=Ex,t.utcWeeks=qx,t.utcSunday=Ex,t.utcSundays=qx,t.utcMonday=Ax,t.utcMondays=Ux,t.utcTuesday=Cx,t.utcTuesdays=Dx,t.utcWednesday=zx,t.utcWednesdays=Ox,t.utcThursday=Px,t.utcThursdays=Fx,t.utcFriday=Lx,t.utcFridays=Ix,t.utcSaturday=Rx,t.utcSaturdays=Yx,t.utcMonth=Bx,t.utcMonths=Hx,t.utcYear=jx,t.utcYears=$x,t.timeFormatDefaultLocale=Ja,t.timeFormatLocale=ra,t.isoFormat=Jx,t.isoParse=Qx,t.now=_n,t.timer=mn,t.timerFlush=xn,t.timeout=up,t.interval=ap,t.transition=ee,t.active=hd,t.interrupt=gp,t.voronoi=$w,t.zoom=Gw,t.zoomTransform=Fs,t.zoomIdentity=Ww,Object.defineProperty(t,"__esModule",{value:!0})});

// https://github.com/d3/d3-selection-multi Version 1.0.0. Copyright 2016 Mike
// Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("d3-selection"),require("d3-transition")):"function"==typeof define&&define.amd?define(["d3-selection","d3-transition"],n):n(t.d3,t.d3)}(this,function(t,n){"use strict";function r(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.attr(i,n[i])})}function e(t,n){for(var r in n)t.attr(r,n[r]);return t}function i(t){return("function"==typeof t?r:e)(this,t)}function o(n,r,e){return n.each(function(){var n=r.apply(this,arguments),i=t.select(this);for(var o in n)i.style(o,n[o],e)})}function f(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function u(t,n){return("function"==typeof t?o:f)(this,t,null==n?"":n)}function s(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.property(i,n[i])})}function c(t,n){for(var r in n)t.property(r,n[r]);return t}function a(t){return("function"==typeof t?s:c)(this,t)}function p(n,r){return n.each(function(){var e=r.apply(this,arguments),i=t.select(this).transition(n);for(var o in e)i.attr(o,e[o])})}function l(t,n){for(var r in n)t.attr(r,n[r]);return t}function y(t){return("function"==typeof t?p:l)(this,t)}function h(n,r,e){return n.each(function(){var i=r.apply(this,arguments),o=t.select(this).transition(n);for(var f in i)o.style(f,i[f],e)})}function v(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function d(t,n){return("function"==typeof t?h:v)(this,t,null==n?"":n)}t.selection.prototype.attrs=i,t.selection.prototype.styles=u,t.selection.prototype.properties=a,n.transition.prototype.attrs=y,n.transition.prototype.styles=d});

// Underscore.js 1.5.2
// http://underscorejs.org
// (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &
// Editors
// Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
// # sourceMappingURL=underscore-min.map


/*----------  utility functions  ----------*/

function trace(s) {
	var t = typeof(s);
	// console.log('typeof: ' + typeof(s))
	if (t == 'object') {
		// var output =
		console.log(JSON.stringify(s, null, 4));
	// } else if (t == 'array') {
	// t.forEach(function(d, i) {

	// console.log(i, ' : ', d);
	// })
	} else {
		console.log(s);
	}
}

// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function rand(min, max, whole) {
    return void 0===whole||!1===whole?Math.random()*(max-min+1)+min:!isNaN(parseFloat(whole))&&0<=parseFloat(whole)&&20>=parseFloat(whole)?(Math.random()*(max-min+1)+min).toFixed(whole):Math.floor(Math.random()*(max-min+1))+min;
};



/*----------  color palettes  ----------*/





/*
 * Pym.js is library that resizes an iframe based on the width of the parent and
 * the resulting height of the child. Check out the docs at
 * http://blog.apps.npr.org/pym.js/ or the readme at README.md for usage.
 */

/* global module */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        window.pym = factory.call(this);
    }
})(function() {
    var MESSAGE_DELIMITER = 'xPYMx';

    var lib = {};

    /**
	 * Generic function for parsing URL params. Via
	 * http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
	 * 
	 * @method _getParameterByName
	 * @param {String}
	 *            name The name of the paramter to get from the URL.
	 */
    var _getParameterByName = function(name) {
        var regex = new RegExp("[\\?&]" + name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') + '=([^&#]*)');
        var results = regex.exec(location.search);

        if (results === null) {
            return '';
        }

        return decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    /**
	 * Check the message to make sure it comes from an acceptable xdomain.
	 * Defaults to '*' but can be overriden in config.
	 * 
	 * @method _isSafeMessage
	 * @param {Event}
	 *            e The message event.
	 * @param {Object}
	 *            settings Configuration.
	 */
    var _isSafeMessage = function(e, settings) {
        if (settings.xdomain !== '*') {
            // If origin doesn't match our xdomain, return.
            if (!e.origin.match(new RegExp(settings.xdomain + '$'))) { return; }
        }

        return true;
    };

    /**
	 * Construct a message to send between frames.
	 * 
	 * NB: We use string-building here because JSON message passing is not
	 * supported in all browsers.
	 * 
	 * @method _makeMessage
	 * @param {String}
	 *            id The unique id of the message recipient.
	 * @param {String}
	 *            messageType The type of message to send.
	 * @param {String}
	 *            message The message to send.
	 */
    var _makeMessage = function(id, messageType, message) {
        var bits = ['pym', id, messageType, message];

        return bits.join(MESSAGE_DELIMITER);
    };

    /**
	 * Construct a regex to validate and parse messages.
	 * 
	 * @method _makeMessageRegex
	 * @param {String}
	 *            id The unique id of the message recipient.
	 */
    var _makeMessageRegex = function(id) {
        var bits = ['pym', id, '(\\S+)', '(.+)'];

        return new RegExp('^' + bits.join(MESSAGE_DELIMITER) + '$');
    };

    /**
	 * Initialize Pym for elements on page that have data-pym attributes.
	 * 
	 * @method _autoInit
	 */
    var _autoInit = function() {
        var elements = document.querySelectorAll(
            '[data-pym-src]:not([data-pym-auto-initialized])'
        );

        var length = elements.length;

        for (var idx = 0; idx < length; ++idx) {
            var element = elements[idx];

            /*
			 * Mark automatically-initialized elements so they are not
			 * re-initialized if the user includes pym.js more than once in the
			 * same document.
			 */
            element.setAttribute('data-pym-auto-initialized', '');

            // Ensure elements have an id
            if (element.id === '') {
                element.id = 'pym-' + idx;
            }

            var src = element.getAttribute('data-pym-src');
            var xdomain = element.getAttribute('data-pym-xdomain');
            var config = {};

            if (xdomain) {
               config.xdomain = xdomain;
            }

            new lib.Parent(element.id, src, config);
        }
    };

    /**
	 * The Parent half of a response iframe.
	 * 
	 * @class Parent
	 * @param {String}
	 *            id The id of the div into which the iframe will be rendered.
	 * @param {String}
	 *            url The url of the iframe source.
	 * @param {Object}
	 *            config Configuration to override the default settings.
	 */
    lib.Parent = function(id, url, config) {
        this.id = id;
        this.url = url;
        this.el = document.getElementById(id);
        this.iframe = null;

        this.settings = {
            xdomain: '*'
        };

        this.messageRegex = _makeMessageRegex(this.id);
        this.messageHandlers = {};

        // ensure a config object
        config = (config || {});

        /**
		 * Construct the iframe.
		 * 
		 * @memberof Parent.prototype
		 * @method _constructIframe
		 */
        this._constructIframe = function() {
            // Calculate the width of this element.
            var width = this.el.offsetWidth.toString();

            // Create an iframe element attached to the document.
            this.iframe = document.createElement('iframe');

            // Save fragment id
            var hash = '';
            var hashIndex = this.url.indexOf('#');

            if (hashIndex > -1) {
                hash = this.url.substring(hashIndex, this.url.length);
                this.url = this.url.substring(0, hashIndex);
            }

            // If the URL contains querystring bits, use them.
            // Otherwise, just create a set of valid params.
            if (this.url.indexOf('?') < 0) {
                this.url += '?';
            } else {
                this.url += '&';
            }

            // Append the initial width as a querystring parameter, and the
			// fragment id
            this.iframe.src = this.url +
                'initialWidth=' + width +
                '&childId=' + this.id +
                '&parentUrl=' + encodeURIComponent(window.location.href) +
                hash;

            // Set some attributes to this proto-iframe.
            this.iframe.setAttribute('width', '100%');
            this.iframe.setAttribute('scrolling', 'no');
            this.iframe.setAttribute('marginheight', '0');
            this.iframe.setAttribute('frameborder', '0');

            // Append the iframe to our element.
            this.el.appendChild(this.iframe);

            // Add an event listener that will handle redrawing the child on
			// resize.
            window.addEventListener('resize', this._onResize);
        };

        /**
		 * Send width on resize.
		 * 
		 * @memberof Parent.prototype
		 * @method _onResize
		 */
        this._onResize = function() {
            // console.log('_onResize')
            this.sendWidth();
        }.bind(this);

        /**
		 * Fire all event handlers for a given message type.
		 * 
		 * @memberof Parent.prototype
		 * @method _fire
		 * @param {String}
		 *            messageType The type of message.
		 * @param {String}
		 *            message The message data.
		 */
        this._fire = function(messageType, message) {
            if (messageType in this.messageHandlers) {
                for (var i = 0; i < this.messageHandlers[messageType].length; i++) {
                   this.messageHandlers[messageType][i].call(this, message);
                }
            }
        };

        /**
		 * Remove this parent from the page and unbind it's event handlers.
		 * 
		 * @memberof Parent.prototype
		 * @method remove
		 */
        this.remove = function() {
            window.removeEventListener('message', this._processMessage);
            window.removeEventListener('resize', this._onResize);

            this.el.removeChild(this.iframe);
        };

        /**
		 * @callback Parent~onMessageCallback
		 * @param {String}
		 *            message The message data.
		 */

        /**
		 * Process a new message from the child.
		 * 
		 * @memberof Parent.prototype
		 * @method _processMessage
		 * @param {Event}
		 *            e A message event.
		 */
        this._processMessage = function(e) {
            // First, punt if this isn't from an acceptable xdomain.
            if (!_isSafeMessage(e, this.settings)) {
                return;
            }

            // Discard object messages, we only care about strings
            if (typeof e.data !== 'string') {
                return;
            }

            // Grab the message from the child and parse it.
            var match = e.data.match(this.messageRegex);

            // If there's no match or too many matches in the message, punt.
            if (!match || match.length !== 3) {
                return false;
            }

            var messageType = match[1];
            var message = match[2];

            this._fire(messageType, message);
        }.bind(this);

        /**
		 * Resize iframe in response to new height message from child.
		 * 
		 * @memberof Parent.prototype
		 * @method _onHeightMessage
		 * @param {String}
		 *            message The new height.
		 */
        this._onHeightMessage = function(message) {
            /*
			 * Handle parent height message from child.
			 */
            var height = parseInt(message);

            this.iframe.setAttribute('height', height + 'px');
        };

        /**
		 * Navigate parent to a new url.
		 * 
		 * @memberof Parent.prototype
		 * @method _onNavigateToMessage
		 * @param {String}
		 *            message The url to navigate to.
		 */
        this._onNavigateToMessage = function(message) {
            /*
			 * Handle parent scroll message from child.
			 */
             document.location.href = message;
        };

        /**
		 * Bind a callback to a given messageType from the child.
		 * 
		 * Reserved message names are: "height", "scrollTo" and "navigateTo".
		 * 
		 * @memberof Parent.prototype
		 * @method onMessage
		 * @param {String}
		 *            messageType The type of message being listened for.
		 * @param {Parent~onMessageCallback}
		 *            callback The callback to invoke when a message of the
		 *            given type is received.
		 */
        this.onMessage = function(messageType, callback) {
            if (!(messageType in this.messageHandlers)) {
                this.messageHandlers[messageType] = [];
            }

            this.messageHandlers[messageType].push(callback);
        };

        /**
		 * Send a message to the the child.
		 * 
		 * @memberof Parent.prototype
		 * @method sendMessage
		 * @param {String}
		 *            messageType The type of message to send.
		 * @param {String}
		 *            message The message data to send.
		 */
        this.sendMessage = function(messageType, message) {
            this.el.getElementsByTagName('iframe')[0].contentWindow.postMessage(_makeMessage(this.id, messageType, message), '*');
        };

        /**
		 * Transmit the current iframe width to the child.
		 * 
		 * You shouldn't need to call this directly.
		 * 
		 * @memberof Parent.prototype
		 * @method sendWidth
		 */
        this.sendWidth = function() {
            var width = this.el.offsetWidth.toString();
            // console.log('sendWidth ' + width)
            this.sendMessage('width', width);
        };

        // Add any overrides to settings coming from config.
        for (var key in config) {
            this.settings[key] = config[key];
        }

        // Bind required message handlers
        this.onMessage('height', this._onHeightMessage);
        this.onMessage('navigateTo', this._onNavigateToMessage);

        // Add a listener for processing messages from the child.
        window.addEventListener('message', this._processMessage, false);

        // Construct the iframe in the container element.
        this._constructIframe();

        return this;
    };

    /**
	 * The Child half of a responsive iframe.
	 * 
	 * @class Child
	 * @param {Object}
	 *            config Configuration to override the default settings.
	 */
    lib.Child = function(config) {
        this.parentWidth = null;
        this.id = null;
        this.parentUrl = null;

        this.settings = {
            renderCallback: null,
            xdomain: '*',
            polling: 0
        };

        this.messageRegex = null;
        this.messageHandlers = {};

        // Ensure a config object
        config = (config || {});

        /**
		 * Bind a callback to a given messageType from the child.
		 * 
		 * Reserved message names are: "width".
		 * 
		 * @memberof Child.prototype
		 * @method onMessage
		 * @param {String}
		 *            messageType The type of message being listened for.
		 * @param {Child~onMessageCallback}
		 *            callback The callback to invoke when a message of the
		 *            given type is received.
		 */
        this.onMessage = function(messageType, callback) {
            if (!(messageType in this.messageHandlers)) {
                this.messageHandlers[messageType] = [];
            }

            this.messageHandlers[messageType].push(callback);
        };

        /**
		 * @callback Child~onMessageCallback
		 * @param {String}
		 *            message The message data.
		 */

        /**
		 * Fire all event handlers for a given message type.
		 * 
		 * @memberof Parent.prototype
		 * @method _fire
		 * @param {String}
		 *            messageType The type of message.
		 * @param {String}
		 *            message The message data.
		 */
        this._fire = function(messageType, message) {
            /*
			 * Fire all event handlers for a given message type.
			 */
            if (messageType in this.messageHandlers) {
                for (var i = 0; i < this.messageHandlers[messageType].length; i++) {
                   this.messageHandlers[messageType][i].call(this, message);
                }
            }
        };

        /**
		 * Process a new message from the parent.
		 * 
		 * @memberof Child.prototype
		 * @method _processMessage
		 * @param {Event}
		 *            e A message event.
		 */
        this._processMessage = function(e) {
            /*
			 * Process a new message from parent frame.
			 */
            // First, punt if this isn't from an acceptable xdomain.
            if (!_isSafeMessage(e, this.settings)) {
                return;
            }

            // Discard object messages, we only care about strings
            if (typeof e.data !== 'string') {
                return;
            }

            // Get the message from the parent.
            var match = e.data.match(this.messageRegex);

            // If there's no match or it's a bad format, punt.
            if (!match || match.length !== 3) { return; }

            var messageType = match[1];
            var message = match[2];

            this._fire(messageType, message);
        }.bind(this);

        /**
		 * Resize iframe in response to new width message from parent.
		 * 
		 * @memberof Child.prototype
		 * @method _onWidthMessage
		 * @param {String}
		 *            message The new width.
		 */
        this._onWidthMessage = function(message) {
            /*
			 * Handle width message from the child.
			 */
            var width = parseInt(message);

            // Change the width if it's different.
            if (width !== this.parentWidth) {
                this.parentWidth = width;

                // Call the callback function if it exists.
                if (this.settings.renderCallback) {
                    this.settings.renderCallback(width);
                }

                // Send the height back to the parent.
                this.sendHeight();
            }
        };

        /**
		 * Send a message to the the Parent.
		 * 
		 * @memberof Child.prototype
		 * @method sendMessage
		 * @param {String}
		 *            messageType The type of message to send.
		 * @param {String}
		 *            message The message data to send.
		 */
        this.sendMessage = function(messageType, message) {
            /*
			 * Send a message to the parent.
			 */
            window.parent.postMessage(_makeMessage(this.id, messageType, message), '*');
        };

        /**
		 * Transmit the current iframe height to the parent.
		 * 
		 * Call this directly in cases where you manually alter the height of
		 * the iframe contents.
		 * 
		 * @memberof Child.prototype
		 * @method sendHeight
		 */
        this.sendHeight = function() {
            // Get the child's height.
            var height = document.getElementsByTagName('body')[0].offsetHeight.toString();
            var body = document.body,
              html = document.documentElement;

            var height = Math.max( body.scrollHeight, body.offsetHeight,
                      html.clientHeight, html.scrollHeight, html.offsetHeight );
            // Send the height to the parent.
            this.sendMessage('height', height);
        }.bind(this);

        /**
		 * Scroll parent to a given element id.
		 * 
		 * @memberof Child.prototype
		 * @method scrollParentTo
		 * @param {String}
		 *            hash The id of the element to scroll to.
		 */
        this.scrollParentTo = function(hash) {
            this.sendMessage('navigateTo', '#' + hash);
        };

        /**
		 * Navigate parent to a given url.
		 * 
		 * @memberof Parent.prototype
		 * @method navigateParentTo
		 * @param {String}
		 *            url The url to navigate to.
		 */
        this.navigateParentTo = function(url) {
            this.sendMessage('navigateTo', url);
        };

        // Identify what ID the parent knows this child as.
        this.id = _getParameterByName('childId') || config.id;
        this.messageRegex = new RegExp('^pym' + MESSAGE_DELIMITER + this.id + MESSAGE_DELIMITER + '(\\S+)' + MESSAGE_DELIMITER + '(.+)$');

        // Get the initial width from a URL parameter.
        var width = parseInt(_getParameterByName('initialWidth'));

        // Get the url of the parent frame
        this.parentUrl = _getParameterByName('parentUrl');

        // Bind the required message handlers
        this.onMessage('width', this._onWidthMessage);

        // Initialize settings with overrides.
        for (var key in config) {
            this.settings[key] = config[key];
        }

        // Set up a listener to handle any incoming messages.
        window.addEventListener('message', this._processMessage, false);

        // If there's a callback function, call it.
        if (this.settings.renderCallback) {
            this.settings.renderCallback(width);
        }

        // Send the initial height to the parent.
        this.sendHeight();

        // If we're configured to poll, create a setInterval to handle that.
        if (this.settings.polling) {
            window.setInterval(this.sendHeight, this.settings.polling);
        }

        return this;
    };

    // Initialize elements with pym data attributes
    _autoInit();

    return lib;
});


// @codekit-prepend "jquery-1.11.3.min.js", "d3.v4.min.js",
// "d3-selection-multi.v1.min.js", "underscore-min.js", "TRL_common.js",
// "pym.js"

// vars

var pymChild;

var staticImg = false


if (staticImg) $('.playPause, .trl_notes').hide()

var trLightBlue = '#0099c4',
	trLightGreen = '#77a22d'

var vis = {
	// naftaFile: 'data/nafta_agg_grouping_2709.csv',
	naftaFile: 'data/1988-2016_nafta_agg_grouping_2709.csv',
	dataObj: [],
	cols: {
		import: trLightGreen, // '#9ECE9F',
		export: trLightBlue, // '#9CBCD5',
		importExtra: trLightGreen, // '#D1E8D1',
		exportExtra: trLightBlue, // '#CEDEEA'
		solidImportExtra: '#bbd196'
	},
	FTAs: {
		'NAFTA': {
			firstDrawn: false,
			name: 'NAFTA',
			countries: ['USA', 'CAN', 'MEX'],
			countryNamesHash: { USA: 'United States', MEX: 'Mexico', CAN: 'Canada' },
			maxAmt: 0,
			// ,
			// minAmt: 10000000,
			// maxExportsIntra: 0, minExportsIntra: 10000000,
			years: d3.range(1990, 2017),
			data: [],
			currentYear: 1990,
			yearEnacted: 1994,
			currentCommodity: 'all'
		}
	},
	// timing for animation through years
	yearInterval: 0,
	yearTiming: 800,
	currentTooltip: null
};

var groupingsHash = {
	'all': 'all commodities',
	'01_05': 'animal products',
	'06_15': 'vegetable products',
	'16_24': 'prepared food',
	'25_26': 'mineral products',
	'2709': 'crude oil',
	'28_38': 'chemical products',
	'39_40': 'plastics and rubbers',
	'41_43': 'leather and furs',
	'44_49': 'wood products',
	'50_63': 'textiles',
	// '64_67': 'footwear and headgear',
	'68_71': 'stone and glass',
	'72_83': 'metals',
	'84_85': 'machinery',
	'87': 'automotive', 
	'88_89': 'aircraft and ships'
}

// var inflationAdjustment = [
// { "year": 1988, "coeff": 1.799430096 },
// { "year": 1989, "coeff": 1.799430096 },
// { "year": 1990, "coeff": 1.712416681 },
// { "year": 1991, "coeff": 1.632037229 },
// { "year": 1992, "coeff": 1.595853916 },
// { "year": 1993, "coeff": 1.558504162 },
// { "year": 1994, "coeff": 1.537041518 },
// { "year": 1995, "coeff": 1.499745482 },
// { "year": 1996, "coeff": 1.466731301 },
// { "year": 1997, "coeff": 1.438261587 },
// { "year": 1998, "coeff": 1.420167085 },
// { "year": 1999, "coeff": 1.39284729 },
// { "year": 2000, "coeff": 1.351647078 },
// { "year": 2001, "coeff": 1.316424231 },
// { "year": 2002, "coeff": 1.291596985 },
// { "year": 2003, "coeff": 1.259918488 },
// { "year": 2004, "coeff": 1.231986307 },
// { "year": 2005, "coeff": 1.198393545 },
// { "year": 2006, "coeff": 1.167865713 },
// { "year": 2007, "coeff": 1.139430894 },
// { "year": 2008, "coeff": 1.105120382 },
// { "year": 2009, "coeff": 1.105430341 },
// { "year": 2010, "coeff": 1.08686177 },
// { "year": 2011, "coeff": 1.054852397 },
// { "year": 2012, "coeff": 1.036277051 },
// { "year": 2013, "coeff": 1.023973373 },
// { "year": 2014, "coeff": 1.006219342 },
// { "year": 2015, "coeff": 1 },
// { "year": 2016, "coeff": 1 }
// ]
var inflationAdjustment = [{"year":1989,"coeff":1.936062113},
{"year":1990,"coeff":1.83690669},
{"year":1991,"coeff":1.76227498},
{"year":1992,"coeff":1.710467989},
{"year":1993,"coeff":1.661428324},
{"year":1994,"coeff":1.619208411},
{"year":1995,"coeff":1.575022422},
{"year":1996,"coeff":1.530170014},
{"year":1997,"coeff":1.495216488},
{"year":1998,"coeff":1.472361331},
{"year":1999,"coeff":1.44083546},
{"year":2000,"coeff":1.393769841},
{"year":2001,"coeff":1.355462161},
{"year":2002,"coeff":1.334299745},
{"year":2003,"coeff":1.30468222},
{"year":2004,"coeff":1.270663549},
{"year":2005,"coeff":1.228967783},
{"year":2006,"coeff":1.190560952},
{"year":2007,"coeff":1.157540124},
{"year":2008,"coeff":1.114743984},
{"year":2009,"coeff":1.118721557},
{"year":2010,"coeff":1.100670089},
{"year":2011,"coeff":1.066987},
{"year":2012,"coeff":1.045355078},
{"year":2013,"coeff":1.030263443},
{"year":2014,"coeff":1.013817069},
{"year":2015,"coeff":1.012615832},
{"year":2016,"coeff":1}]


// utils

// https://github.com/d3/d3/issues/2241

// adapt to do millions as 0.x B...
var formatNumber = d3.format(".0f"),
	formatDecimal = d3.format('.2f'),
	format4pt = d3.format('.5f')
	formatBillion = function(x) {
		return formatNumber(x / 1e9); }, // + "B"; },
	// formatMillion = function(x) { return formatNumber(x / 1e6) + "M"; },
	formatMillion = function(x) {
		return formatDecimal(x / 1e9); },
	formatThousand = function(x) {
		// return formatNumber(x / 1e3) + "k"; },
		// return format4pt(x / 1e9)
		return 0
		 },
	formatBillionForBarLabel = function(x) {
		return formatNumber(x / 1e9); }

function formatAbbreviation(x) {
	var v = Math.abs(x);
	return (v >= .9995e9 ? formatBillion : v >= .9995e6 ? formatMillion : formatThousand)(x);
}

function curvedHorizLine(x1, x2, y) {
	// from 10, 10 to 100, 10
	// return "M10 10 C 50 0, 50 0, 100 10
	var curveHeight = 0.2;
	var curveTension = 0.4;
	var length = x2 - x1;
	var anchor1 = length * curveTension,
		anchor2 = length * (1 - curveTension)
	var yAdj = length * -curveHeight;

	return 'M ' + x1 + ' ' + y + ' C ' + (x1 + anchor1) + ' ' + (y + yAdj) + ', ' + (x1 + anchor2) + ' ' + (y + yAdj) + ', ' + x2 + ' ' + y;
}

function getDistance(x1, y1, x2, y2) {
	// trace('getDistance (' + Math.round(x1) + ', ' + Math.round(y1) + ' to ' +
	// Math.round(x2) + ', ' + Math.round(y2))
	return Math.round(Math.sqrt((x1 -= x2) * x1 + (y1 -= y2) * y1));
}

function getAngle(x1, y1, x2, y2) {
	return Math.round(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI);
}

// render

vis.drawChart = function(fta) {
	// trace('draw ' + fta.name + ' : ' + fta.currentCommodity)

	var ftaData = fta.data.filter(function(d) {
		return d.grouping == fta.currentCommodity; })

	vis.ftaData = ftaData;

	// trace(ftaData)

	// keep track of the largest entry either exp or imp
	var maxExp = d3.max(ftaData, function(d) {
			return d.exports_total; }),
		maxImp = d3.max(ftaData, function(d) {
			return d.imports_total; })

	fta.maxAmt = d3.max([maxExp, maxImp])

	// for graph view, constrain to intra exports values
	fta.intraExportExtent = d3.extent(ftaData, function(d) {
		return d.exports_intra;
	})
	vis.intraExportExtent = fta.intraExportExtent

	// extent of country-to-country exports
	// nafta specific for now
	var flows = ['exports_USA', 'exports_CAN', 'exports_MEX']
	vis.maxToCountry = 0;
	flows.forEach(function(flow) {
		var max = d3.max(ftaData, function(d) {
			return d[flow]; })
		if (max > vis.maxToCountry) vis.maxToCountry = max;
	})

	// trace('intraExportExtent: ' +
	// formatAbbreviation(fta.intraExportExtent[0]) + ' to ' +
	// formatAbbreviation(fta.intraExportExtent[1]) )

	// div, scales, axes - set up globals for reuse in small multiples

	// arbitrary number of small mults
	var width = 800,
		height = 450,
		col1w = 320,
		col2w = 440,
		col3w = 200,
		// miniPadding = { top: 0, right: 0, bottom: 0, left: 0 },
		// plotWidth = width - padding.left - padding.right,
		// plotHeight = height - padding.top - padding.bottom,
		numSmallMultiples = fta.countries.length,
		// miniHeight = 250, //Math.floor(height / numSmallMultiples),
		// miniHeight = height / 3,
		miniHeight = 260,
		miniPadding = { top: 5, right: 35, bottom: 5, left: 38 },
		miniWidth = col1w - miniPadding.left - miniPadding.right,
		miniPlotHeight = miniHeight - miniPadding.top - miniPadding.bottom,
		miniPlotCenterY = miniPlotHeight / 2,
		miniPlotCenterMargin = 2,
		impExpHeight = miniPlotHeight / 2 - (miniPlotCenterMargin / 2),
		exportTop = miniPlotCenterY + (miniPlotCenterMargin / 2),
		importBottom = miniPlotCenterY - (miniPlotCenterMargin / 2);

	var currentYearHeight = 25;
	var availHeight = height - currentYearHeight;

	// get largest import and export for each country
	var maxes = []
	var grandTotal = 0;

	fta.countries.forEach(function(c) {
		var countryData = ftaData.filter(function(d) {
				return d.country == c; })
			// trace('countryData')
			// console.table(countryData)
		var item = {} // maxes.filter(function(d) { return d.name == c; })
			// console.log(item)
		item.import = d3.max(countryData, function(d) {
			return d.imports_total; })
		item.export = d3.max(countryData, function(d) {
			return d.exports_total; })
		item.total = item.import+item.export
		item.maxTrade = d3.max([item.import, item.export])
		item.name = c
		maxes.push(item)
		grandTotal += item.total
	})

	// list in order of size - first one biggest total
	maxes = _.sortBy(maxes, 'total').reverse()
	vis.maxes = maxes

	var percentages = [];
	maxes.forEach(function(d) {
		d.percent = (d.maxTrade * 2) / grandTotal;
	})

	var minisVPadding = 10
	var maxBarHeight = (maxes[0].percent * availHeight) / 2
	maxBarHeight -= 2 * minisVPadding

	// console.table(maxes)

	var minisBottom = availHeight; // 360; // TODO calc this accurately
	var miniSpacing = 30;
	var runningMiniY = currentYearHeight;

	/*----------  customize problematic plot layouts  ----------*/

	if (fta.currentCommodity == '16_24') {
		// foodstuffs
		impExpHeight *= 0.8
	} else if (fta.currentCommodity == '25_26') {
		// mineral products
		impExpHeight *= 0.6
	} else if (fta.currentCommodity == '39_40') {
		// plastics
		impExpHeight *= 0.7
	} else if (fta.currentCommodity == '44_49') {
		// wood
		impExpHeight *= 0.9
	} else if (fta.currentCommodity == '50_63') {
		// textiles
		miniSpacing = 50
	} else if (fta.currentCommodity == '64_67') {
		// footwear
		miniSpacing = 80
			// impExpHeight *= 1.1
	} else if (fta.currentCommodity == '2709') {
		runningMiniY += 40
		miniSpacing = 60
		impExpHeight *= 1.2
	} else if (fta.currentCommodity == '87') {
		// auto
		miniSpacing = 35
	}

	// trace('miniHeight ' + miniHeight)
	var scale = {
		x: d3.scaleBand()
			.domain(fta.years)
			.range([0, miniWidth]),
		y: d3.scaleLinear()
			.domain([0, fta.maxAmt])
			// .rangeRound([0, maxBarHeight] )
			.rangeRound([0, impExpHeight])
	}

	vis.scale = scale;



	/*----------  svg for all mini plots  ----------*/

	var col1 = d3.select('#trl_chart_' + fta.name + ' .col1');

	// remove old charts
	d3.select('#trl_chart_' + fta.name + ' .col1').selectAll('svg').remove()

	var minisSvg = col1
		.append('svg')
		.attrs({
			width: col1w,
			height: height
		});

	// patterns and gradients
	function createDefs() {

		var defs = minisSvg.append('defs');

		// world imports
		defs.append('pattern')
			.attr('id', 'export-stripe')
			.attr('width', 4)
			.attr('height', 4)
			.attr('patternUnits', 'userSpaceOnUse')
			.attr('patternTransform', 'rotate(45)')
			.append('rect')
			.attr('width', 3)
			.attr('height', 4)
			.attr('transform', 'translate(0,0)')
			.attr('fill', vis.cols.exportExtra)
			.attr('fill-opacity', 0.5)

		// world exports
		defs.append('pattern')
			.attr('id', 'import-stripe')
			.attr('width', 4)
			.attr('height', 4)
			.attr('patternUnits', 'userSpaceOnUse')
			.attr('patternTransform', 'rotate(45)')
			.append('rect')
			.attr('width', 3)
			.attr('height', 4)
			.attr('transform', 'translate(0,0)')
			.attr('fill', vis.cols.importExtra)
			.attr('fill-opacity', 0.5)

		var grad = defs.append('linearGradient')
			.attr('id', 'exp-imp-gradient')
			.attr('x1', '0%')
			.attr('x2', '100%')
			.attr('y1', '0%')
			.attr('y2', '0%')
			.attr('spreadMethod', 'pad')

		grad.append('stop')
			.attr('offset', '0%')
			.attr('stop-color', vis.cols.export);

		grad.append('stop')
			.attr('offset', '100%')
			.attr('stop-color', vis.cols.import);

		// from http://bl.ocks.org/tomgp/d59de83f771ca2b6f1d4
		// defs.append("marker")
		// .attrs({
		// "id": "arrow",
		// "viewBox": "0 -5 10 10",
		// "refX": -150,
		// "refY": 0,
		// "markerWidth": 4,
		// "markerHeight": 4,
		// "orient": "auto"
		// })
		// .append("path")
		// .attrs({
		// "d": "M0,-5L10,0L0,5",
		// "class": "arrowHead",
		// fill: '#fff',
		// 'fill-opacity': 0.5
		// })
	}

	createDefs();

	function createCol1Legend() {
		// var leg = col1.append('svg')
		// d3.select('.legendDiv svg').remove();

		var leg = d3.select('.legendDiv')
			.append('svg')
			.attrs({
				width: 400,
				height: 60,
				class: 'legendSVG'
			})

		var lineH = 13
		var lineMargin = 3;

		var types = [
			{ accessor: 'imports_world', display: 'imports outside NAFTA' },
			{ accessor: 'imports_fta', display: 'imports within NAFTA' },
			{ accessor: 'exports_fta', display: 'exports within NAFTA' },
			{ accessor: 'exports_world', display: 'exports outside NAFTA' }
		]

		var blocks = leg.selectAll('g.block')
			.data(types)
			.enter()
			.append('g')
			.attrs(function(d, i) {
				var xpos = 0,
					ypos = (i * (lineH + lineMargin))
				if (d.accessor == 'exports_fta' || d.accessor == 'exports_world') {
					xpos = 190
					ypos -= (lineH + lineMargin) * 2
				}
				return {
					transform: 'translate(' + xpos + ', ' + ypos + ')'

				}
			})

		blocks.append('rect')
			.attrs({
				width: 30,
				height: lineH,
				x: 0,
				y: 0,
				class: 'legendBlock',
				fill: function(d) {
					if (d.accessor == 'imports_world') {
						return 'url(#import-stripe)'
					} else if (d.accessor == 'imports_fta') {
						return vis.cols.import
					} else if (d.accessor == 'exports_fta') {
						return vis.cols.export
					} else {
						return 'url(#export-stripe)'
					}
				}
			})

		blocks.append('text')
			.text(function(d) {
				return d.display; })
			.attrs({
				class: 'blockText',
				x: 35,
				y: lineH / 2 + 3
			})
	}

	if (!fta.firstDrawn) createCol1Legend();

	var minisG = minisSvg.append('g')
		.attrs({
			class: 'minisG'
		})

	// label x range at top
	var yearBounds = [fta.years[0], fta.years[fta.years.length - 1]]; // [1989,
																		// 2015];


	// fta start line
	var ftaStart = minisSvg.append('g').attr('class', 'ftaStart')

	ftaStart.append('line')
		.attrs({
			class: 'ftaStartLine',
			x1: function(d) {
				return miniPadding.left + scale.x(fta.yearEnacted) + scale.x.bandwidth() / 2; },
			y1: 0,
			x2: function(d) {
				return miniPadding.left + scale.x(fta.yearEnacted) + scale.x.bandwidth() / 2; },
			y2: minisBottom
		})
	ftaStart.append('text')
		.text('FTA enacted ' + fta.yearEnacted)
		.attrs({
			x: miniPadding.left + scale.x(fta.yearEnacted) + 10,
			y: minisBottom,
			class: 'ftaStartLabel'
		})

	// current year marker line
	var currentYearMark;

	function drawCurrentYearMark() {
		currentYearMark = minisSvg.append('g')
			.attrs({
				class: 'currentYearMark',
				transform: 'translate(' + scale.x.bandwidth() / 2 + ',0)'
			})

		currentYearMark.append('line')
			.attrs({
				class: 'currentYearLine',
				x1: 0,
				y1: 0,
				x2: 0,
				y2: minisBottom - 15
			})

		currentYearMark.append('text')
			.text(fta.years[0])
			.attrs({
				class: 'currentYearLabel',
				x: 7,
				y: 12
			})
	}
	drawCurrentYearMark();




	/*----------  draw mini plot for each country  ----------*/


	fta.countries.forEach(function(c, i) {

		var countryData = ftaData.filter(function(d) {
				return d.country == c;
			})
			// trace(countryData[0])

		var maxExp = d3.max(countryData, function(d) {
			return d.exports_total; })
		var maxImp = d3.max(countryData, function(d) {
			return d.imports_total; })

		var maxTrade = d3.max([maxImp, maxExp]);
		// trace('maxTrade ' + maxTrade)
		var thisMiniHeight = scale.y(maxExp) + miniPlotCenterMargin + scale.y(maxImp) + miniPadding.top + miniPadding.bottom;

		// trace('maxTrade: ' + maxTrade)
		// trace('thisMiniHeight ' + thisMiniHeight)

		// var miniY = runningMiniHeight + thisMiniHeight;

		// label fta.countryNamesHash[c]

		var g = minisG.append('g')
			.attrs({
				class: 'barset ' + c,
				width: miniWidth,
				height: thisMiniHeight,
				transform: 'translate(' + miniPadding.left + ',' + runningMiniY + ')'
			})

		// runningMiniY += thisMiniHeight;

		// close but not quite
		runningMiniY += scale.y(maxExp) + miniPadding.bottom + miniPlotCenterMargin + miniPadding.top + miniSpacing

		// var max = maxes.filter(function(d) { return d.name == c; })[0]
		// // runningMiniY += (max.percent * availHeight)
		// trace('runningY = ' + runningMiniY + ' + ' + thisMiniHeight + ' = ' +
		// (runningMiniY + thisMiniHeight) )
		// runningMiniY += thisMiniHeight

		// runningMiniY +=

		g.append('g')
			.attrs({
				class: 'miniCountryLabelG',
				transform: 'translate(-15,' + miniPlotCenterY + ') rotate(-90)'
			})
			.append('text')
			.text(fta.countryNamesHash[c])
			.attrs({
				class: 'miniCountryLabel'
			})

		// var dur = 1200
		// var delay = 150

		dur = 600
		delay = 30
			// plot each imp / exp
		g.selectAll('rect.totalExport')
			.data(countryData)
			.enter()
			.append('rect')
			.attrs(function(d) {
				return {
					class: 'bar totalExport year_' + d.year,
					x: scale.x(d.year),
					y: exportTop,
					width: scale.x.bandwidth(),
					// height: scale.y(d.exports_total),
					height: 0,
					fill: 'url(#export-stripe)'
				}
			})
			.transition()
			.duration(dur)
			.delay(function(d, i) {
				return i * delay; })
			.attr('height', function(d) {
				return scale.y(d.exports_total); })

		g.selectAll('rect.ftaExport')
			.data(countryData)
			.enter()
			.append('rect')
			.attrs(function(d) {
				return {
					class: 'bar ftaExport year_' + d.year,
					x: scale.x(d.year),
					y: exportTop,
					width: scale.x.bandwidth(),
					// height: scale.y(d.exports_intra),
					height: 0,
					fill: vis.cols.export
				}
			})
			// ypos = exportTop + scale.y(trade);
			.transition()
			.duration(dur)
			.delay(function(d, i) {
				return i * delay; })
			.attr('height', function(d) {
				return scale.y(d.exports_intra); })

		g.selectAll('rect.totalImport')
			.data(countryData)
			.enter()
			.append('rect')
			.attrs(function(d) {
				// if (d.year == 2008 && d.country == 'USA') {
				// trace('USA 2008 total import: ' + d.imports_total)
				// trace('scale = ' + scale.y(d.imports_total))
				// }
				return {
					class: 'bar totalImport year_' + d.year,
					x: scale.x(d.year),
					// y: importBottom - scale.y(d.imports_total),
					y: importBottom,
					width: scale.x.bandwidth(),
					// height: scale.y(d.imports_total),
					height: 0,
					fill: 'url(#import-stripe)'
				}
			})
			.transition()
			.duration(dur)
			.delay(function(d, i) {
				return i * delay; })
			.attrs(function(d) {
				return {
					height: scale.y(d.imports_total),
					y: importBottom - scale.y(d.imports_total)
				}
			})


		g.selectAll('rect.ftaImport')
			.data(countryData)
			.enter()
			.append('rect')
			.attrs(function(d) {
				return {
					class: 'bar ftaImport year_' + d.year,
					x: scale.x(d.year),
					y: importBottom, // - scale.y(d.imports_intra),
					width: scale.x.bandwidth(),
					height: 0, // scale.y(d.imports_intra),
					fill: vis.cols.import
				}
			})
			.transition()
			.duration(dur)
			.delay(function(d, i) {
				return i * delay; })
			.attrs(function(d) {
				return {
					height: scale.y(d.imports_intra),
					y: importBottom - scale.y(d.imports_intra)
				}
			})

		// plot imp / exp hilight bars

		g.selectAll('rect.importHilight')
			.data(countryData)
			.enter()
			.append('rect')
			.attrs(function(d) {
				return {
					class: 'bar hilight year_' + d.year,
					x: scale.x(d.year),
					y: importBottom - scale.y(d.imports_total),
					width: scale.x.bandwidth(),
					height: scale.y(d.imports_total)
				}
			})

		g.selectAll('rect.exportHilight')
			.data(countryData)
			.enter()
			.append('rect')
			.attrs(function(d) {
				return {
					class: 'bar hilight year_' + d.year,
					x: scale.x(d.year),
					y: exportTop,
					width: scale.x.bandwidth(),
					height: scale.y(d.exports_total)
				}
			})

		// lables for you are here bars
		var labelData = ['imports_intra', 'imports_total', 'exports_intra', 'exports_total'];
		var labelW = 34,
			labelH = 16

		var labelG = g.selectAll('g.barLabelGroup')
			.data(labelData)
			.enter()
			.append('g')
			.attrs({
				class: function(d) {
					return 'barLabelGroup from_' + c + ' ' + d; }
			})

		labelG.append('rect')
			.attrs(function(d) {
				return {
					class: 'labelRect ' + d,
					x: -labelW / 2,
					y: -labelH / 2,
					width: labelW,
					height: labelH,
					rx: 5,
					ry: 5
				}
			})
		labelG.append('text')
			// .text(function(d) { return d; })
			.attrs({
				class: function(d) {
					return 'labelText ' + d; },
				y: 4
			})


	});


	function setCurrentYear(d) {

		// only set if !currentYear already
		// if (d.year == fta.currentYear) return;

		fta.currentYear = d.year;

		d3.select('.timelineText').classed('current', function(tld) {
			return tld.year == fta.currentYear ? true : false;
		})

		d3.select('.timelineMarker .markerTxt').text(d.year)

		if (!timelineDragging) {
			d3.select('.timelineMarker')
				.transition()
				.duration(200)
				.attrs({
					transform: 'translate(' + tlScale(d.year) + ',' + markerBlockH / 2 + ')'
				})
		}

		var ct = vis.currentTooltip
		if (ct != null) {
			if (ct.type == 'hex') {
				updateTooltipHex(ct.country)
			} else {
				updateTooltip(ct.from, ct.to)
			}
		}

		// trace('set ' + d.year)

		// move current year mark and update year
		// trace('move year mark to ' + d.year + ' : ' + (miniPadding.left +
		// scale.x(d.year) + scale.x.bandwidth() / 2))
		d3.select('.currentYearMark')
			.attr('transform', 'translate(' + (miniPadding.left + scale.x(d.year) + scale.x.bandwidth() / 2) + ',0)')

		var cyx = 7;
		if (d.year > 2011) cyx = -44;
		d3.select('.currentYearLabel')
			.text(d.year)
			.attr('x', cyx)

		d3.select('.graphYear')
			.text(d.year)

		// hilight correct bars
		d3.selectAll('.bar.hilight').classed('current', function(hilight) {
			return hilight.year == d.year ? true : false
		})

		// update labels and adjust positions
		fta.countries.forEach(function(fromCountry) {

			var yearData = vis.ftaData.filter(function(yearData) {
				return fta.currentYear == yearData.year 
					// already filtered at the top of drawChart()
					// && fta.currentCommodity == yearData.grouping
					&& fromCountry == yearData.country;
			})[0]

			var labelData = ['imports_intra', 'imports_total', 'exports_intra', 'exports_total'];

			labelData.forEach(function(label) {
				var trade = yearData[label];

				var labelW = 34,
					labelH = 16

				var xOffset = 12 + labelW / 2;

				var minExpY = exportTop + labelH / 2,
					maxImpY = importBottom - labelH / 2;
				// var yOffset = exportTop// - labelH / 2;

				// move exports to left of year line
				if (label == 'imports_total' || label == 'exports_total') xOffset = -20;

				var xpos = xOffset + scale.x(d.year),
					ypos = exportTop + scale.y(trade);

				// only applies to exports
				if (ypos < minExpY) ypos = minExpY

				// if (fromCountry == 'USA') {
				// trace('USA ' + label + ' : ' + trade + ' / ' +
				// formatAbbreviation(trade) + ' (' + trade + ')' )
				// trace('scale.y(' + trade + ') ' + scale.y(trade))
				// }

				// calc y for imports differently
				if (label == 'imports_total' || label == 'imports_intra') {
					// yOffset = 0;

					ypos = importBottom - scale.y(trade)

					// override min for imports
					if (ypos > maxImpY) ypos = maxImpY
				}

				var tradeG = d3.select('.barLabelGroup.from_' + fromCountry + '.' + label)
					.transition().duration(100)
					.attr('transform', 'translate(' + xpos + ',' + ypos + ')')

				if (label == 'imports_total') trade = yearData.imports_world;
				if (label == 'exports_total') trade = yearData.exports_world;
				tradeG.select('.labelText')
					// .text(formatBillionForBarLabel(trade))
					.text(formatAbbreviation(trade))
			})

		})

		// update network view below
		updateGraphView(d.year);
	}

	/*----------  master timeline  ----------*/

	var timelineDragging = false;

	var tlH = 40,
		tlW = 320,
		// tlPadding = { top: 10, bottom: 10, left: 38, right: 35 },
		tlPadding = { top: 10, bottom: 10, left: 40, right: 40 },
		tlPlotW = tlW - tlPadding.left - tlPadding.right,
		tlPlotH = tlH - tlPadding.top - tlPadding.bottom

	var markerBlockW = 44,
		markerBlockH = 24

	var tlScale = d3.scaleLinear()
		// .domain(fta.years)
		.domain([1990, 2016])
		.range([0, tlPlotW])

	function drawTimeline() {


		var timelineSvg = d3.select('#trl_chart_NAFTA .timeline .svgTimeline')
			.append('svg')
			.attrs({
				height: 40,
				width: 760
			})
			.append('g')
			.attr('transform', 'translate(' + tlPadding.left + ',' + tlPadding.top + ')')


		// vis.tlScale = tlScale


		var axis = timelineSvg.append('g')
			.attr('class', 'timelineAxis')
			.call(d3.axisTop(tlScale)
				.ticks(12)
			)

		timelineSvg.selectAll('text.timelineText')
			.data(fta.years)
			.enter()
			.append('text')
			.text(function(d) {
				if (d == 1990 || d == 1995 || d == 2000 || d == 2005 || d == 2010 || d == 2016) {
					return d;
				}
			})

		.attrs(function(d) {
				return {
					x: tlScale(d),
					y: 15,
					class: 'timelineText'
				}
			})



		var marker = timelineSvg.append('g')
			.attr('class', 'timelineMarker')
			.attr('transform', 'translate(' + tlScale(1990) + ',' + markerBlockH / 2 + ')')

		marker.append('rect')
			.attrs({
				width: markerBlockW,
				height: markerBlockH,
				x: -markerBlockW / 2,
				y: -markerBlockH / 2,
				class: 'markerBG'
			})
		marker.append('text')
			.text(1990)
			.attrs({
				class: 'markerTxt',
				x: 0,
				y: 4
			})

		var notch = d3.symbol()
			.type(d3.symbolTriangle)
			.size(150)

		var notchG = marker.append('g')
			.attrs({ 'transform': 'translate(0,' + -markerBlockH / 2 + ')' })
			.lower()
		notchG.append('path')
			.attrs({
				class: 'markerNotch',
				d: notch
			})

		// drag action for marker
		function checkTimelineUpdate() {
			// trace(d)
			var xpos = d3.event.x
			if (xpos < tlScale(1990)) {
				xpos = tlScale(1990)
			} else if (xpos > tlScale(2016)) {
				xpos = tlScale(2016);
			}
			marker.attrs({
				transform: 'translate(' + xpos + ',' + markerBlockH / 2 + ')'
			})

			// snap to closest year
			var year = Math.round(tlScale.invert(xpos))

			// update if different
			if (year != fta.currentYear) setCurrentYear({ year: year })
		}

		function dragStart() {
			// trace('start')
			timelineDragging = true;
			pauseTimelinePlay()
		}

		function dragEnd() {
			var xpos = d3.event.x
			if (xpos < tlScale(1990)) {
				xpos = tlScale(1990)
			} else if (xpos > tlScale(2016)) {
				xpos = tlScale(2016);
			}

			var year = Math.round(tlScale.invert(xpos))

			marker.attrs({
				transform: 'translate(' + tlScale(year) + ',' + markerBlockH / 2 + ')'
			})
			timelineDragging = false;
		}

		var drag = d3.drag()
			.on('start', dragStart)
			.on('drag', checkTimelineUpdate)
			.on('end', dragEnd)
			// .on('end', checkDragEnd)

		marker.call(drag)
	}

	if (!fta.firstDrawn) {
		drawTimeline();
		$('.timeline .playPause .play').on('click', startTimelinePlay)
		$('.timeline .playPause .pause').on('click', pauseTimelinePlay)

	}

	function startTimelinePlay() {
		d3.select('.playPause .play').style('display', 'none')
		d3.select('.playPause .pause').style('display', 'block')
		if (vis.FTAs.NAFTA.currentYear == 2015) vis.FTAs.NAFTA.currentYear = 1989;
		// trace('playpause says start')
		startTour();
	}

	function pauseTimelinePlay() {
		// trace('pause it')
		d3.select('.playPause .play').style('display', 'block')
		d3.select('.playPause .pause').style('display', 'none')
		endTour();
	}

	/*----------  draw network-ish graph  ----------*/

	var tooltip = d3.select('.trl_tooltip');

	// assume equal W and H
	var graphWidth = graphHeight = col2w,
		graphPadding = 20,
		graphPlotWidth = graphWidth - (graphPadding * 2),
		graphCenter = graphPlotWidth / 2,
		graphRadius = graphCenter * 0.7,
		maxNodeRadius = 70,
		minNodeRadius = 20

	// var svg = d3.select('.ftaGraph.' + fta.name)
	

	// put all in a scale obj?
	var circleScale = d3.scaleSqrt()
		.domain(fta.intraExportExtent)
		.range([minNodeRadius, maxNodeRadius])

	var hexScale = d3.scaleSqrt()
		.domain(vis.intraExportExtent)
		.range([0.3, 2.1])
		// .clamp(true)


	var lineStrokeScale = d3.scaleLinear()
		// .domain(fta.intraExportExtent)
		.domain([0, vis.maxToCountry])
		.range([0, 65])
		.clamp(true) // clamp not working


	function drawGraphView() {
		var svg = d3.select('#trl_chart_' + fta.name + ' .col2')
			.append('svg')
			.attrs({
				width: graphWidth,
				height: graphHeight
			})
			.on('mousemove touchstart touchmove', function(d) {
				var m = d3.mouse(this)
				var top = (m[1] + 120) + 'px',
					left = col1w + (m[0] - 80) + 'px'

				if (staticImg) {
					top = '510px'
					left = '445px'
				}
				$('.trl_tooltip').css({
					top: top,
					left: left
				})
			})

		var graphDefs = svg.append('defs')
		var g = svg.append('g')
			.attrs({
				width: graphPlotWidth,
				height: graphPlotWidth,
				transform: 'translate(' + graphPadding + ',' + graphPadding + ')'
			})


		var linesG = g.append('g').attr('class', 'linesGroup')
		var circsG = g.append('g').attr('class', 'circlesGroup')

		// first plot countries
		var count = 0;
		var numCountries = fta.countries.length;
		var twoPI = 2 * Math.PI;

		vis.countryPoints = [];

		var graphYearW = 38,
			graphYearH = 18
		g.append('rect')
			.attrs({
				class: 'graphYearBg',
				x: graphCenter - graphYearW / 2,
				y: graphCenter - graphYearH / 2,
				width: graphYearW,
				height: graphYearH,
				rx: 5,
				ry: 5
			})
		g.append('text')
			.attrs({
				class: 'graphYear',
				x: graphCenter,
				y: graphCenter + 5
			})


		// first get coords for each country
		fta.countries.forEach(function(c) {

			var r = graphRadius;
			// r = rand(graphRadius/2, graphRadius)
			var xpos = graphCenter + (r * Math.cos(twoPI * count / numCountries))
			var ypos = graphCenter + (r * Math.sin(twoPI * count / numCountries))

			vis.countryPoints.push({
				name: c,
				x: xpos,
				y: ypos
			})

			count++
		});

		// now get distances and angles between each
		fta.countries.forEach(function(fromCountry) {

			var fromCountryData = vis.countryPoints.filter(function(d) {
				return d.name == fromCountry; })[0]

			vis.countryPoints.forEach(function(toCountryData) {
				if (fromCountry == toCountryData.name) return;

				var dist = getDistance(fromCountryData.x, fromCountryData.y, toCountryData.x, toCountryData.y)
				var angle = getAngle(fromCountryData.x, fromCountryData.y, toCountryData.x, toCountryData.y)

				fromCountryData['dist_to_' + toCountryData.name] = dist;
				fromCountryData['angle_to_' + toCountryData.name] = angle;

			})

		});

		// create hexes for countries and export lines out from each
		vis.countryPoints.forEach(function(d) {

			// hex is 72 x 76
			circsG.append('g')
				.attrs({
					class: 'hexG ' + d.name,
					transform: 'translate(' + d.x + ',' + d.y + ') scale(0.1)'
				})
				.datum({ x: d.x, y: d.y, country: d.name })
				.append('use')
				.attrs({
					class: 'hexUse',
					'xlink:href': '#svgHex',
					id: 'hex_from_' + d.name,
					x: -36,
					y: -38
				})
				.on('mouseover touchmove', showTooltipHex)
				.on('mouseout touchend', hideTooltip)

			circsG.append('text')
				.text(d.name)
				.attrs({
					class: 'countryLabel',
					x: d.x,
					y: d.y + 5
				})

			// draw lines to each to country

			// group to hold this set of lines
			var thisCountryLineG = linesG.append('g')
				.attrs({
					class: d.name + '_lines',
					transform: 'translate(' + d.x + ',' + d.y + ')'
				})

			fta.countries.forEach(function(c) {
				var toCountryData = vis.countryPoints.filter(function(dd) {
					return dd.name == c; })[0]

				if (toCountryData.name == d.name) return;

				var dist = d['dist_to_' + c];

				thisCountryLineG.append('path')
					.attrs({
						class: 'connectorHilight from_' + d.name + '_to_' + toCountryData.name,
						d: curvedHorizLine(0, d['dist_to_' + toCountryData.name], 0),
						// stroke: 'url(#exp-imp-gradient)',
						transform: 'rotate(' + d['angle_to_' + toCountryData.name] + ')'
					})

				thisCountryLineG.append('path')
					.attrs({
						class: 'minWidth from_' + d.name + '_to_' + toCountryData.name,
						d: curvedHorizLine(0, d['dist_to_' + toCountryData.name], 0),
						// stroke: 'url(#exp-imp-gradient)',
						transform: 'rotate(' + d['angle_to_' + toCountryData.name] + ')'
					})
					.datum({
						from: d.name,
						to: toCountryData.name
					})
					.on('mouseover touchmove', showTooltip)
					.on('mouseout touchend', hideTooltip)

				thisCountryLineG.append('path')
					.attrs({
						class: 'connector base from_' + d.name + '_to_' + toCountryData.name,
						d: curvedHorizLine(0, d['dist_to_' + toCountryData.name], 0),
						stroke: 'url(#exp-imp-gradient)',
						transform: 'rotate(' + d['angle_to_' + toCountryData.name] + ')'
					})
					.datum({
						from: d.name,
						to: toCountryData.name
					})
					.on('mouseover touchmove', showTooltip)
					.on('mouseout touchend', hideTooltip)

				// thisCountryLineG.append('path')
				// .attrs({
				// class: 'arrowLine from_' + d.name + '_to_' +
				// toCountryData.name,
				// d: curvedHorizLine(0, d['dist_to_' + toCountryData.name] - 0,
				// 0),
				// 'marker-end': 'url(#arrow)',
				// transform: 'rotate(' + d['angle_to_' + toCountryData.name] +
				// ')'
				// })

				// mask for particles
				var mask = graphDefs.append('mask')
					.attrs({
						id: 'mask_from_' + d.name + '_to_' + toCountryData.name,
						maskUnits: 'userSpaceOnUse'
					})
					.append('path')
					.attrs({
						id: 'maskPath_from_' + d.name + '_to_' + toCountryData.name,
						d: curvedHorizLine(0, d['dist_to_' + toCountryData.name], 0),
						stroke: '#fff',
						fill: 'none',
						'stroke-width': 1
					})


				var particleG = thisCountryLineG.append('g')
					.attrs({
						class: 'particleHolder'
							// ,
							// width: dist,
							// height: 70,
							,
						transform: 'rotate(' + d['angle_to_' + toCountryData.name] + ')',
						mask: 'url(#mask_from_' + d.name + '_to_' + toCountryData.name
					})
					.datum({ lineLength: dist, clipID: 'clip_from_' + d.name + '_to_' + toCountryData.name })

			})

		})


	}




	function curvedHorizLine2(x1, x2, y1, y2) {
		// from 10, 10 to 100, 10
		// return "M10 10 C 50 0, 50 0, 100 10
		var curveHeight = 0.2;
		var curveTension = 0.3;
		var length = x2 - x1;
		var anchor1 = length * curveTension,
			anchor2 = length * (1 - curveTension)
		var yAdj = length * -curveHeight;

		return 'M ' + x1 + ' ' + y1 + ' C ' + (x1 + anchor1) + ' ' + (y1 + yAdj) + ', ' + (x1 + anchor2) + ' ' + (y2 + yAdj) + ', ' + x2 + ' ' + y2;
	}

	// this is a mess, vars are being referenced out of order
	var lineAnchorY = 0,
		lineVariance = 30,
		lineLength = 250,
		lineStartX = 0,
		numParticles = 8,
		particleTiming = [900, 3000],
		particleSize = [1, 5]

	function randomLineVariant(length) {
		// trace(length)
		var lineVariance = 30
		var length = 242
		var y1 = rand(-lineVariance, lineVariance)
		var y2 = rand(-lineVariance, lineVariance)
		return curvedHorizLine2(0, length, y1, y2)
	}

	var particlePaths = [];
	var particleTimer;
	var numPaths = 8;
	var numParticles = 12;
	var particles = [];
	var numPathSamples = 200;

	function getRandomPath() {
		return rand(0, numPaths - 1, true)
			// return 0
	}

	function getRandomLongevity() {
		return rand(250, 450, true)
	}

	function getRandomRadius() {
		return rand(1, 6)
	}

	function computeParticlePaths() {

		var svg = d3.select('.trl_chart svg')
		var g = d3.select('.particleHolder')

		for (var i = 0; i < numPaths; i++) {
			var p = g.append('path')
				.attrs({
					class: 'testFlowLine',
					d: randomLineVariant()
				})

			var pathPoints = [];
			var path = p.node();
			var length = path.getTotalLength();
			var sliceSize = length / numPathSamples;
			// trace('sliceSize ' + sliceSize)
			// trace(i + ' : ' + length)
			// console.log(pt.x)
			// get points along each path
			for (var j = 0; j < numPathSamples; j++) {
				var atLength = j * sliceSize;
				var pt = path.getPointAtLength(atLength)
				pathPoints.push({ x: pt.x, y: pt.y })
			}
			particlePaths.push(pathPoints);
		}


	}

	function generateParticles() {

		var pData = [];
		for (var i = 0; i < numParticles; i++) {
			pData.push({
				r: getRandomRadius(),
				currentPath: getRandomPath(),
				longevity: getRandomLongevity(), // 200, //rand(1, 4)
				life: 0,
				id: i,
				delay: rand(0, 150, true)
			})
		}

		var holder = d3.selectAll('.particleHolder')
			.selectAll('circle')
			.data(pData)
			.enter()
			.append('circle')
			.attrs(function(d) {
				return {
					class: 'testCirc',
					r: d.r

				}
			})

		d3.selectAll('.particleHolder .testCirc').each(function(d) {
			particles.push(d3.select(this));
		})


		// particleTimer = d3.timer(particleTick, 600)
		particleTimer = setInterval(particleTick, 50)
	}

	var myDate = new Date();
	var startTime = myDate.getTime()
	var limit = 30000

	vis.particles = particles

	function particleTick(elapsed, time) {

		particles.forEach(function(d, i) {
			// advance this circle along its currentPath
			var datum = d.datum()

			// console.log('circ ' + 1, (datum) )
			if (datum.life++ >= datum.longevity) {
				datum.life = 0;
				datum.currentPath = getRandomPath()
			}
			if (datum.delay > 0) {
				datum.delay--
					return;
			}
			var path = particlePaths[datum.currentPath]
			var pct = datum.life / datum.longevity
			var pointOnPath = Math.floor(pct * (numPathSamples - 1))
			var pt = path[pointOnPath]
			if (pt == undefined) {
				// console.log('pointOnPath ' + pointOnPath, path )
			} else {
				d.attrs({
					cx: pt.x,
					cy: pt.y
				})
			}
		})
	}

	if (!fta.firstDrawn) {
		fta.firstDrawn = true;
		drawGraphView()
		computeParticlePaths();
		generateParticles();
	}

	function showTooltip(flowLine) {
		vis.currentTooltip = { type: 'fromto', from: flowLine.from, to: flowLine.to }
		updateTooltip(flowLine.from, flowLine.to);

		tooltip
			.style('opacity', 1)
	}


	function getData (year, commod, from, to) {
		var data = vis.FTAs.NAFTA.data.filter(function(d) { 
			return d.year == year && d.grouping == commod && d.country == from; 
		})

		var trade = data[0]['exports_' + to];
		// trace(trade)
		return trade;
	}

	function updateTooltip(from, to) {

		var fromName = fta.countryNamesHash[from]
		var toName = fta.countryNamesHash[to]

		// var data = ftaData.filter(function(d) {
		// return d.year == fta.currentYear && String(d.grouping) ==
		// fta.currentCommodity; })
		
		// trace('update tt for ' + fta.currentYear + ', ' +
		// fta.currentCommodity + ', ' + from + ', ' + to)
		// vis.ttData = data;

		// trace('looking for from ' + from)
		// var trade = data.filter(function(d) { return d.country == from; })

		// trace(trade)
		var trade = getData(fta.currentYear, fta.currentCommodity, from, to)
			// amt = data[0]['exports_' + to]
		// var amt = formatAbbreviation(trade[0]['exports_' + to]);
		var amt = formatAbbreviation(trade)

		var txt = 'In ' + fta.currentYear + ' ' + fromName + ' exported ' + '<strong>$' + amt + ' billion</strong> of ' + groupingsHash[fta.currentCommodity] + ' to ' + toName

		tooltip.html(txt);

		d3.select('.connectorHilight.from_' + from + '_to_' + to)
			.classed('current', true)

	}

	function showTooltipHex(hex) {
		vis.currentTooltip = { type: 'hex', country: hex.country }
		updateTooltipHex(hex.country)

		d3.select('#hex_from_' + hex.country).classed('current', true)

		tooltip
			.style('opacity', 1)
	}

	function updateTooltipHex(hexCountry) {
		// trace('update tt hex : ' + fta.currentCommodity)
		var countryData = vis.ftaData.filter(function(d) {
				return d.country == hexCountry && d.year == fta.currentYear })[0]
			// trace(countryData)
		var fromCountryName = fta.countryNamesHash[hexCountry];
		var commodName = groupingsHash[fta.currentCommodity]
		var count = 1;
		var txt = 'In ' + fta.currentYear + ' ' + fromCountryName + ' exported '
		fta.countries.forEach(function(c) {
			if (c == hexCountry) return;
			txt += '<strong>$' + formatAbbreviation(countryData['exports_' + c]) + ' billion</strong> of ' + commodName + ' to ' + fta.countryNamesHash[c]
			if (count < 2) txt += ' and '

			count++
		})

		tooltip.html(txt)
	}

	function hideTooltip() {
		vis.currentTooltip = null;
		if (!staticImg) tooltip.style('opacity', 0)

		d3.selectAll('.hexUse, .connectorHilight').classed('current', false)
	}


	function updateGraphView(year) {
		// year passed in

		// dispYear.html(year)

		var timingDur = 300;

		// vis.ftaData instead of ftaData makes graph lines shrink while
		// dragging?
		var data = vis.ftaData.filter(function(d) {
		// var data = ftaData.filter(function(d) {
			return d.year == year;
		})

		vis.testData = vis.ftaData
		// trace('updateGraphView(' + year + ') : ' + vis.maxToCountry)

		// keep updated when we switch commods
		lineStrokeScale.domain([0, vis.maxToCountry])
		hexScale.domain(vis.intraExportExtent)

		// trace('graph update...')
		// trace(data)
		// var debug = $('.debug')
		// debug.html('')
		// var debugTxt = '';

		data.forEach(function(d) {
			// one year, x number of countries
			var fromCountry = d.country;

			d3.select('.circ.' + fromCountry)
				.transition().duration(timingDur)
				.attr('r', circleScale(d.exports_intra))

			d3.select('.hexG.' + fromCountry)
				.transition().duration(timingDur)
				.attrs(function(hexD) {
					return {
						transform: 'translate(' + hexD.x + ',' + hexD.y + ') scale(' + hexScale(d.exports_intra) + ')',
					}
				})


			fta.countries.forEach(function(targetCountry) {
				// use world as target instead of self
				// trace('scale line to ' + targetCountry)
				if (targetCountry == fromCountry) return // targetCountry =
															// 'world'
					// just exports for now
				var tradeAmt = d['exports_' + targetCountry];

				// debugTxt += fromCountry + ' to ' + targetCountry + ' : $' +
				// formatAbbreviation(tradeAmt) + ' (' +
				// groupingsHash[d.grouping] + ')</br>'
					// trace(lineStrokeScale(tradeAmt))
					// trace('select .connector.from_' + fromCountry + '_to_' +
					// targetCountry)
				d3.selectAll('.connector.from_' + fromCountry + '_to_' + targetCountry + ',' +
						'#maskPath_from_' + fromCountry + '_to_' + targetCountry)
					.transition().duration(timingDur * 2)
					.style('stroke-width', lineStrokeScale(tradeAmt) + 'px')

				d3.select('.connectorHilight.from_' + fromCountry + '_to_' + targetCountry)
					.transition().duration(timingDur * 2)
					.style('stroke-width', (lineStrokeScale(tradeAmt) + 8) + 'px')

				var hidePaths = d3.selectAll('.minWidth.from_' + fromCountry + '_to_' + targetCountry 
					+ ', .connectorHilight.from_' + fromCountry + '_to_' + targetCountry
					+ ', .connector.base.from_' + fromCountry + '_to_' + targetCountry
					)
				// should do this as a ternary
				if (formatAbbreviation(tradeAmt) == 0) {
					hidePaths.classed('hideMe', true)
				} else {
					hidePaths.classed('hideMe', false)
				}
			})
			// debug.html(debugTxt)
		})


		// scale line strokes to export amounts from-to each pair

	}




	/*----------  commodity selection  ----------*/
	$('.commodityList .commodity').off('click')
	$('.commodityList .commodity').on('click', function() {
		var code = $(this).attr('data-commod')
		$('.commodityList .commodity.current').removeClass('current')
		$(this).addClass('current')
		updateViewByCommodity(code);
	})

	function updateViewByCommodity(code) {
		// trace('updateViewByCommodity ' + code)
		endTour();
		// clearInterval(particleTimer)
		fta.currentCommodity = code;
		fta.currentYear = fta.years[0]
		vis.drawChart(fta);
	}

	/*----------  animate through years  ----------*/


	function endTour() {
		clearInterval(vis.yearInterval);
	}

	function startTour() {
		endTour();
		showNextYear();
		vis.yearInterval = setInterval(showNextYear, vis.yearTiming)
	}

	function showNextYear() {
		fta.currentYear++;
		// trace('show next ' + fta.currentYear)
		setCurrentYear({ year: fta.currentYear })
		if (fta.currentYear == fta.years[fta.years.length - 1]) {
			// endTour();
			pauseTimelinePlay();
		}
	}

	setCurrentYear({ year: fta.currentYear })
	startTimelinePlay();

	// trigger initial modal after page is built
	if (!fta.firstDrawn) $('.expandInstructions').click()
}

vis.drawCharts = function() {
	vis.drawChart(vis.FTAs.NAFTA)
}

vis.closeModals = function() {
	$('.trl_modal')
		.animate({opacity: 0}, 200, function() {
			$(this).removeClass('current')
		})
		
}

vis.setupClicks = function() {
	$('.trl_modal .close, .trl_modal .bg').on('click', function() {
		vis.closeModals();
	})

	// $('.expandInfo').on('click', function() {
	// vis.closeModals();
	// $('.trl_modal.methodology')
	// .css({opacity: 0})
	// .addClass('current')
	// .animate({opacity: 1}, 200)
	// .css('height', $('.trl_wrapper').height() + 'px')
	// })
	$('.expandInstructions').on('click', function() {
		// vis.closeModals();
		trace('wrapper h: ' + $('.trl_wrapper').height() )
		$('.trl_modal.instructions')
			.css({opacity: 0})
			.addClass('current')
			.animate({opacity: 1}, 200)
			.css('height', $('.trl_wrapper').height() + 'px')
	})


}

// wrangle

vis.wrangleFTAData = function(data, ftaName) {
	// generic for any FTA
	data.forEach(function(d) {
		// adjust to 2015 $
		// if (d.year == '1988') return;
		var adj = inflationAdjustment.filter(function(ia) {
				return ia.year == d.year; })[0].coeff
			// trace(adj)

		for (var thing in d) {
			if (thing != 'country' && thing != 'grouping') {
				d[thing] = +d[thing]
				if (thing != 'year') d[thing] *= adj
			}

			// compute imp/exp to world outside FTA
			d.exports_world = d.exports_total - d.exports_intra;
			d.imports_world = d.imports_total - d.imports_intra;

		}
	});

	// data.forEach(function(d) {
	// // var adj = inflationAdjustment.filter(function(ia) { return ia.year ==
	// d.year ; })[0].coeff

	// })


	var fta = vis.FTAs[ftaName]
	fta.data = data.filter(function(d) {
		return d.year > 1989; });

	vis.drawCharts()
}

vis.resizeTimeline = function() {
	// var w = $('#trl_chart_NAFTA').width();
	// trace('resizeTimeline() at ' + w);
	// pymChild.sendHeight()
}

// load

vis.loadData = function() {
	// when we add mercosur do this as queue
	d3.csv(vis.naftaFile, function(error, naftaData) {
		if (error) console.warn(error);

		vis.wrangleFTAData(naftaData, 'NAFTA');
	})
}

$(document).ready(function() {

	pymChild = new pym.Child({
		renderCallback: vis.resizeTimeline,
		polling: 500
	});
	// pymChild.sendHeight();
	vis.loadData();

	vis.setupClicks()
})

