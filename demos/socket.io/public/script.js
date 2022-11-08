const socket = io();
const randomID = ("a" + Math.random()).replace(".", "");
const partyZone = document.querySelector("#cursor-party-zone");
const cursorRect = document.createElement("div");
partyZone.append(cursorRect);
// console.log("from the browser");
window.addEventListener("mousemove", (event) => {
  //triggers on the whole window
  const { clientX, clientY } = event;
  cursorRect.setAttribute("class", "cursor-rect");
  cursorRect.style.top = `${clientY}px`;
  cursorRect.style.left = `${clientX}px`;
  const mouseData = {
    mouseX: clientX,
    mouseY: clientY,
    id: randomID,
  };
  // console.log(clientX, clientY);
  socket.emit("move-mouse", mouseData);
});

socket.on("update-mouse-pos", function (mouseData) {
  const mouseElement = document.getElementById(mouseData.id);
  // console.log(mouseData);
  if (!mouseElement) {
    // console.log("create div");
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "cursor-rect");
    newElement.setAttribute("id", mouseData.id);
    partZone.appendChild(newElement);
  } else {
    mouseElement.style.left = `${mouseData.mouseX}px`;
    mouseElement.style.top = `${mouseData.mouseY}px`;
  }
});
