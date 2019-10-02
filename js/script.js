/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array quotes made up of several quote objects 


var quotes = [

{quote: "Knowing is not enough; we must apply. Willing is not enough we must do", 
source: "Goethe", 
citation: "http://www.wiseoldsayings.com",
category: "Training"},

{quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.' ",     
source: "Muhammad Ali", 
citation: "http://www.wiseoldsayings.com",
category: "Training"},

{quote: "We don't believe that you should ever replace physical education. Even in a thousand years, a computer will never be able to do so.",
source: "Sal Khan", 
citation: "https://www.brainyquote.com",
category: "Training"},

{quote: "You only ever grow as a human being if you're outside your comfort zone.",
source: "Percy Cerutty", 
citation: "http://www.wiseoldsayings.com/training-quotes/",
category: "Training"},

{quote: "No citizen has a right to be an amateur in the matter of physical training what a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable.",
source: "Socrates", 
citation: "http://www.wiseoldsayings.com/training-quotes/",
category: "Training"},

   
{quote: "Be it ever so humble there's no place like home.", 
source: "unknown", 
citation: "http://www.wiseoldsayings.com",
category: "Family"},

{quote: "It is not flesh and blood but the heart which makes us fathers and sons.",
source: "Johann Schiller", 
citation: "http://www.wiseoldsayings.com",
category: "Family"},

{quote: "What greater thing is there for human souls than to feel that they are joined for life - to be with each other in silent unspeakable memories.",
source: "George Eliot",
citation: "http://www.wiseoldsayings.com",
category: "Family"},


{quote: "Mothers and daughters are closest, when daughters become mothers.", 
source: "unknown", 
citation: "http://www.wiseoldsayings.com",
category: "Family"},

{quote: "Be willing to be a beginner every single morning", 
source: "Meister Eckhart", 
citation: "http://www.wiseoldsayings.com",
category: "Ambition"},

{quote: "After climbing a great hill, one only finds that there are many more hills to climb.", 
source: "Nelson Mandela",
category: "Ambition"},

{quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
source: "Nelson Mandela", 
citation: "https://twitter.com/",
category: "Ambition"},

{quote: "Truth is everybody is going to hurt you: you just gotta find the ones worth suffering for.",
source: "Bob Marley", 
citation: "http://www.wiseoldsayings.com/being-hurt-quotes/"},

{quote: "Predicting rain doesn't count. Building arks does", 
source: "Warren Buffett", 
citation: "https://medium.com", 
year: "2001",
category: "Action"},

];

/*
function to pick a random object from the quotes array between 
index 0 and the last index of the quotes array
*/
function getRandomQuote(){
  maxInt = quotes.length;
  minInt = 0;
  //formula below adapted from https://developer.mozilla.org
  randNum = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt); 
  return quotes[randNum];
}

/*
function printQuote() builds the HTML string that will be displayed 
on the web page each time one requests a random quote.
The string will be displayed in the "quote-box" div´s inner sections 
of the classes - "quote", "source","citation" and "year"
 */
function printQuote(){
  var randQuote = getRandomQuote();
  var HTMLstring = "";

  HTMLstring += '<p class="quote"> ' + randQuote.quote + '</p>';

  /*
  Here, the paragraph opened by the p tag at the "source" class encloses the 
  span and the "citation" and "year" classes, this paragraph will be closed
  with the closing p tag at the end of this paragraph later.
  */

  HTMLstring += '<p class="source"> ' + randQuote.source; 


  // if statements to check if the quote has a citation and if it has a year:

  if (randQuote.citation){
    HTMLstring += '<span class="citation">' + randQuote.citation + '</span>';
      }

  if (randQuote.year){
    HTMLstring += '<span class="year">' + randQuote.year + '</span>';
    }  
    
  if (randQuote.category){
    HTMLstring += '<p class="category"> ' + randQuote.category;
    }  

  HTMLstring += ' </p>';

  //Seting the `innerHTML` of the `quote-box` div to the HTML string
  document.getElementById('quote-box').innerHTML = HTMLstring;
  
  //change background color by calling changeBgColor()
  changeBgColor();
  return HTMLstring;
}

//function to randomly select color and use it as the new background color
function changeBgColor(){
  var numbersAndLetters = '0123456789ABCDEF';
  var randomColor = '#';
  do {
      
    //formula below adopted from: https://stackoverflow.com/questions/1484506/random-color-generator
    for (var hexColor = 0; hexColor < 6; hexColor++) {
      randomColor += numbersAndLetters[Math.floor(Math.random() * 16)];} 

    //if color randomColor is white, select another:
    } while (randomColor==="#FFFFFF");

  
  document.body.style.backgroundColor = randomColor;
  }


/*"invoke", the `printQuote` function by triggering the EventListener each time
"show another quote" button is clicked. */
document.getElementById('loadQuote').addEventListener("click", printQuote,false);

//print a new quote with a random color after 20 seconds from when the last quote was displayed:
setInterval(function () {printQuote();},(20*1000));
  
