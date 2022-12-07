const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "amazing.png" });
  await browser.close();
  //   const [el] = await page.$x('//*[@id="video-title"]');
  //   const src = await el.getProperty("src");
  //   const srcTxt = await src.jsonValue();

  //   console.log({ srcTxt });
  //   console.log("-------FINISH-------");
}

scrapeProduct("https://learnwebcode.github.io/practice-requests/");
console.log("-------FINISH-------");

// const axios = require("axios");
// const cheerio = require("cheerio");
// const express = require("express");
// dlMQPn sc-9cbb12cb-1 JtcXN
// const PORT = 8000;
// const URL = "https://www.theguardian.com/international";

// axios(URL).then((res) => {
//   const html = res.data;
//   console.log(html);
// });

// const app = express();
// app.listen(PORT, () => {
//   console.log(`Server running on PORT ${PORT}`);
// });
