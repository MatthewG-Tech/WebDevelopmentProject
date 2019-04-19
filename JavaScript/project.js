var navigationElement, footerElement;
var slideshowCounter, sldieShowImages;
function start(){
    initalize();
    navigationElementSetup();
    expanderListener();
    footerSetup();
    slideShow();
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
    output += "<li class=\"navExpander\" id=\"navExpander\"><img class=\"expandImg\" src=\"../Images/LogoInitials.png\" width=\"300px\" height=\"20px\" alt=\"Matthew Guerra Logo\"/></li>\n</ul>\n</nav>";
    navigationElement.innerHTML = output;
}
//create footer
function footerSetup(){
    var output = "<footer>\nMatthew Guerra &copy; 2019  \n</footer>";
    footerElement.innerHTML = output;
}
//Add listner for mobile expander button
function expanderListener(){
    var expander = document.getElementById("navExpander");

    expander.addEventListener("click", expandNav, false);
}
//Expand the Navigation Bar for mobile
function expandNav(){
    var ulName, liName, ulNameChange, liNameChange
    if(document.getElementsByClassName("horUlNav").length == 0){
        ulName="mobileExpanded";
        titleName="navTitleExpanded"
        liName="mobileExpadedLi";
        ulNameChange="horUlNav";
        titleNameChange="navTitle"
        liNameChange="normalLiNav";
    }else{
        ulName="horUlNav";
        titleName="navTitle"
        liName="normalLiNav";
        ulNameChange="mobileExpanded";
        titleNameChange="navTitleExpanded";
        liNameChange="mobileExpadedLi";
    }
    var horUlNav = document.getElementsByClassName(ulName);
    horUlNav[0].className = ulNameChange;
    var title = document.getElementsByClassName(titleName);
    title[0].className = titleNameChange;
    var horLiNav = document.getElementsByClassName(liName);
    for(var i = horLiNav.length-1; i >= 0; i--){
        horLiNav[i].className = liNameChange;
    }
}
//Add slide show for home page
function slideShow(){
    slideshowCounter=0;
    slideshowImages = document.getElementsByClassName("slideshowDiv");
    if(slideshowImages.length != 0){
        changeSlide();
        var slideshowTimer = setInterval(changeSlide, 5000);
    }
}
function changeSlide(){
    pastSlideIndex=slideshowCounter-1;
    if(slideshowCounter == slideshowImages.length){
        slideshowCounter=0;
    }
    if(slideshowCounter == 0){
        pastSlideIndex=slideshowImages.length-1;
    }
    slideshowImages[pastSlideIndex].className = "summary photo slideshowDiv hide";
    slideshowImages[slideshowCounter].className = "summary photo slideshowDiv show";
    slideshowCounter++;
}
function resizedWindow(){
    ulName="mobileExpanded";
    titleName="navTitleExpanded"
    liName="mobileExpadedLi";
    ulNameChange="horUlNav";
    titleNameChange="navTitle"
    liNameChange="normalLiNav";
    
    var horUlNav = document.getElementsByClassName(ulName);
    if(horUlNav.length != 0){
        horUlNav[0].className = ulNameChange;
        var title = document.getElementsByClassName(titleName);
        title[0].className = titleNameChange;
        var horLiNav = document.getElementsByClassName(liName);
        for(var i = horLiNav.length-1; i >= 0; i--){
            horLiNav[i].className = liNameChange;
        }
    }
}
window.addEventListener("resize",resizedWindow,false);
window.addEventListener("load",start,false);