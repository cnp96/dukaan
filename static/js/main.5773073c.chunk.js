(this.webpackJsonpdukaan=this.webpackJsonpdukaan||[]).push([[0],{23:function(e,s,t){},24:function(e,s,t){},25:function(e,s,t){},31:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(1),i=t.n(c),n=t(16),r=t.n(n),l=(t(23),t(7)),d=t(2),j=t(14),o=(t(24),t.p+"static/media/logo_white.8a6a2d4e.svg"),m=t.p+"static/media/navbar_account.6d35c513.svg",A=t.p+"static/media/navbar_catalogue.8f09d423.svg",h=t.p+"static/media/navbar_home.8acd48af.svg",v=t.p+"static/media/navbar_marketing.17c7dd36.svg",b=t.p+"static/media/navbar_orders.82994850.svg",x=(t(25),function(e){var s=[{name:"Home",icon:h,link:"/"},{name:"Orders",icon:b,link:"/orders",notification:2},{name:"Products",icon:A,link:"/products"},{name:"Marketing",icon:v,link:"/marketing"},{name:"Account",icon:m,link:"/account"}];return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:o,alt:"Dukaan"})}),Object(a.jsx)("div",{className:"list-items",children:s.map((function(e,s){return Object(a.jsxs)(l.c,{className:"item",to:e.link,children:[Object(a.jsx)("img",{src:e.icon,alt:e.name}),Object(a.jsx)("span",{className:"label",children:e.name}),e.notification&&Object(a.jsx)("span",{className:"notification",children:e.notification})]},s)}))}),Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("span",{className:"meta",children:"Need any help?"}),Object(a.jsx)("span",{className:"chat",children:"Chat with us"})]})]})}),g=t.p+"static/media/verify.19304187.svg",O=t.p+"static/media/arrow_up.7369d605.svg",p=t.p+"static/media/whatsapp.25bc81b7.svg",u=t.p+"static/media/facebook.7a80b087.svg",w=t.p+"static/media/twitter.8f71a440.svg",V=function(e){if(e<1e3)return e;for(var s=e.toString(),t="",a=s.length-1,c=s.length-3;a>=0;a--)a===c?(t+=s[a]+",",c-=2):t+=s[a];return t.split("").reverse().join("")},N=function(e){var s=[{name:"orders",value:V(e.orders)},{name:"total sales",value:"\u20b9".concat(V(e.totalSales))},{name:"store views",value:V(e.storeViews)},{name:"product views",value:V(e.productViews)}];return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("span",{children:"Share store link"}),Object(a.jsxs)("div",{className:"calendar",children:["Last Month",Object(a.jsx)("img",{src:O,alt:"arrow"})]})]}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"share-card",children:[Object(a.jsx)("div",{className:"meta",children:"Your customers can visit your online store and place order from this link."}),Object(a.jsx)("a",{href:"https://mydukaan.io/".concat(e.link),rel:"noopener noreferrer",target:"_blank",className:"link",children:"mydukaan.io/".concat(e.link)}),Object(a.jsxs)("div",{className:"share-via",children:["Share via",Object(a.jsxs)("div",{className:"providers",children:[Object(a.jsx)("img",{src:p,alt:"whatsapp"}),Object(a.jsx)("img",{src:u,alt:"facebook"}),Object(a.jsx)("img",{src:w,alt:"twitter"})]})]})]}),Object(a.jsx)("div",{className:"overview",children:s.map((function(e,s){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("span",{className:"name",children:e.name}),Object(a.jsx)("span",{className:"value",children:e.value})]},s)}))})]})]})},K=t.p+"static/media/arrow_right.ce74fefe.svg",Z=function(e){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("span",{children:"Active Orders"}),Object(a.jsxs)(l.b,{className:"view-all",to:"#",children:["View All",Object(a.jsx)("img",{src:K,alt:"right"})]})]}),Object(a.jsxs)("div",{className:"overview",children:[Object(a.jsxs)("div",{className:"label active",children:["Pending (",e.stats.pending,")"]}),Object(a.jsxs)("div",{className:"label",children:["Accepted (",e.stats.accepted,")"]}),Object(a.jsxs)("div",{className:"label",children:["Shipped (",e.stats.shipped,")"]})]}),Object(a.jsx)("div",{className:"details",children:e.orders.map((function(e,s){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsxs)("div",{className:"id",children:["Order #",e.id,e.type&&Object(a.jsx)("div",{className:"type",children:e.type})]}),Object(a.jsxs)("div",{className:"thumbnail",children:[Object(a.jsx)("img",{src:e.thumbnail,alt:e.id.toString()}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("div",{className:"quantity",children:V(e.quantity)+" item"}),Object(a.jsxs)("div",{className:"price",children:["\u20b9",e.price]})]})]})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("div",{className:"time",children:e.time}),Object(a.jsxs)(l.b,{to:e.details,children:["Details ",Object(a.jsx)("img",{src:K,alt:"arrow right"})]})]})]},s)}))})]})},B=function(e){var s={id:281217,time:"Today, 11:11 PM",thumbnail:"data:image/png;base64,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",quantity:1,price:79,details:"#"};return Object(a.jsxs)("div",{className:"dashboard",children:[Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"topbar",children:[Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("span",{children:"Mano Super Market"}),Object(a.jsx)("img",{src:g,alt:"Mano Super Market"})]}),Object(a.jsx)("div",{className:"info",children:Object(a.jsx)("span",{children:"How to use"})})]}),Object(a.jsx)("div",{className:"stats",children:Object(a.jsx)(N,{link:"manosupermarket",orders:192,totalSales:155920,storeViews:96,productViews:2313})}),Object(a.jsx)("div",{className:"orders",children:Object(a.jsx)(Z,{stats:{accepted:33,pending:12,shipped:121},orders:new Array(6).fill(1).map((function(e,t){return t<4?Object(j.a)(Object(j.a)({},s),{},{type:"new"}):s}))})})]})]})},Q=function(e){return Object(a.jsx)(d.c,{children:Object(a.jsx)(d.a,{path:"/",component:B})})};var W=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(Q,{}),";"]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),a(e),c(e),i(e),n(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.5773073c.chunk.js.map