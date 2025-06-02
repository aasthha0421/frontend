// GUESSING GAME
let maxNum = parseInt(prompt("enter a number"));
// parseint will only choose a number from aaabsbah26373 which is 26373
while(!maxNum){
    maxNum = parseInt(prompt("try again!, enter a valid number"));
}
const num = Math.floor(Math.random() * maxNum) + 1;
// ti will give us a random number from our given input which is maxnum
console.log(num)
let attempts = 1;

let guess = parseInt(prompt("enter your guess"))
while( guess !== num){
    if(guess < num){
        attempts++;
    guess = parseInt(prompt("try again!,ur guess is low"))
/*using guess instead of console to update the value of guess, console doesnt update
value, it will only print the value so we will never exit the loop*/
}
else{
    guess = parseInt(prompt("try again!,ur guess is high"))
}
}
console.log(`you got it, in ${attempts} guesses`)