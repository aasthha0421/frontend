// dom(document object model) is a access portal into contents of webpage from js
// document object is the entry point into world of dom, it contains representation all content of a page


// write console.dir(document)   which shows all object properties in it


//now we are using selecting methods , getelementbyid, getelementbyClassname, getelemementbytagname
const image = document.getElementById('unicorn')     
/*first we are fetching img element of this id (uniorn) from html and then saving it in js variable(image),
so we can manipulate it later 


getelementbytagname  returns html collection, it means jitni br woh tag use hua hoga, woh sare element mil jayenge
for ex; use img tag, we will get all images who are using img tag in that webpage*/
const images = document.getElementsByTagName('img')
for(let img of images){
    img.src='https://images.unsplash.com/photo-1550747528-cdb45925b3f7?w=200'   
// now we are manipulating every img source to first image's source, so now every img in html looks same now
}

// element in js is object that we are getting back has all the properties, lets use getelementbyclassname
const womenimg = document.getElementsByClassName('women')
for( let img of womenimg){
    img.src= "https://i.pinimg.com/736x/23/76/dd/2376dd3095d1d18ad259926eb0c4ac7f.jpg"
}


/* now queryselectorall which gives collection of matching elements unlike queryselector
document.queryselector('p')    for tags
document.queryselector('#banner')    for id
document.queryselector('.women')      for class
document.queryselector('p a')     to get anchor tag inside para tag

EXAMPLE OF PRINTING ANCHOR TAG LINKS
const links = document.queryselectorall('p a')          queryselectorall mostly used for tags
for( let link of links){
   console.log(link.href)
}

document.queryselector('a[title="java"])     to find anchor tag with attribute of title=java
selecting by attribute is called CSS ATTRIBUTE SELECTOR




now MANIPULATING THE OBJECTS BY USING TEXTCONTENTS, INNERTEXT, INNERHTML
Key Difference in Simple Terms:
textContent: Gets all the text, no matter if it’s hidden or visible.
innerText: Gets only the text that is visible to the user.
Use textContent when you care about the raw text, and innerText when you care about what’s displayed to the user.*/
document.querySelector('.heading').innerText = 'practice work'

/*now difference between innerhtml and innertext
 innerText:
What it does: Gets or sets the text inside an element, but only the visible text.
No HTML Tags: It ignores HTML tags and only works with plain text.
Considers CSS: It takes into account the visibility of the text (e.g., hidden text isn’t included).

innerHTML:
What it does: Gets or sets the entire content of an element, including HTML tags.
HTML Tags Included: It gives you the raw HTML structure inside the element.
For Updating Content: Useful if you want to add or change HTML inside an element.
*/ 

const elements = document.querySelectorAll(".example");

for (let element of elements) {
    console.log(elements.innerText); // this is the way of using selectorall with innertext
}

//to overwrite , we can use innerhtml to form superscript using sup tag
document.querySelector('h1').innerHTML += '<sup>mainheading</sup>'
// innerhtml recoginses html tags but innertext doesnt
document.querySelector('h2').innerText += '<sup>mainheading</sup>'

/* +=:  IMPORTANT!!!!

Adds new content to the existing content of the <h1> element without removing the original content. */
const eggImg = document.querySelector('img');
eggImg.src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';  //to change source of img
eggImg.alt = 'chicken';     //to change alt of it  

/* using set and getattribute() to change attributes, using same code above--IMPPPP
const eggImg = document.querySelector('img');
eggImg.setAttribute('src', 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200');
eggImg.setAttribute('alt', 'chicken');
//setattribute is used to change the value of attribute and getattribute is used to get currentvalues of attributes
const eggImg = document.querySelector('img');

// Get the 'src' attribute
const srcValue = eggImg.getAttribute('src');
console.log( srcValue);

// Get the 'alt' attribute
const altValue = eggImg.getAttribute('alt');
console.log('Alt text:', altValue);
/*const eggImg = document.querySelector('img');

// Get and log the 'src' attribute
console.log(eggImg.getAttribute('src'));       WE CAN USE THIS WAY AS WELL

// Get and log the 'alt' attribute
console.log(eggImg.getAttribute('alt')); */



// now change styles of tags
const h1 = document.querySelector('h1')
h1.style.color='pink'
h1.style.fontSize = '5rem'     //in js font-size or any css property will be written like fontSize. IMP!!!

// to get the current values of something, as styles can get overwritten, use this
window.getComputedStyle(h1).color
/* The window.getComputedStyle() method in JavaScript is used to retrieve the final computed style of an element,
 including styles set by CSS, inline styles, and inherited styles.

it is a actual element object in DOM

const spans = document.querySelectorAll('span');
for (let i = 0; i < spans.length; i++) {           IMP METHOD FOR USING TWO ARRAYS WITH style!!
  spans[i].style.color = colors[i];
}
*/



// IMPPPPPPPPPPPPPPPPPPPP
// Create a new <p> element
let newParagraph = document.createElement("p");

// Set some content for the new paragraph
newParagraph.textContent = "This is a newly created paragraph!";

// Append the new paragraph to the body of the document
document.body.appendChild(newParagraph);

// applying two classes in js by using classlist
const h2= document.querySelector('h2')
h2.classList.add('purple')    //so it adds class=purple for h2, u can style purple class in css by .purple
h2.classList.add('border')   //adding another class border with after purple so it has 2classes now
h2.classList.toggle('purple')   //it removes if the purple class is already present and adds if purple isnt present

/*

const lis = document.querySelectorAll('li')
for (let li of lis) {
  li.classList.toggle('highlight');          to iterate over elements in a tag use forloop IMPPP
}
  */

h2.parentElement          //tells the parent of this element which is body tag
h2.children                   //tells other tags comes under it
h2.childElementCount        //tells no of tags come under it
h2.previousElementSibling           //tells previous element tag
h2.nextElementSibling             //tells next element tag
/*Use previousElementSibling if you only care about navigating HTML elements (ignoring text nodes or comments).
Use previousSibling if you need to handle all types of sibling nodes, including text or comment nodes. 



how we create new elements and append/adding it to our html webpage*/
const h3 = document.createElement('h3')
h3.innerText = 'hello this is new'
document.body.append(h3)  //adding h3 at the end of body tag

const imagess = document.createElement('img')
imagess.src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200'
document.body.prepend(imagess)     //adding img at first place of body tag

h1.insertAdjacentElement('afterend', h2)  
/*it means adding h2 after h1(kahi bhi add kr skte h with this method, 
bs jiske aas pass dalna h woh likho like we used h1 here */

for (let i = 0; i < 100; i++) {
  const btn = document.createElement('button'); // Create a button
  btn.innerText = 'Click'; // Set button text
  document.body.append(btn); // Append button to the body
}


// now using removechild(for this we have to parent of that element then remove it)and remove method
const picture = document.querySelector('img')
picture.parentElement.removeChild(picture)
// now use remove 
const pictures = document.querySelector('.women')
pictures.remove()

const container = document.querySelector('#container');
const url ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(i=1;i<=50;i++){
const pokemon = document.createElement('img')
pokemon.src= `${url}${i}.png`
container.appendChild(pokemon);
}

const btn = document.querySelector('#v1')
btn.onclick = function(){
  console.log('new button')
}
const secbtn = document.querySelector('#v2')
function scream(){
  console.log('aghhhhhhhhhhhhh')     //we can use arrow function as well to shorten
}
secbtn.onmouseenter = scream;   
// BEST METHOD INSTEAD OF INLINE AND ONCLICK, USE ADDEVENTLISTENER
const btn3 = document.querySelector('#taa')

function twist(){
  console.log('twistttttt')
}
function shout(){
  console.log('shoutttt')
}

// now we can use two or more callbacks by using eventlistener
btn3.addEventListener('click', twist,{once: true})   
 //ab ye wala event ek br hi print hoga uske bd nhi, chahe click krlo, we can use these ptions with eventlistener
btn3.addEventListener('click', shout)

btn3.addEventListener('click', () =>{    //using arrowfunction to add one more event
  console.log('why')
})


// RANDOM COLOR GENERATOR
const h4 = document.querySelector('h4');
const btn4 = document.querySelector('#RANDOM');
btn4.addEventListener('click',() => {
 
const r = Math.floor(Math.random()*255);
const g = Math.floor(Math.random()*255);
const b = Math.floor(Math.random()*255);
const newcolor = `rgb(${r}, ${g},${b})`;
// we are generating rbg colors by math.random technique
document.body.style.backgroundColor = newcolor;
//accessing body thorugh document(this is the easy way)and changing its color to random color
h4.innerText = newcolor ;
})

// using this keyword for events
function randomcolor(){
const r = Math.floor(Math.random()*255);
const g = Math.floor(Math.random()*255);
const b = Math.floor(Math.random()*255);
return `rgb(${r}, ${g},${b})`;    //as it should return a value whenever it is called
}

const buttons = document.querySelectorAll('#this')
for(let button of buttons){
  button.addEventListener('click', () => {
  button.style.backgroundColor = randomcolor();
  button.style.color= randomcolor();   //changing color of text inside of button
})
}
// using keyword this, so colorise callback can work for buttons as well
function colorise(){
  this.style.backgroundColor = randomcolor();
  this.style.color= randomcolor();
}
const h4s = document.querySelectorAll('#new')
for(let hfour of h4s){
  hfour.addEventListener('click', colorise); 
}
/*colorise: Passing the function name without parentheses (colorise) tells JavaScript to execute it later, 
when the event (click) occurs. This is the correct approach.

colorise(): Using parentheses calls the function immediately when the code runs, which is not the intended behavior
 for event handling. The result of colorise() (usually undefined) would be assigned as the event listener, 
 which causes no functionality on a click. */


//  IMPPPPPPPPPPPPPPPPP
let myUl = document.getElementById("myUl");
let item = document.createElement("li");
 item.textContent = "CSS";

 // target position
 //   let pos = myUl.firstElementChild.nextElementSibling;
let pos = myUl.lastElementChild.previousElementSibling;
 myUl.insertBefore(item, pos);
 console.log(pos);
// </script>
// </body>
// </html>
// <!-- insert in any position - 
// insertBefore(item,position)
// -->