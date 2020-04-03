window.onload = init;

/* TOGGLE BUTTON from BoogieJack.com*/

function init() {
	openNav();
}

function openNav() {
    var e = document.getElementById("post_toc");
    if (e.style.width == '12.5rem')
    {
        e.style.width = '0px';
    }
    else 
    {
        e.style.width = '12.5rem';
    }
}

function closeNav() {
    document.getElementById("post_toc").style.width = "0";
}

/*DISABLE COPY PASTE*/

function killCopy(e){
	return false;
}

function reEnable(){
	return true;
}

document.onselectstart = new Function ("return false")
if (window.sidebar) {
	document.onmousedown = killCopy;
	document.onclick = reEnable
}

/*DISABLE RIGHT-CLICK from BoogieJack.com*/
var message = "Right Click Disabled"

function defeatIE() {
	if(document.all){(message);return false;}
}

function defeatNS(e) {
	if(document.layers || (document.getElementById&&!document.all)) {
		if (e.which==2 || e.which==3) {(message); return false;}
	}
}

if(document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = defeatNS;
}

else {
	document.onmouseup = defeatNS;
	document.oncontextmenu = defeatIE;
}

document.oncontextmenu = new Function("return false");

