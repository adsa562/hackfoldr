const CONST_CSV = '''
#url,#title,"#foldr expand",#tag,,,,
,抗議馬政府草率申請加入亞投銀,,,,,,
https://www.ptt.cc/bbs/Gossiping/M.1427817152.A.2A6.html,遭逮捕、偵訊注意事項,,,,,,"第一列放not _blank 的 用 http://beta.hackfoldr.org/aiib-protest 才會顯示(不然一開始看到右邊會一片白)"
https://www.facebook.com/DemocracyTautin/photos/a.297021913796374.1073741827.294447677387131/443976902434207/,聯合聲明,,,,,,ok
,,,,,,,
," 直播頻道",,,,,,
" http://new.livestream.com/accounts/10240183/events/3933435",阿凱公民覺醒紀錄,"{""target"":""_blank""}",,,,,""" The owner of this event needs to upgrade their subscription to access live video embeds. If you would like to embed this live video, please notify the event owner. "" (I just notify, owner accept 之後應該就可以了)"
" http://new.livestream.com/accounts/9824878/events/3890623","小鳥臺 ","{""target"":""_blank""}",,,,,"都在現場，要告訴他們有點難度 XD"
" http://new.livestream.com/accounts/10424521/events/3928926",文森直播-Ex,"{""target"":""_blank""}",,,,,
" http://new.livestream.com/accounts/10332363/events/3867428",日升連線,"{""target"":""_blank""}",,,,,
" https://www.ustream.tv/embed/18749946",黑眼圈,,,,,,"(ustream可以直接 embed)"
,,,,,,,"ustream 的問題是人數限制"
,,,,,,,
,"  相關文章","{""expand"":""true""}",,,,,
" https://www.ptt.cc/bbs/Gossiping/M.1427814568.A.021.html",亞投行事件懶人包,,,,,,要告訴直播主什麼請在這↓留言
" https://www.ptt.cc/bbs/Gossiping/M.1427815988.A.DA1.html",警編備份,,,,,,"(livestream 請開 embed accept....)"
" https://www.facebook.com/video.php?v=444025892429308",警員編號5701錄影備份,,,,,,請問有教學嗎?
," 關於亞投行",,,,,,
http://www.peoplenews.tw/news/81161e45-067f-45d7-9720-ec20e87dc3f9,"在野為何抗議 一次看懂亞投行",,,,,,
http://www.storm.mg/cardstack/45013,5張卡讓你了解,"{""target"":""_blank""}",,,,,
https://www.ptt.cc/bbs/Gossiping/M.1427772855.A.24F.html,亞投行二三事,,,,,,
http://www.storm.mg/article/45221,"捍衛國格 立法院：應直接向亞投行籌備處遞交意向書","{""target"":""_blank""}",,,,,
http://www.peoplenews.tw/news/87cf5b85-71f5-470a-9ee9-ece777fa90bd,"加入亞投行 童振源：有三個關卡、三個模式",,,,,,
http://udn.com/news/story/7896/782551,"名家觀點／加入亞投行 台灣稍安勿躁",,,,,,
http://udn.com/news/story/1/808167,"亞投行意向書 林永樂：7點已傳出",,,,,,
http://www.bbc.co.uk/zhongwen/trad/china/2015/03/150331_aiib_wrap,亞投行朋友圈人氣旺但風險問題並存,,,,,,
http://www.peoplenews.tw/news/9a8ccb1e-63b3-4b77-af1c-ddd0f34ed4b6,入亞投行張盛和信函避正式國名、機構官銜　陸委會：不得不彈性,,,,,,
," 抗爭事件新聞報導",,,,,,
http://news.ltn.com.tw/news/politics/breakingnews/1273776,"抗議草率加入亞投行 總統府前爆發肢體衝突",,,,,,
http://news.rti.org.tw/news/detail/?recordId=181824,"  學生反亞投行 府盼理性安全",,,,,,
http://news.rti.org.tw/news/detail/?recordId=181820,"黑島青抗議亞投行 衝總統府遭攔阻",,,,,,
http://news.ltn.com.tw/news/politics/breakingnews/1273892,,,,,,,
'''

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
