(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Afwt:function(n,a,t){"use strict";t.r(a),t.d(a,"AboutModule",(function(){return u}));var e=t("ofXK"),r=t("FpXt"),i=t("tyNb"),g=t("fXoL"),o=t("lJxs"),c=t("tk/3");let d=(()=>{class n{constructor(n){this.http=n}getSkillsList(){return this.http.get("/assets/skills.json").pipe(Object(o.a)(n=>n))}}return n.\u0275fac=function(a){return new(a||n)(g.Qb(c.a))},n.\u0275prov=g.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=t("Wp6s"),s=t("s6Lo");let b=(()=>{class n{constructor(){this.avatar="https://www.placecage.com/c/400/400"}ngOnInit(){this.getMyCurrentAge()}getMyCurrentAge(){const n=new Date("1997/08/31"),a=new Date;this.age=a.getFullYear()-n.getFullYear()}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=g.Db({type:n,selectors:[["app-self-presentation"]],decls:22,vars:22,consts:[[1,"container"],["alt","avatar",1,"avatar",3,"src"],[1,"me-title"],[1,"description"]],template:function(n,a){1&n&&(g.Mb(0,"div",0),g.Kb(1,"img",1),g.Mb(2,"div",2),g.oc(3),g.Vb(4,"translate"),g.Lb(),g.Mb(5,"div",3),g.Mb(6,"div"),g.oc(7),g.Vb(8,"translate"),g.Lb(),g.Mb(9,"div"),g.oc(10),g.Vb(11,"translate"),g.Lb(),g.Mb(12,"div"),g.oc(13),g.Vb(14,"translate"),g.Lb(),g.Mb(15,"div"),g.oc(16),g.Vb(17,"translate"),g.Lb(),g.Mb(18,"div"),g.oc(19),g.Vb(20,"lowercase"),g.Vb(21,"translate"),g.Lb(),g.Lb(),g.Lb()),2&n&&(g.zb(1),g.Zb("src",a.avatar,g.hc),g.zb(2),g.pc(g.Wb(4,8,"who_am_i")),g.zb(4),g.qc("",g.Wb(8,10,"my_name_is")," Jie"),g.zb(3),g.pc(g.Wb(11,12,"a_tech_enthusiastic")),g.zb(3),g.pc(g.Wb(14,14,"a_developer")),g.zb(3),g.pc(g.Wb(17,16,"a_dreamer")),g.zb(3),g.rc("",a.age," ",g.Wb(20,18,g.Wb(21,20,"years_old")),""))},pipes:[s.a,e.i],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.avatar[_ngcontent-%COMP%]{max-height:200px;width:auto;border-radius:2px;margin-bottom:8px}.me-title[_ngcontent-%COMP%]{font-size:2em;font-weight:500}.description[_ngcontent-%COMP%]{text-align:center;line-height:18px;padding:4px;opacity:.9}"]}),n})();function k(n,a){if(1&n&&(g.Mb(0,"div",2),g.Mb(1,"div",3),g.oc(2),g.Lb(),g.Mb(3,"div",4),g.oc(4),g.Lb(),g.Lb()),2&n){const n=a.$implicit;g.Zb("ngClass","skill-bar-"+a.index),g.zb(2),g.pc(n.name),g.zb(1),g.Zb("ngClass","rating-"+n.rating),g.zb(1),g.qc("",n.rating,"%")}}let m=(()=>{class n{constructor(n){this.skillsService=n,this.skills=[]}ngOnInit(){this.getSkills()}getSkills(){this.skillsService.getSkillsList().subscribe(n=>{this.skills=n})}}return n.\u0275fac=function(a){return new(a||n)(g.Jb(d))},n.\u0275cmp=g.Db({type:n,selectors:[["app-skills"]],decls:2,vars:1,consts:[[1,"container"],["class","skill-bar",3,"ngClass",4,"ngFor","ngForOf"],[1,"skill-bar",3,"ngClass"],[1,"name"],[1,"rating",3,"ngClass"]],template:function(n,a){1&n&&(g.Mb(0,"div",0),g.nc(1,k,5,4,"div",1),g.Lb()),2&n&&(g.zb(1),g.Zb("ngForOf",a.skills))},directives:[e.k,e.j],styles:["@-webkit-keyframes slide-up{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-up{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-down{0%{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-down{0%{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-down-all{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes slide-down-all{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-left{0%{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-left{0%{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-right{0%{opacity:0;transform:translateX(15px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-right{0%{opacity:0;transform:translateX(15px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes form-width{0%{width:100px}to{width:180px}}@keyframes form-width{0%{width:100px}to{width:180px}}@-webkit-keyframes skeleton-animation{0%{background-position:-32px}40%,to{background-position:300px}}@keyframes skeleton-animation{0%{background-position:-32px}40%,to{background-position:300px}}@-webkit-keyframes lazy-loaded-image-animation{0%{opacity:0;transform:scale(0)}25%{opacity:.5;transform:scale(.5)}50%{opacity:.75;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes lazy-loaded-image-animation{0%{opacity:0;transform:scale(0)}25%{opacity:.5;transform:scale(.5)}50%{opacity:.75;transform:scale(.75)}to{opacity:1;transform:scale(1)}}[_nghost-%COMP%]{display:block;height:100%}@-webkit-keyframes skill-bar-animation{0%{opacity:0;transform:translateX(50%)}to{opacity:1;transform:translateX(0)}}@keyframes skill-bar-animation{0%{opacity:0;transform:translateX(50%)}to{opacity:1;transform:translateX(0)}}.self-top-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:100%}.skill-bar[_ngcontent-%COMP%]{display:flex;background-color:#eee;opacity:0;-webkit-animation:skill-bar-animation .75s cubic-bezier(.4,0,.2,1) normal forwards;animation:skill-bar-animation .75s cubic-bezier(.4,0,.2,1) normal forwards;-webkit-user-select:none;-moz-user-select:none;user-select:none}.skill-bar[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.skill-bar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:175px;font-weight:500;background-color:#e91e63}.skill-bar[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{flex:1 1 auto;text-align:right;color:#666}.skill-bar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .skill-bar[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{padding:4px 8px}.rating-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 1%,rgba(25,118,210,0) 99%)}.rating-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 2%,rgba(25,118,210,0) 98%)}.rating-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 3%,rgba(25,118,210,0) 97%)}.rating-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 4%,rgba(25,118,210,0) 96%)}.rating-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 5%,rgba(25,118,210,0) 95%)}.rating-6[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 6%,rgba(25,118,210,0) 94%)}.rating-7[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 7%,rgba(25,118,210,0) 93%)}.rating-8[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 8%,rgba(25,118,210,0) 92%)}.rating-9[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 9%,rgba(25,118,210,0) 91%)}.rating-10[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 10%,rgba(25,118,210,0) 90%)}.rating-11[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 11%,rgba(25,118,210,0) 89%)}.rating-12[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 12%,rgba(25,118,210,0) 88%)}.rating-13[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 13%,rgba(25,118,210,0) 87%)}.rating-14[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 14%,rgba(25,118,210,0) 86%)}.rating-15[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 15%,rgba(25,118,210,0) 85%)}.rating-16[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 16%,rgba(25,118,210,0) 84%)}.rating-17[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 17%,rgba(25,118,210,0) 83%)}.rating-18[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 18%,rgba(25,118,210,0) 82%)}.rating-19[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 19%,rgba(25,118,210,0) 81%)}.rating-20[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 20%,rgba(25,118,210,0) 80%)}.rating-21[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 21%,rgba(25,118,210,0) 79%)}.rating-22[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 22%,rgba(25,118,210,0) 78%)}.rating-23[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 23%,rgba(25,118,210,0) 77%)}.rating-24[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 24%,rgba(25,118,210,0) 76%)}.rating-25[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 25%,rgba(25,118,210,0) 75%)}.rating-26[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 26%,rgba(25,118,210,0) 74%)}.rating-27[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 27%,rgba(25,118,210,0) 73%)}.rating-28[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 28%,rgba(25,118,210,0) 72%)}.rating-29[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 29%,rgba(25,118,210,0) 71%)}.rating-30[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 30%,rgba(25,118,210,0) 70%)}.rating-31[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 31%,rgba(25,118,210,0) 69%)}.rating-32[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 32%,rgba(25,118,210,0) 68%)}.rating-33[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 33%,rgba(25,118,210,0) 67%)}.rating-34[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 34%,rgba(25,118,210,0) 66%)}.rating-35[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 35%,rgba(25,118,210,0) 65%)}.rating-36[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 36%,rgba(25,118,210,0) 64%)}.rating-37[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 37%,rgba(25,118,210,0) 63%)}.rating-38[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 38%,rgba(25,118,210,0) 62%)}.rating-39[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 39%,rgba(25,118,210,0) 61%)}.rating-40[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 40%,rgba(25,118,210,0) 60%)}.rating-41[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 41%,rgba(25,118,210,0) 59%)}.rating-42[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 42%,rgba(25,118,210,0) 58%)}.rating-43[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 43%,rgba(25,118,210,0) 57%)}.rating-44[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 44%,rgba(25,118,210,0) 56%)}.rating-45[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 45%,rgba(25,118,210,0) 55%)}.rating-46[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 46%,rgba(25,118,210,0) 54%)}.rating-47[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 47%,rgba(25,118,210,0) 53%)}.rating-48[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 48%,rgba(25,118,210,0) 52%)}.rating-49[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 49%,rgba(25,118,210,0) 51%)}.rating-50[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 50%,rgba(25,118,210,0) 0)}.rating-51[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 51%,rgba(25,118,210,0) 0)}.rating-52[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 52%,rgba(25,118,210,0) 0)}.rating-53[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 53%,rgba(25,118,210,0) 0)}.rating-54[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 54%,rgba(25,118,210,0) 0)}.rating-55[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 55%,rgba(25,118,210,0) 0)}.rating-56[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 56%,rgba(25,118,210,0) 0)}.rating-57[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 57%,rgba(25,118,210,0) 0)}.rating-58[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 58%,rgba(25,118,210,0) 0)}.rating-59[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 59%,rgba(25,118,210,0) 0)}.rating-60[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 60%,rgba(25,118,210,0) 0)}.rating-61[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 61%,rgba(25,118,210,0) 0)}.rating-62[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 62%,rgba(25,118,210,0) 0)}.rating-63[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 63%,rgba(25,118,210,0) 0)}.rating-64[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 64%,rgba(25,118,210,0) 0)}.rating-65[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 65%,rgba(25,118,210,0) 0)}.rating-66[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 66%,rgba(25,118,210,0) 0)}.rating-67[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 67%,rgba(25,118,210,0) 0)}.rating-68[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 68%,rgba(25,118,210,0) 0)}.rating-69[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 69%,rgba(25,118,210,0) 0)}.rating-70[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 70%,rgba(25,118,210,0) 0)}.rating-71[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 71%,rgba(25,118,210,0) 0)}.rating-72[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 72%,rgba(25,118,210,0) 0)}.rating-73[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 73%,rgba(25,118,210,0) 0)}.rating-74[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 74%,rgba(25,118,210,0) 0)}.rating-75[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 75%,rgba(25,118,210,0) 0)}.rating-76[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 76%,rgba(25,118,210,0) 0)}.rating-77[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 77%,rgba(25,118,210,0) 0)}.rating-78[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 78%,rgba(25,118,210,0) 0)}.rating-79[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 79%,rgba(25,118,210,0) 0)}.rating-80[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 80%,rgba(25,118,210,0) 0)}.rating-81[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 81%,rgba(25,118,210,0) 0)}.rating-82[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 82%,rgba(25,118,210,0) 0)}.rating-83[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 83%,rgba(25,118,210,0) 0)}.rating-84[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 84%,rgba(25,118,210,0) 0)}.rating-85[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 85%,rgba(25,118,210,0) 0)}.rating-86[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 86%,rgba(25,118,210,0) 0)}.rating-87[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 87%,rgba(25,118,210,0) 0)}.rating-88[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 88%,rgba(25,118,210,0) 0)}.rating-89[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 89%,rgba(25,118,210,0) 0)}.rating-90[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 90%,rgba(25,118,210,0) 0)}.rating-91[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 91%,rgba(25,118,210,0) 0)}.rating-92[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 92%,rgba(25,118,210,0) 0)}.rating-93[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 93%,rgba(25,118,210,0) 0)}.rating-94[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 94%,rgba(25,118,210,0) 0)}.rating-95[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 95%,rgba(25,118,210,0) 0)}.rating-96[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 96%,rgba(25,118,210,0) 0)}.rating-97[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 97%,rgba(25,118,210,0) 0)}.rating-98[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 98%,rgba(25,118,210,0) 0)}.rating-99[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 99%,rgba(25,118,210,0) 0)}.rating-100[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c1134e 100%,rgba(25,118,210,0) 0)}.skill-bar-0[_ngcontent-%COMP%]{-webkit-animation-delay:.5s;animation-delay:.5s}.skill-bar-1[_ngcontent-%COMP%]{-webkit-animation-delay:.55s;animation-delay:.55s}.skill-bar-2[_ngcontent-%COMP%]{-webkit-animation-delay:.6s;animation-delay:.6s}.skill-bar-3[_ngcontent-%COMP%]{-webkit-animation-delay:.65s;animation-delay:.65s}.skill-bar-4[_ngcontent-%COMP%]{-webkit-animation-delay:.7s;animation-delay:.7s}.skill-bar-5[_ngcontent-%COMP%]{-webkit-animation-delay:.75s;animation-delay:.75s}.skill-bar-6[_ngcontent-%COMP%]{-webkit-animation-delay:.8s;animation-delay:.8s}.skill-bar-7[_ngcontent-%COMP%]{-webkit-animation-delay:.85s;animation-delay:.85s}.skill-bar-8[_ngcontent-%COMP%]{-webkit-animation-delay:.9s;animation-delay:.9s}.skill-bar-9[_ngcontent-%COMP%]{-webkit-animation-delay:.95s;animation-delay:.95s}.skill-bar-10[_ngcontent-%COMP%]{-webkit-animation-delay:1s;animation-delay:1s}.skill-bar-11[_ngcontent-%COMP%]{-webkit-animation-delay:1.05s;animation-delay:1.05s}.skill-bar-12[_ngcontent-%COMP%]{-webkit-animation-delay:1.1s;animation-delay:1.1s}.skill-bar-13[_ngcontent-%COMP%]{-webkit-animation-delay:1.15s;animation-delay:1.15s}.skill-bar-14[_ngcontent-%COMP%]{-webkit-animation-delay:1.2s;animation-delay:1.2s}.skill-bar-15[_ngcontent-%COMP%]{-webkit-animation-delay:1.25s;animation-delay:1.25s}.skill-bar-16[_ngcontent-%COMP%]{-webkit-animation-delay:1.3s;animation-delay:1.3s}.skill-bar-17[_ngcontent-%COMP%]{-webkit-animation-delay:1.35s;animation-delay:1.35s}.skill-bar-18[_ngcontent-%COMP%]{-webkit-animation-delay:1.4s;animation-delay:1.4s}.skill-bar-19[_ngcontent-%COMP%]{-webkit-animation-delay:1.45s;animation-delay:1.45s}.skill-bar-20[_ngcontent-%COMP%]{-webkit-animation-delay:1.5s;animation-delay:1.5s}.skill-bar-21[_ngcontent-%COMP%]{-webkit-animation-delay:1.55s;animation-delay:1.55s}.skill-bar-22[_ngcontent-%COMP%]{-webkit-animation-delay:1.6s;animation-delay:1.6s}.skill-bar-23[_ngcontent-%COMP%]{-webkit-animation-delay:1.65s;animation-delay:1.65s}.skill-bar-24[_ngcontent-%COMP%]{-webkit-animation-delay:1.7s;animation-delay:1.7s}.skill-bar-25[_ngcontent-%COMP%]{-webkit-animation-delay:1.75s;animation-delay:1.75s}"]}),n})();const p=[{path:"",component:(()=>{class n{constructor(n){this.skillsService=n,this.skills=[]}ngOnInit(){this.getSkills()}getSkills(){this.skillsService.getSkillsList().subscribe(n=>{this.skills=n})}}return n.\u0275fac=function(a){return new(a||n)(g.Jb(d))},n.\u0275cmp=g.Db({type:n,selectors:[["app-about-page"]],decls:7,vars:0,consts:[[1,"page"],[1,"self-top-card"],[1,"self-brief-presentation"],[1,"skills"],[1,"biography"]],template:function(n,a){1&n&&(g.Mb(0,"div",0),g.Mb(1,"mat-card",1),g.Mb(2,"div",2),g.Kb(3,"app-self-presentation"),g.Lb(),g.Mb(4,"div",3),g.Kb(5,"app-skills"),g.Lb(),g.Lb(),g.Kb(6,"div",4),g.Lb())},directives:[l.a,b,m],styles:['@-webkit-keyframes slide-up{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-up{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-down{0%{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-down{0%{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-down-all{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes slide-down-all{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slide-left{0%{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-left{0%{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-right{0%{opacity:0;transform:translateX(15px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-right{0%{opacity:0;transform:translateX(15px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes form-width{0%{width:100px}to{width:180px}}@keyframes form-width{0%{width:100px}to{width:180px}}@-webkit-keyframes skeleton-animation{0%{background-position:-32px}40%,to{background-position:300px}}@keyframes skeleton-animation{0%{background-position:-32px}40%,to{background-position:300px}}@-webkit-keyframes lazy-loaded-image-animation{0%{opacity:0;transform:scale(0)}25%{opacity:.5;transform:scale(.5)}50%{opacity:.75;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes lazy-loaded-image-animation{0%{opacity:0;transform:scale(0)}25%{opacity:.5;transform:scale(.5)}50%{opacity:.75;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.page[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;padding:8px}.self-top-card[_ngcontent-%COMP%]{-webkit-animation:slide-down-all .5s cubic-bezier(.4,0,.2,1);animation:slide-down-all .5s cubic-bezier(.4,0,.2,1);display:grid;grid-template-areas:"presentation skills";grid-template-rows:auto;grid-template-columns:400px auto;grid-gap:16px;max-width:1200px;width:100%;margin:auto;overflow:hidden}.self-brief-presentation[_ngcontent-%COMP%]{grid-area:presentation}.skills[_ngcontent-%COMP%]{grid-area:skills}@media (max-width:960px){.self-top-card[_ngcontent-%COMP%]{grid-template-areas:"presentation presentation" "skills skills";grid-template-rows:auto;grid-template-columns:auto;max-width:768px}}']}),n})()},{path:"**",redirectTo:""}];let y=(()=>{class n{}return n.\u0275mod=g.Hb({type:n}),n.\u0275inj=g.Gb({factory:function(a){return new(a||n)},imports:[[i.c.forChild(p)],i.c]}),n})(),u=(()=>{class n{}return n.\u0275mod=g.Hb({type:n}),n.\u0275inj=g.Gb({factory:function(a){return new(a||n)},imports:[[e.c,y,r.a]]}),n})()}}]);