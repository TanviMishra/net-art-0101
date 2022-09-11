let thumbnail = document.querySelector("#textAdventure");
let info = document.querySelector("#textAdventureInfo");
info.style.display = "none";
thumbnail.addEventListener("click", function () {
  console.log("clicked");
  showInfo(info);
});
