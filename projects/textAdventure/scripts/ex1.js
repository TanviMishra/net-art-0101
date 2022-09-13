body = document.querySelector("body");
grid = document.querySelector("#grid");
rules = document.querySelector("#ruleButton");
rulePopup = document.querySelector("#rulePopup");
clickInfo = document.querySelector("#clickInfo");

let placeOptions = [
  "Garhkaru",
  "Khanlag",
  "Asu",
  "Bagpura",
  "Yellamanchilli",
  "Dalunang",
  "Jamungri",
  "Dingri",
  "Maker",
  "Junnar",
  "Kulia",
  "Bagarkhet",
  "Kairpura",
  "Surquja",
  "Remunda",
  "Pirapur",
  "Daboh",
  "Balur",
  "Ūncha",
  "Sarangda",
  "Bari",
  "Bilthra",
  "Panchagram",
  "Phancha",
  "Babhnoul",
  "Tarer",
  "Susera",
  "Madaora",
  "Birdpur",
  "Ghoom",
  "Kusang",
  "Gukhrai",
  "Bherbherigaon",
  "Bodupatia",
  "Mirya",
  "Bangoli",
  "Iritti",
  "Chhinkaura",
  "Kankhar",
  "Thuli",
  "Jabri",
  "Jindi",
  "Ghoga",
  "Khosarpur",
  "Pudupadi",
  "Tokibal",
  "Pahra",
  "Dharmastala",
  "Rangura",
  "Lamsuaka",
];
let hoverTextJson = {
  hints: [
    {
      type: "hint",
      srno: 0,
      hover: "0. Only pain is intellectual",
      text: "0. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 1,
      hover: "1. Only pain is intellectual",
      text: "1. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 2,
      hover: "2. Only pain is intellectual",
      text: "2. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 3,
      hover: "3. Only pain is intellectual",
      text: "3. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 4,
      hover: "4. Only pain is intellectual",
      text: "4. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 5,
      hover: "5. Only pain is intellectual",
      text: "5. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 6,
      hover: "6. Only pain is intellectual",
      text: "6. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 7,
      hover: "7. Only pain is intellectual",
      text: "7. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 8,
      hover: "8. Only pain is intellectual",
      text: "8. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      type: "hint",
      srno: 9,
      hover: "9. Only pain is intellectual",
      text: "9. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
  ],
  alerts: [
    {
      type: "alert",
      hover: "0. here is a lake",
      text: "A lake is an area filled with water, localized in a basin, surrounded by land, and distinct from any river or other outlet that serves to feed or drain the lake",
      alertText: "You're entering dangerous teritory",
    },
    {
      type: "alert",
      hover: "1. here is a lake",
      text: "A lake is an area filled with water, localized in a basin, surrounded by land, and distinct from any river or other outlet that serves to feed or drain the lake",
      alertText: "You're entering dangerous teritory",
    },
    {
      type: "alert",
      hover: "2. here is a lake",
      text: "A lake is an area filled with water, localized in a basin, surrounded by land, and distinct from any river or other outlet that serves to feed or drain the lake",
      alertText: "You're entering dangerous teritory",
    },
    {
      type: "alert",
      hover: "3. here is a lake",
      text: "A lake is an area filled with water, localized in a basin, surrounded by land, and distinct from any river or other outlet that serves to feed or drain the lake",
      alertText: "You're entering dangerous teritory",
    },
  ],
};
let tempCol = getComputedStyle(document.body);
let colorArr = [
  tempCol.getPropertyValue("--col1opt1"),
  tempCol.getPropertyValue("--col1opt2"),
  tempCol.getPropertyValue("--col2opt1"),
  tempCol.getPropertyValue("--col2opt2"),
  tempCol.getPropertyValue("--col2opt3"),
];
let placeArr = [];
let positionArr = [];
let hoverTextCount = 0;
let correctClueNumber = 0;
let gridSize = 2;
const clueMax = 1; //the total number of places clicked

for (i = 0; i < 68; i += gridSize) {
  for (j = 0; j < 44; j += gridSize) {
    positionArr.push([i, j]); //filling in all the posible values
  }
}
for (i = 0; i < 100; i += gridSize) {
  for (j = 0; j < 100; j += gridSize) {
    if (Math.random() > 0.4) {
      createGrid(i, j);
    }
  }
}
function createGrid(i, j) {
  let div = document.createElement("div");
  div.setAttribute("class", "grid"); //set class w css properties
  //   console.log(i, j);
  div.style.left = i + "vw"; //positioning div height
  div.style.top = j + "vw"; //positioning div width
  grid.append(div); //adding to html page
}
function openWindow(
  url = "https://www.geeksforgeeks.org/how-to-open-url-in-new-tab-using-javascript/"
) {
  document.open("https://www.google.com", "_blank");
  // document.write("<h1>You Won</h1>");
  // document.close();
}
function doubleClickEvents(type, div, dblText = "null") {
  if (type == "hints") {
    console.log(parseInt(div.id), correctClueNumber);
    parseInt(div.id) == correctClueNumber
      ? correctClueNumber++
      : (correctClueNumber = 0);
    correctClueNumber == clueMax ? openWindow() : console.log("waiting");
  } else if (type == "alerts") {
    alert(dblText);
  } else if (type == "urls") {
    console.log(dblText);
  }
}
class placeClass {
  constructor(type, index = 0, alert = "null", url = "null") {
    this.positon = Math.floor(Math.random() * (positionArr.length - 1)); //used in arrUpdate() this.positon = positionArr.length - 1; //for tests
    this.width = positionArr[this.positon][0];
    this.height = positionArr[this.positon][1];
    this.placePosition = Math.floor(Math.random() * (placeOptions.length - 1)); //used in arrUpdate() choose a random place position to remove later
    this.placeName = placeOptions[this.placePosition]; //place name from array
    this.type = type; //adding the type to the constructor
    if (type == "hints") {
      this.clue = hoverTextCount; //exclusive property
      this.hoverText = hoverTextJson.hints[this.clue].hover;
      this.infoText = hoverTextJson.hints[this.clue].text;
      this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]; //random col selector
    } else if (type == "alerts") {
      this.hoverText = hoverTextJson.alerts[index].hover;
      this.infoText = hoverTextJson.alerts[index].text;
      this.alertText = hoverTextJson.alerts[index].alertText; //exclusive property
      this.color = "#0000ff"; //hard coded blue
    } else if (type == "urls") {
      console.log("urls");
      this.hoverText = hoverTextJson.urls[index].hover;
      this.infoText = hoverTextJson.urls[index].text;
      this.urlText = hoverTextJson.urls[index].url; //exclusive property
      this.color = "#ff00ff"; //hard coded purple
    }
  }
  displayParameters() {
    console.log(
      this.positon,
      this.width,
      this.height,
      this.placePosition,
      this.placeName,
      this.color,
      // this.clue, //type==hint
      this.alertText, //type==alert
      // this.urlText, //type==url
      this.hoverText,
      this.infoText
    );
  }
  arrUpdate() {
    positionArr.splice(this.positon, 1);
    placeOptions.splice(this.placePosition, 1);
  }
  //majority of fn take place below:
  //a. all event litsteners here (click, dblclick, hover)
  //b. adding infoText to the clickInfo div
  //c. creating the cityPixel divs and assigning top and left
  setDiv() {
    let div = document.createElement("div");
    let place = this.placeName; //info that goes into the clickInfo div
    let type = this.type; //info that goes into the clickInfo div
    let text = this.infoText; //info for doubleClick
    let dblText;
    if (this.type == "alerts") dblText = this.alertText;
    if (this.type == "urls") dblText = this.urlText;
    if (this.type == "hints") dblText = "null";
    div.setAttribute("class", "cityPixel"); //set class w css properties
    if (this.type == "hints") div.setAttribute("id", this.clue); //set id for identification and search
    div.style.top = this.height + "vw"; //positioning div height
    div.style.left = this.width + "vw"; //positioning div width
    div.style.backgroundColor = this.color;
    if (Math.random() > 0.7) div.style.borderRadius = "50%";
    body.append(div); //adding to html page
    //ALL EVENT LISTENERS
    div.addEventListener("dblclick", function () {
      doubleClickEvents(type, div, dblText);
    });
    div.addEventListener("mouseover", function () {
      var hover = this.nextElementSibling;
      hover.style.display = "block";
    });
    div.addEventListener("mouseout", function () {
      var hover = this.nextElementSibling;
      hover.style.display = "none";
    });
    div.addEventListener("click", function () {
      clickInfo.innerHTML = place; //adding to html element clickInfo
      clickInfo.innerHTML += text; //adding to html element clickInfo
    });
  }
  setHoverDiv() {
    hoverTextCount++;
    let div = document.createElement("div");
    div.innerHTML = this.hoverText; //setting place name
    div.style.display = "none";
    div.setAttribute("class", "hoverText"); //set class w css properties
    div.style.top = this.height + 1.5 + "vw"; //positioning div height
    div.style.left = this.width + 1.5 + "vw"; //positioning div width
    body.append(div); //adding to html page
  }
}
for (i = 0; i < hoverTextJson.hints.length; i++) {
  place = new placeClass("hints");
  place.arrUpdate();
  place.setDiv();
  place.setHoverDiv();
}
for (i = 0; i < hoverTextJson.alerts.length; i++) {
  place = new placeClass("alerts", i);
  // place.displayParameters();
  place.arrUpdate();
  place.setDiv();
  place.setHoverDiv();
}
rulePopup.style.display = "none"; //hide popup at beginning
rules.addEventListener("click", function () {
  var div = this.nextElementSibling;
  div.style.display == "block"
    ? (div.style.display = "none")
    : (div.style.display = "block");
});
