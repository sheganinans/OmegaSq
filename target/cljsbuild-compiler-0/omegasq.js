// Compiled by ClojureScript 0.0-3123 {}
goog.provide('omegasq');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
omegasq.generate_geometries = (function omegasq$generate_geometries(defaults){
return null;
});
omegasq.generate_meshes = (function omegasq$generate_meshes(defaults,geometries){
return null;
});
omegasq.generate_scene = (function omegasq$generate_scene(defaults,kmeshes){
return null;
});
omegasq.mouseX = (0);
omegasq.mouseY = (0);
omegasq.windowHalfX = (window.innerWidth / (2));
omegasq.windowHalfY = (window.innerWidth / (2));
omegasq.init = (function omegasq$init(){
omegasq.scene = (new THREE.Scene());

omegasq.camera = (new THREE.PerspectiveCamera((7),(window.innerWidth / window.innerHeight),(1),(100000)));

omegasq.camera.position.z = (-1000);

omegasq.cameraControls = (new THREEx.DragPanControls(omegasq.camera));

omegasq.renderer = (new THREE.CanvasRenderer());

omegasq.renderer.setSize(window.innerWidth,window.innerHeight);

THREEx.WindowResize.bind.call(null,omegasq.renderer,omegasq.camera);

omegasq.cgeometry = (new THREE.CubeGeometry((6),(6),(6),(1),(1),(1)));

omegasq.kgeometry = (new THREE.TorusKnotGeometry((8),0.7,(9),(3),(2)));

omegasq.knotMaterial = (new THREE.MeshBasicMaterial((function (){var obj6554 = {"color":(13675178),"wireframe":true};
return obj6554;
})()));

omegasq.planetMaterial = (new THREE.MeshBasicMaterial((function (){var obj6556 = {"color":(16777040),"wireframe":false};
return obj6556;
})()));

omegasq.kmesh1 = (new THREE.Mesh(omegasq.kgeometry,omegasq.knotMaterial));

omegasq.kmesh2 = (new THREE.Mesh(omegasq.kgeometry,omegasq.knotMaterial));

omegasq.kmesh3 = (new THREE.Mesh(omegasq.kgeometry,omegasq.knotMaterial));

omegasq.cmesh1 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh2 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh3 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh4 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh5 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh6 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh7 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.cmesh8 = (new THREE.Mesh(omegasq.cgeometry,omegasq.planetMaterial));

omegasq.objects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [omegasq.kmesh1,omegasq.kmesh2,omegasq.kmesh3,omegasq.cmesh1,omegasq.cmesh2,omegasq.cmesh3,omegasq.cmesh4,omegasq.cmesh5,omegasq.cmesh6,omegasq.cmesh7,omegasq.cmesh8], null);

omegasq.cmesh1.position.x = (15);

omegasq.cmesh1.position.y = (15);

omegasq.cmesh1.position.z = (15);

omegasq.vas = omegasq.cmesh1.position;

omegasq.vaz = omegasq.camera.position;

omegasq.cmesh1.position.x = (15);

omegasq.cmesh1.position.y = (15);

omegasq.cmesh1.position.z = (15);

omegasq.cmesh2.position.x = (-15);

omegasq.cmesh2.position.y = (15);

omegasq.cmesh2.position.z = (15);

omegasq.cmesh3.position.x = (15);

omegasq.cmesh3.position.y = (-15);

omegasq.cmesh3.position.z = (15);

omegasq.cmesh4.position.x = (-15);

omegasq.cmesh4.position.y = (-15);

omegasq.cmesh4.position.z = (15);

omegasq.cmesh5.position.x = (15);

omegasq.cmesh5.position.y = (15);

omegasq.cmesh5.position.z = (-15);

omegasq.cmesh6.position.x = (-15);

omegasq.cmesh6.position.y = (15);

omegasq.cmesh6.position.z = (-15);

omegasq.cmesh7.position.x = (15);

omegasq.cmesh7.position.y = (-15);

omegasq.cmesh7.position.z = (-15);

omegasq.cmesh8.position.x = (-15);

omegasq.cmesh8.position.y = (-15);

omegasq.cmesh8.position.z = (-15);

omegasq.projector = (new THREE.Projector());

omegasq.onDocumentMouseDown = (function omegasq$init_$_onDocumentMouseDown(event){
return event.preventDefault();
});

omegasq.add_to_scene = (function omegasq$init_$_add_to_scene(mesh){
return omegasq.scene.add(mesh);
});

var objs_6557 = omegasq.objects;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,objs_6557))){
omegasq.add_to_scene.call(null,cljs.core.first.call(null,objs_6557));

var G__6558 = cljs.core.rest.call(null,objs_6557);
objs_6557 = G__6558;
continue;
} else {
}
break;
}

document.getElementById("visContainer").appendChild(omegasq.renderer.domElement);

document.addEventListener("mousedown",omegasq.onDocumentMouseDown,false);

return omegasq.renderer.domElement.id = "theCanvas";
});
omegasq.animate = (function omegasq$animate(){
requestAnimationFrame(omegasq$animate);

omegasq.kmesh1.rotation.z = (omegasq.kmesh3.rotation.y + 0.02537687667);

omegasq.kmesh2.rotation.x = (omegasq.kmesh1.rotation.z + 0.02537687667);

omegasq.kmesh3.rotation.y = (omegasq.kmesh2.rotation.x + 0.02537687667);

omegasq.kmesh1.rotation.y = (omegasq.kmesh3.rotation.x + 0.00528342423);

omegasq.kmesh2.rotation.z = (omegasq.kmesh1.rotation.y + 0.00528342423);

omegasq.kmesh3.rotation.x = (omegasq.kmesh2.rotation.z + 0.00528342423);

omegasq.kmesh1.rotation.x = (omegasq.kmesh3.rotation.z + 9.9999999E-4);

omegasq.kmesh2.rotation.y = (omegasq.kmesh1.rotation.x + 9.9999999E-4);

omegasq.kmesh3.rotation.z = (omegasq.kmesh2.rotation.y + 9.9999999E-4);

omegasq.cameraControls.update();

return omegasq.renderer.render(omegasq.scene,omegasq.camera);
});
omegasq.init.call(null);
omegasq.animate.call(null);
