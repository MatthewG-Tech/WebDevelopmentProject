var navigationBar;

function start(){
    initalize();
    navigationBarSetup();
}
//Initallize Variables
function initalize(){
    navigationBar=document.getElementById("navigationBar");
}
//Create Navigation Bar
//Inspired by W3 Schools: https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp
function navigationBarSetup(){
    var output = "<a href=\"#\">Testing</a>"
    output += "<a href=\"#\">Testing</a>"
    navigationBar.innerHTML = output;
}

window.addEventListener("load",start,false);