(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,u=[];d<i.length;d++)s=i[d],r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/battle-cards/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"3a0b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n  ")],1),a("router-view")],1)},o=[],s=(a("034f"),a("2877")),i={},c=Object(s["a"])(i,r,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")},on:{click:t.startGame}})])},u=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},t._l(t.opponent.hand,function(e){return a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[t._v("\n    "+t._s(e.name)+"\n    "),a("img",{staticClass:"card-img-top",attrs:{src:e.img,height:"100px",width:"100px"},on:{click:function(a){t.activeOpponentCard(e)}}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v("Attack: "+t._s(e.attack)+" Defense: "+t._s(e.defense)+" Health: "+t._s(e.health))])])])}))},h=[],f={name:"Opponent",data(){return{}},methods:{activeOpponentCard(t){this.$store.dispatch("opponentCard",t),console.log(this.$store.state.opponentCard)}},computed:{opponent(){return this.$store.state.game.opponent},opponentDeadCards(){return this.$store.state.game.opponent.deadCards}}},v=f,g=(a("baa6"),Object(s["a"])(v,m,h,!1,null,"46d39810",null));g.options.__file="Opponent.vue";var _=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.player.hand,function(e){return a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[t._v("\n    "+t._s(e.name)+"\n    "),a("img",{staticClass:"card-img-top",attrs:{src:e.img,height:"100px",width:"100px"},on:{click:function(a){t.activePlayerCard(e)}}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v("Attack: "+t._s(e.attack)+" Defense: "+t._s(e.defense)+" Health: "+t._s(e.health))])])])}))},y=[],b={name:"Player",computed:{player(){return this.$store.state.game.player}},methods:{activePlayerCard(t){this.$store.dispatch("playerCard",t),console.log(this.$store.state.playerCard)}}},O=b,w=(a("72a5"),Object(s["a"])(O,C,y,!1,null,"1c26ea36",null));w.options.__file="Player.vue";var $=w.exports,k={name:"home",components:{Opponent:_,Player:$},methods:{startGame(){this.$store.dispatch("startGame")}}},x=k,P=Object(s["a"])(x,d,u,!1,null,null,null);P.options.__file="Home.vue";var j=P.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("Opponent")],1),a("div",{staticClass:"row"},[a("Player")],1),a("button",{on:{click:t.attack}},[t._v("attack")])])},S=[],I={name:"game",components:{Player:$,Opponent:_},computed:{game(){return this.$store.state.game},playerCard(){return this.$store.state.playerCard},opponentCard(){return this.$store.state.opponentCard}},methods:{attack(){let t={gameId:this.game.id,playerCardId:this.playerCard.id,opponentCardId:this.opponentCard.id};this.$store.dispatch("attack",t)}},data(){return{}},mounted(){this.$store.dispatch("getGame",this.$route.params.gameId)}},E=I,H=Object(s["a"])(E,G,S,!1,null,null,null);H.options.__file="Game.vue";var M=H.exports;n["a"].use(p["a"]);var A=new p["a"]({routes:[{path:"/",name:"home",component:j},{path:"/games/:gameId",name:"game",component:M}]}),D=a("2f62"),J=a("bc3a"),T=a.n(J);let z=T.a.create({baseURL:"//battlecardz.herokuapp.com/api/games"});n["a"].use(D["a"]);var L=new D["a"].Store({state:{game:{},player:{},opponent:{},playerCard:"",opponentCard:""},mutations:{newGame(t,e){t.game=e},setGame(t,e){t.game=e},setPlayerCard(t,e){t.playerCard=e,console.log(e)},setOpponentCard(t,e){t.opponentCard=e,console.log(e)}},actions:{startGame({commit:t}){z.post("").then(e=>{t("newGame",e.data.game),console.log(e.data.game),A.push({name:"game",params:{gameId:e.data.game.id}})})},getGame({commit:t},e){z.get(e).then(e=>{console.log(e),t("setGame",e.data.data)})},attack({commit:t},e){z.put("/"+e.gameId,e).then(e=>{t("setGame",e.data.game)})},playerCard({commit:t},e){t("setPlayerCard",e)},opponentCard({commit:t},e){t("setOpponentCard",e)}}});new n["a"]({router:A,store:L,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"72a5":function(t,e,a){"use strict";var n=a("8c1e"),r=a.n(n);r.a},"8c1e":function(t,e,a){},baa6:function(t,e,a){"use strict";var n=a("3a0b"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5af7e415.js.map