/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * @constant`quotes` array
 ***/
const quotes = [
  {
    quote:
      "Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.",
    source: "Oscar Wilde",
    citation: "The Critic as Artist",
    year: 1881,
  },
  {
    quote: "Only those who dare to fail greatly can ever achieve greatly.",
    source: "Robert F. Kennedy",
  },
  {
    quote:
      "To accomplish great things we must not only act, but also dream; not only plan, but also believe.",
    source: "Anatole France",
    citation: "Introductory speech",
    year: 1896,
  },
  {
    quote: "Achievement has no color",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "For every minute you are angry you lose sixty seconds of happiness.",
    source: "Ralph Waldo Emerson",
  },
];
/**
 * @var `interval` - To set number of seconds, to display next quote;
 */
let interval;
/***
 * @function `getRandomQuote`;
 *  @return Return random quote from quotes array;
 ***/
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

/**
 * @constant rgb1, rgb2, rgb3 - Store random number between 0 and 255;
 * @function To generate random body(DOM - element) background color;
 */
const changeBackground = () => {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);

  document.querySelector(
    "body"
  ).style.backgroundColor = `rgba(${rgb1}, ${rgb2}, ${rgb3})`;
};

/***
 *
 * @function `printQuote` - Reder random quote;
 * @var `interval` - Sets seconds to automatically display next quote;
 * @function `changeBackground` - Call to change background when every next quote is redered;
 * @constant `quote` - Holds returned random quote object from  @function `getRandomQuote`;
 * @var `html` - To store random quote HTML structure up on if statement;
 * @constant `container` - To store HTML element by CSS class`.container`;
 ***/
const printQuote = () => {
  interval = 8000;
  changeBackground();
  const quote = getRandomQuote();
  let html = ``;
  const container = document.querySelector(".container");
  if (quote["citation"] || quote["year"]) {
    html = `<div id="quote-box" class="quote-box">
      <p class="quote">${quote.quote}</p>
      <p class="source">${quote.source}<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span></p>
      </div>`;
  } else {
    html = `<div id="quote-box" class="quote-box">
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}</p>
    </div>`;
  }
  container.innerHTML = html;
};
/**
 * Call @function `printQuote`
 */
printQuote();

/**
 * @function Automatically switch quote
 */
setInterval(function () {
  printQuote();
}, interval);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
