function import$(t,e){var n={}.hasOwnProperty;for(var o in e)n.call(e,o)&&(t[o]=e[o]);return t}function in$(t,e){for(var n=-1,o=e.length>>>0;++n<o;)if(t===e[n])return!0;return!1}require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-a92a9e6",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,o){return t.$state=e,t.$stateParam=n,t.go=function(t){return o.path(t)},t._build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:n}):void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var CONST_CSV,slice$=[].slice,replace$="".replace;CONST_CSV=',反黑箱服貿協議・守護民主日與夜,,,,直播人,更新人,"g0v.today 每 3 分鐘更新"\nhttp://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,even,\nhttp://ecfa.speaking.tw/,服貿跑馬燈,"{""expand"":false} ",,,,,\n" http://fact.g0v.tw/tisa.html",服貿跑馬燈-時間軸,,,,,,\nhttp://ecfa.speaking.tw/imho.php,"服貿東西軍 ",,,,,,"更新前請 *務必* 先刷新整頁試算表再改，感謝！"\nhttps://sites.google.com/site/twdstreet/,公民審服貿,,街頭民主審議:info,,,,"影音更新時請記得 *保留前方空白* 和 /embed/ 格式, 把 youtube watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!"\n,行動,,,,,,\n" http://123.g0v.today/",三動作護台灣,,致電立委:important,,,ipa,\n" http://appy.tw/",割闌尾計畫,"{""target"": ""_blank""} ",罷免連署:important,,,lee,\nhttp://nonuke.today/,停建核四、遍地烽火全記錄,"{""target"":""_blank""}",新分頁:issue,,,,\nhttp://hackfoldr.org/resistancelive/,香港7.1遊行暨後續活動現場直播,"{""target"":""_blank""}",新分頁:important,,,,\nhttp://i.imgur.com/PNyJAIq.png?3,LiveTW即時獲取直播頻道App,"{""expand"":true}",,,,,\n" https://chrome.google.com/webstore/detail/livetw/fhcffinobmpdchcoapdeoinhdmlihiok",Chrome：,"{""target"":""_blank""}",新分頁:issue,,,,\n" https://play.google.com/store/apps/details?id=com.g0v.live",Android：,"{""target"":""_blank""}",新分頁:issue,,,,\n" http://inlivetw.github.io/chrome/",Web：,,新版:important,,,,\n,影音直播,"{""expand"": true}",,,,,\n" https://adblockplus.org/zh_TW/chrome",Chrome擋廣告外掛,"{""target"":""_blank""}",,5/16加入,,,\n" http://www.ustream.tv/embed/17992061","Masaru 南部實況",,,"Masaru 南部實況轉播 5/9加入",,,\n" http://www.ustream.tv/embed/17157275","PENNYKEN 公民記者",,,"PENNYKEN 5/12加入",,,\n,,,,,,,\n" http://www.ustream.tv/embed/18380808","小鳥台 公民記者",,," 小鳥台 6/28加入",,,\n" http://www.ustream.tv/embed/18030256","阿凱 公民覺醒紀錄",,,"阿凱 5/13加入",,,\n" http://www.ustream.tv/embed/7468658",文源LIVE秀,,,文源LIVE秀,,,\n" http://www.ustream.tv/embed/18103859",文森直播,,,"文森 6/26加入",,,\n" http://www.ustream.tv/embed/18390482","米飛  公民記者",,,"米飛  6/26加入",,,\n" http://www.ustream.tv/embed/17562385","麵線 公民記者",,,,,,\n" https://www.youtube.com/watch?v=waVGo0FB1mQ&feature=youtu.be","行政院 經貿國是會議 - 公民攝影守護民主陣線",,,,,,\n" http://www.ustream.tv/embed/18322764","行政院 經貿國是會議 - 戲智科技-1",,"台中場:,0706:,0900~1220:","戲智科技 6/29新增",,,\n" http://www.ustream.tv/embed/18316356","行政院 經貿國是會議 - 戲智科技-2",,,"戲智科技 6/29新增",,,\n" https://livehouse.in/channel/NectwChannel-M","行政院 經貿國是會議 - 愛卡拉(iKala)-1",,,"愛卡拉(iKala)互動媒體股份有限公司 6/29新增",,,\n" https://livehouse.in/channel/NectwChannel-S","行政院 經貿國是會議 - 愛卡拉(iKala)-2",,,"愛卡拉(iKala)互動媒體股份有限公司 6/29新增",,,\n" http://www.appledaily.com.tw/livechannel/nationalmeeting01",蘋果LIVE經貿國是會議1,,,,,,\n" http://www.appledaily.com.tw/livechannel/nationalmeeting02",蘋果LIVE經貿國是會議2,,,,,,\n,,,,,,,\n" http://www.ustream.tv/embed/18200914",直樹Live頻道,,,,,,\n" http://www.ustream.tv/embed/17969826","飛魚台 南部實況",,,"flyfish1130 5/25加入",,,\n" http://www.ustream.tv/embed/17843610",電池線上,,,battery0922,,,\n" http://www.ustream.tv/embed/17866960",小駿線上,,,小駿,,,\n" http://www.ustream.tv/embed/18246634","love378297 公民記者",,,"love378297 6/28加入",,,\n" http://www.ustream.tv/embed/17733674","jackywolf 公民記者",,,"jackywolf 6/9加入",,,\n" http://www.ustream.tv/embed/18401148",音地大帝,,,,,,\n" http://www.ustream.tv/embed/17948037","豪豬 公民記者",,,"豪豬 5/5加入",,,\n,,,,,,,\n" http://www.ustream.tv/embed/17916604","阿賢 直播台",,,ahsien98,,,\n" http://www.ustream.tv/embed/17811041",Sean-公民記者,,,"sean 5/13修改5/20改回",,,\n" http://www.ustream.tv/embed/17863662","點點 公民記者",,,點點,,,\n" http://www.ustream.tv/embed/3526833",公視新聞網,,,"公視新聞網 6/4加入",,,\n" http://www.ustream.tv/embed/18379958","皮皮 公民記者",,,"皮皮jonethwc 6/26加入",,,\n" http://www.ustream.tv/embed/18174265","小光 公民記者",,,"cvspka04476 6/13加入",,,\n" http://www.ustream.tv/embed/17894339","阿法 公民記者",,,"afrayang211 5/5加入",,,\n" http://www.ustream.tv/embed/17996833","雪倫 公民記者",,,"sharon chen 5/5加入",,,\n" http://www.ustream.tv/embed/17622630","banana 公民記者",,,,,,\n" http://www.ustream.tv/embed/17513092",拖鞋直播-1,,,阿北一號機,,,\n" http://www.ustream.tv/embed/17958896",拖鞋直播-2,,,阿北二號機,,,\n" http://www.ustream.tv/embed/17587751",拖鞋直播-3,,,"拖鞋直播-3 5/18加入",,,\n" http://www.ustream.tv/embed/17894854",拖鞋直播-日本語,,,"拖鞋直播-4 5/28加入",,,\n" http://www.ustream.tv/embed/17857738",公投盟直播,,,公投盟6/27加入,,,\n" http://www.ustream.tv/embed/17568654",南民思潮,,,"南民思潮 6/27新增",,,\n" http://www.ustream.tv/embed/17923438",公民Live直播,,,"公民Live直播 6/27新增",,,\n" http://www.ustream.tv/embed/17878254","Jivedbyvoice 公民記者",,,拖鞋直播陣線,,,\n" http://www.ustream.tv/embed/18127743","Daniel Chen公民記者",,,"Daniel Chen 5/22加入",,,\n" http://www.ustream.tv/embed/17890296","雨停 公民記者","{""bar"": ""http://g0v.github.io/live/status_bar.html?{url}"", ""enable_bar"": {""video"":true}}",,雨停,,,\n" http://www.ustream.tv/embed/17929143","小六 公民記者",,,"小六 5/8加入",,,\n" http://www.ustream.tv/embed/17988421","Hulk_Che 公民記者",,,"Hulk_Che 5/14加入",,,\n" http://www.ustream.tv/embed/13620594",五六運動、公民論壇,,"週五1800~2100:,中正紀念堂:,自由廣場前:",,,,\n" http://www.ustream.tv/embed/18123294","週五 太陽花講習會",,"週五1900~2100:,中正紀念堂:,國家劇院前:,0704&0711暫停乙次:info","太陽花講習會 6/21加入",,,\n" http://www.ustream.tv/embed/17640717","人民民主陣線 人民議會",,"週六1900~2200:,青島東路8號:",peopleboss,,,\n" http://musou.tw/schedules",沃草國會無雙,"{""target"":""_blank""}",,國會無雙IVOD,,,\n" http://www.appledaily.com.tw/livechannel/subject/17",蘋果立法院議會LIVE,,,"蘋果立法院議會 6/13 加入",,,\n" http://www.ustream.tv/embed/17012502","沃草國會無雙 第一競技場",,,"沃草國會無雙-1 5/15加入",,,\n" http://www.ustream.tv/embed/17401996","沃草國會無雙 第二競技場",,,"國會無雙 5/13加入",,,\n" http://www.ustream.tv/embed/17989031","沃草國會無雙 第三競技場",,,"沃草國會無雙-1 5/15加入",,,\n" https://livehouse.in/channel/watchout",【沃草直播室】,,,"沃草直播室 5/25加入",,,\n" https://livehouse.in/channel/watchout2",【沃草直播室2】,,,"沃草直播室 5/25加入",,,\n" http://www.ustream.tv/embed/17823792","民報直播 立法院OnLine",,,"cks6662 5/13加入",,,\n" http://www.ustream.tv/embed/17569549","g0v 1號機",,,,jackie6chiang,chien,\n" http://www.ustream.tv/embed/17557850","g0v 2號機",,,,,,\n" http://www.ustream.tv/embed/17680676","g0v 3號機",,,,,,\n" http://www.ustream.tv/embed/17592160","g0v 4號機",,,,jonethwc,au,\n" http://www.ustream.tv/embed/17733928","只是路過 (公民記者)",,,,,,\n" http://www.ustream.tv/embed/17747496",台南魚腸花論壇,,,,,,\n" http://www.ustream.tv/embed/17548030","English LIVE",,,,(1F),rsghost,\n" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,\n" http://www.ustream.tv/embed/17576277",清大野台講堂,,,,,,\n,過往直播,"{""expand"":false} ",,,,,\n" https://www.youtube.com/watch?v=jhBebtXaIC8"," 蘋果LIVE[直擊現場]香港七一遊行",,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,\n" http://www.youtube.com/embed/iFNS5umx3Uo",壹電視,,,,,,\n" http://www.youtube.com/embed/mXp2iD8QxvE","濟南路 (g0v)",,,,BITCHDOG,lee,\n" http://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,,,indietaiwan,,\n" http://www.youtube.com/embed/kfLE82spRME",青島東立院廣場,,,,,oJelly,\n" http://www.youtube.com/embed/olBRbBz-q_g","議場內 2F (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/fIpmkvtvtaQ","青島東 (g0v)",,,1915pm,"bert Wang","bert Wang",\n" http://www.youtube.com/embed/-cWb3SnnyfM","青島東 (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,\n" http://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,\n" http://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,\n" http://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,\n" http://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,\n" http://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,\n" http://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ","  ",,"  ",,,\n" http://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,"hychen ",,,\n" http://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,\n" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,,,,,,\n" http://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,,,,\n" http://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,\n" http://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,\n" http://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,\n" http://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,\n,全台活動事件,"{""expand"": true}",,,,,\n" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&mode=week","鄉民日報 事件列表",,,6/19新增,,,\n" http://www.cwb.gov.tw/V7/forecast/town368/towns/6300500.htm?layer=0&type=Weather&time=3Hr",立法院(中正區)天氣預報,,,6/13新增,,,\n" http://www.ly.gov.tw/01_lyinfo/0109_meeting/meetingList.action","立法院 會議預報",,,"6/4日 新增",,,\n" https://www.facebook.com/aorft/posts/777770432268209","控訴國家暴力自訴案件 0323~24尋找證人",,有些帳現在不算，以後就沒機會了！:important,,,,\n" https://www.facebook.com/photo.php?fbid=819140311430845&set=a.804875019524041.1073741827.804848699526673&type=1&theater",0706割闌尾HereWEGO!,,"0900~1200,泰山公有市場&福泰市場:,1400~1500,淡水竹圍民族路三角市集:,1600~2000,淡水英專路屈臣氏:",,,,\n" https://www.facebook.com/CafeDelam/photos/a.377311555656726.91535.377298322324716/679613385426540/?type=1&theater",0706從法律角度看服貿,,"1400~1600,陳家慶同學(臺大法研所公法組):important,Cafe De lam 竹南咖啡:,苗栗縣大營路99號:",,,,\n" https://plus.google.com/events/c79e74aha27oc894uhqrtaaoc4o",0706袁紅冰教授台南板聚,"{""target"":""_blank""}","1400~1600,政大書城(台南店):,Hangouts 直播預定:info,新分頁:",,,,\n" https://www.facebook.com/photo.php?fbid=1452992851623387&set=gm.646561768753566&type=1","0706雙湖音樂祭 補正公投法 割掉祭止兀",,"1400~2100,北市美麗華百樂園:,捷運劍南路站:,仿生鳥:important,鴿闌尾:important,青春快閃:important,島國前進:important",,,,\n" https://www.facebook.com/events/553766021400093/",0706王奕凱輔選志工大會,,"1500~1700,台北市青島東路5號2樓之2:",,,,\n" https://www.facebook.com/apkh.tw/posts/341132112705482","0706割闌尾 黃昭順 林國正",,"1500~2000,楠梓火車站前廣場右側:",,,,\n" https://www.facebook.com/events/1499824633565724/","0706P!SCO-Live at 一見雙雕藝術季-夏日音樂聚",,"1600~1800馬沙溝濱海遊憩區:,台南市將軍區平沙里140號:,點點直播預定:info",,,,\n" https://www.facebook.com/photo.php?fbid=331106903706889&set=a.102591343225114.6915.100004227453348&type=1","0706光榮高雄 台獨ing",,"1900~2200,每人低消NTD120.:important,高雄市鼓山區蓬萊路99號B10倉庫:,史明:important,黃敏紅:important,張慶恩:important,鄭兆恩:important,Masaru直播預定:info","FB照片 6/30新增",,,\n" http://watchout.kktix.cc/events/citizenreporters","0706以前報名 沃草 夏日公民記者副本計劃","{""target"":""_blank""}","全國大專院校在學學生:important,7/16/17/18/21/22/23/24,1300-1500,臺北市區:",,,,\n" https://www.ptt.cc/bbs/ShuangHe/M.1404035577.A.534.html","=====分隔線===== 0709以前 永和 搶救圖書館與國父紀念館 連署",," 實體聯署站結束:,仍可透過郵寄e-mail連署",,,,\n" https://www.facebook.com/photo.php?fbid=10202844958379045&set=a.1126191389017.2019054.1054135540&type=1","0709我是創作人 我主張暫停著作權修法",,"1400開始,辛亥路二段185號:,台大後門斜對面:",,,,\n" https://www.facebook.com/pages/%E6%88%91%E6%98%AF%E4%BA%BA%E6%88%91%E5%8F%8D%E6%A0%B8/307969115955037",五六運動、公民論壇,,"每周五 1800起 自由廣場",因為性質既是活動，又是資訊整合，因此重複放了一份,,,\n" http://www.taiwantt.org.tw/tw/index.php?option=com_content&task=view&id=11641&Itemid=57",0711槍決五個人之後？–談死刑與國家暴力,,"1900~2100,三民御璽1F會議室:,彰化市三民路119號:,台大法律系專任教授 李茂生:important",,,,\n,已結束活動列表,"{""expand"":false} ",,,,,\n" https://www.facebook.com/events/656220247793483/?ref=22","0705壓不扁的玫瑰 寫下台灣反抗史的家族",,,,,,\n" https://www.facebook.com/taiwanmarch.tw/posts/557881387654081","0705島國前進，南北合進 週末行動",,,,,,\n" https://www.facebook.com/photo.php?fbid=608397309268309&set=gm.291324377708124&type=1","0705割闌尾 林鴻池 板橋遊行x仿聲鳥",,,,,,\n" https://www.facebook.com/events/319093591589182/?source=1",0704全民關注立法院搞什麼鬼,,,,,,\n" https://www.facebook.com/milkfishtainan/photos/a.673284986077545.1073741827.673275422745168/714602495279127/?type=1","0704魚腸花街頭文藝復興運動 台南青年志士大對談會",,,,,,\n" https://www.facebook.com/photo.php?fbid=803357396371797&set=a.168257056548504.32682.142163125824564&type=1","0704哲五 割割罷罷真偉大 割闌尾進行式",,,,,,\n" https://www.facebook.com/appendectomy737/photos/a.731621866861351.1073741827.731115960245275/755812644442273/?type=1","0703割闌尾 港湖蔡正元",,"1100~1400,成德市場:important,永吉涼麵旁:important,後山埤站3號出口:",,,,\n" https://www.facebook.com/AppendectomyDeWhip/posts/607239036050803?fref=nf","0703割闌尾 板橋林鴻池",,"1900~2100,板橋文化路郵局:important,新埔站一號出口:important,新北市板橋區文化路1段395號:",,,,\n" https://www.facebook.com/photo.php?fbid=315499578608262&set=a.276078935883660.1073741828.240170506141170&type=1",0630國會無雙兩場賽事,,,"FB照片 6/30新增",,,\n" http://www.happyradio.com.tw/stream/stream_taipei.php",0630[廣播]黑鬥不服從,,,"線上廣播 6/30新增",,,\n" https://www.facebook.com/Appendectomy/photos/a.249135138604869.1073741828.248848828633500/273358276182555/?type=1",0629[割闌尾]WEGO+祭止兀,,,6/29新增,,,\n" https://www.facebook.com/photo.php?fbid=555027307939489&set=a.538208232954730.1073741828.534777863297767&type=1",0629【島國前進，公投修法連署】台北週末行動,,,6/29新增,,,\n" https://www.facebook.com/photo.php?fbid=314406452050908&set=a.276078935883660.1073741828.240170506141170&type=1",0629台灣，你資安有洞嗎？(沃草),,,6/29新增,,,\n" http://www.ndc.gov.tw/m1.aspx?sNo=0060472","0629「行政院」經貿國是會議 南區分區會議",,,6/29新增,,,\n" https://www.facebook.com/ey.gov.tw/photos/a.449506128410605.115211.135213893173165/837984339562780/","0628~29「行政院」經貿國是會議 南區分區會議",,,,,,\n" https://www.facebook.com/photo.php?fbid=638988389524693&set=a.589277274495805.1073741829.100002406139125&type=1&ref=nf","0625~0628 國台辦 張志軍主任 訪台事件",,,,,,\n" https://www.facebook.com/photo.php?fbid=812637358746613&set=a.126145224062500.21698.100000010685369&type=1&theater","0628台灣獨立建國大旗隊 集合",,,FB活動頁6/28新增,,,\n" http://www.peoplenews.tw/news/f1411b3b-4f37-42cf-878e-306d534eaf1b","0628  張志軍 最後一天行程 註:天后宮取消",,,,,,\n" https://www.facebook.com/events/1487022118201923/?ref=3&ref_newsfeed_story_type=regular","0628 2014鹿港噴水節",,,,,,\n" https://www.facebook.com/photo.php?fbid=431887586954168&set=a.368489606627300.1073741828.367922930017301&type=1",0628最後一戰，重返機場,,,,,,\n" https://www.facebook.com/aorft/posts/773990205979565"," 0626緊急！立院回娘家 國民黨 甲級動員 自由經濟示範區特別條例草案"," ",,"FB照片 6/26新增",,,\n" http://www.cwb.gov.tw/V7/forecast/town368/towns/6300500.htm?layer=0&type=Weather&time=3Hr",立法院(中正區)天氣預報,,,6/13新增,,,\n" http://www.ly.gov.tw/01_lyinfo/0109_meeting/meetingList.action","立法院 會議預報",,,"6/4日 新增",,,\n" https://www.facebook.com/events/334046850081575/",0626【干你屁事】迎接張志軍！遍地開花！,,,FB照片6/23新增,,,\n" https://www.facebook.com/groups/twobservers/permalink/860870063941775/","0625「自己的民主，自己守，自己的選票，自己顧」聯合記者會 已結束",,,FB社團6/25新增,,,\n" https://www.facebook.com/events/275916992593654/",0625【紅牌行動】人民舉紅牌，拒絕王張會！,,,FB照片6/23新增,,,\n" https://www.facebook.com/photo.php?fbid=773450982700154&set=a.266374543407803.68474.265413413503916&type=1","0625照三餐K 絕對不讓中國張志軍這麼好吃睏",,,FB照片6/25新增,,,\n" http://berryvoice.org/b/berry-watch/item/132-ftz-finance","0625[自經區金融篇] 金管會聲東擊西 粉飾太平 台灣門戶全開!",,,6/21新增,,,\n" http://ncc.nctu.pro/","服貿討論 (交大)",,,,nctu,au,\n,文字轉播專區,"{""expand"":false} ","重要:important ",,,,\n" https://ethercalc.org/static/proxy/hackpad/","文字轉播 (主要) ",,每分鐘更新:warning,,,,\n" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,"即時更新:warning ",,,,\n" https://ethercalc.org/static/proxy/live.txt","文字轉播 (內場)",,,,,,\n" https://ethercalc.org/static/proxy/english/","English Transcript",,,,,,\n" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,\n" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,\n" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,\nhttps://ethercalc.org/static/proxy/hackpad/8a13Bv9DNla,"4-22 零時文播",,,,,au,\n,"人力物資需求 ","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,,,,,\n" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:error,,,,\n,抗議行動相關資訊,"{""expand"":""false""} ",,,,,\n" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,\n" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,\n" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,\n,"媒體區  - Media","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,\n" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,\n" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,\n" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,\n" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,\n" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,\n" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,\n" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,\n" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,\n" http://occupation.today/","照片與訊息 Tumblr ",,,,,,\n" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,\n" https://www.facebook.com/NtuNewsEForum",台大新聞E論壇,"{""target"": ""_blank""} ",新視窗:info,,,,\n,連結彙集平台,"{""expand"":false} ",,,,,\n" http://time-fumao.rhcloud.com/",太陽花怪獸,,,,,,\n" http://news.anon.tw",台灣大補帖＃fumao.tw,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,o,a){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return a(function(){return window.scrollTo(0,1)},0)}),a(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(t,e,n,o,a,r){var c,s;return import$(t,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=r.activate(t),"hackfoldr"===(null!=e?e.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,o){return t.saveModalOpen=e,o&&(t.saveBtn=$(o.target)),n&&(a.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==a.savebtn},HackFolder:r,barframeSrc:function(t){var n;return n=t.opts.bar.replace(/\{(\w+)\}/g,function(){return t[arguments[1]]}),e.trustAsResourceUrl(n)},iframeCallback:function(e){return function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),o.current.title=e.title+" – g0v.today",e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),t.$watch("hackId",function(e){return r.getIndex(e,!1,function(){var n,a;return t.$watch("docId",function(n){var o;return n&&(o=r.activate(n)),"hackfoldr"===(null!=o?o.type:void 0)?(t.showIndex=!0,r.loadRemoteCsv(o.id,function(o,a,c){var s,p,i;return s=function(){var t,e,o,a=[];for(t=0,o=(e=r.tree).length;o>t;++t)s=e[t],s.id===n&&a.push(s);return a}()[0],s.tagFilter=null!=(p=s.tags)&&null!=(i=p[0])?i.content:void 0,s.chidlren||(null==s.children&&(s.children=null!=c?c[0].children:void 0),(p=r.docs).splice.apply(p,[a.length,0].concat(slice$.call(a)))),t.indexDocs=a,t.indexSearch=e.replace(/^g0v-/,"")})):t.showIndex=!1}),t.showIndex="hack.index"===o.current.name,t.showIndex?void 0:!t.docId&&(n=null!=(a=r.docs[0])?a.id:void 0)?o.transitionTo("hack.doc",{docId:n,hackId:t.hackId}):void 0})}),t.collapsed=null!=(c=a.collapsed)?c:n.innerWidth<768,t.$watch("collapsed",function(t){return null!=t?a.collapsed=t:void 0}),t.hackId=(s=o.params.hackId)?s:"congressoccupied",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0}),t.sidebar=!1,t.toggleSidebar=function(){return t.collapsed=!1,t.sidebar=!t.sidebar}})}).directive("resize",["$window"].concat(function(t){return function(e,n){var o;return o=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,o){var a,r,c;return a=t(o.ngxIframe)(e),r=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),a(e&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(c),r(this.contentWindow,!0)}),c=setTimeout(function(){return r(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,o){var a,r;return a=t(o.ngxClickMeta),r=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return r(t)&&!a(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(t,e){var n,o,a,r,c;return n={},o=[],a=[],c={iframes:n,docs:o,tree:a,activate:function(t,r){function c(t){return t.id}var s,p,i,u,l,w,h,d,m,v,g;for(null==r&&(r=!1),p=function(){var e,n,a,r=[];for(e=0,a=(n=o).length;a>e;++e)s=n[e],s.id===t&&r.push(s);return r}()[0],i=null!=p?p.type:void 0,u=0,w=(l=a).length;w>u;++u)h=l[u],(d=null!=h&&null!=(m=h.children)?m.map(c):void 0)&&in$(t,d)&&(h.expand=!0);return v=r?"edit":"view",g=function(){var e;switch(e=[i],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+v;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+v;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=p.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"video"!==e[0]:if("youtube"===p.provider)return"https://www.youtube.com/embed/"+t;if("ustream"===p.provider)return"http://www.ustream.tv/embed/"+t+"?v=3";break;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=p&&p.hashtag&&(g+=null!=p?p.hashtag:void 0),g&&(g=e.trustAsResourceUrl(g)),"hackfoldr"===(null!=p?p.type:void 0)?p:((d=n[t])?(d.src=g,d.mode=v):n[t]={src:g,doc:p,mode:v},p)},getIndex:function(t,e,n){var a,c,s=this;return r!==t||e?(a=0,(c=function(){var e;return e=CONST_CSV,setTimeout(function(){return r=t,o.length=0,s.processCsv(e,n)},1)})()):n(o)},processCsv:function(t,e){return this.loadCsv(t,o,a,function(t,n){return c.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var n,o=this;return n=CONST_CSV,setTimeout(function(){var t,a;return t=[],a=[],o.loadCsv(n,t,a,function(n){return e(n,t,a)})},1)},loadCsv:function(t,e,n,o){function a(){try{return JSON.parse(b.replace(/""/g,'"'))}catch(t){}}function r(){var t;switch(t=[v],!1){case void 0!==t[0]:return p||(g&&(p=g,g=null),b&&(i=b)),{title:g,type:"dummy",id:"dummy"};case!(A=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:A[1],tag:A[2]};case!(A=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:A[1]};case!(A=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:A[1],id:A[2]};case!(A=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(t[0])):return{type:"video",provider:"youtube",id:A[1],icon:"http://g.etfv.co/"+v};case!(A=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(t[0])):return{type:"video",provider:"ustream",id:A[1],icon:"http://g.etfv.co/"+v};case!(A=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(v)),icon:"http://g.etfv.co/"+A[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",v):void 0}}function c(t){return t.length}function s(t){var e,n,o,a,r;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],o=e[1],a=e[2],r=slice$.call(e,3),{content:o,"class":null!=a?a:"warning"}}var p,i,u,l,w,h,d,m,v,g,b,f,y,k,C,x,I,E,F,A,L,_,B,S,W,N;for(t=replace$.call(t,/^\"?#.*\n/gm,""),i={},l=[],w=0,d=(h=CSV.parse(t)).length;d>w;++w)m=h[w],v=m[0],g=m[1],b=m[2],f=m[3],y=m[4],k=slice$.call(m,5),g&&(g=replace$.call(g,/^"|"$/g,""),b&&(b=replace$.call(b,/^"|"$/g,"")),b&&(b=a()),null==b&&(b={}),f&&(f=replace$.call(f,/^"|"$/g,"")),C=v.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),x=C[0],I=C[1],v=C[2],E=C[3],F=import$({summary:y,hashtag:E,url:v,title:g,indent:I.length,opts:import$(import$({},i),b)},r()),l.push("dummy"!==F.type||null!=(C=F.title)&&C.length?import$(import$({icon:"/img/"+F.type+".png"},F),{tags:(null!=(C=null!=(L=F.opts)?L.tags:void 0)?C:[]).concat((null!=(C=null!=f?f.split(","):void 0)?C:[]).filter(c).map(s))}):null));for(u=l,u.filter(function(t){return null!=t?t.url:void 0}).map(function(t){var e,n,o;return"video"===t.type&&"youtube"===t.provider?(e=gapi.client.youtube.videos.list({id:t.id,part:"snippet"}),e.execute(function(e){var n;return"live"===(null!=(n=e.items)?n[0].snippet.liveBroadcastContent:void 0)?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=t.url.match(/ustream.tv\/embed\/([^?]+)/))?(o=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+o+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(e){var n,o;return"live"===JSON.parse(null!=(n=e.query)&&null!=(o=n.results)&&null!=(n=o.body)?n.p:void 0).results?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),e.splice.apply(e,[0,e.length].concat(slice$.call(u.filter(function(t){return null!=t})))),_=0,l=[],w=0,d=e.length;d>w;++w)S=w,F=e[w],S>0&&F.indent?(W=e[_],N=null!=(h=W.children)?h:W.children=[],N.push(F),l.push(null)):(_=S,l.push(F));return B=l,B=B.filter(function(t){return null!=t}),B=B.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:t.children.length<5),t}),n.splice.apply(n,[0,n.length].concat(slice$.call(B))),o(p,e)}}})});