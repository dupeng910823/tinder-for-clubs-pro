(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{A6fc:function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),l=n("7/fN"),a=function(){function e(e,t){this._ngZone=e,this.state=t,this.tagOpacity=0,this.like=!1,this.dislike=!1}return e.prototype.ngOnInit=function(){this.state.navigate="Club Tinder",this.doc_width=document.getElementById("swiper").clientWidth,this.state.clubs&&this.state.clubs.length<=0&&(this.state.clubs=[{src:"./assets/images/swiper/12345.png",name:"",style:{},site:{},title:"Dance at Berkeley",categories:["Dance","Music","Art","Social"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/1223.png",name:"",style:{},site:{},title:"Speaker @ Berleley",categories:["Political","Science","Media","Government"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/12345.png",name:"",style:{},site:{},title:"The Berleley News",categories:["Media","Sports","Writing","Photography"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/1223.png",name:"",style:{},site:{},title:"Berkeley Government",categories:["Dance","Music","Art","Social"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/12345.png",name:"",style:{},site:{},title:"Design Club",categories:["Dance","Music","Art","Social"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/1223.png",name:"",style:{},site:{},title:"Nature Society",categories:["Dance","Music","Art","Social"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/12345.png",name:"",style:{},site:{},title:"berkeley Photography",categories:["Dance","Music","Art","Social"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"},{src:"./assets/images/swiper/1223.png",name:"",style:{},site:{},title:"CYY",categories:["Dance","Music","Art","Social"],description:"Do you like to dance? We are the club for you! Dance of Berkeley is the premier dance organizetion on campus featuring all different forms. We have jazz, ballet, hip-hop, swing, and modern groups that work together to develop a performance at the end of each semester. Help develop the choreography in your group to create your own unique dance. Dance of Berkeley travels all over the state to compete in dance competitions and have won many awards. Come join our info sessions in the beginning of the year and get info on auditions by scanning our QR code to be added to our group announcement page!"}])},e.prototype.touchstart=function(e,t){t.site._x_start=e.touches[0].pageX,t.site._y_start=e.touches[0].pageY;var n=document.getElementsByClassName("card-1")[0];t.site.touch_part=e.touches[0].pageY-n.offsetHeight/2>=51?-1:1},e.prototype.touchmove=function(e,t){t.site._x_move=e.touches[0].pageX,t.site._y_move=e.touches[0].pageY,t.site.top_val=parseFloat(t.site._y_move)-parseFloat(t.site._y_start),t.site.left_val=parseFloat(t.site._x_move)-parseFloat(t.site._x_start),t.style={transform:"translate3d("+t.site.left_val+"px,"+t.site.top_val+"px,0px) rotate("+t.site.left_val/this.doc_width*20*t.site.touch_part+"deg)","transition-duration":"0s"},this.tagOpacity=t.site.left_val>=0?t.site.left_val/(this.doc_width/3):-t.site.left_val/(this.doc_width/3),t.site.left_val>0?(this.like=!0,this.dislike=!1):t.site.left_val<0?(this.like=!1,this.dislike=!0):(this.like=!1,this.dislike=!1)},e.prototype.touchend=function(e,t){t.site._x_end=e.changedTouches[0].pageX,t.site._y_end=e.changedTouches[0].pageY,t.site.left_val>0&&t.site.left_val>this.doc_width/2-this.doc_width/3.5?this.animateMove(t,1):t.site.left_val<0&&t.site.left_val<-this.doc_width/2+this.doc_width/3.5?this.animateMove(t,-1):this.animateReset(t)},e.prototype.animateMove=function(e,t){var n=this;e.style={transform:"translate3d("+this.doc_width*t+"px,"+2.2*e.site.top_val+"px,0px)","transition-duration":"0.3s"},this.tagOpacity=1,this.otherCardMove(),setTimeout(function(){n.state.clubs.pop(),n.reset(),1==t&&(n.state.savedClubs.push(e),n.state.updateClubState(e)),n.doRotate()},400)},e.prototype.animateReset=function(e){e.style={transform:"translate3d(0px,0px,0px) rotate(0deg)","transition-duration":"0.3s"},this.setOpacity(300,this.tagOpacity)},e.prototype.setOpacity=function(e,t){var n=this;0!=e&&setTimeout(function(){n.tagOpacity=t*((e-=30)/300),n.setOpacity(e,t)},30)},e.prototype.unLove=function(){var e=this;this.state.clubs[this.state.clubs.length-1].style={transform:"translate3d("+-1.5*this.doc_width+"px,"+45*2.2+"px,0px) rotate(-10deg)","transition-duration":"0.8s"},this.tagOpacity=1,this.dislike=!0,this.otherCardMove(),setTimeout(function(){e.reset(),e.state.clubs.pop(),e.doRotate()},400)},e.prototype.love=function(){var e=this,t=this.state.clubs[this.state.clubs.length-1];t.style={transform:"translate3d("+1.5*this.doc_width+"px,"+45*2.2+"px,0px) rotate(10deg)","transition-duration":"0.8s"},this.tagOpacity=1,this.like=!0,this.otherCardMove(),setTimeout(function(){e.reset(),e.state.clubs.pop(),e.state.savedClubs.push(t),e.state.updateClubState(t),e.doRotate()},400)},e.prototype.doRotate=function(){},e.prototype.viewClub=function(e){this.state.clubToShow=e},e.prototype.otherCardMove=function(){var e=document.getElementsByClassName("card-2")[0];e&&(e.style.transform="translate3d(0px,0px,0px) rotate(0deg)",e.style.transitionDuration="0.3s");var t=document.getElementsByClassName("card-3")[0];t&&(t.style.transform="translate3d(0, 5%, 0) scale(0.95)",t.style.transitionDuration="0.5s");var n=document.getElementsByClassName("card-4")[0];n&&(n.style.transform="translate3d(0, 10%, 0) scale(0.90)",n.style.transitionDuration="0.1s")},e.prototype.reset=function(){this.tagOpacity=0,this.like=!1,this.dislike=!1},e}(),i=function(){},s=n("pMnS"),r=n("Ip0R"),c=o["\u0275crt"]({encapsulation:0,styles:[["@-webkit-keyframes setOpacity{100%{opacity:0}}@keyframes setOpacity{100%{opacity:0}}.swiper[_ngcontent-%COMP%]{position:relative;overflow:hidden}.swiper-container[_ngcontent-%COMP%]{min-height:500px}.card[_ngcontent-%COMP%]{position:absolute;top:20px;left:7%;width:86%;height:calc(100% - 220px);overflow:hidden;border-radius:10px;box-shadow:0 2px 6px 0 rgba(0,0,0,.2);background:#fff;z-index:1}.card-2[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,5%,0) scale(.95);transform:translate3d(0,5%,0) scale(.95)}.card-3[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,10%,0) scale(.9);transform:translate3d(0,10%,0) scale(.9)}.card-4[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,5%,0) scale(.9);transform:translate3d(0,5%,0) scale(.9)}.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:2px;width:calc(100% + 65px);text-shadow:2px 2px 4px rgba(0,0,0,.2)}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{font-size:16px;width:calc(100% + 65px)}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:2px 5px;margin-right:5px;display:inline-block;background:rgba(0,0,0,.34);border-radius:8px;margin-top:4px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){color:#ffd2b8}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){color:#bbffd7}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){color:#bfe6fa}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){color:#fdc3c5}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:22px;font-size:16px;word-break:break-word;color:rgba(255,255,255,1);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-shadow:1px 1px 1px rgba(0,0,0,.3)}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;bottom:0;padding:97px 74px 28px 15px;color:#fff;width:100%;background:linear-gradient(180deg,rgba(4,25,47,0) 0,rgba(4,25,47,.76) 100%)}.swiper-footer[_ngcontent-%COMP%]{height:64px;text-align:center;margin:auto;position:absolute;width:100%;bottom:90px;white-space:nowrap}.swiper-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;background:#fff;box-shadow:3px 6px 9px 0 rgba(22,37,58,.12);border-radius:50%;margin:0 30px;width:64px;height:64px}.showInfo[_ngcontent-%COMP%]{position:absolute;bottom:22px;right:15px;background:#fff;width:32px;height:32px;line-height:32px;border-radius:50%;text-align:center;box-shadow:0 4px 6px 0 rgba(0,0,0,.11)}.dislike[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:225px;height:73px;-webkit-transform:rotate(30deg);transform:rotate(30deg);position:absolute;top:51px;right:2px}.like[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:225px;height:73px;-webkit-transform:rotate(-30deg);transform:rotate(-30deg);position:absolute;top:51px;left:2px}"]],data:{}});function u(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),o["\u0275ted"](1,null,["",""]))],null,function(e,t){e(t,1,0,t.context.$implicit)})}function d(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"div",[["class","dislike"]],[[4,"opacity",null]],null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,0,"img",[["src","./assets/images/club/Leapfrog@3x.png"]],null,null,null,null,null))],null,function(e,t){e(t,0,0,t.component.tagOpacity)})}function p(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"div",[["class","like"]],[[4,"opacity",null]],null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,0,"img",[["src","./assets/images/club/Favorites1@3x.png"]],null,null,null,null,null))],null,function(e,t){e(t,0,0,t.component.tagOpacity)})}function g(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,21,null,null,null,null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,20,"div",[["class","card"]],[[8,"hidden",0]],[[null,"touchstart"],[null,"touchmove"],[null,"touchend"]],function(e,t,n){var o=!0,l=e.component;return"touchstart"===t&&(o=!1!==l.touchstart(n,e.context.$implicit)&&o),"touchmove"===t&&(o=!1!==l.touchmove(n,e.context.$implicit)&&o),"touchend"===t&&(o=!1!==l.touchend(n,e.context.$implicit)&&o),o},null,null)),o["\u0275did"](2,278528,null,0,r.NgClass,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](3,{"card-1":0,"card-2":1,"card-3":2,"card-4":3}),o["\u0275did"](4,278528,null,0,r.NgStyle,[o.KeyValueDiffers,o.ElementRef,o.Renderer2],{ngStyle:[0,"ngStyle"]},null),(e()(),o["\u0275eld"](5,0,null,null,16,"div",[["class","content"],["style","height: 100%"]],[[4,"opacity",null]],null,null,null,null)),(e()(),o["\u0275eld"](6,0,null,null,1,"div",[["class","imageContainer"]],null,null,null,null,null)),(e()(),o["\u0275eld"](7,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(e()(),o["\u0275eld"](8,0,null,null,7,"div",[["class","production"]],null,null,null,null,null)),(e()(),o["\u0275eld"](9,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(e()(),o["\u0275ted"](10,null,["",""])),(e()(),o["\u0275eld"](11,0,null,null,2,"div",[["class","categories"]],null,null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,u)),o["\u0275did"](13,278528,null,0,r.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),o["\u0275eld"](14,0,null,null,1,"p",[["class","description"],["style","-webkit-box-orient: vertical;"]],null,null,null,null,null)),(e()(),o["\u0275ted"](15,null,["",""])),(e()(),o["\u0275eld"](16,0,null,null,1,"span",[["class","showInfo"]],null,[[null,"click"]],function(e,t,n){var o=!0;return"click"===t&&(o=!1!==e.component.viewClub(e.context.$implicit)&&o),o},null,null)),(e()(),o["\u0275eld"](17,0,null,null,0,"img",[["src","./assets/images/club/userInfo@3x.png"],["style","width: 100%"]],null,null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,d)),o["\u0275did"](19,16384,null,0,r.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),o["\u0275and"](16777216,null,null,1,null,p)),o["\u0275did"](21,16384,null,0,r.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,t){var n=t.component;e(t,2,0,"card",e(t,3,0,t.context.index==n.state.clubs.length-1,t.context.index==n.state.clubs.length-2,t.context.index==n.state.clubs.length-3,t.context.index==n.state.clubs.length-4)),e(t,4,0,t.context.$implicit.style),e(t,13,0,t.context.$implicit.categories),e(t,19,0,t.context.index==n.state.clubs.length-1&&n.dislike),e(t,21,0,t.context.index==n.state.clubs.length-1&&n.like)},function(e,t){var n=t.component;e(t,1,0,t.context.index!=n.state.clubs.length-1&&t.context.index!=n.state.clubs.length-2&&t.context.index!=n.state.clubs.length-3&&t.context.index!=n.state.clubs.length-4),e(t,5,0,t.context.index==n.state.clubs.length-1?1:t.context.index==n.state.clubs.length-2?n.tagOpacity:0),e(t,7,0,t.context.$implicit.src),e(t,10,0,t.context.$implicit.title),e(t,15,0,t.context.$implicit.description)})}function h(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,8,"div",[["class","swiper"],["id","swiper"]],null,null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,2,"div",[["class",""],["style","height: 100vh;"]],null,null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,g)),o["\u0275did"](3,278528,null,0,r.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),o["\u0275eld"](4,0,null,null,4,"div",[["class","swiper-footer"]],null,null,null,null,null)),(e()(),o["\u0275eld"](5,0,null,null,1,"span",[],null,[[null,"click"]],function(e,t,n){var o=!0;return"click"===t&&(o=!1!==e.component.unLove()&&o),o},null,null)),(e()(),o["\u0275eld"](6,0,null,null,0,"img",[["src","./assets/images/club/tiaoguo@3x.png"],["style","width: 100%"]],null,null,null,null,null)),(e()(),o["\u0275eld"](7,0,null,null,1,"span",[],null,[[null,"click"]],function(e,t,n){var o=!0;return"click"===t&&(o=!1!==e.component.love()&&o),o},null,null)),(e()(),o["\u0275eld"](8,0,null,null,0,"img",[["src","./assets/images/club/Favorites@3x.png"],["style","width: 100%"]],null,null,null,null,null))],function(e,t){e(t,3,0,t.component.state.clubs)},null)}var f=o["\u0275ccf"]("app-feed",a,function(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"app-feed",[],null,null,null,h,c)),o["\u0275did"](1,114688,null,0,a,[o.NgZone,l.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),m=n("ZYCi");n.d(t,"FeedModuleNgFactory",function(){return y});var y=o["\u0275cmf"](i,[],function(e){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,f]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[o.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),o["\u0275mpd"](1073742336,m.n,m.n,[[2,m.t],[2,m.k]]),o["\u0275mpd"](1073742336,i,i,[]),o["\u0275mpd"](1024,m.i,function(){return[[{path:"",component:a}]]},[])])})}}]);