(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{42:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),r=s(31),n=s.n(r),i=(s(42),s(3)),l=s(6),o=s(21),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},u=s(1),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},p=Object(a.createContext)(b),d=function(e){var t=e.children,s=Object(a.useReducer)(j,b),c=Object(i.a)(s,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(u.jsx)(p.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:n},children:t})},_=s(13),m=s(33),O=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),s=t[0],r=t[1];c.a.useEffect((function(){window.addEventListener("scroll",n)}),[]);var n=function(){window.scrollY>120?r(!0):r(!1)},o=Object(a.useContext)(p),j=o.user,b=o.dispatch,d=function(){b({type:"LOGOUT"})};return Object(u.jsx)("div",{className:"navbar ".concat(s?"whiteBg":"transparent"," "),children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"navbar__container",children:[Object(u.jsxs)("div",{className:"navbar__left",children:[Object(u.jsx)(_.c,{className:"navbar__left--social"}),Object(u.jsx)(_.b,{className:"navbar__left--social"}),Object(u.jsx)(_.a,{className:"navbar__left--social"})]}),Object(u.jsx)("div",{className:"navbar__center",children:Object(u.jsxs)("ul",{className:"navbar__center--items",children:[Object(u.jsx)("li",{className:"navbar__center--items__item",children:Object(u.jsx)(l.b,{style:{color:"#ECD662"},className:"navbar__center--items__item",to:"/",children:"ANASAYFA"})}),Object(u.jsx)("li",{className:"navbar__center--items__item",children:Object(u.jsx)(l.b,{className:"navbar__center--items__item",to:"/write",children:"YAZ"})}),Object(u.jsx)("li",{className:"navbar__right--items__item",onClick:d,children:j&&"\xc7IKI\u015e"})]})}),Object(u.jsx)("div",{className:"navbar__right",children:j?Object(u.jsx)(l.b,{to:"/settings",children:Object(u.jsx)("img",{src:"http://localhost:5000/images/"+j.profilePic,alt:"user-image"})}):Object(u.jsxs)("ul",{className:"navbar__right--items",children:[Object(u.jsx)("li",{className:"navbar__right--items__item",children:Object(u.jsx)(l.b,{className:"link",to:"/login",children:"G\u0130R\u0130\u015e YAP"})}),Object(u.jsx)("li",{className:"navbar__right--items__item",children:Object(u.jsx)(l.b,{className:"link",to:"/register",children:"KAYDOL"})}),Object(u.jsx)("li",{className:"navbar__right--items__item",children:Object(u.jsx)(m.a,{className:"search"})}),Object(u.jsx)("li",{className:"navbar__right--items__item",onClick:d,children:j&&"\xc7IKI\u015e"})]})})]})})})},h=s(4),x=s.n(h),f=s(9),g=s(7),v=s.n(g);function N(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(p),c=s.dispatch,r=s.isFetching,n=function(){var s=Object(f.a)(x.a.mark((function s(a){var r;return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,v.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:r=s.sent,c({type:"LOGIN_SUCCESS",payload:r.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("span",{className:"login__title",children:"Giri\u015f Yap"}),Object(u.jsxs)("form",{className:"login__form",onSubmit:n,children:[Object(u.jsx)("label",{children:"Kullan\u0131c\u0131 Ad\u0131"}),Object(u.jsx)("input",{type:"text",placeholder:"Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 bu alana yazabilirsiniz.",ref:e}),Object(u.jsx)("label",{children:"\u015eifre"}),Object(u.jsx)("input",{type:"password",placeholder:"\u015eifrenizi bu alana girebilirsiniz.",ref:t}),Object(u.jsx)("button",{class:"btn login__form--loginbtn",type:"submit",disabled:r,children:"Giri\u015f Yap"})]}),Object(u.jsx)("button",{type:"button",class:"btn btn-outline-primary login__form--registerbtn",children:Object(u.jsx)(l.b,{className:"login__form--registerbtn__link",to:"/register",children:"Kaydol"})})]})}function w(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"header__titles",children:[Object(u.jsx)("span",{className:"header__titles--sm",children:"React"}),Object(u.jsx)("span",{className:"header__titles--lg ",children:"Blog"})]}),Object(u.jsx)("img",{className:"header__image",src:"",alt:""})]})}function S(e){var t=e.post;return Object(u.jsxs)("div",{className:"Post col-md-5",children:[t.photo&&Object(u.jsx)("img",{className:"Post__image",src:"http://localhost:5000/images/"+t.photo,alt:""}),Object(u.jsxs)("div",{className:"Post__info",children:[Object(u.jsx)("div",{className:"Post__info--categories",children:t.categories.map((function(e){return Object(u.jsxs)("span",{className:"Post__info--categories__postcat",children:[e.name," "]})}))}),Object(u.jsxs)(l.b,{to:"/post/".concat(t._id),className:"Post__info--postTitle",children:[Object(u.jsx)("div",{className:"Post__info--categories",children:t.categories}),Object(u.jsx)("span",{className:"Post__info--postTitle",children:t.title})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:"Post__info--postDate",children:new Date(t.createdAt).toDateString()})]}),Object(u.jsx)("p",{className:"Post__description",children:t.desc})]})}var y=function(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(S,{post:e})}))})};function k(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"Sidebar d-none d-xl-block d-xl-none",children:[Object(u.jsxs)("div",{className:"Sidebar__item",children:[Object(u.jsx)("span",{className:"Sidebar__item--title",children:"HAKKIMDA"}),Object(u.jsx)("img",{src:"https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",class:"",alt:"aboutme"}),Object(u.jsx)("p",{children:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'})]}),Object(u.jsxs)("div",{className:"Sidebar__item",children:[Object(u.jsx)("span",{className:"Sidebar__item--title",children:"KATEGOR\u0130LER"}),Object(u.jsx)("ul",{className:"Sidebar__item--list",children:s.map((function(e){return Object(u.jsx)(l.b,{to:"/?cat=".concat(e.name),className:"Sidebar__item--list__listItem",children:Object(u.jsx)("li",{className:"Sidebar__item--list__listItem--link",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"Sidebar__item",children:[Object(u.jsx)("span",{className:"Sidebar__item--title",children:"TAK\u0130P"}),Object(u.jsxs)("div",{className:"Sidebar__item--social",children:[Object(u.jsx)(_.c,{className:"Sidebar__item--social__icon"}),Object(u.jsx)(_.b,{className:"Sidebar__item--social__icon"}),Object(u.jsx)(_.a,{className:"Sidebar__item--social__icon"})]})]})]})}var C=s(5);function A(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(C.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/posts"+r);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,{}),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(y,{posts:s}),Object(u.jsx)(k,{})]})]})}function F(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),o=n[0],j=n[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),d=p[0],_=p[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),h=O[0],g=O[1],N=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!1),e.prev=2,e.next=5,v.a.post("/auth/register",{username:s,email:o,password:d});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),g(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("span",{className:"register__title",children:"Kaydol"}),Object(u.jsxs)("form",{className:"register__form",onSubmit:N,children:[Object(u.jsx)("label",{children:"Kulla\u0131c\u0131 Ad\u0131"}),Object(u.jsx)("input",{type:"text",placeholder:"Kullan\u0131c\u0131 Ad\u0131n\u0131z..",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",placeholder:"Email Adresiniz..",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("label",{children:"\u015eifre"}),Object(u.jsx)("input",{type:"password",className:"",placeholder:"\u015eifreniz..",onChange:function(e){return _(e.target.value)}}),Object(u.jsx)("button",{class:"btn  register__form--registerbtn",type:"submit",children:"Kaydol"})]}),Object(u.jsx)("button",{type:"button",class:"btn register__form--loginbtn",children:Object(u.jsx)(l.b,{className:"register__form--registerbtn__linkk",to:"/login",children:"Giri\u015f Yap"})}),h&&Object(u.jsx)("span",{style:{fontSize:19,paddingTop:9,color:"#b95258"},children:"Bir \u015feyler yanl\u0131\u015f gitti.."})]})}var I=s(34);function E(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),l=n[0],o=n[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),d=b[0],_=b[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),h=O[0],g=O[1],N=Object(a.useState)(!1),w=Object(i.a)(N,2),S=w[0],y=w[1],C=Object(a.useContext)(p),A=C.user,F=C.dispatch,E=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,c,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),F({type:"UPDATE_START"}),a={userId:A._id,username:l,email:d,password:h},!s){e.next=16;break}return c=new FormData,r=Date.now()+s.name,c.append("name",r),c.append("file",s),a.profilePic=r,e.prev=9,e.next=12,v.a.post("/upload",c);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,v.a.put("/users/"+A._id,a);case 19:n=e.sent,y(!0),F({type:"UPDATE_SUCCESS",payload:n.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),F({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"settings__wrapper",children:[Object(u.jsxs)("div",{className:"settings__wrapper--title",children:[Object(u.jsx)("span",{className:"settings__wrapper--title__update",children:"Hesab\u0131n\u0131 G\xfcncelle"}),Object(u.jsx)("span",{className:"settings__wrapper--title__delete",children:"Hesab\u0131n\u0131 Sil"})]}),Object(u.jsxs)("form",{className:"settings__wrapper--form",onSubmit:E,children:[Object(u.jsx)("label",{children:"Profil Resmi"}),Object(u.jsxs)("div",{className:"settings__wrapper--form__profilepicture",children:[Object(u.jsx)("img",{classNme:"",src:s?URL.createObjectURL(s):"http://localhost:5000/images/"+A.profilePic,alt:"userProfile"}),Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)(I.a,{className:"settings__wrapper--form__profilepicture__icon"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(u.jsx)("label",{children:"Kullan\u0131c\u0131 Ad\u0131"}),Object(u.jsx)("input",{type:"text",placeholder:A.username,onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",placeholder:A.email,onChange:function(e){return _(e.target.value)}}),Object(u.jsx)("label",{children:"\u015eifre"}),Object(u.jsx)("input",{type:"password",onChange:function(e){return g(e.target.value)}}),Object(u.jsx)("button",{type:"submit",class:"btn btn-info settings__wrapper--form__btn",children:"G\xfcncelle"}),S&&Object(u.jsx)("span",{style:{color:"green",fontSize:"18px",marginTop:"20px",textAlign:"center"},children:"Hesap bilgileriniz ba\u015far\u0131yla g\xfcncellendi."})]})]}),Object(u.jsx)(k,{})]})}var P=s(35),T=s(36);function D(){var e=Object(C.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(i.a)(t,2),c=s[0],r=s[1],n=Object(a.useContext)(p).user,o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],_=Object(a.useState)(""),m=Object(i.a)(_,2),O=m[0],h=m[1],g=Object(a.useState)(!1),N=Object(i.a)(g,2),w=N[0],S=N[1];Object(a.useEffect)((function(){(function(){var t=Object(f.a)(x.a.mark((function t(){var s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/posts/"+e);case 2:s=t.sent,r(s.data),d(s.data.title),h(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var y=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/posts/".concat(c._id),{data:{username:n.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.put("/posts/".concat(c._id),{username:n.username,title:b,desc:O});case 3:S(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlepost",children:Object(u.jsxs)("div",{className:"singlepost__wrapper",children:[c.photo&&Object(u.jsx)("img",{src:"http://localhost:5000/images/"+c.photo,alt:"singlepost",className:"singlepost__wrapper--img"}),w?Object(u.jsx)("input",{type:"text",className:"singlepost__wrapper--titleInput",value:b,autoFocus:!0,onChange:function(e){return d(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlepost__wrapper--title",children:[b,c.username===(null===n||void 0===n?void 0:n.username)&&Object(u.jsxs)("div",{className:"singlepost__wrapper--edit",children:[Object(u.jsx)(P.a,{className:"singlepost__wrapper--edit__icon-edit",onClick:function(){return S(!0)}}),Object(u.jsx)(T.a,{className:"singlepost__wrapper--edit__icon-delete",onClick:y})]})]}),Object(u.jsxs)("div",{className:"singlepost__wrapper--info",children:[Object(u.jsxs)("span",{className:"singlepost__wrapper--info__author",children:["Kullan\u0131c\u0131:",Object(u.jsx)(l.b,{to:"/?user=".concat(c.username),className:"singlepost__wrapper--info__author--link",children:Object(u.jsx)("b",{children:c.username})})]}),Object(u.jsx)("span",{className:"singlepost__wrapper--info__date",children:new Date(c.createdAt).toDateString()})]}),w?Object(u.jsx)("textarea",{className:"singlepost__wrapper__descInput",value:O,onChange:function(e){return h(e.target.value)}}):Object(u.jsx)("p",{className:"singlepost__wrapper__desc",children:O}),w&&Object(u.jsx)("button",{className:"singlepost__wrapper__descBtn btn",type:"submit",onClick:k,children:"G\xfcncelle"})]})})}function R(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(D,{}),Object(u.jsx)(k,{})]})}var L=s(37);function U(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),l=n[0],o=n[1],j=Object(a.useState)("null"),b=Object(i.a)(j,2),d=b[0],_=b[1],m=Object(a.useContext)(p).user,O=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,c,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:m.username,title:s,desc:l},!d){e.next=15;break}return c=new FormData,r=Date.now()+d.name,c.append("name",r),c.append("file",d),a.photo=r,e.prev=8,e.next=11,v.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,v.a.post("/posts",a);case 18:n=e.sent,window.location.replace("/post/"+n.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"write",children:Object(u.jsxs)("form",{className:"write__Form",onSubmit:O,children:[Object(u.jsxs)("div",{className:"write__Form--formgroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)(L.a,{className:"write__Form--formgroup__icon"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return _(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Ba\u015fl\u0131k",className:"write__Form--formgroup__input",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsx)("div",{className:"write__Form--formgroup",children:Object(u.jsx)("textarea",{placeholder:"Hikayeni anlat..",type:"text",className:"write__Form--formgroup__wtext ",onChange:function(e){return o(e.target.value)}})}),Object(u.jsx)("button",{className:"write__Form--btn btn btn-outline-success",type:"submit",children:"Yay\u0131nla"})]})})}var G=function(){var e=Object(a.useContext)(p).user;return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{exact:!0,path:"/",children:Object(u.jsx)(A,{})}),Object(u.jsxs)(C.a,{path:"/register",children:[e?Object(u.jsx)(A,{}):Object(u.jsx)(F,{})," "]}),Object(u.jsx)(C.a,{path:"/login",children:e?Object(u.jsx)(A,{}):Object(u.jsx)(N,{})}),Object(u.jsx)(C.a,{path:"/write",children:e?Object(u.jsx)(U,{}):Object(u.jsx)(F,{})}),Object(u.jsx)(C.a,{path:"/settings",children:e?Object(u.jsx)(E,{}):Object(u.jsx)(F,{})}),Object(u.jsx)(C.a,{path:"/post/:postId",children:Object(u.jsx)(R,{})})]})]})};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{children:Object(u.jsx)(G,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fbf3f5d4.chunk.js.map