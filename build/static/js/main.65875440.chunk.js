(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(t,e,n){t.exports={home_cardDiv:"home_home_cardDiv__2ZBmB",home_allCards:"home_home_allCards__1c7HC",home_cardEach:"home_home_cardEach__3C0MS",card_cardDiv:"home_card_cardDiv__hwGCJ",home_cardFlex:"home_home_cardFlex__YIg1O",home_select:"home_home_select__3IyRp",activityCard_btnHome:"home_activityCard_btnHome__u3uvK"}},20:function(t,e,n){t.exports={DetailCountryCard_main:"detailCountryCard_DetailCountryCard_main__3ztPW",div_DetailCountryCard:"detailCountryCard_div_DetailCountryCard__1bPeG",DetailCountryCard_card:"detailCountryCard_DetailCountryCard_card__331Np",DetailCountryCard_btnsMain:"detailCountryCard_DetailCountryCard_btnsMain__3EKfJ",DetailCountryCard_btnHome:"detailCountryCard_DetailCountryCard_btnHome__clgBZ",DetailCountryCard_btnActivity:"detailCountryCard_DetailCountryCard_btnActivity__2nu-5"}},30:function(t,e,n){t.exports={home_searchBar:"searchBar_home_searchBar__1Iczy",searchBar_errorDiv:"searchBar_searchBar_errorDiv__3uSRo",home_searchInput:"searchBar_home_searchInput__2pHpi"}},33:function(t,e,n){t.exports={paginator_nav:"paginate_paginator_nav__10in0",paginator_ul:"paginate_paginator_ul__29-k4",paginatorNumbers_li:"paginate_paginatorNumbers_li__2wvNq"}},36:function(t,e,n){t.exports={landing_cardDiv:"landing_landing_cardDiv__1gj3e",landing_button:"landing_landing_button__3iC33"}},38:function(t,e,n){t.exports={activity_actvMainDiv:"activity_activity_actvMainDiv__kNa8c",activity_actvEachDiv:"activity_activity_actvEachDiv__4Hks6"}},49:function(t,e,n){},50:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(26),i=n.n(r),o=(n(49),n(50),n(14)),s=n(6),l=n(36),u=n.n(l),j=n(0);var d=function(){return Object(j.jsx)("div",{className:"".concat(u.a.landing_cardDiv),children:Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsxs)("button",{className:"".concat(u.a.landing_button),children:[" ",Object(j.jsx)("p",{children:"Home"})]})})})},b=n(10),p=n(7),m=n(13),h=n(19),_=n(65),O="GET_ALL_COUNTRIES",f="GET_ONE_COUNTRY",v="FILTER_BY_CONTINENT",x="ORDER_BY_ALPHABET",y="ORDER_BY_POPULATION",C="DETAIL_CARD_BY_ID",g="POST_ACTIVITY",A="GET_ACTIVITY",N="GET_ALL_ACTIVITIES",D="FAILURE",E=function(){return function(){var t=Object(h.a)(Object(m.a)().mark((function t(e){var n;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("/country");case 3:n=t.sent,e({type:O,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e({type:D,payload:t.t0.response.data.msg});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},B=function(t,e){return function(){var n=Object(h.a)(Object(m.a)().mark((function n(a){var c;return Object(m.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.a.get("/country?name=".concat(t));case 3:c=n.sent,a({type:f,payload:c.data,payloadCont:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a({type:D,payload:n.t0.response.data.msg});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(h.a)(Object(m.a)().mark((function e(n){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("/country/".concat(t));case 3:a=e.sent,n({type:C,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:D,payload:e.t0.response.data.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},I=function(t){return function(e){e({type:v,payload:t})}},w=function(t){return function(e){e({type:x,payload:t})}},T=function(t){return function(e){e({type:y,payload:t})}},k=function(t){return function(){var e=Object(h.a)(Object(m.a)().mark((function e(n){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("/activity",t);case 3:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),n({type:D,payload:e.t0.response.data.msg});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var t=Object(h.a)(Object(m.a)().mark((function t(e){var n;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("/activity");case 2:n=t.sent,e({type:N,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(t){return function(){var e=Object(h.a)(Object(m.a)().mark((function e(n){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:A,payload:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=n(30),P=n.n(M);function R(t){var e=t.contFilter,n=Object(p.b)();""===e&&(e="All continents");return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"SearchBar  "}),Object(j.jsx)("input",{type:"text",onChange:function(t){n(B(t.target.value,e))},className:"".concat(P.a.home_searchInput)})]})})}var Z=n(33),F=n.n(Z);var Y=function(t){for(var e=t.countryPerPage,n=t.allCountries,a=t.paginator,c=[],r=1;r<=Math.ceil(n/e);r++)c.push(r);return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"".concat(F.a.paginator_nav),children:Object(j.jsx)("ul",{className:"".concat(F.a.paginator_ul),children:c&&c.map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("button",{type:"button",className:"".concat(F.a.paginatorNumbers_li),onClick:function(){return a(t)},children:[" ",t]})," "]},t)}))})})})},q=n(16),G=n.n(q);function U(t){var e=t.country;return Object(j.jsx)("div",{className:"".concat(G.a.home_allCards),children:e.length&&e.map((function(t){return Object(j.jsx)("div",{children:Object(j.jsx)(o.b,{to:"/country/".concat(t.id),style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"".concat(G.a.home_cardEach),children:[Object(j.jsx)("h1",{children:t.name}),Object(j.jsx)("img",{src:t.flag,alt:"flag",height:"150px",width:"210px"}),Object(j.jsxs)("p",{children:["Continent: ",t.continent]})]},"".concat(t.id))})},"".concat(t.id))}))})}function J(){var t=Object(p.c)((function(t){return t.error}));return Object(j.jsxs)("div",{className:"".concat(P.a.searchBar_errorDiv),children:[""!==t&&Object(j.jsx)("p",{children:t}),console.log(t)]})}var V=n(8),z=n.n(V);var W=function(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.allCountries})),n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(b.a)(s,2),u=(l[0],l[1]),d=Object(a.useState)(""),m=Object(b.a)(d,2),h=m[0],_=m[1],O=Object(p.c)((function(t){return t.error})),f=Object(p.c)((function(t){return t.allActivities})),v=Object(a.useState)(1),x=Object(b.a)(v,2),y=x[0],C=x[1],g=15*y,A=g-15,N=e.slice(A,g),D=[];f.map((function(t){return D.push(t.name)}));var B=D.filter((function(t,e){return D.indexOf(t)===e})),S=N.length&&N.map((function(t){return{name:t.name,flag:t.urlFlag,continent:t.continent,id:t.id}}));return Object(a.useEffect)((function(){t(E()),t(H())}),[t]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"".concat(G.a.home_cardDiv),children:[Object(j.jsx)(R,{contFilter:h,className:"".concat(G.a.home_select)}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{onChange:function(e){t(I(e.target.value,h)),t(w("Z-A"===r?"Z-A":"A-Z")),_(e.target.value)},className:"".concat(G.a.home_select),children:[Object(j.jsx)("option",{value:"All continents",children:"All continents"},"All continents"),Object(j.jsx)("option",{value:"Africa",children:"Africa"},"Africa"),Object(j.jsx)("option",{value:"Antarctica",children:"Antarctica"},"Antarctica"),Object(j.jsx)("option",{value:"Europe",children:"Europe"},"Europe"),Object(j.jsx)("option",{value:"North America",children:"North America"},"North America"),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"},"Oceania"),Object(j.jsx)("option",{value:"South America",children:"South America"},"South America"),Object(j.jsx)("option",{value:"Asia",children:"Asia"},"Asia")]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{defaultValue:"A-Z",onChange:function(e){t(w(e.target.value)),i(e.target.value)},className:"".concat(G.a.home_select),children:[Object(j.jsx)("option",{value:"A-Z",children:"A-Z"},"ascendent"),Object(j.jsx)("option",{value:"Z-A",children:"Z-A"},"descendent")]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{onChange:function(e){t(T(e.target.value)),u(e.target.value)},className:"".concat(G.a.home_select),children:[Object(j.jsx)("option",{value:"population",name:"population",children:"Population"}),Object(j.jsx)("option",{value:"min",children:"Min"},"min"),Object(j.jsx)("option",{value:"max",children:"Max"},"max")]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{onChange:function(e){console.log(e.target.value),t(L(e.target.value))},className:"".concat(G.a.home_select),children:[Object(j.jsx)("option",{value:"1",name:"default",children:"Activity"}),B.map((function(t){return Object(j.jsxs)("option",{value:t,name:"activity",children:[t," "]},t)}))]})}),Object(j.jsx)("div",{children:Object(j.jsx)(o.b,{to:"/form",children:Object(j.jsx)("button",{className:"".concat(z.a.home_btn_createActivity),children:Object(j.jsx)("p",{children:" Create activity"})})})}),Object(j.jsx)(Y,{countryPerPage:15,allCountries:e.length,paginator:function(t){C(t)}})]}),O?Object(j.jsx)(J,{}):Object(j.jsx)(U,{country:S})]})},$=n(43),K=n(24),Q=n(4),X=new RegExp("^[a-zA-Z]{3,}$"),tt=new RegExp("^[1-5]$"),et=new RegExp("^[1-9]$"),nt=function(t){var e={};return X.test(t.name)?e.name="":e.name="Name required",t.difficulty?e.difficulty="":e.difficulty="A number is required",tt.test(t.difficulty)?e.difficulty="":e.difficulty="value must be under 5",et.test(t.duration)?e.duration="":e.duration="value must be under 10",e};var at=function(){var t=Object(p.b)(),e=Object(s.e)(),n=Object(p.c)((function(t){return t.allCountries})),c=Object(a.useState)({}),r=Object(b.a)(c,2),i=r[0],l=r[1],u=Object(a.useState)({name:"",difficulty:"",duration:"",season:"",countries:[]}),d=Object(b.a)(u,2),m=d[0],h=d[1];Object(a.useEffect)((function(){t(E())}),[t]);var _=function(t){h(Object(Q.a)(Object(Q.a)({},m),{},Object(K.a)({},t.target.name,t.target.value))),l(nt(Object(Q.a)(Object(Q.a)({},m),{},Object(K.a)({},t.target.name,t.target.value))))};return Object(j.jsxs)("div",{className:"".concat(z.a.form_mainDiv),children:[Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:"".concat(z.a.form_toHomeBtn),children:"Home"})}),Object(j.jsx)("h1",{children:"Create your activity"}),Object(j.jsx)("form",{onSubmit:function(n){n.preventDefault(),console.log(m),m.name&&m.difficulty&&m.duration&&m.season&&""!==m.countries?(t(k(m)),alert("Activity created succesfully"),e.push("/home")):(console.log(i),alert("some information is missing")),h({name:"",difficulty:"",duration:"",season:"",countries:[]})},children:Object(j.jsxs)("div",{className:"".concat(z.a.form_formContainer),children:[Object(j.jsxs)("div",{className:"".concat(z.a.form_inputs),children:[Object(j.jsx)("label",{children:"Name:"}),Object(j.jsx)("input",{type:"text",value:m.name,name:"name",onChange:_}),i.name&&Object(j.jsx)("p",{className:"".concat(z.a.form_error),children:i.name})]}),Object(j.jsxs)("div",{className:"".concat(z.a.form_inputs),children:[Object(j.jsx)("label",{children:"Difficulty:"}),Object(j.jsx)("input",{type:"text",value:m.difficulty,name:"difficulty",onChange:_}),i.difficulty&&Object(j.jsx)("p",{className:"".concat(z.a.form_error),children:i.difficulty})]}),Object(j.jsxs)("div",{className:"".concat(z.a.form_inputs),children:[Object(j.jsx)("label",{children:"Duration:"}),Object(j.jsx)("input",{type:"text",value:m.duration,name:"duration",onChange:_}),i.duration&&Object(j.jsx)("p",{className:"".concat(z.a.form_error),children:i.duration})]}),Object(j.jsxs)("div",{className:"".concat(z.a.form_checks),children:[Object(j.jsx)("label",{children:"Season: "}),Object(j.jsxs)("select",{onChange:function(t){t.target.value&&(h(Object(Q.a)(Object(Q.a)({},m),{},{season:t.target.value})),console.log(t.target.value))},required:!0,children:[Object(j.jsx)("option",{value:"",hidden:!0,children:"Select season"}),["Winter","Spring","Autumn","Summer"].map((function(t){return Object(j.jsx)("option",{value:t,name:"season",children:t},t)}))]})]}),Object(j.jsxs)("div",{className:"".concat(z.a.form_select),children:[Object(j.jsxs)("select",{onChange:function(t){t.target.value&&h(Object(Q.a)(Object(Q.a)({},m),{},{countries:[].concat(Object($.a)(m.countries),[t.target.value])}))},children:["Countries:",Object(j.jsx)("option",{value:"",name:"countSelect",children:"Countries"}),null===n||void 0===n?void 0:n.map((function(t){return Object(j.jsx)("option",{value:t.id,name:"countries",children:t.name},t.id)}))]}),Object(j.jsx)("div",{className:"".concat(z.a.form_ul),children:Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[m.countries.map((function(t){return Object(j.jsx)("div",{onClick:function(){return e=t,void h(Object(Q.a)(Object(Q.a)({},m),{},{countries:m.countries.filter((function(t){return t!==e}))}));var e},className:"".concat(z.a.form_ulLi),children:t},t)}))," "]})})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Create activity"})})]})]})})]})},ct=n(20),rt=n.n(ct),it=n(38),ot=n.n(it);var st=function(t){var e,n=t.oneById;return Object(j.jsx)("div",{className:"".concat(ot.a.activity_actvMainDiv),children:null===(e=n.activities)||void 0===e?void 0:e.map((function(t){return Object(j.jsxs)("div",{className:"".concat(ot.a.activity_actvEachDiv),children:[Object(j.jsx)("h4",{children:"Activity: "})," ",Object(j.jsx)("p",{children:t.name}),Object(j.jsxs)("p",{children:["Difficulty: ",t.difficulty]}),Object(j.jsxs)("p",{children:["Duration: ",t.duration]}),Object(j.jsxs)("p",{children:["Season: ",t.season]})]},t.id)}))})};function lt(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.oneById})),n=Object(a.useState)(!1),c=Object(b.a)(n,2),r=c[0],i=c[1],l=Object(s.f)().id;return Object(a.useEffect)((function(){t(S(l))}),[t,l]),Object(j.jsxs)("div",{className:"".concat(rt.a.DetailCountryCard_main),children:[Object(j.jsxs)("div",{className:"".concat(rt.a.DetailCountryCard_btnsMain),children:[Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:"".concat(rt.a.DetailCountryCard_btnHome),children:"Home"})}),Object(j.jsx)("button",{onClick:function(){i(!r)},className:"".concat(rt.a.DetailCountryCard_btnActivity),children:" Show activity "})]}),Object(j.jsxs)("div",{className:"".concat(rt.a.div_DetailCountryCard),children:[Object(j.jsxs)("div",{className:"".concat(rt.a.DetailCountryCard_card),children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsxs)("h2",{children:["Capital: ",e.capital]}),Object(j.jsxs)("p",{children:["Id:",e.id]}),Object(j.jsx)("img",{src:e.urlFlag,alt:"flag",height:"150px",width:"210px"}),Object(j.jsxs)("p",{children:["Continent: ",e.continent]}),Object(j.jsxs)("p",{children:["Subregion: ",e.subregion]}),Object(j.jsxs)("p",{children:["Area: ",e.area]}),Object(j.jsxs)("p",{children:["Population: ",e.population]})]}),r&&Object(j.jsx)(st,{oneById:e})]},e.id)]})}var ut=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:d}),Object(j.jsx)(s.a,{exact:!0,path:"/home",component:W}),Object(j.jsx)(s.a,{exact:!0,path:"/form",component:at}),Object(j.jsx)(s.a,{exact:!0,path:"/country/:id",component:lt})]})})},jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},dt=n(31),bt=n(41),pt=n(42),mt={allCountries:[],oneCountry:[],copyAllCountries:[],oneById:[],activity:[],allActivities:[],error:"",payloadCountries:[]};var ht=Object(dt.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(Q.a)(Object(Q.a)({},t),{},{allCountries:e.payload,copyAllCountries:e.payload,error:""});case D:return Object(Q.a)(Object(Q.a)({},t),{},{error:e.payload});case f:var n=e.payload,a=e.payloadCont,c=n.filter((function(t){return t.continent===a}));return Object(Q.a)(Object(Q.a)({},t),{},{allCountries:"All continents"!==a?c:e.payload,error:""});case C:return Object(Q.a)(Object(Q.a)({},t),{},{oneById:e.payload,error:""});case v:var r=t.copyAllCountries,i=r.filter((function(t){return t.continent===e.payload}));return Object(Q.a)(Object(Q.a)({},t),{},{allCountries:"All continents"===e.payload?r:i});case x:var o=t.allCountries,s="A-Z"===e.payload?o.sort((function(t,e){return t.name>e.name?1:e.name>t.name?-1:0})):o.sort((function(t,e){return t.name>e.name?-1:e.name>t.name?1:0}));return Object(Q.a)(Object(Q.a)({},t),{},{allCountries:s});case y:var l=t.allCountries,u="min"===e.payload?l.sort((function(t,e){return t.population>e.population?1:e.population>t.population?-1:0})):l.sort((function(t,e){return t.population<e.population?1:e.population<t.population?-1:0}));return Object(Q.a)(Object(Q.a)({},t),{},{allCountries:u});case g:return Object(Q.a)({},t);case A:var j=t.copyAllCountries.filter((function(t){return t.activities.find((function(t){return t.name===e.payload}))}));return Object(Q.a)(Object(Q.a)({},t),{},{allCountries:j});case N:return Object(Q.a)(Object(Q.a)({},t),{},{allActivities:e.payload});default:return t}}),Object(bt.composeWithDevTools)(Object(dt.applyMiddleware)(pt.a)));_.a.defaults.baseURL="https://countriesback-production-9d51.up.railway.app/",i.a.render(Object(j.jsxs)(p.a,{store:ht,children:[Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(ut,{})}),","]}),document.getElementById("root")),jt()},8:function(t,e,n){t.exports={home_btn_createActivity:"form_home_btn_createActivity__1SMLJ",form_mainDiv:"form_form_mainDiv__xxOt-",form_formContainer:"form_form_formContainer__1_Mqh",form_inputs:"form_form_inputs__1EHZc",form_checks:"form_form_checks__1rdvv",form_select:"form_form_select__3Z7ZP",form_ul:"form_form_ul__1d6qD",form_ulLi:"form_form_ulLi__DBxBO",form_error:"form_form_error__iUOAC",form_toHomeBtn:"form_form_toHomeBtn__2xMOf"}}},[[64,1,2]]]);
//# sourceMappingURL=main.65875440.chunk.js.map