/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array quotes made up of several quote objects 


var quotes = [
{quote: "After climbing a great hill, one only finds that there are many more hills to climb.", 
source: "Nelson Mandela"},

{quote: "Knowing is not enough; we must apply. Willing is not enough we must do", 
source: "Goethe", 
citation: "http://www.wiseoldsayings.com/training-quotes/"},

{quote: "Mothers and daughters are closest, when daughters become mothers.", 
source: "unknown", 
citation: "http://www.wiseoldsayings.com/mother-and-daughter-quotes/"},

{quote: "Be willing to be a beginner every single morning", 
source: "Meister Eckhart", 
citation: "http://www.wiseoldsayings.com/starting-over-quotes/"},

{quote: "Truth is everybody is going to hurt you: you just gotta find the ones worth suffering for.",
source: "Bob Marley", 
citation: "http://www.wiseoldsayings.com/being-hurt-quotes/"},

{quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
source: "Nelson Mandela", 
citation: "https://twitter.com/"},

{quote: "We don't believe that you should ever replace physical education. Even in a thousand years, a computer will never be able to do so.",
source: "Sal Khan", 
citation: "https://www.brainyquote.com"},

{quote: "Predicting rain doesn't count. Building arks does", 
source: "Warren Buffett", 
citation: "https://medium.com", 
year: "2001"},

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

  HTMLstring += ' </p>';

  //Seting the `innerHTML` of the `quote-box` div to the HTML string
  document.getElementById('quote-box').innerHTML = HTMLstring;
  return HTMLstring;
}

/*"invoke", the `printQuote` function by triggering the EventListener each time
"show another quote" button is clicked. */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


