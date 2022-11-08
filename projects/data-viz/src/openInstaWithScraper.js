import puppeteer from "puppeteer";

export default async function openTwitterWithScraper(searchTerm) {
  const formattedSearchTerm = formatSearchTerm(searchTerm) + "book";
  let url = `https://www.instagram.com/explore/tags/${formattedSearchTerm}/`;
  const browser = await puppeteer.launch({
    // launch options
    headless: false, //so we can see the scraping in action
    defaultViewport: { width: 1440, height: 900 }, //force desktop CSS
  });
  const page = await browser.newPage(); //create new tab
  // send the puppeteer browser to our twitter search url
  await page.goto(url, { waitUntil: "networkidle0" });
  // now we return the puppeteer page object
  // so it can be used in our other functions
  return page;
  // let url;
  // page.waitForSelector("div._aagv"); //.then(() => console.log("url found "));
  // for (url of [
  //   `https://www.instagram.com/explore/tags/${formattedSearchTerm}/`,
  //   `https://www.instagram.com/explore/tags/${formattedSearchTerm}book/`,
  // ]) {
  //   await page.goto(url, { waitUntil: "domcontentloaded" });
  // }
  // await browser.close();

  // await page.goto(url, { waitUntil: "domcontentloaded" });
  // // console.log(page);
  // return page;
}
function formatSearchTerm(searchTerm) {
  searchTerm = searchTerm.split("(")[0].toLowerCase().replace(/\s+/g, "");
  if (searchTerm.split(":")) {
    searchTerm = searchTerm.split(":")[0];
  }
  searchTerm = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
  // console.log(searchTerm);
  return searchTerm;
}
