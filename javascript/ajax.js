/* async is a keyword or agr ham kbhi kisi function ke aage isko lga dete h na, it automatically returns a 
promise 

if function returns a value, then promise will be resolved with that value
if function returns a exception or throw, then promise will be rejected */
const sing = async () =>{
    return 'la la la'
}

sing().then( async (data) =>{
   console.log(`now the promise is returning data ${data}`)
})
/* if(!username || !password) throw 'error' means if any of the two is missing then throw error

await keyword will pause the execution of function, waiting for promise to be resolved
await and async are used together as pairs*/
const delayedcolorchange = (color, delay)=>{
    return promise((resolve, rejected) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color ;
            resolve();
        }, delay)
    })
}
/*async function rainbow:

This declares a function named rainbow and marks it as async, meaning it can handle asynchronous tasks using await.
await delayedcolorchange('red', 1000):

Wait for the delayedcolorchange function to:
Change the background to 'red'.
Delay for 1000 milliseconds (1 second) before continuing to the next line.
Subsequent await Statements:

Similarly, the background changes to:
'pink' after another 1-second delay.
'purple' after another 1-second delay.
'yellow' after another 1-second delay.
Each await ensures that the next color change happens only after the previous one is complete. */

async function rainbow() {
    await delayedcolorchange('red', 1000)
    await delayedcolorchange('pink', 1000)
    await delayedcolorchange('purple', 1000)
    await delayedcolorchange('yellow', 1000)
    return 'all done'
}
/* Use printrainbow to Run rainbow:
The printrainbow function calls rainbow, waits for it to finish, and then prints the message 'end of rainbow'. */

async function printrainbow(){
    await rainbow();
// Calls the rainbow function and waits for it to complete (i.e., for all the colors to change sequentially).
    console.log('end of rainbow')
}
// for handling errors in async , use try and catch

/* IMPPPPPPPPPPPPPPPP
 we can convert json data into js object by using JSON.parse(data)
 for vice versa, we use JSON.stringify 
 
 hoppscotch nd postman used to test the api*/