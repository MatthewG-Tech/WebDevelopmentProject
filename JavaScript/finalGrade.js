var submit, currentGrade, finalPercentage, desieredPercentage;
var result;
lives = 5;
function start(){
    submit = document.getElementById("submit");
    desieredPercentage = document.getElementById("desieredPercentage");
    finalPercentage = document.getElementById("finalPercentage");
    currentGrade = document.getElementById("currentGrade");
    submit.addEventListener("click",validate,false);
}
function validate(){
    console.log(isNaN(desieredPercentage.value));
    console.log(desieredPercentage.value);
    console.log(isNaN(finalPercentage.value));
    console.log(finalPercentage.value);
    console.log(isNaN(currentGrade.value));
    console.log(currentGrade.value);
    if(isNaN(desieredPercentage.value)  || desieredPercentage.value == "" || isNaN(finalPercentage.value) || finalPercentage.value == ""|| isNaN(currentGrade.value) || currentGrade.value == ""){
        alert("Not a valid input, try again.")
    }else{
        calculate();
    }
}
function calculate(){
    result = ((desieredPercentage.value-((100-finalPercentage.value)*(currentGrade.value/100)))/finalPercentage.value)*100;
    alert("You need to get a " + result + "% on your final");
}

window.addEventListener("load",start,false);