(defproject omegasq "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "https://github.com/sheganinans?tab=repositories"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.1.8"]
                 [jayq "2.3.0"]
                 [prismatic/dommy "0.1.1"]]
  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-ring "0.8.3" :exclusions [org.clojure/clojure]]]
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
                   :optimizations :simple
                  ; :externs ["resources/public/js/three.js"]
                   :pretty-print true}
        :jar true}}}
  :main omegasq.server
  :ring {:handler omegasq.server/app}
  :min-lein-version "2.0.0")

