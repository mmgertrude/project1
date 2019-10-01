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
  {quote: "quote1", source: "quote1source-speaker", citation: "quote1cit-place", year: "quote1year"},
{quote: "quote2", source: "quote2source-speaker", citation: "quote2cit-place", year: "quote2year"},
{quote: "quote3", source: "quote3source-speaker", citation: "quote3cit-place", year: "quote3year"},
{quote: "quote4", source: "quote4source-speaker", citation: "quote4cit-place", year: "quote4year"},
{quote: "quote5", source: "quote5source-speaker", citation: "quote5cit-place", year: "quote5year"},
{quote: "quote6", source: "quote6source-speaker", citation: "quote6cit-place", year: "quote6year"},
{quote: "quote7", source: "quote7source-speaker", year: "quote7year"},
{quote: "quote8", source: "quote8source-speaker", year: "quote8year"},
{quote: "quote9", source: "quote9source-speaker", year: "quote9year"},
{quote: "quote10", source: "quote10source-speaker", citation: "quote10cit-place"},
{quote: "quote11", source: "quote11source-speaker", citation: "quote11cit-place"},
{quote: "quote12", source: "quote12source-speaker", citation: "quote12cit-place"},
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

  HTML_string += '<p class="quote"> ' + randQuote.quote + '</p>';
  HTML_string += '<p class="source"> ' + randQuote.source + '</p>';


  if (randQuote.citation){
      HTML_string += '<p class="citation"> ' + randQuote.citation + '</p>';}

  if (randQuote.year){
      HTML_string += '<p class="year"> ' + randQuote.year + '</p>';}
      
  document.getElementById('quote-box').innerHTML = HTML_string;
  return HTML_string;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.