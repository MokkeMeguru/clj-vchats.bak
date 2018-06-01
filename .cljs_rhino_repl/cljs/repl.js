// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55960){
var map__55961 = p__55960;
var map__55961__$1 = ((((!((map__55961 == null)))?(((((map__55961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55961):map__55961);
var m = map__55961__$1;
var n = cljs.core.get.call(null,map__55961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__55961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55963_55985 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55964_55986 = null;
var count__55965_55987 = (0);
var i__55966_55988 = (0);
while(true){
if((i__55966_55988 < count__55965_55987)){
var f_55989 = cljs.core._nth.call(null,chunk__55964_55986,i__55966_55988);
cljs.core.println.call(null,"  ",f_55989);


var G__55990 = seq__55963_55985;
var G__55991 = chunk__55964_55986;
var G__55992 = count__55965_55987;
var G__55993 = (i__55966_55988 + (1));
seq__55963_55985 = G__55990;
chunk__55964_55986 = G__55991;
count__55965_55987 = G__55992;
i__55966_55988 = G__55993;
continue;
} else {
var temp__5457__auto___55994 = cljs.core.seq.call(null,seq__55963_55985);
if(temp__5457__auto___55994){
var seq__55963_55995__$1 = temp__5457__auto___55994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55963_55995__$1)){
var c__4319__auto___55996 = cljs.core.chunk_first.call(null,seq__55963_55995__$1);
var G__55997 = cljs.core.chunk_rest.call(null,seq__55963_55995__$1);
var G__55998 = c__4319__auto___55996;
var G__55999 = cljs.core.count.call(null,c__4319__auto___55996);
var G__56000 = (0);
seq__55963_55985 = G__55997;
chunk__55964_55986 = G__55998;
count__55965_55987 = G__55999;
i__55966_55988 = G__56000;
continue;
} else {
var f_56001 = cljs.core.first.call(null,seq__55963_55995__$1);
cljs.core.println.call(null,"  ",f_56001);


var G__56002 = cljs.core.next.call(null,seq__55963_55995__$1);
var G__56003 = null;
var G__56004 = (0);
var G__56005 = (0);
seq__55963_55985 = G__56002;
chunk__55964_55986 = G__56003;
count__55965_55987 = G__56004;
i__55966_55988 = G__56005;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56006 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56006);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_56006)))?cljs.core.second.call(null,arglists_56006):arglists_56006));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__55967_56007 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55968_56008 = null;
var count__55969_56009 = (0);
var i__55970_56010 = (0);
while(true){
if((i__55970_56010 < count__55969_56009)){
var vec__55971_56011 = cljs.core._nth.call(null,chunk__55968_56008,i__55970_56010);
var name_56012 = cljs.core.nth.call(null,vec__55971_56011,(0),null);
var map__55974_56013 = cljs.core.nth.call(null,vec__55971_56011,(1),null);
var map__55974_56014__$1 = ((((!((map__55974_56013 == null)))?(((((map__55974_56013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55974_56013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55974_56013):map__55974_56013);
var doc_56015 = cljs.core.get.call(null,map__55974_56014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56016 = cljs.core.get.call(null,map__55974_56014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56012);

cljs.core.println.call(null," ",arglists_56016);

if(cljs.core.truth_(doc_56015)){
cljs.core.println.call(null," ",doc_56015);
} else {
}


var G__56017 = seq__55967_56007;
var G__56018 = chunk__55968_56008;
var G__56019 = count__55969_56009;
var G__56020 = (i__55970_56010 + (1));
seq__55967_56007 = G__56017;
chunk__55968_56008 = G__56018;
count__55969_56009 = G__56019;
i__55970_56010 = G__56020;
continue;
} else {
var temp__5457__auto___56021 = cljs.core.seq.call(null,seq__55967_56007);
if(temp__5457__auto___56021){
var seq__55967_56022__$1 = temp__5457__auto___56021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55967_56022__$1)){
var c__4319__auto___56023 = cljs.core.chunk_first.call(null,seq__55967_56022__$1);
var G__56024 = cljs.core.chunk_rest.call(null,seq__55967_56022__$1);
var G__56025 = c__4319__auto___56023;
var G__56026 = cljs.core.count.call(null,c__4319__auto___56023);
var G__56027 = (0);
seq__55967_56007 = G__56024;
chunk__55968_56008 = G__56025;
count__55969_56009 = G__56026;
i__55970_56010 = G__56027;
continue;
} else {
var vec__55976_56028 = cljs.core.first.call(null,seq__55967_56022__$1);
var name_56029 = cljs.core.nth.call(null,vec__55976_56028,(0),null);
var map__55979_56030 = cljs.core.nth.call(null,vec__55976_56028,(1),null);
var map__55979_56031__$1 = ((((!((map__55979_56030 == null)))?(((((map__55979_56030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55979_56030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55979_56030):map__55979_56030);
var doc_56032 = cljs.core.get.call(null,map__55979_56031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56033 = cljs.core.get.call(null,map__55979_56031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56029);

cljs.core.println.call(null," ",arglists_56033);

if(cljs.core.truth_(doc_56032)){
cljs.core.println.call(null," ",doc_56032);
} else {
}


var G__56034 = cljs.core.next.call(null,seq__55967_56022__$1);
var G__56035 = null;
var G__56036 = (0);
var G__56037 = (0);
seq__55967_56007 = G__56034;
chunk__55968_56008 = G__56035;
count__55969_56009 = G__56036;
i__55970_56010 = G__56037;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__55981 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55982 = null;
var count__55983 = (0);
var i__55984 = (0);
while(true){
if((i__55984 < count__55983)){
var role = cljs.core._nth.call(null,chunk__55982,i__55984);
var temp__5457__auto___56038__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___56038__$1)){
var spec_56039 = temp__5457__auto___56038__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56039));
} else {
}


var G__56040 = seq__55981;
var G__56041 = chunk__55982;
var G__56042 = count__55983;
var G__56043 = (i__55984 + (1));
seq__55981 = G__56040;
chunk__55982 = G__56041;
count__55983 = G__56042;
i__55984 = G__56043;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__55981);
if(temp__5457__auto____$1){
var seq__55981__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55981__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__55981__$1);
var G__56044 = cljs.core.chunk_rest.call(null,seq__55981__$1);
var G__56045 = c__4319__auto__;
var G__56046 = cljs.core.count.call(null,c__4319__auto__);
var G__56047 = (0);
seq__55981 = G__56044;
chunk__55982 = G__56045;
count__55983 = G__56046;
i__55984 = G__56047;
continue;
} else {
var role = cljs.core.first.call(null,seq__55981__$1);
var temp__5457__auto___56048__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___56048__$2)){
var spec_56049 = temp__5457__auto___56048__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56049));
} else {
}


var G__56050 = cljs.core.next.call(null,seq__55981__$1);
var G__56051 = null;
var G__56052 = (0);
var G__56053 = (0);
seq__55981 = G__56050;
chunk__55982 = G__56051;
count__55983 = G__56052;
i__55984 = G__56053;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
