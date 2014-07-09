const CONST_CSV = """
,反黑箱服貿協議・守護民主日與夜,,,,直播人,更新人,"g0v.today 每 3 分鐘更新"
http://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,even,
http://ecfa.speaking.tw/,服貿跑馬燈,"{""expand"":false} ",,,,,
" http://fact.g0v.tw/tisa.html",服貿跑馬燈-時間軸,,,,,,
http://ecfa.speaking.tw/imho.php,"服貿東西軍 ",,,,,,"更新前請 *務必* 先刷新整頁試算表再改，感謝！"
https://sites.google.com/site/twdstreet/,公民審服貿,,街頭民主審議:info,,,,"影音更新時請記得 *保留前方空白* 和 /embed/ 格式, 把 youtube watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!"
,行動,,,,,,
" http://123.g0v.today/",三動作護台灣,,致電立委:important,,,ipa,
" http://appy.tw/",割闌尾計畫,"{""target"": ""_blank""} ",罷免連署:important,,,lee,
http://nonuke.today/,停建核四、遍地烽火全記錄,"{""target"":""_blank""}",新分頁:issue,,,,
http://hackfoldr.org/resistancelive/,香港7.1遊行暨後續活動現場直播,"{""target"":""_blank""}",新分頁:important,,,,
http://i.imgur.com/PNyJAIq.png?3,LiveTW即時獲取直播頻道App,"{""expand"":true}",,,,,
" https://chrome.google.com/webstore/detail/livetw/fhcffinobmpdchcoapdeoinhdmlihiok",Chrome：,"{""target"":""_blank""}",新分頁:issue,,,,
" https://play.google.com/store/apps/details?id=com.g0v.live",Android：,"{""target"":""_blank""}",新分頁:issue,,,,
" http://inlivetw.github.io/chrome/",Web：,,新版:important,,,,
,影音直播,"{""expand"": true}",,,,,
" https://adblockplus.org/zh_TW/chrome",Chrome擋廣告外掛,"{""target"":""_blank""}",,5/16加入,,,
" http://www.ustream.tv/embed/18103859",文森直播,,,"文森 6/26加入",,,
" http://www.ustream.tv/embed/17948037","豪豬 公民記者",,,"豪豬 5/5加入",,,
" http://www.ustream.tv/embed/17863662","點點 公民記者",,,點點,,,
" http://www.ustream.tv/embed/18380808","小鳥台 公民記者",,," 小鳥台 6/28加入",,,
" http://www.ustream.tv/embed/17733674","jackywolf 公民記者",,,"jackywolf 6/9加入",,,
" http://www.ustream.tv/embed/18030256","阿凱 公民覺醒紀錄",,,"阿凱 5/13加入",,,
" http://www.ustream.tv/embed/17992061","Masaru 南部實況",,,"Masaru 南部實況轉播 5/9加入",,,
" http://www.ustream.tv/embed/17157275","PENNYKEN 公民記者",,,"PENNYKEN 5/12加入",,,
" http://www.ustream.tv/embed/7468658",文源LIVE秀,,,文源LIVE秀,,,
" http://www.ustream.tv/embed/18390482","米飛  公民記者",,,"米飛  6/26加入",,,
" http://www.ustream.tv/embed/17562385","麵線 公民記者",,,,,,
" http://www.ustream.tv/embed/18200914",直樹Live頻道,,,,,,
" http://www.ustream.tv/embed/17969826","飛魚台 南部實況",,,"flyfish1130 5/25加入",,,
" http://www.ustream.tv/embed/17843610",電池線上,,,battery0922,,,
" http://www.ustream.tv/embed/17866960",小駿線上,,,小駿,,,
" http://www.ustream.tv/embed/18246634","love378297 公民記者",,,"love378297 6/28加入",,,
" http://www.ustream.tv/embed/18401148",音地大帝,,,,,,
" http://www.ustream.tv/embed/17916604",阿賢文旦直播台,,,ahsien98,,,
" http://www.ustream.tv/embed/17811041",Sean-公民記者,,,"sean 5/13修改5/20改回",,,
" http://www.ustream.tv/embed/3526833",公視新聞網,,,"公視新聞網 6/4加入",,,
" http://www.ustream.tv/embed/18379958","皮皮 公民記者",,,"皮皮jonethwc 6/26加入",,,
" http://www.ustream.tv/embed/18174265","小光 公民記者",,,"cvspka04476 6/13加入",,,
" http://www.ustream.tv/embed/17894339","阿法 公民記者",,,"afrayang211 5/5加入",,,
" http://www.ustream.tv/embed/17996833","雪倫 公民記者",,,"sharon chen 5/5加入",,,
" http://www.ustream.tv/embed/17622630","banana 公民記者",,,,,,
" http://www.ustream.tv/embed/17513092",拖鞋直播-1,,,阿北一號機,,,
" http://www.ustream.tv/embed/17958896",拖鞋直播-2,,,阿北二號機,,,
" http://www.ustream.tv/embed/17587751",拖鞋直播-3,,,"拖鞋直播-3 5/18加入",,,
" http://www.ustream.tv/embed/17894854",拖鞋直播-日本語,,,"拖鞋直播-4 5/28加入",,,
" http://www.ustream.tv/embed/17857738",公投盟直播,,,公投盟6/27加入,,,
" http://www.ustream.tv/embed/17568654",南民思潮,,,"南民思潮 6/27新增",,,
" http://www.ustream.tv/embed/17923438",公民Live直播,,,"公民Live直播 6/27新增",,,
" http://www.ustream.tv/embed/17878254","Jivedbyvoice 公民記者",,,拖鞋直播陣線,,,
" http://www.ustream.tv/embed/18127743","Daniel Chen公民記者",,,"Daniel Chen 5/22加入",,,
" http://www.ustream.tv/embed/17890296","雨停 公民記者","{""bar"": ""http://g0v.github.io/live/status_bar.html?{url}"", ""enable_bar"": {""video"":true}}",,雨停,,,
" http://www.ustream.tv/embed/17929143","小六 公民記者",,,"小六 5/8加入",,,
" http://www.ustream.tv/embed/17988421","Hulk_Che 公民記者",,,"Hulk_Che 5/14加入",,,
" http://www.ustream.tv/embed/17755037","帽客 公民記者",,,,,,
" http://www.ustream.tv/embed/18223731",crazylovesk8,,,,,,
" http://www.ustream.tv/embed/14603849",高雄_幸福的臺灣人,,,,,,
" http://www.ustream.tv/embed/18445690",penghuyouth,,,,,,
" http://www.ustream.tv/embed/13620594",五六運動、公民論壇,,"週五1800~2100:,中正紀念堂:,自由廣場前:",,,,
" http://www.ustream.tv/embed/17640717","人民民主陣線 人民議會",,"週六1900~2200:,青島東路8號:",peopleboss,,,
" http://www.ustream.tv/embed/18123294","週五 太陽花講習會",,"週五1900~2100:,中正紀念堂:,國家劇院前:,0711暫停乙次:info","太陽花講習會 6/21加入",,,
" http://www.ustream.tv/embed/17569549","g0v 1號機",,,,jackie6chiang,chien,
" http://www.ustream.tv/embed/17557850","g0v 2號機",,,,,,
" http://www.ustream.tv/embed/17680676","g0v 3號機",,,,,,
" http://www.ustream.tv/embed/17592160","g0v 4號機",,,,jonethwc,au,
" http://www.ustream.tv/embed/17733928","只是路過 (公民記者)",,,,,,
" http://www.ustream.tv/embed/17747496",台南魚腸花論壇,,,,,,
" http://www.ustream.tv/embed/17548030","English LIVE",,,,(1F),rsghost,
" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,
" http://www.ustream.tv/embed/17576277",清大野台講堂,,,,,,
" http://www.ustream.tv/embed/12933307",公投盟直播機,,,,,,
" http://www.ustream.tv/embed/17858274",台南民主店頭,,,,,,
" http://www.ustream.tv/embed/17859517",南方公民網,,,,,,
" http://www.ustream.tv/embed/18109047","新竹蕾拉 公民記者",,,,,,
" http://www.ustream.tv/embed/18322764","行政院 經貿國是會議 - 戲智科技-1",,"花蓮場:,0712:,0900~1710:","戲智科技 6/29新增",,,
" http://www.ustream.tv/embed/18316356","行政院 經貿國是會議 - 戲智科技-2",,,"戲智科技 6/29新增",,,
" https://livehouse.in/channel/NectwChannel-M","行政院 經貿國是會議 - 愛卡拉(iKala)-1",,,"愛卡拉(iKala)互動媒體股份有限公司 6/29新增",,,
" https://livehouse.in/channel/NectwChannel-S","行政院 經貿國是會議 - 愛卡拉(iKala)-2",,,"愛卡拉(iKala)互動媒體股份有限公司 6/29新增",,,
" http://www.appledaily.com.tw/livechannel/nationalmeeting01",蘋果LIVE經貿國是會議1,,,,,,
" http://www.appledaily.com.tw/livechannel/nationalmeeting02",蘋果LIVE經貿國是會議2,,,,,,
" http://musou.tw/schedules",沃草國會無雙,"{""target"":""_blank""}",,國會無雙IVOD,,,
" http://www.appledaily.com.tw/livechannel/subject/17",蘋果立法院議會LIVE,,,"蘋果立法院議會 6/13 加入",,,
" http://www.ustream.tv/embed/17012502","沃草國會無雙 第一競技場",,,"沃草國會無雙-1 5/15加入",,,
" http://www.ustream.tv/embed/17401996","沃草國會無雙 第二競技場",,,"國會無雙 5/13加入",,,
" http://www.ustream.tv/embed/17989031","沃草國會無雙 第三競技場",,,"沃草國會無雙-1 5/15加入",,,
" http://www.ustream.tv/embed/17823792","民報直播 立法院OnLine",,,"cks6662 5/13加入",,,
,過往直播,"{""expand"":false} ",,,,,
" https://www.youtube.com/watch?v=jhBebtXaIC8"," 蘋果LIVE[直擊現場]香港七一遊行",,,,,,
" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,
" http://www.youtube.com/embed/iFNS5umx3Uo",壹電視,,,,,,
" http://www.youtube.com/embed/mXp2iD8QxvE","濟南路 (g0v)",,,,BITCHDOG,lee,
" http://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,,,indietaiwan,,
" http://www.youtube.com/embed/kfLE82spRME",青島東立院廣場,,,,,oJelly,
" http://www.youtube.com/embed/olBRbBz-q_g","議場內 2F (蘋報) ",,,,appledaily,au,
" http://www.youtube.com/embed/fIpmkvtvtaQ","青島東 (g0v)",,,1915pm,"bert Wang","bert Wang",
" http://www.youtube.com/embed/-cWb3SnnyfM","青島東 (蘋報) ",,,,appledaily,au,
" http://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,
" http://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,
" http://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,
" http://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,
" http://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,
" http://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,
" http://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,
" http://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,
" http://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ","  ",,"  ",,,
" http://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,"hychen ",,,
" http://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,
" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,,,,,,
" http://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,,,,
" http://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,
" http://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,
" http://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,
" http://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,
,全台活動事件,"{""expand"": true}",,,,,
" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&mode=week","鄉民日報 事件列表",,,,,,
" http://www.cwb.gov.tw/V7/forecast/town368/towns/6300500.htm?layer=0&type=Weather&time=3Hr",立法院(中正區)天氣預報,,,,,,
" http://www.ly.gov.tw/01_lyinfo/0109_meeting/meetingList.action","立法院 會議預報",,,,,,
" https://www.facebook.com/aorft/posts/777770432268209","控訴國家暴力自訴案件 0323~24尋找證人",,有些帳現在不算，以後就沒機會了！:important,,,,
" https://www.facebook.com/photo.php?fbid=436065626536364&set=a.368489606627300.1073741828.367922930017301&type=1","備戰通知 二次臨時會已排入自經區審議",,議程時間0728~0808:important,,,,
" https://www.facebook.com/events/1532167880340395/","0710[小蜜蜂] 桃園八德",,"1830~2130,桃園市大有路189號(新光三越1F):",,,,
" https://www.facebook.com/AppendectomyDeWhip/posts/609996085775098","0710[割闌尾]板橋 林鴻池(固定擺攤)",,"1900~2100,板橋郵局:,捷運新埔站旁，近一號出口:,新北市板橋區文化路1段395號:",,,,
" https://www.facebook.com/photo.php?fbid=342244939260866&set=a.337300016422025.1073741827.337299219755438&type=1&theater","0710[論壇]台北 兒時的記憶：遊樂場、公園、歷史空間的發展",,"1900~2130,台北市中正區紹興北街3號:,善導寺站6號出口:,慕哲咖啡:,董建宏(中興大學景觀與遊憩:important,碩士學位學程助理教授):important",,,,
" http://www.ystaiwan.org/green_forum/","0709[論壇]台北 都市再生遺漏的篇章：以北市南機場整宅社區為例","{""target"":""_blank""}","1900~2130,台北市中正區紹興北街3號:,善導寺站6號出口:,慕哲咖啡:,彭揚凱(OURs都市改革組織秘書長):important,方荷生(台北市中正區忠勤里里長):important",,,,
" https://www.facebook.com/events/312281168947656/?ref=3&ref_newsfeed_story_type=regular","0710島國前進夥伴工作坊 新竹苗栗場",,"1930~2130,竹南保民宮廟埕:,苗栗縣竹南鎮保民巷一號:",,,,
" https://www.facebook.com/pages/%E6%88%91%E6%98%AF%E4%BA%BA%E6%88%91%E5%8F%8D%E6%A0%B8/307969115955037",======分隔線======五六運動、公民論壇,,"每周五:,1800~2100:,自由廣場:,",,,,
" http://cp5taichunng.kktix.cc/events/2996579a","0712[割闌尾]高雄 打狗割正順 前鎮區","{""target"":""_blank""}","0800~1300,和誠路＆草衙二路:",,,,
" http://www.taiwantt.org.tw/tw/index.php?option=com_content&task=view&id=11641&Itemid=57",0711槍決五個人之後？–談死刑與國家暴力,,"1900~2100:,三民御璽1F會議室:,彰化市三民路119號:,台大法律系專任教授 李茂生:important",,,,
" https://www.facebook.com/CafeDelam/photos/a.377311555656726.91535.377298322324716/679613385426540/?type=1&theater",0712陪爸媽一起到老的健康寶典,,"1500~1700:,劉介修:important,台大醫院竹東分院社區健康營造中心執行長:important,台大醫院老年醫學部兼任主治醫師:important,Cafe De lam 竹南咖啡:,苗栗縣大營路99號:",,,,
" https://www.facebook.com/events/1499824633565724/",0712助陣!!海洋音樂祭決賽,,福隆海水浴場:,,,,
" http://www.happyradio.com.tw/stream/stream_taipei.php","週一 黑鬥不服從",,"1700~1800:,[廣播]:info",,,,
,已結束活動列表,"{""expand"":false} ",,,,,
" https://www.facebook.com/photo.php?fbid=819140311430845&set=a.804875019524041.1073741827.804848699526673&type=1&theater",0706割闌尾HereWEGO!,,,,,,
" https://plus.google.com/events/c79e74aha27oc894uhqrtaaoc4o",0706袁紅冰教授台南板聚,"{""target"":""_blank""}",,,,,
" https://www.facebook.com/photo.php?fbid=1452992851623387&set=gm.646561768753566&type=1","0706雙湖音樂祭 補正公投法 割掉祭止兀",,,,,,
" https://www.facebook.com/events/553766021400093/",0706王奕凱輔選志工大會,,,,,,
" https://www.facebook.com/apkh.tw/posts/341132112705482","0706割闌尾 黃昭順 林國正",,,,,,
" https://www.facebook.com/photo.php?fbid=331106903706889&set=a.102591343225114.6915.100004227453348&type=1","0706光榮高雄 台獨ing",,,,,,
" https://www.facebook.com/events/656220247793483/?ref=22","0705壓不扁的玫瑰 寫下台灣反抗史的家族",,,,,,
" https://www.facebook.com/taiwanmarch.tw/posts/557881387654081","0705島國前進，南北合進 週末行動",,,,,,
" https://www.facebook.com/photo.php?fbid=608397309268309&set=gm.291324377708124&type=1","0705割闌尾 林鴻池 板橋遊行x仿聲鳥",,,,,,
" https://www.facebook.com/events/319093591589182/?source=1",0704全民關注立法院搞什麼鬼,,,,,,
" https://www.facebook.com/milkfishtainan/photos/a.673284986077545.1073741827.673275422745168/714602495279127/?type=1","0704魚腸花街頭文藝復興運動 台南青年志士大對談會",,,,,,
" https://www.facebook.com/photo.php?fbid=803357396371797&set=a.168257056548504.32682.142163125824564&type=1","0704哲五 割割罷罷真偉大 割闌尾進行式",,,,,,
" https://www.facebook.com/appendectomy737/photos/a.731621866861351.1073741827.731115960245275/755812644442273/?type=1","0703割闌尾 港湖蔡正元",,,,,,
" https://www.facebook.com/AppendectomyDeWhip/posts/607239036050803?fref=nf","0703割闌尾 板橋林鴻池",,,,,,
" https://www.facebook.com/photo.php?fbid=315499578608262&set=a.276078935883660.1073741828.240170506141170&type=1",0630國會無雙兩場賽事,,,,,,
" http://www.happyradio.com.tw/stream/stream_taipei.php",0630[廣播]黑鬥不服從,,,,,,
" https://www.facebook.com/Appendectomy/photos/a.249135138604869.1073741828.248848828633500/273358276182555/?type=1",0629[割闌尾]WEGO+祭止兀,,,,,,
" https://www.facebook.com/photo.php?fbid=555027307939489&set=a.538208232954730.1073741828.534777863297767&type=1",0629【島國前進，公投修法連署】台北週末行動,,,,,,
" https://www.facebook.com/photo.php?fbid=314406452050908&set=a.276078935883660.1073741828.240170506141170&type=1",0629台灣，你資安有洞嗎？(沃草),,,,,,
" http://www.ndc.gov.tw/m1.aspx?sNo=0060472","0629「行政院」經貿國是會議 南區分區會議",,,,,,
" https://www.facebook.com/ey.gov.tw/photos/a.449506128410605.115211.135213893173165/837984339562780/","0628~29「行政院」經貿國是會議 南區分區會議",,,,,,
" https://www.facebook.com/photo.php?fbid=638988389524693&set=a.589277274495805.1073741829.100002406139125&type=1&ref=nf","0625~0628 國台辦 張志軍主任 訪台事件",,,,,,
" https://www.facebook.com/photo.php?fbid=812637358746613&set=a.126145224062500.21698.100000010685369&type=1&theater","0628台灣獨立建國大旗隊 集合",,,,,,
" http://www.peoplenews.tw/news/f1411b3b-4f37-42cf-878e-306d534eaf1b","0628  張志軍 最後一天行程 註:天后宮取消",,,,,,
" https://www.facebook.com/events/1487022118201923/?ref=3&ref_newsfeed_story_type=regular","0628 2014鹿港噴水節",,,,,,
" https://www.facebook.com/photo.php?fbid=431887586954168&set=a.368489606627300.1073741828.367922930017301&type=1",0628最後一戰，重返機場,,,,,,
" https://www.facebook.com/aorft/posts/773990205979565","0626緊急！立院回娘家 國民黨 甲級動員 自由經濟示範區特別條例草案"," ",,,,,
" https://www.facebook.com/events/334046850081575/",0626【干你屁事】迎接張志軍！遍地開花！,,,,,,
" https://www.facebook.com/groups/twobservers/permalink/860870063941775/","0625「自己的民主，自己守，自己的選票，自己顧」聯合記者會 已結束",,,,,,
" https://www.facebook.com/events/275916992593654/",0625【紅牌行動】人民舉紅牌，拒絕王張會！,,,,,,
" https://www.facebook.com/photo.php?fbid=773450982700154&set=a.266374543407803.68474.265413413503916&type=1","0625照三餐K 絕對不讓中國張志軍這麼好吃睏",,,,,,
" http://berryvoice.org/b/berry-watch/item/132-ftz-finance","0625[自經區金融篇] 金管會聲東擊西 粉飾太平 台灣門戶全開!",,,,,,
" http://ncc.nctu.pro/","服貿討論 (交大)",,,,nctu,au,
,文字轉播專區,"{""expand"":false} ","重要:important ",,,,
" https://ethercalc.org/static/proxy/hackpad/","文字轉播 (主要) ",,每分鐘更新:warning,,,,
" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,"即時更新:warning ",,,,
" https://ethercalc.org/static/proxy/live.txt","文字轉播 (內場)",,,,,,
" https://ethercalc.org/static/proxy/english/","English Transcript",,,,,,
" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,
" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,
" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,
" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,
https://ethercalc.org/static/proxy/hackpad/8a13Bv9DNla,"4-22 零時文播",,,,,au,
,"人力物資需求 ","{""expand"":false} ",,,,,
" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,,,,,
" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,,,,,
" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:error,,,,
,抗議行動相關資訊,"{""expand"":""false""} ",,,,,
" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,
" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,
" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,
" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,
,"媒體區  - Media","{""expand"":false} ",,,,,
" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,
" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,
" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,
" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,
" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,
" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,
" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,
" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,
" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,
" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,
" http://occupation.today/","照片與訊息 Tumblr ",,,,,,
" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,
" https://www.facebook.com/NtuNewsEForum",台大新聞E論壇,"{""target"": ""_blank""} ",新視窗:info,,,,
,連結彙集平台,"{""expand"":false} ",,,,,
" http://time-fumao.rhcloud.com/",太陽花怪獸,,,,,,
" http://news.anon.tw",台灣大補帖＃fumao.tw,,,,,,
"""

angular.module 'app.controllers' <[ui.state ngCookies]>
.controller AppCtrl: <[$scope $window $state $rootScope $timeout]> ++ ($scope, $window, $state, $rootScope, $timeout) ->
  $scope.$watch '$state.current.name' ->
    $scope.irc-enabled = true if it is \irc

  # mobile
  window.addEventListener "load" ->
    <- $timeout _, 0
    window.scrollTo 0, 1

  <- $timeout _, 10s * 1000ms
  $rootScope.hideGithubRibbon = true

.controller HackFolderCtrl: <[$scope $sce $window $state $cookies HackFolder]> ++ ($scope, $sce, $window, $state, $cookies, HackFolder) ->
  $scope <<< do
    hasViewMode: -> it?match /g(doc|present|draw)/
    sortableOptions: do
      update: -> console?log \notyetupdated
    iframes: HackFolder.iframes
    docs: HackFolder.docs
    tree: HackFolder.tree
    godoc: (doc) ->
      if doc.opts?target == '_blank'
        window.open doc.url, doc.id
        return true
      else if doc.url.match /(https?:)?\/\/[^/]*(github|facebook)\.com/
        window.open doc.url, doc.id
        return true
      else
        $scope.go "/#{ $scope.hackId }/#{ decodeURIComponent doc.id }"
    open: (doc) ->
      window.open doc.url, doc.id
      return false
    activate: ->
      doc = HackFolder.activate it
      if doc?type is \hackfoldr
        console?log \folder!!
    saveBtn: void
    saveModalOpts: dialogFade: true
    saveModalOpen: false
    showSaveModal: (show,rm,e)->
      $scope.saveModalOpen = show
      if e => $scope.saveBtn = $ e.target
      if rm =>
        $cookies.savebtn = \consumed
        if $scope.saveBtn => $scope.saveBtn.fadeOut 1000
    showSaveBtn: ->
      $cookies.savebtn != \consumed
    HackFolder: HackFolder
    barframeSrc: (entry) ->
      src = entry.opts.bar.replace /\{(\w+)\}/g, -> entry[&1]
      $sce.trustAsResourceUrl src
    iframeCallback: (doc) -> (status) -> $scope.$apply ->
      console?log \iframecb status, doc
      $state.current.title = "#{doc.title} – g0v.today"
      if status is \fail
        doc.noiframe = true
      else
        doc.noiframe = false
      doc.iframeunsure = true if status is \unsure

    debug: -> console?log it, @
    reload: (hackId) -> HackFolder.getIndex hackId, true ->

  $scope.$watch 'hackId' (hackId) ->
    <- HackFolder.getIndex hackId, false
    $scope.$watch 'docId' (docId) ->
      doc = HackFolder.activate docId if docId
      if doc?type is \hackfoldr
        $scope.show-index = true
        folder-title, docs, tree <- HackFolder.load-remote-csv doc.id
        [entry] = [entry for entry in HackFolder.tree when entry.id is docId]
        entry.tagFilter = entry.tags?0?content
        unless entry.chidlren
          entry.children ?= tree?0.children
          HackFolder.docs.splice docs.length, 0, ...docs
        $scope.indexDocs = docs
        $scope.indexSearch = hackId.replace /^g0v-/,''
      else
        $scope.show-index = false
    $scope.show-index = $state.current.name is \hack.index
    return if $scope.show-index
    unless $scope.docId
      if HackFolder.docs.0?id
        $state.transitionTo 'hack.doc', { docId: that, hackId: $scope.hackId}

  $scope.collapsed = $cookies.collapsed ? $window.innerWidth < 768
  $scope.$watch 'collapsed' -> if it?
    $cookies.collapsed = it

  $scope.hackId = if $state.params.hackId => that else 'congressoccupied'
  $scope.$watch '$state.params.docId' (docId) ->
    $scope.docId = encodeURIComponent encodeURIComponent docId if docId
  $scope.sidebar = false
  $scope.toggleSidebar = ->
    $scope.collapsed = false
    $scope.sidebar = !$scope.sidebar

.directive 'resize' <[$window]> ++ ($window) ->
  (scope, element, attrs) ->
    refresh-size = ->
      scope.width = $window.innerWidth
      scope.height = $window.innerHeight
      scope.content-height = $window.innerHeight - $ element .offset!top

    angular.element $window .bind 'resize' ->
      scope.$apply refresh-size

    refresh-size!

.directive 'ngxIframe' <[$parse]> ++ ($parse) ->
  link: ($scope, element, attrs) ->
    cb = ($parse attrs.ngxIframe) $scope
    dispatch = (iframe, loading) ->
      ok = !try
        iframe.location ~= \about:blank
      # access denied, meaning the iframe is loaded. wait for .load to fire
      if loading and $.browser.mozilla
        # check if the failure is actually XFO denied. this doesn't work
        # req = $.ajax do
        #   type: \OPTION
        #   url: attrs.src
        #   success: ->
        #     console.log \done
        #     req.getAllResponseHeaders!
        #   error: (request, textStatus, errorThrown) ->
        #     console.log \err textStatus, request.getAllResponseHeaders!
        #     console.log request
        cb \unsure
      else
        cb if ok => \ok else \fail

    var fail
    $ element .load ->
      clearTimeout fail
      dispatch @contentWindow, true

    fail = setTimeout (->
      dispatch element[0].contentWindow
    ), 5000ms
.directive \ngxNoclick ->
  ($scope, element, attrs) ->
    $ element .click -> it.preventDefault!; false

.directive 'ngxClickMeta' <[$parse]> ++ ($parse) ->
  link: ($scope, element, attrs) ->
    cb = $parse attrs.ngxClickMeta

    is-meta = if navigator.appVersion.match /Win/
      -> it.ctrlKey
    else
      -> it.metaKey

    $ element .click (e) ->
      if is-meta e
        unless cb $scope
          e.preventDefault!
          return false
      return

.directive \ngxFinal ->
  ($scope, element, attrs) ->
    $ element .click -> it.stopPropagation();

.directive \scrollbar <[$window]> ++ ($window) ->
  (scope, element, attrs) ->
    has-scrollbar = ->
      $index = $('.index')
      scope.has-scrollbar = $index.get(0).scrollHeight > $window.innerHeight - $('.navbar').height()
    angular.element $window .bind \resize ->
      scope.$apply has-scrollbar
    scope.$watch 'docs' has-scrollbar
    has-scrollbar()

.factory HackFolder: <[$http $sce]> ++ ($http, $sce) ->
  iframes = {}
  docs = []
  tree = []
  var hackId
  self = do
    iframes: iframes
    docs: docs
    tree: tree
    activate: (id, edit=false) ->
      [doc] = [d for d in docs when d.id is id]
      type = doc?type
      for t in tree
        if t?children?map (.id)
          t.expand = true if id in that
      mode = if edit => \edit else \view
      src = match type
      | \gdoc =>
          "https://docs.google.com/document/d/#id/#mode?pli=1&overridemobile=true"
      | \gsheet =>
          "https://docs.google.com/spreadsheet/ccc?key=#id"
      | \gpresent =>
          "https://docs.google.com/presentation/d/#id/#mode"
      | \gdraw =>
          "https://docs.google.com/drawings/d/#id/#mode"
      | \gsheet =>
          "https://docs.google.com/spreadsheet/ccc?key=#id"
      | \hackpad =>
        "https://#{ doc.site ? '' }hackpad.com/#{id}"
      | \ethercalc =>
          "https://ethercalc.org/#id"
      | \video =>
          if doc.provider is \youtube
              "https://www.youtube.com/embed/#{id}"
          else if doc.provider is \ustream
              "http://www.ustream.tv/embed/#{id}?v=3"
      | \url => decodeURIComponent decodeURIComponent id
      | otherwise => ''

      src += doc?hashtag if doc?hashtag

      src = $sce.trustAsResourceUrl src if src
      return doc if doc?type is \hackfoldr
      if iframes[id]
          that <<< {src, mode}
      else
          iframes[id] = {src, doc, mode}
      return doc

    getIndex: (id, force, cb) ->
      return cb docs if hackId is id and !force
      retry = 0
      doit = ~>
        csv = CONST_CSV
        <~ setTimeout _, 1ms
        #csv <~ $http.get "https://www.ethercalc.org/_/#{id}/csv"
        #.error -> return if ++retry > 3; setTimeout doit, 1000ms
        #.success

        hackId := id
        docs.length = 0
        @process-csv csv, cb
      doit!


    process-csv: (csv, cb) ->
      folder-title, docs <- @load-csv csv, docs, tree
      self.folder-title = folder-title
      cb docs

    load-remote-csv: (id, cb) ->
      #csv <~ $http.get "https://www.ethercalc.org/_/#{id}/csv"
      #.success
      csv = CONST_CSV
      <~ setTimeout _, 1ms
      docs = []
      tree = []
      folder-title <~ @load-csv csv, docs, tree
      cb folder-title, docs, tree

    load-csv: (csv, docs, tree, cb) ->
      csv -= /^\"?#.*\n/gm
      var folder-title
      folder-opts = {}
      entries = for line in CSV.parse(csv)
        [url, title, opts, tags, summary, ...rest] = line
        continue unless title
        title -= /^"|"$/g
        opts -= /^"|"$/g if opts
        if opts
          opts = try JSON.parse opts.replace /""/g '"'
        opts ?= {}
        tags -= /^"|"$/g if tags
        [_, prefix, url, hashtag] = url.match /^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/
        entry = { summary, hashtag, url, title, indent: prefix.length, opts: {} <<< folder-opts <<< opts } <<< match url
        | void
            unless folder-title
              if title
                folder-title = title
                title = null
              if opts
                folder-opts = opts
            title: title
            type: \dummy
            id: \dummy
        | // ^\/\/(.*?)(?:\#(.*))?$ //
            type: \hackfoldr
            id: that.1
            tag: that.2
        | // ^https?:\/\/www\.ethercalc\.(?:com|org)/(.*) //
            type: \ethercalc
            id: that.1
        | // https:\/\/docs\.google\.com/document/(?:d/)?([^/]+)/ //
            type: \gdoc
            id: that.1
        | // https:\/\/docs\.google\.com/spreadsheet/ccc\?key=([^/?&]+) //
            type: \gsheet
            id: that.1
        | // https:\/\/docs\.google\.com/drawings/(?:d/)?([^/]+)/ //
            type: \gdraw
            id: that.1
        | // https:\/\/docs\.google\.com/presentation/(?:d/)?([^/]+)/ //
            type: \gpresent
            id: that.1
        | // https?:\/\/(\w+\.)?hackpad\.com/(?:.*?-)?([\w]+)(\#.*)?$ //
            type: \hackpad
            site: that.1
            id: that.2
        | // https?:\/\/(?:youtu\.be/|(?:www\.)?youtube\.com/(?:embed/|watch\?v=))([-\w]+) //
            type: \video
            provider: \youtube
            id: that.1
            icon: "http://g.etfv.co/#{ url }"
        | // https?:\/\/(?:www\.)?ustream\.tv/(?:embed|channel)/([-\w]+) //
            type: \video
            provider: \ustream
            id: that.1
            icon: "http://g.etfv.co/#{ url }"
        | // ^(https?:\/\/[^/]+) //
            type: \url
            id: encodeURIComponent encodeURIComponent url
            icon: "http://g.etfv.co/#{ that.1 }"
        | otherwise => console?log \unrecognized url

        if entry.type is \dummy and !entry.title?length
          null
        else
          {icon: "/img/#{ entry.type }.png"} <<< entry <<< do
            tags: (entry.opts?tags ? []) ++ ((tags?split \,) ? [])
              .filter -> it.length
              .map (tag) ->
                [_, content, c, ...rest] = tag.match /^(.*?)(?::(.*))?$/
                {content, class: c ? 'warning'}

      # check live status of youtube or ustream
      entries.filter (?url) .map ->
        if it.type is 'video' and it.provider is 'youtube'
          request = gapi.client.youtube.videos.list({'id': it.id, 'part':'snippet'})
          response <~ request.execute()
          if 'live' == response.items?[0].snippet.liveBroadcastContent
            it.tags ++= {class: 'warning', content: 'LIVE'}
        else if videoToken = it.url.match(/ustream.tv\/embed\/([^?]+)/)
          videoId = videoToken[1]
          response <- $.get ("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F" + videoId + "%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=")
          if 'live' == JSON.parse(response.query?.results?.body?.p).results
            it.tags ++= {class: 'warning', content: 'LIVE'}
      docs.splice 0, docs.length, ...(entries.filter -> it?)
      last-parent = 0
      nested = for entry, i in docs
        if i > 0 and entry.indent
          docs[last-parent]
            ..children ?= []
              ..push entry
          null
        else
          last-parent = i
          entry
      nested .= filter -> it?
      nested .= map ->
        if it.children
          it.expand = it.opts?expand ? it.children.length < 5
        it
      tree.splice 0, tree.length, ...nested
      cb folder-title, docs
