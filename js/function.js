// Created variables for DOM elements
const spinner = document.getElementById("spinner");
const quote_text_container = document.getElementById("quote");
const author = document.getElementById("author_name");
const tweetsBtn = document.getElementById("tweets");
const linkedIn = document.getElementById("linkedIn");
const nextBtn = document.getElementById("next");

//New quote Variable
let apiQuotes = [];

// When user click on Next
nextBtn.addEventListener("click", newQuote);

// Add Tweets
tweetsBtn.addEventListener("click", () => {
  const tweetText = encodeURIComponent(quote_text_container.textContent);
  const tweetAuthor = encodeURIComponent(author.textContent);
  const tweetLink = `https://twitter.com/intent/tweet?text= ${tweetText}&hashtags=${tweetAuthor}`;
  window.open(tweetLink, "_blank");
});
// Share on LinkedIn
linkedIn.addEventListener("click", () => {
  const linkedInText = encodeURIComponent(quote_text_container.textContent);
  const linkedInAuthor = encodeURIComponent(author.textContent);
  const linkedInShare = `https://www.linkedin.com/feed/?shareActive=true&text=${linkedInText} %20-${linkedInAuthor}`;
  window.open(linkedInShare, "_blank");
});
// Randomize quotes
function newQuote() {
  // Randomize quotes from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  if (quote.author) {
    author.textContent = quote.author;
  } else {
    author.textContent = "Unknown";
  }

  if (quote.quote.length > 80) {
    quote_text_container.classList.add("quote");
    quote_text_container.textContent = quote.quote;
  } else {
    quote_text_container.textContent = quote.quote;
    quote_text_container.classList.remove("quote");
  }
}

// function to change text with API
async function getQuotes() {
  try {
    const apiUrl = "https://dummyjson.com/quotes";
    let response = await fetch(apiUrl).then((res) => res.json());
    apiQuotes = response.quotes;

    if (!apiQuotes.length > 0) {
      spinner.classList.add("spin");
    } else {
      newQuote();
      spinner.classList.remove("spin");
    }
  } catch (error) {
    spinner.classList.add("spin");
  }
}

getQuotes();

// Code using Axios and Joke Api request
/*
// Created variables for DOM elements
const quote_text_container = document.getElementById("quote");
const author = document.getElementById("author_name");
const tweetsBtn = document.getElementById("tweets");
const linkedIn = document.getElementById("linkedIn");
const nextBtn = document.getElementById("next");

//New quote Variable
let apiQuotes = [];

// When user click on Next
nextBtn.addEventListener("click", newQuote);

// Add Tweets
tweetsBtn.addEventListener("click", () => {
  const tweetText = encodeURIComponent(quote_text_container.textContent);
  const tweetAuthor = encodeURIComponent(author.textContent);
  const tweetLink = `https://twitter.com/intent/tweet?text= ${tweetText}&hashtags=${tweetAuthor}`;
  window.open(tweetLink, "_blank");
});
// Share on LinkedIn
linkedIn.addEventListener("click", () => {
  const linkedInText = encodeURIComponent(quote_text_container.textContent);
  const linkedInAuthor = encodeURIComponent(author.textContent);
  const linkedInShare = `https://www.linkedin.com/feed/?shareActive=true&text=${linkedInText} %20-${linkedInAuthor}`;
  window.open(linkedInShare, "_blank");
});
// Randomize quotes
function newQuote() {
  // Randomize quotes from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  if (quote.category) {
    author.textContent = quote.category;
  } else {
    author.textContent = "Unknown";
  }

  if (quote.joke.length > 80) {
    quote_text_container.classList.add("quote");
    quote_text_container.textContent = quote.joke;
  } else {
    quote_text_container.textContent = quote.joke;
    quote_text_container.classList.remove("quote");
  }
}

// function to change text with API
async function getQuotes() {
  try {
    const apiUrl =
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single&amount=10";
    let response = await axios.get(apiUrl);
    apiQuotes = response.data.jokes;
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    alert(error);
  }
}

getQuotes();




*/
