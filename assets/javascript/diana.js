// List of Array Variables
var words= ["Turkey","Sweet Potato","Pumpkin Pie","Mashed Potato","Green Beans","Cranberry Sauce","Apple Pie","Gravy","Stuffing","Apple Pie"];


//Pick a random word
var words=words[Math.floor(Math.random()*words.length)];


//Set up the answer array
var answerArray= [];
for (var i=0; i<words.length;i++) {
   answerArray[i]="_";
}

var remianingLetters=word.length;

//Loop
while (remianingLetters>0){
   //Show player Progress
   alert(answerArray.join(""));
}

//Get a guess form player
var guess= prompt("Guess a letter or click cancel to stop playing.");
if (guess === null) {
   break; //exits the game loop
}
else if (guess.length !==1){
   alert("Opps...You entered too many letters. Please enter a single letter.");

}
else{ //update game
   for(var j=0; j<word.length;j++){
       if (word[j]===guess){
           answerArray[j]=guess;
           remianingLetters--;
       }
   }
}

//show the answer and congratulate the player
alert(answerArray.join(" "));
alert ("Good job! The answer was" + word);