(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2hLr":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get("/api/places?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/places?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/places/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/places/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/places",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/places/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/places/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},"2ibT":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get("/api/area-types?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/area-types?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/area-types/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/area-types/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/area-types",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/area-types/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/area-types/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},"65nX":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/hotels?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/hotels?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/hotels/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/hotels/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/hotels",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/hotels/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/hotels/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},AmXC:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get("/api/experiences?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/experiences?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/experiences/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/experiences/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/experiences",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/experiences/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/experiences/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},FJbh:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get("/api/users-data?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/users-data/${t}`).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/users-data/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/users-data/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},G93X:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/medical-insurance?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/medical-insurance?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/medical-insurance/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/medical-insurance/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/medical-insurance",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/medical-insurance/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/medical-insurance/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},HgUa:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/tour-guides?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/tour-guides?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/tour-guides/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/tour-guides/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/tour-guides",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/tour-guides/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/tour-guides/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},Hye6:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/sim-cards?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/sim-cards?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/sim-cards/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/sim-cards/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/sim-cards",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/sim-cards/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/sim-cards/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},PbwP:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get("/api/tours?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/tours?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/tours/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/tours/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/tours",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/tours/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/tours/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},QPc9:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/bookings?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/bookings?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/bookings/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/bookings/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/bookings",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/bookings/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/bookings/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},"TA/g":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var r=i("un/a"),p=i("8Y7J"),n=i("IheW");let a=(()=>{class t{constructor(t){this.http=t}getAll(t){return this.http.get(`/api/all-images/${t}`).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/all-images/${t}`,{images:e}).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/all-images/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=p.Qb({factory:function(){return new t(p.Rb(n.c))},token:t,providedIn:"root"}),t})()},"ZF+8":function(t,e,i){"use strict";i("IYfF"),i("9nlD"),i("MJbI"),i("94KU"),i("TA/g"),i("Dc4b"),i("P6gP"),i("i84H"),i("puhN"),i("ZRMs"),i("2ibT"),i("som+"),i("65nX"),i("HgUa"),i("QPc9"),i("vG+M"),i("G93X"),i("Hye6"),i("cstN"),i("PbwP"),i("AmXC"),i("2hLr"),i("FJbh")},ZRMs:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/tourist-countries?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/tourist-countries?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/tourist-countries/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/tourist-countries/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/tourist-countries",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/tourist-countries/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/tourist-countries/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},cstN:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/flight-fares?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/flight-fares?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/flight-fares/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/flight-fares/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/flight-fares",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/flight-fares/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/flight-fares/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},puhN:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get(`/api/destination-countries?page=${t}`).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/destination-countries?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/destination-countries/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/destination-countries/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/destination-countries",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/destination-countries/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/destination-countries/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},"som+":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("iFvM"),p=i("un/a"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}findAllCurrencies(t={}){return this.http.get("/api/currencies?"+r.a.encodeParams(t)).pipe(Object(p.a)(0))}addCurrency(t){return this.http.post("/api/currencies",t).pipe(Object(p.a)(0))}deleteCurrency(t){return this.http.delete(`/api/currencies/${t}`).pipe(Object(p.a)(0))}findAllCurrencyRates(t={}){return this.http.get("/api/currency-rates?"+r.a.encodeParams(t)).pipe(Object(p.a)(0))}addCurrencyRate(t){return this.http.post("/api/currency-rates",t).pipe(Object(p.a)(0))}deleteCurrencyRate(t){return this.http.delete(`/api/currency-rates/${t}`).pipe(Object(p.a)(0))}updateCurrencyRate(t,e){return console.log("params ",t,e),this.http.post(`/api/currency-rates/${t}`,{value:e}).pipe(Object(p.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()},"vG+M":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("un/a"),p=i("iFvM"),n=i("8Y7J"),a=i("IheW");let s=(()=>{class t{constructor(t){this.http=t}find(t){return this.http.get("/api/visa-requirements?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}findAll(t){return this.http.get("/api/visa-requirements?"+p.a.encodeParams(t)).pipe(Object(r.a)(0))}getDetail(t){return this.http.get(`/api/visa-requirements/${t}`).pipe(Object(r.a)(0))}getCount(){return this.http.get("/api/visa-requirements/count").pipe(Object(r.a)(0))}add(t){return this.http.post("/api/visa-requirements",t).pipe(Object(r.a)(0))}update(t,e){return this.http.post(`/api/visa-requirements/${t}`,e).pipe(Object(r.a)(0))}delete(t){return this.http.delete(`/api/visa-requirements/${t}`).pipe(Object(r.a)(0))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(a.c))},token:t,providedIn:"root"}),t})()}}]);