// Compiled by ClojureScript 0.0-3123 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4122__auto__ = elem.textContent;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function() {
var dommy$core$style = null;
var dommy$core$style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var dommy$core$style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
dommy$core$style = function(elem,k){
switch(arguments.length){
case 1:
return dommy$core$style__1.call(this,elem);
case 2:
return dommy$core$style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$style.cljs$core$IFn$_invoke$arity$1 = dommy$core$style__1;
dommy$core$style.cljs$core$IFn$_invoke$arity$2 = dommy$core$style__2;
return dommy$core$style;
})()
;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function() {
var dommy$core$matches_pred = null;
var dommy$core$matches_pred__1 = (function (selector){
return dommy$core$matches_pred.call(null,document,selector);
});
var dommy$core$matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
dommy$core$matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return dommy$core$matches_pred__1.call(this,base);
case 2:
return dommy$core$matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$matches_pred.cljs$core$IFn$_invoke$arity$1 = dommy$core$matches_pred__1;
dommy$core$matches_pred.cljs$core$IFn$_invoke$arity$2 = dommy$core$matches_pred__2;
return dommy$core$matches_pred;
})()
;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function() {
var dommy$core$closest = null;
var dommy$core$closest__2 = (function (elem,selector){
return dommy$core$closest.call(null,document.body,elem,selector);
});
var dommy$core$closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6561_SHARP_){
return !((p1__6561_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
dommy$core$closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return dommy$core$closest__2.call(this,base,elem);
case 3:
return dommy$core$closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$closest.cljs$core$IFn$_invoke$arity$2 = dommy$core$closest__2;
dommy$core$closest.cljs$core$IFn$_invoke$arity$3 = dommy$core$closest__3;
return dommy$core$closest;
})()
;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 * @param {...*} var_args
 */
dommy.core.set_style_BANG_ = (function() { 
var dommy$core$set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__6568_6574 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6569_6575 = null;
var count__6570_6576 = (0);
var i__6571_6577 = (0);
while(true){
if((i__6571_6577 < count__6570_6576)){
var vec__6572_6578 = cljs.core._nth.call(null,chunk__6569_6575,i__6571_6577);
var k_6579 = cljs.core.nth.call(null,vec__6572_6578,(0),null);
var v_6580 = cljs.core.nth.call(null,vec__6572_6578,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6579),v_6580);

var G__6581 = seq__6568_6574;
var G__6582 = chunk__6569_6575;
var G__6583 = count__6570_6576;
var G__6584 = (i__6571_6577 + (1));
seq__6568_6574 = G__6581;
chunk__6569_6575 = G__6582;
count__6570_6576 = G__6583;
i__6571_6577 = G__6584;
continue;
} else {
var temp__4126__auto___6585 = cljs.core.seq.call(null,seq__6568_6574);
if(temp__4126__auto___6585){
var seq__6568_6586__$1 = temp__4126__auto___6585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6568_6586__$1)){
var c__4907__auto___6587 = cljs.core.chunk_first.call(null,seq__6568_6586__$1);
var G__6588 = cljs.core.chunk_rest.call(null,seq__6568_6586__$1);
var G__6589 = c__4907__auto___6587;
var G__6590 = cljs.core.count.call(null,c__4907__auto___6587);
var G__6591 = (0);
seq__6568_6574 = G__6588;
chunk__6569_6575 = G__6589;
count__6570_6576 = G__6590;
i__6571_6577 = G__6591;
continue;
} else {
var vec__6573_6592 = cljs.core.first.call(null,seq__6568_6586__$1);
var k_6593 = cljs.core.nth.call(null,vec__6573_6592,(0),null);
var v_6594 = cljs.core.nth.call(null,vec__6573_6592,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6593),v_6594);

var G__6595 = cljs.core.next.call(null,seq__6568_6586__$1);
var G__6596 = null;
var G__6597 = (0);
var G__6598 = (0);
seq__6568_6574 = G__6595;
chunk__6569_6575 = G__6596;
count__6570_6576 = G__6597;
i__6571_6577 = G__6598;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__6599__i = 0, G__6599__a = new Array(arguments.length -  1);
while (G__6599__i < G__6599__a.length) {G__6599__a[G__6599__i] = arguments[G__6599__i + 1]; ++G__6599__i;}
  kvs = new cljs.core.IndexedSeq(G__6599__a,0);
} 
return dommy$core$set_style_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_style_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_style_BANG_.cljs$lang$applyTo = (function (arglist__6600){
var elem = cljs.core.first(arglist__6600);
var kvs = cljs.core.rest(arglist__6600);
return dommy$core$set_style_BANG___delegate(elem,kvs);
});
dommy$core$set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_style_BANG___delegate;
return dommy$core$set_style_BANG_;
})()
;
/**
 * @param {...*} var_args
 */
dommy.core.set_px_BANG_ = (function() { 
var dommy$core$set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6607_6613 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6608_6614 = null;
var count__6609_6615 = (0);
var i__6610_6616 = (0);
while(true){
if((i__6610_6616 < count__6609_6615)){
var vec__6611_6617 = cljs.core._nth.call(null,chunk__6608_6614,i__6610_6616);
var k_6618 = cljs.core.nth.call(null,vec__6611_6617,(0),null);
var v_6619 = cljs.core.nth.call(null,vec__6611_6617,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6618,[cljs.core.str(v_6619),cljs.core.str("px")].join(''));

var G__6620 = seq__6607_6613;
var G__6621 = chunk__6608_6614;
var G__6622 = count__6609_6615;
var G__6623 = (i__6610_6616 + (1));
seq__6607_6613 = G__6620;
chunk__6608_6614 = G__6621;
count__6609_6615 = G__6622;
i__6610_6616 = G__6623;
continue;
} else {
var temp__4126__auto___6624 = cljs.core.seq.call(null,seq__6607_6613);
if(temp__4126__auto___6624){
var seq__6607_6625__$1 = temp__4126__auto___6624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6607_6625__$1)){
var c__4907__auto___6626 = cljs.core.chunk_first.call(null,seq__6607_6625__$1);
var G__6627 = cljs.core.chunk_rest.call(null,seq__6607_6625__$1);
var G__6628 = c__4907__auto___6626;
var G__6629 = cljs.core.count.call(null,c__4907__auto___6626);
var G__6630 = (0);
seq__6607_6613 = G__6627;
chunk__6608_6614 = G__6628;
count__6609_6615 = G__6629;
i__6610_6616 = G__6630;
continue;
} else {
var vec__6612_6631 = cljs.core.first.call(null,seq__6607_6625__$1);
var k_6632 = cljs.core.nth.call(null,vec__6612_6631,(0),null);
var v_6633 = cljs.core.nth.call(null,vec__6612_6631,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6632,[cljs.core.str(v_6633),cljs.core.str("px")].join(''));

var G__6634 = cljs.core.next.call(null,seq__6607_6625__$1);
var G__6635 = null;
var G__6636 = (0);
var G__6637 = (0);
seq__6607_6613 = G__6634;
chunk__6608_6614 = G__6635;
count__6609_6615 = G__6636;
i__6610_6616 = G__6637;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__6638__i = 0, G__6638__a = new Array(arguments.length -  1);
while (G__6638__i < G__6638__a.length) {G__6638__a[G__6638__i] = arguments[G__6638__i + 1]; ++G__6638__i;}
  kvs = new cljs.core.IndexedSeq(G__6638__a,0);
} 
return dommy$core$set_px_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_px_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_px_BANG_.cljs$lang$applyTo = (function (arglist__6639){
var elem = cljs.core.first(arglist__6639);
var kvs = cljs.core.rest(arglist__6639);
return dommy$core$set_px_BANG___delegate(elem,kvs);
});
dommy$core$set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_px_BANG___delegate;
return dommy$core$set_px_BANG_;
})()
;
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to "true":
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 * @param {...*} var_args
 */
dommy.core.set_attr_BANG_ = (function() {
var dommy$core$set_attr_BANG_ = null;
var dommy$core$set_attr_BANG___2 = (function (elem,k){
return dommy$core$set_attr_BANG_.call(null,elem,k,"true");
});
var dommy$core$set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__6648 = elem;
(G__6648[k__$1] = v);

return G__6648;
} else {
var G__6649 = elem;
G__6649.setAttribute(k__$1,v);

return G__6649;
}
} else {
return null;
}
});
var dommy$core$set_attr_BANG___4 = (function() { 
var G__6656__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6650_6657 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__6651_6658 = null;
var count__6652_6659 = (0);
var i__6653_6660 = (0);
while(true){
if((i__6653_6660 < count__6652_6659)){
var vec__6654_6661 = cljs.core._nth.call(null,chunk__6651_6658,i__6653_6660);
var k_6662__$1 = cljs.core.nth.call(null,vec__6654_6661,(0),null);
var v_6663__$1 = cljs.core.nth.call(null,vec__6654_6661,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_6662__$1,v_6663__$1);

var G__6664 = seq__6650_6657;
var G__6665 = chunk__6651_6658;
var G__6666 = count__6652_6659;
var G__6667 = (i__6653_6660 + (1));
seq__6650_6657 = G__6664;
chunk__6651_6658 = G__6665;
count__6652_6659 = G__6666;
i__6653_6660 = G__6667;
continue;
} else {
var temp__4126__auto___6668 = cljs.core.seq.call(null,seq__6650_6657);
if(temp__4126__auto___6668){
var seq__6650_6669__$1 = temp__4126__auto___6668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6650_6669__$1)){
var c__4907__auto___6670 = cljs.core.chunk_first.call(null,seq__6650_6669__$1);
var G__6671 = cljs.core.chunk_rest.call(null,seq__6650_6669__$1);
var G__6672 = c__4907__auto___6670;
var G__6673 = cljs.core.count.call(null,c__4907__auto___6670);
var G__6674 = (0);
seq__6650_6657 = G__6671;
chunk__6651_6658 = G__6672;
count__6652_6659 = G__6673;
i__6653_6660 = G__6674;
continue;
} else {
var vec__6655_6675 = cljs.core.first.call(null,seq__6650_6669__$1);
var k_6676__$1 = cljs.core.nth.call(null,vec__6655_6675,(0),null);
var v_6677__$1 = cljs.core.nth.call(null,vec__6655_6675,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_6676__$1,v_6677__$1);

var G__6678 = cljs.core.next.call(null,seq__6650_6669__$1);
var G__6679 = null;
var G__6680 = (0);
var G__6681 = (0);
seq__6650_6657 = G__6678;
chunk__6651_6658 = G__6679;
count__6652_6659 = G__6680;
i__6653_6660 = G__6681;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__6656 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__6682__i = 0, G__6682__a = new Array(arguments.length -  3);
while (G__6682__i < G__6682__a.length) {G__6682__a[G__6682__i] = arguments[G__6682__i + 3]; ++G__6682__i;}
  kvs = new cljs.core.IndexedSeq(G__6682__a,0);
} 
return G__6656__delegate.call(this,elem,k,v,kvs);};
G__6656.cljs$lang$maxFixedArity = 3;
G__6656.cljs$lang$applyTo = (function (arglist__6683){
var elem = cljs.core.first(arglist__6683);
arglist__6683 = cljs.core.next(arglist__6683);
var k = cljs.core.first(arglist__6683);
arglist__6683 = cljs.core.next(arglist__6683);
var v = cljs.core.first(arglist__6683);
var kvs = cljs.core.rest(arglist__6683);
return G__6656__delegate(elem,k,v,kvs);
});
G__6656.cljs$core$IFn$_invoke$arity$variadic = G__6656__delegate;
return G__6656;
})()
;
dommy$core$set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return dommy$core$set_attr_BANG___2.call(this,elem,k);
case 3:
return dommy$core$set_attr_BANG___3.call(this,elem,k,v);
default:
var G__6684 = null;
if (arguments.length > 3) {
var G__6685__i = 0, G__6685__a = new Array(arguments.length -  3);
while (G__6685__i < G__6685__a.length) {G__6685__a[G__6685__i] = arguments[G__6685__i + 3]; ++G__6685__i;}
G__6684 = new cljs.core.IndexedSeq(G__6685__a,0);
}
return dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__6684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$set_attr_BANG_.cljs$lang$maxFixedArity = 3;
dommy$core$set_attr_BANG_.cljs$lang$applyTo = dommy$core$set_attr_BANG___4.cljs$lang$applyTo;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$set_attr_BANG___2;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$set_attr_BANG___3;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$set_attr_BANG_;
})()
;
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 * @param {...*} var_args
 */
dommy.core.remove_attr_BANG_ = (function() {
var dommy$core$remove_attr_BANG_ = null;
var dommy$core$remove_attr_BANG___2 = (function (elem,k){
var k_6694__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6694__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_6694__$1);
}

return elem;
});
var dommy$core$remove_attr_BANG___3 = (function() { 
var G__6695__delegate = function (elem,k,ks){
var seq__6690_6696 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__6691_6697 = null;
var count__6692_6698 = (0);
var i__6693_6699 = (0);
while(true){
if((i__6693_6699 < count__6692_6698)){
var k_6700__$1 = cljs.core._nth.call(null,chunk__6691_6697,i__6693_6699);
dommy$core$remove_attr_BANG_.call(null,elem,k_6700__$1);

var G__6701 = seq__6690_6696;
var G__6702 = chunk__6691_6697;
var G__6703 = count__6692_6698;
var G__6704 = (i__6693_6699 + (1));
seq__6690_6696 = G__6701;
chunk__6691_6697 = G__6702;
count__6692_6698 = G__6703;
i__6693_6699 = G__6704;
continue;
} else {
var temp__4126__auto___6705 = cljs.core.seq.call(null,seq__6690_6696);
if(temp__4126__auto___6705){
var seq__6690_6706__$1 = temp__4126__auto___6705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6690_6706__$1)){
var c__4907__auto___6707 = cljs.core.chunk_first.call(null,seq__6690_6706__$1);
var G__6708 = cljs.core.chunk_rest.call(null,seq__6690_6706__$1);
var G__6709 = c__4907__auto___6707;
var G__6710 = cljs.core.count.call(null,c__4907__auto___6707);
var G__6711 = (0);
seq__6690_6696 = G__6708;
chunk__6691_6697 = G__6709;
count__6692_6698 = G__6710;
i__6693_6699 = G__6711;
continue;
} else {
var k_6712__$1 = cljs.core.first.call(null,seq__6690_6706__$1);
dommy$core$remove_attr_BANG_.call(null,elem,k_6712__$1);

var G__6713 = cljs.core.next.call(null,seq__6690_6706__$1);
var G__6714 = null;
var G__6715 = (0);
var G__6716 = (0);
seq__6690_6696 = G__6713;
chunk__6691_6697 = G__6714;
count__6692_6698 = G__6715;
i__6693_6699 = G__6716;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__6695 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__6717__i = 0, G__6717__a = new Array(arguments.length -  2);
while (G__6717__i < G__6717__a.length) {G__6717__a[G__6717__i] = arguments[G__6717__i + 2]; ++G__6717__i;}
  ks = new cljs.core.IndexedSeq(G__6717__a,0);
} 
return G__6695__delegate.call(this,elem,k,ks);};
G__6695.cljs$lang$maxFixedArity = 2;
G__6695.cljs$lang$applyTo = (function (arglist__6718){
var elem = cljs.core.first(arglist__6718);
arglist__6718 = cljs.core.next(arglist__6718);
var k = cljs.core.first(arglist__6718);
var ks = cljs.core.rest(arglist__6718);
return G__6695__delegate(elem,k,ks);
});
G__6695.cljs$core$IFn$_invoke$arity$variadic = G__6695__delegate;
return G__6695;
})()
;
dommy$core$remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_attr_BANG___2.call(this,elem,k);
default:
var G__6719 = null;
if (arguments.length > 2) {
var G__6720__i = 0, G__6720__a = new Array(arguments.length -  2);
while (G__6720__i < G__6720__a.length) {G__6720__a[G__6720__i] = arguments[G__6720__i + 2]; ++G__6720__i;}
G__6719 = new cljs.core.IndexedSeq(G__6720__a,0);
}
return dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__6719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$remove_attr_BANG_.cljs$lang$applyTo = dommy$core$remove_attr_BANG___3.cljs$lang$applyTo;
dommy$core$remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_attr_BANG___2;
dommy$core$remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$remove_attr_BANG_;
})()
;
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function() {
var dommy$core$toggle_attr_BANG_ = null;
var dommy$core$toggle_attr_BANG___2 = (function (elem,k){
return dommy$core$toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var dommy$core$toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
dommy$core$toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return dommy$core$toggle_attr_BANG___2.call(this,elem,k);
case 3:
return dommy$core$toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_attr_BANG___2;
dommy$core$toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$toggle_attr_BANG___3;
return dommy$core$toggle_attr_BANG_;
})()
;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 * @param {...*} var_args
 */
dommy.core.add_class_BANG_ = (function() {
var dommy$core$add_class_BANG_ = null;
var dommy$core$add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___6745 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___6745)){
var class_list_6746 = temp__4124__auto___6745;
var seq__6733_6747 = cljs.core.seq.call(null,classes__$1);
var chunk__6734_6748 = null;
var count__6735_6749 = (0);
var i__6736_6750 = (0);
while(true){
if((i__6736_6750 < count__6735_6749)){
var c_6751 = cljs.core._nth.call(null,chunk__6734_6748,i__6736_6750);
class_list_6746.add(c_6751);

var G__6752 = seq__6733_6747;
var G__6753 = chunk__6734_6748;
var G__6754 = count__6735_6749;
var G__6755 = (i__6736_6750 + (1));
seq__6733_6747 = G__6752;
chunk__6734_6748 = G__6753;
count__6735_6749 = G__6754;
i__6736_6750 = G__6755;
continue;
} else {
var temp__4126__auto___6756 = cljs.core.seq.call(null,seq__6733_6747);
if(temp__4126__auto___6756){
var seq__6733_6757__$1 = temp__4126__auto___6756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6733_6757__$1)){
var c__4907__auto___6758 = cljs.core.chunk_first.call(null,seq__6733_6757__$1);
var G__6759 = cljs.core.chunk_rest.call(null,seq__6733_6757__$1);
var G__6760 = c__4907__auto___6758;
var G__6761 = cljs.core.count.call(null,c__4907__auto___6758);
var G__6762 = (0);
seq__6733_6747 = G__6759;
chunk__6734_6748 = G__6760;
count__6735_6749 = G__6761;
i__6736_6750 = G__6762;
continue;
} else {
var c_6763 = cljs.core.first.call(null,seq__6733_6757__$1);
class_list_6746.add(c_6763);

var G__6764 = cljs.core.next.call(null,seq__6733_6757__$1);
var G__6765 = null;
var G__6766 = (0);
var G__6767 = (0);
seq__6733_6747 = G__6764;
chunk__6734_6748 = G__6765;
count__6735_6749 = G__6766;
i__6736_6750 = G__6767;
continue;
}
} else {
}
}
break;
}
} else {
var seq__6737_6768 = cljs.core.seq.call(null,classes__$1);
var chunk__6738_6769 = null;
var count__6739_6770 = (0);
var i__6740_6771 = (0);
while(true){
if((i__6740_6771 < count__6739_6770)){
var c_6772 = cljs.core._nth.call(null,chunk__6738_6769,i__6740_6771);
var class_name_6773 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6773,c_6772))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_6773 === ""))?c_6772:[cljs.core.str(class_name_6773),cljs.core.str(" "),cljs.core.str(c_6772)].join('')));
}

var G__6774 = seq__6737_6768;
var G__6775 = chunk__6738_6769;
var G__6776 = count__6739_6770;
var G__6777 = (i__6740_6771 + (1));
seq__6737_6768 = G__6774;
chunk__6738_6769 = G__6775;
count__6739_6770 = G__6776;
i__6740_6771 = G__6777;
continue;
} else {
var temp__4126__auto___6778 = cljs.core.seq.call(null,seq__6737_6768);
if(temp__4126__auto___6778){
var seq__6737_6779__$1 = temp__4126__auto___6778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6737_6779__$1)){
var c__4907__auto___6780 = cljs.core.chunk_first.call(null,seq__6737_6779__$1);
var G__6781 = cljs.core.chunk_rest.call(null,seq__6737_6779__$1);
var G__6782 = c__4907__auto___6780;
var G__6783 = cljs.core.count.call(null,c__4907__auto___6780);
var G__6784 = (0);
seq__6737_6768 = G__6781;
chunk__6738_6769 = G__6782;
count__6739_6770 = G__6783;
i__6740_6771 = G__6784;
continue;
} else {
var c_6785 = cljs.core.first.call(null,seq__6737_6779__$1);
var class_name_6786 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6786,c_6785))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_6786 === ""))?c_6785:[cljs.core.str(class_name_6786),cljs.core.str(" "),cljs.core.str(c_6785)].join('')));
}

var G__6787 = cljs.core.next.call(null,seq__6737_6779__$1);
var G__6788 = null;
var G__6789 = (0);
var G__6790 = (0);
seq__6737_6768 = G__6787;
chunk__6738_6769 = G__6788;
count__6739_6770 = G__6789;
i__6740_6771 = G__6790;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var dommy$core$add_class_BANG___3 = (function() { 
var G__6791__delegate = function (elem,classes,more_classes){
var seq__6741_6792 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__6742_6793 = null;
var count__6743_6794 = (0);
var i__6744_6795 = (0);
while(true){
if((i__6744_6795 < count__6743_6794)){
var c_6796 = cljs.core._nth.call(null,chunk__6742_6793,i__6744_6795);
dommy$core$add_class_BANG_.call(null,elem,c_6796);

var G__6797 = seq__6741_6792;
var G__6798 = chunk__6742_6793;
var G__6799 = count__6743_6794;
var G__6800 = (i__6744_6795 + (1));
seq__6741_6792 = G__6797;
chunk__6742_6793 = G__6798;
count__6743_6794 = G__6799;
i__6744_6795 = G__6800;
continue;
} else {
var temp__4126__auto___6801 = cljs.core.seq.call(null,seq__6741_6792);
if(temp__4126__auto___6801){
var seq__6741_6802__$1 = temp__4126__auto___6801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6741_6802__$1)){
var c__4907__auto___6803 = cljs.core.chunk_first.call(null,seq__6741_6802__$1);
var G__6804 = cljs.core.chunk_rest.call(null,seq__6741_6802__$1);
var G__6805 = c__4907__auto___6803;
var G__6806 = cljs.core.count.call(null,c__4907__auto___6803);
var G__6807 = (0);
seq__6741_6792 = G__6804;
chunk__6742_6793 = G__6805;
count__6743_6794 = G__6806;
i__6744_6795 = G__6807;
continue;
} else {
var c_6808 = cljs.core.first.call(null,seq__6741_6802__$1);
dommy$core$add_class_BANG_.call(null,elem,c_6808);

var G__6809 = cljs.core.next.call(null,seq__6741_6802__$1);
var G__6810 = null;
var G__6811 = (0);
var G__6812 = (0);
seq__6741_6792 = G__6809;
chunk__6742_6793 = G__6810;
count__6743_6794 = G__6811;
i__6744_6795 = G__6812;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__6791 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__6813__i = 0, G__6813__a = new Array(arguments.length -  2);
while (G__6813__i < G__6813__a.length) {G__6813__a[G__6813__i] = arguments[G__6813__i + 2]; ++G__6813__i;}
  more_classes = new cljs.core.IndexedSeq(G__6813__a,0);
} 
return G__6791__delegate.call(this,elem,classes,more_classes);};
G__6791.cljs$lang$maxFixedArity = 2;
G__6791.cljs$lang$applyTo = (function (arglist__6814){
var elem = cljs.core.first(arglist__6814);
arglist__6814 = cljs.core.next(arglist__6814);
var classes = cljs.core.first(arglist__6814);
var more_classes = cljs.core.rest(arglist__6814);
return G__6791__delegate(elem,classes,more_classes);
});
G__6791.cljs$core$IFn$_invoke$arity$variadic = G__6791__delegate;
return G__6791;
})()
;
dommy$core$add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$add_class_BANG___2.call(this,elem,classes);
default:
var G__6815 = null;
if (arguments.length > 2) {
var G__6816__i = 0, G__6816__a = new Array(arguments.length -  2);
while (G__6816__i < G__6816__a.length) {G__6816__a[G__6816__i] = arguments[G__6816__i + 2]; ++G__6816__i;}
G__6815 = new cljs.core.IndexedSeq(G__6816__a,0);
}
return dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__6815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$add_class_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$add_class_BANG_.cljs$lang$applyTo = dommy$core$add_class_BANG___3.cljs$lang$applyTo;
dommy$core$add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$add_class_BANG___2;
dommy$core$add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$add_class_BANG_;
})()
;
/**
 * Remove `c` from `elem` class list
 * @param {...*} var_args
 */
dommy.core.remove_class_BANG_ = (function() {
var dommy$core$remove_class_BANG_ = null;
var dommy$core$remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___6825 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___6825)){
var class_list_6826 = temp__4124__auto___6825;
class_list_6826.remove(c__$1);
} else {
var class_name_6827 = dommy.core.class$.call(null,elem);
var new_class_name_6828 = dommy.utils.remove_class_str.call(null,class_name_6827,c__$1);
if((class_name_6827 === new_class_name_6828)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_6828);
}
}

return elem;
});
var dommy$core$remove_class_BANG___3 = (function() { 
var G__6829__delegate = function (elem,class$,classes){
var seq__6821 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__6822 = null;
var count__6823 = (0);
var i__6824 = (0);
while(true){
if((i__6824 < count__6823)){
var c = cljs.core._nth.call(null,chunk__6822,i__6824);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__6830 = seq__6821;
var G__6831 = chunk__6822;
var G__6832 = count__6823;
var G__6833 = (i__6824 + (1));
seq__6821 = G__6830;
chunk__6822 = G__6831;
count__6823 = G__6832;
i__6824 = G__6833;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6821);
if(temp__4126__auto__){
var seq__6821__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6821__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__6821__$1);
var G__6834 = cljs.core.chunk_rest.call(null,seq__6821__$1);
var G__6835 = c__4907__auto__;
var G__6836 = cljs.core.count.call(null,c__4907__auto__);
var G__6837 = (0);
seq__6821 = G__6834;
chunk__6822 = G__6835;
count__6823 = G__6836;
i__6824 = G__6837;
continue;
} else {
var c = cljs.core.first.call(null,seq__6821__$1);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__6838 = cljs.core.next.call(null,seq__6821__$1);
var G__6839 = null;
var G__6840 = (0);
var G__6841 = (0);
seq__6821 = G__6838;
chunk__6822 = G__6839;
count__6823 = G__6840;
i__6824 = G__6841;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__6829 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__6842__i = 0, G__6842__a = new Array(arguments.length -  2);
while (G__6842__i < G__6842__a.length) {G__6842__a[G__6842__i] = arguments[G__6842__i + 2]; ++G__6842__i;}
  classes = new cljs.core.IndexedSeq(G__6842__a,0);
} 
return G__6829__delegate.call(this,elem,class$,classes);};
G__6829.cljs$lang$maxFixedArity = 2;
G__6829.cljs$lang$applyTo = (function (arglist__6843){
var elem = cljs.core.first(arglist__6843);
arglist__6843 = cljs.core.next(arglist__6843);
var class$ = cljs.core.first(arglist__6843);
var classes = cljs.core.rest(arglist__6843);
return G__6829__delegate(elem,class$,classes);
});
G__6829.cljs$core$IFn$_invoke$arity$variadic = G__6829__delegate;
return G__6829;
})()
;
dommy$core$remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_class_BANG___2.call(this,elem,class$);
default:
var G__6844 = null;
if (arguments.length > 2) {
var G__6845__i = 0, G__6845__a = new Array(arguments.length -  2);
while (G__6845__i < G__6845__a.length) {G__6845__a[G__6845__i] = arguments[G__6845__i + 2]; ++G__6845__i;}
G__6844 = new cljs.core.IndexedSeq(G__6845__a,0);
}
return dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__6844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_class_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$remove_class_BANG_.cljs$lang$applyTo = dommy$core$remove_class_BANG___3.cljs$lang$applyTo;
dommy$core$remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_class_BANG___2;
dommy$core$remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$remove_class_BANG_;
})()
;
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function() {
var dommy$core$toggle_class_BANG_ = null;
var dommy$core$toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___6846 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___6846)){
var class_list_6847 = temp__4124__auto___6846;
class_list_6847.toggle(c__$1);
} else {
dommy$core$toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var dommy$core$toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
dommy$core$toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return dommy$core$toggle_class_BANG___2.call(this,elem,class$);
case 3:
return dommy$core$toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_class_BANG___2;
dommy$core$toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$toggle_class_BANG___3;
return dommy$core$toggle_class_BANG_;
})()
;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function() {
var dommy$core$toggle_BANG_ = null;
var dommy$core$toggle_BANG___1 = (function (elem){
return dommy$core$toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var dommy$core$toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
dommy$core$toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return dommy$core$toggle_BANG___1.call(this,elem);
case 2:
return dommy$core$toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = dommy$core$toggle_BANG___1;
dommy$core$toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_BANG___2;
return dommy$core$toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var dommy$core$create_element = null;
var dommy$core$create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var dommy$core$create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
dommy$core$create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return dommy$core$create_element__1.call(this,tag_ns);
case 2:
return dommy$core$create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$create_element.cljs$core$IFn$_invoke$arity$1 = dommy$core$create_element__1;
dommy$core$create_element.cljs$core$IFn$_invoke$arity$2 = dommy$core$create_element__2;
return dommy$core$create_element;
})()
;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 * @param {...*} var_args
 */
dommy.core.append_BANG_ = (function() {
var dommy$core$append_BANG_ = null;
var dommy$core$append_BANG___2 = (function (parent,child){
var G__6853 = parent;
G__6853.appendChild(child);

return G__6853;
});
var dommy$core$append_BANG___3 = (function() { 
var G__6858__delegate = function (parent,child,more_children){
var seq__6854_6859 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6855_6860 = null;
var count__6856_6861 = (0);
var i__6857_6862 = (0);
while(true){
if((i__6857_6862 < count__6856_6861)){
var c_6863 = cljs.core._nth.call(null,chunk__6855_6860,i__6857_6862);
dommy$core$append_BANG_.call(null,parent,c_6863);

var G__6864 = seq__6854_6859;
var G__6865 = chunk__6855_6860;
var G__6866 = count__6856_6861;
var G__6867 = (i__6857_6862 + (1));
seq__6854_6859 = G__6864;
chunk__6855_6860 = G__6865;
count__6856_6861 = G__6866;
i__6857_6862 = G__6867;
continue;
} else {
var temp__4126__auto___6868 = cljs.core.seq.call(null,seq__6854_6859);
if(temp__4126__auto___6868){
var seq__6854_6869__$1 = temp__4126__auto___6868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6854_6869__$1)){
var c__4907__auto___6870 = cljs.core.chunk_first.call(null,seq__6854_6869__$1);
var G__6871 = cljs.core.chunk_rest.call(null,seq__6854_6869__$1);
var G__6872 = c__4907__auto___6870;
var G__6873 = cljs.core.count.call(null,c__4907__auto___6870);
var G__6874 = (0);
seq__6854_6859 = G__6871;
chunk__6855_6860 = G__6872;
count__6856_6861 = G__6873;
i__6857_6862 = G__6874;
continue;
} else {
var c_6875 = cljs.core.first.call(null,seq__6854_6869__$1);
dommy$core$append_BANG_.call(null,parent,c_6875);

var G__6876 = cljs.core.next.call(null,seq__6854_6869__$1);
var G__6877 = null;
var G__6878 = (0);
var G__6879 = (0);
seq__6854_6859 = G__6876;
chunk__6855_6860 = G__6877;
count__6856_6861 = G__6878;
i__6857_6862 = G__6879;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__6858 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__6880__i = 0, G__6880__a = new Array(arguments.length -  2);
while (G__6880__i < G__6880__a.length) {G__6880__a[G__6880__i] = arguments[G__6880__i + 2]; ++G__6880__i;}
  more_children = new cljs.core.IndexedSeq(G__6880__a,0);
} 
return G__6858__delegate.call(this,parent,child,more_children);};
G__6858.cljs$lang$maxFixedArity = 2;
G__6858.cljs$lang$applyTo = (function (arglist__6881){
var parent = cljs.core.first(arglist__6881);
arglist__6881 = cljs.core.next(arglist__6881);
var child = cljs.core.first(arglist__6881);
var more_children = cljs.core.rest(arglist__6881);
return G__6858__delegate(parent,child,more_children);
});
G__6858.cljs$core$IFn$_invoke$arity$variadic = G__6858__delegate;
return G__6858;
})()
;
dommy$core$append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$append_BANG___2.call(this,parent,child);
default:
var G__6882 = null;
if (arguments.length > 2) {
var G__6883__i = 0, G__6883__a = new Array(arguments.length -  2);
while (G__6883__i < G__6883__a.length) {G__6883__a[G__6883__i] = arguments[G__6883__i + 2]; ++G__6883__i;}
G__6882 = new cljs.core.IndexedSeq(G__6883__a,0);
}
return dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__6882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$append_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$append_BANG_.cljs$lang$applyTo = dommy$core$append_BANG___3.cljs$lang$applyTo;
dommy$core$append_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$append_BANG___2;
dommy$core$append_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$append_BANG_;
})()
;
/**
 * Prepend `child` to `parent`
 * @param {...*} var_args
 */
dommy.core.prepend_BANG_ = (function() {
var dommy$core$prepend_BANG_ = null;
var dommy$core$prepend_BANG___2 = (function (parent,child){
var G__6889 = parent;
G__6889.insertBefore(child,parent.firstChild);

return G__6889;
});
var dommy$core$prepend_BANG___3 = (function() { 
var G__6894__delegate = function (parent,child,more_children){
var seq__6890_6895 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6891_6896 = null;
var count__6892_6897 = (0);
var i__6893_6898 = (0);
while(true){
if((i__6893_6898 < count__6892_6897)){
var c_6899 = cljs.core._nth.call(null,chunk__6891_6896,i__6893_6898);
dommy$core$prepend_BANG_.call(null,parent,c_6899);

var G__6900 = seq__6890_6895;
var G__6901 = chunk__6891_6896;
var G__6902 = count__6892_6897;
var G__6903 = (i__6893_6898 + (1));
seq__6890_6895 = G__6900;
chunk__6891_6896 = G__6901;
count__6892_6897 = G__6902;
i__6893_6898 = G__6903;
continue;
} else {
var temp__4126__auto___6904 = cljs.core.seq.call(null,seq__6890_6895);
if(temp__4126__auto___6904){
var seq__6890_6905__$1 = temp__4126__auto___6904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6890_6905__$1)){
var c__4907__auto___6906 = cljs.core.chunk_first.call(null,seq__6890_6905__$1);
var G__6907 = cljs.core.chunk_rest.call(null,seq__6890_6905__$1);
var G__6908 = c__4907__auto___6906;
var G__6909 = cljs.core.count.call(null,c__4907__auto___6906);
var G__6910 = (0);
seq__6890_6895 = G__6907;
chunk__6891_6896 = G__6908;
count__6892_6897 = G__6909;
i__6893_6898 = G__6910;
continue;
} else {
var c_6911 = cljs.core.first.call(null,seq__6890_6905__$1);
dommy$core$prepend_BANG_.call(null,parent,c_6911);

var G__6912 = cljs.core.next.call(null,seq__6890_6905__$1);
var G__6913 = null;
var G__6914 = (0);
var G__6915 = (0);
seq__6890_6895 = G__6912;
chunk__6891_6896 = G__6913;
count__6892_6897 = G__6914;
i__6893_6898 = G__6915;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__6894 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__6916__i = 0, G__6916__a = new Array(arguments.length -  2);
while (G__6916__i < G__6916__a.length) {G__6916__a[G__6916__i] = arguments[G__6916__i + 2]; ++G__6916__i;}
  more_children = new cljs.core.IndexedSeq(G__6916__a,0);
} 
return G__6894__delegate.call(this,parent,child,more_children);};
G__6894.cljs$lang$maxFixedArity = 2;
G__6894.cljs$lang$applyTo = (function (arglist__6917){
var parent = cljs.core.first(arglist__6917);
arglist__6917 = cljs.core.next(arglist__6917);
var child = cljs.core.first(arglist__6917);
var more_children = cljs.core.rest(arglist__6917);
return G__6894__delegate(parent,child,more_children);
});
G__6894.cljs$core$IFn$_invoke$arity$variadic = G__6894__delegate;
return G__6894;
})()
;
dommy$core$prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$prepend_BANG___2.call(this,parent,child);
default:
var G__6918 = null;
if (arguments.length > 2) {
var G__6919__i = 0, G__6919__a = new Array(arguments.length -  2);
while (G__6919__i < G__6919__a.length) {G__6919__a[G__6919__i] = arguments[G__6919__i + 2]; ++G__6919__i;}
G__6918 = new cljs.core.IndexedSeq(G__6919__a,0);
}
return dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__6918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$prepend_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$prepend_BANG_.cljs$lang$applyTo = dommy$core$prepend_BANG___3.cljs$lang$applyTo;
dommy$core$prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$prepend_BANG___2;
dommy$core$prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$prepend_BANG_;
})()
;
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4124__auto___6920 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___6920)){
var next_6921 = temp__4124__auto___6920;
dommy.core.insert_before_BANG_.call(null,elem,next_6921);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function() {
var dommy$core$remove_BANG_ = null;
var dommy$core$remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy$core$remove_BANG_.call(null,p,elem);
});
var dommy$core$remove_BANG___2 = (function (p,elem){
var G__6923 = p;
G__6923.removeChild(elem);

return G__6923;
});
dommy$core$remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return dommy$core$remove_BANG___1.call(this,p);
case 2:
return dommy$core$remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_BANG_.cljs$core$IFn$_invoke$arity$1 = dommy$core$remove_BANG___1;
dommy$core$remove_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_BANG___2;
return dommy$core$remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6924){
var vec__6925 = p__6924;
var special_mouse_event = cljs.core.nth.call(null,vec__6925,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__6925,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6925,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__6925,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4122__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4110__auto__ = related_target;
if(cljs.core.truth_(and__4110__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4110__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__6925,special_mouse_event,real_mouse_event))
});})(vec__6925,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4110__auto__ = selected_target;
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4110__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4122__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * @param {...*} var_args
 */
dommy.core.update_event_listeners_BANG_ = (function() { 
var dommy$core$update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var dommy$core$update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__6926__i = 0, G__6926__a = new Array(arguments.length -  2);
while (G__6926__i < G__6926__a.length) {G__6926__a[G__6926__i] = arguments[G__6926__i + 2]; ++G__6926__i;}
  args = new cljs.core.IndexedSeq(G__6926__a,0);
} 
return dommy$core$update_event_listeners_BANG___delegate.call(this,elem,f,args);};
dommy$core$update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6927){
var elem = cljs.core.first(arglist__6927);
arglist__6927 = cljs.core.next(arglist__6927);
var f = cljs.core.first(arglist__6927);
var args = cljs.core.rest(arglist__6927);
return dommy$core$update_event_listeners_BANG___delegate(elem,f,args);
});
dommy$core$update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$update_event_listeners_BANG___delegate;
return dommy$core$update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 * @param {...*} var_args
 */
dommy.core.listen_BANG_ = (function() { 
var dommy$core$listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6951_6974 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6975 = cljs.core.nth.call(null,vec__6951_6974,(0),null);
var selector_6976 = cljs.core.nth.call(null,vec__6951_6974,(1),null);
var seq__6952_6977 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6959_6978 = null;
var count__6960_6979 = (0);
var i__6961_6980 = (0);
while(true){
if((i__6961_6980 < count__6960_6979)){
var vec__6968_6981 = cljs.core._nth.call(null,chunk__6959_6978,i__6961_6980);
var orig_type_6982 = cljs.core.nth.call(null,vec__6968_6981,(0),null);
var f_6983 = cljs.core.nth.call(null,vec__6968_6981,(1),null);
var seq__6962_6984 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6982,new cljs.core.PersistentArrayMap.fromArray([orig_type_6982,cljs.core.identity], true, false)));
var chunk__6964_6985 = null;
var count__6965_6986 = (0);
var i__6966_6987 = (0);
while(true){
if((i__6966_6987 < count__6965_6986)){
var vec__6969_6988 = cljs.core._nth.call(null,chunk__6964_6985,i__6966_6987);
var actual_type_6989 = cljs.core.nth.call(null,vec__6969_6988,(0),null);
var factory_6990 = cljs.core.nth.call(null,vec__6969_6988,(1),null);
var canonical_f_6991 = (cljs.core.truth_(selector_6976)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6975,selector_6976):cljs.core.identity).call(null,factory_6990.call(null,f_6983));
dommy.core.update_event_listeners_BANG_.call(null,elem_6975,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6976,actual_type_6989,f_6983], null),canonical_f_6991);

if(cljs.core.truth_(elem_6975.addEventListener)){
elem_6975.addEventListener(cljs.core.name.call(null,actual_type_6989),canonical_f_6991);
} else {
elem_6975.attachEvent(cljs.core.name.call(null,actual_type_6989),canonical_f_6991);
}

var G__6992 = seq__6962_6984;
var G__6993 = chunk__6964_6985;
var G__6994 = count__6965_6986;
var G__6995 = (i__6966_6987 + (1));
seq__6962_6984 = G__6992;
chunk__6964_6985 = G__6993;
count__6965_6986 = G__6994;
i__6966_6987 = G__6995;
continue;
} else {
var temp__4126__auto___6996 = cljs.core.seq.call(null,seq__6962_6984);
if(temp__4126__auto___6996){
var seq__6962_6997__$1 = temp__4126__auto___6996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6962_6997__$1)){
var c__4907__auto___6998 = cljs.core.chunk_first.call(null,seq__6962_6997__$1);
var G__6999 = cljs.core.chunk_rest.call(null,seq__6962_6997__$1);
var G__7000 = c__4907__auto___6998;
var G__7001 = cljs.core.count.call(null,c__4907__auto___6998);
var G__7002 = (0);
seq__6962_6984 = G__6999;
chunk__6964_6985 = G__7000;
count__6965_6986 = G__7001;
i__6966_6987 = G__7002;
continue;
} else {
var vec__6970_7003 = cljs.core.first.call(null,seq__6962_6997__$1);
var actual_type_7004 = cljs.core.nth.call(null,vec__6970_7003,(0),null);
var factory_7005 = cljs.core.nth.call(null,vec__6970_7003,(1),null);
var canonical_f_7006 = (cljs.core.truth_(selector_6976)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6975,selector_6976):cljs.core.identity).call(null,factory_7005.call(null,f_6983));
dommy.core.update_event_listeners_BANG_.call(null,elem_6975,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6976,actual_type_7004,f_6983], null),canonical_f_7006);

if(cljs.core.truth_(elem_6975.addEventListener)){
elem_6975.addEventListener(cljs.core.name.call(null,actual_type_7004),canonical_f_7006);
} else {
elem_6975.attachEvent(cljs.core.name.call(null,actual_type_7004),canonical_f_7006);
}

var G__7007 = cljs.core.next.call(null,seq__6962_6997__$1);
var G__7008 = null;
var G__7009 = (0);
var G__7010 = (0);
seq__6962_6984 = G__7007;
chunk__6964_6985 = G__7008;
count__6965_6986 = G__7009;
i__6966_6987 = G__7010;
continue;
}
} else {
}
}
break;
}

var G__7011 = seq__6952_6977;
var G__7012 = chunk__6959_6978;
var G__7013 = count__6960_6979;
var G__7014 = (i__6961_6980 + (1));
seq__6952_6977 = G__7011;
chunk__6959_6978 = G__7012;
count__6960_6979 = G__7013;
i__6961_6980 = G__7014;
continue;
} else {
var temp__4126__auto___7015 = cljs.core.seq.call(null,seq__6952_6977);
if(temp__4126__auto___7015){
var seq__6952_7016__$1 = temp__4126__auto___7015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6952_7016__$1)){
var c__4907__auto___7017 = cljs.core.chunk_first.call(null,seq__6952_7016__$1);
var G__7018 = cljs.core.chunk_rest.call(null,seq__6952_7016__$1);
var G__7019 = c__4907__auto___7017;
var G__7020 = cljs.core.count.call(null,c__4907__auto___7017);
var G__7021 = (0);
seq__6952_6977 = G__7018;
chunk__6959_6978 = G__7019;
count__6960_6979 = G__7020;
i__6961_6980 = G__7021;
continue;
} else {
var vec__6971_7022 = cljs.core.first.call(null,seq__6952_7016__$1);
var orig_type_7023 = cljs.core.nth.call(null,vec__6971_7022,(0),null);
var f_7024 = cljs.core.nth.call(null,vec__6971_7022,(1),null);
var seq__6953_7025 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7023,new cljs.core.PersistentArrayMap.fromArray([orig_type_7023,cljs.core.identity], true, false)));
var chunk__6955_7026 = null;
var count__6956_7027 = (0);
var i__6957_7028 = (0);
while(true){
if((i__6957_7028 < count__6956_7027)){
var vec__6972_7029 = cljs.core._nth.call(null,chunk__6955_7026,i__6957_7028);
var actual_type_7030 = cljs.core.nth.call(null,vec__6972_7029,(0),null);
var factory_7031 = cljs.core.nth.call(null,vec__6972_7029,(1),null);
var canonical_f_7032 = (cljs.core.truth_(selector_6976)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6975,selector_6976):cljs.core.identity).call(null,factory_7031.call(null,f_7024));
dommy.core.update_event_listeners_BANG_.call(null,elem_6975,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6976,actual_type_7030,f_7024], null),canonical_f_7032);

if(cljs.core.truth_(elem_6975.addEventListener)){
elem_6975.addEventListener(cljs.core.name.call(null,actual_type_7030),canonical_f_7032);
} else {
elem_6975.attachEvent(cljs.core.name.call(null,actual_type_7030),canonical_f_7032);
}

var G__7033 = seq__6953_7025;
var G__7034 = chunk__6955_7026;
var G__7035 = count__6956_7027;
var G__7036 = (i__6957_7028 + (1));
seq__6953_7025 = G__7033;
chunk__6955_7026 = G__7034;
count__6956_7027 = G__7035;
i__6957_7028 = G__7036;
continue;
} else {
var temp__4126__auto___7037__$1 = cljs.core.seq.call(null,seq__6953_7025);
if(temp__4126__auto___7037__$1){
var seq__6953_7038__$1 = temp__4126__auto___7037__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6953_7038__$1)){
var c__4907__auto___7039 = cljs.core.chunk_first.call(null,seq__6953_7038__$1);
var G__7040 = cljs.core.chunk_rest.call(null,seq__6953_7038__$1);
var G__7041 = c__4907__auto___7039;
var G__7042 = cljs.core.count.call(null,c__4907__auto___7039);
var G__7043 = (0);
seq__6953_7025 = G__7040;
chunk__6955_7026 = G__7041;
count__6956_7027 = G__7042;
i__6957_7028 = G__7043;
continue;
} else {
var vec__6973_7044 = cljs.core.first.call(null,seq__6953_7038__$1);
var actual_type_7045 = cljs.core.nth.call(null,vec__6973_7044,(0),null);
var factory_7046 = cljs.core.nth.call(null,vec__6973_7044,(1),null);
var canonical_f_7047 = (cljs.core.truth_(selector_6976)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6975,selector_6976):cljs.core.identity).call(null,factory_7046.call(null,f_7024));
dommy.core.update_event_listeners_BANG_.call(null,elem_6975,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6976,actual_type_7045,f_7024], null),canonical_f_7047);

if(cljs.core.truth_(elem_6975.addEventListener)){
elem_6975.addEventListener(cljs.core.name.call(null,actual_type_7045),canonical_f_7047);
} else {
elem_6975.attachEvent(cljs.core.name.call(null,actual_type_7045),canonical_f_7047);
}

var G__7048 = cljs.core.next.call(null,seq__6953_7038__$1);
var G__7049 = null;
var G__7050 = (0);
var G__7051 = (0);
seq__6953_7025 = G__7048;
chunk__6955_7026 = G__7049;
count__6956_7027 = G__7050;
i__6957_7028 = G__7051;
continue;
}
} else {
}
}
break;
}

var G__7052 = cljs.core.next.call(null,seq__6952_7016__$1);
var G__7053 = null;
var G__7054 = (0);
var G__7055 = (0);
seq__6952_6977 = G__7052;
chunk__6959_6978 = G__7053;
count__6960_6979 = G__7054;
i__6961_6980 = G__7055;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__7056__i = 0, G__7056__a = new Array(arguments.length -  1);
while (G__7056__i < G__7056__a.length) {G__7056__a[G__7056__i] = arguments[G__7056__i + 1]; ++G__7056__i;}
  type_fs = new cljs.core.IndexedSeq(G__7056__a,0);
} 
return dommy$core$listen_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_BANG_.cljs$lang$applyTo = (function (arglist__7057){
var elem_sel = cljs.core.first(arglist__7057);
var type_fs = cljs.core.rest(arglist__7057);
return dommy$core$listen_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_BANG___delegate;
return dommy$core$listen_BANG_;
})()
;
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 * @param {...*} var_args
 */
dommy.core.unlisten_BANG_ = (function() { 
var dommy$core$unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7081_7104 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7105 = cljs.core.nth.call(null,vec__7081_7104,(0),null);
var selector_7106 = cljs.core.nth.call(null,vec__7081_7104,(1),null);
var seq__7082_7107 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7089_7108 = null;
var count__7090_7109 = (0);
var i__7091_7110 = (0);
while(true){
if((i__7091_7110 < count__7090_7109)){
var vec__7098_7111 = cljs.core._nth.call(null,chunk__7089_7108,i__7091_7110);
var orig_type_7112 = cljs.core.nth.call(null,vec__7098_7111,(0),null);
var f_7113 = cljs.core.nth.call(null,vec__7098_7111,(1),null);
var seq__7092_7114 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7112,new cljs.core.PersistentArrayMap.fromArray([orig_type_7112,cljs.core.identity], true, false)));
var chunk__7094_7115 = null;
var count__7095_7116 = (0);
var i__7096_7117 = (0);
while(true){
if((i__7096_7117 < count__7095_7116)){
var vec__7099_7118 = cljs.core._nth.call(null,chunk__7094_7115,i__7096_7117);
var actual_type_7119 = cljs.core.nth.call(null,vec__7099_7118,(0),null);
var __7120 = cljs.core.nth.call(null,vec__7099_7118,(1),null);
var keys_7121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7106,actual_type_7119,f_7113], null);
var canonical_f_7122 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7105),keys_7121);
dommy.core.update_event_listeners_BANG_.call(null,elem_7105,dommy.utils.dissoc_in,keys_7121);

if(cljs.core.truth_(elem_7105.removeEventListener)){
elem_7105.removeEventListener(cljs.core.name.call(null,actual_type_7119),canonical_f_7122);
} else {
elem_7105.detachEvent(cljs.core.name.call(null,actual_type_7119),canonical_f_7122);
}

var G__7123 = seq__7092_7114;
var G__7124 = chunk__7094_7115;
var G__7125 = count__7095_7116;
var G__7126 = (i__7096_7117 + (1));
seq__7092_7114 = G__7123;
chunk__7094_7115 = G__7124;
count__7095_7116 = G__7125;
i__7096_7117 = G__7126;
continue;
} else {
var temp__4126__auto___7127 = cljs.core.seq.call(null,seq__7092_7114);
if(temp__4126__auto___7127){
var seq__7092_7128__$1 = temp__4126__auto___7127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7092_7128__$1)){
var c__4907__auto___7129 = cljs.core.chunk_first.call(null,seq__7092_7128__$1);
var G__7130 = cljs.core.chunk_rest.call(null,seq__7092_7128__$1);
var G__7131 = c__4907__auto___7129;
var G__7132 = cljs.core.count.call(null,c__4907__auto___7129);
var G__7133 = (0);
seq__7092_7114 = G__7130;
chunk__7094_7115 = G__7131;
count__7095_7116 = G__7132;
i__7096_7117 = G__7133;
continue;
} else {
var vec__7100_7134 = cljs.core.first.call(null,seq__7092_7128__$1);
var actual_type_7135 = cljs.core.nth.call(null,vec__7100_7134,(0),null);
var __7136 = cljs.core.nth.call(null,vec__7100_7134,(1),null);
var keys_7137 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7106,actual_type_7135,f_7113], null);
var canonical_f_7138 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7105),keys_7137);
dommy.core.update_event_listeners_BANG_.call(null,elem_7105,dommy.utils.dissoc_in,keys_7137);

if(cljs.core.truth_(elem_7105.removeEventListener)){
elem_7105.removeEventListener(cljs.core.name.call(null,actual_type_7135),canonical_f_7138);
} else {
elem_7105.detachEvent(cljs.core.name.call(null,actual_type_7135),canonical_f_7138);
}

var G__7139 = cljs.core.next.call(null,seq__7092_7128__$1);
var G__7140 = null;
var G__7141 = (0);
var G__7142 = (0);
seq__7092_7114 = G__7139;
chunk__7094_7115 = G__7140;
count__7095_7116 = G__7141;
i__7096_7117 = G__7142;
continue;
}
} else {
}
}
break;
}

var G__7143 = seq__7082_7107;
var G__7144 = chunk__7089_7108;
var G__7145 = count__7090_7109;
var G__7146 = (i__7091_7110 + (1));
seq__7082_7107 = G__7143;
chunk__7089_7108 = G__7144;
count__7090_7109 = G__7145;
i__7091_7110 = G__7146;
continue;
} else {
var temp__4126__auto___7147 = cljs.core.seq.call(null,seq__7082_7107);
if(temp__4126__auto___7147){
var seq__7082_7148__$1 = temp__4126__auto___7147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7082_7148__$1)){
var c__4907__auto___7149 = cljs.core.chunk_first.call(null,seq__7082_7148__$1);
var G__7150 = cljs.core.chunk_rest.call(null,seq__7082_7148__$1);
var G__7151 = c__4907__auto___7149;
var G__7152 = cljs.core.count.call(null,c__4907__auto___7149);
var G__7153 = (0);
seq__7082_7107 = G__7150;
chunk__7089_7108 = G__7151;
count__7090_7109 = G__7152;
i__7091_7110 = G__7153;
continue;
} else {
var vec__7101_7154 = cljs.core.first.call(null,seq__7082_7148__$1);
var orig_type_7155 = cljs.core.nth.call(null,vec__7101_7154,(0),null);
var f_7156 = cljs.core.nth.call(null,vec__7101_7154,(1),null);
var seq__7083_7157 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7155,new cljs.core.PersistentArrayMap.fromArray([orig_type_7155,cljs.core.identity], true, false)));
var chunk__7085_7158 = null;
var count__7086_7159 = (0);
var i__7087_7160 = (0);
while(true){
if((i__7087_7160 < count__7086_7159)){
var vec__7102_7161 = cljs.core._nth.call(null,chunk__7085_7158,i__7087_7160);
var actual_type_7162 = cljs.core.nth.call(null,vec__7102_7161,(0),null);
var __7163 = cljs.core.nth.call(null,vec__7102_7161,(1),null);
var keys_7164 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7106,actual_type_7162,f_7156], null);
var canonical_f_7165 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7105),keys_7164);
dommy.core.update_event_listeners_BANG_.call(null,elem_7105,dommy.utils.dissoc_in,keys_7164);

if(cljs.core.truth_(elem_7105.removeEventListener)){
elem_7105.removeEventListener(cljs.core.name.call(null,actual_type_7162),canonical_f_7165);
} else {
elem_7105.detachEvent(cljs.core.name.call(null,actual_type_7162),canonical_f_7165);
}

var G__7166 = seq__7083_7157;
var G__7167 = chunk__7085_7158;
var G__7168 = count__7086_7159;
var G__7169 = (i__7087_7160 + (1));
seq__7083_7157 = G__7166;
chunk__7085_7158 = G__7167;
count__7086_7159 = G__7168;
i__7087_7160 = G__7169;
continue;
} else {
var temp__4126__auto___7170__$1 = cljs.core.seq.call(null,seq__7083_7157);
if(temp__4126__auto___7170__$1){
var seq__7083_7171__$1 = temp__4126__auto___7170__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7083_7171__$1)){
var c__4907__auto___7172 = cljs.core.chunk_first.call(null,seq__7083_7171__$1);
var G__7173 = cljs.core.chunk_rest.call(null,seq__7083_7171__$1);
var G__7174 = c__4907__auto___7172;
var G__7175 = cljs.core.count.call(null,c__4907__auto___7172);
var G__7176 = (0);
seq__7083_7157 = G__7173;
chunk__7085_7158 = G__7174;
count__7086_7159 = G__7175;
i__7087_7160 = G__7176;
continue;
} else {
var vec__7103_7177 = cljs.core.first.call(null,seq__7083_7171__$1);
var actual_type_7178 = cljs.core.nth.call(null,vec__7103_7177,(0),null);
var __7179 = cljs.core.nth.call(null,vec__7103_7177,(1),null);
var keys_7180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7106,actual_type_7178,f_7156], null);
var canonical_f_7181 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7105),keys_7180);
dommy.core.update_event_listeners_BANG_.call(null,elem_7105,dommy.utils.dissoc_in,keys_7180);

if(cljs.core.truth_(elem_7105.removeEventListener)){
elem_7105.removeEventListener(cljs.core.name.call(null,actual_type_7178),canonical_f_7181);
} else {
elem_7105.detachEvent(cljs.core.name.call(null,actual_type_7178),canonical_f_7181);
}

var G__7182 = cljs.core.next.call(null,seq__7083_7171__$1);
var G__7183 = null;
var G__7184 = (0);
var G__7185 = (0);
seq__7083_7157 = G__7182;
chunk__7085_7158 = G__7183;
count__7086_7159 = G__7184;
i__7087_7160 = G__7185;
continue;
}
} else {
}
}
break;
}

var G__7186 = cljs.core.next.call(null,seq__7082_7148__$1);
var G__7187 = null;
var G__7188 = (0);
var G__7189 = (0);
seq__7082_7107 = G__7186;
chunk__7089_7108 = G__7187;
count__7090_7109 = G__7188;
i__7091_7110 = G__7189;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__7190__i = 0, G__7190__a = new Array(arguments.length -  1);
while (G__7190__i < G__7190__a.length) {G__7190__a[G__7190__i] = arguments[G__7190__i + 1]; ++G__7190__i;}
  type_fs = new cljs.core.IndexedSeq(G__7190__a,0);
} 
return dommy$core$unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$unlisten_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7191){
var elem_sel = cljs.core.first(arglist__7191);
var type_fs = cljs.core.rest(arglist__7191);
return dommy$core$unlisten_BANG___delegate(elem_sel,type_fs);
});
dommy$core$unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$unlisten_BANG___delegate;
return dommy$core$unlisten_BANG_;
})()
;
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 * @param {...*} var_args
 */
dommy.core.listen_once_BANG_ = (function() { 
var dommy$core$listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7199_7206 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7207 = cljs.core.nth.call(null,vec__7199_7206,(0),null);
var selector_7208 = cljs.core.nth.call(null,vec__7199_7206,(1),null);
var seq__7200_7209 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7201_7210 = null;
var count__7202_7211 = (0);
var i__7203_7212 = (0);
while(true){
if((i__7203_7212 < count__7202_7211)){
var vec__7204_7213 = cljs.core._nth.call(null,chunk__7201_7210,i__7203_7212);
var type_7214 = cljs.core.nth.call(null,vec__7204_7213,(0),null);
var f_7215 = cljs.core.nth.call(null,vec__7204_7213,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7214,((function (seq__7200_7209,chunk__7201_7210,count__7202_7211,i__7203_7212,vec__7204_7213,type_7214,f_7215,vec__7199_7206,elem_7207,selector_7208){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7214,dommy$core$listen_once_BANG__$_this_fn);

return f_7215.call(null,e);
});})(seq__7200_7209,chunk__7201_7210,count__7202_7211,i__7203_7212,vec__7204_7213,type_7214,f_7215,vec__7199_7206,elem_7207,selector_7208))
);

var G__7216 = seq__7200_7209;
var G__7217 = chunk__7201_7210;
var G__7218 = count__7202_7211;
var G__7219 = (i__7203_7212 + (1));
seq__7200_7209 = G__7216;
chunk__7201_7210 = G__7217;
count__7202_7211 = G__7218;
i__7203_7212 = G__7219;
continue;
} else {
var temp__4126__auto___7220 = cljs.core.seq.call(null,seq__7200_7209);
if(temp__4126__auto___7220){
var seq__7200_7221__$1 = temp__4126__auto___7220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7200_7221__$1)){
var c__4907__auto___7222 = cljs.core.chunk_first.call(null,seq__7200_7221__$1);
var G__7223 = cljs.core.chunk_rest.call(null,seq__7200_7221__$1);
var G__7224 = c__4907__auto___7222;
var G__7225 = cljs.core.count.call(null,c__4907__auto___7222);
var G__7226 = (0);
seq__7200_7209 = G__7223;
chunk__7201_7210 = G__7224;
count__7202_7211 = G__7225;
i__7203_7212 = G__7226;
continue;
} else {
var vec__7205_7227 = cljs.core.first.call(null,seq__7200_7221__$1);
var type_7228 = cljs.core.nth.call(null,vec__7205_7227,(0),null);
var f_7229 = cljs.core.nth.call(null,vec__7205_7227,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7228,((function (seq__7200_7209,chunk__7201_7210,count__7202_7211,i__7203_7212,vec__7205_7227,type_7228,f_7229,seq__7200_7221__$1,temp__4126__auto___7220,vec__7199_7206,elem_7207,selector_7208){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7228,dommy$core$listen_once_BANG__$_this_fn);

return f_7229.call(null,e);
});})(seq__7200_7209,chunk__7201_7210,count__7202_7211,i__7203_7212,vec__7205_7227,type_7228,f_7229,seq__7200_7221__$1,temp__4126__auto___7220,vec__7199_7206,elem_7207,selector_7208))
);

var G__7230 = cljs.core.next.call(null,seq__7200_7221__$1);
var G__7231 = null;
var G__7232 = (0);
var G__7233 = (0);
seq__7200_7209 = G__7230;
chunk__7201_7210 = G__7231;
count__7202_7211 = G__7232;
i__7203_7212 = G__7233;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__7234__i = 0, G__7234__a = new Array(arguments.length -  1);
while (G__7234__i < G__7234__a.length) {G__7234__a[G__7234__i] = arguments[G__7234__i + 1]; ++G__7234__i;}
  type_fs = new cljs.core.IndexedSeq(G__7234__a,0);
} 
return dommy$core$listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_once_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7235){
var elem_sel = cljs.core.first(arglist__7235);
var type_fs = cljs.core.rest(arglist__7235);
return dommy$core$listen_once_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_once_BANG___delegate;
return dommy$core$listen_once_BANG_;
})()
;
