window.onload = init;

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