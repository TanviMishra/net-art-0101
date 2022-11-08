/* scripts from our own package */
import openTwitterWithScraper from "./src/openInstaWithScraper.js";
import collectPost from "./src/collectPosts.js";
import savePosts from "./src/savePosts.js";
// import searchTitle from "./website/bookLinks.js";
import fs from "fs";

/* runtime */
(async () => {
  let rawdata = fs.readFileSync("./data/books.json");
  let rawplacedata = fs.readFileSync("./data/places.json");
  let places = JSON.parse(rawplacedata);
  let bannedBooks = JSON.parse(rawdata);
  let bannedBooksShort = [];
  // bannedBooks.forEach((book) => {
  //   {
  //     places.forEach((place) => {
  //       if (
  //         place.locName == book.State &&
  //         book.State != "Mississippi" &&
  //         book.State != "Florida" &&
  //         book.State != "Tennessee" &&
  //         book.State != "Pennsylvania" &&
  //         book.State != "Texas"
  //       )
  //         bannedBooksShort.push(book);
  //     });
  //   }
  // });
  // let short = JSON.stringify(bannedBooksShort);
  // fs.writeFileSync("./data/bannedBooksShort.json", short);
  // for (let i = 0; i < bannedBooksShort.length; i++) {
  //   console.log(i);
  //   let SEARCH_TERM = bannedBooksShort[i].Title;
  //   // let SEARCH_TERM = "BLODSAW";

  //   // step 1: launch puppeteer browser
  //   let page = await openTwitterWithScraper(SEARCH_TERM);

  //   // step 2: scrape and parse the tweets that turn up as search results
  //   let collectedPost = await collectPost(
  //     page,
  //     {
  //       postLimit: 5,
  //     },
  //     SEARCH_TERM
  //   );
  //   // step 3: save the tweets into a local .json file
  //   savePosts(collectedPost, SEARCH_TERM);
  // }
  // searchTitle();
  // console.log(title);
})();
