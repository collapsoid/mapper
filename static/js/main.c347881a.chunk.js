(this.webpackJsonpmapper=this.webpackJsonpmapper||[]).push([[0],{31:function(e,t,n){e.exports=n(48)},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),i=n(3),s=(n(41),n(5)),u=(n(42),n(2)),l=n(29),p=function(e){return{type:"ADD_PLACE",payload:Object(u.a)(Object(u.a)({},e),{},{id:Object(l.a)()})}},m=function(e){return{type:"DELETE_PLACE",id:e}},d=function(e,t){return{type:"CHANGE_PLACE_POSITION",payload:{targetIndex:e,dropIndex:t}}},f=function(e,t){return{type:"CHANGE_COORDINATES",payload:{name:e,coordinates:t}}},b=function(e){return{type:"GET_YMAPS_API",YMapsAPI:e}},E=function(e){return{type:"GET_MAP_INSTANCE",mapInstance:e}},O=(n(43),function(e){var t=e.className,n=e.text;return c.a.createElement("div",{className:"".concat(t," popup")},c.a.createElement("p",{className:"popup__text"},n))}),g=Object(i.b)((function(e){return{places:e.places}}),{geocoder:function(e,t){return function(n,a){var c=a().YMaps,r=c.YMapsAPI,o=c.mapInstance,i={name:e,isUserDefined:t};if(t){var s=o.getCenter();return n(p(Object(u.a)(Object(u.a)({},i),{},{coordinates:s})))}return r.geocode(e).then((function(e){var t=e.geoObjects.get(0).geometry._coordinates;return n(p(Object(u.a)(Object(u.a)({},i),{},{coordinates:t})))}))}}})((function(e){var t=e.places,n=e.geocoder,r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],l=Object(a.useState)(!1),p=Object(s.a)(l,2),m=p[0],d=p[1],f=function(e){return-1!==t.findIndex((function(t){return t.name.toLowerCase()===e.toLowerCase().trim()}))};return c.a.createElement("div",{className:"input"},c.a.createElement("input",{className:"search-bar".concat(m?" bad-name":""),type:"text",value:i,placeholder:"Where to go?",onChange:function(e){var t=e.target.value;u(t),f(t)?d(!0):d(!1)},onKeyDown:function(e){return"Enter"===e.key?function(){var e={name:i.trim(),isUserDefined:!!i.startsWith("!")};if(!m&&"!"!==e.name)return u(""),n(e.name,e.isUserDefined)}():null}}),c.a.createElement(O,{className:"input__popup",text:"Enter the name of the city or type something like !MyPlacemark to set your own mark label"}))})),j=n(50),I=n(28),v=(n(44),n(51)),_=(n(45),Object(i.b)((function(e){return{places:e.places}}),{changePlacePosition:d})((function(e){var t=e.children,n=e.dropIndex,a=e.changePlacePosition,r=Object(v.a)({accept:"place",drop:function(){return a(i.targetIndex,n)},collect:function(e){return{getItem:e.getItem()}}}),o=Object(s.a)(r,2),i=o[0].getItem,u=o[1];return c.a.createElement("div",{ref:u,className:"places-list__place-slot"},t)}))),y=n(52),A=(n(46),Object(i.b)(null,{deletePlace:m})((function(e){var t=e.name,n=e.id,a=e.isUserDefined,r=e.targetIndex,o=e.deletePlace,i=a?" place_user-defined":"",u=Object(y.a)({item:{type:"place",targetIndex:r}}),l=Object(s.a)(u,2)[1];return c.a.createElement("div",{className:"places-list__place".concat(i),ref:l},t,c.a.createElement("div",{className:"place__remove-button",onClick:function(){return o(n)}},"x"))}))),h=Object(i.b)((function(e){return{places:e.places}}))((function(e){var t=e.places;return c.a.createElement(j.a,{backend:I.a},c.a.createElement("div",{className:"places-list"},t.map((function(e,t){return c.a.createElement(_,{dropIndex:t,children:c.a.createElement(A,Object.assign({},e,{targetIndex:t})),key:e.id})}))))})),P=n(8),C=(n(47),Object(i.b)((function(e){return{mapInstance:e.YMaps.mapInstance}}),{changeCoordinates:f})((function(e){var t=e.name,n=e.isUserDefined,a=e.coordinates,r=e.mapInstance,o=e.changeCoordinates,i={hintContent:t},s={draggable:!!n,preset:n?"islands#greenIcon":"islands#lightBlueIcon"};return!n&&a&&r.setCenter(a,12),c.a.createElement(P.b,{modules:["geoObject.addon.hint"],geometry:a,properties:i,options:s,onGeometryChange:function(e){return o(t,e.originalEvent.target.geometry._coordinates)}})}))),N=Object(i.b)((function(e){return{places:e.places}}))((function(e){var t=e.places.map((function(e){return e.coordinates}));return c.a.createElement(P.c,{geometry:t})})),S=Object(i.b)((function(e){var t=e.places,n=e.YMaps,a=n.mapState;return{places:t,mapState:a,mapInstance:n.mapInstance}}),{getYMapsAPI:b,getMapInstance:E})((function(e){var t=e.getYMapsAPI,n=e.getMapInstance,r=e.places,o=e.mapState,i=Object(a.useState)(null),u=Object(s.a)(i,2),l=u[0],p=u[1],m=r.map((function(e){return c.a.createElement(C,Object.assign({},e,{key:e.id}))}));return Object(a.useEffect)((function(){l&&n(l)}),[l,n]),c.a.createElement(P.d,{query:{load:["geocode"],apikey:"bafd3fc2-1269-47d7-a937-5c6cea882e91"}},c.a.createElement(P.a,{className:"map",state:o,onLoad:function(e){return t(e)},instanceRef:function(e){return p(e)}},m,c.a.createElement(N,null)))})),M=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement(h,null),c.a.createElement(S,null))},x=n(6),T=n(27),D=n(19),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLACE":return[].concat(Object(D.a)(e),[Object(u.a)({},t.payload)]);case"DELETE_PLACE":return e.filter((function(e){return e.id!==t.id}));case"CHANGE_PLACE_POSITION":var n=t.payload,a=n.targetIndex,c=n.dropIndex,r=e.filter((function(t){return t.name!==e[a].name}));return[].concat(Object(D.a)(r.slice(0,c)),[e[a]],Object(D.a)(r.slice(c)));case"CHANGE_COORDINATES":var o=t.payload,i=o.name,s=o.coordinates;return e.map((function(e){return e.name===i?Object(u.a)(Object(u.a)({},e),{},{coordinates:s}):e}));default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mapState:{center:[55.75,37.57],zoom:9}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_YMAPS_API":return Object(u.a)(Object(u.a)({},e),{},{YMapsAPI:t.YMapsAPI});case"GET_MAP_INSTANCE":return Object(u.a)(Object(u.a)({},e),{},{mapInstance:t.mapInstance});case"SET_MAP_STATE":return Object(u.a)(Object(u.a)({},e),{},{mapState:Object(u.a)(Object(u.a)({},e.mapState),t.mapState)});default:return e}},L=Object(x.d)(Object(x.c)({places:Y,YMaps:k}),Object(x.a)(T.a));o.a.render(c.a.createElement(i.a,{store:L},c.a.createElement(M,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c347881a.chunk.js.map