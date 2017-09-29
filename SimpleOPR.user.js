// ==UserScript==
// @name         SimpleOPR
// @version      3.0
// @description  Simple your OPR
// @updateURL    https://github.com/fexfox/5StarOneKey/raw/master/SimpleOPR.user.js
// @downloadURL  https://github.com/fexfox/5StarOneKey/raw/master/SimpleOPR.user.js
// @author       jqqqqqqqqqq&SemiBan
// @match        https://opr.ingress.com/recon
// @grant        none
// ==/UserScript==

var buttons = [
	{button:"5★", total:5},
    {button:"4★", total:4},
    {button:"3★", total:3},
    {button:"2★", total:2},
    {button:"1★", total:1}
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////DO NOT EDIT THIS LINE BELOW!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function rate_portal(total, name, history, unique, location, safety) {
    if(total>1){
		document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(" + total + ")").click();
		document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > div > div:nth-child(5) > button:nth-child(" + name + ")").click();
		document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > div > div:nth-child(10) > button:nth-child(" + history + ")").click();
		document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > div > div:nth-child(15) > button:nth-child(" + unique + ")").click();
		document.querySelector("#AnswersController > form > div:nth-child(2) > div.col-xs-12.col-sm-6.text-center.col-sm-pull-6 > div:nth-child(6) > button:nth-child(" + location + ")").click();
		document.querySelector("#AnswersController > form > div:nth-child(2) > div.col-xs-12.col-sm-6.text-center.col-sm-pull-6 > div:nth-child(11) > button:nth-child(" + safety + ")").click();
		document.querySelector("#submitDiv > button").click();
    }
	else
	{
		document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(" + total + ")").click();
	}
}

function rd(n,m){
    var c = m-n+1;
    return Math.floor(Math.random() * c + n);
}

function add_button() {
    var list= document.getElementsByClassName("btn-group");
    for (var i=0; i<list.length; i++){
    list[i].style.display="none";
    }
    var button_region =document.getElementsByClassName("col-xs-12 col-sm-4 text-center")[0];
    var refnode =document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > br:nth-child(3)");
    var br = document.createElement("br");
    button_region.insertBefore(br,refnode);
    buttons.forEach(function(button_data) {
        var button = document.createElement("button");
        var textnode = document.createTextNode(button_data["button"]);
        button.className = "button";
        button.appendChild(textnode);
        button_region.insertBefore(button,refnode);
        button.onclick = function(){rate_portal(button_data["total"],  rd(3,5), rd(3,5), rd(3,5), rd(4,5), rd(4,5));};
    });
}

(function() {
    add_button();
})();
