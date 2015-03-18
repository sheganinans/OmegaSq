(ns omegasq
;  (:use-macros [dommy.macros :only [sel sel1]])
  (:require [dommy.core :as d]
            [clojure.browser.repl :as repl]))

; (repl/connect "http://localhost:8090/repl")

(defn generate-geometries [defaults])

(defn generate-meshes [defaults geometries])

(defn generate-scene [defaults kmeshes])

(def mouseX 0)
(def mouseY 0)
(def windowHalfX (/ window.innerWidth 2))
(def windowHalfY (/ window.innerWidth 2))


(defn init []
  (def scene (THREE/Scene.))
  (def camera (THREE/PerspectiveCamera. 7 (/ window.innerWidth window.innerHeight) 1 100000))
  (set! (. camera -position.z) -1000)

  (def cameraControls (THREEx/DragPanControls. camera))

  (def renderer (THREE/CanvasRenderer.))
  (. renderer (setSize window.innerWidth window.innerHeight))
  (THREEx/WindowResize.bind renderer camera)

  (def cgeometry (THREE/CubeGeometry. 6 6 6 1 1 1))
  (def kgeometry (THREE/TorusKnotGeometry. 8 0.7 9 3 2))
  (def knotMaterial (THREE/MeshBasicMaterial. (js-obj "color" 0xd0aaaa "wireframe" true)))
  (def planetMaterial (THREE/MeshBasicMaterial. (js-obj "color" 0xffff50 "wireframe" false)))
  (def kmesh1 (THREE/Mesh. kgeometry knotMaterial))
  (def kmesh2 (THREE/Mesh. kgeometry knotMaterial))
  (def kmesh3 (THREE/Mesh. kgeometry knotMaterial))
  (def cmesh1 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh2 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh3 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh4 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh5 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh6 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh7 (THREE/Mesh. cgeometry planetMaterial))
  (def cmesh8 (THREE/Mesh. cgeometry planetMaterial))
  (def objects [kmesh1 kmesh2 kmesh3 cmesh1 cmesh2 cmesh3 cmesh4 cmesh5 cmesh6 cmesh7 cmesh8])


  (set! (. cmesh1 -position.x) 15)
  (set! (. cmesh1 -position.y) 15)
  (set! (. cmesh1 -position.z) 15)

  (def vas (. cmesh1 -position))
  (def vaz (. camera -position))


  (set! (. cmesh1 -position.x) 15)
  (set! (. cmesh1 -position.y) 15)
  (set! (. cmesh1 -position.z) 15)

  (set! (. cmesh2 -position.x) -15)
  (set! (. cmesh2 -position.y) 15)
  (set! (. cmesh2 -position.z) 15)

  (set! (. cmesh3 -position.x) 15)
  (set! (. cmesh3 -position.y) -15)
  (set! (. cmesh3 -position.z) 15)

  (set! (. cmesh4 -position.x) -15)
  (set! (. cmesh4 -position.y) -15)
  (set! (. cmesh4 -position.z) 15)

  (set! (. cmesh5 -position.x) 15)
  (set! (. cmesh5 -position.y) 15)
  (set! (. cmesh5 -position.z) -15)

  (set! (. cmesh6 -position.x) -15)
  (set! (. cmesh6 -position.y) 15)
  (set! (. cmesh6 -position.z) -15)

  (set! (. cmesh7 -position.x) 15)
  (set! (. cmesh7 -position.y) -15)
  (set! (. cmesh7 -position.z) -15)

  (set! (. cmesh8 -position.x) -15)
  (set! (. cmesh8 -position.y) -15)
  (set! (. cmesh8 -position.z) -15)

  (def projector (THREE.Projector.))

  (defn onDocumentMouseDown [event]
    (. event preventDefault))

  (defn add-to-scene [mesh]
    (. scene (add mesh)))

  (loop [objs objects]
    (when (not (empty? objs))
      (add-to-scene (first objs))
      (recur (rest objs))))

  (.(. js/document (getElementById "visContainer"))
       appendChild omegasq.renderer.domElement)


  (. js/document (addEventListener "mousedown" onDocumentMouseDown false))
  (set! omegasq.renderer.domElement.id "theCanvas"))


(defn animate []
  (js/requestAnimationFrame animate)
  ; Here is where the additive rotational vectors are applied.
  ; I know for a fact that all forces are applied in one direction in the loop,
  ; because there was a massive rotational speedup when all the forces aligned.
  ; As well as the rotations having high amount of 4D symmetry indicate that
  ; the forces are indeed all pushing in one direction.
  ; The high precision of the arbitrary decimal constant adds a nice eccentricity
  ; to land us somewhere other than a trivial location in the space of
  ; possible animations.
  (set! (. kmesh1 -rotation.z) (+ (. kmesh3 -rotation.y) 0.02537687667))
  (set! (. kmesh2 -rotation.x) (+ (. kmesh1 -rotation.z) 0.02537687667))
  (set! (. kmesh3 -rotation.y) (+ (. kmesh2 -rotation.x) 0.02537687667))

  (set! (. kmesh1 -rotation.y) (+ (. kmesh3 -rotation.x) 0.00528342423))
  (set! (. kmesh2 -rotation.z) (+ (. kmesh1 -rotation.y) 0.00528342423))
  (set! (. kmesh3 -rotation.x) (+ (. kmesh2 -rotation.z) 0.00528342423))

  (set! (. kmesh1 -rotation.x) (+ (. kmesh3 -rotation.z) 0.00099999999))
  (set! (. kmesh2 -rotation.y) (+ (. kmesh1 -rotation.x) 0.00099999999))
  (set! (. kmesh3 -rotation.z) (+ (. kmesh2 -rotation.y) 0.00099999999))

  (. cameraControls (update))
  (. renderer (render scene camera)))

(init)
(animate)

