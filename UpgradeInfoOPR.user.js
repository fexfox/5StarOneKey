// ==UserScript==
// @name         OPR-UpgradeInfo
// @version      1.0
// @description  Show OPR Upgrade Info Obviously
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @updateURL    https://github.com/fexfox/5StarOneKey/raw/master/UpgradeInfoOPR.user.js
// @downloadURL  https://github.com/fexfox/5StarOneKey/raw/master/UpgradeInfoOPR.user.js
// @author       SemiBan
// @match        https://opr.ingress.com/*
// @grant        none
// ==/UserScript==

function calc_data(){

$.get('https://opr.ingress.com/api/v1/vault/reward',{},function(obj){
    var li=document.createElement("li");
    var strhtml='<a href="/upgrades/">进度:'+(100*obj.progress/obj.interval)+'% &nbsp;可用:'+obj.available+'/'+obj.maximum+'&nbsp;已兑换:'+obj.total+'</a><ul style="display:none;">';
    strhtml+='<li>最近3个被提升优先级的po：</li>';
    for (var i=0; i < obj.history.length; i++) {
    if (3==i) {
        break;
    }
        var v=obj.history[i];
         strhtml+='<li>';
        strhtml+='<img style="height:60px;margin:3px" src='+v.imageUrl+' alt="">';
        strhtml+='<span>&nbsp;&nbsp;【'+v.title+'】&nbsp;&nbsp;</span>';
        strhtml+='<span>'+v.location+'</span>';
        strhtml+='</li>';
}
     strhtml+='</ul>';
    li.innerHTML=strhtml;
    li.addEventListener("mouseover",function(){
       var tar = this.getElementsByTagName("ul")[0]
        console.log(tar);
       console.log(event.target);
        tar.style.display = "block";
    },false);
      li.addEventListener("mouseout",function(){
        var tar = this.getElementsByTagName("ul")[0]
        tar.style.display = "none";
    },false)
$(".navbar-nav:nth-child(1)").append(li);
});
      }

(function() {
    calc_data();
})();
