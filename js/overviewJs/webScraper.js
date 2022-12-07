const cheerio = require("cheerio");
const axios = require("axios");
const url =
  "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

async function getGenre() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const genre = $("h1").text();

    console.log(genre);
  } catch (err) {
    console.error(err);
  }
}

getGenre();
