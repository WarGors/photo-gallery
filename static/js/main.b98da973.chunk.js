(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports={"albums-list":"albumsList_albums-list__27Vss","album-link":"albumsList_album-link__2tf-s","album-container":"albumsList_album-container__2d8ph","albums-cover":"albumsList_albums-cover__Pf_QP","albums-title":"albumsList_albums-title__2Sx3l","albums-info":"albumsList_albums-info__2R-JY"}},,,,function(t,e,n){t.exports={"img-container":"photoFullSize_img-container__YUxQp",backdrop:"photoFullSize_backdrop__1UM8z","photo-container":"photoFullSize_photo-container__2IBsU","photo-nav":"photoFullSize_photo-nav__5M8hn"}},,,,,,,,function(t,e,n){t.exports={content:"App_content__319J8","go-home":"App_go-home__3T0h2"}},function(t,e,n){t.exports={"notfound-container":"notFound_notfound-container__VvI6a",center:"notFound_center__2CYtw"}},,,function(t,e,n){t.exports={back:"backButton_back__3Etq-","arrow-1":"backButton_arrow-1__3Qmo1"}},function(t,e,n){t.exports={"lds-spinner":"loader_lds-spinner__3ULEt",center:"loader_center__2ksSN"}},function(t,e,n){t.exports={"albums-container":"albums_albums-container__3PMMJ"}},function(t,e,n){t.exports={"authors-ul":"authorsList_authors-ul__eM4N8","author-name":"authorsList_author-name__7Wcap"}},,,,function(t,e,n){t.exports={"authors-list":"homepage_authors-list__1jZR-"}},function(t,e,n){t.exports={close:"closePhoto_close__3pvir"}},function(t,e,n){t.exports={Next:"nextPhoto_Next__2DZQE",Prev:"nextPhoto_Prev__1kuKw"}},function(t,e,n){t.exports={"photo-list":"photoList_photo-list__3UeUx"}},function(t,e,n){t.exports={"photos-container":"photos_photos-container__1h94v"}},,,,,,,,,,,function(t,e,n){},,,,,,,function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(1),o=n(17),a=n.n(o),c=(n(49),n(10)),u=n(8),i=n(3),l=n(23),b=n.n(l),j=n(24),h=n.n(j),d=function(){return Object(s.jsx)("div",{className:h.a["notfound-container"],children:Object(s.jsx)("div",{className:h.a.center,children:"NOT FOUND"})})},p=n(19),m=n(11),x=n.n(m),O=function(t){var e=t.albums,n=t.authorID;return Object(s.jsx)("ul",{className:x.a["albums-list"],children:e.map((function(t){var e=Object(p.a)(t,2),r=e[0],o=e[1],a=o.title,c=o.photos;return Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{className:x.a["album-link"],to:"/user-".concat(n,"-album-").concat(r),children:Object(s.jsxs)("div",{className:x.a["album-container"],children:[Object(s.jsx)("img",{className:x.a["albums-cover"],src:"https://i114.fastpic.ru/big/2021/0202/9d/b42ffbb81d2dfa3471fea3830785a49d.png",alt:"cover"}),Object(s.jsx)("div",{className:x.a["albums-title"],children:a}),Object(s.jsxs)("div",{className:x.a["albums-info"],children:[c.length," | \u0444\u043e\u0442\u043e"]})]})})},r)}))})},f=n(27),_=n.n(f),v=function(t){var e=t.href,n=t.target;return Object(s.jsxs)(u.b,{to:e,className:_.a.back,children:[Object(s.jsx)("div",{className:_.a["arrow-1"],children:Object(s.jsx)("div",{})}),Object(s.jsxs)("span",{children:["\u041d\u0430\u0437\u0430\u0434 \u043a ",n]})]})},N=n(28),I=n.n(N),L=function(){return Object(s.jsx)("div",{className:I.a.center,children:Object(s.jsxs)("div",{className:I.a["lds-spinner"],children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})},P=n(29),k=n.n(P);var g=Object(c.b)((function(t){return{users:t.users,usersIsLoad:t.usersIsLoad,photosIsLoad:t.photosIsLoad}}))((function(t){var e=t.users,n=t.usersIsLoad,r=t.photosIsLoad,o=t.match.params.authorID;if(!n||!r)return Object(s.jsx)("div",{className:k.a["albums-container"],children:Object(s.jsx)(L,{})});if(!e[o])return Object(s.jsx)(d,{});var a=e[o].albums,c=Object.entries(a);return Object(s.jsxs)("div",{className:k.a["albums-container"],children:[Object(s.jsx)(v,{target:"\u0430\u0432\u0442\u043e\u0440\u0430\u043c",href:"/"}),Object(s.jsx)(O,{albums:c,authorID:o})]})})),y=n(30),D=n.n(y),w=function(t){var e=t.users;return Object(s.jsx)("ul",{className:D.a["authors-ul"],children:e.map((function(t){var e=Object(p.a)(t,2),n=e[0],r=e[1];return Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{className:D.a["author-name"],to:"/user-".concat(n,"-albums"),children:r.name})},n)}))})},A=n(34),U=n.n(A);var E=Object(c.b)((function(t){return{users:t.users,usersIsLoad:t.usersIsLoad}}))((function(t){var e=t.users,n=t.usersIsLoad,r=Object.entries(e);return Object(s.jsxs)("div",{className:U.a["authors-list"],children:[Object(s.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u044b \u0440\u0430\u0431\u043e\u0442"}),n?Object(s.jsx)(w,{users:r}):Object(s.jsx)(L,{})]})})),S=n(35),F=n.n(S),T=function(t){var e=t.closePhoto;return Object(s.jsx)("div",{onClick:e,className:F.a.close})},C=n(36),z=n.n(C),J=function(t){var e=t.direction,n=t.goNext;return Object(s.jsx)("i",{direction:e,className:z.a[e],onClick:n})},M=n(15),B=n.n(M),Q=function(t){var e=t.url,n=t.nextPhoto,r=t.closePhoto,o=t.currentPhotoNumber,a=t.numberPhotosInAlbum;return Object(s.jsxs)("div",{className:B.a["img-container"],children:[Object(s.jsx)("div",{className:B.a.backdrop,onClick:r}),Object(s.jsx)(T,{closePhoto:r}),Object(s.jsxs)("div",{className:B.a["photo-container"],children:[Object(s.jsx)("img",{src:e,alt:""}),Object(s.jsxs)("div",{className:B.a["photo-nav"],children:[Object(s.jsx)(J,{direction:"Prev",goNext:n}),Object(s.jsxs)("span",{children:[o," / ",a]}),Object(s.jsx)(J,{direction:"Next",goNext:n})]})]})]})},R=n(37),Y=n.n(R),H=function(t){var e=t.photos,n=t.setPhotoData;return Object(s.jsx)("ul",{className:Y.a["photo-list"],children:e.map((function(t,e){return Object(s.jsx)("li",{onClick:function(){return n({url:t.url,index:e+1})},children:Object(s.jsx)("img",{src:t.thumbnailUrl,alt:t.title})},t.id)}))})},V=n(9),Z=n(16),q=n.n(Z),G=n(31),K="DATA_LOAD",W="PHOTO_DATA",X="USERS_LOAD",$="PHOTOS_LOAD";function tt(t){return function(){var e=Object(G.a)(q.a.mark((function e(n){var s,r,o,a,c,u;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/photos");case 3:if(s=e.sent,r=null,!s.ok){e.next=9;break}return e.next=8,s.json();case 8:r=e.sent;case 9:return e.next=11,fetch("https://jsonplaceholder.typicode.com/albums");case 11:if(o=e.sent,a=null,!o.ok){e.next=17;break}return e.next=16,o.json();case 16:a=e.sent;case 17:c=Object(V.a)({},t),u={},r.forEach((function(t){u[t.albumId]||(u[t.albumId]=[]),u[t.albumId].push(t)})),a.forEach((function(e){return t[e.userId].albums[e.id]={title:e.title,photos:u[e.id]}})),n(et(c)),n({type:$}),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(t){return e.apply(this,arguments)}}()}function et(t){return{type:K,payload:t}}var nt=n(38),st=n.n(nt);var rt=Object(c.b)((function(t){return{users:t.users,currentPhoto:t.currentPhoto,usersIsLoad:t.usersIsLoad,photosIsLoad:t.photosIsLoad}}),(function(t){return{setPhotoData:function(e){return t(function(t){return{type:W,payload:t}}(e))}}}))((function(t){var e=t.users,n=t.currentPhoto,r=t.setPhotoData,o=t.usersIsLoad,a=t.photosIsLoad,c=t.match.params.authorID,u=t.match.params.albumID;if(!o||!a)return Object(s.jsx)("div",{className:st.a["photos-container"],children:Object(s.jsx)(L,{})});if(!e[c]||!e[c].albums[u])return Object(s.jsx)(d,{});var i=e[c].albums[u].photos;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v,{target:"\u0430\u043b\u044c\u0431\u043e\u043c\u0430\u043c",href:"/user-".concat(c,"-albums")}),n?Object(s.jsx)(Q,{url:n.url,nextPhoto:function(t){var e=n.index,s=t.target.getAttribute("direction");"Next"===s?(e===i.length&&(e=0),r({url:i[e].url,index:e+1})):"Prev"===s&&(1===e&&(e=i.length+1),r({url:i[e-2].url,index:e-1}))},closePhoto:function(){r(null)},currentPhotoNumber:n.index,numberPhotosInAlbum:i.length}):null,Object(s.jsx)(H,{photos:i,setPhotoData:r})]})}));var ot=Object(c.b)((function(t){return{users:t.users}}),(function(t){return{usersLoad:function(){return t(function(){var t=Object(G.a)(q.a.mark((function t(e){var n,s,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:if(n=t.sent,s=null,!n.ok){t.next=9;break}return t.next=8,n.json();case 8:s=t.sent;case 9:r={},s.forEach((function(t){return r[t.id]={name:t.name,albums:{}}})),e(et(r)),e({type:X}),e(tt(r)),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}())}}}))((function(t){var e=t.usersLoad;return Object(r.useEffect)((function(){e()}),[e]),Object(s.jsxs)("main",{children:[Object(s.jsx)("header",{children:Object(s.jsx)(u.b,{className:b.a["go-home"],to:"/",children:"Photo Gallery Name"})}),Object(s.jsx)("div",{className:b.a.content,children:Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{path:"/",exact:!0,component:E}),Object(s.jsx)(i.a,{path:"/user-:authorID-albums",component:g}),Object(s.jsx)(i.a,{path:"/user-:authorID-album-:albumID",component:rt}),Object(s.jsx)(i.a,{render:d})]})}),Object(s.jsx)("footer",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \xa9 \u0418\u043c\u044f \u0412\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430"})]})})),at=n(14),ct={users:{},currentPhoto:null,usersIsLoad:!1,photosIsLoad:!1},ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K:return Object(V.a)(Object(V.a)({},t),{},{users:e.payload});case W:return Object(V.a)(Object(V.a)({},t),{},{currentPhoto:e.payload});case X:return Object(V.a)(Object(V.a)({},t),{},{usersIsLoad:!0});case $:return Object(V.a)(Object(V.a)({},t),{},{photosIsLoad:!0});default:return t}},it=n(39),lt=n(40),bt=n(41),jt=n(43),ht=n(42),dt=function(t){Object(jt.a)(n,t);var e=Object(ht.a)(n);function n(){return Object(lt.a)(this,n),e.apply(this,arguments)}return Object(bt.a)(n,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(r.Component),pt=Object(i.f)(dt),mt=Object(at.c)(ut,Object(at.a)(it.a));a.a.render(Object(s.jsx)(c.a,{store:mt,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(pt,{children:Object(s.jsx)(ot,{})})})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.b98da973.chunk.js.map