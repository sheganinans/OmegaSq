(defproject omegasq "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "https://github.com/sheganinans?tab=repositories"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3123"]
                 [ring "1.3.1"]
                 [javax.servlet/servlet-api "2.5"]
                 [jayq "2.5.4"]
                 [prismatic/dommy "1.0.0"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-ring "0.9.3" :exclusions [org.clojure/clojure]]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]
  :cljsbuild {
    :repl-listen-port 9001
    :repl-launch-commands
      {"my-launch" ["firefox" "http://localhost:3000/app"]}
    :builds {
      :main {
        :source-paths ["src/cljs"]
        :compiler {:output-to "resources/public/js/cljs.js"
                   :optimizations :advanced
                  ; :externs ["resources/public/js/three.js"]
                   :pretty-print true}
        :jar true}}}
  :main omegasq.server
  :ring {:handler omegasq.server/app}
  :min-lein-version "2.0.0")

