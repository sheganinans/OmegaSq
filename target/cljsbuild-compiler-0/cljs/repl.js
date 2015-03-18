// Compiled by ClojureScript 0.0-3123 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13440_13452 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13441_13453 = null;
var count__13442_13454 = (0);
var i__13443_13455 = (0);
while(true){
if((i__13443_13455 < count__13442_13454)){
var f_13456 = cljs.core._nth.call(null,chunk__13441_13453,i__13443_13455);
cljs.core.println.call(null,"  ",f_13456);

var G__13457 = seq__13440_13452;
var G__13458 = chunk__13441_13453;
var G__13459 = count__13442_13454;
var G__13460 = (i__13443_13455 + (1));
seq__13440_13452 = G__13457;
chunk__13441_13453 = G__13458;
count__13442_13454 = G__13459;
i__13443_13455 = G__13460;
continue;
} else {
var temp__4126__auto___13461 = cljs.core.seq.call(null,seq__13440_13452);
if(temp__4126__auto___13461){
var seq__13440_13462__$1 = temp__4126__auto___13461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13440_13462__$1)){
var c__4907__auto___13463 = cljs.core.chunk_first.call(null,seq__13440_13462__$1);
var G__13464 = cljs.core.chunk_rest.call(null,seq__13440_13462__$1);
var G__13465 = c__4907__auto___13463;
var G__13466 = cljs.core.count.call(null,c__4907__auto___13463);
var G__13467 = (0);
seq__13440_13452 = G__13464;
chunk__13441_13453 = G__13465;
count__13442_13454 = G__13466;
i__13443_13455 = G__13467;
continue;
} else {
var f_13468 = cljs.core.first.call(null,seq__13440_13462__$1);
cljs.core.println.call(null,"  ",f_13468);

var G__13469 = cljs.core.next.call(null,seq__13440_13462__$1);
var G__13470 = null;
var G__13471 = (0);
var G__13472 = (0);
seq__13440_13452 = G__13469;
chunk__13441_13453 = G__13470;
count__13442_13454 = G__13471;
i__13443_13455 = G__13472;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4122__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13444 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13445 = null;
var count__13446 = (0);
var i__13447 = (0);
while(true){
if((i__13447 < count__13446)){
var vec__13448 = cljs.core._nth.call(null,chunk__13445,i__13447);
var name = cljs.core.nth.call(null,vec__13448,(0),null);
var map__13449 = cljs.core.nth.call(null,vec__13448,(1),null);
var map__13449__$1 = ((cljs.core.seq_QMARK_.call(null,map__13449))?cljs.core.apply.call(null,cljs.core.hash_map,map__13449):map__13449);
var arglists = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13473 = seq__13444;
var G__13474 = chunk__13445;
var G__13475 = count__13446;
var G__13476 = (i__13447 + (1));
seq__13444 = G__13473;
chunk__13445 = G__13474;
count__13446 = G__13475;
i__13447 = G__13476;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13444);
if(temp__4126__auto__){
var seq__13444__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13444__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__13444__$1);
var G__13477 = cljs.core.chunk_rest.call(null,seq__13444__$1);
var G__13478 = c__4907__auto__;
var G__13479 = cljs.core.count.call(null,c__4907__auto__);
var G__13480 = (0);
seq__13444 = G__13477;
chunk__13445 = G__13478;
count__13446 = G__13479;
i__13447 = G__13480;
continue;
} else {
var vec__13450 = cljs.core.first.call(null,seq__13444__$1);
var name = cljs.core.nth.call(null,vec__13450,(0),null);
var map__13451 = cljs.core.nth.call(null,vec__13450,(1),null);
var map__13451__$1 = ((cljs.core.seq_QMARK_.call(null,map__13451))?cljs.core.apply.call(null,cljs.core.hash_map,map__13451):map__13451);
var arglists = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13481 = cljs.core.next.call(null,seq__13444__$1);
var G__13482 = null;
var G__13483 = (0);
var G__13484 = (0);
seq__13444 = G__13481;
chunk__13445 = G__13482;
count__13446 = G__13483;
i__13447 = G__13484;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
