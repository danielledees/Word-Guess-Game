//Array of words choices
var words = ["turkey", "stuffing", "feast", "pilgrims", "indians", "gobble"];

//variable to pull a wordChoice at random
var words = words[Math.floor(Math.random() * words.length)];
console.log(words)

//set up answer array
var answerArray = []
for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray)
}


//variable to keep track of letters remaining
var remainingLetters = words.length;

//variable to keep track of guesses remaining
var guessesleft = [9];

//set up game loop
while (remainingLetters >0) {
    //show player progress
    var progress = document.getElementById("placeholder");
    progress.innerHTML - answerArray.join(" ");
 
}

//when a user presses a key
document.onkeyup = function(event) {

// Determines which key was pressed.
var guess = event.key;

//if the user presses a key that is in the word 
//if( words.includes(guess)){
    //correct letter fills space 
   // for(var j = 0; j < words.length; j ++){
        //if(words[j] === guess ){
           // answerArray[j] = guess;
           // remainingLetters--;
        //}
    
//if user guesses a letter not in the word
//else if (guess.length !== words){
   // for (var k = 0; k < words.length; k++){
        //if (words[k] !== guess) {
           // guessesleft--;
            //break;
        //}
    //}
}



