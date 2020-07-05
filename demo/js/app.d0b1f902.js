(function(t){function e(e){for(var n,c,s=e[0],u=e[1],i=e[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/challenge-curso-vuejs2-vue-shop/demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"setProducts",(function(){return Q})),r.d(n,"setProduct",(function(){return B}));var a={};r.r(a),r.d(a,"fetchProducts",(function(){return G}));var o={};r.r(o),r.d(o,"addProduct",(function(){return X})),r.d(o,"removeProduct",(function(){return Y}));var c={};r.r(c),r.d(c,"totalCost",(function(){return Z}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ShopLayout",[r("template",{slot:"products-list"},[r("productList")],1),r("template",{slot:"cart"},[r("Cart")],1)],2)],1)},i=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[t.productsItems.length?r("div",[r("paginate",{staticStyle:{padding:"0"},attrs:{list:t.productsItems,per:t.perPage,name:"products"}},[r("b-card-group",{attrs:{columns:""}},t._l(t.paginated("products"),(function(e,n){return r("product-item",{key:n,attrs:{product:e},on:{eventEmitAddToCart:t.addToCart}})})),1)],1),r("paginate-links",{attrs:{"show-step-links":!0,classes:{ul:"pagination",li:"page-item","li > a":["page-link","cursor-pointer"]},"cursor-pointer":"",for:"products"}})],1):r("b-alert",{attrs:{show:"",variant:"info"}},[t._v("No hay productos que mostrar")])],1)},l=[],p=r("5530"),f=r("2f62"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"252px"},attrs:{"no-body":""}},[r("b-card-header",{attrs:{"header-bg-variant":"transparent"}},[r("b-card-title",[t._v(t._s(t.product.name))])],1),r("b-card-img",{staticClass:"rounded-0",attrs:{src:t.product.picture}}),r("b-card-body",[r("b-card-text",[r("strong",[t._v("Precio: "+t._s(t.product.price))])]),r("b-card-sub-title",[t._v("Quedan en stock: "+t._s(t.product.stock))])],1),r("b-card-footer",[r("b-button",{attrs:{block:"",variant:"warning"},on:{click:function(e){return t.$emit("eventEmitAddToCart",t.product)}}},[t._v("Agregar al Carrito")])],1)],1)},m=[],v={name:"product-item",props:{product:{type:Object,required:!0}},mounted:function(){},methods:{}},h=v,y=r("2877"),g=Object(y["a"])(h,b,m,!1,null,"29c3a1ca",null),_=g.exports,j={components:{ProductItem:_},mounted:function(){this.fetchProducts()},data:function(){return{paginate:["products"],perPage:6}},computed:Object(p["a"])({},Object(f["e"])("products",["productsItems"])),methods:Object(p["a"])({},Object(f["b"])("products",["fetchProducts"]),{},Object(f["d"])("cart",["addProduct"]),{addToCart:function(t){this.addProduct(t)}})},O=j,w=Object(y["a"])(O,d,l,!1,null,"aed2a030",null),P=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-4 mb-1"},[r("b-row",[r("b-col",{attrs:{cols:"9"}},[t._t("products-list")],2),r("b-col",{attrs:{cols:"3"}},[t._t("cart")],2)],1)],1)},C=[],k={name:"ShopLayout"},S=k,I=Object(y["a"])(S,x,C,!1,null,"3edf7519",null),T=I.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("b-table",{attrs:{striped:"",hover:"",fields:t.fields,items:t.cartItems,"show-empty":""},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[r("b-btn",{attrs:{size:"sm",variant:"danger"},on:{click:function(r){return r.stopPropagation(),t.removeProduct(e.item)}}},[t._v(" Eliminar ")])]}},{key:"empty",fn:function(e){return[t._v(" No hay productos en el carrito ")]}},{key:"custom-foot",fn:function(){return[r("b-tr",{staticClass:"dark"},[r("b-td",{staticClass:"cart__TdName"},[t._v("Total:")]),r("b-td"),r("b-td"),r("b-td",[r("b-table-simple",{staticClass:"mb-0 dark",attrs:{borderless:""}},[r("b-tbody",[r("b-tr",[r("b-td",{staticClass:"p-0"},[r("div",{staticStyle:{"white-space":"pre"}},[t._v("$ ")])]),r("b-td",{staticClass:"p-0",staticStyle:{"max-width":"100px","word-wrap":"break-word"}},[t._v(t._s(t.totalCost.toFixed(2)))])],1)],1)],1)],1)],1)]},proxy:!0}])})],1)},$=[],q={name:"Cart",data:function(){return{fields:[{key:"name",label:"Name",tdClass:"cart__TdName"},"qty","price","actions"]}},computed:Object(p["a"])({},Object(f["e"])("cart",["cartItems"]),{},Object(f["c"])("cart",["totalCost"])),methods:Object(p["a"])({},Object(f["d"])("cart",["removeProduct"]))},L=q,N=Object(y["a"])(L,E,$,!1,null,"854647e2",null),A=N.exports,M={name:"App",components:{ShopLayout:T,productList:P,Cart:A}},F=M,J=(r("034f"),Object(y["a"])(F,u,i,!1,null,null,null)),R=J.exports,z={productsItems:[]};function Q(t,e){t.productsItems=e}function B(t,e){t.product=e}r("d3b7"),r("96cf");var D=r("1da1");function G(t){return H.apply(this,arguments)}function H(){return H=Object(D["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,e.rootState,t.next=3,fetch("/fixtures/products.json");case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,r("products/setProducts",a,{root:!0});case 8:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}var K=!0,U={namespaced:K,state:z,mutations:n,actions:a},V={cartItems:[]},W=r("2ef0");function X(t,e){var r=Object(W["find"])(t.cartItems,{id:e.id});if(r)r.qty+=1;else{var n=Object.assign({qty:1},e);t.cartItems.push(n)}}function Y(t,e){t.cartItems=Object(W["filter"])(t.cartItems,(function(t){var r=t.id;return r!==e.id}))}r("13d5");function Z(t){return t.cartItems.reduce((function(t,e){return parseFloat(e.price)*e.qty+t}),0)}var tt={namespaced:!0,state:V,mutations:o,getters:c},et=r("bfa9"),rt=r("a002"),nt=r.n(rt),at=new et["a"]({storage:nt.a,asyncStorage:!0,modules:["cart"]});s["default"].use(f["a"]);var ot=new f["a"].Store({modules:{products:U,cart:tt},plugins:[at.plugin]});r("6912"),s["default"].config.productionTip=!1,new s["default"]({store:ot,render:function(t){return t(R)}}).$mount("#app")},"5d89":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=r("5f5b"),o=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(a["a"]),n["default"].use(o["a"])},"620d":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=r("baff"),o=r.n(a);n["default"].use(o.a)},6912:function(t,e,r){r("5d89"),r("620d")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.d0b1f902.js.map