function import$(t,e){var n={}.hasOwnProperty;for(var o in e)n.call(e,o)&&(t[o]=e[o]);return t}function in$(t,e){for(var n=-1,o=e.length>>>0;++n<o;)if(t===e[n])return!0;return!1}require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-2d1f101",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,o){return t.$state=e,t.$stateParam=n,t.go=function(t){return o.path(t)},t._build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:n}):void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var CONST_CSV,slice$=[].slice,replace$="".replace;CONST_CSV=',反黑箱服貿協議・守護民主日與夜,,,"g0v.today 每 3 分鐘更新",,,\nhttp://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,,\nhttp://ecfa.speaking.tw/,服貿跑馬燈,"{""expand"":false} ",,"更新前請 *務必* 先刷新整頁試算表再改，感謝！",,,\n" http://fact.g0v.tw/tisa.html",服貿跑馬燈-時間軸,,,,,,\n" http://ecfa.speaking.tw/imho.php","服貿東西軍 ",,,,,,\n" https://sites.google.com/site/twdstreet/",公民審服貿,,街頭民主審議:info,"影音更新時請記得 *保留前方空白* 和 /embed/ 格式, 把 youtube watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!",,,\nhttp://123.g0v.today/,三動作護台灣,,致電立委:important,,,,\nhttp://nonuke.today/,停建核四、遍地烽火全記錄,"{""target"":""_blank""}",新分頁:,,,,\nhttp://hackfoldr.org/resistancelive/,香港7.1遊行暨後續活動現場直播,"{""target"":""_blank""}",新分頁:,,,,\nhttp://hackfoldr.org/Kaohsiung-explode-20140801,高雄8.1氣爆救災資訊,"{""target"":""_blank""}",新分頁:important,,,,\nhttp://i.imgur.com/PNyJAIq.png?3,LiveTW即時獲取直播頻道App,"{""expand"":true}",,,,,\n" https://chrome.google.com/webstore/detail/livetw/fhcffinobmpdchcoapdeoinhdmlihiok",Chrome：,"{""target"":""_blank""}",新分頁:issue,,,,\n" https://play.google.com/store/apps/details?id=com.g0v.live",Android：,"{""target"":""_blank""}",新分頁:issue,,,,\n" http://inlivetw.github.io/chrome/",Web：,,新版:important,,,,\n,政府各部會直播,"{""expand"": false}",,,,,\n" http://www.ustream.tv/embed/18469624",7.11二次自經區深度溝通會前會,,,,,,\n" http://www.ustream.tv/embed/18322764","行政院 經貿國是會議-戲智科技1",,,,,,\n" http://www.ustream.tv/embed/18316356","行政院 經貿國是會議-戲智科技2",,,,,,\n" https://livehouse.in/channel/NectwChannel-M","行政院 經貿國是會議-愛卡拉(iKala)1",,,,,,\n" https://livehouse.in/channel/NectwChannel-S","行政院 經貿國是會議-愛卡拉(iKala)2",,,,,,\n" https://livehouse.in/channel/yda","教育部 青年發展署",,,,,,\n" http://www.appledaily.com.tw/livechannel/subject/37","蘋果LIVE 二次自經區溝通會",,,,,,\n" http://www.appledaily.com.tw/livechannel/nationalmeeting01",蘋果LIVE經貿國是會議1,,,,,,\n" http://www.appledaily.com.tw/livechannel/nationalmeeting02",蘋果LIVE經貿國是會議2,,,,,,\n" https://www.youtube.com/channel/UC_7MwKr2JOoFH_xOF_R961A","行政院 國發會 二次自經區溝通會 Youtube過往直播","{""target"":""_blank""}",,,,,\n" https://www.youtube.com/channel/UCqxZB7eJ34jf0rZUS_1LUAg","行政院 國發會 國是會議直播小組 Youtube過往直播","{""target"":""_blank""}",,,,,\n" https://www.youtube.com/channel/UCfgXJRfOL1vek3YFw2QmJ5A","行政院 國發會 國是會議直播小組２ Youtube過往直播","{""target"":""_blank""}",,,,,\n" https://www.youtube.com/channel/UCL39yxKnDTvz97uvs4hiYRQ/feed","行政院 金管會 Youtube過往直播","{""target"":""_blank""}",,,,,\n,9/12立法院事件,"{""expand"":false}",,,,,\n" http://lci.ly.gov.tw/",議事宣公報管理系統,,,,,,\n" http://www.ly.gov.tw/01_lyinfo/0109_meeting/meetingList.action","立法院 會議預報",,,,,,\n" http://www.cwb.gov.tw/V7/forecast/town368/towns/6300500.htm?layer=0&type=Weather&time=3Hr",立法院(中正區)天氣預報,,,,,,\n" http://musou.tw/schedules","沃草國會無雙 賽事預報","{""target"":""_blank""}",,,,,\n" http://musou.tw/live_streams/119",9/12沃草|國會無雙,"{""target"":""_blank""}",,,,,\n" http://www.appledaily.com.tw/livechannel/subject/17",蘋果立法院議會LIVE,,,,,,\n" http://www.ustream.tv/embed/17012502","沃草國會無雙 第一競技場",,,,,,\n" http://www.ustream.tv/embed/17401996","沃草國會無雙 第二競技場",,,,,,\n" http://www.ustream.tv/embed/17989031","沃草國會無雙 第三競技場",,,,,,\n" http://www.ustream.tv/embed/17823792","民報直播 立法院OnLine",,,,,,\n" https://livehouse.in/channel/watchout",【沃草直播室】,,,,,,\n,"影音直播 (黑畫面請按F5)","{""expand"": true}",,,,,\n" https://adblockplus.org/zh_TW/chrome",Chrome擋廣告外掛,"{""target"":""_blank""}",,,,,\n" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&src=ptt.publicissue2%40gmail.com&src=ptt.publicissue3%40gmail.com&src=ptt.publicissue4%40gmail.com&src=ptt.publicissue5%40gmail.com&src=ptt.publicissue6%40gmail.com&src=ptt.publicissue7%40gmail.com&mode=week&title=鄉民曆-所有事件",鄉民曆-所有事件,,,,,,\n" https://www.youtube.com/watch?v=bpKd1buf48U","Patch to GOV 當網民滲透國是、開放政策溝通 自經區溝通會及經貿國是會議小腸花",,1930~2130,,,,\n" http://www.ustream.tv/embed/18477607",張慶恩的台獨國際新聞,,,,,,\n" https://livehouse.in/channel/KPtaipei","8/18冰桶大挑戰 為漸凍人募款 柯文哲",,,,,,\n" http://www.ustream.tv/embed/3526833",公視新聞網,,,"8pm 有話好說(星期一至三)、NGO觀點(星期四)、南部開講(星期五)、唱四方(星期六) 、部落大小聲(星期日) + 10pm 我們的島(星期一)、獨立特派員(星期三)",,,\n,,,,,,,\n" http://www.ustream.tv/embed/18692687","山崎 公民記者",,,,,,\n" http://www.ustream.tv/embed/17696763",桃園縣議會,,,,,,\n" http://www.ustream.tv/embed/18698986",citizen393,,,,,,\n" http://www.ustream.tv/embed/17733674","jackywolf 公民記者",,,,,,\n" http://www.ustream.tv/embed/18418362",北加州台灣青年民主電台(北加青年台),,"8/19 0900開始:",,,,\n" http://www.ustream.tv/embed/18030256","阿凱 公民覺醒紀錄",,,,,,\n" https://www.youtube.com/watch?v=vWhcmzt5ORA",8/17【與台獨面對面】宜蘭巡迴演講,,,,,,\n" http://www.ustream.tv/embed/17992061","Masaru 南部實況",,,,,,\n" http://www.ustream.tv/embed/18231291","日升連線 公民記者",,,,,,\n" http://www.ustream.tv/embed/17948037","豪豬 公民記者",,,,,,\n" http://www.ustream.tv/embed/18103859",文森直播,,,,,,\n" http://www.ustream.tv/embed/17157275","PENNYKEN 公民記者",,,,,,\n" http://www.ustream.tv/embed/17929143","小六 公民記者",,,,,,\n" http://www.ustream.tv/embed/18571065",社運紀實小組直播網,,,,,,\n" http://www.ustream.tv/embed/18385635",阿弘直播台,,,,,,\n" http://www.ustream.tv/embed/14787921",公民之聲,,,,,,\n" http://www.ustream.tv/embed/17843610",電池線上,,,,,,\n" http://www.ustream.tv/embed/18412678","麵包 公民記者",,,,,,\n" http://www.ustream.tv/embed/18246634","欣欣 公民記者",,,,,,\n" http://www.ustream.tv/embed/17562385","麵線 公民記者",,,,,,\n" http://www.ustream.tv/embed/18200914",直樹Live頻道,,,,,,\n" http://www.ustream.tv/embed/18659589","台灣和平中立化 研討會",,,,,,\n" http://www.ustream.tv/embed/18380808","小鳥台 公民記者",,,,,,\n" http://www.ustream.tv/embed/7468658",文源LIVE秀,,,,,,\n" http://www.ustream.tv/embed/18245525","髒髒 公民記者",,,,,,\n" http://www.ustream.tv/embed/17513092",拖鞋直播-1,,,,,,\n" http://www.ustream.tv/embed/17863662","點點 公民記者",,,,,,\n" http://www.ustream.tv/embed/17897006",野自Live,,,,,,\n" http://www.ustream.tv/embed/17969826","飛魚台 南部實況",,,,,,\n" http://www.ustream.tv/embed/18296345",用人權改變你的生活──身心障礙者的自我倡議讀書會,,,,,,\n" http://www.ustream.tv/embed/6065521",PTTradio,,,,,,\n" http://www.ustream.tv/embed/18597273",踐踏民主面對審判暴力首謀江宜樺下台,,,,,,\n" http://www.ustream.tv/embed/17941896",yokulive公民記者,,,,,,\n" http://www.ustream.tv/embed/6203014","frangi33 公民記者",,,,,,\n" http://www.ustream.tv/embed/18127743","Daniel Chen公民記者",,,,,,\n" http://www.ustream.tv/embed/17755037","帽客 公民記者",,,,,,\n" https://livehouse.in/channel/watchout",【沃草直播室】,,,,,,\n" https://livehouse.in/channel/watchout2",【沃草直播室2】,,,,,,\n" http://www.ustream.tv/embed/17894339","阿法 公民記者",,,,,,\n" http://www.ustream.tv/embed/18506067","Mayaman 社運紀實",,,,,,\n" http://www.ustream.tv/embed/18530557",鄉民email,,,,,,\n" http://www.ustream.tv/embed/18109047","新竹蕾拉 公民記者",,,,,,\n" http://www.ustream.tv/embed/17551115","蜂潮 再起",,,,,,\n" http://www.ustream.tv/embed/18401148",梁文韜,,,,,,\n" http://www.ustream.tv/embed/18062563",基進側翼,,,,,,\n" http://www.ustream.tv/embed/18511952",哲學非星期五＠台中,,,,,,\n" http://www.ustream.tv/embed/17811041",Sean-公民記者,,,,,,\n" http://www.ustream.tv/embed/18308641",Citizentw,,,,,,\n" http://www.ustream.tv/embed/17858274",台南民主店頭,,,,,,\n" http://www.ustream.tv/embed/18482988",wwe_dx_jad,,,,,,\n" http://www.ustream.tv/embed/18511678","阿至 公民記者",,,,,,\n" http://www.ustream.tv/embed/18476332","公民線上 Citizen Live",,,,,,\n" http://www.ustream.tv/embed/18407461","Eason小胖 公民記者",,,,,,\n" http://www.ustream.tv/embed/18390482","米飛  公民記者",,,,,,\n" http://www.ustream.tv/embed/17866960",小駿線上,,,,,,\n" http://www.ustream.tv/embed/17916604",阿賢文旦直播台,,,,,,\n" http://www.ustream.tv/embed/18379958","皮皮 公民記者",,,,,,\n" http://www.ustream.tv/embed/18174265","小光 公民記者",,,,,,\n" http://www.ustream.tv/embed/17996833","雪倫 公民記者",,,,,,\n" http://www.ustream.tv/embed/17622630","banana 公民記者",,,,,,\n" http://www.ustream.tv/embed/17958896",拖鞋直播-2,,,,,,\n" http://www.ustream.tv/embed/17587751",拖鞋直播-3,,,,,,\n" http://www.ustream.tv/embed/17894854",拖鞋直播-日本語,,,,,,\n" http://www.ustream.tv/embed/17857738",公投盟直播,,,,,,\n" http://www.ustream.tv/embed/17568654",南民思潮,,,,,,\n" http://www.ustream.tv/embed/17923438",公民Live直播,,,,,,\n" http://www.ustream.tv/embed/17878254","Jivedbyvoice 公民記者",,,,,,\n" http://www.ustream.tv/embed/17890296","雨停 公民記者","{""bar"": ""http://g0v.github.io/live/status_bar.html?{url}"", ""enable_bar"": {""video"":true}}",,,,,\n" http://www.ustream.tv/embed/17988421","Hulk_Che 公民記者",,,,,,\n" http://www.ustream.tv/embed/18223731",台灣民政府1,,,,,,\n" http://www.ustream.tv/embed/14603849",台灣民政府2,,,,,,\n" http://www.ustream.tv/embed/18445690",penghuyouth,,,,,,\n" http://www.ustream.tv/embed/16630308","Indie Love",,,,,,\n" http://www.ustream.tv/embed/13620594",五六運動、公民論壇,,"週五1800~2100:,中正紀念堂:,自由廣場前:",,,,\n" http://www.ustream.tv/embed/17989057",哲學星期五＠台中,,,,,,\n" http://www.ustream.tv/embed/18608702",哲學星期五＠台北,,,,,,\n" http://www.ustream.tv/embed/18654171",蠻野講堂,,,,,,\n" http://www.ustream.tv/embed/18123294","週五 太陽花講習會",,"活動暫停:,週五1900~2100:,中正紀念堂:,國家劇院前:",,,,\n" http://www.ustream.tv/embed/17640717","人民民主陣線 人民議會",,,,,,\n" http://www.ustream.tv/embed/17569549","g0v 1號機",,,,,,\n" http://www.ustream.tv/embed/17557850","g0v 2號機",,,,,,\n" http://www.ustream.tv/embed/17680676","g0v 3號機",,,,,,\n" http://www.ustream.tv/embed/17592160","g0v 4號機",,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,\n" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,\n" http://www.ustream.tv/embed/17576277",清大野台講堂,,,,,,\n" http://www.ustream.tv/embed/12933307",公投盟直播機,,,,,,\n" http://www.ustream.tv/embed/17859517",南方公民網,,,,,,\n,過往直播,"{""expand"":false} ",,,,,\n" https://www.youtube.com/channel/UCTRscVMDqFN5bU1mAZw1QSg/videos","Dai Wan Lang Youtube過往直播","{""target"":""_blank""}",新分頁:issue,,,,\n" https://www.youtube.com/user/ShotForDemocracy/videos","公民攝影守護民主陣線 Youtube過往直播","{""target"":""_blank""}",新分頁:issue,,,,\n" https://www.youtube.com/watch?v=PsMXyy2yneQ","天光-太陽花學運攝影集 發表會現場直播",,,,,,\n" http://www.appledaily.com.tw/livechannel/archive/43/275/1",7/30雞排妹VS楊伊湄重播,,,,,,\n" https://www.youtube.com/watch?v=4q0gMWcl9JU#t=2825","7/27IDEAS Tech Hackathon 成果展示現場直播",,,,,,\n" https://www.youtube.com/watch?v=jhBebtXaIC8"," 蘋果LIVE[直擊現場]香港七一遊行",,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,\n" https://www.youtube.com/watch?v=HwhE9nKcWdQ",壹電視,,,,,,\n" http://www.youtube.com/embed/mXp2iD8QxvE","濟南路 (g0v)",,,,BITCHDOG,lee,\n" http://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,,,indietaiwan,,\n" http://www.youtube.com/embed/kfLE82spRME",青島東立院廣場,,,,,oJelly,\n" http://www.youtube.com/embed/olBRbBz-q_g","議場內 2F (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/fIpmkvtvtaQ","青島東 (g0v)",,,1915pm,"bert Wang","bert Wang",\n" http://www.youtube.com/embed/-cWb3SnnyfM","青島東 (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,\n" http://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,\n" http://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,\n" http://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,\n" http://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,\n" http://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,\n" http://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ","  ",,"  ",,,\n" http://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,"hychen ",,,\n" http://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,\n" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,,,,,,\n" http://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,,,,\n" http://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,\n" http://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,\n" http://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,\n" http://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,\n" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&src=ptt.publicissue2%40gmail.com&src=ptt.publicissue3%40gmail.com&src=ptt.publicissue4%40gmail.com&src=ptt.publicissue5%40gmail.com&src=ptt.publicissue6%40gmail.com&src=ptt.publicissue7%40gmail.com&mode=week&title=鄉民曆-所有事件",鄉民曆-所有事件,,,,,,\n,持續關注&即將發生事件,"{""expand"": false}",,,,,\n" https://www.facebook.com/aorft/posts/777770432268209","控訴國家暴力自訴案件 3/23~24尋找證人",,有些帳現在不算，以後就沒機會了！:important,,,,\n" http://www.appledaily.com.tw/realtimenews/article/recommend/20140731/443177/","323政院驅離 江:我在睡覺",,,,,,\n" https://www.ptt.cc/bbs/PublicIssue/M.1404310911.A.D60.html","後灣開發案 不要再被財團騙了",,"線上連署:important,結束時間未定:info",,,,\n" https://www.facebook.com/yilanforyilaneses",[宜蘭]「反對北宜直鐵」,,,,,,\n" https://www.ptt.cc/bbs/PublicIssue/M.1406317312.A.B11.html","市政府前香山R1道路記者會 徵收七連",,,,,,\n" http://blog.yam.com/munch/article/74663358",徵收七連莊—陳文賢家族的百年悲傷,"{""target"":""_blank""}",,,,,\n" https://www.facebook.com/vivian.chang.18041/posts/10152368592518022","桃園 五千坪客家老宅即將變廢墟",,,,,,\n" http://news.ltn.com.tw/news/politics/breakingnews/1065208","桃園道東堂有救？ 文化局7/29會勘",,,,,,\n" http://news.ltn.com.tw/news/life/breakingnews/1055057","北纜案 北市府將再上訴",,7月底最後上訴期限:important,,,,\n" http://www.appledaily.com.tw/realtimenews/article/new/20140730/443067/","7/30郭冠英糾正案 省府今決議「依法任用」",,,,,,\n" http://www.stormmediagroup.com/opencms/news/detail/83f5c8b0-08f5-11e4-8645-ef2804cba5a1/?uuid=83f5c8b0-08f5-11e4-8645-ef2804cba5a1",九月海協會長陳德銘訪台,,,,,,\n" https://www.facebook.com/photo.php?fbid=826029420740740&set=a.126145224062500.21698.100000010685369&type=1&permPage=1","7/24~8/2[台中活動]搶救神岡浮圳 10日大作戰",,,,,,\n" http://campaign.tw-npo.org/sign.php?id=20140322102327",反對神岡移水圳砍老樹-浮圳拓路一案,," 網路連署:info",,,,\n" https://www.facebook.com/LoveShengang/photos/a.238796589659260.1073741837.233374530201466/277504339121818/?type=1","大家來找碴之 神岡浮圳 細部設計圖",,,,,,\n" https://www.facebook.com/Save110YearsTaipeiPrison/photos/a.248468998684401.1073741831.247895508741750/268016093396358/?type=1",[全國活動]搶救台北刑務所北官舍與台灣第一菊元百貨,,,,,,\n" https://www.facebook.com/Save110YearsTaipeiPrison/posts/272260729638561",致電守護瀕危的百年台北刑務所,,打電話給立委們:info,,,,\n" http://www.van698.com/thread-157668-1-1.html",鼓勵檢舉賄選要點,,,,,,\n,全台活動,"{""expand"":false}",,,,,\n" https://www.facebook.com/events/634254783357130",8/11~8/29[活動]裝一片機車台獨擋泥板來練勇氣,,"後門咖啡:,台北市大安區復興南路2段332號:,B back咖啡:,台中市西屯區逢甲路225巷16號1樓:,林明正市議員競選總部:,台中市大里區中興路一段300號:,基進側翼總部:,高雄市前金區中正四路235號12F-1:,公投盟建國基地:,台北市濟南路:",,,,\n" http://www.coolloud.org.tw/node/79745",8/19[教育部]崑山中學教職員集體北上陳情,,"教育部:,中山南路5號:,1000~1200",,,,\n" http://www.coolloud.org.tw/node/79747","8/19[勞動部]勞動部助紂為虐 縱容量販業資方公然搶劫",,"1000~1200,勞動部:,大同區延平北路二段83號9樓:",,,,\n" http://www.coolloud.org.tw/node/79751","8/19[財政部]反對虛價課稅 還我漲價歸公",,"1330~1400,財政部大門前:,臺北市中正區愛國西路2號:",,,,\n" http://www.coolloud.org.tw/node/79749","8/19[立院]退輔會划算 人命怎麼算？",,"1100~1300,濟南路一段3之一號:,立法院中興大樓106室:",,,,\n" https://www.facebook.com/coswas.org/photos/a.10150444890403824.422908.369779613823/10152691990748824","8/19[台北活動]文萌樓屋主莫作文化殺手 妓權古蹟不是謀利工具",,"1330~1530,日新國小門口集合:,台北市太原路151號:,=>甲金不動產公司:,台北市太原路152巷10號:",,,,\n" http://www.coolloud.org.tw/node/79753","8/19[台南記者會]談「治水預算」弊端重重 欠缺公民參與",,"1000~1030,百達文教中心:,台南市東區勝利路85號:",,,,\n" http://www.coolloud.org.tw/node/79748",8/19[高雄記者會]反對石化業進駐家園,,"1000~1030,中油大林蒲活動中心:,小港區鳳林路80巷3-3號:",,,,\n" https://www.facebook.com/events/1446948098901644/",8/19[高雄活動]護樹公聽會,,"1400開始,高雄市議會:,高雄市鳳山區國泰路二段156號:",,,,\n,"公投法 割闌尾 小蜜蜂 參政","{""expand"": false}",,,,,\n" http://taiwanmarch.tw/signedonline.html","公投修法 連署書",,線上填寫:info,,,,\n" https://www.facebook.com/Appendectomy/photos/a.249135138604869.1073741828.248848828633500/280790655439317/?type=1&theater",割闌尾連署書回郵正式上線,,免貼郵票:info,,,,\n" https://www.facebook.com/events/752091854832665/","8/19~8/22[[台中活動]全面罷免 今天 你舉了沒？",,"0730~0830,1730~1830,中港路vs文心路路口:",,,,\n" https://www.facebook.com/permalink.php?story_fbid=343015512528015&id=320272928135607","8/19[台北割闌尾]內湖 蔡正元",,"1000~1300,湖光市場:,1800~2000,三民國中對面:",,,,\n,,,"1800~2030,內湖737巷(一流眼鏡行):8/20",,,,\n,,,"1830~2000,葫洲捷運站:8/21",,,,\n,,,"1630~2000:,東湖哈拉中信:,1900~2100:,大湖公園銅像前公民論壇(重點場):8/23",,,,\n,,,"0900~1200,西湖市場:,1630~2000,東湖哈拉中信:,1630~2000,全聯康樂店(近東湖國中):,1700~1930,碧湖公園:8/24",,,,\n" https://www.facebook.com/apkh.tw/posts/358284264323600",8/19[高雄割闌尾]林國正,,"0800~1100,前鎮 興仁公園:,德昌路興仁路口:",,,,\n,,,"0700~0930,楠梓7-11德祥門市:,德賢路246號:8/20",,,,\n" https://www.facebook.com/Appendectomy/photos/a.249135138604869.1073741828.248848828633500/288902977961418",8/19[板橋割闌尾]志工議題討論會,,"1900~2100,新北市板橋區文化路二段311號:",,,,\n,,,"週一1930~2130,雙十人行廣場:,捷運江子翠站三號出口:,沿雙十路走:,屈臣氏和Starbucks之間:",,,,\n" https://www.facebook.com/AppendectomyDeWhip/posts/610964449011595",8/21[板橋割闌尾]林鴻池(固定擺攤),,"週四1900~2100:,新埔郵局:,捷運新埔站旁，近一號出口:,新北市板橋區文化路1段395號:",,,,\n,,,"週六1730~1930:,板橋車站的站前廣場:,板橋萬坪都會公園:,靠近""文化路一段""那一側:,捷運板橋站三號出口:,出來後向文化路一段方向走:",,,,\n" http://www.totalrecall.tw/events.html",[台中割闌尾]蔡錦隆,,,,,,\n,全台講座,"{""expand"": false}",,,,,\n" https://www.facebook.com/events/694286377316418/",8/19[直播]太陽花學運領袖訪問舊金山灣區,,"0900~1100,北加青年網路電台直播:info",,,,\n" https://www.facebook.com/TaoACF/photos/a.341051409378516.1073741828.338215036328820/353210014829322",8/19[南崁工作坊]藝文願景世界公民咖啡館,,"1800~2130,特力家具B1設計講堂:,桃園縣蘆竹鄉中正路1號B1:,南崁交流道旁:",,,,\n" http://www.ystaiwan.org/news/4687/20140819/",8/19[台北講座]我的伊拉克日誌－無情戰火的志願服務,,"1900~2100,台北慕哲咖啡:,善導寺站6號出口:,台北市中正區紹興北街3號:,拖鞋直播預定:info",,,,\n" http://bookshow.kktix.cc/events/patch2gov","8/19[台北活動]自經區溝通會 x 經貿國是會議小腸花聚會",,"1930~2130,BOOKSHOW 說書會:,台灣基隆路一段141號:,BOOKSHOW說書會直播預定:info",,,,\n" https://www.facebook.com/RecaptureTaoyuan/posts/452584751551118","8/19[桃園活動]議會監督 下鄉報告",,"1930~2130,中壢新明夜市:,明德路與新明路口:",,,,\n" https://www.sow.org.tw/civicrm/event/info?id=4142&reset=1","8/19[桃園電影]最後的藍海 The Last Ocean",,"1900~2100,荒野保護協會桃園分會:,中壢市普光二街122巷10號:",,,,\n" https://www.facebook.com/events/682854721807968",8/19[台中演講]台灣國會透明化促進協會成立,,"1400~1700,台中市立葫蘆墩文化中心:, 台灣圓環東路782號:,飛魚台直播預定:info",,,,\n" https://www.facebook.com/polin66666/photos/a.328214877224142.76370.102764756435823/766219423423683",8/19[高雄演講]從國土規劃到高雄氣爆重建,,"1000~1200,高雄市議會 簡報室:,李鴻源教授(前內政部長):important",,,,\n,次日活動,"{""expand"": false}",,,,,\n" https://www.facebook.com/pttcitizen1985/photos/a.307121876091884.1073741829.306729736131098/488475721289831/?type=1&relevant_count=1","(活動延期)[立法院旁濟南路]「去年覺醒 今年行動」晚會",," 時間未定",,,,\n" https://docs.google.com/forms/d/1MLxWcWGETeMbkhH57pPpmCoGecqp8CwVDCyWNf_lVqY/viewform?fbzx=7578344857076229268",8/23[台北講座]一場華麗的革命：我們需要什麼樣的新聞,,"1000~1200,文化大學大新館309教室:,台北市延平南路127號:,楊士範:important,關鍵評論網創辦人:important",,,,\n" https://www.facebook.com/events/259445324255309",8/23[台北工作坊]《告白三一八》：運動經驗工作坊#3,,"1400~1700,關渡美術館:,台灣台北市北投學園路1號:",,,,\n" http://homelessoftaiwan.pixnet.net/blog/post/58100049","8/23[台北講座]反迫遷連線 居住權戰鬥教室 首爾都市治理經驗分享",,"0910~1000,政大公企中心:,彭龍三:important,台灣都市更新受害者聯盟理事長:important,陳虹穎:important,台灣都市更新受害者聯盟研究員:important",,,,\n" https://www.facebook.com/369779613823/photos/a.10150444890403824.422908.369779613823/10152677531508824","8/23[臺北座談]麗君追思系列活動#2 妓運先鋒，守護文萌樓",,"1830~2130,台北市大同區歸綏街139號:",,,,\n" https://www.facebook.com/red99hu/posts/1540102946217924",8/19[台中演講]台灣國會透明化促進協會成立,,"1400~1700,葫蘆墩文化中心:",,,,\n" http://www.tahr.org.tw/node/1455",8/21[高雄講座]社運與鄉民之間,,"1900~2100,高雄市左營區博愛二路198號9樓之一:,台灣人權促進會南部辦公室:,蔡中岳:important,地球公民基金會北部辦公室主任:important,林樂昕 小八:important",,,,\n" https://www.facebook.com/pages/%E6%88%91%E6%98%AF%E4%BA%BA%E6%88%91%E5%8F%8D%E6%A0%B8/307969115955037",五六運動、公民論壇,,"每週五,1800~2100,中正紀年堂 自由廣場:",,,,\n" https://www.facebook.com/wildatheart.org/photos/a.10150270921515580.487714.456802825579/10154405482065580","8/22[台北講座]蠻野講堂#3 扭轉的力量 一段被老樹啟發的社會運動",,"1900~2100,呷米共食廚房3樓:,台北市中正區衡陽路9號:,申惠濟:important, 禾勤景觀工程 負責人:important,搶救老樹的景觀設計師:important",,,,\n" http://www.beclass.com/rid=173525253ac341855daf",8/22[台南演講]WuTalk--作伙講台語，本土語言的世代傳承,,"1900~2100,台南市南門路21號:,潘靜竹:important,府城舊冊店執行長:important,台灣教師聯盟秘書:important",,,,\n" https://www.facebook.com/events/735071376532010/?ref=3&ref_newsfeed_story_type=regular","8/23~8/25[美國華盛頓]2014 FAPA YPG National Advocacy Conference",,,,,,\n" https://zh-tw.facebook.com/TIRAFANS/posts/1455096488079557","8/23[臺北大旗]101臺獨舉大旗 公民自決 悍衛民主",,"1600~1830,台北101捷運4號出口:",,,,\n" http://www.happyradio.com.tw/stream/stream_taipei.php","週一 黑鬥不服從",,"1700~1800,廣播[快樂連播網]:info",,,,\n" http://www.accupass.com/event/register/443138588427426","8/28[台北演講]博雅青年講堂 從媒體到公民記者",,"1800~2100,客家文化會館:,大安區信義路三段157巷11號4F:",,,,\n" http://www.cet-taiwan.org/node/1995",8/29[高雄講座]德國農村的氣候變遷調適和發展,,"1900~2100,地球公民基金會高雄總部:,左營區博愛二路198號9F-2:",,,,\n" https://www.facebook.com/events/791984067512536#_=_","8/30[台北活動]破窗而入 抗爭演習工作坊",,"1400~1700,關渡美術館:",,,,\n" https://www.facebook.com/tainmugreenstone/posts/173364406167628",8/31[台北導覽]天母文化歷史生態導覽,,"0900~1000,台北市中山北路七段81巷45號:",,,,\n" http://www.accupass.com/go/0818windpower",9/11[台北講座]「自願性綠色電價」有何問題,,"1900~2130,中正區羅斯福路二段9號10樓-2:,近捷運古亭站6號出口:,徐光蓉:important,台灣大學大氣科學系教授:important",,,,\n" http://www.beclass.com/rid=173525253ac341855daf","9/19[台南演講]WuTalk 在開發中黯淡的百年華光：台灣對中國的經濟依賴與「自由」貿易",,"1900~2100,台南市南門路21號:,臺南數位文創園區-胖地:,許忠信:important,成大法律系教授:important",,,,\n,文字轉播專區,"{""expand"":false} ",,,,,\n" http://ncc.nctu.pro/","服貿討論 (交大)",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/","文字轉播 (主要) ",,,,,,\n" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,,,,,\n" https://ethercalc.org/static/proxy/live.txt","文字轉播 (內場)",,,,,,\n" https://ethercalc.org/static/proxy/english/","English Transcript",,,,,,\n" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,\n" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,\n" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/8a13Bv9DNla","4-22 零時文播",,,,,au,\n,"人力物資需求 ","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,停止:,,,,\n" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,停止:,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:,,,,\n,抗議行動相關資訊,"{""expand"":""false""} ",,,,,\n" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,\n" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,\n" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,\n,"媒體區  - Media","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,\n" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,\n" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,\n" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,\n" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,\n" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,\n" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,\n" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,\n" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,\n" http://occupation.today/","照片與訊息 Tumblr ",,,,,,\n" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,\n" https://www.facebook.com/NtuNewsEForum",台大新聞E論壇,"{""target"": ""_blank""} ",新視窗:info,,,,\n,連結彙集平台,"{""expand"":false} ",,,,,\n" http://time-fumao.rhcloud.com/",太陽花怪獸,,,,,,\n" http://news.anon.tw",台灣大補帖＃fumao.tw,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,o,a){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return a(function(){return window.scrollTo(0,1)},0)}),a(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(t,e,n,o,a,c){var r,s;return import$(t,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:c.iframes,docs:c.docs,tree:c.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=c.activate(t),"hackfoldr"===(null!=e?e.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,o){return t.saveModalOpen=e,o&&(t.saveBtn=$(o.target)),n&&(a.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==a.savebtn},HackFolder:c,barframeSrc:function(t){var n;return n=t.opts.bar.replace(/\{(\w+)\}/g,function(){return t[arguments[1]]}),e.trustAsResourceUrl(n)},iframeCallback:function(e){return function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),o.current.title=e.title+" – g0v.today",e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return c.getIndex(t,!0,function(){})}}),t.$watch("hackId",function(e){return c.getIndex(e,!1,function(){var n,a;return t.$watch("docId",function(n){var o;return n&&(o=c.activate(n)),"hackfoldr"===(null!=o?o.type:void 0)?(t.showIndex=!0,c.loadRemoteCsv(o.id,function(o,a,r){var s,w,p;return s=function(){var t,e,o,a=[];for(t=0,o=(e=c.tree).length;o>t;++t)s=e[t],s.id===n&&a.push(s);return a}()[0],s.tagFilter=null!=(w=s.tags)&&null!=(p=w[0])?p.content:void 0,s.chidlren||(null==s.children&&(s.children=null!=r?r[0].children:void 0),(w=c.docs).splice.apply(w,[a.length,0].concat(slice$.call(a)))),t.indexDocs=a,t.indexSearch=e.replace(/^g0v-/,"")})):t.showIndex=!1}),t.showIndex="hack.index"===o.current.name,t.showIndex?void 0:!t.docId&&(n=null!=(a=c.docs[0])?a.id:void 0)?o.transitionTo("hack.doc",{docId:n,hackId:t.hackId}):void 0})}),t.collapsed=null!=(r=a.collapsed)?r:n.innerWidth<768,t.$watch("collapsed",function(t){return null!=t?a.collapsed=t:void 0}),t.hackId=(s=o.params.hackId)?s:"congressoccupied",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0}),t.sidebar=!1,t.toggleSidebar=function(){return t.collapsed=!1,t.sidebar=!t.sidebar}})}).directive("resize",["$window"].concat(function(t){return function(e,n){var o;return o=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,o){var a,c,r;return a=t(o.ngxIframe)(e),c=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),a(e&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(r),c(this.contentWindow,!0)}),r=setTimeout(function(){return c(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,o){var a,c;return a=t(o.ngxClickMeta),c=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return c(t)&&!a(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(t,e){var n,o,a,c,r;return n={},o=[],a=[],r={iframes:n,docs:o,tree:a,activate:function(t,c){function r(t){return t.id}var s,w,p,u,i,l,m,h,d,v,b;for(null==c&&(c=!1),w=function(){var e,n,a,c=[];for(e=0,a=(n=o).length;a>e;++e)s=n[e],s.id===t&&c.push(s);
return c}()[0],p=null!=w?w.type:void 0,u=0,l=(i=a).length;l>u;++u)m=i[u],(h=null!=m&&null!=(d=m.children)?d.map(r):void 0)&&in$(t,h)&&(m.expand=!0);return v=c?"edit":"view",b=function(){var e;switch(e=[p],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+v;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+v;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=w.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"video"!==e[0]:if("youtube"===w.provider)return"https://www.youtube.com/embed/"+t;if("ustream"===w.provider)return"http://www.ustream.tv/embed/"+t+"?v=3";break;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=w&&w.hashtag&&(b+=null!=w?w.hashtag:void 0),b&&(b=e.trustAsResourceUrl(b)),"hackfoldr"===(null!=w?w.type:void 0)?w:((h=n[t])?(h.src=b,h.mode=v):n[t]={src:b,doc:w,mode:v},w)},getIndex:function(t,e,n){var a,r,s=this;return c!==t||e?(a=0,(r=function(){var e;return e=CONST_CSV,setTimeout(function(){return c=t,o.length=0,s.processCsv(e,n)},1)})()):n(o)},processCsv:function(t,e){return this.loadCsv(t,o,a,function(t,n){return r.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var n,o=this;return n=CONST_CSV,setTimeout(function(){var t,a;return t=[],a=[],o.loadCsv(n,t,a,function(n){return e(n,t,a)})},1)},loadCsv:function(t,e,n,o){function a(){try{return JSON.parse(g.replace(/""/g,'"'))}catch(t){}}function c(){var t;switch(t=[v],!1){case void 0!==t[0]:return w||(b&&(w=b,b=null),g&&(p=g)),{title:b,type:"dummy",id:"dummy"};case!(F=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:F[1],tag:F[2]};case!(F=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:F[1]};case!(F=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:F[1],id:F[2]};case!(F=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(t[0])):return{type:"video",provider:"youtube",id:F[1],icon:"http://g.etfv.co/"+v};case!(F=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(t[0])):return{type:"video",provider:"ustream",id:F[1],icon:"http://g.etfv.co/"+v};case!(F=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(v)),icon:"http://g.etfv.co/"+F[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",v):void 0}}function r(t){return t.length}function s(t){var e,n,o,a,c;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],o=e[1],a=e[2],c=slice$.call(e,3),{content:o,"class":null!=a?a:"warning"}}var w,p,u,i,l,m,h,d,v,b,g,f,y,k,x,C,I,A,_,F,L,E,S,W,O,T;for(t=replace$.call(t,/^\"?#.*\n/gm,""),p={},i=[],l=0,h=(m=CSV.parse(t)).length;h>l;++l)d=m[l],v=d[0],b=d[1],g=d[2],f=d[3],y=d[4],k=slice$.call(d,5),b&&(b=replace$.call(b,/^"|"$/g,""),g&&(g=replace$.call(g,/^"|"$/g,"")),g&&(g=a()),null==g&&(g={}),f&&(f=replace$.call(f,/^"|"$/g,"")),x=v.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),C=x[0],I=x[1],v=x[2],A=x[3],_=import$({summary:y,hashtag:A,url:v,title:b,indent:I.length,opts:import$(import$({},p),g)},c()),i.push("dummy"!==_.type||null!=(x=_.title)&&x.length?import$(import$({icon:"/img/"+_.type+".png"},_),{tags:(null!=(x=null!=(L=_.opts)?L.tags:void 0)?x:[]).concat((null!=(x=null!=f?f.split(","):void 0)?x:[]).filter(r).map(s))}):null));for(u=i,u.filter(function(t){return null!=t?t.url:void 0}).map(function(t){var e,n,o;return"video"===t.type&&"youtube"===t.provider?(e=gapi.client.youtube.videos.list({id:t.id,part:"snippet"}),e.execute(function(e){var n;return"live"===(null!=(n=e.items)?n[0].snippet.liveBroadcastContent:void 0)?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=t.url.match(/ustream.tv\/embed\/([^?]+)/))?(o=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+o+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(e){var n,o;return"live"===JSON.parse(null!=(n=e.query)&&null!=(o=n.results)&&null!=(n=o.body)?n.p:void 0).results?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),e.splice.apply(e,[0,e.length].concat(slice$.call(u.filter(function(t){return null!=t})))),E=0,i=[],l=0,h=e.length;h>l;++l)W=l,_=e[l],W>0&&_.indent?(O=e[E],T=null!=(m=O.children)?m:O.children=[],T.push(_),i.push(null)):(E=W,i.push(_));return S=i,S=S.filter(function(t){return null!=t}),S=S.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:t.children.length<5),t}),n.splice.apply(n,[0,n.length].concat(slice$.call(S))),o(w,e)}}})});