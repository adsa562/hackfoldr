function import$(e,t){var n={}.hasOwnProperty;for(var o in t)n.call(t,o)&&(e[o]=t[o]);return e}function in$(e,t){for(var n=-1,o=t.length>>>0;++n<o;)if(e===t[n])return!0;return!1}require.register("config.jsenv",function(e,t,n){n.exports={BUILD:"git-4472bad",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,o){return e.$state=t,e.$stateParam=n,e.go=function(e){return o.path(e)},e._build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:n}):void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var CONST_CSV,slice$=[].slice,replace$="".replace;CONST_CSV='#url,#title,"#foldr expand",#tag,,,,\n,抗議馬政府草率申請加入亞投銀,,,,,,\nhttps://g0v.hackpad.com/ep/pad/static/XP8sxrgu8Wi,現場物資需求,,,,,,\nhttps://www.ptt.cc/bbs/Gossiping/M.1427817152.A.2A6.html,遭逮捕、偵訊注意事項,,,,,,"第一列放not _blank 的 用 http://beta.hackfoldr.org/aiib-protest 才會顯示(不然一開始看到右邊會一片白)"\nhttps://www.facebook.com/DemocracyTautin/photos/a.297021913796374.1073741827.294447677387131/443976902434207/,聯合聲明,,,,,,ok\n,,,,,,,\n," 直播頻道",,,,,,\n" http://new.livestream.com/accounts/10240183/events/3933435",阿凱公民覺醒紀錄,"{""target"":""_blank""}",,,,,""" The owner of this event needs to upgrade their subscription to access live video embeds. If you would like to embed this live video, please notify the event owner. "" (I just notify, owner accept 之後應該就可以了)"\n" http://new.livestream.com/accounts/9824878/events/3890623","小鳥臺 ","{""target"":""_blank""}",,,,,"都在現場，要告訴他們有點難度 XD"\n" http://new.livestream.com/accounts/10332363/events/3867428",日升連線,"{""target"":""_blank""}",,,,,\n" https://www.ustream.tv/embed/18749946",黑眼圈,,,,,,"(ustream可以直接 embed)"\n" http://new.livestream.com/accounts/10424521/events/3928926",文森直播-Ex,"{""target"":""_blank""}"," 關台充電中:",,,,"ustream 的問題是人數限制"\n,,,,,,,\n,"  相關文章","{""expand"":""true""}",,,,,\n" https://www.ptt.cc/bbs/Gossiping/M.1427814568.A.021.html",亞投行事件懶人包,,,,,,要告訴直播主什麼請在這↓留言\n" https://www.ptt.cc/bbs/Gossiping/M.1427815988.A.DA1.html",警編備份,,,,,,"(livestream 請開 embed accept....)"\n" https://www.facebook.com/video.php?v=444025892429308",警員編號5701錄影備份,,,,,,請問有教學嗎?\n," 關於亞投行",,,,,,""" Upgrade to Embed Live Video "" 看來要付費才能提供 embed 服務了XD"\nhttp://www.peoplenews.tw/news/81161e45-067f-45d7-9720-ec20e87dc3f9,"在野為何抗議 一次看懂亞投行",,,,,," 直播主們都用免費Der..."\nhttp://www.storm.mg/cardstack/45013,5張卡讓你了解,"{""target"":""_blank""}",,,,,\nhttps://www.ptt.cc/bbs/Gossiping/M.1427772855.A.24F.html,亞投行二三事,,,,,,\nhttp://www.storm.mg/article/45221,"捍衛國格 立法院：應直接向亞投行籌備處遞交意向書","{""target"":""_blank""}",,,,,\nhttp://www.peoplenews.tw/news/87cf5b85-71f5-470a-9ee9-ece777fa90bd,"加入亞投行 童振源：有三個關卡、三個模式",,,,,,\nhttp://udn.com/news/story/7896/782551,"名家觀點／加入亞投行 台灣稍安勿躁",,,,,,\nhttp://udn.com/news/story/1/808167,"亞投行意向書 林永樂：7點已傳出",,,,,,\nhttp://www.bbc.co.uk/zhongwen/trad/china/2015/03/150331_aiib_wrap,亞投行朋友圈人氣旺但風險問題並存,,,,,,\nhttp://www.peoplenews.tw/news/9a8ccb1e-63b3-4b77-af1c-ddd0f34ed4b6,入亞投行張盛和信函避正式國名、機構官銜　陸委會：不得不彈性,,,,,,\n," 抗爭事件新聞報導",,,,,,\nhttp://news.ltn.com.tw/news/politics/breakingnews/1273776,"抗議草率加入亞投行 總統府前爆發肢體衝突",,,,,,\nhttp://news.rti.org.tw/news/detail/?recordId=181824,"  學生反亞投行 府盼理性安全",,,,,,\nhttp://news.rti.org.tw/news/detail/?recordId=181820,"黑島青抗議亞投行 衝總統府遭攔阻",,,,,,\nhttp://news.ltn.com.tw/news/politics/breakingnews/1273892,吳錚：親耳聽見警察說「抗爭群眾沒有人權」,,,,,,\nhttps://www.ptt.cc/bbs/Gossiping/M.1427820039.A.1D9.html,,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(e,t,n,o,r){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return r(function(){return window.scrollTo(0,1)},0)}),r(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(e,t,n,o,r,a){var c,i;return import$(e,{hasViewMode:function(e){return null!=e?e.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:a.iframes,docs:a.docs,tree:a.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(e){return window.open(e.url,e.id),!1},activate:function(e){var t;return t=a.activate(e),"hackfoldr"===(null!=t?t.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(t,n,o){return e.saveModalOpen=t,o&&(e.saveBtn=$(o.target)),n&&(r.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==r.savebtn},HackFolder:a,barframeSrc:function(e){var n;return n=e.opts.bar.replace(/\{(\w+)\}/g,function(){return e[arguments[1]]}),t.trustAsResourceUrl(n)},iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),o.current.title=t.title+" – g0v.today",t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return a.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(t){return a.getIndex(t,!1,function(){var n,r;return e.$watch("docId",function(n){var o;return n&&(o=a.activate(n)),"hackfoldr"===(null!=o?o.type:void 0)?(e.showIndex=!0,a.loadRemoteCsv(o.id,function(o,r,c){var i,l,s;return i=function(){var e,t,o,r=[];for(e=0,o=(t=a.tree).length;o>e;++e)i=t[e],i.id===n&&r.push(i);return r}()[0],i.tagFilter=null!=(l=i.tags)&&null!=(s=l[0])?s.content:void 0,i.chidlren||(null==i.children&&(i.children=null!=c?c[0].children:void 0),(l=a.docs).splice.apply(l,[r.length,0].concat(slice$.call(r)))),e.indexDocs=r,e.indexSearch=t.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===o.current.name,e.showIndex?void 0:!e.docId&&(n=null!=(r=a.docs[0])?r.id:void 0)?o.transitionTo("hack.doc",{docId:n,hackId:e.hackId}):void 0})}),e.collapsed=null!=(c=r.collapsed)?c:n.innerWidth<768,e.$watch("collapsed",function(e){return null!=e?r.collapsed=e:void 0}),e.hackId=(i=o.params.hackId)?i:"congressoccupied",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0}),e.sidebar=!1,e.toggleSidebar=function(){return e.collapsed=!1,e.sidebar=!e.sidebar}})}).directive("resize",["$window"].concat(function(e){return function(t,n,o){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,o){var r,a,c;return r=e(o.ngxIframe)(t),a=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),r(t&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(c),a(this.contentWindow,!0)}),c=setTimeout(function(){return a(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t,n){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,o){var r,a;return r=e(o.ngxClickMeta),a=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return a(e)&&!r(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t,n){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t,n,o){var r;return r=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(r)}),t.$watch("docs",r),r()}})).factory({HackFolder:["$http","$sce"].concat(function(e,t){var n,o,r,a,c;return n={},o=[],r=[],c={iframes:n,docs:o,tree:r,activate:function(e,a){function c(e){return e.id}var i,l,s,u,d,p,h,v,g,m,f;for(null==a&&(a=!1),l=function(){var t,n,r,a=[];for(t=0,r=(n=o).length;r>t;++t)i=n[t],i.id===e&&a.push(i);return a}()[0],s=null!=l?l.type:void 0,u=0,p=(d=r).length;p>u;++u)h=d[u],(v=null!=h&&null!=(g=h.children)?g.map(c):void 0)&&in$(e,v)&&(h.expand=!0);return m=a?"edit":"view",f=function(){var t;switch(t=[s],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+m;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+m;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=l.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"video"!==t[0]:if("youtube"===l.provider)return"https://www.youtube.com/embed/"+e;if("ustream"===l.provider)return"http://www.ustream.tv/embed/"+e+"?v=3";break;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),null!=l&&l.hashtag&&(f+=null!=l?l.hashtag:void 0),f&&(f=t.trustAsResourceUrl(f)),"hackfoldr"===(null!=l?l.type:void 0)?l:((v=n[e])?(v.src=f,v.mode=m):n[e]={src:f,doc:l,mode:m},l)},getIndex:function(e,t,n){var r,c,i=this;return a!==e||t?(r=0,(c=function(){var t;return t=CONST_CSV,setTimeout(function(){return a=e,o.length=0,i.processCsv(t,n)},1)})()):n(o)},processCsv:function(e,t){return this.loadCsv(e,o,r,function(e,n){return c.folderTitle=e,t(n)})},loadRemoteCsv:function(e,t){var n,o=this;return n=CONST_CSV,setTimeout(function(){var e,r;return e=[],r=[],o.loadCsv(n,e,r,function(n){return t(n,e,r)})},1)},loadCsv:function(e,t,n,o){function r(){try{return JSON.parse(w.replace(/""/g,'"'))}catch(e){}}function a(){var e;switch(e=[m],!1){case void 0!==e[0]:return l||(f&&(l=f,f=null),w&&(s=w)),{title:f,type:"dummy",id:"dummy"};case!(A=/^\/\/(.*?)(?:\#(.*))?$/.exec(e[0])):return{type:"hackfoldr",id:A[1],tag:A[2]};case!(A=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:A[1]};case!(A=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:A[1],id:A[2]};case!(A=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(e[0])):return{type:"video",provider:"youtube",id:A[1],icon:"http://g.etfv.co/"+m};case!(A=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(e[0])):return{type:"video",provider:"ustream",id:A[1],icon:"http://g.etfv.co/"+m};case!(A=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(m)),icon:"http://g.etfv.co/"+A[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",m):void 0}}function c(e){return e.length}function i(e){var t,n,o,r,a;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],o=t[1],r=t[2],a=slice$.call(t,3),{content:o,"class":null!=r?r:"warning"}}var l,s,u,d,p,h,v,g,m,f,w,b,k,y,C,I,x,_,S,A,O,F,L,z,R,W;for(e=replace$.call(e,/^\"?#.*\n/gm,""),s={},d=[],p=0,v=(h=CSV.parse(e)).length;v>p;++p)g=h[p],m=g[0],f=g[1],w=g[2],b=g[3],k=g[4],y=slice$.call(g,5),f&&(f=replace$.call(f,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=r()),null==w&&(w={}),b&&(b=replace$.call(b,/^"|"$/g,"")),C=m.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),I=C[0],x=C[1],m=C[2],_=C[3],S=import$({summary:k,hashtag:_,url:m,title:f,indent:x.length,opts:import$(import$({},s),w)},a()),d.push("dummy"!==S.type||null!=(C=S.title)&&C.length?import$(import$({icon:"/img/"+S.type+".png"},S),{tags:(null!=(C=null!=(O=S.opts)?O.tags:void 0)?C:[]).concat((null!=(C=null!=b?b.split(","):void 0)?C:[]).filter(c).map(i))}):null));for(u=d,u.filter(function(e){return null!=e?e.url:void 0}).map(function(e){var t,n,o;return"video"===e.type&&"youtube"===e.provider?(t=gapi.client.youtube.videos.list({id:e.id,part:"snippet"}),t.execute(function(t){var n;return"live"===(null!=(n=t.items)?n[0].snippet.liveBroadcastContent:void 0)?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=e.url.match(/ustream.tv\/embed\/([^?]+)/))?(o=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+o+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(t){var n,o;return"live"===JSON.parse(null!=(n=t.query)&&null!=(o=n.results)&&null!=(n=o.body)?n.p:void 0).results?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),t.splice.apply(t,[0,t.length].concat(slice$.call(u.filter(function(e){return null!=e})))),F=0,d=[],p=0,v=t.length;v>p;++p)z=p,S=t[p],z>0&&S.indent?(R=t[F],W=null!=(h=R.children)?h:R.children=[],W.push(S),d.push(null)):(F=z,d.push(S));return L=d,L=L.filter(function(e){return null!=e}),L=L.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:e.children.length<5),e}),n.splice.apply(n,[0,n.length].concat(slice$.call(L))),o(l,t)}}})});