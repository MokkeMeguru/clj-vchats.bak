(ns clj-vchats.routes.home
  (:require [clj-vchats.layout :as layout]
            [clj-vchats.db.core :as db]
            [clojure.java.io :as io]
            [clj-vchats.middleware :as middleware]
            [ring.util.http-response :as response]
            ))

(defn home-page [_]
  (layout/render "home.html"))

(defn home-routes []
  [["/" {:get {:handler    home-page
               :middleware [middleware/wrap-csrf
                            middleware/wrap-formats]}}]
   ["/docs" {:get {:handler (fn [_]
                              (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                                  (response/header "Content-Type" "text/plain; charset=utf-8")))}}]])
