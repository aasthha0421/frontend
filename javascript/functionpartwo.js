/* array methods that pass require us to pass functions
ARRAY CALLBACK METHODS
1. foreach -- these methods expect function to be passed in
in this,function are passed and every element of the array is called*/
const movies = [
    {
    title : "me before you",          //array
    timeofRelease : 2014
},
   {
    title : "aladin",
    timeofRelease : 2016
},
{
    title : "the notebook",
    timeofRelease : 2002
},
   {
    title : "clueless",
    timeofRelease : 2001
}
]
movies.forEach(function(movie){   
//movie is the function which is passed to foreach and used to call every element in array,we can name func anything
    console.log(movie)
    console.log(movie.title)
    
})
/* 2.map method, same as foreach as it accepts callback function and it runs that func once per element in array
but it stores all the returned value in new array */
const fullnames=[{
      first:'ash',
      lastname:'branson'
},
{
    first:'sam',
      lastname:'henderson'
},
{
    first:'alex',
      lastname:'winchester'
}]
const first = fullnames.map(function(f){
    return f.first;      //maps new function to new array & return only first from fullnames and put it in new array
})
console.log(first)
// map is used to make a copy


// arrow function is used to create function expression
const add = (x,y) =>{
    //no need to write funtion(x,y) in this, just write(x,y)which is called parameter
    return x + y;
}
const number = () =>{
    // no need to pass arguments but there should be empty parenthesis
    return Math.floor(Math.random()*6)+1
}

// arrow function implicit return is used to shorten up the code by not using return keyword, eg:
const Add = (x,y) => x + y     //one liner implicit

const Number = () =>(
     Math.floor(Math.random()*6)+1
)


// arrow function wrapup used for to shorten mapfunction
const Num = [1,2,3,4,5,6,7,8]
const table = Num.map(x => ( x) )
console.log(table)


// they are not array methods but they deal with delay and waiting
console.log("hello")
setTimeout(() =>{
    console.log("are u still there")
} , 2000)  // it will run console log after 2000miliseconds
console.log("goodbye")     //as are u still there is taking time to run so goodbye statement will run before it

const id = setInterval(() => {
    console.log("hiiiiiiiiiiii")
}, 3000);            //it will continue to print hi after every 3000 seconds
/* () => {
    console.log("hiiiiiiiiiiii")            this is a argument that is passed
} */
clearInterval(id)      //to stop hii



//using filter method to create new array which passed test of given function
const double = [1,2,3,4,5,6,7,8,9,10]
const doubles = double.filter(
    n => n % 2=== 1) .map(n => n %3===1)  // we can use map too
console.log(doubles)


// some and every returns true and  false value only
const scores = [ 45, 79, 86, 90, 44, 75, 20, 74]
scores.every( score =>  score >=30)  //checks every score should be greater than 30 , if not return false
scores.some( score =>  score >=30)   //gives true as some of them are greater than 30

// reducer function which gives single value from a array, use instead of for loop
const sum=[1,4,5,6,10,2]
const total = sum.reduce(( total, currentvalue) => {
    // first step 0 +1 = 1 then second step 1+4=5 then third step 5+5=10 so thats how it gives total
    return total + currentvalue , 100 ;
    // this 100 is the initial value for sum, 100 + 1 will be the first step now
})
console.log(total)
/* now using implicit or short way to write this code
const total = sum.reduce(( total, currentvalue) => total + currentvalue) 
another example */
const minNum = sum.reduce((min, num) =>{
    if(min> num){
    return num;
    }
    return min;             // to find min number out of all
    }
)
console.log(minNum)



/*Regular Function vs Arrow Function with 'this'

const person = {
  name: "Aastha",
  regularFunction: function () {
    console.log(this.name); // `this` refers to `person`
  },
  arrowFunction: () => {
    console.log(this.name); // `this` does NOT refer to `person`
  },
};

person.regularFunction(); // Output: "Aastha" (because `this` is `person`)
person.arrowFunction();   // Output: undefined (because `this` is not `person`)  

In the regular function, this refers to the object (person) that called the function.
In the arrow function, this doesn't refer to person. Instead, it looks outside (where the function was defined)
to find this. Usually, in the global scope, this is undefined (or window in non-strict mode).*/


// NEW JS FEATURESSS
//DEFAULT PARAMETER, now we are putting a default value agr koi argument ya value pass nhi hogi tb woh show hoga
function NAMES ( person , msg="helloooo"){
    console.log( `${msg}`,`${person}`)
}
NAMES( "hello", "aastha")
NAMES("ash")    
/*now we have set default value of msg but here it will print ash undeinfed,as agr ek value pass ho rhi h
toh woh phle wale paramter ko milegi in this case msg onchange, issiliye default value jiski bhi set kro, uske end
me likho */


// now if we want to print every element in array as separate arguements, num array is formed above
console.log(Math.max(...Num))
console.log(Math.min(...Num))
console.log(...'hello')
// it separates every element


// now copying content from one array to another
const colors = ['yellow', 'pink', 'red', 'black']
const pastels = ['beige', 'mint', 'salmon pink']
const allofthem = [...colors, ...pastels]
console.log(allofthem)

// now we can make copies of an object
const flower ={name:'lily', color:'pink'}
const flower2 = {smell:'feminine', color:'white'} 
//having same object name which is color, so second one will overwrite on first one, so white will show as color
const flowerflower2 = {...flower,...flower2}
console.log(flowerflower2)
// we can add more properties in object
const flowerflower3 = {...flower,...flower2, known:'daisy'}
console.log(flowerflower3)

// rest parameter- it looks like spread but it isnt,it collects remaining arguements & put them into an actual array
function raceresults( gold, silver, ...everyonelse){
    console.log(`gold goes to:${gold}`)
    console.log(`silver goes to: ${silver}`)
    console.log(`and tnaks to rest of them: ${everyonelse}`)
}
raceresults("ash",'nistha','reily','hayley','hope')

// for ex;
function Sums(nums){
     console.log(nums)
}
Sums(3,5)              //here 5 will get ignored
function sums(...nums){        //using rest para to collect every arugement/ parameters
    console.log(nums)
}
sums(4,5)


// NOW DESTRUCTINGGG ARRAYS-unpacking value from arrays or we can say putting them into new variable
const scoress = [283,2737,636,383,3792,848,273]
const [firstt, second, third,...everyone]=scoress;
console.log(firstt)
console.log(second)        //new variable with second value from array, we are just copying it
console.log(everyone)
// destructing objects
 const user={
    name:'harvey',
    born:2012,
    class:7,
    age:12,
    favcolor:'blue'
 }
const { name, age, born:birthyear, nickanme='harry'} = user;
//we have changed name for born and also added new property which is nickname
console.log(age)
console.log(birthyear)   //now born doesnt exists
console.log(nickanme)

/* now destructuring parameters,  using this example
const movies = [
    {
    title : "me before you",          //array
    timeofRelease : 2014
},
   {
    title : "aladin",
    timeofRelease : 2016
},
{
    title : "the notebook",
    timeofRelease : 2002
},
   {
    title : "clueless",
    timeofRelease : 2001
}
] */
movies.map((movie)=>{
    return `${movies.title}  ${movies.timeofRelease}`
})
// now we can shorten this up by destructuring
movies.map(({title, timeofRelease})=>{
    return `${title}  ${timeofRelease}`
})
function moviedetails({title, timeofRelease}){ //when we have to use only 2 or 3 properties, use parenthesis in para
return `${title} ${timeofRelease}`
}
console.log(moviedetails)