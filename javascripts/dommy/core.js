goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var or__3943__auto__ = elem__$1.textContent;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__3917 = dommy.template.__GT_node_like.call(null,parent);
G__3917.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__3917;
});
var append_BANG___3 = (function() { 
var G__3919__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var G__3918_3920 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
while(true){
if(G__3918_3920)
{var c_3921 = cljs.core.first.call(null,G__3918_3920);
append_BANG_.call(null,parent__$1,c_3921);
{
var G__3922 = cljs.core.next.call(null,G__3918_3920);
G__3918_3920 = G__3922;
continue;
}
} else
{}
break;
}
return parent__$1;
};
var G__3919 = function (parent,child,var_args){
var more_children = null;
if (goog.isDef(var_args)) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3919__delegate.call(this, parent, child, more_children);
};
G__3919.cljs$lang$maxFixedArity = 2;
G__3919.cljs$lang$applyTo = (function (arglist__3923){
var parent = cljs.core.first(arglist__3923);
var child = cljs.core.first(cljs.core.next(arglist__3923));
var more_children = cljs.core.rest(cljs.core.next(arglist__3923));
return G__3919__delegate(parent, child, more_children);
});
G__3919.cljs$lang$arity$variadic = G__3919__delegate;
return G__3919;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$lang$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$lang$arity$2 = append_BANG___2;
append_BANG_.cljs$lang$arity$variadic = append_BANG___3.cljs$lang$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__3926 = dommy.template.__GT_node_like.call(null,parent);
G__3926.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__3926;
});
var prepend_BANG___3 = (function() { 
var G__3928__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var G__3927_3929 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
while(true){
if(G__3927_3929)
{var c_3930 = cljs.core.first.call(null,G__3927_3929);
prepend_BANG_.call(null,parent__$1,c_3930);
{
var G__3931 = cljs.core.next.call(null,G__3927_3929);
G__3927_3929 = G__3931;
continue;
}
} else
{}
break;
}
return parent__$1;
};
var G__3928 = function (parent,child,var_args){
var more_children = null;
if (goog.isDef(var_args)) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3928__delegate.call(this, parent, child, more_children);
};
G__3928.cljs$lang$maxFixedArity = 2;
G__3928.cljs$lang$applyTo = (function (arglist__3932){
var parent = cljs.core.first(arglist__3932);
var child = cljs.core.first(cljs.core.next(arglist__3932));
var more_children = cljs.core.rest(cljs.core.next(arglist__3932));
return G__3928__delegate(parent, child, more_children);
});
G__3928.cljs$lang$arity$variadic = G__3928__delegate;
return G__3928;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$lang$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$lang$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$lang$arity$variadic = prepend_BANG___3.cljs$lang$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'.-parentNode","\uFDD1'other"),cljs.core.hash_map("\uFDD0'line",102,"\uFDD0'column",13))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4090__auto___3933 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___3933))
{var next_3934 = temp__4090__auto___3933;
parent.insertBefore(actual_node,next_3934);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'.-parentNode","\uFDD1'elem"),cljs.core.hash_map("\uFDD0'line",124,"\uFDD0'column",13))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__3936 = dommy.template.__GT_node_like.call(null,parent);
G__3936.innerHTML = "";
dommy.core.append_BANG_.call(null,G__3936,node_like);
return G__3936;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__3938 = elem__$1.parentNode;
G__3938.removeChild(elem__$1);
return G__3938;
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = cljs.core.string_QMARK_.call(null,data);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,data);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__3939_SHARP_){
return p1__3939_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$lang$arity$1 = matches_pred__1;
matches_pred.cljs$lang$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__3940_SHARP_){
return !((p1__3940_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$lang$arity$2 = closest__2;
closest.cljs$lang$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__3941){
var vec__3942 = p__3941;
var special_mouse_event = cljs.core.nth.call(null,vec__3942,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__3942,1,null);
return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArrays([real_mouse_event],[(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;
if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})])], true);
}),cljs.core.ObjMap.fromObject(["\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'mouseenter":"\uFDD0'mouseover","\uFDD0'mouseleave":"\uFDD0'mouseout"})));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;
event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this, elem, f, args);
};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__3944){
var elem = cljs.core.first(arglist__3944);
var f = cljs.core.first(cljs.core.next(arglist__3944));
var args = cljs.core.rest(cljs.core.next(arglist__3944));
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$lang$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__3943_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__3943_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
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
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'type-fs"),cljs.core.hash_map("\uFDD0'line",256,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",256,"\uFDD0'column",11))))].join('')));
}
var vec__3950_3955 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_3956 = cljs.core.nth.call(null,vec__3950_3955,0,null);
var selector_3957 = cljs.core.nth.call(null,vec__3950_3955,1,null);
var G__3951_3958 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
while(true){
if(G__3951_3958)
{var vec__3953_3959 = cljs.core.first.call(null,G__3951_3958);
var orig_type_3960 = cljs.core.nth.call(null,vec__3953_3959,0,null);
var f_3961 = cljs.core.nth.call(null,vec__3953_3959,1,null);
var G__3952_3962 = cljs.core.seq.call(null,cljs.core._lookup.call(null,dommy.core.special_listener_makers,orig_type_3960,cljs.core.PersistentArrayMap.fromArrays([orig_type_3960],[cljs.core.identity])));
while(true){
if(G__3952_3962)
{var vec__3954_3963 = cljs.core.first.call(null,G__3952_3962);
var actual_type_3964 = cljs.core.nth.call(null,vec__3954_3963,0,null);
var factory_3965 = cljs.core.nth.call(null,vec__3954_3963,1,null);
var canonical_f_3966 = (cljs.core.truth_(selector_3957)?cljs.core.partial.call(null,dommy.core.live_listener,elem_3956,selector_3957):cljs.core.identity).call(null,factory_3965.call(null,f_3961));
dommy.core.update_event_listeners_BANG_.call(null,elem_3956,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_3957,actual_type_3964,f_3961], true),canonical_f_3966);
if(cljs.core.truth_(elem_3956.addEventListener))
{elem_3956.addEventListener(cljs.core.name.call(null,actual_type_3964),canonical_f_3966);
} else
{elem_3956.attachEvent(cljs.core.name.call(null,actual_type_3964),canonical_f_3966);
}
{
var G__3967 = cljs.core.next.call(null,G__3952_3962);
G__3952_3962 = G__3967;
continue;
}
} else
{}
break;
}
{
var G__3968 = cljs.core.next.call(null,G__3951_3958);
G__3951_3958 = G__3968;
continue;
}
} else
{}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (goog.isDef(var_args)) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__3969){
var elem_sel = cljs.core.first(arglist__3969);
var type_fs = cljs.core.rest(arglist__3969);
return listen_BANG___delegate(elem_sel, type_fs);
});
listen_BANG_.cljs$lang$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'type-fs"),cljs.core.hash_map("\uFDD0'line",285,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",285,"\uFDD0'column",11))))].join('')));
}
var vec__3975_3980 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_3981 = cljs.core.nth.call(null,vec__3975_3980,0,null);
var selector_3982 = cljs.core.nth.call(null,vec__3975_3980,1,null);
var G__3976_3983 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
while(true){
if(G__3976_3983)
{var vec__3978_3984 = cljs.core.first.call(null,G__3976_3983);
var orig_type_3985 = cljs.core.nth.call(null,vec__3978_3984,0,null);
var f_3986 = cljs.core.nth.call(null,vec__3978_3984,1,null);
var G__3977_3987 = cljs.core.seq.call(null,cljs.core._lookup.call(null,dommy.core.special_listener_makers,orig_type_3985,cljs.core.PersistentArrayMap.fromArrays([orig_type_3985],[cljs.core.identity])));
while(true){
if(G__3977_3987)
{var vec__3979_3988 = cljs.core.first.call(null,G__3977_3987);
var actual_type_3989 = cljs.core.nth.call(null,vec__3979_3988,0,null);
var __3990 = cljs.core.nth.call(null,vec__3979_3988,1,null);
var keys_3991 = cljs.core.PersistentVector.fromArray([selector_3982,actual_type_3989,f_3986], true);
var canonical_f_3992 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_3981),keys_3991);
dommy.core.update_event_listeners_BANG_.call(null,elem_3981,dommy.utils.dissoc_in,keys_3991);
if(cljs.core.truth_(elem_3981.removeEventListener))
{elem_3981.removeEventListener(cljs.core.name.call(null,actual_type_3989),canonical_f_3992);
} else
{elem_3981.detachEvent(cljs.core.name.call(null,actual_type_3989),canonical_f_3992);
}
{
var G__3993 = cljs.core.next.call(null,G__3977_3987);
G__3977_3987 = G__3993;
continue;
}
} else
{}
break;
}
{
var G__3994 = cljs.core.next.call(null,G__3976_3983);
G__3976_3983 = G__3994;
continue;
}
} else
{}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (goog.isDef(var_args)) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this, elem_sel, type_fs);
};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__3995){
var elem_sel = cljs.core.first(arglist__3995);
var type_fs = cljs.core.rest(arglist__3995);
return unlisten_BANG___delegate(elem_sel, type_fs);
});
unlisten_BANG_.cljs$lang$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'type-fs"),cljs.core.hash_map("\uFDD0'line",300,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",300,"\uFDD0'column",11))))].join('')));
}
var vec__3999_4002 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_4003 = cljs.core.nth.call(null,vec__3999_4002,0,null);
var selector_4004 = cljs.core.nth.call(null,vec__3999_4002,1,null);
var G__4000_4005 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
while(true){
if(G__4000_4005)
{var vec__4001_4006 = cljs.core.first.call(null,G__4000_4005);
var type_4007 = cljs.core.nth.call(null,vec__4001_4006,0,null);
var f_4008 = cljs.core.nth.call(null,vec__4001_4006,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_4007,((function (G__4000_4005,vec__4001_4006,type_4007,f_4008){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_4007,this_fn);
return f_4008.call(null,e);
});})(G__4000_4005,vec__4001_4006,type_4007,f_4008))
);
{
var G__4009 = cljs.core.next.call(null,G__4000_4005);
G__4000_4005 = G__4009;
continue;
}
} else
{}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (goog.isDef(var_args)) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__4010){
var elem_sel = cljs.core.first(arglist__4010);
var type_fs = cljs.core.rest(arglist__4010);
return listen_once_BANG___delegate(elem_sel, type_fs);
});
listen_once_BANG_.cljs$lang$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__4011){
var vec__4013 = p__4011;
var update_event_BANG_ = cljs.core.nth.call(null,vec__4013,0,null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'descendant?","\uFDD1'node","\uFDD1'js/document.documentElement"),cljs.core.hash_map("\uFDD0'line",319,"\uFDD0'column",11))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__4011 = null;
if (goog.isDef(var_args)) {
  p__4011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__4011);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__4014){
var node = cljs.core.first(arglist__4014);
var event_type = cljs.core.first(cljs.core.next(arglist__4014));
var p__4011 = cljs.core.rest(cljs.core.next(arglist__4014));
return fire_BANG___delegate(node, event_type, p__4011);
});
fire_BANG_.cljs$lang$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
