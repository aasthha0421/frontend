/*  it is dynamically typed mtlb hame ye nhi btana konse variable me y value store hogi
directly ap value store krwao */
Name =" aastha singh";
console.log(Name);
/* variable me space nhi aana chahiye , underscore,$ or number kr skte h add
and 1st word shuld never be a number 

WE HAVE 3 KEYWORDS WE CAN USE, BEFORE ANY VARIABLE NAME
FOR EG: let name      can be updated but not redeclared, a block space variable
        const age      cant be updated or redeclared, a block space variable
        var height     var can be redeclared and reupdated,  a global space variable, purane time me
        use hota tha var so ab use nhi krte ham, we only use let and const for declaring
        variables*/
        let bonuspoint = 50;
        bonuspoint = bonuspoint + 50 ;
        // formed one variable wuth name count to store a data
        bonuspoint= bonuspoint - 75 ;
        bonuspoint= bonuspoint + 45 ;
        console.log(bonuspoint)

//  as many times we click the button, it will call increment function which will run hello 
let log1=1;
let log2 =5;
        function increment()  {
              console.log(log1+log2)
              let total=log1*log2;
              console.log(total)
 // let is a block scope variable becoz ek particular space tk ke hi function usse use kr skte h
        }
increment()
//  writing my first function program
 function myfirst() {
        console.log("NIAS")
 }
// calling that function again without needing to write whole program
 myfirst()


 let animal = "dumbo elephant"
 console.log(animal[0])
 console.log(animal[14])
 console.log(animal.length)
//  it will count space as one character too but for index, we dont count space
console.log(typeof animal)
// typeof tells the datatype
console.log(animal.toUpperCase())
// name.method()   
console.log(animal.trim())
// to remove any extra white space
console.log(animal.indexOf('e'))
// this is used to see if a string contains something like a charcater or number
console.log("wow, this is funny".slice(4, 10))
/* slice can take 2 argument at a time, it cuts down from that index which is 3 and only 
shows whats after 3 index */
console.log("wow, this is funny".slice(-2))
// negative 8 means last two characters
console.log("wow, this is funny".replace("wow", "haha"))
/* its more powerful input arguments
some methods accept argument to modify their behaviour*/
console.log("wow".repeat(8))
// thing.method()    syntax










/* TEMPLATE LITERALS ARE STRINGS THAT ALLOW EMBEDDED EXPRESSIONS WHICH WILL
GET EVALUATED OR RUN TO GIVE A RESULTING STRING, WE USE BACK TICKS HERE*/
console.log(`hello! ${3+8} and ${6+9} number`)


/* null means assigning a zero value to a variable intentionaly
but undefined means not assigning any value not even zero to a variable, its just 
empty or not defined thats why complier is asking what do u want
WE HAVE 5 ESSENTIAL PRIMITIVES */


//  MATH OBJECT- contains properties for math functions
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.round(4.98))
// rounds off
console.log(Math.abs(-4675))
// gives absolute value, which means -ve will have same +value
console.log(Math.floor(4.374666))
// removes decimal
console.log(Math.ceil(32.1))
// its going round off no matter what


//math.random gives us random number between 0 and 1,what if we want a num between 1 and 10
console.log(Math.random())
console.log(Math.random()* 10)
// step 2 , write 5 in place of 10, if u want a random no between 1 and 5
console.log(Math.floor(Math.random()* 10))
// step 3  it will remove the no after decimals
console.log(Math.floor(Math.random()* 10) + 1)
// step 4,add 1 so that it will give value between 1 and 10, not 0 and 10

console.log('a' > 'b')
//we can compare two strings as well, all aplhabets have unicode from wich we can compare

console.log('0' == false)
/* == convert them into same type then give answer which can be problamtic and wrong
thats why we use === */
console.log('0' !== 0)
alert("hello")
// it pops up in websites
/*it also works in website and it accepts arguments, if we need input in browser with
 HTML */ 
 let userInput = prompt("please enter a name")
 console.log(userInput)
 

// while loop is more imp, as it takes user input to run a loop for how long like in
// game we have to run loop until someone wins
 let enter = prompt("enter a secret code")
let code = "whatsupash"
while(enter != code){
    console.log(enter = prompt("enter a secret code"))
}
// this code will repeat again and again until u write the secret code correct
console.log("congrats! you unlocked secret code")
