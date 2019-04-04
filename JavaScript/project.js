var navigationElement, footerElement;
function start(){
    initalize();
    navigationElementSetup();
    footerSetup();
}
//Initallize Variables
function initalize(){
    navigationElement=document.getElementById("navigationBar");
    footerElement=document.getElementById("footer");
}
//Create Navigation Bar
//Inspired by W3 Schools: https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_right
function navigationElementSetup(){
    var output = "<nav>\n<ul>\n<li><a href=\"developer.html\">Developer</a></li>\n";
    output += "<li><a href=\"photography.html\">Photography</a></li>\n";
    output += "<li id=\"title\"><a href=\"index.html\">Matthew Guerra</a></li>\n";
    output += "<li><a href=\"production.html\">Production</a></li>\n";
    output += "<li><a href=\"resources.html\">Resources</a></li>\n</ul>\n</nav>";
    navigationElement.innerHTML = output;
}
function footerSetup(){
    var output = "<footer>\nMatthew Guerra &copy; 2019\n</footer>";
    footerElement.innerHTML = output;
}
window.addEventListener("load",start,false);