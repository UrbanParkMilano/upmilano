(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DW2E:function(e,n,t){var r=t("0/R4"),o=t("Z6vF").onFreeze;t("Xtr8")("freeze",(function(e){return function(n){return e&&r(n)?e(o(n)):n}}))},R8uD:function(e,n,t){"use strict";(function(e){t("DNiP"),t("bWfx"),t("DW2E"),t("hhXQ"),t("Z2Ku"),t("L9s1"),t("hHhE"),t("WLL4"),t("rE2o"),t("rGqo"),t("yt8O"),t("RW0V"),t("pIFo"),t("ioFf"),t("V+eJ"),t("KKXr"),t("a1Th"),t("h7Nl"),t("Btvt"),t("91GP"),t("HAE/"),Object.defineProperty(n,"__esModule",{value:!0});var r,o=t("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var l,a=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,n){return e(n={exports:{}},n.exports),n.exports}var o,u,i,l="object",a=function(e){return e&&e.Math==Math&&e},f=a(typeof globalThis==l&&globalThis)||a(typeof window==l&&window)||a(typeof self==l&&self)||a(typeof t==l&&t)||Function("return this")(),s=function(e){try{return!!e()}catch(n){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var n=E(this,e);return!!n&&n.enumerable}:d},h=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},v={}.toString,m="".split,T=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return v.call(e).slice(8,-1)}(e)?m.call(e,""):Object(e)}:Object,g=function(e){return T(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},O=function(e,n){if(!b(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!b(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!b(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!b(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},_={}.hasOwnProperty,I=function(e,n){return _.call(e,n)},D=f.document,S=b(D)&&b(D.createElement),N=function(e){return S?D.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,w={f:p?A:function(e,n){if(e=g(e),n=O(n,!0),L)try{return A(e,n)}catch(t){}if(I(e,n))return h(!y.f.call(e,n),e[n])}},R=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,j={f:p?P:function(e,n,t){if(R(e),n=O(n,!0),R(t),L)try{return P(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},H=p?function(e,n,t){return j.f(e,n,h(1,t))}:function(e,n,t){return e[n]=t,e},M=function(e,n){try{H(f,e,n)}catch(t){f[e]=n}return n},G=r((function(e){var n=f["__core-js_shared__"]||M("__core-js_shared__",{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=G("native-function-to-string",Function.toString),K=f.WeakMap,x="function"==typeof K&&/native code/.test(k.call(K)),B=0,C=Math.random(),Y=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+C).toString(36)},F=G("keys"),U=function(e){return F[e]||(F[e]=Y(e))},W={},V=f.WeakMap;if(x){var q=new V,z=q.get,J=q.has,Q=q.set;o=function(e,n){return Q.call(q,e,n),n},u=function(e){return z.call(q,e)||{}},i=function(e){return J.call(q,e)}}else{var X=U("state");W[X]=!0,o=function(e,n){return H(e,X,n),n},u=function(e){return I(e,X)?e[X]:{}},i=function(e){return I(e,X)}}var Z={set:o,get:u,has:i,enforce:function(e){return i(e)?u(e):o(e,{})},getterFor:function(e){return function(n){var t;if(!b(n)||(t=u(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},$=r((function(e){var n=Z.get,t=Z.enforce,r=String(k).split("toString");G("inspectSource",(function(e){return k.call(e)})),(e.exports=function(e,n,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof n||I(o,"name")||H(o,"name",n),t(o).source=r.join("string"==typeof n?n:"")),e!==f?(i?!l&&e[n]&&(c=!0):delete e[n],c?e[n]=o:H(e,n,o)):c?e[n]=o:M(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||k.call(this)}))})),ee=f,ne=function(e){return"function"==typeof e?e:void 0},te=function(e,n){return arguments.length<2?ne(ee[e])||ne(f[e]):ee[e]&&ee[e][n]||f[e]&&f[e][n]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,le=Math.min,ae=function(e){return function(n,t,r){var o,u,i=g(n),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,l=function(e,n){var t=ue(e);return t<0?ce(t+n,0):le(t,n)}(r,c);if(e&&t!=t){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===t)return e||l||0;return!e&&-1}},fe={includes:ae(!0),indexOf:ae(!1)},se=fe.indexOf,pe=function(e,n){var t,r=g(e),o=0,u=[];for(t in r)!I(W,t)&&I(r,t)&&u.push(t);for(;n.length>o;)I(r,t=n[o++])&&(~se(u,t)||u.push(t));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},he={f:Object.getOwnPropertySymbols},ve=te("Reflect","ownKeys")||function(e){var n=ye.f(R(e)),t=he.f;return t?n.concat(t(e)):n},me=function(e,n){for(var t=ve(n),r=j.f,o=w.f,u=0;u<t.length;u++){var i=t[u];I(e,i)||r(e,i,o(n,i))}},Te=/#|\.prototype\./,ge=function(e,n){var t=Oe[be(e)];return t==Ie||t!=_e&&("function"==typeof n?s(n):!!n)},be=ge.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Oe=ge.data={},_e=ge.NATIVE="N",Ie=ge.POLYFILL="P",De=ge,Se=w.f,Ne=function(e,n){var t,r,o,u,i,c=e.target,l=e.global,a=e.stat;if(t=l?f:a?f[c]||M(c,{}):(f[c]||{}).prototype)for(r in n){if(u=n[r],o=e.noTargetGet?(i=Se(t,r))&&i.value:t[r],!De(l?r:c+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;me(u,o)}(e.sham||o&&o.sham)&&H(u,"sham",!0),$(t,r,u,e)}},Le=Object.keys||function(e){return pe(e,de)},Ae=y.f,we=function(e){return function(n){for(var t,r=g(n),o=Le(r),u=o.length,i=0,c=[];u>i;)t=o[i++],p&&!Ae.call(r,t)||c.push(e?[t,r[t]]:r[t]);return c}},Re={entries:we(!0),values:we(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return Re(e)}});ee.Object.values;var Pe=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),je=f.Symbol,He=G("wks"),Me=p?Object.defineProperties:function(e,n){R(e);for(var t,r=Le(n),o=r.length,u=0;o>u;)j.f(e,t=r[u++],n[t]);return e},Ge=te("document","documentElement"),ke=U("IE_PROTO"),Ke=function(){},xe=function(){var e,n=N("iframe"),t=de.length;for(n.style.display="none",Ge.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),xe=e.F;t--;)delete xe.prototype[de[t]];return xe()},Be=Object.create||function(e,n){var t;return null!==e?(Ke.prototype=R(e),t=new Ke,Ke.prototype=null,t[ke]=e):t=xe(),void 0===n?t:Me(t,n)};W[ke]=!0;var Ce,Ye=He[Ce="unscopables"]||(He[Ce]=Pe&&je[Ce]||(Pe?je:Y)("Symbol."+Ce)),Fe=Array.prototype;null==Fe[Ye]&&H(Fe,Ye,Be(null));var Ue,We=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Ue="includes",Fe[Ye][Ue]=!0;var Ve,qe,ze,Je=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},Qe=Function.call;Ve="includes",Je(Qe,f["Array"].prototype[Ve],qe);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ze||(ze={}));var Xe,Ze=ze;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,en=Xe,nn=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],tn=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rn=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=nn.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var on=Object.freeze({isInline:function(e){return Object.values(en).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.BLOCKS=Ze,n.CONTAINERS=rn,n.INLINES=en,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=nn,n.VOID_BLOCKS=tn,n.helpers=on}));(l=a)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var f,s,p=a.BLOCKS,d=(a.CONTAINERS,a.INLINES),E=a.MARKS,y=(a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.helpers);function h(e,n){return e.map((function(e,t){return r=v(e,n),u=t,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function v(e,n){var t=n.renderNode,r=n.renderMark,o=n.renderText;if(y.isText(e))return e.marks.reduce((function(e,n){return r[n.type]?r[n.type](e):e}),o?o(e.value):e.value);var i=h(e.content,n);return e.nodeType&&t[e.nodeType]?t[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var m=((f={})[p.DOCUMENT]=function(e,n){return n},f[p.PARAGRAPH]=function(e,n){return u.createElement("p",null,n)},f[p.HEADING_1]=function(e,n){return u.createElement("h1",null,n)},f[p.HEADING_2]=function(e,n){return u.createElement("h2",null,n)},f[p.HEADING_3]=function(e,n){return u.createElement("h3",null,n)},f[p.HEADING_4]=function(e,n){return u.createElement("h4",null,n)},f[p.HEADING_5]=function(e,n){return u.createElement("h5",null,n)},f[p.HEADING_6]=function(e,n){return u.createElement("h6",null,n)},f[p.EMBEDDED_ENTRY]=function(e,n){return u.createElement("div",null,n)},f[p.UL_LIST]=function(e,n){return u.createElement("ul",null,n)},f[p.OL_LIST]=function(e,n){return u.createElement("ol",null,n)},f[p.LIST_ITEM]=function(e,n){return u.createElement("li",null,n)},f[p.QUOTE]=function(e,n){return u.createElement("blockquote",null,n)},f[p.HR]=function(){return u.createElement("hr",null)},f[d.ASSET_HYPERLINK]=function(e){return g(d.ASSET_HYPERLINK,e)},f[d.ENTRY_HYPERLINK]=function(e){return g(d.ENTRY_HYPERLINK,e)},f[d.EMBEDDED_ENTRY]=function(e){return g(d.EMBEDDED_ENTRY,e)},f[d.HYPERLINK]=function(e,n){return u.createElement("a",{href:e.data.uri},n)},f),T=((s={})[E.BOLD]=function(e){return u.createElement("b",null,e)},s[E.ITALIC]=function(e){return u.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[E.CODE]=function(e){return u.createElement("code",null,e)},s);function g(e,n){return u.createElement("span",{key:n.data.target.sys.id},"type: ",n.nodeType," id: ",n.data.target.sys.id)}n.documentToReactComponents=function(e,n){return void 0===n&&(n={}),e?v(e,{renderNode:i({},m,n.renderNode),renderMark:i({},T,n.renderMark),renderText:n.renderText}):null}}).call(this,t("yLpj"))},UExd:function(e,n,t){var r=t("nh4g"),o=t("DVgA"),u=t("aCFj"),i=t("UqcF").f;e.exports=function(e){return function(n){for(var t,c=u(n),l=o(c),a=l.length,f=0,s=[];a>f;)t=l[f++],r&&!i.call(c,t)||s.push(e?[t,c[t]]:c[t]);return s}}},WLL4:function(e,n,t){var r=t("XKFU");r(r.S+r.F*!t("nh4g"),"Object",{defineProperties:t("FJW5")})},YWiO:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return a}));var r=t("q1tI"),o=t.n(r),u=t("3Z9Z"),i=t("JI6e"),c=t("R8uD"),l=t("Bl7J"),a="2789035364";n.default=function(e){var n={renderNode:{"embedded-asset-block":function(e){var n=e.data.target.fields.title["en-US"],t=e.data.target.fields.file["en-US"].url;return o.a.createElement("img",{alt:n,src:t})}}};return o.a.createElement(l.a,null,o.a.createElement(u.a,null,o.a.createElement(i.a,{lg:{span:8,offset:2}},o.a.createElement("h1",null,e.data.contentfulNews.title),o.a.createElement("p",null,o.a.createElement("i",null,e.data.contentfulNews.publishedDate)),Object(c.documentToReactComponents)(e.data.contentfulNews.body.json,n))))}},hhXQ:function(e,n,t){var r=t("XKFU"),o=t("UExd")(!1);r(r.S,"Object",{values:function(e){return o(e)}})}}]);
//# sourceMappingURL=component---src-templates-news-js-b68521250a7812038d9f.js.map