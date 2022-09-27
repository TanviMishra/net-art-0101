let width, height, shape, layerUnit, layers, tempCol;
let layerNum = 5;
ctArr = ["#262626", "#333333", "#4d4d4d", "#666666", "#808080"];
mntArr = ["#42210b", "#603813", "#754c24", "#8c6239", "#a67c52"];
treeArr = ["#004924", "#006837", "#007c3e", "#009245", "#39b54a", "#7cb539"];
let content = document.querySelector("#content");
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
    $("body").css("background", "#c69c6d");
    state = "mountain";
  } else if (height / width < 0.8) {
    //horizontal view
    $("body").css("background", "#8cc63f");
    state = "trees";
  } else {
    //squarish
    $("body").css("background", "#999999");
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
  triangle.style.backgroundColor = mntArr[colIndex];
}
function drawTree(col) {
  col2 = col + 1;
  leaves = document.createElement("div");
  leaves.setAttribute("class", "leaves");
  let radius = "50%";
  let height = "50%";
  leaves.style.width = radius;
  leaves.style.height = radius;
  leaves.style.backgroundColor = treeArr[col2];
  trunk = document.createElement("div");
  trunk.style.width = "10px";
  trunk.style.height = height;
  trunk.setAttribute("class", "trunk");
  trunk.style.backgroundColor = treeArr[col];
}
function drawCity() {
  city = document.createElement("div");
  city.setAttribute("class", "city");
  city.style.backgroundColor = ctArr[colIndex];
}
function shapeCheck(shapeContain) {
  if (shape == "mountain") {
    drawMountain(colIndex);
    shapeContain.append(triangle);
  }
  if (shape == "city") {
    drawCity(colIndex);
    if (Math.random() > 0.7) {
      shapeContain.style.marginLeft = "5px";
    } else shapeContain.style.marginLeft = "0px";
    shapeContain.append(city);
  }
  if (shape == "trees") {
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
  shapeContain.style.left = `${
    Math.floor(Math.random() * (100 - 0 + 1)) + 0
  }vw`;
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
