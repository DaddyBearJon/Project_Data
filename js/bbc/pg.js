if(!bbc){var bbc={}}bbc.guidance={};bbc.helpers=function(){function a(){if(window.ActiveXObject){return(a=function(){return new ActiveXObject("MSXML2.XMLHTTP")})()}else{return(a=function(){return new XMLHttpRequest()})()}}return{isStr:function(b){if(typeof(b)==="string"){return !!((b.length>0)&&!(/^\s*$/).test(b))}return false},validPassword:function(c){if(this.isStr(c)){var b=c.length;return(b>3&&b<13)}return false},isEmail:function(b){return(/^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(b)},hasClass:function(b,d){return b.className.match(new RegExp("(\\s|^)"+d+"(\\s|$)"))},addClass:function(b,d){if(!this.hasClass(b,d)){b.className+=" "+d}},removeClass:function(d,f){var b=new RegExp("(\\s|^)"+f+"(\\s|$)");d.className=d.className.replace(b," ")},node:function(c,g,h){var e=document.createElement(c);if(g){for(var d in g){var b=d;if(b=="class"){b="className"}if(b=="for"){b="htmlFor"}e[b]=g[d]}}if(h){for(var d=0,b=h.length;d<b;d++){var f=h[d];e.appendChild((typeof f=="string")?document.createTextNode(f):f)}}return e},sendRequest:function(e,b,c,d){var f=a();f.open(c,e,true);f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.onreadystatechange=function(g){if(f.readyState!=4){return}if(f.status==200){if(f.responseText==="OK"){d.ok(f)}else{d.fail(f)}}else{d.error(f)}};f.send(b)}}}();bbc.guidanceLocale="en";bbc.guidanceLocalisation={PGLock:"Parental Guidance Lock",enterPass:"Please enter your Parental Guidance Lock password to continue",forgottenPass:"Forgotten your password?",acMessage:"Parental Guidance Lock lets you set a password to control access to guidance-labelled BBC content on your computer.",acOk:"Play content without turning on Parental Guidance Lock",ok:"OK",cancel:"Cancel",moreAboutPG:"More about Parental Guidance Lock",turnOff:"To turn off Parental Guidance Lock please enter your password.",confOver16:"Yes, I am aged 16 or older",plsConfOver16:"Please confirm you are over 16",setupPG:"Turn on Parental Guidance Lock",prefixWarning:"",warning:" may be unsuitable for young audiences.",reEnter:"That password is incorrect. Re-enter password",plsPass:"Please enter your password",error:"Sorry, there has been an error"};bbc.guidance=function(){var p=bbc.guidanceLocalisation,a=bbc.helpers,o,n,h,q,s,d;function e(t){return document.getElementById(t)}function l(t,v,u){if(v){t.innerHTML=v}if(1&u||2&u){t.style.display=(1&u)?"block":"none"}if(4&u){a.addClass(t,"validate")}if(8&u){a.removeClass(t,"validate")}}function c(){var t=document.cookie.match(/(^|;)\s*BBCPGstat=(.)/);return["","unset","off","on"][(t)?1+(1*t[2]):0]||"unknown"}function m(){var u,w;if((/^verify|turnoff$/).test(s)){u=e("password"),passMsgEl=e("password-label")}switch(s){case"verify":if(!a.isStr(u.value)){l(passMsgEl,p.enterPass,4);u.focus();return}break;case"turnoff":if(!a.isStr(u.value)){l(passMsgEl,p.plsPass,4);u.focus();return}break;case"unknown":var v=e("over16"),t=e("over16-label");if(!v.checked){l(t,p.plsConfOver16,4);return}break}r((u)?"password="+escape(u.value):null)}function f(t){return bbc.guidance.forms[t]||""}function k(v,u){var x=a.node;s=u;if(!n||!h){n=e("pg-form");h=e("pg-form-wrapper");if(!n||!h){h=x("div",{id:"pg-form-wrapper","class":"c"});n=x("div",{id:"pg-form"},[x("div",{"class":"tr"}),x("div",{"class":"tl"}),x("div",{"class":"tb"},[x("div")]),x("div",{"class":"tc"},[x("div",{"class":"bars"}),h]),x("div",{"class":"br"}),x("div",{"class":"bl"}),x("div",{"class":"bb"},[x("div")])])}}h.innerHTML=v;n.className=d||"black";document.body.appendChild(n);bbc.guidance.callbacks.showForm();if(bbc.guidance.overlay){bbc.guidance.overlay.show(n)}var w=e((s=="unknown")?"over16":"password");if(w.className.indexOf("hidden")==-1){window.setTimeout(function(){w.focus()},100)}e("pg-form-element").onsubmit=function(){m();return false};e("_guidance_cancel_").onclick=function(){i();return false};var t=(/emp\/pop/).test(location)||(/iplayer\/console/).test(location);if(t){if(e("pgHelpLink")){e("pgHelpLink").onclick=function(){window.open(this.href,"_blank");return false}}if(e("pgSetupLink")){e("pgSetupLink").onclick=function(){window.open(this.href,"_blank");return false}}}}function i(){return(bbc.guidance.overlay&&n)?bbc.guidance.overlay.hide(n):false}function b(){bbc.guidance.overlay.closed=false;g()}function g(){var t=bbc.guidance.callbacks;switch(s){case"unknown":case"verify":t.pass("passed",o);break;case"turnoff":t.toggle("off",o);break;case"turnon":t.toggle("on",o);break}}function j(){switch(s){case"unknown":case"turnon":alert(p.error);break;case"verify":case"turnoff":l(e("password-label"),p.reEnter,4);e("password").focus();break}}function r(v){var u="POST",t={ok:function(){if(i()){bbc.guidance.overlay.closed=b;return}g()},fail:function(){bbc.guidance.callbacks.fail()},error:function(){alert(p.error)}};switch(s){case"verify":q="/mediaselector/4/pg/verify";break;case"turnon":q="/mediaselector/4/pg/on";u="GET";break;case"turnoff":case"unknown":q="/mediaselector/4/pg/off";break}a.sendRequest(q,(u=="POST")?(v||"empty=value"):null,u,t)}return{status:c,verify:function(v,t,w,u){if(w){o=w}d=u;switch(c()){case"off":case"unset":bbc.guidance.callbacks.pass("off",o);break;case"unknown":k(f("over16").replace("{GUIDANCE}",t).replace("{EPISODE_TITLE}",v),"unknown");break;case"on":k(f("password").replace("{GUIDANCE}",t),"verify");break}},toggle:function(u,t){if(u){o=u}d=t;switch(c()){case"on":k(f("turnOff"),"turnoff");break;case"off":s="turnon";r();break}},gotoGuidance:function(){var t=((/bbc.co.uk/).test(location))?"/guidance":"http://www.bbc.co.uk/guidance",u=(/emp\/pop/).test(location)||(/iplayer\/console/).test(location);if(u){window.open(t,"_blank")}else{location.href=t}},callbacks:{pass:function(){},toggle:function(){},showForm:function(){},fail:function(){j()}}}}();var str=bbc.guidanceLocalisation;bbc.guidance.forms={password:"<h1>"+str.PGLock+'</h1><div id="pg-form-content"><p class="info guidance">{GUIDANCE}</p><div id="ss-formWrapper"><form id="pg-form-element" method="post"><fieldset><div class="pass"><label id="password-label" for="password">'+str.enterPass+'</label><input id="password" autocomplete="off" type="password"></div><div class="forgotten"><a id="_guidance_forgot_" href="/guidance/">'+str.forgottenPass+'</a></div><div><input id="_guidance_ok_" class="button positive" value="'+str.ok+'" type="submit"/><input id="_guidance_cancel_" class="button negative" value="'+str.cancel+'" type="button"/></div></fieldset></form></div><div id="pg-more-links"><p id="pg-more" class="more"><a id="pgHelpLink" href="/guidance/help">'+str.moreAboutPG+"</a></p></div></div>",turnOff:"<h1>"+str.PGLock+'</h1><div id="pg-form-content"><p id="off_msg" class="info">'+str.turnOff+'</p><div id="ss-formWrapper"><form id="pg-form-element" method="post"><fieldset><div class="pass"><label id="password-label" for="password">'+str.enterPass+'</label><input id="password" autocomplete="off" type="password"></div><div class="forgotten"><a id="_guidance_forgot_" href="/guidance/">'+str.forgottenPass+'</a></div><div><input id="_guidance_ok_" value="'+str.ok+'" class="button positive" type="submit"/><input id="_guidance_cancel_" class="button negative" value="'+str.cancel+'" type="button"/></div></fieldset></form></div><div id="pg-more-links"><p id="pg-more" class="more"><a id="pgHelpLink" href="/guidance/help">'+str.moreAboutPG+"</a></p></div></div>",over16:"<h1>"+str.PGLock+'</h1><div id="pg-form-content"><p class="info guidance">{GUIDANCE}</p><p class="desc">'+str.prefixWarning+"<em>'{EPISODE_TITLE}'</em>"+str.warning+'</p><div id="ss-formWrapper"><form id="pg-form-element" method="post"><div id="active-choice"><fieldset><div class="check"><input id="over16"  type="checkbox"><label id="over16-label" for="over16">'+str.confOver16+'</label></div><div class="acMessage">'+str.acMessage+'</div><div><span id="_guidance_setup_" class="button"><a href="/guidance/">'+str.setupPG+'</a></span><input id="_guidance_ok_" value="'+str.acOk+'" class="button positive" type="submit"/></div></fieldset><input id="_guidance_cancel_" class="negative" title="'+str.cancel+'" type="image" src="/guidance/img/ac-btn-close.png" /></div></form></div><div id="pg-more-links"><p id="pg-more" class="more"><a id="pgHelpLink" href="/guidance/help">'+str.moreAboutPG+"</a></p></div></div>"};bbc.guidance.overlay=function(){var a=70,s=15,p=30,g=300,u=400,m,w=document,j=-1,b={mask:null,dialog:null,width:0,height:0,interval:-1,intervalScroll:-1,dir:1,level:0,visible:false,selectBoxList:null,swfList:null};function e(){if(j!=-1){return j}j=false;var y=navigator.userAgent.toLowerCase(),x;if((/msie/.test(y))&&(x=y.match(/msie ([\d]+)/))){j=(x[1]<7)}return j}function n(){var y,x,A=w.documentElement||null;if(window.innerWidth){y=A.clientWidth||window.innerWidth;y=window.innerWidth;x=window.innerHeight}else{if(A&&A.clientHeight){y=A.clientWidth;x=A.clientHeight}else{if(w.body){var z=w.body;y=z.clientWidth;x=z.clientHeight}}}return{width:y,height:x}}function o(){var z=0,x=0,y=w.body||null;if(window.innerHeight&&window.scrollMaxY){z=y.scrollWidth;x=window.innerHeight+window.scrollMaxY}else{if(y&&(y.scrollHeight>y.offsetHeight)){z=y.scrollWidth;x=y.scrollHeight}else{if(y){z=y.offsetWidth;x=y.offsetHeight}}}return{width:z,height:x}}function d(){if(window.pageYOffset){return window.pageYOffset}var x=w.documentElement||null;if(x&&x.scrollTop){return x.scrollTop}if(w.body){return w.body.scrollTop}return 0}function r(y,x){y.style.display=(x<=0)?"none":"block";y.style.opacity=Math.round((x/100)*1000)/1000;y.style.filter="alpha(opacity="+x+")"}function i(){if(!b.visible){return}var z=n(),y=o(),x=b.mask;if(e()){x.style.width=Math.max(y.width,z.width)}x.style.height=Math.max(y.height,z.height)+"px";q(z.width,m||z.height)}function c(){if(!b.visible){return}q(-1,n().height)}function q(y,x){var A=b.dialog,z=(e())?d():0;A.style.top=(Math.max(0,Math.floor((x/2)-(b.height/2)))+z)+"px";if(y<0){return}A.style.left=Math.max(0,Math.floor((y/2)-(b.width/2)))+"px"}function f(){if((b.interval!=-1)||(b.visible)){return}var y=b.mask;dialogEl=b.dialog;if(!b.mask){y=w.createElement("div");y.id="pg-mask";w.body.appendChild(y);b.mask=y;var x=window.onresize;if(typeof window.onresize!="function"){window.onresize=i}else{window.onresize=function(){x();i()}}}if(!e()){y.style.width="100%";dialogEl.style.position="fixed"}dialogEl.style.display="block";b.width=dialogEl.offsetWidth;b.height=dialogEl.offsetHeight;dialogEl.style.display="none";r(y,0);r(dialogEl,0);b.visible=true;t(1);if(e()){b.intervalScroll=window.setInterval(c,200);h(true)}v(true);i()}function h(A){var z=(A)?w.getElementsByTagName("select"):b.selectBoxList;for(var y=0,x=z.length;y<x;y++){z[y].style.visibility=(A)?"hidden":"visible"}b.selectBoxList=z}function v(E){if(E){var D,x=[],C=/.swf($|\?)/i;for(var A=0;A<=1;A++){D=w.getElementsByTagName(A?"object":"embed");for(var z=0,y=D.length;z<y;z++){var B=D[z];if((B.getAttribute("type")=="application/x-shockwave-flash")||((B.getAttribute("classid")||"").toLowerCase()=="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000")||(C.test(B.getAttribute("data")||B.getAttribute("src")||""))){x[x.length]=B}}}b.swfList=x}if(!b.swfList.length){return}for(var z=0,y=b.swfList.length;z<y;z++){b.swfList[z].style.visibility=(E)?"hidden":"visible"}}function k(){if((b.interval!=-1)||(!b.visible)){return false}b.visible=false;t(-1);return true}function t(x){if(b.interval!=-1){return}b.dir=x;b.interval=window.setInterval(l,p)}function l(){b.level+=(b.dir*s);if((b.level<=0)||(b.level>=100)){window.clearInterval(b.interval);b.interval=-1;b.level=(b.visible)?100:0;if(!b.visible){if(e()){h()}v();if(b.intervalScroll!=-1){window.clearInterval(b.intervalScroll);b.intervalScroll=-1}if(bbc.guidance.overlay.closed){bbc.guidance.overlay.closed()}}}r(b.mask,(b.level>=a)?a:b.level);r(b.dialog,b.level)}return{show:function(x){b.dialog=x;f()},hide:function(x){b.dialog=x;return k()},setHeight:function(x){m=x},setOpacityMask:function(x){a=x},setOpacityStep:function(x){s=x}}}();