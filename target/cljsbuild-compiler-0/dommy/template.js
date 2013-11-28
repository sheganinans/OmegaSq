goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__2544__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__2544__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,0);
var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":(("\uFDD0'else")?node_str:null)));
var node = document.createElement(tag);
if((base_idx >= 0))
{var str_4027 = node_str.substring(base_idx);
while(true){
var next_idx_4028 = dommy.template.next_css_index.call(null,str_4027,1);
var frag_4029 = (((next_idx_4028 >= 0))?str_4027.substring(0,next_idx_4028):str_4027);
var G__4026_4030 = frag_4029.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__4026_4030))
{node.setAttribute("id",frag_4029.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__4026_4030))
{dommy.attrs.add_class_BANG_.call(null,node,frag_4029.substring(1));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_4029.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_4028 >= 0))
{{
var G__4031 = str_4027.substring(next_idx_4028);
str_4027 = G__4031;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__4034 = data;
if(G__4034)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4034.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__4034.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4034);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4034);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var G__4035_4036 = cljs.core.seq.call(null,data);
while(true){
if(G__4035_4036)
{var child_4037 = cljs.core.first.call(null,G__4035_4036);
__GT_document_fragment.call(null,result_frag,child_4037);
{
var G__4038 = cljs.core.next.call(null,G__4035_4036);
G__4035_4036 = G__4038;
continue;
}
} else
{}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if("\uFDD0'else")
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$lang$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$lang$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__4040 = data;
if(G__4040)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4040.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__4040.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4040);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4040);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__4041){
var vec__4048 = p__4041;
var tag_name = cljs.core.nth.call(null,vec__4048,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__4048,1,null);
var children = cljs.core.nthnext.call(null,vec__4048,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__4049 = maybe_attrs;
if(G__4049)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4049.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__4049.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4049);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4049);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var G__4050_4054 = cljs.core.seq.call(null,attrs);
while(true){
if(G__4050_4054)
{var vec__4051_4055 = cljs.core.first.call(null,G__4050_4054);
var k_4056 = cljs.core.nth.call(null,vec__4051_4055,0,null);
var v_4057 = cljs.core.nth.call(null,vec__4051_4055,1,null);
var G__4052_4058 = k_4056;
if(cljs.core._EQ_.call(null,"\uFDD0'classes",G__4052_4058))
{var G__4053_4059 = cljs.core.seq.call(null,v_4057);
while(true){
if(G__4053_4059)
{var c_4060 = cljs.core.first.call(null,G__4053_4059);
dommy.attrs.add_class_BANG_.call(null,n,c_4060);
{
var G__4061 = cljs.core.next.call(null,G__4053_4059);
G__4053_4059 = G__4061;
continue;
}
} else
{}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'class",G__4052_4058))
{dommy.attrs.add_class_BANG_.call(null,n,v_4057);
} else
{if("\uFDD0'else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_4056,v_4057);
} else
{}
}
}
{
var G__4062 = cljs.core.next.call(null,G__4050_4054);
G__4050_4054 = G__4062;
continue;
}
} else
{}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
}catch (e4063){if(cljs.core.instance_QMARK_.call(null,ReferenceError,e4063))
{var __4064 = e4063;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0'else")
{throw e4063;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__4066 = data;
if(G__4066)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4066.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__4066.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4066);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__4066);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
