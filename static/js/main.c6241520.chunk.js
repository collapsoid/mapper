(this.webpackJsonpmapper=this.webpackJsonpmapper||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),s=n(1),u=(n(28),n(6)),i=(n(29),n(2)),l=n(17),p=function(e){return{type:"ADD_PLACE",payload:Object(i.a)({},e,{id:Object(l.a)()})}},m=function(e){return{type:"DELETE_PLACE",id:e}},d=function(e){return{type:"GET_YMAPS_API",YMapsAPI:e}},f=function(e){return{type:"GET_MAP_INSTANCE",mapInstance:e}},E=function(e,t){return{type:"GET_PLACE_COORDINATES",payload:{name:e,coordinates:t}}},b=(n(30),function(e){var t=e.className,n=e.text;return c.a.createElement("div",{className:"".concat(t," popup")},c.a.createElement("p",{className:"popup__text"},n))}),O=Object(s.b)((function(e){return{places:e.places}}),{addPlace:p})((function(e){var t=e.places,n=e.addPlace,r=Object(a.useState)(""),o=Object(u.a)(r,2),s=o[0],i=o[1],l=Object(a.useState)(!1),p=Object(u.a)(l,2),m=p[0],d=p[1],f=function(e){return-1!==t.findIndex((function(t){return t.name.toLowerCase()===e.toLowerCase().trim()}))};return c.a.createElement("div",{className:"input"},c.a.createElement("input",{className:"search-bar".concat(m?" bad-name":""),type:"text",value:s,placeholder:"Where to go?",onChange:function(e){var t=e.target.value;i(t),f(t)?d(!0):d(!1)},onKeyDown:function(e){return"Enter"===e.key?function(){var e={name:s.trim(),isUserDefined:!!s.startsWith("!")};if(!m)return i(""),n(e)}():null}}),c.a.createElement(b,{className:"input__popup",text:"Enter the name of the city or type something like !MyPlacemark to set your own mark label"}))})),g=(n(31),n(32),Object(s.b)(null,{deletePlace:m})((function(e){var t=e.name,n=e.id,a=e.isUserDefined,r=e.deletePlace,o=a?" place_user-defined":"";return c.a.createElement("div",{className:"places-list__place".concat(o)},t,c.a.createElement("div",{className:"place__remove-button",onClick:function(){return r(n)}},"x"))}))),j=Object(s.b)((function(e){return{places:e.places}}),null)((function(e){var t=e.places.map((function(e){return c.a.createElement(g,Object.assign({},e,{key:e.id}))}));return c.a.createElement("div",{className:"places-list"},t)})),_=n(5),I=(n(33),Object(s.b)((function(e){return{placemarks:e.placemarks,mapInstance:e.YMaps.mapInstance}}),{geocoder:function(e,t){return function(n,a){var c=a().YMaps,r=c.YMapsAPI,o=c.mapInstance;return t?n(E(e,o.getCenter())):r.geocode(e).then((function(t){var a=t.geoObjects.get(0).geometry._coordinates;return n(E(e,a))}))}}})((function(e){var t=e.name,n=e.isUserDefined,r=e.coordinates,o=e.geocoder,s=e.mapInstance,u={hintContent:t},i={draggable:!!n,preset:n?"islands#greenIcon":"islands#lightBlueIcon"};return Object(a.useEffect)((function(){o(t,n)}),[t,n,o]),!n&&r&&s.setCenter(r,12),c.a.createElement(_.b,{modules:["geoObject.addon.hint"],geometry:r,properties:u,options:i})}))),v=Object(s.b)((function(e){var t=e.places,n=e.YMaps,a=n.mapState;return{places:t,mapState:a,mapInstance:n.mapInstance}}),{getYMapsAPI:d,getMapInstance:f})((function(e){var t=e.getYMapsAPI,n=e.getMapInstance,r=e.places,o=e.mapState,s=Object(a.useState)(null),i=Object(u.a)(s,2),l=i[0],p=i[1],m=r.map((function(e){return c.a.createElement(I,Object.assign({},e,{key:e.id}))}));return Object(a.useEffect)((function(){l&&n(l)}),[l,n]),c.a.createElement(_.c,{query:{load:["geocode"],apikey:"bafd3fc2-1269-47d7-a937-5c6cea882e91"}},c.a.createElement(_.a,{className:"map",state:o,onLoad:function(e){return t(e)},instanceRef:function(e){return p(e)}},m))})),y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement(j,null),c.a.createElement(v,null))},A=n(3),P=n(15),h=n(16),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLACE":return[].concat(Object(h.a)(e),[Object(i.a)({},t.payload)]);case"DELETE_PLACE":return e.filter((function(e){return e.id!==t.id}));case"GET_PLACE_COORDINATES":return e.map((function(e){return e.name===t.payload.name?Object(i.a)({},e,{coordinates:t.payload.coordinates}):e}));default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mapState:{center:[55.75,37.57],zoom:9}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_YMAPS_API":return Object(i.a)({},e,{YMapsAPI:t.YMapsAPI});case"GET_MAP_INSTANCE":return Object(i.a)({},e,{mapInstance:t.mapInstance});case"SET_MAP_STATE":return Object(i.a)({},e,{mapState:Object(i.a)({},e.mapState,{},t.mapState)});default:return e}},C=Object(A.d)(Object(A.c)({places:M,YMaps:S}),Object(A.a)(P.a));o.a.render(c.a.createElement(s.a,{store:C},c.a.createElement(y,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6241520.chunk.js.map