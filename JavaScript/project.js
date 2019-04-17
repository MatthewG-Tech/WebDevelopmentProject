var navigationElement, footerElement;
function start(){
    initalize();
    navigationElementSetup();
    expanderListener();
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
    var output = "<nav>\n<ul class=\"horUlNav\">\n";
    output += "<li class=\"navMobileSpacer\"></li>\n";
    output += "<li class=\"normalLiNav\"><a href=\"developer.html\">Developer</a></li>\n";
    output += "<li class=\"normalLiNav\"><a href=\"photographer.html\">Photographer</a></li>\n";
    output += "<li class=\"navTitle\"><a href=\"index.html\"><img src=\"../Images/Logo.png\" width=\"100%\" height=\"auto\" alt=\"Matthew Guerra Logo\"/></a></li>\n";
    output += "<li class=\"normalLiNav\"><a href=\"production.html\">Production</a></li>\n";
    output += "<li class=\"normalLiNav\"><a href=\"resources.html\">Resources</a></li>\n";
    output += "<li class=\"navExpander\" id=\"navExpander\"><img src=\"../Images/LogoInitials.png\" width=\"100%\" height=\"auto\" alt=\"Matthew Guerra Logo\"/></li>\n</ul>\n</nav>";
    navigationElement.innerHTML = output;
}
function footerSetup(){
    var output = "<footer>\nMatthew Guerra &copy; 2019  \n</footer>";
    footerElement.innerHTML = output;
}
function expanderListener(){
    var expander = docuemnt.getElementById("navExpander");
    
    expander.addEventListener("click", expandNav, false);
}
function expandNav(){

}
window.addEventListener("load",start,false);