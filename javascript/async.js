/* when we have to know which key was pressed, thats why we use keyboard event object
keydown:

Triggered when a key is pressed down.
Fires continuously as long as the key is held down (depending on the browser's repeat rate).
Useful for actions that start when a key is pressed, such as initiating movement in a game.
keyup:

Triggered when a pressed key is released.
Fires only once per key release.
Useful for actions that should occur after the key is released, like stopping an action or validating input.*/
const input = document.querySelector('input')
input.addEventListener('keydown',function (e){
    console.log(e.key)
    console.log(e.code)
})
input.addEventListener('keyup',function () {
    console.log('keyup')
})
/*Logs e.key (the actual character or key pressed, e.g., "a" or "Enter").
Logs e.code (the physical key's code, e.g., "KeyA" for the "A" key or "Enter" for the Enter key).*/
const form = document.querySelector('#shelterform')
const inputt = document.querySelector('#new') //this is our input
const list = document.querySelector('#cats')
form.addEventListener('submit',function (e){
    e.preventDefault(); //so the page wont refresh now, it will stay same if that action site doesnt exists
    const catsname = inputt.value;
    // jo bhi input pr value likhi hogi na webpage me, ab ham usse new list me daalenge
    const newlist = document.createElement('li')     //this is empty list
    newlist.innerText = catsname;
    list.append(newlist)    //list me daalna h newlist ke naam
})
/*input event: Happens immediately whenever you type or change the value in an input field,
 like typing each letter in a textbox.

change event: Happens after you're done, such as when you finish typing and click away,
 or select an option in a dropdown.

Think of input as reacting in real-time, while change reacts only after you're finished.*/
const changeininput = document.querySelector('input')
changeininput.addEventListener('input', function(e){
    console.log('a change occured')     //same way to write chnage event, just replace input as change as callback
})


/*We attach the input event listener to the input field, not the h1,
because we want to detect when the user types or changes the value in the input field.
The event listener listens for changes in the input's value, and based on that, we update the h1 text dynamically.
The h1 element only displays the result based on the input value, but the actual event (user typing) occurs on 
the input field.  

const heading = document.querySelector('h1');
const input = document.querySelector('input');
 
input.addEventListener('input', function () {
  if (input.value === '') {
    heading.innerText = Enter Your Username
  } else {
    heading.innerText = Welcome, ${input.value};
  }
}); 
GREAT CODE, USE IT ONCE








Event bubbling happens when an event, like a click, starts at the element where it occurred (child) 
and moves up to its parent elements. Think of bubbles in water: they start at the bottom (child)
 and rise to the surface (parents).

Example:
If you click a button inside a div:

The event happens on the button first.
Then it "bubbles up" to the div.
Then to the body and so on.
This allows parents to detect events from their children.
another example for event bubbling*/
const container = document.querySelector('#container')
const buttons = document.querySelector('#this')
buttons.addEventListener('click', (e) => {
  buttons.style.backgroundColor = randomcolor();  //this is A child event
  e.stopPropagation(); //this will stop event bubbling, it will make sure one event occur at a time
  // its a end of a kine, so it changes color and stops
})
function randomcolor(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r}, ${g},${b})`;    //as it should return a value whenever it is called
}
// yes we clcked on button but it is inside of div, so we clicked on it too
container.addEventListener('click', function(){
  container.classList.toggle('hide')

/* now this is the second event which will get triggered by clicking on button, this is a parent event
there are two events: parent and child event which will result in event bubbling
if we click on button then it will change color then hides it(it takes milisecond)
  */
})
/* classList property makes it easy to work with the classes of an HTML element.

Every HTML element can have classes (used to style or control it with CSS or JavaScript).
classList lets you see, add, remove, or toggle these classes without typing the full class string.
.blue {
    background-color: blue;
}
.hide {      this is html classes
    display: none;
}
    




EVENT DELEGATION: Instead of listening to every child (like each button or list item), 
you listen once on the parent. Then, you check which child triggered the event using event.target.


HOW IT WORKS
Event Listener on Parent: The click event is attached to the ul (parent).
Event Bubbling: When an li is clicked, the event "bubbles up" to the ul.
Check the Target: Use event.target to check which element triggered the click.*/
const eventinfo = document.querySelector('#eventinfo')
const events = document.querySelector('#events')
const eventlist = document.querySelector('#eventlist')
const tweetform = document.querySelector('#tweetform')
tweetform.addEventListener('submit', function(n){
  n.preventDefault();
  const tweet = eventinfo.value;
  const neweventlist = document.createElement('li')
  neweventlist.innerText = tweet;
  eventlist.append(neweventlist)
})
/* we are adding event delegation to our parent so that any new changes which will occur in future can get modified
without addingnew event listener for each of them */
eventlist.addEventListener('click', function(e){
  console.log('this is list item is clicked')
  //we can write this as well e.taget.nodeName === 'li' && e.target.remove()
  console.log(e) //mouse event
  console.dir(e.target) //console.dir(e.target) is a JavaScript command used to display the properties of an element 
  //  in a more readable and detailed format, particularly in the browser console.
e.target.remove()
  // e.target - its the item that was actually clicked

})

/* call stack is a mechanism to keep a track of where it is in bunch of function calls,The call stack is like a 
to-do list for JavaScript, keeping track of the functions that need to be executed.

how it works:
How the Call Stack Works:
first() is called → it gets added to the call stack.
Inside first, second() is called → it gets added on top of the stack.
Inside second, third() is called → it gets added on top of the stack.
When third() finishes, it’s removed from the stack.
Then second() finishes and is removed.
Finally, first() finishes and is removed.*/
function multiply(x,y) {
  return x*y;
}

function square(x) {
  return multiply(x,x) ;
}

function isrighttriangle(a,b,c) {
  return square(a) + square(b)=== square(c);
}

isrighttriangle(3,4,5);
// first isrighttriangle is called, then square, then multiply() is at the top of stack

/* JavaScript is single-threaded means it can do only one task at a time, call stack tells browser that we have to
do this next(or tells the which functions/event is there in code) so remind us

Single-threaded:

JavaScript has one main thread to execute code.
It can handle one task (like running a function) at a time.
Like a Queue:

Imagine JavaScript is a person standing in a line.
They handle one task → finish it → move to the next task.
They cannot do two tasks at the same time.*/




/*Callback Hell is a term used to describe a situation in programming where multiple nested callback functions 
are used in a way that makes the code difficult to read and maintain. This often happens in JavaScript 
when performing asynchronous operations, such as making API calls, reading files, or accessing databases.*/
setTimeout(() =>{
  document.body.style.color='red';  //after1s it will run
  setTimeout(() =>{         
    document.body.style.color='teal';  //it will run after 1s of red color so total 2s
    setTimeout(() =>{
      document.body.style.color='yellow';
      setTimeout(() =>{
        document.body.style.color='pink';
        setTimeout(() =>{
          document.body.style.color='magenta';
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
//nested callbacks
//another real time example
searchMoviesAPI('titanic', ()=>{     //searching for a movie
  saveToMyDB(movies, ()=>{   //passing 2 callback function , one is a success nd other is failure
// if its gets save into movies, then run this
  },()=>{       
// otherwise run this
  },() =>{
    // run this if api is down
  }
)
})
/* Solutions to Avoid Callback Hell:
Use Promises: Promises flatten the nesting and make the code more readable.
promises are objects that represent eventual success or failure of a operation
ex: making requests
while making requests, we need 2 callbacks, one is success and other is failure
if we needed a nested request, then 2 callbacks per request

FAKEREQUESTS USING CALLBACKS*/
fakeRequest('https://api.example.com/data1', (err, response1) => {
  // err is failure callback nd response is success callback
  if (err) {
    console.error(err);
  } else {
    console.log(response1);
    fakeRequest('https://api.example.com/data2', (err, response2) => {
      if (err) {
        console.error(err);
      } else {
        console.log(response2);
        fakeRequest('https://api.example.com/data3', (err, response3) => {
          if (err) {
            console.error(err);
          } else {
            console.log(response3);
          }
        });
      }
    });
  }
});


fakeRequestcallback('https://api.example.com/data1',function ( response1) {
  // err is failure callback nd response is success callback
console.log(response1);
console.log("it worked");
  fakeRequestcallback('https://api.example.com/data2',function ( response2) {   
    // nested request with its 2 callbacks
    console.log(response2);
    console.log("it worked again");
  }, function ( err) {
    console.log(err);
    console.log("errorrrrrr again");
  } 
  );
}, function ( err) {
console.log(err);
console.log("errorrrrrr");
} 
);
/*fakeRequestcallback Function:

Simulates a request.
Takes three arguments:
URL: The endpoint being requested.
Success Callback: A function to run if the request succeeds.
Failure Callback: A function to run if the request fails.

The code shows how multiple requests depend on each other using callbacks.
This approach works but becomes messy with more requests, leading to callback hell.
To solve this, you can use Promises or async/await, which make the code cleaner and easier to read.

PROMISE CAN HAVE 3STAGES: pending, resolved nd rejected
HOW TO USE PROMISES*/
const request = fakeRequestPromise('yelp.com/api/coffee')
request  //this is an  object
.then(() =>{
  console.log('it worked')  //it will only run when request is resolved
})
.catch(() =>{   //it will only run when request is rejected
  console.log('promise rejected')  
  console.log('nooo error')  
 })
 /*
PROMISE CHAINING where i can dependent asynchronous actions(agr phela wala hua toh, dusra wala hoga)

const request = fakeRequestPromise('yelp.com/api/coffee1')
.then(() =>{
  console.log('it worked') 
  request fakeRequestPromise('yelp.com/api/coffee2') 
})                                                       //returning 2page so no need to nest the then
.then((data) =>{                                      //returning promise and i am calling .then on returned promise
  console.log('it worked page 2') 
  console.log(data)     
})
.catch((err) =>{               //no need to call catch for every promise, ek br call krdo, jb ek br run hoga code
  console.log('nooo error')                   //and second time nhi hoga, tb smjh jana ki second page nhi chla
  console.log(err)     
})                            
   
HOW TO CREATE PROMISES
*/




// resolve and reject are called inside of this function
// if we call resolve function, then promise object will be resolved
const delayedcolorchange = (newcolor , delay, doNext) =>{
  setTimeout( () => {
      document.body.style.color = newcolor;
      doNext && doNext();           //without using promise
  }, delay)
}
/*What is this function?

delayedcolorchange is a function that changes the text color of the webpage after a specific delay.
Parameters:

newcolor: The color to change the text to (e.g., "red", "pink").
delay: The amount of time (in milliseconds) to wait before changing the color.
doNext: A callback function that will be executed after the current task is done.
What happens inside the function?

setTimeout: Waits for the specified delay before running the code inside it.
document.body.style.color = newcolor;: Changes the text color of the webpage to the value of newcolor.
doNext && doNext();: Checks if doNext exists. If it does, the callback function (doNext) is executed.
*/
delayedcolorchange('red', 1000, () =>{
  delayedcolorchange('pink', 1000, () =>{
    delayedcolorchange('yellow', 1000, () =>{
      delayedcolorchange('purple', 1000, () =>{
        delayedcolorchange('brown', 1000, () =>{
        })
      })
    })
  }) 
})

const delaycolorchanged = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.color = color;            //creating promise
      resolve(); // Notify that the task is complete.
    }, delay);
  });
};


delaycolorchanged('brown', 1000)
  .then(() => delaycolorchanged('orange', 1000))      //using promises
  .then(() => delaycolorchanged('blue', 1000))
  .then(() => delaycolorchanged('pink', 1000))
  .then(() => delaycolorchanged('red', 1000))

/* 
CREATING A NEW PROMISE
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous task here (e.g., waiting for 2 seconds)
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Task completed successfully!"); // Fulfilled state
    } else {
      reject("Task failed."); // Rejected state
    }
  }, 2000);
});


new Promise: Creates a new Promise object.
(resolve, reject) => { ... }: A function that takes two arguments:
resolve: Call this when the task is successful.
reject: Call this when the task fails.
The setTimeout simulates an asynchronous operation. After 2 seconds:
If success is true, resolve() is called.
If success is false, reject() is called.

USING A PROMISE
myPromise
  .then((message) => {
    console.log("Success:", message); // Runs if resolved
  })
  .catch((error) => {
    console.log("Error:", error); // Runs if rejected
  })
  .finally(() => {
    console.log("Task is done."); // Runs in both cases
  });


READ THIS TO UNDERSTAND PROMISES WORKING
1. Function Creation
javascript
Copy code
const changeBackgroundColor = (color, delay) => {
What it does: Creates a function called changeBackgroundColor that changes the background color of the webpage after a delay.
Takes two inputs:
color: The color to change the background to (e.g., "red", "blue").
delay: How long to wait before changing the color (in milliseconds).
2. Returning a Promise
javascript
Copy code
  return new Promise((resolve, reject) => {
What it does: This function returns a Promise.
A Promise helps us handle tasks that take time (asynchronous tasks) in an organized way.
It has two outcomes:
resolve: Call this if the task is successful.
reject: Call this if the task fails.
3. Using setTimeout for Delay
javascript
Copy code
    setTimeout(() => {
What it does: Waits for a specific time (delay) before running the code inside the setTimeout.
Why use it?: To simulate a real-world delay, like waiting for a response from a server.
4. Checking and Changing the Color
javascript
Copy code
      if (color) {
        document.body.style.backgroundColor = color;
        resolve(`Changed to ${color}`);
What it does:
Check if a color is provided. If yes:
Changes the webpage background color (document.body.style.backgroundColor = color).
Calls resolve() to mark the Promise as successful.
Passes a message (e.g., "Changed to red") to the .then() method.
If no color is provided, it goes to the else block.
5. Handling Errors
javascript
Copy code
      } else {
        reject("No color provided!");
      }
What it does: If no color is provided, the Promise is marked as failed by calling reject() with an error message ("No color provided!").
Why?: To handle invalid inputs and notify the user that something went wrong.
Using the Function
6. Calling the Function
javascript
Copy code
changeBackgroundColor("red", 1000)
What it does: Calls the function to change the background to "red" after 1 second (1000 ms).
Returns a Promise: The returned Promise lets us handle the success or failure of this task.
7. Handling Success with .then()
javascript
Copy code
  .then((message) => {
    console.log(message);
    return changeBackgroundColor("blue", 1000);
  })
What it does:
If the first Promise is resolved (successful), the message (e.g., "Changed to red") is logged to the console.
Then, it calls the function again to change the background to "blue" after 1 second.
Why use .then()?
To chain another task after the first one finishes. This prevents messy, nested code.
8. Chaining More Promises
javascript
Copy code
  .then((message) => {
    console.log(message);
    return changeBackgroundColor("green", 1000);
  })
What it does:
Logs the success message for changing to "blue".
Calls the function again to change the background to "green" after 1 second.
Why chain?
Makes it easy to run tasks one after the other in order.
9. Final .then()
javascript
Copy code
  .then((message) => {
    console.log(message);
  })
What it does:
Logs the success message for changing to "green".
This is the last color change in the chain.
10. Handling Errors with .catch()
javascript
Copy code
  .catch((error) => {
    console.log("Error:", error);
  })
What it does:
If any of the Promises fail (e.g., no color is provided), it handles the error.
Logs the error message to the console (e.g., "Error: No color provided!").
  */