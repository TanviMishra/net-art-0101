import fs from "fs"; //lets you read/write files

function savePosts(posts, searchTerm) {
  if (posts.length > 0) {
    let newSearch = formatSearchTerm(searchTerm);
    const filename = `./data/books_shorts/${newSearch}.json`;
    fs.writeFileSync(filename, JSON.stringify(posts));
    // console.log(`saved ${posts.length} posts to ${filename}`);
  }
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
export default savePosts;
