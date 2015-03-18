// Compiled by ClojureScript 0.0-3123 {}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events');

clojure.browser.event.IEventType = (function (){var obj13421 = {};
return obj13421;
})();

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__4110__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventType.event-types",this$);
}
}
})().call(null,this$);
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__13422){
var vec__13423 = p__13422;
var k = cljs.core.nth.call(null,vec__13423,(0),null);
var v = cljs.core.nth.call(null,vec__13423,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__13424){
var vec__13425 = p__13424;
var k = cljs.core.nth.call(null,vec__13425,(0),null);
var v = cljs.core.nth.call(null,vec__13425,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
} else {
}
clojure.browser.event.listen = (function() {
var clojure$browser$event$listen = null;
var clojure$browser$event$listen__3 = (function (src,type,fn){
return clojure$browser$event$listen.call(null,src,type,fn,false);
});
var clojure$browser$event$listen__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
clojure$browser$event$listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$listen__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$listen__3;
clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$listen__4;
return clojure$browser$event$listen;
})()
;
clojure.browser.event.listen_once = (function() {
var clojure$browser$event$listen_once = null;
var clojure$browser$event$listen_once__3 = (function (src,type,fn){
return clojure$browser$event$listen_once.call(null,src,type,fn,false);
});
var clojure$browser$event$listen_once__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
clojure$browser$event$listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$listen_once__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$listen_once__3;
clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$listen_once__4;
return clojure$browser$event$listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var clojure$browser$event$unlisten = null;
var clojure$browser$event$unlisten__3 = (function (src,type,fn){
return clojure$browser$event$unlisten.call(null,src,type,fn,false);
});
var clojure$browser$event$unlisten__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
clojure$browser$event$unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$unlisten__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$unlisten__3;
clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$unlisten__4;
return clojure$browser$event$unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
