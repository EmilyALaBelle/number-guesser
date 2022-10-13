/*
create a program that guesses a number from one to ten then asks us to guess that number. 
If it is higher say "to high", and ask again.
 If it is lower say "to low" and ask again.
If it is the right number say "congratulations" and exit
*/
import readline from "readline-sync"

let userGuessRight = false

//while(true){ me playing
//guess a number from 1-10
let numberChosen = Math.ceil(Math.random() * 10)
//console.log(numberChosen)
//}
while (!userGuessRight) {
    let guess = readline.question("What is your guess?")
    if (guess > numberChosen) {
        console.log('Your guess is too high')
    } else if (guess < numberChosen) {
        console.log('Your guess is too low')
    } else {
        console.log('congratulations!')
        userGuessRight = true
    }
}
