// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('poisson.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
poisson.core.r = (13);
poisson.core.k = (30);
poisson.core.n = (2);
poisson.core.w = (poisson.core.r / Math.sqrt(poisson.core.n));
/**
 * Returns the horizontal or vertical grid index for a coordinate
 */
poisson.core.grid_idx = (function poisson$core$grid_idx(a){
var G__6465 = (a / poisson.core.w);
return Math.floor(G__6465);
});
/**
 * Initialize our background grid
 */
poisson.core.make_grid = (function poisson$core$make_grid(width,height){
var ncols = (poisson.core.grid_idx(width) + (1));
var nrows = (poisson.core.grid_idx(height) + (1));
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((ncols * nrows),null));
});
/**
 * Inserts a point at the correct location in the grid
 */
poisson.core.into_grid = (function poisson$core$into_grid(grid,width,pos){
var vec__6466 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6466,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6466,(1),null);
var idx = (poisson.core.grid_idx(x) + (poisson.core.grid_idx(y) * poisson.core.grid_idx(width)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,idx,pos);
});
/**
 * Returns non-empty cells in a 3x3 neighborhood
 */
poisson.core.neighbors = (function poisson$core$neighbors(grid,width,height,p__6469){
var vec__6470 = p__6469;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6470,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6470,(1),null);
var c = poisson.core.grid_idx(x);
var r = poisson.core.grid_idx(y);
var cols = (poisson.core.grid_idx(width) + (1));
var rows = (poisson.core.grid_idx(height) + (1));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (c,r,cols,rows,vec__6470,x,y){
return (function (p__6473){
var vec__6474 = p__6473;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6474,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6474,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,(i + (j * (cols - (1)))));
});})(c,r,cols,rows,vec__6470,x,y))
,(function (){var iter__4292__auto__ = ((function (c,r,cols,rows,vec__6470,x,y){
return (function poisson$core$neighbors_$_iter__6477(s__6478){
return (new cljs.core.LazySeq(null,((function (c,r,cols,rows,vec__6470,x,y){
return (function (){
var s__6478__$1 = s__6478;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__6478__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var j = cljs.core.first(xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__6478__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6470,x,y){
return (function poisson$core$neighbors_$_iter__6477_$_iter__6479(s__6480){
return (new cljs.core.LazySeq(null,((function (s__6478__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6470,x,y){
return (function (){
var s__6480__$1 = s__6480;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__6480__$1);
if(temp__5457__auto____$1){
var s__6480__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6480__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__6480__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__6482 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__6481 = (0);
while(true){
if((i__6481 < size__4291__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__6481);
cljs.core.chunk_append(b__6482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__6483 = (i__6481 + (1));
i__6481 = G__6483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6482),poisson$core$neighbors_$_iter__6477_$_iter__6479(cljs.core.chunk_rest(s__6480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6482),null);
}
} else {
var i = cljs.core.first(s__6480__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),poisson$core$neighbors_$_iter__6477_$_iter__6479(cljs.core.rest(s__6480__$2)));
}
} else {
return null;
}
break;
}
});})(s__6478__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6470,x,y))
,null,null));
});})(s__6478__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6470,x,y))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (c - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = cols;
var y__4010__auto__ = (c + (2));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})())));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,poisson$core$neighbors_$_iter__6477(cljs.core.rest(s__6478__$1)));
} else {
var G__6484 = cljs.core.rest(s__6478__$1);
s__6478__$1 = G__6484;
continue;
}
} else {
return null;
}
break;
}
});})(c,r,cols,rows,vec__6470,x,y))
,null,null));
});})(c,r,cols,rows,vec__6470,x,y))
;
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (r - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = rows;
var y__4010__auto__ = (r + (2));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
})());
});
/**
 * Generates in a given distance around a point
 */
poisson.core.rand_around = (function poisson$core$rand_around(p__6485,min_dist,max_dist){
var vec__6486 = p__6485;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6486,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6486,(1),null);
var dist = (min_dist + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max_dist - min_dist)));
var a = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((Math.PI * (2)));
var off_x = (dist * Math.cos(a));
var off_y = (dist * Math.sin(a));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + off_x),(y + off_y)], null);
});
/**
 * Calculates the distance between two two-dimensional vectors
 */
poisson.core.distance = (function poisson$core$distance(p__6489,p__6490){
var vec__6491 = p__6489;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6491,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6491,(1),null);
var vec__6494 = p__6490;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6494,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6494,(1),null);
var G__6497 = ((a1 - b1) * (a1 - b1));
var G__6498 = ((a2 - b2) * (a2 - b2));
return Math.sqrt(G__6497,G__6498);
});
/**
 * Returns the initial state
 */
poisson.core.init_with_point = (function poisson$core$init_with_point(pos,width,height){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid,poisson.core.into_grid(poisson.core.make_grid(width,height),width,pos),cljs.core.cst$kw$active,cljs.core.PersistentHashSet.createAsIfByAssoc([pos])], null);
});
poisson.core.setup = (function poisson$core$setup(){
quil.core.frame_rate((60));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

var width = quil.core.width();
var height = quil.core.height();
var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$1(width),quil.core.random.cljs$core$IFn$_invoke$arity$1(height)], null);
return poisson.core.init_with_point(pos,width,height);
});
poisson.core.pick_samples = (function poisson$core$pick_samples(state){
if(cljs.core.seq(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(state))){
var width = quil.core.width();
var height = quil.core.height();
var chosen = cljs.core.rand_nth(cljs.core.seq(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(state)));
var next = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (width,height,chosen){
return (function (state__$1,sample){
var neighborhood = poisson.core.neighbors(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state__$1),width,height,sample);
if(cljs.core.every_QMARK_(((function (neighborhood,width,height,chosen){
return (function (p1__6499_SHARP_){
return (poisson.core.distance(sample,p1__6499_SHARP_) >= poisson.core.r);
});})(neighborhood,width,height,chosen))
,neighborhood)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state__$1,cljs.core.cst$kw$grid,poisson.core.into_grid,width,sample),cljs.core.cst$kw$active,cljs.core.conj,sample);
} else {
return state__$1;
}
});})(width,height,chosen))
,state,cljs.core.take.cljs$core$IFn$_invoke$arity$2(poisson.core.k,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (width,height,chosen){
return (function (p__6500){
var vec__6501 = p__6500;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6501,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6501,(1),null);
return ((((((0) <= x)) && ((x <= width)))) && (((((0) <= y)) && ((y <= height)))));
});})(width,height,chosen))
,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (width,height,chosen){
return (function (){
return poisson.core.rand_around(chosen,poisson.core.r,((2) * poisson.core.r));
});})(width,height,chosen))
))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,next)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$active,cljs.core.disj,chosen);
} else {
return next;
}
} else {
return state;
}
});
poisson.core.update_state = (function poisson$core$update_state(state){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(poisson.core.pick_samples,state),(25));
});
poisson.core.reset_state = (function poisson$core$reset_state(state,event){
return poisson.core.init_with_point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null),quil.core.width(),quil.core.height());
});
poisson.core.draw_state = (function poisson$core$draw_state(p__6504){
var map__6505 = p__6504;
var map__6505__$1 = ((((!((map__6505 == null)))?(((((map__6505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6505):map__6505);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6505__$1,cljs.core.cst$kw$active);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6505__$1,cljs.core.cst$kw$grid);
quil.core.background.cljs$core$IFn$_invoke$arity$3((20),(180),(200));

quil.core.stroke_weight((4));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((20),(200),(120));

var seq__6507_6515 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,grid));
var chunk__6508_6516 = null;
var count__6509_6517 = (0);
var i__6510_6518 = (0);
while(true){
if((i__6510_6518 < count__6509_6517)){
var pt_6519 = chunk__6508_6516.cljs$core$IIndexed$_nth$arity$2(null,i__6510_6518);
if(cljs.core.truth_((active.cljs$core$IFn$_invoke$arity$1 ? active.cljs$core$IFn$_invoke$arity$1(pt_6519) : active.call(null,pt_6519)))){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.point,pt_6519);
}


var G__6520 = seq__6507_6515;
var G__6521 = chunk__6508_6516;
var G__6522 = count__6509_6517;
var G__6523 = (i__6510_6518 + (1));
seq__6507_6515 = G__6520;
chunk__6508_6516 = G__6521;
count__6509_6517 = G__6522;
i__6510_6518 = G__6523;
continue;
} else {
var temp__5457__auto___6524 = cljs.core.seq(seq__6507_6515);
if(temp__5457__auto___6524){
var seq__6507_6525__$1 = temp__5457__auto___6524;
if(cljs.core.chunked_seq_QMARK_(seq__6507_6525__$1)){
var c__4319__auto___6526 = cljs.core.chunk_first(seq__6507_6525__$1);
var G__6527 = cljs.core.chunk_rest(seq__6507_6525__$1);
var G__6528 = c__4319__auto___6526;
var G__6529 = cljs.core.count(c__4319__auto___6526);
var G__6530 = (0);
seq__6507_6515 = G__6527;
chunk__6508_6516 = G__6528;
count__6509_6517 = G__6529;
i__6510_6518 = G__6530;
continue;
} else {
var pt_6531 = cljs.core.first(seq__6507_6525__$1);
if(cljs.core.truth_((active.cljs$core$IFn$_invoke$arity$1 ? active.cljs$core$IFn$_invoke$arity$1(pt_6531) : active.call(null,pt_6531)))){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.point,pt_6531);
}


var G__6532 = cljs.core.next(seq__6507_6525__$1);
var G__6533 = null;
var G__6534 = (0);
var G__6535 = (0);
seq__6507_6515 = G__6532;
chunk__6508_6516 = G__6533;
count__6509_6517 = G__6534;
i__6510_6518 = G__6535;
continue;
}
} else {
}
}
break;
}

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((255));

var seq__6511 = cljs.core.seq(active);
var chunk__6512 = null;
var count__6513 = (0);
var i__6514 = (0);
while(true){
if((i__6514 < count__6513)){
var pt = chunk__6512.cljs$core$IIndexed$_nth$arity$2(null,i__6514);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.point,pt);


var G__6536 = seq__6511;
var G__6537 = chunk__6512;
var G__6538 = count__6513;
var G__6539 = (i__6514 + (1));
seq__6511 = G__6536;
chunk__6512 = G__6537;
count__6513 = G__6538;
i__6514 = G__6539;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6511);
if(temp__5457__auto__){
var seq__6511__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6511__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__6511__$1);
var G__6540 = cljs.core.chunk_rest(seq__6511__$1);
var G__6541 = c__4319__auto__;
var G__6542 = cljs.core.count(c__4319__auto__);
var G__6543 = (0);
seq__6511 = G__6540;
chunk__6512 = G__6541;
count__6513 = G__6542;
i__6514 = G__6543;
continue;
} else {
var pt = cljs.core.first(seq__6511__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.point,pt);


var G__6544 = cljs.core.next(seq__6511__$1);
var G__6545 = null;
var G__6546 = (0);
var G__6547 = (0);
seq__6511 = G__6544;
chunk__6512 = G__6545;
count__6513 = G__6546;
i__6514 = G__6547;
continue;
}
} else {
return null;
}
}
break;
}
});
poisson.core.fullscreen = (function poisson$core$fullscreen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.body.offsetWidth,document.body.offsetHeight], null);
});
poisson.core.run_sketch = (function poisson$core$run_sketch(){
poisson.core.poisson = (function poisson$core$run_sketch_$_poisson(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"poisson",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(poisson.core.update_state))?(function() { 
var G__6548__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.update_state,args);
};
var G__6548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6549__i = 0, G__6549__a = new Array(arguments.length -  0);
while (G__6549__i < G__6549__a.length) {G__6549__a[G__6549__i] = arguments[G__6549__i + 0]; ++G__6549__i;}
  args = new cljs.core.IndexedSeq(G__6549__a,0,null);
} 
return G__6548__delegate.call(this,args);};
G__6548.cljs$lang$maxFixedArity = 0;
G__6548.cljs$lang$applyTo = (function (arglist__6550){
var args = cljs.core.seq(arglist__6550);
return G__6548__delegate(args);
});
G__6548.cljs$core$IFn$_invoke$arity$variadic = G__6548__delegate;
return G__6548;
})()
:poisson.core.update_state),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p2d,cljs.core.cst$kw$size,poisson.core.fullscreen(),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(poisson.core.setup))?(function() { 
var G__6551__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.setup,args);
};
var G__6551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6552__i = 0, G__6552__a = new Array(arguments.length -  0);
while (G__6552__i < G__6552__a.length) {G__6552__a[G__6552__i] = arguments[G__6552__i + 0]; ++G__6552__i;}
  args = new cljs.core.IndexedSeq(G__6552__a,0,null);
} 
return G__6551__delegate.call(this,args);};
G__6551.cljs$lang$maxFixedArity = 0;
G__6551.cljs$lang$applyTo = (function (arglist__6553){
var args = cljs.core.seq(arglist__6553);
return G__6551__delegate(args);
});
G__6551.cljs$core$IFn$_invoke$arity$variadic = G__6551__delegate;
return G__6551;
})()
:poisson.core.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(poisson.core.reset_state))?(function() { 
var G__6554__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.reset_state,args);
};
var G__6554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6555__i = 0, G__6555__a = new Array(arguments.length -  0);
while (G__6555__i < G__6555__a.length) {G__6555__a[G__6555__i] = arguments[G__6555__i + 0]; ++G__6555__i;}
  args = new cljs.core.IndexedSeq(G__6555__a,0,null);
} 
return G__6554__delegate.call(this,args);};
G__6554.cljs$lang$maxFixedArity = 0;
G__6554.cljs$lang$applyTo = (function (arglist__6556){
var args = cljs.core.seq(arglist__6556);
return G__6554__delegate(args);
});
G__6554.cljs$core$IFn$_invoke$arity$variadic = G__6554__delegate;
return G__6554;
})()
:poisson.core.reset_state),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(poisson.core.draw_state))?(function() { 
var G__6557__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.draw_state,args);
};
var G__6557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6558__i = 0, G__6558__a = new Array(arguments.length -  0);
while (G__6558__i < G__6558__a.length) {G__6558__a[G__6558__i] = arguments[G__6558__i + 0]; ++G__6558__i;}
  args = new cljs.core.IndexedSeq(G__6558__a,0,null);
} 
return G__6557__delegate.call(this,args);};
G__6557.cljs$lang$maxFixedArity = 0;
G__6557.cljs$lang$applyTo = (function (arglist__6559){
var args = cljs.core.seq(arglist__6559);
return G__6557__delegate(args);
});
G__6557.cljs$core$IFn$_invoke$arity$variadic = G__6557__delegate;
return G__6557;
})()
:poisson.core.draw_state)], 0));
});
goog.exportSymbol('poisson.core.poisson', poisson.core.poisson);

if(cljs.core.truth_(cljs.core.some((function (p1__5452__5453__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5452__5453__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,poisson.core.poisson,cljs.core.cst$kw$host_DASH_id,"poisson"], null));
}
});
goog.exportSymbol('poisson.core.run_sketch', poisson.core.run_sketch);
poisson.core.run_sketch();
