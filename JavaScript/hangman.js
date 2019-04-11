var countButton;
var lives, words, entertedLetters, currentInput, chosenWord, revealedWord, wordLength;
lives = 5;
function start(){
    initalize();
    navigationElementSetup();
    footerSetup();
    countButton.addEventListener("click",hangmanInitalize,false);
}
//Initallize Variables
function initalize(){
    countButton = document.getElementById("enterButton");
}
function hangman(){
    currentInput = prompt("Enter a letter to guess.");
    if(validInput(currentInput)){

    }
}  
function hangmanInitalize(){
    lives = 5;
    wordLength = prompt("Welcome to Hangman!\nPlease enter the length of a word you would like guess.");
    findWordsByLength(wordLength);
    hangman();
}
function findWordsByLength(length){
    var tempWordList;
    for(var i = 0; i < words.length; i++){
        if(words[i].length() == length){
            tempWordList.add(words[i]);
        }
    }
    words = new Array(tempWordList.length);
    for(var i = 0; i < tempWordList.length; i++){
        words[i] = tempWordList[i];
    }
}
fucntion validInput(letter){
    if(letter == NaN){
        return false;
    }
}

window.addEventListener("load",start,false);