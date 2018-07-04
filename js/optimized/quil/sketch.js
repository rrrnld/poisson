// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__5462 = arguments.length;
switch (G__5462) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__5464 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__5465 = null;
var count__5466 = (0);
var i__5467 = (0);
while(true){
if((i__5467 < count__5466)){
var vec__5468 = chunk__5465.cljs$core$IIndexed$_nth$arity$2(null,i__5467);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5468,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5468,(1),null);
var temp__5457__auto___5476 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___5476)){
var handler_5477 = temp__5457__auto___5476;
(prc[cljs.core.name(processing_name)] = ((function (seq__5464,chunk__5465,count__5466,i__5467,handler_5477,temp__5457__auto___5476,vec__5468,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_5471 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_5477.cljs$core$IFn$_invoke$arity$0 ? handler_5477.cljs$core$IFn$_invoke$arity$0() : handler_5477.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_5471;
}});})(seq__5464,chunk__5465,count__5466,i__5467,handler_5477,temp__5457__auto___5476,vec__5468,processing_name,quil_name))
);
} else {
}


var G__5478 = seq__5464;
var G__5479 = chunk__5465;
var G__5480 = count__5466;
var G__5481 = (i__5467 + (1));
seq__5464 = G__5478;
chunk__5465 = G__5479;
count__5466 = G__5480;
i__5467 = G__5481;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5464);
if(temp__5457__auto__){
var seq__5464__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5464__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__5464__$1);
var G__5482 = cljs.core.chunk_rest(seq__5464__$1);
var G__5483 = c__4319__auto__;
var G__5484 = cljs.core.count(c__4319__auto__);
var G__5485 = (0);
seq__5464 = G__5482;
chunk__5465 = G__5483;
count__5466 = G__5484;
i__5467 = G__5485;
continue;
} else {
var vec__5472 = cljs.core.first(seq__5464__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5472,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5472,(1),null);
var temp__5457__auto___5486__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___5486__$1)){
var handler_5487 = temp__5457__auto___5486__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__5464,chunk__5465,count__5466,i__5467,handler_5487,temp__5457__auto___5486__$1,vec__5472,processing_name,quil_name,seq__5464__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_5475 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_5487.cljs$core$IFn$_invoke$arity$0 ? handler_5487.cljs$core$IFn$_invoke$arity$0() : handler_5487.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_5475;
}});})(seq__5464,chunk__5465,count__5466,i__5467,handler_5487,temp__5457__auto___5486__$1,vec__5472,processing_name,quil_name,seq__5464__$1,temp__5457__auto__))
);
} else {
}


var G__5488 = cljs.core.next(seq__5464__$1);
var G__5489 = null;
var G__5490 = (0);
var G__5491 = (0);
seq__5464 = G__5488;
chunk__5465 = G__5489;
count__5466 = G__5490;
i__5467 = G__5491;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__5494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__5493 = ((function (G__5494){
return (function (p1__5492_SHARP_){
return (p1__5492_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5492_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__5492_SHARP_.call(null,options));
});})(G__5494))
;
return fexpr__5493(G__5494);
})()], 0));
var sketch_size = (function (){var or__3922__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__5495_5499 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__5495_5499.cljs$core$IFn$_invoke$arity$0 ? fexpr__5495_5499.cljs$core$IFn$_invoke$arity$0() : fexpr__5495_5499.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__5496 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__5496.cljs$core$IFn$_invoke$arity$0 ? fexpr__5496.cljs$core$IFn$_invoke$arity$0() : fexpr__5496.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__5498 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__5497 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__5497.cljs$core$IFn$_invoke$arity$1 ? fexpr__5497.cljs$core$IFn$_invoke$arity$1(G__5498) : fexpr__5497.call(null,G__5498));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.target_frame_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5502 = arguments.length;
var i__4500__auto___5503 = (0);
while(true){
if((i__4500__auto___5503 < len__4499__auto___5502)){
args__4502__auto__.push((arguments[i__4500__auto___5503]));

var G__5504 = (i__4500__auto___5503 + (1));
i__4500__auto___5503 = G__5504;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__5501 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__5501);
})();
var renderer = (function (){var or__3922__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq5500){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5500));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__5511 = quil.sketch.empty_body_QMARK_();
var seq__5505_5512 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__5506_5513 = null;
var count__5507_5514 = (0);
var i__5508_5515 = (0);
while(true){
if((i__5508_5515 < count__5507_5514)){
var sk_5516 = chunk__5506_5513.cljs$core$IIndexed$_nth$arity$2(null,i__5508_5515);
if(cljs.core.truth_(add_elem_QMARK__5511)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_5516));
} else {
}

var fexpr__5509_5517 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_5516);
(fexpr__5509_5517.cljs$core$IFn$_invoke$arity$0 ? fexpr__5509_5517.cljs$core$IFn$_invoke$arity$0() : fexpr__5509_5517.call(null));


var G__5518 = seq__5505_5512;
var G__5519 = chunk__5506_5513;
var G__5520 = count__5507_5514;
var G__5521 = (i__5508_5515 + (1));
seq__5505_5512 = G__5518;
chunk__5506_5513 = G__5519;
count__5507_5514 = G__5520;
i__5508_5515 = G__5521;
continue;
} else {
var temp__5457__auto___5522 = cljs.core.seq(seq__5505_5512);
if(temp__5457__auto___5522){
var seq__5505_5523__$1 = temp__5457__auto___5522;
if(cljs.core.chunked_seq_QMARK_(seq__5505_5523__$1)){
var c__4319__auto___5524 = cljs.core.chunk_first(seq__5505_5523__$1);
var G__5525 = cljs.core.chunk_rest(seq__5505_5523__$1);
var G__5526 = c__4319__auto___5524;
var G__5527 = cljs.core.count(c__4319__auto___5524);
var G__5528 = (0);
seq__5505_5512 = G__5525;
chunk__5506_5513 = G__5526;
count__5507_5514 = G__5527;
i__5508_5515 = G__5528;
continue;
} else {
var sk_5529 = cljs.core.first(seq__5505_5523__$1);
if(cljs.core.truth_(add_elem_QMARK__5511)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_5529));
} else {
}

var fexpr__5510_5530 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_5529);
(fexpr__5510_5530.cljs$core$IFn$_invoke$arity$0 ? fexpr__5510_5530.cljs$core$IFn$_invoke$arity$0() : fexpr__5510_5530.call(null));


var G__5531 = cljs.core.next(seq__5505_5523__$1);
var G__5532 = null;
var G__5533 = (0);
var G__5534 = (0);
seq__5505_5512 = G__5531;
chunk__5506_5513 = G__5532;
count__5507_5514 = G__5533;
i__5508_5515 = G__5534;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
