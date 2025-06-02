/* strings are like text and its a datatype
create a variable that stores string
*/
let username = "ash"
let message = "you have a three notifications"
console.log(username + "," + message)
//  to give space, we used ""

let name = "nia"
let greeting = "hi, my name is "
// here we gave space after is which works same as ","
let myGreeting = greeting + name + "."
console.log(myGreeting)

// this is a combination of string and integer
console.log(4 + 10)
console.log("4"+10)
/* when we combine string or integer , it forms string function rather
than integer one, it means it attaches both the string, instead of
performing addition which is a integer function*/
console.log(7+"10")
// always string get priortise over integer
console.log("2"+"4")
// this is called concatenation , adding two strings
console.log("mypoints: "+ 2+ 6)
// it will look a integer but its a string becz ek jgh string aajaye toh sbme wahi lgegi

let welcomeEl =  document.getElementById("welcome-el");
let naam ="ash"
let greetings = "welcome back"

welcomeEl.innerText = naam + "!" + greetings
// to add emoji
welcomeEl.innerText += "❤️"
// this is a new way to write welcomel.innertext = welcomel.innertext





/*  The parseInt() method is one of the most common ways to convert a 
string to an integer in JavaScript.*/
console.log(parseInt("102ndndndn"))
console.log(parseInt("ndndndn"))
// NAN MEANS no integer


const dayOfweek = "monday";
if( dayOfweek === "monday"){
    console.log("agh i hate mondays")
}
else if( dayOfweek=== "saturday"){
    console.log("agh i love weekends")
}
else{
    console.log("mehh")
}



//  its called nested conditionals
const passWord = prompt("please enter a password")
if( passWord.length >= 6 ){
        // if ur password is long enough, we will check space
        if(passWord.indexOf(' ') === -1){
        console.log("your password is valid")
}
else {
console.log("space is there!")
}
}
else{
        console.log("try again!, your passsword is short")
}
/* password.indexof('') === -1 means we are finding index of space amd if
there isnt any space , we will get output as -1 */


/* things or terms which are considered as falsy in js are;
NAN, undefined, "  "(empty string), 0 , null, false*/

const age = '40';
if( !(age<=5 || age>65)){
        /* using logical not, so negate the whole statement, 
means turning true statement into false*/
console.log("you are not allowed")
}

// switch statement is a replacement of if statements and a control flow method
const day = 2;
// dont make a string
switch (day){
    case 1:
        console.log("monday");
        break;
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thursday");
        break;
        default:
            console.log("INVALID");
}