(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{15:function(e,t,c){e.exports={overlay:"Drawer_overlay__1_s_1",overlayVisible:"Drawer_overlayVisible__3pobe",drawer:"Drawer_drawer__3TPvq",items:"Drawer_items__3gWzc"}},17:function(e,t,c){e.exports={card:"Card_card__fROWY",plus:"Card_plus__3rnnV",favorite:"Card_favorite__2bFyO"}},39:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(33),s=c.n(n),i=c(9),o=(c(39),c(11)),l=c(6),d=c.n(l),j=c(10),u=c(4),b=c(2),m=c(3),x=c.n(m),h=c(12),f=c(20),p=c(17),v=c.n(p),O=a.a.createContext({}),g=c(1);var N=function(e){var t=e.id,c=e.parentId,r=e.title,n=e.price,s=e.imageUrl,i=e.onFavorite,o=e.onPlus,l=e.loading,d=void 0===l||l,j=a.a.useContext(O),u=j.isAddedToCart,b=j.isAddedToFavorite;return j.cardFavorite,j.cartItems,Object(g.jsx)("div",{className:v.a.card,children:d?Object(g.jsxs)(f.a,{speed:1,width:155,height:220,viewBox:"0 0 150 220",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(g.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"110"}),Object(g.jsx)("rect",{x:"0",y:"140",rx:"3",ry:"3",width:"150",height:"15"}),Object(g.jsx)("rect",{x:"0",y:"158",rx:"3",ry:"3",width:"93",height:"15"}),Object(g.jsx)("rect",{x:"0",y:"195",rx:"8",ry:"8",width:"80",height:"24"}),Object(g.jsx)("rect",{x:"118",y:"188",rx:"8",ry:"8",width:"32",height:"32"})]}):Object(g.jsxs)(g.Fragment,{children:[i&&Object(g.jsx)("div",{className:v.a.favorite,onClick:function(){i({id:t,parentId:c,title:r,price:n,imageUrl:s})},children:Object(g.jsx)("img",{src:b(c)?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"Favorite"})}),Object(g.jsx)("img",{width:133,height:112,src:s,alt:"Sneakers"}),Object(g.jsx)("h5",{children:r}),Object(g.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(g.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),o&&Object(g.jsx)("img",{src:u(c)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus",className:v.a.plus,onClick:function(){o({id:t,parentId:c,title:r,price:n,imageUrl:s})}})]})]})})};var k=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(g.jsxs)("div",{className:"content p-40",children:[Object(g.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(g.jsx)("h1",{className:"mb-40",children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(g.jsxs)("div",{className:"search-block",children:[Object(g.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(g.jsx)("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a...",onChange:a,value:c}),c&&Object(g.jsx)("img",{onClick:function(){return r("")},src:"img/btn-remove.svg",className:"cu-p clear",alt:"Clear"})]})]}),Object(g.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(o.a)(Array(8)):e).map((function(e,t){return Object(g.jsx)(N,Object(h.a)({onFavorite:n,onPlus:s,loading:i},e),e&&e.parentId)}))}()})]})};var w=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(O).setCartOpened;return Object(g.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(g.jsx)("img",{className:"mb-20",width:c.w,height:c.h,src:c.url,alt:"Empty"}),Object(g.jsx)("h2",{children:t}),Object(g.jsx)("p",{className:"opacity-6",children:r}),Object(g.jsx)(i.b,{to:"/",children:Object(g.jsxs)("button",{className:"greenButton",onClick:function(){return n(!1)},children:[Object(g.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})};var y=function(e){var t=e.onAddToCart,c=e.onAddToFavorite,r=a.a.useContext(O),n=r.cardFavorite,s=r.isAddedToCart;return Object(g.jsx)("div",{className:"content p-40",children:n.length>0?Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(g.jsx)("h1",{className:"mb-40",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(g.jsx)("div",{className:"d-flex flex-wrap",children:n.map((function(e){return Object(g.jsx)(N,Object(h.a)({loading:!1,favorited:!0,onPlus:t,onFavorite:c,added:s(e.parentId)},e),e.parentId)}))})]}):Object(g.jsx)(w,{title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :(",description:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438.",image:{url:"img/ups.jpg",w:70,h:70}})})};var C=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(u.a)(n,2),i=s[0],l=s[1];return a.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://60f5c8ca18254c00176e0026.mockapi.io/order");case 3:t=e.sent,c=t.data,r(c.map((function(e){return e.items})).flat()),l(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432!"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(g.jsx)("div",{className:"content p-40",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(g.jsx)("h1",{className:"mb-40",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(g.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(o.a)(Array(8)):c).map((function(e,t){return Object(g.jsx)(N,Object(h.a)({loading:i},e),e&&e.parentId+"_".concat(t))}))})]})})};var I=function(e){var t=e.onClickCart,c=a.a.useContext(O).cartItems.reduce((function(e,t){return t.price+e}),0);return Object(g.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(g.jsx)("div",{className:"d-flex align-center",children:Object(g.jsxs)(i.b,{to:"/",children:[Object(g.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(g.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(g.jsxs)("ul",{className:"d-flex",children:[Object(g.jsxs)("li",{className:"mr-30 cu-p",onClick:t,children:[Object(g.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"cart"}),Object(g.jsxs)("span",{children:[c," \u0440\u0443\u0431."]})]}),Object(g.jsx)("li",{className:"mr-15 cu-p",children:Object(g.jsxs)(i.b,{to:"/react-sneakers/favorits",children:[" ",Object(g.jsx)("img",{width:18,height:18,src:"img/heart.svg",alt:"favorite"})," "]})}),Object(g.jsx)(i.b,{to:"/react-sneakers/orders",children:Object(g.jsx)("li",{children:Object(g.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"user"})})})]})]})},_=c(15),S=c.n(_);var A=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=a.a.useContext(O),o=i.cartItems,l=i.setCartItems,b=a.a.useState(!1),m=Object(u.a)(b,2),h=m[0],f=m[1],p=a.a.useState(null),v=Object(u.a)(p,2),N=v[0],k=v[1],y=a.a.useState(!1),C=Object(u.a)(y,2),I=C[0],_=C[1],A=function(e){return new Promise((function(t){return setTimeout(t,e)}))},T=o.reduce((function(e,t){return t.price+e}),0),F=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,x.a.post("https://60f5c8ca18254c00176e0026.mockapi.io/order",{items:o});case 4:t=e.sent,c=t.data,k(c.orderId),f(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,x.a.delete("https://60f5c8ca18254c00176e0026.mockapi.io/cart/"+a.id);case 14:return e.next=16,A(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error("\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"+e.t0);case 24:_(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"".concat(S.a.overlay," ").concat(s?S.a.overlayVisible:""),children:Object(g.jsxs)("div",{className:"".concat(S.a.drawer),children:[Object(g.jsxs)("h2",{className:"mb-30 d-flex justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(g.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:"Remove"})]}),n.length>0?Object(g.jsxs)("div",{className:"d-flex flex flex-column",children:[Object(g.jsx)("div",{className:"".concat(S.a.items),children:n.map((function(e){return Object(g.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(g.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(g.jsxs)("div",{className:"mr-20 flex",children:[Object(g.jsx)("p",{className:"mb-5",children:e.title}),Object(g.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(g.jsx)("img",{className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove",onClick:function(){return c(e.id)}})]},e.parentId)}))}),Object(g.jsxs)("div",{className:"cartTotalBlock",children:[Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{className:"d-flex",children:[Object(g.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(g.jsx)("div",{}),Object(g.jsxs)("b",{children:[T," \u0440\u0443\u0431."]})]}),Object(g.jsxs)("li",{className:"d-flex",children:[Object(g.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(g.jsx)("div",{}),Object(g.jsxs)("b",{children:[Math.ceil(5*T/100)," \u0440\u0443\u0431."]})]})]}),Object(g.jsxs)("button",{disabled:I,className:"greenButton",onClick:F,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(g.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(g.jsx)(w,{title:h?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:h?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(N," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:h?{url:"img/order.jpg",w:83,h:120}:{url:"img/empty-cart.jpg",w:120,h:120}})]})})};var T=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(u.a)(n,2),i=s[0],l=s[1],m=a.a.useState([]),h=Object(u.a)(m,2),f=h[0],p=h[1],v=a.a.useState(""),N=Object(u.a)(v,2),w=N[0],_=N[1],S=a.a.useState(!1),T=Object(u.a)(S,2),F=T[0],V=T[1],B=a.a.useState(!0),P=Object(u.a)(B,2),R=P[0],E=P[1];a.a.useEffect((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://60f5c8ca18254c00176e0026.mockapi.io/cart");case 2:return t=e.sent,e.next=5,x.a.get("https://60f5c8ca18254c00176e0026.mockapi.io/favorite");case 5:return c=e.sent,e.next=8,x.a.get("https://60f5c8ca18254c00176e0026.mockapi.io/sneakers");case 8:a=e.sent,E(!1),l(t.data),p(c.data),r(a.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.parentId)})))){e.next=7;break}x.a.delete("https://60f5c8ca18254c00176e0026.mockapi.io/cart/".concat(c.id)),l((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.parentId)}))})),e.next=12;break;case 7:return e.next=9,x.a.post("https://60f5c8ca18254c00176e0026.mockapi.io/cart",t);case 9:r=e.sent,a=r.data,l((function(e){return[].concat(Object(o.a)(e),[a])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=f.find((function(e){return Number(e.parentId)===Number(t.parentId)})))){e.next=7;break}x.a.delete("https://60f5c8ca18254c00176e0026.mockapi.io/favorite/".concat(c.id)),p((function(e){return e.filter((function(e){return e.parentId!==t.parentId}))})),e.next=12;break;case 7:return e.next=9,x.a.post("https://60f5c8ca18254c00176e0026.mockapi.io/favorite",t);case 9:r=e.sent,a=r.data,p((function(e){return[].concat(Object(o.a)(e),[a])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435!"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(O.Provider,{value:{items:c,cartItems:i,cardFavorite:f,isAddedToCart:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},isAddedToFavorite:function(e){return f.some((function(t){return Number(t.parentId)===Number(e)}))},setCartOpened:V,setCartItems:l},children:Object(g.jsxs)("div",{className:"wrapper clear",children:[Object(g.jsx)(A,{onClose:function(){V(!1),document.body.style.overflow="auto"},items:i,onRemove:function(e){try{l((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))})),x.a.delete("https://60f5c8ca18254c00176e0026.mockapi.io/cart/".concat(e))}catch(t){alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b!"),console.error(t)}},opened:F}),Object(g.jsx)(I,{onClickCart:function(){V(!0),document.body.style.overflow="hidden"}}),Object(g.jsx)(b.a,{path:"/react-sneakers",children:Object(g.jsx)(k,{items:c,searchValue:w,setSearchValue:_,onChangeSearchInput:function(e){_(e.target.value)},onAddToFavorite:L,onAddToCart:D,isLoading:R})}),Object(g.jsx)(b.a,{path:"/react-sneakers/favorits",children:Object(g.jsx)(y,{onAddToFavorite:L,onAddToCart:D})}),Object(g.jsx)(b.a,{path:"/react-sneakers/orders",children:Object(g.jsx)(C,{})})]})})};c(65);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(T,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7a9c86bf.chunk.js.map