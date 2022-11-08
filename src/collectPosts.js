// step 2: scrape Posts and parse them into data points in JSON format
async function collectPosts(page, opts, searchTerm) {
  let collectedPosts = [];
  let isLooping = true;
  let bookName = searchTerm;
  // do {
  await page.waitForTimeout(2000);
  const newPosts = await page.$$eval("div._aagv", parsePosts);
  newPosts.book = bookName;
  collectedPosts.push(...newPosts);
  collectedPosts = filterUniquePosts(collectedPosts);
  isLooping = checkLoopCondition(collectedPosts, opts);
  // await page.mouse.wheel({ deltaY: 1350 });
  // } while (isLooping);
  return collectedPosts;
}

// step 2.1 parse HTML Post data into a JS object format
function parsePosts(HTMLPosts) {
  const JSONPosts = HTMLPosts.map(function (HTMLPost) {
    console.log(HTMLPost);
    const Post_URL = HTMLPost.querySelector("img").src;
    const Post_altText = HTMLPost.querySelector("img").alt;
    const JSONPost = {
      text: Post_altText,
      url: Post_URL,
    };
    return JSONPost;
  });
  return JSONPosts;
}

function filterUniquePosts(Posts) {
  // function adapted from: https://stackoverflow.com/questions/43245563/filter-array-to-unique-objects-by-object-property
  return Posts.filter((Post, index, self) => {
    const originalPostIndex = self.findIndex((tw) => tw.text === Post.text);
    return index === originalPostIndex;
  });
}

function checkLoopCondition(Posts, opts) {
  //if this function returns false, we stop looping
  if (opts.postLimit) {
    // stop scraping when we hit the PostLimit we set
    return Posts.length < opts.postLimit;
  } // you can add additional measures to stop looping as else if statements
  else {
    return true; // if no stop conditions are met, just keep looping
  }
}

export default collectPosts;
