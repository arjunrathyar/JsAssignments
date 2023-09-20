var number = Math.ceil(Math.random() * 100);
console.log(number);
let guess;
let guessList = [];
while(true){
    guess = parseInt(prompt("Guess : "));
    if(guess==number){
        guessList.push(guess);
        alert("You got it right !!!!!");
        alert("Number of guesses: "+guessList.length+"\nGuesses were "+guessList);
        break;
    }
    else if(number-guess>0)
        alert("too low");
    else    
        alert("too high");
    guessList.push(guess);
}