(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{B9Lb:function(l,n,e){"use strict";e.d(n,"a",(function(){return u}));class u{}},Fq52:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var i=e("pMnS"),a=e("s7LF"),s=e("aNuR"),o=e("S0PC"),c=e("MJbI"),r=e("SVse"),g=(e("ZF+8"),e("/ykM"));class b{constructor(l,n,e,u){this.formBuilder=l,this.activatedRoute=n,this.allImagesService=e,this.notificationService=u,this.backendUrls=g.b,this.imageTypes=["default"],this.loading=!1}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getAllImages(this.id),this.initForm()}getAllImages(l){this.loading=!0,this.allImagesService.getAll(l).subscribe(l=>{for(let n=0;n<l.data.length;n++)this.addSection(l.data[n]);this.sortSections(),this.loading=!1},l=>{this.notificationService.error(l),this.loading=!1})}initForm(){this.imagesForm=this.formBuilder.group({images:this.formBuilder.array([])})}addSection(l={}){this.imagesForm.get("images").push(this.createSection(l))}createSection(l){let n=this.imagesForm.get("images").value,e=0;n.length>0&&(e=n[n.length-1].sequence+1);let u=this.formBuilder.group({image:"",image_type:this.imageTypes[0],sequence:e,_id:""});return u.patchValue(l),u}submit(){this.loading=!0,this.allImagesService.update(this.id,this.imagesForm.value.images).subscribe(l=>{this.notificationService.success(l.message),this.loading=!1},l=>{this.notificationService.error(l),this.loading=!1})}sortSections(){let l=this.imagesForm.get("images"),n=l.value;0!=n.length&&(n=n.sort((l,n)=>l.sequence<n.sequence?-1:l.sequence>n.sequence?1:0),l.setValue(n))}moveDown(l){let n=this.imagesForm.get("images").value;if(console.log(l,n.length),l<n.length-1){let e=n[l].sequence;n[l].sequence=n[l+1].sequence,n[l+1].sequence=e,this.sortSections()}}moveUp(l){let n=this.imagesForm.get("images").value;if(l>0){let e=n[l].sequence;n[l].sequence=n[l-1].sequence,n[l-1].sequence=e,this.sortSections()}}deleteSection(l,n){confirm("Are you sure ?")&&(this.loading=!0,l._id?this.allImagesService.delete(l._id).subscribe(l=>{this.imagesForm.get("images").removeAt(n),this.notificationService.success(l),this.loading=!1},l=>{this.notificationService.error(l),this.loading=!1}):(this.imagesForm.get("images").removeAt(n),this.loading=!1))}updateImage(l,n){this.imagesForm.get("images").value[n].image=l.filename}}var d=e("iInd"),p=e("TA/g"),m=e("9nlD"),h=u.ob({encapsulation:0,styles:[[".sections[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%]{border:1px solid #ded7d7;border-radius:2px;padding:10px 15px;margin-bottom:25px;background:#fbfbfb}.sections[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{position:absolute;right:10px}.sections[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;margin:5px;cursor:pointer}"]],data:{}});function f(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,0,"div",[["class","loader-full"]],null,null,null,null,null))],null,null)}function v(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,4,"option",[],null,null,null,null,null)),u.pb(1,147456,null,0,a.u,[u.k,u.C,[2,a.x]],{value:[0,"value"]},null),u.pb(2,147456,null,0,a.C,[u.k,u.C,[8,null]],{value:[0,"value"]},null),(l()(),u.Kb(3,null,[" "," "])),u.Gb(4,1)],(function(l,n){l(n,1,0,u.ub(1,"",n.context.$implicit,"")),l(n,2,0,u.ub(1,"",n.context.$implicit,""))}),(function(l,n){var e=u.Lb(n,3,0,l(n,4,0,u.Cb(n.parent.parent.parent,0),n.context.$implicit));l(n,3,0,e)}))}function C(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,3,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Preview"])),(l()(),u.qb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,3,0,u.ub(2,"",e.backendUrls.googleBucketUrl,"",e.imagesForm.get("images").value[n.parent.parent.context.index].image,""))}))}function q(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,5,"div",[["class","col-sm-6 row"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,2,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),u.qb(2,0,null,null,1,"app-imageuploader2",[],null,[[null,"onImageUploaded"]],(function(l,n,e){var u=!0;return"onImageUploaded"===n&&(u=!1!==l.component.updateImage(e,l.parent.context.index)&&u),u}),s.b,s.a)),u.pb(3,114688,null,0,o.a,[c.a],{heading:[0,"heading"],aspectRatio:[1,"aspectRatio"]},{onImageUploaded:"onImageUploaded"}),(l()(),u.fb(16777216,null,null,1,null,C)),u.pb(5,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"Select  Image","4 / 4"),l(n,5,0,""!=e.imagesForm.get("images").value[n.parent.context.index].image)}),null)}function I(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,26,"div",[["class","sections"],["formArrayName","images"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u.pb(1,212992,null,0,a.e,[[3,a.c],[8,null],[8,null]],{name:[0,"name"]},null),u.Hb(2048,null,a.c,null,[a.e]),u.pb(3,16384,null,0,a.r,[[4,a.c]],null,null),(l()(),u.qb(4,0,null,null,22,"div",[["class","row col-sm-12 section-item"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u.pb(5,212992,null,0,a.k,[[3,a.c],[8,null],[8,null]],{name:[0,"name"]},null),u.Hb(2048,null,a.c,null,[a.k]),u.pb(7,16384,null,0,a.r,[[4,a.c]],null,null),(l()(),u.qb(8,0,null,null,5,"div",[["class","actions"]],null,null,null,null,null)),(l()(),u.qb(9,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),u.Kb(10,null,["",""])),(l()(),u.qb(11,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-arrow-down"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.moveDown(l.context.index)&&u),u}),null,null)),(l()(),u.qb(12,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-arrow-up"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.moveUp(l.context.index)&&u),u}),null,null)),(l()(),u.qb(13,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-trash"]],null,[[null,"click"]],(function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.deleteSection(t.imagesForm.get("images").value[l.context.index],l.context.index)&&u),u}),null,null)),(l()(),u.qb(14,0,null,null,10,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),u.qb(15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Image Type"])),(l()(),u.qb(17,0,null,null,7,"select",[["class","form-control"],["formControlName","image_type"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],(function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u.Cb(l,18).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u.Cb(l,18).onTouched()&&t),t}),null,null)),u.pb(18,16384,null,0,a.x,[u.C,u.k],null,null),u.Hb(1024,null,a.o,(function(l){return[l]}),[a.x]),u.pb(20,671744,null,0,a.h,[[3,a.c],[8,null],[8,null],[6,a.o],[2,a.B]],{name:[0,"name"]},null),u.Hb(2048,null,a.p,null,[a.h]),u.pb(22,16384,null,0,a.q,[[4,a.p]],null,null),(l()(),u.fb(16777216,null,null,1,null,v)),u.pb(24,278528,null,0,r.k,[u.N,u.K,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,null,1,null,q)),u.pb(26,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,"images"),l(n,5,0,n.context.index),l(n,20,0,"image_type"),l(n,24,0,e.imageTypes),l(n,26,0,"default"==e.imagesForm.get("images").value[n.context.index].image_type)}),(function(l,n){var e=n.component;l(n,0,0,u.Cb(n,3).ngClassUntouched,u.Cb(n,3).ngClassTouched,u.Cb(n,3).ngClassPristine,u.Cb(n,3).ngClassDirty,u.Cb(n,3).ngClassValid,u.Cb(n,3).ngClassInvalid,u.Cb(n,3).ngClassPending),l(n,4,0,u.Cb(n,7).ngClassUntouched,u.Cb(n,7).ngClassTouched,u.Cb(n,7).ngClassPristine,u.Cb(n,7).ngClassDirty,u.Cb(n,7).ngClassValid,u.Cb(n,7).ngClassInvalid,u.Cb(n,7).ngClassPending),l(n,10,0,e.imagesForm.get("images").value[n.context.index].sequence+1),l(n,17,0,u.Cb(n,22).ngClassUntouched,u.Cb(n,22).ngClassTouched,u.Cb(n,22).ngClassPristine,u.Cb(n,22).ngClassDirty,u.Cb(n,22).ngClassValid,u.Cb(n,22).ngClassInvalid,u.Cb(n,22).ngClassPending)}))}function x(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,23,"div",[["class","col-xl-12"]],null,null,null,null,null)),(l()(),u.fb(16777216,null,null,1,null,f)),u.pb(2,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(3,0,null,null,20,"div",[["class","card  mb-4"]],null,null,null,null,null)),(l()(),u.qb(4,0,null,null,5,"div",[["class","card-header py-3 d-flex flex-row align-items-center justify-content-between"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,1,"h6",[["class","m-0 font-weight-bold text-primary"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" All Images "])),(l()(),u.qb(7,0,null,null,2,"button",[["class","d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.addSection()&&u),u}),null,null)),(l()(),u.qb(8,0,null,null,0,"i",[["class","fas fa-download fa-sm text-white-50"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Add Image "])),(l()(),u.qb(10,0,null,null,11,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.qb(11,0,null,null,0,"div",[["class"," py-3 d-flex flex-row align-items-center justify-content-between"]],null,null,null,null,null)),(l()(),u.qb(12,0,null,null,9,"form",[["class","admin"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,i=l.component;return"submit"===n&&(t=!1!==u.Cb(l,14).onSubmit(e)&&t),"reset"===n&&(t=!1!==u.Cb(l,14).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.submit()&&t),t}),null,null)),u.pb(13,16384,null,0,a.D,[],null,null),u.pb(14,540672,null,0,a.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Hb(2048,null,a.c,null,[a.j]),u.pb(16,16384,null,0,a.r,[[4,a.c]],null,null),(l()(),u.fb(16777216,null,null,1,null,I)),u.pb(18,278528,null,0,r.k,[u.N,u.K,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.qb(19,0,null,null,2,"div",[["class","submit-block"]],null,null,null,null,null)),(l()(),u.qb(20,0,null,null,1,"button",[["class","btn btn-primary submit"],["type","submit"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Save"])),(l()(),u.qb(22,0,null,null,1,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Footer "]))],(function(l,n){var e=n.component;l(n,2,0,e.loading),l(n,14,0,e.imagesForm),l(n,18,0,e.imagesForm.get("images").controls)}),(function(l,n){l(n,12,0,u.Cb(n,16).ngClassUntouched,u.Cb(n,16).ngClassTouched,u.Cb(n,16).ngClassPristine,u.Cb(n,16).ngClassDirty,u.Cb(n,16).ngClassValid,u.Cb(n,16).ngClassInvalid,u.Cb(n,16).ngClassPending)}))}function y(l){return u.Mb(0,[u.Eb(0,r.u,[]),(l()(),u.qb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.fb(16777216,null,null,1,null,x)),u.pb(3,16384,null,0,r.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.imagesForm)}),null)}function S(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,1,"app-allimages",[],null,null,null,y,h)),u.pb(1,114688,null,0,b,[a.f,d.a,p.a,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var A=u.mb("app-allimages",b,S,{},{},[]);class F{}var O=e("YD+O"),w=e("dd3G"),k=e("RTpO"),P=e("pYyI"),M=e("B9Lb");e.d(n,"AllimagesModuleNgFactory",(function(){return j}));var j=u.nb(t,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[i.a,A]],[3,u.j],u.w]),u.Ab(4608,r.n,r.m,[u.t,[2,r.G]]),u.Ab(4608,a.A,a.A,[]),u.Ab(4608,a.f,a.f,[]),u.Ab(1073742336,r.c,r.c,[]),u.Ab(1073742336,d.n,d.n,[[2,d.s],[2,d.l]]),u.Ab(1073742336,F,F,[]),u.Ab(1073742336,a.z,a.z,[]),u.Ab(1073742336,a.l,a.l,[]),u.Ab(1073742336,a.w,a.w,[]),u.Ab(1073742336,O.a,O.a,[]),u.Ab(1073742336,w.a,w.a,[]),u.Ab(1073742336,k.a,k.a,[]),u.Ab(1073742336,P.b,P.b,[]),u.Ab(1073742336,M.a,M.a,[]),u.Ab(1073742336,t,t,[]),u.Ab(1024,d.j,(function(){return[[{path:"",component:b}],[]]}),[])])}))},P6gP:function(l,n,e){"use strict";e.d(n,"a",(function(){return s}));var u=e("un/a"),t=e("iFvM"),i=e("8Y7J"),a=e("IheW");let s=(()=>{class l{constructor(l){this.http=l}find(l){return this.http.get("/api/provinces?"+t.a.encodeParams(l)).pipe(Object(u.a)(0))}findAll(l){return this.http.get("/api/provinces/all?"+t.a.encodeParams(l)).pipe(Object(u.a)(0))}getDetail(l){return this.http.get(`/api/provinces/${l}`).pipe(Object(u.a)(0))}getCount(){return this.http.get("/api/provinces/count").pipe(Object(u.a)(0))}add(l){return this.http.post("/api/provinces",l).pipe(Object(u.a)(0))}update(l,n){return this.http.post(`/api/provinces/${l}`,n).pipe(Object(u.a)(0))}delete(l){return this.http.delete(`/api/provinces/${l}`).pipe(Object(u.a)(0))}}return l.ngInjectableDef=i.Qb({factory:function(){return new l(i.Rb(a.c))},token:l,providedIn:"root"}),l})()},RTpO:function(l,n,e){"use strict";e.d(n,"a",(function(){return u}));class u{}},S0PC:function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));var u=e("8Y7J");class t{constructor(l){this.fileService=l,this.uploader=this.fileService.getFilerUploader(),this.loading=!1,this.onImageUploaded=new u.m}ngOnInit(){this.uploader.onAfterAddingFile=l=>{l.withCredentials=!1,this.loading=!0},this.uploader.onCompleteItem=(l,n)=>{let e=JSON.parse(n);this.onImageUploaded.emit(e.data),this.loading=!1}}}},aNuR:function(l,n,e){"use strict";var u=e("8Y7J"),t=e("pYyI"),i=e("SVse");e("S0PC"),e("MJbI"),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var a=u.ob({encapsulation:0,styles:[[""]],data:{}});function s(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,4,"section",[["class","spinner-div"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,3,"div",[["class"," justify-content-center m-10"]],null,null,null,null,null)),(l()(),u.qb(2,0,null,null,2,"div",[["class","spinner-border"],["role","status"]],null,null,null,null,null)),(l()(),u.qb(3,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Loading..."]))],null,null)}function o(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,8,"div",[["class","row admin"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,4,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),u.qb(2,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Kb(3,null,["",""])),(l()(),u.qb(4,0,null,null,1,"input",[["accept","image/x-png,image/gif,image/jpeg"],["class","form-control  form-control-lg"],["name","image"],["ng2FileSelect",""],["type","file"]],null,[[null,"change"]],(function(l,n,e){var t=!0,i=l.component;return"change"===n&&(t=!1!==u.Cb(l,5).onChange()&&t),"change"===n&&(t=!1!==i.uploader.uploadAll()&&t),t}),null,null)),u.pb(5,16384,null,0,t.a,[u.k],{uploader:[0,"uploader"]},null),(l()(),u.qb(6,0,null,null,2,"div",[["class","col-sm-12 no-padding imagePicker"]],null,null,null,null,null)),(l()(),u.fb(16777216,null,null,1,null,s)),u.pb(8,16384,null,0,i.l,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,5,0,e.uploader),l(n,8,0,e.loading)}),(function(l,n){l(n,3,0,n.component.heading)}))}},i84H:function(l,n,e){"use strict";e.d(n,"a",(function(){return s}));var u=e("un/a"),t=e("iFvM"),i=e("8Y7J"),a=e("IheW");let s=(()=>{class l{constructor(l){this.http=l}find(l){return this.http.get("/api/cities?"+t.a.encodeParams(l)).pipe(Object(u.a)(0))}findAll(l){return this.http.get("/api/cities/all?"+t.a.encodeParams(l)).pipe(Object(u.a)(0))}getDetail(l){return this.http.get(`/api/cities/${l}`).pipe(Object(u.a)(0))}getCount(){return this.http.get("/api/cities/count").pipe(Object(u.a)(0))}add(l){return this.http.post("/api/cities",l).pipe(Object(u.a)(0))}update(l,n){return this.http.post(`/api/cities/${l}`,n).pipe(Object(u.a)(0))}delete(l){return this.http.delete(`/api/cities/${l}`).pipe(Object(u.a)(0))}}return l.ngInjectableDef=i.Qb({factory:function(){return new l(i.Rb(a.c))},token:l,providedIn:"root"}),l})()}}]);