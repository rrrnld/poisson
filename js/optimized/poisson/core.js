// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('poisson.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
poisson.core.r = (10);
poisson.core.k = (30);
poisson.core.n = (2);
poisson.core.w = (poisson.core.r / Math.sqrt(poisson.core.n));
/**
 * Returns the column for a given x-coordinate
 */
poisson.core.col = (function poisson$core$col(x){
var G__6465 = (x / poisson.core.w);
return Math.floor(G__6465);
});
/**
 * Returns the row for a given y-coordinate
 */
poisson.core.row = (function poisson$core$row(y){
var G__6466 = (y / poisson.core.w);
return Math.floor(G__6466);
});
/**
 * Initialize our background grid
 */
poisson.core.make_grid = (function poisson$core$make_grid(width,height){
var ncols = (poisson.core.col(width) + (1));
var nrows = (poisson.core.row(height) + (1));
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((ncols * nrows),null));
});
/**
 * Inserts a point at the correct location in the grid
 */
poisson.core.into_grid = (function poisson$core$into_grid(grid,width,pos){
var vec__6467 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6467,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6467,(1),null);
var idx = (poisson.core.col(x) + (poisson.core.row(y) * poisson.core.col(width)));
try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,idx,pos);
}catch (e6470){if((e6470 instanceof Error)){
var e = e6470;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["into-grid failed:","width",width,"pos",pos,"idx",idx,"col",poisson.core.col(x),"row",poisson.core.row(y)], 0));

throw e;
} else {
throw e6470;

}
}});
/**
 * Returns non-empty cells in a 3x3 neighborhood
 */
poisson.core.neighbors = (function poisson$core$neighbors(grid,width,height,p__6471){
var vec__6472 = p__6471;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472,(1),null);
var c = poisson.core.col(x);
var r = poisson.core.row(y);
var cols = poisson.core.col(width);
var rows = poisson.core.row(height);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (c,r,cols,rows,vec__6472,x,y){
return (function (p__6475){
var vec__6476 = p__6475;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6476,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6476,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,(i + (j * cols)));
});})(c,r,cols,rows,vec__6472,x,y))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (c,r,cols,rows,vec__6472,x,y){
return (function (p__6479){
var vec__6480 = p__6479;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(1),null);
return ((((((-1) < i)) && ((i < cols)))) && (((((-1) < j)) && ((j < rows)))));
});})(c,r,cols,rows,vec__6472,x,y))
,(function (){var iter__4292__auto__ = ((function (c,r,cols,rows,vec__6472,x,y){
return (function poisson$core$neighbors_$_iter__6483(s__6484){
return (new cljs.core.LazySeq(null,((function (c,r,cols,rows,vec__6472,x,y){
return (function (){
var s__6484__$1 = s__6484;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__6484__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var j = cljs.core.first(xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__6484__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6472,x,y){
return (function poisson$core$neighbors_$_iter__6483_$_iter__6485(s__6486){
return (new cljs.core.LazySeq(null,((function (s__6484__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6472,x,y){
return (function (){
var s__6486__$1 = s__6486;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__6486__$1);
if(temp__5457__auto____$1){
var s__6486__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6486__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__6486__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__6488 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__6487 = (0);
while(true){
if((i__6487 < size__4291__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__6487);
cljs.core.chunk_append(b__6488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__6489 = (i__6487 + (1));
i__6487 = G__6489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6488),poisson$core$neighbors_$_iter__6483_$_iter__6485(cljs.core.chunk_rest(s__6486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6488),null);
}
} else {
var i = cljs.core.first(s__6486__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),poisson$core$neighbors_$_iter__6483_$_iter__6485(cljs.core.rest(s__6486__$2)));
}
} else {
return null;
}
break;
}
});})(s__6484__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6472,x,y))
,null,null));
});})(s__6484__$1,j,xs__6012__auto__,temp__5457__auto__,c,r,cols,rows,vec__6472,x,y))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((c - (1)),(c + (2)))));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,poisson$core$neighbors_$_iter__6483(cljs.core.rest(s__6484__$1)));
} else {
var G__6490 = cljs.core.rest(s__6484__$1);
s__6484__$1 = G__6490;
continue;
}
} else {
return null;
}
break;
}
});})(c,r,cols,rows,vec__6472,x,y))
,null,null));
});})(c,r,cols,rows,vec__6472,x,y))
;
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((r - (1)),(r + (2))));
})()));
});
/**
 * Generates in a given distance around a point
 */
poisson.core.rand_around = (function poisson$core$rand_around(p__6491,min_dist,max_dist){
var vec__6492 = p__6491;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6492,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6492,(1),null);
var dist = (min_dist + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max_dist - min_dist)));
var a = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((Math.PI * (2)));
var off_x = (dist * Math.cos(a));
var off_y = (dist * Math.sin(a));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + off_x),(y + off_y)], null);
});
/**
 * Calculates the distance between two two-dimensional vectors
 */
poisson.core.distance = (function poisson$core$distance(p__6495,p__6496){
var vec__6497 = p__6495;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(1),null);
var vec__6500 = p__6496;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6500,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6500,(1),null);
var G__6503 = ((a1 - b1) * (a1 - b1));
var G__6504 = ((a2 - b2) * (a2 - b2));
return Math.sqrt(G__6503,G__6504);
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
return (function (p1__6505_SHARP_){
return (poisson.core.distance(sample,p1__6505_SHARP_) >= poisson.core.r);
});})(neighborhood,width,height,chosen))
,neighborhood)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state__$1,cljs.core.cst$kw$grid,poisson.core.into_grid,width,sample),cljs.core.cst$kw$active,cljs.core.conj,sample);
} else {
return state__$1;
}
});})(width,height,chosen))
,state,cljs.core.take.cljs$core$IFn$_invoke$arity$2(poisson.core.k,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (width,height,chosen){
return (function (p__6506){
var vec__6507 = p__6506;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6507,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6507,(1),null);
return ((((((0) <= x)) && ((x <= (width - (1)))))) && (((((0) <= y)) && ((y <= (height - (1)))))));
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
return cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((24),cljs.core.iterate(poisson.core.pick_samples,state)));
});
poisson.core.reset_state = (function poisson$core$reset_state(state,event){
return poisson.core.init_with_point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null),quil.core.width(),quil.core.height());
});
poisson.core.draw_state = (function poisson$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((20));

quil.core.stroke_weight((4));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((255));

var seq__6510_6530 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state)));
var chunk__6511_6531 = null;
var count__6512_6532 = (0);
var i__6513_6533 = (0);
while(true){
if((i__6513_6533 < count__6512_6532)){
var vec__6514_6534 = chunk__6511_6531.cljs$core$IIndexed$_nth$arity$2(null,i__6513_6533);
var x_6535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6514_6534,(0),null);
var y_6536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6514_6534,(1),null);
quil.core.point.cljs$core$IFn$_invoke$arity$2(x_6535,y_6536);


var G__6537 = seq__6510_6530;
var G__6538 = chunk__6511_6531;
var G__6539 = count__6512_6532;
var G__6540 = (i__6513_6533 + (1));
seq__6510_6530 = G__6537;
chunk__6511_6531 = G__6538;
count__6512_6532 = G__6539;
i__6513_6533 = G__6540;
continue;
} else {
var temp__5457__auto___6541 = cljs.core.seq(seq__6510_6530);
if(temp__5457__auto___6541){
var seq__6510_6542__$1 = temp__5457__auto___6541;
if(cljs.core.chunked_seq_QMARK_(seq__6510_6542__$1)){
var c__4319__auto___6543 = cljs.core.chunk_first(seq__6510_6542__$1);
var G__6544 = cljs.core.chunk_rest(seq__6510_6542__$1);
var G__6545 = c__4319__auto___6543;
var G__6546 = cljs.core.count(c__4319__auto___6543);
var G__6547 = (0);
seq__6510_6530 = G__6544;
chunk__6511_6531 = G__6545;
count__6512_6532 = G__6546;
i__6513_6533 = G__6547;
continue;
} else {
var vec__6517_6548 = cljs.core.first(seq__6510_6542__$1);
var x_6549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6517_6548,(0),null);
var y_6550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6517_6548,(1),null);
quil.core.point.cljs$core$IFn$_invoke$arity$2(x_6549,y_6550);


var G__6551 = cljs.core.next(seq__6510_6542__$1);
var G__6552 = null;
var G__6553 = (0);
var G__6554 = (0);
seq__6510_6530 = G__6551;
chunk__6511_6531 = G__6552;
count__6512_6532 = G__6553;
i__6513_6533 = G__6554;
continue;
}
} else {
}
}
break;
}

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((20),(255),(255));

var seq__6520 = cljs.core.seq(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(state));
var chunk__6521 = null;
var count__6522 = (0);
var i__6523 = (0);
while(true){
if((i__6523 < count__6522)){
var vec__6524 = chunk__6521.cljs$core$IIndexed$_nth$arity$2(null,i__6523);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6524,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6524,(1),null);
quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y);


var G__6555 = seq__6520;
var G__6556 = chunk__6521;
var G__6557 = count__6522;
var G__6558 = (i__6523 + (1));
seq__6520 = G__6555;
chunk__6521 = G__6556;
count__6522 = G__6557;
i__6523 = G__6558;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6520);
if(temp__5457__auto__){
var seq__6520__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6520__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__6520__$1);
var G__6559 = cljs.core.chunk_rest(seq__6520__$1);
var G__6560 = c__4319__auto__;
var G__6561 = cljs.core.count(c__4319__auto__);
var G__6562 = (0);
seq__6520 = G__6559;
chunk__6521 = G__6560;
count__6522 = G__6561;
i__6523 = G__6562;
continue;
} else {
var vec__6527 = cljs.core.first(seq__6520__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6527,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6527,(1),null);
quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y);


var G__6563 = cljs.core.next(seq__6520__$1);
var G__6564 = null;
var G__6565 = (0);
var G__6566 = (0);
seq__6520 = G__6563;
chunk__6521 = G__6564;
count__6522 = G__6565;
i__6523 = G__6566;
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
var G__6567__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.update_state,args);
};
var G__6567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6568__i = 0, G__6568__a = new Array(arguments.length -  0);
while (G__6568__i < G__6568__a.length) {G__6568__a[G__6568__i] = arguments[G__6568__i + 0]; ++G__6568__i;}
  args = new cljs.core.IndexedSeq(G__6568__a,0,null);
} 
return G__6567__delegate.call(this,args);};
G__6567.cljs$lang$maxFixedArity = 0;
G__6567.cljs$lang$applyTo = (function (arglist__6569){
var args = cljs.core.seq(arglist__6569);
return G__6567__delegate(args);
});
G__6567.cljs$core$IFn$_invoke$arity$variadic = G__6567__delegate;
return G__6567;
})()
:poisson.core.update_state),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p2d,cljs.core.cst$kw$size,poisson.core.fullscreen(),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(poisson.core.setup))?(function() { 
var G__6570__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.setup,args);
};
var G__6570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6571__i = 0, G__6571__a = new Array(arguments.length -  0);
while (G__6571__i < G__6571__a.length) {G__6571__a[G__6571__i] = arguments[G__6571__i + 0]; ++G__6571__i;}
  args = new cljs.core.IndexedSeq(G__6571__a,0,null);
} 
return G__6570__delegate.call(this,args);};
G__6570.cljs$lang$maxFixedArity = 0;
G__6570.cljs$lang$applyTo = (function (arglist__6572){
var args = cljs.core.seq(arglist__6572);
return G__6570__delegate(args);
});
G__6570.cljs$core$IFn$_invoke$arity$variadic = G__6570__delegate;
return G__6570;
})()
:poisson.core.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(poisson.core.reset_state))?(function() { 
var G__6573__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.reset_state,args);
};
var G__6573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6574__i = 0, G__6574__a = new Array(arguments.length -  0);
while (G__6574__i < G__6574__a.length) {G__6574__a[G__6574__i] = arguments[G__6574__i + 0]; ++G__6574__i;}
  args = new cljs.core.IndexedSeq(G__6574__a,0,null);
} 
return G__6573__delegate.call(this,args);};
G__6573.cljs$lang$maxFixedArity = 0;
G__6573.cljs$lang$applyTo = (function (arglist__6575){
var args = cljs.core.seq(arglist__6575);
return G__6573__delegate(args);
});
G__6573.cljs$core$IFn$_invoke$arity$variadic = G__6573__delegate;
return G__6573;
})()
:poisson.core.reset_state),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(poisson.core.draw_state))?(function() { 
var G__6576__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(poisson.core.draw_state,args);
};
var G__6576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6577__i = 0, G__6577__a = new Array(arguments.length -  0);
while (G__6577__i < G__6577__a.length) {G__6577__a[G__6577__i] = arguments[G__6577__i + 0]; ++G__6577__i;}
  args = new cljs.core.IndexedSeq(G__6577__a,0,null);
} 
return G__6576__delegate.call(this,args);};
G__6576.cljs$lang$maxFixedArity = 0;
G__6576.cljs$lang$applyTo = (function (arglist__6578){
var args = cljs.core.seq(arglist__6578);
return G__6576__delegate(args);
});
G__6576.cljs$core$IFn$_invoke$arity$variadic = G__6576__delegate;
return G__6576;
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
