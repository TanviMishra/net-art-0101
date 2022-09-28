let width, height, shape, layerUnit, layers, tempCol;
let text = "A responsive site: resize the page to add some shappeees";
let layerNum = 6;
let bg = "#db9731";
colArr = [
  "#3f2735",
  "#434ba0",
  "#c03b31",
  "#325f48",
  "#e8a7ab",
  "#efd289",
  "#c03b31",
];
let content = document.querySelector("#content");
let sky = document.querySelector("#sky");
const startCount = 6;
let colIndex = 0;
let minW = 100 / startCount;
let maxW = 100 / (startCount - 4);
let minH = 60;
let maxH = 100;
function redefineDimension() {
  width = Math.max($(document).width(), $(window).width());
  height = Math.max($(document).height(), $(window).height());
}
function layerUnitCalc() {
  layerUnit = 100 / (layerNum + 1); //done after first height calc;
}
function checkFnCall(state) {
  let fn;
  if (!shape) {
    shape = state; //state is temp var and shape is global, permanent
    fn = 0;
  } else if (shape == state) {
    fn = 1;
  } else if (shape != state) {
    shape = state;
    fn = 0;
  }
  return fn;
}
function checkRatio() {
  let state; //local variable
  if (height / width < 0.4) {
    // long view
    state = "trees";
  } else if (height / width < 0.8) {
    //horizontal view
    state = "mountain";
  } else {
    //squarish
    state = "city";
  }
  return checkFnCall(state);
}
function layerCall(col) {
  layers = document.querySelectorAll(".layers");
}
function drawMountain(col) {
  triangle = document.createElement("div");
  triangle.setAttribute("class", "triangle");
  triangle.style.backgroundColor = colArr[colIndex];
}
function drawTree(col) {
  col2 = col + 1;
  leaves = document.createElement("div");
  leaves.setAttribute("class", "leaves");
  let radius = "50%";
  let height = "50%";
  leaves.style.width = radius;
  leaves.style.height = radius;
  leaves.style.backgroundColor = colArr[col];
  trunk = document.createElement("div");
  trunk.style.width = "10px";
  trunk.style.height = height;
  trunk.setAttribute("class", "trunk");
  trunk.style.backgroundColor = colArr[col];
}
function drawCity() {
  city = document.createElement("div");
  city.setAttribute("class", "city");
  city.style.backgroundColor = colArr[colIndex];
}
function shapeCheck(shapeContain) {
  if (shape == "mountain") {
    minW = 100 / startCount;
    maxW = 100 / (startCount - 4);
    minH = 60;
    maxH = 100;
    drawMountain(colIndex);
    shapeContain.append(triangle);
  }
  if (shape == "city") {
    minW = 5;
    maxW = 100 / startCount;
    minH = 30;
    maxH = 100;
    drawCity(colIndex);
    if (Math.random() > 0.7) {
      shapeContain.style.marginLeft = "5px";
    } else shapeContain.style.marginLeft = "0px";
    shapeContain.append(city);
  }
  if (shape == "trees") {
    minW = 10;
    maxW = 30;
    minH = 70;
    maxH = 100;
    drawTree(colIndex);
    shapeContain.append(leaves, trunk);
  }
}
function shapePos1(shapeContain) {
  shapeContain.style.height = `${
    Math.floor(Math.random() * (maxH - minH + 1)) + minH
  }%`;
  shapeContain.style.width = `${
    Math.floor(Math.random() * (maxW - minW + 1)) + minW
  }%`;
}
function shapePos2(shapeContain) {
  shapeContain.style.position = "absolute";
  shapeContain.style.bottom = 0;
  shapeContain.style.left = `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`;
  shapeContain.style.height = `${
    Math.floor(Math.random() * (maxH - minH + 1)) + minH
  }%`;
  shapeContain.style.width = `${
    Math.floor(Math.random() * (maxW - minW + 1)) + minW
  }%`;
}
function drawShape(shapeContain) {
  shapeContain.setAttribute("class", shape);
  shapeCheck(shapeContain);
}
function shapeChange() {
  document.querySelector("p").innerHTML = text;
  layerCall();
  colIndex = 0;
  layers.forEach((l) => {
    l.replaceChildren();
    for (let i = 0; i < startCount; i++) {
      let shapeContain = document.createElement("div");
      drawShape(shapeContain);
      shapePos1(shapeContain);
      l.append(shapeContain);
    }
    colIndex++;
  });
}
function addShape() {
  if (Math.random() > 0.7) {
    moveClouds();
    document.querySelector("p").innerHTML += "s";
    let index = Math.floor(Math.random() * layers.length);
    l = layers[index];
    colIndex = index;
    let shapeContain = document.createElement("div");
    drawShape(shapeContain);
    shapePos2(shapeContain);
    l.append(shapeContain);
  }
}
function createLayers() {
  for (i = 1; i <= layerNum; i++) {
    let layer = document.createElement("div");
    layer.style.height = layerUnit * i + "vh";
    layer.setAttribute("class", "layers");
    layer.setAttribute("id", `layer${i}`);
    content.append(layer);
  }
}
function moveClouds() {
  console.log("move them");
  if (document.querySelectorAll(".cloud")) {
    clouds = document.querySelectorAll(".cloud");
    clouds.forEach((c) => {
      if (parseInt(c.style.right, 10) < 65) {
        c.style.right = parseInt(c.style.right, 10) + 1 + "vw";
      } else {
        c.style.right = "0vw";
        c.style.top = `${Math.floor(Math.random() * (25 - 0 + 1)) + 0}vh`;
      }
    });
  }
}
for (i = 0; i < 3; i++) {
  let cloud = document.createElement("div");
  cloud.setAttribute("class", "cloud");
  cloud.style.top = `${Math.floor(Math.random() * (25 - 0 + 1)) + 0}vh`;
  cloud.style.right = `${Math.floor(Math.random() * (60 - 10 + 1)) + 10}vw`;
  sky.append(cloud);
}
//EVENTS
//
//
redefineDimension(); //initial w and h
checkRatio(); //initial screen ratio
layerUnitCalc();
createLayers(); //layers made at the begining
shapeChange(); //drawing initial shape
window.addEventListener(
  "resize",
  function (event) {
    redefineDimension();
    fnCallState = checkRatio();
    fnCallState == 1 ? addShape() : shapeChange();
  },
  true
);
