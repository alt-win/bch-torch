(function(t){function e(e){for(var a,c,o=e[0],n=e[1],d=e[2],f=0,b=[];f<o.length;f++)c=o[f],r[c]&&b.push(r[c][0]),r[c]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);u&&u(e);while(b.length)b.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var n=s[o];0!==r[n]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},r={app:0},i=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bch-torch/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=n;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("section",{attrs:{id:"trail"}},t._l(t.trail,function(e,a){return s("div",{key:e.id,class:{genesis:a==t.trail.length-1,last:0==a}},[s("div",{staticClass:"count"},[t._v(t._s(t.trail.length-a))]),s("div",{staticClass:"time"},[s("span",{attrs:{title:t._f("timelocale")(e.time)}},[t._v(t._s(t._f("timeago")(e.time+t.ticker/t.ticker)))])]),s("div",{staticClass:"tx"},[s("a",{attrs:{href:"https://explorer.bitcoin.com/bch/tx/"+e.id}},[t._v(t._s(t._f("tx")(e.id)))])]),s("who",{attrs:{legacy:e.to}})],1)}))])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"header"}},[s("img",{attrs:{height:"128",src:"/bch-torch/images/torch-color-565.png"}}),s("h1",[t._v("The Bitcoin Cash Torch")]),s("p",[t._v("Follow the trail of the first (and only) Bitcoin Cash torch.")])])}],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"who"},[t.isTwitter?s("span",{staticClass:"twitter"},[s("a",{attrs:{href:t.details.twitter}},[t._v(t._s(t._f("twitteruser")(t.details.twitter)))])]):t._e(),t.isReddit?s("span",{staticClass:"reddit"},[s("a",{attrs:{href:t.details.reddit}},[t._v(t._s(t._f("reddituser")(t.details.reddit)))])]):t._e(),t.isLegacy?s("span",{staticClass:"address"},[s("a",{attrs:{href:t._f("linkaddress")(t.address)}},[t._v(t._s(t._f("toslpaddr")(t.address)))])]):t._e(),s("div",{staticClass:"images"},[t.hasCountry?s("span",{staticClass:"flag"},[s("img",{attrs:{src:"https://www.countryflags.io/"+t.details.country+"/flat/32.png"}})]):t._e(),t.hasBadge?s("span",{staticClass:"badges"},t._l(t.details.badges,function(t){return s("img",{key:t,attrs:{src:"/bch-torch/images/"+t,height:"32"}})})):t._e()])])},o=[],n=(s("a481"),s("4917"),{"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8":{twitter:"https://twitter.com/LeeFlemingster/status/1103568864451932160",country:"gb",badges:["pick.png","torch-color-565.png"]},"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2":{twitter:"https://twitter.com/EmergentReasons/status/1103452941518700546",country:"jp"},"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV":{twitter:"https://twitter.com/zquestz/status/1103456473244418054",country:"us"},"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8":{twitter:"https://twitter.com/CollinEnstad/status/1103459641248411649",country:"us",badges:["spice.png"]},"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D":{twitter:"https://twitter.com/Don_wonton/status/1103523885381750784",country:"us",badges:["drawhand.png"]},"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK":{twitter:"https://twitter.com/rob_mose/status/1103531856874496000",country:"au"},"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb":{twitter:"https://twitter.com/im_uname/status/1103534771810951168",country:"us"},"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6":{twitter:"https://twitter.com/JettScythe/status/1103537308286898176"},"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8":{twitter:"https://twitter.com/Wecx_/status/1103547584952512512",country:"us"},"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo":{twitter:"https://twitter.com/paOolCoin/status/1103556037016092672"},"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS":{twitter:"https://twitter.com/Anthony05064687"},"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho":{twitter:"https://twitter.com/Klakurka/status/1103680413266927621",country:"ca"},"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT":{twitter:"https://twitter.com/Klakurka",country:"ca"},"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD":{twitter:"https://twitter.com/SouperNerd",country:"mx"},"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C":{twitter:"https://twitter.com/DavidShares/status/1103688119696703488",country:"us"},"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u":{twitter:"https://twitter.com/maplesyrupsuckr/status/1103949693455749121",country:"jp"},"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ":{twitter:"https://twitter.com/BionicHacker/status/1103612969361977344",country:"hk"},"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7":{twitter:"https://twitter.com/rogerkver/status/1104514409735417857",country:"jp",badges:["bitcoinjesus.png"]},"1wXPLyDYiYZi5DQw7a3W13XjMjSbye9jE":{twitter:"https://twitter.com/PaulLambert816/status/1104631560370704384",country:"us"},"17WfF5ynAsvqnUR2X4dTSMsZduaotjJVKX":{twitter:"https://twitter.com/SpencerLambert/status/1104785806416273408",country:"us",badges:["hen.jpg"]},"1JBnXATU5Mx5GSc94bN21GFJTAXg1wNv5m":{twitter:"https://twitter.com/hifromlaura1/status/1104865141672292353",country:"us"},"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT":{twitter:"https://twitter.com/eatBCH_VE",country:"ve",badges:["eatbch_ve.jpg"]}}),d=s("ac3e"),u=s.n(d),f={name:"who",props:{legacy:String,cashaddr:String},data(){return{address:this.cashaddr||this.legacy,details:n[this.legacy]}},computed:{isTwitter(){return this.details&&!!this.details.twitter},isReddit(){return this.details&&!!this.details.reddit},isLegacy(){return null==this.details},hasCountry(){return this.details&&!!this.details.country},hasBadge(){return this.details&&!!this.details.badges}},filters:{twitteruser(t){let e=t.match(/twitter.com\/([^\/]+)/);return e?"@"+e[1]:t},reddituser(t){let e=t.match(/reddit.com\/([^\/]+\/[^\/]+)/);return e?"/"+e[1]:t},linkaddress(t){return"https://explorer.bitcoin.com/bch/address/"+u.a.toCashAddress(t)},toslpaddr(t){return u.a.toSlpAddress(t).replace("simpleledger:","")}}},b=f,l=s("2877"),h=Object(l["a"])(b,c,o,!1,null,null,null),p=h.exports,m=[{id:"0e00054e20eab0492c5e77ffc668dee61c1a44eafe56b6ccc9968a4a9c2b21b1",vout:1,time:1552199642,to:"17WfF5ynAsvqnUR2X4dTSMsZduaotjJVKX"},{id:"f22d93504f8ac01d3cf000d1f363e279e26f8b8ed7c7b9d1f9bd7af0161f6b55",vout:1,time:1552171840,to:"1wXPLyDYiYZi5DQw7a3W13XjMjSbye9jE"},{id:"735db5684e1a17eeeb6bcc706b1183ead1f39bc9e3e350e27606eb64d4667d59",vout:1,time:1552037042,to:"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7"},{id:"8bcb285d6ac7e53f8842219f9f8e0d32271ac8385ba73bbed81d95e00f46bc8c",vout:1,time:1551975340,to:"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u"},{id:"d3fe0d314c454a8280987cbfb984830a6d8f061a4e3cf347798c9938042d080e",vout:1,time:1551972883,to:"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C"},{id:"8bdefa85e6b9e1f1d8b46404ce311bd4c0c464cfa1c1b6d5b75813faccb90390",vout:1,time:1551959271,to:"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho"},{id:"f5cef9b8bfeb83fd3debe4955b0eeaf170d8cb272a83831a855556f5266309d1",vout:1,time:1551956754,to:"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT"},{id:"cddc0c3a87d511299e3bcc457dbb9076df7d73c2daffba90b3160acdce007889",vout:1,time:1551951950,to:"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ"},{id:"8c688cae1a8a975c4d0fe1eae55508ddc30ea2ffdb09929c811fe247c16437d9",vout:1,time:1551950332,to:"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD"},{id:"a5bb8e4540364caeaa961f91babbefa65975c6fce01d6f174e6313eb89623528",vout:1,time:1551950332,to:"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS"},{id:"c094e8527f2e87ec726637debf096d4d96db21ec3abe725ee1751252495356ff",vout:1,time:1551941264,to:"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo"},{id:"4e53d9dd370b39f9937d07a524fbe7f95b7cfd8c56407269c331fcadafed5512",vout:2,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"b91e30e68f8a046841e6052d43b2240df67a2e2890d1000fbcb1e7e01dcc0d92",vout:1,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"d0a8fe68ca5b42d30bfba96d8f37a6e1d5fbd2e1f21c33264985ea7ad9728301",vout:1,time:1551940456,to:"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6"},{id:"e45265c4c2b7eac4060ec1b9d5233eaae69cdd82a6e25a6ab9cb2f89f96481ee",vout:1,time:1551937487,to:"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb"},{id:"aaa0a898a0608768ab617d6732315b212811fdb62b7c9bdf0dc8c22ac3a82747",vout:1,time:1551935998,to:"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK"},{id:"e14f7d842ac7af1de2053c943432b3ed1799e58239658354f3dc80ec681b476c",vout:2,time:1551934483,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"ca0963cb32dee18f2bd36c0ce1769a089801e23bd7877967099b798f3609e986",vout:1,time:1551933056,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"5630e76beaca881b24b2e10fc87144e6615a2946b50ffaab286c658ec31a0b15",vout:1,time:1551920200,to:"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8"},{id:"2cf6ad0ab81859d77a4486b9fec1f0deff8ded5db3bbf678b72d4b05b8c6c118",vout:1,time:1551918586,to:"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV"},{id:"bf60bf117f45266bf8c67d9a5ec11fe0727b12c2447bb968f0885129d942ada7",vout:1,time:1551899820,to:"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2"},{id:"49be89bbbe018bcfaebcb41cac8340bc555f022b47b922599e510b143603f4b6",vout:1,time:1551898616,to:"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8"}],w=s("0fec"),y=s("7d1a"),v=s.n(y),g=s("567f"),k=s("bc3a"),S=s.n(k),_=s("8055"),x=s.n(_);const L={baseURL:"https://rest.bitcoin.com"};class j{constructor(){this._socket=x()(L.baseURL),this._socket.on("disconnect",t=>this.disconnected(t))}onTransaction(t){this._socket.on("transactions",e=>{t(JSON.parse(e))})}onBlock(t){this._socket.on("blocks",e=>{t(JSON.parse(e))})}disconnected(t){"io server disconnect"===t&&this._socket.connect()}}w["a"].addLocale(v.a);const M=new w["a"]("en-US");var C={name:"app",data(){return{ticker:1,trail:m}},components:{who:p},mounted(){this.start()},methods:{last(){return this.trail[0]},start(){function t(){this.ticker++}function e(){this.trail&&this.trail.length&&(window._trail=JSON.parse(JSON.stringify(this.trail)))}this.load(this.last().id),this.socket=new j,this.socket.onTransaction(this.monitor.bind(this)),setInterval(t.bind(this),1e3),setInterval(e.bind(this),6e4)},monitor(t){let e=this.last(),s=e.id,a=e.vout;function r(t){return t.txid==s&&t.n==a}let i=t.inputs.some(r);i&&this.load(t.format.txid)},load(t){S.a.get("https://rest.bitcoin.com/v2/slp/txDetails/"+t).then(t=>t.data).then(t=>this.addStep(t))},addStep(t){let e=t.txid,s=t.tokenInfo,a=s.sendOutputs.indexOf("1"),r=t.vout[a],i=r.scriptPubKey.addresses[0],c=this.last().id;c!=e&&this.trail.unshift({id:e,vout:a,time:t.time,to:i});let o=r.spentTxId;o&&this.load(o)}},filters:{timelocale(t){let e=new Date(1e3*t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},timeago(t){return M.format(new Date(1e3*t),{gradation:g["a"]})},tx(t){return t}}},N=C,G=(s("034f"),Object(l["a"])(N,r,i,!1,null,null,null)),T=G.exports;new a["a"]({render:t=>t(T)}).$mount("#app")},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.b537c726.js.map