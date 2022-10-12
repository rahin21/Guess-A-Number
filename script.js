'use strict';
let body = document.querySelector("body");
let play_again = document.querySelector(".again");
let secret_num = document.querySelector(".number");
let guess_num = document.querySelector(".guess");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let scoreHTML = document.querySelector(".score");
let highscoreHTML = document.querySelector(".highscore");

let secret = Math.trunc(Math.random() * 20 + 1); 
let score = 20;
let storedGuess = 0;


check.addEventListener('click', () =>{
    let guess = Number(guess_num.value);
    let highscore = Number(highscoreHTML.innerHTML);
    if(score!==1){
    if(guess !== secret){
        if(guess<0 || guess>20){
            message.innerHTML = "Out of Range";
        }else if(guess === storedGuess){
            message.innerHTML = "Same Number";
        }
        else{
        (guess<secret) ? message.innerHTML = "⬇ Too low":message.innerHTML = "⬆ Too high";
        score -= 1;
        scoreHTML.innerHTML = score;
        storedGuess = guess;
        }
    }
    
//When the secret number matches
    if(guess == secret){
        message.innerHTML = "😍 Congrats";
        scoreHTML.innerHTML = score;
        secret_num.innerHTML = secret;
        document.querySelector("h1").innerHTML = "You Won!!"
        body.style.backgroundColor = "#22c1c3"
        body.style.transition = "1s"
        if(highscore<score){
            highscoreHTML.innerHTML = score;
        }
        check.classList.toggle("hidden");
        
    }
// Game over 
} else {
 
    scoreHTML.innerHTML = 0;
    message.innerHTML = "Game Over";
    body.style.backgroundColor = "#A30000"

}
//start the game again
    play_again.addEventListener('click', () =>{
        secret =  Math.trunc(Math.random() * 20 + 1);
        score = 20;
        scoreHTML.innerHTML = score;
        guess_num.value = '';
        document.querySelector("h1").innerHTML = "Guess A Number!"
        secret_num.innerHTML = '?';
        body.style.backgroundColor = "rgb(2,0,36)"
        body.style.transition = "1s"
        message.innerHTML = "Start guessing...";
        check.classList.remove("hidden");
    });
});


