const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

//show new quote
function newQuote() {
  const quote =
    apiQuotes[Math.floor(Math.random() * Math.floor(apiQuotes.length))];
  console.log(quote);
  quoteText.innerHTML = quote.text;

  //Handling the NULL values for author
  authorText.innerHTML = !quote.author ? "Unknown" : quote.author;

  //handling long quote texts
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
}

//Get Quotes from API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    loading();
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes);
    newQuote();
    complete();
  } catch (err) {
    //Catch Error Here
  }
}

//tweet the quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${
    quoteText.textContent + "  - " + authorText.textContent
  }`;
  window.open(tweetUrl, "_blank");
}

//Event Listeners

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//on Load
getQuotes();
