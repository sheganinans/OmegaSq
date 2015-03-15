(ns omegasq.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.util.response :as response])
  (:gen-class))

(defn render-app []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body
   (str "<!DOCTYPE html>"
         "<html>"
        "<head>"
        "<link rel=\"stylesheet\" href=\"css/page.css\" />"
        "<iframe width=\"20\" height=\"20\" src=\"https://www.youtube.com/embed/nU_U1NH5QBs?autoplay=1&start=1008\" frameborder=\"0\" allowfullscreen></iframe>"
        "</head>"
        "<body>"
        "<script src=\"js/three.js\"></script>"
        "<script src=\"js/THREEx.WindowResize.js\"></script>"
;        "<script src=\"js/tween.min.js\"></script>"
        "<script src=\"js/threex.dragpancontrols.js\"></script>"
        "<script src=\"js/jquery-1.9.1.min.js\"></script>"
;        "<script src=\"js/tquery-all.js\"></script>"
        "<header class=\"appHeader\"></header>"
        "<div class=\"appVis\">"
        "<div id=\"textContainer\">"
        "</div>"
        "<div id=\"visContainer\">"
        "</div>"
        "</div>"
        "<script src=\"js/cljs.js\"></script>"
        "</body>"
        "</html>")})

(defn handler [request]
  (if (= "/" (:uri request))
      (response/redirect "/help.html")
      (render-app)))

(def app
    (resources/wrap-resource handler "public"))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))

