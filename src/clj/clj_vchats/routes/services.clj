(ns clj-vchats.routes.services
  (:require [muuntaja.middleware :as muuntaja]
            [reitit.ring :as ring]
            [reitit.ring.coercion :as rrc]
            [reitit.swagger :as swagger]
            [clj-vchats.routes.home :as home]
            [ring.middleware.params :as params]
            [ring.util.http-response :as response] ;; added!!!
            [reitit.coercion.spec :as rcs]
            [clj-time.local :as l] ;; added!
            ))

(defn service-routes []
  (ring/router
   (conj
    (home/home-routes)
    [[ "/api"
      {:swagger {:id ::default}}
      ["/swagger.json"
       {:get {:no-doc false
              :swagger {:info {:title "clj-vchats-api"}}
              :handler (swagger/create-swagger-handler)}}]
      ["/tutorial"
       ["/ping" {:summary
                 "Pingを送ります。Pingが返ってきます。"
                 :get ;; changed!
                 (fn [_] {:status 200, :body "ping"})}]
       ["/pong" {:summary
                 "Pongを送ります。Pongが返ってきます。"
                 :post ;; changed!
                 (fn [_] {:status 200, :body "pong"})
                 ;; (constantly "pong")
                 }]
       ["/twice" {:summary
                  "クエリに引数を取ります。二倍されて返ってきます。"
                  :get {:coercion rcs/coercion
                        :parameters {:query {:x int?}}
                        :responses {200 {:body {:result int?}}}
                        :handler
                        (fn [{:keys [parameters]}]
                          {:status 200
                           :body {:result (* 2 (-> parameters :query :x))}})}}]
       ["/plus/:z" {:summary
                    "(やや語弊がありますが)URL上に情報を乗せる方法です。"
                    :description
                    "curl について知識がある場合は \n
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{\"y\": 2}' 'http://localhost:3000/api/tutorial/plus/3?x=1' \n
を入力してみてください。(curlがわからない場合は無視してください)"
                    :post {:coercion rcs/coercion
                           :parameters {:query {:x int?}
                                        :body {:y int?}
                                        :path {:z int?}}
                           :responses {200 {:body {:total pos-int?}}}
                           :handler (fn [{:keys [parameters]}]
                                      ;; parameters are coerced
                                      (let [x (-> parameters :query :x)
                                            y (-> parameters :body :y)
                                            z (-> parameters :path :z)
                                            total (+ x y z)
                                            ]
                                        {:status 200
                                         :body {:total total}}))}}]]]
     ["/vchats-api"
      {:swagger {:id ::vchats}}
      ["/swagger.json"
       {:get {:no-doc false
              :swagger {:info {:title "clj-vchats-api"}}
              :handler (swagger/create-swagger-handler)}}]
      ["/make-channel" {:summary "チャンネルを作ります。"
                        :description
                        "返ってくる値はチャンネルの名前です。もしチャンネルが作れなければ \"false\" という文字列が返ってきます。(型を統一した弊害です。)\n
Future: チャンネルの名前をランダムな衝突しない値(ex. 00ex4923)に変更します。"
                        :post
                        {:coercion rcs/coercion
                         :parameters {:query {:channel-name string?}}
                         :handler (fn [{:keys [parameters]}]
                                    (let [c-name (-> parameters :query :channel-name)]
                                      {:status 200
                                       :body {:channel-name c-name}}))}}]
      ["/:channel/close-channnel" {:summary "チャンネルを閉じます。"
                                   :description
                                   "チャンネルを閉じ、ログを消します。\n
websocket の処理で用いていたユーザグループのリストも同時に削除します。"
                                   :post {:coercion rcs/coercion
                                          :parameters {:path {:chan string?}}
                                          :handler (fn [{:keys [parameters]}]
                                                     (let [chan (-> parameters :path :chan)]
                                                      {:state 200
                                                       :body "Closed!"}))}}]
      ["/get-channels" {:summary "現在開いているチャンネルを取得します。"
                        :get {:handler
                              (fn [_]
                                {:status 200
                                 :body
                                 {:channels
                                  ["elect" "Meguru"]}})}}]
      ["/:chan/get-messages" {:summary "メッセージを取得します。"
                              :description
                              "自分が閲覧しているチャンネルの過去ログを取得します。\n
取得内容は時系列的に早い順なベクトルのリストで、ベクトルは [user-name timestamp message] というフォーマットになっています。"
                              :get
                              {:coercion rcs/coercion
                               :parameters {:path {:chan string?}}
                               :handler
                               (fn [{:keys [parameters]}]
                                 (let [c-name (-> parameters :path :chan)]
                                   {:status 200
                                    :body {:messages
                                           ((keyword c-name)
                                            {:elect
                                             [["elect" (str (l/local-now)) "Hello!"]
                                              ["Meguru" (str (l/local-now)) "Hello!!"]]
                                             :Meguru
                                             [["Meguru" (str (l/local-now)) "what?"]
                                              ["elect" (str (l/local-now)) "Oh, my god ..."]]})}}))}}]
      ["/login" {:summary "ログインをします。"
                 :description "ユーザ登録が済んでいるならばログインすることが出来ます。\n
elect / Meguru のみログインできます。(パスワードは任意です)"
                 :get {:coercion rcs/coercion
                       :parameters {:query {:name string?
                                            :pass string?}}
                       :responses {200 {:body {:login? boolean?}}}
                       :handler (fn [{:keys [parameters]}]
                                  (let [user-name (-> parameters :query :name)]
                                    {:status 200
                                     :body {:login?
                                            (if (some #{user-name} ["elect" "Meguru"])
                                              false true)}}))}}]
      ["/:user/logout" {:summary "ログアウトをします。"
                        :post {:coercion rcs/coercion
                               :handler (fn [_]
                                          {:status 200
                                           :body "Exited!"})}}]
      ["/resister!" {:summary "ユーザ登録をします。"
                     :description "名前、パスワード、メールアドレスの3つが必要です。\n
elect / Meguru 以外登録できます。(名前の重複は認めません)\n
Future: メールアドレス認証を行います。"
                     :get {:coercion rcs/coercion
                           :parameters {:query {:name string?
                                                :pass string?
                                                :mail string?}}
                           :responses {200 {:body {:resister? boolean?}}}
                           :handler (fn [{:keys [parameters]}]
                                      (let [user-name (-> parameters :query :name)
                                            pass (-> parameters :query :pass)
                                            mail (-> parameters :query :mail)]
                                          {:status 200
                                           :body
                                           {:resister?
                                            (if (some #{user-name} ["elect" "Meguru"])
                                              false true)}}))}}]]])
   {:data {:middleware [params/wrap-params
                        muuntaja/wrap-format
                        swagger/swagger-feature
                        rrc/coerce-exceptions-middleware
                        rrc/coerce-request-middleware
                        rrc/coerce-response-middleware]
           :swagger {:produces #{"application/json"
                                 "application/edn"
                                 "application/transit+json"}
                     :consumes #{"application/json"
                                 "application/edn"
                                 "application/transit+json"}}}}))

