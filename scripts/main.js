let initialSketches = document.querySelector("#initialSketches");
let sketchList = document.querySelector("#sketchList");
sketchList.style.display = "none";
initialSketches.addEventListener("click", showDiv);
function showDiv() {
  sketchList.style.display == "block"
    ? (sketchList.style.display = "none")
    : (sketchList.style.display = "block") &&
      (sketchList.style.top = getRandom(10, 250) + "px") &&
      (sketchList.style.right = getRandom(10, 250) + "px");
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
