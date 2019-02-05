//Array of words - index 0-5 / 6 elements
var wordChoices = ["turkey", "stuffing", "feast", "pilgrims", "indians", "gobble"];

//variable to pull a wordChoice at random
var word = wordChoices[Math.floor((Math.random() * wordChoices.length))];
console.log(word);

//variable for blank spaces
var spaces = [];

//variable to letters guessed
var letterGuessed = [];

//variable to hold wins
var wins = 0;

//variable to hold losses
var losses = 0;

//function to create blank spaces
function createSpaces(){
    for( var i = 0; i < word.length; i++) {
        //pushes _ to the spaces array
        spaces.push('_');  
    }

document.getElementById('placeholder').innerHTML = spaces.join(' ');
}

var remainingLetters = word.length;

//calls the function
createSpaces();



//when a user presses a key
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

    
//if the user presses a key that is in the word and has not already been guessed
if( word.includes(userGuess) && !letterGuessed.includes(userGuess)){
    //correct letter fills space 
    for(var i = 0; i < word.length; i ++){
        if(word[i] === userGuess ){
            spaces[i] = userGuess;
           }
        }
    }
    
document.getElementById('placeholder').innerHTML = spaces.join(' ');      
    
    letterGuessed.push(userGuess);


            

    //var html =
   // "<p>wins: " + wins + "</p>" +
    //"<p>Current Word" + spaces + "</p>" +
   // "<p>Letters Guessed so far: " + letterGuessed + "</p>" +
   // "<p>losses: " + losses + "</p>" +
    

  // Set the inner HTML contents of the #game div to our html string
  //document.querySelector("#placeholder").innerHTML = html;}


