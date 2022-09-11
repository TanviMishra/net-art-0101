let initialSketches = document.querySelector("#initialSketches");
let sketchList = document.querySelector("#sketchList");
let genIdea = document.querySelector("#genIdea");
let genDiv = document.querySelector("#genDiv");
let momIdea = document.querySelector("#momIdea");
let momDiv = document.querySelector("#momDiv");
let mazeIdea = document.querySelector("#mazeIdea");
let mazeDiv = document.querySelector("#mazeDiv");
let scrnIdea = document.querySelector("#scrnIdea");
let scrnDiv = document.querySelector("#scrnDiv");
let authIdea = document.querySelector("#authIdea");
let authDiv = document.querySelector("#authDiv");
let genIdeaCount = 0;
let momIdeaCount = 0;
let mazeIdeaCount = 0;
let scrnIdeaCount = 0;
let authIdeaCount = 0;
let genArr = [
  "assets/sketch-ideas/cartography2.jpeg",
  "./assets/sketch-ideas/cartography1.jpeg",
  "./assets/sketch-ideas/carto3.jpg",
  "./assets/sketch-ideas/carto4.jpeg",
  "./assets/sketch-ideas/marble.jpg",
];
let momArr = [
  "./assets/sketch-ideas/letters.jpg",
  "./assets/sketch-ideas/postcards.jpg",
];
let mazeArr = [
  "./assets/sketch-ideas/maze.jpg",
  "./assets/sketch-ideas/maze2.jpg",
  "./assets/sketch-ideas/maze3.jpg",
];
let scrnArr = [
  "./assets/sketch-ideas/holes.jpg",
  "./assets/sketch-ideas/holes2.jpg",
];
let authArr = ["./assets/sketch-ideas/times.jpg"];
sketchList.style.display = "none";
initialSketches.addEventListener("click", function () {
  showInfo(sketchList);
});
genIdea.addEventListener("click", function () {
  genIdeaCount = sketchImgs(genArr, genDiv, genIdeaCount);
});
momIdea.addEventListener("click", function () {
  momIdeaCount = sketchImgs(momArr, momDiv, momIdeaCount);
});
mazeIdea.addEventListener("click", function () {
  mazeIdeaCount = sketchImgs(mazeArr, mazeDiv, mazeIdeaCount);
});
scrnIdea.addEventListener("click", function () {
  scrnIdeaCount = sketchImgs(scrnArr, scrnDiv, scrnIdeaCount);
});
authIdea.addEventListener("click", function () {
  authIdeaCount = sketchImgs(authArr, authDiv, authIdeaCount);
});
function sketchImgs(imgArray, genDiv, count) {
  if (count == 0) {
    imgArray.forEach((imgURL) => {
      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "pop-up-child");
      imgDiv.style.top = getRandom(10, 500) + "px";
      imgDiv.style.right = getRandom(10, 600) + "px";
      let img = document.createElement("img");
      img.setAttribute("src", imgURL);
      imgDiv.append(img);
      genDiv.append(imgDiv);
    });
  }
  if (count % 2 == 0) {
    genDiv.style.display = "block";
  } else if (count % 2 == 1) {
    genDiv.style.display = "none";
  }
  count++;
  return count;
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
