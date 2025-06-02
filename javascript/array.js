/* array : ordered collection of value or collection of same datatypes
eg:songs in a playlist, comments in a insta post */


let days = ['mon', 'tue', 'wed']
console.log(days.length)
console.log(days[2][1])
/* first it will choose value who has 2nd index from array,
 then it will give me the letter who has 1st index */
console.log(days[2])




/* so in any other language we need to have same datatype in array and decalre them too but
u can put any datatype in js */
let ash =[true, NaN, 233.44444, "whatnow", null]
console.log(ash)
/* Node.js typically outputs strings with single quotes ('), even if you used double quotes.
Browsers generally use double quotes (") to display strings in the console.
This is purely a formatting choice for how the values are displayed in the console
 and does not affect the actual content or type of the string. */



 /* unlike string, we can change particular character or value later
 in string, when we use method like uppercase, it will give us a uppercase version
 but it wont change the original string , in array after using methods, it will
 change or update original array too */
 let colors=['rad','yellow','pink']
 colors[0]='red'
 colors[3]='black'
//  we can even add new values in array
 console.log(colors)



//array methods are:Push(add to end),pop(remove from end),shift(remove from start),unshift
let names=['ash','nia', 'kiara','dodo']
names.push('aasna')
console.log(names)
// pop will remove from end
let person = names.pop()
// it will tell us the person who will get removed
console.log(person)
console.log(names)
names.pop()
console.log(names)
// now remove from start
names.shift()
console.log(names)
// now add from start
names.unshift('NIAS')
console.log(names)



//more methods like concat(for adding two strings),includes(exxample of boolean,),indexof
let dogs = ['golden reteriver', 'pitbull', 'shistzu']
let cats = ['blackcat', 'whitecat', 'browncat']
console.log(dogs.concat(cats))
//now include use krte h so we can ask ye element array m h ya nhi,it answers in form of true and false
console.log(dogs.includes('pitbull'))
// it will give u the value of -1 if its not present in array
console.log(dogs.indexOf('chauchau'))
// to reverse the sequence of elements in array
console.log(dogs.reverse())


// slice to copy a portion from arrays
let warmColors = ['beige', 'cream', 'brown', 'green', 'blue', 'grey', 'white']
// to get element of index 0 to index 2, index 3 is the end point, we dont count it
console.log(warmColors.slice(0,3))
// to get last two elements
console.log(warmColors.slice(-2))



// lets delete using splice(we can and delete using splice),index 2 only and end is 1 becoz we have to delete only one
warmColors.splice(2,1)
 console.log(warmColors)
//  now 3 means we have to delete 3 elements starting from index 2
 warmColors.splice(2,3)
 console.log(warmColors)
// now using splice to add something, adds at index 2 and 0means deletes nothing
warmColors.splice(2,0 ,'magneta')
console.log(warmColors)
// now we are deleting 2elements from index 3
warmColors.splice(3,2 ,'deleted')
console.log(warmColors)

// to sort an array
let scores = ['123', '46565','500','12','-736']
console.log(scores.sort())
// it sorts using only first digit of a number



// to convert an array to string
console.log(scores.toString())



/*two array wont be equal even the content is same because an array has its own memory and
address and array2 is a new array which has its own memory, so they are not referring to
same thng in memory so not equal*/
let array1 = [1,2,3] 
let array2 = [1,2,3]
console.log(array1 === array2)

let nums = array2;
// it will same memory in js, if we change num, other will change array2
console.log(nums === array2)
/* const pi cant be changed in string but const array can be changed, atleast values in
array can be changed or more values can be added but 
we cant change the whole array at once for ex*/
const arr = [ 1,2,3,4,5]
// let arr = [1] isnt possible


// multi dimensional array
let ar1 = [["X", "0","X"], ["0", null,"0"], ["0", "0","X"]]
console.log(ar1)

// object literal are collection of properties(PROPERTIES are key value pair)
let info = {firstname:' aastha' , lastname: 'singh', age:"20"}
// firstname is a key and aastha is the value
console.log(info)
// we are calling key here to unlock values and it converts all valid key to strings
console.log(info['firstname'])
// another way of accessing the values
console.log(info.firstname)
//using a variable to access 'age' which is treated as a string representing the key in the info object.
let vaRiable = 'age';
console.log(info[vaRiable])
// modifying object literals
info.age = 19
console.log(info)
// or u can see bracket way to change memory
info['age'] = 21
 console.log(info['age'])
//  you need to pass the property name as a string, as age isnt defined
//  to add new elements
info['eyecolor'] = 'brown'
 console.log(info)


//  lets make a nested structure(array + object literal inside it)
let comment = [ {username:'ash', likes:'150'}, {username: 'nia',likes:'20'}]
// how to access likes of index 1
console.log(comment[1].likes)


// LOOPS to print only even no
for(i=0; i<= 20; i+= 2){
    console.log(i)
}
// to print odd numbers
for(i=1; i<= 20; i+= 2){
    console.log(i)
}
// to decrement
for(i=100; i>=0 ; i -= 10){
    console.log(i)
}
// to print infinite loop
// for(i=20; i>=0 ; i += 10)
    {
    console.log(i)
}
// loop over a array also called iteration over array
let animals = ['elephant', 'lion', 'cat','dog','monkey', 'pig','tiger','cheetah']
for(i=0; i<animals.length ; i += 1){
    console.log(i, animals[i])
}
//i will tell the animal index no,and animal[i] will tell the name of animal of that index
// to reverse the order
for(i=animals.length-1 ;i>=0; i -= 1){
    console.log(i, animals[i])
}
// animal.length-1 becoz in index we count from 0 and in total length we count from 1



// nested loop(ek loop ke andr ek or loop)
for(i=1; i<= 10; i+=1){
    console.log(`i is: ${i}`)
    // backslash we are using
    for(j=1; j< 4; j+= 1){
        console.log(`        j is: ${j}`)
        // to add space , we start after ' 
    }
}
// 'i is; ${i}' example of string template literal
// using nested loop in multi dimensional array
let seating = [ ['ash','sam','alex', 'blake'],
['tori', 'dustin', 'kimberly','troy'],
['lily', 'summer', 'dillion', 'jen']]
for(i=0; i< seating.length; i+=1){
    const  row = (seating[i])
    // so that we iterate over row
    console.log(`row  is: # ${i + 1}`)
    for(j=0; j< row.length; j+= 1){
        console.log(row[j])
        // to add space , we start after ' 
    }
}
// or u can use for...if method
for(let row of seating){
    for(let student of row){
        console.log(student)
    }
}



// while loop is more imp, as it takes user input to run a loop for how long like in
// game we have to run loop until someone wins, ex is in first.js


// using break in while loop
for(i=1; i<= 1000; i+= 2){
    if(i === 100) break;
    console.log(i)
}


console.log(Math.floor(Math.random()*10)+1)
// to give a number from 1 to 10, without adding 1 , we will get no. from 0 to 10


//for..of is the easiest way for irteration over array,internet explorer doesnt support it
let subreddits = ['cute','funny','pretty','cringe','sad']
for(i=0;i<subreddits.length;i++){
    console.log(subreddits[i])
}
// or u can use for....of methond which is easy
for(let reddits of subreddits){
    console.log(reddits)
}




/* iterate over objects is different, as it doesnt have length
for object  literal, we use for...of method but for objects we use different method*/
let subScores = {kim:87, timmy:35,
    rai:90, reina:87, ash:90, xander:60
}
console.log(Object.keys(subScores))
// to only show the name whihc is key
console.log(Object.values(subScores))
// to only show scores
console.log(Object.entries(subScores))
// to show both of them