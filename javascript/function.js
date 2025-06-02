/*in functions, first we define then run
 we define a chunk of code then execute it later
 EVERY METHOD IS A FUNCTION */



/* when functions accepts inputs then its called arguments
 firstname is a parameter or a placeholder for a variable that is passed down
 after calling the function*/
function greet(firstname){
     console.log(`hey there, ${firstname}`)
}

greet('aastha')
// calling function, and passing the argument as well


// now multiple arguments
function repeat(msg, numtimes){
    for(i=0;i<=numtimes;i++){
        console.log(msg)
    }
}
repeat("hello", 5)
// or u can do in this another way to print in same row
function againrepeat(msg, numtimes){
    let result =""
    // an empty string
    for(i=0;i<=numtimes;i++){
        result += msg;
        // adding 1 msg in first round, then another in 2nd round
    }
    console.log(result)
}
againrepeat("hi", 3)


//repeat keyword is very imp for writing functions as they store the output & can be called anytime and it also stops execution of that function, line written after return will never run
function whatever(x,y){
    sum=x+y;
    return sum;
    console(sum)
}
whatever(6,7)


function addition(x, y){
    if(  typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    else{
        return x+y;
    }
}
addition( 4 , 'r')

//  var is function scoped but They ignore block scopes like if, for etc
function varExample() {
    if (true) {
        var x = 10; // Declared inside if-block
    }
    console.log(x); // ✅ Accessible (function scoped)
}
varExample();

// but let and const is block scoped
function letExample() {
    if (true) {
        let x = 20; // Declared inside if-block
        console.log(x); // ✅ Accessible here
    }
    console.log(x); // ❌ Error: x is not defined outside the block
}
letExample();

function constExample() {
    if (true) {
        const y = 30; // Declared inside if-block
        console.log(y); // ✅ Accessible here
    }
    console.log(y); // ❌ Error: y is not defined outside the block
}
constExample();

var myname = "aastha"  // global variable it is now
function Name(){
    myname = "ash"
}
console.log(myname)
Name()
console.log(myname)  //updating global variable


//now lexical scope so the andr wale function can access bhar wale variable, jo bhar wale func me belong krte h
function bankrob(){
    const heroes = ['wolverine', "captain america", "thor" ]
    function callforhelp(){
        for( let hero of heroes){          //heroes bhar wala variable h
            console.log( `please help us ${hero}`)
        }
        callforhelp() //heroes doesnt exists in callforhelp function, but exists in bankrob(parent) function
    }
}


// when storing a function with no name inside a variable called function expression
const additioN = function(x,y){
    return x + y;
}

// passing function as arguments to another functions called high order function
function calltwice(func){
    func();    //executing func arguement
    func();
}
function hellooo(){
    const hell = Math.floor(Math.random()*6)+1
    console.log(hell)
}
calltwice(hellooo)




// returning a function inside a functioncalled factory function
function isbetween(max, min){
    return function(num){
    return  num=>min && num<=max ;
    }
}
isbetween(100, 1)       // if we call isbetween, this will show with max=100 and min=1
const isnum = function(num){     //now we will keep value of function num in variable isnum
    return  num=>min && num<=max ;
    }
isnum(50)
/* function isbetween(max, min) {
    return function (num) {
        return num >= min && num <= max; // Checks if the number is in the range
    };
}

const isnum = isbetween(100, 1); // `isnum` is now a function that checks numbers
console.log(isnum(50)); // Works! Outputs true */



// every method is function, but not vice versa for ex: any function with . is called method like fun.
const mymath = {
    // mymath is a object and property is pi and function is square
    pi : 3.14,
 square : function(num){
    return num*num;
}, 
cube : function(num){
    return num **3;
}
}
console.log(mymath.pi )    //accessing pi
console.log(mymath.square(3)  )      //passing argu and executing function
//using function as a value in object




// window is the main big old object in js in which everything lives inside of it
// using 'this' keyword
const cat ={
    name: meowwwww,
    color: beige,
     meow(){ 
        console.log(`${this.name} is a cat`)     //print meowwwww is a cat
     }
}
cat.meow()    //calling meow function wrt to cat object, meow referto object in left

const meow2 = cat.meow;
console.log(meow2())   //it will only print is a cat, not the name, there is a difference in invocation context
// here meow doesnt refer to cat object as cat object isnt present on its left, but it will refer to window object
window.meow2()  // equal to meow2()


// another example of using "this" keyword #1:

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
      this.eggCount++;
      return 'EGG';
    }
  };


/*try and catch so that code wont break becoz of error, if there is error, other line in codes wont run even 
though they are right so try and catch finds error and stops it from executing and then execute other lines */
try{
    hellooo.toUppercase().repeat(3);        //there is no hello defined
} catch(e){      //catch(e) passes the error
    console.log("error")
}
console.log("after")
// use try and code when we arent sure about a code or where we think code can produce error