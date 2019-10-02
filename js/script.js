/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

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


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  maxInt = quotes.length;
  minInt = 0;
  //formula below adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random -->
  randNum = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt); 
   //console.log(quotes[randNum].quote);
  return quotes[randNum];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var randQuote = getRandomQuote();
  var HTML_string = "";

  // HTML_string += '<p class="quote"> ' + randQuote.quote + '</p>';
  // HTML_string += '<p class="source"> ' + randQuote.source + '</p>';

  
  var outputQuote = randQuote.quote;
  var outputSource = randQuote.source;
  var outputCitation = "";
  var outputYear = "";


  if (randQuote.citation){
    //outputCitation = randQuote.citation;
    outputCitation = '<span class="citation">' + randQuote.citation + '</span>';
      }

  if (randQuote.year){
    outputYear = '<span class="year">' + randQuote.year + '</span>';
    }      

  HTML_string = '<p class="quote">' + randQuote.quote + '</p>' + '<p class="source">' + randQuote.source  + outputCitation  + outputYear + '</p>';

  document.getElementById('quote-box').innerHTML = HTML_string;
  console.log(HTML_string);
  return HTML_string;
}

//how HTML_string should be:
// '<p class="quote">' + randQuote.quote  + '</p><p class="source">' + Patrick McKenzie + '<span class="citation">' + Twitter</span><span class="year">2016</span></p>'

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.