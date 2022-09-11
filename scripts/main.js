let crosses = document.querySelectorAll(".cross");
let zIndexCount = 3; //so that div is always on top

//funcion called from other js files to hide and show pop-ups
function showInfo(div) {
  console.log("clicked");
  div.style.display == "block"
    ? (div.style.display = "none")
    : (div.style.display = "block") &&
      (div.style.top = getRandom(10, 250) + "px") &&
      (div.style.right = getRandom(10, 250) + "px") &&
      (div.style.zIndex = zIndexCount);
  zIndexCount++;
}
// all the pop-up crosses
crosses.forEach((element) => {
  element.addEventListener("click", function () {
    parentDiv = element.parentElement;
    parentDiv.style.display == "block"
      ? (parentDiv.style.display = "none")
      : (sketchList.style.display = "block");
  });
});

//collapsible text
let collapsible = document.querySelectorAll(".collapsible");
for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
