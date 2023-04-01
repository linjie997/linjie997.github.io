"use strict";(self.webpackChunklinjie997_github_io=self.webpackChunklinjie997_github_io||[]).push([[0],{4e3:(_,p,i)=>{i.r(p),i.d(p,{ContactsModule:()=>Y});var l=i(9808),t=i(5e3);class h{constructor(s,e){this._document=e;const n=this._textarea=this._document.createElement("textarea"),a=n.style;a.position="fixed",a.top=a.opacity="0",a.left="-999em",n.setAttribute("aria-hidden","true"),n.value=s,this._document.body.appendChild(n)}copy(){const s=this._textarea;let e=!1;try{if(s){const n=this._document.activeElement;s.select(),s.setSelectionRange(0,s.value.length),e=this._document.execCommand("copy"),n&&n.focus()}}catch(n){}return e}destroy(){const s=this._textarea;s&&(s.remove(),this._textarea=void 0)}}let g=(()=>{class o{constructor(e){this._document=e}copy(e){const n=this.beginCopy(e),a=n.copy();return n.destroy(),a}beginCopy(e){return new h(e,this._document)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(l.K0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const f=new t.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let y=(()=>{class o{constructor(e,n,a){this._clipboard=e,this._ngZone=n,this.text="",this.attempts=1,this.copied=new t.vpe,this._pending=new Set,a&&null!=a.attempts&&(this.attempts=a.attempts)}copy(e=this.attempts){if(e>1){let n=e;const a=this._clipboard.beginCopy(this.text);this._pending.add(a);const r=()=>{const m=a.copy();m||!--n||this._destroyed?(this._currentTimeout=null,this._pending.delete(a),a.destroy(),this.copied.emit(m)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(r,1))};r()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(e=>e.destroy()),this._pending.clear(),this._destroyed=!0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(t.R0b),t.Y36(f,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();var b=i(2870),u=i(2268),d=i(1378),v=i(2313),T=i(349),x=i(7261);let k=(()=>{class o{constructor(e){this.snackBar=e,this.processingMessage=!1,this.messageQueue=[]}addToast(e,n="Ok",a=4e3){const r=this.messageQueue.length;if((0===r||e!==this.messageQueue[r-1].message)&&this.messageQueue.push({message:e,action:n,duration:a,verticalPosition:"bottom"}),!this.processingMessage)return this.displayToast()}getNextMessage(){return this.messageQueue.length?this.messageQueue.shift():void 0}displayToast(){const e=this.getNextMessage();e?(this.processingMessage=!0,this.snackBar.open(e.message,e.action,{duration:e.duration,verticalPosition:e.verticalPosition}).afterDismissed().subscribe(()=>{this.displayToast()})):this.processingMessage=!1}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(x.ux))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=i(9224),M=i(7423),P=i(5245),O=i(1949);const Z=[{path:"",component:(()=>{class o{constructor(e,n,a){this.sanitizer=e,this.translator=n,this.toast=a,this.email=d.X.email,this.linkedIn=d.X.linkedIn,this.github=d.X.github,this.emailToAction=this.sanitizer.bypassSecurityTrustResourceUrl(`mailto:${this.email}`)}ngOnInit(){}onEmailCopied(){const e=this.translator.getString("email_copied");this.toast.addToast(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.H7),t.Y36(T.Q),t.Y36(k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contacts-page"]],decls:23,vars:7,consts:[[1,"container"],[1,"card"],[1,"button-container"],["mat-stroked-button","","target","_self",1,"button",3,"href","cdkCopyToClipboard","cdkCopyToClipboardCopied"],["mat-stroked-button","","target","_blank",1,"button",3,"href"],["svgIcon","linkedin"],["svgIcon","github"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"div",2)(8,"a",3),t.NdJ("cdkCopyToClipboardCopied",function(){return n.onEmailCopied()}),t.TgZ(9,"mat-icon"),t._uU(10,"email"),t.qZA(),t.TgZ(11,"span"),t._uU(12,"E-mail"),t.qZA()()(),t.TgZ(13,"div",2)(14,"a",4),t._UZ(15,"mat-icon",5),t.TgZ(16,"span"),t._uU(17,"LinkedIn"),t.qZA()()(),t.TgZ(18,"div",2)(19,"a",4),t._UZ(20,"mat-icon",6),t.TgZ(21,"span"),t._uU(22,"GitHub"),t.qZA()()()()()()),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,5,"my_contacts")),t.xp6(4),t.Q6J("href",n.emailToAction,t.LSH)("cdkCopyToClipboard",n.email),t.xp6(6),t.Q6J("href",n.linkedIn,t.LSH),t.xp6(5),t.Q6J("href",n.github,t.LSH))},directives:[c.a8,c.dk,c.n5,c.dn,M.zs,y,P.Hw],pipes:[O.X],styles:["@keyframes slide-up{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-down{0%{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-down-all{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes slide-left{0%{opacity:0;transform:translate(-15px)}to{opacity:1;transform:translate(0)}}@keyframes slide-right{0%{opacity:0;transform:translate(15px)}to{opacity:1;transform:translate(0)}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes form-width{0%{width:100px}to{width:180px}}@keyframes skeleton-animation{0%{background-position:-32px}40%,to{background-position:300px}}@keyframes lazy-loaded-image-animation{0%{opacity:0;transform:scale(0)}25%{opacity:.5;transform:scale(.5)}50%{opacity:.75;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.container[_ngcontent-%COMP%]{padding:8px}.self-top-card[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]{max-width:768px;width:100%;animation:slide-down-all cubic-bezier(.4,0,.2,1) .5s;margin:auto}.mat-card-title[_ngcontent-%COMP%]{font-size:24px}.button-container[_ngcontent-%COMP%]{padding:8px}.button[_ngcontent-%COMP%]{max-width:150px;width:100%;text-align:left;padding:4px 16px}.button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:8px}"]}),o})()},{path:"**",redirectTo:""}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),o})(),Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,A,b.m,C]]}),o})()}}]);