(function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},i=function(t,e){var n,r,i=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var o=0,a=n.length;a>o;o++)r=n[o],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},a=function(e){return function(n){var r=o(e),a=i(r,n);return t.require(a)}},s=function(t,e){var r={id:t,exports:{}};e(r.exports,a(t),r);var i=n[t]=r.exports;return i},l=function(t){var o=i(t,".");if(r(n,o))return n[o];if(r(e,o))return s(o,e[o]);var a=i(o,"./index");if(r(n,a))return n[a];if(r(e,a))return s(a,e[a]);throw Error('Cannot find module "'+t+'"')},c=function(t,n){if("object"==typeof t)for(var i in t)r(t,i)&&(e[i]=t[i]);else e[t]=n};t.require=l,t.require.define=c,t.require.register=c,t.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,r){return t.$state=e,t.$stateParam=n,t.go=function(t){return r.path(t)},t._build=window.global.config.BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window?"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0:void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}}))}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;r>++n;)if(t===e[n]&&n in e)return!0;return!1}var n,r=[].slice,i="".replace;n=',g0v.today,,,,直播人,更新人,"g0v.today 恢復每 3 分鐘更新， hackfoldr.org 每分鐘更新",,,,,\nhttp://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,even,,,,,,\nhttps://sites.google.com/site/twdstreet/,公民審服貿,,街頭民主審議:important,,,ve,,,,,,\nhttp://123.g0v.today/,三動作護台灣,,致電立委:important,,,ipa,,,,,,\nhttps://ethercalc.org/static/proxy/hackpad/,"文字轉播 (主要) ","{""expand"":false} ",每分鐘更新:warning,,,au,,,,,,\n" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,"即時更新:warning ",,,au,,,,,,\nhttps://ethercalc.org/static/proxy/live.txt,"文字轉播 (內場 3-31)",,每分鐘更新:warning,,,au,,,,,,\n,,,,,,,,,,,,\nhttps://ethercalc.org/static/proxy/english/,"English Transcript",,Auto-refresh:warning,,,au,,,,,,\n,,,,,,,"更新前請 *務必* 先刷新整頁試算表再改，感謝！",,,,,\nhttp://fact.g0v.tw/tisa.html,服貿跑馬燈,,,,,jimmy,,,,,,\nhttp://ecfa.speaking.tw/imho.php,"服貿東西軍 ",,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,影音直播,"{""expand"":true} ",3/31:warning,,,,"影音更新時請記得保留前方空白和 /embed/ 格式, 把 youtube.com/watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!",,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n" https://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,11am:warning,,indietaiwan,au,,,,,,\n" https://www.ustream.tv/embed/13620594","議場內 1F (五六) ",,暫停:error,9am,,rsghost,,,,,,\n,,,,,,,,,,,,\n" https://www.ustream.tv/embed/17548030","English LIVE",,11am:warning,,(1F),rsghost,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n" https://www.ustream.tv/embed/17513092","議場內 2F (民報)",,11am:warning,,longson3000,au,,,,,,\n" https://www.youtube.com/embed/aKMTrWDA070","議場內 2F (蘋報) ",,11am:warning,,appledaily,au,,,,,,\n" https://www.youtube.com/embed/IpM_mYdp_Xg","議場內+文字 (anon)",,暫停:error,6am,z3roblock,rsghost,,,,,,\n,,,,,,,,,,,,\n" https://www.youtube.com/embed/5mRya99zov0","青島東 (g0v)",,5pm:warning,,TobyOoO_,chien,,,,,,\n" https://www.youtube.com/embed/6JgTibjgDxI","青島東 (蘋報) ",,11am:warning,,appledaily,au,,,,,,\n" https://www.youtube.com/embed/IxpyATAPGZ8","濟南路 (g0v)",,9pm:warning,,gavin,au,,,,,,\n" https://www.ustream.tv/embed/17592160","機動組 (g0v-2)",,暫停:error,,yutin,au,"更新前請 *務必* 先刷新整頁試算表再改，感謝！",,,,,\n,,,,,,,,,,,,\n" http://broadcast.skywatch24.com:318/","9 機直播 (skywatch)",,,,skywatch,isacl,,,,,,\n" http://stlive.maxorz.com","6 合一聯播網 ","{""target"": ""_blank""} ",新視窗:info,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,"現場轉播回報 ","{""expand"":false} ",,,,,,,,,,\n" http://task.g0v.today/","現場轉播回報 (IRC)",,"主要:info ",,,,,,,,,\n" https://docs.google.com/spreadsheets/d/1Xj9XLK24ON99jBuSON8e8tUuNgi320aOZSVF60xncos/pubhtml ",現場轉播回報,,"備用:info ",,,,,,,,,\n" https://docs.google.com/document/d/1LoTj147B5IHji5vmZYJxXEBKSfnGDzld4oTBloGL7UM/edit?usp=sharing ","現場轉播回報 ",,"備用:info ",,,,,,,,,\n,文字轉播專區,"{""expand"":false} ","重要:important ",,,,,,,,,\n" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,,,,,,\n" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,,,,,,\n" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,,,,,,\n,,,,,,,,,,,,\n" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,"人力物資需求 ","{""expand"":false} ",,,,,,,,,,\n" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,"請支援:important ",,,,,,,,,\n" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,"請支援:important ",,,,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:error,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,抗議行動相關資訊,"{""expand"":""false""} ",,,,,,,,,,\n" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,,,,,,\n,,,,,,,,,,,,\n" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,,,,,,\n" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,,,,,,\n,影音記錄,"{""expand"":false}",,,,,,,,,,\n" https://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,,,,,,\n" https://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,,,,,,\n" https://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,,,,,,\n" https://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,,,,,,\n" https://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,,,,,,\n" https://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,,,,,,\n" https://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,,,,,,\n" https://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,,,,,,\n" https://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ",,,,,,,,,,,\n" https://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,,,,,,,,,\n" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,,,,,,\n" https://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,,,,,,\n" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,"  ",,"  ","  ","  ","  ","  ","  ","  ","  "," "\n" https://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,"hychen ",,,,,,,,\n" https://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,,,,,,\n" https://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,,,,,,\n" https://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,,,,,,\n" http://ppt.cc/vfFq",清大野台講堂,,,,,,,,,,,\n" http://www.ustream.tv/embed/17569549",勞陣研討會,,,,,,,,,,,\n" https://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,,,,,,\n,,,,,,,,,,,,\n,"媒體區  - Media","{""expand"":false} ",,,,,,,,,,\n" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,,,,,,\n" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,,,,,,\n" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,,,,,,\n" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,,,,,,\n" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,,,,,,\n" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,,,,,,\n" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,,,,,,\n" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,,,,,,\n" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,,,,,,\n" http://occupation.today/","照片與訊息 Tumblr ",,,,,,,,,,,\n" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,r,i){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return i(function(){return window.scrollTo(0,1)},0)}),i(function(){return r.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$window","$state","$cookies","HackFolder"].concat(function(e,n,i,o,a){var s,l;return t(e,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:a.iframes,docs:a.docs,tree:a.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=a.activate(t),"hackfoldr"===(null!=e?e.type:void 0)?"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0:void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(t,n,r){return e.saveModalOpen=t,r&&(e.saveBtn=$(r.target)),n&&(o.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:a,iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),i.current.title=t.title+" – g0v.today",t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return a.getIndex(t,!0,function(){})}}),e.$watch("hackId",function(t){return a.getIndex(t,!1,function(){var n,o;return e.$watch("docId",function(n){var i;return n&&(i=a.activate(n)),"hackfoldr"===(null!=i?i.type:void 0)?(e.showIndex=!0,a.loadRemoteCsv(i.id,function(i,o,s){var l,c,u;return l=function(){var t,e,r,i=[];for(t=0,r=(e=a.tree).length;r>t;++t)l=e[t],l.id===n&&i.push(l);return i}()[0],l.tagFilter=null!=(c=l.tags)?null!=(u=c[0])?u.content:void 0:void 0,l.chidlren||(null==l.children&&(l.children=null!=s?s[0].children:void 0),(c=a.docs).splice.apply(c,[o.length,0].concat(r.call(o)))),e.indexDocs=o,e.indexSearch=t.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===i.current.name,e.showIndex?void 0:!e.docId&&(n=null!=(o=a.docs[0])?o.id:void 0)?i.transitionTo("hack.doc",{docId:n,hackId:e.hackId}):void 0})}),e.collapsed=null!=(s=o.collapsed)?s:768>n.innerWidth,e.$watch("collapsed",function(t){return null!=t?o.collapsed=t:void 0}),e.hackId=(l=i.params.hackId)?l:"congressoccupied",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e,n){var r;return r=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var i,o,a;return i=t(r.ngxIframe)(e),o=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),e&&$.browser.mozilla?i("unsure"):i(n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),o(this.contentWindow,!0)}),a=setTimeout(function(){return o(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var i,o;return i=t(r.ngxClickMeta),o=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return o(t)&&!i(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(o,a){var s,l,c,u,p;return s={},l=[],c=[],p={iframes:s,docs:l,tree:c,activate:function(t,n){function r(t){return t.id}var i,o,u,p,h,d,f,g,m,v,_;for(null==n&&(n=!1),o=function(){var e,n,r,o=[];for(e=0,r=(n=l).length;r>e;++e)i=n[e],i.id===t&&o.push(i);return o}()[0],u=null!=o?o.type:void 0,p=0,d=(h=c).length;d>p;++p)f=h[p],(g=null!=f?null!=(m=f.children)?m.map(r):void 0:void 0)&&e(t,g)&&(f.expand=!0);return v=n?"edit":"view",_=function(){var e;switch(e=[u],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+v;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+v;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=o.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=o&&o.hashtag&&(_+=null!=o?o.hashtag:void 0),_&&(_=a.trustAsResourceUrl(_)),"hackfoldr"===(null!=o?o.type:void 0)?o:((g=s[t])?(g.src=_,g.mode=v):s[t]={src:_,doc:o,mode:v},o)},getIndex:function(t,e,r){var i,o,a=this;return u!==t||e?(i=0,o=function(){var e;return e=n,setTimeout(function(){return u=t,l.length=0,a.processCsv(e,r)},1)},o()):r(l)},processCsv:function(t,e){return this.loadCsv(t,l,c,function(t,n){return p.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var r,i=this;return r=n,setTimeout(function(){var t,n;return t=[],n=[],i.loadCsv(r,t,n,function(r){return e(r,t,n)})},1)},loadCsv:function(e,n,o,a){function s(){try{return JSON.parse(null!=y?y:"{}")}catch(t){}}function l(){var t;switch(t=[b],!1){case void 0!==t[0]:return p||w&&(p=w,w=null),{title:w,type:"dummy",id:"dummy"};case!(M=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:M[1],tag:M[2]};case!(M=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:M[1]};case!(M=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:M[1]};case!(M=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:M[1],id:M[2]};case!(M=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(b)),icon:"http://g.etfv.co/"+M[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",b):void 0}}function c(t){return t.length}function u(t){var e,n,i,o,a;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],i=e[1],o=e[2],a=r.call(e,3),{content:i,"class":null!=o?o:"warning"}}var p,h,d,f,g,m,v,_,b,w,y,x,$,k,C,E,D,T,M,A,P,S,F,O,j;for(e=i.call(e,/^\"?#.*\n/gm,""),d=[],f=0,m=(g=e.split(/\n/)).length;m>f;++f)v=g[f],v&&(_=v.split(/,/),b=_[0],w=_[1],y=_[2],x=_[3],$=_[4],k=r.call(_,5),w=i.call(w,/^"|"$/g,""),y&&(y=i.call(y,/^"|"$/g,"")),y&&(y=y.replace(/""/g,'"')),x&&(x=i.call(x,/^"|"$/g,"")),_=b.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),C=_[0],E=_[1],b=_[2],D=_[3],T=t({summary:$,hashtag:D,url:b,title:w,indent:E.length,opts:s()},l()),"dummy"!==T.type||null!=(_=T.title)&&_.length?d.push(t(t({icon:"/img/"+T.type+".png"},T),{tags:(null!=(_=null!=(A=T.opts)?A.tags:void 0)?_:[]).concat((null!=(_=null!=x?x.split(","):void 0)?_:[]).filter(c).map(u))})):d.push(null));for(h=d,n.splice.apply(n,[0,n.length].concat(r.call(h.filter(function(t){return null!=t})))),P=0,d=[],f=0,m=n.length;m>f;++f)F=f,T=n[f],F>0&&T.indent?(O=n[P],j=null!=(g=O.children)?g:O.children=[],j.push(T),d.push(null)):(P=F,d.push(T));return S=d,S=S.filter(function(t){return null!=t}),S=S.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:5>t.children.length),t}),o.splice.apply(o,[0,o.length].concat(r.call(S))),a(p,n)}}})})}.call(this),function(){var t={};t.exports={BUILD:"git-c502295",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}]},window.global||(window.global={}),window.global.config=t.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);